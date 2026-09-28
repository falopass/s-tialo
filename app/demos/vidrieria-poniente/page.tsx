import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

const C = {
  steel: '#EEF0F1',
  steelDeep: '#E2E5E7',
  graphite: '#1B1F24',
  panel: '#262C33',
  crimson: '#B4122E',
  ink: '#1B1F24',
  muted: '#56606B',
  line: 'rgba(27,31,36,0.18)',
  paper: '#F7F8F8',
}

export const metadata: Metadata = demoMetadata({
  slug: 'vidrieria-poniente',
  title: 'Vidriería Poniente — Vidrios, aluminio y PVC a la medida en Talca',
  description:
    'Vidrios y espejos a medida, termopanel, mamparas y estructuras de aluminio y PVC. Diecinueve Sur 506 esquina 4 Poniente, Talca. Cotiza por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde estamos', href: '#visita' },
]

const CORTE_MITRADO =
  'polygon(18px 0, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0 18px)'

const SERVICIOS = [
  { cod: 'V-01', name: 'Vidrios a medida', desc: 'Corte e instalación para ventanas, puertas y muebles.' },
  { cod: 'V-02', name: 'Espejos', desc: 'Espejos biselados y a medida para baños, living y closet.' },
  { cod: 'V-03', name: 'Termopanel', desc: 'Doble vidrio hermético: menos ruido, mejor temperatura.' },
  { cod: 'V-04', name: 'Mamparas y shower doors', desc: 'Mamparas templadas, también shower laminado incoloro.' },
  { cod: 'V-05', name: 'Ventanas de aluminio y PVC', desc: 'Estructuras correderas y proyectantes fabricadas a medida.' },
  { cod: 'V-06', name: 'Reparaciones', desc: 'Hojas, correderas, cierres y vidrios quebrados.' },
]

const TRABAJOS = [
  { src: `${IMG}/fachada.webp`, alt: 'Fachada de Vidriería Poniente en 19 Sur con letrero Aluminios y Vidrios', tag: 'el local' },
  { src: `${IMG}/p4.webp`, alt: 'Entrada del local con puertas plegables de aluminio y vidrio', tag: 'entrada' },
  { src: `${IMG}/p1.webp`, alt: 'Mamparas de baño en exhibición dentro del showroom', tag: 'mamparas' },
  { src: `${IMG}/p9.webp`, alt: 'Divisores de baño en aluminio color bronce expuestos en la tienda', tag: 'mamparas' },
  { src: `${IMG}/p7.webp`, alt: 'Casa de madera con ventanas de aluminio oscuras instaladas', tag: 'instalación' },
  { src: `${IMG}/p3.webp`, alt: 'Ventana PVC blanca con vidrio decorativo en exhibición', tag: 'PVC' },
  { src: `${IMG}/p10.webp`, alt: 'Ventana PVC blanca corredera expuesta en el showroom', tag: 'PVC' },
  { src: `${IMG}/p11.webp`, alt: 'Puerta de aluminio bronce con vidrio texturizado', tag: 'puertas' },
  { src: `${IMG}/p13.webp`, alt: 'Ventana PVC con vista a las vías del tren de Talca', tag: 'PVC' },
]

const RESENAS = [
  {
    nombre: 'Pamela Angélica Rodríguez',
    texto: 'Mi ventana quedó bellísima, súper recomendado.',
  },
  {
    nombre: 'Juan Francisco Vergara Marchant',
    texto: 'Muy buena la atención y muy responsables en los tiempos de entrega.',
  },
  {
    nombre: 'Bea Rojas',
    texto: 'Excelente servicio, muy amables y comprensivos, muy recomendable.',
  },
  {
    nombre: 'Gerardo Enrique Salas Mendoza',
    texto: 'Muy buen servicio, muy rápidos y buenos precios, se agradece la amabilidad.',
  },
]

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable} font-[var(--font-body)] antialiased`} style={{ backgroundColor: C.steel }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass="font-[var(--font-display)] font-semibold uppercase tracking-wide"
        theme={{ over: 'light', bar: C.steel, ink: C.ink, line: C.line, btnBg: C.crimson, btnInk: '#fff' }}
      />

      {/* ── HERO: la nota de trabajo ── */}
      <section id="inicio" className="relative">
        {/* regla con marcas de medida */}
        <div
          aria-hidden="true"
          className="h-5 w-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(27,31,36,0.35) 0 1px, transparent 1px 12px)',
            maskImage: 'linear-gradient(90deg, transparent, black 8%, black 92%, transparent)',
          }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-end">
            <div>
              <Reveal>
                <Image
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Vidriería Poniente: rombo carmesí VP y texto Aluminios y Vidrios"
                  width={560}
                  height={213}
                  priority
                  className="w-[150px] md:w-[190px] h-auto"
                />
              </Reveal>
              <Reveal>
                <h1
                  className="font-[var(--font-display)] font-semibold uppercase leading-[0.98] mt-7 text-[clamp(2.7rem,10vw,5.4rem)]"
                  style={{ color: C.ink }}
                >
                  El vidrio
                  <br />
                  <span style={{ color: C.crimson }}>a la medida</span>
                  <br />
                  de Talca
                </h1>
              </Reveal>
              <Reveal>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                  Vidrios, espejos, termopanel y estructuras de aluminio y PVC,
                  cortados y fabricados en el taller de{' '}
                  <strong style={{ color: C.ink }}>19 Sur con 4 Poniente</strong>.
                </p>
              </Reveal>
              <Reveal>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                    style={{ backgroundColor: C.crimson, color: '#fff', clipPath: CORTE_MITRADO }}
                  >
                    Cotizar mi medida
                  </a>
                  <div className="font-[var(--font-mono)] text-xs" style={{ color: C.muted }}>
                    <Stars value={4} color={C.crimson} className="w-4 h-4 inline-block align-[-2px] mr-1.5" />
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal>
              <figure className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2"
                  style={{ borderColor: C.crimson }}
                />
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Vidriería Poniente con su letrero rojo Aluminios y Vidrios en 19 Sur, Talca"
                  width={808}
                  height={958}
                  priority
                  className="w-full h-auto"
                  style={{ clipPath: CORTE_MITRADO, border: `1px solid ${C.line}` }}
                />
                <figcaption
                  className="absolute bottom-3 left-3 font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em] px-3 py-1.5"
                  style={{ backgroundColor: C.graphite, color: '#EEF0F1' }}
                >
                  {BIZ.address} · {BIZ.esquina}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ── */}
      <section style={{ backgroundColor: C.graphite }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-3 gap-4 md:gap-10">
            {[
              ['01', 'Traes la medida', 'O la tomamos en terreno — visita a domicilio.'],
              ['02', 'Se corta en el taller', 'Vidrio, aluminio o PVC al milímetro.'],
              ['03', 'Instalación', 'En tu casa o retiras en el local.'],
            ].map(([n, t, d]) => (
              <Reveal key={n}>
                <div className="border-t-2 pt-4" style={{ borderColor: C.crimson }}>
                  <p className="font-[var(--font-mono)] text-xs" style={{ color: 'rgba(238,240,241,0.55)' }}>
                    {n}
                  </p>
                  <h3 className="font-[var(--font-display)] font-semibold uppercase mt-2 text-lg md:text-2xl leading-tight" style={{ color: '#EEF0F1' }}>
                    {t}
                  </h3>
                  <p className="text-xs md:text-sm mt-2 leading-snug" style={{ color: 'rgba(238,240,241,0.7)' }}>
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS: especificaciones ── */}
      <section id="servicios">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: C.crimson }}>
              Especificaciones · lo que fabrica el taller
            </p>
            <h2
              className="font-[var(--font-display)] font-semibold uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,4rem)] mb-10 md:mb-14"
              style={{ color: C.ink }}
            >
              Si es vidrio, acá se corta
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SERVICIOS.map((s) => (
              <Reveal key={s.cod}>
                <div
                  className="h-full p-5"
                  style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, clipPath: CORTE_MITRADO }}
                >
                  <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em]" style={{ color: C.crimson }}>
                    {s.cod}
                  </p>
                  <h3 className="font-[var(--font-display)] font-semibold uppercase text-xl mt-2 leading-tight" style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className="text-sm mt-2 leading-snug" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-6 font-[var(--font-mono)] text-xs leading-relaxed" style={{ color: C.muted }}>
              * Servicios publicados por la propia vidriería en su Facebook
              @vidrieriaponiente.talca — incluye “shower laminado incoloro”.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── TRABAJOS: la vitrina ── */}
      <section id="trabajos" style={{ backgroundColor: C.steelDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2
              className="font-[var(--font-display)] font-semibold uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,4rem)] mb-10 md:mb-14"
              style={{ color: C.ink }}
            >
              La vitrina y
              <br />
              lo que sale de ella
            </h2>
          </Reveal>
          <div className="columns-2 md:columns-3 gap-3 [&>figure]:mb-3">
            {TRABAJOS.map((g) => (
              <Reveal key={g.src}>
                <figure className="break-inside-avoid relative">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    width={1200}
                    height={900}
                    className="w-full h-auto"
                    style={{ border: `1px solid ${C.line}` }}
                  />
                  <span
                    className="absolute top-2 left-2 font-[var(--font-mono)] text-[9px] uppercase tracking-[0.16em] px-2 py-0.5"
                    style={{ backgroundColor: C.crimson, color: '#fff' }}
                  >
                    {g.tag}
                  </span>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end gap-4 md:gap-8 mb-10 md:mb-14">
              <h2
                className="font-[var(--font-display)] font-semibold uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,4rem)]"
                style={{ color: C.ink }}
              >
                Lo que dice el barrio
              </h2>
              <p className="font-[var(--font-mono)] text-xs pb-2" style={{ color: C.muted }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas — acá, las de 5 estrellas
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-3">
            {RESENAS.map((r) => (
              <Reveal key={r.nombre}>
                <blockquote
                  className="p-5 md:p-6 h-full"
                  style={{ backgroundColor: C.paper, border: `1px solid ${C.line}`, clipPath: CORTE_MITRADO }}
                >
                  <Stars value={5} color={C.crimson} className="w-3.5 h-3.5" />
                  <p className="mt-3 text-base leading-relaxed" style={{ color: C.ink }}>
                    “{r.texto}”
                  </p>
                  <footer className="mt-3 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                    {r.nombre}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISITA ── */}
      <section id="visita" style={{ backgroundColor: C.graphite }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Reveal>
                <p className="font-[var(--font-mono)] text-xs uppercase tracking-[0.2em] mb-3" style={{ color: '#E85D75' }}>
                  Dónde estamos
                </p>
                <h2
                  className="font-[var(--font-display)] font-semibold uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,3.8rem)]"
                  style={{ color: '#EEF0F1' }}
                >
                  19 Sur con
                  <br />
                  4 Poniente
                </h2>
              </Reveal>
              <Reveal>
                <ul className="mt-8 space-y-4">
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-20 shrink-0" style={{ color: 'rgba(238,240,241,0.55)' }}>
                      Dirección
                    </span>
                    <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: '#EEF0F1' }}>
                      {BIZ.address}, {BIZ.esquina} · {BIZ.city}
                    </a>
                  </li>
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-20 shrink-0" style={{ color: 'rgba(238,240,241,0.55)' }}>
                      Dato
                    </span>
                    <span className="text-base" style={{ color: 'rgba(238,240,241,0.85)' }}>
                      Estacionamiento al frente, junto al parque
                    </span>
                  </li>
                  {BIZ.hours.map((h) => (
                    <li key={h.d} className="flex gap-4 items-start">
                      <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-20 shrink-0" style={{ color: 'rgba(238,240,241,0.55)' }}>
                        {h.d}
                      </span>
                      <span className="text-base font-medium" style={{ color: '#EEF0F1' }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                  <li className="flex gap-4 items-start">
                    <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] pt-1 w-20 shrink-0" style={{ color: 'rgba(238,240,241,0.55)' }}>
                      WhatsApp
                    </span>
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-base font-semibold underline underline-offset-4" style={{ color: '#EEF0F1' }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </li>
                </ul>
              </Reveal>
              <Reveal>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-8 inline-flex items-center gap-2 px-6 py-3 text-base font-bold uppercase tracking-wide active:scale-95 transition-transform"
                  style={{ backgroundColor: '#fff', color: C.crimson, clipPath: CORTE_MITRADO }}
                >
                  Cotizar por WhatsApp
                </a>
              </Reveal>
            </div>
            <Reveal>
              <div style={{ border: `1px solid rgba(238,240,241,0.25)` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Ubicación de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                  className="w-full h-[300px] md:h-[380px] block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: '#14171B' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo.webp`} alt="" width={36} height={36} className="h-8 w-auto" aria-hidden="true" />
            <div>
              <p className="font-[var(--font-display)] font-semibold uppercase tracking-wide text-sm" style={{ color: '#EEF0F1' }}>
                {BIZ.name}
              </p>
              <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: 'rgba(238,240,241,0.55)' }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <p className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(238,240,241,0.55)' }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Cotizar un trabajo por WhatsApp" />
    </main>
  )
}
