import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

/**
 * Dirección de arte: «cartel de galpón» — asfalto y concreto con rojo
 * señal del levantador y amarillo de pizarra de taller; Anton
 * condensada como letra de letrero, Barlow para el texto y Space Mono
 * para el remito. Estructura de pizarra: hero a sangre, cinta de
 * servicios y lista numerada tipo ticket.
 */
const C = {
  asfalto: '#17181B',
  asfalto2: '#22242A',
  concreto: '#ECE9E2',
  panel: '#F5F2EA',
  rojo: '#C22417',
  amarillo: '#F5C518',
  ink: '#17181B',
  muted: '#4E5359',
  mutedDark: '#9AA0A8',
  line: 'rgba(23,24,27,0.18)',
  lineDark: 'rgba(236,233,226,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'bodega-liquidadora-neumaticos',
  title: 'Bodega Liquidadora de Neumáticos — Talca',
  description:
    'Neumáticos a precio de bodega en 15 Oriente 1043, Talca: venta, montaje, balanceo, vulcanización y envíos a regiones. Cotiza por WhatsApp.',
  image: `${IMG}/pasillo.webp`,
})

const NAV_LINKS = [
  { label: 'La bodega', href: '#bodega' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const SERVICIOS_TICKER = [
  'Neumáticos',
  'Montaje',
  'Balanceo',
  'Vulcanización',
  'Alineación',
  'Llantas',
  'Lubricantes',
  'Fierros',
]

const SERVICIOS = [
  {
    n: '01',
    t: 'Venta de neumáticos',
    d: 'Stock de bodega con precios bajo el valor de mercado. Consulta la medida de tu vehículo.',
  },
  {
    n: '02',
    t: 'Montaje y balanceo',
    d: 'Montaje en el taller con máquina balanceadora: sales con el auto listo.',
  },
  {
    n: '03',
    t: 'Alineación',
    d: 'El auto queda en el levantador y alineado para que el neumático dure lo que tiene que durar.',
  },
  {
    n: '04',
    t: 'Vulcanización',
    d: 'Reparación y vulcanizado de neumáticos en el mismo local.',
  },
  {
    n: '05',
    t: 'Llantas, fierros y lubricantes',
    d: 'También llantas, fierros y lubricantes — todo en una sola bodega.',
  },
  {
    n: '06',
    t: 'Envíos a regiones',
    d: 'Clientes han recibido sus neumáticos en otras regiones sin costo de envío.',
  },
]

const RESENAS = [
  {
    q: 'Excelente atención, muy buenos precios, 100% recomendable.',
    who: 'Angelo González Grandon',
    where: 'Reseña en Google',
  },
  {
    q: 'Precios muy convenientes. Enviaron los productos a Valparaíso sin costo. Precios bajo el valor de mercado. Excelente atención.',
    who: 'Jorge H. Farfán',
    where: 'Reseña en Google',
  },
  {
    q: 'Increíble lugar, excelentes precios y gran atención, muy recomendable.',
    who: 'Luciano Zamora Rojas',
    where: 'Reseña en Google',
  },
]

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: C.amarillo }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function BodegaNeumaticosPage() {
  return (
    <div
      className={`${body.className} bln min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.concreto, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .bln a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={<span className="uppercase tracking-wide">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(236,233,226,0.96)',
          ink: C.asfalto,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre: el pasillo de la bodega ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.asfalto }}>
        <Image
          src={`${IMG}/pasillo.webp`}
          alt={`Pasillo del galpón de ${BIZ.name} con torres de neumáticos`}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(23,24,27,0.25) 0%, rgba(23,24,27,0.88) 82%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.amarillo }}>
              {BIZ.address} · {BIZ.city} · {BIZ.razon}
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className={`${display.className} uppercase text-[44px] md:text-[88px] leading-[0.95] mb-6`} style={{ color: C.concreto }}>
              Neumáticos a<br />
              precio <span style={{ color: C.amarillo }}>de bodega</span>
            </h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: 'rgba(236,233,226,0.88)' }}>
              Venta, montaje, balanceo y vulcanización en el mismo galpón.
              Cotiza tu medida y retira en {BIZ.city} o pide envío a regiones.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mb-7">
              <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: C.concreto }}>
                <Stars value={4.5} color={C.amarillo} />
                {BIZ.googleRating} · {BIZ.googleReviews} reseñas en Google
              </span>
              <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.mutedDark }}>
                abierto hasta las {BIZ.cierre} hrs
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase inline-flex items-center justify-center h-[52px] px-8 text-lg tracking-wide transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Cotiza por WhatsApp
              </a>
              <a
                href="#bodega"
                className="inline-flex items-center justify-center h-[52px] px-7 text-sm font-semibold border-2 transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(236,233,226,0.55)', color: C.concreto }}
              >
                Ver la bodega
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de servicios (pizarra del taller) ── */}
      <section aria-label="Servicios" style={{ backgroundColor: C.amarillo, borderTop: `3px solid ${C.asfalto}`, borderBottom: `3px solid ${C.asfalto}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1">
          {SERVICIOS_TICKER.map((s) => (
            <span key={s} className={`${display.className} uppercase text-sm md:text-base tracking-wide`} style={{ color: C.asfalto }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* ── La bodega: mosaico del galpón ── */}
      <section id="bodega" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
                  El galpón
                </p>
                <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight`} style={{ color: C.asfalto }}>
                  Torres de stock y<br className="hidden md:block" /> taller en el mismo lugar
                </h2>
              </div>
              <p className="text-sm md:text-base max-w-xs" style={{ color: C.muted }}>
                Fotos reales del local: el pasillo de neumáticos, el
                levantador y la alineadora.
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] gap-3 md:gap-4">
            <Reveal className="col-span-2 md:col-span-1 md:row-span-2">
              <figure className="relative h-full min-h-[280px] md:min-h-0 overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/taller.webp`}
                  alt={`Interior del taller de ${BIZ.name} con vehículos en el levantador`}
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5`} style={{ backgroundColor: 'rgba(23,24,27,0.85)', color: C.concreto }}>
                  El taller
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure className="relative aspect-[4/3] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/alineacion.webp`}
                  alt={`Auto rojo en la alineadora de ${BIZ.name}`}
                  fill
                  sizes="(min-width: 768px) 28vw, 45vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5`} style={{ backgroundColor: 'rgba(23,24,27,0.85)', color: C.concreto }}>
                  Alineación
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative aspect-[4/3] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/rueda.webp`}
                  alt={`Rueda en la máquina de montaje de ${BIZ.name}`}
                  fill
                  sizes="(min-width: 768px) 28vw, 45vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5`} style={{ backgroundColor: 'rgba(23,24,27,0.85)', color: C.concreto }}>
                  Montaje
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100} className="col-span-2">
              <figure className="relative aspect-[21/9] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/frontis.webp`}
                  alt={`Frontis de ${BIZ.name} con el letrero y el aviso Mobil en 15 Oriente 1043`}
                  fill
                  sizes="(min-width: 768px) 60vw, 90vw"
                  className="object-cover"
                />
                <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5`} style={{ backgroundColor: 'rgba(23,24,27,0.85)', color: C.concreto }}>
                  El frontis · {BIZ.address}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios: remito numerado ── */}
      <section id="servicios" className="py-14 md:py-20" style={{ backgroundColor: C.panel, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
              El remito
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight mb-10`} style={{ color: C.asfalto }}>
              Todo lo que hace la bodega
            </h2>
          </Reveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <div
                  className="grid grid-cols-[52px_1fr] md:grid-cols-[80px_1fr_auto] gap-4 items-baseline py-5 border-t"
                  style={{ borderColor: C.line }}
                >
                  <span className={`${mono.className} text-sm`} style={{ color: C.rojo }}>
                    {s.n}
                  </span>
                  <div>
                    <p className={`${display.className} uppercase text-lg md:text-2xl tracking-wide`} style={{ color: C.asfalto }}>
                      {s.t}
                    </p>
                    <p className="text-sm md:text-base leading-relaxed mt-1 max-w-2xl" style={{ color: C.muted }}>
                      {s.d}
                    </p>
                  </div>
                  <span aria-hidden="true" className={`${display.className} hidden md:block uppercase text-sm tracking-wide`} style={{ color: C.muted }}>
                    {BIZ.short}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.amarillo }}>
              Lo que dicen los clientes
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight mb-10`} style={{ color: C.concreto }}>
              Buenos precios, buena atención
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={i * 80}>
                <figure
                  className="h-full flex flex-col justify-between p-6"
                  style={{ backgroundColor: C.asfalto2, border: `1px solid ${C.lineDark}`, borderTop: `4px solid ${C.amarillo}` }}
                >
                  <blockquote className="text-[15px] md:text-base leading-relaxed mb-6" style={{ color: C.concreto }}>
                    «{r.q}»
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-semibold" style={{ color: C.concreto }}>
                      {r.who}
                    </p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.mutedDark }}>
                      {r.where}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar: dirección + mapa ── */}
      <section id="llegar" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rojo }}>
              Encuéntralos
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-tight mb-6`} style={{ color: C.asfalto }}>
              15 Oriente 1043, Talca
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: C.muted }}>
              Atención hasta las {BIZ.cierre} hrs. Cotiza la medida de tu
              neumático por WhatsApp y retira en el local, o consulta por
              envío a tu región.
            </p>
            <div className="flex flex-wrap gap-3 mb-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase inline-flex items-center justify-center h-[52px] px-8 text-lg tracking-wide transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Cotiza por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 text-sm font-semibold border-2 transition-colors tap-44"
                style={{ borderColor: C.asfalto, color: C.asfalto }}
              >
                Cómo llegar
              </a>
            </div>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay} · {BIZ.razon} · RUT {BIZ.rut}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden min-h-[300px]" style={{ border: `3px solid ${C.asfalto}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asfalto, color: C.concreto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-end justify-between gap-5" style={{ borderColor: C.lineDark }}>
          <div>
            <p className={`${display.className} uppercase text-2xl mb-1.5`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.mutedDark }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              {BIZ.razon}
            </address>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.mutedDark }} aria-label="Pie de página">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: '#B9BDB4' }}>
            Los textos descriptivos son de muestra; el WhatsApp, la
            dirección, los servicios del letrero, el horario y las reseñas
            citadas son reales de su ficha de Google.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
