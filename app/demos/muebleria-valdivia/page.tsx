import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import Puerta from './puerta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, QUOTE, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// Paleta que sale de las fotos: marfil de la tienda, granate del capitoné,
// nogal de los muebles, verde petróleo de la cocina y piedra de las cubiertas.
const C = {
  marfil: '#F6F0E6',
  granate: '#8E1B2D',
  granateDeep: '#64101E',
  granateInk: '#470A14',
  nogal: '#5A3A24',
  nogalDeep: '#3A2413',
  verde: '#1E4A4D',
  verdeDeep: '#153638',
  piedra: '#D9D1C3',
  ink: '#3A2413',
  muted: 'rgba(58,36,19,0.8)',
  line: 'rgba(58,36,19,0.18)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// Trama capitoné en baldosa SVG (rombos cosidos + botón en cada vértice):
// una para fondos rojos (costuras oscuras) y otra para fondos oscuros (costuras claras).
const capitoneTile = (seam: string, seamOp: number, glowOp: number, dot: string, dotOp: number) =>
  `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cpath d='M32 0L64 32L32 64L0 32Z' fill='none' stroke='${seam}' stroke-opacity='${seamOp}' stroke-width='1.5'/%3E%3Cpath d='M32 3.5L60.5 32L32 60.5L3.5 32Z' fill='%23ffffff' fill-opacity='${glowOp}'/%3E%3Cg fill='${dot}' fill-opacity='${dotOp}'%3E%3Ccircle cx='32' cy='0' r='2.4'/%3E%3Ccircle cx='64' cy='32' r='2.4'/%3E%3Ccircle cx='32' cy='64' r='2.4'/%3E%3Ccircle cx='0' cy='32' r='2.4'/%3E%3C/g%3E%3C/svg%3E")`

const TRAMA_ROJA = capitoneTile('%233d0810', 0.55, 0.07, '%233d0810', 0.8)
const TRAMA_OSCURA = capitoneTile('%23F6F0E6', 0.13, 0.05, '%23000000', 0.3)

export const metadata: Metadata = demoMetadata({
  slug: 'muebleria-valdivia',
  title: 'Mueblería Valdivia · Tienda de muebles en Valdivia',
  description:
    'Tienda de muebles en Philippi 1046, Valdivia: muebles de cocina, sitiales capitoné, sillas tapizadas y decoración. Escríbenos por WhatsApp.',
  image: '/demos/muebleria-valdivia/sillones-rojos.webp',
})

const NAV_LINKS = [
  { label: 'Cocinas', href: '#cocinas' },
  { label: 'Living', href: '#living' },
  { label: 'Cómo llegar', href: '#donde' },
]

/* Retícula del capitoné del hero: los botones van en los vértices del
   rombo (cada 22% en x, 14% en y, filas alternadas cada 7%). */
const TUFTS = (() => {
  const pts: { x: number; y: number; d: number }[] = []
  let r = 0
  for (let y = -4; y <= 104; y += 7, r++) {
    const start = r % 2 === 0 ? -6 : 5
    for (let x = start; x <= 116; x += 22) {
      pts.push({ x, y, d: 140 + x * 6.4 + r * 26 })
    }
  }
  return pts
})()

/** Rótulo en versalitas con el botón del capitoné como marca. */
function Rotulo({
  children,
  color,
  dot = C.granate,
}: {
  children: React.ReactNode
  color: string
  dot?: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]"
      style={{ color }}
    >
      <svg viewBox="0 0 18 18" className="w-[15px] h-[15px] shrink-0" aria-hidden="true">
        <path d="M9 1L17 9L9 17L1 9Z" fill="none" stroke={dot} strokeWidth="1.4" />
        <circle cx="9" cy="9" r="2.6" fill={dot} />
      </svg>
      {children}
    </p>
  )
}

/** Separador: la veta de la madera, tres líneas onduladas paralelas. */
function Veta({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 44"
      preserveAspectRatio="none"
      className={`w-full h-8 md:h-10 ${className}`}
      fill="none"
      aria-hidden="true"
    >
      {[
        'M0 10 C180 3 360 17 540 10 C720 3 900 17 1080 10 C1260 3 1380 14 1440 9',
        'M0 24 C180 31 360 17 540 24 C720 31 900 17 1080 24 C1260 31 1380 20 1440 25',
        'M0 38 C180 31 360 45 540 38 C720 31 900 45 1080 38 C1260 31 1380 42 1440 37',
      ].map((d) => (
        <path key={d} d={d} stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      ))}
    </svg>
  )
}

/** Separador corto de rombo capitoné para las tarjetas-foto. */
function Rombo({ className = 'w-[8px] h-[8px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 10 10" className={`${className} shrink-0`} aria-hidden="true">
      <path d="M5 0.8L9.2 5L5 9.2L0.8 5Z" fill={C.granate} />
    </svg>
  )
}

const COCINAS = [
  {
    src: `${IMG}/cocina-azul.webp`,
    w: 900,
    h: 1200,
    alt: 'Cocina instalada vista en la ficha de Mueblería Valdivia: muebles oscuros, mesada clara, tragaluz y ventana al bosque',
    cap: 'tragaluz y vista al bosque',
    cls: 'w-[76%] md:col-span-4 md:row-span-2 md:w-full',
    aspect: 'aspect-[3/4]',
  },
  {
    src: `${IMG}/cocina-gris.webp`,
    w: 1200,
    h: 900,
    alt: 'Mueble de cocina gris cemento con cubierta y repisas negras y tiradores negros',
    cap: 'gris cemento',
    cls: 'w-[58%] ml-auto -mt-10 me-2 rotate-[1.4deg] md:me-0 md:col-span-3 md:col-start-9 md:mt-16 md:rotate-[1.4deg] md:w-full',
    aspect: 'aspect-[4/3]',
  },
  {
    src: `${IMG}/cocina-madera.webp`,
    w: 1200,
    h: 900,
    alt: 'Cocina con muebles de madera clara, cubierta clara, horno y lavavajillas empotrados',
    cap: 'madera clara',
    cls: 'w-[86%] mt-12 md:col-span-5 md:col-start-5 md:-mt-6 md:w-full',
    aspect: 'aspect-[4/3]',
  },
  {
    src: `${IMG}/cocina-piedra.webp`,
    w: 1200,
    h: 1031,
    alt: 'Mueble de cocina gris con cubierta de piedra negra, espacio para estufa y lavadora',
    cap: 'cubierta de piedra',
    cls: 'w-[64%] ml-auto -mt-8 me-2 -rotate-[1.2deg] md:me-0 md:col-span-4 md:col-start-9 md:mt-6 md:-rotate-[1.2deg] md:w-full',
    aspect: 'aspect-[5/4]',
  },
  {
    src: `${IMG}/cocina-clara.webp`,
    w: 1200,
    h: 900,
    alt: 'Cocina en L de melamina clara con cubierta negra sobre pared azul',
    cap: 'en L, cubierta negra',
    cls: 'w-[72%] mt-10 md:col-span-5 md:col-start-2 md:mt-10 md:w-full',
    aspect: 'aspect-[4/3]',
  },
  {
    src: `${IMG}/cocina-melamina.webp`,
    w: 1200,
    h: 900,
    alt: 'Cocina en L de melamina color madera con cubierta blanca y tiradores metálicos',
    cap: 'melamina madera',
    cls: 'w-[60%] ml-auto -mt-8 me-2 rotate-[1deg] md:me-0 md:col-span-4 md:col-start-7 md:mt-16 md:rotate-[1deg] md:w-full',
    aspect: 'aspect-[4/3]',
  },
]

const LIVING = [
  {
    src: `${IMG}/sillones-rojos-2.webp`,
    w: 1200,
    h: 900,
    alt: 'Juego de living de Mueblería Valdivia: dos sitiales capitoné rojos y sofá con cojines estampados',
    cap: 'juego capitoné',
    cls: 'w-full md:col-span-7 md:mt-10',
    aspect: 'aspect-[4/3]',
  },
  {
    src: `${IMG}/silla-tapizada.webp`,
    w: 900,
    h: 1200,
    alt: 'Silla de madera con asiento tapizado en tela burdeo con dibujos dorados',
    cap: 'silla tapizada',
    cls: 'w-[62%] -mt-14 rotate-[-1.6deg] md:col-span-4 md:col-start-8 md:-mt-24 md:rotate-[-1.6deg] md:w-full',
    aspect: 'aspect-[3/4]',
  },
  {
    src: `${IMG}/cojines.webp`,
    w: 1200,
    h: 675,
    alt: 'Cojines estampados con búhos y una lámpara de base naranja en el muestrario',
    cap: 'cojines y lámparas',
    cls: 'w-[74%] ml-auto mt-8 md:col-span-5 md:col-start-8 md:mt-8 md:w-full',
    aspect: 'aspect-[16/9]',
  },
]

export default function MuebleriaValdiviaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-clip`}
      style={{ ...SPACING, backgroundColor: C.marfil, color: C.ink }}
    >
      <style>{`
        /* ── Se tapiza: la trama capitoné del hero ── */
        .mv-trama { position: absolute; inset: 0; overflow: hidden; }
        .mv-trama-l { clip-path: polygon(0 0, 50.5% 0, 49.5% 100%, 0 100%); animation: mv-open-l 1s cubic-bezier(0.76,0,0.18,1) 1.45s both; }
        .mv-trama-r { clip-path: polygon(50.5% 0, 100% 0, 100% 100%, 49.5% 100%); animation: mv-open-r 1s cubic-bezier(0.76,0,0.18,1) 1.45s both; }
        @keyframes mv-open-l { to { clip-path: polygon(0 0, -1.5% 0, -1.5% 100%, 0 100%); } }
        @keyframes mv-open-r { to { clip-path: polygon(101.5% 0, 100% 0, 100% 100%, 101.5% 100%); } }

        @keyframes mv-tuft { from { opacity: 0; transform: translate(-50%,-50%) scale(0) } to { opacity: 1; transform: translate(-50%,-50%) scale(1) } }
        .mv-tuft { animation: mv-tuft 0.5s cubic-bezier(0.3,1.4,0.4,1) both; }

        @keyframes mv-settle { from { transform: scale(1.09) } to { transform: scale(1) } }
        .mv-hero-img { animation: mv-settle 2.4s cubic-bezier(0.2,0.6,0.2,1) 1.35s both; }

        @keyframes mv-up { from { transform: translateY(114%) } to { transform: translateY(0) } }
        .mv-line { animation: mv-up 0.95s cubic-bezier(0.22,0.61,0.2,1) both; }
        @keyframes mv-fade { from { opacity: 0; transform: translateY(12px) } to { opacity: 1; transform: none } }
        .mv-fade { animation: mv-fade 0.85s ease-out both; }

        /* ── Puerta corredera del mueble: la abre ./puerta.tsx con IO ── */
        .mv-door { transform: translateX(0); transition: transform 0.9s cubic-bezier(0.72,0,0.2,1); will-change: transform }
        .mv-door.mv-abierta { transform: translateX(103%) }

        @supports (animation-timeline: view()) {
          .mv-hang {
            animation: mv-hang linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 55%;
          }
          .mv-lineup {
            animation: mv-lineup linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 60%;
          }
        }
        @keyframes mv-hang { from { transform: translateY(-4%) rotate(1.6deg) } to { transform: none } }
        @keyframes mv-lineup { from { transform: translateY(26px) } to { transform: none } }

        .mv-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .mv-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .mv-btn:active { transform: translateY(0) scale(0.97) }
        .mv-btn:focus-visible { outline: 3px solid ${C.piedra}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .mv-trama, .mv-door { display: none !important }
          .mv-line, .mv-fade, .mv-hero-img, .mv-tuft, .mv-hang, .mv-lineup { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,240,230,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.granate,
          btnInk: '#F6F0E6',
        }}
      />

      {/* ── 1 · Hero: la tienda se destapiza ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.nogalDeep }}
      >
        <div className="absolute inset-0 mv-hero-img">
          <Image
            src={`${IMG}/sillones-rojos.webp`}
            alt="Sitiales capitoné rojos con cojines estampados en la tienda Mueblería Valdivia"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '62% 62%' }}
          />
        </div>
        {/* velo nogal para el texto */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(58,36,19,0.55) 0%, rgba(58,36,19,0.12) 42%, rgba(43,23,10,0.88) 100%)',
          }}
          aria-hidden="true"
        />

        {/* La trama capitoné: dos paños de tela granate con sus botones */}
        {(['mv-trama-l', 'mv-trama-r'] as const).map((cls, pi) => (
          <div key={cls} className={`mv-trama ${cls}`} style={{ backgroundColor: C.granate }} aria-hidden="true">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <defs>
                <radialGradient id={`mv-puff-${pi}`} cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="rgba(255,255,255,0.13)" />
                  <stop offset="72%" stopColor="rgba(0,0,0,0.05)" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
                </radialGradient>
              </defs>
              {TUFTS.map((t, i) => (
                <ellipse
                  key={`e${i}`}
                  cx={t.x}
                  cy={t.y + 7}
                  rx="10"
                  ry="6.4"
                  fill={`url(#mv-puff-${pi})`}
                />
              ))}
              {TUFTS.map((t, i) => (
                <g key={`s${i}`} stroke="rgba(61,8,16,0.6)" strokeWidth="1.3" vectorEffect="non-scaling-stroke">
                  <line x1={t.x} y1={t.y} x2={t.x + 11} y2={t.y + 7} />
                  <line x1={t.x} y1={t.y} x2={t.x + 11} y2={t.y - 7} />
                </g>
              ))}
              {TUFTS.map((t, i) => (
                <g key={`h${i}`} stroke="rgba(255,255,255,0.1)" strokeWidth="1" vectorEffect="non-scaling-stroke">
                  <line x1={t.x + 0.35} y1={t.y + 0.35} x2={t.x + 11.35} y2={t.y + 7.35} />
                  <line x1={t.x + 0.35} y1={t.y + 0.35} x2={t.x + 11.35} y2={t.y - 6.65} />
                </g>
              ))}
            </svg>
            {TUFTS.filter((t) => (pi === 0 ? t.x < 51 : t.x >= 51)).map((t, i) => (
              <span
                key={i}
                className="mv-tuft absolute w-[11px] h-[11px] rounded-full"
                style={{
                  left: `${t.x}%`,
                  top: `${t.y}%`,
                  animationDelay: `${t.d}ms`,
                  background: `radial-gradient(circle at 35% 30%, #C04556, ${C.granateInk} 72%)`,
                  boxShadow: '0 0 0 7px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.5)',
                }}
              />
            ))}
          </div>
        ))}

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-10 md:pb-14">
          <div className="mv-fade" style={{ animationDelay: '1.95s' }}>
            <Rotulo color={C.piedra} dot="#E4B7BE">
              Philippi 1046 · Valdivia
            </Rotulo>
          </div>
          <h1
            className={`${display.className} leading-[1.04] text-[clamp(2.7rem,10.5vw,5.6rem)] mt-5`}
            style={{ color: C.marfil }}
          >
            <span className="block overflow-hidden">
              <span className="mv-line block" style={{ animationDelay: '2.15s' }}>
                Muebles para
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="mv-line block" style={{ animationDelay: '2.32s', color: C.piedra }}>
                vivir tu casa.
              </span>
            </span>
          </h1>
          <p
            className="mv-fade mt-6 max-w-md text-base md:text-lg leading-relaxed font-semibold"
            style={{ color: 'rgba(246,240,230,0.92)', animationDelay: '2.5s' }}
          >
            Tienda de muebles en Valdivia: cocinas, sitiales, sillas
            tapizadas y detalles para tu casa.
          </p>
          <div className="mv-fade mt-8 flex flex-wrap gap-3" style={{ animationDelay: '2.65s' }}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm tap-44`}
              style={{ backgroundColor: C.granate, color: '#F6F0E6' }}
            >
              Escríbenos por WhatsApp
            </a>
            <a
              href="#cocinas"
              className={`${display.className} mv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm tap-44`}
              style={{ border: '1.5px solid rgba(246,240,230,0.55)', color: C.marfil }}
            >
              Ver los muebles
            </a>
          </div>
        </div>

        {/* franja de categorías: sale solo de lo que muestran las fotos */}
        <div
          className="mv-fade relative border-t"
          style={{
            animationDelay: '2.85s',
            borderColor: 'rgba(246,240,230,0.28)',
            backgroundColor: 'rgba(43,23,10,0.6)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] uppercase tracking-[0.2em] font-bold"
            style={{ color: 'rgba(246,240,230,0.9)' }}
          >
            {['Muebles de cocina', 'Sitiales y sofás', 'Sillas tapizadas', 'Cojines y lámparas'].map(
              (cat, i) => (
                <span key={cat} className="flex items-center gap-6">
                  {i > 0 && (
                    <svg viewBox="0 0 10 10" className="w-[8px] h-[8px]" aria-hidden="true">
                      <path d="M5 0.8L9.2 5L5 9.2L0.8 5Z" fill="#C04556" />
                    </svg>
                  )}
                  {cat}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── 2 · Cocinas: el catálogo sobre la mesa ── */}
      <section id="cocinas" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-6 md:pb-10">
          <Reveal>
            <Rotulo color={C.granate}>Muebles de cocina</Rotulo>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mt-4">
              <h2
                className={`${display.className} leading-[1.06] text-[clamp(2.1rem,6.4vw,4rem)]`}
              >
                El mueble más importante de la casa.
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed max-w-sm md:justify-self-end" style={{ color: C.muted }}>
                Estas fotos salen de su ficha de Google: cocinas en L de
                melamina y madera clara, cubiertas de piedra y espacio para
                el horno, la lavadora y el lavaplatos.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
            {COCINAS.map((f) => (
              <figure key={f.src} className={`relative ${f.cls}`}>
                <div
                  className="p-2 md:p-2.5"
                  style={{
                    backgroundColor: '#FCF8F0',
                    boxShadow: '0 14px 34px rgba(58,36,19,0.18)',
                  }}
                >
                  <div className={`relative overflow-hidden ${f.aspect}`}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      sizes="(min-width: 768px) 40vw, 78vw"
                      className="object-cover w-full h-full"
                    />
                    <Puerta />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 pt-2 pb-0.5 px-0.5">
                    <span
                      className="text-[10px] uppercase tracking-[0.22em] font-bold"
                      style={{ color: C.muted }}
                    >
                      {f.cap}
                    </span>
                    <svg viewBox="0 0 10 10" className="w-[8px] h-[8px] shrink-0" aria-hidden="true">
                      <path d="M5 0.8L9.2 5L5 9.2L0.8 5Z" fill={C.granate} />
                    </svg>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="text-sm leading-relaxed mt-10 md:mt-14 max-w-md" style={{ color: C.muted }}>
              ¿Viste una cocina que te gusta? Manda la captura por WhatsApp
              y consulta por la tuya.
            </p>
          </Reveal>
        </div>
      </section>

      {/* veta de madera separando la mesa del living */}
      <div style={{ backgroundColor: C.marfil }} aria-hidden="true">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-6">
          <Veta color="rgba(90,58,36,0.35)" />
        </div>
      </div>

      {/* ── 3 · Living: el muestrario con marcos tapizados ── */}
      <section id="living" className="scroll-mt-20" style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo color={C.piedra} dot="#E4B7BE">
              Living y descanso
            </Rotulo>
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 md:gap-14 items-end mt-4 mb-10 md:mb-14">
              <h2
                className={`${display.className} leading-[1.06] text-[clamp(2.1rem,6.4vw,4rem)]`}
                style={{ color: C.marfil }}
              >
                Un living se arma por piezas.
              </h2>
              <p
                className="text-[15px] md:text-base leading-relaxed max-w-sm md:justify-self-end"
                style={{ color: 'rgba(246,240,230,0.82)' }}
              >
                Sitiales capitoné, sillas tapizadas, cojines y lámparas:
                las piezas del living están en el muestrario de Philippi.
              </p>
            </div>
          </Reveal>

          <div className="md:grid md:grid-cols-12 md:gap-6 items-start">
            {LIVING.map((f) => (
              <figure key={f.src} className={`mv-hang relative ${f.cls}`}>
                <div
                  className="p-2.5 md:p-3"
                  style={{
                    backgroundColor: C.granateDeep,
                    backgroundImage: TRAMA_ROJA,
                    backgroundSize: '26px 26px',
                    boxShadow: '0 16px 38px rgba(0,0,0,0.35)',
                  }}
                >
                  <div className={`relative overflow-hidden ${f.aspect}`}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      width={f.w}
                      height={f.h}
                      sizes="(min-width: 768px) 46vw, 80vw"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-3 pt-2 pb-0.5 px-0.5">
                    <span
                      className="text-[10px] uppercase tracking-[0.22em] font-bold"
                      style={{ color: 'rgba(246,240,230,0.85)' }}
                    >
                      {f.cap}
                    </span>
                    <svg viewBox="0 0 10 10" className="w-[8px] h-[8px] shrink-0" aria-hidden="true">
                      <path d="M5 0.8L9.2 5L5 9.2L0.8 5Z" fill="rgba(246,240,230,0.7)" />
                    </svg>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4 · La cita, en grande ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: C.granate, backgroundImage: TRAMA_ROJA, backgroundSize: '64px 64px' }}
      >
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <div className="mv-lineup">
            <svg
              viewBox="0 0 34 34"
              className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-6"
              aria-hidden="true"
            >
              <path d="M17 2L32 17L17 32L2 17Z" fill="none" stroke="rgba(246,240,230,0.5)" strokeWidth="1.3" />
              <circle cx="17" cy="17" r="5" fill={C.marfil} />
            </svg>
            <blockquote>
              <p
                className={`${display.className} leading-[1.12] text-[clamp(1.9rem,7.6vw,4.4rem)]`}
                style={{ color: C.marfil }}
              >
                “{QUOTE.text}”
              </p>
            </blockquote>
            <p
              className="mt-7 text-[11px] md:text-xs tracking-[0.24em] font-bold"
              style={{ color: C.piedra }}
            >
              {QUOTE.author} · opinión en Google
            </p>
          </div>
        </div>
      </section>

      {/* ── 5 · Cómo llegar ── */}
      <section
        id="donde"
        className="scroll-mt-20"
        style={{ backgroundColor: C.nogal, backgroundImage: TRAMA_OSCURA, backgroundSize: '64px 64px' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Rotulo color={C.piedra} dot={C.piedra}>
              Cómo llegar
            </Rotulo>
            <h2
              className={`${display.className} leading-[1.08] text-[clamp(2rem,5.6vw,3.6rem)] mt-4 mb-5`}
              style={{ color: C.marfil }}
            >
              La tienda está en Philippi 1046.
            </h2>
            <address className="not-italic text-[15px] md:text-base leading-relaxed mb-4" style={{ color: 'rgba(246,240,230,0.88)' }}>
              {BIZ.name}
              <br />
              {BIZ.address}, {BIZ.city}, {BIZ.region}
            </address>
            <p className="text-[15px] md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(246,240,230,0.82)' }}>
              Escríbenos por WhatsApp: consulta por el mueble que buscas,
              por las medidas o por tu visita a la tienda.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm tap-44`}
                style={{ backgroundColor: C.granate, color: '#F6F0E6' }}
              >
                Escríbenos por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mv-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm tap-44`}
                style={{ border: '1.5px solid rgba(246,240,230,0.5)', color: C.marfil }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className="text-[15px] mt-6 font-bold">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.marfil, textDecorationColor: 'rgba(217,209,195,0.5)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="p-2.5 md:p-3"
              style={{
                backgroundColor: C.piedra,
                boxShadow: '0 18px 44px rgba(0,0,0,0.4)',
              }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[400px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Footer ── */}
      <footer style={{ backgroundColor: C.nogalDeep, borderTop: '1px solid rgba(246,240,230,0.14)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div>
            <p className={`${display.className} text-xl md:text-2xl`} style={{ color: C.marfil }}>
              {BIZ.name}
            </p>
            <p className="text-xs mt-1.5" style={{ color: 'rgba(246,240,230,0.78)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} ·{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </p>
          </div>
          <svg viewBox="0 0 34 34" className="w-7 h-7 shrink-0" aria-hidden="true">
            <path d="M17 2L32 17L17 32L2 17Z" fill="none" stroke="rgba(246,240,230,0.4)" strokeWidth="1.3" />
            <circle cx="17" cy="17" r="4.5" fill={C.granate} />
          </svg>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,240,230,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-[11px] leading-relaxed" style={{ color: 'rgba(246,240,230,0.68)' }}>
            Página de muestra preparada por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.piedra }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}: las fotos son las de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.piedra }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
