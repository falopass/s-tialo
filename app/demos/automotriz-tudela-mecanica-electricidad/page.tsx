import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { AREAS, BIZ, C, HOURS, MAPS_URL, PASOS, SINTOMAS, WA_LINK } from './content'

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

/** Escena del hero: frente de un auto con el capó abierto y un tester conectado a la batería. */
function Diagnostic() {
  return (
    <svg viewBox="0 0 720 480" className="h-auto w-full" role="img" aria-label="Ilustración de un auto con el capó abierto y un tester eléctrico conectado a la batería">
      <defs>
        <linearGradient id="td-bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#152841" />
          <stop offset="1" stopColor="#0E1B2E" />
        </linearGradient>
        <linearGradient id="td-body" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#E9EEF4" />
          <stop offset="1" stopColor="#B9C4D2" />
        </linearGradient>
        <linearGradient id="td-hood" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#F4F7FA" />
          <stop offset="1" stopColor="#CBD5E1" />
        </linearGradient>
        <radialGradient id="td-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#4FD1E0" stopOpacity="0.5" />
          <stop offset="1" stopColor="#4FD1E0" stopOpacity="0" />
        </radialGradient>
        <pattern id="td-grid" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M36 0H0V36" fill="none" stroke="rgba(220,227,236,0.07)" />
        </pattern>
      </defs>
      <rect width="720" height="480" fill="url(#td-bg)" />
      <rect width="720" height="480" fill="url(#td-grid)" />
      <rect y="380" width="720" height="100" fill="#0A1524" />
      <path d="M0 380H720" stroke="rgba(220,227,236,0.2)" />
      <ellipse cx="360" cy="384" rx="260" ry="12" fill="#000" opacity="0.5" />

      {/* motor visible */}
      <rect x="196" y="160" width="328" height="120" rx="10" fill="#1B2D46" />
      <rect x="216" y="176" width="130" height="88" rx="8" fill="#243B5A" />
      {[232, 262, 292, 322].map((x) => (
        <rect key={x} x={x} y="186" width="14" height="30" rx="3" fill="#3B5578" />
      ))}
      <path d="M216 232 H346" stroke="#3B5578" strokeWidth="6" />
      {/* batería */}
      <rect x="372" y="190" width="130" height="74" rx="8" fill="#0E1B2E" stroke="#4E5B6B" strokeWidth="3" />
      <rect x="386" y="180" width="18" height="14" rx="3" fill="#C4CEDA" />
      <rect x="466" y="180" width="18" height="14" rx="3" fill="#F5C400" />
      <text x="392" y="236" fontSize="22" fontWeight="700" fill="#F5C400" fontFamily="inherit">
        12V
      </text>
      <path d="M470 222 H492 M481 211 V233" stroke="#F5C400" strokeWidth="4" strokeLinecap="round" />
      <path d="M394 258 H414" stroke="#C4CEDA" strokeWidth="4" strokeLinecap="round" />

      {/* carrocería */}
      <path d="M150 380 V300 C150 288 158 280 170 280 L196 280 L216 250 C224 240 232 236 246 236 L474 236 C488 236 496 240 504 250 L524 280 L550 280 C562 280 570 288 570 300 V380 Z" fill="url(#td-body)" />
      <path d="M150 300 L570 300" stroke="rgba(14,27,46,0.18)" strokeWidth="2" />
      {/* parachoques */}
      <rect x="140" y="332" width="440" height="48" rx="10" fill="#C4CEDA" />
      <rect x="250" y="342" width="220" height="28" rx="6" fill="#0E1B2E" />
      {[268, 300, 332, 364, 396, 428].map((x) => (
        <rect key={x} x={x} y="348" width="10" height="16" rx="2" fill="#243B5A" />
      ))}
      {/* faros */}
      <path d="M160 296 H236 C244 296 248 302 246 310 L240 326 H160 Z" fill="#F5C400" />
      <path d="M560 296 H484 C476 296 472 302 474 310 L480 326 H560 Z" fill="#F5C400" />
      <path d="M170 302 H228" stroke="#fff" strokeOpacity="0.6" strokeWidth="3" />
      <path d="M492 302 H550" stroke="#fff" strokeOpacity="0.6" strokeWidth="3" />
      {/* parrilla */}
      <rect x="268" y="290" width="184" height="30" rx="6" fill="#0E1B2E" />
      <rect x="276" y="298" width="168" height="4" fill="#3B5578" />
      <rect x="276" y="308" width="168" height="4" fill="#3B5578" />
      {/* capó abierto */}
      <path d="M204 236 L232 128 C236 118 244 112 256 112 L464 112 C476 112 484 118 488 128 L516 236 Z" fill="url(#td-hood)" />
      <path d="M232 128 L488 128" stroke="rgba(14,27,46,0.15)" />
      <path d="M262 124 L262 224 M458 124 L458 224" stroke="rgba(14,27,46,0.12)" />
      {/* soporte */}
      <path d="M208 236 L226 150" stroke="#4E5B6B" strokeWidth="5" strokeLinecap="round" />
      {/* ruedas */}
      <rect x="172" y="360" width="60" height="36" rx="8" fill="#0A1524" />
      <rect x="488" y="360" width="60" height="36" rx="8" fill="#0A1524" />

      {/* tester */}
      <g>
        <circle cx="480" cy="196" r="52" fill="url(#td-glow)" />
        <path d="M478 190 C540 160 600 120 620 74" stroke="#0E1B2E" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M478 190 C540 160 600 120 620 74" stroke="#F5C400" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M398 188 C380 150 372 110 392 74" stroke="#0E1B2E" strokeWidth="9" fill="none" strokeLinecap="round" />
        <path d="M398 188 C380 150 372 110 392 74" stroke="#4E5B6B" strokeWidth="4" fill="none" strokeLinecap="round" />
        <g transform="translate(560 30)">
          <rect width="120" height="76" rx="10" fill="#F5C400" />
          <rect x="10" y="10" width="100" height="36" rx="5" fill="#0E1B2E" />
          <text x="18" y="37" fontSize="24" fontWeight="700" fill="#4FD1E0" fontFamily="inherit" letterSpacing="1">
            12.6 V
          </text>
          {[14, 40, 66].map((x) => (
            <circle key={x} cx={x + 6} cy="62" r="5" fill="#0E1B2E" />
          ))}
          <rect x="88" y="56" width="22" height="12" rx="3" fill="#0E1B2E" />
        </g>
      </g>
      {/* chispa */}
      <path d="M466 176 L458 164 L470 166 L464 154" stroke="#4FD1E0" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
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
              <div className="overflow-hidden rounded-[22px] border shadow-2xl" style={{ borderColor: C.lineOnDark }}>
                <Diagnostic />
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
                  className="relative flex h-full flex-col overflow-hidden rounded-[22px] p-6 transition-transform hover:-translate-y-1 md:p-8"
                  style={{ backgroundColor: i === 0 ? '#fff' : C.navy, color: i === 0 ? C.ink : C.steel, boxShadow: '0 14px 34px rgba(14,27,46,0.08)' }}
                >
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
