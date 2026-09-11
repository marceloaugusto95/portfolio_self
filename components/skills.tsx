"use client";

import { Section } from "./section";
import { Reveal } from "./reveal";
import { useLanguage } from "./language-provider";

export function Skills() {
  const { t } = useLanguage();
  return (
    <Section id="skills" number="04" eyebrow={t.skills.eyebrow} title={t.skills.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06}>
            <div className="h-full border border-border bg-surface p-6 transition-colors hover:border-border-strong">
              <h3 className="mono-label mb-4 text-accent">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="border border-border bg-surface-2 px-2.5 py-1 font-mono text-[13px] text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
