import { useState } from "react";
import type { QuestionItem, UserAnswer } from "../types";

type ChoiceQuestionCardProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
};

export function ChoiceQuestionCard({ question, onAnswer }: ChoiceQuestionCardProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const isMulti = question.kind === "multiChoice";
  const minSelect = question.minSelect ?? 1;
  const maxSelect = question.maxSelect ?? 1;
  const valid = isMulti ? selected.length >= minSelect && selected.length <= maxSelect : selected.length === 1;

  const toggle = (id: string) => {
    if (!isMulti) {
      setSelected([id]);
      return;
    }
    setSelected((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= maxSelect) return current;
      return [...current, id];
    });
  };

  const submit = () => {
    if (!valid) return;
    onAnswer({
      questionId: question.id,
      kind: question.kind,
      answerKind: isMulti ? "multi" : "choice",
      selectedOptionId: !isMulti ? selected[0] : undefined,
      selectedOptionIds: isMulti ? selected : undefined,
      timestamp: Date.now()
    });
  };

  return (
    <article className="question-card">
      <p className="question-kind">{question.kind === "firstReaction" ? "Reaksi pertama" : question.kind === "hiddenReaction" ? "Reaksi tersembunyi" : isMulti ? "Pilih beberapa" : "Pilih satu"}</p>
      <h2>{question.prompt}</h2>
      <p className="instruction">{question.instruction}</p>
      {isMulti && <p className="limit-note">Pilih maksimal {maxSelect}.</p>}
      <div className="option-list">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`option-row ${selected.includes(option.id) ? "selected" : ""}`}
            onClick={() => toggle(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button className="primary-button full" disabled={!valid} onClick={submit}>Lanjut</button>
    </article>
  );
}
