import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «parte de obra» — el cuaderno de faena del
 * constructor: índices numerados, cotas de medición, placas de figura
 * bajo cada foto y una paleta de carbón, papel y madera. Barlow
 * Condensed hace de letra estarcida sobre el pino; Archivo es el
 * texto y IBM Plex Mono lleva los datos de terreno.
 */
const C = {
  papel: '#F2ECDD',
  soft: '#E7DFC9',
  carbon: '#1B1710',
  carbonSoft: '#262015',
  timber: '#C89548',
  ink: '#262015',
  muted: '#6E6653',
  line: 'rgba(27,23,16,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'construcciones-letelier',
  title: 'Construcciones Letelier | Constructor en San Clemente, Maule',
  description:
    'Constructor en San Clemente, Región del Maule: obra gruesa, steel framing, quinchos y remodelaciones. Atención 24 horas. Cotiza por WhatsApp.',
  image: `${IMG}/obra-gruesa.webp`,
})

const NAV_LINKS = [
  { label: 'El parte', href: '#parte' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Cotizar', href: '#cotizar' },
  { label: 'Terreno', href: '#terreno' },
]

const PARTE = [
  {
    num: '01',
    nombre: 'Radier y fundaciones',
    detalle: 'el hormigón que sostiene todo lo demás: radier nivelado y terminado a regla.',
    meta: 'HORMIGÓN · MALLA · NIVELACIÓN',
    img: 'radier.webp',
    alt: 'Radier de hormigón recién terminado en una obra de Construcciones Letelier',
  },
  {
    num: '02',
    nombre: 'Steel framing',
    detalle: 'estructura de acero liviano levantada sobre el radier: rápida, recta y medida.',
    meta: 'PERFILES · ACERO GALVANIZADO',
    img: 'steel-frame.webp',
    alt: 'Entramado de steel framing en obra, sobre el jardín del sitio',
  },
  {
    num: '03',
    nombre: 'Quinchos y estructuras',
    detalle: 'quinchos, techumbres y portones en madera: la pega que se nota desde la calle.',
    meta: 'MADERA · TECHUMBRE · PORTONES',
    img: 'quincho.webp',
    alt: 'Quincho de madera con techumbre construido por Construcciones Letelier',
  },
  {
    num: '04',
    nombre: 'Terminaciones e interiores',
    detalle: 'pisos, revestimientos y madera a la vista para dejar la casa lista.',
    meta: 'PISOS · REVESTIMIENTO',
    img: 'interior.webp',
    alt: 'Interior terminado en madera y piedra de una obra de Letelier',
  },
]

const TRABAJOS = [
  { img: 'obra-gruesa.webp', fig: 'FIG. 02', cap: 'Casa en obra gruesa, cerros del Maule al fondo', alt: 'Casa de madera en obra gruesa con cerros al fondo' },
  { img: 'terraza.webp', fig: 'FIG. 03', cap: 'Terraza en hormigón bajo el alero', alt: 'Terraza de hormigón recién construida' },
  { img: 'portalon.webp', fig: 'FIG. 04', cap: 'Portalón corredero de madera', alt: 'Portalón corredero de madera instalado al frente de una casa' },
  { img: 'piso.webp', fig: 'FIG. 05', cap: 'Piso flotante en plena instalación', alt: 'Instalación de piso de madera flotante' },
]

/** Cota de medición horizontal: línea con corchetes y cifra mono. */
function Cota({ label, color = C.timber }: { label: string; color?: string }) {
  return (
    <div className="flex items-center gap-2" aria-hidden="true">
      <span className="h-3 w-px" style={{ backgroundColor: color }} />
      <span className="flex-1 h-px" style={{ backgroundColor: color }} />
      <span className={`${mono.className} text-[10px] font-semibold tracking-[0.2em]`} style={{ color }}>
        {label}
      </span>
      <span className="flex-1 h-px" style={{ backgroundColor: color }} />
      <span className="h-3 w-px" style={{ backgroundColor: color }} />
    </div>
  )
}

export default function ConstruccionesLetelierPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.papel, color: C.ink }}>
      <style>{`
        .cl-row { transition: background-color .25s ease; }
        .cl-row:hover { background-color: rgba(200,149,72,0.10); }
        .cl-fig { transition: transform .4s ease; }
        .cl-fig:hover { transform: translateY(-4px); }
      `}</style>

      <BlitzNav
        name={<span className="uppercase tracking-wide">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(242,236,221,0.96)',
          ink: C.carbon,
          line: C.line,
          btnBg: C.carbon,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: la casa en obra gruesa, a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/obra-gruesa.webp`}
          alt="Casa de madera en obra gruesa con techumbre en armado, obra de Construcciones Letelier en el Maule"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,23,16,0.45) 0%, rgba(27,23,16,0.1) 35%, rgba(27,23,16,0.72) 62%, rgba(27,23,16,0.9) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-28">
          <Reveal>
            <p
              className={`${mono.className} inline-block text-[10px] md:text-[11px] font-medium tracking-[0.24em] uppercase px-3 py-1.5 rounded-sm`}
              style={{ color: C.timber, backgroundColor: 'rgba(27,23,16,0.8)', border: `1px solid ${C.timber}` }}
            >
              Constructor · San Clemente · Región del Maule
            </p>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.92] tracking-tight text-[52px] md:text-8xl mt-3 max-w-4xl`}
              style={{ color: C.papel }}
            >
              Obra gruesa, quinchos y remodelaciones
            </h1>
            <p className="text-[15px] md:text-lg leading-snug mt-4 max-w-md" style={{ color: 'rgba(242,236,221,0.85)' }}>
              Construcciones Letelier trabaja en San Clemente y alrededores:
              del radier al último piso flotante.
            </p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-sm px-5 h-12 text-[15px] font-bold tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.timber, color: C.carbon }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#trabajos"
                className="inline-flex items-center rounded-sm px-4 h-12 text-[15px] font-bold tap-44"
                style={{ color: C.papel, border: `1.5px solid rgba(242,236,221,0.7)` }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha de terreno (datos en mono) ── */}
      <section style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2">
          {[
            `BASE ${BIZ.address.toUpperCase()}`,
            BIZ.hours.toUpperCase(),
            BIZ.phoneDisplay,
            'COTIZACIÓN DIRECTA POR WHATSAPP',
          ].map((t) => (
            <Reveal key={t}>
              <span className={`${mono.className} text-[10px] md:text-[11px] font-medium tracking-[0.18em] uppercase`} style={{ color: 'rgba(242,236,221,0.85)' }}>
                {t}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El parte de obra ── */}
      <section id="parte" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold uppercase leading-[0.95] max-w-3xl`} style={{ color: C.carbon }}>
              el parte de obra de Letelier,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: C.muted }}>
              cuatro frentes de trabajo, anotados como en el cuaderno de faena.
              Las fotos de cada línea son de sus propios trabajos.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14" style={{ borderTop: `1.5px solid ${C.carbon}` }}>
            {PARTE.map((p, i) => (
              <Reveal key={p.num} delay={i * 60}>
                <div
                  className="cl-row grid grid-cols-[auto_1fr] md:grid-cols-[90px_1fr_auto] items-center gap-4 md:gap-8 py-5 md:py-7 px-2 md:px-4"
                  style={{ borderBottom: `1.5px solid ${C.carbon}` }}
                >
                  <span
                    className={`${mono.className} text-sm md:text-base font-semibold tracking-[0.15em] self-start md:self-center pt-1 md:pt-0`}
                    style={{ color: C.timber }}
                  >
                    {p.num}/
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${display.className} text-2xl md:text-4xl font-bold uppercase leading-none`} style={{ color: C.carbon }}>
                      {p.nombre}
                    </h3>
                    <p className="text-sm md:text-[15px] mt-2 leading-snug max-w-lg" style={{ color: C.muted }}>
                      {p.detalle}
                    </p>
                    <p className={`${mono.className} text-[10px] tracking-[0.18em] mt-2.5`} style={{ color: C.timber }}>
                      {p.meta}
                    </p>
                  </div>
                  <div className="col-span-2 md:col-span-1 relative w-full md:w-[220px] h-40 md:h-[130px] overflow-hidden rounded-sm">
                    <Image src={`${IMG}/${p.img}`} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 220px" className="object-cover" />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trabajos en terreno ── */}
      <section id="trabajos" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold uppercase leading-[0.95] max-w-3xl`} style={{ color: C.papel }}>
              trabajo que se ve desde la calle,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: 'rgba(242,236,221,0.7)' }}>
              registro fotográfico: son las fotos que el propio Letelier subió a su
              ficha de Google.
            </p>
          </Reveal>

          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
            {TRABAJOS.map((t, i) => (
              <Reveal
                key={t.img}
                delay={i * 60}
                className={i === 0 ? 'col-span-2 md:col-span-7' : i === 1 ? 'col-span-1 md:col-span-5' : i === 2 ? 'col-span-1 md:col-span-5' : 'col-span-2 md:col-span-7'}
              >
                <figure className="cl-fig m-0 h-full">
                  <div className={`relative overflow-hidden rounded-sm ${i === 0 || i === 3 ? 'aspect-[16/10]' : 'aspect-[4/3] md:aspect-[16/11]'}`}>
                    <Image src={`${IMG}/${t.img}`} alt={t.alt} fill sizes="(max-width: 768px) 100vw, 60vw" className="object-cover" />
                  </div>
                  <figcaption className="flex items-baseline gap-3 mt-2.5">
                    <span className={`${mono.className} text-[10px] font-semibold tracking-[0.18em] shrink-0`} style={{ color: C.timber }}>
                      {t.fig}
                    </span>
                    <span className="text-xs md:text-sm leading-snug" style={{ color: 'rgba(242,236,221,0.8)' }}>
                      {t.cap}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cotizar ── */}
      <section id="cotizar" className="scroll-mt-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Cota label="MIDE DOS VECES" />
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold uppercase leading-[0.95] mt-8`} style={{ color: C.carbon }}>
              cotiza tu obra sin moverte de la silla,
            </h2>
            <p className="text-[15px] md:text-lg mt-5 mx-auto max-w-md leading-snug" style={{ color: C.muted }}>
              su ficha de Google los marca abiertos las 24 horas: escribe cuando
              te acomode y cuentan con el dato.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-sm px-7 h-[52px] text-base font-bold mt-8 tap-44 transition-transform active:scale-95"
              style={{ backgroundColor: C.carbon, color: C.papel }}
            >
              Cotizar por WhatsApp
            </a>
            <div className="mt-8">
              <Cota label={BIZ.phoneDisplay} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Terreno ── */}
      <section id="terreno" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal delay={80} className="md:order-last">
            <div
              className="rounded-sm overflow-hidden shadow-[0_18px_44px_-20px_rgba(27,23,16,0.45)]"
              style={{ border: `1.5px solid ${C.carbon}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[360px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold uppercase leading-[0.95]`} style={{ color: C.carbon }}>
              base en San Clemente,
            </h2>
            <p className="text-[15px] md:text-base mt-5 leading-snug max-w-md" style={{ color: C.muted }}>
              {BIZ.address}. El trabajo es en terreno: se coordina la visita por
              WhatsApp y ellos llegan a medir.
            </p>
            <div className="mt-6 space-y-2">
              <p className={`${mono.className} text-[12px] font-semibold tracking-[0.14em] uppercase`} style={{ color: C.carbon }}>
                {BIZ.phoneDisplay}
              </p>
              <p className={`${mono.className} text-[12px] tracking-[0.14em] uppercase`} style={{ color: C.timber }}>
                {BIZ.hours}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-5 rounded-sm text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.carbon, color: C.papel }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-5 rounded-sm text-[15px] font-bold tap-44"
                style={{ color: C.carbon, border: `1.5px solid ${C.carbon}` }}
              >
                Coordinar visita
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.papel, borderTop: `1.5px solid ${C.carbon}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className={`${display.className} text-xl font-bold uppercase`} style={{ color: C.carbon }}>
                {BIZ.name}
              </p>
              <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                {BIZ.address}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.carbon }}>
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="text-sm" style={{ color: C.muted }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block tap-44 font-semibold" style={{ color: C.carbon }}>
                {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-7 leading-relaxed`} style={{ color: C.muted }}>
            Textos de muestra sobre datos reales: dirección, WhatsApp, horario 24
            horas y fotos corresponden a la ficha pública de {BIZ.name} en Google Maps.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Cotiza con ${BIZ.short}`} />
    </main>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline — con bg-ink/90 Chrome serializa
 * color-mix como oklab() y los chequeos de contraste no lo leen.
 */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.timber }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}
