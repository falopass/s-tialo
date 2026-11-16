import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Corre } from './corre'
import { BIZ, WA_LINK, waPrenda, MAPS_URL, MAPS_EMBED, PRENDAS, REVIEWS, IMG } from './content'

// Instrument Serif para la vitrina editorial y Outfit para el texto:
// la dupla de una boutique de moda.
const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// «Colores que se eligen en el perchero»: el crema lino del camerino,
// la tinta de las perchas negras, el coral y el azul eléctrico de las
// prendas, y el camel de la barra donde cuelga todo.
const C = {
  crema: '#F4EEE3',
  crema2: '#FBF7EC',
  tinta: '#121212',
  coral: '#D9362B',
  coralOsc: '#B02A20', // coral oscuro: texto chico legible sobre crema
  azul: '#1E3FD6',
  camel: '#B7814B',
  camelBajo: 'rgba(183,129,75,0.16)',
  mutC: 'rgba(18,18,18,0.66)',
  mutD: 'rgba(244,238,227,0.72)',
  lineC: 'rgba(18,18,18,0.16)',
  lineD: 'rgba(244,238,227,0.24)',
} as const

// La barra de bronce del perchero, como la que sale en sus fotos.
const BRASS =
  'linear-gradient(90deg, rgba(183,129,75,0.12), #B7814B 14%, #DCAE72 50%, #B7814B 86%, rgba(183,129,75,0.12))'

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'bendito-outlet-osorno',
  title: 'Bendito Outlet · Tienda de ropa de mujer en Osorno',
  description:
    'Ropa de mujer en El Alba 1450, Osorno. Mira las prendas del perchero y pide la tuya por WhatsApp.',
  image: `${IMG}/chaqueta-azul.webp`,
})

const NAV_LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Cómo pedir', href: '#pedir' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

// Las cuatro prendas que cuelgan en la portada, con su caída y su mecer.
const PERCHERO = [
  { img: 'chaqueta-azul', alt: 'Blazer azul eléctrico con top rosado', w: 'w-[78px] md:w-[128px] lg:w-[148px]', b: '-2.3deg', d: '0.25s' },
  { img: 'rojo-corazones', alt: 'Polera roja tejida con corazones', w: 'w-[68px] md:w-[110px] lg:w-[128px]', b: '1.7deg', d: '0.42s' },
  { img: 'camel', alt: 'Conjunto camel con cinturón', w: 'w-[74px] md:w-[120px] lg:w-[138px]', b: '-0.9deg', d: '0.6s' },
  { img: 'verde-salvia', alt: 'Conjunto verde salvia con top amarillo', w: 'w-[66px] md:w-[104px] lg:w-[120px]', b: '2.5deg', d: '0.78s' },
]

const PASOS = [
  {
    n: '01',
    name: 'Elige tu prenda',
    desc: 'Mira el perchero y quédate con el nombre de la que te gusta.',
  },
  {
    n: '02',
    name: 'Escríbenos por WhatsApp',
    desc: 'El botón de cada prenda abre el mensaje ya escrito con su nombre.',
  },
  {
    n: '03',
    name: 'Coordinamos contigo',
    desc: 'Te respondemos con el valor y las tallas, y coordinamos el retiro.',
  },
]

/** La percha dibujada: gancho en curva y hombros de triángulo. */
function Percha({
  className = '',
  color = C.tinta,
  sw = 2.6,
}: {
  className?: string
  color?: string
  sw?: number
}) {
  return (
    <svg viewBox="0 0 64 38" className={className} fill="none" aria-hidden="true">
      <path
        d="M32 4.5 c3.6 0 5.6 2.1 5.6 4.8 c0 3.1 -2.8 4.3 -4.3 6.2"
        stroke={color}
        strokeWidth={sw}
        strokeLinecap="round"
      />
      <path
        d="M32 15.5 L6.8 33.5 Q4 35.5 7.2 35.5 L56.8 35.5 Q60 35.5 57.2 33.5 Z"
        stroke={color}
        strokeWidth={sw}
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Separador del perchero: una línea fina con la percha al centro. */
function Separador({ color = C.tinta }: { color?: string }) {
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: 'rgba(183,129,75,0.4)' }} />
      <Percha className="w-8 h-5" color={color} />
      <span className="h-px flex-1" style={{ backgroundColor: 'rgba(183,129,75,0.4)' }} />
    </div>
  )
}

/** Mini perchero: barra corta y percha, para colgar una tarjeta. */
function CuelgaMini({ color = C.tinta }: { color?: string }) {
  return (
    <div className="flex flex-col items-center" aria-hidden="true">
      <span
        className="h-[2.5px] w-[64%] self-stretch mx-auto rounded-full"
        style={{ background: BRASS }}
      />
      <Percha className="w-6 h-[15px] -mt-[1px]" color={color} sw={3.4} />
    </div>
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
      <span className="h-px w-8 shrink-0" style={{ backgroundColor: lineColor }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
  className = '',
}: {
  href: string
  children: React.ReactNode
  tone: 'coral' | 'crema' | 'tinta' | 'lineTinta' | 'lineCrema'
  external?: boolean
  className?: string
}) {
  const st: CSSProperties =
    tone === 'coral'
      ? { backgroundColor: C.coral, color: '#FFFFFF' }
      : tone === 'crema'
        ? { backgroundColor: C.crema, color: C.tinta }
        : tone === 'tinta'
          ? { backgroundColor: C.tinta, color: C.crema }
          : tone === 'lineCrema'
            ? { border: '1.5px solid rgba(244,238,227,0.55)', color: C.crema }
            : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`bo-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44 ${className}`}
      style={st}
    >
      {children}
    </a>
  )
}

/** Banderas chicas dibujadas a mano en CSS, sin fotos. */
function Bandera({ pais }: { pais: 'italia' | 'china' | 'espana' | 'chile' }) {
  const base: CSSProperties = {
    width: 30,
    height: 20,
    borderRadius: 3,
    overflow: 'hidden',
    position: 'relative',
    boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.18)',
    flexShrink: 0,
  }
  if (pais === 'italia')
    return (
      <span
        style={{
          ...base,
          backgroundImage:
            'linear-gradient(90deg, #009246 0 33.3%, #FFFFFF 33.3% 66.6%, #CE2B37 66.6%)',
        }}
        aria-hidden="true"
      />
    )
  if (pais === 'china')
    return (
      <span style={{ ...base, backgroundColor: '#DE2910' }} aria-hidden="true">
        <svg viewBox="0 0 10 10" className="absolute" style={{ left: 3, top: 2.5, width: 6, height: 6 }}>
          <path d="M5 0 L6.1 3.4 L9.8 3.5 L6.9 5.7 L7.9 9.2 L5 7.2 L2.1 9.2 L3.1 5.7 L0.2 3.5 L3.9 3.4 Z" fill="#FFDE00" />
        </svg>
      </span>
    )
  if (pais === 'espana')
    return (
      <span
        style={{
          ...base,
          backgroundImage:
            'linear-gradient(180deg, #AA151B 0 25%, #F1BF00 25% 75%, #AA151B 75%)',
        }}
        aria-hidden="true"
      />
    )
  return (
    <span
      style={{
        ...base,
        backgroundImage: 'linear-gradient(180deg, #FFFFFF 0 50%, #D52B1E 50%)',
      }}
      aria-hidden="true"
    >
      <span className="absolute left-0 top-0" style={{ width: '38%', height: '50%', backgroundColor: '#0039A6' }} />
      <svg viewBox="0 0 10 10" className="absolute" style={{ left: 2, top: 1.4, width: 4.5, height: 4.5 }}>
        <path d="M5 0 L6.1 3.4 L9.8 3.5 L6.9 5.7 L7.9 9.2 L5 7.2 L2.1 9.2 L3.1 5.7 L0.2 3.5 L3.9 3.4 Z" fill="#FFFFFF" />
      </svg>
    </span>
  )
}

/** Etiqueta de ropa: ojetillo arriba y cordel corto, para pasos y opiniones. */
function Etiqueta({
  children,
  className = '',
  style,
  innerStyle,
}: {
  children: React.ReactNode
  className?: string
  style?: CSSProperties
  innerStyle?: CSSProperties
}) {
  return (
    <div className={className} style={style}>
      <div className="flex justify-center" aria-hidden="true">
        <svg viewBox="0 0 12 26" className="w-3 h-[26px]">
          <path d="M6 26 C6 16 6 12 6 8" stroke={C.camel} strokeWidth="1.6" fill="none" />
          <path d="M6 8 a4.5 4.5 0 1 1 4.5 -4.5" stroke={C.camel} strokeWidth="1.6" fill="none" strokeLinecap="round" />
        </svg>
      </div>
      <div
        className="relative rounded-xl px-5 pb-5 pt-7 -mt-[7px]"
        style={innerStyle}
      >
        <span
          className="absolute left-1/2 top-[9px] -translate-x-1/2 block w-[9px] h-[9px] rounded-full"
          style={{ border: `1.6px solid ${C.camel}`, backgroundColor: 'transparent' }}
          aria-hidden="true"
        />
        {children}
      </div>
    </div>
  )
}

export default function BenditoOutletPage() {
  const [destacada, ...resto] = PRENDAS
  return (
    <div
      className={`${body.className} bo-page min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* La barra del perchero cruza el hero de punta a punta. */
        @keyframes bo-barra { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .bo-barra { animation: bo-barra .9s cubic-bezier(.22,.61,.2,1) .08s both; transform-origin: 0 50% }

        /* Cada prenda cae en su percha, se mece y se queda quieta. */
        @keyframes bo-mece {
          0% { opacity: 0; transform: translateY(-18px) rotate(calc(var(--b) - 7deg)) }
          22% { opacity: 1; transform: translateY(0) rotate(calc(var(--b) + 4.5deg)) }
          44% { transform: rotate(calc(var(--b) - 3deg)) }
          64% { transform: rotate(calc(var(--b) + 1.7deg)) }
          82% { transform: rotate(calc(var(--b) - 0.9deg)) }
          100% { opacity: 1; transform: rotate(var(--b)) }
        }
        .bo-cuelga { transform-origin: 50% 0%; transform: rotate(var(--b)); animation: bo-mece 2.3s cubic-bezier(.32,.66,.36,1) var(--d,0s) both }

        /* El titular se revela con clip-path, línea a línea. */
        @keyframes bo-titular {
          from { clip-path: inset(-6% -3% 100% -3%); transform: translateY(26px) }
          to { clip-path: inset(-6% -3% -10% -3%); transform: none }
        }
        .bo-titular { animation: bo-titular .95s cubic-bezier(.22,.61,.2,1) var(--d,0s) both }

        @keyframes bo-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .bo-sube { animation: bo-sube .85s ease-out var(--d,0s) both }

        .bo-btn { transition: transform .18s ease, filter .18s ease }
        .bo-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .bo-btn:active { transform: scale(.97) }
        .bo-page a:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .bo-dark a:focus-visible { outline-color: ${C.crema} }

        .bo-foto img { transition: transform .5s cubic-bezier(.22,.61,.2,1) }
        .bo-card:hover .bo-foto img { transform: scale(1.03) }

        @media (prefers-reduced-motion: reduce) {
          .bo-barra, .bo-cuelga, .bo-titular, .bo-sube { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.04em]">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'light',
          bar: 'rgba(244,238,227,0.94)',
          ink: C.tinta,
          line: C.lineC,
          btnBg: C.coral,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: se mece el perchero ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.crema }}>
        {/* la barra cruza la portada de punta a punta */}
        <div
          className="bo-barra absolute left-0 right-0 top-[104px] md:top-[132px] z-10"
          style={{ height: 3, background: BRASS }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px]">
          {/* perchero con cuatro prendas colgadas de la barra */}
          <div className="flex items-start justify-between gap-2 md:gap-8 lg:px-14">
            {PERCHERO.map((p) => (
              <div
                key={p.img}
                className={`bo-cuelga flex flex-col items-center ${p.w}`}
                style={{ '--b': p.b, '--d': p.d } as CSSProperties}
              >
                <Percha className="w-8 h-5 md:w-10 md:h-6" color={C.tinta} />
                <figure
                  className="relative -mt-[7px] w-full aspect-[3/4] overflow-hidden rounded-[10px] md:rounded-xl"
                  style={{
                    border: `1px solid ${C.lineC}`,
                    boxShadow: '0 14px 30px rgba(18,18,18,0.16)',
                    backgroundColor: C.tinta,
                  }}
                >
                  <Image
                    src={`${IMG}/${p.img}.webp`}
                    alt={p.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 150px, (min-width: 768px) 130px, 80px"
                    className="object-cover"
                  />
                </figure>
              </div>
            ))}
          </div>
          {/* titular: a la izquierda la frase, a la derecha la invitación */}
          <div className="mt-10 md:mt-14 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-14">
            <div>
              <p
                className="bo-sube flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em]"
                style={{ color: C.azul, '--d': '0.95s' } as CSSProperties}
              >
                <span className="h-px w-8" style={{ backgroundColor: 'rgba(30,63,214,0.45)' }} aria-hidden="true" />
                Osorno · Moda de mujer
              </p>
              <h1
                className={`${display.className} mt-5 leading-[0.98] tracking-[-0.015em] text-[clamp(3rem,11.5vw,6.2rem)]`}
                style={{ color: C.tinta }}
              >
                <span className="block overflow-hidden">
                  <span className="bo-titular block" style={{ '--d': '1.05s' } as CSSProperties}>
                    Elige tu color
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span className="bo-titular block" style={{ '--d': '1.2s' } as CSSProperties}>
                    en el <em style={{ color: C.coral }}>perchero.</em>
                  </span>
                </span>
              </h1>
            </div>
            <div className="lg:pb-2">
              <p
                className="bo-sube mt-6 lg:mt-0 max-w-md text-base md:text-lg leading-relaxed"
                style={{ color: C.mutC, '--d': '1.4s' } as CSSProperties}
              >
                Ropa de mujer en El Alba, {BIZ.city}: prendas que llegan de
                Italia, China, España y Chile. Míralas colgadas, elige la
                tuya y pídela por WhatsApp.
              </p>
              <div className="bo-sube mt-8 flex flex-wrap items-center gap-3" style={{ '--d': '1.55s' } as CSSProperties}>
                <Btn href={WA_LINK} tone="coral">
                  <WaIcon />
                  Escríbenos por WhatsApp
                </Btn>
                <Btn href="#catalogo" tone="lineTinta" external={false}>
                  Ver el perchero
                </Btn>
              </div>
            </div>
          </div>
          {/* barra de datos al pie del hero */}
          <div
            className="mt-12 md:mt-16 border-t py-4 flex flex-wrap gap-x-7 gap-y-1 text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold"
            style={{ borderColor: C.lineC, color: C.mutC }}
          >
            <span>{BIZ.address}, {BIZ.city}</span>
            <span>Pedidos por WhatsApp</span>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 inline-flex items-center underline underline-offset-4 decoration-1"
              style={{ color: C.coralOsc, textDecorationColor: 'rgba(176,42,32,0.4)' }}
            >
              Consulta el horario por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* ── 2 · Procedencia: las banderas de su bio ── */}
      <section className="bo-dark" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <div className="md:max-w-sm">
            <Rotulo color="rgba(244,238,227,0.6)" lineColor="rgba(183,129,75,0.6)">
              De dónde llega la ropa
            </Rotulo>
            <p
              className={`${display.className} mt-4 leading-[1.08] text-[clamp(1.8rem,4.6vw,2.9rem)]`}
              style={{ color: C.crema }}
            >
              Moda de Italia, China, España <em>y Chile.</em>
            </p>
          </div>
          <div className="md:ml-auto flex items-center gap-6 md:gap-8">
            {(
              [
                ['italia', 'Italia'],
                ['china', 'China'],
                ['espana', 'España'],
                ['chile', 'Chile'],
              ] as const
            ).map(([pais, nombre]) => (
              <div key={pais} className="flex flex-col items-center gap-2">
                <Bandera pais={pais} />
                <span
                  className="text-[9px] font-bold uppercase tracking-[0.22em]"
                  style={{ color: 'rgba(244,238,227,0.66)' }}
                >
                  {nombre}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · Catálogo: el perchero, prenda por prenda ── */}
      <section id="catalogo" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.azul} lineColor="rgba(30,63,214,0.45)">
              El catálogo
            </Rotulo>
            <h2
              className={`${display.className} mt-4 leading-[1.0] tracking-[-0.015em] text-[clamp(2.3rem,7vw,4.4rem)] max-w-3xl`}
              style={{ color: C.tinta }}
            >
              El perchero, <em style={{ color: C.coral }}>prenda por prenda.</em>
            </h2>
            <p className="mt-5 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.mutC }}>
              Esto es una parte de lo que cuelga en la tienda. Cada prenda se
              pide por WhatsApp: consulta el valor y las tallas, y coordinamos
              contigo.
            </p>
          </Reveal>

          {/* destacada del perchero */}
          <Corre from="izq" className="mt-12">
            <article
              className="bo-card grid sm:grid-cols-[1.15fr_1fr] overflow-hidden rounded-2xl"
              style={{
                border: `1.5px solid ${C.lineC}`,
                backgroundColor: C.crema2,
                boxShadow: '0 18px 44px rgba(18,18,18,0.12)',
              }}
            >
              <div>
                <CuelgaMini />
                <div className="bo-foto relative -mt-[8px] aspect-[4/3] sm:aspect-auto sm:h-full overflow-hidden" style={{ backgroundColor: C.tinta }}>
                  <Image
                    src={`${IMG}/${destacada.img}.webp`}
                    alt={destacada.alt}
                    fill
                    sizes="(min-width: 640px) 52vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-9 flex flex-col justify-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.26em]" style={{ color: C.azul }}>
                  N° 01 · La primera del perchero
                </p>
                <h3 className={`${display.className} mt-3 leading-[1.04] text-[clamp(1.9rem,5vw,2.8rem)]`} style={{ color: C.tinta }}>
                  {destacada.name}
                </h3>
                <p className="mt-4 text-base leading-relaxed" style={{ color: C.mutC }}>
                  El conjunto que abre la vitrina, tal como cuelga en la
                  tienda.
                </p>
                <div className="mt-6">
                  <Btn href={waPrenda(destacada.name)} tone="coral" className="w-full sm:w-auto">
                    <WaIcon />
                    Pedir por WhatsApp
                  </Btn>
                </div>
              </div>
            </article>
          </Corre>

          {/* grilla irregular del perchero */}
          <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-x-4 md:gap-x-6 gap-y-9">
            {resto.map((p, i) => {
              const n = String(i + 2).padStart(2, '0')
              const fila = Math.floor(i / 2)
              const from = fila % 2 === 0 ? 'der' : 'izq'
              const desfase = `${i % 2 === 1 ? 'mt-8 lg:mt-0' : ''}${i % 3 === 1 ? ' lg:mt-10' : ''}`
              return (
                <Corre key={p.img} from={from} delay={i * 60} className={desfase}>
                  <article className="bo-card">
                    <CuelgaMini />
                    <div
                      className="bo-foto relative -mt-[8px] aspect-square overflow-hidden rounded-xl"
                      style={{
                        border: `1px solid ${C.lineC}`,
                        boxShadow: '0 10px 26px rgba(18,18,18,0.10)',
                        backgroundColor: C.tinta,
                      }}
                    >
                      <Image
                        src={`${IMG}/${p.img}.webp`}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 1024px) 30vw, 44vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="mt-3 flex items-baseline justify-between gap-2">
                      <h3 className={`${display.className} text-[19px] md:text-[22px] leading-tight`} style={{ color: C.tinta }}>
                        {p.name}
                      </h3>
                      <span
                        className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em]"
                        style={{ color: C.azul }}
                      >
                        N° {n}
                      </span>
                    </div>
                    <a
                      href={waPrenda(p.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bo-btn mt-3 flex h-11 items-center justify-center gap-2 rounded-full text-[13px] font-bold tracking-wide tap-44"
                      style={{ backgroundColor: C.coral, color: '#FFFFFF' }}
                    >
                      <WaIcon className="w-[15px] h-[15px]" />
                      Pedir por WhatsApp
                    </a>
                  </article>
                </Corre>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 4 · Cómo pedir: tres etiquetas del perchero ── */}
      <section id="pedir" className="scroll-mt-20" style={{ backgroundColor: C.camelBajo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.coralOsc} lineColor="rgba(176,42,32,0.4)">
              Cómo pedir
            </Rotulo>
            <h2
              className={`${display.className} mt-4 leading-[1.02] tracking-[-0.015em] text-[clamp(2.3rem,7vw,4rem)]`}
              style={{ color: C.tinta }}
            >
              Del perchero a <em style={{ color: C.azul }}>tu WhatsApp.</em>
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-7 sm:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 120}>
                <Etiqueta
                  innerStyle={{
                    backgroundColor: C.crema2,
                    border: `1px solid rgba(183,129,75,0.5)`,
                    boxShadow: '0 12px 28px rgba(18,18,18,0.08)',
                  }}
                >
                  <p className="text-center text-[10px] font-bold uppercase tracking-[0.26em]" style={{ color: C.azul }}>
                    Paso {p.n}
                  </p>
                  <h3 className={`${display.className} mt-2 text-center text-[26px] leading-tight`} style={{ color: C.tinta }}>
                    {p.name}
                  </h3>
                  <p className="mt-3 text-center text-[15px] leading-relaxed" style={{ color: C.mutC }}>
                    {p.desc}
                  </p>
                </Etiqueta>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <Btn href={WA_LINK} tone="tinta">
                <WaIcon />
                Escríbenos por WhatsApp
              </Btn>
              <p className="text-sm" style={{ color: C.mutC }}>
                {BIZ.phoneDisplay}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Opiniones en Google ── */}
      <section id="opiniones" className="bo-dark scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color="rgba(244,238,227,0.6)" lineColor="rgba(183,129,75,0.6)">
              Opiniones en Google
            </Rotulo>
          </Reveal>
          <div className="mt-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-start">
            {/* la cita destacada, en grande */}
            <Reveal>
              <blockquote>
                <svg viewBox="0 0 40 30" className="w-9 h-7 mb-5" aria-hidden="true">
                  <path d="M0 30 V16 C0 6 6 1 15 0 l1.5 5 C11 6.5 8 9.5 8 14 h8 v16 Z M24 30 V16 C24 6 30 1 39 0 l1.5 5 C35 6.5 32 9.5 32 14 h8 v16 Z" fill={C.coral} />
                </svg>
                <p
                  className={`${display.className} leading-[1.14] text-[clamp(1.65rem,5vw,2.9rem)]`}
                  style={{ color: C.crema }}
                >
                  “{REVIEWS[0].text}”
                </p>
                <footer className="mt-5">
                  <p className="text-sm font-bold tracking-[0.06em]" style={{ color: 'rgba(244,238,227,0.72)' }}>
                    {REVIEWS[0].name}
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: 'rgba(244,238,227,0.45)' }}>
                    Opinión en Google
                  </p>
                </footer>
              </blockquote>
            </Reveal>
            {/* dos etiquetas con cordel, ladeadas */}
            <div className="flex flex-col gap-9 sm:flex-row lg:flex-col sm:gap-6 lg:gap-10">
              {[REVIEWS[1], REVIEWS[2]].map((r, i) => (
                <Reveal key={r.name} delay={120 + i * 120} className="flex-1">
                  <Etiqueta
                    style={{ transform: `rotate(${i === 0 ? '-1.4deg' : '1.3deg'})` }}
                    innerStyle={{
                      backgroundColor: C.crema2,
                      border: `1px solid rgba(183,129,75,0.6)`,
                      boxShadow: '0 14px 30px rgba(0,0,0,0.3)',
                    }}
                  >
                    <blockquote>
                      <p className="text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                        “{r.text}”
                      </p>
                      <footer className="mt-4">
                        <p className="text-sm font-bold tracking-[0.06em]" style={{ color: C.tinta }}>
                          {r.name}
                        </p>
                        <p className="text-[10px] uppercase tracking-[0.18em] mt-1" style={{ color: C.mutC }}>
                          Opinión en Google
                        </p>
                      </footer>
                    </blockquote>
                  </Etiqueta>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Dónde estamos ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.azul} lineColor="rgba(30,63,214,0.45)">
                Dónde estamos
              </Rotulo>
              <h2
                className={`${display.className} mt-4 leading-[1.03] tracking-[-0.015em] text-[clamp(2.3rem,6.5vw,4rem)]`}
                style={{ color: C.tinta }}
              >
                {BIZ.address},{' '}
                <em style={{ color: C.coral }}>{BIZ.city}</em>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutC }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.tinta, textDecorationColor: 'rgba(217,54,43,0.45)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex text-sm font-bold underline underline-offset-4 decoration-1 tap-44"
                style={{ color: C.coralOsc, textDecorationColor: 'rgba(176,42,32,0.4)' }}
              >
                Consulta el horario por WhatsApp
              </a>
              <div className="mt-7 flex flex-wrap gap-3">
                <Btn href={MAPS_URL} tone="tinta">
                  Cómo llegar
                </Btn>
                <Btn href={WA_LINK} tone="coral">
                  <WaIcon />
                  Escríbenos
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div>
              <CuelgaMini />
              <div
                className="relative -mt-[8px] w-full overflow-hidden rounded-2xl aspect-[4/3] min-h-[300px]"
                style={{ border: `1.5px solid ${C.lineC}`, boxShadow: '0 18px 44px rgba(18,18,18,0.14)', backgroundColor: C.crema2 }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                {/* En iframes anchos Maps superpone su ficha (con nota y otra
                    numeración): esta tarjeta propia la cubre con la dirección
                    correcta y el enlace de cómo llegar. */}
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden lg:flex absolute left-4 top-4 z-10 flex-col rounded-xl px-5 py-4 tap-44x"
                  style={{
                    backgroundColor: C.crema2,
                    border: `1px solid ${C.lineC}`,
                    boxShadow: '0 10px 26px rgba(18,18,18,0.22)',
                    minWidth: 264,
                    minHeight: 158,
                  }}
                >
                  <span className={`${display.className} text-[22px] leading-tight`} style={{ color: C.tinta }}>
                    {BIZ.name}
                  </span>
                  <span className="mt-1.5 text-sm font-semibold leading-snug" style={{ color: C.tinta }}>
                    {BIZ.address}, {BIZ.city}
                  </span>
                  <span className="text-xs leading-snug" style={{ color: C.mutC }}>
                    {BIZ.region}, Chile
                  </span>
                  <span
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em]"
                    style={{ color: C.coralOsc }}
                  >
                    Cómo llegar
                    <svg viewBox="0 0 12 12" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
                      <path d="M2.5 9.5 L9.5 2.5 M4 2.5 h5.5 V8" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Cierre coral ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.coral }}>
        <div
          className="absolute inset-x-0 top-0 h-[3px]"
          style={{ background: BRASS }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Percha className="w-10 h-6 mx-auto mb-6" color={C.crema} />
            <h2
              className={`${display.className} leading-[1.02] tracking-[-0.015em] text-[clamp(2.5rem,8vw,4.8rem)]`}
              style={{ color: '#FFFFFF' }}
            >
              Tu próximo color <em>te espera.</em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: '#FFFFFF' }}>
              Escríbenos por WhatsApp, consulta el valor y las tallas de la
              prenda que te gustó y ven por ella a El Alba.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Btn href={WA_LINK} tone="crema">
                <WaIcon />
                Escríbenos por WhatsApp
              </Btn>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-3 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: '#FFFFFF', textDecorationColor: 'rgba(255,255,255,0.5)' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer compacto ── */}
      <footer className="bo-dark" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-xl md:text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(244,238,227,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,238,227,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(244,238,227,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,238,227,0.6)' }}>
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
                style={{ color: '#FFFFFF' }}
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
