import { ArrowUpRight, Lock } from "lucide-react";
import { GithubIcon } from "./icons";
import type { Project } from "@/content/projects";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "In Development": "text-accent border-accent/30 bg-accent/10",
  Completed: "text-muted border-border bg-surface-2",
};

export function ProjectCard({ project, statusLabel }: { project: Project; statusLabel: string }) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
      {/* Preview area — swap for a screenshot once available */}
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-border bg-surface-2">
        <div className="bg-glow absolute inset-0 opacity-60" />
        <span className="relative px-4 text-center font-mono text-2xl font-semibold tracking-tight text-foreground/80">
          {project.title}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
          <span
            className={`shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[project.status]}`}
          >
            {statusLabel}
          </span>
        </div>

        <p className="text-sm font-medium text-foreground/90">{project.tagline}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        {(project.links.length > 0 || project.note) && (
          <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-border pt-4">
            {project.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
              >
                {link.type === "github" ? <GithubIcon size={15} /> : <ArrowUpRight size={15} />}
                {link.label}
              </a>
            ))}
            {project.note && (
              <span className="inline-flex items-center gap-1.5 text-sm text-muted">
                <Lock size={14} className="text-accent" />
                {project.note}
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
