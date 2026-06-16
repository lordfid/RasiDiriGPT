type ProgressBarProps = {
  current: number;
  total: number;
};

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percent = total ? Math.round((current / total) * 100) : 0;
  return (
    <div className="progress-wrap" aria-label={`Progress ${percent}%`}>
      <div className="progress-meta">
        <span>{current} / {total}</span>
        <span>{percent}%</span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
