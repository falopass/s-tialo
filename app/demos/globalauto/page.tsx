import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// Identidad: taller moderno negro + naranja, con marcas de encuadre
// (crosshair) como las cámaras de la alineadora 3D John Bean.
const C = {
  papel: '#EFF1F3',
  card: '#FAFBFC',
  tinta: '#14181C',
  carbon: '#0E1113',
  carbonSoft: '#1A2026',
  naranja: '#F26A1B',
  naranjaFuerte: '#B84B0A',
  acero: '#8B96A1',
  line: 'rgba(20,24,28,0.14)',
  muted: '#4D5862',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'globalauto',
  title: 'GlobalAuto · Servicio automotriz en San Clemente',
  description:
    'Taller automotriz en San Clemente, Maule. Alineación 3D John Bean, balanceo, cambio de aceite y tren delantero. Empresa familiar, 4,8 en Google.',
  image: '/demos/globalauto/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

const SERVICIOS = [
  {
    icon: 'alineacion',
    name: 'Alineación 3D',
    desc: 'Con alineadora John Bean V3D Full HD: medición exacta y ajuste fino de la geometría.',
    badge: 'Estrella',
  },
  {
    icon: 'balanceo',
    name: 'Balanceo',
    desc: 'Ruedas balanceadas para un andar suave, sin vibraciones en el volante.',
  },
  {
    icon: 'aceite',
    name: 'Lubricantes y aditivos',
    desc: 'Cambio de aceite y filtro en 30 a 40 minutos, con productos de calidad.',
    badge: '30–40 min',
  },
  {
    icon: 'tren',
    name: 'Tren delantero',
    desc: 'Diagnóstico y reparación de suspensión: terminales, bujes y rótulas.',
  },
  {
    icon: 'amortiguador',
    name: 'Amortiguadores',
    desc: 'Revisión y cambio para recuperar estabilidad, frenado y confort.',
  },
  {
    icon: 'mantencion',
    name: 'Mantención',
    desc: 'Mantenimiento preventivo para que el auto siga en regla todo el año.',
  },
  {
    icon: 'afinamiento',
    name: 'Afinamiento',
    desc: 'Puesta a punto del motor para recuperar rendimiento y consumo.',
  },
  {
    icon: 'higienizacion',
    name: 'Higienización',
    desc: 'Sanitización y limpieza interior profunda del habitáculo.',
  },
]

const RESENAS = [
  {
    quote:
      'Hice alineación y balanceo. El mecánico me explicó cómo venía el auto y quedó perfecto. Atención rápida y clara.',
    name: 'Lucas Navarro',
  },
  {
    quote: 'Muy buena atención, se nota el cuidado por el detalle.',
    name: 'Diego López Romero',
  },
  {
    quote: '1000% recomendado. Trabajo serio y a la hora.',
    name: 'Mauricio A. Orellana Navarro',
  },
]

const FAQ = [
  {
    q: '¿Necesito agendar hora?',
    a: 'Lo recomendable es agendar por WhatsApp para asegurar tu cupo, sobre todo para alineación y mantenciones. El cambio de aceite con filtro toma solo 30 a 40 minutos.',
  },
  {
    q: '¿Qué tiene de especial la alineación 3D?',
    a: 'Usan una alineadora John Bean V3D Full HD: cámaras miden la geometría real de las ruedas y el ajuste queda exacto, lo que alarga la vida de los neumáticos y mejora la estabilidad.',
  },
  {
    q: '¿Atienden flotas o empresas de transporte?',
    a: 'Sí. Tienen precios especiales para empresas de transporte y para clientes frecuentes — se cotiza directo por WhatsApp.',
  },
  {
    q: '¿Dónde quedan y qué horario tienen?',
    a: 'En Luis Humberto Silva 461, San Clemente. Atienden de lunes a viernes de 09:00 a 18:00 y sábados de 09:00 a 13:00.',
  },
]

// ── Motivo gráfico: encuadre de alineación ──────────────────

// Esquinas de visor, como las marcas que la cámara de la alineadora
// proyecta sobre el auto. Se repiten en fotos y tarjetas clave.
function CornerMarks({ color = C.naranja, className = '' }: { color?: string; className?: string }) {
  const m = 'absolute w-5 h-5 md:w-6 md:h-6 pointer-events-none'
  return (
    <div className={`absolute inset-3 md:inset-4 pointer-events-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className={`${m} top-0 left-0`} fill="none" stroke={color} strokeWidth="3">
        <path d="M2 9 V2 H9" />
      </svg>
      <svg viewBox="0 0 24 24" className={`${m} top-0 right-0`} fill="none" stroke={color} strokeWidth="3">
        <path d="M15 2 H22 V9" />
      </svg>
      <svg viewBox="0 0 24 24" className={`${m} bottom-0 left-0`} fill="none" stroke={color} strokeWidth="3">
        <path d="M2 15 V22 H9" />
      </svg>
      <svg viewBox="0 0 24 24" className={`${m} bottom-0 right-0`} fill="none" stroke={color} strokeWidth="3">
        <path d="M15 22 H22 V15" />
      </svg>
    </div>
  )
}

function Crosshair({ className = 'w-5 h-5', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="6" />
      <path d="M12 2.5 V6 M12 18 V21.5 M2.5 12 H6 M18 12 H21.5" />
      <circle cx="12" cy="12" r="1.2" fill={color} stroke="none" />
    </svg>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2.5 font-semibold`} style={{ color }}>
      <Crosshair className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

function SpecChip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold uppercase tracking-wider rounded-md px-3 py-2 border`}
      style={
        dark
          ? { backgroundColor: 'rgba(255,255,255,0.07)', borderColor: 'rgba(242,106,27,0.5)', color: '#FFB27D' }
          : { backgroundColor: C.card, borderColor: C.line, color: C.naranjaFuerte }
      }
    >
      {children}
    </span>
  )
}

function SvcIcon({ kind, color }: { kind: string; color: string }) {
  const paths: Record<string, React.ReactNode> = {
    alineacion: (
      <>
        <circle cx="12" cy="12" r="6.5" />
        <path d="M12 2.5 V6 M12 18 V21.5 M2.5 12 H6 M18 12 H21.5" />
        <circle cx="12" cy="12" r="1.3" fill={color} stroke="none" />
      </>
    ),
    balanceo: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 4.5 V9 M4.5 12 H9 M12 15 V19.5 M15 12 H19.5" />
      </>
    ),
    aceite: (
      <>
        <path d="M12 3.5 C12 3.5 6.5 10 6.5 14 a5.5 5.5 0 0 0 11 0 C17.5 10 12 3.5 12 3.5 Z" />
        <path d="M9.5 14 a2.5 2.5 0 0 0 2.5 2.5" />
      </>
    ),
    tren: (
      <>
        <path d="M5 18 L12 4.5 L19 18" />
        <path d="M8 13.5 h8 M9.8 9.5 h4.4" />
        <path d="M3.5 20.5 h17" />
      </>
    ),
    amortiguador: (
      <>
        <path d="M9 3 h6 v3 H9 Z M9 18 h6 v3 H9 Z" />
        <path d="M10.5 6 L13.5 9 L10.5 12 L13.5 15 L10.5 18" />
      </>
    ),
    mantencion: (
      <>
        <path d="M14.7 6.3 a4.4 4.4 0 0 0 -5.9 5.9 L4 17l3 3 4.8-4.8 a4.4 4.4 0 0 0 5.9-5.9 l-2.8 2.8 -2-2 Z" />
      </>
    ),
    afinamiento: (
      <>
        <path d="M4 17 a8 8 0 0 1 16 0" />
        <path d="M12 17 L15.5 10.5" />
        <circle cx="12" cy="17" r="1.4" fill={color} stroke="none" />
        <path d="M5.5 12.5 h1.8 M16.7 12.5 h1.8 M8.2 7.8 l1.3 1.3 M15.8 7.8 l-1.3 1.3" />
      </>
    ),
    higienizacion: (
      <>
        <path d="M12 3.5 L13.8 8.2 L18.5 10 L13.8 11.8 L12 16.5 L10.2 11.8 L5.5 10 L10.2 8.2 Z" />
        <path d="M18.5 15.5 L19.3 17.7 L21.5 18.5 L19.3 19.3 L18.5 21.5 L17.7 19.3 L15.5 18.5 L17.7 17.7 Z" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px]" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

const WaIcon = (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
)

export default function GlobalAutoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        @keyframes ga-scan { from { transform: translateX(-100%) } to { transform: translateX(100%) } }
        .ga-scan { animation: ga-scan 4.5s ease-in-out infinite alternate }
        @media (prefers-reduced-motion: reduce) { .ga-scan { animation: none } }
      `}</style>

      <div style={{ backgroundColor: C.carbon }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Agendar hora"
          theme={{
            over: 'dark',
            bar: 'rgba(239,241,243,0.95)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.naranja,
            btnInk: '#14181C',
          }}
        />
      </div>

      {/* ── Hero: fachada real con encuadre de alineadora ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de GlobalAuto en San Clemente: taller negro con logo naranja"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,17,19,0.52) 0%, rgba(14,17,19,0.4) 40%, rgba(14,17,19,0.93) 100%)',
          }}
        />
        {/* línea de escaneo de la alineadora */}
        <div className="absolute inset-x-0 top-0 h-full overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="ga-scan absolute top-0 h-full w-[2px]"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(242,106,27,0.65), transparent)' }}
          />
        </div>
        <CornerMarks className="opacity-80" />
        <div className="absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(239,241,243,0.96)', color: C.tinta }}
            >
              <Stars value={4.8} color={C.naranja} className="w-3.5 h-3.5" />
              {BIZ.rating.toFixed(1).replace('.', ',')} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20 pt-28">
          <Reveal>
            <Eyebrow color={C.naranja}>Servicio automotriz · San Clemente</Eyebrow>
            <h1
              className={`${display.className} font-bold leading-[0.98] tracking-[-0.02em] text-[clamp(2.8rem,8.5vw,5.6rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Tu auto, derecho
              <br />
              <span style={{ color: C.naranja }}>al milímetro</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Empresa familiar con taller moderno y alineadora 3D de última
              generación. Diagnóstico honesto y trabajo a la hora.
            </p>
            <div className="flex flex-wrap gap-2.5 mb-9">
              <SpecChip dark>John Bean V3D · Full HD</SpecChip>
              <SpecChip dark>Cambio de aceite 30–40 min</SpecChip>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.naranja, color: C.carbon }}
              >
                {WaIcon}
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de specs ── */}
      <div className="overflow-hidden border-y" style={{ backgroundColor: C.carbonSoft, borderColor: 'rgba(242,106,27,0.35)' }} aria-hidden="true">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {['Alineación 3D', 'Balanceo', 'Tren delantero', 'Amortiguadores', 'Higienización', 'Afinamiento'].map((s) => (
            <span key={s} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] whitespace-nowrap flex items-center gap-3`} style={{ color: 'rgba(255,255,255,0.75)' }}>
              <span className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: C.naranja }} />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="md:flex items-end justify-between gap-8 mb-10 md:mb-14">
            <Reveal>
              <Eyebrow color={C.naranjaFuerte}>Taller completo</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em]`} style={{ color: C.tinta }}>
                Servicios de<br />precisión
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm md:text-right mt-4 md:mt-0" style={{ color: C.muted }}>
                De la alineación 3D a la higienización: todo bajo el mismo
                techo, con equipamiento de primer nivel.
              </p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={(i % 4) * 80}>
                <article
                  className="relative h-full rounded-2xl border p-5 md:p-6 transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: C.card,
                    borderColor: C.line,
                    boxShadow: '0 10px 26px rgba(14,17,19,0.07)',
                  }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#FDE7D7' }}>
                      <SvcIcon kind={s.icon} color={C.naranjaFuerte} />
                    </span>
                    {'badge' in s && s.badge && (
                      <span
                        className={`${mono.className} text-[10px] font-semibold uppercase tracking-wider rounded px-2 py-1`}
                        style={{ backgroundColor: C.carbon, color: C.naranja }}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`${display.className} font-bold text-lg leading-tight`} style={{ color: C.tinta }}>
                    {s.name}
                  </h3>
                  <p className="text-[13px] leading-snug mt-1.5" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El taller: fotos + por qué elegir ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.naranja}>Equipamiento real</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.98] tracking-[-0.02em] mb-10 md:mb-14`} style={{ color: '#FFFFFF' }}>
              Un taller que se nota
              <br />
              <span style={{ color: C.naranja }}>desde la vereda</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            <Reveal className="md:col-span-7">
              <div
                className="relative overflow-hidden rounded-2xl border aspect-[4/3] h-full min-h-[280px]"
                style={{ borderColor: 'rgba(255,255,255,0.14)', boxShadow: '0 22px 48px rgba(0,0,0,0.45)' }}
              >
                <Image
                  src={`${IMG}/alineacion.webp`}
                  alt="Foso de alineación 3D del taller GlobalAuto"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
                <CornerMarks />
                <div className="absolute bottom-4 left-4">
                  <SpecChip dark>Alineadora John Bean V3D</SpecChip>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <div className="flex flex-col gap-5 h-full">
                <div
                  className="relative overflow-hidden rounded-2xl border flex-1 min-h-[190px]"
                  style={{ borderColor: 'rgba(255,255,255,0.14)' }}
                >
                  <Image
                    src={`${IMG}/taller.webp`}
                    alt="Interior del taller GlobalAuto con vehículos en atención"
                    fill
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="relative overflow-hidden rounded-2xl border flex-1 min-h-[190px]"
                  style={{ borderColor: 'rgba(255,255,255,0.14)' }}
                >
                  <Image
                    src={`${IMG}/elevador.webp`}
                    alt="Elevador Safely de 5.500 kg en el taller"
                    fill
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-10">
            {[
              {
                t: 'Empresa familiar',
                d: 'Trato directo con los dueños: explican qué tiene tu auto antes de cobrar un peso.',
              },
              {
                t: 'Precios a transporte',
                d: 'Tarifas especiales para empresas de transporte y clientes frecuentes.',
              },
              {
                t: 'Medición exacta',
                d: 'La alineación se hace con cámaras 3D: nada de “a ojo”. Queda en spec de fábrica.',
              },
            ].map((c, i) => (
              <Reveal key={c.t} delay={i * 100}>
                <article className="h-full rounded-2xl border p-5 md:p-6" style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderColor: 'rgba(255,255,255,0.12)' }}>
                  <Crosshair className="w-5 h-5 mb-4" color={C.naranja} />
                  <h3 className={`${display.className} font-bold text-lg leading-tight`} style={{ color: '#FFFFFF' }}>
                    {c.t}
                  </h3>
                  <p className="text-[13px] md:text-sm leading-snug mt-1.5" style={{ color: 'rgba(255,255,255,0.72)' }}>
                    {c.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow color={C.naranjaFuerte}>Clientes en Google</Eyebrow>
              <div className={`${display.className} font-bold leading-none text-[clamp(4.5rem,14vw,7.5rem)]`} style={{ color: C.tinta }}>
                {BIZ.rating.toFixed(1).replace('.', ',')}
              </div>
              <Stars value={4.8} color={C.naranja} className="w-6 h-6" />
              <p className="text-sm md:text-base mt-4 leading-relaxed" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google. El tema que más se repite:
                explican el problema antes de reparar.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-5 text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.naranjaFuerte, textDecorationColor: 'rgba(184,75,10,0.35)' }}
              >
                Ver la ficha en Maps
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17 L17 7 M9 7 h8 v8" />
                </svg>
              </a>
            </Reveal>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-4 md:gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 100} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <figure
                    className="relative h-full rounded-2xl border p-6 md:p-7 flex flex-col overflow-hidden"
                    style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 10px 26px rgba(14,17,19,0.06)' }}
                  >
                    <div className="absolute top-0 left-0 h-[3px] w-14" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
                    <Stars value={5} color={C.naranja} className="w-3.5 h-3.5 mb-4" />
                    <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: C.tinta }}>
                      “{r.quote}”
                    </blockquote>
                    <figcaption className={`${display.className} mt-5 font-bold text-base`} style={{ color: C.muted }}>
                      {r.name}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Agenda / ubicación ── */}
      <section id="agenda" className="scroll-mt-20" style={{ backgroundColor: '#FDE7D7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <Eyebrow color="#A33F05">Agenda tu hora</Eyebrow>
              <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[0.98] tracking-[-0.02em] mb-6`} style={{ color: C.tinta }}>
                Luis Humberto Silva 461
              </h2>
              <dl className="space-y-4">
                {[
                  {
                    k: 'Dirección',
                    v: `${BIZ.address}, ${BIZ.city}, ${BIZ.region}`,
                    icon: (
                      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Zm0-8.4a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
                    ),
                  },
                  {
                    k: 'Horario',
                    v: BIZ.schedule,
                    icon: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13.5V12l3 2" />,
                  },
                  {
                    k: 'Contacto',
                    v: `WhatsApp ${BIZ.phoneDisplay} · fijo ${BIZ.phoneFijo} · ${BIZ.email}`,
                    icon: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
                  },
                ].map((r) => (
                  <div key={r.k} className="flex gap-4 items-start">
                    <span className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: C.card }}>
                      <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={C.naranjaFuerte} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        {r.icon}
                      </svg>
                    </span>
                    <div>
                      <dt className={`${display.className} font-bold text-base`} style={{ color: C.tinta }}>
                        {r.k}
                      </dt>
                      <dd className="text-sm mt-0.5" style={{ color: C.muted }}>
                        {r.v}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3 mt-7">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center gap-2.5 font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.carbon, color: '#FFFFFF' }}
                >
                  {WaIcon}
                  Agendar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center gap-2.5 font-bold text-sm px-6 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative overflow-hidden rounded-2xl border aspect-[4/3] lg:aspect-[4/4.4]"
                style={{ borderColor: 'rgba(184,75,10,0.3)', boxShadow: '0 18px 40px rgba(14,17,19,0.14)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.naranjaFuerte}>Dudas frecuentes</Eyebrow>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[0.98] tracking-[-0.02em] mb-8 md:mb-10`} style={{ color: C.tinta }}>
              Antes de venir
            </h2>
          </Reveal>
          <FaqList
            items={FAQ}
            colors={{
              q: C.tinta,
              a: C.muted,
              line: 'rgba(184,75,10,0.25)',
              plusBg: C.carbon,
              plusInk: C.naranja,
            }}
          />
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className={`${display.className} font-bold text-xl leading-none`} style={{ color: '#FFFFFF' }}>
                {BIZ.name}
              </p>
              <p className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.naranja, color: C.carbon }}
              >
                {WaIcon}
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Google Maps
              </a>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 {BIZ.name} · {BIZ.city}
            </p>
            <Crosshair className="w-5 h-5 opacity-60" color={C.naranja} />
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.short} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
