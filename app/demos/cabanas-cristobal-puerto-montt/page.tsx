import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/**
 * Dirección de arte: «Puerto Montt a tus pies». Subir la escalera de la
 * ladera y encontrarse con la ciudad y el mar. El motivo es el peldaño:
 * una línea escalonada que sube de izquierda a derecha y remata rótulos,
 * separa secciones y enmarca fotos. Techo rojo del letrero, azul seno
 * del mar, amapola del jardín (solo detalles), cal blanca de las cabañas.
 * Gloock pone la voz de letrero tallado; Karla, el papel.
 */
const C = {
  cal: '#FBF7F0',
  papel: '#F3EBDC',
  azul: '#17405C',
  noche: '#0E2839',
  rojo: '#A8322A',
  rojoOsc: '#8E2A23',
  amapola: '#F08A24',
  amapolaLuz: '#F5A453', // paso claro: ≥4.9:1 sobre azul para versalitas chicas
  verde: '#3F6B45',
  mutC: 'rgba(23,64,92,0.72)',
  mutN: 'rgba(251,247,240,0.76)',
  lineL: 'rgba(23,64,92,0.18)',
  lineD: 'rgba(251,247,240,0.2)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-cristobal-puerto-montt',
  title: 'Cabañas Cristóbal · Cabañas con vista en Puerto Montt',
  description:
    'Cabañas de madera en la ladera de Wolleter 475, Puerto Montt, con vista a la ciudad y al mar. Atendidas por sus dueños. 4,8 en Google con 72 opiniones. Consulta disponibilidad por WhatsApp.',
  image: '/demos/cabanas-cristobal-puerto-montt/hero.webp',
})

const NAV_LINKS = [
  { label: 'La vista', href: '#vista' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Por dentro', href: '#dentro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// ── La escalera: polígono de recorte que sube peldaño por peldaño ──

/**
 * Recorte en forma de escalera que sube de izquierda a derecha.
 * `a` es la altura del primer peldaño (0 = foto completa, 100 = nada).
 */
function stairClip(a: number, steps = 6, rise = 6): string {
  const y = (i: number) => `${Math.max(0, a - rise * i).toFixed(1)}%`
  const x = (i: number) => `${((i * 100) / steps).toFixed(2)}%`
  let p = `0% 100%, 0% ${y(0)}`
  for (let i = 1; i < steps; i++) p += `, ${x(i)} ${y(i - 1)}, ${x(i)} ${y(i)}`
  p += `, 100% ${y(steps - 1)}, 100% 100%`
  return `polygon(${p})`
}

const SUBIDA_FRAMES = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100]
  .map((p, i) => `${p}% { clip-path: ${stairClip(100 - 12.5 * i)} }`)
  .join('\n')

// ── Piezas del motivo ──────────────────────────────────────────

/** El peldaño: una escalera que sube de izquierda a derecha. */
function Escalera({
  color = C.amapola,
  className = 'w-[46px] h-[24px]',
  steps = 4,
  sw = 5,
  draw = false,
}: {
  color?: string
  className?: string
  steps?: number
  sw?: number
  draw?: boolean
}) {
  const w = 120
  const h = 64
  const u = w / (steps + 1)
  const v = h / (steps + 1)
  let d = `M0 ${h}`
  for (let i = 0; i < steps; i++) d += ` h${u} v-${v}`
  d += ` h${u}`
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className={`${className} shrink-0`} fill="none" aria-hidden="true">
      <path
        className={draw ? 'cc-draw' : undefined}
        d={d}
        pathLength={draw ? 100 : undefined}
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={draw ? 100 : undefined}
      />
    </svg>
  )
}

/** Rótulo de sección: pequeña escalera + versalitas + línea que remata. */
function Rotulo({
  children,
  color = C.rojo,
  light = false,
}: {
  children: React.ReactNode
  color?: string
  light?: boolean
}) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5"
      style={{ color }}
    >
      <Escalera color={C.amapola} className="w-[34px] h-[18px]" steps={3} sw={9} />
      <span>{children}</span>
      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: light ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** La línea escalonada que separa secciones: una escalera que sube
    de izquierda a derecha, del color de la sección que queda atrás. */
function EscaleraDivisor({ fill, className = 'h-7 md:h-10' }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 720 40" preserveAspectRatio="none" aria-hidden="true" className={`block w-full ${className}`}>
      <path d="M0 40 L0 32 L144 32 L144 24 L288 24 L288 16 L432 16 L432 8 L576 8 L576 0 L720 0 L720 40 Z" fill={fill} />
    </svg>
  )
}

function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cc-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap tap-44 ${className}`}
      style={{ backgroundColor: C.rojo, color: C.cal }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

/** Cita sobre foto o bloque oscuro, con su peldaño en amapola. */
function Cita({
  text,
  author,
  light = true,
  big = false,
  className = '',
}: {
  text: string
  author: string
  light?: boolean
  big?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <Escalera color={C.amapola} className="w-[30px] h-[16px] mb-4" steps={3} sw={9} />
      <blockquote
        className={
          big
            ? `${display.className} leading-[1.18] text-[clamp(1.4rem,4vw,2.15rem)]`
            : 'text-base md:text-lg leading-relaxed'
        }
        style={{ color: light ? C.cal : C.azul }}
      >
        “{text}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-bold" style={{ color: light ? C.mutN : C.mutC }}>
        {author} · Google
      </figcaption>
    </figure>
  )
}

export default function CabanasCristobalPage() {
  return (
    <div className={`${body.className} ccr min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.cal, color: C.azul }}>
      <style>{`
        html { scroll-behavior: auto }
        .ccr a:focus-visible { outline: 2.5px solid ${C.amapola}; outline-offset: 3px }

        /* La subida: la foto héroe se revela de abajo hacia arriba con un
           recorte escalonado, peldaño por peldaño (9 saltos en ~1,45 s). */
        @keyframes cc-sube {
${SUBIDA_FRAMES}
        }
        .cc-sube { animation: cc-sube 1.45s steps(1) 0.5s both }

        /* La escalera se dibuja junto al titular, un peldaño tras otro. */
        @keyframes cc-draw { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .cc-draw { stroke-dashoffset: 100; animation: cc-draw 1.25s cubic-bezier(.55,.06,.35,1) 0.2s both }

        /* El titular entra por líneas al terminar la escalera. */
        @keyframes cc-up { from { transform: translateY(112%) } to { transform: none } }
        .cc-line { display: inline-block; animation: cc-up .9s cubic-bezier(.22,.61,.2,1) both; animation-delay: var(--d, 0s) }
        @keyframes cc-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .cc-fade { animation: cc-fade .9s ease-out both; animation-delay: var(--d, 0s) }

        .cc-btn { transition: transform .18s ease, filter .18s ease }
        .cc-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .cc-btn:active { transform: scale(.97) }

        /* La vista: la foto hace un zoom lento y una línea de horizonte
           la cruza al hacer scroll. */
        @supports (animation-timeline: view()) {
          .cc-zoom { transform: scale(1.08); animation: cc-zoom linear both; animation-timeline: view(); animation-range: entry 0% entry 85%; }
          @keyframes cc-zoom { to { transform: scale(1) } }
          .cc-hor { transform: scaleX(0); transform-origin: 0 50%; animation: cc-hor linear both; animation-timeline: view(); animation-range: entry 8% cover 55%; }
          @keyframes cc-hor { to { transform: scaleX(1) } }
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-sube, .cc-draw, .cc-line, .cc-fade { animation: none !important }
          .cc-sube { clip-path: none !important }
          .cc-draw { stroke-dashoffset: 0 !important }
          .cc-zoom, .cc-hor { animation: none !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-xl md:text-[22px] tracking-[0.01em] truncate`}>
            Cabañas Cristóbal
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(251,247,240,0.95)',
          ink: C.azul,
          line: C.lineL,
          btnBg: C.rojo,
          btnInk: C.cal,
        }}
      />

      {/* ── 1 · Hero: la subida ── */}
      <section id="inicio" className="relative min-h-svh overflow-hidden flex flex-col justify-end" style={{ backgroundColor: C.noche }}>
        <div className="cc-sube absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Cabañas de madera con techo rojo en la ladera, escalera, terraza y el letrero tallado de Cabañas Cristóbal entre flores"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '58% 62%' }}
          />
        </div>
        {/* Velo de lectura: el texto siempre va sobre fondo oscuro */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,40,57,0.62) 0%, rgba(14,40,57,0.2) 38%, rgba(11,30,44,0.9) 100%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-28 pb-11 md:pb-14">
          <p className="cc-fade flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4" style={{ color: C.cal, '--d': '0.15s' } as CSSProperties}>
            <Escalera color={C.amapola} className="w-[30px] h-[16px]" steps={3} sw={9} />
            <span>Puerto Montt · Wolleter 475</span>
          </p>

          <div className="mb-6" aria-hidden="true">
            <Escalera draw color={C.amapola} className="w-[132px] md:w-[168px] h-auto" steps={6} sw={4.2} />
          </div>

          <h1
            className={`${display.className} leading-[1.02] tracking-[0.005em] text-[clamp(2.7rem,10.5vw,5.8rem)]`}
            style={{ color: C.cal }}
          >
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span className="cc-line" style={{ '--d': '1.45s' } as CSSProperties}>Puerto Montt</span>
            </span>
            <span className="block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span className="cc-line" style={{ '--d': '1.6s', color: C.amapola } as CSSProperties}>a tus pies.</span>
            </span>
          </h1>

          <p
            className="cc-fade mt-6 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(251,247,240,0.92)', '--d': '1.8s' } as CSSProperties}
          >
            Cabañas de madera en la ladera, con vista a la ciudad y al
            mar, atendidas por sus dueños.
          </p>

          <div className="cc-fade mt-7 flex flex-col sm:flex-row gap-3" style={{ '--d': '1.95s' } as CSSProperties}>
            <BtnWa className="w-full sm:w-auto">Consulta disponibilidad por WhatsApp</BtnWa>
            <a
              href="#vista"
              className="cc-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-sm md:text-base font-bold tap-44"
              style={{ border: '1.5px solid rgba(251,247,240,0.6)', color: C.cal, backgroundColor: 'rgba(14,40,57,0.35)' }}
            >
              Ver la vista
            </a>
          </div>

          <div className="cc-fade mt-7 flex flex-wrap items-center gap-x-4 gap-y-2" style={{ '--d': '2.1s' } as CSSProperties}>
            <Stars value={BIZ.ratingValue} color={C.amapola} size={16} />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tap-44"
              style={{ color: 'rgba(251,247,240,0.9)' }}
            >
              <strong className="font-bold" style={{ color: C.cal }}>{BIZ.rating}</strong>
              {' '}· {BIZ.reviews} opiniones en Google
            </a>
          </div>
        </div>
      </section>

      {/* ── 2 · La vista: horizonte que cruza la foto ── */}
      <section id="vista" className="scroll-mt-20" style={{ backgroundColor: C.azul, color: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.amapolaLuz} light>La vista</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
              <h2 className={`${display.className} leading-[1.04] text-[clamp(2.1rem,6.5vw,3.9rem)]`}>
                la ciudad abajo,
                <br />
                <span style={{ color: C.amapola }}>el mar al fondo.</span>
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutN }}>
                Desde la terraza se ve todo el sector costero de Puerto
                Montt: los techos, el seno y el borde de la ciudad.
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <figure className="relative overflow-hidden" style={{ boxShadow: '0 26px 70px rgba(9,24,36,0.5)' }}>
              <div className="cc-zoom">
                <Image
                  src={`${IMG}/terraza-vista.webp`}
                  alt="Terraza de madera con sillas y mesa mirando la ciudad y el mar de Puerto Montt"
                  width={1200}
                  height={900}
                  sizes="(min-width: 1024px) 90vw, calc(100vw - 2.5rem)"
                  className="block w-full h-auto"
                />
              </div>
              {/* la línea del horizonte que cruza la foto */}
              <div
                aria-hidden="true"
                className="cc-hor absolute left-0 right-0 top-[38%] h-[3px] pointer-events-none"
                style={{ background: `linear-gradient(90deg, ${C.amapola} 0%, rgba(240,138,36,0.85) 60%, rgba(240,138,36,0) 100%)` }}
              />
              {/* cita superpuesta */}
              <figcaption
                className="absolute inset-x-0 bottom-0 pt-14 pb-5 px-5 md:px-8 md:pb-7"
                style={{ background: 'linear-gradient(180deg, rgba(14,40,57,0) 0%, rgba(14,40,57,0.88) 82%)' }}
              >
                <blockquote className="max-w-2xl text-[13px] md:text-base leading-relaxed" style={{ color: 'rgba(251,247,240,0.95)' }}>
                  “{REVIEWS[0].text}”
                </blockquote>
                <p className="mt-2.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em]" style={{ color: C.amapolaLuz }}>
                  {REVIEWS[0].author} · Google
                </p>
              </figcaption>
            </figure>
            <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.22em]" style={{ color: C.mutN }}>
              La terraza sobre el sector costero
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · El lugar: composición escalonada ── */}
      <section id="lugar" className="scroll-mt-20" style={{ backgroundColor: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo>El lugar</Rotulo>
                <h2 className={`${display.className} leading-[1.04] text-[clamp(2.1rem,6.5vw,3.7rem)]`} style={{ color: C.azul }}>
                  cabañas en la ladera,
                  <br />
                  <span style={{ color: C.rojo }}>un jardín que sube.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.mutC }}>
                  Las cabañas blancas se escalonan en la ladera: para
                  llegar se sube por escaleras entre el jardín, con flores
                  y terrazas en cada tramo. Arriba esperan la ciudad y el
                  mar de frente.
                </p>
                <ul className="mt-8 space-y-0 max-w-md">
                  {['Escaleras y terrazas en la ladera', 'Jardín con flores alrededor', 'Atendidas por sus propios dueños'].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3 border-b text-[15px] md:text-base font-semibold"
                      style={{ borderColor: C.lineL, color: C.azul }}
                    >
                      <Escalera color={C.verde} className="w-[22px] h-[12px] shrink-0" steps={2} sw={11} />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                {/* la hilera de cabañas, ordenada como peldaños */}
                <figure className="relative overflow-hidden" style={{ boxShadow: '0 22px 55px rgba(23,64,92,0.18)' }}>
                  <Image
                    src={`${IMG}/ladera.webp`}
                    alt="Cabañas blancas escalonadas en la ladera con escaleras y jardín entre ellas"
                    width={1200}
                    height={675}
                    sizes="(min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                    className="block w-full h-auto"
                  />
                </figure>
                <div className="flex gap-4 md:gap-6 mt-4 md:mt-6 items-start">
                  <figure className="w-[46%] overflow-hidden" style={{ boxShadow: '0 14px 38px rgba(23,64,92,0.16)' }}>
                    <Image
                      src={`${IMG}/cabana.webp`}
                      alt="Cabaña blanca con terraza de madera y la ciudad al fondo"
                      width={540}
                      height={960}
                      sizes="(min-width: 1024px) 22vw, 46vw"
                      className="block w-full h-auto"
                    />
                  </figure>
                  {/* el letrero baja un peldaño */}
                  <figure
                    className="w-[50%] mt-9 md:mt-14 overflow-hidden"
                    style={{
                      boxShadow: '0 16px 42px rgba(23,64,92,0.2)',
                      clipPath: 'polygon(0 3.5%, 5% 3.5%, 5% 0, 100% 0, 100% 100%, 0 100%)',
                    }}
                  >
                    <Image
                      src={`${IMG}/letrero.webp`}
                      alt="Letrero de madera tallado Cabañas Cristóbal entre amapolas naranjas"
                      width={640}
                      height={1067}
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="block w-full h-auto"
                    />
                  </figure>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · Por dentro: madera y orden ── */}
      <section id="dentro" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.verde}>Por dentro</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
              <h2 className={`${display.className} leading-[1.04] text-[clamp(2.1rem,6.5vw,3.7rem)]`} style={{ color: C.azul }}>
                madera por dentro,
                <br />
                <span style={{ color: C.rojo }}>todo lo necesario.</span>
              </h2>
              <ul className="flex flex-wrap gap-2.5 max-w-sm">
                {['Cama y camarote', 'Living con TV', 'Cocina con refrigerador y microondas', 'Comedor'].map((item) => (
                  <li
                    key={item}
                    className="text-xs md:text-[13px] font-bold px-3.5 py-2 border"
                    style={{ borderColor: C.lineL, color: C.azul, backgroundColor: 'rgba(251,247,240,0.7)' }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-5 md:gap-7 items-start">
            <Reveal className="lg:col-span-7">
              <figure>
                <div className="overflow-hidden" style={{ boxShadow: '0 20px 50px rgba(23,64,92,0.16)' }}>
                  <Image
                    src={`${IMG}/dormitorio.webp`}
                    alt="Dormitorio revestido en madera con cama y camarote"
                    width={1200}
                    height={765}
                    sizes="(min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                    className="block w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutC }}>
                  <Escalera color={C.rojo} className="w-[20px] h-[11px] translate-y-[1px]" steps={2} sw={11} />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.azul }}>El dormitorio</strong>
                    {' '}· madera a la vista, camas muy cómodas
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:mt-14" delay={90}>
              <figure className="w-[74%] lg:w-full ml-auto lg:ml-0">
                <div className="overflow-hidden" style={{ boxShadow: '0 18px 44px rgba(23,64,92,0.16)' }}>
                  <Image
                    src={`${IMG}/living.webp`}
                    alt="Living de madera con TV, sillones de mimbre y mesa de centro"
                    width={904}
                    height={1200}
                    sizes="(min-width: 1024px) 40vw, 74vw"
                    className="block w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutC }}>
                  <Escalera color={C.rojo} className="w-[20px] h-[11px] translate-y-[1px]" steps={2} sw={11} />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.azul }}>El living</strong>
                    {' '}· sillones, TV y la luz de la ventana
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:mt-2" delay={60}>
              <figure className="w-[74%] lg:w-full">
                <div className="overflow-hidden" style={{ boxShadow: '0 18px 44px rgba(23,64,92,0.16)' }}>
                  <Image
                    src={`${IMG}/cocina.webp`}
                    alt="Cocina equipada con refrigerador, microondas y barra con taburetes"
                    width={904}
                    height={1200}
                    sizes="(min-width: 1024px) 40vw, 74vw"
                    className="block w-full h-auto"
                  />
                </div>
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutC }}>
                  <Escalera color={C.rojo} className="w-[20px] h-[11px] translate-y-[1px]" steps={2} sw={11} />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.azul }}>La cocina</strong>
                    {' '}· refrigerador, microondas y barra para comer
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-7 lg:mt-24" delay={110}>
              <Cita text={REVIEWS[1].text} author={REVIEWS[1].author} light={false} big className="max-w-2xl" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Paisaje: el volcán sobre los techos ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        <div className="absolute inset-x-0 top-0 z-10" aria-hidden="true">
          <EscaleraDivisor fill={C.papel} />
        </div>
        <Image
          src={`${IMG}/volcan.webp`}
          alt="Volcán nevado asomando sobre los techos de Puerto Montt"
          width={1200}
          height={900}
          sizes="100vw"
          className="block w-full h-[54vh] md:h-[62vh] object-cover"
          style={{ objectPosition: '50% 42%' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,40,57,0.35) 0%, rgba(14,40,57,0.12) 40%, rgba(11,30,44,0.82) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-12">
            <Reveal>
              <Escalera color={C.amapola} className="w-[30px] h-[16px] mb-4" steps={3} sw={9} />
              <p className={`${display.className} max-w-2xl leading-[1.14] text-[clamp(1.5rem,5.5vw,2.7rem)]`} style={{ color: C.cal }}>
                y cuando el cielo despeja, el volcán asoma sobre los techos de Puerto Montt.
              </p>
              <p className="mt-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.24em]" style={{ color: 'rgba(251,247,240,0.72)' }}>
                El paisaje del sector
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Lo que dicen: la nota que sube ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Lo que dicen</Rotulo>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <figure>
                  <blockquote
                    className={`${display.className} leading-[1.16] text-[clamp(1.55rem,5.2vw,2.7rem)]`}
                    style={{ color: C.azul }}
                  >
                    “{REVIEWS[2].text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 text-sm font-bold" style={{ color: C.mutC }}>
                    <span className="h-px w-8" style={{ backgroundColor: C.amapola }} aria-hidden="true" />
                    {REVIEWS[2].author} · Google
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <div className="lg:col-span-5 lg:mt-16">
              <Reveal delay={110}>
                <figure
                  className="p-5 md:p-6"
                  style={{
                    backgroundColor: C.papel,
                    boxShadow: '0 16px 40px rgba(23,64,92,0.12)',
                    clipPath: 'polygon(0 4%, 4% 4%, 4% 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.azul }}>
                    “{REVIEWS[3].text}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-bold" style={{ color: C.mutC }}>
                    {REVIEWS[3].author} · Google
                  </figcaption>
                </figure>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2.5 text-sm font-bold tap-44"
                  style={{ color: C.azul }}
                >
                  <Stars value={BIZ.ratingValue} color={C.amapola} size={15} />
                  {BIZ.rating} · {BIZ.reviews} opiniones en Google
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 13L13 3M6 3h7v7" />
                  </svg>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20 relative" style={{ backgroundColor: C.azul, color: C.cal }}>
        <div className="absolute inset-x-0 top-0 z-10 -mt-px" aria-hidden="true">
          <EscaleraDivisor fill={C.cal} />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <Rotulo color={C.amapolaLuz} light>Cómo llegar</Rotulo>
                <h2 className={`${display.className} leading-[1.04] text-[clamp(2.1rem,6.5vw,3.7rem)]`}>
                  Wolleter 475,
                  <br />
                  <span style={{ color: C.amapola }}>en la ladera.</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutN }}>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}. Las cabañas
                  quedan en la ladera sobre la ciudad; la subida es parte
                  de la llegada.
                </p>
                <div className="mt-8 max-w-md">
                  <h3 className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: C.amapolaLuz }}>
                    Disponibilidad
                  </h3>
                  <p className="py-3 border-b text-base" style={{ borderColor: C.lineD, color: C.mutN }}>
                    Consulta disponibilidad por WhatsApp: te responden los
                    mismos dueños.
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <BtnWa className="w-full sm:w-auto">Consulta por WhatsApp</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cc-btn inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm md:text-base font-bold tap-44"
                      style={{ border: '1.5px solid rgba(251,247,240,0.55)', color: C.cal, backgroundColor: 'rgba(14,40,57,0.3)' }}
                    >
                      Cómo llegar
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 13L13 3M6 3h7v7" />
                      </svg>
                    </a>
                  </div>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${display.className} mt-6 inline-block text-2xl md:text-3xl tap-44`} style={{ color: C.cal }}>
                    {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <div
                  className="overflow-hidden"
                  style={{
                    border: `1px solid ${C.lineD}`,
                    boxShadow: '0 24px 62px rgba(9,24,36,0.45)',
                    clipPath: 'polygon(0 4%, 4% 4%, 4% 0, 100% 0, 100% 100%, 0 100%)',
                  }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="block w-full h-[320px] md:h-[440px]"
                    style={{ border: 0, backgroundColor: C.cal }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.22em]" style={{ color: C.mutN }}>
                  {BIZ.address} · {BIZ.city} · {BIZ.region}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 · Footer ── */}
      <footer style={{ backgroundColor: C.noche, color: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${display.className} text-xl md:text-2xl flex items-center gap-3`}>
              <Escalera color={C.amapola} className="w-[26px] h-[14px]" steps={3} sw={9} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed mt-1.5" style={{ color: C.mutN }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44" style={{ color: C.cal }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.mutN }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.mutN }}>
            Fotos, dirección, WhatsApp, nota y reseñas son reales (Google
            Maps). Los textos y rótulos son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
