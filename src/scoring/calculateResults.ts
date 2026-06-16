import type { FinalResult, QuestionItem, UserAnswer } from "../types";
import { calculateRawScores } from "./calculateRawScores";
import { normalizeScores, rankBucket } from "./normalizeScores";
import { calculateConfidence } from "./confidence";
import { calculateEnneagram } from "./enneagram";
import { calculateInstinctStacking } from "./instinct";
import { calculateMBTI, calculateFunctionRoles } from "./mbtiStack";
import { calculateTritype } from "./tritype";
import { calculateAttitudinalPsyche } from "./attitudinalPsyche";
import { calculateQuadra, calculateSocionicsEstimate } from "./socionics";
import { buildLocalNarration } from "../services/resultNarration";

export function calculateResults(questions: QuestionItem[], answers: UserAnswer[]): FinalResult {
  const raw = calculateRawScores(questions, answers);
  const normalized = normalizeScores(raw);
  const mbti = calculateMBTI(normalized);
  const enneagram = calculateEnneagram(normalized);
  const instinctStacking = calculateInstinctStacking(normalized);
  const confidence = calculateConfidence(raw, normalized);
  const functionRoles = calculateFunctionRoles(normalized);
  const result: FinalResult = {
    summary: "",
    topMBTI: mbti.topThree,
    cognitiveRanking: rankBucket(normalized.cognitive, 8),
    stackFit: mbti.stackFit,
    functionRoles,
    shadowRoles: {
      opposing: functionRoles.opposing ?? "belum cukup jelas",
      critical: functionRoles.critical ?? "belum cukup jelas",
      trickster: functionRoles.trickster ?? "belum cukup jelas",
      transformative: functionRoles.transformative ?? "belum cukup jelas"
    },
    enneagram,
    wing: enneagram.wing,
    instinctStacking,
    tritype: calculateTritype(normalized),
    bigFive: rankBucket(normalized.bigFive, 5),
    hexaco: rankBucket(normalized.hexaco, 6),
    socionics: calculateSocionicsEstimate(normalized),
    quadra: calculateQuadra(normalized),
    temperament: rankBucket(normalized.temperament, 4),
    classicalTemperament: rankBucket(normalized.classicalTemperament, 4),
    attitudinalPsyche: calculateAttitudinalPsyche(normalized),
    disc: rankBucket(normalized.disc, 4),
    riasec: rankBucket(normalized.riasec, 6),
    moralStyle: rankBucket(normalized.moral, 5),
    decisionStyle: rankBucket(normalized.decision, 5),
    conflictStyle: rankBucket(normalized.conflict, 5),
    communicationStyle: rankBucket(normalized.communication, 5),
    relationshipTendency: rankBucket(normalized.relationship, 6),
    stressResponse: rankBucket(normalized.stress, 6),
    coreFear: rankBucket(normalized.coreFear, 5),
    coreDesire: rankBucket(normalized.coreDesire, 5),
    valuesRanking: rankBucket(normalized.values, 8),
    workStyle: rankBucket(normalized.work, 6),
    learningStyle: rankBucket(normalized.learning, 6),
    defensePattern: rankBucket(normalized.defense, 6),
    idealPartnerTendency: rankBucket(normalized.idealPartner, 6),
    preferredLoveStyle: rankBucket(normalized.loveStyle, 6),
    preferredEnvironment: rankBucket(normalized.environment, 6),
    confidence,
    notes: confidence.reasons,
    completedAt: new Date().toISOString()
  };
  result.summary = buildLocalNarration(result);
  return result;
}
