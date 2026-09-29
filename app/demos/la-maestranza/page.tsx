import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  ink: '#14100B',
  inkSoft: '#1E1913',
  paper: '#F4EFE3',
  flame: '#E4572E',
  flameDeep: '#B93A17',
  cream: '#FFF8EA',
  muted: '#6B6257',
  line: 'rgba(20,16,11,0.16)',
  whiteSoft: 'rgba(255,248,234,0.72)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-maestranza',
  title: 'La Maestranza — Pizzería y comida rápida en Villa Alegre',
  description:
    'Pizzería y comida rápida en Av. Abate Molina 586, Villa Alegre. Pizzas al horno, hamburguesas, papas naturales y delivery a domicilio. Pedidos por WhatsApp.',
  image: '/demos/la-maestranza/papas.webp',
})

const NAV_LINKS = [
  { label: 'La pega', href: '#pega' },
  { label: 'Delivery', href: '#delivery' },
  { label: 'El local', href: '#local' },
]

const MARQUEE = [
  'Pizzas al horno',
  'Hamburguesas',
  'Papas naturales',
  'Delivery a domicilio',
  'Abate Molina 586-B',
  'Villa Alegre',
]

const PEGA = [
  {
    num: '01',
    tag: 'la favorita',
    name: 'Pizzas al horno',
    desc: 'La que la gente cruza la comuna a buscar: masa firme, queso generoso y el toque de la casa. “El nivel de pizza de este lugar es simplemente superior”, dice una reseña real.',
    src: `${IMG}/pendon.webp`,
    alt: 'Pendón de La Maestranza con hamburguesa apilada y el llamado atrévete y prueba',
  },
  {
    num: '02',
    tag: 'recién cortadas',
    name: 'Papas naturales',
    desc: 'Papas de verdad, cortadas y fritas al momento. En las reseñas las nombran como las favoritas de la casa.',
    src: `${IMG}/papas.webp`,
    alt: 'Caja con papas fritas naturales cubiertas de queso y salsa',
  },
  {
    num: '03',
    tag: 'a tu puerta',
    name: 'Delivery en Villa Alegre',
    desc: 'El pedido llega rápido y caliente: en Google repiten que es el mejor delivery de comida rápida de la comuna.',
    src: `${IMG}/mural.webp`,
    alt: 'Ilustración muralista de estilo urbano asociada a la marca',
  },
]

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.flame : C.flameDeep }}
    >
      <span
        className="inline-block w-6 h-[3px]"
        style={{ backgroundColor: light ? C.flame : C.flameDeep }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function Sticker({ children, rotate = -4 }: { children: React.ReactNode; rotate?: number }) {
  return (
    <span
      className={`${display.className} inline-block text-xs md:text-sm uppercase tracking-wide px-3 py-1.5 border-2`}
      style={{
        transform: `rotate(${rotate}deg)`,
        backgroundColor: C.paper,
        color: C.ink,
        borderColor: C.ink,
        boxShadow: '3px 3px 0 rgba(0,0,0,0.85)',
      }}
    >
      {children}
    </span>
  )
}

export default function LaMaestranzaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .lm-btn { transition: transform 0.16s ease, box-shadow 0.16s ease, background-color 0.16s ease; }
        .lm-btn:hover { transform: translate(-1px,-2px); box-shadow: 5px 5px 0 rgba(0,0,0,0.85); }
        .lm-btn:active { transform: translate(0,0) scale(0.98); box-shadow: 2px 2px 0 rgba(0,0,0,0.85); }
        .lm-btn:focus-visible { outline: 3px solid ${C.flame}; outline-offset: 3px; }
        .lm-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .lm-card:hover { transform: translateY(-4px) rotate(0deg) !important; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK_PEDIDO}
        fontClass={display.className}
        ctaLabel="Pedir"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(20,16,11,0.95)',
          ink: C.paper,
          line: 'rgba(244,239,227,0.18)',
          btnBg: C.flame,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero póster oscuro ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        {/* trama de fondo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, ${C.flame} 0 2px, transparent 2px 22px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[120px] pb-14 md:pb-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <Sticker rotate={-3}>pizzería</Sticker>
                  <Sticker rotate={2}>comida rápida</Sticker>
                  <Sticker rotate={-2}>delivery</Sticker>
                </div>
                <h1
                  className={`${display.className} uppercase leading-[0.94] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,6.5rem)]`}
                  style={{ color: C.paper }}
                >
                  La pizza y las papas que{' '}
                  <span style={{ color: C.flame }}>Villa Alegre</span>{' '}
                  pide a domicilio
                </h1>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-xl font-medium" style={{ color: C.whiteSoft }}>
                  {BIZ.name} — {BIZ.rubro.toLowerCase()} en Av. Abate Molina 586,
                  pleno centro de Villa Alegre. Pedidos y delivery directo
                  por WhatsApp.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={WA_LINK_PEDIDO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lm-btn uppercase tracking-wide text-sm md:text-base px-6 py-3 border-2 tap-44`}
                    style={{ backgroundColor: C.flame, color: '#FFFFFF', borderColor: '#FFFFFF' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#pega"
                    className={`${display.className} lm-btn uppercase tracking-wide text-sm md:text-base px-6 py-3 border-2 tap-44`}
                    style={{ color: C.paper, borderColor: 'rgba(244,239,227,0.55)' }}
                  >
                    Qué tienen
                  </a>
                </div>
              </Reveal>
            </div>
            {/* pila de fotos tipo sticker */}
            <div className="col-span-12 lg:col-span-5 relative h-[340px] md:h-[440px]">
              <Reveal delay={120}>
                <figure
                  className="lm-card absolute left-0 top-2 w-[62%] border-4 p-2 pb-8"
                  style={{
                    transform: 'rotate(-5deg)',
                    backgroundColor: C.paper,
                    borderColor: C.paper,
                    boxShadow: '8px 10px 0 rgba(0,0,0,0.55)',
                  }}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/papas.webp`}
                      alt="Papas fritas naturales con queso derretido y salsa, plato fuerte de la casa"
                      fill
                      priority
                      sizes="(min-width: 1024px) 30vw, 60vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} absolute bottom-1.5 left-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    papas naturales
                  </figcaption>
                </figure>
                <figure
                  className="lm-card absolute right-0 bottom-0 w-[58%] border-4 p-2 pb-8"
                  style={{
                    transform: 'rotate(4deg)',
                    backgroundColor: C.paper,
                    borderColor: C.paper,
                    boxShadow: '8px 10px 0 rgba(0,0,0,0.55)',
                  }}
                >
                  <div className="relative w-full aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/pendon.webp`}
                      alt="Pendón del local con hamburguesa apilada"
                      fill
                      sizes="(min-width: 1024px) 28vw, 56vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} absolute bottom-1.5 left-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    atrévete y prueba
                  </figcaption>
                </figure>
                {/* sello de rating */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lm-btn absolute -bottom-4 left-4 md:left-8 flex flex-col items-center justify-center w-[104px] h-[104px] rounded-full border-4 text-center tap-44"
                  style={{
                    backgroundColor: C.flame,
                    borderColor: C.paper,
                    transform: 'rotate(-8deg)',
                    boxShadow: '5px 6px 0 rgba(0,0,0,0.55)',
                  }}
                >
                  <span className={`${display.className} text-2xl leading-none`} style={{ color: C.paper }}>
                    {BIZ.rating}
                  </span>
                  <Stars value={4.8} color={C.paper} className="w-2.5 h-2.5 mt-0.5" />
                  <span className={`${mono.className} text-[9px] uppercase tracking-wider mt-1`} style={{ color: C.paper }}>
                    {BIZ.reviews} reseñas
                  </span>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
        {/* barra inferior del hero */}
        <div className="relative border-t-2" style={{ borderColor: 'rgba(244,239,227,0.2)', backgroundColor: C.inkSoft }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold`}
            style={{ color: C.whiteSoft }}
          >
            <span>Av. Abate Molina 586</span>
            <span>Villa Alegre, Maule</span>
            <span>{BIZ.ticket}</span>
            <span className="hidden md:inline" style={{ color: C.flame }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta flame ── */}
      <div className="border-y-4 py-3 md:py-4 overflow-hidden" style={{ backgroundColor: C.flame, borderColor: C.ink }} aria-hidden="true">
        <div
          className={`${display.className} flex flex-wrap justify-center gap-y-1.5 text-base md:text-xl uppercase tracking-[0.06em]`}
          style={{ color: C.paper }}
        >
          {MARQUEE.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3 md:px-4">{item}</span>
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill={C.ink} aria-hidden="true">
                <path d="M13.8 2.2c.7 2.3-.3 4.7-2.4 5.6-1.2.5-2.5.4-3.5-.2.5 3.4 2.8 5.4 5.6 5.6 3.6.3 6.6-2.3 6.6-5.3 0-2.1-1.1-3.6-2.4-4.7.2 1-.2 2-1 2.5-1.3.8-2.7.3-3.3-.9-.6-1.1-.3-2.4.4-3.6zM7 14.6C4.9 15.5 4 17.9 5 19.7c.9 1.7 2.9 2.5 4.9 2 2.8-.7 4.4-3.5 4.1-6.4-2.5 1.1-5.3.6-7-.7z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── La pega: grilla póster ── */}
      <section id="pega" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Kicker>lo que sale de la cocina</Kicker>
          <h2
            className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6vw,4.6rem)] mb-10 md:mb-14`}
          >
            La pega es simple:
            <br />
            <span style={{ color: C.flameDeep }}>comida rica, rápido</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {PEGA.map((p, i) => (
            <Reveal
              key={p.num}
              className={`col-span-12 md:col-span-6 lg:col-span-4 ${i === 1 ? 'lg:mt-14' : i === 2 ? 'lg:mt-7' : ''}`}
              delay={i * 120}
            >
              <article
                className="lm-card h-full border-4 p-3 flex flex-col"
                style={{ backgroundColor: C.cream, borderColor: C.ink, boxShadow: '6px 7px 0 rgba(20,16,11,0.9)' }}
              >
                <div className="relative overflow-hidden aspect-[4/3] border-2 mb-4" style={{ borderColor: C.ink }}>
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`${mono.className} absolute top-2 left-2 text-[10px] font-bold uppercase tracking-[0.16em] px-2 py-1`}
                    style={{ backgroundColor: C.ink, color: C.flame }}
                  >
                    {p.tag}
                  </span>
                </div>
                <div className="flex items-baseline gap-3 px-1">
                  <span className={`${display.className} text-3xl leading-none`} style={{ color: C.flameDeep }} aria-hidden="true">
                    {p.num}
                  </span>
                  <h3 className={`${display.className} uppercase text-2xl leading-tight`}>{p.name}</h3>
                </div>
                <p className="text-sm md:text-[15px] leading-relaxed mt-3 px-1 pb-2" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className={`${mono.className} mt-8 text-xs md:text-sm uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
            La carta completa y los precios del día se confirman por WhatsApp.
          </p>
        </Reveal>
      </section>

      {/* ── Delivery + reseñas reales ── */}
      <section id="delivery" className="scroll-mt-20 border-y-4" style={{ backgroundColor: C.flameDeep, borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <Kicker light>el dato que importa</Kicker>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6vw,4.4rem)]`} style={{ color: C.paper }}>
                  El mejor delivery de la comuna
                </h2>
                <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(255,248,234,0.82)' }}>
                  No lo decimos nosotros: lo repiten las {BIZ.reviews} reseñas
                  de su ficha de Google. Pedido por WhatsApp, reparto directo,
                  comida caliente.
                </p>
                <div className="flex items-end gap-5 mt-8">
                  <p className={`${display.className} text-[clamp(4rem,10vw,7rem)] leading-none`} style={{ color: C.paper }}>
                    {BIZ.rating}
                  </p>
                  <div className="pb-2">
                    <Stars value={4.8} color={C.paper} className="w-4 h-4" />
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-1.5`} style={{ color: C.paper }}>
                      {BIZ.reviews} reseñas
                      <br />
                      en Google
                    </p>
                  </div>
                </div>
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} lm-btn inline-block mt-8 uppercase tracking-wide text-sm md:text-base px-6 py-3 border-2 tap-44`}
                  style={{ backgroundColor: C.ink, color: C.paper, borderColor: C.paper }}
                >
                  Pedir delivery ahora
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-4">
              {REVIEWS.slice(0, 3).map((r, i) => (
                <Reveal key={r.author} delay={100 + i * 110}>
                  <article>
                    <figure
                      className="border-2 p-5 md:p-6"
                      style={{
                        backgroundColor: i === 0 ? C.paper : 'rgba(244,239,227,0.10)',
                        borderColor: i === 0 ? C.ink : 'rgba(244,239,227,0.35)',
                        transform: `rotate(${i === 1 ? 0.6 : i === 2 ? -0.7 : 0}deg)`,
                      }}
                    >
                      <blockquote
                        className="text-sm md:text-base leading-relaxed font-semibold"
                        style={{ color: i === 0 ? C.ink : C.paper }}
                      >
                        “{r.text}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-3 mt-3">
                        <span
                          className={`${mono.className} text-[11px] uppercase tracking-[0.14em] font-bold`}
                          style={{ color: i === 0 ? C.flameDeep : C.paper }}
                        >
                          {r.author} · {r.when} · reseña de Google
                        </span>
                        <Stars value={r.stars} color={i === 0 ? C.flameDeep : C.paper} className="w-3 h-3" />
                      </figcaption>
                    </figure>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={240}>
                <div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.paper, textDecorationColor: 'rgba(255,248,234,0.4)' }}
                  >
                    Leer las {BIZ.reviews} reseñas en Google →
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Kicker>dónde queda</Kicker>
          <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6vw,4.4rem)] mb-10`}>
            En la <span style={{ color: C.flameDeep }}>Abate Molina</span>,
            <br className="hidden md:block" /> plena Villa Alegre
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <figure
              className="lm-card border-4 p-2.5 pb-9"
              style={{ backgroundColor: C.cream, borderColor: C.ink, boxShadow: '7px 8px 0 rgba(20,16,11,0.9)', transform: 'rotate(-1deg)' }}
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de La Maestranza con sus dos pendones en Av. Abate Molina, Villa Alegre"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                el local, desde la calle — foto real de su ficha
              </figcaption>
            </figure>
          </Reveal>
          <div className="col-span-12 md:col-span-5 space-y-6">
            <Reveal delay={100}>
              <figure
                className="lm-card border-4 p-2.5 pb-8"
                style={{ backgroundColor: C.cream, borderColor: C.ink, boxShadow: '6px 7px 0 rgba(20,16,11,0.9)', transform: 'rotate(1.4deg)' }}
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/local.webp`}
                    alt="Otro ángulo del local de La Maestranza en Villa Alegre"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <div className="border-4 p-5" style={{ backgroundColor: C.ink, borderColor: C.ink, boxShadow: '6px 7px 0 rgba(20,16,11,0.4)' }}>
                <address className="not-italic">
                  <p className={`${display.className} uppercase text-xl leading-tight`} style={{ color: C.paper }}>
                    {BIZ.address}
                  </p>
                  <p className={`${mono.className} text-xs uppercase tracking-[0.16em] mt-1.5`} style={{ color: C.whiteSoft }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-3 text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.flame }}>
                    {BIZ.phoneDisplay}
                  </a>
                </address>
              </div>
            </Reveal>
          </div>
        </div>
        {/* mapa */}
        <Reveal delay={120}>
          <div
            className="mt-10 border-4 p-2.5"
            style={{ backgroundColor: C.cream, borderColor: C.ink, boxShadow: '7px 8px 0 rgba(20,16,11,0.9)' }}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden border-2" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-11 rounded-full object-cover border-2" style={{ borderColor: C.flame }} aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.whiteSoft }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.flame }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(244,239,227,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.flame }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
