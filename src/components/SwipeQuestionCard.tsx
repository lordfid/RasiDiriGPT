import { useEffect } from "react";
import type { QuestionItem, UserAnswer } from "../types";

type SwipeQuestionCardProps = {
  question: QuestionItem;
  onAnswer: (answer: UserAnswer) => void;
};

export function SwipeQuestionCard({ question, onAnswer }: SwipeQuestionCardProps) {
  const submit = (side: NonNullable<UserAnswer["side"]>) => {
    onAnswer({ questionId: question.id, kind: question.kind, answerKind: side === "left" || side === "right" ? side : side, side, timestamp: Date.now() });
  };

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "a") submit("left");
      if (key === "d") submit("right");
      if (key === "w") submit("both");
      if (key === "s") submit("neither");
      if (key === "t") submit("depends");
      if (key === "l") submit("skip");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [question.id]);

  return (
    <article className="question-card">
      <p className="question-kind">Pilihan dua arah</p>
      <h2>{question.prompt}</h2>
      <p className="instruction">{question.instruction}</p>
      <div className="swipe-grid">
        <button className="option-card" onClick={() => submit("left")}>{question.left?.text}</button>
        <button className="option-card" onClick={() => submit("right")}>{question.right?.text}</button>
      </div>
      <div className="small-actions">
        <button onClick={() => submit("both")}>Dua-duanya</button>
        <button onClick={() => submit("neither")}>Tidak dua-duanya</button>
        <button onClick={() => submit("depends")}>Tergantung</button>
        <button onClick={() => submit("skip")}>Lewati</button>
      </div>
    </article>
  );
}
