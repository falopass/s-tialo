import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_CURSOS, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Source Serif 4 para la voz editorial (con itálicas de verdad) y
// Manrope para el texto corrido: calidez de spa, no de oficina.
const display = localFont({
  src: [
    { path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' },
    { path: '../../fonts/source-serif-4/italic-200-900.woff2', weight: '200 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// «El sur afuera, adentro calentito»: tinta tibia de noche sureña,
// crema de casa encendida, rosa empolvado y un dorado bajo, de vela.
const C = {
  tinta: '#211A15',
  tinta2: '#2B211B',
  crema: '#F8F1E7',
  crema2: '#EFE2CF',
  rosa: '#D9A79E',
  rosaSuave: '#EBC9C1',
  rosaInk: '#8F5049',
  oro: '#C9A36B',
  oroClaro: '#DFC294',
  oroInk: '#7E5E2A',
  mutC: 'rgba(33,26,21,0.66)',
  mutD: 'rgba(248,241,231,0.72)',
  lineC: 'rgba(33,26,21,0.15)',
  lineD: 'rgba(248,241,231,0.20)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'pretty-woman-osorno',
  title: 'Pretty Woman · Centro de bienestar y belleza en Osorno',
  description:
    'Centro de bienestar y belleza en Dr. Guillermo Buhler 1940, Osorno: masajes de relajación, masaje para embarazadas y cursos de estética. Agenda tu hora por WhatsApp.',
  image: `${IMG}/sala-espera.webp`,
})

const NAV_LINKS = [
  { label: 'Bienestar', href: '#bienestar' },
  { label: 'Cursos', href: '#cursos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'La casa', href: '#visita' },
]

function Eyebrow({
  children,
  color,
}: {
  children: React.ReactNode
  color: string
}) {
  return (
    <p
      className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.3em] mb-5"
      style={{ color }}
    >
      <span className="block h-px w-7 shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-[15px] h-[15px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** El suspiro: una onda lenta que se dibuja sola al entrar en pantalla.
    pathLength=100 normaliza el trazo para la animación del dash. */
function Suspiro({ className = '', color = C.oro }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 600 60" className={className} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        className="pw-suspiro"
        d="M4 32 C 84 10 142 52 222 32 C 302 12 360 50 440 32 C 500 19 552 26 596 30"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        pathLength={100}
      />
    </svg>
  )
}

/** Vaho cálido que sube dentro de la foto del hero. */
function Vaho({ className = '' }: { className?: string }) {
  return (
    <div
      className={`pw-vapor absolute rounded-full pointer-events-none ${className}`}
      style={{
        background:
          'radial-gradient(closest-side, rgba(248,241,231,0.75), rgba(248,241,231,0))',
        filter: 'blur(6px)',
      }}
      aria-hidden="true"
    />
  )
}

export default function PrettyWomanPage() {
  return (
    <div
      className={`${body.className} pw-page min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        /* El velo cálido se disuelve: la sala se enciende de a poco. */
        @keyframes pw-velo { to { opacity: 0 } }
        .pw-velo { animation: pw-velo 1.9s cubic-bezier(.4,0,.2,1) .3s both }

        /* La foto despierta con un zoom lento que se asienta. */
        @keyframes pw-despierta { from { transform: scale(1.1) } to { transform: scale(1) } }
        .pw-despierta { animation: pw-despierta 2.8s cubic-bezier(.25,.6,.3,1) both }

        /* Vaho que sube y se desvanece, como el aire caliente de la sala. */
        @keyframes pw-vapor {
          0% { transform: translateY(30px) translateX(0) scale(.9); opacity: 0 }
          30% { opacity: .55 }
          68% { opacity: .3 }
          100% { transform: translateY(-92px) translateX(12px) scale(1.18); opacity: 0 }
        }
        .pw-vapor { animation: pw-vapor 7.5s ease-in-out infinite both }
        .pw-vapor.v2 { animation-duration: 9.6s; animation-delay: 2.8s }
        .pw-vapor.v3 { animation-duration: 8.4s; animation-delay: 5.1s }

        /* El aro del espejo respira: inhala, sostiene y exhala en 9 s. */
        @keyframes pw-respira {
          0%, 100% { transform: scale(1); opacity: .5 }
          42%, 58% { transform: scale(1.045); opacity: .95 }
        }
        .pw-respira { animation: pw-respira 9s cubic-bezier(.45,0,.35,1) 1.2s infinite both }

        /* El titular hace una sola inhalación al cargar la página. */
        @keyframes pw-inhala { from { transform: scale(1.04); opacity: 0 } to { transform: scale(1); opacity: 1 } }
        .pw-inhala { animation: pw-inhala 1.7s cubic-bezier(.25,.6,.3,1) .45s both }

        /* Entradas suaves de la portada. */
        @keyframes pw-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .pw-sube { animation: pw-sube .95s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--pw-d, 0s) }

        /* El suspiro se dibuja al bajar por la página. */
        @supports (animation-timeline: view()) {
          .pw-suspiro { stroke-dasharray: 100; stroke-dashoffset: 100; animation: pw-traza linear both; animation-timeline: view(); animation-range: entry 8% entry 82% }
          @keyframes pw-traza { to { stroke-dashoffset: 0 } }
        }

        .pw-btn { transition: transform .18s ease, filter .18s ease }
        .pw-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .pw-btn:active { transform: scale(.97) }
        .pw-page a:focus-visible { outline: 3px solid ${C.oro}; outline-offset: 3px }
        .pw-page a:focus:not(:focus-visible) { outline: none }
        .pw-mundo { transition: transform .3s ease }
        .pw-mundo:hover { transform: translateY(-3px) }

        @media (prefers-reduced-motion: reduce) {
          .pw-velo, .pw-vapor { display: none !important }
          .pw-despierta, .pw-respira, .pw-inhala, .pw-sube { animation: none !important }
          .pw-suspiro { animation: none !important; stroke-dashoffset: 0 !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} italic tracking-[0.02em]`}>
            Pretty Woman
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass=""
        ctaLabel="Agendar"
        theme={{
          over: 'dark',
          bar: 'rgba(248,241,231,0.94)',
          ink: C.tinta,
          line: C.lineC,
          btnBg: C.tinta,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Portada: el sur afuera, adentro calentito ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{
          backgroundColor: C.tinta,
          backgroundImage:
            'radial-gradient(760px 480px at 82% 8%, rgba(201,163,107,0.16), transparent 62%), radial-gradient(560px 460px at 4% 88%, rgba(217,167,158,0.12), transparent 60%)',
        }}
      >
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[130px] pb-12 md:pb-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.05fr_minmax(0,1fr)] items-center gap-10 lg:gap-14">
          <div className="min-w-0 text-center lg:text-left">
            <p
              className="pw-sube text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5"
              style={{ color: C.oroClaro, '--pw-d': '0.25s' } as CSSProperties}
            >
              Centro de bienestar y belleza · Osorno
            </p>
            <h1
              className={`${display.className} pw-inhala leading-[1.02] text-[clamp(2.5rem,10.4vw,5.4rem)]`}
              style={{ color: C.crema }}
              aria-label="Un respiro en Osorno."
            >
              Un{' '}
              <em className="italic" style={{ color: C.rosaSuave }}>
                respiro
              </em>
              <br />
              en Osorno.
            </h1>
            <p
              className="pw-sube mt-5 md:mt-7 mx-auto lg:mx-0 max-w-md text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutD, '--pw-d': '0.95s' } as CSSProperties}
            >
              Masajes de relajación, masaje para embarazadas y una escuela
              de estética, en una casa calentita de {BIZ.city}.
            </p>
            <div
              className="pw-sube mt-6 md:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3"
              style={{ '--pw-d': '1.1s' } as CSSProperties}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ backgroundColor: C.oro, color: C.tinta }}
              >
                <WaIcon />
                Agendar por WhatsApp
              </a>
              <a
                href={WA_CURSOS}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ border: '1.5px solid rgba(248,241,231,0.5)', color: C.crema }}
              >
                Consultar por cursos
              </a>
            </div>
            <p
              className="pw-sube mt-5 text-xs md:text-sm"
              style={{ color: C.mutD, '--pw-d': '1.2s' } as CSSProperties}
            >
              {BIZ.reviews} opiniones en Google · mar a sáb 8:00–21:30
            </p>
          </div>

          {/* el espejo: óvalo de luz cálida con el aro que respira */}
          <div className="order-first lg:order-none relative mx-auto w-full max-w-[252px] md:max-w-[400px]">
            <div
              className="pw-respira absolute -inset-3 md:-inset-4 rounded-[50%] pointer-events-none"
              style={{ border: `1.5px solid ${C.oro}` }}
              aria-hidden="true"
            />
            <div
              className="absolute -inset-1.5 md:-inset-2 rounded-[50%] pointer-events-none"
              style={{ border: '1px solid rgba(201,163,107,0.4)' }}
              aria-hidden="true"
            />
            <figure className="relative aspect-[3/4] rounded-[50%] overflow-hidden" style={{ backgroundColor: C.tinta2 }}>
              <Image
                src={`${IMG}/masaje.webp`}
                alt="Terapeuta de Pretty Woman dando un masaje de espalda en la sala del centro"
                fill
                priority
                sizes="(min-width: 1024px) 400px, 82vw"
                className="pw-despierta object-cover"
              />
              {/* el velo cálido que se disuelve */}
              <div
                className="pw-velo absolute inset-0"
                style={{ backgroundColor: C.tinta, opacity: 0.55 }}
                aria-hidden="true"
              />
              {/* el vaho de la sala */}
              <Vaho className="left-[18%] top-[46%] w-[34%] h-[26%]" />
              <Vaho className="v2 left-[46%] top-[38%] w-[30%] h-[24%]" />
              <Vaho className="v3 left-[30%] top-[56%] w-[26%] h-[20%]" />
              <figcaption className="sr-only">
                Masaje en la sala calentita de Pretty Woman.
              </figcaption>
            </figure>
            {/* luna menor: la escuela asoma en la composición */}
            <figure
              className="absolute -right-4 md:-right-10 -bottom-5 w-[38%] aspect-square rounded-full overflow-hidden shadow-2xl"
              style={{ border: `4px solid ${C.tinta}` }}
            >
              <Image
                src={`${IMG}/alumna-maquillaje.webp`}
                alt="Alumna de Pretty Woman practicando maquillaje frente a un espejo"
                fill
                sizes="(min-width: 1024px) 160px, 30vw"
                className="object-cover"
              />
              <figcaption className="sr-only">La escuela de estética.</figcaption>
            </figure>
          </div>
        </div>
        <div className="relative pb-6 md:pb-8 flex justify-center" aria-hidden="true">
          <Suspiro className="w-[46%] max-w-[300px] h-7" color={C.oro} />
        </div>
      </section>

      {/* ── 2 · La bienvenida: algo para beber recién llegada ── */}
      <section className="relative" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_1.05fr] items-center gap-9 lg:gap-16">
          <Reveal className="min-w-0 order-2 lg:order-1">
            <figure
              className="relative max-w-[420px] mx-auto lg:mx-0 rounded-[30px] p-2.5"
              style={{ backgroundColor: C.crema2, transform: 'rotate(-1.6deg)' }}
            >
              <div className="relative aspect-[4/5] rounded-[22px] overflow-hidden">
                <Image
                  src={`${IMG}/sala-espera.webp`}
                  alt="Clienta en el sillón amarillo de la sala de espera de Pretty Woman, con un jugo y flores junto a la ventana"
                  fill
                  sizes="(min-width: 1024px) 420px, 88vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className="pt-2.5 pb-1 text-center text-[11px] uppercase tracking-[0.22em] font-semibold"
                style={{ color: C.rosaInk }}
              >
                la sala de espera, con algo para beber
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="min-w-0 order-1 lg:order-2">
            <Eyebrow color={C.rosaInk}>La bienvenida</Eyebrow>
            <h2
              className={`${display.className} leading-[1.06] text-[clamp(1.9rem,6.4vw,3.6rem)]`}
              style={{ color: C.tinta }}
            >
              aquí el frío
              <br />
              se queda <em className="italic" style={{ color: C.rosaInk }}>afuera</em>
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-lg leading-relaxed max-w-md" style={{ color: C.mutC }}>
              Apenas entras a la casa de {BIZ.address} te reciben con algo
              para beber y un lugar muy calentito. No lo decimos nosotros:
              lo cuentan quienes ya vinieron.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Algo para beber recién llegada',
                'El lugar «muy calentito» de las reseñas',
                'Cálida atención, dicen en Google',
              ].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.tinta }}>
                  <span
                    className="w-5 h-5 shrink-0 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: C.rosa, color: C.tinta }}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M2 6.5 L4.6 9 L10 3" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Dos maneras de entrar ── */}
      <section style={{ backgroundColor: C.crema2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <p
              className="text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-8"
              style={{ color: C.oroInk }}
            >
              Dos maneras de entrar
            </p>
          </Reveal>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4 md:gap-6">
            <Reveal className="min-w-0">
              <div
                className="pw-mundo h-full rounded-[26px] p-6 md:p-9 flex flex-col justify-between gap-6"
                style={{ backgroundColor: C.crema, border: `1.5px solid ${C.rosa}` }}
              >
                <div>
                  <p className={`${display.className} italic text-sm md:text-base mb-2`} style={{ color: C.rosaInk }}>
                    vengo a descansar
                  </p>
                  <a
                    href="#bienestar"
                    className={`${display.className} tap-44 inline-block text-2xl md:text-3xl leading-tight`}
                    style={{ color: C.tinta }}
                  >
                    Masajes y bienestar{' '}
                    <span aria-hidden="true" style={{ color: C.rosaInk }}>→</span>
                  </a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.mutC }}>
                  Camilla lista, aceites y un cuerpo que por fin descansa.
                </p>
              </div>
            </Reveal>
            <Reveal delay={110} className="min-w-0">
              <div
                className="pw-mundo h-full rounded-[26px] p-6 md:p-9 flex flex-col justify-between gap-6"
                style={{ backgroundColor: C.tinta }}
              >
                <div>
                  <p className={`${display.className} italic text-sm md:text-base mb-2`} style={{ color: C.oroClaro }}>
                    vengo a aprender
                  </p>
                  <a
                    href="#cursos"
                    className={`${display.className} tap-44 inline-block text-2xl md:text-3xl leading-tight`}
                    style={{ color: C.crema }}
                  >
                    Cursos de estética{' '}
                    <span aria-hidden="true" style={{ color: C.oroClaro }}>→</span>
                  </a>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: C.mutD }}>
                  Talleres presenciales en su propia sala, con práctica frente al espejo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4 · Bienestar: el cuerpo descansa ── */}
      <section id="bienestar" className="scroll-mt-16 relative" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.05fr_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
          <Reveal className="min-w-0">
            <Eyebrow color={C.oroClaro}>Masajes y bienestar</Eyebrow>
            <h2
              className={`${display.className} leading-[1.06] text-[clamp(1.9rem,6.4vw,3.8rem)]`}
              style={{ color: C.crema }}
            >
              el cuerpo
              <br />
              <em className="italic" style={{ color: C.rosaSuave }}>descansa</em>
            </h2>
            <p className="mt-5 md:mt-6 text-[15px] md:text-lg leading-relaxed max-w-md" style={{ color: C.mutD }}>
              Masajes de relajación y masaje pensado para embarazadas, en
              salas calentitas con camilla lista. De martes a sábado,
              hasta las 21:30.
            </p>
            <ul className="mt-6 space-y-3.5">
              {[
                { t: 'Masaje de relajación', s: 'para soltar el cuerpo' },
                { t: 'Masaje para embarazadas', s: '«mi cuerpo descansó», dicen en Google' },
                { t: 'Agenda por WhatsApp', s: 'escribes y coordinan la hora' },
              ].map((it) => (
                <li key={it.t} className="flex items-start gap-3">
                  <span
                    className="mt-1 w-2 h-2 shrink-0 rounded-full"
                    style={{ backgroundColor: C.oro }}
                    aria-hidden="true"
                  />
                  <p className="text-sm md:text-base" style={{ color: C.crema }}>
                    <span className="font-semibold">{it.t}</span>
                    <span style={{ color: C.mutD }}> · {it.s}</span>
                  </p>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="pw-btn mt-8 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
              style={{ backgroundColor: C.crema, color: C.tinta }}
            >
              <WaIcon />
              Agendar un masaje
            </a>
          </Reveal>
          {/* díptico de la sala: dos fotos con ritmo distinto */}
          <div className="min-w-0 grid grid-cols-[minmax(0,1fr)] gap-5">
            <Reveal delay={140} className="min-w-0">
              <figure className="relative rounded-[28px] overflow-hidden" style={{ transform: 'rotate(1.4deg)' }}>
                <div className="relative aspect-[5/6] max-w-[430px] mx-auto lg:ml-auto">
                  <Image
                    src={`${IMG}/masaje-espalda.webp`}
                    alt="Masaje de espalda en Pretty Woman, con plantas y una repisa de aceites al fondo"
                    fill
                    sizes="(min-width: 1024px) 430px, 90vw"
                    className="object-cover rounded-[28px]"
                  />
                </div>
              </figure>
            </Reveal>
            <Reveal delay={260} className="min-w-0">
              <figure
                className="relative rounded-[24px] overflow-hidden max-w-[300px] lg:-mt-16 lg:ml-4 shadow-2xl"
                style={{ border: `5px solid ${C.tinta}` }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/sala-relajo.webp`}
                    alt="Sala de relajo de Pretty Woman: camilla, bata blanca, cortinas claras y una planta"
                    fill
                    sizes="300px"
                    className="object-cover"
                  />
                </div>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · La escuela: aquí también se aprende ── */}
      <section id="cursos" className="scroll-mt-16" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_1.1fr] gap-9 lg:gap-16 items-start">
            <Reveal className="min-w-0">
              <Eyebrow color={C.oroInk}>Escuela de estética</Eyebrow>
              <h2
                className={`${display.className} leading-[1.06] text-[clamp(1.9rem,6.4vw,3.6rem)]`}
                style={{ color: C.tinta }}
              >
                aquí también
                <br />
                se <em className="italic" style={{ color: C.oroInk }}>aprende</em>
              </h2>
              <p className="mt-5 md:mt-6 text-[15px] md:text-lg leading-relaxed max-w-md" style={{ color: C.mutC }}>
                Pretty Woman imparte cursos y talleres de estética en su
                propia sala: clases presenciales, material con su nombre
                y práctica frente al espejo. Entre sus materiales aparece,
                por ejemplo, el Curso de Limpieza Facial Profunda.
              </p>
              <a
                href={WA_CURSOS}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn mt-7 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ backgroundColor: C.tinta, color: C.crema }}
              >
                <WaIcon />
                Consultar por cursos
              </a>
            </Reveal>
            <div className="min-w-0 grid grid-cols-[minmax(0,1fr)] gap-5">
              <Reveal delay={120} className="min-w-0">
                <figure className="relative rounded-[26px] overflow-hidden">
                  <div className="relative aspect-[4/5] max-w-[560px]">
                    <Image
                      src={`${IMG}/clase.webp`}
                      alt="Clase de estética en Pretty Woman: la instructora frente a las alumnas en una sala de techo de madera"
                      fill
                      sizes="(min-width: 1024px) 560px, 90vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="mt-2.5 text-[11px] uppercase tracking-[0.2em] font-semibold"
                    style={{ color: C.oroInk }}
                  >
                    clases presenciales en su sala
                  </figcaption>
                </figure>
              </Reveal>
              <div className="grid grid-cols-2 gap-4 md:gap-5">
                <Reveal delay={200} className="min-w-0">
                  <figure className="relative rounded-[20px] overflow-hidden aspect-[4/5]">
                    <Image
                      src={`${IMG}/mesa-cursos.webp`}
                      alt="Mesa de curso de Pretty Woman con espejo, flores y carpeta del centro"
                      fill
                      sizes="(min-width: 768px) 260px, 44vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
                <Reveal delay={280} className="min-w-0">
                  <figure className="relative rounded-[20px] overflow-hidden aspect-[4/5]">
                    <Image
                      src={`${IMG}/cursos-material.webp`}
                      alt="Material de los cursos: carpetas del Curso de Limpieza Facial Profunda, cuadernos azules y café"
                      fill
                      sizes="(min-width: 768px) 260px, 44vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Opiniones: lo que cuentan en Google ── */}
      <section id="opiniones" className="scroll-mt-16" style={{ backgroundColor: C.crema2 }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex justify-center mb-8" aria-hidden="true">
              <Suspiro className="w-[44%] max-w-[260px] h-6" color={C.rosaInk} />
            </div>
            <p
              className="text-center text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-4"
              style={{ color: C.rosaInk }}
            >
              Opiniones
            </p>
            <h2
              className={`${display.className} text-center leading-[1.06] text-[clamp(1.9rem,6.4vw,3.4rem)]`}
              style={{ color: C.tinta }}
            >
              lo que cuentan
              <br />
              en <em className="italic" style={{ color: C.rosaInk }}>Google</em>
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <blockquote
              className={`${display.className} italic text-center mx-auto mt-9 md:mt-12 max-w-3xl leading-[1.35] text-[clamp(1.15rem,4.4vw,1.8rem)]`}
              style={{ color: C.tinta }}
            >
              “{REVIEWS[0].text}”
            </blockquote>
            <p
              className="text-center mt-5 text-[11px] uppercase tracking-[0.22em] font-bold"
              style={{ color: C.rosaInk }}
            >
              {REVIEWS[0].author} · {REVIEWS[0].fuente}
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4 md:gap-6">
            {REVIEWS.slice(1).map((r, i) => (
              <Reveal key={r.author} delay={180 + i * 110} className="min-w-0">
                <figure
                  className="h-full rounded-[24px] p-6 md:p-8"
                  style={{ backgroundColor: C.crema, border: `1px solid ${C.lineC}` }}
                >
                  <blockquote className={`${display.className} italic text-base md:text-lg leading-relaxed`} style={{ color: C.tinta }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] uppercase tracking-[0.2em] font-bold"
                    style={{ color: C.rosaInk }}
                  >
                    {r.author} · {r.fuente}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={320}>
            <p className="text-center mt-8 text-sm" style={{ color: C.mutC }}>
              {BIZ.reviews} opiniones en su ficha de Google ·{' '}
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                style={{ color: C.rosaInk }}
              >
                ver la ficha
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · La casa: Dr. Guillermo Buhler 1940 ── */}
      <section id="visita" className="scroll-mt-16" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-9 lg:gap-16 items-start">
            <Reveal className="min-w-0">
              <Eyebrow color={C.oroInk}>La casa</Eyebrow>
              <h2
                className={`${display.className} leading-[1.08] text-[clamp(1.8rem,6vw,3.2rem)]`}
                style={{ color: C.tinta }}
              >
                {BIZ.address},
                <br />
                <em className="italic" style={{ color: C.oroInk }}>{BIZ.city}</em>
              </h2>
              <p className="mt-5 text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.mutC }}>
                Una casa con jardín en {BIZ.region}. Llegas, te ofrecen
                algo para beber y el tiempo baja de marcha.
              </p>
              <dl className="mt-7 space-y-3">
                <div className="flex items-baseline gap-3">
                  <dt className="text-[11px] uppercase tracking-[0.18em] font-bold w-[86px] shrink-0" style={{ color: C.oroInk }}>
                    Horario
                  </dt>
                  <dd className="text-sm md:text-base" style={{ color: C.tinta }}>
                    {HORARIO.map((h) => (
                      <span key={h.d} className="block">
                        {h.d} · <span className="font-semibold">{h.h}</span>
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex items-baseline gap-3">
                  <dt className="text-[11px] uppercase tracking-[0.18em] font-bold w-[86px] shrink-0" style={{ color: C.oroInk }}>
                    WhatsApp
                  </dt>
                  <dd className="text-sm md:text-base" style={{ color: C.tinta }}>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn mt-7 inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ backgroundColor: C.tinta, color: C.crema }}
              >
                <WaIcon />
                Agendar por WhatsApp
              </a>
            </Reveal>
            <div className="min-w-0 grid grid-cols-[minmax(0,1fr)] gap-5">
              <Reveal delay={120} className="min-w-0">
                <figure className="relative max-w-[380px] rounded-[26px] overflow-hidden" style={{ transform: 'rotate(1.2deg)' }}>
                  <div className="relative aspect-[4/5]">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada de Pretty Woman en Osorno: casa con techo a dos aguas, vitrinas con afiches del centro y jardín"
                      fill
                      sizes="(min-width: 1024px) 380px, 80vw"
                      className="object-cover"
                    />
                  </div>
                </figure>
              </Reveal>
              <Reveal delay={220} className="min-w-0">
                <div
                  className="rounded-[22px] overflow-hidden"
                  style={{ border: `1px solid ${C.lineC}`, backgroundColor: C.crema2 }}
                >
                  <LazyMap
                    src={MAPS_EMBED}
                    title={`Mapa: ${BIZ.nameFull}, ${BIZ.address}, ${BIZ.city}`}
                    className="w-full h-[240px] md:h-[280px] block"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 8 · Cierre: su propio saludo ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tinta }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(700px 420px at 50% 110%, rgba(201,163,107,0.14), transparent 65%)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Suspiro className="w-[40%] max-w-[240px] h-7 mx-auto mb-8" color={C.oro} />
            <p
              className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5"
              style={{ color: C.oroClaro }}
            >
              Bienvenid@ a Prettywoman
            </p>
            <h2
              className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.8vw,3.9rem)]`}
              style={{ color: C.crema }}
            >
              tu espacio de <em className="italic" style={{ color: C.rosaSuave }}>relajación</em>
              <br />
              y belleza en Osorno.
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn inline-flex items-center justify-center gap-2.5 px-7 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ backgroundColor: C.oro, color: C.tinta }}
              >
                <WaIcon />
                Agendar por WhatsApp
              </a>
              <a
                href={WA_CURSOS}
                target="_blank"
                rel="noopener noreferrer"
                className="pw-btn inline-flex items-center justify-center px-7 py-3 rounded-full text-sm font-bold tracking-wide tap-44"
                style={{ border: '1.5px solid rgba(248,241,231,0.5)', color: C.crema }}
              >
                Consultar por cursos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.tinta, borderTop: `1px solid ${C.lineD}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="min-w-0">
            <p className={`${display.className} italic text-lg`} style={{ color: C.crema }}>
              {BIZ.name}
            </p>
            <p className="text-xs mt-1" style={{ color: C.mutD }}>
              {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <p className="text-xs" style={{ color: C.mutD }}>
            Mar a sáb 8:00–21:30 · dom y lun cerrado
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold underline underline-offset-4 decoration-1 tap-44"
            style={{ color: C.oroClaro }}
          >
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Agendar una hora por WhatsApp" />
    </div>
  )
}
