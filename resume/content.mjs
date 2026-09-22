// Résumé content, one entry per language. The PDFs in public/ are generated
// from this file by `npm run resume` — edit here, never the PDFs.
//
// STAR, woven (not labelled): STAR was designed for spoken interview answers,
// so on a résumé it is compressed. Each experience carries Situation + Task in
// its `intro` line, and every bullet is Action → Result. The four parts are
// covered across the entry, not repeated inside each bullet.
//
// NDA (Pública Assessoria): clause 3.3 of the service contract covers any
// technical, commercial or strategic information of the client for 5 years
// after the contract ends, and clause 3.4 makes every deliverable their
// exclusive property. So that block names no system, component, tool, metric,
// incident or end client — its Results are qualitative on purpose.

export const en = {
  lang: "en",
  title: "Marcelo Augusto Fries — Full-Stack Developer",
  name: "MARCELO AUGUSTO FRIES",
  role: "Full-Stack Developer",
  contact: [
    "Brasília, Brazil (GMT-3) • marceloaugustofries@outlook.com • +55 61 98616-6969",
    "linkedin.com/in/marceloaugustofries • github.com/marceloaugusto95 • marceloaugustofries.vercel.app",
  ],
  summaryLabel: "Professional Summary",
  summary:
    "Full-Stack Developer who designs, builds and ships production systems end to end: data models, APIs and background workers, web and Android front-ends, and the infrastructure they run on. Since 2024, working solo from requirements to handover for organizations and small businesses with no in-house engineering team, integrating third-party platforms and deploying to self-hosted and cloud infrastructure. Core stack: TypeScript, Node.js, React/Next.js, PostgreSQL, Docker and Kotlin. Every system ships with runbooks and guides that non-technical staff use to run it. Professional working proficiency in English; available during US and European business hours.",
  skillsLabel: "Technical Skills",
  skills: [
    ["Development Practices", "Systems Design, Software Architecture, REST API Design, Database Modeling, Monorepo Architecture, Third-Party API Integration, Data-Privacy Compliance (LGPD), Production Debugging, Technical Documentation"],
    ["Languages", "TypeScript, JavaScript, SQL, Python, Kotlin, Bash, HTML5, CSS3"],
    ["Backend & Data", "Node.js, Fastify, REST APIs, Zod, PostgreSQL, TimescaleDB, Redis, BullMQ, Supabase (RLS, Edge Functions, Realtime, pg_cron), Neon"],
    ["Frontend & Clients", "React, Next.js (App Router), Astro, Vite, Tailwind CSS, Zustand, React Native (Expo), Capacitor, Android (Kotlin, Room, WorkManager), NW.js"],
    ["Integrations & Automation", "WhatsApp Business Cloud API, Chatwoot, n8n, Google Android Management API, Cloud Pub/Sub, Mercado Pago Pix, Stripe, Webhooks, Steamworks"],
    ["Infrastructure & DevOps", "Docker Compose, Linux, Nginx, TLS/Let's Encrypt, Cloudflare, S3-Compatible Storage, AWS, Google Cloud (GCP), GitHub Actions, CI/CD, Vercel, Backup & Restore Automation"],
    ["Security", "Auth0, JWT with Refresh-Token Rotation, RBAC, Row-Level Security, HMAC/OIDC Webhook Verification, Rate Limiting, Audit Logging"],
    ["AI-Assisted Development", "Claude Code, Claude API, Gemini, Local LLMs, Spec-Driven Development"],
  ],
  experienceLabel: "Experience",
  experience: [
    {
      role: "Full-Stack Developer",
      period: "Feb 2026 – Present",
      org: "Pública Assessoria em Gestão Empresarial Ltda · Contract · Brasília, Brazil (Hybrid)",
      // Situation + Task
      intro:
        "A consultancy with no in-house engineering team needed software built to order as well as the day-to-day IT its operation runs on, and brought in a single developer to own both end to end. Everything produced under this contract is confidential and owned by the client, so it is described here in general terms only.",
      // Action → Result
      bullets: [
        "Took every request from requirements through launch, training and support — modelling the data, building the APIs and background processing, the web and mobile front-ends and the servers they run on — so the company ships and evolves its internal tools without an engineering team of its own.",
        "Turned operational needs from non-technical stakeholders into specifications and delivery plans as the single technical point of contact, closing the gap between what was asked for and what was delivered.",
        "Applied privacy-by-design and LGPD practices, access control, backup and recovery routines and automated checks in the delivery pipeline, so each system goes live with its compliance and recovery story already settled rather than retrofitted.",
        "Wrote operator and IT documentation for every delivery, so staff run the systems day to day without developer support.",
      ],
    },
    {
      role: "Full-Stack Developer",
      period: "Nov 2024 – Present",
      org: "Self-Employed · Freelance · Remote",
      intro:
        "Small businesses and independent professionals need complete software but have no engineering staff to build or maintain it. Each project is taken on solo, owning every layer — database, APIs, frontend and deployment — from the first requirements through post-launch support.",
      projects: [
        {
          title: "Barbearia Tech — White-Label Booking Platform",
          tech: "Next.js 16 · React 19 · Neon Postgres · Vercel",
          bullets: [
            "Built a config-driven white-label architecture in which one brand file controls branding, locations, services, staff and payment methods, so onboarding a new barbershop is a config change instead of a new build.",
            "Delivered a 4-step booking flow backed by server-side availability per barber and timezone-aware scheduling, so customers only ever see slots that are genuinely free and double bookings stop reaching the shop.",
            "Added a role-scoped staff dashboard behind HMAC-signed sessions, so owners read revenue, average ticket and cancellations while each barber sees only their own schedule.",
            "Kept the payment layer provider-agnostic across Pix and card, so a real payment provider can be connected without touching the booking flow.",
          ],
        },
      ],
    },
  ],
  projectsLabel: "Selected Projects",
  projects: [
    {
      title: "Mana Realm — Cross-Platform Desktop &amp; Browser Game",
      period: "Oct 2025 – Present",
      tech: "JavaScript · HTML5 Canvas · NW.js · Steamworks · GitHub Actions · Vercel · manarealm.vercel.app",
      intro:
        "A solo-built action game that had to reach the browser and the desktop stores from a single codebase, and stay playable on modest hardware, with no team to split the engine, tooling and release work across.",
      bullets: [
        "Ships one vanilla-JS codebase to the web and to 4 desktop targets (Windows, Linux, macOS arm64/x64) through a GitHub Actions native-runner build matrix, and isolated Steam integration in a helper process to work around a crash when the desktop runtime loads native modules — so every platform ships from the same source with no separate desktop port to maintain.",
        "Profiled rendering with the Chrome DevTools Protocol and rebuilt the hot path around a zero-allocation frame loop, spatial hashing and adaptive quality tiers, cutting GPU fill by <b>60%</b>, texture memory by <b>63%</b> and HUD raster time from 11.9 to 4.5 ms.",
        "Wrote a custom verification suite of ~500 checks over balance data, asset integrity and localization, so a release in 6 languages goes out without a manual regression pass.",
      ],
    },
  ],
  educationLabel: "Education",
  education: "Associate Degree — Systems Analysis and Development · Senac · 2024",
  languagesLabel: "Languages",
  languages: "English (Professional working proficiency) · Portuguese (Native)",
};

export const pt = {
  lang: "pt-BR",
  title: "Marcelo Augusto Fries — Desenvolvedor Full-Stack",
  name: "MARCELO AUGUSTO FRIES",
  role: "Desenvolvedor Full-Stack",
  contact: [
    "Brasília, Brasil (GMT-3) • marceloaugustofries@outlook.com • +55 61 98616-6969",
    "linkedin.com/in/marceloaugustofries • github.com/marceloaugusto95 • marceloaugustofries.vercel.app",
  ],
  summaryLabel: "Resumo Profissional",
  summary:
    "Desenvolvedor full-stack que projeta, desenvolve e coloca em produção sistemas completos: modelagem de dados, APIs e workers, front-ends web e Android e a infraestrutura onde tudo roda. Desde 2024, atuação individual dos requisitos ao handover para organizações e pequenas empresas sem equipe interna de engenharia, com integração a plataformas de terceiros e implantação em infraestrutura self-hosted e em nuvem. Stack principal: TypeScript, Node.js, React/Next.js, PostgreSQL, Docker e Kotlin. Todo sistema é entregue com runbooks e guias que permitem a operação por equipes não técnicas. Inglês em nível profissional; disponibilidade nos horários comerciais dos EUA e da Europa.",
  skillsLabel: "Competências Técnicas",
  skills: [
    ["Práticas de Desenvolvimento", "Systems Design, Arquitetura de Software, Design de APIs REST, Modelagem de Dados, Arquitetura Monorepo, Integração com APIs de Terceiros, Privacidade de Dados (LGPD), Debugging em Produção, Documentação Técnica"],
    ["Linguagens", "TypeScript, JavaScript, SQL, Python, Kotlin, Bash, HTML5, CSS3"],
    ["Backend e Dados", "Node.js, Fastify, REST APIs, Zod, PostgreSQL, TimescaleDB, Redis, BullMQ, Supabase (RLS, Edge Functions, Realtime, pg_cron), Neon"],
    ["Frontend e Clientes", "React, Next.js (App Router), Astro, Vite, Tailwind CSS, Zustand, React Native (Expo), Capacitor, Android (Kotlin, Room, WorkManager), NW.js"],
    ["Integrações e Automação", "WhatsApp Business Cloud API, Chatwoot, n8n, Google Android Management API, Cloud Pub/Sub, Mercado Pago Pix, Stripe, Webhooks, Steamworks"],
    ["Infraestrutura e DevOps", "Docker Compose, Linux, Nginx, TLS/Let's Encrypt, Cloudflare, Armazenamento S3, AWS, Google Cloud (GCP), GitHub Actions, CI/CD, Vercel, Automação de Backup e Restauração"],
    ["Segurança", "Auth0, JWT com Rotação de Refresh Token, RBAC, Row-Level Security, Verificação de Webhooks HMAC/OIDC, Rate Limiting, Logs de Auditoria"],
    ["Desenvolvimento Assistido por IA", "Claude Code, Claude API, Gemini, LLMs Locais, Desenvolvimento Orientado a Especificação"],
  ],
  experienceLabel: "Experiência",
  experience: [
    {
      role: "Desenvolvedor Full-Stack",
      period: "Fev 2026 – Presente",
      org: "Pública Assessoria em Gestão Empresarial Ltda · Contrato · Brasília, Brasil (Híbrido)",
      // Situação + Tarefa
      intro:
        "Uma consultoria sem equipe interna de engenharia precisava de software sob encomenda e também do TI que sustenta a operação do dia a dia, e trouxe um único desenvolvedor para assumir os dois de ponta a ponta. Tudo o que é produzido no âmbito deste contrato é confidencial e de propriedade da contratante, e por isso está descrito aqui apenas em termos gerais.",
      // Ação → Resultado
      bullets: [
        "Condução de cada demanda dos requisitos ao lançamento, treinamento e suporte — modelagem de dados, APIs e processamento em segundo plano, interfaces web e mobile e os servidores onde rodam —, de modo que a empresa passou a lançar e evoluir suas ferramentas internas sem ter equipe de engenharia própria.",
        "Tradução das necessidades operacionais de interlocutores não técnicos em especificações e planos de entrega, na posição de ponto de contato técnico único, eliminando a distância entre o que era pedido e o que era entregue.",
        "Aplicação de privacidade desde a concepção e práticas de LGPD, controle de acesso, rotinas de backup e restauração e verificações automatizadas na esteira de entrega, para que cada sistema entre no ar com conformidade e recuperação já resolvidas, e não remendadas depois.",
        "Documentação de operação e de TI em toda entrega, para que a equipe use os sistemas no dia a dia sem depender do desenvolvedor.",
      ],
    },
    {
      role: "Desenvolvedor Full-Stack",
      period: "Nov 2024 – Presente",
      org: "Autônomo · Freelancer · Remoto",
      intro:
        "Pequenas empresas e profissionais independentes precisam de software completo, mas não têm equipe de engenharia para construir nem para manter. Cada projeto é assumido de forma individual, com responsabilidade por todas as camadas — banco de dados, APIs, frontend e deploy —, dos primeiros requisitos ao suporte pós-lançamento.",
      projects: [
        {
          title: "Barbearia Tech — Plataforma de Agendamento White Label",
          tech: "Next.js 16 · React 19 · Neon Postgres · Vercel",
          bullets: [
            "Arquitetura white label orientada a configuração, em que um único arquivo de marca controla identidade visual, unidades, serviços, equipe e formas de pagamento, de modo que a entrada de uma nova barbearia é uma mudança de configuração, e não um novo desenvolvimento.",
            "Fluxo de agendamento em 4 passos com disponibilidade calculada no servidor por barbeiro e agenda sensível a fuso horário, de modo que o cliente só enxerga horários realmente livres e agendamentos duplicados deixam de chegar à barbearia.",
            "Painel da equipe com escopo por perfil, protegido por sessões assinadas com HMAC, para que o dono acompanhe faturamento, ticket médio e cancelamentos enquanto cada barbeiro vê apenas a própria agenda.",
            "Camada de pagamento independente de provedor, cobrindo Pix e cartão, para que um provedor real seja conectado sem mexer no fluxo de agendamento.",
          ],
        },
      ],
    },
  ],
  projectsLabel: "Projetos Selecionados",
  projects: [
    {
      title: "Mana Realm — Jogo Multiplataforma para Desktop e Navegador",
      period: "Out 2025 – Presente",
      tech: "JavaScript · HTML5 Canvas · NW.js · Steamworks · GitHub Actions · Vercel · manarealm.vercel.app",
      intro:
        "Um jogo de ação feito de forma totalmente individual, que precisava chegar ao navegador e às lojas de desktop a partir de um único código e continuar jogável em máquinas modestas, sem equipe para dividir motor, ferramental e publicação.",
      bullets: [
        "Publicação de um único código em JavaScript puro na web e em 4 plataformas desktop (Windows, Linux, macOS arm64/x64) por uma matriz de build em runners nativos no GitHub Actions, com a integração Steam isolada em um processo auxiliar para contornar uma falha do runtime desktop ao carregar módulos nativos — de modo que todas as plataformas saem da mesma fonte, sem uma versão desktop separada para manter.",
        "Profiling de renderização com o Chrome DevTools Protocol e reconstrução do caminho crítico com game loop sem alocações, spatial hashing e níveis de qualidade adaptativos, reduzindo o preenchimento de GPU em <b>60%</b>, a memória de texturas em <b>63%</b> e o tempo de raster do HUD de 11,9 para 4,5 ms.",
        "Suíte de verificação própria com ~500 checagens sobre dados de balanceamento, integridade de assets e localização, para que uma versão em 6 idiomas seja publicada sem rodada manual de regressão.",
      ],
    },
  ],
  educationLabel: "Formação",
  education: "Tecnólogo — Análise e Desenvolvimento de Sistemas · Senac · 2024",
  languagesLabel: "Idiomas",
  languages: "Inglês (Proficiência profissional) · Português (Nativo)",
};
