<div align="center">

# 🎨 Sitiazo.cl

**Websites that actually sell.**

Boutique web studio for Chilean SMBs · Delivered in 7 days · From $199,000 CLP

[![Next.js](https://img.shields.io/badge/Next.js-16-0A0A0A?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FFD60A?style=for-the-badge&logo=framer&logoColor=0A0A0A)](https://www.framer.com/motion/)
[![Static Export](https://img.shields.io/badge/Static_Export-✓-2D5F3F?style=for-the-badge)](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

**[🌐 Live at sitiazo.cl](https://sitiazo.cl)**

</div>

---

## 📖 Overview

Sitiazo.cl is a boutique web design studio targeting Chilean small and medium businesses (pymes). Fast turnaround (7 days), transparent pricing (from $199,000 CLP), and focus on conversion-oriented design.

This repository contains the studio's own marketing site, built with modern static-export tooling for maximum performance and minimal hosting cost.

---

## ✨ Key Features

- 🎨 **Editorial design** with custom design tokens and typography
- ⚡ **Static export** for instant loading and edge deployment
- 📱 **Mobile-first responsive** layout
- ✍️ **Blog system** for SEO content marketing
- 📸 **Case study pages** showcasing client work (e.g., Roma Crochet)
- 💬 **Multi-channel contact** (WhatsApp, Email, Cal.com)
- 🎬 **Framer Motion animations** for editorial feel
- 🗺️ **SEO-optimized** with sitemap.xml and metadata

---

## 🏗️ Project Structure

```
sitiazo-cl/
├── app/
│   ├── layout.tsx                  # Root layout (Nav + Footer + fonts)
│   ├── page.tsx                    # Home — Hero landing
│   ├── planes/page.tsx             # Clear pricing plans ($199K / $299K / $449K)
│   ├── casos/
│   │   ├── page.tsx                # Case studies grid
│   │   └── roma-crochet/page.tsx   # Client case study
│   ├── como-funciona/page.tsx      # Process (4 steps + timeline)
│   ├── blog/
│   │   ├── page.tsx                # Blog listing + newsletter CTA
│   │   └── [slug]/page.tsx         # Individual post
│   ├── contacto/page.tsx           # Contact (WhatsApp / Email / Cal.com)
│   ├── sobre/page.tsx              # About: studio, Diego, stack
│   ├── not-found.tsx               # Editorial 404
│   ├── globals.css                 # Design tokens (@theme)
│   └── sitemap.ts                  # Generates public/sitemap.xml
│
├── components/
│   ├── ui/                         # 11 primitives (Dot, Logo, Button, Tag, etc.)
│   ├── layout/                     # Nav, Footer, FooterBar
│   └── sections/                   # 7 reusable blocks
│
├── lib/                            # utils, contact (WhatsApp links), fonts
├── content/                        # posts.ts (blog metadata)
├── public/                         # favicon.svg, robots.txt, sitemap.xml
└── out/                            # Static build (13 HTML pages)
```

---

## 🎨 Design System

The design system is minimal, editorial, and built around a small set of tokens.

| Token | Value | Usage |
|-------|-------|-------|
| `--color-cream` | `#FAFAF7` | Primary background |
| `--color-ink` | `#0A0A0A` | Primary text, buttons, footer |
| `--color-yellow` | `#FFD60A` | Accent (dot, highlights) |
| `--color-green` | `#2D5F3F` | Success states |
| `--color-terracotta` | `#B85450` | Warm highlights |

**Fonts:** Arial Black (display), Inter (body), IBM Plex Mono (monospace).

**Principles:** Editorial hierarchy · Generous whitespace · Yellow dot as recurring motif · No gradients · No stock photography.

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Styling** | Tailwind CSS v4 with design tokens |
| **Language** | TypeScript 5.5 |
| **Animation** | Framer Motion 11 |
| **Build** | Static export (`output: 'export'`) |
| **Hosting** | Vercel (or any static host) |

---

## ⚙️ Installation

```bash
# Clone
git clone https://github.com/falopass/s-tialo.git
cd s-tialo

# Install
npm install

# Development
npm run dev

# Type check
npx tsc --noEmit

# Static build
npm run build

# Preview build
npm run start
```

---

## 🚀 Deployment

Deployed to **Vercel** as a static site. Since it uses `output: 'export'`, the site can be hosted on any static host (Netlify, GitHub Pages, S3+CloudFront).

---

## 💼 Studio Services

Sitiazo.cl offers three service tiers for Chilean SMBs:

- **Landing Page** — $199,000 CLP · 1 page · 7 days
- **Multi-page Site** — $299,000 CLP · 3-5 pages · 10 days
- **Custom Web** — $449,000+ CLP · Custom scope · 15+ days

All plans include: mobile-responsive design, basic SEO, contact form, WhatsApp integration, and 1 month of post-launch support.

---

## 📊 About This Project

Sitiazo.cl is a side venture aimed at generating recurring client relationships and validating the boutique-studio model in the Maule region of Chile. Solo-operated.

**Live URL:** [sitiazo.cl](https://sitiazo.cl)
**Built by:** Diego Bravo Opazo — [Portfolio](https://github.com/falopass)

---

<details>
<summary><b>🇪🇸 Descripción en español</b></summary>

<br>

## Sobre Sitiazo.cl

Sitiazo.cl es un estudio boutique de diseño web enfocado en pymes chilenas. Entrega rápida (7 días), precios transparentes (desde $199.000 CLP), y diseño enfocado en conversión.

Este repositorio contiene el sitio propio del estudio, construido con static export para máxima performance y costo mínimo de hosting.

## Características

- 🎨 Diseño editorial con design tokens propios
- ⚡ Static export para carga instantánea
- 📱 Responsive mobile-first
- ✍️ Sistema de blog para content marketing SEO
- 📸 Páginas de casos de estudio (ej: Roma Crochet)
- 💬 Contacto multi-canal (WhatsApp, Email, Cal.com)
- 🎬 Animaciones con Framer Motion
- 🗺️ SEO optimizado con sitemap.xml

## Planes

- **Landing Page** — $199.000 CLP · 1 página · 7 días
- **Sitio Multi-página** — $299.000 CLP · 3-5 páginas · 10 días
- **Web a medida** — $449.000+ CLP · Alcance custom · 15+ días

## Producto en vivo

**[sitiazo.cl](https://sitiazo.cl)** · Construido por Diego Bravo Opazo

</details>

---

<div align="center">

**⭐ If you like this project, please star the repo!**

</div>
