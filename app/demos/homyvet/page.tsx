import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const IMG = '/demos/homyvet'

const display = localFont({
  src: [
    { path: '../../fonts/lora/normal-400-700.woff2', weight: '400 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  bone: '#F7F2E7',
  boneDeep: '#EDE4D2',
  paper: '#FCFAF4',
  mustard: '#D9A02B',
  mustardInk: '#7C5B0F',
  mustardSoft: '#F0D9A8',
  navy: '#1E2C4E',
  navyDeep: '#16223E',
  muted: '#6B675A',
  line: 'rgba(30,44,78,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'homyvet',
  title: 'Homyvet - Clínica Veterinaria en Talca',
  description: 'Clínica veterinaria en Talca. Reserva una hora para tu mascota por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Cómo atendemos', href: '#como-atendemos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const STEPS = [
  {
    title: 'Escríbenos',
    desc: 'Cuéntanos por WhatsApp qué le pasa a tu mascota o qué servicio necesita.',
  },
  {
    title: 'Agendamos juntos',
    desc: 'Te proponemos la hora más conveniente y te confirmamos el mismo día.',
  },
  {
    title: 'Atendemos con calma',
    desc: 'Evaluamos a tu mascota sin apuro y te explicamos cada paso.',
  },
  {
    title: 'Te acompañamos',
    desc: 'Resolvemos tus dudas después de la consulta, también por WhatsApp.',
  },
]

const ICONS: Record<string, React.ReactNode> = {
  consulta: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="15.5" rx="4.6" ry="3.6" />
      <circle cx="6.4" cy="9.6" r="1.7" />
      <circle cx="12" cy="7.4" r="1.7" />
      <circle cx="17.6" cy="9.6" r="1.7" />
    </g>
  ),
  vacuna: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3.5 l3 3" />
      <path d="M14.5 5 L19 9.5 L11.5 17 a2.1 2.1 0 0 1 -3 0 l-1 -1 a2.1 2.1 0 0 1 0 -3 Z" />
      <path d="M12.5 8 l3.5 3.5" />
      <path d="M6.5 17 L4 19.5" />
    </g>
  ),
  desparasita: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 C12 3.5 18.5 5.5 18.5 10 c0 5 -3 8.5 -6.5 10.5 C8.5 18.5 5.5 15 5.5 10 C5.5 5.5 12 3.5 12 3.5 Z" />
      <path d="M9 11.5 l2 2 4 -4.5" />
    </g>
  ),
  cirugia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 8 h16" />
      <path d="M6.5 8 v9.5 a2.5 2.5 0 0 0 2.5 2.5 h6 a2.5 2.5 0 0 0 2.5 -2.5 V8" />
      <path d="M9 8 V5.5 a2 2 0 0 1 2 -2 h2 a2 2 0 0 1 2 2 V8" />
      <path d="M10.5 13.5 h3 M12 12 v3" />
    </g>
  ),
  cachorro: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="6" />
      <path d="M8 7 L5.5 4 M16 7 L18.5 4" />
      <circle cx="10" cy="10" r="0.6" fill="currentColor" />
      <circle cx="14" cy="10" r="0.6" fill="currentColor" />
      <path d="M10.5 12.5 q1.5 1.5 3 0" />
      <path d="M6 20.5 c1.5 -2 3.5 -3 6 -3 c2.5 0 4.5 1 6 3" />
    </g>
  ),
  certificado: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8 h7 M8.5 11.5 h7 M8.5 15 h4.5" />
      <circle cx="15.5" cy="16" r="2.4" />
    </g>
  ),
  tijeras: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="6.5" r="2.4" />
      <circle cx="6.5" cy="17.5" r="2.4" />
      <path d="M8.7 8.4 L19.5 18.5 M8.7 15.6 L19.5 5.5" />
    </g>
  ),
  bolsa: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5.5 8.5 h13 l-1 11.5 a2 2 0 0 1 -2 1.8 h-7 a2 2 0 0 1 -2 -1.8 Z" />
      <path d="M8.5 8.5 V7 a3.5 3.5 0 0 1 7 0 v1.5" />
    </g>
  ),
}

// Servicios reales: letrero del local (clínica veterinaria, peluquería canina,
// petshop) + perfil de la clínica (hospital, exámenes, imagenología, farmacia).
const SERVICES = [
  { icon: 'consulta', name: 'Consulta general', desc: 'Evaluación y diagnóstico para perros y gatos.' },
  { icon: 'certificado', name: 'Exámenes e imagenología', desc: 'Exámenes de diagnóstico e imagenología veterinaria.' },
  { icon: 'cirugia', name: 'Cirugía y hospital', desc: 'Procedimientos quirúrgicos con hospitalización.' },
  { icon: 'tijeras', name: 'Peluquería canina', desc: 'Baño, corte y arreglo para tu perro.' },
  { icon: 'bolsa', name: 'Petshop', desc: 'Alimento y accesorios para mascotas.' },
  { icon: 'vacuna', name: 'Farmacia veterinaria', desc: 'Medicamentos y productos veterinarios.' },
]

const FAQS = [
  {
    q: '¿Cómo reservo una hora?',
    a: 'Escríbenos por WhatsApp con el nombre de tu mascota y lo que necesita. Te confirmamos hora el mismo día.',
  },
  {
    q: '¿Qué llevo a la primera consulta?',
    a: 'Si tienes el carnet de vacunas o exámenes anteriores, tráelos. Si no, partimos uno nuevo sin problema.',
  },
  {
    q: '¿Atienden gatos además de perros?',
    a: 'Sí, atendemos mascotas de compañía. Consulta por tu caso por WhatsApp antes de venir.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${BIZ.address}, ${BIZ.city}. Te compartimos la ubicación por WhatsApp al agendar.`,
  },
]

export default function HomyvetPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.navy }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(252,250,244,0.94)',
          ink: C.navy,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero a dos columnas ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3 font-semibold" style={{ color: C.mustardInk }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.mustard }} aria-hidden="true" />
              Clínica veterinaria en Talca
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.06] text-[clamp(2.4rem,7vw,4.3rem)] mb-5`}
            >
              Cuidado de verdad, cerca de casa
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Atención veterinaria con calma y cariño para tu mascota.
              Reserva tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.mustard, color: C.navyDeep }}
              >
                Reserva por WhatsApp
              </a>
              <a
                href="#como-atendemos"
                className="font-bold text-sm px-7 py-3.5 rounded-full border-2 transition-colors tap-44"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Cómo atendemos
              </a>
            </div>
          </Reveal>
          {/* Collage de 3 fotos reales de la clínica */}
          <Reveal delay={150}>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="row-span-2 rounded-3xl overflow-hidden aspect-[3/3.8]">
                {/* eslint-disable-next-line @next/next/no-img-element -- fotos optimizadas en public/ */}
                <img
                  src={`${IMG}/hero-perro.webp`}
                  alt="Perro recostado en la camilla de atención de HomyVet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/1.9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-gato.webp`}
                  alt="Gato negro paciente de HomyVet"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[3/1.9]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/hero-beagle.webp`}
                  alt="Beagle con collarín de recuperación atendido en HomyVet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo atendemos (timeline) ── */}
      <section id="como-atendemos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-12`}>
            Cómo atendemos
          </h2>
        </Reveal>
        <ol className="relative max-w-2xl">
          <span
            className="absolute left-[19px] md:left-[23px] top-2 bottom-2 w-px"
            style={{ backgroundColor: C.line }}
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 100}>
              <li className="relative flex gap-5 md:gap-7 pb-10 last:pb-0">
                <span
                  className={`${display.className} relative z-10 shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-semibold text-base md:text-lg`}
                  style={{ backgroundColor: C.navy, color: C.mustard }}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className={`${display.className} font-semibold text-xl md:text-2xl mb-1.5`}>
                    {s.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── Pacientes (fotos reales de la clínica) ── */}
      <section className="py-14 md:py-20" style={{ backgroundColor: C.boneDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-8`}>
              Pacientes que pasan por HomyVet
            </h2>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <ul className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 px-5 md:px-8 md:grid md:grid-cols-6 md:overflow-visible max-w-6xl md:mx-auto">
            {[
              ['paciente-1', 'Perro descansando en la camilla de la clínica'],
              ['paciente-2', 'Perro salchicha en su transportín'],
              ['paciente-3', 'Gato paciente de la clínica'],
              ['paciente-4', 'Perro sobre una manta en la clínica'],
              ['paciente-5', 'Perro esperando su atención'],
              ['paciente-6', 'Perro jugando en el pasto'],
            ].map(([name, alt], i) => (
              <li
                key={name}
                className="snap-center shrink-0 w-40 md:w-auto rounded-2xl overflow-hidden aspect-[3/4]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`${IMG}/${name}.webp`}
                  alt={alt}
                  loading={i < 3 ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Servicios (lista con íconos) ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
              Servicios
            </h2>
            <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
              Los servicios que la clínica muestra en su letrero y sus redes.
            </p>
          </Reveal>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-7 max-w-4xl">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 60}>
                <li className="flex items-start gap-4">
                  <span
                    className="w-[44px] h-[44px] rounded-full flex items-center justify-center shrink-0"
                    style={{ backgroundColor: C.mustardSoft, color: C.navy }}
                  >
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" aria-hidden="true">
                      {ICONS[s.icon]}
                    </svg>
                  </span>
                  <div>
                    <h3 className={`${display.className} font-semibold text-lg leading-snug`}>
                      {s.name}
                    </h3>
                    <p className="text-sm leading-relaxed mt-0.5" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <div
              className="rounded-3xl p-7 md:p-9"
              style={{ backgroundColor: C.navy, color: C.bone }}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] mb-4 font-semibold" style={{ color: C.mustard }}>
                En Google Maps
              </p>
              <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                {BIZ.ratingLabel}
              </p>
              <Stars value={BIZ.rating} color={C.mustard} className="w-5 h-5" />
              <p className="text-sm mt-3" style={{ color: 'rgba(247,242,231,0.7)' }}>
                {BIZ.reviews} reseñas de tutores
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.mustard, textDecorationColor: 'rgba(217,160,43,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </div>
          </Reveal>
          <div className="space-y-5">
            <Reveal delay={100}>
              <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`}>
                Familias que confían en nosotros
              </h2>
              <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                Reseñas reales de su ficha en Google.
              </p>
            </Reveal>
            {[
              { name: 'Katherina Rocco', txt: 'Excelente clínica. Llegamos por una urgencia y todos fueron muy empáticos; explicaron los costos en detalle y los pros y contras del tratamiento.' },
              { name: 'Sindia Venegas', txt: 'A mis gatos les encanta ir. Buena atención y paciencia; los precios van en línea con el mercado.' },
            ].map((r, i) => (
              <Reveal key={r.name} delay={200 + i * 120}>
                <figure
                  className="rounded-3xl p-6 md:p-7 border"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
                >
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.navy }}>
                    “{r.txt}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.15em] font-bold" style={{ color: C.mustardInk }}>
                    {r.name} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`}>
              En el corazón de Talca
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44" style={{ color: C.navy }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.navy, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Reservar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.boneDeep }}
            >
              <LazyMap
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
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-3`}>
            Preguntas frecuentes
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>
            Preguntas y respuestas de muestra.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.navy, a: C.muted, line: C.line, plusBg: C.mustardSoft, plusInk: C.navy }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.mustardSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,6vw,3.8rem)] leading-[1.06] mb-6`} style={{ color: C.navyDeep }}>
              Reserva una hora para tu mascota
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(30,44,78,0.78)' }}>
              Escríbenos por WhatsApp y te confirmamos la hora más
              cercana disponible.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-8 py-3 md:py-4 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.navy, color: '#fff' }}
              >
                Reserva por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-bold text-sm px-8 py-3 md:py-4 rounded-full border-2 transition-colors tap-44"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,242,231,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(247,242,231,0.7)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
        {/* Aviso de mockup en el flujo (no flotante) para no tapar contenido; pb deja libre la burbuja de WhatsApp */}
        <div style={{ borderTop: '1px solid rgba(247,242,231,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(247,242,231,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, así se vería tu sitio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
