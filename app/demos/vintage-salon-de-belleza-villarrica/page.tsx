import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

// Paleta del letrero: negro del aro, oro fino del hexágono y los
// florales, más los tonos de su propio trabajo (rubio, lila, cobre).
const C = {
  tinta: '#16110F',
  tinta2: '#221B16',
  oro: '#B88A3E',
  oroFino: '#D9B36A',
  oroTinta: '#6B4E18',
  rosa: '#E9C9CF',
  champa: '#E8D3A8',
  crema: '#FAF5EC',
  mutC: 'rgba(22,17,15,0.68)',
  mutD: 'rgba(250,245,236,0.74)',
  lineC: 'rgba(22,17,15,0.16)',
  lineD: 'rgba(250,245,236,0.2)',
} as const

const FOCUS = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current'
const BTN =
  'vt-btn inline-flex items-center justify-center gap-2.5 rounded-full font-semibold tracking-wide tap-44'

export const metadata: Metadata = demoMetadata({
  slug: 'vintage-salon-de-belleza-villarrica',
  title: 'Vintage Salón de Belleza · Expertos en rubias en Villarrica',
  description:
    'Salón de belleza en General Urrutia 788, Galería El Arrayán, Villarrica. Expertos en rubias: color, balayage, airtouch, corte y color fantasía. 4,4 en Google. Cotiza con una foto por WhatsApp.',
  image: `${IMG}/balayage-ondas.webp`,
})

const NAV_LINKS = [
  { label: 'Rubias', href: '#rubias' },
  { label: 'Cotizar', href: '#cotizar' },
  { label: 'El salón', href: '#salon' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

function Rotulo({
  children,
  color,
  lineColor,
  center = false,
}: {
  children: React.ReactNode
  color: string
  lineColor: string
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] ${center ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <span className="h-px w-9 shrink-0" style={{ backgroundColor: lineColor }} aria-hidden="true" />
      {children}
    </p>
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
  tone: 'oro' | 'crema' | 'lineCrema' | 'lineTinta' | 'lineOro'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'oro'
      ? { backgroundColor: C.oro, color: C.tinta }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.tinta }
        : tone === 'lineCrema'
          ? { border: '1.5px solid rgba(250,245,236,0.5)', color: C.crema }
          : tone === 'lineOro'
            ? { border: `1.5px solid ${C.oro}`, color: C.champa }
            : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${BTN} px-6 py-3 text-sm ${FOCUS}`}
      style={st}
    >
      {children}
    </a>
  )
}

/* ── Motivo: el hexágono dorado y las ramitas de su letrero ─────── */

/** Hexágono de línea fina; con pathLength=100 se dibuja con trazo. */
function Hexa({
  className = '',
  width = 1.4,
}: {
  className?: string
  width?: number
}) {
  return (
    <svg
      viewBox="0 0 300 360"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <polygon
        points="150,4 292,92 292,268 150,356 8,268 8,92"
        stroke="currentColor"
        strokeWidth={width}
        pathLength={100}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

/** Ramita floral fina dibujada a mano, como las esquinas del letrero. */
function Ramita({
  className = '',
  width = 1.5,
}: {
  className?: string
  width?: number
}) {
  return (
    <svg viewBox="0 0 60 96" className={className} aria-hidden="true" fill="none">
      <path
        d="M34 92 C 24 68 22 46 40 10"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinecap="round"
        pathLength={100}
        className="vt-trazo"
      />
      <path
        d="M30 70 C 42 66 48 56 48 46 C 38 50 32 58 30 70 Z"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinejoin="round"
        pathLength={100}
        className="vt-trazo"
        style={{ animationDelay: '2.55s' }}
      />
      <path
        d="M28 56 C 16 54 10 44 10 34 C 20 38 26 46 28 56 Z"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinejoin="round"
        pathLength={100}
        className="vt-trazo"
        style={{ animationDelay: '2.7s' }}
      />
      <path
        d="M33 42 C 44 38 48 30 48 21 C 39 25 34 32 33 42 Z"
        stroke="currentColor"
        strokeWidth={width}
        strokeLinejoin="round"
        pathLength={100}
        className="vt-trazo"
        style={{ animationDelay: '2.85s' }}
      />
      <circle cx="41" cy="11" r="2.4" stroke="currentColor" strokeWidth={width} pathLength={100} className="vt-trazo" style={{ animationDelay: '3s' }} />
      <circle cx="35" cy="4" r="1.7" stroke="currentColor" strokeWidth={width} pathLength={100} className="vt-trazo" style={{ animationDelay: '3.1s' }} />
    </svg>
  )
}

/** Hexágono chico con número o texto dentro (pasos, sellos). */
function HexaBadge({
  children,
  size = 46,
  stroke = C.oro,
  text = C.champa,
}: {
  children: React.ReactNode
  size?: number
  stroke?: string
  text?: string
}) {
  return (
    <span
      className="relative inline-flex shrink-0 items-center justify-center"
      style={{ width: size, height: size * 1.15, color: stroke }}
      aria-hidden="true"
    >
      <Hexa className="absolute inset-0 h-full w-full" width={3.4} />
      <span className={`${display.className} relative font-semibold`} style={{ color: text, fontSize: size * 0.44 }}>
        {children}
      </span>
    </span>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function VintageSalonPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Se ilumina el rubio: la foto entra en franjas, como mechones
           a los que les llega la luz. */
        @keyframes vt-mecha {
          from { clip-path: inset(0 0 100% 0); }
          to { clip-path: inset(0 0 0% 0); }
        }
        .vt-mecha { clip-path: inset(0 0 100% 0); animation: vt-mecha 0.9s cubic-bezier(0.3,0.6,0.2,1) both; }

        /* Destello dorado que acompaña a cada franja al revelarse. */
        @keyframes vt-destello {
          0% { opacity: 0; }
          35% { opacity: 0.6; }
          100% { opacity: 0; }
        }
        .vt-destello { opacity: 0; animation: vt-destello 1.1s ease-out both; }

        /* Banda de luz champán que cruza la foto en diagonal. */
        @keyframes vt-luz {
          from { transform: translateX(-170%) skewX(-14deg); }
          to { transform: translateX(360%) skewX(-14deg); }
        }
        .vt-luz { animation: vt-luz 2s cubic-bezier(0.45,0,0.3,1) 0.3s both; }

        /* El marco hexagonal y las ramitas se dibujan con trazo. */
        @keyframes vt-trazo { to { stroke-dashoffset: 0; } }
        .vt-trazo { stroke-dasharray: 100; stroke-dashoffset: 100; animation: vt-trazo 1.5s cubic-bezier(0.4,0,0.2,1) 1.7s both; }

        /* Titular línea por línea y apariciones suaves. */
        @keyframes vt-up { from { transform: translateY(114%); } to { transform: translateY(0); } }
        .vt-linea { animation: vt-up 1s cubic-bezier(0.22,0.61,0.2,1) both; }
        @keyframes vt-aparece { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: none; } }
        .vt-aparece { animation: vt-aparece 0.9s ease-out both; }

        /* Pasada de brillo: un gradiente cruza una sola vez al entrar. */
        .vt-shine { position: relative; overflow: hidden; }
        .vt-shine::after {
          content: '';
          position: absolute; inset: 0; pointer-events: none; z-index: 2;
          background: linear-gradient(105deg, transparent 38%, rgba(232,211,168,0.5) 50%, transparent 62%);
          transform: translateX(-160%);
        }
        @supports (animation-timeline: view()) {
          .vt-shine::after {
            animation: vt-sweep 1s cubic-bezier(0.35,0,0.2,1) both;
            animation-timeline: view();
            animation-range: entry 0% entry 60%;
          }
        }
        @keyframes vt-sweep { to { transform: translateX(160%); } }

        /* Fotos de sección que se abren de arriba hacia abajo. */
        @keyframes vt-wipe { from { clip-path: inset(0 0 100% 0); } to { clip-path: inset(0 0 0% 0); } }
        @supports (animation-timeline: view()) {
          .vt-wipe { animation: vt-wipe linear both; animation-timeline: view(); animation-range: entry 0% entry 70%; }
        }

        .vt-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .vt-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .vt-btn:active { transform: translateY(0) scale(0.97); }
        .vt-btn:focus-visible { outline: 3px solid currentColor; outline-offset: 3px; }

        @media (prefers-reduced-motion: reduce) {
          .vt-mecha { animation: none; clip-path: none; }
          .vt-destello { animation: none; opacity: 0; }
          .vt-luz { animation: none; opacity: 0; }
          .vt-trazo { animation: none; stroke-dashoffset: 0; }
          .vt-linea, .vt-aparece { animation: none; }
          .vt-shine::after { animation: none; transform: translateX(160%); }
          .vt-wipe { animation: none; }
        }
      `}</style>

      <div className="h-0" style={{ backgroundColor: C.tinta }}>
        <BlitzNav
          name={
            <span className={`${display.className} italic font-semibold`}>
              Vintage
            </span>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          ctaLabel="Cotizar"
          theme={{
            over: 'dark',
            bar: 'rgba(250,245,236,0.94)',
            ink: C.tinta,
            line: C.lineC,
            btnBg: C.oro,
            btnInk: C.tinta,
          }}
        />
      </div>

      {/* ── 1 · Hero: se ilumina el rubio ── */}
      <section
        id="inicio"
        className="relative overflow-hidden flex flex-col"
        style={{ backgroundColor: C.tinta }}
      >
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[136px] md:pb-16 md:min-h-svh md:grid md:grid-cols-[1.04fr_0.96fr] md:items-center md:gap-8">
          <div className="relative z-10 max-w-xl">
            <p
              className="vt-aparece flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]"
              style={{ color: C.oroFino, animationDelay: '0.15s' }}
            >
              <span className="h-px w-9" style={{ backgroundColor: 'rgba(217,179,106,0.6)' }} aria-hidden="true" />
              General Urrutia 788 · Villarrica
            </p>
            <h1
              className={`${display.className} mt-5 font-semibold leading-[0.98] tracking-[-0.015em] text-[clamp(3.4rem,13.5vw,6.4rem)]`}
              style={{ color: C.crema }}
            >
              <span className="block overflow-hidden">
                <span className="vt-linea block" style={{ animationDelay: '0.3s' }}>
                  Rubios
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="vt-linea block italic font-medium"
                  style={{ animationDelay: '0.45s', color: C.champa }}
                >
                  con firma.
                </span>
              </span>
            </h1>
            <p
              className="vt-aparece mt-6 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(250,245,236,0.85)', animationDelay: '0.75s' }}
            >
              Color, balayage y corte en pleno centro de Villarrica. El
              salón se declara experto en rubias, y cotiza tu cambio con
              una foto por WhatsApp.
            </p>
            <div className="vt-aparece mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.9s' }}>
              <Btn href={WA_LINK} tone="oro">
                <WaIcon />
                Cotiza con una foto
              </Btn>
              <Btn href="#rubias" tone="lineCrema" external={false}>
                Ver trabajos
              </Btn>
            </div>
          </div>

          {/* Foto héroe enmarcada en el hexágono del letrero */}
          <figure className="relative mt-9 md:mt-0 ml-auto w-[68%] max-w-[290px] md:w-full md:max-w-[400px]">
            <div className="relative aspect-[5/6] overflow-hidden" style={{ backgroundColor: C.tinta2 }}>
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="vt-mecha absolute top-0 bottom-0 overflow-hidden"
                  style={{
                    left: `${(i * 100) / 6}%`,
                    width: 'calc(100%/6 + 1px)',
                    animationDelay: `${0.55 + i * 0.13}s`,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/balayage-ondas.webp`}
                    alt={i === 0 ? 'Balayage rubio con ondas, trabajo real de Vintage Salón de Belleza' : ''}
                    aria-hidden={i > 0}
                    className="block h-full object-cover"
                    style={{
                      width: '600%',
                      maxWidth: 'none',
                      marginLeft: `-${i * 100}%`,
                      objectPosition: '50% 92%',
                      transform: 'scale(1.32)',
                      transformOrigin: '32% 100%',
                    }}
                  />
                  <div
                    className="vt-destello absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(180deg, rgba(232,211,168,0) 0%, rgba(232,211,168,0.85) 42%, rgba(184,138,62,0.35) 62%, rgba(232,211,168,0) 100%)',
                      animationDelay: `${0.6 + i * 0.13}s`,
                    }}
                    aria-hidden="true"
                  />
                </div>
              ))}
              {/* banda de luz */}
              <div
                className="vt-luz absolute top-[-18%] bottom-[-18%] left-0 w-[46%] pointer-events-none"
                style={{
                  background:
                    'linear-gradient(90deg, rgba(232,211,168,0) 0%, rgba(232,211,168,0.32) 32%, rgba(250,245,236,0.55) 50%, rgba(232,211,168,0.32) 68%, rgba(232,211,168,0) 100%)',
                }}
                aria-hidden="true"
              />
            </div>
            <Hexa
              className="vt-trazo absolute -inset-3 md:-inset-4 w-[calc(100%+24px)] md:w-[calc(100%+32px)] h-[calc(100%+24px)] md:h-[calc(100%+32px)] pointer-events-none"
              width={1.6}
            />
            <span className="absolute -inset-3 md:-inset-4 pointer-events-none" style={{ color: C.oro }} aria-hidden="true">
              <Ramita className="absolute -top-2 -left-2 w-[42px] md:w-[54px]" />
              <Ramita className="absolute -bottom-2 -right-2 w-[42px] md:w-[54px] rotate-180" />
            </span>
            <figcaption
              className="vt-aparece absolute -bottom-7 left-0 text-[10px] font-bold uppercase tracking-[0.26em]"
              style={{ color: 'rgba(250,245,236,0.55)', animationDelay: '2.2s' }}
            >
              Balayage · trabajo del salón
            </figcaption>
          </figure>
        </div>

        {/* barra de datos al pie del hero */}
        <div
          className="relative border-t mt-10 md:mt-0"
          style={{ borderColor: 'rgba(250,245,236,0.22)', backgroundColor: 'rgba(22,17,15,0.6)' }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold"
            style={{ color: 'rgba(250,245,236,0.78)' }}
          >
            <span>{BIZ.place}</span>
            <span>Lun a Vie 9:00 · 20:00</span>
            <span style={{ color: C.champa }}>4,4 en Google · 21 opiniones</span>
          </div>
        </div>
      </section>

      {/* ── 2 · La especialidad: expertos en rubias ── */}
      <section id="rubias" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-start">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <Rotulo color={C.oroTinta} lineColor="rgba(107,78,24,0.4)">
                  La especialidad
                </Rotulo>
                <h2
                  className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.5rem,7vw,4.4rem)] mt-4`}
                  style={{ color: C.tinta }}
                >
                  «Expertos en rubias»,{' '}
                  <em className="font-medium" style={{ color: C.oroTinta }}>
                    como se declaran.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: C.mutC }}>
                  <p>
                    Así se presenta el salón en su Instagram: especialistas
                    en color y rubios, del balayage y el airtouch al color
                    fantasía. Todo el trabajo de esta página son fotos
                    reales de su silla.
                  </p>
                  <p>
                    Cada servicio se cotiza por WhatsApp con una foto de
                    lo que quieres y otra de tu cabello.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-8">
                  <Btn href={WA_LINK} tone="lineTinta" external={true}>
                    <WaIcon />
                    Cotizar mi color
                  </Btn>
                </div>
              </Reveal>
            </div>

            {/* Collage asimétrico de trabajos */}
            <div className="grid grid-cols-6 gap-3 md:gap-4 items-start">
              <figure className="col-span-3 md:col-span-4 vt-shine">
                <Reveal>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={`${IMG}/trenza-mechas.webp`}
                      alt="Trenza con mechas platinadas sobre cabello oscuro, trabajo del salón"
                      fill
                      sizes="(min-width: 1024px) 30vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: '0% 50%', transform: 'scale(1.12)', transformOrigin: '0% 50%' }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2.5">
                    <span className={`${display.className} text-lg italic leading-none`} style={{ color: C.oroTinta }}>01</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.tinta }}>
                      Rubios y balayage
                    </span>
                  </figcaption>
                </Reveal>
              </figure>
              <figure className="col-span-3 md:col-span-2 vt-shine md:mt-14">
                <Reveal delay={80}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={`${IMG}/liso-mechas.webp`}
                      alt="Cabello liso oscuro con un mechón platinado, técnica de mechas del salón"
                      fill
                      sizes="(min-width: 1024px) 20vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 40%' }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2.5">
                    <span className={`${display.className} text-lg italic leading-none`} style={{ color: C.oroTinta }}>02</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.tinta }}>
                      Airtouch y babylight
                    </span>
                  </figcaption>
                </Reveal>
              </figure>
              <figure className="col-span-4 md:col-span-4 vt-shine">
                <Reveal delay={60}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${IMG}/lila.webp`}
                      alt="Puntas de cabello con color fantasía lila sobre base oscura"
                      fill
                      sizes="(min-width: 1024px) 32vw, 66vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 100%', transform: 'scale(1.35)', transformOrigin: '28% 78%' }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2.5">
                    <span className={`${display.className} text-lg italic leading-none`} style={{ color: C.oroTinta }}>03</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.tinta }}>
                      Color fantasía
                    </span>
                  </figcaption>
                </Reveal>
              </figure>
              <figure className="col-span-2 md:col-span-2 vt-shine">
                <Reveal delay={140}>
                  <div className="relative aspect-[2/5] overflow-hidden">
                    {/* El rostro queda fuera del encuadre: solo el cabello. */}
                    <Image
                      src={`${IMG}/corte-bob.webp`}
                      alt="Corte bob cobrizo y liso, terminado en el salón"
                      fill
                      sizes="(min-width: 1024px) 16vw, 33vw"
                      className="object-cover"
                      style={{ objectPosition: '100% 50%', transform: 'scale(1.8)', transformOrigin: '-35% 70%' }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2">
                    <span className={`${display.className} text-lg italic leading-none`} style={{ color: C.oroTinta }}>04</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.14em]" style={{ color: C.tinta }}>
                      Corte
                    </span>
                  </figcaption>
                </Reveal>
              </figure>
              <figure className="col-span-3 md:col-span-3 vt-shine">
                <Reveal delay={80}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={`${IMG}/rizos-cobrizos.webp`}
                      alt="Rizos cobrizos con reflejos dorados, color y peinado del salón"
                      fill
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 58%', transform: 'scale(1.55)', transformOrigin: '48% 62%' }}
                    />
                  </div>
                  <figcaption className="mt-2.5 flex items-baseline gap-2.5">
                    <span className={`${display.className} text-lg italic leading-none`} style={{ color: C.oroTinta }}>05</span>
                    <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.tinta }}>
                      Ondas y peinado
                    </span>
                  </figcaption>
                </Reveal>
              </figure>
              <div className="col-span-3 md:col-span-3 flex items-center justify-center min-h-[140px]" aria-hidden="true">
                <div className="relative w-24 h-28 md:w-32 md:h-36" style={{ color: 'rgba(184,138,62,0.5)' }}>
                  <Hexa className="absolute inset-0 w-full h-full" width={1.2} />
                  <Hexa className="absolute inset-4 md:inset-5 w-[calc(100%-32px)] md:w-[calc(100%-40px)] h-[calc(100%-32px)] md:h-[calc(100%-40px)]" width={1.2} />
                  <Ramita className="absolute -bottom-1 -right-2 w-[38px] md:w-[48px]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · Cómo cotizar: la foto primero ── */}
      <section id="cotizar" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.oroFino} lineColor="rgba(217,179,106,0.5)">
                Cómo se cotiza
              </Rotulo>
              <h2
                className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.5rem,6.5vw,4.2rem)] mt-4`}
                style={{ color: C.crema }}
              >
                Mandas una foto,{' '}
                <em className="font-medium" style={{ color: C.champa }}>
                  te cotizan.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Así funciona el WhatsApp del salón: su propia respuesta te
                pide una foto de lo que quieres y una de tu cabello para
                cotizar, sobre todo en balayage.
              </p>
            </Reveal>
            <ol className="mt-9 space-y-0">
              {[
                { t: 'Manda dos fotos', d: 'Una del look que quieres y otra de tu cabello actual.' },
                { t: 'Te cotizan directo', d: 'Te responden por WhatsApp con el valor de tu servicio.' },
                { t: 'Coordinas tu hora', d: 'Agendan día y hora; el sábado atienden solo hasta las 12:00.' },
              ].map((p, i) => (
                <Reveal key={p.t} delay={i * 110}>
                  <li className="relative flex gap-5 pb-8 last:pb-0">
                    {i < 2 && (
                      <span
                        className="absolute left-[23px] top-[54px] bottom-0 w-px"
                        style={{ backgroundImage: `repeating-linear-gradient(180deg, ${C.oro} 0 5px, transparent 5px 11px)`, opacity: 0.55 }}
                        aria-hidden="true"
                      />
                    )}
                    <HexaBadge size={46}>{i + 1}</HexaBadge>
                    <div className="pt-1">
                      <h3 className={`${display.className} text-xl md:text-2xl font-semibold`} style={{ color: C.crema }}>
                        {p.t}
                      </h3>
                      <p className="mt-1 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.mutD }}>
                        {p.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={240}>
              <div className="mt-9">
                <Btn href={WA_LINK} tone="oro">
                  <WaIcon />
                  Cotiza con una foto por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>

          {/* La conversación tal como la pide el salón */}
          <Reveal delay={140}>
            <div
              className="relative max-w-sm mx-auto lg:ml-auto p-5 md:p-7"
              style={{ backgroundColor: C.tinta2, border: `1px solid ${C.lineD}` }}
            >
              <span className="absolute -top-3 -right-3 w-16 h-16 pointer-events-none" style={{ color: 'rgba(184,138,62,0.55)' }} aria-hidden="true">
                <Hexa className="w-full h-full" width={2} />
              </span>
              <p className="text-[10px] font-bold uppercase tracking-[0.26em] mb-5" style={{ color: 'rgba(250,245,236,0.5)' }}>
                Así se ve en WhatsApp
              </p>
              <div className="space-y-3">
                <div
                  className="ml-8 rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed"
                  style={{ backgroundColor: C.champa, color: C.tinta }}
                >
                  Hola Vintage, quiero cotizar un balayage
                </div>
                <div
                  className="mr-8 rounded-2xl rounded-bl-sm px-4 py-3 text-sm leading-relaxed"
                  style={{ backgroundColor: 'rgba(250,245,236,0.1)', color: 'rgba(250,245,236,0.92)', border: `1px solid ${C.lineD}` }}
                >
                  Mándanos una foto de lo que quieres y una de tu cabello,
                  y te cotizamos
                </div>
                <div
                  className="ml-8 rounded-2xl rounded-br-sm px-4 py-3 text-sm leading-relaxed"
                  style={{ backgroundColor: C.champa, color: C.tinta }}
                >
                  Listo, ahí te las envío
                </div>
              </div>
              <p className="mt-5 text-[11px] leading-relaxed" style={{ color: 'rgba(250,245,236,0.55)' }}>
                Flujo real: es lo que su respuesta automática pide para
                cotizar un color o un balayage.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · El salón: galería, ladrillo y letrero ── */}
      <section id="salon" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.rosa }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.oroTinta} lineColor="rgba(107,78,24,0.4)">
                  El salón
                </Rotulo>
                <h2
                  className={`${display.className} font-semibold leading-[1.05] tracking-[-0.01em] text-[clamp(2.5rem,6.5vw,4.2rem)] mt-4`}
                  style={{ color: C.tinta }}
                >
                  Un local de galería,{' '}
                  <em className="font-medium" style={{ color: C.oroTinta }}>
                    en pleno centro.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(22,17,15,0.78)' }}>
                  <p>
                    Atiende en Galería El Arrayán, sobre General Urrutia:
                    sillones azules, ladrillo visto y en la pared el
                    letrero hexagonal que da nombre a su estilo.
                  </p>
                  <p>
                    Se trabaja con hora agendada, así que la silla te
                    espera a ti.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 max-w-md">
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(22,17,15,0.25)' }}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: C.oroTinta }}>
                      Dirección
                    </dt>
                    <dd className="text-sm font-semibold leading-snug" style={{ color: C.tinta }}>
                      {BIZ.address} · {BIZ.place}
                    </dd>
                  </div>
                  <div className="border-t pt-4" style={{ borderColor: 'rgba(22,17,15,0.25)' }}>
                    <dt className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: C.oroTinta }}>
                      Instagram
                    </dt>
                    <dd className="text-sm font-semibold leading-snug" style={{ color: C.tinta }}>
                      <a
                        href={BIZ.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`break-all underline underline-offset-4 decoration-2 hover:opacity-70 tap-44 ${FOCUS}`}
                        style={{ textDecorationColor: 'rgba(107,78,24,0.5)' }}
                      >
                        {BIZ.instagramHandle}
                      </a>
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>

            {/* Composición de tres fotos del local */}
            <div className="relative">
              <Reveal>
                <figure className="vt-wipe relative aspect-[4/3] overflow-hidden" style={{ boxShadow: '0 22px 50px rgba(22,17,15,0.22)' }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Interior del salón: sillones azules, piso de madera, ladrillo y espejos"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '58% 55%' }}
                  />
                </figure>
              </Reveal>
              <div className="mt-3 grid grid-cols-5 gap-3 items-start">
                <Reveal className="col-span-3" delay={100}>
                  <figure className="vt-shine relative aspect-[3/4] overflow-hidden" style={{ border: '1px solid rgba(22,17,15,0.2)' }}>
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada del salón en Galería El Arrayán, con su letrero y la puerta de vidrio"
                      fill
                      sizes="(min-width: 1024px) 26vw, 60vw"
                      className="object-cover"
                      style={{ objectPosition: '58% 42%' }}
                    />
                    <figcaption className="absolute bottom-0 inset-x-0 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: C.crema, backgroundColor: 'rgba(22,17,15,0.78)' }}>
                      General Urrutia 788
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal className="col-span-2" delay={200}>
                  <figure className="relative">
                    <div className="vt-shine relative aspect-[4/5] overflow-hidden">
                      <Image
                        src={`${IMG}/lila-letrero.webp`}
                        alt="Letrero hexagonal del salón: Salón de Belleza Vintage by Rosy Mendizábal"
                        fill
                        sizes="(min-width: 1024px) 18vw, 40vw"
                        className="object-cover"
                        style={{ objectPosition: '72% 20%' }}
                      />
                    </div>
                    <figcaption className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.16em] leading-relaxed" style={{ color: 'rgba(22,17,15,0.65)' }}>
                      Su letrero, en la pared
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Opiniones: la nota de Google ── */}
      <section id="opiniones" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div>
              <Reveal>
                <Rotulo color={C.oroTinta} lineColor="rgba(107,78,24,0.4)">
                  Lo que dicen
                </Rotulo>
              </Reveal>
              <Reveal delay={80}>
                <div className="mt-6 relative w-40 h-44 md:w-48 md:h-52" style={{ color: C.oro }}>
                  <Hexa className="absolute inset-0 w-full h-full" width={1.2} />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5">
                    <span className={`${display.className} font-semibold text-5xl md:text-6xl leading-none`} style={{ color: C.tinta }}>
                      {BIZ.rating}
                    </span>
                    <Stars value={BIZ.ratingValue} color={C.oro} size={15} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutC }}>
                      {BIZ.reviews} opiniones
                    </span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block mt-6 text-sm font-bold underline underline-offset-4 decoration-2 hover:opacity-70 tap-44 ${FOCUS}`}
                  style={{ color: C.oroTinta, textDecorationColor: 'rgba(107,78,24,0.45)' }}
                >
                  Ver la ficha en Google
                </a>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <blockquote className="relative">
                  <span
                    className={`${display.className} block italic font-semibold text-[clamp(1.7rem,5vw,2.9rem)] leading-[1.16]`}
                    style={{ color: C.tinta }}
                  >
                    «Excelente atención!! Lejos el mejor trabajo de color
                    que he recibido en Villarrica. 100% recomendable.»
                  </span>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="h-px w-10" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                    <span className="text-[11px] font-bold small-caps tracking-[0.22em]" style={{ color: C.oroTinta }}>
                      Eva Soledad · Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
              <Reveal delay={140}>
                <blockquote
                  className="mt-10 md:ml-14 p-6 md:p-7 relative"
                  style={{ border: `1px solid ${C.lineC}`, backgroundColor: 'rgba(233,201,207,0.28)' }}
                >
                  <span className="absolute -top-2.5 -left-2.5 w-12 h-12 pointer-events-none" style={{ color: 'rgba(184,138,62,0.6)' }} aria-hidden="true">
                    <Ramita className="w-full h-full" />
                  </span>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(22,17,15,0.85)' }}>
                    «Muy lindo el salón y atención de calidad, además
                    brindan la información necesaria para cuidar el color
                    del cabello, recomendable al 100%»
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <span className="h-px w-8" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                    <span className="text-[11px] font-bold small-caps tracking-[0.22em]" style={{ color: C.oroTinta }}>
                      Valentina Baeza · Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Dónde y cuándo ── */}
      <section id="donde" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.oroFino} lineColor="rgba(217,179,106,0.5)">
                Dónde y cuándo
              </Rotulo>
              <h2
                className={`${display.className} font-semibold leading-[1.05] tracking-[-0.01em] text-[clamp(2.5rem,6.5vw,4.2rem)] mt-4`}
                style={{ color: C.crema }}
              >
                Galería El Arrayán,{' '}
                <em className="font-medium" style={{ color: C.champa }}>
                  local{' '}9.
                </em>
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                {BIZ.address}, {BIZ.place}
                <br />
                {BIZ.city}, {BIZ.region}
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold underline underline-offset-4 decoration-2 hover:opacity-80 tap-44 ${FOCUS}`}
                  style={{ color: C.crema, textDecorationColor: 'rgba(184,138,62,0.6)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </Reveal>
            <Reveal delay={160}>
              <dl className="mt-8 max-w-md">
                {BIZ.horario.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3 border-b"
                    style={{ borderColor: 'rgba(250,245,236,0.14)' }}
                  >
                    <dt className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(250,245,236,0.6)' }}>
                      {h.d}
                    </dt>
                    <dd className={`${display.className} text-xl md:text-2xl font-medium`} style={{ color: h.h === 'cerrado' ? 'rgba(250,245,236,0.5)' : C.champa }}>
                      {h.h}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
            <Reveal delay={210}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Btn href={WA_LINK} tone="oro">
                  <WaIcon />
                  Agendar por WhatsApp
                </Btn>
                <Btn href={MAPS_URL} tone="lineOro">
                  Cómo llegar
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative">
              <div
                className="relative w-full overflow-hidden aspect-[4/3] min-h-[290px]"
                style={{ border: `1px solid rgba(184,138,62,0.45)`, boxShadow: '0 22px 50px rgba(0,0,0,0.4)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <span className="absolute -bottom-4 -left-4 w-16 h-16 pointer-events-none" style={{ color: 'rgba(184,138,62,0.6)' }} aria-hidden="true">
                <Hexa className="w-full h-full" width={2.2} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.crema, borderTop: '1px solid rgba(250,245,236,0.12)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <p className={`${display.className} italic font-semibold text-3xl md:text-4xl leading-none`}>
                Vintage{' '}
                <span className={`${body.className} not-italic text-[10px] font-bold uppercase tracking-[0.24em] align-middle`} style={{ color: C.oroFino }}>
                  {BIZ.lockup}
                </span>
              </p>
              <p className="text-sm mt-2" style={{ color: 'rgba(250,245,236,0.68)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.place}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`tap-44 inline-flex items-center hover:text-white transition-colors ${FOCUS}`} style={{ color: 'rgba(250,245,236,0.8)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`tap-44 inline-flex items-center hover:text-white transition-colors ${FOCUS}`}
                style={{ color: 'rgba(250,245,236,0.8)' }}
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(250,245,236,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(250,245,236,0.58)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 tap-44 ${FOCUS}`}
                style={{ color: C.crema }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className={`font-semibold underline underline-offset-2 tap-44 ${FOCUS}`}
                style={{ color: C.champa }}
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
