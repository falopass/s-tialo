import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, AMENIDADES, RESENAS } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

/**
 * Dirección de arte: «la recepción». El mostrador del Normandí (foto real)
 * tiene tres relojes de pared y mármol: de ahí sale el motivo de esferas
 * finas y la paleta vino + marfil + tinta cálida del letrero dorado de la
 * fachada. Las fotos cuelgan como láminas de hall de hotel con pie de
 * cuña en Jost condensada. Nada de arcos ni de libro de visitas: esto es
 * un hotel de ciudad, no un hostal de campo.
 */
const C = {
  marfil: '#F6F1E6',
  marfilDeep: '#EDE4D2',
  ink: '#241A17',
  muted: '#6B5B52',
  vino: '#5E2530',
  vinoDeep: '#3B151E',
  dorado: '#B08D4C',
  line: 'rgba(36,26,23,0.16)',
  lineOsc: 'rgba(246,241,230,0.22)',
}

const NAV_LINKS = [
  { label: 'Habitaciones', href: '#habitaciones' },
  { label: 'Espacios', href: '#espacios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const AMENIDADES_ICONOS = [
  'M5 13a10 10 0 0 1 14 0M8.5 16.5a5 5 0 0 1 7 0M12 20h.01', // wifi
  'M17 8h1a3 3 0 0 1 0 6h-1M4 8h13v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4zM7 2v2M11 2v2M15 2v2', // desayuno/taza
  'M6 17l1.2-5.4A2 2 0 0 1 9.16 10h5.68a2 2 0 0 1 1.96 1.6L18 17M6 17h12M6 17v2m12-2v2M9 13h6', // auto/estacionamiento
  'M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M12 3l-2 2m2-2l2 2m-2 16l-2-2m2 2l2-2', // aire acond. (copo)
  'M4 6h16v10H4zM2 20h20M8 16v4m8-4v4', // business center (pantalla)
  'M8 4h8l-1 14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2zM7 4v4m10-4v4M8 12h8', // bar (copa)
]

export const metadata: Metadata = demoMetadata({
  slug: 'hotel-boutique-normandi',
  title: `${BIZ.name} · Hotel 3 estrellas en el centro de Talca`,
  description:
    'Hotel Boutique Normandí en Diez Oriente 1060, Talca. Desayuno incluido, Wi-Fi y estacionamiento gratis. 4.6 estrellas en Google. Reserva al 71 222 3210.',
  image: `${IMG}/fachada.webp`,
})

function Reloj({ hora, label }: { hora: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div
        className="w-[52px] h-[52px] rounded-full border flex items-center justify-center"
        style={{ borderColor: C.lineOsc, color: C.marfil }}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
          <circle cx="12" cy="12" r="9.4" />
          <text x="12" y="15" textAnchor="middle" fontSize="8.5" fill="currentColor" stroke="none" style={{ fontFamily: 'var(--font-body)' }}>
            {hora}
          </text>
        </svg>
      </div>
      <span className="text-[10px] tracking-[0.18em] uppercase" style={{ color: 'rgba(246,241,230,0.6)' }}>
        {label}
      </span>
    </div>
  )
}

export default function Page() {
  return (
    <main
      className={`${body.variable} ${display.variable} min-h-screen`}
      style={{ background: C.marfil, color: C.ink, fontFamily: 'var(--font-body), sans-serif', ...SPACING }}
    >
      <BlitzNav
        name={<span style={{ fontFamily: 'var(--font-display), serif' }}>Normandí</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{ over: 'dark', bar: 'rgba(36,26,23,0.88)', ink: C.marfil, line: C.lineOsc, btnBg: C.marfil, btnInk: C.ink }}
      />

      {/* ── Hero: la fachada a sangre ─────────────────────────── */}
      <header id="inicio" className="relative" style={{ background: C.ink }}>
        <div className="relative h-[560px] md:h-[640px]">
          <Image
            src={`${IMG}/fachada.webp`}
            alt={`Fachada del ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(36,26,23,0.62) 0%, rgba(36,26,23,0.28) 45%, rgba(36,26,23,0.82) 100%)' }} />
        </div>
        <div className="absolute inset-x-0 bottom-0 px-5 md:px-8 pb-8 md:pb-12">
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <p className="text-[11px] md:text-xs font-semibold tracking-[0.26em] uppercase" style={{ color: C.dorado }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
              <h1
                className="mt-2 text-[36px] md:text-[64px] leading-[1.04] font-normal max-w-[15ch]"
                style={{ fontFamily: 'var(--font-display), serif', color: C.marfil }}
              >
                {BIZ.claim}
              </h1>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-5 flex flex-wrap items-center gap-4">
                <a
                  href={CALL_LINK}
                  className="inline-flex items-center gap-2 h-[48px] px-6 rounded-full text-[15px] font-semibold"
                  style={{ background: C.marfil, color: C.ink }}
                >
                  Reservar: {BIZ.phoneDisplay}
                </a>
                <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: C.marfil }}>
                  <Stars value={BIZ.rating} color={C.dorado} className="w-4 h-4" />
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ── La recepción: relojes y amenidades ────────────────── */}
      <section className="px-5 md:px-8 py-10 md:py-14" style={{ background: C.vinoDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <div className="flex gap-6 md:gap-8">
                <Reloj hora="14" label="Check-in" />
                <Reloj hora="12" label="Check-out" />
                <Reloj hora="24" label="Recepción" />
              </div>
              <div className="md:border-l md:pl-10" style={{ borderColor: C.lineOsc }}>
                <h2 className="text-xl md:text-2xl font-normal" style={{ fontFamily: 'var(--font-display), serif', color: C.marfil }}>
                  La pieza está lista cuando la necesitas
                </h2>
                <p className="mt-1.5 text-[13px] md:text-[15px] max-w-[48ch]" style={{ color: 'rgba(246,241,230,0.72)' }}>
                  Un hotel de barrio tranquilo a pasos del centro, pensado para descansar:
                  {AMENIDADES.map((a) => ` ${a.t.toLowerCase()}`).join(', ')}.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-7 grid grid-cols-2 md:grid-cols-6 gap-x-4 gap-y-5">
              {AMENIDADES.map((a, i) => (
                <li key={a.t} className="flex flex-col gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke={C.dorado} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d={AMENIDADES_ICONOS[i]} />
                  </svg>
                  <span className="text-[13px] font-semibold" style={{ color: C.marfil }}>{a.t}</span>
                  <span className="text-[11.5px] leading-snug" style={{ color: 'rgba(246,241,230,0.6)' }}>{a.d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Habitaciones: zigzag editorial ────────────────────── */}
      <section id="habitaciones" className="px-5 md:px-8 py-12 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-[46px] leading-[1.06] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
              Piezas que se sienten nuevas
            </h2>
            <p className="mt-3 text-[14px] md:text-base max-w-[50ch]" style={{ color: C.muted }}>
              Habitaciones espaciosas, camas amplias y baños impecables: es lo que repiten
              quienes se han quedado.
            </p>
          </Reveal>

          <div className="mt-9 grid md:grid-cols-12 gap-5 md:gap-8 items-center">
            <Reveal className="md:col-span-7">
              <figure className="rounded-[6px] overflow-hidden border shadow-[0_16px_36px_-16px_rgba(36,26,23,0.4)]" style={{ borderColor: C.line, background: '#FDFBF4' }}>
                <Image src={`${IMG}/dormitorio.webp`} alt="Habitación doble del Hotel Normandí con cama vestida de blanco" width={1200} height={675} className="w-full h-auto" />
                <figcaption className="px-4 py-2.5 text-[11px] md:text-xs" style={{ color: C.muted }}>
                  Matrimonial preparada para la llegada. Foto real de su ficha en Google.
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <p className="text-[64px] leading-none" style={{ fontFamily: 'var(--font-display), serif', color: C.vino }}>01</p>
              <h3 className="mt-1 text-xl md:text-2xl font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
                Descanso real
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                Camas grandes, muy buena aislación de ruido y aire acondicionado. El lugar es
                silencioso para estar a pasos del centro.
              </p>
            </Reveal>
          </div>

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-5 md:gap-8 items-center">
            <Reveal className="md:col-span-5 md:order-2">
              <p className="text-[64px] leading-none" style={{ fontFamily: 'var(--font-display), serif', color: C.vino }}>02</p>
              <h3 className="mt-1 text-xl md:text-2xl font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
                Suite con estar
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                Las piezas con living tienen sofá y espacio para quedarse más de una noche
                sin sentirse encerrado.
              </p>
            </Reveal>
            <Reveal delay={100} className="md:col-span-7 md:order-1">
              <figure className="rounded-[6px] overflow-hidden border shadow-[0_16px_36px_-16px_rgba(36,26,23,0.4)]" style={{ borderColor: C.line, background: '#FDFBF4' }}>
                <Image src={`${IMG}/suite.webp`} alt="Suite del Hotel Normandí con sofá de estar" width={1200} height={675} className="w-full h-auto" />
                <figcaption className="px-4 py-2.5 text-[11px] md:text-xs" style={{ color: C.muted }}>
                  Suite con zona de estar. Foto real de su ficha en Google.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Espacios: el hall como composición ────────────────── */}
      <section id="espacios" className="px-5 md:px-8 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className="text-3xl md:text-[46px] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
              El hall, el bar y la sala de reuniones
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-12 gap-3 md:gap-5">
            <Reveal className="col-span-5 md:col-span-4">
              <figure className="rounded-[6px] overflow-hidden border h-full" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/lobby.webp`} alt="Hall de entrada del Hotel Normandí" width={506} height={900} className="w-full h-full object-cover" />
              </figure>
            </Reveal>
            <div className="col-span-7 md:col-span-8 flex flex-col gap-3 md:gap-5">
              <Reveal>
                <figure className="rounded-[6px] overflow-hidden border" style={{ borderColor: C.line }}>
                  <Image src={`${IMG}/recepcion.webp`} alt="Recepción del Hotel Normandí con relojes de pared" width={1200} height={900} className="w-full h-auto" />
                </figure>
              </Reveal>
              <div className="grid grid-cols-2 gap-3 md:gap-5">
                <Reveal delay={80}>
                  <figure className="rounded-[6px] overflow-hidden border h-full" style={{ borderColor: C.line }}>
                    <Image src={`${IMG}/bar.webp`} alt="Bar del Hotel Normandí con botellero" width={1200} height={675} className="w-full h-full object-cover" />
                  </figure>
                </Reveal>
                <Reveal delay={140}>
                  <figure className="rounded-[6px] overflow-hidden border h-full" style={{ borderColor: C.line }}>
                    <Image src={`${IMG}/conferencia.webp`} alt="Sala de conferencias del Hotel Normandí" width={1200} height={675} className="w-full h-full object-cover" />
                  </figure>
                </Reveal>
              </div>
            </div>
          </div>
          <Reveal delay={60}>
            <p className="mt-4 text-[12px] md:text-[13px]" style={{ color: C.muted }}>
              Hall central, recepción con sus relojes de pared, bar con botellero y sala para
              conferencias y cursos. Todo real, todo de su ficha en Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: registro de huéspedes ────────────────────── */}
      <section id="resenas" className="px-5 md:px-8 py-12 md:py-16" style={{ background: C.marfilDeep }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: C.vino }}>
                  Reseñas reales
                </p>
                <h2 className="mt-2 text-3xl md:text-[42px] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
                  Lo que dicen quienes durmieron aquí
                </h2>
              </div>
              <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.dorado} className="w-4 h-4" />
                {String(BIZ.rating).replace('.', ',')} de 5 · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <div className="mt-8 space-y-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure
                  className="rounded-[6px] border px-5 py-5 md:px-7 md:py-6 md:flex md:gap-6"
                  style={{ background: '#FDFBF4', borderColor: C.line }}
                >
                  <div className="shrink-0 md:w-44 md:border-r md:pr-6 mb-3 md:mb-0" style={{ borderColor: C.line }}>
                    <Stars value={r.estrellas} color={C.dorado} className="w-3.5 h-3.5" />
                    <figcaption className="mt-2 text-[14px] font-semibold">{r.nombre}</figcaption>
                    <p className="text-[11px] uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                      Reseña en Google
                    </p>
                  </div>
                  <blockquote className="text-[14px] md:text-[15.5px] leading-relaxed" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ─────────────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-12 md:py-16" style={{ background: C.vinoDeep }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <Reveal>
            <p className="text-[11px] font-semibold tracking-[0.22em] uppercase" style={{ color: C.dorado }}>
              Ubicación
            </p>
            <h2 className="mt-2 text-3xl md:text-[40px] leading-[1.1] font-normal" style={{ fontFamily: 'var(--font-display), serif', color: C.marfil }}>
              {BIZ.address}, {BIZ.city}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed max-w-[44ch]" style={{ color: 'rgba(246,241,230,0.72)' }}>
              En el cuadrante del centro de Talca: se puede ir caminando a la Plaza de Armas,
              al terminal y a los malls.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 h-[44px] px-5 rounded-full text-[14px] font-semibold border"
              style={{ borderColor: 'rgba(246,241,230,0.4)', color: C.marfil }}
            >
              Cómo llegar en Google Maps
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-[8px] overflow-hidden border" style={{ borderColor: C.lineOsc }}>
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

      {/* ── Cierre: reservar ──────────────────────────────────── */}
      <section className="px-5 md:px-8 py-14 md:py-20 text-center">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.24em] uppercase" style={{ color: C.vino }}>
            Reservas directas
          </p>
          <h2 className="mt-2 text-3xl md:text-[46px] leading-[1.08] font-normal" style={{ fontFamily: 'var(--font-display), serif' }}>
            Una llamada y la pieza es tuya
          </h2>
          <a
            href={CALL_LINK}
            className="mt-6 inline-flex items-center gap-2 h-[48px] px-7 rounded-full text-[15px] font-semibold"
            style={{ background: C.vino, color: C.marfil }}
          >
            Llamar al {BIZ.phoneDisplay}
          </a>
        </Reveal>
      </section>

      <footer className="px-5 md:px-8 py-6 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] md:text-xs" style={{ color: C.muted }}>
          <span>{BIZ.name} · {BIZ.rubro}</span>
          <span>{BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}</span>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.vino} />
    </main>
  )
}
