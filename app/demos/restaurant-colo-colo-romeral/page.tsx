import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  paper: '#FCF6EC',
  white: '#FFFFFF',
  ink: '#241B16',
  red: '#A52722',
  redDeep: '#7E1D19',
  tan: '#C8A97A',
  line: 'rgba(36,27,22,0.15)',
}

// globals.css redefine --spacing-5 a --spacing-12; se restaura el valor por defecto de Tailwind
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-colo-colo-romeral',
  title: `${BIZ.name} | La casa de la plateada en Romeral, desde 1970`,
  description:
    'Picada legendaria de Romeral: plateada al horno, costillar y cocina chilena en Av. Chile 1332. Desde 1970, con sucursal en Mall Curicó.',
  image: `${IMG}/fachada.webp`,
})

const HISTORIA = [
  ['1970', 'María Raquel Orellana abre la picada en Av. Chile, Romeral.'],
  ['2023', 'La plateada cruza la ciudad: segunda casa en Mall Curicó.'],
  ['2025', 'El INAPI falla a su favor: el nombre Colo Colo es de ellos.'],
]

const CARTA = [
  ['Plateada al horno', '$13.900'],
  ['Plateada a lo pobre', '$21.900'],
  ['Costillar', '$12.900'],
  ['Salmón a la plancha', '$12.900'],
  ['Lomo vetado 250 g', '$15.000'],
  ['Parrillada para dos', '$48.990'],
  ['Arrollado', '$5.500'],
  ['Patita de cerdo', '$5.500'],
]

const RESENAS = [
  {
    texto:
      'La mejor plateada que he comido, recomiendo mucho este plato con papas fritas. La atención excelente y muy rápido, me encantó.',
    autor: 'Carla GC',
    detalle: 'Reseña de Google · 5 estrellas',
  },
  {
    texto:
      'Excelente lugar para comer. Muy recomendable, grato ambiente y muy buena atención. La plateada, simplemente espectacular. Y además son pet friendly.',
    autor: 'Celia Verdugo',
    detalle: 'Reseña de Google · 5 estrellas',
  },
]

// Sello ovalado, eco del letrero del local
function Sello({ texto, sub, dark = false }: { texto: string; sub: string; dark?: boolean }) {
  return (
    <div
      className="flex flex-col items-center justify-center text-center rounded-full px-5 py-4"
      style={{
        border: `3px double ${dark ? C.paper : C.red}`,
        color: dark ? C.paper : C.red,
        transform: 'rotate(-6deg)',
      }}
    >
      <span className={`${display.className} text-2xl md:text-3xl leading-none`}>{texto}</span>
      <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] mt-1">{sub}</span>
    </div>
  )
}

export default function ColoColoRomeralPage() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .cc-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .cc-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .cc-btn:active { transform: translateY(0) scale(0.97); }
        .cc-btn:focus-visible { outline: 3px solid ${C.tan}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name="Colo Colo"
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'La plateada', href: '#plateada' },
          { label: 'La carta', href: '#carta' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Cómo llegar', href: '#contacto' },
        ]}
        waLink={WA_LINK_MESA}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.redDeep, ink: '#FCF6EC', line: 'rgba(255,255,255,0.12)', btnBg: '#FCF6EC', btnInk: C.redDeep }}
      />

      {/* ── HERO: mitad sello rojo, mitad plato ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.redDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 items-center min-h-[88svh] pt-24 pb-10 md:pb-14 gap-8">
          <Reveal className="md:col-span-6 relative z-10" >
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3" style={{ color: C.tan }}>
              Cocina chilena · Romeral, Maule
            </p>
            <h1 className={`${display.className} text-5xl md:text-7xl leading-[0.98] mb-4`} style={{ color: C.paper }}>
              Restaurant<br />Colo Colo
            </h1>
            <p className="text-base md:text-xl leading-relaxed max-w-md mb-7" style={{ color: 'rgba(252,246,236,0.88)' }}>
              La casa de la plateada al horno, sirviendo en Av. Chile desde 1970.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.paper, color: C.redDeep }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className={`${display.className} cc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(252,246,236,0.75)', color: C.paper }}
              >
                La carta
              </a>
            </div>
            <p className="mt-6 text-xs md:text-sm" style={{ color: 'rgba(252,246,236,0.8)' }}>
              {BIZ.rating}★ · {BIZ.reviews} reseñas en Google · {BIZ.sucursal}
            </p>
          </Reveal>
          <Reveal delay={160} className="md:col-span-6 relative">
            <figure
              className="relative aspect-[4/5] max-w-[420px] mx-auto overflow-hidden"
              style={{ borderRadius: '50% 50% 12px 12px / 38% 38% 12px 12px', border: `5px solid ${C.tan}` }}
            >
              <Image
                src={`${IMG}/plateada.webp`}
                alt="Plateada al horno en paila de greda, plato insignia de Colo Colo"
                fill
                priority
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </figure>
            <div className="absolute -bottom-2 left-1/2 -translate-x-[110%] md:-translate-x-[130%]">
              <Sello texto="1970" sub="desde" dark />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.02] mb-10 max-w-2xl`} style={{ color: C.red }}>
              Medio siglo de horno encendido
            </h2>
          </Reveal>
          <div className="relative">
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden md:block" style={{ borderTop: `2px dashed ${C.tan}` }} />
            <div className="grid md:grid-cols-3 gap-8">
              {HISTORIA.map(([año, txt], i) => (
                <Reveal key={año} delay={i * 130}>
                  <div className="relative">
                    <p
                      className={`${display.className} inline-block text-4xl md:text-5xl px-4 py-2 rounded-full`}
                      style={{ backgroundColor: C.paper, color: C.red, border: `3px double ${C.tan}` }}
                    >
                      {año}
                    </p>
                    <p className="mt-4 text-sm md:text-base leading-relaxed max-w-xs" style={{ color: 'rgba(36,27,22,0.78)' }}>
                      {txt}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LA PLATEADA ── */}
      <section id="plateada" className="py-14 md:py-20" style={{ backgroundColor: C.red, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3" style={{ color: C.tan }}>
                El plato insignia
              </p>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[0.98] mb-5`}>
                La plateada que dio nombre
              </h2>
              <p className="text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(252,246,236,0.88)' }}>
                Horneada lento hasta que el cuchillo sobra, servida en paila con su
                jugo y papas. La misma que la gente cruza la región para comer y que
                hoy defiende su nombre con fallo del INAPI.
              </p>
              <p className="mt-5 inline-block text-xs md:text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full" style={{ border: `2px solid ${C.tan}`, color: C.tan }}>
                Pet friendly según sus clientes
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-4 items-end">
              <Reveal className="col-span-8">
                <figure className="relative aspect-[4/3] overflow-hidden" style={{ borderRadius: '12px', border: `4px solid ${C.tan}` }}>
                  <Image
                    src={`${IMG}/a-lo-pobre.webp`}
                    alt="Plateada a lo pobre con huevo frito y papas"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 42vw, 66vw"
                  />
                </figure>
              </Reveal>
              <Reveal delay={140} className="col-span-4">
                <figure className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: '50% 50% 10px 10px / 30% 30% 10px 10px', border: `4px solid ${C.tan}` }}>
                  <Image
                    src={`${IMG}/mesa.webp`}
                    alt="Mesa servida con plateada, ensalada y papas"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 22vw, 34vw"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── LA CARTA ── */}
      <section id="carta" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7">
              <Reveal>
                <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.02] mb-8`} style={{ color: C.red }}>
                  La carta, tal cual
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <ul className="space-y-4">
                  {CARTA.map(([plato, precio]) => (
                    <li key={plato} className="flex items-baseline gap-3">
                      <span className="text-base md:text-lg">{plato}</span>
                      <span aria-hidden="true" className="flex-1 border-b-2 border-dotted translate-y-[-4px]" style={{ borderColor: C.tan }} />
                      <span className={`${display.className} text-base md:text-lg`} style={{ color: C.red }}>
                        {precio}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-xs md:text-sm" style={{ color: 'rgba(36,27,22,0.6)' }}>
                  Precios tomados de la carta del local.
                </p>
              </Reveal>
            </div>
            <Reveal delay={160} className="md:col-span-5">
              <figure
                className="relative aspect-[3/4] overflow-hidden rounded-lg bg-white p-3"
                style={{ border: `3px double ${C.tan}` }}
              >
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta original de Restaurant Colo Colo con sus precios"
                  fill
                  className="object-contain"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FACHADA + COMEDOR ── */}
      <section className="pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-12 gap-4 items-end">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="relative aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada roja de Restaurant Colo Colo en Av. Chile, Romeral"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 58vw, 100vw"
              />
            </figure>
          </Reveal>
          <Reveal delay={140} className="col-span-7 md:col-span-5">
            <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={`${IMG}/salon.webp`}
                alt="Comedor del restaurante con mesas de mantel oscuro"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 60vw"
              />
            </figure>
          </Reveal>
          <Reveal delay={200} className="col-span-5 md:col-span-4 md:col-start-9 md:-mt-14">
            <figure className="relative aspect-[3/4] overflow-hidden rounded-lg border-4" style={{ borderColor: C.paper }}>
              <Image
                src={`${IMG}/vino.webp`}
                alt="Botella de vino de la casa junto a una copa servida"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 28vw, 40vw"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="py-14 md:py-20" style={{ backgroundColor: C.redDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <Reveal className="md:col-span-4">
              <div className="flex md:flex-col items-center md:items-start gap-5">
                <Sello texto={BIZ.rating} sub="estrellas" dark />
                <p className="text-sm md:text-base" style={{ color: 'rgba(252,246,236,0.85)' }}>
                  {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </Reveal>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-6">
              {RESENAS.map((r, i) => (
                <Reveal key={r.autor} delay={i * 140}>
                  <blockquote
                    className="h-full rounded-lg p-6 flex flex-col"
                    style={{ backgroundColor: C.paper, color: C.ink, border: `3px solid ${C.tan}` }}
                  >
                    <p className="text-sm md:text-base leading-relaxed flex-1">“{r.texto}”</p>
                    <footer className="mt-4">
                      <p className="text-sm font-bold" style={{ color: C.red }}>
                        {r.autor}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: 'rgba(36,27,22,0.55)' }}>
                        {r.detalle}
                      </p>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.red }}>
                En Av. Chile, entrada a Romeral
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <span style={{ color: 'rgba(36,27,22,0.6)' }}>Dirección: </span>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                </li>
                <li>
                  <span style={{ color: 'rgba(36,27,22,0.6)' }}>Horario: </span>
                  {BIZ.hours}
                </li>
                <li>
                  <span style={{ color: 'rgba(36,27,22,0.6)' }}>Teléfono: </span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44 inline-block">
                    {BIZ.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span style={{ color: 'rgba(36,27,22,0.6)' }}>Instagram: </span>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 tap-44 inline-block"
                  >
                    {BIZ.igUser}
                  </a>
                </li>
                <li>
                  <span style={{ color: 'rgba(36,27,22,0.6)' }}>Sucursal: </span>
                  {BIZ.sucursal}
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Reservar mesa
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`}
                  style={{ borderColor: C.red, color: C.red }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-lg overflow-hidden" style={{ border: `3px double ${C.tan}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Restaurant Colo Colo, Av. Chile 1332, Romeral"
                className="w-full h-[280px] md:h-[340px] block"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8" style={{ backgroundColor: C.redDeep, color: C.paper, borderTop: `3px double ${C.tan}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs md:text-sm">
          <p className={`${display.className} text-base`}>{BIZ.name} · desde {BIZ.since}</p>
          <p className="opacity-75">
            {BIZ.address}, {BIZ.city} · {BIZ.sucursal}
          </p>
          <p className="opacity-75">Demo de muestra hecha por Sitiazo</p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
