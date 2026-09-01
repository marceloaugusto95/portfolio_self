"use client";

import { GraduationCap } from "lucide-react";
import { Section } from "./section";
import { Reveal } from "./reveal";
import { useLanguage } from "./language-provider";

export function Experience() {
  const { t } = useLanguage();
  return (
    <Section id="experience" eyebrow={t.experience.eyebrow} title={t.experience.title}>
      <div className="space-y-4">
        {t.experience.items.map((item, i) => (
          <Reveal key={`${item.role}-${item.org}`} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="text-lg font-semibold tracking-tight">{item.role}</h3>
                <span className="shrink-0 font-mono text-sm text-muted">{item.period}</span>
              </div>
              <p className="mt-1 text-sm font-medium text-accent">
                {item.org} <span className="font-normal text-muted">· {item.meta}</span>
              </p>
              <ul className="mt-3 space-y-2">
                {item.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.16}>
        <div className="mt-4 flex items-center gap-4 rounded-2xl border border-border bg-surface p-5">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border bg-surface-2 text-accent">
            <GraduationCap size={18} />
          </span>
          <div>
            <p className="text-xs uppercase tracking-widest text-muted">{t.experience.educationLabel}</p>
            <p className="mt-0.5 font-medium">
              {t.experience.education.degree}{" "}
              <span className="font-normal text-muted">· {t.experience.education.school}</span>
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
