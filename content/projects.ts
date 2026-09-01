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
  status: "Live" | "In Development" | "Prototype" | "Completed";
  year: string;
  tags: string[];
  highlights: string[];
  links: ProjectLink[];
  /** Optional footer note, e.g. for confidential / NDA projects with no public link. */
  note?: string;
  /** Single preview image under /public (legacy — prefer `images`). */
  image?: string;
  /** Screenshot gallery under /public; the first is the card hero. */
  images?: string[];
  featured?: boolean;
};
