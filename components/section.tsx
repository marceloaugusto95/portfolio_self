import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  /** Two-digit section marker, e.g. "01". Rendered in the mono eyebrow row. */
  number?: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, number, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-16 sm:py-24 ${className ?? ""}`}>
      <Reveal className="mb-10 sm:mb-12">
        {/* Hairline + mono metadata row, then the display headline */}
        <div className="mb-5 flex items-baseline gap-4 border-t border-border pt-5">
          {number && <span className="mono-label text-accent">{number}</span>}
          {eyebrow && <span className="mono-label text-muted">{eyebrow}</span>}
        </div>
        <h2 className="display text-4xl sm:text-5xl md:text-6xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
