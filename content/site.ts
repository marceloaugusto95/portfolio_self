export const site = {
  name: "Marcelo Augusto Fries",
  role: "Full-Stack Developer",
  tagline:
    "I ship production-ready web applications end-to-end — from database design and backend architecture to responsive front-ends and live deployment.",
  location: "Brasília, Brazil (GMT-3)",
  email: "marceloaugustofries@outlook.com",
  phone: "+55 61 98616-6969",
  available: "Available for remote full-stack roles",
  resumeUrl: "/Marcelo_Augusto_Fries_Resume.pdf",
  socials: {
    github: "https://github.com/marceloaugusto95",
    linkedin: "https://linkedin.com/in/marceloaugustofries",
  },
} as const;

export const about = {
  paragraphs: [
    "I'm a full-stack developer who owns projects from the ground up — architecture, backend, responsive front-end, and deployment. I've built and shipped a multi-app lottery platform, an omnichannel customer-support system, and I'm currently crafting a browser-based game solo.",
    "I work with a spec-driven workflow and care about maintainable, production-ready solutions. Fluent in English and available across US and European business hours.",
  ],
  facts: [
    { label: "Based in", value: "Brasília, Brazil" },
    { label: "Focus", value: "Full-stack web apps" },
    { label: "Availability", value: "Remote · US & EU hours" },
    { label: "Languages", value: "English · Portuguese" },
  ],
} as const;

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["JavaScript", "TypeScript", "SQL", "Python", "HTML5", "CSS3"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "React Native (Expo)", "Astro.js", "Responsive UI/UX"],
  },
  {
    group: "Backend",
    items: [
      "Node.js",
      "REST APIs",
      "PostgreSQL",
      "Supabase",
      "Row-Level Security",
      "JWT Auth",
      "Webhooks",
    ],
  },
  {
    group: "DevOps & Tools",
    items: ["Docker", "Git", "Vercel", "AWS", "Monorepo", "CI/CD"],
  },
  {
    group: "Integrations",
    items: [
      "n8n Automation",
      "Stripe",
      "Mercado Pago PIX",
      "WhatsApp Cloud API",
      "Capacitor",
      "LLMs",
    ],
  },
];
