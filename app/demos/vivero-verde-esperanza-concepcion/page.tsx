import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  HORARIO,
  LUGARES,
  PLANTAS,
  IMG,
} from './content'

// Bricolage Grotesque pesada y apretada para titulares, Lora para las
// frases con vuelo y Rubik para datos y texto.
const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})
const lora = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})

// De sus piezas de Instagram: verde esperanza, bosque, sol, magnolia y
// paulownia sobre papel.
const C = {
  papel: '#FBF8EF',
  verde: '#16804A',
  bosque: '#0F3D26',
  sol: '#F5D547',
  magnolia: '#E7A3C4',
  paulownia: '#8F6DD1',
  mut: '#43614F', // bosque atenuado sólido (~6.3:1 sobre papel)
  papelMut: 'rgba(251,248,239,0.78)', // sobre bosque/verde
  lineC: 'rgba(15,61,38,0.16)',
  lineD: 'rgba(251,248,239,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-verde-esperanza-concepcion',
  title: 'Vivero Verde Esperanza · El vivero que llega a tu casa, en Concepción',
  description:
    'Vivero móvil en Concepción: plantas y árboles a domicilio, repartos por rutas en la región, despachos a todo Chile y retiro en Rodolfo Briceño 200 A. Pide el catálogo con precios por WhatsApp.',
  image: `${IMG}/magnolio.webp`,
})

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Las plantas', href: '#plantas' },
  { label: 'Repartos', href: '#repartos' },
  { label: 'El local', href: '#local' },
]

const PASOS = [
  {
    n: '1',
    t: 'Pide el catálogo',
    d: 'Escríbenos por WhatsApp y te envían el catálogo con precios.',
    icon: 'chat',
  },
  {
    n: '2',
    t: 'Elige tus plantas',
    d: 'Magnolios, hortensias, kiri, camelias y más: se anotan para el próximo reparto.',
    icon: 'hoja',
  },
  {
    n: '3',
    t: 'Llega a tu puerta',
    d: 'Reparto a domicilio en ruta, despacho a todo Chile o retiro en el local.',
    icon: 'casa',
  },
] as const

const ESTAMPILLAS = [
  {
    src: `${IMG}/magnolios-maceta.webp`,
    w: 320,
    h: 511,
    alt: 'Magnolios con flores rosadas en macetas',
    caption: 'magnolios en maceta',
    cls: 'w-[44%] md:w-[30%]',
    rot: '-2.5deg',
  },
  {
    src: `${IMG}/magnolio.webp`,
    w: 443,
    h: 442,
    alt: 'Flor de magnolio rosada en primer plano',
    caption: 'magnolio en flor',
    cls: 'w-[46%] md:w-[32%] mt-8 md:mt-14',
    rot: '2deg',
  },
  {
    src: `${IMG}/plantin.webp`,
    w: 320,
    h: 383,
    alt: 'Plantín en bolsa con hojas verdes',
    caption: 'un plantín viajero',
    cls: 'w-[40%] md:w-[26%] md:-mt-6',
    rot: '-1.5deg',
  },
  {
    src: `${IMG}/plantas-camion.webp`,
    w: 420,
    h: 256,
    alt: 'Plantas variegadas en macetas, listas para el reparto',
    caption: 'listas para el reparto',
    cls: 'w-[58%] md:w-[38%] ml-auto md:ml-0 md:mt-8',
    rot: '1.8deg',
  },
] as const

/** La ruta: línea de camino discontinua que recorre la página. */
function LineaRuta({
  className = '',
  color = C.bosque,
  opacity = 0.35,
}: {
  className?: string
  color?: string
  opacity?: number
}) {
  return (
    <div
      className={`border-t-[3px] border-dashed ${className}`}
      style={{ borderColor: color, opacity }}
      aria-hidden="true"
    />
  )
}

/** Marcador de parada sobre la ruta. */
function Parada({
  color = C.verde,
  bg = C.papel,
  size = 22,
  children,
}: {
  color?: string
  bg?: string
  size?: number
  children?: React.ReactNode
}) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0 font-bold"
      style={{
        width: size,
        height: size,
        border: `2.5px solid ${color}`,
        backgroundColor: bg,
        color,
        fontSize: size * 0.44,
      }}
      aria-hidden="true"
    >
      {children ?? (
        <span
          className="rounded-full"
          style={{ width: size * 0.34, height: size * 0.34, backgroundColor: color }}
        />
      )}
    </span>
  )
}

/** Pin de destino (la casa, el local). */
function Pin({ className = 'w-5 h-5', color = C.verde }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2.2C7.6 2.2 4 5.8 4 10.3 4 15.9 12 22 12 22s8-6.1 8-11.7C20 5.8 16.4 2.2 12 2.2Zm0 10.4a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Z" />
    </svg>
  )
}

/** Rótulo de sección: un tramo de ruta + texto en versalitas. */
function Rotulo({
  children,
  color = C.verde,
  light = false,
}: {
  children: React.ReactNode
  color?: string
  light?: boolean
}) {
  const linea = light ? 'rgba(251,248,239,0.6)' : 'rgba(22,128,74,0.45)'
  return (
    <p
      className="flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color }}
    >
      <span
        className="block w-9 shrink-0 border-t-2 border-dashed"
        style={{ borderColor: linea }}
        aria-hidden="true"
      />
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function IgIcon({ className = 'w-[15px] h-[15px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function BtnWa({
  children,
  bg = C.verde,
  ink = '#FFFFFF',
  className = '',
}: {
  children: React.ReactNode
  bg?: string
  ink?: string
  className?: string
}) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`vve-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold tap-44 ${className}`}
      style={{ backgroundColor: bg, color: ink }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

/** Sol plano de la escena. */
function SolSvg({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="15" fill={C.sol} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        const x1 = 32 + Math.cos(a) * 21
        const y1 = 32 + Math.sin(a) * 21
        const x2 = 32 + Math.cos(a) * 28
        const y2 = 32 + Math.sin(a) * 28
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.sol} strokeWidth="3" strokeLinecap="round" />
        )
      })}
    </svg>
  )
}

/** El camioncito del vivero: entra, frena y le brotan las plantas. */
function CamionSvg({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 154" className={className} fill="none" aria-hidden="true">
      <ellipse cx="158" cy="146" rx="142" ry="7" fill={C.bosque} fillOpacity="0.13" />
      <g className="vve-carroceria">
        {/* plantas que brotan de la caja */}
        <g className="vve-planta" style={{ '--d': '1.62s' } as CSSProperties}>
          <circle cx="50" cy="62" r="11" fill={C.bosque} />
          <circle cx="65" cy="55" r="13" fill={C.bosque} />
          <circle cx="80" cy="62" r="10" fill={C.bosque} />
          <circle cx="65" cy="43" r="3.6" fill={C.magnolia} />
          <circle cx="81" cy="49" r="2.6" fill={C.sol} />
        </g>
        <g className="vve-planta" style={{ '--d': '1.78s' } as CSSProperties}>
          <path d="M110 76 V54" stroke={C.bosque} strokeWidth="3" strokeLinecap="round" />
          <ellipse cx="110" cy="46" rx="4.4" ry="9" fill={C.magnolia} />
          <ellipse cx="110" cy="46" rx="4.4" ry="9" fill={C.magnolia} transform="rotate(-40 110 46)" />
          <ellipse cx="110" cy="46" rx="4.4" ry="9" fill={C.magnolia} transform="rotate(40 110 46)" />
          <ellipse cx="110" cy="46" rx="4" ry="7" fill={C.magnolia} transform="rotate(-15 110 46)" />
          <ellipse cx="110" cy="46" rx="4" ry="7" fill={C.magnolia} transform="rotate(15 110 46)" />
          <circle cx="110" cy="48" r="3" fill={C.sol} />
        </g>
        <g className="vve-planta" style={{ '--d': '1.94s' } as CSSProperties}>
          <path d="M142 76 V50" stroke={C.bosque} strokeWidth="3" strokeLinecap="round" />
          <circle cx="142" cy="44" r="4" fill={C.paulownia} />
          <circle cx="135" cy="50" r="3.6" fill={C.paulownia} />
          <circle cx="149" cy="50" r="3.6" fill={C.paulownia} />
          <circle cx="137" cy="58" r="3.4" fill={C.paulownia} />
          <circle cx="147" cy="58" r="3.4" fill={C.paulownia} />
          <circle cx="142" cy="64" r="3" fill={C.paulownia} />
        </g>
        <g className="vve-planta" style={{ '--d': '2.1s' } as CSSProperties}>
          <path d="M168 76 V60" stroke={C.bosque} strokeWidth="2.5" strokeLinecap="round" />
          <ellipse cx="161" cy="57" rx="6.5" ry="3.2" fill={C.bosque} transform="rotate(-30 161 57)" />
          <ellipse cx="175" cy="57" rx="6.5" ry="3.2" fill={C.bosque} transform="rotate(30 175 57)" />
        </g>
        {/* caja de carga */}
        <rect x="18" y="78" width="160" height="40" rx="5" fill={C.verde} />
        <rect x="18" y="72" width="160" height="8" rx="4" fill={C.bosque} />
        <text
          x="98"
          y="104"
          textAnchor="middle"
          fill={C.papel}
          style={{ fontSize: 11, fontWeight: 700, letterSpacing: 1.2 }}
        >
          VERDE ESPERANZA
        </text>
        {/* cabina */}
        <path d="M178 118 V54 Q178 48 184 48 H238 L294 92 Q300 94 300 102 V118 Z" fill={C.verde} />
        <path d="M192 56 H234 L281 90 H192 Z" fill="#E4F0EE" />
        <rect x="178" y="98" width="122" height="9" fill={C.sol} />
        <circle cx="295" cy="87" r="3.5" fill={C.sol} />
        <rect x="296" y="104" width="9" height="14" rx="3" fill={C.bosque} />
        <rect x="12" y="104" width="8" height="14" rx="3" fill={C.bosque} />
        {/* chasis */}
        <rect x="18" y="118" width="282" height="7" rx="3.5" fill={C.bosque} />
      </g>
      {/* ruedas: giran mientras el camión avanza */}
      <g className="vve-rueda">
        <circle cx="72" cy="128" r="17" fill={C.bosque} />
        <circle cx="72" cy="128" r="6.5" fill={C.papel} />
        <circle cx="83" cy="128" r="3.1" fill={C.papel} />
      </g>
      <g className="vve-rueda">
        <circle cx="248" cy="128" r="17" fill={C.bosque} />
        <circle cx="248" cy="128" r="6.5" fill={C.papel} />
        <circle cx="259" cy="128" r="3.1" fill={C.papel} />
      </g>
    </svg>
  )
}

/** La casa de destino, al final de la ruta del hero. */
function CasaSvg({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 104 98" className={className} fill="none" aria-hidden="true">
      <ellipse cx="52" cy="92" rx="44" ry="6" fill={C.bosque} fillOpacity="0.13" />
      <path d="M50 14 V4" stroke={C.bosque} strokeWidth="2" strokeLinecap="round" />
      <path d="M50 4 L64 8 L50 12 Z" fill={C.magnolia} />
      <rect x="66" y="16" width="9" height="15" fill={C.bosque} />
      <path d="M10 46 L50 14 L90 46 Z" fill={C.verde} />
      <rect x="20" y="44" width="60" height="46" fill={C.papel} stroke={C.bosque} strokeWidth="3" />
      <rect x="27" y="54" width="13" height="11" fill="#E4F0EE" stroke={C.bosque} strokeWidth="2.5" />
      <rect x="60" y="54" width="13" height="11" fill="#E4F0EE" stroke={C.bosque} strokeWidth="2.5" />
      <rect x="43" y="64" width="14" height="26" rx="2" fill={C.sol} stroke={C.bosque} strokeWidth="2.5" />
      <circle cx="88" cy="84" r="8" fill={C.verde} />
      <circle cx="97" cy="86" r="6" fill={C.verde} />
      <circle cx="92" cy="79" r="2.4" fill={C.magnolia} />
      <circle cx="98" cy="84" r="2" fill={C.magnolia} />
    </svg>
  )
}

/** Íconos de las paradas de «Cómo funciona». */
function PasoIcon({ name, color = C.verde }: { name: string; color?: string }) {
  const common = {
    viewBox: '0 0 24 24',
    className: 'w-[13px] h-[13px]',
    fill: 'none',
    stroke: color,
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  } as const
  if (name === 'chat')
    return (
      <svg {...common}>
        <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5c-1.5 0-2.9-.35-4.1-1L3 20l1.1-4.9A8.5 8.5 0 1 1 21 11.5Z" />
      </svg>
    )
  if (name === 'hoja')
    return (
      <svg {...common}>
        <path d="M5 19 C5 10 11 4 20 4 C20 13 14 19 5 19 Z" />
        <path d="M7.5 16.5 C10.5 12.5 13.5 9.5 16.5 6.5" />
      </svg>
    )
  return (
    <svg {...common}>
      <path d="M4 11 L12 4 L20 11 V20 H14 V15 H10 V20 H4 Z" />
    </svg>
  )
}

/** Estampilla tipo polaroid que cae y se asienta con su rotación. */
function Estampilla({
  src,
  w,
  h,
  alt,
  caption,
  rot,
  className = '',
  animClass = 'vve-cae',
  delay,
  loading = 'lazy',
}: {
  src: string
  w: number
  h: number
  alt: string
  caption: string
  rot: string
  className?: string
  animClass?: string
  delay?: string
  loading?: 'lazy' | 'eager'
}) {
  return (
    <figure
      className={`${animClass} ${className}`}
      style={{ '--r': rot, '--d': delay } as CSSProperties}
    >
      <div
        className="vve-polaroid relative p-2 pb-9"
        style={{
          backgroundColor: '#FFFDF7',
          transform: `rotate(${rot})`,
          boxShadow: '0 12px 30px rgba(15,61,38,0.2)',
        }}
      >
        <span
          className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rotate-[-4deg] z-10"
          style={{ backgroundColor: 'rgba(245,213,71,0.72)' }}
          aria-hidden="true"
        />
        {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
        <img src={src} alt={alt} width={w} height={h} loading={loading} className="block w-full h-auto" />
        <figcaption
          className="absolute bottom-2.5 inset-x-0 text-center text-[10px] font-bold uppercase tracking-[0.16em]"
          style={{ color: C.mut }}
        >
          {caption}
        </figcaption>
      </div>
    </figure>
  )
}

export default function ViveroVerdeEsperanzaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.bosque }}
    >
      <style>{`
        /* Entradas del hero: el titular sube por líneas. */
        @keyframes vve-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .vve-linea { display: block; animation: vve-linea .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--d, 0s) }
        @keyframes vve-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .vve-sube { animation: vve-sube .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--d, 0s) }

        /* «Llega el reparto»: el camión entra por la ruta, rebota en la
           suspensión y frena frente a la casa. */
        @keyframes vve-llega {
          0% { transform: translateX(-110vw) }
          66% { transform: translateX(2.5%) }
          82% { transform: translateX(-0.9%) }
          100% { transform: translateX(0) }
        }
        .vve-camion { animation: vve-llega 1.3s cubic-bezier(.32,.74,.32,1) .5s both }
        @keyframes vve-susp {
          0%, 100% { transform: translateY(0) }
          20% { transform: translateY(-3px) }
          45% { transform: translateY(1.5px) }
          70% { transform: translateY(-2px) }
          88% { transform: translateY(.5px) }
        }
        .vve-carroceria { animation: vve-susp 1.15s ease-in-out .5s both }
        @keyframes vve-gira { from { transform: rotate(0deg) } to { transform: rotate(840deg) } }
        .vve-rueda { transform-box: fill-box; transform-origin: center; animation: vve-gira 1.2s cubic-bezier(.3,.7,.35,1) .5s both }

        /* Las plantas brotan de la caja una tras otra. */
        @keyframes vve-brote { from { opacity: 0; transform: scale(.4, 0) } to { opacity: 1; transform: scale(1, 1) } }
        .vve-planta { transform-box: fill-box; transform-origin: 50% 100%; animation: vve-brote .6s cubic-bezier(.3,1.45,.4,1) both; animation-delay: var(--d, 1.7s) }

        /* Las estampillas caen y se asientan con su rotación: al hacer
           scroll (vve-cae) o ya llegado el reparto, en el hero (vve-cae-in). */
        @keyframes vve-cae {
          from { opacity: 0; transform: translateY(-46px) rotate(calc(var(--r, 0deg) * 2.4)) }
          to { opacity: 1; transform: translateY(0) rotate(0deg) }
        }
        .vve-cae-in { animation: vve-cae .85s cubic-bezier(.3,.8,.3,1.05) both; animation-delay: var(--d, 1.9s) }
        @supports (animation-timeline: view()) {
          .vve-cae { animation: vve-cae .85s cubic-bezier(.3,.8,.3,1.05) both; animation-timeline: view(); animation-range: entry 0% entry 70% }
        }
        .vve-polaroid { transition: transform .3s cubic-bezier(.3,.8,.3,1.2) }
        .vve-polaroid:hover { transform: rotate(0deg) scale(1.03) }

        .vve-btn { transition: transform .18s ease, filter .18s ease }
        .vve-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .vve-btn:active { transform: scale(.97) }
        .vve-page a:focus-visible, .vve-page summary:focus-visible {
          outline: 3px solid ${C.verde}; outline-offset: 3px; border-radius: 4px;
        }
        .vve-dark a:focus-visible { outline-color: ${C.sol} }
        .vve-sol a:focus-visible { outline-color: ${C.bosque} }

        @media (prefers-reduced-motion: reduce) {
          .vve-linea, .vve-sube, .vve-camion, .vve-carroceria, .vve-rueda, .vve-planta, .vve-cae, .vve-cae-in {
            animation: none !important;
          }
          .vve-camion { transform: none !important }
          .vve-planta { opacity: 1 !important; transform: none !important }
          .vve-cae, .vve-cae-in { opacity: 1 !important }
          .vve-btn, .vve-polaroid { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.01em]">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Catálogo"
        theme={{
          over: 'light',
          bar: 'rgba(251,248,239,0.94)',
          ink: C.bosque,
          line: C.lineC,
          btnBg: C.verde,
          btnInk: '#FFFFFF',
        }}
      />

      <div className="vve-page">
        {/* ── 1 · Hero: llega el reparto ── */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[136px]">
            <p
              className="vve-sube flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-5 md:mb-7"
              style={{ color: C.verde, '--d': '0.1s' } as CSSProperties}
            >
              <span className="block w-9 shrink-0 border-t-2 border-dashed" style={{ borderColor: 'rgba(22,128,74,0.45)' }} aria-hidden="true" />
              Vivero móvil · Concepción
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[0.98] tracking-[-0.02em] text-[clamp(3rem,11.5vw,6rem)] max-w-4xl`}
            >
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className="vve-linea" style={{ '--d': '0.28s' } as CSSProperties}>
                  El vivero que
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.14em]">
                <span className="vve-linea" style={{ '--d': '0.42s' } as CSSProperties}>
                  <em
                    className={lora.className}
                    style={{ color: C.verde }}
                  >
                    llega a tu casa.
                  </em>
                </span>
              </span>
            </h1>
            <p
              className="vve-sube mt-5 md:mt-6 text-base md:text-xl leading-relaxed max-w-md md:max-w-xl"
              style={{ color: C.mut, '--d': '0.72s' } as CSSProperties}
            >
              Plantas y árboles a domicilio, repartos por rutas en la
              región y despachos a todo Chile.
            </p>
            <div
              className="vve-sube mt-7 flex flex-wrap items-center gap-x-5 gap-y-3"
              style={{ '--d': '0.88s' } as CSSProperties}
            >
              <BtnWa>Pide el catálogo por WhatsApp</BtnWa>
              <p className="text-sm font-medium" style={{ color: C.mut }}>
                Con precios, directo a tu WhatsApp.
              </p>
            </div>

            {/* estampillas que llegan cuando el camión ya entregó (lg) */}
            <div className="hidden lg:block absolute right-4 top-[286px] w-[190px]" aria-hidden="true">
              <Estampilla
                src={`${IMG}/magnolio.webp`}
                w={443}
                h={442}
                alt=""
                caption=""
                rot="-5deg"
                animClass="vve-cae-in"
                delay="1.9s"
                loading="eager"
                className="w-[168px]"
              />
              <Estampilla
                src={`${IMG}/plantin.webp`}
                w={320}
                h={383}
                alt=""
                caption=""
                rot="4deg"
                animClass="vve-cae-in"
                delay="2.05s"
                loading="eager"
                className="w-[128px] -mt-6 ml-14"
              />
            </div>
          </div>

          {/* la escena del reparto */}
          <div className="relative max-w-6xl mx-auto h-[215px] md:h-[290px] mt-2 md:mt-0" aria-hidden="true">
            <SolSvg className="absolute left-[7%] md:left-[10%] top-1 w-12 h-12 md:w-16 md:h-16" />
            <div
              className="absolute left-0 right-0 bottom-[62px] md:bottom-[74px] border-t-[3px] border-dashed"
              style={{ borderColor: 'rgba(15,61,38,0.35)' }}
            />
            <CasaSvg className="absolute right-[5%] md:right-[6%] bottom-[56px] md:bottom-[68px] w-[86px] md:w-[128px]" />
            <p className="absolute right-[6%] md:right-[7%] bottom-[24px] md:bottom-[34px] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]" style={{ color: C.mut }}>
              tu casa
            </p>
            <CamionSvg className="vve-camion absolute left-[4%] md:left-[38%] bottom-[52px] md:bottom-[64px] w-[240px] md:w-[370px]" />
          </div>
        </section>

        {/* ── 2 · Cómo funciona: tres paradas ── */}
        <section id="como-funciona" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-24">
            <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-10 md:mb-14">
              <Reveal className="md:col-span-7">
                <Rotulo>Cómo funciona</Rotulo>
                <h2
                  className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(1.9rem,6.8vw,3.6rem)]`}
                >
                  Del catálogo a tu puerta,{' '}
                  <em className={lora.className} style={{ color: C.verde }}>
                    en tres paradas.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-1.5" style={{ color: C.mut }}>
                  Trabajan principalmente a domicilio: tú pides, ellos
                  cargan el camión y salen a ruta.
                </p>
              </Reveal>
            </div>

            <div className="relative">
              {/* la ruta que une las paradas */}
              <div
                className="absolute left-[15px] top-2 bottom-2 border-l-[3px] border-dashed md:hidden"
                style={{ borderColor: 'rgba(22,128,74,0.4)' }}
                aria-hidden="true"
              />
              <div
                className="absolute left-0 right-0 top-[15px] border-t-[3px] border-dashed hidden md:block"
                style={{ borderColor: 'rgba(22,128,74,0.4)' }}
                aria-hidden="true"
              />
              <ol className="grid gap-9 md:grid-cols-3 md:gap-10">
                {PASOS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 110}>
                    <li className="relative pl-14 md:pl-0 md:pt-16">
                      <span className="absolute left-0 top-0">
                        <Parada size={32}>
                          <PasoIcon name={p.icon} />
                        </Parada>
                      </span>
                      <p
                        className={`${display.className} font-extrabold leading-none text-[2.6rem] md:text-[3.2rem] -mb-1.5`}
                        style={{ color: 'rgba(22,128,74,0.2)' }}
                        aria-hidden="true"
                      >
                        {p.n}
                      </p>
                      <h3
                        className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-2`}
                      >
                        {p.t}
                      </h3>
                      <p className="text-sm md:text-[15px] leading-relaxed max-w-xs" style={{ color: C.mut }}>
                        {p.d}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>

            <Reveal delay={140}>
              <div className="mt-10 md:mt-14">
                <BtnWa>Pide el catálogo por WhatsApp</BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · Lo que ha traído: estampillas ── */}
        <section id="plantas" className="scroll-mt-20" style={{ backgroundColor: '#F4EFE0' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-5">
                <Reveal>
                  <Rotulo>Lo que han traído</Rotulo>
                  <h2
                    className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(1.9rem,6.8vw,3.4rem)] mb-6`}
                  >
                    Del camión,{' '}
                    <em className={lora.className} style={{ color: C.verde }}>
                      a tu patio.
                    </em>
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <figure
                    className="border-l-[3px] pl-5 md:pl-6 mb-8"
                    style={{ borderColor: C.paulownia }}
                  >
                    <blockquote
                      className={`${lora.className} italic text-lg md:text-[1.55rem] leading-snug mb-2.5`}
                      style={{ color: C.bosque }}
                    >
                      “Árbol de rápido crecimiento, ideal para sombra y
                      madera”
                    </blockquote>
                    <figcaption
                      className="text-[11px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: C.mut }}
                    >
                      Así presentan el kiri en sus publicaciones
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={180}>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] mb-3" style={{ color: C.mut }}>
                    También han ofrecido
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-8">
                    {PLANTAS.map((p) => (
                      <li
                        key={p}
                        className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-semibold"
                        style={{
                          backgroundColor: 'rgba(22,128,74,0.1)',
                          color: C.bosque,
                          border: '1px solid rgba(22,128,74,0.28)',
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.verde }} aria-hidden="true" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal delay={240}>
                  <BtnWa>Pide el catálogo con precios</BtnWa>
                </Reveal>
              </div>

              <div className="lg:col-span-7">
                {/* la paulownia abre el muro de estampillas */}
                <figure
                  className="vve-cae relative mb-6 md:mb-8 w-[78%] md:w-[56%] md:ml-[8%]"
                  style={{ '--r': '-1.6deg' } as CSSProperties}
                >
                  <div
                    className="vve-polaroid relative p-2 pb-9"
                    style={{
                      backgroundColor: '#FFFDF7',
                      transform: 'rotate(-1.6deg)',
                      boxShadow: '0 12px 30px rgba(15,61,38,0.2)',
                    }}
                  >
                    <span
                      className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rotate-[-4deg] z-10"
                      style={{ backgroundColor: 'rgba(245,213,71,0.72)' }}
                      aria-hidden="true"
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
                    <img
                      src={`${IMG}/paulownia.webp`}
                      alt="Copa de un kiri o paulownia cubierta de flores moradas"
                      width={357}
                      height={160}
                      loading="lazy"
                      className="block w-full h-auto"
                    />
                    <figcaption
                      className="absolute bottom-2.5 inset-x-0 text-center text-[10px] font-bold uppercase tracking-[0.16em]"
                      style={{ color: C.mut }}
                    >
                      el kiri en flor
                    </figcaption>
                  </div>
                </figure>

                <div className="flex flex-wrap items-start gap-x-4 gap-y-6 md:gap-x-6">
                  {ESTAMPILLAS.map((e) => (
                    <Estampilla
                      key={e.src}
                      src={e.src}
                      w={e.w}
                      h={e.h}
                      alt={e.alt}
                      caption={e.caption}
                      rot={e.rot}
                      className={e.cls}
                    />
                  ))}
                </div>
                <p className="mt-6 text-xs md:text-sm" style={{ color: C.mut }}>
                  Fotos de sus publicaciones: el stock cambia con cada
                  salida y se confirma por WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 · Repartos: la ruta por la región ── */}
        <section id="repartos" className="vve-sol scroll-mt-20" style={{ backgroundColor: C.sol }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-10 md:mb-12">
              <Reveal className="md:col-span-7">
                <p
                  className="flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-5"
                  style={{ color: C.bosque }}
                >
                  <span className="block w-9 shrink-0 border-t-2 border-dashed" style={{ borderColor: 'rgba(15,61,38,0.5)' }} aria-hidden="true" />
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.bosque }} aria-hidden="true" />
                  Repartos por ruta
                </p>
                <h2
                  className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(1.9rem,6.8vw,3.6rem)]`}
                  style={{ color: C.bosque }}
                >
                  Las rutas se avisan{' '}
                  <em className={lora.className}>en Instagram.</em>
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-1.5" style={{ color: 'rgba(15,61,38,0.85)' }}>
                  El camión sale a repartir por la región y cada salida
                  se anuncia en su perfil. Si tu comuna está en la ruta,
                  el pedido llega hasta tu puerta.
                </p>
              </Reveal>
            </div>

            {/* las paradas conocidas, como fichas sobre la ruta */}
            <Reveal delay={100}>
              <div className="relative pt-8">
                <div
                  className="absolute left-0 right-0 top-0 border-t-[3px] border-dashed"
                  style={{ borderColor: 'rgba(15,61,38,0.4)' }}
                  aria-hidden="true"
                />
                <ul className="relative flex flex-wrap items-center gap-x-4 gap-y-4 md:gap-x-5">
                  {LUGARES.map((l, i) => (
                    <li key={l} className={i % 2 === 1 ? 'md:-translate-y-3' : 'md:translate-y-2'}>
                      <span
                        className="inline-flex items-center gap-2.5 rounded-full pl-3 pr-4 py-2 text-sm md:text-base font-bold shadow-sm"
                        style={{ backgroundColor: C.papel, color: C.bosque }}
                      >
                        <Parada size={18} />
                        {l}
                      </span>
                    </li>
                  ))}
                  <li className="md:translate-y-2">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vve-btn inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm md:text-base font-bold tap-44"
                      style={{ border: `2px dashed ${C.bosque}`, color: C.bosque }}
                    >
                      ¿tu comuna? pregúntales
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="mt-12 md:mt-16 flex flex-wrap items-center gap-x-8 gap-y-5">
                <p
                  className={`${display.className} font-bold leading-tight text-[1.5rem] md:text-[2rem] max-w-md`}
                  style={{ color: C.bosque }}
                >
                  ¿Más lejos?{' '}
                  <em className={lora.className}>Despachan a todo Chile.</em>
                </p>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vve-btn inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold tap-44"
                  style={{ backgroundColor: C.bosque, color: C.papel }}
                >
                  <IgIcon />
                  Ver las rutas en Instagram
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 5 · El local: la otra parada ── */}
        <section id="local" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
              <div>
                <Reveal>
                  <Rotulo>Retiro en el local</Rotulo>
                  <h2
                    className={`${display.className} font-bold leading-[1.04] tracking-[-0.015em] text-[clamp(1.9rem,6.4vw,3.2rem)] mb-6`}
                  >
                    La otra parada:{' '}
                    <em className={lora.className} style={{ color: C.verde }}>
                      el local en Briceño.
                    </em>
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <address className="not-italic flex items-start gap-3 mb-7">
                    <Pin className="w-5 h-5 mt-1 shrink-0" />
                    <span className="text-base md:text-lg leading-snug font-medium">
                      {BIZ.address}
                      <br />
                      <span className="text-sm md:text-base" style={{ color: C.mut }}>
                        {BIZ.city}, {BIZ.region}
                      </span>
                    </span>
                  </address>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-2 mb-7 text-sm md:text-base max-w-sm">
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.verde }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: h.h === 'Cerrado' ? C.mut : C.bosque }}>{h.h}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    <BtnWa>Coordina tu retiro</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                      style={{ color: C.bosque, textDecorationColor: 'rgba(22,128,74,0.5)' }}
                    >
                      Cómo llegar
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={150} className="min-h-[300px]">
                <div
                  className="relative overflow-hidden h-full min-h-[300px] md:min-h-[400px] rounded-2xl"
                  style={{ border: `2px solid rgba(22,128,74,0.35)`, backgroundColor: '#F4EFE0' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <span
                    className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold shadow-md"
                    style={{ backgroundColor: C.papel, color: C.bosque }}
                  >
                    <Pin className="w-3.5 h-3.5" />
                    Fin de la ruta
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · Cierre: pide el catálogo ── */}
        <section className="vve-dark relative overflow-hidden" style={{ backgroundColor: C.verde }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <p
                className="inline-flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6"
                style={{ color: C.sol }}
              >
                <span className="block w-9 border-t-2 border-dashed" style={{ borderColor: 'rgba(245,213,71,0.6)' }} aria-hidden="true" />
                El camión está cargando
                <span className="block w-9 border-t-2 border-dashed" style={{ borderColor: 'rgba(245,213,71,0.6)' }} aria-hidden="true" />
              </p>
              <h2
                className={`${display.className} font-bold leading-[1.02] tracking-[-0.015em] text-[clamp(2.1rem,7.5vw,4rem)] mb-5`}
                style={{ color: C.papel }}
              >
                ¿Qué planta le falta{' '}
                <em className={lora.className} style={{ color: C.sol }}>
                  a tu patio?
                </em>
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.papelMut }}>
                Pide el catálogo con precios por WhatsApp, elige con
                calma y coordina el reparto o el retiro.
              </p>
              <BtnWa bg={C.sol} ink={C.bosque}>
                Pide el catálogo por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Footer ── */}
        <footer className="vve-dark" style={{ backgroundColor: C.bosque, color: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
              <div>
                <p className={`${display.className} font-bold text-xl md:text-2xl`}>
                  {BIZ.name}
                </p>
                <p className="text-sm mt-1" style={{ color: C.papelMut }}>
                  {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.papel }}>
                  {BIZ.phoneDisplay}
                </a>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.papelMut }}>
                  Instagram
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: C.papelMut }}>
                  Google Maps
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(251,248,239,0.62)' }}>
                Sitio de muestra preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.papel }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.sol }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Pedir el catálogo por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
