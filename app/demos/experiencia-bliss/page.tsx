import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, SELLOS, OPINIONES, IMG } from './content'

// Baloo 2 para los titulares (redonda y amable, como su mascota)
// y Nunito para el texto: la voz cercana de sus piezas.
const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// La marca Bliss: su morado, el lila de sus piezas, el uva oscuro del
// contorno de la mascota, el rosa mejilla y la menta del cepillo.
const C = {
  morado: '#5A2D86',
  moradoSuave: '#7C5AAE',
  lila: '#EFE5FA',
  lilaCard: '#E3D3F5',
  uva: '#2E1747',
  rosa: '#F6A9BE',
  rosaInk: '#C14E74', // rosa oscuro: 4.7:1 sobre blanco y lila
  menta: '#BFEFE3',
  mentaInk: '#1E6E5B', // menta oscura: 4.7:1 sobre blanco
  blanco: '#FFFFFF',
  mutL: 'rgba(46,23,71,0.74)', // sobre lila/blanco
  mutD: 'rgba(239,229,250,0.76)', // sobre uva/morado
  lineL: 'rgba(46,23,71,0.14)',
  lineD: 'rgba(239,229,250,0.18)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'experiencia-bliss',
  title: 'Experiencia Bliss · Clínica dental en Concepción',
  description:
    'Clínica dental en Concepción: odontopediatría, ortodoncia, limpieza dental y sedación consciente para niños y adultos. 5,0 con 174 opiniones en Google. Agenda tu evaluación por WhatsApp.',
  image: `${IMG}/doctora-modelo.webp`,
})

const NAV_LINKS = [
  { label: 'Niños', href: '#ninos' },
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Sedación', href: '#sedacion' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const FRANJA = [
  'ODONTOPEDIATRÍA',
  'ORTODONCIA',
  'LIMPIEZA DENTAL',
  'BLANQUEAMIENTO',
  'SEDACIÓN CONSCIENTE',
] as const

const BURBUJAS = [
  { left: '5%', size: 15, t: '12s', d: '-3s' },
  { left: '15%', size: 9, t: '14s', d: '-8s' },
  { left: '33%', size: 19, t: '16s', d: '-11s' },
  { left: '52%', size: 11, t: '13s', d: '-5s' },
  { left: '72%', size: 17, t: '15s', d: '-9s' },
  { left: '88%', size: 10, t: '11s', d: '-1.5s' },
  { left: '95%', size: 13, t: '14s', d: '-6.5s' },
] as const

const TRATAMIENTOS = [
  {
    icono: 'brackets',
    nombre: 'Ortodoncia interceptiva y brackets',
    desc: 'La ortodoncia interceptiva permite detectar y corregir problemas a tiempo; brackets para alinear sonrisas en crecimiento y adultas.',
    foto: true,
  },
  {
    icono: 'brillo',
    nombre: 'Limpieza dental profesional',
    desc: 'Destartraje y pulido periódico: la base de la cultura de prevención que practican en cada consulta.',
  },
  {
    icono: 'sol',
    nombre: 'Blanqueamiento dental',
    desc: 'Siempre previa evaluación: primero se revisa tu salud dental y después se conversa el tratamiento.',
  },
  {
    icono: 'escudo',
    nombre: 'Caries y pulpotomía',
    desc: 'Tratamiento de caries en dientes definitivos y pulpotomía en dientes de leche, con calma y explicaciones.',
  },
  {
    icono: 'diente',
    nombre: 'Extracciones y muelas del juicio',
    desc: 'Cuando una pieza no tiene solución o las muelas del juicio molestan, se evalúa y se planifica contigo.',
  },
  {
    icono: 'globo',
    nombre: 'Terapia miofuncional',
    desc: 'Ejercicios para la musculatura de la boca y la cara: respiración, deglución y hábitos que acompañan al tratamiento.',
  },
] as const

const PARA_NINOS = [
  'Odontopediatría: la primera visita se hace amigable',
  'Ortodoncia interceptiva: detectar y corregir a tiempo',
  'Pulpotomía en dientes de leche cuando hace falta',
] as const

/** Estrellita de cuatro puntas: la chispa que dibujan alrededor de su mascota. */
function Chispa({
  className = 'w-4 h-4',
  color = C.morado,
  d = '1s',
}: {
  className?: string
  color?: string
  d?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`eb-chispa ${className}`}
      style={{ '--d': d } as CSSProperties}
      aria-hidden="true"
    >
      <path d="M12 1.5l2.5 8 8 2.5-8 2.5-2.5 8-2.5-8-8-2.5 8-2.5Z" fill={color} />
    </svg>
  )
}

/** Palabra del titular que sube dentro de su propia máscara. */
function W({ d, children }: { d: string; children: React.ReactNode }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span className="eb-palabra inline-block" style={{ '--d': d } as CSSProperties}>
        {children}
      </span>
    </span>
  )
}

/** Rótulo de sección con chispa. */
function Rotulo({ children, color = C.morado }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${display.className} flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5`}
      style={{ color }}
    >
      <Chispa className="w-3 h-3 shrink-0" color={color} d="0s" />
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
  tone: 'morado' | 'linea' | 'blanco' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'morado'
      ? { backgroundColor: C.morado, color: C.blanco }
      : tone === 'blanco'
        ? { backgroundColor: C.blanco, color: C.uva }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.morado}`, color: C.morado }
          : { border: '1.5px solid rgba(239,229,250,0.55)', color: C.lila }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="eb-btn inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function IconWa({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

/** Diente en trazo: sello gráfico del demo. */
function Diente({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4.5C9 3 5.5 4 5.5 8c0 3.5 1.3 5 2 9 .4 2.6 2.3 2.6 3-.2l1-3.4c.2-.8.8-.8 1 0l1 3.4c.7 2.8 2.6 2.8 3 .2.7-4 2-5.5 2-9 0-4-3.5-5-6.5-2.5Z" />
    </svg>
  )
}

/** Iconos de tratamientos, en trazo redondo. */
function IconoServicio({ tipo, className = 'w-6 h-6' }: { tipo: string; className?: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  switch (tipo) {
    case 'brackets':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
          <path d="M3 13.5h18" />
          <rect x="5.5" y="10" width="4" height="7" rx="1.2" />
          <rect x="10" y="10" width="4" height="7" rx="1.2" />
          <rect x="14.5" y="10" width="4" height="7" rx="1.2" />
        </svg>
      )
    case 'brillo':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
          <path d="M12 4l1.8 5.2L19 11l-5.2 1.8L12 18l-1.8-5.2L5 11l5.2-1.8Z" />
          <path d="M18.5 15.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8Z" />
        </svg>
      )
    case 'sol':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5 5l1.8 1.8M17.2 17.2L19 19M19 5l-1.8 1.8M6.8 17.2L5 19" />
        </svg>
      )
    case 'escudo':
      return (
        <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
          <path d="M12 3l7 2.5V11c0 5-3 8-7 9.5C8 19 5 16 5 11V5.5Z" />
          <path d="M9 11.5l2 2 4-4.5" />
        </svg>
      )
    case 'diente':
      return <Diente className={className} />
    default:
      return (
        <svg viewBox="0 0 24 24" className={className} {...p} aria-hidden="true">
          <path d="M4 11a8 6 0 0 1 16 0c0 3.5-3.5 6-8 6H9l-4 3v-5.2A6.5 6.5 0 0 1 4 11Z" />
          <path d="M9 10.5h.01M13 10.5h.01M15.5 10.5h.01" />
        </svg>
      )
  }
}

export default function ExperienciaBlissPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.lila, color: C.uva }}
    >
      <style>{`
        /* La mascota llega: entra desde abajo con un rebote suave, una vez. */
        @keyframes eb-llega {
          0% { transform: translateY(48px) scale(.35); opacity: 0 }
          55% { transform: translateY(-10px) scale(1.07); opacity: 1 }
          76% { transform: translateY(4px) scale(.97) }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }
        .eb-mascota { animation: eb-llega 1.05s cubic-bezier(.3,1.3,.4,1) .5s both }

        /* Las chispitas aparecen escalonadas alrededor. */
        @keyframes eb-chispa {
          0% { transform: scale(0) rotate(-35deg); opacity: 0 }
          62% { transform: scale(1.3) rotate(10deg); opacity: 1 }
          100% { transform: scale(1) rotate(0deg); opacity: 1 }
        }
        .eb-chispa { transform-box: fill-box; transform-origin: center; animation: eb-chispa .6s cubic-bezier(.3,1.5,.5,1) both; animation-delay: var(--d, 1s) }

        /* Burbujas que suben suaves por detrás del hero. */
        @keyframes eb-burbuja {
          0% { transform: translateY(0); opacity: 0 }
          8% { opacity: .9 }
          82% { opacity: .9 }
          100% { transform: translateY(-1500px); opacity: 0 }
        }
        .eb-burbuja { animation: eb-burbuja var(--t, 12s) linear var(--d, 0s) infinite }

        /* Titular palabra por palabra. */
        @keyframes eb-palabra { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .eb-palabra { animation: eb-palabra .85s cubic-bezier(.22,.61,.2,1) both; animation-delay: var(--d, 0s) }

        /* El aro lila se dibuja alrededor de la foto. */
        @keyframes eb-aro { from { stroke-dashoffset: 1000 } to { stroke-dashoffset: 0 } }
        .eb-aro { animation: eb-aro 1.6s cubic-bezier(.45,.05,.3,1) 1.1s both }

        @keyframes eb-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .eb-sube { animation: eb-sube .8s ease-out both; animation-delay: var(--d, 0s) }

        /* Medidor de calma: se llena de miedo a tranquilidad al hacer scroll. */
        @supports (animation-timeline: view()) {
          .eb-calma { transform: scaleX(0); transform-origin: left center; animation: eb-calma linear both; animation-timeline: view(); animation-range: entry 15% entry 80% }
          @keyframes eb-calma { to { transform: scaleX(1) } }
        }

        .eb-btn { transition: transform .18s ease, filter .18s ease }
        .eb-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .eb-btn:active { transform: scale(.97) }
        .eb-btn:focus-visible { outline: 3px solid ${C.moradoSuave}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .eb-mascota, .eb-chispa, .eb-burbuja, .eb-palabra, .eb-aro, .eb-sube, .eb-calma { animation: none !important }
          .eb-aro { stroke-dashoffset: 0 !important }
          .eb-calma { transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" width={500} height={500} className="h-8 w-8 shrink-0 rounded-full" aria-hidden="true" />
            <span className={`${display.className} font-bold tracking-[0.01em] truncate`}>
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(239,229,250,0.94)',
          ink: C.uva,
          line: C.lineL,
          btnBg: C.morado,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero lila: la sonrisa que llega ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.lila }}>
        {/* Burbujas suaves detrás de todo el hero */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {BURBUJAS.map((b, i) => (
            <span
              key={i}
              className="eb-burbuja absolute rounded-full"
              style={{
                left: b.left,
                top: '102%',
                width: b.size,
                height: b.size,
                backgroundColor: 'rgba(255,255,255,0.55)',
                border: '1.5px solid rgba(90,45,134,0.16)',
                '--t': b.t,
                '--d': b.d,
              } as CSSProperties}
            />
          ))}
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(560px 380px at 90% 6%, rgba(191,239,227,0.5), transparent 62%), radial-gradient(480px 360px at 4% 96%, rgba(246,169,190,0.35), transparent 62%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[100px] md:pt-[136px] pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <p
              className="eb-sube flex items-center gap-3 text-[10px] md:text-[11px] font-extrabold uppercase tracking-[0.3em]"
              style={{ color: C.morado, '--d': '0.15s' } as CSSProperties}
            >
              <span className="h-px w-8 shrink-0" style={{ backgroundColor: C.morado }} aria-hidden="true" />
              Clínica dental · Concepción
            </p>
            <h1
              className={`${display.className} mt-5 font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.7rem,10.5vw,5.2rem)]`}
            >
              <W d="0.3s">Ir</W> <W d="0.38s">al</W> <W d="0.46s">dentista</W>
              <br />
              <span style={{ color: C.morado }}>
                <W d="0.58s">sin</W> <W d="0.66s">miedo.</W>
              </span>
            </h1>
            <p
              className="eb-sube mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutL, '--d': '0.85s' } as CSSProperties}
            >
              Odontopediatría, ortodoncia, limpieza dental y sedación
              consciente para niños y adultos, con paciencia y
              explicaciones claras.
            </p>
            <div
              className="eb-sube mt-7 flex flex-wrap gap-3"
              style={{ '--d': '1s' } as CSSProperties}
            >
              <BtnWa tone="morado">
                <IconWa />
                Agenda tu evaluación
              </BtnWa>
              <BtnWa tone="linea" href={BIZ.booking}>
                Ver su Instagram
              </BtnWa>
            </div>
            <div
              className="eb-sube mt-6 flex items-center gap-2.5"
              style={{ '--d': '1.15s' } as CSSProperties}
            >
              <Stars value={BIZ.ratingValue} color="#E8A33D" size={16} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tap-44"
                style={{ color: C.mutL }}
              >
                <strong className="font-extrabold" style={{ color: C.uva }}>
                  {BIZ.rating}
                </strong>
                {' '}· {BIZ.reviews} opiniones en Google
              </a>
            </div>
          </div>

          {/* La profesional con su modelo gigante: arco, aro que se dibuja
              y la mascota que llega con destellos */}
          <figure className="relative lg:col-span-6 mx-auto w-[min(72vw,270px)] md:w-[380px] lg:w-[400px]">
            <div className="relative" style={{ aspectRatio: '9 / 12.5' }}>
              <svg
                className="absolute -inset-3 md:-inset-4 w-[calc(100%+24px)] md:w-[calc(100%+32px)] h-[calc(100%+24px)] md:h-[calc(100%+32px)] pointer-events-none"
                viewBox="0 0 112 160"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  className="eb-aro"
                  d="M8 156 V64 A48 48 0 0 1 104 64 V156"
                  stroke={C.moradoSuave}
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="1000"
                  pathLength={1000}
                />
              </svg>
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ borderRadius: '999px 999px 36px 36px' }}
              >
                <Image
                  src={`${IMG}/doctora-modelo.webp`}
                  alt="Profesional de Experiencia Bliss sonriendo con un modelo dental gigante en la clínica"
                  width={900}
                  height={1600}
                  priority
                  sizes="(min-width: 1024px) 400px, 72vw"
                  className="block h-full w-full object-cover"
                />
              </div>
              {/* Mascota que llega con su rebote y sus destellos */}
              {/* eslint-disable-next-line @next/next/no-img-element -- ilustración pequeña, carga directa */}
              <img
                src={`${IMG}/mascota-cepillo.webp`}
                alt=""
                width={821}
                height={513}
                className="eb-mascota absolute -top-7 -left-8 md:-top-9 md:-left-12 w-[112px] md:w-[148px] h-auto"
                style={{
                  filter: 'drop-shadow(0 10px 18px rgba(46,23,71,0.22))',
                  borderRadius: '22px',
                }}
                aria-hidden="true"
              />
              <Chispa className="absolute -top-3 right-2 w-5 h-5 md:w-6 md:h-6" color={C.morado} d="1.05s" />
              <Chispa className="absolute top-16 -right-3 w-4 h-4" color={C.rosaInk} d="1.25s" />
              <Chispa className="absolute -bottom-2 left-6 w-4 h-4 md:w-5 md:h-5" color={C.mentaInk} d="1.45s" />
              <Chispa className="absolute top-1/2 -left-5 w-3.5 h-3.5" color={C.morado} d="1.6s" />
            </div>
            <figcaption
              className="eb-sube mt-4 text-center text-[10px] font-extrabold uppercase tracking-[0.26em]"
              style={{ color: C.mutL, '--d': '1.4s' } as CSSProperties}
            >
              {BIZ.bio}
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · Franja de servicios sobre morado ── */}
      <div style={{ backgroundColor: C.morado }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10px] md:text-[11px] font-bold tracking-[0.28em]`}
          style={{ color: C.lila }}
        >
          {FRANJA.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              {i > 0 && <Chispa className="w-2.5 h-2.5" color={C.menta} d="0s" />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3 · Para los más chicos ── */}
      <section id="ninos" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Rotulo>Para los más chicos</Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.1rem,6.5vw,3.6rem)]`}
              >
                Los dientes de leche{' '}
                <span style={{ color: C.morado }}>sí importan…</span>
              </h2>
              <p
                className={`${display.className} mt-1 font-bold text-[clamp(1.4rem,4vw,2.2rem)]`}
                style={{ color: C.rosaInk }}
              >
                y mucho.
              </p>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                Aquí el dentista se vuelve un lugar tranquilo: explican
                cada paso, dejan que los niños miren su serie favorita y
                revisan con camarita. No esperes al dolor.
              </p>
              <ul className="mt-7 space-y-3.5">
                {PARA_NINOS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base font-semibold" style={{ color: C.uva }}>
                    <span
                      className="mt-0.5 w-6 h-6 shrink-0 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: C.menta, color: C.uva }}
                      aria-hidden="true"
                    >
                      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={140}>
              <figure
                className="relative rounded-[36px] p-6 md:p-10"
                style={{ backgroundColor: C.lila }}
              >
                <Chispa className="absolute top-5 right-7 w-5 h-5" color={C.morado} d="0s" />
                <Chispa className="absolute bottom-6 left-7 w-4 h-4" color={C.rosaInk} d="0s" />
                {/* eslint-disable-next-line @next/next/no-img-element -- ilustración propia del negocio */}
                <img
                  src={`${IMG}/mascota-pasta.webp`}
                  alt="La mascota de Experiencia Bliss, un diente feliz con su cepillo y pasta"
                  width={1037}
                  height={533}
                  loading="lazy"
                  className="block w-full h-auto"
                />
                <figcaption
                  className="mt-4 text-center text-[10px] font-extrabold uppercase tracking-[0.26em]"
                  style={{ color: C.mutL }}
                >
                  Su mascota los acompaña en cada visita
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Tratamientos ── */}
      <section id="tratamientos" className="scroll-mt-20" style={{ backgroundColor: C.lila }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-2xl mb-10 md:mb-14">
            <Reveal>
              <Rotulo>Tratamientos</Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.1rem,6.5vw,3.6rem)]`}
              >
                Todo empieza con{' '}
                <span style={{ color: C.morado }}>una evaluación.</span>
              </h2>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                Antes de cualquier tratamiento te escuchan, revisan y te
                explican con calma qué conviene hacer. Estos son sus
                servicios.
              </p>
            </Reveal>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {TRATAMIENTOS.map((t, i) => (
              <Reveal key={t.nombre} delay={i * 90}>
                <li
                  className="h-full rounded-[28px] overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: C.blanco,
                    border: `1.5px solid ${C.lineL}`,
                    boxShadow: '0 14px 34px rgba(46,23,71,0.08)',
                  }}
                >
                  {'foto' in t && t.foto ? (
                    <div className="relative aspect-[5/3] overflow-hidden">
                      <Image
                        src={`${IMG}/ortodoncia.webp`}
                        alt="Sonrisa con brackets: ortodoncia en Experiencia Bliss"
                        width={605}
                        height={486}
                        loading="lazy"
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <span
                      className="w-11 h-11 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: i % 2 === 0 ? C.lila : C.menta,
                        color: i % 2 === 0 ? C.morado : C.uva,
                      }}
                      aria-hidden="true"
                    >
                      <IconoServicio tipo={t.icono} />
                    </span>
                    <h3
                      className={`${display.className} text-xl md:text-[22px] font-bold leading-snug mb-2`}
                      style={{ color: C.uva }}
                    >
                      {t.nombre}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.mutL }}>
                      {t.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 5 · Sedación consciente: el medidor de calma ── */}
      <section id="sedacion" className="scroll-mt-20" style={{ backgroundColor: C.uva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Rotulo color={C.menta}>Sedación consciente</Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.06] tracking-[-0.01em] text-[clamp(2.1rem,6.5vw,3.6rem)]`}
                style={{ color: C.lila }}
              >
                ¿Te pone nervioso{' '}
                <span style={{ color: C.rosa }}>el dentista?</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.mutD }}>
                <p>
                  «La sedación consciente busca favorecer una experiencia
                  más tranquila y cómoda, manteniendo al paciente
                  consciente durante la atención.»
                </p>
                <p>
                  «Pero para nosotros, no se trata solamente de la
                  sedación. Se trata de escuchar al paciente, entender
                  sus preocupaciones y acompañarlo durante todo el
                  proceso.»
                </p>
                <p className="text-sm" style={{ color: C.menta }}>
                  Sedación consciente con óxido nitroso, para pacientes
                  con miedo o ansiedad.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={140}>
              <div
                className="rounded-[32px] p-7 md:p-10"
                style={{ backgroundColor: 'rgba(239,229,250,0.07)', border: `1.5px solid ${C.lineD}` }}
              >
                <div className="flex items-end justify-between gap-4 mb-3">
                  <span className={`${display.className} text-sm md:text-base font-bold`} style={{ color: C.rosa }}>
                    miedo
                  </span>
                  <span className={`${display.className} text-sm md:text-base font-bold`} style={{ color: C.menta }}>
                    tranquilidad
                  </span>
                </div>
                <div
                  className="h-5 md:h-6 rounded-full overflow-hidden"
                  style={{ backgroundColor: 'rgba(246,169,190,0.28)' }}
                  role="img"
                  aria-label="Medidor que se llena de miedo a tranquilidad"
                >
                  <div
                    className="eb-calma h-full w-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${C.rosa} 0%, ${C.menta} 100%)` }}
                  />
                </div>
                <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.mutD }}>
                  Sigues despierto y acompañado en todo momento: el
                  óxido nitroso solo ayuda a que la visita se sienta más
                  liviana.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <BtnWa tone="blanco">Conversemos por WhatsApp</BtnWa>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Opiniones: 5,0 con 174 ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-4">
              <Reveal>
                <Rotulo>Opiniones</Rotulo>
                <p
                  className={`${display.className} font-bold leading-none text-[clamp(4.5rem,16vw,7rem)]`}
                  style={{ color: C.morado }}
                >
                  {BIZ.rating}
                </p>
                <Stars value={BIZ.ratingValue} color="#E8A33D" size={22} className="mt-3" />
                <p className="mt-3 text-sm md:text-base" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones en Google. Lo que más se repite:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {SELLOS.map((s) => (
                    <li
                      key={s}
                      className="text-xs font-bold px-3.5 py-2 rounded-full"
                      style={{ backgroundColor: C.lila, color: C.morado }}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <ul className="lg:col-span-8 grid md:grid-cols-1 gap-5">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.author} delay={i * 110}>
                  <li
                    className="relative rounded-[28px] rounded-tl-[8px] p-6 md:p-8"
                    style={{
                      backgroundColor: C.lila,
                      border: `1.5px solid ${C.lineL}`,
                    }}
                  >
                    <Chispa className="absolute top-5 right-6 w-4 h-4" color={C.moradoSuave} d="0s" />
                    <p className="text-base md:text-lg leading-relaxed pr-10" style={{ color: C.uva }}>
                      «{o.text}»
                    </p>
                    <p className="mt-4 flex items-center gap-3">
                      <span
                        className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-extrabold"
                        style={{ backgroundColor: C.morado, color: C.blanco }}
                        aria-hidden="true"
                      >
                        {o.author.charAt(0)}
                      </span>
                      <span className="text-sm font-bold" style={{ color: C.uva }}>
                        {o.author}
                      </span>
                      <span className="text-xs" style={{ color: C.mutL }}>
                        opinión en Google
                      </span>
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 7 · El equipo ── */}
      <section id="equipo" className="scroll-mt-20" style={{ backgroundColor: C.lila }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <figure className="relative rounded-[32px] overflow-hidden" style={{ boxShadow: '0 18px 46px rgba(46,23,71,0.16)' }}>
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="El equipo de Experiencia Bliss con el letrero #ExperienciaBliss"
                  width={1200}
                  height={1600}
                  loading="lazy"
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="block w-full h-auto"
                />
              </figure>
            </Reveal>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <Reveal>
              <Rotulo>El equipo</Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.1rem,6.5vw,3.6rem)]`}
              >
                Personas que{' '}
                <span style={{ color: C.morado }}>te escuchan primero.</span>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                En Experiencia Bliss la atención parte por entender tus
                preocupaciones: cada paso se explica antes de hacerlo y
                el ritmo lo pones tú. Así se vive la experiencia, en
                niños y en adultos.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <BtnWa tone="morado">
                  <IconWa />
                  Agenda tu evaluación
                </BtnWa>
                <BtnWa tone="linea" href={BIZ.instagram}>
                  <IconIg />
                  {BIZ.instagramUser}
                </BtnWa>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 8 · Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.blanco }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-12 md:mb-16">
            <div className="lg:col-span-6">
              <Reveal>
                <Rotulo>Cómo llegar</Rotulo>
                <h2
                  className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.1rem,6.5vw,3.6rem)]`}
                >
                  El mural morado{' '}
                  <span style={{ color: C.morado }}>no se pierde.</span>
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  <strong className="font-extrabold" style={{ color: C.uva }}>
                    {BIZ.address}
                  </strong>
                  <br />
                  {BIZ.city}, región del {BIZ.region}
                  <br />
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="inline-block mt-1 font-extrabold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.morado, textDecorationColor: C.rosa }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <ul className="mt-6 space-y-2.5">
                  {HORARIO.map((h) => (
                    <li key={h.d} className="flex items-baseline gap-3 text-sm md:text-base">
                      <Diente className="w-4 h-4 shrink-0 translate-y-[3px]" color={C.morado} />
                      <span className="font-bold" style={{ color: C.uva }}>{h.d}</span>
                      <span className="flex-1 border-b border-dotted" style={{ borderColor: C.lineL }} aria-hidden="true" />
                      <span style={{ color: C.mutL }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <BtnWa tone="morado" href={MAPS_URL}>Cómo llegar</BtnWa>
                  <BtnWa tone="linea" href={BIZ.booking}>Ver su Instagram</BtnWa>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <figure className="relative rounded-[32px] overflow-hidden" style={{ boxShadow: '0 18px 46px rgba(46,23,71,0.14)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Mural morado de Experiencia Bliss con su teléfono, en Marina de Chile 2889, Concepción"
                    width={1600}
                    height={943}
                    loading="lazy"
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="block w-full h-auto"
                  />
                </figure>
                <figcaption
                  className="mt-3 text-[10px] font-extrabold uppercase tracking-[0.26em]"
                  style={{ color: C.mutL }}
                >
                  Su fachada en Marina de Chile
                </figcaption>
              </Reveal>
            </div>
          </div>
          <Reveal>
            <div
              className="relative w-full overflow-hidden rounded-[32px] aspect-[16/10] min-h-[280px]"
              style={{ border: `1.5px solid ${C.lineL}`, boxShadow: '0 18px 46px rgba(46,23,71,0.12)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.mapsName}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Cierre: Prevención es Bliss ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.morado }}>
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {BURBUJAS.slice(0, 4).map((b, i) => (
            <span
              key={i}
              className="eb-burbuja absolute rounded-full"
              style={{
                left: b.left,
                top: '102%',
                width: b.size,
                height: b.size,
                backgroundColor: 'rgba(239,229,250,0.18)',
                border: '1.5px solid rgba(239,229,250,0.3)',
                '--t': b.t,
                '--d': b.d,
              } as CSSProperties}
            />
          ))}
        </div>
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element -- mascota del negocio */}
            <img
              src={`${IMG}/mascota-cepillo.webp`}
              alt=""
              width={821}
              height={513}
              loading="lazy"
              className="mx-auto w-[150px] md:w-[180px] h-auto rounded-[26px]"
              style={{ boxShadow: '0 16px 40px rgba(46,23,71,0.35)' }}
              aria-hidden="true"
            />
            <h2
              className={`${display.className} mt-7 font-bold leading-[1.04] text-[clamp(2.6rem,9vw,5rem)]`}
              style={{ color: C.blanco }}
            >
              Prevención{' '}
              <span style={{ color: C.menta }}>es Bliss.</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
              Vive la Experiencia Bliss: agenda tu evaluación y conoce
              una clínica pensada para ir sin miedo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <BtnWa tone="blanco">
                <IconWa />
                Agenda tu evaluación
              </BtnWa>
              <BtnWa tone="lineaD" href={BIZ.booking}>
                Ver su Instagram
              </BtnWa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.uva, color: C.lila }}>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className={`${display.className} text-xl md:text-2xl font-bold flex items-center gap-2.5`}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                  <img src={`${IMG}/logo.webp`} alt="" width={500} height={500} className="h-8 w-8 rounded-full" aria-hidden="true" />
                  {BIZ.name}
                </p>
                <p className="text-sm mt-1" style={{ color: C.mutD }}>
                  {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(239,229,250,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-1.5"
                  style={{ color: 'rgba(239,229,250,0.85)' }}
                >
                  <IconIg className="w-3.5 h-3.5" />
                  Instagram
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center font-bold"
                  style={{ color: C.menta }}
                >
                  WhatsApp
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(239,229,250,0.62)' }}>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 tap-44"
                  style={{ color: C.lila }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.mapsName}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-2 tap-44"
                  style={{ color: C.menta }}
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
