import type { QuestionItem, UserAnswer } from "../types";
import { ChoiceQuestionCard } from "./ChoiceQuestionCard";
import { RankingQuestionCard } from "./RankingQuestionCard";
import { SwipeQuestionCard } from "./SwipeQuestionCard";

type QuestionRendererProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
  onSkip: () => void;
};

export function QuestionRenderer({ question, onAnswer, onSkip }: QuestionRendererProps) {
  const isForcedChoice = question.kind === "forcedChoice";
  return (
    <section>
      {isForcedChoice && <SwipeQuestionCard question={question} onAnswer={onAnswer} />}
      {(question.kind === "singleChoice" || question.kind === "multiChoice" || question.kind === "firstReaction" || question.kind === "hiddenReaction") && (
        <ChoiceQuestionCard question={question} onAnswer={onAnswer} />
      )}
      {question.kind === "ranking" && <RankingQuestionCard question={question} onAnswer={onAnswer} />}
      {/* Tidak tampilkan tombol skip global untuk forcedChoice — sudah ada tombol Lewati di SwipeQuestionCard */}
      {!isForcedChoice && (
        <button className="text-button" onClick={onSkip}>Lewati pertanyaan ini</button>
      )}
    </section>
  );
}
