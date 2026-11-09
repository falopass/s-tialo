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
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  AREAS,
  PRESENTACION,
  SESION,
  REVIEWS,
} from './content'

// Instrument Serif para la voz editorial (cálida, de revista) y Outfit
// para el texto corrido: cercana y limpia, como su consulta.
const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// La paleta sale de su consulta: el petróleo de su uniforme, la madera
// de su letrero, el rosa té de la oncología de mama y el marfil del muro.
const C = {
  petroleo: '#155E6B',
  petroleoBajo: '#0E4650',
  madera: '#A9774A',
  maderaOsc: '#7A5537', // madera oscura: ≥4.5:1 sobre marfil
  maderaCl: '#EDD9BF', // madera clara: ≥4.5:1 sobre petróleo
  rosa: '#E9C7C2',
  rosaCl: '#F3DCD7', // rosa claro: legible sobre petróleo
  rosaBajo: '#F5E9E4',
  marfil: '#FBF7F2',
  papel: '#FFFDFA',
  tinta: '#24313A',
  tintaBajo: '#1B2630',
  mutM: 'rgba(36,49,58,0.70)',
  mutP: 'rgba(251,247,242,0.78)',
  lineL: 'rgba(36,49,58,0.14)',
  lineD: 'rgba(251,247,242,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'kinesiologa-viktoria-asencio',
  title: 'Viktoria Asencio · Kinesióloga de piso pélvico y oncología en Villarrica',
  description:
    'Kinesiología de piso pélvico y oncología de mama en Clínica Nueva Austria, San Martín 706, Villarrica. Sesiones de 45 minutos, particular y Fonasa. 5,0 en Google. Agenda por WhatsApp.',
  image: `${IMG}/retrato.webp`,
})

const NAV_LINKS = [
  { label: 'Áreas de atención', href: '#areas' },
  { label: 'Oncología de mama', href: '#oncologia' },
  { label: 'Tu sesión', href: '#sesion' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

/** La cinta de su letrero: dos trazos que se cruzan, como la cinta de
    la oncología. Marca gráfica del demo. */
function Cinta({
  className = 'w-3.5 h-4',
  color = C.madera,
}: {
  className?: string
  color?: string
}) {
  return (
    <svg viewBox="0 0 24 30" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 3 C3.2 5.6 3.6 10.4 8.2 12.4 L18.5 27"
        stroke={color}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
      <path
        d="M18.5 3 C23 5.6 22.7 10.4 18.2 12.4 L8 27"
        stroke={color}
        strokeWidth="2.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Rótulo en versalitas con filete y la cinta. */
function Rotulo({
  children,
  color = C.maderaOsc,
  cinta = C.madera,
}: {
  children: React.ReactNode
  color?: string
  cinta?: string
}) {
  return (
    <p
      className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase mb-6"
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      <span>{children}</span>
      <Cinta className="w-3 h-[15px] shrink-0" color={cinta} />
    </p>
  )
}

function WaIcon({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.petroleo,
  ink = C.marfil,
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
}) {
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="va-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-medium tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

export default function ViktoriaAsencioPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.marfil, color: C.tinta }}
    >
      <style>{`
        /* «Un trazo que acompaña»: la línea sale de arriba a la izquierda,
           rodea el retrato y termina formando la cinta junto al nombre. */
        @keyframes va-trazo { to { stroke-dashoffset: 0 } }
        .va-trazo { stroke-dasharray: 1000; stroke-dashoffset: 1000; animation: va-trazo 1.3s cubic-bezier(.42,.04,.3,1) .25s both }
        .va-lazo { stroke-dasharray: 200; stroke-dashoffset: 200; animation: va-trazo .55s cubic-bezier(.42,.04,.3,1) 1.35s both }

        /* El retrato aparece con un leve zoom de salida. */
        @keyframes va-retrato { from { opacity: 0; transform: scale(1.04) } to { opacity: 1; transform: scale(1) } }
        .va-retrato { animation: va-retrato 1.1s cubic-bezier(.25,.6,.2,1) .35s both }

        @keyframes va-sube { from { opacity: 0; transform: translateY(15px) } to { opacity: 1; transform: none } }
        .va-sube { animation: va-sube .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--va-d, 0s) }

        /* El trazo de las áreas se revela hacia abajo al hacer scroll. */
        @supports (animation-timeline: view()) {
          .va-linea { clip-path: inset(0 0 100% 0); animation: va-linea linear both; animation-timeline: view(); animation-range: entry 4% exit 70% }
          @keyframes va-linea { to { clip-path: inset(0 0 0 0) } }
        }

        .va-btn { transition: transform .18s ease, filter .18s ease }
        .va-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .va-btn:active { transform: scale(.97) }
        .va-page a:focus-visible { outline: 3px solid ${C.madera}; outline-offset: 3px }
        .va-page a:focus:not(:focus-visible) { outline: none }
        .va-parada { transition: transform .2s ease }
        .va-parada:hover { transform: translateX(4px) }

        @media (prefers-reduced-motion: reduce) {
          .va-trazo, .va-lazo { animation: none !important; stroke-dashoffset: 0 !important }
          .va-retrato, .va-sube { animation: none !important }
          .va-linea { clip-path: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} tracking-[0.02em] truncate`}>
            Viktoria Asencio
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(251,247,242,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.petroleo,
          btnInk: C.marfil,
        }}
      />

      <div className="va-page">
        {/* ── 1 · Hero: un trazo que acompaña ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.marfil }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(680px 420px at 92% -10%, rgba(233,199,194,0.5), transparent 62%), radial-gradient(520px 400px at -8% 42%, rgba(169,119,74,0.09), transparent 60%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[80px] md:pt-[118px] pb-12 md:pb-16">
            <div className="grid lg:grid-cols-12 lg:gap-x-10">
              <p
                className="va-sube flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] md:text-[11px] font-semibold tracking-[0.3em] uppercase mb-6 lg:col-start-1 lg:col-span-7 lg:row-start-1"
                style={{ color: C.maderaOsc, '--va-d': '0.1s' } as CSSProperties}
              >
                <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
                <span>{BIZ.city} · {BIZ.clinic}</span>
                <Cinta className="w-3 h-[15px] shrink-0" />
              </p>

              <h1
                className={`${display.className} va-sube leading-[1.02] tracking-[-0.005em] text-[clamp(2.4rem,9.8vw,4.6rem)] lg:col-start-1 lg:col-span-7 lg:row-start-2`}
                style={{ color: C.tinta, '--va-d': '0.28s' } as CSSProperties}
              >
                Te escucho, te explico,{' '}
                <em style={{ color: C.petroleo }}>te acompaño.</em>
              </h1>

              {/* El retrato con el trazo que lo rodea y cierra en cinta */}
              <div className="relative mt-8 lg:mt-0 w-full max-w-[330px] sm:max-w-[360px] lg:max-w-[450px] mx-auto lg:mx-0 aspect-[13/10] lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-5 lg:self-center">
                <div
                  className="va-retrato absolute left-0 top-[4%] w-[57%] aspect-[8/9] overflow-hidden rounded-[26px]"
                  style={{ boxShadow: '0 26px 60px rgba(36,49,58,0.18)' }}
                >
                  <Image
                    src={`${IMG}/retrato.webp`}
                    alt="Viktoria Asencio en su consulta, frente a su letrero de madera de kinesiología oncológica y piso pélvico"
                    fill
                    priority
                    sizes="(min-width: 1024px) 260px, (min-width: 640px) 205px, 188px"
                    className="object-cover"
                  />
                </div>

                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 390 300"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    className="va-trazo"
                    d="M 40 -6 C 20 30 8 76 12 126 C 16 180 34 234 84 254 C 136 276 204 268 230 232 C 246 208 238 190 242 172 C 248 152 266 146 280 146 C 287 146 293 147 297 150"
                    stroke={C.madera}
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    pathLength={1000}
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className="va-lazo"
                    d="M 284 118 C 276 124 276 134 284 139 L 309 170"
                    stroke={C.madera}
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    pathLength={200}
                    vectorEffect="non-scaling-stroke"
                  />
                  <path
                    className="va-lazo"
                    d="M 310 118 C 318 124 318 134 310 139 L 285 170"
                    stroke={C.madera}
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    pathLength={200}
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>

                <div
                  className="va-sube absolute right-0 top-[62%] w-[35%]"
                  style={{ '--va-d': '1.75s' } as CSSProperties}
                >
                  <p className={`${display.className} leading-[1.0] text-[clamp(1.35rem,5.6vw,2.1rem)]`} style={{ color: C.tinta }}>
                    Viktoria
                    <br />
                    Asencio
                  </p>
                  <p className="mt-2 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em] leading-relaxed" style={{ color: C.maderaOsc }}>
                    Kinesióloga
                    <br />
                    piso pélvico · oncología
                  </p>
                </div>
              </div>

              <p
                className="va-sube mt-8 lg:mt-8 max-w-md text-base md:text-lg leading-relaxed lg:col-start-1 lg:col-span-6 lg:row-start-3"
                style={{ color: C.mutM, '--va-d': '1.95s' } as CSSProperties}
              >
                {PRESENTACION}
              </p>

              <div
                className="va-sube mt-6 flex flex-wrap gap-3 lg:col-start-1 lg:col-span-6 lg:row-start-4"
                style={{ '--va-d': '2.1s' } as CSSProperties}
              >
                <BtnWa>Agenda tu sesión por WhatsApp</BtnWa>
              </div>

              <div
                className="va-sube mt-6 flex items-center gap-3 lg:col-start-1 lg:col-span-6 lg:row-start-5"
                style={{ '--va-d': '2.25s' } as CSSProperties}
              >
                <Stars value={BIZ.ratingValue} color={C.madera} size={17} />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm tap-44"
                  style={{ color: C.mutM }}
                >
                  <strong className="font-semibold" style={{ color: C.tinta }}>{BIZ.rating}</strong>
                  {' '}· {BIZ.reviews} opiniones en Google
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Áreas de atención: paradas sobre el trazo ── */}
        <section id="areas" className="scroll-mt-20" style={{ backgroundColor: C.rosaBajo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo>Áreas de atención</Rotulo>
                <h2
                  className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,7vw,3.9rem)]`}
                  style={{ color: C.tinta }}
                >
                  ¿Te suena <em style={{ color: C.petroleo }}>alguna de estas?</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutM }}>
                  Estas son las cinco áreas en las que trabaja Viktoria.
                  Si una te suena, el primer paso es un mensaje.
                </p>
                <div className="mt-7">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="va-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-[15px] font-medium tap-44"
                    style={{ border: `1.5px solid ${C.petroleo}`, color: C.petroleo }}
                  >
                    <WaIcon className="w-4 h-4" />
                    Cuéntale tu caso
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <ol className="relative">
                <svg
                  className="va-linea absolute left-0 top-1 bottom-0 w-12 h-full pointer-events-none"
                  viewBox="0 0 48 100"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 24 0 C 34 11 14 22 24 34 C 34 46 14 57 24 69 C 34 81 16 90 24 100"
                    stroke={C.madera}
                    strokeWidth="2.3"
                    strokeLinecap="round"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
                {AREAS.map((a, i) => (
                  <li key={a.n} className="relative">
                    <Reveal delay={i * 90}>
                      <div className="va-parada relative pl-14 md:pl-16 pb-7 pt-1">
                        <span
                          className="absolute left-[9px] top-[7px] w-[30px] h-[30px] rounded-full flex items-center justify-center text-[11px] font-semibold"
                          style={{ backgroundColor: C.marfil, border: `1.5px solid ${C.madera}`, color: C.maderaOsc }}
                          aria-hidden="true"
                        >
                          {a.n}
                        </span>
                        <h3
                          className={`${display.className} leading-[1.08] text-[clamp(1.3rem,4.8vw,1.9rem)]`}
                          style={{ color: C.tinta }}
                        >
                          {a.name}
                        </h3>
                        <p className="mt-1.5 text-[15px] leading-relaxed max-w-md" style={{ color: C.mutM }}>
                          {a.desc}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
                <li className="relative h-10" aria-hidden="true">
                  <Cinta className="absolute left-[10px] top-1 w-[26px] h-8" color={C.madera} />
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* ── 3 · Rehabilitación oncológica de mama ── */}
        <section id="oncologia" className="scroll-mt-20" style={{ backgroundColor: C.petroleo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <Rotulo color={C.maderaCl} cinta={C.rosa}>Su especialidad</Rotulo>
                <h2
                  className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,7vw,3.9rem)]`}
                  style={{ color: C.marfil }}
                >
                  Rehabilitación oncológica de mama:{' '}
                  <em style={{ color: C.rosaCl }}>acompañada, en cada etapa.</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutP }}>
                  Es el área que da nombre a su consulta: acompañar el
                  proceso oncológico de mama con movimiento, ejercicio
                  guiado y alguien que te explica cada paso, antes,
                  durante y después del tratamiento.
                </p>
                <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutP }}>
                  Un tema delicado merece una atención que no tiene apuro.
                </p>
                <div className="mt-8">
                  <BtnWa bg={C.marfil} ink={C.petroleoBajo}>Agenda tu sesión</BtnWa>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <figure className="relative max-w-[560px]">
                  <div
                    className="relative aspect-[4/3] overflow-hidden rounded-[24px]"
                    style={{ outline: `1.5px solid ${C.rosa}`, outlineOffset: '8px' }}
                  >
                    <Image
                      src={`${IMG}/sesion-pelota.webp`}
                      alt="Viktoria guiando con las manos un ejercicio con pelota que hace una paciente sentada en una fitball, durante una sesión de rehabilitación oncológica"
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-5 flex items-center gap-2.5 text-sm" style={{ color: C.mutP }}>
                    <Cinta className="w-3 h-[15px] shrink-0" color={C.rosa} />
                    Una sesión de rehabilitación en su consulta de Villarrica.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · Cómo es una sesión ── */}
        <section id="sesion" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 lg:order-2">
              <Reveal>
                <Rotulo>Cómo es una sesión</Rotulo>
                <h2
                  className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,7vw,3.9rem)]`}
                  style={{ color: C.tinta }}
                >
                  45 minutos <em style={{ color: C.petroleo }}>para ti.</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutM }}>
                  Cada sesión dura 45 minutos en su consulta de Clínica
                  Nueva Austria: tiempo para evaluarte, explicarte y
                  trabajar. Atiende particular y Fonasa.
                </p>
                <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutM }}>
                  En sus opiniones se repite una idea: aquí te sientes
                  cómoda, escuchada y tranquila.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <ul className="mt-8 flex flex-wrap gap-3">
                  {SESION.map((s) => (
                    <li
                      key={s.big}
                      className="rounded-2xl px-4 py-3"
                      style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: C.papel }}
                    >
                      <p className={`${display.className} text-lg leading-none`} style={{ color: C.petroleo }}>
                        {s.big}
                      </p>
                      <p className="mt-1.5 text-xs leading-snug" style={{ color: C.mutM }}>
                        {s.small}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-6 lg:order-1">
              <Reveal delay={80}>
                <figure className="relative max-w-[560px]">
                  <div className="relative aspect-[5/4] overflow-hidden rounded-[24px]">
                    <Image
                      src={`${IMG}/sesion-camilla.webp`}
                      alt="Viktoria realizando terapia manual a una paciente acostada en la camilla de su consulta"
                      fill
                      sizes="(min-width: 1024px) 48vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-5 flex items-center gap-2.5 text-sm" style={{ color: C.mutM }}>
                    <Cinta className="w-3 h-[15px] shrink-0" />
                    Terapia manual en camilla, en su consulta.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.rosaBajo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 items-end">
              <div className="lg:col-span-5">
                <Reveal>
                  <Rotulo>Opiniones · Google</Rotulo>
                  <p className="flex items-baseline gap-4">
                    <span
                      className={`${display.className} leading-none text-[clamp(4.6rem,12vw,7.5rem)]`}
                      style={{ color: C.petroleo }}
                    >
                      {BIZ.rating}
                    </span>
                  </p>
                  <div className="mt-3">
                    <Stars value={BIZ.ratingValue} color={C.madera} size={22} />
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium tap-44"
                    style={{ color: C.maderaOsc }}
                  >
                    {BIZ.reviews} opiniones en Google
                  </a>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={80}>
                  <blockquote>
                    <p
                      className={`${display.className} leading-[1.15] text-[clamp(1.5rem,4.4vw,2.4rem)]`}
                      style={{ color: C.tinta }}
                    >
                      “{REVIEWS[0].text}”
                    </p>
                    <footer className="mt-5 flex items-center gap-2.5 text-sm font-medium" style={{ color: C.mutM }}>
                      <Cinta className="w-3 h-[15px]" />
                      {REVIEWS[0].author}
                    </footer>
                  </blockquote>
                </Reveal>
              </div>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10">
              {REVIEWS.slice(1).map((r, i) => (
                <Reveal key={r.author} delay={i * 120}>
                  <blockquote className="border-t pt-6" style={{ borderColor: 'rgba(36,49,58,0.18)' }}>
                    <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.mutM }}>
                      “{r.text}”
                    </p>
                    <footer className="mt-4 flex items-center gap-2.5 text-sm font-medium" style={{ color: C.tinta }}>
                      <Cinta className="w-3 h-[15px]" />
                      {r.author}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 6 · Dónde y cuándo ── */}
        <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5">
                <Reveal>
                  <Rotulo>Dónde y cuándo</Rotulo>
                  <h2
                    className={`${display.className} leading-[1.04] tracking-[-0.01em] text-[clamp(2rem,6vw,3.4rem)]`}
                    style={{ color: C.tinta }}
                  >
                    {BIZ.clinic}, <em style={{ color: C.petroleo }}>{BIZ.address}.</em>
                  </h2>
                  <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutM }}>
                    {BIZ.address}, {BIZ.city}, {BIZ.region}.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-8 max-w-md">
                    <h3 className="text-[11px] font-semibold tracking-[0.28em] uppercase mb-3" style={{ color: C.maderaOsc }}>
                      Horario de atención
                    </h3>
                    {HORARIO.map((h) => (
                      <p
                        key={h.dias}
                        className="flex items-baseline justify-between gap-6 py-2.5 border-b text-[15px] md:text-base"
                        style={{ borderColor: C.lineL, color: h.horas === 'Cerrado' ? C.mutM : C.tinta }}
                      >
                        <span>{h.dias}</span>
                        <span className={`${display.className} text-lg`}>
                          {h.horas}
                        </span>
                      </p>
                    ))}
                    <div className="mt-7 flex flex-wrap items-center gap-4">
                      <a
                        href={MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="va-btn inline-flex items-center gap-2 text-sm font-medium tap-44"
                        style={{ color: C.petroleo }}
                      >
                        Cómo llegar
                        <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M3 13L13 3M6 3h7v7" />
                        </svg>
                      </a>
                      <a href={`tel:${BIZ.phoneTel}`} className="text-sm font-medium tap-44" style={{ color: C.tinta }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal delay={100}>
                  <div
                    className="rounded-[24px] overflow-hidden"
                    style={{ border: `1.5px solid ${C.lineL}` }}
                  >
                    <LazyMap
                      src={MAPS_EMBED}
                      title="Mapa: Clínica Nueva Austria, San Martín 706, Villarrica"
                      className="block w-full h-[300px] md:h-[380px]"
                      style={{ border: 0, backgroundColor: C.rosaBajo }}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.petroleoBajo }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(720px 400px at 50% 0%, rgba(21,94,107,0.7), transparent 68%), radial-gradient(480px 300px at 90% 110%, rgba(233,199,194,0.12), transparent 60%)',
            }}
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Cinta className="w-6 h-8 mx-auto mb-7" color={C.rosa} />
              <h2
                className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,8vw,4.4rem)]`}
                style={{ color: C.marfil }}
              >
                El primer paso es <em style={{ color: C.rosaCl }}>escribir.</em>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutP }}>
                Cuéntale qué te trae y agenda tu sesión por WhatsApp.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <BtnWa bg={C.marfil} ink={C.petroleoBajo}>Agenda tu sesión por WhatsApp</BtnWa>
                <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-2xl tap-44`} style={{ color: C.marfil }}>
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer ── */}
        <footer style={{ backgroundColor: C.tintaBajo, borderTop: `1px solid ${C.lineD}` }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={`${display.className} text-lg leading-none`} style={{ color: C.marfil }}>
                Viktoria Asencio
              </p>
              <p className="text-xs mt-1.5" style={{ color: C.mutP }}>
                Kinesiología · piso pélvico y oncología de mama
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs" style={{ color: C.mutP }}>
              <span>{BIZ.clinic} · {BIZ.address}, {BIZ.city}</span>
              <a href={`tel:${BIZ.phoneTel}`} className="tap-44" style={{ color: C.marfil }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label="Agendar una sesión por WhatsApp" />
    </div>
  )
}
