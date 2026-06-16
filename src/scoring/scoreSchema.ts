import type { RawScores, TypologySystem } from "../types";

export const SCORE_SYSTEMS: TypologySystem[] = [
  "cognitive",
  "mbtiAxis",
  "mbtiTypeSupport",
  "mbtiStack",
  "stackRole",
  "shadowRole",
  "enneagram",
  "wing",
  "instinct",
  "tritype",
  "socionics",
  "quadra",
  "temperament",
  "classicalTemperament",
  "bigFive",
  "hexaco",
  "attitudinalPsyche",
  "disc",
  "riasec",
  "moral",
  "decision",
  "conflict",
  "communication",
  "relationship",
  "stress",
  "coreFear",
  "coreDesire",
  "values",
  "work",
  "learning",
  "defense",
  "idealPartner",
  "loveStyle",
  "environment",
  "evidence",
  "positive",
  "negative"
];

export function createEmptyRawScores(): RawScores {
  const base: Partial<RawScores> = { _meta: {} };
  SCORE_SYSTEMS.forEach((system) => {
    base[system] = {};
  });
  return base as RawScores;
}

export function addToBucket(bucket: Record<string, number>, key: string, amount: number): void {
  if (!Number.isFinite(amount)) return;
  bucket[key] = (bucket[key] ?? 0) + amount;
}

export function addScoreMap(target: Record<string, number>, source: Record<string, number> | undefined, multiplier = 1): void {
  if (!source) return;
  Object.entries(source).forEach(([key, value]) => addToBucket(target, key, value * multiplier));
}
