import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_LLEVAR, MAPS_URL, MAPS_EMBED, IMG, RESENAS, RESENA_SIN_TEXTO } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  night: '#100D09',
  panel: '#1A1510',
  panelHi: '#231C13',
  gold: '#D8B45A',
  goldBright: '#EDC979',

  cream: '#F5EFE3',
  muted: '#A89B80',
  dim: '#8A7E68',
  line: 'rgba(216,180,90,0.22)',
} as const

const FOCUS =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D8B45A]'

export const metadata: Metadata = demoMetadata({
  slug: 'forastero-sabor-en-cada-bocado',
  title: 'FORASTERO · Salchipapas, pizzas y delivery en Pencahue',
  description:
    'Restaurante en Francisco de Villagra 704, Pencahue. Salchi Forastera, Golosa y Glotona, pizzas y delivery por WhatsApp. 5,0 estrellas en Google.',
  image: '/demos/forastero-sabor-en-cada-bocado/hero.webp',
})

const NAV_LINKS = [
  { label: 'Las salchis', href: '#salchis' },
  { label: 'La carta', href: '#carta' },
  { label: 'Promos', href: '#promos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const SALCHIS = [
  {
    src: `${IMG}/salchi-forastera.webp`,
    alt: 'Salchi Forastera: papas fritas con salchichas, carne y aros de cebolla, servida en plato blanco',
    name: 'Salchi Forastera',
    desc: 'La que lleva el nombre de la casa: papas con salchicha, carne y aros de cebolla dorados encima.',
  },
  {
    src: `${IMG}/salchi-golosa.webp`,
    alt: 'Salchi Golosa: papas fritas con choclo, carne y un hilado de mayonesa',
    name: 'Salchi Golosa',
    desc: 'Papas con choclo dulce y su hilado de mayo, para las que se saben de memoria.',
  },
  {
    src: `${IMG}/salchi-glotona.webp`,
    alt: 'Salchi Glotona: papas fritas con trozos de carne y toppings de la casa',
    name: 'Salchi Glotona',
    desc: 'La más cargada de las tres: para cuando una normal no alcanza.',
  },
]

const CARTA = [
  {
    src: `${IMG}/pizza.webp`,
    alt: 'Pizza recién salida del horno de FORASTERO junto a un calzone',
    titulo: 'Pizzas',
    bajada: 'Medianas y familiares, con la promo de 2 medianas que publican en su Facebook.',
  },
  {
    src: `${IMG}/bebidas.webp`,
    alt: 'Tragos y bebidas de la casa servidos con humo y limón en la barra de FORASTERO',
    titulo: 'Barra y bebidas',
    bajada: 'Bebidas, tragos y coctelería de la casa para acompañar la mesa.',
  },
  {
    src: `${IMG}/coctel.webp`,
    alt: 'Coctel de la casa de FORASTERO servido en copa con bombillas',
    titulo: 'Completos y más',
    bajada: 'Sándwich, completos, empanadas, churrascos y ass forasteros con papas.',
  },
]

const PROMOS = [
  {
    src: `${IMG}/promo-viernes.webp`,
    alt: 'Promo del viernes de FORASTERO: pizzas, sándwich, salchipapas, churrascos y empanadas',
    nota: 'Comida rápida de viernes',
  },
  {
    src: `${IMG}/promo-pizza.webp`,
    alt: 'Promo de FORASTERO: 2 pizzas medianas por $15.990',
    nota: '2 medianas x $15.990',
  },
  {
    src: `${IMG}/promo-ass.webp`,
    alt: 'Promo 06 de FORASTERO: 4 ass forasteros a elección con papas fritas y bebida por $17.990',
    nota: 'Promo 06 · $17.990',
  },
]

function GoldRule() {
  return (
    <div
      className="h-[2px] w-full"
      style={{
        backgroundImage: `linear-gradient(90deg, transparent 0%, ${C.gold} 18%, ${C.gold} 82%, transparent 100%)`,
      }}
      aria-hidden="true"
    />
  )
}

function WaButton({ href, ghost = false, children }: { href: string; ghost?: boolean; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${FOCUS} inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 rounded-full font-semibold text-[15px] tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tap-44`}
      style={
        ghost
          ? { border: `1.5px solid ${C.gold}`, color: C.gold }
          : { backgroundColor: C.gold, color: '#100D09', boxShadow: '0 8px 24px -8px rgba(216,180,90,0.5)' }
      }
    >
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-4"
      style={{ color: C.gold }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor" aria-hidden="true">
        <path d="M7 2v9a2 2 0 0 0 2 2h1v9h2V2h-1v7h-1V2H9v7H8V2H7zm9 0c-1.5 0-3 2.5-3 5.5 0 2.4 1 4 2 4.5V22h2V2h-1z" />
      </svg>
      {children}
    </p>
  )
}

export default function ForasteroPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.night, color: C.cream }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(16,13,9,0.94)',
          ink: C.cream,
          line: C.line,
          btnBg: C.gold,
          btnInk: '#100D09',
        }}
      />

      {/* ── Hero: letrero dorado + plato de la casa ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 80% 55% at 62% 30%, rgba(216,180,90,0.13) 0%, transparent 65%)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5" style={{ color: C.muted }}>
              <span className="inline-block w-8 h-[1.5px]" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              Restaurante · {BIZ.city} · Maule
            </p>
            <h1
              className={`${display.className} leading-[0.95] tracking-[0.01em] text-[clamp(3rem,12vw,6.2rem)]`}
              style={{ color: C.gold }}
            >
              FORASTERO
            </h1>
            <p className={`${display.className} mt-3 text-lg md:text-2xl uppercase tracking-[0.32em]`} style={{ color: C.cream }}>
              {BIZ.tagline}
            </p>
            <p className="mt-6 max-w-md text-[15px] md:text-[17px] leading-relaxed" style={{ color: C.muted }}>
              Salchipapas con nombre propio, pizzas y completos,
              con delivery en {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <WaButton href={WA_LINK}>Reservar mesa</WaButton>
              <WaButton href={WA_LINK_LLEVAR} ghost>
                Pedir delivery
              </WaButton>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-[12px] font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex min-h-[44px] items-center gap-2 tap-44`}
                style={{ color: C.gold }}
              >
                <Stars value={5} color={C.gold} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex min-h-[44px] items-center tap-44`}
                style={{ color: C.muted }}
              >
                {BIZ.fbFollowers} en Facebook
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative mx-auto max-w-[460px]">
              <div
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                style={{ border: `1.5px solid ${C.gold}`, boxShadow: '0 30px 60px -30px rgba(0,0,0,0.8), 0 0 40px -10px rgba(216,180,90,0.25)' }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Plato de la casa de FORASTERO con papas, carnes y salsas servido en su mesa"
                  fill
                  priority
                  sizes="(min-width: 1024px) 460px, 90vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-7 -left-3 md:-left-9 w-[38%] aspect-square overflow-hidden rounded-full"
                style={{ border: `4px solid ${C.night}`, boxShadow: `0 0 0 1.5px ${C.gold}, 0 18px 36px -18px rgba(0,0,0,0.8)` }}
              >
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo de FORASTERO en dorado sobre fondo negro"
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <div className="relative" style={{ backgroundColor: 'rgba(26,21,16,0.85)' }}>
          <GoldRule />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold" style={{ color: C.muted }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span style={{ color: C.gold }}>Delivery por WhatsApp</span>
            <span className="hidden sm:inline">Reserva directa</span>
          </div>
        </div>
      </section>

      {/* ── Las salchipapas con nombre propio ── */}
      <section id="salchis" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Las salchis de la casa</Eyebrow>
          <h2 className={`${display.className} text-[34px] md:text-[52px] leading-[1.02] tracking-[0.01em]`}>
            Tres papas con <span style={{ color: C.gold }}>nombre propio</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
            Las salchipapas que el local fotografía y publica en su Facebook.
            También llegan por delivery: promocionan las medianas de a 2.
          </p>
        </Reveal>
        <ul className="mt-10 md:mt-14 grid sm:grid-cols-3 gap-5">
          {SALCHIS.map((s, i) => (
            <Reveal key={s.name} delay={i * 90}>
              <li
                className="h-full rounded-2xl p-5 text-center"
                style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
              >
                <div
                  className="relative mx-auto w-[150px] h-[150px] md:w-[170px] md:h-[170px] overflow-hidden rounded-full"
                  style={{ border: `2px solid ${C.gold}` }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="170px"
                    className="object-cover"
                  />
                </div>
                <h3 className={`${display.className} mt-5 text-[22px] tracking-[0.02em]`} style={{ color: C.goldBright }}>
                  {s.name}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── De la cocina y la barra ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>De la cocina y la barra</Eyebrow>
            <h2 className={`${display.className} max-w-2xl text-[34px] md:text-[52px] leading-[1.02] tracking-[0.01em]`}>
              Lo que sale <span style={{ color: C.gold }}>de su cocina</span>
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5">
            {CARTA.map((c, i) => (
              <Reveal key={c.titulo} delay={i * 90}>
                <article className="h-full rounded-2xl overflow-hidden flex flex-col" style={{ backgroundColor: C.panelHi, border: `1px solid ${C.line}` }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className={`${display.className} text-[22px] tracking-[0.02em]`} style={{ color: C.goldBright }}>
                      {c.titulo}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                      {c.bajada}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promos reales publicadas en su Facebook ── */}
      <section id="promos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Promos de su Facebook</Eyebrow>
          <h2 className={`${display.className} max-w-2xl text-[34px] md:text-[52px] leading-[1.02] tracking-[0.01em]`}>
            Ofertas que el local <span style={{ color: C.gold }}>publica</span>
          </h2>
          <p className="mt-4 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
            Gráficas reales del Facebook de FORASTERO. La vigencia y el reparto
            se confirman directo por WhatsApp.
          </p>
        </Reveal>
        <ul className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-3 gap-5 items-start">
          {PROMOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 90}>
              <li className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${C.line}`, backgroundColor: C.panel }}>
                <div className="relative aspect-[7/10] sm:aspect-[3/4]">
                  <Image src={p.src} alt={p.alt} fill sizes="(min-width: 640px) 30vw, 100vw" className="object-cover object-top" />
                </div>
                <p className="px-5 py-4 text-[13px] font-semibold uppercase tracking-[0.12em]" style={{ color: C.gold }}>
                  {p.nota}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Opiniones: las 4 reseñas reales de su Google ── */}
      <section id="opiniones" className="scroll-mt-20">
        <GoldRule />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones reales de Google</Eyebrow>
              <h2 className={`${display.className} text-[34px] md:text-[52px] leading-[1.02] tracking-[0.01em]`}>
                {BIZ.rating} de 5: las {BIZ.reviews} reseñas son de{' '}
                <span style={{ color: C.gold }}>cinco estrellas</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
                Los que paran en Villagra 704 lo cuentan así en su ficha de
                Google. Textos reales, tal como los escribieron.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
                <Stars value={5} color={C.gold} className="w-[18px] h-[18px]" />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex min-h-[44px] items-center text-[14px] font-semibold underline underline-offset-4 tap-44`}
                  style={{ color: C.gold }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 100}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
                  >
                    <Stars value={5} color={C.gold} className="w-[14px] h-[14px]" />
                    <blockquote className="mt-3.5 text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.cream }}>
                      “{r.texto}”
                    </blockquote>
                    <figcaption className="mt-4 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                      {r.nombre} · {r.fecha} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
              <Reveal delay={320}>
                <p
                  className="flex items-center gap-3 px-6 py-4 rounded-2xl text-[13px] font-semibold"
                  style={{ backgroundColor: C.panelHi, border: `1px dashed ${C.line}`, color: C.muted }}
                >
                  <Stars value={5} color={C.gold} className="w-[13px] h-[13px] shrink-0" />
                  {RESENA_SIN_TEXTO.nombre} también dejó cinco estrellas ({RESENA_SIN_TEXTO.fecha.toLowerCase()}).
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Delivery: banner real del local ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-8 lg:gap-14 items-center">
          <Reveal>
            <Eyebrow>Delivery y para llevar</Eyebrow>
            <h2 className={`${display.className} text-[34px] md:text-[46px] leading-[1.05] tracking-[0.01em]`}>
              Pide y llega a tu casa en <span style={{ color: C.gold }}>Pencahue</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
              El mismo WhatsApp de la reserva toma tu pedido: escríbeles, di
              qué quieres y coordina el reparto o el retiro.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <WaButton href={WA_LINK_LLEVAR}>Pedir por WhatsApp</WaButton>
            </div>
            <p className={`${display.className} mt-6 text-xl md:text-2xl tracking-[0.06em]`} style={{ color: C.goldBright }}>
              {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="relative aspect-[16/9] overflow-hidden rounded-2xl"
              style={{ border: `1px solid ${C.line}`, boxShadow: '0 24px 50px -28px rgba(0,0,0,0.8)' }}
            >
              <Image
                src={`${IMG}/banner.webp`}
                alt="Portada de FORASTERO con su logo dorado y su teléfono de contacto"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch">
        <Reveal>
          <Eyebrow>Dónde estamos</Eyebrow>
          <h2 className={`${display.className} text-[34px] md:text-[46px] leading-[1.05] tracking-[0.01em]`}>
            Villagra 704, <span style={{ color: C.gold }}>Pencahue</span>
          </h2>
          <address className="not-italic mt-5 text-[15px] md:text-[16px] leading-relaxed" style={{ color: C.muted }}>
            {BIZ.address}
            <br />
            {BIZ.city}, {BIZ.region}, Chile
          </address>
          <div className="mt-8 rounded-2xl p-6" style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.muted }}>
              Reserva o pide para llevar
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <WaButton href={WA_LINK}>Reservar mesa</WaButton>
              <WaButton href={WA_LINK_LLEVAR} ghost>
                Pedir para llevar
              </WaButton>
            </div>
            <p className="mt-5 text-[13px]" style={{ color: C.dim }}>
              También en{' '}
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-semibold underline underline-offset-2 tap-44`}
                style={{ color: C.gold }}
              >
                Facebook
              </a>
              {' y en '}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} font-semibold underline underline-offset-2 tap-44`}
                style={{ color: C.gold }}
              >
                Google Maps
              </a>
              .
            </p>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="rounded-2xl overflow-hidden min-h-[340px] h-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.panelHi }}>
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full min-h-[340px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night }}>
        <GoldRule />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-[24px] tracking-[0.02em]`} style={{ color: C.gold }}>
              {BIZ.short}
            </p>
            <address className="not-italic text-[13px] leading-relaxed mt-1" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city} · {BIZ.tagline}
            </address>
          </div>
          <p className="text-[12px] leading-relaxed md:max-w-[26rem]" style={{ color: C.dim }}>
            <span className="font-semibold" style={{ color: C.gold }}>Mockup de Sitiazo.</span>{' '}
            Datos, fotos, platos, promos y reseñas del local reales, publicados en su Facebook y su ficha de Google.
          </p>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-24 [&>div]:static [&>div]:max-w-full [&>div]:w-fit">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
