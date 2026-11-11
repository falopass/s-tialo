<div align="center">

# 🎨 Sitiazo.cl

**Websites that actually sell.**

Boutique web studio for Chilean SMBs · Delivered in 7 days · From $19,990 CLP/month

[![Next.js](https://img.shields.io/badge/Next.js-16-0A0A0A?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![Tailwind](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FFD60A?style=for-the-badge&logo=framer&logoColor=0A0A0A)](https://www.framer.com/motion/)
[![Static Export](https://img.shields.io/badge/Static_Export-✓-2D5F3F?style=for-the-badge)](https://nextjs.org/docs/pages/building-your-application/deploying/static-exports)

**[🌐 Live at sitiazo.cl](https://sitiazo.cl)**

</div>

---

## 📖 Overview

Sitiazo.cl is a boutique web design studio targeting Chilean small and medium businesses (pymes). Fast turnaround (7 days), transparent monthly pricing (from $19,990 CLP/month, VAT included, no lock-in), and focus on conversion-oriented design.

This repository contains the studio's own marketing site, built with modern static-export tooling for maximum performance and minimal hosting cost.

---

## ✨ Key Features

- 🎨 **Editorial design** with custom design tokens and typography
- ⚡ **Static export** for instant loading and edge deployment
- 📱 **Mobile-first responsive** layout
- ✍️ **Blog system** for SEO content marketing
- 📸 **Case study pages** showcasing client work (e.g., Rancho Itahue)
- 💬 **WhatsApp-only contact** (`wa.me` links)
- 🎬 **Framer Motion animations** for editorial feel
- 🗺️ **SEO-optimized** with sitemap.xml and metadata

---

## 🏗️ Project Structure

```
sitiazo-cl/
├── app/
│   ├── (sitio)/                    # Marketing site (home, planes, casos, blog,
│   │                               #  contacto, términos, rubros, …)
│   │   ├── _components/            # Nav, Footer, BarraMovil, plan CTAs, etc.
│   │   └── _lib/                   # contacto (WhatsApp links), medir, recomendar
│   ├── demos/<slug>/               # SMB demo sites
│   ├── rancho-itahue/              # Client case study
│   ├── sitemap.ts                  # Generates public/sitemap.xml
│   └── llms.txt/                   # llms.txt generated at build
│
├── lib/config.ts                   # Single source of truth: prices, plans, contact
├── content/                        # posts.ts, rubros.ts, blog/*.mdx bodies
├── public/                         # favicon, robots.txt, demo photos
├── scripts/                        # build helpers (dither, fechas, verificar-sitio)
├── prospeccion/                    # Lead lists and verification tooling
└── out/                            # Static build output
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
| **Hosting** | Cloudflare Workers (static assets) |

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

Deployed to **Cloudflare Workers** as a static site (`output: 'export'` → Worker sirve los assets de `out/` con Workers Builds desde `main`; redirects en `public/_redirects`).

---

## 💼 Studio Services

Sitiazo.cl offers three monthly plans for Chilean SMBs (VAT included, no lock-in, hosting and domain included):

- **Básico** · $19,990 CLP/month · 1 page · 7 days
- **Recomendado** · $29,990 CLP/month · up to 5 sections · 10 days
- **Catálogo** · $44,990 CLP/month · up to 10 products · 14 days

One-time activation fee of $29,990 CLP (free until November 15, 2026). Annual prepay: 10 months for 12. The Básico plan also has a one-time purchase option ($179,990 CLP + $59,990 CLP/year from year two). Contact is WhatsApp-only.

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

Sitiazo.cl es un estudio boutique de diseño web enfocado en pymes chilenas. Entrega rápida (7 días), precios transparentes por suscripción mensual (desde $19.990 CLP al mes, IVA incluido, sin permanencia), y diseño enfocado en conversión.

Este repositorio contiene el sitio propio del estudio, construido con static export para máxima performance y costo mínimo de hosting.

## Características

- 🎨 Diseño editorial con design tokens propios
- ⚡ Static export para carga instantánea
- 📱 Responsive mobile-first
- ✍️ Sistema de blog para content marketing SEO
- 📸 Páginas de casos de estudio (ej: Rancho Itahue)
- 💬 Contacto solo por WhatsApp (links `wa.me`)
- 🎬 Animaciones con Framer Motion
- 🗺️ SEO optimizado con sitemap.xml

## Planes

Precios mensuales, IVA incluido, sin permanencia, con hosting y dominio:

- **Básico** · $19.990 CLP/mes · 1 página · 7 días
- **Recomendado** · $29.990 CLP/mes · hasta 5 secciones · 10 días
- **Catálogo** · $44.990 CLP/mes · hasta 10 productos · 14 días

Activación única de $29.990 (gratis hasta el 15 de noviembre de 2026). Pago anual: 10 meses por 12. El plan Básico también tiene compra única ($179.990 + $59.990 al año desde el segundo año).

## Producto en vivo

**[sitiazo.cl](https://sitiazo.cl)** · Construido por Diego Bravo Opazo

</details>

---

<div align="center">

**⭐ If you like this project, please star the repo!**

</div>
