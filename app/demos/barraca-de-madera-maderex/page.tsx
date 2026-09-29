import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_LISTA, MAPS_EMBED, IMG, HORAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  papel: '#F3EFE4',
  patio: '#14130F',
  patio2: '#1D1B15',
  ink: '#1B1914',
  muted: '#6E6759',
  verde: '#3E9B4F',
  verdeOsc: '#1E5B2E',
  verdeBrillante: '#5FBF6E',
  line: 'rgba(27,25,20,0.16)',
  lineClara: 'rgba(243,239,228,0.2)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'barraca-de-madera-maderex',
  title: 'Maderex — Barraca de madera en San Clemente',
  description:
    'Madera de calidad al mejor precio. Barraca en Bajo Perquín, Ruta 115, San Clemente: polines, pino cepillado, tableros, molduras y despacho. Cotiza tu lista por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El listado', href: '#listado' },
  { label: 'El patio', href: '#patio' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const LISTADO = [
  {
    grupo: 'Madera para la obra',
    items: ['Polines', 'Pino bruto', 'Cepillado seco', 'Vigas', 'Pilares'],
  },
  {
    grupo: 'Revestimiento y terminación',
    items: ['Molduras', 'Tapacanes', 'Forro cabaña', 'Tabla cielo', 'Tinglado'],
  },
  {
    grupo: 'Tableros y revestimientos',
    items: ['OSB', 'Terciado', 'Volcanita', 'Permanit', 'Terciado ranurado'],
  },
  {
    grupo: 'Y además',
    items: ['Herramientas', 'Cemento', 'Materiales de construcción'],
  },
]

const FOTOS = [
  { src: 'entrada', alt: 'Entrada de la barraca Maderex sobre la Ruta 115: pilón verde con el logo y el teléfono, portón verde y el patio de madera con cerros al fondo', cap: 'El pilón sobre la Ruta 115' },
  { src: 'galpon', alt: 'Galpón techado de la barraca Maderex con paquetes de madera y el letrero de productos pintado en el frontis', cap: 'El galpón, con su listado pintado' },
  { src: 'tableros', alt: 'Pilas de tableros OSB y terciado bajo la cercha de madera del galpón', cap: 'Tableros OSB y terciado' },
  { src: 'paquetes', alt: 'Paquetes de madera cepillada con la marca Maderex impresa, dentro del galpón', cap: 'Paquetes con marca propia' },
  { src: 'interior', alt: 'Interior del galpón con pilas de forro y madera dimensionada ordenadas por especie', cap: 'El surtido bajo techo' },
  { src: 'postes', alt: 'Pilas de polines y postes de madera en el patio abierto de la barraca, con cerros al fondo', cap: 'Polines en el patio' },
  { src: 'porton', alt: 'Portón verde de entrada a la barraca con el letrero de tableros y revestimientos', cap: 'El portón de la Ruta 115' },
]

/** Marcas de conteo — el motivo del demo: la pizarra de la barraca. */
function Tally({ n = 5, color, className = 'w-9 h-5' }: { n?: number; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 36 20" className={className} aria-hidden="true">
      {Array.from({ length: Math.min(n, 4) }).map((_, i) => (
        <line key={i} x1={4 + i * 7} y1="2" x2={4 + i * 7} y2="18" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
      ))}
      {n >= 5 && <line x1="2" y1="16" x2="28" y2="4" stroke={color} strokeWidth="2.6" strokeLinecap="round" />}
    </svg>
  )
}

export default function MaderexPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .mx-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .mx-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .mx-btn:active { transform: translateY(0) scale(0.97); }
        .mx-btn:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px; }
        .mx-strip { scrollbar-width: none; }
        .mx-strip::-webkit-scrollbar { display: none; }
      `}</style>

      <BlitzNav
        name={
          <>
            <span className="uppercase tracking-[0.02em]">Maderex</span>
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,239,228,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero a sangre: la fachada real del galpón ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.patio }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de la barraca Maderex en Bajo Perquín: galpón de madera con el listado de productos pintado, paquetes de madera apilados y la oficina con el letrero verde"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(20,19,15,0.42) 0%, rgba(20,19,15,0.18) 42%, rgba(20,19,15,0.88) 100%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-10 md:pb-14 pt-[88px]">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.verdeBrillante }}>
              <Tally n={5} color={C.verdeBrillante} />
              Barraca de madera · Bajo Perquín, San Clemente
            </p>
            <h1 className={`${display.className} font-extrabold uppercase leading-[0.9] tracking-[0.01em] text-[clamp(3rem,11vw,7.5rem)] max-w-4xl`} style={{ color: C.papel }}>
              Madera de calidad
              <br />
              <span style={{ color: C.verdeBrillante }}>al mejor precio</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md font-medium" style={{ color: 'rgba(243,239,228,0.82)' }}>
              La barraca de la Ruta 115: polines, cepillado, tableros y
              molduras bajo techo, listos para retirar o despachar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 items-center">
              <a
                href={WA_LINK_LISTA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mx-btn uppercase tracking-[0.05em] font-bold text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.verde, color: '#fff' }}
              >
                Cotizar mi lista
              </a>
              <a
                href="#listado"
                className={`${display.className} mx-btn uppercase tracking-[0.05em] font-bold text-base px-7 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(243,239,228,0.75)', color: C.papel }}
              >
                Ver el listado
              </a>
            </div>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em] flex items-center gap-2`} style={{ color: 'rgba(243,239,228,0.78)' }}>
              <Stars value={BIZ.rating} color={C.verdeBrillante} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviewCount} reseñas
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de datos: lo esencial del mostrador ── */}
      <section style={{ backgroundColor: C.verdeOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <ul className={`${mono.className} flex flex-wrap gap-x-8 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: 'rgba(243,239,228,0.9)' }}>
            <li className="flex items-center gap-2"><Tally n={1} color="rgba(243,239,228,0.9)" className="w-5 h-4" /> Ruta 115 S/N, Bajo Perquín</li>
            <li className="flex items-center gap-2"><Tally n={2} color="rgba(243,239,228,0.9)" className="w-5 h-4" /> {BIZ.phoneDisplay}</li>
            <li className="flex items-center gap-2"><Tally n={3} color="rgba(243,239,228,0.9)" className="w-5 h-4" /> Lu–Mi 9–18 · Sá 9–16</li>
            <li className="flex items-center gap-2"><Tally n={4} color="rgba(243,239,228,0.9)" className="w-5 h-4" /> Despacho a la obra</li>
          </ul>
        </div>
      </section>

      {/* ── El listado: el letrero del galpón pasado a sección ── */}
      <section id="listado" className="scroll-mt-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.verdeOsc }}>
              <Tally n={5} color={C.verdeOsc} />
              El listado del galpón
            </p>
            <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.4rem,6.5vw,4.6rem)] mb-5`}>
              Lo que sale
              <br />
              del patio
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl font-medium mb-12" style={{ color: C.muted }}>
              Es el mismo listado que va pintado en el frontis del galpón:
              lo que hay bajo techo y en el patio, para la obra, el cerco
              y la terminación. El stock del día se confirma por WhatsApp.
            </p>
          </Reveal>
          <div className="border-t-2" style={{ borderColor: C.ink }}>
            {LISTADO.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 80}>
                <div className="grid grid-cols-12 gap-3 md:gap-6 py-6 md:py-8 border-b border-dashed" style={{ borderColor: C.line }}>
                  <div className="col-span-12 md:col-span-4">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] flex items-center gap-3`} style={{ color: C.muted }}>
                      <span style={{ color: C.verde }}>{String(gi + 1).padStart(2, '0')}</span>
                      {g.grupo}
                    </p>
                  </div>
                  <ul className="col-span-12 md:col-span-8 flex flex-wrap gap-x-5 gap-y-2 items-baseline">
                    {g.items.map((p, i) => (
                      <li key={p} className="flex items-baseline gap-5">
                        <span className={`${display.className} uppercase font-bold text-[clamp(1.5rem,3.4vw,2.6rem)] leading-none`}>
                          {p}
                        </span>
                        {i < g.items.length - 1 && <span className={`${mono.className} hidden md:inline text-sm`} style={{ color: C.verde }} aria-hidden="true">/</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              Si no está en el listado, lo traen — así dice la ficha.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El patio: recorrido en fotos reales ── */}
      <section id="patio" className="scroll-mt-16" style={{ backgroundColor: C.patio }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.verdeBrillante }}>
              <Tally n={5} color={C.verdeBrillante} />
              El patio
            </p>
            <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.4rem,6.5vw,4.6rem)]`} style={{ color: C.papel }}>
              Así se ve
              <br />
              <span style={{ color: C.verdeBrillante }}>la barraca</span>
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-2xl font-medium" style={{ color: 'rgba(243,239,228,0.72)' }}>
              Fotos reales de la ficha de Google: el galpón techado, los
              paquetes con marca propia, los polines y la entrada sobre la
              Ruta 115.
            </p>
          </Reveal>
        </div>
        <div className="mx-strip overflow-x-auto pb-10 md:pb-14" role="region" aria-label="Fotos de la barraca">
          <ol className="flex gap-4 md:gap-6 px-5 md:px-8 w-max">
            {FOTOS.map((f, i) => (
              <li key={f.src} className="w-[82vw] max-w-[520px] md:w-[460px] shrink-0">
                <Reveal delay={i * 60}>
                  <figure>
                    <div className="relative overflow-hidden aspect-[21/10] border" style={{ borderColor: C.lineClara }}>
                      <Image
                        src={`${IMG}/${f.src}.webp`}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 768px) 460px, 82vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] flex items-center gap-2`} style={{ color: 'rgba(243,239,228,0.6)' }}>
                      <span style={{ color: C.verdeBrillante }}>{String(i + 1).padStart(2, '0')}</span>
                      {f.cap}
                    </figcaption>
                  </figure>
                </Reveal>
              </li>
            ))}
            <li className="w-[60vw] max-w-[300px] shrink-0 flex items-center">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mx-btn uppercase font-bold tracking-[0.04em] text-base px-6 py-3 border-2 whitespace-nowrap tap-44`}
                style={{ borderColor: C.verdeBrillante, color: C.verdeBrillante }}
              >
                Pedir más fotos →
              </a>
            </li>
          </ol>
        </div>
      </section>

      {/* ── Reseñas: el 4,9 habla solo ── */}
      <section id="resenas" className="scroll-mt-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-14">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.verdeOsc }}>
                  <Tally n={5} color={C.verdeOsc} />
                  Lo que dice la gente
                </p>
                <p className={`${display.className} font-extrabold leading-none text-[clamp(5rem,14vw,9rem)]`}>
                  {String(BIZ.rating).replace('.', ',')}
                </p>
                <div className="mt-2 mb-3">
                  <Stars value={BIZ.rating} color={C.verde} className="w-5 h-5" />
                </div>
                <p className="text-sm md:text-base font-medium" style={{ color: C.muted }}>
                  {BIZ.reviewCount} reseñas en Google.
                  <br />
                  Los textos de al lado son literales.
                </p>
              </Reveal>
            </div>
            <ul className="col-span-12 lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.nombre} delay={i * 80} className="h-full">
                  <li className="h-full border p-5 md:p-6 flex flex-col" style={{ borderColor: C.line, backgroundColor: '#FBF8F0' }}>
                    <Stars value={5} color={C.verde} className="w-3.5 h-3.5" />
                    <blockquote className="mt-3 text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                      “{r.texto}”
                    </blockquote>
                    <footer className={`${mono.className} mt-4 pt-3 border-t text-[10px] uppercase tracking-[0.14em] flex justify-between gap-3`} style={{ borderColor: C.line, color: C.muted }}>
                      <span>{r.nombre}</span>
                      <span>{r.cuando}</span>
                    </footer>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Cómo comprar: tres pasos de mostrador ── */}
      <section style={{ backgroundColor: C.patio2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.2rem,5.5vw,4rem)] mb-10`} style={{ color: C.papel }}>
              Comprar es
              <br />
              <span style={{ color: C.verdeBrillante }}>una conversación</span>
            </h2>
          </Reveal>
          <ol className="grid md:grid-cols-3 gap-5 md:gap-7">
            {[
              { n: '01', t: 'Manda tu lista', d: 'Escríbenos por WhatsApp con las medidas o el proyecto. Si no lo tienes claro, te orientan igual — eso es lo que más agradecen las reseñas.' },
              { n: '02', t: 'Te cotizan al tiro', d: 'Precio de barraca, sin intermediario. Si algo no está en el patio, te avisan cuándo llega o lo traen.' },
              { n: '03', t: 'Retira o te lo despachan', d: 'Pasa por la barraca en la Ruta 115 o coordina el despacho a la obra: los clientes destacan que el flete es rápido y puntual.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <li className="h-full border-t-2 pt-5" style={{ borderColor: C.verde }}>
                  <p className={`${mono.className} text-xs tracking-[0.2em] mb-3`} style={{ color: C.verdeBrillante }}>{s.n}</p>
                  <h3 className={`${display.className} uppercase font-bold text-2xl mb-2`} style={{ color: C.papel }}>{s.t}</h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(243,239,228,0.72)' }}>{s.d}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Llegar: horario, dirección y mapa ── */}
      <section id="llegar" className="scroll-mt-16" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-14 items-stretch">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.verdeOsc }}>
                  <Tally n={5} color={C.verdeOsc} />
                  Cómo llegar
                </p>
                <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.4rem,6.5vw,4.6rem)] mb-8`}>
                  En la ruta
                  <br />
                  a San Clemente
                </h2>
                <address className="not-italic text-base leading-relaxed font-medium mb-6">
                  {BIZ.address}
                  <br />
                  {BIZ.sector}, {BIZ.city}, {BIZ.region}
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.verdeOsc }}>{BIZ.phoneDisplay}</a>
                </address>
                <ul className="divide-y mb-8 border-t" style={{ borderColor: C.line }}>
                  {HORAS.map((h) => (
                    <li key={h.d} className="py-2.5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1" style={{ borderColor: C.line }}>
                      <span className="text-sm font-semibold">{h.d}</span>
                      <span className={`${mono.className} text-xs`} style={{ color: h.h === 'Cerrado' ? '#B0402E' : C.muted }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} mx-btn inline-block uppercase font-bold tracking-[0.05em] text-base px-7 py-3 tap-44`}
                  style={{ backgroundColor: C.verde, color: '#fff' }}
                >
                  Cotizar por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]" style={{ borderColor: C.ink }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Entrada por el portón verde, junto al pilón Maderex
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.patio }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2">
            <p className={`${display.className} uppercase font-extrabold text-xl`} style={{ color: C.papel }}>
              Maderex <span style={{ color: C.verdeBrillante }}>·</span> {BIZ.slogan}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(243,239,228,0.55)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.short}`} />
    </div>
  )
}
