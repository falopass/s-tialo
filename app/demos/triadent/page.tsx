import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})

/* Paleta tomada de su letrero y logo: fucsia corazón + azul noche. */
const C = {
  paper: '#FCFAFC',
  rose: '#F5E2F0',
  roseSoft: '#FAF1F8',
  ink: '#2A2350',
  muted: '#5E5876',
  accent: '#B2298B',
  accentDeep: '#8E1B6B',
  line: 'rgba(42,35,80,0.12)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'triadent',
  title: 'Clínica Dental Triadent - Dentista en Talca',
  description: 'Clínica dental en el centro de Talca. Agenda tu hora por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Tratamientos', href: '#tratamientos' },
  { label: 'La clínica', href: '#clinica' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const ICONS: Record<string, React.ReactNode> = {
  general: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
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
  endodoncia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 4.5 C5.5 4.5 4 6.5 4 9.5 C4 14 5.5 20 7.5 20 C9 20 8.5 15.5 12 15.5 C15.5 15.5 15 20 16.5 20 C18.5 20 20 14 20 9.5 C20 6.5 18.5 4.5 16 4.5 C14 4.5 13.5 5.5 12 5.5 C10.5 5.5 10 4.5 8 4.5 Z" />
      <path d="M12 6.5 v6" />
      <path d="M12 12.5 l-2 4.5 M12 12.5 l2 4.5" />
    </g>
  ),
  implantes: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3.5 h6 l-.8 5 h-4.4 Z" />
      <path d="M12 8.5 v3.5 M10.6 10.5 h2.8 M10.9 12 h2.2" />
      <path d="M10.2 12 l1.8 7.5 1.8 -7.5" />
    </g>
  ),
  rehabilitacion: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 13 h15 a1.5 1.5 0 0 1 0 3 h-15 a1.5 1.5 0 0 1 0 -3 Z" />
      <path d="M7 13 v-3 M12 13 v-3.5 M17 13 v-3" />
      <path d="M7 16 v2.5 M12 16 v3 M17 16 v2.5" />
    </g>
  ),
  cirugia: (
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="7" cy="7" r="3" />
      <circle cx="7" cy="17" r="3" />
      <path d="M9.6 8.8 L20 20 M9.6 15.2 L20 4" />
    </g>
  ),
}

/* Servicios publicados por la clínica en su Instagram. */
const TREATMENTS = [
  { icon: 'general', name: 'Odontología general', desc: 'Evaluación completa, limpieza y tratamientos para mantener tu boca sana.' },
  { icon: 'ortodoncia', name: 'Ortodoncia', desc: 'Brackets y controles para alinear tu sonrisa, con seguimiento a la hora.' },
  { icon: 'endodoncia', name: 'Endodoncia', desc: 'Tratamiento de conducto para salvar la pieza y quitarte el dolor.' },
  { icon: 'implantes', name: 'Implantología', desc: 'Reposición de piezas faltantes con implantes, planificado a tu medida.' },
  { icon: 'rehabilitacion', name: 'Rehabilitación oral', desc: 'Restauraciones y prótesis para recuperar función y estética.' },
  { icon: 'cirugia', name: 'Cirugía oral', desc: 'Extracciones y procedimientos quirúrgicos con atención cercana.' },
]

/* Reseñas reales de su ficha de Google (texto original en español). */
const REVIEWS = [
  {
    text: 'Excelente atención, lugar limpio y ordenado. Simpatía y buena disposición de la profesional.',
    author: 'María Paz Astudillo Barrera',
    meta: 'Reseña de Google · 5★',
  },
  {
    text: 'Vine por una horita y me atendieron altiro, y muy bien; me explicaron lo que era mejor para mí. Excelente atención, gracias.',
    author: 'Paola',
    meta: 'Reseña de Google · 5★',
  },
  {
    text: 'Muy buena experiencia y quedan muy rectos los dientes con brackets. Excelente trato y las doctoras son simpáticas.',
    author: 'Marcela González',
    meta: 'Reseña de Google · 5★',
  },
]

const FAQS = [
  {
    q: '¿Cómo agendo una hora?',
    a: 'Escríbenos por WhatsApp con tu nombre y el motivo de la consulta. Te respondemos con las horas disponibles.',
  },
  {
    q: '¿Cuál es el horario de atención?',
    a: `De lunes a viernes de 10:00 a 18:30 y sábados de 10:00 a 14:00, en ${BIZ.address}.`,
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
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(252,250,252,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.accentDeep,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero: foto real de la fachada con el letrero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.roseSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.22em] mb-5 flex items-center gap-3" style={{ color: C.accentDeep }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: C.accent }} aria-hidden="true" />
              Clínica dental en el centro de Talca
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.04] tracking-[-0.01em] text-[clamp(2.4rem,7vw,4.4rem)] mb-5`}
            >
              Tu dentista en 1 Norte 841
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
                className="font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.accentDeep, color: '#fff' }}
              >
                Agenda por WhatsApp
              </a>
              <a
                href="#tratamientos"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(42,35,80,0.3)', color: C.ink }}
              >
                Ver tratamientos
              </a>
            </div>
            <p className="mt-8 flex items-center gap-3 text-sm" style={{ color: C.muted }}>
              <Stars value={BIZ.rating} color={C.accent} />
              <span>
                <strong style={{ color: C.ink }}>{BIZ.ratingLabel}</strong> en Google · {BIZ.reviews} reseñas
              </span>
            </p>
          </Reveal>
          <Reveal delay={150}>
            <figure className="relative">
              <div
                className="relative overflow-hidden rounded-3xl aspect-[4/3] md:aspect-[4/3] shadow-[0_24px_60px_-24px_rgba(42,35,80,0.35)]"
                style={{ border: `1px solid ${C.line}` }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt={`Fachada de ${BIZ.name} en el centro de Talca`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className="absolute left-4 bottom-4 rounded-full px-4 py-2 text-xs font-semibold shadow-lg"
                style={{ backgroundColor: 'rgba(252,250,252,0.94)', color: C.ink }}
              >
                1 Norte 841, a pasos de la plaza
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de confianza ── */}
      <section style={{ backgroundColor: C.rose }}>
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
              Lun–Vie 10:00–18:30 · Sáb 10:00–14:00
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
            Las especialidades que la clínica publica en su Instagram.
          </p>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5">
          {TREATMENTS.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <li
                className="flex gap-4 rounded-2xl p-5 md:p-6 border transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_16px_36px_-18px_rgba(42,35,80,0.3)] h-full"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
              >
                <span
                  className="w-[46px] h-[46px] rounded-2xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: C.roseSoft, color: C.accentDeep }}
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

      {/* ── La clínica por dentro (fotos reales) ── */}
      <section id="clinica" className="scroll-mt-20" style={{ backgroundColor: C.roseSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-3" style={{ color: C.accentDeep }}>
                <span className="inline-block w-8 h-px" style={{ backgroundColor: C.accent }} aria-hidden="true" />
                La clínica por dentro
              </p>
              <h2 className={`${display.className} font-semibold text-3xl md:text-4xl leading-tight mb-5`}>
                Boxes luminosos y un equipo que explica cada paso
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                Fotos reales de la ficha de Google de la clínica y de su
                Instagram: la entrada en 1 Norte, el box de atención y el
                equipo trabajando.
              </p>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.accentDeep, textDecorationColor: 'rgba(178,41,139,0.35)' }}
              >
                {BIZ.instagramHandle} en Instagram →
              </a>
            </Reveal>
            <div className="grid grid-cols-2 gap-4">
              <Reveal delay={80} className="col-span-2">
                <figure className="relative overflow-hidden rounded-2xl aspect-[16/9]" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/box.webp`}
                    alt="Box de atención dental de Triadent"
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
              {[
                { src: 'atencion', alt: 'Profesional de Triadent atendiendo a un paciente' },
                { src: 'equipo', alt: 'Dentista de Triadent en la clínica' },
              ].map((f, i) => (
                <Reveal key={f.src} delay={160 + i * 100}>
                  <figure className="relative overflow-hidden rounded-2xl aspect-[4/5]" style={{ border: `1px solid ${C.line}` }}>
                    <Image
                      src={`${IMG}/${f.src}.webp`}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 21vw, 50vw"
                      className="object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20">
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
                  className="inline-block mt-6 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.accentDeep, textDecorationColor: 'rgba(142,27,107,0.4)' }}
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
              </Reveal>
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={160 + i * 110}>
                  <figure
                    className="rounded-2xl p-6 md:p-7"
                    style={{ backgroundColor: '#FFFFFF', border: `1px solid ${C.line}` }}
                  >
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="text-xs uppercase tracking-[0.15em]" style={{ color: C.accentDeep }}>
                      {r.author} · {r.meta}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <h2 className={`${display.className} font-semibold text-3xl md:text-5xl leading-tight mb-3`}>
            Preguntas de pacientes
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.rose, plusInk: C.accentDeep }}
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
            <p className="text-sm md:text-base mb-5" style={{ color: C.muted }}>
              Teléfono:{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.ink }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
            <ul className="text-sm md:text-base mb-8 space-y-1.5" style={{ color: C.muted }}>
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline gap-3">
                  <span className="font-medium w-36 shrink-0" style={{ color: C.ink }}>{h.dia}</span>
                  <span>{h.horas}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.ink, color: '#fff' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: C.line, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.roseSoft }}
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

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.rose }}>
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
                className="font-semibold text-sm px-8 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.accentDeep, color: '#fff' }}
              >
                Agenda por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-8 py-3 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(42,35,80,0.3)', color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-12 flex flex-col md:flex-row md:items-end justify-between gap-5 md:gap-8">
          <div>
            <p className={`${display.className} font-semibold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
              {BIZ.address} · {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>{' '}
              ·{' '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                {BIZ.instagramHandle}
              </a>
            </address>
          </div>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
        {/* Aviso de mockup en el flujo (no flotante) para no tapar contenido; pb deja libre la burbuja de WhatsApp */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
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
