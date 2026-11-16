import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINIONES, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Del letrero y la fachada: grafito de la madera, amarillo y verde de
// los letreros, el cielo de Puerto Montt y el papel de la cotización.
const C = {
  grafito: '#1D2126',
  grafito2: '#242930',
  tinta: '#14171A',
  amarillo: '#F2C230',
  amarilloBajo: '#E0AE1B',
  verde: '#1E8A4C',
  verdeProf: '#146B3A',
  cielo: '#CFE3F2',
  papel: '#F6F4EE',
  papel2: '#ECE8DC',
  mutL: 'rgba(20,23,26,0.85)',
  mutL2: 'rgba(20,23,26,0.85)',
  lineL: 'rgba(20,23,26,0.16)',
  mutD: 'rgba(255,255,255,0.82)',
  mutD2: 'rgba(255,255,255,0.62)',
  lineD: 'rgba(255,255,255,0.18)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'ferreteria-puerta-sur-puerto-montt',
  title: 'Ferretería Puerta Sur · Ferretería en Puerto Montt',
  description:
    'Ferretería y materiales de construcción en Av. Capitán Ávalos 6208, Puerta Sur, Puerto Montt. Asesoría de calidad, abierta los 7 días. Cotiza por WhatsApp.',
  image: '/demos/ferreteria-puerta-sur-puerto-montt/afiche-semana.webp',
})

const NAV_LINKS = [
  { label: 'Cómo ayudamos', href: '#ayuda' },
  { label: 'Los 7 días', href: '#horario' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde estamos', href: '#contacto' },
]

/** Ticks de cinta métrica sobre el amarillo: marca chica y marca de número. */
const TAPE_INK = `
  repeating-linear-gradient(90deg, rgba(20,23,26,0.45) 0 1px, transparent 1px 1.43%) 0 0/100% 38% no-repeat,
  repeating-linear-gradient(90deg, rgba(20,23,26,0.8) 0 1.5px, transparent 1.5px 14.285%) 0 0/100% 74% no-repeat,
  linear-gradient(180deg, #F6CD4B 0%, ${C.amarillo} 55%, ${C.amarilloBajo} 100%)`

const TAPE_LIGHT = `
  repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0 1px, transparent 1px 1.43%) 0 0/100% 38% no-repeat,
  repeating-linear-gradient(90deg, rgba(255,255,255,0.72) 0 1.5px, transparent 1.5px 14.285%) 0 0/100% 74% no-repeat,
  linear-gradient(180deg, #31373E 0%, ${C.grafito2} 55%, #191D22 100%)`

const TAPE_VERDE = `
  repeating-linear-gradient(90deg, rgba(255,255,255,0.45) 0 1px, transparent 1px 1.43%) 0 0/100% 38% no-repeat,
  repeating-linear-gradient(90deg, rgba(255,255,255,0.7) 0 1.5px, transparent 1.5px 14.285%) 0 0/100% 74% no-repeat,
  linear-gradient(180deg, #26A363 0%, ${C.verde} 55%, #187A42 100%)`

const TAPE_EDGE = 'inset 0 1.5px 0 rgba(20,23,26,0.55), inset 0 -2px 0 rgba(20,23,26,0.4)'

/** Tramo de cinta métrica: separador y motivo, se extiende al entrar. */
function Tape({
  className = '',
  tone = 'yellow',
  delay = 0,
}: {
  className?: string
  tone?: 'yellow' | 'dark'
  delay?: number
}) {
  return (
    <div
      aria-hidden="true"
      className={`ps-tapein relative h-[22px] overflow-visible ${className}`}
      style={{ '--ar': `entry ${delay}% entry ${55 + delay}%` } as CSSProperties}
    >
      <div
        className="absolute inset-0"
        style={{ background: tone === 'yellow' ? TAPE_INK : TAPE_LIGHT, boxShadow: TAPE_EDGE }}
      />
      {/* ganchillo del extremo */}
      <span
        className="absolute right-[-2px] top-1/2 h-[26px] w-[7px] -translate-y-1/2 rounded-[1px]"
        style={{ backgroundColor: C.tinta, boxShadow: 'inset 0 0 0 1.5px rgba(255,255,255,0.14)' }}
      />
    </div>
  )
}

/** Tuerca hexagonal: el segundo motivo, como ficha o viñeta. */
function HexNut({
  className = '',
  size = 16,
  style,
}: {
  className?: string
  size?: number
  style?: CSSProperties
}) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="4"
      aria-hidden="true"
    >
      <path d="M24 5l16.5 9.5v19L24 43 7.5 33.5v-19L24 5z" />
      <circle cx="24" cy="24" r="7.5" />
    </svg>
  )
}

function IconEscuadra({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 7h8v22h20v10H11z" />
      <path d="M19 13h4M19 19h4M19 25h4M25 35v-3M31 35v-3M37 35v-3" strokeWidth="2.4" />
    </svg>
  )
}

function IconChat({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 9h34v21H24l-10 9v-9H7z" />
      <path d="M14 19.5h5M22 19.5h5M30 19.5h5" />
    </svg>
  )
}

function IconWa({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function Rotulo({
  children,
  dark = false,
  className = '',
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.26em] ${className}`}
      style={{ color: dark ? C.amarillo : C.verdeProf }}
    >
      <HexNut size={15} className="shrink-0" />
      <span className="whitespace-nowrap">{children}</span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: dark ? C.lineD : C.lineL }}
        aria-hidden="true"
      />
    </p>
  )
}

function BtnWa({
  children,
  dark = false,
  className = '',
}: {
  children: React.ReactNode
  dark?: boolean
  className?: string
}) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`ps-btn ${dark ? 'ps-btn--dark' : ''} inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold tracking-wide rounded-[4px] tap-44 ${className}`}
      style={{
        backgroundColor: C.amarillo,
        color: C.tinta,
        boxShadow: `0 3px 0 ${C.amarilloBajo}, 0 5px 0 rgba(20,23,26,0.35)`,
      }}
    >
      <IconWa className="w-[18px] h-[18px] shrink-0" />
      {children}
    </a>
  )
}

export default function FerreteriaPuertaSurPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* La cinta del hero se despliega bajo el titular y mide el 6208. */
        .ps-herotape { transform: scaleX(0); transform-origin: left center; animation: ps-ext 1.15s cubic-bezier(.3,.65,.2,1) .55s both }
        @keyframes ps-ext { to { transform: scaleX(1) } }
        .ps-num { opacity: 0; transform: translateY(12px) scale(.82); animation: ps-num .55s cubic-bezier(.3,1.35,.45,1) 1.85s both }
        @keyframes ps-num { to { opacity: 1; transform: none } }
        /* La fachada sube con clip-path una vez desplegada la cinta. */
        .ps-foto { clip-path: inset(100% 0 0 0); transform: translateY(30px); animation: ps-rise 1.1s cubic-bezier(.25,.65,.3,1) .95s both }
        @keyframes ps-rise { to { clip-path: inset(0 0 0 0); transform: none } }
        /* …y la cinta la prende por arriba al final. */
        .ps-pintape { transform: scaleX(0); transform-origin: left center; animation: ps-ext .8s cubic-bezier(.3,.65,.2,1) 1.75s both }
        .ps-up { opacity: 0; transform: translateY(18px); animation: ps-up .8s cubic-bezier(.25,.6,.3,1) var(--d,0s) both }
        @keyframes ps-up { to { opacity: 1; transform: none } }

        /* Cintas y reglas que se extienden al hacer scroll (progresivo:
           sin soporte quedan ya desplegadas). */
        .ps-tapein { transform-origin: left center }
        .ps-bar { transform-origin: left center }
        @supports (animation-timeline: view()) {
          .ps-tapein { animation: ps-ext linear both; animation-timeline: view(); animation-range: var(--ar, entry 0% entry 55%) }
          .ps-bar { animation: ps-ext linear both; animation-timeline: view(); animation-range: var(--ar, entry 0% entry 62%) }
        }

        .ps-btn { transition: transform .16s ease, box-shadow .16s ease }
        .ps-btn:hover { transform: translateY(-1px); box-shadow: 0 4px 0 ${C.amarilloBajo}, 0 7px 0 rgba(20,23,26,0.35) !important }
        .ps-btn:active { transform: translateY(2px); box-shadow: 0 1px 0 ${C.amarilloBajo}, 0 2px 0 rgba(20,23,26,0.35) !important }
        .ps-btn:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }
        .ps-btn--dark:focus-visible { outline-color: ${C.amarillo} }
        .ps-ghost { transition: background-color .18s ease, transform .18s ease, color .18s ease }
        .ps-ghost:hover { background-color: rgba(20,23,26,0.06) }
        .ps-ghost:active { transform: scale(.97) }
        .ps-ghost:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }
        .ps-ghostd:hover { background-color: rgba(255,255,255,0.1) }
        .ps-ghostd:focus-visible { outline-color: ${C.amarillo} }
        .ps-link { transition: color .18s ease }
        .ps-link:hover { color: #0F522E }
        .ps-link:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px }
        .ps-linkd:hover { color: #fff }
        .ps-linkd:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }
        .ps-card { transition: transform .25s cubic-bezier(.25,.6,.3,1), box-shadow .25s ease }
        .ps-card:hover { transform: translateY(-3px) }

        @media (prefers-reduced-motion: reduce) {
          .ps-herotape, .ps-tapein, .ps-bar, .ps-pintape { animation: none !important; transform: none !important }
          .ps-num, .ps-foto, .ps-up { animation: none !important; opacity: 1 !important; transform: none !important; clip-path: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-1.5">
            <span style={{ color: 'inherit' }}>Ferretería</span>
            <span style={{ color: C.verdeProf }}>Puerta Sur</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(246,244,238,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.amarillo,
          btnInk: C.tinta,
        }}
      />

      {/* ── 1 · Hero: se despliega la cinta métrica ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
        {/* cuadrícula de plano, muy tenue */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,23,26,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(20,23,26,0.045) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[96px] pb-10 md:pt-[150px] md:pb-20 md:grid md:grid-cols-[1.15fr_0.85fr] md:gap-12 md:items-center">
          <div>
            <p
              className="ps-up flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.26em]"
              style={{ color: C.mutL, '--d': '0.15s' } as CSSProperties}
            >
              <HexNut size={14} className="shrink-0" style={{ color: C.verdeProf } as CSSProperties} />
              Puerto Montt · Puerta Sur
            </p>
            <h1
              className={`${display.className} ps-up mt-4 uppercase leading-[0.98] tracking-tight text-[clamp(2.5rem,11vw,4.9rem)]`}
              style={{ '--d': '0.3s', color: C.tinta } as CSSProperties}
            >
              <span className="block">Ferretería para</span>
              <span className="block">tu proyecto,</span>
              <span className="block" style={{ color: C.verde }}>
                los 7 días.
              </span>
            </h1>

            {/* La cinta: se extiende y al final mide el 6208 */}
            <div className="relative mt-7 max-w-[560px]" style={{ '--d': '0s' } as CSSProperties}>
              <div className="ps-herotape relative h-[34px]">
                <div className="absolute inset-0" style={{ background: TAPE_INK, boxShadow: TAPE_EDGE }} />
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <span
                    key={n}
                    className={`${display.className} absolute top-[7px] text-[9px] font-semibold leading-none`}
                    style={{ left: `calc(${n * 14.285}% + 4px)`, color: 'rgba(20,23,26,0.9)' }}
                    aria-hidden="true"
                  >
                    {n}
                  </span>
                ))}
                <span
                  className="absolute right-[-3px] top-1/2 h-[40px] w-[9px] -translate-y-1/2 rounded-[2px]"
                  style={{
                    backgroundColor: C.tinta,
                    boxShadow: 'inset 0 0 0 2px rgba(255,255,255,0.15)',
                  }}
                  aria-hidden="true"
                />
              </div>
              <div
                className="ps-num absolute right-0 top-[calc(100%+10px)] flex items-center gap-2 px-2.5 py-1.5 rounded-[4px]"
                style={{ backgroundColor: C.grafito, boxShadow: '3px 3px 0 rgba(20,23,26,0.2)' }}
              >
                <span className={`${display.className} text-xl font-bold leading-none`} style={{ color: C.amarillo }}>
                  6208
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.16em] leading-tight" style={{ color: C.mutD }}>
                  Cap.
                  <br />
                  Ávalos
                </span>
              </div>
            </div>

            <p
              className="ps-up mt-[64px] md:mt-14 text-[16px] leading-relaxed max-w-[46ch]"
              style={{ color: C.mutL, '--d': '1.15s' } as CSSProperties}
            >
              Materiales de construcción y artículos de ferretería en Capitán Ávalos 6208, Puerta Sur.
              Dispuestos a ayudarte en tus proyectos, con una asesoría de calidad.
            </p>
            <div className="ps-up mt-6 flex flex-wrap items-center gap-3" style={{ '--d': '1.35s' } as CSSProperties}>
              <BtnWa>Cotiza por WhatsApp</BtnWa>
              <a
                href="#horario"
                className="ps-ghost inline-flex items-center gap-2 px-4 py-3 text-sm font-bold rounded-[4px] tap-44"
                style={{ color: C.tinta, border: `2px solid ${C.lineL}` }}
              >
                Ver los 7 días
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          {/* La fachada: el letrero real del local, enmarcada en cinta */}
          <figure className="relative mt-8 md:mt-0">
            <div
              className="hidden md:block absolute -top-7 -right-7 w-[62%] h-[52%] rounded-[6px]"
              style={{ backgroundColor: C.cielo }}
              aria-hidden="true"
            />
            {/* cinta que prende la foto por arriba */}
            <div
              className="ps-pintape absolute -top-[9px] left-[-3%] w-[106%] h-[20px] rotate-[-1.6deg] z-10"
              style={{ background: TAPE_INK, boxShadow: TAPE_EDGE }}
              aria-hidden="true"
            />
            <div
              className="ps-foto relative border-[3px] rounded-[4px] overflow-hidden"
              style={{ borderColor: C.grafito, boxShadow: '10px 10px 0 rgba(20,23,26,0.14)' }}
            >
              <div className="relative aspect-[4/5] md:aspect-[3/4]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de dos pisos de Ferretería Puerta Sur: local de madera oscura con letrero verde FERRETERÍA y carteles amarillos"
                  fill
                  priority
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 62%' }}
                />
              </div>
              <figcaption
                className="flex items-center justify-between gap-3 px-4 py-2.5"
                style={{ backgroundColor: C.grafito, color: C.mutD }}
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.amarillo }}>
                  Capitán Ávalos 6208
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.mutD2 }}>
                  Puerta Sur
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ── 2 · Cómo ayudamos ── */}
      <section id="ayuda" className="relative" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Rotulo>Cómo te ayudamos</Rotulo>
          <Tape className="mt-5 w-[190px]" />
          <Reveal>
            <h2
              className={`${display.className} mt-7 uppercase leading-[1.02] text-[clamp(1.75rem,6.4vw,3.4rem)] max-w-[20ch]`}
            >
              Llegas con un proyecto,
              <br />
              te vas <span style={{ color: C.verde }}>con la solución.</span>
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-6">
            {/* A · asesoría: la tarjeta madre, oscura y alta */}
            <Reveal className="md:col-span-6 md:row-span-2">
              <article
                className="ps-card relative h-full rounded-[6px] p-6 md:p-8 overflow-hidden"
                style={{ backgroundColor: C.grafito, boxShadow: '6px 6px 0 rgba(20,23,26,0.16)' }}
              >
                <div
                  className="absolute top-0 left-6 w-[110px] h-[16px]"
                  style={{ background: TAPE_INK, boxShadow: TAPE_EDGE }}
                  aria-hidden="true"
                />
                <IconEscuadra className="w-14 h-14 md:w-16 md:h-16" style={{ color: C.amarillo }} />
                <h3
                  className={`${display.className} mt-5 uppercase text-[26px] md:text-[30px] leading-tight`}
                  style={{ color: C.amarillo }}
                >
                  Asesoría de calidad
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed max-w-[38ch]" style={{ color: C.mutD }}>
                  Dispuestos a ayudarte en tus proyectos. Llega con tu idea o tu lista y te orientamos
                  sobre materiales de construcción y artículos de ferretería en general.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Materiales de construcción', 'Ferretería en general'].map((chip) => (
                    <span
                      key={chip}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[3px] text-[11px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        color: C.mutD,
                        border: `1.5px solid ${C.lineD}`,
                      }}
                    >
                      <span className="w-[7px] h-[7px] rounded-[1.5px]" style={{ backgroundColor: C.verde }} />
                      {chip}
                    </span>
                  ))}
                </div>
                <IconEscuadra
                  className="absolute -bottom-6 -right-6 w-36 h-36 rotate-[-8deg] opacity-[0.09]"
                  style={{ color: '#fff' }}
                />
              </article>
            </Reveal>

            {/* B · WhatsApp: amarilla, ancha y baja */}
            <Reveal delay={90} className="md:col-span-6">
              <article
                className="ps-card relative h-full rounded-[6px] p-6 md:px-7 md:py-6 flex items-center gap-5 overflow-hidden"
                style={{ backgroundColor: C.amarillo, boxShadow: '6px 6px 0 rgba(20,23,26,0.16)' }}
              >
                <span
                  className="shrink-0 w-14 h-14 rounded-[4px] flex items-center justify-center"
                  style={{ backgroundColor: C.grafito, color: C.amarillo }}
                >
                  <IconChat className="w-8 h-8" />
                </span>
                <div className="min-w-0">
                  <h3 className={`${display.className} uppercase text-[22px] leading-tight`} style={{ color: C.tinta }}>
                    Cotiza por WhatsApp
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-snug" style={{ color: 'rgba(20,23,26,0.9)' }}>
                    Ven y cotiza en Ferretería Puerta Sur, o escríbenos al{' '}
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ps-link font-bold underline underline-offset-2">
                      {BIZ.phoneDisplay}
                    </a>
                    .
                  </p>
                </div>
              </article>
            </Reveal>

            {/* C · 7 días: verde, barra horizontal con número */}
            <Reveal delay={160} className="md:col-span-6">
              <article
                className="ps-card relative h-full rounded-[6px] p-6 md:px-7 md:py-6 flex items-center gap-5 overflow-hidden"
                style={{ backgroundColor: C.verdeProf, boxShadow: '6px 6px 0 rgba(20,23,26,0.16)' }}
              >
                <span
                  className={`${display.className} shrink-0 w-14 h-14 rounded-[4px] flex items-center justify-center text-[30px] font-bold leading-none`}
                  style={{ backgroundColor: 'rgba(20,23,26,0.28)', color: '#fff' }}
                >
                  7
                </span>
                <div className="min-w-0">
                  <h3 className={`${display.className} uppercase text-[22px] leading-tight text-white`}>
                    Abierto los 7 días
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-snug" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    La ferretería atiende de lunes a domingo: el fin de semana también puedes venir.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · Los 7 días: el horario como regla ── */}
      <section id="horario" className="relative overflow-hidden" style={{ backgroundColor: C.cielo }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(20,23,26,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(20,23,26,0.05) 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 md:grid md:grid-cols-[1fr_0.72fr] md:gap-12 md:items-start">
          <div>
            <Rotulo>Los 7 días</Rotulo>
            <Tape className="mt-5 w-[190px]" />
            <Reveal>
              <div className="mt-6 flex items-end gap-4">
                <span
                  className={`${display.className} font-bold leading-[0.8] text-[clamp(6.5rem,26vw,11rem)]`}
                  style={{ color: C.verde }}
                >
                  7
                </span>
                <h2 className={`${display.className} uppercase leading-[1] text-[clamp(1.7rem,6.5vw,3.1rem)] pb-2`}>
                  días
                  <br />
                  a la semana
                </h2>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <p className="mt-5 text-[15.5px] leading-relaxed max-w-[42ch]" style={{ color: C.mutL }}>
                De su propia publicación: atención disponible los 7 días de la semana. Cada tramo de
                la regla mide las horas de cada día.
              </p>
            </Reveal>

            {/* La regla del horario: 3 tramos proporcionales */}
            <div className="mt-9 space-y-6">
              {[
                { d: 'Lunes a viernes', h: '8:45 a 19:00', w: '100%', bg: TAPE_INK, ar: '0%' },
                { d: 'Sábado', h: '9:00 a 18:00', w: '88%', bg: TAPE_VERDE, ar: '8%' },
                { d: 'Domingo', h: '10:00 a 14:00', w: '40%', bg: TAPE_LIGHT, ar: '16%' },
              ].map((t) => (
                <div key={t.d}>
                  <div className="flex items-baseline justify-between gap-3">
                    <span className={`${display.className} uppercase text-[17px] tracking-wide`} style={{ color: C.tinta }}>
                      {t.d}
                    </span>
                    <span className="text-[13px] font-bold" style={{ color: C.mutL }}>
                      {t.h}
                    </span>
                  </div>
                  <div
                    className="ps-bar relative mt-2 h-[26px]"
                    style={{ width: t.w, '--ar': `entry ${t.ar} entry 62%` } as CSSProperties}
                  >
                    <div className="absolute inset-0" style={{ background: t.bg, boxShadow: TAPE_EDGE }} />
                    <span
                      className="absolute right-[-2px] top-1/2 h-[30px] w-[7px] -translate-y-1/2 rounded-[1px]"
                      style={{ backgroundColor: C.tinta }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.12em]" style={{ color: C.mutL2 }}>
                Largo de la regla = horas de atención
              </p>
            </Reveal>
          </div>

          {/* La publicación: su fachada abierta, recortada */}
          <Reveal delay={140} className="mt-10 md:mt-0">
            <figure
              className="relative rounded-[4px] overflow-hidden border-[3px]"
              style={{ borderColor: C.grafito, boxShadow: '8px 8px 0 rgba(20,23,26,0.16)' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/afiche-semana.webp`}
                  alt="Local de Ferretería Puerta Sur atendiendo: acceso abierto y letreros amarillos sobre la madera oscura"
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 6%' }}
                />
                {/* borde de cinta abajo: cubre el cartel de oferta de la publicación */}
                <div
                  className="absolute bottom-0 inset-x-0 h-[17%]"
                  style={{ background: TAPE_INK, boxShadow: TAPE_EDGE }}
                  aria-hidden="true"
                />
              </div>
              <figcaption
                className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em]"
                style={{ backgroundColor: C.grafito, color: C.mutD }}
              >
                Así se ve desde <span style={{ color: C.amarillo }}>Capitán Ávalos</span>
              </figcaption>
            </figure>
            <p className="mt-4 text-[14.5px] leading-relaxed" style={{ color: C.mutL }}>
              Ven y cotiza en Ferretería Puerta Sur: estamos en Capitán Ávalos #6208, Puerta Sur,
              Puerto Montt.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Opiniones en Google ── */}
      <section id="opiniones" className="relative" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Rotulo>Opiniones en Google</Rotulo>
          <Tape className="mt-5 w-[190px]" />

          <div className="mt-10 grid gap-5 md:grid-cols-12">
            {/* La destacada, en grande */}
            <Reveal className="md:col-span-7">
              <blockquote
                className="relative h-full rounded-[6px] p-7 md:p-9 overflow-hidden"
                style={{ backgroundColor: C.grafito, boxShadow: '6px 6px 0 rgba(20,23,26,0.16)' }}
              >
                <span
                  className={`${display.className} absolute -top-4 left-5 text-[110px] leading-none select-none`}
                  style={{ color: C.amarillo }}
                  aria-hidden="true"
                >
                  “
                </span>
                <p
                  className={`${display.className} relative mt-8 uppercase leading-[1.16] text-[clamp(1.25rem,4.6vw,2rem)]`}
                  style={{ color: '#fff' }}
                >
                  {OPINIONES[0].texto}
                </p>
                <footer className="relative mt-6 flex items-center gap-3" style={{ color: C.amarillo }}>
                  <HexNut size={15} className="shrink-0" />
                  <cite className="not-italic text-[12.5px] font-bold tracking-[0.06em]" style={{ color: C.amarillo }}>
                    {OPINIONES[0].autor}
                  </cite>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.mutD2 }}>
                    · Opiniones en Google
                  </span>
                </footer>
                <div
                  className="absolute bottom-0 right-0 w-[130px] h-[18px]"
                  style={{ background: TAPE_INK, boxShadow: TAPE_EDGE }}
                  aria-hidden="true"
                />
              </blockquote>
            </Reveal>

            {/* Las otras dos, con tuerca prendida */}
            <div className="md:col-span-5 grid gap-5 content-start">
              {[OPINIONES[1], OPINIONES[2]].map((o, i) => (
                <Reveal key={o.autor} delay={90 + i * 90}>
                  <blockquote
                    className="relative rounded-[6px] p-6 pt-7"
                    style={{
                      backgroundColor: i === 0 ? C.papel2 : C.cielo,
                      border: `2px solid ${C.lineL}`,
                      boxShadow: '5px 5px 0 rgba(20,23,26,0.1)',
                    }}
                  >
                    <span
                      className="absolute -top-[11px] left-6 w-[24px] h-[24px] rounded-[3px] flex items-center justify-center"
                      style={{ backgroundColor: C.amarillo, color: C.tinta, boxShadow: '2px 2px 0 rgba(20,23,26,0.25)' }}
                      aria-hidden="true"
                    >
                      <HexNut size={14} />
                    </span>
                    <p className="text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                      {o.texto}
                    </p>
                    <footer className="mt-4">
                      <cite className="not-italic text-[12.5px] font-bold tracking-[0.06em]" style={{ color: C.verdeProf }}>
                        {o.autor}
                      </cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Dónde estamos ── */}
      <section id="contacto" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        {/* cinta gigante de fondo, en el bloque de contacto */}
        <div
          className="absolute -right-16 top-16 w-[420px] h-[30px] rotate-[24deg] opacity-[0.13] pointer-events-none"
          style={{ background: TAPE_LIGHT, boxShadow: TAPE_EDGE }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Rotulo dark>Dónde estamos</Rotulo>
          <Tape className="mt-5 w-[190px]" />

          <div className="mt-9 md:grid md:grid-cols-2 md:gap-12 md:items-start">
            <div>
              <Reveal>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD2 }}>
                  Av. Capitán Ávalos
                </p>
                <p
                  className={`${display.className} font-bold leading-[0.85] text-[clamp(4.6rem,22vw,9rem)]`}
                  style={{ color: C.amarillo }}
                >
                  6208
                </p>
                <p className={`${display.className} mt-3 uppercase text-[clamp(1.3rem,5vw,2.1rem)] leading-tight text-white`}>
                  Puerta Sur · Puerto Montt
                </p>
              </Reveal>
              <Reveal delay={90}>
                <ul className="mt-7 space-y-3 text-[14.5px]" style={{ color: C.mutD }}>
                  {HORARIO.map((h) => (
                    <li key={h.dias} className="flex items-baseline gap-3">
                      <span className="w-[8px] h-[8px] rounded-[2px] shrink-0 translate-y-[-1px]" style={{ backgroundColor: C.verde }} />
                      <span className="w-[130px] shrink-0 font-semibold text-white">{h.dias}</span>
                      <span style={{ color: C.mutD }}>{h.horas}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={150}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <BtnWa dark>Cotiza por WhatsApp</BtnWa>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ps-ghost ps-ghostd inline-flex items-center gap-2 px-4 py-3 text-sm font-bold rounded-[4px] tap-44 text-white"
                    style={{ border: `2px solid ${C.lineD}` }}
                  >
                    Cómo llegar
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
                <p className="mt-5 text-[13.5px]" style={{ color: C.mutD2 }}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ps-linkd font-bold text-white underline underline-offset-2">
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="ps-linkd font-bold text-white underline underline-offset-2">
                    Síguenos en Facebook
                  </a>
                </p>
              </Reveal>
            </div>

            <Reveal delay={120} className="mt-9 md:mt-0">
              <figure
                className="relative rounded-[4px] overflow-hidden border-[3px]"
                style={{ borderColor: 'rgba(255,255,255,0.28)', boxShadow: '8px 8px 0 rgba(0,0,0,0.3)' }}
              >
                <div className="relative aspect-[4/3]">
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa: Ferretería Puerta Sur, Capitán Ávalos 6208, Puerto Montt"
                    className="absolute inset-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <figcaption
                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.16em]"
                  style={{ backgroundColor: C.tinta, color: C.mutD }}
                >
                  <span>Puerta Sur</span>
                  <span style={{ color: C.amarillo }}>Puerto Montt</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${display.className} uppercase text-[19px] leading-tight text-white`}>
              Ferretería <span style={{ color: C.amarillo }}>Puerta Sur</span>
            </p>
            <p className="mt-1 text-[12px]" style={{ color: C.mutD2 }}>
              Ferretería y materiales de construcción · Puerta Sur, Puerto Montt
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2" aria-label="Contacto">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="ps-linkd tap-44 inline-flex items-center gap-2 text-[13px] font-bold" style={{ color: C.amarillo }}>
              <IconWa className="w-4 h-4" /> WhatsApp
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="ps-linkd tap-44 text-[13px] font-bold" style={{ color: C.mutD }}>
              Cómo llegar
            </a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="ps-linkd tap-44 text-[13px] font-bold" style={{ color: C.mutD }}>
              Facebook
            </a>
          </nav>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Cotizar por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
