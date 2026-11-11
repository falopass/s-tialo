import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HOURS, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// La terraza de Abuela Coffee: turquesa de las mesas, amarillo de las
// sillas, el papel de diario que envuelve sus dulces y la tinta del café.
const C = {
  papel: '#F5EDDC',
  papelClaro: '#FBF5E9',
  tinta: '#37291D',
  turquesa: '#17A7B4',
  turquesaOsc: '#0D5962',
  turquesaDeep: '#0A3F46',
  amarillo: '#F0C23C',
  hojaldre: '#B97F33',
  muted: '#6E5D47',
  line: 'rgba(55,41,29,0.16)',
}

// Trama de imprenta: líneas finas de papel de diario.
const PRINT: CSSProperties = {
  backgroundImage:
    'repeating-linear-gradient(0deg, rgba(55,41,29,0.045) 0 1px, transparent 1px 7px)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'abuela-coffee-villarrica',
  title: 'Abuela Coffee · Cafetería en Villarrica',
  description:
    'Cafetería en Vicente Reyes 794, Villarrica. Café italiano recién molido, empanadas, hojaldres y dulces caseros. Pide por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

// Lo que se ve en la vitrina: productos reales de sus fotos.
const VITRINA = [
  { src: 'croissant-helado', name: 'Croissant con helado', nota: 'bola de helado de chocolate', ratio: 'aspect-[4/5]' },
  { src: 'cheesecake', name: 'Cheesecake', nota: 'frutos rojos y maracuyá', ratio: 'aspect-[4/3]' },
  { src: 'empanadas', name: 'Empanadas', nota: 'horneadas, doradas', ratio: 'aspect-[4/3]' },
  { src: 'baklava', name: 'Baklava', nota: 'hojaldre con pistacho', ratio: 'aspect-[4/3]' },
  { src: 'dulce-nueces', name: 'Dulce de nueces', nota: 'con nueces y almíbar', ratio: 'aspect-[4/3]' },
  { src: 'hojaldres', name: 'Hojaldres', nota: 'triángulos dorados', ratio: 'aspect-[4/3]' },
  { src: 'alfajores', name: 'Alfajores', nota: 'con coco', ratio: 'aspect-[4/3]' },
  { src: 'cuchuflis', name: 'Cuchuflís', nota: 'unos bañados en chocolate', ratio: 'aspect-[4/3]' },
]

const SELLOS = [
  'café italiano recién molido',
  'todo casero',
  'opciones veganas',
  'leche sin lactosa',
]

const OPINIONES = [
  {
    cita: 'Me encantó la atención del lugar. Se caracteriza por café italiano. Recién molido. Si les gusta un café armonioso sin lactosa este es el lugar. Todo casero. Opciones veganas. Volvería sin duda.',
    quien: 'Daniel O.',
    rota: '-1.1deg',
  },
  {
    cita: 'Todo rico ahí. 10 de 10 las palomitas.',
    quien: 'Cristóbal N.',
    rota: '1.2deg',
  },
  {
    cita: 'Todo muy bueno, además la atención es excelente muy buena onda.',
    quien: 'Sebastián C.',
    rota: '-0.7deg',
  },
]

// ── La taza de la casa: el café recién servido, con su vapor ──

function Taza({
  className = 'w-20 h-20',
  color = C.turquesaOsc,
  vapor = C.hojaldre,
}: {
  className?: string
  color?: string
  vapor?: string
}) {
  return (
    <svg viewBox="0 0 96 96" className={className} fill="none" aria-hidden="true">
      {/* aro de café que quedó en el papel */}
      <circle cx="48" cy="84" r="10" stroke={vapor} strokeWidth="1.4" opacity="0.3" strokeDasharray="3 5" />
      {/* vapor: tres volutas que suben y se disipan */}
      <g stroke={vapor} strokeWidth="2.4" strokeLinecap="round">
        <path className="ab-vapor v1" d="M36 38c-2.6-4.5 2.6-6.5 0-11c-2.2-3.8 2.2-5.5 0.6-9" />
        <path className="ab-vapor v2" d="M48 38c-2.6-4.5 2.6-6.5 0-11c-2.2-3.8 2.2-5.5 0.6-9" />
        <path className="ab-vapor v3" d="M60 38c-2.6-4.5 2.6-6.5 0-11c-2.2-3.8 2.2-5.5 0.6-9" />
      </g>
      {/* taza */}
      <path
        d="M30 46h36v12a16 16 0 0 1-16 16h-4a16 16 0 0 1-16-16V46z"
        stroke={color}
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path d="M66 50h5a8 8 0 0 1 0 16h-7" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      <path d="M24 82h48" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  )
}

// Rótulo de sección: versalita mono con una línea fina.
function Rotulo({ children, color, lineColor }: { children: React.ReactNode; color: string; lineColor: string }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.28em]`}
      style={{ color }}
    >
      <span className="h-px w-8 shrink-0" style={{ backgroundColor: lineColor }} aria-hidden="true" />
      {children}
    </p>
  )
}

// Cinta adhesiva (washi) que pega los recortes al papel.
function Cinta({ color, className = '' }: { color: string; className?: string }) {
  return (
    <span
      className={`absolute w-[74px] h-[22px] z-10 pointer-events-none ${className}`}
      style={{ backgroundColor: color, opacity: 0.82 }}
      aria-hidden="true"
    />
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
  tone: 'turquesa' | 'amarillo' | 'lineTinta' | 'lineCrema' | 'crema'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'turquesa'
      ? { backgroundColor: C.turquesaOsc, color: C.papelClaro }
      : tone === 'amarillo'
        ? { backgroundColor: C.amarillo, color: C.tinta }
        : tone === 'crema'
          ? { backgroundColor: C.papelClaro, color: C.tinta }
          : tone === 'lineCrema'
            ? { border: '1.5px solid rgba(251,245,233,0.55)', color: C.papelClaro }
            : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`ab-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${focusRing}`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function AbuelaCoffeePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* El vapor de la taza: sube y se disipa, en bucle. */
        @keyframes ab-vapor {
          0% { opacity: 0; transform: translateY(7px) scaleY(0.65) }
          35% { opacity: 0.9 }
          100% { opacity: 0; transform: translateY(-13px) scaleY(1.3) }
        }
        .ab-vapor { animation: ab-vapor 3.1s ease-out infinite; transform-origin: 50% 100% }
        .ab-vapor.v2 { animation-delay: 1.05s }
        .ab-vapor.v3 { animation-delay: 2.1s }

        /* La foto de la fachada se pega al papel. */
        @keyframes ab-pega {
          from { opacity: 0; transform: rotate(-3.5deg) translateY(30px) scale(0.94) }
          to { opacity: 1; transform: rotate(-1.2deg) translateY(0) scale(1) }
        }
        .ab-pega { animation: ab-pega 1.05s cubic-bezier(0.22,0.61,0.2,1) 0.5s both }

        /* Titular y textos que entran por líneas. */
        @keyframes ab-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .ab-line { animation: ab-up 0.95s cubic-bezier(0.22,0.61,0.2,1) both }
        @keyframes ab-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ab-fade { animation: ab-fade 0.85s ease-out both }

        /* Las tarjetas de la vitrina se asoman al recorrer el mostrador. */
        @keyframes ab-card { from { opacity: 0; transform: translateY(26px) rotate(2.5deg) scale(0.94) } to { opacity: 1; transform: none } }
        @supports (animation-timeline: view()) {
          .ab-card {
            animation: ab-card linear both;
            animation-timeline: view(inline);
            animation-range: entry 0% entry 90%;
          }
        }

        .ab-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .ab-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .ab-btn:active { transform: translateY(0) scale(0.97) }

        .ab-vitrina { scrollbar-width: none }
        .ab-vitrina::-webkit-scrollbar { display: none }
        .ab-dulce { transition: transform 0.25s ease, box-shadow 0.25s ease }
        .ab-dulce:hover { transform: translateY(-5px) rotate(-0.6deg) }

        @media (prefers-reduced-motion: reduce) {
          .ab-vapor, .ab-pega, .ab-line, .ab-fade, .ab-card { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'light',
          bar: 'rgba(245,237,220,0.94)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.turquesaOsc,
          btnInk: C.papelClaro,
        }}
      />

      {/* ── 1 · Primera plana: el diario de la abuela ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ ...PRINT, backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-32 pb-9 md:pb-14">
          {/* fecha del diario */}
          <div className="ab-fade" style={{ animationDelay: '0.1s' }}>
            <div
              className={`${mono.className} border-y py-2 flex items-center justify-between gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-bold`}
              style={{ borderColor: C.line, color: C.muted }}
            >
              <span>Villarrica · La Araucanía</span>
              <span className="hidden sm:inline">cafetería de barrio</span>
              <span>{BIZ.reviews} opiniones en Google</span>
            </div>
          </div>

          <div className="mt-6 md:mt-9 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1.05fr_0.95fr] gap-7 md:gap-12 items-center">
            <div className="min-w-0">
              {/* nombre + taza humeante */}
              <div className="flex items-end justify-between gap-3">
                <h1
                  className={`${display.className} leading-[0.95] text-[clamp(2.9rem,13vw,5.6rem)]`}
                  style={{ color: C.tinta }}
                >
                  Abuela <em style={{ color: C.turquesaOsc }}>Coffee</em>
                </h1>
                <Taza className="w-[68px] h-[68px] md:w-[104px] md:h-[104px] shrink-0 mb-1.5" />
              </div>

              {/* titular */}
              <p
                className={`${display.className} mt-5 md:mt-7 leading-[1.16] text-[clamp(1.45rem,5.6vw,2.7rem)] max-w-xl`}
                style={{ color: C.tinta }}
              >
                <span className="block overflow-hidden">
                  <span className="ab-line block" style={{ animationDelay: '0.35s' }}>
                    Como en la casa de la abuela,
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ab-line block" style={{ animationDelay: '0.5s' }}>
                    <em style={{ color: C.turquesaOsc }}>con café italiano.</em>
                  </span>
                </span>
              </p>

              <p
                className="ab-fade mt-5 max-w-md text-[15px] md:text-base leading-relaxed"
                style={{ color: C.muted, animationDelay: '0.75s' }}
              >
                En Vicente Reyes se sirve café recién molido, empanadas,
                hojaldres y dulces caseros, en mesas turquesa a la
                vereda.
              </p>

              <div className="ab-fade mt-6 flex flex-wrap gap-3" style={{ animationDelay: '0.9s' }}>
                <Btn href={WA_LINK} tone="turquesa">
                  Pedir por WhatsApp
                </Btn>
                <Btn href={MAPS_URL} tone="lineTinta">
                  Cómo llegar
                </Btn>
              </div>
            </div>

            {/* la fachada, pegada con cinta */}
            <figure className="ab-pega relative mx-3 md:mx-0">
              <Cinta color={C.turquesa} className="-top-2.5 left-5 -rotate-6" />
              <Cinta color={C.amarillo} className="-top-2.5 right-5 rotate-[8deg]" />
              <div
                className="relative overflow-hidden rounded-[6px] aspect-[4/3] border"
                style={{ borderColor: C.line, boxShadow: '0 18px 40px rgba(55,41,29,0.18)' }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="La fachada de Abuela Coffee en Vicente Reyes: vitrina, mesas turquesa y sillas amarillas en la vereda"
                  fill
                  priority
                  sizes="(min-width: 768px) 46vw, 92vw"
                  className="object-cover"
                  style={{ objectPosition: '50% 62%' }}
                />
              </div>
              <figcaption
                className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-right`}
                style={{ color: C.muted }}
              >
                La fachada y la terraza
              </figcaption>
            </figure>
          </div>

          {/* datos al pie de la primera plana */}
          <div className="ab-fade mt-8 md:mt-10" style={{ animationDelay: '1.05s' }}>
            <div
              className={`${mono.className} border-t pt-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold`}
              style={{ borderColor: C.line, color: C.muted }}
            >
              <span style={{ color: C.turquesaOsc }}>Vicente Reyes 794</span>
              <span>Lun a vie · 8:30 a 18:30</span>
              <span>Sáb · 10:30 a 16:30</span>
              <span>Dom · cerrado</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · La casa: café italiano y cocina casera ── */}
      <section
        id="casa"
        className="scroll-mt-20 relative"
        style={{ ...PRINT, backgroundColor: C.papelClaro }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <Reveal>
              <Rotulo color={C.turquesaOsc} lineColor="rgba(13,89,98,0.45)">
                La casa
              </Rotulo>
              <h2
                className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6vw,4rem)] mt-4`}
                style={{ color: C.tinta }}
              >
                La cocina es de casa;{' '}
                <em style={{ color: C.hojaldre }}>el café, italiano.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Aquí el mostrador manda: empanadas y hojaldres recién
                horneados, dulces para la once y un café que se muele al
                momento. Así lo cuenta quien viene.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-7 flex flex-wrap gap-2.5">
                {SELLOS.map((s) => (
                  <li
                    key={s}
                    className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-2 rounded-full border`}
                    style={{ borderColor: 'rgba(13,89,98,0.4)', color: C.turquesaOsc, backgroundColor: 'rgba(23,167,180,0.08)' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs leading-relaxed max-w-md" style={{ color: C.muted }}>
                Lo que dicen quienes vienen: café italiano recién molido,
                todo casero, opciones veganas y leche sin lactosa.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="turquesa">
                  Pedir por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure className="relative max-w-[400px] mx-auto lg:ml-auto lg:mr-0 rotate-[1.6deg]">
              <Cinta color={C.amarillo} className="-top-2.5 left-8 -rotate-[9deg]" />
              <div
                className="relative overflow-hidden rounded-[6px] aspect-[3/4] border"
                style={{ borderColor: C.line, boxShadow: '0 18px 40px rgba(55,41,29,0.16)' }}
              >
                <Image
                  src={`${IMG}/empanada-taza.webp`}
                  alt="Empanada abierta junto a la taza de la casa, sobre la mesa turquesa de Abuela Coffee"
                  fill
                  sizes="(min-width: 1024px) 40vw, 86vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-right`}
                style={{ color: C.muted }}
              >
                La empanada de la casa y su taza
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · La vitrina: el mostrador turquesa ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.turquesaDeep }}>
        <div className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Rotulo color={C.amarillo} lineColor="rgba(240,194,60,0.5)">
                Dulce y salado
              </Rotulo>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
                <h2
                  className={`${display.className} leading-[1.04] text-[clamp(2.2rem,6.5vw,4.2rem)]`}
                  style={{ color: C.papelClaro }}
                >
                  La vitrina <em style={{ color: C.amarillo }}>de hoy</em>
                </h2>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: 'rgba(251,245,233,0.75)' }}>
                  recorre el mostrador →
                </p>
              </div>
              <p className="mt-4 max-w-lg text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,245,233,0.82)' }}>
                Esto es lo que se ve en su vitrina, tal como sale en las
                fotos de la casa. Lo que haya hoy se confirma por
                WhatsApp.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="ab-vitrina mt-9 flex gap-5 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-5 pt-3"
              style={{ WebkitOverflowScrolling: 'touch' }}
            >
              {VITRINA.map((v) => (
                <figure
                  key={v.src}
                  className="ab-card ab-dulce snap-start shrink-0 w-[248px] md:w-[292px] rounded-[8px] p-2.5 pb-3"
                  style={{ backgroundColor: C.papelClaro, boxShadow: '0 14px 30px rgba(4,26,29,0.35)' }}
                >
                  <div className={`relative overflow-hidden rounded-[5px] ${v.ratio}`}>
                    <Image
                      src={`${IMG}/${v.src}.webp`}
                      alt={`${v.name} de Abuela Coffee, ${v.nota}`}
                      fill
                      sizes="(min-width: 768px) 292px, 248px"
                      className="object-cover"
                      loading="eager"
                    />
                  </div>
                  <figcaption className="mt-2.5 px-0.5">
                    <p className={`${display.className} text-[17px] md:text-lg leading-tight`} style={{ color: C.tinta }}>
                      {v.name}
                    </p>
                    <p className={`${mono.className} mt-1 text-[10px] uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                      {v.nota}
                    </p>
                  </figcaption>
                </figure>
              ))}
              {/* ficha final: pedir */}
              <div
                className="snap-start shrink-0 w-[180px] md:w-[200px] rounded-[8px] flex flex-col items-center justify-center gap-3 text-center px-5 border-2 border-dashed"
                style={{ borderColor: 'rgba(240,194,60,0.55)', color: C.amarillo }}
              >
                <Taza className="w-[54px] h-[54px]" color={C.amarillo} vapor="rgba(240,194,60,0.7)" />
                <span className={`${display.className} text-lg leading-tight`}>
                  ¿Cuál te llevas hoy?
                </span>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-2 rounded-full tap-44 ${focusRing}`}
                  style={{ backgroundColor: C.amarillo, color: C.turquesaDeep }}
                >
                  Pedir →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Opiniones: recortes del diario ── */}
      <section
        id="opiniones"
        className="scroll-mt-20"
        style={{ ...PRINT, backgroundColor: C.papel }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo color={C.turquesaOsc} lineColor="rgba(13,89,98,0.45)">
              Lo que dicen quienes vienen
            </Rotulo>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
              <h2
                className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6vw,4rem)]`}
                style={{ color: C.tinta }}
              >
                Los que vienen, <em style={{ color: C.hojaldre }}>vuelven.</em>
              </h2>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: C.muted }}>
                {BIZ.reviews} opiniones en Google
              </p>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-8 md:gap-6">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.quien} delay={i * 120}>
                <blockquote
                  className="relative h-full rounded-[4px] border p-6 pt-7"
                  style={{
                    backgroundColor: C.papelClaro,
                    borderColor: C.line,
                    boxShadow: '0 10px 26px rgba(55,41,29,0.1)',
                    transform: `rotate(${o.rota})`,
                  }}
                >
                  <Cinta color={i === 1 ? C.turquesa : C.amarillo} className="-top-2.5 left-1/2 -translate-x-1/2 rotate-[3deg]" />
                  <p className={`${display.className} italic text-[17px] md:text-[18px] leading-[1.45]`} style={{ color: C.tinta }}>
                    “{o.cita}”
                  </p>
                  <footer className="mt-4 flex items-center justify-between gap-3">
                    <span className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.16em]`} style={{ color: C.turquesaOsc }}>
                      {o.quien}
                    </span>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      opinión en Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs font-bold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44 ${focusRing}`}
              style={{ color: C.turquesaOsc, textDecorationColor: 'rgba(13,89,98,0.35)' }}
            >
              Ver la ficha real en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Dónde: la vereda de Vicente Reyes ── */}
      <section
        id="donde"
        className="scroll-mt-20"
        style={{ ...PRINT, backgroundColor: C.papelClaro }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="min-w-0">
            <Reveal>
              <Rotulo color={C.turquesaOsc} lineColor="rgba(13,89,98,0.45)">
                Dónde
              </Rotulo>
              <h2
                className={`${display.className} leading-[1.06] text-[clamp(2.1rem,6vw,3.8rem)] mt-4`}
                style={{ color: C.tinta }}
              >
                Vicente Reyes 794,{' '}
                <em style={{ color: C.turquesaOsc }}>Villarrica</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address className="not-italic mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold underline underline-offset-4 decoration-2 tap-44 ${focusRing}`}
                  style={{ color: C.tinta, textDecorationColor: 'rgba(13,89,98,0.4)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <ul className="mt-6 border-y divide-y" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <li key={h.d} className="flex items-baseline justify-between gap-4 py-2.5" style={{ borderColor: C.line }}>
                    <span className="text-sm font-bold" style={{ color: C.tinta }}>{h.d}</span>
                    <span className={`${mono.className} text-xs tracking-[0.06em]`} style={{ color: h.h === 'cerrado' ? '#8A5F22' : C.muted }}>
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={MAPS_URL} tone="turquesa">
                  Cómo llegar
                </Btn>
                <Btn href={WA_LINK} tone="lineTinta">
                  Pedir por WhatsApp
                </Btn>
              </div>
            </Reveal>
            {/* la terraza, recortada de la fachada */}
            <Reveal delay={200}>
              <figure className="mt-9 relative">
                <div
                  className="relative overflow-hidden rounded-[6px] aspect-[21/9] border"
                  style={{ borderColor: C.line }}
                >
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Las mesas turquesa y las sillas amarillas de la terraza de Abuela Coffee en la vereda"
                    fill
                    sizes="(min-width: 1024px) 44vw, 88vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 92%' }}
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`}
                  style={{ color: C.muted }}
                >
                  Mesas turquesa y sillas amarillas en la vereda
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div
              className="relative w-full overflow-hidden rounded-[8px] aspect-[4/3] min-h-[300px] border"
              style={{ borderColor: C.line, boxShadow: '0 18px 40px rgba(55,41,29,0.14)' }}
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

      {/* ── 6 · Cierre: te esperamos en la vereda ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.amarillo }}>
        <div
          className="absolute -right-20 -top-20 w-72 h-72 md:w-96 md:h-96 rounded-full pointer-events-none"
          style={{ border: '1.5px solid rgba(55,41,29,0.18)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Rotulo color={C.tinta} lineColor="rgba(55,41,29,0.4)">
              <span className="mx-auto">Te esperamos</span>
            </Rotulo>
            <h2
              className={`${display.className} leading-[1.03] text-[clamp(2.4rem,7.5vw,4.6rem)] mt-4`}
              style={{ color: C.tinta }}
            >
              Siéntate <em>en la vereda.</em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(55,41,29,0.82)' }}>
              Escríbenos por WhatsApp para tu pedido, o pásate por
              Vicente Reyes: el café ya está servido.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="turquesa">
                Pedir por WhatsApp
              </Btn>
              <Btn href={MAPS_URL} tone="lineTinta">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papelClaro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-xl md:text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(251,245,233,0.72)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(251,245,233,0.85)' }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: C.amarillo }}
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(251,245,233,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(251,245,233,0.62)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.papelClaro }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.amarillo }}
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
