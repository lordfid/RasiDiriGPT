import type { ConfidenceResult, NormalizedScores, RawScores } from "../types";
import { rankBucket } from "./normalizeScores";

export function calculateConfidence(raw: RawScores, normalized: NormalizedScores): ConfidenceResult {
  const cognitive = rankBucket(normalized.cognitive, 2);
  const gap = cognitive.length >= 2 ? Math.max(0, cognitive[0].score - cognitive[1].score) : 0;
  const completion = Math.min(1, (raw._meta.completionRatio ?? 0));
  const ambiguity = (raw._meta.both ?? 0) + (raw._meta.neither ?? 0) + (raw._meta.depends ?? 0);
  const skipped = raw._meta.skipped ?? 0;
  const answered = Math.max(1, raw._meta.totalAnswers ?? 1);
  const reliability = Math.min(1, (raw._meta.reliability ?? 0) / answered);

  let score = 35 + gap * 0.25 + completion * 25 + reliability * 20;
  score -= Math.min(20, ambiguity * 2.2);
  score -= Math.min(18, skipped * 2.5);
  score = Math.max(0, Math.min(100, Math.round(score)));

  const label = score < 40 ? "lemah" : score < 60 ? "sedang" : score < 75 ? "cukup kuat" : score < 90 ? "kuat" : "sangat kuat";
  const reasons: string[] = [];
  if (gap < 8) reasons.push("Beberapa sinyal utama masih berdekatan, jadi hasil perlu dibaca sebagai kecenderungan.");
  if (completion < 0.75) reasons.push("Sebagian pertanyaan belum dijawab, sehingga keyakinan hasil turun.");
  if (ambiguity > 2) reasons.push("Jawaban dua-duanya, tidak dua-duanya, atau tergantung muncul cukup sering.");
  if (skipped > 0) reasons.push("Ada pertanyaan yang dilewati dan tidak ikut memberi skor tipe.");
  if (!reasons.length) reasons.push("Sebaran jawaban cukup konsisten untuk pembacaan tahap ini.");

  return { score, label, reasons };
}
