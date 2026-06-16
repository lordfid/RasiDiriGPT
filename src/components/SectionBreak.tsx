const SECTION_MESSAGES: Record<number, { title: string; subtitle: string }> = {
  24: { title: "Bagian pertama selesai.", subtitle: "Momen berikutnya bergerak ke hubungan, batas, dan cara kamu tetap utuh." },
  48: { title: "Kamu sudah melewati bagian terdalam.", subtitle: "Sekarang masuk ke tekanan, nilai, pekerjaan, dan cara kamu memilih saat hari tidak rapi." },
  72: { title: "Pendalaman terakhir.", subtitle: "Beberapa pilihan berikut membantu memperjelas gambar yang hampir terbentuk." },
};

type SectionBreakProps = {
  questionIndex: number;
  onContinue: () => void;
};

export function SectionBreak({ questionIndex, onContinue }: SectionBreakProps) {
  const msg = SECTION_MESSAGES[questionIndex];
  if (!msg) return null;

  return (
    <div className="section-break-overlay">
      <div className="section-break-card">
        <div className="section-break-dot" />
        <h2 className="section-break-title">{msg.title}</h2>
        <p className="section-break-subtitle">{msg.subtitle}</p>
        <button className="primary-button" onClick={onContinue}>Lanjutkan</button>
      </div>
    </div>
  );
}

export const SECTION_BREAK_POINTS = new Set(Object.keys(SECTION_MESSAGES).map(Number));
