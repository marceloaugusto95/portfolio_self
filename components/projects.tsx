import { Section } from "./section";
import { Reveal } from "./reveal";
import { ProjectCard } from "./project-card";
import { projects } from "@/content/projects";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08} as="div" className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
