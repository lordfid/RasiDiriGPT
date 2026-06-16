import type { NormalizedScores, RankedScore } from "../types";
import { rankBucket } from "./normalizeScores";

export function calculateInstinctStacking(normalized: NormalizedScores): RankedScore[] {
  const ranked = rankBucket(normalized.instinct, 3);
  const fallback = ["sp", "sx", "so"].filter((key) => !ranked.some((item) => item.key === key)).map((key) => ({ key, score: 50 }));
  return [...ranked, ...fallback].slice(0, 3);
}
