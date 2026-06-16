import type { FinalResult, RankedScore } from "../types";
import { ResultSection } from "./ResultSection";
import { SharePanel } from "./SharePanel";

type ResultPageProps = {
  result: FinalResult;
  onRestart: () => void;
};

function ScoreList({ items }: { items: RankedScore[] }) {
  if (!items.length) return <p className="muted">Belum cukup data.</p>;
  return (
    <div className="score-list">
      {items.map((item) => (
        <div className="score-row" key={item.key}>
          <span>{item.key}</span>
          <span>{item.score}</span>
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
        <div className="confidence-pill">Confidence {result.confidence.score}/100 — {result.confidence.label}</div>
      </section>

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
        <h3>Work style</h3><ScoreList items={result.workStyle} />
        <h3>Learning style</h3><ScoreList items={result.learningStyle} />
      </ResultSection>

      <ResultSection title="Relasi, stres, dan pertahanan" defaultOpen={false}>
        <h3>Relationship</h3><ScoreList items={result.relationshipTendency} />
        <h3>Stress</h3><ScoreList items={result.stressResponse} />
        <h3>Defense</h3><ScoreList items={result.defensePattern} />
        <h3>Communication</h3><ScoreList items={result.communicationStyle} />
        <h3>Conflict</h3><ScoreList items={result.conflictStyle} />
      </ResultSection>

      <ResultSection title="Values, ideal partner, dan comfort style" defaultOpen={false}>
        <h3>Values</h3><ScoreList items={result.valuesRanking} />
        <h3>Ideal partner</h3><ScoreList items={result.idealPartnerTendency} />
        <h3>Love style</h3><ScoreList items={result.preferredLoveStyle} />
        <h3>Environment</h3><ScoreList items={result.preferredEnvironment} />
      </ResultSection>

      <ResultSection title="Catatan keyakinan hasil" defaultOpen={false}>
        {result.notes.map((note) => <p key={note}>{note}</p>)}
      </ResultSection>

      <button className="danger-button" onClick={onRestart}>Ulangi tes dari awal</button>
    </main>
  );
}
