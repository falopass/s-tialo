import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Motif } from '../kit'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  red: '#C1272D',
  redDeep: '#8E1B20',
  redSoft: '#F6E7E5',
  ink: '#4A4E52',
  inkDeep: '#2E3134',
  paper: '#F5F4F1',
  white: '#FFFFFF',
  orange: '#F26722',
  orangeInk: '#B5461A',
  orangeLight: '#FFB88C',
  muted: '#5E6266',
  lineLight: 'rgba(74,78,82,0.16)',
  lineDark: 'rgba(255,255,255,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-prosaluddental',
  title: 'Clínica ProSaludDental — Dentista en Linares',
  description: 'Clínica dental en Curapalihue, Linares, Maule. Evaluación, limpieza, restauraciones y ortodoncia con agenda puntual por teléfono.',
  image: '/demos/clinica-prosaluddental/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Valores', href: '#precios' },
  { label: 'Ubicación', href: '#contacto' },
]

const SERVICIOS = [
  {
    num: 'S-01',
    tag: 'diagnóstico',
    name: 'Evaluación y plan de tratamiento',
    desc: 'Revisión completa con diagnóstico claro y presupuesto por escrito antes de partir.',
  },
  {
    num: 'S-02',
    tag: 'prevención',
    name: 'Limpieza y restauraciones',
    desc: 'Destartraje, pulido y tapaduras para dejar tu dentadura sana y sin sorpresas.',
  },
  {
    num: 'S-03',
    tag: 'estética',
    name: 'Ortodoncia y estética dental',
    desc: 'Brackets, alineadores y blanqueamiento, con controles programados a la hora.',
  },
]

const RUTA = [
  {
    num: '01',
    title: 'Agenda',
    desc: 'Llámanos y te confirmamos la hora el mismo día.',
  },
  {
    num: '02',
    title: 'Confirmación',
    desc: 'Te recordamos tu cita antes, como un despacho bien coordinado.',
  },
  {
    num: '03',
    title: 'Atención puntual',
    desc: 'La hora que agendaste es la hora en que te atendemos.',
  },
  {
    num: '04',
    title: 'Control programado',
    desc: 'Salimos con próxima fecha agendada: el seguimiento también llega a tiempo.',
  },
]

const PRECIOS = [
  { name: 'Evaluación y diagnóstico', desc: 'Revisión completa y plan de tratamiento', price: 'desde $20.000' },
  { name: 'Limpieza dental profesional', desc: 'Destartraje y pulido', price: 'desde $35.000' },
  { name: 'Tapadura / restauración', desc: 'Por pieza, según complejidad', price: 'desde $45.000' },
  { name: 'Exodoncia simple', desc: 'Extracción de pieza comprometida', price: 'desde $40.000' },
  { name: 'Control de ortodoncia', desc: 'Visita de avance mensual', price: 'desde $30.000' },
  { name: 'Blanqueamiento dental', desc: 'En clínica o con kit domiciliario', price: 'a consultar' },
]

const OPINIONES = [
  {
    text: 'Agendé por teléfono, me confirmaron y llegué a la hora: ni un minuto de espera. Así da gusto ir al dentista.',
    author: 'Paciente de Linares',
  },
  {
    text: 'Me explicaron el presupuesto antes de empezar y cada control ha sido puntual. Ordenados de verdad.',
    author: 'Paciente del sector Curapalihue',
  },
  {
    text: 'Cumplen lo que prometen: hora agendada, hora atendida. Con niños eso vale oro.',
    author: 'Mamá de paciente',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.orangeLight : C.red }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
      <span aria-hidden="true">→</span>
    </p>
  )
}

function PhoneIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function ProSaludDentalPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(245,244,241,0.95)',
          ink: C.ink,
          line: C.lineLight,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero tipográfico (sin foto, fondo a sangre) ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col overflow-hidden"
        style={{ backgroundColor: C.red }}
      >
        {/* Rejilla gráfica */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 12.5%)',
          }}
          aria-hidden="true"
        />
        <svg className="absolute right-0 top-0 w-[330px] h-[330px] pointer-events-none" viewBox="-330 0 330 330" aria-hidden="true">
          <path d="M0 289.2 A209 209 0 0 1 -289.2 0" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeDasharray="6 6" />
        </svg>
        <span
          className={`${display.className} absolute -bottom-6 right-0 whitespace-nowrap leading-none font-extrabold pointer-events-none select-none text-[clamp(8rem,26vw,24rem)]`}
          style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.18)' }}
          aria-hidden="true"
        >
          DENTAL
        </span>

        {/* Rótulo superior tipo manifiesto */}
        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 pt-24 md:pt-28">
          <Reveal>
            <div
              className="flex items-baseline justify-between gap-4 border-y-2 py-3 text-[10px] md:text-xs uppercase tracking-[0.22em] font-bold"
              style={{ borderColor: 'rgba(255,255,255,0.55)', color: 'rgba(255,255,255,0.85)' }}
            >
              <span>Exp. {BIZ.postal}</span>
              <span className="hidden sm:inline">{BIZ.rubro}</span>
              <span className="hidden md:inline">Destino: sonrisa</span>
              <span>{BIZ.city} · Maule</span>
            </div>
          </Reveal>
        </div>

        <div className="relative max-w-6xl w-full mx-auto px-5 md:px-8 flex-1 flex flex-col justify-center py-14 md:py-16">
          <Reveal delay={90}>
            <h1 className={display.className}>
              <span
                className="block leading-[0.88] tracking-[-0.02em] font-extrabold text-[clamp(3.4rem,13.5vw,11rem)]"
                style={{ color: C.white }}
              >
                Tu hora
              </span>
              <span
                className="block leading-[0.9] tracking-[-0.02em] font-extrabold text-[clamp(3.4rem,13.5vw,11rem)]"
                style={{ color: 'transparent', WebkitTextStroke: '2px rgba(255,255,255,0.9)' }}
              >
                es tu hora
              </span>
              <span
                className={`${body.className} block mt-5 md:mt-7 text-[clamp(1.15rem,3.4vw,2.1rem)] leading-[1.15] font-medium tracking-[0.01em] max-w-2xl`}
                style={{ color: 'rgba(255,255,255,0.92)' }}
              >
                Atención dental puntual en {BIZ.city}: la hora que agendaste
                es la hora en que te atendemos.
              </span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3 mt-9 md:mt-12">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base font-bold px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                style={{ backgroundColor: C.orangeInk, color: C.white }}
              >
                <PhoneIcon />
                Agendar mi hora
              </a>
              <a
                href="#servicios"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: C.white }}
              >
                Ver servicios →
              </a>
            </div>
          </Reveal>
        </div>

        {/* Franja inferior tipo etiqueta */}
        <div
          className="relative border-t-2 border-dashed"
          style={{ borderColor: 'rgba(255,255,255,0.4)', backgroundColor: C.redDeep }}
        >
          <div
            className="max-w-6xl mx-auto pl-5 pr-20 md:pl-8 lg:pr-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold"
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]" fill={C.orange} stroke={C.orange} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </span>
            <span className="hidden md:inline">{BIZ.phoneDisplay}</span>
            <span className="hidden lg:inline" style={{ color: 'rgba(255,255,255,0.8)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios · despacho dental</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] font-extrabold tracking-tight`} style={{ color: C.inkDeep }}>
              Todo llega
              <br />
              <span style={{ color: C.red }}>a su hora</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Esto es una muestra del listado: al publicar van los
              servicios y prestaciones reales de la clínica.
            </p>
          </div>
        </Reveal>
        <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.name} delay={i * 110}>
              <li
                className="group overflow-hidden border-2 h-full flex flex-col"
                style={{ backgroundColor: C.white, borderColor: C.ink, boxShadow: `6px 6px 0 ${C.redSoft}` }}
              >
                {/* bosquejo marcado: la clínica aún no publica fotos de su interior */}
                <div
                  className="relative aspect-[4/3] flex flex-col items-center justify-center gap-3"
                  style={{ borderBottom: `2px solid ${C.ink}`, backgroundColor: C.paper }}
                >
                  <div
                    className="absolute inset-3 border-2 border-dashed"
                    style={{ borderColor: 'rgba(26,23,20,0.2)' }}
                    aria-hidden="true"
                  />
                  <span
                    className={`${display.className} absolute top-4 left-4 text-xs font-bold tracking-[0.14em] px-3 py-1.5`}
                    style={{ backgroundColor: C.red, color: C.white }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </span>
                  <svg viewBox="0 0 24 24" className="w-12 h-12 md:w-14 md:h-14" fill="none" stroke={C.red} strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
                    <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />
                  </svg>
                  <span
                    className={`${display.className} text-[10px] uppercase tracking-[0.22em] font-bold`}
                    style={{ color: C.muted }}
                  >
                    bosquejo · foto real pendiente
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <p className={`${display.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-2`} style={{ color: C.orangeInk }}>
                    {s.tag} →
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl font-bold leading-snug mb-2.5`} style={{ color: C.inkDeep }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Ruta de tu atención (tracking) ── */}
      <section className="border-y-2" style={{ backgroundColor: C.ink, borderColor: C.inkDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow light>Cómo funciona · tracking</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl font-extrabold leading-[1.02] mb-10 md:mb-14`} style={{ color: C.white }}>
              Tu atención, <span style={{ color: C.orangeLight }}>en ruta</span>
            </h2>
          </Reveal>
          <ol className="grid md:grid-cols-4 gap-x-6 gap-y-8">
            {RUTA.map((r, i) => (
              <Reveal key={r.num} delay={i * 110}>
                <li className="relative border-t-2 border-dashed pt-5" style={{ borderColor: C.lineDark }}>
                  <span
                    className={`${display.className} absolute -top-[15px] left-0 text-[11px] font-bold tracking-[0.14em] px-2 py-0.5`}
                    style={{ backgroundColor: C.orangeInk, color: C.white }}
                    aria-hidden="true"
                  >
                    {r.num}
                  </span>
                  <h3 className={`${display.className} text-lg md:text-xl font-bold mb-2`} style={{ color: C.white }}>
                    {r.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.68)' }}>
                    {r.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── La clínica ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.inkDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center mb-14 md:mb-20">
            <Reveal>
              <Eyebrow light>La clínica</Eyebrow>
              <h2 className={`${display.className} text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6`} style={{ color: C.white }}>
                El dentista de Linares,
                <br />
                <span style={{ color: C.orangeLight }}>siempre a la hora</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,255,255,0.72)' }}>
                ProSaludDental atiende en {BIZ.address}, {BIZ.city}: el
                dentista de la comuna, al alcance de un mensaje. Acumula{' '}
                {BIZ.reviews} reseñas en su ficha de Google.
              </p>
              <ul className="space-y-3 mb-9">
                {[
                  'Agenda y consultas directas por teléfono',
                  'Presupuesto claro por escrito antes de empezar',
                  'Citas que se cumplen: llegas y te atienden',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.88)' }}>
                    <span className="w-2.5 h-2.5 shrink-0" style={{ backgroundColor: C.orange }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base font-bold px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
                style={{ backgroundColor: C.white, color: C.inkDeep }}
              >
                Ver las {BIZ.reviews} reseñas en Google →
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-5 gap-3 md:gap-4">
                <figure className="col-span-3 relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: 'rgba(255,255,255,0.35)', boxShadow: '8px 8px 0 rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Fachada real de ProSaludDental en Curapalihue 442, Linares (Google Street View)"
                    fill
                    sizes="(min-width: 1024px) 30vw, 60vw"
                    loading="eager"
                    className="object-cover"
                  />
                </figure>
                <figure className="col-span-2 relative overflow-hidden self-end border-2 aspect-[3/4]" style={{ borderColor: 'rgba(255,255,255,0.35)', boxShadow: '8px 8px 0 rgba(0,0,0,0.35)' }}>
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Calle Curapalihue en Linares frente a la clínica (Google Street View)"
                    fill
                    sizes="(min-width: 1024px) 20vw, 40vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </Reveal>
          </div>

          {/* Opiniones */}
          <div className="border-t-2 border-dashed pt-14 md:pt-20" style={{ borderColor: C.lineDark }}>
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
              <Reveal>
                <Eyebrow light>Opiniones</Eyebrow>
                <h3 className={`${display.className} text-3xl md:text-4xl font-extrabold leading-tight mb-4`} style={{ color: C.white }}>
                  Lo que dicen los pacientes
                </h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  ProSaludDental acumula {BIZ.reviews} reseñas en Google
                  Maps. Estos textos son de muestra: al publicar van las
                  reseñas reales.
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold underline underline-offset-4 decoration-2 transition-colors hover:text-white tap-44"
                  style={{ color: C.orangeLight, textDecorationColor: 'rgba(255,184,140,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </Reveal>
              <div className="space-y-5">
                {OPINIONES.map((t, i) => (
                  <Reveal key={i} delay={120 + i * 110}>
                    <figure
                      className="p-6 md:p-7 border-2"
                      style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: C.lineDark }}
                    >
                      <blockquote className={`${display.className} text-base md:text-lg font-semibold leading-relaxed mb-4`} style={{ color: C.white }}>
                        “{t.text}”
                      </blockquote>
                      <figcaption className="flex items-center justify-between gap-3">
                        <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.orangeLight }}>
                          {t.author} · Reseña de ejemplo
                        </span>
                        <Motif motif="tooth" className="w-4 h-4 shrink-0" />
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Precios de referencia ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Tarifario de muestra</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] font-extrabold tracking-tight`} style={{ color: C.inkDeep }}>
              Valores claros,
              <br />
              <span style={{ color: C.red }}>sin sorpresas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Los valores de esta tabla son de muestra: al publicar van
              los precios reales de la clínica.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="border-t-2" style={{ borderColor: C.ink }}>
            {PRECIOS.map((p) => (
              <li
                key={p.name}
                className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1.2fr_auto] gap-x-6 gap-y-1 items-baseline border-b py-5 md:py-6 -mx-3 px-3 transition-colors hover:bg-[rgba(193,39,45,0.05)]"
                style={{ borderColor: C.lineLight }}
              >
                <div>
                  <p className={`${display.className} text-lg md:text-2xl font-bold`} style={{ color: C.inkDeep }}>{p.name}</p>
                  <p className="text-xs md:text-sm md:hidden" style={{ color: C.muted }}>{p.desc}</p>
                </div>
                <p className="hidden md:block text-sm" style={{ color: C.muted }}>{p.desc}</p>
                <p className={`${display.className} text-lg md:text-2xl font-bold whitespace-nowrap`} style={{ color: C.red }}>
                  {p.price}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-xs md:text-sm mt-6 max-w-2xl leading-relaxed" style={{ color: C.muted }}>
            Tabla de muestra. Los tratamientos se presupuestan después
            de la evaluación y los valores se confirman por escrito
            antes de iniciar.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20 border-t-2" style={{ backgroundColor: C.redSoft, borderColor: 'rgba(193,39,45,0.3)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Agenda y ubicación</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl font-extrabold leading-[1.05] mb-6`} style={{ color: C.inkDeep }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.red }}>{BIZ.city}</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.postal}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <span>
                  <strong className="font-bold" style={{ color: C.inkDeep }}>Teléfono fijo:</strong>{' '}
                  {BIZ.phoneDisplay}
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M13 9.5h3v-2h-3a3.5 3.5 0 0 0-3.5 3.5v2H7.5v3h2V21h3v-5h2.6l.4-3h-3v-2a.5.5 0 0 1 .5-.5Z" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.inkDeep }}>Facebook:</strong>{' '}
                  <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 transition-colors hover:text-[#C1272D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A4E52] tap-44">
                    clinicadent.prosalud
                  </a>
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.red} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7 v5 l3.5 2" />
                </svg>
                <span>
                  <strong className="font-bold" style={{ color: C.inkDeep }}>Horario:</strong>{' '}
                  por confirmar — agenda tu hora por teléfono
                </span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} inline-flex items-center gap-2.5 text-sm font-bold px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A4E52] tap-44`}
                style={{ backgroundColor: C.orangeInk, color: C.white }}
              >
                <PhoneIcon />
                Agendar por teléfono
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-bold px-6 py-3 border-2 transition-colors hover:bg-[rgba(193,39,45,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A4E52] tap-44`}
                style={{ borderColor: 'rgba(74,78,82,0.35)', color: C.inkDeep }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="overflow-hidden border-2 min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.paper, boxShadow: `8px 8px 0 rgba(193,39,45,0.2)` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.redDeep }}>
        <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          aria-hidden="true"
        >
          <span
            className={`${display.className} whitespace-nowrap font-extrabold leading-none text-[clamp(3rem,17vw,20rem)]`}
            style={{ color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.12)' }}
          >
            puntual
          </span>
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.1rem,6.5vw,4rem)] font-extrabold leading-[1.05] mb-6`} style={{ color: C.white }}>
              Tu próxima hora al dentista
              <br />
              <span style={{ color: C.orangeLight }}>sale con una llamada</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
              Llámanos para agendar tu evaluación:
              confirmamos la hora y la cumplimos.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} inline-flex items-center gap-2.5 text-sm md:text-base font-bold px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white tap-44`}
              style={{ backgroundColor: C.orangeInk, color: C.white }}
            >
              <PhoneIcon />
              Agendar mi hora
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.inkDeep, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4 border-t-2 border-dashed" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} text-xl md:text-2xl font-extrabold mb-2 flex items-center gap-3`}>
              <Motif motif="tooth" className="w-5 h-5" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
              Facebook
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-5 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Textos, servicios, precios, horarios, reseñas y
            fotos son de muestra; el nombre, la dirección, el teléfono y el
            conteo de reseñas son datos públicos reales.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.white }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.red} />
    </div>
  )
}
