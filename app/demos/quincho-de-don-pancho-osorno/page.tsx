import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, RESENAS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})

// «Fuego, carne y casa de amigos»: carbón del rescoldo, brasa encendida,
// arena de madera clara, humo y un detalle de cebollín. brasaOsc es la
// brasa oscurecida que da 5,9:1 con texto blanco en los botones.
const C = {
  carbon: '#1B1612',
  carbonBajo: '#120E0A',
  brasa: '#E4572E',
  brasaOsc: '#B23A17',
  arena: '#F2E6D3',
  humo: '#8A7F73',
  cebollin: '#6B8F3A',
  mutD: 'rgba(242,230,211,0.74)',
  mutL: 'rgba(27,22,18,0.66)',
  lineD: 'rgba(242,230,211,0.16)',
  lineL: 'rgba(27,22,18,0.14)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'quincho-de-don-pancho-osorno',
  title: 'Quincho de Don Pancho · Quincho y centro de eventos en Osorno',
  description:
    'Quincho de Don Pancho (Don Pancho BBQ), recinto para eventos en Las Pesebreras 19, Osorno: asado a las brasas con calor de casa de amigos. 4,9 en Google. Consulta por WhatsApp.',
  image: `${IMG}/cocina-parrilla.webp`,
})

const NAV_LINKS = [
  { label: 'El fuego', href: '#fuego' },
  { label: 'El oficio', href: '#oficio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Chispas de brasa que suben del fuego: posición, tamaño y ritmo fijos. */
const CHISPAS = [
  { x: 4, y: 8, s: 4, dur: 5.4, del: 0.1, dx: 26, dy: -240, c: '#E4572E' },
  { x: 10, y: 14, s: 3, dur: 6.2, del: 1.6, dx: -18, dy: -190, c: '#F2E6D3' },
  { x: 17, y: 5, s: 5, dur: 4.6, del: 2.4, dx: 34, dy: -260, c: '#E4572E' },
  { x: 26, y: 11, s: 3, dur: 6.6, del: 0.8, dx: -24, dy: -175, c: '#E4572E' },
  { x: 34, y: 7, s: 4, dur: 5.1, del: 3.2, dx: 16, dy: -230, c: '#F2E6D3' },
  { x: 44, y: 13, s: 3, dur: 5.8, del: 0.4, dx: -28, dy: -205, c: '#E4572E' },
  { x: 53, y: 6, s: 5, dur: 4.9, del: 2.0, dx: 22, dy: -250, c: '#E4572E' },
  { x: 62, y: 12, s: 3, dur: 6.3, del: 1.1, dx: -20, dy: -185, c: '#F2E6D3' },
  { x: 71, y: 8, s: 4, dur: 5.0, del: 2.9, dx: 30, dy: -225, c: '#E4572E' },
  { x: 80, y: 4, s: 3, dur: 6.8, del: 0.6, dx: -26, dy: -195, c: '#E4572E' },
  { x: 88, y: 10, s: 4, dur: 5.5, del: 3.6, dx: 20, dy: -240, c: '#F2E6D3' },
  { x: 94, y: 6, s: 3, dur: 6.0, del: 1.9, dx: -16, dy: -180, c: '#E4572E' },
  { x: 22, y: 20, s: 3, dur: 5.7, del: 4.1, dx: 24, dy: -170, c: '#E4572E' },
  { x: 68, y: 22, s: 4, dur: 4.7, del: 0.9, dx: -22, dy: -215, c: '#E4572E' },
] as const

/** La parrilla: barras paralelas finas, el motivo de la casa. */
function ParrillaMark({
  className = 'w-[22px] h-[16px]',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg viewBox="0 0 22 16" className={className} fill="none" aria-hidden="true">
      {[2, 6, 10, 14].map((y) => (
        <line key={y} x1="1" y1={y} x2="21" y2={y} stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      ))}
    </svg>
  )
}

/** Punto de brasa: viñeta y detalle. */
function Ascua({ className = 'w-2 h-2', color = C.brasa }: { className?: string; color?: string }) {
  return (
    <span
      className={`inline-block rounded-full shrink-0 ${className}`}
      style={{ backgroundColor: color, boxShadow: `0 0 8px 1px ${color}` }}
      aria-hidden="true"
    />
  )
}

/** Líneas de calor onduladas que suben, como el aire sobre las brasas. */
function Calor({ className = '', color = C.brasa }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} fill="none" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${8 + i * 20} 36 C ${4 + i * 20} 28, ${14 + i * 20} 22, ${10 + i * 20} 14 C ${7 + i * 20} 8, ${12 + i * 20} 5, ${10 + i * 20} 1`}
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          opacity={0.9 - i * 0.25}
        />
      ))}
    </svg>
  )
}

/** Separador: una barra de parrilla al centro entre dos líneas. */
function CorteParrilla({ color, bg }: { color: string; bg: string }) {
  return (
    <div className="relative h-10 flex items-center justify-center" style={{ backgroundColor: bg }} aria-hidden="true">
      <span className="absolute left-5 right-5 md:left-8 md:right-8 h-px" style={{ backgroundColor: color }} />
      <span className="relative px-4" style={{ backgroundColor: bg }}>
        <ParrillaMark color={color} className="w-[26px] h-[18px]" />
      </span>
    </div>
  )
}

function Rotulo({
  children,
  color,
  markColor,
}: {
  children: React.ReactNode
  color: string
  markColor?: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color }}
    >
      <ParrillaMark color={markColor ?? color} className="w-[22px] h-[16px] shrink-0" />
      {children}
    </p>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  tone = 'brasa',
}: {
  children: React.ReactNode
  href?: string
  tone?: 'brasa' | 'carbon' | 'linea' | 'lineaD'
}) {
  const st: CSSProperties =
    tone === 'brasa'
      ? { backgroundColor: C.brasaOsc, color: '#fff' }
      : tone === 'carbon'
        ? { backgroundColor: C.carbon, color: C.arena }
        : tone === 'linea'
          ? { border: `1.5px solid ${C.carbon}`, color: C.carbon }
          : { border: '1.5px solid rgba(242,230,211,0.55)', color: C.arena }
  return (
    <a
      href={href}
      target={href.startsWith('#') ? undefined : '_blank'}
      rel={href.startsWith('#') ? undefined : 'noopener noreferrer'}
      className="qp-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-base font-bold tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function WaIcon({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

export default function QuinchoDeDonPanchoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.arena, color: C.carbon }}
    >
      <style>{`
        /* «Se enciende la brasa»: el hero parte casi negro, la foto
           emerge del carbón con un leve scale y el titular entra por
           palabras sobre una línea incandescente que se abre. */
        @keyframes qp-foto {
          from { opacity: 0; transform: scale(1.07) }
          to { opacity: 1; transform: scale(1) }
        }
        .qp-foto { animation: qp-foto 1.6s cubic-bezier(.3,.6,.3,1) 1s both }

        @keyframes qp-linea {
          from { transform: scaleX(0); opacity: .4 }
          to { transform: scaleX(1); opacity: 1 }
        }
        .qp-linea { transform-origin: left center; animation: qp-linea 1s cubic-bezier(.7,.1,.2,1) .6s both }

        @keyframes qp-palabra {
          from { opacity: 0; transform: translateY(30px) }
          to { opacity: 1; transform: none }
        }
        .qp-palabra { display: inline-block; animation: qp-palabra .85s cubic-bezier(.2,.65,.2,1) both; animation-delay: var(--d, 0s) }

        @keyframes qp-chispa {
          0% { transform: translate(0, 0) scale(1); opacity: 0 }
          12% { opacity: .95 }
          60% { opacity: .55 }
          100% { transform: translate(var(--dx, 20px), var(--dy, -200px)) scale(.4); opacity: 0 }
        }
        .qp-chispa { position: absolute; border-radius: 9999px; animation: qp-chispa var(--dur, 5s) linear infinite; animation-delay: var(--del, 0s); will-change: transform, opacity }

        @keyframes qp-fade { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .qp-fade { animation: qp-fade .9s ease-out both; animation-delay: var(--d, 0s) }

        /* Las fotos se descubren como se descubre la parrilla: de izquierda
           a derecha, con un clip al bajar por la página. */
        @supports (animation-timeline: view()) {
          .qp-wipe { clip-path: inset(0 100% 0 0); animation: qp-wipe linear both; animation-timeline: view(); animation-range: entry 4% entry 62% }
          @keyframes qp-wipe { to { clip-path: inset(0 0 0 0) } }
          .qp-zoom { transform: scale(1.07); animation: qp-zoom linear both; animation-timeline: view(); animation-range: entry 4% entry 85% }
          @keyframes qp-zoom { to { transform: scale(1) } }

          /* Las citas se avivan como ascuas: aparecen una a una con un
             mínimo de scale. */
          .qp-ascua { opacity: 0; transform: scale(.96); animation: qp-ascua linear both; animation-timeline: view(); animation-range: entry 6% entry 58% }
          @keyframes qp-ascua { to { opacity: 1; transform: scale(1) } }
        }

        .qp-btn { transition: transform .18s ease, filter .18s ease }
        .qp-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .qp-btn:active { transform: scale(.97) }
        .qp-btn:focus-visible { outline: 3px solid ${C.brasa}; outline-offset: 3px }
        .qp-page a:focus-visible { outline: 3px solid ${C.brasa}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .qp-foto, .qp-linea, .qp-palabra, .qp-fade { animation: none !important }
          .qp-chispa { display: none !important }
          .qp-wipe { clip-path: none !important; animation: none !important }
          .qp-zoom { transform: none !important; animation: none !important }
          .qp-ascua { opacity: 1 !important; transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-lg md:text-xl tracking-[0.08em] uppercase`}>
            Don Pancho BBQ
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Consulta"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(18,14,10,0.94)',
          ink: C.arena,
          line: C.lineD,
          btnBg: C.brasaOsc,
          btnInk: '#fff',
        }}
      />

      <div className="qp-page">
        {/* ── 1 · Hero: se enciende la brasa ── */}
        <section
          id="inicio"
          className="relative min-h-svh flex flex-col justify-end overflow-hidden"
          style={{ backgroundColor: C.carbonBajo }}
        >
          {/* La cocina del parrillero emerge del carbón */}
          <div className="qp-foto absolute inset-0">
            <Image
              src={`${IMG}/cocina-parrilla.webp`}
              alt="El parrillero de Quincho de Don Pancho en su cocina rústica, con la bandeja de carnes y verduras lista para las brasas"
              fill
              priority
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: '50% 42%' }}
            />
          </div>
          {/* Velo: el negro respira arriba y cierra abajo para el texto */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,14,10,0.62) 0%, rgba(18,14,10,0.28) 40%, rgba(18,14,10,0.92) 88%)',
            }}
            aria-hidden="true"
          />
          {/* Chispas que suben del fuego */}
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            {CHISPAS.map((s, i) => (
              <span
                key={i}
                className="qp-chispa"
                style={
                  {
                    left: `${s.x}%`,
                    bottom: `${s.y}%`,
                    width: s.s,
                    height: s.s,
                    backgroundColor: s.c,
                    boxShadow: `0 0 9px 2px ${s.c === '#E4572E' ? 'rgba(228,87,46,0.75)' : 'rgba(242,230,211,0.5)'}`,
                    '--dur': `${s.dur}s`,
                    '--del': `${s.del}s`,
                    '--dx': `${s.dx}px`,
                    '--dy': `${s.dy}px`,
                  } as CSSProperties
                }
              />
            ))}
          </div>

          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-8 md:pb-12 pt-32">
            <p
              className="qp-fade flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-6"
              style={{ color: C.brasa, '--d': '0.25s' } as CSSProperties}
            >
              <ParrillaMark color={C.brasa} className="w-[22px] h-[16px] shrink-0" />
              Las Pesebreras 19 · Osorno
            </p>

            <h1
              className={`${display.className} uppercase leading-[0.94] tracking-[0.005em] text-[clamp(3.1rem,12.5vw,6.8rem)]`}
              style={{ color: C.arena }}
            >
              <span className="block">
                <span className="qp-palabra" style={{ '--d': '0.4s' } as CSSProperties}>Carne</span>{' '}
                <span className="qp-palabra" style={{ '--d': '0.5s' } as CSSProperties}>a</span>{' '}
                <span className="qp-palabra" style={{ '--d': '0.6s' } as CSSProperties}>las</span>
              </span>
              <span className="block" style={{ color: C.brasa }}>
                <span className="qp-palabra" style={{ '--d': '0.72s' } as CSSProperties}>brasas,</span>
              </span>
              <span className="block">
                <span className="qp-palabra" style={{ '--d': '0.86s' } as CSSProperties}>como</span>{' '}
                <span className="qp-palabra" style={{ '--d': '0.96s' } as CSSProperties}>en</span>{' '}
                <span className="qp-palabra" style={{ '--d': '1.06s' } as CSSProperties}>casa.</span>
              </span>
            </h1>

            {/* la línea incandescente que se abre bajo el titular */}
            <div
              className="qp-linea mt-4 h-[3px] w-[min(340px,64vw)] rounded-full"
              style={{
                background:
                  'linear-gradient(90deg, rgba(228,87,46,0) 0%, #E4572E 22%, #F2E6D3 52%, #E4572E 78%, rgba(228,87,46,0) 100%)',
                boxShadow: '0 0 14px 2px rgba(228,87,46,0.55)',
              }}
              aria-hidden="true"
            />

            <p
              className="qp-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: 'rgba(242,230,211,0.9)', '--d': '1.25s' } as CSSProperties}
            >
              Recinto para eventos en Osorno: asado a las brasas, leña
              y el ambiente de la casa de un amigo.
            </p>

            <div className="qp-fade mt-7 flex flex-wrap items-center gap-3" style={{ '--d': '1.4s' } as CSSProperties}>
              <BtnWa>
                <WaIcon />
                Consulta por WhatsApp
              </BtnWa>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 tap-44 px-2 py-2"
                style={{ color: 'rgba(242,230,211,0.85)' }}
              >
                <Stars value={BIZ.ratingValue} color={C.brasa} size={16} />
                <span className="text-sm" style={{ color: 'rgba(242,230,211,0.85)' }}>
                  <strong className="font-bold" style={{ color: C.arena }}>{BIZ.rating}</strong>
                  {' '}· {BIZ.reviews} opiniones en Google
                </span>
              </a>
            </div>
          </div>

          {/* tira de parrilla al pie del hero */}
          <div
            className="relative h-3 opacity-70"
            style={{
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(228,87,46,0.55) 0 2px, transparent 2px 14px)',
            }}
            aria-hidden="true"
          />
        </section>

        {/* ── 2 · El fuego: leña, brasa y parrilla ── */}
        <section id="fuego" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.arena }}>
          <Calor className="absolute top-10 right-6 md:right-16 w-12 h-9 opacity-60" color={C.brasa} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
              <div>
                <Reveal>
                  <Rotulo color={C.brasaOsc}>A las brasas</Rotulo>
                  <h2
                    className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,7vw,4.6rem)]`}
                    style={{ color: C.carbon }}
                  >
                    Leña, brasa
                    <br />
                    y <span style={{ color: C.brasaOsc }}>parrilla.</span>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                    <p>
                      Aquí el asado se hace a las brasas: leña apilada,
                      carbón y la parrilla al fuego, con carne y cebollines
                      sobre las brasas.
                    </p>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {['Asado a las brasas', 'Leña y carbón', 'Cebollines al rescoldo'].map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm md:text-base font-bold uppercase tracking-[0.14em]" style={{ color: C.carbon }}>
                        <Ascua className="w-2.5 h-2.5" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>

              {/* Composición de fuego: panorámica con dos verticales encima */}
              <div>
                <figure className="qp-wipe relative">
                  <div className="relative aspect-[3/2] overflow-hidden rounded-2xl" style={{ boxShadow: '0 24px 56px rgba(27,22,18,0.22)' }}>
                    <Image
                      src={`${IMG}/asador-lago.webp`}
                      alt="Cordero al palo en el asador junto al lago, entre árboles"
                      fill
                      sizes="(min-width: 1024px) 52vw, 100vw"
                      className="qp-zoom object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutL }}>
                    Cordero al palo junto al agua
                  </figcaption>
                </figure>
                <div className="flex items-end gap-4 md:gap-6 -mt-14 md:-mt-24 px-4 md:px-8 relative">
                  <figure className="w-[46%] shrink-0">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-xl" style={{ border: `4px solid ${C.arena}`, boxShadow: '0 16px 40px rgba(27,22,18,0.28)' }}>
                      <Image
                        src={`${IMG}/carne-parrilla.webp`}
                        alt="Costillares dorándose en la parrilla de noche"
                        fill
                        sizes="(min-width: 1024px) 24vw, 46vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutL }}>
                      Los costillares, dorándose
                    </figcaption>
                  </figure>
                  <figure className="w-[36%] shrink-0 mb-8 md:mb-14">
                    <div className="relative aspect-[9/16] overflow-hidden rounded-xl" style={{ border: `4px solid ${C.arena}`, boxShadow: '0 16px 40px rgba(27,22,18,0.28)' }}>
                      <Image
                        src={`${IMG}/cebollines.webp`}
                        alt="Cebollines sobre las brasas"
                        fill
                        sizes="(min-width: 1024px) 18vw, 36vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutL }}>
                      Cebollines al rescoldo
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CorteParrilla color="rgba(27,22,18,0.3)" bg={C.arena} />

        {/* ── 3 · El oficio: herramientas del parrillero ── */}
        <section id="oficio" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-end mb-10 md:mb-14">
              <Reveal>
                <Rotulo color={C.brasa}>El oficio</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,7vw,4.6rem)]`}
                  style={{ color: C.arena }}
                >
                  Herramientas
                  <br />
                  del <span style={{ color: C.brasa }}>parrillero.</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md lg:ml-auto" style={{ color: C.mutD }}>
                  Cuchillos alineados en el mesón, la leña lista y el
                  carbón a mano. Antes de la mesa está el fuego, y antes
                  del fuego, el oficio.
                </p>
              </Reveal>
            </div>

            {/* grilla rota: las piezas caen como sobre el mesón */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
              <Reveal className="col-span-2 lg:col-span-7">
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/cuchillos.webp`}
                      alt="Cuchillos de parrillero alineados sobre el mesón de madera"
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(242,230,211,0.62)' }}>
                    Cuchillos de parrillero
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={90} className="lg:col-span-5 lg:mt-14">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/lena.webp`}
                      alt="Pila de leña con pampas decorativas y zapallos"
                      fill
                      sizes="(min-width: 1024px) 38vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(242,230,211,0.62)' }}>
                    La leña, lista
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={140} className="lg:col-span-5 lg:-mt-8 mt-6">
                <figure>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/barril-carbon.webp`}
                      alt="Barril con el letrero carbón y el logo del bigote de Don Pancho"
                      fill
                      sizes="(min-width: 1024px) 38vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(242,230,211,0.62)' }}>
                    El carbón de la casa
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={180} className="lg:col-span-7">
                <figure>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.lineD}` }}>
                    <Image
                      src={`${IMG}/tabla-carnes.webp`}
                      alt="Bandeja de carnes y verduras frente a la parrilla"
                      fill
                      sizes="(min-width: 1024px) 55vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em]" style={{ color: 'rgba(242,230,211,0.62)' }}>
                    La bandeja, al fuego
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · Opiniones: las ascuas se avivan ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <Reveal>
                <Rotulo color={C.brasaOsc}>Opiniones</Rotulo>
                <p
                  className={`${display.className} leading-none text-[clamp(5rem,18vw,9rem)]`}
                  style={{ color: C.carbon }}
                >
                  {BIZ.rating}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <Stars value={BIZ.ratingValue} color={C.brasaOsc} size={18} />
                </div>
                <p className="mt-3 text-sm font-bold uppercase tracking-[0.18em]" style={{ color: C.mutL }}>
                  {BIZ.reviews} opiniones en Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.brasaOsc, textDecorationColor: 'rgba(178,58,23,0.4)' }}
                >
                  Ver la ficha real en Google
                </a>
              </Reveal>
            </div>

            <div>
              {RESENAS.filter((r) => r.destacada).map((r) => (
                <blockquote key={r.who} className="qp-ascua mb-10 md:mb-14">
                  <span
                    className={`${display.className} block text-6xl leading-[0.6] mb-3`}
                    style={{ color: C.brasaOsc }}
                    aria-hidden="true"
                  >
                    “
                  </span>
                  <p
                    className={`${display.className} leading-[1.12] tracking-[0.01em] text-[clamp(1.6rem,5.4vw,2.9rem)] uppercase`}
                    style={{ color: C.carbon }}
                  >
                    {r.quote}
                  </p>
                  <footer className="mt-4 flex items-center gap-3">
                    <Ascua className="w-2 h-2" color={C.cebollin} />
                    <cite className="not-italic text-xs font-bold tracking-[0.16em]" style={{ color: C.mutL }}>
                      {r.who} · reseña de Google
                    </cite>
                  </footer>
                </blockquote>
              ))}
              <div className="space-y-6 md:space-y-8">
                {RESENAS.filter((r) => !r.destacada).map((r) => (
                  <blockquote
                    key={r.who}
                    className="qp-ascua border-l-2 pl-5 md:pl-7"
                    style={{ borderColor: C.brasa }}
                  >
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: C.carbon }}>
                      “{r.quote}”
                    </p>
                    <footer className="mt-2.5">
                      <cite className="not-italic text-xs font-bold tracking-[0.16em]" style={{ color: C.mutL }}>
                        {r.who} · reseña de Google
                      </cite>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Tu evento: banda brasa ── */}
        <section id="evento" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.brasa }}>
          {/* ascuas sueltas sobre la banda */}
          <div className="absolute inset-x-0 top-0 h-10 flex items-start justify-around opacity-60" aria-hidden="true">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="block w-1.5 h-1.5 rounded-full mt-3" style={{ backgroundColor: i % 2 ? C.carbon : C.arena }} />
            ))}
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.carbon} markColor={C.carbon}>Tu evento</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[0.98] text-[clamp(2.4rem,7vw,4.8rem)]`}
                  style={{ color: C.carbon }}
                >
                  El quincho,
                  <br />
                  el fuego y la mesa.
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed font-medium" style={{ color: 'rgba(27,22,18,0.85)' }}>
                  Un recinto para eventos en Osorno, con el asado a las
                  brasas al centro. Cuéntanos qué quieres celebrar y lo
                  coordinamos por WhatsApp.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <BtnWa tone="carbon">
                    <WaIcon />
                    Consulta por WhatsApp
                  </BtnWa>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <figure className="relative">
                <div
                  className="relative aspect-[3/2] overflow-hidden rounded-2xl rotate-[1.5deg]"
                  style={{ border: `5px solid ${C.carbon}`, boxShadow: '0 24px 56px rgba(27,22,18,0.35)' }}
                >
                  <Image
                    src={`${IMG}/don-pancho.webp`}
                    alt="A las brasas: el parrillero sirviendo la carne al fuego"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="absolute -bottom-4 left-5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] rotate-[1.5deg]"
                  style={{ backgroundColor: C.carbon, color: C.arena }}
                >
                  A las brasas
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.brasaOsc}>Cómo llegar</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[1] text-[clamp(2.2rem,6vw,3.8rem)]`}
                  style={{ color: C.carbon }}
                >
                  Las Pesebreras 19,{' '}
                  <span style={{ color: C.brasaOsc }}>Osorno</span>
                </h2>
              </Reveal>
              <Reveal delay={120}>
                <address className="not-italic mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutL }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.carbon, textDecorationColor: 'rgba(178,58,23,0.45)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="mt-7 flex flex-wrap gap-3">
                  <BtnWa href={MAPS_URL} tone="brasa">
                    Cómo llegar
                  </BtnWa>
                  <BtnWa href={WA_LINK} tone="linea">
                    Consulta por WhatsApp
                  </BtnWa>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div
                className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] min-h-[300px]"
                style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 20px 48px rgba(27,22,18,0.14)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.carbonBajo, color: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo Don Pancho BBQ"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className={`${display.className} uppercase tracking-[0.08em] text-xl leading-none`}>
                    {BIZ.brand}
                  </p>
                  <p className="text-sm mt-1" style={{ color: 'rgba(242,230,211,0.72)' }}>
                    {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(242,230,211,0.85)' }}>
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(242,230,211,0.14)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(242,230,211,0.62)' }}>
                {BIZ.name} · Sitio de ejemplo preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.arena }}
                >
                  {SITE.name}
                </a>
                .{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.brasa }}
                >
                  ¿Lo hacemos realidad?
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
