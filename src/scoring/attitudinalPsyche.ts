import type { NormalizedScores, RankedScore } from "../types";
import { rankBucket } from "./normalizeScores";

export function calculateAttitudinalPsyche(normalized: NormalizedScores): RankedScore[] {
  const ap = normalized.attitudinalPsyche ?? {};
  const aspects = {
    L: (ap.L_confident ?? 50) + (ap.L_flexible ?? 50) - (ap.L_insecure ?? 0) * 0.35,
    E: (ap.E_confident ?? 50) + (ap.E_flexible ?? 50) - (ap.E_insecure ?? 0) * 0.35,
    F: (ap.F_confident ?? 50) + (ap.F_flexible ?? 50) - (ap.F_insecure ?? 0) * 0.35,
    V: (ap.V_confident ?? 50) + (ap.V_flexible ?? 50) - (ap.V_insecure ?? 0) * 0.35
  };
  return rankBucket(aspects, 4);
}
