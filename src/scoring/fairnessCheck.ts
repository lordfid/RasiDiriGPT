import type { CoverageReport, QuestionItem, TypologySystem } from "../types";
import { COVERAGE_MINIMUMS } from "./scoringGuide";

const THEORY_HINTS = [
  "intuitif",
  "introvert",
  "extrovert",
  "logis",
  "emosional",
  "efisiensi",
  "harmoni",
  "fungsi kognitif",
  "mbti",
  "enneagram"
];

function addPoint(report: CoverageReport, system: string, key: string, value: number): void {
  const points = Math.abs(value);
  report.totals[system] = (report.totals[system] ?? 0) + points;
  report.bySystem[system] = report.bySystem[system] ?? {};
  report.bySystem[system][key] = (report.bySystem[system][key] ?? 0) + points;
}

export function buildCoverageReport(questions: QuestionItem[]): CoverageReport {
  const report: CoverageReport = { totals: {}, bySystem: {}, warnings: [] };
  const ids = new Set<string>();

  questions.forEach((question) => {
    if (ids.has(question.id)) report.warnings.push(`Duplicate id: ${question.id}`);
    ids.add(question.id);
    if (!question.targetSystems.length) report.warnings.push(`${question.id} tidak punya targetSystems.`);
    if (question.kind === "multiChoice" && !question.maxSelect) report.warnings.push(`${question.id} multiChoice tanpa maxSelect.`);
    if (question.kind === "ranking" && question.options.length < 5) report.warnings.push(`${question.id} ranking kurang dari 5 opsi.`);

    const visibleText = `${question.prompt} ${question.options.map((option) => option.text).join(" ")}`.toLowerCase();
    THEORY_HINTS.forEach((hint) => {
      if (visibleText.includes(hint)) report.warnings.push(`${question.id} mengandung istilah terlalu teoritis: ${hint}`);
    });

    question.options.forEach((option) => {
      if (!option.weights) report.warnings.push(`${question.id}.${option.id} tanpa weights.`);
      if (!option.weights.evidence) report.warnings.push(`${question.id}.${option.id} tanpa evidence.`);
      if (!option.weights.positive) report.warnings.push(`${question.id}.${option.id} tanpa positive.`);
      if (!option.weights.negative) report.warnings.push(`${question.id}.${option.id} tanpa negative.`);
      if (typeof option.weights.reliability !== "number") report.warnings.push(`${question.id}.${option.id} tanpa reliability.`);
      Object.entries(option.weights).forEach(([system, map]) => {
        if (!map || typeof map !== "object") return;
        Object.entries(map as Record<string, number>).forEach(([key, value]) => addPoint(report, system, key, value));
      });
    });
  });

  Object.entries(COVERAGE_MINIMUMS).forEach(([system, minimum]) => {
    const total = report.totals[system] ?? 0;
    if (total < minimum) report.warnings.push(`Coverage tahap ini belum penuh: ${system} ${Math.round(total)}/${minimum}.`);
  });

  return report;
}

export function fairnessCheck(questions: QuestionItem[]): string[] {
  return buildCoverageReport(questions).warnings;
}
