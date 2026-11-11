import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, QUE_LAVAMOS, RESENAS, PASOS_RETIRO, WA_LINK, WA_RETIRO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Del local de madera azul y el delantal denim, los cuadrados celestes del
// logo, las hortensias (azul a lila) y el verde del jardin. Motivo propio:
// el tendedero: la ropa (y la foto del local) colgada con pinzas, meciendose
// al aire, con burbujas de espuma subiendo.
const C = {
  cielo: '#E9F2F9',
  cielo2: '#DCEAF4',
  papel: '#FBFDFE',
  navy: '#25304E',
  navyBajo: '#1A2338',
  denim: '#3B5A94',
  celeste: '#9CC3E2',
  espuma: '#F2F8FC',
  lila: '#6E5BA6',
  lila2: '#ECE7F6',
  verde: '#67875D',
  madera: '#C9A06B',
  suave: '#4E5878',
  linea: 'rgba(37,48,78,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'fresh-and-go-villarrica',
  title: 'Fresh and go · Lavandería en Molco, Villarrica',
  description:
    'Lavandería en Calle de la Aurora, sector Molco, Villarrica. Ropa, ropa de cama y plumones, con retiro a domicilio. Coordina por WhatsApp.',
  image: `${IMG}/local-azul.webp`,
})

const NAV_LINKS = [
  { label: 'Qué lavamos', href: '#lavado' },
  { label: 'Retiro', href: '#retiro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Perchero de alambre, como los que cuelgan del muro del local. */
function Perchero({ color, className = 'h-5 w-5' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 9.5V7.8a2.3 2.3 0 1 1 2.3-2.3" />
        <path d="M12 9.5 3.2 16.8a1.8 1.8 0 0 0 1.1 3.2h15.4a1.8 1.8 0 0 0 1.1-3.2L12 9.5Z" />
      </g>
    </svg>
  )
}

/** Pinza de ropa de madera. */
function Pinza({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 8 18" className={className} aria-hidden="true">
      <rect x="1" y="0.6" width="6" height="16.8" rx="2.6" fill={C.madera} />
      <rect x="3.55" y="8" width="0.9" height="9.4" rx="0.45" fill="rgba(37,48,78,0.32)" />
      <circle cx="4" cy="5" r="1.5" fill="none" stroke="rgba(37,48,78,0.4)" strokeWidth="0.8" />
    </svg>
  )
}

/** Polera colgando del tendedero. */
function Polera({ color, className = 'h-12 w-12' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M8.5 4 3.6 7.2l2 3.4 1.9-1.1V20h9V9.5l1.9 1.1 2-3.4L15.5 4a3.5 3.5 0 0 1-7 0Z"
        fill={color}
        stroke={C.navy}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Calcetin colgando. */
function Calcetin({ color, className = 'h-12 w-12' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M8 3.5h7V12l4.2 4.6a3.8 3.8 0 0 1-5.6 4.9L8 16.5V3.5Z"
        fill={color}
        stroke={C.navy}
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8 6.5h7" stroke={C.navy} strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

/** Iconos de las tarjetas "que lavamos". */
function IconoLavado({ tipo, color, className = 'h-7 w-7' }: { tipo: string; color: string; className?: string }) {
  const g = { fill: 'none', stroke: color, strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {tipo === 'polera' && <path {...g} d="M8.5 4.5 4 7.6l1.8 3 1.7-1V19h9V9.6l1.7 1 1.8-3-4.5-3.1a3.5 3.5 0 0 1-7 0Z" />}
      {tipo === 'almohada' && (
        <g {...g}>
          <path d="M5.5 6.5h13a1.8 1.8 0 0 1 1.8 1.8v7.4a1.8 1.8 0 0 1-1.8 1.8h-13a1.8 1.8 0 0 1-1.8-1.8V8.3a1.8 1.8 0 0 1 1.8-1.8Z" />
          <path d="M8 6.5v11M16 6.5v11" opacity="0.55" />
        </g>
      )}
      {tipo === 'plumon' && (
        <g {...g}>
          <rect x="4" y="6" width="16" height="12" rx="4" />
          <path d="M8.5 6v12M15.5 6v12" opacity="0.55" />
        </g>
      )}
    </svg>
  )
}

function Rotulo({ n, t, light = false }: { n: string; t: string; light?: boolean }) {
  return (
    <p className={`${mono.className} flex items-center gap-2.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.24em]`} style={{ color: light ? C.celeste : C.denim }}>
      <Perchero color={light ? C.celeste : C.denim} className="h-4 w-4" />
      <span style={{ color: light ? 'rgba(154,186,222,0.8)' : C.lila }}>{n}</span>
      {t}
    </p>
  )
}

function Btn({
  href,
  children,
  tone,
}: {
  href: string
  children: React.ReactNode
  tone: 'navy' | 'linea' | 'celeste' | 'lineaBlanca'
}) {
  const st: CSSProperties =
    tone === 'navy'
      ? { backgroundColor: C.navy, color: '#FFFFFF' }
      : tone === 'celeste'
        ? { backgroundColor: C.celeste, color: C.navyBajo }
        : tone === 'linea'
          ? { border: `2px solid ${C.navy}`, color: C.navy }
          : { border: '2px solid rgba(255,255,255,0.6)', color: '#FFFFFF' }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} fg-btn inline-flex items-center justify-center px-6 h-12 rounded-full text-base font-bold tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function FreshAndGoPage() {
  return (
    <main
      id="inicio"
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.navy }}
    >
      <style>{`
        /* Entrada suave. */
        @keyframes fg-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .fg-sube { animation: fg-sube 0.8s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Titular que entra linea por linea, dentro de mascaras. */
        @keyframes fg-linea { from { transform: translateY(112%) } to { transform: none } }
        .fg-linea { animation: fg-linea 0.9s cubic-bezier(0.22,0.61,0.2,1) both }

        /* La prenda cae a la cuerda y queda colgada. */
        @keyframes fg-cuelga {
          0% { opacity: 0; transform: translateY(-24px) rotate(-4deg) }
          62% { opacity: 1; transform: translateY(3px) rotate(1.4deg) }
          100% { opacity: 1; transform: none }
        }
        .fg-cuelga { transform-origin: 50% 0; animation: fg-cuelga 0.9s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Vaiven: la ropa se mece al aire, desde la pinza. */
        @keyframes fg-vaiven { from { transform: rotate(var(--sw, 2.4deg)) } to { transform: rotate(calc(var(--sw, 2.4deg) * -1)) } }
        .fg-vaiven { transform-origin: 50% 4%; animation: fg-vaiven var(--swd, 3.6s) ease-in-out var(--swx, 0s) infinite alternate }

        /* Burbujas de espuma que suben y se disuelven. */
        @keyframes fg-burbuja {
          0% { transform: translateY(0) scale(0.55); opacity: 0 }
          20% { opacity: 0.9 }
          100% { transform: translateY(-130px) scale(1); opacity: 0 }
        }
        .fg-burbuja { animation: fg-burbuja 5.2s ease-in var(--bd, 0s) infinite }

        /* El tambor de la lavadora: oscila como en pleno ciclo. */
        @keyframes fg-tambor { from { transform: rotate(-8deg) scale(1.12) } to { transform: rotate(8deg) scale(1.12) } }
        .fg-tambor { animation: fg-tambor 4.4s ease-in-out infinite alternate }

        /* Las tarjetas "caen" a la repisa al entrar en pantalla. */
        @keyframes fg-cae { 0% { transform: translateY(-24px) } 62% { transform: translateY(4px) } 100% { transform: translateY(0) } }
        @supports (animation-timeline: view()) {
          .fg-prenda { animation: fg-cae linear both; animation-timeline: view(); animation-range: var(--rr, entry 0% entry 70%) }
        }

        .fg-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .fg-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .fg-btn:active { transform: scale(0.96) }
        .fg-btn:focus-visible { outline: 3px solid ${C.lila}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .fg-sube, .fg-linea, .fg-cuelga, .fg-vaiven, .fg-burbuja, .fg-tambor, .fg-prenda { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={display.className} style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            fresh and go
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(251,253,254,0.94)', ink: C.navy, line: C.linea, btnBg: C.navy, btnInk: '#FFFFFF' }}
      />

      {/* ═══ 1 · HERO: el tendedero ═══ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundImage: `linear-gradient(180deg, ${C.cielo2} 0%, ${C.cielo} 48%, ${C.espuma} 100%)` }}
      >
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[104px]">
          {/* tendedero con la ropa y la foto del local */}
          <div className="relative h-[188px] sm:h-[220px] md:h-[270px]">
            <svg
              className="absolute inset-x-0 top-0 w-full h-[62px]"
              viewBox="0 0 390 62"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M-8 12 Q195 56 398 16" stroke={C.navy} strokeWidth="2" strokeLinecap="round" />
            </svg>

            {/* polera colgando */}
            <div className="absolute" style={{ left: '5%', top: '26px' }} aria-hidden="true">
              <div className="fg-cuelga" style={{ animationDelay: '0.75s' }}>
                <div className="fg-vaiven flex flex-col items-center" style={{ '--sw': '3.4deg', '--swd': '3.1s', '--swx': '0.4s' } as CSSProperties}>
                  <Pinza className="h-[15px] w-[7px] -mb-[2px]" />
                  <Polera color="#FFFFFF" className="h-11 w-11 md:h-14 md:w-14 drop-shadow-sm" />
                </div>
              </div>
            </div>

            {/* la foto del local, prendida de la cuerda */}
            <div className="absolute left-[24%] md:left-[33%]" style={{ top: '34px', width: '50%', maxWidth: '300px' }}>
              <div className="fg-cuelga" style={{ animationDelay: '0.35s' }}>
                <figure
                  className="fg-vaiven relative rounded-[10px] bg-white p-1.5 pb-2"
                  style={{ '--sw': '2.1deg', '--swd': '4.1s', boxShadow: '0 16px 34px rgba(37,48,78,0.24)' } as CSSProperties}
                >
                  <span className="absolute -top-[9px] left-[24%]" aria-hidden="true">
                    <Pinza className="h-[17px] w-[8px]" />
                  </span>
                  <span className="absolute -top-[9px] right-[24%]" aria-hidden="true">
                    <Pinza className="h-[17px] w-[8px]" />
                  </span>
                  <span className="relative block aspect-[4/3] overflow-hidden rounded-[7px]">
                    <Image
                      src={`${IMG}/local-azul.webp`}
                      alt="Local de Fresh and go en Molco: casa de madera azul con la puerta abierta, percheros colgados y hortensias"
                      fill
                      priority
                      sizes="(min-width: 768px) 300px, 50vw"
                      className="object-cover"
                    />
                  </span>
                  <figcaption
                    className={`${mono.className} absolute -bottom-2.5 right-1.5 whitespace-nowrap rounded-full px-2.5 py-0.5 text-[8px] md:text-[10px] font-semibold uppercase tracking-[0.12em]`}
                    style={{ backgroundColor: C.lila, color: '#FFFFFF', transform: 'rotate(2deg)' }}
                  >
                    Lavandería · est. 2020
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* calcetin colgando */}
            <div className="absolute" style={{ left: '86%', top: '22px' }} aria-hidden="true">
              <div className="fg-cuelga" style={{ animationDelay: '0.95s' }}>
                <div className="fg-vaiven flex flex-col items-center" style={{ '--sw': '4deg', '--swd': '2.8s', '--swx': '0.8s' } as CSSProperties}>
                  <Pinza className="h-[15px] w-[7px] -mb-[2px]" />
                  <Calcetin color="#FFFFFF" className="h-10 w-10 md:h-12 md:w-12 drop-shadow-sm" />
                </div>
              </div>
            </div>

            {/* burbujas de espuma */}
            {[
              { l: '16%', b: '14%', s: 12, d: '0s' },
              { l: '21%', b: '34%', s: 8, d: '1.6s' },
              { l: '80%', b: '22%', s: 10, d: '2.6s' },
              { l: '93%', b: '44%', s: 7, d: '0.9s' },
            ].map((b, i) => (
              <span
                key={i}
                className="fg-burbuja absolute rounded-full"
                style={
                  {
                    left: b.l,
                    bottom: b.b,
                    width: `${b.s}px`,
                    height: `${b.s}px`,
                    border: '1.5px solid rgba(59,90,148,0.4)',
                    backgroundColor: 'rgba(255,255,255,0.55)',
                    '--bd': b.d,
                  } as CSSProperties
                }
                aria-hidden="true"
              />
            ))}
          </div>

          {/* titular */}
          <div className="relative pb-10 md:pb-14">
            <p
              className={`${mono.className} fg-sube flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em]`}
              style={{ color: C.denim, animationDelay: '1.05s' }}
            >
              <Perchero color={C.denim} className="h-4 w-4" />
              Lavandería · Molco, Villarrica
            </p>
            <h1
              className={`${display.className} mt-3 font-extrabold leading-[0.99] tracking-[-0.02em] text-[clamp(2.55rem,10.8vw,5.4rem)]`}
              style={{ color: C.navy }}
            >
              <span className="block overflow-hidden pb-0.5">
                <span className="fg-linea block" style={{ animationDelay: '1.15s' }}>
                  Ropa limpia,
                </span>
              </span>
              <span className="block overflow-hidden pb-1.5">
                <span className="fg-linea block" style={{ animationDelay: '1.32s' }}>
                  a pasos{' '}
                  <span className="relative inline-block">
                    del lago.
                    <svg
                      className="absolute -inset-x-1 -bottom-1.5 w-[calc(100%+8px)] h-[10px] pointer-events-none"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M2 6 Q14 1 26 6 T50 6 T74 6 T98 6" fill="none" stroke={C.celeste} strokeWidth="3.4" strokeLinecap="round" />
                    </svg>
                  </span>
                </span>
              </span>
            </h1>
            <p className="fg-sube mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.suave, animationDelay: '1.5s' }}>
              Lavamos tu ropa, tu ropa de cama y tus plumones. Coordina por
              WhatsApp y, si te acomoda, pasamos a buscarla a tu domicilio.
            </p>
            <div className="fg-sube mt-6 flex flex-col sm:flex-row gap-3" style={{ animationDelay: '1.65s' }}>
              <Btn href={WA_LINK} tone="navy">
                Coordinar un lavado
              </Btn>
              <Btn href={WA_RETIRO} tone="linea">
                Retiro a domicilio
              </Btn>
            </div>
            <div className="fg-sube mt-5 flex flex-wrap items-center gap-x-4 gap-y-2" style={{ animationDelay: '1.8s' }}>
              <span
                className={`${mono.className} rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em]`}
                style={{ borderColor: C.linea, color: C.denim }}
              >
                desde 2020
              </span>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 inline-flex items-center"
                style={{ color: C.denim }}
              >
                25 opiniones en Google
              </a>
            </div>
          </div>
        </div>

        {/* ola: el borde de agua que cierra el hero */}
        <svg className="block w-full h-[34px] md:h-[48px]" viewBox="0 0 390 36" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 20 Q49 6 98 20 T196 20 T294 20 T392 20 V36 H0 Z" fill={C.papel} />
        </svg>
      </section>

      {/* ═══ 2 · QUE LAVAMOS ═══ */}
      <section id="lavado" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo n="01" t="Qué lavamos" />
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,7vw,3.7rem)] max-w-2xl`}>
              Lo que dejas, vuelve con olor a limpio.
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Ropa de casa y de vacaciones. Nada de planta industrial: una
              lavandería chica en Molco, al paso del lago.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-3 gap-5 md:gap-6">
            {QUE_LAVAMOS.map((q, i) => (
              <li key={q.titulo} className="fg-prenda" style={{ '--rr': `entry ${i * 7}% entry 68%` } as CSSProperties}>
                <article
                  className="relative h-full rounded-2xl border bg-white px-5 pb-5 pt-7"
                  style={{
                    borderColor: C.linea,
                    boxShadow: '0 10px 26px rgba(37,48,78,0.08)',
                    transform: `rotate(${i === 1 ? 1.1 : -1.1}deg)`,
                  }}
                >
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2" aria-hidden="true">
                    <Perchero color={C.denim} className="h-7 w-7" />
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl" style={{ backgroundColor: C.espuma }}>
                    <IconoLavado tipo={q.icono} color={C.denim} />
                  </span>
                  <h3 className={`${display.className} mt-3 text-xl font-bold leading-tight`}>{q.titulo}</h3>
                  <p className="mt-1.5 text-sm md:text-[0.95rem] leading-relaxed" style={{ color: C.suave }}>
                    {q.detalle}
                  </p>
                </article>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl px-5 py-5" style={{ backgroundColor: C.lila2 }}>
              <p className="flex-1 text-base md:text-lg font-semibold leading-snug" style={{ color: C.navy }}>
                ¿De vacaciones por el lago? Traes la ropa sucia, te la llevas
                impecable.
              </p>
              <Btn href={WA_LINK} tone="navy">
                Coordinar un lavado
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 3 · RETIRO A DOMICILIO ═══ */}
      <section id="retiro" className="scroll-mt-20" style={{ backgroundColor: C.lila2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[0.92fr_1.08fr] gap-9 md:gap-14 items-center">
          <Reveal>
            <Rotulo n="02" t="Retiro a domicilio" />
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,7vw,3.7rem)]`}>
              La lavandería va a tu casa.
            </h2>
            <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Coordina por WhatsApp y pasamos a buscar tu ropa a tu domicilio:
              la lavamos y te la dejamos de vuelta.
            </p>
            <ol className="mt-7 space-y-3">
              {PASOS_RETIRO.map((p, i) => (
                <li key={p} className="flex items-center gap-3.5">
                  <span
                    className={`${mono.className} flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold`}
                    style={{ backgroundColor: C.navy, color: C.celeste }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-base md:text-lg font-semibold" style={{ color: C.navy }}>
                    {p}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <Btn href={WA_RETIRO} tone="navy">
                Coordinar el retiro
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-[320px]">
              <div
                className="relative overflow-hidden rounded-[26px] border-4 border-white aspect-[3/4]"
                style={{ boxShadow: '0 18px 44px rgba(37,48,78,0.2)', transform: 'rotate(-1.4deg)' }}
              >
                <Image
                  src={`${IMG}/duena-delantal.webp`}
                  alt="Quien atiende Fresh and go, con el delantal de la lavandería y ropa recién doblada"
                  fill
                  sizes="(min-width: 768px) 340px, 80vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} absolute -bottom-3 left-4 rounded-full px-3.5 py-1.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.14em]`}
                style={{ backgroundColor: C.navy, color: C.celeste, transform: 'rotate(1.5deg)' }}
              >
                El delantal lo dice: est. 2020
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ═══ 4 · POR DENTRO: el ojo de la lavadora ═══ */}
      <section className="overflow-hidden" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <figure className="relative mx-auto w-fit">
              <div
                className="relative h-[248px] w-[248px] md:h-[330px] md:w-[330px] rounded-full p-[13px]"
                style={{ backgroundColor: '#EDF1F5', border: `3px solid ${C.navy}`, boxShadow: '0 16px 40px rgba(37,48,78,0.16)' }}
              >
                {/* la manilla del ojo */}
                <span
                  className="absolute top-1/2 -right-[13px] h-9 w-[13px] -translate-y-1/2 rounded-r-full"
                  style={{ backgroundColor: C.navy }}
                  aria-hidden="true"
                />
                <span className="relative block h-full w-full overflow-hidden rounded-full" style={{ border: `2px solid rgba(37,48,78,0.35)` }}>
                  <Image
                    src={`${IMG}/sala-lavado.webp`}
                    alt="La sala de lavado de Fresh and go: lavadora, secadora, balanza y la pizarra"
                    fill
                    sizes="(min-width: 768px) 330px, 248px"
                    className="fg-tambor object-cover"
                    style={{ transformOrigin: '50% 50%' }}
                  />
                </span>
                {/* tornillos del aro */}
                <span className="absolute left-4 top-4 h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(37,48,78,0.4)' }} aria-hidden="true" />
                <span className="absolute right-4 top-4 h-2 w-2 rounded-full" style={{ backgroundColor: 'rgba(37,48,78,0.4)' }} aria-hidden="true" />
              </div>
              <figcaption className={`${mono.className} mt-5 text-center text-[11px] font-semibold uppercase tracking-[0.22em]`} style={{ color: C.denim }}>
                Su sala de lavado
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={110}>
            <Rotulo n="03" t="Por dentro" />
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,7vw,3.7rem)]`}>
              Aquí tu ropa la cuida una persona.
            </h2>
            <p className="mt-4 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Madera azul por fuera, blanco por dentro: lavadora, secadora,
              balanza y la pizarra. Una lavandería chica, cuidada y cerca de
              la ruta.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {['Lavadora y secadora', 'Balanza de recepción', 'La pizarra del local'].map((t) => (
                <span
                  key={t}
                  className={`${mono.className} rounded-full border px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em]`}
                  style={{ borderColor: C.linea, color: C.denim }}
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 5 · OPINIONES: notas prendidas ═══ */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.cielo2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Rotulo n="04" t="Opiniones" />
            <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-3">
              <p className={`${display.className} text-[4.4rem] md:text-[6.5rem] font-extrabold leading-none tracking-[-0.03em]`} style={{ color: C.denim }}>
                25
              </p>
              <div className="pb-2 md:pb-3">
                <p className={`${display.className} text-xl md:text-2xl font-bold leading-tight`}>opiniones en Google</p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} mt-1 inline-block text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.lila }}
                >
                  Verlas en Google
                </a>
              </div>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-6 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 110}>
                <figure
                  className="relative h-full rounded-xl bg-white px-5 pb-5 pt-7"
                  style={{ boxShadow: '0 12px 28px rgba(37,48,78,0.1)', transform: `rotate(${i === 1 ? 1.2 : -1.2}deg)` }}
                >
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2" aria-hidden="true">
                    <Pinza className="h-[20px] w-[9px]" />
                  </span>
                  <blockquote className="text-[0.95rem] md:text-base leading-relaxed" style={{ color: C.navy }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] font-semibold uppercase tracking-[0.18em]`} style={{ color: C.lila }}>
                    {r.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 · COMO LLEGAR ═══ */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-9 md:gap-14 items-center">
          <Reveal>
            <Rotulo n="05" t="Cómo llegar" />
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] tracking-[-0.015em] text-[clamp(2rem,7vw,3.7rem)]`}>
              En Molco, pasado La Sureña.
            </h2>
            <address className="mt-5 not-italic text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              <span className="font-bold" style={{ color: C.navy }}>
                {BIZ.address}
              </span>
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <ul className="mt-5 space-y-2.5 text-[0.95rem] md:text-base" style={{ color: C.suave }}>
              <li className="flex items-start gap-2.5">
                <Perchero color={C.lila} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                Referencia: pasado La Sureña, cerca de la ruta.
              </li>
              <li className="flex items-start gap-2.5">
                <Perchero color={C.lila} className="mt-0.5 h-[18px] w-[18px] shrink-0" />
                Horario: coordina tu visita por WhatsApp.
              </li>
            </ul>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={MAPS_URL} tone="navy">
                Abrir en Google Maps
              </Btn>
              <Btn href={WA_LINK} tone="linea">
                {BIZ.phoneDisplay}
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="relative w-full overflow-hidden rounded-[24px] aspect-[4/3] min-h-[280px]"
              style={{ border: `4px solid ${C.celeste}`, boxShadow: '0 16px 40px rgba(37,48,78,0.14)' }}
            >
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

      {/* ═══ 7 · CIERRE: espuma sobre navy ═══ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
        {[
          { l: '10%', b: '18%', s: 14, d: '0s' },
          { l: '20%', b: '52%', s: 8, d: '1.8s' },
          { l: '74%', b: '24%', s: 11, d: '0.8s' },
          { l: '88%', b: '48%', s: 16, d: '2.7s' },
          { l: '55%', b: '12%', s: 7, d: '3.6s' },
        ].map((b, i) => (
          <span
            key={i}
            className="fg-burbuja absolute rounded-full"
            style={
              {
                left: b.l,
                bottom: b.b,
                width: `${b.s}px`,
                height: `${b.s}px`,
                border: '1.5px solid rgba(156,195,226,0.5)',
                backgroundColor: 'rgba(156,195,226,0.12)',
                '--bd': b.d,
              } as CSSProperties
            }
            aria-hidden="true"
          />
        ))}
        <div className="relative max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Rotulo n="06" t="El siguiente ciclo" light />
            </div>
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1] tracking-[-0.015em] text-[clamp(2.3rem,8vw,4.4rem)] text-white`}>
              La próxima carga es la tuya.
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(226,238,248,0.88)' }}>
              Escríbenos por WhatsApp y coordinamos tu lavado, o el retiro a
              domicilio si prefieres no salir de casa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
              <Btn href={WA_LINK} tone="celeste">
                Coordinar un lavado
              </Btn>
              <Btn href={WA_RETIRO} tone="lineaBlanca">
                Retiro a domicilio
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══ 8 · FOOTER ═══ */}
      <footer style={{ backgroundColor: C.navyBajo, color: '#E9F2F9' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl font-extrabold leading-none tracking-[-0.02em]`}>
                fresh and go
              </p>
              <p className="text-sm mt-1.5" style={{ color: 'rgba(233,242,249,0.72)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(233,242,249,0.85)' }}>
                  {l.label}
                </a>
              ))}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 inline-flex items-center font-semibold" style={{ color: C.celeste }}>
                WhatsApp
              </a>
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(233,242,249,0.16)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(233,242,249,0.62)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E9F2F9' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.celeste }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
