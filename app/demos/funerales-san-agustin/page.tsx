import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, CEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

/**
 * Dirección de arte: «la casa de la familia». No es una sala oscura de
 * velatorio sino la casa rosada de 7 Norte que se ve en la foto: lino
 * tibio, verde oliva de jardín y un solo acento arcilla. Los filetes
 * dobles imitan los marcos de los programas impresos de servicio; las
 * fotos van enmarcadas como una lámina en la pared de la casa.
 * Prata, serif romana de letrero, hace juego con la placa de la fachada.
 */
const C = {
  lino: '#F4EFE4',
  linoDeep: '#EBE3D2',
  ink: '#2B2E24',
  muted: '#5C6250',
  oliva: '#4C573D',
  olivaDeep: '#343C2A',
  arcilla: '#A25B3B',
  arcillaTxt: '#8F4E2B',
  arcillaCl: '#D8946A',
  line: 'rgba(43,46,36,0.18)',
  cremaInk: '#F2EDE0',
  cremaMuted: 'rgba(242,237,224,0.7)',
}

const NAV_LINKS = [
  { label: 'Siempre abiertos', href: '#siempre' },
  { label: 'Cómo acompañamos', href: '#pasos' },
  { label: 'La casa', href: '#casa' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const PASOS = [
  {
    n: '01',
    t: 'Nos llaman, a cualquier hora',
    d: 'Atienden día y noche, todos los días del año. No hay horario malo para pedir ayuda.',
  },
  {
    n: '02',
    t: 'Se encargan de las gestiones',
    d: 'Los trámites y coordinaciones del servicio quedan en sus manos, no en las de la familia.',
  },
  {
    n: '03',
    t: 'Preparan la despedida',
    d: 'Coordinan la ceremonia y el velatorio según lo que cada familia necesita.',
  },
  {
    n: '04',
    t: 'Acompañan hasta el final',
    d: 'Están junto a la familia durante todo el proceso, con la calma que el momento pide.',
  },
]

export const metadata: Metadata = demoMetadata({
  slug: 'funerales-san-agustin',
  title: `${BIZ.name} · Funeraria en Talca, atención 24 horas`,
  description:
    'Funerales San Agustín acompaña a las familias de Talca las 24 horas. Siete Norte 1218. Llama al 71 221 8091 o al +56 9 9349 3124.',
  image: `${IMG}/fachada.webp`,
})

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export default function Page() {
  return (
    <main
      className={`${body.variable} ${display.variable} min-h-screen`}
      style={{ background: C.lino, color: C.ink, fontFamily: 'var(--font-body), sans-serif', ...SPACING }}
    >
      <BlitzNav
        name={<span style={{ fontFamily: 'var(--font-display), serif' }}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar ahora"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'light', bar: 'rgba(244,239,228,0.92)', ink: C.ink, line: C.line, btnBg: C.oliva, btnInk: C.cremaInk }}
      />

      {/* ── Hero: la casa primero ─────────────────────────────── */}
      <header className="pt-24 md:pt-28 pb-10 md:pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <p className="text-[11px] md:text-xs font-semibold tracking-[0.22em] uppercase" style={{ color: C.arcillaTxt }}>
              Funeraria en Talca · atención día y noche
            </p>
            <h1
              className="mt-3 text-[34px] md:text-[56px] leading-[1.06] font-normal"
              style={{ fontFamily: 'var(--font-display), serif' }}
            >
              Cuando más se necesita,{' '}
              <em className="not-italic" style={{ color: C.oliva }}>
                alguien tiene que contestar.
              </em>
            </h1>
            <p className="mt-4 text-[15px] md:text-lg leading-relaxed max-w-[46ch]" style={{ color: C.muted }}>
              {BIZ.name} acompaña a las familias de {BIZ.city} en el momento más difícil.
              Atienden en su casa de {BIZ.address}, a cualquier hora, todos los días.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex items-center gap-2 h-[48px] px-5 rounded-full text-[15px] font-semibold"
                style={{ background: C.oliva, color: C.cremaInk }}
              >
                <PhoneIcon className="w-4 h-4" /> Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href={CEL_LINK}
                className="inline-flex items-center gap-2 h-[48px] px-5 rounded-full text-[15px] font-semibold border"
                style={{ borderColor: C.oliva, color: C.oliva }}
              >
                <PhoneIcon className="w-4 h-4" /> Celular {BIZ.celDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure
              className="p-2.5 md:p-3 rounded-[6px] rotate-[0.6deg] shadow-[0_18px_40px_-18px_rgba(43,46,36,0.45)]"
              style={{ background: '#FCFAF3', border: `1px solid ${C.line}` }}
            >
              <div className="relative overflow-hidden rounded-[3px] border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt={`Fachada de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                  width={672}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <figcaption className="pt-2.5 pb-1 px-1 flex items-center justify-between text-[11px] md:text-xs" style={{ color: C.muted }}>
                <span>La casa de 7 Norte, con su letrero.</span>
                <span>Foto real de su ficha en Google</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </header>

      {/* ── Franja 24 horas ───────────────────────────────────── */}
      <section id="siempre" className="px-5 md:px-8 py-12 md:py-16" style={{ background: C.olivaDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10">
              <div className="md:min-w-[180px]">
                <p className="text-[56px] md:text-[88px] leading-none" style={{ fontFamily: 'var(--font-display), serif', color: C.cremaInk }}>
                  24<span style={{ color: C.arcilla }}>h</span>
                </p>
              </div>
              <div className="flex-1">
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: C.arcillaCl }}>
                  Abierto las 24 horas, todos los días
                </p>
                <h2 className="mt-2 text-2xl md:text-4xl font-normal" style={{ fontFamily: 'var(--font-display), serif', color: C.cremaInk }}>
                  No cierran. Nunca.
                </h2>
                <p className="mt-2 text-[14px] md:text-base max-w-[52ch]" style={{ color: C.cremaMuted }}>
                  La ficha de Google los marca como abiertos las 24 horas. Si pasa algo a las 3 de la
                  mañana, hay alguien del otro lado del teléfono.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={CALL_LINK}
                className="group flex items-center justify-between h-[52px] px-4 rounded-[6px]"
                style={{ background: 'rgba(242,237,224,0.08)', border: '1px solid rgba(242,237,224,0.22)' }}
              >
                <span className="text-[13px]" style={{ color: C.cremaMuted }}>Teléfono fijo</span>
                <span className="flex items-center gap-2 text-[15px] font-semibold" style={{ color: C.cremaInk }}>
                  {BIZ.phoneDisplay} <PhoneIcon className="w-4 h-4" />
                </span>
              </a>
              <a
                href={CEL_LINK}
                className="group flex items-center justify-between h-[52px] px-4 rounded-[6px]"
                style={{ background: 'rgba(242,237,224,0.08)', border: '1px solid rgba(242,237,224,0.22)' }}
              >
                <span className="text-[13px]" style={{ color: C.cremaMuted }}>Celular directo</span>
                <span className="flex items-center gap-2 text-[15px] font-semibold" style={{ color: C.cremaInk }}>
                  {BIZ.celDisplay} <PhoneIcon className="w-4 h-4" />
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo acompañamos: lista de programa ───────────────── */}
      <section id="pasos" className="px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.85fr_1.15fr] gap-8 md:gap-14">
          <Reveal>
            <h2 className="text-3xl md:text-[44px] leading-[1.08] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
              Cuando una familia llama, esto pasa
            </h2>
            <p className="mt-3 text-[14px] md:text-base leading-relaxed max-w-[38ch]" style={{ color: C.muted }}>
              Lo importante en ese momento es una sola cosa: que la familia no tenga que
              resolver nada sola.
            </p>
          </Reveal>
          <div>
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 70}>
                <div className="flex gap-5 md:gap-7 py-5 md:py-6 border-t first:border-t-0" style={{ borderColor: C.line }}>
                  <span className="text-[15px] md:text-base font-semibold pt-0.5 shrink-0 w-8" style={{ fontFamily: 'var(--font-display), serif', color: C.arcillaTxt }}>
                    {p.n}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-2xl font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
                      {p.t}
                    </h3>
                    <p className="mt-1.5 text-[13px] md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {p.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La casa: fotos reales + bosquejo honesto ──────────── */}
      <section id="casa" className="px-5 md:px-8 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-[44px] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
              La casa de {BIZ.address}
            </h2>
            <p className="mt-2 text-[14px] md:text-base max-w-[52ch]" style={{ color: C.muted }}>
              Una casa de barrio con su palmera al frente, a una cuadra del eje de 5 Oriente.
            </p>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-[1.25fr_0.75fr] gap-4 md:gap-6 items-start">
            <Reveal>
              <figure className="rounded-[6px] overflow-hidden border" style={{ borderColor: C.line, background: '#FCFAF3' }}>
                <Image
                  src={`${IMG}/calle.webp`}
                  alt={`Casa de ${BIZ.name} vista desde la calle, ${BIZ.address}`}
                  width={1067}
                  height={800}
                  className="w-full h-auto"
                />
                <figcaption className="px-4 py-2.5 text-[11px] md:text-xs" style={{ color: C.muted }}>
                  La entrada, vista desde Siete Norte. Foto real de su ficha en Google.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <figure
                className="rounded-[6px] border p-5 md:p-6"
                style={{ borderColor: C.arcilla, borderStyle: 'dashed', background: C.linoDeep }}
              >
                <p
                  className="inline-block text-[10px] font-bold tracking-[0.16em] uppercase px-2 py-1 rounded-full"
                  style={{ background: C.arcillaTxt, color: C.cremaInk }}
                >
                  Bosquejo
                </p>
                <div className="mt-4 rounded-[4px] h-[120px] md:h-[150px] flex items-center justify-center" style={{ background: 'rgba(162,91,59,0.12)' }}>
                  <svg viewBox="0 0 48 48" className="w-14 h-14" fill="none" stroke={C.arcilla} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M24 6c6 5 9 9.5 9 14a9 9 0 0 1-18 0c0-4.5 3-9 9-14z" />
                    <path d="M24 29v13" />
                    <path d="M17 42h14" />
                  </svg>
                </div>
                <p className="mt-3 text-[13px] md:text-sm leading-relaxed" style={{ color: C.muted }}>
                  Aquí iría la foto real de la sala de velación. Se reemplaza por su foto
                  cuando el sitio se active.
                </p>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reputación: una sola reseña, honesta ──────────────── */}
      <section className="px-5 md:px-8 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div
              className="rounded-[8px] px-6 py-8 md:px-10 md:py-12 text-center border"
              style={{ background: '#FCFAF3', borderColor: C.line }}
            >
              <div className="flex items-center justify-center gap-2">
                <Stars value={BIZ.rating} color={C.arcilla} className="w-5 h-5" />
              </div>
              <p className="mt-3 text-3xl md:text-5xl" style={{ fontFamily: 'var(--font-display), serif' }}>
                5,0 en Google
              </p>
              <p className="mt-2 text-[13px] md:text-[15px] max-w-[46ch] mx-auto" style={{ color: C.muted }}>
                Su única reseña pública es de 5 estrellas. Las familias que atienden
                casi nunca dejan reseña: llaman una vez, en el peor día, y se van agradecidas.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ─────────────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-12 md:py-16" style={{ background: C.olivaDeep }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: C.arcillaCl }}>
              Ubicación
            </p>
            <h2 className="mt-2 text-3xl md:text-[40px] leading-[1.1] font-normal" style={{ fontFamily: 'var(--font-display), serif', color: C.cremaInk }}>
              {BIZ.address}, {BIZ.city}
            </h2>
            <dl className="mt-6 space-y-3 text-[14px] md:text-base" style={{ color: C.cremaMuted }}>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(242,237,224,0.16)' }}>
                <dt>Dirección</dt>
                <dd className="text-right font-semibold" style={{ color: C.cremaInk }}>{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(242,237,224,0.16)' }}>
                <dt>Horario</dt>
                <dd className="text-right font-semibold" style={{ color: C.cremaInk }}>{BIZ.hours}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(242,237,224,0.16)' }}>
                <dt>Teléfono</dt>
                <dd className="text-right font-semibold" style={{ color: C.cremaInk }}>{BIZ.phoneDisplay}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b pb-3" style={{ borderColor: 'rgba(242,237,224,0.16)' }}>
                <dt>Celular</dt>
                <dd className="text-right font-semibold" style={{ color: C.cremaInk }}>{BIZ.celDisplay}</dd>
              </div>
            </dl>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-[44px] px-5 rounded-full text-[14px] font-semibold border"
              style={{ borderColor: 'rgba(242,237,224,0.4)', color: C.cremaInk }}
            >
              Cómo llegar en Google Maps
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[8px] overflow-hidden border" style={{ borderColor: 'rgba(242,237,224,0.25)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[380px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ────────────────────────────────────────────── */}
      <section className="px-5 md:px-8 py-14 md:py-20 text-center">
        <Reveal>
          <h2 className="text-3xl md:text-[48px] leading-[1.08] font-normal max-w-[20ch] mx-auto" style={{ fontFamily: 'var(--font-display), serif' }}>
            Ojalá no tengas que llamar nunca.{' '}
            <span style={{ color: C.oliva }}>Pero si toca, ellos contestan.</span>
          </h2>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a
              href={CALL_LINK}
              className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full text-[15px] font-semibold"
              style={{ background: C.oliva, color: C.cremaInk }}
            >
              <PhoneIcon className="w-4 h-4" /> {BIZ.phoneDisplay}
            </a>
            <a
              href={CEL_LINK}
              className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full text-[15px] font-semibold border"
              style={{ borderColor: C.oliva, color: C.oliva }}
            >
              <PhoneIcon className="w-4 h-4" /> {BIZ.celDisplay}
            </a>
          </div>
        </Reveal>
      </section>

      <footer className="px-5 md:px-8 py-6 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] md:text-xs" style={{ color: C.muted }}>
          <span>{BIZ.name} · {BIZ.legal}</span>
          <span>{BIZ.address}, {BIZ.city} · {BIZ.hours}</span>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.oliva} />
    </main>
  )
}
