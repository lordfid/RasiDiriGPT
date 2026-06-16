import type { QuestionItem, UserAnswer } from "../types";

type RankingQuestionCardProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
};

export function RankingQuestionCard({ question, onAnswer }: RankingQuestionCardProps) {
  return (
    <article className="question-card">
      <p className="question-kind">Pilihan</p>
      <h2>{question.prompt}</h2>
      <p className="instruction">Format ini tidak dipakai dalam versi Rasi Diri saat ini.</p>
      <button
        className="secondary-button"
        onClick={() => onAnswer({ questionId: question.id, kind: question.kind, answerKind: "skip", side: "skip", timestamp: Date.now() })}
      >
        Lewati
      </button>
    </article>
  );
}
