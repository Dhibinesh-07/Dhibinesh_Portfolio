# DHIBINESH — THE SERIES

A cinematic, streaming-inspired portfolio for **DHIBINESH P D**: AI Software Engineer.
Every section is an episode, every project is an Original, and the whole site plays like a series.

> A personal portfolio with a cinematic streaming-platform aesthetic. It is not affiliated with Netflix or any other streaming service and uses none of their logos.

## Run It Locally

Requires **Node.js 18+** and **pnpm** (or npm).

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173).

Production build:

```bash
pnpm run build
pnpm run preview
```

The static site is written to `dist/` and can be deployed as-is to Vercel, Netlify, Cloudflare Pages, GitHub Pages or any static host.

## Centralized Content

**All content lives in one file: [`src/data/portfolio.ts`](src/data/portfolio.ts).** Every component reads from this central source.

| Section / Content | Configured in |
| --- | --- |
| Name, headline, email, LinkedIn, GitHub, Instagram | `profile` |
| Projects (MindMate AI, Clothing E-Commerce, Agri Helper) | `projects` |
| Education & Internships | `education`, `experience` |
| Achievements & Certifications | `achievements`, `certifications` |
| Technical Skills & Descriptions | `skillCategories`, `skillEvidence` |
| Seasons and Episodes (My Journey) | `seasons` |
| Career Highlights | `topPicks` |
| ▶ Play Intro highlight reel | `introSlides` |
| Profile ordering (Recruiter / Developer / AI Engineer) | `viewerProfiles` |
| Opening studio card | `profile.originalLabel` |

## Adding Your Official Resume PDF

1. Place your resume PDF in `public/assets/Dhibinesh_Resume.pdf`.
2. In `src/data/portfolio.ts`, set `profile.hasResumePdf = true`.
3. The portfolio will automatically enable the PDF viewer modal and the direct download button across the site.

## Updating Your Photograph

1. Place your transparent portrait cutout at `dhibinesh-portrait.png` in the project root.
2. Run:

```bash
pnpm run images
```

This rebuilds responsive WebP portraits (`portrait-1100.webp`, `portrait-720.webp`, `portrait-420.webp`) and the social share image (`og-image.jpg`) in `public/assets/`.

## Architecture & Tech Stack

- **React 18** with **TypeScript**
- **Vite** bundler
- **Tailwind CSS 4**
- **Framer Motion** for cinematic orchestrations & timeline animations
- **Lenis** smooth scrolling
- **Sharp** for asset optimization and automated responsive WebP pipeline
