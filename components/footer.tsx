import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © 2026 {site.name}. Built with Next.js &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-5">
          <a href={site.socials.github} target="_blank" rel="noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">
            LinkedIn
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
