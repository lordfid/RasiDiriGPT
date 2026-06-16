import { useEffect, useMemo, useState } from "react";
import { QUESTIONS } from "./data/questions";
import type { FinalResult, UserAnswer } from "./types";
import { StartScreen } from "./components/StartScreen";
import { ProgressBar } from "./components/ProgressBar";
import { QuestionRenderer } from "./components/QuestionRenderer";
import { ResultPage } from "./components/ResultPage";
import { ThemeToggle } from "./components/ThemeToggle";
import { LoadingState } from "./components/LoadingState";
import { calculateResults } from "./scoring/calculateResults";
import { auditScoring } from "./scoring/auditScoring";
import {
  clearProgress,
  loadAnswers,
  loadCurrentIndex,
  loadLastResult,
  loadTheme,
  saveAnswers,
  saveCurrentIndex,
  saveLastResult,
  saveTheme
} from "./services/storage";

type Screen = "start" | "test" | "result";

export default function App() {
  const [screen, setScreen] = useState<Screen>("start");
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<FinalResult | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setAnswers(loadAnswers());
    setCurrentIndex(loadCurrentIndex());
    setTheme(loadTheme());
    setResult(loadLastResult());
    auditScoring(QUESTIONS);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    saveTheme(theme);
  }, [theme]);

  useEffect(() => {
    saveAnswers(answers);
    saveCurrentIndex(currentIndex);
  }, [answers, currentIndex]);

  const currentQuestion = QUESTIONS[currentIndex];
  const hasProgress = answers.length > 0 && currentIndex < QUESTIONS.length;

  const start = () => {
    clearProgress();
    setAnswers([]);
    setCurrentIndex(0);
    setResult(null);
    setScreen("test");
  };

  const continueTest = () => setScreen("test");

  const finish = (nextAnswers: UserAnswer[]) => {
    setLoading(true);
    window.setTimeout(() => {
      const nextResult = calculateResults(QUESTIONS, nextAnswers);
      setResult(nextResult);
      saveLastResult(nextResult);
      clearProgress();
      setLoading(false);
      setScreen("result");
    }, 80);
  };

  const answerQuestion = (answer: UserAnswer) => {
    const nextAnswers = [...answers.filter((item) => item.questionId !== answer.questionId), answer];
    setAnswers(nextAnswers);
    const nextIndex = currentIndex + 1;
    if (nextIndex >= QUESTIONS.length) {
      finish(nextAnswers);
    } else {
      setCurrentIndex(nextIndex);
    }
  };

  const skipQuestion = () => {
    if (!currentQuestion) return;
    answerQuestion({ questionId: currentQuestion.id, kind: currentQuestion.kind, answerKind: "skip", side: "skip", timestamp: Date.now() });
  };

  const back = () => {
    setCurrentIndex((index) => Math.max(0, index - 1));
  };

  const restart = () => {
    const ok = window.confirm("Ulangi Rasi Diri dari awal? Progress lama akan dihapus.");
    if (!ok) return;
    clearProgress();
    setAnswers([]);
    setCurrentIndex(0);
    setResult(null);
    setScreen("start");
  };

  const answeredIds = useMemo(() => new Set(answers.map((answer) => answer.questionId)), [answers]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <span className="brand">Rasi Diri</span>
        <ThemeToggle theme={theme} onToggle={() => setTheme((value) => value === "dark" ? "light" : "dark")} />
      </header>

      {screen === "start" && <StartScreen hasProgress={hasProgress} onStart={start} onContinue={continueTest} />}

      {screen === "test" && currentQuestion && (
        <main className="screen test-screen">
          <ProgressBar current={Math.min(currentIndex + 1, QUESTIONS.length)} total={QUESTIONS.length} />
          {answeredIds.has(currentQuestion.id) && <p className="muted">Pertanyaan ini sudah pernah dijawab. Jawaban baru akan menggantikannya.</p>}
          <QuestionRenderer question={currentQuestion} onAnswer={answerQuestion} onSkip={skipQuestion} />
          <div className="nav-actions">
            <button className="secondary-button" onClick={back} disabled={currentIndex === 0}>Kembali</button>
            <button className="text-button" onClick={restart}>Hapus progress</button>
          </div>
        </main>
      )}

      {loading && <LoadingState />}
      {screen === "result" && result && <ResultPage result={result} onRestart={restart} />}
    </div>
  );
}
