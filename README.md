<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 80'%3E%3Ctext x='200' y='55' text-anchor='middle' font-family='Arial Black,Arial,sans-serif' font-size='46' font-weight='900' fill='%23FAFAF7'%3Esit%3Ctspan fill='%23FFD60A'%3E●%3C/tspan%3Eazo%3Ctspan fill='%23FFD60A'%3E.cl%3C/tspan%3E%3C/text%3E%3C/svg%3E">
    <img alt="sitiazo.cl" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 80'%3E%3Ctext x='200' y='55' text-anchor='middle' font-family='Arial Black,Arial,sans-serif' font-size='46' font-weight='900' fill='%230A0A0A'%3Esit%3Ctspan fill='%23FFD60A'%3E●%3C/tspan%3Eazo%3Ctspan fill='%23FFD60A'%3E.cl%3C/tspan%3E%3C/text%3E%3C/svg%3E" height="64">
  </picture>
</p>

<p align="center">
  <strong>Páginas web que sí venden.</strong><br>
  <sub>Estudio de diseño web para pymes chilenas · Listo en 7 días · Desde $199.000</sub>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-0A0A0A?logo=nextdotjs&logoColor=white" alt="Next.js 16">
  <img src="https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss&logoColor=white" alt="Tailwind v4">
  <img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Framer_Motion-11-FFD60A?logo=framer&logoColor=0A0A0A" alt="Framer Motion">
  <img src="https://img.shields.io/badge/Static_Export-✓-2D5F3F" alt="Static Export">
</p>

<hr>

## 🟡 Estructura

```
sitiazo-cl/
├── app/
│   ├── layout.tsx                  ← Root layout (Nav + Footer + fonts)
│   ├── page.tsx                    ← Home — Hero landing
│   ├── planes/page.tsx             ← Planes claros ($199K / $299K / $449K)
│   ├── casos/
│   │   ├── page.tsx                ← Grid de casos
│   │   └── roma-crochet/page.tsx   ← Caso de estudio
│   ├── como-funciona/page.tsx      ← Proceso 4 pasos + timeline
│   ├── blog/
│   │   ├── page.tsx                ← Notas listing + newsletter
│   │   └── [slug]/page.tsx         ← Post individual (3 posts v1)
│   ├── contacto/page.tsx           ← 3 cards (WA / Email / Cal.com)
│   ├── sobre/page.tsx              ← Estudio, Diego, stack
│   ├── not-found.tsx               ← 404 editorial
│   ├── globals.css                 ← Design tokens (@theme)
│   └── sitemap.ts → public/sitemap.xml
│
├── components/
│   ├── ui/          ← 11 primitivos (Dot, Logo, Button, Tag, etc.)
│   ├── layout/      ← Nav, Footer, FooterBar
│   └── sections/    ← 7 bloques reutilizables
│
├── lib/             ← utils, contact (WhatsApp links), fonts
├── content/         ← posts.ts (metadatos del blog)
├── public/          ← favicon.svg, robots.txt, sitemap.xml
└── out/             ← Build estático (13 páginas HTML)
```

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--color-cream` | `#FAFAF7` | Background primario |
| `--color-ink` | `#0A0A0A` | Texto principal, botones, footer |
| `--color-yellow` | `#FFD60A` | Dot system, acentos, CTA destacado |
| `--color-signal` | `#E63946` | Solo para ANTES en before/after |
| `--font-display` | Cormorant Garamond | H1, H2, headlines serif |
| `--font-body` | Inter | Body, UI, navegación |
| `--font-mono` | Geist Mono | Counters, precios |
| `--font-logo` | Archivo Black | Sitiazo wordmark |

### Yellow Dot System

```
xs (6px)  → Nav status indicator, inline bullets
sm (10px) → List bullets, after numbers
md (14px) → Punctuation after H3/subheadings
lg (20px) → Punctuation after H2
xl (32px) → Punctuation after H1
hero (48px) → Hero headline punctuation
```

## 🚀 Quick Start

```bash
git clone https://github.com/falopass/s-tialo.git
cd s-tialo
npm install
npm run dev        # → http://localhost:3000
```

```bash
npm run build      # Static export → out/
npm run typecheck  # tsc --noEmit
```

## ⚙️ Variables de Entorno

Editar `.env.local`:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=56900000000   # ← Diego: cambiar por número real
NEXT_PUBLIC_EMAIL=hola@sitiazo.cl
NEXT_PUBLIC_CALCOM_URL=https://cal.com/diego/30min
NEXT_PUBLIC_SITE_URL=https://sitiazo.cl
```

## 📄 Rutas

| Ruta | Página | Estado |
|------|--------|--------|
| `/` | Home — Hero + CTA WhatsApp | ✅ |
| `/planes/` | Planes claros (3 cards) | ✅ |
| `/casos/` | Cases listing + CTA | ✅ |
| `/casos/roma-crochet/` | Caso de estudio | ✅ |
| `/como-funciona/` | Proceso 4 pasos | ✅ |
| `/blog/` | Notas (3 posts) | ✅ |
| `/contacto/` | WhatsApp / Email / Cal.com | ✅ |
| `/sobre/` | About — Estudio + Diego | ✅ |

## 🔧 Stack Técnico

| Herramienta | Versión | Propósito |
|-------------|---------|-----------|
| Next.js | 16 | App Router, static export |
| React | 19 | UI components |
| Tailwind CSS | 4 | Estilos (CSS-based config) |
| TypeScript | 5.5+ | Type safety |
| Framer Motion | 11 | Animaciones (nav drawer, FAQ) |
| Cormorant Garamond | Google Fonts | Display serif |
| Inter | Google Fonts | Body sans-serif |
| Geist Mono | Google Fonts | Counters, precios |
| Archivo Black | Google Fonts | Logo wordmark |

## 📦 Componentes

### UI Primitives (11)

| Componente | Props | Uso |
|-----------|-------|-----|
| `<Dot />` | `size`, `variant`, `pulse` | Yellow dot system |
| `<Logo />` | `variant`, `size`, `showDot` | Wordmark (texto, no PNG) |
| `<PrimaryButton />` | `href`, `external` | CTA negro |
| `<SecondaryButton />` | `href`, `external` | Link subrayado |
| `<SectionCounter />` | `current`, `total`, `label` | "01 / 06" |
| `<Tag />` | `variant` (yellow/ink/outline) | Labels |
| `<HairlineDivider />` | — | 1px divider |
| `<BulletList />` | `items` | Lista con Dot custom |
| `<StillLifeImage />` | `src`, `aspectRatio`, `figLabel` | Imagen editorial |
| `<StillLifePlaceholder />` | `aspectRatio`, `figLabel` | Placeholder v1 |
| `<FooterBar />` | — | "TRABAJAMOS CON" strip |

### Layout

| Componente | Descripción |
|-----------|-------------|
| `<Nav />` | Sticky, transparent→cream, mobile drawer, Framer Motion |
| `<Footer />` | Dark bg, "Construyamos algo bueno.", sitemap |
| `<FooterBar />` | ROMA CROCHET + 2 placeholders + "TU MARCA AQUÍ →" |

### Sections

| Componente | Página |
|-----------|--------|
| `<HeroSection />` | Home |
| `<ParaQuienGrid />` | Para quién (3 cards) |
| `<ComoFuncionaSteps />` | Proceso 4 pasos |
| `<CasoDestacado />` | Roma Crochet preview |
| `<PlanesPricing />` | 3 pricing cards |
| `<FAQSection />` | Accordion animado |
| `<CTAFinal />` | "Tu pyme merece un sitiazo." |

## 🟡 SEO

- `sitemap.xml` — 11 URLs indexadas
- `robots.txt` — Allow all, sitemap link
- Metadata por página (title, description, canonical)
- Open Graph + Twitter Cards
- Schema.org Article en blog posts
- `es-CL` lang attribute
- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)

## ✅ Lighthouse Targets

| Métrica | Target |
|---------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

## 🖼️ Assets Pendientes (v1.5)

- [ ] OG images (1200×630) para home, casos, planes
- [ ] `apple-touch-icon.png` (180×180)
- [ ] Screenshots reales de `romacrochet.cl` (mobile + desktop)
- [ ] Still-life imágenes reales (reemplazar `<StillLifePlaceholder />`)
- [ ] Favicon `.ico` físico

## 📝 Licencia

Privado — Sitiazo.cl © 2026
