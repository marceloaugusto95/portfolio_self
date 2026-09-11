"use client";

import { site } from "@/content/site";
import { useLanguage } from "./language-provider";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 sm:flex-row">
        <p className="mono-label text-muted">
          © 2026 {site.name}. {t.footer.builtWith}
        </p>
        <div className="flex items-center gap-5">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="mono-label text-muted transition-colors hover:text-accent">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="mono-label text-muted transition-colors hover:text-accent">
            LinkedIn
          </a>
          <a href={site.socials.whatsapp} target="_blank" rel="noreferrer" className="mono-label text-muted transition-colors hover:text-accent">
            WhatsApp
          </a>
          <a href={`mailto:${site.email}`} className="mono-label text-muted transition-colors hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
