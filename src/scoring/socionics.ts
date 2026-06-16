import type { NormalizedScores, RankedScore } from "../types";
import { rankBucket } from "./normalizeScores";

export function calculateSocionicsEstimate(normalized: NormalizedScores): string {
  const topFunctions = rankBucket(normalized.cognitive, 2).map((item) => item.key).join("-");
  if (topFunctions.includes("Ni") && topFunctions.includes("Fe")) return "IEI / Beta NF tendency";
  if (topFunctions.includes("Ni") && topFunctions.includes("Te")) return "ILI / Gamma NT tendency";
  if (topFunctions.includes("Ne") && topFunctions.includes("Ti")) return "ILE / Alpha NT tendency";
  if (topFunctions.includes("Si") && topFunctions.includes("Fe")) return "SEI / Alpha SF tendency";
  return "Estimasi Socionics masih terbuka";
}

export function calculateQuadra(normalized: NormalizedScores): RankedScore[] {
  const c = normalized.cognitive ?? {};
  const quadra = {
    Alpha: (c.Ne ?? 50) + (c.Ti ?? 50) + (c.Si ?? 50) + (c.Fe ?? 50),
    Beta: (c.Fe ?? 50) + (c.Ni ?? 50) + (c.Se ?? 50) + (c.Ti ?? 50),
    Gamma: (c.Ni ?? 50) + (c.Te ?? 50) + (c.Se ?? 50) + (c.Fi ?? 50),
    Delta: (c.Si ?? 50) + (c.Te ?? 50) + (c.Ne ?? 50) + (c.Fi ?? 50)
  };
  return rankBucket(quadra, 4);
}
