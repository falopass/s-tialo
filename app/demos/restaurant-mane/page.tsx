import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({ src: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900' })
const body = localFont({ src: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900' })
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' })

// La identidad sale del logo real (cloche terracota sobre navy) y del
// patio campestre que repiten las reseñas: papel crema de la casa,
// terracota de la fachada y el verde de los árboles del fondo.
const C = {
  papel: '#F5EDDA',
  card: '#FBF6EA',
  terra: '#B45535',
  navy: '#26395B',
  campo: '#57683F',
  ink: '#2C2620',
  muted: '#6B6155',
  line: 'rgba(44,38,32,0.15)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-mane',
  title: 'Restaurant Mane — comida tradicional en el patio de Rauco',
  description:
    'Cocina campestre en Av. Diego Portales 21, Rauco: plateada, costillar, humitas y un patio bajo los árboles. Restaurant Mane, 4,6 en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El patio', href: '#patio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Platos destacados de la ficha de Maps y los que repiten las reseñas.
const COCINA = [
  { src: `${IMG}/plateada.webp`, name: 'Plateada con puré', desc: 'La carne al jugo que más aparece en las opiniones.' },
  { src: `${IMG}/pastel.webp`, name: 'Pastel de papas', desc: 'El pastel de la casa, con carne picada y gratinado.' },
  { src: `${IMG}/costillar.webp`, name: 'Costillar', desc: 'Costillar de cerdo con su acompañamiento, bien servido.' },
  { src: `${IMG}/chorrillana.webp`, name: 'Chorrillana', desc: 'Papas con carne y pollo para compartir la mesa.' },
]

const POSTAS = [
  { n: '01', name: 'Carne al jugo con papas al gratin', desc: 'Destacado de la carta en su ficha de Google.' },
  { n: '02', name: 'Pollo al jugo con puré picante', desc: 'El otro plato que la gente recomienda por nombre.' },
  { n: '03', name: 'Humitas de la casa', desc: 'El letrero de la puerta las ofrece por temporada.' },
  { n: '04', name: 'Café de la tarde', desc: 'Coffee break para juntas y para pasar la tarde.' },
]

const RESENAS = [
  {
    text: 'Nunca imaginamos encontrar un lugar tan agradable, muy limpio, eso es más que importante para mí, y unos platos de comida grandes y de gran calidad en su preparación. Exquisitos.',
    author: 'Sol Navas de Villagrán',
    meta: 'Local Guide · Google',
  },
  {
    text: 'Excelente lugar para disfrutar comida típica, muy ameno y con buenísimos precios. Tiene un patio muy bonito donde se puede almorzar a la sombra de varios árboles.',
    author: 'José Antonio Rubilar',
    meta: 'Local Guide · Google',
  },
  {
    text: 'La comida sabe a casa, se siente el amor en las preparaciones. El espacio del restaurante lo hace muy cómodo y agradable.',
    author: 'Sergio Ardila',
    meta: 'Local Guide · Google',
  },
]

/** Línea de campo: faja de surcos (guías de cultivo) en terracota. */
function Surcos({ color = C.terra }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 16" preserveAspectRatio="none" className="block w-full h-[14px]" aria-hidden="true" focusable="false">
      {[0, 4, 8, 12].map((y) => (
        <path key={y} d={`M0 ${y + 1} q15 3 30 0 t30 0 30 0 30 0`} stroke={color} strokeWidth="1.6" fill="none" />
      ))}
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'terra' | 'navy' | 'ghost'; external?: boolean }) {
  const st =
    tone === 'terra' ? { backgroundColor: C.terra, color: C.card }
    : tone === 'navy' ? { backgroundColor: C.navy, color: C.papel }
    : { border: `1.5px solid ${C.papel}`, color: C.papel }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-[15px] font-bold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function ManePage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        theme={{ over: 'light', bar: 'rgba(245,237,218,0.96)', ink: C.navy, line: 'rgba(44,38,32,0.18)', btnBg: C.terra, btnInk: C.card }}
        ctaLabel="Pedir"
      />

      <main id="inicio">
        {/* ── HERO: el patio campestre ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1fr_1.05fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: '#E9C08D' }}>
                  Comida tradicional · Rauco
                </p>
                <h1 className={`${display.className} leading-[1.02] text-[clamp(2.8rem,9vw,5.4rem)] mb-6`} style={{ color: C.papel }}>
                  Restaurant<br />Mane
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(245,237,218,0.85)' }}>
                  «Disfruta el verdadero sabor tradicional»: comida de casa en platos contundentes y un patio para almorzar bajo los árboles de Diego Portales.
                </p>
                <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.papel }}>
                  <Stars value={BIZ.rating} color="#E9C08D" />
                  <span className={`${mono.className} text-xs`} style={{ color: 'rgba(245,237,218,0.8)' }}>
                    {BIZ.ratingLabel} en Google · {BIZ.reviews} reseñas
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="terra">Escribir por WhatsApp</Btn>
                  <Btn href="#patio" tone="ghost" external={false}>Conocer el patio</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={130}>
              <figure className="relative">
                <div className="overflow-hidden rounded-lg border-[3px]" style={{ borderColor: C.terra, boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/hero.webp`} alt="Patio campestre de Restaurant Mane con mesas a la sombra de los árboles" className="w-full aspect-[4/3] object-cover" loading="eager" />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(245,237,218,0.7)' }}>
                  El patio de atrás · Av. Diego Portales 21
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Surcos />
        </section>

        {/* ── LAS POSTAS DEL MEDIODÍA ── */}
        <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.terra }}>
                    La cocina de la casa
                  </p>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.navy }}>
                    Platos que llenan la mesa
                  </h2>
                </div>
                <p className={`${mono.className} mt-4 md:mt-0 text-[11px] uppercase tracking-[0.16em] max-w-[16rem] leading-relaxed`} style={{ color: C.muted }}>
                  Rango en Maps · $10.000–15.000 por persona
                </p>
              </div>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
              <ol className="divide-y" style={{ borderColor: C.line }}>
                {POSTAS.map((p, i) => (
                  <Reveal key={p.n} delay={i * 60}>
                    <li className="flex gap-5 py-5 items-baseline">
                      <span className={`${mono.className} text-sm font-bold shrink-0`} style={{ color: C.terra }}>{p.n}</span>
                      <div className="min-w-0">
                        <h3 className={`${display.className} text-xl sm:text-2xl`} style={{ color: C.navy }}>{p.name}</h3>
                        <p className="text-sm mt-1" style={{ color: C.muted }}>{p.desc}</p>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ol>
              <div className="grid grid-cols-2 gap-4">
                {COCINA.map((p, i) => (
                  <Reveal key={p.src} delay={i * 80}>
                    <figure className={`overflow-hidden rounded-lg ${i % 2 ? 'mt-6' : ''}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt={p.name} className="w-full aspect-square object-cover" loading="lazy" />
                      <figcaption className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>{p.name}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EL PATIO ── */}
        <section id="patio" className="scroll-mt-20" style={{ backgroundColor: C.campo }}>
          <Surcos color="rgba(245,237,218,0.35)" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: '#E9C08D' }}>
                  El patio de atrás
                </p>
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.papel }}>
                  A la sombra de los árboles
                </h2>
                <p className="text-base leading-relaxed max-w-md mb-4" style={{ color: 'rgba(245,237,218,0.85)' }}>
                  Los que lo conocen lo dicen igual: el patio trasero es el lugar para almorzar tranquilo en verano, con los platos llegando desde la cocina de la casa.
                </p>
                <p className="text-base leading-relaxed max-w-md mb-8" style={{ color: 'rgba(245,237,218,0.85)' }}>
                  Y cuando el antojo es de temporada, el letrero de la puerta anuncia las humitas de la casa.
                </p>
                <Btn href={WA_LINK} tone="terra">Consultar por WhatsApp</Btn>
              </Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                <Reveal delay={80}>
                  <figure className="overflow-hidden rounded-lg border-2" style={{ borderColor: 'rgba(245,237,218,0.3)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/mesa-patio.webp`} alt="Mesa de madera en el patio de Mane bajo los árboles" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
                <Reveal delay={160}>
                  <figure className="overflow-hidden rounded-lg border-2 sm:mt-8" style={{ borderColor: 'rgba(245,237,218,0.3)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/comensales.webp`} alt="Comensales almorzando en el patio del restaurante" className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
          <Surcos color="rgba(245,237,218,0.35)" />
        </section>

        {/* ── TAMBIÉN EN MANE ── */}
        <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-center">
            <Reveal>
              <figure className="overflow-hidden rounded-lg border-[3px]" style={{ borderColor: C.terra }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/letrero.webp`} alt="Letrero de la puerta de Donde Mane anunciando humitas" className="w-full aspect-[3/4] object-cover" loading="lazy" />
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.terra }}>
                Donde Mane
              </p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.navy }}>
                La casa también se encarga
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                {['Eventos', 'Banquetería', 'Coffee break', 'Humitas de temporada'].map((s) => (
                  <li key={s} className="flex items-baseline gap-3 text-[15px] font-semibold" style={{ color: C.ink }}>
                    <span className="inline-block w-6 border-t-2 shrink-0 translate-y-[-3px]" style={{ borderColor: C.terra }} aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="text-[15px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                Los servicios publicados en su página de Facebook ({BIZ.fb}) y el letrero de su propia puerta.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── OPINIONES ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-10">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.terra }}>
                    Lo que dicen en Google
                  </p>
                  <p className={`${display.className} leading-none text-[clamp(3.4rem,9vw,5rem)]`} style={{ color: C.navy }}>
                    {BIZ.ratingLabel}<span className="text-3xl" style={{ color: C.muted }}> / 5</span>
                  </p>
                  <Stars value={BIZ.rating} color={C.terra} className="w-5 h-5 mt-2" />
                  <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas publicadas
                  </p>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  Las palabras que se repiten: abundante, limpio y sabor a casa.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.author} delay={i * 90}>
                  <blockquote className="h-full rounded-lg border-l-4 p-6 flex flex-col" style={{ borderColor: C.terra, backgroundColor: C.papel }}>
                    <p className="text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>“{r.text}”</p>
                    <footer className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                      {r.author} · {r.meta}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── UBICACIÓN ── */}
        <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.terra }}>
                Ubicación
              </p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.navy }}>
                Diego Portales 21, <span style={{ color: C.terra }}>Rauco</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                Sobre la avenida principal de Rauco, comuna del interior de Curicó. Para reservar mesa o cotizar banquetería, escribe directo.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="navy">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="terra">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-lg h-full min-h-[320px] border-[3px]" style={{ borderColor: C.navy, boxShadow: '0 16px 40px rgba(38,57,91,0.22)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.long}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative" style={{ backgroundColor: C.terra }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.card }}>
                El almuerzo campestre de Rauco
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(251,246,234,0.92)' }}>
                Platos contundentes, patio a la sombra y atención de la casa. Coordina tu visita por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="navy">Escribir por WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
          <Surcos color="rgba(251,246,234,0.4)" />
        </section>
      </main>

      <footer style={{ backgroundColor: C.navy, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl uppercase`}>{BIZ.long}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(245,237,218,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(245,237,218,0.85)' }}>{l.label}</a>
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
