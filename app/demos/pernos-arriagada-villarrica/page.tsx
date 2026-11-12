import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  HORARIO,
  SERVICIOS,
  MURO,
  LED_ITEMS,
  OPINION,
  WA_LINK,
  WA_REPUESTOS,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el letrero de Cerros de Melilahuen». La página se
 * construye con lo que ya tiene el local: el azul marino de sus tableros
 * pintados, el amarillo de la O hexagonal de PERNOS (aquí la tuerca es el
 * motivo: se enrosca en el titular y corre por el hilo) y el rojo del
 * letrero LED que bajo la lluvia anuncia "tuercas y pernos". Archivo
 * Black es la letra estampada del letrero; Libre Franklin lee; Space
 * Mono rotula como la lista de productos.
 */
const C = {
  noche: '#0B1D33',
  pozo: '#071528',
  tablero: '#12305B',
  tableroBorde: '#1E4378',
  amarillo: '#F5C400',
  amarilloTxt: '#8A6D00',
  led: '#FF4126',
  acero: '#E8E6DF',
  papel: '#F3F1EA',
  tinta: '#141B24',
  mutedL: 'rgba(20,27,36,0.68)',
  mutedD: 'rgba(255,255,255,0.72)',
  lineL: 'rgba(20,27,36,0.16)',
  lineD: 'rgba(255,255,255,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/** Hilo de perno: la textura de la rosca, en claro u oscuro. */
const hilo = (dark: boolean): CSSProperties => ({
  backgroundImage: `repeating-linear-gradient(112deg, ${
    dark ? 'rgba(255,255,255,0.5)' : 'rgba(20,27,36,0.5)'
  } 0 2px, transparent 2px 9px)`,
})

export const metadata: Metadata = demoMetadata({
  slug: 'pernos-arriagada-villarrica',
  title: 'Pernos Arriagada · Tornería y maestranza en Villarrica',
  description:
    'Tornería, fresa, cepillo y soldaduras en Cerros de Melilahuen 3855, Villarrica, más el muro de pernos, tuercas y repuestos. Cotiza tu pieza por WhatsApp.',
  image: `${IMG}/pernos-fabricados.webp`,
})

const NAV_LINKS = [
  { label: 'Lo fabricamos', href: '#fabricamos' },
  { label: 'El muro', href: '#muro' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#donde' },
]

/** La tuerca hexagonal: la O del letrero de Pernos Arriagada. */
function Tuerca({
  color = C.amarillo,
  width = 15,
  className = '',
  style,
}: {
  color?: string
  width?: number
  className?: string
  style?: CSSProperties
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style} aria-hidden="true">
      <polygon
        points="50,7 87,29 87,71 50,93 13,71 13,29"
        fill="none"
        stroke={color}
        strokeWidth={width}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Rótulo de sección: tuerca chica + etiqueta mono + hilo que se dibuja. */
function Rotulo({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <Tuerca className="h-[15px] w-[15px] shrink-0" color={dark ? C.amarillo : C.tablero} width={16} />
      <p
        className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.24em] whitespace-nowrap`}
        style={{ color: dark ? C.amarillo : C.tablero }}
      >
        {children}
      </p>
      <span className="pa-file h-[9px] flex-1" style={hilo(dark)} aria-hidden="true" />
    </div>
  )
}

/** Barra LED: el letrero que corre "tuercas y pernos" en la fachada. */
function BarraLed() {
  const mitad = (
    <span className="flex-none">
      {LED_ITEMS.map((t) => (
        <span key={t}>
          <span className="mx-5">{t}</span>
          <span style={{ color: 'rgba(255,65,38,0.45)' }}>·</span>
        </span>
      ))}
    </span>
  )
  return (
    <div
      className="relative overflow-hidden border-y"
      style={{ backgroundColor: '#05090F', borderColor: 'rgba(255,65,38,0.3)' }}
      aria-hidden="true"
    >
      <div
        className={`${mono.className} pa-led-track flex w-max whitespace-nowrap py-2 text-[12px] md:text-[13px] font-bold uppercase tracking-[0.26em]`}
        style={{ color: C.led, textShadow: '0 0 10px rgba(255,65,38,0.6)' }}
      >
        {mitad}
        {mitad}
      </div>
      {/* Trama de puntos: la matriz del letrero LED. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(5,9,15,0.72) 1.1px, transparent 1.2px)',
          backgroundSize: '4.6px 4.6px',
        }}
      />
    </div>
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
  tone: 'tuerca' | 'tinta' | 'lineClaro' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'tuerca'
      ? { backgroundColor: C.amarillo, color: C.noche }
      : tone === 'tinta'
        ? { backgroundColor: C.noche, color: '#FFFFFF' }
        : tone === 'lineClaro'
          ? { border: '2px solid rgba(255,255,255,0.55)', color: '#FFFFFF' }
          : { border: `2px solid ${C.noche}`, color: C.noche }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="pa-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function PernosArriagadaPage() {
  return (
    <div
      className={`${body.className} pa-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.noche, color: '#FFFFFF' }}
    >
      <style>{`
        .pa-root h1, .pa-root h2, .pa-root h3, .pa-root .pa-disp { font-family: ${display.style.fontFamily}; font-weight: 400; letter-spacing: 0.005em }

        /* Entrada por líneas. */
        @keyframes pa-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .pa-sube { animation: pa-sube 0.8s cubic-bezier(0.2,0.7,0.2,1) both }

        /* La tuerca se enrosca y queda siendo la O de "torno". */
        @keyframes pa-o {
          0% { opacity: 0; transform: translate(-50%,-50%) rotate(-300deg) scale(1.3) }
          55% { opacity: 1 }
          72% { transform: translate(-50%,-50%) rotate(14deg) scale(1) }
          100% { opacity: 1; transform: translate(-50%,-50%) rotate(0deg) scale(1) }
        }
        .pa-o { animation: pa-o 1.15s cubic-bezier(0.3,0.9,0.3,1) 0.8s both }

        /* El hilo se dibuja y la tuerca corre enroscándose por él. */
        @keyframes pa-hilo { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .pa-hilo { transform-origin: left center; animation: pa-hilo 1s ease-out 1s both }
        @keyframes pa-viaja {
          0% { opacity: 0; transform: translate(-196px,-50%) rotate(-560deg) }
          25% { opacity: 1 }
          100% { opacity: 1; transform: translate(0,-50%) rotate(0deg) }
        }
        .pa-tuerca-viajera { animation: pa-viaja 1.7s cubic-bezier(0.5,0.05,0.3,1) 1.25s both }

        /* El LED corre como en la fachada. */
        @keyframes pa-led { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .pa-led-track { animation: pa-led 30s linear infinite }

        /* El hilo divisorio se dibuja al llegar a la sección. */
        .pa-file { transform-origin: left center }
        @supports (animation-timeline: view()) {
          .pa-file { animation: pa-hilo linear both; animation-timeline: view(); animation-range: entry 0% entry 80% }
        }

        .pa-root .grid > * { min-width: 0 }

        .pa-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .pa-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .pa-btn:active { transform: scale(0.97) }
        .pa-btn:focus-visible, .pa-root a:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }

        .pa-item { transition: transform 0.18s ease, color 0.18s ease }
        .pa-item:hover { transform: translateX(5px); color: ${C.amarillo} }

        @media (prefers-reduced-motion: reduce) {
          .pa-sube, .pa-o, .pa-hilo, .pa-tuerca-viajera, .pa-led-track, .pa-file { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Tuerca className="h-[20px] w-[20px] shrink-0" width={17} />
            <span className="truncate">Pernos Arriagada</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(11,29,51,0.94)',
          ink: '#FFFFFF',
          line: C.lineD,
          btnBg: C.amarillo,
          btnInk: C.noche,
        }}
      />

      {/* ── Portada: la tuerca se enrosca en el titular ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-36 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-[1.12fr_0.88fr] gap-9 lg:gap-14 items-center">
            <div>
              <p
                className={`${mono.className} pa-sube text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.26em]`}
                style={{ color: C.amarillo, animationDelay: '0.15s' }}
              >
                Tornería · maestranza · pernos
                <span style={{ color: 'rgba(255,255,255,0.55)' }}> · Villarrica</span>
              </p>
              <h1 className="mt-5 uppercase leading-[0.96] text-[clamp(2.5rem,10.4vw,4.1rem)]">
                <span className="pa-sube block" style={{ animationDelay: '0.3s' }}>
                  Si no existe,
                </span>
                <span className="pa-sube block" style={{ animationDelay: '0.45s' }}>
                  lo hacemos
                </span>
                <span className="pa-sube block" style={{ animationDelay: '0.6s' }}>
                  en el torn
                  <span className="relative inline-block">
                    <span className="opacity-0">O</span>
                    <Tuerca
                      className="pa-o absolute left-1/2 top-[52%] h-[0.86em] w-[0.86em]"
                      width={14}
                    />
                  </span>
                  .
                </span>
              </h1>
              <p
                className="pa-sube mt-5 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedD, animationDelay: '0.75s' }}
              >
                Traes la medida o la foto de la pieza y sale del torno, la
                fresa o la soldadora. Y si lo que falta es un perno, está en
                el muro de Cerros de Melilahuen.
              </p>
              <div className="pa-sube mt-6 flex flex-wrap gap-3" style={{ animationDelay: '0.9s' }}>
                <Btn href={WA_LINK} tone="tuerca">
                  Cotizar una pieza por WhatsApp
                </Btn>
                <Btn href="#muro" tone="lineClaro" external={false}>
                  Ver el muro de pernos
                </Btn>
              </div>
              {/* El hilo: la tuerca viaja enroscándose hasta el fondo. */}
              <div className="pa-sube relative mt-8 h-[30px] w-[240px] md:w-[300px]" style={{ animationDelay: '1.05s' }} aria-hidden="true">
                <span className="pa-hilo absolute inset-x-0 top-1/2 h-[9px] -translate-y-1/2" style={hilo(true)} />
                <Tuerca className="pa-tuerca-viajera absolute right-0 top-1/2 h-[30px] w-[30px]" width={16} />
              </div>
            </div>
            <figure className="pa-sube" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <div
                  className="relative overflow-hidden aspect-[4/3] rounded-sm"
                  style={{ border: `1px solid ${C.lineD}`, boxShadow: '0 24px 60px rgba(0,0,0,0.45)' }}
                >
                  <Image
                    src={`${IMG}/pernos-fabricados.webp`}
                    alt="Pernos de acero recién torneados, alineados sobre una barra del taller"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 42%' }}
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 flex items-end justify-end gap-3 px-3.5 pt-10 pb-2.5"
                    style={{ background: 'linear-gradient(180deg, transparent, rgba(7,21,40,0.75) 55%)' }}
                  >
                    <span className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.16em] px-2 py-1`} style={{ backgroundColor: C.amarillo, color: C.noche }}>
                      Hechos aquí
                    </span>
                  </div>
                </div>
                <figure
                  className="absolute -bottom-5 -left-2.5 md:-left-5 w-[36%] max-w-[170px] rounded-sm overflow-hidden"
                  style={{ border: `3px solid ${C.noche}`, boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}
                >
                  <Image
                    src={`${IMG}/torno.webp`}
                    alt="Panel de mandos del torno del taller"
                    width={500}
                    height={400}
                    sizes="170px"
                    className="block h-auto w-full"
                  />
                </figure>
              </div>
              <figcaption className={`${mono.className} mt-8 md:mt-9 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                El torno y su trabajo, en el taller
              </figcaption>
            </figure>
          </div>
          <div className="mt-9 md:mt-12 border-t pt-4 pb-2 flex flex-wrap gap-x-8 gap-y-1.5" style={{ borderColor: C.lineD }}>
            {[
              `${BIZ.address}, ${BIZ.city}`,
              'Lun a vie 9:00 a 13:00 y 15:00 a 19:00',
              'Sáb 9:00 a 14:00',
              `${BIZ.reviews} opiniones en Google`,
            ].map((d) => (
              <p key={d} className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {d}
              </p>
            ))}
          </div>
        </div>
        <BarraLed />
      </section>

      {/* ── Lo fabricamos: los servicios de maestranza de su letrero ── */}
      <section id="fabricamos" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Lo que sale del torno</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <h2 className="uppercase leading-[0.95] text-[clamp(2.2rem,7.6vw,4.4rem)]">
                La pieza que no hay,
                <br />
                <span style={{ color: C.tablero }}>se fabrica.</span>
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                Servicios de maestranza, tal como los anuncia su propio
                letrero en la fachada del local.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-start">
            <div>
              <ol>
                {SERVICIOS.map((s, i) => (
                  <li key={s.n} className="py-5 md:py-6" style={{ borderTop: i === 0 ? `2px solid ${C.tinta}` : `1px solid ${C.lineL}` }}>
                    <Reveal delay={i * 80}>
                      <div className="flex items-start gap-4">
                        <span
                          className={`${mono.className} mt-1 inline-flex h-[30px] w-[30px] shrink-0 items-center justify-center text-[11px] font-bold`}
                          style={{ backgroundColor: C.amarillo, color: C.noche, clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)' }}
                        >
                          {s.n}
                        </span>
                        <div className="min-w-0">
                          <h3 className="uppercase leading-[1.04] text-[clamp(1.3rem,3.6vw,1.9rem)]">{s.titulo}</h3>
                          <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                            {s.detalle}
                          </p>
                        </div>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ol>

              <Reveal delay={140}>
                <figure className="mt-7 p-5" style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.lineL}`, borderLeft: `5px solid ${C.amarillo}` }}>
                  <blockquote className="text-base md:text-lg font-semibold leading-relaxed">
                    “{OPINION.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                    {OPINION.autor} · una de las {BIZ.reviews} opiniones en Google
                  </figcaption>
                </figure>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-7 flex flex-wrap items-center gap-4">
                  <Btn href={WA_LINK} tone="tinta">
                    Cotizar una pieza
                  </Btn>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.mutedL }}>
                    Manda foto o medida
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Composición: el letrero real + el torno verde del taller. */}
            <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-4">
              <Reveal className="min-w-0">
                <figure>
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4]" style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 14px 36px rgba(20,27,36,0.16)' }}>
                    <Image
                      src={`${IMG}/letrero-servicios.webp`}
                      alt="El letrero de la fachada con los servicios de maestranza pintados en amarillo sobre azul"
                      fill
                      sizes="(min-width: 1024px) 28vw, 56vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                    Su letrero, en la pared del local
                  </figcaption>
                </figure>
              </Reveal>
              <div className="flex flex-col gap-4 min-w-0">
                <Reveal delay={110}>
                  <figure>
                    <div className="relative overflow-hidden rounded-sm aspect-[5/4]" style={{ border: `1px solid ${C.lineL}` }}>
                      <Image
                        src={`${IMG}/torno-taller.webp`}
                        alt="El torno verde instalado en el taller"
                        fill
                        sizes="(min-width: 1024px) 21vw, 38vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                      El torno del taller
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={180}>
                  <div className="rounded-sm p-4" style={{ backgroundColor: C.noche }}>
                    <Tuerca className="h-[22px] w-[22px] mb-2.5" width={15} />
                    <p className="text-[13px] leading-snug" style={{ color: 'rgba(255,255,255,0.85)' }}>
                      Si la pieza se rompió o no existe, se recupera o se
                      fabrica a medida.
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── El muro de los pernos: el listado de sus letreros ── */}
      <section id="muro" className="scroll-mt-20" style={{ backgroundColor: C.tablero }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo dark>El muro de los pernos</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <h2 className="uppercase leading-[0.95] text-[clamp(2.2rem,7.6vw,4.4rem)]">
                Lo que el letrero
                <br />
                <span style={{ color: C.amarillo }}>promete, el muro lo tiene.</span>
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.mutedD }}>
                El listado de sus propios letreros, ordenado por partida.
                Sin precios ni stock en la página: se consulta por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {MURO.map((g, gi) => (
              <Reveal key={g.partida} delay={gi * 90} className="h-full">
                <article
                  className="h-full flex flex-col p-5 md:p-6"
                  style={{
                    backgroundColor: C.noche,
                    border: `2px solid ${C.amarillo}`,
                    boxShadow: '0 14px 34px rgba(0,0,0,0.3)',
                  }}
                >
                  <header className="flex items-center gap-2.5 pb-3.5" style={{ borderBottom: `1px solid ${C.lineD}` }}>
                    <Tuerca className="h-[16px] w-[16px] shrink-0" width={17} />
                    <h3 className="uppercase leading-none text-lg md:text-xl" style={{ color: C.amarillo }}>
                      {g.partida}
                    </h3>
                  </header>
                  <ul className="pt-4 flex flex-col gap-[7px]">
                    {g.items.map((it) => (
                      <li key={it} className="pa-item flex items-baseline gap-2.5 text-[14px] leading-snug" style={{ color: 'rgba(255,255,255,0.88)' }}>
                        <span className="inline-block w-[6px] h-[6px] shrink-0 translate-y-[-1px]" style={{ backgroundColor: 'rgba(255,255,255,0.55)' }} aria-hidden="true" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 md:mt-12 grid lg:grid-cols-[1fr_0.9fr] gap-8 items-end">
            <div className="grid grid-cols-2 gap-4">
              <Reveal>
                <figure>
                  <div className="relative overflow-hidden rounded-sm aspect-[5/4]" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/meson.webp`}
                      alt="El mesón del local: vitrina de piezas y detrás el muro de cajones de pernos"
                      fill
                      sizes="(min-width: 1024px) 28vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                    El mesón y el muro de cajones
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={100}>
                <figure>
                  <div className="relative overflow-hidden rounded-sm aspect-[5/4]" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/estanteria.webp`}
                      alt="Pasillo del local con la estantería de cajones de pernos"
                      fill
                      sizes="(min-width: 1024px) 28vw, 46vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                    Los cajones, por medida
                  </figcaption>
                </figure>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="flex flex-col items-start gap-4">
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.mutedD }}>
                  ¿El perno, la tuerca o el repuesto? Pregunta por medida o
                  manda la foto de la pieza que buscas.
                </p>
                <Btn href={WA_REPUESTOS} tone="tuerca">
                  Consultar por pernos y repuestos
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local: letreros, lluvia y nieve de Villarrica ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.acero, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center">
            <Reveal>
              <Rotulo>El local, en Villarrica</Rotulo>
              <h2 className="uppercase leading-[0.95] text-[clamp(2.2rem,7.6vw,4.4rem)] mb-6">
                Con lluvia
                <br />
                o con nieve,
                <br />
                <span style={{ color: C.tablero }}>el letrero corre.</span>
              </h2>
              <p className="text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.mutedL }}>
                En la fachada de Cerros de Melilahuen cuelgan los tres
                letreros azules con la lista completa y un letrero LED rojo
                que corre «tuercas y pernos» todo el día: así se ve en las
                fotos de su ficha, con lluvia y hasta con nieve.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className={`${mono.className} inline-flex items-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] px-3 py-2 rounded-full`} style={{ border: `2px solid ${C.noche}`, color: C.noche }}>
                  Würth · Yato · Force
                </span>
              </div>
              <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                Las marcas que se ven en sus pendones y afiches
              </p>
            </Reveal>

            <div className="grid grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] gap-4">
              <Reveal className="min-w-0">
                <figure>
                  <div className="relative overflow-hidden rounded-sm aspect-[3/4]" style={{ boxShadow: '0 16px 40px rgba(20,27,36,0.2)' }}>
                    <Image
                      src={`${IMG}/fachada-letreros.webp`}
                      alt="La fachada del local con los tres letreros azules de servicios y productos, el LED rojo y banderitas chilenas"
                      fill
                      sizes="(min-width: 1024px) 30vw, 55vw"
                      className="object-cover"
                      style={{ objectPosition: '50% 60%' }}
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                    Los tres letreros y el LED
                  </figcaption>
                </figure>
              </Reveal>
              <div className="flex flex-col gap-4 min-w-0">
                <Reveal delay={100}>
                  <figure>
                    <div className="relative overflow-hidden rounded-sm aspect-[4/3]" style={{ boxShadow: '0 10px 26px rgba(20,27,36,0.16)' }}>
                      <Image
                        src={`${IMG}/nieve.webp`}
                        alt="La fachada de Pernos Arriagada durante una nevazón en Villarrica"
                        fill
                        sizes="(min-width: 1024px) 26vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                      También con nevazón
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={170}>
                  <figure>
                    <div className="relative overflow-hidden rounded-sm aspect-[4/5]" style={{ boxShadow: '0 10px 26px rgba(20,27,36,0.16)' }}>
                      <Image
                        src={`${IMG}/letrero-led.webp`}
                        alt="El letrero LED rojo del local bajo la lluvia, junto al pendón de Yato"
                        fill
                        sizes="(min-width: 1024px) 26vw, 45vw"
                        className="object-cover"
                        style={{ objectPosition: '50% 25%' }}
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                      «Tuercas y pernos», bajo la lluvia
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dónde: dirección, horario y mapa ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Rotulo dark>Cómo llegar</Rotulo>
            <h2 className="uppercase leading-[0.95] text-[clamp(2rem,7vw,3.9rem)]">
              Cerros de
              <br />
              Melilahuen <span style={{ color: C.amarillo }}>3855.</span>
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.mutedD }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 tap-44" style={{ color: '#FFFFFF' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 max-w-md">
              <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.24em] mb-2`} style={{ color: C.amarillo }}>
                Horario de atención
              </p>
              <table className="w-full text-left">
                <tbody>
                  {HORARIO.map((h) => (
                    <tr key={h.dia} className="border-b" style={{ borderColor: C.lineD }}>
                      <th scope="row" className="py-3 pr-4 font-medium text-sm" style={{ color: C.mutedD }}>
                        {h.dia}
                      </th>
                      <td className={`${mono.className} py-3 text-right text-[13px]`}>{h.hora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="tuerca">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="lineClaro">
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-sm aspect-[4/3] min-h-[280px]" style={{ border: `1px solid ${C.lineD}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <figure>
                <div className="relative overflow-hidden rounded-sm aspect-[16/9]" style={{ border: `1px solid ${C.lineD}` }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="La fachada amarilla y azul del local con el letrero grande de Pernos Arriagada"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 40%' }}
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Así se ve el local desde la calle
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre: manda la foto, sale la pieza ── */}
      <section style={{ backgroundColor: '#06090F' }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <Tuerca className="pa-tuerca-final mx-auto h-[46px] w-[46px] mb-6" width={13} />
            <h2 className="uppercase leading-[0.95] text-[clamp(2.4rem,8.6vw,5rem)]">
              Manda la foto.
              <br />
              <span style={{ color: C.amarillo }}>Sale la pieza.</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
              Escríbenos por WhatsApp con la foto o la medida de la pieza,
              o consulta por los pernos y repuestos del muro.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_LINK} tone="tuerca">
                Cotizar una pieza por WhatsApp
              </Btn>
              <Btn href={WA_REPUESTOS} tone="lineClaro">
                Consultar por pernos y repuestos
              </Btn>
            </div>
          </Reveal>
        </div>
        <BarraLed />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.pozo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="pa-disp uppercase text-2xl inline-flex items-center gap-2.5">
                <Tuerca className="h-[20px] w-[20px]" width={17} />
                {BIZ.name}
              </p>
              <p className="text-sm mt-1.5" style={{ color: C.mutedD }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amarillo }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
