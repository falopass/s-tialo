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
  INSTAGRAM_URL,
  HOURS,
  IMG,
} from './content'

// «ópTICA Loica»: sans geométrica negra + la loica ciruela del letrero
const display = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const serif = localFont({
  src: [{ path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' }],
})
const serifIt = localFont({
  src: [{ path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#F7F4EE',
  card: '#FFFFFF',
  ink: '#191417',
  muted: '#6B5E63',
  line: 'rgba(25,20,23,0.14)',
  ciruela: '#5A2440',
  ciruelaDeep: '#33121F',
  loica: '#C8102E',
  ambar: '#F2B90D',
  star: '#F2B33D',
}

export const metadata: Metadata = demoMetadata({
  slug: 'optica-loica',
  title: 'Óptica Loica — Armazones y lentes de sol en 31 1/2 Oriente, Talca',
  description:
    'Óptica en 31 1/2 Oriente 1590, Talca. Armazones ópticos, lentes de sol y accesorios, con la tienda real en fotos.',
  image: `${IMG}/local.webp`,
})

const NAV_LINKS = [
  { label: 'Armazones', href: '#muro' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Accesorios', href: '#accesorios' },
  { label: 'Llegar', href: '#donde' },
]

const ARMAZONES = [
  {
    src: `${IMG}/picazzio.webp`,
    alt: 'Lentes de sol Picazzio con estuche blanco en la vitrina de Óptica Loica',
    marca: 'Picazzio',
    nota: 'Lentes de sol',
  },
  {
    src: `${IMG}/formosa.webp`,
    alt: 'Armazones ópticos Formosa apilados en su caja, en Óptica Loica',
    marca: 'Formosa',
    nota: 'Armazón óptico',
  },
  {
    src: `${IMG}/bulberries.webp`,
    alt: 'Lentes de sol Bulberries Eyewear con etiqueta, sobre madera',
    marca: 'Bulberries',
    nota: 'Lentes de sol',
  },
  {
    src: `${IMG}/sombrero.webp`,
    alt: 'Lentes de sol junto a un sombrero en una foto publicada por Óptica Loica',
    marca: 'De temporada',
    nota: 'Sol y verano',
  },
]

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-semibold tracking-wide`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(247,244,238,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.loica,
          btnInk: '#FFF6F6',
        }}
        ctaLabel="WhatsApp"
      />

      {/* ── Hero: el letrero de la pared como marco ── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{ backgroundColor: C.ciruelaDeep }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
          <div className="relative z-10">
            <Reveal>
              <div className="inline-flex items-center gap-3 bg-white rounded-lg px-4 py-2.5 mb-6 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado del letrero */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Letrero ópTICA Loica en la pared de la tienda"
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] font-medium mb-4`}
                style={{ color: 'rgba(255,240,245,0.72)' }}
              >
                Óptica · 31 1/2 Oriente 1590, Talca
              </p>
              <h1
                className={`${display.className} font-bold leading-[1.02] text-[clamp(2.5rem,8vw,4.75rem)] mb-5`}
                style={{ color: '#FFF6F9' }}
              >
                Prueba armazón
                <br />
                por armazón,{' '}
                <span className={serifIt.className} style={{ color: C.ambar }}>
                  en la tienda.
                </span>
              </h1>
              <p
                className="max-w-md text-base md:text-lg leading-relaxed mb-7"
                style={{ color: 'rgba(255,240,245,0.85)' }}
              >
                Lentes ópticos, de sol y accesorios en pleno centro de Talca:
                los mismos que ves en la vitrina.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <div className="flex flex-wrap items-center gap-3 mb-7">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.loica, color: '#FFF6F6' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#muro"
                  className={`${display.className} uppercase font-semibold tracking-[0.05em] text-sm md:text-base px-7 py-3 rounded-full border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: 'rgba(255,246,249,0.5)', color: '#FFF6F9' }}
                >
                  Ver el muro
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.star} className="w-4 h-4" />
                <span
                  className={`${mono.className} text-xs md:text-sm`}
                  style={{ color: 'rgba(255,240,245,0.85)' }}
                >
                  {BIZ.rating.toString().replace('.', ',')} en Google
                </span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={80}>
            <div
              className="relative aspect-[4/5] max-h-[560px] w-full overflow-hidden rounded-2xl border-4"
              style={{ borderColor: 'rgba(255,246,249,0.25)' }}
            >
              <Image
                src={`${IMG}/local.webp`}
                alt="Letrero pintado ópTICA Loica sobre el mesón de la tienda, con vitrina de armazones"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 45vw, 100vw"
              />
              <div
                className="absolute bottom-0 inset-x-0 px-4 py-3"
                style={{ background: 'linear-gradient(0deg, rgba(51,18,31,0.85), transparent)' }}
              >
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: '#FFF6F9' }}>
                  El letrero de la tienda, tal cual
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* marco doble tipo montura */}
        <div
          aria-hidden="true"
          className="absolute -left-24 top-16 w-72 h-72 rounded-full border-[22px] opacity-20 pointer-events-none"
          style={{ borderColor: C.ambar }}
        />
        <div
          aria-hidden="true"
          className="absolute -right-28 bottom-10 w-80 h-80 rounded-full border-[22px] opacity-15 pointer-events-none"
          style={{ borderColor: C.loica }}
        />
      </section>

      {/* ── El muro de armazones: riel horizontal ── */}
      <section id="muro" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="md:flex md:items-end md:justify-between gap-6 mb-8">
              <h2
                className={`${display.className} font-bold leading-[1.02] text-4xl md:text-6xl`}
                style={{ color: C.ink }}
              >
                El muro de
                <br />
                <span className={serifIt.className} style={{ color: C.ciruela }}>
                  armazones
                </span>
              </h2>
              <p
                className="max-w-sm text-sm md:text-base leading-relaxed mt-4 md:mt-0 md:text-right"
                style={{ color: C.muted }}
              >
                Fotos reales publicadas por la óptica: sol, ópticos y marcas
                que se prueban en persona.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto pl-5 md:pl-8">
          <Reveal>
            <div
              className="flex gap-4 overflow-x-auto pb-4 pr-5 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'thin' }}
            >
              {ARMAZONES.map((a) => (
                <figure
                  key={a.marca}
                  className="snap-start shrink-0 w-[240px] md:w-[290px] bg-white border rounded-xl overflow-hidden"
                  style={{ borderColor: C.line }}
                >
                  <div className="relative aspect-square" style={{ backgroundColor: '#EFEAE3' }}>
                    <Image
                      src={a.src}
                      alt={a.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 768px) 290px, 240px"
                    />
                  </div>
                  <figcaption className="p-4 flex items-baseline justify-between gap-3">
                    <span
                      className={`${display.className} font-semibold text-lg`}
                      style={{ color: C.ink }}
                    >
                      {a.marca}
                    </span>
                    <span
                      className={`${mono.className} text-[11px] uppercase tracking-[0.12em]`}
                      style={{ color: C.muted }}
                    >
                      {a.nota}
                    </span>
                  </figcaption>
                </figure>
              ))}
              <div
                className="snap-start shrink-0 w-[240px] md:w-[290px] rounded-xl flex flex-col items-center justify-center gap-4 p-6 border-2 border-dashed"
                style={{ borderColor: C.ciruela }}
              >
                <p
                  className={`${serif.className} text-xl md:text-2xl text-center leading-snug`}
                  style={{ color: C.ciruela }}
                >
                  El resto se prueba
                  <br />
                  en el muro de verdad
                </p>
                <a
                  href={waLink('Hola, quiero ver los armazones que tienen en la tienda de 31 1/2 Oriente')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold text-sm tracking-[0.05em] underline underline-offset-4 decoration-2 tap-44 hover:decoration-[3px]`}
                  style={{ color: C.loica, textDecorationColor: C.loica }}
                >
                  Preguntar por WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
          <p
            className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.16em]`}
            style={{ color: C.muted }}
          >
            ← Desliza — stock real de la vitrina
          </p>
        </div>
      </section>

      {/* ── La tienda: mural amarillo y sala blanca ── */}
      <section
        id="tienda"
        className="scroll-mt-20"
        style={{ backgroundColor: C.ciruelaDeep }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2
              className={`${display.className} font-bold leading-[1.02] text-4xl md:text-6xl mb-3`}
              style={{ color: '#FFF6F9' }}
            >
              La tienda del{' '}
              <span className={serifIt.className} style={{ color: C.ambar }}>
                mural amarillo
              </span>
            </h2>
            <p
              className="max-w-xl text-sm md:text-base leading-relaxed mb-10"
              style={{ color: 'rgba(255,240,245,0.8)' }}
            >
              En 31 1/2 Oriente el local es fácil de reconocer: muro de
              armazones, mural pintado y vitrinas blancas al fondo.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <Reveal>
              <figure className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/interior-amarillo.webp`}
                  alt="Interior de Óptica Loica con muro de armazones y mural amarillo pintado"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(51,18,31,0.8)', color: '#FFF6F9' }}
                >
                  El mural y el muro de lentes
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={100}>
              <figure className="relative aspect-[3/2] overflow-hidden rounded-xl">
                <Image
                  src={`${IMG}/interior-blanco.webp`}
                  alt="Sala blanca de Óptica Loica con sillones de espera"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
                <figcaption
                  className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.14em] px-3 py-1.5 rounded-full`}
                  style={{ backgroundColor: 'rgba(51,18,31,0.8)', color: '#FFF6F9' }}
                >
                  La sala de espera
                </figcaption>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                ['Armazones ópticos', 'El muro de la entrada, con marcas como Formosa.'],
                ['Lentes de sol', 'Picazzio, Bulberries y modelos de temporada.'],
                ['Accesorios', 'Cadenas y detalles para no perderlos.'],
              ].map(([t, d], i) => (
                <div
                  key={t}
                  className="border-l-2 pl-4"
                  style={{ borderColor: i === 0 ? C.loica : i === 1 ? C.ambar : 'rgba(255,246,249,0.4)' }}
                >
                  <h3
                    className={`${display.className} font-semibold text-lg mb-1`}
                    style={{ color: '#FFF6F9' }}
                  >
                    {t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,240,245,0.75)' }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Accesorios: la cadena y el detalle ── */}
      <section id="accesorios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-14 items-center">
          <Reveal>
            <figure
              className="relative aspect-[9/16] max-h-[520px] w-full overflow-hidden rounded-xl border"
              style={{ borderColor: C.line }}
            >
              <Image
                src={`${IMG}/cadena.webp`}
                alt="Cadena de mostacillas para lentes, accesorio vendido en Óptica Loica"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-medium mb-3`}
                style={{ color: C.loica }}
              >
                Los detalles
              </p>
              <h2
                className={`${display.className} font-bold leading-[1.05] text-3xl md:text-5xl mb-4`}
                style={{ color: C.ink }}
              >
                También hay cadena
                <br />
                para no perderlos{' '}
                <span className={serifIt.className} style={{ color: C.ciruela }}>
                  por Talca.
                </span>
              </h2>
              <p className="max-w-md text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                Además de armazones y sol, en la vitrina hay accesorios como
                esta cadena de mostacillas: para el sol de la playa o el
                trabajo de todos los días.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <a
                href={waLink('Hola, ¿tienen accesorios y cadenas para lentes en la óptica?')}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex uppercase font-semibold tracking-[0.05em] text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.ciruela, color: '#FFF6F9' }}
              >
                Preguntar por accesorios
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Llegar a la óptica ── */}
      <section
        id="donde"
        className="scroll-mt-20 border-t"
        style={{ borderColor: C.line, backgroundColor: C.card }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <div>
              <h2
                className={`${display.className} font-bold leading-[1.02] text-4xl md:text-5xl mb-6`}
                style={{ color: C.ink }}
              >
                31 1/2 Oriente,{' '}
                <span className={serifIt.className} style={{ color: C.ciruela }}>
                  centro de Talca
                </span>
              </h2>
              <p className={`${display.className} font-semibold text-xl md:text-2xl mb-1`} style={{ color: C.ink }}>
                {BIZ.address}
              </p>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                {BIZ.city}, {BIZ.region}
              </p>
              <dl className="border-t" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <dt className="text-sm" style={{ color: C.muted }}>{h.d}</dt>
                    <dd className={`${mono.className} text-sm`} style={{ color: C.ink }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                Horario publicado en Google · confirma el resto de la semana por WhatsApp
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-semibold tracking-[0.05em] text-sm px-6 py-3 rounded-full border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={`tel:${BIZ.whatsapp}`}
                  className={`${display.className} uppercase font-semibold tracking-[0.05em] text-sm px-6 py-3 rounded-full border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <p className={`${mono.className} mt-6 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 tap-44 hover:opacity-80"
                >
                  @optica_loica en Instagram
                </a>
              </p>
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
      <section style={{ backgroundColor: C.ciruelaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-bold leading-[1.02] text-4xl md:text-6xl mb-5 mx-auto max-w-3xl`}
              style={{ color: '#FFF6F9' }}
            >
              El armazón correcto
              <br />
              se prueba{' '}
              <span className={serifIt.className} style={{ color: C.ambar }}>
                en persona.
              </span>
            </h2>
            <p
              className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(255,240,245,0.85)' }}
            >
              Pregunta por el modelo que te gustó y lo tienen listo en la
              vitrina antes de que llegues.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center justify-center uppercase font-semibold tracking-[0.05em] text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.loica, color: '#FFF6F6' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#220C16' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado del letrero */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-8 w-auto bg-white rounded px-1.5 py-0.5" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold text-base leading-none`} style={{ color: '#FFF6F9' }}>
                {BIZ.name}
              </p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(255,246,249,0.6)' }}>
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
                style={{ color: 'rgba(255,246,249,0.7)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className={`${mono.className} text-[11px]`} style={{ color: 'rgba(255,246,249,0.5)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
