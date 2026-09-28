import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const serif = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  cream: '#FAF3E7',
  paper: '#FFFDF7',
  ink: '#2C1D14',
  muted: '#6B5B4C',
  terra: '#B64F28',
  terraDeep: '#8A3418',
  clay: '#E8D9C3',
  honey: '#D9A441',
  line: 'rgba(44,29,20,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pepivet',
  title: 'Clínica Veterinaria Pepivet — Veterinaria de barrio en Talca',
  description:
    'Veterinaria en Diecisiete Sur 544, Talca. Consultas, vacunas y esterilización. 4,8★ con 153 reseñas en Google. Agenda por WhatsApp.',
  image: '/demos/pepivet/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Vecinos opinan', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const SERVICIOS = [
  {
    src: `${IMG}/golden.webp`,
    alt: 'Golden retriever atendido en la consulta de Pepivet',
    name: 'Consulta general',
    desc: 'Revisión completa de perros y gatos, con tiempo para explicar qué pasa y qué conviene hacer.',
  },
  {
    src: `${IMG}/cachorro.webp`,
    alt: 'Cachorro en brazos de su dueña dentro de la clínica',
    name: 'Vacunas y desparasitación',
    desc: 'Calendario de vacunación y control de parásitos para cachorros y adultos.',
  },
  {
    src: `${IMG}/cuy.webp`,
    alt: 'Cuy recibiendo atención con guantes en la clínica',
    name: 'Esterilización',
    desc: 'Esterilización de perros y gatos, con indicaciones claras para el postoperatorio en casa.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente atención, llevamos meses atendiendo a nuestra perrita. Se ha encargado de sus vacunas y esterilización. María José es una profesional empática, con vocación y comprometida. La recomiendo totalmente.',
    author: 'Evelyn Arto Orellana',
    when: 'Hace 3 meses',
  },
  {
    text: 'La mejor veterinaria del mundo, estamos muy agradecidos por su cercanía y profesionalismo.',
    author: 'Marcela Belén Soto Catalán',
    when: 'Hace 2 meses',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 – 19:00' },
  { days: 'Sábado', time: '10:00 – 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

/** Corazón con latido: el motivo gráfico del demo */
function HeartBeat({ className = 'w-4 h-4', stroke = 'currentColor' }: { className?: string; stroke?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20.2c-4.6-2.9-8.2-6-8.2-9.9 0-2.8 2-4.9 4.6-4.9 1.5 0 2.8.7 3.6 1.8.8-1.1 2.1-1.8 3.6-1.8 2.6 0 4.6 2.1 4.6 4.9 0 3.9-3.6 7-8.2 9.9Z" />
      <path d="M7.5 11.6h2.2l1.1-2 1.6 3.6 1.1-1.6h3" />
    </svg>
  )
}

function Label({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={`${body.className} text-[11px] uppercase tracking-[0.24em] font-extrabold flex items-center gap-2.5 ${className}`}
      style={{ color: C.terraDeep }}
    >
      <HeartBeat className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

function BtnWA({ href, children, ghost = false }: { href: string; children: React.ReactNode; ghost?: boolean }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${body.className} inline-block font-extrabold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
      style={
        ghost
          ? { border: `2px solid rgba(44,29,20,0.4)`, color: C.ink }
          : { backgroundColor: C.terra, color: C.paper }
      }
    >
      {children}
    </a>
  )
}

export default function PepivetPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={serif.className}
        theme={{
          over: 'light',
          bar: 'rgba(250,243,231,0.94)',
          ink: '#2C1D14',
          line: 'rgba(44,29,20,0.14)',
          btnBg: C.terra,
          btnInk: C.paper,
        }}
      />

      {/* ── Hero editorial: titular serif + foto enmarcada ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <HeartBeat className="absolute top-28 right-[6%] w-14 h-14 -rotate-6" stroke="rgba(182,79,40,0.14)" />
          <HeartBeat className="absolute bottom-16 left-[4%] w-20 h-20 rotate-8" stroke="rgba(182,79,40,0.1)" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-30 md:pt-40 pb-14 md:pb-20 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${body.className} text-[11px] uppercase tracking-[0.24em] font-extrabold mb-6 flex items-center gap-2.5`} style={{ color: C.terraDeep }}>
              <HeartBeat className="w-[15px] h-[15px]" />
              Veterinaria de barrio · Talca
            </p>
            <h1
              className={`${serif.className} leading-[1.04] text-[clamp(2.6rem,8vw,5rem)] mb-6`}
              style={{ color: C.ink }}
            >
              La veterinaria
              <br />
              <em style={{ color: C.terra }}>de confianza</em> del barrio
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
              En Diecisiete Sur 544, Pepivet atiende a las mascotas del
              sector con cercanía y vocación — sus {BIZ.reviewsLabel} reseñas
              lo dicen mejor que nosotros.
            </p>
            <div className="flex flex-wrap gap-3 mb-10">
              <BtnWA href={WA_LINK}>Agendar una hora</BtnWA>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-extrabold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(44,29,20,0.35)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.honey} />
              <span className="text-sm font-bold" style={{ color: C.ink }}>
                {BIZ.ratingLabel} · {BIZ.reviewsLabel} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl"
                style={{ backgroundColor: C.clay }}
                aria-hidden="true"
              />
              <div className="relative rounded-3xl overflow-hidden border shadow-xl" style={{ borderColor: 'rgba(44,29,20,0.2)' }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Perro blanco y negro mirando a cámara dentro de la clínica Pepivet"
                  width={675}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 40vw, 92vw"
                  className="w-full h-auto object-cover max-h-[64vh]"
                />
              </div>
              <figcaption
                className={`${serif.className} absolute -bottom-5 left-6 text-sm px-4 py-2.5 rounded-xl shadow-md`}
                style={{ backgroundColor: C.terra, color: C.paper }}
              >
                Paciente real de Pepivet
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Label className="mb-4">Servicios</Label>
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.06] mb-4`} style={{ color: C.ink }}>
              Lo esencial, bien hecho
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-10 md:mb-14" style={{ color: C.muted }}>
              Las atenciones que sus clientes nombran en las reseñas:
              consulta, vacunas, desparasitación y esterilización.
            </p>
          </Reveal>
          <ul className="grid md:grid-cols-3 gap-5 md:gap-6">
            {SERVICIOS.map((s) => (
              <Reveal key={s.name}>
                <li
                  className="group rounded-2xl overflow-hidden border h-full"
                  style={{ backgroundColor: C.cream, borderColor: C.line, boxShadow: '0 2px 8px rgba(44,29,20,0.06)' }}
                >
                  <div className="relative overflow-hidden aspect-[5/4]">
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${serif.className} text-2xl mb-2 flex items-center gap-3`} style={{ color: C.ink }}>
                      <HeartBeat className="w-4 h-4 shrink-0" stroke={C.terra} />
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
        </div>
      </section>

      {/* ── La veterinaria del sector ── */}
      <section style={{ backgroundColor: C.clay }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <Reveal>
            <Label className="mb-5">Por qué elegirla</Label>
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Pequeña, cercana
              <br />
              y <em style={{ color: C.terra }}>con vocación</em>
            </h2>
            <ul className="space-y-4">
              {[
                '“Vocación” es la palabra más repetida en sus 153 reseñas.',
                'La Dra. María José es nombrada por sus clientes por su empatía.',
                'Atención de perros, gatos y también pequeños animales como cuyes.',
                'A pasos de 17 Sur con 5 Oriente: se llega a pie desde el barrio.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm md:text-base leading-relaxed" style={{ color: C.ink }}>
                  <HeartBeat className="w-4 h-4 mt-1 shrink-0" stroke={C.terraDeep} />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl border p-8 md:p-10" style={{ backgroundColor: C.paper, borderColor: C.line }}>
              <p className={`${serif.className} text-2xl md:text-3xl leading-snug mb-6`} style={{ color: C.ink }}>
                “María José es una profesional <em style={{ color: C.terra }}>empática, con vocación y comprometida</em>.”
              </p>
              <div className="flex items-center justify-between gap-3">
                <span className="text-sm font-bold" style={{ color: C.muted }}>
                  Evelyn Arto Orellana · reseña de Google
                </span>
                <Stars value={5} color={C.honey} className="w-3.5 h-3.5" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Label className="mb-4">Vecinos opinan</Label>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-12">
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              {BIZ.ratingLabel} estrellas,
              <br />
              <em style={{ color: C.terra }}>{BIZ.reviewsLabel} reseñas</em>
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.terraDeep, textDecorationColor: 'rgba(138,52,24,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 110}>
              <figure
                className="rounded-2xl p-6 md:p-8 border h-full flex flex-col"
                style={{ backgroundColor: C.paper, borderColor: C.line, boxShadow: '0 2px 8px rgba(44,29,20,0.05)' }}
              >
                <Stars value={5} color={C.honey} className="w-4 h-4" />
                <blockquote className={`${serif.className} text-lg md:text-xl leading-relaxed mt-4 mb-5 flex-1`} style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <span className="block text-sm font-bold" style={{ color: C.ink }}>{t.author}</span>
                  <span className="block text-[11px] uppercase tracking-[0.14em] font-bold" style={{ color: C.muted }}>
                    {t.when} · Google
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Horario + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Label className="mb-4">Horario y ubicación</Label>
            <h2 className={`${serif.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Diecisiete Sur 544,
              <br />
              <em style={{ color: C.terra }}>Talca</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-extrabold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(44,29,20,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.terraDeep} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
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
              <BtnWA href={WA_LINK}>Agendar por WhatsApp</BtnWA>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-extrabold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(44,29,20,0.35)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.cream }}>
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
      <section style={{ backgroundColor: C.terraDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center relative overflow-hidden">
          <HeartBeat className="absolute top-10 left-[10%] w-12 h-12 -rotate-12" stroke="rgba(250,243,231,0.14)" />
          <HeartBeat className="absolute bottom-10 right-[8%] w-16 h-16 rotate-12" stroke="rgba(250,243,231,0.1)" />
          <Reveal>
            <h2 className={`${serif.className} text-[clamp(2.1rem,6.5vw,4.2rem)] leading-[1.05] mb-6`} style={{ color: C.cream }}>
              Tu mascota conoce
              <br />
              <em style={{ color: C.honey }}>de buenas manos</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(250,243,231,0.85)' }}>
              Lunes a viernes hasta las 19:00 y sábado hasta las 13:00.
              Agenda por WhatsApp y lleva a tu mascota al barrio.
            </p>
            <BtnWA href={WA_LINK}>Agendar una hora</BtnWA>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.terraDeep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 md:py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5 border-t" style={{ borderColor: 'rgba(250,243,231,0.18)' }}>
          <div>
            <p className={`${serif.className} text-xl mb-1.5 flex items-center gap-3`}>
              <HeartBeat className="w-5 h-5" stroke={C.honey} />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,243,231,0.8)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(250,243,231,0.8)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,243,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2 md:py-3 text-xs leading-relaxed" style={{ color: 'rgba(250,243,231,0.72)' }}>
            Datos, horarios y reseñas según la ficha pública de Google Maps;
            confirmar detalles al publicar.
          </p>
        </div>
        <div className="px-5 pt-1 pb-3 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
