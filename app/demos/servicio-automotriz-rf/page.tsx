import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  REVIEWS,
  BITACORA,
  HORARIO,
  IMG,
} from './content'

// Unbounded para los titulares de pantalla, Inter para el texto
// y Roboto Mono para los rótulos de la ficha de diagnóstico.
const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'servicio-automotriz-rf',
  title: 'Servicio Automotriz RF · Electromecánica y diagnóstico en Osorno',
  description:
    'Electromecánica y diagnóstico automotriz multimarca en Azapa 1624, Osorno. Scanner, fallas eléctricas, mecánica general, suspensión, frenos y mantenciones diésel y bencina. 5,0 en Google.',
  image: '/demos/servicio-automotriz-rf/camioneta.webp',
})

// «Primero el diagnóstico»: grafito de pantalla, asfalto de galpón,
// el rojo RF de su logo y el verde de la luz de OK del scanner.
const C = {
  grafito: '#151719',
  carbon: '#0F1113',
  asfalto: '#2A2E33',
  panel: '#1B1E22',
  niebla: '#E9EBED',
  papel: '#F4F5F6',
  rojo: '#C1121F',
  rojoTxt: '#F2716B',
  verde: '#3BD16F',
  tinta: '#17191C',
  mutedD: 'rgba(233,235,237,0.68)',
  mutedL: 'rgba(21,23,25,0.68)',
  lineD: 'rgba(233,235,237,0.14)',
  lineL: 'rgba(21,23,25,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Bitácora', href: '#bitacora' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'El taller', href: '#taller' },
]

/** Los sistemas que lee el scanner del hero, en el orden de su bio. */
const SISTEMAS = [
  'MOTOR',
  'SISTEMA ELÉCTRICO',
  'FRENOS / ABS',
  'SUSPENSIÓN',
  'DIÉSEL · BENCINA',
] as const

const SERVICIOS = [
  {
    n: 'SIS-02',
    name: 'Fallas eléctricas',
    desc: 'Se rastrea el circuito hasta dar con la falla: cableado, conexiones y componentes eléctricos.',
    tag: 'ELÉCTRICO',
  },
  {
    n: 'SIS-03',
    name: 'Mecánica general',
    desc: 'Del armado de motor a la reparación del día a día, en autos y camionetas de distintas marcas.',
    tag: 'MECÁNICA',
  },
  {
    n: 'SIS-04',
    name: 'Suspensión',
    desc: 'Amortiguadores, bujes y componentes del tren delantero y trasero.',
    tag: 'MECÁNICA',
  },
  {
    n: 'SIS-05',
    name: 'Frenos y ABS',
    desc: 'Pastillas, discos y el sistema ABS cuando el testigo se enciende en el tablero.',
    tag: 'FRENOS',
  },
  {
    n: 'SIS-06',
    name: 'Mantenciones',
    desc: 'Cambio de aceite, reset de servicio y mantenimiento preventivo y correctivo.',
    tag: 'MANTENCIÓN',
  },
] as const

/* ── Iconos del oficio, trazo único ── */
function Icon({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    fono: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3.5 7l8.5 6 8.5-6" />
      </>
    ),
    check: <path d="M4 12.5 L9.5 18 L20 6.5" />,
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
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

/** Rótulo de sección tipo ficha: corchetes rojos y línea de lectura. */
function RegRotulo({
  n,
  nombre,
  dark,
}: {
  n: string
  nombre: string
  dark: boolean
}) {
  const ink = dark ? C.rojoTxt : C.rojo
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] md:tracking-[0.3em] mb-5 whitespace-nowrap`}
      style={{ color: ink }}
    >
      <span aria-hidden="true">[</span>
      <span style={{ color: dark ? C.niebla : C.tinta }}>
        REG-{n} · {nombre}
      </span>
      <span aria-hidden="true">]</span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: dark ? C.lineD : C.lineL }}
        aria-hidden="true"
      />
    </p>
  )
}

/**
 * La pantalla del scanner: lee los sistemas uno a uno. Cada línea entra
 * escalonada, su barra de lectura crece y al terminar prende la luz
 * verde de LEÍDO. Ilustrativo: sin códigos ni datos de un auto real.
 * Todo con transform/opacity; con movimiento reducido sale ya leída.
 */
function Scanner() {
  return (
    <div
      className="relative overflow-hidden rounded-[10px] border"
      style={{
        borderColor: 'rgba(233,235,237,0.2)',
        backgroundColor: C.panel,
        boxShadow: '0 22px 50px rgba(0,0,0,0.45)',
      }}
      role="img"
      aria-label="Pantalla de scanner ilustrativa: lee motor, sistema eléctrico, frenos ABS, suspensión y combustibles, y termina con el diagnóstico listo"
    >
      {/* líneas de pantalla CRT */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(255,255,255,0.028) 0 1px, transparent 1px 3px)',
        }}
        aria-hidden="true"
      />
      {/* barrido de lectura que recorre la pantalla */}
      <div
        className="rf-sweep absolute inset-y-0 w-1/3 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(59,209,111,0.07), transparent)',
        }}
        aria-hidden="true"
      />
      <span
        className="absolute top-0 left-0 right-0 h-[2px]"
        style={{ backgroundColor: C.rojo }}
        aria-hidden="true"
      />

      <div
        className="relative flex items-center justify-between gap-3 px-4 pt-3.5 pb-3 border-b"
        style={{ borderColor: C.lineD }}
      >
        <span
          className={`${mono.className} text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em]`}
          style={{ color: C.rojoTxt }}
        >
          Escáner · lectura de sistemas
        </span>
        <span
          className={`${mono.className} flex items-center gap-1.5 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`}
          style={{ color: C.mutedD }}
        >
          <span
            className="rf-blink inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: C.verde }}
            aria-hidden="true"
          />
          En línea
        </span>
      </div>

      <ol className="relative px-4 py-3.5 space-y-[13px]">
        {SISTEMAS.map((s, i) => (
          <li
            key={s}
            className="rf-item flex items-center gap-2.5 md:gap-3"
            style={{ '--d': `${0.5 + i * 0.72}s` } as CSSProperties}
          >
            <span
              className={`${mono.className} text-[9px] font-medium tracking-[0.1em] shrink-0`}
              style={{ color: 'rgba(233,235,237,0.62)' }}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span
              className={`${mono.className} text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.14em] whitespace-nowrap`}
              style={{ color: C.niebla }}
            >
              {s}
            </span>
            <span
              className="relative h-[3px] flex-1 overflow-hidden rounded-full"
              style={{ backgroundColor: 'rgba(233,235,237,0.12)' }}
            >
              <span
                className="rf-bar absolute inset-0 rounded-full"
                style={{ backgroundColor: C.rojo }}
              />
            </span>
            <span className="grid justify-items-end w-[74px] md:w-[82px] shrink-0">
              <span
                className={`rf-wait ${mono.className} [grid-area:1/1] text-[9px] uppercase tracking-[0.16em]`}
                style={{ color: 'rgba(233,235,237,0.62)' }}
              >
                Leyendo
              </span>
              <span
                className={`rf-ok ${mono.className} [grid-area:1/1] flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-[0.16em]`}
                style={{ color: C.niebla }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{
                    backgroundColor: C.verde,
                    boxShadow: `0 0 7px ${C.verde}`,
                  }}
                  aria-hidden="true"
                />
                Leído
              </span>
            </span>
          </li>
        ))}
      </ol>

      <div
        className="rf-done relative border-t px-4 py-3"
        style={{ borderColor: C.lineD }}
      >
        <p
          className={`${mono.className} flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em]`}
        >
          <span
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: C.verde, boxShadow: `0 0 7px ${C.verde}` }}
            aria-hidden="true"
          />
          <span style={{ color: C.niebla }}>Diagnóstico listo</span>
          <span style={{ color: 'rgba(233,235,237,0.55)' }} aria-hidden="true">
            ·
          </span>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 decoration-1 tap-44"
            style={{ color: C.rojoTxt, textDecorationColor: 'rgba(242,113,107,0.45)' }}
          >
            Agenda por WhatsApp
          </a>
        </p>
        <p
          className="mt-2 flex items-center gap-2"
        >
          <Stars value={BIZ.ratingValue} color={C.rojoTxt} size={12} />
          <span
            className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.16em]`}
            style={{ color: C.mutedD }}
          >
            {BIZ.rating} · {BIZ.reviews} opiniones en Google
          </span>
        </p>
      </div>
    </div>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'rojo' | 'lineD' | 'lineL'
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#fff' }
      : tone === 'lineD'
        ? { border: '1.5px solid rgba(233,235,237,0.45)', color: C.niebla }
        : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${mono.className} rf-btn inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] tap-44`}
      style={st}
    >
      <Icon name="wa" className="w-4 h-4" />
      {children}
    </a>
  )
}

/** Marco de esquinas: la unidad queda «en lectura» como en la mira del scanner. */
function CornerMarks() {
  return (
    <div className="absolute inset-2.5 pointer-events-none z-10" aria-hidden="true">
      <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: C.rojo }} />
      <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: C.rojo }} />
      <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: C.rojo }} />
      <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: C.rojo }} />
    </div>
  )
}

export default function ServicioAutomotrizRfPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.grafito, color: C.niebla }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* H1: cada línea aparece como si la barriera el scanner. */
        .rf-hline { clip-path: inset(0 0 0 0); animation: rfScan .85s cubic-bezier(.25,.7,.3,1) both }
        @keyframes rfScan { from { clip-path: inset(0 100% 0 0) } }

        .rf-fade { animation: rfFade .8s ease-out both }
        @keyframes rfFade { from { opacity: 0; transform: translateY(14px) } }

        /* El escaneo del scanner: línea, barra, luz de leído. */
        .rf-item { animation: rfIn .45s cubic-bezier(.22,.8,.3,1) var(--d) both }
        @keyframes rfIn { from { opacity: 0; transform: translateX(-18px) } }
        .rf-bar { transform-origin: left center; animation: rfBar .55s cubic-bezier(.3,.7,.3,1) var(--d) both }
        @keyframes rfBar { from { transform: scaleX(0) } }
        .rf-wait { opacity: 0; animation: rfWait .2s ease calc(var(--d) + .6s) both }
        @keyframes rfWait { from { opacity: 1 } }
        .rf-ok { animation: rfOk .25s ease-out calc(var(--d) + .6s) both }
        @keyframes rfOk { from { opacity: 0 } }
        .rf-done { animation: rfDone .6s ease-out 4.4s both }
        @keyframes rfDone { from { opacity: 0; transform: translateY(8px) } }
        .rf-sweep { animation: rfSweep 7s linear 1.4s infinite }
        @keyframes rfSweep { from { transform: translateX(-110%) } to { transform: translateX(330%) } }
        .rf-blink { animation: rfBlink 1.6s ease-in-out infinite }
        @keyframes rfBlink { 0%,100% { opacity: 1 } 50% { opacity: .25 } }

        .rf-btn { transition: transform .18s ease, filter .18s ease }
        .rf-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .rf-btn:active { transform: translateY(0) scale(.97) }
        .rf-btn:focus-visible { outline: 3px solid ${C.rojoTxt}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .rf-hline, .rf-fade, .rf-item, .rf-bar, .rf-wait, .rf-ok, .rf-done, .rf-sweep, .rf-blink {
            animation: none !important;
          }
          .rf-hline { clip-path: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            <span className="font-bold tracking-[0.04em] text-base md:text-lg">
              Servicio Automotriz <span style={{ color: C.rojoTxt }}>RF</span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agenda"
        theme={{
          over: 'dark',
          bar: 'rgba(15,17,19,0.94)',
          ink: C.niebla,
          line: C.lineD,
          btnBg: C.rojo,
          btnInk: '#fff',
        }}
      />

      {/* ── 1 · Hero: el escaneo ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 380px at 88% 4%, rgba(193,18,31,0.14), transparent 62%), radial-gradient(520px 380px at 4% 96%, rgba(59,209,111,0.05), transparent 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[88px] md:pt-36 pb-12 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <p
              className={`${mono.className} rf-fade flex items-center gap-2.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] md:tracking-[0.3em] mb-5`}
              style={{ color: C.rojoTxt, animationDelay: '0.08s' }}
            >
              <span className="h-[2px] w-8 shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
              Osorno · Electromecánica multimarca
            </p>
            <h1
              className={`${display.className} font-bold leading-[1.12] tracking-[0.01em] text-[clamp(1.7rem,7vw,4rem)]`}
              style={{ color: C.niebla }}
            >
              <span className="block">
                <span className="rf-hline block" style={{ animationDelay: '0.15s' }}>
                  Primero el
                </span>
              </span>
              <span className="block">
                <span className="rf-hline block" style={{ animationDelay: '0.3s' }}>
                  <span className="relative inline-block">
                    diagnóstico.
                    <span
                      className="absolute left-0 right-0 bottom-[0.08em] h-[0.14em]"
                      style={{ backgroundColor: C.rojo }}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </span>
              <span className="block">
                <span className="rf-hline block" style={{ animationDelay: '0.45s' }}>
                  Después, la
                </span>
              </span>
              <span className="block">
                <span className="rf-hline block" style={{ animationDelay: '0.6s' }}>
                  reparación.
                </span>
              </span>
            </h1>
            <p
              className="rf-fade mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '0.75s' }}
            >
              Diagnóstico electrónico con scanner, fallas eléctricas y
              mecánica general para autos y camionetas diésel y bencina,
              en {BIZ.address}.
            </p>
            <div
              className="rf-fade mt-6 flex flex-col sm:flex-row gap-3 sm:items-center"
              style={{ animationDelay: '0.9s' }}
            >
              <BtnWa tone="rojo">Agenda tu diagnóstico</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${mono.className} rf-btn inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] tap-44`}
                style={{ border: '1.5px solid rgba(233,235,237,0.45)', color: C.niebla }}
              >
                <Icon name="fono" className="w-4 h-4" />
                Llamar
              </a>
            </div>
          </div>

          {/* La unidad en lectura: foto real + la pantalla del scanner */}
          <div className="rf-fade" style={{ animationDelay: '0.3s' }}>
            <figure className="relative">
              <div className="relative overflow-hidden" style={{ border: `1px solid ${C.lineD}` }}>
                <Image
                  src={`${IMG}/camioneta.webp`}
                  alt="Camioneta Mahindra roja con el capó abierto, en reparación dentro del taller"
                  width={640}
                  height={864}
                  priority
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="block w-full h-[230px] md:h-[430px] object-cover"
                  style={{ objectPosition: '50% 52%' }}
                />
                <CornerMarks />
                <span
                  className={`${mono.className} absolute left-3.5 top-3.5 z-10 text-[9px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1.5`}
                  style={{ backgroundColor: 'rgba(15,17,19,0.82)', color: C.niebla, border: `1px solid ${C.lineD}` }}
                >
                  Unidad en taller · Mahindra 2.2 diésel
                </span>
              </div>
            </figure>
            <div className="relative z-10 -mt-[92px] md:-mt-[118px] px-3 md:px-5">
              <Scanner />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Franja de lectura ── */}
      <section
        aria-label="Áreas de trabajo"
        className="border-y"
        style={{ backgroundColor: C.asfalto, borderColor: C.lineD }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {['DIAGNÓSTICO', 'SCANNER', 'FALLAS ELÉCTRICAS', 'FRENOS', 'SUSPENSIÓN', 'MANTENCIONES'].map(
            (t, i) => (
              <span key={t} className="flex items-center">
                {i > 0 && (
                  <span
                    className={`${mono.className} mx-3 md:mx-4 text-xs`}
                    style={{ color: C.rojo }}
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}
                <span
                  className={`${mono.className} text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em]`}
                  style={{ color: C.niebla }}
                >
                  {t}
                </span>
              </span>
            ),
          )}
        </div>
      </section>

      {/* ── 3 · Servicios: ficha de sistemas ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.niebla, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <RegRotulo n="01" nombre="Ficha de sistemas" dark={false} />
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-end mb-9 md:mb-12">
            <Reveal>
              <h2
                className={`${display.className} font-bold leading-[1.06] text-[clamp(1.8rem,5.6vw,3.4rem)]`}
                style={{ color: C.tinta }}
              >
                Se escanea primero.{' '}
                <span style={{ color: C.rojo }}>Se repara después.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                Taller electromecánico multimarca: se lee lo que el auto
                reporta y se repara con el diagnóstico en la mano.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <div
              className="border"
              style={{ backgroundColor: C.papel, borderColor: C.lineL }}
            >
              <div
                className="px-5 md:px-7 py-3 flex items-center justify-between gap-3 border-b"
                style={{ backgroundColor: C.asfalto, borderColor: C.lineL }}
              >
                <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.niebla }}>
                  Ficha de sistemas · 06
                </p>
                <div className="flex items-center gap-2">
                  {['Multimarca', 'Diésel', 'Bencina'].map((t) => (
                    <span
                      key={t}
                      className={`${mono.className} text-[8.5px] md:text-[9.5px] font-semibold uppercase tracking-[0.18em] px-2 py-1 border`}
                      style={{ color: C.niebla, borderColor: 'rgba(233,235,237,0.4)' }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid lg:grid-cols-[1.05fr_1fr]">
                {/* SIS-01: el diagnóstico, la especialidad de la casa */}
                <div
                  className="relative px-5 md:px-7 py-7 md:py-9 border-b lg:border-b-0 lg:border-r"
                  style={{ borderColor: C.lineL }}
                >
                  <p className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.rojo }}>
                    SIS-01 · Scanner
                  </p>
                  <h3 className={`${display.className} mt-3 text-2xl md:text-[2rem] font-bold leading-[1.1] uppercase`} style={{ color: C.tinta }}>
                    Diagnóstico electrónico
                  </h3>
                  <p className="mt-3 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutedL }}>
                    El auto habla por su computadora: se conecta el scanner,
                    se lee lo que reporta y recién ahí se decide la
                    reparación. Sin adivinar piezas ni cambiar por cambiar.
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {SISTEMAS.map((s) => (
                      <li
                        key={s}
                        className={`${mono.className} flex items-center gap-1.5 text-[8.5px] md:text-[9.5px] font-semibold uppercase tracking-[0.14em] px-2 py-1 border`}
                        style={{ color: C.mutedL, borderColor: C.lineL }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.verde }} aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* SIS-02 a SIS-06: el resto de la ficha */}
                <ol>
                  {SERVICIOS.map((s) => (
                    <li
                      key={s.n}
                      className="grid grid-cols-[auto_1fr] gap-x-4 px-5 md:px-7 py-4 md:py-[19px] border-b last:border-b-0"
                      style={{ borderColor: C.lineL }}
                    >
                      <span className={`${mono.className} text-[10px] font-semibold tracking-[0.1em] pt-1`} style={{ color: C.rojo }}>
                        {s.n.slice(4)}
                      </span>
                      <span>
                        <span className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
                          <span className={`${display.className} text-base md:text-lg font-bold uppercase tracking-[0.03em] leading-tight`} style={{ color: C.tinta }}>
                            {s.name}
                          </span>
                          <span className={`${mono.className} text-[8.5px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                            {s.tag}
                          </span>
                        </span>
                        <span className="block text-[13px] md:text-sm leading-relaxed mt-1" style={{ color: C.mutedL }}>
                          {s.desc}
                        </span>
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Bitácora del taller ── */}
      <section id="bitacora" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <RegRotulo n="02" nombre="Bitácora del taller" dark />
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-end mb-9 md:mb-12">
            <Reveal>
              <h2
                className={`${display.className} font-bold leading-[1.06] text-[clamp(1.8rem,5.6vw,3.4rem)]`}
                style={{ color: C.niebla }}
              >
                Lo que entra al taller,{' '}
                <span style={{ color: C.rojoTxt }}>en su registro.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                Trabajos reales que el taller publica en sus redes, tal
                como quedan en el libro.
              </p>
            </Reveal>
          </div>

          <ol className="border-t" style={{ borderColor: C.lineD }}>
            {BITACORA.map((e, i) => (
              <Reveal key={e.n} delay={i * 60}>
                <li
                  className="grid grid-cols-[104px_1fr] sm:grid-cols-[128px_1fr] gap-4 sm:gap-6 py-5 md:py-6 border-b items-center"
                  style={{ borderColor: C.lineD }}
                >
                  {'foto' in e && e.foto ? (
                    <figure className="relative w-full h-[96px] sm:h-[104px] overflow-hidden" style={{ border: `1px solid ${C.lineD}` }}>
                      <Image
                        src={`${IMG}/${e.foto}`}
                        alt={'fotoAlt' in e ? e.fotoAlt : ''}
                        width={640}
                        height={640}
                        sizes="(min-width: 640px) 128px, 104px"
                        className="w-full h-full object-cover"
                      />
                    </figure>
                  ) : (
                    <span
                      className={`${mono.className} flex w-full h-[96px] sm:h-[104px] items-center justify-center text-[9px] uppercase tracking-[0.2em] border border-dashed`}
                      style={{ borderColor: 'rgba(233,235,237,0.28)', color: 'rgba(233,235,237,0.55)' }}
                    >
                      Sin foto
                    </span>
                  )}
                  <span>
                    <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className={`${mono.className} text-[10px] font-semibold tracking-[0.14em]`} style={{ color: C.rojoTxt }}>
                        {e.n}
                      </span>
                      <span className={`${mono.className} text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 border`} style={{ color: C.mutedD, borderColor: 'rgba(233,235,237,0.25)' }}>
                        {e.area}
                      </span>
                    </span>
                    <span className={`${display.className} block mt-2 text-lg md:text-xl font-bold leading-snug`} style={{ color: C.niebla }}>
                      {e.vehiculo}
                    </span>
                    <span className="block text-sm leading-relaxed mt-1" style={{ color: C.mutedD }}>
                      {e.trabajo}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 5 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.niebla, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <RegRotulo n="03" nombre="Opiniones" dark={false} />
          <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16">
            <div>
              <Reveal>
                <p className={`${display.className} font-bold leading-none text-[clamp(4.4rem,13vw,7.5rem)]`} style={{ color: C.tinta }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.rojo} size={22} />
                </div>
                <p className={`${mono.className} mt-4 text-[10px] md:text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.mutedL }}>
                  {BIZ.reviews} opiniones en Google
                </p>
                <p className="mt-5 text-sm md:text-base leading-relaxed max-w-xs" style={{ color: C.mutedL }}>
                  Todas las opiniones de su ficha son cinco estrellas.
                  Esto escriben quienes ya pasaron por el taller:
                </p>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <blockquote className="border-l-[3px] pl-5 md:pl-7" style={{ borderColor: C.rojo }}>
                  <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ color: C.tinta }}>
                    «{REVIEWS[0].text}»
                  </p>
                  <footer className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.rojo }}>
                    <span>{REVIEWS[0].author}</span>
                    <span style={{ color: 'rgba(21,23,25,0.5)' }}>·</span>
                    <span style={{ color: C.mutedL }}>Google</span>
                  </footer>
                </blockquote>
              </Reveal>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-8 md:mt-10">
                {REVIEWS.slice(1).map((r, i) => (
                  <Reveal key={r.author} delay={100 + i * 90}>
                    <blockquote className="border-t pt-5" style={{ borderColor: C.lineL }}>
                      <p className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                        «{r.text}»
                      </p>
                      <footer className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.rojo }}>
                        <span>{r.author}</span>
                        <span style={{ color: 'rgba(21,23,25,0.5)' }}>·</span>
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

      {/* ── 6 · El taller ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.grafito }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <RegRotulo n="04" nombre="El taller" dark />
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <Reveal>
              <figure className="relative">
                <div className="relative overflow-hidden" style={{ border: `1px solid ${C.lineD}` }}>
                  <Image
                    src={`${IMG}/taller.webp`}
                    alt="El galpón del taller con varios autos en espera"
                    width={640}
                    height={596}
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="block w-full h-auto"
                  />
                  <CornerMarks />
                  <span
                    className={`${mono.className} absolute left-3.5 bottom-3.5 z-10 text-[9px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1.5`}
                    style={{ backgroundColor: 'rgba(15,17,19,0.82)', color: C.niebla, border: `1px solid ${C.lineD}` }}
                  >
                    El galpón · {BIZ.address}
                  </span>
                </div>
                <figcaption className={`${mono.className} mt-3 text-[9px] md:text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(233,235,237,0.62)' }}>
                  Autos en espera · foto real del taller
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <h2 className={`${display.className} font-bold leading-[1.06] text-[clamp(1.8rem,5.6vw,3.2rem)]`} style={{ color: C.niebla }}>
                  {BIZ.address},{' '}
                  <span style={{ color: C.rojoTxt }}>{BIZ.city}.</span>
                </h2>
                <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutedD }}>
                  Electromecánico automotriz multimarca, formado en{' '}
                  {BIZ.formacion}. Se realizan diagnósticos y reparaciones
                  eléctricas y mecánicas en vehículos de distintas marcas.
                </p>
              </Reveal>
              <Reveal delay={110}>
                <dl className="mt-7 border-t" style={{ borderColor: C.lineD }}>
                  {HORARIO.map((h) => (
                    <div key={h.dias} className="flex items-center justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.lineD }}>
                      <dt className="flex items-center gap-2.5 text-sm" style={{ color: C.mutedD }}>
                        <Icon name="reloj" className="w-4 h-4" />
                        {h.dias}
                      </dt>
                      <dd className={`${mono.className} text-xs md:text-sm font-semibold uppercase tracking-[0.12em]`} style={{ color: C.niebla }}>
                        {h.horas}
                      </dd>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.lineD }}>
                    <dt className="flex items-center gap-2.5 text-sm" style={{ color: C.mutedD }}>
                      <Icon name="fono" className="w-4 h-4" />
                      WhatsApp
                    </dt>
                    <dd>
                      <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-xs md:text-sm font-semibold tracking-[0.12em] tap-44`} style={{ color: C.niebla }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 py-3.5 border-b" style={{ borderColor: C.lineD }}>
                    <dt className="flex items-center gap-2.5 text-sm" style={{ color: C.mutedD }}>
                      <Icon name="mail" className="w-4 h-4" />
                      Correo
                    </dt>
                    <dd>
                      <a href={`mailto:${BIZ.email}`} className={`${mono.className} text-xs md:text-sm font-semibold tracking-[0.04em] tap-44 break-all text-right`} style={{ color: C.niebla }}>
                        {BIZ.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
              <Reveal delay={190}>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <BtnWa tone="rojo">Agenda tu diagnóstico</BtnWa>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} rf-btn inline-flex items-center justify-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] tap-44`}
                    style={{ border: '1.5px solid rgba(233,235,237,0.45)', color: C.niebla }}
                  >
                    <Icon name="pin" className="w-4 h-4" />
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={120}>
            <div className="mt-10 md:mt-12 overflow-hidden border" style={{ borderColor: C.lineD }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="h-[280px] md:h-[340px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Cierre: turno de tu auto ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(560px 320px at 50% 118%, rgba(193,18,31,0.16), transparent 65%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-5`} style={{ color: C.rojoTxt }}>
              [ Fin de la lectura · turno de tu auto ]
            </p>
            <h2 className={`${display.className} font-bold leading-[1.08] text-[clamp(1.9rem,7vw,3.8rem)]`} style={{ color: C.niebla }}>
              ¿Se encendió una luz{' '}
              <span style={{ color: C.rojoTxt }}>en el tablero?</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-sm md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbenos por WhatsApp y agenda el diagnóstico. Lunes a
              viernes de 9:00 a 18:00, en {BIZ.address}, {BIZ.city}.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <BtnWa tone="rojo">Agenda tu diagnóstico</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-bold tracking-[0.02em] text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                style={{ color: C.niebla, textDecorationColor: C.rojo }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={`mailto:${BIZ.email}`}
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.16em] tap-44 underline underline-offset-4`}
                style={{ color: C.mutedD }}
              >
                {BIZ.email}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.niebla }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-3.5">
              <span className="inline-block rounded-md p-1.5 shrink-0" style={{ backgroundColor: '#fff' }}>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} width={864} height={677} className="h-10 w-auto" />
              </span>
              <div>
                <p className={`${display.className} font-bold tracking-[0.04em] text-base md:text-lg leading-tight`}>
                  {BIZ.name}
                </p>
                <p className="text-xs mt-0.5" style={{ color: C.mutedD }}>
                  {BIZ.rubro} · {BIZ.city}
                </p>
              </div>
            </div>
            <nav className={`${mono.className} flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] uppercase tracking-[0.16em]`} aria-label="Pie">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.rojoTxt }}>
                WhatsApp
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Facebook
              </a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Instagram
              </a>
              <a href={`mailto:${BIZ.email}`} className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Correo
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Maps
              </a>
            </nav>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3.5 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(233,235,237,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.niebla }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}, {BIZ.rubro.toLowerCase()} en {BIZ.city}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.rojoTxt }}
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
