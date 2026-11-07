import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_GIFT, HORARIO, IMG } from './content'

// Playfair Display para la voz editorial (su nombre en cursiva) y
// Nunito Sans para el texto corrido: clínica cálida, cercana.
const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// De su logo: crema seda de base, burdeo de las hojas como acento,
// eucalipto en los trazos, café espresso de tinta y rubor en bloques.
const C = {
  crema: '#FBF6F1',
  ruborSuave: '#F7E8E3',
  rubor: '#F2D6CF',
  eucaSuave: '#EDF3EF',
  burdeo: '#8E1B2E',
  burdeoDeep: '#67111F',
  euca: '#8FA89A',
  eucaInk: '#4F6B5D', // eucalipto oscuro: ~5:1 sobre crema
  cafe: '#3B2A26',
  cafeDeep: '#2C1F1C',
  suave: '#6E5A52', // texto secundario: ~6:1 sobre crema
  mutD: 'rgba(251,246,241,0.76)',
  lineL: 'rgba(59,42,38,0.16)',
  lineD: 'rgba(251,246,241,0.18)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'aillyne-arce-cosmetologa',
  title: 'Aillyne Arce · Cosmetóloga y terapeuta en Puerto Montt',
  description:
    'Limpieza facial profesional, radiofrecuencia, Pink Glow, HydraLips y drenaje linfático con evaluación personalizada en Valle Volcanes, Puerto Montt. 5,0 con 96 opiniones. Agenda por WhatsApp.',
  image: `${IMG}/retrato.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Tu sesión', href: '#sesion' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

const SERVICIOS = [
  {
    n: '02',
    t: 'Radiofrecuencia facial',
    d: 'Estimula el colágeno y favorece una piel más firme y luminosa, sin procedimientos invasivos.',
  },
  {
    n: '03',
    t: 'Pink Glow',
    d: 'Cóctel de activos (glutatión, ácido hialurónico, vitaminas, aminoácidos y péptidos) que ayuda a iluminar, hidratar y unificar el tono.',
  },
  {
    n: '04',
    t: 'HydraLips con color',
    d: 'Hidratación profunda para tus labios con un tono natural, sin volumen artificial.',
  },
  {
    n: '05',
    t: 'Estrías albas',
    d: 'Una sesión mensual: los resultados son progresivos y se construyen con constancia.',
  },
  {
    n: '06',
    t: 'Drenaje linfático manual',
    d: 'Para piernas cansadas: una técnica suave que favorece la sensación de ligereza.',
  },
  {
    n: '07',
    t: 'Skincare personalizado',
    d: 'Recomendaciones de productos y rutina pensadas para tu piel, para seguir en casa.',
  },
] as const

const PASOS = [
  {
    n: '01',
    t: 'Evaluación de tu piel',
    d: 'Todo parte mirando tu piel: qué necesita, qué le sobra y qué le conviene.',
  },
  {
    n: '02',
    t: 'Protocolo profesional',
    d: 'El tratamiento sigue un protocolo, paso a paso, nada improvisado.',
  },
  {
    n: '03',
    t: 'Productos según tu piel',
    d: 'Cada producto se elige para tu tipo de piel, no el mismo para todas.',
  },
  {
    n: '04',
    t: 'Recomendaciones para casa',
    d: 'Sales con una rutina sugerida para que el cuidado siga en tu casa.',
  },
] as const

const OPINIONES = [
  {
    texto:
      'Quedé muy feliz con mi limpieza facial. La atención fue excelente: muy amable, profesional y cuidadosa durante todo el procedimiento. Me explicó cada paso, resolvió todas mis dudas y me hizo sentir muy cómoda.',
    quien: 'Pamela S.',
  },
  {
    texto:
      'Una experiencia realmente maravillosa. Desde el primer momento me sentí súper cómoda y tranquila. Ella fue muy amable, respetuosa y cuidadosa en todo momento, además de escucharme y estar atenta a cada detalle.',
    quien: 'Sharon Y.',
  },
] as const

const CHIP_WORDS = ['facial', 'limpieza', 'confianza', 'cómoda', 'rosácea'] as const

/** La hoja doble de su logo: dos pétalos burdeo que brotan de un tallo. */
function Hojas({
  size = 26,
  color = C.burdeo,
  stem = C.eucaInk,
  leafClass = '',
  className = '',
}: {
  size?: number
  color?: string
  stem?: string
  leafClass?: string
  className?: string
}) {
  return (
    <svg
      viewBox="-30 -26 62 44"
      width={size}
      height={Math.round(size * 0.71)}
      className={`block shrink-0 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M-2 16 C-2 10 -1 4 1 -2"
        stroke={stem}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        className={leafClass ? `${leafClass} aa-hoja-l` : undefined}
        d="M0 -1 C-6 -13 -17 -19 -28 -16 C-25 -6 -13 1 0 -1 Z"
        fill={color}
      />
      <path
        className={leafClass ? `${leafClass} aa-hoja-r` : undefined}
        d="M2 -2 C7 -16 19 -23 30 -20 C28 -8 15 1 2 -2 Z"
        fill={color}
      />
    </svg>
  )
}

/** Rótulo de sección: la hoja doble más la etiqueta en versalitas. */
function Rotulo({
  children,
  dark = false,
}: {
  children: React.ReactNode
  dark?: boolean
}) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]">
      <Hojas
        size={22}
        color={dark ? C.rubor : C.burdeo}
        stem={dark ? C.euca : C.eucaInk}
      />
      <span style={{ color: dark ? C.rubor : C.eucaInk }}>{children}</span>
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
  tone: 'burdeo' | 'crema' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'burdeo'
      ? { backgroundColor: C.burdeo, color: C.crema }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.cafe }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.burdeo}`, color: C.burdeo }
          : { border: '1.5px solid rgba(251,246,241,0.55)', color: C.crema }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="aa-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Ramita de eucalipto: tallo con hojas redondas, motivo decorativo. */
function Euca({
  size = 60,
  color = C.euca,
  opacity = 1,
  className = '',
}: {
  size?: number
  color?: string
  opacity?: number
  className?: string
}) {
  const hojas: [number, number, number][] = [
    [18, 98, 10], [43, 88, 11], [16, 70, 9], [44, 60, 10], [19, 42, 8], [41, 32, 8],
  ]
  return (
    <svg
      viewBox="0 0 60 120"
      width={size}
      height={Math.round(size * 2)}
      className={`block ${className}`}
      fill="none"
      opacity={opacity}
      aria-hidden="true"
    >
      <path
        d="M30 118 C31 90 29 60 31 30 C32 18 31 8 30 2"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      {hojas.map(([cx, cy, r], i) => (
        <circle key={i} cx={cx} cy={cy} r={r} fill={color} opacity={i % 2 ? 0.85 : 0.7} />
      ))}
    </svg>
  )
}

export default function AillyneArcePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.cafe }}
    >
      <style>{`
        /* La gota de sérum: cae sobre el retrato, salpica y se abre en
           ondas que revelan la foto desde el punto donde cayó. */
        @keyframes aa-caer {
          0% { transform: translate(-50%,-240px) scale(.7); opacity: 0 }
          12% { opacity: 1 }
          100% { transform: translate(-50%,0) scale(1); opacity: 1 }
        }
        .aa-gota { animation: aa-caer .8s cubic-bezier(.55,.04,.85,.45) .3s both, aa-splash .32s ease-in 1.06s both }
        @keyframes aa-splash {
          to { transform: translate(-50%,6px) scale(1.7,.35); opacity: 0 }
        }
        .aa-onda { transform: translate(-50%,-50%) scale(.1); opacity: 0;
          animation: aa-onda 1.15s cubic-bezier(.25,.6,.3,1) 1.02s both }
        .aa-onda-b { animation-delay: 1.18s; animation-duration: 1.3s }
        @keyframes aa-onda {
          0% { transform: translate(-50%,-50%) scale(.1); opacity: .8 }
          100% { transform: translate(-50%,-50%) scale(1); opacity: 0 }
        }
        .aa-foto { clip-path: circle(0% at 50% 22%);
          animation: aa-revela 1.1s cubic-bezier(.3,.7,.25,1) .98s both }
        @keyframes aa-revela { to { clip-path: circle(125% at 50% 22%) } }

        /* La firma: las hojas brotan y el nombre entra letra por letra. */
        .aa-hoja-l, .aa-hoja-r { transform-box: fill-box; transform-origin: 100% 100% }
        .aa-hoja-l { transform-origin: 100% 100%; animation: aa-brota .85s cubic-bezier(.3,1.4,.4,1) 1.95s both }
        .aa-hoja-r { transform-origin: 0% 100%; animation: aa-brota .85s cubic-bezier(.3,1.4,.4,1) 2.1s both }
        @keyframes aa-brota {
          from { transform: scale(0) rotate(-18deg); opacity: 0 }
          40% { opacity: 1 }
          to { transform: scale(1) rotate(0); opacity: 1 }
        }
        .aa-letra { display: inline-block; animation: aa-letra .6s cubic-bezier(.2,.7,.3,1) both }
        @keyframes aa-letra {
          from { transform: translateY(.6em); opacity: 0 }
          to { transform: translateY(0); opacity: 1 }
        }

        /* Entradas suaves del hero */
        @keyframes aa-surge { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .aa-surge { animation: aa-surge .9s cubic-bezier(.2,.65,.25,1) both }
        @keyframes aa-linea { from { clip-path: inset(0 0 100% 0); transform: translateY(30%) } to { clip-path: inset(-15% 0 -15% 0); transform: none } }
        .aa-hline { clip-path: inset(-15% 0 -15% 0); animation: aa-linea 1s cubic-bezier(.25,.6,.25,1) both }

        /* En cada servicio, al entrar en pantalla: una onda pequeña y
           una hoja que brota, como la gota del hero en miniatura. */
        @supports (animation-timeline: view()) {
          .aa-v-onda { animation: aa-ondaV linear both; animation-timeline: view(); animation-range: entry 8% entry 62% }
          @keyframes aa-ondaV {
            0% { transform: translate(-50%,-50%) scale(.15); opacity: .7 }
            100% { transform: translate(-50%,-50%) scale(1); opacity: 0 }
          }
          .aa-v-hoja .aa-hoja-l { animation: aa-brotaV linear both; animation-timeline: view(); animation-range: entry 12% entry 55% }
          .aa-v-hoja .aa-hoja-r { animation: aa-brotaV linear both; animation-timeline: view(); animation-range: entry 20% entry 65% }
          @keyframes aa-brotaV {
            from { transform: scale(0) rotate(-18deg); opacity: 0 }
            40% { opacity: 1 }
            to { transform: scale(1) rotate(0); opacity: 1 }
          }
          .aa-v-linea { animation: aa-lineaV linear both; animation-timeline: view(); animation-range: entry 5% entry 55% }
          @keyframes aa-lineaV {
            from { transform: scaleX(0) }
            to { transform: scaleX(1) }
          }
        }

        .aa-btn { transition: transform .18s ease, filter .18s ease }
        .aa-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .aa-btn:active { transform: translateY(0) scale(.97) }
        .aa-btn:focus-visible { outline: 3px solid ${C.euca}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .aa-gota, .aa-onda, .aa-onda-b { display: none !important; animation: none !important }
          .aa-foto { animation: none !important; clip-path: none !important }
          .aa-hoja-l, .aa-hoja-r, .aa-letra, .aa-surge, .aa-hline { animation: none !important; transform: none !important; opacity: 1 !important; clip-path: none !important }
          .aa-v-onda { display: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="italic">Aillyne Arce</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(251,246,241,0.94)',
          ink: C.cafe,
          line: C.lineL,
          btnBg: C.burdeo,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: la gota de sérum ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div
          aria-hidden="true"
          className="absolute -right-10 top-24 hidden lg:block pointer-events-none"
          style={{ transform: 'rotate(14deg)' }}
        >
          <Euca size={150} opacity={0.28} />
        </div>
        <div
          aria-hidden="true"
          className="absolute -left-16 bottom-10 hidden lg:block pointer-events-none"
          style={{ transform: 'rotate(-160deg)' }}
        >
          <Euca size={110} opacity={0.18} />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(560px 420px at 82% 78%, rgba(242,214,207,0.5), transparent 68%), radial-gradient(460px 340px at 8% 10%, rgba(143,168,154,0.14), transparent 65%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.04fr_0.96fr] gap-12 lg:gap-10 items-center">
          {/* Texto */}
          <div className="max-w-xl">
            <div className="aa-surge flex items-center gap-4" style={{ animationDelay: '.1s' }}>
              {/* eslint-disable-next-line @next/next/no-img-element -- su logo real, fondo se funde con mix-blend */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Aillyne Arce Cosmetología"
                width={589}
                height={281}
                className="h-12 md:h-14 w-auto"
                style={{ mixBlendMode: 'multiply' }}
              />
            </div>
            <p
              className="aa-surge mt-5 text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: C.eucaInk, animationDelay: '.22s' }}
            >
              Cosmetología · Valle Volcanes, Puerto Montt
            </p>
            <h1
              className={`${display.className} mt-4 leading-[1.04] tracking-[-0.01em] text-[clamp(2.9rem,11.5vw,5.3rem)]`}
            >
              <span className="block overflow-hidden">
                <span className="aa-hline block" style={{ animationDelay: '.34s' }}>
                  Piel cuidada
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="aa-hline block" style={{ animationDelay: '.5s' }}>
                  con <em className="italic" style={{ color: C.burdeo }}>criterio.</em>
                </span>
              </span>
            </h1>
            <p
              className="aa-surge mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.suave, animationDelay: '.68s' }}
            >
              Limpiezas faciales profesionales, radiofrecuencia, Pink Glow y
              HydraLips con evaluación personalizada.{' '}
              <strong className="font-semibold" style={{ color: C.cafe }}>
                Atención dedicada a mujeres.
              </strong>
            </p>
            <div
              className="aa-surge mt-7 flex flex-col sm:flex-row gap-3 sm:items-center"
              style={{ animationDelay: '.84s' }}
            >
              <BtnWa tone="burdeo">Agenda por WhatsApp</BtnWa>
              <BtnWa tone="linea" href="#servicios">
                Ver servicios
              </BtnWa>
            </div>
            <div
              className="aa-surge mt-6 flex items-center gap-2.5"
              style={{ animationDelay: '.98s' }}
            >
              <Stars value={BIZ.ratingValue} color={C.burdeo} size={15} />
              <span className="text-sm font-semibold" style={{ color: C.cafe }}>
                {BIZ.rating} en Google
              </span>
              <span className="text-sm" style={{ color: C.suave }}>
                · {BIZ.reviews} opiniones
              </span>
            </div>
          </div>

          {/* El retrato: la gota cae, salpica y lo revela */}
          <figure className="relative mx-auto w-[80%] max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[36px]"
              style={{ border: `1.5px solid ${C.euca}`, opacity: 0.7, transform: 'rotate(1.6deg)' }}
            />
            <div className="relative">
              {/* Ondas concéntricas en el punto donde cae la gota */}
              <span
                aria-hidden="true"
                className="aa-onda absolute z-20 rounded-full pointer-events-none"
                style={{
                  left: '50%',
                  top: '22%',
                  width: '135%',
                  aspectRatio: '1',
                  border: `2px solid ${C.burdeo}`,
                }}
              />
              <span
                aria-hidden="true"
                className="aa-onda aa-onda-b absolute z-20 rounded-full pointer-events-none"
                style={{
                  left: '50%',
                  top: '22%',
                  width: '110%',
                  aspectRatio: '1',
                  border: `1.5px solid ${C.euca}`,
                }}
              />
              {/* La gota */}
              <svg
                aria-hidden="true"
                className="aa-gota absolute z-30 pointer-events-none"
                style={{ left: '50%', top: '22%', width: 26, height: 34, marginTop: -30, marginLeft: 0 }}
                viewBox="0 0 24 32"
                fill="none"
              >
                <path
                  d="M12 2 C12 2 4 12 4 18.5 A8 8 0 0 0 20 18.5 C20 12 12 2 12 2 Z"
                  fill={C.burdeo}
                />
                <ellipse cx="8.8" cy="19" rx="2.1" ry="3" fill={C.rubor} opacity=".8" transform="rotate(-18 8.8 19)" />
              </svg>
              {/* La foto que se revela (recorte por overflow: la marca
                  de agua inferior queda fuera del cuadro) */}
              <div
                className="aa-foto relative z-10 overflow-hidden rounded-[30px] aspect-[4/5]"
                style={{ boxShadow: '0 22px 50px rgba(59,42,38,0.20)' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- recorte manual para ocultar la firma impresa al pie */}
                <img
                  src={`${IMG}/retrato.webp`}
                  alt="Aillyne Arce, cosmetóloga y terapeuta, sonriendo"
                  width={792}
                  height={682}
                  fetchPriority="high"
                  className="absolute left-1/2 top-0 h-[115.5%] w-auto max-w-none -translate-x-1/2"
                />
              </div>
            </div>
            {/* La firma: hojas que brotan y su nombre letra por letra */}
            <figcaption className="relative z-10 mt-4 flex items-end gap-3 pl-1">
              <Hojas size={30} leafClass="aa-v-hoja" />
              <div>
                <p
                  className={`${display.className} italic leading-none text-[1.9rem] md:text-[2.15rem]`}
                  style={{ color: C.cafe }}
                  aria-label="Aillyne Arce"
                >
                  {'Aillyne Arce'.split('').map((ch, i) => (
                    <span
                      key={i}
                      aria-hidden="true"
                      className="aa-letra"
                      style={{ animationDelay: `${2050 + i * 42}ms` }}
                    >
                      {ch === ' ' ? '\u00A0' : ch}
                    </span>
                  ))}
                </p>
                <p
                  className="aa-surge mt-1.5 text-[10px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: C.eucaInk, animationDelay: '2.6s' }}
                >
                  {BIZ.credenciales} · {BIZ.registro}
                </p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · Sobre Aillyne ── */}
      <section id="sobre" className="scroll-mt-20" style={{ backgroundColor: C.ruborSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <figure className="relative mx-auto w-full max-w-[420px]">
              <div
                className="overflow-hidden rounded-[28px]"
                style={{ boxShadow: '0 18px 44px rgba(142,27,46,0.14)' }}
              >
                <Image
                  src={`${IMG}/retrato-cerca.webp`}
                  alt="Primer plano de Aillyne Arce"
                  width={640}
                  height={372}
                  sizes="(min-width: 1024px) 420px, 88vw"
                  loading="lazy"
                  className="block h-auto w-full"
                />
              </div>
              <div
                className="mt-4 flex flex-wrap gap-2"
              >
                {[BIZ.registro, 'Atención dedicada a mujeres', 'Servicios faciales no invasivos'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.12em]"
                      style={{
                        backgroundColor: C.crema,
                        color: C.burdeo,
                        border: `1px solid ${C.lineL}`,
                      }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Rotulo>Sobre Aillyne</Rotulo>
              <h2
                className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,6vw,3.8rem)]`}
              >
                Profesional de la salud,{' '}
                <em className="italic" style={{ color: C.burdeo }}>
                  especializada en tu piel.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
                Cosmetóloga, terapeuta y TENS con registro SIS. Se declara
                profesional de la salud especializada en servicios faciales no
                invasivos, y ahora atiende en{' '}
                <strong className="font-semibold" style={{ color: C.cafe }}>
                  Valle Volcanes, Puerto Montt
                </strong>
                : te envía la ubicación exacta al agendar.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <blockquote
                className="mt-8 border-l-2 pl-5 md:pl-6"
                style={{ borderColor: C.burdeo }}
              >
                <p className={`${display.className} italic text-xl md:text-2xl leading-snug`} style={{ color: C.cafe }}>
                  «Trabajo con protocolo profesional, evaluación personalizada y
                  productos adecuados a tu tipo de piel.»
                </p>
                <footer
                  className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: C.eucaInk }}
                >
                  Aillyne Arce · en sus propias palabras
                </footer>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Servicios</Rotulo>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 lg:gap-12 items-end">
              <h2
                className={`${display.className} leading-[1.05] text-[clamp(2.2rem,6vw,3.9rem)]`}
              >
                Cada tratamiento parte{' '}
                <em className="italic" style={{ color: C.burdeo }}>
                  con tu piel.
                </em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.suave }}>
                Servicios faciales no invasivos y cuidado corporal, siempre con
                evaluación previa y productos elegidos para ti.
              </p>
            </div>
          </Reveal>

          {/* Su servicio estrella */}
          <Reveal delay={80}>
            <article
              className="mt-12 md:mt-14 rounded-[30px] p-7 md:p-11 grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-8 lg:gap-12 items-center"
              style={{ backgroundColor: C.ruborSuave, border: `1px solid rgba(142,27,46,0.12)` }}
            >
              <p
                className={`${display.className} italic leading-none text-[4.4rem] md:text-[6rem] hidden lg:block`}
                style={{ color: 'rgba(142,27,46,0.85)' }}
                aria-hidden="true"
              >
                01
              </p>
              <div>
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.26em]"
                  style={{ color: C.burdeo }}
                >
                  El favorito · Limpieza facial profesional
                </p>
                <h3 className={`${display.className} mt-3 text-3xl md:text-4xl leading-[1.08]`}>
                  «No es solo relajación,{' '}
                  <em className="italic">es un tratamiento profundo.»</em>
                </h3>
                <p className="mt-4 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.suave }}>
                  Su servicio estrella: evaluación de la piel, protocolo
                  profesional y productos adecuados a tu tipo de piel.
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
                  {['Evaluación de la piel', 'Protocolo profesional', 'Productos según tu piel'].map(
                    (t) => (
                      <li key={t} className="flex items-center gap-2 text-sm font-semibold" style={{ color: C.cafe }}>
                        <svg viewBox="0 0 24 32" width="11" height="15" aria-hidden="true">
                          <path d="M12 2 C12 2 4 12 4 18.5 A8 8 0 0 0 20 18.5 C20 12 12 2 12 2 Z" fill={C.euca} />
                        </svg>
                        {t}
                      </li>
                    ),
                  )}
                </ul>
              </div>
              <div className="lg:justify-self-end">
                <BtnWa tone="burdeo">Agendar limpieza</BtnWa>
              </div>
            </article>
          </Reveal>

          {/* El resto, como menú editorial */}
          <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={(i % 2) * 90}>
                <article
                  className="relative border-t py-6 md:py-7 flex gap-4 md:gap-5 items-start"
                  style={{ borderColor: C.lineL }}
                >
                  <span className="relative mt-1 block h-10 w-10 shrink-0">
                    <span
                      aria-hidden="true"
                      className="aa-v-onda absolute left-1/2 top-1/2 h-16 w-16 rounded-full pointer-events-none"
                      style={{ border: `1.5px solid ${C.rubor}` }}
                    />
                    <span className="aa-v-hoja relative block">
                      <Hojas size={30} />
                    </span>
                  </span>
                  <div className="min-w-0">
                    <p className="flex items-baseline gap-3">
                      <span
                        className={`${display.className} italic text-lg`}
                        style={{ color: 'rgba(142,27,46,0.72)' }}
                      >
                        {s.n}
                      </span>
                      <span className="text-base md:text-lg font-bold" style={{ color: C.cafe }}>
                        {s.t}
                      </span>
                    </p>
                    <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed" style={{ color: C.suave }}>
                      {s.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · Cómo es tu sesión ── */}
      <section id="sesion" className="scroll-mt-20" style={{ backgroundColor: C.eucaSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <figure className="relative mx-auto w-[86%] max-w-[360px] lg:max-w-[420px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-3 -left-3 md:-bottom-4 md:-left-4 h-full w-full rounded-[30px]"
                style={{ border: `1.5px solid ${C.euca}` }}
              />
              <div
                className="relative overflow-hidden rounded-[30px]"
                style={{ boxShadow: '0 18px 44px rgba(59,42,38,0.18)' }}
              >
                <Image
                  src={`${IMG}/limpieza-facial.webp`}
                  alt="Aillyne realizando una limpieza facial profesional"
                  width={1439}
                  height={1344}
                  sizes="(min-width: 1024px) 420px, 86vw"
                  loading="lazy"
                  className="block h-auto w-full aspect-[4/5] object-cover"
                  style={{ objectPosition: '42% 18%' }}
                />
              </div>
              <figcaption
                className="mt-4 text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{ color: C.eucaInk }}
              >
                Aillyne en una limpieza facial
              </figcaption>
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <Rotulo>Tu sesión</Rotulo>
              <h2
                className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,6vw,3.8rem)]`}
              >
                Así es{' '}
                <em className="italic" style={{ color: C.burdeo }}>
                  tu sesión.
                </em>
              </h2>
            </Reveal>
            <ol className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
              {PASOS.map((p, i) => (
                <Reveal key={p.n} delay={i * 90}>
                  <li>
                    <span className="flex items-center gap-3">
                      <span
                        className={`${display.className} italic flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-lg`}
                        style={{
                          backgroundColor: C.crema,
                          color: C.burdeo,
                          border: `1.5px solid ${C.burdeo}`,
                        }}
                      >
                        {i + 1}
                      </span>
                      <span
                        aria-hidden="true"
                        className="aa-v-linea h-px flex-1 origin-left"
                        style={{ backgroundColor: 'rgba(79,107,93,0.4)' }}
                      />
                    </span>
                    <h3 className="mt-3.5 text-base md:text-lg font-bold" style={{ color: C.cafe }}>
                      {p.t}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.suave }}>
                      {p.d}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <div className="mt-9">
                <BtnWa tone="burdeo">Agenda tu evaluación</BtnWa>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Registro de tratamientos ── */}
      <section id="registro" className="scroll-mt-20" style={{ backgroundColor: C.cafeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo dark>Registro de tratamientos</Rotulo>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-5 lg:gap-12 items-end">
              <h2
                className={`${display.className} leading-[1.05] text-[clamp(2.2rem,6vw,3.9rem)]`}
                style={{ color: C.crema }}
              >
                Piel real,{' '}
                <em className="italic" style={{ color: C.rubor }}>
                  proceso real.
                </em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md lg:justify-self-end" style={{ color: C.mutD }}>
                Registros de tratamientos compartidos por Aillyne en su
                Instagram. Cada piel responde distinto: la evaluación define
                el plan.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 gap-4 md:gap-8">
            {[
              {
                src: 'piel-antes-despues',
                alt: 'Registro de piel antes y después de un tratamiento facial',
                cap: 'Piel · antes y después',
              },
              {
                src: 'frente-antes-despues',
                alt: 'Registro de frente antes y después de un tratamiento facial',
                cap: 'Frente · antes y después',
              },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 110}>
                <figure>
                  <div
                    className="overflow-hidden rounded-[18px] md:rounded-[26px]"
                    style={{ border: `1px solid ${C.lineD}` }}
                  >
                    <Image
                      src={`${IMG}/${f.src}.webp`}
                      alt={f.alt}
                      width={1440}
                      height={1440}
                      sizes="(min-width: 1024px) 460px, 44vw"
                      loading="lazy"
                      className="block h-auto w-full"
                    />
                  </div>
                  <figcaption
                    className="mt-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em]"
                    style={{ color: C.euca }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className="mt-8 flex items-center gap-2.5 text-sm" style={{ color: C.mutD }}>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke={C.rubor} strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill={C.rubor} stroke="none" />
              </svg>
              Publicados en su Instagram{' '}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 decoration-1 tap-44"
                style={{ color: C.rubor }}
              >
                {BIZ.instagramUser}
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Opiniones</Rotulo>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
            <Reveal>
              <div className="lg:sticky lg:top-28">
                <p className="flex items-end gap-4">
                  <span
                    className={`${display.className} leading-[0.85] text-[5.2rem] md:text-[6.5rem]`}
                    style={{ color: C.burdeo }}
                  >
                    {BIZ.rating}
                  </span>
                  <span className="pb-2">
                    <Stars value={BIZ.ratingValue} color={C.burdeo} size={17} />
                    <span className="mt-2 block text-sm font-semibold" style={{ color: C.cafe }}>
                      {BIZ.reviews} opiniones en Google
                    </span>
                  </span>
                </p>
                <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: C.suave }}>
                  Las palabras que más se repiten en sus reseñas:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {CHIP_WORDS.map((w) => (
                    <li
                      key={w}
                      className="rounded-full px-3.5 py-1.5 text-xs font-bold"
                      style={{
                        backgroundColor: C.ruborSuave,
                        color: C.burdeo,
                        border: `1px solid rgba(142,27,46,0.18)`,
                      }}
                    >
                      {w}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: C.suave }}>
                  También la recomiendan pieles sensibles y con rosácea.
                </p>
              </div>
            </Reveal>
            <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-rows-[auto_auto] lg:gap-0">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.quien} delay={i * 130}>
                  <blockquote
                    className={
                      i === 0
                        ? 'relative'
                        : 'relative lg:ml-16 lg:-mt-2 rounded-[26px] p-7 md:p-9'
                    }
                    style={i === 0 ? undefined : { backgroundColor: C.ruborSuave }}
                  >
                    <svg
                      viewBox="-30 -26 62 44"
                      width="34"
                      height="24"
                      aria-hidden="true"
                      className={i === 0 ? 'mb-5' : 'absolute -top-3 -left-2'}
                    >
                      <path d="M0 -1 C-6 -13 -17 -19 -28 -16 C-25 -6 -13 1 0 -1 Z" fill={C.burdeo} opacity={i === 0 ? 1 : 0.9} />
                      <path d="M2 -2 C7 -16 19 -23 30 -20 C28 -8 15 1 2 -2 Z" fill={C.burdeo} opacity={i === 0 ? 0.85 : 0.75} />
                    </svg>
                    <p
                      className={`${display.className} ${
                        i === 0
                          ? 'leading-[1.16] text-[clamp(1.7rem,4.6vw,2.7rem)]'
                          : 'italic text-lg md:text-xl leading-snug'
                      }`}
                      style={{ color: C.cafe }}
                    >
                      «{o.texto}»
                    </p>
                    <footer className="mt-5 flex items-center gap-4">
                      <Stars value={5} color={C.burdeo} size={13} />
                      <span className="text-sm font-bold" style={{ color: C.cafe }}>
                        {o.quien}
                      </span>
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.2em]"
                        style={{ color: C.eucaInk }}
                      >
                        opinión en Google
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Gift Card ── */}
      <section id="regalo" className="scroll-mt-20" style={{ backgroundColor: C.rubor }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Hojas size={40} leafClass="aa-v-hoja" />
            </div>
            <p
              className="mt-5 text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: C.burdeo }}
            >
              Para regalar
            </p>
            <h2
              className={`${display.className} mt-3 leading-[1.05] text-[clamp(2.2rem,6.5vw,4rem)]`}
              style={{ color: C.cafe }}
            >
              Una <em className="italic">Gift Card</em> de limpieza facial.
            </h2>
            <p className="mt-4 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.cafe }}>
              Regala una sesión de cuidado de la piel: se coordina directo con
              Aillyne por WhatsApp.
            </p>
            <div className="mt-7">
              <BtnWa tone="burdeo" href={WA_GIFT}>
                Pedir una Gift Card
              </BtnWa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Agenda ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
          <div>
            <Reveal>
              <Rotulo>Agenda</Rotulo>
              <h2
                className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.2rem,6vw,3.9rem)]`}
              >
                Agenda <em className="italic" style={{ color: C.burdeo }}>tu hora.</em>
              </h2>
            </Reveal>
            <Reveal delay={90}>
              <ul className="mt-8 max-w-md">
                {HORARIO.map((h) => (
                  <li
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 border-t py-4 text-sm md:text-base"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className="font-bold" style={{ color: C.cafe }}>
                      {h.d}
                    </span>
                    <span style={{ color: h.cerrado ? C.burdeo : C.suave }}>
                      {h.h}
                    </span>
                  </li>
                ))}
                <li className="border-t" style={{ borderColor: C.lineL }} aria-hidden="true" />
              </ul>
            </Reveal>
            <Reveal delay={150}>
              <address className="not-italic mt-7 text-base leading-relaxed" style={{ color: C.suave }}>
                {BIZ.zona}, {BIZ.city}
                <br />
                Te envío la ubicación exacta al agendar.
                <br />
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.cafe, textDecorationColor: 'rgba(142,27,46,0.5)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div
              className="rounded-[30px] p-7 md:p-10"
              style={{ backgroundColor: C.burdeo, boxShadow: '0 22px 50px rgba(103,17,31,0.3)' }}
            >
              <Hojas size={30} color={C.rubor} stem={C.rubor} />
              <h3
                className={`${display.className} mt-5 text-3xl md:text-4xl leading-[1.08]`}
                style={{ color: C.crema }}
              >
                Escríbeme y coordinamos{' '}
                <em className="italic" style={{ color: C.rubor }}>
                  tu hora.
                </em>
              </h3>
              <p className="mt-4 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,246,241,0.82)' }}>
                Agenda por WhatsApp: cuéntame qué necesita tu piel y te envío la
                ubicación en Valle Volcanes. Atención dedicada a mujeres.
              </p>
              <div className="mt-7 flex flex-col gap-4">
                <BtnWa tone="crema">Agenda por WhatsApp</BtnWa>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${display.className} text-2xl md:text-3xl tap-44 underline underline-offset-8 decoration-2`}
                  style={{ color: C.crema, textDecorationColor: 'rgba(242,214,207,0.6)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Footer ── */}
      <footer style={{ backgroundColor: C.cafeDeep, color: C.crema }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-6">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className={`${display.className} text-xl md:text-2xl`}>
                  Aillyne Arce
                  <span className="italic text-base md:text-lg" style={{ color: C.rubor }}>
                    {' '}· Cosmetóloga
                  </span>
                </p>
                <p className="text-sm mt-1.5" style={{ color: C.mutD }}>
                  {BIZ.zona}, {BIZ.city} · {BIZ.phoneDisplay}
                </p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element -- su logo real */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Aillyne Arce Cosmetología"
                width={589}
                height={281}
                loading="lazy"
                className="h-12 w-auto shrink-0 rounded-lg"
                style={{ backgroundColor: '#fff' }}
              />
            </div>
            <nav
              className="mt-5 flex flex-wrap gap-x-5 gap-y-1.5 text-sm"
              aria-label="Pie"
            >
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(251,246,241,0.85)' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center font-bold"
                style={{ color: C.rubor }}
              >
                Instagram {BIZ.instagramUser}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center font-bold"
                style={{ color: C.rubor }}
              >
                WhatsApp
              </a>
            </nav>
            <p className="mt-5 text-xs" style={{ color: 'rgba(251,246,241,0.55)' }}>
              Cosmetóloga, terapeuta y TENS · Registro SIS · Atención dedicada a
              mujeres
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Agendar por WhatsApp con Aillyne Arce" />
    </div>
  )
}
