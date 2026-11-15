import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, INSTAGRAM_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// La paleta sale del logo y de los uniformes: carbón de la etiqueta,
// fucsia scrub, azul clínico, turquesa y crema de vitrina. Los tonos
// de las prendas (celeste, menta, rosa, gris) son tintes de ella.
const C = {
  carbon: '#2A2B2E',
  fucsia: '#D6246E',
  fucsiaDark: '#A81855',
  rosa: '#ED8FBD',
  azul: '#1F5FAF',
  celeste: '#6FA3DC',
  navy: '#173F74',
  turquesa: '#14A59A',
  menta: '#5FC4BB',
  teal: '#0C7A72',
  crema: '#FBF6EE',
  cremaDark: '#EFE3CE',
  tinta: '#2A2B2E',
  muted: '#5A534A',
  line: 'rgba(42,43,46,0.16)',
}

// Trama de puntos del estampado, versión crema y versión carbón.
const TRAMA = (dot: string): CSSProperties => ({
  backgroundImage: `radial-gradient(${dot} 1.2px, transparent 1.2px)`,
  backgroundSize: '22px 22px',
})

export const metadata: Metadata = demoMetadata({
  slug: 'star-work-uniformes-clinicos-villarrica',
  title: 'Star Work Uniformes Clínicos — Uniformes clínicos en Villarrica',
  description:
    'Tops, pantalones, delantales y chaquetas clínicas en General Urrutia 788, Galería El Arrayán, Villarrica. 5,0 en Google con 29 opiniones. Envíos a todo Chile. Consulta por WhatsApp.',
  image: '/demos/star-work-uniformes-clinicos-villarrica/colores.webp',
})

const NAV_LINKS = [
  { label: 'Variedad', href: '#variedad' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visita', href: '#visita' },
]

// Pilas de prendas dobladas que llenan los estantes del hero.
const PILAS: string[][][] = [
  [
    ['#173F74', '#1F5FAF', '#6FA3DC'],
    ['#A81855', '#D6246E', '#ED8FBD'],
    ['#0C7A72', '#14A59A', '#5FC4BB'],
  ],
  [
    ['#17181B', '#2A2B2E', '#4A4B52'],
    ['#D9D2C4', '#EFE3CE', '#B9BCBF'],
  ],
]

const ENCUENTRAS = [
  { name: 'Tops', desc: 'Lisos y estampados, en muchos colores.', rot: '-1.4deg' },
  { name: 'Pantalones', desc: 'El complemento del uniforme, en tonos que combinan.', rot: '1.2deg' },
  { name: 'Delantales', desc: 'Para el trabajo de todos los días.', rot: '-1deg' },
  { name: 'Chaquetas', desc: 'La capa extra del uniforme para el turno.', rot: '1.5deg' },
]

const SWATCHES = [
  '#D6246E', '#ED8FBD', '#1F5FAF', '#6FA3DC',
  '#14A59A', '#5FC4BB', '#2A2B2E', '#EFE3CE',
]

const REVIEWS = [
  {
    quote:
      'Quiero destacar la buenísima atención de Marita fue un agrado visitar su tienda. Mucha variedad, buenos precios y muy buena calidad de los uniformes clínicos. Mi hija se fue feliz con su compra.',
    name: 'Jeanette Paulina Valenzuela Baez',
    rot: '-1.2deg',
  },
  {
    quote:
      'Excelente atención y muy buena disposición en ayudar a escoger lo más óptimo para el cliente, los precios súper accesibles y lo mejor es la calidad de sus productos.',
    name: 'Claudia Muñoz',
    rot: '1.4deg',
  },
]

/** Rótulo en versalitas espaciadas con línea fina al costado. */
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
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em]"
      style={{ color }}
    >
      <span className="h-px w-9 shrink-0" style={{ backgroundColor: lineColor }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Flor chica del estampado: cinco pétalos y centro. */
function Flor({ style, className = 'w-4 h-4' }: { style?: CSSProperties; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true">
      {[0, 72, 144, 216, 288].map((a) => (
        <circle
          key={a}
          cx={12 + 6.4 * Math.cos((a * Math.PI) / 180)}
          cy={12 + 6.4 * Math.sin((a * Math.PI) / 180)}
          r="4.4"
          fill="currentColor"
        />
      ))}
      <circle cx="12" cy="12" r="2.6" fill="#FBF6EE" />
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
  tone: 'fucsia' | 'crema' | 'lineCrema' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'fucsia'
      ? { backgroundColor: C.fucsia, color: '#fff' }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.tinta }
        : tone === 'lineCrema'
          ? { border: '1.5px solid rgba(251,246,238,0.55)', color: C.crema }
          : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="sw-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Pila de prendas dobladas: entra de lado al cargar. */
function Pila({ capas, delay, off }: { capas: string[]; delay: number; off: number }) {
  return (
    <div
      className="sw-pila"
      style={{ '--d': `${delay}s`, '--off': `${off}%` } as CSSProperties}
      aria-hidden="true"
    >
      {capas.map((c, i) => (
        <i key={i} style={{ backgroundColor: c, width: `${56 + ((i * 9 + Math.round(delay * 10)) % 13) - 5}px` }} />
      ))}
    </div>
  )
}

/** La etiqueta colgante que cae y se balancea con el nombre. */
function EtiquetaHero() {
  return (
    <div className="sw-tag" aria-hidden="true">
      <span className="block h-7 w-[2px]" style={{ backgroundColor: C.carbon }} />
      <span
        className={`${display.className} flex flex-col items-center rounded-lg px-3 pb-2 pt-2.5 text-[10px] font-bold uppercase tracking-[0.18em] shadow-md`}
        style={{ backgroundColor: C.fucsia, color: '#fff' }}
      >
        <i
          className="mb-1 block h-2 w-2 rounded-full border-2"
          style={{ borderColor: 'rgba(255,255,255,0.9)' }}
        />
        Star Work
      </span>
    </div>
  )
}

/** El estante del hero: dos filas de cubículos que se llenan de prendas. */
function Estante() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{ border: `3px solid ${C.carbon}`, backgroundColor: '#FFFFFF', boxShadow: '0 18px 42px rgba(42,43,46,0.15)' }}
    >
      <div className="grid grid-cols-3" style={{ borderBottom: `6px solid ${C.carbon}` }}>
        {PILAS[0].map((capas, i) => (
          <div
            key={i}
            className="relative h-[104px] md:h-[140px] lg:h-[168px]"
            style={i > 0 ? { borderLeft: `3px solid ${C.carbon}` } : undefined}
          >
            <Pila capas={capas} delay={0.12 + i * 0.16} off={-170} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {PILAS[1].map((capas, i) => (
          <div
            key={i}
            className="relative h-[104px] md:h-[140px] lg:h-[168px]"
            style={{ borderLeft: `3px solid ${C.carbon}` }}
          >
            <Pila capas={capas} delay={0.62 + i * 0.16} off={170} />
          </div>
        ))}
        <div
          className="relative h-[104px] md:h-[140px] lg:h-[168px]"
          style={{ borderLeft: `3px solid ${C.carbon}` }}
        >
          <div
            className="sw-foto absolute inset-2 overflow-hidden rounded-lg"
            style={{ '--d': '1.35s' } as CSSProperties}
          >
            <Image
              src={`${IMG}/tienda.webp`}
              alt="Interior de la tienda Star Work en Galería El Arrayán"
              fill
              sizes="(min-width: 768px) 160px, 120px"
              className="object-cover"
              style={{ objectPosition: '50% 26%' }}
            />
          </div>
        </div>
      </div>
      <EtiquetaHero />
    </div>
  )
}

/** Etiqueta de papel colgando de un cordel: la forma del demo. */
function TagColgante({
  children,
  rot = '0deg',
  className = '',
}: {
  children: React.ReactNode
  rot?: string
  className?: string
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <span className="block h-4 w-[2px]" style={{ backgroundColor: 'rgba(251,246,238,0.5)' }} aria-hidden="true" />
      <div
        className="relative w-full rounded-xl px-4 pb-4 pt-5"
        style={{
          backgroundColor: C.crema,
          color: C.carbon,
          transform: `rotate(${rot})`,
          boxShadow: '0 12px 26px rgba(0,0,0,0.24)',
        }}
      >
        <span
          className="absolute left-1/2 top-2 block h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2"
          style={{ borderColor: C.fucsia }}
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  )
}

export default function StarWorkPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Los estantes se llenan: pilas que entran de lado, alternando. */
        @keyframes sw-pila {
          from { transform: translateX(calc(-50% + var(--off))); opacity: 0 }
          to { transform: translateX(-50%); opacity: 1 }
        }
        .sw-pila {
          position: absolute; bottom: 12px; left: 50%;
          display: flex; flex-direction: column; gap: 4px; align-items: center;
          animation: sw-pila 0.85s cubic-bezier(0.22,0.61,0.24,1) both;
          animation-delay: var(--d, 0s);
        }
        .sw-pila i {
          display: block; height: 15px; border-radius: 5px;
          box-shadow: inset 0 -2px 0 rgba(0,0,0,0.10);
        }

        /* La etiqueta colgante cae desde arriba y se balancea una vez. */
        @keyframes sw-tag {
          0% { transform: translateY(-130%) rotate(0deg) }
          38% { transform: translateY(0) rotate(0deg) }
          55% { transform: translateY(0) rotate(6deg) }
          70% { transform: translateY(0) rotate(-4deg) }
          85% { transform: translateY(0) rotate(2deg) }
          100% { transform: translateY(0) rotate(0deg) }
        }
        .sw-tag {
          position: absolute; top: 0; right: 9%;
          display: flex; flex-direction: column; align-items: center;
          transform-origin: 50% 0;
          animation: sw-tag 1.7s cubic-bezier(0.3,0.7,0.3,1) 0.95s both;
        }

        /* Titular por líneas y apariciones suaves. */
        @keyframes sw-line { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .sw-line { display: block; animation: sw-line 0.9s cubic-bezier(0.22,0.61,0.2,1) both; animation-delay: var(--d, 0s) }
        @keyframes sw-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .sw-fade { animation: sw-fade 0.9s ease-out both; animation-delay: var(--d, 0s) }
        @keyframes sw-foto { from { opacity: 0; transform: scale(0.9) } to { opacity: 1; transform: scale(1) } }
        .sw-foto { animation: sw-foto 0.9s ease-out both; animation-delay: var(--d, 0s) }

        /* Fotos de sección: revelado de izquierda a derecha al hacer scroll. */
        @keyframes sw-wipe { from { clip-path: inset(0 100% 0 0 round 18px) } to { clip-path: inset(0 0 0 0 round 18px) } }
        @supports (animation-timeline: view()) {
          .sw-wipe { animation: sw-wipe linear both; animation-timeline: view(); animation-range: entry 5% entry 70% }
        }

        /* Cada color aparece como una prenda que se despliega. */
        @keyframes sw-unfold { from { transform: scaleY(0.12); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
        @supports (animation-timeline: view()) {
          .sw-swatch {
            transform-origin: 50% 100%;
            animation: sw-unfold linear both;
            animation-timeline: view();
            animation-range: entry 15% entry 85%;
          }
        }

        .sw-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .sw-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .sw-btn:active { transform: translateY(0) scale(0.97) }
        .sw-btn:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .sw-pila, .sw-tag, .sw-line, .sw-fade, .sw-foto, .sw-wipe, .sw-swatch { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(251,246,238,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.fucsia,
          btnInk: '#fff',
        }}
      />

      {/* ── 1 · Hero: los estantes se llenan ── */}
      <section
        id="inicio"
        className="relative flex min-h-svh flex-col overflow-hidden"
        style={{ ...TRAMA('rgba(42,43,46,0.06)'), backgroundColor: C.crema }}
      >
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-5 pb-10 pt-[88px] md:px-8 md:pt-28 lg:justify-center">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="order-2 lg:order-1">
              <p
                className="sw-fade flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em]"
                style={{ color: C.fucsia, '--d': '1.3s' } as CSSProperties}
              >
                <span className="h-px w-9" style={{ backgroundColor: 'rgba(214,36,110,0.5)' }} aria-hidden="true" />
                General Urrutia 788 · Villarrica
              </p>
              <h1
                className={`${display.className} mt-5 font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.1rem,9vw,4.5rem)]`}
                style={{ color: C.carbon }}
              >
                <span className="block overflow-hidden">
                  <span className="sw-line" style={{ '--d': '1.42s' } as CSSProperties}>
                    Uniformes
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="sw-line" style={{ '--d': '1.54s' } as CSSProperties}>
                    clínicos
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="sw-line" style={{ '--d': '1.66s', color: C.fucsia } as CSSProperties}>
                    con color.
                  </span>
                </span>
              </h1>
              <p
                className="sw-fade mt-6 max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: C.muted, '--d': '1.85s' } as CSSProperties}
              >
                Tops, pantalones, delantales y chaquetas para quienes trabajan
                en salud. Una tienda de galería en Villarrica, con envíos a
                todo Chile.
              </p>
              <div className="sw-fade mt-8 flex flex-wrap gap-3" style={{ '--d': '2s' } as CSSProperties}>
                <Btn href={WA_LINK} tone="fucsia">
                  Consultar por WhatsApp
                </Btn>
                <Btn href="#tienda" tone="lineTinta" external={false}>
                  Ver la tienda
                </Btn>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Estante />
              <p
                className="sw-fade mt-3 text-right text-[11px] font-bold uppercase tracking-[0.22em]"
                style={{ color: C.muted, '--d': '2.1s' } as CSSProperties}
              >
                Los estantes, con los colores de la tienda
              </p>
            </div>
          </div>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(239,227,206,0.55)' }}>
          <div
            className="mx-auto flex max-w-6xl flex-wrap gap-x-7 gap-y-1 px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.18em] md:px-8"
            style={{ color: C.muted }}
          >
            <span>Uniformes clínicos</span>
            <span>Galería El Arrayán · Villarrica</span>
            <span style={{ color: C.fucsiaDark }}>5,0 en Google · 29 opiniones</span>
          </div>
        </div>
      </section>

      {/* ── 2 · Qué encuentras: riel de etiquetas ── */}
      <section
        id="variedad"
        className="scroll-mt-20"
        style={{ ...TRAMA('rgba(251,246,238,0.05)'), backgroundColor: C.carbon, color: C.crema }}
      >
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <Rotulo color={C.rosa} lineColor="rgba(237,143,189,0.45)">
                  Qué encuentras
                </Rotulo>
                <h2
                  className={`${display.className} mt-4 font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,6vw,3.8rem)]`}
                >
                  De la percha al turno.
                </h2>
              </div>
              <p className="max-w-sm text-base leading-relaxed" style={{ color: 'rgba(251,246,238,0.72)' }}>
                Uniformes clínicos y corporativos en varias tallas, diseños y
                colores: así lo muestra su Instagram y así se ven en sus
                estantes.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <figure className="relative">
                  <div className="sw-colg-foto relative">
                    <div
                      className="rotate-[-1.2deg] rounded-2xl p-2.5"
                      style={{ backgroundColor: '#fff', boxShadow: '0 22px 48px rgba(0,0,0,0.35)' }}
                    >
                    <div className="relative aspect-[9/10] overflow-hidden rounded-xl">
                      <Image
                        src={`${IMG}/conjunto.webp`}
                        alt="Conjunto de uniforme: top estampado de flores con pantalón rojo"
                        fill
                        sizes="(min-width: 1024px) 38vw, 90vw"
                        className="object-cover"
                      />
                    </div>
                    </div>
                    <div className="absolute -top-5 left-8 rotate-[-6deg]">
                      <span
                        className={`${display.className} inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-md`}
                        style={{ backgroundColor: C.fucsia, color: '#fff' }}
                      >
                        <i className="block h-2 w-2 rounded-full border-2" style={{ borderColor: 'rgba(255,255,255,0.9)' }} />
                        Conjuntos
                      </span>
                    </div>
                  </div>
                  <figcaption
                    className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: 'rgba(251,246,238,0.55)' }}
                  >
                    Top estampado + pantalón · foto real
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={140}>
                <figure className="relative ml-auto mt-8 w-[72%] rotate-[2deg]">
                  <div
                    className="rounded-2xl p-2"
                    style={{ backgroundColor: '#fff', boxShadow: '0 18px 38px rgba(0,0,0,0.3)' }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src={`${IMG}/estampado.webp`}
                        alt="Top con estampado tropical sobre un maniquí"
                        fill
                        sizes="(min-width: 1024px) 26vw, 64vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <figcaption
                    className="mt-3 text-right text-[11px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: 'rgba(251,246,238,0.55)' }}
                  >
                    Estampados que conversan
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <div className="relative">
                  <div
                    className="absolute inset-x-3 top-0 h-[3px] rounded-full"
                    style={{ backgroundColor: 'rgba(251,246,238,0.35)' }}
                    aria-hidden="true"
                  />
                  <div className="grid grid-cols-2 gap-4 pt-1 md:gap-5">
                    {ENCUENTRAS.map((t) => (
                      <TagColgante key={t.name} rot={t.rot}>
                        <h3 className={`${display.className} text-lg font-bold leading-tight`}>
                          {t.name}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.muted }}>
                          {t.desc}
                        </p>
                      </TagColgante>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={160}>
                <div
                  className="mt-10 rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: 'rgba(251,246,238,0.22)', backgroundColor: 'rgba(251,246,238,0.05)' }}
                >
                  <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                    <div
                      className="relative aspect-[4/5] w-36 shrink-0 overflow-hidden rounded-xl md:w-44"
                      style={{ border: '1px solid rgba(251,246,238,0.3)' }}
                    >
                      <Image
                        src={`${IMG}/colores.webp`}
                        alt="Pantalones de uniforme doblados en círculo de colores con el logo de Star Work al centro"
                        fill
                        sizes="(min-width: 768px) 176px, 144px"
                        className="object-cover"
                        style={{ objectPosition: '53% 50%' }}
                      />
                    </div>
                    <div>
                      <p
                        className={`${display.className} text-lg font-bold leading-snug md:text-xl`}
                        style={{ color: C.crema }}
                      >
                        El círculo de colores
                      </p>
                      <p className="mt-2 text-sm leading-relaxed md:text-[15px]" style={{ color: 'rgba(251,246,238,0.72)' }}>
                        Pantalones en todos los tonos, foto real de su tienda.
                        Eliges el color, la talla y el diseño.
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2.5">
                        {SWATCHES.map((s, i) => (
                          <span
                            key={i}
                            className="sw-swatch block h-9 w-9 rounded-md"
                            style={{ backgroundColor: s, boxShadow: 'inset 0 -3px 0 rgba(0,0,0,0.14)', animationDelay: `${i * 60}ms` }}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · La tienda ── */}
      <section
        id="tienda"
        className="scroll-mt-20"
        style={{ ...TRAMA('rgba(42,43,46,0.06)'), backgroundColor: C.crema }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <Rotulo color={C.fucsiaDark} lineColor="rgba(168,24,85,0.4)">
                Galería El Arrayán · Villarrica
              </Rotulo>
              <h2
                className={`${display.className} mt-4 font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2rem,6vw,3.8rem)]`}
                style={{ color: C.carbon }}
              >
                Estantes llenos para mirar con calma.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Un local de galería con cubículos de madera repletos de
                uniformes doblados, maniquíes con estampados y el mesón al
                fondo. Se entra a vitrinear y se sale con conjunto.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <blockquote
                className="mt-8 border-l-[3px] pl-5"
                style={{ borderColor: C.fucsia }}
              >
                <p className={`${display.className} text-[0.95rem] font-semibold leading-snug md:text-lg`} style={{ color: C.carbon }}>
                  «Mucha variedad, buenos precios y muy buena calidad de los
                  uniformes clínicos.»
                </p>
                <footer
                  className="mt-3 text-[11px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: C.muted }}
                >
                  Jeanette P. Valenzuela · Reseña en Google
                </footer>
              </blockquote>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Btn href={MAPS_URL} tone="fucsia">
                  Cómo llegar
                </Btn>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 tap-44"
                  style={{ color: C.tinta, textDecorationColor: 'rgba(214,36,110,0.45)' }}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
                  </svg>
                  @{BIZ.instagram}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="relative pb-12">
            <div
              className="sw-wipe relative aspect-[5/4] overflow-hidden rounded-3xl"
              style={{ border: `3px solid ${C.carbon}`, boxShadow: '0 24px 52px rgba(42,43,46,0.2)' }}
            >
              <Image
                src={`${IMG}/tienda-2.webp`}
                alt="Interior de la tienda: estantes de madera repletos de uniformes doblados, maniquíes y el logo de Star Work en la pared"
                fill
                sizes="(min-width: 1024px) 46vw, 92vw"
                className="object-cover"
              />
            </div>
            <Reveal delay={180} className="absolute -bottom-2 left-2 w-[42%] md:-left-4 md:w-[46%]">
              <div
                className="relative aspect-[3/4] rotate-[-4deg] overflow-hidden rounded-xl border-[6px] shadow-xl"
                style={{ borderColor: '#fff', boxShadow: '0 18px 40px rgba(42,43,46,0.28)' }}
              >
                <Image
                  src={`${IMG}/tienda.webp`}
                  alt="Pasillo de la tienda con estantes llenos de uniformes doblados"
                  fill
                  sizes="(min-width: 1024px) 20vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="absolute -top-4 right-6 rotate-[4deg]">
              <span
                className={`${display.className} inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-md`}
                style={{ backgroundColor: C.teal, color: '#fff' }}
              >
                <i className="block h-2 w-2 rounded-full border-2" style={{ borderColor: 'rgba(255,255,255,0.9)' }} />
                La tienda
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · Envíos a todo Chile ── */}
      <section style={{ backgroundColor: C.fucsia, color: '#fff' }}>
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 py-14 md:flex-row md:items-center md:px-8 md:py-18">
          <div className="max-w-xl">
            <Rotulo color="#fff" lineColor="rgba(255,255,255,0.5)">
              Directo por WhatsApp
            </Rotulo>
            <h2
              className={`${display.className} mt-4 font-black leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,7vw,4.2rem)]`}
            >
              Envíos a todo Chile.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed md:text-lg" style={{ color: '#fff' }}>
              Así lo anuncian en su Instagram: compras en la tienda o escribes
              por WhatsApp y te lo envían desde Villarrica.
            </p>
          </div>
          <div className="flex flex-col items-center self-center md:self-auto" aria-hidden="true">
            <span className="block h-8 w-[2px]" style={{ backgroundColor: 'rgba(255,255,255,0.7)' }} />
            <span
              className={`${display.className} inline-flex rotate-[-5deg] items-center gap-2.5 rounded-xl px-5 py-3.5 text-sm font-bold uppercase tracking-[0.16em] shadow-lg`}
              style={{ backgroundColor: C.crema, color: C.carbon }}
            >
              <i className="block h-2.5 w-2.5 rounded-full border-2" style={{ borderColor: C.fucsia }} />
              A todo Chile
            </span>
          </div>
        </div>
      </section>

      {/* ── 5 · Opiniones: etiquetas con reseñas ── */}
      <section
        id="opiniones"
        className="scroll-mt-20"
        style={{ ...TRAMA('rgba(251,246,238,0.05)'), backgroundColor: C.carbon, color: C.crema }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <Rotulo color={C.rosa} lineColor="rgba(237,143,189,0.45)">
                Opiniones en Google
              </Rotulo>
              <div className="mt-6 flex items-end gap-4">
                <span
                  className={`${display.className} font-black leading-none text-[clamp(4.4rem,15vw,7.5rem)]`}
                  style={{ color: C.crema }}
                >
                  {BIZ.rating}
                </span>
                <div className="pb-2">
                  <Stars value={BIZ.ratingValue} color={C.rosa} size={18} />
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(251,246,238,0.72)' }}>
                    {BIZ.reviews} opiniones
                  </p>
                </div>
              </div>
              <p className="mt-4 max-w-sm text-base leading-relaxed" style={{ color: 'rgba(251,246,238,0.72)' }}>
                Nota perfecta en Google. Los comentarios repiten lo mismo:
                variedad, buenos precios y atención que ayuda a elegir.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold underline decoration-2 underline-offset-4 tap-44"
                style={{ color: C.rosa, textDecorationColor: 'rgba(237,143,189,0.4)' }}
              >
                Ver la ficha real en Google
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17 17 7M9 7h8v8" />
                </svg>
              </a>
            </Reveal>
          </div>
          <div className="grid gap-8">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 140}>
                <TagColgante rot={r.rot}>
                  <blockquote>
                    <p className="text-[15px] leading-relaxed md:text-base" style={{ color: C.carbon }}>
                      “{r.quote}”
                    </p>
                    <footer className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[13px] font-bold tracking-[0.06em]" style={{ color: C.fucsiaDark }}>
                        {r.name}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                        Reseña de Google
                      </span>
                    </footer>
                  </blockquote>
                </TagColgante>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 · Horario y cómo llegar ── */}
      <section
        id="visita"
        className="scroll-mt-20"
        style={{ ...TRAMA('rgba(42,43,46,0.06)'), backgroundColor: C.crema }}
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-5 py-16 md:px-8 md:py-24 lg:grid-cols-2">
          <div>
            <Reveal>
              <Rotulo color={C.fucsiaDark} lineColor="rgba(168,24,85,0.4)">
                Visita y contacto
              </Rotulo>
              <h2
                className={`${display.className} mt-4 font-black leading-[1.05] tracking-[-0.02em] text-[clamp(1.9rem,7vw,3.4rem)]`}
                style={{ color: C.carbon }}
              >
                La tienda en Galería El Arrayán.
              </h2>
            </Reveal>
            <Reveal delay={110}>
              <address className="mt-6 text-base not-italic leading-relaxed md:text-lg" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline decoration-2 underline-offset-4 tap-44"
                  style={{ color: C.tinta, textDecorationColor: 'rgba(214,36,110,0.45)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div
                className="mt-7 max-w-md rounded-2xl border px-5 py-4"
                style={{ borderColor: C.line, backgroundColor: '#fff' }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.28em]" style={{ color: C.muted }}>
                  Horario
                </p>
                <dl className="mt-1">
                  {BIZ.hours.map((h, i) => (
                    <div
                      key={h.d}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                      style={i > 0 ? { borderTop: `1px dashed ${C.line}` } : undefined}
                    >
                      <dt className="text-[15px] font-bold" style={{ color: C.carbon }}>{h.d}</dt>
                      <dd className="text-[15px] tabular-nums" style={{ color: h.h === 'Cerrado' ? C.fucsiaDark : C.muted }}>
                        {h.h}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={WA_LINK} tone="fucsia">
                  Consultar por WhatsApp
                </Btn>
                <Btn href={MAPS_URL} tone="lineTinta">
                  Cómo llegar
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure>
              <div
                className="relative aspect-[4/3] min-h-[300px] w-full overflow-hidden rounded-3xl"
                style={{ border: `3px solid ${C.carbon}`, boxShadow: '0 20px 46px rgba(42,43,46,0.16)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <figcaption
                className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em]"
                style={{ color: C.muted }}
              >
                Galería El Arrayán · General Urrutia 788, Villarrica
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.crema }}>
        <div className="mx-auto max-w-6xl px-5 pb-5 pt-8 md:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo optimizado en public/ */}
              <img
                src={`${IMG}/logo.webp`}
                alt={`Logo de ${BIZ.name}`}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className={`${display.className} text-lg font-black leading-tight md:text-xl`}>
                  {BIZ.name}
                </p>
                <p className="text-sm" style={{ color: 'rgba(251,246,238,0.7)' }}>
                  {BIZ.rubro} · {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(251,246,238,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(251,246,238,0.85)' }}
              >
                Instagram
              </a>
            </nav>
          </div>
          <div className="mt-5 border-t pt-4" style={{ borderColor: 'rgba(251,246,238,0.14)' }}>
            <p className="flex items-start gap-2 text-xs leading-relaxed" style={{ color: 'rgba(251,246,238,0.6)' }}>
              <Flor className="mt-0.5 h-3.5 w-3.5 shrink-0" style={{ color: C.rosa }} />
              <span>
                Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.crema }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.rosa }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
