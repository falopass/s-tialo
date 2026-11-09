import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_PAISAJISMO, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Fraunces para los titulares (su suavidad orgánica, en peso alto) y
// Karla para el texto corrido.
const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// La paleta sale de sus fotos: musgo del follaje, verde brote de las
// hileras nuevas, salvia de los arbustos plateados, rojo berberis como
// acento mínimo y crema de papel.
const C = {
  papel: '#F5F1E6',
  papel2: '#ECE5D3',
  musgo: '#2F4A24',
  musgoBajo: '#22361A',
  brote: '#8DB33A',
  broteOsc: '#4C6419', // verde legible sobre crema y crema2 (~5.3:1)
  salvia: '#A9C1C4',
  berberis: '#8E2433',
  mutC: '#4C6340', // musgo atenuado sólido (~5.9:1 sobre crema)
  mutD: '#C6C2AE', // crema atenuada sólida (~5.6:1 sobre musgo)
  lineC: 'rgba(47,74,36,0.18)',
  lineD: 'rgba(245,241,230,0.22)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-molco',
  title: 'Vivero Molco · Vivero y paisajismo en Villarrica',
  description:
    'Vivero y paisajismo en Villarrica, La Araucanía. Plantas, árboles y arbustos de producción propia, suculentas y cactus, y un recorrido guiado para elegir con calma. 4,9 en Google. Coordina tu visita por WhatsApp.',
  image: `${IMG}/jardin-colores.webp`,
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Visítanos', href: '#visita' },
]

/** Rótulo de sección: versalita con una mini hilera de tres surcos. */
function Rotulo({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  const color = light ? C.salvia : C.broteOsc
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5"
      style={{ color }}
    >
      <svg viewBox="0 0 30 12" className="w-[26px] h-[10px] shrink-0" fill="none" aria-hidden="true">
        <path d="M1 11 L9 1" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 11 L17 1" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
        <path d="M21 11 L25 1" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {children}
    </p>
  )
}

/** Surcos en perspectiva: el motivo de las hileras, como divisor y fondo. */
function Surcos({
  className = '',
  color = C.brote,
  opacity = 0.4,
}: {
  className?: string
  color?: string
  opacity?: number
}) {
  const xs = [-160, 40, 240, 440, 640, 840, 1040, 1240, 1440]
  return (
    <svg
      viewBox="0 0 1280 220"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {xs.map((x) => (
        <path
          key={x}
          d={`M${x} 220 L${640 + (x - 640) * 0.09} 8`}
          stroke={color}
          strokeOpacity={opacity}
          strokeWidth="1.4"
        />
      ))}
      <path d="M0 219.5 L1280 219.5" stroke={color} strokeOpacity={opacity} strokeWidth="1.4" />
    </svg>
  )
}

/**
 * Las hileras que brotan: seis filas de brotes en perspectiva que crecen
 * desde el suelo una tras otra, de la más lejana a la más cercana, como
 * un vivero despertando. Los brotes cercanos son más grandes y verdes;
 * los lejanos, más chicos y salvia.
 */
function HilerasBrotan({ className = '' }: { className?: string }) {
  // y = base de la fila en el viewBox (0 0 1200 260); s = escala del brote.
  const filas = [
    { y: 100, s: 0.42, n: 13, c: C.salvia, o: 0.55 },
    { y: 126, s: 0.55, n: 12, c: C.salvia, o: 0.7 },
    { y: 154, s: 0.7, n: 11, c: C.brote, o: 0.8 },
    { y: 184, s: 0.86, n: 10, c: C.brote, o: 0.9 },
    { y: 218, s: 1.05, n: 9, c: C.brote, o: 1 },
    { y: 248, s: 1.25, n: 8, c: C.brote, o: 1 },
  ]
  return (
    <svg
      viewBox="0 0 1200 260"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      {filas.map((f, fi) => {
        const half = 130 + f.s * 330
        return (
          <g
            key={fi}
            className="vm-hilera"
            style={{ '--vm-d': `${0.25 + fi * 0.16}s` } as CSSProperties}
          >
            <path
              d={`M${600 - half} ${f.y + 3} L${600 + half} ${f.y + 3}`}
              stroke={f.c}
              strokeOpacity={f.o * 0.4}
              strokeWidth={2 * f.s}
              strokeLinecap="round"
            />
            {Array.from({ length: f.n }).map((_, i) => {
              const x =
                600 - half * 0.94 + (i * (2 * half * 0.94)) / (f.n - 1) + (((i * 37 + fi * 11) % 13) - 6) * f.s
              const sv = f.s * (0.85 + (((i * 53 + fi * 7) % 10) / 32))
              return (
                <g key={i} transform={`translate(${x.toFixed(1)} ${f.y}) scale(${sv.toFixed(2)})`}>
                  <path
                    d="M0 1 C 0.8 -6 0.8 -11 0 -16"
                    stroke={f.c}
                    strokeOpacity={f.o}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                  />
                  <ellipse
                    cx="-5.6"
                    cy="-13.5"
                    rx="5.6"
                    ry="2.8"
                    transform="rotate(-28 -5.6 -13.5)"
                    fill={f.c}
                    fillOpacity={f.o}
                  />
                  <ellipse
                    cx="5.6"
                    cy="-16.5"
                    rx="5.6"
                    ry="2.8"
                    transform="rotate(26 5.6 -16.5)"
                    fill={f.c}
                    fillOpacity={f.o}
                  />
                </g>
              )
            })}
          </g>
        )
      })}
    </svg>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.brote,
  ink = C.musgoBajo,
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
      className="vm-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

const ENCUENTRAS = [
  {
    n: '01',
    name: 'Plantas, árboles y arbustos',
    desc: 'La variedad es lo primero que se nota: plantas de todo tipo, árboles y arbustos de colores, criados en sus propias hileras.',
    src: `${IMG}/parque.webp`,
    w: 1200,
    h: 676,
    alt: 'Parque del vivero con árboles grandes y arbustos plateados',
  },
  {
    n: '02',
    name: 'Suculentas y cactus',
    desc: 'Dentro del invernadero, maceteros de suculentas y cactus ordenados uno por uno, listos para llevar.',
    src: `${IMG}/cactus.webp`,
    w: 900,
    h: 1200,
    alt: 'Cactus en maceteros turquesa ordenados dentro del invernadero',
  },
  {
    n: '03',
    name: 'Colores de temporada',
    desc: 'Brezos y arbustos que cambian el color del jardín en cada temporada.',
    src: `${IMG}/brezos.webp`,
    w: 720,
    h: 404,
    alt: 'Brezos de colores en macetas',
  },
]

const PARADAS = [
  {
    n: '01',
    name: 'La laguna',
    desc: 'El paseo parte junto al agua, entre el jardín que rodea la laguna y sus nenúfares.',
    src: `${IMG}/laguna.webp`,
    w: 1200,
    h: 676,
    alt: 'Laguna rodeada de jardín y árboles en el vivero',
    inset: {
      src: `${IMG}/nenufares.webp`,
      w: 720,
      h: 404,
      alt: 'Nenúfares flotando en la laguna',
    },
  },
  {
    n: '02',
    name: 'El invernadero',
    desc: 'Después se entra al invernadero, donde los maceteros de suculentas esperan en fila.',
    src: `${IMG}/suculentas.webp`,
    w: 900,
    h: 1200,
    alt: 'Suculentas en maceteros dentro del invernadero',
  },
  {
    n: '03',
    name: 'Las hileras',
    desc: 'Y termina en las hileras de producción, eligiendo la planta que te vas a llevar.',
    src: `${IMG}/hileras-rojas.webp`,
    w: 1200,
    h: 676,
    alt: 'Hileras de plantas rojas y verdes en producción',
  },
]

export default function ViveroMolcoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.musgo }}
    >
      <style>{`
        /* «Hileras que brotan»: cada fila crece desde el suelo, de la más
           lejana a la más cercana, como el vivero despertando. */
        @keyframes vm-brote {
          from { transform: scaleY(0); opacity: 0 }
          to { transform: scaleY(1); opacity: 1 }
        }
        .vm-hilera { transform-box: fill-box; transform-origin: 50% 100%; opacity: 0; animation: vm-brote .58s cubic-bezier(.3,.8,.3,1) both; animation-delay: var(--vm-d, 0s) }

        /* Terminada la siembra, la foto del jardín se revela subiendo
           desde el suelo. */
        @keyframes vm-foto {
          from { clip-path: inset(100% 0 0 0) }
          to { clip-path: inset(0 0 0 0) }
        }
        .vm-foto { animation: vm-foto 1.25s cubic-bezier(.5,.05,.25,1) .8s both }

        /* Portada: el titular sube por líneas; el resto aparece suave. */
        @keyframes vm-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .vm-linea { display: block; animation: vm-linea .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--vm-d, 0s) }
        @keyframes vm-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .vm-sube { animation: vm-sube .9s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--vm-d, 0s) }

        /* El sendero del recorrido se dibuja a medida que bajas. */
        @supports (animation-timeline: view()) {
          .vm-sendero { clip-path: inset(0 0 100% 0); animation: vm-sendero linear both; animation-timeline: view(); animation-range: entry 5% cover 80% }
          @keyframes vm-sendero { to { clip-path: inset(0 0 0% 0) } }
        }

        .vm-btn { transition: transform .18s ease, filter .18s ease }
        .vm-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .vm-btn:active { transform: scale(.97) }
        .vm-page a:focus-visible { outline: 3px solid ${C.brote}; outline-offset: 3px }
        .vm-page a:focus:not(:focus-visible) { outline: none }
        .vm-zoom { overflow: hidden }
        .vm-zoom .vm-img { transition: transform .8s cubic-bezier(.2,.6,.2,1) }
        .vm-zoom:hover .vm-img { transform: scale(1.035) }

        @media (prefers-reduced-motion: reduce) {
          .vm-hilera, .vm-foto, .vm-linea, .vm-sube { animation: none !important }
          .vm-hilera { opacity: 1 !important }
          .vm-foto { clip-path: none !important }
          .vm-sendero { clip-path: none !important; animation: none !important }
          .vm-btn, .vm-img { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.02em]">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Coordina tu visita"
        theme={{
          over: 'dark',
          bar: 'rgba(245,241,230,0.94)',
          ink: C.musgo,
          line: C.lineC,
          btnBg: C.musgo,
          btnInk: C.papel,
        }}
      />

      <div className="vm-page">
        {/* ── 1 · Portada: el vivero despierta ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.musgoBajo }}>
          {/* la foto se revela subiendo desde el suelo */}
          <div className="vm-foto absolute inset-0">
            <Image
              src={`${IMG}/jardin-colores.webp`}
              alt="Jardín del vivero con arbustos redondos verdes, dorados y azules plateados"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '50% 62%' }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(34,54,26,0.52) 0%, rgba(34,54,26,0.18) 38%, rgba(34,54,26,0.42) 68%, rgba(34,54,26,0.78) 100%)',
              }}
              aria-hidden="true"
            />
          </div>

          <div className="relative z-10 flex min-h-[100svh] flex-col max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[128px]">
            <p
              className="vm-sube text-[10px] md:text-xs font-bold uppercase tracking-[0.36em] mb-5 md:mb-7"
              style={{ color: C.salvia, '--vm-d': '0.15s' } as CSSProperties}
            >
              Villarrica · Araucanía
            </p>

            <h1
              className={`${display.className} font-semibold leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,11vw,5.6rem)] max-w-4xl`}
              style={{ color: C.papel }}
              aria-label="Un vivero que se recorre."
            >
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="vm-linea" style={{ '--vm-d': '0.3s' } as CSSProperties}>
                  Un vivero
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.14em]">
                <span className="vm-linea" style={{ '--vm-d': '0.45s' } as CSSProperties}>
                  que <em className="font-medium">se recorre</em>.
                </span>
              </span>
            </h1>

            <p
              className="vm-sube mt-5 md:mt-6 text-[15px] md:text-xl leading-relaxed max-w-md md:max-w-xl"
              style={{ color: 'rgba(245,241,230,0.88)', '--vm-d': '0.8s' } as CSSProperties}
            >
              Plantas, árboles y arbustos de producción propia, y un recorrido
              guiado para elegir con calma.
            </p>

            <div className="vm-sube mt-7 md:mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6" style={{ '--vm-d': '1s' } as CSSProperties}>
              <BtnWa>Coordina tu visita por WhatsApp</BtnWa>
              <p className="flex items-center gap-2.5 text-sm" style={{ color: 'rgba(245,241,230,0.85)' }}>
                <Stars value={BIZ.ratingValue} color={C.brote} size={15} />
                <span>
                  <strong className="font-bold">{BIZ.rating}</strong> · {BIZ.reviews} opiniones en Google
                </span>
              </p>
            </div>

            {/* espacio que ocupan las hileras */}
            <div className="flex-1 min-h-[196px] md:min-h-[240px]" aria-hidden="true" />
          </div>

          {/* las hileras brotan sobre la parte baja del hero */}
          <HilerasBrotan className="absolute bottom-0 inset-x-0 z-20 w-full h-[196px] md:h-[240px] pointer-events-none" />
        </section>

        {/* ── 2 · Lo que encuentras ── */}
        <section id="vivero" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 md:mb-16">
              <Reveal className="md:col-span-7">
                <Rotulo>El vivero</Rotulo>
                <h2
                  className={`${display.className} font-semibold leading-[1.04] text-[clamp(2rem,7vw,3.8rem)]`}
                  style={{ color: C.musgo }}
                >
                  Lo que encuentras
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-2" style={{ color: C.mutC }}>
                  No es una tienda con estantes: es un jardín vivo de
                  Villarrica. Esto es lo que se cultiva aquí.
                </p>
              </Reveal>
            </div>

            {/* 01 · árboles y arbustos: foto ancha + texto al costado */}
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center mb-14 md:mb-24">
              <Reveal className="md:col-span-7">
                <figure className="vm-zoom relative">
                  <Image
                    src={ENCUENTRAS[0].src}
                    alt={ENCUENTRAS[0].alt}
                    width={ENCUENTRAS[0].w}
                    height={ENCUENTRAS[0].h}
                    className="vm-img w-full h-auto object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={140} className="md:col-span-5">
                <p
                  className={`${display.className} font-semibold leading-none text-[4.6rem] md:text-[6rem] -mb-3 md:-mb-5`}
                  style={{ color: 'rgba(141,179,58,0.35)' }}
                  aria-hidden="true"
                >
                  {ENCUENTRAS[0].n}
                </p>
                <h3 className={`${display.className} font-semibold text-2xl md:text-[2rem] leading-tight mb-3`} style={{ color: C.musgo }}>
                  {ENCUENTRAS[0].name}
                </h3>
                <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.mutC }}>
                  {ENCUENTRAS[0].desc}
                </p>
              </Reveal>
            </div>

            {/* 02 y 03 · zigzag editorial con tamaños distintos */}
            <div className="grid md:grid-cols-12 gap-x-6 md:gap-x-10 gap-y-12 md:gap-y-0 items-start">
              <div className="md:col-span-5 md:mt-16">
                <Reveal>
                  <figure className="vm-zoom relative w-[74%] md:w-full ml-auto md:ml-0">
                    <Image
                      src={ENCUENTRAS[1].src}
                      alt={ENCUENTRAS[1].alt}
                      width={ENCUENTRAS[1].w}
                      height={ENCUENTRAS[1].h}
                      className="vm-img w-full h-auto object-cover"
                    />
                  </figure>
                </Reveal>
                <Reveal delay={140}>
                  <div className="mt-5 md:mt-6 md:max-w-[85%]">
                    <p
                      className={`${display.className} font-semibold leading-none text-[3.4rem] md:text-[4.4rem] -mb-2 md:-mb-3`}
                      style={{ color: 'rgba(141,179,58,0.35)' }}
                      aria-hidden="true"
                    >
                      {ENCUENTRAS[1].n}
                    </p>
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl leading-tight mb-2.5`} style={{ color: C.musgo }}>
                      {ENCUENTRAS[1].name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.mutC }}>
                      {ENCUENTRAS[1].desc}
                    </p>
                  </div>
                </Reveal>
              </div>

              <div className="md:col-span-7 md:pl-8">
                <Reveal delay={80}>
                  <div className="md:max-w-[64%]">
                    <p
                      className={`${display.className} font-semibold leading-none text-[3.4rem] md:text-[4.4rem] -mb-2 md:-mb-3`}
                      style={{ color: 'rgba(141,179,58,0.35)' }}
                      aria-hidden="true"
                    >
                      {ENCUENTRAS[2].n}
                    </p>
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl leading-tight mb-2.5`} style={{ color: C.musgo }}>
                      {ENCUENTRAS[2].name}
                    </h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: C.mutC }}>
                      {ENCUENTRAS[2].desc}
                    </p>
                  </div>
                  <figure className="vm-zoom relative w-[62%] md:w-[64%]">
                    <Image
                      src={ENCUENTRAS[2].src}
                      alt={ENCUENTRAS[2].alt}
                      width={ENCUENTRAS[2].w}
                      height={ENCUENTRAS[2].h}
                      className="vm-img w-full h-auto object-cover"
                    />
                  </figure>
                </Reveal>
              </div>
            </div>

            {/* 04 · paisajismo: bloque editorial de texto */}
            <Reveal delay={60}>
              <div
                className="relative mt-16 md:mt-24 overflow-hidden px-6 md:px-12 py-10 md:py-14"
                style={{ backgroundColor: C.papel2 }}
              >
                <Surcos className="absolute inset-x-0 bottom-0 h-[130px] w-full pointer-events-none" color={C.musgo} opacity={0.12} />
                <div className="relative grid md:grid-cols-12 gap-6 md:gap-10 items-center">
                  <div className="md:col-span-7">
                    <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-3" style={{ color: C.berberis }}>
                      04 · Paisajismo
                    </p>
                    <p className={`${display.className} font-semibold text-[1.65rem] md:text-[2.5rem] leading-[1.15]`} style={{ color: C.musgo }}>
                      Además del vivero, <em className="font-medium">hacemos paisajismo</em>.
                    </p>
                  </div>
                  <div className="md:col-span-5">
                    <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.mutC }}>
                      Si tienes un proyecto para tu jardín, cuéntanos por
                      WhatsApp y lo conversamos.
                    </p>
                    <a
                      href={WA_PAISAJISMO}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                      style={{ color: C.musgo, textDecorationColor: C.brote }}
                    >
                      Cuéntanos tu proyecto
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · El recorrido: su diferencial ── */}
        <section id="recorrido" className="scroll-mt-20" style={{ backgroundColor: C.musgo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-12 md:mb-16">
              <Reveal className="md:col-span-7">
                <Rotulo light>El recorrido</Rotulo>
                <h2
                  className={`${display.className} font-semibold leading-[1.06] text-[clamp(2rem,7vw,3.8rem)]`}
                  style={{ color: C.papel }}
                >
                  Aquí no vienes a comprar.
                  <br />
                  <em className="font-medium">Vienes a recorrer.</em>
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-2" style={{ color: C.mutD }}>
                  El dueño te lleva por el lugar, parada a parada, y te muestra
                  lo que crece en cada rincón.
                </p>
              </Reveal>
            </div>

            {/* el sendero: paradas en zigzag unidas por una línea punteada */}
            <div className="relative">
              <div
                className="vm-sendero absolute left-[9px] md:left-1/2 top-2 bottom-6 md:-translate-x-1/2 pointer-events-none"
                style={{ borderLeft: `2px dashed rgba(169,193,196,0.4)` }}
                aria-hidden="true"
              />
              <div className="space-y-14 md:space-y-20 pl-8 md:pl-0">
                {PARADAS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 60}>
                    <div
                      className={`relative grid md:grid-cols-2 gap-5 md:gap-12 items-center ${
                        i % 2 === 1 ? '' : ''
                      }`}
                    >
                      {/* marca de la parada sobre el sendero */}
                      <span
                        className="absolute -left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: C.musgo, border: `2px solid ${C.brote}` }}
                        aria-hidden="true"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.brote }} />
                      </span>
                      <figure className={`vm-zoom relative ${i % 2 === 1 ? 'md:order-2' : ''} ${i % 2 === 1 ? 'w-[86%] ml-auto md:w-full' : 'w-[86%] md:w-full'}`}>
                        <Image
                          src={p.src}
                          alt={p.alt}
                          width={p.w}
                          height={p.h}
                          className="vm-img w-full h-auto object-cover"
                          style={{ border: `1px solid ${C.lineD}` }}
                        />
                        {p.inset && (
                          <Image
                            src={p.inset.src}
                            alt={p.inset.alt}
                            width={p.inset.w}
                            height={p.inset.h}
                            className="absolute -bottom-5 right-3 md:-right-5 w-[38%] h-auto object-cover"
                            style={{ border: `3px solid ${C.musgoBajo}` }}
                          />
                        )}
                      </figure>
                      <div className={i % 2 === 1 ? 'md:order-1 md:text-right' : ''}>
                        <p
                          className={`${display.className} font-semibold leading-none text-[3.4rem] md:text-[4.6rem] -mb-2`}
                          style={{ color: 'rgba(169,193,196,0.3)' }}
                          aria-hidden="true"
                        >
                          {p.n}
                        </p>
                        <h3 className={`${display.className} font-semibold text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.papel }}>
                          {p.name}
                        </h3>
                        <p className={`text-sm md:text-base leading-relaxed ${i % 2 === 1 ? 'md:ml-auto' : ''} max-w-sm`} style={{ color: C.mutD }}>
                          {p.desc}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={100}>
              <p
                className={`${display.className} italic font-medium text-center text-lg md:text-2xl leading-snug mt-14 md:mt-20 max-w-2xl mx-auto`}
                style={{ color: C.salvia }}
              >
                “En cada parada te explican las características y los cuidados
                de cada planta: sales sabiendo qué compraste.”
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · Producción propia ── */}
        <section id="produccion" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
              <div className="md:col-span-5 order-2 md:order-1">
                <Reveal>
                  <Rotulo>Producción propia</Rotulo>
                  <h2
                    className={`${display.className} font-semibold leading-[1.06] text-[clamp(1.9rem,6.4vw,3.4rem)] mb-5`}
                    style={{ color: C.musgo }}
                  >
                    De sus propias
                    <br />
                    <em className="font-medium">hileras.</em>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-sm md:text-base leading-relaxed mb-4 max-w-sm" style={{ color: C.mutC }}>
                    Muchas de las plantas crecen aquí mismo,
                    en estas hileras, al aire del sur.
                  </p>
                  <ul className="space-y-2.5 text-sm md:text-base" style={{ color: C.mutC }}>
                    {[
                      'Plantas, árboles y arbustos',
                      'Suculentas y cactus de invernadero',
                      'Brezos y color de temporada',
                    ].map((t) => (
                      <li key={t} className="flex items-baseline gap-3">
                        <svg viewBox="0 0 14 12" className="w-[12px] h-[10px] shrink-0 translate-y-[1px]" fill="none" aria-hidden="true">
                          <path d="M2 11 L5 1 M6.5 11 L9.5 1 M11 11 L13 3" stroke={C.broteOsc} strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              <div className="md:col-span-7 order-1 md:order-2 relative">
                <Reveal>
                  <figure className="vm-zoom relative w-[88%] md:w-[86%]">
                    <Image
                      src={`${IMG}/campo-hileras.webp`}
                      alt="Campo del vivero con hileras plateadas y el bosque al fondo"
                      width={720}
                      height={720}
                      className="vm-img w-full h-auto object-cover"
                    />
                  </figure>
                  <figure className="vm-zoom relative w-[46%] md:w-[38%] ml-auto -mt-[22%] md:-mt-[18%]">
                    <Image
                      src={`${IMG}/plantas-en-fila.webp`}
                      alt="Arbustos jóvenes plantados en filas"
                      width={676}
                      height={1200}
                      className="vm-img w-full h-auto object-cover"
                      style={{ border: `4px solid ${C.papel}` }}
                    />
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Opiniones: 4,9 en Google ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.85fr_1.4fr] gap-10 lg:gap-16 items-start">
              <Reveal>
                <Rotulo>Opiniones</Rotulo>
                <p className={`${display.className} font-semibold leading-none text-[clamp(4.4rem,17vw,7.4rem)]`} style={{ color: C.musgo }}>
                  {BIZ.rating}
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.ratingValue} color={C.brote} size={20} />
                </div>
                <p className="mt-3 text-sm" style={{ color: C.mutC }}>
                  {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 tap-44"
                  style={{ color: C.musgo, textDecorationColor: C.brote }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-8 md:space-y-10">
                {REVIEWS.map((r, i) => (
                  <Reveal key={r.author} delay={i * 100}>
                    <figure className="border-l-2 pl-6 md:pl-8" style={{ borderColor: i === 0 ? C.berberis : C.brote }}>
                      <blockquote
                        className={`${display.className} italic font-medium text-[15px] md:text-lg leading-relaxed`}
                        style={{ color: C.musgo }}
                      >
                        “{r.text}”
                      </blockquote>
                      <figcaption className="mt-4 text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutC }}>
                        {r.author} · {r.fuente}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Visítanos ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-stretch">
              <div>
                <Reveal>
                  <Rotulo>Visítanos</Rotulo>
                  <h2
                    className={`${display.className} font-semibold leading-[1.08] text-[clamp(1.9rem,6.4vw,3.2rem)] mb-6`}
                    style={{ color: C.musgo }}
                  >
                    Coordina tu visita.
                  </h2>
                </Reveal>
                <Reveal delay={100}>
                  <div
                    className="px-5 py-4 mb-7 border-l-[3px] text-sm md:text-[15px] leading-relaxed"
                    style={{ borderColor: C.berberis, backgroundColor: 'rgba(142,36,51,0.06)', color: C.musgo }}
                  >
                    El vivero está dentro de una propiedad cerrada: escríbenos
                    por WhatsApp antes de venir, coordinamos la hora y te
                    esperamos.
                  </div>
                </Reveal>
                <Reveal delay={160}>
                  <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2.5 mb-8 text-sm md:text-[15px]">
                    {HORARIO.map((h) => (
                      <div key={h.d} className="contents">
                        <dt className="font-bold" style={{ color: C.broteOsc }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.musgo }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.broteOsc }}>
                        Ubicación
                      </dt>
                      <dd style={{ color: C.musgo }}>
                        {BIZ.city}, {BIZ.region} · sector rural
                      </dd>
                    </div>
                    <div className="contents">
                      <dt className="font-bold" style={{ color: C.broteOsc }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={WA_LINK}
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.musgo, textDecorationColor: C.brote }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </Reveal>
                <Reveal delay={220}>
                  <div className="flex flex-wrap items-center gap-4">
                    <BtnWa>Coordina tu visita</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                      style={{ color: C.musgo, textDecorationColor: C.brote }}
                    >
                      Cómo llegar
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={140} className="min-h-[320px]">
                <div
                  className="overflow-hidden h-full min-h-[320px] md:min-h-[420px]"
                  style={{ border: `1.5px solid ${C.lineC}`, backgroundColor: C.papel2 }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[320px] md:min-h-[420px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7 · Cierre: te esperamos entre las hileras ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.musgoBajo }}>
          <Surcos className="absolute inset-x-0 bottom-0 h-[220px] w-full pointer-events-none" color={C.brote} opacity={0.16} />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <h2
                className={`${display.className} font-semibold leading-[1.1] text-[clamp(1.9rem,6.6vw,3.6rem)] mb-5`}
                style={{ color: C.papel }}
              >
                Te esperamos
                <br />
                <em className="font-medium">entre las hileras.</em>
              </h2>
              <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutD }}>
                Todos los días de 9:00 a 18:00, en el sector rural de
                Villarrica. Escríbenos y coordinamos tu visita.
              </p>
              <BtnWa>Coordina tu visita por WhatsApp</BtnWa>
            </Reveal>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.musgoBajo, color: C.papel }}>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
              <p className={`${display.className} font-semibold text-lg`} style={{ color: C.papel }}>
                {BIZ.name}
              </p>
              <div className="text-xs leading-relaxed" style={{ color: C.mutD }}>
                <p>
                  {BIZ.rubro} · {BIZ.city}, {BIZ.region} ·{' '}
                  <a href={WA_LINK} className="underline underline-offset-2 whitespace-nowrap tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p>Todos los días de 9:00 a 18:00</p>
              </div>
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.salvia }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.salvia }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
