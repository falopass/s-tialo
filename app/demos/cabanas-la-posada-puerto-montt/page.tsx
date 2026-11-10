import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, REVIEWS, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

/**
 * Dirección de arte: «Descansa en lo alto de Puerto Montt». El calor de
 * la madera al final del día: madera, ámbar de atardecer, cielo de la
 * noche sureña y crema. El motivo es el techo a dos aguas de las
 * cabañas: remata rótulos, marcos de foto y las líneas de techo que
 * separan las secciones. Bitter pone la voz cálida; Mulish, el papel.
 */
const C = {
  crema: '#F7EFE4',
  papel: '#FDF8EF',
  cielo: '#2E3A57',
  noche: '#232C45',
  madera: '#8A4B2A',
  atardecer: '#E8894A',
  ambarVentana: '#F4B266',
  hortensia: '#9B3F86',
  tinta: '#333D5B',
  mutCrema: 'rgba(46,58,87,0.72)',
  mutNoche: 'rgba(247,239,228,0.74)',
  mutNoche2: 'rgba(247,239,228,0.6)',
  lineL: 'rgba(46,58,87,0.18)',
  lineD: 'rgba(247,239,228,0.16)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-la-posada-puerto-montt',
  title: 'Cabañas La Posada · Cabañas de madera en Puerto Montt',
  description:
    'Cabañas de madera equipadas para cocinar en Calle Las Quemas 1470, Puerto Montt. Tranquilas, atendidas por su dueño y abiertas las 24 horas. Consulta disponibilidad por WhatsApp.',
  image: '/demos/cabanas-la-posada-puerto-montt/atardecer.webp',
})

const NAV_LINKS = [
  { label: 'Por dentro', href: '#dentro' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// ── Piezas del techo ─────────────────────────────────────────

/** El techo a dos aguas: un ángulo que remata rótulos y separadores. */
function Techo({ color = C.madera, className = 'w-[30px] h-[12px]' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 34 14" className={`${className} shrink-0`} aria-hidden="true">
      <path d="M2 12 L17 2 L32 12" fill="none" stroke={color} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Rótulo de sección: pequeño techo + versalitas + línea. */
function Rotulo({ children, color = C.madera, techo, light = false }: { children: React.ReactNode; color?: string; techo?: string; light?: boolean }) {
  return (
    <p className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5" style={{ color }}>
      <Techo color={techo ?? color} />
      <span>{children}</span>
      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: light ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** La gran línea de techo que separa secciones: un cerro de dos aguas. */
function TechoDivisor({ fill, className = 'h-9 md:h-14' }: { fill: string; className?: string }) {
  return (
    <svg viewBox="0 0 1440 90" preserveAspectRatio="none" aria-hidden="true" className={`block w-full ${className}`}>
      <path d="M0 90 L720 6 L1440 90 Z" fill={fill} />
    </svg>
  )
}

/**
 * Las ventanas de la hilera: una fila de ventanas cuadradas bajo su
 * techo, que se encienden una tras otra en ámbar (~1,5 s). Comunica
 * llegar de noche y encontrar las cabañas con luz propia.
 */
function Ventanas() {
  return (
    <div className="lp-cab shrink-0 pb-1" aria-hidden="true">
      <svg viewBox="0 0 128 30" className="block w-[108px] md:w-[132px] h-auto">
        <path d="M5 27 L64 4 L123 27" fill="none" stroke={C.atardecer} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <div className="flex gap-[8px] md:gap-[10px] px-[12px] md:px-[16px] mt-[1px]">
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="lp-win block w-[14px] h-[15px] md:w-[17px] md:h-[18px] rounded-[3px]"
            style={{ '--d': `${0.5 + i * 0.25}s` } as CSSProperties}
          />
        ))}
      </div>
    </div>
  )
}

/** Foto enmarcada en techo a dos aguas que se cierra al hacer scroll. */
function FotoTecho({
  src,
  alt,
  w,
  h,
  ratio,
  sizes,
  pos,
  className = '',
}: {
  src: string
  alt: string
  w: number
  h: number
  ratio: string
  sizes: string
  pos?: string
  className?: string
}) {
  return (
    <div className={`lp-techo relative overflow-hidden ${ratio} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        className="lp-zoom absolute inset-0 h-full w-full object-cover"
        style={pos ? { objectPosition: pos } : undefined}
      />
    </div>
  )
}

function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`lp-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap tap-44 ${className}`}
      style={{ backgroundColor: C.madera, color: '#FDF8EF' }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

/** Cita con su pequeño techo: la firma va con nombre e inicial. */
function Cita({
  text,
  author,
  light = true,
  big = false,
  className = '',
}: {
  text: string
  author: string
  light?: boolean
  big?: boolean
  className?: string
}) {
  return (
    <figure className={className}>
      <Techo color={C.atardecer} className="w-[26px] h-[11px] mb-4" />
      <blockquote
        className={
          big
            ? `${display.className} font-medium leading-[1.16] text-[clamp(1.45rem,4vw,2.2rem)]`
            : 'text-base md:text-lg leading-relaxed'
        }
        style={{ color: light ? C.crema : C.tinta }}
      >
        “{text}”
      </blockquote>
      <figcaption className="mt-4 text-sm font-bold" style={{ color: light ? C.mutNoche : C.mutCrema }}>
        {author} · Google
      </figcaption>
    </figure>
  )
}

export default function CabanasLaPosadaPage() {
  return (
    <div className={`${body.className} clp min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.crema, color: C.tinta }}>
      <style>{`
        html { scroll-behavior: auto }
        .clp a:focus-visible { outline: 2.5px solid ${C.atardecer}; outline-offset: 3px }

        /* El anochecer se disipa: velo azul que se aclara hacia el
           atardecer de la foto (llegar y sentir el calor de la cabaña). */
        @keyframes lp-noche { from { opacity: 1 } to { opacity: 0 } }
        .lp-anochecer { opacity: 0; animation: lp-noche 1.9s ease-in-out .15s both }

        /* El calor ámbar sube al disiparse la noche. */
        @keyframes lp-brillo { from { opacity: 0 } to { opacity: .55 } }
        .lp-brillo { opacity: .55; animation: lp-brillo 1.6s ease-out .65s both }

        /* Las ventanas se encienden una tras otra (~1,5 s en total). */
        @keyframes lp-enc {
          from { opacity: .12; box-shadow: 0 0 0 0 rgba(232,137,74,0) }
          60% { box-shadow: 0 0 16px 4px rgba(232,137,74,.9) }
          to { opacity: 1; box-shadow: 0 0 12px 2px rgba(232,137,74,.65) }
        }
        .lp-win {
          background-color: ${C.ambarVentana};
          box-shadow: 0 0 12px 2px rgba(232,137,74,.65);
          animation: lp-enc .45s ease-out both;
          animation-delay: var(--d, 0s);
        }

        /* Titular por líneas y entradas suaves. */
        @keyframes lp-linea { from { opacity: 0; transform: translateY(24px) } to { opacity: 1; transform: none } }
        .lp-linea { display: inline-block; animation: lp-linea .8s cubic-bezier(.2,.65,.2,1) both; animation-delay: var(--d, 0s) }
        @keyframes lp-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .lp-fade { animation: lp-fade .85s ease-out both; animation-delay: var(--d, 0s) }

        /* El marco a dos aguas se cierra sobre cada foto al hacer scroll. */
        @supports (animation-timeline: view()) {
          .lp-techo {
            clip-path: polygon(50% 0, 58% 7%, 58% 7%, 42% 7%, 42% 7%);
            animation: lp-techo linear both;
            animation-timeline: view();
            animation-range: entry 2% entry 58%;
          }
          @keyframes lp-techo {
            to { clip-path: polygon(50% 0, 100% 16%, 100% 100%, 0 100%, 0 16%) }
          }
          .lp-zoom {
            transform: scale(1.07);
            animation: lp-zoom linear both;
            animation-timeline: view();
            animation-range: entry 2% entry 82%;
          }
          @keyframes lp-zoom { to { transform: scale(1) } }
        }

        .lp-btn { transition: transform .18s ease, filter .18s ease }
        .lp-btn:hover { transform: translateY(-2px); filter: brightness(1.08) }
        .lp-btn:active { transform: scale(.97) }

        @media (prefers-reduced-motion: reduce) {
          .lp-anochecer, .lp-brillo, .lp-win, .lp-linea, .lp-fade { animation: none !important }
          .lp-techo { clip-path: none !important; animation: none !important }
          .lp-zoom { animation: none !important; transform: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-xl md:text-[22px] font-bold tracking-[0.01em] truncate`}>
            Cabañas La Posada
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Consultar"
        theme={{
          over: 'dark',
          bar: 'rgba(247,239,228,0.95)',
          ink: C.cielo,
          line: C.lineL,
          btnBg: C.madera,
          btnInk: '#FDF8EF',
        }}
      />

      {/* ── 1 · Hero: se encienden las ventanas ── */}
      <section id="inicio" className="relative min-h-svh overflow-hidden flex flex-col justify-end" style={{ backgroundColor: C.cielo }}>
        <Image
          src={`${IMG}/atardecer.webp`}
          alt="Cabañas de madera de Cabañas La Posada al atardecer, con Puerto Montt al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: '52% 46%' }}
        />
        {/* Velo fijo de lectura: el texto siempre va sobre fondo oscuro */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(35,44,69,0.5) 0%, rgba(35,44,69,0.18) 38%, rgba(24,30,48,0.9) 100%)',
          }}
        />
        {/* El calor del atardecer sube */}
        <div
          aria-hidden="true"
          className="lp-brillo absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(640px 380px at 62% 30%, rgba(232,137,74,0.4), transparent 70%), radial-gradient(420px 260px at 30% 82%, rgba(232,137,74,0.2), transparent 72%)',
          }}
        />
        {/* Velo de anochecer que se disipa */}
        <div
          aria-hidden="true"
          className="lp-anochecer absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(180deg, #2E3A57 0%, rgba(46,58,87,0.96) 60%, rgba(24,30,48,0.98) 100%)' }}
        />

        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-28 pb-14 md:pb-16">
          <p className="lp-fade flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5" style={{ color: C.crema, '--d': '0.15s' } as CSSProperties}>
            <Techo color={C.atardecer} />
            <span>Puerto Montt · Las Quemas 1470</span>
          </p>

          <div className="flex items-end justify-between gap-x-8 gap-y-5 flex-wrap">
            <h1
              className={`${display.className} font-bold leading-[1.02] tracking-[-0.01em] text-[clamp(2.7rem,10.5vw,5.6rem)]`}
              style={{ color: C.crema }}
            >
              <span className="lp-linea" style={{ '--d': '0.3s' } as CSSProperties}>Descansa</span>{' '}
              <span className="lp-linea" style={{ '--d': '0.4s' } as CSSProperties}>en lo alto</span>
              <br />
              <em className="lp-linea font-bold" style={{ color: C.atardecer, '--d': '0.52s' } as CSSProperties}>
                de Puerto Montt.
              </em>
            </h1>
            <div className="lp-fade" style={{ '--d': '0.5s' } as CSSProperties}>
              <Ventanas />
            </div>
          </div>

          <p
            className="lp-fade mt-6 max-w-md text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(247,239,228,0.92)', '--d': '1.25s' } as CSSProperties}
          >
            Cabañas de madera equipadas para cocinar, tranquilas y
            atendidas por su dueño.
          </p>

          <div className="lp-fade mt-7 flex flex-col sm:flex-row gap-3" style={{ '--d': '1.4s' } as CSSProperties}>
            <BtnWa className="w-full sm:w-auto">Consulta disponibilidad por WhatsApp</BtnWa>
            <a
              href="#dentro"
              className="lp-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-base font-bold tap-44"
              style={{ border: '1.5px solid rgba(247,239,228,0.6)', color: C.crema, backgroundColor: 'rgba(35,44,69,0.35)' }}
            >
              Ver por dentro
            </a>
          </div>

          <div className="lp-fade mt-7 flex flex-wrap items-center gap-x-4 gap-y-2" style={{ '--d': '1.55s' } as CSSProperties}>
            <Stars value={BIZ.ratingValue} color={C.ambarVentana} size={16} />
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm tap-44"
              style={{ color: 'rgba(247,239,228,0.9)' }}
            >
              <strong className="font-bold" style={{ color: C.crema }}>{BIZ.rating}</strong>
              {' '}· {BIZ.reviews} opiniones en Google
            </a>
            <span
              className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
              style={{ border: '1px solid rgba(244,178,102,0.5)', color: C.ambarVentana }}
            >
              Abierto las 24 horas
            </span>
          </div>
        </div>
      </section>

      {/* ── 2 · Confianza: nota real y palabra de visita ── */}
      <section className="relative" style={{ backgroundColor: C.cielo, color: C.crema }}>
        <div className="absolute inset-x-0 -top-9 md:-top-14 z-10" aria-hidden="true">
          <TechoDivisor fill={C.cielo} />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-16 md:pt-16 md:pb-24">
          <div className="grid md:grid-cols-[190px_1fr] lg:grid-cols-[230px_1fr] gap-9 md:gap-14 items-center">
            <Reveal>
              <figure className="flex md:block items-center gap-5">
                <div
                  className="shrink-0 p-2.5 rotate-[-2.5deg] rounded-lg w-[130px] md:w-full"
                  style={{ backgroundColor: C.papel, boxShadow: '0 16px 40px rgba(12,18,32,0.45)' }}
                >
                  <Image
                    src={`${IMG}/premio-booking.webp`}
                    alt="Distintivo Traveller Review Awards 2025 de Booking.com, nota 9,2"
                    width={1080}
                    height={1080}
                    className="block w-full h-auto rounded-[5px]"
                  />
                </div>
                <figcaption className="md:mt-5">
                  <p className={`${display.className} font-bold text-4xl md:text-5xl leading-none`} style={{ color: C.ambarVentana }}>
                    {BIZ.booking}
                  </p>
                  <p className="mt-2 text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] leading-relaxed" style={{ color: C.mutNoche }}>
                    Traveller Review
                    <br />
                    Awards 2025
                    <br />
                    Booking.com
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <div>
              <Reveal>
                <Rotulo color={C.ambarVentana} techo={C.atardecer} light>Lo que dicen las visitas</Rotulo>
              </Reveal>
              <Reveal delay={80}>
                <Cita text={REVIEWS[0].text} author={REVIEWS[0].author} big />
              </Reveal>
              <Reveal delay={160}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2.5 text-sm font-bold tap-44"
                  style={{ color: C.crema }}
                >
                  <Stars value={BIZ.ratingValue} color={C.ambarVentana} size={15} />
                  {BIZ.rating} · {BIZ.reviews} opiniones en Google
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M3 13L13 3M6 3h7v7" />
                  </svg>
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · Por dentro: cada foto cierra su techo ── */}
      <section id="dentro" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo>Por dentro</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,4rem)]`} style={{ color: C.cielo }}>
                Madera por dentro,
                <br />
                <em style={{ color: C.madera }}>equipadas para cocinar.</em>
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutCrema }}>
                Cocina con horno y refrigerador, comedor, dormitorios y
                baño con ducha. Los detalles de cada cabaña se confirman
                por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-7 lg:gap-8 items-start">
            <Reveal className="lg:col-span-7">
              <figure>
                <FotoTecho
                  src={`${IMG}/living.webp`}
                  alt="Living comedor de madera con TV, mueble y la cocina al fondo"
                  w={1200}
                  h={900}
                  ratio="aspect-[4/3]"
                  sizes="(min-width: 1024px) 56vw, (min-width: 768px) 48vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutCrema }}>
                  <Techo color={C.madera} className="w-[20px] h-[8px] translate-y-[-1px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Living comedor</strong>
                    {' '}· la mesa puesta para comer y descansar
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-5 lg:mt-16" delay={90}>
              <figure>
                <FotoTecho
                  src={`${IMG}/cocina.webp`}
                  alt="Cocina equipada con horno, refrigerador y comedor de madera"
                  w={1200}
                  h={900}
                  ratio="aspect-[4/3]"
                  sizes="(min-width: 1024px) 40vw, (min-width: 768px) 48vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutCrema }}>
                  <Techo color={C.madera} className="w-[20px] h-[8px] translate-y-[-1px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Cocina equipada</strong>
                    {' '}· horno, refrigerador y comedor para cocinar como en casa
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-6 lg:col-start-2 lg:mt-4" delay={60}>
              <figure>
                <FotoTecho
                  src={`${IMG}/dormitorio.webp`}
                  alt="Dormitorio de madera con dos camas"
                  w={1200}
                  h={800}
                  ratio="aspect-[3/2]"
                  sizes="(min-width: 1024px) 48vw, (min-width: 768px) 48vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutCrema }}>
                  <Techo color={C.madera} className="w-[20px] h-[8px] translate-y-[-1px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Dormitorios</strong>
                    {' '}· madera a la vista, tranquilos para descansar
                  </span>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="lg:col-span-4 lg:mt-20" delay={120}>
              <figure>
                <FotoTecho
                  src={`${IMG}/bano.webp`}
                  alt="Baño con ducha de la cabaña"
                  w={600}
                  h={900}
                  ratio="aspect-[2/3] max-w-[300px]"
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 44vw, calc(100vw - 2.5rem)"
                />
                <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: C.mutCrema }}>
                  <Techo color={C.madera} className="w-[20px] h-[8px] translate-y-[-1px]" />
                  <span>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Baño con ducha</strong>
                    {' '}· todo limpio e impecable
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · El lugar: patio tranquilo sobre la ciudad ── */}
      <section id="lugar" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo color={C.hortensia}>El lugar</Rotulo>
                <h2 className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,3.8rem)]`} style={{ color: C.cielo }}>
                  Un patio tranquilo
                  <br />
                  <em style={{ color: C.hortensia }}>sobre la ciudad.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="mt-6 space-y-5 text-base md:text-lg leading-relaxed max-w-lg" style={{ color: C.mutCrema }}>
                  <p>
                    En un alto de Puerto Montt, entre hortensias, las
                    cabañas forman un patio interior: un lugar seguro y
                    tranquilo para descansar, con estacionamiento junto a
                    las cabañas y un supermercado cerca.
                  </p>
                </div>
                <ul className="mt-8 space-y-0 max-w-md">
                  {['Estacionamiento junto a las cabañas', 'Supermercado cerca', 'Lugar tranquilo y seguro'].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 py-3 border-b text-[15px] md:text-base"
                      style={{ borderColor: C.lineL, color: C.tinta }}
                    >
                      <Techo color={C.hortensia} className="w-[18px] h-[8px] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <FotoTecho
                  src={`${IMG}/patio.webp`}
                  alt="Patio interior con hortensias frente a las cabañas de madera"
                  w={960}
                  h={540}
                  ratio="aspect-[16/9]"
                  sizes="(min-width: 1024px) 56vw, calc(100vw - 2.5rem)"
                />
                <figure
                  className="relative z-10 -mt-9 md:-mt-12 mx-4 md:mx-8 p-5 md:p-6 rotate-[-0.5deg]"
                  style={{ backgroundColor: C.crema, boxShadow: '0 18px 46px rgba(35,44,69,0.18)', border: `1px solid ${C.lineL}` }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed" style={{ color: C.tinta }}>
                    “{REVIEWS[1].text}”
                  </blockquote>
                  <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: C.hortensia }}>
                    {REVIEWS[1].author} · Google
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Cómo llegar: en un alto, bien ubicada ── */}
      <section id="llegar" className="scroll-mt-20 relative" style={{ backgroundColor: C.cielo, color: C.crema }}>
        <div className="absolute inset-x-0 -top-9 md:-top-14 z-10" aria-hidden="true">
          <TechoDivisor fill={C.cielo} />
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-16 md:pt-14 md:pb-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <Rotulo color={C.ambarVentana} techo={C.atardecer} light>Cómo llegar</Rotulo>
                <h2 className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,3.8rem)]`} style={{ color: C.crema }}>
                  Bien ubicada para
                  <br />
                  <em style={{ color: C.atardecer }}>moverte por la ciudad.</em>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutNoche }}>
                  {BIZ.address}, {BIZ.city}. Desde el alto es fácil bajar y
                  volver: base tranquila para moverse por Puerto Montt.
                </p>
                <Cita text={REVIEWS[2].text} author={REVIEWS[2].author} className="mt-8 max-w-lg" />
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-9 max-w-md">
                  <h3 className="text-[11px] font-bold tracking-[0.28em] uppercase mb-4" style={{ color: C.ambarVentana }}>
                    Recepción
                  </h3>
                  <p className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3 border-b text-base" style={{ borderColor: C.lineD, color: C.mutNoche }}>
                    <span>Todos los días</span>
                    <span className={`${display.className} text-lg font-bold`} style={{ color: C.crema }}>
                      Abierto las 24 horas
                    </span>
                  </p>
                  <div className="mt-7 flex flex-col sm:flex-row gap-3">
                    <BtnWa className="w-full sm:w-auto">Consulta por WhatsApp</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="lp-btn inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-base font-bold tap-44"
                      style={{ border: '1.5px solid rgba(247,239,228,0.55)', color: C.crema, backgroundColor: 'rgba(35,44,69,0.3)' }}
                    >
                      Cómo llegar
                      <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M3 13L13 3M6 3h7v7" />
                      </svg>
                    </a>
                  </div>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${display.className} mt-6 inline-block text-2xl md:text-3xl font-bold tap-44`} style={{ color: C.crema }}>
                    {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6">
              <Reveal delay={100}>
                <div
                  className="overflow-hidden"
                  style={{ border: `1px solid ${C.lineD}`, boxShadow: '0 22px 60px rgba(12,18,32,0.4)', clipPath: 'polygon(50% 0, 100% 5.5%, 100% 100%, 0 100%, 0 5.5%)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="block w-full h-[320px] md:h-[440px]"
                    style={{ border: 0, backgroundColor: C.papel }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.22em]" style={{ color: C.mutNoche2 }}>
                  {BIZ.address} · {BIZ.city} · {BIZ.region}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Footer ── */}
      <footer style={{ backgroundColor: C.noche, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className={`${display.className} font-bold text-xl md:text-2xl`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed mt-1" style={{ color: C.mutNoche }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44" style={{ color: C.crema }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.mutNoche }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.mutNoche }}>
            Fotos, dirección, WhatsApp, horario, nota de Booking y reseñas
            son reales (Google Maps y Booking.com). Los textos y rótulos
            son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
