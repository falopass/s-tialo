import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «el cuaderno de la consulta». Yaritza es psicóloga
 * y escritora: la página se compone como un libro abierto — índice con
 * líderes de puntos y precios, notas al margen, citas como epígrafes.
 * Alegreya (serif de libro) lleva la voz; IBM Plex Sans el texto corrido
 * y Plex Mono las fichas. Papel salvia, tinta pino y terracota de lápiz.
 */
const C = {
  paper: '#EEF0EA',
  card: '#F8F9F4',
  soft: '#E2E8E0',
  ink: '#23302A',
  pine: '#2F4A3C',
  deep: '#18271F',
  accent: '#A6522C',
  muted: '#5A675E',
  line: 'rgba(35,48,42,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'psic-yaritza-daney-pino-d-az',
  title: 'Yaritza Pino — Psicóloga clínica en Talca',
  description:
    'Psicóloga clínica en Av. Dos Sur 870, Talca. Sesiones presenciales y online desde los 6 años. 5,0★ en Google. Agenda por WhatsApp o Encuadrado.',
  image: `${IMG}/retrato.webp`,
})

const NAV_LINKS = [
  { label: 'Sesiones', href: '#sesiones' },
  { label: 'Enfoque', href: '#enfoque' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'La consulta', href: '#consulta' },
]

const SESIONES = [
  {
    num: '01',
    name: 'Atención psicológica',
    detail: 'Presencial · 50 minutos',
    price: '$32.000',
  },
  {
    num: '02',
    name: 'Niños, niñas y adolescentes',
    detail: 'Presencial · 50 minutos',
    price: '$28.000',
  },
  {
    num: '03',
    name: 'Estudiantes universitarios',
    detail: 'Presencial · 50 minutos',
    price: '$28.000',
  },
  {
    num: '04',
    name: 'Personas mayores (+60 años)',
    detail: 'Presencial · 50 minutos',
    price: '$26.000',
  },
  {
    num: '05',
    name: 'Evaluación WISC-V',
    detail: 'Paquete de 4 sesiones',
    price: '$118.000',
  },
  {
    num: '06',
    name: 'Test de Lüscher',
    detail: 'Paquete de 2 sesiones',
    price: '$82.000',
  },
]

const ENFOQUE = [
  {
    num: 'i.',
    title: 'Cognitivo conductual y junguiano',
    desc: 'Trabaja lo consciente y lo inconsciente: lo que te pasa hoy y lo que se repite debajo. Sesiones semanales o quincenales, según lo que necesites.',
  },
  {
    num: 'ii.',
    title: 'Niñez y adolescencia, desde los 6',
    desc: 'Inteligencia emocional: regulación, autoestima y motivación, con material pensado para los más chicos. También informes para el colegio cuando hacen falta.',
  },
  {
    num: 'iii.',
    title: 'Sueños y evaluación psicológica',
    desc: 'Procesamiento de experiencias oníricas — sueños y pesadillas que vuelven — junto a instrumentos de evaluación (WISC-V, Lüscher) e informes.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Completamente recomendable. Es una profesional muy cercana, genera confianza y realmente se nota el compromiso que tiene con sus pacientes.',
    author: 'Katerin Alexandra Pino Aguilera',
  },
  {
    text: 'Fue muy acertada y me ayudó a hacer consciente un mensaje que definitivamente necesitaba ver, porque lo más increíble es que después de eso no volví a tener ese sueño. Estoy demasiado agradecida con ella.',
    author: 'Carolina Galdamez',
  },
  {
    text: 'Es muy simpática, respetuosa, preocupada y confiable, su oficina es muy acogedora. Me siento muy cómoda con ella.',
    author: 'Lia Morales',
  },
  {
    text: 'Me siento muy cómodo contándole mis cosas, es cercana y da confianza. Siempre me ayuda a entender mejor lo que me pasa.',
    author: 'Diego Mora Espinoza',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '9:00–21:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

const FOTOS = [
  { src: `${IMG}/estante.webp`, alt: 'Estante de la consulta con libros y material de trabajo infantil' },
  { src: `${IMG}/libros.webp`, alt: 'Libros sobre emociones y sentimientos usados en las sesiones' },
  { src: `${IMG}/escritorio.webp`, alt: 'Escritorio de trabajo de la consulta de Yaritza' },
]

function Note({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <path d="M5 3.5h14v17H5z" />
      <path d="M9 3.5v17" />
      <path d="M12.5 8h3.5M12.5 12h3.5M12.5 16h2.5" />
    </svg>
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#E8C9B4' : color ?? C.accent }}
    >
      <Note className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function YaritzaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span>
            {BIZ.short}
            <span className={`${displayItalic.className} ml-2 text-sm font-normal`} style={{ color: 'inherit', opacity: 0.75 }}>
              psicóloga clínica
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(238,240,234,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.pine,
          btnInk: '#F4F6F2',
        }}
      />

      {/* ── Portada ── */}
      <section id="inicio" className="relative pt-[92px] md:pt-[110px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <Eyebrow>Psicóloga clínica · Talca</Eyebrow>
              <h1
                className={`${display.className} font-black leading-[1.04] tracking-[-0.01em] text-[clamp(2.5rem,8vw,4.6rem)] mb-6`}
                style={{ color: C.ink }}
              >
                Conversar
                <br />
                también <span className={displayItalic.className} style={{ color: C.accent }}>ordena.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-4" style={{ color: C.muted }}>
                Yaritza Pino acompaña a niños desde los 6 años, jóvenes y
                adultos en su consulta de Avenida Dos Sur — y online. También
                escribe: lo que se ordena en sesión muchas veces empieza por
                poder nombrarlo.
              </p>
              <div className={`${mono.className} flex flex-wrap gap-x-5 gap-y-1.5 text-[11px] uppercase tracking-[0.14em] mb-8`} style={{ color: C.pine }}>
                <span>magíster · diplomada</span>
                <span>presencial y online</span>
                <span>atención FONASA</span>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BIZ.agenda}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.pine, color: '#F4F6F2' }}
                >
                  Agendar una hora
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                  style={{ borderColor: C.pine, color: C.pine }}
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative max-w-[340px] mx-auto md:ml-auto">
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 rotate-[-4deg] opacity-70"
                  style={{ backgroundColor: '#D9DFD2', boxShadow: '0 1px 3px rgba(35,48,42,0.15)' }}
                  aria-hidden="true"
                />
                <img
                  src={`${IMG}/retrato.webp`}
                  alt="Yaritza Daney Pino Díaz, psicóloga clínica en Talca"
                  loading="eager"
                  fetchPriority="high"
                  className="relative w-full aspect-[3/4] object-cover"
                  style={{ boxShadow: '0 18px 40px -18px rgba(35,48,42,0.45)' }}
                />
                <figcaption
                  className={`${displayItalic.className} text-center text-sm mt-3`}
                  style={{ color: C.muted }}
                >
                  en su consulta de Dos Sur, Talca
                </figcaption>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -bottom-4 -left-3 flex items-center gap-2 text-xs font-semibold px-4 py-2.5 shadow-lg tap-44"
                  style={{ backgroundColor: C.card, color: C.ink }}
                >
                  <Stars value={5} color={C.accent} className="w-[12px] h-[12px]" />
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </a>
              </figure>
            </Reveal>
          </div>
        </div>
        {/* Solapa con modalidades */}
        <div className="mt-12 border-y" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
            <span style={{ color: C.pine }}>{BIZ.address}</span>
            <span>Lun–Vie 9:00–21:00</span>
            <span>desde los 6 años</span>
            <span>sesiones de 50 min</span>
            <span className="hidden md:inline" style={{ color: C.accent }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Índice de sesiones ── */}
      <section id="sesiones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Índice</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-12">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Sesiones con nombre
              <br />
              <span style={{ color: C.pine }}>y precio</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Valores y modalidades publicados por ella en su perfil de
              Encuadrado — el mismo lugar donde se agenda la hora.
            </p>
          </div>
        </Reveal>
        <ol>
          {SESIONES.map((s, i) => (
            <Reveal key={s.num} delay={i * 60}>
              <li className="group border-b py-5 md:py-6 flex items-baseline gap-4 md:gap-6" style={{ borderColor: C.line }}>
                <span className={`${mono.className} text-xs md:text-sm shrink-0`} style={{ color: C.accent }}>
                  {s.num}
                </span>
                <div className="min-w-0">
                  <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-tight`} style={{ color: C.ink }}>
                    {s.name}
                  </h3>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                    {s.detail}
                  </p>
                </div>
                <span
                  className="flex-1 border-b border-dotted mx-2 mb-1.5"
                  style={{ borderColor: C.muted, opacity: 0.5 }}
                  aria-hidden="true"
                />
                <span className={`${display.className} font-black text-xl md:text-2xl shrink-0`} style={{ color: C.pine }}>
                  {s.price}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={BIZ.agenda}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.accent, color: '#FBF5EF' }}
            >
              Ver horas disponibles →
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              precios en CLP · encuadrado.com
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Cómo acompaña ── */}
      <section id="enfoque" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Notas al margen</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#EEF0EA' }}>
                Cómo acompaña
                <br />
                <span className={displayItalic.className} style={{ color: '#E8C9B4' }}>Yaritza</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(238,240,234,0.8)' }}>
                En su propia descripción: un abordaje de las dificultades del
                día a día integrando lo consciente y lo inconsciente.
              </p>
            </div>
          </Reveal>
          <ol className="grid md:grid-cols-3 gap-5 md:gap-6">
            {ENFOQUE.map((e, i) => (
              <Reveal key={e.title} delay={i * 110}>
                <li
                  className="border p-6 md:p-7 h-full"
                  style={{ borderColor: 'rgba(238,240,234,0.16)', backgroundColor: 'rgba(238,240,234,0.04)' }}
                >
                  <span className={`${displayItalic.className} block text-3xl mb-4`} style={{ color: '#E8C9B4' }}>
                    {e.num}
                  </span>
                  <h3 className={`${display.className} font-bold text-xl mb-3`} style={{ color: '#EEF0EA' }}>
                    {e.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(238,240,234,0.85)' }}>
                    {e.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── La consulta en imágenes ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>El espacio</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Una oficina
              <br />
              <span style={{ color: C.pine }}>que da confianza</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Fotos reales de su ficha de Google: el escritorio junto al
              ventanal y el material con que trabaja con los más chicos.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          <Reveal className="col-span-2 row-span-2">
            <img
              src={`${IMG}/consultorio.webp`}
              alt="Escritorio de la consulta junto al ventanal con vista a Talca"
              className="w-full h-full object-cover aspect-[4/5] md:aspect-auto"
              style={{ boxShadow: '0 14px 30px -16px rgba(35,48,42,0.4)' }}
            />
          </Reveal>
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={100 + i * 90}>
              <img
                src={f.src}
                alt={f.alt}
                className="w-full object-cover aspect-[4/5]"
                style={{ boxShadow: '0 10px 24px -14px rgba(35,48,42,0.35)' }}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow color={C.pine}>Epígrafes</Eyebrow>
              <h2 className={`${display.className} font-black text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                {BIZ.rating}★ en Google
              </h2>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Las {BIZ.reviews} reseñas de su ficha hablan de lo mismo:
                cercanía, confianza y una consulta acogedora.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.pine, textDecorationColor: 'rgba(47,74,60,0.35)' }}
              >
                Leer la ficha en Google →
              </a>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} delay={100 + i * 100}>
                  <figure
                    className="p-6 border h-full"
                    style={{ backgroundColor: C.card, borderColor: C.line }}
                  >
                    <Stars value={5} color={C.accent} className="w-[14px] h-[14px] mb-3" />
                    <blockquote className={`${displayItalic.className} text-[15px] md:text-base leading-relaxed mb-4`} style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.pine }}>
                      {t.author} · Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── La consulta: dirección, horario, mapa ── */}
      <section id="consulta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
        <Reveal>
          <Eyebrow>Dónde y cuándo</Eyebrow>
          <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
            Dos Sur 870,
            <br />
            <span style={{ color: C.pine }}>oficina 505</span>
          </h2>
          <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
            {BIZ.address}
            <br />
            {BIZ.city}, {BIZ.region}, Chile
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(35,48,42,0.3)' }}>
              {BIZ.phoneDisplay}
            </a>
          </address>
          <ul className="space-y-2.5 mb-8">
            {HORAS.map((h) => (
              <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.accent} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
              className={`${display.className} font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.pine, color: '#F4F6F2' }}
            >
              Cómo llegar →
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold text-sm px-6 py-3 border-2 tap-44`}
              style={{ borderColor: 'rgba(35,48,42,0.35)', color: C.ink }}
            >
              WhatsApp
            </a>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <div className="overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.card }}>
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full min-h-[320px]"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5`} style={{ color: '#E8C9B4' }}>
              Primera sesión
            </p>
            <h2 className={`${display.className} font-black text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.05] mb-6`} style={{ color: '#EEF0EA' }}>
              La primera vez
              <br />
              <span className={displayItalic.className} style={{ color: '#E8C9B4' }}>cuesta menos de lo que parece.</span>
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-9 leading-relaxed" style={{ color: 'rgba(238,240,234,0.85)' }}>
              Agenda directo en Encuadrado o escribe por WhatsApp: ella misma
              responde y coordinan el día y la modalidad que te acomode.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={BIZ.agenda}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-8 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.accent, color: '#FBF5EF' }}
              >
                Agendar en Encuadrado
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-8 py-3 border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(238,240,234,0.45)', color: '#EEF0EA' }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EEF0EA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5 border-t" style={{ borderColor: 'rgba(238,240,234,0.14)' }}>
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2 flex items-center gap-3`}>
              <Note className="w-5 h-5" color="#E8C9B4" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(238,240,234,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(238,240,234,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(238,240,234,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(238,240,234,0.72)' }}>
            Datos de su ficha pública de Google y de su perfil de Encuadrado; textos de acompañamiento de muestra.
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
