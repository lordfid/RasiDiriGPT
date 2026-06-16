import type { QuestionItem, UserAnswer } from "../types";

type ChoiceQuestionCardProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
};

export function ChoiceQuestionCard({ question, onAnswer }: ChoiceQuestionCardProps) {
  return (
    <article className="question-card">
      <p className="question-kind">Pilihan</p>
      <h2>{question.prompt}</h2>
      <p className="instruction">Pilih jawaban yang paling terasa dekat.</p>
      <div className="choice-list">
        {question.options.map((option) => (
          <button
            className="choice-button"
            key={option.id}
            onClick={() => onAnswer({ questionId: question.id, kind: question.kind, answerKind: "choice", selectedOptionId: option.id, timestamp: Date.now() })}
          >
            {option.text}
          </button>
        ))}
      </div>
    </article>
  );
}
