import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MATRIMONIO, WA_LINK_EMPRESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  navy: '#071E3C',
  navyDeep: '#04152B',
  papel: '#F4F1E6',
  papelDeep: '#E8E2CE',
  amarillo: '#F6C90E',
  tinta: '#14263E',
  muted: '#3E4E66',
  line: 'rgba(20,38,62,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'buses-villar',
  title: 'Buses Villar — Transporte de pasajeros y turismo en Talca',
  description:
    'Buses, minibuses y vans para matrimonios, empresas, paseos y viajes especiales. Oficina en 13 Oriente 1988, Talca. Cotiza directo por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flota', href: '#flota' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Oficina', href: '#oficina' },
]

const SALIDAS = [
  {
    evento: 'Matrimonios y fiestas',
    detalle: 'Traslado de invitados, ida y vuelta',
    estado: 'Disponible',
  },
  {
    evento: 'Empresas y convenios',
    detalle: 'Transporte continuo de personal',
    estado: 'Disponible',
  },
  {
    evento: 'Paseos y giras',
    detalle: 'Turismo dentro y fuera del país',
    estado: 'Disponible',
  },
  {
    evento: 'Traslados ocasionales',
    detalle: 'Para organizaciones y particulares',
    estado: 'Disponible',
  },
  {
    evento: 'Convenio Marco',
    detalle: 'Proveedor inscrito para el Estado',
    estado: 'Vigente',
  },
]

const FLOTA = [
  {
    src: `${IMG}/bus05.webp`,
    alt: 'Bus plateado de Buses Villar: año 2010, 46 asientos en cuero negro, 2 monitores DVD, hielera, aire acondicionado y baño',
    cap: '46 asientos · baño · DVD',
  },
  {
    src: `${IMG}/bus13.webp`,
    alt: 'Bus plateado con franjas de Buses Villar: año 2008, 46 asientos en felpa naranja, monitor DVD, radio mp3 y baño',
    cap: '46 asientos · baño · mp3',
  },
  {
    src: `${IMG}/bus08.webp`,
    alt: 'Bus gris de Buses Villar: año 2008, 28 asientos en cuero azul, monitor DVD, hielera y aire acondicionado',
    cap: '28 asientos · cuero azul',
  },
  {
    src: `${IMG}/bus10.webp`,
    alt: 'Busscar azul de Buses Villar: año 2008, 30 asientos en felpa azul, monitor DVD y radio mp3',
    cap: '30 asientos · felpa azul',
  },
  {
    src: `${IMG}/bus02.webp`,
    alt: 'Bus verde y amarillo de Buses Villar: año 2010, 46 asientos en felpa verde, 2 monitores DVD, aire acondicionado y baño',
    cap: '46 asientos · felpa verde',
  },
  {
    src: `${IMG}/bus09.webp`,
    alt: 'Bus de Buses Villar con asientos reclinables, aire acondicionado y equipo de audio',
    cap: 'Bus interurbano equipado',
  },
]

const REVIEWS = [
  {
    name: 'Ricardo Reyes Vasquez',
    meta: 'Local Guide · Google',
    text: 'Empresa de buses muy cómoda al servicio de sus clientes.',
  },
  {
    name: 'Teresa Rodríguez Constanzo',
    meta: 'Local Guide · Google',
    text: 'Excelente servicio.',
  },
  {
    name: 'Felipe Parra Arellano',
    meta: 'Google',
    text: 'Cinco estrellas al servicio.',
  },
]

export default function BusesVillarPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="h-7 w-auto rounded-[4px] bg-white px-1 py-0.5"
            />
            <span
              className="uppercase"
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}
            >
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'dark', bar: C.navyDeep, ink: C.papel, line: 'rgba(244,241,230,0.16)', btnBg: C.amarillo, btnInk: C.navyDeep }}
      />

      {/* ── HERO: el bus frente a la oficina ───────────── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <div className="relative h-[520px] md:h-[640px]">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Bus verde y amarillo de Buses Villar estacionado frente a su oficina en 13 Oriente, Talca"
            fill
            priority
            className="object-cover object-[center_62%]"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(4,21,43,0.42) 0%, rgba(4,21,43,0.18) 40%, rgba(4,21,43,0.92) 100%)' }}
          />
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
            <Reveal>
              <p
                className="text-[11px] tracking-[0.34em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: C.amarillo }}
              >
                Servicio de transporte · {BIZ.city} · desde 13 Oriente 1988
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-4 text-[54px] md:text-[104px] leading-[0.92] uppercase"
                style={{ fontFamily: 'var(--font-display)', color: C.papel }}
              >
                Buses <span style={{ color: C.amarillo }}>Villar</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-4 max-w-xl text-[15px] md:text-[17px] leading-relaxed" style={{ color: 'rgba(244,241,230,0.85)' }}>
                Transportamos personas: matrimonios, paseos, traslados de empresa
                y viajes especiales dentro y fuera del país, con buses, minibuses
                y vans desde el corazón de Talca.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-[6px]"
                  style={{ backgroundColor: C.amarillo, color: C.navyDeep }}
                >
                  Cotizar un traslado
                </a>
                <a
                  href="#flota"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-[6px] border"
                  style={{ borderColor: 'rgba(244,241,230,0.5)', color: C.papel }}
                >
                  Ver la flota
                </a>
                <p
                  className="inline-flex items-center gap-2 text-[12px]"
                  style={{ color: 'rgba(244,241,230,0.8)', fontFamily: 'var(--font-mono)' }}
                >
                  <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
                  {BIZ.rating} · {BIZ.ratingCount}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── PANEL DE SALIDAS ───────────────────────────── */}
      <section id="servicios" className="py-14 md:py-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.amarillo }}>
                  Panel de servicios
                </p>
                <h2
                  className="mt-3 text-[36px] md:text-[56px] leading-[0.95] uppercase"
                  style={{ fontFamily: 'var(--font-display)', color: C.papel }}
                >
                  ¿A dónde va <span style={{ color: C.amarillo }}>tu grupo?</span>
                </h2>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed" style={{ color: 'rgba(244,241,230,0.6)', fontFamily: 'var(--font-mono)' }}>
                Cada viaje es distinto: ellos eligen el vehículo que se ajusta a tus necesidades.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="mt-8 rounded-[10px] overflow-hidden border"
              style={{ borderColor: 'rgba(246,201,14,0.35)', backgroundColor: C.navyDeep }}
            >
              <div
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1.1fr_1.4fr_auto] gap-x-4 px-4 md:px-6 py-3 text-[10px] tracking-[0.3em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,241,230,0.62)', backgroundColor: 'rgba(246,201,14,0.08)' }}
              >
                <span>Evento</span>
                <span className="hidden md:block">Servicio</span>
                <span className="text-right">Estado</span>
              </div>
              {SALIDAS.map((s, i) => (
                <Reveal key={s.evento} delay={i * 60}>
                  <div
                    className="grid grid-cols-[1fr_auto] md:grid-cols-[1.1fr_1.4fr_auto] gap-x-4 items-center px-4 md:px-6 py-4 border-t"
                    style={{ borderColor: 'rgba(244,241,230,0.1)' }}
                  >
                    <p
                      className="text-[17px] md:text-[22px] uppercase leading-tight"
                      style={{ fontFamily: 'var(--font-display)', color: C.papel, letterSpacing: '0.03em' }}
                    >
                      {s.evento}
                    </p>
                    <p className="hidden md:block text-[13px]" style={{ color: 'rgba(244,241,230,0.65)', fontFamily: 'var(--font-mono)' }}>
                      {s.detalle}
                    </p>
                    <p
                      className="text-right text-[11px] md:text-[12px] tracking-[0.22em] uppercase"
                      style={{ fontFamily: 'var(--font-mono)', color: C.amarillo }}
                    >
                      {s.estado}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-4 text-[11px] tracking-[0.14em] uppercase" style={{ color: 'rgba(244,241,230,0.5)', fontFamily: 'var(--font-mono)' }}>
              Servicios reales descritos en busesvillar.cl — cotización directa por WhatsApp.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FLOTA ──────────────────────────────────────── */}
      <section id="flota" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] tracking-[0.32em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                  Los mejores vehículos de la región, dicen ellos
                </p>
                <h2
                  className="mt-3 text-[36px] md:text-[56px] leading-[0.95] uppercase"
                  style={{ fontFamily: 'var(--font-display)', color: C.tinta }}
                >
                  La flota, ficha por ficha
                </h2>
              </div>
              <p className="max-w-xs text-[14px] leading-relaxed" style={{ color: C.muted }}>
                Fotos y especificaciones reales publicadas por Buses Villar en su sitio:
                año, capacidad y equipamiento de cada máquina.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {FLOTA.map((f, i) => (
              <Reveal key={f.src} delay={i * 40}>
                <figure>
                  <div
                    className="relative overflow-hidden rounded-[10px] border bg-white"
                    style={{ borderColor: C.line, aspectRatio: '308/349' }}
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      className="object-contain bg-white"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <figcaption
                    className="mt-2 text-[11px] tracking-[0.14em] uppercase"
                    style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
                  >
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div
              className="mt-8 rounded-[10px] border px-5 py-4 md:px-6 flex flex-wrap items-center gap-x-6 gap-y-2"
              style={{ borderColor: C.line, backgroundColor: C.papelDeep }}
            >
              <p className="text-[13px]" style={{ color: C.tinta }}>
                <strong>Equipo profesional:</strong> conductores y auxiliares propios,
                con las medidas de seguridad para que el viaje sea lo más cómodo posible.
              </p>
              <p className="text-[11px] tracking-[0.14em] uppercase" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                Buses · minibuses · vans
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <h2
                className="text-[36px] md:text-[56px] leading-[0.95] uppercase"
                style={{ fontFamily: 'var(--font-display)', color: C.papel }}
              >
                {BIZ.rating} <span style={{ color: C.amarillo }}>★</span> en Google
              </h2>
              <p className="text-[12px] tracking-[0.18em] uppercase" style={{ color: 'rgba(244,241,230,0.6)', fontFamily: 'var(--font-mono)' }}>
                {BIZ.ratingCount}
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <figure
                  className="h-full rounded-[10px] p-6 border flex flex-col"
                  style={{ borderColor: 'rgba(244,241,230,0.16)', backgroundColor: C.navy }}
                >
                  <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[16px] leading-relaxed flex-1" style={{ color: C.papel }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-[11px] tracking-[0.16em] uppercase"
                    style={{ color: 'rgba(244,241,230,0.55)', fontFamily: 'var(--font-mono)' }}
                  >
                    {r.name} · {r.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-5 text-[11px] tracking-[0.12em] uppercase" style={{ color: 'rgba(244,241,230,0.5)', fontFamily: 'var(--font-mono)' }}>
              Opiniones reales publicadas en Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OFICINA / TERMINAL ─────────────────────────── */}
      <section id="oficina" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <Reveal className="order-1 md:order-2">
              <div
                className="relative overflow-hidden rounded-[10px] border h-[280px] md:h-auto md:min-h-[360px]"
                style={{ borderColor: C.line }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
            <Reveal delay={80} className="order-2 md:order-1">
              <div className="rounded-[10px] p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.navy, color: C.papel }}>
                <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.amarillo }}>
                  La oficina, en vivo
                </p>
                <h2 className="mt-3 text-[30px] md:text-[42px] leading-[0.98] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
                  {BIZ.address}, {BIZ.city}
                </h2>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: 'rgba(244,241,230,0.7)' }}>
                  En estas dependencias se puede ver la flota en vivo y cerrar
                  reservas y contratos. {BIZ.hours}.
                </p>
                <dl className="mt-5 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,241,230,0.55)' }}>Celular</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,241,230,0.55)' }}>Oficina</dt>
                    <dd>{BIZ.fijoDisplay}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-24 shrink-0 text-[10px] tracking-[0.22em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(244,241,230,0.55)' }}>Correo</dt>
                    <dd>{BIZ.email}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex flex-wrap gap-3 pt-6 mt-auto">
                  <a
                    href={WA_LINK_MATRIMONIO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-[6px]"
                    style={{ backgroundColor: C.amarillo, color: C.navyDeep }}
                  >
                    Cotizar matrimonio
                  </a>
                  <a
                    href={WA_LINK_EMPRESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-[6px] border"
                    style={{ borderColor: 'rgba(244,241,230,0.5)', color: C.papel }}
                  >
                    Cotizar empresa
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={60}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-[12px] tracking-[0.16em] uppercase underline underline-offset-4"
              style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.navyDeep, color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="h-8 w-auto rounded-[4px] bg-white px-1 py-0.5"
            />
            <div>
              <p className="text-[15px] uppercase" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
                {BIZ.name}
              </p>
              <p className="text-[11px]" style={{ color: 'rgba(244,241,230,0.55)', fontFamily: 'var(--font-mono)' }}>
                {BIZ.legal} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="text-[11px] tracking-[0.14em] uppercase" style={{ color: 'rgba(244,241,230,0.5)', fontFamily: 'var(--font-mono)' }}>
            {BIZ.phoneDisplay} · {BIZ.fijoDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </main>
  )
}
