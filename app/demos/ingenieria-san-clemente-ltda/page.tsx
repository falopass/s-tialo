/**
 * app/demos/ingenieria-san-clemente-ltda/page.tsx
 *
 * Concepto: «diagrama unifilar» — la página se lee como el esquema
 * eléctrico de una oficina técnica: tablero oscuro, trazas ámbar,
 * nodos y etiquetas mono. La empresa no tiene ficha pública: la
 * sección de datos declara qué está confirmado y qué no, la oferta
 * se declara de muestra y todas las escenas van marcadas «bosquejo».
 * Sin teléfono ni WhatsApp publicados → el CTA es Google Maps.
 */

import localFont from 'next/font/local'
import Image from 'next/image'
import { BlitzNav, Reveal } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { SITE, whatsappLink } from '../../../lib/config'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, SOURCES } from './content'

export const metadata = demoMetadata({
  slug: 'ingenieria-san-clemente-ltda',
  title: `${BIZ.name} — Demo`,
  description: `${BIZ.legalName} — ${BIZ.rubro} en ${BIZ.city}, ${BIZ.region}.`,
  image: `${IMG}/bosquejo-lineas.webp`,
})

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})
const mono = localFont({ src: '../../fonts/ibm-plex-mono/normal-400.woff2' })

const C = {
  tablero: '#131820',
  tableroDeep: '#0D1117',
  ambar: '#F0A500',
  papel: '#EDEAE0',
  tinta: '#1A1E24',
  marfil: '#ECE9DF',
  mutedDark: 'rgba(236,233,223,0.62)',
  mutedLight: 'rgba(26,30,36,0.66)',
  lineDark: 'rgba(240,165,0,0.28)',
  lineLight: 'rgba(26,30,36,0.16)',
} as const

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0A500]'

const NAV_LINKS = [
  { href: '#ficha', label: 'La ficha' },
  { href: '#capacidades', label: 'Capacidades' },
  { href: '#escenas', label: 'Escenas' },
  { href: '#comuna', label: 'La comuna' },
]

// Oferta de muestra acorde al giro — pendiente de confirmar con la empresa.
const CAPACIDADES = [
  { n: 'N1', name: 'Gestión y evaluación de proyectos', desc: 'Planificación, indicadores y monitoreo de obras.' },
  { n: 'N2', name: 'Montajes electromecánicos', desc: 'Montaje y mantenimiento de instalaciones industriales.' },
  { n: 'N3', name: 'Líneas de transmisión', desc: 'Apoyo en proyectos de líneas y obras eléctricas.' },
  { n: 'N4', name: 'Asesoría de terreno', desc: 'Revisión en faena y coordinación técnica de la obra.' },
]

const FICHA: [string, string, boolean][] = [
  ['Razón social', BIZ.legalName, true],
  ['Rubro', `${BIZ.rubro} (muestra)`, false],
  ['Comuna', `${BIZ.city}, ${BIZ.region}`, true],
  ['Teléfono', 'No publica', true],
  ['Sitio web', 'No publica — esta maqueta muestra cómo podría verse', true],
  ['Ficha en Google Maps', 'Sin ficha con ese nombre', true],
  ['Reseñas', 'Sin reseñas públicas', true],
]

const ESCENAS = [
  { src: `${IMG}/bosquejo-lineas.webp`, alt: 'Bosquejo: torres de alta tensión cruzando terrenos agrícolas con la cordillera al fondo', cap: 'Líneas de transmisión sobre el valle.' },
  { src: `${IMG}/bosquejo-montaje.webp`, alt: 'Bosquejo: dos electricistas armando un tablero eléctrico industrial con cables de colores', cap: 'Montaje electromecánico en taller.' },
  { src: `${IMG}/bosquejo-terreno.webp`, alt: 'Bosquejo: equipo de obra revisando planos sobre el capó de una camioneta en terreno rural', cap: 'Revisión de planos en terreno.' },
]

function Tag({ children, dark = true }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`${mono.className} inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] mb-5`} style={{ color: dark ? C.ambar : '#8A5A00' }}>
      <span aria-hidden="true" className="inline-block w-6 h-px" style={{ backgroundColor: 'currentColor' }} />
      {children}
    </p>
  )
}

// Esquema unifilar decorativo: barra principal, interruptores y salidas.
function Unifilar({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 1200 420" className={className} fill="none" aria-hidden="true">
      <g stroke={C.ambar} strokeWidth="2" opacity="0.5">
        <path d="M60 40 H1140" />
        {[140, 340, 540, 740, 940, 1060].map((x, i) => (
          <g key={x}>
            <path d={`M${x} 40 V${i % 2 ? 130 : 100}`} />
            <rect x={x - 11} y={i % 2 ? 130 : 100} width="22" height="22" />
            <path d={`M${x} ${(i % 2 ? 152 : 122)} V300`} strokeDasharray="7 6" />
            <circle cx={x} cy="300" r="5" />
          </g>
        ))}
        <path d="M60 380 H1140" strokeDasharray="4 8" />
      </g>
      <g fill={C.ambar} opacity="0.75" fontSize="15" fontFamily="monospace">
        <text x="140" y="370">L1</text>
        <text x="340" y="370">L2</text>
        <text x="540" y="370">L3</text>
        <text x="730" y="370">OBRA</text>
        <text x="920" y="370">RED</text>
        <text x="1030" y="370">PTO.</text>
      </g>
    </svg>
  )
}

export default function IngenieriaSanClementePage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.tablero, color: C.marfil }}>
      <style>{`html { scroll-behavior: auto }`}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={MAPS_URL}
        ctaLabel="Ver en Maps"
        fontClass={mono.className}
        theme={{
          over: 'dark',
          bar: 'rgba(13,17,23,0.94)',
          ink: '#ECE9DF',
          line: 'rgba(240,165,0,0.28)',
          btnBg: '#F0A500',
          btnInk: '#0D1117',
        }}
      />

      {/* ── Hero: tablero con esquema unifilar ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.tableroDeep }}>
        <Unifilar className="absolute inset-x-0 top-16 w-full h-auto opacity-70 pointer-events-none select-none" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-14 md:pb-20">
          <Reveal>
            <Tag>Esquema N° SC-01 · revisión A</Tag>
            <h1 className={`${display.className} font-semibold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2.6rem,9vw,6.4rem)]`}>
              Ingeniería
              <br />
              <span style={{ color: C.ambar }}>San Clemente</span>
            </h1>
            <p className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] mt-5`} style={{ color: C.mutedDark }}>
              {BIZ.legalName} · {BIZ.rubro}
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-7 max-w-xl" style={{ color: C.mutedDark }}>
              Una oficina de proyectos en la comuna de {BIZ.city}: de la idea
              al plano, del plano a la obra.
            </p>
            <div
              className={`${mono.className} inline-flex items-center gap-2.5 mt-8 px-4 py-2.5 border text-[11px] uppercase tracking-[0.16em]`}
              style={{ borderColor: C.lineDark, color: C.ambar, backgroundColor: 'rgba(240,165,0,0.07)' }}
            >
              <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: C.ambar }} />
              Sin ficha pública en Google Maps
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="#ficha"
                className={`${focusRing} inline-flex items-center justify-center px-6 py-3 text-base font-semibold`}
                style={{ backgroundColor: C.ambar, color: C.tableroDeep }}
              >
                Ver la ficha
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2`}
                style={{ borderColor: C.ambar, color: C.ambar }}
              >
                La comuna en Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La ficha: lo confirmado y lo que no ── */}
      <section id="ficha" className="scroll-mt-20" style={{ backgroundColor: C.papel, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
              <div className="min-w-0">
                <Tag dark={false}>Ficha técnica · datos públicos</Tag>
                <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98] mb-5`}>
                  Lo que se puede decir con certeza
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.mutedLight }}>
                  La empresa no publica ficha en Maps ni sitio web. Esta
                  tabla muestra lo confirmado en registros públicos —
                  y lo que falta por confirmar.
                </p>
                <details className={`${mono.className} text-[11px] leading-relaxed`} style={{ color: C.mutedLight }}>
                  <summary className="uppercase tracking-[0.16em] cursor-pointer font-semibold tap-44v" style={{ color: '#8A5A00' }}>
                    Fuentes revisadas
                  </summary>
                  <ul className="mt-3 space-y-1.5 list-none">
                    {SOURCES.map((s) => (
                      <li key={s} className="border-l-2 pl-3" style={{ borderColor: C.ambar }}>{s}</li>
                    ))}
                  </ul>
                </details>
              </div>
              <div className="border-2 min-w-0" style={{ borderColor: C.tinta }}>
                <div className={`${mono.className} px-4 py-2.5 text-[11px] uppercase tracking-[0.18em] border-b-2 flex justify-between`} style={{ borderColor: C.tinta, backgroundColor: 'rgba(240,165,0,0.12)' }}>
                  <span>Dato</span>
                  <span>Estado</span>
                </div>
                <dl>
                  {FICHA.map(([k, v, ok], i) => (
                    <div key={k} className={`grid grid-cols-[120px_1fr_auto] gap-3 items-baseline px-4 py-3.5 ${i > 0 ? 'border-t' : ''}`} style={{ borderColor: C.lineLight }}>
                      <dt className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em]`} style={{ color: C.mutedLight }}>{k}</dt>
                      <dd className="text-sm md:text-base font-medium leading-snug">{v}</dd>
                      <dd className={`${mono.className} text-[10px] uppercase tracking-[0.1em]`} style={{ color: ok ? '#3F6212' : '#8A5A00' }}>
                        {ok ? 'OK' : 'MUESTRA'}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Capacidades: salidas del esquema ── */}
      <section id="capacidades" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 mb-10 md:mb-12">
            <div>
              <Tag>Salidas del tablero</Tag>
              <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98]`}>
                Capacidades
              </h2>
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] max-w-xs`} style={{ color: C.mutedDark }}>
              Oferta de muestra — la real se confirma con la empresa
            </p>
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-7">
          {CAPACIDADES.map((cap, i) => (
            <Reveal key={cap.n} delay={i * 70}>
              <article className="relative border p-6 md:p-7 pl-16 md:pl-20 h-full" style={{ borderColor: C.lineDark, backgroundColor: 'rgba(236,233,223,0.03)' }}>
                <span
                  aria-hidden="true"
                  className={`${mono.className} absolute left-0 top-0 bottom-0 w-11 md:w-14 flex items-center justify-center border-r text-sm tracking-[0.1em]`}
                  style={{ borderColor: C.lineDark, color: C.ambar }}
                >
                  {cap.n}
                </span>
                <h3 className={`${display.className} font-medium uppercase text-xl md:text-2xl leading-tight mb-2 tracking-[0.04em]`}>{cap.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.mutedDark }}>{cap.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Escenas: bosquejos marcados ── */}
      <section id="escenas" className="scroll-mt-20 border-y" style={{ borderColor: C.lineDark, backgroundColor: C.tableroDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="mb-10 md:mb-12">
              <Tag>Croquis de obra</Tag>
              <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98] mb-4`}>
                Escenas de muestra
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-2xl" style={{ color: C.mutedDark }}>
                Sin fotos reales publicadas, cada imagen es un bosquejo
                generado y va marcada hasta que la empresa entregue
                material propio.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7">
            {ESCENAS.map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className="relative border" style={{ borderColor: C.lineDark }}>
                  <Image src={f.src} alt={f.alt} width={1200} height={800} className="w-full h-auto block" />
                  <span
                    className={`${mono.className} absolute top-2.5 left-2.5 px-2.5 py-1.5 text-[10px] uppercase tracking-[0.18em] font-bold`}
                    style={{ backgroundColor: C.ambar, color: C.tableroDeep }}
                  >
                    Bosquejo
                  </span>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.12em] px-3.5 py-3`} style={{ color: C.mutedDark }}>
                    {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La comuna: mapa ── */}
      <section id="comuna" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <div>
              <Tag>Emplazamiento</Tag>
              <h2 className={`${display.className} font-semibold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}>
                {BIZ.city}, {BIZ.region}
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutedDark }}>
                La ficha no publica una calle: el nombre de la empresa dice
                dónde trabaja — la comuna de {BIZ.city}, valle del Maule,
                entre viñas, canal y cordillera.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${focusRing} inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2`}
                style={{ borderColor: C.ambar, color: C.ambar }}
              >
                Abrir San Clemente en Maps
              </a>
            </div>
            <div className="border" style={{ borderColor: C.lineDark }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.city}, ${BIZ.region}`} className="w-full aspect-[4/3]" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tableroDeep, borderTop: `1px solid ${C.lineDark}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-5">
            <div>
              <p className={`${display.className} font-semibold uppercase tracking-[0.14em] text-lg`} style={{ color: C.ambar }}>
                {BIZ.legalName}
              </p>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-1.5`} style={{ color: C.mutedDark }}>
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
            <nav aria-label="Secciones del demo" className={`${mono.className} flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.14em]`}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className={`${focusRing} hover:underline underline-offset-4 tap-44`} style={{ color: C.mutedDark }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="text-[11px] leading-relaxed pt-4 border-t" style={{ color: C.mutedDark, borderColor: 'rgba(236,233,223,0.12)' }}>
            Mockup preparado por {SITE.name} para {BIZ.legalName} — empresa sin web ni ficha pública en Maps al 29-09-2026.
            Sitios como este desde $79.990 —{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`${focusRing} underline underline-offset-2 font-semibold tap-44`} style={{ color: C.ambar }}>
              hablar con Sitiazo
            </a>.
          </p>
        </div>
      </footer>
    </div>
  )
}
