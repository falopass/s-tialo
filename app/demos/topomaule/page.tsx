import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, C } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
})

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8960F]'

export const metadata: Metadata = demoMetadata({
  slug: 'topomaule',
  title: 'Topomaule — Levantamientos topográficos y fotogrametría con drones, Talca',
  description:
    'Topomaule, empresa de topografía en Talca: levantamientos, replanteos, cubicaciones, canales, tranques y planos para el agro y la construcción. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Terreno', href: '#terreno' },
  { label: 'Planos', href: '#planos' },
  { label: 'Cotizar', href: '#cotizar' },
]

const SERVICIOS = [
  { code: 'LEV-01', name: 'Levantamiento topográfico', desc: 'Planimetría y curvas de nivel del terreno con precisión GPS: la base de todo proyecto agrícola, de riego o construcción.' },
  { code: 'REP-02', name: 'Replanteo en terreno', desc: 'Trasladamos el plano al terreno con estación total y GNSS: ejes, líneas de fundación, obras civiles y ampliaciones.' },
  { code: 'CUB-03', name: 'Cubicación de movimiento de tierras', desc: 'Volumen de corte y relleno para plantas de áridos, plataformas y sitios: sabes cuánta tierra mueves antes de moverla.' },
  { code: 'FOT-04', name: 'Fotogrametría con drones', desc: 'Vuelos programados que entregan ortomosaicos, modelos 3D y curvas de nivel a partir de fotografías aéreas.' },
  { code: 'AGU-05', name: 'Canales, tranques y riego', desc: 'Mediciones para obras de riego, canales y tranques; apoyo en trámites de la Ley de Riego y derechos de agua.' },
  { code: 'CAD-06', name: 'Planos y CAD', desc: 'Planos topográficos listos para municipalidad, notario o proyectista: formatos PDF y CAD con cartela y datum.' },
]

const TRABAJOS = [
  {
    src: `${IMG}/hero.webp`,
    alt: 'Foto aérea de la toma de agua y compuertas de un canal de riego en el valle',
    code: 'FOTO-01',
    caption: 'Toma de agua y compuertas de canal — registro aéreo',
    meta: 'Fotogrametría · riego',
  },
  {
    src: `${IMG}/cantera.webp`,
    alt: 'Vista aérea de una planta de áridos con poza y correas transportadoras',
    code: 'FOTO-02',
    caption: 'Planta de áridos — control de cubicación',
    meta: 'Vuelo drone · minería',
  },
  {
    src: `${IMG}/terreno.webp`,
    alt: 'Antenas GNSS instaladas en terreno sobre trípode y bastón durante un levantamiento',
    code: 'FOTO-03',
    caption: 'Base y móvil GNSS en terreno',
    meta: 'RTK · campo',
  },
]

const PROYECTO = {
  title: 'Levantamiento topográfico — Vertedero La Ballica',
  plano: 'PLANTA GENERAL · ESC. 1:2000',
  datos: [
    ['SUPERFICIE', '260.600 m²'],
    ['FECHA', 'Diciembre 2016'],
    ['DATUM', 'WGS84'],
    ['COORDENADAS', 'UTM'],
    ['UBICACIÓN', 'Linares'],
    ['MANDANTE', 'KDM Tratamiento'],
  ],
}

const CLIENTES = [
  'Municipalidad de Melipilla',
  'Municipalidad de Puente Alto',
  'Áridos Santa Gloria',
  'KDM Empresas',
  'Andes Sur',
  'Resam',
  'Ingegroup Consultores',
  'IMELSA',
  'Krol Ingeniería Hidráulica',
  'CEPIA',
  'HIDROtop',
  'GEOCAS',
]

const RESENAS = [
  { text: 'Excelente calidad de profesionales, trabajos de gran calidad y en poco tiempo.', name: 'Damián Espinoza', meta: 'Reseña de Google' },
  { text: 'Excelente calidad y responsabilidad en su trabajo. Cuentan maquinaria de primera calidad. Precios acordes al servicio prestado.', name: 'Álvaro Larrabe', meta: 'Reseña de Google' },
  { text: 'Profesionales de excelencia, 100% recomendable.', name: 'Oscar Villarroel', meta: 'Reseña de Google' },
]

const PASOS = [
  { n: '01', t: 'Nos cuentas el proyecto', d: 'Qué terreno, qué necesitas medir y para qué: riego, subdivisión, construcción o cubierta.' },
  { n: '02', t: 'Vamos al terreno', d: 'Salida con GNSS, estación total o drone según el trabajo; registro del punto de partida y el terreno.' },
  { n: '03', t: 'Entregas del plano', d: 'Planos PDF/CAD con cartela, datum y coordenadas. Listos para municipalidad, notario o proyectista.' },
]

function Chip({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-1.5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] px-3 py-1.5 border`}
      style={
        dark
          ? { color: '#D9DCCB', borderColor: C.lineOnDark, backgroundColor: 'rgba(255,255,255,0.06)' }
          : { color: C.ink, borderColor: C.line, backgroundColor: 'rgba(255,255,255,0.65)' }
      }
    >
      <span className="w-1.5 h-1.5" style={{ backgroundColor: C.orange }} aria-hidden="true" />
      {children}
    </span>
  )
}

export default function Page() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} font-semibold tracking-wide text-lg md:text-xl`}>
            TOPO<span style={{ color: C.orange }}>MAULE</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(19,29,24,0.95)',
          ink: '#F2EFE3',
          line: C.lineOnDark,
          btnBg: C.orange,
          btnInk: '#1A2620',
        }}
      />

      {/* ── Hero: replanteo en obra ─────────────────────────── */}
      <section
        id="inicio"
        className="relative"
        style={{
          background: `linear-gradient(180deg, ${C.dark} 0%, ${C.dark2} 100%)`,
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent 0 23px, ${C.paper} 23px 24px), repeating-linear-gradient(90deg, transparent 0 23px, ${C.paper} 23px 24px)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[132px] pb-14 md:pb-20">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <Chip dark>Lat -35.4260 · Lon -71.6539</Chip>
                <Chip dark>Talca · Maule</Chip>
              </div>
              <h1 className={`${display.className} font-extrabold text-[40px] leading-[1.02] md:text-7xl md:leading-[0.96] uppercase`} style={{ color: C.paper }}>
                Medir primero.
                <br />
                <span style={{ color: C.orange }}>Construir después.</span>
              </h1>
              <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: '#D9DCCB' }}>
                Levantamientos topográficos, replanteos y cubicaciones para el agro, la minería
                y la construcción del Maule. GNSS, estación total y drone — el plano sale del terreno, no del escritorio.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold active:scale-95 transition-transform`}
                  style={{ backgroundColor: C.orange, color: C.dark }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold border active:scale-95 transition-transform`}
                  style={{ borderColor: C.lineOnDark, color: C.paper }}
                >
                  Ver servicios
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.orange} />
                <p className="text-sm" style={{ color: '#D9DCCB' }}>
                  <strong style={{ color: C.paper }}>{BIZ.rating.toFixed(1)}</strong> · {BIZ.reviews} opiniones en Google
                </p>
              </div>
            </div>

            <Reveal>
              <div className="relative">
                <div className="grid grid-cols-[1fr_auto] items-start gap-4">
                  <div
                    className="relative border p-2 shadow-2xl"
                    style={{ borderColor: C.lineOnDark, backgroundColor: 'rgba(242,239,227,0.04)' }}
                  >
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={`${IMG}/hero.webp`}
                        alt="Foto aérea de la toma de agua de un canal de riego levantada por Topomaule"
                        fill
                        sizes="(max-width: 768px) 100vw, 45vw"
                        className="object-cover"
                        priority
                      />
                      <span
                        className={`${mono.className} absolute top-3 left-3 px-2 py-1 text-[10px] font-bold uppercase tracking-widest`}
                        style={{ backgroundColor: 'rgba(19,29,24,0.85)', color: C.orange }}
                      >
                        VUELO 01 · ORTOMOSAICO
                      </span>
                    </div>
                    {/* Cotas del marco */}
                    <div className={`${mono.className} mt-2 flex justify-between text-[10px]`} style={{ color: '#B9BFA8' }}>
                      <span>E 296 189</span>
                      <span>N 6 082 340</span>
                      <span>ESC 1:2000</span>
                    </div>
                  </div>
                  <div className="pt-1 hidden sm:block">
                    <Image
                      src={`${IMG}/mascota.webp`}
                      alt="Mascota topógrafo de Topomaule"
                      width={72}
                      height={72}
                      className="w-14 h-auto opacity-90"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Franja de leyenda */}
        <div className="relative border-t" style={{ borderColor: C.lineOnDark }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-2 items-center">
            {['GNSS RTK', 'Estación total', 'Drone fotogramétrico', 'CAD / PDF', 'L–S · 24 h'].map((t) => (
              <span key={t} className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: '#C5CBB4' }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Servicios: leyenda del plano ─────────────────────── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl">
            <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orangeDeep }}>
              Leyenda del trabajo
            </p>
            <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`}>
              Servicios que medimos y dibujamos
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Cada trabajo parte en el terreno y termina en un plano firmado: cartela, datum y
              coordenadas claras para que el proyecto avance sin dudas.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 border-t border-l" style={{ borderColor: C.line }}>
          <div className="grid sm:grid-cols-2">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.code} delay={(i % 2) * 80}>
                <article className="h-full p-6 md:p-7 flex gap-4 items-start border-b border-r" style={{ borderColor: C.line, backgroundColor: i % 2 === 0 ? C.card : C.paper }}>
                  <span className={`${mono.className} mt-1 text-[11px] font-bold px-2 py-1 shrink-0`} style={{ backgroundColor: C.ink, color: C.paper }}>
                    {s.code}
                  </span>
                  <div>
                    <h3 className={`${display.className} font-semibold text-xl md:text-2xl uppercase`}>{s.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Terreno: fotos de trabajo ────────────────────────── */}
      <section id="terreno" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="max-w-xl">
                <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orangeDeep }}>
                  Registro de terreno
                </p>
                <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`}>
                  El trabajo se hace a campo abierto
                </h2>
              </div>
              <Chip>Fotos reales de trabajos</Chip>
            </div>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.code} delay={i * 90}>
                <figure className="border shadow-sm" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={t.src}
                      alt={t.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <span
                      className={`${mono.className} absolute top-3 left-3 px-2 py-1 text-[10px] font-bold tracking-widest`}
                      style={{ backgroundColor: 'rgba(19,29,24,0.85)', color: C.paper }}
                    >
                      {t.code}
                    </span>
                  </div>
                  <figcaption className="p-4">
                    <p className="text-sm font-semibold">{t.caption}</p>
                    <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-widest`} style={{ color: C.muted }}>
                      {t.meta}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plano: cartela real ──────────────────────────────── */}
      <section id="planos" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          <Reveal>
            <div className="relative border-4 p-1 shadow-xl" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <div className="relative aspect-[874/1200]">
                <Image
                  src={`${IMG}/plano.webp`}
                  alt="Plano topográfico real del Vertedero La Ballica: planta general con curvas de nivel, cartela TOPO MAULE y datos del proyecto"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orangeDeep }}>
                Entregable tipo
              </p>
              <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`}>
                El plano que se firma y se entrega
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                Cada levantamiento termina en un plano con cartela, datum y escala. Este es uno
                real: 260.600 m² en Linares, con curvas de nivel y referencias topográficas
                medidas con GPS de doble frecuencia.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="mt-8 border" style={{ borderColor: C.ink }}>
                <div className={`${mono.className} px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] border-b`} style={{ borderColor: C.ink, backgroundColor: C.ink, color: C.paper }}>
                  {PROYECTO.plano}
                </div>
                <div className="px-4 py-4">
                  <p className={`${display.className} font-semibold text-xl uppercase`}>{PROYECTO.title}</p>
                  <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
                    {PROYECTO.datos.map(([k, v]) => (
                      <div key={k} className="border-b border-dashed pb-2" style={{ borderColor: C.line }}>
                        <dt className={`${mono.className} text-[10px] uppercase tracking-widest`} style={{ color: C.muted }}>{k}</dt>
                        <dd className="text-sm font-semibold mt-0.5">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pasos ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.dark2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orange }}>
              Cómo se trabaja
            </p>
            <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-6xl uppercase leading-[0.95]`} style={{ color: C.paper }}>
              De la consulta al plano
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <div className="border p-6 h-full" style={{ borderColor: C.lineOnDark, backgroundColor: 'rgba(242,239,227,0.04)' }}>
                  <span className={`${mono.className} text-3xl font-bold`} style={{ color: C.orange }}>{p.n}</span>
                  <h3 className={`${display.className} font-semibold mt-4 text-2xl uppercase`} style={{ color: C.paper }}>{p.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: '#C5CBB4' }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas + clientes ───────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
          <Reveal>
            <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orangeDeep }}>
              Referencias reales
            </p>
            <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-5xl uppercase leading-[0.95]`}>
              «Calidad y responsabilidad en su trabajo»
            </h2>
            <div className="mt-6 flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.orange} className="w-5 h-5" />
              <p className="text-sm" style={{ color: C.muted }}>
                <strong style={{ color: C.ink }}>{BIZ.rating.toFixed(1)} de 5</strong> · {BIZ.reviews} opiniones en Google
              </p>
            </div>
            <div className="mt-8">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-3`} style={{ color: C.muted }}>
                Han confiado en el trabajo
              </p>
              <div className="flex flex-wrap gap-2">
                {CLIENTES.map((c) => (
                  <span key={c} className={`${mono.className} text-[11px] px-2.5 py-1.5 border`} style={{ borderColor: C.line, color: C.ink, backgroundColor: C.card }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="space-y-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure className="border p-5 md:p-6" style={{ backgroundColor: C.card, borderColor: C.line, borderLeftWidth: 4, borderLeftColor: C.orange }}>
                  <Stars value={5} color={C.orangeDeep} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-[15px] leading-relaxed">“{r.text}”</blockquote>
                  <figcaption className="mt-3 flex items-center gap-2">
                    <span className={`${mono.className} text-xs font-bold`}>{r.name}</span>
                    <span className="text-xs" style={{ color: C.muted }}>· {r.meta}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cotizar + mapa ───────────────────────────────────── */}
      <section id="cotizar" style={{ backgroundColor: C.dark }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
            <Reveal>
              <div className="h-full flex flex-col">
                <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em]`} style={{ color: C.orange }}>
                  Cotizar
                </p>
                <h2 className={`${display.className} font-extrabold mt-3 text-4xl md:text-5xl uppercase leading-[0.95]`} style={{ color: C.paper }}>
                  Manda el punto y lo medimos
                </h2>
                <ul className="mt-7 space-y-4 text-[15px]" style={{ color: '#C5CBB4' }}>
                  <li className="flex gap-3 items-start">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
                      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                    <span>
                      <strong style={{ color: C.paper }}>{BIZ.city}, {BIZ.region}</strong>
                      <br />Terreno en todo el Maule y regiones vecinas
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3.2 2" strokeLinecap="round" />
                    </svg>
                    <span>
                      {BIZ.hours.map((h) => (
                        <span key={h.d} className="block">
                          <strong style={{ color: C.paper }}>{h.d}:</strong> {h.h}
                        </span>
                      ))}
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
                      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                    </svg>
                    <span>
                      <strong style={{ color: C.paper }}>{BIZ.phoneDisplay}</strong>
                      <br />{BIZ.email}
                    </span>
                  </li>
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold active:scale-95 transition-transform`}
                    style={{ backgroundColor: C.orange, color: C.dark }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${FOCUS} inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold border active:scale-95 transition-transform`}
                    style={{ borderColor: C.lineOnDark, color: C.paper }}
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="h-full min-h-[320px] border shadow-lg overflow-hidden" style={{ borderColor: C.lineOnDark }}>
                <LazyMap src={MAPS_EMBED} title="Mapa: Topomaule, Talca" className="w-full h-full min-h-[320px] border-0" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.dark2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src={`${IMG}/logo-blanco.webp`} alt="" width={120} height={28} className="h-6 w-auto opacity-90" />
            <p className="text-xs" style={{ color: '#9AA594' }}>
              {BIZ.city} · {BIZ.region}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} text-sm font-semibold underline underline-offset-4 tap-44`}
            style={{ color: C.orange }}
          >
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="Cotizar por WhatsApp" />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
