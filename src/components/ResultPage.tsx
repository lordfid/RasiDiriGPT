import type { FinalResult, RankedScore } from "../types";
import { ResultSection } from "./ResultSection";
import { SharePanel } from "./SharePanel";

type ResultPageProps = {
  result: FinalResult;
  onRestart: () => void;
};

function ScoreList({ items }: { items: RankedScore[] }) {
  if (!items.length) return <p className="muted">Belum cukup data.</p>;
  const maxScore = Math.max(...items.map((i) => i.score), 1);
  return (
    <div className="score-list">
      {items.map((item) => (
        <div className="score-row" key={item.key}>
          <span className="score-key">{item.key}</span>
          <div className="score-bar-wrap">
            <div
              className="score-bar-fill"
              style={{ width: `${Math.min((item.score / maxScore) * 100, 100)}%` }}
            />
          </div>
          <span className="score-num">{item.score}</span>
        </div>
      ))}
    </div>
  );
}

function HighlightCards({ result }: { result: FinalResult }) {
  const cards = [
    {
      label: "Pola utama",
      value: result.topMBTI[0]?.key ?? "—",
      sub: result.enneagram.wing ? `Enneagram ${result.enneagram.wing}` : undefined,
      color: "highlight-purple",
    },
    {
      label: "Dalam relasi",
      value: result.relationshipTendency[0]?.key ?? "—",
      sub: result.preferredLoveStyle[0]?.key ?? undefined,
      color: "highlight-pink",
    },
    {
      label: "Saat tertekan",
      value: result.stressResponse[0]?.key ?? "—",
      sub: result.defensePattern[0]?.key ?? undefined,
      color: "highlight-blue",
    },
    {
      label: "Naluri dominan",
      value: result.instinctStacking[0]?.key ?? "—",
      sub: result.instinctStacking[1]?.key ?? undefined,
      color: "highlight-teal",
    },
  ];

  return (
    <div className="highlight-grid">
      {cards.map((card) => (
        <div className={`highlight-card ${card.color}`} key={card.label}>
          <p className="highlight-label">{card.label}</p>
          <p className="highlight-value">{card.value}</p>
          {card.sub && <p className="highlight-sub">{card.sub}</p>}
        </div>
      ))}
    </div>
  );
}

export function ResultPage({ result, onRestart }: ResultPageProps) {
  return (
    <main className="screen result-page">
      <section className="result-hero">
        <p className="eyebrow">hasil sementara</p>
        <h1>{result.topMBTI[0]?.key ?? "Rasi Diri"}</h1>
        <p>{result.summary}</p>
        <div className="confidence-pill">
          Keyakinan hasil {result.confidence.score}/100 — {result.confidence.label}
        </div>
      </section>

      <HighlightCards result={result} />

      <SharePanel result={result} />

      <ResultSection title="MBTI & fungsi kognitif">
        <h3>Top MBTI</h3>
        <ScoreList items={result.topMBTI} />
        <h3>Ranking fungsi</h3>
        <ScoreList items={result.cognitiveRanking} />
        <h3>Stack fit</h3>
        <ScoreList items={result.stackFit} />
      </ResultSection>

      <ResultSection title="Enneagram, instinct, tritype">
        <p>Enneagram: <strong>{result.enneagram.wing}</strong></p>
        <ScoreList items={result.enneagram.topThree} />
        <h3>Instinct</h3>
        <ScoreList items={result.instinctStacking} />
        <p>Tritype: <strong>{result.tritype}</strong></p>
      </ResultSection>

      <ResultSection title="Traits, kerja, dan belajar" defaultOpen={false}>
        <h3>Big Five</h3><ScoreList items={result.bigFive} />
        <h3>HEXACO</h3><ScoreList items={result.hexaco} />
        <h3>DISC</h3><ScoreList items={result.disc} />
        <h3>RIASEC</h3><ScoreList items={result.riasec} />
        <h3>Gaya kerja</h3><ScoreList items={result.workStyle} />
        <h3>Gaya belajar</h3><ScoreList items={result.learningStyle} />
      </ResultSection>

      <ResultSection title="Pola kedekatan, saat tertekan, cara bertahan" defaultOpen={false}>
        <h3>Pola kedekatan</h3><ScoreList items={result.relationshipTendency} />
        <h3>Saat tertekan</h3><ScoreList items={result.stressResponse} />
        <h3>Cara bertahan</h3><ScoreList items={result.defensePattern} />
        <h3>Cara menyampaikan</h3><ScoreList items={result.communicationStyle} />
        <h3>Cara berkonflik</h3><ScoreList items={result.conflictStyle} />
      </ResultSection>

      <ResultSection title="Nilai, sosok yang mudah kau tuju, gaya mencintai" defaultOpen={false}>
        <h3>Nilai yang paling ditarik</h3><ScoreList items={result.valuesRanking} />
        <h3>Sosok yang mudah kau tuju</h3><ScoreList items={result.idealPartnerTendency} />
        <h3>Gaya mencintai</h3><ScoreList items={result.preferredLoveStyle} />
        <h3>Tempat yang membuatmu hidup</h3><ScoreList items={result.preferredEnvironment} />
      </ResultSection>

      <ResultSection title="Catatan keyakinan hasil" defaultOpen={false}>
        {result.notes.map((note) => <p key={note}>{note}</p>)}
      </ResultSection>

      <button className="danger-button" onClick={onRestart}>Ulangi tes dari awal</button>
    </main>
  );
}
