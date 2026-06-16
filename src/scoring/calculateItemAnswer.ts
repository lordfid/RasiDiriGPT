import type { QuestionItem, QuestionOption, RawScores, ScoreWeight, UserAnswer } from "../types";
import { addScoreMap, createEmptyRawScores, SCORE_SYSTEMS } from "./scoreSchema";

function applyWeights(raw: RawScores, weights: ScoreWeight, multiplier: number): void {
  SCORE_SYSTEMS.forEach((system) => {
    const scoreMap = weights[system as keyof ScoreWeight];
    if (scoreMap && typeof scoreMap === "object") {
      addScoreMap(raw[system], scoreMap as Record<string, number>, multiplier);
    }
  });
  raw._meta.reliability = (raw._meta.reliability ?? 0) + (weights.reliability ?? 0.75) * Math.abs(multiplier);
  raw._meta.ambiguity = (raw._meta.ambiguity ?? 0) + (weights.ambiguity ?? 0);
  raw._meta.contradiction = (raw._meta.contradiction ?? 0) + (weights.contradiction ?? 0);
}

function findOption(question: QuestionItem, id?: string): QuestionOption | undefined {
  if (!id) return undefined;
  return question.options.find((option) => option.id === id);
}

export function calculateItemAnswer(question: QuestionItem, answer: UserAnswer): RawScores {
  const raw = createEmptyRawScores();
  raw._meta.answered = 1;
  raw._meta[question.kind] = 1;

  if (answer.answerKind === "skip" || answer.side === "skip") {
    raw._meta.skipped = 1;
    raw._meta[`skipped_${question.context.domain}`] = 1;
    return raw;
  }

  if (question.kind === "forcedChoice") {
    const left = question.left;
    const right = question.right;
    if (!left || !right) return raw;

    if (answer.side === "left") applyWeights(raw, left.weights, question.reliability);
    if (answer.side === "right") applyWeights(raw, right.weights, question.reliability);
    if (answer.side === "both") {
      applyWeights(raw, left.weights, question.reliability * 0.45);
      applyWeights(raw, right.weights, question.reliability * 0.45);
      raw._meta.both = (raw._meta.both ?? 0) + 1;
      raw.evidence.mixedPattern = (raw.evidence.mixedPattern ?? 0) + 1;
    }
    if (answer.side === "neither") {
      applyWeights(raw, left.weights, question.reliability * -0.15);
      applyWeights(raw, right.weights, question.reliability * -0.15);
      raw._meta.neither = (raw._meta.neither ?? 0) + 1;
      raw.evidence.nonIdentification = (raw.evidence.nonIdentification ?? 0) + 1;
    }
    if (answer.side === "depends") {
      applyWeights(raw, left.weights, question.reliability * 0.25);
      applyWeights(raw, right.weights, question.reliability * 0.25);
      raw._meta.depends = (raw._meta.depends ?? 0) + 1;
      raw.evidence.contextDependence = (raw.evidence.contextDependence ?? 0) + 1;
    }
    return raw;
  }

  if (question.kind === "multiChoice") {
    const ids = answer.selectedOptionIds ?? [];
    if (question.maxSelect && ids.length > question.maxSelect) {
      raw._meta.invalid = 1;
      return raw;
    }
    const multiplier = ids.length <= 1 ? 1 : ids.length === 2 ? 0.75 : 0.6;
    ids.forEach((id) => {
      const option = findOption(question, id);
      if (option) applyWeights(raw, option.weights, question.reliability * multiplier);
    });
    return raw;
  }

  if (question.kind === "ranking") {
    const multipliers = answer.rankedOptionIds?.length === 6
      ? [1, 0.7, 0.4, 0.1, -0.2, -0.45]
      : [1, 0.65, 0.25, -0.2, -0.4];
    (answer.rankedOptionIds ?? []).forEach((id, index) => {
      const option = findOption(question, id);
      const multiplier = multipliers[index] ?? -0.2;
      if (option) applyWeights(raw, option.weights, question.reliability * multiplier);
    });
    return raw;
  }

  const option = findOption(question, answer.selectedOptionId);
  if (option) applyWeights(raw, option.weights, question.reliability);
  return raw;
}
