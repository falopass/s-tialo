import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, waModelo, MAPS_URL, MAPS_EMBED, MODELOS, MARCAS, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/rubik/normal-300-900.woff2', weight: '300 900', style: 'normal' }],
})

// De su logo y del taller: azul Don Bicicleto, negro asfalto,
// naranjo Fox de la cadena, gris aluminio y blanco tiza.
const C = {
  asfalto: '#111214',
  carbon: '#181B1E',
  azul: '#1C7FD6',
  azulInk: '#0E5BA0', // pasa 4.5:1 sobre tiza y 3:1 sobre asfalto
  naranjo: '#FF6A1A',
  aluminio: '#C9CED3',
  tiza: '#F7F7F5',
  tinta: '#16181B',
  mutedL: 'rgba(22,24,27,0.68)',
  mutedD: 'rgba(247,247,245,0.72)',
  lineL: 'rgba(22,24,27,0.14)',
  lineD: 'rgba(201,206,211,0.2)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'don-bicicleto',
  title: 'Don Bicicleto · Tienda de bicicletas y servicio técnico en San Fernando',
  description:
    'Tienda de bicicletas y servicio técnico especializado en San Fernando y Chimbarongo. MTB, ruta, gravel y niños. 5,0 en Google. Cotiza por WhatsApp.',
  image: '/demos/don-bicicleto/servicio-tecnico.webp',
})

const NAV_LINKS = [
  { label: 'La tienda', href: '#tienda' },
  { label: 'Vitrina', href: '#vitrina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** Rótulo en versalitas con la marca de la huella del neumático. */
function Rotulo({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em]"
      style={{ color }}
    >
      <span
        className="inline-block h-[10px] w-9 shrink-0"
        style={{
          backgroundImage: `repeating-linear-gradient(115deg, ${color} 0 2px, transparent 2px 8px)`,
        }}
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
  tone: 'naranjo' | 'lineTiza' | 'azul' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'naranjo'
      ? { backgroundColor: C.naranjo, color: C.asfalto }
      : tone === 'azul'
        ? { backgroundColor: C.azulInk, color: C.tiza }
        : tone === 'lineTiza'
          ? { border: '1.5px solid rgba(247,247,245,0.55)', color: C.tiza }
          : { border: `1.5px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="db-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

/** Eslabón de cadena: dos bucles entrelazados en trazo. */
function Eslabon({ className = 'w-5 h-3' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 12" className={className} fill="none" aria-hidden="true">
      <rect
        x="1.5"
        y="3.2"
        width="12.5"
        height="6"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
        transform="rotate(-16 7 6)"
      />
      <rect
        x="10"
        y="3.2"
        width="12.5"
        height="6"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.7"
        transform="rotate(-16 16 6)"
      />
    </svg>
  )
}

/** La rueda del hero: llanta, rayos, buje y válvula naranja. */
function WheelSVG() {
  const spokes = Array.from({ length: 6 }, (_, i) => i * 30)
  return (
    <svg viewBox="0 0 100 100" className="db-spin block w-full h-full" aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke={C.aluminio} strokeWidth="7" />
      <circle cx="50" cy="50" r="38.5" fill="none" stroke={C.aluminio} strokeWidth="1.6" opacity="0.7" />
      {spokes.map((a) => (
        <line
          key={a}
          x1="50"
          y1="12.5"
          x2="50"
          y2="87.5"
          stroke={C.aluminio}
          strokeWidth="1.5"
          opacity="0.85"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="7" fill={C.naranjo} />
      <circle cx="50" cy="50" r="2.6" fill={C.asfalto} />
      <circle cx="50" cy="7.5" r="3.2" fill={C.naranjo} />
    </svg>
  )
}

/** Placa tipo vitrina: foto con marco fino y rótulo abajo. */
function Plate({
  src,
  alt,
  ratio = 'aspect-[4/3]',
  label,
  dark = false,
  children,
}: {
  src: string
  alt: string
  ratio?: string
  label: string
  dark?: boolean
  children?: React.ReactNode
}) {
  return (
    <figure
      className="db-plate group overflow-hidden rounded-xl"
      style={{
        border: `1.5px solid ${dark ? C.lineD : C.lineL}`,
        backgroundColor: dark ? C.carbon : '#FFFFFF',
      }}
    >
      <div className={`relative ${ratio} overflow-hidden`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 92vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
      </div>
      <figcaption className="px-4 md:px-5 py-3.5">
        <p
          className="text-[10px] font-bold uppercase tracking-[0.26em]"
          style={{ color: dark ? C.naranjo : C.azulInk }}
        >
          {label}
        </p>
        {children}
      </figcaption>
    </figure>
  )
}

export default function DonBicicletoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.asfalto, color: C.tiza }}
    >
      <style>{`
        /* La rueda que entra rodando desde la izquierda y frena junto al titular. */
        @keyframes db-roll {
          from { transform: translateX(-115vw) rotate(-1500deg) }
          to { transform: translateX(0) rotate(0deg) }
        }
        .db-wheel { animation: db-roll 1.35s cubic-bezier(.2,.7,.25,1) 0.15s both; will-change: transform }
        /* Después de frenar sigue girando muy lento. */
        @keyframes db-spin { to { transform: rotate(360deg) } }
        .db-spin { animation: db-spin 30s linear 1.55s infinite both }

        /* La huella que la rueda deja en el asfalto, revelada al mismo ritmo. */
        @keyframes db-track {
          from { clip-path: inset(0 100% 0 0) }
          to { clip-path: inset(0 0 0 0) }
        }
        .db-track { animation: db-track 1.35s cubic-bezier(.2,.7,.25,1) 0.15s both }

        /* El titular entra por palabras, detrás de la rueda. */
        @keyframes db-up { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .db-line { animation: db-up 0.9s cubic-bezier(.22,.61,.2,1) both }
        @keyframes db-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .db-fade { animation: db-fade 0.85s ease-out both }
        @keyframes db-foto { from { opacity: 0; transform: scale(1.06) } to { opacity: 1; transform: scale(1) } }
        .db-foto { animation: db-foto 1.4s cubic-bezier(.22,.61,.2,1) both }

        /* La cinta de marcas corre como cadena. */
        @keyframes db-marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .db-marq { animation: db-marq 30s linear infinite }

        .db-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .db-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .db-btn:active { transform: translateY(0) scale(0.97) }
        .db-btn:focus-visible { outline: 3px solid ${C.naranjo}; outline-offset: 3px }
        .db-page a:focus-visible { outline: 3px solid ${C.naranjo}; outline-offset: 3px }

        /* Encuadre del hero: en pantalla ancha la banda es baja, hay que subir el foco a las caras. */
        .db-heroimg { object-position: 50% 42% }
        @media (min-width: 768px) { .db-heroimg { object-position: 50% 35% } }

        @media (prefers-reduced-motion: reduce) {
          .db-wheel, .db-spin, .db-track, .db-line, .db-fade, .db-foto, .db-marq { animation: none !important }
          .db-track { clip-path: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="uppercase tracking-wide">Don Bicicleto</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(17,18,20,0.94)',
          ink: C.tiza,
          line: C.lineD,
          btnBg: C.naranjo,
          btnInk: C.asfalto,
        }}
      />

      <div className="db-page">
        {/* ── 1 · Hero: la rueda que entra rodando ── */}
        <section
          id="inicio"
          className="relative flex flex-col"
          style={{ backgroundColor: C.asfalto }}
        >
          {/* textura de asfalto */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(247,247,245,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />
          {/* la foto del equipo a sangre, con corte diagonal de bajada (solo móvil) */}
          <div
            className="relative h-[290px] order-1 md:hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 30px), 0 100%)' }}
          >
            <div className="db-foto absolute inset-0">
              <Image
                src={`${IMG}/servicio-tecnico.webp`}
                alt="El equipo de Don Bicicleto con una MTB naranja frente a la tienda, bajo el letrero de servicio técnico"
                fill
                priority
                sizes="100vw"
                className="db-heroimg object-cover"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(17,18,20,0.42) 0%, rgba(17,18,20,0.06) 45%, rgba(17,18,20,0.55) 100%)',
              }}
            />
          </div>

          {/* el titular entra por palabras detrás de la rueda; en md+ la foto va al lado */}
          <div className="relative order-3 md:order-1 max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 md:pt-14 lg:pt-16 w-full grid md:grid-cols-[1.08fr_0.92fr] gap-10 md:gap-12 lg:gap-14 items-center">
            <div>
              <p
                className="db-fade flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
                style={{ color: C.aluminio, animationDelay: '0.6s' }}
              >
                <span
                  className="inline-block h-[10px] w-9"
                  style={{
                    backgroundImage: `repeating-linear-gradient(115deg, ${C.naranjo} 0 3px, transparent 3px 11px)`,
                  }}
                  aria-hidden="true"
                />
                San Fernando · Chimbarongo
              </p>
              <h1
                className={`${display.className} uppercase leading-[0.94] tracking-[0.01em] text-[clamp(3.1rem,14vw,7.6rem)] md:text-[clamp(3rem,6.4vw,5.4rem)]`}
              >
                <span className="flex flex-wrap gap-x-[0.24em] overflow-hidden" style={{ color: C.tiza }}>
                  {['Otra', 'que', 'se', 'va'].map((w, i) => (
                    <span key={w} className="overflow-hidden">
                      <span className="db-line block" style={{ animationDelay: `${0.75 + i * 0.13}s` }}>
                        {w}
                      </span>
                    </span>
                  ))}
                </span>
                <span className="block" style={{ transform: 'skewX(-5deg)' }}>
                  <span className="block overflow-hidden">
                    <span
                      className="db-line inline-block"
                      style={{ animationDelay: '1.3s', color: C.naranjo }}
                    >
                      pedaleando.
                    </span>
                  </span>
                </span>
              </h1>
              <p
                className="db-fade mt-5 max-w-md text-[15px] md:text-lg leading-relaxed font-medium"
                style={{ color: C.mutedD, animationDelay: '1.55s' }}
              >
                Tienda de bicicletas y servicio técnico especializado. Te
                asesoramos y te la entregamos ajustada a tu talla.
              </p>
              <div className="db-fade mt-7 flex flex-wrap gap-3" style={{ animationDelay: '1.7s' }}>
                <Btn href={WA_LINK} tone="naranjo">
                  Cotiza por WhatsApp
                </Btn>
                <Btn href="#vitrina" tone="lineTiza" external={false}>
                  Ver bicicletas
                </Btn>
              </div>
              <div
                className="db-fade mt-6 flex flex-wrap items-center gap-x-3 gap-y-1.5"
                style={{ animationDelay: '1.85s' }}
              >
                <Stars value={BIZ.ratingValue} color={C.naranjo} size={16} />
                <span className="text-sm font-semibold" style={{ color: C.tiza }}>
                  {BIZ.rating} en Google
                </span>
                <span className="text-sm" style={{ color: C.mutedD }}>
                  · {BIZ.reviews} opiniones
                </span>
              </div>
            </div>
            {/* la foto con corte diagonal de bajada y filo naranjo (solo md+) */}
            <figure className="hidden md:block relative">
              <div
                className="db-foto relative ml-auto w-full max-w-[460px] lg:max-w-[540px]"
                style={{
                  clipPath: 'polygon(8% 0, 100% 0, 92% 100%, 0 100%)',
                  backgroundColor: C.naranjo,
                }}
              >
                <div
                  className="relative w-full aspect-square"
                  style={{ clipPath: 'polygon(9.8% 0, 100% 0, 90.2% 100%, 1.8% 100%)' }}
                >
                  <Image
                    src={`${IMG}/servicio-tecnico.webp`}
                    alt="El equipo de Don Bicicleto con una MTB naranja frente a la tienda, bajo el letrero de servicio técnico"
                    fill
                    priority
                    sizes="(min-width: 1024px) 540px, 42vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 42%' }}
                  />
                </div>
              </div>
            </figure>
          </div>

          {/* la costra: huella del neumático y la rueda que frena */}
          <div className="relative order-2 h-[86px] md:h-[96px]" aria-hidden="true">
            <div
              className="absolute left-[-6%] w-[112%] top-1/2"
              style={{ transform: 'translateY(-50%) rotate(3deg)' }}
            >
              <div
                className="db-track h-[10px]"
                style={{
                  backgroundImage: `repeating-linear-gradient(115deg, rgba(201,206,211,0.55) 0 3px, transparent 3px 11px)`,
                }}
              />
              <div
                className="db-wheel absolute w-[72px] h-[72px] md:w-[96px] md:h-[96px]"
                style={{ right: '13%', top: '-64px' }}
              >
                <WheelSVG />
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · La cinta de marcas corre como cadena ── */}
        <div
          className="border-y overflow-hidden"
          style={{ backgroundColor: C.carbon, borderColor: C.lineD }}
          aria-label={`Marcas que trabaja la tienda: ${MARCAS.join(', ')}`}
        >
          <div className="db-marq flex w-max items-center py-3.5" aria-hidden="true">
            {[...MARCAS, ...MARCAS, ...MARCAS, ...MARCAS].map((m, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span
                  className={`${display.className} uppercase tracking-[0.12em] text-lg md:text-xl px-5`}
                  style={{ color: i % 7 === 0 ? C.naranjo : C.aluminio }}
                >
                  {m}
                </span>
                <span style={{ color: 'rgba(201,206,211,0.45)' }}>
                  <Eslabon />
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── 3 · La tienda: qué encuentras ── */}
        <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.tiza, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.azulInk}>La tienda</Rotulo>
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.1rem,7vw,4.6rem)] mt-4 max-w-3xl`}
              >
                Todo lo que se gasta pedaleando,{' '}
                <span style={{ color: C.azulInk }}>en una sola tienda.</span>
              </h2>
            </Reveal>
            <div className="grid gap-5 md:gap-6 md:grid-cols-12 mt-10 md:mt-14">
              <Reveal className="md:col-span-7">
                <Plate
                  src={`${IMG}/ruta.webp`}
                  alt="Bicicleta de ruta Scott verde dentro de la tienda Don Bicicleto"
                  ratio="aspect-[4/3]"
                  label="Bicicletas"
                >
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                    Para todas las modalidades, edades y tallas.
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {['MTB', 'Ruta', 'Gravel', 'Niños aro 20 y 24'].map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                        style={{ border: `1.5px solid ${C.lineL}`, color: C.tinta }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Plate>
              </Reveal>
              <Reveal delay={100} className="md:col-span-5">
                <div
                  className="relative overflow-hidden rounded-xl h-full min-h-[280px] flex flex-col justify-between p-5 md:p-7"
                  style={{ backgroundColor: C.asfalto, border: `1.5px solid ${C.tinta}` }}
                >
                  {/* rayos de rueda decorativos */}
                  <svg
                    viewBox="0 0 100 100"
                    className="absolute -right-14 -bottom-14 w-56 h-56 opacity-[0.16]"
                    aria-hidden="true"
                  >
                    <circle cx="50" cy="50" r="46" fill="none" stroke={C.aluminio} strokeWidth="4" />
                    {Array.from({ length: 6 }, (_, i) => i * 30).map((a) => (
                      <line
                        key={a}
                        x1="50"
                        y1="6"
                        x2="50"
                        y2="94"
                        stroke={C.aluminio}
                        strokeWidth="1.5"
                        transform={`rotate(${a} 50 50)`}
                      />
                    ))}
                    <circle cx="50" cy="50" r="7" fill={C.naranjo} />
                  </svg>
                  <div className="relative">
                    <p
                      className="text-[10px] font-bold uppercase tracking-[0.26em]"
                      style={{ color: C.naranjo }}
                    >
                      Servicio técnico
                    </p>
                    <h3
                      className={`${display.className} uppercase leading-[1.02] text-3xl md:text-4xl mt-2`}
                      style={{ color: C.tiza }}
                    >
                      El taller donde la dejan a punto.
                    </h3>
                  </div>
                  <p className="relative mt-4 text-[15px] leading-relaxed max-w-sm" style={{ color: C.mutedD }}>
                    Servicio técnico especializado, el que sale en la
                    propia vitrina. Tu bici vuelve ajustada.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={80} className="md:col-span-4">
                <Plate
                  src={`${IMG}/vestuario.webp`}
                  alt="Interior de la tienda: bicicletas a un lado y vestuario colgado"
                  ratio="aspect-[3/4] md:aspect-[4/5]"
                  label="Indumentaria"
                >
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                    Indumentaria y vestuario para salir a rodar.
                  </p>
                </Plate>
              </Reveal>
              <Reveal delay={140} className="md:col-span-4">
                <Plate
                  src={`${IMG}/accesorios.webp`}
                  alt="Muro de accesorios de la tienda: portacaramañolas y neumáticos"
                  ratio="aspect-[3/4] md:aspect-[4/5]"
                  label="Accesorios y repuestos"
                >
                  <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                    Cascos, lentes, luces, ciclocomputadores, sillines,
                    neumáticos y mucho más.
                  </p>
                </Plate>
              </Reveal>
              <Reveal delay={200} className="md:col-span-4">
                <div
                  className="rounded-xl h-full min-h-[200px] flex flex-col justify-between p-5 md:p-6"
                  style={{ border: `1.5px solid ${C.lineL}`, backgroundColor: '#FFFFFF' }}
                >
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.26em]"
                    style={{ color: C.azulInk }}
                  >
                    También en el muro
                  </p>
                  <ul className="mt-3 space-y-2 text-[15px] font-medium leading-snug" style={{ color: C.tinta }}>
                    {[
                      'Luces Magene L508 con radar',
                      'Ciclocomputadores Magene C506 y C706',
                      'Sillines Prologo y sillín de mujer TRIP',
                      'Neumáticos Maxxis',
                      'Portacaramañolas y más',
                    ].map((t) => (
                      <li key={t} className="flex gap-2.5">
                        <span className="mt-[7px] h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: C.naranjo }} aria-hidden="true" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 4 · En vitrina: las bicicletas publicadas ── */}
        <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.asfalto }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
            <Reveal className="lg:sticky lg:top-24">
              <Plate
                dark
                src={`${IMG}/vitrina.webp`}
                alt="La vitrina de la tienda con dos bicicletas de ruta colgadas"
                ratio="aspect-[4/5] max-h-[380px] lg:max-h-none"
                label="La vitrina"
              >
                <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedD }}>
                  Lo que se ve desde la vereda: ruta, MTB y las que van
                  llegando.
                </p>
              </Plate>
            </Reveal>
            <div>
              <Reveal>
                <Rotulo color={C.naranjo}>En vitrina</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.1rem,7vw,4.2rem)] mt-4`}
                  style={{ color: C.tiza }}
                >
                  Las que salen en su Instagram.
                </h2>
                <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedD }}>
                  Cada bicicleta se cotiza directo. Escríbenos por la
                  que te guste y consulta disponibilidad.
                </p>
              </Reveal>
              <ul className="mt-8">
                {MODELOS.map((m, i) => (
                  <Reveal key={m.name} delay={i * 60}>
                    <li
                      className="flex items-center gap-4 border-b py-4"
                      style={{ borderColor: C.lineD }}
                    >
                      <span
                        className={`${display.className} text-lg leading-none w-7 shrink-0`}
                        style={{ color: 'rgba(255,106,26,0.75)' }}
                        aria-hidden="true"
                      >
                        {m.n}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`${display.className} uppercase leading-tight text-xl md:text-2xl`}
                          style={{ color: C.tiza }}
                        >
                          {m.name}
                        </h3>
                        {m.spec && (
                          <p className="mt-0.5 text-[13px]" style={{ color: C.mutedD }}>
                            {m.spec}
                          </p>
                        )}
                      </div>
                      <a
                        href={waModelo(m.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 text-[11px] font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44"
                        style={{ color: C.naranjo, textDecorationColor: 'rgba(255,106,26,0.4)' }}
                      >
                        Consulta
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={120}>
                <p className="mt-6 text-sm leading-relaxed" style={{ color: C.mutedD }}>
                  Hay más bicicletas en tienda, en distintos rangos de
                  precio.{' '}
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.naranjo, textDecorationColor: 'rgba(255,106,26,0.4)' }}
                  >
                    Pregunta por la tuya
                  </a>
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5 · Te la entregamos ajustada ── */}
        <section className="scroll-mt-20" style={{ backgroundColor: C.tiza, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <Plate
                src={`${IMG}/tienda-cliente.webp`}
                alt="Un cliente con su bicicleta nueva dentro de la tienda; atrás, el muro de cascos y accesorios"
                ratio="aspect-[4/5]"
                label="La entrega"
              >
                <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                  Así se va cada bicicleta: con su dueño y ajustada.
                </p>
              </Plate>
            </Reveal>
            <div>
              <Reveal>
                <Rotulo color={C.azulInk}>El trato</Rotulo>
                <h2
                  className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.1rem,7vw,4.2rem)] mt-4`}
                >
                  No te la llevas en caja:{' '}
                  <span style={{ color: C.azulInk }}>te la entregamos ajustada.</span>
                </h2>
              </Reveal>
              <ol className="mt-9 space-y-0">
                {[
                  {
                    t: 'Te asesoramos en la compra',
                    d: 'Nos cuentas qué buscas y te ayudamos a elegir: modalidad, uso y talla.',
                  },
                  {
                    t: 'La preparamos para ti',
                    d: 'Cada bicicleta se entrega pre-ajustada antes de salir de la tienda.',
                  },
                  {
                    t: 'Sales pedaleando',
                    d: 'Se va ajustada a tu tamaño. Ese es el lema de cada entrega.',
                  },
                ].map((s, i) => (
                  <Reveal key={s.t} delay={i * 100}>
                    <li className="flex gap-5 border-b py-5 last:border-b-0" style={{ borderColor: C.lineL }}>
                      <span
                        className={`${display.className} text-4xl md:text-5xl leading-none shrink-0 w-12`}
                        style={{ color: C.azul }}
                        aria-hidden="true"
                      >
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-lg leading-tight">{s.t}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                          {s.d}
                        </p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <Reveal delay={140}>
                <div className="mt-8">
                  <Btn href={WA_LINK} tone="azul">
                    Cotiza por WhatsApp
                  </Btn>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 6 · Otra que se va pedaleando: la galería de entregas ── */}
        <section id="entregas" className="scroll-mt-20" style={{ backgroundColor: C.tiza, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
            <Reveal>
              <Rotulo color={C.azulInk}>Las entregas</Rotulo>
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.1rem,7vw,4.6rem)] mt-4`}
              >
                {BIZ.lema}
              </h2>
              <p className="mt-4 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                La frase con la que despiden cada bicicleta que sale de
                la tienda.
              </p>
            </Reveal>
            <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                {
                  src: `${IMG}/entrega-1.webp`,
                  alt: 'Cliente con su bicicleta nueva frente a la tienda Don Bicicleto',
                  cap: 'otra que se va',
                  plate: C.naranjo,
                  plateInk: C.asfalto,
                },
                {
                  src: `${IMG}/tienda-interior.webp`,
                  alt: 'Cliente con su bicicleta recién entregada dentro de la tienda, entre los muros de accesorios',
                  cap: 'pedaleando',
                  plate: C.asfalto,
                  plateInk: C.tiza,
                  lift: true,
                },
                {
                  src: `${IMG}/entrega-2.webp`,
                  alt: 'Clienta con su MTB azul frente a la tienda Don Bicicleto',
                  cap: 'y otra más',
                  plate: C.azulInk,
                  plateInk: '#FFFFFF',
                },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 110} className={i === 2 ? 'col-span-2 md:col-span-1' : ''}>
                  <figure className={`relative ${f.lift ? 'md:-mt-8' : ''}`}>
                    <div
                      className="relative overflow-hidden rounded-xl aspect-[4/5]"
                      style={{ border: `1.5px solid ${C.lineL}` }}
                    >
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption
                      className={`${display.className} absolute -bottom-3 left-3 uppercase text-sm tracking-[0.08em] px-3 py-1.5 -rotate-2`}
                      style={{ backgroundColor: f.plate, color: f.plateInk }}
                    >
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 7 · Opiniones: 5,0 con 24 ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.asfalto }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-center">
            <Reveal>
              <Rotulo color={C.naranjo}>Opiniones</Rotulo>
              <div className="mt-4 flex items-end gap-4">
                <span
                  className={`${display.className} leading-[0.85] text-[clamp(5rem,18vw,9rem)]`}
                  style={{ color: C.tiza }}
                >
                  {BIZ.rating}
                </span>
                <div className="pb-3">
                  <Stars value={BIZ.ratingValue} color={C.naranjo} size={20} />
                  <p className="mt-1.5 text-sm font-semibold" style={{ color: C.tiza }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                  <p className="text-xs" style={{ color: C.mutedD }}>
                    promedio perfecto
                  </p>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.naranjo, textDecorationColor: 'rgba(255,106,26,0.4)' }}
              >
                Ver la ficha real en Google
              </a>
            </Reveal>
            <div className="space-y-4">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 120}>
                  <blockquote
                    className="relative rounded-xl p-5 md:p-6"
                    style={{ backgroundColor: C.carbon, border: `1.5px solid ${C.lineD}` }}
                  >
                    <span
                      className={`${display.className} absolute -top-4 left-4 text-5xl leading-none`}
                      style={{ color: C.naranjo }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p className="text-lg md:text-xl font-medium leading-snug" style={{ color: C.tiza }}>
                      {r.text}
                    </p>
                    <footer className="mt-3 flex items-center gap-2.5">
                      <Stars value={5} color={C.naranjo} size={12} />
                      <cite className="not-italic text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.mutedD }}>
                        {r.author} · Google
                      </cite>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 · Dos tiendas ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.tiza, color: C.tinta }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.azulInk}>Dónde</Rotulo>
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.1rem,7vw,4.2rem)] mt-4`}
              >
                Dos tiendas, la misma manía por las bicis.
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-14">
              <Reveal>
                <div
                  className="rounded-xl p-5 md:p-7 h-full"
                  style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineL}` }}
                >
                  <h3 className={`${display.className} uppercase text-2xl md:text-3xl`}>San Fernando</h3>
                  <address className="not-italic mt-3 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                    {BIZ.address}
                    <br />
                    {BIZ.city}, {BIZ.region}
                  </address>
                  <ul className="mt-4 space-y-1.5 text-[15px]">
                    {BIZ.horario.map((h) => (
                      <li key={h.dias} className="flex justify-between gap-4">
                        <span style={{ color: C.mutedL }}>{h.dias}</span>
                        <span className="font-semibold">{h.horas}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <Btn href={WA_LINK} tone="azul">
                      WhatsApp
                    </Btn>
                    <Btn href={MAPS_URL} tone="lineTinta">
                      Cómo llegar
                    </Btn>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={120}>
                <div
                  className="rounded-xl p-5 md:p-7 h-full"
                  style={{ backgroundColor: '#FFFFFF', border: `1.5px solid ${C.lineL}` }}
                >
                  <h3 className={`${display.className} uppercase text-2xl md:text-3xl`}>Chimbarongo</h3>
                  <address className="not-italic mt-3 text-[15px] leading-relaxed" style={{ color: C.mutedL }}>
                    {BIZ.address2}
                    <br />
                    {BIZ.city2}, {BIZ.region}
                  </address>
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                    <span className="font-semibold">Horario:</span>{' '}
                    <span style={{ color: C.mutedL }}>consulta horario por WhatsApp</span>
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    <Btn href={WA_LINK} tone="azul">
                      WhatsApp
                    </Btn>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div
                className="relative w-full overflow-hidden rounded-xl aspect-[4/3] md:aspect-[16/7] mt-5 md:mt-6 min-h-[280px]"
                style={{ border: `1.5px solid ${C.lineL}` }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 9 · Cierre: la tuya también se va pedaleando ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.asfalto }}>
          <div
            className="absolute inset-0 pointer-events-none opacity-60"
            style={{
              backgroundImage: 'radial-gradient(rgba(247,247,245,0.05) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
            aria-hidden="true"
          />
          <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Don Bicicleto"
                className="mx-auto h-24 md:h-28 w-auto rounded-xl p-2"
                style={{ backgroundColor: '#FFFFFF' }}
              />
              <h2
                className={`${display.className} uppercase leading-[0.96] tracking-[0.005em] text-[clamp(2.4rem,9vw,5.2rem)] mt-7`}
                style={{ color: C.tiza }}
              >
                ¿La tuya también se va{' '}
                <span style={{ color: C.naranjo }}>pedaleando?</span>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: C.mutedD }}>
                Escríbenos por WhatsApp: te asesoramos, la ajustamos a tu
                talla y sales pedaleando.
              </p>
              <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                <Btn href={WA_LINK} tone="naranjo">
                  Cotiza por WhatsApp
                </Btn>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.tiza, textDecorationColor: 'rgba(255,106,26,0.5)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 10 · Footer compacto ── */}
        <footer style={{ backgroundColor: C.carbon, color: C.tiza }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt=""
                  className="h-11 w-auto rounded-md p-1 shrink-0"
                  style={{ backgroundColor: '#FFFFFF' }}
                  aria-hidden="true"
                />
                <div>
                  <p className={`${display.className} uppercase text-lg leading-tight`}>Don Bicicleto</p>
                  <p className="text-xs" style={{ color: 'rgba(247,247,245,0.6)' }}>
                    {BIZ.rubro}
                  </p>
                </div>
              </div>
              <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
                {NAV_LINKS.map((l) => (
                  <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,247,245,0.85)' }}>
                    {l.label}
                  </a>
                ))}
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center"
                  style={{ color: 'rgba(247,247,245,0.85)' }}
                >
                  Instagram
                </a>
              </nav>
            </div>
            <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(201,206,211,0.14)' }}>
              <p className="text-xs leading-relaxed" style={{ color: 'rgba(247,247,245,0.55)' }}>
                {BIZ.address}, {BIZ.city} · {BIZ.address2}, {BIZ.city2} · {BIZ.phoneDisplay}. Sitio de ejemplo
                preparado por{' '}
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.tiza }}
                >
                  {SITE.name}
                </a>{' '}
                para {BIZ.name}.{' '}
                <a
                  href={whatsappLink('contacto')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline underline-offset-2 tap-44"
                  style={{ color: C.naranjo }}
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
