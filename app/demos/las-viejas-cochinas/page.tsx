import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_GRUPO, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Syne({ subsets: ['latin'], weight: ['600', '700', '800'] })
const body = Inter({ subsets: ['latin'], weight: ['400', '500', '600'] })

/**
 * Paleta del demo: rojo #C1272D, gris flota, blanco y naranja señal.
 * Layout de panel de datos: métricas arriba, tarjetas de borde fino y
 * tablas de servicio.
 */
const C = {
  white: '#FFFFFF',
  bg: '#F5F5F4',
  red: '#C1272D',
  redDeep: '#8E1A1F',
  fleet: '#4A4E52',
  ink: '#1D1F21',
  muted: '#62666B',
  signal: '#F28C28',
  line: 'rgba(74,78,82,0.18)',
}

const fmt = (n: number) => new Intl.NumberFormat('es-CL').format(n)

export const metadata: Metadata = {
  title: 'Las Viejas Cochinas — Restaurante en Talca',
  description:
    'Restaurante en Rivera poniente - Av. Río Claro, Talca. Cocina chilena, almuerzos y grupos. Consultas y reservas por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'Cocina', href: '#cocina' },
  { label: 'Carta', href: '#carta' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const METRICS = [
  { value: fmt(BIZ.reviews), label: 'reseñas en Google Maps', accent: true },
  { value: fmt(BIZ.followers), label: 'seguidores en Facebook' },
  { value: 'Talca', label: 'Av. Río Claro, ribera poniente' },
  { value: 'WhatsApp', label: 'consultas y reservas directas' },
]

const SERVICIOS = [
  {
    code: '01',
    src: `${IMG}/detalle1.webp`,
    alt: 'Cazuela de vacuno con zapallo, choclo y porotos verdes, junto a una panera',
    name: 'Almuerzo casero',
    desc: 'Plato de fondo contundente, caliente y a la hora. La cocina de siempre, servida sin vueltas.',
    rows: [
      ['Formato', 'En el local'],
      ['Ejemplo', 'Cazuela de vacuno'],
    ],
  },
  {
    code: '02',
    src: `${IMG}/detalle3.webp`,
    alt: 'Pastel de choclo gratinado en greda con ensalada chilena al lado',
    name: 'Platos de temporada',
    desc: 'Lo que el Maule da en cada época, en greda y al horno. La carta cambia con la temporada.',
    rows: [
      ['Formato', 'En el local · para llevar'],
      ['Ejemplo', 'Pastel de choclo'],
    ],
  },
  {
    code: '03',
    src: `${IMG}/detalle2.webp`,
    alt: 'Mesón de madera con loza apilada, jarro de agua y flores, con el comedor al fondo',
    name: 'Grupos y celebraciones',
    desc: 'Mesas armadas para la familia, la pega o el cumpleaños. Se coordina todo por WhatsApp.',
    rows: [
      ['Formato', 'Reserva previa'],
      ['Ejemplo', 'Almuerzo de grupo'],
    ],
  },
]

const VALORAN = [
  { k: 'Porciones', v: 'Platos generosos, de los que se terminan con pan.' },
  { k: 'Sabor casero', v: 'Recetas chilenas hechas como en la casa.' },
  { k: 'Atención', v: 'Trato directo y la mesa servida a tiempo.' },
]

const CARTA = [
  { plato: 'Cazuela de vacuno', tipo: 'Fondo', formato: 'Local' },
  { plato: 'Pastel de choclo', tipo: 'Temporada', formato: 'Local · llevar' },
  { plato: 'Ensalada chilena', tipo: 'Acompañamiento', formato: 'Local · llevar' },
  { plato: 'Almuerzo de grupo', tipo: 'Reserva', formato: 'Local' },
  { plato: 'Postre de la casa', tipo: 'Postre', formato: 'Local' },
]

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-3 flex items-center gap-2"
      style={{ color: light ? 'rgba(255,255,255,0.75)' : C.muted }}
    >
      <span className="inline-block w-2 h-2" style={{ backgroundColor: C.signal }} aria-hidden="true" />
      {children}
    </p>
  )
}

function Sample({ children = 'Muestra' }: { children?: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.16em] px-2 py-1 rounded border"
      style={{ color: C.signal, borderColor: 'rgba(242,140,40,0.45)', backgroundColor: 'rgba(242,140,40,0.08)' }}
    >
      {children}
    </span>
  )
}

export default function LasViejasCochinasPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: C.white,
        }}
      />

      {/* ── Hero a sangre ── */}
      <section id="inicio" className="relative min-h-[88svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.fleet }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Comedor del restaurante con mesas de madera, manteles blancos y piso de baldosa bañado de sol"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(29,31,33,0.55) 0%, rgba(29,31,33,0.15) 40%, rgba(29,31,33,0.88) 100%)' }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-36 pb-28 md:pb-36">
          <Reveal>
            <Label light>{BIZ.rubro} · {BIZ.city}, Maule</Label>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.5rem,8.5vw,5.8rem)] mb-6 max-w-4xl`}
              style={{ color: C.white }}
            >
              Cocina chilena,
              <br />
              <span style={{ color: C.signal }}>servida a la hora</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.86)' }}>
              A orillas del río Claro, en Talca. Platos caseros, mesas para
              la familia y reservas que se coordinan directo por WhatsApp.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-semibold px-6 py-3.5 rounded-md transition-colors hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                style={{ backgroundColor: C.red, color: C.white }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className="text-sm md:text-base font-semibold px-6 py-3.5 rounded-md border transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: C.white }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Fila de métricas ── */}
      <section aria-label="Datos del restaurante" className="relative z-10 max-w-6xl mx-auto px-5 md:px-8 -mt-16 md:-mt-20">
        <Reveal>
          <dl
            className="grid grid-cols-2 lg:grid-cols-4 rounded-lg border overflow-hidden shadow-[0_18px_40px_rgba(29,31,33,0.12)]"
            style={{ backgroundColor: C.white, borderColor: C.line }}
          >
            {METRICS.map((m, i) => (
              <div
                key={m.label}
                className={`p-5 md:p-6 ${i % 2 === 1 ? 'border-l' : ''} ${i >= 2 ? 'border-t lg:border-t-0' : ''} ${i === 2 ? 'lg:border-l' : ''}`}
                style={{ borderColor: C.line }}
              >
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span
                    className={`${display.className} block font-bold text-2xl md:text-4xl tabular-nums tracking-[-0.02em] mb-1`}
                    style={{ color: m.accent ? C.red : C.ink }}
                  >
                    {m.value}
                  </span>
                  <span className="block text-xs md:text-sm" style={{ color: C.muted }}>
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </section>

      {/* ── Cocina / servicios ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <Label>Lo que sale de la cocina</Label>
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] tracking-[-0.02em]`}>
                Tres líneas de servicio
              </h2>
            </div>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
              Platos y formatos de muestra. Al publicar se reemplazan por la
              carta y las fotos reales del restaurante.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.code} delay={i * 90}>
              <article className="group h-full flex flex-col rounded-lg border overflow-hidden" style={{ backgroundColor: C.white, borderColor: C.line }}>
                <div className="relative overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full aspect-[3/2] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span
                    className={`${display.className} absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded`}
                    style={{ backgroundColor: C.red, color: C.white }}
                  >
                    {s.code}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className={`${display.className} font-bold text-xl`}>{s.name}</h3>
                    <Sample />
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>{s.desc}</p>
                  <table className="w-full text-sm mt-auto">
                    <tbody>
                      {s.rows.map(([k, v]) => (
                        <tr key={k} className="border-t" style={{ borderColor: C.line }}>
                          <th scope="row" className="py-2.5 pr-3 text-left font-medium text-xs uppercase tracking-[0.14em]" style={{ color: C.muted }}>
                            {k}
                          </th>
                          <td className="py-2.5 text-right font-medium">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sobre el restaurante ── */}
      <section className="border-y" style={{ backgroundColor: C.white, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.1fr_1fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: C.line }}>
              <img
                src={`${IMG}/ambiente.webp`}
                alt="Fachada del restaurante con ventanales, jardineras y árboles en la vereda"
                loading="lazy"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Label>El restaurante</Label>
            <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] mb-5`}>
              Talca lo conoce.
              <br />
              <span style={{ color: C.red }}>{fmt(BIZ.reviews)} reseñas lo dicen.</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.name} atiende en {BIZ.address}, en {BIZ.city}. Son
              {' '}{fmt(BIZ.reviews)} opiniones en Google Maps y {fmt(BIZ.followers)} personas
              que lo siguen en Facebook: un lugar al que la gente vuelve y
              recomienda.
            </p>
            <div className="rounded-lg border" style={{ borderColor: C.line }}>
              <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: C.line }}>
                <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                  Lo que más valoran
                </p>
                <Sample>Temas de muestra</Sample>
              </div>
              <ul>
                {VALORAN.map((r, i) => (
                  <li key={r.k} className={`grid grid-cols-[7.5rem_1fr] gap-3 px-4 py-3 text-sm ${i ? 'border-t' : ''}`} style={{ borderColor: C.line }}>
                    <span className="font-semibold" style={{ color: C.ink }}>{r.k}</span>
                    <span style={{ color: C.muted }}>{r.v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-xs leading-relaxed mt-3" style={{ color: C.muted }}>
              Al publicar, estos temas se reemplazan por citas reales de las
              reseñas de Google.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-6 text-sm font-semibold">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.red }}>
                Ver reseñas en Google →
              </a>
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.fleet }}>
                Facebook →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Carta / precios de referencia ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <Label>Carta y precios de referencia</Label>
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.02] tracking-[-0.02em]`}>
                La carta, en una tabla
              </h2>
            </div>
            <Sample>Precios de muestra</Sample>
          </div>
          <div className="rounded-lg border overflow-x-auto" style={{ backgroundColor: C.white, borderColor: C.line }}>
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr style={{ backgroundColor: C.fleet, color: C.white }}>
                  {['Plato', 'Tipo', 'Formato', 'Precio'].map((h, i) => (
                    <th key={h} scope="col" className={`px-4 md:px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] ${i === 3 ? 'text-right' : 'text-left'}`}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CARTA.map((r) => (
                  <tr key={r.plato} className="border-t" style={{ borderColor: C.line }}>
                    <td className="px-4 md:px-5 py-3.5 font-semibold">{r.plato}</td>
                    <td className="px-4 md:px-5 py-3.5" style={{ color: C.muted }}>{r.tipo}</td>
                    <td className="px-4 md:px-5 py-3.5" style={{ color: C.muted }}>{r.formato}</td>
                    <td className="px-4 md:px-5 py-3.5 text-right tabular-nums" style={{ color: C.muted }}>$ —</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs leading-relaxed mt-3 max-w-xl" style={{ color: C.muted }}>
            Platos y formatos de muestra, sin precios: al publicar se carga la
            carta real con sus valores vigentes, y se actualiza cuando cambie.
          </p>
        </Reveal>
      </section>

      {/* ── Contacto + ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1fr_1.2fr] gap-5">
          <Reveal>
            <div className="h-full rounded-lg p-6 md:p-8 flex flex-col" style={{ backgroundColor: C.red, color: C.white }}>
              <Label light>Contacto directo</Label>
              <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.05] tracking-[-0.02em] mb-4`}>
                Reserva o consulta por WhatsApp
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                Mesa para hoy, almuerzo de grupo o pedido para llevar: escribe
                y te confirmamos por el mismo chat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-base font-semibold px-6 py-4 rounded-md transition-transform active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  style={{ backgroundColor: C.white, color: C.red }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={WA_LINK_GRUPO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-base font-semibold px-6 py-4 rounded-md border transition-colors hover:bg-white/10"
                  style={{ borderColor: 'rgba(255,255,255,0.55)' }}
                >
                  Reservar para grupo
                </a>
              </div>
              <dl className="mt-auto text-sm border-t" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Región', BIZ.region],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                    <dt style={{ color: 'rgba(255,255,255,0.7)' }}>{k}</dt>
                    <dd className="font-semibold text-right">
                      {k === 'Teléfono' ? <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{v}</a> : v}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full rounded-lg border overflow-hidden flex flex-col" style={{ backgroundColor: C.white, borderColor: C.line }}>
              <div className="flex items-center justify-between gap-3 px-4 py-3 border-b" style={{ borderColor: C.line }}>
                <p className="text-sm font-semibold truncate">{BIZ.address} · {BIZ.city}</p>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-semibold" style={{ color: C.red }}>
                  Abrir en Maps →
                </a>
              </div>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full flex-1 min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja: sitio de ejemplo ── */}
      <section aria-label="Sitio de ejemplo" style={{ backgroundColor: C.signal, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm">
          <p className="font-semibold">Sitio de ejemplo de Sitiazo</p>
          <p>Platos, formatos y precios son de muestra; nombre, dirección, contacto y cifras de reseñas son reales.</p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.fleet, color: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 pb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-bold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
