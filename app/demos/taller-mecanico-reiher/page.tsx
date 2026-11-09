import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Trazo } from './trazo'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

// Space Grotesk para titulares, Inter para el texto y Space Mono
// para los rótulos y datos de la «pantalla de diagnóstico».
const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'taller-mecanico-reiher',
  title: 'Reiher Diagno Service · Taller mecánico y diagnóstico en Osorno',
  description:
    'Diagnóstico, mecánica general y mantenciones por kilometraje para autos y camionetas en Aníbal Pinto 1854, Osorno. Agenda tu hora por WhatsApp. 4,5 en Google con 29 opiniones.',
  image: '/demos/taller-mecanico-reiher/taller.webp',
})

// De su letrero y su taller: el violeta Reiher del logo, el ciruela
// oscuro de la placa del letrero, el rojo del auto en la pantalla y
// el gris del taller techado.
const C = {
  ciruela: '#2A1E2C',
  ciruela2: '#221826',
  panel: '#35283A',
  violeta: '#4B3F8F',
  lila: '#A99BE6',
  rojo: '#D9363E',
  rojoInk: '#C1272D', // pasa 4.5:1 sobre gris y blanco
  rojoLuz: '#F0959A', // pasa 4.5:1 sobre ciruela
  gris: '#ECEDEF',
  papel: '#FFFFFF',
  tinta: '#211722',
  mutedD: 'rgba(236,237,239,0.72)',
  mutedD2: 'rgba(236,237,239,0.56)',
  mutedL: 'rgba(33,23,34,0.70)',
  lineD: 'rgba(236,237,239,0.15)',
  lineL: 'rgba(33,23,34,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const NAV_LINKS = [
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Rótulo de sección tipo registro: [ REG-XX · nombre ] + línea. */
function Rotulo({ n, nombre, dark = true }: { n: string; nombre: string; dark?: boolean }) {
  const ink = dark ? C.lila : C.violeta
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] mb-5 whitespace-nowrap`}
      style={{ color: ink }}
    >
      <span aria-hidden="true">[</span>
      <span style={{ color: dark ? C.mutedD : C.mutedL }}>
        REG-{n} · {nombre}
      </span>
      <span aria-hidden="true">]</span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/* ── Iconos del oficio, trazo único ── */
function Ic({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    monitor: (
      <>
        <rect x="3" y="4.5" width="18" height="12" rx="1.8" />
        <path d="M9 20.5h6M12 16.5v4" />
        <path d="M6.5 10.5h2l1.2-2.4 2 4.6 1.4-2.2h4.4" />
      </>
    ),
    wrench: (
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-8 8l-6.9 6.9a2.12 2.12 0 0 1-3-3l6.9-6.9a6 6 0 0 1 8-8l-3.8 3.8z" />
    ),
    km: (
      <>
        <path d="M4 16.5a8 8 0 1 1 16 0" />
        <path d="M12 16.5 L15.8 9.5" />
        <circle cx="12" cy="16.5" r="1.4" />
      </>
    ),
    camioneta: (
      <>
        <path d="M2.5 15.5v-4.5l2-3.5h9l4 3h4v5" />
        <path d="M5 11h10" />
        <circle cx="7" cy="17" r="1.9" />
        <circle cx="17" cy="17" r="1.9" />
        <path d="M9 15.5h6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
    check: <path d="M4 12.5 L9.5 18 L20 6.5" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function BtnWa({
  children,
  tone,
  href = WA_LINK,
  className = '',
}: {
  children: React.ReactNode
  tone: 'violeta' | 'lineD' | 'lineL'
  href?: string
  className?: string
}) {
  const st: CSSProperties =
    tone === 'violeta'
      ? { backgroundColor: C.violeta, color: '#fff' }
      : tone === 'lineD'
        ? { border: '1.5px solid rgba(236,237,239,0.45)', color: C.gris }
        : { border: '1.5px solid rgba(33,23,34,0.5)', color: C.tinta }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className={`rh-btn inline-flex items-center justify-center gap-2.5 rounded-md px-6 py-3 text-sm font-semibold tracking-wide tap-44 ${className}`}
      style={st}
    >
      {children}
    </a>
  )
}

/** Mini trazo por canal: cada servicio tiene su propia forma de onda. */
function MiniTrazo({ d, color }: { d: string; color: string }) {
  return (
    <svg viewBox="0 0 72 24" className="block h-6 w-[72px] shrink-0" aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const PASOS = [
  {
    n: '01',
    fase: 'LECTURA',
    t: 'Diagnóstico',
    d: 'Tu auto entra al taller y primero se lee lo que reporta: así se encuentra la falla real, sin adivinar.',
  },
  {
    n: '02',
    fase: 'ENVÍO',
    t: 'Presupuesto claro por WhatsApp',
    d: 'Te llega qué tiene tu auto y qué conviene hacer, en palabras simples, antes de tocar un tornillo.',
  },
  {
    n: '03',
    fase: 'TRABAJO',
    t: 'Reparación',
    d: 'Con el diagnóstico en la mano se trabaja sobre lo que realmente falla, en el taller techado.',
  },
  {
    n: '04',
    fase: 'ENTREGA',
    t: 'Entrega',
    d: 'Te avisamos cuando está listo y te vas sabiendo qué se hizo y por qué.',
  },
] as const

const SERVICIOS = [
  {
    n: 'CANAL 02',
    icon: 'wrench',
    name: 'Mecánica general',
    desc: 'Del ajuste fino a la reparación mayor, con autos y camionetas en los elevadores del taller techado.',
    onda: 'M0 12 H14 L18 5 L24 19 L28 9 L32 12 H50 L54 7 L60 17 L64 11 L68 12 H72',
  },
  {
    n: 'CANAL 03',
    icon: 'km',
    name: 'Mantenciones por kilometraje',
    desc: 'La mantención que le toca a tu auto según su kilometraje, como la de los 40 mil que cuentan sus clientes.',
    onda: 'M0 12 H20 L24 12 L26 6 L30 18 L34 12 H44 L48 12 L50 4 L54 20 L58 12 H72',
  },
  {
    n: 'CANAL 04',
    icon: 'camioneta',
    name: 'Autos y camionetas',
    desc: 'No solo el auto de ciudad: también entran las camionetas de trabajo, como cuentan en sus reseñas.',
    onda: 'M0 12 H10 L14 15 L18 9 L22 12 H34 L38 15 L42 9 L46 12 H58 L62 6 L68 18 L72 12',
  },
] as const

export default function ReiherPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.ciruela, color: C.gris }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* ── El escaneo de la primera vista ──
           Una línea de lectura recorre la foto del taller de arriba
           abajo (~1,4 s) y a su paso aparecen las etiquetas; el
           titular cierra la secuencia. */
        .rh-barra {
          position: absolute; inset-inline: 0; top: 0; height: 16%;
          background: linear-gradient(180deg, transparent 0%, rgba(169,155,230,0.16) 45%, rgba(237,233,255,0.85) 78%, rgba(169,155,230,0.5) 92%, transparent 100%);
          box-shadow: 0 2px 18px 4px rgba(169,155,230,0.45);
          transform: translateY(-110%); opacity: 0;
          animation: rh-scan 1.4s cubic-bezier(.45,.05,.3,1) .45s both;
          pointer-events: none;
        }
        @keyframes rh-scan {
          0% { transform: translateY(-110%); opacity: 0 }
          8% { opacity: 1 }
          88% { opacity: 1 }
          100% { transform: translateY(700%); opacity: 0 }
        }

        .rh-tag {
          opacity: 0; transform: translateY(10px);
          animation: rh-tag .55s cubic-bezier(.22,.9,.3,1) both;
        }
        @keyframes rh-tag {
          from { opacity: 0; transform: translateY(10px) }
          to { opacity: 1; transform: none }
        }

        .rh-rise {
          opacity: 0; transform: translateY(18px);
          animation: rh-rise .7s cubic-bezier(.22,.9,.3,1) both;
        }
        @keyframes rh-rise {
          from { opacity: 0; transform: translateY(18px) }
          to { opacity: 1; transform: none }
        }

        .rh-dot { animation: rh-dot 1.7s ease-in-out infinite }
        @keyframes rh-dot { 0%,100% { opacity: 1 } 50% { opacity: .3 } }

        .rh-btn { transition: transform .18s ease, filter .18s ease }
        .rh-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .rh-btn:active { transform: scale(.97) }
        .rh-page a:focus-visible { outline: 3px solid ${C.lila}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .rh-barra, .rh-tag, .rh-rise, .rh-dot { animation: none !important }
          .rh-barra { display: none }
          .rh-tag, .rh-rise { opacity: 1 !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2 min-w-0">
            <span className="font-bold tracking-[0.02em] text-base md:text-lg">Reiher</span>
            <span className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.lila }}>
              diagno service
            </span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(42,30,44,0.94)',
          ink: C.gris,
          line: C.lineD,
          btnBg: C.violeta,
          btnInk: '#fff',
        }}
      />

      <div className="rh-page">
        {/* ── 1 · Hero: la pantalla de diagnóstico ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ciruela }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(640px 420px at 85% 0%, rgba(75,63,143,0.32), transparent 62%), radial-gradient(520px 320px at 0% 100%, rgba(217,54,62,0.08), transparent 60%)',
            }}
          />
          {/* retícula de pantalla */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(236,237,239,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(236,237,239,0.035) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-20 md:pt-28 pb-14 md:pb-20 grid lg:grid-cols-[0.98fr_1.02fr] gap-8 lg:gap-14 items-center">
            {/* La pantalla: la foto del taller escaneada */}
            <figure
              className="rh-rise order-first lg:order-last rounded-xl overflow-hidden"
              style={{ border: `1.5px solid ${C.lineD}`, backgroundColor: C.ciruela2, boxShadow: '0 24px 60px rgba(0,0,0,0.4)', animationDelay: '0.05s' }}
            >
              <div className="flex items-center justify-between gap-3 px-4 py-2.5 border-b" style={{ borderColor: C.lineD }}>
                <span className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.lila }}>
                  Pantalla 01 · El taller
                </span>
                <span className={`${mono.className} flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedD }}>
                  <span className="rh-dot inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.rojoLuz }} aria-hidden="true" />
                  En lectura
                </span>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={`${IMG}/taller.webp`}
                  alt="El interior del taller Reiher: un auto elevado en el elevador rojo, otro en el azul y una camioneta en trabajo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 42%' }}
                />
                {/* velo y líneas de lectura */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(42,30,44,0.22), transparent 30%, transparent 72%, rgba(42,30,44,0.4))' }} aria-hidden="true" />
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 4px)' }} aria-hidden="true" />
                {/* la barra de escaneo */}
                <span className="rh-barra" />
                {/* etiquetas de lectura */}
                <span
                  className={`${mono.className} rh-tag absolute top-[10%] left-3 flex items-center gap-1.5 rounded px-2 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em]`}
                  style={{ backgroundColor: 'rgba(34,24,38,0.88)', color: C.gris, border: `1px solid ${C.lineD}`, animationDelay: '0.85s' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.lila }} aria-hidden="true" />
                  Diagnóstico
                </span>
                <span
                  className={`${mono.className} rh-tag absolute top-[42%] right-3 flex items-center gap-1.5 rounded px-2 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em]`}
                  style={{ backgroundColor: 'rgba(34,24,38,0.88)', color: C.gris, border: `1px solid ${C.lineD}`, animationDelay: '1.15s' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.lila }} aria-hidden="true" />
                  Mecánica
                </span>
                <span
                  className={`${mono.className} rh-tag absolute bottom-[8%] left-3 flex items-center gap-1.5 rounded px-2 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.16em]`}
                  style={{ backgroundColor: 'rgba(34,24,38,0.88)', color: C.gris, border: `1px solid ${C.lineD}`, animationDelay: '1.45s' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.lila }} aria-hidden="true" />
                  Mantenciones
                </span>
              </div>
            </figure>

            {/* El titular: llega al final del escaneo */}
            <div>
              <p
                className={`${mono.className} rh-rise flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] md:tracking-[0.26em] mb-5`}
                style={{ color: C.lila, animationDelay: '1.25s' }}
              >
                <span className="h-[2px] w-8 shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                Osorno · Aníbal Pinto 1854
              </p>
              <h1
                className={`${display.className} font-bold leading-[1.04] tracking-[-0.015em] text-[clamp(2.1rem,8.8vw,4.2rem)]`}
                style={{ color: C.papel }}
              >
                <span className="block">
                  <span className="rh-rise block" style={{ animationDelay: '1.4s' }}>
                    Primero el <span style={{ color: C.lila }}>diagnóstico,</span>
                  </span>
                </span>
                <span className="block">
                  <span className="rh-rise block" style={{ animationDelay: '1.55s', color: C.mutedD }}>
                    después la reparación.
                  </span>
                </span>
              </h1>
              <p
                className="rh-rise mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedD, animationDelay: '1.7s' }}
              >
                Diagnóstico, mecánica general y mantenciones por
                kilometraje para autos y camionetas.
              </p>
              <div className="rh-rise mt-6 flex flex-wrap items-center gap-3" style={{ animationDelay: '1.85s' }}>
                <BtnWa tone="violeta">
                  <Ic name="wa" className="w-4 h-4" />
                  Agenda por WhatsApp
                </BtnWa>
              </div>
              <div className="rh-rise mt-4 flex flex-wrap items-center gap-x-2.5 gap-y-1.5" style={{ animationDelay: '2s' }}>
                <Stars value={BIZ.ratingValue} color={C.rojoLuz} size={15} />
                <span className="text-sm font-semibold" style={{ color: C.gris }}>
                  {BIZ.rating} en Google
                </span>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm underline underline-offset-4 decoration-1 tap-44"
                  style={{ color: C.mutedD, textDecorationColor: 'rgba(236,237,239,0.35)' }}
                >
                  · {BIZ.reviews} opiniones
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Cómo trabajamos: la secuencia ── */}
        <section id="proceso" className="scroll-mt-20" style={{ backgroundColor: C.gris, color: C.tinta }}>
          <Trazo color={C.rojoInk} className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-10 pb-14 md:pb-20">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo n="01" nombre="Secuencia" dark={false} />
                  <h2
                    className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,6.4vw,3.5rem)]`}
                    style={{ color: C.tinta }}
                  >
                    Se mide{' '}
                    <span style={{ color: C.violeta }}>antes de tocar.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                    El taller es un centro de diagnóstico: cada auto que
                    entra sigue la misma secuencia, y tú vas sabiendo en
                    qué punto está.
                  </p>
                  <div className="mt-7">
                    <BtnWa tone="lineL">Agenda tu hora</BtnWa>
                  </div>
                </Reveal>
              </div>
              <ol className="border-t" style={{ borderColor: C.lineL }}>
                {PASOS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 90}>
                    <li
                      className="relative flex gap-4 md:gap-6 border-b py-5 md:py-6 last:border-b-0"
                      style={{ borderColor: C.lineL }}
                    >
                      <span
                        className={`${mono.className} text-lg md:text-xl font-bold leading-none pt-0.5 w-9 shrink-0`}
                        style={{ color: C.rojoInk }}
                        aria-hidden="true"
                      >
                        {p.n}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <span className={`${display.className} font-bold text-lg md:text-xl leading-tight`} style={{ color: C.tinta }}>
                            {p.t}
                          </span>
                          <span className={`${mono.className} text-[9px] font-bold uppercase tracking-[0.22em] px-2 py-1 rounded`} style={{ color: C.violeta, border: `1px solid ${C.lineL}` }}>
                            {p.fase}
                          </span>
                        </span>
                        <span className="block mt-1.5 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                          {p.d}
                        </span>
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 3 · Servicios: el panel de canales ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.ciruela }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo n="02" nombre="Panel de lectura" />
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 items-end mb-9 md:mb-12">
                <h2
                  className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,6.4vw,3.6rem)]`}
                  style={{ color: C.papel }}
                >
                  Cuatro canales,{' '}
                  <span style={{ color: C.lila }}>un mismo taller.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                  Lo que entra al taller, en el orden de su nombre:
                  primero se lee, después se repara.
                </p>
              </div>
            </Reveal>

            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-4 md:gap-5">
              {/* Canal 01: el diagnóstico, la especialidad de la casa */}
              <Reveal>
                <article
                  className="relative h-full rounded-xl overflow-hidden p-5 md:p-7 flex flex-col"
                  style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                >
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.028) 0 1px, transparent 1px 4px)' }}
                    aria-hidden="true"
                  />
                  <div className="relative flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.rojoLuz }}>
                        Canal 01 · Especialidad
                      </span>
                      <span
                        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(169,155,230,0.14)', color: C.lila }}
                      >
                        <Ic name="monitor" className="w-[18px] h-[18px]" />
                      </span>
                    </div>
                    <h3 className={`${display.className} font-bold text-2xl md:text-3xl mt-4 leading-tight`} style={{ color: C.papel }}>
                      Centro de diagnóstico
                    </h3>
                    <p className="mt-2.5 text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutedD }}>
                      Lo dice su propio letrero: el auto entra a la
                      pantalla antes que al elevador. Se lee lo que
                      reporta y recién ahí se decide la reparación.
                    </p>
                    <div className="mt-auto pt-6">
                      <MiniTrazo
                        d="M0 12 H8 L12 4 L18 20 L24 7 L30 12 H42 L46 3 L52 21 L58 9 L64 12 H72"
                        color={C.lila}
                      />
                    </div>
                  </div>
                </article>
              </Reveal>

              {/* Canales 02 a 04 */}
              <div className="grid gap-4 md:gap-5">
                {SERVICIOS.map((s, i) => (
                  <Reveal key={s.n} delay={100 + i * 90}>
                    <article
                      className="rounded-xl p-5"
                      style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className={`${mono.className} text-[9px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.lila }}>
                          {s.n}
                        </span>
                        <span className="flex items-center gap-2.5">
                          <MiniTrazo d={s.onda} color={C.mutedD2} />
                          <span style={{ color: C.lila }}>
                            <Ic name={s.icon} className="w-[18px] h-[18px]" />
                          </span>
                        </span>
                      </div>
                      <h3 className={`${display.className} font-bold text-lg md:text-xl mt-3 leading-tight`} style={{ color: C.papel }}>
                        {s.name}
                      </h3>
                      <p className="mt-1.5 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedD }}>
                        {s.desc}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Rotulo n="03" nombre="Opiniones" dark={false} />
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
              <div>
                <Reveal>
                  <p className={`${display.className} font-bold leading-none text-[clamp(4.4rem,13vw,7rem)]`} style={{ color: C.tinta }}>
                    {BIZ.rating}
                  </p>
                  <div className="mt-3">
                    <Stars value={BIZ.ratingValue} color={C.rojoInk} size={22} />
                  </div>
                  <p className={`${mono.className} mt-4 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.mutedL }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                  <p className="mt-5 text-sm md:text-base leading-relaxed max-w-xs" style={{ color: C.mutedL }}>
                    Citas textuales de su ficha pública de Google: lo que
                    escriben quienes ya pasaron por el taller.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block mt-5 text-[11px] font-bold uppercase tracking-[0.18em] underline underline-offset-4 decoration-1 tap-44`}
                    style={{ color: C.violeta, textDecorationColor: 'rgba(75,63,143,0.4)' }}
                  >
                    Ver la ficha en Google →
                  </a>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <blockquote className="border-l-[3px] pl-5 md:pl-7" style={{ borderColor: C.violeta }}>
                    <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ color: C.tinta }}>
                      «{REVIEWS[2].text}»
                    </p>
                    <footer className={`${mono.className} mt-3 text-[10px] font-bold uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.rojoInk }}>
                      <span>{REVIEWS[2].author}</span>
                      <span style={{ color: 'rgba(33,23,34,0.5)' }}>·</span>
                      <span style={{ color: C.mutedL }}>Google</span>
                    </footer>
                  </blockquote>
                </Reveal>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-7 mt-9">
                  {[REVIEWS[0], REVIEWS[1], REVIEWS[3]].map((r, i) => (
                    <Reveal key={r.author} delay={100 + i * 90} className={i === 2 ? 'md:col-span-2' : ''}>
                      <blockquote className="border-t pt-5" style={{ borderColor: C.lineL }}>
                        <p className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                          «{r.text}»
                        </p>
                        <footer className={`${mono.className} mt-3 text-[10px] font-bold uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.rojoInk }}>
                          <span>{r.author}</span>
                          <span style={{ color: 'rgba(33,23,34,0.5)' }}>·</span>
                          <span style={{ color: C.mutedL }}>Google</span>
                        </footer>
                      </blockquote>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.gris, color: C.tinta }}>
          <Trazo color={C.rojoInk} className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-10 pb-14 md:pb-20">
            <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo n="04" nombre="Ubicación" dark={false} />
                  <h2
                    className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,6.4vw,3.4rem)]`}
                    style={{ color: C.tinta }}
                  >
                    Aníbal Pinto 1854,{' '}
                    <span style={{ color: C.violeta }}>Osorno.</span>
                  </h2>
                  <address className="not-italic mt-4 text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                    {BIZ.address}, {BIZ.city}, {BIZ.region}, Chile.
                  </address>
                  <p className="mt-4 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                    Agenda tu hora por WhatsApp: escríbeles, cuéntales qué
                    le pasa a tu auto y confirman el turno contigo.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <BtnWa tone="violeta">
                      <Ic name="wa" className="w-4 h-4" />
                      Agenda tu hora
                    </BtnWa>
                    <BtnWa tone="lineL">
                      <Ic name="pin" className="w-4 h-4" />
                      {BIZ.phoneDisplay}
                    </BtnWa>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block mt-5 text-[11px] font-bold uppercase tracking-[0.18em] underline underline-offset-4 decoration-1 tap-44`}
                    style={{ color: C.violeta, textDecorationColor: 'rgba(75,63,143,0.4)' }}
                  >
                    Abrir en Google Maps →
                  </a>
                </Reveal>
              </div>
              <div>
                <Reveal delay={120}>
                  <figure className="relative">
                    <div className="relative rounded-xl overflow-hidden aspect-[16/10]" style={{ border: `1.5px solid ${C.lineL}` }}>
                      <Image
                        src={`${IMG}/fachada.webp`}
                        alt="La fachada del taller Reiher en Aníbal Pinto: revestimiento de madera rojiza y portón negro"
                        fill
                        sizes="(min-width: 1024px) 44vw, 92vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 55%' }}
                      />
                      <span
                        className={`${mono.className} absolute left-3 bottom-3 text-[9px] font-bold uppercase tracking-[0.18em] px-2.5 py-1.5 rounded`}
                        style={{ backgroundColor: 'rgba(34,24,38,0.88)', color: C.gris }}
                      >
                        Así se ve por fuera
                      </span>
                    </div>
                    {/* el letrero real, como placa de la esquina */}
                    <div
                      className="absolute -bottom-7 right-4 md:-bottom-9 md:right-7 w-[88px] md:w-[120px] rounded-lg overflow-hidden shadow-xl"
                      style={{ border: `2px solid ${C.papel}` }}
                    >
                      <Image
                        src={`${IMG}/logo.webp`}
                        alt="El letrero de Reiher: círculo blanco con el nombre y un auto dentro de una pantalla"
                        width={1200}
                        height={900}
                        sizes="120px"
                        className="block w-full h-auto"
                      />
                    </div>
                  </figure>
                  <p className={`${mono.className} mt-10 md:mt-12 text-[9px] md:text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.mutedL }}>
                    El letrero de la esquina · foto real
                  </p>
                </Reveal>
              </div>
            </div>
            <Reveal delay={140}>
              <div className="mt-10 md:mt-14 overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineL}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="h-[280px] md:h-[340px] w-full"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Cierre: fin de la lectura ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.ciruela2 }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(560px 300px at 50% 120%, rgba(75,63,143,0.4), transparent 65%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.28em] mb-5 whitespace-nowrap`} style={{ color: C.lila }}>
                [ Fin de lectura · tu turno ]
              </p>
              <h2 className={`${display.className} font-bold text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.05] tracking-[-0.015em] mb-7`} style={{ color: C.papel }}>
                Tu auto, leído primero.
              </h2>
              <BtnWa tone="violeta">
                <Ic name="wa" className="w-4 h-4" />
                Agenda por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.ciruela, color: C.gris }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className={`${display.className} font-bold text-lg flex items-center gap-2.5`}>
                <Ic name="monitor" className="w-4 h-4" />
                {BIZ.name}
              </p>
              <address className="not-italic text-xs leading-relaxed mt-1" style={{ color: C.mutedD }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: C.mutedD }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: C.mutedD }}>
              Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.lila }}>
                Sitiazo
              </a>{' '}
              para {BIZ.mapsName}. Nombre, dirección, teléfono, fotos y
              reseñas son datos públicos del taller.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.lila }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
