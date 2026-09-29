import type { Metadata } from 'next'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CALEFONT, MAPS_EMBED, IMG, OFICIOS, TRABAJOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Paleta desde su logo real: negro del sello TECNIFEM, el teal de las dos
// mujeres con herramientas, y el amarillo de alta visibilidad de obra.
const C = {
  papel: '#F4F1EA',
  crema: '#FBF9F4',
  tinta: '#16181B',
  grafito: '#22262B',
  teal: '#0E7C86',
  tealOscuro: '#095C64',
  amarillo: '#F2C314',
  muda: 'rgba(22,24,27,0.68)',
  mudaOsc: 'rgba(244,241,234,0.72)',
  linea: 'rgba(22,24,27,0.14)',
  lineaOsc: 'rgba(244,241,234,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'gasfiter-tecnifem',
  title: 'Gasfitería Tecnifem — Mujeres que resuelven en Talca | Sitiazo.cl',
  description:
    'Gasfitería general y mantención de calefont en Talca, por mujeres que resuelven. Atención a domicilio, agenda por WhatsApp.',
  image: `${IMG}/calefont-maps.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Contacto', href: '#contacto' },
]

// Franja de peligro de obra: la línea que separa "problema" de "resuelto".
function CintaObra({ invertida = false }: { invertida?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[8px] w-full"
      style={{
        backgroundColor: invertida ? C.tinta : C.amarillo,
        backgroundImage: `repeating-linear-gradient(-45deg, ${invertida ? C.amarillo : C.tinta} 0 14px, transparent 14px 28px)`,
        backgroundSize: '40px 8px',
        opacity: 0.9,
      }}
    />
  )
}

function Tag({ children, oscuro = false }: { children: ReactNode; oscuro?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center text-[11px] uppercase tracking-[0.16em] px-3 py-1.5`}
      style={{
        backgroundColor: oscuro ? C.amarillo : 'transparent',
        color: oscuro ? C.tinta : C.tealOscuro,
        border: oscuro ? 'none' : `1.5px solid ${C.teal}`,
        borderRadius: 3,
        fontWeight: 700,
      }}
    >
      {children}
    </span>
  )
}

function CtaWa({ texto = 'Pedir visita por WhatsApp', link = WA_LINK, oscuro = false }: { texto?: string; link?: string; oscuro?: boolean }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-wide transition-transform active:scale-95`}
      style={{
        backgroundColor: oscuro ? C.amarillo : C.teal,
        color: oscuro ? C.tinta : '#fff',
        borderRadius: 4,
        boxShadow: `4px 4px 0 ${oscuro ? 'rgba(0,0,0,0.4)' : C.tinta}`,
      }}
    >
      {texto}
    </a>
  )
}

export default function Tecnifem() {
  return (
    <main
      className={`${body.className} min-h-screen overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={display.className}>
            TECNI<span style={{ color: C.tealOscuro }}>FEM</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir visita"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: C.papel, ink: C.tinta, line: C.linea, btnBg: C.teal, btnInk: '#fff' }}
        fontClass={display.className}
      />

      {/* ── HERO: el sello que resuelve ──────────────────────── */}
      <section id="inicio" className="relative">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
            <div>
              <Reveal>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <Tag>Talca y alrededores</Tag>
                  <Tag oscuro>A domicilio</Tag>
                </div>
                <h1 className={`${display.className} uppercase leading-[0.92] text-[12vw] md:text-7xl font-extrabold`}>
                  Mujeres
                  <br />
                  que{' '}
                  <span
                    style={{
                      color: C.teal,
                      textDecoration: 'underline',
                      textDecorationColor: C.amarillo,
                      textDecorationThickness: '0.12em',
                      textUnderlineOffset: '0.18em',
                    }}
                  >
                    resuelven
                  </span>
                </h1>
                <p className="mt-6 max-w-md text-base md:text-lg" style={{ color: C.muda }}>
                  Así se define Tecnifem en su propia bio: gasfitería general y
                  mantención de calefont en Talca, hecha por un equipo de mujeres
                  con herramienta en mano. El problema de agua o gas de tu casa
                  queda en su orden de trabajo.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <CtaWa />
                  <a
                    href="#trabajos"
                    className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                    style={{ color: C.tinta, border: `1.5px solid ${C.tinta}`, borderRadius: 4 }}
                  >
                    Ver trabajos
                  </a>
                </div>
                <p className={`${mono.className} mt-5 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muda }}>
                  ★ {BIZ.rating} en Google · {BIZ.seguidoresIg} seguidores en @{BIZ.instagram}
                </p>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <figure className="relative">
                {/* Orden de trabajo: foto real enmarcada como planilla */}
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 ${C.teal}` }}
                >
                  <div
                    className={`${mono.className} flex items-center justify-between px-4 py-2 text-[11px] uppercase tracking-[0.14em]`}
                    style={{ backgroundColor: C.tinta, color: C.crema }}
                  >
                    <span>Orden de trabajo</span>
                    <span>Nº calefont</span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/calefont-maps.webp`}
                    alt="Calefont Splendid Master instalado en muro por el equipo Tecnifem"
                    className="w-full aspect-[4/5] md:aspect-[5/6] object-cover object-top"
                  />
                </div>
                <figcaption
                  className={`${mono.className} absolute -bottom-4 left-4 text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 whitespace-nowrap`}
                  style={{ backgroundColor: C.amarillo, color: C.tinta, borderRadius: 3, transform: 'rotate(-2deg)' }}
                >
                  Instalación real — su ficha de Google
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <CintaObra />
      </section>

      {/* ── ORDEN DE TRABAJO: los oficios ────────────────────── */}
      <section id="servicios" className="py-14 md:py-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.tealOscuro }}>
              Lo que entra en la orden
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl uppercase font-extrabold`}>
              Gasfitería con firma de mujer
            </h2>
          </Reveal>
          <div className="mt-9" style={{ border: `2px solid ${C.tinta}`, borderRadius: 8, overflow: 'hidden' }}>
            {OFICIOS.map((o, i) => (
              <Reveal key={o.n} delay={i * 60}>
                <div
                  className="flex gap-5 p-5 md:p-7 items-start"
                  style={{
                    backgroundColor: i % 2 ? C.papel : C.crema,
                    borderTop: i ? `1.5px solid ${C.linea}` : 'none',
                  }}
                >
                  <span className={`${display.className} text-3xl md:text-4xl font-extrabold shrink-0`} style={{ color: C.amarillo, WebkitTextStroke: `1.5px ${C.tinta}` }}>
                    {o.n}
                  </span>
                  <div>
                    <h3 className={`${display.className} text-lg md:text-2xl uppercase font-bold`}>{o.t}</h3>
                    <p className="mt-1.5 text-sm md:text-base leading-relaxed" style={{ color: C.muda }}>
                      {o.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <CtaWa texto="Agendar mantención de calefont" link={WA_LINK_CALEFONT} />
              <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
                Cuentan el problema por WhatsApp y ellas coordinan la visita.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <CintaObra invertida />

      {/* ── TRABAJOS REALES: fotos con su sello ──────────────── */}
      <section id="trabajos" className="py-14 md:py-20" style={{ backgroundColor: C.grafito, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.amarillo }}>
                  Fotos de terreno
                </p>
                <h2 className={`${display.className} text-3xl md:text-5xl uppercase font-extrabold`}>
                  Trabajos con sello Tecnifem
                </h2>
              </div>
              <p className="max-w-xs text-sm" style={{ color: C.mudaOsc }}>
                Publicadas por ellas mismas en Instagram y Google Maps —
                varias llevan su logo estampado sobre la obra.
              </p>
            </div>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 lg:grid-cols-5 gap-4">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.img} delay={i * 60} className={i === 0 ? 'col-span-2 lg:col-span-2' : ''}>
                <figure
                  className="rounded-lg overflow-hidden h-full flex flex-col"
                  style={{ backgroundColor: C.tinta, border: `1px solid ${C.lineaOsc}` }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/${t.img}.webp`}
                    alt={t.alt}
                    loading="lazy"
                    className={`w-full object-cover ${i === 0 ? 'aspect-[4/5] lg:aspect-[16/10]' : 'aspect-[4/5]'}`}
                  />
                  <figcaption className={`${mono.className} p-3 text-[11px] uppercase tracking-[0.1em] leading-snug`} style={{ color: C.mudaOsc }}>
                    {t.pie}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <figure className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.lineaOsc}` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/flyer-mantencion.webp`}
                  alt="Afiche de Tecnifem: se te puede olvidar la canción, pero no hacer la mantención a tu calefont"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </figure>
              <figure className="rounded-lg overflow-hidden" style={{ border: `1px solid ${C.lineaOsc}` }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/flyer-precio.webp`}
                  alt="Afiche de humor de Tecnifem sobre elegir gasfiter solo por precio"
                  loading="lazy"
                  className="w-full aspect-square object-cover"
                />
              </figure>
            </div>
            <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.14em]`} style={{ color: C.mudaOsc }}>
              Su humor también es parte de la marca — afiches reales de @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO: la ficha ───────────────────────────────── */}
      <section id="contacto" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
            <Reveal>
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em] mb-3`} style={{ color: C.tealOscuro }}>
                Cómo las encuentras
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl uppercase font-extrabold`}>
                {BIZ.address}, {BIZ.city}
              </h2>
              <ul className="mt-6 space-y-3 text-sm" style={{ color: C.muda }}>
                <li>Base en {BIZ.address}, {BIZ.city} — atienden Talca y alrededores.</li>
                <li>Pedidos y consultas: {BIZ.phoneDisplay} (WhatsApp).</li>
                <li className="flex items-center gap-2">
                  <Stars value={5} color={C.teal} />
                  <span>{BIZ.rating} en su ficha de Google</span>
                </li>
                <li>
                  Instagram:{' '}
                  <a
                    href={BIZ.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 font-semibold"
                    style={{ color: C.tealOscuro }}
                  >
                    @{BIZ.instagram}
                  </a>{' '}
                  — ahí muestran cada trabajo.
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaWa />
                <a
                  href={BIZ.mapsPlaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center px-5 py-3 text-sm uppercase tracking-wide`}
                  style={{ color: C.tinta, border: `1.5px solid ${C.tinta}`, borderRadius: 4 }}
                >
                  Cómo llegar ↗
                </a>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 ${C.amarillo}` }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}`}
                  className="w-full aspect-[4/3] border-0"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="py-8 border-t" style={{ borderColor: C.linea, backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded object-cover" aria-hidden="true" />
            <div className="min-w-0">
              <p className={`${display.className} text-sm font-bold uppercase truncate`}>{BIZ.name}</p>
              <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
                {BIZ.address} · {BIZ.city} · {BIZ.region}
              </p>
            </div>
          </div>
          <p className={`${mono.className} text-xs`} style={{ color: C.muda }}>
            Demo de catálogo — <a href="/demos/" className="underline underline-offset-2">Sitiazo.cl</a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
