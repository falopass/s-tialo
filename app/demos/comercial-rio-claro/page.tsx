import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  C,
  HORARIO,
  REVIEWS,
  WA_LINK,
  waLinkLinea,
  IG_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

export const metadata: Metadata = demoMetadata({
  slug: 'comercial-rio-claro',
  title: 'Comercial Río Claro — Artículos para la higiene por mayor en Talca',
  description: 'Mayorista de artículos para la higiene en Av. Ignacio Carrera Pinto 088, Talca. Detergentes, guantes de nitrilo y papel para casas y negocios. Cotiza por WhatsApp.',
  image: '/demos/comercial-rio-claro/hero.webp',
})

const NAV_LINKS = [
  { label: 'Las líneas', href: '#lineas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Horario y local', href: '#local' },
  { label: 'Cotizar', href: '#cotizar' },
]

/** Las líneas nombran lo que se ve en las fotos reales del local —
 *  marcas y formatos confirmados en la ficha del negocio. */
const LINEAS = [
  {
    n: '01',
    name: 'Detergentes Winkler',
    tags: ['Lavaloza concentrado', 'Desengrasante alto poder', 'Desodorante ambiental'],
    detalle: 'Botellas de 1 L y bidones de 5 L, para la cocina de la casa o la cocinería del negocio.',
    shots: [
      { src: `${IMG}/bidones.webp`, alt: 'Bidones de 5 litros Winkler: lavaloza concentrado y desengrasante alto poder' },
      { src: `${IMG}/botellas.webp`, alt: 'Botellas de 1 litro Winkler: desengrasante y desodorante ambiental citrus' },
    ],
  },
  {
    n: '02',
    name: 'Guantes de nitrilo CleanCarrier',
    tags: ['Caja ×100', 'Tallas S · M · L', 'Sin polvo'],
    detalle: 'Nitrilo negro ambidiestro, desechable no estéril — los que usan peluquerías, cocinas y talleres.',
    shots: [
      { src: `${IMG}/guantes.webp`, alt: 'Cajas de guantes de nitrilo CleanCarrier en tallas S, M y L junto a bidón de desengrasante' },
    ],
  },
  {
    n: '03',
    name: 'Papel y descartables',
    tags: ['Toalla Nova Ovella', 'Papel higiénico', 'Formato industrial'],
    detalle: 'Papel para el baño y la cocina en formato mayorista, junto al resto del stock de la repisa.',
    shots: [
      { src: `${IMG}/papel.webp`, alt: 'Torres de toalla Nova Ovella y cajas ProPaper apiladas en el stock del local' },
    ],
  },
  {
    n: '04',
    name: 'Jabones Winkler',
    tags: ['Jabón líquido 1 L', 'Yoghurt berries', 'Jabón mecánico WK-116'],
    detalle: 'Del neutro perlado para el baño del negocio al mecánico que corta la grasa de las manos del taller.',
    shots: [
      { src: `${IMG}/jabon.webp`, alt: 'Botella de 1 litro de jabón líquido neutro Winkler con dosificador' },
    ],
  },
  {
    n: '05',
    name: 'Cubre calzado CleanCarrier',
    tags: ['Pack ×100', 'Antideslizante', 'Negro y celeste'],
    detalle: 'Cubre zapatos descartable para visitas, faenas y áreas limpias — entra el cliente, no el barro.',
    shots: [
      { src: `${IMG}/cubre.webp`, alt: 'Cubre calzado antideslizante CleanCarrier negro puesto sobre zapatos de trabajo' },
    ],
  },
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-3'

function MonoTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] px-2.5 py-1 border`}
      style={{
        borderColor: light ? 'rgba(246,241,231,0.4)' : C.line,
        color: light ? C.brassSoft : C.brassInk,
      }}
    >
      {children}
    </span>
  )
}

export default function ComercialRioClaroPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={<span className={`${display.className} font-bold uppercase tracking-[0.04em]`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={`${display.className} font-bold uppercase tracking-[0.04em]`}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(246,241,231,0.94)',
          ink: C.forest,
          line: C.line,
          btnBg: C.forest,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero a sangre: la góndola real ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="La repisa de Comercial Río Claro: detergentes Winkler, toallas Ovella, guantes CleanCarrier y cajas de stock"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(19,35,24,0.6) 0%, rgba(19,35,24,0.3) 38%, rgba(19,35,24,0.93) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-4 py-2 tap-44 ${FOCUS} focus-visible:outline-[#E9D9AE]`}
                style={{ backgroundColor: 'rgba(246,241,231,0.95)', color: C.forest }}
              >
                <Stars value={5} color={C.brass} className="w-3.5 h-3.5" />
                {BIZ.rating} en Google · {BIZ.reviewsCount} reseñas
              </a>
              <span
                className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] px-3 py-2`}
                style={{ color: 'rgba(246,241,231,0.85)', border: '1px dashed rgba(246,241,231,0.45)' }}
              >
                Mayor y detalle
              </span>
            </div>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(3rem,11.5vw,7.5rem)] mb-6`}
              style={{ color: C.crema }}
            >
              Insumos de aseo
              <br />
              <span style={{ color: C.brassSoft }}>por mayor en Talca</span>
            </h1>
            <div className="grid md:grid-cols-[1.2fr_1fr] gap-7 md:gap-12 items-end">
              <p className="text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(246,241,231,0.9)' }}>
                Detergentes, guantes de nitrilo y papel en Av. Ignacio Carrera
                Pinto. Mandas la lista por WhatsApp y te confirman precio y
                stock al tiro.
              </p>
              <div className="flex flex-wrap md:justify-end gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center justify-center min-h-[48px] px-7 font-bold uppercase tracking-[0.06em] text-base transition hover:brightness-110 active:scale-95 tap-44 ${FOCUS} focus-visible:outline-[#E9D9AE]`}
                  style={{ backgroundColor: C.brass, color: C.deep }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#lineas"
                  className={`${display.className} inline-flex items-center min-h-[48px] px-7 font-bold uppercase tracking-[0.06em] text-base border tap-44 ${FOCUS} focus-visible:outline-[#E9D9AE]`}
                  style={{ borderColor: 'rgba(246,241,231,0.55)', color: C.crema }}
                >
                  Ver las líneas
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        {/* rótulo de datos al pie del hero */}
        <div className="relative border-t" style={{ borderColor: 'rgba(246,241,231,0.22)', backgroundColor: 'rgba(19,35,24,0.5)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-8 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,241,231,0.8)' }}>
            <span>Carrera Pinto 088</span>
            <span>L–V 9:00–18:00 · Sáb 9:00–13:00</span>
            <span>{BIZ.phoneDisplay}</span>
            <span className="hidden md:inline" style={{ color: C.brassSoft }}>Sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <h2 className={`${display.className} font-bold uppercase leading-[0.9] tracking-[-0.01em] text-4xl md:text-6xl`} style={{ color: C.forest }}>
              Lo que dice<br />la ficha de Google
            </h2>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] max-w-xs`} style={{ color: C.muted }}>
              {BIZ.reviewsCount} reseñas publicadas · promedio {BIZ.rating}
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px border" style={{ borderColor: C.line, backgroundColor: C.line }}>
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90} className="h-full">
              <figure className="h-full p-6 flex flex-col" style={{ backgroundColor: C.card }}>
                <Stars value={r.stars} color={C.brass} className="w-4 h-4" />
                {r.text ? (
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                ) : (
                  <p className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.muted }}>
                    Cinco estrellas, sin texto.
                  </p>
                )}
                <figcaption className={`${mono.className} mt-5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {r.name}{r.when ? ` · ${r.when}` : ''}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <p className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
          Reseñas textuales de la ficha pública en Google Maps
        </p>
      </section>

      {/* ── La nota de pedido: el catálogo en el formato en que se pide ── */}
      <section id="lineas" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#EFE9DA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase leading-[0.9] tracking-[-0.01em] text-4xl md:text-6xl`} style={{ color: C.forest }}>
                Mandas la lista,<br />vuelve la cotización
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                El catálogo se pide como una nota de pedido: marca la línea,
                la mandas por WhatsApp y te confirman precio y stock al mayor
                y al detalle.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 lg:gap-12 items-start">
            <Reveal>
              <div style={{ backgroundColor: C.card, boxShadow: `0 0 0 1px ${C.line}, 0 28px 50px -30px rgba(19,35,24,0.4)` }}>
                <header className="px-6 md:px-8 pt-7 pb-5" style={{ borderBottom: `2px dashed ${C.line}` }}>
                  <div className="flex items-baseline justify-between gap-3">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.brassInk }}>
                      Nota de pedido
                    </p>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      N° 088
                    </p>
                  </div>
                  <p className="mt-3 text-sm font-semibold" style={{ color: C.ink }}>{BIZ.name}</p>
                  <p className={`${mono.className} mt-1 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {BIZ.address} · {BIZ.city}
                  </p>
                </header>

                <ul>
                  {LINEAS.map((l, i) => (
                    <li key={l.n} className="px-6 md:px-8 py-6" style={{ borderTop: i === 0 ? undefined : `1px dashed ${C.line}` }}>
                      <div className="flex gap-4 md:gap-5">
                        <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                          <Image
                            src={l.shots[0].src}
                            alt={l.shots[0].alt}
                            fill
                            sizes="64px"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline justify-between gap-3">
                            <h3 className={`${display.className} font-bold uppercase leading-[0.95] text-xl md:text-2xl`} style={{ color: C.ink }}>
                              {l.name}
                            </h3>
                            <span className={`${mono.className} shrink-0 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.brassInk }}>
                              {l.n}
                            </span>
                          </div>
                          <div className="mt-3 flex flex-wrap gap-2">
                            {l.tags.map((t) => (
                              <MonoTag key={t}>{t}</MonoTag>
                            ))}
                          </div>
                          <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                            {l.detalle}
                          </p>
                          <a
                            href={waLinkLinea(l.name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${display.className} inline-flex items-center gap-2 mt-2 min-h-[44px] font-bold uppercase tracking-[0.06em] text-sm underline underline-offset-4 decoration-1 tap-44 ${FOCUS} focus-visible:outline-[#1E3D2F]`}
                            style={{ color: C.forest }}
                          >
                            Cotizar esta línea →
                          </a>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4" style={{ borderTop: `2px dashed ${C.line}` }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] max-w-[220px]`} style={{ color: C.muted }}>
                    Precio y stock se confirman por WhatsApp
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center justify-center min-h-[48px] px-6 font-bold uppercase tracking-[0.06em] text-sm transition hover:brightness-110 active:scale-95 tap-44 ${FOCUS} focus-visible:outline-[#1E3D2F]`}
                    style={{ backgroundColor: C.forest, color: C.crema }}
                  >
                    Mandar la lista
                  </a>
                </footer>
                <div
                  aria-hidden="true"
                  className="h-8 opacity-70"
                  style={{
                    backgroundImage: `repeating-linear-gradient(90deg, ${C.ink} 0 2px, transparent 2px 5px, ${C.ink} 5px 6px, transparent 6px 10px, ${C.ink} 10px 13px, transparent 13px 15px)`,
                  }}
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <figure>
                  <div className="relative aspect-[3/4] overflow-hidden" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                    <Image
                      src={`${IMG}/botellas.webp`}
                      alt="Botellas de 1 litro Winkler: desengrasante y desodorante ambiental citrus"
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    Foto publicada por el negocio en su ficha de Google
                  </figcaption>
                </figure>
                <figure>
                  <div className="relative aspect-square overflow-hidden" style={{ boxShadow: `0 0 0 1px ${C.line}` }}>
                    <Image
                      src={`${IMG}/mantenedor.webp`}
                      alt="Bidón de 5 litros de mantenedor de pisos Winkler aroma floral"
                      fill
                      sizes="(min-width: 1024px) 340px, (min-width: 640px) 45vw, 90vw"
                      className="object-cover"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    Producto publicado en Instagram @{BIZ.instagram}
                  </figcaption>
                </figure>
                <ol className="border-t sm:col-span-2 lg:col-span-1" style={{ borderColor: C.line }}>
                  {[
                    'Marcas la línea en la nota',
                    'La mandas por WhatsApp',
                    'Confirman precio, stock y retiro en el local',
                  ].map((paso, i) => (
                    <li key={paso} className="flex gap-4 items-baseline py-3.5 border-b" style={{ borderColor: C.line }}>
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.brassInk }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-sm" style={{ color: C.ink }}>{paso}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El local: fachada, horario, mapa ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase leading-[0.9] tracking-[-0.01em] text-4xl md:text-6xl`} style={{ color: C.crema }}>
                El local en<br /><span style={{ color: C.brassSoft }}>Carrera Pinto</span>
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.75)' }}>
                Una casa comercial de barrio en el sur de Talca: atiende la
                misma gente que arma tu pedido.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <Reveal>
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden" style={{ boxShadow: `0 0 0 1px rgba(246,241,231,0.25)` }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="La casa de Av. Ignacio Carrera Pinto 088 donde atiende Comercial Río Claro: puerta de madera y letrero del negocio"
                    fill
                    sizes="(min-width: 1024px) 45vw, 90vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,241,231,0.65)' }}>
                  Av. Ignacio Carrera Pinto 088 · Talca
                </figcaption>
              </figure>

              <dl className="mt-8 border-t" style={{ borderColor: 'rgba(246,241,231,0.2)' }}>
                {HORARIO.map((h) => (
                  <div key={h.days} className="grid grid-cols-[1fr_auto] gap-4 py-3.5 border-b" style={{ borderColor: 'rgba(246,241,231,0.2)' }}>
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.18em] pt-0.5`} style={{ color: 'rgba(246,241,231,0.7)' }}>
                      {h.days}
                    </dt>
                    <dd className="text-sm font-semibold" style={{ color: h.time === 'Cerrado' ? 'rgba(246,241,231,0.55)' : C.crema }}>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className={`${mono.className} mt-5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(246,241,231,0.6)' }}>
                Horario de la ficha de Google
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden" style={{ boxShadow: `0 0 0 1px rgba(246,241,231,0.25)` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-[320px] md:h-[420px] border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.8)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mb-2`} style={{ color: C.brassSoft }}>
                    Dirección
                  </p>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.8)' }}>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mb-2`} style={{ color: C.brassSoft }}>
                    Contacto
                  </p>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 tap-44 ${FOCUS} focus-visible:outline-[#E9D9AE]`}>
                    {BIZ.phoneDisplay}
                  </a>
                  <br />
                  <a href={IG_URL} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-2 tap-44 ${FOCUS} focus-visible:outline-[#E9D9AE]`}>
                    @{BIZ.instagram}
                  </a>
                </div>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 mt-7 min-h-[44px] font-bold uppercase tracking-[0.06em] text-sm border px-5 tap-44 transition hover:bg-white/10 ${FOCUS} focus-visible:outline-[#E9D9AE]`}
                style={{ borderColor: 'rgba(246,241,231,0.45)', color: C.crema }}
              >
                Cómo llegar →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section id="cotizar" className="scroll-mt-20" style={{ backgroundColor: C.brass }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase leading-[0.9] tracking-[-0.01em] text-[clamp(2.4rem,8vw,5.5rem)]`} style={{ color: C.deep }}>
              Mandas la lista,
              <br />
              vuelve la cotización
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mt-6 mb-9 leading-relaxed" style={{ color: 'rgba(19,35,24,0.85)' }}>
              Producto, cantidad y si es para casa o negocio. Te responden con
              precio y stock el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center justify-center min-h-[48px] px-8 font-bold uppercase tracking-[0.06em] text-base transition hover:brightness-110 active:scale-95 tap-44 ${FOCUS} focus-visible:outline-[#132318]`}
              style={{ backgroundColor: C.forest, color: C.crema }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold uppercase tracking-[0.04em] text-xl md:text-2xl mb-1.5 flex items-center gap-2.5`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil, ya optimizado */}
              <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover bg-white" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                @{BIZ.instagram}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,241,231,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 flex flex-col gap-3">
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(246,241,231,0.75)' }}>
              Textos de muestra; datos, fotos y reseñas corresponden a la ficha pública del negocio.
            </p>
            <div className="[&>div]:static! [&>div]:max-w-none! [&>div]:inline-flex!">
              <DemoBand name={BIZ.name} />
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
