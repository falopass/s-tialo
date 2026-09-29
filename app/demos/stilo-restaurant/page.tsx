import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS_NOTE } from './content'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, CallFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'stilo-restaurant',
  title: `${BIZ.name} — paradero de la ${BIZ.route}, ${BIZ.city}`,
  description: `El alto de la ruta a la costa de Curicó: restaurante de camino en el ${BIZ.km} de la K-16, ${BIZ.sector}, ${BIZ.city}. Nota ${BIZ.rating} en Google.`,
  image: `${IMG}/fachada.webp`,
})

// Paleta de la foto real: nogal oscuro del muro tallado, teja y crema.
const C = {
  nogal: '#241608',
  madera: '#3A2413',
  maderaSoft: '#5C3F26',
  papel: '#F7EFE0',
  crema: '#FFF9EE',
  teja: '#B4552E',
  senal: '#F2B01E',
  line: 'rgba(36,22,8,.14)',
} as const

// Hito kilométrico: la placa de ruta que ordena todo el sitio.
function KmSign({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.24em] uppercase rounded-sm px-3 py-1.5 border`}
      style={
        dark
          ? { background: C.senal, color: C.nogal, borderColor: C.nogal, boxShadow: `2px 2px 0 ${C.nogal}` }
          : { background: C.nogal, color: C.senal, borderColor: C.senal }
      }
    >
      {children}
    </span>
  )
}

// Marco de "foto pendiente": la vara exige marcar las escenas que no son
// fotos reales del perfil.
function Bosquejo({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <figure
      className="relative rounded-2xl overflow-hidden border-2 border-dashed"
      style={{ borderColor: C.maderaSoft, background: `linear-gradient(160deg, ${C.papel} 0%, #EFE0C4 100%)` }}
    >
      <span
        className={`${mono.className} absolute top-3 left-3 z-10 text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm`}
        style={{ background: C.nogal, color: C.senal }}
      >
        Bosquejo · falta la foto real
      </span>
      <figcaption className="sr-only">{label}</figcaption>
      {children}
    </figure>
  )
}

const PhoneIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const PinIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
  </svg>
)

export default function StiloPage() {
  return (
    <main className={`${body.className} min-h-screen`} style={{ background: C.crema, color: C.nogal }}>
      <BlitzNav
        name={<span className={display.className}>Stilo</span>}
        links={[
          { label: 'El paradero', href: '#paradero' },
          { label: 'La mesa', href: '#mesa' },
          { label: 'Cómo llegar', href: '#mapa' },
        ]}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'dark',
          bar: C.crema,
          ink: C.nogal,
          line: C.line,
          btnBg: C.teja,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero: la fachada real con su letrero tallado ─────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex items-end overflow-hidden" style={{ background: C.nogal }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de madera de Stilo Restaurant con su letrero tallado y letrero abierto, a la orilla de la Ruta K-16 en Sagrada Familia"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(36,22,8,.35) 0%, rgba(36,22,8,.05) 40%, rgba(36,22,8,.88) 100%)' }}
        />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20 pt-28">
          <Reveal>
            <KmSign dark>{BIZ.route} · {BIZ.km}</KmSign>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              className={`${display.className} mt-5 text-[clamp(3rem,12vw,7.5rem)] leading-[0.9] font-semibold tracking-tight`}
              style={{ color: C.crema, textShadow: '0 2px 30px rgba(36,22,8,.6)' }}
            >
              El alto de la<br />K-16 a la costa
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,249,238,.92)' }}>
              Casa de madera y letrero tallado a la orilla del camino, en el sector
              Todos los Santos de {BIZ.city}. El paradero donde la mesa espera al
              que viene y al que vuelve.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={TEL_LINK}
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full transition-transform active:scale-95"
                style={{ background: C.senal, color: C.nogal }}
              >
                <PhoneIcon /> {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-sm md:text-base px-6 h-[52px] rounded-full border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,249,238,.55)', color: C.crema, background: 'rgba(36,22,8,.4)' }}
              >
                <PinIcon /> Cómo llegar
              </a>
              <span className="inline-flex items-center gap-2" style={{ color: C.crema }}>
                <Stars value={4.3} color={C.senal} />
                <span className={`${mono.className} text-xs tracking-[0.12em]`}>{BIZ.rating} · {BIZ.reviewsLabel}</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El paradero ──────────────────────────────────────────── */}
      <section id="paradero" className="py-16 md:py-24" style={{ background: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <KmSign>km 10,5 · sector todos los santos</KmSign>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]`}>
              Un letrero tallado,<br />una puerta abierta
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal delay={0.1}>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: C.maderaSoft }}>
                A diez kilómetros y medio de {BIZ.city} por la ruta a la costa, el
                restaurante se reconoce de lejos: muro de madera envejecida,
                letrero calado a mano y la pizarra de «abierto» apoyada en la
                entrada. Adentro, vigas a la vista y mesas para el que llega del
                camino.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  ['Ubicación', `${BIZ.address} — ${BIZ.sector}`],
                  ['Teléfono', `${BIZ.phoneDisplay} (fijo)`],
                  ['Nota en Google', `${BIZ.rating} estrellas · ${BIZ.reviewsLabel}`],
                ].map(([k, v]) => (
                  <li key={k} className="flex gap-3 items-baseline border-b pb-3" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-[11px] tracking-[0.18em] uppercase w-32 shrink-0`} style={{ color: C.teja }}>{k}</span>
                    <span className="text-sm md:text-base font-medium">{v}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.18}>
              <figure className="rounded-2xl overflow-hidden shadow-lg border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Detalle del muro de madera y letrero tallado de Stilo Restaurant"
                  width={1200}
                  height={675}
                  className="w-full h-auto object-cover"
                />
                <figcaption className={`${mono.className} text-[11px] tracking-[0.14em] px-4 py-3`} style={{ background: C.nogal, color: C.senal }}>
                  FOTO REAL · LA FACHADA QUE SE VE DESDE LA RUTA
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La mesa (bosquejos marcados: la ficha no publica fotos de platos) ── */}
      <section id="mesa" className="py-16 md:py-24" style={{ background: C.nogal, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <KmSign dark>La mesa del camino</KmSign>
            <h2 className={`${display.className} mt-4 text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]`}>
              La cocina que se<br />le debe a la ruta
            </h2>
            <p className="mt-5 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,249,238,.75)' }}>
              La ficha del restaurante aún no publica fotos de sus platos. Estas
              escenas son bosquejos — se reemplazan por las fotos reales de la casa.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { t: 'La colación de mediodía', d: 'plato del día' },
              { t: 'La mesa bajo las vigas', d: 'el comedor' },
              { t: 'El postre casero', d: 'para la vuelta' },
            ].map((b, i) => (
              <Reveal key={b.t} delay={0.08 * i}>
                <Bosquejo label={`Bosquejo referencial: ${b.t}`}>
                  <div className="aspect-[4/3] flex items-center justify-center p-6">
                    <svg viewBox="0 0 120 90" className="w-full h-full opacity-60" aria-hidden="true">
                      <ellipse cx="60" cy="58" rx="40" ry="16" fill="none" stroke={C.maderaSoft} strokeWidth="2" strokeDasharray="5 4" />
                      <ellipse cx="60" cy="54" rx="26" ry="10" fill="none" stroke={C.maderaSoft} strokeWidth="2" strokeDasharray="5 4" />
                      <path d="M30 30q10-14 20-4M70 26q12-8 18 4" fill="none" stroke={C.teja} strokeWidth="2" strokeLinecap="round" />
                      <path d="M52 78h16l-2 6h-12z" fill={C.maderaSoft} opacity=".5" />
                    </svg>
                  </div>
                  <div className="px-4 pb-4">
                    <p className={`${display.className} text-lg md:text-xl font-semibold`} style={{ color: C.nogal }}>{b.t}</p>
                    <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.teja }}>{b.d}</p>
                  </div>
                </Bosquejo>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ──────────────────────────────────────────── */}
      <section id="mapa" className="py-16 md:py-24" style={{ background: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <Reveal>
            <KmSign>Ubicación</KmSign>
            <h2 className={`${display.className} mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-[1.02]`}>
              Al borde del camino,<br />kilómetro diez y medio
            </h2>
            <ul className="mt-8 space-y-4">
              <li className="flex gap-3 items-start">
                <PinIcon className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{BIZ.address}</p>
                  <p className="text-sm" style={{ color: C.maderaSoft }}>{BIZ.sector} · {BIZ.city}, {BIZ.region} · Plus code {BIZ.plusCode}</p>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <PhoneIcon className="w-5 h-5 mt-0.5 shrink-0" />
                <div>
                  <a href={TEL_LINK} className="font-semibold underline underline-offset-4 decoration-2" style={{ textDecorationColor: C.teja }}>
                    {BIZ.phoneDisplay}
                  </a>
                  <p className="text-sm" style={{ color: C.maderaSoft }}>{HOURS_NOTE}</p>
                </div>
              </li>
            </ul>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-sm px-6 h-[52px] rounded-full transition-transform active:scale-95"
              style={{ background: C.nogal, color: C.senal }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="rounded-2xl overflow-hidden border shadow-sm" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full aspect-[4/3] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="py-10" style={{ background: C.nogal, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl font-semibold`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.senal }}>
              {BIZ.route} · {BIZ.km} · {BIZ.city}
            </p>
          </div>
          <div className={`${mono.className} text-xs space-y-1`} style={{ color: 'rgba(255,249,238,.7)' }}>
            <p>{BIZ.phoneDisplay} · {BIZ.rating} en Google</p>
            <p>{BIZ.address}</p>
          </div>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.teja} />
      <DemoBand name={BIZ.short} />
    </main>
  )
}
