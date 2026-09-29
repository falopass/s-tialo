import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_EVAL, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS_AFICHE, SERVICIOS_AGENDA, HORARIO, REVIEWS, SLOGAN } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

// Identidad tomada del local real: el teal de la fachada y del logo (la "A"
// con la sonrisa), sobre blanco clínico y gris pizarra.
const C = {
  paper: '#F3FAF9',
  deep: '#0E2F33',
  deep2: '#0A2528',
  teal: '#12B5A5',
  tealDeep: '#0B7C71',
  tealSoft: '#B9E8E2',
  slate: '#3D5560',
  ink: '#123033',
  muted: '#48606A',
  bone: '#F7FDFC',
  mutedL: 'rgba(247,253,252,0.74)',
  line: 'rgba(14,47,51,0.14)',
  lineL: 'rgba(185,232,226,0.25)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'atlantix-clinica-odontologica-san-javier-de-lonc',
  title: 'Atlantix Clínica Odontológica — San Javier de Loncomilla',
  description: 'Clínica dental en Sgto. Aldea 2610, San Javier: limpieza, ortodoncia, implantes y más. 4,8 estrellas en 58 reseñas de Google. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Cartilla', href: '#servicios' },
  { label: 'Adentro', href: '#adentro' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Agenda', href: '#agenda' },
]

/** El arco del logo: la sonrisa bajo la A. Es el motivo del demo. */
function Smile({ className = '', color = C.teal, w = 104 }: { className?: string; color?: string; w?: number }) {
  return (
    <svg viewBox="0 0 120 26" className={className} style={{ width: w }} fill="none" aria-hidden="true">
      <path d="M8 6 Q60 40 112 6" stroke={color} strokeWidth="7" strokeLinecap="round" />
    </svg>
  )
}

/** Viñeta-sonrisa para la lista de servicios. */
function SmileBullet({ color = C.tealDeep }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 14" className="w-5 h-3 mt-[6px] shrink-0" fill="none" aria-hidden="true">
      <path d="M3 3 Q12 13 21 3" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? C.tealSoft : C.tealDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function AtlantixPage() {
  return (
    <div
      className={`${body.className} atlantix-page min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .atlantix-page a:focus-visible { outline: 2px solid #12B5A5; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,250,249,0.94)',
          ink: C.deep,
          line: C.line,
          btnBg: C.tealDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la vitrina que habla — el eslogan como letrero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        {/* el arco del logo, en formato mural */}
        <svg
          viewBox="0 0 1200 300"
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] md:w-[1200px] opacity-[0.09] pointer-events-none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M60 20 Q600 330 1140 20" stroke={C.teal} strokeWidth="26" strokeLinecap="round" />
        </svg>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28">
          <Reveal>
            <div
              className={`${mono.className} flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1.5 border-y py-2.5 mb-12 md:mb-16 text-[10px] md:text-[11px] uppercase tracking-[0.26em]`}
              style={{ borderColor: C.lineL, color: 'rgba(247,253,252,0.8)' }}
            >
              <span>{BIZ.rubro} · San Javier</span>
              <span className="hidden md:inline">Sgto. Aldea 2610</span>
              <span style={{ color: C.teal }}>Sitio de ejemplo</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-center mb-5`} style={{ color: C.tealSoft }}>
              Pintado a mano en la vitrina
            </p>
            <h1
              className={`${display.className} text-center font-bold leading-[1.08] tracking-[-0.015em] text-[clamp(2rem,7.4vw,4.6rem)] max-w-4xl mx-auto`}
              style={{ color: C.bone }}
            >
              «{SLOGAN.split('mensaje más potente')[0]}
              <span style={{ color: C.teal }}>mensaje más potente</span>
              {SLOGAN.split('mensaje más potente')[1]}»
            </h1>
            <Smile className="mx-auto mt-3" w={150} />
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-wrap justify-center gap-3 mt-9 mb-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
                style={{ backgroundColor: C.teal, color: C.deep2, boxShadow: '0 10px 30px rgba(18,181,165,0.35)' }}
              >
                Agendar hora
              </a>
              <a
                href="#servicios"
                className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 transition-colors hover:bg-white/10`}
                style={{ border: `1.5px solid ${C.lineL}`, color: C.bone }}
              >
                Ver la cartilla
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 tap-44 mx-auto w-fit"
              style={{ color: C.bone }}
            >
              <Stars value={BIZ.rating} color="#F2A93B" className="w-4 h-4" />
              <span className={`${display.className} font-bold text-sm`}>{BIZ.ratingLabel}</span>
              <span className="text-sm underline underline-offset-4 decoration-1" style={{ color: C.mutedL }}>
                {BIZ.reviews} reseñas en Google
              </span>
            </a>
          </Reveal>

          {/* Filmstrip: fotos reales del local y del box */}
          <Reveal delay={220}>
            <div className="grid grid-cols-3 gap-3 md:gap-5 mt-12 md:mt-14 pb-0">
              {[
                { src: 'fachada', alt: 'Fachada de Atlantix en Sgto. Aldea, San Javier: local de esquina pintado de turquesa', cap: 'La esquina' },
                { src: 'mural', alt: 'Mural metálico del logo de Atlantix sobre la pared turquesa de recepción', cap: 'El mural' },
                { src: 'sonrisa-ideal', alt: 'Gráfico publicado por Atlantix: "Tu sonrisa ideal, hoy" con su logo', cap: 'Su IG' },
              ].map((f, i) => (
                <figure key={f.src} className={`relative ${i === 1 ? 'md:-mt-5' : ''}`}>
                  <div className={`relative aspect-[4/3] overflow-hidden rounded-xl md:rounded-2xl ${i % 2 ? 'rotate-[1.2deg]' : '-rotate-[1.2deg]'}`} style={{ border: `4px solid ${C.bone}`, boxShadow: '0 18px 44px rgba(0,0,0,0.35)' }}>
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill priority={i === 0} sizes="(min-width:768px) 30vw, 30vw" className="object-cover object-top" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-center text-[9px] md:text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.tealSoft }}>
                    {f.cap}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
        {/* datos verificables, a ras del hero */}
        <div className="relative border-t mt-10 md:mt-12" style={{ borderColor: C.lineL, backgroundColor: C.deep2 }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap justify-center gap-x-8 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,253,252,0.72)' }}>
            <span>{BIZ.ratingLabel} · {BIZ.reviews} reseñas</span>
            <span>L–V 10:00–19:00 · Sáb 10:00–14:00</span>
            <span>{BIZ.address}</span>
            <span className="hidden md:inline" style={{ color: C.teal }}>@{BIZ.instagram}</span>
          </div>
        </div>
      </section>

      {/* ── La cartilla: el afiche real + la agenda completa ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>La cartilla</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em]`} style={{ color: C.deep }}>
              Lo que atiende
              <br />
              la esquina turquesa
            </h2>
            <Smile className="mt-2 mb-6" w={88} />
            <p className="text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              La lista que difunden en sus redes, más lo que figura en su
              agenda online. Todo se consulta y agenda por WhatsApp.
            </p>
            <figure className="relative aspect-[4/5] max-w-[300px] rounded-2xl overflow-hidden rotate-[-2deg]" style={{ border: `1px solid ${C.line}`, boxShadow: '0 16px 40px rgba(14,47,51,0.16)' }}>
              <Image
                src={`${IMG}/servicios-card.webp`}
                alt="Afiche publicado por Atlantix con su lista de servicios: limpieza, tapaduras, extracciones, ortodoncia, ortopedia maxilar y periodoncia"
                fill
                sizes="(min-width:768px) 30vw, 80vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3 max-w-[300px]`} style={{ color: C.muted }}>
              Afiche real difundido por la clínica
            </p>
          </Reveal>
          <Reveal delay={120}>
            {/* la orden: cartilla con borde perforado */}
            <div className="rounded-3xl border overflow-hidden" style={{ backgroundColor: '#fff', borderColor: C.line }}>
              <div className="px-6 md:px-8 pt-6 pb-4 flex items-baseline justify-between gap-4 border-b border-dashed" style={{ borderColor: C.line }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.tealDeep }}>
                  Orden de atención
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Atlantix · San Javier
                </p>
              </div>
              <p className={`${mono.className} px-6 md:px-8 pt-5 pb-3 text-[10px] uppercase tracking-[0.26em]`} style={{ color: C.tealDeep }}>
                Del afiche
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-6 px-6 md:px-8 pb-5">
                {SERVICIOS_AFICHE.map((s) => (
                  <li key={s} className="flex items-start gap-3 py-2.5">
                    <SmileBullet />
                    <span className="text-base md:text-lg font-semibold flex-1" style={{ color: C.deep }}>{s}</span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} px-6 md:px-8 pt-5 pb-3 text-[10px] uppercase tracking-[0.26em] border-t border-dashed`} style={{ color: C.tealDeep, borderColor: C.line }}>
                Y en su agenda online
              </p>
              <ul className="grid sm:grid-cols-3 gap-x-5 px-6 md:px-8 pb-6">
                {SERVICIOS_AGENDA.map((s) => (
                  <li key={s} className="flex items-start gap-2.5 py-2.5">
                    <SmileBullet color={C.slate} />
                    <span className="text-sm md:text-base font-medium" style={{ color: C.slate }}>{s}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4" style={{ backgroundColor: '#EAF6F4' }}>
                <p className="text-xs leading-relaxed max-w-[240px]" style={{ color: C.muted }}>
                  Cada prestación se confirma con Alejandra en recepción.
                </p>
                <a
                  href={WA_LINK_EVAL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block uppercase font-bold text-xs tracking-[0.14em] px-6 py-2.5 rounded-full tap-44 transition-all hover:brightness-110`}
                  style={{ backgroundColor: C.tealDeep, color: '#fff' }}
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Adentro: el box y los casos que publican ── */}
      <section id="adentro" className="scroll-mt-20" style={{ backgroundColor: '#EAF6F4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <div>
                <Eyebrow>Adentro</Eyebrow>
                <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.deep }}>
                  En el box
                  <br />
                  <span style={{ color: C.tealDeep }}>se nota la mano</span>
                </h2>
              </div>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Interior y casos que la propia clínica publica en su
                Instagram: ortodoncia paso a paso y restauraciones reales.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { src: 'frenillos', alt: 'Caso real de ortodoncia publicado por Atlantix: frenillos paso a paso', cap: 'Ortodoncia' },
              { src: 'carillas', alt: 'Caso real de restauraciones anteriores publicado por Atlantix antes de carillas en resina', cap: 'Carillas' },
              { src: 'restauracion', alt: 'Restauración de dientes anteriores publicada por Atlantix en su Instagram', cap: 'Restauración' },
              { src: 'ortodoncia', alt: 'Antes y después de ortodoncia publicado por Atlantix', cap: 'Antes / después' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure className="relative h-full">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}`, boxShadow: '0 12px 30px rgba(14,47,51,0.12)' }}>
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 24vw, 46vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[9px] md:text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.tealDeep }}>
                    {f.cap} · IG real
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-8 md:mt-10 rounded-3xl px-6 md:px-10 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8" style={{ backgroundColor: C.deep }}>
              <Smile color={C.teal} w={72} className="shrink-0" />
              <p className={`${display.className} text-lg md:text-2xl font-bold leading-snug`} style={{ color: C.bone }}>
                «En nuestra clínica <span style={{ color: C.teal }}>no juzgamos</span>:
                preferimos que se atrevan a venir a visitarnos.»
              </p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] shrink-0 md:ml-auto`} style={{ color: C.mutedL }}>
                @{BIZ.instagram}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El local: la esquina turquesa ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>El local</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.deep }}>
              La esquina
              <br />
              <span style={{ color: C.tealDeep }}>turquesa</span>
            </h2>
            <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Se reconoce a la cuadra: el local turquesa de Sgto. Aldea,
              con el eslogan pintado en la vitrina. Fotos de su ficha de
              Google.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-4 md:gap-5">
          <Reveal>
            <figure className="relative h-full min-h-[280px] md:min-h-[420px] overflow-hidden rounded-3xl" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/esquina.webp`}
                alt="Esquina de la clínica Atlantix pintada de turquesa en San Javier"
                fill
                sizes="(min-width:768px) 55vw, 90vw"
                className="object-cover"
              />
              <figcaption className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] uppercase tracking-[0.18em] px-4 py-3`} style={{ backgroundColor: 'rgba(10,37,40,0.85)', color: C.bone }}>
                Sgto. Aldea 2610 · San Javier
              </figcaption>
            </figure>
          </Reveal>
          <div className="grid grid-rows-2 gap-4 md:gap-5">
            {[
              { src: 'entrada', alt: 'Entrada de Atlantix con puertas de vidrio y el afiche de servicios' },
              { src: 'letrero', alt: 'Letrero Atlantix con el logo de la A y la sonrisa' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={120 + i * 80}>
                <figure className="relative h-full min-h-[160px] md:min-h-[200px] overflow-hidden rounded-3xl" style={{ border: `1px solid ${C.line}` }}>
                  <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 30vw, 90vw" className="object-cover" />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones: citas reales, con nombre ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-4`} style={{ color: C.bone }}>
                “Trabajan siempre
                <br />
                a la par”
              </h2>
              <Smile className="mb-5" w={72} />
              <p className="text-base leading-relaxed max-w-md mb-5" style={{ color: C.mutedL }}>
                Una pareja de doctores y una recepción que se aprende tu
                nombre: en las {BIZ.reviews} reseñas de Google aparecen una
                y otra vez, con nombre propio.
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 tap-44" style={{ color: C.bone }}>
                <Stars value={BIZ.rating} color="#F2A93B" className="w-4 h-4" />
                <span className={`${display.className} font-bold text-sm`}>{BIZ.ratingLabel}</span>
                <span className="text-sm underline underline-offset-4 decoration-1" style={{ color: C.mutedL }}>
                  {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 70}>
                  <figure className="rounded-2xl p-6 md:p-7 h-full" style={{ backgroundColor: 'rgba(185,232,226,0.07)', border: `1px solid ${C.lineL}` }}>
                    <Stars value={5} color="#F2A93B" className="w-3.5 h-3.5" />
                    <blockquote className="text-sm md:text-[15px] leading-relaxed mt-3 mb-4" style={{ color: C.bone }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.tealSoft }}>
                      {r.author} <span style={{ color: C.mutedL }}>· {r.when} · Google</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda y ubicación ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Agenda</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-6`} style={{ color: C.deep }}>
              Sgto. Aldea 2610,
              <br />
              <span style={{ color: C.tealDeep }}>San Javier</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              La hora se agenda por WhatsApp — Alejandra te confirma día y
              hora con antelación. Horario de su agenda publicada:
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: C.line }}>
              {HORARIO.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.tealDeep }}>{h.days}</dt>
                  <dd className="text-sm md:text-base text-right font-semibold" style={{ color: C.deep }}>{h.time}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.tealDeep }}>WhatsApp</dt>
                <dd className="text-sm md:text-base text-right font-semibold" style={{ color: C.deep }}>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44">{BIZ.phoneDisplay}</a>
                </dd>
              </div>
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.tealDeep, color: '#fff' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative min-h-[320px] rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} absolute top-3 left-3 text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-lg tap-44`}
                style={{ backgroundColor: C.bone, color: C.deep }}
              >
                Abrir en Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: 'rgba(247,253,252,0.7)' }}>
              Sitio de ejemplo · fotos, reseñas y horarios reales
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.05] max-w-2xl mx-auto`} style={{ color: C.bone }}>
              ¿La esquina turquesa con página <span style={{ color: '#F2A93B' }}>propia</span>?
            </h2>
            <a
              href={whatsappLink('demo')}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.bone, color: C.deep }}
            >
              Hablemos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep2, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.bone }}>{BIZ.name}</p>
              <p className="text-xs mt-1" style={{ color: C.mutedL }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>{BIZ.phoneDisplay}</a>
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>@{BIZ.instagram}</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.tealSoft }}>Google Maps</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(185,232,226,0.5)' }}>
            Creado por <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a> — sitio de muestra para el negocio
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
