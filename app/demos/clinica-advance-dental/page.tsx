import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'

// Bricolage Grotesque para los titulares (tiene el gesto editorial de la
// marca) y DM Sans para el texto corrido: limpio, clínico, cercano.
const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

// «Todas las especialidades, una sola clínica»: el azul y el naranjo de su
// logo (dos círculos que se superponen), grafito para el texto y hielo
// para los fondos. El azul marca solo lleva texto grande: el chico va en
// azul profundo para sostener el contraste.
const C = {
  azul: '#1E8FD6',
  azulClaro: '#3FA9E4',
  azulProfundo: '#0B5A8E',
  naranja: '#F39A1E',
  ambar: '#F7C548',
  grafito: '#3B3F45',
  blanco: '#FFFFFF',
  hielo: '#F2F7FB',
  miel: '#FBF1D8', // ámbar lavado: fondo de la sección de nervios
  mut: 'rgba(59,63,69,0.78)',
  mutSuave: 'rgba(59,63,69,0.62)',
  lineL: 'rgba(59,63,69,0.14)',
  mutD: 'rgba(255,255,255,0.80)',
  mutDSuave: 'rgba(255,255,255,0.62)',
  lineD: 'rgba(255,255,255,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-advance-dental',
  title: 'Clínica Advance Dental · Dentista en Valdivia',
  description:
    'Todas las especialidades dentales en un solo lugar: ortodoncia, limpieza, blanqueamiento, implantes, prótesis y endodoncia en Carampangue 455, Valdivia. Evaluación inicial sin costo. 4,9 en Google.',
  image: `${IMG}/logo.webp`,
})

const NAV_LINKS = [
  { label: 'Evaluación', href: '#evaluacion' },
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Ortodoncia', href: '#ortodoncia' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

const ESPECIALIDADES: {
  name: string
  desc: string
  icon: 'ortodoncia' | 'limpieza' | 'blanqueamiento' | 'implante' | 'endodoncia' | 'estetica'
  wide?: boolean
  tag?: string
  tone?: 'azul' | 'ambar'
}[] = [
  {
    name: 'Ortodoncia',
    desc: 'Brackets metálicos, con limpieza previa y escáner intraoral.',
    icon: 'ortodoncia',
    wide: true,
    tag: 'La más comentada en Google',
    tone: 'azul',
  },
  {
    name: 'Limpieza dental',
    desc: 'Diagnóstico, destartraje y profilaxis.',
    icon: 'limpieza',
  },
  {
    name: 'Blanqueamiento',
    desc: 'Blanqueamiento dental con LED.',
    icon: 'blanqueamiento',
  },
  {
    name: 'Implantes y prótesis',
    desc: 'Implantes dentales y prótesis para reponer piezas.',
    icon: 'implante',
  },
  {
    name: 'Endodoncia y extracciones',
    desc: 'Tratamiento de conducto y extracciones.',
    icon: 'endodoncia',
  },
  {
    name: 'Rehabilitación y estética',
    desc: 'Rehabilitación oral y estética dental: el cierre del círculo.',
    icon: 'estetica',
    wide: true,
    tone: 'ambar',
  },
]

const PASOS = [
  {
    n: '01',
    title: 'Escríbenos',
    desc: 'Por WhatsApp nos cuentas qué necesitas y agendamos tu hora.',
  },
  {
    n: '02',
    title: 'Te evaluamos sin costo',
    desc: 'Tu evaluación inicial es sin costo: revisamos tu caso en la clínica.',
  },
  {
    n: '03',
    title: 'Te explicamos tu plan',
    desc: 'Sales con tu plan de tratamiento claro y los pasos a seguir.',
  },
] as const

const ORTO_PUNTOS = [
  'Brackets metálicos',
  'Limpieza previa incluida',
  'Escáner intraoral',
  'Controles de avance puntuales',
] as const

/* ── Motivo: los dos círculos del logo ─────────────────────── */

function DobleCirculo({ className = 'h-5 w-auto' }: { className?: string }) {
  return (
    <svg viewBox="0 0 34 20" className={className} aria-hidden="true">
      <circle cx="11" cy="10" r="9" fill={C.naranja} />
      <circle cx="23" cy="10" r="9" fill={C.azul} />
    </svg>
  )
}

/** El diente de línea que aparece en la intersección de los círculos. */
function DienteLinea({ className = '', strokeWidth = 2.6 }: { className?: string; strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 72 72" className={className} fill="none" aria-hidden="true">
      <path
        className="adv-trazo"
        d="M36 9 C25 9 17 16 17 27 C17 34 20 38 22 45 C24 52 24.5 60 29 60 C33.5 60 32.5 51 34.5 45 C35.5 42 36.5 42 37.5 45 C39.5 51 38.5 60 43 60 C47.5 60 48 52 50 45 C52 38 55 34 55 27 C55 16 47 9 36 9 Z"
        stroke="#fff"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={100}
        strokeDasharray={100}
      />
      <path
        className="adv-trazo2"
        d="M25 21 C29 17.5 43 17.5 47 21"
        stroke="#fff"
        strokeWidth={strokeWidth * 0.72}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={100}
        opacity="0.85"
      />
    </svg>
  )
}

/** La composición del logo: dos discos que se encuentran y el diente
    que aparece en la intersección. Es la animación de apertura. */
function CirculosHero() {
  return (
    <div
      className="relative mx-auto w-[min(82vw,320px)] aspect-[10/6.6] select-none lg:w-[400px] xl:w-[440px]"
      aria-hidden="true"
    >
      {/* anillos que abrazan la marca */}
      <div
        className="adv-aro absolute left-1/2 top-1/2 w-[124%] aspect-square rounded-full border"
        style={{ borderColor: 'rgba(30,143,214,0.20)', transform: 'translate(-50%,-50%)' }}
      />
      <div
        className="adv-aro2 absolute left-1/2 top-1/2 w-[140%] aspect-square rounded-full border border-dashed"
        style={{ borderColor: 'rgba(243,154,30,0.28)', transform: 'translate(-50%,-50%)' }}
      />
      {/* punto ámbar que orbita la marca */}
      <div
        className="adv-sube absolute right-[6%] top-[4%] w-[4%] aspect-square rounded-full"
        style={{ backgroundColor: C.ambar, '--adv-d': '1.9s' } as CSSProperties}
      />
      {/* disco sol */}
      <div
        className="adv-sol absolute left-0 top-1/2 w-[58%] aspect-square rounded-full"
        style={{
          background: 'linear-gradient(135deg, #F7C548 4%, #F39A1E 82%)',
          boxShadow: '0 18px 44px rgba(243,154,30,0.32)',
          transform: 'translateY(-50%)',
        }}
      />
      {/* disco azul */}
      <div
        className="adv-azul absolute right-0 top-1/2 w-[58%] aspect-square rounded-full"
        style={{
          background: 'radial-gradient(circle at 32% 26%, #3FA9E4 6%, #1E8FD6 62%)',
          boxShadow: '0 18px 44px rgba(30,143,214,0.30)',
          transform: 'translateY(-50%)',
        }}
      />
      {/* diente de línea en la intersección */}
      <DienteLinea className="absolute left-1/2 top-1/2 w-[27%] -translate-x-1/2 -translate-y-[56%]" />
    </div>
  )
}

/* ── Ilustraciones de línea por especialidad ───────────────── */

function IconoEsp({ icon, className = 'w-6 h-6' }: { icon: string; className?: string }) {
  const tooth = 'M24 8 C16.5 8 12 13 12 20 C12 25 14 27.5 15.5 32 C17 36.5 17.5 42 20.5 42 C23.5 42 22.5 36.5 24 33.5 C25.5 36.5 24.5 42 27.5 42 C30.5 42 31 36.5 32.5 32 C34 27.5 36 25 36 20 C36 13 31.5 8 24 8 Z'
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      stroke={C.azul}
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icon === 'ortodoncia' && (
        <>
          <path d={tooth} />
          <path d="M9 22.5 H39" />
          <rect x="19.5" y="19" width="9" height="7" rx="1.6" />
        </>
      )}
      {icon === 'limpieza' && (
        <>
          <path d={tooth} />
          <path d="M37 7 C38.8 9.8 40 11.6 40 13.8 C40 16 38.4 17.6 36.4 17.6 C34.4 17.6 32.8 16 32.8 13.8 C32.8 11.6 34.2 9.8 37 7 Z" />
        </>
      )}
      {icon === 'blanqueamiento' && (
        <>
          <path d={tooth} />
          <path d="M40 8 v4.5" />
          <path d="M34.5 5.5 l2 3.5" />
          <path d="M45.5 5.5 l-2 3.5" />
        </>
      )}
      {icon === 'implante' && (
        <>
          <path d="M17 7.5 h14 v5.5 h-14 Z" />
          <path d="M19.5 16 L18.7 33 Q18.6 36.4 24 40.5 Q29.4 36.4 29.3 33 L28.5 16" />
          <path d="M19.2 21.5 h9.6" />
          <path d="M19.6 26.5 h8.8" />
          <path d="M20.1 31.5 h7.8" />
        </>
      )}
      {icon === 'endodoncia' && (
        <>
          <path d={tooth} />
          <path d="M24 11 V29" />
          <path d="M24 29 L21.5 39.5" />
          <path d="M24 29 L26.5 39.5" />
        </>
      )}
      {icon === 'estetica' && (
        <>
          <path d={tooth} />
          <path d="M24 15.5 l1.7 3.9 3.9 1.7 -3.9 1.7 -1.7 3.9 -1.7 -3.9 -3.9 -1.7 3.9 -1.7 Z" />
        </>
      )}
    </svg>
  )
}

/** Arco de alambre con brackets: la ilustración propia de la sección de
    ortodoncia, dibujada en el azul de la marca. */
function ArcoBrackets({ className = '' }: { className?: string }) {
  const puntos = [
    { x: 38.4, y: 40.8, r: 27.7 },
    { x: 73.6, y: 54.0, r: 12.7 },
    { x: 100, y: 57, r: 0 },
    { x: 126.4, y: 54.0, r: -12.7 },
    { x: 161.6, y: 40.8, r: -27.7 },
  ]
  return (
    <svg viewBox="0 0 200 84" className={className} fill="none" aria-hidden="true">
      <path d="M12 24 Q100 90 188 24" stroke={C.azul} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12" cy="24" r="3.4" fill={C.naranja} />
      <circle cx="188" cy="24" r="3.4" fill={C.naranja} />
      {puntos.map((p) => (
        <rect
          key={p.x}
          x={p.x - 7}
          y={p.y - 5}
          width="14"
          height="10"
          rx="2.4"
          stroke={C.azulProfundo}
          strokeWidth="2"
          fill={C.blanco}
          transform={`rotate(${p.r} ${p.x} ${p.y})`}
        />
      ))}
    </svg>
  )
}

/* ── Piezas de texto ───────────────────────────────────────── */

function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-6"
      style={{ color: light ? C.ambar : C.azulProfundo }}
    >
      <DobleCirculo className="h-[13px] w-auto shrink-0" />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function AdvanceDentalPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.blanco, color: C.grafito }}
    >
      <style>{`
        /* «Dos círculos que se encuentran»: el disco naranjo entra desde
           la izquierda y el azul desde la derecha hasta superponerse como
           en el logo; en la intersección se dibuja el diente de línea y
           luego aparece el titular. Frenado suave, sin rebotes. */
        @keyframes adv-sol {
          from { transform: translate(-118%, -50%) scale(.6); opacity: 0 }
          to { transform: translate(0, -50%) scale(1); opacity: 1 }
        }
        .adv-sol { animation: adv-sol 1.15s cubic-bezier(.16,.72,.24,1) .12s both }
        @keyframes adv-azul {
          from { transform: translate(118%, -50%) scale(.6); opacity: 0 }
          to { transform: translate(0, -50%) scale(1); opacity: 1 }
        }
        .adv-azul { animation: adv-azul 1.15s cubic-bezier(.16,.72,.24,1) .22s both }

        @keyframes adv-aro {
          from { transform: translate(-50%,-50%) scale(.72); opacity: 0 }
          to { transform: translate(-50%,-50%) scale(1); opacity: 1 }
        }
        .adv-aro { animation: adv-aro 1.4s cubic-bezier(.2,.7,.25,1) .55s both }
        .adv-aro2 { animation: adv-aro 1.4s cubic-bezier(.2,.7,.25,1) .7s both }

        /* El diente se dibuja con trazo en la intersección. */
        @keyframes adv-trazo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .adv-trazo { animation: adv-trazo .75s cubic-bezier(.4,.1,.3,1) 1.05s both }
        .adv-trazo2 { animation: adv-trazo .45s cubic-bezier(.4,.1,.3,1) 1.62s both }

        @keyframes adv-sube {
          from { opacity: 0; transform: translateY(16px) }
          to { opacity: 1; transform: none }
        }
        .adv-sube { animation: adv-sube .85s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--adv-d, 0s) }

        /* Especialidades: cada ítem entra rotando levemente desde su
           círculo al hacer scroll (solo donde hay animation-timeline). */
        @supports (animation-timeline: view()) {
          .adv-gira {
            opacity: 0;
            transform: rotate(var(--adv-r, -5deg)) translateY(24px);
            animation: adv-gira linear both;
            animation-timeline: view();
            animation-range: entry 4% entry 58%;
          }
          @keyframes adv-gira { to { opacity: 1; transform: none } }
        }

        .adv-btn { transition: transform .18s ease, filter .18s ease }
        .adv-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .adv-btn:active { transform: scale(.97) }
        .adv-page a:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .adv-page a:focus:not(:focus-visible) { outline: none }
        .adv-fila { transition: background-color .22s ease }
        .adv-fila:hover { background-color: ${C.blanco} }

        @media (prefers-reduced-motion: reduce) {
          .adv-sol, .adv-azul, .adv-aro, .adv-aro2, .adv-sube { animation: none !important }
          .adv-trazo, .adv-trazo2 { animation: none !important; stroke-dashoffset: 0 !important }
          .adv-gira { opacity: 1 !important; transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5 min-w-0">
            <DobleCirculo className="h-[19px] w-auto shrink-0" />
            <span className={`${display.className} font-bold tracking-[0.01em] truncate`}>
              Advance Dental
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.grafito,
          line: C.lineL,
          btnBg: C.azulProfundo,
          btnInk: C.blanco,
        }}
      />

      <div className="adv-page">
        {/* ── 1 · Hero: dos círculos que se encuentran ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.blanco }}>
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(720px 420px at 88% -4%, rgba(30,143,214,0.09), transparent 62%), radial-gradient(560px 380px at -6% 38%, rgba(247,197,72,0.16), transparent 60%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[86px] md:pt-24 pb-10 md:pb-14">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 lg:items-center">
              {/* Los círculos: primero en celular, a la derecha en escritorio */}
              <div className="lg:col-span-5 lg:order-2 mb-7 lg:mb-0">
                <CirculosHero />
              </div>

              <div className="lg:col-span-7 lg:order-1 text-center lg:text-left">
                <p
                  className="adv-sube flex items-center justify-center lg:justify-start gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
                  style={{ color: C.azulProfundo, '--adv-d': '0.95s' } as CSSProperties}
                >
                  <DobleCirculo className="h-[13px] w-auto shrink-0" />
                  Valdivia · Carampangue 455
                </p>

                <h1
                  className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2.5rem,9.6vw,4.6rem)]`}
                >
                  <span className="adv-sube block" style={{ '--adv-d': '1.32s' } as CSSProperties}>
                    Todas las especialidades,
                  </span>
                  <span className="adv-sube block" style={{ color: C.azulProfundo, '--adv-d': '1.46s' } as CSSProperties}>
                    una sola clínica.
                  </span>
                </h1>

                <p
                  className="adv-sube mt-5 mx-auto lg:mx-0 max-w-md text-base md:text-lg leading-relaxed"
                  style={{ color: C.mut, '--adv-d': '1.62s' } as CSSProperties}
                >
                  Ortodoncia, limpieza, blanqueamiento, implantes, prótesis
                  y endodoncia en el centro de Valdivia. Tu evaluación
                  inicial es sin costo.
                </p>

                <div
                  className="adv-sube mt-7 flex flex-wrap justify-center lg:justify-start gap-3"
                  style={{ '--adv-d': '1.78s' } as CSSProperties}
                >
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="adv-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-xl font-bold tap-44"
                    style={{ backgroundColor: C.azul, color: C.blanco }}
                  >
                    <WaIcon />
                    Agenda tu evaluación
                  </a>
                  <a
                    href="#especialidades"
                    className="adv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold tap-44"
                    style={{ border: `1.5px solid rgba(11,90,142,0.45)`, color: C.azulProfundo }}
                  >
                    Ver especialidades
                  </a>
                </div>

                <div
                  className="adv-sube mt-6 flex items-center justify-center lg:justify-start gap-2.5"
                  style={{ '--adv-d': '1.92s' } as CSSProperties}
                >
                  <Stars value={BIZ.ratingValue} color={C.naranja} size={17} />
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tap-44"
                    style={{ color: C.mut }}
                  >
                    <strong className="font-bold" style={{ color: C.grafito }}>
                      {BIZ.rating}
                    </strong>
                    {' '}· {BIZ.reviews} opiniones en Google
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Evaluación inicial sin costo ── */}
        <section id="evaluacion" className="scroll-mt-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12">
            <Reveal>
              <div
                className="relative overflow-hidden rounded-[26px] md:rounded-[36px] px-6 py-11 md:p-14"
                style={{ backgroundColor: C.azulProfundo }}
              >
                {/* el motivo de los círculos, en clave oscura */}
                <div
                  className="absolute -right-24 -top-24 w-64 h-64 rounded-full pointer-events-none"
                  style={{ backgroundColor: 'rgba(63,169,228,0.30)' }}
                  aria-hidden="true"
                />
                <div
                  className="absolute -right-8 top-28 w-40 h-40 rounded-full pointer-events-none"
                  style={{ backgroundColor: 'rgba(243,154,30,0.26)' }}
                  aria-hidden="true"
                />
                <div className="relative">
                  <h2
                    className={`${display.className} font-extrabold leading-[1.04] tracking-[-0.01em] text-[clamp(1.9rem,6.6vw,3.4rem)] max-w-2xl`}
                    style={{ color: C.blanco }}
                  >
                    Tu evaluación inicial{' '}
                    <span style={{ color: C.ambar }}>es sin costo.</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                    Empezar es simple: tres pasos y ya sabes dónde estás
                    parado con tu salud dental.
                  </p>

                  <ol className="mt-10 grid md:grid-cols-3 gap-8 md:gap-6">
                    {PASOS.map((p) => (
                      <li key={p.n} className="relative">
                        <span
                          className={`${display.className} inline-flex items-center justify-center w-11 h-11 rounded-full border-2 font-bold text-base mb-4`}
                          style={{ borderColor: C.ambar, color: C.ambar }}
                          aria-hidden="true"
                        >
                          {p.n}
                        </span>
                        <h3 className={`${display.className} text-lg md:text-xl font-bold mb-2`} style={{ color: C.blanco }}>
                          {p.title}
                        </h3>
                        <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutD }}>
                          {p.desc}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-10">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="adv-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-lg font-bold tap-44"
                      style={{ backgroundColor: C.ambar, color: C.grafito }}
                    >
                      <WaIcon />
                      Agenda tu evaluación
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · Especialidades: 1 clínica, todas ── */}
        <section
          id="especialidades"
          className="scroll-mt-20 relative overflow-hidden"
          style={{ backgroundColor: C.hielo }}
        >
          {/* los círculos como fondo de la sección */}
          <div
            className="absolute -left-32 -bottom-40 w-[420px] h-[420px] rounded-full border pointer-events-none"
            style={{ borderColor: 'rgba(30,143,214,0.14)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-24 -top-28 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{ backgroundColor: 'rgba(247,197,72,0.16)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo>Especialidades</Rotulo>
            </Reveal>

            {/* El contador: 1 clínica, todas las especialidades */}
            <Reveal delay={60}>
              <div className="flex items-end gap-5 md:gap-9 mb-4 md:mb-5">
                <p
                  className={`${display.className} font-extrabold leading-[0.78] text-[clamp(6.4rem,22vw,11rem)]`}
                  style={{ color: C.azul }}
                  aria-hidden="true"
                >
                  1
                </p>
                <div className="pb-1.5 md:pb-4">
                  <DobleCirculo className="h-[18px] md:h-6 w-auto mb-3" />
                  <h2
                    className={`${display.className} font-extrabold leading-[1.0] tracking-[-0.015em] text-[clamp(2rem,7.4vw,3.8rem)]`}
                  >
                    clínica,
                    <br />
                    <span style={{ color: C.azulProfundo }}>todas las especialidades.</span>
                  </h2>
                </div>
              </div>
              <p className="max-w-md text-base md:text-lg leading-relaxed mb-10 md:mb-14" style={{ color: C.mut }}>
                De la limpieza al implante: todo se resuelve en el mismo
                lugar, en pleno centro de Valdivia.
              </p>
            </Reveal>

            {/* Grilla editorial: filas anchas y pares, no tarjetas iguales */}
            <ul className="grid md:grid-cols-2 gap-4 md:gap-5">
              {ESPECIALIDADES.map((e, i) => (
                <li
                  key={e.name}
                  className={`adv-gira adv-fila ${e.wide ? 'md:col-span-2' : ''} flex items-center gap-4 md:gap-6 rounded-2xl border px-5 py-5 md:px-8 md:py-6`}
                  style={{
                    backgroundColor:
                      e.tone === 'azul'
                        ? 'rgba(30,143,214,0.09)'
                        : e.tone === 'ambar'
                          ? 'rgba(247,197,72,0.20)'
                          : 'rgba(255,255,255,0.72)',
                    borderColor:
                      e.tone === 'ambar' ? 'rgba(243,154,30,0.40)' : 'rgba(30,143,214,0.22)',
                    '--adv-r': `${i % 2 === 0 ? -4.5 : 4.5}deg`,
                  } as CSSProperties}
                >
                  <span
                    className="shrink-0 inline-flex items-center justify-center w-[52px] h-[52px] md:w-[60px] md:h-[60px] rounded-full"
                    style={{ backgroundColor: C.blanco, border: `1.5px solid rgba(30,143,214,0.28)` }}
                  >
                    <IconoEsp icon={e.icon} className="w-7 h-7 md:w-8 md:h-8" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <span
                        className={`${display.className} font-bold leading-tight ${e.wide ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'}`}
                        style={{ color: C.grafito }}
                      >
                        {e.name}
                      </span>
                      {e.tag && (
                        <span
                          className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full whitespace-nowrap"
                          style={{ backgroundColor: C.azulProfundo, color: C.blanco }}
                        >
                          {e.tag}
                        </span>
                      )}
                    </span>
                    <span className="block mt-1 text-sm md:text-[15px] leading-snug" style={{ color: C.mut }}>
                      {e.desc}
                    </span>
                  </span>
                  {e.wide && (
                    <DobleCirculo className="h-4 w-auto ml-auto shrink-0 self-center opacity-80" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4 · Ortodoncia: la especialidad que más nombran ── */}
        <section id="ortodoncia" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5">
                <Reveal>
                  <div
                    className="relative rounded-[26px] px-6 pt-10 pb-8 md:px-9 md:pt-12 md:pb-10 overflow-hidden"
                    style={{ backgroundColor: C.hielo }}
                  >
                    <div
                      className="absolute -left-20 -bottom-24 w-44 h-44 rounded-full pointer-events-none"
                      style={{ backgroundColor: 'rgba(247,197,72,0.22)' }}
                      aria-hidden="true"
                    />
                    <ArcoBrackets className="relative w-full h-auto" />
                    <ul className="relative mt-8 space-y-3">
                      {ORTO_PUNTOS.map((p) => (
                        <li key={p} className="flex items-center gap-3 text-[15px] md:text-base" style={{ color: C.grafito }}>
                          <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 shrink-0" aria-hidden="true">
                            <circle cx="5.5" cy="8" r="4.4" fill={C.naranja} />
                            <circle cx="11.5" cy="8" r="4.4" fill={C.azul} />
                          </svg>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal>
                  <h2
                    className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,6.8vw,3.6rem)]`}
                  >
                    Si buscas ortodoncia
                    <br />
                    en Valdivia,{' '}
                    <span style={{ color: C.azul }}>este es el lugar.</span>
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mut }}>
                    Es la especialidad que más nombran sus pacientes en
                    Google. Lindy terminó su tratamiento y esto fue lo
                    que escribió:
                  </p>
                </Reveal>
                <Reveal delay={180}>
                  <figure
                    className="mt-8 rounded-[26px] border px-6 py-7 md:px-9 md:py-9"
                    style={{ borderColor: 'rgba(30,143,214,0.24)', backgroundColor: 'rgba(242,247,251,0.65)' }}
                  >
                    <blockquote className={`${display.className} text-lg md:text-[1.35rem] font-semibold leading-[1.45]`} style={{ color: C.grafito }}>
                      “{REVIEWS.lindy.text}”
                    </blockquote>
                    <figcaption className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="inline-flex items-center gap-2.5 text-sm font-bold" style={{ color: C.azulProfundo }}>
                        <DobleCirculo className="h-[13px] w-auto" />
                        {REVIEWS.lindy.author}
                      </span>
                      <span className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: C.mutSuave }}>
                        Reseña de Google · {REVIEWS.lindy.tag}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Para quien le tiene susto al dentista ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.miel }}>
          <div
            className="absolute -right-44 -bottom-48 w-[340px] h-[340px] rounded-full pointer-events-none"
            style={{ backgroundColor: 'rgba(243,154,30,0.13)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              <div className="lg:col-span-5 flex justify-center lg:justify-start">
                <Reveal>
                  <div className="relative">
                    <div
                      className="absolute -inset-4 rounded-full border-2 border-dashed pointer-events-none"
                      style={{ borderColor: 'rgba(243,154,30,0.55)' }}
                      aria-hidden="true"
                    />
                    <div
                      className="absolute -right-5 -top-5 w-14 h-14 rounded-full pointer-events-none"
                      style={{ backgroundColor: 'rgba(30,143,214,0.16)' }}
                      aria-hidden="true"
                    />
                    <Image
                      src={`${IMG}/atencion.webp`}
                      alt="Paciente en atención en el box de Clínica Advance Dental"
                      width={406}
                      height={419}
                      className="relative w-[220px] md:w-[280px] h-auto rounded-full object-cover aspect-square"
                      style={{ objectPosition: '50% 34%' }}
                    />
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-7">
                <Reveal>
                  <h2
                    className={`${display.className} font-extrabold leading-[1.04] tracking-[-0.015em] text-[clamp(1.9rem,6.6vw,3.4rem)]`}
                  >
                    ¿Te da susto{' '}
                    <span style={{ color: C.azulProfundo }}>el dentista?</span>
                  </h2>
                  <p className="mt-4 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mut }}>
                    A Nicole le daba pánico. Así fue su primera atención
                    en Advance Dental:
                  </p>
                </Reveal>
                <Reveal delay={140}>
                  <figure className="mt-7 border-l-[3px] pl-5 md:pl-7" style={{ borderColor: C.naranja }}>
                    <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.grafito }}>
                      “{REVIEWS.nicole.text}”
                    </blockquote>
                    <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="inline-flex items-center gap-2.5 text-sm font-bold" style={{ color: C.azulProfundo }}>
                        <DobleCirculo className="h-[13px] w-auto" />
                        {REVIEWS.nicole.author}
                      </span>
                      <span className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: C.mutSuave }}>
                        Reseña de Google
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={220}>
                  <p className="mt-6 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mut }}>
                    Aquí te explican cada paso del tratamiento y escuchan
                    tus dudas. La primera conversación es por WhatsApp.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Opiniones: 4,9 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-4">
                <Reveal>
                  <p
                    className={`${display.className} font-extrabold leading-[0.85] text-[clamp(5rem,17vw,8.5rem)]`}
                    style={{ color: C.azul }}
                  >
                    {BIZ.rating}
                  </p>
                  <div className="mt-4">
                    <Stars value={BIZ.ratingValue} color={C.naranja} size={21} />
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 decoration-1 tap-44"
                    style={{ color: C.azulProfundo, textDecorationColor: 'rgba(11,90,142,0.4)' }}
                  >
                    {BIZ.reviews} opiniones en Google
                  </a>
                </Reveal>
              </div>
              <div className="lg:col-span-8 space-y-8 md:space-y-10">
                {[REVIEWS.yohany, REVIEWS.belen].map((r, i) => (
                  <Reveal key={r.author} delay={i * 120}>
                    <figure className="border-t pt-6 md:pt-8" style={{ borderColor: C.lineL }}>
                      <blockquote className={`${display.className} text-lg md:text-[1.3rem] font-semibold leading-[1.45]`} style={{ color: C.grafito }}>
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2">
                        <span className="inline-flex items-center gap-2.5 text-sm font-bold" style={{ color: C.azulProfundo }}>
                          <DobleCirculo className="h-[13px] w-auto" />
                          {r.author}
                        </span>
                        <span className="text-xs uppercase tracking-[0.14em] font-semibold" style={{ color: C.mutSuave }}>
                          Reseña de Google · {r.tag}
                        </span>
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Visítanos: Carampangue 455 ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.hielo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
            <Reveal>
              <Rotulo>Visítanos</Rotulo>
              <h2
                className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,7vw,3.6rem)]`}
              >
                En pleno centro
                <br />
                <span style={{ color: C.azulProfundo }}>de Valdivia.</span>
              </h2>
            </Reveal>

            <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-6">
                <Reveal delay={80}>
                  <dl className="space-y-5">
                    {[
                      {
                        dt: 'Dirección',
                        dd: <>{BIZ.address}, {BIZ.city}</>,
                        icon: (
                          <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        ),
                      },
                      {
                        dt: 'Horario',
                        dd: <>{BIZ.days} · agenda tu hora por WhatsApp</>,
                        icon: (
                          <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z M12 7v5l3.5 2" />
                        ),
                      },
                      {
                        dt: 'WhatsApp',
                        dd: (
                          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-1 tap-44" style={{ color: C.azulProfundo }}>
                            {BIZ.phoneDisplay}
                          </a>
                        ),
                        icon: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
                      },
                      {
                        dt: 'Instagram',
                        dd: (
                          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-1 tap-44" style={{ color: C.azulProfundo }}>
                            {BIZ.igHandle}
                          </a>
                        ),
                        icon: (
                          <>
                            <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                            <circle cx="12" cy="12" r="3.8" />
                            <circle cx="17" cy="7" r="0.9" fill={C.azul} stroke="none" />
                          </>
                        ),
                      },
                      {
                        dt: 'Facebook',
                        dd: (
                          <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 decoration-1 tap-44" style={{ color: C.azulProfundo }}>
                            Advance Dental Valdivia
                          </a>
                        ),
                        icon: (
                          <path d="M14.5 8.5h2.8V5h-2.8a4 4 0 0 0-4 4v2.2H7.5v3.2h3V21h3.4v-6.6h2.9l.5-3.2h-3.4V9.2c0-.4.2-.7.6-.7Z" />
                        ),
                      },
                    ].map((row) => (
                      <div key={row.dt} className="flex items-start gap-4">
                        <span
                          className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-full mt-0.5"
                          style={{ backgroundColor: C.blanco, border: `1.5px solid rgba(30,143,214,0.26)` }}
                        >
                          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={C.azulProfundo} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            {row.icon}
                          </svg>
                        </span>
                        <div>
                          <dt className="text-xs uppercase tracking-[0.16em] font-bold mb-1" style={{ color: C.mutSuave }}>
                            {row.dt}
                          </dt>
                          <dd className="text-base md:text-lg font-semibold leading-snug" style={{ color: C.grafito }}>
                            {row.dd}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-9 flex flex-wrap gap-3">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="adv-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-lg font-bold tap-44"
                      style={{ backgroundColor: C.azul, color: C.blanco }}
                    >
                      <WaIcon />
                      Agenda tu evaluación
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="adv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold tap-44"
                      style={{ border: `1.5px solid rgba(11,90,142,0.45)`, color: C.azulProfundo }}
                    >
                      Cómo llegar
                    </a>
                  </div>
                </Reveal>
              </div>
              <div className="lg:col-span-6">
                <Reveal delay={140}>
                  <div className="relative">
                    <div
                      className="absolute -left-5 -top-5 w-24 h-24 rounded-full pointer-events-none z-10"
                      style={{ background: 'linear-gradient(135deg, rgba(247,197,72,0.85), rgba(243,154,30,0.85))' }}
                      aria-hidden="true"
                    />
                    <div
                      className="relative overflow-hidden rounded-[26px] border ml-6 mt-6"
                      style={{ borderColor: 'rgba(30,143,214,0.24)', backgroundColor: C.blanco }}
                    >
                      <LazyMap
                        title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                        src={MAPS_EMBED}
                        className="block w-full h-[300px] md:h-[380px]"
                        style={{ border: 0 }}
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8 · Cierre: la evaluación es sin costo ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.azulProfundo }}>
          {/* los dos círculos, una vez más, cerrando la composición:
              salen por los bordes para que el texto respire */}
          <div
            className="absolute -left-44 -bottom-52 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ backgroundColor: 'rgba(243,154,30,0.24)' }}
            aria-hidden="true"
          />
          <div
            className="absolute -right-44 -top-52 w-[380px] h-[380px] rounded-full pointer-events-none"
            style={{ backgroundColor: 'rgba(63,169,228,0.30)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold leading-[1.03] tracking-[-0.015em] text-[clamp(2rem,7.4vw,3.8rem)]`}
                style={{ color: C.blanco }}
              >
                Tu evaluación inicial
                <br />
                <span style={{ color: C.ambar }}>es sin costo.</span>
              </h2>
              <p className="mt-5 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Escríbenos por WhatsApp y agenda tu hora: atención de
                lunes a sábado en Carampangue 455.
              </p>
              <div className="mt-9 flex flex-col items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="adv-btn inline-flex items-center justify-center gap-2.5 px-8 py-3 rounded-full text-xl font-bold tap-44"
                  style={{ backgroundColor: C.ambar, color: C.grafito }}
                >
                  <WaIcon />
                  Agenda tu evaluación
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-xl font-bold tap-44`}
                  style={{ color: C.blanco }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.grafito, color: C.blanco }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
            <span className="shrink-0 inline-flex items-center justify-center w-[54px] h-[54px] rounded-2xl" style={{ backgroundColor: C.blanco }}>
              <Image
                src={`${IMG}/logo.webp`}
                alt="Logo de Clínica Advance Dental"
                width={720}
                height={720}
                className="w-[46px] h-[46px] rounded-xl object-cover"
              />
            </span>
            <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
              <p className={`${display.className} font-bold text-base mb-0.5`} style={{ color: C.blanco }}>
                {BIZ.name}
              </p>
              <address className="not-italic">
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <p className="mt-1">
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Instagram
                </a>
                {' · '}
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                  Facebook
                </a>
              </p>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.blanco }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. La dirección, el contacto, las redes, las
              opiniones y el rating son datos públicos reales; los textos
              de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.blanco }}>
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
