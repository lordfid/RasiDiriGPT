import type { FinalResult, QuestionItem } from "../types";
import { TIE_BREAK_QUESTIONS } from "../data/questions";

function isClose(items: { score: number }[], gap = 8): boolean {
  return items.length >= 2 && Math.abs(items[0].score - items[1].score) <= gap;
}

export function suggestTieBreakQuestions(result: FinalResult): QuestionItem[] {
  const suggested = new Set<string>();
  if (isClose(result.topMBTI)) suggested.add("tie_001");
  if (isClose(result.enneagram.topThree)) suggested.add("tie_002");
  if (isClose(result.instinctStacking)) suggested.add("tie_003");
  return TIE_BREAK_QUESTIONS.filter((question) => suggested.has(question.id));
}
