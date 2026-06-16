import type { QuestionItem } from "../types";
import { CORE_QUESTIONS } from "./questionItemsCore";
import { PREFERENCE_QUESTIONS } from "./questionItemsPreference";
import { RELATIONSHIP_QUESTIONS } from "./questionItemsRelationship";
import { STRESS_QUESTIONS } from "./questionItemsStress";
import { VALUES_QUESTIONS } from "./questionItemsValues";
import { WORK_QUESTIONS } from "./questionItemsWork";
import { TIE_BREAK_QUESTIONS as BASE_TIE_BREAK_QUESTIONS } from "./questionItemsTieBreak";
import { FINAL_MBTI_QUESTIONS } from "./questionItemsFinalMBTI";
import { FINAL_TRAIT_QUESTIONS } from "./questionItemsFinalTraits";
import { FINAL_ENNEAGRAM_QUESTIONS } from "./questionItemsFinalEnneagram";
import { FINAL_SOCIONICS_TEMPERAMENT_QUESTIONS } from "./questionItemsFinalSocionicsTemperament";
import { FINAL_AP_QUESTIONS } from "./questionItemsFinalAP";
import { FINAL_DISC_RIASEC_QUESTIONS } from "./questionItemsFinalDiscRiasec";
import { FINAL_MORAL_DECISION_QUESTIONS } from "./questionItemsFinalMoralDecision";
import { FINAL_CONFLICT_COMMUNICATION_QUESTIONS } from "./questionItemsFinalConflictCommunication";
import { FINAL_RELATIONSHIP_STRESS_QUESTIONS } from "./questionItemsFinalRelationshipStress";
import { FINAL_VALUES_WORK_LEARNING_QUESTIONS } from "./questionItemsFinalValuesWorkLearning";
import { FINAL_IDEAL_PREFERENCE_QUESTIONS } from "./questionItemsFinalIdealPreference";
import { FINAL_TIE_BREAK_QUESTIONS } from "./questionItemsFinalTieBreak";

export const BASE_QUESTIONS: QuestionItem[] = [
  ...CORE_QUESTIONS,
  ...PREFERENCE_QUESTIONS,
  ...RELATIONSHIP_QUESTIONS,
  ...STRESS_QUESTIONS,
  ...VALUES_QUESTIONS,
  ...WORK_QUESTIONS,
];

export const FINAL_COVERAGE_QUESTIONS: QuestionItem[] = [
  ...FINAL_MBTI_QUESTIONS,
  ...FINAL_TRAIT_QUESTIONS,
  ...FINAL_ENNEAGRAM_QUESTIONS,
  ...FINAL_SOCIONICS_TEMPERAMENT_QUESTIONS,
  ...FINAL_AP_QUESTIONS,
  ...FINAL_DISC_RIASEC_QUESTIONS,
  ...FINAL_MORAL_DECISION_QUESTIONS,
  ...FINAL_CONFLICT_COMMUNICATION_QUESTIONS,
  ...FINAL_RELATIONSHIP_STRESS_QUESTIONS,
  ...FINAL_VALUES_WORK_LEARNING_QUESTIONS,
  ...FINAL_IDEAL_PREFERENCE_QUESTIONS,
];

// Semua pertanyaan tie-break digabungkan
export const TIE_BREAK_QUESTIONS: QuestionItem[] = [
  ...BASE_TIE_BREAK_QUESTIONS,
  ...FINAL_TIE_BREAK_QUESTIONS,
];

// QUESTIONS = seluruh pertanyaan utama + tie-break (aktif saat tes berjalan)
// Tie-break diletakkan di akhir sehingga terasa sebagai "pendalaman final"
export const QUESTIONS: QuestionItem[] = [
  ...BASE_QUESTIONS,
  ...FINAL_COVERAGE_QUESTIONS,
  ...TIE_BREAK_QUESTIONS,
];

export const ALL_QUESTIONS: QuestionItem[] = QUESTIONS;

export function getDuplicateQuestionIds(items: QuestionItem[] = ALL_QUESTIONS): string[] {
  const seen = new Set<string>();
  const dupes = new Set<string>();
  items.forEach((item) => {
    if (seen.has(item.id)) dupes.add(item.id);
    seen.add(item.id);
  });
  return [...dupes];
}

export function assertQuestionIntegrity(items: QuestionItem[] = ALL_QUESTIONS): string[] {
  const warnings: string[] = [];
  getDuplicateQuestionIds(items).forEach((id) => warnings.push(`Duplicate question id: ${id}`));
  items.forEach((item) => {
    if (!item.options.length) warnings.push(`${item.id} tidak punya opsi.`);
    if (!item.targetSystems.length) warnings.push(`${item.id} tidak punya targetSystems.`);
    if (item.kind === "multiChoice" && !item.maxSelect) warnings.push(`${item.id} multiChoice tanpa maxSelect.`);
    if (item.kind === "ranking" && item.options.length < 5) warnings.push(`${item.id} ranking kurang dari 5 opsi.`);
    item.options.forEach((option) => {
      if (!option.weights) warnings.push(`${item.id}.${option.id} tanpa weights.`);
      if (!option.weights.evidence) warnings.push(`${item.id}.${option.id} tanpa evidence.`);
      if (!option.weights.positive) warnings.push(`${item.id}.${option.id} tanpa positive.`);
      if (!option.weights.negative) warnings.push(`${item.id}.${option.id} tanpa negative.`);
      if (typeof option.weights.reliability !== "number") warnings.push(`${item.id}.${option.id} tanpa reliability.`);
    });
  });
  return warnings;
}
