import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({ src: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400' })
const displayIt = localFont({ src: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' })
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' },
  ],
})

// La identidad sale de sus propios activos: el sol dorado y burdeo del
// logo (un eclipse sobre el horizonte), los pilares naranja de la fachada
// y el azul profundo del mar de Pelluhue frente a la terraza.
const C = {
  mar: '#0E3B4C',
  deep: '#082733',
  sol: '#D9A441',
  eclipse: '#6E2432',
  arena: '#F7F0E0',
  card: '#FDF9EE',
  ink: '#1B2E31',
  muted: '#51656A',
  line: 'rgba(27,46,49,0.15)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'solsticio-restaurante',
  title: 'Solsticio — sabor y sol frente al mar de Pelluhue',
  description:
    'Pastel de jaiba, paila marina y cocina de mar en Arturo Prat 571, Pelluhue. Solsticio Restaurante: 4,6 estrellas en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Carta real del PDF publicado por el restaurante (marzo 2026).
const CARTA = [
  { name: 'Paila marina', price: '$13.900', desc: 'La sopa de mariscos de la casa, en pocillo de greda.' },
  { name: 'Pastel de jaiba con macha de la zona', price: '$14.900', desc: 'El plato más nombrado en las reseñas.' },
  { name: 'Pastel de jaiba con ostión', price: '$16.900', desc: 'O con loco, $17.900. Gratinado en paila.' },
  { name: 'Mariscal caliente', price: '$11.900', desc: 'Fruto de mar salteado, para compartir la mesa.' },
  { name: 'Congrio frito con agregado', price: '$16.900', desc: 'Con papas rústicas, como lo piden los de la casa.' },
  { name: 'Plateada', price: '$11.900', desc: 'La carne del mediodía, al jugo, con agregado.' },
  { name: 'Panqueque celestino a las rosas', price: 'de la carta', desc: 'El postre con nombre propio de la casa.' },
]

const RESENAS = [
  {
    text: 'Súper recomendable, el mejor pastel de jaiba que he probado: lo pedí con machas de la zona, exquisito. El pan calentito con pebre y el pisco sour de la casa.',
    author: 'Daniela Ruiz',
    meta: 'Local Guide · Google',
  },
  {
    text: 'Pedimos pastel de jaiba ostión y pastel de jaiba macha de la zona: una delicia de plato, muy equilibrado. Atención rápida, pan calentito, amabilidad de la garzona. 10 de 10.',
    author: 'Paola Cabezas',
    meta: 'Local Guide · Google',
  },
  {
    text: 'Cocina exquisita, atención muy amable. En pleno centro de Pelluhue y te sorprende lo ricos que son sus platos. De los mejores en Pelluhue.',
    author: 'Oscar Mora',
    meta: 'Local Guide · Google',
  },
]

/** El sol del logo: semicírculo sobre el horizonte, con rayos cortos. */
function SolHorizonte({ className = '', color = C.sol }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 62" className={className} aria-hidden="true" focusable="false" fill="none">
      <path d="M22 60a38 38 0 0 1 76 0" stroke={color} strokeWidth="2.5" />
      <path d="M10 60h100" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <g stroke={color} strokeWidth="2.5" strokeLinecap="round">
        <path d="M60 10v9" />
        <path d="M35 16l5 8" />
        <path d="M85 16l-5 8" />
        <path d="M17 37l8 5" />
        <path d="M103 37l-8 5" />
      </g>
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'sol' | 'mar' | 'ghost'; external?: boolean }) {
  const st =
    tone === 'sol' ? { backgroundColor: C.sol, color: C.deep }
    : tone === 'mar' ? { backgroundColor: C.mar, color: C.arena }
    : { border: `1.5px solid ${C.arena}`, color: C.arena }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tracking-wide transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function SolsticioPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.arena, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'dark', bar: 'rgba(8,39,51,0.94)', ink: C.arena, line: 'rgba(247,240,224,0.18)', btnBg: C.sol, btnInk: C.deep }}
        ctaLabel="Reservar"
      />

      <main id="inicio">
        {/* ── HERO: la terraza frente al mar ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <Reveal>
                <SolHorizonte className="w-24 mb-5" />
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.sol }}>
                  Sabor &amp; Sol · Arturo Prat, Pelluhue
                </p>
                <h1 className={`${display.className} leading-[1.0] text-[clamp(3rem,10vw,6rem)] mb-6`} style={{ color: C.arena }}>
                  Solsticio <span className={displayIt.className} style={{ color: C.sol }}>Restaurante</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(247,240,224,0.85)' }}>
                  Cocina de mar a una cuadra de la arena: pastel de jaiba, paila marina y la terraza que mira al Pacífico, en la calle principal de Pelluhue.
                </p>
                <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.arena }}>
                  <Stars value={BIZ.rating} color={C.sol} />
                  <span className={`${mono.className} text-xs`} style={{ color: 'rgba(247,240,224,0.8)' }}>
                    {BIZ.ratingLabel} en Google · {BIZ.reviews} reseñas
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="sol">Reservar por WhatsApp</Btn>
                  <Btn href="#carta" tone="ghost" external={false}>Ver la carta</Btn>
                </div>
              </Reveal>
            </div>
            <Reveal delay={130}>
              <figure className="relative">
                <div className="overflow-hidden rounded-t-[999px] border-[3px]" style={{ borderColor: C.sol, boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/hero.webp`} alt="Terraza de Solsticio con mesas de madera y vista a la playa de Pelluhue" className="w-full aspect-[4/5] object-cover" loading="eager" />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(247,240,224,0.7)' }}>
                  La terraza frente al mar · Arturo Prat 571
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── LA CARTA: precios reales del menú PDF ── */}
        <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.eclipse }}>
                    La carta del solsticio
                  </p>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.deep }}>
                    Lo que pide la mesa <span className={displayIt.className}>de Pelluhue</span>
                  </h2>
                </div>
                <p className={`${mono.className} mt-4 md:mt-0 text-[11px] uppercase tracking-[0.16em] max-w-[16rem] leading-relaxed`} style={{ color: C.muted }}>
                  Precios de la carta publicada por el restaurante · rango en Maps $15.000–20.000
                </p>
              </div>
            </Reveal>
            <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-14 items-start">
              <ul className="divide-y" style={{ borderColor: C.line }}>
                {CARTA.map((p, i) => (
                  <Reveal key={p.name} delay={i * 50}>
                    <li className="flex items-baseline gap-3 py-4">
                      <div className="min-w-0">
                        <h3 className={`${display.className} text-xl sm:text-2xl`} style={{ color: C.deep }}>{p.name}</h3>
                        <p className="text-sm mt-1" style={{ color: C.muted }}>{p.desc}</p>
                      </div>
                      <span className="flex-1 border-b border-dotted mx-2 translate-y-[-4px]" style={{ borderColor: C.muted }} aria-hidden="true" />
                      <span className={`${mono.className} text-sm font-bold shrink-0`} style={{ color: C.eclipse }}>{p.price}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <div className="grid gap-5">
                <Reveal delay={80}>
                  <figure className="overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/paila.webp`} alt="Paila marina de Solsticio en pocillo de greda" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
                <Reveal delay={160}>
                  <figure className="overflow-hidden rounded-2xl">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/pastel.webp`} alt="Pastel de jaiba gratinado con ostiones" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── LA CASA: fachada, salón y la boleta de siempre ── */}
        <section id="casa" className="scroll-mt-20" style={{ backgroundColor: C.mar }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.sol }}>
                    La casa de los pilares naranja
                  </p>
                  <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.arena }}>
                    Donde almuerza <span className={displayIt.className}>Pelluhue</span>
                  </h2>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: 'rgba(247,240,224,0.75)' }}>
                  El letrero azul sobre Arturo Prat, la pizarra del día y un salón que llena los veranos. Fotos reales de su ficha.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                { src: `${IMG}/fachada.webp`, alt: 'Fachada de Solsticio con sus pilares naranja y pizarra del día' },
                { src: `${IMG}/salon.webp`, alt: 'Salón comedor con manteles de colores' },
                { src: `${IMG}/mesa.webp`, alt: 'Mesa servida con papas fritas y bebidas' },
                { src: `${IMG}/pobre.webp`, alt: 'Lomo a lo pobre con papas fritas y huevo' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={i * 90}>
                  <figure className={`overflow-hidden rounded-xl ${i % 2 ? 'lg:mt-8' : ''}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={f.src} alt={f.alt} className="w-full aspect-[3/4] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <figure className="mt-10 md:mt-14 grid md:grid-cols-[240px_1fr] gap-6 items-center border-t pt-8" style={{ borderColor: 'rgba(247,240,224,0.2)' }}>
                <div className="overflow-hidden rounded-lg bg-white p-2 rotate-[-1.5deg] shadow-lg w-48 md:w-full">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`${IMG}/boleta.webp`} alt="Boleta de Solsticio Restaurante con su logo manuscrito" className="w-full object-cover" loading="lazy" />
                </div>
                <figcaption className="max-w-lg text-[15px] leading-relaxed" style={{ color: 'rgba(247,240,224,0.85)' }}>
                  «La cocina no la puedes separar de la persona que la hace, ni del lugar donde la consumes» — la frase que abre su propia carta, con la boleta de la casa.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── OPINIONES ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-10">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.eclipse }}>
                    Lo que dicen en Google
                  </p>
                  <p className={`${display.className} leading-none text-[clamp(3.4rem,9vw,5rem)]`} style={{ color: C.deep }}>
                    {BIZ.ratingLabel}<span className={`${displayIt.className} text-3xl`} style={{ color: C.muted }}> / 5</span>
                  </p>
                  <Stars value={BIZ.rating} color={C.sol} className="w-5 h-5 mt-2" />
                  <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas publicadas
                  </p>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  La jaiba y la macha de la zona son las palabras que más se repiten.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.author} delay={i * 90}>
                  <blockquote className="h-full rounded-2xl border p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.arena }}>
                    <SolHorizonte className="w-12 mb-4" color={C.sol} />
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
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.eclipse }}>
                Ubicación
              </p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05] mb-6`} style={{ color: C.deep }}>
                Arturo Prat 571, <span className={displayIt.className} style={{ color: C.eclipse }}>Pelluhue</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <ul className={`${mono.className} mt-6 space-y-2.5 text-[13px] uppercase tracking-[0.1em]`} style={{ color: C.muted }}>
                <li>Todos los días 10:00–20:30 — horario publicado en su sitio</li>
                <li>{BIZ.phoneDisplay} · reservas</li>
                <li>{BIZ.phoneAlt} · teléfono en Maps</li>
              </ul>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="mar">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="sol">Reservar por WhatsApp</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-2xl h-full min-h-[320px] border-[3px]" style={{ borderColor: C.mar, boxShadow: '0 16px 40px rgba(14,59,76,0.25)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.long}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <SolHorizonte className="w-28 mx-auto mb-6" />
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.05]`} style={{ color: C.arena }}>
                Cuando el sol cae sobre <span className={displayIt.className} style={{ color: C.sol }}>Pelluhue</span>
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(247,240,224,0.85)' }}>
                La terraza, la paila caliente y el mar a una cuadra. Reserva tu mesa por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="sol">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer style={{ backgroundColor: C.deep, color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 border-t flex flex-col md:flex-row md:items-end justify-between gap-3" style={{ borderColor: 'rgba(247,240,224,0.15)' }}>
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.long}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(247,240,224,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(247,240,224,0.85)' }}>{l.label}</a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.long} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Reservar por WhatsApp en ${BIZ.name}`} />
    </div>
  )
}
