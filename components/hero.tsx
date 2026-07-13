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

      <div className="mx-auto grid min-h-[92vh] max-w-5xl grid-cols-1 items-center gap-10 px-6 py-24 sm:gap-12 sm:py-28 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-32">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12, delayChildren: 0.1 }}
        >
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            {t.hero.available}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {site.name.split(" ").slice(0, 2).join(" ")} —{" "}
            <span className="gradient-text">{t.hero.role}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {t.hero.location}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              {t.hero.viewWork}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              {t.hero.getInTouch}
            </a>

            <div className="ml-1 flex items-center gap-1">
              <IconLink href={site.socials.github} label="GitHub">
                <GithubIcon size={18} />
              </IconLink>
              <IconLink href={site.socials.linkedin} label="LinkedIn">
                <LinkedinIcon size={18} />
              </IconLink>
              <IconLink href={site.socials.whatsapp} label="WhatsApp">
                <WhatsappIcon size={18} />
              </IconLink>
              <IconLink href={`mailto:${site.email}`} label="Email">
                <Mail size={18} />
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
          {/* Soft accent glow behind the portrait */}
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/25 via-accent-2/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-border-strong bg-surface shadow-2xl shadow-black/40">
            <Image
              src="/me.jpg"
              alt={`${site.name}, ${t.hero.role}`}
              width={690}
              height={1206}
              priority
              sizes="(max-width: 768px) 20rem, 28rem"
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
      className="rounded-full p-2.5 text-muted transition-colors hover:bg-surface hover:text-foreground"
    >
      {children}
    </a>
  );
}
