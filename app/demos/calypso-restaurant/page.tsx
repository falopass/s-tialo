import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2' }],
})
const accent = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/** Mar abierto, madera de terraza, espuma y el coral del atardecer. */
const C = {
  sea: '#0C3B48',
  seaDeep: '#07272F',
  foam: '#F6F1E4',
  sand: '#E9DEC8',
  coral: '#D97A57',
  teal: '#2A7F7E',
  muted: '#4E5E63',
  line: 'rgba(12,59,72,0.18)',
  foamSoft: 'rgba(246,241,228,0.85)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'calypso-restaurant',
  title: 'Restaurante Calypso — Terraza sobre el mar, Constitución',
  description:
    'Restaurant y pizzería en Av. del Mar 1700, Constitución: terraza de madera sobre la playa, pizzas, pescados y mariscos, tragos al atardecer y vista a la Piedra de la Iglesia.',
  image: `${IMG}/04.webp`,
})

const NAV_LINKS = [
  { label: 'La terraza', href: '#terraza' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const COCINA = [
  {
    src: `${IMG}/22.webp`,
    alt: 'Pizza recién salida sirviéndose en la terraza de Calypso',
    tag: 'Pizzas a pedido',
    desc: '“Las pizzas son muy deliciosas”, repiten en las reseñas. Cada plato se hace a pedido.',
  },
  {
    src: `${IMG}/34.webp`,
    alt: 'Pescado frito con papas en plato azul, especialidad de Calypso',
    tag: 'Pescados y mariscos',
    desc: 'La especialidad de la casa: reineta, ceviches y mariscos de la costa.',
  },
  {
    src: `${IMG}/62.webp`,
    alt: 'Tragos y picoteo sobre la mesa de la terraza de Calypso',
    tag: 'Tragos y tablas',
    desc: 'Pisco sour, jugos naturales y tablas para picar mirando el mar.',
  },
]

export default function Calypso() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.foam, color: C.sea, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: C.foam,
          ink: C.sea,
          line: C.line,
          btnBg: C.sea,
          btnInk: C.foam,
        }}
      />

      {/* ── Hero: la terraza y la Piedra ── */}
      <section id="inicio" className="relative">
        <div className="relative w-full min-h-[560px] md:min-h-[700px]">
          <Image
            src={`${IMG}/04.webp`}
            alt="Terraza de madera de Restaurante Calypso sobre la playa, con la Piedra de la Iglesia al fondo"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(7,39,47,0.45) 0%, rgba(7,39,47,0.2) 45%, rgba(7,39,47,0.8) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-16 w-full">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Letrero Calypso en letra cursiva sobre la pared de madera del local"
                  className="w-44 md:w-64 mb-5 rounded-lg"
                  style={{ boxShadow: '0 10px 30px rgba(7,39,47,0.5)' }}
                />
                <p className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em] mb-3`} style={{ color: C.foamSoft }}>
                  Restaurant & pizzería · Av. del Mar, Constitución
                </p>
                <h1
                  className={`${display.className} leading-[0.98] text-[clamp(2.4rem,8vw,5.5rem)]`}
                  style={{ color: C.foam, textShadow: '0 2px 24px rgba(7,39,47,0.7)' }}
                >
                  Almorzar mirando<br />
                  <em className={accent.className} style={{ color: '#EFB08E' }}>la Piedra de la Iglesia</em>
                </h1>
                <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(246,241,228,0.9)' }}>
                  Terraza de madera sobre la arena, pizzas, pescados y mariscos,
                  y tragos mientras cae el sol sobre el mar de Constitución.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] rounded-full transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.coral, color: C.seaDeep, boxShadow: '0 6px 18px rgba(7,39,47,0.4)' }}
                  >
                    Reservar por WhatsApp →
                  </a>
                  <div className={`${mono.className} px-4 py-3 rounded-full text-xs font-semibold`} style={{ backgroundColor: 'rgba(7,39,47,0.5)', color: C.foam }}>
                    {BIZ.reviews} opiniones en Google
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La terraza ── */}
      <section id="terraza" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 md:col-span-5 order-2 md:order-1">
            <Reveal delay={80}>
              <figure className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image
                  src={`${IMG}/10.webp`}
                  alt="Fachada de madera de Calypso con sus escaleras azules sobre la costanera"
                  fill
                  sizes="(min-width: 768px) 38vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <p className={`${mono.className} mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                las escaleras azules, al frente de la playa
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7 order-1 md:order-2">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mb-4`} style={{ color: C.teal }}>
                costanera M-304 · frente a la playa
              </p>
              <h2 className={`${display.className} leading-[1.02] text-[clamp(2rem,5.5vw,4rem)] mb-5`}>
                La terraza es<br />
                <em className={accent.className} style={{ color: C.coral }}>de primera fila</em>
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                Calypso está literalmente sobre el borde costero: desde las mesas de la
                terraza se ven las olas, la playa y la Piedra de la Iglesia. Afuera o
                adentro, el mar está siempre al lado de la mesa.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative mt-8 aspect-[16/10] overflow-hidden rounded-3xl">
                <Image
                  src={`${IMG}/36.webp`}
                  alt="Escalera blanca que baja desde Calypso hacia la playa en Constitución"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La cocina: filmstrip ── */}
      <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.seaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mb-3`} style={{ color: C.coral }}>
              lo que sale de la cocina
            </p>
            <h2 className={`${display.className} leading-[1.02] text-[clamp(2rem,5.5vw,4rem)] mb-12`} style={{ color: C.foam }}>
              Pizzas, mar y <em className={accent.className} style={{ color: '#EFB08E' }}>tragos</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-8">
            {COCINA.map((p, i) => (
              <Reveal key={p.tag} delay={i * 90} className="col-span-12 md:col-span-4">
                <figure>
                  <div className={`relative overflow-hidden rounded-3xl ${i === 1 ? 'md:mt-10' : ''} aspect-[4/5]`}>
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="pt-4">
                    <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.foam }}>{p.tag}</p>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'rgba(246,241,228,0.7)' }}>{p.desc}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El atardecer ── */}
      <section className="relative">
        <div className="relative w-full min-h-[420px] md:min-h-[520px]">
          <Image
            src={`${IMG}/52.webp`}
            alt="Cerveza y jugo natural sobre la mesa de Calypso con el sol cayendo sobre el mar"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(7,39,47,0.15) 0%, rgba(7,39,47,0.55) 100%)' }} aria-hidden="true" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 w-full">
              <Reveal>
                <p className={`${display.className} leading-[1.05] text-[clamp(1.8rem,5vw,3.4rem)] max-w-2xl`} style={{ color: C.foam, textShadow: '0 2px 20px rgba(7,39,47,0.7)' }}>
                  Los tragos se piden <em className={accent.className} style={{ color: '#EFB08E' }}>al atardecer</em>
                </p>
                <p className="mt-3 max-w-lg text-sm md:text-base" style={{ color: 'rgba(246,241,228,0.9)' }}>
                  Cervezas, jugos naturales y pisco sour mientras el sol baja detrás de la Piedra.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] mb-3`} style={{ color: C.teal }}>
              reseñas verificadas de Google
            </p>
            <h2 className={`${display.className} leading-[1.02] text-[clamp(2rem,5.5vw,3.8rem)] mb-10`}>
              Los que ya se <em className={accent.className} style={{ color: C.coral }}>sentaron acá</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90} className="col-span-12 md:col-span-4">
                <figure className="h-full rounded-3xl p-6 flex flex-col" style={{ backgroundColor: i === 0 ? C.sea : C.foam, boxShadow: '0 10px 30px rgba(12,59,72,0.12)' }}>
                  <Stars value={r.stars} color={i === 0 ? '#EFB08E' : C.coral} className="w-4 h-4 mb-3" />
                  <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? 'rgba(246,241,228,0.92)' : C.sea }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-semibold`} style={{ color: i === 0 ? '#EFB08E' : C.muted }}>
                    {r.author} · {r.when}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.teal }}
            >
              Ver las {BIZ.reviews} opiniones en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} leading-[1.02] text-[clamp(2rem,5.5vw,3.8rem)] mb-10`}>
            En la <em className={accent.className} style={{ color: C.coral }}>costanera</em> de Constitución
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-3xl" style={{ boxShadow: '0 14px 36px rgba(12,59,72,0.18)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <div className="rounded-3xl p-6" style={{ backgroundColor: C.sea, color: C.foam }}>
              <address className="not-italic">
                <p className={`${display.className} text-xl md:text-2xl leading-tight`}>
                  {BIZ.address}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: 'rgba(246,241,228,0.7)' }}>
                  {BIZ.city}, {BIZ.region}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: '#EFB08E' }}>
                  {BIZ.phoneDisplay}
                </a>
                <p className={`${mono.className} text-xs mt-4 pt-4 border-t`} style={{ color: 'rgba(246,241,228,0.75)', borderColor: 'rgba(246,241,228,0.18)' }}>
                  Abre {BIZ.opens} · Terraza y salón · Frente a la playa
                </p>
              </address>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.seaDeep, color: C.foam }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div>
            <p className={`${display.className} text-lg leading-tight`}>{BIZ.name}</p>
            <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(246,241,228,0.65)' }}>
              {BIZ.address} · {BIZ.city}
            </address>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: '#EFB08E' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,228,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(246,241,228,0.6)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.foam }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#EFB08E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
