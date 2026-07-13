# Technique Marine

Mobile marine service, maintenance, electronics, and delivery captain serving Cape Fear, NC.

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `dist/` |
| `npm run preview` | Preview built site locally |
| `npm run test` | Run Playwright smoke tests |
| `npm run test:ui` | Run Playwright tests with UI |

## CI/CD

- **Every push** — Build + smoke tests (CI)
- **Merge to `main`** — Build + smoke + full tests → Deploy to Hostinger + test report to GitHub Pages

Branch protection on `main` enforces CI passing before merge.

## Secrets

Required in GitHub repo settings (`Settings → Secrets and variables → Actions`):

| Secret | Description |
|--------|-------------|
| `FTP_HOST` | Hostinger FTP server (IP or hostname) |
| `FTP_USERNAME` | Hostinger FTP login |
| `FTP_PASSWORD` | Hostinger FTP password |
| `FTP_REMOTE_DIR` | Optional Hostinger web root path (defaults to `public_html`) |

## Tech Stack

- [Astro](https://astro.build) — static site generation
- [Playwright](https://playwright.dev) — browser testing
- Hostinger — production hosting
- GitHub Pages — test report hosting
- Formspree — contact form handler
