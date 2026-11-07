import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Petalo } from './petalo'
import { BIZ, WA_LINK, waServicio, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Cormorant Garamond en versalitas, como su logo, para los titulares;
// Jost para el texto corrido.
const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// La paleta sale de su logo: fucsia Bellyssima, dorado del loto, rosa
// empolvado de sus globos y ciruela para el texto.
const C = {
  fucsia: '#C7477A',
  fucsiaDeep: '#A83563',
  dorado: '#B49C6B',
  doradoSuave: '#D8C8A4',
  doradoInk: '#756237',
  rosa: '#F6E1E8',
  rosaClaro: '#FCF4F7',
  blanco: '#FFFFFF',
  ciruela: '#4A2235',
  ciruelaDeep: '#381728',
  mutL: '#6B4257',
  mutD: 'rgba(246,225,232,0.72)',
  lineL: 'rgba(74,34,53,0.16)',
  lineD: 'rgba(246,225,232,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'depilacion-bellyssima',
  title: 'Bellyssima · Depilación y estética en Puerto Montt',
  description:
    'Depilación con cera, manicure y pedicure permanente, pestañas, cejas y limpieza facial en Sargento Silva 543, Puerto Montt, y a domicilio. 4,9 en Google. Agenda por WhatsApp.',
  image: `${IMG}/salon-logo.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'A domicilio', href: '#domicilio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

const SERVICIOS = [
  {
    name: 'Depilación con cera',
    tag: 'La especialidad',
    desc: 'Su servicio principal: depilación con cera con productos profesionales, en el local de Sargento Silva o en tu casa.',
    icon: 'cera',
    dest: true,
  },
  {
    name: 'Manicure y pedicure permanente',
    tag: 'Manos y pies',
    desc: 'Esmaltado permanente para manos y pies, con la misma prolijidad de siempre.',
    icon: 'unas',
    dest: false,
  },
  {
    name: 'Lifting de pestañas y cejas',
    tag: 'La mirada',
    desc: 'Lifting de pestañas y perfilado de cejas, para una mirada más abierta y definida.',
    icon: 'ojo',
    dest: false,
  },
  {
    name: 'Limpieza facial',
    tag: 'La piel',
    desc: 'Limpieza facial profunda y también básica, según lo que tu piel necesita.',
    icon: 'rostro',
    dest: false,
  },
  {
    name: 'Paquetes combinados',
    tag: 'Para darte el gusto',
    desc: 'Servicios que se combinan entre sí: consulta por los paquetes que tienen armados.',
    icon: 'regalo',
    dest: false,
  },
] as const

const PASOS_DOMICILIO = [
  { n: '01', name: 'Escribes por WhatsApp', desc: 'Cuentas qué servicio buscas y en qué sector estás.' },
  { n: '02', name: 'Coordinan la visita', desc: 'Acuerdan día, hora y lugar que te acomode.' },
  { n: '03', name: 'Te atienden en tu casa', desc: 'Llegan con sus productos profesionales, como en el local.' },
] as const

function IconoServicio({ name, className = '' }: { name: string; className?: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...p}>
      {name === 'cera' && (
        <>
          <path d="M12 3.2 C12 3.2 5.8 10.4 5.8 14.8 a6.2 6.2 0 0 0 12.4 0 C18.2 10.4 12 3.2 12 3.2 Z" />
          <path d="M9.4 14.2 a2.8 2.8 0 0 0 2.6 2.9" />
          <path d="M6 21.5 h12" />
        </>
      )}
      {name === 'unas' && (
        <>
          <path d="M10 2.8 h4 v3.4 h-4 Z" />
          <path d="M12 6.2 v2.6" />
          <path d="M8 9.4 C6.6 9.4 6 10.6 6 11.8 v5 a4.2 4.2 0 0 0 4.2 4.2 h3.6 a4.2 4.2 0 0 0 4.2-4.2 v-5 c0-1.2-.6-2.4-2-2.4 Z" />
          <path d="M12 15.4 c0 0-1.6-1.9-1.6-3 a1.6 1.6 0 0 1 3.2 0 c0 1.1-1.6 3-1.6 3 Z" />
        </>
      )}
      {name === 'ojo' && (
        <>
          <path d="M3.6 4.6 C7 3 17 3 20.4 4.6" />
          <path d="M2.5 13.4 C5.8 9.8 8.8 8.4 12 8.4 c3.2 0 6.2 1.4 9.5 5 -3.3 3.6-6.3 5-9.5 5 -3.2 0-6.2-1.4-9.5-5 Z" />
          <circle cx="12" cy="13.4" r="2.4" />
          <path d="M7.6 9.2 l-1.2-1.2 M12 8.2 V6.4 M16.4 9.2 l1.2-1.2" />
        </>
      )}
      {name === 'rostro' && (
        <>
          <path d="M12 3.4 a7.6 7.6 0 0 0-7.6 7.6 c0 2.6 1.3 4.9 3.2 6.4 .7.6 1.1 1.4 1.1 2.3 v.9 h6.6 v-.9 c0-.9.4-1.7 1.1-2.3 a7.6 7.6 0 0 0-4.4-14 Z" />
          <path d="M9.4 13.4 a2.7 2.7 0 0 0 5.2 0" />
          <path d="M8.8 10.2 h.01 M15.2 10.2 h.01" strokeWidth={2.4} />
        </>
      )}
      {name === 'regalo' && (
        <>
          <path d="M4.4 8.6 h15.2 v3 H4.4 Z" />
          <path d="M5.8 11.6 h12.4 V20 a1.4 1.4 0 0 1-1.4 1.4 H7.2 a1.4 1.4 0 0 1-1.4-1.4 Z" />
          <path d="M12 8.6 V21" />
          <path d="M12 8.6 C10.4 8.6 8.4 8 8.4 6.2 a1.9 1.9 0 0 1 3.6-.8 c.5 1.1 0 3.2 0 3.2 Z" />
          <path d="M12 8.6 c1.6 0 3.6-.6 3.6-2.4 a1.9 1.9 0 0 0-3.6-.8 c-.5 1.1 0 3.2 0 3.2 Z" />
        </>
      )}
    </svg>
  )
}

/** El loto de su logo rehecho en SVG: tres pétalos dorados sobre dos
    ondas fucsia. En el hero se abre pétalo a pétalo. */
function LotoHero() {
  const petalo = 'M150 148 C131 106 133 64 150 16 C167 64 169 106 150 148 Z'
  const petalos = [
    { rot: -26, d: '0.12s' },
    { rot: 26, d: '0.34s' },
    { rot: 0, d: '0.56s' },
  ]
  return (
    <svg viewBox="0 0 300 170" className="w-[196px] md:w-[248px] h-auto" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="bl-oro" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={C.doradoSuave} />
          <stop offset="100%" stopColor={C.dorado} />
        </linearGradient>
      </defs>
      {petalos.map((p) => (
        <g key={p.rot} transform={`rotate(${p.rot} 150 148)`}>
          <path
            className="bl-petalo"
            style={{ '--d': p.d } as CSSProperties}
            d={petalo}
            fill="url(#bl-oro)"
            stroke={C.doradoInk}
            strokeWidth="1.4"
          />
        </g>
      ))}
      <path
        className="bl-ola"
        style={{ '--d': '0.82s' } as CSSProperties}
        d="M26 132 C82 121 130 100 172 68"
        stroke={C.fucsia}
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={1}
      />
      <path
        className="bl-ola"
        style={{ '--d': '0.98s' } as CSSProperties}
        d="M26 116 C76 107 120 87 158 57"
        stroke={C.fucsia}
        strokeWidth="3.6"
        strokeLinecap="round"
        pathLength={1}
      />
    </svg>
  )
}

/** Versión quieta y chica del loto, para separadores y el cierre. */
function LotoMini({ className = 'w-6 h-6', ondas = false, color }: { className?: string; ondas?: boolean; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={color ? { color } : undefined} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20 C8.6 15.4 8.8 10.4 12 5.4 C15.2 10.4 15.4 15.4 12 20 Z" />
      <path d="M12 20 C7.6 17.6 5.4 13.8 5.8 8.8" />
      <path d="M12 20 C16.4 17.6 18.6 13.8 18.2 8.8" />
      {ondas && <path d="M3.5 21.2 C7.5 20.2 11 18.6 14.5 16" />}
    </svg>
  )
}

/** Separador de secciones: dos filetes que nacen en un pétalo. */
function DivisorLoto({ color = C.doradoInk }: { color?: string }) {
  return (
    <div className="flex items-center justify-center gap-3" style={{ color }} aria-hidden="true">
      <span className="h-px w-16 md:w-24" style={{ backgroundColor: 'currentColor', opacity: 0.55 }} />
      <LotoMini className="w-5 h-5" />
      <span className="h-px w-16 md:w-24" style={{ backgroundColor: 'currentColor', opacity: 0.55 }} />
    </div>
  )
}

function Rotulo({
  children,
  light = false,
  center = false,
}: {
  children: React.ReactNode
  light?: boolean
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5 ${center ? 'justify-center' : ''}`}
      style={{ color: light ? C.doradoSuave : C.doradoInk }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
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
  tone: 'fucsia' | 'linea' | 'dorado' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'fucsia'
      ? { backgroundColor: C.fucsia, color: '#fff' }
      : tone === 'dorado'
        ? { backgroundColor: C.dorado, color: C.ciruelaDeep }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.fucsia}`, color: C.fucsiaDeep }
          : { border: '1.5px solid rgba(246,225,232,0.5)', color: C.rosa }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="bl-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function DepilacionBellyssimaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.rosaClaro, color: C.ciruela }}
    >
      <style>{`
        /* Entrada suave de textos del hero. */
        @keyframes bl-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .bl-sube { animation: bl-sube .85s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--d, 0s) }

        /* El loto se abre pétalo a pétalo: cada uno destranca desde la base. */
        @keyframes bl-petalo {
          0% { transform: rotate(17deg) scale(.45); opacity: 0 }
          55% { opacity: 1 }
          100% { transform: rotate(0deg) scale(1); opacity: 1 }
        }
        .bl-petalo { transform-box: view-box; transform-origin: 150px 148px; animation: bl-petalo .8s cubic-bezier(.3,.9,.35,1.15) both; animation-delay: var(--d, 0s) }

        /* Las dos ondas fucsia se dibujan bajo los pétalos. */
        @keyframes bl-ola { 0% { stroke-dashoffset: 1; opacity: 0 } 30% { opacity: 1 } 100% { stroke-dashoffset: 0; opacity: 1 } }
        .bl-ola { stroke-dasharray: 1; animation: bl-ola .75s ease-out both; animation-delay: var(--d, 0s) }

        /* El nombre aparece en el centro del loto. */
        @keyframes bl-nombre { from { opacity: 0; transform: translateY(9px) } to { opacity: 1; transform: none } }
        .bl-nombre { animation: bl-nombre .8s cubic-bezier(.22,.68,.26,1) 1.05s both }

        /* La foto se revela con un recorte redondeado que se agranda. */
        @keyframes bl-foto { from { clip-path: inset(28% 30% 28% 30% round 140px); opacity: 0 } to { clip-path: inset(0 0 0 0 round 28px); opacity: 1 } }
        .bl-foto { animation: bl-foto 1.05s cubic-bezier(.4,.1,.2,1) 1.3s both }

        /* Un brillo recorre el loto una sola vez. */
        @keyframes bl-brillo {
          0% { transform: translateX(-170%) skewX(-14deg); opacity: 0 }
          22% { opacity: .8 }
          100% { transform: translateX(170%) skewX(-14deg); opacity: 0 }
        }
        .bl-brillo { animation: bl-brillo 1.4s ease-in-out 1.65s 1 both }

        .bl-btn { transition: transform .18s ease, filter .18s ease }
        .bl-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .bl-btn:active { transform: scale(.97) }
        .bl-page a:focus-visible { outline: 3px solid ${C.fucsia}; outline-offset: 3px }
        .bl-page a:focus:not(:focus-visible) { outline: none }
        .bl-serv { transition: transform .25s ease, box-shadow .25s ease }
        .bl-serv:hover { transform: translateY(-3px); box-shadow: 0 14px 30px -18px rgba(74,34,53,.4) }

        @media (prefers-reduced-motion: reduce) {
          .bl-sube, .bl-petalo, .bl-ola, .bl-nombre, .bl-foto, .bl-brillo { animation: none !important }
          .bl-brillo { display: none !important }
          .bl-serv:hover { transform: none }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.14em]">BELLYSSIMA</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(252,244,247,0.94)',
          ink: C.ciruela,
          line: C.lineL,
          btnBg: C.fucsia,
          btnInk: '#fff',
        }}
      />

      <div className="bl-page">
        {/* ── 1 · Hero: el loto se abre y el nombre aparece ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.rosa }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(640px 400px at 50% -8%, rgba(255,255,255,0.75), transparent 62%), radial-gradient(520px 380px at 92% 34%, rgba(199,71,122,0.10), transparent 60%), radial-gradient(460px 380px at 4% 70%, rgba(180,156,107,0.14), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[78px] md:pt-[104px] pb-9 md:pb-14">
            <p
              className="bl-sube text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.32em] mb-4 md:mb-5"
              style={{ color: C.doradoInk, '--d': '0.05s' } as CSSProperties}
            >
              Puerto Montt · En local y a domicilio
            </p>

            {/* El loto florece y el nombre aparece en su centro */}
            <div className="relative mx-auto w-fit">
              <div className="relative">
                <LotoHero />
                <div
                  className="bl-brillo absolute top-0 bottom-0 left-0 w-[34%] pointer-events-none"
                  style={{
                    opacity: 0,
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(255,252,244,0.55) 38%, rgba(255,255,255,0.85) 50%, rgba(255,252,244,0.55) 62%, transparent 100%)',
                  }}
                  aria-hidden="true"
                />
              </div>
              <div className="bl-nombre -mt-2 text-center">
                <p
                  className={`${display.className} leading-none tracking-[0.1em] text-[1.7rem] md:text-[2.5rem] font-semibold`}
                  style={{ color: C.fucsia }}
                >
                  BELLYSSIMA
                </p>
                <p className="mt-1.5 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.42em]" style={{ color: C.mutL }}>
                  Depilación y Estética
                </p>
              </div>
            </div>

            <h1
              className="bl-sube mt-6 md:mt-8 text-center"
              style={{ '--d': '1.15s' } as CSSProperties}
            >
              <span
                className={`${display.className} block leading-[1.05] text-[clamp(2.3rem,8.6vw,4.4rem)] font-semibold`}
                style={{ color: C.ciruela }}
              >
                Piel suave,
              </span>
              <span
                className={`${display.className} block italic leading-[1.05] text-[clamp(2.3rem,8.6vw,4.4rem)] font-medium`}
                style={{ color: C.fucsia }}
              >
                trato cercano.
              </span>
            </h1>
            <p
              className="bl-sube mt-4 md:mt-5 mx-auto max-w-md text-center text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutL, '--d': '1.3s' } as CSSProperties}
            >
              Depilación con cera, manicure y pedicure permanente, pestañas,
              cejas y limpieza facial con productos profesionales.
            </p>
            <div
              className="bl-sube mt-5 md:mt-6 flex flex-wrap items-center justify-center gap-3"
              style={{ '--d': '1.45s' } as CSSProperties}
            >
              <BtnWa tone="fucsia">
                <WaIcon />
                Agenda por WhatsApp
              </BtnWa>
              <BtnWa href="#servicios" tone="linea">
                Ver servicios
              </BtnWa>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bl-sube mt-4 md:mt-5 flex items-center justify-center gap-2.5 tap-44"
              style={{ '--d': '1.55s' } as CSSProperties}
            >
              <Stars value={BIZ.ratingValue} color={C.dorado} size={16} />
              <span className="text-sm font-bold" style={{ color: C.ciruela }}>
                {BIZ.rating}
              </span>
              <span className="text-sm" style={{ color: C.mutL }}>
                · {BIZ.reviews} opiniones en Google
              </span>
            </a>

            {/* La foto se revela con un recorte redondeado */}
            <figure
              className="bl-foto relative mx-auto mt-7 md:mt-10 w-full max-w-[340px] sm:max-w-[460px] md:max-w-3xl"
            >
              <div
                className="rounded-[34px] p-[6px]"
                style={{ border: `1.5px solid ${C.dorado}` }}
              >
                <div className="relative aspect-[4/3] md:aspect-[16/7] rounded-[26px] overflow-hidden" style={{ backgroundColor: C.blanco }}>
                  <Image
                    src={`${IMG}/salon-logo.webp`}
                    alt="Panel del local de Bellyssima con su logo de loto, globos rosados y la dueña sosteniendo flores"
                    fill
                    priority
                    sizes="(min-width: 768px) 768px, 92vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 42%' }}
                  />
                </div>
              </div>
              <figcaption className="sr-only">
                El panel del local con el logo de Bellyssima, sus globos rosados
                y la dueña con un ramo de flores.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* ── 2 · Servicios: tarjetas que se despliegan como pétalos ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo>Servicios</Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
                <h2
                  className={`${display.className} font-semibold text-[clamp(1.9rem,6.4vw,3.4rem)] leading-[1.06] max-w-xl`}
                  style={{ color: C.ciruela }}
                >
                  Todo lo que necesitas,
                  <br />
                  <em className="font-medium" style={{ color: C.fucsia }}>
                    en un mismo lugar.
                  </em>
                </h2>
                <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.mutL }}>
                  Los servicios que Bellyssima publica en sus redes. Cada uno
                  se agenda por WhatsApp, en el local o a domicilio.
                </p>
              </div>
            </Reveal>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {SERVICIOS.map((s, i) => (
                <Petalo
                  key={s.name}
                  delay={i * 110}
                  className={s.dest ? 'sm:col-span-2' : ''}
                >
                  <li
                    className="bl-serv h-full rounded-3xl p-5 md:p-6 flex flex-col"
                    style={{
                      backgroundColor: s.dest ? C.rosa : C.rosaClaro,
                      border: `1.5px solid ${s.dest ? 'rgba(199,71,122,0.4)' : C.lineL}`,
                    }}
                  >
                    <span
                      className="mb-4 flex h-12 w-12 items-center justify-center"
                      style={{
                        color: C.doradoInk,
                        backgroundColor: 'rgba(180,156,107,0.14)',
                        borderRadius: '62% 62% 62% 10%',
                        transform: 'rotate(-45deg)',
                      }}
                      aria-hidden="true"
                    >
                      <span style={{ transform: 'rotate(45deg)', display: 'flex' }}>
                        <IconoServicio name={s.icon} className="w-6 h-6" />
                      </span>
                    </span>
                    <h3
                      className={`${display.className} font-semibold text-2xl leading-[1.1] mb-1.5`}
                      style={{ color: C.ciruela }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.26em] mb-2.5"
                      style={{ color: C.fucsiaDeep }}
                    >
                      {s.tag}
                    </p>
                    <p className="text-[13px] md:text-sm leading-relaxed flex-1" style={{ color: C.mutL }}>
                      {s.desc}
                    </p>
                    {s.dest && (
                      <a
                        href={waServicio('depilación con cera')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 self-start text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                        style={{ color: C.fucsiaDeep, textDecorationColor: C.dorado }}
                      >
                        Consultar por WhatsApp
                        <WaIcon className="w-[15px] h-[15px]" />
                      </a>
                    )}
                  </li>
                </Petalo>
              ))}
            </ul>
          </div>
        </section>

        <div className="py-7 md:py-9" style={{ backgroundColor: C.blanco }}>
          <DivisorLoto />
        </div>

        {/* ── 3 · A domicilio: el diferencial ── */}
        <section id="domicilio" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.ciruela }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(620px 420px at 88% -10%, rgba(199,71,122,0.28), transparent 62%), radial-gradient(520px 420px at -6% 110%, rgba(180,156,107,0.18), transparent 60%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo light>El diferencial</Rotulo>
                  <h2
                    className={`${display.className} font-semibold text-[clamp(1.9rem,6.4vw,3.3rem)] leading-[1.08] mb-5`}
                    style={{ color: C.rosaClaro }}
                  >
                    El estudio va
                    <br />
                    <em className="font-medium" style={{ color: C.doradoSuave }}>
                      a tu casa.
                    </em>
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-4" style={{ color: 'rgba(246,225,232,0.82)' }}>
                    La depilación con cera también la llevan a tu domicilio en
                    Puerto Montt, con los mismos productos profesionales del
                    local. «Te entrega el mejor servicio con productos
                    totalmente profesionales», dice su propia página.
                  </p>
                  <p className="text-sm leading-relaxed max-w-md mb-8" style={{ color: C.mutD }}>
                    Su Facebook se llama «Depilación a domicilio Puerto Montt»:
                    atender donde estás es parte de su identidad, no un extra.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <BtnWa tone="dorado">
                    <WaIcon />
                    Coordinar una visita a domicilio
                  </BtnWa>
                </Reveal>
              </div>

              <ol className="space-y-5 lg:pt-14">
                {PASOS_DOMICILIO.map((p, i) => (
                  <Reveal key={p.n} delay={i * 110}>
                    <li className="flex items-start gap-4 border-b pb-5" style={{ borderColor: C.lineD, color: C.rosaClaro }}>
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center text-[11px] font-bold tracking-widest"
                        style={{
                          color: C.ciruelaDeep,
                          backgroundColor: C.dorado,
                          borderRadius: '62% 62% 62% 10%',
                          transform: 'rotate(-45deg)',
                        }}
                        aria-hidden="true"
                      >
                        <span style={{ transform: 'rotate(45deg)' }}>{p.n}</span>
                      </span>
                      <span>
                        <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-1`} style={{ color: C.rosaClaro }}>
                          {p.name}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: C.mutD }}>
                          {p.desc}
                        </p>
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ── 4 · Rostro: limpieza facial, pestañas y cejas ── */}
        <section className="scroll-mt-20" style={{ backgroundColor: C.rosaClaro }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal>
                <figure className="relative mx-auto w-full max-w-[300px] md:max-w-[340px]">
                  <div
                    className="rounded-[32px] p-[6px]"
                    style={{ border: `1.5px solid ${C.dorado}` }}
                  >
                    <div className="relative aspect-[423/576] rounded-[24px] overflow-hidden" style={{ backgroundColor: C.rosa }}>
                      <Image
                        src={`${IMG}/mascara-led.webp`}
                        alt="Clienta relajada en la camilla de Bellyssima durante su atención"
                        fill
                        sizes="(min-width: 768px) 340px, 78vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <LotoMini
                    className="absolute -bottom-3 -right-3 w-9 h-9"
                    color={C.dorado}
                  />
                </figure>
              </Reveal>
              <div>
                <Reveal>
                  <Rotulo>Rostro y mirada</Rotulo>
                  <h2
                    className={`${display.className} font-semibold text-[clamp(1.9rem,6.4vw,3.1rem)] leading-[1.08] mb-5`}
                    style={{ color: C.ciruela }}
                  >
                    Piel descansada,
                    <br />
                    <em className="font-medium" style={{ color: C.fucsia }}>
                      mirada despierta.
                    </em>
                  </h2>
                  <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: C.mutL }}>
                    Limpieza facial profunda o básica según lo que tu piel
                    pida, más el detalle fino de pestañas y cejas en la misma
                    visita si quieres.
                  </p>
                </Reveal>
                <ul className="space-y-3 mb-8">
                  {['Limpieza facial profunda', 'Limpieza facial básica', 'Lifting de pestañas', 'Perfilado de cejas'].map((t, i) => (
                    <Reveal key={t} delay={i * 80}>
                      <li className="flex items-center gap-3 text-sm md:text-[15px]" style={{ color: C.ciruela }}>
                        <LotoMini className="w-4 h-4 shrink-0" color={C.doradoInk} />
                        {t}
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <Reveal delay={200}>
                  <BtnWa href={waServicio('limpieza facial')} tone="linea">
                    Consultar por WhatsApp
                    <WaIcon className="w-[15px] h-[15px]" />
                  </BtnWa>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Opiniones: 4,9 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.rosa }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo>Opiniones</Rotulo>
                <p className={`${display.className} leading-none font-semibold text-[clamp(4rem,15vw,6.5rem)]`} style={{ color: C.fucsia }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.dorado} size={20} />
                </div>
                <p className="mt-3 text-sm" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.ciruela, textDecorationColor: C.dorado }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-8 md:space-y-9">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 110}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: C.dorado }}>
                      <blockquote
                        className={`${body.className} italic text-[15px] md:text-lg leading-relaxed`}
                        style={{ color: C.ciruela }}
                      >
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.fucsiaDeep }}>
                        <LotoMini className="w-4 h-4" />
                        {r.author} · Reseña de Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Visítanos: Sargento Silva 543 ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-stretch">
              <div className="flex flex-col">
                <Reveal>
                  <Rotulo>Visítanos</Rotulo>
                  <h2
                    className={`${display.className} font-semibold text-[clamp(1.9rem,6.4vw,3.1rem)] leading-[1.08] mb-6`}
                    style={{ color: C.ciruela }}
                  >
                    {BIZ.address},
                    <br />
                    {BIZ.city}.
                  </h2>
                </Reveal>
                <Reveal delay={90}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-7 text-sm md:text-[15px]">
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.fucsiaDeep }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.ciruela }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.fucsiaDeep }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={`https://wa.me/${BIZ.phoneTel.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.ciruela, textDecorationColor: C.dorado }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.fucsiaDeep }}>
                        Instagram
                      </dt>
                      <dd>
                        <a
                          href={BIZ.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.ciruela, textDecorationColor: C.dorado }}
                        >
                          {BIZ.igHandle}
                        </a>
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.fucsiaDeep }}>
                        A domicilio
                      </dt>
                      <dd style={{ color: C.ciruela }}>También atienden en tu casa</dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={160}>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <BtnWa tone="fucsia">
                      <WaIcon />
                      Agenda tu hora
                    </BtnWa>
                    <BtnWa href={MAPS_URL} tone="linea">
                      Cómo llegar →
                    </BtnWa>
                  </div>
                </Reveal>
                <Reveal delay={220} className="flex-1">
                  <div
                    className="overflow-hidden rounded-3xl h-full min-h-[290px]"
                    style={{ border: `1.5px solid ${C.dorado}`, backgroundColor: C.rosa }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.full}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-full min-h-[290px] border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
              <Reveal className="hidden lg:block">
                <div
                  className="h-full rounded-[32px] p-7 md:p-9 flex flex-col justify-between"
                  style={{ backgroundColor: C.rosa }}
                >
                  <div>
                    <LotoMini className="w-8 h-8 mb-6" ondas />
                    <p
                      className={`${display.className} font-medium italic leading-[1.25] text-[clamp(1.4rem,2.4vw,1.9rem)]`}
                      style={{ color: C.ciruela }}
                    >
                      “Llegué muy nerviosa y me fui feliz con los resultados.”
                    </p>
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.26em]" style={{ color: C.fucsiaDeep }}>
                      Lo que repiten sus clientas
                    </p>
                  </div>
                  <div className="mt-10 space-y-3">
                    {['Trabajo', 'Productos', 'Confianza', 'Atención a domicilio', 'Higiene'].map((t) => (
                      <p key={t} className="flex items-center gap-3 text-sm" style={{ color: C.mutL }}>
                        <span className="h-px w-5" style={{ backgroundColor: C.dorado }} aria-hidden="true" />
                        {t}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.ciruelaDeep }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(620px 400px at 50% 118%, rgba(199,71,122,0.3), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <LotoMini className="w-9 h-9 mx-auto mb-6" ondas color={C.doradoSuave} />
              <h2
                className={`${display.className} font-semibold leading-[1.1] text-[clamp(1.8rem,6.4vw,3.4rem)] mb-5`}
                style={{ color: C.rosaClaro }}
              >
                Piel suave,
                <br />
                <em className="font-medium" style={{ color: C.doradoSuave }}>
                  trato cercano.
                </em>
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutD }}>
                En el local de Sargento Silva o en tu casa. Escríbenos y
                agenda tu hora.
              </p>
              <BtnWa tone="dorado">
                <WaIcon />
                Agenda por WhatsApp
              </BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.blanco, color: C.ciruela }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex items-center gap-4 sm:gap-8">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.full}: loto dorado y nombre en fucsia`}
              width={1600}
              height={1024}
              className="w-[104px] sm:w-[150px] h-auto shrink-0"
            />
            <div className="text-xs leading-relaxed" style={{ color: C.mutL }}>
              <p className="font-bold text-sm mb-0.5" style={{ color: C.ciruela }}>
                {BIZ.full}
              </p>
              <address className="not-italic">
                {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
                <a href={`https://wa.me/${BIZ.phoneTel.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                  Facebook
                </a>
                {' · '}
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                  {BIZ.igHandle}
                </a>
              </address>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineL }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-xs leading-relaxed" style={{ color: C.mutL }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.fucsiaDeep }}>
                Sitiazo
              </a>{' '}
              para {BIZ.full}. Datos, fotos, opiniones y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.fucsiaDeep }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
