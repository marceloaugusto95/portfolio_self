# Portfolio — Marcelo Augusto Fries

A personal developer portfolio: a clean, modern, single-page site that showcases
who I am and the projects I've built. Built to present my work professionally to
visitors, recruiters, and collaborators.

**Owner:** Marcelo Augusto Fries — Full-Stack Developer, Brasília, Brazil.

The site is a single page composed of five sections:
**Hero → About → Projects → Skills → Contact.**

## Tech Stack

| Concern    | Choice                                   |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 16 (App Router) + TypeScript     |
| Styling    | Tailwind CSS v4                          |
| Animation  | Framer Motion                            |
| Icons      | lucide-react                             |
| Fonts      | next/font (Geist / Geist Mono)           |
| Linting    | ESLint (`eslint-config-next`)            |
| Deployment | Vercel                                   |

Design principles: minimal, lots of whitespace, strong typography,
dark-mode-first, subtle motion, mobile-responsive, and fast.

## Getting Started

```bash
npm install
npm run dev      # start local dev server → http://localhost:3000
```

## Commands

```bash
npm run dev      # start local dev server
npm run build    # production build (also type-checks)
npm run start    # serve production build
npm run lint     # run ESLint
```

## Project Structure

```
portfolio_self/
├── app/            # layout, page, global styles
├── components/     # Nav, Hero, About, Projects, Skills, Contact, Footer, …
├── content/        # site.ts (bio/skills) + projects.ts — content source of truth
└── public/         # résumé PDF + (future) screenshots
```
