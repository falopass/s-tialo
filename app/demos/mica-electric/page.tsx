import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  FB_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  SERVICIOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  navy: '#0E1836',
  navyDeep: '#091026',
  panel: '#152248',
  lineDark: 'rgba(148,178,224,0.16)',
  teal: '#35B6CC',
  tealInk: '#186372',
  yellow: '#F6C90E',
  yellowInk: '#5C4300',
  paper: '#EFF2F7',
  ink: '#131C33',
  muted: '#5A6478',
  white: '#F4F7FD',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'mica-electric',
  title: `${BIZ.name} — Electricistas en ${BIZ.city} | Emergencias 24/7`,
  description:
    'Demo de sitio para Mica Electric: servicios integrales de electricidad en Talca y el Maule. Emergencias 24/7, empalmes, instalaciones domiciliarias y certificación.',
  image: `${IMG}/cuadrilla-furgon.webp`,
})

/* Motivo del logo: el globo de circuito — aquí como rejilla de puntos + trazos */
function CircuitMotif({ className = '', color = C.teal }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="20" stroke={color} strokeWidth="2.5" />
      <path d="M32 12v40M12 32h40M18 19c8 5 20 5 28 0M18 45c8-5 20-5 28 0" stroke={color} strokeWidth="2" />
      <path d="M32 4v4M32 56v4M4 32h4M56 32h4" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="6" r="2.4" fill={color} />
      <circle cx="32" cy="58" r="2.4" fill={color} />
      <circle cx="6" cy="32" r="2.4" fill={color} />
      <circle cx="58" cy="32" r="2.4" fill={color} />
    </svg>
  )
}

function Bolt({ className = '', color = C.yellow }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <path d="M13.5 1.5 4 14h6l-1.5 8.5L19 10h-6l.5-8.5z" />
    </svg>
  )
}

export default function Page() {
  return (
    <div
      className={body.className}
      style={{ backgroundColor: C.navy, color: C.white }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} font-bold tracking-tight`}>
            {BIZ.name}
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'Emergencias', href: '#emergencias' },
          { label: 'Opiniones', href: '#opiniones' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={WA_LINK}
        ctaLabel="Pedir hora"
        theme={{
          over: 'dark',
          bar: C.navyDeep,
          ink: C.white,
          line: C.lineDark,
          btnBg: C.yellow,
          btnInk: C.navyDeep,
        }}
      />

      {/* ── HERO: tablero energizado ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(1100px 520px at 82% -10%, rgba(53,182,204,0.20) 0%, rgba(14,24,54,0) 60%), radial-gradient(700px 420px at 8% 110%, rgba(246,201,14,0.10) 0%, rgba(14,24,54,0) 55%)',
          }}
          aria-hidden="true"
        />
        {/* rejilla técnica de fondo */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,178,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,178,224,0.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-5 flex items-center gap-2`}
              style={{ color: C.teal }}
            >
              <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              Sistema activo — {BIZ.city}, {BIZ.region}
            </p>
            <h1
              className={`${display.className} font-bold text-[clamp(2.4rem,8.5vw,5rem)] leading-[1.0] tracking-tight max-w-3xl`}
            >
              Cuando se corta la luz,{' '}
              <span style={{ color: C.teal }}>nosotros encendemos</span> la solución.
            </h1>
            <p className="mt-5 text-sm md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(238,242,255,0.78)' }}>
              Empresa eléctrica talquina: emergencias 24/7, empalmes, instalaciones
              domiciliarias y proyectos de loteos y parcelas en todo el Maule.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.yellow, color: C.navyDeep }}
              >
                <Bolt className="w-4 h-4" color={C.navyDeep} />
                Emergencia: escríbenos ya
              </a>
              <a
                href="#servicios"
                className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                style={{ borderColor: C.lineDark, color: C.white }}
              >
                Ver servicios
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <Stars value={5} color={C.yellow} className="w-4 h-4" />
              <p className={`${mono.className} text-xs`} style={{ color: 'rgba(238,242,255,0.7)' }}>
                {BIZ.rating} en Google · {BIZ.reviewCount} opiniones · desde {BIZ.founded}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Franja foto: la cuadrilla real */}
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
              <Image
                src={`${IMG}/cuadrilla-furgon.webp`}
                alt={`Cuadrilla de ${BIZ.name} junto al furgón de servicio en terreno`}
                width={720}
                height={720}
                className="w-full h-[300px] md:h-[430px] object-cover object-center"
                priority
              />
              <div
                className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex items-end justify-between gap-3"
                style={{ background: 'linear-gradient(180deg, transparent, rgba(9,16,38,0.88))' }}
              >
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: C.white }}>
                  Terreno real · Región del Maule
                </p>
                <span
                  className={`${mono.className} text-[11px] md:text-xs font-semibold px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: C.yellow, color: C.navyDeep }}
                >
                  24/7
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Banda de emergencia ── */}
      <section id="emergencias" style={{ backgroundColor: C.yellow }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="flex items-center gap-4 min-w-0">
            <Bolt className="w-9 h-9 shrink-0" color={C.navyDeep} />
            <div className="min-w-0">
              <p className={`${display.className} font-bold text-lg md:text-2xl leading-tight`} style={{ color: C.navyDeep }}>
                Emergencias eléctricas 24 horas, todos los días
              </p>
              <p className="text-sm md:text-base" style={{ color: C.yellowInk }}>
                Lunes a viernes atención continua · sábado 9:00–14:00
              </p>
            </div>
          </div>
          <a
            href={`tel:${BIZ.phoneTel}`}
            className={`${display.className} inline-flex items-center justify-center gap-2 font-bold text-sm px-6 py-3 rounded-full md:ml-auto shrink-0 transition-transform hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
            style={{ backgroundColor: C.navyDeep, color: C.yellow }}
          >
            Llamar {BIZ.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ── SERVICIOS: tablero de circuitos ── */}
      <section id="servicios" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.tealInk }}>
              Tablero de servicios
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,5.5vw,3.4rem)] leading-[1.05] tracking-tight max-w-2xl`}>
              Todo lo eléctrico, en una sola cuadrilla
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
              Los servicios que Mica Electric publica en sus propias redes —
              domiciliarios, industriales y de proyecto.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.num} delay={i * 40}>
                <div
                  className="group h-full rounded-xl border bg-white p-5 flex flex-col transition-shadow hover:shadow-md"
                  style={{ borderColor: 'rgba(19,28,51,0.12)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`${mono.className} text-xs font-semibold`} style={{ color: C.tealInk }}>
                      {s.num}
                    </span>
                    {/* interruptor */}
                    <span
                      className="w-8 h-4 rounded-full relative"
                      style={{ backgroundColor: 'rgba(19,28,51,0.12)' }}
                      aria-hidden="true"
                    >
                      <span
                        className="absolute top-0.5 left-0.5 w-3 h-3 rounded-full transition-all group-hover:left-[18px] group-hover:bg-[#1D7F92]"
                        style={{ backgroundColor: 'rgba(19,28,51,0.35)' }}
                      />
                    </span>
                  </div>
                  <h3 className={`${display.className} font-bold text-base md:text-lg leading-snug`}>
                    {s.titulo}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed" style={{ color: C.muted }}>
                    {s.detalle}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRABAJO REAL: franja de fotos ── */}
      <section style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.teal }}>
              Trabajo en terreno
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.8rem,5vw,3rem)] leading-tight tracking-tight max-w-2xl`}>
              De la acometida al tablero: obra real en el Maule
            </h2>
          </Reveal>
          <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: 'lineas-tension', alt: 'Instalación de líneas de media y baja tensión', tall: true },
              { src: 'terreno-poste-grua', alt: 'Montaje de poste con grúa en terreno', tall: false },
              { src: 'aire-acondicionado', alt: 'Equipo de aire acondicionado instalado', tall: false },
              { src: 'soldadura-exotermica', alt: 'Soldadura exotérmica en puesta a tierra', tall: true },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 60} className={f.tall ? 'row-span-2' : ''}>
                <div className={`relative rounded-xl overflow-hidden border ${f.tall ? 'h-full min-h-[280px]' : 'h-[170px] md:h-[200px]'}`} style={{ borderColor: C.lineDark }}>
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CÓMO TRABAJAMOS ── */}
      <section style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.teal }}>
                Protocolo de servicio
              </p>
              <h2 className={`${display.className} font-bold text-[clamp(1.8rem,5vw,3rem)] leading-tight tracking-tight`}>
                No solo reparamos la falla: dejamos la mejora instalada
              </h2>
              <div className="mt-8 space-y-0">
                {[
                  ['Llegamos', 'Asistencia de urgencia a domicilio, con herramientas especializadas.'],
                  ['Diagnosticamos', 'Encontramos la causa y te la explicamos claro, sin tecnicismos.'],
                  ['Dejamos la mejora', 'Reparamos y reforzamos el punto débil para que no se repita.'],
                ].map(([t, d], i) => (
                  <div key={t} className="flex gap-4 py-4 border-t first:border-t-0" style={{ borderColor: C.lineDark }}>
                    <span className={`${mono.className} text-xs font-semibold mt-1`} style={{ color: C.yellow }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-base md:text-lg`}>{t}</h3>
                      <p className="text-sm mt-1 leading-relaxed" style={{ color: 'rgba(238,242,255,0.7)' }}>{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                  <Image
                    src={`${IMG}/medicion-terreno.webp`}
                    alt={`Medición de terreno para proyecto eléctrico de ${BIZ.name}`}
                    width={720}
                    height={720}
                    className="w-full h-[300px] md:h-[360px] object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-2 md:-left-6 rounded-2xl p-5 max-w-[260px] border"
                  style={{ backgroundColor: C.panel, borderColor: C.lineDark }}
                >
                  <CircuitMotif className="w-9 h-9 mb-3" />
                  <p className={`${display.className} font-bold text-sm leading-snug`}>
                    Proyectos de ingeniería eléctrica
                  </p>
                  <p className="text-xs mt-1.5 leading-relaxed" style={{ color: 'rgba(238,242,255,0.7)' }}>
                    Diseño y ejecución para loteos, parcelas y obras nuevas.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── OPINIONES ── */}
      <section id="opiniones" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.tealInk }}>
                  Clientes que ya llamaron
                </p>
                <h2 className={`${display.className} font-bold text-[clamp(1.8rem,5vw,3rem)] leading-tight tracking-tight`}>
                  Nota perfecta en Google
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <Stars value={5} color="#D9A400" className="w-4 h-4" />
                <span className={`${mono.className} text-sm font-semibold`}>{BIZ.rating}/5</span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 60}>
                <figure
                  className="h-full rounded-xl border bg-white p-6 flex flex-col"
                  style={{ borderColor: 'rgba(19,28,51,0.12)' }}
                >
                  <Stars value={5} color="#D9A400" className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1">
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-5 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {r.nombre} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN / COBERTURA ── */}
      <section id="ubicacion" style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4`} style={{ color: C.teal }}>
                Cobertura Maule
              </p>
              <h2 className={`${display.className} font-bold text-[clamp(1.8rem,5vw,3rem)] leading-tight tracking-tight`}>
                Base en Talca, servicio a toda la región
              </h2>
              <div className="mt-7 space-y-3">
                {[
                  ['Dirección', BIZ.address],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Emergencias', '24/7 · Lun–Vie todo el día, Sáb 9:00–14:00'],
                  ['Cobertura', 'Talca · Curicó · Linares y comunas del Maule'],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-t pt-3 first:border-t-0 first:pt-0" style={{ borderColor: C.lineDark }}>
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.18em] w-24 shrink-0 pt-0.5`} style={{ color: C.teal }}>
                      {k}
                    </span>
                    <span className="text-sm md:text-base" style={{ color: 'rgba(238,242,255,0.85)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.navyDeep }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center font-semibold text-sm px-6 py-3 rounded-full border transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.lineDark, color: C.white }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}`}
                  className="w-full h-[300px] md:h-[380px] block"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.navy }}>
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(148,178,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(148,178,224,0.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <CircuitMotif className="w-12 h-12 mx-auto mb-6" />
            <h2 className={`${display.className} font-bold text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.02] tracking-tight`}>
              ¿Sin luz en Talca?
              <br />
              <span style={{ color: C.yellow }}>Estamos disponibles ahora.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base max-w-md mx-auto leading-relaxed" style={{ color: 'rgba(238,242,255,0.75)' }}>
              Escríbenos por WhatsApp o llama directo: la asistencia de
              emergencia funciona día y noche.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 font-bold text-sm px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.yellow, color: C.navyDeep }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center font-semibold text-sm px-7 py-3 rounded-full border transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                style={{ borderColor: C.lineDark, color: C.white }}
              >
                Facebook @MicaElectric
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: C.white }}>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
              <CircuitMotif className="w-5 h-5" />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(238,242,255,0.75)' }}>
              {BIZ.address} · {BIZ.region} · {BIZ.phoneDisplay}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(238,242,255,0.6)' }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono, horario,
              servicios, opiniones, fotos y logo son reales; textos de
              presentación son de muestra.
            </p>
          </div>
        </div>
      </footer>

      <div className="sc-band">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
