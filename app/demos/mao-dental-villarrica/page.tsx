import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, REVIEW_NINOS, IMG } from './content'

// Cormorant Garamond: el trazo fino del logo MAO en grande, con
// itálica en la palabra clave. Mulish para el texto y los rótulos.
const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
    { path: '../../fonts/mulish/italic-200-1000.woff2', weight: '200 1000', style: 'italic' },
  ],
})

// «Odontología familiar con calma»: la crema de la recepción, el
// verde petróleo de su tarjeta, el turquesa del sillón, la arena de
// los muros, la tinta del logo y un poco de latón del porta tarjetas.
const C = {
  crema: '#F6F2EA',
  petroleo: '#1F4C4F',
  petroleoOsc: '#142F31',
  turquesa: '#33A6B0',
  turquesaSuave: '#7FBFC7',
  arena: '#E6DAC8',
  arenaInk: '#6E5B33',
  tinta: '#16282A',
  laton: '#B8914A',
  mutL: 'rgba(22,40,42,0.72)',
  mutD: 'rgba(246,242,234,0.74)',
  lineL: 'rgba(22,40,42,0.16)',
  lineD: 'rgba(246,242,234,0.22)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'mao-dental-villarrica',
  title: 'MAO Dental · Odontología familiar en Villarrica',
  description:
    'Clínica dental en Pedro Montt 774, Villarrica. Odontología familiar para niños y adultos, 5,0 en Google con 9 opiniones. Agenda tu hora por WhatsApp.',
  image: `${IMG}/escaner.webp`,
})

const NAV_LINKS = [
  { label: 'La clínica', href: '#clinica' },
  { label: 'De cerca', href: '#detalles' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

const RASGOS = [
  'Un ambiente limpio y tranquilo',
  'Atención a niños y adultos',
  'Trato cercano y profesional',
] as const

/** El óvalo de la O del logo: elipsis de línea fina. */
function OvaloSvg({ className = '', color = 'currentColor', w = 1.6 }: { className?: string; color?: string; w?: number }) {
  return (
    <svg viewBox="0 0 22 14" className={className} fill="none" aria-hidden="true">
      <ellipse cx="11" cy="7" rx="9.6" ry="5.8" stroke={color} strokeWidth={w} />
    </svg>
  )
}

/** El arco de sonrisa: curva suave, como la que deja una buena atención. */
function SonrisaSvg({ className = '', color = 'currentColor', w = 3, dibuja = false, delay = '0s' }: {
  className?: string
  color?: string
  w?: number
  dibuja?: boolean
  delay?: string
}) {
  return (
    <svg viewBox="0 0 120 30" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 8 C 40 26 80 26 112 8"
        stroke={color}
        strokeWidth={w}
        strokeLinecap="round"
        pathLength={100}
        strokeDasharray={dibuja ? 100 : undefined}
        className={dibuja ? 'md-trazo-s' : undefined}
        style={dibuja ? ({ animationDelay: delay } as CSSProperties) : undefined}
      />
    </svg>
  )
}

/** Rótulo en versalitas espaciadas, con la O del logo como marca. */
function Rotulo({ children, color = C.petroleo }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-5" style={{ color }}>
      <OvaloSvg className="w-[18px] h-[11px] shrink-0" color={color} />
      {children}
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone = 'petroleo',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  tone?: 'petroleo' | 'crema' | 'linea' | 'lineaCrema'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'petroleo'
      ? { backgroundColor: C.petroleo, color: C.crema }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.petroleoOsc }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.petroleo}`, color: C.petroleo }
          : { border: '1.5px solid rgba(246,242,234,0.55)', color: C.crema }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className={`md-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${className}`}
      style={st}
    >
      <svg viewBox="0 0 24 24" className="w-[16px] h-[16px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

/** Marcador de lista: el óvalo de la O en miniatura. */
function PuntoO({ color = C.turquesa, className = '' }: { color?: string; className?: string }) {
  return (
    <span
      className={`inline-block w-[11px] h-[7px] shrink-0 ${className}`}
      style={{ border: `1.4px solid ${color}`, borderRadius: '50%' }}
      aria-hidden="true"
    />
  )
}

export default function MaoDentalPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* La O se dibuja: el óvalo del logo se traza alrededor del
           titular y la curva de sonrisa se revela bajo él. Después
           entra la foto dentro de su propio óvalo. */
        @keyframes md-draw { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .md-trazo-o { stroke-dasharray: 100; stroke-dashoffset: 0; animation: md-draw 1.6s cubic-bezier(.4,.1,.2,1) .8s both }
        .md-trazo-s { stroke-dasharray: 100; stroke-dashoffset: 0; animation: md-draw .9s cubic-bezier(.4,.1,.2,1) both }

        @keyframes md-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .md-linea { display: block; animation: md-linea .95s cubic-bezier(.22,.61,.2,1) both }

        @keyframes md-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .md-fade { animation: md-fade .85s ease-out both }

        @keyframes md-hero-foto {
          0% { clip-path: ellipse(4% 3% at 50% 56%); opacity: 0 }
          35% { opacity: 1 }
          100% { clip-path: ellipse(50% 50% at 50% 50%); opacity: 1 }
        }
        .md-hero-foto { animation: md-hero-foto 1.35s cubic-bezier(.3,.6,.25,1) 1.95s both }

        @keyframes md-aro-in { from { opacity: 0; transform: rotate(-7deg) scale(.92) } to { opacity: 1; transform: rotate(-7deg) scale(1) } }
        .md-aro-in { animation: md-aro-in 1s ease-out 2.5s both }

        /* Revelados al hacer scroll: cada foto dentro de su forma
           (óvalo, arco o marco), una distinta de la otra. */
        @supports (animation-timeline: view()) {
          .md-r-ovalo { animation: md-k-ovalo linear both; animation-timeline: view(); animation-range: entry 4% entry 60% }
          @keyframes md-k-ovalo { from { clip-path: ellipse(6% 5% at 50% 58%) } to { clip-path: ellipse(50% 50% at 50% 50%) } }
          .md-r-arco { animation: md-k-arco linear both; animation-timeline: view(); animation-range: entry 4% entry 60% }
          @keyframes md-k-arco { from { clip-path: inset(88% 10% 0 10% round 150px 150px 18px 18px) } to { clip-path: inset(0 0 0 0 round 150px 150px 18px 18px) } }
          .md-r-lat { animation: md-k-lat linear both; animation-timeline: view(); animation-range: entry 6% entry 62% }
          @keyframes md-k-lat { from { clip-path: inset(0 94% 0 0 round 26px) } to { clip-path: inset(0 0 0 0 round 26px) } }
          .md-r-sub { animation: md-k-sub linear both; animation-timeline: view(); animation-range: entry 6% entry 62% }
          @keyframes md-k-sub { from { clip-path: inset(90% 0 0 0 round 26px) } to { clip-path: inset(0 0 0 0 round 26px) } }
          .md-zoom { transform: scale(1.09); animation: md-k-zoom linear both; animation-timeline: view(); animation-range: entry 4% entry 80% }
          @keyframes md-k-zoom { to { transform: scale(1) } }
        }

        .md-btn { transition: transform .18s ease, filter .18s ease }
        .md-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .md-btn:active { transform: scale(.97) }
        .md-btn:focus-visible { outline: 3px solid ${C.turquesa}; outline-offset: 3px }
        .md-link:focus-visible { outline: 3px solid ${C.turquesa}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .md-trazo-o, .md-trazo-s, .md-linea, .md-fade, .md-hero-foto, .md-aro-in { animation: none !important }
          .md-hero-foto { clip-path: none !important; opacity: 1 !important }
          .md-r-ovalo, .md-r-arco, .md-r-lat, .md-r-sub { animation: none !important }
          .md-zoom { transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-xl md:text-2xl font-medium tracking-[0.04em]`}>
            MAO <span className="font-light">Dental</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(246,242,234,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.petroleo,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: la O se dibuja ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        {/* Óvalos finos de fondo, como la O repetida de la marca */}
        <div
          className="absolute -right-32 -top-24 w-[24rem] h-[15rem] pointer-events-none"
          style={{ border: `1px solid ${C.lineL}`, borderRadius: '50%', transform: 'rotate(-12deg)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -left-40 bottom-24 w-[22rem] h-[13rem] pointer-events-none hidden md:block"
          style={{ border: `1px solid rgba(51,166,176,0.25)`, borderRadius: '50%', transform: 'rotate(9deg)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-32 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-6 items-center">
          <div>
            <p
              className="md-fade flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-7"
              style={{ color: C.petroleo, animationDelay: '.25s' }}
            >
              <OvaloSvg className="w-[18px] h-[11px] shrink-0" color={C.turquesa} />
              Villarrica · Odontología familiar
            </p>

            <div className="relative self-start">
              <h1
                className={`${display.className} font-medium leading-[1.04] tracking-[-0.01em] text-[clamp(2.75rem,10.5vw,5.4rem)]`}
                style={{ color: C.tinta }}
              >
                <span className="block overflow-hidden pb-[0.06em]">
                  <span className="md-linea" style={{ animationDelay: '.45s' }}>Cuidamos tu</span>
                </span>
                <span className="block overflow-hidden pb-[0.06em]">
                  <span className="md-linea" style={{ animationDelay: '.6s' }}>sonrisa, y la de</span>
                </span>
                <span className="block overflow-hidden pb-[0.1em]">
                  <span className="md-linea" style={{ animationDelay: '.75s' }}>
                    tu <em className="font-normal" style={{ color: C.petroleo }}>familia.</em>
                  </span>
                </span>
              </h1>
              {/* El óvalo de la O se traza alrededor del titular */}
              <div
                className="absolute pointer-events-none"
                style={{ top: '-0.7em', right: '-0.8em', bottom: '-0.45em', left: '-0.9em', transform: 'rotate(-2.6deg)' }}
                aria-hidden="true"
              >
                <svg className="block h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                  <ellipse
                    cx="50" cy="50" rx="49" ry="47.5"
                    stroke={C.petroleo}
                    strokeWidth="1.5"
                    vectorEffect="non-scaling-stroke"
                    pathLength={100}
                    className="md-trazo-o"
                  />
                </svg>
              </div>
            </div>

            {/* La curva de sonrisa se revela de izquierda a derecha */}
            <SonrisaSvg
              className="mt-3 md:mt-4 h-[24px] w-[118px] md:h-[30px] md:w-[150px]"
              color={C.turquesa}
              dibuja
              delay="2s"
            />

            <p
              className="md-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutL, animationDelay: '1.35s' }}
            >
              Clínica dental en Pedro Montt 774: atención para niños y
              adultos en un espacio tranquilo, limpio y cuidado.
            </p>

            <div className="md-fade mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: '1.5s' }}>
              <BtnWa>Agenda por WhatsApp</BtnWa>
              <BtnWa href="#clinica" tone="linea">Conocer la clínica</BtnWa>
            </div>

            <div className="md-fade mt-6 flex items-center gap-2.5" style={{ animationDelay: '1.7s' }}>
              <Stars value={BIZ.ratingValue} color={C.laton} size={15} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="md-link text-sm tap-44"
                style={{ color: C.mutL }}
              >
                <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.rating}</strong>
                {' '}en Google · {BIZ.reviews} opiniones
              </a>
            </div>
          </div>

          {/* La foto entra dentro de su propio óvalo */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[82%] max-w-[340px] md:max-w-[420px]">
              <div
                className="md-aro-in absolute -inset-3 md:-inset-4 pointer-events-none"
                style={{ border: `1.5px solid rgba(31,76,79,0.35)`, borderRadius: '50%' }}
                aria-hidden="true"
              />
              <div
                className="md-hero-foto relative aspect-[4/5]"
                style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}
              >
                <Image
                  src={`${IMG}/escaner.webp`}
                  alt="El escáner de la clínica MAO Dental sobre su base, con el sillón turquesa al fondo"
                  fill
                  priority
                  sizes="(min-width: 1024px) 34vw, 82vw"
                  className="object-cover"
                />
              </div>
              <p
                className="md-fade mt-4 text-center text-[10px] font-bold uppercase tracking-[0.24em]"
                style={{ color: C.mutL, animationDelay: '2.6s' }}
              >
                La clínica, en Pedro Montt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · La clínica: composición editorial asimétrica ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.08fr_0.92fr] gap-12 lg:gap-14 items-center">
          {/* Fotos: una vertical grande y dos pequeñas superpuestas */}
          <div className="relative h-[430px] md:h-[560px] order-2 lg:order-1">
            <div className="absolute left-0 top-0 w-[62%] h-[92%] md:h-[94%]">
              <div className="md-r-arco relative h-full w-full" style={{ clipPath: 'inset(0 0 0 0 round 150px 150px 18px 18px)' }}>
                <Image
                  src={`${IMG}/recepcion.webp`}
                  alt="La puerta de vidrio de MAO Dental con su logo esmerilado y la recepción al fondo"
                  fill
                  sizes="(min-width: 1024px) 30vw, 62vw"
                  className="md-zoom object-cover"
                />
              </div>
            </div>
            <div className="absolute right-0 bottom-0 w-[46%] aspect-[4/5]">
              <div className="absolute -inset-2.5 rounded-[50%] pointer-events-none" style={{ border: `1.5px solid rgba(31,76,79,0.4)` }} aria-hidden="true" />
              <div className="md-r-ovalo relative h-full w-full" style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}>
                <Image
                  src={`${IMG}/sillon.webp`}
                  alt="El sillón dental turquesa de MAO Dental con su equipo"
                  fill
                  sizes="(min-width: 1024px) 22vw, 46vw"
                  className="md-zoom object-cover"
                />
              </div>
            </div>
            <div className="absolute right-[6%] top-0 w-[30%] aspect-square">
              <div className="absolute -inset-1.5 rounded-full pointer-events-none" style={{ border: `1.5px solid rgba(184,145,74,0.55)` }} aria-hidden="true" />
              <div className="md-r-ovalo relative h-full w-full" style={{ clipPath: 'circle(49.5% at 50% 50%)' }}>
                <Image
                  src={`${IMG}/profesional.webp`}
                  alt="Una profesional de MAO Dental trabajando con lupas bajo la lámpara"
                  fill
                  sizes="(min-width: 1024px) 14vw, 30vw"
                  className="md-zoom object-cover"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <Rotulo>La clínica</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,6.4vw,4rem)]`}
                style={{ color: C.tinta }}
              >
                Un lugar tranquilo,{' '}
                <em className="font-normal" style={{ color: C.petroleo }}>pensado para ti.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                Detrás del vidrio esmerilado de Pedro Montt hay una
                clínica luminosa y cuidada, donde el sillón turquesa y
                el trato amable le bajan el pulso a la visita.
              </p>
            </Reveal>
            <Reveal delay={190}>
              <ul className="mt-7 space-y-3">
                {RASGOS.map((r) => (
                  <li key={r} className="flex items-center gap-3 text-base md:text-lg font-semibold" style={{ color: C.tinta }}>
                    <PuntoO />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={260}>
              <figure
                className="mt-8 max-w-md rounded-2xl p-5 md:p-6"
                style={{ backgroundColor: C.crema, border: `1px solid ${C.lineL}` }}
              >
                <blockquote className={`${display.className} text-lg md:text-xl italic leading-snug`} style={{ color: C.petroleo }}>
                  “Excelente atencion tanto niños y adulto!!! Lo mejor un
                  muy buen ambiente y limpieza!!!”
                </blockquote>
                <figcaption className="mt-3 text-[11px] font-bold tracking-[0.14em]" style={{ color: C.mutL }}>
                  {REVIEW_NINOS.author}{' '}
                  <span className="uppercase tracking-[0.18em]">· Opinión en Google</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · De cerca: la ortodoncia en imágenes ── */}
      <section id="detalles" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.petroleo }}>
        <div
          className="absolute -left-36 -bottom-40 w-[30rem] h-[18rem] pointer-events-none"
          style={{ border: `1px solid rgba(246,242,234,0.14)`, borderRadius: '50%', transform: 'rotate(14deg)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-end mb-10 md:mb-14">
            <Reveal>
              <Rotulo color={C.turquesaSuave}>De cerca</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,6.4vw,4rem)]`}
                style={{ color: C.crema }}
              >
                La ortodoncia,{' '}
                <em className="font-normal" style={{ color: C.arena }}>en colores.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-md text-base md:text-lg leading-relaxed lg:justify-self-end" style={{ color: C.mutD }}>
                La caja de ligas de colores, el modelo con su aparato y
                el instrumental en su lugar: en MAO el detalle se ve
                antes de sentarse.
              </p>
            </Reveal>
          </div>

          {/* Mosaico: una forma distinta por foto */}
          <div className="grid grid-cols-2 lg:grid-cols-[1.25fr_0.85fr_0.9fr] gap-4 md:gap-5 items-start">
            <figure className="col-span-2 lg:row-span-2">
              <div className="md-r-lat relative aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[540px]" style={{ clipPath: 'inset(0 0 0 0 round 26px)' }}>
                <Image
                  src={`${IMG}/ligas-ortodoncia.webp`}
                  alt="La caja de ligas de ortodoncia de muchos colores de MAO Dental"
                  fill
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="md-zoom object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD }}>
                Las ligas, en todos los colores
              </figcaption>
            </figure>
            <figure>
              <div className="md-r-arco relative aspect-[4/5]" style={{ clipPath: 'inset(0 0 0 0 round 90px 90px 16px 16px)' }}>
                <Image
                  src={`${IMG}/modelo-ortodoncia.webp`}
                  alt="Un modelo de yeso con aparato de ortodoncia metálico"
                  fill
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="md-zoom object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD }}>
                El modelo de trabajo
              </figcaption>
            </figure>
            <figure>
              <div className="md-r-ovalo relative aspect-[4/5]" style={{ clipPath: 'ellipse(50% 50% at 50% 50%)' }}>
                <Image
                  src={`${IMG}/sillon-instrumental.webp`}
                  alt="Pinzas de ortodoncia sobre su soporte, con el sillón turquesa al fondo"
                  fill
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  className="md-zoom object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em] text-right lg:text-left" style={{ color: C.mutD }}>
                El instrumental, en su lugar
              </figcaption>
            </figure>
            <figure className="col-span-2 lg:col-span-1 lg:col-start-3 lg:row-start-2 lg:self-end">
              <div className="md-r-sub relative aspect-[8/3] lg:aspect-[16/9]" style={{ clipPath: 'inset(0 0 0 0 round 20px)' }}>
                <Image
                  src={`${IMG}/logo-portada.webp`}
                  alt="El logo de MAO Odontología Familiar sobre una atención en la clínica"
                  fill
                  sizes="(min-width: 1024px) 22vw, 92vw"
                  className="md-zoom object-cover"
                />
              </div>
              <figcaption className="mt-3 text-[10px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutD }}>
                La marca de la casa
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ── Separador: el arco de sonrisa ── */}
      <div className="flex justify-center py-9 md:py-11" style={{ backgroundColor: C.crema }} aria-hidden="true">
        <SonrisaSvg className="h-[22px] w-[110px] md:h-[26px] md:w-[140px]" color={C.laton} w={2.6} />
      </div>

      {/* ── 4 · Opiniones: 5,0 en Google ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16">
          <div>
            <Reveal>
              <Rotulo>Opiniones en Google</Rotulo>
              {/* El 5,0 dentro del óvalo de la marca */}
              <div className="relative inline-flex items-center justify-center mt-2 mb-6">
                <div
                  className="absolute -inset-x-7 -inset-y-3.5 pointer-events-none"
                  style={{ border: `1.5px solid ${C.petroleo}`, borderRadius: '50%', transform: 'rotate(-4deg)' }}
                  aria-hidden="true"
                />
                <p
                  className={`${display.className} font-medium leading-none text-[clamp(4.4rem,13vw,7.5rem)]`}
                  style={{ color: C.petroleo }}
                >
                  {BIZ.rating}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.ratingValue} color={C.laton} size={17} />
                <p className="text-sm font-semibold" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones
                </p>
              </div>
              <p className="mt-5 max-w-sm text-base leading-relaxed" style={{ color: C.mutL }}>
                Nueve personas han dejado su opinión en la ficha de
                Google de MAO Dental y todas la evalúan con la nota
                máxima.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="md-link mt-5 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.petroleo, textDecorationColor: 'rgba(31,76,79,0.35)' }}
              >
                Ver la ficha en Google
                <span aria-hidden="true">→</span>
              </a>
            </Reveal>
          </div>

          <div className="flex flex-col gap-5 md:gap-6">
            <Reveal>
              <figure
                className="relative rounded-[26px] p-6 md:p-8"
                style={{ backgroundColor: C.petroleo }}
              >
                <OvaloSvg className="absolute top-5 right-6 w-[26px] h-[16px]" color="rgba(246,242,234,0.35)" w={1.4} />
                <blockquote className={`${display.className} text-[clamp(1.5rem,4.4vw,2.1rem)] italic leading-[1.18]`} style={{ color: C.crema }}>
                  “{REVIEWS[0].text}”
                </blockquote>
                <figcaption className="mt-4 text-[11px] font-bold tracking-[0.14em]" style={{ color: C.turquesaSuave }}>
                  {REVIEWS[0].author}{' '}
                  <span className="uppercase tracking-[0.18em]">· Opinión en Google</span>
                </figcaption>
              </figure>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
              {REVIEWS.slice(1).map((r, i) => (
                <Reveal key={r.author} delay={110 + i * 110}>
                  <figure
                    className="h-full p-5 md:p-6 rounded-2xl"
                    style={
                      i === 0
                        ? { border: `1.5px solid ${C.petroleo}`, backgroundColor: 'transparent' }
                        : { backgroundColor: C.arena }
                    }
                  >
                    <blockquote className="text-[15px] leading-relaxed font-medium" style={{ color: C.tinta }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-3 text-[10px] font-bold tracking-[0.14em]" style={{ color: C.mutL }}>
                      {r.author}{' '}
                      <span className="uppercase tracking-[0.18em]">· Opinión en Google</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Visítanos: horario y cómo llegar ── */}
      <section id="visita" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.arena }}>
        {/* La O en el fondo del bloque de contacto */}
        <div
          className="absolute -right-40 -top-28 w-[34rem] h-[19rem] pointer-events-none"
          style={{ border: `1px solid rgba(31,76,79,0.18)`, borderRadius: '50%', transform: 'rotate(-10deg)' }}
          aria-hidden="true"
        />
        <div
          className="absolute -right-24 -top-12 w-[24rem] h-[13rem] pointer-events-none"
          style={{ border: `1px solid rgba(51,166,176,0.3)`, borderRadius: '50%', transform: 'rotate(-10deg)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo>Horario y cómo llegar</Rotulo>
              <h2
                className={`${display.className} font-medium leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,6.4vw,3.9rem)]`}
                style={{ color: C.tinta }}
              >
                Pedro Montt 774,{' '}
                <em className="font-normal" style={{ color: C.petroleo }}>Villarrica.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <ul className="mt-7 space-y-2.5">
                {HORARIO.map((h) => (
                  <li
                    key={h.dias}
                    className="flex items-center justify-between gap-4 max-w-md border-b pb-2.5 text-base"
                    style={{ borderColor: 'rgba(22,40,42,0.18)' }}
                  >
                    <span className="flex items-center gap-3 font-semibold" style={{ color: C.tinta }}>
                      <PuntoO color={C.petroleo} />
                      {h.dias}
                    </span>
                    <span className="font-bold tabular-nums" style={{ color: C.petroleo }}>{h.horas}</span>
                  </li>
                ))}
              </ul>
              <address className="not-italic mt-6 text-base leading-relaxed" style={{ color: C.mutL }}>
                {BIZ.address}, {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="md-link font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.petroleo, textDecorationColor: 'rgba(31,76,79,0.35)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-7 flex flex-wrap gap-3">
                <BtnWa>Agenda por WhatsApp</BtnWa>
                <BtnWa href={MAPS_URL} tone="linea">Cómo llegar</BtnWa>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="relative pb-10">
              <div className="rounded-[26px]" style={{ boxShadow: '0 22px 50px rgba(22,40,42,0.18)' }}>
                <div
                  className="md-r-lat relative w-full aspect-[4/3] min-h-[300px]"
                  style={{ clipPath: 'inset(0 0 0 0 round 26px)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
              <div
                className="absolute bottom-0 left-2 md:-left-4 w-[42%] max-w-[190px] rounded-xl overflow-hidden"
                style={{ transform: 'rotate(-4deg)', border: `4px solid ${C.crema}`, boxShadow: '0 14px 34px rgba(22,40,42,0.24)' }}
              >
                <Image
                  src={`${IMG}/tarjeta.webp`}
                  alt="La tarjeta de presentación de MAO Odontología Familiar en su soporte de madera y latón"
                  width={800}
                  height={1200}
                  sizes="190px"
                  className="block w-full h-auto"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre: agenda tu hora ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.petroleoOsc }}>
        {/* Óvalos de la marca en el fondo del cierre */}
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[46rem] h-[26rem] pointer-events-none"
          style={{ border: `1px solid rgba(246,242,234,0.13)`, borderRadius: '50%', transform: 'translate(-50%,-50%) rotate(-8deg)' }}
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[19rem] pointer-events-none"
          style={{ border: `1px solid rgba(51,166,176,0.28)`, borderRadius: '50%', transform: 'translate(-50%,-50%) rotate(-8deg)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Rotulo color={C.turquesaSuave}>Agenda tu hora</Rotulo>
            </div>
            <h2
              className={`${display.className} font-medium leading-[1.06] tracking-[-0.01em] text-[clamp(2.5rem,7vw,4.6rem)]`}
              style={{ color: C.crema }}
            >
              Tu próxima visita al dentista,{' '}
              <em className="font-normal" style={{ color: C.turquesaSuave }}>sin apuro.</em>
            </h2>
            <SonrisaSvg className="mx-auto mt-4 h-[26px] w-[130px] md:h-[32px] md:w-[160px]" color={C.turquesa} w={3} />
            <p className="mt-6 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutD }}>
              Escríbenos por WhatsApp y coordinamos la hora para ti o
              para tu familia.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <BtnWa tone="crema">Agenda por WhatsApp</BtnWa>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="md-link inline-flex items-center px-4 py-3 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.crema, textDecorationColor: 'rgba(246,242,234,0.4)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto: la marca tipográfica ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <p className={`${display.className} font-medium text-2xl md:text-3xl tracking-[0.04em]`}>
                MAO <span className="font-light">Dental</span>
              </p>
              <SonrisaSvg className="mt-1 h-[14px] w-[72px]" color={C.turquesaSuave} w={3.4} />
              <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.28em]" style={{ color: 'rgba(246,242,234,0.62)' }}>
                {BIZ.lema} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,242,234,0.82)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(246,242,234,0.82)' }}
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(246,242,234,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,242,234,0.58)' }}>
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
                style={{ color: C.turquesaSuave }}
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
