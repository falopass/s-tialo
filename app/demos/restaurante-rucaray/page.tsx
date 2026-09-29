import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#FAF5E8',
  white: '#FFFFFF',
  ink: '#26211A',
  red: '#C8362F',
  redDeep: '#9E2924',
  green: '#33552F',
  board: '#2A2118',
  amber: '#F2C230',
  line: 'rgba(38,33,26,0.15)',
}

// globals.css redefine --spacing-5 a --spacing-12; se restaura el valor por defecto de Tailwind
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-rucaray',
  title: `${BIZ.name} | Picada de camino en L-751, Retiro`,
  description:
    'Cocina chilena a orilla del camino L-751 en Retiro: cazuela, porotos, chorrillanas y empanadas. Lo que se lee en el pizarrón, con delivery en la comuna.',
  image: `${IMG}/fachada.webp`,
})

// Mantel de cuadrille (gingham) hecho solo con gradientes CSS
function Gingham() {
  return (
    <div
      aria-hidden="true"
      className="h-6 w-full"
      style={{
        backgroundColor: C.white,
        backgroundImage: `repeating-linear-gradient(0deg, rgba(51,85,47,0.5) 0 7px, transparent 7px 14px), repeating-linear-gradient(90deg, rgba(51,85,47,0.5) 0 7px, transparent 7px 14px)`,
        borderTop: `2px solid ${C.red}`,
        borderBottom: `2px solid ${C.red}`,
      }}
    />
  )
}

const PIZARRON = [
  { grupo: 'Platos de la casa', items: ['Cazuela', 'Carne al jugo', 'Pollo asado', 'Carne mechada', 'Porotos'] },
  { grupo: 'Para el camino', items: ['Chorrillanas', 'Completos', 'Hamburguesas', 'Pizza-salchipapas', 'Churrascas', 'Lomitos - Hass'] },
  { grupo: 'Para tomar', items: ['Jugos naturales'] },
]

const MENCIONAN = ['Empanadas', 'Ambiente familiar', 'Porciones contundentes', 'Al paso del camino']

export default function RucarayPage() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .rc-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .rc-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .rc-btn:active { transform: translateY(0) scale(0.97); }
        .rc-btn:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name="El Rucaray"
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'El pizarrón', href: '#pizarron' },
          { label: 'La mesa', href: '#mesa' },
          { label: 'Cómo llegar', href: '#contacto' },
        ]}
        waLink={WA_LINK_PEDIDO}
        ctaLabel="Pedir"
        fontClass={display.className}
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.red, btnInk: '#FFFFFF' }}
      />

      {/* ── HERO: panel de letrero caminero ── */}
      <section id="inicio" className="pt-[76px] md:pt-[92px] pb-10 md:pb-14 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <Reveal className="md:col-span-7">
              <div
                className="rounded-md p-6 md:p-10"
                style={{ backgroundColor: C.white, border: `4px solid ${C.red}`, boxShadow: `8px 8px 0 ${C.red}` }}
              >
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3" style={{ color: C.green }}>
                  Picada a orilla de camino · L-751, Retiro
                </p>
                <h1 className={`${display.className} uppercase leading-[0.98] text-4xl md:text-6xl mb-4`} style={{ color: C.red }}>
                  Restaurant<br />El Rucaray
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-6" style={{ color: 'rgba(38,33,26,0.8)' }}>
                  Cocina chilena de la buena: cazuela, carne mechada, porotos y
                  empanadas, con la mesa puesta a un paso del camino.
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${display.className} rc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Llamar
                  </a>
                  <a
                    href={WA_LINK_PEDIDO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} rc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 border-[3px] tap-44`}
                    style={{ borderColor: C.red, color: C.red }}
                  >
                    Pedir por WhatsApp
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs md:text-sm" style={{ color: 'rgba(38,33,26,0.75)' }}>
                  <span className="font-bold">{BIZ.rating}★ en Google ({BIZ.reviews} reseñas)</span>
                  <span>{BIZ.delivery}</span>
                </div>
                <p
                  className="mt-4 inline-block text-xs md:text-sm font-bold px-3 py-1.5 rounded-sm"
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  {BIZ.estado}
                </p>
              </div>
            </Reveal>
            <Reveal delay={150} className="md:col-span-5">
              <figure
                className="relative aspect-[4/3] overflow-hidden rounded-md"
                style={{ border: `4px solid ${C.white}`, boxShadow: `0 6px 0 rgba(38,33,26,0.25)` }}
              >
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Restaurant El Rucaray a orilla del camino L-751, con bandera chilena"
                  fill
                  priority
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      <Gingham />

      {/* ── EL PIZARRÓN ── */}
      <section id="pizarron" className="py-14 md:py-20" style={{ backgroundColor: C.board, color: '#F6EFE2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <Reveal>
                <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3" style={{ color: C.amber }}>
                  El pizarrón
                </p>
                <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.0] mb-4`}>
                  Lo que se lee en la entrada
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(246,239,226,0.8)' }}>
                  La carta vive en el pizarrón del local: platos de cuchara, clásicos
                  para llevar y jugos naturales. Así de simple, así de bueno.
                </p>
                <figure className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-sm" style={{ border: '3px solid rgba(246,239,226,0.35)' }}>
                  <Image
                    src={`${IMG}/pizarron.webp`}
                    alt="Pizarrón real de la entrada con el menú de El Rucaray"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </figure>
              </Reveal>
            </div>
            <div className="md:col-span-7 space-y-8">
              {PIZARRON.map((g, gi) => (
                <Reveal key={g.grupo} delay={gi * 120}>
                  <h3
                    className={`${display.className} uppercase text-lg md:text-2xl mb-4 pb-2`}
                    style={{ color: C.amber, borderBottom: '2px dashed rgba(242,194,48,0.5)' }}
                  >
                    {g.grupo}
                  </h3>
                  <ul className="flex flex-wrap gap-2.5">
                    {g.items.map((p) => (
                      <li
                        key={p}
                        className={`${display.className} uppercase text-sm md:text-base px-4 py-2 rounded-sm`}
                        style={{ border: '2px solid rgba(246,239,226,0.45)', color: '#F6EFE2' }}
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
              <Reveal delay={160}>
                <div className="rounded-sm p-4 text-sm md:text-base" style={{ backgroundColor: 'rgba(242,194,48,0.12)', border: '2px dashed rgba(242,194,48,0.6)' }}>
                  {BIZ.delivery}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── LO QUE REPITEN EN GOOGLE ── */}
      <section className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <Reveal className="md:col-span-4">
              <div
                className="rounded-md p-6 md:p-8 text-center"
                style={{ backgroundColor: C.white, border: `4px solid ${C.green}` }}
              >
                <p className={`${display.className} text-6xl md:text-7xl leading-none`} style={{ color: C.green }}>
                  {BIZ.rating}
                </p>
                <p className="mt-2 text-sm font-bold" style={{ color: 'rgba(38,33,26,0.7)' }}>
                  estrellas en Google
                </p>
                <p className="mt-1 text-xs" style={{ color: 'rgba(38,33,26,0.55)' }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </Reveal>
            <div className="md:col-span-8">
              <Reveal delay={100}>
                <h2 className={`${display.className} uppercase text-2xl md:text-4xl leading-[1.02] mb-5`}>
                  Lo que repiten las reseñas
                </h2>
                <ul className="flex flex-wrap gap-2.5 mb-5">
                  {MENCIONAN.map((m) => (
                    <li
                      key={m}
                      className="text-xs md:text-sm font-bold uppercase tracking-wide px-4 py-2 rounded-full"
                      style={{ backgroundColor: C.white, border: `2px solid ${C.green}`, color: C.green }}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
                <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: 'rgba(38,33,26,0.75)' }}>
                  Google destaca en sus reseñas las empanadas, el ambiente y las
                  porciones. Buen dato: conviene llevar efectivo.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Gingham />

      {/* ── LA MESA ── */}
      <section id="mesa" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.0] mb-4`} style={{ color: C.red }}>
                La mesa puesta
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(38,33,26,0.78)' }}>
                Mantel de cuadrille, pan en canasto y plato de fondo: cazuela humeante,
                pastel dorado en paila y copa de la casa.
              </p>
            </div>
          </Reveal>
          <div className="mt-8 grid grid-cols-12 gap-4">
            <Reveal className="col-span-12 md:col-span-7">
              <figure className="relative aspect-[16/10] overflow-hidden rounded-md" style={{ border: `4px solid ${C.white}`, boxShadow: '0 5px 0 rgba(38,33,26,0.22)' }}>
                <Image
                  src={`${IMG}/cazuela.webp`}
                  alt="Cazuela servida con pan, copa y mantel de cuadrille en El Rucaray"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </figure>
            </Reveal>
            <Reveal delay={120} className="col-span-6 md:col-span-5">
              <figure className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-md" style={{ border: `4px solid ${C.white}`, boxShadow: '0 5px 0 rgba(38,33,26,0.22)' }}>
                <Image
                  src={`${IMG}/pastel.webp`}
                  alt="Pastel dorado en paila de greda"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 32vw, 50vw"
                />
              </figure>
            </Reveal>
            <Reveal delay={180} className="col-span-6 md:col-span-4">
              <figure className="relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-md" style={{ border: `4px solid ${C.white}`, boxShadow: '0 5px 0 rgba(38,33,26,0.22)' }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada del restaurante con plantas y toldo a rayas"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 26vw, 50vw"
                />
              </figure>
            </Reveal>
            <Reveal delay={220} className="col-span-12 md:col-span-8 md:-mt-10">
              <figure className="relative aspect-[16/9] overflow-hidden rounded-md" style={{ border: `4px solid ${C.white}`, boxShadow: '0 5px 0 rgba(38,33,26,0.22)' }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt="Comedor amplio de madera con vigas a la vista y banderines"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 66vw, 100vw"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-14 md:py-20" style={{ backgroundColor: C.red, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.0] mb-6`}>
                En el camino L-751
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <span className="opacity-75">Dirección: </span>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                </li>
                <li>
                  <span className="opacity-75">Teléfono: </span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44 inline-block">
                    {BIZ.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="opacity-75">Delivery: </span>
                  {BIZ.delivery}
                </li>
                <li>
                  <span
                    className="inline-block text-xs md:text-sm font-bold px-3 py-1.5 rounded-sm"
                    style={{ backgroundColor: C.amber, color: C.ink }}
                  >
                    {BIZ.estado}
                  </span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} rc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: '#FFFFFF', color: C.red }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} rc-btn inline-flex items-center gap-2 uppercase tracking-wide text-sm px-7 py-3.5 border-[3px] border-white tap-44`}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-md overflow-hidden" style={{ border: '4px solid #FFFFFF' }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Restaurant El Rucaray, L-751, Retiro"
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
      <footer className="py-8" style={{ backgroundColor: C.board, color: '#F6EFE2' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs md:text-sm">
          <p className={`${display.className} uppercase text-base`}>{BIZ.name}</p>
          <p className="opacity-75">
            {BIZ.address}, {BIZ.city} · {BIZ.rating}★ en Google
          </p>
          <p className="opacity-75">Demo de muestra hecha por Sitiazo</p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
