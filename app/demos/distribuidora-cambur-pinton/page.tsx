import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Estante } from './estante'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

// Passion One: gruesa y alegre, como su logo. Work Sans para el corrido.
const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// De su logo y su local: amarillo cambur, azul y rojo del rótulo,
// la madera de la entrada y crema de fondo.
const C = {
  amarillo: '#F7C600',
  amarilloEst: '#E3A90B', // estrellas legibles sobre crema
  azul: '#1640A8',
  azulNoche: '#0F2F7E',
  rojo: '#D7262E',
  rojoInk: '#B01E26', // rojo que pasa 4.5:1 sobre crema
  rojoPiz: '#FF4D55', // rojo tiza que pasa 4.5:1 sobre pizarra
  madera: '#B5753E',
  maderaInk: '#8A5527', // madera oscura que pasa 4.5:1 sobre crema
  crema: '#FFF9EC',
  papel: '#FFFDF6',
  tinta: '#1A1A2E',
  pizarra: '#15151F',
  mutL: 'rgba(26,26,46,0.70)',
  mutD: 'rgba(255,249,236,0.72)',
  lineL: 'rgba(26,26,46,0.16)',
  lineW: 'rgba(181,117,62,0.42)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'distribuidora-cambur-pinton',
  title: 'Distribuidora Cambur Pintón · Productos venezolanos en Puerto Montt',
  description:
    'Tienda de productos venezolanos en Arquen 5091, Puerto Montt: harina PAN, quesos llaneros, nata, malta y dulces de allá. 4,8 en Google. Pregunta por WhatsApp.',
  image: `${IMG}/tienda.webp`,
})

const NAV_LINKS = [
  { label: 'El estante', href: '#estante' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#donde' },
]

const TICKER = [
  'Harina PAN',
  'Queso llanero',
  'Nata criolla',
  'Suero',
  'Malta',
  'Samba',
  'Pirulín',
  'Toronto',
  'Diablitos',
  'Todo para arepas',
]

const PRODUCTOS = [
  {
    n: '01',
    titulo: 'Para arepas',
    texto: 'Harina PAN y lo que falta para las arepas de la casa.',
    estrella: C.amarilloEst,
  },
  {
    n: '02',
    titulo: 'Quesos y lácteos',
    texto: 'Queso llanero, nata criolla y suero, como los de allá.',
    estrella: C.azul,
  },
  {
    n: '03',
    titulo: 'Dulces y golosinas',
    texto: 'Samba, Pirulín, Toronto y esos antojos que no se olvidan.',
    estrella: C.rojo,
  },
  {
    n: '04',
    titulo: 'Bebidas',
    texto: 'Malta y las bebidas que se extrañan.',
    estrella: C.amarilloEst,
  },
  {
    n: '05',
    titulo: 'Enlatados y despensa',
    texto: 'Diablitos y enlatados para la despensa de la semana.',
    estrella: C.azul,
  },
]

/** Estrella de cinco puntas, la misma de su logo y de la reseña. */
function Estrella({
  color = C.amarillo,
  className = 'w-4 h-4',
}: {
  color?: string
  className?: string
}) {
  return (
    <svg viewBox="0 0 20 20" className={className} aria-hidden="true">
      <path
        d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z"
        fill={color}
      />
    </svg>
  )
}

/** El arco de 8 estrellas del motivo, como el detalle de su rótulo. */
function ArcoEstrellas({
  color = C.amarillo,
  className = '',
}: {
  color?: string
  className?: string
}) {
  const pts = (() => {
    const p: string[] = []
    for (let i = 0; i <= 9; i++) {
      const a = (-90 + i * 36) * (Math.PI / 180)
      const r = i % 2 === 0 ? 5 : 2.1
      p.push(`${i === 0 ? 'M' : 'L'}${(Math.cos(a) * r).toFixed(2)} ${(Math.sin(a) * r).toFixed(2)}`)
    }
    return p.join(' ') + ' Z'
  })()
  const cx = 110
  const cy = 104
  const R = 86
  return (
    <svg viewBox="0 0 220 118" className={className} aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => {
        const a = (180 - (i * 180) / 7) * (Math.PI / 180)
        const x = cx + R * Math.cos(a)
        const y = cy - R * Math.sin(a)
        return <path key={i} d={pts} transform={`translate(${x.toFixed(1)} ${y.toFixed(1)})`} fill={color} />
      })}
    </svg>
  )
}

/** El cambur del logo: cayendo al hero y quieto en las secciones. */
function Cambur({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" className={className} aria-hidden="true">
      <path
        d="M16 8 C14.6 5.4 18 3.2 20.4 5.6 C29.5 21.5 43.5 33.8 60.5 41.8 C65.8 44.2 66.8 50.4 62.6 53.6 C59.2 56.2 53.8 55.6 49.8 53.4 C33.2 44.4 21.2 29.6 14.8 12.4 C14 10.4 14.6 8.6 16 8 Z"
        fill={C.amarillo}
        stroke={C.tinta}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 13 C29 27.5 41.5 39.5 55.5 47"
        fill="none"
        stroke={C.maderaInk}
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M14.6 9.5 C13.8 7.4 15.2 4.6 17.6 4.4 C19.6 4.2 20.8 6 20.2 7.8 L17.4 10.6 Z"
        fill={C.maderaInk}
      />
    </svg>
  )
}

/** Rótulo de sección: estrella + texto en versalita + línea. */
function Rotulo({
  children,
  light = false,
  color,
}: {
  children: React.ReactNode
  light?: boolean
  color?: string
}) {
  const ink = color ?? (light ? C.amarillo : C.rojoInk)
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color: light ? 'rgba(255,249,236,0.85)' : C.mutL }}
    >
      <Estrella color={ink} className="w-3.5 h-3.5 shrink-0" />
      <span className="whitespace-nowrap">{children}</span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: light ? 'rgba(255,249,236,0.3)' : C.lineL }}
        aria-hidden="true"
      />
    </p>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone,
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone: 'azul' | 'amarillo' | 'linea'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'azul'
      ? { backgroundColor: C.azul, color: '#FFFFFF' }
      : tone === 'amarillo'
        ? { backgroundColor: C.amarillo, color: C.tinta }
        : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className={`cp-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${className}`}
      style={st}
    >
      {children}
    </a>
  )
}

/** Las 4 cuerdas del cuatro, cruzando el hero y vibrando al rasguear. */
function Cuerdas() {
  const cuerdas = [
    { top: '14%', d: '0.30s' },
    { top: '36%', d: '0.55s' },
    { top: '58%', d: '0.80s' },
    { top: '80%', d: '1.05s' },
  ]
  return (
    <div className="absolute inset-x-0 top-[46px] bottom-[26%] pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0" style={{ transform: 'rotate(-2.5deg)' }}>
        {cuerdas.map((c) => (
          <span
            key={c.top}
            className="cp-cuerda absolute left-[-16%] w-[132%] h-[1.5px]"
            style={{
              top: c.top,
              '--cp-d': c.d,
              background:
                'linear-gradient(90deg, transparent 0%, rgba(181,117,62,0.85) 12%, rgba(181,117,62,0.85) 88%, transparent 100%)',
            } as CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}

/** Tablón de madera donde se apoyan las cosas del estante. */
function Tablon() {
  return (
    <div
      className="h-[10px] rounded-[2px]"
      style={{
        background: 'linear-gradient(180deg, #D29A5C 0%, #A96F35 55%, #7E4D1F 100%)',
        boxShadow: '0 10px 14px -9px rgba(26,26,46,0.5)',
      }}
      aria-hidden="true"
    />
  )
}

/** Cartel del estante: papel con una estrella de colores prendida. */
function Cartel({
  n,
  titulo,
  texto,
  estrella,
  rot = 0,
  className = '',
}: {
  n: string
  titulo: string
  texto: string
  estrella: string
  rot?: number
  className?: string
}) {
  return (
    <div
      className={`relative px-4 pt-4 pb-3.5 rounded-md ${className}`}
      style={{
        backgroundColor: C.papel,
        border: `1.5px solid ${C.lineW}`,
        transform: `rotate(${rot}deg)`,
        boxShadow: '0 3px 0 rgba(26,26,46,0.08)',
      }}
    >
      <Estrella color={estrella} className="absolute -top-[9px] left-3.5 w-[18px] h-[18px]" />
      <p className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: C.maderaInk }}>
        {n}
      </p>
      <h3 className={`${display.className} text-[21px] md:text-[24px] leading-[1.05] mt-1`} style={{ color: C.tinta }}>
        {titulo}
      </h3>
      <p className="text-[12.5px] leading-snug mt-1.5" style={{ color: C.mutL }}>
        {texto}
      </p>
    </div>
  )
}

/** Foto apoyada en el tablón, como postal enmarcada en papel. */
function Postal({
  src,
  w,
  h,
  alt,
  caption,
  rot = 0,
  imgClass = '',
}: {
  src: string
  w: number
  h: number
  alt: string
  caption: string
  rot?: number
  imgClass?: string
}) {
  return (
    <figure
      className="px-2 pt-2 pb-1 rounded-md"
      style={{
        backgroundColor: C.papel,
        border: `1.5px solid ${C.lineW}`,
        transform: `rotate(${rot}deg)`,
        boxShadow: '0 3px 0 rgba(26,26,46,0.08)',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
      <img src={src} alt={alt} width={w} height={h} className={`w-full h-auto rounded-[3px] ${imgClass}`} />
      <figcaption
        className="text-[10px] font-semibold uppercase tracking-[0.16em] py-1.5 px-0.5 truncate"
        style={{ color: C.maderaInk }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

export default function DistribuidoraCamburPintonPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Suena el cuatro: cada cuerda vibra una vez al rasgueo. */
        .cp-cuerda { animation: cp-cuerda 1.4s cubic-bezier(.3,.6,.35,1) var(--cp-d,0s) both }
        @keyframes cp-cuerda {
          0% { opacity: 0; transform: translateY(0) scaleY(1) }
          12% { opacity: .55; transform: translateY(-2.6px) scaleY(1.7) }
          24% { transform: translateY(2px) scaleY(1) }
          36% { transform: translateY(-1.2px) }
          48% { transform: translateY(0.6px) }
          62%, 100% { transform: translateY(0) scaleY(1); opacity: .42 }
        }

        /* Cada palabra del titular entra con su rasgueo. */
        .cp-w { animation: cp-w .6s cubic-bezier(.22,.7,.26,1) var(--cp-d,0s) both }
        @keyframes cp-w {
          from { opacity: 0; transform: translateY(108%) }
          to { opacity: 1; transform: translateY(0) }
        }

        /* El cambur del logo cae girando suave hasta el CTA. */
        .cp-banana { animation: cp-banana .82s cubic-bezier(.3,.66,.42,1) var(--cp-d,1.2s) both; transform: rotate(-24deg) }
        @keyframes cp-banana {
          0% { opacity: 0; transform: translateY(-160px) rotate(72deg) }
          55% { opacity: 1 }
          78% { transform: translateY(5px) rotate(-31deg) }
          100% { opacity: 1; transform: translateY(0) rotate(-24deg) }
        }

        /* Apariciones suaves con el mismo ritmo. */
        .cp-sube { animation: cp-sube .8s cubic-bezier(.22,.68,.26,1) var(--cp-d,0s) both }
        @keyframes cp-sube {
          from { opacity: 0; transform: translateY(16px) }
          to { opacity: 1; transform: none }
        }

        /* La cinta del estante corre como letrero de tienda. */
        .cp-ticker { animation: cp-ticker 26s linear infinite }
        @keyframes cp-ticker {
          from { transform: translateX(0) }
          to { transform: translateX(-50%) }
        }

        .cp-btn { transition: transform .18s ease, filter .18s ease }
        .cp-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .cp-btn:active { transform: scale(.97) }
        .cp-page a:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .cp-page a:focus:not(:focus-visible) { outline: none }

        @media (prefers-reduced-motion: reduce) {
          .cp-cuerda, .cp-w, .cp-banana, .cp-sube { animation: none !important }
          .cp-ticker { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.02em]">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(255,249,236,0.95)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.azul,
          btnInk: '#FFFFFF',
        }}
      />

      <div className="cp-page">
        {/* ── 1 · Hero: suena el cuatro ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
          <Cuerdas />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(640px 380px at 88% -8%, rgba(247,198,0,0.20), transparent 62%)',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[86px] md:pt-[118px] pb-9 md:pb-14">
            <div className="grid lg:grid-cols-[1.08fr_0.92fr] gap-x-12 gap-y-7 lg:items-center">
              <div>
                <p
                  className="cp-sube text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 flex items-center gap-2.5"
                  style={{ color: C.rojoInk, '--cp-d': '0.05s' } as CSSProperties}
                >
                  <Estrella color={C.rojo} className="w-3.5 h-3.5" />
                  Puerto Montt · Arquen 5091
                </p>
                <h1
                  className={`${display.className} font-black leading-[0.98] tracking-[0.005em] text-[clamp(2.6rem,10.4vw,6.4rem)]`}
                  style={{ color: C.tinta }}
                  aria-label="Un pedacito de Venezuela en el sur."
                >
                  <span aria-hidden="true" className="block">
                    <span className="inline-block overflow-hidden align-bottom pb-[0.06em] -mb-[0.06em]">
                      <span className="cp-w inline-block" style={{ '--cp-d': '0.44s' } as CSSProperties}>
                        Un pedacito
                      </span>
                    </span>
                    <br />
                    <span className="inline-block overflow-hidden align-bottom pb-[0.06em] -mb-[0.06em]">
                      <span className="cp-w inline-block" style={{ '--cp-d': '0.69s' } as CSSProperties}>
                        de&nbsp;
                        <span style={{ color: C.azul, boxShadow: `inset 0 -0.16em 0 ${C.amarillo}` }}>
                          Venezuela
                        </span>
                      </span>
                    </span>
                    <br />
                    <span className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.02em]">
                      <span className="cp-w inline-block" style={{ '--cp-d': '0.94s' } as CSSProperties}>
                        en el sur.
                      </span>
                    </span>
                  </span>
                </h1>
                <p
                  className="cp-sube mt-4 md:mt-6 max-w-md text-[15px] md:text-lg leading-relaxed"
                  style={{ color: C.mutL, '--cp-d': '1.12s' } as CSSProperties}
                >
                  Harina PAN, quesos llaneros, nata, malta, dulces y todo lo
                  de allá, en {BIZ.city}.
                </p>
              </div>

              <figure
                className="cp-sube relative lg:row-span-2 max-w-[560px] w-full"
                style={{ '--cp-d': '0.22s' } as CSSProperties}
              >
                <div
                  className="rounded-lg p-[7px]"
                  style={{
                    background: `linear-gradient(160deg, #C98A4E 0%, ${C.madera} 45%, #8A5527 100%)`,
                    boxShadow: '0 18px 34px -18px rgba(26,26,46,0.45)',
                    transform: 'rotate(1.2deg)',
                  }}
                >
                  <div className="rounded-[5px] overflow-hidden" style={{ border: '1.5px solid rgba(26,26,46,0.4)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
                    <img
                      src={`${IMG}/tienda.webp`}
                      alt="Entrada de madera de Distribuidora Cambur Pintón, con su logo y la pizarra escrita a mano"
                      width={732}
                      height={504}
                      className="w-full h-[172px] sm:h-[230px] lg:h-auto object-cover"
                      style={{ objectPosition: '64% 42%' }}
                    />
                  </div>
                </div>
                <figcaption
                  className={`${display.className} absolute -bottom-3.5 left-5 px-3 py-1 rounded-md text-[13px] tracking-wide`}
                  style={{
                    backgroundColor: C.amarillo,
                    color: C.tinta,
                    transform: 'rotate(-2deg)',
                    boxShadow: '0 2px 0 rgba(26,26,46,0.2)',
                  }}
                >
                  el local, en Arquen 5091
                </figcaption>
                <ArcoEstrellas
                  color={C.rojo}
                  className="absolute -top-9 right-2 w-[86px] rotate-6 hidden sm:block"
                />
              </figure>

              <div>
                <div
                  className="cp-sube relative flex flex-wrap items-center gap-3"
                  style={{ '--cp-d': '1.28s' } as CSSProperties}
                >
                  <span className="relative inline-flex w-full sm:w-auto">
                    <Cambur className="cp-banana absolute -top-[30px] right-[12px] w-[44px] md:w-[50px] z-10 pointer-events-none" />
                    <BtnWa tone="azul" className="w-full sm:w-auto">
                      <WaIcon />
                      <span className="whitespace-nowrap">Pregunta por WhatsApp si lo tenemos</span>
                    </BtnWa>
                  </span>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cp-sube mt-4 inline-flex items-center gap-2.5 tap-44"
                  style={{ '--cp-d': '1.42s' } as CSSProperties}
                >
                  <Stars value={BIZ.ratingValue} color={C.amarilloEst} size={16} />
                  <span className="text-sm font-bold" style={{ color: C.tinta }}>
                    {BIZ.rating}
                  </span>
                  <span className="text-sm" style={{ color: C.mutL }}>
                    · {BIZ.reviews} opiniones en Google
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Cinta del estante ── */}
        <section
          aria-label="Lo que hay en el estante"
          className="overflow-hidden border-y-[3px]"
          style={{ backgroundColor: C.amarillo, borderColor: C.tinta }}
        >
          <div className="cp-ticker flex w-max" aria-hidden="true">
            {[0, 1].map((copia) => (
              <ul
                key={copia}
                className={`${display.className} flex items-center gap-5 py-2.5 pr-5 text-[15px] md:text-lg uppercase tracking-[0.08em] whitespace-nowrap`}
                style={{ color: C.tinta }}
              >
                {TICKER.map((t, i) => (
                  <li key={t} className="flex items-center gap-5">
                    {t}
                    <Estrella color={i % 2 === 0 ? C.azul : C.rojo} className="w-3 h-3" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </section>

        {/* ── 3 · Lo que encuentras: el estante ── */}
        <section
          id="estante"
          className="scroll-mt-20"
          style={{
            backgroundColor: C.crema,
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(181,117,62,0.06) 0 1.5px, transparent 1.5px 46px)',
          }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo>Lo que encuentras</Rotulo>
              <div className="grid lg:grid-cols-[1.3fr_1fr] gap-4 md:gap-10 items-end mb-10 md:mb-14">
                <h2
                  className={`${display.className} font-black leading-[0.98] text-[clamp(2rem,7.4vw,4.2rem)]`}
                  style={{ color: C.tinta }}
                >
                  Todo lo de allá,
                  <br />
                  <span style={{ color: C.azul }}>acá en el sur.</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.mutL }}>
                  Una muestra de lo que llega al estante. Si no ves lo que
                  buscas, pregunta por WhatsApp y te confirmamos.
                </p>
              </div>
            </Reveal>

            {/* tablón 1 */}
            <div className="flex flex-wrap items-end gap-3 md:gap-5">
              <Estante delay={0} className="flex-1 min-w-[148px] md:w-[250px] md:flex-none">
                <Cartel {...PRODUCTOS[0]} rot={-1} />
              </Estante>
              <Estante delay={90} className="w-[50%] min-w-[178px] md:w-[400px]">
                <Postal
                  src={`${IMG}/productos.webp`}
                  w={564}
                  h={375}
                  alt="Productos venezolanos del estante: harina PAN, quesos llaneros, Samba, Pirulín, malta y Diablitos"
                  caption="del estante"
                  rot={1}
                />
              </Estante>
              <Estante delay={180} className="hidden md:block self-end ml-auto">
                <Cambur className="w-[52px] rotate-[14deg]" />
              </Estante>
            </div>
            <Tablon />

            {/* tablón 2 */}
            <div className="flex flex-wrap items-end gap-3 md:gap-5 mt-8 md:mt-10">
              <Estante delay={60} className="w-[48%] min-w-[170px] md:w-[380px]">
                <Postal
                  src={`${IMG}/lacteos.webp`}
                  w={960}
                  h={787}
                  alt="Envases de nata criolla y suero venezolano del local"
                  caption="nata y suero"
                  rot={-1}
                />
              </Estante>
              <Estante delay={140} className="flex-1 min-w-[148px] md:w-[280px] md:flex-none">
                <Cartel {...PRODUCTOS[1]} rot={1} />
              </Estante>
              <Estante delay={220} className="hidden md:block self-end ml-auto">
                <ArcoEstrellas color={C.amarilloEst} className="w-[104px]" />
              </Estante>
            </div>
            <Tablon />

            {/* tablón 3 */}
            <div className="flex flex-wrap items-end gap-3 md:gap-5 mt-8 md:mt-10">
              <Estante delay={0} className="w-[47%] min-w-[148px] md:w-[250px]">
                <Cartel {...PRODUCTOS[2]} rot={-1} />
              </Estante>
              <Estante delay={90} className="w-[47%] min-w-[148px] md:w-[250px]">
                <Cartel {...PRODUCTOS[3]} rot={1} />
              </Estante>
              <Estante delay={180} className="hidden md:block self-end ml-auto">
                <Estrella color={C.rojo} className="w-[34px] h-[34px] -rotate-12" />
              </Estante>
            </div>
            <Tablon />

            {/* tablón 4 */}
            <div className="flex flex-wrap items-end gap-3 md:gap-5 mt-8 md:mt-10">
              <Estante delay={0} className="w-[47%] min-w-[148px] md:w-[280px]">
                <Cartel {...PRODUCTOS[4]} rot={-1} />
              </Estante>
              <Estante delay={90} className="w-[47%] min-w-[148px] md:w-[270px]">
                <div
                  className="relative px-4 pt-4 pb-3.5 rounded-md h-full"
                  style={{
                    backgroundColor: C.papel,
                    border: `1.5px dashed ${C.lineW}`,
                    transform: 'rotate(1deg)',
                    boxShadow: '0 3px 0 rgba(26,26,46,0.08)',
                  }}
                >
                  <Estrella color={C.rojo} className="absolute -top-[9px] left-3.5 w-[18px] h-[18px]" />
                  <h3 className={`${display.className} text-[21px] md:text-[24px] leading-[1.05]`} style={{ color: C.azul }}>
                    ¿No lo ves?
                  </h3>
                  <p className="text-[12.5px] leading-snug mt-1.5" style={{ color: C.mutL }}>
                    Pregunta por WhatsApp: te confirmamos si lo tenemos.
                  </p>
                </div>
              </Estante>
              <Estante delay={180} className="hidden md:block self-end">
                <Cambur className="w-[54px] -rotate-12" />
              </Estante>
            </div>
            <Tablon />
          </div>
        </section>

        {/* ── 4 · Pregunta antes de venir ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.azul }}>
          <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none" aria-hidden="true">
            <div className="absolute inset-0" style={{ transform: 'rotate(-4deg)' }}>
              {['12%', '40%', '68%', '96%'].map((top) => (
                <span
                  key={top}
                  className="absolute left-[-10%] w-[120%] h-px"
                  style={{ top, background: 'rgba(255,249,236,0.16)' }}
                />
              ))}
            </div>
          </div>
          <Cambur className="absolute -right-10 -bottom-14 w-[240px] md:w-[320px] rotate-[18deg] opacity-[0.13] pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="max-w-2xl">
              <Reveal>
                <Rotulo light>Antes de venir</Rotulo>
                <h2
                  className={`${display.className} font-black leading-[0.98] text-[clamp(2rem,7.6vw,4.4rem)] mb-5`}
                  style={{ color: C.crema }}
                >
                  ¿Buscas algo
                  <br />
                  en especial?
                </h2>
              </Reveal>
              <Reveal delay={90}>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-8" style={{ color: C.mutD }}>
                  Escríbenos qué buscas por WhatsApp y te confirmamos si lo
                  tenemos. Así no das el viaje en vano.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <BtnWa tone="amarillo">
                    <WaIcon />
                    Preguntar por WhatsApp
                  </BtnWa>
                  <ArcoEstrellas color={C.amarillo} className="w-[92px] hidden sm:block" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · La pizarra ── */}
        <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Rotulo>La pizarra</Rotulo>
            </Reveal>
            <Reveal delay={80}>
              <div className="max-w-2xl mx-auto" style={{ transform: 'rotate(-1deg)' }}>
                <div
                  className="rounded-lg p-[9px]"
                  style={{
                    background: `linear-gradient(160deg, #C98A4E 0%, ${C.madera} 45%, #8A5527 100%)`,
                    boxShadow: '0 20px 36px -20px rgba(26,26,46,0.5)',
                  }}
                >
                  <div
                    className="rounded-[4px] px-6 py-9 md:px-12 md:py-12 text-center"
                    style={{ backgroundColor: C.pizarra, border: '1.5px solid rgba(26,26,46,0.5)' }}
                  >
                    <p
                      className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-6"
                      style={{ color: 'rgba(255,249,236,0.6)' }}
                    >
                      en nuestra pizarra, junto a la entrada
                    </p>
                    <p
                      className={`${display.className} font-black leading-[1.02] text-[clamp(1.9rem,7vw,3.6rem)]`}
                      style={{ color: C.rojoPiz }}
                    >
                      “No te rindas,
                      <br />
                      sé constante.”
                    </p>
                    <p
                      className="mt-6 text-sm md:text-base leading-relaxed max-w-sm mx-auto"
                      style={{ color: 'rgba(255,249,236,0.88)' }}
                    >
                      No siempre son buenos momentos, pero el ser constante
                      te llevará a cumplir objetivos.
                    </p>
                    <svg viewBox="0 0 160 8" className="w-[140px] mx-auto mt-7" aria-hidden="true">
                      <path
                        d="M4 5 C 30 2, 55 7, 80 4.5 C 105 2, 130 6.5, 156 4"
                        fill="none"
                        stroke="rgba(255,249,236,0.5)"
                        strokeWidth="2.4"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-center text-xs mt-5" style={{ color: C.mutL }}>
                La lees apenas entras al local.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Opiniones ── */}
        <section
          id="opiniones"
          className="scroll-mt-20 border-t"
          style={{ backgroundColor: '#FBF3DF', borderColor: C.lineL }}
        >
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-[0.85fr_1.35fr] gap-10 lg:gap-14">
              <div>
                <Reveal>
                  <Rotulo>Opiniones</Rotulo>
                  <p className={`${display.className} font-black leading-none text-[5.2rem] md:text-[7rem]`} style={{ color: C.azul }}>
                    {BIZ.rating}
                  </p>
                  <Stars value={BIZ.ratingValue} color={C.amarilloEst} size={22} className="w-[22px] h-[22px] mt-2" />
                  <p className="mt-3 text-sm font-bold" style={{ color: C.tinta }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.azul, textDecorationColor: 'rgba(22,64,168,0.35)' }}
                  >
                    Leerlas en Google Maps
                  </a>
                  <p className="mt-6 text-sm leading-relaxed max-w-[280px]" style={{ color: C.mutL }}>
                    Lo que dicen quienes pasan por el local, en sus propias
                    palabras.
                  </p>
                </Reveal>
              </div>
              <div className="space-y-8 md:space-y-10">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 90}>
                    <figure className={`max-w-xl ${i === 1 ? 'md:ml-14' : i === 2 ? 'md:ml-7' : ''}`}>
                      <span
                        className={`${display.className} block leading-[0.4] text-[52px] select-none`}
                        style={{ color: C.rojo }}
                        aria-hidden="true"
                      >
                        “
                      </span>
                      <blockquote className="mt-4 text-[15px] md:text-[17px] leading-relaxed" style={{ color: C.tinta }}>
                        {r.text}
                      </blockquote>
                      <figcaption
                        className="mt-3.5 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: C.maderaInk }}
                      >
                        <Estrella color={C.amarilloEst} className="w-3.5 h-3.5" />
                        {r.author} · Reseña de Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Dónde estamos ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
              <div className="flex flex-col">
                <Reveal>
                  <Rotulo>Cómo llegar</Rotulo>
                  <h2
                    className={`${display.className} font-black leading-[0.98] text-[clamp(2rem,7.4vw,4rem)] mb-3`}
                    style={{ color: C.tinta }}
                  >
                    Te esperamos
                    <br />
                    <span style={{ color: C.azul }}>en Arquen 5091.</span>
                  </h2>
                  <p className="text-sm md:text-base mb-7" style={{ color: C.mutL }}>
                    {BIZ.address}, {BIZ.city} · {BIZ.region}
                  </p>
                </Reveal>
                <Reveal delay={80}>
                  <dl className="max-w-md mb-6">
                    {BIZ.horario.map((h) => (
                      <div
                        key={h.dias}
                        className="flex items-baseline justify-between gap-4 py-2.5 border-b border-dashed"
                        style={{ borderColor: C.lineW }}
                      >
                        <dt className="text-sm font-bold" style={{ color: C.tinta }}>
                          {h.dias}
                        </dt>
                        <dd className={`${display.className} text-lg`} style={{ color: h.horas === 'Cerrado' ? C.rojoInk : C.azul }}>
                          {h.horas}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  <p
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md text-[12.5px] font-semibold mb-8"
                    style={{ backgroundColor: 'rgba(181,117,62,0.14)', color: C.maderaInk, border: `1px dashed ${C.lineW}` }}
                  >
                    <Estrella color={C.maderaInk} className="w-3 h-3" />
                    También en {BIZ.address2}
                  </p>
                </Reveal>
                <Reveal delay={150}>
                  <div className="flex flex-wrap items-center gap-3">
                    <BtnWa tone="azul">
                      <WaIcon />
                      Escribir por WhatsApp
                    </BtnWa>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-bold tap-44"
                      style={{ color: C.tinta }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.azul, textDecorationColor: 'rgba(22,64,168,0.35)' }}
                  >
                    Abrir en Google Maps
                  </a>
                </Reveal>
              </div>
              <Reveal delay={120} className="flex">
                <div
                  className="flex-1 rounded-lg p-[7px] min-h-[300px]"
                  style={{
                    background: `linear-gradient(160deg, #C98A4E 0%, ${C.madera} 45%, #8A5527 100%)`,
                    boxShadow: '0 18px 34px -18px rgba(26,26,46,0.4)',
                  }}
                >
                  <div className="h-full min-h-[300px] rounded-[5px] overflow-hidden" style={{ border: '1.5px solid rgba(26,26,46,0.4)', backgroundColor: C.papel }}>
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-full min-h-[300px]"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
            <div className="flex items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                width={1200}
                height={1200}
                className="w-12 h-12 shrink-0 rounded-full object-cover"
                style={{ border: '2px solid rgba(255,249,236,0.6)' }}
              />
              <div>
                <p className={`${display.className} text-xl leading-none`}>{BIZ.name}</p>
                <p className="text-xs mt-1.5" style={{ color: 'rgba(255,249,236,0.66)' }}>
                  Productos venezolanos · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <div className="sm:ml-auto flex flex-wrap gap-x-5 gap-y-2 text-sm" style={{ color: 'rgba(255,249,236,0.72)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
                WhatsApp
              </a>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: 'rgba(255,249,236,0.16)' }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,249,236,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.amarillo }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son reales
              y públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.amarillo }}>
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
