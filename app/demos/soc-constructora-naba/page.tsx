import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, MAPS_URL, MAPS_EMBED, LICITACIONES_URL, FUENTES, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2' }],
})
const label = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-600.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2' }],
})
const monoBold = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2' }],
})

/**
 * Dirección de arte: «expediente de obra». La identidad sale de lo que
 * se ve en terreno: asfalto oscuro, naranjo señalético, papel concreto
 * y la tipografía de letrero (Archivo Black) con datos en Space Mono,
 * como una ficha de licitación pegada en la reja de la obra.
 */
const C = {
  asphalt: '#16191D',
  deep: '#0F1215',
  paper: '#EDE8DD',
  cream: '#F5F1E8',
  orange: '#F26D1F',
  orangeDark: '#C8500E',
  orangeDeep: '#A53F00',
  yellow: '#F5B51B',
  ink: '#1B1E22',
  muted: '#5A6470',
  line: 'rgba(27,30,34,0.16)',
  lineDark: 'rgba(255,255,255,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'soc-constructora-naba',
  title: 'Constructora Naba — Obras sanitarias y viales desde Laja, Bío Bío',
  description:
    'Sociedad Constructora Naba Ltda.: alcantarillado, agua potable rural y obras viales para municipios y servicios del Estado en el Biobío. Proveedor del Estado desde 1998.',
  image: '/demos/soc-constructora-naba/hero.webp',
})

const NAV_LINKS = [
  { label: 'Qué hace', href: '#que-hace' },
  { label: 'Expediente', href: '#obras' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
]

const STATS = [
  { n: '1998', d: 'constitución en Laja' },
  { n: '21', d: 'licitaciones adjudicadas*' },
  { n: '≈100', d: 'personas en nómina' },
  { n: '8', d: 'comunas con obras' },
]

const HABILIDADES = [
  {
    src: `${IMG}/zanja.webp`,
    alt: 'Zanja abierta en la vereda con trabajador instalando tubería, obra sanitaria en Huépil',
    tag: 'OBRAS SANITARIAS',
    name: 'Alcantarillado y redes',
    desc: 'Zanjas, tuberías y cámaras que quedan bajo tierra, pero que le cambian la vida a un sector entero.',
  },
  {
    src: `${IMG}/camaras.webp`,
    alt: 'Trabajadores sobre cámaras de inspección de hormigón recién instaladas',
    tag: 'AGUA POTABLE',
    name: 'APR y cámaras',
    desc: 'Pozos, cámaras de inspección y redes para los sistemas de agua potable rural del Biobío.',
  },
  {
    src: `${IMG}/calle.webp`,
    alt: 'Calle pavimentada terminada con soleras nuevas en una localidad de Tucapel',
    tag: 'VIALIDAD',
    name: 'Calles y mejoramiento urbano',
    desc: 'Pavimento, veredas y señalización: la cara visible de la obra cuando la faena termina.',
  },
  {
    src: `${IMG}/letrero.webp`,
    alt: 'Letrero de obra SUBDERE instalado en terreno con mandante y proyecto identificados',
    tag: 'TRANSPARENCIA',
    name: 'Letrero y papeles al día',
    desc: 'Cada obra lleva su letrero SUBDERE o MOP a la vista: mandante, proyecto y plazo para cualquier vecino.',
  },
]

const EXPEDIENTE = [
  {
    n: '01',
    titulo: 'Alcantarillado y agua potable de Goycolea Norte',
    comuna: 'Yumbel',
    mandante: 'MOP · Vivienda y Urbanismo',
    estado: 'EN EJECUCIÓN',
    fuente: 'Diario La Tribuna, sep. 2025',
    href: FUENTES.yumbel,
  },
  {
    n: '02',
    titulo: 'Tres proyectos sanitarios de Huépil',
    comuna: 'Tucapel',
    mandante: 'SUBDERE',
    estado: 'EJECUTADOS ×3',
    fuente: 'Municipalidad de Tucapel',
    href: FUENTES.huepil,
  },
  {
    n: '03',
    titulo: 'Pozo para el APR de Las Lomas',
    comuna: 'Tucapel',
    mandante: 'Agua Potable Rural',
    estado: 'EJECUTADO',
    fuente: 'Municipalidad de Tucapel',
    href: FUENTES.laslomas,
  },
  {
    n: '04',
    titulo: 'Mejoramiento urbano de Condell',
    comuna: 'Tucapel',
    mandante: 'Municipio de Tucapel',
    estado: 'EJECUTADO',
    fuente: 'Municipalidad de Tucapel',
    href: FUENTES.condell,
  },
]

const COMUNAS = [
  'Laja',
  'Yumbel',
  'Tucapel',
  'Mulchén',
  'Santa Bárbara',
  'Cabrero',
  'Quilaco',
  'Los Ángeles',
]

function Fuente({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} text-[10px] uppercase tracking-[0.14em]`}
      style={{ color: C.muted }}
    >
      {children}
    </span>
  )
}

export default function SocConstructoraNaba() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={<span className={display.className}>CONSTRUCTORA NABA</span>}
        links={NAV_LINKS}
        waLink={LICITACIONES_URL}
        ctaLabel="Ficha pública"
        theme={{
          over: 'dark',
          bar: 'rgba(15,18,21,0.92)',
          ink: '#F5F1E8',
          line: 'rgba(255,255,255,0.12)',
          btnBg: C.orangeDark,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── HERO: la cuadrilla en terreno ─────────────────────── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Excavadora y cuadrilla de la obra de alcantarillado y agua potable de Goycolea Norte, Yumbel"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(15,18,21,0.42) 0%, rgba(15,18,21,0.15) 40%, rgba(15,18,21,0.94) 88%)',
          }}
        />
        {/* Línea de topógrafo */}
        <div className="absolute top-[72px] inset-x-5 md:inset-x-8 flex items-center gap-3" aria-hidden="true">
          <span className={`${mono.className} text-[10px] tracking-[0.2em] text-white/70`}>
            EXPEDIENTE DE OBRA
          </span>
          <span className="h-px flex-1 border-t border-dashed" style={{ borderColor: 'rgba(255,255,255,0.35)' }} />
          <span className={`${mono.className} text-[10px] tracking-[0.2em] text-white/70`}>
            RUT {BIZ.rut}
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-24 pb-10 md:pb-14">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] mb-4`} style={{ color: C.yellow }}>
              {BIZ.legalName.toUpperCase()} · {BIZ.city.toUpperCase()}, BÍO BÍO
            </p>
            <h1
              className={`${display.className} text-[2.5rem] leading-[1.02] md:text-7xl text-white max-w-3xl`}
            >
              La empresa que abre la zanja{' '}
              <span style={{ color: C.orange }}>y devuelve la calle</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-4 max-w-xl text-white/85">
              {BIZ.rubro}: alcantarillado, APR y mejoramiento urbano para
              municipios y servicios del Estado, con casa matriz en Laja.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-6">
              {[`${BIZ.city}, ${BIZ.region}`, `Desde ${BIZ.since}`, 'Proveedor del Estado'].map((chip) => (
                <span
                  key={chip}
                  className={`${label.className} text-[13px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.28)' }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="#obras"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: C.orangeDark, color: '#fff' }}
              >
                Ver el expediente
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: 'rgba(255,255,255,0.14)', color: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}
              >
                Casa matriz en Maps
              </a>
            </div>
            <p className={`${mono.className} text-[10px] tracking-[0.12em] mt-5`} style={{ color: 'rgba(255,255,255,0.55)' }}>
              FOTO: OBRA MOP GOYCOLEA NORTE, YUMBEL · DIARIO LA TRIBUNA
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── FICHA TÉCNICA ─────────────────────────────────────── */}
      <section className="border-y" style={{ borderColor: C.lineDark, backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60} className={`py-6 md:py-8 ${i > 0 ? 'md:border-l' : ''} ${i % 2 === 1 ? 'border-l' : ''}`}
            >
              <div className={i > 0 ? 'md:pl-6' : ''}>
                <p className={`${monoBold.className} text-3xl md:text-4xl`} style={{ color: C.yellow }}>
                  {s.n}
                </p>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.12em] mt-1`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                  {s.d}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── QUÉ HACE ──────────────────────────────────────────── */}
      <section id="que-hace" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.orangeDeep }}>
              Qué hace Naba
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`}>
              Naba entra donde hay que{' '}
              <span style={{ color: C.orangeDark }}>abrir la calle</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4 max-w-xl" style={{ color: C.muted }}>
              Cuatro frentes de trabajo, todos con mandante público. Las fotos
              son registro real de las obras: municipalidad y prensa local.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 md:gap-7 mt-10">
            {HABILIDADES.map((h, i) => (
              <Reveal key={h.name} delay={(i % 2) * 90}>
                <article
                  className="rounded-2xl overflow-hidden border"
                  style={{ backgroundColor: '#fff', borderColor: C.line }}
                >
                  <div className="relative aspect-[3/2]">
                    <Image src={h.src} alt={h.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                    <span
                      className={`${mono.className} absolute top-3 left-3 text-[10px] tracking-[0.16em] px-2.5 py-1 rounded`}
                      style={{ backgroundColor: C.yellow, color: C.asphalt }}
                    >
                      {h.tag}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className={`${display.className} text-xl md:text-2xl`}>{h.name}</h3>
                    <p className="text-sm leading-relaxed mt-2" style={{ color: C.muted }}>
                      {h.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className={`${mono.className} text-[10px] tracking-[0.12em] mt-5`} style={{ color: C.muted }}>
            REGISTRO FOTOGRÁFICO: MUNICIPALIDAD DE TUCAPEL · OBRAS EJECUTADAS POR NABA EN HUÉPIL
          </p>
        </div>
      </section>

      {/* ── EXPEDIENTE DE OBRAS ───────────────────────────────── */}
      <section id="obras" className="py-16 md:py-24" style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.yellow }}>
              Expediente reciente
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] text-white max-w-2xl`}>
              Obras con mandante público,{' '}
              <span style={{ color: C.orange }}>fuente al lado</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4 max-w-xl" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Cada fila es una adjudicación real con su mandante y la fuente
              que la documenta. El historial completo está en su ficha de
              proveedor del Estado.
            </p>
          </Reveal>

          <div className="mt-10 border-t" style={{ borderColor: C.lineDark }}>
            {EXPEDIENTE.map((o, i) => (
              <Reveal key={o.n} delay={i * 70}>
                <a
                  href={o.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_auto_auto] gap-x-4 gap-y-1 items-center py-5 border-b transition-colors"
                  style={{ borderColor: C.lineDark }}
                >
                  <span className={`${monoBold.className} text-xl`} style={{ color: 'rgba(255,255,255,0.35)' }}>
                    {o.n}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-white text-[15px] md:text-base leading-snug group-hover:underline underline-offset-4">
                      {o.titulo}
                    </p>
                    <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                      {o.comuna} · {o.mandante} · {o.fuente}
                    </p>
                  </div>
                  <span
                    className={`${mono.className} col-start-2 md:col-start-auto justify-self-start text-[10px] tracking-[0.14em] px-2.5 py-1 rounded`}
                    style={{ backgroundColor: 'rgba(242,109,31,0.18)', color: C.yellow, border: '1px solid rgba(242,109,31,0.45)' }}
                  >
                    {o.estado}
                  </span>
                  <span className={`${mono.className} hidden md:inline text-xs`} style={{ color: C.yellow }} aria-hidden="true">
                    →
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="grid md:grid-cols-[1fr_1fr] gap-5 md:gap-8 mt-10 items-center">
              <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border" style={{ borderColor: C.lineDark }}>
                <Image
                  src={`${IMG}/zanja2.webp`}
                  alt="Zanja de alcantarillado junto a la cerca de una vivienda rural en Huépil, Tucapel"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className={`${display.className} text-2xl md:text-3xl text-white leading-tight`}>
                  El trabajo que no se ve{' '}
                  <span style={{ color: C.yellow }}>es el que más vale</span>
                </h3>
                <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  Redes bajo tierra, cámaras al ras y calle recompuesta. En
                  Huépil, Naba ejecutó los tres proyectos sanitarios que la
                  Municipalidad de Tucapel adjudicó con fondos SUBDERE.
                </p>
                <a
                  href={LICITACIONES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-5 text-sm font-semibold"
                  style={{ color: C.yellow }}
                >
                  Historial de licitaciones (todolicitaciones.cl) →
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── COMUNIDAD ─────────────────────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div className="relative aspect-[3/2] rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/reunion.webp`}
                alt="Reunión del comité de agua potable rural de Las Lomas con municipalidad y vecinos"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <Fuente>Municipalidad de Tucapel · APR Las Lomas</Fuente>
          </Reveal>
          <Reveal delay={80}>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.orangeDeep }}>
              Antes de la primera zanja
            </p>
            <h2 className={`${display.className} text-3xl md:text-4xl leading-tight`}>
              El agua rural parte en la mesa{' '}
              <span style={{ color: C.orangeDark }}>de los vecinos</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mt-4" style={{ color: C.muted }}>
              Un APR se levanta con el comité, la junta de vecinos y el
              municipio sentados en la misma mesa. Las obras de Naba en
              Tucapel avanzaron así: pozo, red y cámaras para que el agua
              llegue firme a las casas de Las Lomas y Huépil.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── COBERTURA + MAPA ──────────────────────────────────── */}
      <section id="cobertura" className="py-16 md:py-24" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mb-3`} style={{ color: C.orangeDeep }}>
              Cobertura
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] max-w-2xl`}>
              De Laja a la zona norte{' '}
              <span style={{ color: C.orangeDark }}>del Biobío</span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <div className="flex flex-wrap gap-2 mt-7">
              {COMUNAS.map((com, i) => (
                <span
                  key={com}
                  className={`${label.className} text-[13px] uppercase tracking-[0.1em] px-3.5 py-2 rounded-full`}
                  style={
                    i === 0
                      ? { backgroundColor: C.orangeDark, color: '#fff' }
                      : { backgroundColor: '#fff', color: C.ink, border: `1px solid ${C.line}` }
                  }
                >
                  {com}
                  {i === 0 ? ' · casa matriz' : ''}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid md:grid-cols-[1.35fr_1fr] gap-6 md:gap-8 mt-8 items-stretch">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border h-[300px] md:h-full min-h-[300px]" style={{ borderColor: C.line }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title="Casa matriz de Constructora Naba en Laja"
                  className="w-full h-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div
                className="rounded-2xl border p-6 md:p-7 h-full flex flex-col justify-between gap-6"
                style={{ backgroundColor: C.asphalt, borderColor: C.lineDark }}
              >
                <div>
                  <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.yellow }}>
                    Casa matriz
                  </p>
                  <p className={`${display.className} text-2xl text-white mt-2`}>
                    {BIZ.address}, {BIZ.city}
                  </p>
                  <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {BIZ.region} · Ficha Google Maps: «Construcción y Montaje Naba Ltda.»
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: C.orangeDark, color: '#fff' }}
                  >
                    Cómo llegar
                  </a>
                  <a
                    href={LICITACIONES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-[48px] px-6 rounded-full text-sm font-semibold transition-transform active:scale-95"
                    style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}
                  >
                    Ficha de proveedor
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer id="contacto" className="py-7 md:py-10" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className={`${display.className} text-lg text-white`}>{BIZ.legalName}</p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                RUT {BIZ.rut} · {BIZ.address}, {BIZ.city} · {BIZ.region}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 text-right">
              <a href={LICITACIONES_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: C.yellow }}>
                TODOLICITACIONES.CL ↗
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`${mono.className} text-[11px] tracking-[0.1em]`} style={{ color: 'rgba(255,255,255,0.65)' }}>
                GOOGLE MAPS ↗
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] leading-normal mt-5 pt-4 border-t`} style={{ color: 'rgba(255,255,255,0.55)', borderColor: 'rgba(255,255,255,0.12)' }}>
            Mockup de muestra para Sitiazo. Datos: Diario Oficial, ChileCompra y Google Maps.
            Fotos: Muni. de Tucapel y Diario La Tribuna. *21 adjudicaciones en todolicitaciones.cl (sep. 2026).
          </p>
        </div>
      </footer>
    </main>
  )
}
