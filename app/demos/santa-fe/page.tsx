import type { Metadata } from 'next'
import { Oswald, Barlow } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { GridScene } from './scenes'

const display = Oswald({ subsets: ['latin'], weight: ['500', '600', '700'] })
const body = Barlow({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

const C = {
  paper: '#EDEFF1',
  card: '#F7F8F9',
  graphite: '#262B31',
  deep: '#16191D',
  steel: '#3A4148',
  orange: '#E8631A',
  orangeSoft: '#FBDDC9',
  muted: '#5D666E',
  line: 'rgba(38,43,49,0.16)',
}

export const metadata: Metadata = {
  title: 'Santa Fe - Ingeniería y Construcciones en Talca',
  description:
    'Ingeniería y construcción en Talca. Cotiza tu proyecto por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const SERVICES = [
  {
    n: '01',
    name: 'Obras civiles',
    desc: 'Radieres, fundaciones, obras gruesas y trabajos estructurales.',
  },
  {
    n: '02',
    name: 'Ampliaciones',
    desc: 'Ampliaciones y remodelaciones de casas y locales, de principio a fin.',
  },
  {
    n: '03',
    name: 'Proyectos a medida',
    desc: 'Evaluación, diseño y ejecución de proyectos según tu terreno y presupuesto.',
  },
  {
    n: '04',
    name: 'Regularización',
    desc: 'Apoyo en la regularización de construcciones existentes.',
  },
]

const STEPS = [
  {
    title: 'Cuéntanos tu proyecto',
    desc: 'Escríbenos por WhatsApp con tu idea, terreno o problema a resolver.',
  },
  {
    title: 'Visita y evaluación',
    desc: 'Revisamos el terreno o la propiedad para entender el alcance real.',
  },
  {
    title: 'Cotización clara',
    desc: 'Recibes un presupuesto detallado, con plazos y etapas definidas.',
  },
  {
    title: 'Ejecutamos con plazos',
    desc: 'Obra planificada, avances informados y entrega en fecha.',
  },
]

const FAQS = [
  {
    q: '¿Cómo cotizo un proyecto?',
    a: 'Escríbenos por WhatsApp contando qué quieres construir o remodelar. Coordinamos una visita de evaluación.',
  },
  {
    q: '¿La cotización tiene costo?',
    a: 'La primera evaluación se coordina por WhatsApp y te indicamos los detalles antes de cualquier compromiso.',
  },
  {
    q: '¿En qué comunas trabajan?',
    a: 'La base está en Talca. Consulta por tu comuna y el alcance del proyecto por WhatsApp.',
  },
  {
    q: '¿Dónde está la oficina?',
    a: `En ${BIZ.address}, ${BIZ.city}.`,
  },
]

export default function SantaFePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.graphite }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase`}
        theme={{
          over: 'dark',
          bar: 'rgba(237,239,241,0.94)',
          ink: C.graphite,
          line: C.line,
          btnBg: C.orange,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero con grilla técnica ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden">
        <GridScene className="absolute inset-0 w-full h-full" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,25,29,0.4) 0%, rgba(22,25,29,0.15) 45%, rgba(22,25,29,0.85) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.26em] mb-5 flex items-center gap-3 font-semibold" style={{ color: C.orange }}>
              <span className="inline-block w-8 h-[2px]" style={{ backgroundColor: C.orange }} aria-hidden="true" />
              Ingeniería y construcción en Talca
            </p>
            <h1
              className={`${display.className} uppercase font-semibold leading-[0.98] tracking-[0.01em] text-[clamp(2.8rem,10vw,6.4rem)] mb-5`}
              style={{ color: '#EDEFF1' }}
            >
              Obras que quedan
              <br />
              bien hechas
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(237,239,241,0.8)' }}>
              Proyectos de construcción con cotización clara y plazos
              serios. Cotiza por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-7 py-3.5 transition-transform active:scale-95`}
                style={{ backgroundColor: C.orange, color: '#fff' }}
              >
                Cotiza tu proyecto
              </a>
              <a
                href="#servicios"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-7 py-3.5 border transition-colors`}
                style={{ borderColor: 'rgba(237,239,241,0.5)', color: '#EDEFF1' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios numerados ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.26em] mb-3 font-semibold" style={{ color: C.orange }}>
            Servicios
          </p>
          <h2 className={`${display.className} uppercase font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
            Qué construimos
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Servicios de ejemplo para mostrar el sitio: la carta real se
            publica junto a la empresa.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li
                className="relative overflow-hidden p-6 md:p-7 border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(22,25,29,0.4)] h-full"
                style={{ backgroundColor: C.card, borderColor: C.line }}
              >
                <span
                  className={`${display.className} absolute -top-1 right-4 font-semibold text-[64px] leading-none select-none`}
                  style={{ color: 'rgba(38,43,49,0.08)' }}
                  aria-hidden="true"
                >
                  {s.n}
                </span>
                <p
                  className={`${display.className} font-semibold text-sm tracking-[0.15em] mb-3`}
                  style={{ color: C.orange }}
                >
                  {s.n}
                </p>
                <h3 className={`${display.className} uppercase font-semibold text-xl md:text-2xl mb-2`}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Proceso ── */}
      <section id="proceso" className="scroll-mt-20" style={{ backgroundColor: C.graphite, color: '#EDEFF1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} uppercase font-semibold text-3xl md:text-5xl leading-tight mb-12`}>
              Cómo trabajamos
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STEPS.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="relative pt-6">
                  <span
                    className="absolute top-0 left-0 w-10 h-[3px]"
                    style={{ backgroundColor: C.orange }}
                    aria-hidden="true"
                  />
                  <p className={`${display.className} font-semibold text-xs uppercase tracking-[0.2em] mb-2`} style={{ color: C.orange }}>
                    0{i + 1}
                  </p>
                  <h3 className={`${display.className} uppercase font-semibold text-lg leading-snug mb-2`}>
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,239,241,0.7)' }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <div
              className="p-7 md:p-9 border-l-4"
              style={{ backgroundColor: C.card, borderLeftColor: C.orange, border: `1px solid ${C.line}`, borderLeft: `4px solid ${C.orange}` }}
            >
              <p className="text-[11px] uppercase tracking-[0.26em] mb-4 font-semibold" style={{ color: C.muted }}>
                En Google Maps
              </p>
              <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.orange} className="w-5 h-5" />
              <p className="text-sm mt-3" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas de clientes
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                style={{ color: C.graphite, textDecorationColor: 'rgba(232,99,26,0.5)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <h2 className={`${display.className} uppercase font-semibold text-3xl md:text-4xl leading-tight`}>
                Lo que dicen los clientes
              </h2>
              <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                Textos de muestra: al publicar van las reseñas reales.
              </p>
            </Reveal>
            {[
              'Cotización clara desde el primer día y la obra avanzó según lo pactado. Se nota la seriedad.',
              'Hicieron la ampliación de mi casa y quedó impecable, dentro del plazo acordado.',
            ].map((t, i) => (
              <Reveal key={i} delay={200 + i * 120}>
                <figure
                  className="p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.graphite }}>
                    “{t}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: C.orange }}>
                    Reseña de ejemplo
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} uppercase font-semibold text-3xl md:text-5xl leading-tight mb-6`}>
              Estamos en Talca
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.graphite }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-6 py-3 transition-transform active:scale-95`}
                style={{ backgroundColor: C.graphite, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-6 py-3 border transition-colors`}
                style={{ borderColor: C.graphite, color: C.graphite }}
              >
                Cotiza tu proyecto
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.paper }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase font-semibold text-3xl md:text-5xl leading-tight mb-3`}>
            Preguntas frecuentes
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>
            Preguntas y respuestas de muestra.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.graphite, a: C.muted, line: C.line, plusBg: C.orangeSoft, plusInk: C.graphite }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.orange }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} uppercase font-semibold text-[clamp(2.2rem,7vw,4.2rem)] leading-[1] mb-6`} style={{ color: '#fff' }}>
              Cotiza tu proyecto
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Escríbenos por WhatsApp, cuéntanos qué quieres construir y
              coordinamos la evaluación.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-8 py-4 transition-transform active:scale-95`}
                style={{ backgroundColor: C.deep, color: '#fff' }}
              >
                Cotiza tu proyecto
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase tracking-[0.08em] font-semibold text-sm px-8 py-4 border-2 transition-colors`}
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#fff' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#EDEFF1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} uppercase font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(237,239,241,0.6)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(237,239,241,0.4)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
