"use client";

import { Section } from "./section";
import { Reveal } from "./reveal";
import { useLanguage } from "./language-provider";

export function About() {
  const { t } = useLanguage();
  return (
    <Section id="about" number="01" eyebrow={t.about.eyebrow} title={t.about.title}>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {t.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden border border-border bg-border">
            {t.about.facts.map((f) => (
              <div key={f.label} className="bg-surface p-5">
                <dt className="mono-label text-muted">{f.label}</dt>
                <dd className="mt-1.5 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
