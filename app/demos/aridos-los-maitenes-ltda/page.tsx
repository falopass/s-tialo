import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/libre-franklin/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «ficha de planta» — planilla técnica de obra sobre
 * papel grava, con amarillo de seguridad CAT (el color de la maquinaria
 * en las fotos reales) y puntos de grava como textura. Sin stock: solo
 * las cuatro fotos reales de la ficha y la planta de Google Maps.
 */
const C = {
  papel: '#E7E3DB',
  papelHi: '#F1EEE7',
  asfalto: '#191B1D',
  ambar: '#EFA51B',
  gris: '#4E4A43',
  muted: '#6B6659',
  line: 'rgba(25,27,29,0.2)',
  lineHi: 'rgba(25,27,29,0.55)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'aridos-los-maitenes-ltda',
  title: 'Áridos Los Maitenes Ltda. | Arena y ripio en San Clemente',
  description:
    'Planta de áridos en el sector Queri, San Clemente: arena y ripio con retiro en planta. Horario de oficina y cotizaciones por WhatsApp.',
  image: `${IMG}/cargador.webp`,
})

const NAV_LINKS = [
  { label: 'Material', href: '#material' },
  { label: 'La planta', href: '#planta' },
  { label: 'Ficha', href: '#ficha' },
  { label: 'Cotizar', href: '#cotizar' },
]

const MATERIAL = [
  { num: '01', nombre: 'Arena', nota: 'para mezcla, empedrado y relleno fino' },
  { num: '02', nombre: 'Ripio', nota: 'para hormigón, radier y caminos' },
  { num: '03', nombre: 'Retiro en planta', nota: 'coordinas el retiro o la carga directo por WhatsApp' },
]

const MAQUINAS = [
  { img: 'excavadora.webp', tag: 'extracción', alt: 'Excavadora de Áridos Los Maitenes trabajando en la planta del sector Queri' },
  { img: 'grua.webp', tag: 'maniobra', alt: 'Grúa Grove en la planta de Áridos Los Maitenes, San Clemente' },
  { img: 'queri.webp', tag: 'sector Queri', alt: 'Valle del río Maule en el sector Queri donde opera la planta de áridos' },
]

/** Textura de grava: puntos irregulares como árido en planilla. */
const GRAVA =
  'radial-gradient(rgba(25,27,29,0.13) 1px, transparent 1.6px),' +
  'radial-gradient(rgba(25,27,29,0.09) 1px, transparent 1.4px)'

function WhatsIcon({ color = 'currentColor' }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill={color} aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.4l.9 2.1c.1.2.1.4 0 .6l-.4.6-.5.5c-.2.2-.3.4-.1.7.2.3.8 1.4 1.8 2.2 1.3 1.1 2.3 1.5 2.7 1.6.3.2.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2 .9c.3.2.5.3.6.4 0 .1 0 .6-.2 1.1Z" />
    </svg>
  )
}

/** Franja diagonal de seguridad, como la señalética de la planta. */
function Zebra() {
  return (
    <div
      className="h-2.5 w-full"
      aria-hidden="true"
      style={{
        backgroundImage: `repeating-linear-gradient(-45deg, ${C.ambar} 0 14px, ${C.asfalto} 14px 28px)`,
      }}
    />
  )
}

export default function AridosLosMaitenesPage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.papel, color: C.asfalto }}>
      <BlitzNav
        name={<span className="tracking-tight">{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(231,227,219,0.96)',
          ink: C.asfalto,
          line: C.line,
          btnBg: C.ambar,
          btnInk: C.asfalto,
        }}
      />

      {/* ── Hero: cargador en planta, titular de obra ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden" style={{ backgroundColor: '#101112' }}>
        <Image
          src={`${IMG}/cargador.webp`}
          alt="Cargador frontal CAT de Áridos Los Maitenes cargando material en la planta"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: 'linear-gradient(180deg, rgba(15,16,17,0.55) 0%, rgba(15,16,17,0.15) 40%, rgba(15,16,17,0.88) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14 pt-32">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.28em] uppercase text-balance`} style={{ color: C.ambar }}>
              Planta de áridos · Sector Queri, San Clemente
            </p>
            <h1 className={`${display.className} font-extrabold leading-[1.04] text-[34px] md:text-[56px] mt-4 max-w-3xl`} style={{ color: '#F4F1EA' }}>
              Arena y ripio, directo de la planta a tu obra
            </h1>
            <div className="flex flex-wrap items-center gap-3 mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-bold tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.ambar, color: C.asfalto, borderRadius: '6px' }}
              >
                <WhatsIcon color={C.asfalto} /> Cotizar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                style={{ color: '#F4F1EA', border: '1.5px solid rgba(244,241,234,0.7)', borderRadius: '6px' }}
              >
                Ver en el mapa
              </a>
            </div>
          </Reveal>
        </div>
        <Zebra />
      </section>

      {/* ── Material: planilla numerada ── */}
      <section id="material" className="scroll-mt-20" style={{ backgroundColor: C.papel, backgroundImage: GRAVA, backgroundSize: '26px 26px, 41px 41px' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.26em] uppercase`} style={{ color: C.muted }}>
              lo que sale de la planta
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06] mt-4 max-w-2xl`} style={{ color: C.asfalto }}>
              Material de arrastre para fundaciones, radieres y rellenos
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14">
            {MATERIAL.map((m, i) => (
              <Reveal key={m.num} delay={i * 70}>
                <div className="flex items-baseline gap-4 md:gap-8 py-5 md:py-6" style={{ borderTop: `1.5px solid ${C.lineHi}`, ...(i === MATERIAL.length - 1 ? { borderBottom: `1.5px solid ${C.lineHi}` } : {}) }}>
                  <span className={`${mono.className} text-sm font-bold shrink-0`} style={{ color: C.ambar, WebkitTextStroke: `0.5px ${C.asfalto}` }}>
                    {m.num}
                  </span>
                  <div className="flex-1 flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                    <span className={`${display.className} font-bold text-2xl md:text-4xl leading-tight`} style={{ color: C.asfalto }}>
                      {m.nombre}
                    </span>
                    <span className="text-sm md:text-[15px]" style={{ color: C.gris }}>
                      {m.nota}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <p className={`${mono.className} text-[11px] tracking-[0.12em] uppercase mt-6`} style={{ color: C.muted }}>
              la ficha registra «arenas y ripios»; para volúmenes y despacho, pregunta directo por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La planta: máquinas y valle ── */}
      <section id="planta" className="scroll-mt-20" style={{ backgroundColor: C.asfalto }}>
        <Zebra />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06] max-w-2xl`} style={{ color: C.papel }}>
              La planta trabaja a orilla del Maule
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-relaxed" style={{ color: 'rgba(231,227,219,0.7)' }}>
              Maquinaria propia en el sector Queri: extracción, carga y
              maniobra sobre el mismo valle donde nace el material.
            </p>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {MAQUINAS.map((m, i) => (
              <Reveal key={m.img} delay={i * 70} className={i === 0 ? 'col-span-2 md:col-span-2' : 'col-span-1'}>
                <figure className="m-0 h-full">
                  <div className="relative overflow-hidden rounded-lg aspect-[4/3]" style={{ border: '1px solid rgba(231,227,219,0.18)' }}>
                    <Image src={`${IMG}/${m.img}`} alt={m.alt} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <figcaption className={`${mono.className} text-[10px] tracking-[0.18em] uppercase mt-2.5`} style={{ color: C.ambar }}>
                    {m.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={210} className="col-span-1">
              <div className="h-full rounded-lg p-5 flex flex-col justify-between" style={{ backgroundColor: C.ambar }}>
                <span className={`${mono.className} text-[10px] tracking-[0.18em] uppercase font-bold`} style={{ color: C.asfalto }}>
                  oficina
                </span>
                <div className="mt-6">
                  <p className={`${display.className} font-bold text-2xl md:text-3xl leading-tight`} style={{ color: C.asfalto }}>
                    Lun a vie 8 a 17:30
                  </p>
                  <p className="text-sm mt-2 leading-snug" style={{ color: 'rgba(25,27,29,0.8)' }}>
                    con colación de 12:00 a 13:30 · sábado hasta las 13:00
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseña real ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.papelHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
          <Reveal>
            <div className="text-center md:text-left">
              <p className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none`} style={{ color: C.asfalto }}>
                {String(BIZ.rating).replace('.', ',')}
              </p>
              <Stars value={BIZ.rating} color={C.ambar} className="w-5 h-5" />
              <p className={`${mono.className} text-[10px] tracking-[0.16em] uppercase mt-3`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <blockquote className="m-0 pl-5 md:pl-8" style={{ borderLeft: `3px solid ${C.ambar}` }}>
              <p className={`${display.className} text-xl md:text-3xl leading-snug`} style={{ color: C.asfalto }}>
                “Buena calidad de áridos y buenos precios.”
              </p>
              <footer className={`${mono.className} text-[11px] tracking-[0.12em] uppercase mt-4`} style={{ color: C.muted }}>
                Jorge Robert Muñoz Peña · reseña en Google
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Ficha y llegada ── */}
      <section id="ficha" className="scroll-mt-20" style={{ backgroundColor: C.papel, backgroundImage: GRAVA, backgroundSize: '26px 26px, 41px 41px' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.26em] uppercase`} style={{ color: C.muted }}>
              ficha técnica
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06] mt-4`} style={{ color: C.asfalto }}>
              Áridos Los Maitenes Ltda.
            </h2>
            <dl className="mt-8">
              {[
                ['Sector', 'Queri, San Clemente — Región del Maule'],
                ['Teléfono / WhatsApp', BIZ.phoneDisplay],
                ['Horario oficina', 'Lun a vie 8:00–12:00 y 13:30–17:30 · sáb 8:00–13:00'],
              ].map(([k, v]) => (
                <div key={k} className="py-3.5" style={{ borderTop: `1.5px dashed ${C.lineHi}` }}>
                  <dt className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.muted }}>{k}</dt>
                  <dd className="m-0 text-[15px] md:text-base font-semibold mt-1 leading-snug" style={{ color: C.asfalto }}>{v}</dd>
                </div>
              ))}
            </dl>
            <div id="cotizar" className="flex flex-wrap gap-3 mt-8 scroll-mt-20">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 h-12 text-[15px] font-bold tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.asfalto, color: C.ambar, borderRadius: '6px' }}
              >
                <WhatsIcon color={C.ambar} /> Cotizar material
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 h-12 text-[15px] font-semibold tap-44"
                style={{ color: C.asfalto, border: `1.5px solid ${C.asfalto}`, borderRadius: '6px' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-lg overflow-hidden shadow-xl md:sticky md:top-24" style={{ border: `1.5px solid ${C.asfalto}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[380px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <p className={`${display.className} font-bold text-lg`} style={{ color: C.papel }}>{BIZ.name}</p>
              <p className="text-sm mt-1 leading-snug" style={{ color: 'rgba(231,227,219,0.65)' }}>{BIZ.address} · {BIZ.region}</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.papel }}>{l.label}</a>
              ))}
            </nav>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 font-semibold text-sm" style={{ color: C.ambar }}>
              {BIZ.phoneDisplay}
            </a>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-6 leading-relaxed`} style={{ color: 'rgba(231,227,219,0.55)' }}>
            Textos de muestra sobre datos reales: sector, teléfono, horario,
            nota de Google y fotos corresponden a la ficha pública de {BIZ.name}.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Cotizar en ${BIZ.short}`} />
    </main>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.94)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">Sitiazo</a>{' '}
          para {BIZ.name}: así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}
