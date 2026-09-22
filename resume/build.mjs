// Renders the résumé HTML from resume/content.mjs and prints both language
// versions to PDF with headless Chrome. Run with `npm run resume`.
//
// The layout reproduces the original print design measured from the previous
// PDFs: US Letter, 36pt/39.75pt margins, Arial family, justified body at
// 9.6pt, Arial Black section headings with a hairline rule.
import { writeFileSync, mkdirSync, existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { tmpdir } from "node:os";
import { en, pt } from "./content.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const publicDir = resolve(here, "..", "public");

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "/usr/bin/google-chrome",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

const css = `
@page { size: letter; margin: 36pt 39.75pt; }
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9.6pt;
  line-height: 1.36;
  color: #1a1a1a;
  text-align: justify;
  -webkit-font-smoothing: antialiased;
}
h1 {
  font-family: "Arial Black", "Arial Bold", Arial, sans-serif;
  font-size: 23pt;
  line-height: 1.1;
  margin: 0;
  text-align: left;
}
.role { font-size: 12pt; color: #555; margin: 4.5pt 0 0; text-align: left; }
.contact { font-size: 8.9pt; margin: 4pt 0 0; line-height: 1.43; text-align: left; }
h2 {
  font-family: "Arial Black", "Arial Bold", Arial, sans-serif;
  font-size: 10.6pt;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  margin: 15pt 0 0;
  padding-bottom: 3.5pt;
  border-bottom: 0.75pt solid #888;
  text-align: left;
  break-after: avoid;
}
h2 + * { margin-top: 6pt; }
p { margin: 0; }
.skill { margin-top: 3.5pt; }
.skill:first-of-type { margin-top: 0; }
.skill b { font-weight: bold; }
.job { margin-top: 9pt; }
.job-top { break-inside: avoid; break-after: avoid; }
.job-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12pt;
  font-size: 10.3pt;
  font-weight: bold;
  text-align: left;
}
.job-head .period { font-size: 9.4pt; font-weight: normal; white-space: nowrap; }
.org { font-size: 9.2pt; font-style: italic; margin-top: 2.5pt; text-align: left; }
.intro { margin-top: 3.5pt; }
.entry { margin-top: 7pt; break-inside: avoid; }
.entry-title { font-weight: bold; text-align: left; }
.entry-title .tech { font-weight: normal; color: #555; }
.entry-head {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12pt;
  font-size: 10.3pt;
  font-weight: bold;
  text-align: left;
}
.entry-head .period { font-size: 9.4pt; font-weight: normal; white-space: nowrap; }
.tech-line { font-size: 9pt; color: #555; margin-top: 2.5pt; text-align: left; }
ul { margin: 3pt 0 0; padding: 0; list-style: none; }
li { position: relative; padding-left: 11.25pt; margin-top: 3pt; }
li::before {
  content: "";
  position: absolute;
  left: 1.5pt;
  top: 4.6pt;
  width: 3pt;
  height: 3pt;
  border-radius: 50%;
  background: #1a1a1a;
}
.line { margin-top: 6pt; text-align: left; }
`;

const esc = (s) => String(s).replace(/&(?!(amp|lt|gt|#\d+|[a-z]+);)/g, "&amp;");

const bullets = (items) =>
  `<ul>${items.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>`;

function render(d) {
  const skills = d.skills
    .map(([k, v]) => `<p class="skill"><b>${esc(k)}:</b> ${esc(v)}</p>`)
    .join("");

  const jobs = d.experience
    .map((job) => {
      const entries = (job.projects || [])
        .map(
          (p) => `<div class="entry">
        <p class="entry-title">${esc(p.title)} <span class="tech">· ${esc(p.tech)}</span></p>
        ${bullets(p.bullets)}
      </div>`
        )
        .join("");
      return `<div class="job">
      <div class="job-top">
        <div class="job-head"><span>${esc(job.role)}</span><span class="period">${esc(job.period)}</span></div>
        <p class="org">${esc(job.org)}</p>
        <p class="intro">${esc(job.intro)}</p>
      </div>
      ${job.bullets ? bullets(job.bullets) : ""}
      ${entries}
    </div>`;
    })
    .join("");

  const projects = d.projects
    .map(
      (p) => `<div class="job entry">
      <div class="entry-head"><span>${esc(p.title)}</span><span class="period">${esc(p.period)}</span></div>
      <p class="tech-line">${esc(p.tech)}</p>
      ${p.intro ? `<p class="intro">${esc(p.intro)}</p>` : ""}
      ${bullets(p.bullets)}
    </div>`
    )
    .join("");

  return `<!doctype html>
<html lang="${d.lang}">
<head>
<meta charset="utf-8">
<title>${esc(d.title)}</title>
<style>${css}</style>
</head>
<body>
<h1>${esc(d.name)}</h1>
<p class="role">${esc(d.role)}</p>
<div class="contact">${d.contact.map((c) => `<div>${esc(c)}</div>`).join("")}</div>

<h2>${esc(d.summaryLabel)}</h2>
<p>${esc(d.summary)}</p>

<h2>${esc(d.skillsLabel)}</h2>
<div>${skills}</div>

<h2>${esc(d.experienceLabel)}</h2>
${jobs}

<h2>${esc(d.projectsLabel)}</h2>
${projects}

<h2>${esc(d.educationLabel)}</h2>
<p class="line">${esc(d.education)}</p>

<h2>${esc(d.languagesLabel)}</h2>
<p class="line">${esc(d.languages)}</p>
</body>
</html>`;
}

function findChrome() {
  for (const c of CHROME_CANDIDATES) if (existsSync(c)) return c;
  throw new Error(
    "Chrome not found. Set CHROME_PATH to the Chrome executable and re-run."
  );
}

const targets = [
  { data: en, out: "Marcelo_Augusto_Fries_Resume.pdf" },
  { data: pt, out: "Marcelo_Augusto_Fries_Curriculo_PT-BR.pdf" },
];

const chrome = findChrome();
const work = join(tmpdir(), `resume-build-${process.pid}`);
mkdirSync(work, { recursive: true });

try {
  for (const { data, out } of targets) {
    const html = join(work, `${data.lang}.html`);
    const pdf = join(publicDir, out);
    writeFileSync(html, render(data), "utf8");
    const res = spawnSync(
      chrome,
      [
        "--headless",
        "--disable-gpu",
        "--no-sandbox",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=4000",
        `--print-to-pdf=${pdf}`,
        `file:///${html.replace(/\\/g, "/")}`,
      ],
      { encoding: "utf8" }
    );
    if (res.status !== 0) {
      throw new Error(`Chrome failed for ${out}:\n${res.stderr || res.stdout}`);
    }
    console.log(`wrote public/${out}`);
  }
} finally {
  rmSync(work, { recursive: true, force: true });
}
