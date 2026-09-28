import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, HOURS, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  cream: '#faf6ee',
  creamDeep: '#f1eadb',
  ink: '#20262a',
  teal: '#0d6b63',
  tealDeep: '#084843',
  aqua: '#cfe9e4',
  coral: '#d96a4b',
  coralDeep: '#a8432a',
  muted: '#5d6560',
  line: 'rgba(32,38,42,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lavado-de-oidos-talca',
  title: 'Lavado de oídos Talca — Integra Centro de Salud Integral',
  description: 'Lavado de oídos clínico en Talca con fonoaudióloga: rápido, indoloro y con cámara para ver todo el proceso. 3 Norte 1410, Edificio Bicentenario. 5,0★ en Google con 355 reseñas.',
  image: '/demos/lavado-de-oidos-talca/lavado.webp',
})

const NAV_LINKS = [
  { label: 'La hora', href: '#hora' },
  { label: 'La consulta', href: '#consulta' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** La hora paso a paso, según lo que cuentan sus pacientes. */
const PASOS = [
  {
    n: '01',
    name: 'Llegas y te explica todo',
    desc: 'Antes de tocar nada, Nicole repasa tu molestia y te cuenta paso a paso lo que va a hacer.',
    src: `${IMG}/escritorio.webp`,
    alt: 'Escritorio de la consulta de lavado de oídos en Talca',
  },
  {
    n: '02',
    name: 'El lavado, con cámara',
    desc: 'El procedimiento se hace con instrumental y cámara: ves en pantalla lo que hay dentro del oído.',
    src: `${IMG}/lavado.webp`,
    alt: 'Lavado de oído en curso realizado por la fonoaudióloga en Talca',
  },
  {
    n: '03',
    name: 'Sales escuchando',
    desc: 'Rápido e indoloro: sales con el conducto limpio y las indicaciones para cuidarlo.',
    src: `${IMG}/camilla.webp`,
    alt: 'Box de atención con camilla y diplomas de la fonoaudióloga en Talca',
  },
] as const

const TOUR = [
  { src: `${IMG}/fachada.webp`, alt: 'Fachada casa esquina de Integra Centro de Salud Integral en 3 Norte 1410, Talca', label: 'La casa esquina de 3 con 3' },
  { src: `${IMG}/consulta.webp`, alt: 'Consulta con sillas teal y escritorio en Lavado de oídos Talca', label: 'La consulta' },
  { src: `${IMG}/profesional.webp`, alt: 'Nicole, fonoaudióloga, junto a la mesa de instrumental en Talca', label: `${BIZ.pro}` },
  { src: `${IMG}/espera.webp`, alt: 'Sala de espera con sillón azul en Lavado de oídos Talca', label: 'La espera' },
] as const

const TESTIMONIALS = [
  {
    text: 'Fui por un problema de oído tapado y el servicio fue rápido, profesional y completamente sin dolor. La atención fue muy amable y me explicó todo con claridad.',
    author: 'Paciente de Google',
    detail: 'oído tapado · hace 5 meses',
  },
  {
    text: 'Me realicé un lavado de oídos y la experiencia fue un 10/10. Muy profesional, cuidadosa y el procedimiento fue rápido y totalmente indoloro.',
    author: 'Samuel Valenzuela',
    detail: 'lavado de oídos · hace 3 meses',
  },
  {
    text: 'Todo el proceso de lavado de oído lo iba informando con cámara y explicando. Quedó perfecto, muy amable y se da el tiempo para explicarte y enseñarte.',
    author: 'Joao Beroíza Fernández',
    detail: 'lavado con cámara · hace 5 meses',
  },
]

function EarIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 9.5a6.5 6.5 0 1 1 13 0c0 3-1.4 4.3-2.8 5.7-.9.9-1.7 1.7-1.7 3.3a3.5 3.5 0 0 1-7 .2" />
      <path d="M9.5 9.5a3 3 0 0 1 6 0c0 1.6-1 2.3-1.9 3.2" />
    </svg>
  )
}

function PhoneIcon({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-medium`}
      style={{ color: light ? 'rgba(250,246,238,0.8)' : C.coralDeep }}
    >
      <span className="inline-block w-[12px] h-[12px] rounded-full border-[3px]" style={{ borderColor: C.coral }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function LavadoOidosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(250,246,238,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.teal,
          btnInk: '#ffffff',
        }}
      />

      {/* ── Hero editorial: texto + polaroids apiladas ── */}
      <section id="inicio" className="pt-[104px] md:pt-[130px] pb-14 md:pb-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Centro de salud · {BIZ.city}</Eyebrow>
            <h1
              className={`${display.className} leading-[0.98] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,5rem)] mb-6`}
              style={{ color: C.ink }}
            >
              Ese oído tapado
              <br />
              tiene solución
              <br />
              <span style={{ color: C.teal }}>en una hora.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-6" style={{ color: C.muted }}>
              {BIZ.brand} atiende en {BIZ.addressShort}: lavado de oídos
              clínico, rápido e indoloro, y con cámara para que veas
              todo el proceso.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full border mb-9 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ borderColor: C.teal, color: C.tealDeep, backgroundColor: C.aqua }}
            >
              <Stars value={5} color={C.coralDeep} className="w-[13px] h-[13px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.teal, color: '#ffffff' }}
              >
                Llamar para agendar
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-bold px-7 py-3.5 rounded-full border-2 transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          {/* polaroids sobre la mesa */}
          <div className="relative h-[380px] md:h-[460px] select-none" aria-hidden="false">
            <Reveal delay={80} className="absolute left-0 top-0 w-[62%] rotate-[-3deg]">
              <div className="bg-white p-2.5 pb-8 rounded-xl shadow-[0_14px_34px_rgba(32,38,42,0.22)] border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image src={`${IMG}/lavado.webp`} alt="Lavado de oído en curso en la consulta de Talca" fill sizes="(min-width: 1024px) 280px, 55vw" className="object-cover" priority />
                </div>
                <p className={`${mono.className} absolute bottom-2 inset-x-0 text-center text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  el procedimiento
                </p>
              </div>
            </Reveal>
            <Reveal delay={180} className="absolute right-0 top-10 md:top-14 w-[55%] rotate-[2.5deg]">
              <div className="bg-white p-2.5 pb-8 rounded-xl shadow-[0_14px_34px_rgba(32,38,42,0.2)] border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                  <Image src={`${IMG}/profesional.webp`} alt={`${BIZ.pro} en su consulta de Talca`} fill sizes="(min-width: 1024px) 250px, 50vw" className="object-cover" />
                </div>
                <p className={`${mono.className} absolute bottom-2 inset-x-0 text-center text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  {BIZ.pro}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La hora: paso a paso de la atención ── */}
      <section id="hora" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.tealDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow light>Una hora, tres momentos</Eyebrow>
            <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.0]`} style={{ color: C.cream }}>
                Así es la atención,
                <br />
                <span style={{ color: C.aqua }}>contada por sus pacientes</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(250,246,238,0.82)' }}>
                En las 355 reseñas se repite lo mismo: explica todo, va
                con cámara y no duele. Este es el recorrido de una hora.
              </p>
            </div>
          </Reveal>
          <ol className="grid md:grid-cols-3 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <li key={p.n} className="h-full">
                <Reveal delay={i * 80} className="h-full">
                  <article className="rounded-2xl overflow-hidden h-full flex flex-col" style={{ backgroundColor: C.cream }}>
                    <div className="relative aspect-[16/10]">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 100vw" className="object-cover" />
                      <span
                        className={`${mono.className} absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full`}
                        style={{ backgroundColor: C.cream, color: C.tealDeep }}
                      >
                        {p.n}
                      </span>
                    </div>
                    <div className="p-5 md:p-6 flex-1">
                      <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-2`} style={{ color: C.ink }}>
                        {p.name}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
          <Reveal delay={160}>
            <p className={`${mono.className} mt-8 text-[11px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(250,246,238,0.7)' }}>
              “lo iba informando con cámara y explicando” — reseña real
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La consulta: tour fotográfico ── */}
      <section id="consulta" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>La consulta</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.0] mb-10 md:mb-14`} style={{ color: C.ink }}>
              Una casa esquina
              <br />
              <span style={{ color: C.teal }}>en 3 con 3</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {TOUR.map((t, i) => (
              <Reveal key={t.src} delay={i * 60} className={i % 2 === 1 ? 'lg:translate-y-8' : ''}>
                <figure>
                  <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                    <Image src={t.src} alt={t.alt} fill sizes="(min-width: 1024px) 280px, 50vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-center`} style={{ color: C.muted }}>
                    {t.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_1.7fr] gap-8 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Opiniones</Eyebrow>
              <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
                5,0 perfecto
                <br />
                <span style={{ color: C.teal }}>con 355 reseñas</span>
              </h2>
              <div className="flex items-center gap-3 mb-4">
                <Stars value={5} color={C.coralDeep} className="w-4 h-4" />
                <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.ink }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </p>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
                Citas textuales de la ficha pública de Google de {BIZ.name}.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ color: C.tealDeep, textDecorationColor: 'rgba(13,107,99,0.35)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
            <div className="space-y-4">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.author} delay={100 + i * 90}>
                  <figure className="rounded-2xl p-5 md:p-6 border" style={{ backgroundColor: '#ffffff', borderColor: C.line }}>
                    <EarIcon className="w-5 h-5 mb-3" color={C.coral} />
                    <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center justify-between gap-3">
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-semibold`} style={{ color: C.tealDeep }}>
                        {t.author} · Google
                      </span>
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                        {t.detail}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y agenda ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Ubicación y agenda</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.0] mb-6`} style={{ color: C.ink }}>
              3 Oriente con 3 Norte,
              <br />
              <span style={{ color: C.teal }}>Edificio Bicentenario</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HOURS.map((h) => (
                <li key={h.days} className={`${mono.className} flex items-center gap-3 text-sm md:text-base`} style={{ color: C.muted }}>
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
                href={CALL_LINK}
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44 inline-flex items-center gap-2`}
                style={{ backgroundColor: C.teal, color: '#ffffff' }}
              >
                <PhoneIcon className="w-4 h-4" color="#ffffff" />
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-all hover:bg-black/5 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl border-2 overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.ink, backgroundColor: C.creamDeep }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.addressShort}, ${BIZ.city}`}
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.teal }}>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold text-[clamp(2.1rem,6.5vw,4rem)] leading-[0.98] mb-6`} style={{ color: '#ffffff' }}>
              El oído tapado
              <br />
              <span style={{ color: C.aqua }}>no se pasa solo</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: '#ffffff' }}>
              Llama y agenda tu hora: el lavado es rápido, indoloro y
              sales escuchando como antes.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} font-bold inline-flex items-center gap-2 text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.cream, color: C.tealDeep }}
            >
              <PhoneIcon className="w-4 h-4" color={C.tealDeep} />
              Agendar: {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-2.5`}>
              <EarIcon className="w-4 h-4" color={C.aqua} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(250,246,238,0.85)' }}>
              {BIZ.brand} · {BIZ.addressShort} · {BIZ.city}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: 'rgba(250,246,238,0.85)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Google Maps
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,246,238,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug" style={{ color: 'rgba(250,246,238,0.85)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.aqua }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, horarios, fotos
            y reseñas son datos públicos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.aqua }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.teal} />
    </div>
  )
}
