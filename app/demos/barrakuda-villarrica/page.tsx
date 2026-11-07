import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Neon, NeonDash } from './neon'
import {
  BIZ,
  WA_LINK,
  WA_EVENTO,
  CARTA_URL,
  MAPS_URL,
  MAPS_EMBED,
  HORARIO,
  PARRILLA,
  DEL_MAR,
  BARRA,
  REVIEWS,
  IMG,
} from './content'

// Syne para el rótulo grande y los titulares (tiene el aire de letrero
// de bar que pide el neón), Oswald para las versalitas, Karla de texto.
const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const caps = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// «Brasa, mar y barra»: negro carbón del restobar de noche, rojo brasa
// de la parrilla, dorado de su logo, el cian y el magenta del neón de
// su barra (solo como luz, nunca texto chico) y la crema de la carta.
const C = {
  carbon: '#0E0D0C',
  carbonBajo: '#080706',
  tabla: '#171110',
  brasa: '#C8321E',
  brasaNeon: '#FF6A3D', // tubo brasa encendido
  brasaBtn: '#A02515', // brasa oscura: 5,3:1 con texto crema encima
  brasaOsc: '#A02515', // brasa oscura: 5,3:1 sobre crema
  oro: '#D9A441',
  cian: '#2FE6E0',
  magenta: '#FF3EA5',
  crema: '#F3EAD9',
  papel: '#EDE0C6',
  mutNoche: 'rgba(243,234,217,0.74)',
  mutCrema: 'rgba(14,13,12,0.68)',
  lineD: 'rgba(217,164,65,0.26)',
  lineL: 'rgba(14,13,12,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'barrakuda-villarrica',
  title: 'BarraKuda Bar & Grill · Restobar en Villarrica',
  description:
    'Parrilladas, ceviches, pailas marinas y coctelería con música en vivo en Av. Pedro de Valdivia 1110, Villarrica. 4,6 en Google. Reserva tu mesa por WhatsApp.',
  image: '/demos/barrakuda-villarrica/parrilla-fuego.webp',
})

const NAV_LINKS = [
  { label: 'La parrilla', href: '#parrilla' },
  { label: 'Del mar', href: '#mar' },
  { label: 'La barra', href: '#barra' },
  { label: 'Noches', href: '#noches' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const FRANJA = [
  'PARRILLA A LAS BRASAS',
  'CEVICHES',
  'PAILAS MARINAS',
  'PISCO SOUR',
  'CERVEZA ARTESANAL',
  'MÚSICA EN VIVO',
  'KARAOKE',
  'SALONES PARA EVENTOS',
] as const

const FRANJA_LUCES = [C.cian, C.magenta, C.brasaNeon] as const

/** Brasas que brillan y se apagan en loop, sobre la foto de la parrilla. */
const BRASAS = [
  { x: 7, y: 20, s: 5, dur: 3.1, del: 0.3, c: '#FF6A3D' },
  { x: 15, y: 9, s: 3, dur: 3.8, del: 1.4, c: '#D9A441' },
  { x: 24, y: 26, s: 4, dur: 2.9, del: 2.0, c: '#FF6A3D' },
  { x: 36, y: 12, s: 3, dur: 4.2, del: 0.8, c: '#C8321E' },
  { x: 47, y: 28, s: 5, dur: 3.4, del: 1.9, c: '#D9A441' },
  { x: 58, y: 14, s: 3, dur: 3.7, del: 0.5, c: '#FF6A3D' },
  { x: 68, y: 24, s: 4, dur: 3.0, del: 1.1, c: '#D9A441' },
  { x: 79, y: 10, s: 3, dur: 4.0, del: 2.3, c: '#FF6A3D' },
  { x: 88, y: 22, s: 5, dur: 3.3, del: 0.9, c: '#C8321E' },
  { x: 95, y: 14, s: 3, dur: 3.6, del: 1.7, c: '#D9A441' },
] as const

/** El ecualizador de la barra: barras de neón que respiran. */
const EQ = [38, 66, 50, 86, 58, 96, 70, 54, 80, 62, 90, 48, 76, 56, 68, 42] as const

/** Brillito de neón: rombo chico usado como separador. */
function Chispa({ color = C.oro, className = 'w-1.5 h-1.5' }: { color?: string; className?: string }) {
  return (
    <span
      className={`inline-block rotate-45 shrink-0 ${className}`}
      style={{ backgroundColor: color, boxShadow: `0 0 7px ${color}` }}
      aria-hidden="true"
    />
  )
}

/** Rótulo en versalitas Oswald que se enciende como letrero de neón. */
function Rotulo({
  children,
  tube = C.oro,
  core = '#FFF3D4',
  glow,
}: {
  children: string
  tube?: string
  core?: string
  glow?: string
}) {
  const g = glow ?? tube
  return (
    <p
      className={`${caps.className} flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] md:text-xs font-medium tracking-[0.34em] uppercase mb-6`}
    >
      <Neon tube={tube} core={core} glow={g}>
        {children}
      </Neon>
      <NeonDash tube={g} width={40} delay={160} />
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.brasaBtn,
  ink = C.crema,
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="bk-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-semibold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
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

export default function BarraKudaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.crema }}
    >
      <style>{`
        /* «Se enciende la barra»: el tubo apagado espera, parpadea dos
           veces y queda encendido. Las capas solo animan opacity. */
        .bk-neon { position: relative; display: inline-block }
        .bk-off { opacity: .16 }
        .bk-lit { position: absolute; inset: 0; opacity: 1 }
        .bk-neon.bk-arm .bk-lit { opacity: 0 }
        .bk-neon.bk-on .bk-lit { animation: bk-flick 1.05s linear both; animation-delay: var(--bk-d, 0ms) }
        @keyframes bk-flick {
          0% { opacity: 0 } 7% { opacity: .9 } 11% { opacity: .12 }
          19% { opacity: 1 } 27% { opacity: .25 } 38% { opacity: 1 }
          46% { opacity: .55 } 55%, 100% { opacity: 1 }
        }

        /* El filete de neón se estira con un micro parpadeo. */
        .bk-dash { display: block; height: 3px; border-radius: 999px; transform-origin: left }
        .bk-dash.bk-arm { opacity: 0; transform: scaleX(.25) }
        .bk-dash.bk-on { animation: bk-dash .8s cubic-bezier(.3,.7,.3,1) both; animation-delay: var(--bk-d, 0ms) }
        @keyframes bk-dash {
          0% { opacity: 0; transform: scaleX(.2) }
          35% { opacity: 1; transform: scaleX(1.05) }
          50% { opacity: .45 }
          100% { opacity: 1; transform: scaleX(1) }
        }

        /* La foto de la parrilla sube con su resplandor cálido. */
        @keyframes bk-alzar { from { opacity: 0; transform: translateY(48px) } to { opacity: 1; transform: none } }
        .bk-alzar { animation: bk-alzar 1.1s cubic-bezier(.22,.7,.25,1) .55s both }
        @keyframes bk-resp { from { opacity: 0 } 55% { opacity: 1 } to { opacity: .62 } }
        .bk-resp { animation: bk-resp 2s ease-out .6s both }

        /* Brasas que brillan y se apagan en loop suave. */
        @keyframes bk-brasa {
          0%, 100% { opacity: .12; transform: scale(.65) }
          45% { opacity: .95; transform: scale(1.15) }
          62% { opacity: .5 }
        }
        .bk-brasa { position: absolute; border-radius: 9999px; animation: bk-brasa var(--dur, 3.4s) ease-in-out infinite; animation-delay: var(--del, 0s) }

        @keyframes bk-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .bk-fade { animation: bk-fade .85s ease-out both; animation-delay: var(--bk-d, 0s) }

        /* Letrero corrido de la franja. */
        @keyframes bk-marq { to { transform: translateX(-50%) } }
        .bk-marq { animation: bk-marq 30s linear infinite }

        /* El ecualizador respira. */
        @keyframes bk-eq { 0%, 100% { transform: scaleY(.32) } 50% { transform: scaleY(1) } }
        .bk-eq { transform-origin: bottom; animation: bk-eq 1.7s ease-in-out infinite; animation-delay: var(--del, 0s) }

        .bk-btn { transition: transform .18s ease, filter .18s ease }
        .bk-btn:hover { transform: translateY(-2px); filter: brightness(1.1) }
        .bk-btn:active { transform: scale(.97) }
        .bk-btn:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .bk-lit { opacity: 1 !important; animation: none !important }
          .bk-dash { opacity: 1 !important; transform: none !important; animation: none !important }
          .bk-alzar, .bk-fade { animation: none !important }
          .bk-resp { animation: none !important; opacity: .55 }
          .bk-brasa, .bk-marq, .bk-eq { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-lg md:text-xl font-bold tracking-[0.04em] truncate`}>
            BarraKuda
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(14,13,12,0.94)',
          ink: C.crema,
          line: 'rgba(217,164,65,0.24)',
          btnBg: C.brasaBtn,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: se enciende la barra ── */}
      <section
        id="inicio"
        className="relative min-h-svh overflow-hidden flex flex-col"
        style={{ backgroundColor: C.carbon }}
      >
        {/* Tubos de neón verticales en los bordes (la luz de su barra) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[6.5%] top-[16%] bottom-[34%] w-[3px] rounded-full"
          style={{
            background: `linear-gradient(180deg, transparent, ${C.cian} 30%, ${C.cian} 70%, transparent)`,
            boxShadow: `0 0 16px 1px ${C.cian}`,
            opacity: 0.32,
          }}
        />
        <div
          aria-hidden="true"
          className="hidden md:block absolute right-[6.5%] top-[24%] bottom-[26%] w-[3px] rounded-full"
          style={{
            background: `linear-gradient(180deg, transparent, ${C.magenta} 30%, ${C.magenta} 70%, transparent)`,
            boxShadow: `0 0 16px 1px ${C.magenta}`,
            opacity: 0.32,
          }}
        />

        <div className="relative flex-1 flex flex-col items-center justify-center text-center max-w-6xl mx-auto w-full px-5 md:px-8 pt-24 md:pt-20 pb-7">
          <p
            className={`${caps.className} bk-fade flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-[11px] md:text-xs font-medium tracking-[0.34em] uppercase`}
            style={{ color: C.oro, '--bk-d': '0.15s' } as CSSProperties}
          >
            <span className="block h-px w-7 shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
            <span>Villarrica · Pedro de Valdivia 1110</span>
            <span className="block h-px w-7 shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
          </p>

          {/* El letrero: Barra en cian, Kuda en magenta */}
          <h1
            className={`${display.className} mt-4 font-bold leading-[0.98] tracking-[0.01em] text-[clamp(3.1rem,14vw,8rem)]`}
          >
            <Neon tube={C.cian} core="#E9FFFD" delay={280}>
              Barra
            </Neon>
            <Neon tube={C.magenta} core="#FFE9F4" delay={600}>
              Kuda
            </Neon>
          </h1>

          <p
            className={`${display.className} bk-fade mt-3 font-semibold text-[clamp(1.35rem,4.8vw,2.35rem)] leading-tight`}
            style={{ color: C.crema, '--bk-d': '1.05s' } as CSSProperties}
          >
            Brasa, mar y barra.
          </p>

          <p
            className="bk-fade mt-4 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: C.mutNoche, '--bk-d': '1.2s' } as CSSProperties}
          >
            Parrilladas, ceviches, pailas marinas y coctelería con música
            en vivo en el centro de Villarrica.
          </p>

          <div className="bk-fade mt-6 flex flex-wrap justify-center gap-3" style={{ '--bk-d': '1.35s' } as CSSProperties}>
            <BtnWa>Reserva por WhatsApp</BtnWa>
            <a
              href={CARTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bk-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-base font-semibold tap-44"
              style={{
                border: '1px solid rgba(243,234,217,0.55)',
                color: C.crema,
                backgroundColor: 'rgba(14,13,12,0.35)',
              }}
            >
              Ver la carta
            </a>
          </div>

          <div className="bk-fade mt-5 flex items-center gap-3" style={{ '--bk-d': '1.5s' } as CSSProperties}>
            <Stars value={BIZ.ratingValue} color={C.oro} size={16} />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tap-44"
              style={{ color: 'rgba(243,234,217,0.85)' }}
            >
              <strong className="font-bold" style={{ color: C.crema }}>{BIZ.rating}</strong>
              {' '}· {BIZ.reviews} opiniones en Google
            </a>
          </div>
        </div>

        {/* La parrilla sube con resplandor desde abajo */}
        <div className="relative mx-auto w-[min(735px,100vw)] shrink-0">
          <div className="bk-alzar relative">
            <div
              aria-hidden="true"
              className="bk-resp absolute -inset-x-8 -bottom-14 -top-6 pointer-events-none"
              style={{
                background:
                  'radial-gradient(58% 62% at 50% 90%, rgba(255,106,61,0.4), rgba(200,50,30,0.15) 55%, transparent 76%)',
              }}
            />
            {/* La foto trae un rótulo de dirección quemado abajo: el
                marco la corta (9,5% inferior) sin estirar la imagen. */}
            <div
              className="relative aspect-[735/420] overflow-hidden"
              style={{
                maskImage: 'linear-gradient(180deg, transparent 0%, black 18%)',
                WebkitMaskImage: 'linear-gradient(180deg, transparent 0%, black 18%)',
              }}
            >
              <Image
                src={`${IMG}/parrilla-fuego.webp`}
                alt="Carne a las brasas sobre la parrilla de BarraKuda, con llamas"
                fill
                priority
                sizes="(min-width: 735px) 735px, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              {BRASAS.map((b, i) => (
                <span
                  key={i}
                  className="bk-brasa"
                  style={
                    {
                      left: `${b.x}%`,
                      bottom: `${b.y}%`,
                      width: b.s,
                      height: b.s,
                      backgroundColor: b.c,
                      boxShadow: `0 0 9px 2px ${b.c}`,
                      '--dur': `${b.dur}s`,
                      '--del': `${b.del}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Franja letrero corrido ── */}
      <div
        className="border-y overflow-hidden"
        style={{ backgroundColor: C.carbonBajo, borderColor: C.lineD }}
        aria-hidden="true"
      >
        <div className="bk-marq flex w-max">
          {[0, 1].map((k) => (
            <div
              key={k}
              aria-hidden={k === 1 ? true : undefined}
              className={`${caps.className} flex items-center gap-7 pr-7 py-4 text-xs md:text-sm font-medium tracking-[0.3em] whitespace-nowrap`}
              style={{ color: C.oro }}
            >
              {FRANJA.map((f, i) => (
                <span key={f} className="flex items-center gap-7">
                  <span>{f}</span>
                  <Chispa color={FRANJA_LUCES[i % 3]} className="w-1.5 h-1.5" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── 3 · La parrilla ── */}
      <section id="parrilla" className="scroll-mt-20 relative" style={{ backgroundColor: C.carbon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 380px at 88% 6%, rgba(200,50,30,0.16), transparent 65%), radial-gradient(460px 320px at 4% 96%, rgba(217,164,65,0.07), transparent 62%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Rotulo tube={C.brasaNeon} core="#FFE8DB" glow="rgba(255,106,61,0.85)">
                La parrilla
              </Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,4rem)]`}
                style={{ color: C.crema }}
              >
                El fuego manda,{' '}
                <span style={{ color: C.brasaNeon }}>la brasa obedece.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                <p>
                  Los mejores cortes pasan por las brasas antes de llegar
                  a tu mesa: la parrillada para 2 sale con vino de la
                  casa, exquisita y contundente.
                </p>
                <p>
                  Y apenas te sientas, la casa recibe con sopaipillas
                  recién hechas y su pebre.
                </p>
              </div>
              <p className="mt-8 flex items-center gap-3">
                <Chispa color={C.brasaNeon} />
                <span className="block h-px w-16" style={{ backgroundColor: 'rgba(243,234,217,0.3)' }} aria-hidden="true" />
                <Chispa color={C.oro} />
              </p>
            </Reveal>
          </div>

          {/* La carta de la parrilla */}
          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div
                className="relative rounded-lg p-6 md:p-9"
                style={{
                  backgroundColor: C.tabla,
                  border: `1px solid ${C.lineD}`,
                  boxShadow:
                    '0 26px 70px rgba(0,0,0,0.5), inset 0 0 0 5px rgba(200,50,30,0.1), inset 0 0 0 6px rgba(217,164,65,0.14)',
                }}
              >
                <NeonDash tube={C.brasaNeon} width={46} className="absolute -top-[2px] left-7" delay={120} />
                <NeonDash tube={C.cian} width={30} className="absolute -bottom-[2px] right-7" delay={260} />
                <div
                  className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 pb-5 border-b"
                  style={{ borderColor: 'rgba(217,164,65,0.24)' }}
                >
                  <h3
                    className={`${display.className} font-bold text-2xl md:text-3xl leading-none`}
                    style={{ color: C.oro }}
                  >
                    De la parrilla
                  </h3>
                  <p
                    className={`${caps.className} text-[11px] md:text-xs font-medium tracking-[0.24em] uppercase`}
                    style={{ color: C.mutNoche }}
                  >
                    Directo de las brasas
                  </p>
                </div>
                <ul>
                  {PARRILLA.map((p) => (
                    <li
                      key={p.plato}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3.5 border-b"
                      style={{ borderColor: 'rgba(243,234,217,0.09)' }}
                    >
                      <span
                        className={`${display.className} font-semibold text-lg md:text-xl leading-snug`}
                        style={{ color: C.crema }}
                      >
                        {p.plato}
                      </span>
                      <span
                        className={`${caps.className} text-[11px] font-medium tracking-[0.2em] uppercase`}
                        style={{ color: C.mutNoche }}
                      >
                        {p.detalle}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Del mar ── */}
      <section id="mar" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Rotulo tube={C.brasaOsc} core="#8E1F10" glow="rgba(200,50,30,0.5)">
                Del mar
              </Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,4rem)]`}
              >
                Del mar, <span style={{ color: C.brasaOsc }}>bien servido.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                La cocina no se queda en la parrilla: ceviches, pailas
                marinas y platos abundantes, de los que más nombran en
                las opiniones.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={80}>
                <div className="relative max-w-[400px] mx-auto">
                  <div
                    className="overflow-hidden rounded-lg"
                    style={{
                      outline: `1px solid ${C.brasaOsc}`,
                      outlineOffset: '8px',
                      boxShadow: '0 24px 64px rgba(14,13,12,0.22)',
                    }}
                  >
                    <Image
                      src={`${IMG}/plato-mar-y-tierra.webp`}
                      alt="Plato de BarraKuda con carne, camarones y risotto"
                      width={640}
                      height={727}
                      sizes="(min-width: 1024px) 36vw, 90vw"
                      className="block w-full h-auto"
                    />
                  </div>
                  <p
                    className={`${caps.className} absolute -bottom-4 left-4 px-4 py-2 text-[11px] font-semibold tracking-[0.22em] uppercase rounded-sm`}
                    style={{ backgroundColor: C.carbon, color: C.oro }}
                  >
                    Mar y tierra
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid sm:grid-cols-2 gap-x-10">
                {DEL_MAR.map((m, i) => (
                  <Reveal key={m} delay={i * 70}>
                    <p
                      className="flex items-baseline gap-3 py-3.5 border-b"
                      style={{ borderColor: C.lineL }}
                    >
                      <Chispa color={i % 2 === 0 ? C.brasaOsc : '#0E8E8A'} className="w-2 h-2 translate-y-[-1px]" />
                      <span className={`${display.className} font-semibold text-xl md:text-2xl leading-snug`}>
                        {m}
                      </span>
                    </p>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={200}>
                <p className="mt-8 flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.brasaOsc }}>
                  <Chispa color={C.brasaOsc} />
                  De cortesía, sopaipillas recién hechas con pebre.
                </p>
                <a
                  href={CARTA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold tap-44"
                  style={{ color: C.brasaOsc }}
                >
                  Ver la carta completa
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 13L13 3M6 3h7v7" />
                  </svg>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · La barra: coctelería y neón ── */}
      <section id="barra" className="scroll-mt-20 relative" style={{ backgroundColor: C.carbon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(560px 400px at 12% 20%, rgba(255,62,165,0.13), transparent 62%), radial-gradient(520px 380px at 92% 82%, rgba(47,230,224,0.1), transparent 64%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <Reveal delay={80}>
              <div className="relative h-[420px] md:h-[540px] max-w-[460px] mx-auto lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-4 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(52% 44% at 42% 58%, rgba(255,62,165,0.2), transparent 70%), radial-gradient(40% 36% at 80% 84%, rgba(47,230,224,0.16), transparent 72%)',
                  }}
                />
                <div
                  className="absolute left-0 top-0 w-[64%] h-[88%] overflow-hidden rounded-lg"
                  style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.55)' }}
                >
                  <Image
                    src={`${IMG}/coctel-barra.webp`}
                    alt="Cóctel rosado con cerezas en la barra de BarraKuda, luces de neón detrás"
                    fill
                    sizes="(min-width: 1024px) 30vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute right-0 bottom-0 w-[46%] aspect-square overflow-hidden rounded-lg"
                  style={{
                    outline: `1px solid ${C.cian}`,
                    outlineOffset: '6px',
                    boxShadow: `0 24px 60px rgba(0,0,0,0.55), 0 0 26px rgba(47,230,224,0.25)`,
                  }}
                >
                  <Image
                    src={`${IMG}/coctel-neon.webp`}
                    alt="Cóctel con cerezas bajo el neón de colores de la barra"
                    fill
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <Rotulo tube={C.magenta} core="#FFE9F4" glow="rgba(255,62,165,0.8)">
                La barra · Coctelería
              </Rotulo>
              <h2
                className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,4rem)]`}
                style={{ color: C.crema }}
              >
                El neón también{' '}
                <span style={{ color: C.cian }}>se sirve.</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-8 max-w-xl">
                {BARRA.map((b, i) => (
                  <li
                    key={b.trago}
                    className="flex items-start gap-4 py-4 border-b"
                    style={{ borderColor: 'rgba(243,234,217,0.1)' }}
                  >
                    <Chispa
                      color={i % 2 === 0 ? C.cian : C.magenta}
                      className="w-2 h-2 mt-2"
                    />
                    <span className="flex-1">
                      <span
                        className={`${display.className} block font-semibold text-xl md:text-2xl leading-snug`}
                        style={{ color: C.crema }}
                      >
                        {b.trago}
                      </span>
                      <span className="block mt-1 text-sm" style={{ color: C.mutNoche }}>
                        {b.detalle}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-7 flex items-center gap-3">
                <Chispa color={C.magenta} />
                <span className="text-sm" style={{ color: C.mutNoche }}>
                  La coctelería de la casa se pide en la barra.
                </span>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Noches: música en vivo y eventos ── */}
      <section
        id="noches"
        className="scroll-mt-20 relative overflow-hidden"
        style={{ backgroundColor: C.carbonBajo }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 380px at 50% 0%, rgba(255,62,165,0.1), transparent 64%), radial-gradient(560px 320px at 50% 112%, rgba(47,230,224,0.08), transparent 66%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Rotulo tube={C.cian} core="#E9FFFD" glow="rgba(47,230,224,0.8)">
                Noches en BarraKuda
              </Rotulo>
            </div>
            <h2
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,7vw,4.4rem)]`}
              style={{ color: C.crema }}
            >
              Cuando cae el sol,{' '}
              <span style={{ color: C.magenta }}>suena la casa.</span>
            </h2>
          </Reveal>
          <Reveal delay={110}>
            {/* El ecualizador de la barra */}
            <div className="mt-9 flex items-end justify-center gap-[5px] h-[84px] md:h-[96px]" aria-hidden="true">
              {EQ.map((h, i) => (
                <span
                  key={i}
                  className="bk-eq w-[5px] md:w-[7px] rounded-full"
                  style={
                    {
                      height: `${h}%`,
                      backgroundColor: i % 2 === 0 ? C.cian : C.magenta,
                      boxShadow: `0 0 9px ${i % 2 === 0 ? C.cian : C.magenta}`,
                      opacity: 0.85,
                      '--del': `${(i % 5) * 0.14}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </div>
            <p className="mt-8 mx-auto max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
              Música en vivo desde las 21:00, con baladas en español e
              inglés, y noches de karaoke. Consulta la cartelera en su{' '}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold tap-44"
                style={{ color: C.crema }}
              >
                Instagram
              </a>
              .
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div
              className="mt-12 pt-10 border-t"
              style={{ borderColor: 'rgba(243,234,217,0.12)' }}
            >
              <h3
                className={`${display.className} font-bold leading-tight text-[clamp(1.6rem,4.5vw,2.4rem)]`}
                style={{ color: C.crema }}
              >
                Salones para <span style={{ color: C.oro }}>celebraciones.</span>
              </h3>
              <p className="mt-4 mx-auto max-w-md text-base leading-relaxed" style={{ color: C.mutNoche }}>
                Cumpleaños, aniversarios y eventos: la casa tiene
                salones para celebrar con los tuyos.
              </p>
              <div className="mt-7">
                <BtnWa href={WA_EVENTO} bg={C.oro} ink={C.carbon}>
                  Cotiza tu evento
                </BtnWa>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo>Opiniones · Google</Rotulo>
                <p className="flex items-baseline gap-4">
                  <span
                    className={`${display.className} font-bold leading-none text-[clamp(4.6rem,12vw,7.5rem)]`}
                    style={{ color: C.oro, textShadow: '0 0 34px rgba(217,164,65,0.35)' }}
                  >
                    {BIZ.rating}
                  </span>
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.oro} size={22} />
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-semibold tap-44"
                  style={{ color: C.crema }}
                >
                  {BIZ.reviews} opiniones en Google
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <blockquote className="relative pl-7">
                  <span
                    className="absolute left-0 top-1 bottom-1 w-[3px] rounded-full"
                    style={{ backgroundColor: C.cian, boxShadow: `0 0 10px ${C.cian}` }}
                    aria-hidden="true"
                  />
                  <p
                    className={`${display.className} font-semibold leading-[1.2] text-[clamp(1.35rem,3.8vw,2rem)]`}
                    style={{ color: C.crema }}
                  >
                    “{REVIEWS[0].text}”
                  </p>
                  <footer className="mt-5 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.mutNoche }}>
                    <Chispa color={C.cian} />
                    {REVIEWS[0].author}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
            {REVIEWS.slice(1).map((r, i) => (
              <Reveal key={r.author} delay={i * 120}>
                <blockquote
                  className="relative pl-7 h-full border-t pt-6"
                  style={{ borderColor: 'rgba(243,234,217,0.14)' }}
                >
                  <span
                    className="absolute left-0 top-7 bottom-1 w-[3px] rounded-full"
                    style={{
                      backgroundColor: i === 0 ? C.magenta : C.brasaNeon,
                      boxShadow: `0 0 10px ${i === 0 ? C.magenta : C.brasaNeon}`,
                    }}
                    aria-hidden="true"
                  />
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                    “{r.text}”
                  </p>
                  <footer className="mt-4 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.crema }}>
                    <Chispa color={i === 0 ? C.magenta : C.brasaNeon} />
                    {r.author}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 · Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo tube={C.brasaOsc} core="#8E1F10" glow="rgba(200,50,30,0.5)">
                  Cómo llegar
                </Rotulo>
                <h2
                  className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,6.5vw,3.9rem)]`}
                >
                  Pedro de Valdivia <span style={{ color: C.brasaOsc }}>1110.</span>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                  {BIZ.address}, {BIZ.city}, en el centro de la ciudad.
                </p>
                <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: C.mutCrema }}>
                  Reservas:{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="font-semibold tap-44" style={{ color: C.carbon }}>
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={`tel:${BIZ.phone2Tel}`} className="font-semibold tap-44" style={{ color: C.carbon }}>
                    {BIZ.phone2Display}
                  </a>
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-9 max-w-md">
                  <h3
                    className={`${caps.className} text-[11px] font-semibold tracking-[0.28em] uppercase mb-4`}
                    style={{ color: C.brasaOsc }}
                  >
                    Horario
                  </h3>
                  {HORARIO.map((h) => (
                    <p
                      key={h.dias}
                      className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3 border-b text-base"
                      style={{ borderColor: C.lineL, color: C.mutCrema }}
                    >
                      <span>{h.dias}</span>
                      <span className={`${display.className} text-lg font-semibold`} style={{ color: C.carbon }}>
                        {h.horas}
                      </span>
                    </p>
                  ))}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tap-44"
                    style={{ color: C.brasaOsc }}
                  >
                    Abrir en Google Maps
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 13L13 3M6 3h7v7" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 22px 60px rgba(14,13,12,0.14)' }}
                >
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa: BarraKuda en Pedro de Valdivia 1110, Villarrica"
                    className="block w-full h-[320px] md:h-[420px]"
                    style={{ border: 0, backgroundColor: C.papel }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9 · Cierre: la barra te espera ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(700px 400px at 50% 82%, rgba(200,50,30,0.2), transparent 66%), radial-gradient(480px 300px at 50% 104%, rgba(255,62,165,0.12), transparent 70%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,4.8rem)]`}
              style={{ color: C.crema }}
            >
              Brasa, mar y{' '}
              <Neon tube={C.magenta} core="#FFE9F4" delay={140}>
                barra.
              </Neon>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
              Reserva tu mesa y ven por la parrillada, el ceviche y la
              noche de BarraKuda.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <BtnWa>Reserva por WhatsApp</BtnWa>
              <p className="flex flex-wrap justify-center gap-x-5 gap-y-1">
                <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-xl font-semibold tap-44`} style={{ color: C.crema }}>
                  {BIZ.phoneDisplay}
                </a>
                <a href={`tel:${BIZ.phone2Tel}`} className={`${display.className} text-xl font-semibold tap-44`} style={{ color: C.mutNoche }}>
                  {BIZ.phone2Display}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Footer ── */}
      <footer className="border-t" style={{ backgroundColor: C.carbonBajo, borderColor: 'rgba(217,164,65,0.2)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Chispa color={C.cian} className="w-2.5 h-2.5" />
            <div>
              <p className={`${caps.className} text-base font-semibold tracking-[0.16em] uppercase`} style={{ color: C.crema }}>
                BarraKuda Bar &amp; Grill
              </p>
              <p className="text-xs mt-0.5" style={{ color: C.mutNoche }}>
                {BIZ.rubro}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs" style={{ color: C.mutNoche }}>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 tap-44" style={{ color: C.crema }}>
              <IconIg /> {BIZ.igUser}
            </a>
            <a href={CARTA_URL} target="_blank" rel="noopener noreferrer" className="tap-44" style={{ color: C.crema }}>
              Ver la carta
            </a>
            <span>{BIZ.address}, {BIZ.city}</span>
            <a href={`tel:${BIZ.phoneTel}`} className="tap-44" style={{ color: C.crema }}>
              {BIZ.phoneDisplay}
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Reservar por WhatsApp" />
    </div>
  )
}
