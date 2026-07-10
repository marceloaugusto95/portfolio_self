import type { Project, ProjectLink } from "./projects";

export type Lang = "en" | "pt";

export type Dict = {
  nav: { about: string; projects: string; skills: string; contact: string; resume: string };
  hero: {
    available: string;
    role: string;
    tagline: string;
    location: string;
    viewWork: string;
    getInTouch: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  projects: {
    eyebrow: string;
    title: string;
    status: Record<Project["status"], string>;
    items: Project[];
  };
  skills: {
    eyebrow: string;
    title: string;
    groups: { group: string; items: string[] }[];
  };
  contact: { eyebrow: string; title: string; body: string; downloadResume: string };
  footer: { builtWith: string };
  language: { label: string };
};

// Fields that never change between languages — kept here so the two language
// bundles can't drift apart on slugs, links, or tech tags.
const manaRealm = {
  slug: "mana-realm",
  status: "In Development" as const,
  tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Dev"],
  links: [{ label: "Live Demo", href: "https://manarealm.vercel.app/", type: "demo" as const }],
  featured: true,
};

const luckyClover = {
  slug: "lucky-clover",
  status: "Live" as const,
  tags: ["Next.js", "Supabase", "PostgreSQL", "Capacitor", "Vercel"],
  links: [
    { label: "GitHub", href: "https://github.com/marceloaugusto95/luckyclover", type: "github" as const },
  ],
  featured: true,
};

const supportChatbot = {
  slug: "support-chatbot",
  status: "Live" as const,
  tags: ["n8n", "WhatsApp Cloud API", "LLMs", "Docker"],
  // Confidential client (government health service) — no public link, see per-language `note`.
  links: [] as ProjectLink[],
  featured: true,
};

export const dictionary: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Résumé" },
    hero: {
      available: "Available for remote full-stack roles",
      role: "Full-Stack Developer",
      tagline:
        "I build production-ready applications across web, mobile, desktop, and automation. From database design and backend architecture to polished front-ends and live deployment, I handle the whole stack.",
      location: "Brasília, Brazil (GMT-3)",
      viewWork: "View my work",
      getInTouch: "Get in touch",
    },
    about: {
      eyebrow: "About",
      title: "A bit about me",
      paragraphs: [
        "I'm a full-stack developer who owns projects from the ground up: architecture, backend, front-end, and deployment. I'm not tied to a single platform. I build for the web, mobile, and desktop, and I write the automation and integration workflows that tie them together, always picking the right stack for the problem instead of forcing everything through one.",
        "I've shipped multiple projects across different domains, from a multi-app lottery platform spanning web and Android to an omnichannel customer-support system, and I'm currently building a browser-based game solo. I work spec-first and care about maintainable, production-ready code. I'm fluent in English and available across US and European business hours.",
      ],
      facts: [
        { label: "Based in", value: "Brasília, Brazil" },
        { label: "Age", value: "30 years old" },
        { label: "Focus", value: "Full-stack · multi-platform" },
        { label: "Availability", value: "Remote · US & EU hours" },
        { label: "Languages", value: "English · Portuguese" },
      ],
    },
    projects: {
      eyebrow: "Work",
      title: "Selected projects",
      status: { Live: "Live", "In Development": "In Development", Completed: "Completed" },
      items: [
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "A browser-based game built from scratch, no frameworks.",
          description:
            "A browser-based game I designed and developed from the ground up in vanilla JavaScript, HTML5, and CSS3. I handle the game logic, rendering, and UI entirely on my own.",
          year: "Since 2025",
          highlights: [
            "Custom game loop, rendering, and UI written from scratch",
            "Zero frameworks, pure vanilla JS for full control over performance",
            "Expected release: late 2026",
          ],
        },
        {
          ...luckyClover,
          title: "Lucky Clover",
          tagline: "A full lottery management platform, shipped solo.",
          description:
            "A multi-app lottery management platform I built as a monorepo spanning four applications: a customer-facing betting web app, a point-of-sale app for resellers, an admin dashboard, and a companion Android app with thermal ticket printing.",
          year: "2026",
          highlights: [
            "Backend on Supabase with Row-Level Security and SECURITY DEFINER RPCs for role-based auth at the database level",
            "Custom CPF-based auth flow issuing signed JWTs across all front-ends",
            "Mercado Pago PIX integration with webhook confirmation and scheduled official-results sync",
          ],
        },
        {
          ...supportChatbot,
          title: "Omnichannel Support Chatbot",
          tagline: "AI-assisted citizen support for a public health service.",
          description:
            "An omnichannel support solution built end-to-end for a government public-health service, integrating an open-source helpdesk with n8n workflow automation and the WhatsApp Business Cloud API for unified, multi-agent conversation handling.",
          year: "2026",
          highlights: [
            "Automated conversation triage and routing with template-based outbound notifications",
            "Compliant messaging (approved templates, opt-in handling) and LGPD data-privacy",
            "Deployed on self-managed, containerized cloud infrastructure",
          ],
          note: "Confidential — under NDA",
        },
      ],
    },
    skills: {
      eyebrow: "Toolkit",
      title: "Skills & technologies",
      groups: [
        { group: "Languages", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
        { group: "Frontend", items: ["React", "React Native", "Expo", "Next.js", "Astro.js", "Responsive UI"] },
        {
          group: "Backend",
          items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Row-Level Security", "JWT Authentication", "Auth0", "Webhooks"],
        },
        { group: "DevOps & Tools", items: ["Docker", "Git", "GitHub", "GitHub Actions", "AWS", "Vercel", "CI/CD", "VS Code"] },
        {
          group: "Integrations & Automation",
          items: ["n8n Automation", "WhatsApp Business Cloud API", "Stripe", "Payment Gateways", "Mercado Pago PIX", "Capacitor"],
        },
        {
          group: "AI & LLMs",
          items: ["Large Language Models (LLMs)", "Local LLMs", "Claude", "Claude API", "Claude Code (CLI)", "Gemini", "Gemini CLI", "Google AI Tools", "Spec-Driven Development"],
        },
        {
          group: "Architecture & Practices",
          items: ["Full-Stack Development", "Software Design", "Monorepo Architecture", "Game Design", "UX Design", "Image Editing"],
        },
        { group: "Languages (Spoken)", items: ["English", "Portuguese"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something together",
      body: "I'm open to remote full-stack roles and freelance work. The fastest way to reach me is by email.",
      downloadResume: "Download résumé",
    },
    footer: { builtWith: "Built with Next.js & Tailwind CSS." },
    language: { label: "Language" },
  },

  pt: {
    nav: { about: "Sobre", projects: "Projetos", skills: "Habilidades", contact: "Contato", resume: "Currículo" },
    hero: {
      available: "Disponível para vagas full-stack remotas",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Eu construo aplicações prontas para produção em web, mobile, desktop e automação. Do design de banco de dados e da arquitetura de backend até front-ends caprichados e o deploy em produção, eu cuido de toda a stack.",
      location: "Brasília, Brasil (GMT-3)",
      viewWork: "Ver meu trabalho",
      getInTouch: "Entrar em contato",
    },
    about: {
      eyebrow: "Sobre",
      title: "Um pouco sobre mim",
      paragraphs: [
        "Sou um desenvolvedor full-stack que assume os projetos do começo ao fim: arquitetura, backend, front-end e deploy. Não me prendo a uma única plataforma. Construo para web, mobile e desktop, e escrevo os fluxos de automação e integração que conectam tudo, sempre escolhendo a stack certa para o problema em vez de forçar tudo por um único caminho.",
        "Já entreguei diversos projetos em diferentes domínios, de uma plataforma de loteria multi-app que abrange web e Android a um sistema de suporte ao cliente omnichannel, e atualmente estou desenvolvendo um jogo de navegador sozinho. Trabalho com foco em especificação e me importo com um código sustentável e pronto para produção. Sou fluente em inglês e disponível nos horários comerciais dos EUA e da Europa.",
      ],
      facts: [
        { label: "Baseado em", value: "Brasília, Brasil" },
        { label: "Idade", value: "30 anos" },
        { label: "Foco", value: "Full-stack · multiplataforma" },
        { label: "Disponibilidade", value: "Remoto · horário EUA e Europa" },
        { label: "Idiomas", value: "Inglês · Português" },
      ],
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos selecionados",
      status: { Live: "No ar", "In Development": "Em desenvolvimento", Completed: "Concluído" },
      items: [
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "Um jogo de navegador feito do zero, sem frameworks.",
          description:
            "Um jogo de navegador que projetei e desenvolvi do zero em JavaScript puro, HTML5 e CSS3. Cuido sozinho de toda a lógica do jogo, da renderização e da interface.",
          year: "Desde 2025",
          highlights: [
            "Game loop, renderização e interface escritos do zero",
            "Zero frameworks, JavaScript puro para controle total de performance",
            "Lançamento previsto: fim de 2026",
          ],
        },
        {
          ...luckyClover,
          title: "Lucky Clover",
          tagline: "Uma plataforma completa de gestão de loteria, entregue sozinho.",
          description:
            "Uma plataforma multi-app de gestão de loteria que construí como monorepo abrangendo quatro aplicações: um app web de apostas para o cliente, um app de ponto de venda para revendedores, um painel administrativo e um app Android complementar com impressão térmica de bilhetes.",
          year: "2026",
          highlights: [
            "Backend no Supabase com Row-Level Security e RPCs SECURITY DEFINER para autorização por papel no nível do banco de dados",
            "Fluxo de autenticação próprio baseado em CPF, emitindo JWTs assinados para todos os front-ends",
            "Integração com Mercado Pago PIX, com confirmação via webhook e sincronização agendada dos resultados oficiais",
          ],
        },
        {
          ...supportChatbot,
          title: "Chatbot de Suporte Omnichannel",
          tagline: "Atendimento ao cidadão assistido por IA para um serviço público de saúde.",
          description:
            "Uma solução de suporte omnichannel construída de ponta a ponta para um serviço público de saúde governamental, integrando um helpdesk open-source com automação de fluxos no n8n e a API WhatsApp Business Cloud para atendimento unificado e multi-atendente.",
          year: "2026",
          highlights: [
            "Triagem e roteamento automáticos de conversas, com notificações ativas baseadas em templates",
            "Mensageria em conformidade (templates aprovados, gestão de opt-in) e privacidade de dados conforme a LGPD",
            "Implantado em infraestrutura de nuvem containerizada e autogerenciada",
          ],
          note: "Confidencial — sob NDA",
        },
      ],
    },
    skills: {
      eyebrow: "Ferramentas",
      title: "Habilidades e tecnologias",
      groups: [
        { group: "Linguagens", items: ["JavaScript", "TypeScript", "Python", "SQL", "HTML5", "CSS3"] },
        { group: "Frontend", items: ["React", "React Native", "Expo", "Next.js", "Astro.js", "UI Responsiva"] },
        {
          group: "Backend",
          items: ["Node.js", "REST APIs", "PostgreSQL", "Supabase", "Row-Level Security", "Autenticação JWT", "Auth0", "Webhooks"],
        },
        { group: "DevOps e Ferramentas", items: ["Docker", "Git", "GitHub", "GitHub Actions", "AWS", "Vercel", "CI/CD", "VS Code"] },
        {
          group: "Integrações e Automação",
          items: ["Automação n8n", "WhatsApp Business Cloud API", "Stripe", "Gateways de Pagamento", "Mercado Pago PIX", "Capacitor"],
        },
        {
          group: "IA e LLMs",
          items: ["Modelos de Linguagem (LLMs)", "LLMs Locais", "Claude", "Claude API", "Claude Code (CLI)", "Gemini", "Gemini CLI", "Google AI Tools", "Desenvolvimento Orientado a Especificação"],
        },
        {
          group: "Arquitetura e Práticas",
          items: ["Desenvolvimento Full-Stack", "Design de Software", "Arquitetura Monorepo", "Game Design", "UX Design", "Edição de Imagem"],
        },
        { group: "Idiomas", items: ["Inglês", "Português"] },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Vamos construir algo juntos",
      body: "Estou aberto a vagas full-stack remotas e trabalhos freelancer. A forma mais rápida de falar comigo é por e-mail.",
      downloadResume: "Baixar currículo",
    },
    footer: { builtWith: "Feito com Next.js e Tailwind CSS." },
    language: { label: "Idioma" },
  },
};
