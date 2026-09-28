import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  ACTOS,
  INCLUYE,
  REVIEWS,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/playfair-display/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/playfair-display/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la gran invitación» — el logo MyM es blanco y
 * negro con franjas y sombrero de copa, así que el sitio se lee como
 * la invitación al evento: franjas laterales como el sello del logo,
 * oro viejo de confeti y una «carta de programa» por actos.
 */
const C = {
  negro: '#17140F',
  profundo: '#0E0C08',
  marfil: '#F4EEE1',
  card: '#FBF7EB',
  oro: '#C89B4F',
  oroInk: '#4A320E',
  ink: '#241E13',
  muted: '#6B6152',
  line: 'rgba(23,20,15,0.18)',
  lineDark: 'rgba(255,255,255,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'centro-de-eventos-miguel-maureira',
  title: 'Centro de Eventos Miguel Maureira — El recinto de la K-675',
  description:
    'Salón de eventos, jardines, dos piscinas y banquetería en el camino K-675, Talca. Fiestas de gala, cumpleaños y jornadas familiares. Cotiza por WhatsApp.',
  image: `${IMG}/banquete.webp`,
})

const NAV_LINKS = [
  { label: 'El programa', href: '#programa' },
  { label: 'El recinto', href: '#recinto' },
  { label: 'Los que celebraron', href: '#resenas' },
  { label: 'Reservar', href: '#reservar' },
]

/** Franja del sello MyM: rayas negras y marfil en diagonal. */
function StripeBand({ height = 14 }: { height?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height,
        backgroundImage: `repeating-linear-gradient(-45deg, ${C.negro} 0 10px, ${C.marfil} 10px 20px, ${C.oro} 20px 24px, ${C.marfil} 24px 34px)`,
      }}
    />
  )
}

/** Marco de invitación: doble filete fino. */
function InviteFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-1.5 border" style={{ borderColor: C.oro }}>
      <div className="border" style={{ borderColor: C.oro }}>
        {children}
      </div>
    </div>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.oro : C.oroInk }}
    >
      <span className="inline-block w-8 border-t" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
      <span className="inline-block w-8 border-t" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
    </p>
  )
}

export default function MiguelMaureiraPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.marfil, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .mm a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <div className="mm">
        <BlitzNav
          name={
            <span className={display.className}>
              Miguel <span style={{ color: C.oro }}>Maureira</span>
            </span>
          }
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(244,238,225,0.96)',
            ink: C.negro,
            line: C.line,
            btnBg: C.negro,
            btnInk: C.marfil,
          }}
        />

        {/* ── Hero: la entrada de gala ── */}
        <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden" style={{ backgroundColor: C.profundo }}>
          <Image
            src={`${IMG}/banquete.webp`}
            alt="Salón del Centro de Eventos Miguel Maureira montado para una recepción"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(14,12,8,0.6) 0%, rgba(14,12,8,0.25) 45%, rgba(14,12,8,0.92) 100%)' }}
          />
          <div className="relative w-full max-w-5xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pb-16 text-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.34em] font-bold mb-5`} style={{ color: C.oro }}>
                Recinto para eventos · camino K-675 · Talca
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} text-[clamp(2.8rem,10vw,6rem)] leading-[1.04] mb-6`} style={{ color: C.marfil }}>
                El recinto de la{' '}
                <em className="whitespace-nowrap" style={{ color: C.oro }}>K-675</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-9" style={{ color: 'rgba(244,238,225,0.85)' }}>
                Salón para fiestas de gala, jardines con sombra, dos
                piscinas y banquetería — todo en un solo recinto camino
                a San Clemente.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-sm md:text-base px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.oro, color: C.oroInk }}
                >
                  Cotizar la fecha
                </a>
                <a
                  href="#programa"
                  className={`${display.className} text-sm md:text-base px-8 py-3 border transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(244,238,225,0.55)', color: C.marfil }}
                >
                  Ver el programa
                </a>
              </div>
            </Reveal>
          </div>
          <div className="relative w-full">
            <StripeBand />
          </div>
        </section>

        {/* ── El programa: actos del recinto ── */}
        <section id="programa" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>El programa</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-4`} style={{ color: C.negro }}>
              Cuatro actos en{' '}
              <em style={{ color: C.oroInk }}>un solo recinto</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12 md:mb-16" style={{ color: C.muted }}>
              Las fotos son del recinto real — el programa se lee de
              principio a fin como la tarde de un evento.
            </p>
          </Reveal>

          <div className="flex flex-col gap-12 md:gap-16">
            {ACTOS.map((a, i) => (
              <Reveal key={a.acto} delay={60}>
                <div className={`grid md:grid-cols-[1.25fr_1fr] gap-6 md:gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  <InviteFrame>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={`${IMG}/${a.foto}.webp`}
                        alt={a.alt}
                        fill
                        sizes="(min-width: 768px) 55vw, calc(100vw - 2.5rem)"
                        className="object-cover"
                      />
                    </div>
                  </InviteFrame>
                  <div>
                    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-2`} style={{ color: C.oroInk }}>
                      {a.acto}
                    </p>
                    <h3 className={`${display.className} text-2xl md:text-[28px] leading-snug mb-3`} style={{ color: C.negro }}>
                      {a.nombre}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                      {a.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── El recinto: carta de invitación con lo incluido ── */}
        <section id="recinto" className="scroll-mt-20" style={{ backgroundColor: C.negro }}>
          <StripeBand height={10} />
          <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
              <Reveal>
                <Eyebrow light>La invitación incluye</Eyebrow>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-5`} style={{ color: C.marfil }}>
                  Lo que viene con{' '}
                  <em style={{ color: C.oro }}>la fecha</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: 'rgba(244,238,225,0.72)' }}>
                  Todo lo que confirman las reseñas y la propia página del
                  recinto — Carpas y Eventos Miguel Maureira en Facebook.
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold`} style={{ color: C.oro }}>
                  Grupos grandes · previa reserva
                </p>
              </Reveal>
              <Reveal delay={140}>
                <InviteFrame>
                  <div className="p-6 md:p-8" style={{ backgroundColor: C.card }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] font-bold text-center mb-5`} style={{ color: C.oroInk }}>
                      {BIZ.name}
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {INCLUYE.map((s) => (
                        <li key={s} className="flex items-start gap-2.5 text-sm leading-snug" style={{ color: C.ink }}>
                          <span className="mt-1.5 w-2 h-2 rotate-45 shrink-0" style={{ backgroundColor: C.oro }} aria-hidden="true" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 pt-4 border-t text-center" style={{ borderColor: C.line }}>
                      <p className={`${mono.className} text-[11px] font-bold`} style={{ color: C.muted }}>
                        {BIZ.phoneDisplay} · {BIZ.facebook.replace('facebook.com/', 'fb.com/')}
                      </p>
                    </div>
                  </div>
                </InviteFrame>
              </Reveal>
            </div>
          </div>
          <StripeBand height={10} />
        </section>

        {/* ── Los que ya celebraron: reseñas reales ── */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Los que celebraron</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] max-w-xl`} style={{ color: C.negro }}>
                {BIZ.rating} en Google,
                <br />
                <em style={{ color: C.oroInk }}>{BIZ.reviewCount} celebraciones después</em>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.oroInk, textDecorationColor: 'rgba(74,50,14,0.4)' }}
              >
                Leerlas en Google →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 110}>
                <figure className="h-full flex flex-col" style={{ backgroundColor: 'transparent' }}>
                  <InviteFrame>
                    <div className="p-6 flex flex-col h-full" style={{ backgroundColor: C.card }}>
                      <Stars value={r.nota} color={C.oroInk} className="w-4 h-4 mb-4" />
                      <blockquote className="text-[15px] leading-relaxed flex-1 mb-5" style={{ color: C.ink }}>
                        “{r.texto}”
                      </blockquote>
                      <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.muted }}>
                        {r.nombre} · {r.fecha} · Google
                      </figcaption>
                    </div>
                  </InviteFrame>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Reservar + cómo llegar ── */}
        <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <StripeBand />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
              <Reveal>
                <Eyebrow>Reservar</Eyebrow>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.08] mb-6`} style={{ color: C.negro }}>
                  La fecha se aparta{' '}
                  <em style={{ color: C.oroInk }}>por WhatsApp</em>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
                  El recinto se arrienda completo para tu evento: escribe
                  con la fecha y el tamaño del grupo para cotizar.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.ink }}>
                  <span className={`${mono.className} block text-[11px] uppercase tracking-[0.24em] font-bold mb-1`} style={{ color: C.oroInk }}>
                    Dirección
                  </span>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm md:text-base px-8 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.negro, color: C.marfil }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm md:text-base px-8 py-3 border transition-colors hover:bg-black/5 tap-44`}
                    style={{ borderColor: C.negro, color: C.negro }}
                  >
                    Abrir en Maps →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative">
                  <div className="relative overflow-hidden aspect-[4/3] mb-4" style={{ backgroundColor: C.negro }}>
                    <Image
                      src={`${IMG}/salon.webp`}
                      alt="Interior del salón del Centro de Eventos Miguel Maureira"
                      fill
                      sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden border" style={{ borderColor: C.negro }}>
                    <LazyMap
                      title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-[280px] block"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.profundo, color: C.marfil }}>
          <StripeBand height={10} />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <p className={`${display.className} text-2xl mb-1.5`}>
                Miguel <em style={{ color: C.oro }}>Maureira</em>
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,238,225,0.65)' }}>
                Camino K-675, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,238,225,0.65)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineDark }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,238,225,0.7)' }}>
              Sitio de ejemplo de Sitiazo: nombre, comuna, teléfono,
              características del recinto, reseñas, nota de Google, fotos
              y logo son reales; textos de presentación son de muestra.
            </p>
          </div>
        </footer>

        <DemoBand name={BIZ.name} />
        <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
      </div>
    </div>
  )
}
