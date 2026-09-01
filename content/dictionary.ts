import type { Project, ProjectLink } from "./projects";

export type Lang = "en" | "pt";

export type Dict = {
  nav: { about: string; projects: string; skills: string; contact: string; resume: string };
  hero: {
    available: string;
    greeting: string;
    role: string;
    tagline: string;
    location: string;
    viewWork: string;
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
  /** Path under /public to the résumé for this language. */
  resumeUrl: string;
};

// ---------------------------------------------------------------------------
// Copy budget for project cards (see components/project-card.tsx):
//   tagline      ~1-2 lines  (<= ~110 chars)
//   description  ~4 lines    (<= ~240 chars)
//   highlights   3 items, <= 2 lines each (extras are dropped)
//   tags         5 shown, the rest collapse into a "+N" chip
// Longer copy is clamped with an ellipsis rather than stretching the grid, so
// keep new entries inside these limits to avoid mid-sentence cuts.
// ---------------------------------------------------------------------------

// Fields that never change between languages — kept here so the two language
// bundles can't drift apart on slugs, links, or tech tags.
const manaRealm = {
  slug: "mana-realm",
  status: "In Development" as const,
  tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Dev"],
  links: [{ label: "Live Demo", href: "https://manarealm.vercel.app/", type: "demo" as const }],
  images: [
    "/screenshots/manaprint1.png",
    "/screenshots/manaprint2.png",
    "/screenshots/manaprint3.png",
  ],
  featured: true,
};

const luckyClover = {
  slug: "lucky-clover",
  status: "Live" as const,
  tags: ["Next.js", "Supabase", "PostgreSQL", "Capacitor", "Vercel"],
  links: [
    { label: "GitHub", href: "https://github.com/marceloaugusto95/luckyclover", type: "github" as const },
  ],
  // White-label demo screenshots (no real client data); admin dashboard leads.
  images: [
    "/screenshots/luckyprint5.png",
    "/screenshots/luckyprint1.png",
    "/screenshots/luckyprint2.png",
    "/screenshots/luckyprint3.png",
    "/screenshots/luckyprint4.png",
  ],
  featured: true,
};

const barbeariaTech = {
  slug: "barbearia-tech",
  status: "Prototype" as const,
  tags: ["Next.js 16", "React 19", "TypeScript", "Neon Postgres", "CSS Modules", "Vercel"],
  // Private repo — demo only.
  links: [{ label: "Live Demo", href: "https://barbeariatech.vercel.app", type: "demo" as const }],
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
      greeting: "Hi, I'm",
      role: "Full-Stack Developer",
      tagline:
        "I build production-ready applications across web, mobile, desktop, and automation. From database design and backend architecture to polished front-ends and live deployment, I handle the whole stack.",
      location: "Brasília, Brazil (GMT-3)",
      viewWork: "View my work",
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
      status: { Live: "Live", "In Development": "In Development", Prototype: "Prototype", Completed: "Completed" },
      items: [
        {
          ...luckyClover,
          title: "Lucky Clover",
          tagline: "A full lottery management platform, shipped solo.",
          description:
            "A multi-app lottery management platform I built as a monorepo spanning four applications: a customer-facing betting web app, a point-of-sale app for resellers, an admin dashboard, and a companion Android app with thermal ticket printing.",
          year: "2026",
          highlights: [
            "In production: 3,000+ bets processed and ~225 monthly active clients",
            "Backend on Supabase with Row-Level Security and SECURITY DEFINER RPCs for role-based auth at the database level",
            "Custom CPF-based auth flow issuing signed JWTs across all front-ends",
            "Mercado Pago PIX integration with webhook confirmation and scheduled official-results sync",
          ],
        },
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
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "A white-label booking prototype for barbershops, landing page to staff dashboard.",
          description:
            "A working proof of concept built on Next.js 16 App Router with server components and Neon Postgres. A single brand config file drives the whole site — name, logo, colors, services, units, staff and hours — so onboarding a new client is a configuration change, not a rewrite.",
          year: "2026",
          highlights: [
            "Four-step booking flow (unit → service → barber/day/time → details) with availability computed server-side from the live schedule",
            "Staff dashboard with HMAC-signed session cookies, per-barber scoping enforced on the server, and revenue, ticket and cancellation metrics",
            "Simulated Pix/card checkout with server-side pricing, swappable for a real PSP without touching the front-end contract",
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
        {
          group: "Core stack",
          items: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
        },
        {
          group: "Backend & infrastructure",
          items: ["REST APIs", "Row-Level Security", "JWT Authentication", "Auth0", "Webhooks", "Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions"],
        },
        {
          group: "Cross-platform & integrations",
          items: ["React Native", "Expo", "Capacitor", "WhatsApp Business Cloud API", "n8n", "Stripe", "Mercado Pago PIX"],
        },
        {
          group: "AI-assisted development",
          items: ["Claude", "Claude Code (CLI)", "Claude API", "Gemini", "Local LLMs", "Spec-Driven Development"],
        },
        {
          group: "Foundations & practices",
          items: ["Python", "Astro.js", "Full-Stack Development", "Software Design", "Monorepo Architecture", "UX Design", "Game Design"],
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
    resumeUrl: "/Marcelo_Augusto_Fries_Resume.pdf",
  },

  pt: {
    nav: { about: "Sobre", projects: "Projetos", skills: "Habilidades", contact: "Contato", resume: "Currículo" },
    hero: {
      available: "Disponível para vagas full-stack remotas",
      greeting: "Olá, sou o",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Eu construo aplicações prontas para produção em web, mobile, desktop e automação. Do design de banco de dados e da arquitetura de backend até front-ends caprichados e o deploy em produção, eu cuido de toda a stack.",
      location: "Brasília, Brasil (GMT-3)",
      viewWork: "Ver meu trabalho",
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
      status: { Live: "No ar", "In Development": "Em desenvolvimento", Prototype: "Protótipo", Completed: "Concluído" },
      items: [
        {
          ...luckyClover,
          title: "Lucky Clover",
          tagline: "Uma plataforma completa de gestão de loteria, entregue sozinho.",
          description:
            "Uma plataforma multi-app de gestão de loteria que construí como monorepo com quatro aplicações: um app web de apostas, um app de ponto de venda para revendedores, um painel administrativo e um app Android com impressão térmica de bilhetes.",
          year: "2026",
          highlights: [
            "Em produção: 3.000+ apostas processadas e ~225 clientes ativos por mês",
            "Backend no Supabase com Row-Level Security e RPCs SECURITY DEFINER para autorização por papel no nível do banco de dados",
            "Fluxo de autenticação próprio baseado em CPF, emitindo JWTs assinados para todos os front-ends",
            "Integração com Mercado Pago PIX, com confirmação via webhook e sincronização agendada dos resultados oficiais",
          ],
        },
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
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "Um protótipo de agendamento white label para barbearias, da landing ao painel da equipe.",
          description:
            "Uma prova de conceito funcional em Next.js 16 (App Router) com server components e Postgres na Neon. Um único arquivo de configuração de marca comanda o site inteiro — nome, logo, cores, serviços, unidades, profissionais e horários — então colocar um novo cliente no ar é mudar configuração, não reescrever código.",
          year: "2026",
          highlights: [
            "Fluxo de agendamento em quatro passos (unidade → serviço → profissional/dia/horário → dados), com disponibilidade calculada no servidor a partir da agenda real",
            "Painel da equipe com sessão em cookie assinado por HMAC, recorte por barbeiro validado no servidor e indicadores de faturamento, ticket médio e cancelamentos",
            "Checkout simulado de Pix e cartão com o valor vindo do catálogo no servidor, pronto para trocar por um PSP real sem mexer no contrato do front",
          ],
        },
        {
          ...supportChatbot,
          title: "Chatbot de Suporte Omnichannel",
          tagline: "Atendimento ao cidadão assistido por IA para um serviço público de saúde.",
          description:
            "Uma solução de suporte omnichannel construída de ponta a ponta para um serviço público de saúde, integrando um helpdesk open-source com automação no n8n e a API WhatsApp Business Cloud para atendimento unificado e multi-atendente.",
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
        {
          group: "Stack principal",
          items: ["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
        },
        {
          group: "Backend e infraestrutura",
          items: ["REST APIs", "Row-Level Security", "Autenticação JWT", "Auth0", "Webhooks", "Docker", "AWS", "Vercel", "CI/CD", "GitHub Actions"],
        },
        {
          group: "Multiplataforma e integrações",
          items: ["React Native", "Expo", "Capacitor", "WhatsApp Business Cloud API", "n8n", "Stripe", "Mercado Pago PIX"],
        },
        {
          group: "Desenvolvimento assistido por IA",
          items: ["Claude", "Claude Code (CLI)", "Claude API", "Gemini", "LLMs Locais", "Desenvolvimento Orientado a Especificação"],
        },
        {
          group: "Fundamentos e práticas",
          items: ["Python", "Astro.js", "Desenvolvimento Full-Stack", "Design de Software", "Arquitetura Monorepo", "UX Design", "Game Design"],
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
    resumeUrl: "/Marcelo_Augusto_Fries_Curriculo_PT-BR.pdf",
  },
};
