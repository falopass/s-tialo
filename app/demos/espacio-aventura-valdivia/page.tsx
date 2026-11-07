import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_TARDES, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

/**
 * Dirección de arte: «fiesta ordenada». Los 5 colores vivos del logo
 * (fucsia, turquesa, amarillo, verde, violeta) sobre papel crema, con
 * guirnaldas de banderines y globos como motivo. Passion One pone la
 * letra de afiche de fiesta; Nunito es la voz clara para los papás.
 * Los tonos "T" son las versiones oscuras de cada color para texto chico
 * (contraste ≥ 4.5 sobre la base).
 */
const C = {
  base: '#FFFDF8',
  soft: '#FFF6E3',
  ink: '#1E1B3A',
  fucsia: '#E8308A',
  turquesa: '#14B8C4',
  amarillo: '#FFC93C',
  verde: '#3DBE5C',
  violeta: '#6A4CC3',
  fucsiaT: '#B31569',
  turquesaT: '#0B6E75',
  verdeT: '#177A36',
  fucsiaD: '#C2186F',
  muted: 'rgba(30,27,58,0.66)',
  line: 'rgba(30,27,58,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'espacio-aventura-valdivia',
  title: 'Espacio Aventura · Centro de eventos infantiles en Valdivia',
  description:
    'Cumpleaños infantiles, paseos de curso y eventos 100 % privados en Las Mulatas 126, Valdivia. Juegos inflables, zona de padres con aire acondicionado y estacionamiento.',
  image: '/demos/espacio-aventura-valdivia/juegos-inflables.webp',
})

const NAV_LINKS = [
  { label: 'El espacio', href: '#espacio' },
  { label: 'La fiesta', href: '#cumple' },
  { label: 'Tardes de juego', href: '#tardes' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const PARA_QUE = [
  {
    icon: 'torta',
    color: C.fucsia,
    tint: 'rgba(232,48,138,0.12)',
    ink: C.fucsiaT,
    name: 'Cumpleaños infantiles',
    desc: 'El espacio completo solo para ustedes: juegos, mesa del cumpleañero y decoración.',
  },
  {
    icon: 'bus',
    color: C.turquesa,
    tint: 'rgba(20,184,196,0.13)',
    ink: C.turquesaT,
    name: 'Paseos de curso',
    desc: 'Salidas de curso con juegos inflables y espacio para todo el grupo.',
  },
  {
    icon: 'maletin',
    color: C.violeta,
    tint: 'rgba(106,76,195,0.12)',
    ink: C.violeta,
    name: 'Eventos de empresa',
    desc: 'Celebraciones y actividades de empresa en un lugar pensado para familias.',
  },
  {
    icon: 'pelota',
    color: C.verde,
    tint: 'rgba(61,190,92,0.13)',
    ink: C.verdeT,
    name: 'Tardes de juego',
    desc: 'De martes a jueves de 15:00 a 20:00, los juegos abiertos para venir a jugar.',
  },
] as const

const ESPACIO = [
  {
    icon: 'tobogan',
    color: C.fucsia,
    tint: 'rgba(232,48,138,0.12)',
    ink: C.fucsiaT,
    name: 'Juegos inflables',
    desc: '2 inflables de destreza, tobogán inflable doble y castillo.',
  },
  {
    icon: 'nube',
    color: C.turquesa,
    tint: 'rgba(20,184,196,0.13)',
    ink: C.turquesaT,
    name: 'Zona blanda',
    desc: 'Rincón suave y seguro, pensado para los más pequeños.',
  },
  {
    icon: 'copo',
    color: C.violeta,
    tint: 'rgba(106,76,195,0.12)',
    ink: C.violeta,
    name: 'Zona de padres',
    desc: 'Para los acompañantes, con aire acondicionado.',
  },
  {
    icon: 'olla',
    color: C.fucsia,
    tint: 'rgba(232,48,138,0.12)',
    ink: C.fucsiaT,
    name: 'Cocina equipada',
    desc: 'Para la once. Carta de cóctel y pastelería a pedido.',
  },
  {
    icon: 'camara',
    color: C.verde,
    tint: 'rgba(61,190,92,0.13)',
    ink: C.verdeT,
    name: 'Zona fotográfica',
    desc: 'Zona decorativa y mesa del cumpleañero para las fotos.',
  },
] as const

const TAMBIEN = [
  'Eventos especiales y celebraciones temáticas',
  'Arriendo de juegos',
  'Alianzas con decoración y animación',
]

const QUOTES = [
  {
    name: 'José C.',
    color: C.turquesa,
    text: 'Muy lindo lugar, limpio, ordenado y organizado, los dueños muy preocupados y responsables. Amplio estacionamiento. Mi hijo y sus amigos lo pasaron excelente. 100% recomendable.',
  },
  {
    name: 'Karen Á.',
    color: C.fucsia,
    text: 'Excelente experiencia.. Todo ordenado limpio y organizado. Nada que decir 10/10',
  },
  {
    name: 'Veritho L.',
    color: C.violeta,
    text: 'Super lindo el local, limpio y super amplio.. ame que tenga aire acondicionado y muchos juegos para grandes y pequeños',
  },
]

const VALORAN = ['Limpio y ordenado', 'Amplio estacionamiento', 'Aire acondicionado', 'Dueños preocupados']

// ── Iconos propios de la fiesta (trazo redondo, 24px) ────────

function Icon({ name, className = 'w-[22px] h-[22px]' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    torta: (
      <>
        <rect x="4" y="12.5" width="16" height="7.5" rx="1.6" />
        <path d="M4 15.4c1.3-1.5 2.7-1.5 4 0s2.7 1.5 4 0 2.7-1.5 4 0 2.7 1.5 4 0" />
        <path d="M12 12.5V9" />
        <circle cx="12" cy="7.2" r="1.4" fill="currentColor" stroke="none" />
      </>
    ),
    bus: (
      <>
        <rect x="4" y="4" width="16" height="13" rx="2.2" />
        <path d="M4 9.5h16" />
        <path d="M4 14h16" />
        <circle cx="8" cy="19.3" r="1.4" />
        <circle cx="16" cy="19.3" r="1.4" />
      </>
    ),
    maletin: (
      <>
        <rect x="3.5" y="7.5" width="17" height="12" rx="2.2" />
        <path d="M9 7.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1.5" />
        <path d="M3.5 12.5h17" />
      </>
    ),
    pelota: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M5.6 7.4c2.9 1.9 9.9 1.9 12.8 0" />
        <path d="M5.6 16.6c2.9-1.9 9.9-1.9 12.8 0" />
        <path d="M12 3.5v17" />
      </>
    ),
    tobogan: (
      <>
        <path d="M5 20V5h4.5v10a4.5 4.5 0 0 0 4.5 4.5H20V20" />
        <path d="M5 8.5h4.5M5 12h4.5" />
      </>
    ),
    nube: (
      <path d="M7 18.5a4.2 4.2 0 0 1-.6-8.35 5.4 5.4 0 0 1 10.6-.7 3.6 3.6 0 0 1 .4 9.05H7Z" />
    ),
    copo: (
      <>
        <path d="M12 3v18" />
        <path d="M4.5 7.6l15 8.8" />
        <path d="M4.5 16.4l15-8.8" />
      </>
    ),
    olla: (
      <>
        <path d="M4.5 10.5h15v5.5a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-5.5Z" />
        <path d="M2.5 10.5h19" />
        <path d="M8.5 7c0-1.3.9-1.6.9-2.8" />
        <path d="M13.5 7c0-1.3.9-1.6.9-2.8" />
      </>
    ),
    camara: (
      <>
        <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
        <circle cx="12" cy="13.7" r="3.4" />
        <path d="M8.6 7.5l1.2-2.3h4.4l1.2 2.3" />
      </>
    ),
    estacionamiento: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3.4" />
        <path d="M9.6 16.5v-9h3.6a3 3 0 0 1 0 6H9.6" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s-6.5-5.4-6.5-10.4A6.5 6.5 0 0 1 12 4a6.5 6.5 0 0 1 6.5 6.6C18.5 15.6 12 21 12 21Z" />
        <circle cx="12" cy="10.6" r="2.2" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="8.5" />
        <path d="M12 7.5V12l3 2" />
      </>
    ),
  }
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Globo de helio: cuerpo, nudo y cuerda ondulada. */
function Globo({
  c,
  className = '',
  style,
}: {
  c: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg viewBox="0 0 42 62" className={className} style={style} aria-hidden="true">
      <path
        d="M21 3c8.3 0 15 6.8 15 15.4C36 28 27.5 35 21 35S6 28 6 18.4C6 9.8 12.7 3 21 3Z"
        fill={c}
      />
      <ellipse cx="14.5" cy="13.5" rx="3" ry="5.4" transform="rotate(18 14.5 13.5)" fill="#fff" opacity="0.38" />
      <path d="M18.8 35.8 21 39.6l2.2-3.8Z" fill={c} />
      <path d="M21 39.6c-1.8 2.8 1.8 4.6 0 7.4s1.8 4.6 0 7.4" fill="none" stroke={c} strokeWidth="1.4" opacity="0.65" />
    </svg>
  )
}

const COLORES = [C.fucsia, C.turquesa, C.amarillo, C.verde, C.violeta]

/** Guirnalda de banderines sobre una cuerda catenaria. */
function Banderines({ className = '', opacity = 1 }: { className?: string; opacity?: number }) {
  // puntos de la cuerda Q(0,14)-(200,86)-(400,14), con la tangente de cada banderín
  const P = [
    { x: 16, y: 19.5, a: 18.4 },
    { x: 52, y: 30.3, a: 14.9 },
    { x: 88, y: 38.7, a: 11.4 },
    { x: 124, y: 44.8, a: 7.8 },
    { x: 164, y: 48.8, a: 3.7 },
    { x: 200, y: 50, a: 0 },
    { x: 236, y: 48.8, a: -3.7 },
    { x: 276, y: 44.8, a: -7.8 },
    { x: 312, y: 38.7, a: -11.4 },
    { x: 348, y: 30.3, a: -14.9 },
    { x: 384, y: 19.5, a: -18.4 },
  ]
  return (
    <svg viewBox="0 0 400 76" className={className} preserveAspectRatio="none" aria-hidden="true" style={{ opacity }}>
      <path d="M0 14 Q200 86 400 14" fill="none" stroke={C.ink} strokeWidth="1.6" opacity="0.5" />
      {P.map((p, i) => (
        <polygon
          key={i}
          points="-8,0 8,0 0,18"
          fill={COLORES[i % COLORES.length]}
          transform={`translate(${p.x} ${p.y}) rotate(${p.a})`}
        />
      ))}
    </svg>
  )
}

/** Eyebrow de sección: mini guirnalda + rótulo en versalita. */
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-extrabold mb-4 flex items-center gap-3"
      style={{ color: light ? C.amarillo : C.violeta }}
    >
      <svg viewBox="0 0 40 14" className="w-10 h-3.5 shrink-0" aria-hidden="true">
        <path d="M0 3 Q20 11 40 3" fill="none" stroke="currentColor" strokeWidth="1.3" />
        <polygon points="-4,0 4,0 0,7" fill={C.fucsia} transform="translate(9 5.2) rotate(10)" />
        <polygon points="-4,0 4,0 0,7" fill={C.turquesa} transform="translate(20 6.6)" />
        <polygon points="-4,0 4,0 0,7" fill={C.amarillo} transform="translate(31 5.2) rotate(-10)" />
      </svg>
      {children}
    </p>
  )
}

/** Chip tipo boleta de cumpleaños con triangulito. */
function Chip({ children, color, className = '' }: { children: React.ReactNode; color: string; className?: string }) {
  return (
    <li className={`flex items-center gap-2.5 text-[13px] font-bold ${className}`} style={{ color: C.ink }}>
      <svg viewBox="0 0 10 12" className="w-2.5 h-3 shrink-0" aria-hidden="true">
        <polygon points="5,0 10,12 0,12" fill={color} />
      </svg>
      {children}
    </li>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

// Globos del cielo del hero (posición, tamaño y ritmo propios)
const GLOBOS = [
  { left: '3%', top: '62%', size: 40, c: C.fucsia, dur: '13s', del: '-2s' },
  { left: '12%', top: '28%', size: 52, c: C.turquesa, dur: '16s', del: '-8s' },
  { left: '86%', top: '16%', size: 46, c: C.amarillo, dur: '11s', del: '-4s' },
  { left: '94%', top: '56%', size: 36, c: C.violeta, dur: '14s', del: '-9s' },
  { left: '72%', top: '74%', size: 58, c: C.verde, dur: '17s', del: '-6s' },
  { left: '46%', top: '80%', size: 34, c: C.turquesa, dur: '12s', del: '-11s' },
  { left: '64%', top: '38%', size: 42, c: C.fucsia, dur: '15s', del: '-1s' },
  { left: '30%', top: '68%', size: 48, c: C.amarillo, dur: '18s', del: '-13s' },
  { left: '55%', top: '12%', size: 38, c: C.verde, dur: '12.5s', del: '-5s' },
]

// Globos que suben dentro de la foto del galpón
const GLOBOS_FOTO = [
  { left: '8%', size: 30, c: C.fucsia, dur: '8.5s', del: '-1s', sw: '7px' },
  { left: '32%', size: 40, c: C.amarillo, dur: '10s', del: '-5s', sw: '-8px' },
  { left: '58%', size: 34, c: C.turquesa, dur: '9s', del: '-3s', sw: '6px' },
  { left: '82%', size: 42, c: C.violeta, dur: '11s', del: '-7s', sw: '-6px' },
]

// Confeti diminuto del fondo del hero
const CONFETI = [
  { left: '8%', top: '14%', c: C.amarillo, r: '3px' },
  { left: '22%', top: '8%', c: C.turquesa, r: '2.5px' },
  { left: '68%', top: '9%', c: C.fucsia, r: '3px' },
  { left: '80%', top: '30%', c: C.verde, r: '2.5px' },
  { left: '93%', top: '12%', c: C.violeta, r: '3px' },
  { left: '5%', top: '44%', c: C.violeta, r: '2.5px' },
  { left: '97%', top: '46%', c: C.fucsia, r: '2.5px' },
  { left: '18%', top: '88%', c: C.verde, r: '2.5px' },
  { left: '90%', top: '84%', c: C.turquesa, r: '3px' },
]

export default function EspacioAventuraPage() {
  return (
    <div className={`${body.className} ea min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.base, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .ea a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }

        /* Que empiece la fiesta: el titular entra con un rebote suave */
        @keyframes ea-bounce {
          0% { opacity: 0; transform: translateY(30px) scale(.94) }
          55% { opacity: 1; transform: translateY(-7px) scale(1.015) }
          78% { transform: translateY(3px) scale(.995) }
          100% { opacity: 1; transform: none }
        }
        .ea-bounce { animation: ea-bounce .95s cubic-bezier(.25,.7,.3,1) .12s both }

        @keyframes ea-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .ea-fade { animation: ea-fade .8s cubic-bezier(.22,.65,.25,1) both; animation-delay: var(--d, 0s) }

        @keyframes ea-pop {
          0% { opacity: 0; transform: scale(.4) rotate(-14deg) }
          65% { opacity: 1; transform: scale(1.1) rotate(8deg) }
          100% { opacity: 1; transform: scale(1) rotate(6deg) }
        }
        .ea-pop { animation: ea-pop .7s cubic-bezier(.3,1.3,.4,1) 1.05s both }

        /* La guirnalda se despliega de izquierda a derecha sobre el titular */
        @keyframes ea-guirnalda {
          from { clip-path: inset(-40% 104% -40% -4%) }
          to { clip-path: inset(-40% -4% -40% -4%) }
        }
        .ea-guirnalda { clip-path: inset(-40% -4% -40% -4%); animation: ea-guirnalda 1.2s cubic-bezier(.4,.05,.3,1) .55s both }

        /* Globos que suben desde abajo, cada uno a su ritmo */
        @keyframes ea-sube {
          0% { transform: translate(0, 95vh); opacity: 0 }
          6% { opacity: .92 }
          40% { transform: translate(10px, -8vh) }
          70% { transform: translate(-9px, -55vh) }
          94% { opacity: .92 }
          100% { transform: translate(0, -115vh); opacity: 0 }
        }
        .ea-globo { position: absolute; opacity: .85; animation: ea-sube var(--dur, 12s) linear var(--del, 0s) infinite; will-change: transform }

        @keyframes ea-sube-mini {
          0% { transform: translate(0, 0); opacity: 0 }
          8% { opacity: .95 }
          55% { transform: translate(var(--sw, 6px), -240px) }
          92% { opacity: .95 }
          100% { transform: translate(0, -460px); opacity: 0 }
        }
        .ea-globo-mini { position: absolute; bottom: -60px; opacity: .9; animation: ea-sube-mini var(--dur, 9s) linear var(--del, 0s) infinite; will-change: transform }

        /* Las tarjetas del espacio caen y rebotan levemente al entrar */
        @supports (animation-timeline: view()) {
          .ea-cae { transform-origin: 50% 0; animation: ea-cae linear both; animation-timeline: view(); animation-range: entry 2% entry 62% }
          @keyframes ea-cae {
            0% { opacity: 0; transform: translateY(-64px) rotate(var(--rot, -4deg)) }
            55% { opacity: 1; transform: translateY(9px) rotate(calc(var(--rot, -4deg) / -3)) }
            80% { transform: translateY(-3px) rotate(0deg) }
            100% { opacity: 1; transform: none }
          }
          .ea-cae-foto { animation: ea-cae linear both; animation-timeline: view(); animation-range: entry 0% entry 55% }
        }

        @media (prefers-reduced-motion: reduce) {
          .ea-bounce, .ea-fade, .ea-pop { animation: none !important; opacity: 1 !important; transform: none !important }
          .ea-guirnalda { animation: none !important; clip-path: inset(-40% -4% -40% -4%) !important }
          .ea-globo, .ea-globo-mini { animation: none !important }
          .ea-cae, .ea-cae-foto { animation: none !important; opacity: 1 !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(255,253,248,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.fucsiaD,
          btnInk: '#FFFDF8',
        }}
      />

      {/* ── Hero: que empiece la fiesta ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.base }}>
        {/* globos subiendo por el fondo */}
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {GLOBOS.map((g, i) => (
            <Globo
              key={i}
              c={g.c}
              className="ea-globo"
              style={{
                left: g.left,
                top: g.top,
                width: g.size,
                height: (g.size * 62) / 42,
                ['--dur' as string]: g.dur,
                ['--del' as string]: g.del,
              }}
            />
          ))}
          {CONFETI.map((d, i) => (
            <span
              key={i}
              className="absolute rounded-full"
              style={{ left: d.left, top: d.top, width: d.r === '3px' ? 6 : 5, height: d.r === '3px' ? 6 : 5, backgroundColor: d.c, opacity: 0.55 }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-24 pb-10 md:pb-14">
          {/* guirnalda que se despliega sobre el titular */}
          <div className="ea-guirnalda -mx-2 md:mx-0">
            <Banderines className="block w-full h-11 md:h-14" />
          </div>

          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
            <div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3 ea-fade" style={{ ['--d' as string]: '.3s' }}>
            <span
              className="inline-block text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.22em] px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(20,184,196,0.12)', color: C.turquesaT }}
            >
              Valdivia · Las Mulatas 126
            </span>
          </div>

          <h1
            className={`${display.className} ea-bounce font-black leading-[0.92] tracking-[0.005em] text-[clamp(3.3rem,14.5vw,5.8rem)] mb-4`}
            style={{ color: C.ink }}
          >
            Celebra con
            <br />
            <span style={{ color: C.fucsia }}>nosotros.</span>
          </h1>

          <p className="ea-fade text-[15px] md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: C.muted, ['--d' as string]: '.55s' }}>
            Cumpleaños infantiles, paseos de curso y eventos 100 % privados,
            con juegos inflables, zona de padres con aire acondicionado y
            estacionamiento.
          </p>

          <div className="ea-fade flex flex-wrap items-center gap-3 mb-4" style={{ ['--d' as string]: '.75s' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[15px] md:text-base font-extrabold px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
              style={{ backgroundColor: C.fucsiaD, color: '#FFFDF8', boxShadow: '0 10px 24px rgba(194,24,111,0.28)' }}
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
              </svg>
              Cotiza tu cumpleaños por WhatsApp
            </a>
            <a
              href="#espacio"
              className="text-[15px] md:text-base font-extrabold px-6 py-3 rounded-full border-2 transition-colors tap-44"
              style={{ borderColor: C.ink, color: C.ink }}
            >
              Ver el espacio
            </a>
          </div>

          <div className="ea-fade flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-8" style={{ ['--d' as string]: '.9s' }}>
            <Stars value={4.9} color="#E8A21B" size={16} />
            <span className="text-[13px] font-extrabold" style={{ color: C.ink }}>{BIZ.rating}</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.violeta, textDecorationColor: 'rgba(106,76,195,0.4)' }}
            >
              15 opiniones en Google →
            </a>
          </div>
            </div>

          {/* el galpón de juegos, con globos subiendo adentro */}
          <div className="relative ea-fade" style={{ ['--d' as string]: '1s', rotate: '-0.8deg' }}>
            <div
              className="relative overflow-hidden rounded-[26px] aspect-[16/10] lg:aspect-[4/4.6]"
              style={{ boxShadow: '0 24px 60px rgba(30,27,58,0.22)', border: `5px solid #fff` }}
            >
              <Image
                src={`${IMG}/juegos-inflables.webp`}
                alt="Galpón de Espacio Aventura con juegos inflables: tobogán, castillo y circuitos de destreza"
                fill
                priority
                sizes="(min-width: 1152px) 1088px, 100vw"
                className="object-cover"
                style={{ objectPosition: '50% 42%' }}
              />
              {/* globos que suben dentro del galpón */}
              <div className="absolute inset-0" aria-hidden="true">
                {GLOBOS_FOTO.map((g, i) => (
                  <Globo
                    key={i}
                    c={g.c}
                    className="ea-globo-mini"
                    style={{
                      left: g.left,
                      width: g.size,
                      height: (g.size * 62) / 42,
                      ['--dur' as string]: g.dur,
                      ['--del' as string]: g.del,
                      ['--sw' as string]: g.sw,
                    }}
                  />
                ))}
              </div>
              <span
                className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(30,27,58,0.82)', color: '#FFFDF8' }}
              >
                El galpón de juegos
              </span>
            </div>
            {/* sticker del logo */}
            <div className="ea-pop absolute -top-6 right-3 md:-right-4 p-1.5 rounded-xl" style={{ backgroundColor: '#fff', boxShadow: '0 10px 26px rgba(30,27,58,0.28)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/logo.webp`} width={448} height={256} alt="Logo de Espacio Aventura" className="w-[92px] md:w-[118px] h-auto rounded-lg" />
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── Para qué: las celebraciones ── */}
      <section id="celebrar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Rotulo>Para celebrar</Rotulo>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
            <h2 className={`${display.className} font-black text-[2.5rem] md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
              Un espacio
              <br />
              <span style={{ color: C.turquesaT }}>para tu evento</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Cada evento es 100 % privado: mientras celebras, el local
              completo es solo para tu grupo.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PARA_QUE.map((p, i) => (
            <li
              key={p.name}
              className="ea-cae h-full p-4 md:p-5 rounded-[20px]"
              style={{
                backgroundColor: '#fff',
                border: `1.5px solid ${C.line}`,
                rotate: i % 2 === 0 ? '-1.1deg' : '0.9deg',
                boxShadow: '0 4px 16px rgba(30,27,58,0.07)',
                ['--rot' as string]: i % 2 === 0 ? '-4deg' : '3.4deg',
              }}
            >
              <span
                className="w-11 h-11 rounded-2xl flex items-center justify-center mb-3"
                style={{ backgroundColor: p.tint, color: p.ink, rotate: i % 2 === 0 ? '4deg' : '-4deg' }}
              >
                <Icon name={p.icon} className="w-[24px] h-[24px]" />
              </span>
              <h3 className={`${display.className} font-bold text-[21px] md:text-2xl leading-tight mb-1.5`} style={{ color: C.ink }}>
                {p.name}
              </h3>
              <p className="text-[12.5px] md:text-[13px] leading-relaxed" style={{ color: C.muted }}>
                {p.desc}
              </p>
            </li>
          ))}
        </ul>
        <Reveal delay={150}>
          <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-2.5">
            {TAMBIEN.map((t, i) => (
              <Chip key={t} color={COLORES[i % COLORES.length]}>{t}</Chip>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── El espacio: instalaciones ── */}
      <section id="espacio" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo>El espacio</Rotulo>
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-8 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-[1.9rem] md:text-[2.6rem] leading-[1.08] max-w-2xl`} style={{ color: C.ink }}>
                “Un lugar pensado para que los{' '}
                <span style={{ color: C.fucsiaT }}>niños disfruten</span> y los{' '}
                <span style={{ color: C.turquesaT }}>adultos se relajen</span>.”
              </h2>
              <div>
                <p className="text-sm leading-relaxed mb-3" style={{ color: C.muted }}>
                  Así presentan ellos su local. Estas son las instalaciones
                  que muestran en sus publicaciones.
                </p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2">
                  {['Amplios espacios', 'Estacionamiento privado'].map((t, i) => (
                    <Chip key={t} color={i === 0 ? C.violeta : C.amarillo}>{t}</Chip>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {/* foto: recepción con el arco de globos */}
            <div
              className="ea-cae-foto col-span-2 lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-[22px] min-h-[220px] lg:min-h-[360px]"
              style={{ rotate: '-0.7deg', boxShadow: '0 14px 40px rgba(30,27,58,0.16)', ['--rot' as string]: '-3deg' }}
            >
              <Image
                src={`${IMG}/recepcion-globos.webp`}
                alt="Recepción de Espacio Aventura con arco de globos verde, azul y morado"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
                style={{ objectPosition: '68% 16%' }}
              />
              <span
                className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
                style={{ backgroundColor: 'rgba(30,27,58,0.82)', color: '#FFFDF8' }}
              >
                El arco de bienvenida
              </span>
            </div>

            {ESPACIO.slice(0, 4).map((e, i) => (
              <div
                key={e.name}
                className="ea-cae h-full p-4 rounded-[20px]"
                style={{
                  backgroundColor: '#fff',
                  border: `1.5px solid ${C.line}`,
                  rotate: i % 2 === 0 ? '0.9deg' : '-1deg',
                  boxShadow: '0 4px 16px rgba(30,27,58,0.07)',
                  ['--rot' as string]: i % 2 === 0 ? '3.5deg' : '-4.2deg',
                }}
              >
                <span
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: e.tint, color: e.ink, rotate: i % 2 === 0 ? '-4deg' : '4deg' }}
                >
                  <Icon name={e.icon} className="w-[22px] h-[22px]" />
                </span>
                <h3 className={`${display.className} font-bold text-lg md:text-[21px] leading-tight mb-1`} style={{ color: C.ink }}>
                  {e.name}
                </h3>
                <p className="text-[12px] md:text-[12.5px] leading-relaxed" style={{ color: C.muted }}>
                  {e.desc}
                </p>
              </div>
            ))}

            {/* foto chica: el arco de globos */}
            <div
              className="ea-cae-foto relative overflow-hidden rounded-[20px] aspect-square"
              style={{ rotate: '1.1deg', boxShadow: '0 10px 30px rgba(30,27,58,0.14)', ['--rot' as string]: '4deg' }}
            >
              <Image
                src={`${IMG}/arco-globos.webp`}
                alt="Detalle del arco de globos verde, azul y morado de Espacio Aventura"
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover"
                style={{ objectPosition: '60% 30%' }}
              />
            </div>

            {ESPACIO.slice(4).map((e, i) => (
              <div
                key={e.name}
                className="ea-cae h-full p-4 rounded-[20px]"
                style={{
                  backgroundColor: '#fff',
                  border: `1.5px solid ${C.line}`,
                  rotate: '-0.8deg',
                  boxShadow: '0 4px 16px rgba(30,27,58,0.07)',
                  ['--rot' as string]: '-3.6deg',
                }}
              >
                <span
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                  style={{ backgroundColor: e.tint, color: e.ink, rotate: '4deg' }}
                >
                  <Icon name={e.icon} className="w-[22px] h-[22px]" />
                </span>
                <h3 className={`${display.className} font-bold text-lg md:text-[21px] leading-tight mb-1`} style={{ color: C.ink }}>
                  {e.name}
                </h3>
                <p className="text-[12px] md:text-[12.5px] leading-relaxed" style={{ color: C.muted }}>
                  {e.desc}
                </p>
              </div>
            ))}

            {/* estacionamiento: franja ancha */}
            <div
              className="ea-cae col-span-2 lg:col-span-4 p-4 md:p-5 rounded-[20px] flex items-center gap-4"
              style={{
                backgroundColor: C.ink,
                rotate: '-0.6deg',
                boxShadow: '0 8px 26px rgba(30,27,58,0.25)',
                ['--rot' as string]: '-3deg',
              }}
            >
              <span className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: C.amarillo, color: C.ink }}>
                <Icon name="estacionamiento" className="w-[24px] h-[24px]" />
              </span>
              <div className="min-w-0">
                <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-tight`} style={{ color: '#FFFDF8' }}>
                  Estacionamiento privado
                </h3>
                <p className="text-[12.5px] md:text-sm leading-snug" style={{ color: 'rgba(255,253,248,0.78)' }}>
                  Amplio, junto al local: llegar y estacionar es parte fácil de la fiesta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── La fiesta en fotos ── */}
      <section id="cumple" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Rotulo>La fiesta en fotos</Rotulo>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
            <h2 className={`${display.className} font-black text-[2.5rem] md:text-6xl leading-[0.95]`} style={{ color: C.ink }}>
              Así se ve
              <br />
              <span style={{ color: C.fucsiaT }}>un cumpleaños</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              La mesa lista, las cajitas para cada invitado y los arcos de
              globos. Decoración y animación pueden sumarse por alianzas
              del local.
            </p>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="relative overflow-hidden rounded-[26px] h-[250px] md:h-[420px] mb-4 md:mb-6" style={{ rotate: '0.6deg', boxShadow: '0 18px 50px rgba(30,27,58,0.16)' }}>
            <Image
              src={`${IMG}/mesa-larga.webp`}
              alt="Mesa larga de cumpleaños con mantel fucsia, telones de colores y cajitas para los invitados"
              fill
              sizes="(min-width: 1152px) 1088px, 100vw"
              className="object-cover"
              style={{ objectPosition: '50% 22%' }}
            />
            <span
              className="absolute bottom-3 left-3 text-[10.5px] md:text-[11px] font-extrabold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
              style={{ backgroundColor: 'rgba(30,27,58,0.82)', color: '#FFFDF8' }}
            >
              La mesa grande
            </span>
          </div>
        </Reveal>

        <ul className="grid grid-cols-3 gap-3 md:gap-6">
          {[
            { src: `${IMG}/mesa-cumple.webp`, alt: 'Mesa de cumpleaños con cajitas sorpresa y telones de colores', cap: 'Cajitas listas', pos: '0% 35%', zoom: 1.9, rot: '-1.6deg', d: 0 },
            { src: `${IMG}/sorpresas.webp`, alt: 'Detalle de las sorpresas en la mesa de cumpleaños', cap: 'Sorpresas', pos: '0% 30%', zoom: 1.9, rot: '1.4deg', d: 110 },
            { src: `${IMG}/arco-globos.webp`, alt: 'Arco de globos verde, azul y morado', cap: 'Arcos de globos', pos: '62% 30%', zoom: 1, rot: '-1deg', d: 220 },
          ].map((f) => (
            <li key={f.cap}>
              <Reveal delay={f.d}>
                <figure className="p-2 pb-3 md:p-2.5 md:pb-3.5" style={{ backgroundColor: '#fff', rotate: f.rot, boxShadow: '0 8px 24px rgba(30,27,58,0.14)', borderRadius: '14px' }}>
                  <div className="relative overflow-hidden rounded-[9px] aspect-[3/4] mb-2">
                    <Image src={f.src} alt={f.alt} fill sizes="(min-width: 768px) 33vw, 33vw" className="object-cover" style={{ objectPosition: f.pos, transform: `scale(${f.zoom})`, transformOrigin: f.pos }} />
                  </div>
                  <figcaption className={`${display.className} text-center text-[13px] md:text-base font-bold`} style={{ color: C.ink }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={200}>
          <p className="mt-7 text-sm leading-relaxed max-w-2xl" style={{ color: C.muted }}>
            <span className="font-extrabold" style={{ color: C.ink }}>La once también se resuelve aquí:</span>{' '}
            tienen carta de cóctel y pastelería a pedido. Solicítala por WhatsApp.
          </p>
        </Reveal>
      </section>

      {/* ── Tardes de juego: afiche amarillo ── */}
      <section id="tardes" className="scroll-mt-20" style={{ backgroundColor: C.amarillo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-20">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <Banderines className="block w-44 md:w-60 h-8 md:h-11 mb-5" opacity={0.95} />
              <h2 className={`${display.className} font-black uppercase leading-[0.92] text-[2.9rem] md:text-7xl mb-4`} style={{ color: C.ink }}>
                Tardes
                <br />
                de juego
              </h2>
              <p className={`${display.className} font-bold text-xl md:text-3xl leading-tight mb-3`} style={{ color: C.fucsiaD }}>
                De martes a jueves · 15:00 a 20:00
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: 'rgba(30,27,58,0.82)' }}>
                No hace falta cumpleaños: los juegos inflables abren en la
                tarde para venir a jugar.
              </p>
              <a
                href={WA_LINK_TARDES}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[15px] md:text-base font-extrabold px-6 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.ink, color: '#FFFDF8' }}
              >
                Avísanos que vienen
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[22px] aspect-[4/5] md:aspect-[4/4.4]" style={{ rotate: '1.2deg', boxShadow: '0 20px 50px rgba(30,27,58,0.25)', border: '5px solid #fff' }}>
                  <Image
                    src={`${IMG}/juegos-inflables.webp`}
                    alt="Circuito inflable morado y trampolines dentro del galpón de Espacio Aventura"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '84% 55%' }}
                  />
                </div>
                <Globo c={C.fucsia} className="absolute -top-5 -right-2 w-10 h-14 rotate-[14deg] drop-shadow-md" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <Rotulo>Opiniones</Rotulo>
            <p className={`${display.className} font-black leading-none text-[5rem] md:text-[6.5rem] mb-2`} style={{ color: C.ink }}>
              {BIZ.rating}
            </p>
            <div className="mb-2">
              <Stars value={4.9} color="#E8A21B" size={22} />
            </div>
            <p className="text-sm font-bold mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} opiniones en Google
            </p>
            <ul className="flex flex-wrap gap-2.5 max-w-md mb-7">
              {VALORAN.map((v, i) => (
                <li
                  key={v}
                  className="text-xs md:text-[13px] font-bold px-3.5 py-2 rounded-full"
                  style={{ backgroundColor: ['rgba(232,48,138,0.11)', 'rgba(20,184,196,0.13)', 'rgba(61,190,92,0.13)', 'rgba(106,76,195,0.12)'][i], color: [C.fucsiaT, C.turquesaT, C.verdeT, C.violeta][i] }}
                >
                  {v}
                </li>
              ))}
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
              style={{ color: C.violeta, textDecorationColor: 'rgba(106,76,195,0.4)' }}
            >
              Leer las opiniones en Google →
            </a>
          </Reveal>
          <div className="grid gap-5">
            {QUOTES.map((q, i) => (
              <Reveal key={q.name} delay={i * 110}>
                <figure
                  className="relative p-5 md:p-6 pt-6 rounded-[18px]"
                  style={{ backgroundColor: '#fff', border: `1.5px solid ${C.line}`, rotate: i === 1 ? '0.6deg' : '-0.6deg', boxShadow: '0 5px 18px rgba(30,27,58,0.08)' }}
                >
                  <span
                    className="absolute -top-2 left-7 w-16 h-4 rounded-sm"
                    style={{ backgroundColor: q.color, opacity: 0.85, rotate: i === 1 ? '3deg' : '-3deg' }}
                    aria-hidden="true"
                  />
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{q.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.2em] font-extrabold" style={{ color: q.color === C.fucsia ? C.fucsiaT : q.color === C.turquesa ? C.turquesaT : C.violeta }}>
                    {q.name} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar + cierre ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <Rotulo light>Cómo llegar</Rotulo>
              <h2 className={`${display.className} font-black text-[2.5rem] md:text-6xl leading-[0.95] mb-7`} style={{ color: '#FFFDF8' }}>
                Las Mulatas 126,
                <br />
                <span style={{ color: C.amarillo }}>Valdivia</span>
              </h2>
              <ul className="grid gap-4 max-w-md mb-7">
                <li className="flex items-start gap-3.5" style={{ color: '#FFFDF8' }}>
                  <span className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(255,201,60,0.16)', color: C.amarillo }}>
                    <Icon name="pin" className="w-[21px] h-[21px]" />
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold" style={{ color: '#FFFDF8' }}>Las Mulatas 126, Valdivia</p>
                    <p className="text-[12.5px] leading-snug" style={{ color: 'rgba(255,253,248,0.66)' }}>Con estacionamiento privado amplio.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3.5" style={{ color: '#FFFDF8' }}>
                  <span className="w-10 h-10 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(20,184,196,0.16)', color: C.turquesa }}>
                    <Icon name="reloj" className="w-[21px] h-[21px]" />
                  </span>
                  <div>
                    <p className="text-[15px] font-extrabold" style={{ color: '#FFFDF8' }}>Martes, jueves, viernes, sábado y domingo · 9:00 a 22:30</p>
                    <p className="text-[12.5px] leading-snug" style={{ color: 'rgba(255,253,248,0.66)' }}>
                      Lunes y miércoles cerrado. Tardes de juego: martes a jueves, 15:00 a 20:00.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-bold">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.amarillo, textDecorationColor: 'rgba(255,201,60,0.4)' }}
                >
                  Abrir en Google Maps →
                </a>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.amarillo, textDecorationColor: 'rgba(255,201,60,0.4)' }}
                >
                  {BIZ.igHandle} →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="overflow-hidden rounded-[22px]" style={{ border: '1.5px solid rgba(255,201,60,0.35)', boxShadow: '0 16px 44px rgba(0,0,0,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[280px] md:h-[340px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>

          {/* cierre */}
          <div className="mt-14 md:mt-20 pt-10 md:pt-14 text-center" style={{ borderTop: '1.5px dashed rgba(255,253,248,0.22)' }}>
            <Reveal>
              <Banderines className="block w-52 md:w-72 h-9 md:h-12 mx-auto mb-6" opacity={0.95} />
              <h2 className={`${display.className} font-black text-[2.6rem] md:text-[4.2rem] leading-[0.95] mb-4`} style={{ color: '#FFFDF8' }}>
                ¿Celebremos
                <br />
                <span style={{ color: C.fucsia }}>tu cumpleaños?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mx-auto mb-7" style={{ color: 'rgba(255,253,248,0.72)' }}>
                Escríbenos la fecha y cuántos son: te responden con todo lo
                que incluye la celebración.
              </p>
              <div className="flex flex-wrap justify-center items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-[15px] md:text-base font-extrabold px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.amarillo, color: C.ink, boxShadow: '0 10px 28px rgba(0,0,0,0.3)' }}
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  </svg>
                  Cotizar por WhatsApp
                </a>
                <a
                  href={`https://wa.me/${BIZ.phoneTel.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                  className="text-[15px] md:text-base font-extrabold px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44"
                  style={{ borderColor: 'rgba(255,253,248,0.45)', color: '#FFFDF8' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#FFFDF8' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-6 border-t flex flex-col md:flex-row md:items-end justify-between gap-4"
          style={{ borderColor: 'rgba(255,253,248,0.14)' }}
        >
          <div>
            <p className={`${display.className} font-black text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-[13px] leading-relaxed" style={{ color: 'rgba(255,253,248,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`https://wa.me/${BIZ.phoneTel.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.igHandle}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px]" style={{ color: 'rgba(255,253,248,0.62)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,253,248,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 text-[11px] leading-relaxed" style={{ color: 'rgba(255,253,248,0.7)' }}>
            Fotos reales del Instagram y la ficha de Google del local; las
            opiniones son textuales de Google. Dirección, WhatsApp, horarios
            y rating son los reales.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
