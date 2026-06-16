const SECTION_LABELS: { upToPercent: number; label: string }[] = [
  { upToPercent: 16,  label: "Bagian 1 — Inti & Cara Pikir" },
  { upToPercent: 32,  label: "Bagian 2 — Preferensi & Gaya" },
  { upToPercent: 48,  label: "Bagian 3 — Relasi & Kedekatan" },
  { upToPercent: 64,  label: "Bagian 4 — Stres & Ketahanan" },
  { upToPercent: 80,  label: "Bagian 5 — Nilai & Tujuan" },
  { upToPercent: 95,  label: "Bagian 6 — Kerja & Belajar" },
  { upToPercent: 100, label: "Bagian 7 — Pendalaman Final" },
];

function getSectionLabel(percent: number): string {
  return SECTION_LABELS.find((s) => percent <= s.upToPercent)?.label ?? "Menyelesaikan...";
}

function getMotivation(percent: number): string {
  if (percent < 15) return "Baru mulai — ambil waktu-mu.";
  if (percent < 30) return "Kamu sedang membangun gambar dirimu.";
  if (percent < 50) return "Setengah perjalanan hampir di sini.";
  if (percent < 65) return "Lebih dari setengah sudah terlewat.";
  if (percent < 80) return "Hampir di bagian paling dalam.";
  if (percent < 95) return "Sedikit lagi. Kamu hampir selesai.";
  return "Pertanyaan terakhir. Tetap jujur.";
}

type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total ? Math.round((current / total) * 100) : 0;
  const sectionLabel = getSectionLabel(percent);
  const motivation = getMotivation(percent);

  return (
    <div className="progress-wrap" aria-label={`Progress ${percent}%`}>
      <div className="progress-section-label">{sectionLabel}</div>
      <div className="progress-meta">
        <span className="progress-motivation">{motivation}</span>
        <span>{current} / {total} ({percent}%)</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
