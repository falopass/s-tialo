import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_CURSO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  paper: '#EDEBE4',
  paperSoft: '#E4E1D8',
  ink: '#1C2025',
  inkSoft: '#2A2F36',
  amber: '#D98E1B',
  amberDeep: '#8A5A0E',
  muted: '#5B6067',
  line: 'rgba(28,32,37,0.18)',
  lineDark: 'rgba(237,235,228,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'halcon-gris-seguridad',
  title: 'Halcón Gris Seguridad — Seguridad y cursos de guardias en Talca',
  description:
    'Seguridad privada y cursos de formación y reentrenamiento de guardias en Edificio Cervantes, 1 Oriente 1120 Of. 210, Talca. Consultas por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El curso', href: '#curso' },
  { label: 'Oficina', href: '#oficina' },
  { label: 'Contacto', href: '#contacto' },
]

const ALUMNOS = [
  {
    name: 'Curso Mayo · Halcón Gris',
    text: 'Las clases son bien dinámicas, los profesores un 70, aprendimos muchísimo. Habían alumnos por primera vez, otros renovando, el ambiente es súper entretenido.',
    tag: 'alumno del curso',
  },
  {
    name: 'Rosa Acuña',
    text: '100% recomendable hacer el curso con ellos: profesor con muy buena disposición de explicar, clases muy didácticas y entretenidas.',
    tag: 'alumna del curso',
  },
  {
    name: 'Matías Ramírez',
    text: 'Hice mi curso de reentrenamiento, súper buenas las clases. Me explicaron y me enseñaron harto más que otros lados donde había hecho el curso.',
    tag: 'reentrenamiento',
  },
]

const FOTOS = [
  {
    src: `${IMG}/fachada.webp`,
    alt: 'Fachada del Edificio Cervantes en 1 Oriente, Talca, donde está la oficina de Halcón Gris',
    cap: 'Edificio Cervantes, 1 Oriente 1120 — la oficina está en el piso 2',
  },
  {
    src: `${IMG}/calle.webp`,
    alt: 'Vista lateral del Edificio Cervantes desde la vereda de 1 Oriente',
    cap: 'La entrada por 1 Oriente, a pasos de Plaza de Armas',
  },
  {
    src: `${IMG}/centro.webp`,
    alt: 'Calle 1 Oriente con vista hacia la Plaza de Armas de Talca',
    cap: '1 Oriente mirando a la plaza: el edificio a la derecha',
  },
]

const FichaRow = ({ k, v }: { k: string; v: React.ReactNode }) => (
  <div className="flex justify-between gap-4 py-2.5 border-b last:border-b-0" style={{ borderColor: C.lineDark }}>
    <span className="text-[10px] tracking-[0.28em] uppercase pt-1" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(237,235,228,0.55)' }}>{k}</span>
    <span className="text-[14px] text-right" style={{ color: C.paper }}>{v}</span>
  </div>
)

export default function HalconGrisPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Halcón<span style={{ color: C.amber }}>Gris</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
      />

      {/* ── HERO: credencial + ficha ─────────────────────── */}
      <section id="inicio" className="relative pt-[96px] md:pt-[128px] pb-12 md:pb-16 overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, ${C.line} 0 1px, transparent 1px 64px)`,
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7">
            <Reveal>
              <p
                className="text-[11px] md:text-xs tracking-[0.34em] uppercase"
                style={{ fontFamily: 'var(--font-mono)', color: C.amberDeep }}
              >
                {BIZ.rubro} · {BIZ.city}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className="mt-4 text-[34px] md:text-[64px] leading-[1.02] uppercase font-semibold"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Guardias formados en el <span style={{ color: C.amberDeep }}>centro de Talca</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
                Empresa talquina de seguridad privada que además forma guardias:
                curso inicial y de reentrenamiento, con clases presenciales en su oficina
                del Edificio Cervantes.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_CURSO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold"
                  style={{ backgroundColor: C.ink, color: C.paper }}
                >
                  Consultar por el curso
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cotizar seguridad
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="md:col-span-5">
            {/* Ficha técnica — dossier */}
            <div
              className="relative p-6 md:p-7"
              style={{ backgroundColor: C.ink, color: C.paper }}
            >
              <div
                aria-hidden="true"
                className="absolute -top-3 right-6 w-[86px] h-[86px] rounded-full border-2 flex items-center justify-center text-center"
                style={{ borderColor: C.amber, color: C.amber, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '0.14em', transform: 'rotate(8deg)' }}
              >
                FICHA<br />VERIFICADA<br />★ 5.0
              </div>
              <p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.amber }}>
                Expediente comercial
              </p>
              <div className="mt-4">
                <FichaRow k="Empresa" v={BIZ.name} />
                <FichaRow k="Rubro" v="Seguridad privada" />
                <FichaRow k="Oficina" v="1 Ote. 1120, Of. 210" />
                <FichaRow k="Horario" v={BIZ.hours} />
                <FichaRow k="Teléfono" v={BIZ.phoneDisplay} />
                <FichaRow
                  k="Reputación"
                  v={
                    <span className="inline-flex items-center gap-2">
                      <Stars value={5} color={C.amber} className="w-3.5 h-3.5" />
                      {BIZ.rating} · {BIZ.ratingCount}
                    </span>
                  }
                                 />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CINTA ────────────────────────────────────────── */}
      <div className="py-2.5" style={{ backgroundColor: C.amber }}>
        <p
          className="text-center text-[11px] md:text-[12px] tracking-[0.3em] uppercase font-semibold"
          style={{ fontFamily: 'var(--font-mono)', color: C.ink }}
        >
          Formación de guardias · Servicios de seguridad · Talca
        </p>
      </div>

      {/* ── DOS LÍNEAS DE TRABAJO ────────────────────────── */}
      <section id="servicios" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2
              className="text-[30px] md:text-[46px] uppercase leading-[1.02] font-semibold"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Dos frentes, <span style={{ color: C.amberDeep }}>una misma casa</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-2 gap-5">
            <Reveal>
              <article className="h-full p-6 md:p-8 border-t-4" style={{ backgroundColor: C.paperSoft, borderColor: C.amber }}>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true" fill="none" stroke={C.ink} strokeWidth="1.6">
                    <path d="M12 2.5l8 3v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10v-6l8-3z" />
                    <path d="M8.5 12l2.4 2.4L15.5 9.8" />
                  </svg>
                  <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.muted }}>
                    Para empresas
                  </p>
                </div>
                <h3 className="mt-3 text-[24px] md:text-[30px] uppercase font-semibold leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  Seguridad privada
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  Servicios de seguridad para empresas y recintos, coordinados desde la oficina
                  central en 1 Oriente. Evaluación y cotización directa por WhatsApp.
                </p>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 mt-5 inline-flex items-center h-11 px-5 text-[14px] font-semibold" style={{ backgroundColor: C.ink, color: C.paper }}>
                  Cotizar servicio
                </a>
              </article>
            </Reveal>
            <Reveal delay={80}>
              <article className="h-full p-6 md:p-8 border-t-4" style={{ backgroundColor: C.ink, borderColor: C.amber, color: C.paper }}>
                <div className="flex items-center gap-3">
                  <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true" fill="none" stroke={C.amber} strokeWidth="1.6">
                    <path d="M12 4L2.5 8.7 12 13.4l9.5-4.7L12 4z" />
                    <path d="M5.5 10.5V15c0 1.7 2.9 3 6.5 3s6.5-1.3 6.5-3v-4.5" />
                    <path d="M21.5 9v5.5" />
                  </svg>
                  <p className="text-[11px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: 'rgba(237,235,228,0.6)' }}>
                    Para guardias
                  </p>
                </div>
                <h3 className="mt-3 text-[24px] md:text-[30px] uppercase font-semibold leading-tight" style={{ fontFamily: 'var(--font-display)', color: C.amber }}>
                  Cursos de formación
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: 'rgba(237,235,228,0.72)' }}>
                  Curso de formación inicial y de reentrenamiento para guardias de seguridad,
                  con clases presenciales y acompañamiento durante todo el proceso.
                </p>
                <a href={WA_LINK_CURSO} target="_blank" rel="noopener noreferrer" className="tap-44 mt-5 inline-flex items-center h-11 px-5 text-[14px] font-semibold" style={{ backgroundColor: C.amber, color: C.ink }}>
                  Consultar por el curso
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EL CURSO SEGÚN SUS ALUMNOS ───────────────────── */}
      <section id="curso" className="py-14 md:py-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex items-end justify-between gap-4 flex-wrap">
              <h2 className="text-[30px] md:text-[46px] uppercase leading-[1.02] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                El curso, dicho por <span style={{ color: C.amber }}>sus alumnos</span>
              </h2>
              <p className="inline-flex items-center gap-2 text-[13px]" style={{ color: 'rgba(237,235,228,0.6)', fontFamily: 'var(--font-mono)' }}>
                <Stars value={5} color={C.amber} className="w-3.5 h-3.5" />
                {BIZ.rating} en Google · {BIZ.ratingCount}
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {ALUMNOS.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <figure className="h-full p-6 flex flex-col border" style={{ borderColor: C.lineDark }}>
                  <span className="text-[10px] tracking-[0.26em] uppercase px-2 py-1 self-start" style={{ fontFamily: 'var(--font-mono)', backgroundColor: C.amber, color: C.ink }}>
                    {r.tag}
                  </span>
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.paper }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 text-[12px] tracking-[0.16em] uppercase" style={{ color: 'rgba(237,235,228,0.55)', fontFamily: 'var(--font-mono)' }}>
                    {r.name} · Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-6 text-[12px] tracking-[0.14em] uppercase" style={{ color: 'rgba(237,235,228,0.45)', fontFamily: 'var(--font-mono)' }}>
              Textos textuales de las opiniones publicadas en su ficha de Google Maps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── OFICINA / UBICACIÓN ──────────────────────────── */}
      <section id="oficina" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className="text-[30px] md:text-[46px] uppercase leading-[1.02] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Oficina 210, <span style={{ color: C.amberDeep }}>Edificio Cervantes</span>
            </h2>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Las clases y la atención funcionan en el segundo piso del Edificio Cervantes,
              1 Oriente 1120: media cuadra de la Plaza de Armas de Talca. Así se ve por fuera:
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 70}>
                <figure>
                  <div className="relative overflow-hidden border" style={{ borderColor: C.line, aspectRatio: '16/10' }}>
                    <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <figcaption className="mt-2 text-[12px] leading-snug" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="mt-8 grid md:grid-cols-2 gap-6 items-stretch">
              <div className="relative overflow-hidden border h-[280px] md:h-auto md:min-h-[320px]" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 md:p-7" style={{ backgroundColor: C.paperSoft }}>
                <p className="text-[10px] tracking-[0.3em] uppercase" style={{ fontFamily: 'var(--font-mono)', color: C.amberDeep }}>
                  Cómo llegar
                </p>
                <dl className="mt-4 space-y-3 text-[14px]">
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.24em] uppercase pt-1" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>Dirección</dt>
                    <dd>{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.24em] uppercase pt-1" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>Horario</dt>
                    <dd>{BIZ.hours}</dd>
                  </div>
                  <div className="flex gap-3">
                    <dt className="w-20 shrink-0 text-[10px] tracking-[0.24em] uppercase pt-1" style={{ color: C.muted, fontFamily: 'var(--font-mono)' }}>WhatsApp</dt>
                    <dd>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center h-11 px-5 text-[14px] font-semibold border"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CONTACTO ─────────────────────────────────────── */}
      <section id="contacto" className="py-12 md:py-16" style={{ backgroundColor: C.amber, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center gap-6 md:justify-between">
          <Reveal>
            <h2 className="text-[28px] md:text-[40px] uppercase leading-[1.02] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Un solo WhatsApp para todo
            </h2>
            <p className="mt-2 text-[14px] md:text-[15px] max-w-md" style={{ color: 'rgba(28,32,37,0.75)' }}>
              Cotización de servicios o cupo en el próximo curso: {BIZ.phoneDisplay}.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 inline-flex items-center h-12 px-7 text-[15px] font-semibold"
              style={{ backgroundColor: C.ink, color: C.paper }}
            >
              Escribir a Halcón Gris
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div>
            <p className="text-[15px] uppercase font-semibold" style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.04em' }}>
              Halcón<span style={{ color: C.amber }}>Gris</span> Seguridad
            </p>
            <p className="mt-1 text-[12px]" style={{ color: 'rgba(237,235,228,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </p>
          </div>
          <p className="text-[12px] max-w-sm" style={{ color: 'rgba(237,235,228,0.45)' }}>
            Sitio de ejemplo preparado por Sitiazo. Fotos exteriores: registro real de la cuadra (Google Street View).
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Escribir a Halcón Gris por WhatsApp" />
    </main>
  )
}
