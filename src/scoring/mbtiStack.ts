import type { MBTIResult, MBTIType, NormalizedScores, RankedScore } from "../types";
import { MBTI_STACKS } from "./scoringGuide";
import { rankBucket } from "./normalizeScores";

const ROLE_MULTIPLIER = [1, 0.78, 0.48, 0.32];

export function calculateMBTI(normalized: NormalizedScores): MBTIResult {
  const cognitive = normalized.cognitive ?? {};
  const axis = normalized.mbtiAxis ?? {};
  const stackFit: RankedScore[] = (Object.entries(MBTI_STACKS) as [MBTIType, string[]][]).map(([type, stack]) => {
    const functionScore = stack.reduce((sum, fn, index) => sum + (cognitive[fn] ?? 50) * ROLE_MULTIPLIER[index], 0);
    const axisScore =
      (type.includes("I") ? axis.I ?? 50 : axis.E ?? 50) * 0.12 +
      (type.includes("N") ? axis.N ?? 50 : axis.S ?? 50) * 0.12 +
      (type.includes("T") ? axis.T ?? 50 : axis.F ?? 50) * 0.12 +
      (type.includes("J") ? axis.J ?? 50 : axis.P ?? 50) * 0.12;
    return { key: type, score: Math.round(functionScore * 0.55 + axisScore) };
  }).sort((a, b) => b.score - a.score);

  return {
    top: (stackFit[0]?.key ?? "INFJ") as MBTIType,
    topThree: stackFit.slice(0, 3),
    stackFit: stackFit.slice(0, 8)
  };
}

export function calculateFunctionRoles(normalized: NormalizedScores): Record<string, string> {
  const ranking = rankBucket(normalized.cognitive, 8);
  const roleNames = ["dominant", "auxiliary", "tertiary", "inferior", "opposing", "critical", "trickster", "transformative"];
  return Object.fromEntries(ranking.map((item, index) => [roleNames[index] ?? `role_${index + 1}`, item.key]));
}
