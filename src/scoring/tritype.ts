import type { NormalizedScores } from "../types";
import { TRITYPE_CENTERS } from "./scoringGuide";

function topFrom(keys: string[], scores: Record<string, number> | undefined): string {
  return keys.map((key) => ({ key, score: scores?.[key] ?? 0 })).sort((a, b) => b.score - a.score)[0]?.key ?? keys[0];
}

export function calculateTritype(normalized: NormalizedScores): string {
  const e = normalized.enneagram;
  return `${topFrom(TRITYPE_CENTERS.heart, e)}${topFrom(TRITYPE_CENTERS.head, e)}${topFrom(TRITYPE_CENTERS.gut, e)}`;
}
