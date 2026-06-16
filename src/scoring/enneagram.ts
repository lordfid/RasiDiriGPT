import type { EnneagramResult, NormalizedScores } from "../types";
import { ENNEAGRAM_WINGS } from "./scoringGuide";
import { rankBucket } from "./normalizeScores";

export function calculateEnneagram(normalized: NormalizedScores): EnneagramResult {
  const topThree = rankBucket(normalized.enneagram, 3);
  const type = (topThree[0]?.key ?? "6") as EnneagramResult["type"];
  const wingCandidates = ENNEAGRAM_WINGS[type] ?? [];
  const wingScores = wingCandidates
    .map((wing) => ({ key: wing, score: normalized.enneagram?.[wing] ?? 0 }))
    .sort((a, b) => b.score - a.score);
  const wing = `${type}w${wingScores[0]?.key ?? wingCandidates[0] ?? "5"}`;
  return { type, wing, topThree };
}
