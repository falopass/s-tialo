import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import Llavero from './llavero'
import {
  BIZ,
  WA_LINK,
  WA_REUNION,
  MAPS_URL,
  MAPS_EMBED,
  EQUIPO,
  DESAYUNO,
  REVIEWS,
  IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' }],
})

// «El atardecer de su terraza»: el vino de la copa que brinda sobre
// San Fernando, el ocre del cielo al caer el sol, el carbón de la
// noche, la arena del papel y la salvia tranquila del valle.
const C = {
  vino: '#6E1E2B',
  vinoBajo: '#571624',
  ocre: '#D98E3C',
  ocreClaro: '#E9AE6B', // ocre claro: legible sobre vino
  ocreOsc: '#9A5E18', // ocre oscuro: legible sobre arena
  carbon: '#1E1B19',
  carbonBajo: '#131110',
  arena: '#F4EDE3',
  papel: '#FBF7EF',
  salvia: '#7C8B74',
  salviaOsc: '#596750', // salvia oscuro: legible sobre arena
  mutNoche: 'rgba(244,237,227,0.76)',
  mutArena: 'rgba(30,27,25,0.72)',
  lineD: 'rgba(217,142,60,0.32)',
  lineL: 'rgba(30,27,25,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'hotel-manso-de-velasco',
  title: 'Hotel Manso de Velasco · Hotel en San Fernando',
  description:
    'Hotel de 3 estrellas en Av. Manuel Rodríguez 421, San Fernando. Habitaciones equipadas, desayuno, terraza con vista a la ciudad y la cordillera, y estacionamiento. Consulta disponibilidad por WhatsApp.',
  image: '/demos/hotel-manso-de-velasco/terraza-vino.webp',
})

const NAV_LINKS = [
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Desayuno', href: '#desayuno' },
  { label: 'Terraza', href: '#terraza' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** La línea de la cordillera: trazo fino que corona un titular o divide una sección. */
function Cordillera({
  className = '',
  color = C.ocre,
  height = 40,
}: {
  className?: string
  color?: string
  height?: number
}) {
  return (
    <svg
      viewBox="0 0 560 48"
      className={`block ${className}`}
      style={{ height }}
      fill="none"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 40 L38 26 L66 34 L108 12 L138 26 L178 18 L216 32 L262 10 L300 28 L338 20 L380 36 L420 16 L458 30 L498 22 L560 38"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M0 45 L70 37 L140 42 L230 34 L320 41 L420 33 L560 43"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  )
}

/** Rótulo de sección en versalitas Marcellus con filete. */
function Rotulo({
  children,
  color = C.vino,
  className = '',
}: {
  children: React.ReactNode
  color?: string
  className?: string
}) {
  return (
    <p
      className={`${display.className} flex items-center gap-3 text-[11px] md:text-xs tracking-[0.32em] uppercase ${className}`}
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Cabecera de sección numerada: el llavero cuelga del rótulo. */
function SelloSeccion({
  num,
  rotulo,
  dark = false,
}: {
  num: string
  rotulo: string
  dark?: boolean
}) {
  return (
    <div className="flex items-center gap-4 md:gap-5">
      <Llavero
        num={num}
        fob={dark ? C.arena : C.vino}
        ink={dark ? C.vino : C.arena}
        ring={C.ocre}
      />
      <Rotulo color={dark ? C.ocre : C.vino}>{rotulo}</Rotulo>
    </div>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.vino,
  ink = '#FDF9F2',
  className = '',
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`hmv-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold tap-44 ${className}`}
      style={{ backgroundColor: bg, color: ink }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

// Iconos finos de recepción (trazo 1.7)
const ICONO = {
  estrella: 'M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z',
  llave: 'M7.5 3a4.5 4.5 0 1 0 2.9 7.95L20 20.5M15.6 15.4l2.6-2.6M13 13l1.7-1.7',
  puerta: 'M13 3.5H5.5v17H13M9.5 12H21m-3.2-3.2L21 12l-3.2 3.2',
  auto: 'M4.5 15.5 5.9 10a2 2 0 0 1 2-1.5h8.2a2 2 0 0 1 2 1.5l1.4 5.5M3.5 15.5h17v3.8h-17zM7 19.3v1.2M17 19.3v1.2',
} as const

function Icono({ d, className = 'w-[22px] h-[22px]' }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

const DATOS = [
  { icono: ICONO.estrella, titulo: 'Hotel de 3 estrellas', detalle: 'Según su ficha de Google' },
  { icono: ICONO.llave, titulo: 'Entrada · 15:00', detalle: 'Check-in desde las tres' },
  { icono: ICONO.puerta, titulo: 'Salida · 12:00', detalle: 'Check-out hasta el mediodía' },
  { icono: ICONO.auto, titulo: 'Estacionamiento', detalle: 'Lo destacan los huéspedes' },
] as const

export default function HotelMansoDeVelascoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.arena, color: C.carbon }}
    >
      <style>{`
        /* «La puerta que se abre»: dos hojas de puerta color carbón se
           deslizan hacia los lados con una leve rotación que da fondo,
           y descubren la terraza al atardecer. */
        .hmv-escena { perspective: 1500px }
        .hmv-puerta {
          position: absolute; top: 0; bottom: 0; width: 50.6%; z-index: 20;
          background:
            repeating-linear-gradient(90deg, rgba(244,237,227,0.05) 0 1px, transparent 1px 56px),
            linear-gradient(180deg, #26201d 0%, #1e1b19 46%, #15110f 100%);
        }
        .hmv-puerta-izq {
          left: 0; transform-origin: left center;
          box-shadow: inset -1px 0 0 rgba(217,142,60,0.4), inset -16px 0 30px -20px rgba(0,0,0,0.9);
          animation: hmv-abre-izq 1.3s cubic-bezier(.62,.02,.22,1) .45s both;
        }
        .hmv-puerta-der {
          right: 0; transform-origin: right center;
          box-shadow: inset 1px 0 0 rgba(217,142,60,0.4), inset 16px 0 30px -20px rgba(0,0,0,0.9);
          animation: hmv-abre-der 1.3s cubic-bezier(.62,.02,.22,1) .45s both;
        }
        @keyframes hmv-abre-izq { to { transform: translateX(-103%) rotateY(-9deg) } }
        @keyframes hmv-abre-der { to { transform: translateX(103%) rotateY(9deg) } }
        .hmv-tirador {
          position: absolute; top: 50%; width: 5px; height: 66px; margin-top: -14px;
          border-radius: 99px;
          background: linear-gradient(180deg, #E8B36A, #B9742C);
          box-shadow: 0 0 10px rgba(217,142,60,0.45);
        }
        /* La placa de la puerta se apaga cuando las hojas empiezan a correr. */
        .hmv-placa {
          position: absolute; inset: 0; z-index: 30; display: flex;
          align-items: center; justify-content: center; pointer-events: none;
          animation: hmv-placa .5s ease .5s both;
        }
        @keyframes hmv-placa { to { opacity: 0 } }

        /* La línea de la cordillera se dibuja de izquierda a derecha. */
        .hmv-ridge { clip-path: inset(-12% 102% -12% -2%); animation: hmv-ridge 1.1s cubic-bezier(.45,.05,.25,1) 1.8s both }
        @keyframes hmv-ridge { to { clip-path: inset(-12% -2% -12% -2%) } }

        .hmv-fade { opacity: 0; transform: translateY(16px); animation: hmv-fade .9s cubic-bezier(.25,.1,.25,1) both; animation-delay: var(--hmv-d, 0s) }
        @keyframes hmv-fade { to { opacity: 1; transform: none } }

        /* El llavero se balancea una vez al entrar (lo gatilla llavero.tsx). */
        @keyframes hmv-swing {
          0% { transform: rotate(0deg) }
          22% { transform: rotate(9deg) }
          48% { transform: rotate(-6.5deg) }
          72% { transform: rotate(3deg) }
          100% { transform: rotate(0deg) }
        }
        .hmv-swing { animation: hmv-swing 1.5s cubic-bezier(.3,.7,.4,1) }

        .hmv-btn { transition: transform .18s ease, filter .18s ease }
        .hmv-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .hmv-btn:active { transform: scale(.97) }
        .hmv-btn:focus-visible, .hmv-page a:focus-visible { outline: 3px solid ${C.ocre}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .hmv-puerta-izq { transform: translateX(-103%) !important; animation: none !important }
          .hmv-puerta-der { transform: translateX(103%) !important; animation: none !important }
          .hmv-placa { opacity: 0 !important; animation: none !important }
          .hmv-ridge { clip-path: none !important; animation: none !important }
          .hmv-fade { opacity: 1 !important; transform: none !important; animation: none !important }
          .hmv-swing { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} tracking-[0.06em] truncate`}>
            Manso de Velasco
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(30,27,25,0.94)',
          ink: C.arena,
          line: 'rgba(217,142,60,0.25)',
          btnBg: C.vino,
          btnInk: C.arena,
        }}
      />

      <div className="hmv-page">
        {/* ── 1 · Hero: la puerta que se abre a la terraza ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
          <div className="hmv-escena relative h-[100svh] min-h-[600px] max-h-[900px]">
            <Image
              src={`${IMG}/terraza-vino.webp`}
              alt="Copa de vino y tabla de frutas en la terraza del hotel, con San Fernando y la cordillera al atardecer"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[68%_center] md:object-[center_40%]"
            />
            {/* velo para el texto */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(30,27,25,0.52) 0%, rgba(30,27,25,0.12) 30%, rgba(30,27,25,0.34) 58%, rgba(30,27,25,0.9) 100%), radial-gradient(110% 70% at 8% 100%, rgba(30,27,25,0.5) 0%, transparent 62%)',
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 h-full max-w-6xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-9 md:pb-14">
              <p className="hmv-fade" style={{ '--hmv-d': '1.05s' } as CSSProperties}>
                <span
                  className={`${display.className} inline-flex flex-wrap items-center gap-x-2.5 gap-y-1.5 rounded-full border px-4 py-2 text-[9.5px] md:text-[11px] tracking-[0.16em] uppercase`}
                  style={{
                    color: '#FDF9F2',
                    backgroundColor: 'rgba(30,27,25,0.88)',
                    borderColor: 'rgba(217,142,60,0.55)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                  }}
                >
                  <span className="block h-px w-6 shrink-0" style={{ backgroundColor: C.ocre }} aria-hidden="true" />
                  San Fernando · Av. Manuel Rodríguez 421
                  <span className="w-1.5 h-1.5 shrink-0" style={{ transform: 'rotate(45deg)', backgroundColor: C.ocre }} aria-hidden="true" />
                </span>
              </p>
              <h1
                className={`${display.className} hmv-fade mt-5 leading-[1.04] tracking-[0.01em] text-[clamp(2.35rem,8.6vw,5rem)] max-w-3xl`}
                style={{ color: '#FDF9F2', '--hmv-d': '1.2s' } as CSSProperties}
              >
                Una noche en San Fernando, con la{' '}
                <span style={{ color: C.ocre }}>cordillera</span> al fondo.
              </h1>
              <Cordillera className="hmv-ridge mt-4 w-[min(430px,86%)]" color={C.ocre} height={34} />
              <p
                className="hmv-fade mt-4 max-w-lg text-base md:text-lg leading-relaxed"
                style={{ color: 'rgba(253,249,242,0.88)', '--hmv-d': '1.95s' } as CSSProperties}
              >
                Habitaciones cómodas, un desayuno que nuestros huéspedes
                destacan y estacionamiento, en el centro de la ciudad.
              </p>
              <div className="hmv-fade mt-6 flex flex-wrap items-center gap-x-5 gap-y-4" style={{ '--hmv-d': '2.1s' } as CSSProperties}>
                <BtnWa>Consulta disponibilidad por WhatsApp</BtnWa>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sm tap-44"
                  style={{ color: 'rgba(253,249,242,0.9)' }}
                >
                  <Stars value={BIZ.ratingValue} color={C.ocre} size={15} />
                  <span>
                    <strong className="font-semibold">{BIZ.rating}</strong> · {BIZ.reviews} opiniones en Google
                  </span>
                </a>
              </div>
            </div>

            {/* las dos hojas de la puerta */}
            <div className="hmv-puerta hmv-puerta-izq" aria-hidden="true">
              <span className="hmv-tirador" style={{ right: '16px' }} />
            </div>
            <div className="hmv-puerta hmv-puerta-der" aria-hidden="true">
              <span className="hmv-tirador" style={{ left: '16px' }} />
            </div>

            {/* la placa de la puerta: un llavero con el monograma */}
            <div className="hmv-placa" aria-hidden="true">
              <div className="flex flex-col items-center gap-5 px-6 text-center">
                <div className="relative w-[96px] h-[150px]">
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[30px] h-[30px] rounded-full"
                    style={{ border: `3px solid ${C.ocre}` }}
                  />
                  <span
                    className="absolute top-[33px] left-1/2 -translate-x-1/2 w-[3px] h-[11px] rounded-full"
                    style={{ backgroundColor: C.ocre }}
                  />
                  <span
                    className="absolute top-[44px] left-1/2 w-[76px] h-[76px] rounded-[12px] flex items-center justify-center"
                    style={{
                      transform: 'translateX(-50%) rotate(45deg)',
                      backgroundColor: C.vino,
                      boxShadow: '0 14px 34px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(244,237,227,0.3)',
                    }}
                  >
                    <span
                      className="absolute top-[7px] left-1/2 -translate-x-1/2 w-[9px] h-[9px] rounded-full"
                      style={{ backgroundColor: 'rgba(244,237,227,0.35)' }}
                    />
                    <span className={`${display.className} text-[26px]`} style={{ transform: 'rotate(-45deg)', color: C.arena }}>
                      MV
                    </span>
                  </span>
                </div>
                <div>
                  <p className={`${display.className} text-lg md:text-xl tracking-[0.22em] uppercase`} style={{ color: C.arena }}>
                    Hotel Manso de Velasco
                  </p>
                  <p className="mt-2 text-[10px] md:text-[11px] tracking-[0.42em] uppercase" style={{ color: C.ocre }}>
                    San Fernando
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2 · Datos rápidos: la banda de recepción ── */}
        <div style={{ backgroundColor: C.vino }}>
          <ul className="max-w-6xl mx-auto px-5 md:px-8 py-5 md:py-0 grid grid-cols-2 md:grid-cols-4 gap-y-5">
            {DATOS.map((d, i) => (
              <li
                key={d.titulo}
                className={`flex items-center gap-3.5 md:py-5 md:justify-center ${i > 0 ? 'md:border-l' : ''}`}
                style={{ borderColor: 'rgba(244,237,227,0.22)' }}
              >
                <span style={{ color: C.ocre }}>
                  <Icono d={d.icono} />
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-tight" style={{ color: C.arena }}>
                    {d.titulo}
                  </span>
                  <span className="block text-xs mt-0.5 leading-tight" style={{ color: 'rgba(244,237,227,0.78)' }}>
                    {d.detalle}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── 3 · 01 Habitaciones ── */}
        <section id="habitaciones" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <SelloSeccion num="01" rotulo="Habitaciones" />
            </Reveal>
            <div className="mt-7 grid lg:grid-cols-12 gap-8 lg:gap-10 items-end">
              <Reveal className="lg:col-span-7">
                <h2 className={`${display.className} leading-[1.06] tracking-[0.005em] text-[clamp(1.9rem,6vw,3.3rem)]`}>
                  Piezas extraordinariamente equipadas.
                </h2>
              </Reveal>
              <Reveal delay={100} className="lg:col-span-5">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: C.mutArena }}>
                  Amplias, iluminadas y con camas que se repiten en las
                  opiniones. Así describen las habitaciones quienes ya
                  durmieron acá.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-12">
              <Reveal className="col-span-2 lg:col-span-7">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/habitacion.webp`}
                    alt="Habitación doble luminosa con cama grande, cortinas y lámparas de velador"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={110} className="lg:col-span-5">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-12px)] overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/habitacion-desayuno.webp`}
                    alt="Bandeja de desayuno servida sobre la cama de una habitación cálida"
                    fill
                    sizes="(min-width: 1024px) 29vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={190} className="lg:col-span-5">
                <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[calc(50%-12px)] overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/habitacion-roja.webp`}
                    alt="Habitación con cubrecama rojo, sillón y escritorio de trabajo"
                    fill
                    sizes="(min-width: 1024px) 29vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <p className={`${display.className} mt-10 mb-4 text-[11px] tracking-[0.3em] uppercase`} style={{ color: C.ocreOsc }}>
                Lo que destacan nuestros huéspedes
              </p>
              <ul className="flex flex-wrap gap-2.5">
                {EQUIPO.map((e) => (
                  <li
                    key={e}
                    className="inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-sm"
                    style={{ borderColor: C.lineL, color: C.carbon, backgroundColor: 'rgba(251,247,239,0.7)' }}
                  >
                    <span className="w-1.5 h-1.5" style={{ transform: 'rotate(45deg)', backgroundColor: C.ocre }} aria-hidden="true" />
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · 02 Desayuno ── */}
        <section id="desayuno" className="scroll-mt-20" style={{ backgroundColor: C.carbon, color: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <SelloSeccion num="02" rotulo="Desayuno" dark />
            </Reveal>
            <div className="mt-7 grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <div className="lg:col-span-5">
                <Reveal>
                  <h2 className={`${display.className} leading-[1.06] tracking-[0.005em] text-[clamp(1.9rem,6vw,3.3rem)]`}>
                    El desayuno del que hablan las opiniones.
                  </h2>
                  <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                    Café, jugos naturales, frutas frescas, yogur con
                    granola y pastelería: la mesa de la mañana del Manso
                    de Velasco.
                  </p>
                </Reveal>
                <Reveal delay={120}>
                  <ul className="mt-7 space-y-0">
                    {DESAYUNO.map((d) => (
                      <li
                        key={d}
                        className="flex items-center gap-3.5 border-b py-3.5 text-[15px] md:text-base"
                        style={{ borderColor: 'rgba(244,237,227,0.14)', color: C.arena }}
                      >
                        <span className="w-1.5 h-1.5 shrink-0" style={{ transform: 'rotate(45deg)', backgroundColor: C.ocre }} aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
              <div className="lg:col-span-7 grid grid-cols-2 gap-4 lg:block lg:relative lg:h-[560px]">
                <Reveal className="col-span-2 lg:absolute lg:left-0 lg:top-0 lg:w-[62%]">
                  <div
                    className="relative aspect-[4/3] lg:aspect-auto lg:h-[390px] overflow-hidden rounded-lg"
                    style={{ boxShadow: '0 0 0 5px rgba(251,247,239,0.92), 0 26px 54px rgba(0,0,0,0.45)' }}
                  >
                    <Image
                      src={`${IMG}/desayuno.webp`}
                      alt="Mesa de desayuno con jugos en jarra, yogur con granola en copas, donas y muffins"
                      fill
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={120} className="lg:absolute lg:right-0 lg:top-6 lg:w-[36%]">
                  <div
                    className="relative aspect-[4/3] lg:aspect-auto lg:h-[240px] overflow-hidden rounded-lg"
                    style={{ boxShadow: '0 0 0 5px rgba(251,247,239,0.92), 0 20px 44px rgba(0,0,0,0.45)' }}
                  >
                    <Image
                      src={`${IMG}/buffet.webp`}
                      alt="Buffet de desayuno con cafetera, dispenser de jugo, frutas y panes"
                      fill
                      sizes="(min-width: 1024px) 24vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={200} className="lg:absolute lg:right-[10%] lg:bottom-0 lg:w-[42%]">
                  <div
                    className="relative aspect-[4/3] lg:aspect-auto lg:h-[200px] overflow-hidden rounded-lg"
                    style={{ boxShadow: '0 0 0 5px rgba(251,247,239,0.92), 0 20px 44px rgba(0,0,0,0.45)' }}
                  >
                    <Image
                      src={`${IMG}/frutas.webp`}
                      alt="Bandejas de frutas frescas cortadas: sandía, kiwi, piña y frutilla"
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · 03 Terraza ── */}
        <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <SelloSeccion num="03" rotulo="Terraza" />
            </Reveal>
            <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
              <Reveal className="max-w-2xl">
                <h2 className={`${display.className} leading-[1.06] tracking-[0.005em] text-[clamp(1.9rem,6vw,3.3rem)]`}>
                  La ciudad a tus pies, la cordillera al fondo.
                </h2>
              </Reveal>
              <Reveal delay={100} className="max-w-sm">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: C.mutArena }}>
                  La terraza del hotel mira a San Fernando y a la
                  cordillera: el lugar para cerrar el día.
                </p>
              </Reveal>
            </div>
            <Reveal delay={90}>
              <div className="relative mt-10">
                <div className="relative aspect-[4/3] lg:aspect-[16/8] overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza del hotel con sillones, mesa y vista a los tejados de San Fernando y la cordillera"
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative mt-4 lg:absolute lg:-bottom-7 lg:left-8 lg:mt-0 lg:max-w-[380px] rounded-xl px-5 py-4 md:px-7 md:py-5"
                  style={{ backgroundColor: C.vino, boxShadow: '0 18px 44px rgba(30,27,25,0.3)' }}
                >
                  <p className={`${display.className} text-[10px] tracking-[0.32em] uppercase`} style={{ color: C.ocreClaro }}>
                    La terraza del hotel
                  </p>
                  <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(244,237,227,0.9)' }}>
                    Vista a la ciudad y a la cordillera, con la luz del
                    atardecer de regalo.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · 04 Reuniones ── */}
        <section id="reuniones" className="scroll-mt-20 lg:mt-8" style={{ backgroundColor: C.vino, color: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <Reveal className="lg:col-span-6">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Sala para reuniones del hotel con mesas de trabajo, ventanales y el logo Manso de Velasco"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-4 md:gap-5">
                    <Llavero num="04" fob={C.carbon} ink={C.arena} ring={C.ocre} />
                    <Rotulo color={C.ocreClaro}>Reuniones</Rotulo>
                  </div>
                  <h2 className={`${display.className} mt-6 leading-[1.06] tracking-[0.005em] text-[clamp(1.9rem,6vw,3.2rem)]`}>
                    Una sala para reuniones, en pleno centro.
                  </h2>
                  <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,237,227,0.84)' }}>
                    Mesas de trabajo y luz natural para juntas y
                    encuentros, con la misma atención del hotel.
                  </p>
                  <div className="mt-8">
                    <BtnWa href={WA_REUNION} bg={C.arena} ink={C.vino}>
                      Consulta disponibilidad
                    </BtnWa>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
              <div className="lg:col-span-4">
                <Reveal>
                  <Rotulo>Opiniones · Google</Rotulo>
                  <p className={`${display.className} mt-5 leading-none text-[clamp(4.4rem,14vw,6.8rem)]`} style={{ color: C.vino }}>
                    {BIZ.rating}
                  </p>
                  <div className="mt-3">
                    <Stars value={BIZ.ratingValue} color={C.ocre} size={21} />
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-sm font-medium underline underline-offset-4 tap-44"
                    style={{ color: C.vino, textDecorationColor: C.ocre }}
                  >
                    {BIZ.reviews} opiniones en Google
                  </a>
                </Reveal>
              </div>
              <Reveal delay={90} className="lg:col-span-8">
                <blockquote>
                  <p className={`${display.className} leading-[1.18] text-[clamp(1.35rem,4vw,2.15rem)]`}>
                    “{REVIEWS[0].text}”
                  </p>
                  <footer className="mt-5 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.mutArena }}>
                    <span className="w-1.5 h-1.5" style={{ transform: 'rotate(45deg)', backgroundColor: C.ocre }} aria-hidden="true" />
                    {REVIEWS[0].author}
                  </footer>
                </blockquote>
              </Reveal>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-10">
              {REVIEWS.slice(1).map((r, i) => (
                <Reveal key={r.author} delay={i * 110}>
                  <blockquote className="border-t-2 pt-6 h-full" style={{ borderColor: C.vino }}>
                    <p className="text-[15px] md:text-base leading-relaxed" style={{ color: C.mutArena }}>
                      “{r.text}”
                    </p>
                    <footer className="mt-4 flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.carbon }}>
                      <span className="w-1.5 h-1.5" style={{ transform: 'rotate(45deg)', backgroundColor: C.ocre }} aria-hidden="true" />
                      {r.author}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8 · Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.carbon, color: C.arena }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-14">
              <div className="lg:col-span-5">
                <Reveal>
                  <Rotulo color={C.ocre}>Cómo llegar</Rotulo>
                  <h2 className={`${display.className} mt-6 leading-[1.08] tracking-[0.005em] text-[clamp(1.9rem,6vw,3rem)]`}>
                    Av. Manuel Rodríguez 421, San Fernando.
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <div className="mt-8 max-w-md">
                    {[
                      ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                      ['Entrada', `desde las ${BIZ.checkin}`],
                      ['Salida', `hasta las ${BIZ.checkout}`],
                      ['Estacionamiento', 'disponible para huéspedes'],
                    ].map(([k, v]) => (
                      <p
                        key={k}
                        className="flex items-baseline justify-between gap-6 border-b py-3.5 text-[15px] md:text-base"
                        style={{ borderColor: 'rgba(244,237,227,0.14)' }}
                      >
                        <span style={{ color: C.mutNoche }}>{k}</span>
                        <span className={`${display.className} text-right text-lg`} style={{ color: C.arena }}>
                          {v}
                        </span>
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
                    <BtnWa>Consulta disponibilidad</BtnWa>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} text-xl tracking-[0.04em] tap-44`}
                      style={{ color: C.ocre }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={120} className="lg:col-span-7">
                <div className="rounded-xl overflow-hidden h-full min-h-[300px]" style={{ border: `1px solid ${C.lineD}` }}>
                  <LazyMap
                    src={MAPS_EMBED}
                    title="Mapa: Hotel Manso de Velasco en Av. Manuel Rodríguez 421, San Fernando"
                    className="block w-full h-[300px] lg:h-full"
                    style={{ border: 0, backgroundColor: C.carbonBajo }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 9 · Footer ── */}
        <footer className="border-t" style={{ backgroundColor: C.carbonBajo, borderColor: 'rgba(217,142,60,0.22)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className={`${display.className} text-base tracking-[0.14em] uppercase`} style={{ color: C.arena }}>
                Hotel Manso de Velasco
              </p>
              <p className="mt-1 text-xs" style={{ color: C.mutNoche }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs" style={{ color: C.mutNoche }}>
              <span>{BIZ.rating} · {BIZ.reviews} opiniones en Google</span>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold tap-44"
                style={{ color: C.ocre }}
              >
                Consulta por WhatsApp →
              </a>
            </div>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label="Consultar por WhatsApp" />
    </div>
  )
}
