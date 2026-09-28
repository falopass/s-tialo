import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_SCAN, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Identidad: osciloscopio de diagnóstico. Ámbar de fósforo sobre
// negro de taller, rejilla de instrumento y la forma de onda de la
// señal que el escáner dibuja al encontrar la falla.
const C = {
  fondo: '#0C0F0B',
  panel: '#141813',
  panelSoft: '#1B201A',
  papel: '#F3EFE4',
  card: '#FBF8EE',
  tinta: '#171A12',
  ambar: '#FFB11F',
  ambarTinta: '#7A5200',
  ok: '#8FD97F',
  muted: '#5C6154',
  mutedDark: 'rgba(243,239,228,0.62)',
  line: 'rgba(23,26,18,0.14)',
  lineDark: 'rgba(255,177,31,0.28)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'mecanico-juan-vivar',
  title: 'Mecánico Juan Vivar “Don Scanner” · Diagnóstico electrónico en Linares',
  description:
    'Taller mecánico en Linares, Maule. Diagnóstico con escáner, inyección electrónica y mecánica general. 4,9 en Google: encuentra la falla que otros no encuentran.',
})

const NAV_LINKS = [
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const SERVICIOS = [
  {
    icon: 'scanner',
    name: 'Diagnóstico con escáner',
    desc: 'Lectura de códigos, sensores y parámetros en vivo para ir directo a la falla.',
    badge: 'Firma',
  },
  {
    icon: 'inyeccion',
    name: 'Inyección electrónica',
    desc: 'Especialidad del taller: inyectores, bombas y cuerpos de aceleración.',
    badge: 'Especialidad',
  },
  {
    icon: 'bobina',
    name: 'Encendido y bobinas',
    desc: 'Fallas de encendido, chispa débil y bobinas medidas, no adivinadas.',
  },
  {
    icon: 'sensor',
    name: 'Sensores y electricidad',
    desc: 'Cableado, masa, corrientes de retorno y sensores que gatillan el check engine.',
  },
  {
    icon: 'motor',
    name: 'Mecánica general',
    desc: 'Reparaciones de motor, frenos y mantenciones con diagnóstico previo.',
  },
  {
    icon: 'revision',
    name: 'Revisión pre-compra',
    desc: 'Antes de comprar un usado: escaneo y revisión para no llevarse sorpresas.',
  },
]

const PASOS = [
  {
    n: '01',
    t: 'Escucha y escanea',
    d: 'Parte por lo que cuentas del auto y lo que dice el escáner: códigos, sensores y datos en vivo.',
  },
  {
    n: '02',
    t: 'Mide la falla real',
    d: 'Cruce de mediciones hasta aislar el componente que falla — no una lista de posibles.',
  },
  {
    n: '03',
    t: 'Repara solo lo necesario',
    d: 'Nada de cambiar piezas por probar: se repara lo que está malo y se te muestra por qué.',
  },
]

const RESENAS = [
  {
    quote:
      'Mi camioneta no partía y ya le habían cambiado piezas de más. Don Scanner le encontró la bobina mala al primer escaneo. Servicio garantizado.',
    name: 'Victor Pincheira',
    tag: 'Diagnóstico certero',
  },
  {
    quote:
      'Llevé mi Great Wall después de que dos talleres no encontraron la falla. En menos de 24 horas quedó lista, con precio justo y claro desde el principio.',
    name: 'Amorry Gomez Chappa',
    tag: 'Resuelto en el día',
  },
  {
    quote: 'Muy escrupuloso con su trabajo. Explica qué falla, qué mide y qué cambia.',
    name: 'Antonio Giustinianovich',
    tag: 'Trabajo meticuloso',
  },
]

const FAQ = [
  {
    q: '¿Qué es un diagnóstico con escáner?',
    a: 'El taller conecta el vehículo a un escáner de diagnóstico que lee códigos de falla y sensores en vivo. En vez de cambiar piezas por probar, se llega directo al componente que está fallando.',
  },
  {
    q: '¿Atienden fines de semana?',
    a: 'No. El taller atiende de lunes a viernes de 8:30 a 18:00. Sábado y domingo permanece cerrado — agenda por WhatsApp durante la semana.',
  },
  {
    q: '¿Qué tipo de vehículos atienden?',
    a: 'Vehículos a bencina y diésel, incluyendo camionetas y marcas chinas. Consulta tu modelo por WhatsApp antes de ir.',
  },
  {
    q: '¿Dónde queda el taller?',
    a: 'En Los Pirineos 1492, Linares, Región del Maule. Puedes ver la ubicación exacta en el mapa más arriba o pedir indicaciones por WhatsApp.',
  },
]

const WaIcon = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 shrink-0" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

// ── Motivo gráfico: forma de onda del escáner ───────────────

function Waveform({
  color = C.ambar,
  className = '',
  strokeWidth = 2.5,
}: {
  color?: string
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg viewBox="0 0 240 60" className={className} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M0 38 H42 L52 38 58 14 66 52 74 26 80 38 H118 L128 38 136 8 144 48 152 30 158 38 H196 L206 38 212 22 218 42 224 34 230 38 H240" />
    </svg>
  )
}

// Línea de barrido vertical sobre la pantalla del osciloscopio
function ScopeScreen() {
  return (
    <div
      className="relative rounded-2xl overflow-hidden border"
      style={{
        backgroundColor: C.panel,
        borderColor: C.lineDark,
        boxShadow: '0 24px 60px rgba(0,0,0,0.5), inset 0 0 60px rgba(255,177,31,0.04)',
      }}
    >
      {/* rejilla de instrumento */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,177,31,0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(255,177,31,0.09) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* barrido */}
      <div className="jv-sweep absolute top-0 h-full w-[2px]" aria-hidden="true"
        style={{ background: 'linear-gradient(180deg, transparent, rgba(255,177,31,0.8), transparent)' }}
      />
      {/* señal */}
      <div className="relative px-6 py-10 md:px-10 md:py-14">
        <Waveform className="w-full h-20 md:h-28 jv-signal" strokeWidth={3} />
        <div className={`${mono.className} mt-6 md:mt-8 space-y-1.5 text-[11px] md:text-xs leading-relaxed`}>
          <p style={{ color: 'rgba(243,239,228,0.55)' }}>&gt; escaneo OBD-II · sensores en vivo</p>
          <p style={{ color: C.ok }}>&gt; encendido ............ SEÑAL OK</p>
          <p style={{ color: C.ok }}>&gt; inyección ............ SEÑAL OK</p>
          <p style={{ color: C.ambar }}>&gt; bobina cil. 2 ........ FALLA DETECTADA</p>
        </div>
      </div>
      {/* esquinas de pantalla */}
      <span className="absolute top-3 left-4 w-2.5 h-2.5 border-t-2 border-l-2" style={{ borderColor: 'rgba(255,177,31,0.6)' }} aria-hidden="true" />
      <span className="absolute top-3 right-4 w-2.5 h-2.5 border-t-2 border-r-2" style={{ borderColor: 'rgba(255,177,31,0.6)' }} aria-hidden="true" />
      <span className="absolute bottom-3 left-4 w-2.5 h-2.5 border-b-2 border-l-2" style={{ borderColor: 'rgba(255,177,31,0.6)' }} aria-hidden="true" />
      <span className="absolute bottom-3 right-4 w-2.5 h-2.5 border-b-2 border-r-2" style={{ borderColor: 'rgba(255,177,31,0.6)' }} aria-hidden="true" />
    </div>
  )
}

// Chip de lectura en mono
function ReadChip({ children, tone = 'amber' }: { children: React.ReactNode; tone?: 'amber' | 'ok' }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] rounded-md border px-3 py-2`}
      style={{
        backgroundColor: 'rgba(255,177,31,0.08)',
        borderColor: tone === 'ok' ? 'rgba(143,217,127,0.45)' : C.lineDark,
        color: tone === 'ok' ? C.ok : '#FFC85C',
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: tone === 'ok' ? C.ok : C.ambar }} />
      {children}
    </span>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] mb-4 flex items-center gap-2.5`} style={{ color }}>
      <Waveform color="currentColor" className="w-10 h-4" strokeWidth={4} />
      {children}
    </p>
  )
}

function SvcIcon({ kind, color }: { kind: string; color: string }) {
  const p = { fill: 'none', stroke: color, strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<string, React.ReactNode> = {
    scanner: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 15 L11 15 12.5 10 14.5 16 16 12 H18" />
        <path d="M8 9 H10 M8 12 H9" />
      </>
    ),
    inyeccion: (
      <>
        <path d="M8 4 H16" />
        <path d="M12 4 V9" />
        <path d="M9 9 H15 L14 15 H10 Z" />
        <path d="M10 15 L9.5 20 M14 15 L14.5 20 M12 15 V20" />
      </>
    ),
    bobina: (
      <>
        <rect x="7" y="3" width="10" height="8" rx="1.5" />
        <path d="M9 5.5 H15 M9 8 H15" />
        <path d="M12 11 V14" />
        <path d="M13.5 13 L10.5 16 H13 L9 20" />
      </>
    ),
    sensor: (
      <>
        <circle cx="12" cy="12" r="3.2" />
        <circle cx="12" cy="12" r="6.4" strokeDasharray="3 3" />
        <path d="M12 8.8 V6 M12 15.2 V18 M8.8 12 H6 M15.2 12 H18" />
      </>
    ),
    motor: (
      <>
        <path d="M7 8 V6 H10 L11 8 H15 V10 H18 V16 H16 L14.5 19 H7.5 L6 16 H4 V10 H7 Z" />
        <path d="M15 10 V16" />
      </>
    ),
    revision: (
      <>
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M14.5 14.5 L20 20" />
        <path d="M8 10.5 L10 12.5 13 8.5" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" {...p} aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.fondo }}>
      <style>{`
        @keyframes jv-sweep { from { transform: translateX(0); opacity: 0 } 8% { opacity: 1 } 92% { opacity: 1 } to { transform: translateX(100%); opacity: 0 } }
        .jv-sweep { animation: jv-sweep 5s linear infinite; right: auto; left: 0 }
        @keyframes jv-signal { 0%,100% { opacity: 1 } 50% { opacity: 0.55 } }
        .jv-signal { animation: jv-signal 2.4s ease-in-out infinite }
        @media (prefers-reduced-motion: reduce) { .jv-sweep, .jv-signal { animation: none } }
      `}</style>

      <div style={{ backgroundColor: C.fondo }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Agendar diagnóstico"
          theme={{
            over: 'dark',
            bar: 'rgba(243,239,228,0.96)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.ambar,
            btnInk: '#171A12',
          }}
        />
      </div>

      {/* ── Hero: pantalla de escáner ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.fondo }}>
        {/* rejilla de fondo */}
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,177,31,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,177,31,0.05) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 65% 35%, rgba(255,177,31,0.08), transparent 70%)' }}
        />
        <div className="absolute top-20 md:top-24 right-5 md:right-8 z-10">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(243,239,228,0.97)', color: C.tinta }}
            >
              <Stars value={4.9} color={C.ambarTinta} className="w-3.5 h-3.5" />
              {BIZ.rating.toFixed(1).replace('.', ',')} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>

        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Eyebrow color={C.ambar}>Taller mecánico · Linares</Eyebrow>
              <h1
                className={`${display.className} font-semibold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.7rem,8vw,5.4rem)] mb-6`}
                style={{ color: C.papel }}
              >
                La falla que otros no encuentran,{' '}
                <span style={{ color: C.ambar }}>aquí se encuentra</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: C.mutedDark }}>
                Juan Vivar — <span style={{ color: C.papel }}>“Don Scanner”</span> — es técnico máster
                en inyección electrónica. Diagnóstico con escáner y mediciones
                reales antes de tocar una sola pieza.
              </p>
              <div className="flex flex-wrap gap-2.5 mb-9">
                <ReadChip>Inyección electrónica · INACAP</ReadChip>
                <ReadChip tone="ok">L–V · 8:30–18:00</ReadChip>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_SCAN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center gap-2.5 font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ambar, color: '#171A12' }}
                >
                  {WaIcon}
                  Agendar escaneo
                </a>
                <a
                  href="#diagnostico"
                  className={`${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-md border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(243,239,228,0.62)', color: C.papel }}
                >
                  Cómo diagnostica
                </a>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={150}>
              <ScopeScreen />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta de lecturas ── */}
      <div className="overflow-hidden border-y" style={{ backgroundColor: C.panel, borderColor: C.lineDark }} aria-hidden="true">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {['Diagnóstico OBD-II', 'Inyección electrónica', 'Encendido y bobinas', 'Sensores', 'Mecánica general'].map((s) => (
            <span key={s} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] whitespace-nowrap flex items-center gap-3`} style={{ color: 'rgba(243,239,228,0.72)' }}>
              <Waveform className="w-6 h-2.5" strokeWidth={5} color={C.ambar} />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* ── Método de diagnóstico ── */}
      <section id="diagnostico" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="md:flex items-end justify-between gap-8 mb-10 md:mb-14">
            <Reveal>
              <Eyebrow color={C.ambarTinta}>Diagnóstico primero</Eyebrow>
              <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.95] tracking-[0.01em]`} style={{ color: C.tinta }}>
                Nada de cambiar<br />piezas por probar
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-sm md:text-base leading-relaxed max-w-sm md:text-right mt-4 md:mt-0" style={{ color: C.muted }}>
                La diferencia de un taller con escáner: la falla se mide
                antes de cobrar una sola pieza.
              </p>
            </Reveal>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <article
                  className="relative h-full rounded-2xl border p-6 md:p-7"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 10px 26px rgba(23,26,18,0.06)' }}
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className={`${mono.className} text-3xl font-bold`} style={{ color: C.ambarTinta }}>
                      {p.n}
                    </span>
                    <Waveform className="w-14 h-5 opacity-70" color={C.ambar} strokeWidth={3} />
                  </div>
                  <h3 className={`${display.className} font-semibold uppercase text-xl tracking-wide`} style={{ color: C.tinta }}>
                    {p.t}
                  </h3>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>
                    {p.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.fondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.ambar}>Taller completo</Eyebrow>
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.95] tracking-[0.01em] mb-10 md:mb-14`} style={{ color: C.papel }}>
              Del check engine<br />a la mantención
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 80}>
                <article
                  className="relative h-full rounded-2xl border p-5 md:p-6 transition-transform hover:-translate-y-1"
                  style={{ backgroundColor: C.panel, borderColor: 'rgba(255,177,31,0.16)' }}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0 border" style={{ backgroundColor: 'rgba(255,177,31,0.1)', borderColor: C.lineDark }}>
                      <SvcIcon kind={s.icon} color={C.ambar} />
                    </span>
                    {'badge' in s && s.badge && (
                      <span
                        className={`${mono.className} text-[10px] font-bold uppercase tracking-wider rounded px-2 py-1`}
                        style={{ backgroundColor: C.ambar, color: '#171A12' }}
                      >
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <h3 className={`${display.className} font-semibold uppercase text-lg tracking-wide leading-tight`} style={{ color: C.papel }}>
                    {s.name}
                  </h3>
                  <p className="text-[13px] leading-snug mt-1.5" style={{ color: C.mutedDark }}>
                    {s.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          {/* credencial INACAP */}
          <Reveal delay={100}>
            <div
              className="mt-10 md:mt-12 rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8"
              style={{ backgroundColor: C.panelSoft, borderColor: C.lineDark }}
            >
              <div className={`${mono.className} shrink-0 text-center md:text-left`}>
                <p className="text-[10px] uppercase tracking-[0.3em]" style={{ color: 'rgba(243,239,228,0.55)' }}>Formación</p>
                <p className="text-sm font-bold mt-1" style={{ color: C.ambar }}>INACAP</p>
              </div>
              <div className="w-full md:w-px h-px md:h-12" style={{ backgroundColor: C.lineDark }} />
              <div>
                <p className={`${display.className} font-semibold uppercase text-lg md:text-xl tracking-wide`} style={{ color: C.papel }}>
                  Técnico Máster en Inyección Electrónica Automotriz
                </p>
                <p className="text-sm mt-1" style={{ color: C.mutedDark }}>
                  Especialista en la electrónica que hoy manda en el motor.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow color={C.ambarTinta}>Reseñas de Google</Eyebrow>
                <p className={`${display.className} font-semibold text-[5.5rem] md:text-[7rem] leading-none`} style={{ color: C.tinta }}>
                  {BIZ.rating.toFixed(1).replace('.', ',')}
                </p>
                <Stars value={4.9} color={C.ambarTinta} className="w-6 h-6 md:w-7 md:h-7" />
                <p className="text-sm md:text-base mt-3 leading-relaxed" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google. Los clientes repiten lo
                  mismo: aquí encuentran la falla.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 90}>
                  <figure
                    className="h-full rounded-2xl border p-5 md:p-6 flex flex-col"
                    style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 10px 26px rgba(23,26,18,0.06)' }}
                  >
                    <span className={`${mono.className} text-[10px] font-bold uppercase tracking-wider rounded px-2 py-1 self-start mb-4`} style={{ backgroundColor: C.fondo, color: C.ambar }}>
                      {r.tag}
                    </span>
                    <blockquote className="text-sm leading-relaxed flex-1" style={{ color: C.tinta }}>
                      “{r.quote}”
                    </blockquote>
                    <figcaption className="mt-4 pt-4 border-t flex items-center justify-between gap-3" style={{ borderColor: C.line }}>
                      <span className="text-xs font-bold" style={{ color: C.tinta }}>{r.name}</span>
                      <span className={`${mono.className} text-[10px] uppercase tracking-wider`} style={{ color: C.muted }}>Google</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y agenda ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.fondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.ambar}>Ubicación y horario</Eyebrow>
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-6xl leading-[0.95] tracking-[0.01em] mb-10 md:mb-14`} style={{ color: C.papel }}>
              Trae tu auto<br />a Los Pirineos
            </h2>
          </Reveal>
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <Reveal>
              <div
                className="h-full rounded-2xl border p-6 md:p-8"
                style={{ backgroundColor: C.panel, borderColor: 'rgba(255,177,31,0.16)' }}
              >
                <dl className="space-y-5">
                  {[
                    ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                    ['Horario', 'Lunes a viernes · 8:30–18:00'],
                    ['Fin de semana', 'Cerrado'],
                    ['WhatsApp', BIZ.phoneDisplay],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-start justify-between gap-4 pb-5 border-b" style={{ borderColor: 'rgba(255,177,31,0.14)' }}>
                      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em] pt-0.5`} style={{ color: 'rgba(243,239,228,0.55)' }}>
                        {k}
                      </dt>
                      <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.papel }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="flex flex-wrap gap-3 mt-7">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center gap-2.5 font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-md transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.ambar, color: '#171A12' }}
                  >
                    {WaIcon}
                    Escribir ahora
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-md border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(243,239,228,0.62)', color: C.papel }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative h-full min-h-[320px] rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(255,177,31,0.16)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ backgroundColor: C.papel }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <Eyebrow color={C.ambarTinta}>Dudas frecuentes</Eyebrow>
            <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.95] tracking-[0.01em] mb-8 md:mb-10`} style={{ color: C.tinta }}>
              Antes de llevar el auto
            </h2>
          </Reveal>
          <FaqList
            items={FAQ}
            colors={{
              q: C.tinta,
              a: C.muted,
              line: 'rgba(122,82,0,0.25)',
              plusBg: C.fondo,
              plusInk: C.ambar,
            }}
          />
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.fondo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className={`${display.className} font-semibold uppercase text-xl leading-none tracking-wide`} style={{ color: C.papel }}>
                {BIZ.name}
              </p>
              <p className="text-xs mt-1.5" style={{ color: 'rgba(243,239,228,0.55)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 font-semibold uppercase tracking-wide text-sm px-5 py-2.5 rounded-md transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.ambar, color: '#171A12' }}
              >
                {WaIcon}
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: 'rgba(243,239,228,0.75)' }}
              >
                Google Maps
              </a>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(255,177,31,0.16)' }}>
            <p className="text-[11px]" style={{ color: 'rgba(243,239,228,0.62)' }}>
              © 2026 {BIZ.name} · {BIZ.city}
            </p>
            <Waveform className="w-16 h-4 opacity-70" color={C.ambar} strokeWidth={3} />
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.short} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
