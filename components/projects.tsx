"use client";

import { Section } from "./section";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { useLanguage } from "./language-provider";

export function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} as="div" className="h-full">
            <ProjectCard project={project} statusLabel={t.projects.status[project.status]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
