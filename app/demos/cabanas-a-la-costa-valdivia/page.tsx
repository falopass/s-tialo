import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Dirección de arte: «tu base tranquila en el camino a la costa».
 * Verde de la selva valdiviana, cal de las cabañas blancas y el naranja
 * del quitasol como único acento cálido; el río solo de detalle. El
 * motivo es el quitasol abierto visto desde arriba (un círculo de
 * gajos): se abre junto al titular, sella las citas girando un cuarto
 * de vuelta y marca el mapa. Marcellus pone la calma de hostería de
 * campo; Work Sans, el papel de ruta.
 */
const C = {
  selva: '#24402F',
  musgo: '#6F8F55',
  cal: '#F4F2EC',
  papel: '#FCFBF6',
  quitasol: '#E2702F',
  rio: '#2F5D73',
  mutSelva: 'rgba(36,64,47,0.74)',
  mutCal: 'rgba(244,242,236,0.74)',
  lineL: 'rgba(36,64,47,0.2)',
  lineD: 'rgba(244,242,236,0.2)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-a-la-costa-valdivia',
  title: 'Cabañas a la Costa · Cabañas en el camino a la costa, Valdivia',
  description:
    'Cabañas cómodas y equipadas, con jardín y quincho, en la T-350: el camino de Valdivia hacia la costa. 73 opiniones en Google. Consulta disponibilidad por WhatsApp.',
  image: '/demos/cabanas-a-la-costa-valdivia/fachada.webp',
})

const NAV_LINKS = [
  { label: 'Por dentro', href: '#dentro' },
  { label: 'El jardín', href: '#jardin' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// ── El quitasol abierto visto desde arriba ───────────────────

const GAJOS = [
  'M50 50 L50 4 A46 46 0 0 1 82.53 17.47 Z',
  'M50 50 L82.53 17.47 A46 46 0 0 1 96 50 Z',
  'M50 50 L96 50 A46 46 0 0 1 82.53 82.53 Z',
  'M50 50 L82.53 82.53 A46 46 0 0 1 50 96 Z',
  'M50 50 L50 96 A46 46 0 0 1 17.47 82.53 Z',
  'M50 50 L17.47 82.53 A46 46 0 0 1 4 50 Z',
  'M50 50 L4 50 A46 46 0 0 1 17.47 17.47 Z',
  'M50 50 L17.47 17.47 A46 46 0 0 1 50 4 Z',
]

/** El quitasol: ocho gajos alternando naranja y cal. `abre` los despliega uno a uno. */
function Quitasol({ className = '', abre = false }: { className?: string; abre?: boolean }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {GAJOS.map((d, i) => (
        <g
          key={i}
          className={abre ? 'ac-gajo' : undefined}
          style={abre ? ({ '--d': `${0.15 + i * 0.1}s` } as CSSProperties) : undefined}
        >
          <path d={d} fill={i % 2 === 0 ? C.quitasol : C.cal} stroke={C.selva} strokeWidth="1.2" />
        </g>
      ))}
      <circle cx="50" cy="50" r="46" fill="none" stroke={C.selva} strokeWidth="2.4" />
      <circle cx="50" cy="50" r="5.5" fill={C.selva} />
    </svg>
  )
}

/** Sello de cita: el quitasol gira un cuarto de vuelta al entrar en pantalla. */
function Sello({ className = 'w-12 h-12' }: { className?: string }) {
  return <Quitasol className={`ac-giro ${className}`} />
}

/** Rótulo de sección: versalitas con línea fina. */
function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5"
      style={{ color: light ? C.cal : C.selva }}
    >
      <span
        className="h-px w-9 shrink-0"
        style={{ backgroundColor: light ? 'rgba(226,112,47,0.85)' : C.musgo }}
        aria-hidden="true"
      />
      <span>{children}</span>
      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: light ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

function WaIcon({ className = 'w-[17px] h-[17px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`ac-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap tap-44 ${className}`}
      style={{ backgroundColor: C.quitasol, color: '#1A1A1A' }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

/** Postal sobre la mesa del jardín: marco blanco, leyenda chica, sombra de selva. */
function Postal({
  src,
  alt,
  w,
  h,
  caption,
  className = '',
  style,
}: {
  src: string
  alt: string
  w: number
  h: number
  caption?: string
  className?: string
  style?: CSSProperties
}) {
  return (
    <figure className={`ac-fan ${className}`} style={style}>
      <div
        className="rounded-lg p-1.5 md:p-2"
        style={{
          backgroundColor: C.papel,
          border: '1px solid rgba(36,64,47,0.1)',
          boxShadow: '0 18px 44px rgba(36,64,47,0.24)',
        }}
      >
        <Image src={src} alt={alt} width={w} height={h} className="block w-full h-auto rounded-[5px]" />
        {caption && (
          <figcaption
            className="pt-1.5 md:pt-2 pb-0.5 text-center text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: C.mutSelva }}
          >
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  )
}

export default function CabanasALaCostaPage() {
  return (
    <div className={`${body.className} ac min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.cal, color: C.selva }}>
      <style>{`
        html { scroll-behavior: auto }
        .ac a:focus-visible { outline: 2.5px solid ${C.rio}; outline-offset: 3px }

        /* «Se abre el quitasol»: cada gajo gira y crece hasta su sitio,
           uno tras otro (~1,2 s en total). */
        .ac-gajo {
          transform-box: view-box;
          transform-origin: 50% 50%;
          animation: ac-gajo .55s cubic-bezier(.24,.68,.3,1.18) both;
          animation-delay: var(--d, 0s);
        }
        @keyframes ac-gajo {
          from { transform: rotate(-34deg) scale(.3); opacity: 0 }
          to { transform: rotate(0deg) scale(1); opacity: 1 }
        }

        /* Las postales se despliegan en abanico desde el centro. */
        .ac-fan {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(calc(-50% + var(--tx, 0%)), calc(-50% + var(--ty, 0%))) rotate(var(--r, 0deg));
          animation: ac-abanico 1s cubic-bezier(.2,.68,.26,1) both;
          animation-delay: var(--d, .3s);
        }
        @keyframes ac-abanico {
          from { transform: translate(-50%, -50%) rotate(0deg) scale(.45); opacity: 0 }
        }

        /* Titular por líneas y entradas suaves. */
        @keyframes ac-linea { from { opacity: 0; transform: translateY(110%) } to { opacity: 1; transform: none } }
        .ac-linea { display: inline-block; animation: ac-linea .85s cubic-bezier(.2,.65,.2,1) both; animation-delay: var(--d, 0s) }
        @keyframes ac-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .ac-fade { animation: ac-fade .85s ease-out both; animation-delay: var(--d, 0s) }

        /* La marca bajo «a la costa.» se dibuja de izquierda a derecha. */
        @keyframes ac-swoosh { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .ac-swoosh { transform-origin: 0 50%; animation: ac-swoosh .7s ease-out 1.2s both }

        /* El sello de las citas gira un cuarto de vuelta al entrar. */
        @supports (animation-timeline: view()) {
          .ac-giro {
            animation: ac-giro linear both;
            animation-timeline: view();
            animation-range: entry 0% entry 55%;
          }
        }
        @keyframes ac-giro { from { transform: rotate(-90deg) } to { transform: rotate(0deg) } }

        .ac-btn { transition: transform .18s ease, filter .18s ease }
        .ac-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .ac-btn:active { transform: scale(.97) }

        .ac-foto { transition: transform .6s cubic-bezier(.2,.6,.2,1) }
        .ac-foto:hover { transform: scale(1.02) }

        @media (prefers-reduced-motion: reduce) {
          .ac-gajo, .ac-fan, .ac-linea, .ac-fade, .ac-swoosh, .ac-giro { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Quitasol className="w-6 h-6 shrink-0" />
            <span className={`${display.className} text-xl md:text-[22px] tracking-[0.01em] truncate`}>
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        theme={{
          over: 'light',
          bar: 'rgba(244,242,236,0.95)',
          ink: C.selva,
          line: C.lineL,
          btnBg: C.quitasol,
          btnInk: '#1A1A1A',
        }}
      />

      {/* ── 1 · Hero: se abre el quitasol ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-16 grid lg:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-12 items-center">
          <div>
            <p className="ac-fade flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-6" style={{ color: C.selva, '--d': '0.1s' } as CSSProperties}>
              <span className="h-px w-9" style={{ backgroundColor: C.musgo }} aria-hidden="true" />
              Valdivia · Camino a la costa
            </p>

            <div className="relative">
              <h1
                className={`${display.className} pr-14 md:pr-28 leading-[1.04] tracking-[0.005em] text-[clamp(2.55rem,10vw,4.4rem)]`}
                style={{ color: C.selva }}
              >
                <span className="block overflow-hidden">
                  <span className="ac-linea block" style={{ '--d': '0.3s' } as CSSProperties}>Tu base</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ac-linea block" style={{ '--d': '0.42s' } as CSSProperties}>tranquila</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ac-linea block" style={{ '--d': '0.54s' } as CSSProperties}>en el camino</span>
                </span>
                <span className="block overflow-hidden">
                  <span className="ac-linea block" style={{ '--d': '0.66s' } as CSSProperties}>
                    <span className="relative inline-block">
                      a la costa.
                      <svg
                        viewBox="0 0 200 12"
                        preserveAspectRatio="none"
                        className="ac-swoosh absolute left-0 -bottom-1 md:-bottom-2 w-full h-[0.14em]"
                        aria-hidden="true"
                      >
                        <path d="M3 8 Q 52 2 102 7 T 197 5" fill="none" stroke={C.quitasol} strokeWidth="5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </span>
                </span>
              </h1>
              <Quitasol abre className="absolute right-0 top-1 md:top-2 w-14 h-14 md:w-24 md:h-24" />
            </div>

            <p
              className="ac-fade mt-6 max-w-md text-base md:text-lg leading-relaxed"
              style={{ color: C.mutSelva, '--d': '0.9s' } as CSSProperties}
            >
              Cabañas cómodas y equipadas, con jardín y quincho, en un
              sector tranquilo de Valdivia.
            </p>

            <div className="ac-fade mt-7 flex flex-col sm:flex-row gap-3" style={{ '--d': '1s' } as CSSProperties}>
              <BtnWa className="w-full sm:w-auto">Consulta disponibilidad por WhatsApp</BtnWa>
              <a
                href="#dentro"
                className="ac-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap tap-44"
                style={{ border: `1.5px solid ${C.selva}`, color: C.selva }}
              >
                Ver las cabañas
              </a>
            </div>

            <p className="ac-fade mt-6 text-sm" style={{ '--d': '1.15s' } as CSSProperties}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.rio, textDecorationColor: 'rgba(47,93,115,0.45)' }}
              >
                {BIZ.reviews} opiniones en Google
              </a>
            </p>
          </div>

          {/* El abanico de postales sobre la mesa del jardín */}
          <div className="relative h-[290px] md:h-[430px] lg:h-[480px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 bottom-[2%] h-[46%] w-[112%] -translate-x-1/2"
              style={{
                background: 'radial-gradient(ellipse at center, rgba(111,143,85,0.2) 0%, rgba(111,143,85,0) 68%)',
              }}
            />
            <Postal
              src={`${IMG}/patio.webp`}
              alt="El jardín de Cabañas a la Costa con mesa, sillas y árboles"
              w={1200}
              h={900}
              className="z-10 w-[44%] md:w-[40%]"
              style={{ '--tx': '-62%', '--ty': '-16%', '--r': '-9deg', '--d': '0.45s' } as CSSProperties}
            />
            <Postal
              src={`${IMG}/cabana-blanca.webp`}
              alt="Cabaña blanca de Cabañas a la Costa con quitasol naranja en el pasto"
              w={640}
              h={480}
              className="z-10 w-[36%] md:w-[32%]"
              style={{ '--tx': '72%', '--ty': '-10%', '--r': '8deg', '--d': '0.62s' } as CSSProperties}
            />
            <Postal
              src={`${IMG}/fachada.webp`}
              alt="Cabañas blancas de dos pisos de Cabañas a la Costa, con jardín y cielo azul"
              w={1200}
              h={900}
              caption="las cabañas"
              className="z-20 w-[56%] md:w-[52%]"
              style={{ '--tx': '0%', '--ty': '4%', '--r': '-1.5deg', '--d': '0.78s' } as CSSProperties}
            />
          </div>
        </div>
      </section>

      {/* ── 2 · Por dentro: mosaico de la cabaña ── */}
      <section id="dentro" className="scroll-mt-20" style={{ backgroundColor: C.cal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo>Por dentro</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4 mb-9 md:mb-12">
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.5vw,3.9rem)]`} style={{ color: C.selva }}>
                La cabaña completa,
                <br />
                en dos pisos.
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutSelva }}>
                Cocina equipada con refrigerador, microondas y TV,
                dormitorio de madera y la escalera que une los dos pisos.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-6 lg:grid-cols-12 lg:grid-rows-[270px_360px] gap-3 md:gap-4">
            <Reveal className="col-span-6 lg:col-span-4 lg:row-span-2">
              <figure className="ac-foto relative overflow-hidden rounded-2xl h-full aspect-[4/3] lg:aspect-auto">
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Living con escalera de madera y puf dentro de la cabaña"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                  el living
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={90} className="col-span-4 lg:col-span-5">
              <figure className="ac-foto relative overflow-hidden rounded-2xl h-full aspect-[4/3] lg:aspect-auto">
                <Image
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina equipada con refrigerador, microondas y TV"
                  fill
                  sizes="(min-width: 1024px) 40vw, 66vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                  cocina equipada
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120} className="col-span-2 lg:col-span-3">
              <figure className="ac-foto relative overflow-hidden rounded-2xl h-full aspect-[3/4] lg:aspect-auto">
                <Image
                  src={`${IMG}/dormitorio.webp`}
                  alt="Dormitorio de madera con cama matrimonial"
                  fill
                  sizes="(min-width: 1024px) 25vw, 33vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                  el dormitorio
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={160} className="col-span-2 lg:col-span-3">
              <figure className="ac-foto relative overflow-hidden rounded-2xl h-full aspect-[3/4] lg:aspect-auto">
                <Image
                  src={`${IMG}/escalera.webp`}
                  alt="Escalera de madera de la cabaña vista desde arriba hacia la puerta"
                  fill
                  sizes="(min-width: 1024px) 25vw, 33vw"
                  className="object-cover"
                />
                <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                  los dos pisos
                </figcaption>
              </figure>
            </Reveal>
            {/* Sello de la cita en el mosaico */}
            <Reveal delay={200} className="col-span-4 lg:col-span-5">
              <figure
                className="h-full rounded-2xl p-5 md:p-6 flex flex-col justify-between gap-4"
                style={{ backgroundColor: C.selva }}
              >
                <Sello className="w-10 h-10 md:w-12 md:h-12" />
                <blockquote className="text-[13px] md:text-[15px] leading-relaxed" style={{ color: C.cal }}>
                  “{REVIEWS[0].text}”
                </blockquote>
                <figcaption className="text-xs font-bold" style={{ color: C.mutCal }}>
                  {REVIEWS[0].author} · Google
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3 · El jardín: pasto, quitasoles y quincho ── */}
      <section id="jardin" className="scroll-mt-20" style={{ backgroundColor: '#E1E4D7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo>El jardín</Rotulo>
            <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.5vw,3.9rem)] max-w-3xl`} style={{ color: C.selva }}>
              Pasto, quitasoles
              <br />
              y quincho con parrilla.
            </h2>
            <p className="mt-5 max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.selva }}>
              El asado se hace en casa: jardín con mesas y quitasoles, un
              quincho de madera y naturaleza alrededor para descansar.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14 grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <Reveal className="lg:col-span-5">
              <figure>
                <div className="ac-foto relative overflow-hidden rounded-2xl aspect-[3/4]" style={{ boxShadow: '0 18px 48px rgba(36,64,47,0.2)' }}>
                  <Image
                    src={`${IMG}/jardin.webp`}
                    alt="El jardín visto desde arriba, con quitasoles blancos entre los árboles"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3 flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.selva }}>
                  <Quitasol className="w-4 h-4" />
                  El jardín desde arriba
                </figcaption>
              </figure>
            </Reveal>
            <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-7">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <Reveal delay={80}>
                  <figure className="ac-foto relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={`${IMG}/quincho.webp`}
                      alt="Quincho de madera techado con parrilla"
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                      el quincho
                    </figcaption>
                  </figure>
                </Reveal>
                <Reveal delay={160}>
                  <figure className="ac-foto relative overflow-hidden rounded-2xl aspect-[4/3]">
                    <Image
                      src={`${IMG}/patio.webp`}
                      alt="Mesa de vidrio y sillas en el patio, rodeado de árboles"
                      fill
                      sizes="(min-width: 1024px) 28vw, 50vw"
                      className="object-cover"
                    />
                    <figcaption className="absolute left-3 bottom-3 text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full" style={{ backgroundColor: 'rgba(36,64,47,0.82)', color: C.cal }}>
                      la mesa de afuera
                    </figcaption>
                  </figure>
                </Reveal>
              </div>
              <Reveal delay={140}>
                <figure
                  className="rounded-2xl p-6 md:p-8 flex gap-5 items-start"
                  style={{ backgroundColor: C.papel, border: `1px solid ${C.lineL}` }}
                >
                  <Sello className="w-11 h-11 md:w-14 md:h-14 shrink-0 mt-1" />
                  <div>
                    <blockquote className="text-[15px] md:text-lg leading-relaxed" style={{ color: C.selva }}>
                      “{REVIEWS[2].text}”
                    </blockquote>
                    <figcaption className="mt-4 text-xs md:text-sm font-bold" style={{ color: C.mutSelva }}>
                      {REVIEWS[2].author} · Google
                    </figcaption>
                  </div>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · El anfitrión: la cita grande ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.selva }}>
        <Quitasol
          className="absolute -right-24 md:-right-16 top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[420px] md:h-[420px] opacity-[0.16] pointer-events-none"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo light>El anfitrión</Rotulo>
          </Reveal>
          <Reveal delay={80}>
            <div className="max-w-3xl">
              <Sello className="w-14 h-14 md:w-16 md:h-16 mb-7" />
              <blockquote
                className={`${display.className} leading-[1.18] text-[clamp(1.5rem,4.6vw,2.6rem)]`}
                style={{ color: C.cal }}
              >
                “{REVIEWS[1].text}”
              </blockquote>
              <figcaption className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2" style={{ color: C.cal }}>
                <span className="text-sm font-bold" style={{ color: C.cal }}>
                  {REVIEWS[1].author} · Google
                </span>
                <span className="text-sm" style={{ color: C.mutCal }}>
                  {BIZ.rating} · {BIZ.reviews} opiniones en Google
                </span>
              </figcaption>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-9">
              <BtnWa>Consulta disponibilidad por WhatsApp</BtnWa>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Cómo llegar: la T-350 hacia la costa ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.rio }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <p className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5" style={{ color: C.cal }}>
                <span className="h-px w-9" style={{ backgroundColor: C.cal }} aria-hidden="true" />
                <span>Cómo llegar</span>
                <span className="h-px flex-1 min-w-8" style={{ backgroundColor: 'rgba(244,242,236,0.3)' }} aria-hidden="true" />
              </p>
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.5vw,3.9rem)]`} style={{ color: C.cal }}>
                En el camino
                <br />
                a la costa.
              </h2>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(244,242,236,0.85)' }}>
                Las cabañas quedan en la T-350, el camino de Valdivia
                hacia la costa, en un sector tranquilo y seguro de la
                ciudad.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <BtnWa className="w-full sm:w-auto">Consulta disponibilidad</BtnWa>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ac-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-sm md:text-base font-bold tap-44"
                  style={{ border: '1.5px solid rgba(244,242,236,0.65)', color: C.cal }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <p className="mt-5 text-sm" style={{ color: 'rgba(244,242,236,0.85)' }}>
                Sin horario publicado: la disponibilidad se confirma por
                WhatsApp.
              </p>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="relative">
              <div
                className="rounded-2xl p-2.5"
                style={{ backgroundColor: C.papel, boxShadow: '0 18px 50px rgba(18,35,23,0.35)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="block w-full h-[280px] md:h-[340px] rounded-xl border-0"
                />
              </div>
              <div
                className="absolute -top-6 -left-3 md:-left-5 w-14 h-14 md:w-[68px] md:h-[68px] rounded-full p-1.5"
                style={{ backgroundColor: C.papel, boxShadow: '0 10px 26px rgba(18,35,23,0.35)' }}
              >
                <Sello className="w-full h-full" />
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold tap-44"
                style={{ color: C.cal }}
              >
                {BIZ.address} · {BIZ.city}, {BIZ.region}
                <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 13L13 3M6 3h7v7" />
                </svg>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Footer compacto ── */}
      <footer style={{ backgroundColor: C.selva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <Quitasol className="w-8 h-8 shrink-0" />
            <div>
              <p className={`${display.className} text-lg leading-tight`} style={{ color: C.cal }}>
                {BIZ.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.mutCal }}>
                {BIZ.address} · camino a la costa · {BIZ.city}
              </p>
            </div>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
            style={{ color: C.cal, textDecorationColor: 'rgba(226,112,47,0.8)' }}
          >
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
