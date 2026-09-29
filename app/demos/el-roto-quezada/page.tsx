import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE } from '@/lib/config'
import { Reveal, BlitzNav, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  print: '#F2ECDC',
  printHi: '#F8F4E8',
  ink: '#1C1710',
  muted: '#5E5545',
  sello: '#8E2B1F',
  line: 'rgba(28,23,16,0.28)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-roto-quezada',
  title: 'El Roto Quezada — el comedor que se tomó en serio el chiste',
  description:
    'Archivo del restaurante El Roto Quezada en Río Claro, Maule: su historia con el personaje de Condorito, el comedor en fotos reales y las 138 opiniones que dejó en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La historia', href: '#historia' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'Los lectores', href: '#resenas' },
  { label: 'Dónde estuvo', href: '#ubicacion' },
]

const RESENAS = [
  {
    nombre: 'Raziel Avernus',
    fecha: 'Google',
    estrellas: 5,
    texto: 'Buen servicio, buena comida y aún mejores precios.',
  },
  {
    nombre: 'Jessica Basaure',
    fecha: 'Google',
    estrellas: 5,
    texto: 'Muy agradable el lugar. Buena atención, rica comida y buen precio.',
  },
  {
    nombre: 'Ramón Díaz Santacruz',
    fecha: 'Google',
    estrellas: 4,
    texto:
      'Rico, barato, excelente atención. Sólo pensé que tendría una ambientación más a tono con su nombre.',
  },
  {
    nombre: 'Ignacio',
    fecha: 'Google',
    estrellas: 4,
    texto: 'Un lugar agradable, con estacionamiento al interior.',
  },
]

const ARCHIVO = [
  { src: 'comedor', alt: 'El comedor del Roto Quezada con sus mesas servidas y el periódico enmarcado en la pared', ratio: 'aspect-[3/4]' },
  { src: 'mesa', alt: 'Mesa del restaurante con mantel, plato servido y cubiertos', ratio: 'aspect-[4/3]' },
  { src: 'salon', alt: 'Vista del salón comedor con mesas de madera y sillas tapizadas', ratio: 'aspect-[4/3]' },
]

/* Titular de sección con filete de prensa */
function Seccion({ kicker, titulo }: { kicker: string; titulo: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.sello }}>
        {kicker}
      </p>
      <h2
        className={`${display.className} leading-[0.95] text-[clamp(2.2rem,7vw,4.2rem)]`}
        style={{ color: C.ink, fontWeight: 900 }}
      >
        {titulo}
      </h2>
      <div className="mt-5 border-t-2" style={{ borderColor: C.ink }} />
      <div className="mt-1 border-t" style={{ borderColor: C.ink }} />
    </div>
  )
}

export default function ElRotoQuezadaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.print, color: C.ink }}
    >
      <style>{`
        .rq-link { transition: color .18s ease; }
        .rq-link:hover { color: ${C.sello}; }
        .rq-link:focus-visible { outline: 3px solid ${C.sello}; outline-offset: 3px; }
        .rq-rule { border-color: ${C.line}; }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} tracking-wide`} style={{ fontWeight: 900 }}>El Roto Quezada</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={MAPS_URL}
        ctaLabel="Ver en Maps"
        theme={{
          over: 'light',
          bar: 'rgba(242,236,220,0.96)',
          ink: C.ink,
          line: 'rgba(28,23,16,0.18)',
          btnBg: C.sello,
          btnInk: C.printHi,
        }}
      />

      {/* ── Portada de diario: el pliego completo ── */}
      <section id="inicio" className="pt-24 md:pt-28">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          {/* Cabecera del diario */}
          <Reveal>
            <div className={`${mono.className} flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[10px] md:text-xs uppercase tracking-[0.24em] border-b pb-2`} style={{ color: C.muted, borderColor: C.ink }}>
              <span>Río Claro · Región del Maule</span>
              <span className="hidden sm:inline">Edición de archivo</span>
              <span style={{ color: C.sello }}>Cerrado permanentemente</span>
            </div>
            <h1
              className={`${display.className} text-center uppercase leading-none py-6 md:py-8 text-[clamp(3rem,11vw,8rem)]`}
              style={{ fontWeight: 900, color: C.ink }}
            >
              El Roto
              <br />
              Quezada
            </h1>
            <div className="border-t-2" style={{ borderColor: C.ink }} />
            <div className="mt-1 border-t" style={{ borderColor: C.ink }} />
          </Reveal>

          {/* Pliego: crónica + foto de portada */}
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10">
            <Reveal className="md:col-span-7">
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.sello }}>
                Comedor de campo · {BIZ.rating} ★ en Google · {BIZ.reviews} opiniones
              </p>
              <h2
                className={`${display.className} leading-[1.02] text-3xl md:text-5xl mb-5`}
                style={{ fontWeight: 800, color: C.ink }}
              >
                El comedor que se tomó
                en serio el chiste más
                famoso de Chile
              </h2>
              <div className="md:columns-2 gap-6 text-sm md:text-[15px] leading-relaxed space-y-4" style={{ color: C.muted }}>
                <p>
                  <span className={`${display.className} float-left text-6xl md:text-7xl leading-[0.8] pr-2 pt-1`} style={{ fontWeight: 900, color: C.sello }}>A</span>
                  la salida de Río Claro, camino a Cumpeo, funcionó durante
                  años un restaurante con un nombre que todo chileno
                  reconoce al oírlo: el del «roto Quezada», el personaje del
                  chiste que la revista Condorito volvió patrimonio oral.
                </p>
                <p>
                  El local lo hacía literal: en su pared colgaba enmarcada
                  la página de Memoria Chilena que cuenta esa historia,
                  y el comedor servía cocina de fondo — pailas, platos
                  caseros, precios de camino — que los viajeros de la
                  ruta todavía recuerdan en las reseñas.
                </p>
                <p>
                  La ficha de Google hoy marca el cierre permanente. Esta
                  página es el archivo del local: su comedor, su historia
                  y la voz de quienes almorzaron ahí.
                </p>
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <figure className="border p-2 pb-0" style={{ borderColor: C.ink, backgroundColor: C.printHi }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Fachada del restaurante El Roto Quezada en Río Claro con su letrero y la entrada del comedor"
                    fill
                    priority
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} px-1 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex justify-between gap-3`} style={{ color: C.muted }}>
                  <span>Fachada del local, sector Cumpeo</span>
                  <span className="shrink-0">Foto archivo</span>
                </figcaption>
              </figure>
              <div className="mt-5 border-2 p-4 md:p-5 text-center" style={{ borderColor: C.sello }}>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-1.5`} style={{ color: C.sello }}>
                  Última hora
                </p>
                <p className={`${display.className} italic text-lg md:text-xl leading-snug`} style={{ fontWeight: 700, color: C.ink }}>
                  «Rico, barato, excelente atención»
                </p>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
                  Ramón Díaz Santacruz · reseña de Google
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La historia: la lámina del roto Quezada ── */}
      <section id="historia" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.printHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Seccion kicker="Sección · Historia" titulo="La página que colgaba en la pared" />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
            <Reveal className="md:col-span-5">
              <figure className="border p-2 pb-0" style={{ borderColor: C.ink, backgroundColor: C.print }}>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`${IMG}/periodico.webp`}
                    alt="La lámina enmarcada de Memoria Chilena con la historia del roto Quezada que el restaurante exhibía en su comedor"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} px-1 py-2.5 text-[10px] md:text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  La lámina de Memoria Chilena, tal cual colgaba en el comedor
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:col-span-7">
              <Reveal delay={90}>
                <h3 className={`${display.className} italic leading-tight text-2xl md:text-4xl mb-5`} style={{ fontWeight: 700, color: C.ink }}>
                  El chiste que se volvió apellido
                </h3>
              </Reveal>
              <Reveal delay={140}>
                <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                  <p>
                    El «roto Quezada» nació en un chiste de la escuela del
                    humor gráfico chileno — el de la señora elegante que
                    pregunta «¿y qué fue del roto Quezada?». Pepo lo
                    instaló en Condorito y Chile entero lo repitió hasta
                    volverlo parte del idioma.
                  </p>
                  <p>
                    Este restaurante hizo del apellido una casa de comidas:
                    el nombre en el letrero, la lámina original de Memoria
                    Chilena enmarcada junto a las mesas y una cocina de
                    pailas y platos de fondo para la gente de la ruta.
                  </p>
                  <p>
                    Las reseñas lo resumen igual de directo que el chiste:
                    «buena comida y aún mejores precios».
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <figure className="relative overflow-hidden border mt-7 aspect-[16/10]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/paila.webp`}
                    alt="Paila de cocina chilena servida en el restaurante, con cazuela y acompañamientos"
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.14em] mt-2.5`} style={{ color: C.muted }}>
                  La cocina: pailas y platos de fondo — foto de la ficha
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El comedor: tríptico de archivo ── */}
      <section id="comedor" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Seccion kicker="Sección · Fotos de archivo" titulo="El comedor, como quedó en la memoria" />
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {ARCHIVO.map((f, i) => (
            <Reveal key={f.src} delay={i * 80} className={i === 0 ? 'row-span-2 md:row-span-1' : ''}>
              <figure className="border p-1.5 pb-0 h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.printHi }}>
                <div className={`relative overflow-hidden flex-1 ${i === 0 ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={`${IMG}/${f.src}.webp`}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} px-1 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Archivo · Google Maps
                </figcaption>
              </figure>
            </Reveal>
          ))}
          <Reveal delay={220} className="col-span-2 md:col-span-1">
            <figure className="border p-1.5 pb-0 h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.printHi }}>
              <div className="relative overflow-hidden flex-1 aspect-[16/9] md:aspect-[4/3]">
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Interior del comedor del Roto Quezada con sus mesas alineadas y decoración de madera"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} px-1 py-2 text-[9px] md:text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Archivo · Google Maps
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Los lectores escriben ── */}
      <section id="resenas" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.printHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Seccion kicker="Sección · Cartas al director" titulo="Lo que dejaron escrito los comensales" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 70}>
                <figure className="border-t-2 pt-4" style={{ borderColor: C.ink }}>
                  <Stars value={r.estrellas} color={C.sello} className="w-3.5 h-3.5" />
                  <blockquote className={`${display.className} italic text-lg md:text-xl leading-snug mt-3 mb-4`} style={{ fontWeight: 600, color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                    <span style={{ color: C.ink }}>{r.nombre}</span>
                    <span className="shrink-0">{r.fecha}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} rq-link inline-block mt-8 text-xs md:text-sm uppercase tracking-[0.16em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.sello, textDecorationColor: 'rgba(142,43,31,0.4)' }}
            >
              Las {BIZ.reviews} opiniones completas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estuvo ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Seccion kicker="Sección · Plano" titulo="Dónde estuvo el Roto Quezada" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <address className="not-italic">
                <p className={`${display.className} leading-tight text-2xl md:text-3xl mb-2`} style={{ fontWeight: 800, color: C.ink }}>
                  {BIZ.address}
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.muted }}>
                  Sector Cumpeo, camino interior de la comuna.
                  La ficha registra el teléfono{' '}
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                    {BIZ.phoneDisplay}
                  </a>.
                </p>
              </address>
              <div className="border-2 px-4 py-3 inline-block" style={{ borderColor: C.sello }}>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.sello }}>
                  Estado en Google: cerrado permanentemente
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="md:col-span-7">
            <div className="relative overflow-hidden border aspect-[4/3] min-h-[300px]" style={{ borderColor: C.ink, backgroundColor: C.printHi }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Colofón ── */}
      <footer style={{ backgroundColor: C.ink, color: C.print }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase tracking-wide text-xl md:text-2xl mb-1.5`} style={{ fontWeight: 900 }}>
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,236,220,0.6)' }}>
            {BIZ.address} · teléfono de registro {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,236,220,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(242,236,220,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.print }}>
              Sitiazo
            </a>{' '}
            como archivo del {BIZ.name}. Los datos, las reseñas y las fotos
            son los reales de su ficha de Google, que hoy registra el local
            como cerrado permanentemente.
          </p>
        </div>
      </footer>
    </div>
  )
}
