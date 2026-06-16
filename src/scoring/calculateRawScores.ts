import type { QuestionItem, RawScores, UserAnswer } from "../types";
import { calculateItemAnswer } from "./calculateItemAnswer";
import { createEmptyRawScores, SCORE_SYSTEMS } from "./scoreSchema";

export function mergeRawScores(base: RawScores, addition: RawScores): RawScores {
  SCORE_SYSTEMS.forEach((system) => {
    Object.entries(addition[system]).forEach(([key, value]) => {
      base[system][key] = (base[system][key] ?? 0) + value;
    });
  });
  Object.entries(addition._meta).forEach(([key, value]) => {
    base._meta[key] = (base._meta[key] ?? 0) + value;
  });
  return base;
}

export function calculateRawScores(questions: QuestionItem[], answers: UserAnswer[]): RawScores {
  const raw = createEmptyRawScores();
  const questionMap = new Map(questions.map((question) => [question.id, question]));

  answers.forEach((answer) => {
    const question = questionMap.get(answer.questionId);
    if (!question) return;
    const itemScores = calculateItemAnswer(question, answer);
    mergeRawScores(raw, itemScores);
  });

  raw._meta.totalQuestions = questions.length;
  raw._meta.totalAnswers = answers.length;
  raw._meta.completionRatio = questions.length > 0 ? answers.length / questions.length : 0;
  return raw;
}
