import type { QuestionItem, UserAnswer } from "../types";
import { SwipeQuestionCard } from "./SwipeQuestionCard";

type QuestionRendererProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
  onSkip: () => void;
};

export function QuestionRenderer({ question, onAnswer }: QuestionRendererProps) {
  return <SwipeQuestionCard question={question} onAnswer={onAnswer} />;
}
