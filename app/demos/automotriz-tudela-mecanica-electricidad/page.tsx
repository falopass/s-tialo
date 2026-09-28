import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { AREAS, BIZ, C, HOURS, MAPS_EMBED, MAPS_URL, PASOS, SINTOMAS, WA_LINK } from './content'

const IMG = '/demos/automotriz-tudela-mecanica-electricidad'

const display = localFont({ src: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700' })
const body = localFont({ src: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' })

export const metadata: Metadata = demoMetadata({
  slug: 'automotriz-tudela-mecanica-electricidad',
  title: 'Automotriz Tudela · Mecánica y electricidad automotriz en Talca',
  description:
    'Taller de mecánica y electricidad automotriz en Talca. Lunes a viernes de 09:00 a 19:00. Escribe por WhatsApp y coordina la revisión de tu vehículo.',
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const btn = `${display.className} inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-lg font-semibold uppercase tracking-wider transition-transform active:scale-95 ${focusRing} tap-44`

function Bolt({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />
    </svg>
  )
}

function Eyebrow({ children, color = C.voltDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${display.className} mb-3 flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.24em]`} style={{ color }}>
      <Bolt />
      {children}
    </p>
  )
}

function AreaIcon({ n }: { n: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (n === '01')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M14.7 6.3 a4 4 0 0 0 5 5 l-9 9 a2.1 2.1 0 0 1 -3 -3 l9 -9 Z" />
        <path d="M3 5 L6 8 M4 3 L8 7" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
      <path d="M13 2 L4 14 H11 L10 22 L20 9 H13 Z" />
    </svg>
  )
}

export default function AutomotrizTudelaPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.steel, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navy, color: C.steel }}>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 85% 20%, rgba(245,196,0,0.14), transparent 60%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(79,209,224,0.12), transparent 60%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-24 md:grid-cols-[1fr_1.05fr] md:items-center md:px-8 md:pb-20 md:pt-32">
          <Reveal>
            <Eyebrow color={C.volt}>Taller mecánico · {BIZ.city}</Eyebrow>
            <h1 className={`${display.className} text-[clamp(3.2rem,12vw,6.4rem)] font-bold uppercase leading-[1] tracking-[-0.01em]`}>
              Mecánica y
              <br />
              <span style={{ color: C.volt }}>electricidad</span>
              <br />
              en un solo taller.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Si el auto no enciende, suena raro o una luz del tablero no se apaga, escribe por WhatsApp y coordinamos la revisión.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.volt, color: C.navy }}>
                <Bolt /> Agendar por WhatsApp
              </a>
              <a href="#areas" className={`${btn} border`} style={{ borderColor: 'rgba(220,227,236,0.4)', color: C.steel, paddingTop: 11, paddingBottom: 11 }}>
                Ver áreas
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {HOURS.map((h) => (
                <span key={h.days} className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm" style={{ borderColor: C.lineOnDark, color: C.mutedOnDark }}>
                  <span className={`${display.className} font-semibold uppercase tracking-wider`} style={{ color: C.steel }}>
                    {h.days}
                  </span>
                  {h.time}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] border shadow-2xl" style={{ borderColor: C.lineOnDark }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Auto en el elevador del taller Automotriz Tudela"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div
                className={`${display.className} absolute -bottom-4 left-5 inline-flex items-center gap-2 rounded-md px-3.5 py-2 text-sm font-semibold uppercase tracking-[0.18em] shadow-lg md:left-8`}
                style={{ backgroundColor: C.volt, color: C.navy }}
              >
                <Bolt /> Diagnóstico eléctrico
              </div>
            </div>
          </Reveal>
        </div>
        {/* cable inferior */}
        <div className="h-[6px] w-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.volt} 0 28px, transparent 28px 40px)` }} aria-hidden="true" />
      </section>

      {/* ── Áreas ── */}
      <section id="areas" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>Dos áreas</Eyebrow>
                <h2 className={`${display.className} text-5xl font-bold uppercase leading-[1] md:text-7xl`}>
                  Lo mecánico y <span style={{ color: C.voltDeep }}>lo eléctrico</span>, sin pasearte.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Muchas fallas mezclan las dos cosas. Acá se revisan en el mismo lugar, con un solo diagnóstico.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
            {AREAS.map((a, i) => (
              <Reveal key={a.n} delay={i * 100}>
                <article
                  className="relative flex h-full flex-col overflow-hidden rounded-[22px] transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: i === 0 ? '#fff' : C.navy, color: i === 0 ? C.ink : C.steel, boxShadow: '0 14px 34px rgba(14,27,46,0.08)' }}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={`${IMG}/${a.photo}`}
                      alt={a.photoAlt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 md:p-8">
                  <div className="flex items-start justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ backgroundColor: i === 0 ? C.steel : C.navy2, color: i === 0 ? C.navy : C.volt }}>
                      <AreaIcon n={a.n} />
                    </span>
                    <span className={`${display.className} text-4xl font-bold leading-none`} style={{ color: i === 0 ? C.muted : C.volt }} aria-hidden="true">
                      {a.n}
                    </span>
                  </div>
                  <h3 className={`${display.className} mt-6 text-4xl font-bold uppercase leading-none`}>{a.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed" style={{ color: i === 0 ? C.muted : C.mutedOnDark }}>
                    {a.desc}
                  </p>
                  <span className={`${display.className} mt-6 inline-flex w-fit rounded-md px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.18em]`} style={{ backgroundColor: C.volt, color: C.navy }}>
                    {a.tag}
                  </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Síntomas ── */}
      <section id="sintomas" className="scroll-mt-20" style={{ backgroundColor: C.navy, color: C.steel }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1fr_1fr] md:items-center md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow color={C.volt}>¿Qué le pasa?</Eyebrow>
            <h2 className={`${display.className} text-5xl font-bold uppercase leading-[1] md:text-6xl`}>
              Cuéntanos el síntoma,
              <br />
              <span style={{ color: C.volt }}>del resto se encarga el taller.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
              No necesitas saber qué pieza falla. Describe lo que notas y con eso se coordina la revisión.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul className="grid grid-cols-2 gap-3">
              {SINTOMAS.map((s, i) => (
                <li key={s} className="flex items-center gap-3 rounded-xl border p-4" style={{ borderColor: C.lineOnDark, backgroundColor: C.navy2 }}>
                  <span className={`${display.className} flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-sm font-bold`} style={{ backgroundColor: C.volt, color: C.navy }}>
                    {i + 1}
                  </span>
                  <span className="text-sm font-medium leading-tight">{s}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Pasos ── */}
      <section id="pasos" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Cómo funciona</Eyebrow>
            <h2 className={`${display.className} max-w-2xl text-5xl font-bold uppercase leading-[1] md:text-6xl`}>
              Primero el diagnóstico, <span style={{ color: C.voltDeep }}>después el presupuesto.</span>
            </h2>
          </Reveal>
          <ol className="relative mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            <span className="absolute left-0 right-0 top-[38px] hidden border-t-2 border-dashed md:block" style={{ borderColor: C.steel2 }} aria-hidden="true" />
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li className="relative h-full rounded-[22px] bg-white p-6" style={{ boxShadow: '0 14px 34px rgba(14,27,46,0.06)' }}>
                  <span className={`${display.className} flex h-11 w-11 items-center justify-center rounded-lg text-xl font-bold`} style={{ backgroundColor: C.navy, color: C.volt }}>
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} mt-5 text-2xl font-semibold uppercase leading-tight`}>{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8 w-full sm:w-auto`} style={{ backgroundColor: C.navy, color: C.volt }}>
              <Bolt /> Escribir al taller
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El taller (fotos reales de su ficha de Maps) ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.navy2, color: C.steel }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow color={C.volt}>El taller</Eyebrow>
            <h2 className={`${display.className} text-5xl font-bold uppercase leading-[1] md:text-6xl`}>
              Trabajo real, <span style={{ color: C.volt }}>en el taller real.</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
              Fotos que el taller publica en su ficha de Google Maps.
            </p>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {[
              { src: 'taller.webp', alt: 'Mecánico trabajando bajo el capó en Automotriz Tudela' },
              { src: 'diagnostico.webp', alt: 'Diagnóstico de motor con tablet en el taller' },
              { src: 'frenos.webp', alt: 'Trabajo de frenos en el taller Automotriz Tudela' },
              { src: 'embrague.webp', alt: 'Pieza de embrague reparada en el taller' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <li className="relative aspect-[4/5] overflow-hidden rounded-[16px] border" style={{ borderColor: C.lineOnDark }}>
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#fff' }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <Reveal>
              <Eyebrow>Dónde estamos</Eyebrow>
              <h2 className={`${display.className} text-5xl font-bold uppercase leading-[1] md:text-6xl`}>
                {BIZ.city}, <span style={{ color: C.voltDeep }}>Maule</span>
              </h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.navy, color: C.volt }}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border-2`} style={{ borderColor: C.navy, color: C.navy, paddingTop: 10, paddingBottom: 10 }}>
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-[22px] p-6 md:p-7" style={{ backgroundColor: C.steel }}>
                <p className={`${display.className} flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em]`} style={{ color: C.voltDeep }}>
                  <Bolt /> Horario del taller
                </p>
                <dl className="mt-3 divide-y text-[15px]" style={{ borderColor: C.line }}>
                  {HOURS.map((h) => (
                    <div key={h.days} className="flex justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                      <dt className="font-medium" style={{ color: C.muted }}>
                        {h.days}
                      </dt>
                      <dd className={`${display.className} text-lg font-semibold`}>{h.time}</dd>
                    </div>
                  ))}
                  <div className="flex justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                    <dt className="font-medium" style={{ color: C.muted }}>
                      WhatsApp
                    </dt>
                    <dd className={`${display.className} text-lg font-semibold`}>{BIZ.phoneDisplay}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="mt-8 overflow-hidden rounded-[22px] border" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="h-[280px] w-full md:h-[320px]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.navy, color: C.steel }}>
        <div className="h-[6px] w-full" style={{ backgroundImage: `repeating-linear-gradient(90deg, ${C.volt} 0 28px, transparent 28px 40px)` }} aria-hidden="true" />
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-7 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className={`${display.className} text-2xl font-bold uppercase tracking-wide`}>{BIZ.short}</p>
            <p className="text-xs" style={{ color: C.mutedOnDark }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              WhatsApp
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Google Maps
            </a>
            <span style={{ color: C.volt }}>
              <Bolt className="h-5 w-5" />
            </span>
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.short} />
    </div>
  )
}
