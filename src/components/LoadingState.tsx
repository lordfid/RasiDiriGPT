type LoadingStateProps = {
  text?: string;
};

export function LoadingState({ text = "Sebentar, sedang membaca jejak jawabanmu..." }: LoadingStateProps) {
  return <div className="loading-state">{text}</div>;
}
