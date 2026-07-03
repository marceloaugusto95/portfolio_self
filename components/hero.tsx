"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";
import { site } from "@/content/site";

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-glow absolute inset-0 -z-10" />
      <div className="bg-grid absolute inset-0 -z-10" />

      <div className="mx-auto flex min-h-[92vh] max-w-5xl flex-col justify-center px-6 py-32">
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
            {site.available}
          </motion.div>

          <motion.h1
            variants={item}
            className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          >
            Hi, I&apos;m {site.name.split(" ")[0]} —{" "}
            <span className="gradient-text">{site.role}</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-6 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {site.location}
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              View my work
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border-strong px-6 py-3 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>

            <div className="ml-1 flex items-center gap-1">
              <IconLink href={site.socials.github} label="GitHub">
                <GithubIcon size={18} />
              </IconLink>
              <IconLink href={site.socials.linkedin} label="LinkedIn">
                <LinkedinIcon size={18} />
              </IconLink>
              <IconLink href={`mailto:${site.email}`} label="Email">
                <Mail size={18} />
              </IconLink>
            </div>
          </motion.div>
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
