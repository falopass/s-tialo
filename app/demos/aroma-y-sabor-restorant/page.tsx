import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({ src: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' })
const displayBlack = localFont({ src: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' })
const body = localFont({ src: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

// La identidad sale del propio salón: la viga tallada "AROMA & SABOR",
// el techo de madera, la pizarra de tiza y los pocillos de greda.
// Papel crema, madera oscura, amarillo de su letrero y rojo de mantel.
const C = {
  papel: '#F5EDDC',
  card: '#FBF4E4',
  madera: '#2E2118',
  pizarra: '#1D1813',
  sol: '#E5B53E',
  greda: '#9C3B2B',
  ink: '#2A211A',
  muted: '#6A5E50',
  line: 'rgba(42,33,26,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'aroma-y-sabor-restorant',
  title: 'Aroma y Sabor — la picada de Villa Rinconada, Retiro',
  description:
    'Cazuela, salmón, ceviche y mariscal en Villa Rinconada, Retiro. Aroma y Sabor Restorant: 4,4 estrellas y 102 reseñas en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Platos reales: los nombran las reseñas y aparecen en las fotos de su ficha.
const COCINA = [
  { src: `${IMG}/cazuela.webp`, name: 'Cazuela de vacuno', desc: 'En pocillo de greda, como piden los que llegan de paso.' },
  { src: `${IMG}/pescado.webp`, name: 'Pescado frito', desc: 'Con ensalada surtida y arroz: el plato grande del mediodía.' },
  { src: `${IMG}/mariscal.webp`, name: 'Mariscal', desc: 'Frutos de mar en crema, de los que se repiten en reseñas.' },
  { src: `${IMG}/salmon.webp`, name: 'Salmón con papas doradas', desc: 'El pescado a la plancha que recomienda la gente de la zona.' },
  { src: `${IMG}/ceviche.webp`, name: 'Ceviche', desc: 'Con galletas y sus pocillos de pebre al centro.' },
  { src: `${IMG}/mechada.webp`, name: 'Carne mechada', desc: 'La carne de la casa con arroz y verduras.' },
]

const RESENAS = [
  {
    text: 'Excelente atención, comida exquisita, abundante, tragos perfectos. Recomendable, una verdadera picada.',
    author: 'Marcelo Urra',
    meta: 'Local Guide · Google',
  },
  {
    text: 'De casualidad llegamos a este lugar viajando hacia Santiago y nos encantó: platos bien contundentes y muy rico sabor, precios razonables. Pedimos ceviche, cazuela de vacuno y salmón frito, todo un 10.',
    author: 'Paulina Stuardo',
    meta: 'Google',
  },
  {
    text: 'Excelente lugar para almorzar en familia, lo recomiendo 100%: menú variado y la cocina exquisita.',
    author: 'José Guaitiao',
    meta: 'Google',
  },
]

/** Viga de madera: la faja tallada del salón como divisor. */
function Viga({ color = C.madera }: { color?: string }) {
  return (
    <svg viewBox="0 0 120 12" preserveAspectRatio="none" className="block w-full h-[12px]" aria-hidden="true" focusable="false">
      <rect width="120" height="3" y="0" fill={color} />
      <rect width="120" height="1.6" y="6" fill={color} opacity="0.55" />
      <rect width="120" height="1" y="9.5" fill={color} opacity="0.3" />
    </svg>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'sol' | 'madera' | 'ghost'; external?: boolean }) {
  const st =
    tone === 'sol' ? { backgroundColor: C.sol, color: C.pizarra }
    : tone === 'madera' ? { backgroundColor: C.madera, color: C.papel }
    : { border: `1.5px solid ${C.papel}`, color: C.papel }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 text-[15px] font-bold uppercase tracking-wider transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function AromaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wider`}
        theme={{ over: 'dark', bar: 'rgba(29,24,19,0.95)', ink: C.papel, line: 'rgba(245,237,220,0.18)', btnBg: C.sol, btnInk: C.pizarra }}
        ctaLabel="Pedir"
      />

      <main id="inicio">
        {/* ── HERO: el salón de vigas ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.pizarra }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-12 md:pb-16">
            <Reveal>
              <div className="flex flex-col items-start gap-4 mb-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`${IMG}/marca-retiro.webp`} alt="Viga tallada con el nombre Aroma y Sabor, Retiro" className="h-10 md:h-12 w-auto rounded-sm" loading="eager" />
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em]`} style={{ color: C.sol }}>
                  Restorant · Villa Rinconada, Retiro
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <h1 className={`${displayBlack.className} uppercase leading-[0.95] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`} style={{ color: C.papel }}>
                  La picada que<br />se come en <span style={{ color: C.sol }}>Retiro</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-4" style={{ color: 'rgba(245,237,220,0.85)' }}>
                  Salón de vigas de madera, pocillos de greda y platos contundentes: cazuela, mariscal, salmón y ceviche en la calle 1 de Villa Rinconada.
                </p>
                <p className="flex items-center gap-2.5 mb-8 text-sm" style={{ color: C.papel }}>
                  <Stars value={BIZ.rating} color={C.sol} />
                  <span className={`${mono.className} text-xs`} style={{ color: 'rgba(245,237,220,0.8)' }}>
                    {BIZ.ratingLabel} en Google · {BIZ.reviews} reseñas
                  </span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Btn href={WA_LINK} tone="sol">Pedir por WhatsApp</Btn>
                  <Btn href="#pizarra" tone="ghost" external={false}>Ver la pizarra</Btn>
                </div>
              </Reveal>
              <Reveal delay={130}>
                <figure className="relative">
                  <div className="overflow-hidden rounded-md border-[3px]" style={{ borderColor: C.sol, boxShadow: '0 20px 50px rgba(0,0,0,0.45)' }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/hero.webp`} alt="Salón de Aroma y Sabor con techo de vigas de madera" className="w-full aspect-[16/11] object-cover" loading="eager" />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(245,237,220,0.7)' }}>
                    El salón comedor · consumo en el lugar y para llevar
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
          <Viga />
        </section>

        {/* ── LA COCINA: los platos de las fotos reales ── */}
        <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-12">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.greda }}>
                    Lo que sale de la cocina
                  </p>
                  <h2 className={`${displayBlack.className} uppercase text-4xl sm:text-5xl leading-[0.98]`} style={{ color: C.madera }}>
                    Platos de la casa, en foto real
                  </h2>
                </div>
                <p className={`${mono.className} mt-4 md:mt-0 text-[11px] uppercase tracking-[0.16em] max-w-[16rem] leading-relaxed`} style={{ color: C.muted }}>
                  Rango en Maps · $10.000–15.000 por persona
                </p>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COCINA.map((p, i) => (
                <Reveal key={p.src} delay={i * 70}>
                  <article className="h-full border-t-4 pt-4" style={{ borderColor: C.sol }}>
                    <figure className="overflow-hidden rounded-sm mb-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.src} alt={p.name} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                    </figure>
                    <h3 className={`${display.className} uppercase text-xl tracking-wide`} style={{ color: C.madera }}>{p.name}</h3>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: C.muted }}>{p.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── LA PIZARRA: cartel de la casa ── */}
        <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
          <Viga color="#4A3A28" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.sol }}>
                  La pizarra del fondo
                </p>
                <h2 className={`${displayBlack.className} uppercase text-4xl sm:text-5xl leading-[0.98] mb-6`} style={{ color: C.papel }}>
                  Aquí se anuncia lo del día
                </h2>
                <p className="text-base leading-relaxed max-w-md mb-4" style={{ color: 'rgba(245,237,220,0.85)' }}>
                  El local funciona como las picadas de siempre: carta del día en pizarra, mesas de la casa y porciones que alcanzan para volver con cajita.
                </p>
                <ul className={`${mono.className} mt-6 space-y-2.5 text-[13px] uppercase tracking-[0.1em]`} style={{ color: 'rgba(245,237,220,0.8)' }}>
                  <li>· Consumo en el lugar y para llevar</li>
                  <li>· Jugos naturales y tragos de la casa</li>
                  <li>· Menú del mediodía según temporada</li>
                </ul>
              </Reveal>
              <div className="grid gap-4">
                <Reveal delay={80}>
                  <figure className="overflow-hidden rounded-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`${IMG}/pizarra.webp`} alt="Pizarra de tiza de Aroma y Sabor con mensajes para los clientes" className="w-full aspect-[4/3] object-cover" loading="lazy" />
                  </figure>
                </Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <Reveal delay={160}>
                    <figure className="overflow-hidden rounded-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/patio.webp`} alt="Terraza del restorán con sombrillas y sillas verdes" className="w-full aspect-square object-cover" loading="lazy" />
                    </figure>
                  </Reveal>
                  <Reveal delay={220}>
                    <figure className="overflow-hidden rounded-md">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={`${IMG}/mesa.webp`} alt="Mesa larga dispuesta para un almuerzo en Aroma y Sabor" className="w-full aspect-square object-cover" loading="lazy" />
                    </figure>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <Viga color="#4A3A28" />
        </section>

        {/* ── OPINIONES ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="md:flex items-end justify-between gap-8 mb-10">
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.greda }}>
                    Lo que dicen en Google
                  </p>
                  <p className={`${displayBlack.className} leading-none text-[clamp(3.4rem,9vw,5rem)]`} style={{ color: C.madera }}>
                    {BIZ.ratingLabel}<span className="text-3xl" style={{ color: C.muted }}> / 5</span>
                  </p>
                  <Stars value={BIZ.rating} color={C.greda} className="w-5 h-5 mt-2" />
                  <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas publicadas
                  </p>
                </div>
                <p className="mt-4 md:mt-0 max-w-xs text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  La picada que recomienda la gente que para en Retiro.
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.author} delay={i * 90}>
                  <blockquote className="h-full rounded-md border p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: C.papel }}>
                    <p className={`${display.className} text-6xl leading-[0.6] mb-4`} style={{ color: C.sol }} aria-hidden="true">”</p>
                    <p className="text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>{r.text}</p>
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
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.greda }}>
                Ubicación
              </p>
              <h2 className={`${displayBlack.className} uppercase text-4xl sm:text-5xl leading-[0.98] mb-6`} style={{ color: C.madera }}>
                Villa Rinconada, <span style={{ color: C.greda }}>Retiro</span>
              </h2>
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                A pasos de la ruta por la comuna de Retiro: el almuerzo de la villa que recomienda la gente que cruza el Maule.
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Btn href={MAPS_URL} tone="madera">Cómo llegar</Btn>
                <Btn href={WA_LINK} tone="sol">{BIZ.phoneDisplay}</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="overflow-hidden rounded-md h-full min-h-[320px] border-[3px]" style={{ borderColor: C.madera, boxShadow: '0 16px 40px rgba(46,33,24,0.25)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.long}`} className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── CTA FINAL ── */}
        <section className="relative" style={{ backgroundColor: C.greda }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
            <Reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/marca.webp`} alt="Marca tallada Aroma y Sabor" className="h-9 mx-auto mb-6 rounded-sm" loading="lazy" />
              <h2 className={`${displayBlack.className} uppercase text-4xl sm:text-5xl leading-[0.98]`} style={{ color: C.card }}>
                El almuerzo de Villa Rinconada
              </h2>
              <p className="mt-4 text-lg" style={{ color: 'rgba(251,244,228,0.92)' }}>
                Platos de casa, pocillos de greda y la pizarra del día. Consulta y reserva por WhatsApp.
              </p>
              <div className="mt-8">
                <Btn href={WA_LINK} tone="madera">Escribir por WhatsApp</Btn>
              </div>
            </Reveal>
          </div>
          <Viga color="rgba(251,244,228,0.4)" />
        </section>
      </main>

      <footer style={{ backgroundColor: C.pizarra, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl uppercase tracking-wide`}>{BIZ.long}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(245,237,220,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(245,237,220,0.85)' }}>{l.label}</a>
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
