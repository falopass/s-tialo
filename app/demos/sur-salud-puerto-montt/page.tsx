import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { LuzOn } from './luz-on'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINIONES, IMG } from './content'

// Instrument Serif para la voz editorial (titulares, cifras, comillas)
// y Onest para el texto corrido: calma clínica con oficio.
const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// «Una clínica con vista»: blanco clínico, niebla de la mañana sur,
// el azul del logo, el celeste de su trazo curvo y un toque de madera.
const C = {
  blanco: '#FFFFFF',
  niebla: '#EEF3F6',
  nieblaBaja: '#E2EAF0',
  azul: '#163F6B',
  azulNoche: '#0E2A49',
  azulFondo: '#0A1F38',
  celeste: '#4E9BCB',
  celesteInk: '#2E6E9E', // celeste oscuro: ≥4.5:1 sobre niebla/blanco
  madera: '#C9A27A',
  maderaInk: '#6F5231', // madera oscura: ≥4.5:1 sobre claro
  mut: '#3F5874', // secundario sobre claro
  mutO: 'rgba(255,255,255,0.74)', // secundario sobre oscuro
  mutO2: 'rgba(255,255,255,0.58)',
  lineaC: 'rgba(22,63,107,0.15)',
  lineaO: 'rgba(255,255,255,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// La cuadrícula del ventanal: líneas finas en grilla (motivo gráfico).
const VENTANAL_CLARO: CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(0deg, rgba(22,63,107,0.05) 0 1px, transparent 1px 46px)',
    'repeating-linear-gradient(90deg, rgba(22,63,107,0.05) 0 1px, transparent 1px 46px)',
  ].join(', '),
}
const VENTANAL_OSCURO: CSSProperties = {
  backgroundImage: [
    'repeating-linear-gradient(0deg, rgba(255,255,255,0.075) 0 1px, transparent 1px 40px)',
    'repeating-linear-gradient(90deg, rgba(255,255,255,0.075) 0 1px, transparent 1px 40px)',
  ].join(', '),
}
// Láminas de la cortina roller del hero.
const CORTINA_LAMINAS: CSSProperties = {
  backgroundColor: C.niebla,
  backgroundImage:
    'repeating-linear-gradient(180deg, rgba(22,63,107,0.075) 0 1px, transparent 1px 13px)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'sur-salud-puerto-montt',
  title: 'Sur Salud · Ortodoncia y especialidades dentales en Puerto Montt',
  description:
    'Centro de ortodoncia y especialidades dentales en Pedro Montt 160, Puerto Montt. Ortodoncia, implantes y estética dental. 5,0 en Google con 35 opiniones. Agenda por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horario', href: '#visita' },
]

const TRATAMIENTOS = [
  {
    n: '01',
    name: 'Ortodoncia',
    tag: 'La especialidad del centro',
    desc: 'Su especialidad según su propio logo: alinear tu sonrisa con un plan claro y controles a tu ritmo.',
    dest: true,
  },
  {
    n: '02',
    name: 'Implantes dentales',
    desc: 'Reposición de las piezas que faltan con una solución fija.',
  },
  {
    n: '03',
    name: 'Estética dental',
    desc: 'Detalle y armonía en tu sonrisa, pensado a tu medida.',
  },
  {
    n: '04',
    name: 'Blanqueamiento dental',
    desc: 'Para recuperar un tono más claro en tus dientes.',
  },
  {
    n: '05',
    name: 'Tratamiento de caries',
    desc: 'Diagnóstico y restauración de las piezas con caries.',
  },
  {
    n: '06',
    name: 'Cuidado de encías',
    desc: 'Tratamiento de la gingivitis y cuidado de tus encías.',
  },
]

/** Rótulo en versalitas espaciadas con una línea fina al costado. */
function Rotulo({
  children,
  color,
  lineColor,
}: {
  children: React.ReactNode
  color: string
  lineColor: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]"
      style={{ color }}
    >
      <span
        className="h-px w-9 shrink-0"
        style={{ backgroundColor: lineColor }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** El trazo curvo del logo: una curva celeste que abraza. */
function Trazo({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 300 70"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M4 24 C 52 58, 140 66, 210 50 C 252 40, 282 20, 296 4"
        fill="none"
        stroke={C.celeste}
        strokeWidth="4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'azul' | 'linea' | 'lineaClara' | 'blanco'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'azul'
      ? { backgroundColor: C.azul, color: C.blanco }
      : tone === 'blanco'
        ? { backgroundColor: C.blanco, color: C.azulNoche }
        : tone === 'lineaClara'
          ? { border: '1.5px solid rgba(255,255,255,0.5)', color: C.blanco }
          : { border: `1.5px solid ${C.azul}`, color: C.azul }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="ss-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function SurSaludPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.blanco, color: C.azul }}
    >
      <style>{`
        /* La cortina roller sube al cargar y deja ver el box con la vista. */
        @keyframes ss-sube { to { transform: translateY(-102%) } }
        .ss-cortina { animation: ss-sube 1.2s cubic-bezier(0.65,0,0.25,1) 0.35s both }

        /* Titular del hero, línea por línea. */
        @keyframes ss-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .ss-line { animation: ss-up 0.9s cubic-bezier(0.22,0.61,0.2,1) both }

        @keyframes ss-fade { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none } }
        .ss-fade { animation: ss-fade 0.85s ease-out both }

        /* El trazo curvo se revela de izquierda a derecha. */
        @keyframes ss-trazo { from { clip-path: inset(-20% 102% -20% 0) } to { clip-path: inset(-20% 0 -20% 0) } }
        .ss-trazo { animation: ss-trazo 1s cubic-bezier(0.4,0,0.2,1) both }

        /* Destello de la lámpara del equipo sobre cada tratamiento. */
        .ss-flash {
          position: absolute; inset: 0; pointer-events: none; opacity: 0; z-index: 1;
          background: radial-gradient(ellipse 85% 62% at 50% 0%, rgba(78,155,203,0.34), transparent 72%);
        }
        @keyframes ss-flash { 0% { opacity: 0 } 18% { opacity: 1 } 100% { opacity: 0 } }
        .ss-on .ss-flash { animation: ss-flash 0.9s ease-out both }

        .ss-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .ss-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .ss-btn:active { transform: translateY(0) scale(0.97) }
        .ss-btn:focus-visible { outline: 3px solid ${C.celeste}; outline-offset: 3px }
        a:focus-visible { outline: 3px solid ${C.celeste}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .ss-cortina { transform: translateY(-102%); animation: none }
          .ss-line, .ss-fade, .ss-trazo { animation: none !important }
          .ss-flash { display: none }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.azul,
          line: C.lineaC,
          btnBg: C.azul,
          btnInk: C.blanco,
        }}
      />

      {/* ── 1 · Hero: sube la cortina y se ve la clínica con vista ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.niebla }}
      >
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Box dental de Sur Salud con paciente en el sillón y ventanal al centro de Puerto Montt"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_42%]"
          />
        </div>
        {/* scrim superior: refuerza el nav blanco sobre la foto clara */}
        <div
          className="absolute inset-x-0 top-0 h-[110px]"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,42,73,0.42) 0%, rgba(14,42,73,0) 100%)',
          }}
          aria-hidden="true"
        />
        {/* velo claro: el texto va sobre niebla, no sobre la foto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(238,243,246,0) 40%, rgba(238,243,246,0.55) 60%, rgba(238,243,246,0.94) 75%, #EEF3F6 82%)',
          }}
          aria-hidden="true"
        />

        {/* la cortina roller: cubre todo (también el nav) y sube */}
        <div className="ss-cortina absolute inset-0 z-50" aria-hidden="true">
          <div className="absolute inset-0" style={CORTINA_LAMINAS} />
          {/* sombra del cajón de la cortina: también da fondo al nav blanco */}
          <div
            className="absolute inset-x-0 top-0 h-[84px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,42,73,0.55) 0%, rgba(14,42,73,0) 100%)',
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[14px]"
            style={{
              backgroundColor: '#D8E2EA',
              borderTop: '1px solid rgba(22,63,107,0.14)',
              boxShadow: '0 12px 28px rgba(14,42,73,0.30)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-8 md:pb-10">
          <p className="ss-fade mb-5" style={{ animationDelay: '1.05s' }}>
            <span
              className="inline-flex items-center gap-2.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em] px-3.5 py-2 rounded-full whitespace-nowrap"
              style={{
                color: C.azul,
                backgroundColor: 'rgba(238,243,246,0.82)',
                backdropFilter: 'blur(6px)',
                WebkitBackdropFilter: 'blur(6px)',
                border: '1px solid rgba(22,63,107,0.12)',
              }}
            >
              <span className="h-px w-6" style={{ backgroundColor: 'rgba(22,63,107,0.45)' }} aria-hidden="true" />
              Pedro Montt 160 · Puerto Montt
            </span>
          </p>
          <h1
            className={`${display.className} relative leading-[0.98] tracking-[-0.01em] text-[clamp(3.1rem,12vw,6.6rem)]`}
            style={{ color: C.azul }}
          >
            <span className="block overflow-hidden">
              <span className="ss-line block" style={{ animationDelay: '1.15s' }}>
                Tu sonrisa,
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="ss-line block" style={{ animationDelay: '1.3s' }}>
                con calma y con
              </span>
            </span>
            <span className="block overflow-hidden">
              <span
                className="ss-line block italic"
                style={{ animationDelay: '1.45s', color: C.celesteInk }}
              >
                vista al sur.
              </span>
            </span>
            <Trazo
              className="ss-trazo absolute pointer-events-none"
              style={{
                left: '-2%',
                bottom: '-20px',
                width: '72%',
                height: '64px',
                animationDelay: '2s',
              }}
            />
          </h1>
          <p
            className="ss-fade mt-9 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: C.mut, animationDelay: '1.7s' }}
          >
            Ortodoncia, implantes y estética dental en un box con luz
            natural y el centro de Puerto Montt de fondo.
          </p>
          <div className="ss-fade mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.85s' }}>
            <Btn href={WA_LINK} tone="azul">
              Agenda por WhatsApp
            </Btn>
            <Btn href="#tratamientos" tone="linea" external={false}>
              Ver tratamientos
            </Btn>
          </div>
        </div>

        {/* barra de datos al pie del hero */}
        <div
          className="relative z-10 border-t"
          style={{
            borderColor: C.lineaC,
            backgroundColor: 'rgba(238,243,246,0.88)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="ss-fade max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] uppercase tracking-[0.16em] font-bold"
            style={{ color: C.mut, animationDelay: '2s' }}
          >
            <span>Lun a vie 9:00 a 18:30</span>
            <span>Sáb 9:00 a 13:30</span>
            <span style={{ color: C.celesteInk }}>5,0 en Google · 35 opiniones</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Tratamientos: se enciende la luz del equipo, de a uno ── */}
      <section id="tratamientos" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.celesteInk} lineColor="rgba(46,110,158,0.4)">
              Ortodoncia y especialidades
            </Rotulo>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 lg:gap-14 items-end mt-4 mb-10 md:mb-14">
              <h2
                className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(2.5rem,7vw,4.6rem)]`}
                style={{ color: C.azul }}
              >
                Seis especialidades,{' '}
                <em style={{ color: C.celesteInk }}>una sola clínica.</em>
              </h2>
              <p className="text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mut }}>
                Lo que publica Sur Salud en su Instagram: su centro de
                ortodoncia y especialidades dentales en el centro de
                Puerto Montt.
              </p>
            </div>
          </Reveal>

          {/* Ortodoncia: la especialidad, destacada */}
          <LuzOn>
            <div
              role="listitem"
              className="relative overflow-hidden rounded-3xl p-6 md:p-10 mb-8 md:mb-10"
              style={{
                backgroundColor: C.niebla,
                border: `1px solid ${C.lineaC}`,
                boxShadow: '0 18px 44px rgba(14,42,73,0.10)',
              }}
            >
              {/* arco celeste que abraza la esquina (el trazo del logo) */}
              <svg
                className="absolute -top-10 -right-10 w-56 h-56 md:w-72 md:h-72 pointer-events-none"
                viewBox="0 0 200 200"
                aria-hidden="true"
              >
                <path
                  d="M196 4 C 140 30, 92 78, 66 138 C 52 168, 46 186, 44 196"
                  fill="none"
                  stroke={C.celeste}
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
              <div className="relative grid md:grid-cols-[auto_1fr] gap-x-10 gap-y-4 items-center">
                <span
                  className={`${display.className} italic leading-none text-[clamp(4rem,10vw,7rem)]`}
                  style={{ color: C.celeste }}
                  aria-hidden="true"
                >
                  01
                </span>
                <div>
                  <p
                    className="text-[11px] font-bold uppercase tracking-[0.26em] mb-2"
                    style={{ color: C.celesteInk }}
                  >
                    {TRATAMIENTOS[0].tag}
                  </p>
                  <h3
                    className={`${display.className} text-[clamp(2rem,5.5vw,3.4rem)] leading-none`}
                    style={{ color: C.azul }}
                  >
                    {TRATAMIENTOS[0].name}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-relaxed" style={{ color: C.mut }}>
                    {TRATAMIENTOS[0].desc}
                  </p>
                </div>
              </div>
            </div>
          </LuzOn>

          {/* Resto de tratamientos: lista editorial numerada */}
          <div role="list">
            {TRATAMIENTOS.slice(1).map((t, i) => (
              <LuzOn key={t.n} delay={i * 110}>
                <div
                  role="listitem"
                  className="grid grid-cols-[3.4rem_1fr] md:grid-cols-[5.5rem_1fr_1.2fr] gap-x-4 md:gap-x-8 items-baseline py-5 md:py-6 border-t"
                  style={{ borderColor: C.lineaC }}
                >
                  <span
                    className={`${display.className} italic text-3xl md:text-4xl leading-none`}
                    style={{ color: C.celeste }}
                    aria-hidden="true"
                  >
                    {t.n}
                  </span>
                  <h3
                    className={`${display.className} text-[1.65rem] md:text-[2rem] leading-tight`}
                    style={{ color: C.azul }}
                  >
                    {t.name}
                  </h3>
                  <p
                    className="col-start-2 md:col-start-3 mt-1 md:mt-0 text-sm md:text-base leading-relaxed"
                    style={{ color: C.mut }}
                  >
                    {t.desc}
                  </p>
                </div>
              </LuzOn>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Btn href={WA_LINK} tone="azul">
                Agenda tu hora por WhatsApp
              </Btn>
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.celesteInk, textDecorationColor: 'rgba(46,110,158,0.4)' }}
              >
                @{BIZ.instagram} en Instagram
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · La clínica: el box con vista + el detalle de la luz ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.azulNoche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 pb-24 md:pb-28 grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.celeste} lineColor="rgba(78,155,203,0.5)">
                La clínica
              </Rotulo>
              <h2
                className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,4.4rem)] mt-4`}
                style={{ color: C.blanco }}
              >
                Un box con vista{' '}
                <em style={{ color: C.celeste }}>a la ciudad.</em>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <blockquote
                className={`${display.className} italic text-[clamp(1.5rem,4.5vw,2.2rem)] leading-[1.15] mt-7`}
                style={{ color: 'rgba(255,255,255,0.92)' }}
              >
                “Servicios odontológicos con alta calidad técnica y
                humana”
              </blockquote>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.celeste }}>
                Así se define Sur Salud
              </p>
              <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: C.mutO }}>
                En Pedro Montt 160 el trabajo se hace con luz natural:
                el sillón mira al centro de Puerto Montt y la calma de
                la vista acompaña cada atención.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="relative">
              {/* cuadrícula del ventanal detrás de la foto */}
              <div
                className="absolute -top-5 -right-3 md:-right-6 w-52 h-52 md:w-72 md:h-72 rounded-2xl pointer-events-none"
                style={{ ...VENTANAL_OSCURO, border: '1px solid rgba(255,255,255,0.14)' }}
                aria-hidden="true"
              />
              <div
                className="relative overflow-hidden rounded-3xl aspect-[16/11]"
                style={{ border: `1px solid ${C.lineaO}`, boxShadow: '0 26px 60px rgba(0,0,0,0.4)' }}
              >
                <Image
                  src={`${IMG}/box.webp`}
                  alt="El box de Sur Salud: sillón azul, muebles claros y ventanal al centro de Puerto Montt"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-2 md:-left-8 w-[47%] max-w-[230px]">
                <div
                  className="relative overflow-hidden rounded-2xl aspect-square"
                  style={{ border: '4px solid #fff', boxShadow: '0 18px 44px rgba(0,0,0,0.45)' }}
                >
                  <Image
                    src={`${IMG}/atencion.webp`}
                    alt="Profesional de Sur Salud atendiendo con lupas de aumento y la luz del equipo encendida"
                    fill
                    sizes="230px"
                    className="object-cover"
                  />
                </div>
                <p
                  className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: C.mutO }}
                >
                  La luz puesta en el paciente
                </p>
              </div>
              <figcaption className="sr-only">
                El box de Sur Salud en Pedro Montt 160
              </figcaption>
            </figure>
          </Reveal>
        </div>
        {/* separador: el trazo curvo que sube */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14" aria-hidden="true">
          <svg className="w-full h-10 md:h-14" viewBox="0 0 1200 56" preserveAspectRatio="none">
            <path
              d="M0 50 C 300 10, 620 6, 900 22 C 1020 29, 1120 40, 1200 50"
              fill="none"
              stroke={C.celeste}
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.6"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </section>

      {/* ── 4 · Opiniones: la nota perfecta y las 3 citas ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.niebla }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.8fr_1.5fr] gap-10 lg:gap-16 items-start">
            <Reveal>
              <Rotulo color={C.celesteInk} lineColor="rgba(46,110,158,0.4)">
                Opiniones en Google
              </Rotulo>
              <div className="mt-6 flex items-end gap-5">
                <span
                  className={`${display.className} leading-[0.85] text-[clamp(5.5rem,18vw,9rem)]`}
                  style={{ color: C.azul }}
                >
                  {BIZ.rating}
                </span>
                <div className="pb-2">
                  <Stars value={BIZ.ratingValue} color={C.madera} size={18} />
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mut }}>
                    {BIZ.reviews} opiniones
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-xs font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.celesteInk, textDecorationColor: 'rgba(46,110,158,0.4)' }}
                  >
                    Ver la ficha en Google
                  </a>
                </div>
              </div>
              <p className="mt-5 max-w-xs text-sm leading-relaxed" style={{ color: C.mut }}>
                Nota perfecta en su ficha de Google: lo que repiten los
                pacientes es la calma, el profesionalismo y la confianza.
              </p>
            </Reveal>
            <div>
              <Reveal>
                <blockquote
                  className="border-t pt-6"
                  style={{ borderColor: C.lineaC }}
                >
                  <span
                    className={`${display.className} block leading-[0.6] text-6xl`}
                    style={{ color: C.celeste }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p
                    className={`${display.className} italic text-[clamp(1.3rem,3.6vw,1.8rem)] leading-[1.3] mt-2`}
                    style={{ color: C.azul }}
                  >
                    {OPINIONES[0].text}
                  </p>
                  <footer className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.maderaInk }}>
                    {OPINIONES[0].author} · Google
                  </footer>
                </blockquote>
              </Reveal>
              <div className="grid sm:grid-cols-2 gap-x-10">
                {OPINIONES.slice(1).map((o, i) => (
                  <Reveal key={o.author} delay={120 + i * 110}>
                    <blockquote
                      className="border-t mt-8 pt-5"
                      style={{ borderColor: C.lineaC }}
                    >
                      <span
                        className={`${display.className} block leading-[0.6] text-4xl`}
                        style={{ color: C.celeste }}
                        aria-hidden="true"
                      >
                        “
                      </span>
                      <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.mut }}>
                        {o.text}
                      </p>
                      <footer className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.maderaInk }}>
                        {o.author} · Google
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Horario y ubicación sobre la cuadrícula del ventanal ── */}
      <section
        id="visita"
        className="scroll-mt-20"
        style={{ ...VENTANAL_CLARO, backgroundColor: C.blanco }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.celesteInk} lineColor="rgba(46,110,158,0.4)">
                Horario y dirección
              </Rotulo>
              <h2
                className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,4.4rem)] mt-4`}
                style={{ color: C.azul }}
              >
                Pedro Montt 160,{' '}
                <em style={{ color: C.celesteInk }}>en pleno centro.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address className="not-italic mt-6 text-base leading-relaxed" style={{ color: C.mut }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.azul, textDecorationColor: 'rgba(46,110,158,0.4)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-7 max-w-md">
                {HORARIO.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3 border-t last:border-b"
                    style={{ borderColor: C.lineaC }}
                  >
                    <span className="text-sm font-bold" style={{ color: C.azul }}>
                      {h.d}
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: h.h === 'Cerrado' ? C.maderaInk : C.mut }}
                    >
                      {h.h}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Btn href={WA_LINK} tone="azul">
                  Agenda por WhatsApp
                </Btn>
                <Btn href={BIZ.instagramUrl} tone="linea">
                  Instagram
                </Btn>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.celesteInk, textDecorationColor: 'rgba(46,110,158,0.4)' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="relative w-full overflow-hidden rounded-3xl h-[320px] md:h-auto md:aspect-[4/3]"
              style={{ border: `1px solid ${C.lineaC}`, boxShadow: '0 20px 48px rgba(14,42,73,0.14)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Footer compacto con el logo chico ── */}
      <footer style={{ backgroundColor: C.azulFondo, color: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-3.5">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full"
              />
              <div>
                <p className={`${display.className} text-xl md:text-2xl leading-none`}>
                  {BIZ.name}
                </p>
                <p className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.66)' }}>
                  {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(255,255,255,0.82)' }}
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.blanco }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.celeste }}
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
