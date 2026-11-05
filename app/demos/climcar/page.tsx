import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_REVISION, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, PASOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  display: 'swap',
})

const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
  display: 'swap',
})

const C = {
  ink: '#12181D',
  inkSoft: '#1A242C',
  deep: '#0B1116',
  ice: '#7FC8E8',
  cyan: '#39A9C9',
  cyanInk: '#17708A',
  paper: '#F2F7FA',
  paperDeep: '#E2EEF5',
  muted: '#4C5D69',
  line: 'rgba(18,24,29,0.14)',
  lineLight: 'rgba(242,247,250,0.18)',
  onDark: 'rgba(242,247,250,0.78)',
}

const BEVEL = 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 0 100%)'
const CUT = 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)'
const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2'

export const metadata: Metadata = demoMetadata({
  slug: 'climcar',
  title: 'Climcar: aire acondicionado automotriz en Padre las Casas',
  description:
    'Aire acondicionado y calefacción automotriz en Licanco 799, Padre las Casas. Recargas, reparaciones, filtros de polen y calefacción. Cotiza por WhatsApp.',
  image: '/demos/climcar/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajan', href: '#proceso' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Contacto', href: '#contacto' },
]

type IconKind = (typeof SERVICIOS)[number]['icon']

function ServiceIcon({ kind, color = C.cyanInk }: { kind: IconKind; color?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'aire' && (
        <>
          <path d="M12 2.5v19M3.8 7.2l16.4 9.6M20.2 7.2L3.8 16.8" />
          <path d="M9.6 4.4L12 6.4l2.4-2M9.6 19.6L12 17.6l2.4 2" />
        </>
      )}
      {kind === 'mantencion' && (
        <>
          <rect x="3" y="4" width="18" height="16" rx="1.5" />
          <path d="M3 9.3h18M3 14.7h18M8.3 4v16M15.7 4v16" />
        </>
      )}
      {kind === 'diagnostico' && (
        <>
          <path d="M3.8 17.5a8.2 8.2 0 1 1 16.4 0" />
          <path d="M12 17.5l4.2-5.6" />
          <circle cx="12" cy="17.5" r="1.4" fill={color} stroke="none" />
          <path d="M6.2 9.1l1.4 1M17.8 9.1l-1.4 1" />
        </>
      )}
    </svg>
  )
}

function WaIcon({ className = 'h-[17px] w-[17px]' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function Arrow({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9 3.5L13.5 8 9 12.5" />
    </svg>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[10.5px] font-semibold uppercase tracking-[0.26em]"
      style={{ color: dark ? C.ice : C.cyanInk }}
    >
      <span
        className="inline-block h-px w-7 shrink-0"
        style={{ backgroundColor: dark ? 'rgba(127,200,232,0.7)' : C.cyan }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** Líneas de flujo de aire: el motivo gráfico de la página. */
function AirPaths({ dark = false, className = '' }: { dark?: boolean; className?: string }) {
  const stroke = dark ? 'rgba(127,200,232,0.3)' : 'rgba(57,169,201,0.18)'
  const hair = dark ? 'rgba(127,200,232,0.22)' : 'rgba(23,112,138,0.16)'

  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 1440 900"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <g fill="none" stroke={stroke} strokeWidth="1">
        <path d="M-80 170 C 220 90, 430 290, 720 195 S 1180 40, 1520 150" />
        <path d="M-80 260 C 250 180, 440 380, 730 280 S 1190 130, 1520 240" />
        <path d="M-80 350 C 230 270, 470 470, 760 365 S 1200 220, 1520 330" />
      </g>
      <g fill="none" stroke={hair} strokeWidth="1" strokeDasharray="2 12">
        <path d="M-80 215 C 240 135, 440 340, 720 240 S 1180 85, 1520 195" />
        <path d="M-80 305 C 250 225, 460 420, 745 320 S 1190 175, 1520 285" />
      </g>
    </svg>
  )
}

function Crosshairs() {
  const marks = ['left-4 top-4', 'right-4 top-4', 'bottom-4 left-4', 'bottom-4 right-4']
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {marks.map((pos) => (
        <span
          key={pos}
          className={`absolute ${pos} text-[13px] leading-none`}
          style={{ color: 'rgba(127,200,232,0.55)' }}
        >
          +
        </span>
      ))}
    </div>
  )
}

const BUTTON =
  'inline-flex h-[50px] items-center justify-center gap-2.5 whitespace-nowrap px-6 text-[12px] font-semibold uppercase tracking-[0.14em] transition-transform duration-200 hover:-translate-y-0.5 active:scale-[0.98]'

export default function ClimcarPage() {
  return (
    <div
      className={`${body.className} min-h-screen overflow-x-clip antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto; }

        .cc-shot { animation: ccShot 2.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        @keyframes ccShot { from { transform: scale(1.07); } to { transform: scale(1); } }

        .cc-frost {
          transform-origin: top;
          background: linear-gradient(180deg, #F2F7FA 0%, #D7EDF6 52%, #7FC8E8 100%);
          box-shadow: 0 2px 0 #7FC8E8, 0 0 34px rgba(127, 200, 232, 0.65);
          animation: ccFrost 1.55s cubic-bezier(0.76, 0, 0.24, 1) 0.08s both;
        }
        .cc-frost::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: repeating-linear-gradient(105deg, rgba(255,255,255,0.5) 0 1px, transparent 1px 18px);
          opacity: 0.55;
        }
        @keyframes ccFrost { from { transform: scaleY(1); } to { transform: scaleY(0); } }

        .cc-in { animation: ccIn 0.9s cubic-bezier(0.22, 0.7, 0.2, 1) both; }
        @keyframes ccIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }

        .cc-rail {
          background: linear-gradient(180deg, transparent, rgba(57,169,201,0.18) 12%, rgba(57,169,201,0.18) 88%, transparent);
        }
        .cc-rail-spark { animation: ccRain 10s linear infinite; }
        @keyframes ccRain {
          0% { transform: translateY(-30vh); opacity: 0; }
          12% { opacity: 0.75; }
          85% { opacity: 0.5; }
          100% { transform: translateY(112vh); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          .cc-shot, .cc-in, .cc-rail-spark { animation: none !important; }
          .cc-frost { display: none; }
          .cc-in { opacity: 1; transform: none; }
        }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            Climcar
            <span className="text-[9px] font-semibold tracking-[0.24em] opacity-60">A/C</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(242,247,250,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: C.paper,
        }}
      />

      {/* Línea de aire que recorre la página */}
      <div className="cc-rail pointer-events-none fixed right-0 top-0 z-30 hidden h-screen w-px md:block" aria-hidden="true">
        <span
          className="cc-rail-spark absolute left-0 top-0 h-[24vh] w-px"
          style={{ backgroundColor: C.ice, boxShadow: '0 0 12px rgba(127,200,232,0.8)' }}
        />
      </div>

      <main>
        {/* ── Hero ── */}
        <section
          id="inicio"
          className="relative flex min-h-svh flex-col justify-end overflow-hidden"
          style={{ backgroundColor: C.ink }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={`${IMG}/hero.webp`}
              alt="Auto en el taller de Climcar con manómetros y bomba de vacío conectados al sistema de aire acondicionado"
              fill
              priority
              sizes="100vw"
              className="cc-shot object-cover"
              style={{ objectPosition: '52% 42%' }}
            />
            <div className="cc-frost absolute inset-0" aria-hidden="true" />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,24,29,0.62) 0%, rgba(18,24,29,0.24) 38%, rgba(18,24,29,0.9) 100%)',
            }}
          />
          <AirPaths dark className="opacity-70" />
          <Crosshairs />

          <div className="relative z-20 mx-auto w-full max-w-6xl px-5 pb-20 pt-28 md:px-8 md:pb-12 md:pt-40">
            <div className="cc-in" style={{ animationDelay: '560ms' }}>
              <Eyebrow dark>Climatización automotriz</Eyebrow>
            </div>

            <h1
              className={`${display.className} cc-in mt-5 max-w-4xl text-balance text-[clamp(2.35rem,7.4vw,5.3rem)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em]`}
              style={{ color: '#F7FBFD', animationDelay: '680ms' }}
            >
              El aire del auto, en manos de un especialista.
            </h1>

            <p
              className="cc-in mt-6 max-w-xl text-[15px] leading-relaxed md:text-base"
              style={{ color: 'rgba(242,247,250,0.9)', animationDelay: '800ms' }}
            >
              En Licanco 799 revisamos el aire acondicionado y la calefacción de tu auto.
              Cuéntanos qué pasa por WhatsApp y coordinamos la revisión.
            </p>

            <div
              className="cc-in mt-7 flex flex-col gap-3 sm:flex-row"
              style={{ animationDelay: '920ms' }}
            >
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BUTTON} ${FOCUS} w-full sm:w-auto`}
                style={{ backgroundColor: C.ice, color: C.ink, clipPath: CUT }}
              >
                <WaIcon />
                Cotizar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${BUTTON} ${FOCUS} w-full border sm:w-auto`}
                style={{
                  borderColor: 'rgba(242,247,250,0.45)',
                  color: C.paper,
                  clipPath: CUT,
                }}
              >
                Ver servicios
                <Arrow />
              </a>
            </div>
          </div>

          <div
            className="relative z-20 hidden border-t md:block"
            style={{
              borderColor: 'rgba(242,247,250,0.24)',
              backgroundColor: 'rgba(18,24,29,0.58)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <div
              className="mx-auto grid max-w-6xl grid-cols-2 gap-x-5 gap-y-2 px-5 py-3.5 text-[10px] uppercase tracking-[0.16em] md:grid-cols-4 md:px-8 md:text-[11px]"
              style={{ color: 'rgba(242,247,250,0.9)' }}
            >
              <span>Licanco 799 · Padre las Casas</span>
              <span className="hidden sm:block">Aire acondicionado y calefacción</span>
              <span className="hidden md:block">Diagnóstico en el taller</span>
              <span className="flex items-center justify-self-end gap-2">
                <span
                  className="inline-block h-1.5 w-1.5 rounded-full"
                  style={{ backgroundColor: C.ice }}
                  aria-hidden="true"
                />
                WhatsApp directo
              </span>
            </div>
          </div>
        </section>

        {/* ── Servicios ── */}
        <section id="servicios" className="relative scroll-mt-20 overflow-hidden py-16 md:py-24">
          <AirPaths className="opacity-80" />
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <Reveal>
              <div
                className="flex items-end justify-between gap-6 border-b pb-5"
                style={{ borderColor: C.line }}
              >
                <div>
                  <Eyebrow>Servicios</Eyebrow>
                  <h2
                    className={`${display.className} mt-3 text-[clamp(2rem,5.4vw,3.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]`}
                  >
                    Aire, calefacción y diagnóstico.
                  </h2>
                </div>
                <span
                  className="hidden shrink-0 pb-1 text-[10px] font-semibold uppercase tracking-[0.22em] md:block"
                  style={{ color: C.muted }}
                >
                  01 / Servicios
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed md:text-[15px]" style={{ color: C.muted }}>
                Aire acondicionado y calefacción del auto: recargas, reparaciones, cambio
                de filtros de polen y revisión cuando algo deja de funcionar.
              </p>
            </Reveal>

            <div className="mt-10 grid gap-4 md:grid-cols-3 md:items-start">
              {SERVICIOS.map((servicio, i) => (
                <Reveal
                  key={servicio.num}
                  delay={i * 120}
                  className={i === 1 ? 'md:mt-8' : i === 2 ? 'md:mt-16' : ''}
                >
                  <article
                    className="h-full p-px transition-transform duration-300 hover:-translate-y-1"
                    style={{ clipPath: BEVEL, backgroundColor: C.line }}
                  >
                    <div
                      className="flex h-full flex-col p-6 md:p-7"
                      style={{ clipPath: BEVEL, backgroundColor: '#FFFFFF' }}
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="text-[11px] font-semibold tracking-[0.22em]"
                          style={{ color: C.muted }}
                        >
                          {servicio.num}
                        </span>
                        <span
                          className="flex h-11 w-11 items-center justify-center"
                          style={{ backgroundColor: C.paperDeep, clipPath: CUT }}
                        >
                          <ServiceIcon kind={servicio.icon} />
                        </span>
                      </div>

                      <h3
                        className={`${display.className} mt-8 text-[22px] font-bold uppercase leading-[1.02] tracking-[-0.02em]`}
                      >
                        {servicio.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                        {servicio.desc}
                      </p>

                      <div className="mt-auto pt-8">
                        <div
                          className="flex items-center justify-between gap-3 border-t pt-5"
                          style={{ borderColor: C.line }}
                        >
                          <span
                            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                            style={{ color: C.cyanInk }}
                          >
                            {servicio.tag}
                          </span>
                          <span style={{ color: C.cyan }} aria-hidden="true">
                            <Arrow className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Foto del taller ── */}
        <section
          aria-labelledby="taller-title"
          className="relative overflow-hidden"
          style={{ backgroundColor: C.ink }}
        >
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden md:absolute md:inset-0 md:aspect-auto">
              <Image
                src={`${IMG}/taller.webp`}
                alt="Interior del taller de Climcar con varios autos con el capó abierto"
                fill
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: '50% 55%' }}
              />
              <div
                className="absolute inset-0 md:hidden"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 55%, rgba(18,24,29,0.92) 100%)',
                }}
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    'linear-gradient(100deg, rgba(18,24,29,0.9) 0%, rgba(18,24,29,0.62) 46%, rgba(18,24,29,0.16) 100%)',
                }}
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(18,24,29,0.35) 0%, transparent 40%, rgba(18,24,29,0.7) 100%)',
                }}
              />
            </div>

            <AirPaths dark className="hidden opacity-50 md:block" />

            <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-end px-5 py-9 md:min-h-[540px] md:px-8 md:pb-14 md:pt-32">
              <Eyebrow dark>En el taller</Eyebrow>
              <h2
                id="taller-title"
                className={`${display.className} mt-4 max-w-2xl text-[clamp(1.9rem,5vw,3.4rem)] font-extrabold uppercase leading-[0.96] tracking-[-0.03em]`}
                style={{ color: '#F7FBFD' }}
              >
                Revisamos el sistema antes de intervenir.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed md:text-[15px]" style={{ color: 'rgba(242,247,250,0.86)' }}>
                Recargas, reparaciones y filtros de polen.
                Aire acondicionado y calefacción en un mismo taller.
              </p>
              <p
                className="mt-6 text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: 'rgba(242,247,250,0.72)' }}
              >
                Licanco 799 · Padre las Casas
              </p>
            </div>
          </div>
        </section>

        {/* ── Cómo trabajan ── */}
        <section
          id="proceso"
          className="relative scroll-mt-20 overflow-hidden py-16 md:py-24"
          style={{ backgroundColor: C.ink, color: C.paper }}
        >
          <AirPaths dark />
          <div className="relative mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
              <div>
                <Reveal>
                  <Eyebrow dark>Cómo trabajan</Eyebrow>
                  <h2
                    className={`${display.className} mt-3 text-[clamp(2rem,5.4vw,3.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]`}
                    style={{ color: '#F7FBFD' }}
                  >
                    Tres pasos, sin vueltas.
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed md:text-[15px]" style={{ color: C.onDark }}>
                    La conversación empieza por WhatsApp y sigue en el taller. Tú sabes qué
                    se va a hacer con tu auto antes de dejarlo.
                  </p>
                </Reveal>

                <ol className="mt-10">
                  {PASOS.map((paso, i) => (
                    <li key={paso.num}>
                      <Reveal delay={i * 120}>
                        <div className={`relative flex gap-5 ${i < PASOS.length - 1 ? 'pb-8' : ''}`}>
                          {i < PASOS.length - 1 && (
                            <span
                              className="absolute bottom-0 left-[21px] top-12 w-px"
                              style={{ backgroundColor: 'rgba(127,200,232,0.28)' }}
                              aria-hidden="true"
                            />
                          )}
                          <span
                            className={`${display.className} relative z-10 flex h-11 w-11 shrink-0 items-center justify-center text-[13px] font-bold`}
                            style={{
                              backgroundColor: C.inkSoft,
                              color: C.ice,
                              clipPath: CUT,
                              boxShadow: 'inset 0 0 0 1px rgba(127,200,232,0.28)',
                            }}
                          >
                            {paso.num}
                          </span>
                          <div className="pt-0.5">
                            <h3 className="text-base font-semibold md:text-lg" style={{ color: '#F7FBFD' }}>
                              {paso.title}
                            </h3>
                            <p className="mt-2 max-w-md text-[13.5px] leading-relaxed md:text-sm" style={{ color: C.onDark }}>
                              {paso.desc}
                            </p>
                          </div>
                        </div>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>

              <Reveal delay={160}>
                <figure className="relative lg:mt-8">
                  <div
                    className="relative aspect-[4/5] overflow-hidden"
                    style={{ clipPath: BEVEL, backgroundColor: C.inkSoft }}
                  >
                    <Image
                      src={`${IMG}/proceso.webp`}
                      alt="Tablero de un auto desmontado durante una revisión del sistema de climatización"
                      fill
                      sizes="(min-width: 1024px) 42vw, calc(100vw - 40px)"
                      className="object-cover"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(18,24,29,0.05) 45%, rgba(18,24,29,0.62) 100%)',
                      }}
                    />
                    <span
                      className="absolute left-4 top-4 px-3 py-2 text-[9.5px] font-semibold uppercase tracking-[0.18em]"
                      style={{
                        backgroundColor: 'rgba(11,17,22,0.86)',
                        color: C.ice,
                        clipPath: CUT,
                        backdropFilter: 'blur(6px)',
                        WebkitBackdropFilter: 'blur(6px)',
                      }}
                    >
                      Diagnóstico antes de cotizar
                    </span>
                  </div>
                  <figcaption
                    className="mt-4 text-[11px] leading-relaxed"
                    style={{ color: 'rgba(242,247,250,0.66)' }}
                  >
                    Tablero desmontado durante la revisión de una falla.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Ubicación ── */}
        <section id="ubicacion" className="relative scroll-mt-20 overflow-hidden py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-14">
              <Reveal>
                <Eyebrow>Ubicación</Eyebrow>
                <h2
                  className={`${display.className} mt-3 text-[clamp(2rem,5.4vw,3.6rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]`}
                >
                  Licanco 799,
                  <br />
                  Padre las Casas.
                </h2>

                <address className="mt-6 not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
                  <span className="block font-semibold" style={{ color: C.ink }}>
                    Climcar
                  </span>
                  Licanco 799
                  <br />
                  Padre las Casas, Araucanía
                  <br />
                  Chile
                </address>

                <p className="mt-4 max-w-sm text-sm leading-relaxed" style={{ color: C.muted }}>
                  Coordinamos la visita por WhatsApp. Escríbenos y vemos el auto en el taller.
                </p>

                <div className="mt-7 flex flex-col items-stretch gap-3 sm:items-start">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BUTTON} ${FOCUS} w-full sm:w-auto`}
                    style={{ backgroundColor: C.ink, color: C.paper, clipPath: CUT }}
                  >
                    Ver en Google Maps
                    <Arrow />
                  </a>
                  <a
                    href={WA_LINK_REVISION}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${BUTTON} ${FOCUS} w-full border sm:w-auto`}
                    style={{ borderColor: 'rgba(18,24,29,0.32)', color: C.ink, clipPath: CUT }}
                  >
                    <WaIcon />
                    Escribir por WhatsApp
                  </a>
                </div>

                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold underline decoration-1 underline-offset-4 transition-colors hover:decoration-2 ${FOCUS}`}
                  style={{ color: C.cyanInk }}
                >
                  Climcar en Facebook
                  <Arrow className="h-3 w-3" />
                </a>
              </Reveal>

              <Reveal delay={140}>
                <div className="p-px" style={{ clipPath: BEVEL, backgroundColor: C.line }}>
                  <div
                    className="relative h-[340px] overflow-hidden md:h-[430px]"
                    style={{ clipPath: BEVEL, backgroundColor: C.paperDeep }}
                  >
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="h-full w-full"
                      style={{ border: 0 }}
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
                <p
                  className="mt-3 text-[10px] uppercase tracking-[0.18em]"
                  style={{ color: C.muted }}
                >
                  Licanco 799 · Padre las Casas · Araucanía
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre ── */}
        <section
          id="contacto"
          className="relative scroll-mt-20 overflow-hidden"
          style={{ backgroundColor: C.ink }}
        >
          <Image
            src={`${IMG}/marca.webp`}
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.24]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(100deg, rgba(18,24,29,0.96) 0%, rgba(18,24,29,0.84) 55%, rgba(18,24,29,0.6) 100%)',
            }}
          />
          <AirPaths dark className="opacity-60" />

          <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
            <Reveal>
              <Eyebrow dark>Contacto</Eyebrow>
              <h2
                className={`${display.className} mt-3 max-w-2xl text-[clamp(2.1rem,5.8vw,3.8rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em]`}
                style={{ color: '#F7FBFD' }}
              >
                Cuéntanos qué pasa con el aire de tu auto.
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-relaxed md:text-[15px]" style={{ color: 'rgba(242,247,250,0.86)' }}>
                Escríbenos con el modelo y lo que notas. Coordinamos la revisión en Licanco
                799, Padre las Casas.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BUTTON} ${FOCUS} w-full sm:w-auto`}
                  style={{ backgroundColor: C.ice, color: C.ink, clipPath: CUT }}
                >
                  <WaIcon />
                  Cotizar por WhatsApp
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${BUTTON} ${FOCUS} w-full border sm:w-auto`}
                  style={{
                    borderColor: 'rgba(242,247,250,0.45)',
                    color: C.paper,
                    clipPath: CUT,
                  }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>

              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 inline-flex items-center gap-2 text-xs font-semibold underline decoration-1 underline-offset-4 transition-colors hover:decoration-2 ${FOCUS}`}
                style={{ color: C.ice }}
              >
                También estamos en Facebook
                <Arrow className="h-3 w-3" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.paper }}>
        <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1.5">
            <p
              className={`${display.className} flex items-baseline gap-2 text-lg font-extrabold uppercase tracking-[0.01em]`}
            >
              Climcar
              <span className="text-[9px] font-semibold tracking-[0.22em]" style={{ color: C.ice }}>
                A/C
              </span>
            </p>
            <a
              href={`tel:${BIZ.phoneTel}`}
              className={`text-sm font-semibold ${FOCUS}`}
              style={{ color: C.ice }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>

          <p className="mt-2 text-xs leading-relaxed" style={{ color: 'rgba(242,247,250,0.74)' }}>
            Licanco 799, Padre las Casas, Araucanía
          </p>

          <nav
            className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px]"
            aria-label="Enlaces del pie"
            style={{ color: 'rgba(242,247,250,0.82)' }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className={`transition-colors hover:text-white ${FOCUS}`}>
                {link.label}
              </a>
            ))}
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition-colors hover:text-white ${FOCUS}`}
            >
              Facebook
            </a>
          </nav>

          <p
            className="mt-4 border-t pt-3 text-[11px] leading-relaxed"
            style={{ borderColor: 'rgba(242,247,250,0.14)', color: 'rgba(242,247,250,0.68)' }}
          >
            Sitio de ejemplo de{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 ${FOCUS}`}
              style={{ color: C.ice }}
            >
              Sitiazo
            </a>{' '}
            para Climcar. Los datos de contacto son los públicos del negocio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-semibold underline underline-offset-2 ${FOCUS}`}
              style={{ color: C.ice }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
