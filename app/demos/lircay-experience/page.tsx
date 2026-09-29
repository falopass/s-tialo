import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SERVICIOS, CERCA, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «cuaderno de ruta». Lircay Experience Marley Coffee es
 * un café outdoor real en Vilches Alto (directorio de la Municipalidad de
 * San Clemente + mundochileno), pero no publica fotos: no tiene ficha en
 * Google Maps ni redes públicas. En vez de inventar fotografía, el demo se
 * dibuja como la bitácora de un trekker — líneas de lápiz, curvas de nivel,
 * cinta adhesiva — y cada ilustración lleva su marca visible «bosquejo».
 */
const C = {
  papel: '#EFE7D6',
  papelSoft: '#E7DDC6',
  tinta: '#2C2720',
  moca: '#6B4226',
  oro: '#D9A62E',
  hoja: '#4A7A3A',
  rojo: '#A63A2B',
  noche: '#202B1F',
  azul: '#3B6E8F',
  muted: 'rgba(44,39,32,0.72)',
  mutedClaro: 'rgba(239,231,214,0.78)',
  line: 'rgba(44,39,32,0.2)',
  lineClaro: 'rgba(239,231,214,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lircay-experience',
  title: 'Lircay Experience — el café outdoor de Vilches Alto',
  description: 'Café outdoor real en Vilches Alto, San Clemente: café, confitería, camas elásticas, tours y senderismo hacia Altos de Lircay. Ilustraciones a modo de bosquejo.',
})

const NAV_LINKS = [
  { label: 'La bitácora', href: '#bitacora' },
  { label: 'El sector', href: '#sector' },
  { label: 'Cómo llegar', href: '#llegar' },
]

function BosquejoTag({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${mono.className} inline-block text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 ${className}`}
      style={{ backgroundColor: C.oro, color: C.tinta, transform: 'rotate(-2deg)' }}
    >
      bosquejo
    </span>
  )
}

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? C.mutedClaro : C.rojo }}
    >
      <span aria-hidden="true" className="inline-block w-8 border-t-2 border-dashed" style={{ borderColor: 'currentColor' }} />
      {children}
    </p>
  )
}

/** Escena a lápiz: cordillera de Vilches, sol y el kiosco del café. */
function EscenaMontana() {
  return (
    <svg viewBox="0 0 390 240" preserveAspectRatio="xMidYMid slice" className="block w-full h-full" aria-hidden="true">
      {/* sol */}
      <circle cx="318" cy="52" r="26" fill="none" stroke={C.oro} strokeWidth="2.5" strokeDasharray="4 5" />
      <circle cx="318" cy="52" r="14" fill={C.oro} opacity="0.75" />
      {/* crestas / curvas de nivel */}
      <path d="M-10,150 Q50,105 110,128 T230,110 T400,135" fill="none" stroke={C.tinta} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M-10,168 Q60,128 125,146 T250,132 T400,158" fill="none" stroke={C.tinta} strokeWidth="2" strokeLinecap="round" opacity="0.65" />
      <path d="M-10,186 Q70,152 140,168 T270,156 T400,180" fill="none" stroke={C.tinta} strokeWidth="1.6" strokeLinecap="round" opacity="0.4" />
      {/* araucarias esbozadas */}
      {[40, 68, 96].map((x, i) => (
        <g key={x} transform={`translate(${x},${118 + i * 4})`} opacity="0.9">
          <path d="M0,26 L0,10 M-9,16 Q0,6 9,16 M-7,24 Q0,14 7,24" stroke={C.hoja} strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
      ))}
      {/* sendero punteado hacia el kiosco */}
      <path d="M20,232 Q80,214 150,212 T300,196" fill="none" stroke={C.rojo} strokeWidth="2" strokeDasharray="2 8" strokeLinecap="round" />
      {/* kiosco del café */}
      <g transform="translate(292,168)">
        <rect x="0" y="14" width="52" height="30" rx="2" fill="none" stroke={C.moca} strokeWidth="2.5" />
        <path d="M-4,14 L26,-2 L56,14" fill="none" stroke={C.moca} strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M26,-2 L26,-24 M26,-24 l18,5 -18,5 z" stroke={C.rojo} strokeWidth="2" fill={C.rojo} />
        {/* taza humeante en el kiosco */}
        <path d="M14,30 h20 v10 a4,4 0 0 1 -4,4 h-12 a4,4 0 0 1 -4,-4 z M34,31 q6,1 0,7" fill="none" stroke={C.moca} strokeWidth="2" />
        <path d="M20,26 q-3,-4 0,-8 M28,26 q-3,-4 0,-8" stroke={C.moca} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      </g>
      {/* nube */}
      <path d="M40,50 q10,-14 24,-8 q14,-8 22,2 q14,-2 16,8" fill="none" stroke={C.tinta} strokeWidth="1.8" opacity="0.45" strokeLinecap="round" />
    </svg>
  )
}

/** Iconos a lápiz para la bitácora. */
function IconoBosquejo({ tipo }: { tipo: number }) {
  const s = { stroke: C.moca, strokeWidth: 2.2, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9 shrink-0" aria-hidden="true">
      {tipo === 0 && (
        <>
          <path {...s} d="M8,18 h20 v10 a6,6 0 0 1 -6,6 h-8 a6,6 0 0 1 -6,-6 z M28,19 q8,1 0,10" />
          <path {...s} d="M13,13 q-3,-4 0,-8 M20,13 q-3,-4 0,-8" />
        </>
      )}
      {tipo === 1 && (
        <>
          <path {...s} d="M6,32 L16,12 L22,22 L28,10 L36,32" />
          <path {...s} stroke={C.rojo} d="M28,10 v-5 l8,2.5 -8,2.5" />
        </>
      )}
      {tipo === 2 && (
        <>
          <path {...s} d="M10,34 L20,8 L30,34 M14,24 h12" />
          <circle {...s} stroke={C.azul} cx="20" cy="17" r="3" />
        </>
      )}
      {tipo === 3 && (
        <>
          <path {...s} d="M6,30 q14,-12 28,0 M10,30 v-8 M30,30 v-8 M10,22 h20" stroke={C.hoja} />
        </>
      )}
      {tipo === 4 && (
        <>
          <path {...s} d="M8,32 L20,10 L32,32 z M20,10 v-4 l10,3 -10,3" />
          <path {...s} d="M14,32 q6,-6 12,0" stroke={C.oro} />
        </>
      )}
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--f-body), sans-serif' }}>
      <BlitzNav
        name={<span style={{ fontFamily: 'var(--f-display), sans-serif', letterSpacing: '0.02em' }}>Lircay Experience</span>}
        links={NAV_LINKS}
        waLink="#llegar"
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.papel, ink: C.tinta, line: C.line, btnBg: C.rojo, btnInk: '#F5EFE0' }}
      />

      {/* ── HERO cuaderno ────────────────────────────────── */}
      <section id="inicio" className="relative pt-[76px]">
        <div className="px-5 md:px-10 pt-10 md:pt-14 max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.28em]`} style={{ color: C.rojo }}>
              Café outdoor · Vilches Alto · San Clemente
            </p>
            <h1
              className="mt-3 text-[12vw] sm:text-6xl md:text-7xl leading-[0.98] uppercase max-w-[13ch]"
              style={{ fontFamily: 'var(--f-display), sans-serif' }}
            >
              El café que recibe a los que <span style={{ color: C.moca }}>suben a Lircay</span>
            </h1>
            <p className="mt-4 text-base md:text-lg max-w-md leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} — también listado como {BIZ.altName} — es el punto de café, tours y descanso del valle, en la ruta a la Reserva Nacional Altos de Lircay.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`tel:${BIZ.phoneTel}`} className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold" style={{ backgroundColor: C.rojo, color: '#F5EFE0' }}>
                Llamar · {BIZ.phoneDisplay}
              </a>
              <a href="#llegar" className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2" style={{ borderColor: C.tinta, color: C.tinta }}>
                Cómo llegar
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mt-10 rounded-2xl overflow-hidden" style={{ backgroundColor: C.papelSoft, border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 ${C.tinta}` }}>
              <div className="aspect-[390/240] md:aspect-[2.4/1]">
                <EscenaMontana />
              </div>
              <BosquejoTag className="absolute right-3 top-3" />
              {/* cinta adhesiva */}
              <span aria-hidden="true" className="absolute -top-3 left-8 w-20 h-6 rotate-[-6deg]" style={{ backgroundColor: 'rgba(217,166,46,0.55)' }} />
            </div>
            <p className={`${mono.className} mt-3 text-[11px] tracking-[0.06em]`} style={{ color: C.muted }}>
              Ilustración de referencia: el negocio no publica fotos oficiales; este demo usa solo dibujos marcados como bosquejo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LA BITÁCORA ──────────────────────────────────── */}
      <section id="bitacora" className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya>La bitácora</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02] uppercase" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Lo que hace el café del valle
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Rubros publicados en el directorio turístico de la Municipalidad de San Clemente y en mundochileno.
            </p>
          </Reveal>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 60}>
                <div className="relative flex gap-4 items-start rounded-xl p-5 h-full" style={{ backgroundColor: '#F5EFE0', border: `1.5px solid ${C.tinta}` }}>
                  <IconoBosquejo tipo={i} />
                  <div>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.rojo }}>nota {String(i + 1).padStart(2, '0')}</p>
                    <h3 className="mt-1 text-lg font-extrabold uppercase tracking-wide" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{s.n}</h3>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                  </div>
                  {i === 0 && <span aria-hidden="true" className="absolute -top-2.5 right-6 w-14 h-5 rotate-[5deg]" style={{ backgroundColor: 'rgba(74,122,58,0.4)' }} />}
                </div>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <div className="flex items-center gap-3 rounded-xl p-5 h-full" style={{ border: `1.5px dashed ${C.muted}` }}>
                <BosquejoTag />
                <p className="text-[13px] leading-snug" style={{ color: C.muted }}>
                  Los íconos son dibujos de referencia — aquí irán las fotos reales cuando el negocio las comparta.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── EL SECTOR ────────────────────────────────────── */}
      <section id="sector" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.noche, color: '#F5EFE0' }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya light>El sector</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02] uppercase max-w-[16ch]" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Lo que hay subiendo el valle
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.mutedClaro }}>
              Vilches Alto es la puerta a la Reserva Nacional Altos de Lircay. El café queda en la ruta de ida — y en la de vuelta, cuando toca celebrar la cumbre.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-px rounded-2xl overflow-hidden" style={{ backgroundColor: C.lineClaro }}>
            {CERCA.map((l, i) => (
              <Reveal key={l.n} delay={i * 60}>
                <div className="flex items-center justify-between gap-4 px-5 py-4" style={{ backgroundColor: C.noche }}>
                  <div className="flex items-center gap-4 min-w-0">
                    <span className={`${mono.className} text-[12px] w-8 shrink-0`} style={{ color: C.oro }}>{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-bold truncate" style={{ fontFamily: 'var(--f-display), sans-serif', letterSpacing: '0.03em' }}>{l.n}</p>
                  </div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] shrink-0`} style={{ color: C.mutedClaro }}>{l.nota}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140}>
            <div className="mt-8 rounded-2xl p-6 grid gap-6 md:grid-cols-[1fr_auto] items-center" style={{ backgroundColor: 'rgba(239,231,214,0.07)', border: `1px solid ${C.lineClaro}` }}>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.oro }}>Horario reportado</p>
                <p className="mt-2 text-2xl" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.horario}</p>
                <p className="mt-2 text-[14px] max-w-sm" style={{ color: C.mutedClaro }}>{BIZ.horarioNota}</p>
              </div>
              <a href={`tel:${BIZ.phoneTel}`} className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold w-fit" style={{ backgroundColor: C.oro, color: C.tinta }}>
                Confirmar por teléfono
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────── */}
      <section id="llegar" className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <Raya>Cómo llegar</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.02] uppercase" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Subiendo a Vilches Alto
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              El café está en {BIZ.sector}, comuna de {BIZ.comuna}, en la ruta que sube a la reserva desde San Clemente — unos 65 km desde Talca.
            </p>
            <dl className="mt-7 space-y-4">
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>Teléfono</dt>
                <dd className="mt-1"><a href={`tel:${BIZ.phoneTel}`} className="text-lg font-bold underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.rojo }}>Correo</dt>
                <dd className="mt-1"><a href={`mailto:${BIZ.email}`} className="text-lg font-bold underline underline-offset-4 break-all">{BIZ.email}</a></dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden" style={{ border: `2px solid ${C.tinta}`, boxShadow: `6px 6px 0 ${C.tinta}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.sector}, ${BIZ.comuna}`} className="block w-full h-[300px]" />
              <div className="px-5 py-4" style={{ backgroundColor: C.papelSoft }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.rojo }}>Sector</p>
                <p className="mt-1 text-[15px] font-bold">{BIZ.sector} · {BIZ.comuna}, {BIZ.region}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} mt-1 inline-block text-[12px] underline underline-offset-4`} style={{ color: C.muted }}>
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="px-5 md:px-10 pt-8 pb-24 md:pb-10" style={{ backgroundColor: C.noche, borderTop: `1px solid ${C.lineClaro}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-[16px] uppercase tracking-wide" style={{ color: '#F5EFE0', fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] max-w-md`} style={{ color: C.mutedClaro }}>
              {BIZ.sector} · {BIZ.comuna} · Datos: directorio turístico de la Municipalidad de San Clemente. Visuales: bosquejos.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-[13px]`} style={{ color: '#F5EFE0' }}>{BIZ.phoneDisplay}</a>
            <a href={`mailto:${BIZ.email}`} className={`${mono.className} text-[13px] underline underline-offset-4`} style={{ color: C.mutedClaro }}>Correo</a>
          </div>
        </div>
      </footer>

      <CallFab href={`tel:${BIZ.phoneTel}`} label={`Llamar a ${BIZ.name}`} bg={C.rojo} fg="#F5EFE0" />
    </main>
  )
}
