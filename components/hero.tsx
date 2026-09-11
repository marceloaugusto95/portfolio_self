"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { site } from "@/content/site";
import { useLanguage } from "./language-provider";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-glow absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto grid min-h-[92vh] max-w-5xl grid-cols-1 items-center gap-10 px-6 py-24 sm:gap-12 sm:py-28 md:grid-cols-[1.15fr_0.85fr] md:gap-14 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        >
          <motion.div
            variants={item}
            className="mb-7 inline-flex items-center gap-2.5 border border-border bg-surface px-3 py-1.5"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 bg-accent" />
            </span>
            <span className="mono-label text-muted">{t.hero.available}</span>
          </motion.div>

          {/* The role is the statement; the name sits above it as metadata.
              Setting the full name in Archivo Black wrapped to five lines and
              pushed everything else below the fold. */}
          <motion.h1 variants={item}>
            <span className="mono-label block text-muted">{site.name}</span>
            <span className="display mt-3 block text-[2.6rem] text-foreground sm:text-[3.5rem] md:text-[4.25rem]">
              {t.hero.role}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-[17px] leading-relaxed text-muted"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2">
            <MapPin size={14} className="text-accent" />
            <span className="mono-label text-muted">{t.hero.location}</span>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-accent px-6 py-3.5 text-background transition-colors hover:bg-white"
            >
              <span className="mono-label">{t.hero.viewWork}</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="flex items-center">
              <IconLink href={site.socials.github} label="GitHub">
                <GithubIcon size={17} />
              </IconLink>
              <IconLink href={site.socials.linkedin} label="LinkedIn">
                <LinkedinIcon size={17} />
              </IconLink>
              <IconLink href={site.socials.whatsapp} label="WhatsApp">
                <WhatsappIcon size={17} />
              </IconLink>
              <IconLink href={`mailto:${site.email}`} label="Email">
                <Mail size={17} />
              </IconLink>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto w-full max-w-[17rem] sm:max-w-xs md:max-w-none"
        >
          {/* Offset cyan rule instead of a soft glow — sharper, more graphic */}
          <div className="absolute -bottom-3 -right-3 h-full w-full border-b-2 border-r-2 border-accent" />
          <div className="relative overflow-hidden border border-border-strong bg-surface">
            <Image
              src="/me.jpg"
              alt={`${site.name}, ${t.hero.role}`}
              width={690}
              height={1206}
              priority
              className="aspect-[2/3] w-full object-cover object-bottom"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function IconLink({
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
      className="border border-transparent p-3 text-muted transition-colors hover:border-border hover:text-accent"
    >
      {children}
    </a>
  );
}
