import type { Project, ProjectLink } from "./projects";

export type Lang = "en" | "pt";

export type Dict = {
  nav: { about: string; experience: string; projects: string; skills: string; contact: string; resume: string };
  hero: {
    available: string;
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
  experience: {
    eyebrow: string;
    title: string;
    items: { role: string; org: string; meta: string; period: string; points: string[] }[];
    educationLabel: string;
    education: { degree: string; school: string };
  };
  projects: {
    eyebrow: string;
    title: string;
    status: Record<Project["status"], string>;
    readMore: string;
    readLess: string;
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
//   highlights   3 shown collapsed, <= 2 lines each (all shown on expand)
//   tags         5 shown, the rest collapse into a "+N" chip
// Collapsed cards clamp longer copy; the "Read more" toggle reveals the full
// description and every highlight, so nothing stays permanently hidden.
// ---------------------------------------------------------------------------

// Fields that never change between languages — kept here so the two language
// bundles can't drift apart on slugs, links, or tech tags.
const manaRealm = {
  slug: "mana-realm",
  status: "In Development" as const,
  tags: ["JavaScript", "HTML5 Canvas", "CSS3", "Game Dev"],
  links: [{ label: "Live Demo", href: "https://manarealm.vercel.app/", type: "demo" as const }],
  images: [
    "/screenshots/manaprint1.webp",
    "/screenshots/manaprint2.webp",
    "/screenshots/manaprint3.webp",
  ],
  featured: true,
};

const barbeariaTech = {
  slug: "barbearia-tech",
  status: "Prototype" as const,
  tags: ["Next.js 16", "React 19", "TypeScript", "Neon Postgres", "CSS Modules", "Vercel"],
  // Private repo — demo only.
  links: [{ label: "Live Demo", href: "https://barbeariatech.vercel.app", type: "demo" as const }],
  images: [
    "/screenshots/barbprint1.webp",
    "/screenshots/barbprint2.webp",
    "/screenshots/barbprint3.webp",
    "/screenshots/barbprint4.webp",
  ],
  featured: true,
};

export const dictionary: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Résumé" },
    hero: {
      available: "Available for remote full-stack roles",
      role: "Full-Stack Developer",
      tagline:
        "End-to-end delivery of production software for small businesses and public-sector teams without in-house engineering: requirements, systems design, implementation, deployment and ongoing support. Coverage spans web, mobile, desktop and the automation layer that connects them.",
      location: "Brasília, Brazil (GMT-3)",
      viewWork: "View projects",
    },
    about: {
      eyebrow: "About",
      title: "Profile",
      paragraphs: [
        "Full-stack developer with end-to-end ownership of the delivery cycle: architecture, backend, front-end and deployment. Work is not tied to a single platform, covering web, mobile and desktop alongside the automation and integration workflows that connect them, with the stack selected per problem rather than imposed by default.",
        "Delivered projects span distinct domains, from business-management software and automation workflows for private and public-sector clients to a white-label booking product, alongside a browser and desktop game currently in development. Delivery follows a spec-driven workflow with an emphasis on maintainable, production-ready code. Professional working proficiency in English, with availability across US and European business hours.",
      ],
      facts: [
        { label: "Based in", value: "Brasília, Brazil" },
        { label: "Age", value: "30 years old" },
        { label: "Focus", value: "Full-stack · multi-platform" },
        { label: "Availability", value: "Remote · US & EU hours" },
        { label: "Languages", value: "English · Portuguese" },
      ],
    },
    experience: {
      eyebrow: "Career",
      title: "Experience",
      items: [
        {
          role: "Full-Stack Developer",
          org: "Pública Assessoria em Gestão Empresarial",
          meta: "Contract · Brasília (Hybrid)",
          period: "Feb 2026 – Present",
          points: [
            "Sole developer for a consultancy without an internal engineering team, converting business requirements into full-stack business-management software.",
            "Ownership of systems design through delivery, with solutions in day-to-day operational use and documentation that allows non-technical staff to operate them independently.",
          ],
        },
        {
          role: "Freelance Full-Stack Developer",
          org: "Self-Employed",
          meta: "Remote",
          period: "Nov 2024 – Present",
          points: [
            "Delivery for small-business and public-sector clients without in-house engineering teams, covering requirements, systems design, implementation, deployment and post-launch support.",
            "Delivery standardized on a spec-driven workflow with monorepo architecture, containerization and automated CI/CD, keeping applications in live operation without a dedicated ops team.",
          ],
        },
      ],
      educationLabel: "Education",
      education: {
        degree: "Associate Degree — Systems Analysis and Development",
        school: "Senac · 2024",
      },
    },
    projects: {
      eyebrow: "Work",
      title: "Selected projects",
      status: { Live: "Live", "In Development": "In Development", Prototype: "Prototype", Completed: "Completed" },
      readMore: "Read more",
      readLess: "Show less",
      items: [
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "White-label booking prototype for barbershops, from landing page to staff dashboard.",
          description:
            "Working proof of concept built on Next.js 16 App Router with server components and Neon Postgres. A single brand configuration file drives the entire site (name, logo, colors, services, units, staff and hours), so onboarding a new client becomes a configuration change rather than a rewrite.",
          year: "2026",
          highlights: [
            "Four-step booking flow (unit → service → barber/day/time → details) with availability computed server-side from the live schedule",
            "Staff dashboard with HMAC-signed session cookies, per-barber scoping enforced on the server, and revenue, ticket and cancellation metrics",
            "Simulated Pix/card checkout with server-side pricing, swappable for a real PSP without touching the front-end contract",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "Browser-based game built from scratch, without engine or frameworks.",
          description:
            "Browser-based game developed from the ground up in vanilla JavaScript, HTML5 and CSS3. Game logic, rendering and interface are built and maintained solo, with no engine or framework dependencies.",
          year: "Since 2025",
          highlights: [
            "Custom game loop, rendering, and UI written from scratch",
            "Zero frameworks, pure vanilla JS for full control over performance",
            "Expected release: late 2026",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Toolkit",
      title: "Skills & technologies",
      groups: [
        {
          group: "Core stack",
          items: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Astro.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
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
          items: ["Full-Stack Development", "Software Design", "Monorepo Architecture", "UX Design", "Game Design"],
        },
        { group: "Languages (Spoken)", items: ["English", "Portuguese"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to new projects and roles",
      body: "Available for remote full-stack roles and freelance engagements. Email is the fastest channel for a first contact.",
      downloadResume: "Download résumé",
    },
    footer: { builtWith: "Built with Next.js & Tailwind CSS." },
    language: { label: "Language" },
    resumeUrl: "/Marcelo_Augusto_Fries_Resume.pdf",
  },

  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", skills: "Habilidades", contact: "Contato", resume: "Currículo" },
    hero: {
      available: "Disponível para vagas full-stack remotas",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Entrega end-to-end de software em produção para pequenas empresas e órgãos do setor público sem equipe interna de engenharia: levantamento de requisitos, systems design, implementação, deploy e suporte contínuo. A atuação abrange web, mobile, desktop e a camada de automação que conecta essas frentes.",
      location: "Brasília, Brasil (GMT-3)",
      viewWork: "Ver projetos",
    },
    about: {
      eyebrow: "Sobre",
      title: "Perfil",
      paragraphs: [
        "Desenvolvedor full-stack com atuação end-to-end no ciclo de entrega: arquitetura, backend, front-end e deploy. O trabalho não se limita a uma única plataforma, abrangendo web, mobile e desktop, além dos fluxos de automação e integração que conectam essas frentes, com a stack definida a partir do problema e não de um padrão fixo.",
        "Os projetos entregues abrangem domínios distintos, de software de gestão e fluxos de automação para clientes privados e do setor público a um produto de agendamento white label, além de um jogo para navegador e desktop em desenvolvimento. A entrega segue um fluxo orientado a especificação, com ênfase em código sustentável e pronto para produção. Inglês em nível profissional e disponibilidade nos horários comerciais dos EUA e da Europa.",
      ],
      facts: [
        { label: "Baseado em", value: "Brasília, Brasil" },
        { label: "Idade", value: "30 anos" },
        { label: "Foco", value: "Full-stack · multiplataforma" },
        { label: "Disponibilidade", value: "Remoto · horário EUA e Europa" },
        { label: "Idiomas", value: "Inglês · Português" },
      ],
    },
    experience: {
      eyebrow: "Carreira",
      title: "Experiência",
      items: [
        {
          role: "Desenvolvedor Full-Stack",
          org: "Pública Assessoria em Gestão Empresarial",
          meta: "Contrato · Brasília (Híbrido)",
          period: "Fev 2026 – Presente",
          points: [
            "Desenvolvedor único de uma consultoria sem equipe interna de engenharia, com a conversão de requisitos de negócio em software de gestão full-stack.",
            "Responsabilidade pelo systems design até a entrega, com soluções em uso operacional diário e documentação que permite a operação por equipes não técnicas.",
          ],
        },
        {
          role: "Desenvolvedor Full-Stack Freelancer",
          org: "Autônomo",
          meta: "Remoto",
          period: "Nov 2024 – Presente",
          points: [
            "Atendimento a clientes de pequeno porte e do setor público sem equipe interna de engenharia, com entrega integral de cada projeto: requisitos, systems design, implementação, deploy e suporte pós-lançamento.",
            "Padronização da entrega em um fluxo orientado a especificação, com arquitetura monorepo, containerização e CI/CD automatizado, mantendo as aplicações em operação sem equipe dedicada de ops.",
          ],
        },
      ],
      educationLabel: "Formação",
      education: {
        degree: "Tecnólogo — Análise e Desenvolvimento de Sistemas",
        school: "Senac · 2024",
      },
    },
    projects: {
      eyebrow: "Projetos",
      title: "Projetos selecionados",
      status: { Live: "No ar", "In Development": "Em desenvolvimento", Prototype: "Protótipo", Completed: "Concluído" },
      readMore: "Ver mais",
      readLess: "Ver menos",
      items: [
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "Protótipo de agendamento white label para barbearias, da landing ao painel da equipe.",
          description:
            "Prova de conceito funcional em Next.js 16 (App Router) com server components e Postgres na Neon. Um único arquivo de configuração de marca controla todo o site (nome, logo, cores, serviços, unidades, profissionais e horários), de modo que a entrada de um novo cliente se torna mudança de configuração, e não reescrita de código.",
          year: "2026",
          highlights: [
            "Fluxo de agendamento em quatro passos (unidade → serviço → profissional/dia/horário → dados), com disponibilidade calculada no servidor a partir da agenda real",
            "Painel da equipe com sessão em cookie assinado por HMAC, recorte por barbeiro validado no servidor e indicadores de faturamento, ticket médio e cancelamentos",
            "Checkout simulado de Pix e cartão com o valor vindo do catálogo no servidor, pronto para trocar por um PSP real sem mexer no contrato do front",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "Jogo de navegador desenvolvido do zero, sem engine ou frameworks.",
          description:
            "Jogo de navegador desenvolvido do zero em JavaScript puro, HTML5 e CSS3. Lógica de jogo, renderização e interface são construídas e mantidas de forma individual, sem engine ou frameworks.",
          year: "Desde 2025",
          highlights: [
            "Game loop, renderização e interface escritos do zero",
            "Zero frameworks, JavaScript puro para controle total de performance",
            "Lançamento previsto: fim de 2026",
          ],
        },
      ],
    },
    skills: {
      eyebrow: "Ferramentas",
      title: "Habilidades e tecnologias",
      groups: [
        {
          group: "Stack principal",
          items: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Astro.js", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
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
          items: ["Desenvolvimento Full-Stack", "Design de Software", "Arquitetura Monorepo", "UX Design", "Game Design"],
        },
        { group: "Idiomas", items: ["Inglês", "Português"] },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Aberto a novos projetos e oportunidades",
      body: "Disponível para vagas full-stack remotas e trabalhos freelancer. O e-mail é o canal mais rápido para o primeiro contato.",
      downloadResume: "Baixar currículo",
    },
    footer: { builtWith: "Feito com Next.js e Tailwind CSS." },
    language: { label: "Idioma" },
    resumeUrl: "/Marcelo_Augusto_Fries_Curriculo_PT-BR.pdf",
  },
};
