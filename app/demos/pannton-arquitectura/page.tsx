import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars, FaqList, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { SiteNav, SiteFooter } from './chrome'
import { BIZ, IMG, WORKS, REVIEWS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  ink: '#1C1B19',
  paper: '#F6F3EC',
  paperSoft: '#EEEAE0',
  accent: '#E0A21B',
  accentDeep: '#8A5E08',
  muted: '#5F5A50',
  line: 'rgba(28,27,25,0.12)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pannton-arquitectura',
  title: 'Pannton · Impresión y soluciones gráficas en Lomas de Lircay, Talca',
  description:
    'Taller de impresión y diseño en Lomas de Lircay, Talca: adhesivos, empastes, folletería y piezas personalizadas. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const STEPS = [
  { name: 'Envía tu archivo o idea', desc: 'Escríbenos por WhatsApp con tu archivo o cuéntanos qué necesitas.' },
  { name: 'Revisamos y confirmamos', desc: 'Revisamos el material contigo y confirmamos el trabajo antes de imprimir.' },
  { name: 'Retiras en el taller', desc: 'Te avisamos cuando esté listo y lo retiras en el taller.' },
]

const FAQS = [
  {
    q: '¿En qué formato envío mi archivo?',
    a: 'Lo ideal es PDF; también puedes enviar JPG o PNG en buena resolución. Si tu archivo está en otro formato, consulta por WhatsApp.',
  },
  {
    q: '¿Hacen tirajes pequeños?',
    a: 'Sí, trabajamos tirajes a medida. Cuéntanos cuántas copias necesitas y te cotizamos por WhatsApp.',
  },
  {
    q: '¿Dónde retiro mi pedido?',
    a: `En el taller: ${BIZ.address}, ${BIZ.city}. Te avisamos por WhatsApp cuando esté listo.`,
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: C.accentDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function PanntonPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <SiteNav fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Taller Pannton en Lomas de Lircay: mesa de trabajo con material impreso"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(28,27,25,0.55) 0%, rgba(28,27,25,0.35) 40%, rgba(28,27,25,0.9) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-40 pb-14 md:pb-20">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4 font-bold" style={{ color: C.accent }}>
              Arquitectura y soluciones gráficas · Lomas de Lircay
            </p>
            <h1
              className={`${display.className} font-bold leading-[1.05] tracking-[-0.01em] text-[clamp(2.2rem,8vw,4.6rem)] mb-5`}
              style={{ color: '#fff' }}
            >
              Impresión y diseño con oficio en Talca
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Adhesivos, empastes, folletería y piezas personalizadas,
              hechas en el taller de Lomas de Lircay.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.accent, color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#trabajos"
                className="font-semibold text-sm px-7 py-3.5 rounded-full border transition-colors tap-44"
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de confianza ── */}
      <section style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-5 md:gap-12">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm font-semibold tap-44"
              style={{ color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.accentDeep} className="w-[15px] h-[15px]" />
              {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
              <span aria-hidden="true" style={{ color: C.accentDeep }}>→</span>
            </a>
          </Reveal>
          <Reveal delay={100} className="md:ml-auto">
            <p className="text-sm font-medium flex items-center gap-2.5" style={{ color: C.ink }}>
              <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.accent }} aria-hidden="true" />
              Lun–Vie 9:00–13:15 / 15:00–18:30
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Trabajos ── */}
      <section id="trabajos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Del taller</Eyebrow>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
            Trabajos
          </h2>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {WORKS.map((w, i) => (
            <Reveal key={w.name} delay={i * 70}>
              <li className="rounded-2xl overflow-hidden border h-full" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                <div className="relative aspect-[2/1]">
                  <Image
                    src={w.src}
                    alt={w.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} font-semibold text-lg mb-1.5`}>{w.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {w.desc}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Cómo trabajamos ── */}
      <section style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Simple y por WhatsApp</Eyebrow>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
              Cómo trabajamos
            </h2>
          </Reveal>
          <ol className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {STEPS.map((s, i) => (
              <Reveal key={s.name} delay={i * 90}>
                <li className="rounded-2xl p-6 border h-full" style={{ backgroundColor: C.paper, borderColor: C.line }}>
                  <span
                    className={`${display.className} w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold mb-4`}
                    style={{ backgroundColor: C.ink, color: C.accent }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} font-semibold text-lg mb-1.5`}>{s.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Horario y ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Horario y ubicación</Eyebrow>
            <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.1] mb-6`}>
              En Lomas de Lircay, Talca
            </h2>
            <dl className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: C.line }}>
              {BIZ.hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0"
                  style={{ borderColor: C.line, backgroundColor: '#fff' }}
                >
                  <dt className="text-sm font-semibold">{h.days}</dt>
                  <dd className="text-sm text-right" style={{ color: C.muted }}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
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
                style={{ borderColor: 'rgba(28,27,25,0.3)', color: C.ink }}
              >
                Cotizar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div
              className="rounded-3xl overflow-hidden border min-h-[300px] md:min-h-0 h-full"
              style={{ borderColor: C.line, backgroundColor: C.paperSoft }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[300px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08]`}>
                {BIZ.ratingLabel} de 5 estrellas
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en su ficha de Google: rapidez, calidad
                y buena disposición para ayudar.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <figure className="rounded-2xl border p-5 md:p-6 h-full flex flex-col" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                  <Stars value={5} color={C.accentDeep} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.16em] font-bold mt-4" style={{ color: C.muted }}>
                    Reseña en Google · {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.accentDeep, textDecorationColor: 'rgba(138,94,8,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-tight mb-8`}>
            Preguntas frecuentes
          </h2>
        </Reveal>
        <FaqList
          items={FAQS}
          colors={{ q: C.ink, a: C.muted, line: C.line, plusBg: C.paperSoft, plusInk: C.accentDeep }}
        />
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-bold text-[clamp(1.9rem,6vw,3.8rem)] leading-[1.05] mb-6`}
              style={{ color: '#fff' }}
            >
              Cotiza tu impresión hoy
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Envíanos tu archivo o idea por WhatsApp y te respondemos con
              una cotización.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.accent, color: C.ink }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      <SiteFooter fontClass={display.className} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
