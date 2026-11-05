import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_URGENTE, REVIEWS, IMG } from './content'

// Rótulo técnico condensado + texto Plex + mono para los rótulos de circuito.
const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'electricista-los-lagos',
  title: 'Marco Pozo · Electricista certificado SEC en Puerto Montt · 24 h',
  description:
    'Marco Pozo, técnico INACAP con licencia SEC Clase B. Instalaciones eléctricas domiciliarias, comerciales e industriales, empalmes y urgencias 24 horas en Puerto Montt y alrededores.',
  image: '/demos/electricista-los-lagos/tablero.webp',
})

// «Energía bien instalada, en el sur»: pizarra de tablero, cobre del
// conductor, amarillo de seguridad y el verde de la puesta a tierra.
const C = {
  pizarra: '#12171C',
  panel: '#1A222A',
  pozo: '#0D1216',
  niebla: '#E6EAEC',
  cobre: '#C77A3E',
  cobreTxt: '#9A5A26', // cobre oscuro: el único que llega a 4.5:1 sobre niebla
  amar: '#F2C230',
  verde: '#3E8E5A',
  verdeTxt: '#69B383', // verde claro para texto chico sobre pizarra
  verdeOsc: '#2C6E44', // verde oscuro para texto chico sobre niebla
  mutedD: 'rgba(230,234,236,0.68)',
  mutedL: 'rgba(18,23,28,0.7)',
  lineD: 'rgba(230,234,236,0.14)',
  lineL: 'rgba(18,23,28,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Credenciales', href: '#credenciales' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Zona', href: '#zona' },
]

const CIRCUITOS: {
  n: string
  label: string
  desc: string
  icon: string
  urgente?: boolean
}[] = [
  {
    n: 'C-01',
    label: 'DOMICILIARIO',
    desc: 'Instalaciones completas para casas: alumbrado, enchufes, tableros y protecciones.',
    icon: 'casa',
  },
  {
    n: 'C-02',
    label: 'COMERCIAL',
    desc: 'Locales y oficinas: circuitos e iluminación pensados para trabajar todos los días.',
    icon: 'local',
  },
  {
    n: 'C-03',
    label: 'INDUSTRIAL',
    desc: 'Instalaciones industriales: canalización, protecciones y potencia según norma.',
    icon: 'industria',
  },
  {
    n: 'C-04',
    label: 'EMPALMES',
    desc: 'Empalmes y acometidas: del poste al medidor, bien canalizado y protegido.',
    icon: 'empalme',
  },
  {
    n: 'C-05',
    label: 'APARATOS',
    desc: 'Instalación de aparatos y equipos eléctricos con la protección que cada uno pide.',
    icon: 'aparato',
  },
  {
    n: 'C-06',
    label: 'URGENCIAS 24 H',
    desc: 'Fallas y cortes a cualquier hora: escribes y se coordina la visita.',
    icon: 'reloj',
    urgente: true,
  },
]

/** Filas de la placa del instalador: rótulo, valor y estilo. */
const PLACA: { k: string; v: string; strong?: boolean; chip?: string }[] = [
  { k: 'INSTALADOR', v: 'MARCO POZO', strong: true },
  { k: 'LICENCIA', v: 'SEC CLASE B', strong: true, chip: C.amar },
  { k: 'FORMACIÓN', v: 'TÉCNICO N.S. EN ELECTRICIDAD INDUSTRIAL' },
  { k: 'MENCIÓN', v: 'INSTALACIONES ELÉCTRICAS · INACAP' },
  { k: 'EXPERIENCIA', v: '6 AÑOS', strong: true },
  { k: 'MODALIDAD', v: 'TRABAJA CON EQUIPO' },
]

/** Iconos del oficio, trazo único estilo unifilar. */
function Icon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    casa: (
      <>
        <path d="M4 11l8-7 8 7" />
        <path d="M6 9.5V20h12V9.5" />
        <path d="M10 20v-6h4v6" />
      </>
    ),
    local: (
      <>
        <path d="M5 9l1.2-5h11.6L19 9" />
        <path d="M5 9v11h14V9" />
        <path d="M9.5 20v-5h5v5" />
      </>
    ),
    industria: (
      <>
        <path d="M3 21V10l5.5 3.6V10l5.5 3.6V7h7v14" />
        <path d="M3 21h18" />
      </>
    ),
    empalme: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14" />
        <path d="M8 7v4" />
        <path d="M16 7v4" />
      </>
    ),
    aparato: (
      <>
        <path d="M9 2v5" />
        <path d="M15 2v5" />
        <path d="M6.5 7h11v4a5.5 5.5 0 0 1-11 0V7z" />
        <path d="M12 16.5V22" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    tierra: (
      <>
        <path d="M12 3v9" />
        <path d="M5 12h14" />
        <path d="M8 16.5h8" />
        <path d="M10.5 21h3" />
      </>
    ),
    ampolleta: (
      <>
        <path d="M12 3a6 6 0 0 1 3.6 10.8c-.9.7-1.3 1.6-1.4 2.7h-4.4c-.1-1.1-.5-2-1.4-2.7A6 6 0 0 1 12 3z" />
        <path d="M9.8 20h4.4" />
      </>
    ),
    sec: (
      <>
        <path d="M12 2.5l7.5 3v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10v-6l7.5-3z" />
        <path d="M8.8 12l2.2 2.2 4.2-4.6" />
      </>
    ),
    zap: <path d="M13 2.5L4.5 13.5H11l-1 8L18.5 10.5H12l1-8z" />,
    mensaje: (
      <>
        <path d="M4 5h16v11H9l-5 4V5z" />
        <path d="M8 9h8M8 12.5h5" />
      </>
    ),
    agenda: (
      <>
        <rect x="4" y="5" width="16" height="16" rx="2" />
        <path d="M8 3v4M16 3v4M4 10h16" />
        <path d="M9 15.5l2 2 4-4" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/**
 * Rótulo de sección tipo plano: la línea de cobre entra con clip-path
 * al hacer scroll («se cierra el circuito») y el símbolo del extremo
 * aparece cuando la línea llega.
 */
function Ramal({
  n,
  nombre,
  icon,
  dark,
}: {
  n: string
  nombre: string
  icon: string
  dark: boolean
}) {
  const line = dark ? C.cobre : C.cobreTxt
  const ink = dark ? C.cobre : C.cobreTxt
  return (
    <p
      className={`${mono.className} flex items-center gap-2.5 md:gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-5 whitespace-nowrap`}
      style={{ color: ink }}
    >
      <span
        className="mp-wire block h-[2px] w-10 md:w-12 shrink-0"
        style={{ backgroundColor: line }}
        aria-hidden="true"
      />
      <span className="mp-node flex items-center shrink-0" style={{ color: line }} aria-hidden="true">
        <Icon name={icon} className="w-4 h-4" />
      </span>
      <span>
        RAMAL {n} · {nombre}
      </span>
    </p>
  )
}

/**
 * El tablero del hero: interruptor general + 6 circuitos rotulados con
 * los servicios. Al cargar, cada palanca sube escalonada y enciende su
 * testigo; al final un pulso de luz recorre la barra colectora. Así se
 * energiza una instalación bien hecha.
 */
const BREAKERS = [
  'ALUMBRADO',
  'ENCHUFES',
  'EMPALME',
  'COMERCIAL',
  'INDUSTRIAL',
  '24 H',
] as const

function Tablero() {
  const baseDelay = 0.55 // el general sube primero, a los 0.3 s
  return (
    <svg
      viewBox="0 0 480 284"
      className="block w-full h-auto"
      role="img"
      aria-label="Tablero eléctrico ilustrado: seis circuitos rotulados con los servicios de Marco que se energizan uno a uno"
    >
      <defs>
        <linearGradient id="mp-pulse" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.amar} stopOpacity="0" />
          <stop offset="0.5" stopColor={C.amar} stopOpacity="0.95" />
          <stop offset="1" stopColor={C.amar} stopOpacity="0" />
        </linearGradient>
        <clipPath id="mp-busclip">
          <rect x="58" y="56" width="396" height="10" rx="5" />
        </clipPath>
      </defs>

      {/* gabinete */}
      <rect
        x="8"
        y="14"
        width="464"
        height="254"
        rx="12"
        fill={C.panel}
        stroke={C.lineD}
      />
      {[
        [20, 26],
        [460, 26],
        [20, 256],
        [460, 256],
      ].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="#262F38" stroke={C.lineD} />
      ))}
      <text
        x="30"
        y="42"
        fontSize="10"
        letterSpacing="2"
        fill={C.mutedD}
        className={mono.className}
      >
        TABLERO GENERAL
      </text>
      <text
        x="450"
        y="42"
        fontSize="10"
        letterSpacing="2"
        textAnchor="end"
        fill={C.cobre}
        className={mono.className}
      >
        230 V ~
      </text>

      {/* brillo de la barra cuando todo queda energizado */}
      <rect
        className="mp-busglow"
        x="58"
        y="50"
        width="396"
        height="22"
        rx="11"
        fill={C.amar}
        opacity="0"
        style={{ animationDelay: '1.9s' }}
      />
      {/* barra colectora de cobre */}
      <rect x="58" y="56" width="396" height="10" rx="5" fill={C.cobre} opacity="0.9" />
      {/* el pulso de luz que la recorre al final */}
      <g clipPath="url(#mp-busclip)">
        <rect
          className="mp-pulse"
          x="58"
          y="56"
          width="110"
          height="10"
          fill="url(#mp-pulse)"
          style={{ animationDelay: '1.75s' }}
        />
      </g>

      {/* interruptor general: sube primero */}
      <rect x="54" y="66" width="6" height="22" fill={C.cobre} opacity="0.85" />
      <rect x="26" y="88" width="56" height="118" rx="7" fill="#232C35" stroke={C.lineD} />
      <circle
        className="mp-pilot"
        cx="54"
        cy="99"
        r="4"
        fill={C.amar}
        style={{ animationDelay: '0.85s' }}
      />
      <rect x="42" y="112" width="24" height="76" rx="12" fill="#141A20" />
      <rect
        className="mp-lever"
        x="46"
        y="118"
        width="16"
        height="34"
        rx="5"
        fill={C.amar}
        style={{ animationDelay: '0.3s' }}
      />
      <text
        x="54"
        y="226"
        fontSize="8.5"
        letterSpacing="1"
        textAnchor="middle"
        fill={C.mutedD}
        className={mono.className}
      >
        GENERAL
      </text>

      {/* los 6 circuitos */}
      {BREAKERS.map((label, i) => {
        const x = 96 + i * 60
        const cx = x + 26
        const d = baseDelay + i * 0.12
        return (
          <g key={label}>
            <rect x={cx - 3} y="66" width="6" height="22" fill={C.cobre} opacity="0.85" />
            <rect
              x={x}
              y="88"
              width="52"
              height="118"
              rx="6"
              fill="#232C35"
              stroke={C.lineD}
            />
            <circle
              className="mp-pilot"
              cx={cx}
              cy="99"
              r="3.4"
              fill={label === '24 H' ? C.amar : C.verdeTxt}
              style={{ animationDelay: `${d + 0.35}s` }}
            />
            <rect x={x + 15} y="112" width="22" height="66" rx="11" fill="#141A20" />
            <rect
              className="mp-lever"
              x={x + 18}
              y="118"
              width="16"
              height="32"
              rx="5"
              fill={label === '24 H' ? C.amar : '#DCE3E7'}
              style={{ animationDelay: `${d}s` }}
            />
            <text
              x={cx}
              y="226"
              fontSize="8.5"
              letterSpacing="0.5"
              textAnchor="middle"
              fill={C.mutedD}
              className={mono.className}
            >
              {label}
            </text>
          </g>
        )
      })}

      {/* barra de puesta a tierra */}
      <text
        x="30"
        y="250"
        fontSize="8"
        letterSpacing="1.5"
        fill={C.verdeTxt}
        className={mono.className}
      >
        TIERRA
      </text>
      <line x1="80" y1="247" x2="430" y2="247" stroke={C.verde} strokeWidth="2.5" />
      <g stroke={C.verde} strokeWidth="2" aria-hidden="true">
        <line x1="444" y1="240" x2="444" y2="248" />
        <line x1="437" y1="248" x2="451" y2="248" />
        <line x1="439.5" y1="252" x2="448.5" y2="252" />
        <line x1="442" y1="256" x2="446" y2="256" />
      </g>
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
}: {
  children: React.ReactNode
  href?: string
  tone: 'amar' | 'lineD' | 'lineL'
}) {
  const st: CSSProperties =
    tone === 'amar'
      ? { backgroundColor: C.amar, color: C.pizarra }
      : tone === 'lineD'
        ? { border: '1.5px solid rgba(230,234,236,0.5)', color: C.niebla }
        : { border: `1.5px solid ${C.pizarra}`, color: C.pizarra }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} mp-btn inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-[0.06em] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function ElectricistaLosLagosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.pizarra, color: C.niebla }}
    >
      <style>{`
        /* El tablero se energiza: la palanca sube y el testigo prende. */
        @keyframes mp-lever { from { transform: translateY(28px) } to { transform: translateY(0) } }
        .mp-lever { animation: mp-lever .5s cubic-bezier(.3,1.35,.4,1) both }
        @keyframes mp-pilot { from { opacity: 0 } to { opacity: 1 } }
        .mp-pilot { animation: mp-pilot .35s ease-out both }
        @keyframes mp-pulse { from { transform: translateX(-120px) } to { transform: translateX(430px) } }
        .mp-pulse { animation: mp-pulse 1.25s cubic-bezier(.55,.05,.35,1) both }
        @keyframes mp-busglow { from { opacity: 0 } to { opacity: .22 } }
        .mp-busglow { animation: mp-busglow 1.1s ease-out both }

        /* Hero: entradas */
        @keyframes mp-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .mp-line { animation: mp-up .95s cubic-bezier(.22,.61,.2,1) both }
        @keyframes mp-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .mp-fade { animation: mp-fade .85s ease-out both }

        /* Cada sección cierra su circuito: el tramo de cobre entra con
           clip-path y el símbolo del extremo aparece al llegar la línea. */
        @supports (animation-timeline: view()) {
          .mp-wire {
            clip-path: inset(0 100% 0 0);
            animation: mp-wire linear both;
            animation-timeline: view();
            animation-range: entry 5% entry 60%;
          }
          @keyframes mp-wire { to { clip-path: inset(0 0 0 0) } }
          .mp-node {
            opacity: 0;
            transform: scale(.5);
            animation: mp-node linear both;
            animation-timeline: view();
            animation-range: entry 45% entry 70%;
          }
          @keyframes mp-node { to { opacity: 1; transform: scale(1) } }
        }

        .mp-btn { transition: transform .18s ease, filter .18s ease }
        .mp-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .mp-btn:active { transform: translateY(0) scale(.97) }
        .mp-btn:focus-visible { outline: 3px solid ${C.cobre}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .mp-lever, .mp-pilot, .mp-pulse, .mp-busglow, .mp-line, .mp-fade { animation: none !important }
          .mp-wire { clip-path: none !important; animation: none !important }
          .mp-node { opacity: 1 !important; transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            <span className="font-extrabold tracking-[0.08em]">MARCO POZO</span>
            <span
              className={`${mono.className} hidden sm:inline text-[10px] tracking-[0.2em]`}
              style={{ color: C.cobre }}
            >
              SEC-B
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir visita"
        theme={{
          over: 'dark',
          bar: 'rgba(18,23,28,0.94)',
          ink: C.niebla,
          line: C.lineD,
          btnBg: C.amar,
          btnInk: C.pizarra,
        }}
      />

      {/* ── 1 · Hero: el tablero se enciende ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ backgroundColor: C.pizarra }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(720px 420px at 84% 8%, rgba(199,122,62,0.13), transparent 65%), radial-gradient(560px 380px at 8% 100%, rgba(62,142,90,0.08), transparent 60%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-36 pb-14 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <div>
            <p
              className={`${mono.className} mp-fade flex items-center gap-2.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.2em] md:tracking-[0.3em] mb-6 whitespace-nowrap`}
              style={{ color: C.amar, animationDelay: '0.1s' }}
            >
              <span className="h-[2px] w-8 shrink-0" style={{ backgroundColor: C.cobre }} aria-hidden="true" />
              Puerto Montt · SEC Clase B · 24 h
              <span
                className="inline-block w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: C.verdeTxt }}
                aria-hidden="true"
              />
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.7rem,9.5vw,5.4rem)]`}
              style={{ color: C.niebla }}
            >
              <span className="block overflow-hidden">
                <span className="mp-line block" style={{ animationDelay: '0.2s' }}>
                  Tu instalación,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="mp-line block" style={{ animationDelay: '0.32s', color: C.amar }}>
                  bien hecha
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="mp-line block" style={{ animationDelay: '0.44s' }}>
                  y certificada.
                </span>
              </span>
            </h1>
            <p
              className="mp-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '0.62s' }}
            >
              <strong style={{ color: C.niebla }}>Marco Pozo</strong>, técnico
              INACAP con licencia SEC Clase B. Instalaciones eléctricas
              domiciliarias, comerciales e industriales en Puerto Montt y
              alrededores.
            </p>
            <div className="mp-fade mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: '0.78s' }}>
              <BtnWa tone="amar">Pedir visita por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} mp-btn inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-[0.06em] tap-44`}
                style={{ border: '1.5px solid rgba(230,234,236,0.5)', color: C.niebla }}
              >
                Llamar
              </a>
            </div>
            <div
              className="mp-fade mt-6 md:mt-7 flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ animationDelay: '0.95s' }}
            >
              <span className="flex items-center gap-2">
                <Stars value={BIZ.rating2x3Value} color={C.amar} size={15} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.mutedD }}>
                  {BIZ.rating2x3} · {BIZ.reviews2x3} opiniones en 2x3.cl
                </span>
              </span>
              <span className="flex items-center gap-2">
                <Stars value={BIZ.ratingFbValue} color={C.amar} size={15} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.mutedD }}>
                  {BIZ.ratingFb} · {BIZ.reviewsFb} en Facebook
                </span>
              </span>
            </div>
          </div>

          {/* Composición: el tablero ilustrado que se energiza + la foto real encajada */}
          <div className="mp-fade" style={{ animationDelay: '0.2s' }}>
            <Tablero />
            <div className="mt-4 flex items-start gap-4">
              <figure
                className="shrink-0 w-[38%] max-w-[185px]"
                style={{ transform: 'rotate(-1.2deg)' }}
              >
                <div
                  className="p-1.5"
                  style={{
                    backgroundColor: C.niebla,
                    boxShadow: '0 14px 34px rgba(0,0,0,0.4)',
                  }}
                >
                  <Image
                    src={`${IMG}/tablero.webp`}
                    alt="Tablero eléctrico armado por Marco Pozo: automáticos y cableado rojo y verde"
                    width={506}
                    height={900}
                    sizes="(min-width: 1024px) 185px, 38vw"
                    className="block w-full h-auto"
                  />
                </div>
              </figure>
              <div className={`${mono.className} pt-1 text-[10px] md:text-[11px] leading-[1.9] uppercase tracking-[0.14em]`}>
                <p style={{ color: C.cobre }}>Obra real</p>
                <p style={{ color: C.niebla }}>Tablero armado por Marco</p>
                <p style={{ color: C.mutedD }}>
                  Automáticos y cableado
                  <br />
                  vistos en terreno
                </p>
                <p style={{ color: C.mutedD }}>Puerto Montt · Los Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Franja de servicios ── */}
      <section
        aria-label="Áreas de trabajo"
        className="border-y-2"
        style={{ backgroundColor: C.amar, borderColor: C.pizarra }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
          {['DOMICILIARIO', 'COMERCIAL', 'INDUSTRIAL', 'EMPALMES', '24 HORAS'].map(
            (t, i) => (
              <span key={t} className="flex items-center">
                {i > 0 && (
                  <Icon name="zap" className="w-3.5 h-3.5 mx-3 md:mx-4" />
                )}
                <span
                  className={`${display.className} text-base md:text-lg font-bold uppercase tracking-[0.14em]`}
                  style={{ color: C.pizarra }}
                >
                  {t}
                </span>
              </span>
            ),
          )}
        </div>
      </section>

      {/* ── 3 · Servicios: cuadro de cargas ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Ramal n="01" nombre="Cuadro de cargas" icon="zap" dark />
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,6.5vw,4.2rem)]`}
                style={{ color: C.niebla }}
              >
                «Podemos hacer todo tipo de{' '}
                <span style={{ color: C.cobre }}>instalaciones eléctricas»</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                Palabra de Marco. Cada servicio es un circuito de su cuadro:
                revisa qué necesitas y pide la visita.
              </p>
            </Reveal>
          </div>

          {/* el directorio del cuadro, alimentado por su barra de cobre */}
          <Reveal>
            <div
              className="border-l-[3px]"
              style={{ borderColor: C.cobre }}
            >
              <div
                className="px-5 md:px-7 py-3 flex items-center justify-between border-y"
                style={{ backgroundColor: C.panel, borderColor: C.lineD }}
              >
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.mutedD }}>
                  Directorio de circuitos
                </p>
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em]`} style={{ color: C.cobre }}>
                  06 circuitos
                </p>
              </div>
              <ol>
                {CIRCUITOS.map((s, i) => (
                  <li
                    key={s.n}
                    className="grid grid-cols-[auto_1fr_auto] sm:grid-cols-[auto_auto_1fr_auto] items-center gap-x-4 gap-y-1 px-5 md:px-7 py-4 md:py-5 border-b"
                    style={{ borderColor: C.lineD }}
                  >
                    <span
                      className={`${mono.className} text-xs md:text-sm font-semibold tracking-[0.08em]`}
                      style={{ color: C.cobre }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="hidden sm:flex w-10 h-10 items-center justify-center border"
                      style={{ borderColor: C.lineD, color: C.niebla }}
                    >
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span>
                      <span
                        className={`${display.className} block text-lg md:text-xl font-bold uppercase tracking-[0.08em] leading-tight`}
                        style={{ color: C.niebla }}
                      >
                        {s.label}
                      </span>
                      <span className="block text-sm leading-relaxed mt-0.5 max-w-xl" style={{ color: C.mutedD }}>
                        {s.desc}
                        {s.urgente && (
                          <>
                            {' '}
                            <a
                              href={WA_URGENTE}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-semibold underline underline-offset-4 decoration-2 tap-44"
                              style={{ color: C.amar, textDecorationColor: 'rgba(242,194,48,0.4)' }}
                            >
                              Es una urgencia →
                            </a>
                          </>
                        )}
                      </span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{
                          backgroundColor: s.urgente ? C.amar : C.verde,
                          boxShadow: `0 0 10px ${s.urgente ? 'rgba(242,194,48,0.6)' : 'rgba(62,142,90,0.6)'}`,
                        }}
                        aria-hidden="true"
                      />
                      <span
                        className={`${mono.className} hidden md:inline text-[10px] uppercase tracking-[0.18em]`}
                        style={{ color: s.urgente ? C.amar : C.verdeTxt }}
                      >
                        {s.urgente ? '24 H' : 'ON'}
                      </span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Credenciales: la placa del instalador ── */}
      <section
        id="credenciales"
        className="scroll-mt-20"
        style={{ backgroundColor: C.niebla, color: C.pizarra }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Ramal n="02" nombre="Credenciales" icon="sec" dark={false} />
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,6.5vw,4rem)]`}
                style={{ color: C.pizarra }}
              >
                La licencia que{' '}
                <span style={{ color: C.cobreTxt }}>sí importa.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.mutedL }}>
                <p>
                  En Chile, la SEC es quien fiscaliza las instalaciones
                  eléctricas. Un instalador con licencia SEC Clase B trabaja
                  según la norma: protecciones, secciones de cable y puesta a
                  tierra como corresponde.
                </p>
                <p>
                  Eso significa una instalación segura, que se puede declarar
                  y certificar ante la Superintendencia cuando haga falta.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <BtnWa tone="lineL">Hablar con Marco</BtnWa>
              </div>
            </Reveal>
          </div>

          {/* la placa, con sus remaches */}
          <Reveal delay={140}>
            <div
              className="relative p-6 md:p-8"
              style={{
                background: 'linear-gradient(135deg, #EFF3F4 0%, #D4DBDF 55%, #C2CBD0 100%)',
                border: `1px solid ${C.lineL}`,
                boxShadow: '0 18px 44px rgba(18,23,28,0.18), inset 0 1px 0 rgba(255,255,255,0.7)',
              }}
            >
              {[
                'top-2.5 left-2.5',
                'top-2.5 right-2.5',
                'bottom-2.5 left-2.5',
                'bottom-2.5 right-2.5',
              ].map((pos) => (
                <span
                  key={pos}
                  className={`absolute ${pos} w-2.5 h-2.5 rounded-full`}
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, #F4F7F8, #8E9AA2)',
                    boxShadow: 'inset 0 1px 2px rgba(18,23,28,0.45)',
                  }}
                  aria-hidden="true"
                />
              ))}
              <p
                className={`${mono.className} text-[10px] uppercase tracking-[0.28em] mb-5 flex items-center justify-between`}
                style={{ color: C.cobreTxt }}
              >
                <span>Placa del instalador</span>
                <span>CL · CH</span>
              </p>
              <dl className="space-y-0">
                {PLACA.map((f) => (
                  <div
                    key={f.k}
                    className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-3 py-2.5 border-t items-baseline"
                    style={{ borderColor: 'rgba(18,23,28,0.16)' }}
                  >
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(18,23,28,0.6)' }}>
                      {f.k}
                    </dt>
                    <dd
                      className={`${display.className} ${f.strong ? 'font-extrabold text-lg md:text-xl' : 'font-semibold text-sm md:text-base'} uppercase tracking-[0.05em] leading-tight`}
                      style={
                        f.chip
                          ? {
                              display: 'inline-block',
                              backgroundColor: f.chip,
                              color: C.pizarra,
                              padding: '2px 8px',
                              width: 'fit-content',
                            }
                          : { color: C.pizarra }
                      }
                    >
                      {f.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p
                className={`${mono.className} mt-5 text-[9px] uppercase tracking-[0.2em] text-right`}
                style={{ color: 'rgba(18,23,28,0.5)' }}
              >
                Datos de su perfil público · 2x3.cl
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Obra real: evidencia de terreno ── */}
      <section style={{ backgroundColor: '#D9E0E3', color: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div>
            <Ramal n="03" nombre="Obra real" icon="empalme" dark={false} />
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,6.5vw,4rem)]`}
                style={{ color: C.pizarra }}
              >
                Trabajo hecho en el sur,{' '}
                <span style={{ color: C.cobreTxt }}>con lluvia y todo.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.mutedL }}>
                <p>
                  Un poste de empalme nuevo en terreno y la canalización de
                  los medidores: fotos reales de sus trabajos en la zona,
                  no de catálogo.
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.verdeOsc }}>
                  Obra real · Puerto Montt y alrededores
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex items-start gap-5 md:gap-7">
            {[
              {
                src: `${IMG}/empalme.webp`,
                alt: 'Poste de empalme eléctrico nuevo instalado en terreno, con bosque y lluvia del sur',
                cap: 'EMPALME NUEVO',
                rot: '-1.4deg',
                shift: '',
              },
              {
                src: `${IMG}/medidores.webp`,
                alt: 'Cajas de medidor y canalización eléctrica instaladas en un poste',
                cap: 'CANALIZACIÓN Y MEDIDORES',
                rot: '1.2deg',
                shift: 'mt-8 md:mt-12',
              },
            ].map((f) => (
              <figure key={f.src} className={`w-[46%] max-w-[220px] ${f.shift}`} style={{ transform: `rotate(${f.rot})` }}>
                <div
                  className="p-1.5"
                  style={{
                    backgroundColor: '#F4F7F8',
                    border: `1px solid ${C.lineL}`,
                    boxShadow: '0 12px 30px rgba(18,23,28,0.2)',
                  }}
                >
                  <div className="overflow-hidden" style={{ aspectRatio: '4/5' }}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={253}
                      height={450}
                      sizes="(min-width: 1024px) 220px, 46vw"
                      className="block w-full h-full object-cover"
                      style={{ objectPosition: '50% 18%' }}
                    />
                  </div>
                </div>
                <figcaption className={`${mono.className} mt-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.18em] leading-relaxed`} style={{ color: 'rgba(18,23,28,0.6)' }}>
                  {f.cap}
                  <br />
                  <span style={{ color: C.cobreTxt }}>Obra real · Pto. Montt</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div>
            <Ramal n="04" nombre="Opiniones" icon="ampolleta" dark />
            <Reveal>
              <p
                className={`${display.className} font-extrabold leading-none text-[clamp(4.6rem,14vw,8.5rem)]`}
                style={{ color: C.niebla }}
              >
                {BIZ.rating2x3}
              </p>
              <div className="mt-3">
                <Stars value={BIZ.rating2x3Value} color={C.amar} size={22} />
              </div>
              <div className={`${mono.className} mt-5 space-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.mutedD }}>
                <p>
                  <span style={{ color: C.verdeTxt }}>●</span> 2x3.cl · {BIZ.reviews2x3} opiniones
                </p>
                <p>
                  <span style={{ color: C.verdeTxt }}>●</span> Facebook · {BIZ.reviewsFb} opiniones
                </p>
              </div>
              <p className="mt-6 text-sm md:text-base leading-relaxed max-w-xs" style={{ color: C.mutedD }}>
                Todas sus opiniones publicadas son cinco estrellas. Esto
                escriben quienes ya lo contrataron:
              </p>
            </Reveal>
          </div>
          <div className="space-y-7 md:space-y-8">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <blockquote
                  className="border-l-2 pl-5 md:pl-6"
                  style={{ borderColor: i === 0 ? C.amar : C.cobre }}
                >
                  <p
                    className={`${i === 0 ? 'text-lg md:text-2xl' : 'text-base md:text-lg'} leading-relaxed font-medium`}
                    style={{ color: C.niebla }}
                  >
                    «{r.text}»
                  </p>
                  <footer className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.cobre }}>
                    <span>{r.author}</span>
                    <span style={{ color: 'rgba(230,234,236,0.4)' }}>·</span>
                    <span style={{ color: 'rgba(230,234,236,0.55)' }}>2x3.cl</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7 · Cómo trabaja: tres etapas del circuito ── */}
      <section style={{ backgroundColor: C.niebla, color: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Ramal n="05" nombre="Así trabaja" icon="tierra" dark={false} />
          <Reveal>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,6.5vw,4rem)] max-w-3xl`}
              style={{ color: C.pizarra }}
            >
              Del mensaje a la luz{' '}
              <span style={{ color: C.cobreTxt }}>encendida.</span>
            </h2>
          </Reveal>
          <ol className="relative mt-12 md:mt-16 grid md:grid-cols-3 gap-10 md:gap-8">
            {/* el conductor que une las tres etapas */}
            <span
              className="hidden md:block absolute top-[26px] left-[12%] right-[12%] h-[2px]"
              style={{ backgroundColor: C.cobre }}
              aria-hidden="true"
            />
            <span
              className="md:hidden absolute left-[21px] top-6 bottom-8 w-[2px]"
              style={{ backgroundColor: 'rgba(199,122,62,0.5)' }}
              aria-hidden="true"
            />
            {[
              {
                icon: 'mensaje',
                paso: 'PASO 01',
                t: 'Le escribes por WhatsApp',
                d: 'Le cuentas qué necesitas: una instalación nueva, un empalme o una falla. Sus clientes destacan que siempre contesta.',
              },
              {
                icon: 'agenda',
                paso: 'PASO 02',
                t: 'Coordinan la visita',
                d: 'Agenda el día y llega cuando dice que llega. En sus opiniones lo repiten: «llega el día que se agenda».',
              },
              {
                icon: 'ampolleta',
                paso: 'PASO 03',
                t: 'Queda andando y explicado',
                d: 'Deja la instalación funcionando y te explica con peras y manzanas lo que hizo, para que sepas qué quedó en tu tablero.',
              },
            ].map((s) => (
              <li key={s.paso} className="relative flex md:flex-col gap-4 md:gap-0">
                <span
                  className="relative z-10 shrink-0 w-11 h-11 md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: C.pizarra,
                    color: C.amar,
                    boxShadow: `0 0 0 4px ${C.niebla}, 0 0 0 5px ${C.cobre}`,
                  }}
                >
                  <Icon name={s.icon} className="w-5 h-5" />
                </span>
                <div className="md:mt-5">
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.cobreTxt }}>
                    {s.paso}
                  </p>
                  <h3 className={`${display.className} mt-1.5 text-xl md:text-2xl font-bold uppercase tracking-[0.05em]`} style={{ color: C.pizarra }}>
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed max-w-xs" style={{ color: C.mutedL }}>
                    {s.d}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── 8 · Zona de atención ── */}
      <section id="zona" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Ramal n="06" nombre="Zona de atención" icon="reloj" dark />
          <Reveal>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,6.5vw,4.2rem)] max-w-4xl mb-10 md:mb-14`}
              style={{ color: C.niebla }}
            >
              {BIZ.city} y alrededores,{' '}
              <span style={{ color: C.amar }}>a cualquier hora.</span>
            </h2>
          </Reveal>
          {/* estaciones sobre el troncal */}
          <div className="relative">
            <span
              className="hidden sm:block absolute top-0 left-0 right-0 h-[2px]"
              style={{ backgroundColor: C.cobre }}
              aria-hidden="true"
            />
            <div className="grid sm:grid-cols-3 gap-px sm:border border-t sm:border-t-0" style={{ borderColor: C.lineD, backgroundColor: C.lineD }}>
              {[
                {
                  k: 'PUERTO MONTT',
                  d: 'Base del servicio: casas, locales e industrias de la ciudad y sus sectores.',
                },
                {
                  k: 'ALREDEDORES',
                  d: 'Sectores rurales y localidades de la Región de Los Lagos. Consulta por tu sector.',
                },
                {
                  k: '24 HORAS',
                  d: 'Su WhatsApp Business figura abierto las 24 horas, todos los días.',
                  hot: true,
                },
              ].map((b) => (
                <div key={b.k} className="relative px-6 md:px-8 pt-7 pb-6" style={{ backgroundColor: C.panel }}>
                  <span
                    className="hidden sm:block absolute -top-[5px] left-8 w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: b.hot ? C.amar : C.cobre }}
                    aria-hidden="true"
                  />
                  <p
                    className={`${display.className} font-extrabold uppercase tracking-[0.08em] text-2xl md:text-3xl`}
                    style={{ color: b.hot ? C.amar : C.niebla }}
                  >
                    {b.k}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: C.mutedD }}>
                    {b.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={120}>
            <p className="mt-8 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.mutedD }}>
              Sin local ni dirección publicada: Marco va a donde está el
              trabajo. Coordinas la visita directo por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Cierre: se cierra el circuito ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pozo }}>
        {/* unifilar tenue de fondo: la línea llega a la ampolleta */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full pointer-events-none"
          viewBox="0 0 1200 140"
          preserveAspectRatio="xMidYMax slice"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M0 110 H420 V86 H700 V110 H960"
            stroke={C.cobre}
            strokeWidth="2"
            opacity="0.35"
          />
          <g stroke={C.cobre} strokeWidth="2" opacity="0.35">
            <circle cx="700" cy="64" r="12" />
            <path d="M700 52v-8" />
            <line x1="960" y1="104" x2="972" y2="104" />
            <line x1="963" y1="110" x2="969" y2="110" />
            <line x1="965" y1="116" x2="967" y2="116" />
          </g>
          <circle cx="1200" cy="110" r="0" />
        </svg>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-5`}
              style={{ color: C.verdeTxt }}
            >
              Circuito cerrado · queda energizado
            </p>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.6rem,8.5vw,5rem)]`}
              style={{ color: C.niebla }}
            >
              ¿Necesitas un{' '}
              <span style={{ color: C.amar }}>electricista?</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbele a Marco por WhatsApp, cuéntale qué pasa y coordinan
              la visita en Puerto Montt y alrededores. Atiende las 24 horas.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <BtnWa tone="amar">Pedir visita por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-extrabold uppercase tracking-[0.08em] text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                style={{ color: C.niebla, textDecorationColor: C.cobre }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.pozo, color: C.niebla }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold uppercase tracking-[0.08em] text-xl md:text-2xl flex items-baseline gap-2`}>
                Marco Pozo
                <span className={`${mono.className} text-[10px] tracking-[0.2em] font-normal`} style={{ color: C.cobre }}>
                  SEC-B
                </span>
              </p>
              <p className="text-sm mt-1" style={{ color: C.mutedD }}>
                {BIZ.brand} · {BIZ.city}, {BIZ.region} · 24 h
              </p>
            </div>
            <nav
              className={`${mono.className} flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.16em]`}
              aria-label="Pie"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.verdeTxt }}>
                WhatsApp
              </a>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Instagram
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                Facebook
              </a>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3.5 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(230,234,236,0.6)' }}>
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
              para {BIZ.name}, {BIZ.rubro.toLowerCase()}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.amar }}
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
