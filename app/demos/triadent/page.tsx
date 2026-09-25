import type { Metadata } from 'next'
import { Sora, Source_Sans_3 } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { HeroBackdrop } from './scenes'

const display = Sora({ subsets: ['latin'], weight: ['500', '600', '700'] })
const body = Source_Sans_3({ subsets: ['latin'], weight: ['400', '600', '700'] })

const C = {
  paper: '#FBFEFD',
  mint: '#DFF2EC',
  mintSoft: '#F0F9F6',
  ink: '#0F3B57',
  muted: '#4F7284',
  accent: '#1D9E8E',
  accentDeep: '#127E71',
  line: 'rgba(15,59,87,0.12)',
}

export const metadata: Metadata = {
  title: 'Clínica Dental Triadent - Dentista en Talca',
  description:
    'Clínica dental en el centro de Talca. Agenda tu hora por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Ubicación', href: '#ubicacion' },
]

function BeforeAfterPanel({ label, delay = 0 }: { label: string; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <div
        className="aspect-[4/3] rounded-2xl border-2 border-dashed flex flex-col items-center justify-center gap-2"
        style={{ borderColor: 'rgba(29,158,142,0.4)', backgroundColor: C.mintSoft }}
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke={C.accentDeep} strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="M4.5 16.5 l4 -4 3 3 3.5 -3.5 4.5 4.5" />
        </svg>
        <p className={`${display.className} text-sm font-semibold uppercase tracking-[0.15em]`} style={{ color: C.accentDeep }}>
          {label}
        </p>
        <p className="text-xs" style={{ color: C.muted }}>Imagen de ejemplo</p>
      </div>
    </Reveal>
  )
}

const ICONS: Record<string, React.ReactNode> = {
  evaluacion: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
    </g>
  ),
  limpieza: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4 l1.6 3.9 L17.5 9.5 l-3.9 1.6 L12 15 l-1.6 -3.9 L6.5 9.5 l3.9 -1.6 Z" />
      <path d="M18.5 15.5 l.9 2.1 2.1 .9 -2.1 .9 -.9 2.1 -.9 -2.1 -2.1 -.9 2.1 -.9 Z" />
    </g>
  ),
  estetica: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 14 C4 10 7 7 12 7 C17 7 20 10 20 14" />
      <path d="M7 14 C7 12 9 10.5 12 10.5 C15 10.5 17 12 17 14" />
      <path d="M4 17 a8 8 0 0 0 16 0" />
    </g>
  ),
  urgencia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 3 L5.5 13.5 H11 L10 21 L18.5 10 H13 Z" />
    </g>
  ),
  ortodoncia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.5 12 C6 8.5 9 7 12 7 C15 7 18 8.5 20.5 12" />
      <path d="M3.5 12 C6 15.5 9 17 12 17 C15 17 18 15.5 20.5 12" />
      <rect x="5.6" y="10.4" width="3" height="3.2" rx="0.8" />
      <rect x="10.5" y="10.4" width="3" height="3.2" rx="0.8" />
      <rect x="15.4" y="10.4" width="3" height="3.2" rx="0.8" />
    </g>
  ),
  protesis: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 13 h15 a1.5 1.5 0 0 1 0 3 h-15 a1.5 1.5 0 0 1 0 -3 Z" />
      <path d="M7 13 v-3 M12 13 v-3.5 M17 13 v-3" />
      <path d="M7 16 v2.5 M12 16 v3 M17 16 v2.5" />
    </g>
  ),
}

const TREATMENTS = [
  { icon: 'evaluacion', name: 'Evaluación integral', desc: 'Diagnóstico completo y un plan de tratamiento claro desde la primera visita.' },
  { icon: 'limpieza', name: 'Limpieza y prevención', desc: 'Profilaxis y controles periódicos para mantener tu boca sana.' },
  { icon: 'estetica', name: 'Estética dental', desc: 'Opciones para mejorar el aspecto de tu sonrisa según tu caso.' },
  { icon: 'urgencia', name: 'Urgencias dentales', desc: 'Dolor, fracturas o molestias que no pueden esperar una hora agendada.' },
  { icon: 'ortodoncia', name: 'Ortodoncia', desc: 'Evaluación y seguimiento para alinear tu mordida.' },
  { icon: 'protesis', name: 'Rehabilitación', desc: 'Restauraciones y prótesis pensadas para recuperar función y estética.' },
]

const FAQS = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Escríbenos por WhatsApp con tu nombre y el motivo de la consulta. Te respondemos con las horas disponibles.',
  },
  {
    q: '¿Atienden urgencias?',
    a: 'Si tienes dolor agudo o una fractura, escríbenos de inmediato por WhatsApp y te indicamos la hora más próxima disponible.',
  },
  {
    q: '¿Dónde están ubicados?',
    a: `En ${BIZ.address}, en pleno centro de Talca, a pasos de la plaza.`,
  },
  {
    q: '¿Qué necesito para la primera consulta?',
    a: 'Solo tu cédula de identidad y, si tienes, radiografías o exámenes anteriores. El resto lo vemos en la evaluación.',
  },
]

export default function TriadentPage() {
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
          bar: 'rgba(251,254,253,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden">
        <HeroBackdrop className="absolute inset-0 w-full h-full" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-16 md:pb-24 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.accentDeep }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.accent }} aria-hidden="true" />
              Clínica dental en el centro de Talca
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.4rem,7vw,4.4rem)] mb-5`}
            >
              Una clínica dental para sonreír tranquilo
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Atención odontológica cercana, con explicaciones claras y
              trato amable. Agenda tu hora por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.accent, color: '#fff' }}
              >
                Agenda por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(15,59,87,0.3)', color: C.ink }}
              >
                Ver tratamientos
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl p-7 md:p-8 shadow-[0_24px_60px_-24px_rgba(15,59,87,0.3)]"
              style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
            >
              <p className={`${display.className} font-semibold text-xl mb-5`}>
                Agenda tu hora
              </p>
              <ol className="space-y-3 mb-6">
                {[
                  'Escríbenos por WhatsApp con tu consulta.',
                  'Te confirmamos día y hora disponible.',
                  'Llegas a tu cita, sin trámites extra.',
                ].map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                    <span
                      className={`${display.className} shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold`}
                      style={{ backgroundColor: C.mint, color: C.accentDeep }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-semibold text-sm px-6 py-3.5 rounded-full transition-transform active:scale-95 mb-5"
                style={{ backgroundColor: C.ink, color: '#fff' }}
              >
                Escribir ahora
              </a>
              <p className="flex items-center justify-center gap-2 text-xs" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.accent} />
                {BIZ.ratingLabel} en Google con {BIZ.reviews} reseñas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de confianza ── */}
      <section style={{ backgroundColor: C.mint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
          <Reveal className="flex items-center gap-4">
            <p className={`${display.className} font-semibold text-5xl md:text-6xl leading-none`}>
              {BIZ.ratingLabel}
            </p>
            <div>
              <Stars value={BIZ.rating} color={C.accentDeep} className="w-5 h-5" />
              <p className="text-sm mt-1" style={{ color: C.ink }}>
                {BIZ.reviews} reseñas verificadas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={100} className="md:ml-auto flex flex-col sm:flex-row gap-4 sm:gap-10">
            <p className="text-sm font-medium flex items-center gap-2.5" style={{ color: C.ink }}>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.accent }} aria-hidden="true" />
              En pleno centro de Talca
            </p>
            <p className="text-sm font-medium flex items-center gap-2.5" style={{ color: C.ink }}>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.accent }} aria-hidden="true" />
              Agenda directa por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Tratamientos ── */}
      <section id="tratamientos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
            Tratamientos
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Carta referencial: al publicar el sitio van las prestaciones
            reales de la clínica, con sus detalles.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <li
                className="flex gap-4 rounded-2xl p-5 md:p-6 border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(15,59,87,0.3)] h-full"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
              >
                <span
                  className="w-[46px] h-[46px] rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.mintSoft, color: C.accentDeep }}
                >
                  <svg viewBox="0 0 24 24" className="w-[23px] h-[23px]" aria-hidden="true">
                    {ICONS[t.icon]}
                  </svg>
                </span>
                <div>
                  <h3 className={`${display.className} font-semibold text-lg mb-1`}>
                    {t.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {t.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Antes / después (placeholders) ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-4`}>
            Antes y después
          </h2>
          <p className="text-sm md:text-base max-w-2xl leading-relaxed mb-10" style={{ color: C.muted }}>
            Espacios reservados: al publicar van fotos reales de casos,
            con autorización de los pacientes.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6">
          <BeforeAfterPanel label="Antes" />
          <Reveal delay={120} className="hidden sm:flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-10 h-10" fill="none" stroke={C.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 12 h14 M13 6 l6 6 -6 6" />
            </svg>
          </Reveal>
          <BeforeAfterPanel label="Después" delay={160} />
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.mintSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <div
                className="rounded-3xl p-7 md:p-9"
                style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
              >
                <p className="text-[11px] uppercase tracking-[0.22em] mb-4" style={{ color: C.accentDeep }}>
                  En Google Maps
                </p>
                <p className={`${display.className} font-semibold text-6xl md:text-7xl leading-none mb-3`}>
                  {BIZ.ratingLabel}
                </p>
                <Stars value={BIZ.rating} color={C.accentDeep} className="w-5 h-5" />
                <p className="text-sm mt-3" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas de pacientes
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2"
                  style={{ color: C.accentDeep, textDecorationColor: 'rgba(18,126,113,0.4)' }}
                >
                  Ver la ficha en Google →
                </a>
              </div>
            </Reveal>
            <div className="space-y-5">
              <Reveal delay={100}>
                <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight`}>
                  Lo que dicen los pacientes
                </h2>
                <p className="text-sm mt-2 mb-2" style={{ color: C.muted }}>
                  Textos de muestra: al publicar van las reseñas reales.
                </p>
              </Reveal>
              {[
                'Me atendieron puntual y me explicaron cada paso del tratamiento. Cero susto con la cuenta.',
                'Fui por una urgencia de dolor y me resolvieron el mismo día. El trato es muy humano.',
              ].map((t, i) => (
                <Reveal key={i} delay={200 + i * 120}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em]" style={{ color: C.accentDeep }}>
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-3`}>
            Preguntas de pacientes
          </h2>
          <p className="text-sm mb-8" style={{ color: C.muted }}>
            Preguntas y respuestas de muestra.
          </p>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.mint, plusInk: C.accentDeep }}
        />
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-6`}>
              A pasos de la plaza de Talca
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: C.muted }}>
              {BIZ.address}
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
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.ink, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.mintSoft }}
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

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.mint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2rem,6vw,3.8rem)] leading-[1.05] mb-6`}>
              Agenda tu hora esta semana
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: C.muted }}>
              Escríbenos por WhatsApp y te confirmamos la hora más cercana
              disponible.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-8 py-4 rounded-full transition-transform active:scale-95"
                style={{ backgroundColor: C.accent, color: '#fff' }}
              >
                Agenda por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-4 rounded-full border transition-colors"
                style={{ borderColor: 'rgba(15,59,87,0.3)', color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
