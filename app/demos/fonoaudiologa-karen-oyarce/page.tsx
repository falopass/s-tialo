import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { NAV_LINKS, OpenBadge } from './chrome'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  HOURS,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  deep: '#0E2A28',
  // teal oscuro: texto y links sobre fondos claros (AA en tamaño chico)
  tealDeep: '#0B4A44',
  // fondo de botones con texto blanco (≥4.5:1)
  tealBtn: '#0D5F58',
  // menta claro: acentos sobre fondos oscuros (≥4.5:1)
  mint: '#A9E0D2',
  // acento cálido pequeño sobre fondos oscuros (≥4.5:1)
  apricot: '#E0A878',
  paper: '#F4FAF7',
  card: '#FDFEFE',
  ink: '#17302E',
  muted: '#4A615E',
  line: 'rgba(23,48,46,0.14)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B4A44]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-[#0E2A28]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0B4A44]'

export const metadata: Metadata = demoMetadata({
  slug: 'fonoaudiologa-karen-oyarce',
  title: 'Karen Oyarce — Fonoaudióloga en Talca',
  description:
    'Fonoaudióloga en Talca: consulta, terapia de voz y lenguaje, lavado de oído, evaluación TEA y atención a domicilio. Agenda por WhatsApp.',
  image: '/demos/fonoaudiologa-karen-oyarce/karen.webp',
})

const SERVICES = [
  {
    name: 'Consulta de fonoaudiología',
    time: '45 min',
    price: '$30.000',
    desc: 'Evaluación y orientación inicial: se revisa tu caso y se define el plan a seguir.',
  },
  {
    name: 'Lavado de oído',
    time: '30 min',
    price: '$30.000',
    desc: 'Procedimiento en consulta para retirar tapones de cerumen de forma segura.',
  },
  {
    name: 'Evaluación a domicilio',
    time: '45 min',
    price: '$45.000',
    desc: 'La evaluación fonoaudiológica realizada en tu casa, para quienes no pueden trasladarse.',
  },
  {
    name: 'Evaluación TEA (ADOS)',
    time: '2 sesiones',
    price: '$60.000',
    desc: 'Evaluación fonoaudiológica con módulo ADOS para sospecha de trastorno del espectro autista.',
  },
]

const AREAS = [
  {
    name: 'Habla y lenguaje',
    items: [
      'Terapia del habla y el lenguaje',
      'Dislalia y articulación',
      'Estimulación temprana del lenguaje',
    ],
  },
  {
    name: 'Voz',
    items: [
      'Disfonía y cuidado de la voz',
      'Terapia de voz',
      'Entrenamiento vocal',
    ],
  },
  {
    name: 'Oído, deglución y TEA',
    items: [
      'Lavado de oído',
      'Evaluación de la deglución',
      'Evaluación ADOS para TEA',
    ],
  },
]

const STEPS = [
  {
    n: '01',
    name: 'Escríbeme por WhatsApp',
    desc: 'Cuéntame qué necesitas: consulta, evaluación o lavado de oído.',
  },
  {
    n: '02',
    name: 'Coordinamos la hora',
    desc: 'Presencial en Centro Pichimapu, a domicilio o remota, según tu caso.',
  },
  {
    n: '03',
    name: 'Asistes a tu consulta',
    desc: 'Evaluación clara y plan de trabajo pensado para ti o tu hijo.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.mint : C.tealDeep }}
    >
      <span
        className="inline-block w-8 h-px"
        style={{ backgroundColor: light ? C.mint : C.tealBtn }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

export default function KarenOyarcePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,250,247,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.tealBtn,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero editorial ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <div
          className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(169,224,210,0.5) 0%, rgba(169,224,210,0) 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Fonoaudiología · Talca · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,7.5vw,4.4rem)] mb-6`}
              style={{ color: C.deep }}
            >
              Voz, lenguaje y audición,
              <br />
              <span style={{ color: C.tealBtn }}>con hora agendada</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
              Atención fonoaudiológica para niños y adultos en Talca:
              consulta presencial en Centro Pichimapu, evaluación a
              domicilio y atención remota.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.tealBtn, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} ${BTN_GHOST} text-sm md:text-base px-7 py-3.5`}
                style={{ borderColor: 'rgba(14,42,40,0.4)', color: C.deep }}
              >
                Ver servicios y valores
              </a>
            </div>
            <OpenBadge />
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div
                className="absolute -inset-3 rounded-[2rem] rotate-2"
                style={{ backgroundColor: C.mint }}
                aria-hidden="true"
              />
              <img
                src={`${IMG}/karen.webp`}
                alt="Fonoaudióloga Karen Oyarce"
                className="relative w-full aspect-square object-cover rounded-3xl"
              />
              <figcaption
                className="absolute left-4 right-4 bottom-4 rounded-2xl px-4 py-3 flex items-center justify-between gap-3"
                style={{ backgroundColor: 'rgba(244,250,247,0.92)', backdropFilter: 'blur(8px)' }}
              >
                <div>
                  <p className={`${display.className} text-base leading-tight`} style={{ color: C.deep }}>
                    {BIZ.full}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </p>
                </div>
                <Stars value={5} color={C.tealBtn} className="w-4 h-4 shrink-0" />
              </figcaption>
            </figure>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
            <span>Presencial · domicilio · remota</span>
            <span>{HOURS[0].days} {HOURS[0].time}</span>
            <span>{HOURS[1].days} {HOURS[1].time}</span>
            <span className="hidden md:inline" style={{ color: C.tealDeep }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios con precio publicado ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Servicios y valores</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`} style={{ color: C.paper }}>
                Agenda con precio
                <br />
                a la vista
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: 'rgba(244,250,247,0.7)' }}>
                Valores publicados en su agenda online; la disponibilidad
                se confirma por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {SERVICES.map((s, i) => (
              <Reveal key={s.name} delay={i * 80}>
                <article
                  className="rounded-2xl p-6 md:p-7 h-full flex flex-col"
                  style={{ backgroundColor: 'rgba(244,250,247,0.06)', border: '1px solid rgba(244,250,247,0.16)' }}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <h3 className={`${display.className} text-xl md:text-2xl leading-tight`} style={{ color: C.paper }}>
                      {s.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold shrink-0" style={{ color: C.apricot }}>
                      {s.time}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgba(244,250,247,0.72)' }}>
                    {s.desc}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-4">
                    <p className={`${display.className} text-2xl md:text-3xl`} style={{ color: C.mint }}>
                      {s.price}
                    </p>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${BTN_SOLID} text-xs md:text-sm px-5 py-2.5 font-bold`}
                      style={{ backgroundColor: C.tealBtn, color: '#FFFFFF' }}
                    >
                      Agendar →
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Áreas de atención ── */}
      <section id="areas" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Áreas de atención</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`} style={{ color: C.deep }}>
              Niños y adultos
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {AREAS.map((a, i) => (
              <Reveal key={a.name} delay={i * 90}>
                <article
                  className="rounded-2xl p-6 md:p-7 h-full"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <h3 className={`${display.className} text-xl md:text-2xl mb-5`} style={{ color: C.tealDeep }}>
                    {a.name}
                  </h3>
                  <ul className="space-y-3 text-sm leading-relaxed" style={{ color: C.ink }}>
                    {a.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="w-1.5 h-1.5 rounded-full shrink-0 mt-2" style={{ backgroundColor: C.tealBtn }} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseña real ── */}
      <section style={{ backgroundColor: '#E8F3EE' }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <div className="flex justify-center mb-5">
              <Stars value={5} color={C.tealBtn} className="w-5 h-5" />
            </div>
            <blockquote
              className={`${display.className} text-xl md:text-2xl leading-[1.3] mb-5`}
              style={{ color: C.deep }}
            >
              “Excelente atención y mejor profesionalismo.”
            </blockquote>
            <p className="text-xs uppercase tracking-[0.18em] font-bold" style={{ color: C.tealDeep }}>
              Paciente verificado en AgendaPro · {BIZ.rating} ★
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo agendar ── */}
      <section id="agendar" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Cómo agendar</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`} style={{ color: C.deep }}>
              Tres pasos y listo
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <article
                  className="rounded-2xl p-6 md:p-7 h-full"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
                >
                  <span className={`${display.className} text-3xl block mb-4`} style={{ color: C.tealBtn }} aria-hidden="true">
                    {s.n}
                  </span>
                  <h3 className={`${display.className} text-xl mb-2`} style={{ color: C.deep }}>
                    {s.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} inline-block text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.tealBtn, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div className="rounded-2xl p-6 md:p-8 h-full" style={{ backgroundColor: 'rgba(244,250,247,0.06)', border: '1px solid rgba(244,250,247,0.16)' }}>
              <Eyebrow light>Ubicación</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-4xl leading-[1.1] mb-6`} style={{ color: C.paper }}>
                Centro Pichimapu,
                <br />
                Talca
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(244,250,247,0.85)' }}>
                {BIZ.address}
                <br />
                {BIZ.detail}
                <br />
                {BIZ.commune}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A9E0D2]">{BIZ.phoneDisplay}</a>
              </address>
              <ul className="text-sm leading-relaxed mb-8 space-y-1" style={{ color: 'rgba(244,250,247,0.65)' }}>
                {HOURS.map((h) => (
                  <li key={h.days}>
                    {h.days}: {h.time}
                  </li>
                ))}
                <li>Atención remota y a domicilio disponible.</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} text-sm px-6 py-3`}
                  style={{ backgroundColor: C.tealBtn, color: '#FFFFFF' }}
                >
                  Agendar hora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3`}
                  style={{ borderColor: 'rgba(244,250,247,0.5)', color: C.paper }}
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[320px] h-full shadow-2xl">
              <LazyMap
                title={`Mapa: ${BIZ.full}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 border-t" style={{ borderColor: C.line }}>
          <p className={`${display.className} text-lg mb-1`}>{BIZ.full}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.detail} · {BIZ.city}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 transition-colors hover:text-[#0E2A28] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B4A44]">{BIZ.phoneDisplay}</a>
          </address>
          <p className="text-xs leading-relaxed mt-3" style={{ color: C.muted }}>
            Sitio de ejemplo de Sitiazo con datos publicados en su agenda
            online; textos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.full} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.full}`} />
    </div>
  )
}
