"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Expand, Lock } from "lucide-react";
import { GithubIcon } from "./icons";
import { Lightbox } from "./lightbox";
import type { Project } from "@/content/projects";

const statusStyles: Record<Project["status"], string> = {
  Live: "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
  "In Development": "text-accent border-accent/30 bg-accent/10",
  Prototype: "text-amber-400 border-amber-400/30 bg-amber-400/10",
  Completed: "text-muted border-border bg-surface-2",
};

/**
 * Every card renders into the same fixed slots so a new project can't push the
 * grid out of shape: overflowing copy is clamped, extra tags collapse into a
 * "+N" chip, and the links row is pinned to the bottom of the card.
 */
const MAX_HIGHLIGHTS = 3;
const MAX_TAGS = 5;

export function ProjectCard({ project, statusLabel }: { project: Project; statusLabel: string }) {
  const highlights = project.highlights.slice(0, MAX_HIGHLIGHTS);
  const tags = project.tags.slice(0, MAX_TAGS);
  const hiddenTags = project.tags.slice(MAX_TAGS);

  const gallery = project.images ?? (project.image ? [project.image] : []);
  const hero = gallery[0];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors duration-300 hover:border-border-strong">
      {/* Preview — aspect-ratio based so it scales with the column width */}
      <div className="relative aspect-[16/9] shrink-0 overflow-hidden border-b border-border bg-surface-2">
        {hero ? (
          <button
            type="button"
            onClick={() => setLightboxIndex(0)}
            aria-label={`View ${project.title} screenshots`}
            className="group/preview absolute inset-0 block cursor-zoom-in"
          >
            <Image
              src={hero}
              alt={`${project.title} screenshot`}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-background/0 transition-colors duration-300 group-hover/preview:bg-background/20" />
            <span className="absolute bottom-2 right-2 inline-flex items-center gap-1.5 rounded-full border border-border-strong bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground/90 backdrop-blur-sm">
              <Expand size={13} />
              {gallery.length > 1 ? `${gallery.length} shots` : "View"}
            </span>
          </button>
        ) : (
          // Intentional "app window" placeholder until a real screenshot is added.
          <div className="absolute inset-0 flex flex-col bg-surface-2">
            <div className="flex items-center gap-1.5 border-b border-border/60 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              <span className="ml-2 h-3 flex-1 rounded-full bg-foreground/[0.06]" />
            </div>
            <div className="bg-glow relative flex flex-1 items-center justify-center overflow-hidden p-4 opacity-90">
              <span className="line-clamp-2 text-balance text-center font-mono text-xl font-semibold tracking-tight text-foreground/70 break-words sm:text-2xl">
                {project.title}
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="line-clamp-2 min-w-0 text-lg font-semibold tracking-tight">
            {project.title}
          </h3>
          <span
            className={`mt-0.5 shrink-0 rounded-full border px-2.5 py-0.5 text-xs font-medium whitespace-nowrap ${statusStyles[project.status]}`}
          >
            {statusLabel}
          </span>
        </div>

        {/* Fixed-height copy slots keep the highlights aligned across cards */}
        <p className="line-clamp-2 min-h-[2.75rem] text-sm font-medium text-foreground/90">
          {project.tagline}
        </p>
        <p className="mt-2 line-clamp-4 min-h-[6.25rem] text-[15px] leading-relaxed text-muted">
          {project.description}
        </p>

        {highlights.length > 0 && (
          <ul className="mt-4 space-y-1.5">
            {highlights.map((h) => (
              <li key={h} className="flex gap-2 text-sm text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="line-clamp-2 min-w-0">{h}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Pinned to the bottom so links line up row to row */}
        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted"
              >
                {t}
              </span>
            ))}
            {hiddenTags.length > 0 && (
              <span
                title={hiddenTags.join(", ")}
                className="rounded-md border border-border bg-surface-2 px-2 py-0.5 text-xs text-muted"
              >
                +{hiddenTags.length}
              </span>
            )}
          </div>

          {(project.links.length > 0 || project.note) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border pt-4">
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
      </div>

      <Lightbox
        images={gallery}
        title={project.title}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndex={setLightboxIndex}
      />
    </article>
  );
}
