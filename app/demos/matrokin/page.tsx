import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG,
  HOURS, KINE_SERVICES, MATRONA_SERVICES, REVIEWS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/** Paleta sacada del logo real: dos círculos azul + naranja sobre crema */
const C = {
  paper: '#F7EDDA',
  card: '#FFF8EA',
  indigo: '#2F2B7A',
  indigoDeep: '#221E5E',
  coral: '#E8503A',
  gold: '#F2A53D',
  ink: '#232048',
  muted: '#5B5877',
  line: 'rgba(35,32,72,0.16)',
  lineLight: 'rgba(247,237,218,0.25)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'matrokin',
  title: 'Matrokin SPA — Centro kinésico y matronil en Molina',
  description: 'Centro kinésico y matronil en Camino a Agua Fría 767, Molina. Kinesiología deportiva, matrona, estética femenina y suplementos. Reserva por WhatsApp.',
  image: '/demos/matrokin/hero-fachada.webp',
})

const NAV_LINKS = [
  { label: 'Especialidades', href: '#especialidades' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const TICKER = [
  'Terapia láser', 'Ondas de choque', 'Punción seca', 'Magnetoterapia',
  'Masoterapia', 'Electroestimulación', 'Reintegro deportivo', 'Presoterapia',
  'Control prenatal', 'Toma de PAP', 'Estética femenina', 'Suplementos deportivos',
]

const EQUIPOS = [
  { src: `${IMG}/presoterapia.webp`, alt: 'Paciente en sesión de presoterapia con botas de compresión en Matrokin', name: 'Presoterapia' },
  { src: `${IMG}/ondas-choque.webp`, alt: 'Aplicación de ondas de choque en la espalda de un paciente', name: 'Ondas de choque' },
  { src: `${IMG}/microelectrolisis.webp`, alt: 'Nuevo equipo de microelectrólisis aplicado en una pierna', name: 'Microelectrólisis' },
  { src: `${IMG}/electro.webp`, alt: 'Sesión de electroestimulación guiada por computador en Matrokin', name: 'Electroestimulación' },
  { src: `${IMG}/magneto.webp`, alt: 'Sesión de magnetoterapia con luz infrarroja', name: 'Magnetoterapia' },
  { src: `${IMG}/camilla.webp`, alt: 'Sala de kinesiología de Matrokin con camilla, balón y equipos', name: 'Sala kinésica' },
]

/** Puntos flotantes del logo, reusados como motivo gráfico */
function Dot({ x, y, size, color, className = '' }: { x: string; y: string; size: number; color: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute rounded-full ${className}`}
      style={{ left: x, top: y, width: size, height: size, backgroundColor: color }}
    />
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: color ?? (light ? C.gold : C.coral) }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function MatrokinPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className="flex flex-col leading-none">
            <span>Matrokin</span>
            <span className="text-[10px] font-normal tracking-wide opacity-80 normal-case">centro kinésico y matronil</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,237,218,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.indigo,
          btnInk: '#FFF8EA',
        }}
      />

      {/* ── Hero: dos círculos que se cruzan, como el logo ── */}
      <section id="inicio" className="relative overflow-hidden">
        <Dot x="6%" y="16%" size={14} color={C.coral} className="opacity-60" />
        <Dot x="92%" y="12%" size={10} color={C.indigo} className="opacity-50" />
        <Dot x="86%" y="70%" size={16} color={C.gold} className="opacity-50" />
        <Dot x="4%" y="76%" size={9} color={C.indigo} className="opacity-40" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid lg:grid-cols-2 gap-10 lg:gap-4 items-center">
          <Reveal>
            <Eyebrow>Centro kinésico y matronil · Molina · Maule</Eyebrow>
            <h1 className={`${display.className} font-bold leading-[0.98] tracking-tight text-[clamp(2.6rem,9vw,5.2rem)] mb-5`} style={{ color: C.indigo }}>
              Te cuidamos
              <br />
              <span style={{ color: C.coral }}>como mereces</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
              Kinesiología motora, deportiva y respiratoria + atención de
              matrona, en un solo centro a orillas del camino a Agua Fría.
              Profesionales con más de 10 años en salud pública.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 mb-8 tap-44"
            >
              <Stars value={BIZ.rating} color={C.gold} />
              <span className="text-sm font-semibold" style={{ color: C.ink }}>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </a>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm md:text-base font-semibold px-7 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.coral, color: '#FFF8EA' }}
              >
                Reservar hora por WhatsApp
              </a>
              <a
                href="#especialidades"
                className={`${display.className} text-sm md:text-base font-semibold px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/40 tap-44`}
                style={{ borderColor: C.indigo, color: C.indigo }}
              >
                Ver especialidades
              </a>
            </div>
          </Reveal>

          {/* composición de dos círculos = el logo */}
          <Reveal delay={140}>
            <div className="relative mx-auto max-w-[420px] lg:max-w-none aspect-square">
              <div
                className="absolute rounded-full overflow-hidden"
                style={{ left: '0%', top: '4%', width: '68%', aspectRatio: '1', boxShadow: `0 0 0 6px ${C.paper}, 0 0 0 8px ${C.indigo}` }}
              >
                <img
                  src={`${IMG}/sala-rehab.webp`}
                  alt="Sala de rehabilitación de Matrokin: caminadora, bicicleta y equipos de ejercicio"
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute rounded-full overflow-hidden"
                style={{ right: '0%', bottom: '2%', width: '52%', aspectRatio: '1', boxShadow: `0 0 0 6px ${C.paper}, 0 0 0 8px ${C.coral}` }}
              >
                <img
                  src={`${IMG}/evaluacion.webp`}
                  alt="Evaluación postural de un paciente frente a la puerta de Matrokin con su logo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* sello circular flotante */}
              <div
                className="absolute rounded-full flex flex-col items-center justify-center text-center shadow-lg"
                style={{
                  right: '8%', top: '0%',
                  width: '30%', aspectRatio: '1',
                  backgroundColor: C.indigo, color: '#FFF8EA',
                }}
              >
                <span className={`${display.className} font-bold text-2xl md:text-3xl leading-none`}>{BIZ.rating}</span>
                <span className={`${mono.className} text-[8px] md:text-[9px] uppercase tracking-[0.2em] mt-1 opacity-90`}>Google</span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ticker de servicios */}
        <div className="overflow-hidden py-3.5" style={{ backgroundColor: C.indigo }}>
          <div className="flex gap-8 whitespace-nowrap animate-[marquee_28s_linear_infinite] w-max">
            {[...TICKER, ...TICKER].map((t, i) => (
              <span key={i} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] flex items-center gap-8`} style={{ color: '#F7EDDA' }}>
                {t}
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Dos especialidades, un centro ── */}
      <section id="especialidades" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Dos especialidades, un centro</Eyebrow>
          <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] max-w-2xl`} style={{ color: C.indigo }}>
            Kinesiología y matrona
            <br />
            <span style={{ color: C.coral }}>bajo el mismo techo</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5 md:gap-0 md:-space-x-6">
          {/* Kinesiología — círculo azul del logo */}
          <Reveal>
            <article className="relative rounded-[2rem] md:rounded-l-[2rem] md:rounded-r-none overflow-hidden" style={{ backgroundColor: C.indigo }}>
              <Dot x="88%" y="8%" size={12} color={C.gold} className="opacity-70" />
              <Dot x="6%" y="90%" size={9} color={C.coral} className="opacity-60" />
              <div className="p-7 md:p-10">
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-2`} style={{ color: C.gold }}>El círculo azul</p>
                <h3 className={`${display.className} font-bold text-3xl md:text-4xl mb-2`} style={{ color: '#FFF8EA' }}>Kinesiología</h3>
                <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,248,234,0.85)' }}>
                  Motora, deportiva y respiratoria. Recuperación de
                  lesiones, reintegro al deporte y terapias de apoyo con
                  equipamiento propio.
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {KINE_SERVICES.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-[13px] leading-snug" style={{ color: 'rgba(255,248,234,0.92)' }}>
                      <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-7 md:px-10 pb-7 md:pb-10">
                <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                  <img src={`${IMG}/sala-masoterapia.webp`} alt="Sala de masoterapia de Matrokin con camilla y luz cálida" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </article>
          </Reveal>

          {/* Matrona — círculo naranja del logo */}
          <Reveal delay={140}>
            <article className="relative rounded-[2rem] md:rounded-r-[2rem] md:rounded-l-none md:mt-14 overflow-hidden" style={{ backgroundColor: C.coral }}>
              <Dot x="90%" y="10%" size={10} color={C.gold} className="opacity-70" />
              <Dot x="8%" y="6%" size={8} color={C.paper} className="opacity-50" />
              <div className="p-7 md:p-10">
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] mb-2`} style={{ color: '#FFF0B8' }}>El círculo naranja</p>
                <h3 className={`${display.className} font-bold text-3xl md:text-4xl mb-2`} style={{ color: '#FFF8EA' }}>Matrona</h3>
                <p className="text-sm leading-relaxed mb-6 max-w-sm" style={{ color: 'rgba(255,248,234,0.9)' }}>
                  Salud de la mujer en todas sus etapas: del control
                  prenatal al postparto, con matrona propia del centro.
                </p>
                <ul className="space-y-2.5">
                  {MATRONA_SERVICES.map((s) => (
                    <li key={s} className="flex items-center gap-2.5 text-[13px] leading-snug" style={{ color: 'rgba(255,248,234,0.95)' }}>
                      <svg viewBox="0 0 12 12" className="w-3 h-3 shrink-0" fill="none" stroke="#FFF0B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2 6.5 4.8 9 10 3.5" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              {/* promo real de su Instagram */}
              <div className="mx-7 md:mx-10 mb-7 md:mb-10 rounded-2xl p-5 flex items-center gap-4" style={{ backgroundColor: 'rgba(35,32,72,0.9)' }}>
                <svg viewBox="0 0 24 24" className="w-8 h-8 shrink-0" fill="none" stroke={C.gold} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2 8.5 11.5M18 2l2 2-9.5 9.5M18 2l-9.5 9.5L20 13l-2-11ZM8.5 11.5 4 20l8-4.5" />
                  <path d="M2 22l4-4" />
                </svg>
                <div>
                  <p className={`${display.className} font-bold text-base md:text-lg leading-tight`} style={{ color: '#FFF8EA' }}>
                    Promo amig@s Botox: $200.000 las dos
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-1`} style={{ color: 'rgba(255,248,234,0.75)' }}>
                    publicada en su Instagram
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* ── Equipos únicos en Molina ── */}
      <section id="equipos" className="scroll-mt-20" style={{ backgroundColor: C.indigoDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 md:gap-14 items-start mb-10 md:mb-14">
            <Reveal>
              <Eyebrow light>Equipamiento</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02]`} style={{ color: '#FFF8EA' }}>
                Equipos únicos
                <br />
                <span style={{ color: C.gold }}>en Molina</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base md:text-lg leading-relaxed max-w-xl lg:pt-10" style={{ color: 'rgba(255,248,234,0.85)' }}>
                Lo dicen sus propios pacientes en Google: el centro invierte
                en equipamiento que no se encuentra en otro lado de la
                comuna, y que hace la diferencia en la recuperación.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
            {EQUIPOS.map((e, i) => (
              <Reveal key={e.name} delay={(i % 3) * 100}>
                <figure className="group">
                  <div className="rounded-[1.4rem] overflow-hidden aspect-[4/5] border" style={{ borderColor: C.lineLight }}>
                    <img
                      src={e.src}
                      alt={e.alt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.2em] mt-3 text-center`} style={{ color: C.gold }}>
                    {e.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Suplementos Matrokin ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div
            className="relative rounded-[2rem] overflow-hidden grid md:grid-cols-[auto_1fr] gap-8 items-center p-8 md:p-14"
            style={{ backgroundColor: C.card, border: `2px solid ${C.indigo}` }}
          >
            <Dot x="94%" y="12%" size={12} color={C.coral} className="opacity-60" />
            <Dot x="90%" y="80%" size={9} color={C.indigo} className="opacity-40" />
            <img
              src={`${IMG}/suplementos-logo.webp`}
              alt="Logo de Suplementos Matrokin: escudo con mancuerna"
              loading="lazy"
              className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover mx-auto md:mx-0"
              style={{ boxShadow: `0 0 0 4px ${C.paper}, 0 0 0 6px ${C.coral}` }}
            />
            <div className="text-center md:text-left">
              <Eyebrow>La vitrina deportiva</Eyebrow>
              <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight mb-3`} style={{ color: C.indigo }}>
                Suplementos Matrokin
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mx-auto md:mx-0" style={{ color: C.muted }}>
                Dentro del mismo centro tienen venta de suplementos
                deportivos: proteína, creatina y más, para complementar el
                entrenamiento y la recuperación.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas reales de Google ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid lg:grid-cols-[1fr_1.8fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Reseñas reales</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-5`} style={{ color: C.indigo }}>
              Lo que dicen
              <br />
              <span style={{ color: C.coral }}>en Google</span>
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <span className={`${display.className} font-bold text-5xl`} style={{ color: C.indigo }}>{BIZ.rating}</span>
              <div>
                <Stars value={BIZ.rating} color={C.gold} />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-1`} style={{ color: C.muted }}>
                  {BIZ.reviews} opiniones
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Textuales de su ficha de Google Maps.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.coral, textDecorationColor: 'rgba(232,80,58,0.4)' }}
            >
              Ver la ficha completa →
            </a>
          </Reveal>
          <div className="space-y-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure
                  className="rounded-[1.4rem] p-5 md:p-6 border"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <Stars value={r.stars} color={C.gold} className="w-3.5 h-3.5" />
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                      {r.date}
                    </span>
                  </div>
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mb-3" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${display.className} text-sm font-semibold`} style={{ color: C.coral }}>
                    {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.indigo }}>
              Camino a
              <br />
              <span style={{ color: C.coral }}>Agua Fría 767</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <dl className="mb-6 max-w-xs">
              {HOURS.map((h) => (
                <div key={h.days} className="flex items-baseline justify-between gap-4 border-b py-2.5 text-sm" style={{ borderColor: C.line }}>
                  <dt style={{ color: C.muted }}>{h.days}</dt>
                  <dd className={`${display.className} font-semibold`} style={{ color: C.ink }}>{h.time}</dd>
                </div>
              ))}
            </dl>
            <div className="rounded-2xl overflow-hidden aspect-[16/9] mb-8 border" style={{ borderColor: C.line }}>
              <img
                src={`${IMG}/hero-fachada.webp`}
                alt="Fachada de Matrokin en Camino a Agua Fría, Molina, con su letrero del centro kinésico y matronil"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-semibold px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.indigo, color: '#FFF8EA' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} text-sm font-semibold px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: C.coral, color: C.coral }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-[2rem] overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.indigo }}>
        <Dot x="8%" y="20%" size={16} color={C.coral} className="opacity-60" />
        <Dot x="88%" y="16%" size={10} color={C.gold} className="opacity-70" />
        <Dot x="80%" y="76%" size={14} color={C.paper} className="opacity-40" />
        <Dot x="14%" y="80%" size={9} color={C.gold} className="opacity-50" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-18 md:py-24 text-center">
          <Reveal>
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              aria-hidden="true"
              className="w-16 h-16 rounded-full object-cover mx-auto mb-6"
              style={{ boxShadow: `0 0 0 4px ${C.indigo}, 0 0 0 6px rgba(242,165,61,0.6)` }}
            />
            <h2 className={`${display.className} font-bold text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.02] mb-5`} style={{ color: '#FFF8EA' }}>
              Tu cuerpo y tu salud,
              <br />
              <span style={{ color: C.gold }}>en buenas manos</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,248,234,0.88)' }}>
              Escríbenos por WhatsApp y agenda tu hora de kinesiología o
              matrona. Atendemos hasta las 22:00 entre semana.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block text-sm md:text-base font-semibold px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.coral, color: '#FFF8EA' }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.indigoDeep, color: '#FFF8EA' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="w-10 h-10 rounded-full object-cover" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`}>{BIZ.name}</p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-0.5`} style={{ color: 'rgba(255,248,234,0.7)' }}>
                {BIZ.tagline}
              </p>
            </div>
          </div>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(255,248,234,0.8)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.instagram}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,248,234,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,248,234,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} con datos y fotos reales de su ficha y redes.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
@media (prefers-reduced-motion: reduce) { .animate-\\[marquee_28s_linear_infinite\\] { animation: none } }`}</style>
    </div>
  )
}
