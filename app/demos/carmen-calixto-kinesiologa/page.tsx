import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, IMG } from './content'

// Instrument Serif para los titulares (con cursiva para la palabra clave)
// y Onest para el texto: la voz de sus piezas, serena y cercana.
const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// La línea de movimiento: verde pino de fondo y texto fuerte, salvia en
// los trazos, crema de base, arena en bloques y un solo acento coral.
const C = {
  pino: '#1F4E4A',
  pinoDeep: '#153936',
  salvia: '#7FA89A',
  salviaInk: '#355F54', // salvia oscura: pasa 4.5:1 sobre crema y arena
  salviaClara: '#A9C6BB', // salvia clara: pasa 4.5:1 sobre pino
  crema: '#F5F0E6',
  arena: '#E7DCC8',
  coral: '#D9775B',
  coralInk: '#B04A2E', // coral oscuro para texto chico sobre crema
  suave: '#4E6156', // texto muted: 5.8:1 sobre crema, 4.9:1 sobre arena
  lineL: 'rgba(31,78,74,0.16)',
  mutedD: 'rgba(245,240,230,0.72)',
  lineD: 'rgba(245,240,230,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'carmen-calixto-kinesiologa',
  title: 'Carmen Calixto · Kinesióloga en Valdivia',
  description:
    'Kinesiología individual y personalizada en Valdivia: neurorehabilitación adulto y dolor crónico. Sesiones de 1 hora en Av. Pedro Montt 700. 5,0 en Google. Agenda tu evaluación por WhatsApp.',
  image: `${IMG}/carmen.webp`,
})

const NAV_LINKS = [
  { label: 'Lo que atiendo', href: '#caminos' },
  { label: 'Tu sesión', href: '#sesion' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#visita' },
]

const NEURO = [
  'Rehabilitación post ACV: movilidad, marcha, equilibrio y coordinación',
  'Fortalecimiento muscular y entrenamiento funcional',
  'Más independencia en las actividades cotidianas',
  'Parkinson: ejercicio para equilibrio, fuerza, coordinación y marcha',
  'Esclerosis múltiple',
  'Nervios periféricos: ciático, túnel carpiano, plexo braquial, polineuropatía',
]

const DOLOR = [
  'Espalda y cuello · lumbalgia crónica',
  'Dolor articular, artrosis y artritis',
  'Fibromialgia y dolor musculoesquelético',
  'Dolor de hombro',
  'Fascitis plantar · dolor de talón',
]

const PASOS = [
  {
    n: '01',
    t: 'Evaluación inicial',
    d: 'Antes de tratar, Carmen evalúa cómo está tu cuerpo: qué duele, qué cuesta mover y qué necesita.',
  },
  {
    n: '02',
    t: 'Un plan para ti',
    d: 'Mismo diagnóstico, planes distintos: el tuyo se arma para tu cuerpo y tu ritmo.',
  },
  {
    n: '03',
    t: 'Sesiones de 1 hora',
    d: 'Atención individual: la hora completa es para ti, sin compartirla con nadie.',
  },
  {
    n: '04',
    t: 'Las herramientas',
    d: 'Ejercicio terapéutico, terapia manual y educación en dolor. El plan se ajusta a cómo respondes.',
  },
]

/**
 * El trazo que recorre el sitio: una curva orgánica que se dibuja con
 * clip-path al entrar la sección y termina en un punto que llega.
 */
function Trazo({
  stroke = C.salvia,
  dot = C.coral,
  w = 96,
  className = '',
}: {
  stroke?: string
  dot?: string
  w?: number
  className?: string
}) {
  return (
    <svg
      className={`block shrink-0 ${className}`}
      width={w}
      height={Math.round(w * 0.27)}
      viewBox="0 0 96 26"
      fill="none"
      aria-hidden="true"
    >
      <g className="cc-wire">
        <path
          d="M3 18 C18 8 30 22 46 13 C60 6 74 17 89 10"
          stroke={stroke}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      </g>
      <circle className="cc-wnode" cx="90" cy="9.5" r="3.6" fill={dot} />
    </svg>
  )
}

/** Rótulo de sección: el trazo llega hasta la etiqueta. */
function Eyebrow({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <p className="flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.3em]">
      <Trazo
        stroke={dark ? C.salviaClara : C.salvia}
        dot={dark ? C.arena : C.coral}
      />
      <span style={{ color: dark ? C.salviaClara : C.salviaInk }}>{children}</span>
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
  tone: 'pino' | 'crema' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'pino'
      ? { backgroundColor: C.pino, color: C.crema }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.pino }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.pino}`, color: C.pino }
          : { border: '1.5px solid rgba(245,240,230,0.6)', color: C.crema }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="cc-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Marcador de lista: un tramo corto del mismo trazo. */
function Marea() {
  return (
    <svg
      className="mt-[7px] h-[8px] w-[18px] shrink-0"
      viewBox="0 0 18 8"
      fill="none"
      aria-hidden="true"
    >
      <path d="M1 5.5 C5 2 8 7 12 4 C14.5 2.2 16 3 17 2.5" stroke={C.coral} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

export default function CarmenCalixtoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.pino }}
    >
      <style>{`
        /* El trazo que se mueve: la línea se dibuja de izquierda a derecha
           con clip-path mientras un punto avanza por su punta, y termina
           en un círculo que "llega". Movimiento recuperado, paso a paso. */
        @keyframes cc-stroke { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 -1% 0 0) } }
        .cc-strokewrap { clip-path: inset(0 -1% 0 0); animation: cc-stroke 1.6s cubic-bezier(.45,.05,.3,1) .35s both }
        .cc-dot {
          offset-path: path('M14 520 C70 505 90 445 150 425 C215 403 225 330 285 308 C345 286 350 215 400 195 C445 177 455 120 458 78');
          offset-distance: 100%;
          animation: cc-dotgo 1.6s cubic-bezier(.45,.05,.3,1) .35s both;
        }
        @keyframes cc-dotgo { from { offset-distance: 0% } to { offset-distance: 100% } }
        .cc-end { transform-box: fill-box; transform-origin: center; animation: cc-pop .55s cubic-bezier(.3,1.4,.5,1) 1.8s both }
        @keyframes cc-pop { from { transform: scale(0); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        @supports not (offset-path: path('M0 0')) { .cc-dot { display: none } }

        /* Titular por líneas y apariciones suaves del hero */
        @keyframes cc-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .cc-line { animation: cc-up .95s cubic-bezier(.22,.61,.2,1) both }
        @keyframes cc-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .cc-fade { animation: cc-fade .85s ease-out both }

        /* Cada sección continúa el trazo: tramo corto revelado al hacer scroll */
        @supports (animation-timeline: view()) {
          .cc-wire {
            clip-path: inset(0 100% 0 0);
            animation: cc-wire linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 60%;
          }
          @keyframes cc-wire { to { clip-path: inset(0 -2% 0 0) } }
          .cc-wnode {
            opacity: 0;
            transform: scale(.3);
            transform-box: fill-box;
            transform-origin: center;
            animation: cc-wnode linear both;
            animation-timeline: view();
            animation-range: entry 40% entry 72%;
          }
          @keyframes cc-wnode { to { opacity: 1; transform: scale(1) } }
        }

        .cc-btn { transition: transform .18s ease, filter .18s ease }
        .cc-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .cc-btn:active { transform: translateY(0) scale(.97) }
        .cc-btn:focus-visible { outline: 3px solid ${C.coral}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .cc-strokewrap, .cc-line, .cc-fade, .cc-dot, .cc-end { animation: none !important }
          .cc-strokewrap, .cc-wire { clip-path: none !important }
          .cc-wire, .cc-wnode { animation: none !important; clip-path: none !important; opacity: 1 !important; transform: none !important }
          .cc-dot { offset-distance: 100% !important }
        }
      `}</style>

      <BlitzNav
        name={<span>Carmen Calixto</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(245,240,230,0.94)',
          ink: C.pino,
          line: C.lineL,
          btnBg: C.pino,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: el trazo que se levanta ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ backgroundColor: C.crema }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 420px at 88% 4%, rgba(127,168,154,0.20), transparent 65%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[140px] pb-12 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* columna de texto con el trazo detrás */}
          <div className="relative">
            <div
              className="absolute -inset-x-4 -inset-y-8 pointer-events-none"
              aria-hidden="true"
            >
              <svg
                className="cc-strokewrap absolute inset-0 h-full w-full"
                viewBox="0 0 480 560"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M14 520 C70 505 90 445 150 425 C215 403 225 330 285 308 C345 286 350 215 400 195 C445 177 455 120 458 78"
                  stroke={C.salvia}
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
              <svg
                className="absolute inset-0 h-full w-full overflow-visible"
                viewBox="0 0 480 560"
                preserveAspectRatio="none"
                fill="none"
              >
                <circle className="cc-end" cx="458" cy="78" r="9" fill={C.coral} />
                <circle className="cc-dot" cx="0" cy="0" r="5.5" fill={C.pino} />
              </svg>
            </div>

            <div className="relative z-10">
              <p
                className="cc-fade flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.3em]"
                style={{ color: C.salviaInk, animationDelay: '0.15s' }}
              >
                <span className="h-px w-8 shrink-0" style={{ backgroundColor: C.salvia }} aria-hidden="true" />
                Kinesiología · Valdivia
              </p>
              <h1
                className={`${display.className} mt-5 leading-[1.02] tracking-[-0.01em] text-[clamp(3rem,11.5vw,5.4rem)]`}
              >
                <span className="block overflow-hidden">
                  <span className="cc-line block" style={{ animationDelay: '0.3s' }}>
                    Moverte
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="cc-line block" style={{ animationDelay: '0.45s' }}>
                    de nuevo,
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="cc-line block italic"
                    style={{ animationDelay: '0.6s', color: C.coralInk }}
                  >
                    a tu ritmo.
                  </span>
                </span>
              </h1>
              <p
                className="cc-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
                style={{ color: C.suave, animationDelay: '0.82s' }}
              >
                <strong className="font-semibold" style={{ color: C.pino }}>
                  {BIZ.fullName}
                </strong>
                , kinesióloga diplomada en Neurorehabilitación Adulto.
                Sesiones individuales de 1 hora en {BIZ.address}, {BIZ.city}.
              </p>
              <div
                className="cc-fade mt-7 flex flex-col sm:flex-row gap-3 sm:items-center"
                style={{ animationDelay: '0.98s' }}
              >
                <BtnWa tone="pino">Agenda tu evaluación</BtnWa>
                <BtnWa tone="linea" href="#caminos">
                  Ver qué atiendo
                </BtnWa>
              </div>
              <div
                className="cc-fade mt-6 flex items-center gap-2.5"
                style={{ animationDelay: '1.12s' }}
              >
                <Stars value={BIZ.ratingValue} color={C.coral} size={15} />
                <span className="text-sm" style={{ color: C.suave }}>
                  {BIZ.rating} en Google
                </span>
              </div>
            </div>
          </div>

          {/* Carmen, en arco */}
          <figure className="relative mx-auto w-[76%] max-w-[300px] md:w-full md:max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute -top-3 -left-3 md:-top-4 md:-left-4 h-full w-full"
              style={{ borderRadius: '999px 999px 24px 24px', border: `1.5px solid ${C.salvia}` }}
            />
            <div className="relative overflow-hidden" style={{ borderRadius: '999px 999px 24px 24px' }}>
              <Image
                src={`${IMG}/carmen.webp`}
                alt="Carmen Calixto, kinesióloga, de pie con uniforme en su consulta de Valdivia"
                width={640}
                height={1065}
                priority
                sizes="(min-width: 1024px) 420px, 76vw"
                className="block h-auto w-full"
              />
            </div>
            <figcaption
              className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[0.26em]"
              style={{ color: C.suave }}
            >
              Carmen Calixto · Kinesióloga
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · Franja: su consulta y su frase ── */}
      <section aria-label="La consulta de Carmen" style={{ backgroundColor: C.pino }}>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element -- banda panorámica a razón real */}
          <img
            src={`${IMG}/consulta.webp`}
            alt="La consulta de Carmen Calixto en Pedro Montt: camillas, balones e implementos de kinesiología"
            width={1200}
            height={338}
            loading="lazy"
            className="block h-auto w-full"
          />
        </div>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-8 md:py-11 text-center">
          <Reveal>
            <p
              className={`${display.className} italic text-2xl md:text-4xl leading-snug`}
              style={{ color: C.crema }}
            >
              «Mismo diagnóstico, planes distintos.»
            </p>
            <p
              className="mt-3 text-[10px] font-semibold uppercase tracking-[0.26em]"
              style={{ color: C.salviaClara }}
            >
              Carmen Calixto · su consulta en Pedro Montt
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Dos caminos ── */}
      <section id="caminos" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Lo que atiendo</Eyebrow>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-5 lg:gap-12 items-end">
              <h2
                className={`${display.className} leading-[1.04] text-[clamp(2.3rem,6vw,4rem)]`}
              >
                Dos caminos,{' '}
                <em className="italic" style={{ color: C.coralInk }}>
                  un mismo objetivo.
                </em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.suave }}>
                Dolor crónico y neurorehabilitación: el foco que ella misma
                declara. Todo parte con una evaluación inicial.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12">
            {/* Camino 01 · Neurorehabilitación: foto primero, columna editorial */}
            <Reveal>
              <article>
                <figure className="relative w-[72%] max-w-[280px]">
                  <div
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-3 h-full w-full"
                    style={{ borderRadius: '26px', border: `1.5px solid ${C.salvia}` }}
                  />
                  <div className="relative overflow-hidden rounded-[26px]">
                    <Image
                      src={`${IMG}/ejercicio.webp`}
                      alt="Ejercicio terapéutico: un paciente mayor sentado en un cajón durante su sesión"
                      width={640}
                      height={1136}
                      sizes="(min-width: 1024px) 280px, 72vw"
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                </figure>
                <p
                  className="mt-8 text-[11px] font-semibold uppercase tracking-[0.26em]"
                  style={{ color: C.salviaInk }}
                >
                  Camino 01 · Neurorehabilitación adulto
                </p>
                <h3 className={`${display.className} mt-3 text-3xl md:text-4xl leading-[1.08]`}>
                  Cuando el cuerpo cambia, el movimiento se entrena.
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {NEURO.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                      <Marea />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <blockquote
                  className="mt-7 border-l-2 pl-4 md:pl-5"
                  style={{ borderColor: C.coral }}
                >
                  <p className={`${display.className} italic text-lg md:text-xl leading-snug`}>
                    «Recuperarte después de un ACV toma tiempo, pero no
                    tienes que hacerlo solo.»
                  </p>
                </blockquote>
              </article>
            </Reveal>

            {/* Camino 02 · Dolor: texto primero, filas corridas */}
            <Reveal delay={120}>
              <article className="lg:mt-24">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.26em]"
                  style={{ color: C.salviaInk }}
                >
                  Camino 02 · Dolor crónico o persistente
                </p>
                <h3 className={`${display.className} mt-3 text-3xl md:text-4xl leading-[1.08]`}>
                  Cuando el dolor se queda, hay que entenderlo y trabajarlo.
                </h3>
                <ul className="mt-6">
                  {DOLOR.map((item, i) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-4 border-t py-3.5 text-sm md:text-[15px] leading-relaxed"
                      style={{ borderColor: C.lineL, color: C.pino }}
                    >
                      <span
                        className="text-[11px] font-semibold tracking-[0.14em]"
                        style={{ color: C.coralInk }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                  <li
                    className="border-t border-b py-3.5 text-sm leading-relaxed"
                    style={{ borderColor: C.lineL, color: C.suave }}
                  >
                    Con ejercicio terapéutico, terapia manual y educación en dolor.
                  </li>
                </ul>
                <blockquote
                  className="mt-7 border-l-2 pl-4 md:pl-5"
                  style={{ borderColor: C.coral }}
                >
                  <p className={`${display.className} italic text-lg md:text-xl leading-snug`}>
                    «Cada persona necesita un abordaje diferente.»
                  </p>
                </blockquote>
                <figure className="mt-9 ml-auto w-[64%] max-w-[240px]">
                  <div
                    className="overflow-hidden"
                    style={{ borderRadius: '24px 110px 24px 110px' }}
                  >
                    <Image
                      src={`${IMG}/terapia-manual.webp`}
                      alt="Terapia manual en la espalda durante una sesión de kinesiología"
                      width={640}
                      height={1136}
                      sizes="(min-width: 1024px) 240px, 64vw"
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption
                    className="mt-2.5 text-right text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: C.suave }}
                  >
                    Terapia manual
                  </figcaption>
                </figure>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Cómo es una sesión ── */}
      <section id="sesion" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Eyebrow>Así es una sesión</Eyebrow>
              <h2
                className={`${display.className} mt-4 leading-[1.04] text-[clamp(2.3rem,6vw,4rem)]`}
              >
                Primero la evaluación,{' '}
                <em className="italic" style={{ color: C.salviaInk }}>
                  después el plan.
                </em>
              </h2>
            </Reveal>
            <ol className="relative mt-10 md:mt-12">
              <span
                className="absolute left-[21px] top-3 bottom-6 w-[2px]"
                style={{ backgroundColor: 'rgba(127,168,154,0.65)' }}
                aria-hidden="true"
              />
              {PASOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <li className="relative flex gap-5 pb-8 last:pb-0">
                    <span
                      className={`${display.className} relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg italic`}
                      style={{
                        backgroundColor: C.pino,
                        color: C.crema,
                        boxShadow: `0 0 0 4px ${C.arena}`,
                      }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1.5">
                      <h3 className="text-base md:text-lg font-semibold" style={{ color: C.pino }}>
                        {p.t}
                      </h3>
                      <p className="mt-1.5 max-w-md text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                        {p.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-9">
                <BtnWa tone="pino">Agenda tu evaluación</BtnWa>
              </div>
            </Reveal>
          </div>

          {/* Collage: el paso a paso y el equipo */}
          <Reveal delay={140}>
            <div className="relative mx-auto w-[84%] max-w-[340px] md:max-w-[400px]">
              <figure
                className="overflow-hidden"
                style={{ borderRadius: '120px 24px 24px 24px', boxShadow: '0 18px 44px rgba(31,78,74,0.18)' }}
              >
                <Image
                  src={`${IMG}/escalera.webp`}
                  alt="Paciente subiendo a un step junto a la espaldera durante ejercicio terapéutico"
                  width={640}
                  height={659}
                  sizes="(min-width: 1024px) 400px, 84vw"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </figure>
              <figure
                className="absolute -bottom-8 -right-5 w-[42%] max-w-[150px] overflow-hidden md:-right-8"
                style={{
                  borderRadius: '20px',
                  border: `3px solid ${C.crema}`,
                  boxShadow: '0 12px 30px rgba(31,78,74,0.22)',
                  transform: 'rotate(2deg)',
                }}
              >
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="Poleas de ejercicio en la consulta"
                  width={540}
                  height={691}
                  sizes="150px"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </figure>
              <figcaption
                className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: C.suave }}
              >
                Ejercicio terapéutico, paso a paso
              </figcaption>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Complementarios ── */}
      <section style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-center">
          <Reveal>
            <figure className="relative mx-auto w-[62%] max-w-[260px] lg:mx-0">
              <div
                aria-hidden="true"
                className="absolute -top-3 -right-3 h-full w-full"
                style={{ borderRadius: '24px', border: `1.5px solid ${C.salvia}` }}
              />
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src={`${IMG}/masaje.webp`}
                  alt="Masaje descontracturante de espalda"
                  width={640}
                  height={1138}
                  sizes="(min-width: 1024px) 260px, 62vw"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Eyebrow>También en la consulta</Eyebrow>
              <h2
                className={`${display.className} mt-4 leading-[1.04] text-[clamp(2.1rem,5vw,3.4rem)]`}
              >
                Masaje y presoterapia,{' '}
                <em className="italic" style={{ color: C.coralInk }}>
                  cuando el cuerpo pide pausa.
                </em>
              </h2>
            </Reveal>
            <div className="mt-8 grid sm:grid-cols-2 gap-8">
              {[
                {
                  t: 'Masaje descontracturante',
                  d: 'Para espalda, cuello y hombros: aflojar la carga que el cuerpo va guardando.',
                },
                {
                  t: 'Presoterapia',
                  d: 'Compresión secuencial que ayuda a piernas cansadas o hinchadas.',
                },
              ].map((s) => (
                <Reveal key={s.t}>
                  <div className="border-t-2 pt-4" style={{ borderColor: C.coral }}>
                    <h3 className="text-base md:text-lg font-semibold" style={{ color: C.pino }}>
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: C.suave }}>
                      {s.d}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.pino }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow dark>Lo que dicen de ella</Eyebrow>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <blockquote>
                <p
                  className={`${display.className} leading-[1.14] text-[clamp(1.9rem,5.4vw,3.6rem)]`}
                  style={{ color: C.crema }}
                >
                  «Lejos la mejor kinesióloga de Valdivia, muy profesional
                  y dedicada,{' '}
                  <em className="italic" style={{ color: C.salviaClara }}>
                    muy recomendada.
                  </em>
                  »
                </p>
                <footer className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <Stars value={BIZ.ratingValue} color={C.arena} size={17} />
                  <span
                    className="text-sm font-semibold"
                    style={{ color: C.crema }}
                  >
                    Angela O.
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em]" style={{ color: C.mutedD }}>
                    opinión en Google
                  </span>
                </footer>
              </blockquote>
              <p className="mt-6 max-w-md text-sm leading-relaxed" style={{ color: C.mutedD }}>
                Su ficha en Google acumula un {BIZ.rating}: la primera
                opinión publicada es esta.
              </p>
            </Reveal>

            {/* El mensaje que ella compartió, como burbuja de chat */}
            <Reveal delay={140}>
              <div>
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.24em]"
                  style={{ color: C.salviaClara }}
                >
                  Mensaje de un paciente
                </p>
                <div
                  className="relative mt-3 rounded-2xl rounded-bl-md px-5 py-4"
                  style={{ backgroundColor: C.crema, maxWidth: '300px' }}
                >
                  <p className={`${display.className} italic text-lg leading-snug`} style={{ color: C.pino }}>
                    «Hoy es un día sin dolor, gracias a usted.»
                  </p>
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-[7px] left-5 h-4 w-4 rotate-45"
                    style={{ backgroundColor: C.crema }}
                  />
                </div>
                <p className="mt-4 text-xs leading-relaxed" style={{ color: C.mutedD }}>
                  Publicado por Carmen en su Instagram, sin nombre.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7 · Horario y ubicación ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <Eyebrow>Horario y ubicación</Eyebrow>
              <h2
                className={`${display.className} mt-4 leading-[1.04] text-[clamp(2.3rem,6vw,4rem)]`}
              >
                Pedro Montt 700,{' '}
                <em className="italic" style={{ color: C.coralInk }}>
                  por las tardes.
                </em>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: C.suave }}>
                Agenda por WhatsApp antes de ir: la evaluación se coordina
                con Carmen directamente.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-8 max-w-md">
                {HORARIO.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 border-t py-3 text-sm md:text-[15px]"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className="font-semibold" style={{ color: C.pino }}>
                      {h.d}
                    </span>
                    <span style={{ color: h.cerrado ? C.coralInk : C.suave }}>
                      {h.h}
                    </span>
                  </li>
                ))}
                <li className="border-t" style={{ borderColor: C.lineL }} aria-hidden="true" />
              </ul>
            </Reveal>
            <Reveal delay={160}>
              <address className="not-italic mt-7 text-base leading-relaxed" style={{ color: C.suave }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.pino, textDecorationColor: 'rgba(217,119,91,0.55)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <BtnWa tone="pino">Agenda tu evaluación</BtnWa>
                <BtnWa tone="linea" href={MAPS_URL}>
                  Cómo llegar
                </BtnWa>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div
              className="relative w-full overflow-hidden rounded-[24px] aspect-[4/3] min-h-[300px]"
              style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 18px 44px rgba(31,78,74,0.14)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.mapsName}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.suave }}>
              {BIZ.address} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Cierre: la línea llega ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pinoDeep }}>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Trazo stroke={C.salviaClara} dot={C.arena} w={150} />
            </div>
            <h2
              className={`${display.className} mt-6 leading-[1.04] text-[clamp(2.5rem,7.5vw,4.6rem)]`}
              style={{ color: C.crema }}
            >
              El primer paso{' '}
              <em className="italic" style={{ color: C.salviaClara }}>
                es una evaluación.
              </em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbele a Carmen por WhatsApp y agenda tu hora en{' '}
              {BIZ.address}, {BIZ.city}. La hora completa es para ti.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <BtnWa tone="crema">Agenda tu evaluación por WhatsApp</BtnWa>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                style={{ color: C.crema, textDecorationColor: C.coral }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.pinoDeep, color: C.crema }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className={`${display.className} text-xl md:text-2xl`}>
                  {BIZ.name}
                  <span className="italic text-base md:text-lg" style={{ color: C.salviaClara }}>
                    {' '}· Kinesióloga
                  </span>
                </p>
                <p className="text-sm mt-1" style={{ color: C.mutedD }}>
                  {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(245,240,230,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(245,240,230,0.85)' }}
                >
                  Instagram
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center font-semibold"
                  style={{ color: C.salviaClara }}
                >
                  WhatsApp
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,240,230,0.62)' }}>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.crema }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.mapsName}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.salviaClara }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
