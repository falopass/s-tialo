import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { BIZ, C, ESPACIOS, EVENTOS, MAPS_URL, PASOS, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', style: 'italic' },
  ],
  weight: '300 700',
})
const body = localFont({ src: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800' })

export const metadata: Metadata = demoMetadata({
  slug: 'villa-antillanca-hotel-centro-eventos',
  title: 'Villa Antillanca · Hotel & Centro de Eventos en Talca',
  description:
    'Hotel y centro de eventos camino a San Clemente, Talca. Habitaciones, salón de eventos, bar-restaurante y piscina. Consulta disponibilidad por WhatsApp.',
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'
const btn = `${body.className} inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-bold tracking-wide transition-transform active:scale-95 ${focusRing} tap-44`

/** Motivo gráfico: filete dorado con rombo, como en la papelería de un hotel de campo. */
function Ornament({ color = C.gold, className = '' }: { color?: string; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`} aria-hidden="true">
      <span className="h-px w-8" style={{ backgroundColor: color }} />
      <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: color }} />
      <span className="h-px w-8" style={{ backgroundColor: color }} />
    </span>
  )
}

function Eyebrow({ children, color = C.goldDeep }: { children: React.ReactNode; color?: string }) {
  return (
    <p className={`${body.className} mb-3 text-[12px] font-bold uppercase tracking-[0.26em]`} style={{ color }}>
      {children}
    </p>
  )
}

/** Escena del hero: la villa al atardecer, con su piscina y los árboles del camino a San Clemente. */
function VillaScene() {
  return (
    <svg viewBox="0 0 720 500" className="h-auto w-full" role="img" aria-label="Ilustración de una villa con piscina al atardecer, entre árboles, con cerros al fondo">
      <defs>
        <linearGradient id="va-sky" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#1E3A2F" />
          <stop offset="0.55" stopColor="#7A5A3A" />
          <stop offset="1" stopColor="#E3C577" />
        </linearGradient>
        <linearGradient id="va-hill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3C5E4B" />
          <stop offset="1" stopColor="#264A3B" />
        </linearGradient>
        <linearGradient id="va-lawn" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#3F6B4E" />
          <stop offset="1" stopColor="#1E3A2F" />
        </linearGradient>
        <linearGradient id="va-pool" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#8FC6C9" />
          <stop offset="1" stopColor="#4A8E96" />
        </linearGradient>
        <linearGradient id="va-wall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#FBF6EA" />
          <stop offset="1" stopColor="#E7DCC6" />
        </linearGradient>
      </defs>

      <rect width="720" height="500" fill="url(#va-sky)" />
      <circle cx="540" cy="228" r="46" fill="#F3D98A" />
      <circle cx="540" cy="228" r="70" fill="#F3D98A" opacity="0.18" />

      {/* cerros */}
      <path d="M0 262 C90 220 160 232 230 214 C300 196 360 230 430 222 C500 214 560 180 640 206 C680 218 700 226 720 232 V330 H0 Z" fill="url(#va-hill)" />
      <path d="M0 300 C80 282 150 296 220 280 C290 264 360 292 440 284 C520 276 590 262 720 286 V340 H0 Z" fill="#2B5040" />

      {/* césped */}
      <rect y="330" width="720" height="170" fill="url(#va-lawn)" />

      {/* villa */}
      <g>
        <path d="M200 216 L360 168 L520 216 Z" fill="#9E4E30" />
        <rect x="212" y="214" width="296" height="126" fill="url(#va-wall)" />
        <path d="M196 214 H524 L516 226 H204 Z" fill="#B85C38" />
        {/* arcos */}
        {[244, 304, 364, 424].map((x) => (
          <g key={x}>
            <path d={`M${x} 340 V282 A22 22 0 0 1 ${x + 44} 282 V340 Z`} fill="#1E3A2F" />
            <path d={`M${x + 4} 340 V284 A18 18 0 0 1 ${x + 40} 284 V340 Z`} fill="#F3D98A" opacity="0.9" />
          </g>
        ))}
        {/* ventanas superiores */}
        {[236, 292, 348, 404, 460].map((x) => (
          <rect key={x} x={x} y="232" width="26" height="30" rx="2" fill="#1E3A2F" />
        ))}
        {[236, 292, 348, 404, 460].map((x) => (
          <rect key={`l${x}`} x={x + 3} y="235" width="20" height="24" rx="1" fill="#F3D98A" opacity="0.85" />
        ))}
        <path d="M212 268 H508" stroke="#B7892B" strokeWidth="3" />
        {/* torreón */}
        <rect x="336" y="176" width="48" height="42" fill="url(#va-wall)" />
        <path d="M328 178 L360 150 L392 178 Z" fill="#9E4E30" />
        <rect x="352" y="186" width="16" height="22" rx="8" fill="#1E3A2F" />
      </g>

      {/* terraza y piscina */}
      <rect x="150" y="340" width="420" height="14" fill="#E7DCC6" />
      <path d="M180 372 H540 L520 440 H200 Z" fill="#DCCFB4" />
      <path d="M196 380 H524 L508 430 H212 Z" fill="url(#va-pool)" />
      <path d="M212 396 H504" stroke="#fff" strokeOpacity="0.5" strokeWidth="2" />
      <path d="M226 414 H488" stroke="#fff" strokeOpacity="0.35" strokeWidth="2" />
      <path d="M312 384 H408 L400 428 H320 Z" fill="#F3D98A" opacity="0.25" />

      {/* árboles */}
      {[
        [70, 300, 1.15],
        [130, 322, 0.85],
        [640, 296, 1.2],
        [590, 326, 0.8],
      ].map(([x, y, s]) => (
        <g key={`${x}`} transform={`translate(${x} ${y}) scale(${s})`}>
          <rect x="-6" y="40" width="12" height="60" fill="#3B2A1E" />
          <path d="M0 -70 L44 28 H-44 Z" fill="#1E3A2F" />
          <path d="M0 -30 L52 50 H-52 Z" fill="#264A3B" />
          <path d="M0 6 L58 72 H-58 Z" fill="#2E5A46" />
        </g>
      ))}

      {/* faroles */}
      {[170, 550].map((x) => (
        <g key={x}>
          <rect x={x - 2} y="352" width="4" height="70" fill="#1C231F" />
          <circle cx={x} cy="350" r="7" fill="#F3D98A" />
          <circle cx={x} cy="350" r="16" fill="#F3D98A" opacity="0.18" />
        </g>
      ))}
    </svg>
  )
}

function SpaceIcon({ n }: { n: string }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  if (n === '01')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M3 18 V10 H21 V18" />
        <path d="M3 21 V18 M21 21 V18" />
        <path d="M5 10 V6 H19 V10" />
        <path d="M8 10 V8 H11 V10 M13 10 V8 H16 V10" />
      </svg>
    )
  if (n === '02')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M12 3 V6" />
        <path d="M6 20 H18" />
        <path d="M12 6 C7 6 5 10 5 14 H19 C19 10 17 6 12 6 Z" />
        <path d="M12 14 V20" />
      </svg>
    )
  if (n === '03')
    return (
      <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
        <path d="M7 3 L17 3 L12 11 Z" />
        <path d="M12 11 V19 M8 19 H16" />
        <path d="M20 8 L20 15 M18 15 H22" />
      </svg>
    )
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" {...p} aria-hidden="true">
      <path d="M3 15 C5 13 7 13 9 15 C11 17 13 17 15 15 C17 13 19 13 21 15" />
      <path d="M3 19 C5 17 7 17 9 19 C11 21 13 21 15 19 C17 17 19 17 21 19" />
      <path d="M7 12 V5 C7 4 8 3 9 3 H10 M15 12 V5 C15 4 16 3 17 3 H18" />
    </svg>
  )
}

export default function VillaAntillancaPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* ── Hero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.forest, color: C.cream }}>
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 50% at 85% 15%, rgba(227,197,119,0.16), transparent 60%), radial-gradient(ellipse 50% 40% at 5% 95%, rgba(184,92,56,0.18), transparent 60%)',
          }}
        />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-24 md:grid-cols-[1fr_1.1fr] md:items-center md:px-8 md:pb-20 md:pt-32">
          <Reveal>
            <Eyebrow color={C.goldSoft}>Hotel & Centro de Eventos · {BIZ.city}</Eyebrow>
            <h1 className={`${display.className} text-[clamp(3rem,11vw,5.4rem)] font-medium leading-[0.95] tracking-[-0.01em]`}>
              Un lugar para
              <br />
              <em className="font-normal" style={{ color: C.goldSoft }}>
                quedarse
              </em>{' '}
              y para
              <br />
              celebrar.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Hotel, salón de eventos, bar-restaurante y piscina en el camino a San Clemente, a minutos de Talca.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.gold, color: C.ink }}>
                Consultar por WhatsApp
              </a>
              <a href="#espacios" className={`${btn} border`} style={{ borderColor: 'rgba(247,242,231,0.4)', color: C.cream, paddingTop: 11, paddingBottom: 11 }}>
                Ver espacios
              </a>
            </div>
            <dl className="mt-9 grid grid-cols-2 gap-4 text-sm sm:max-w-sm" style={{ color: C.mutedOnDark }}>
              <div className="border-l pl-3" style={{ borderColor: C.lineOnDark }}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.goldSoft }}>
                  Atención
                </dt>
                <dd className={`${display.className} mt-1 text-2xl`} style={{ color: C.cream }}>
                  {BIZ.hours}
                </dd>
              </div>
              <div className="border-l pl-3" style={{ borderColor: C.lineOnDark }}>
                <dt className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.goldSoft }}>
                  Ubicación
                </dt>
                <dd className={`${display.className} mt-1 text-2xl`} style={{ color: C.cream }}>
                  km 2,3 a San Clemente
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative">
              <div className="overflow-hidden rounded-t-[160px] rounded-b-[26px] border shadow-2xl" style={{ borderColor: C.lineOnDark }}>
                <VillaScene />
              </div>
              <div
                className={`${body.className} absolute -bottom-4 left-5 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.2em] shadow-lg md:left-8`}
                style={{ backgroundColor: C.cream, color: C.forest }}
              >
                Camino a San Clemente
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Espacios ── */}
      <section id="espacios" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <Ornament />
              <Eyebrow>
                <span className="mt-4 block">Los espacios</span>
              </Eyebrow>
              <h2 className={`${display.className} text-5xl font-medium leading-[0.95] tracking-[-0.01em] md:text-6xl`}>
                Cuatro razones para <em className="font-normal" style={{ color: C.goldDeep }}>subir el camino</em>.
              </h2>
              <p className="mt-5 text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Lo que ofrece el recinto según su ficha pública. Los detalles de cada espacio se confirman por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-4">
            {ESPACIOS.map((e, i) => (
              <Reveal key={e.n} delay={i * 90}>
                <article
                  className="relative flex h-full flex-col rounded-t-[80px] rounded-b-[22px] border bg-white px-6 pb-7 pt-8 text-center transition-transform hover:-translate-y-1"
                  style={{ borderColor: C.line, boxShadow: '0 14px 34px rgba(28,35,31,0.06)' }}
                >
                  <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full" style={{ backgroundColor: C.cream2, color: C.forest }}>
                    <SpaceIcon n={e.n} />
                  </span>
                  <span className="mt-5 text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.goldDeep }}>
                    {e.n}
                  </span>
                  <h3 className={`${display.className} mt-1 text-3xl font-medium leading-none`}>{e.title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {e.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Eventos ── */}
      <section id="eventos" className="scroll-mt-20" style={{ backgroundColor: C.forest, color: C.cream }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow color={C.goldSoft}>Centro de eventos</Eyebrow>
            <h2 className={`${display.className} text-5xl font-medium leading-[0.95] tracking-[-0.01em] md:text-6xl`}>
              La fecha importante,
              <br />
              <em className="font-normal" style={{ color: C.goldSoft }}>
                lejos del ruido
              </em>
              .
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Un salón en el campo, con hotel, restaurante y piscina en el mismo recinto: los invitados celebran y se quedan a dormir sin moverse de lugar.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2.5">
              {EVENTOS.map((e) => (
                <li key={e} className="rounded-full border px-4 py-2 text-sm font-semibold" style={{ borderColor: 'rgba(227,197,119,0.5)', color: C.goldSoft }}>
                  {e}
                </li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8 w-full sm:w-auto`} style={{ backgroundColor: C.gold, color: C.ink }}>
              Cotizar un evento
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto max-w-sm">
              <div className="rounded-t-[140px] rounded-b-[26px] border p-8 pt-14 text-center" style={{ borderColor: 'rgba(227,197,119,0.35)', backgroundColor: C.forest2 }}>
                <Ornament color={C.goldSoft} />
                <p className={`${display.className} mt-6 text-[2.6rem] leading-none`} style={{ color: C.cream }}>
                  Villa
                  <br />
                  <em style={{ color: C.goldSoft }}>Antillanca</em>
                </p>
                <p className="mt-4 text-[12px] font-bold uppercase tracking-[0.26em]" style={{ color: C.goldSoft }}>
                  Hotel & Centro de Eventos
                </p>
                <dl className="mt-8 divide-y text-left text-sm" style={{ borderColor: C.lineOnDark }}>
                  {[
                    ['Salón', 'Centro de eventos'],
                    ['Alojamiento', 'Hotel en el recinto'],
                    ['Comida', 'Bar y restaurante'],
                    ['Exterior', 'Piscina'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3" style={{ borderColor: C.lineOnDark }}>
                      <dt style={{ color: C.mutedOnDark }}>{k}</dt>
                      <dd className="font-semibold" style={{ color: C.cream }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.cream2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Cómo reservar</Eyebrow>
            <h2 className={`${display.className} max-w-2xl text-5xl font-medium leading-[0.95] tracking-[-0.01em] md:text-6xl`}>
              Tres mensajes y <em className="font-normal" style={{ color: C.goldDeep }}>listo</em>.
            </h2>
          </Reveal>
          <ol className="mt-10 grid gap-4 md:grid-cols-3 md:gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li className="h-full rounded-[22px] border p-6" style={{ borderColor: C.line, backgroundColor: C.cream }}>
                  <span className={`${display.className} flex h-11 w-11 items-center justify-center rounded-full text-2xl`} style={{ backgroundColor: C.forest, color: C.goldSoft }}>
                    {i + 1}
                  </span>
                  <h3 className={`${display.className} mt-5 text-3xl font-medium leading-none`}>{p.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={200}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8 w-full sm:w-auto`} style={{ backgroundColor: C.forest, color: C.cream }}>
              Consultar disponibilidad
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <Reveal>
              <Eyebrow>Dónde estamos</Eyebrow>
              <h2 className={`${display.className} text-5xl font-medium leading-[0.95] tracking-[-0.01em] md:text-6xl`}>
                Camino a <em className="font-normal" style={{ color: C.goldDeep }}>San Clemente</em>
              </h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </p>
              </address>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.forest, color: C.cream }}>
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border-2`} style={{ borderColor: C.forest, color: C.forest, paddingTop: 10, paddingBottom: 10 }}>
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-[22px] border bg-white p-6 md:p-7" style={{ borderColor: C.line }}>
                <Ornament />
                <dl className="mt-4 divide-y text-[15px]" style={{ borderColor: C.line }}>
                  {[
                    ['Rubro', BIZ.rubro],
                    ['Atención', BIZ.hours],
                    ['WhatsApp', BIZ.phoneDisplay],
                    ['Ciudad', `${BIZ.city}, ${BIZ.region}`],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                      <dt className="shrink-0 font-semibold" style={{ color: C.muted }}>
                        {k}
                      </dt>
                      <dd className="text-right font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.forest, color: C.cream }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className={`${display.className} text-2xl font-medium`}>{BIZ.short}</p>
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
            <Ornament color={C.goldSoft} />
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.short} />
    </div>
  )
}
