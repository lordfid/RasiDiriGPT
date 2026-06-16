import type { FinalResult } from "../types";
import { ENNEAGRAM_DESCRIPTIONS, FUNCTION_DESCRIPTIONS, MBTI_DESCRIPTIONS, SIMPLE_DESCRIPTIONS } from "../data/resultDescriptions";

function label(key: string): string {
  return key.replace(/([A-Z])/g, " $1").replace(/_/g, " ").trim();
}

export function buildLocalNarration(result: FinalResult): string {
  const mbti = result.topMBTI[0]?.key ?? "belum terbaca jelas";
  const fn = result.cognitiveRanking[0]?.key ?? "belum stabil";
  const enneagram = result.enneagram.type;
  const instinct = result.instinctStacking[0]?.key ?? "belum jelas";
  const defense = result.defensePattern[0]?.key;
  const relation = result.relationshipTendency[0]?.key;

  const parts = [
    `Pola jawabanmu sementara paling dekat dengan ${mbti}, tetapi ini tetap perlu dibaca sebagai kecenderungan, bukan kepastian.`,
    MBTI_DESCRIPTIONS[mbti] ?? "Arah MBTI-mu masih cukup terbuka karena beberapa sinyal berdekatan.",
    `Fungsi yang paling menonjol saat ini adalah ${fn}. ${FUNCTION_DESCRIPTIONS[fn] ?? "Sinyalnya belum cukup kuat untuk dijelaskan panjang."}`,
    `Untuk Enneagram, kecenderungan teratas mengarah ke tipe ${enneagram}. ${ENNEAGRAM_DESCRIPTIONS[enneagram] ?? "Motif intinya belum sepenuhnya stabil."}`,
    `Instinct yang paling tampak adalah ${instinct}. ${SIMPLE_DESCRIPTIONS[instinct] ?? "Arah naluri masih perlu lebih banyak jawaban."}`
  ];

  if (relation) parts.push(`Dalam relasi, sinyal yang muncul sering bergerak ke arah ${label(relation)}.`);
  if (defense) parts.push(`Saat tertekan, pola perlindungan diri yang tampak adalah ${label(defense)}.`);
  parts.push(`Confidence hasil: ${result.confidence.score}/100 (${result.confidence.label}).`);
  return parts.join(" ");
}

export function resultToPlainText(result: FinalResult): string {
  return [
    "Rasi Diri — Ringkasan Hasil",
    "",
    result.summary,
    "",
    `Top MBTI: ${result.topMBTI.map((item) => `${item.key} ${item.score}`).join(", ")}`,
    `Fungsi: ${result.cognitiveRanking.map((item) => `${item.key} ${item.score}`).join(", ")}`,
    `Enneagram: ${result.enneagram.wing}`,
    `Instinct: ${result.instinctStacking.map((item) => item.key).join("/")}`,
    `Confidence: ${result.confidence.score}/100 (${result.confidence.label})`,
    "",
    "Catatan: hasil ini bukan diagnosis klinis."
  ].join("\n");
}

export function resultToThreeSentences(result: FinalResult): string {
  const mbti = result.topMBTI[0]?.key ?? "—";
  const enneagram = result.enneagram.wing ?? "—";
  const instinct = result.instinctStacking.slice(0, 2).map((i) => i.key).join("/") ?? "—";
  const relation = result.relationshipTendency[0]?.key ? label(result.relationshipTendency[0].key) : null;

  const lines = [
    `Aku baru selesai tes Rasi Diri. Pola teratas: ${mbti}, Enneagram ${enneagram}, instinct ${instinct}.`,
    result.summary.split(". ").slice(0, 2).join(". ") + ".",
  ];
  if (relation) lines.push(`Dalam relasi aku cenderung ${relation}.`);
  lines.push(`(rasidiri.vercel.app)`);
  return lines.join("\n");
}
