import type { NormalizedScores, RawScores, RankedScore } from "../types";
import { SCORE_SYSTEMS } from "./scoreSchema";

function normalizeBucket(bucket: Record<string, number>): Record<string, number> {
  const entries = Object.entries(bucket);
  if (!entries.length) return {};
  const values = entries.map(([, value]) => value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  if (max === min) {
    return Object.fromEntries(entries.map(([key]) => [key, max > 0 ? 75 : 50]));
  }
  return Object.fromEntries(entries.map(([key, value]) => [key, Math.round(((value - min) / (max - min)) * 100)]));
}

export function normalizeScores(raw: RawScores): NormalizedScores {
  const normalized: NormalizedScores = {};
  SCORE_SYSTEMS.forEach((system) => {
    normalized[system] = normalizeBucket(raw[system]);
  });
  normalized._meta = { ...raw._meta };
  return normalized;
}

export function rankBucket(bucket: Record<string, number> | undefined, limit = 5): RankedScore[] {
  if (!bucket) return [];
  return Object.entries(bucket)
    .map(([key, score]) => ({ key, score: Math.round(score) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}
