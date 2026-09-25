import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { HeroScene } from './scenes'

const display = Baloo_2({ subsets: ['latin'], weight: ['500', '600', '700'] })
const body = Nunito({ subsets: ['latin'], weight: ['400', '600', '700'] })

const C = {
  cream: '#FBF6EE',
  paper: '#FDFAF4',
  sageSoft: '#E9F0E7',
  sage: '#8CA98C',
  sageDeep: '#4E6B50',
  peach: '#F2B48C',
  peachSoft: '#FBE7D6',
  peachInk: '#8A4E2C',
  ink: '#39432F',
  muted: '#6B7A60',
  line: 'rgba(57,67,47,0.12)',
}

export const metadata: Metadata = {
  title: 'One Health - Centro Médico Veterinario en Maule',
  description:
    'Centro médico veterinario en Maule. Agenda una hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const ICONS: Record<string, React.ReactNode> = {
  consulta: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4 v4 a4 4 0 0 0 8 0 V4" />
      <path d="M14 8 a4.5 4.5 0 0 0 4.5 4.5 v0 a3 3 0 1 1 -3 3" />
      <path d="M10 12 v3 a4.5 4.5 0 0 1 -4.5 4.5" />
      <circle cx="4.5" cy="4" r="1.5" />
      <circle cx="15.5" cy="4" r="1.5" />
    </g>
  ),
  vacuna: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 3.5 l3 3" />
      <path d="M14.5 5 L19 9.5 L11.5 17 a2.1 2.1 0 0 1 -3 0 l-1 -1 a2.1 2.1 0 0 1 0 -3 Z" />
      <path d="M12.5 8 l3.5 3.5" />
      <path d="M6.5 17 L4 19.5" />
      <path d="M8.5 15.5 l2 2" />
    </g>
  ),
  cirugia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3 C9 3 7.5 5 7.5 7 C7.5 9 9 10 12 10 C15 10 16.5 9 16.5 7 C16.5 5 15 3 12 3 Z" />
      <path d="M12 10 v3" />
      <path d="M8 15.5 a4 4 0 1 0 8 0 4 4 0 0 0 -8 0" />
      <path d="M10.5 15.5 h3 M12 14 v3" />
    </g>
  ),
  desparasita: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3.5 C12 3.5 18.5 5.5 18.5 10 c0 5 -3 8.5 -6.5 10.5 C8.5 18.5 5.5 15 5.5 10 C5.5 5.5 12 3.5 12 3.5 Z" />
      <path d="M9 11.5 l2 2 4 -4.5" />
    </g>
  ),
  examen: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3 h6 M10 3 v5.5 L5 18 a2 2 0 0 0 1.8 3 h10.4 A2 2 0 0 0 19 18 L14 8.5 V3" />
      <path d="M7.5 14.5 h9" />
    </g>
  ),
  peluqueria: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="7" r="2.5" />
      <circle cx="6.5" cy="17" r="2.5" />
      <path d="M8.8 8.5 L19 18 M8.8 15.5 L19 6" />
    </g>
  ),
}

const SERVICES = [
  { icon: 'consulta', name: 'Consulta general', desc: 'Evaluación completa y plan de tratamiento para tu mascota.' },
  { icon: 'vacuna', name: 'Vacunas', desc: 'Calendario de vacunación para cachorros y adultos.' },
  { icon: 'cirugia', name: 'Cirugía programada', desc: 'Procedimientos quirúrgicos con evaluación previa.' },
  { icon: 'desparasita', name: 'Desparasitación', desc: 'Interna y externa, según peso, edad y estilo de vida.' },
  { icon: 'examen', name: 'Exámenes', desc: 'Diagnóstico de apoyo para entender qué le pasa a tu mascota.' },
  { icon: 'peluqueria', name: 'Peluquería y baño', desc: 'Baño, corte higiénico y corte de uñas.' },
]

const WHY = [
  { title: 'Trato con cariño', desc: 'Sabemos que tu mascota es familia. La atendemos con paciencia y calma.' },
  { title: 'Agenda por WhatsApp', desc: 'Sin llamados ni esperas en línea: escríbenos y te confirmamos hora.' },
  { title: 'Explicaciones claras', desc: 'Te contamos qué tiene tu mascota y qué opciones hay, en simple.' },
  { title: 'Aquí en el Maule', desc: 'Un centro veterinario de la comuna, cerca de tu casa.' },
]

const FAQS = [
  {
    q: '¿Cómo agendo una hora para mi mascota?',
    a: 'Escríbenos por WhatsApp contándonos qué necesita tu mascota. Te respondemos con las horas disponibles.',
  },
  {
    q: '¿Qué hago si es una urgencia?',
    a: 'Escríbenos de inmediato por WhatsApp describiendo lo que pasa. Te indicamos cómo proceder mientras llegas.',
  },
  {
    q: '¿Atienden perros y gatos?',
    a: 'La atención se orienta a mascotas de compañía. Consulta por tu caso específico por WhatsApp.',
  },
  {
    q: '¿Dónde están?',
    a: `Estamos en la comuna de ${BIZ.comuna}, ${BIZ.region}. Te compartimos la ubicación exacta al agendar.`,
  },
]

export default function OneHealthPage() {
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
          over: 'light',
          bar: 'rgba(253,250,244,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.sageDeep,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative min-h-svh flex items-end overflow-hidden">
        <HeroScene className="absolute inset-0 w-full h-full" />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-32">
          <Reveal>
            <div
              className="max-w-xl rounded-3xl p-7 md:p-9 backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(253,250,244,0.82)', border: `1px solid ${C.line}` }}
            >
              <p className="text-[11px] md:text-xs uppercase tracking-[0.2em] mb-4 font-semibold" style={{ color: C.peachInk }}>
                Centro médico veterinario en Maule
              </p>
              <h1
                className={`${display.className} font-semibold leading-[1.05] text-[clamp(2.3rem,7vw,4.2rem)] mb-4`}
              >
                Tu mascota, cuidada como se merece
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: C.muted }}>
                Consultas, vacunas y atención con cariño. Agenda tu hora
                por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                  style={{ backgroundColor: C.sageDeep, color: '#fff' }}
                >
                  Agenda una hora
                </a>
                <a
                  href="#servicios"
                  className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors`}
                  style={{ borderColor: 'rgba(57,67,47,0.3)', color: C.ink }}
                >
                  Ver servicios
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
            ¿Qué necesita tu mascota?
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Servicios de ejemplo para ilustrar la página: la carta real se
            publica junto al centro.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 80}>
              <li
                className="flex gap-4 rounded-3xl p-5 md:p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(78,107,80,0.35)] h-full"
                style={{ backgroundColor: i % 2 === 0 ? C.sageSoft : C.peachSoft }}
              >
                <span
                  className="w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: '#FFFFFF', color: C.sageDeep }}
                >
                  <svg viewBox="0 0 24 24" className="w-[23px] h-[23px]" aria-hidden="true">
                    {ICONS[s.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className={`${display.className} font-semibold text-lg mb-1`}>
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

      {/* ── Urgencias ── */}
      <section id="urgencias" className="scroll-mt-20" style={{ backgroundColor: C.peachSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-8 md:gap-14">
          <Reveal className="shrink-0">
            <span
              className="w-[72px] h-[72px] rounded-full flex items-center justify-center"
              style={{ backgroundColor: C.peach, color: C.peachInk }}
            >
              <svg viewBox="0 0 24 24" className="w-9 h-9" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 8.5 v5" />
                <path d="M12 16.8 h.01" />
                <path d="M10.6 3.8 L2.8 17.5 a2 2 0 0 0 1.7 3 h15 a2 2 0 0 0 1.7 -3 L13.4 3.8 a1.7 1.7 0 0 0 -2.8 0 Z" />
              </svg>
            </span>
          </Reveal>
          <Reveal delay={100} className="flex-1">
            <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-3`}>
              ¿Es una urgencia con tu mascota?
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.peachInk }}>
              Escríbenos de inmediato por WhatsApp contando qué está
              pasando. Te indicamos cómo proceder mientras llegas al
              centro.
            </p>
          </Reveal>
          <Reveal delay={180} className="shrink-0">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.peachInk, color: '#fff' }}
            >
              Escribir ahora
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Por qué elegirnos ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-10`}>
            Por qué los vecinos nos eligen
          </h2>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8 max-w-4xl">
          {WHY.map((w, i) => (
            <Reveal key={w.title} delay={i * 80}>
              <li className="flex gap-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 mt-0.5" fill="none" stroke={C.sageDeep} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="8.5" />
                  <path d="M8.5 12.2 l2.3 2.3 4.7 -5" />
                </svg>
                <div>
                  <h3 className={`${display.className} font-semibold text-lg mb-1`}>{w.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>{w.desc}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.sageSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-3xl p-7 md:p-9"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] mb-4 font-semibold" style={{ color: C.sageDeep }}>
                  En Google Maps
                </p>
                <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                  {BIZ.ratingLabel}
                </p>
                <Stars value={BIZ.rating} color={C.peachInk} className="w-5 h-5" />
                <p className="text-sm mt-3" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas de tutores
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                  style={{ color: C.sageDeep, textDecorationColor: 'rgba(78,107,80,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`}>
                  Lo que dicen los tutores
                </h2>
                <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                  Textos de muestra: al publicar van las reseñas reales.
                </p>
              </Reveal>
              {[
                'Atendieron a mi perra con una paciencia enorme y me explicaron todo. Se nota que aman lo que hacen.',
                'Agendé por WhatsApp en minutos y el trato fue excelente. Mi gato volvió tranquilo a la casa.',
              ].map((t, i) => (
                <Reveal key={i} delay={200 + i * 120}>
                  <figure
                    className="rounded-3xl p-6 md:p-7"
                    style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em] font-semibold" style={{ color: C.sageDeep }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`}>
              Aquí en el Maule
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              Comuna de {BIZ.comuna}
              <br />
              {BIZ.region}, Chile
            </address>
            <p className="text-sm md:text-base mb-8" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.sageDeep, color: '#fff' }}
              >
                Ver en Google Maps →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border transition-colors`}
                style={{ borderColor: C.line, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.sageSoft }}
            >
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.comuna}`}
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
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
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
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.peachSoft, plusInk: C.peachInk }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.sageSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,6vw,3.8rem)] leading-[1.05] mb-6`}>
              Agenda una hora para tu mascota
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: C.muted }}>
              Escríbenos por WhatsApp y te confirmamos la hora más
              cercana disponible.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-8 py-4 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.sageDeep, color: '#fff' }}
              >
                Agenda una hora
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} font-semibold text-sm px-8 py-4 rounded-full border transition-colors`}
                style={{ borderColor: 'rgba(57,67,47,0.3)', color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.sageDeep, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Comuna de {BIZ.comuna} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
