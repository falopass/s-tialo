import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  ink: '#0B0D0C',
  inkSoft: '#101514',
  inkCard: '#151A18',
  teal: '#2BB5A0',
  tealSoft: '#8FE0D3',
  cream: '#F4F1EA',
  muted: 'rgba(244,241,234,0.64)',
  faint: 'rgba(244,241,234,0.38)',
  line: 'rgba(244,241,234,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kai-sushi-talca',
  title: 'Kai Sushi — Bar & delivery nikkei en Talca',
  description:
    'Rolls, gyosas, poke y ceviche en Dos Norte 1310, Talca. Pedidos y reservas por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CARTA = [
  {
    num: '01',
    dish: 'Roll Acevichado',
    desc: 'Camarón, queso crema y palta, envuelto en pescado blanco togarashi, salsa acevichada y camote crocante.',
    src: `${IMG}/rolls.webp`,
    alt: 'Rolls de sushi emplatados sobre mesa oscura con palitos',
  },
  {
    num: '02',
    dish: 'Roll Extravaganza',
    desc: 'Relleno de camarón furai, queso crema y palta, envuelto en salmón flameado y coronado con salsa Kai.',
    src: `${IMG}/ceviche.webp`,
    alt: 'Ceviche nikkei con mariscos y cebolla en plato blanco',
  },
  {
    num: '03',
    dish: 'Gyosas y bajones',
    desc: 'Gyosas doradas, Kai Burger, ramen de cerdo y papas: la carta corta para picar antes de los rolls.',
    src: `${IMG}/gyoza.webp`,
    alt: 'Gyosas doradas servidas en plato negro con limón',
  },
  {
    num: '04',
    dish: 'Poke y ceviche',
    desc: 'Bowls con salmón, camarón, palta en láminas y verdes frescos: la opción liviana de la casa.',
    src: `${IMG}/bowl.webp`,
    alt: 'Poke bowl con camarón, palta y arroz',
  },
]

const RESENAS = [
  {
    name: 'Faviana Changaroti',
    text: 'El lugar muy lindo y fresco, atención 10/10 y el sushi ni que decir, espectacular, el pescado y arroz fresco todo 10/10.',
  },
  {
    name: 'Nathalie Bonaticic',
    text: 'Rico el sushi, y las gyosas muy ricas, el relleno perfecto para mi gusto. La chica es muy amable.',
  },
  {
    name: 'Camila Castillo Ruiz',
    text: 'Muy rico el sushi, sobre todo el mojito y linda presentación.',
  },
]

const TICKER = ['rolls', 'gyosas', 'poke bowls', 'ceviche', 'ramen', 'kai burger', 'delivery']

export default function KaiSushiTalcaPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.ink, color: C.cream, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
            KAI <span style={{ color: C.teal }}>SUSHI</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.png`}
        ctaLabel="Pedir"
        theme={{ over: 'dark', bar: C.ink, ink: C.cream, line: C.line, btnBg: C.teal, btnInk: '#06201B' }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-[104px] md:pt-[132px] pb-10 md:pb-16">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(rgba(43,181,160,0.14) 1px, transparent 1px)`,
            backgroundSize: '26px 26px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-6 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p
                className="text-[11px] md:text-xs tracking-[0.32em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: C.teal }}
              >
                {BIZ.rubro} · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-4 text-[42px] leading-[0.98] md:text-[76px] md:leading-[0.94] uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Nikkei en el <span style={{ color: C.teal }}>centro de Talca</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                Rolls armados al momento, gyosas doradas y pescado fresco a pasos de
                9 Oriente. {BIZ.hours}.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 h-12 px-6 rounded-full text-[15px] font-semibold"
                  style={{ backgroundColor: C.teal, color: '#06201B' }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#carta"
                  className="tap-44 inline-flex items-center h-12 px-6 rounded-full text-[15px] font-semibold border"
                  style={{ borderColor: C.line, color: C.cream }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
            <Reveal delay={280}>
              <div
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px]"
                style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
              >
                <span className="inline-flex items-center gap-2">
                  <Stars value={4.7} color={C.teal} className="w-3.5 h-3.5" />
                  {BIZ.rating} · {BIZ.ratingCount}
                </span>
                <span aria-hidden="true" style={{ color: C.faint }}>·</span>
                <span>{BIZ.address}</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="md:col-span-5">
            <div className="relative mx-auto max-w-[340px] md:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[28px] rotate-2"
                style={{ backgroundColor: C.teal, opacity: 0.16 }}
              />
              <div className="relative rounded-[24px] overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Barca de sushi variado frente al muro con el logo de Kai Sushi"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 340px, 40vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-4 px-4 py-2 rounded-full text-[12px] tracking-[0.2em] uppercase"
                style={{ backgroundColor: C.teal, color: '#06201B', fontFamily: 'var(--font-mono)' }}
              >
                9 Oriente · Talca
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── TICKER ───────────────────────────────────────── */}
      <div
        className="border-y overflow-hidden"
        style={{ borderColor: C.line, backgroundColor: C.inkSoft }}
        aria-hidden="true"
      >
        <div className="flex whitespace-nowrap py-3 kai-ticker">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center">
              {TICKER.map((t) => (
                <span
                  key={`${k}-${t}`}
                  className="mx-6 text-[13px] tracking-[0.28em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: C.tealSoft }}
                >
                  {t}
                  <span className="ml-6" style={{ color: C.faint }}>◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── LA CARTA (tarjetas estilo promo IG) ──────────── */}
      <section id="carta" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2
                className="text-[34px] md:text-[52px] uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Lo que sale <span style={{ color: C.teal }}>de la barra</span>
              </h2>
              <p className="text-[13px] max-w-[240px]" style={{ color: C.muted }}>
                Platos reales de la carta, con las fotos que ellos mismos publican.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {CARTA.map((it, i) => (
              <Reveal key={it.num} delay={i * 70}>
                <article
                  className="rounded-[22px] overflow-hidden h-full flex flex-col"
                  style={{ backgroundColor: C.inkCard, border: `1px solid ${C.line}` }}
                >
                  <div className="relative h-52 md:h-60">
                    <Image
                      src={it.src}
                      alt={it.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] tracking-[0.22em]"
                      style={{ backgroundColor: 'rgba(11,13,12,0.82)', color: C.tealSoft, fontFamily: 'var(--font-mono)' }}
                    >
                      Nº {it.num}
                    </div>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3
                      className="text-[22px] md:text-[26px] uppercase leading-tight"
                      style={{ fontFamily: 'var(--font-display)', color: C.teal }}
                    >
                      {it.dish}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                      {it.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ESCENA: mesa + local ─────────────────────────── */}
      <section id="local" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-6 items-stretch">
          <Reveal className="md:col-span-5">
            <div className="relative h-full min-h-[320px] rounded-[22px] overflow-hidden">
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa con rolls, cerveza y bebidas en Kai Sushi"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </div>
          </Reveal>
          <div className="md:col-span-7 flex flex-col gap-5">
            <Reveal delay={60}>
              <div
                className="rounded-[22px] p-6 md:p-8 flex-1"
                style={{ backgroundColor: C.teal, color: '#06201B' }}
              >
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)' }}>
                  El local
                </p>
                <h2
                  className="mt-3 text-[28px] md:text-[40px] uppercase leading-[0.98]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Mesas para comer acá, delivery a todo Talca
                </h2>
                <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(6,32,27,0.78)' }}>
                  Salón propio en Dos Norte, esquina 9 Oriente: almuerzo, once y cena.
                  También llegan por delivery a toda la ciudad.
                </p>
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-5 inline-flex items-center h-11 px-5 rounded-full text-[14px] font-semibold"
                  style={{ backgroundColor: '#06201B', color: C.tealSoft }}
                >
                  Reservar mesa
                </a>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 gap-5">
              {[
                { src: `${IMG}/interior.webp`, alt: 'Interior de Kai Sushi con mesas y el logo en el muro' },
                { src: `${IMG}/local.webp`, alt: 'Fachada de Kai Sushi Bar & Delivery en Dos Norte, Talca' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={120 + i * 60}>
                  <div className="relative rounded-[18px] overflow-hidden" style={{ aspectRatio: '4/3' }}>
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="50vw" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ────────────────────────────────────── */}
      <section id="opiniones" className="py-14 md:py-20" style={{ backgroundColor: C.inkSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2
                className="text-[34px] md:text-[52px] uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Lo que dice <span style={{ color: C.teal }}>la gente</span>
              </h2>
              <p
                className="inline-flex items-center gap-2 text-[13px]"
                style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
              >
                <Stars value={4.7} color={C.teal} className="w-3.5 h-3.5" />
                {BIZ.rating} en Google · {BIZ.ratingCount}
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure
                  className="h-full rounded-[20px] p-6 flex flex-col"
                  style={{ backgroundColor: C.inkCard, border: `1px solid ${C.line}` }}
                >
                  <Stars value={5} color={C.teal} className="w-4 h-4" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.cream }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] tracking-[0.18em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                    {r.name} · Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACTO + MAPA ──────────────────────────────── */}
      <section id="contacto" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <Reveal>
              <h2
                className="text-[34px] md:text-[44px] uppercase leading-[0.95]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Pasa a buscarlo <span style={{ color: C.teal }}>o que llegue</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <dl className="mt-6 space-y-4 text-[15px]">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Horario', BIZ.hours],
                  ['WhatsApp', BIZ.phoneDisplay],
                  ['Instagram', `${BIZ.igUser} · ${BIZ.igFollowers}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-3">
                    <dt
                      className="w-24 shrink-0 text-[11px] tracking-[0.24em] uppercase pt-1"
                      style={{ color: C.faint, fontFamily: 'var(--font-mono)' }}
                    >
                      {k}
                    </dt>
                    <dd style={{ color: C.cream }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 rounded-full text-[15px] font-semibold"
                  style={{ backgroundColor: C.teal, color: '#06201B' }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 rounded-full text-[15px] font-semibold border"
                  style={{ borderColor: C.line, color: C.cream }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100} className="md:col-span-7">
            <div
              className="relative rounded-[22px] overflow-hidden h-[300px] md:h-full md:min-h-[380px]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: C.inkSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div>
            <p className="text-[15px]" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
              KAI <span style={{ color: C.teal }}>SUSHI</span>
            </p>
            <p className="mt-1 text-[12px]" style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: C.faint }}>
            Sitio de ejemplo preparado por Sitiazo para mostrar cómo se vería su web.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Pedir a Kai Sushi por WhatsApp" />

      <style>{`
        @keyframes kaiTicker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .kai-ticker { animation: kaiTicker 26s linear infinite }
        @media (prefers-reduced-motion: reduce) { .kai-ticker { animation: none } }
      `}</style>
    </main>
  )
}
