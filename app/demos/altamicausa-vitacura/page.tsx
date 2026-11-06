import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_COMPARTIR,
  WA_CARTA,
  WA_CUMPLE,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  PRESENTACIONES,
  CARTA,
  TRAGOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const caps = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})

// «El Perú, servido para compartir»: el azul de su logo, la noche de
// Vitacura, el naranjo causa, el oro de sus estrellas y la crema de la carta.
const C = {
  azul: '#173E96',
  azulBajo: '#0E2B6E',
  noche: '#0B1430',
  nocheBajo: '#070E22',
  naranjo: '#F27A2A',
  naranjoOsc: '#C25A14', // naranjo oscuro: legible sobre crema
  oro: '#E2B04A',
  crema: '#F6EFE4',
  papel: '#FCF8EE',
  mutNoche: 'rgba(246,239,228,0.74)',
  mutAzul: 'rgba(233,226,212,0.78)',
  mutCrema: 'rgba(11,20,48,0.68)',
  lineD: 'rgba(226,176,74,0.30)',
  lineL: 'rgba(11,20,48,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'altamicausa-vitacura',
  title: 'Altamicausa · Cocina peruana e internacional en Vitacura',
  description:
    'Ceviches, tiraditos, criollos y coctelería de autor en Av. Nueva Costanera 3666, Vitacura. Lunes a sábado de 11:00 a 23:00. Reserva tu mesa por WhatsApp.',
  image: '/demos/altamicausa-vitacura/tiradito-atun.webp',
})

const NAV_LINKS = [
  { label: 'Para compartir', href: '#presentaciones' },
  { label: 'La carta', href: '#carta' },
  { label: 'La barra', href: '#barra' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'El local', href: '#local' },
]

const FRANJA = [
  'CEVICHES',
  'TIRADITOS',
  'CAUSAS',
  'CRIOLLOS',
  'PARRILLA',
  'COCTELERÍA DE AUTOR',
] as const

const FRANJA_CAUSA = [
  'Tabulé de Quinua',
  'Ceviche de Champiñones',
  'Lasagna de Verduras',
  'Papardelles de Verduras',
] as const

/** Estrella de cuatro puntas del logo: separador y detalle dorado. */
function Estrella({ className = 'w-3 h-3', color = C.oro }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
    </svg>
  )
}

/** Rótulo en versalitas Marcellus con filete y estrella dorada. */
function Rotulo({ children, color = C.oro }: { children: React.ReactNode; color?: string }) {
  return (
    <p
      className={`${caps.className} flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6`}
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
      <span>{children}</span>
      <Estrella className="w-2.5 h-2.5 shrink-0" color={color} />
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.naranjo,
  ink = C.noche,
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
      className="am-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-medium tap-44"
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

function IconTikTok({ className = 'w-[14px] h-[14px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 2c.4 2.2 1.8 3.7 4.4 3.9v3c-1.7 0-3.2-.5-4.4-1.3v6.6c0 3.9-2.7 6.8-6.6 6.8-3.6 0-6-2.6-6-5.9 0-3.6 3-6 6.6-5.7v3.1c-1.9-.3-3.5.8-3.5 2.7 0 1.6 1.3 2.8 3 2.8 1.9 0 3.4-1.5 3.4-3.9V2h3.1Z" />
    </svg>
  )
}

/** Las cinco estrellas de Google encendiéndose una a una. */
function CincoEstrellas({ delay = 1.9 }: { delay?: number }) {
  return (
    <span className="inline-flex items-center gap-1" role="img" aria-label="5 de 5 estrellas">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="am-estrella w-[18px] h-[18px] md:w-5 md:h-5"
          style={{ '--am-d': `${delay + i * 0.13}s` } as CSSProperties}
          aria-hidden="true"
        >
          <path
            d="M12 2.6l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.4l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9Z"
            fill={C.oro}
          />
        </svg>
      ))}
    </span>
  )
}

export default function AltamicausaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: C.crema }}
    >
      <style>{`
        /* «La mesa se sirve»: cada plato llega desde abajo con un leve
           giro que se endereza, escalonados como servidos a la mesa. */
        @keyframes am-plato {
          from { transform: translateY(64px) rotate(var(--am-r0, 0deg)); opacity: 0 }
          to { transform: translateY(0) rotate(var(--am-r1, 0deg)); opacity: 1 }
        }
        .am-plato { animation: am-plato 1.1s cubic-bezier(.2,.65,.25,1) both; animation-delay: var(--am-d, 0s) }

        /* El arco naranjo del logo se dibuja por encima del titular. */
        @keyframes am-arco { from { stroke-dashoffset: 1000 } to { stroke-dashoffset: 0 } }
        .am-arco { animation: am-arco 1.4s cubic-bezier(.45,.05,.3,1) .45s both }

        /* Las estrellas doradas se encienden una tras otra. */
        @keyframes am-estrella {
          0% { transform: scale(.2); opacity: 0 }
          62% { transform: scale(1.28); opacity: 1 }
          100% { transform: scale(1); opacity: 1 }
        }
        .am-estrella { transform-origin: center; transform-box: fill-box; animation: am-estrella .55s cubic-bezier(.3,1.4,.45,1) both; animation-delay: var(--am-d, 0s) }

        @keyframes am-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .am-fade { animation: am-fade .9s ease-out both; animation-delay: var(--am-d, 0s) }

        /* Presentaciones: cortina vertical y zoom de salida al hacer scroll. */
        @supports (animation-timeline: view()) {
          .am-cortina { clip-path: inset(0 0 100% 0); animation: am-cortina linear both; animation-timeline: view(); animation-range: entry 2% entry 60% }
          @keyframes am-cortina { to { clip-path: inset(0 0 0 0) } }
          .am-zoom { transform: scale(1.06); animation: am-zoom linear both; animation-timeline: view(); animation-range: entry 2% entry 85% }
          @keyframes am-zoom { to { transform: scale(1) } }
        }

        .am-btn { transition: transform .18s ease, filter .18s ease }
        .am-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .am-btn:active { transform: scale(.97) }
        .am-btn:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .am-plato, .am-arco, .am-estrella, .am-fade { animation: none !important }
          .am-arco { stroke-dashoffset: 0 !important }
          .am-cortina { clip-path: none !important; animation: none !important }
          .am-zoom { transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5 min-w-0">
            <Image
              src={`${IMG}/logo.webp`}
              alt="Logo de Altamicausa"
              width={1360}
              height={860}
              className="h-9 w-auto shrink-0 rounded-md"
              priority
            />
            <span className={`${display.className} font-semibold tracking-[0.02em] truncate`}>
              Altamicausa
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,20,48,0.94)',
          ink: C.crema,
          line: 'rgba(226,176,74,0.22)',
          btnBg: C.naranjo,
          btnInk: C.noche,
        }}
      />

      {/* ── 1 · Hero noche: la mesa se sirve ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(880px 500px at 80% 8%, rgba(23,62,150,0.5), transparent 62%), radial-gradient(560px 420px at 2% 100%, rgba(242,122,42,0.08), transparent 60%), radial-gradient(720px 420px at 55% 118%, rgba(226,176,74,0.06), transparent 65%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[88px] md:pt-[128px] pb-12 md:pb-16">
          {/* El arco del logo se dibuja sobre la mesa; dentro, sus estrellas */}
          <svg
            viewBox="0 0 1200 210"
            className="block w-full h-auto select-none pointer-events-none mb-1 md:mb-2"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="am-arco"
              d="M20 196 Q 600 -66 1180 196"
              stroke={C.naranjo}
              strokeWidth="3"
              strokeLinecap="round"
              pathLength={1000}
              strokeDasharray={1000}
            />
            <path
              className="am-estrella"
              style={{ '--am-d': '1.95s' } as CSSProperties}
              d="M600 30l4.4 14 14 4.4-14 4.4-4.4 14-4.4-14-14-4.4 14-4.4Z"
              fill={C.oro}
            />
            <path
              className="am-estrella"
              style={{ '--am-d': '2.1s' } as CSSProperties}
              d="M516 70l3.2 10 10 3.2-10 3.2-3.2 10-3.2-10-10-3.2 10-3.2Z"
              fill={C.oro}
            />
            <path
              className="am-estrella"
              style={{ '--am-d': '2.25s' } as CSSProperties}
              d="M684 72l3.2 10 10 3.2-10 3.2-3.2 10-3.2-10-10-3.2 10-3.2Z"
              fill={C.oro}
            />
          </svg>

          <div className="grid lg:grid-cols-12 lg:gap-x-8">
            <p
              className={`${caps.className} am-fade flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6 lg:col-start-1 lg:col-span-6 lg:row-start-1`}
              style={{ color: C.oro, '--am-d': '0.15s' } as CSSProperties}
            >
              <span className="block h-px w-7 shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
              <span>Cocina peruana e internacional · Vitacura</span>
              <Estrella className="w-2.5 h-2.5 shrink-0" />
            </p>

            <h1
              className={`${display.className} am-fade font-medium leading-[0.98] tracking-[-0.01em] text-[clamp(2.9rem,10.5vw,5.6rem)] lg:col-start-1 lg:col-span-6 lg:row-start-2`}
              style={{ color: C.crema, '--am-d': '0.3s' } as CSSProperties}
            >
              El Perú, servido
              <br />
              para{' '}
              <em className="font-medium" style={{ color: C.naranjo }}>
                compartir.
              </em>
            </h1>

            {/* La mesa se sirve: tres platos llegan a la mesa, abanico
                bajo el titular en celular, composición al lado en escritorio */}
            <div
              className="relative h-[264px] mt-7 lg:mt-0 lg:h-[520px] lg:col-start-7 lg:col-span-6 lg:row-start-1 lg:row-span-5"
              aria-hidden="true"
            >
              <Image
                src={`${IMG}/al-fuego.webp`}
                alt=""
                width={640}
                height={1136}
                className="am-plato absolute left-0 top-[58px] w-[112px] h-auto rounded-xl lg:top-[242px] lg:w-[168px]"
                style={{ '--am-r0': '-14deg', '--am-r1': '-7deg', '--am-d': '0.55s', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' } as CSSProperties}
              />
              <Image
                src={`${IMG}/carrusel-criollo.webp`}
                alt=""
                width={1440}
                height={1230}
                className="am-plato absolute right-0 top-[86px] w-[124px] h-auto rounded-xl lg:top-[302px] lg:w-[206px]"
                style={{ '--am-r0': '13deg', '--am-r1': '6deg', '--am-d': '0.73s', boxShadow: '0 24px 60px rgba(0,0,0,0.45)' } as CSSProperties}
              />
              <Image
                src={`${IMG}/tiradito-atun.webp`}
                alt=""
                width={1215}
                height={1600}
                className="am-plato absolute left-1/2 ml-[-88px] top-0 w-[176px] h-auto rounded-t-full rounded-b-xl lg:ml-[-142px] lg:w-[284px] lg:rounded-b-2xl"
                style={{
                  '--am-r0': '4deg',
                  '--am-r1': '0deg',
                  '--am-d': '0.37s',
                  outline: '1px solid rgba(226,176,74,0.5)',
                  outlineOffset: '7px',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.5)',
                } as CSSProperties}
              />
            </div>

            <p
              className="am-fade mt-6 lg:mt-8 max-w-md text-base md:text-lg leading-relaxed lg:col-start-1 lg:col-span-6 lg:row-start-3"
              style={{ color: C.mutNoche, '--am-d': '0.6s' } as CSSProperties}
            >
              Ceviches, tiraditos, criollos y coctelería de autor en
              Nueva Costanera 3666. Una cocina con carácter y una
              mirada contemporánea.
            </p>

            <div
              className="am-fade mt-7 flex flex-wrap gap-3 lg:col-start-1 lg:col-span-6 lg:row-start-4"
              style={{ '--am-d': '0.75s' } as CSSProperties}
            >
              <BtnWa>Reserva tu mesa</BtnWa>
              <a
                href="#carta"
                className="am-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-base font-medium tap-44"
                style={{ border: `1px solid rgba(246,239,228,0.5)`, color: C.crema }}
              >
                Ver la carta
              </a>
            </div>

            <div
              className="am-fade mt-8 flex items-center gap-3 lg:col-start-1 lg:col-span-6 lg:row-start-5"
              style={{ '--am-d': '2.5s' } as CSSProperties}
            >
              <CincoEstrellas delay={1.9} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm tap-44"
                style={{ color: C.mutNoche }}
              >
                <strong className="font-semibold" style={{ color: C.crema }}>
                  {BIZ.rating}
                </strong>
                {' '}· {BIZ.reviews} opiniones en Google
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Franja dorada ── */}
      <div
        className="border-y"
        style={{ backgroundColor: C.nocheBajo, borderColor: C.lineD }}
        aria-hidden="true"
      >
        <div
          className={`${caps.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10px] md:text-[11px] tracking-[0.3em]`}
          style={{ color: C.oro }}
        >
          {FRANJA.map((item, i) => (
            <span key={item} className="inline-flex items-center gap-4">
              {i > 0 && <Estrella className="w-2 h-2" />}
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── 3 · Manifiesto sobre crema ── */}
      <section id="propuesta" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <Rotulo color={C.azul}>Nuestra propuesta</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)]`}
              >
                Cada plato tiene algo que{' '}
                <em style={{ color: C.azul }}>contar.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 space-y-5 text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                <p>
                  Una propuesta gastronómica que celebra la riqueza y
                  diversidad de la cocina peruana, donde tradición, sabor
                  e identidad se encuentran en cada plato.
                </p>
                <p>
                  Ingredientes cuidadosamente seleccionados, una cocina
                  con carácter y una mirada contemporánea.
                </p>
              </div>
              <p className="mt-8 flex items-center gap-3">
                <Estrella className="w-3 h-3" />
                <span className="block h-px w-16" style={{ backgroundColor: C.lineL }} aria-hidden="true" />
                <Estrella className="w-3 h-3" />
              </p>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <div className="relative h-[380px] md:h-[520px]">
                <div className="absolute left-0 top-0 w-[60%] aspect-[3/4] overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/limones.webp`}
                    alt="Limones de pica y cebolla morada en un bowl: la despensa peruana"
                    fill
                    sizes="(min-width: 1024px) 34vw, 60vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute right-0 bottom-0 w-[46%] aspect-[3/4] overflow-hidden rounded-t-full rounded-b-xl"
                  style={{ outline: `1px solid ${C.lineD}`, outlineOffset: '7px' }}
                >
                  <Image
                    src={`${IMG}/lomo-saltado.webp`}
                    alt="Lomo saltado sirviéndose con su salsa al wok, arroz y papas"
                    fill
                    sizes="(min-width: 1024px) 26vw, 46vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Presentaciones para compartir ── */}
      <section id="presentaciones" className="scroll-mt-20" style={{ backgroundColor: C.azul }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Rotulo>Presentaciones · Para compartir</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.0] tracking-[-0.01em] text-[clamp(2.3rem,6.5vw,4.2rem)]`}
                style={{ color: C.crema }}
              >
                El Perú llega al{' '}
                <em style={{ color: C.oro }}>centro de la mesa.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutAzul }}>
                Un espacio para compartir, disfrutar y dejarse sorprender:
                sus presentaciones de autor bajan al centro y la mesa
                entera se sirve de ellas.
              </p>
            </Reveal>
          </div>

          {PRESENTACIONES.map((p, i) => (
            <article
              key={p.nombre}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-12 md:py-16 border-t"
              style={{ borderColor: 'rgba(226,176,74,0.25)' }}
            >
              <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <Reveal>
                  <div
                    className={`am-cortina overflow-hidden rounded-xl md:rounded-2xl ${
                      p.nombre === 'Rueda de Alitas' ? 'max-w-[400px] mx-auto lg:mx-0 aspect-[4/5]' : 'aspect-[7/6]'
                    } relative`}
                  >
                    <Image
                      src={`${IMG}/${p.foto}`}
                      alt={p.alt}
                      fill
                      sizes={p.nombre === 'Rueda de Alitas' ? '(min-width: 1024px) 34vw, 82vw' : '(min-width: 1024px) 55vw, 100vw'}
                      className="am-zoom object-cover"
                    />
                  </div>
                </Reveal>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Reveal delay={80}>
                  <p
                    className={`${display.className} font-medium text-6xl md:text-7xl leading-none`}
                    style={{ color: 'rgba(226,176,74,0.78)' }}
                    aria-hidden="true"
                  >
                    {p.numeral}
                  </p>
                  <h3
                    className={`${display.className} mt-3 font-medium leading-[1.02] text-[clamp(2.1rem,5.5vw,3.4rem)]`}
                    style={{ color: C.crema }}
                  >
                    {p.nombre}
                  </h3>
                  {'lema' in p && (
                    <p className={`${display.className} mt-1 italic text-xl md:text-2xl`} style={{ color: C.oro }}>
                      {p.lema}
                    </p>
                  )}
                  <ul className="mt-7 space-y-0">
                    {p.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-3 py-2.5 border-b text-[15px] md:text-base"
                        style={{ borderColor: 'rgba(233,226,212,0.14)', color: C.mutAzul }}
                      >
                        <Estrella className="w-2 h-2 shrink-0 translate-y-[-1px]" color={C.oro} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </article>
          ))}

          <Reveal>
            <div className="pt-10 flex justify-center">
              <BtnWa href={WA_COMPARTIR}>Reserva para compartir</BtnWa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · La carta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-3xl">
            <Reveal>
              <Rotulo color={C.azul}>La carta</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)]`}
              >
                Cada preparación,{' '}
                <em style={{ color: C.azul }}>desde cero.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                Ceviches, causas, criollos, parrilla y risottos, y una
                carta vegana con identidad propia.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Fotos del mar y la huerta */}
            <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
              <Reveal>
                <div
                  className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-xl"
                  style={{ outline: `1px solid ${C.lineD}`, outlineOffset: '7px' }}
                >
                  <Image
                    src={`${IMG}/conchas.webp`}
                    alt="Conchas en plato alargado servidas en diagonal"
                    fill
                    sizes="(min-width: 1024px) 30vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative aspect-[4/5] lg:aspect-[3/4] lg:w-[72%] lg:ml-auto overflow-hidden rounded-xl lg:mt-[-18px]">
                  <Image
                    src={`${IMG}/tabule-quinua.webp`}
                    alt="Tabulé de quinua coronado con palta en rosa, opción vegana de la casa"
                    fill
                    sizes="(min-width: 1024px) 22vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            {/* La carta impresa */}
            <Reveal delay={80} className="lg:col-span-8">
              <div
                className="rounded-lg p-6 md:p-10"
                style={{
                  backgroundColor: C.papel,
                  border: `1px solid ${C.lineD}`,
                  boxShadow: '0 24px 60px rgba(11,20,48,0.10), inset 0 0 0 4px rgba(226,176,74,0.08)',
                }}
              >
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-9">
                  {CARTA.map((g) => (
                    <div key={g.grupo}>
                      <h3
                        className={`${caps.className} flex items-center gap-2.5 text-[11px] tracking-[0.26em] uppercase pb-3 border-b`}
                        style={{ color: C.azul, borderColor: C.lineL }}
                      >
                        <Estrella className="w-2.5 h-2.5 shrink-0" color={C.oro} />
                        {g.grupo}
                      </h3>
                      <ul>
                        {g.platos.map((plato) => (
                          <li
                            key={plato}
                            className={`${display.className} py-2 border-b font-medium text-[17px] md:text-lg leading-snug`}
                            style={{ borderColor: 'rgba(11,20,48,0.08)', color: C.noche }}
                          >
                            {plato}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p className="mt-9 pt-6 border-t text-sm leading-relaxed" style={{ borderColor: C.lineL, color: C.mutCrema }}>
                  También en carta: risotto a la huancaína con lomo
                  saltado, risotto al vino tinto y risotto apaltado. La
                  opción vegana suma {FRANJA_CAUSA.join(', ').replace(/, ([^,]*)$/, ' y $1')}.
                </p>
                <div className="mt-7">
                  <a
                    href={WA_CARTA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="am-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-base font-medium whitespace-nowrap tap-44"
                    style={{ backgroundColor: C.azul, color: C.crema }}
                  >
                    <svg viewBox="0 0 24 24" className="w-[17px] h-[17px] shrink-0" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                    Pide la carta por WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Barra y Happy Hour ── */}
      <section id="barra" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-5">
            <Reveal>
              <div
                className="relative aspect-[4/5] max-w-[420px] overflow-hidden rounded-xl"
                style={{ outline: `1px solid ${C.lineD}`, outlineOffset: '8px' }}
              >
                <Image
                  src={`${IMG}/barra.webp`}
                  alt="Coctelera y copa con hielo en la barra de Altamicausa"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal>
              <Rotulo>Barra · Coctelería de autor</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)]`}
                style={{ color: C.crema }}
              >
                Coctelería con <em style={{ color: C.oro }}>identidad</em>,
                equilibrio y carácter.
              </h2>
              <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                Buena mesa, coctelería de autor y momentos para disfrutar
                sin apuro.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="mt-10 rounded-lg p-6 md:p-8"
                style={{ border: `1px solid ${C.lineD}`, backgroundColor: 'rgba(226,176,74,0.05)' }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className={`${display.className} italic font-medium text-3xl md:text-4xl leading-none`} style={{ color: C.oro }}>
                    Happy Hour
                  </h3>
                  <p className={`${caps.className} text-[11px] md:text-xs tracking-[0.2em] uppercase`} style={{ color: C.crema }}>
                    Lunes a viernes · 15:00 a 22:00
                  </p>
                </div>
                <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {TRAGOS.map((t, i) => (
                    <li key={t} className="flex items-center gap-5">
                      {i > 0 && <Estrella className="w-2 h-2" />}
                      <span className={`${display.className} text-xl md:text-2xl font-medium`} style={{ color: C.crema }}>
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7 · Cumpleaños ── */}
      <section id="cumpleanos" className="scroll-mt-20" style={{ backgroundColor: C.naranjo, color: C.noche }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <p className={`${caps.className} flex items-center justify-center gap-3 text-[10px] md:text-[11px] tracking-[0.3em] uppercase mb-6`}>
              <span className="block h-px w-7" style={{ backgroundColor: 'rgba(11,20,48,0.7)' }} aria-hidden="true" />
              Cumpleaños en Altamicausa
              <span className="block h-px w-7" style={{ backgroundColor: 'rgba(11,20,48,0.7)' }} aria-hidden="true" />
            </p>
            <h2
              className={`${display.className} font-medium leading-[1.0] tracking-[-0.01em] text-[clamp(2.5rem,8vw,4.6rem)]`}
            >
              El cumpleañero <em>no paga.</em>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <ul className="mt-9 mx-auto max-w-2xl grid sm:grid-cols-2 gap-x-8 gap-y-3.5 text-left">
              {[
                'Presentando tu cédula de identidad',
                'Con un mínimo de 3 acompañantes adultos',
                'No incluye bebestibles',
                'Válido solo el día de tu cumpleaños',
              ].map((req) => (
                <li key={req} className="flex items-start gap-2.5 text-[15px] md:text-base leading-snug" style={{ color: 'rgba(11,20,48,0.82)' }}>
                  <Estrella className="w-2.5 h-2.5 shrink-0 mt-1" color={C.noche} />
                  {req}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-sm" style={{ color: 'rgba(11,20,48,0.82)' }}>
              Confirma condiciones al reservar por WhatsApp.
            </p>
            <div className="mt-8">
              <BtnWa href={WA_CUMPLE} bg={C.noche} ink={C.crema}>
                Reserva tu cumpleaños
              </BtnWa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema, color: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo color={C.azul}>Opiniones · Google</Rotulo>
                <p className="flex items-baseline gap-4">
                  <span className={`${display.className} font-medium leading-none text-[clamp(4.6rem,12vw,7.5rem)]`} style={{ color: C.azul }}>
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
                  className="mt-4 inline-block text-sm font-medium tap-44"
                  style={{ color: C.azul }}
                >
                  {BIZ.reviews} opiniones en Google
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <blockquote>
                  <p className={`${display.className} font-medium leading-[1.15] text-[clamp(1.6rem,4.4vw,2.5rem)]`}>
                    “{REVIEWS[0].text}”
                  </p>
                  <footer className="mt-5 flex items-center gap-2.5 text-sm font-medium" style={{ color: C.mutCrema }}>
                    <Estrella className="w-2.5 h-2.5" color={C.oro} />
                    {REVIEWS[0].author}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-2 gap-8 md:gap-12">
            {REVIEWS.slice(1).map((r, i) => (
              <Reveal key={r.author} delay={i * 120}>
                <blockquote className="border-t pt-6" style={{ borderColor: C.lineL }}>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.mutCrema }}>
                    “{r.text}”
                  </p>
                  <footer className="mt-4 flex items-center gap-2.5 text-sm font-medium" style={{ color: C.noche }}>
                    <Estrella className="w-2.5 h-2.5" color={C.oro} />
                    {r.author}
                    {'extra' in r && r.extra && (
                      <span
                        className="text-[11px] uppercase tracking-[0.14em] px-2 py-0.5 rounded-full border"
                        style={{ color: C.mutCrema, borderColor: C.lineL }}
                      >
                        {r.extra}
                      </span>
                    )}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9 · El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <div
                  className="relative aspect-[4/5] max-w-[420px] overflow-hidden rounded-t-full rounded-b-xl"
                  style={{ outline: `1px solid ${C.lineD}`, outlineOffset: '8px' }}
                >
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="El salón de Altamicausa: lámparas de lágrima, detalle dorado en el techo y mesas servidas"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal>
                <Rotulo>El local · Vitacura</Rotulo>
                <h2
                  className={`${display.className} font-medium leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)]`}
                  style={{ color: C.crema }}
                >
                  Nueva Costanera <em style={{ color: C.oro }}>3666.</em>
                </h2>
                <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}. Un espacio
                  para compartir, disfrutar y dejarse sorprender.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-9 max-w-md">
                  <h3 className={`${caps.className} text-[11px] tracking-[0.28em] uppercase mb-4`} style={{ color: C.oro }}>
                    Horario
                  </h3>
                  {HORARIO.map((h) => (
                    <p
                      key={h.dias}
                      className="flex items-baseline justify-between gap-6 py-3 border-b text-base"
                      style={{ borderColor: 'rgba(233,226,212,0.14)', color: C.mutNoche }}
                    >
                      <span>{h.dias}</span>
                      <span className={`${display.className} text-xl font-medium`} style={{ color: C.crema }}>
                        {h.horas}
                      </span>
                    </p>
                  ))}
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium tap-44"
                    style={{ color: C.naranjo }}
                  >
                    Cómo llegar
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 13L13 3M6 3h7v7" />
                    </svg>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <Reveal delay={100}>
            <div
              className="mt-14 rounded-xl overflow-hidden"
              style={{ border: `1px solid ${C.lineD}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Altamicausa en Av. Nueva Costanera 3666, Vitacura"
                className="block w-full h-[300px] md:h-[360px]"
                style={{ border: 0, backgroundColor: C.nocheBajo }}
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 10 · Cierre: reserva ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(760px 420px at 50% 30%, rgba(23,62,150,0.55), transparent 68%), radial-gradient(500px 300px at 90% 100%, rgba(242,122,42,0.08), transparent 60%)',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Image
              src={`${IMG}/logo.webp`}
              alt="Altamicausa Restaurant: comida peruana fusión e internacional"
              width={1360}
              height={860}
              className="mx-auto w-[min(300px,64vw)] h-auto rounded-xl"
              style={{ border: `1px solid ${C.lineD}`, boxShadow: '0 28px 70px rgba(0,0,0,0.45)' }}
            />
          </Reveal>
          <Reveal delay={100}>
            <h2
              className={`${display.className} mt-10 font-medium leading-[1.0] tracking-[-0.01em] text-[clamp(2.5rem,8vw,4.4rem)]`}
              style={{ color: C.crema }}
            >
              La mesa está servida.
              <br />
              Falta <em style={{ color: C.naranjo }}>la tuya.</em>
            </h2>
            <p className="mt-6 mx-auto max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
              Reserva por WhatsApp y ven a dejarte sorprender.
            </p>
            <div className="mt-9 flex flex-col items-center gap-4">
              <BtnWa>Reserva tu mesa</BtnWa>
              <a href={`tel:${BIZ.phoneTel}`} className={`${display.className} text-2xl font-medium tap-44`} style={{ color: C.crema }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 11 · Footer ── */}
      <footer className="border-t" style={{ backgroundColor: C.nocheBajo, borderColor: 'rgba(226,176,74,0.2)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src={`${IMG}/logo.webp`}
              alt=""
              width={1360}
              height={860}
              className="h-9 w-auto rounded-md"
            />
            <div>
              <p className={`${caps.className} text-sm tracking-[0.18em] uppercase`} style={{ color: C.crema }}>
                Altamicausa
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
            <a href={BIZ.tiktok} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 tap-44" style={{ color: C.crema }}>
              <IconTikTok /> {BIZ.tiktokUser}
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
