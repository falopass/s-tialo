import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { Chrome, Reveal } from './chrome'
import { BIZ, C, EVENTOS, GALERIA_EVENTOS, GALERIA_RECINTO, HABITACIONES, IMG, MAPS_URL, PASOS, WA_LINK } from './content'

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
    'Hotel y centro de eventos camino a San Clemente, Talca. Habitaciones, salón de eventos, restaurante y piscina. Consulta disponibilidad por WhatsApp.',
  image: `${IMG}/hero.webp`,
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

function Stars() {
  return (
    <span className="inline-flex gap-0.5" aria-hidden="true" style={{ color: C.goldSoft }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
          <path d="M10 1.6l2.6 5.4 5.9.8-4.3 4.1 1.1 5.9L10 15l-5.3 2.8 1.1-5.9L1.5 7.8l5.9-.8z" />
        </svg>
      ))}
    </span>
  )
}

function Photo({ src, alt, className = '', ratio = 'aspect-[4/3]' }: { src: string; alt: string; className?: string; ratio?: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-[22px] ${ratio} ${className}`}>
      <img src={`${IMG}/${src}.webp`} alt={alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
    </figure>
  )
}

export default function VillaAntillancaPage() {
  return (
    <div className={`${body.className} min-h-screen overflow-x-clip antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <Chrome fontClass={display.className} />

      {/* ── Hero: foto real de la piscina y el quincho ── */}
      <section id="inicio" className="relative flex min-h-[92svh] items-end overflow-hidden" style={{ backgroundColor: C.forest, color: C.cream }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Piscina de Villa Antillanca con el quincho de madera y los árboles del jardín en un día despejado"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(30,58,47,0.55) 0%, rgba(30,58,47,0.15) 35%, rgba(30,58,47,0.82) 75%, #1E3A2F 100%)' }}
        />
        <div className="relative mx-auto w-full max-w-6xl px-5 pb-12 pt-32 md:px-8 md:pb-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <img src={`${IMG}/logo.webp`} alt="Logo de Villa Antillanca" width={48} height={48} className="h-12 w-12 rounded-full ring-2 ring-white/70" />
              <Eyebrow color={C.goldSoft}>Hotel & Centro de Eventos · {BIZ.city}</Eyebrow>
            </div>
            <h1 className={`${display.className} mt-2 max-w-3xl text-[clamp(2.8rem,10vw,5.6rem)] font-medium leading-[0.98] tracking-[-0.02em]`}>
              Un parque para dormir tranquilo
              <br />
              <em className="font-normal" style={{ color: C.goldSoft }}>
                y celebrar en grande
              </em>
              .
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.mutedOnDark }}>
              Habitaciones, salón de eventos, restaurante y piscina en un mismo recinto, a minutos de Talca, camino a San Clemente.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btn} style={{ backgroundColor: C.goldSoft, color: C.forest }}>
                Reservar por WhatsApp
              </a>
              <a href="#eventos" className={`${btn} border`} style={{ borderColor: 'rgba(247,242,231,0.45)', color: C.cream, paddingTop: 11, paddingBottom: 11 }}>
                Cotizar un evento
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="inline-flex items-center gap-2">
                <Stars />
                <strong>{BIZ.rating.toFixed(1).replace('.', ',')}</strong>
                <span style={{ color: C.mutedOnDark }}>· {BIZ.reviews} reseñas en Google</span>
              </span>
              <span className="inline-flex items-center gap-2" style={{ color: C.mutedOnDark }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: C.goldSoft }} aria-hidden="true" />
                Recepción {BIZ.hours}
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El recinto ── */}
      <section id="espacios" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow>El recinto</Eyebrow>
                <h2 className={`${display.className} text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-6xl`}>
                  Jardines, piscina y <em className="font-normal" style={{ color: C.goldDeep }}>espacio de sobra</em>.
                </h2>
              </div>
              <p className="max-w-lg text-base leading-relaxed md:text-lg" style={{ color: C.muted }}>
                Un hotel de campo a la salida de Talca: edificio de habitaciones, comedor, quincho y una piscina rodeada de césped y árboles.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
            {GALERIA_RECINTO.map((p, i) => (
              <Reveal key={p.src} delay={i * 80}>
                <Photo src={p.src} alt={p.alt} ratio={i % 2 === 0 ? 'aspect-[4/5]' : 'aspect-[4/5] md:mt-10'} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Habitaciones ── */}
      <section id="habitaciones" className="scroll-mt-20" style={{ backgroundColor: C.cream2 }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-14 md:px-8 md:py-24">
          <Reveal>
            <Eyebrow>Hotel</Eyebrow>
            <h2 className={`${display.className} text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-6xl`}>
              Habitaciones para <em className="font-normal" style={{ color: C.goldDeep }}>descansar de verdad</em>.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: C.muted }}>
              Camas individuales o dobles, techos de madera y silencio de campo. Consulta disponibilidad y tarifas por WhatsApp.
            </p>
            <ul className="mt-6 grid gap-2 text-[15px]">
              {['Recepción 24 horas', 'Restaurante en el recinto', 'Piscina y jardines'].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rotate-45" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} mt-8 w-full sm:w-auto`} style={{ backgroundColor: C.forest, color: C.cream }}>
              Consultar disponibilidad
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-[1.2fr_1fr] gap-3 md:gap-4">
              <Photo src={HABITACIONES[0].src} alt={HABITACIONES[0].alt} ratio="aspect-[4/5]" className="shadow-xl" />
              <Photo src={HABITACIONES[1].src} alt={HABITACIONES[1].alt} ratio="aspect-[3/5] mt-8" className="shadow-xl" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Eventos ── */}
      <section id="eventos" className="scroll-mt-20" style={{ backgroundColor: C.forest, color: C.cream }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <Eyebrow color={C.goldSoft}>Centro de eventos</Eyebrow>
                <h2 className={`${display.className} text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-6xl`}>
                  El salón de vigas <em className="font-normal" style={{ color: C.goldSoft }}>donde se celebra Talca</em>.
                </h2>
              </div>
              <div>
                <p className="max-w-lg text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
                  Matrimonios, cumpleaños y reuniones de empresa, con quincho junto a la piscina para la fiesta de noche.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {EVENTOS.map((e) => (
                    <span key={e} className="rounded-full border px-3 py-1.5 text-sm font-semibold" style={{ borderColor: 'rgba(227,197,119,0.45)', color: C.goldSoft }}>
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-[1.4fr_1fr_1fr] md:gap-4">
            <Reveal className="col-span-2 md:col-span-1 md:row-span-2">
              <Photo src={GALERIA_EVENTOS[0].src} alt={GALERIA_EVENTOS[0].alt} ratio="aspect-[4/3] md:aspect-auto md:h-full" />
            </Reveal>
            {GALERIA_EVENTOS.slice(1).map((p, i) => (
              <Reveal key={p.src} delay={(i + 1) * 80} className={i === 2 ? 'col-span-2 md:col-span-2' : ''}>
                <Photo src={p.src} alt={p.alt} ratio={i === 2 ? 'aspect-[16/9] md:aspect-[2/1]' : 'aspect-[4/5] md:aspect-[4/3]'} />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-10 flex flex-col items-start gap-4 rounded-[24px] border p-6 md:flex-row md:items-center md:justify-between md:p-8" style={{ borderColor: C.lineOnDark, backgroundColor: C.forest2 }}>
              <div>
                <p className={`${display.className} text-3xl font-medium leading-tight`}>¿Tienes fecha? Empecemos por ahí.</p>
                <p className="mt-1 text-[15px]" style={{ color: C.mutedOnDark }}>
                  Cuéntanos el tipo de evento y cuántas personas; te confirmamos disponibilidad del salón.
                </p>
              </div>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btn} shrink-0`} style={{ backgroundColor: C.goldSoft, color: C.forest }}>
                Cotizar mi evento
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo reservar + prueba social ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.cream2 }}>
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:gap-14">
            <Reveal>
              <Eyebrow>Cómo reservar</Eyebrow>
              <h2 className={`${display.className} text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-6xl`}>
                Tres pasos, <em className="font-normal" style={{ color: C.goldDeep }}>sin formularios</em>.
              </h2>
              <ol className="mt-8 grid gap-3">
                {PASOS.map((p, i) => (
                  <li key={p.title} className="flex gap-4 rounded-[22px] border bg-white/70 p-5" style={{ borderColor: C.line }}>
                    <span className={`${display.className} flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-2xl font-medium`} style={{ backgroundColor: C.forest, color: C.goldSoft }}>
                      {i + 1}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-2xl font-medium leading-tight`}>{p.title}</h3>
                      <p className="mt-1 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex h-full flex-col justify-between rounded-[28px] p-7 md:p-9" style={{ backgroundColor: C.forest, color: C.cream }}>
                <div>
                  <Ornament color={C.goldSoft} />
                  <p className={`${display.className} mt-6 text-[clamp(4rem,14vw,6.5rem)] font-medium leading-none`} style={{ color: C.goldSoft }}>
                    {BIZ.rating.toFixed(1).replace('.', ',')}
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <Stars />
                    <span className="text-sm font-semibold">{BIZ.reviews} reseñas en Google</span>
                  </div>
                  <p className="mt-6 max-w-sm text-base leading-relaxed" style={{ color: C.mutedOnDark }}>
                    Familias, parejas y empresas de la región llevan años eligiendo Villa Antillanca para alojarse y celebrar.
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${btn} border`} style={{ borderColor: 'rgba(247,242,231,0.45)', color: C.cream, paddingTop: 11, paddingBottom: 11 }}>
                    Ver reseñas en Maps
                  </a>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${btn} border`} style={{ borderColor: 'rgba(247,242,231,0.45)', color: C.cream, paddingTop: 11, paddingBottom: 11 }}>
                    Instagram
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <Reveal>
              <Eyebrow>Dónde estamos</Eyebrow>
              <h2 className={`${display.className} text-5xl font-medium leading-[0.98] tracking-[-0.02em] md:text-6xl`}>
                Camino a <em className="font-normal" style={{ color: C.goldDeep }}>San Clemente</em>
              </h2>
              <address className="mt-6 not-italic">
                <p className="text-lg font-semibold">{BIZ.address}</p>
                <p className="text-base" style={{ color: C.muted }}>
                  {BIZ.city}, {BIZ.region}
                </p>
              </address>
              <dl className="mt-5 grid gap-1 text-[15px]">
                <div className="flex gap-3">
                  <dt className="font-semibold">Recepción</dt>
                  <dd style={{ color: C.muted }}>{BIZ.hours}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold">WhatsApp</dt>
                  <dd style={{ color: C.muted }}>{BIZ.phoneDisplay}</dd>
                </div>
              </dl>
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
              <Photo src="fachada" alt={GALERIA_RECINTO[0].alt} ratio="aspect-[4/3]" className="shadow-xl" />
            </Reveal>
          </div>
        </div>
      </section>

      <footer style={{ backgroundColor: C.forest, color: C.cream }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 pb-6 pt-8 md:flex-row md:items-center md:justify-between md:px-8">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="h-10 w-10 rounded-full" />
            <div>
              <p className={`${display.className} text-2xl font-medium leading-none`}>{BIZ.short}</p>
              <p className="mt-1 text-xs" style={{ color: C.mutedOnDark }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              WhatsApp
            </a>
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Instagram
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${focusRing} tap-44`}>
              Maps
            </a>
            <Ornament color={C.goldSoft} />
          </div>
        </div>
      </footer>
      <DemoBand name={BIZ.short} />
    </div>
  )
}
