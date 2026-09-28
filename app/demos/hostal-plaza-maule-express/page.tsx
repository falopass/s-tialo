import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_LARGA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
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
  bosque: '#1E3D2F',
  bosqueDeep: '#14291D',
  crema: '#F2EDE1',
  cremaDeep: '#E5DCC7',
  laton: '#C8A24B',
  muted: '#5C6A5F',
  line: 'rgba(30,61,47,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hostal-plaza-maule-express',
  title: 'Hostal Plaza Maule Express — Alojamiento en Talca a pasos del Mall',
  description:
    'Habitaciones con desayuno incluido y wifi gratis en 25 Oriente, Talca, a pasos del Mall Plaza Maule. Reserva directa por WhatsApp.',
  image: `${IMG}/habitacion-matrimonial.webp`,
})

const NAV_LINKS = [
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Incluye', href: '#incluye' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const HABITACIONES = [
  {
    src: `${IMG}/habitacion-matrimonial.webp`,
    alt: 'Habitación matrimonial con cama de dos plazas y respaldo de madera oscura',
    cap: 'Matrimonial, con respaldo de madera',
  },
  {
    src: `${IMG}/habitacion-doble.webp`,
    alt: 'Habitación con cama de cubrecama estampado, velador y armario de madera',
    cap: 'Con velador y armario',
  },
  {
    src: `${IMG}/habitacion-tv.webp`,
    alt: 'Habitación con cama azul, ventana con cortina y televisión en el muro',
    cap: 'Con TV y luz natural',
  },
  {
    src: `${IMG}/habitacion-madera.webp`,
    alt: 'Cama con cubrecama blanco sobre muro revestido en madera clara',
    cap: 'Revestida en madera',
  },
  {
    src: `${IMG}/habitacion-banio.webp`,
    alt: 'Habitación con cama, televisión encendida y vista al baño privado',
    cap: 'Con baño a la vista',
  },
  {
    src: `${IMG}/habitacion-roja.webp`,
    alt: 'Habitación con cama de cubrecama rojo y velador de madera',
    cap: 'Simple y abrigada',
  },
]

const INCLUYE = [
  'Desayuno incluido en la tarifa',
  'Wi-Fi gratis en todo el hostal',
  'Camas twin y matrimoniales',
  'TV en las habitaciones',
  'Recepción a pasos del Mall Plaza Maule',
]

const REVIEWS = [
  {
    name: 'Huésped en Booking.com',
    text: '¡Excelente! Muy complacientes.',
    nota: 'Nota 10/10',
  },
  {
    name: 'Huésped en Booking.com',
    text: 'La señora Teresa fue muy amable.',
    nota: 'Nota 9.6/10',
  },
  {
    name: 'Huésped en Google',
    text: 'Cerca del mall. La pieza es pequeña pero limpia.',
    nota: '4/5',
  },
  {
    name: 'Huésped en Tripadvisor',
    text: 'El desayuno es espectacular y el personal muy atento.',
    nota: '3/5',
  },
]

export default function HostalPlazaMauleExpressPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.bosque, fontFamily: 'var(--font-body)', ...SPACING }}
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
              style={{ borderColor: 'rgba(242,237,225,0.4)' }}
            />
            <span style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.02em' }}>
              {BIZ.short}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{ over: 'dark', bar: C.bosqueDeep, ink: C.crema, line: 'rgba(242,237,225,0.18)', btnBg: C.laton, btnInk: C.bosqueDeep }}
      />

      {/* ── HERO: recepción ────────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.bosqueDeep }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: 'radial-gradient(rgba(242,237,225,0.9) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[110px] md:pt-[150px] pb-14 md:pb-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-6">
            <Reveal>
              <p
                className="text-[11px] tracking-[0.34em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.6)' }}
              >
                Hostal · {BIZ.city} · a pasos del Mall Plaza
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-5 text-[38px] md:text-[58px] leading-[1.04]"
                style={{ fontFamily: 'var(--font-display)', color: C.crema }}
              >
                Una cama limpia en Talca,{' '}
                <span style={{ color: C.laton }}>con desayuno incluido</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(242,237,225,0.75)' }}>
                {BIZ.name} está en {BIZ.address}, a pasos del Mall Plaza Maule:
                habitaciones sencillas y cuidadas, wifi gratis y la amabilidad
                de la señora Teresa que repiten las reseñas.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                  style={{ backgroundColor: C.laton, color: C.bosqueDeep }}
                >
                  Consultar disponibilidad
                </a>
                <p
                  className="inline-flex items-center gap-2 text-[13px]"
                  style={{ color: 'rgba(242,237,225,0.75)', fontFamily: 'var(--font-mono)' }}
                >
                  <Stars value={4.3} color={C.laton} className="w-3.5 h-3.5" />
                  {BIZ.rating} · {BIZ.ratingCount}
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-6">
            <div className="relative">
              <div
                className="relative overflow-hidden border"
                style={{ borderColor: 'rgba(200,162,75,0.45)', aspectRatio: '4/3', borderRadius: '160px 160px 20px 20px' }}
              >
                <Image
                  src={`${IMG}/habitacion-matrimonial.webp`}
                  alt="Habitación matrimonial del hostal con cama de dos plazas y respaldo de madera"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div
                className="absolute -bottom-4 right-6 px-4 py-2 rounded-full text-[11px] tracking-[0.18em] uppercase"
                style={{ backgroundColor: C.laton, color: C.bosqueDeep, fontFamily: 'var(--font-mono)' }}
              >
                {BIZ.priceHint}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CINTA DE SERVICIOS ─────────────────────────── */}
      <section className="py-4 border-b" style={{ backgroundColor: C.crema, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-8 gap-y-2">
          {['Desayuno incluido', 'Wi-Fi gratis', 'TV en pieza', 'Camas twin'].map((s) => (
            <p
              key={s}
              className="text-[11px] tracking-[0.26em] uppercase"
              style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
            >
              · {s}
            </p>
          ))}
        </div>
      </section>

      {/* ── HABITACIONES ───────────────────────────────── */}
      <section id="habitaciones" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Las piezas, tal cual son
                </p>
                <h2
                  className="mt-3 text-[32px] md:text-[48px] leading-[1.05]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Habitaciones del hostal
                </h2>
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed" style={{ color: C.muted }}>
                Fotos reales de su ficha de Google: camas firmes, veladores de madera
                y televisión en cada pieza.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 columns-2 md:columns-3 gap-4 md:gap-5 [&>div]:mb-4 md:[&>div]:mb-5">
            {HABITACIONES.map((f, i) => (
              <Reveal key={f.src} delay={i * 40} className="break-inside-avoid">
                <figure>
                  <div
                    className="relative overflow-hidden rounded-[18px] border"
                    style={{ borderColor: C.line, aspectRatio: i % 3 === 0 ? '4/5' : '4/3' }}
                  >
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
                  </div>
                  <figcaption
                    className="mt-2 text-[11px] tracking-[0.14em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ INCLUYE + LA CASA ──────────────────────── */}
      <section id="incluye" className="py-14 md:py-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.6)' }}>
                En la tarifa
              </p>
              <h2
                className="mt-3 text-[32px] md:text-[44px] leading-[1.05]"
                style={{ fontFamily: 'var(--font-display)', color: C.crema }}
              >
                Lo que ya viene <span style={{ color: C.laton }}>incluido</span>
              </h2>
              <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'rgba(242,237,225,0.7)' }}>
                Sin letra chica: la noche incluye lo esencial para dormir bien
                y partir temprano. En Booking.com la tarifa parte {BIZ.priceHint.replace('desde ', 'en ')}.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <ul className="divide-y" style={{ borderColor: 'rgba(242,237,225,0.16)' }}>
              {INCLUYE.map((s, i) => (
                <Reveal key={s} delay={i * 40}>
                  <li className="py-4 flex items-baseline gap-4" style={{ borderColor: 'rgba(242,237,225,0.16)' }}>
                    <span className="text-[13px] shrink-0 w-8" style={{ fontFamily: 'var(--font-mono)', color: C.laton }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-[17px] md:text-[19px]" style={{ color: C.crema, fontFamily: 'var(--font-display)' }}>
                      {s}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal delay={200}>
              <p className="mt-6 text-[13px]" style={{ color: 'rgba(242,237,225,0.55)', fontFamily: 'var(--font-mono)' }}>
                Parte del grupo Hostal Plaza Maule: mismo teléfono, más opciones
                (casa central 1 Sur y Cabañas del Maule).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="text-[32px] md:text-[48px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
              Lo que dicen los <span style={{ color: C.laton }}>que ya durmieron ahí</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nota + r.name} delay={i * 50}>
                <figure
                  className="h-full rounded-[18px] p-6 border flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: i % 2 ? C.cremaDeep : 'transparent' }}
                >
                  <div className="flex items-center justify-between">
                    <Stars value={5} color={C.laton} className="w-3.5 h-3.5" />
                    <span
                      className="text-[12px] px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: C.bosque, color: C.crema, fontFamily: 'var(--font-mono)' }}
                    >
                      {r.nota}
                    </span>
                  </div>
                  <blockquote className="mt-4 text-[16px] leading-relaxed flex-1" style={{ fontFamily: 'var(--font-display)' }}>
                    “{r.text}”
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
              Opiniones reales publicadas en Booking.com, Google y Tripadvisor.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ──────────────────────────────────── */}
      <section id="ubicacion" className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal delay={80} className="order-2 md:order-1">
              <div className="rounded-[20px] p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.bosqueDeep, color: C.crema }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.6)' }}>
                  Recepción
                </p>
                <h2 className="mt-3 text-[28px] md:text-[38px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)' }}>
                  25 Oriente 3101, Talca
                </h2>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.55)' }}>Ubicación</dt>
                    <dd>A pasos del Mall Plaza Maule</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.55)' }}>Tarifa</dt>
                    <dd>{BIZ.priceHint}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(242,237,225,0.55)' }}>Reservas</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 pt-6 mt-auto">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.laton, color: C.bosqueDeep }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href={WA_LINK_LARGA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: 'rgba(242,237,225,0.5)', color: C.crema }}
                  >
                    Estadía larga
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal className="order-1 md:order-2">
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
          </div>
          <Reveal delay={60}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[12px] tracking-[0.16em] uppercase underline underline-offset-4"
              style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.bosqueDeep, color: C.crema }}>
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
              <p className="text-[15px]" style={{ fontFamily: 'var(--font-display)' }}>
                {BIZ.name}
              </p>
              <p className="mt-0.5 text-[12px]" style={{ color: 'rgba(242,237,225,0.55)' }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: 'rgba(242,237,225,0.4)' }}>
            Sitio de ejemplo preparado por Sitiazo. Fotos de su ficha de Google y opiniones reales de Booking.com, Google y Tripadvisor.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
