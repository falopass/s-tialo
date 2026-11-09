import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Pasos } from './pasos'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  PASOS,
  SERVICIOS,
  PROTESIS_TEXTO,
  REVIEWS,
  REVIEW_TAMARA,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// «Te explicamos cada paso»: el turquesa de su letrero en Egaña, el grafito
// del box, el gris niebla de su sala de espera y el blanco de la clínica.
const C = {
  turq: '#00A39B',
  turqDeep: '#00706A',
  turqLight: '#5FD8D0',
  ink: '#1F2A30',
  mut: 'rgba(31,42,48,0.72)',
  niebla: '#EEF3F3',
  white: '#FFFFFF',
  lineL: 'rgba(31,42,48,0.14)',
  lineD: 'rgba(255,255,255,0.18)',
  mutDark: 'rgba(255,255,255,0.74)',
  mutDarkSoft: 'rgba(255,255,255,0.55)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-dental-lug',
  title: 'Clínica Dental Lüg · Dentista en Puerto Montt',
  description:
    'Prótesis, ortodoncia y atención dental cercana en Egaña 931, Puerto Montt. Evaluación personalizada y tecnología digital. 5,0 con 56 opiniones en Google. Agenda por WhatsApp.',
  image: '/demos/clinica-dental-lug/box-atencion.webp',
})

const NAV_LINKS = [
  { label: 'Cómo te atendemos', href: '#atencion' },
  { label: 'Prótesis', href: '#protesis' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** La sonrisa del logo: los dos puntos de la Ü y su arco. */
function Sonrisa({ className = 'w-6 h-auto', color = C.turq }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 48 30" className={className} fill="none" aria-hidden="true">
      <circle cx="13" cy="8" r="4.4" fill={color} />
      <circle cx="35" cy="8" r="4.4" fill={color} />
      <path d="M9 15 Q24 30 39 15" stroke={color} strokeWidth="4.4" strokeLinecap="round" />
    </svg>
  )
}

/** Rótulo de sección con la sonrisa como viñeta. */
function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-5`}
      style={{ color: light ? 'rgba(255,255,255,0.85)' : C.turqDeep }}
    >
      <Sonrisa className="w-[26px] h-auto shrink-0" color={light ? C.turqLight : C.turq} />
      {children}
    </p>
  )
}

function IconWa({ className = 'w-[18px] h-[18px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

/** CTA principal: turquesa Lüg con texto blanco grande. */
function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`lug-btn inline-flex items-center justify-center gap-2.5 px-7 py-2.5 rounded-full text-xl font-bold tap-44 ${className}`}
      style={{ backgroundColor: C.turq, color: C.white }}
    >
      <IconWa />
      {children}
    </a>
  )
}

export default function ClinicaDentalLugPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.white, color: C.ink }}
    >
      <style>{`
        /* «La Ü que sonríe»: los dos puntos de la Ü caen y rebotan a su
           lugar; debajo, el arco de la sonrisa se revela de izquierda a
           derecha; luego la foto del box se abre con esquinas redondas. */
        @keyframes lug-gota {
          0% { transform: translateY(-1.5em) scale(.4); opacity: 0 }
          55% { transform: translateY(.05em) scale(1.05); opacity: 1 }
          78% { transform: translateY(-.05em) scale(1) }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }
        .lug-gota {
          position: absolute; top: -.06em; width: .125em; height: .125em;
          border-radius: 48% 52% 50% 50%; background: ${C.turqDeep};
          animation: lug-gota .8s cubic-bezier(.3,.8,.35,1) both;
          animation-delay: var(--d, .5s);
        }
        @keyframes lug-arco {
          from { clip-path: inset(0 102% 0 0) }
          to { clip-path: inset(0 -4% 0 0) }
        }
        .lug-arco {
          position: absolute; left: 50%; top: 97%; width: 1.55em; height: auto;
          transform: translateX(-50%); overflow: visible;
          animation: lug-arco 1.2s cubic-bezier(.5,.05,.3,1) 1.25s both;
        }
        @keyframes lug-foto {
          from { clip-path: inset(36% 32% 36% 32% round 46%); opacity: 0 }
          to { clip-path: inset(0 0 0 0 round 28px); opacity: 1 }
        }
        .lug-foto { animation: lug-foto 1.05s cubic-bezier(.32,.7,.3,1) 1.5s both }

        @keyframes lug-sube {
          from { opacity: 0; transform: translateY(16px) }
          to { opacity: 1; transform: none }
        }
        .lug-sube { animation: lug-sube .85s cubic-bezier(.22,.68,.26,1) both; animation-delay: var(--d, 0s) }

        /* «Cómo te atendemos»: la línea crece y cada nodo-sonrisa se enciende. */
        .lug-pasos { position: relative }
        .lug-linea {
          position: absolute; left: 23px; top: 30px; bottom: 30px; width: 2px;
          border-radius: 2px; background: rgba(0,163,155,0.4);
          transform: scaleY(0); transform-origin: top;
        }
        .lug-pasos.on .lug-linea {
          transform: scaleY(1);
          transition: transform 1.5s cubic-bezier(.4,0,.2,1) .15s;
        }
        .lug-paso { position: relative; display: flex; gap: 1rem; align-items: flex-start; padding: .8rem 0 }
        .lug-nodo {
          flex: none; position: relative; z-index: 1; width: 48px; height: 48px;
          border-radius: 9999px; border: 2px solid rgba(0,163,155,0.45);
          background: #fff; display: flex; align-items: center; justify-content: center;
        }
        .lug-punto { fill: ${C.turq} }
        .lug-boca { stroke: ${C.turq} }
        .lug-pasos.on .lug-nodo {
          background: ${C.turq}; border-color: ${C.turq};
          transition: background-color .45s ease, border-color .45s ease;
          transition-delay: calc(var(--i) * 260ms + 260ms);
        }
        .lug-pasos.on .lug-punto { fill: #fff; transition: fill .45s ease; transition-delay: calc(var(--i) * 260ms + 260ms) }
        .lug-pasos.on .lug-boca { stroke: #fff; transition: stroke .45s ease; transition-delay: calc(var(--i) * 260ms + 260ms) }
        .lug-paso-txt { padding-top: .2rem; opacity: 0; transform: translateY(10px) }
        .lug-pasos.on .lug-paso-txt {
          opacity: 1; transform: none;
          transition: opacity .55s ease, transform .55s ease;
          transition-delay: calc(var(--i) * 260ms + 300ms);
        }
        .lug-paso-num { font-size: 11px; letter-spacing: .24em; font-weight: 700; color: ${C.turqDeep} }
        .lug-paso-titulo { font-size: 1.06rem; font-weight: 700; color: ${C.ink}; margin: .12rem 0 .22rem }
        .lug-paso-desc { font-size: .9rem; line-height: 1.55; color: rgba(31,42,48,.72) }

        /* Fotos que se descubren al hacer scroll (donde hay soporte). */
        @supports (animation-timeline: view()) {
          .lug-cortina { clip-path: inset(0 0 100% 0); animation: lug-cortina linear both; animation-timeline: view(); animation-range: entry 4% entry 62% }
          @keyframes lug-cortina { to { clip-path: inset(0 0 0 0) } }
          .lug-zoom { transform: scale(1.07); animation: lug-zoom linear both; animation-timeline: view(); animation-range: entry 4% entry 85% }
          @keyframes lug-zoom { to { transform: scale(1) } }
        }

        .lug-btn { transition: transform .18s ease, filter .18s ease }
        .lug-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .lug-btn:active { transform: scale(.97) }
        .lug-btn:focus-visible { outline: 3px solid ${C.turqDeep}; outline-offset: 3px }
        .lug-link { transition: color .18s ease, background-color .18s ease }
        .lug-fila { transition: background-color .25s ease, transform .25s ease }
        .lug-fila:hover { background-color: rgba(0,163,155,0.06) }

        @media (prefers-reduced-motion: reduce) {
          .lug-gota, .lug-arco, .lug-foto, .lug-sube { animation: none !important }
          .lug-arco { clip-path: none !important }
          .lug-foto { clip-path: inset(0 round 28px) !important; opacity: 1 }
          .lug-linea { transform: none !important }
          .lug-nodo { background: ${C.turq} !important; border-color: ${C.turq} !important }
          .lug-punto { fill: #fff !important }
          .lug-boca { stroke: #fff !important }
          .lug-paso-txt { opacity: 1 !important; transform: none !important; transition: none !important }
          .lug-cortina { clip-path: none !important; animation: none !important }
          .lug-zoom { transform: none !important; animation: none !important }
        }
      `}</style>

      <BlitzNav
        name="Clínica Dental Lüg"
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Agendar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.ink,
          line: C.lineL,
          btnBg: C.turqDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: la Ü que sonríe ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.white }}>
        <svg
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[170%] max-w-none md:w-[105%] pointer-events-none select-none"
          viewBox="0 0 1200 430"
          fill="none"
          aria-hidden="true"
        >
          <path d="M50 40 Q600 480 1150 40" stroke="rgba(0,163,155,0.09)" strokeWidth="44" strokeLinecap="round" />
        </svg>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(640px 420px at 88% 6%, rgba(0,163,155,0.07), transparent 65%)' }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[104px] pb-10 md:pb-14 grid lg:grid-cols-12 lg:gap-x-10 items-center">
          <div className="lg:col-span-7">
            <p
              className={`${display.className} lug-sube flex items-center gap-3 text-[11px] md:text-xs font-bold uppercase tracking-[0.26em] mb-4`}
              style={{ color: C.turqDeep, '--d': '0.08s' } as CSSProperties}
            >
              <Sonrisa className="w-[26px] h-auto shrink-0" />
              Puerto Montt · Egaña 931
            </p>

            {/* La marca: L + Ü animada + G, con el arco-sonrisa debajo */}
            <div
              className={`${display.className} inline-flex items-start relative pb-[0.62em] text-[clamp(3.9rem,16.5vw,8.5rem)] leading-[0.9] font-extrabold tracking-[-0.03em] select-none`}
              role="img"
              aria-label="LÜG, clínica dental"
            >
              <span className="lug-sube inline-block" style={{ color: C.turq, '--d': '0.2s' } as CSSProperties} aria-hidden="true">
                L
              </span>
              <span className="relative inline-block" aria-hidden="true">
                <span className="lug-sube inline-block" style={{ color: C.turq, '--d': '0.3s' } as CSSProperties}>
                  U
                </span>
                <i className="lug-gota" style={{ left: '26%', '--d': '0.62s' } as CSSProperties} />
                <i className="lug-gota" style={{ left: '66%', '--d': '0.78s' } as CSSProperties} />
                <svg className="lug-arco" viewBox="0 0 100 42" fill="none">
                  <path d="M8 6 Q50 48 92 6" stroke={C.turq} strokeWidth="8" strokeLinecap="round" />
                </svg>
              </span>
              <span className="lug-sube inline-block" style={{ color: C.turq, '--d': '0.4s' } as CSSProperties} aria-hidden="true">
                G
              </span>
              <span className="sr-only">LÜG</span>
            </div>

            <h1
              className={`${display.className} lug-sube text-[clamp(1.9rem,6.6vw,3.4rem)] leading-[1.08] font-bold tracking-[-0.01em] max-w-xl`}
              style={{ color: C.ink, '--d': '0.95s' } as CSSProperties}
            >
              Te explicamos
              <br />
              cada paso<span style={{ color: C.turq }}>.</span>
            </h1>
            <p
              className="lug-sube mt-5 max-w-md text-base md:text-lg leading-relaxed font-semibold"
              style={{ color: C.mut, '--d': '1.1s' } as CSSProperties}
            >
              Prótesis, ortodoncia y atención dental cercana, con evaluación
              personalizada y tecnología digital.
            </p>

            <div className="lug-sube mt-7 flex flex-wrap items-center gap-3" style={{ '--d': '1.25s' } as CSSProperties}>
              <BtnWa>Agenda tu evaluación</BtnWa>
              <a
                href="#clinica"
                className="lug-link inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-bold border-2 tap-44"
                style={{ borderColor: 'rgba(0,112,106,0.4)', color: C.turqDeep }}
              >
                Conoce la clínica
              </a>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="lug-sube mt-6 inline-flex items-center gap-2.5 tap-44"
              style={{ '--d': '1.45s' } as CSSProperties}
            >
              <Stars value={5} color={C.turq} className="w-[18px] h-[18px]" />
              <span className="text-sm font-bold" style={{ color: C.ink }}>
                {BIZ.rating}
                <span className="font-semibold" style={{ color: C.mut }}>
                  {' '}· {BIZ.reviews} opiniones en Google
                </span>
              </span>
            </a>
          </div>

          <figure className="lg:col-span-5 mt-9 lg:mt-0 lug-foto">
            <Image
              src={`${IMG}/box-atencion.webp`}
              alt="Box de atención de Clínica Dental Lüg: sillón dental en una sala luminosa con ventanales"
              width={900}
              height={1200}
              priority
              className="w-full aspect-[4/5] lg:aspect-[4/5] object-cover"
              style={{ borderRadius: '28px' }}
            />
          </figure>
        </div>
      </section>

      {/* ── 2 · Para quien le tiene miedo al dentista ── */}
      <section id="tranquilidad" className="scroll-mt-20" style={{ backgroundColor: C.niebla }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-12 gap-9 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Para quien llega con miedo</Eyebrow>
              <h2
                className={`${display.className} text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em] mb-5`}
                style={{ color: C.ink }}
              >
                ¿Hace tiempo que no vas
                <br className="hidden md:block" /> al dentista?
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-lg font-semibold" style={{ color: C.mut }}>
                Aquí el primer paso no es el torno: es que entiendas todo.
                Te contamos qué vemos, qué alternativas tienes y qué esperar
                de cada etapa. Tú decides el ritmo.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <figure
                className="mt-8 p-6 md:p-7 rounded-2xl max-w-lg"
                style={{ backgroundColor: C.white, boxShadow: '0 18px 50px rgba(0,112,106,0.12)' }}
              >
                <Sonrisa className="w-[30px] h-auto mb-4" />
                <blockquote className={`${display.className} text-base md:text-lg font-semibold leading-relaxed`} style={{ color: C.ink }}>
                  “{REVIEW_TAMARA.text}”
                </blockquote>
                <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: C.turqDeep }}>
                  {REVIEW_TAMARA.author} · Reseña en Google
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={120} className="lg:col-span-5">
            <figure className="relative">
              <Image
                src={`${IMG}/profesional.webp`}
                alt="Profesional de Clínica Dental Lüg sonriendo en el box de atención"
                width={745}
                height={1200}
                className="w-full aspect-[5/6] object-cover object-[50%_100%]"
                style={{ borderRadius: '26px' }}
              />
              <figcaption
                className="absolute left-4 bottom-4 px-4 py-2 rounded-full text-xs font-bold"
                style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: C.turqDeep }}
              >
                El equipo te recibe en el box
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Cómo te atendemos: los pasos se encienden ── */}
      <section id="atencion" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow>Cómo te atendemos</Eyebrow>
              <h2
                className={`${display.className} text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em] mb-5`}
                style={{ color: C.ink }}
              >
                Paso a paso,
                <br />
                siempre <span style={{ color: C.turqDeep }}>al tanto</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-md font-semibold mb-8" style={{ color: C.mut }}>
                Desde la primera evaluación sabes qué viene: sin letra chica
                y sin términos que nadie entiende.
              </p>
            </Reveal>
            <Pasos pasos={PASOS} displayClass={display.className} />
          </div>
          <div className="lg:col-span-6">
            <figure className="lug-cortina overflow-hidden" style={{ borderRadius: '26px' }}>
              <Image
                src={`${IMG}/radiografia.webp`}
                alt="Profesional de Clínica Dental Lüg revisando una radiografía en pantalla junto a un paciente"
                width={982}
                height={1200}
                className="lug-zoom w-full aspect-[4/5] object-cover"
              />
            </figure>
            <div className="relative -mt-14 md:-mt-20 ml-5 md:ml-8 w-[62%] md:w-[56%] -rotate-2">
              <figure
                className="overflow-hidden bg-white p-2 pb-7"
                style={{ borderRadius: '16px', boxShadow: '0 22px 60px rgba(31,42,48,0.2)' }}
              >
                <Image
                  src={`${IMG}/escaner.webp`}
                  alt="Escáner intraoral y modelo 3D de una dentadura en la pantalla de un notebook"
                  width={554}
                  height={1200}
                  className="w-full aspect-[4/3] object-cover object-[50%_52%]"
                  style={{ borderRadius: '10px' }}
                />
                <figcaption className={`${display.className} pt-2.5 px-1 text-[11px] md:text-xs font-bold tracking-[0.06em]`} style={{ color: C.ink }}>
                  Escáner intraoral y plan 3D en pantalla
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · Prótesis dentales ── */}
      <section id="protesis" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.turqDeep }}>
        <svg
          className="absolute -top-16 -right-24 w-[560px] max-w-none pointer-events-none select-none"
          viewBox="0 0 1200 430"
          fill="none"
          aria-hidden="true"
        >
          <path d="M50 40 Q600 480 1150 40" stroke="rgba(255,255,255,0.09)" strokeWidth="44" strokeLinecap="round" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow light>Prótesis dentales</Eyebrow>
              <h2
                className={`${display.className} text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em] mb-5`}
                style={{ color: C.white }}
              >
                Función, estética y confianza
                <br className="hidden md:block" /> al sonreír
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-xl font-semibold" style={{ color: 'rgba(255,255,255,0.88)' }}>
                {PROTESIS_TEXTO}
              </p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(255,255,255,0.88)' }}>
                Así lo presenta la propia clínica en su ficha de Google
              </p>
            </Reveal>
            <Reveal delay={140}>
              <ul className="mt-7 space-y-3">
                {[
                  'Evaluación personalizada de cada caso',
                  'La alternativa más adecuada a tus necesidades',
                  'Cada etapa, explicada con claridad',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-base font-bold" style={{ color: C.white }}>
                    <Sonrisa className="w-[22px] h-auto shrink-0" color={C.turqLight} />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lug-btn inline-flex items-center justify-center gap-2.5 px-7 py-2.5 rounded-full text-xl font-bold tap-44"
                  style={{ backgroundColor: C.white, color: C.turqDeep }}
                >
                  <IconWa />
                  Agenda una evaluación
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="lg:col-span-5">
            <figure className="bg-white p-3 pb-4" style={{ borderRadius: '24px', boxShadow: '0 30px 80px rgba(0,0,0,0.22)' }}>
              <Image
                src={`${IMG}/protesis.webp`}
                alt="Prótesis dental sobre fondo blanco, fotografía de la ficha de Clínica Dental Lüg"
                width={971}
                height={1200}
                className="w-full aspect-[4/5] object-cover"
                style={{ borderRadius: '16px' }}
              />
              <figcaption className={`${display.className} pt-3 px-1 text-[11px] md:text-xs font-bold tracking-[0.06em]`} style={{ color: C.ink }}>
                Evaluación personalizada antes de definir tu prótesis
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Ortodoncia y evaluación: índice ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Eyebrow>Ortodoncia y evaluación</Eyebrow>
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-9 md:mb-12">
              <h2
                className={`${display.className} lg:col-span-7 text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em]`}
                style={{ color: C.ink }}
              >
                Todo parte por
                <br />
                entender <span style={{ color: C.turqDeep }}>tu sonrisa</span>
              </h2>
              <p className="lg:col-span-5 text-base md:text-lg leading-relaxed font-semibold max-w-md" style={{ color: C.mut }}>
                La primera visita define el caso: qué necesita tu sonrisa,
                qué alternativas tienes y qué camino seguir.
              </p>
            </div>
          </Reveal>
          <ul className="border-t" style={{ borderColor: C.lineL }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <li
                  className="lug-fila grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 items-start py-5 md:py-6 -mx-3 px-3 border-b"
                  style={{ borderColor: C.lineL }}
                >
                  <Sonrisa className="w-[26px] h-auto mt-1" />
                  <div className="grid md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] gap-x-8 gap-y-1 items-baseline">
                    <h3 className={`${display.className} text-xl md:text-2xl font-bold`} style={{ color: C.ink }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.mut }}>
                      {s.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── 6 · La clínica ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.niebla }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Eyebrow>La clínica</Eyebrow>
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-10 items-end mb-9 md:mb-12">
              <h2
                className={`${display.className} lg:col-span-7 text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em]`}
                style={{ color: C.ink }}
              >
                Luz y calma, de la sala
                <br className="hidden md:block" /> de espera al box
              </h2>
              <p className="lg:col-span-5 text-base md:text-lg leading-relaxed font-semibold max-w-md" style={{ color: C.mut }}>
                Lo que verás al llegar a Egaña 931: orden, luz natural y una
                atención que no corre.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-4 md:gap-5">
            <figure className="lug-cortina md:col-span-5 relative overflow-hidden" style={{ borderRadius: '24px' }}>
              <Image
                src={`${IMG}/recepcion.webp`}
                alt="Sala de espera de Clínica Dental Lüg: sillas blancas, planta y luz natural"
                width={900}
                height={1200}
                className="lug-zoom w-full aspect-[3/4] md:aspect-auto md:h-full object-cover"
              />
              <figcaption
                className="absolute left-4 bottom-4 px-4 py-2 rounded-full text-xs font-bold"
                style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: C.turqDeep }}
              >
                Sala de espera
              </figcaption>
            </figure>
            <div className="md:col-span-7 grid grid-rows-[1fr_auto] gap-4 md:gap-5">
              <figure className="lug-cortina relative overflow-hidden" style={{ borderRadius: '24px' }}>
                <Image
                  src={`${IMG}/box-atencion.webp`}
                  alt="Detalle del box de atención de Clínica Dental Lüg con su sillón dental y ventanales"
                  width={900}
                  height={1200}
                  className="lug-zoom w-full aspect-[16/10] object-cover object-[50%_38%]"
                />
                <figcaption
                  className="absolute left-4 bottom-4 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: C.turqDeep }}
                >
                  Box de atención
                </figcaption>
              </figure>
              <div className="grid grid-cols-[1fr_1.2fr] gap-4 md:gap-5">
                <figure className="overflow-hidden" style={{ borderRadius: '24px' }}>
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt="Logo de Clínica Dental Lüg: la palabra LÜG cuya Ü dibuja una cara sonriente"
                    width={1080}
                    height={781}
                    className="w-full h-full object-cover"
                  />
                </figure>
                <div
                  className="flex flex-col justify-center p-5 md:p-6"
                  style={{ backgroundColor: C.white, borderRadius: '24px' }}
                >
                  <Sonrisa className="w-[30px] h-auto mb-3" />
                  <p className={`${display.className} text-lg md:text-xl font-bold leading-snug`} style={{ color: C.ink }}>
                    Una marca que ya sonríe
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed font-semibold" style={{ color: C.mut }}>
                    En su logo, los dos puntos de la Ü son los ojos y la letra
                    completa la sonrisa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow light>Opiniones</Eyebrow>
              <p className={`${display.className} leading-none font-extrabold text-[clamp(4.5rem,20vw,7.5rem)]`} style={{ color: C.turq }}>
                {BIZ.rating}
              </p>
              <Stars value={5} color={C.turqLight} className="w-5 h-5 mt-2" />
              <p className="mt-3 text-base font-bold" style={{ color: C.white }}>
                {BIZ.reviews} opiniones en Google
              </p>
              <p className="mt-2 text-sm leading-relaxed font-semibold max-w-xs" style={{ color: C.mutDark }}>
                Lo que repiten los pacientes: atención cercana y todo
                explicado con claridad.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.turqLight, textDecorationColor: 'rgba(95,216,208,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
          </div>
          <div className="lg:col-span-8 space-y-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 110}>
                <figure
                  className="p-6 md:p-7 rounded-2xl border"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: C.lineD }}
                >
                  <Sonrisa className="w-[24px] h-auto mb-3.5" color={C.turqLight} />
                  <blockquote className={`${display.className} text-base md:text-lg font-semibold leading-relaxed`} style={{ color: C.white }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: C.turqLight }}>
                      {r.author}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.mutDarkSoft }}>
                      Reseña en Google
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 · Horario y cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Eyebrow>Horario y cómo llegar</Eyebrow>
            <h2
              className={`${display.className} text-3xl md:text-[2.6rem] leading-[1.1] font-bold tracking-[-0.01em] mb-9 md:mb-12`}
              style={{ color: C.ink }}
            >
              {BIZ.address}, <span style={{ color: C.turqDeep }}>{BIZ.city}</span>
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            <div className="lg:col-span-6">
              <figure className="lug-cortina relative overflow-hidden mb-6" style={{ borderRadius: '24px' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Clínica Dental Lüg en Egaña 931, Puerto Montt, con su letrero turquesa"
                  width={1200}
                  height={900}
                  className="lug-zoom w-full aspect-[4/3] object-cover"
                />
                <figcaption
                  className="absolute left-4 bottom-4 px-4 py-2 rounded-full text-xs font-bold"
                  style={{ backgroundColor: 'rgba(255,255,255,0.92)', color: C.turqDeep }}
                >
                  Búscanos por el letrero turquesa
                </figcaption>
              </figure>
              <ul className="space-y-2.5 mb-7">
                <li className="flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.mut }}>
                  <Sonrisa className="w-[20px] h-auto shrink-0" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>Dirección:</strong> {BIZ.address}, {BIZ.city}
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.mut }}>
                  <Sonrisa className="w-[20px] h-auto shrink-0" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>WhatsApp:</strong> {BIZ.phoneDisplay}
                  </span>
                </li>
              </ul>
              <ul className="border-t mb-8" style={{ borderColor: C.lineL }}>
                {HORARIO.map((h) => (
                  <li
                    key={h.dias}
                    className="flex items-baseline justify-between gap-4 py-3 border-b text-sm md:text-base"
                    style={{ borderColor: C.lineL }}
                  >
                    <span className="font-bold" style={{ color: C.ink }}>{h.dias}</span>
                    <span className="font-semibold" style={{ color: h.horas === 'Cerrado' ? 'rgba(31,42,48,0.68)' : C.turqDeep }}>{h.horas}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <BtnWa>Agenda tu evaluación</BtnWa>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lug-link inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-base font-bold border-2 tap-44"
                  style={{ borderColor: 'rgba(0,112,106,0.4)', color: C.turqDeep }}
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div
                className="overflow-hidden h-full min-h-[340px]"
                style={{ borderRadius: '24px', backgroundColor: C.niebla, boxShadow: '0 22px 60px rgba(31,42,48,0.14)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[340px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.ink, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className={`${display.className} flex items-center gap-2.5 text-lg font-extrabold`}>
                <Sonrisa className="w-[24px] h-auto" color={C.turqLight} />
                {BIZ.name}
              </p>
              <address className="not-italic mt-1.5 text-xs font-semibold" style={{ color: C.mutDark }}>
                {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
              </address>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs font-semibold" style={{ color: C.mutDark }} aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="mt-5 pt-4 border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
            <p className="text-[11px] leading-relaxed font-semibold" style={{ color: 'rgba(255,255,255,0.68)' }}>
              Mockup preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Nombre, dirección, horario, teléfono, nota y
              reseñas son datos públicos reales de su ficha de Google Maps; las
              fotos son de su ficha.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
