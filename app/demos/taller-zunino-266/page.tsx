import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SCANNER, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F1F1EC',
  card: '#FFFFFF',
  ink: '#17191E',
  muted: '#5B606B',
  orange: '#B0440D',
  steel: '#3A404C',
  deep: '#141519',
  line: 'rgba(23,25,30,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'taller-zunino-266',
  title: 'Taller Zunino 266 — Mecánica y scanner automotriz en San Clemente',
  description:
    'Taller mecánico en San Clemente 266: diagnóstico con scanner (también a domicilio), mecánica general, frenos y mantenciones. Escríbenos por WhatsApp.',
  image: '/demos/taller-zunino-266/hero.webp',
})

const NAV_LINKS = [
  { label: 'Scanner', href: '#scanner' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/mecanico.webp`,
    tag: 'mecánica general',
    name: 'Reparación y mantención',
    desc: 'Motor, suspensión, embrague y mantenciones preventivas. Trabajo probado antes de entregar el auto.',
  },
  {
    src: `${IMG}/frenos.webp`,
    tag: 'frenos',
    name: 'Frenos y seguridad',
    desc: 'Pastillas, discos y revisión completa del sistema de frenado: lo más importante del auto.',
  },
  {
    src: `${IMG}/elevador.webp`,
    tag: 'elevador',
    name: 'Trabajo en elevador',
    desc: 'Revisión por debajo del auto con elevador: escape, tren delantero y fugas a la vista.',
  },
  {
    src: `${IMG}/prensa.webp`,
    tag: 'prensa hidráulica',
    name: 'Prensa y trabajos pesados',
    desc: 'Prensa hidráulica para bujes, rodamientos y trabajos que piden fuerza y precisión.',
  },
]

const RESENAS = [
  {
    text: 'Excelente atención! Buen precio y amabilidad. 100% recomendado.',
    author: 'Soledad Torres',
  },
  {
    text: 'Muy muy buena atención y precio.',
    author: 'Diego Jaraba',
  },
  {
    text: 'Buena atención y trabajos bien realizados.',
    author: 'Veronica Hidalgo',
  },
] as const

const HORAS = [
  { days: 'Lunes', time: '12:30 – 18:30' },
  { days: 'Martes a viernes', time: '9:00 – 18:30' },
  { days: 'Sábado', time: '9:00 – 12:30' },
  { days: 'Domingo', time: 'Cerrado' },
] as const

/** Conector de diagnóstico OBD: el servicio estrella del taller. */
function Obd({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 6.5 h14 a2 2 0 0 1 2 2 v1.5 h-18 v-1.5 a2 2 0 0 1 2 -2 Z" />
      <path d="M7.5 10 v3 M10.5 10 v3 M13.5 10 v3 M16.5 10 v3" />
      <path d="M9 13.5 v4 a2 2 0 0 1 -2 2 h-1.5 M15 13.5 v4 a2 2 0 0 0 2 2 h1.5" />
    </svg>
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: color ?? (light ? '#FF9A5C' : C.orange) }}
    >
      <Obd className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function TallerZuninoPage() {
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
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(20,21,25,0.94)',
          ink: '#F1F1EC',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.orange,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Chevrolet rojo con el capó abierto dentro de Taller Zunino 266"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,21,25,0.68) 0%, rgba(20,21,25,0.42) 42%, rgba(20,21,25,0.93) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(241,241,236,0.95)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.orange} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Taller mecánico · San Clemente</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-bold uppercase leading-[0.98] tracking-[0.01em] text-[clamp(2.8rem,10vw,6rem)] mb-6`}
              style={{ color: '#F1F1EC' }}
            >
              Tu auto, bien
              <br />
              <span style={{ color: C.orange }}>diagnosticado.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(241,241,236,0.9)' }}>
              Mecánica general, frenos y scanner automotriz en San
              Clemente 266. El scanner también se hace a domicilio.
              Precio honesto y trabajo garantizado.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#scanner"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(241,241,236,0.55)', color: '#F1F1EC' }}
              >
                Scanner a domicilio
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(241,241,236,0.22)', backgroundColor: 'rgba(20,21,25,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(241,241,236,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.orange }} aria-hidden="true" />
              Scanner a domicilio
            </span>
            <span>Atención directa del dueño</span>
            <span className="hidden md:inline" style={{ color: C.orange }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Scanner destacado ── */}
      <section id="scanner" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.orange }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow color="#FFFFFF">Servicio estrella</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              Scanner automotriz
              <br />
              en el taller o a domicilio
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,255,255,0.94)' }}>
              ¿Se te prendió el check engine o el auto falla y no sabes
              por qué? El scanner lee los códigos de falla del computador
              del auto y ubica el problema sin adivinar.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Lectura de códigos de falla y diagnóstico',
                'En el taller en San Clemente 266 o en tu domicilio',
                'Te explican qué tiene el auto antes de cobrar la reparación',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base" style={{ color: '#FFFFFF' }}>
                  <Obd className="w-4 h-4 shrink-0 mt-1" color="#141519" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_SCANNER}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: '#141519', color: '#FFFFFF' }}
            >
              Agendar scanner
            </a>
          </Reveal>
          <div className="rounded-2xl overflow-hidden rotate-[-1.2deg]" style={{ boxShadow: '0 24px 60px rgba(20,21,25,0.35)' }}>
            <img
              src={`${IMG}/taller.webp`}
              alt="Sector techado de Taller Zunino 266 con vehículos en reparación"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
              Del cambio de pastillas
              <br />
              <span style={{ color: C.orange }}>a la pega pesada</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Todo el trabajo se hace en el taller, con elevador y prensa
              hidráulica propias. Estas fotos son del taller real.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {SERVICIOS.map((s) => (
            <li
              key={s.name}
              className="group rounded-2xl overflow-hidden border h-full"
              style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 6px rgba(23,25,30,0.06)' }}
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img
                  src={s.src}
                  alt={s.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span
                  className={`${display.className} absolute top-4 left-4 text-xs font-bold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full shadow-sm`}
                  style={{ backgroundColor: 'rgba(20,21,25,0.9)', color: '#FF9A5C' }}
                >
                  {s.tag}
                </span>
              </div>
              <div className="p-5 md:p-7">
                <h3 className={`${display.className} font-bold uppercase tracking-[0.02em] text-xl md:text-2xl mb-2`} style={{ color: C.ink }}>
                  {s.name}
                </h3>
                <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ── Por qué el taller ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Por qué Zunino 266</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98]`} style={{ color: '#F1F1EC' }}>
                Taller de barrio,
                <br />
                <span style={{ color: C.orange }}>trato directo</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(241,241,236,0.85)' }}>
                Acá hablas directamente con quien le mete mano a tu auto.
                Sin intermediarios ni letra chica.
              </p>
            </div>
          </Reveal>
          <ul className="grid sm:grid-cols-3 gap-5 md:gap-6">
            {[
              { n: '4.8', t: 'promedio en Google', d: `${BIZ.reviews} reseñas reales de clientes de San Clemente y alrededores.` },
              { n: '2', t: 'modalidades de scanner', d: 'En el taller o a domicilio: el diagnóstico va donde esté el auto.' },
              { n: '266', t: 'en pleno centro', d: 'El taller queda en San Clemente 266, a pasos de todo.' },
            ].map((f, i) => (
              <Reveal key={f.n} delay={i * 100}>
                <li
                  className="rounded-2xl border p-6 h-full"
                  style={{ borderColor: 'rgba(241,241,236,0.16)', backgroundColor: 'rgba(241,241,236,0.04)' }}
                >
                  <span
                    className={`${display.className} block font-bold uppercase text-5xl mb-3`}
                    style={{ color: i === 0 ? '#FF9A5C' : '#8A93A6' }}
                  >
                    {f.n}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase tracking-[0.04em] text-lg mb-2`} style={{ color: '#F1F1EC' }}>
                    {f.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(241,241,236,0.85)' }}>
                    {f.d}
                  </p>
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
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              los clientes
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={BIZ.rating} color={C.orange} className="w-5 h-5" />
              <span className={`${display.className} font-bold text-2xl`} style={{ color: C.ink }}>
                {BIZ.rating}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
              Google. Estas son reseñas reales de clientes.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.orange, textDecorationColor: 'rgba(232,98,26,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={120 + i * 110}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 8px rgba(23,25,30,0.05)' }}
                >
                  <blockquote className={`${display.className} font-medium text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.orange }}>
                      {r.author} · Reseña de Google
                    </span>
                    <Stars value={5} color={C.orange} className="w-3.5 h-3.5" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#E9EAE4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              San Clemente 266,
              <br />
              <span style={{ color: C.orange }}>en el centro</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: '#4A4F59' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(23,25,30,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: '#4A4F59' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.04em] text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(23,25,30,0.35)', color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/elevador.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Obd className="w-9 h-9 mx-auto mb-6" color={C.orange} />
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2.3rem,7vw,4.4rem)] leading-[0.98] mb-6`} style={{ color: '#F1F1EC' }}>
              Que el auto no te deje
              <br />
              <span style={{ color: C.orange }}>a pie otra vez</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(241,241,236,0.9)' }}>
              Escríbenos por WhatsApp contando la falla — si puedes,
              con foto del tablero o del motor — y coordinamos la
              revisión.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-[0.04em] text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.orange, color: '#FFFFFF' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F1F1EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-bold uppercase tracking-[0.03em] text-2xl mb-2 flex items-center gap-3`}>
              <Obd className="w-5 h-5" color={C.orange} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(241,241,236,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(241,241,236,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(241,241,236,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(241,241,236,0.75)' }}>
            Datos de contacto, horarios y reseñas reales de la ficha de
            Google. Los textos de venta son de muestra.
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
