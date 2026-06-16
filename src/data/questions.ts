import type { QuestionItem } from "../types";
import { CORE_QUESTIONS } from "./questionItemsCore";
import { PREFERENCE_QUESTIONS } from "./questionItemsPreference";
import { RELATIONSHIP_QUESTIONS } from "./questionItemsRelationship";
import { STRESS_QUESTIONS } from "./questionItemsStress";
import { VALUES_QUESTIONS } from "./questionItemsValues";
import { WORK_QUESTIONS } from "./questionItemsWork";
import { TIE_BREAK_QUESTIONS } from "./questionItemsTieBreak";

export const BASE_QUESTIONS: QuestionItem[] = [
  ...CORE_QUESTIONS,
  ...PREFERENCE_QUESTIONS,
  ...RELATIONSHIP_QUESTIONS,
  ...STRESS_QUESTIONS,
  ...VALUES_QUESTIONS,
  ...WORK_QUESTIONS,
];

// Revisi ini sengaja memakai satu format utama: pilihan dua sisi.
// Tie-break ditempatkan di akhir sebagai pendalaman, tetap forcedChoice.
export const QUESTIONS: QuestionItem[] = [
  ...BASE_QUESTIONS,
  ...TIE_BREAK_QUESTIONS,
];

export const FINAL_COVERAGE_QUESTIONS: QuestionItem[] = [];
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
    if (item.kind !== "forcedChoice") warnings.push(`${item.id} bukan forcedChoice.`);
    if (!item.left || !item.right) warnings.push(`${item.id} tidak punya left/right.`);
    if (!item.options.length) warnings.push(`${item.id} tidak punya opsi.`);
    if (!item.targetSystems.length) warnings.push(`${item.id} tidak punya targetSystems.`);
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
