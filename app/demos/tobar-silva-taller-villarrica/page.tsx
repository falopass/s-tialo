import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { CheckList } from './checklist'
import { BIZ, WA_LINK, WA_LINK_GRUA, MAPS_URL, MAPS_EMBED, HORARIO, REVIEW, IMG } from './content'

// Barlow Condensed para el rotulado, IBM Plex Sans para el texto
// e IBM Plex Mono para los rótulos de ficha técnica.
const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
  ],
})

// De su camión: el blanco taller, el azul del rotulado «Mecánica Tobar»,
// el grafito del chasis, el amarillo de la cinta de señalización y el
// gris acero de las herramientas.
const C = {
  papel: '#F7F7F5',
  papelSoft: '#EDEDEA',
  azul: '#1D4E9E',
  azulDeep: '#153B7A',
  azulTxt: '#8FB0EA', // el azul aclarado, pasa 4.5:1 sobre grafito
  grafito: '#1B1E22',
  carbon: '#121417',
  cintaOscura: '#0F1114', // la diagonal oscura de la franja, un tono bajo el grafito
  amarillo: '#F2B705',
  acero: '#8C939B',
  tinta: '#1B1E22',
  mutedD: 'rgba(247,247,245,0.72)',
  mutedD2: 'rgba(247,247,245,0.55)',
  mutedL: 'rgba(27,30,34,0.72)',
  lineD: 'rgba(247,247,245,0.16)',
  lineL: 'rgba(27,30,34,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

const HAZARD = `repeating-linear-gradient(-45deg, ${C.amarillo} 0 13px, ${C.cintaOscura} 13px 26px)`

export const metadata: Metadata = demoMetadata({
  slug: 'tobar-silva-taller-villarrica',
  title: 'Mecánica Tobar · Taller mecánico con grúa en Villarrica',
  description:
    'Taller mecánico en Andrés Bello 551, Villarrica. Mecánica general, diagnóstico, radiadores y urgencias, con camión grúa propio. Atendido por su dueño.',
  image: '/demos/tobar-silva-taller-villarrica/grua.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    name: 'Mecánica general',
    desc: 'Las reparaciones y la mantención del día a día, resueltas en el mismo taller.',
  },
  {
    n: '02',
    name: 'Diagnóstico de fallas',
    desc: 'Primero se encuentra la causa, después se repara: sin adivinar ni cambiar piezas por cambiar.',
  },
  {
    n: '03',
    name: 'Radiadores y sistema de enfriamiento',
    desc: 'Cambio y reparación de radiadores y del sistema que mantiene el motor a su temperatura.',
  },
  {
    n: '04',
    name: 'Atención de urgencia',
    desc: 'Para esas fallas que no pueden esperar: el taller atiende urgencias cuando puede tomarlas.',
  },
  {
    n: '05',
    name: 'Grúa propia',
    desc: 'El camión grúa del taller, rotulado Mecánica Tobar. Si no puedes llegar, consúltanos por WhatsApp.',
  },
] as const

/* ── Iconos del oficio, trazo único ── */
function Ic({ name, className = 'w-4 h-4' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    fono: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

/** Rótulo de sección tipo ficha técnica: número + línea de lectura. */
function Rotulo({
  n,
  children,
  dark = false,
  nColor,
}: {
  n: string
  children: React.ReactNode
  dark?: boolean
  nColor?: string
}) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] mb-5`}
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <span
        className="inline-block h-[9px] w-[9px] shrink-0"
        style={{ backgroundColor: dark ? C.amarillo : C.azul }}
        aria-hidden="true"
      />
      <span className="whitespace-nowrap">
        <span style={{ color: nColor ?? (dark ? C.azulTxt : C.azul) }}>{n}</span> · {children}
      </span>
      <span className="h-px flex-1" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** La franja de señalización: diagonales amarillo y grafito. */
function Franja({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return <div aria-hidden="true" className={className} style={{ backgroundImage: HAZARD, ...style }} />
}

/** Una palabra del titular: entra subiendo dentro de su propio clip. */
function Palabra({ children, d = 0, color }: { children: React.ReactNode; d?: number; color?: string }) {
  return (
    <span className="inline-block overflow-hidden align-top pb-[0.08em] -mb-[0.08em]">
      <span className="tb-w inline-block" style={{ animationDelay: `${d}ms`, color }}>
        {children}
      </span>
    </span>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
  icon,
}: {
  href: string
  children: React.ReactNode
  tone: 'azul' | 'line' | 'lineD'
  external?: boolean
  icon?: string
}) {
  const st: CSSProperties =
    tone === 'azul'
      ? { backgroundColor: C.azul, color: '#FFFFFF' }
      : tone === 'lineD'
        ? { border: '1.5px solid rgba(247,247,245,0.5)', color: C.papel }
        : { border: `1.5px solid rgba(27,30,34,0.4)`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="tb-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold tracking-wide tap-44"
      style={st}
    >
      {icon && <Ic name={icon} className="w-[17px] h-[17px]" />}
      {children}
    </a>
  )
}

export default function TobarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* «Llega la grúa»: la foto del camión entra desde la derecha
           con frenado suave, como llegando al taller. */
        @keyframes tb-llega {
          from { transform: translateX(96px) scale(1.035); opacity: 0 }
          to { transform: none; opacity: 1 }
        }
        .tb-grua { animation: tb-llega 0.95s cubic-bezier(0.16,0.78,0.26,1) 0.45s both }

        /* El titular aparece palabra a palabra, cada una dentro de su clip. */
        @keyframes tb-w {
          from { transform: translateY(115%) }
          to { transform: translateY(0) }
        }
        .tb-w { animation: tb-w 0.65s cubic-bezier(0.2,0.7,0.2,1) both }

        /* La franja de señalización se despliega bajo el titular. */
        @keyframes tb-franja {
          from { clip-path: inset(0 100% 0 0) }
          to { clip-path: inset(0 0 0 0) }
        }
        .tb-franja { clip-path: inset(0 0 0 0); animation: tb-franja 0.8s cubic-bezier(0.3,0.7,0.2,1) 0.95s both }

        @keyframes tb-up { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .tb-up { animation: tb-up 0.75s ease-out both }

        .tb-btn { transition: transform .18s ease, filter .18s ease }
        .tb-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .tb-btn:active { transform: scale(.97) }
        .tb-btn:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .tb-w, .tb-grua, .tb-franja, .tb-up { animation: none !important }
          .tb-franja { clip-path: inset(0 0 0 0) !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="uppercase tracking-[0.06em]">Mecánica Tobar</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(247,247,245,0.95)',
          ink: C.tinta,
          line: 'rgba(27,30,34,0.12)',
          btnBg: C.azul,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: llega la grúa ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        {/* retícula técnica, apenas visible */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(247,247,245,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(247,247,245,0.04) 1px, transparent 1px)',
            backgroundSize: '52px 52px',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[150px] pb-9 md:pb-14 grid lg:grid-cols-[1.05fr_0.95fr] gap-9 lg:gap-14 items-center">
          <div>
            <p
              className={`${mono.className} tb-up flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-5`}
              style={{ color: C.mutedD, animationDelay: '80ms' }}
            >
              <span className="inline-block h-[9px] w-[9px] shrink-0" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
              Villarrica · Andrés Bello 551
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.92] tracking-[0.01em] text-[clamp(3.4rem,15.5vw,7.2rem)]`}
              style={{ color: C.papel }}
            >
              <Palabra d={150}>Te</Palabra> <Palabra d={240}>sacamos</Palabra>
              <br />
              <Palabra d={330}>del</Palabra> <Palabra d={420} color={C.amarillo}>apuro.</Palabra>
            </h1>
            <Franja className="tb-franja mt-4 md:mt-5 h-[11px] w-[196px] md:w-[300px]" />
            <p
              className="tb-up mt-6 md:mt-7 max-w-md text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutedD, animationDelay: '620ms' }}
            >
              Mecánica general, diagnóstico y urgencias, con grúa propia.
              Atendido por su dueño.
            </p>
            <div className="tb-up mt-7 flex flex-col sm:flex-row gap-3" style={{ animationDelay: '760ms' }}>
              <Btn href={WA_LINK} tone="azul" icon="wa">
                Escríbenos por WhatsApp
              </Btn>
              <Btn href={WA_LINK_GRUA} tone="lineD" icon="wa">
                Pide la grúa por WhatsApp
              </Btn>
            </div>
          </div>

          <figure className="tb-grua relative">
            <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(247,247,245,0.28)' }}>
              <Image
                src={`${IMG}/grua.webp`}
                alt="El camión grúa blanco de Mecánica Tobar, rotulado con su nombre y teléfono, en un camino rural de Villarrica"
                width={1024}
                height={1022}
                priority
                sizes="(min-width: 1024px) 44vw, calc(100vw - 40px)"
                className="block w-full object-cover aspect-[16/9] lg:aspect-[4/3]"
                style={{ objectPosition: '50% 68%' }}
              />
            </div>
            <figcaption
              className={`${mono.className} mt-3 flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.18em]`}
              style={{ color: C.mutedD2 }}
            >
              <span className="flex items-center gap-2.5">
                <span className="inline-block h-[7px] w-[7px]" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
                Grúa propia
              </span>
              <span>Mecánica Tobar</span>
            </figcaption>
          </figure>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: C.lineD, backgroundColor: 'rgba(18,20,23,0.72)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[10px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: C.mutedD }}
          >
            <span>Lun a vie 9:00 a 19:00</span>
            <span>Sábado 9:00 a 13:00</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
              Atendido por su dueño
            </span>
          </div>
        </div>
      </section>

      {/* ── 2 · Servicios: el checklist que se marca ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
            <Reveal>
              <Rotulo n="OT-551">Lo que resuelve</Rotulo>
              <h2
                className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.4rem,8vw,4.4rem)]`}
                style={{ color: C.tinta }}
              >
                Del diagnóstico a la grúa:
                <br />
                <span style={{ color: C.azul }}>todo en un solo taller</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                Cinco servicios, marcados como en la pizarra del taller.
                Lo que tu auto necesita, sin dar vueltas.
              </p>
              <div className="mt-8 hidden lg:block">
                <Franja className="h-[10px] w-[150px]" />
              </div>
            </Reveal>
            <CheckList
              items={SERVICIOS}
              colors={{ line: C.lineL, num: C.azul, box: C.acero, check: C.azul, desc: C.mutedL }}
            />
          </div>
        </div>
      </section>

      {/* ── 3 · Urgencias y grúa ── */}
      <section id="urgencias" className="scroll-mt-20 relative" style={{ backgroundColor: C.grafito }}>
        <Franja className="h-[13px] w-full" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <Rotulo n="URG-01" dark>
              Urgencias y grúa
            </Rotulo>
            <h2
              className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.4rem,8vw,4.4rem)]`}
              style={{ color: C.papel }}
            >
              Cuando el auto
              <br />
              <span style={{ color: C.amarillo }}>dice basta</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedD }}>
              Un motor que se calienta en plena ruta, un auto que no
              arranca: las fallas que llegan sin avisar. En las reseñas
              se lee de un conductor que llegó de urgencia con el
              radiador dañado: se lo cambiaron y siguió su viaje.
            </p>
            <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedD }}>
              Si no puedes llevar el auto al taller, la grúa propia es
              la salida: consúltanos por WhatsApp.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK_GRUA} tone="azul" icon="wa">
                Consultar por la grúa
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(247,247,245,0.28)' }}>
                <Image
                  src={`${IMG}/motor.webp`}
                  alt="Vano de motor con el radiador a la vista, en reparación en Mecánica Tobar"
                  width={900}
                  height={1200}
                  sizes="(min-width: 1024px) 44vw, calc(100vw - 40px)"
                  className="block w-full object-cover aspect-[4/3] lg:aspect-[4/5]"
                  style={{ objectPosition: '50% 45%' }}
                />
              </div>
              {/* sello de urgencia, con su franja */}
              <div
                className={`${display.className} absolute -top-4 left-4 rotate-[-2.5deg] flex items-stretch overflow-hidden shadow-lg`}
                aria-hidden="true"
              >
                <span className="w-[10px]" style={{ backgroundImage: HAZARD }} />
                <span
                  className="px-3.5 py-1.5 text-sm md:text-base font-bold uppercase tracking-[0.08em]"
                  style={{ backgroundColor: C.amarillo, color: C.grafito }}
                >
                  Urgencia
                </span>
              </div>
              <figcaption
                className={`${mono.className} mt-3 flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.18em]`}
                style={{ color: C.mutedD2 }}
              >
                <span>Sistema de enfriamiento</span>
                <span>Vano motor</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · La palabra de un cliente ── */}
      <section id="resena" style={{ backgroundColor: C.azul }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="OP-01" dark nColor="#D5E1F7">
              Lo que dicen en Google
            </Rotulo>
            <h2
              className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.2rem,7.5vw,4rem)]`}
              style={{ color: '#FFFFFF' }}
            >
              Atendido por su dueño.
            </h2>
            <blockquote className="mt-8 md:mt-10 relative">
              <span
                aria-hidden="true"
                className={`${display.className} block font-extrabold leading-none text-[88px] md:text-[120px] -mb-6 md:-mb-9 select-none`}
                style={{ color: C.amarillo }}
              >
                &ldquo;
              </span>
              <p
                className={`${display.className} font-semibold uppercase leading-[1.08] text-[clamp(1.6rem,5.6vw,2.9rem)]`}
                style={{ color: '#FFFFFF' }}
              >
                {REVIEW.text}
              </p>
              <footer
                className={`${mono.className} mt-6 flex items-center gap-3 text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em]`}
                style={{ color: 'rgba(255,255,255,0.85)' }}
              >
                <span className="inline-block h-[9px] w-[9px]" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
                {REVIEW.author} · {REVIEW.source}
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Horario y cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <Rotulo n="DIR-551">El taller</Rotulo>
            <h2
              className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.4rem,8vw,4.4rem)]`}
              style={{ color: C.tinta }}
            >
              Andrés Bello 551,
              <br />
              <span style={{ color: C.azul }}>Villarrica</span>
            </h2>
            <dl className="mt-8 border-t" style={{ borderColor: C.lineL }}>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                <Ic name="pin" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div>
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.azul }}>
                    Dirección
                  </dt>
                  <dd className="mt-1 text-sm md:text-base">{BIZ.address}, {BIZ.city}</dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                <Ic name="reloj" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div className="flex-1">
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.azul }}>
                    Horario
                  </dt>
                  <dd className="mt-1 text-sm md:text-base">
                    {HORARIO.map((h) => (
                      <span key={h.dias} className="flex justify-between gap-6 max-w-[300px]">
                        <span>{h.dias}</span>
                        <span style={{ color: h.horas === 'Cerrado' ? C.mutedL : C.tinta }}>{h.horas}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                <Ic name="fono" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div>
                  <dt className={`${mono.className} text-[10px] font-semibold uppercase tracking-[0.2em]`} style={{ color: C.azul }}>
                    WhatsApp y llamadas
                  </dt>
                  <dd className="mt-1 text-sm md:text-base">
                    <a href={WA_LINK} className="tap-44 underline underline-offset-4 decoration-2" style={{ textDecorationColor: 'rgba(29,78,158,0.4)' }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="azul" icon="wa">
                Escríbenos por WhatsApp
              </Btn>
              <Btn href={MAPS_URL} tone="line" icon="pin">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative border" style={{ borderColor: C.lineL }}>
              <div className="relative aspect-[4/3]">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p
                className={`${mono.className} px-4 py-3 border-t flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.18em]`}
                style={{ borderColor: C.lineL, color: C.mutedL }}
              >
                <span>Cómo llegar</span>
                <span>{BIZ.address}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre ── */}
      <section style={{ backgroundColor: C.grafito }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.26em] mb-5`}
              style={{ color: C.mutedD }}
            >
              Mecánica Tobar · Villarrica
            </p>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(2.6rem,9vw,5rem)]`}
              style={{ color: C.papel }}
            >
              ¿Tu auto pide
              <br />
              <span style={{ color: C.amarillo }}>revisión?</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedD }}>
              Cuéntanos qué le pasa por WhatsApp y agenda tu hora en el
              taller.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Btn href={WA_LINK} tone="azul" icon="wa">
                Escríbenos por WhatsApp
              </Btn>
              <a
                href={WA_LINK}
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.papel, textDecorationColor: 'rgba(242,183,5,0.5)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className={`${display.className} font-bold uppercase tracking-[0.06em] text-lg leading-tight`}>
                Mecánica <span style={{ color: C.azulTxt }}>Tobar</span>
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.mutedD2 }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,247,245,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: C.mutedD2 }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}. Sitio de ejemplo preparado por{' '}
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
                style={{ color: C.amarillo }}
              >
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
