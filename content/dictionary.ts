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
// Collapsed cards clamp longer copy; the "Read more" toggle reveals the full
// description and every highlight, so nothing stays permanently hidden.
//
// Card copy is written for non-technical readers: no languages, frameworks or
// jargon. The tech stack lives only in the Skills section.
//
// NDA projects: describe the problem and outcome in generic terms only — no
// client or agency names, sector specifics, screenshots, links or identifying
// metrics.
// ---------------------------------------------------------------------------

// Fields that never change between languages — kept here so the two language
// bundles can't drift apart on slugs, links, or screenshots.
const citizenService = {
  slug: "citizen-service-whatsapp",
  status: "Live" as const,
  // Confidential client work (NDA) — no link, no screenshots.
  links: [] as ProjectLink[],
  featured: true,
};

const tabletManagement = {
  slug: "work-tablet-management",
  status: "Live" as const,
  // Confidential client work (NDA) — no link, no screenshots.
  links: [] as ProjectLink[],
  featured: true,
};

const barbeariaTech = {
  slug: "barbearia-tech",
  status: "Prototype" as const,
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

const manaRealm = {
  slug: "mana-realm",
  status: "In Development" as const,
  links: [{ label: "Live Demo", href: "https://manarealm.vercel.app/", type: "demo" as const }],
  images: [
    "/screenshots/manaprint1.webp",
    "/screenshots/manaprint2.webp",
    "/screenshots/manaprint3.webp",
  ],
  featured: true,
};

export const dictionary: Record<Lang, Dict> = {
  en: {
    nav: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", contact: "Contact", resume: "Résumé" },
    hero: {
      available: "Available for remote full-stack roles & freelance projects",
      role: "Full-Stack Developer",
      tagline:
        "Complete software products, from the database and server to the screens people use, for organizations and businesses without a tech team: understanding the need, then building, launching and supporting the solution. Websites, mobile, desktop and the automations that connect them.",
      location: "Brasília, Brazil (GMT-3)",
      viewWork: "View projects",
    },
    about: {
      eyebrow: "About",
      title: "Profile",
      paragraphs: [
        "A full-stack developer builds every layer of a product: the data behind it, the server logic that makes it work, the screens people interact with and the infrastructure it runs on. Every project is handled solo and end to end, from the first conversation with the client to launch, training and ongoing support.",
        "Work so far includes a WhatsApp service channel and a work-tablet management platform for public-sector organizations, an online booking website that barbershops can launch under their own brand, and an action game for browser and desktop. Each delivery comes with clear, simple guides so non-technical teams can run it on their own. Professional working proficiency in English, with availability across US and European business hours.",
      ],
      facts: [
        { label: "Based in", value: "Brasília, Brazil" },
        { label: "Age", value: "30 years old" },
        { label: "Focus", value: "Full-stack · web, mobile & desktop" },
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
            "Sole developer at a consultancy that serves public-sector organizations, designing and building complete systems, from data and servers to the screens staff use every day.",
            "Delivered a WhatsApp citizen-service channel and a work-tablet management platform, from the first meetings through launch and support.",
            "Every system comes with simple guides so non-technical staff can run it independently. Project details are confidential under NDA.",
          ],
        },
        {
          role: "Full-Stack Developer",
          org: "Self-Employed",
          meta: "Freelance · Remote",
          period: "Nov 2024 – Present",
          points: [
            "Complete software for small businesses and independent professionals without a tech team, from understanding the need to launch and ongoing support.",
            "Delivered an online booking website that each barbershop launches under its own brand: customers book in a few taps, and the team follows appointments and earnings in a private dashboard.",
            "Alongside client work, designed and built an action game for browser and desktop entirely solo, from gameplay and visuals to performance and release.",
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
          ...citizenService,
          title: "Citizen Service on WhatsApp",
          tagline: "A single official WhatsApp channel where a public organization serves and informs the people it attends.",
          description:
            "Contact with the public was spread across dozens of separate channels. They were brought together into one official WhatsApp number, where an automated assistant greets each person and sends them to the right team, and staff reply from one shared inbox.",
          year: "2026",
          highlights: [
            "Automated assistant that answers first and passes the chat to a person when needed",
            "Reminders sent in bulk from a simple spreadsheet upload, about 8x faster after tuning",
            "People can read the privacy notice, opt out or ask for their data to be deleted",
            "Runs on privately managed servers, with guides so the team can operate it independently",
          ],
          note: "Confidential — under NDA",
        },
        {
          ...tabletManagement,
          title: "Work Tablet Management",
          tagline: "A control center to set up, lock down and look after a fleet of work tablets from a single screen.",
          description:
            "Built for organizations that hand out tablets to their field teams. A new tablet is ready after scanning a QR code, stays locked to the apps the job needs, and can be managed remotely. Location is recorded only during working hours, protecting employee privacy.",
          year: "2026",
          highlights: [
            "New tablets set up by simply scanning a QR code, with no manual configuration",
            "Lost device? Lock, restart or erase it remotely from a web dashboard",
            "Location tracked only during work hours, with an activity log no one can alter",
            "Stress-tested with 50 simulated tablets sending 150,000 location points with zero errors",
          ],
          note: "Confidential — under NDA",
        },
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "An online booking website for barbershops that each shop can launch under its own brand.",
          description:
            "A ready-to-brand booking site: each barbershop plugs in its name, logo, colors, services and team, and gets its own website without new development. Customers book in a few taps, and the shop follows appointments and earnings in a private dashboard.",
          year: "2026",
          highlights: [
            "Booking in four simple steps: location, service, barber and time, then contact details",
            "Only shows times that are truly available for each barber",
            "Staff dashboard with revenue, average spend and cancellations; each barber sees only their own schedule",
            "Payment step ready for Pix and card, prepared to connect to a real payment provider",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "A fast-paced wizard action game, playable in the browser and on Windows, macOS and Linux.",
          description:
            "An action game designed and built entirely solo: gameplay, visuals, menus and performance. Players pick one of 8 wizards and fight through waves of enemies, using keyboard and mouse or a game controller.",
          year: "Since 2025",
          highlights: [
            "8 playable wizards, 32 spells and 50 achievements to unlock",
            "Available in 6 languages, with full game controller support",
            "Tuned to run smoothly even on modest computers",
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
          group: "Development practices",
          items: ["Systems Design", "Software Architecture", "Full-Stack Development", "API Design", "Database Modeling", "Monorepo Architecture", "Third-Party Integrations", "Data Privacy (LGPD)", "Production Troubleshooting", "Documentation"],
        },
        {
          group: "Programming languages",
          items: ["TypeScript", "JavaScript", "SQL", "Python", "Kotlin", "Bash", "HTML5", "CSS3"],
        },
        {
          group: "Backend & data",
          items: ["Node.js", "Fastify", "REST APIs", "Zod", "PostgreSQL", "TimescaleDB", "Redis", "BullMQ", "Supabase", "Neon"],
        },
        {
          group: "Frontend & apps",
          items: ["React", "Next.js", "Astro", "Vite", "Tailwind CSS", "Zustand", "React Native", "Expo", "Capacitor", "Android (Kotlin)", "Room", "WorkManager", "NW.js"],
        },
        {
          group: "Integrations & automation",
          items: ["WhatsApp Business Cloud API", "Chatwoot", "n8n", "Android Management API", "Cloud Pub/Sub", "Mercado Pago Pix", "Stripe", "Webhooks", "Steamworks"],
        },
        {
          group: "Infrastructure & DevOps",
          items: ["Docker", "Docker Compose", "Linux", "Nginx", "Cloudflare", "S3-Compatible Storage", "AWS", "Google Cloud (GCP)", "GitHub Actions", "CI/CD", "Vercel", "Backup & Restore"],
        },
        {
          group: "Security",
          items: ["Auth0", "JWT & Refresh Tokens", "RBAC", "Row-Level Security", "HMAC / OIDC Verification", "Rate Limiting", "Audit Logging"],
        },
        {
          group: "AI-assisted development",
          items: ["Claude Code", "Claude API", "Gemini", "Local LLMs", "Spec-Driven Development"],
        },
        { group: "Languages (Spoken)", items: ["English", "Portuguese"] },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Open to new projects and roles",
      body: "Available for remote full-stack developer roles and freelance projects. Email is the fastest way to get in touch.",
      downloadResume: "Download résumé",
    },
    footer: { builtWith: "Built with Next.js & Tailwind CSS." },
    language: { label: "Language" },
    resumeUrl: "/Marcelo_Augusto_Fries_Resume.pdf",
  },

  pt: {
    nav: { about: "Sobre", experience: "Experiência", projects: "Projetos", skills: "Habilidades", contact: "Contato", resume: "Currículo" },
    hero: {
      available: "Disponível para vagas full-stack remotas e projetos freelancer",
      role: "Desenvolvedor Full-Stack",
      tagline:
        "Produtos de software completos, do banco de dados e do servidor às telas que as pessoas usam, para organizações e empresas sem equipe de tecnologia: entender a necessidade e, a partir disso, construir, colocar no ar e dar suporte à solução. Sites, aplicativos, sistemas para computador e as automações que conectam tudo isso.",
      location: "Brasília, Brasil (GMT-3)",
      viewWork: "Ver projetos",
    },
    about: {
      eyebrow: "Sobre",
      title: "Perfil",
      paragraphs: [
        "Um desenvolvedor full-stack constrói todas as camadas de um produto: os dados por trás dele, a lógica no servidor que faz tudo funcionar, as telas com que as pessoas interagem e a infraestrutura onde ele roda. Cada projeto é conduzido de forma individual e completa, da primeira conversa com o cliente ao lançamento, treinamento e suporte contínuo.",
        "Os trabalhos incluem um canal de atendimento via WhatsApp e uma plataforma de gestão de tablets corporativos para organizações do setor público, um site de agendamento online que barbearias lançam com a própria marca e um jogo de ação para navegador e computador. Cada entrega vem com guias claros e simples, para que equipes sem conhecimento técnico operem tudo com autonomia. Inglês em nível profissional e disponibilidade nos horários comerciais dos EUA e da Europa.",
      ],
      facts: [
        { label: "Baseado em", value: "Brasília, Brasil" },
        { label: "Idade", value: "30 anos" },
        { label: "Foco", value: "Full-stack · web, mobile e desktop" },
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
            "Único desenvolvedor de uma consultoria que atende organizações do setor público, projetando e construindo sistemas completos, dos dados e servidores às telas que as equipes usam no dia a dia.",
            "Entrega de um canal de atendimento ao cidadão via WhatsApp e de uma plataforma de gestão de tablets corporativos, das primeiras reuniões ao lançamento e suporte.",
            "Todo sistema vem com guias simples, para que equipes sem conhecimento técnico o operem com autonomia. Detalhes dos projetos são confidenciais, sob NDA.",
          ],
        },
        {
          role: "Desenvolvedor Full-Stack",
          org: "Autônomo",
          meta: "Freelancer · Remoto",
          period: "Nov 2024 – Presente",
          points: [
            "Software completo para pequenas empresas e profissionais independentes sem equipe de tecnologia, do entendimento da necessidade ao lançamento e suporte da solução.",
            "Entrega de um site de agendamento online que cada barbearia lança com a própria marca: o cliente agenda em poucos toques e a equipe acompanha horários e faturamento em um painel privado.",
            "Em paralelo ao trabalho com clientes, concepção e desenvolvimento individual de um jogo de ação para navegador e computador, da jogabilidade e do visual ao desempenho e ao lançamento.",
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
          ...citizenService,
          title: "Atendimento ao Cidadão via WhatsApp",
          tagline: "Um único canal oficial de WhatsApp para uma organização pública atender e informar a população.",
          description:
            "O contato com o público estava espalhado por dezenas de canais diferentes. Tudo foi reunido em um único número oficial de WhatsApp, onde um assistente automático recebe cada pessoa e a direciona para a equipe certa, e os atendentes respondem a partir de uma caixa de entrada compartilhada.",
          year: "2026",
          highlights: [
            "Assistente automático que responde primeiro e passa a conversa para uma pessoa quando necessário",
            "Lembretes enviados em massa a partir de uma planilha, cerca de 8x mais rápido após ajustes",
            "O cidadão pode ler o aviso de privacidade, deixar de receber mensagens ou pedir a exclusão dos dados",
            "Roda em servidores de gestão privada, com guias para que a equipe opere com autonomia",
          ],
          note: "Confidencial — sob NDA",
        },
        {
          ...tabletManagement,
          title: "Gestão de Tablets Corporativos",
          tagline: "Uma central para configurar, bloquear e acompanhar uma frota de tablets de trabalho em uma única tela.",
          description:
            "Feita para organizações que entregam tablets às suas equipes de campo. Um tablet novo fica pronto ao ler um QR code, permanece restrito aos aplicativos do trabalho e pode ser gerenciado à distância. A localização é registrada apenas no horário de expediente, protegendo a privacidade dos funcionários.",
          year: "2026",
          highlights: [
            "Tablets novos configurados apenas lendo um QR code, sem ajustes manuais",
            "Perdeu o aparelho? Bloqueie, reinicie ou apague à distância pelo painel web",
            "Localização registrada só no expediente, com um histórico de ações que ninguém consegue alterar",
            "Testada com 50 tablets simulados enviando 150 mil pontos de localização, sem nenhum erro",
          ],
          note: "Confidencial — sob NDA",
        },
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "Um site de agendamento online para barbearias, que cada negócio pode lançar com a própria marca.",
          description:
            "Um site de agendamento pronto para personalizar: cada barbearia insere nome, logo, cores, serviços e equipe e ganha o próprio site sem novo desenvolvimento. O cliente agenda em poucos toques, e a barbearia acompanha horários e faturamento em um painel privado.",
          year: "2026",
          highlights: [
            "Agendamento em quatro passos simples: unidade, serviço, barbeiro e horário, e depois os dados",
            "Mostra apenas os horários realmente livres de cada barbeiro",
            "Painel da equipe com faturamento, ticket médio e cancelamentos; cada barbeiro vê só a própria agenda",
            "Etapa de pagamento pronta para Pix e cartão, preparada para conectar a um provedor real",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "Um jogo de ação frenético com magos, jogável no navegador e no Windows, macOS e Linux.",
          description:
            "Um jogo de ação idealizado e construído de forma totalmente individual: jogabilidade, visual, menus e desempenho. O jogador escolhe um entre 8 magos e enfrenta ondas de inimigos, usando teclado e mouse ou controle.",
          year: "Desde 2025",
          highlights: [
            "8 magos jogáveis, 32 feitiços e 50 conquistas para desbloquear",
            "Disponível em 6 idiomas, com suporte completo a controle",
            "Otimizado para rodar bem até em computadores mais simples",
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
          group: "Práticas de desenvolvimento",
          items: ["Systems Design", "Arquitetura de Software", "Desenvolvimento Full-Stack", "Design de APIs", "Modelagem de Dados", "Arquitetura Monorepo", "Integrações com Terceiros", "Privacidade de Dados (LGPD)", "Resolução de Problemas em Produção", "Documentação"],
        },
        {
          group: "Linguagens de programação",
          items: ["TypeScript", "JavaScript", "SQL", "Python", "Kotlin", "Bash", "HTML5", "CSS3"],
        },
        {
          group: "Backend e dados",
          items: ["Node.js", "Fastify", "REST APIs", "Zod", "PostgreSQL", "TimescaleDB", "Redis", "BullMQ", "Supabase", "Neon"],
        },
        {
          group: "Frontend e aplicativos",
          items: ["React", "Next.js", "Astro", "Vite", "Tailwind CSS", "Zustand", "React Native", "Expo", "Capacitor", "Android (Kotlin)", "Room", "WorkManager", "NW.js"],
        },
        {
          group: "Integrações e automação",
          items: ["WhatsApp Business Cloud API", "Chatwoot", "n8n", "Android Management API", "Cloud Pub/Sub", "Mercado Pago Pix", "Stripe", "Webhooks", "Steamworks"],
        },
        {
          group: "Infraestrutura e DevOps",
          items: ["Docker", "Docker Compose", "Linux", "Nginx", "Cloudflare", "Armazenamento S3", "AWS", "Google Cloud (GCP)", "GitHub Actions", "CI/CD", "Vercel", "Backup e Restauração"],
        },
        {
          group: "Segurança",
          items: ["Auth0", "JWT e Refresh Tokens", "RBAC", "Row-Level Security", "Verificação HMAC / OIDC", "Rate Limiting", "Logs de Auditoria"],
        },
        {
          group: "Desenvolvimento assistido por IA",
          items: ["Claude Code", "Claude API", "Gemini", "LLMs Locais", "Desenvolvimento Orientado a Especificação"],
        },
        { group: "Idiomas", items: ["Inglês", "Português"] },
      ],
    },
    contact: {
      eyebrow: "Contato",
      title: "Aberto a novos projetos e oportunidades",
      body: "Disponível para vagas remotas de desenvolvedor full-stack e projetos freelancer. O e-mail é o canal mais rápido para o primeiro contato.",
      downloadResume: "Baixar currículo",
    },
    footer: { builtWith: "Feito com Next.js e Tailwind CSS." },
    language: { label: "Idioma" },
    resumeUrl: "/Marcelo_Augusto_Fries_Curriculo_PT-BR.pdf",
  },
};
