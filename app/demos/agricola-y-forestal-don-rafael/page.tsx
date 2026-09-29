import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  waLink,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

// «Don Rafael Olives»: serif de etiqueta + mono de ficha técnica
const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
  ],
})
const displayIt = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#F2EEE3',
  card: '#FBF9F2',
  ink: '#1B2113',
  muted: '#5D6250',
  line: 'rgba(27,33,19,0.14)',
  oliva: '#3A4423',
  olivaDeep: '#161B0D',
  oro: '#B48A2E',
  oroLight: '#D9B65C',
  star: '#C99A2E',
}

export const metadata: Metadata = demoMetadata({
  slug: 'agricola-y-forestal-don-rafael',
  title: 'Agrícola y Forestal Don Rafael — Aceite de oliva en Molina',
  description:
    'Aceite de oliva extra virgen premiado y sala de ventas en Camino Las Mercedes, Molina. Líneas 8 Olivos, Alto Lontué y Monjes de Lontué.',
  image: `${IMG}/vacas.webp`,
})

const NAV_LINKS = [
  { label: 'El anaquel', href: '#anaquel' },
  { label: 'El fundo', href: '#fundo' },
  { label: 'Premios', href: '#premios' },
  { label: 'Llegar', href: '#donde' },
]

const LINEAS = [
  {
    src: `${IMG}/olivos8.webp`,
    alt: 'Botella de aceite de oliva 8 Olivos Premium Blend de Agrícola Don Rafael',
    nombre: '8 Olivos',
    linea: 'Premium Blend — EVOO of the Year 2014',
  },
  {
    src: `${IMG}/alto-lontue.webp`,
    alt: 'Botella de aceite de oliva Alto Lontué Extra Virgen, línea de Don Rafael',
    nombre: 'Alto Lontué',
    linea: 'Extra virgen',
  },
  {
    src: `${IMG}/monjes-lontue.webp`,
    alt: 'Botella de aceite de oliva Monjes de Lontué Extra Virgen, línea de Don Rafael',
    nombre: 'Monjes de Lontué',
    linea: 'Extra virgen',
  },
]

const SABORES = [
  'Ají Verde',
  'Ají Cacho de Cabra',
  'Merkén',
  'Rocoto',
  'Laurel',
  'Tomillo',
  'Romero',
  'Orégano',
  'Naranja',
  'Limón',
  'Jengibre',
]

const PREMIOS = [
  { anio: '2014', premio: 'EVOO of the Year', ente: 'World Ranking Extra Virgin Olive Oils (WREVOO)' },
  { anio: '2014', premio: 'Best in Class', ente: 'New York International Olive Oil Competition' },
  { anio: '2014–16', premio: 'Prestige Gold', ente: 'Terraolivo, Israel' },
  { anio: '2010', premio: 'Sol d’Oro — fruttato leggero', ente: 'Verona, Italia' },
  { anio: '—', premio: 'Ganador Olivinus', ente: 'Concurso internacional de aceite de oliva' },
]

const REVIEWS = [
  {
    name: 'Paola Navarro',
    text: 'Lugar agradable. Yo compro el aceite de oliva hace 6 años aproximadamente. El aceite es de excelente calidad; no es barato pero como es bueno y me gusta. Uno al estar en la sala de ventas puede ver las instalaciones a través de ventanales.',
    stars: 5,
  },
  {
    name: 'Manuel Gutierrez',
    text: 'Excelente aceite de oliva.',
    stars: 5,
  },
  {
    name: 'Pablo Rojas',
    text: 'Muy buen aceite de oliva, aunque si no eres de cerca sale lo mismo que comprar en el súper.',
    stars: 4,
  },
]

function ShelfLine() {
  return (
    <div
      aria-hidden="true"
      className="h-[6px] w-full rounded-full"
      style={{
        background: `linear-gradient(180deg, ${C.oro} 0%, #6E5218 100%)`,
        boxShadow: '0 6px 14px rgba(27,33,19,0.35)',
      }}
    />
  )
}

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold text-xl tracking-wide`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(242,238,227,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.oliva,
          btnInk: '#F2EEE3',
        }}
        ctaLabel="WhatsApp"
      />

      {/* ── Hero: etiqueta sobre el fundo ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.olivaDeep }}
      >
        <Image
          src={`${IMG}/vacas.webp`}
          alt="Vacas pastando en el fundo de Agrícola y Forestal Don Rafael, en Molina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(22,27,13,0.68) 0%, rgba(22,27,13,0.34) 45%, rgba(22,27,13,0.94) 100%)',
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-8 pt-36 pb-14 md:pb-20">
          <Reveal>
            <div className="inline-block bg-[#FBF9F2] rounded-lg px-5 py-4 mb-7 shadow-xl">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real del sitio archivado de la marca */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo Don Rafael Olives, marca de aceite de oliva de Molina"
                className="h-12 md:h-16 w-auto"
              />
            </div>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] font-semibold mb-4`}
              style={{ color: 'rgba(242,238,227,0.8)' }}
            >
              Aceite de oliva extra virgen · Camino Las Mercedes, Molina
            </p>
            <h1
              className={`${display.className} font-semibold leading-[1.02] text-[clamp(2.6rem,8.5vw,5.25rem)] mb-5 max-w-4xl`}
              style={{ color: '#F2EEE3' }}
            >
              El aceite que nace
              <br />
              <span className={displayIt.className} style={{ color: C.oroLight }}>
                en Lontué.
              </span>
            </h1>
            <p
              className="max-w-xl text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(242,238,227,0.88)' }}
            >
              Del fundo a la botella: líneas premiadas y una sala de ventas
              donde el aceite se compra mirando la almazara por los ventanales.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-semibold tracking-[0.08em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.oro, color: '#161B0D' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#anaquel"
                className={`${display.className} uppercase font-semibold tracking-[0.08em] text-sm md:text-base px-7 py-3 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ borderColor: 'rgba(242,238,227,0.5)', color: '#F2EEE3' }}
              >
                Ver el anaquel
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.oroLight} className="w-4 h-4" />
              <span
                className={`${mono.className} text-xs md:text-sm`}
                style={{ color: 'rgba(242,238,227,0.85)' }}
              >
                {BIZ.rating.toString().replace('.', ',')} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El anaquel de la sala de ventas ── */}
      <section id="anaquel" className="scroll-mt-20" style={{ backgroundColor: C.olivaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between gap-6 mb-12">
              <h2
                className={`${display.className} font-semibold leading-[1.02] text-4xl md:text-6xl`}
                style={{ color: '#F2EEE3' }}
              >
                El anaquel de la
                <br />
                <span className={displayIt.className} style={{ color: C.oroLight }}>
                  sala de ventas
                </span>
              </h2>
              <p
                className="max-w-sm text-sm md:text-base leading-relaxed mt-4 md:mt-0 md:text-right"
                style={{ color: 'rgba(242,238,227,0.75)' }}
              >
                Las tres líneas del fundo, tal como están en la repisa de la
                tienda de Las Mercedes.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-6 md:gap-10 items-end">
            {LINEAS.map((l, i) => (
              <Reveal key={l.nombre} delay={i * 100}>
                <figure className="text-center">
                  <div className="relative mx-auto h-[300px] md:h-[360px] w-full max-w-[220px]">
                    <Image
                      src={l.src}
                      alt={l.alt}
                      fill
                      className="object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.5)]"
                      sizes="(min-width: 768px) 220px, 60vw"
                    />
                  </div>
                  <ShelfLine />
                  <figcaption className="pt-4">
                    <p
                      className={`${display.className} font-semibold text-2xl md:text-3xl leading-tight`}
                      style={{ color: '#F2EEE3' }}
                    >
                      {l.nombre}
                    </p>
                    <p
                      className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-1.5`}
                      style={{ color: 'rgba(242,238,227,0.7)' }}
                    >
                      {l.linea}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160}>
            <div className="mt-14 border-t pt-8" style={{ borderColor: 'rgba(242,238,227,0.2)' }}>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.22em] font-semibold mb-4`}
                style={{ color: C.oroLight }}
              >
                8 Olivos saborizados — macerados con la fruta
              </p>
              <ul className="flex flex-wrap gap-2">
                {SABORES.map((s) => (
                  <li
                    key={s}
                    className={`${mono.className} text-xs md:text-sm px-3.5 py-1.5 rounded-full border`}
                    style={{ borderColor: 'rgba(242,238,227,0.3)', color: '#F2EEE3' }}
                  >
                    {s}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm max-w-2xl leading-relaxed" style={{ color: 'rgba(242,238,227,0.7)' }}>
                Sin saborizantes ni aromatizantes artificiales: los vegetales se
                mezclan con la aceituna durante el proceso.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El fundo ── */}
      <section id="fundo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2
            className={`${display.className} font-semibold leading-[1.02] text-4xl md:text-6xl mb-4`}
            style={{ color: C.ink }}
          >
            El fundo en{' '}
            <span className={displayIt.className} style={{ color: C.oliva }}>
              Campos de Lontué
            </span>
          </h2>
          <p className="max-w-2xl text-sm md:text-base leading-relaxed mb-10" style={{ color: C.muted }}>
            Olivares, ganado y almazara en un mismo predio de Molina: la
            trazabilidad completa del aceite que se vende en la sala.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          <Reveal>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={`${IMG}/fundo.webp`}
                alt="Olivares y vivero del fundo de Agrícola y Forestal Don Rafael"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <figcaption
                className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(22,27,13,0.8)', color: '#F2EEE3' }}
              >
                Olivares y vivero
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={90}>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={`${IMG}/aceite.webp`}
                alt="Aceite de oliva Don Rafael servido en un pocillo de vidrio con aceitunas"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <figcaption
                className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(22,27,13,0.8)', color: '#F2EEE3' }}
              >
                Del fruto al pocillo
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={180}>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src={`${IMG}/ensalada.webp`}
                alt="Aceite de oliva 8 Olivos cayendo sobre una ensalada"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
              <figcaption
                className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(22,27,13,0.8)', color: '#F2EEE3' }}
              >
                A la mesa
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Premios: el diploma y el palmarés ── */}
      <section id="premios" className="scroll-mt-20" style={{ backgroundColor: C.oliva }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <figure
              className="relative overflow-hidden rounded-xl border-4 shadow-2xl"
              style={{ borderColor: C.oro }}
            >
              <Image
                src={`${IMG}/premio-evoo.webp`}
                alt="Diploma WREVOO: 8 Olivos Blend, EVOO of the Year 2014, Agrícola y Forestal Don Rafael"
                width={1200}
                height={849}
                className="w-full h-auto"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className={`${display.className} font-semibold leading-[1.05] text-4xl md:text-5xl mb-3`}
                style={{ color: '#F2EEE3' }}
              >
                Premiado fuera,
                <br />
                <span className={displayIt.className} style={{ color: C.oroLight }}>
                  hecho en Molina.
                </span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(242,238,227,0.8)' }}>
                El palmarés publicado por la propia marca: concursos de
                Nueva York, Verona, Israel y el ranking mundial EVOO.
              </p>
            </Reveal>
            <dl>
              {PREMIOS.map((p, i) => (
                <Reveal key={p.premio + p.anio} delay={i * 70}>
                  <div
                    className="flex items-baseline gap-4 py-3 border-b"
                    style={{ borderColor: 'rgba(242,238,227,0.25)' }}
                  >
                    <dt
                      className={`${mono.className} shrink-0 w-16 text-sm font-semibold`}
                      style={{ color: C.oroLight }}
                    >
                      {p.anio}
                    </dt>
                    <dd>
                      <p className={`${display.className} font-semibold text-lg leading-tight`} style={{ color: '#F2EEE3' }}>
                        {p.premio}
                      </p>
                      <p className="text-xs md:text-sm" style={{ color: 'rgba(242,238,227,0.7)' }}>
                        {p.ente}
                      </p>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div>
              <p
                className={`${display.className} font-semibold leading-none text-7xl md:text-8xl`}
                style={{ color: C.oliva }}
              >
                {BIZ.rating.toString().replace('.', ',')}
              </p>
              <Stars value={BIZ.rating} color={C.star} className="w-5 h-5 mt-3" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-5 inline-block uppercase font-semibold text-sm tracking-[0.08em] underline underline-offset-4 decoration-2 tap-44 hover:decoration-[3px]`}
                style={{ color: C.oliva, textDecorationColor: C.oro }}
              >
                Ver la ficha en Google
              </a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className={`h-full ${i === 0 ? 'sm:col-span-2' : ''}`}>
                <figure
                  className="border p-5 h-full rounded-lg"
                  style={{ borderColor: C.line, backgroundColor: C.card }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      aria-hidden="true"
                      className={`${display.className} w-9 h-9 flex items-center justify-center font-semibold text-lg rounded-full`}
                      style={{ backgroundColor: C.oliva, color: '#F2EEE3' }}
                    >
                      {r.name[0]}
                    </span>
                    <figcaption className={`${display.className} font-semibold text-lg`} style={{ color: C.ink }}>
                      {r.name}
                    </figcaption>
                  </div>
                  <Stars value={r.stars} color={C.star} className="w-3.5 h-3.5 mb-3" />
                  <blockquote className="text-sm leading-relaxed" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar a la sala de ventas ── */}
      <section
        id="donde"
        className="scroll-mt-20 border-t"
        style={{ borderColor: C.line, backgroundColor: C.card }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <div>
              <h2
                className={`${display.className} font-semibold leading-[1.02] text-4xl md:text-5xl mb-6`}
                style={{ color: C.ink }}
              >
                La sala de ventas,
                <br />
                <span className={displayIt.className} style={{ color: C.oliva }}>
                  en Las Mercedes
                </span>
              </h2>
              <p className={`${display.className} font-semibold text-xl md:text-2xl mb-1`} style={{ color: C.ink }}>
                {BIZ.address}
              </p>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                {BIZ.city}, {BIZ.region}
              </p>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
                La ficha no publica horarios: escribe por WhatsApp y te dicen
                a qué hora conviene pasar por la tienda del fundo.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.08em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={`tel:${BIZ.whatsapp}`}
                  className={`${display.className} uppercase font-semibold tracking-[0.08em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative border rounded-xl overflow-hidden min-h-[320px] h-full" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.olivaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-semibold leading-[1.02] text-4xl md:text-6xl mb-5 mx-auto max-w-3xl`}
              style={{ color: '#F2EEE3' }}
            >
              El aceite del fundo,
              <br />
              <span className={displayIt.className} style={{ color: C.oroLight }}>
                directo a tu mesa.
              </span>
            </h2>
            <p
              className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(242,238,227,0.85)' }}
            >
              Escribe y te dicen qué líneas y formatos hay en la sala de
              ventas esta temporada.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center justify-center uppercase font-semibold tracking-[0.08em] text-sm md:text-base px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.oro, color: '#161B0D' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0D1107' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del sitio archivado de la marca */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-auto bg-[#FBF9F2] rounded px-2 py-1" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold text-base leading-none`} style={{ color: '#F2EEE3' }}>
                {BIZ.short}
              </p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(242,238,227,0.6)' }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <nav aria-label="Secciones" className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${mono.className} text-[11px] uppercase tracking-[0.14em] tap-44 hover:opacity-100`}
                style={{ color: 'rgba(242,238,227,0.7)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className={`${mono.className} text-[11px]`} style={{ color: 'rgba(242,238,227,0.5)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
