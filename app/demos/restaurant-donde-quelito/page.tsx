import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, COCINA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
})

// Paleta tomada de los activos reales: ladrillo de la fachada,
// miel del techo de madera y crema de los manteles.
const C = {
  brick: '#8C2E1C',
  brickDeep: '#5C1B0F',
  dark: '#22100A',
  honey: '#E0A93F',
  honeySoft: '#F2D488',
  cream: '#F5EDDD',
  creamLine: '#E3D5BC',
  ink: '#2B170D',
  muted: '#6E5747',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-donde-quelito',
  title: 'Restaurant Donde Quelito — la casa roja de O’Higgins, Curepto',
  description:
    'Comida casera abundante en la casa roja de Bernardo O’Higgins 12, Curepto: terraza de madera, papas fritas caseras, pescado y pastel de choclo. Lun a sáb 9:00–23:00.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La terraza', href: '#terraza' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'La mesa de al lado', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const MARQUEE = [
  'comida casera',
  'terraza de madera',
  'papas fritas caseras',
  'pescado y carne del día',
  'pastel de choclo',
  'cortito de vino añejado',
  'estacionamiento privado',
]

function Letrero({ text, dark = false }: { text: string; dark?: boolean }) {
  // El letrero real cuelga en vertical sobre la vereda; la misma lectura
  // marca el inicio de cada sección.
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`}
      style={{ color: dark ? C.honey : C.brick }}
    >
      {text}
    </p>
  )
}

export default function DondeQuelitoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .dq-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .dq-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .dq-btn:active { transform: translateY(0) scale(0.97); }
        .dq-btn:focus-visible { outline: 3px solid ${C.honey}; outline-offset: 3px; }
        .dq-marq { animation: dq-marq 34s linear infinite; }
        @keyframes dq-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .dq-marq { animation: none; } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(34,16,10,0.95)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.16)',
          btnBg: C.honey,
          btnInk: C.dark,
        }}
      />

      {/* ── Hero: la casa roja ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-5`}
                style={{ color: C.honey }}
              >
                Bernardo O’Higgins 12 · Curepto
              </p>
              <h1
                className={`${display.className} font-semibold text-[clamp(2.7rem,7vw,5.2rem)] leading-[0.98] mb-6`}
                style={{ color: '#FFF7EA' }}
              >
                La casa roja
                <br />
                donde se come
                <br />
                <span className="italic" style={{ color: C.honey }}>en la terraza</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,247,234,0.82)' }}>
                Comida casera abundante y a precio justo, de lunes a sábado
                hasta las 23:00. La picada de Curepto con techo de madera,
                ventanales y papas fritas cortadas a mano.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dq-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.honey, color: C.dark }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#cocina"
                  className="dq-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: 'rgba(255,247,234,0.45)', color: '#FFF7EA' }}
                >
                  Ver la cocina
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 relative">
            <Reveal delay={140}>
              <div className="relative">
                <div
                  className="absolute -top-3 -left-3 w-full h-full rounded-xl border-2"
                  style={{ borderColor: C.honey }}
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-xl aspect-[3/4] max-h-[560px] w-full">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de ladrillo rojo de Restaurant Donde Quelito en O'Higgins, Curepto, con su letrero vertical"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dq-btn inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 rounded-full whitespace-nowrap tap-44"
                    style={{ backgroundColor: C.cream, color: C.ink }}
                  >
                    <Stars value={BIZ.rating} color={C.brick} className="w-4 h-4" />
                    {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} opiniones
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* cinta corrida, como el letrero que recorre la fachada */}
      <div className="overflow-hidden border-y-2 py-3" style={{ backgroundColor: C.brick, borderColor: C.brickDeep }} aria-hidden="true">
        <div className="dq-marq flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex">
              {MARQUEE.map((item) => (
                <span
                  key={`${dup}-${item}`}
                  className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] px-6`}
                  style={{ color: C.cream }}
                >
                  {item} <span style={{ color: C.honey }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La terraza ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero text="n° 1 — el lugar" />
            <h2
              className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] mb-4 max-w-3xl`}
              style={{ color: C.ink }}
            >
              Una terraza de madera tan larga como la casa
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12" style={{ color: C.muted }}>
              Techo de madera, ventanales que se abren al aire y una barra
              corrida para mirar la cocina. Afuera queda el estacionamiento
              privado; adentro, el neón del bar.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6 items-stretch">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] h-full">
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Terraza de madera de Donde Quelito con barra corrida, mesas y techo de madera"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="col-span-12 md:col-span-5 grid grid-rows-2 gap-4 md:gap-6">
              <Reveal delay={90}>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-auto md:h-full">
                  <Image
                    src={`${IMG}/ventanales.webp`}
                    alt="Ventanales de la terraza con comensales y vista al exterior"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={170}>
                <div className="relative overflow-hidden rounded-xl aspect-[16/10] md:aspect-auto md:h-full">
                  <Image
                    src={`${IMG}/barra.webp`}
                    alt="Barra del restaurante con letrero luminoso BAR y botellas"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La cocina ── */}
      <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.brickDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero dark text="n° 2 — de la cocina" />
            <h2
              className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] mb-4 max-w-3xl`}
              style={{ color: '#FFF7EA' }}
            >
              Platos que alcanzan
              <span className="italic" style={{ color: C.honey }}> para compartir</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12" style={{ color: 'rgba(255,247,234,0.75)' }}>
              Lo que sirve la casa, tal como lo cuentan quienes ya se
              sentaron a la mesa.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <ul className="border-t-2" style={{ borderColor: C.honey }}>
                {COCINA.map((p, i) => (
                  <Reveal key={p.name} delay={i * 70}>
                    <li className="py-5 border-b" style={{ borderColor: 'rgba(255,247,234,0.18)' }}>
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`${mono.className} text-xs md:text-sm shrink-0`}
                          style={{ color: C.honey }}
                          aria-hidden="true"
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <div>
                          <h3
                            className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`}
                            style={{ color: '#FFF7EA' }}
                          >
                            {p.name}
                            {'badge' in p && p.badge && (
                              <span
                                className={`${mono.className} ml-3 align-middle inline-block text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full`}
                                style={{ backgroundColor: C.honey, color: C.dark }}
                              >
                                {p.badge}
                              </span>
                            )}
                          </h3>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,247,234,0.78)' }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={240}>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.18em] mt-6`} style={{ color: 'rgba(255,247,234,0.6)' }}>
                  Según reseñas y fotos de la ficha de Google
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-6 content-start">
              <Reveal delay={80} className="col-span-2">
                <div className="relative overflow-hidden rounded-xl aspect-[16/9]">
                  <Image
                    src={`${IMG}/plato.webp`}
                    alt="Plato de comida casera con papas fritas caseras en Donde Quelito"
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/empanadas.webp`}
                    alt="Empanadas con pebre servidas en mesa de madera"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={220}>
                <div className="relative overflow-hidden rounded-xl aspect-[3/4]">
                  <Image
                    src={`${IMG}/pescado.webp`}
                    alt="Pescado con ensalada y un vaso de vino en la terraza"
                    fill
                    sizes="(min-width: 1024px) 28vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El salón ── */}
      <section aria-label="El salón" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-4">
              <Reveal>
                <Letrero text="n° 3 — adentro" />
                <h2
                  className={`${display.className} font-semibold text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] mb-4`}
                  style={{ color: C.ink }}
                >
                  Y si llueve, el salón de los arcos
                </h2>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Limpio, amplio y atendido por su propio dueño — así lo
                  describe la ficha. Mesas grandes para la familia que
                  llega a almorzar el sábado.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="col-span-12 md:col-span-8">
              <div className="relative overflow-hidden rounded-xl aspect-[3/4] md:aspect-[16/9]">
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón interior de Donde Quelito con techo de madera, arcos y mesas"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <Reveal>
            <Letrero text="n° 4 — en Google" />
            <h2
              className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] mb-12 max-w-3xl`}
              style={{ color: C.ink }}
            >
              Lo que dice la mesa de al lado
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className="col-span-12 md:col-span-4">
                <figure
                  className="h-full flex flex-col p-6 md:p-7 rounded-xl border-2"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.creamLine }}
                >
                  <Stars value={r.estrellas} color={C.brick} className="w-4 h-4 mb-4" />
                  <blockquote
                    className="text-sm md:text-base leading-relaxed flex-1 mb-5"
                    style={{ color: C.ink }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`}
                    style={{ color: C.brick }}
                  >
                    {r.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={300} className="col-span-12 md:col-span-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="dq-btn flex flex-col justify-between h-full min-w-0 overflow-hidden p-6 md:p-7 rounded-xl tap-44"
                style={{ backgroundColor: C.brick, color: '#FFF7EA' }}
              >
                <div>
                  <p className={`${display.className} font-semibold text-4xl md:text-5xl leading-none mb-2`}>
                    {String(BIZ.rating).replace('.', ',')}★
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,247,234,0.85)' }}>
                    {BIZ.reviews} opiniones en la ficha real de Google
                  </p>
                </div>
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-6`}
                  style={{ color: C.honey }}
                >
                  Leerlas todas →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Letrero dark text="n° 5 — cómo llegar" />
            <h2
              className={`${display.className} font-semibold text-[clamp(2rem,5vw,3.8rem)] leading-[1.02] mb-12 max-w-3xl`}
              style={{ color: '#FFF7EA' }}
            >
              La roja de O’Higgins,
              <span className="italic" style={{ color: C.honey }}> con mesa esperando</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-medium space-y-1" style={{ color: 'rgba(255,247,234,0.92)' }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                </address>
                <ul className="mb-8 border-t" style={{ borderColor: 'rgba(255,247,234,0.2)' }}>
                  {BIZ.hours.map(([d, h]) => (
                    <li
                      key={d}
                      className="flex justify-between py-3 border-b text-sm md:text-base"
                      style={{ borderColor: 'rgba(255,247,234,0.14)', color: 'rgba(255,247,234,0.9)' }}
                    >
                      <span className={`${mono.className} uppercase tracking-[0.14em] text-xs md:text-sm`}>{d}</span>
                      <span className="font-semibold">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dq-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.honey, color: C.dark }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dq-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: 'rgba(255,247,234,0.45)', color: '#FFF7EA' }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-xl border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: C.honey }}
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
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.brickDeep, color: '#FFF7EA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,247,234,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            Lun a sáb 9:00–23:00 · domingo cerrado · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,247,234,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(255,247,234,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFF7EA' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.honey }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
