import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import Print from './print'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, SERVICES, QUOTES } from './content'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

/* CMYK de oficio: papel, tinta y los cuatro colores de proceso, con el
   naranja del letrero como acento principal (sale de su propio rotulo). */
const C = {
  papel: '#FAF8F3',
  tinta: '#14161A',
  suave: '#45484F',
  tenue: '#5B5E66',
  cian: '#12A4C8',
  magenta: '#D6336C',
  amarillo: '#F2C230',
  naranja: '#F26B1D',
  naranjaTinta: '#B8460E',
  magentaTinta: '#A8154B',
  line: 'rgba(20,22,26,0.16)',
  papelOsc: '#F0EBE0',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'impresiones-digitales-serfocomp-concepcion',
  title: 'Serfocomp · Impresiones digitales en Concepción',
  description:
    'Fotocopias, impresión láser color, ploteo de planos, empastes, tesis y pendones en Aníbal Pinto 343, Concepción. Cotiza por WhatsApp.',
  image: `${IMG}/afiche-impresiones.webp`,
})

const NAV_LINKS = [
  { label: 'El pliego', href: '#pliego' },
  { label: 'El local', href: '#local' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visita', href: '#visita' },
]

/* ── Marcas de imprenta ─────────────────────────────────── */

/** Marca de registro: el circulito con cruz que alinea las tintas. */
function RegMark({ className = '', style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <circle cx="12" cy="12" r="6.5" />
      <path d="M12 1.5v21M1.5 12h21" />
    </svg>
  )
}

/** Marca de corte de esquina (las guías de la guillotina). */
function CropMark({ corner, color }: { corner: 'tl' | 'tr' | 'bl' | 'br'; color: string }) {
  const pos: Record<string, CSSProperties> = {
    tl: { top: 0, left: 0, borderTopWidth: 1.5, borderLeftWidth: 1.5 },
    tr: { top: 0, right: 0, borderTopWidth: 1.5, borderRightWidth: 1.5 },
    bl: { bottom: 0, left: 0, borderBottomWidth: 1.5, borderLeftWidth: 1.5 },
    br: { bottom: 0, right: 0, borderBottomWidth: 1.5, borderRightWidth: 1.5 },
  }
  return (
    <span
      className="absolute w-4 h-4 pointer-events-none"
      style={{ borderWidth: 0, borderStyle: 'solid', borderColor: color, ...pos[corner] }}
      aria-hidden="true"
    />
  )
}

/** Barra de control de color: C M Y K como en el borde del pliego. */
function ColorBars({ className = '' }: { className?: string }) {
  return (
    <div className={`flex ${className}`} aria-hidden="true">
      {[C.cian, C.magenta, C.amarillo, C.tinta].map((c) => (
        <span key={c} className="flex-1" style={{ backgroundColor: c }} />
      ))}
    </div>
  )
}

/* Foto real en "marco de prueba": mate de papel, sombras desplazadas en
   magenta y cian (la doble tinta del desregistro) y marcas de corte. */
function Proof({
  src,
  alt,
  caption,
  ratio,
  objectPosition = '50% 50%',
  rotate = 0,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  caption?: string
  ratio: string
  objectPosition?: string
  rotate?: number
  className?: string
  priority?: boolean
}) {
  return (
    <figure
      className={`relative ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <CropMark corner="tl" color={C.tinta} />
      <CropMark corner="tr" color={C.tinta} />
      <CropMark corner="bl" color={C.tinta} />
      <CropMark corner="br" color={C.tinta} />
      <div
        className="bg-[#FAF8F3] p-2 border"
        style={{
          borderColor: C.tinta,
          boxShadow: '5px 5px 0 rgba(214,51,108,0.5), 10px 10px 0 rgba(18,164,200,0.35)',
        }}
      >
        <div className={`relative ${ratio} overflow-hidden`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 88vw, 40vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>
        {caption && (
          <figcaption
            className="pt-2 flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.18em]"
            style={{ color: C.tenue }}
          >
            <span>{caption}</span>
            <span className="flex gap-[3px]" aria-hidden="true">
              {[C.cian, C.magenta, C.amarillo, C.tinta].map((c) => (
                <i key={c} className="w-2 h-2 inline-block" style={{ backgroundColor: c }} />
              ))}
            </span>
          </figcaption>
        )}
      </div>
    </figure>
  )
}

/* Titular que "entra en registro": tres tintas desplazadas convergen
   hasta formar el texto en negro. */
function RegLine({ text, delay = 0 }: { text: string; delay?: number }) {
  const d = (ms: number) => ({ animationDelay: `${ms}ms` })
  return (
    <span className="block relative">
      <span className="sf-ink" style={d(950 + delay)}>{text}</span>
      <span className="sf-cmy sf-c" style={{ ...d(80 + delay), color: C.cian }} aria-hidden="true">{text}</span>
      <span className="sf-cmy sf-m" style={{ ...d(200 + delay), color: C.magenta }} aria-hidden="true">{text}</span>
      <span className="sf-cmy sf-y" style={{ ...d(320 + delay), color: C.amarillo }} aria-hidden="true">{text}</span>
    </span>
  )
}

/* ── Íconos del pliego (tinta + un detalle en color de proceso) ── */

function SvcIcon({ i, accent, className = '' }: { i: number; accent: string; className?: string }) {
  const s = { stroke: 'currentColor', strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  const a = { stroke: accent, strokeWidth: 1.7, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' } as const
  const icons = [
    // fotocopias: la copiadora con la hoja que sale
    <g key="0"><rect x="5" y="12" width="22" height="10" rx="1.5" {...s} /><path d="M9 12V6h14v6" {...s} /><rect x="10" y="18" width="12" height="6" {...a} /><path d="M21 15.5h2.5" {...s} /></g>,
    // láser color: impresora con gotas C M Y
    <g key="1"><rect x="6" y="13" width="20" height="9" rx="1.5" {...s} /><path d="M10 13V7h12v6" {...s} /><rect x="10" y="18" width="12" height="4" {...s} /><circle cx="13" cy="26" r="1.3" fill={C.cian} /><circle cx="16" cy="26" r="1.3" fill={C.magenta} /><circle cx="19" cy="26" r="1.3" fill={C.amarillo} /></g>,
    // impresión gráfica: el afiche enmarcado
    <g key="2"><rect x="7" y="4" width="18" height="24" rx="1.5" {...s} /><circle cx="13" cy="11" r="2" fill={accent} stroke="none" /><path d="M10 24l5-7 4 5 3-3v5" {...s} /></g>,
    // ploteo de planos: el plano enrollado
    <g key="3"><path d="M8 8h16v16H8z" {...s} /><ellipse cx="8" cy="16" rx="3" ry="8" {...a} /><path d="M12 13h8M12 17h8M12 21h5" {...s} /></g>,
    // anillados: la hoja con su espiral
    <g key="4"><rect x="10" y="5" width="16" height="22" rx="1.5" {...s} /><path d="M14 11h8M14 15h8M14 19h5" {...s} /><circle cx="8" cy="9" r="2" {...a} /><circle cx="8" cy="15" r="2" {...a} /><circle cx="8" cy="21" r="2" {...a} /></g>,
    // empastes: el libro de tapa dura
    <g key="5"><rect x="8" y="4" width="16" height="24" rx="2" {...s} /><path d="M13 4v24" {...s} /><rect x="16" y="9" width="6" height="5" fill={accent} stroke="none" /></g>,
    // tesis: la memoria con su sello
    <g key="6"><rect x="8" y="4" width="16" height="24" rx="1.5" {...s} /><path d="M12 10h8M12 14h8M12 18h5" {...s} /><circle cx="21" cy="23" r="3.2" {...a} /><path d="M19.5 25.5L18.5 29l2.5-1.6 2.5 1.6-1-3.5" {...a} /></g>,
    // rotulados CD: el disco con su etiqueta
    <g key="7"><circle cx="16" cy="16" r="11" {...s} /><circle cx="16" cy="16" r="3.5" {...s} /><path d="M9.5 9.5a11 11 0 0 1 13 0" {...a} /></g>,
    // pendones: la tela colgada de su barra
    <g key="8"><path d="M4 6h24" {...s} /><path d="M8 6h16v15l-8-3-8 3z" {...a} /><circle cx="4" cy="6" r="1.6" fill={accent} stroke="none" /><circle cx="28" cy="6" r="1.6" fill={accent} stroke="none" /></g>,
    // chapitas: el pin redondo
    <g key="9"><circle cx="15" cy="15" r="10" {...s} /><circle cx="15" cy="15" r="5" {...a} /><path d="M22 22l5 5" {...s} /><circle cx="28" cy="28" r="1.4" fill={accent} stroke="none" /></g>,
  ]
  return (
    <svg viewBox="0 0 32 32" className={className} style={{ color: C.tinta }} aria-hidden="true">
      {icons[i]}
    </svg>
  )
}

const ACCENTS = [C.cian, C.magenta, C.amarillo, C.naranja]

/** Áreas del pliego: cada servicio es una pieza distinta en la hoja. */
const PLIEGO_MOBILE = [
  '"foto foto"',
  '"laser planos"',
  '"grafica grafica"',
  '"anillados empastes"',
  '"tesis tesis"',
  '"cd pendon"',
  '"chapita cotiza"',
].join(' ')
const PLIEGO_DESKTOP = [
  '"foto foto laser planos"',
  '"grafica grafica anillados empastes"',
  '"tesis tesis cd pendon"',
  '"chapita chapita cotiza cotiza"',
].join(' ')
const AREAS = ['foto', 'laser', 'grafica', 'planos', 'anillados', 'empastes', 'tesis', 'cd', 'pendon', 'chapita']

export default function SerfocompPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* El titular entra en registro: las tres tintas desplazadas se
           alinean y ceden el paso al negro, como en la puesta en máquina. */
        .sf-ink { opacity: 0; animation: sf-ink-in 0.45s ease-out both; }
        @keyframes sf-ink-in { to { opacity: 1 } }
        .sf-cmy { position: absolute; inset: 0; opacity: 0; pointer-events: none; }
        @keyframes sf-reg-c {
          0% { opacity: 0; transform: translate(-13px,-7px) }
          20% { opacity: 0.95 }
          62% { transform: translate(0,0); opacity: 0.95 }
          100% { transform: translate(0,0); opacity: 0 }
        }
        @keyframes sf-reg-m {
          0% { opacity: 0; transform: translate(12px,6px) }
          20% { opacity: 0.95 }
          62% { transform: translate(0,0); opacity: 0.95 }
          100% { transform: translate(0,0); opacity: 0 }
        }
        @keyframes sf-reg-y {
          0% { opacity: 0; transform: translate(-6px,10px) }
          20% { opacity: 0.95 }
          62% { transform: translate(0,0); opacity: 0.95 }
          100% { transform: translate(0,0); opacity: 0 }
        }
        .sf-c { animation: sf-reg-c 1.05s cubic-bezier(0.22,0.61,0.2,1) both }
        .sf-m { animation: sf-reg-m 1.05s cubic-bezier(0.22,0.61,0.2,1) both }
        .sf-y { animation: sf-reg-y 1.05s cubic-bezier(0.22,0.61,0.2,1) both }

        /* La franja de barras CMYK barre la pantalla como el cabezal. */
        .sf-sweep { animation: sf-sweep 1.2s cubic-bezier(0.6,0.05,0.25,1) 0.2s both }
        @keyframes sf-sweep {
          0% { clip-path: inset(0 100% 0 0); opacity: 1 }
          42% { clip-path: inset(0 0 0 0); opacity: 1 }
          78% { clip-path: inset(0 0 0 78%); opacity: 1 }
          100% { clip-path: inset(0 0 0 100%); opacity: 0 }
        }

        /* La marca de registro gira una vez al entrar. */
        .sf-giro { animation: sf-giro 0.9s cubic-bezier(0.3,0.7,0.3,1) 0.4s both }
        @keyframes sf-giro { from { transform: rotate(-170deg); opacity: 0 } to { transform: rotate(0deg); opacity: 1 } }

        .sf-fade { animation: sf-fade 0.9s ease-out both }
        @keyframes sf-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }

        .sf-bars-in { animation: sf-bars-in 0.7s ease-out 1.35s both }
        @keyframes sf-bars-in { from { opacity: 0 } to { opacity: 1 } }

        .sf-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .sf-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .sf-btn:active { transform: translateY(0) scale(0.97) }

        /* El pliego: móvil en dos columnas, escritorio en cuatro.
           minmax(0,...) para que el contenido no infle las pistas. */
        .sf-grid-pliego { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-areas: ${PLIEGO_MOBILE}; }
        @media (min-width: 768px) {
          .sf-grid-pliego { grid-template-columns: repeat(4, minmax(0, 1fr)); grid-template-areas: ${PLIEGO_DESKTOP}; }
        }

        a:focus-visible, button:focus-visible, [role="button"]:focus-visible {
          outline: 3px solid ${C.naranja}; outline-offset: 3px;
        }

        @media (prefers-reduced-motion: reduce) {
          .sf-ink { animation: none !important; opacity: 1 !important }
          .sf-cmy, .sf-sweep { display: none !important }
          .sf-giro, .sf-fade, .sf-bars-in { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} font-extrabold tracking-[-0.01em] inline-flex items-center gap-[1px]`}>
            SERF<RegMark className="w-[0.85em] h-[0.85em] inline-block translate-y-[0.5px]" style={{ color: C.naranja }} />COMP
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'light', bar: 'rgba(250,248,243,0.95)', ink: C.tinta, line: C.line, btnBg: C.naranja, btnInk: C.tinta }}
      />

      {/* ── 1 · Hero: el titular entra en registro ─────────── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
        {/* marcas de corte: la pantalla es el pliego */}
        <div className="absolute inset-3 md:inset-5 pointer-events-none" aria-hidden="true">
          <CropMark corner="tl" color="rgba(20,22,26,0.4)" />
          <CropMark corner="tr" color="rgba(20,22,26,0.4)" />
          <CropMark corner="bl" color="rgba(20,22,26,0.4)" />
          <CropMark corner="br" color="rgba(20,22,26,0.4)" />
        </div>
        {/* franja de barras que barre la pantalla al entrar */}
        <div
          className="sf-sweep absolute inset-x-0 top-[38%] h-[54px] md:h-[72px] pointer-events-none mix-blend-multiply"
          aria-hidden="true"
        >
          <div className="h-full flex">
            {[C.cian, C.magenta, C.amarillo, C.tinta, C.cian, C.magenta, C.amarillo, C.tinta].map((c, i) => (
              <span key={i} className="flex-1" style={{ backgroundColor: c, opacity: 0.85 }} />
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
          <div>
            <p
              className="sf-fade flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
              style={{ color: C.naranjaTinta, animationDelay: '0.15s' }}
            >
              <RegMark className="sf-giro w-4 h-4" />
              Aníbal Pinto 343 · Concepción
            </p>
            <h1
              className={`${display.className} font-extrabold leading-[1.0] tracking-[-0.025em] text-[clamp(2.7rem,11.5vw,5.8rem)]`}
              style={{ color: C.tinta }}
            >
              <RegLine text="Lo que imaginas," delay={0} />
              <RegLine text="impreso." delay={140} />
            </h1>
            <p
              className="sf-fade mt-6 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.suave, animationDelay: '1.15s' }}
            >
              {BIZ.short} imprime en el centro de Concepción: fotocopias,
              láser color, ploteo de planos, empastes de tesis, pendones
              y chapitas.
            </p>
            <div className="sf-fade mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.3s' }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} sf-btn inline-flex items-center justify-center font-bold text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.naranja, color: C.tinta }}
              >
                Cotiza por WhatsApp
              </a>
              <a
                href="#pliego"
                className="sf-btn inline-flex items-center justify-center text-sm font-bold px-7 py-3 border tap-44"
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ver el pliego
              </a>
            </div>
          </div>

          <div className="sf-fade relative" style={{ animationDelay: '1s' }}>
            <Proof
              src={`${IMG}/letrero.webp`}
              alt="Letrero turquesa de Serfocomp impresiones digitales"
              caption="El letrero · Aníbal Pinto 343"
              ratio="aspect-[21/5]"
              objectPosition="50% 0%"
              rotate={1.5}
              priority
            />
            <RegMark
              className="sf-giro absolute -top-5 -right-2 w-9 h-9"
              style={{ color: C.magenta, animationDelay: '0.55s' }}
            />
            <p
              className="mt-4 text-[10px] font-bold uppercase tracking-[0.22em] text-right"
              style={{ color: C.tenue }}
            >
              Impresión digital · Local 3 y 18
            </p>
          </div>
        </div>

        {/* barra de color ya registrada, al pie del pliego */}
        <div className="sf-bars-in relative">
          <ColorBars className="h-7 md:h-8" />
        </div>
      </section>

      {/* ── 2 · El pliego: los 10 servicios ────────────────── */}
      <section id="pliego" className="scroll-mt-20 px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.papelOsc }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.magentaTinta }}>
                  <RegMark className="w-4 h-4" /> El pliego
                </p>
                <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]`}>
                  Una hoja,<br />diez salidas.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed" style={{ color: C.suave }}>
                Todo lo que anuncia su propio letrero: de la fotocopia
                suelta al plano ploteado.
              </p>
            </div>
          </Reveal>

          {/* la hoja de impresión con sus marcas de corte */}
          <div className="relative border" style={{ borderColor: 'rgba(20,22,26,0.35)', backgroundColor: C.papel }}>
            <div className="absolute -top-3 -left-3" aria-hidden="true"><CropMark corner="tl" color={C.tinta} /></div>
            <div className="absolute -top-3 -right-3" aria-hidden="true"><CropMark corner="tr" color={C.tinta} /></div>
            <div className="absolute -bottom-3 -left-3" aria-hidden="true"><CropMark corner="bl" color={C.tinta} /></div>
            <div className="absolute -bottom-3 -right-3" aria-hidden="true"><CropMark corner="br" color={C.tinta} /></div>
            <RegMark className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-6 h-6" style={{ color: C.naranja }} />
            <RegMark className="absolute top-1/2 -right-3.5 -translate-y-1/2 w-6 h-6" style={{ color: C.naranja }} />

            <div className="grid sf-grid-pliego">
              {SERVICES.map((s, i) => {
                const wide = ['foto', 'grafica', 'tesis'].includes(AREAS[i])
                return (
                  <Print
                    key={s}
                    delay={(i % 3) * 80}
                    className={`relative p-5 ${wide ? 'min-h-[104px] md:min-h-[120px]' : 'min-h-[128px] md:min-h-[148px]'} flex ${wide ? 'flex-row items-center gap-4' : 'flex-col justify-between'} overflow-hidden`}
                    style={{
                      gridArea: AREAS[i],
                      border: '1px dashed rgba(20,22,26,0.28)',
                      margin: '-0.5px',
                      backgroundColor: C.papel,
                    }}
                  >
                    <div className={wide ? 'flex items-center gap-4 min-w-0' : 'flex items-start justify-between w-full'}>
                      <SvcIcon i={i} accent={ACCENTS[i % 4]} className="w-8 h-8 md:w-9 md:h-9 shrink-0" />
                      <span
                        className="text-[10px] font-bold tracking-[0.18em]"
                        style={{ color: C.tenue }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className={`${display.className} font-bold ${wide ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'} leading-tight min-w-0`}>
                      {s}
                    </p>
                  </Print>
                )
              })}
              {/* pieza 11: la invitación a imprimir otra cosa */}
              <Print
                delay={160}
                className="relative p-5 min-h-[104px] flex flex-col items-start justify-center gap-3 md:flex-row md:items-center md:justify-between md:gap-4 overflow-hidden"
                style={{
                  gridArea: 'cotiza',
                  border: `1.5px dashed ${C.naranja}`,
                  margin: '-0.5px',
                  backgroundColor: 'rgba(242,107,29,0.08)',
                }}
              >
                <p className="text-sm font-medium leading-snug" style={{ color: C.suave }}>
                  ¿Tu pieza no está en la hoja? Se pregunta y sale.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} sf-btn shrink-0 text-sm font-bold px-5 py-2.5 tap-44`}
                  style={{ backgroundColor: C.naranja, color: C.tinta }}
                >
                  Preguntar
                </a>
              </Print>
            </div>
          </div>
          <Reveal delay={100}>
            <p className="mt-6 text-[10px] font-bold uppercase tracking-[0.22em] flex items-center gap-2.5" style={{ color: C.tenue }}>
              <RegMark className="w-3.5 h-3.5" />
              Servicios del letrero y los afiches del local
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · El local: el letrero turquesa ──────────────── */}
      <section id="local" className="scroll-mt-20 px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.naranja }}>
                <RegMark className="w-4 h-4" /> El local
              </p>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em]`}>
                El letrero turquesa de Aníbal Pinto.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(250,248,243,0.78)' }}>
                <p>
                  Serfocomp atiende en los locales 3 y 18 del 343 de
                  Aníbal Pinto, en pleno centro de Concepción: el paso
                  obligado cuando el papel tiene que quedar bien.
                </p>
                <p>
                  Del ploteo de un plano a la tesis empastada, todo sale
                  del mismo mostrador.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} sf-btn inline-flex items-center justify-center text-sm font-bold px-6 py-3 tap-44`}
                  style={{ backgroundColor: C.naranja, color: C.tinta }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative">
              <Proof
                src={`${IMG}/letrero.webp`}
                alt="Banda naranja del letrero de Serfocomp con sus servicios y el plóter"
                caption="Servicios del letrero"
                ratio="aspect-[4/1]"
                objectPosition="50% 100%"
                rotate={-1.5}
              />
              <Proof
                src={`${IMG}/banner.webp`}
                alt="Banner de Serfocomp impresiones digitales con el listado de trabajos"
                caption="El banner del local"
                ratio="aspect-[3/1]"
                objectPosition="50% 50%"
                rotate={1}
                className="mt-6 md:-mt-2 md:ml-10"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Opiniones: la prueba que ya salió ──────────── */}
      <section id="opiniones" className="scroll-mt-20 px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.magentaTinta }}>
              <RegMark className="w-4 h-4" /> Reseñas de Google
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-end">
            <Reveal>
              <blockquote>
                <p className={`${display.className} font-extrabold leading-[1.12] tracking-[-0.02em] text-[clamp(1.65rem,5.8vw,3.4rem)]`}>
                  <span style={{ color: C.naranjaTinta }} aria-hidden="true">“</span>
                  {QUOTES[0].q}
                  <span style={{ color: C.naranjaTinta }} aria-hidden="true">”</span>
                </p>
                <footer className="mt-6 flex items-center gap-3">
                  <span className="h-px w-10" style={{ backgroundColor: C.cian }} aria-hidden="true" />
                  <cite className="not-italic text-sm font-bold tracking-[0.16em]" style={{ color: C.suave }}>
                    {QUOTES[0].a}
                  </cite>
                </footer>
              </blockquote>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative" style={{ transform: 'rotate(-1deg)' }}>
                <CropMark corner="tl" color={C.tinta} />
                <CropMark corner="br" color={C.tinta} />
                <blockquote
                  className="p-6 border"
                  style={{
                    borderColor: C.tinta,
                    backgroundColor: C.papel,
                    boxShadow: '4px 4px 0 rgba(18,164,200,0.45)',
                  }}
                >
                  <p className={`${display.className} font-bold text-xl md:text-2xl leading-snug`}>
                    “{QUOTES[1].q}”
                  </p>
                  <footer className="mt-4 text-xs font-bold tracking-[0.16em]" style={{ color: C.tenue }}>
                    {QUOTES[1].a}
                  </footer>
                </blockquote>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Visita: horario, mapa y contacto ───────────── */}
      <section id="visita" className="scroll-mt-20 px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.papelOsc }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className="flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.naranjaTinta }}>
              <RegMark className="w-4 h-4" /> Horario y cómo llegar
            </p>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.05] tracking-[-0.02em] mb-10`}>
              Aníbal Pinto 343,<br />Locales 3 y 18.
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <Reveal>
                <div className="p-6 md:p-7 h-full" style={{ backgroundColor: C.tinta, color: C.papel }}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-5" style={{ color: C.amarillo }}>
                    Horario
                  </p>
                  <dl className="space-y-3.5">
                    {HOURS.map((h) => (
                      <div key={h.d} className="flex items-baseline justify-between gap-4">
                        <dt className="text-sm" style={{ color: 'rgba(250,248,243,0.75)' }}>{h.d}</dt>
                        <dd className={`${display.className} font-bold text-sm md:text-base text-right`}>{h.h}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-6 pt-5 border-t" style={{ borderColor: 'rgba(250,248,243,0.18)' }}>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(250,248,243,0.65)' }}>
                      Sábado y domingo la máquina descansa.
                    </p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="p-6 md:p-7 border" style={{ borderColor: C.tinta, backgroundColor: C.papel }}>
                  <p className="text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: C.magentaTinta }}>
                    Cotiza por WhatsApp
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} block font-extrabold text-2xl md:text-3xl tracking-[-0.01em] underline underline-offset-8 decoration-2 whitespace-nowrap tap-44`}
                    style={{ color: C.tinta, textDecorationColor: C.naranja }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <p className="mt-4 text-sm leading-relaxed" style={{ color: C.suave }}>
                    Mandas el archivo o la idea y te responden la cotización.
                  </p>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="lg:col-span-3">
              <div className="relative h-full min-h-[320px] md:min-h-[380px]">
                <CropMark corner="tl" color={C.tinta} />
                <CropMark corner="tr" color={C.tinta} />
                <CropMark corner="bl" color={C.tinta} />
                <CropMark corner="br" color={C.tinta} />
                <div className="absolute inset-0 border" style={{ borderColor: C.tinta, backgroundColor: C.papel }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 6 · Cierre: la última tinta ────────────────────── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.naranja }}>
        <RegMark className="absolute -left-8 -bottom-10 w-40 h-40 opacity-25" style={{ color: C.tinta }} />
        <RegMark className="absolute -right-6 -top-8 w-28 h-28 opacity-25" style={{ color: C.tinta }} />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <h2 className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,8vw,4.2rem)]`} style={{ color: C.tinta }}>
              ¿Qué imprimimos hoy?
            </h2>
            <p className="mt-4 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(20,22,26,0.85)' }}>
              Escríbeles por WhatsApp con tu archivo o tu idea y cotiza
              directo con el local.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} sf-btn inline-flex items-center justify-center font-bold text-sm md:text-base px-8 py-3 tap-44`}
                style={{ backgroundColor: C.tinta, color: C.papel }}
              >
                Cotiza por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold text-xl md:text-2xl tracking-[-0.01em] flex items-center gap-[2px]`}>
                SERF<RegMark className="w-[0.8em] h-[0.8em]" style={{ color: C.naranja }} />COMP
              </p>
              <p className="text-sm mt-1" style={{ color: 'rgba(250,248,243,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.addressHint} · {BIZ.city}
              </p>
              <ColorBars className="h-2.5 w-40 mt-3" />
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(250,248,243,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center"
                style={{ color: 'rgba(250,248,243,0.85)' }}
              >
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(250,248,243,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(250,248,243,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.papel }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.short}.{' '}
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

      <WaFab href={WA_LINK} label={`Cotizar por WhatsApp con ${BIZ.short}`} />
    </div>
  )
}
