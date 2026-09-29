import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, FLECHAS, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }, { path: '../../fonts/space-mono/normal-700.woff2', weight: '700' }],
  variable: '--f-mono',
})

/**
 * Dirección de arte: «el poste de la ruta». El Restoran El Encuentro es
 * la parada de la ruta internacional a Pehuenche — el negocio solo existe
 * en el directorio de la Municipalidad de San Clemente, así que el demo
 * se construye como la señalética que lo anuncia: letreros de madera
 * pintada, flechas de poste, hitos kilométricos. Cada escena es dibujo
 * marcado visiblemente como bosquejo (el negocio no publica fotos).
 */
const C = {
  cielo: '#F0E2C2',
  papel: '#F7EDD8',
  tinta: '#2B1D10',
  teja: '#A83C1E',
  tejaDeep: '#7E2B12',
  bosque: '#26462E',
  bosqueDeep: '#16291B',
  madera: '#7A4E26',
  mostaza: '#D29A2E',
  rio: '#37676F',
  muted: 'rgba(43,29,16,0.74)',
  mutedCrema: 'rgba(247,237,216,0.78)',
  line: 'rgba(43,29,16,0.2)',
  lineCrema: 'rgba(247,237,216,0.24)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'restoran-el-encuentro',
  title: 'Restoran El Encuentro — la parada de la ruta a Pehuenche',
  description: 'Restoran El Encuentro en Armerillo, San Clemente: el restorán del camino internacional al Paso Pehuenche, a la orilla del río Maule. Ilustraciones a modo de bosquejo.',
})

const NAV_LINKS = [
  { label: 'Las flechas', href: '#poste' },
  { label: 'La parada', href: '#parada' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Marca visible «bosquejo» para cada dibujo (el negocio no publica fotos). */
function BosquejoTag({ className = '' }: { className?: string }) {
  return (
    <span
      className={`${mono.className} inline-block text-[10px] uppercase tracking-[0.2em] px-2 py-0.5 rounded-sm ${className}`}
      style={{ backgroundColor: C.teja, color: C.papel, transform: 'rotate(-2deg)' }}
    >
      bosquejo
    </span>
  )
}

/** Hito kilométrico de carretera: placa blanca con borde negro. */
function Hito({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className={`${mono.className} inline-flex items-center rounded-[4px] px-2 py-1 text-[11px] font-bold tracking-wider bg-white`}
      style={{ color: C.tinta, border: `2px solid ${C.tinta}`, boxShadow: `2px 2px 0 ${C.tinta}` }}
    >
      {children}
    </span>
  )
}

function Raya({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] flex items-center gap-3`}
      style={{ color: light ? C.mostaza : C.teja }}
    >
      <span aria-hidden="true" className="inline-block w-8 h-[2px]" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

/** Escena pintada: la ruta 115 serpeando entre cerros, el río Maule, el poste y la casa del restorán. */
function EscenaRuta() {
  return (
    <svg viewBox="0 0 390 250" preserveAspectRatio="xMidYMid slice" className="block w-full h-full" aria-hidden="true">
      {/* cerros */}
      <path d="M0,118 L70,58 L150,110 L235,48 L330,105 L390,72 L390,250 L0,250 Z" fill={C.bosque} opacity="0.28" />
      <path d="M0,142 L95,84 L185,132 L285,74 L390,126 L390,250 L0,250 Z" fill={C.bosque} opacity="0.5" />
      {/* río Maule cruzando abajo */}
      <path d="M0,214 Q90,202 170,214 T390,206 L390,250 L0,250 Z" fill={C.rio} opacity="0.85" />
      <path d="M30,224 q40,-6 80,0 M230,220 q40,-6 80,0" stroke={C.papel} strokeWidth="2" fill="none" opacity="0.55" strokeLinecap="round" />
      {/* ruta 115 */}
      <path d="M-20,250 C60,196 120,206 180,178 C240,150 250,128 320,128 L340,128" fill="none" stroke={C.tinta} strokeWidth="18" strokeLinecap="round" opacity="0.9" />
      <path d="M-20,250 C60,196 120,206 180,178 C240,150 250,128 320,128 L340,128" fill="none" stroke={C.papel} strokeWidth="2.5" strokeDasharray="10 12" />
      {/* casa del restorán con humo */}
      <g transform="translate(296,84)">
        <rect x="0" y="22" width="52" height="30" fill={C.madera} stroke={C.tinta} strokeWidth="2.5" />
        <path d="M-5,22 L26,4 L57,22 Z" fill={C.teja} stroke={C.tinta} strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="20" y="32" width="12" height="20" fill={C.tinta} />
        <rect x="40" y="-6" width="7" height="12" fill={C.tinta} />
        <path d="M43,-10 q5,-8 0,-14 q-5,-6 0,-14" stroke={C.muted} strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* poste de señales */}
      <g transform="translate(58,128)">
        <rect x="-4" y="0" width="8" height="96" fill={C.madera} stroke={C.tinta} strokeWidth="2" />
        <g>
          <path d="M-4,4 L60,4 L72,14 L60,24 L-4,24 Z" fill={C.papel} stroke={C.tinta} strokeWidth="2" />
          <text x="8" y="18" fontSize="10" fontWeight="700" fill={C.tinta} fontFamily="monospace">Armerillo</text>
        </g>
        <g>
          <path d="M4,34 L-66,34 L-78,44 L-66,54 L4,54 Z" fill={C.teja} stroke={C.tinta} strokeWidth="2" />
          <text x="-72" y="48" fontSize="10" fontWeight="700" fill={C.papel} fontFamily="monospace">Pehuenche</text>
        </g>
        <g>
          <path d="M-4,64 L52,64 L64,74 L52,84 L-4,84 Z" fill={C.papel} stroke={C.tinta} strokeWidth="2" />
          <text x="6" y="78" fontSize="9" fontWeight="700" fill={C.teja} fontFamily="monospace">S. Clemente</text>
        </g>
      </g>
      {/* sol */}
      <circle cx="330" cy="34" r="18" fill={C.mostaza} stroke={C.tinta} strokeWidth="2.5" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <line key={a} x1="330" y1="10" x2="330" y2="4" stroke={C.tinta} strokeWidth="2" transform={`rotate(${a} 330 34)`} />
      ))}
    </svg>
  )
}

/** Escena pintada: la mesa de la parada — plato humeante, cubiertos, pocillo. */
function EscenaMesa() {
  const s = { stroke: C.papel, strokeWidth: 2.5, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  return (
    <svg viewBox="0 0 340 220" className="block w-full h-full" aria-hidden="true">
      {/* mantel a cuadros sugerido */}
      {Array.from({ length: 6 }, (_, i) => (
        <line key={`v${i}`} x1={i * 68} y1="0" x2={i * 68} y2="220" stroke={C.papel} strokeWidth="1.4" opacity="0.12" />
      ))}
      {Array.from({ length: 4 }, (_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 55 + 12} x2="340" y2={i * 55 + 12} stroke={C.papel} strokeWidth="1.4" opacity="0.12" />
      ))}
      {/* plato */}
      <ellipse cx="170" cy="140" rx="86" ry="40" {...s} strokeWidth="3" />
      <ellipse cx="170" cy="136" rx="58" ry="26" {...s} strokeWidth="2" />
      {/* vapor del plato */}
      <path d="M140,92 q-7,-10 0,-20 q7,-10 0,-22" {...s} stroke={C.mostaza} strokeWidth="3" />
      <path d="M170,86 q-7,-10 0,-20 q7,-10 0,-22" {...s} stroke={C.mostaza} strokeWidth="3" />
      <path d="M200,92 q-7,-10 0,-20 q7,-10 0,-22" {...s} stroke={C.mostaza} strokeWidth="3" />
      {/* cubiertos */}
      <g {...s}>
        <path d="M60,110 L60,178 M52,110 v22 q8,10 16,0 v-22" />
        <path d="M280,110 L280,178 M280,110 q-14,24 0,34" />
      </g>
      {/* pocillo */}
      <g transform="translate(262,54)">
        <path d="M0,14 h34 v12 a10,10 0 0 1 -10,10 h-14 a10,10 0 0 1 -10,-10 z" {...s} />
        <path d="M34,16 q12,1 0,12" {...s} />
      </g>
    </svg>
  )
}

export default function Page() {
  return (
    <main className={`${display.variable} ${body.variable} ${mono.variable}`} style={{ backgroundColor: C.cielo, color: C.tinta, fontFamily: 'var(--f-body), sans-serif' }}>
      <BlitzNav
        name={<span style={{ fontFamily: 'var(--f-display), sans-serif', letterSpacing: '0.04em' }}>El Encuentro · Armerillo</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{ over: 'light', bar: C.cielo, ink: C.tinta, line: C.line, btnBg: C.teja, btnInk: C.papel }}
      />

      {/* ── HERO cartel ──────────────────────────────────── */}
      <section id="inicio" className="relative pt-[76px] overflow-hidden">
        <div className="px-5 md:px-10 pt-8 md:pt-12 max-w-6xl mx-auto">
          <Reveal>
            <div className="relative rounded-xl px-5 py-7 md:px-10 md:py-10 text-center" style={{ backgroundColor: C.papel, border: `3px solid ${C.tinta}`, boxShadow: `8px 8px 0 ${C.tinta}` }}>
              {/* clavos del letrero */}
              {['left-3 top-3', 'right-3 top-3', 'left-3 bottom-3', 'right-3 bottom-3'].map((pos) => (
                <span key={pos} aria-hidden="true" className={`absolute ${pos} w-2.5 h-2.5 rounded-full`} style={{ backgroundColor: C.tinta }} />
              ))}
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.teja }}>
                Restorán · Armerillo · San Clemente
              </p>
              <h1
                className="mt-3 text-[13vw] sm:text-6xl md:text-7xl leading-[0.95] uppercase"
                style={{ fontFamily: 'var(--f-display), sans-serif' }}
              >
                La parada de la <span style={{ color: C.teja }}>ruta a Pehuenche</span>
              </h1>
              <p className="mt-4 text-base md:text-lg max-w-xl mx-auto leading-relaxed" style={{ color: C.muted }}>
                {BIZ.name} atiende en {BIZ.sector}, el caserío de la ribera del río Maule en el camino internacional — restorán inscrito en el directorio turístico de la Municipalidad de San Clemente.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold" style={{ backgroundColor: C.teja, color: C.papel }}>
                  WhatsApp · {BIZ.phoneDisplay}
                </a>
                <a href={`tel:${BIZ.phoneTel}`} className="inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold border-2" style={{ borderColor: C.tinta, color: C.tinta }}>
                  Llamar
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mt-8 rounded-xl overflow-hidden" style={{ backgroundColor: C.cielo, border: `3px solid ${C.tinta}`, boxShadow: `8px 8px 0 ${C.tinta}` }}>
              <div className="aspect-[390/250] md:aspect-[2.6/1]">
                <EscenaRuta />
              </div>
              <BosquejoTag className="absolute right-3 top-3" />
              <div className="absolute left-3 bottom-3"><Hito>km 40</Hito></div>
            </div>
            <p className={`${mono.className} mt-3 text-[11px] tracking-[0.06em]`} style={{ color: C.muted }}>
              Dibujo de referencia: el negocio no publica fotos oficiales; este demo usa solo escenas marcadas como bosquejo.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── LAS FLECHAS DEL POSTE ────────────────────────── */}
      <section id="poste" className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <Raya>Las flechas del poste</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.0] uppercase max-w-[16ch]" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Todo lo que pasa por este kilómetro
            </h2>
            <p className="mt-3 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Armerillo es chico — tres kilómetros de caserío a la orilla del camino — pero cada flecha de su poste apunta a algo grande.
            </p>
          </Reveal>

          <div className="mt-9 relative pl-6 md:pl-10">
            {/* el poste */}
            <span aria-hidden="true" className="absolute left-0 top-0 bottom-0 w-[10px] rounded-full" style={{ backgroundColor: C.madera, boxShadow: `2px 0 0 ${C.tinta}` }} />
            <div className="space-y-4">
              {FLECHAS.map((f, i) => (
                <Reveal key={f.n} delay={i * 60}>
                  <div className="flex items-stretch">
                    <div
                      className="flex-1 min-w-0 px-5 py-4 md:px-7 md:py-5"
                      style={{ backgroundColor: C.papel, border: `2.5px solid ${C.tinta}` }}
                    >
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="text-xl md:text-2xl uppercase tracking-wide" style={{ fontFamily: 'var(--f-display), sans-serif' }}>{f.n}</h3>
                        <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.teja }}>{f.dir} →</p>
                      </div>
                      <p className="mt-1.5 text-[14px] leading-relaxed max-w-2xl" style={{ color: C.muted }}>{f.d}</p>
                    </div>
                    <span aria-hidden="true" className="w-[22px] shrink-0 self-stretch" style={{ backgroundColor: C.teja, clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LA PARADA ────────────────────────────────────── */}
      <section id="parada" className="px-5 md:px-10 py-14 md:py-20" style={{ backgroundColor: C.bosqueDeep, color: C.papel }}>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-center">
          <Reveal>
            <Raya light>La parada</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.0] uppercase max-w-[16ch]" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Aquí se para a comer en Armerillo
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.mutedCrema }}>
              Lo que está confirmado: es el restorán del sector, inscrito en el directorio turístico municipal, con su teléfono directo. Lo demás — la carta, el salón, el equipo — se completa cuando el negocio comparta sus fotos.
            </p>
            <dl className="mt-7 space-y-4">
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.mostaza }}>Teléfono y WhatsApp</dt>
                <dd className="mt-1"><a href={`tel:${BIZ.phoneTel}`} className="text-lg font-bold underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.mostaza }}>Sector</dt>
                <dd className="mt-1 text-lg font-bold">{BIZ.sector} · {BIZ.comuna}, {BIZ.region}</dd>
              </div>
            </dl>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center justify-center h-12 px-6 rounded-full text-[15px] font-bold" style={{ backgroundColor: C.mostaza, color: C.tinta }}>
              Escribir al restorán
            </a>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative rounded-xl overflow-hidden" style={{ border: `2.5px solid ${C.lineCrema}`, backgroundColor: 'rgba(247,237,216,0.06)' }}>
              <div className="aspect-[340/220]">
                <EscenaMesa />
              </div>
              <BosquejoTag className="absolute right-3 top-3" />
              <div className="px-5 py-4" style={{ borderTop: `1px solid ${C.lineCrema}` }}>
                <p className={`${mono.className} text-[11px] leading-relaxed`} style={{ color: C.mutedCrema }}>
                  Bosquejo de la mesa — aquí va la foto real del salón cuando el negocio la comparta.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────── */}
      <section id="llegar" className="px-5 md:px-10 py-14 md:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <Raya>Cómo llegar</Raya>
            <h2 className="mt-3 text-4xl md:text-5xl leading-[1.0] uppercase" style={{ fontFamily: 'var(--f-display), sans-serif' }}>
              Subiendo la ruta 115
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Desde San Clemente se toma la ruta internacional hacia el Paso Pehuenche: unos 40 km después, a la ribera norte del río Maule, aparece el caserío de Armerillo — y el letrero del Encuentro.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Hito>Talca → 70 km</Hito>
              <Hito>S. Clemente → 40 km</Hito>
              <Hito>Pehuenche → cordillera</Hito>
            </div>
            <dl className="mt-7 space-y-4">
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.teja }}>Teléfono</dt>
                <dd className="mt-1"><a href={`tel:${BIZ.phoneTel}`} className="text-lg font-bold underline underline-offset-4">{BIZ.phoneDisplay}</a></dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.teja }}>Ruta</dt>
                <dd className="mt-1 text-[15px] font-bold">{BIZ.ruta}</dd>
              </div>
            </dl>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden" style={{ border: `3px solid ${C.tinta}`, boxShadow: `8px 8px 0 ${C.tinta}` }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.sector}, ${BIZ.comuna}`} className="block w-full h-[300px]" />
              <div className="px-5 py-4" style={{ backgroundColor: C.papel }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.teja }}>Sector</p>
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
      <footer className="px-5 md:px-10 pt-8 pb-24 md:pb-10" style={{ backgroundColor: C.bosqueDeep, borderTop: `1px solid ${C.lineCrema}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-x-8 gap-y-4">
          <div>
            <p className="text-[16px] uppercase tracking-wide" style={{ color: C.papel, fontFamily: 'var(--f-display), sans-serif' }}>{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] max-w-md`} style={{ color: C.mutedCrema }}>
              {BIZ.sector} · {BIZ.comuna} · Datos: directorio turístico de la Municipalidad de San Clemente. Visuales: bosquejos.
            </p>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-[13px]`} style={{ color: C.papel }}>{BIZ.phoneDisplay}</a>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[13px] underline underline-offset-4`} style={{ color: C.mutedCrema }}>WhatsApp</a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
