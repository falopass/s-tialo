import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, OPINIONES, WA_LINK, WA_GRUA, WA_TALLER, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Ruta del sur: asfalto, rojo de la plataforma, amarillo de la línea
// de calzada y el blanco de la cabina.
const C = {
  asfalto: '#1C1F22',
  asfalto2: '#262A2E',
  rojo: '#C7332B',
  rojoOsc: '#9E2822',
  amarillo: '#F2C230',
  cabina: '#F4F2EE',
  gris: '#5B6168',
  line: 'rgba(28,31,34,0.14)',
  lineClara: 'rgba(244,242,238,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'gruas-irribarra-villarrica',
  title: 'Grúas Irribarra · Grúa y mecánico automotriz en Villarrica',
  description:
    'Servicio de grúa y taller mecánico en Sector Putúe Alto, Villarrica. Todos los días de 9:00 a 19:00. 4,8 en Google. Escríbenos por WhatsApp.',
  image: '/demos/gruas-irribarra-villarrica/hero.webp',
})

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como' },
  { label: 'Servicios', href: '#grua' },
  { label: 'Horario', href: '#horario' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

const DIAS = ['LUN', 'MAR', 'MIÉ', 'JUE', 'VIE', 'SÁB', 'DOM']

/* Grúa plataforma de perfil: cama roja, cabina blanca, baliza ámbar.
   Mira hacia la derecha, lista para salir a buscar un auto. */
function GruaSVG({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 124 46" className={className} aria-hidden="true">
      {/* baliza */}
      <circle cx="106" cy="3.4" r="2.8" fill={C.amarillo} className="gi-baliza" />
      {/* cabina blanca */}
      <rect x="92" y="7" width="26" height="24" rx="2.5" fill={C.cabina} />
      <rect x="95.5" y="10.5" width="13" height="9" rx="1.2" fill={C.asfalto2} />
      <rect x="112.5" y="24" width="6.5" height="7" rx="1" fill={C.cabina} />
      {/* cama roja */}
      <rect x="3" y="16" width="88" height="7" rx="1.5" fill={C.rojo} />
      <rect x="3" y="11.5" width="9" height="5" rx="1" fill={C.rojoOsc} />
      {/* chasis */}
      <rect x="3" y="23" width="115" height="5" rx="1" fill="#3A3F44" />
      <rect x="28" y="23" width="6" height="9" fill="#3A3F44" />
      {/* ruedas */}
      <g>
        <circle cx="17" cy="35" r="7" fill="#101214" />
        <circle cx="17" cy="35" r="2.8" fill="#7A8087" />
        <circle cx="52" cy="35" r="7" fill="#101214" />
        <circle cx="52" cy="35" r="2.8" fill="#7A8087" />
        <circle cx="103" cy="35" r="7" fill="#101214" />
        <circle cx="103" cy="35" r="2.8" fill="#7A8087" />
      </g>
    </svg>
  )
}

/* La ruta animada del hero: la banda se pinta, la línea de calzada
   aparece tramo a tramo y la grúa sale del taller hasta el pin. */
function Ruta() {
  return (
    <div className="relative h-[108px] md:h-[124px]" aria-hidden="true">
      {/* pin de destino: la grúa frena justo donde quedó tu auto */}
      <svg viewBox="0 0 14 18" className="gi-pin absolute right-[10px] top-[48px] md:top-[62px] h-[20px] w-[16px]" style={{ transformOrigin: 'bottom center' }}>
        <path d="M7 0a6.5 6.5 0 0 0-6.5 6.5C0.5 11 7 18 7 18s6.5-7 6.5-11.5A6.5 6.5 0 0 0 7 0Z" fill={C.amarillo} />
        <circle cx="7" cy="6.6" r="2.4" fill={C.asfalto} />
      </svg>
      {/* berma de la ruta */}
      <div className="gi-berma absolute left-0 right-0 top-[62px] md:top-[76px] h-[13px] rounded-full" style={{ backgroundColor: 'rgba(244,242,238,0.16)' }} />
      {/* línea de calzada segmentada */}
      <div className="gi-linea absolute left-[2px] right-[12%] top-[67px] md:top-[81px] flex gap-[9px]">
        {Array.from({ length: 26 }).map((_, i) => (
          <span key={i} className="block h-[3px] flex-1 rounded-[1px]" style={{ backgroundColor: C.amarillo }} />
        ))}
      </div>
      {/* la grúa en camino */}
      <div className="gi-grua absolute right-[10%] top-[17px] md:top-[14px] w-[150px] md:w-[200px]">
        <GruaSVG className="block w-full h-auto" />
      </div>
      {/* rótulos bajo la ruta: origen y destino */}
      <div className="absolute left-0 top-[86px] md:top-[100px] flex items-center gap-1.5">
        <span className="block h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: C.rojo }} />
        <span className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.14em]`} style={{ color: 'rgba(244,242,238,0.75)' }}>
          TALLER · PUTÚE ALTO
        </span>
      </div>
      <div className="gi-pin absolute right-0 top-[84px] md:top-[98px]">
        <span className={`${mono.className} rounded-[3px] px-1.5 py-0.5 text-[10px] md:text-[11px] font-bold tracking-[0.12em]`} style={{ backgroundColor: C.amarillo, color: C.asfalto }}>
          TU AUTO
        </span>
      </div>
    </div>
  )
}

function Rotulo({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${mono.className} flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em]`} style={{ color }}>
      <span className="inline-block h-[9px] w-[9px] rounded-[2px]" style={{ backgroundColor: color }} aria-hidden="true" />
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
  tone: 'rojo' | 'amarillo' | 'lineClaro' | 'lineOscuro'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#FFFFFF' }
      : tone === 'amarillo'
        ? { backgroundColor: C.amarillo, color: C.asfalto }
        : tone === 'lineClaro'
          ? { border: '2px solid rgba(244,242,238,0.65)', color: C.cabina }
          : { border: `2px solid ${C.asfalto}`, color: C.asfalto }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} gi-btn inline-flex items-center justify-center px-6 py-3 rounded-[4px] text-base font-semibold uppercase tracking-[0.1em] tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

/* Marco de foto con aire de ficha técnica: borde claro y rótulo mono. */
function FotoFicha({ src, alt, caption, priority = false, sizes, imgClass = 'object-cover' }: {
  src: string
  alt: string
  caption: string
  priority?: boolean
  sizes: string
  imgClass?: string
}) {
  return (
    <figure className="relative overflow-hidden rounded-[6px]" style={{ border: '1px solid rgba(244,242,238,0.2)' }}>
      <div className="relative aspect-[4/3]">
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className={imgClass} />
      </div>
      <figcaption
        className={`${mono.className} absolute left-3 bottom-3 rounded-[3px] px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]`}
        style={{ backgroundColor: 'rgba(28,31,34,0.82)', color: C.amarillo }}
      >
        {caption}
      </figcaption>
    </figure>
  )
}

export default function GruasIrribarraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.cabina, color: C.asfalto }}
    >
      <style>{`
        /* La ruta se dibuja: berma y línea de calzada se revelan de izquierda a derecha. */
        @keyframes gi-wipe { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
        .gi-berma { animation: gi-wipe 0.7s cubic-bezier(0.3,0.7,0.2,1) 0.45s both }
        .gi-linea { animation: gi-wipe 1.1s cubic-bezier(0.3,0.7,0.2,1) 0.6s both }

        /* La grúa sale del taller: entra desde fuera de pantalla y frena
           con un pequeño pique delantero antes de quedar en su sitio. */
        @keyframes gi-maneja {
          0% { transform: translateX(-110vw) }
          82% { transform: translateX(9px) rotate(-1.4deg) }
          100% { transform: translateX(0) rotate(0deg) }
        }
        .gi-grua { animation: gi-maneja 1.55s cubic-bezier(0.22,0.75,0.25,1) 0.5s both }

        /* El pin de destino aterriza cuando la grúa ya está frenando. */
        @keyframes gi-pin {
          from { transform: scale(0) translateY(-10px); opacity: 0 }
          to { transform: scale(1) translateY(0); opacity: 1 }
        }
        .gi-pin { animation: gi-pin 0.4s cubic-bezier(0.3,1.6,0.5,1) 1.75s both }

        /* Titular: cada línea se revela como letrero, de izquierda a derecha. */
        @keyframes gi-letrero {
          from { clip-path: inset(0 100% 0 0); transform: translateX(14px); opacity: 0 }
          to { clip-path: inset(0 0 0 0); transform: none; opacity: 1 }
        }
        .gi-letrero { display: block; animation: gi-letrero 0.75s cubic-bezier(0.3,0.7,0.2,1) both }

        @keyframes gi-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .gi-sube { animation: gi-sube 0.7s cubic-bezier(0.2,0.7,0.2,1) both }

        /* Baliza de la grúa: parpadea como luz ámbar de trabajo. */
        @keyframes gi-baliza { 0%, 100% { opacity: 1 } 50% { opacity: 0.15 } }
        .gi-baliza { animation: gi-baliza 1.1s ease-in-out infinite }

        /* Línea de calzada que se dibuja bajo los títulos, al entrar en vista. */
        @supports (animation-timeline: view()) {
          .gi-calzada { animation: gi-wipe linear both; animation-timeline: view(); animation-range: entry 10% entry 60% }
        }

        .gi-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .gi-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .gi-btn:active { transform: scale(0.97) }
        .gi-btn:focus-visible { outline: 3px solid ${C.amarillo}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .gi-berma, .gi-linea, .gi-grua, .gi-pin, .gi-letrero, .gi-sube, .gi-baliza, .gi-calzada { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(28,31,34,0.95)',
          ink: C.cabina,
          line: C.lineClara,
          btnBg: C.amarillo,
          btnInk: C.asfalto,
        }}
      />

      {/* 1 · Hero: la grúa sale a buscarte */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.asfalto }}
      >
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Grúa plataforma roja y blanca de Grúas Irribarra trasladando un auto en la ruta de Villarrica"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[62%_center]"
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(28,31,34,0.6) 0%, rgba(28,31,34,0.2) 34%, rgba(28,31,34,0.9) 74%, rgba(28,31,34,1) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 pb-7 md:pb-10">
          <p
            className={`${mono.className} gi-sube inline-flex items-center gap-2.5 rounded-[3px] px-2.5 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]`}
            style={{ backgroundColor: 'rgba(28,31,34,0.72)', color: C.amarillo, animationDelay: '0.15s' }}
          >
            <span className="gi-baliza block h-2 w-2 rounded-full" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
            Grúa + taller · Villarrica · 7/7
          </p>
          <h1
            className={`${display.className} mt-4 font-bold uppercase leading-[0.94] tracking-[0.005em] text-[clamp(3rem,14vw,7.2rem)]`}
            style={{ color: C.cabina }}
          >
            <span className="gi-letrero" style={{ animationDelay: '0.3s' }}>Te vamos</span>
            <span className="gi-letrero" style={{ animationDelay: '0.45s', color: C.amarillo }}>a buscar.</span>
          </h1>
          <div className="gi-sube mt-1 max-w-lg" style={{ animationDelay: '0.6s' }}>
            <Ruta />
          </div>
          <p
            className="gi-sube mt-2 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(244,242,238,0.88)', animationDelay: '0.85s' }}
          >
            Grúa plataforma y taller mecánico en Sector Putúe Alto.
            Todos los días, de 9:00 a 19:00.
          </p>
          <div className="gi-sube mt-6 flex flex-wrap gap-3" style={{ animationDelay: '1s' }}>
            <Btn href={WA_GRUA} tone="amarillo">
              Pedir grúa por WhatsApp
            </Btn>
            <Btn href={WA_TALLER} tone="lineClaro">
              Agendar revisión
            </Btn>
          </div>
        </div>
      </section>

      {/* 2 · Cómo funciona: itinerario de tres paradas */}
      <section id="como" className="scroll-mt-20" style={{ backgroundColor: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Rotulo color={C.rojo}>Cómo funciona</Rotulo>
            <h2 className={`${display.className} mt-3 font-bold uppercase leading-[0.96] text-[clamp(2.3rem,7vw,4.4rem)]`}>
              Pedir la grúa
              <br />
              es así de simple
            </h2>
            <div className="gi-calzada mt-5 h-[4px] w-40 rounded-[1px]" style={{ backgroundColor: C.amarillo }} />
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-8 md:gap-6">
            {[
              {
                n: '01',
                t: 'Mandas tu ubicación',
                d: 'Un mensaje por WhatsApp: dónde quedaste y qué le pasa al auto. El enlace ya lleva el texto listo.',
              },
              {
                n: '02',
                t: 'La grúa sale a buscarlo',
                d: 'Grúa plataforma, la que ves en las fotos. Sirve para autos y también para camionetas.',
              },
              {
                n: '03',
                t: 'Directo al taller',
                d: 'Si el auto necesita mecánica, ya queda en el galpón techado de Putúe Alto.',
              },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 110}>
                <article className="relative pl-12 md:pl-0 md:pt-14">
                  {/* riel del itinerario */}
                  <span
                    className="absolute left-[19px] top-11 bottom-[-28px] w-px md:hidden"
                    style={{
                      backgroundImage: `repeating-linear-gradient(180deg, ${C.amarillo} 0 6px, transparent 6px 12px)`,
                      opacity: i === 2 ? 0 : 1,
                    }}
                    aria-hidden="true"
                  />
                  <span
                    className="hidden md:block absolute left-0 top-0 right-6 h-[3px] rounded-[1px]"
                    style={{
                      backgroundImage: `repeating-linear-gradient(90deg, ${i === 2 ? C.line : C.amarillo} 0 10px, transparent 10px 18px)`,
                    }}
                    aria-hidden="true"
                  />
                  <p className={`${display.className} absolute left-0 top-0 md:relative text-4xl md:text-6xl font-bold leading-none`} style={{ color: C.rojo }}>
                    {p.n}
                  </p>
                  <h3 className={`${display.className} mt-1 md:mt-3 text-2xl md:text-[1.7rem] font-semibold uppercase leading-tight`}>
                    {p.t}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed max-w-xs" style={{ color: C.gris }}>
                    {p.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 · Grúa: panel rojo con ficha de la máquina */}
      <section id="grua" className="scroll-mt-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <Rotulo color={C.amarillo}>Servicio 01 · Grúa</Rotulo>
            <h2
              className={`${display.className} mt-3 font-bold uppercase leading-[0.96] text-[clamp(2.3rem,7vw,4.4rem)]`}
              style={{ color: C.cabina }}
            >
              La plataforma
              <br />
              <span style={{ color: C.rojo }}>va por el auto</span>
            </h2>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,242,238,0.85)' }}>
              Traslado en grúa plataforma para autos y camionetas. Al escribir,
              el mensaje ya sale preguntando dónde estás: solo la completas y envías.
            </p>
            <ul className="mt-6 space-y-3">
              {['Grúa plataforma para autos y camionetas', 'Coordinación directa por WhatsApp', 'Atención todos los días de la semana'].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[15px] leading-snug" style={{ color: 'rgba(244,242,238,0.85)' }}>
                  <span className="mt-1 block h-[10px] w-[16px] shrink-0" style={{ background: `linear-gradient(90deg, ${C.amarillo} 0 60%, transparent 60% 100%)` }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Btn href={WA_GRUA} tone="rojo">
                Pedir grúa por WhatsApp
              </Btn>
            </div>
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal delay={120}>
              <FotoFicha
                src={`${IMG}/camioneta.webp`}
                alt="Grúa de Grúas Irribarra trasladando una camioneta por la ruta"
                caption="Plataforma · patente ZZ·91·67"
                sizes="(min-width: 1024px) 44vw, 100vw"
                imgClass="object-cover"
              />
            </Reveal>
            <Reveal delay={220}>
              <FotoFicha
                src={`${IMG}/traslado.webp`}
                alt="Auto gris asegurado sobre la cama de la grúa en un camino de campo"
                caption="Auto asegurado en la cama"
                sizes="(min-width: 1024px) 44vw, 100vw"
                imgClass="object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4 · Taller: el galpón de Putúe Alto */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="relative overflow-hidden rounded-[6px] aspect-[4/3]" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/galpon.webp`}
                  alt="Galpón del taller de Grúas Irribarra con la grúa estacionada afuera"
                  fill
                  sizes="(min-width: 1024px) 44vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div
                className="absolute -bottom-8 -right-2 md:-right-8 w-[42%] overflow-hidden rounded-[6px] aspect-[3/4]"
                style={{ border: '5px solid ' + C.cabina, boxShadow: '0 14px 34px rgba(28,31,34,0.28)' }}
              >
                <Image
                  src={`${IMG}/mecanico.webp`}
                  alt="Mecánico del taller revisando el motor de un auto"
                  fill
                  sizes="(min-width: 1024px) 20vw, 42vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={80} className="order-1 lg:order-2">
            <Rotulo color={C.rojo}>Servicio 02 · Taller mecánico</Rotulo>
            <h2 className={`${display.className} mt-3 font-bold uppercase leading-[0.96] text-[clamp(2.3rem,7vw,4.4rem)]`}>
              Un galpón techado
              <br />
              camino a Rinconada
            </h2>
            <div className="gi-calzada mt-5 h-[4px] w-40 rounded-[1px]" style={{ backgroundColor: C.amarillo }} />
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.gris }}>
              Mecánica automotriz en el taller del sector Putúe Alto, con espacio
              techado para dejar el auto trabajando a resguardo.
            </p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.gris }}>
              Agenda la revisión por WhatsApp y coordina la hora directamente con
              el taller.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={WA_TALLER} tone="rojo">
                Agendar revisión
              </Btn>
              <Btn href={MAPS_URL} tone="lineOscuro">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5 · Horario: los siete días encendidos */}
      <section id="horario" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.amarillo }}>
        <div
          className="absolute inset-x-0 top-0 h-[10px] opacity-90"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.asfalto} 0 26px, transparent 26px 52px)` }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[auto_1fr] gap-8 lg:gap-16 items-center">
            <Reveal>
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.22em]`} style={{ color: C.rojoOsc }}>
                Horario de atención
              </p>
              <p className={`${display.className} mt-1 font-bold uppercase leading-[0.85] text-[clamp(5.2rem,22vw,11rem)]`} style={{ color: C.asfalto }}>
                7/7
              </p>
              <p className={`${mono.className} mt-2 text-sm md:text-base font-bold tracking-[0.08em]`} style={{ color: C.asfalto }}>
                9:00 <span style={{ color: C.rojoOsc }}>&gt;&gt;</span> 19:00
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-7 gap-1.5 md:gap-2">
                {DIAS.map((d) => (
                  <div
                    key={d}
                    className="rounded-[4px] py-2.5 md:py-3 text-center"
                    style={{ backgroundColor: C.asfalto }}
                  >
                    <span className={`${mono.className} block text-[10px] md:text-xs font-bold tracking-[0.06em]`} style={{ color: C.amarillo }}>
                      {d}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: '#4A3A08' }}>
                Abierto lunes a domingo, incluidos fines de semana. Si quedaste
                en pana un domingo, es lo mismo: escribe al WhatsApp.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 · Opiniones: señales con citas textuales */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.75fr_1.25fr] gap-10 lg:gap-16">
            <Reveal>
              <Rotulo color={C.amarillo}>Opiniones en Google</Rotulo>
              <p className={`${display.className} mt-3 font-bold leading-none text-[clamp(4.6rem,15vw,7.5rem)]`} style={{ color: C.cabina }}>
                {BIZ.rating}
              </p>
              <Stars value={BIZ.ratingValue} color={C.amarillo} size={22} className="mt-3" />
              <p className="mt-3 text-sm md:text-base" style={{ color: 'rgba(244,242,238,0.7)' }}>
                {BIZ.reviews} opiniones en la ficha de Google Maps.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} mt-5 inline-flex text-xs font-bold uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.amarillo, textDecorationColor: 'rgba(242,194,48,0.45)' }}
              >
                Ver la ficha en Google
              </a>
            </Reveal>
            <div className="flex flex-col gap-5">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.autor} delay={i * 110}>
                  <figure
                    className="rounded-[6px] px-5 py-5 md:px-7 md:py-6"
                    style={{
                      backgroundColor: C.cabina,
                      border: `2px solid ${i === 1 ? C.amarillo : 'rgba(28,31,34,0.85)'}`,
                      transform: `rotate(${i === 0 ? -0.6 : i === 2 ? 0.7 : 0}deg)`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em]`} style={{ color: C.gris }}>
                        Google Maps
                      </span>
                      <Stars value={5} color={C.rojo} size={13} />
                    </div>
                    <blockquote className={`${display.className} mt-3 text-[clamp(1.45rem,4.4vw,2.1rem)] font-semibold uppercase leading-[1.08]`} style={{ color: C.asfalto }}>
                      “{o.texto}”
                    </blockquote>
                    <figcaption className={`${mono.className} mt-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.14em]`} style={{ color: C.rojo }}>
                      {o.autor}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7 · Dónde: hito kilométrico + mapa */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <Reveal>
            <Rotulo color={C.rojo}>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-3 font-bold uppercase leading-[0.96] text-[clamp(2.2rem,6vw,3.9rem)]`}>
              Sector Putúe Alto,
              <br />
              camino a Rinconada
            </h2>
            <div className="gi-calzada mt-5 h-[4px] w-40 rounded-[1px]" style={{ backgroundColor: C.amarillo }} />
            <div
              className="mt-7 inline-block rounded-[6px] px-4 py-3"
              style={{ backgroundColor: C.asfalto }}
            >
              <p className={`${mono.className} text-xs md:text-sm leading-relaxed`} style={{ color: C.cabina }}>
                <span style={{ color: C.amarillo }}>DIR&gt;</span> {BIZ.address}
                <br />
                <span style={{ color: C.amarillo }}>COM&gt;</span> {BIZ.city}, {BIZ.region}
                <br />
                <span style={{ color: C.amarillo }}>WSP&gt;</span>{' '}
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 tap-44" style={{ color: C.cabina }}>
                  {BIZ.phoneDisplay}
                </a>
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="rojo">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="lineOscuro">
                WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-[6px] aspect-[4/3] min-h-[300px]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8 · Cierre: última señal antes de escribir */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asfalto2 }}>
        <div
          className="absolute inset-x-0 bottom-0 h-[10px]"
          style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.amarillo} 0 26px, transparent 26px 52px)` }}
          aria-hidden="true"
        />
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="mx-auto w-[150px] md:w-[190px]">
              <GruaSVG className="block w-full h-auto" />
            </div>
            <h2 className={`${display.className} mt-6 font-bold uppercase leading-[0.94] text-[clamp(2.7rem,10vw,5.6rem)]`} style={{ color: C.cabina }}>
              ¿Quedaste tirado
              <br />
              <span style={{ color: C.amarillo }}>en la ruta?</span>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,242,238,0.82)' }}>
              Escribe por WhatsApp dónde estás y qué le pasa al auto.
              Respondemos todos los días, de 9:00 a 19:00.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_GRUA} tone="amarillo">
                Pedir grúa por WhatsApp
              </Btn>
              <Btn href={WA_TALLER} tone="lineClaro">
                Agendar revisión
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 9 · Footer */}
      <footer style={{ backgroundColor: C.asfalto, color: C.cabina }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl font-bold uppercase`}>{BIZ.short}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(244,242,238,0.7)' }}>
                {BIZ.rubro} · {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(244,242,238,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineClara }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(244,242,238,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cabina }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
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
