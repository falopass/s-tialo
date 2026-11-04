import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_CARTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

// Mesa chilena de campo: terracota de greda, crema de mantel,
// verde profundo de pizarra, mostaza y tinta.
const C = {
  terracota: '#A4472F',
  crema: '#F4E8D6',
  verde: '#2B3A2E',
  mostaza: '#D9A441',
  tinta: '#211A15',
  muted: '#6B5744',
  line: 'rgba(33,26,21,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// Mantel de cuadrillé: retícula fina terracota sobre crema.
const CUADRILLE: CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(0deg, rgba(164,71,47,0.055) 0 1px, transparent 1px 30px)',
    'repeating-linear-gradient(90deg, rgba(164,71,47,0.055) 0 1px, transparent 1px 30px)',
  ].join(', '),
}

export const metadata: Metadata = demoMetadata({
  slug: 'tipico-de-la-claudia',
  title: '¡¡Típico De La Claudia!! — Comida chilena casera en Los Ángeles',
  description:
    'Restaurante de comida chilena casera en Av. Las Industrias 1000, Los Ángeles. 4,8 en Google con 125 opiniones. Pide la carta del día por WhatsApp.',
  image: '/demos/tipico-de-la-claudia/hero.webp',
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

const CINTA = [
  { src: `${IMG}/plato1.webp`, alt: '' },
  { src: `${IMG}/plato2.webp`, alt: '' },
  { src: `${IMG}/ambiente.webp`, alt: '' },
]

/** Rótulo en versalitas espaciadas con una línea fina al costado. */
function Rotulo({
  children,
  color,
  lineColor,
}: {
  children: React.ReactNode
  color: string
  lineColor: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em]"
      style={{ color }}
    >
      <span
        className="h-px w-9 shrink-0"
        style={{ backgroundColor: lineColor }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'terra' | 'mostaza' | 'crema' | 'lineCrema' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'terra'
      ? { backgroundColor: C.terracota, color: C.crema }
      : tone === 'mostaza'
        ? { backgroundColor: C.mostaza, color: C.tinta }
        : tone === 'crema'
          ? { backgroundColor: C.crema, color: C.tinta }
          : tone === 'lineCrema'
            ? { border: '1.5px solid rgba(244,232,214,0.55)', color: C.crema }
            : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="tc-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function TipicoDeLaClaudiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* El plato que se pone en la mesa: la foto del hero se abre en círculo. */
        @keyframes tc-plato {
          from { clip-path: circle(0% at 50% 58%); transform: scale(1.08) }
          to { clip-path: circle(130% at 50% 58%); transform: scale(1) }
        }
        .tc-plato { animation: tc-plato 1.5s cubic-bezier(0.22,0.61,0.2,1) 0.15s both }

        /* Título del hero, línea por línea. */
        @keyframes tc-up { from { transform: translateY(115%) } to { transform: translateY(0) } }
        .tc-line { animation: tc-up 0.95s cubic-bezier(0.22,0.61,0.2,1) both }

        @keyframes tc-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .tc-fade { animation: tc-fade 0.9s ease-out both }

        /* Cinta de platos en marquesina lenta. */
        @keyframes tc-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .tc-marquee { animation: tc-marquee 46s linear infinite }

        /* Aro del sello de opiniones, giro lento (solo transform). */
        @keyframes tc-spin { to { transform: rotate(360deg) } }
        .tc-spin { animation: tc-spin 48s linear infinite }

        /* Revelado de fotos de sección con clip-path de izquierda a derecha. */
        @keyframes tc-wipe { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
        @supports (animation-timeline: view()) {
          .tc-wipe {
            animation: tc-wipe linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 70%;
          }
        }

        .tc-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .tc-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .tc-btn:active { transform: translateY(0) scale(0.97) }
        .tc-btn:focus-visible { outline: 3px solid ${C.mostaza}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .tc-plato, .tc-line, .tc-fade, .tc-marquee, .tc-spin, .tc-wipe { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: 'rgba(244,232,214,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.terracota,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: el plato se pone en la mesa ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.tinta }}
      >
        <div className="absolute inset-0 tc-plato">
          <Image
            src={`${IMG}/hero.webp`}
            alt="La mesa del restaurante ¡¡Típico De La Claudia!! en Los Ángeles"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        {/* velo cálido */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(33,26,21,0.62) 0%, rgba(33,26,21,0.30) 42%, rgba(33,26,21,0.90) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-10 md:pb-14">
          <p
            className="tc-fade flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] mb-6"
            style={{ color: C.mostaza, animationDelay: '0.55s' }}
          >
            <span className="h-px w-9" style={{ backgroundColor: 'rgba(217,164,65,0.6)' }} aria-hidden="true" />
            Los Ángeles · Comida chilena
          </p>
          <h1
            className={`${display.className} font-black leading-[0.98] tracking-[-0.02em] text-[clamp(3rem,11vw,6.6rem)]`}
            style={{ color: C.crema }}
          >
            <span className="block overflow-hidden">
              <span className="tc-line block" style={{ animationDelay: '0.7s' }}>
                La mesa
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="tc-line block" style={{ animationDelay: '0.85s' }}>
                donde todos
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className={`${display.className} tc-line block`}
                style={{ animationDelay: '1s', color: C.mostaza, fontStyle: 'italic' }}
              >
                vuelven.
              </span>
            </span>
          </h1>
          <p
            className="tc-fade mt-6 max-w-md text-base md:text-lg leading-relaxed font-medium"
            style={{ color: 'rgba(244,232,214,0.9)', animationDelay: '1.2s' }}
          >
            Comida chilena casera en Av. Las Industrias, servida con la
            generosidad de una mesa de familia.
          </p>
          <div className="tc-fade mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.35s' }}>
            <Btn href={WA_LINK} tone="mostaza">
              Pedir por WhatsApp
            </Btn>
            <Btn href="#carta" tone="lineCrema" external={false}>
              La carta del día
            </Btn>
          </div>
        </div>
        {/* barra de datos al pie del hero */}
        <div
          className="relative border-t"
          style={{
            borderColor: 'rgba(244,232,214,0.25)',
            backgroundColor: 'rgba(33,26,21,0.55)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold"
            style={{ color: 'rgba(244,232,214,0.82)' }}
          >
            <span>Cocina casera</span>
            <span>Av. Las Industrias 1000</span>
            <span style={{ color: C.mostaza }}>4,8 en Google · 125 opiniones</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Manifiesto: cocina de casa ── */}
      <section
        id="mesa"
        className="scroll-mt-20 relative overflow-hidden"
        style={{ ...CUADRILLE, backgroundColor: C.crema }}
      >
        {/* aro de plato decorativo */}
        <div
          className="absolute -right-24 top-10 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
          style={{ border: '1.5px solid rgba(164,71,47,0.18)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.terracota} lineColor="rgba(164,71,47,0.45)">
                Cocina chilena casera
              </Rotulo>
              <h2
                className={`${display.className} font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.4rem)] mt-4`}
                style={{ color: C.tinta }}
              >
                Cocina de casa,{' '}
                <em style={{ color: C.terracota, fontWeight: 500 }}>sin apuro.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                <p>
                  Aquí se cocina como en la mesa de una familia chilena:
                  olla, paciencia y porciones que no dejan hambre. Lo que
                  sale cambia con el día y con lo que hay fresco.
                </p>
                <p>
                  Es comida para repetir: la que se pide por WhatsApp de
                  camino, o la que se come lento, alargando la sobremesa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={WA_LINK} tone="terra">
                  Pedir por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
          <figure>
            <div className="tc-wipe relative overflow-hidden rounded-3xl aspect-[4/3]" style={{ boxShadow: '0 20px 48px rgba(33,26,21,0.18)' }}>
              <Image
                src={`${IMG}/mesa.webp`}
                alt="Mesa puesta del restaurante ¡¡Típico De La Claudia!!"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em] text-right"
              style={{ color: C.muted }}
            >
              La mesa de la Claudia
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 3 · Cinta de platos en marquesina ── */}
      <div style={{ backgroundColor: C.verde }} aria-hidden="true">
        <p
          className="pt-6 pb-1 text-center text-[11px] font-bold uppercase tracking-[0.32em]"
          style={{ color: C.mostaza }}
        >
          De la olla a la mesa
        </p>
        <div className="overflow-hidden py-4 md:py-5">
          <div className="tc-marquee flex w-max items-center gap-4 md:gap-5">
            {[...CINTA, ...CINTA, ...CINTA, ...CINTA].map((f, i) => (
              <figure
                key={i}
                className="relative h-36 w-56 md:h-44 md:w-72 shrink-0 overflow-hidden rounded-2xl"
                style={{ border: '1px solid rgba(244,232,214,0.28)' }}
              >
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes="288px"
                  className="object-cover"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4 · La carta: se pide por WhatsApp ── */}
      <section
        id="carta"
        className="scroll-mt-20"
        style={{ ...CUADRILLE, backgroundColor: C.crema }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <figure className="order-2 lg:order-1">
            <div
              className="tc-wipe relative overflow-hidden rounded-3xl aspect-[4/5] max-h-[560px]"
              style={{ boxShadow: '0 20px 48px rgba(33,26,21,0.18)' }}
            >
              <Image
                src={`${IMG}/detalle.webp`}
                alt="Detalle de un plato servido en ¡¡Típico De La Claudia!!"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em]"
              style={{ color: C.muted }}
            >
              Recién salido de la cocina
            </figcaption>
          </figure>
          <Reveal className="order-1 lg:order-2">
            <div
              className="rounded-3xl p-7 md:p-10"
              style={{
                backgroundColor: C.verde,
                border: '1px solid rgba(217,164,65,0.4)',
                boxShadow: '0 20px 48px rgba(33,26,21,0.2)',
              }}
            >
              <Rotulo color={C.mostaza} lineColor="rgba(217,164,65,0.5)">
                La carta del día
              </Rotulo>
              <h2
                className={`${display.className} font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,5vw,3.8rem)] mt-4`}
                style={{ color: C.crema }}
              >
                La carta se escribe{' '}
                <em style={{ color: C.mostaza, fontWeight: 500 }}>cada día.</em>
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,232,214,0.85)' }}>
                Como toda cocina de casa, lo que se sirve cambia día a
                día. Escríbenos y te contamos qué hay hoy, con los
                precios al momento.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Btn href={WA_LINK_CARTA} tone="mostaza">
                  Pedir la carta del día
                </Btn>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: 'rgba(244,232,214,0.85)', textDecorationColor: 'rgba(217,164,65,0.5)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Para compartir: precio y opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.mostaza} lineColor="rgba(217,164,65,0.5)">
                Para compartir
              </Rotulo>
              <h2
                className={`${display.className} font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.4rem)] mt-4`}
                style={{ color: C.crema }}
              >
                Platos para el{' '}
                <em style={{ color: C.mostaza, fontWeight: 500 }}>centro de la mesa.</em>
              </h2>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,232,214,0.82)' }}>
                Comida de casa, precio de barrio. Google Maps publica un
                rango de {BIZ.priceRange} por persona: alcanza para
                comer bien y volver.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 flex items-baseline gap-4 border-t pt-6" style={{ borderColor: 'rgba(244,232,214,0.22)' }}>
                <p
                  className={`${display.className} font-black leading-none text-[clamp(2rem,6vw,3.4rem)]`}
                  style={{ color: C.crema }}
                >
                  {BIZ.priceRange}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] max-w-[140px] leading-relaxed" style={{ color: 'rgba(244,232,214,0.65)' }}>
                  rango publicado en Google Maps
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col items-center gap-6">
            <Reveal>
              <div className="relative w-52 h-52 md:w-60 md:h-60">
                <div
                  className="absolute inset-0 rounded-full tc-spin"
                  style={{ border: '1px dashed rgba(217,164,65,0.6)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute inset-4 rounded-full flex flex-col items-center justify-center gap-1.5 text-center"
                  style={{
                    border: '1px solid rgba(244,232,214,0.35)',
                    backgroundColor: 'rgba(244,232,214,0.05)',
                  }}
                >
                  <span
                    className={`${display.className} font-black text-6xl leading-none`}
                    style={{ color: C.crema }}
                  >
                    {BIZ.rating}
                  </span>
                  <Stars value={BIZ.ratingValue} color={C.mostaza} size={16} />
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: 'rgba(244,232,214,0.8)' }}
                  >
                    {BIZ.reviews} opiniones
                  </span>
                  <span
                    className="text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: 'rgba(244,232,214,0.55)' }}
                  >
                    en Google
                  </span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-bold underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.mostaza, textDecorationColor: 'rgba(217,164,65,0.4)' }}
              >
                Ver la ficha real en Google
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Dónde ── */}
      <section
        id="donde"
        className="scroll-mt-20"
        style={{ ...CUADRILLE, backgroundColor: C.crema }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.terracota} lineColor="rgba(164,71,47,0.45)">
                Dónde
              </Rotulo>
              <h2
                className={`${display.className} font-black leading-[1.05] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,3.8rem)] mt-4`}
                style={{ color: C.tinta }}
              >
                Av. Las Industrias 1000,{' '}
                <em style={{ color: C.terracota, fontWeight: 500 }}>Los Ángeles</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.tinta, textDecorationColor: 'rgba(164,71,47,0.4)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={MAPS_URL} tone="terra">
                  Cómo llegar
                </Btn>
                <Btn href={WA_LINK} tone="lineTinta">
                  Pedir por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="relative w-full overflow-hidden rounded-3xl aspect-[4/3] min-h-[300px]"
              style={{ border: `1px solid ${C.line}`, boxShadow: '0 20px 48px rgba(33,26,21,0.14)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.terracota }}>
        <div
          className="absolute -left-28 -bottom-28 w-80 h-80 md:w-[26rem] md:h-[26rem] rounded-full pointer-events-none"
          style={{ border: '1.5px solid rgba(244,232,214,0.25)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Rotulo color={C.crema} lineColor="rgba(244,232,214,0.5)">
              Te esperamos
            </Rotulo>
            <h2
              className={`${display.className} font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.8rem,8vw,5.4rem)] mt-4`}
              style={{ color: C.crema }}
            >
              ¿Nos <em style={{ fontWeight: 500 }}>sentamos?</em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,232,214,0.88)' }}>
              Escríbenos por WhatsApp: te contamos la carta del día y te
              esperamos en Av. Las Industrias.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="crema">
                Pedir por WhatsApp
              </Btn>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="inline-flex items-center justify-center px-5 py-3 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.crema, textDecorationColor: 'rgba(244,232,214,0.5)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-black text-xl md:text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(244,232,214,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,232,214,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(244,232,214,0.85)' }}
              >
                Facebook
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(244,232,214,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,232,214,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.crema }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.mostaza }}
              >
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
