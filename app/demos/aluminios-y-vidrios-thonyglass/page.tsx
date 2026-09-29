import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

/**
 * Dirección de arte: «el taller que deja la casa hermética». La página se
 * lee como un plano de instalación: cotas y líneas de medida en mono,
 * rejilla técnica de fondo, y el cian de su letrero «ATG» como único
 * acento. Space Grotesk marca los titulares, Work Sans el cuerpo, IBM
 * Plex Mono las medidas — las fotos de terreno llevan cotas como si
 * fueran figuras de un plano.
 */
const C = {
  paper: '#EDF3F5',
  card: '#FFFFFF',
  ink: '#14232B',
  cian: '#1298C4',
  cianOscuro: '#0C7191',
  deep: '#0D2A33',
  muted: '#54666E',
  line: 'rgba(20,35,43,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'aluminios-y-vidrios-thonyglass',
  title: 'Thonyglass — Aluminios y vidrios a medida en Talca',
  description:
    'Aluminios y Vidrios Thonyglass en Talca: ventanas de aluminio y PVC, termopanel, vidrios dimensionados y shower door, instalados en terreno. Cotiza por WhatsApp.',
  image: `${IMG}/casa-espejo.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    cod: 'S-01',
    name: 'Ventanas de aluminio',
    desc: 'Fabricación e instalación a la medida del vano, correderas y de proyectar.',
  },
  {
    cod: 'S-02',
    name: 'Venta de termopanel',
    desc: 'Vidrios termopanel nuevos y reposición de los que quedaron empañados.',
  },
  {
    cod: 'S-03',
    name: 'Ventanas PVC',
    desc: 'Perfiles PVC con termopanel: la opción hermética para frío y ruido.',
  },
  {
    cod: 'S-04',
    name: 'Vidrios dimensionados',
    desc: 'Corte a medida para muebles, repisas, mesas y protecciones.',
  },
  {
    cod: 'S-05',
    name: 'Shower door',
    desc: 'Puertas y paños fijos de ducha en vidrio templado, con herrajes.',
  },
]

const TRABAJOS = [
  {
    src: `${IMG}/casa-espejo.webp`,
    cota: 'FIG. 01 · FACHADA',
    name: 'Cierre de fachada en vidrio espejo',
  },
  {
    src: `${IMG}/sunroom.webp`,
    cota: 'FIG. 02 · TERRAZA',
    name: 'Cierre de terraza con correderas',
  },
  {
    src: `${IMG}/puertas-blancas.webp`,
    cota: 'FIG. 03 · INTERIOR',
    name: 'Puertas y ventanas en blanco',
  },
  {
    src: `${IMG}/obra-osb.webp`,
    cota: 'FIG. 04 · OBRA',
    name: 'Ventanales instalados en obra gruesa',
  },
  {
    src: `${IMG}/esquina.webp`,
    cota: 'FIG. 05 · LOCAL',
    name: 'Ventanal esquinero de local',
  },
  {
    src: `${IMG}/tableros.webp`,
    cota: 'FIG. 06 · TALLER',
    name: 'Paños de vidrio en el taller',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente servicio calidad y puntualidad, muy recomendados.',
    author: 'Aliel Jara',
  },
  {
    text: 'Muy buen precio, atención rápida.',
    author: 'Isis Cairo',
  },
  {
    text: 'Los mejores precios.',
    author: 'Carlos Camargo',
  },
]

const HORARIO = [
  { dia: 'Lunes a viernes', hora: '9:00 – 19:00' },
  { dia: 'Sábado', hora: '9:00 – 14:00' },
  { dia: 'Domingo', hora: 'Cerrado' },
]

/** Regla de cotas: ticks de medida como en un plano. */
function Ruler({ vertical = false, color, className = '' }: { vertical?: boolean; color: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        backgroundImage: `repeating-linear-gradient(${vertical ? '180deg' : '90deg'}, ${color} 0px, ${color} 1px, transparent 1px, transparent 12px)`,
        backgroundRepeat: vertical ? 'repeat-y' : 'repeat-x',
        backgroundPosition: 'center',
        width: vertical ? '1px' : '100%',
        height: vertical ? '100%' : '1px',
      }}
    />
  )
}

/** Rejilla técnica de fondo (blueprint light). */
const GRID: React.CSSProperties = {
  backgroundImage:
    'linear-gradient(rgba(18,152,196,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(18,152,196,0.07) 1px, transparent 1px)',
  backgroundSize: '44px 44px',
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#7FD3EA' : C.cianOscuro }}
    >
      <span className="inline-block w-6 h-px" style={{ backgroundColor: 'currentColor' }} />
      {children}
      <span className="inline-block w-6 h-px" style={{ backgroundColor: 'currentColor' }} />
    </p>
  )
}

export default function ThonyglassPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={<span>Thonyglass</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(237,243,245,0.95)',
          ink: C.ink,
          line: 'rgba(20,35,43,0.14)',
          btnBg: C.cianOscuro,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el plano ── */}
      <section id="inicio" className="relative" style={{ ...GRID, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: C.cianOscuro }}>
                {BIZ.marca} — vidriería en Talca
              </p>
              <h1
                className={`${display.className} leading-[1.02] text-[clamp(2rem,8vw,4.4rem)] mb-6`}
                style={{ color: C.ink }}
              >
                La ventana que entra
                <br />
                <span style={{ color: C.cianOscuro }}>justo en el vano.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                Ventanas de aluminio y PVC, termopanel, vidrios cortados a
                medida y shower door — fabricados e instalados por el taller
                de 13 1/2 Oriente, en Talca.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-md transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.cianOscuro, color: '#FFFFFF' }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="font-semibold text-sm md:text-base px-7 py-3 rounded-md border-2 tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver servicios
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tap-44"
                style={{ color: C.muted }}
              >
                <Stars value={3.4} color={C.cianOscuro} className="w-[13px] h-[13px]" />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </Reveal>
            <Reveal delay={150}>
              <div className="relative">
                {/* cota superior */}
                <div className="flex items-end gap-2 mb-2">
                  <span className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.cianOscuro }}>
                    a medida
                  </span>
                  <Ruler color={C.cianOscuro} className="flex-1 opacity-70" />
                  <span className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.cianOscuro }}>
                    en terreno
                  </span>
                </div>
                <div className="relative border-2" style={{ borderColor: C.ink }}>
                  <img
                    src={`${IMG}/casa-espejo.webp`}
                    alt="Casa con fachada completa en vidrio espejo instalada por Thonyglass"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full object-cover aspect-[4/3]"
                  />
                  {/* escuadras de cota */}
                  <span aria-hidden="true" className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4" style={{ borderColor: C.cian }} />
                  <span aria-hidden="true" className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4" style={{ borderColor: C.cian }} />
                  <span aria-hidden="true" className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4" style={{ borderColor: C.cian }} />
                  <span aria-hidden="true" className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4" style={{ borderColor: C.cian }} />
                </div>
                <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em] mt-2.5 text-right`} style={{ color: C.muted }}>
                  FIG. 01 — cierre de fachada · vidrio espejo
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Ruler color="rgba(20,35,43,0.35)" className="absolute bottom-0 left-0 opacity-60" />
      </section>

      {/* ── Servicios: planilla de especificaciones ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-[1fr_1.8fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow light>Planilla de servicios</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-5`} style={{ color: '#EDF3F5' }}>
                Lo que hace
                <br />
                <span style={{ color: '#7FD3EA' }}>el taller</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(237,243,245,0.82)' }}>
                Tal cual el letrero del local: cinco especialidades, todas a
                medida. La cotización se conversa directo por WhatsApp.
              </p>
              <div className="relative inline-block">
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Letrero ATG — Aluminios Thonyglass: casa con vidrio cian"
                  loading="lazy"
                  className="w-[120px] h-[120px] object-cover border-2"
                  style={{ borderColor: 'rgba(127,211,234,0.5)' }}
                />
              </div>
              <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(237,243,245,0.6)' }}>
                fig. 00 — marca del taller
              </p>
            </Reveal>
            <div className="space-y-0 border-t-2" style={{ borderColor: 'rgba(127,211,234,0.3)' }}>
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.cod} delay={i * 80}>
                  <article
                    className="grid grid-cols-[52px_1fr] gap-4 md:gap-6 py-5 border-b-2 items-start"
                    style={{ borderColor: 'rgba(127,211,234,0.18)' }}
                  >
                    <span className={`${mono.className} text-xs md:text-sm pt-0.5`} style={{ color: '#7FD3EA' }}>
                      {s.cod}
                    </span>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1.5 md:gap-6">
                      <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: '#EDF3F5' }}>
                        {s.name}
                      </h3>
                      <p className="text-sm leading-relaxed md:max-w-[52%] md:text-right" style={{ color: 'rgba(237,243,245,0.75)' }}>
                        {s.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trabajos en terreno: láminas del plano ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ ...GRID, backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Láminas de terreno</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
                Instalado,
                <br />
                <span style={{ color: C.cianOscuro }}>no dibujado</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Fotos de sus propias fichas: fachadas espejo, cierres de
                terraza, ventanales en obra y el taller donde se corta cada
                paño.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.cota} delay={i * 80}>
                <figure>
                  <div className="relative border-2" style={{ borderColor: C.line }}>
                    <img
                      src={t.src}
                      alt={`${t.name} — trabajo de Thonyglass en Talca`}
                      loading="lazy"
                      className="w-full object-cover aspect-[4/3]"
                    />
                    <span
                      className={`${mono.className} absolute bottom-2 left-2 text-[8px] md:text-[9px] uppercase tracking-[0.16em] px-2 py-1`}
                      style={{ backgroundColor: 'rgba(13,42,51,0.88)', color: '#7FD3EA' }}
                    >
                      {t.cota}
                    </span>
                  </div>
                  <figcaption className="pt-2.5 text-xs md:text-sm font-medium leading-snug" style={{ color: C.ink }}>
                    {t.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El taller llega: furgón ── */}
      <section style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="relative">
              <div className="flex items-end gap-2 mb-2">
                <span className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.cianOscuro }}>
                  el taller llega
                </span>
                <Ruler color={C.cianOscuro} className="flex-1 opacity-70" />
              </div>
              <img
                src={`${IMG}/furgon.webp`}
                alt="Furgón de Thonyglass con el letrero ATG y el teléfono de contacto"
                loading="lazy"
                className="w-full object-cover aspect-[4/3] border-2"
                style={{ borderColor: C.ink }}
              />
              <p className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.18em] mt-2.5`} style={{ color: C.muted }}>
                fig. 07 — retiro, medición e instalación a domicilio
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow>Cómo se trabaja</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Medida, corte
              <br />
              <span style={{ color: C.cianOscuro }}>e instalación</span>
            </h2>
            <ol className="space-y-4">
              {[
                { n: '01', t: 'Se conversa el trabajo por WhatsApp y se agenda la visita.' },
                { n: '02', t: 'Se toma la medida del vano en terreno.' },
                { n: '03', t: 'El taller fabrica y corta a la medida.' },
                { n: '04', t: 'El furgón llega e instala — tal como sale en las fotos.' },
              ].map((p) => (
                <li key={p.n} className="flex gap-4 items-start">
                  <span className={`${mono.className} text-xs pt-1`} style={{ color: C.cianOscuro }}>{p.n}</span>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>{p.t}</p>
                </li>
              ))}
            </ol>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold inline-block mt-6 text-sm px-6 py-3 rounded-md transition-transform active:scale-95 tap-44"
              style={{ backgroundColor: C.cianOscuro, color: '#FFFFFF' }}
            >
              Agendar medición →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones en Google</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              {BIZ.rating}★ en {BIZ.reviews} reseñas
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Ficha chica pero con clientes que vuelven por el precio y la
              puntualidad — lo que más repiten las reseñas.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.cianOscuro, textDecorationColor: 'rgba(12,113,145,0.35)' }}
            >
              Leer la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-4">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} delay={100 + i * 90}>
                <figure
                  className="p-6 border-2 bg-white"
                  style={{ borderColor: C.line, borderLeftColor: C.cian, borderLeftWidth: 4 }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {t.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto: la carta de ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>El taller y el teléfono</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#EDF3F5' }}>
              13 1/2 Oriente,
              <br />
              <span style={{ color: '#7FD3EA' }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(237,243,245,0.85)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#EDF3F5', textDecorationColor: 'rgba(237,243,245,0.4)' }}>
                {BIZ.phoneDisplay}
              </a>
              <br />
              <a href={`mailto:${BIZ.email}`} className="font-semibold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#EDF3F5', textDecorationColor: 'rgba(237,243,245,0.4)' }}>
                {BIZ.email}
              </a>
            </address>
            <dl className="mb-8 border-t-2" style={{ borderColor: 'rgba(127,211,234,0.3)' }}>
              {HORARIO.map((h) => (
                <div key={h.dia} className="flex justify-between gap-4 py-2.5 border-b text-sm" style={{ borderColor: 'rgba(127,211,234,0.18)' }}>
                  <dt style={{ color: 'rgba(237,243,245,0.8)' }}>{h.dia}</dt>
                  <dd className={`${mono.className}`} style={{ color: '#7FD3EA' }}>{h.hora}</dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-md transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.cianOscuro, color: '#FFFFFF' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-md border-2 tap-44"
                style={{ borderColor: 'rgba(237,243,245,0.5)', color: '#EDF3F5' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-2 min-h-[320px] h-full" style={{ borderColor: 'rgba(127,211,234,0.4)', backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EDF3F5' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(237,243,245,0.14)' }}>
          <div>
            <p className={`${display.className} text-2xl mb-2 flex items-center gap-3`}>
              <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 object-cover" aria-hidden="true" />
              {BIZ.short}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,243,245,0.78)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(237,243,245,0.78)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(237,243,245,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(237,243,245,0.68)' }}>
            Datos de la ficha pública de Google y del letrero del local; descripciones de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
