import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'
import { BIZ, CALL_LINK, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-mono',
})

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  pergamino: '#F1E9D8',
  pergamino2: '#E8DCC4',
  vino: '#4A1420', // tinto oscuro
  vinoProf: '#2E0C15',
  oro: '#A9874F',
  tinta: '#2A1D17',
  suave: '#6E5B4C',
  linea: 'rgba(74,20,32,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'bodegas-del-abate',
  title: 'Las Bodegas del Abate — Viñas y agroexportación en Talca',
  description:
    'Vinícola Las Bodegas del Abate: viñas y agroexportación en Camino Las Rastras km 8, Fundo Santa Teresa, Talca — Valle del Maule. Tel +56 71 226 5767.',
  image: `${IMG}/bosquejo-vinedo.webp`,
})

const NAV_LINKS = [
  { label: 'El fundo', href: '#fundo' },
  { label: 'De la viña a la bodega', href: '#proceso' },
  { label: 'Ficha', href: '#ficha' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const PROCESO = [
  {
    n: 'I',
    t: 'La viña',
    d: 'Las hileras del Fundo Santa Teresa, a los pies de la precordillera maulina, en el kilómetro 8 de Las Rastras.',
    img: `${IMG}/bosquejo-vinedo.webp`,
    alt: 'Bosquejo referencial: hileras de viñedo al atardecer en el Valle del Maule',
    bosquejo: true,
  },
  {
    n: 'II',
    t: 'La bodega',
    d: 'Vinificación y guarda en barricas y estanques, el corazón de la operación del Abate.',
    img: `${IMG}/bosquejo-bodega.webp`,
    alt: 'Bosquejo referencial: interior de una bodega con barricas de roble y estanques de acero',
    bosquejo: true,
  },
  {
    n: 'III',
    t: 'La vendimia',
    d: 'De la cepa al mercado: la viña opera también como agroexportadora.',
    img: `${IMG}/bosquejo-uvas.webp`,
    alt: 'Bosquejo referencial: uvas tintas recién cosechadas en un cajón de madera',
    bosquejo: true,
  },
]

function Tag({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="font-[var(--f-mono)] text-[11px] uppercase tracking-[0.3em]"
      style={{ color: light ? C.oro : C.vino }}
    >
      {children}
    </p>
  )
}

function BosquejoTag() {
  return (
    <span
      className="absolute top-3 left-3 font-[var(--f-mono)] text-[9px] uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-sm z-10"
      style={{ backgroundColor: 'rgba(46,12,21,0.88)', color: C.oro, border: `1px dashed ${C.oro}` }}
    >
      Bosquejo — se reemplaza por tu foto real
    </span>
  )
}

export default function BodegasDelAbateDemo() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.pergamino, color: C.tinta, fontFamily: 'var(--f-body)' }}
    >
      <BlitzNav
        name={
          <span className="font-[var(--f-display)] text-lg md:text-xl leading-none tracking-wide">
            Las Bodegas <span style={{ color: C.vino }}>del Abate</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'light',
          bar: 'rgba(241,233,216,0.94)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.vino,
          btnInk: C.pergamino,
        }}
      />

      {/* HERO — composición tipo etiqueta de vino */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 pt-[108px] md:pt-[132px] pb-10">
        <Reveal>
          <div
            className="relative text-center border-2 px-5 md:px-10 py-10 md:py-14"
            style={{ borderColor: C.vino }}
          >
            <div className="absolute inset-1.5 border pointer-events-none" style={{ borderColor: C.linea }} aria-hidden="true" />
            <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.4em]" style={{ color: C.oro }}>
              {BIZ.region} · Chile
            </p>
            <h1
              className="font-[var(--f-display)] text-[12vw] md:text-[64px] leading-[1.02] mt-4"
              style={{ color: C.vino }}
            >
              Las Bodegas
              <br />
              del Abate
            </h1>
            <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
              <span className="h-px w-16" style={{ backgroundColor: C.oro }} />
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={C.vino} strokeWidth="1.6">
                <path d="M12 3c-3 0-5 2-5 5 0 3.5 2.5 4.5 4 6-.5 2-1.5 3.5-1.5 5.5h5c0-2-1-3.5-1.5-5.5 1.5-1.5 4-2.5 4-6 0-3-2-5-5-5z" />
              </svg>
              <span className="h-px w-16" style={{ backgroundColor: C.oro }} />
            </div>
            <p className="mt-5 text-base md:text-lg italic" style={{ color: C.suave }}>
              Viñas · vinificación · agroexportación
            </p>
            <p className="mt-1.5 font-[var(--f-mono)] text-[10px] md:text-[11px] uppercase tracking-[0.2em]" style={{ color: C.suave }}>
              {BIZ.address} · {BIZ.fundo} · {BIZ.city}
            </p>
            <a
              href={CALL_LINK}
              className="tap-44 mt-8 inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-transform active:scale-95"
              style={{ backgroundColor: C.vino, color: C.pergamino }}
            >
              {BIZ.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      {/* EL FUNDO — streetview real + bosquejo */}
      <section id="fundo" className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <Tag>El fundo</Tag>
              <h2 className="font-[var(--f-display)] text-3xl md:text-[40px] leading-tight mt-3" style={{ color: C.vino }}>
                Kilómetro 8 de Las Rastras, a la salida poniente de Talca
              </h2>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed" style={{ color: C.suave }}>
                En el Fundo Santa Teresa la viña combina campo y operación de bodega:
                un camino rural a minutos de la ciudad, en pleno Valle del Maule —
                corazón vitivinícola de Chile.
              </p>
              <dl className="mt-6 space-y-2.5 font-[var(--f-mono)] text-[11px] uppercase tracking-[0.14em]">
                {[
                  ['Camino', 'Las Rastras, km 8'],
                  ['Fundo', 'Santa Teresa · Lote 7'],
                  ['Ciudad', `${BIZ.city}, ${BIZ.region}`],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4">
                    <dt style={{ color: C.oro }}>{k}</dt>
                    <dd style={{ color: C.tinta }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/streetview-sector.webp`}
                  alt="Vista real del sector de Camino Las Rastras km 8, Talca, según Street View de Google"
                  className="w-full aspect-[21/9] object-cover rounded-sm border"
                  style={{ borderColor: C.vino }}
                  loading="lazy"
                />
              </div>
              <figcaption className="mt-2 font-[var(--f-mono)] text-[9px] uppercase tracking-[0.16em]" style={{ color: C.suave }}>
                Imagen real · Street View de Google, abr 2024 · el sector del fundo
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* PROCESO — tríptico editorial con bosquejos marcados */}
      <section id="proceso" className="border-y" style={{ borderColor: C.linea, backgroundColor: C.pergamino2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="text-center">
              <Tag>De la viña a la bodega</Tag>
              <h2 className="font-[var(--f-display)] text-3xl md:text-[44px] leading-tight mt-3" style={{ color: C.vino }}>
                Tres actos de una misma tierra
              </h2>
              <p className="mt-3 text-sm md:text-base italic max-w-xl mx-auto" style={{ color: C.suave }}>
                Las escenas de esta sección son bosquejos referenciales: al activar el
                sitio se reemplazan por fotos reales de la viña y la bodega.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
            {PROCESO.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <article>
                  <div className="relative">
                    {p.bosquejo && <BosquejoTag />}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.img}
                      alt={p.alt}
                      className="w-full aspect-[4/5] object-cover rounded-sm border-2"
                      style={{ borderColor: C.vino }}
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-[var(--f-display)] text-xl" style={{ color: C.oro }} aria-hidden="true">
                      {p.n}
                    </p>
                    <h3 className="font-[var(--f-display)] text-2xl mt-1" style={{ color: C.vino }}>
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: C.suave }}>
                      {p.d}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FICHA TÉCNICA — solo datos verificados */}
      <section id="ficha" className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="text-center">
            <Tag>Ficha técnica</Tag>
            <h2 className="font-[var(--f-display)] text-3xl md:text-[40px] mt-3" style={{ color: C.vino }}>
              Los datos, como en la contraetiqueta
            </h2>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <dl
            className="mt-10 border-2 rounded-sm overflow-hidden"
            style={{ borderColor: C.vino }}
          >
            {[
              ['Nombre', BIZ.name],
              ['Razón social', BIZ.legal],
              ['Giro', `${BIZ.rubro} — bodega y vinificación`],
              ['Fundo', BIZ.fundo],
              ['Dirección', `${BIZ.address}, ${BIZ.city}`],
              ['Valle', BIZ.region],
              ['Teléfono', BIZ.phoneDisplay],
              ['Plus code', BIZ.plusCode],
            ].map(([k, v], i) => (
              <div
                key={k}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-6 px-5 md:px-8 py-3.5"
                style={{ backgroundColor: i % 2 === 0 ? C.pergamino : C.pergamino2, borderTop: i > 0 ? `1px solid ${C.linea}` : undefined }}
              >
                <dt className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.22em]" style={{ color: C.oro }}>
                  {k}
                </dt>
                <dd className="font-[var(--f-body)] text-sm md:text-base sm:text-right" style={{ color: C.tinta }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" style={{ backgroundColor: C.vinoProf }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
            <Reveal>
              <div>
                <Tag light>Cómo llegar</Tag>
                <h2 className="font-[var(--f-display)] text-3xl md:text-[40px] leading-tight mt-3" style={{ color: C.pergamino }}>
                  Camino Las Rastras, km 8
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(241,233,216,0.72)' }}>
                  Saliendo de Talca hacia el poniente por Las Rastras, la viña queda a la
                  altura del kilómetro 8, dentro del Fundo Santa Teresa. Para coordinar
                  una visita, llama directo.
                </p>
                <figure className="mt-6">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/streetview-camino.webp`}
                    alt="Vista real del camino rural en el sector de Camino Las Rastras, Talca, según Street View de Google"
                    className="w-full aspect-[21/9] object-cover rounded-sm border"
                    style={{ borderColor: 'rgba(241,233,216,0.3)' }}
                    loading="lazy"
                  />
                  <figcaption className="mt-2 font-[var(--f-mono)] text-[9px] uppercase tracking-[0.16em]" style={{ color: 'rgba(241,233,216,0.55)' }}>
                    Imagen real · Street View de Google, abr 2024
                  </figcaption>
                </figure>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="rounded-sm overflow-hidden border-2 h-[320px] md:h-[440px]"
                style={{ borderColor: C.oro }}
              >
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-full w-full" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
        <Reveal>
          <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.4em]" style={{ color: C.oro }}>
            {BIZ.city} · {BIZ.region}
          </p>
          <h2 className="font-[var(--f-display)] text-4xl md:text-6xl leading-[1.02] mt-4" style={{ color: C.vino }}>
            Conversemos de vino
            <br />y de campo
          </h2>
          <a
            href={CALL_LINK}
            className="tap-44 mt-8 inline-flex items-center rounded-full px-9 py-3 text-sm font-semibold uppercase tracking-[0.12em] transition-transform active:scale-95"
            style={{ backgroundColor: C.vino, color: C.pergamino }}
          >
            Llamar al {BIZ.phoneDisplay}
          </a>
        </Reveal>
      </section>

      <footer className="px-5 py-6 text-center border-t" style={{ borderColor: C.linea }}>
        <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em]" style={{ color: C.suave }}>
          {BIZ.legal} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
        </p>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.vino} fg={C.pergamino} />
    </main>
  )
}
