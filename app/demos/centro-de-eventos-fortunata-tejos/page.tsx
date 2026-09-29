import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVENTO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
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
  noche: '#1D0E12',
  nocheDeep: '#14090D',
  vino: '#3A1520',
  crema: '#F6EFE2',
  cremaDeep: '#EDE2CC',
  vela: '#E5A33D',
  tinta: '#241417',
  muted: '#66574D',
  line: 'rgba(36,20,23,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-eventos-fortunata-tejos',
  title: 'Centro de Eventos Fortunata Tejos — Talca',
  description:
    'Salón para matrimonios, fiestas de empresa y celebraciones en 1 Oriente, Talca. 4.4★ en Google. Cotiza el arriendo por WhatsApp.',
  image: `${IMG}/patio.webp`,
})

const NAV_LINKS = [
  { label: 'Cartelera', href: '#cartelera' },
  { label: 'Salón', href: '#salon' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const CARTELERA = [
  { evento: 'Matrimonios', detalle: 'Salón central y cena' },
  { evento: 'Fiestas de empresa', detalle: 'Fiestas empresariales y stands' },
  { evento: 'Celebraciones familiares', detalle: 'Cumpleaños, aniversarios' },
  { evento: 'Ferias y exposiciones', detalle: 'Mesas y puestos' },
  { evento: 'Eventos sociales', detalle: 'Reuniones y celebraciones' },
]

const REVIEWS = [
  {
    name: 'Dimitri Stokov',
    meta: 'Google · 8 años',
    text: 'Es un lugar hermoso, ideal para reuniones sociales o celebraciones de cualquier tipo, amplio y cómodo. He asistido a varios eventos realizados ahí. Un lugar altamente recomendable.',
  },
  {
    name: 'Fernanda María Betancourt Cerpa',
    meta: 'Local Guide · Google',
    text: 'Precioso!! Muy detallistas, hermosa ambientación y todo exquisito.',
  },
  {
    name: 'Camila Andrea Sanhueza Larena',
    meta: 'Local Guide · Google',
    text: 'Lindo lugar para reuniones o eventos... súper limpio y ordenado.',
  },
  {
    name: 'Angelica Fuentes Caballero',
    meta: 'Local Guide · Google',
    text: 'Es muy acogedor el lugar para realizar eventos.',
  },
]

// hilera de luces: puntos decorativos sobre una línea (motivo guirnalda)
function Guirnalda({ color }: { color: string }) {
  return (
    <div aria-hidden="true" className="relative h-4">
      <div className="absolute inset-x-0 top-1/2 h-px" style={{ backgroundColor: `${color}55` }} />
      <div className="absolute inset-0 flex justify-between items-center px-4">
        {Array.from({ length: 13 }).map((_, i) => (
          <span
            key={i}
            className="block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: i % 2 ? `${color}99` : color, transform: `translateY(${i % 2 ? -4 : 4}px)` }}
          />
        ))}
      </div>
    </div>
  )
}

export default function FortunataTejosPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.noche, color: C.crema, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span
            className="text-[17px] tracking-[0.08em] uppercase"
            style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.12em' }}
          >
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'dark', bar: C.nocheDeep, ink: C.crema, line: 'rgba(246,239,226,0.16)', btnBg: C.vela, btnInk: C.nocheDeep }}
      />

      {/* ── HERO: cartelera nocturna ───────────────────── */}
      <section id="inicio" className="pt-10 md:pt-16 pb-12 md:pb-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Guirnalda color={C.vela} />
          </Reveal>
          <div className="mt-6 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-10 items-center">
            <div>
              <Reveal>
                <p className="text-[11px] tracking-[0.34em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.vela }}>
                  {BIZ.rubro} · {BIZ.city} · 1 Oriente 200
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-5 text-[52px] md:text-[92px] leading-[0.95]" style={{ fontFamily: 'var(--font-display)' }}>
                  Fortunata <span style={{ color: C.vela }}>Tejos</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 max-w-md text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'rgba(246,239,226,0.78)' }}>
                  El centro de eventos de la 1 Oriente: salón de madera para
                  matrimonios, fiestas de empresa y celebraciones, con espacios
                  amplios y aire de fiesta.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.vela, color: C.nocheDeep }}
                  >
                    Cotizar una fecha
                  </a>
                  <a
                    href="#salon"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border"
                    style={{ borderColor: 'rgba(246,239,226,0.45)', color: C.crema }}
                  >
                    Ver el salón
                  </a>
                  <p
                    className="inline-flex items-center gap-2 text-[12px]"
                    style={{ color: 'rgba(246,239,226,0.75)', fontFamily: 'var(--font-mono)' }}
                  >
                    <Stars value={4.4} color={C.vela} className="w-3.5 h-3.5" />
                    {BIZ.rating} · {BIZ.ratingCount}
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <figure
                className="rounded-[6px] p-2.5 rotate-[1.5deg]"
                style={{ backgroundColor: C.crema, boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}
              >
                <div className="relative h-[300px] md:h-[380px] overflow-hidden rounded-[3px]">
                  <Image
                    src={`${IMG}/patio.webp`}
                    alt="Pareja celebrando en el patio iluminado de Fortunata Tejos"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
                <figcaption
                  className="pt-2.5 pb-1 text-center text-[11px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: 'var(--font-mono)', color: C.muted }}
                >
                  El patio, de noche — foto real
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CARTELERA ──────────────────────────────────── */}
      <section id="cartelera" className="py-14 md:py-20" style={{ backgroundColor: C.vino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6" style={{ borderColor: 'rgba(229,163,61,0.4)' }}>
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.vela }}>
                  En cartelera
                </p>
                <h2 className="mt-3 text-[34px] md:text-[54px] leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
                  ¿Qué vas a celebrar <em className="not-italic" style={{ color: C.vela }}>aquí?</em>
                </h2>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed" style={{ color: 'rgba(246,239,226,0.65)', fontFamily: 'var(--font-mono)' }}>
                Fiestas empresariales, stands y wedding planner, según sus directorios.
              </p>
            </div>
          </Reveal>
          <ul className="mt-2">
            {CARTELERA.map((c, i) => (
              <li key={c.evento}>
                <Reveal delay={i * 50}>
                  <div
                    className="group flex items-baseline gap-4 md:gap-8 py-5 border-b"
                    style={{ borderColor: 'rgba(246,239,226,0.14)' }}
                  >
                    <span
                      className="text-[11px] tracking-[0.28em] shrink-0"
                      style={{ fontFamily: 'var(--font-mono)', color: C.vela }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="text-[26px] md:text-[40px] leading-none flex-1"
                      style={{ fontFamily: 'var(--font-display)', color: C.crema }}
                    >
                      {c.evento}
                    </span>
                    <span
                      className="hidden sm:block text-[12px] text-right"
                      style={{ color: 'rgba(246,239,226,0.6)', fontFamily: 'var(--font-mono)' }}
                    >
                      {c.detalle}
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={120}>
            <a
              href={WA_LINK_EVENTO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 tap-44 inline-flex items-center h-12 px-7 text-[15px] font-semibold rounded-full"
              style={{ backgroundColor: C.vela, color: C.nocheDeep }}
            >
              Consultar fecha y valores
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── EL SALÓN: galería ──────────────────────────── */}
      <section id="salon" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.vela }}>
              Así se ve una noche aquí
            </p>
            <h2 className="mt-3 text-[34px] md:text-[54px] leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
              El salón, en fotos reales
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-[1.5fr_1fr] gap-4 md:gap-5">
            <Reveal>
              <figure className="relative h-[280px] md:h-full min-h-[280px] overflow-hidden rounded-[8px]">
                <Image
                  src={`${IMG}/salon-01.webp`}
                  alt="Salón de Fortunata Tejos con techo de madera en A, iluminado y con invitados sentados"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 60vw"
                />
              </figure>
            </Reveal>
            <div className="grid grid-rows-2 gap-4 md:gap-5">
              <Reveal delay={80}>
                <figure className="relative h-[200px] overflow-hidden rounded-[8px]">
                  <Image
                    src={`${IMG}/salon-02.webp`}
                    alt="Interior del salón de Fortunata Tejos durante un evento"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </figure>
              </Reveal>
              <Reveal delay={140}>
                <figure className="relative h-[200px] overflow-hidden rounded-[8px]">
                  <Image
                    src={`${IMG}/salon-03.webp`}
                    alt="Mesa servida en el salón de madera de Fortunata Tejos"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
          <div className="mt-4 md:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            <Reveal delay={80}>
              <figure className="relative h-[220px] overflow-hidden rounded-[8px]">
                <Image
                  src={`${IMG}/feria.webp`}
                  alt="Feria de artesanía instalada en el centro de eventos Fortunata Tejos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="h-[220px] rounded-[8px] p-6 flex flex-col justify-center"
                style={{ backgroundColor: C.vino }}
              >
                <p className="text-[22px] md:text-[26px] leading-snug" style={{ fontFamily: 'var(--font-display)', color: C.crema }}>
                  “Amplio, cómodo y con varios ambientes”
                </p>
                <p className="mt-3 text-[11px] tracking-[0.2em] uppercase" style={{ color: 'rgba(246,239,226,0.6)', fontFamily: 'var(--font-mono)' }}>
                  Así lo describen las opiniones de Google
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OPINIONES: boletos ─────────────────────────── */}
      <section id="opiniones" className="py-14 md:py-20" style={{ backgroundColor: C.crema, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-[34px] md:text-[54px] leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
                {BIZ.rating} <span style={{ color: '#B57B14' }}>★</span> en Google
              </h2>
              <p className="text-[12px] tracking-[0.18em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                {BIZ.ratingCount}
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <figure
                  className="relative h-full rounded-[8px] border p-6 flex flex-col"
                  style={{ borderColor: C.line, backgroundColor: '#FFFCF4', borderLeftWidth: '6px', borderLeftColor: C.vela }}
                >
                  <Stars value={4.5} color="#B57B14" className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.tinta }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] tracking-[0.16em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {r.name} · {r.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-5 text-[11px] tracking-[0.12em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
              Opiniones reales publicadas en Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ──────────────────────────────────── */}
      <section id="ubicacion" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[8px] border h-[280px] md:h-auto md:min-h-[340px]"
                style={{ borderColor: 'rgba(246,239,226,0.2)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.fullName}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="rounded-[8px] p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.vino }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.vela }}>
                  Dónde queda
                </p>
                <h2 className="mt-3 text-[28px] md:text-[40px] leading-[0.98]" style={{ fontFamily: 'var(--font-display)' }}>
                  {BIZ.address}, {BIZ.city}
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'rgba(246,239,226,0.72)' }}>
                  A pasos del centro de Talca, {BIZ.esquina}. {BIZ.hours}.
                </p>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,226,0.55)' }}>Teléfono</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(246,239,226,0.55)' }}>Comuna</dt>
                    <dd>
                      {BIZ.city}, {BIZ.region}
                    </dd>
                  </div>
                </dl>
                <div className="mt-6 pt-6 mt-auto">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-7 text-[15px] font-semibold rounded-full"
                    style={{ backgroundColor: C.vela, color: C.nocheDeep }}
                  >
                    Cotizar el arriendo
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[12px] tracking-[0.16em] uppercase underline underline-offset-4"
              style={{ color: 'rgba(246,239,226,0.55)', fontFamily: 'var(--font-mono)' }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.nocheDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-7">
          <Guirnalda color={C.vela} />
          <div className="mt-5 flex flex-col md:flex-row md:items-center gap-3 md:justify-between">
            <div>
              <p className="text-[18px] tracking-[0.1em] uppercase" style={{ fontFamily: 'var(--font-display)', color: C.crema }}>
                {BIZ.fullName}
              </p>
              <p className="text-[11px]" style={{ color: 'rgba(246,239,226,0.55)', fontFamily: 'var(--font-mono)' }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <p className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'rgba(246,239,226,0.5)', fontFamily: 'var(--font-mono)' }}>
              {BIZ.phoneDisplay}
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.fullName} por WhatsApp`} />
    </main>
  )
}
