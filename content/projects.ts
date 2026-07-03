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

// NOTE: repo/demo URLs and screenshots are placeholders — replace the "#"
// links and add images under /public when the details are ready.
export const projects: Project[] = [
  {
    slug: "mana-realm",
    title: "Mana Realm",
    tagline: "A browser-based game built from scratch — no frameworks.",
    description:
      "A browser-based game designed and developed from the ground up in vanilla JavaScript, HTML5, and CSS3. Handling game logic, rendering, and UI solo.",
    status: "In Development",
    year: "2025 — Present",
    tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Dev"],
    highlights: [
      "Custom game loop, rendering, and UI written from scratch",
      "Zero frameworks — pure vanilla JS for full control over performance",
      "Expected release: late 2026",
    ],
    links: [{ label: "GitHub", href: "#", type: "github" }],
    featured: true,
  },
  {
    slug: "trevo-da-sorte",
    title: "Trevo da Sorte",
    tagline: "A full lottery management platform, shipped solo.",
    description:
      "A multi-app lottery management platform built as a monorepo spanning four applications: a customer-facing betting web app, a point-of-sale app for resellers, an admin dashboard, and a companion Android app with thermal ticket printing.",
    status: "Live",
    year: "2026",
    tags: ["Next.js", "Supabase", "PostgreSQL", "Capacitor", "Vercel"],
    highlights: [
      "Backend on Supabase with Row-Level Security and SECURITY DEFINER RPCs for role-based auth at the database level",
      "Custom CPF-based auth flow issuing signed JWTs across all front-ends",
      "Mercado Pago PIX integration with webhook confirmation and scheduled official-results sync",
    ],
    links: [{ label: "GitHub", href: "#", type: "github" }],
    featured: true,
  },
  {
    slug: "support-chatbot",
    title: "Omnichannel Support Chatbot",
    tagline: "AI-assisted customer support across WhatsApp and beyond.",
    description:
      "An omnichannel customer-support solution built end-to-end, integrating an open-source helpdesk with n8n workflow automation and the WhatsApp Business Cloud API for unified, multi-agent conversation handling.",
    status: "Live",
    year: "2026",
    tags: ["n8n", "WhatsApp Cloud API", "LLMs", "Docker"],
    highlights: [
      "Automated conversation triage and routing with template-based outbound notifications",
      "Compliant messaging (approved templates, opt-in handling) and LGPD data-privacy",
      "Deployed on self-managed, containerized cloud infrastructure",
    ],
    links: [{ label: "Live Demo", href: "#", type: "demo" }],
    featured: true,
  },
];
