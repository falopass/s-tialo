import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({ src: '../../fonts/gloock/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' })

// La identidad sale del letrero real de la fachada: madera oscura,
// letras doradas y el azul agua del mar que da nombre a la casa.
const C = {
  rio: '#1E6E7E',
  deep: '#0B2B31',
  madera: '#4A2E1C',
  oro: '#C8A24B',
  arena: '#F7F1E2',
  card: '#FDFAF1',
  ink: '#22302F',
  muted: '#5E6B68',
  line: 'rgba(34,48,47,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'entre-rios-la-plaza',
  title: 'Entre Ríos — marisquería frente a la plaza de San Clemente',
  description:
    'Pescados, mariscos y cocina chilena en Carlos Silva Renard 712, frente a la plaza de San Clemente. Entre Ríos La Plaza.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El portal', href: '#portal' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const COCINA = [
  {
    src: `${IMG}/salmon.webp`,
    name: 'Pescado al ajillo',
    desc: 'Salmón y reineta en mantequilla de ajo, con arroz y ensalada. Lo más nombrado en las reseñas.',
  },
  {
    src: `${IMG}/mariscos.webp`,
    name: 'Mariscos del día',
    desc: 'Tablas y mariscos del litoral, servidos en porción abundante para compartir.',
  },
  {
    src: `${IMG}/pobre.webp`,
    name: 'A lo pobre',
    desc: 'Carne o pescado con cebolla caramelizada, papas fritas y huevo: el plato grande de la casa.',
  },
  {
    src: `${IMG}/postre.webp`,
    name: 'Postres caseros',
    desc: 'Para cerrar la mesa: dulces de la carta que también aparecen en las opiniones.',
  },
]

const DESTACAN = [
  'porciones abundantes',
  'los pescados y mariscos',
  'el delivery del sector',
  'su lugar frente a la plaza',
]

/** Las olas de los ríos: faja de media onda en azul agua. */
function Olas({ flip = false }: { flip?: boolean }) {
  return (
    <svg viewBox="0 0 48 14" preserveAspectRatio="none" className={`block w-full h-[14px] ${flip ? 'rotate-180' : ''}`} aria-hidden="true" focusable="false">
      <path
        d="M0 14V7q6-6 12 0t12 0 12 0 12 0v7z"
        fill={C.rio}
      />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'oro' | 'rio' | 'ghost'; external?: boolean }) {
  const st =
    tone === 'oro' ? { backgroundColor: C.oro, color: C.madera }
    : tone === 'rio' ? { backgroundColor: C.rio, color: C.arena }
    : { border: `1.5px solid ${C.arena}`, color: C.arena }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-sm text-[15px] font-bold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function EntreRiosPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.arena, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(11,43,49,0.94)', ink: C.arena, line: 'rgba(247,241,226,0.18)', btnBg: C.oro, btnInk: C.madera }}
        ctaLabel="WhatsApp"
      />

      <main id="inicio">
        {/* ── HERO: frente a la plaza ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.oro }}>
                  Marisquería · frente a la plaza
                </p>
                <h1 className={`${display.className} leading-[1.0] text-[clamp(3rem,10vw,6rem)] mb-6`} style={{ color: C.arena }}>
                  Entre Ríos
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(247,241,226,0.85)' }}>
                  Pescados, mariscos y cocina chilena a pasos de la plaza de San Clemente — la casa de madera y letras doradas de Carlos Silva Renard.
                </p>
                <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.arena }}>
                  <Stars value={BIZ.rating} color={C.oro} />
                  <span className={`${mono.className} text-xs`} style={{ color: 'rgba(247,241,226,0.8)' }}>
                    {BIZ.ratingLabel} en Google · {BIZ.reviews} opiniones
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="oro">Escribir por WhatsApp</Btn>
                  <Btn href="#cocina" tone="ghost" external={false}>Ver la cocina</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={130}>
              <figure className="relative">
                <div className="overflow-hidden border-[3px]" style={{ borderColor: C.oro, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/fachada.webp`} alt="Fachada de madera de Entre Ríos con su letrero azul y dorado" className="w-full aspect-[4/3] object-cover" loading="eager" />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,241,226,0.7)' }}>
                  Carlos Silva Renard 712, San Clemente
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Olas flip />
        </section>

        {/* ── EL PORTAL ── */}
        <section id="portal" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal>
                <figure className="overflow-hidden border-[3px]" style={{ borderColor: C.madera }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/portal.webp`} alt="Portal techado de la galería donde está Entre Ríos" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                </figure>
              </Reveal>
              <Reveal delay={90}>
                <figure className="overflow-hidden border-[3px] sm:mt-10" style={{ borderColor: C.madera }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/esquina.webp`} alt="Esquina del restaurante en Carlos Silva Renard" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                </figure>
              </Reveal>
            </div>
            <Reveal delay={60}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.rio }}>
                El portal de la plaza
              </p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                La mesa de siempre del centro
              </h2>
              <p className="text-base leading-relaxed max-w-md mb-4" style={{ color: C.muted }}>
                En la misma cuadra de la plaza de San Clemente, el restaurante funcionó dentro de un portal techado con mesas al paso — el punto de encuentro para el almuerzo del centro.
              </p>
              <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Su cocina era de mar llegada del litoral maulino: reineta, salmón, mariscos y los platos clásicos del Chile del sur.
              </p>
              <Btn href={MAPS_URL} tone="rio">Ver en el mapa</Btn>
            </Reveal>
          </div>
        </section>

        {/* ── LA COCINA ── */}
        <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
          <Olas />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.oro }}>
                    La cocina de mar
                  </p>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.arena }}>
                    Del litoral a la mesa
                  </h2>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: 'rgba(247,241,226,0.75)' }}>
                  Los platos de su carta, en fotos reales publicadas en su propia ficha.
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {COCINA.map((p, i) => (
                <Reveal key={p.name} delay={i * 90}>
                  <article className="h-full border-t-2 pt-4" style={{ borderColor: C.oro }}>
                    <figure className="overflow-hidden mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt={p.name} className="w-full aspect-square object-cover" loading="lazy" />
                    </figure>
                    <h3 className={`${display.className} text-xl mb-1.5`} style={{ color: C.oro }}>{p.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(247,241,226,0.75)' }}>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Olas flip />
        </section>

        {/* ── OPINIONES ── */}
        <section id="opiniones" className="scroll-mt-20 border-t" style={{ backgroundColor: C.card, borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-3`} style={{ color: C.rio }}>
                Opiniones
              </p>
              <p className={`${display.className} leading-none text-[clamp(3.4rem,9vw,5rem)]`} style={{ color: C.deep }}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.rio} className="w-5 h-5" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {BIZ.reviews} opiniones en Google
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className={`${display.className} text-xl md:text-2xl leading-relaxed mb-5`} style={{ color: C.ink }}>
                Más de quinientas opiniones dejaron el sello de la casa:
              </p>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {DESTACAN.map((d) => (
                  <li key={d} className="flex items-baseline gap-3 text-[15px]" style={{ color: C.ink }}>
                    <span className="inline-block w-2.5 h-2.5 rounded-full shrink-0 translate-y-[1px]" style={{ backgroundColor: C.rio }} aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── UBICACIÓN ── */}
        <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.rio }}>
                Ubicación
              </p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                Frente a la <span style={{ color: C.rio }}>plaza</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                El mismo portal frente a la plaza de San Clemente que aparece en su registro SERNATUR. Para coordinar, escribe al número publicado por el establecimiento.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="rio">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="oro">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden border-[3px] h-full min-h-[320px]" style={{ borderColor: C.madera, boxShadow: '0 16px 40px rgba(74,46,28,0.25)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.long}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative" style={{ backgroundColor: C.rio }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.arena }}>
                La cocina de mar del centro de San Clemente
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(247,241,226,0.92)' }}>
                Consulta y coordinación por el WhatsApp del establecimiento.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="oro">Escribir por WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
          <Olas flip />
        </section>
      </main>

      <footer style={{ backgroundColor: C.deep, color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.long}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(247,241,226,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,241,226,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.long} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
