import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_MASAS, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import { Sirve } from './sirve'

const display = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})
const caps = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})

/**
 * Dirección de arte: «la orilla del camino». Madera nogal del letrero y
 * del local, dorado del logo, verde del campo que rodea el restaurante,
 * crema de mantel y rojo greda de la cocina sureña. El motivo gráfico es
 * el camino rural: la línea central discontinua y el hito kilométrico
 * del km 1,5. Lora para los titulares (con cursiva en la palabra clave),
 * Oswald para los rótulos y las señales, Source Sans 3 para el texto.
 */
const C = {
  nogal: '#4A2C1A',
  nogalDeep: '#2E1B0E',
  nogalNight: '#221204',
  tabla: '#6B4A2E',
  oro: '#E2B23A',
  oroInk: '#7A5C10',
  verde: '#4E6B39',
  verdeInk: '#3A5227',
  verdeOsc: '#2E4220',
  crema: '#FBF4E6',
  papel: '#FFFBF0',
  greda: '#A3452C',
  gredaInk: '#7E3420',
  tinta: '#2B1A0E',
  muted: '#71573F',
  mutD: 'rgba(251,244,230,0.74)',
  lineD: 'rgba(251,244,230,0.16)',
  lineL: 'rgba(74,44,26,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'comidas-de-campo-villarrica',
  title: 'Comidas de Campo · Comida casera en camino Ñancul, Villarrica',
  description:
    'Restaurante de campo en el km 1,5 del camino Ñancul a Pitrufquén, Villarrica: cazuela, empanadas, pastel de choclo y comida casera. Estacionamiento propio. 4,8 en Google. Reserva por WhatsApp.',
  image: `${IMG}/cazuela.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'Fiestas Patrias', href: '#fiestas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const SENALES = [
  {
    t: 'Comida casera',
    d: 'Platos caseros preparados con cariño y llenos de tradición, como los de la casa.',
    madera: false,
  },
  {
    t: 'Fresco de la tierra',
    d: 'Ingredientes frescos y sabores auténticos de la tierra, en cada plato.',
    madera: false,
  },
  {
    t: 'Ambiente familiar',
    d: 'Atención cercana, atendido por sus dueños: te hacen sentir en casa.',
    madera: true,
  },
  {
    t: 'Estacionamiento',
    d: 'Propio, amplio y gratis: bajas del auto y entras.',
    parking: true,
  },
]

const PLATOS = [
  { src: 'empanada.webp', w: 900, h: 1600, name: 'Empanadas de horno', note: 'doradas, recién salidas' },
  { src: 'guatitas.webp', w: 1440, h: 1080, name: 'Guatitas a la jardinera', note: 'con papas fritas' },
  { src: 'chuleta-kassler.webp', w: 1440, h: 851, name: 'Chuletas kassler', note: 'con puré casero' },
  { src: 'choritos.webp', w: 1590, h: 1600, name: 'Choritos', note: 'con limón y cilantro' },
]

const MAS_PLATOS = ['cazuela', 'pastel de choclo', 'salmón', 'papas', 'platos al jugo', 'ahumados']

// ── Piezas del camino ────────────────────────────────────────

/** Rótulo: versalitas Oswald con un tramo de línea de camino. */
function Rotulo({ children, color, centered = false }: { children: React.ReactNode; color: string; centered?: boolean }) {
  return (
    <p
      className={`${caps.className} flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em] ${centered ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <span
        className="inline-block h-[4px] w-9 shrink-0"
        style={{ backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 9px, transparent 9px 15px)` }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** Franja fina de camino que separa secciones: la carretera sigue. */
function CintaCamino() {
  return (
    <div aria-hidden="true" className="h-[26px] flex items-center" style={{ backgroundColor: C.nogalDeep }}>
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <div
          className="h-[4px] w-full"
          style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(251,244,230,0.7) 0 26px, transparent 26px 46px)' }}
        />
      </div>
    </div>
  )
}

/** Hito kilométrico: el poste blanco de los caminos de Chile. */
function Hito() {
  return (
    <div className={`cc-hito ${caps.className}`} aria-hidden="true">
      <span className="cc-hito-km">KM</span>
      <span className="cc-hito-num">1,5</span>
      <span className="cc-hito-cam">Camino Ñancul</span>
    </div>
  )
}

/** Vapor que sube de la cazuela. */
function Vapor() {
  return (
    <span className="cc-vapor" aria-hidden="true">
      <span className="cc-vapo" />
      <span className="cc-vapo" />
      <span className="cc-vapo" />
    </span>
  )
}

function IconWa({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
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

function IconFb({ className = 'w-[15px] h-[15px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H7.5v3h2.3v7h3.7Z" />
    </svg>
  )
}

function IconPin({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  )
}

function IconClock({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  )
}

/** Letrero cuadrado de estacionamiento, como los de verdad. */
function IconPark({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M9.5 17V8h4a3.2 3.2 0 1 1 0 6.4h-4" />
    </svg>
  )
}

/** Empanada de horno en trazo, con el repulgo arriba. */
function IconEmpanada({ className = 'w-12 h-12' }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 30c0-9.4 7.6-17 17-17s17 7.6 17 17c0 2.2-1.8 4-4 4H11c-2.2 0-4-1.8-4-4Z" />
      <path d="M12.5 24.5c1.5-2 4-2 5.5-.4M20.6 20.6c1.7-1.8 4.3-1.6 5.7.1M29.4 20.9c1.6-1.7 4.2-1.5 5.6.3" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.oro,
  ink = C.nogalDeep,
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
      className="cc-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-[15px] font-bold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <IconWa />
      {children}
    </a>
  )
}

function BtnLine({ children, href, dark = true }: { children: React.ReactNode; href: string; dark?: boolean }) {
  return (
    <a
      href={href}
      className="cc-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tap-44"
      style={
        dark
          ? { border: '1.5px solid rgba(251,244,230,0.55)', color: C.crema }
          : { border: `1.5px solid ${C.nogal}`, color: C.nogal }
      }
    >
      {children}
    </a>
  )
}

/** Señal verde de destino: las letreras de los caminos de Chile. */
function Senal({ children, madera = false, parking = false }: { children: React.ReactNode; madera?: boolean; parking?: boolean }) {
  if (parking) {
    return (
      <span
        className={`${caps.className} inline-flex items-center gap-3 rounded-lg px-4 py-2.5 text-base font-semibold uppercase tracking-[0.14em]`}
        style={{ backgroundColor: C.crema, color: C.verdeInk, border: `2.5px solid ${C.verde}`, boxShadow: '0 10px 24px rgba(46,27,14,0.14)' }}
      >
        <span
          className="flex h-7 w-7 items-center justify-center rounded-[6px] text-[15px] font-bold"
          style={{ backgroundColor: C.verde, color: C.crema }}
          aria-hidden="true"
        >
          P
        </span>
        {children}
      </span>
    )
  }
  return (
    <span className="inline-flex flex-col">
      <span
        className={`${caps.className} inline-flex items-center justify-between gap-4 rounded-md px-5 py-2.5 text-base font-semibold uppercase tracking-[0.14em]`}
        style={
          madera
            ? {
                backgroundColor: C.nogal,
                color: C.crema,
                boxShadow: `inset 0 0 0 2px ${C.oro}, 0 10px 24px rgba(46,27,14,0.2)`,
              }
            : {
                backgroundColor: C.verde,
                color: C.crema,
                boxShadow: 'inset 0 0 0 2.5px rgba(251,244,230,0.92), 0 10px 24px rgba(46,27,14,0.16)',
              }
        }
      >
        {children}
        <span aria-hidden="true">→</span>
      </span>
      {madera && (
        <span className="mx-auto flex gap-7" aria-hidden="true">
          <span className="block h-4 w-[5px] rounded-b-sm" style={{ backgroundColor: C.nogal }} />
          <span className="block h-4 w-[5px] rounded-b-sm" style={{ backgroundColor: C.nogal }} />
        </span>
      )}
    </span>
  )
}

/** Poste chico del camino que marca cada parada de la línea. */
function Poste({ lado }: { lado: 'izq' | 'der' }) {
  return (
    <span
      className={`absolute left-[13px] top-1.5 flex h-[22px] w-[15px] flex-col overflow-hidden rounded-[3px] border ${
        lado === 'izq' ? 'md:-right-[2.55rem] md:left-auto' : 'md:-left-[2.55rem]'
      }`}
      style={{ borderColor: C.nogal, backgroundColor: C.crema, boxShadow: '0 3px 8px rgba(46,27,14,0.2)' }}
      aria-hidden="true"
    >
      <span className="block h-[6px] w-full" style={{ backgroundColor: C.verde }} />
      <span className={`${caps.className} flex-1 text-center text-[8px] font-bold leading-[13px]`} style={{ color: C.nogal }}>
        km
      </span>
    </span>
  )
}

export default function ComidasDeCampoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* «Llegando por el camino»: la línea central del camino avanza
           hacia el visitante en loop (el plano está en perspectiva real,
           así que las marcas se juntan en el horizonte). */
        .cc-persp { perspective: 660px; perspective-origin: 50% 0% }
        .cc-road {
          position: absolute; left: 50%; top: -2%; width: clamp(200px, 26vw, 280px); height: 330%;
          transform-origin: 50% 0;
          transform: translateX(-50%) rotateX(56deg);
          background:
            linear-gradient(90deg, rgba(251,244,230,0.85) 0 6px, transparent 6px calc(100% - 6px), rgba(251,244,230,0.85) calc(100% - 6px)),
            linear-gradient(180deg, #5E4930 0%, #7D623F 55%, #947650 100%);
        }
        .cc-dashes {
          position: absolute; left: 50%; top: -64px; bottom: 0; width: 9px;
          transform: translateX(-50%);
          background: repeating-linear-gradient(180deg, #F6E7BC 0 26px, transparent 26px 64px);
          animation: cc-avanza 0.85s linear infinite;
          will-change: transform;
        }
        @keyframes cc-avanza { to { transform: translateX(-50%) translateY(64px) } }

        /* El hito del km 1,5 se levanta al llegar, con un vaivén de poste real. */
        .cc-hito {
          position: absolute; bottom: 7px; left: calc(50% - 128px);
          display: flex; flex-direction: column; align-items: center;
          min-width: 82px; overflow: hidden;
          background: ${C.crema};
          border: 2px solid ${C.nogalDeep};
          border-radius: 9px 9px 3px 3px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.45);
          animation: cc-sube 1s cubic-bezier(0.25,0.7,0.3,1) 0.85s both;
        }
        @media (min-width: 768px) { .cc-hito { left: calc(50% - 190px) } }
        @keyframes cc-sube {
          0% { transform: translateY(74px) rotate(-8deg); opacity: 0 }
          55% { transform: translateY(-5px) rotate(2.5deg); opacity: 1 }
          80% { transform: translateY(2px) rotate(-1deg) }
          100% { transform: translateY(0) rotate(0) }
        }
        .cc-hito-km {
          width: 100%; padding: 2px 0; text-align: center;
          background: ${C.verde}; color: ${C.crema};
          font-size: 9px; font-weight: 600; letter-spacing: 0.22em;
        }
        .cc-hito-num { font-size: 24px; font-weight: 700; line-height: 1.15; color: ${C.nogalDeep} }
        .cc-hito-cam { padding: 0 4px 4px; font-size: 7px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: ${C.muted} }

        /* El vapor de la cazuela: tres hilos que suben y se abren. */
        .cc-vapor { position: absolute; left: 50%; top: -8px; width: 130px; height: 74px; transform: translateX(-50%); pointer-events: none }
        .cc-vapo {
          position: absolute; bottom: 0; width: 15px; height: 34px; border-radius: 50%;
          background: rgba(255,252,245,0.55); filter: blur(5px); opacity: 0;
          animation: cc-vapor 2.7s ease-in-out infinite;
        }
        .cc-vapo:nth-child(1) { left: 28%; animation-delay: 1.5s }
        .cc-vapo:nth-child(2) { left: 47%; animation-delay: 2.4s }
        .cc-vapo:nth-child(3) { left: 63%; animation-delay: 3.2s }
        @keyframes cc-vapor {
          0% { transform: translateY(8px) scaleX(1); opacity: 0 }
          35% { opacity: 0.6 }
          100% { transform: translateY(-54px) scaleX(1.7); opacity: 0 }
        }

        /* La cazuela llega a la mesa. */
        @keyframes cc-platoHero {
          from { opacity: 0; transform: translateY(44px) rotate(-4deg) scale(0.94) }
          to { opacity: 1; transform: none }
        }
        .cc-platoHero { animation: cc-platoHero 1.1s cubic-bezier(0.2,0.65,0.25,1) 1.1s both }

        /* El titular entra palabra por palabra, como llegando. */
        @keyframes cc-palabra { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .cc-palabra { display: inline-block; animation: cc-palabra 0.85s cubic-bezier(0.22,0.61,0.2,1) both }
        @keyframes cc-aparece { from { opacity: 0; transform: translateY(15px) } to { opacity: 1; transform: none } }
        .cc-aparece { animation: cc-aparece 0.8s ease-out both }

        .cc-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .cc-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .cc-btn:active { transform: translateY(0) scale(0.97) }
        .cc-btn:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .cc-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .cc-dashes, .cc-hito, .cc-vapo, .cc-platoHero, .cc-palabra, .cc-aparece { animation: none !important }
          .cc-vapor { display: none }
        }
      `}</style>

      <BlitzNav
        name="Comidas de Campo"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(251,244,230,0.94)',
          ink: C.nogal,
          line: C.lineL,
          btnBg: C.greda,
          btnInk: C.crema,
        }}
      />

      <div className="cc-page">
        {/* ── 1 · Hero: llegando por el camino ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.nogalDeep }}>
          {/* textura de madera muy sutil */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.14) 0 2px, transparent 2px 96px)', opacity: 0.3 }}
            aria-hidden="true"
          />

          {/* la escena: cielo de tarde, campo y el camino que te trae */}
          <div className="relative h-[216px] md:h-[268px] overflow-hidden" aria-hidden="true">
            {/* cielo */}
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(180deg, #1E0F03 0%, #3A2311 48%, #6E4226 82%, #84502B 100%)' }}
            />
            {/* sol bajando al final del camino */}
            <div
              className="absolute left-1/2 -translate-x-1/2 bottom-[39%] h-[54px] w-[54px] rounded-full"
              style={{ background: 'radial-gradient(circle, #F6CE62 0%, #EFBE4C 46%, rgba(226,178,58,0.35) 62%, rgba(226,178,58,0) 78%)' }}
            />
            {/* campo y línea de árboles en el horizonte */}
            <div className="absolute inset-x-0 bottom-0 h-[42%]" style={{ background: 'linear-gradient(180deg, #54753C 0%, #42602E 55%, #33501F 100%)' }} />
            <div
              className="absolute inset-x-0 bottom-[41%] h-[16px]"
              style={{ background: 'linear-gradient(180deg, rgba(38,56,25,0) 0%, rgba(38,56,25,0.85) 100%)' }}
            />
            {/* el camino en perspectiva */}
            <div className="cc-persp absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
              <div className="cc-road">
                <span className="cc-dashes" />
              </div>
            </div>
            <Hito />
          </div>

          {/* el contenido del hero */}
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-7 md:pt-9 grid md:grid-cols-[1.08fr_0.92fr] gap-9 md:gap-12 items-center">
            <div>
              <p
                className={`cc-aparece ${caps.className} flex items-center gap-3 text-[10px] md:text-[11px] font-medium uppercase tracking-[0.28em] mb-5`}
                style={{ color: C.oro, animationDelay: '0.3s' }}
              >
                <span
                  className="inline-block h-[4px] w-9 shrink-0"
                  style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.oro} 0 9px, transparent 9px 15px)` }}
                  aria-hidden="true"
                />
                Villarrica · Camino Ñancul a Pitrufquén km 1,5
              </p>
              <h1
                className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.55rem,9.6vw,4.9rem)]`}
                style={{ color: C.crema }}
              >
                <span className="flex flex-wrap gap-x-[0.24em]">
                  {['Sabor', 'de', 'campo,'].map((w, i) => (
                    <span key={w} className="overflow-hidden">
                      <span
                        className="cc-palabra"
                        style={{ animationDelay: `${0.5 + i * 0.12}s`, color: w === 'campo,' ? C.oro : undefined, fontStyle: w === 'campo,' ? 'italic' : undefined }}
                      >
                        {w}
                      </span>
                    </span>
                  ))}
                </span>
                <span className="flex flex-wrap gap-x-[0.24em]">
                  {['a', 'la', 'orilla', 'del', 'camino.'].map((w, i) => (
                    <span key={w} className="overflow-hidden">
                      <span className="cc-palabra" style={{ animationDelay: `${0.92 + i * 0.1}s` }}>
                        {w}
                      </span>
                    </span>
                  ))}
                </span>
              </h1>
              <p className="cc-aparece mt-4 max-w-md text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutD, animationDelay: '1.5s' }}>
                Cazuela, empanadas, pastel de choclo y comida casera hecha
                con cariño, con estacionamiento propio.
              </p>
              <div className="cc-aparece mt-6 flex flex-wrap gap-3" style={{ animationDelay: '1.62s' }}>
                <BtnWa>Reserva por WhatsApp</BtnWa>
                <BtnLine href="#llegar">Cómo llegar</BtnLine>
              </div>
              <div className="cc-aparece mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5" style={{ animationDelay: '1.75s' }}>
                <Stars value={BIZ.ratingValue} color={C.oro} size={16} />
                <span className="text-sm font-bold" style={{ color: C.crema }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.mutD }}>
                  · {BIZ.reviews} opiniones
                </span>
              </div>
            </div>

            {/* la cazuela llega humeante a la mesa */}
            <figure className="relative mx-auto md:mx-0">
              <div className="cc-platoHero relative w-fit mx-auto">
                <Vapor />
                <div
                  className="relative w-[218px] h-[218px] md:w-[290px] md:h-[290px] rounded-full overflow-hidden"
                  style={{ border: `7px solid ${C.papel}`, boxShadow: '0 26px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(226,178,58,0.25)' }}
                >
                  <Image
                    src={`${IMG}/cazuela.webp`}
                    alt="Cazuela con choclo, zapallo y cilantro, servida en Comidas de Campo"
                    width={1510}
                    height={1600}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption
                  className={`${display.className} absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-sm italic shadow-lg`}
                  style={{ backgroundColor: C.oro, color: C.nogalDeep }}
                >
                  la cazuela de la casa
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* ── 2 · Señales: lo que nos define ── */}
        <section className="relative" style={{ backgroundColor: C.crema }}>
          {/* tejido de mantel */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(78,107,57,0.05) 0 30px, transparent 30px 60px), repeating-linear-gradient(90deg, rgba(78,107,57,0.05) 0 30px, transparent 30px 60px)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo color={C.greda}>Apenas bajas del auto</Rotulo>
              <h2 className={`${display.className} mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-[1.05]`} style={{ color: C.nogal }}>
                Cuatro señales
                <br />
                <em style={{ color: C.greda, fontWeight: 500 }}>de que llegaste bien</em>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.muted }}>
                Lo que ellos mismos destacan y lo que repiten los que vuelven.
              </p>
            </Reveal>
            <div className="relative mt-11">
              {/* la línea del camino que une las señales */}
              <div
                className="absolute left-[20px] top-0 bottom-0 border-l-[3px] border-dashed md:left-1/2"
                style={{ borderColor: 'rgba(74,44,26,0.25)' }}
                aria-hidden="true"
              />
              <ol className="relative grid gap-9 md:gap-12">
                {SENALES.map((s, i) => {
                  const ladoDerecho = i % 2 === 1
                  return (
                    <li key={s.t} className="relative pl-12 md:w-[calc(50%-3rem)] md:pl-0" style={ladoDerecho ? { marginLeft: 'auto' } : undefined}>
                      <Poste lado={ladoDerecho ? 'der' : 'izq'} />
                      <Reveal delay={i * 90}>
                        <div className={ladoDerecho ? 'md:pl-6' : 'md:pr-6 md:flex md:flex-col md:items-end md:text-right'}>
                          <span className="inline-block" style={{ rotate: i % 2 === 0 ? '-1.2deg' : '1deg' }}>
                            <Senal madera={s.madera} parking={s.parking}>{s.t}</Senal>
                          </span>
                          <p className="mt-3 max-w-sm text-[15px] leading-relaxed" style={{ color: C.muted }}>
                            {s.d}
                          </p>
                        </div>
                      </Reveal>
                    </li>
                  )
                })}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 3 · De nuestra cocina: la tabla servida ── */}
        <section id="cocina" className="scroll-mt-16 relative" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo color={C.greda}>De nuestra cocina</Rotulo>
              <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-bold leading-[1.05]`} style={{ color: C.nogal }}>
                Lo que sale
                <em style={{ color: C.greda, fontWeight: 500 }}> de la olla</em>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.muted }}>
                Los platos que publican y los que más nombran sus clientes.
                La carta se escribe con lo del día: pregunta por WhatsApp.
              </p>
            </Reveal>

            {/* la tabla de madera donde se sirven los platos */}
            <div className="relative mt-12 md:mt-16">
              <div
                className="absolute -inset-x-3 -top-5 -bottom-6 rounded-[30px] md:-inset-x-8"
                style={{
                  background: `linear-gradient(180deg, ${C.tabla} 0%, #5C3D24 55%, #4E331D 100%)`,
                  boxShadow: '0 24px 60px rgba(46,27,14,0.28), inset 0 1px 0 rgba(251,244,230,0.14)',
                }}
                aria-hidden="true"
              >
                <div
                  className="absolute inset-0 rounded-[30px]"
                  style={{ backgroundImage: 'repeating-linear-gradient(90deg, rgba(0,0,0,0.13) 0 2px, transparent 2px 72px)', opacity: 0.5 }}
                />
              </div>
              <ol className="relative grid grid-cols-2 gap-x-3 gap-y-9 md:grid-cols-4 md:gap-x-5">
                {PLATOS.map((p, i) => (
                  <li key={p.src} className={i % 2 === 1 ? 'mt-8 md:mt-10' : 'md:mt-0'}>
                    <Sirve delay={i * 110} rotate={i % 2 === 0 ? -5 : 4.5}>
                      <figure className="flex flex-col items-center text-center">
                        <div
                          className="w-full max-w-[170px] md:max-w-[190px] overflow-hidden rounded-full"
                          style={{ border: `6px solid ${C.papel}`, boxShadow: '0 16px 36px rgba(0,0,0,0.35), 0 0 0 1px rgba(46,27,14,0.12)', aspectRatio: '1' }}
                        >
                          <Image
                            src={`${IMG}/${p.src}`}
                            alt={`${p.name} servidas en Comidas de Campo, Villarrica`}
                            width={p.w}
                            height={p.h}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <figcaption className="mt-4">
                          <p className={`${caps.className} text-[13px] md:text-sm font-semibold uppercase tracking-[0.12em]`} style={{ color: C.crema }}>
                            {p.name}
                          </p>
                          <p className={`${display.className} mt-0.5 text-sm italic`} style={{ color: 'rgba(251,244,230,0.75)' }}>
                            {p.note}
                          </p>
                        </figcaption>
                      </figure>
                    </Sirve>
                  </li>
                ))}
              </ol>
              <Reveal delay={200}>
                <div className="relative mt-11 flex flex-wrap items-center justify-center gap-x-3 gap-y-2.5">
                  <span className={`${caps.className} mr-1 text-[11px] font-medium uppercase tracking-[0.24em]`} style={{ color: 'rgba(251,244,230,0.6)' }}>
                    Y también
                  </span>
                  {MAS_PLATOS.map((p) => (
                    <span
                      key={p}
                      className={`${display.className} rounded-full px-4 py-1.5 text-[15px] italic`}
                      style={{ border: '1.5px dashed rgba(251,244,230,0.5)', color: 'rgba(251,244,230,0.92)' }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <CintaCamino />

        {/* ── 4 · Fiestas Patrias: masas por encargo ── */}
        <section id="fiestas" className="scroll-mt-16 relative overflow-hidden" style={{ backgroundColor: C.greda }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(45deg, rgba(251,244,230,0.05) 0 2px, transparent 2px 22px), repeating-linear-gradient(-45deg, rgba(251,244,230,0.05) 0 2px, transparent 2px 22px)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-18 text-center">
            <Reveal>
              <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(251,244,230,0.14)' }}>
                <IconEmpanada className="h-9 w-9" />
              </span>
              <Rotulo color={C.crema} centered>Por encargo</Rotulo>
              <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-bold leading-[1.06]`} style={{ color: C.crema }}>
                Para Fiestas Patrias,
                <br />
                <em style={{ fontWeight: 500, color: '#F6DFA6' }}>masas de empanada</em>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed" style={{ color: 'rgba(251,244,230,0.85)' }}>
                Las encargas por WhatsApp. Tú pones
                el pino, ellos la masa.
              </p>
              <div className="mt-7">
                <BtnWa href={WA_LINK_MASAS} bg={C.crema} ink={C.gredaInk}>
                  Encargar masas
                </BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 5 · Opiniones: los que vuelven ── */}
        <section id="opiniones" className="scroll-mt-16" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:items-start">
              <Reveal>
                <Rotulo color={C.greda}>Lo que dicen en Google</Rotulo>
                <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-bold leading-[1.05]`} style={{ color: C.nogal }}>
                  Los que manejan
                  <br />
                  <em style={{ color: C.greda, fontWeight: 500 }}>hasta acá, vuelven</em>
                </h2>
                <div className="mt-7 flex items-end gap-4">
                  <span className={`${display.className} text-7xl font-bold leading-none`} style={{ color: C.nogal }}>
                    {BIZ.rating}
                  </span>
                  <div className="pb-1.5">
                    <Stars value={BIZ.ratingValue} color={C.oroInk} size={17} />
                    <p className="mt-1 text-sm font-semibold" style={{ color: C.muted }}>
                      {BIZ.reviews} opiniones en Google
                    </p>
                  </div>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                  style={{ color: C.verdeInk, textDecorationColor: 'rgba(78,107,57,0.4)' }}
                >
                  Leer las opiniones en Google →
                </a>
              </Reveal>
              <ol className="grid gap-5">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.name} delay={i * 110}>
                    <figure
                      className="relative rounded-2xl p-6 md:p-7"
                      style={{
                        backgroundColor: C.crema,
                        rotate: i === 1 ? '0.5deg' : '-0.5deg',
                        boxShadow: '0 8px 26px rgba(74,44,26,0.09)',
                        border: `1px solid ${C.lineL}`,
                      }}
                    >
                      <span
                        className={`${display.className} absolute -top-4 left-6 flex h-9 w-9 items-center justify-center rounded-full text-2xl italic`}
                        style={{ backgroundColor: C.greda, color: C.crema }}
                        aria-hidden="true"
                      >
                        “
                      </span>
                      <blockquote className="text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                        {r.text}
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-3">
                        <span className="text-sm font-bold" style={{ color: C.nogal }}>
                          {r.name}
                        </span>
                        <span className="text-xs" style={{ color: C.muted }}>
                          · opinión en Google
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <CintaCamino />

        {/* ── 6 · Cómo llegar: el km 1,5 ── */}
        <section id="llegar" className="scroll-mt-16" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo color={C.greda}>Cómo llegar</Rotulo>
              <h2 className={`${display.className} mt-4 max-w-2xl text-4xl md:text-5xl font-bold leading-[1.05]`} style={{ color: C.nogal }}>
                A la orilla del camino,
                <em style={{ color: C.greda, fontWeight: 500 }}> kilómetro 1,5</em>
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-14">
              {/* postales del camino */}
              <div className="relative">
                <Reveal>
                  <figure>
                    <div className="overflow-hidden rounded-2xl" style={{ rotate: '-1deg', boxShadow: '0 16px 40px rgba(46,27,14,0.22)' }}>
                      <Image
                        src={`${IMG}/letrero.webp`}
                        alt="Letrero de madera de Comidas de Campo a la orilla del camino Ñancul, entre árboles"
                        width={1280}
                        height={1600}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                    <figcaption className={`${display.className} mt-3 text-sm italic`} style={{ color: C.muted }}>
                      Así nos ves desde el camino: el letrero está a la orilla.
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={120}>
                  <figure className="ml-auto -mt-8 w-[58%] md:-mt-14 md:w-[52%]">
                    <div className="overflow-hidden rounded-2xl" style={{ rotate: '2deg', boxShadow: '0 14px 34px rgba(46,27,14,0.26)' }}>
                      <Image
                        src={`${IMG}/pizarra.webp`}
                        alt="Pizarra de entrada de Comidas de Campo con el horario y dibujos a tiza"
                        width={1280}
                        height={1600}
                        className="aspect-[4/5] w-full object-cover"
                      />
                    </div>
                    <figcaption className={`${display.className} mt-2.5 text-right text-sm italic`} style={{ color: C.muted }}>
                      La pizarra te espera en la entrada.
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
              {/* los datos para manejar hasta acá */}
              <div>
                <Reveal delay={80}>
                  <div
                    className="rounded-3xl p-6 md:p-8"
                    style={{ backgroundColor: C.nogal, boxShadow: '0 18px 46px rgba(46,27,14,0.25)' }}
                  >
                    <ul className="grid gap-5">
                      <li className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(226,178,58,0.18)', color: C.oro }}>
                          <IconPin />
                        </span>
                        <div>
                          <p className={`${caps.className} text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.oro }}>
                            Dirección
                          </p>
                          <address className="mt-1 text-[15px] not-italic leading-relaxed" style={{ color: C.crema }}>
                            {BIZ.address}
                            <br />
                            {BIZ.city}, Región de La Araucanía
                          </address>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(226,178,58,0.18)', color: C.oro }}>
                          <IconClock />
                        </span>
                        <div>
                          <p className={`${caps.className} text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.oro }}>
                            Horario
                          </p>
                          <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.crema }}>
                            Lunes a sábado · 10:00 a 18:00
                            <br />
                            <span style={{ color: C.mutD }}>Domingo: consulta por WhatsApp</span>
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-4">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full" style={{ backgroundColor: 'rgba(226,178,58,0.18)', color: C.oro }}>
                          <IconPark />
                        </span>
                        <div>
                          <p className={`${caps.className} text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.oro }}>
                            Estacionamiento
                          </p>
                          <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.crema }}>
                            Propio, amplio y gratis
                          </p>
                        </div>
                      </li>
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-3 border-t pt-6" style={{ borderColor: C.lineD }}>
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cc-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tap-44"
                        style={{ backgroundColor: C.crema, color: C.nogal }}
                      >
                        Abrir en Maps
                      </a>
                      <BtnWa>Reservar mesa</BtnWa>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <div className="mt-5 overflow-hidden rounded-3xl" style={{ border: `1.5px solid ${C.lineL}`, boxShadow: '0 10px 30px rgba(46,27,14,0.12)', backgroundColor: C.papel }}>
                    <LazyMap
                      src={MAPS_EMBED}
                      title="Mapa: Comidas de Campo, camino Ñancul a Pitrufquén km 1,5, Villarrica"
                      className="block h-[280px] w-full border-0"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre: con el cariño de siempre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.nogalDeep }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(620px 300px at 50% 0%, rgba(226,178,58,0.16), transparent 70%)',
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-5 py-14 text-center md:px-8 md:py-20">
            <Reveal>
              <p
                className={`${caps.className} mx-auto mb-5 flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.3em]`}
                style={{ color: C.oro }}
              >
                <span className="inline-block h-[4px] w-8" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.oro} 0 9px, transparent 9px 15px)` }} aria-hidden="true" />
                km 1,5 · Ñancul
                <span className="inline-block h-[4px] w-8" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.oro} 0 9px, transparent 9px 15px)` }} aria-hidden="true" />
              </p>
              <h2 className={`${display.className} text-4xl font-bold leading-[1.06] md:text-5xl`} style={{ color: C.crema }}>
                Con el cariño de siempre,
                <br />
                <em style={{ color: C.oro, fontWeight: 500 }}>te esperamos.</em>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base leading-relaxed" style={{ color: C.mutD }}>
                Reserva tu mesa o consulta por WhatsApp: te responden por ahí
                mismo.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <BtnWa>Reserva por WhatsApp</BtnWa>
                <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-xl italic tap-44`} style={{ color: C.crema }}>
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer ── */}
        <footer style={{ backgroundColor: C.nogalNight, color: C.crema }}>
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 md:flex-row md:items-center md:justify-between md:px-8">
            <div className="flex items-center gap-3.5">
              <Image
                src={`${IMG}/logo.webp`}
                alt=""
                width={150}
                height={150}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className={`${display.className} text-lg font-bold leading-tight`}>{BIZ.name}</p>
                <p className="text-xs" style={{ color: 'rgba(251,244,230,0.6)' }}>
                  {BIZ.rubro}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[13px]" style={{ color: 'rgba(251,244,230,0.75)' }}>
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 tap-44" style={{ color: C.crema }}>
                <IconIg /> {BIZ.igUser}
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 tap-44" style={{ color: C.crema }}>
                <IconFb /> Facebook
              </a>
              <span className="hidden md:inline">{BIZ.address}, {BIZ.city}</span>
              <a href={`tel:${BIZ.phoneTel}`} className="tap-44 font-semibold" style={{ color: C.crema }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp en Comidas de Campo" />
    </div>
  )
}
