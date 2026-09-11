"use client";

import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./reveal";
import { site } from "@/content/site";
import { useLanguage } from "./language-provider";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="mx-auto w-full max-w-5xl px-6 py-16 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden border border-border bg-surface px-6 py-16 text-center sm:px-16">
          <div className="bg-glow absolute inset-0 -z-10 opacity-80" />

          <span className="mono-label text-accent">05 &nbsp;/&nbsp; 
            {t.contact.eyebrow}
          </span>
          <h2 className="display mx-auto mt-4 max-w-3xl text-4xl sm:text-5xl md:text-6xl">
            {t.contact.title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[17px] leading-relaxed text-muted">{t.contact.body}</p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="mono-label group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-background transition-colors hover:bg-white"
            >
              <Mail size={16} />
              {site.email}
            </a>
            <a
              href={t.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="mono-label inline-flex items-center gap-2 border border-border-strong px-6 py-3.5 transition-colors hover:border-accent hover:text-accent"
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
            <SocialLink href={site.socials.whatsapp} label="WhatsApp">
              <WhatsappIcon size={18} />
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
      className="border border-border p-3 text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {children}
    </a>
  );
}
