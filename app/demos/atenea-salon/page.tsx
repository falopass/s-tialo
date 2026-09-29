import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  waServicio,
  IG_URL,
  FB_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  CARTA,
  RESENAS,
} from './content'

const display = localFont({
  src: [
    {
      path: '../../fonts/cormorant-garamond/normal-300-700.woff2',
      weight: '300 700',
      style: 'normal',
    },
    {
      path: '../../fonts/cormorant-garamond/italic-300-700.woff2',
      weight: '300 700',
      style: 'italic',
    },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [
    {
      path: '../../fonts/karla/normal-200-800.woff2',
      weight: '200 800',
      style: 'normal',
    },
  ],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    {
      path: '../../fonts/space-mono/normal-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/space-mono/normal-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
})

export const metadata: Metadata = demoMetadata({
  slug: 'atenea-salon',
  title: 'Atenea Salón Spa — Centro de estética en Molina',
  description:
    'Salón y centro de estética en Av. Sur 1426, Molina: uñas, extensiones, masajes y spa. 5,0 estrellas en Google. Agenda por WhatsApp.',
  image: `${IMG}/unas-rosa.webp`,
})

const C = {
  wine: '#2B1A24',
  wine2: '#3A2430',
  wine3: '#4A2E3C',
  rose: '#E8ACC0',
  roseSoft: '#F0C6D4',
  deepRose: '#9A4E63',
  blush: '#F7EEE9',
  blush2: '#F0E2DC',
  ink: '#2E1B26',
  muted: '#6E5A64',
  mutedD: '#B99FAC',
}

// Flor en línea: la rosa de la tarjeta de marca del salón, dibujada como trazo
// simple. Solo decorativa (aria-hidden).
function FlorLinea({ className = '', style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      viewBox="0 0 80 150"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {/* tallo */}
      <path d="M40 148 C 40 118, 42 96, 40 70" />
      {/* hojas */}
      <path d="M40 116 C 30 110, 21 112, 15 102 C 26 99, 36 104, 40 116 Z" />
      <path d="M40 96 C 50 91, 59 93, 65 84 C 54 81, 44 86, 40 96 Z" />
      {/* capullo: arcos concéntricos */}
      <path d="M40 70 C 28 66, 24 54, 30 44 C 36 34, 52 34, 57 45 C 62 56, 54 68, 40 70 Z" />
      <path d="M40 62 C 34 60, 32 53, 36 47 C 40 42, 48 43, 50 49 C 52 55, 47 61, 40 62 Z" />
      <path d="M41 55 C 39 54, 39 51, 41 49 C 43 47, 46 48, 46 51 C 46 54, 43 56, 41 55 Z" />
      <path d="M30 44 C 26 42, 23 40, 21 36" />
      <path d="M57 45 C 61 43, 64 41, 66 37" />
    </svg>
  )
}

function WaBtn({
  href,
  children,
  dark = false,
}: {
  href: string
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tap-44 inline-flex items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold leading-none transition-transform hover:scale-[1.03] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8ACC0]"
      style={{
        height: 48,
        backgroundColor: dark ? C.rose : '#25D366',
        color: dark ? C.wine : '#0B2A14',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-[18px] h-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visítanos', href: '#visitanos' },
]

const TRABAJOS = [
  {
    src: `${IMG}/unas-lampara.webp`,
    alt: 'Uñas acrílicas largas rosas junto a la lámpara del salón',
    caption: 'Acrílicas',
  },
  {
    src: `${IMG}/cabello-alisado.webp`,
    alt: 'Cabello liso oscuro después de un alisado en el salón',
    caption: 'Alisado',
  },
  {
    src: `${IMG}/nail-art.webp`,
    alt: 'Nail art: diseño con brillos sobre uñas acrílicas',
    caption: 'Nail art',
  },
  {
    src: `${IMG}/extensiones.webp`,
    alt: 'Extensiones de cabello 100% naturales exhibidas en el salón',
    caption: 'Extensiones naturales',
  },
] as const

export default function AteneaSalonPage() {
  return (
    <div
      className={`${body.className} antialiased`}
      style={{ backgroundColor: C.wine, color: C.blush }}
    >
      <BlitzNav
        name={
          <span className={display.className} style={{ fontStyle: 'italic', fontWeight: 500 }}>
            {BIZ.short}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: C.wine,
          ink: '#F7EEE9',
          line: 'rgba(232,172,192,0.25)',
          btnBg: '#E8ACC0',
          btnInk: '#2B1A24',
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.wine }}>
        <FlorLinea
          className="pointer-events-none absolute -right-3 top-16 w-16 opacity-30 md:top-24 md:w-24"
          style={{ color: C.rose }}
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:px-8 md:pb-24 md:pt-40">
          <div>
            <Reveal>
              <p
                className={`${mono.className} mb-6 text-[11px] uppercase tracking-[0.3em] md:text-xs`}
                style={{ color: C.rose }}
              >
                {BIZ.rubro} · {BIZ.city}, Chile
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className={`${display.className} leading-[0.95]`}>
                <span
                  className="block text-[22vw] font-medium italic md:text-[8.5rem]"
                  style={{ color: C.roseSoft }}
                >
                  Atenea
                </span>
                <span
                  className={`${mono.className} mt-2 block text-sm uppercase tracking-[0.55em] md:text-base`}
                  style={{ color: C.blush }}
                >
                  Salón · Spa
                </span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed md:text-base" style={{ color: C.mutedD }}>
                Uñas, cabello, masajes y estética en plena Av. Sur de Molina, atendido por su dueña
                Marcia Cavieres. Todo se agenda por WhatsApp, sin vueltas.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <WaBtn href={WA_LINK}>Agendar por WhatsApp</WaBtn>
                <a
                  href="#carta"
                  className="tap-44 inline-flex h-12 items-center justify-center rounded-full border px-6 text-[15px] font-semibold transition-colors hover:border-[#E8ACC0]"
                  style={{ borderColor: 'rgba(247,238,233,0.3)', color: C.blush }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-3">
                <Stars value={5} color={C.rose} className="h-4 w-4" />
                <p className="text-sm" style={{ color: C.mutedD }}>
                  <strong style={{ color: C.blush }}>{BIZ.rating}</strong> · {BIZ.reviews} reseñas en
                  Google
                </p>
              </div>
            </Reveal>
          </div>

          {/* Collage: arco + tarjeta de marca real */}
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-sm md:max-w-none">
              <div
                className="relative mx-auto aspect-[3/4] w-[78%] overflow-hidden rounded-t-full border"
                style={{ borderColor: 'rgba(232,172,192,0.35)' }}
              >
                <Image
                  src={`${IMG}/unas-rosa.webp`}
                  alt="Manicura con esmalte rosa realizada en Atenea Salón, Molina"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 400px"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 left-0 w-32 overflow-hidden rounded-xl shadow-2xl md:-left-4 md:w-40"
                style={{ rotate: '-4deg' }}
              >
                <Image
                  src={`${IMG}/tarjeta-marca.webp`}
                  alt="Tarjeta de marca de Atenea Salón Spa de Marcia Cavieres"
                  width={720}
                  height={1280}
                  className="h-auto w-full"
                />
              </div>
              <FlorLinea
                className="absolute -top-6 right-0 w-14 md:-right-2 md:w-20"
                style={{ color: C.rose }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Trabajos reales: galería en arcos desplazada ── */}
      <section id="trabajos" className="overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.blush }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`${mono.className} mb-3 text-[11px] uppercase tracking-[0.3em]`}
                  style={{ color: C.deepRose }}
                >
                  Fotos publicadas por el salón
                </p>
                <h2
                  className={`${display.className} max-w-lg text-4xl font-medium italic leading-tight md:text-5xl`}
                  style={{ color: C.ink }}
                >
                  Lo que sale de este salón, en manos reales
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed" style={{ color: C.muted }}>
                Uñas, alisados y extensiones de la ficha de Google de Atenea. El trabajo habla solo.
              </p>
            </div>
          </Reveal>

          {/* Grid desplazada: pares altos/bajos, arcos alternos */}
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-5">
            <Reveal delay={0} className="md:mt-10">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                  <Image
                    src={TRABAJOS[0].src}
                    alt={TRABAJOS[0].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  {TRABAJOS[0].caption}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={TRABAJOS[1].src}
                    alt={TRABAJOS[1].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  {TRABAJOS[1].caption}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160} className="md:mt-14">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-t-full">
                  <Image
                    src={TRABAJOS[2].src}
                    alt={TRABAJOS[2].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  {TRABAJOS[2].caption}
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={240}>
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <Image
                    src={TRABAJOS[3].src}
                    alt={TRABAJOS[3].alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  {TRABAJOS[3].caption}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta: menú de precios impreso sobre papel ── */}
      <section id="carta" className="overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.wine }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="mx-auto max-w-md text-center">
              <p
                className={`${mono.className} mb-3 text-[11px] uppercase tracking-[0.3em]`}
                style={{ color: C.rose }}
              >
                Precios publicados por el salón
              </p>
              <h2
                className={`${display.className} text-4xl font-medium italic leading-tight md:text-5xl`}
                style={{ color: C.roseSoft }}
              >
                La carta de Atenea
              </h2>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="relative mx-auto mt-10 max-w-3xl rounded-[28px] px-6 py-8 shadow-2xl md:mt-14 md:px-12 md:py-12"
              style={{ backgroundColor: C.blush, color: C.ink }}
            >
              <FlorLinea
                className="absolute left-4 top-4 w-8 opacity-40 md:left-6 md:top-6 md:w-10"
                style={{ color: C.deepRose }}
              />
              <FlorLinea
                className="absolute bottom-4 right-4 w-8 opacity-40 md:bottom-6 md:right-6 md:w-10"
                style={{ color: C.deepRose, transform: 'rotate(180deg)' }}
              />
              <div className="grid gap-10 md:grid-cols-2 md:gap-x-14">
                {CARTA.map((grupo) => (
                  <div key={grupo.grupo} className={grupo.grupo === 'Cuerpo & spa' ? 'md:col-span-2' : ''}>
                    <h3
                      className={`${mono.className} mb-4 text-[11px] font-bold uppercase tracking-[0.3em]`}
                      style={{ color: C.deepRose }}
                    >
                      {grupo.grupo}
                    </h3>
                    <ul className={grupo.grupo === 'Cuerpo & spa' ? 'grid gap-x-14 md:grid-cols-2' : ''}>
                      {grupo.items.map((item) => (
                        <li key={item.servicio}>
                          <a
                            href={waServicio(item.servicio)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="tap-44 group flex items-baseline gap-2 py-2.5"
                          >
                            <span className="text-[15px] font-semibold md:text-base">
                              {item.servicio}
                            </span>
                            <span
                              className="mx-1 flex-1 border-b border-dotted"
                              style={{ borderColor: 'rgba(46,27,38,0.35)' }}
                            />
                            <span
                              className={`${mono.className} whitespace-nowrap text-sm font-bold`}
                              style={{ color: C.deepRose }}
                            >
                              {item.precio}
                            </span>
                          </a>
                          <p className="-mt-1 text-xs" style={{ color: C.muted }}>
                            {item.nota}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-center text-xs leading-relaxed" style={{ color: C.muted }}>
                Valores que el salón publica en su ficha de Google. Toca cualquier servicio para
                consultar disponibilidad y precio final por WhatsApp.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── También en el salón: flyers reales del spa ── */}
      <section className="overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.blush2 }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <h2
              className={`${display.className} max-w-lg text-4xl font-medium italic leading-tight md:text-5xl`}
              style={{ color: C.ink }}
            >
              Y cuando quieres más que uñas
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.muted }}>
              El salón también trabaja estética corporal y spa: parafinoterapia, lipo láser y
              masajes. Estos son sus propios afiches.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 md:gap-8">
            <Reveal>
              <figure>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={`${IMG}/parafina.webp`}
                    alt="Afiche de parafinoterapia del salón: manos sumergidas en parafina tibia, $5.000 por zona"
                    width={720}
                    height={1019}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3">
                  <a
                    href={waServicio('parafinoterapia')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} tap-44 inline-flex h-11 items-center gap-2 text-[11px] uppercase tracking-[0.25em] underline underline-offset-4`}
                    style={{ color: C.deepRose }}
                  >
                    Consultar parafinoterapia
                  </a>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure>
                <div className="overflow-hidden rounded-3xl">
                  <Image
                    src={`${IMG}/lipo-laser.webp`}
                    alt="Afiche de lipo láser del salón: 10 sesiones por $199.990, una zona a elección"
                    width={720}
                    height={1281}
                    className="h-auto w-full"
                  />
                </div>
                <figcaption className="mt-3">
                  <a
                    href={waServicio('lipo láser')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} tap-44 inline-flex h-11 items-center gap-2 text-[11px] uppercase tracking-[0.25em] underline underline-offset-4`}
                    style={{ color: C.deepRose }}
                  >
                    Consultar lipo láser
                  </a>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: 5,0 perfecto ── */}
      <section id="resenas" className="overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.wine }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
            <Reveal>
              <div>
                <p
                  className={`${display.className} text-[6rem] font-medium italic leading-none md:text-[9rem]`}
                  style={{ color: C.roseSoft }}
                >
                  {BIZ.rating}
                </p>
                <Stars value={5} color={C.rose} className="mt-4 h-5 w-5" />
                <p className="mt-4 text-sm leading-relaxed" style={{ color: C.mutedD }}>
                  Todas las reseñas de Google son de cinco estrellas. Lo que más repiten las
                  clientas: la atención de Marcia, su dueña.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} tap-44 mt-5 inline-flex h-11 items-center gap-2 text-[11px] uppercase tracking-[0.25em] underline underline-offset-4`}
                  style={{ color: C.rose }}
                >
                  Ver ficha en Google
                </a>
              </div>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESENAS.map((r, i) => (
                <Reveal key={r.autor} delay={i * 70} className={i % 2 === 1 ? 'sm:mt-8' : ''}>
                  <blockquote
                    className="flex h-full flex-col rounded-2xl border p-5"
                    style={{
                      backgroundColor: C.wine2,
                      borderColor: 'rgba(232,172,192,0.22)',
                    }}
                  >
                    <Stars value={5} color={C.rose} className="h-3.5 w-3.5" />
                    <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: C.blush }}>
                      “{r.texto}”
                    </p>
                    <footer className="mt-4">
                      <p className="text-sm font-semibold" style={{ color: C.roseSoft }}>
                        {r.autor}
                      </p>
                      <p
                        className={`${mono.className} mt-0.5 text-[10px] uppercase tracking-[0.2em]`}
                        style={{ color: C.mutedD }}
                      >
                        {r.detalle}
                      </p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visítanos: mapa + datos reales ── */}
      <section id="visitanos" className="overflow-hidden py-14 md:py-24" style={{ backgroundColor: C.blush }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
            <Reveal>
              <div>
                <p
                  className={`${mono.className} mb-3 text-[11px] uppercase tracking-[0.3em]`}
                  style={{ color: C.deepRose }}
                >
                  Visítanos
                </p>
                <h2
                  className={`${display.className} text-4xl font-medium italic leading-tight md:text-5xl`}
                  style={{ color: C.ink }}
                >
                  En Av. Sur, a pasos del centro de Molina
                </h2>
                <dl className="mt-8 space-y-5">
                  <div>
                    <dt
                      className={`${mono.className} mb-1 text-[10px] uppercase tracking-[0.25em]`}
                      style={{ color: C.muted }}
                    >
                      Dirección
                    </dt>
                    <dd className="text-base font-semibold" style={{ color: C.ink }}>
                      {BIZ.address}, {BIZ.city} · {BIZ.region}
                    </dd>
                  </div>
                  <div>
                    <dt
                      className={`${mono.className} mb-1 text-[10px] uppercase tracking-[0.25em]`}
                      style={{ color: C.muted }}
                    >
                      Horario
                    </dt>
                    <dd className="text-base" style={{ color: C.ink }}>
                      {BIZ.horario.map((h) => (
                        <p key={h.dias}>
                          <span className="font-semibold">{h.dias}:</span> {h.horas}
                        </p>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt
                      className={`${mono.className} mb-1 text-[10px] uppercase tracking-[0.25em]`}
                      style={{ color: C.muted }}
                    >
                      Agenda
                    </dt>
                    <dd className="text-base" style={{ color: C.ink }}>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tap-44 font-semibold underline underline-offset-2"
                        style={{ color: C.deepRose }}
                      >
                        WhatsApp {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
                <ul className="mt-7 flex flex-wrap gap-2">
                  {BIZ.sellos.map((s) => (
                    <li
                      key={s}
                      className={`${mono.className} rounded-full border px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]`}
                      style={{ borderColor: 'rgba(154,78,99,0.4)', color: C.deepRose }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <WaBtn href={WA_LINK} dark>
                    Agendar mi hora
                  </WaBtn>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div>
                <div
                  className="overflow-hidden rounded-3xl border"
                  style={{ borderColor: 'rgba(154,78,99,0.3)' }}
                >
                  <LazyMap
                    src={MAPS_EMBED}
                    title={`Mapa a ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    className="aspect-[4/3] w-full md:aspect-[3/2]"
                  />
                </div>
                <p className="mt-3 text-xs" style={{ color: C.muted }}>
                  También en{' '}
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 font-semibold underline underline-offset-2"
                    style={{ color: C.deepRose }}
                  >
                    Instagram @{BIZ.instagram}
                  </a>{' '}
                  y{' '}
                  <a
                    href={FB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 font-semibold underline underline-offset-2"
                    style={{ color: C.deepRose }}
                  >
                    Facebook · {BIZ.facebook}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden py-16 text-center md:py-28" style={{ backgroundColor: C.wine }}>
        <FlorLinea
          className="pointer-events-none absolute -left-4 bottom-0 w-16 opacity-25 md:w-24"
          style={{ color: C.rose }}
        />
        <div className="mx-auto max-w-2xl px-5 md:px-8">
          <Reveal>
            <p
              className={`${mono.className} mb-4 text-[11px] uppercase tracking-[0.3em]`}
              style={{ color: C.rose }}
            >
              Tu momento de regaloneo
            </p>
            <h2
              className={`${display.className} text-4xl font-medium italic leading-tight md:text-6xl`}
              style={{ color: C.roseSoft }}
            >
              Agenda tu hora y sal encantada
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.mutedD }}>
              Escríbenos por WhatsApp, cuéntanos qué te quieres hacer y te agendamos en la semana.
            </p>
            <div className="mt-8 flex justify-center">
              <WaBtn href={WA_LINK}>Escribir a {BIZ.short}</WaBtn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1F121B', color: C.blush }}>
        <div className="mx-auto max-w-6xl px-5 py-6 md:px-8 md:py-8">
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} text-xl italic`} style={{ color: C.roseSoft }}>
                {BIZ.name}
              </p>
              <p className="mt-1 text-xs" style={{ color: C.mutedD }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: C.mutedD }}>
              <p className="font-semibold" style={{ color: C.blush }}>
                Agenda por WhatsApp
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-1 inline-block underline underline-offset-2"
                style={{ color: C.rose }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p
            className="mt-5 border-t pt-4 text-[11px] leading-relaxed"
            style={{ color: C.mutedD, borderColor: 'rgba(232,172,192,0.15)' }}
          >
            Sitio de ejemplo preparado por Sitiazo con fotos y datos reales de la ficha de Google
            del salón.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
