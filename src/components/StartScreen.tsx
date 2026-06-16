type StartScreenProps = {
  hasProgress: boolean;
  progressPercent: number;
  totalQuestions: number;
  onStart: () => void;
  onContinue: () => void;
};

export function StartScreen({ hasProgress, progressPercent, totalQuestions, onStart, onContinue }: StartScreenProps) {
  return (
    <main className="screen start-screen">
      <section className="hero-card">
        <p className="eyebrow">peta kecil dari cara kau memilih</p>
        <h1>Rasi Diri</h1>
        <p className="hero-text">
          Kau akan melewati potongan momen: dapur yang terlalu sepi, chat yang menggantung, meja kerja yang kacau, uang yang menipis, dan cara seseorang membuatmu merasa aman atau justru menjauh.
        </p>

        <div className="duration-hint">
          <span className="duration-icon">⏱</span>
          <span>~10–18 menit · {totalQuestions} pertanyaan · Tersimpan otomatis</span>
        </div>

        <div className="hero-actions">
          <button className="primary-button" onClick={onStart}>Mulai dari awal</button>
          {hasProgress && (
            <button className="secondary-button" onClick={onContinue}>
              Lanjutkan tes
              {progressPercent > 0 && <span className="progress-badge">{progressPercent}%</span>}
            </button>
          )}
        </div>

        <p className="disclaimer">
          Hasilnya adalah interpretasi tipologi, bukan diagnosis klinis. Baca sebagai kemungkinan, bukan vonis.
          Tidak ada data yang dikirim ke server — semuanya berjalan di perangkat-mu.
        </p>
      </section>
    </main>
  );
}
