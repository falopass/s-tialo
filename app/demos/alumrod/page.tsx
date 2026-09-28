import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F2F5F7',
  soft: '#E2EAEE',
  card: '#FFFFFF',
  steel: '#14222B',
  steelDeep: '#0B151B',
  teal: '#0E7490',
  tealDeep: '#0B6076',
  cyan: '#67E8F9',
  ink: '#14222B',
  muted: '#54646E',
  line: 'rgba(20,34,43,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'alumrod',
  title: 'Aluminios Alumrod — Aluminio, vidrios y termopanel en Talca',
  description:
    'Aluminios Alumrod en Diez Oriente 1712, Talca: ventanas, cierres de terraza, mamparas, vitrinas y vidrios a medida. 4,6★ en Google. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/instalacion.webp`,
    tag: 'terraza',
    name: 'Cierres de terraza',
    desc: 'Cierres en aluminio y vidrio para usar la terraza todo el año: correderas y paños fijos a medida.',
  },
  {
    src: `${IMG}/ventana-exterior.webp`,
    tag: 'ventanas',
    name: 'Ventanas de aluminio',
    desc: 'Correderas, proyectantes y paños fijos fabricados a la medida exacta del vano.',
  },
  {
    src: `${IMG}/ventana-madera.webp`,
    tag: 'termopanel',
    name: 'Termopanel y DVH',
    desc: 'Doble vidrio hermético y perfiles tipo madera: mejor aislación térmica y acústica para la casa.',
  },
  {
    src: `${IMG}/cierre-terraza.webp`,
    tag: 'puertas',
    name: 'Puertas y correderas',
    desc: 'Puertas de acceso y correderas de aluminio con vidrio templado, instaladas niveladas y selladas.',
  },
  {
    src: `${IMG}/vitrina.webp`,
    tag: 'comercio',
    name: 'Vitrinas y locales',
    desc: 'Vitrinas, ventanales y fachadas de aluminio para tiendas y locales comerciales.',
  },
  {
    src: `${IMG}/instalador.webp`,
    tag: 'vidrios',
    name: 'Vidrios y mamparas a medida',
    desc: 'Corte de vidrio y espejo a medida, mamparas de baño y repuestos: el tamaño que necesites.',
  },
]

const PASOS = [
  {
    title: 'Medición',
    desc: 'Mandas el ancho y el alto del vano por WhatsApp, o coordinamos una visita para medir en terreno.',
  },
  {
    title: 'Cotización',
    desc: 'Te respondemos con valor y plazo por escrito, antes de fabricar nada.',
  },
  {
    title: 'Fabricación',
    desc: 'Cada pieza se fabrica a la medida exacta en el taller de Diez Oriente.',
  },
  {
    title: 'Instalación',
    desc: 'Instalamos nivelado, con sellos terminados, y dejamos el espacio limpio.',
  },
]

const TRABAJOS = [
  { src: `${IMG}/cierre-obra.webp`, label: 'Instalación y despacho a domicilio' },
  { src: `${IMG}/furgon.webp`, label: 'Ventana corredera instalada' },
  { src: `${IMG}/hero.webp`, label: 'Cierre acristalado de terraza' },
]

const TESTIMONIALS = [
  {
    text: 'Excelente trabajo, responsable, muy amable y excelente precio… recomendable 100%.',
    author: 'César Moya',
  },
  {
    text: 'Muchas gracias, entregaron un excelente servicio.',
    author: 'Antonio',
  },
  {
    text: 'Muy contento con el trabajo realizado. Recomendado.',
    author: 'Francisco Valenzuela',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–19:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

function Pane({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" />
      <path d="M3 12 h18 M12 3 v18" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.cyan : C.tealDeep }}
    >
      <Pane className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function AlumrodPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(11,21,27,0.94)',
          ink: '#F2F5F7',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.cyan,
          btnInk: '#0B151B',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.steelDeep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Cierre de terraza en aluminio negro instalado por Aluminios Alumrod"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(11,21,27,0.72) 0%, rgba(11,21,27,0.45) 38%, rgba(11,21,27,0.93) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(242,245,247,0.96)', color: C.steel }}
            >
              <Stars value={4.6} color={C.teal} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Aluminio y vidrios · Talca</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#F2F5F7' }}
            >
              Ventanas y terrazas
              <br />
              <span style={{ color: C.cyan }}>hechas a medida.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(242,245,247,0.88)' }}>
              Taller de aluminio y vidrios en Diez Oriente, Talca.
              Cada pieza se fabrica a la medida de tu vano y se instala
              sellada y nivelada.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.cyan, color: '#0B151B' }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#trabajos"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(242,245,247,0.55)', color: '#F2F5F7' }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(242,245,247,0.22)', backgroundColor: 'rgba(11,21,27,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(242,245,247,0.9)' }}>
            <span>{BIZ.address}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.cyan }} aria-hidden="true" />
              Lun–Vie 9:00–19:00
            </span>
            <span>Despacho a domicilio</span>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.steel }}>
              Del vano
              <br />
              <span style={{ color: C.teal }}>a la instalación</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Fabricación e instalación a medida. Las fotos son de
              trabajos reales publicados por el taller.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s) => (
            <li
              key={s.name}
              className="group rounded-2xl overflow-hidden border h-full"
              style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 6px rgba(20,34,43,0.06)' }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={s.src}
                  alt={s.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  className={`${display.className} absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full shadow-sm`}
                  style={{ backgroundColor: 'rgba(11,21,27,0.9)', color: C.cyan }}
                >
                  {s.tag}
                </span>
              </div>
              <div className="p-5 md:p-6">
                <h3 className={`${display.className} font-extrabold text-xl mb-2`} style={{ color: C.steel }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Cómo trabajamos ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.steel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajamos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F2F5F7' }}>
                Cada pieza
                <br />
                <span style={{ color: C.cyan }}>a tu medida</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(242,245,247,0.85)' }}>
                Cuatro pasos, siempre iguales. Así sabes qué esperar
                desde que escribes hasta que queda instalado.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-2xl border p-6 h-full"
                  style={{ borderColor: 'rgba(242,245,247,0.16)', backgroundColor: 'rgba(242,245,247,0.04)' }}
                >
                  <span
                    className={`${display.className} block font-black text-4xl mb-4`}
                    style={{ color: i === 0 ? C.cyan : 'rgba(103,232,249,0.5)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-extrabold text-lg mb-2`} style={{ color: '#F2F5F7' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(242,245,247,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Trabajos reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Trabajos</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.steel }}>
              Instalaciones
              <br />
              <span style={{ color: C.teal }}>reales</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Fotos publicadas por el taller en su Instagram{' '}
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.teal, textDecorationColor: 'rgba(14,116,144,0.35)' }}
              >
                @alumrodaluminios
              </a>{' '}
              y su ficha de Google.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {TRABAJOS.map((t, i) => (
            <Reveal key={t.label} delay={i * 100}>
              <li className="group rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={t.src}
                    alt={`${t.label} — ${BIZ.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className="absolute bottom-0 inset-x-0 text-xs md:text-sm font-semibold px-4 py-3"
                    style={{ background: 'linear-gradient(0deg, rgba(11,21,27,0.85) 0%, rgba(11,21,27,0) 100%)', color: '#F2F5F7' }}
                  >
                    {t.label}
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="border-t pt-14 md:pt-20" style={{ borderColor: C.line }}>
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.steel }}>
                {BIZ.rating}★ en Google
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Reseñas reales publicadas en la ficha de Google de{' '}
                {BIZ.name}: {BIZ.reviews} opiniones de clientes.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.teal, textDecorationColor: 'rgba(14,116,144,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} delay={120 + i * 110}>
                  <figure
                    className="rounded-2xl p-6 md:p-7 border"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <Stars value={5} color={C.teal} className="w-[15px] h-[15px] mb-3" />
                    <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.teal }}>
                        {t.author} · Reseña de Google
                      </span>
                      <Pane className="w-4 h-4 shrink-0" color={C.cyan} />
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Ubicación y horarios</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.steel }}>
              Diez Oriente,
              <br />
              <span style={{ color: C.teal }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.steel, textDecorationColor: 'rgba(20,34,43,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.teal} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.teal, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(20,34,43,0.35)', color: C.steel }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.steelDeep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-black text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#F2F5F7' }}>
              Mide el vano
              <br />
              <span style={{ color: C.cyan }}>y cotiza al tiro</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(242,245,247,0.9)' }}>
              Manda el ancho y el alto por WhatsApp — si puedes, con una
              foto del lugar — y te respondemos con valor y plazo.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.cyan, color: '#0B151B' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.steelDeep, color: '#F2F5F7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2 flex items-center gap-3`}>
              <Pane className="w-5 h-5" color={C.cyan} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,245,247,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(242,245,247,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,245,247,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(242,245,247,0.75)' }}>
            Datos de la ficha pública de Google y del Instagram del taller; descripciones de servicios de muestra.
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
