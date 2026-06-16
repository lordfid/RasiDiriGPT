import type { FinalResult, UserAnswer } from "../types";

const KEYS = {
  answers: "rasi_diri_answers",
  currentIndex: "rasi_diri_current_index",
  theme: "rasi_diri_theme",
  lastResult: "rasi_diri_last_result"
};

function safeGet<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function safeSet(key: string, value: unknown): void {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // localStorage bisa gagal di mode privat; aplikasi tetap berjalan.
  }
}

export function saveAnswers(answers: UserAnswer[]): void {
  safeSet(KEYS.answers, answers);
}

export function loadAnswers(): UserAnswer[] {
  return safeGet<UserAnswer[]>(KEYS.answers, []);
}

export function saveCurrentIndex(index: number): void {
  safeSet(KEYS.currentIndex, index);
}

export function loadCurrentIndex(): number {
  return safeGet<number>(KEYS.currentIndex, 0);
}

export function saveTheme(theme: "dark" | "light"): void {
  safeSet(KEYS.theme, theme);
}

export function loadTheme(): "dark" | "light" {
  // Deteksi preferensi sistem jika belum pernah diset
  const saved = safeGet<"dark" | "light" | null>(KEYS.theme, null);
  if (saved) return saved;
  if (typeof window !== "undefined" && window.matchMedia?.("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  return "dark";
}

export function saveLastResult(result: FinalResult): void {
  safeSet(KEYS.lastResult, result);
}

export function loadLastResult(): FinalResult | null {
  return safeGet<FinalResult | null>(KEYS.lastResult, null);
}

export function clearProgress(): void {
  try {
    localStorage.removeItem(KEYS.answers);
    localStorage.removeItem(KEYS.currentIndex);
  } catch {
    // abaikan
  }
}
