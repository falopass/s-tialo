import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, RASGOS, RESENAS, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «donde se celebra con brasas». Noche de fiesta y
 * parrilla: carbón del rescoldo, brasa encendida, madera dorada y crema,
 * con el azul marino y el rojo del óvalo del logo como sello gráfico.
 * Prata en mayúsculas espaciadas como la marca; Barlow lleva el texto.
 * brasaTxt es la brasa aclarada que da ≥ 4,5:1 sobre carbón en texto chico.
 */
const C = {
  carbon: '#17110E',
  carbonBajo: '#100C09',
  brasa: '#E8571F',
  brasaTxt: '#F0915C',
  madera: '#C28B4A',
  crema: '#F7EFE2',
  rojo: '#B3202A',
  rojoBorde: '#D94850',
  navy: '#1D2B45',
  navyBajo: '#16203A',
  mutD: 'rgba(247,239,226,0.74)',
  mutL: 'rgba(23,17,14,0.68)',
  lineD: 'rgba(247,239,226,0.16)',
  lineL: 'rgba(23,17,14,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'quincho-brasas-valdivia',
  title: 'Quincho Brasas Valdivia · Quincho y centro de eventos en Valdivia',
  description:
    'Quincho y centro de eventos en Av. Pedro Aguirre Cerda 214, Valdivia: capacidad para 80 personas, cocina equipada, sonido e iluminación. 5,0 en Google. Reserva tu fecha por WhatsApp.',
  image: `${IMG}/parrilla-brasas.webp`,
})

const NAV_LINKS = [
  { label: 'El lugar', href: '#lugar' },
  { label: 'La parrilla', href: '#parrilla' },
  { label: 'De noche', href: '#noche' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Reservar', href: '#reservar' },
]

/* Brasas que suben: posición, tamaño, ritmo y color fijos. Solo transform
   y opacity; con prefers-reduced-motion quedan detenidas y visibles. */
const BRASAS = [
  { x: 3, s: 5, dur: 11, del: -2.4, c: C.brasa, o: 0.9 },
  { x: 8, s: 3, dur: 13, del: -6.2, c: C.madera, o: 0.8 },
  { x: 13, s: 7, dur: 9.5, del: -4.1, c: C.brasa, o: 0.85 },
  { x: 19, s: 4, dur: 12.5, del: -8.3, c: C.brasa, o: 0.75 },
  { x: 25, s: 3, dur: 14, del: -1.2, c: C.crema, o: 0.55 },
  { x: 31, s: 6, dur: 10, del: -7.4, c: C.brasa, o: 0.9 },
  { x: 38, s: 4, dur: 12, del: -3.3, c: C.madera, o: 0.8 },
  { x: 44, s: 8, dur: 9, del: -5.1, c: C.brasa, o: 0.95 },
  { x: 50, s: 3, dur: 13.5, del: -10.8, c: C.brasa, o: 0.7 },
  { x: 56, s: 5, dur: 11.5, del: -0.9, c: C.crema, o: 0.5 },
  { x: 62, s: 4, dur: 10.5, del: -2.8, c: C.brasa, o: 0.85 },
  { x: 68, s: 6, dur: 9.8, del: -6.0, c: C.brasa, o: 0.9 },
  { x: 74, s: 3, dur: 14.5, del: -4.6, c: C.madera, o: 0.7 },
  { x: 80, s: 7, dur: 10.2, del: -1.7, c: C.brasa, o: 0.95 },
  { x: 86, s: 4, dur: 12.8, del: -9.0, c: C.brasa, o: 0.8 },
  { x: 91, s: 5, dur: 11.2, del: -3.9, c: C.madera, o: 0.85 },
  { x: 95, s: 3, dur: 13.2, del: -5.6, c: C.brasa, o: 0.75 },
  { x: 47, s: 4, dur: 12.2, del: -11.1, c: C.crema, o: 0.5 },
] as const

/* Pocas brasas para el bloque de contacto: mismo motivo, más suave. */
const BRASAS_CIERRE = BRASAS.filter((_, i) => i % 2 === 0)

type Brasa = (typeof BRASAS)[number]

function CampoBrasas({ items, altura = '70vh' }: { items: readonly Brasa[]; altura?: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {items.map((b, i) => (
        <span
          key={i}
          className="qb-brasa"
          style={
            {
              left: `${b.x}%`,
              bottom: '-4%',
              width: b.s,
              height: b.s,
              backgroundColor: b.c,
              boxShadow: `0 0 ${6 + b.s}px 1px ${b.c === C.crema ? 'rgba(247,239,226,0.4)' : 'rgba(232,87,31,0.6)'}`,
              '--dur': `${b.dur}s`,
              '--del': `${b.del}s`,
              '--o': b.o,
              '--subida': `-${altura}`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}

/** El óvalo del logo en miniatura: dos elipses concéntricas. */
function OvalMark({ outer, inner, className = 'w-[26px] h-[18px]' }: { outer: string; inner: string; className?: string }) {
  return (
    <svg viewBox="0 0 30 20" className={`${className} shrink-0`} fill="none" aria-hidden="true">
      <ellipse cx="15" cy="10" rx="14" ry="9" stroke={outer} strokeWidth="1.6" />
      <ellipse cx="15" cy="10" rx="9.5" ry="5" stroke={inner} strokeWidth="1.2" />
    </svg>
  )
}

/**
 * El sello del quincho: el óvalo doble del logo se dibuja al cargar y
 * el nombre aparece dentro. Marca de agua viva del demo.
 */
function Sello({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} role="img" aria-label="Sello ovalado de Quincho Brasas Valdivia">
      <svg viewBox="0 0 132 96" className="w-full h-auto overflow-visible" fill="none" aria-hidden="true">
        <ellipse
          cx="66" cy="48" rx="62" ry="43"
          stroke={C.rojoBorde} strokeWidth="2.4" pathLength={1}
          className="qb-anillo qb-anillo-1"
        />
        <ellipse
          cx="66" cy="48" rx="52" ry="33"
          stroke="rgba(247,239,226,0.75)" strokeWidth="1.4" pathLength={1}
          className="qb-anillo qb-anillo-2"
        />
      </svg>
      <div className="qb-sello-texto absolute inset-0 flex flex-col items-center justify-center text-center">
        <span
          className={`${display.className} text-[10px] md:text-[11px] uppercase leading-none tracking-[0.22em]`}
          style={{ color: C.crema }}
        >
          Quincho Brasas
        </span>
        <span
          className="mt-1 text-[8px] md:text-[9px] font-bold uppercase leading-none tracking-[0.4em]"
          style={{ color: C.brasaTxt }}
        >
          Valdivia
        </span>
      </div>
    </div>
  )
}

function Rotulo({
  children,
  color,
  outer,
  inner,
  center = false,
}: {
  children: React.ReactNode
  color: string
  outer: string
  inner: string
  center?: boolean
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5 ${center ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <OvalMark outer={outer} inner={inner} />
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

function BtnWa({
  children,
  href = WA_LINK,
  tone = 'brasa',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone?: 'brasa' | 'crema' | 'lineaD' | 'lineaL'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'brasa'
      ? { backgroundColor: C.brasa, color: C.carbonBajo }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.carbonBajo }
        : tone === 'lineaD'
          ? { border: '1.5px solid rgba(247,239,226,0.55)', color: C.crema }
          : { border: `1.5px solid ${C.carbon}`, color: C.carbon }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className={`qb-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${className}`}
      style={st}
    >
      {tone === 'brasa' && <WaIcon />}
      {children}
    </a>
  )
}

/** Marco ovalado doble: aro rojo por fuera, aro fino por dentro. */
function MarcoOval({
  src,
  alt,
  innerRing,
  caption,
  className = '',
  aspect = 'aspect-[3/4]',
}: {
  src: string
  alt: string
  innerRing: string
  caption?: string
  className?: string
  aspect?: string
}) {
  return (
    <figure className={className}>
      <div className="p-[7px] rounded-[50%]" style={{ border: `1.5px solid ${C.rojoBorde}` }}>
        <div className={`qb-oval-in relative ${aspect} rounded-[50%] overflow-hidden`} style={{ border: `1.5px solid ${innerRing}` }}>
          <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 40vw, 80vw" className="object-cover" />
        </div>
      </div>
      {caption && (
        <figcaption className="mt-4 text-center text-[11px] font-bold uppercase tracking-[0.26em]" style={{ color: innerRing }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

/** Marco con arco: la bóveda del quincho, con aro rojo. */
function MarcoArco({
  src,
  alt,
  caption,
  captionColor,
  captionClass = 'text-center',
  className = '',
  aspect = 'aspect-[4/3]',
  sizes = '(min-width: 1024px) 50vw, 100vw',
  position,
}: {
  src: string
  alt: string
  caption?: string
  captionColor: string
  captionClass?: string
  className?: string
  aspect?: string
  sizes?: string
  position?: string
}) {
  return (
    <figure className={className}>
      <div className="p-[7px] rounded-t-[999px]" style={{ border: `1.5px solid ${C.rojoBorde}`, borderBottom: 'none' }}>
        <div className={`qb-arch-in relative ${aspect} rounded-t-[999px] overflow-hidden`} style={{ backgroundColor: C.carbonBajo }}>
          <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" style={position ? { objectPosition: position } : undefined} />
        </div>
      </div>
      <div className="h-[7px] -mx-[7px] rounded-b-lg" style={{ border: `1.5px solid ${C.rojoBorde}`, borderTop: 'none' }} aria-hidden="true" />
      {caption && (
        <figcaption className={`mt-4 text-[11px] font-bold uppercase tracking-[0.26em] ${captionClass}`} style={{ color: captionColor }}>
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default function QuinchoBrasasValdiviaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.crema }}
    >
      <style>{`
        /* «Suben las brasas»: puntos encendidos que ascienden y se apagan. */
        @keyframes qb-subida {
          0% { transform: translateY(0) scale(1); opacity: 0 }
          12% { opacity: var(--o, .8) }
          68% { opacity: calc(var(--o, .8) * .55) }
          100% { transform: translateY(var(--subida, -70vh)) scale(.45); opacity: 0 }
        }
        .qb-brasa { position: absolute; border-radius: 9999px; opacity: 0; animation: qb-subida var(--dur, 10s) linear var(--del, 0s) infinite; will-change: transform, opacity }

        /* El sello: el óvalo del logo se dibuja y el texto aparece. */
        @keyframes qb-trazo { from { stroke-dashoffset: 1 } to { stroke-dashoffset: 0 } }
        .qb-anillo { stroke-dasharray: 1; stroke-dashoffset: 1; animation: qb-trazo 1.4s cubic-bezier(.6,.05,.3,1) both }
        .qb-anillo-2 { animation-delay: .55s }
        .qb-sello-texto { opacity: 0; animation: qb-sello-t .7s ease-out 1.5s both }
        @keyframes qb-sello-t { from { opacity: 0; transform: translateY(6px) } to { opacity: 1; transform: none } }

        /* Titular del hero: entra por líneas con clip-path. */
        @keyframes qb-linea { from { clip-path: inset(0 0 105% 0); transform: translateY(38%) } to { clip-path: inset(0 0 0 0); transform: none } }
        .qb-linea { animation: qb-linea 1s cubic-bezier(.25,.65,.2,1) both; animation-delay: var(--d, 0s) }

        @keyframes qb-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .qb-fade { animation: qb-fade .85s ease-out both; animation-delay: var(--d, 0s) }

        /* Revelados al bajar: óvalos que se abren en elipse y arcos que suben. */
        @supports (animation-timeline: view()) {
          .qb-oval-in { clip-path: ellipse(0% 0% at 50% 46%); animation: qb-oval linear both; animation-timeline: view(); animation-range: entry 2% entry 55% }
          @keyframes qb-oval { to { clip-path: ellipse(75% 75% at 50% 46%) } }
          .qb-arch-in { clip-path: inset(100% 0 0 0); animation: qb-arch linear both; animation-timeline: view(); animation-range: entry 2% entry 60% }
          @keyframes qb-arch { to { clip-path: inset(0 0 0 0) } }
        }

        /* Franja de brasas que cruza La parrilla de lado a lado. */
        @keyframes qb-cruce { from { transform: translateX(-12%) } to { transform: translateX(112%) } }
        .qb-cruce { position: absolute; top: 0; border-radius: 9999px; opacity: 0; animation: qb-cruce var(--dur, 12s) linear var(--del, 0s) infinite, qb-punto 2.6s ease-in-out var(--del, 0s) infinite alternate }
        @keyframes qb-punto { from { opacity: .15 } to { opacity: .9 } }

        .qb-btn { transition: transform .18s ease, filter .18s ease }
        .qb-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .qb-btn:active { transform: scale(.97) }
        .qb-btn:focus-visible { outline: 3px solid ${C.brasaTxt}; outline-offset: 3px }
        .qb-page a:focus-visible { outline: 3px solid ${C.brasaTxt}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .qb-anillo, .qb-linea, .qb-fade, .qb-sello-texto { animation: none !important }
          .qb-anillo { stroke-dashoffset: 0 }
          .qb-sello-texto { opacity: 1 }
          .qb-brasa { animation: none !important; opacity: var(--o, .7); transform: translateY(-32vh) }
          .qb-cruce { animation: none !important; opacity: .5 }
          .qb-oval-in, .qb-arch-in { clip-path: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-base md:text-lg uppercase tracking-[0.14em]`}>
            Quincho Brasas
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(23,17,14,0.95)',
          ink: C.crema,
          line: C.lineD,
          btnBg: C.brasa,
          btnInk: C.carbonBajo,
        }}
      />

      <div className="qb-page">
        {/* ── 1 · Hero: suben las brasas ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          <CampoBrasas items={BRASAS} />
          {/* halo del fuego, abajo a la izquierda */}
          <div
            className="absolute -left-40 bottom-0 w-[30rem] h-[30rem] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(closest-side, rgba(232,87,31,0.20), transparent 72%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-32 pb-10 md:pb-16 min-h-svh flex flex-col justify-center lg:grid lg:grid-cols-[1.04fr_0.96fr] gap-8 lg:gap-6 lg:items-center">
            {/* La parrilla, en el óvalo de la casa: primero en móvil */}
            <div className="relative z-10 order-1 lg:order-2 mx-auto w-[min(54vw,214px)] md:w-[min(40vw,330px)] lg:w-[min(34vw,380px)]">
              <MarcoOval
                src={`${IMG}/parrilla-brasas.webp`}
                alt="Cortes de carne sobre las brasas de la parrilla de Quincho Brasas Valdivia"
                innerRing="rgba(247,239,226,0.5)"
                className="qb-fade"
              />
              <div className="absolute -top-7 -right-5 md:-top-9 md:-right-10 w-[96px] md:w-[128px] rotate-[-7deg] drop-shadow-[0_10px_24px_rgba(16,12,9,0.55)]">
                <Sello className="w-full" />
              </div>
            </div>

            <div className="relative z-10 order-2 lg:order-1 mt-7 lg:mt-0">
              <p
                className="qb-fade flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4"
                style={{ color: C.brasaTxt, '--d': '0.15s' } as CSSProperties}
              >
                <OvalMark outer={C.rojoBorde} inner={C.brasaTxt} />
                Valdivia · Quincho y eventos
              </p>
              <h1
                className={`${display.className} uppercase leading-[1.04] tracking-[0.025em] text-[clamp(2.4rem,9vw,5.4rem)]`}
                style={{ color: C.crema }}
              >
                <span className="block">
                  <span className="qb-linea block" style={{ '--d': '0.25s' } as CSSProperties}>
                    Tu celebración,
                  </span>
                </span>
                <span className="block" style={{ color: C.brasaTxt }}>
                  <span className="qb-linea block" style={{ '--d': '0.42s' } as CSSProperties}>
                    con brasas.
                  </span>
                </span>
              </h1>
              <p
                className="qb-fade mt-4 max-w-md text-base md:text-lg leading-relaxed"
                style={{ color: C.mutD, '--d': '0.65s' } as CSSProperties}
              >
                Quincho y centro de eventos en Las Ánimas, Valdivia, con
                capacidad para 80 personas. Cuenta tu fecha y la dejamos lista.
              </p>
              <div className="qb-fade mt-6 flex flex-wrap items-center gap-x-5 gap-y-3" style={{ '--d': '0.85s' } as CSSProperties}>
                <BtnWa>Consulta tu fecha por WhatsApp</BtnWa>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 tap-44"
                  style={{ color: C.mutD }}
                >
                  <Stars value={BIZ.ratingValue} color={C.brasaTxt} size={15} />
                  <span className="text-sm">
                    <strong className="font-bold" style={{ color: C.crema }}>{BIZ.rating}</strong> · {BIZ.reviews} opiniones
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* barra de datos al pie del hero */}
          <div className="relative border-t" style={{ borderColor: C.lineD, backgroundColor: 'rgba(16,12,9,0.6)' }}>
            <div
              className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] uppercase tracking-[0.18em] font-bold"
              style={{ color: 'rgba(247,239,226,0.8)' }}
            >
              <span>Hasta 80 personas</span>
              <span>{BIZ.address}</span>
              <span style={{ color: C.brasaTxt }}>{BIZ.rating} en Google · {BIZ.reviews} opiniones</span>
            </div>
          </div>
        </section>

        {/* ── 2 · El lugar ── */}
        <section id="lugar" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.crema, color: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative pb-14">
              <MarcoArco
                src={`${IMG}/salon-montaje.webp`}
                alt="El salón de Quincho Brasas montado con mesa larga, arco de globos y proyector"
                captionColor={C.mutL}
                captionClass="text-left pr-[46%]"
                caption="El salón montado para una celebración"
                aspect="aspect-[16/10]"
                sizes="(min-width: 1024px) 46vw, 100vw"
              />
              <MarcoOval
                src={`${IMG}/salon-rosa.webp`}
                alt="El salón decorado en rosado con sillas con cinta dorada y globos"
                innerRing="rgba(23,17,14,0.35)"
                className="absolute -bottom-2 right-0 w-[42%] md:w-[38%] drop-shadow-[0_18px_36px_rgba(23,17,14,0.28)]"
              />
            </div>
            <div>
              <Reveal>
                <Rotulo color={C.rojo} outer={C.rojo} inner={C.navy}>
                  El lugar
                </Rotulo>
                <h2 className={`${display.className} uppercase leading-[1.05] tracking-[0.02em] text-[clamp(2rem,6.4vw,3.9rem)]`}>
                  Un salón listo para tu fiesta
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  Mesas largas, decoración y espacio de sobra para
                  celebraciones, reuniones y ceremonias. Llegas con tu
                  gente; el quincho ya está preparado.
                </p>
              </Reveal>
              <Reveal delay={180}>
                <div className="mt-8 flex items-end gap-5 border-t pt-6" style={{ borderColor: C.lineL }}>
                  <p className={`${display.className} leading-none text-[clamp(4.4rem,16vw,7rem)]`} style={{ color: C.brasa }}>
                    {BIZ.capacidad}
                  </p>
                  <p className="pb-2 text-[11px] font-bold uppercase tracking-[0.22em] max-w-[120px] leading-relaxed" style={{ color: C.mutL }}>
                    personas por evento
                  </p>
                </div>
                <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                  {RASGOS.slice(1).map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.carbon }}>
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.brasa, boxShadow: '0 0 7px 1px rgba(232,87,31,0.5)' }} aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · La parrilla ── */}
        <section id="parrilla" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          {/* franja de brasas que cruza el fondo */}
          <div className="absolute inset-x-0 top-1/3 h-24 pointer-events-none" aria-hidden="true">
            {[
              { s: 4, dur: 13, del: 0, c: C.brasa },
              { s: 6, dur: 17, del: 3.5, c: C.madera },
              { s: 3, dur: 11, del: 6.8, c: C.brasa },
              { s: 5, dur: 15, del: 1.8, c: C.brasa },
              { s: 4, dur: 19, del: 8.4, c: C.crema },
              { s: 7, dur: 14, del: 5.2, c: C.brasa },
              { s: 3, dur: 12, del: 9.6, c: C.madera },
              { s: 5, dur: 16, del: 2.6, c: C.brasa },
            ].map((b, i) => (
              <span
                key={i}
                className="qb-cruce"
                style={
                  {
                    top: `${(i * 13) % 60 + 6}%`,
                    left: 0,
                    width: b.s,
                    height: b.s,
                    backgroundColor: b.c,
                    boxShadow: `0 0 ${5 + b.s}px 1px rgba(232,87,31,0.55)`,
                    '--dur': `${b.dur}s`,
                    '--del': `${b.del}s`,
                  } as CSSProperties
                }
              />
            ))}
          </div>
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Rotulo center color={C.brasaTxt} outer={C.rojoBorde} inner={C.brasaTxt}>
                La parrilla
              </Rotulo>
              <h2 className={`${display.className} uppercase leading-[1.05] tracking-[0.02em] text-[clamp(2.1rem,7vw,4.2rem)]`}>
                El fuego,
                <br />
                siempre encendido
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 mx-auto max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                Corazón del quincho: una novedosa parrilla automatizada
                que mantiene las brasas a punto mientras la celebración
                sigue su curso.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <MarcoArco
                src={`${IMG}/carne-cortada.webp`}
                alt="Carne asada recién cortada en lonjas sobre una tabla, salida de la parrilla"
                captionColor={C.mutD}
                caption="Recién salida de las brasas"
                className="mt-10 max-w-2xl mx-auto"
                aspect="aspect-[3/2]"
                sizes="(min-width: 768px) 620px, 92vw"
                position="50% 60%"
              />
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 mx-auto max-w-md text-sm md:text-base leading-relaxed" style={{ color: 'rgba(247,239,226,0.62)' }}>
                El asado se sirve en lonjas sobre la tabla, con el humo
                todavía en el aire.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · De noche ── */}
        <section id="noche" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.navy }}>
          <div
            className="absolute -right-40 -top-40 w-[28rem] h-[28rem] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(closest-side, rgba(194,139,74,0.16), transparent 72%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="max-w-xl">
              <Reveal>
                <Rotulo color={C.madera} outer={C.rojoBorde} inner={C.madera}>
                  De noche
                </Rotulo>
                <h2 className={`${display.className} uppercase leading-[1.05] tracking-[0.02em] text-[clamp(2rem,6.4vw,3.9rem)]`} style={{ color: C.crema }}>
                  Se apagan las brasas, se enciende la fiesta
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247,239,226,0.78)' }}>
                  Equipos de sonido e iluminación propios: la mesa se
                  corre y el salón cambia de ritmo sin moverse del lugar.
                </p>
              </Reveal>
            </div>
            <ul className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-7">
              {[
                { src: `${IMG}/luces.webp`, alt: 'El salón de Quincho Brasas con luces de fiesta verdes y azules y un ramo de rosas', pie: 'El salón de fiesta' },
                { src: `${IMG}/escenario.webp`, alt: 'Escenario del quincho con guitarra y teclado bajo luz violeta y pared de madera', pie: 'El escenario' },
                { src: `${IMG}/teclado-salon.webp`, alt: 'Teclado en primer plano con el salón de mesas de madera al fondo', pie: 'Sonido en vivo' },
                { src: `${IMG}/copas-vino.webp`, alt: 'Copas y botellas de vino servidas sobre la mesa durante la celebración', pie: 'El brindis' },
              ].map((f, i) => (
                <li key={f.src} className={i % 2 === 1 ? 'lg:mt-10' : ''}>
                  <Reveal delay={i * 90}>
                    <MarcoArco
                      src={f.src}
                      alt={f.alt}
                      caption={f.pie}
                      captionColor="rgba(247,239,226,0.72)"
                      aspect="aspect-[3/4]"
                      sizes="(min-width: 1024px) 22vw, 44vw"
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 5 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.crema, color: C.carbon }}>
          {/* óvalo de agua detrás del medallón */}
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
              <div className="text-center lg:text-left">
                <Reveal>
                  <Rotulo color={C.rojo} outer={C.rojo} inner={C.navy} center={false}>
                    Opiniones en Google
                  </Rotulo>
                  <div className="relative inline-block">
                    <div
                      className="absolute -inset-5 md:-inset-7 rounded-[50%] pointer-events-none"
                      style={{ border: `1.5px solid rgba(179,32,42,0.4)` }}
                      aria-hidden="true"
                    />
                    <p className={`${display.className} leading-none text-[clamp(4.6rem,18vw,7.4rem)]`}>
                      5,0
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-center lg:justify-start gap-3">
                    <Stars value={BIZ.ratingValue} color={C.brasa} size={18} />
                    <p className="text-sm font-bold" style={{ color: C.mutL }}>
                      {BIZ.reviews} opiniones
                    </p>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.rojo, textDecorationColor: 'rgba(179,32,42,0.4)' }}
                  >
                    Ver la ficha en Google
                  </a>
                </Reveal>
              </div>
              <div>
                <Reveal>
                  <blockquote>
                    <p className={`${display.className} leading-[1.22] text-[clamp(1.35rem,4.2vw,2rem)]`}>
                      «{RESENAS[0].quote}»
                    </p>
                    <footer className="mt-5 flex items-center gap-3 text-[12px] font-bold tracking-[0.14em]" style={{ color: C.rojo }}>
                      <OvalMark outer={C.rojo} inner={C.navy} className="w-[22px] h-[15px]" />
                      {RESENAS[0].who}
                    </footer>
                  </blockquote>
                </Reveal>
                <div className="mt-9 grid sm:grid-cols-2 gap-5">
                  {RESENAS.slice(1).map((r, i) => (
                    <Reveal key={r.who} delay={100 + i * 90} className="h-full">
                      <blockquote
                        className="h-full rounded-2xl p-5 flex flex-col"
                        style={{ border: `1px solid ${C.lineL}`, backgroundColor: 'rgba(255,255,255,0.45)' }}
                      >
                        <p className="text-sm md:text-[15px] leading-relaxed flex-1">«{r.quote}»</p>
                        <footer className="mt-4 text-[11px] font-bold tracking-[0.14em]" style={{ color: C.rojo }}>
                          {r.who}
                        </footer>
                      </blockquote>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Cómo llegar y reservar ── */}
        <section id="reservar" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          <CampoBrasas items={BRASAS_CIERRE} altura="56vh" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo color={C.brasaTxt} outer={C.rojoBorde} inner={C.brasaTxt}>
                    Cómo llegar
                  </Rotulo>
                  <h2 className={`${display.className} uppercase leading-[1.06] tracking-[0.02em] text-[clamp(2rem,6.4vw,3.7rem)]`}>
                    {BIZ.barrio},
                    <br />
                    Valdivia
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}, Chile
                    <br />
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex font-bold underline underline-offset-4 decoration-2 tap-44"
                      style={{ color: C.crema, textDecorationColor: 'rgba(232,87,31,0.55)' }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </address>
                  <p className="mt-4 text-sm md:text-base leading-relaxed max-w-sm" style={{ color: 'rgba(247,239,226,0.62)' }}>
                    Reserva tu fecha por WhatsApp y coordinan la visita
                    para conocer el quincho.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-3">
                    <BtnWa>Consulta tu fecha</BtnWa>
                    <BtnWa href={MAPS_URL} tone="lineaD">
                      Abrir ruta en Maps
                    </BtnWa>
                  </div>
                  <p className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold" style={{ color: C.mutD }}>
                    <span style={{ color: 'rgba(247,239,226,0.55)' }}>Síguelos:</span>
                    <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 tap-44" style={{ color: C.crema, textDecorationColor: 'rgba(232,87,31,0.55)' }}>
                      Instagram
                    </a>
                    <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-2 tap-44" style={{ color: C.crema, textDecorationColor: 'rgba(232,87,31,0.55)' }}>
                      Facebook
                    </a>
                  </p>
                </Reveal>
              </div>
              <div className="flex flex-col gap-8">
                <Reveal delay={80}>
                  <MarcoArco
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Quincho Brasas Valdivia con su letrero y la reja del jardín"
                    captionColor={C.mutD}
                    caption={`${BIZ.address}, ${BIZ.barrio}`}
                    aspect="aspect-[4/3]"
                    sizes="(min-width: 1024px) 46vw, 100vw"
                  />
                </Reveal>
                <Reveal delay={140}>
                  <div
                    className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] min-h-[280px]"
                    style={{ border: `1.5px solid ${C.rojoBorde}`, boxShadow: '0 20px 48px rgba(16,12,9,0.45)' }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="absolute inset-0 block w-full h-full"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · El brindis: cierre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.carbonBajo }}>
          <div className="absolute inset-0">
            <Image
              src={`${IMG}/brindis.webp`}
              alt="Brindis con copas de espumante y luces cálidas de fondo en Quincho Brasas"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '50% 40%' }}
            />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(16,12,9,0.82) 0%, rgba(16,12,9,0.55) 45%, rgba(16,12,9,0.9) 100%)' }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
            <Reveal>
              <Rotulo center color={C.brasaTxt} outer={C.rojoBorde} inner={C.brasaTxt}>
                Te esperan
              </Rotulo>
              <h2 className={`${display.className} uppercase leading-[1.06] tracking-[0.02em] text-[clamp(2.2rem,8vw,4.6rem)]`}>
                El próximo brindis
                <br />
                puede ser el tuyo
              </h2>
              <p className="mt-5 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247,239,226,0.85)' }}>
                Celebraciones, fiestas, reuniones y fines de año:
                consulta tu fecha y ven a conocer el quincho.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <BtnWa tone="brasa">Consulta tu fecha por WhatsApp</BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.carbonBajo, color: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="inline-block w-9 h-9 rounded-full overflow-hidden shrink-0" style={{ border: `1.5px solid ${C.rojoBorde}` }}>
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo de 150px usado pequeño */}
                  <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} width={36} height={36} className="w-full h-full object-cover" />
                </span>
                <div>
                  <p className={`${display.className} uppercase tracking-[0.12em] text-base md:text-lg leading-tight`}>
                    {BIZ.name}
                  </p>
                  <p className="text-xs" style={{ color: 'rgba(247,239,226,0.6)' }}>
                    {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-xs font-semibold" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,239,226,0.82)' }}>
                    {l.label}
                  </a>
                ))}
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,239,226,0.82)' }}>
                  Instagram
                </a>
              </nav>
            </div>
            <div className="border-t mt-4 pt-3.5" style={{ borderColor: C.lineD }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,239,226,0.55)' }}>
                Sitio de muestra preparado por{' '}
                <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.brasaTxt }}>
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
