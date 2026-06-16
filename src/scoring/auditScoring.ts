import type { QuestionItem } from "../types";
import { buildCoverageReport } from "./fairnessCheck";

export function auditScoring(questions: QuestionItem[]): void {
  const isLocal = typeof window !== "undefined" && ["localhost", "127.0.0.1"].includes(window.location.hostname);
  if (!isLocal) return;
  const report = buildCoverageReport(questions);
  if (report.warnings.length) {
    console.warn("Rasi Diri coverage report tahap ini", report);
  }
}
