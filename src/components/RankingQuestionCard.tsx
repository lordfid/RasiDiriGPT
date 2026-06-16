import { useState } from "react";
import type { QuestionItem, UserAnswer } from "../types";

type RankingQuestionCardProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
};

export function RankingQuestionCard({ question, onAnswer }: RankingQuestionCardProps) {
  const [order, setOrder] = useState(question.options.map((option) => option.id));

  const move = (index: number, direction: -1 | 1) => {
    const nextIndex = index + direction;
    if (nextIndex < 0 || nextIndex >= order.length) return;
    setOrder((current) => {
      const clone = [...current];
      [clone[index], clone[nextIndex]] = [clone[nextIndex], clone[index]];
      return clone;
    });
  };

  const optionById = new Map(question.options.map((option) => [option.id, option]));

  return (
    <article className="question-card">
      <p className="question-kind">Urutkan pilihan</p>
      <h2>{question.prompt}</h2>
      <p className="instruction">{question.instruction}</p>
      <div className="ranking-list">
        {order.map((id, index) => (
          <div className="ranking-row" key={id}>
            <span className="rank-number">{index + 1}</span>
            <span>{optionById.get(id)?.text}</span>
            <div className="rank-actions">
              <button onClick={() => move(index, -1)} disabled={index === 0}>↑</button>
              <button onClick={() => move(index, 1)} disabled={index === order.length - 1}>↓</button>
            </div>
          </div>
        ))}
      </div>
      <button className="primary-button full" onClick={() => onAnswer({ questionId: question.id, kind: question.kind, answerKind: "rank", rankedOptionIds: order, timestamp: Date.now() })}>Simpan urutan</button>
    </article>
  );
}
