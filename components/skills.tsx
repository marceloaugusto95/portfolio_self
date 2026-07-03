import { Section } from "./section";
import { Reveal } from "./reveal";
import { skills } from "@/content/site";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & technologies">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06}>
            <div className="rounded-2xl border border-border bg-surface p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border bg-surface-2 px-3 py-1 text-sm text-muted transition-colors hover:border-border-strong hover:text-foreground"
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
