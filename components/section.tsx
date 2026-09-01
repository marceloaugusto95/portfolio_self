import type { ReactNode } from "react";
import { Reveal } from "./reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-6 py-14 sm:py-20 ${className ?? ""}`}>
      <Reveal className="mb-9 sm:mb-10">
        {eyebrow && (
          <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-accent">
            {eyebrow}
          </span>
        )}
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
