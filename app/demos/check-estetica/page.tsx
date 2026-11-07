import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Gloock para el titular editorial, DM Sans para el texto corrido,
// Cormorant Garamond itálica para las citas y Jost para recrear la
// marca «CHECK». IBM Plex Mono para las etiquetas del mapa facial.
const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const quote = localFont({
  src: [{ path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' }],
})
const marca = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
  ],
})

// El arte de la clínica: blanco hueso luminoso, negro tinta de su logo,
// verde petróleo de sus piezas y rosa empolvado como acento.
const C = {
  hueso: '#FAF7F2',
  hueso2: '#F1EBE2',
  papel: '#FDFCFA',
  tinta: '#1A1A1A',
  verde: '#1F5E5C',
  rosa: '#E9C9C4',
  piedraInk: '#6B6660', // gris piedra oscuro: ≥4.5:1 sobre hueso y papel
  mutL: 'rgba(26,26,26,0.66)',
  mutRosa: 'rgba(26,26,26,0.8)', // texto secundario sobre rosa
  mutD: 'rgba(250,247,242,0.85)', // texto secundario sobre verde/tinta
  lineL: 'rgba(26,26,26,0.16)',
  lineD: 'rgba(250,247,242,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'check-estetica',
  title: 'Check Estética Integral · Clínica estética en Concepción',
  description:
    'Clínica estética en Lomas de San Sebastián, Concepción: HIFU, toxina botulínica, hilos tensores, láser CO₂, cuerpo y bienestar íntimo. 4,5 en Google. Agenda tu evaluación por WhatsApp.',
  image: `${IMG}/fachada-vidrio.webp`,
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'El método', href: '#metodo' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#visita' },
]

const FRANJA = ['HIFU', 'Toxina', 'Hilos tensores', 'Láser CO₂', 'Cuerpo', 'Íntimo']

const ROSTRO = [
  {
    n: '01',
    name: 'HIFU facial',
    desc: 'Ultrasonido focalizado con 3 cabezales para rostro y papada, en sesiones de cerca de una hora.',
  },
  {
    n: '02',
    name: 'Toxina botulínica',
    desc: 'Aplicación con Dysport®, indicada según lo que marque tu evaluación.',
  },
  {
    n: '03',
    name: 'Hilos tensores de tracción',
    desc: 'Hilos de tracción que buscan sostener y reafirmar el contorno facial.',
  },
  {
    n: '04',
    name: 'Renew',
    desc: 'Su protocolo que reúne láser CO₂ fraccionado, mesoterapia con vitaminas y Hollywood Peel.',
  },
  {
    n: '05',
    name: 'Ácido hialurónico',
    desc: 'Aplicado según el plan que sale de tu evaluación.',
  },
  {
    n: '06',
    name: 'Scanner facial',
    desc: 'Lectura de tu piel con recomendación de skincare: la evaluación también se apoya en datos.',
  },
] as const

const INTIMO = [
  {
    n: 'I',
    name: 'HIFU íntimo',
    desc: 'Ultrasonido focalizado aplicado al bienestar íntimo, siempre con evaluación previa.',
  },
  {
    n: 'II',
    name: 'Láser CO₂ fraccionado íntimo',
    desc: 'El mismo láser de la línea facial, dentro de un plan pensado para ti.',
  },
  {
    n: 'III',
    name: 'EMS de piso pélvico',
    desc: 'Sesiones de estimulación muscular para trabajar el piso pélvico.',
  },
] as const

const CUERPO = [
  {
    n: '01',
    tag: 'Programa · 4 semanas',
    name: 'Cintura Check 360°',
    desc: 'Programa de moldeamiento corporal que combina yesoterapia, drenaje linfático y EMS escultura durante 4 semanas.',
  },
  {
    n: '02',
    tag: 'Para mujeres y hombres',
    name: 'Depilación Tri Láser',
    desc: 'Depilación con Tri Láser, un servicio que la clínica ofrece también para hombres.',
  },
] as const

const PASOS = [
  {
    n: '01',
    name: 'Evaluación',
    desc: 'Todo parte por una evaluación: presencial en la clínica u online previa si vienes de fuera de Concepción.',
  },
  {
    n: '02',
    name: 'Plan',
    desc: 'Con el diagnóstico se define qué procedimiento es adecuado para ti, quién lo realiza y qué incluye.',
  },
  {
    n: '03',
    name: 'Tratamiento',
    desc: 'Las sesiones usan la tecnología y los insumos que indica tu plan, con profesionales del área.',
  },
  {
    n: '04',
    name: 'Control',
    desc: 'Seguimiento de tu evolución y definición de los próximos pasos.',
  },
] as const

// ── Piezas tipográficas y de marca ──────────────────────────

function Rotulo({
  children,
  light = false,
  color,
}: {
  children: React.ReactNode
  light?: boolean
  color?: string
}) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-5`}
      style={{ color: color ?? (light ? 'rgba(250,247,242,0.85)' : C.verde) }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'tinta' | 'rosa' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'tinta'
      ? { backgroundColor: C.tinta, color: C.hueso }
      : tone === 'rosa'
        ? { backgroundColor: C.rosa, color: C.tinta }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.tinta}`, color: C.tinta }
          : { border: '1.5px solid rgba(250,247,242,0.55)', color: C.hueso }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="ck-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** La silueta humana del logo: cabeza, brazos en arco y cuerpo en una
    sola línea. En el hero se dibuja trazo a trazo junto al titular. */
function Silueta({
  className = '',
  color = C.tinta,
  animada = true,
  delay = '0s',
}: {
  className?: string
  color?: string
  animada?: boolean
  delay?: string
}) {
  const trazo = (cls: string) => (animada ? cls : undefined)
  const dash = animada ? 100 : undefined
  return (
    <svg
      viewBox="0 0 60 96"
      className={className}
      fill="none"
      style={{ '--ck-sil': delay } as CSSProperties}
      aria-hidden="true"
    >
      <path
        className={trazo('ck-sil-a')}
        d="M29 32 C 22 24, 14 17, 8 8"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={dash}
      />
      <path
        className={trazo('ck-sil-b')}
        d="M31 32 C 38 26, 44 18, 48 11"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={dash}
      />
      <path
        className={trazo('ck-sil-c')}
        d="M30 22 C 33 34, 30 46, 26 58 C 23 68, 17 78, 12 88"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={dash}
      />
      <path
        className={trazo('ck-sil-d')}
        d="M26 58 C 32 66, 39 74, 46 82"
        stroke={color}
        strokeWidth="3.4"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={dash}
      />
      <circle className={trazo('ck-sil-h')} cx="30" cy="11" r="5" fill={color} />
    </svg>
  )
}

/** El mapa facial: un rostro de perfil en línea fina que se traza al
    cargar, sobre una retícula de evaluación, con puntos de tratamiento
    que se encienden en secuencia con su etiqueta. */
function MapaFacial({ className = '' }: { className?: string }) {
  const puntos = [
    { x: 85, y: 56, lx: 146, tag: 'HIFU', d: '1.9s' },
    { x: 82, y: 91, lx: 146, tag: 'TOXINA', d: '2.15s' },
    { x: 98, y: 187, lx: 146, tag: 'HILOS', d: '2.4s' },
  ] as const
  return (
    <svg viewBox="0 0 220 280" className={className} fill="none" aria-hidden="true">
      {/* retícula de medición */}
      <g className="ck-mapa-grid" stroke={C.tinta} strokeWidth="1" opacity="0.09">
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={y} x1="14" y1={y} x2="206" y2={y} />
        ))}
        {[40, 80, 120, 160, 200].map((x) => (
          <line key={x} x1={x} y1="18" x2={x} y2="264" />
        ))}
      </g>
      {/* marcas de escala */}
      <g className="ck-mapa-grid" stroke={C.tinta} strokeWidth="1.4" opacity="0.28">
        {[40, 90, 140, 190, 240].map((y) => (
          <line key={y} x1="14" y1={y} x2="22" y2={y} />
        ))}
      </g>
      {/* el rostro de perfil */}
      <path
        className="ck-rostro"
        d="M 130 22
           C 106 24, 90 40, 86 64
           C 84 74, 80 84, 76 92
           C 68 103, 60 114, 54 125
           C 51 133, 55 138, 63 139
           C 69 140, 71 143, 69 146
           C 64 149, 62 153, 65 157
           C 71 159, 72 163, 67 167
           C 62 172, 63 178, 69 183
           C 76 189, 88 190, 95 185
           C 103 191, 107 200, 106 210
           C 104 222, 100 234, 95 244
           C 92 251, 90 258, 90 264"
        stroke={C.tinta}
        strokeWidth="2.2"
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={100}
      />
      {/* ceja */}
      <path
        className="ck-ceja"
        d="M 66 84 C 72 80, 80 79, 86 81"
        stroke={C.tinta}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.55"
        pathLength={100}
        strokeDasharray={100}
      />
      {/* puntos de tratamiento con su etiqueta */}
      {puntos.map((p) => (
        <g key={p.tag}>
          <line
            className="ck-et"
            style={{ '--ck-d': `calc(${p.d} + 0.1s)` } as CSSProperties}
            x1={p.x + 7}
            y1={p.y}
            x2={p.lx}
            y2={p.y}
            stroke={C.verde}
            strokeWidth="1"
            strokeDasharray="2 3"
          />
          <text
            className={`${mono.className} ck-et`}
            style={{ '--ck-d': `calc(${p.d} + 0.15s)` } as CSSProperties}
            x={p.lx + 6}
            y={p.y + 3.5}
            fontSize="9.5"
            letterSpacing="1.5"
            fill={C.verde}
          >
            {p.tag}
          </text>
          <circle
            className="ck-aro"
            style={{ '--ck-d': `calc(${p.d} + 0.25s)` } as CSSProperties}
            cx={p.x}
            cy={p.y}
            r="6"
            stroke={C.verde}
            strokeWidth="1.2"
          />
          <g className="ck-pt" style={{ '--ck-d': p.d } as CSSProperties}>
            <circle cx={p.x} cy={p.y} r="5.5" stroke={C.verde} strokeWidth="1.4" fill={C.papel} />
            <circle cx={p.x} cy={p.y} r="2" fill={C.verde} />
          </g>
        </g>
      ))}
    </svg>
  )
}

/** El marco de ficha clínica que se repite: filete fino con cabecera mono. */
function Ficha({
  head,
  foot,
  children,
  className = '',
}: {
  head: React.ReactNode
  foot?: React.ReactNode
  children: React.ReactNode
  className?: string
}) {
  return (
    <figure className={className} style={{ backgroundColor: C.papel, border: `1px solid ${C.lineL}` }}>
      <div
        className={`${mono.className} flex items-center justify-between gap-3 px-4 md:px-5 py-3 text-[9.5px] md:text-[10px] uppercase tracking-[0.22em]`}
        style={{ color: C.piedraInk }}
      >
        {head}
      </div>
      <div className="border-t" style={{ borderColor: C.lineL }}>
        {children}
      </div>
      {foot ? (
        <div
          className={`${mono.className} border-t flex items-center justify-between gap-3 px-4 md:px-5 py-3 text-[9.5px] md:text-[10px] uppercase tracking-[0.22em]`}
          style={{ borderColor: C.lineL, color: C.piedraInk }}
        >
          {foot}
        </div>
      ) : null}
    </figure>
  )
}

export default function CheckEsteticaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.hueso, color: C.tinta }}
    >
      <style>{`
        /* El rostro del mapa facial se traza en 1,6 s; la ceja lo sigue. */
        @keyframes ck-trazo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .ck-rostro { animation: ck-trazo 1.6s cubic-bezier(.45,.05,.35,1) .5s both }
        .ck-ceja { animation: ck-trazo .4s ease 2s both }

        /* Retícula y etiquetas aparecen suaves. */
        @keyframes ck-fadein { from { opacity: 0 } to { opacity: 1 } }
        .ck-mapa-grid { animation: ck-fadein .9s ease .15s both }
        .ck-et { animation: ck-fadein .5s ease both; animation-delay: var(--ck-d, 1s) }

        /* Cada punto de tratamiento se enciende y suelta un anillo. */
        @keyframes ck-punto { from { transform: scale(0); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .ck-pt { transform-box: fill-box; transform-origin: center; animation: ck-punto .55s cubic-bezier(.3,1.4,.4,1) both; animation-delay: var(--ck-d, 1s) }
        @keyframes ck-pulso { from { transform: scale(.4); opacity: .85 } to { transform: scale(2.6); opacity: 0 } }
        .ck-aro { transform-box: fill-box; transform-origin: center; animation: ck-pulso 1.1s ease-out both; animation-delay: var(--ck-d, 1s) }

        /* La silueta del logo se dibuja trazo a trazo. */
        .ck-sil-a { animation: ck-trazo .45s ease both; animation-delay: calc(var(--ck-sil,0s) + 0s) }
        .ck-sil-b { animation: ck-trazo .45s ease both; animation-delay: calc(var(--ck-sil,0s) + .15s) }
        .ck-sil-c { animation: ck-trazo .6s ease both; animation-delay: calc(var(--ck-sil,0s) + .3s) }
        .ck-sil-d { animation: ck-trazo .45s ease both; animation-delay: calc(var(--ck-sil,0s) + .55s) }
        .ck-sil-h { animation: ck-fadein .4s ease both; animation-delay: calc(var(--ck-sil,0s) + .7s) }

        /* Entrada general del hero. */
        @keyframes ck-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ck-sube { animation: ck-sube .85s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--ck-d, 0s) }

        /* Al hacer scroll: grupos que entran por cortina y líneas que
           se prolongan como separadores. */
        @supports (animation-timeline: view()) {
          .ck-cortina { clip-path: inset(0 0 90% 0); animation: ck-cortina linear both; animation-timeline: view(); animation-range: entry 4% entry 42% }
          @keyframes ck-cortina { to { clip-path: inset(0 0 0% 0) } }
          .ck-linea { transform: scaleX(0); transform-origin: left center; animation: ck-linea linear both; animation-timeline: view(); animation-range: entry 10% entry 75% }
          @keyframes ck-linea { to { transform: scaleX(1) } }
        }

        .ck-btn { transition: transform .18s ease, filter .18s ease }
        .ck-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .ck-btn:active { transform: scale(.97) }
        .ck-page a:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }
        .ck-page a:focus:not(:focus-visible) { outline: none }
        .ck-fila { transition: background-color .25s ease }
        .ck-fila:hover { background-color: ${C.hueso2} }
        .ck-fila .ck-fila-nom { transition: transform .25s ease }
        .ck-fila:hover .ck-fila-nom { transform: translateX(4px) }

        @media (prefers-reduced-motion: reduce) {
          .ck-rostro, .ck-ceja { animation: none !important; stroke-dashoffset: 0 !important }
          .ck-mapa-grid, .ck-et, .ck-pt, .ck-sube { animation: none !important }
          .ck-aro { animation: none !important; opacity: 0 !important }
          .ck-sil-a, .ck-sil-b, .ck-sil-c, .ck-sil-d { animation: none !important; stroke-dashoffset: 0 !important }
          .ck-sil-h { animation: none !important }
          .ck-cortina { animation: none !important; clip-path: none !important }
          .ck-linea { animation: none !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2.5">
            <span className={marca.className} style={{ letterSpacing: '0.16em', fontWeight: 500 }}>
              CHECK
            </span>
            <span className={`${mono.className} hidden sm:inline text-[9px] uppercase`} style={{ letterSpacing: '0.3em', opacity: 0.7 }}>
              Estética Integral
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={marca.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(250,247,242,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.verde,
          btnInk: C.hueso,
        }}
      />

      <div className="ck-page">
        {/* ── 1 · Hero: la ficha de evaluación ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.hueso }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(640px 420px at 88% -4%, rgba(233,201,196,0.4), transparent 62%), radial-gradient(520px 400px at -8% 42%, rgba(31,94,92,0.08), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[120px] pb-12 md:pb-20">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-9 lg:gap-14 items-center">
              <div>
                <p
                  className={`${mono.className} ck-sube text-[9.5px] md:text-[11px] uppercase tracking-[0.3em] mb-5 md:mb-7`}
                  style={{ color: C.verde, '--ck-d': '0.15s' } as CSSProperties}
                >
                  Estética integral · Lomas de San Sebastián
                </p>
                <h1
                  className={`${display.className} ck-sube leading-[1.05] tracking-[0.005em] text-[clamp(2.5rem,9.6vw,4.4rem)]`}
                  style={{ color: C.tinta, '--ck-d': '0.3s' } as CSSProperties}
                >
                  Estética con
                  <br />
                  evaluación
                  <br />
                  <span className="inline-flex items-end gap-3 md:gap-4">
                    primero.
                    <Silueta className="h-[0.82em] w-auto mb-[0.1em]" delay="2.6s" color={C.tinta} />
                  </span>
                </h1>
                <p
                  className="ck-sube mt-5 md:mt-7 max-w-md text-[15px] md:text-lg leading-relaxed"
                  style={{ color: C.mutL, '--ck-d': '0.55s' } as CSSProperties}
                >
                  Rostro, cuerpo y bienestar íntimo con tecnología y un plan
                  pensado para ti, en {BIZ.city}.
                </p>
                <div className="ck-sube mt-6 md:mt-8 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3" style={{ '--ck-d': '0.7s' } as CSSProperties}>
                  <BtnWa tone="tinta">
                    <WaIcon />
                    Agenda tu evaluación por WhatsApp
                  </BtnWa>
                  <BtnWa href="#tratamientos" tone="linea">
                    Ver tratamientos
                  </BtnWa>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ck-sube mt-5 md:mt-6 inline-flex items-center gap-2.5 tap-44"
                  style={{ '--ck-d': '0.85s' } as CSSProperties}
                >
                  <Stars value={BIZ.ratingValue} color={C.verde} size={16} />
                  <span className="text-sm font-bold" style={{ color: C.tinta }}>
                    {BIZ.rating}
                  </span>
                  <span className="text-sm" style={{ color: C.mutL }}>
                    · {BIZ.reviews} opiniones en Google
                  </span>
                </a>
              </div>

              {/* la ficha de evaluación con el mapa facial */}
              <Ficha
                className="ck-sube w-full max-w-[430px] mx-auto lg:mx-0 lg:justify-self-end"
                head={
                  <>
                    <span className="flex items-center min-w-0">
                      {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial del negocio */}
                      <img
                        src={`${IMG}/logo.webp`}
                        alt={`Logo de ${BIZ.name}`}
                        width={448}
                        height={231}
                        className="w-[86px] md:w-[104px] h-auto"
                        style={{ mixBlendMode: 'multiply' }}
                      />
                    </span>
                    <span className="shrink-0" style={{ color: C.verde }}>
                      Ficha · Eval-01
                    </span>
                  </>
                }
                foot={
                  <>
                    <span>Mapa de evaluación</span>
                    <span style={{ color: C.verde }}>Punto de partida</span>
                  </>
                }
              >
                <div
                  className="relative h-[330px] sm:h-[380px] lg:h-[440px]"
                  style={{
                    backgroundImage: 'radial-gradient(rgba(26,26,26,0.12) 1px, transparent 1px)',
                    backgroundSize: '22px 22px',
                  }}
                >
                  <MapaFacial className="absolute inset-0 m-auto h-full w-auto max-w-full" />
                </div>
              </Ficha>
            </div>
          </div>
        </section>

        {/* ── 2 · Franja de técnicas ── */}
        <section style={{ backgroundColor: C.tinta }} aria-label="Técnicas de la clínica">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
            <p
              className={`${mono.className} flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-center text-[9.5px] md:text-[11px] uppercase tracking-[0.28em]`}
              style={{ color: 'rgba(250,247,242,0.85)' }}
            >
              {FRANJA.map((t, i) => (
                <span key={t} className="flex items-center gap-4">
                  {i > 0 && (
                    <span style={{ color: C.rosa }} aria-hidden="true">
                      ·
                    </span>
                  )}
                  <span>{t}</span>
                </span>
              ))}
            </p>
          </div>
        </section>

        {/* ── 3 · Tratamientos: rostro ── */}
        <section id="tratamientos" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo>Tratamientos</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
                <h2
                  className={`${display.className} text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06] max-w-xl`}
                  style={{ color: C.tinta }}
                >
                  Rostro, cuerpo
                  <br />y bienestar íntimo.
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutL }}>
                  Lo que la clínica publica, ordenado en tres grupos. Cada
                  tratamiento parte de una evaluación y se agenda por WhatsApp.
                </p>
              </div>
            </Reveal>

            <div className="ck-cortina">
              <div className="flex items-baseline justify-between gap-4 pb-3">
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.verde }}>
                  Grupo 01 · Rostro
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.piedraInk }}>
                  6 tratamientos
                </p>
              </div>
              <div className="ck-linea h-px" style={{ backgroundColor: C.tinta }} aria-hidden="true" />
              <ol>
                {ROSTRO.map((s) => (
                  <li
                    key={s.n}
                    className="ck-fila grid grid-cols-[2.4rem_1fr] md:grid-cols-[3.5rem_1.05fr_1fr] items-baseline gap-x-4 md:gap-x-8 px-2 md:px-4 py-5 md:py-6 border-b"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em]`} style={{ color: C.verde }}>
                      {s.n}
                    </span>
                    <span className={`${display.className} ck-fila-nom text-[1.35rem] md:text-[2rem] leading-tight`} style={{ color: C.tinta }}>
                      {s.name}
                    </span>
                    <span className="col-start-2 md:col-start-3 mt-1.5 md:mt-0 text-[13px] md:text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                      {s.desc}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 4 · Bienestar íntimo: tres columnas ── */}
        <section style={{ backgroundColor: C.rosa }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.tinta}>Grupo 02 · Bienestar íntimo</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
                <h2
                  className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] max-w-xl`}
                  style={{ color: C.tinta }}
                >
                  También se trata
                  <br />
                  de cómo te sientes.
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutRosa }}>
                  Tres tratamientos de bienestar íntimo, con la misma lógica
                  de siempre: evaluación primero y un plan para ti.
                </p>
              </div>
            </Reveal>
            <div className="ck-cortina grid md:grid-cols-3 gap-x-8 gap-y-10 md:gap-y-0">
              {INTIMO.map((s) => (
                <article key={s.n} className="border-t pt-5 md:pt-6" style={{ borderColor: 'rgba(26,26,26,0.4)' }}>
                  <p className={`${mono.className} text-[11px] tracking-[0.28em] mb-4`} style={{ color: C.mutRosa }}>
                    {s.n}
                  </p>
                  <h3 className={`${display.className} text-[1.55rem] md:text-[1.9rem] leading-tight mb-3`} style={{ color: C.tinta }}>
                    {s.name}
                  </h3>
                  <p className="text-[13px] md:text-sm leading-relaxed max-w-xs" style={{ color: C.mutRosa }}>
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 · Cuerpo: dos programas ── */}
        <section style={{ backgroundColor: C.verde }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo light>Grupo 03 · Cuerpo</Rotulo>
              <h2
                className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] max-w-2xl mb-10 md:mb-14`}
                style={{ color: C.hueso }}
              >
                El cuerpo,
                <br />
                con programa y control.
              </h2>
            </Reveal>
            <div className="ck-cortina grid md:grid-cols-2 gap-x-10 gap-y-10">
              {CUERPO.map((s) => (
                <article key={s.n} className="border-t pt-6 md:pt-7" style={{ borderColor: 'rgba(250,247,242,0.4)' }}>
                  <div className="flex items-baseline justify-between gap-4 mb-4">
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.28em]`} style={{ color: C.mutD }}>
                      {s.tag}
                    </p>
                    <p className={`${display.className} text-3xl md:text-4xl leading-none`} style={{ color: C.rosa }}>
                      {s.n}
                    </p>
                  </div>
                  <h3 className={`${display.className} text-[1.8rem] md:text-[2.4rem] leading-tight mb-3.5`} style={{ color: C.hueso }}>
                    {s.name}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.mutD }}>
                    {s.desc}
                  </p>
                </article>
              ))}
            </div>
            <Reveal delay={140}>
              <div className="mt-10 md:mt-14">
                <BtnWa tone="rosa">
                  <WaIcon />
                  Agenda tu evaluación por WhatsApp
                </BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · El método: evaluación primero ── */}
        <section id="metodo" className="scroll-mt-20" style={{ backgroundColor: C.hueso2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo>El método</Rotulo>
                <h2
                  className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-5`}
                  style={{ color: C.tinta }}
                >
                  Primero se evalúa,
                  <br />
                  después se trata.
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutL }}>
                  Así trabaja Check: nadie entra directo a una máquina. Tu
                  evaluación es el primer paso y puedes realizarla online
                  previa, si vives fuera de Concepción.
                </p>
              </Reveal>
              <ol className="relative pl-12 md:pl-14 space-y-9 md:space-y-10">
                <span
                  className="absolute left-[13px] md:left-[15px] top-2 bottom-2 w-px"
                  style={{ backgroundColor: 'rgba(31,94,92,0.4)' }}
                  aria-hidden="true"
                />
                {PASOS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 100}>
                    <li className="relative">
                      <span
                        className={`${mono.className} absolute -left-12 md:-left-14 top-0.5 w-[27px] h-[27px] md:w-[31px] md:h-[31px] rounded-full flex items-center justify-center text-[9px] md:text-[10px] tracking-widest`}
                        style={{ border: `1.5px solid ${C.verde}`, backgroundColor: C.hueso2, color: C.verde }}
                        aria-hidden="true"
                      >
                        {p.n}
                      </span>
                      <h3 className={`${display.className} text-xl md:text-2xl mb-1.5 pt-0.5`} style={{ color: C.tinta }}>
                        {p.name}
                      </h3>
                      <p className="text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                        {p.desc}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
            <Reveal delay={160}>
              <figure className="mt-14 md:mt-20 max-w-3xl">
                <div className="ck-linea h-px mb-8" style={{ backgroundColor: C.tinta }} aria-hidden="true" />
                <blockquote
                  className={`${quote.className} text-[clamp(1.4rem,4.6vw,2.2rem)] leading-[1.28]`}
                  style={{ color: C.tinta }}
                >
                  «En estética, cada detalle cuenta: los productos e insumos
                  que se utilizan, qué incluye la atención, quién realiza el
                  procedimiento y si es adecuado para ti.»
                </blockquote>
                <figcaption className={`${mono.className} mt-5 text-[10px] uppercase tracking-[0.28em]`} style={{ color: C.piedraInk }}>
                  Así lo explica la propia clínica
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · El equipo y la atención ── */}
        <section style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
              <Reveal>
                <Ficha
                  className="w-full max-w-[340px] mx-auto lg:mx-0"
                  head={
                    <>
                      <span>Recepción</span>
                      <span style={{ color: C.verde }}>La clínica</span>
                    </>
                  }
                  foot={
                    <>
                      <span>Local 7 · Segundo piso</span>
                      <span>Fig. 02</span>
                    </>
                  }
                >
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={`${IMG}/equipo-recepcion.webp`}
                      alt="Integrante del equipo de Check Estética en la entrada de la clínica, con su uniforme verde y negro"
                      fill
                      sizes="(min-width: 1024px) 340px, 88vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 26%' }}
                    />
                  </div>
                </Ficha>
              </Reveal>
              <div>
                <Reveal>
                  <Rotulo>El equipo</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] mb-6`}
                    style={{ color: C.tinta }}
                  >
                    Te atienden
                    <br />
                    desde que llegas.
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <blockquote
                    className={`${quote.className} border-l-2 pl-6 md:pl-8 text-[clamp(1.25rem,4vw,1.75rem)] leading-[1.35] max-w-xl`}
                    style={{ borderColor: C.rosa, color: C.tinta }}
                  >
                    “La atención es excelente, desde que ingresas hasta las
                    profesionales que atienden.”
                  </blockquote>
                  <p className={`${mono.className} mt-4 pl-6 md:pl-8 text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.piedraInk }}>
                    {REVIEWS[0].author} · Reseña de Google
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <p className="mt-7 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutL }}>
                    Una clínica que ya conversa con su gente: más de 19 mil
                    seguidores acompañan su trabajo en{' '}
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-4 decoration-1 tap-44"
                      style={{ color: C.tinta, textDecorationColor: C.verde }}
                    >
                      Instagram
                    </a>
                    .
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8 · Para profesionales y empresas ── */}
        <section style={{ backgroundColor: C.hueso2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo>También para profesionales</Rotulo>
              <h2
                className={`${display.className} text-[clamp(1.9rem,6.4vw,3.2rem)] leading-[1.08] max-w-2xl mb-10 md:mb-14`}
                style={{ color: C.tinta }}
              >
                La clínica que también
                <br />
                abre sus puertas.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {[
                {
                  tag: 'Para profesionales de la salud',
                  t: 'Arriendo de box de procedimientos',
                  d: 'Boxes habilitados con resolución sanitaria SEREMI, disponibles para médicos, odontólogos, enfermeras y otros profesionales.',
                },
                {
                  tag: 'Para empresas',
                  t: 'Jornadas de bienestar',
                  d: 'La clínica organiza jornadas de bienestar para empresas: cuidado estético llevado a tu equipo.',
                },
              ].map((b, i) => (
                <Reveal key={b.t} delay={i * 110}>
                  <article className="h-full p-7 md:p-8" style={{ backgroundColor: C.papel, border: `1px solid ${C.lineL}` }}>
                    <p className={`${mono.className} text-[9.5px] md:text-[10px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.verde }}>
                      {b.tag}
                    </p>
                    <h3 className={`${display.className} text-[1.6rem] md:text-[1.9rem] leading-tight mb-3`} style={{ color: C.tinta }}>
                      {b.t}
                    </h3>
                    <p className="text-sm leading-relaxed max-w-md" style={{ color: C.mutL }}>
                      {b.d}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <div className="mt-8 md:mt-10">
                <BtnWa tone="tinta">
                  <WaIcon />
                  Conversemos por WhatsApp
                </BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 9 · Opiniones: 4,5 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.hueso }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.85fr_1.35fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Ficha
                  className="w-full max-w-[360px]"
                  head={
                    <>
                      <span>Google · Ficha</span>
                      <span style={{ color: C.verde }}>Verificada</span>
                    </>
                  }
                >
                  <div className="px-5 md:px-6 py-7 md:py-8">
                    <p className={`${display.className} leading-none text-[4.4rem] md:text-[5.2rem]`} style={{ color: C.tinta }}>
                      {BIZ.rating}
                    </p>
                    <div className="mt-4">
                      <Stars value={BIZ.ratingValue} color={C.verde} size={20} />
                    </div>
                    <p className="mt-3.5 text-sm" style={{ color: C.mutL }}>
                      {BIZ.reviews} opiniones en su ficha de Google
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                      style={{ color: C.tinta, textDecorationColor: C.verde }}
                    >
                      Ver la ficha en Google →
                    </a>
                  </div>
                </Ficha>
              </Reveal>
              <div className="space-y-9 md:space-y-11 lg:pt-4">
                <Reveal>
                  <Rotulo>Opiniones</Rotulo>
                </Reveal>
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 110}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: C.verde }}>
                      <blockquote
                        className={`${quote.className} text-[clamp(1.2rem,3.8vw,1.6rem)] leading-[1.4]`}
                        style={{ color: C.tinta }}
                      >
                        “{r.text}”
                      </blockquote>
                      <figcaption className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.piedraInk }}>
                        {r.author} · {r.fuente}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 10 · Cómo llegar ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.hueso2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              <Reveal>
                <Ficha
                  className="h-full"
                  head={
                    <>
                      <span>Boulevard Aromo</span>
                      <span style={{ color: C.verde }}>La vitrina</span>
                    </>
                  }
                  foot={
                    <>
                      <span>Av. San Sebastián 956</span>
                      <span>Fig. 03</span>
                    </>
                  }
                >
                  <div className="relative aspect-[5/4]">
                    <Image
                      src={`${IMG}/fachada-vidrio.webp`}
                      alt="Vitrina de Check Estética con el logo grabado en el vidrio, en el pasillo del strip center Boulevard Aromo"
                      fill
                      sizes="(min-width: 1024px) 46vw, 92vw"
                      className="object-cover"
                      style={{ objectPosition: '76% 45%' }}
                    />
                  </div>
                </Ficha>
              </Reveal>
              <div className="flex flex-col">
                <Reveal>
                  <Rotulo>Cómo llegar</Rotulo>
                  <h2
                    className={`${display.className} text-[clamp(1.8rem,6vw,3rem)] leading-[1.08] mb-6`}
                    style={{ color: C.tinta }}
                  >
                    {BIZ.sector},
                    <br />
                    {BIZ.city}.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-3 text-sm md:text-[15px]">
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.verde }}>
                        Dirección
                      </dt>
                      <dd style={{ color: C.tinta }}>
                        {BIZ.address}
                        <span className="block text-[13px]" style={{ color: C.mutL }}>
                          {BIZ.addressExtra} · {BIZ.sector}
                        </span>
                      </dd>
                    </div>
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.verde }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.tinta }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.verde }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={`tel:${BIZ.phoneTel}`}
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.tinta, textDecorationColor: C.verde }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.verde }}>
                        Instagram
                      </dt>
                      <dd>
                        <a
                          href={BIZ.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.tinta, textDecorationColor: C.verde }}
                        >
                          {BIZ.igHandle}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <p className="text-xs mb-7" style={{ color: C.piedraInk }}>
                    Atención administrativa y telefónica de 11:00 a 18:00.
                  </p>
                </Reveal>
                <Reveal delay={160}>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mb-8">
                    <BtnWa tone="tinta">
                      <WaIcon />
                      Agenda tu evaluación
                    </BtnWa>
                    <BtnWa href={MAPS_URL} tone="linea">
                      Cómo llegar →
                    </BtnWa>
                  </div>
                </Reveal>
                <Reveal delay={220} className="flex-1">
                  <div
                    className="overflow-hidden h-full min-h-[280px]"
                    style={{ border: `1px solid ${C.lineL}`, backgroundColor: C.papel }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-full min-h-[280px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(680px 420px at 50% 120%, rgba(233,201,196,0.16), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Silueta animada={false} color={C.rosa} className="w-9 h-auto mx-auto mb-7" />
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.32em] mb-6`} style={{ color: 'rgba(250,247,242,0.7)' }}>
                Check · Estética Integral
              </p>
              <h2
                className={`${display.className} leading-[1.1] text-[clamp(1.9rem,6.4vw,3.4rem)] mb-5`}
                style={{ color: C.hueso }}
              >
                Tu evaluación es
                <br />
                el primer paso.
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutD }}>
                Escríbenos por WhatsApp y agenda tu evaluación: desde ahí se
                arma el plan pensado para ti.
              </p>
              <BtnWa tone="rosa">
                <WaIcon />
                Agenda tu evaluación por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.hueso }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <div className="flex items-center gap-3 shrink-0">
                <Silueta animada={false} color={C.rosa} className="w-[22px] h-auto" />
                <p className="leading-none">
                  <span className={`${marca.className} block text-xl tracking-[0.16em]`} style={{ fontWeight: 500 }}>
                    CHECK
                  </span>
                  <span className={`${mono.className} block mt-1.5 text-[8px] uppercase`} style={{ letterSpacing: '0.3em', color: C.mutD }}>
                    Estética Integral
                  </span>
                </p>
              </div>
              <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
                <p className="font-bold text-sm mb-0.5" style={{ color: C.hueso }}>
                  {BIZ.name}
                </p>
                <address className="not-italic">
                  {BIZ.address}, {BIZ.sector} · {BIZ.city}, {BIZ.region} ·{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 whitespace-nowrap tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                    {BIZ.igHandle}
                  </a>
                </address>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.rosa }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.rosa }}>
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
