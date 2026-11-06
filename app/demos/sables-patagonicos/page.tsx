import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_EVENTO,
  CARTA_URL,
  MAPS_URL,
  MAPS_EMBED,
  HORARIO,
  MENU_PLATOS,
  MENU_GUARNICIONES,
  MENU_INCLUYE,
  EVENTOS,
  REVIEWS,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const caps = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// «Fuego del sur, mesa larga»: el negro tizón de la noche sureña, el
// rojo brasa y el ámbar de la llama de su logo, la madera del local y
// la crema humo del humo de la parrilla.
const C = {
  tizon: '#120D0A',
  tizonBajo: '#0C0806',
  tabla: '#1C130C', // pizarra: negro cálido
  brasa: '#D2321E',
  brasaBtn: '#B32615', // brasa oscura: pasa 4.5:1 con texto crema encima
  brasaOsc: '#A82312', // brasa oscura: pasa 4.5:1 sobre crema
  ambar: '#F4A62A',
  madera: '#6E3B1F',
  maderaBajo: '#241509',
  crema: '#F2E8DA',
  papel: '#EFE4D2',
  mutNoche: 'rgba(242,232,218,0.74)',
  mutCrema: 'rgba(18,13,10,0.68)',
  lineD: 'rgba(244,166,42,0.26)',
  lineL: 'rgba(18,13,10,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sables-patagonicos',
  title: 'Sables Patagónicos · Carnes al sable y buffet en Puerto Montt',
  description:
    'Carnes al sable, parrilladas, tablas para compartir, menú diario y domingos de buffet en Carretera Austral km 11, Parque Turístico Kupange, Puerto Montt. Reserva por WhatsApp.',
  image: '/demos/sables-patagonicos/sable.webp',
})

const NAV_LINKS = [
  { label: 'El sable', href: '#sable' },
  { label: 'Menú', href: '#menu' },
  { label: 'La barra', href: '#barra' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const FRANJA = [
  'CARNES AL SABLE',
  'PARRILLADAS',
  'TABLAS',
  'MENÚ DIARIO',
  'BUFFET DOMINGO',
  'COCTELERÍA',
] as const

/** Chispas de brasa que suben desde el fuego: posición, tamaño y ritmo fijos. */
const CHISPAS = [
  { x: 6, y: 22, s: 4, dur: 4.8, del: 0.2, dx: 22, dy: -190, c: '#F4A62A' },
  { x: 14, y: 14, s: 3, dur: 5.6, del: 1.4, dx: -16, dy: -160, c: '#D2321E' },
  { x: 24, y: 30, s: 5, dur: 4.2, del: 2.1, dx: 30, dy: -210, c: '#F4A62A' },
  { x: 33, y: 18, s: 3, dur: 6.1, del: 0.9, dx: -22, dy: -150, c: '#F4A62A' },
  { x: 45, y: 26, s: 4, dur: 4.9, del: 3.0, dx: 14, dy: -185, c: '#E8573F' },
  { x: 56, y: 16, s: 3, dur: 5.2, del: 0.6, dx: -26, dy: -170, c: '#F4A62A' },
  { x: 66, y: 28, s: 5, dur: 4.4, del: 1.9, dx: 20, dy: -200, c: '#D2321E' },
  { x: 75, y: 20, s: 3, dur: 5.8, del: 0.4, dx: -18, dy: -165, c: '#F4A62A' },
  { x: 84, y: 26, s: 4, dur: 4.6, del: 2.6, dx: 24, dy: -180, c: '#F4A62A' },
  { x: 91, y: 15, s: 3, dur: 6.4, del: 1.1, dx: -20, dy: -155, c: '#E8573F' },
  { x: 18, y: 40, s: 3, dur: 5.0, del: 2.8, dx: 18, dy: -150, c: '#F4A62A' },
  { x: 70, y: 42, s: 4, dur: 4.3, del: 0.8, dx: -24, dy: -175, c: '#F4A62A' },
  { x: 38, y: 44, s: 3, dur: 5.5, del: 1.7, dx: 16, dy: -165, c: '#D2321E' },
  { x: 88, y: 46, s: 4, dur: 4.7, del: 3.4, dx: -14, dy: -190, c: '#F4A62A' },
] as const

/** Flama del logo en miniatura: separador y marca de la casa. */
function Brasa({ className = 'w-3 h-3', color = C.ambar }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M13.2 1.6c2.5 3.6 6.3 5.9 6.3 10.4a6.7 6.7 0 1 1-13.4 0c0-2.5 1.1-4.6 2.6-6.3.4 1.5 1.3 2.6 2.6 3.2-.7-2.6-.4-5.2 1.9-7.3Z" />
    </svg>
  )
}

/** Rótulo en versalitas Barlow Condensed con filete y brasa. */
function Rotulo({ children, color = C.ambar }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${caps.className} flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase mb-6`}
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
      <span>{children}</span>
      <Brasa className="w-2.5 h-2.5 shrink-0" color={color} />
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.brasaBtn,
  ink = C.crema,
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="sp-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-semibold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

function IconIg({ className = 'w-[15px] h-[15px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

/** El sable: hoja de acero con punta, cruceta y empuñadura de madera. */
function SableSvg({ className = 'w-full', gid = 'sp' }: { className?: string; gid?: string }) {
  return (
    <svg viewBox="0 0 320 30" className={className} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={`${gid}-acero`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#EDE6D8" />
          <stop offset="0.45" stopColor="#A29A8E" />
          <stop offset="0.55" stopColor="#6E675E" />
          <stop offset="1" stopColor="#D5CDC0" />
        </linearGradient>
        <linearGradient id={`${gid}-emp`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#5E3D22" />
          <stop offset="1" stopColor="#2E1D10" />
        </linearGradient>
      </defs>
      <path d={`M2 15 L236 12.4 L252 15 L236 17.6 Z`} fill={`url(#${gid}-acero)`} />
      <path d="M10 15 H240" stroke="#4A453E" strokeWidth="0.8" opacity="0.7" />
      <rect x="254" y="6.5" width="6" height="17" rx="2.4" fill="#8C8578" />
      <rect x="262" y="9.5" width="54" height="11" rx="5.5" fill={`url(#${gid}-emp)`} stroke="#7A5230" strokeWidth="0.8" />
      <circle cx="273" cy="15" r="1.4" fill="#C9B18C" />
      <circle cx="288" cy="15" r="1.4" fill="#C9B18C" />
      <circle cx="303" cy="15" r="1.4" fill="#C9B18C" />
    </svg>
  )
}

/** Línea metálica que cruza en diagonal el límite de una sección. */
function CorteSable({ flip = false }: { flip?: boolean }) {
  return (
    <div className="relative h-9 md:h-11 overflow-hidden" aria-hidden="true">
      <div
        className={`absolute left-[-12%] right-[-12%] top-1/2 h-[2px] ${flip ? 'rotate-[1.4deg]' : '-rotate-[1.4deg]'}`}
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(162,154,142,0.0) 12%, rgba(213,205,192,0.55) 32%, rgba(237,230,216,0.85) 50%, rgba(213,205,192,0.55) 68%, rgba(162,154,142,0.0) 88%, transparent 100%)',
        }}
      />
      <Brasa
        className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 ${flip ? 'left-[16%]' : 'right-[16%]'}`}
        color={C.brasa}
      />
    </div>
  )
}

/** Foto con el corte diagonal del sable al hacer scroll. */
function FotoCorte({
  src,
  alt,
  w,
  h,
  ratio,
  sizes,
  className = '',
  pos,
}: {
  src: string
  alt: string
  w: number
  h: number
  ratio: string
  sizes: string
  className?: string
  pos?: string
}) {
  return (
    <div className={`sp-corte relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        className="sp-zoom absolute inset-0 h-full w-full object-cover"
        style={pos ? { objectPosition: pos } : undefined}
      />
    </div>
  )
}

export default function SablesPatagonicosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.tizon, color: C.crema }}
    >
      <style>{`
        /* «La brasa se enciende»: la foto sale del negro como un
           rescoldo que prende, con un clip circular que se abre. */
        @keyframes sp-encender {
          0% { clip-path: circle(0% at 58% 56%); opacity: 0 }
          30% { opacity: 1 }
          100% { clip-path: circle(120% at 58% 56%); opacity: 1 }
        }
        .sp-encendido { animation: sp-encender 1.6s cubic-bezier(.32,.62,.28,1) .15s both }

        /* Rescoldo: el calor ámbar respira una vez al encender. */
        @keyframes sp-rescoldo {
          0% { opacity: 0 }
          45% { opacity: .8 }
          100% { opacity: .32 }
        }
        .sp-rescoldo { animation: sp-rescoldo 2.2s ease-out .3s both }

        /* El titular entra por palabras. */
        @keyframes sp-palabra {
          from { opacity: 0; transform: translateY(24px) }
          to { opacity: 1; transform: none }
        }
        .sp-palabra { display: inline-block; animation: sp-palabra .8s cubic-bezier(.2,.65,.2,1) both; animation-delay: var(--d, 0s) }

        /* El sable se desliza en diagonal hasta quedar bajo el titular. */
        @keyframes sp-sable {
          from { opacity: 0; transform: translate(-64px, 14px) rotate(-4deg) }
          to { opacity: 1; transform: translate(0, 0) rotate(-4deg) }
        }
        .sp-sable { animation: sp-sable .95s cubic-bezier(.25,.7,.2,1) 1.15s both }

        /* Chispas que suben en loop suave. */
        @keyframes sp-chispa {
          0% { transform: translate(0, 0) scale(1); opacity: 0 }
          12% { opacity: .95 }
          55% { opacity: .5 }
          100% { transform: translate(var(--dx, 20px), var(--dy, -170px)) scale(.45); opacity: 0 }
        }
        .sp-chispa { position: absolute; border-radius: 9999px; animation: sp-chispa var(--dur, 4.8s) linear infinite; animation-delay: var(--del, 0s); will-change: transform, opacity }

        @keyframes sp-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .sp-fade { animation: sp-fade .85s ease-out both; animation-delay: var(--d, 0s) }

        /* Cada foto se revela con el corte diagonal del sable. */
        @supports (animation-timeline: view()) {
          .sp-corte { clip-path: polygon(0 0, -4% 0, -24% 100%, 0 100%); animation: sp-corte linear both; animation-timeline: view(); animation-range: entry 4% entry 62% }
          @keyframes sp-corte { to { clip-path: polygon(0 0, 122% 0, 100% 100%, 0 100%) } }
          .sp-zoom { transform: scale(1.07); animation: sp-zoom linear both; animation-timeline: view(); animation-range: entry 4% entry 85% }
          @keyframes sp-zoom { to { transform: scale(1) } }
        }

        .sp-btn { transition: transform .18s ease, filter .18s ease }
        .sp-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .sp-btn:active { transform: scale(.97) }
        .sp-btn:focus-visible { outline: 3px solid ${C.ambar}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .sp-encendido, .sp-rescoldo, .sp-palabra, .sp-sable, .sp-fade { animation: none !important }
          .sp-encendido { clip-path: none !important }
          .sp-chispa { display: none !important }
          .sp-corte { clip-path: none !important; animation: none !important }
          .sp-zoom { transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${caps.className} text-xl md:text-2xl font-semibold tracking-[0.06em] truncate`}>
            Sables Patagónicos
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(18,13,10,0.94)',
          ink: C.crema,
          line: 'rgba(244,166,42,0.22)',
          btnBg: C.brasaBtn,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero noche: la brasa se enciende ── */}
      <section id="inicio" className="relative min-h-svh overflow-hidden flex flex-col" style={{ backgroundColor: C.tizon }}>
        {/* La foto del sable prende desde el negro */}
        <div className="sp-encendido absolute inset-0 md:left-auto md:w-[46%]" aria-hidden="true">
          <Image
            src={`${IMG}/sable.webp`}
            alt=""
            fill
            priority
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
            style={{ objectPosition: '52% 58%' }}
          />
        </div>
        {/* Velos para el texto y rescoldo ámbar */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none md:left-auto md:w-[46%]"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,13,10,0.5) 0%, rgba(18,13,10,0.16) 42%, rgba(18,13,10,0.94) 92%), linear-gradient(90deg, rgba(18,13,10,0.72) 0%, rgba(18,13,10,0.1) 46%)',
          }}
        />
        <div
          aria-hidden="true"
          className="sp-rescoldo absolute inset-0 pointer-events-none md:left-auto md:w-[46%]"
          style={{
            background:
              'radial-gradient(560px 340px at 60% 74%, rgba(244,166,42,0.34), transparent 68%), radial-gradient(340px 220px at 82% 88%, rgba(210,50,30,0.3), transparent 70%)',
          }}
        />
        {/* En escritorio el velo une el negro con la foto */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none hidden md:block"
          style={{
            background:
              'linear-gradient(90deg, #120D0A 44%, rgba(18,13,10,0.55) 52%, rgba(18,13,10,0) 68%)',
          }}
        />
        {/* Chispas de brasa */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {CHISPAS.map((s, i) => (
            <span
              key={i}
              className="sp-chispa"
              style={
                {
                  left: `${s.x}%`,
                  bottom: `${s.y}%`,
                  width: s.s,
                  height: s.s,
                  backgroundColor: s.c,
                  boxShadow: `0 0 9px 2px ${s.c === '#D2321E' ? 'rgba(210,50,30,0.7)' : 'rgba(244,166,42,0.6)'}`,
                  '--dur': `${s.dur}s`,
                  '--del': `${s.del}s`,
                  '--dx': `${s.dx}px`,
                  '--dy': `${s.dy}px`,
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="relative flex-1 flex flex-col justify-end max-w-6xl mx-auto w-full px-5 md:px-8 pb-9 md:pb-14 pt-24">
          <p
            className={`${caps.className} sp-fade flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase mb-5`}
            style={{ color: C.ambar, '--d': '0.15s' } as CSSProperties}
          >
            <span className="block h-px w-7 shrink-0" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
            <span>Carretera Austral km 11 · Puerto Montt</span>
          </p>

          <h1
            className={`${display.className} font-medium leading-[1.0] tracking-[-0.015em] text-[clamp(2.9rem,11vw,6rem)]`}
            style={{ color: C.crema }}
          >
            <span className="sp-palabra" style={{ '--d': '0.35s' } as CSSProperties}>Fuego</span>{' '}
            <span className="sp-palabra" style={{ '--d': '0.45s' } as CSSProperties}>del</span>{' '}
            <span className="sp-palabra" style={{ '--d': '0.55s' } as CSSProperties}>sur,</span>
            <br />
            <em className="sp-palabra font-medium" style={{ color: C.ambar, '--d': '0.68s' } as CSSProperties}>mesa</em>{' '}
            <em className="sp-palabra font-medium" style={{ color: C.ambar, '--d': '0.78s' } as CSSProperties}>larga.</em>
          </h1>

          <div className="sp-sable mt-3 w-[min(300px,72vw)]" aria-hidden="true">
            <SableSvg className="block w-full h-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" gid="hero" />
          </div>

          <p
            className="sp-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(242,232,218,0.9)', '--d': '1.3s' } as CSSProperties}
          >
            Carnes al sable, parrilladas, tablas para compartir y
            coctelería de autor, rodeados de naturaleza en Kupange.
          </p>

          <div className="sp-fade mt-6 flex flex-wrap gap-3" style={{ '--d': '1.45s' } as CSSProperties}>
            <BtnWa>Reserva por WhatsApp</BtnWa>
            <a
              href={CARTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="sp-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-base font-semibold tap-44"
              style={{ border: '1px solid rgba(242,232,218,0.55)', color: C.crema, backgroundColor: 'rgba(18,13,10,0.35)' }}
            >
              Ver la carta
            </a>
          </div>

          <div className="sp-fade mt-6 flex items-center gap-3" style={{ '--d': '1.6s' } as CSSProperties}>
            <Stars value={BIZ.ratingValue} color={C.ambar} size={17} />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tap-44"
              style={{ color: 'rgba(242,232,218,0.85)' }}
            >
              <strong className="font-bold" style={{ color: C.crema }}>{BIZ.rating}</strong>
              {' '}· {BIZ.reviews} opiniones en Google
            </a>
          </div>
        </div>
      </section>

      {/* ── 2 · Franja ── */}
      <div className="border-y" style={{ backgroundColor: C.tizonBajo, borderColor: C.lineD }} aria-hidden="true">
        <div
          className={`${caps.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] md:text-xs font-medium tracking-[0.3em]`}
          style={{ color: C.ambar }}
        >
          {FRANJA.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              {i > 0 && <Brasa className="w-2 h-2" color={C.brasa} />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3 · El sable: el corte justo ── */}
      <section id="sable" className="scroll-mt-20 relative" style={{ backgroundColor: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Rotulo>El sable · Carnes y parrilladas</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,4rem)]`}
              >
                El corte justo, en el{' '}
                <em style={{ color: C.ambar }}>punto justo.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                <p>
                  Esa costra tostada y el jugo por dentro no se
                  improvisan, se ganan a temperatura perfecta.
                </p>
                <p>
                  La carne viaja del fuego a tu mesa ensartada en el
                  sable, y el parrillero la corta ahí mismo: caliente,
                  en su punto.
                </p>
              </div>
              <p className="mt-8 flex items-center gap-3">
                <Brasa className="w-3 h-3" color={C.brasa} />
                <span className="block h-px w-16" style={{ backgroundColor: 'rgba(213,205,192,0.4)' }} aria-hidden="true" />
                <Brasa className="w-3 h-3" />
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="relative h-[400px] md:h-[540px]">
                <div className="absolute left-0 top-0 w-[62%] h-[86%]">
                  <FotoCorte
                    src={`${IMG}/corte.webp`}
                    alt="Corte de carne con su costra tostada y el jugo por dentro, sobre la tabla"
                    w={1024}
                    h={1280}
                    ratio="h-full w-full"
                    sizes="(min-width: 1024px) 40vw, 62vw"
                  />
                </div>
                <div
                  className="absolute right-0 bottom-0 w-[44%] h-[62%]"
                  style={{ outline: `1px solid ${C.lineD}`, outlineOffset: '7px' }}
                >
                  <FotoCorte
                    src={`${IMG}/parrillero.webp`}
                    alt="El parrillero sirviendo la carne desde el sable, directo en la mesa"
                    w={1024}
                    h={1280}
                    ratio="h-full w-full"
                    sizes="(min-width: 1024px) 28vw, 44vw"
                  />
                </div>
                <div
                  className="absolute -left-1 bottom-[8%] w-[26%] max-w-[150px]"
                  aria-hidden="true"
                >
                  <SableSvg className="block w-full h-auto rotate-[-4deg] drop-shadow-[0_3px_8px_rgba(0,0,0,0.65)]" gid="corte" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CorteSable />

      {/* ── 4 · Menú diario: la pizarra ── */}
      <section id="menu" className="scroll-mt-20" style={{ backgroundColor: C.maderaBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <Rotulo>Menú diario</Rotulo>
                <h2
                  className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,3.8rem)]`}
                >
                  Comida honesta, en{' '}
                  <em style={{ color: C.ambar }}>porciones generosas.</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                  De miércoles a sábado, de 13:00 a 17:00: plato principal
                  y guarnición a elección, con todo lo que completa la
                  experiencia.
                </p>
                <div className="mt-8">
                  <a
                    href={CARTA_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-semibold tap-44"
                    style={{ backgroundColor: C.ambar, color: C.tizon }}
                  >
                    Ver la carta
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 13L13 3M6 3h7v7" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* La pizarra */}
            <Reveal delay={80} className="lg:col-span-8">
              <div
                className="rounded-lg p-6 md:p-9 rotate-[-0.4deg]"
                style={{
                  backgroundColor: C.tabla,
                  border: `1px solid ${C.lineD}`,
                  boxShadow: '0 26px 70px rgba(0,0,0,0.5), inset 0 0 0 5px rgba(110,59,31,0.25), inset 0 0 0 6px rgba(244,166,42,0.16)',
                }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-5 border-b" style={{ borderColor: 'rgba(244,166,42,0.22)' }}>
                  <h3 className={`${display.className} italic font-medium text-3xl md:text-4xl leading-none`} style={{ color: C.ambar }}>
                    Menú diario
                  </h3>
                  <p className={`${caps.className} text-[11px] md:text-xs font-medium tracking-[0.22em] uppercase`} style={{ color: C.mutNoche }}>
                    Miércoles a sábado · 13:00 a 17:00
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mt-7">
                  <div>
                    <h4 className={`${caps.className} flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.26em] uppercase pb-3 border-b`} style={{ color: C.ambar, borderColor: 'rgba(242,232,218,0.14)' }}>
                      <Brasa className="w-2.5 h-2.5 shrink-0" color={C.brasa} />
                      Plato principal · a elección
                    </h4>
                    <ul>
                      {MENU_PLATOS.map((p) => (
                        <li
                          key={p}
                          className={`${display.className} py-2 border-b font-medium text-[17px] md:text-lg leading-snug`}
                          style={{ borderColor: 'rgba(242,232,218,0.09)', color: C.crema }}
                        >
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className={`${caps.className} flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.26em] uppercase pb-3 border-b`} style={{ color: C.ambar, borderColor: 'rgba(242,232,218,0.14)' }}>
                      <Brasa className="w-2.5 h-2.5 shrink-0" color={C.brasa} />
                      Guarnición · a elección
                    </h4>
                    <ul>
                      {MENU_GUARNICIONES.map((g) => (
                        <li
                          key={g}
                          className={`${display.className} py-2 border-b font-medium text-[17px] md:text-lg leading-snug`}
                          style={{ borderColor: 'rgba(242,232,218,0.09)', color: C.crema }}
                        >
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t" style={{ borderColor: 'rgba(244,166,42,0.22)' }}>
                  <p className={`${caps.className} text-[11px] font-semibold tracking-[0.26em] uppercase mb-3`} style={{ color: C.ambar }}>
                    Siempre incluye
                  </p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-2">
                    {MENU_INCLUYE.map((inc) => (
                      <li key={inc} className="flex items-center gap-2.5 text-sm md:text-base" style={{ color: C.mutNoche }}>
                        <Brasa className="w-2 h-2 shrink-0" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Para compartir y domingos de buffet ── */}
      <section id="compartir" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal delay={80}>
                <div className="relative max-w-[440px]">
                  <FotoCorte
                    src={`${IMG}/tapas.webp`}
                    alt="Bandeja turquesa con entradas para compartir: tostadas, pebre y embutidos de la casa"
                    w={1024}
                    h={1280}
                    ratio="aspect-[4/5]"
                    sizes="(min-width: 1024px) 44vw, 100vw"
                  />
                  <p
                    className={`${caps.className} absolute -bottom-4 left-4 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase`}
                    style={{ backgroundColor: C.tizon, color: C.ambar }}
                  >
                    Para el centro de la mesa
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <Rotulo color={C.brasaOsc}>Tablas · Para compartir</Rotulo>
                <h2
                  className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,3.9rem)]`}
                >
                  La mesa se arma{' '}
                  <em style={{ color: C.brasaOsc }}>al centro.</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                  <p>
                    Tablas para compartir como la Tabla Caleta La Arena,
                    entradas y picoteos para abrir el apetito mientras
                    llega la parrilla.
                  </p>
                </div>
                <ul className="mt-7 space-y-0 max-w-md">
                  {['Tablas para compartir', 'Tabla Caleta La Arena', 'Entradas y picoteos', 'Domingos de buffet'].map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-3 py-2.5 border-b text-[15px] md:text-base"
                      style={{ borderColor: C.lineL, color: C.mutCrema }}
                    >
                      <Brasa className="w-2.5 h-2.5 shrink-0 translate-y-[1px]" color={C.brasaOsc} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Domingos de buffet */}
        <div style={{ backgroundColor: C.madera }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <Reveal>
                <p className={`${caps.className} flex items-center gap-3 text-[11px] font-medium tracking-[0.3em] uppercase mb-4`} style={{ color: 'rgba(242,232,218,0.85)' }}>
                  <Brasa className="w-2.5 h-2.5" color={C.ambar} />
                  Solo un día a la semana
                </p>
                <h3
                  className={`${display.className} font-medium leading-[1.0] tracking-[-0.01em] text-[clamp(2.4rem,7vw,4.4rem)]`}
                  style={{ color: C.crema }}
                >
                  Domingos de <em style={{ color: C.ambar }}>buffet.</em>
                </h3>
                <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(242,232,218,0.85)' }}>
                  El domingo la mesa se sirve completa: buffet de mediodía
                  en medio de la naturaleza de Kupange.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Reveal delay={120}>
                <BtnWa bg={C.tizon} ink={C.crema}>Reserva tu domingo</BtnWa>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · La barra y el dulce final ── */}
      <section id="barra" className="scroll-mt-20" style={{ backgroundColor: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Rotulo>La barra · Coctelería de autor</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,3.9rem)]`}
              >
                No solo dominamos la{' '}
                <em style={{ color: C.ambar }}>brasa.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                También sabemos de buenos tragos: coctelería de autor
                para la sobremesa, y para terminar, algo dulce.
              </p>
            </Reveal>
          </div>

          {/* Grilla con ritmo: tres tragos y dos postres */}
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            <Reveal className="col-span-1 row-span-2">
              <FotoCorte
                src={`${IMG}/coctel-rosado.webp`}
                alt="Cóctel rosado servido en copa, con fruta, en la terraza de madera"
                w={1024}
                h={1280}
                ratio="aspect-[3/4] h-full"
                sizes="(min-width: 1024px) 24vw, 48vw"
              />
            </Reveal>
            <Reveal className="col-span-1" delay={80}>
              <FotoCorte
                src={`${IMG}/coctel-naranja.webp`}
                alt="Cóctel naranja con mora en copa de cóctel"
                w={718}
                h={957}
                ratio="aspect-square"
                sizes="(min-width: 1024px) 24vw, 48vw"
                pos="50% 42%"
              />
            </Reveal>
            <Reveal className="col-span-1 lg:col-span-2" delay={140}>
              <FotoCorte
                src={`${IMG}/coctel-cremoso.webp`}
                alt="Cóctel cremoso coronado con granos de café, en la barra de madera"
                w={719}
                h={958}
                ratio="aspect-square lg:aspect-auto lg:h-full"
                sizes="(min-width: 1024px) 48vw, 48vw"
                pos="50% 40%"
              />
            </Reveal>
            <Reveal className="col-span-1" delay={100}>
              <FotoCorte
                src={`${IMG}/postre-copa.webp`}
                alt="Postre de la casa en copa"
                w={720}
                h={1280}
                ratio="aspect-[3/4]"
                sizes="(min-width: 1024px) 24vw, 48vw"
                pos="50% 24%"
              />
            </Reveal>
            <Reveal className="col-span-1" delay={160}>
              <FotoCorte
                src={`${IMG}/postre-frutas.webp`}
                alt="Postre con frutas frescas: piña, arándanos y cítricos"
                w={719}
                h={958}
                ratio="aspect-[3/4]"
                sizes="(min-width: 1024px) 24vw, 48vw"
                pos="50% 55%"
              />
            </Reveal>
            <Reveal className="col-span-2 lg:col-span-1" delay={200}>
              <div
                className="h-full min-h-[120px] flex flex-col justify-center px-6 py-6 border"
                style={{ borderColor: C.lineD, backgroundColor: 'rgba(244,166,42,0.06)' }}
              >
                <p className={`${display.className} italic font-medium text-2xl md:text-2xl leading-snug`} style={{ color: C.ambar }}>
                  «Terminar la comida con algo dulce siempre es una buena idea.»
                </p>
                <p className={`${caps.className} mt-3 text-[11px] font-medium tracking-[0.26em] uppercase`} style={{ color: C.mutNoche }}>
                  Postres de la casa
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CorteSable flip />

      {/* ── 7 · Eventos en Kupange ── */}
      <section id="eventos" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Rotulo color={C.brasaOsc}>Eventos · Parque Kupange</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,3.9rem)]`}
              >
                Tu evento, <em style={{ color: C.brasaOsc }}>a medida.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                Salón de madera y aire libre en el Parque Turístico
                Kupange. Escríbenos y arma tu evento a medida.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2.5 max-w-2xl">
                {EVENTOS.map((e) => (
                  <li
                    key={e}
                    className={`${caps.className} px-4 py-2 text-[12px] md:text-[13px] font-semibold tracking-[0.14em] uppercase border`}
                    style={{ borderColor: 'rgba(110,59,31,0.4)', color: C.madera, backgroundColor: 'rgba(110,59,31,0.06)' }}
                  >
                    {e}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <BtnWa href={WA_EVENTO}>Cotiza tu evento</BtnWa>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={100}>
              <FotoCorte
                src={`${IMG}/salon.webp`}
                alt="El salón de Sables Patagónicos: mesas largas con mantelería de colores y vigas de madera"
                w={720}
                h={1280}
                ratio="aspect-[4/5] max-w-[400px]"
                sizes="(min-width: 1024px) 38vw, 100vw"
                pos="50% 38%"
                className="mx-auto"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo>Opiniones · Google</Rotulo>
                <p className="flex items-baseline gap-4">
                  <span className={`${display.className} font-medium leading-none text-[clamp(4.6rem,12vw,7.5rem)]`} style={{ color: C.ambar }}>
                    {BIZ.rating}
                  </span>
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.ambar} size={22} />
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold tap-44"
                  style={{ color: C.crema }}
                >
                  {BIZ.reviews} opiniones en Google
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <blockquote>
                  <p className={`${display.className} font-medium leading-[1.15] text-[clamp(1.5rem,4.2vw,2.3rem)]`} style={{ color: C.crema }}>
                    “{REVIEWS[0].text}”
                  </p>
                  <footer className="mt-5 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.mutNoche }}>
                    <Brasa className="w-2.5 h-2.5" color={C.brasa} />
                    {REVIEWS[0].author}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
            {REVIEWS.slice(1).map((r, i) => (
              <Reveal key={r.author} delay={i * 120}>
                <blockquote className="border-t pt-6" style={{ borderColor: 'rgba(242,232,218,0.14)' }}>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                    “{r.text}”
                  </p>
                  <footer className="mt-4 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.crema }}>
                    <Brasa className="w-2.5 h-2.5" color={C.brasa} />
                    {r.author}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 · Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.tizon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo color={C.brasaOsc}>Cómo llegar</Rotulo>
                <h2
                  className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,3.9rem)]`}
                >
                  Carretera Austral,{' '}
                  <em style={{ color: C.brasaOsc }}>km 11.</em>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                  {BIZ.address}, {BIZ.city}. Un entorno rodeado de
                  naturaleza, dentro del Parque Turístico Kupange.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-9 max-w-md">
                  <h3 className={`${caps.className} text-[11px] font-semibold tracking-[0.28em] uppercase mb-4`} style={{ color: C.brasaOsc }}>
                    Horario
                  </h3>
                  {HORARIO.map((h) => (
                    <p
                      key={h.dias}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3 border-b text-base"
                      style={{ borderColor: C.lineL, color: C.mutCrema }}
                    >
                      <span>{h.dias}</span>
                      <span className={`${display.className} text-lg font-medium`} style={{ color: C.tizon }}>
                        {h.horas}
                      </span>
                    </p>
                  ))}
                  <p className="mt-4 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.brasaOsc }}>
                    <Brasa className="w-2.5 h-2.5" color={C.brasaOsc} />
                    Te recomendamos reservar.
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tap-44"
                    style={{ color: C.brasaOsc }}
                  >
                    Abrir en Google Maps
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 13L13 3M6 3h7v7" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 22px 60px rgba(18,13,10,0.14)' }}
                >
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa: Sables Patagónicos en Carretera Austral km 11, Puerto Montt"
                    className="block w-full h-[320px] md:h-[420px]"
                    style={{ border: 0, backgroundColor: C.papel }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 10 · Cierre: el sabor de reunirse ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tizon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(720px 420px at 50% 78%, rgba(210,50,30,0.22), transparent 66%), radial-gradient(520px 320px at 50% 100%, rgba(244,166,42,0.14), transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="mx-auto w-[min(240px,58vw)]" aria-hidden="true">
              <SableSvg className="block w-full h-auto" gid="cierre" />
            </div>
            <h2
              className={`${display.className} mt-8 font-medium leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,4.8rem)]`}
              style={{ color: C.crema }}
            >
              El sabor de <em style={{ color: C.ambar }}>reunirse.</em>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
              Reserva tu mesa y ven a vivir la experiencia patagónica,
              al km 11 de la Carretera Austral.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <BtnWa>Reserva por WhatsApp</BtnWa>
              <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-2xl font-medium tap-44`} style={{ color: C.crema }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11 · Footer ── */}
      <footer className="border-t" style={{ backgroundColor: C.tizonBajo, borderColor: 'rgba(244,166,42,0.2)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              width={150}
              height={150}
              className="h-9 w-9 rounded-full"
            />
            <div>
              <p className={`${caps.className} text-base font-semibold tracking-[0.16em] uppercase`} style={{ color: C.crema }}>
                Sables Patagónicos
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.mutNoche }}>
                {BIZ.rubro}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs" style={{ color: C.mutNoche }}>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 tap-44" style={{ color: C.crema }}>
              <IconIg /> {BIZ.igUser}
            </a>
            <a href={CARTA_URL} target="_blank" rel="noopener noreferrer" className="tap-44" style={{ color: C.crema }}>
              Ver la carta
            </a>
            <span>{BIZ.address}, {BIZ.city}</span>
            <a href={`tel:${BIZ.phoneTel}`} className="tap-44" style={{ color: C.crema }}>
              {BIZ.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp" />
    </div>
  )
}
