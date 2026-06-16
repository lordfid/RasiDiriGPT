import { ReactNode, useState } from "react";

type ResultSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
};

export function ResultSection({ title, children, defaultOpen = true }: ResultSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <section className="result-section">
      <button className="section-title" onClick={() => setOpen((value) => !value)}>
        <span>{title}</span>
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && <div className="section-content">{children}</div>}
    </section>
  );
}
