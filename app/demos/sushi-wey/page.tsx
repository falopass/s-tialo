import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PROMO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  negro: '#0D0D10',
  negroSoft: '#16161C',
  crema: '#F2EFE8',
  neon: '#FF4D7E',
  muted: '#9A97A3',
  line: 'rgba(242,239,232,0.16)',
}

const RAINBOW =
  'linear-gradient(90deg,#FF4D4D 0%,#FFB84D 20%,#FFE14D 40%,#6EE86E 60%,#4DC9FF 80%,#B06EFF 100%)'

export const metadata: Metadata = demoMetadata({
  slug: 'sushi-wey',
  title: 'Sushi Wey — Rolls, promos y delivery en Molina',
  description:
    'Sushi Wey en Libertad 1398, Molina: rolls envueltos en palta, promos de cortes y handrolls. Full delivery, retiro y atención en local. Pedidos por WhatsApp.',
  image: `${IMG}/neon-mesa.webp`,
})

const NAV_LINKS = [
  { label: 'Promos', href: '#promos' },
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Pedidos', href: '#pedidos' },
]

const PROMOS = [
  {
    src: `${IMG}/tabla-rolls.webp`,
    alt: 'Tabla de rolls de distintos tipos servida en el local de Sushi Wey',
    t: '12 + 12 cortes',
    d: 'La promo que más se repite en su Instagram: dos veces doce para compartir (o no).',
  },
  {
    src: `${IMG}/rolls-barra.webp`,
    alt: 'Rolls recién hechos junto al refrigerador de bebidas de la barra',
    t: 'Palitos libres',
    d: 'Promo de barra para los que no se llenan con una sola pasada.',
  },
  {
    src: `${IMG}/neon-mesa.webp`,
    alt: 'Mesa con rolls, un cóctel celeste y el letrero de neón de Sushi Wey detrás',
    t: 'Jugos naturales',
    d: 'Para bajar la salsa acevichada: jugos naturales y bebidas de la barra.',
  },
]

const CARTA = [
  {
    src: `${IMG}/rolls-palta.webp`,
    alt: 'Rolls envueltos en láminas de palta con topping de salsa',
    n: '01',
    t: 'Envuelto en palta',
    d: 'Salmón, queso, camarón y cebollín envuelto en palta, con salsa acevichada.',
  },
  {
    src: `${IMG}/rolls-salsa.webp`,
    alt: 'Rolls con salsa de la casa servidos en plato oscuro',
    n: '02',
    t: 'Palta flambeada',
    d: 'Pollo y queso crema envueltos en palta flambeada, con choclo a la crema.',
  },
  {
    src: `${IMG}/tabla-rolls.webp`,
    alt: 'Tabla completa de rolls variados de Sushi Wey',
    n: '03',
    t: 'Panko con pebre',
    d: 'Carne, queso, aceituna y cebollín en panko crocante, con pebre y chimichurri.',
  },
  {
    src: `${IMG}/tabla-handroll.webp`,
    alt: 'Handrolls y acompañamientos servidos en tabla de madera',
    n: '04',
    t: 'Blanco frito',
    d: 'Pescado blanco frito con queso: el que sale caliente de la cocina.',
  },
]

const LOCAL = [
  {
    src: `${IMG}/terraza.webp`,
    alt: 'Terraza techada de Sushi Wey con mesas de madera y sillas negras',
    cap: 'La terraza techada',
  },
  {
    src: `${IMG}/patio-paraguas.webp`,
    alt: 'Patio exterior con pasto sintético, mesas y paraguas blancos',
    cap: 'El patio de atrás',
  },
  {
    src: `${IMG}/rolls-barra.webp`,
    alt: 'Rolls listos junto a la barra del local',
    cap: 'Salida de la barra',
  },
]

const REVIEWS = [
  {
    text: 'Increíble el sushi, de verdad delicioso.',
    name: 'Reseña en Google',
  },
  {
    text: 'Mi lugar favorito de Molina.',
    name: 'Reseña en Google',
  },
  {
    text: 'Buenas promos y buen trato.',
    name: 'Reseña en Google',
  },
]

export default function SushiWeyPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.negro, color: C.crema, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={34}
              height={34}
              className="rounded-full border"
              style={{ borderColor: C.line }}
            />
            <span
              className="uppercase"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}
            >
              Sushi Wey
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        theme={{ over: 'dark', bar: C.negro, ink: C.crema, line: C.line, btnBg: C.neon, btnInk: '#0D0D10' }}
      />

      {/* ── HERO: barra de neón ────────────────────────── */}
      <section id="inicio" className="pt-[92px] md:pt-[120px] pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <p
                className="text-[11px] tracking-[0.34em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: C.neon }}
              >
                {BIZ.services}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-5 text-[38px] md:text-[64px] leading-[0.98] uppercase"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                El sushi que suena{' '}
                <span style={{ color: C.neon }}>fuerte</span>{' '}
                en Molina
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                Rolls contundentes, promos de cortes y handrolls recién armados.
                {BIZ.name} atiende en {BIZ.address}, {BIZ.city} — y con delivery a todo el pueblo.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-bold rounded-full"
                  style={{ backgroundColor: C.neon, color: '#0D0D10' }}
                >
                  Pedir delivery
                </a>
                <a
                  href={WA_LINK_PROMO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                  style={{ borderColor: 'rgba(242,239,232,0.4)', color: C.crema }}
                >
                  Promo del día
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-5">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[24px] rotate-[2deg]"
                style={{ background: RAINBOW, opacity: 0.35 }}
              />
              <div
                className="relative overflow-hidden rounded-[20px] border"
                style={{ borderColor: C.line, aspectRatio: '4/5' }}
              >
                <Image
                  src={`${IMG}/neon-mesa.webp`}
                  alt="Mesa de Sushi Wey con rolls, cóctel celeste y su letrero de neón encendido"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div
                className="absolute -bottom-4 left-5 px-4 py-2 rounded-full text-[11px] tracking-[0.2em] uppercase"
                style={{ backgroundColor: C.neon, color: '#0D0D10', fontFamily: 'var(--font-mono)' }}
              >
                Libertad 1398 · Molina
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CINTA NEÓN ─────────────────────────────────── */}
      <div aria-hidden="true" className="h-1.5" style={{ background: RAINBOW }} />

      {/* ── PROMOS ─────────────────────────────────────── */}
      <section id="promos" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
              Las que corren en su Instagram
            </p>
            <h2
              className="mt-3 text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Promos <span style={{ color: C.neon }}>del wey</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {PROMOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <figure className="h-full rounded-[20px] overflow-hidden border flex flex-col" style={{ borderColor: C.line, backgroundColor: C.negroSoft }}>
                  <div className="relative" style={{ aspectRatio: '4/3' }}>
                    <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className="p-5 flex-1">
                    <h3
                      className="text-[22px] uppercase"
                      style={{ fontFamily: 'var(--font-display)', color: C.neon }}
                    >
                      {p.t}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                      {p.d}
                    </p>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA CARTA ───────────────────────────────────── */}
      <section id="carta" className="py-14 md:py-20" style={{ backgroundColor: C.negroSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className="text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Los rolls <span style={{ color: C.neon }}>que describen ellos</span>
            </h2>
            <p className="mt-3 max-w-md text-[14px] leading-relaxed" style={{ color: C.muted }}>
              Descripciones sacadas de sus propias publicaciones en @sushi.wey.molina.
            </p>
          </Reveal>
          <div className="mt-8 divide-y" style={{ borderColor: C.line }}>
            {CARTA.map((r, i) => (
              <Reveal key={r.n} delay={i * 40}>
                <div className="py-5 md:py-6 flex items-center gap-4 md:gap-8" style={{ borderColor: C.line }}>
                  <span
                    className="hidden md:block text-[15px] shrink-0 w-10"
                    style={{ fontFamily: 'var(--font-mono)', color: C.neon }}
                  >
                    {r.n}
                  </span>
                  <div
                    className="relative overflow-hidden rounded-[14px] shrink-0 border"
                    style={{ borderColor: C.line, width: 84, height: 84 }}
                  >
                    <Image src={r.src} alt={r.alt} fill className="object-cover" sizes="84px" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[19px] md:text-[24px] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                      {r.t}
                    </h3>
                    <p className="mt-1 text-[13px] md:text-[14px] leading-relaxed" style={{ color: C.muted }}>
                      {r.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-6 text-[12px]" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
              El menú completo y los precios del día los pasan directo por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EL LOCAL ───────────────────────────────────── */}
      <section id="local" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <h2
                  className="text-[32px] md:text-[44px] leading-[1.0] uppercase"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  También hay <span style={{ color: C.neon }}>mesa</span>
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  Además del delivery, el local de Libertad tiene terraza techada
                  y patio con paraguas para comer ahí mismo.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center h-12 px-6 text-[15px] font-bold rounded-full"
                  style={{ backgroundColor: C.neon, color: '#0D0D10' }}
                >
                  Reservar mesa por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4">
              <Reveal className="col-span-2">
                <div
                  className="relative overflow-hidden rounded-[18px] border"
                  style={{ borderColor: C.line, aspectRatio: '16/8' }}
                >
                  <Image
                    src={LOCAL[0].src}
                    alt={LOCAL[0].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 55vw"
                  />
                </div>
                <p className="mt-2 text-[11px] tracking-[0.16em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                  {LOCAL[0].cap}
                </p>
              </Reveal>
              {LOCAL.slice(1).map((f, i) => (
                <Reveal key={f.src} delay={80 + i * 50}>
                  <div
                    className="relative overflow-hidden rounded-[18px] border"
                    style={{ borderColor: C.line, aspectRatio: '4/3' }}
                  >
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 27vw" />
                  </div>
                  <p className="mt-2 text-[11px] tracking-[0.16em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                    {f.cap}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LOS QUE VUELVEN ────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.negroSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className="text-[32px] md:text-[48px] leading-[1.0] uppercase"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Los que ya son <span style={{ color: C.neon }}>del wey</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.text} delay={i * 60}>
                <figure className="h-full rounded-[18px] p-6 border flex flex-col" style={{ borderColor: C.line, backgroundColor: C.negro }}>
                  <p
                    className="text-[26px] leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: C.neon }}
                    aria-hidden="true"
                  >
                    ”
                  </p>
                  <blockquote
                    className="mt-3 text-[17px] leading-relaxed flex-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {r.text}
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] tracking-[0.16em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {r.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <p className="mt-5 text-[11px] tracking-[0.12em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
              Opiniones reales publicadas en su ficha de Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── PEDIDOS / UBICACIÓN ────────────────────────── */}
      <section id="pedidos" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[20px] border h-[280px] md:h-auto md:min-h-[340px]"
                style={{ borderColor: C.line }}
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
            <Reveal delay={80}>
              <div className="rounded-[20px] p-6 md:p-8 h-full flex flex-col border" style={{ backgroundColor: C.negroSoft, borderColor: C.line }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.neon }}>
                  Pedidos y retiro
                </p>
                <h2 className="mt-3 text-[28px] md:text-[38px] leading-[1.0] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                  Libertad 1398, Molina
                </h2>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>Horario</dt>
                    <dd>{BIZ.hours}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>Modalidad</dt>
                    <dd>{BIZ.services}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>Pedidos</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 pt-6 mt-auto">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-bold rounded-full"
                    style={{ backgroundColor: C.neon, color: '#0D0D10' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: 'rgba(242,239,232,0.4)', color: C.crema }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: '#000', color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="text-[15px] uppercase" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.06em' }}>
                {BIZ.name}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(242,239,232,0.5)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: 'rgba(242,239,232,0.35)' }}>
            Sitio de ejemplo preparado por Sitiazo. Fotos reales de su Instagram @sushi.wey.molina y su ficha de Google.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
