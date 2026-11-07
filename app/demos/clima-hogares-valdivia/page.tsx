import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

// Space Grotesk de titulares + Inter de texto + IBM Plex Mono de rótulos.
const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'clima-hogares-valdivia',
  title: 'Clima Hogares · estufas a pellet y aire acondicionado en Valdivia',
  description:
    'Venta, instalación, mantención y reparación de estufas a pellet y aire acondicionado split, a domicilio en Valdivia. Los Traros 1857. 5,0 en Google.',
  image: '/demos/clima-hogares-valdivia/estufa-pellet-living.webp',
})

// De su logo: el naranjo del calor y el azul del frío, sobre carbón y niebla.
const C = {
  carbon: '#1B1F24',
  pozo: '#13171B',
  panel: '#23282E',
  niebla: '#EEF2F5',
  papel: '#F7F9FB',
  blanco: '#FFFFFF',
  naranjo: '#F28C28',
  naranjoInk: '#9A4B06', // pasa 4.5:1 sobre niebla
  azul: '#2E6FB7',
  azulInk: '#1F4E85', // pasa 4.5:1 sobre niebla
  azulClaro: '#8FBBE8', // pasa 4.5:1 sobre carbón
  mutedD: 'rgba(245,247,250,0.72)',
  mutedD2: 'rgba(245,247,250,0.55)',
  mutedL: 'rgba(27,31,36,0.72)',
  mutedL2: 'rgba(27,31,36,0.66)',
  lineD: 'rgba(245,247,250,0.14)',
  lineL: 'rgba(27,31,36,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Mantención', href: '#mantencion' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#donde' },
]

/** Marcador de dos tonos: mitad calor, mitad frío. El motivo del sitio. */
function Dos({ size = 9 }: { size?: number }) {
  return (
    <span
      className="inline-block shrink-0 rounded-[3px]"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${C.naranjo} 0% 50%, ${C.azul} 50% 100%)`,
        boxShadow: `0 0 9px rgba(242,140,40,0.5)`,
      }}
      aria-hidden="true"
    />
  )
}

/** Rótulo de sección tipo pauta técnica: número + marca + línea. */
function Rotulo({ n, children, dark = false }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] mb-5`}
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <Dos />
      <span className="whitespace-nowrap">
        <span style={{ color: dark ? C.naranjo : C.naranjoInk }}>{n}</span> · {children}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'naranjo' | 'lineL' | 'lineD' | 'carbon'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'naranjo'
      ? { backgroundColor: C.naranjo, color: C.carbon }
      : tone === 'carbon'
        ? { backgroundColor: C.carbon, color: '#F5F7FA' }
        : tone === 'lineL'
          ? { border: '1.5px solid rgba(27,31,36,0.45)', color: C.carbon }
          : { border: '1.5px solid rgba(245,247,250,0.45)', color: '#F5F7FA' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="ch-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/* Iconos de trazo único: llama del pellet, copo del split, check, pin. */
function Ic({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    llama: (
      <>
        <path d="M12 3.2c2 3.4 5.3 6.1 5.3 9.8a5.3 5.3 0 1 1-10.6 0c0-3.7 3.3-6.4 5.3-9.8z" />
        <path d="M12 10.8c1 1.6 2.5 2.9 2.5 4.7a2.5 2.5 0 1 1-5 0c0-1.8 1.5-3.1 2.5-4.7z" />
      </>
    ),
    copo: (
      <>
        <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
        <path d="M12 3l-1.8 1.8M12 3l1.8 1.8M12 21l-1.8-1.8M12 21l1.8-1.8" />
        <path d="M4.2 7.5l2.5.5M4.2 7.5L5 5.2M19.8 16.5l-2.5-.5M19.8 16.5L19 18.8M4.2 16.5l2.5-.5M4.2 16.5L5 18.8M19.8 7.5l-2.5.5M19.8 7.5L19 5.2" />
      </>
    ),
    check: <path d="M4 12.5 L9.5 18 L20 6.5" />,
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    ventana: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M4 12h16M12 4v16" />
      </>
    ),
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

const PELLET = [
  { n: 'P-01', t: 'Venta de equipos', d: 'Te orientan para elegir la estufa que le hace sentido a tu casa.' },
  { n: 'P-02', t: 'Instalación con su ducto', d: 'La estufa queda instalada con su caño, lista para encender.' },
  { n: 'P-03', t: 'Mantención', d: 'Limpieza y revisión completa antes de que llegue el frío.' },
  { n: 'P-04', t: 'Reparación', d: 'Diagnóstico de la falla y reparación, incluidos los caños de la estufa.' },
] as const

const AIRE = [
  { n: 'A-01', t: 'Venta de equipos split', d: 'El equipo correcto para el espacio que quieres climatizar.' },
  { n: 'A-02', t: 'Instalación completa', d: 'Unidad interior en el muro y unidad exterior, bien montadas.' },
  { n: 'A-03', t: 'Mantención', d: 'Limpieza y revisión para que el equipo rinda y dure.' },
  { n: 'A-04', t: 'Reparación', d: 'Cuando el split no enfría o falla, se revisa y se repara.' },
] as const

const REPASO = [
  { n: 'M-01', t: 'Limpieza interior', d: 'La ceniza y los restos de combustión salen del circuito.' },
  { n: 'M-02', t: 'Revisión del motor', d: 'La pieza que alimenta el pellet, revisada y afinada.' },
  { n: 'M-03', t: 'Caño y ducto', d: 'El ducto se revisa y, si hace falta, el caño también se repara.' },
  { n: 'M-04', t: 'Recomendaciones de uso', d: 'Sales sabiendo usar mejor tu estufa, explicado en simple.' },
] as const

const OBRAS = [
  {
    src: 'estufa-instalada.webp', w: 1440, h: 1440, ratio: 'aspect-[4/3]',
    tag: 'INSTALACIÓN · PELLET', cap: 'La estufa en su lugar, junto al muro de piedra',
    alt: 'Estufa a pellet instalada junto a un muro de piedra y un ventanal',
  },
  {
    src: 'instalacion-exterior.webp', w: 1200, h: 1600, ratio: 'aspect-[3/4]',
    tag: 'INSTALACIÓN · SPLIT', cap: 'La unidad exterior queda firme en el muro',
    alt: 'El técnico asegura la unidad exterior de un aire acondicionado en un muro de madera',
  },
  {
    src: 'estufa-instalada-2.webp', w: 1440, h: 1440, ratio: 'aspect-[4/3]',
    tag: 'INSTALACIÓN · PELLET', cap: 'El mismo trabajo, otro ángulo',
    alt: 'La esquina de piedra donde quedó instalada la estufa a pellet',
  },
  {
    src: 'estufa-negra.webp', w: 1200, h: 1600, ratio: 'aspect-[3/4]',
    tag: 'EQUIPO NUEVO', cap: 'Recién llegada, lista para su instalación',
    alt: 'Una estufa a pellet nueva de cuerpo claro y frente negro',
  },
  {
    src: 'aire-living.webp', w: 1440, h: 1440, ratio: 'aspect-[4/3]',
    tag: 'SPLIT EN LIVING', cap: 'Unidad interior y exterior en un mismo trabajo',
    alt: 'Aire acondicionado split instalado en un living, con su unidad exterior al fondo',
  },
  {
    src: 'estufa-detalle.webp', w: 1200, h: 1600, ratio: 'aspect-[3/4]',
    tag: 'DETALLE', cap: 'La tapa de carga, de cerca',
    alt: 'Detalle de la tapa superior y la puerta de una estufa a pellet nueva',
  },
] as const

/**
 * El dial del hero: la aguja parte en FRÍO (azul), barre hasta CALOR
 * (naranjo) mientras el arco se dibuja y la foto toma un velo cálido;
 * luego vuelve al punto medio y aparece TEMPERATURA JUSTA. Loop de una
 * pasada (~4,8 s) con un temblor sutil al final; la llama titila siempre.
 */
function Dial() {
  return (
    <svg viewBox="0 0 120 96" className="block w-full h-auto" role="img" aria-label="Dial de temperatura: de frío a calor, fijado en temperatura justa">
      <defs>
        <linearGradient id="chg" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor={C.azul} />
          <stop offset="1" stopColor={C.naranjo} />
        </linearGradient>
      </defs>
      {/* pista */}
      <path d="M23.6 31 A42 42 0 1 1 96.4 31" fill="none" stroke="rgba(27,31,36,0.14)" strokeWidth="7" strokeLinecap="round" />
      {/* arco que se dibuja con la aguja */}
      <path className="ch-arc" d="M23.6 31 A42 42 0 1 1 96.4 31" fill="none" stroke="url(#chg)" strokeWidth="5" strokeLinecap="round" strokeDasharray="176" strokeDashoffset="176" />
      {/* ticks */}
      <g stroke="rgba(27,31,36,0.4)" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
        <line x1="23.6" y1="31" x2="28.8" y2="34" />
        <line x1="39" y1="15.6" x2="42" y2="20.8" />
        <line x1="60" y1="10" x2="60" y2="16" />
        <line x1="81" y1="15.6" x2="78" y2="20.8" />
        <line x1="96.4" y1="31" x2="91.2" y2="34" />
      </g>
      {/* aguja: el g externo hace el barrido, el interno el temblor final */}
      <g className="ch-needle">
        <g className="ch-needle-w">
          <line x1="60" y1="52" x2="60" y2="20" stroke={C.carbon} strokeWidth="2.6" strokeLinecap="round" />
          <line x1="60" y1="52" x2="60" y2="61" stroke={C.carbon} strokeWidth="3.4" strokeLinecap="round" opacity="0.5" />
        </g>
      </g>
      <circle cx="60" cy="52" r="4.6" fill={C.carbon} />
      <circle cx="60" cy="52" r="1.8" fill={C.naranjo} />
      {/* extremos */}
      <text x="10" y="88" fontSize="8" letterSpacing="1.2" fill={C.azulInk} className={mono.className} fontWeight="600">FRÍO</text>
      <text x="110" y="88" textAnchor="end" fontSize="8" letterSpacing="1.2" fill={C.naranjoInk} className={mono.className} fontWeight="600">CALOR</text>
    </svg>
  )
}

function Llama({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label="Llama encendida">
      <defs>
        <linearGradient id="chfl" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0" stopColor="#E05A0E" />
          <stop offset="1" stopColor="#FFC25E" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.4c2.1 3.5 5.6 6.4 5.6 10.3a5.6 5.6 0 1 1-11.2 0C6.4 8.8 9.9 5.9 12 2.4z"
        fill="url(#chfl)"
      />
      <path d="M12 10.6c1.1 1.7 2.7 3 2.7 5a2.7 2.7 0 1 1-5.4 0c0-2 1.6-3.3 2.7-5z" fill="#FFF3D6" />
    </svg>
  )
}

/** Placa de foto con rótulo mono tipo ficha de terreno. */
function Plate({
  src, w, h, alt, ratio, tag, caption, dark = false,
}: {
  src: string; w: number; h: number; alt: string; ratio: string; tag: string; caption?: string; dark?: boolean
}) {
  const line = dark ? C.lineD : C.lineL
  return (
    <figure
      className="group overflow-hidden rounded-xl"
      style={{ border: `1.5px solid ${line}`, backgroundColor: dark ? C.panel : C.blanco }}
    >
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 32vw, 46vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <figcaption className="px-4 py-3 flex flex-col gap-1">
        <span className={`${mono.className} text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: dark ? C.naranjo : C.naranjoInk }}>
          {tag}
        </span>
        {caption && (
          <span className="text-[11px] leading-snug" style={{ color: dark ? C.mutedD : C.mutedL }}>
            {caption}
          </span>
        )}
      </figcaption>
    </figure>
  )
}

export default function ClimaHogaresPage() {
  const h1a = ['Tu', 'casa', 'a', 'la']
  const h1b = ['temperatura', 'justa.']
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.niebla, color: C.carbon }}
    >
      <style>{`
        /* Entradas del hero */
        @keyframes ch-rise { from { opacity: 0; transform: translateY(105%) } to { opacity: 1; transform: none } }
        @keyframes ch-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .ch-w { display: inline-block; overflow: hidden; vertical-align: bottom }
        .ch-w > span { display: inline-block; animation: ch-rise .85s cubic-bezier(.22,.61,.2,1) both }
        .ch-fade { animation: ch-fade .85s cubic-bezier(.22,.61,.2,1) both }

        /* El dial: barrido frío → calor → punto medio (una pasada) */
        .ch-needle { transform-box: view-box; transform-origin: 60px 52px; animation: ch-needle 4.8s cubic-bezier(.5,.05,.25,1) .35s both }
        @keyframes ch-needle {
          0%, 14% { transform: rotate(-58deg) }
          46%, 58% { transform: rotate(58deg) }
          80% { transform: rotate(-3.5deg) }
          89% { transform: rotate(2deg) }
          100% { transform: rotate(0deg) }
        }
        .ch-needle-w { transform-box: view-box; transform-origin: 60px 52px; animation: ch-wig 3.4s ease-in-out 5.4s infinite }
        @keyframes ch-wig { 0%, 100% { transform: rotate(-1.6deg) } 50% { transform: rotate(1.6deg) } }
        .ch-arc { animation: ch-arc 4.8s cubic-bezier(.5,.05,.25,1) .35s both }
        @keyframes ch-arc {
          0%, 14% { stroke-dashoffset: 176 }
          46%, 100% { stroke-dashoffset: 0 }
        }

        /* Velos de temperatura sobre la foto del hero */
        .ch-veil-c { animation: ch-veilc 4.8s ease .35s both }
        @keyframes ch-veilc { 0% { opacity: .5 } 30% { opacity: .4 } 48%, 100% { opacity: 0 } }
        .ch-veil-w { animation: ch-veilw 4.8s ease .35s both }
        @keyframes ch-veilw { 0%, 26% { opacity: 0 } 52%, 60% { opacity: .8 } 82%, 100% { opacity: .3 } }

        /* El rótulo TEMPERATURA JUSTA aparece cuando la aguja llega al medio */
        .ch-justa { animation: ch-justa 4.8s cubic-bezier(.3,.9,.3,1) .35s both }
        @keyframes ch-justa { 0%, 72% { opacity: 0; transform: translateY(5px) } 84%, 100% { opacity: 1; transform: none } }

        /* La llama titila junto a la estufa */
        .ch-flame { transform-box: fill-box; transform-origin: 50% 100%; animation: ch-flame 1.7s ease-in-out infinite }
        @keyframes ch-flame {
          0%, 100% { transform: scale(1,1); opacity: .92 }
          28% { transform: scale(1.07,1.13); opacity: 1 }
          55% { transform: scale(.95,1.05); opacity: .85 }
          78% { transform: scale(1.04,1.1); opacity: .97 }
        }

        /* El divisor entre mundos se dibuja al entrar (naranjo un lado, azul el otro) */
        @supports (animation-timeline: view()) {
          .ch-div-i { animation: ch-divx linear both; animation-timeline: view(); animation-range: entry 5% entry 75% }
          @media (min-width: 1024px) { .ch-div-i { animation-name: ch-divy } }
        }
        @keyframes ch-divx { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        @keyframes ch-divy { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        .ch-div-i { transform-origin: center; background: linear-gradient(180deg, ${C.naranjo} 0% 50%, ${C.azul} 50% 100%) }
        @media (min-width: 1024px) {
          .ch-div-i { background: linear-gradient(90deg, ${C.naranjo} 0% 50%, ${C.azul} 50% 100%) }
        }

        .ch-btn { transition: transform .18s ease, filter .18s ease }
        .ch-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .ch-btn:active { transform: scale(.97) }
        .ch-page a:focus-visible { outline: 3px solid ${C.naranjo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .ch-w > span, .ch-fade, .ch-arc, .ch-justa { animation: none !important }
          .ch-needle { animation: none !important; transform: rotate(0deg) }
          .ch-needle-w, .ch-flame, .ch-div-i { animation: none !important }
          .ch-arc { stroke-dashoffset: 0 }
          .ch-veil-c { animation: none !important; opacity: 0 }
          .ch-veil-w { animation: none !important; opacity: .28 }
          .ch-justa { opacity: 1; transform: none }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-tight font-semibold">Clima Hogares</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(238,242,245,0.94)',
          ink: C.carbon,
          line: C.lineL,
          btnBg: C.naranjo,
          btnInk: C.carbon,
        }}
      />

      <div className="ch-page">
        {/* ── 1 · Hero: el dial que busca la temperatura justa ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.niebla }}>
          {/* retícula técnica tenue */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(27,31,36,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(27,31,36,0.035) 1px, transparent 1px)',
              backgroundSize: '44px 44px',
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(560px 340px at 88% 8%, rgba(242,140,40,0.14), transparent 62%), radial-gradient(480px 320px at 2% 96%, rgba(46,111,183,0.12), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-36 pb-10 md:pb-16 grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-14 items-center">
            <div>
              <p
                className={`${mono.className} ch-fade flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] mb-5`}
                style={{ color: C.mutedL, animationDelay: '0.08s' }}
              >
                <Dos />
                <span style={{ color: C.naranjoInk }}>Valdivia</span>
                <span aria-hidden="true">·</span>
                <span>Estufas a pellet</span>
                <span aria-hidden="true">·</span>
                <span style={{ color: C.azulInk }}>Aire acondicionado</span>
              </p>
              <h1
                className={`${display.className} font-bold leading-[1.04] tracking-[-0.02em] text-[clamp(2.55rem,9.8vw,4.7rem)]`}
                style={{ color: C.carbon }}
              >
                <span className="block">
                  {h1a.map((w, i) => (
                    <span className="ch-w" key={w}>
                      <span style={{ animationDelay: `${0.18 + i * 0.09}s` }}>{w}</span>
                      {i < h1a.length - 1 && <span aria-hidden="true">&nbsp;</span>}
                    </span>
                  ))}
                </span>
                <span className="block">
                  {h1b.map((w, i) => (
                    <span className="ch-w" key={w}>
                      <span
                        style={{
                          animationDelay: `${0.56 + i * 0.09}s`,
                          backgroundImage: `linear-gradient(96deg, ${C.naranjoInk} 0%, #C55E10 38%, ${C.azulInk} 100%)`,
                          WebkitBackgroundClip: 'text',
                          backgroundClip: 'text',
                          color: 'transparent',
                        }}
                      >
                        {w}
                      </span>
                      {i < h1b.length - 1 && <span aria-hidden="true">&nbsp;</span>}
                    </span>
                  ))}
                </span>
              </h1>
              <p
                className="ch-fade mt-4 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedL, animationDelay: '0.78s' }}
              >
                Venta, instalación, mantención y reparación de estufas a
                pellet y aire acondicionado, a domicilio en {BIZ.city}.
              </p>
              <div className="ch-fade mt-5 flex flex-col sm:flex-row gap-3 sm:items-center" style={{ animationDelay: '0.9s' }}>
                <Btn href={WA_LINK} tone="naranjo">
                  Cotiza por WhatsApp
                </Btn>
                <Btn href="#trabajos" tone="lineL" external={false}>
                  Ver trabajos
                </Btn>
              </div>
              <div className="ch-fade mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ animationDelay: '1s' }}>
                <Stars value={BIZ.ratingValue} color={C.naranjoInk} size={16} />
                <span className="text-sm font-semibold" style={{ color: C.carbon }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.mutedL }}>
                  · {BIZ.reviews} opiniones
                </span>
              </div>
            </div>

            {/* La estufa encendida con su dial y su llama */}
            <figure className="ch-fade" style={{ animationDelay: '0.5s' }}>
              <div
                className="relative overflow-hidden rounded-2xl h-[330px] md:h-[470px]"
                style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.blanco }}
              >
                <Image
                  src={`${IMG}/estufa-pellet-living.webp`}
                  alt="Estufa a pellet instalada y encendida en una casa de Valdivia, con su ducto al cielo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 45%' }}
                />
                {/* velo frío que se retira */}
                <div
                  className="ch-veil-c absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(195deg, rgba(46,111,183,0.32) 0%, rgba(46,111,183,0.12) 55%, transparent 100%)' }}
                  aria-hidden="true"
                />
                {/* velo cálido que llega con el calor */}
                <div
                  className="ch-veil-w absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(20deg, rgba(242,140,40,0.55) 0%, rgba(242,140,40,0.12) 52%, transparent 82%)' }}
                  aria-hidden="true"
                />
                {/* el dial */}
                <div
                  className="absolute top-3 right-3 w-[128px] rounded-xl p-1.5 pb-1 shadow-sm"
                  style={{ backgroundColor: 'rgba(255,255,255,0.82)', border: '1px solid rgba(27,31,36,0.14)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}
                >
                  <Dial />
                  <p className={`${mono.className} ch-justa text-center text-[7.5px] font-semibold uppercase tracking-[0.16em] pb-1`} style={{ color: C.naranjoInk }}>
                    Temperatura justa
                  </p>
                </div>
                {/* la llama junto a la estufa */}
                <div className="absolute left-[30%] top-[62%] pointer-events-none" aria-hidden="true">
                  <span
                    className="absolute -inset-5 rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(242,140,40,0.5) 0%, transparent 68%)' }}
                  />
                  <Llama className="ch-flame relative w-7 h-7" />
                </div>
                <figcaption
                  className={`${mono.className} absolute bottom-0 inset-x-0 px-4 py-2.5 flex items-baseline justify-between gap-3 text-[9px] font-semibold uppercase tracking-[0.2em]`}
                  style={{ color: 'rgba(255,255,255,0.92)', background: 'linear-gradient(0deg, rgba(27,31,36,0.72), transparent)' }}
                >
                  <span>Estufa instalada con su ducto</span>
                  <span className="shrink-0" style={{ color: 'rgba(255,255,255,0.7)' }}>Fig. 01</span>
                </figcaption>
              </div>
            </figure>
          </div>
          {/* la línea de temperatura: de calor a frío */}
          <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${C.naranjo}, ${C.azul})` }} aria-hidden="true" />
        </section>

        {/* ── 2 · Dos mundos, un servicio ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo n="01">Dos climas, un mismo servicio</Rotulo>
              <div className="grid lg:grid-cols-[1.25fr_1fr] gap-5 md:gap-10 items-end">
                <h2
                  className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,7vw,3.6rem)]`}
                >
                  Calor en invierno,{' '}
                  <span style={{ color: C.azulInk }}>fresco en verano.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                  Un mismo técnico para los dos equipos de tu casa: la
                  estufa que te calienta y el split que te refresca.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 md:mt-14 grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12">
              {/* lado calor */}
              <Reveal>
                <div>
                  <div className="flex items-center gap-3.5">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(242,140,40,0.14)', color: C.naranjoInk }}
                    >
                      <Ic name="llama" className="w-[22px] h-[22px]" />
                    </span>
                    <div>
                      <p className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.naranjoInk }}>
                        Lado calor
                      </p>
                      <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight`}>
                        Estufas a pellet
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-6">
                    {PELLET.map((s) => (
                      <li key={s.n} className="flex gap-4 py-4 border-b last:border-b-0" style={{ borderColor: C.lineL }}>
                        <span className={`${mono.className} text-[10px] font-semibold tracking-[0.14em] shrink-0 pt-1.5 w-8`} style={{ color: C.naranjoInk }}>
                          {s.n}
                        </span>
                        <div>
                          <h4 className={`${display.className} font-semibold text-base md:text-lg leading-tight`}>{s.t}</h4>
                          <p className="mt-1 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedL }}>
                            {s.d}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <figure className="mt-6 overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineL}` }}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`${IMG}/estufa-roja.webp`}
                        alt="Una estufa a pellet roja encendida, con el fuego a la vista"
                        fill
                        sizes="(min-width: 1024px) 42vw, 88vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 40%' }}
                      />
                    </div>
                    <figcaption className="px-4 py-3 flex items-baseline justify-between gap-3" style={{ backgroundColor: C.papel }}>
                      <span className={`${mono.className} text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.naranjoInk }}>
                        Encendida
                      </span>
                      <span className="text-[11px] text-right leading-snug" style={{ color: C.mutedL }}>
                        El calor que se ve
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </Reveal>

              {/* el divisor: naranjo al lado del pellet, azul al lado del aire */}
              <div className="ch-div relative self-stretch" aria-hidden="true">
                <div className="ch-div-i absolute left-0 right-0 top-0 bottom-0 h-[4px] lg:h-auto lg:w-[4px] lg:left-1/2 lg:-translate-x-1/2 lg:top-0 rounded-full" />
                <span
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    background: `conic-gradient(${C.naranjo} 0 50%, ${C.azul} 50% 100%)`,
                    border: `2.5px solid ${C.blanco}`,
                    boxShadow: '0 2px 10px rgba(27,31,36,0.18)',
                  }}
                >
                  <span className="block w-[2px] h-3.5 rounded-full -translate-y-0.5" style={{ backgroundColor: C.blanco }} />
                </span>
              </div>

              {/* lado frío */}
              <Reveal delay={120}>
                <div>
                  <div className="flex items-center gap-3.5">
                    <span
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(46,111,183,0.12)', color: C.azulInk }}
                    >
                      <Ic name="copo" className="w-[22px] h-[22px]" />
                    </span>
                    <div>
                      <p className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.azulInk }}>
                        Lado frío
                      </p>
                      <h3 className={`${display.className} font-bold text-2xl md:text-3xl leading-tight`}>
                        Aire acondicionado
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-6">
                    {AIRE.map((s) => (
                      <li key={s.n} className="flex gap-4 py-4 border-b last:border-b-0" style={{ borderColor: C.lineL }}>
                        <span className={`${mono.className} text-[10px] font-semibold tracking-[0.14em] shrink-0 pt-1.5 w-8`} style={{ color: C.azulInk }}>
                          {s.n}
                        </span>
                        <div>
                          <h4 className={`${display.className} font-semibold text-base md:text-lg leading-tight`}>{s.t}</h4>
                          <p className="mt-1 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedL }}>
                            {s.d}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <figure className="mt-6 overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineL}` }}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={`${IMG}/aire-split.webp`}
                        alt="Un aire acondicionado split instalado en un muro blanco"
                        fill
                        sizes="(min-width: 1024px) 42vw, 88vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 32%' }}
                      />
                    </div>
                    <figcaption className="px-4 py-3 flex items-baseline justify-between gap-3" style={{ backgroundColor: C.papel }}>
                      <span className={`${mono.className} text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.azulInk }}>
                        En el muro
                      </span>
                      <span className="text-[11px] text-right leading-snug" style={{ color: C.mutedL }}>
                        Frío a un botón
                      </span>
                    </figcaption>
                  </figure>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · La mantención explicada ── */}
        <section id="mantencion" className="scroll-mt-20" style={{ backgroundColor: C.carbon, color: '#F5F7FA' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo n="02" dark>
                    La mantención, en simple
                  </Rotulo>
                  <h2
                    className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,7vw,3.6rem)]`}
                  >
                    Que el frío no te pille{' '}
                    <span style={{ color: C.naranjo }}>con la estufa sucia.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedD }}>
                    La estufa trabaja fuerte todo el invierno: conviene
                    dejarla limpia y revisada antes de que empiece el frío.
                    En cada visita, David revisa, limpia y te explica cómo
                    sacarle el mejor partido.
                  </p>
                </Reveal>
                <ol className="mt-8">
                  {REPASO.map((s, i) => (
                    <Reveal key={s.n} delay={i * 90}>
                      <li className="flex gap-4 border-b py-5 last:border-b-0" style={{ borderColor: C.lineD }}>
                        <span
                          className={`${mono.className} text-sm font-semibold leading-none shrink-0 w-10 pt-1`}
                          style={{ color: C.naranjo }}
                          aria-hidden="true"
                        >
                          {s.n}
                        </span>
                        <div>
                          <h3 className={`${display.className} font-semibold text-lg md:text-xl leading-tight`}>{s.t}</h3>
                          <p className="mt-1 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.mutedD }}>
                            {s.d}
                          </p>
                        </div>
                        <span className="ml-auto mt-1 shrink-0" style={{ color: C.naranjo }} aria-hidden="true">
                          <Ic name="check" className="w-4 h-4" />
                        </span>
                      </li>
                    </Reveal>
                  ))}
                </ol>
                <Reveal delay={120}>
                  <p className="mt-6 text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedD2 }}>
                    Y si el caño de tu estufa está dañado, también lo reparan:
                    lo dicen sus propios clientes.
                  </p>
                </Reveal>
              </div>
              <Reveal delay={140}>
                <div>
                  <Plate
                    src={`${IMG}/mantencion-pellet.webp`}
                    w={1440}
                    h={1440}
                    ratio="aspect-square"
                    tag="FIG.02"
                    caption="El motor de la estufa, en mantención"
                    alt="Las manos del técnico haciendo la mantención del motor de una estufa a pellet"
                    dark
                  />
                  <div
                    className="mt-4 rounded-xl px-5 py-4 flex items-center gap-3.5"
                    style={{ backgroundColor: C.panel, border: `1.5px solid ${C.lineD}` }}
                  >
                    <Dos size={11} />
                    <p className="text-[13px] md:text-sm leading-relaxed" style={{ color: C.mutedD }}>
                      La misma mano técnica sirve para el split: limpieza y
                      revisión del aire acondicionado.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · Trabajos realizados ── */}
        <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.niebla }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo n="03">Trabajos realizados</Rotulo>
              <div className="grid lg:grid-cols-[1.25fr_1fr] gap-5 md:gap-10 items-end">
                <h2
                  className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,7vw,3.6rem)]`}
                >
                  Instalado, encendido{' '}
                  <span style={{ color: C.naranjoInk }}>y andando.</span>
                </h2>
                <p className="text-[15px] md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                  Fotos de sus propios trabajos en casas de Valdivia:
                  estufas con su ducto y splits con sus dos unidades.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mt-9 md:mt-14">
              {OBRAS.map((o, i) => (
                <Reveal key={o.src} delay={(i % 3) * 100}>
                  <Plate
                    src={`${IMG}/${o.src}`}
                    w={o.w}
                    h={o.h}
                    ratio={o.ratio}
                    tag={o.tag}
                    caption={o.cap}
                    alt={o.alt}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 · Quién te atiende: David ── */}
        <section id="quien" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <div>
                  <figure className="overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineL}` }}>
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={`${IMG}/tecnico-exterior.webp`}
                        alt="David trabajando junto a la unidad exterior de un aire acondicionado"
                        fill
                        sizes="(min-width: 1024px) 38vw, 88vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 30%' }}
                      />
                    </div>
                    <figcaption className="px-4 py-3 flex items-baseline justify-between gap-3" style={{ backgroundColor: C.papel }}>
                      <span className={`${mono.className} text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.naranjoInk }}>
                        En terreno
                      </span>
                      <span className="text-[11px] text-right leading-snug" style={{ color: C.mutedL }}>
                        Servicio a domicilio
                      </span>
                    </figcaption>
                  </figure>
                  <div
                    className="mt-4 rounded-xl px-5 py-4"
                    style={{ backgroundColor: C.papel, border: `1.5px solid ${C.lineL}` }}
                  >
                    <p className={`${display.className} font-bold text-lg leading-tight`}>David, a cargo del servicio técnico</p>
                    <p className="mt-1 text-[13px] leading-relaxed" style={{ color: C.mutedL }}>
                      El nombre que firma el logo: Clima Hogares, ingeniería
                      en climatización.
                    </p>
                  </div>
                </div>
              </Reveal>
              <div>
                <Reveal>
                  <Rotulo n="04">Quién te atiende</Rotulo>
                  <h2
                    className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,7vw,3.6rem)]`}
                  >
                    El técnico que te explica{' '}
                    <span style={{ color: C.naranjoInk }}>lo que está haciendo.</span>
                  </h2>
                  <div className="mt-4 flex items-center gap-3">
                    <Stars value={BIZ.ratingValue} color={C.naranjoInk} size={16} />
                    <span className="text-sm font-semibold">{BIZ.rating} en Google</span>
                    <span className="text-sm" style={{ color: C.mutedL }}>· {BIZ.reviews} opiniones</span>
                  </div>
                </Reveal>
                <div className="mt-8 space-y-4">
                  {REVIEWS.map((r, i) => (
                    <Reveal key={r.author} delay={i * 110}>
                      <figure
                        className="rounded-xl p-5 md:p-6"
                        style={{ backgroundColor: C.papel, border: `1.5px solid ${C.lineL}` }}
                      >
                        <Stars value={5} color={C.naranjoInk} size={13} />
                        <blockquote className="mt-3 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.carbon }}>
                          “{r.text}”
                        </blockquote>
                        <figcaption className="mt-3 flex items-center gap-2.5">
                          <cite className={`${mono.className} not-italic text-[10px] font-semibold uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                            {r.author}
                          </cite>
                          <span className="text-[10px] uppercase tracking-[0.14em]" style={{ color: C.mutedL2 }}>
                            · Opinión en Google
                          </span>
                        </figcaption>
                      </figure>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Cobertura y contacto ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.niebla }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-start">
              <div>
                <Reveal>
                  <Rotulo n="05">Cobertura y contacto</Rotulo>
                  <h2
                    className={`${display.className} font-bold leading-[1.05] tracking-[-0.015em] text-[clamp(1.9rem,7vw,3.6rem)]`}
                  >
                    A domicilio{' '}
                    <span style={{ color: C.azulInk }}>en Valdivia.</span>
                  </h2>
                  <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                    Le escribes por WhatsApp, coordinan la visita y el
                    técnico llega a tu casa. Su base está en Los Traros.
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <dl className="mt-7 rounded-xl overflow-hidden" style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.blanco }}>
                    {[
                      { k: 'UBICACIÓN', v: `${BIZ.address} · ${BIZ.city}`, d: BIZ.region },
                      { k: 'ATENCIÓN', v: 'A domicilio', d: 'La visita se coordina por WhatsApp' },
                      { k: 'HORARIO', v: 'Lun a sáb 9:00 a 20:30', d: 'Dom 10:00 a 17:00' },
                      { k: 'CONTACTO', v: BIZ.phoneDisplay, d: 'WhatsApp y llamadas' },
                    ].map((f) => (
                      <div
                        key={f.k}
                        className="grid grid-cols-[96px_1fr] sm:grid-cols-[120px_1fr] gap-3 px-5 py-4 border-b items-baseline last:border-b-0"
                        style={{ borderColor: C.lineL }}
                      >
                        <dt className={`${mono.className} text-[9px] font-semibold uppercase tracking-[0.18em]`} style={{ color: C.mutedL2 }}>
                          {f.k}
                        </dt>
                        <dd>
                          <span className={`${display.className} block text-base md:text-lg font-semibold leading-tight`}>
                            {f.v}
                          </span>
                          <span className="block text-xs md:text-[13px] mt-0.5" style={{ color: C.mutedL }}>
                            {f.d}
                          </span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                </Reveal>
              </div>
              <Reveal delay={140}>
                <div className="overflow-hidden rounded-xl" style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.blanco }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                    className="w-full h-[290px] md:h-[380px] block"
                    style={{ border: 0 }}
                  />
                  <div className="px-5 py-3.5 flex items-center justify-between gap-3">
                    <p className="text-[13px] leading-snug" style={{ color: C.mutedL }}>
                      {BIZ.address}, {BIZ.city}
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${mono.className} shrink-0 text-[10px] font-semibold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44`}
                      style={{ color: C.azulInk, textDecorationColor: 'rgba(46,111,183,0.35)' }}
                    >
                      Ver en Maps →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(520px 300px at 12% 100%, rgba(242,140,40,0.14), transparent 62%), radial-gradient(520px 300px at 88% 0%, rgba(46,111,183,0.16), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="h-[3px]" style={{ background: `linear-gradient(90deg, ${C.azul}, ${C.naranjo})` }} aria-hidden="true" />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-24 text-center">
            <Reveal>
              <p
                className={`${mono.className} flex items-center justify-center gap-2.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-5`}
                style={{ color: C.mutedD }}
              >
                <Dos />
                Temperatura justa, todo el año
              </p>
              <h2
                className={`${display.className} font-bold leading-[1.04] tracking-[-0.02em] text-[clamp(2.1rem,8.5vw,4.2rem)]`}
                style={{ color: '#F5F7FA' }}
              >
                ¿Pellet para el invierno,{' '}
                <span style={{ color: C.azulClaro }}>split para el verano?</span>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
                Cuéntales qué necesita tu casa y coordinan la visita en
                {` ${BIZ.city}`}.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <Btn href={WA_LINK} tone="naranjo">
                  Cotiza por WhatsApp
                </Btn>
                <a
                  href={`https://wa.me/${BIZ.phoneTel.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                  className={`${display.className} font-bold text-2xl md:text-3xl tracking-tight tap-44 underline underline-offset-8 decoration-2`}
                  style={{ color: '#F5F7FA', textDecorationColor: C.naranjo }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.pozo, color: '#F5F7FA' }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div className="flex items-center gap-3.5">
                <span
                  className="w-11 h-11 rounded-full overflow-hidden shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineD}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                  <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 object-contain" aria-hidden="true" />
                </span>
                <div>
                  <p className={`${display.className} font-semibold text-base md:text-lg leading-tight`}>
                    {BIZ.name}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: C.mutedD }}>
                    {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                  </p>
                </div>
              </div>
              <nav
                className={`${mono.className} flex flex-wrap gap-x-5 gap-y-1.5 text-[10px] uppercase tracking-[0.16em]`}
                aria-label="Pie"
              >
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.naranjo }}>
                  WhatsApp
                </a>
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                  Facebook
                </a>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                  Instagram
                </a>
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: C.mutedD }}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="border-t" style={{ borderColor: C.lineD }}>
              <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3.5 pb-5 text-xs leading-relaxed" style={{ color: C.mutedD2 }}>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: '#F5F7FA' }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}, {BIZ.rubro.toLowerCase()} en {BIZ.city}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.naranjo }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
