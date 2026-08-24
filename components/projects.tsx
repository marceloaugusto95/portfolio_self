"use client";

import { Section } from "./section";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { useLanguage } from "./language-provider";

/**
 * Stagger is capped so the grid stays snappy no matter how many projects
 * are added — the 12th card shouldn't wait a second to appear.
 */
const STAGGER = 0.08;
const MAX_STAGGER = 0.24;

export function Projects() {
  const { t } = useLanguage();
  return (
    <Section id="projects" eyebrow={t.projects.eyebrow} title={t.projects.title}>
      {/*
        `auto-rows-fr` makes every row as tall as its tallest card, so the grid
        stays on a regular rhythm regardless of how many projects exist or how
        much copy each one has. Two columns max: the cards are text-heavy and
        get cramped below ~440px.
      */}
      <div className="grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2">
        {t.projects.items.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={Math.min(i * STAGGER, MAX_STAGGER)}
            as="div"
            className="h-full"
          >
            <ProjectCard project={project} statusLabel={t.projects.status[project.status]} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
