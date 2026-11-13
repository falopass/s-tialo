import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_ACADEMIA, MAPS_URL, MAPS_EMBED, IMG } from './content'

// Gloock para la voz de salón con carácter; Jost para el texto corrido.
const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// De sus piezas negras y doradas y de sus trabajos de color: crema de
// mantel, negro tinta, oro fino, carmín de CTA y rubio ceniza.
const C = {
  crema: '#F7F0EA',
  tinta: '#151013',
  oro: '#B8913F',
  carmin: '#B0173E',
  rubio: '#D9CDBE',
  mutC: 'rgba(21,16,19,0.72)',
  mutD: 'rgba(247,240,234,0.76)',
  lineC: 'rgba(21,16,19,0.16)',
  lineD: 'rgba(247,240,234,0.18)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'jesica-munoz-peluqueria-puerto-montt',
  title: 'Jesica Peluquería · Centro de estética en Puerto Montt',
  description:
    'Centro de estética solo para mujeres en Daitao 470, Puerto Montt: color, mechas, tinturas, alisado, peinados y maquillaje. 4,2 en Google. Agenda tu hora por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Color', href: '#color' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/* ── Motivo: la onda de cabello ──────────────────────────────── */

/** Línea ondulada horizontal suave (un mechón visto de lado). */
function ondaPath(w: number, y: number, amp = 6, step = 52): string {
  let d = `M0 ${y}`
  let dir = -1
  for (let x = 0; x < w; x += step) {
    d += ` q ${step / 2} ${amp * dir} ${step} 0`
    dir = -dir
  }
  return d
}

/** Haz de líneas paralelas onduladas, como un mechón peinado. */
function Ondas({
  color,
  n = 3,
  h = 30,
  className = '',
}: {
  color: string
  n?: number
  h?: number
  className?: string
}) {
  const w = 1440
  const lines: React.ReactNode[] = []
  for (let i = 0; i < n; i++) {
    const y = 5 + (i * (h - 10)) / Math.max(1, n - 1)
    lines.push(
      <path
        key={i}
        d={ondaPath(w, y)}
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />,
    )
  }
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {lines}
    </svg>
  )
}

/** Ondulado vertical dentro de un mechón (de arriba hacia abajo). */
function mechaPath(cx: number, y0: number, y1: number, amp = 6): string {
  const seg = 34
  let d = `M${cx} ${y0}`
  let y = y0
  let dir = 1
  while (y + seg <= y1 - 6) {
    d += ` q ${amp * dir} ${seg / 2} 0 ${seg}`
    dir = -dir
    y += seg
  }
  return d
}

/**
 * Un mechón de la carta de color: muestra alargada con ondas dibujadas
 * dentro y un pin dorado arriba, como las muestras que cuelgan en el
 * salón. `fill` es el tono del cabello, `wave` el trazo de las ondas.
 */
function Mechon({
  fill,
  wave,
  edge,
  h = 190,
  className = '',
}: {
  fill: string
  wave: string
  edge?: string
  h?: number
  className?: string
}) {
  const H = h + 24
  return (
    <svg viewBox={`0 0 52 ${H}`} className={className} aria-hidden="true">
      {/* el pin que sostiene la muestra */}
      <circle cx="26" cy="9" r="6.5" fill={C.oro} />
      <circle cx="26" cy="9" r="2.3" fill={C.tinta} />
      {/* la muestra */}
      <rect
        x="7"
        y="16"
        width="38"
        height={h}
        rx="19"
        fill={fill}
        stroke={edge ?? 'none'}
        strokeWidth={edge ? 1.2 : 0}
      />
      {[18, 26, 34].map((cx) => (
        <path
          key={cx}
          d={mechaPath(cx, 30, h + 8)}
          stroke={wave}
          strokeWidth="1.7"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />
      ))}
    </svg>
  )
}

/** Muestra chica de la carta de color (viñeta de los servicios). */
function Chip({ fill, wave, edge }: { fill: string; wave: string; edge?: string }) {
  return (
    <svg viewBox="0 0 34 34" className="w-[34px] h-[34px] shrink-0" aria-hidden="true">
      <rect
        x="2"
        y="2"
        width="30"
        height="30"
        rx="9"
        fill={fill}
        stroke={edge ?? 'none'}
        strokeWidth={edge ? 1.2 : 0}
      />
      {[11, 17, 23].map((cx) => (
        <path
          key={cx}
          d={mechaPath(cx, 7, 29, 3.4)}
          stroke={wave}
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.9"
        />
      ))}
    </svg>
  )
}

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
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em]"
      style={{ color }}
    >
      <span className="block h-px w-8 shrink-0" style={{ backgroundColor: lineColor }} aria-hidden="true" />
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
  tone: 'carmin' | 'crema' | 'lineaC' | 'lineaT'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'carmin'
      ? { backgroundColor: C.carmin, color: C.crema }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.tinta }
        : tone === 'lineaC'
          ? { border: `1.5px solid rgba(247,240,234,0.55)`, color: C.crema }
          : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="jm-btn inline-flex items-center justify-center px-6 py-3 text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

const TONOS = [
  {
    tono: 'Rojo',
    servicio: 'Tintura y color',
    src: `${IMG}/rojo.webp`,
    alt: 'Cabello largo teñido rojo intenso, liso, trabajo del salón',
    muestra: C.carmin,
    textoMuestra: C.crema,
  },
  {
    tono: 'Rubio',
    servicio: 'Mechas e iluminación',
    src: `${IMG}/rubio.webp`,
    alt: 'Cabello largo con iluminación rubia ceniza, liso, trabajo del salón',
    muestra: C.rubio,
    textoMuestra: C.tinta,
  },
  {
    tono: 'Negro',
    servicio: 'Alisado',
    src: `${IMG}/negro.webp`,
    alt: 'Cabello negro largo, liso y brillante tras un alisado',
    muestra: C.tinta,
    textoMuestra: C.crema,
  },
]

const SERVICIOS = [
  {
    n: '01',
    chip: { fill: C.rubio, wave: '#8F7B5E' },
    name: 'Color y mechas',
    desc: 'Mechas e iluminaciones que levantan tu tono natural, con el cuidado que el color pide.',
  },
  {
    n: '02',
    chip: { fill: C.carmin, wave: 'rgba(247,240,234,0.7)' },
    name: 'Tinturas',
    desc: 'Tintura completa y cambios de tono, trabajados de la raíz a las puntas.',
  },
  {
    n: '03',
    chip: { fill: C.tinta, wave: 'rgba(247,240,234,0.55)', edge: 'rgba(247,240,234,0.35)' },
    name: 'Alisado',
    desc: 'Liso pulido y manejable, cuidando tu cabello en cada paso del proceso.',
  },
  {
    n: '04',
    chip: { fill: C.oro, wave: 'rgba(21,16,19,0.55)' },
    name: 'Peinados y maquillaje',
    desc: 'Para matrimonios, fiestas y esas ocasiones que piden algo especial.',
  },
  {
    n: '05',
    chip: { fill: C.crema, wave: 'rgba(21,16,19,0.5)', edge: 'rgba(21,16,19,0.3)' },
    name: 'Gift card',
    desc: 'Una hora en el salón para regalar: consulta por la gift card al agendar.',
  },
]

const OPINIONES = [
  {
    name: 'Yoselin Nicole',
    text: 'Excelente atención, se destaca amabilidad al ser atendida, y mi cabello espectacular me lo dejaron. Lo recomiendo a ojos cerrados este lugar.',
  },
  {
    name: 'Natalia Seron',
    text: 'Muy buena atención, muy profesionales, un ambiente muy agradable, siempre hay una atención extra que se agradece. Me encanta ir siempre.',
  },
]

export default function JesicaPeluqueriaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* ── «Cae el mechón»: tres muestras de la carta de color caen
           desde arriba con un leve balanceo, como si las colgaran
           recién en el salón. */
        @keyframes jm-cae {
          0% { transform: translateY(-115%) rotate(7deg) }
          55% { transform: translateY(3.5%) rotate(-2.6deg) }
          78% { transform: translateY(-1%) rotate(1.2deg) }
          100% { transform: translateY(0) rotate(0) }
        }
        .jm-cae {
          transform-origin: 50% 0;
          animation: jm-cae 1.05s cubic-bezier(.32,.72,.35,1) both;
        }

        /* El titular se «peina»: franjas verticales de tinta se
           retraen hacia abajo, una tras otra, y el nombre aparece
           como queda el pelo después del cepillo. */
        @keyframes jm-peina { from { transform: scaleY(1) } to { transform: scaleY(0) } }
        .jm-peina span {
          flex: 1 1 0%;
          transform-origin: bottom;
          background-color: ${C.tinta};
          animation: jm-peina .55s cubic-bezier(.55,.06,.3,1) both;
        }

        @keyframes jm-sube {
          from { opacity: 0; transform: translateY(16px) }
          to { opacity: 1; transform: none }
        }
        .jm-sube { animation: jm-sube .85s cubic-bezier(.22,.68,.26,1) both }

        /* Carta de color: cada muestra se desliza con el scroll hasta
           tocar el borde de su foto. */
        @supports (animation-timeline: view()) {
          .jm-muestra-r {
            animation: jm-muestra-r linear both;
            animation-timeline: view();
            animation-range: entry 8% entry 72%;
          }
          @keyframes jm-muestra-r {
            from { transform: translateX(44px); opacity: .35 }
            to { transform: translateX(0); opacity: 1 }
          }
          .jm-muestra-l {
            animation: jm-muestra-l linear both;
            animation-timeline: view();
            animation-range: entry 8% entry 72%;
          }
          @keyframes jm-muestra-l {
            from { transform: translateX(-44px); opacity: .35 }
            to { transform: translateX(0); opacity: 1 }
          }
        }

        .jm-btn { transition: transform .18s ease, filter .18s ease }
        .jm-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .jm-btn:active { transform: scale(.97) }
        .jm-btn:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .jm-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .jm-serv { transition: background-color .25s ease }
        .jm-serv:hover { background-color: rgba(247,240,234,0.05) }

        @media (prefers-reduced-motion: reduce) {
          .jm-cae, .jm-sube { animation: none !important }
          .jm-peina { display: none !important }
          .jm-muestra-r, .jm-muestra-l { animation: none !important }
        }
      `}</style>

      <div className="jm-page">
        {/* nav sobre la foto oscura del salón */}
        <div className="h-0" style={{ backgroundColor: C.tinta }}>
          <BlitzNav
            name={<span className="tracking-[0.04em]">{BIZ.short}</span>}
            links={NAV_LINKS}
            waLink={WA_LINK}
            fontClass={display.className}
            ctaLabel="Agendar"
            theme={{
              over: 'dark',
              bar: 'rgba(247,240,234,0.94)',
              ink: C.tinta,
              line: C.lineC,
              btnBg: C.carmin,
              btnInk: C.crema,
            }}
          />
        </div>

        {/* ── 1 · Hero: el salón y la carta de color que cae ── */}
        <section
          id="inicio"
          className="relative min-h-svh flex flex-col justify-end overflow-hidden"
          style={{ backgroundColor: C.tinta }}
        >
          <Image
            src={`${IMG}/hero.webp`}
            alt="El salón de Jesica Peluquería por dentro: sillones, lavacabezas y espejos con clientas atendiéndose"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: '50% 30%' }}
          />
          {/* velo: lee el nav y da aire a la foto; abajo manda el panel tinta */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(21,16,19,0.55) 0%, rgba(21,16,19,0.08) 34%, rgba(21,16,19,0.32) 68%, rgba(21,16,19,0.78) 100%)',
            }}
            aria-hidden="true"
          />

          {/* la carta de color cae del cielo y queda colgada */}
          <div className="absolute inset-x-0 top-[68px] md:top-[84px] z-20 pointer-events-none">
            <div className="mx-auto max-w-6xl px-5 md:px-8 flex items-start justify-end gap-4 md:gap-6 pr-7 md:pr-12">
              <div className="jm-cae" style={{ animationDelay: '0.2s' }}>
                <Mechon fill={C.carmin} wave="rgba(247,240,234,0.55)" h={150} className="h-[174px] md:h-[236px] w-auto" />
              </div>
              <div className="jm-cae" style={{ animationDelay: '0.42s' }}>
                <Mechon fill={C.rubio} wave="#8F7B5E" h={196} className="h-[220px] md:h-[292px] w-auto" edge="rgba(21,16,19,0.18)" />
              </div>
              <div className="jm-cae" style={{ animationDelay: '0.64s' }}>
                <Mechon
                  fill={C.tinta}
                  wave="rgba(247,240,234,0.5)"
                  edge="rgba(247,240,234,0.3)"
                  h={128}
                  className="h-[152px] md:h-[196px] w-auto"
                />
              </div>
            </div>
          </div>

          {/* panel tinta: el titular se peina detrás de las franjas */}
          <div className="relative z-10 w-full lg:max-w-[46rem]" style={{ backgroundColor: C.tinta }}>
            <div className="h-[3px] w-full" style={{ backgroundColor: C.oro }} aria-hidden="true" />
            <div className="px-5 md:px-10 pt-5 md:pt-8 pb-5 md:pb-6">
              <div className="jm-sube" style={{ animationDelay: '0.75s' }}>
                <Rotulo color={C.oro} lineColor="rgba(184,145,63,0.55)">
                  Daitao 470 · Puerto Montt
                </Rotulo>
              </div>
              <div className="relative mt-4 w-fit max-w-full">
                <h1
                  className={`${display.className} leading-[1.02] tracking-[0.01em] text-[clamp(2.35rem,9.2vw,4.5rem)]`}
                  style={{ color: C.crema }}
                >
                  Color, alisado
                  <br />
                  y peinados{' '}
                  <span style={{ color: C.oro }}>para ti.</span>
                </h1>
                <div className="jm-peina absolute inset-0 flex" aria-hidden="true">
                  {[0.9, 1.0, 0.94, 1.12, 1.02, 1.18].map((d, i) => (
                    <span key={i} style={{ animationDelay: `${d}s` }} />
                  ))}
                </div>
              </div>
              <p
                className="jm-sube mt-3 max-w-md text-base md:text-lg leading-relaxed font-medium"
                style={{ color: 'rgba(247,240,234,0.85)', animationDelay: '1.4s' }}
              >
                {BIZ.tagline} en {BIZ.address}, {BIZ.city}. Agenda tu
                hora por WhatsApp.
              </p>
              <div className="jm-sube mt-5 flex flex-wrap gap-3" style={{ animationDelay: '1.55s' }}>
                <Btn href={WA_LINK} tone="carmin">
                  Agenda por WhatsApp
                </Btn>
                <Btn href="#color" tone="lineaC" external={false}>
                  Ver la carta de color
                </Btn>
              </div>
              <div
                className="jm-sube mt-4 pt-3 border-t flex flex-wrap gap-x-6 gap-y-1 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ borderColor: C.lineD, color: 'rgba(247,240,234,0.68)', animationDelay: '1.7s' }}
              >
                <span style={{ color: C.oro }}>{BIZ.rating} en Google · {BIZ.reviews} opiniones</span>
                <span>{BIZ.instagramUser}</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · La carta de color: tres tonos, tres fotos reales ── */}
        <section id="color" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.carmin} lineColor="rgba(176,23,62,0.45)">
                Trabajo del salón
              </Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-4 mt-4 mb-12 md:mb-16">
                <h2
                  className={`${display.className} leading-[1.03] text-[clamp(2.1rem,6.4vw,4rem)]`}
                  style={{ color: C.tinta }}
                >
                  La carta de color
                </h2>
                <p className="text-sm md:text-base max-w-xs leading-relaxed" style={{ color: C.mutC }}>
                  Tres tonos que salen de esta silla cada semana. Cada foto
                  es un trabajo real del salón.
                </p>
              </div>
            </Reveal>

            <div className="flex flex-col gap-14 lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-0 items-start">
              {/* ROJO: la foto alta manda a la izquierda */}
              <Reveal className="w-[74%] lg:w-full lg:col-span-5 lg:col-start-1">
                <figure>
                  <div className="flex items-stretch">
                    <div
                      className="relative flex-1 aspect-[3/4] overflow-hidden"
                      style={{ boxShadow: '0 18px 40px rgba(21,16,19,0.16)' }}
                    >
                      <Image
                        src={TONOS[0].src}
                        alt={TONOS[0].alt}
                        fill
                        sizes="(min-width: 1024px) 36vw, 74vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="jm-muestra-r w-[18px] md:w-[22px] shrink-0 flex items-end justify-center pb-2"
                      style={{ backgroundColor: TONOS[0].muestra }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl]"
                        style={{ color: TONOS[0].textoMuestra }}
                      >
                        {TONOS[0].tono}
                      </span>
                    </div>
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.tinta }}>
                      {TONOS[0].servicio}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutC }}>
                      N° 01
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              {/* RUBIO: a la derecha y un peldaño más abajo */}
              <Reveal
                delay={120}
                className="w-[64%] ml-auto lg:w-full lg:col-span-4 lg:col-start-8 lg:mt-24"
              >
                <figure>
                  <div className="flex items-stretch">
                    <div
                      className="jm-muestra-l w-[18px] md:w-[22px] shrink-0 flex items-end justify-center pb-2"
                      style={{ backgroundColor: TONOS[1].muestra, border: `1px solid rgba(21,16,19,0.22)` }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl]"
                        style={{ color: TONOS[1].textoMuestra }}
                      >
                        {TONOS[1].tono}
                      </span>
                    </div>
                    <div
                      className="relative flex-1 aspect-[3/4] overflow-hidden"
                      style={{ boxShadow: '0 18px 40px rgba(21,16,19,0.16)' }}
                    >
                      <Image
                        src={TONOS[1].src}
                        alt={TONOS[1].alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 64vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.tinta }}>
                      {TONOS[1].servicio}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutC }}>
                      N° 02
                    </span>
                  </figcaption>
                </figure>
              </Reveal>

              {/* NEGRO: la muestra chica, casi un sello entre las dos */}
              <Reveal
                delay={200}
                className="w-[46%] ml-[12%] lg:w-full lg:col-span-3 lg:col-start-5 lg:-mt-20"
              >
                <figure>
                  <div className="flex items-stretch">
                    <div
                      className="relative flex-1 aspect-square overflow-hidden"
                      style={{
                        boxShadow: '0 18px 40px rgba(21,16,19,0.16)',
                        border: `1px solid ${C.lineC}`,
                      }}
                    >
                      <Image
                        src={TONOS[2].src}
                        alt={TONOS[2].alt}
                        fill
                        sizes="(min-width: 1024px) 22vw, 46vw"
                        className="object-cover"
                      />
                    </div>
                    <div
                      className="jm-muestra-r w-[18px] md:w-[22px] shrink-0 flex items-end justify-center pb-2"
                      style={{ backgroundColor: TONOS[2].muestra }}
                    >
                      <span
                        className="text-[9px] font-bold uppercase tracking-[0.3em] [writing-mode:vertical-rl]"
                        style={{ color: TONOS[2].textoMuestra }}
                      >
                        {TONOS[2].tono}
                      </span>
                    </div>
                  </div>
                  <figcaption className="mt-3 flex items-baseline justify-between gap-3">
                    <span className={`${display.className} text-xl md:text-2xl`} style={{ color: C.tinta }}>
                      {TONOS[2].servicio}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutC }}>
                      N° 03
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3 · Servicios: la lista del salón ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.oro} lineColor="rgba(184,145,63,0.55)">
                Servicios
              </Rotulo>
              <div className="flex flex-wrap items-end justify-between gap-6 mt-4 mb-10 md:mb-14">
                <h2
                  className={`${display.className} leading-[1.03] text-[clamp(2.1rem,6.4vw,4rem)]`}
                  style={{ color: C.crema }}
                >
                  De la silla a la calle,
                  <br />
                  todo para tu pelo
                </h2>
                <Ondas color="rgba(184,145,63,0.7)" className="w-44 md:w-64 h-7 shrink-0" />
              </div>
            </Reveal>
            <ol className="border-t" style={{ borderColor: C.lineD }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.n} delay={i * 70}>
                  <li
                    className="jm-serv flex items-start gap-4 md:gap-7 py-5 md:py-6 border-b"
                    style={{ borderColor: C.lineD }}
                  >
                    <span
                      className="hidden sm:block w-7 shrink-0 pt-1.5 text-[11px] font-bold tracking-[0.14em]"
                      style={{ color: 'rgba(247,240,234,0.62)' }}
                      aria-hidden="true"
                    >
                      {s.n}
                    </span>
                    <span className="pt-0.5">
                      <Chip {...s.chip} />
                    </span>
                    <div className="min-w-0 flex-1 md:flex md:items-baseline md:gap-8">
                      <h3
                        className={`${display.className} text-xl md:text-2xl md:w-[280px] md:shrink-0`}
                        style={{ color: C.crema }}
                      >
                        {s.name}
                      </h3>
                      <p className="mt-1 md:mt-0 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutD }}>
                        {s.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={200}>
              <p className="mt-7 text-sm md:text-base" style={{ color: C.mutD }}>
                ¿No ves lo que buscas? Pregunta directo por{' '}
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.crema, textDecorationColor: 'rgba(184,145,63,0.6)' }}
                >
                  WhatsApp
                </a>
                .
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · Opiniones: la nota y las palabras de ellas ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10 lg:gap-16 items-start">
              {/* nota en Google */}
              <Reveal>
                <Rotulo color={C.carmin} lineColor="rgba(176,23,62,0.45)">
                  Opiniones en Google
                </Rotulo>
                <p
                  className={`${display.className} mt-4 leading-none text-[clamp(4.4rem,16vw,7rem)]`}
                  style={{ color: C.tinta }}
                >
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.oro} size={19} />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: C.mutC }}>
                  {BIZ.reviews} opiniones
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.carmin, textDecorationColor: 'rgba(176,23,62,0.4)' }}
                >
                  Ver la ficha en Google
                </a>
              </Reveal>

              {/* la opinión que mejor lo dice */}
              <Reveal delay={120}>
                <blockquote>
                  <p
                    className={`${display.className} leading-[1.18] text-[clamp(1.5rem,5.4vw,2.5rem)]`}
                    style={{ color: C.tinta }}
                  >
                    «Buena onda, calidez y excelente atención. Primera peluquera que{' '}
                    <span style={{ color: C.carmin }}>no me duele ni me quema el pelo</span>{' '}
                    en un alisado, preocupada y cariñosa. ¡Me encantó!»
                  </p>
                  <Ondas color="rgba(184,145,63,0.8)" n={2} h={18} className="mt-5 w-40 h-4" />
                  <footer className="mt-3 text-sm font-bold" style={{ color: C.tinta }}>
                    Antonia Covarrubias
                    <span className="font-medium" style={{ color: C.mutC }}>
                      {' '}· opinión en Google
                    </span>
                  </footer>
                </blockquote>
              </Reveal>
            </div>

            {/* las otras dos voces */}
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-12 md:mt-16">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.name} delay={i * 120}>
                  <blockquote
                    className="h-full p-6 md:p-7"
                    style={{ backgroundColor: C.rubio, border: `1px solid ${C.lineC}` }}
                  >
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: C.tinta }}>
                      «{o.text}»
                    </p>
                    <footer className="mt-4 text-sm font-bold" style={{ color: C.tinta }}>
                      {o.name}
                      <span className="font-medium" style={{ color: 'rgba(21,16,19,0.7)' }}>
                        {' '}· opinión en Google
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5 · Academia: una línea, como la prometieron ── */}
        <section aria-label="Academia" className="border-y" style={{ backgroundColor: C.rubio, borderColor: C.lineC }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-7 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
            <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em]" style={{ color: C.tinta }}>
              Centro estética &amp; academia
            </p>
            <p className="text-sm md:text-base" style={{ color: 'rgba(21,16,19,0.78)' }}>
              También formamos:{' '}
              <a
                href={WA_LINK_ACADEMIA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: '#8A0F2C', textDecorationColor: 'rgba(138,15,44,0.45)' }}
              >
                consulta por la academia
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── 6 · Dónde: Daitao 470 ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="min-w-0">
              <Reveal>
                <Rotulo color={C.carmin} lineColor="rgba(176,23,62,0.45)">
                  Cómo llegar
                </Rotulo>
                <h2
                  className={`${display.className} mt-4 leading-[1.05] text-[clamp(2.1rem,6vw,3.8rem)]`}
                  style={{ color: C.tinta }}
                >
                  {BIZ.address},{' '}
                  <span style={{ color: C.carmin }}>{BIZ.city}</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutC }}>
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.region}, Chile
                  <br />
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.tinta, textDecorationColor: 'rgba(176,23,62,0.4)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <p className="mt-5 text-sm md:text-base" style={{ color: C.mutC }}>
                  Agenda tu hora por WhatsApp; también puedes escribir por
                  Instagram.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Btn href={WA_LINK} tone="carmin">
                    Agenda por WhatsApp
                  </Btn>
                  <Btn href={BIZ.instagram} tone="lineaT">
                    Instagram
                  </Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <figure>
                <div
                  className="relative w-full overflow-hidden aspect-[4/3]"
                  style={{ border: `1px solid ${C.lineC}`, boxShadow: '0 18px 40px rgba(21,16,19,0.14)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <figcaption
                  className="mt-3 text-[10px] font-bold uppercase tracking-[0.24em]"
                  style={{ color: C.mutC }}
                >
                  {BIZ.address} · {BIZ.city}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Cierre: tu próxima hora ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.carmin }}>
          <Ondas
            color="rgba(247,240,234,0.3)"
            n={4}
            h={120}
            className="absolute -right-10 -top-6 w-[130%] h-40 rotate-[-4deg] pointer-events-none"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <p
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-4"
                style={{ color: 'rgba(247,240,234,0.85)' }}
              >
                Tu próxima hora
              </p>
              <h2
                className={`${display.className} leading-[1.04] text-[clamp(2.3rem,8vw,4.6rem)]`}
                style={{ color: C.crema }}
              >
                Tu color, cuidado
                <br />
                de raíz a puntas.
              </h2>
              <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(247,240,234,0.88)' }}>
                Escríbenos por WhatsApp y agenda en {BIZ.address}, {BIZ.city}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Btn href={WA_LINK} tone="crema">
                  Agenda por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.tinta, color: C.crema }}>
          <Ondas color="rgba(184,145,63,0.4)" n={2} h={16} className="w-full h-4 block" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <p className={`${display.className} text-xl md:text-2xl`}>{BIZ.short}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(247,240,234,0.68)' }}>
                  {BIZ.tagline} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,240,234,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(247,240,234,0.85)' }}
                >
                  Instagram
                </a>
              </nav>
            </div>
            <div className="border-t mt-4 pt-4" style={{ borderColor: 'rgba(247,240,234,0.14)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,240,234,0.58)' }}>
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
                  style={{ color: C.oro }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>

        <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      </div>
    </div>
  )
}
