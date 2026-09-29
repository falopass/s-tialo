import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_DELIVERY, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  night: '#161210',
  card: '#211A17',
  cream: '#F7EFE3',
  red: '#D93A2B',
  muted: 'rgba(247,239,227,0.66)',
  line: 'rgba(247,239,227,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sushi-gou',
  title: 'Sushi Gou - Handrolls, gohan y tablas en Parral',
  description:
    'Sushi en Av. Las Delicias Sur, Parral, Región del Maule. Handrolls tempura, gohan, tablas y delivery hasta medianoche. Pide por WhatsApp.',
  image: `${IMG}/tabla.webp`,
})

const NAV_LINKS = [
  { label: 'Promos', href: '#promos' },
  { label: 'Los clásicos', href: '#clasicos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Pedir', href: '#pedir' },
]

// Precios reales de la pizarra del local (foto propia del restaurante).
const PROMOS = [
  { que: 'Arrollados primavera', cuanto: '7 por', precio: '$1.000' },
  { que: 'Empanadas de queso', cuanto: '5 por', precio: '$1.000' },
  { que: 'Furay chileno pollo', cuanto: '30 piezas por', precio: '$5.000' },
  { que: 'Bebida en lata', cuanto: 'cada una', precio: '$500' },
]

const CLASICOS = [
  {
    src: `${IMG}/handroll-tempura.webp`,
    alt: 'Handroll tempura de Sushi Gou envuelto en foil para llevar',
    nombre: 'Handrolls tempura',
    detalle: 'El formato de la casa: se piden y se comen a mano, en foil.',
  },
  {
    src: `${IMG}/gohan.webp`,
    alt: 'Gohan de Sushi Gou servido en bowl con su empaque con logo',
    nombre: 'Gohan',
    detalle: 'El bowl contundente, con cubiertos y salsas marca Gou.',
  },
  {
    src: `${IMG}/tabla.webp`,
    alt: 'Tabla de sushi de Sushi Gou con variedad de rolls para compartir',
    nombre: 'Tablas para compartir',
    detalle: 'Para llevar a la casa o juntarse en el local.',
  },
  {
    src: `${IMG}/variedad.webp`,
    alt: 'Variedad de rolls de Sushi Gou: fríos, panko y con palta',
    nombre: 'Rolls variados',
    detalle: 'Fríos, en panko y con palta: la carta cambia según el día.',
  },
]

const OPINIONES = [
  {
    nombre: 'Conny',
    cuando: 'Hace 7 meses',
    estrellas: 5,
    texto: 'Es el sushi más rico que he comido en mi vida.',
  },
  {
    nombre: 'Catalina Gómez',
    cuando: 'Hace 8 meses',
    estrellas: 2,
    texto: 'Está bien el sabor y todo… las que atienden son súper dulces.',
  },
]

export default function SushiGouPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.night, color: C.cream }}
    >
      <style>{`
        .sg-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .sg-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .sg-btn:active { transform: translateY(0) scale(0.97); }
        .sg-btn:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
        .sg-strip { scrollbar-width: none; }
        .sg-strip::-webkit-scrollbar { display: none; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: 'rgba(22,18,16,0.95)',
          ink: C.cream,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero oscuro: titular gigante + collage de fotos ── */}
      <section id="inicio" className="relative pt-[92px] md:pt-[110px] pb-10 md:pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`${display.className} text-xs md:text-sm uppercase tracking-[0.22em] px-3 py-1.5`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                {BIZ.rubro}
              </span>
              <span className="text-xs md:text-sm font-semibold tracking-[0.12em] uppercase" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={60}>
                <h1
                  className={`${display.className} uppercase leading-[0.9] tracking-[0.005em] text-[clamp(3.4rem,13vw,9rem)] mb-6`}
                >
                  Sushi
                  <br />
                  de barrio
                  <br />
                  <span style={{ color: C.red }}>en Parral</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                  Handrolls tempura en foil, gohan, tablas para compartir y
                  delivery hasta medianoche. El local de la pizarra roja
                  en Av. Las Delicias Sur.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a
                    href={WA_LINK_DELIVERY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} sg-btn uppercase tracking-[0.08em] text-base px-7 py-3 rounded-sm tap-44`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#promos"
                    className={`${display.className} sg-btn uppercase tracking-[0.08em] text-base px-7 py-3 rounded-sm tap-44`}
                    style={{ color: C.cream, border: `2px solid ${C.line}` }}
                  >
                    Ver promos
                  </a>
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-bold text-sm tap-44"
                  style={{ color: C.cream }}
                >
                  <Stars value={BIZ.rating} color="#E8B04B" />
                  <span>
                    {String(BIZ.rating).replace('.', ',')} en Google · {BIZ.reviews} reseñas
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={140}>
                <div className="relative">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm" style={{ transform: 'rotate(1.6deg)' }}>
                    <Image
                      src={`${IMG}/rolls.webp`}
                      alt="Dos rolls de Sushi Gou, uno con palta y otro con ciboulette"
                      fill
                      priority
                      sizes="(min-width: 1024px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`${display.className} absolute -bottom-5 -left-3 md:-left-6 px-4 py-2 uppercase tracking-[0.1em] text-lg md:text-xl`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF', transform: 'rotate(-3deg)' }}
                  >
                    {BIZ.hashtag}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La pizarra: promos reales del local ── */}
      <section id="promos" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2
                className={`${display.className} uppercase leading-[0.92] text-[clamp(2.6rem,9vw,5.6rem)]`}
              >
                La pizarra
              </h2>
              <p className="text-xs md:text-sm font-bold uppercase tracking-[0.18em]" style={{ color: C.red }}>
                Precios reales, escritos a mano en el local
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-7">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROMOS.map((p, i) => (
                  <Reveal key={p.que} delay={i * 80}>
                    <li
                      className="h-full p-5"
                      style={{
                        backgroundColor: C.card,
                        border: `1px dashed rgba(247,239,227,0.35)`,
                      }}
                    >
                      <p className={`${display.className} uppercase text-lg md:text-xl leading-tight mb-1`}>
                        {p.que}
                      </p>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: C.muted }}>
                        {p.cuanto}
                      </p>
                      <p className={`${display.className} text-4xl md:text-5xl leading-none`} style={{ color: C.red }}>
                        {p.precio}
                      </p>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="text-xs md:text-sm mt-5 max-w-lg" style={{ color: C.muted }}>
                  Leídos de la pizarra real del local. La carta completa y
                  las promos del día se confirman por WhatsApp.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={120}>
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                  <Image
                    src={`${IMG}/promos.webp`}
                    alt="Muralla roja del local con las promociones escritas en pizarras"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] mt-3" style={{ color: C.muted }}>
                  La pizarra roja del local, tal como está hoy
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Los clásicos: tira de fotos full-bleed ── */}
      <section id="clasicos" className="scroll-mt-20 border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-10">
          <Reveal>
            <h2
              className={`${display.className} uppercase leading-[0.92] text-[clamp(2.6rem,9vw,5.6rem)] mb-3`}
            >
              Los que más salen
            </h2>
            <p className="text-base md:text-lg max-w-xl" style={{ color: C.muted }}>
              Fotos reales de pedidos del local.
            </p>
          </Reveal>
        </div>
        <div className="sg-strip flex gap-3 md:gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 pb-4">
          {CLASICOS.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 70} className="snap-start shrink-0 w-[80%] sm:w-[46%] lg:w-[31%]">
              <figure className="h-full" style={{ backgroundColor: C.card }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, 80vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <p className={`${display.className} uppercase text-lg leading-tight`}>{p.nombre}</p>
                  <p className="text-sm mt-1" style={{ color: C.muted }}>
                    {p.detalle}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
          <Reveal delay={160}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} sg-btn inline-block uppercase tracking-[0.08em] text-base px-7 py-3 mt-6 rounded-sm tap-44`}
              style={{ backgroundColor: C.red, color: '#FFFFFF' }}
            >
              Hacer un pedido
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.cream, color: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="grid grid-cols-12 gap-6 items-end mb-10">
              <h2
                className={`${display.className} col-span-12 md:col-span-8 uppercase leading-[0.92] text-[clamp(2.6rem,9vw,5.6rem)]`}
              >
                Lo que dicen
                <br />
                en Parral
              </h2>
              <div className="col-span-12 md:col-span-4">
                <div className="flex items-center gap-2">
                  <Stars value={BIZ.rating} color={C.red} />
                  <p className="font-bold text-sm">
                    {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                  </p>
                </div>
                <p className="text-xs mt-2" style={{ color: 'rgba(22,18,16,0.6)' }}>
                  Citas textuales de la ficha de Google Maps.
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {OPINIONES.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100} className="col-span-12 md:col-span-6">
                <figure
                  className="h-full p-6 md:p-8"
                  style={{ backgroundColor: '#FFFFFF', border: '2px solid rgba(22,18,16,0.9)', boxShadow: '6px 6px 0 rgba(22,18,16,0.9)' }}
                >
                  <Stars value={r.estrellas} color={C.red} className="w-4 h-4 mb-4" />
                  <blockquote
                    className={`${display.className} uppercase leading-snug text-xl md:text-2xl mb-5`}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-xs font-bold uppercase tracking-[0.16em]" style={{ color: C.red }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold underline underline-offset-4 decoration-2 mt-8 tap-44"
              style={{ color: C.night, textDecorationColor: 'rgba(22,18,16,0.35)' }}
            >
              Ver la ficha real en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Horario + mapa + pedir ── */}
      <section id="pedir" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-7">
              <Reveal>
                <p className={`${display.className} uppercase text-xs md:text-sm tracking-[0.24em] mb-4`} style={{ color: C.red }}>
                  Abierto todos los días
                </p>
                <h2 className={`${display.className} uppercase leading-[0.92] text-[clamp(2.6rem,9vw,5rem)] mb-6`}>
                  Hasta
                  <br />
                  medianoche
                </h2>
                <div className="space-y-3 mb-7">
                  <p className={`${display.className} uppercase text-xl md:text-2xl`}>
                    {BIZ.horaLocal}
                  </p>
                  <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: C.red }}>
                    {BIZ.horaDelivery}
                  </p>
                </div>
                <address className="not-italic text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.cream }}>
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div
                  className="relative w-40 aspect-[3/4] overflow-hidden rounded-sm mt-6"
                  style={{ transform: 'rotate(-2.5deg)', border: `2px solid ${C.line}` }}
                >
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="Pizarra real del local con el horario: local de 13:00 a 00:00 y delivery de 17:00 a 00:00"
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] mt-2" style={{ color: C.muted }}>
                  Así está escrito en el local
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_DELIVERY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} sg-btn uppercase tracking-[0.08em] text-base px-7 py-3 rounded-sm tap-44`}
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    Pedir delivery
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} sg-btn uppercase tracking-[0.08em] text-base px-7 py-3 rounded-sm tap-44`}
                    style={{ border: `2px solid ${C.line}`, color: C.cream }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120} className="h-full">
                <div
                  className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden rounded-sm"
                  style={{ border: `1px solid ${C.line}` }}
                >
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
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0E0B0A', borderTop: `1px solid ${C.line}`, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-2xl md:text-3xl mb-2`} style={{ color: C.red }}>
            {BIZ.name}
          </p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,239,227,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,239,227,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(247,239,227,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos, la dirección, el horario de la
            pizarra, los precios y las reseñas son reales.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.red }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
