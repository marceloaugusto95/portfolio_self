"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./reveal";
import { site } from "@/content/site";
import { useLanguage } from "./language-provider";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-16 text-center sm:px-16">
          <div className="bg-glow absolute inset-0 -z-10 opacity-80" />

          <span className="text-sm font-medium uppercase tracking-widest text-accent">
            {t.contact.eyebrow}
          </span>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">{t.contact.body}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {site.email}
            </a>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.contact.downloadResume}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            <SocialLink href={site.socials.github} label="GitHub">
              <GithubIcon size={18} />
            </SocialLink>
            <SocialLink href={site.socials.linkedin} label="LinkedIn">
              <LinkedinIcon size={18} />
            </SocialLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="rounded-full border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
