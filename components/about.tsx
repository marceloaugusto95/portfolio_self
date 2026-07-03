import { Section } from "./section";
import { Reveal } from "./reveal";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 text-lg leading-relaxed text-muted">
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Reveal>

        <Reveal delay={0.1}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border">
            {about.facts.map((f) => (
              <div key={f.label} className="bg-surface p-5">
                <dt className="text-xs uppercase tracking-widest text-muted">{f.label}</dt>
                <dd className="mt-1 font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
