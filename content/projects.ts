export type ProjectLink = {
  label: string;
  href: string;
  type: "github" | "demo" | "external";
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  status: "Live" | "In Development" | "Completed";
  year: string;
  tags: string[];
  highlights: string[];
  links: ProjectLink[];
  /** Path under /public — add screenshots later. */
  image?: string;
  featured?: boolean;
};
