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
//   tagline      ~1-2 lines  (<= ~115 chars)
//   description  ~4 lines    (<= ~260 chars)
//   highlights   3 shown collapsed, <= 2 lines each (all shown on expand)
//
// STAR, woven (not labelled): the description carries Situation + Task, and
// each highlight is Action -> Result. The description budget allows for the
// extra context that Situation needs.
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
const whatsappChannel = {
  slug: "whatsapp-service-channel",
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
        "Work so far includes a WhatsApp service channel and a work-tablet management platform delivered under NDA, an online booking website that barbershops can launch under their own brand, and an action game for browser and desktop. Each delivery comes with clear, simple guides so non-technical teams can run it on their own. Professional working proficiency in English, with availability across US and European business hours.",
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
            "A business consultancy with no in-house tech team needed complete custom systems, and brought in a single developer to own them from the data and servers to the screens the team uses every day.",
            "Runs each system from the first meetings through launch, training and support, so the company puts new internal tools to work without hiring a tech team.",
            "Ships every system with simple guides, so non-technical staff keep it running on their own. What was built, how it works and the results it produced are confidential under NDA.",
          ],
        },
        {
          role: "Full-Stack Developer",
          org: "Self-Employed",
          meta: "Freelance · Remote",
          period: "Nov 2024 – Present",
          points: [
            "Small businesses and independent professionals need complete software but have nobody to build or look after it, so every project is taken on solo, from understanding the need to launch and ongoing support.",
            "Built an online booking website that each barbershop launches under its own brand, so shops take bookings in a few taps and follow appointments and earnings in a private dashboard instead of a paper diary.",
            "Alongside client work, designed and built an action game for browser and desktop entirely solo — gameplay, visuals, performance and release — now heading for launch.",
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
          ...whatsappChannel,
          title: "Service Channel on WhatsApp",
          tagline: "A single official WhatsApp number where an organization receives, sorts and answers every request in one place.",
          description:
            "Contact was spread across separate numbers and personal accounts, and nobody could tell who had already answered what. The job was to bring everything into one official WhatsApp number that sorts each request and puts the whole team in the same inbox.",
          year: "2026",
          highlights: [
            "Built an assistant that answers first and hands the conversation to a person when needed, so nobody waits in line just to be pointed to the right team",
            "Turned bulk messaging into a simple spreadsheet upload, so the team runs a campaign without asking for technical help",
            "Added a privacy notice, opt-out and data-deletion requests, so everyone contacted controls what they receive",
            "Handed over written guides, so the channel keeps running day to day without the developer",
          ],
          note: "Confidential — under NDA",
        },
        {
          ...tabletManagement,
          title: "Work Tablet Management",
          tagline: "A control center to set up, lock down and look after a fleet of work tablets from a single screen.",
          description:
            "Organizations that hand tablets to their teams lose track of where the devices are and what gets installed on them. The job was one screen to set up, limit and look after the whole fleet, without turning a work tablet into a surveillance device.",
          year: "2026",
          highlights: [
            "Made setup a single QR code scan, so a new tablet reaches the field ready to use with no manual configuration",
            "Put lock, restart and erase in the dashboard, so a lost device stops being a risk the same day it disappears",
            "Limited location to working hours and made the activity history impossible to edit, so the team is protected and every action stays accountable",
            "Load-tested the fleet before launch, so a large rollout keeps reporting without losing data",
          ],
          note: "Confidential — under NDA",
        },
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "An online booking website for barbershops that each shop can launch under its own brand.",
          description:
            "Most barbershops either take bookings by phone or rent a page on someone else's platform. The job was a booking site each shop can launch under its own brand — name, logo, colors, services and team — without paying for a new build every time.",
          year: "2026",
          highlights: [
            "Cut booking to four simple steps — location, service, barber and time — so a customer is done in under a minute",
            "Offered only the times each barber genuinely has free, so double bookings stop reaching the shop",
            "Gave the shop a dashboard with revenue, average spend and cancellations, while each barber sees only their own schedule",
            "Left the payment step ready for Pix and card, so a real provider can be connected without rebuilding the flow",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "A fast-paced wizard action game, playable in the browser and on Windows, macOS and Linux.",
          description:
            "An action game with no team behind it: gameplay, visuals, menus and performance all fall to one person, and it still has to run in the browser and on Windows, macOS and Linux from one codebase. Players pick one of 8 wizards and fight waves of enemies.",
          year: "Since 2025",
          highlights: [
            "Designed 8 playable wizards, 32 spells and 50 achievements, so no two runs play the same way",
            "Translated the game into 6 languages and added full controller support, so it reaches players well beyond a keyboard",
            "Rebuilt the heaviest part of the rendering, so the game stays smooth even on modest computers",
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
        "Os trabalhos incluem um canal de atendimento via WhatsApp e uma plataforma de gestão de tablets corporativos entregues sob NDA, um site de agendamento online que barbearias lançam com a própria marca e um jogo de ação para navegador e computador. Cada entrega vem com guias claros e simples, para que equipes sem conhecimento técnico operem tudo com autonomia. Inglês em nível profissional e disponibilidade nos horários comerciais dos EUA e da Europa.",
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
            "Uma consultoria empresarial sem equipe de tecnologia própria precisava de sistemas sob medida completos e trouxe um único desenvolvedor para assumi-los, dos dados e servidores às telas que a equipe usa no dia a dia.",
            "Condução de cada sistema das primeiras reuniões ao lançamento, treinamento e suporte, de modo que a empresa passou a colocar novas ferramentas internas em uso sem precisar montar um time técnico.",
            "Entrega de todo sistema com guias simples, para que equipes sem conhecimento técnico o mantenham no ar com autonomia. O que foi construído, como funciona e os resultados obtidos são confidenciais, sob NDA.",
          ],
        },
        {
          role: "Desenvolvedor Full-Stack",
          org: "Autônomo",
          meta: "Freelancer · Remoto",
          period: "Nov 2024 – Presente",
          points: [
            "Pequenas empresas e profissionais independentes precisam de software completo, mas não têm quem construa nem quem cuide depois, então cada projeto é assumido de forma individual, do entendimento da necessidade ao lançamento e suporte.",
            "Construção de um site de agendamento online que cada barbearia lança com a própria marca, de modo que a barbearia recebe agendamentos em poucos toques e acompanha horários e faturamento em um painel privado, no lugar da agenda de papel.",
            "Em paralelo ao trabalho com clientes, concepção e desenvolvimento individual de um jogo de ação para navegador e computador — jogabilidade, visual, desempenho e publicação —, hoje a caminho do lançamento.",
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
          ...whatsappChannel,
          title: "Canal de Atendimento via WhatsApp",
          tagline: "Um único número oficial de WhatsApp para receber, organizar e responder todos os contatos em um só lugar.",
          description:
            "O contato estava espalhado por números e contas pessoais, e ninguém sabia dizer quem já havia respondido o quê. O desafio era reunir tudo em um único número oficial de WhatsApp, que organiza cada pedido e coloca a equipe inteira na mesma caixa de entrada.",
          year: "2026",
          highlights: [
            "Criação de um assistente que responde primeiro e passa a conversa para uma pessoa quando necessário, de modo que ninguém espera na fila só para ser direcionado à equipe certa",
            "Envios em massa a partir de uma planilha simples, para que a equipe faça uma campanha sem pedir ajuda técnica",
            "Aviso de privacidade, descadastro e pedido de exclusão de dados, para que quem é contatado controle o que recebe",
            "Entrega de guias escritos, para que o canal siga funcionando no dia a dia sem o desenvolvedor",
          ],
          note: "Confidencial — sob NDA",
        },
        {
          ...tabletManagement,
          title: "Gestão de Tablets Corporativos",
          tagline: "Uma central para configurar, bloquear e acompanhar uma frota de tablets de trabalho em uma única tela.",
          description:
            "Organizações que entregam tablets às equipes perdem de vista onde estão os aparelhos e o que é instalado neles. O desafio era uma única tela para configurar, restringir e acompanhar a frota inteira, sem transformar o tablet de trabalho em vigilância.",
          year: "2026",
          highlights: [
            "Configuração reduzida à leitura de um QR code, de modo que um tablet novo chega ao campo pronto para uso, sem ajustes manuais",
            "Bloqueio, reinicialização e apagamento no painel, de modo que um aparelho perdido deixa de ser risco no mesmo dia",
            "Localização restrita ao expediente e histórico de ações impossível de alterar, protegendo a equipe sem abrir mão da rastreabilidade",
            "Teste de carga da frota antes do lançamento, para que uma implantação grande reporte sem perder dados",
          ],
          note: "Confidencial — sob NDA",
        },
        {
          ...barbeariaTech,
          title: "Barbearia Tech",
          tagline: "Um site de agendamento online para barbearias, que cada negócio pode lançar com a própria marca.",
          description:
            "A maioria das barbearias agenda por telefone ou aluga uma página na plataforma de outra empresa. O desafio era um site que cada barbearia lança com a própria marca — nome, logo, cores, serviços e equipe — sem pagar por um novo desenvolvimento.",
          year: "2026",
          highlights: [
            "Agendamento reduzido a quatro passos simples — unidade, serviço, barbeiro e horário —, de modo que o cliente conclui em menos de um minuto",
            "Exibição apenas dos horários realmente livres de cada barbeiro, de modo que agendamentos duplicados deixam de chegar à barbearia",
            "Painel com faturamento, ticket médio e cancelamentos para a barbearia, enquanto cada barbeiro vê só a própria agenda",
            "Etapa de pagamento pronta para Pix e cartão, para que um provedor real seja conectado sem refazer o fluxo",
          ],
        },
        {
          ...manaRealm,
          title: "Mana Realm",
          tagline: "Um jogo de ação frenético com magos, jogável no navegador e no Windows, macOS e Linux.",
          description:
            "Um jogo de ação sem equipe por trás: jogabilidade, visual, menus e desempenho ficam com uma pessoa só, e ainda assim roda no navegador e no Windows, macOS e Linux a partir do mesmo código. O jogador escolhe um entre 8 magos e enfrenta ondas de inimigos.",
          year: "Desde 2025",
          highlights: [
            "Criação de 8 magos jogáveis, 32 feitiços e 50 conquistas, de modo que duas partidas nunca se parecem",
            "Tradução para 6 idiomas e suporte completo a controle, para alcançar muito mais gente do que só quem joga no teclado",
            "Reconstrução da parte mais pesada da renderização, para que o jogo continue fluido até em computadores mais simples",
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
