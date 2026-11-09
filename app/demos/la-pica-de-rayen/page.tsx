import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, PIZARRA, OPINIONES } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})

// Picada de mercado: greda de la paila, el dorado del pastel,
// rojo pebre, cilantro y mantel crema.
const C = {
  greda: '#3A2418',
  gredaBaja: '#2A1810',
  dorado: '#E2A63B',
  pebre: '#B8322A',
  cilantro: '#4F7A3A',
  crema: '#FAF3E6',
  papel: '#FFFBF2',
  tinta: '#3A2418',
  muted: '#6B5340',
  tiza: '#F3E8CF',
  tizaMuted: 'rgba(250,243,230,0.78)',
  line: 'rgba(58,36,24,0.16)',
  lineClara: 'rgba(250,243,230,0.2)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-pica-de-rayen',
  title: 'La Pica de Rayen · Comida casera en el Mercado We Newenche, Villarrica',
  description:
    'Comida casera dentro del Mercado We Newenche, General Körner 478, Villarrica. 4,7 en Google con 40 opiniones. Pregunta el menú de hoy por WhatsApp.',
  image: '/demos/la-pica-de-rayen/pastel-y-empanadas.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** Repulgue: el borde ondulado de la empanada, como separador de secciones. */
function Repulgue({
  color,
  className = '',
  style,
}: {
  color: string
  className?: string
  style?: CSSProperties
}) {
  // 30 ondas de 13 px sobre un viewBox de 390 de ancho.
  const ondas = Array.from({ length: 30 }, () => 'q6.5-12 13 0').join(' ')
  return (
    <svg
      viewBox="0 0 390 24"
      preserveAspectRatio="none"
      className={`block w-full h-[18px] md:h-6 ${className}`}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      <path d={`M0 24 L0 14 ${ondas} L390 24 Z`} fill={color} />
    </svg>
  )
}

/** Pequeño subrayado de tiza, ondulado como el repulgue. */
function Onda({
  color,
  width = 120,
  className = '',
  style,
}: {
  color: string
  width?: number
  className?: string
  style?: CSSProperties
}) {
  const ondas = Array.from({ length: 16 }, () => 'q4-6 8 0').join(' ')
  return (
    <svg
      viewBox="0 0 128 10"
      preserveAspectRatio="none"
      className={`block h-[10px] ${className}`}
      style={{ width, ...style }}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={`M2 7 ${ondas}`}
        fill="none"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Vapor que sube del pastel: cuatro volutas, dos ciclos y se apagan. */
function Vapor() {
  const volutas = [
    { d: 'M14 74 C8 62 20 56 14 44 C9 34 18 28 14 16', x: 8, delay: '0s' },
    { d: 'M40 80 C34 66 48 60 40 46 C34 36 46 28 40 14', x: 0, delay: '0.55s' },
    { d: 'M66 76 C60 64 72 58 66 44 C61 34 70 27 66 15', x: 0, delay: '1.1s' },
    { d: 'M92 72 C86 60 98 55 92 42 C87 32 96 26 92 13', x: 0, delay: '0.3s' },
  ]
  return (
    <svg
      viewBox="0 0 110 84"
      className="w-24 h-[76px] md:w-32 md:h-[98px]"
      aria-hidden="true"
      focusable="false"
    >
      {volutas.map((v, i) => (
        <path
          key={i}
          className="lp-vapor"
          style={{ animationDelay: v.delay }}
          d={v.d}
          fill="none"
          stroke="rgba(255,252,244,0.95)"
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

/** Rótulo en versalitas espaciadas con una línea fina al costado. */
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
      <span
        className="h-px w-9 shrink-0"
        style={{ backgroundColor: lineColor }}
        aria-hidden="true"
      />
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
  tone: 'pebre' | 'dorado' | 'greda' | 'crema' | 'lineCrema' | 'lineGreda'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'pebre'
      ? { backgroundColor: C.pebre, color: '#FFF9EE' }
      : tone === 'dorado'
        ? { backgroundColor: C.dorado, color: C.greda }
        : tone === 'greda'
          ? { backgroundColor: C.greda, color: C.crema }
          : tone === 'crema'
            ? { backgroundColor: C.crema, color: C.greda }
            : tone === 'lineCrema'
              ? { border: '1.5px solid rgba(250,243,230,0.55)', color: C.crema }
              : { border: `1.5px solid ${C.greda}`, color: C.greda }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="lp-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Cinta adhesiva de las fotos "pegadas" a la pizarra. */
function Cinta() {
  return (
    <span
      className="absolute -top-2 left-1/2 -translate-x-1/2 -rotate-3 w-14 h-5 rounded-[2px]"
      style={{ backgroundColor: 'rgba(250,243,230,0.4)' }}
      aria-hidden="true"
    />
  )
}

function IconoEnsalada() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.cilantro} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 6C11 6 6 13 6 20c0 8 6 14 14 14 4 0 7-1 9-4 3-3 5-7 5-10 0-8-6-14-14-14Z" />
      <path d="M20 10c-1 8-1 14 0 22" />
      <path d="M11 16c4 1 8 1 12-1M11 24c4 1 8 1 12-1" />
    </svg>
  )
}

function IconoSopaipilla() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.dorado} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 18c0-6 6-11 13-11s13 5 13 11c0 3-1 5-3 7 2 1 3 3 3 5 0 3-3 5-6 5H13c-3 0-6-2-6-5 0-2 1-4 3-5-2-2-3-4-3-7Z" />
      <path d="M15 20h.01M20 23h.01M25 20h.01" strokeWidth="3" />
    </svg>
  )
}

function IconoPebre() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.pebre} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 16h24v4c0 7-5 12-12 12S8 27 8 20v-4Z" />
      <path d="M13 16c0-4 3-7 7-7s7 3 7 7" />
      <path d="M14 23c2 2 4 3 6 3s4-1 6-3" />
    </svg>
  )
}

const PALABRAS_H1 = ['Comida', 'casera,', 'de', 'la', 'que', 'llena.']

export default function LaPicaDeRayenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* Sale del horno: el vapor sube y se desvanece, dos ciclos y se apaga. */
        @keyframes lp-vapor {
          0% { opacity: 0; transform: translateY(18px) }
          18% { opacity: .8 }
          55% { opacity: .5 }
          100% { opacity: 0; transform: translateY(-42px) }
        }
        .lp-vapor { opacity: 0; animation: lp-vapor 3.2s ease-in-out 2 both }

        /* El titular entra palabra por palabra. */
        @keyframes lp-palabra {
          from { transform: translateY(112%) }
          to { transform: translateY(0) }
        }
        .lp-palabra {
          display: inline-block;
          animation: lp-palabra 0.85s cubic-bezier(0.22,0.68,0.26,1) both;
          animation-delay: var(--lpd, 0s);
        }

        /* El repulgue bajo el titular se dibuja de izquierda a derecha. */
        @keyframes lp-repulgue {
          from { clip-path: inset(0 100% 0 0) }
          to { clip-path: inset(0 0 0 0) }
        }
        .lp-repulgue { animation: lp-repulgue 1.15s cubic-bezier(0.3,0.7,0.3,1) 1.7s both }

        @keyframes lp-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .lp-sube { animation: lp-sube 0.9s ease-out both; animation-delay: var(--lpd, 0s) }

        @keyframes lp-foto { from { transform: scale(1.07) } to { transform: scale(1) } }
        .lp-foto { animation: lp-foto 1.8s cubic-bezier(0.22,0.61,0.2,1) both }

        /* La pizarra se escribe al hacer scroll: cada plato aparece
           con tiza, de izquierda a derecha. */
        @keyframes lp-tiza { to { clip-path: inset(0 0 0 0) } }
        @supports (animation-timeline: view()) {
          .lp-tiza {
            clip-path: inset(0 100% 0 0);
            animation: lp-tiza linear both;
            animation-timeline: view();
            animation-range: entry 8% entry 62%;
          }
          .lp-tiza-foto {
            opacity: 0;
            transform: translateY(26px);
            animation: lp-tiza-foto ease-out both;
            animation-timeline: view();
            animation-range: entry 5% entry 55%;
          }
          @keyframes lp-tiza-foto { to { opacity: 1; transform: translateY(0) } }
        }

        .lp-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .lp-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .lp-btn:active { transform: translateY(0) scale(0.97) }
        .lp-btn:focus-visible { outline: 3px solid ${C.dorado}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .lp-vapor { animation: none !important; opacity: 0 !important }
          .lp-palabra, .lp-repulgue, .lp-sube, .lp-foto { animation: none !important }
          .lp-tiza { clip-path: none !important; animation: none !important }
          .lp-tiza-foto { opacity: 1 !important; transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        ctaLabel="Menú de hoy"
        theme={{
          over: 'dark',
          bar: 'rgba(250,243,230,0.94)',
          ink: C.greda,
          line: C.line,
          btnBg: C.pebre,
          btnInk: '#FFF9EE',
        }}
      />

      {/* ── 1 · Hero: sale del horno ── */}
      <section id="inicio" className="relative flex flex-col" style={{ backgroundColor: C.crema }}>
        <div className="relative h-[52svh] md:h-[56svh] overflow-hidden" style={{ backgroundColor: C.gredaBaja }}>
          <div className="absolute inset-0 lp-foto">
            <Image
              src={`${IMG}/pastel-y-empanadas.webp`}
              alt="Pastel de choclo en paila de greda y bandeja de empanadas de La Pica de Rayen"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[50%_62%]"
            />
          </div>
          {/* velo suave arriba para el nav y abajo para el encuentro */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(42,24,16,0.34) 0%, rgba(42,24,16,0) 26%, rgba(42,24,16,0) 74%, rgba(42,24,16,0.30) 100%)',
            }}
          />
          {/* vapor sobre el pastel */}
          <div className="absolute left-[6%] bottom-[15%] md:left-[16%] md:bottom-[18%] pointer-events-none">
            <Vapor />
          </div>
          {/* ticket del mercado */}
          <p
            className="lp-sube absolute right-4 bottom-9 md:right-10 md:bottom-12 rotate-[2deg] rounded-[3px] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.2em] shadow-md"
            style={{ backgroundColor: C.papel, color: C.greda, animationDelay: '1.9s' }}
          >
            Todos los días · 9:30 a 20:00
          </p>
          {/* repulgue: el mantel crema muerde la foto */}
          <Repulgue color={C.crema} className="absolute inset-x-0 bottom-0 z-10" />
        </div>

        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-5 pb-10 md:pt-7 md:pb-14">
          <p
            className="lp-sube text-[11px] font-bold uppercase tracking-[0.32em] mb-4"
            style={{ color: C.pebre, animationDelay: '0.2s' }}
          >
            Villarrica · Mercado We Newenche
          </p>
          <h1
            className={`${display.className} font-black leading-[1.0] tracking-[-0.01em] text-[clamp(2.7rem,10.5vw,5.6rem)]`}
            style={{ color: C.greda }}
          >
            {PALABRAS_H1.map((w, i) => (
              <span key={w} className="inline-block overflow-hidden pb-1 -mb-1">
                <span
                  className="lp-palabra"
                  style={
                    {
                      '--lpd': `${0.4 + i * 0.11}s`,
                      color: w === 'llena.' ? C.pebre : undefined,
                      fontStyle: w === 'llena.' ? 'italic' : undefined,
                    } as CSSProperties
                  }
                >
                  {w}
                </span>
                {i < PALABRAS_H1.length - 1 ? ' ' : ''}
              </span>
            ))}
          </h1>
          <Onda color={C.dorado} width={150} className="lp-repulgue mt-1.5" />
          <p
            className="lp-sube mt-5 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: C.muted, animationDelay: '1.25s' }}
          >
            Pastel de choclo, empanadas, cazuela y paila marina, todos
            los días en el Mercado We Newenche.
          </p>
          <div className="lp-sube mt-7 flex flex-wrap items-center gap-3" style={{ animationDelay: '1.4s' }}>
            <Btn href={WA_LINK} tone="pebre">
              Pregunta el menú de hoy por WhatsApp
            </Btn>
          </div>
          <p
            className="lp-sube mt-4 flex items-center gap-2 text-sm font-medium"
            style={{ color: C.muted, animationDelay: '1.55s' }}
          >
            <Stars value={BIZ.ratingValue} color={C.dorado} size={15} />
            <span>
              <strong style={{ color: C.greda }}>{BIZ.rating}</strong> en Google · {BIZ.reviews} opiniones
            </span>
          </p>
        </div>
      </section>

      {/* ── 2 · La pizarra: la carta escrita con tiza ── */}
      <section
        id="pizarra"
        className="scroll-mt-20 relative"
        style={{ backgroundColor: C.greda }}
      >
        <Repulgue color={C.greda} style={{ marginTop: -18, position: 'relative', zIndex: 2 }} />
        {/* pizarrón con marco de madera */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-8 md:pt-10">
          <div
            className="rounded-[26px] px-5 py-9 md:px-10 md:py-14"
            style={{
              backgroundColor: C.gredaBaja,
              border: '6px solid #54371F',
              boxShadow: '0 24px 60px rgba(0,0,0,0.35)',
            }}
          >
            <div className="text-center">
              <div className="flex justify-center">
                <Rotulo color={C.dorado} lineColor="rgba(226,166,59,0.45)">
                  La pizarra
                </Rotulo>
              </div>
              <h2
                className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.3rem,7vw,4.2rem)] mt-4`}
                style={{ color: C.tiza }}
              >
                Lo que sale de{' '}
                <em style={{ color: C.dorado, fontWeight: 500 }}>la olla y del horno.</em>
              </h2>
              <p
                className="mx-auto mt-4 max-w-md text-sm md:text-base leading-relaxed"
                style={{ color: C.tizaMuted }}
              >
                Los platos de la casa, escritos como en la pizarra del
                mercado. Pregunta por el menú de hoy por WhatsApp.
              </p>
            </div>

            <div className="mt-10 md:mt-14 flex flex-col gap-8 md:gap-10 max-w-3xl mx-auto">
              {PIZARRA.map((p, i) => (
                <article
                  key={p.plato}
                  className={`flex items-center gap-4 md:gap-7 ${i % 2 === 1 ? 'flex-row-reverse text-right' : ''}`}
                >
                  <figure className="lp-tiza-foto relative shrink-0 w-[96px] md:w-[132px]">
                    <Cinta />
                    <span
                      className="block overflow-hidden rounded-lg p-1.5"
                      style={{
                        backgroundColor: C.papel,
                        transform: `rotate(${i % 2 === 0 ? -2.4 : 2.4}deg)`,
                        boxShadow: '0 10px 26px rgba(0,0,0,0.4)',
                      }}
                    >
                      <Image
                        src={`${IMG}/${p.foto}.webp`}
                        alt={p.alt}
                        width={p.foto === 'pastel-de-choclo' || p.foto === 'carne-choclo' ? 675 : 900}
                        height={1200}
                        sizes="(min-width: 768px) 132px, 96px"
                        className="block w-full h-[118px] md:h-[164px] object-cover rounded-[4px]"
                      />
                    </span>
                  </figure>
                  <div className="lp-tiza min-w-0 flex-1">
                    <h3
                      className={`${display.className} font-black text-[1.45rem] md:text-[2rem] leading-tight`}
                      style={{ color: C.tiza }}
                    >
                      {p.plato}
                    </h3>
                    <Onda
                      color={C.dorado}
                      width={86}
                      className={`mt-1 ${i % 2 === 1 ? 'ml-auto' : ''}`}
                    />
                    <p
                      className="mt-2 text-sm md:text-base"
                      style={{ color: C.tizaMuted }}
                    >
                      {p.nota}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-10 md:mt-12 text-center">
              <p
                className="text-[11px] font-bold uppercase tracking-[0.28em]"
                style={{ color: 'rgba(250,243,230,0.6)' }}
              >
                como la paila marina que llegó con ensalada, sopaipillas caseras y pebre
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <Btn href={WA_LINK} tone="dorado">
                  Preguntar el menú de hoy
                </Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · Todo llega con pebre y sopaipillas ── */}
      <section className="relative" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.pebre} lineColor="rgba(184,50,42,0.4)">
                  Como contó Elías
                </Rotulo>
                <h2
                  className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)] mt-4`}
                  style={{ color: C.greda }}
                >
                  Y todo llega con{' '}
                  <em style={{ color: C.cilantro, fontWeight: 500 }}>sopaipillas y pebre.</em>
                </h2>
                <p
                  className="mt-5 max-w-md text-base md:text-lg leading-relaxed"
                  style={{ color: C.muted }}
                >
                  En su reseña de Google, Elías contó que junto a la
                  paila marina les sirvieron ensalada, sopaipillas
                  caseras y un pebre exquisito, incluido en el plato.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-7 flex flex-col gap-3">
                  {[
                    { icon: <IconoEnsalada />, t: 'Ensalada fresca', d: 'para acompañar cada plato' },
                    { icon: <IconoSopaipilla />, t: 'Sopaipillas caseras', d: 'de las que se comen recién hechas' },
                    { icon: <IconoPebre />, t: 'Pebre de la casa', d: 'el toque que le falta a cualquier mesa' },
                  ].map((s) => (
                    <li
                      key={s.t}
                      className="flex items-center gap-4 rounded-2xl px-4 py-3"
                      style={{
                        backgroundColor: C.papel,
                        border: `1px solid ${C.line}`,
                        boxShadow: '0 6px 18px rgba(58,36,24,0.07)',
                      }}
                    >
                      <span
                        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: C.crema }}
                      >
                        {s.icon}
                      </span>
                      <span>
                        <span className={`${display.className} block font-black text-lg`} style={{ color: C.greda }}>
                          {s.t}
                        </span>
                        <span className="block text-sm" style={{ color: C.muted }}>
                          {s.d}
                        </span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={100}>
              <figure className="relative">
                <span
                  className="absolute -inset-3 rounded-[26px] -rotate-2"
                  style={{ backgroundColor: '#F0DFB9' }}
                  aria-hidden="true"
                />
                <span className="relative block overflow-hidden rounded-[22px]" style={{ boxShadow: '0 18px 44px rgba(58,36,24,0.2)' }}>
                  <Image
                    src={`${IMG}/empanada-frita.webp`}
                    alt="Empanada frita dorada servida en plato blanco"
                    width={900}
                    height={1200}
                    sizes="(min-width: 1024px) 46vw, 92vw"
                    className="block w-full h-auto max-h-[560px] object-cover object-[50%_45%]"
                  />
                </span>
                <figcaption
                  className={`${display.className} absolute -bottom-4 left-5 rotate-[-2deg] rounded-[3px] px-4 py-2 italic text-base shadow-lg`}
                  style={{ backgroundColor: C.greda, color: C.crema }}
                >
                  de horno y fritas
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Opiniones: lo que dicen en el mercado ── */}
      <section id="opiniones" className="scroll-mt-20 relative" style={{ backgroundColor: C.gredaBaja }}>
        <Repulgue color={C.gredaBaja} style={{ marginTop: -18, position: 'relative', zIndex: 2 }} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pt-10 md:pb-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14">
            <div className="lg:sticky lg:top-24 self-start">
              <Reveal>
                <Rotulo color={C.dorado} lineColor="rgba(226,166,59,0.45)">
                  Opiniones
                </Rotulo>
                <h2
                  className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.2rem,6vw,3.9rem)] mt-4`}
                  style={{ color: C.tiza }}
                >
                  Los que ya se{' '}
                  <em style={{ color: C.dorado, fontWeight: 500 }}>sentaron a la mesa.</em>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <div
                  className="mt-8 inline-flex items-center gap-5 rounded-2xl px-6 py-5"
                  style={{
                    backgroundColor: C.greda,
                    border: `1px solid ${C.lineClara}`,
                  }}
                >
                  <p
                    className={`${display.className} font-black text-6xl leading-none`}
                    style={{ color: C.tiza }}
                  >
                    {BIZ.rating}
                  </p>
                  <div>
                    <Stars value={BIZ.ratingValue} color={C.dorado} size={17} />
                    <p className="mt-1.5 text-sm font-medium" style={{ color: C.tizaMuted }}>
                      {BIZ.reviews} opiniones en Google
                    </p>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                      style={{ color: C.dorado, textDecorationColor: 'rgba(226,166,59,0.4)' }}
                    >
                      Ver la ficha real
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="flex flex-col gap-5">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.nombre} delay={i * 110}>
                  <blockquote
                    className="rounded-2xl p-6 md:p-7"
                    style={{
                      backgroundColor: C.greda,
                      border: `1px solid ${C.lineClara}`,
                      transform: `rotate(${i === 1 ? 0.6 : -0.6}deg)`,
                    }}
                  >
                    <span
                      className={`${display.className} block font-black text-4xl leading-none`}
                      style={{ color: C.dorado }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p
                      className="text-[15px] md:text-base leading-relaxed -mt-2"
                      style={{ color: 'rgba(250,243,230,0.88)' }}
                    >
                      {o.texto}
                    </p>
                    <footer className="mt-4 flex items-center gap-3">
                      <span
                        className={`${display.className} w-9 h-9 rounded-full flex items-center justify-center font-black text-base`}
                        style={{ backgroundColor: C.pebre, color: C.crema }}
                        aria-hidden="true"
                      >
                        {o.nombre[0]}
                      </span>
                      <cite className="not-italic text-sm font-bold" style={{ color: C.tiza }}>
                        {o.nombre}
                        <span className="block text-xs font-medium" style={{ color: 'rgba(250,243,230,0.55)' }}>
                          opinión en Google
                        </span>
                      </cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Dónde: dentro del mercado ── */}
      <section id="donde" className="scroll-mt-20 relative" style={{ backgroundColor: C.crema }}>
        <Repulgue color={C.crema} style={{ marginTop: -18, position: 'relative', zIndex: 2 }} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-16 md:pt-10 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.pebre} lineColor="rgba(184,50,42,0.4)">
                Dónde estamos
              </Rotulo>
              <h2
                className={`${display.className} font-black leading-[1.04] tracking-[-0.01em] text-[clamp(2.2rem,5.5vw,3.8rem)] mt-4`}
                style={{ color: C.greda }}
              >
                Adentro del{' '}
                <em style={{ color: C.pebre, fontWeight: 500 }}>Mercado We Newenche.</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.greda, textDecorationColor: 'rgba(184,50,42,0.45)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div
                className="mt-6 rounded-2xl px-5 py-4 flex items-center gap-4"
                style={{ backgroundColor: '#F0DFB9' }}
              >
                <span
                  className={`${display.className} shrink-0 w-11 h-11 rounded-full flex items-center justify-center font-black`}
                  style={{ backgroundColor: C.greda, color: C.dorado }}
                  aria-hidden="true"
                >
                  h
                </span>
                <p className="text-sm md:text-base font-medium" style={{ color: C.greda }}>
                  <strong>{BIZ.horario}</strong>
                  <span className="block" style={{ color: C.muted }}>
                    atención todos los días de la semana
                  </span>
                </p>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={MAPS_URL} tone="pebre">
                  Cómo llegar
                </Btn>
                <Btn href={WA_LINK} tone="lineGreda">
                  Escribir por WhatsApp
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div
              className="relative w-full overflow-hidden rounded-3xl aspect-[4/3] min-h-[300px]"
              style={{ border: `1px solid ${C.line}`, boxShadow: '0 20px 48px rgba(58,36,24,0.16)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.lugar}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Cierre: la invitación ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pebre }}>
        <Repulgue color={C.pebre} style={{ marginTop: -18, position: 'relative', zIndex: 2 }} />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 pt-8 pb-14 md:pb-16 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.4rem,7vw,4.6rem)]`}
              style={{ color: C.crema }}
            >
              ¿Qué hay <em style={{ fontWeight: 500, color: '#F5C96B' }}>hoy?</em>
            </h2>
            <p className="mt-4 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(250,243,230,0.9)' }}>
              Escríbenos por WhatsApp y te contamos lo que está saliendo
              de la olla y del horno en el Mercado We Newenche.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="crema">
                Preguntar el menú de hoy
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.gredaBaja, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-black text-xl md:text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(250,243,230,0.72)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.lugar}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(250,243,230,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(250,243,230,0.85)' }}
              >
                Google Maps
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(250,243,230,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(250,243,230,0.62)' }}>
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
                style={{ color: C.dorado }}
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
