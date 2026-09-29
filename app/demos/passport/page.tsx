import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

// Identidad real: el sello mostaza + burdeos de su logo, sobre el azul
// oscuro de la portada de pasaporte.
const C = {
  navy: '#1B2430',
  navySoft: '#232E3C',
  paper: '#F3EBD8',
  ink: '#26201A',
  wine: '#8B222F',
  mustard: '#E39E45',
  muted: '#6B6152',
  line: 'rgba(38,32,26,0.18)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), restaurada aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'passport',
  title: 'Passport — Cómete el mundo en Constitución',
  description:
    'Restaurant y bar en Av. Enrique Donn 735, Constitución. Hamburguesas, pizzas y piqueos con nombres de ciudades. Todos los días de 13:00 a 00:00.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Destinos', href: '#destinos' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#contacto' },
]

// Carta real publicada en queresto.com/passport (precios en CLP).
const DESTINOS = [
  {
    zona: 'Hamburguesas',
    gate: 'ZONA A',
    items: [
      { name: 'Americana', desc: 'Tocino, cheddar, cebolla caramelizada y BBQ de frutos rojos', price: '$9.000' },
      { name: 'Francesa', desc: 'Mozzarella, champiñones grillados y salsa carmenere', price: '$9.000' },
      { name: 'Río Janeiro', desc: 'Doble proteína, doble cheddar y doble tocino', price: '$10.000' },
      { name: 'Habana', desc: 'Mozzarella, huevo, palta y tomate', price: '$9.000' },
      { name: 'Washington', desc: 'Cheddar, tocino, aros de cebolla y chipotle', price: '$9.000' },
      { name: 'Passport', desc: 'La de la casa: doble proteína, cheddar y gouda', price: '$10.000' },
      { name: 'Japonesa', desc: 'Palta, tomate y salsa teriyaki', price: '$9.000' },
      { name: 'Italiana', desc: 'Mozzarella, aceitunas y tomate', price: '$9.000' },
    ],
  },
  {
    zona: 'Pizzas',
    gate: 'ZONA B',
    items: [
      { name: 'Margarita', desc: 'Jamón, tomate y orégano', price: '' },
      { name: 'Santiago', desc: 'Champiñones, cebolla y tocino', price: '' },
      { name: 'Montreal', desc: 'Doble queso y doble pepperoni', price: '' },
      { name: 'Hawaiana', desc: 'Choclo, piña y tocino', price: '' },
      { name: 'Maule', desc: 'Camarones, pollo y salsa de la casa (premium)', price: '' },
      { name: 'New York', desc: 'Choclo, pollo, jamón y BBQ (premium)', price: '' },
      { name: 'Argentina', desc: 'Jamón, carne, tocino y salame (premium)', price: '' },
      { name: 'Cubana', desc: 'Carne y cebolla caramelizada (premium)', price: '' },
    ],
  },
  {
    zona: 'Piqueos y entradas',
    gate: 'ZONA C',
    items: [
      { name: 'Sidney', desc: 'Papas, pollo en salsa 4 quesos, camarones y champiñones', price: '' },
      { name: 'Mexico', desc: 'Papas bravas al merquén con pollo y camarones', price: '' },
      { name: 'Valparaíso', desc: 'Papas, lomo salteado, longaniza y huevos fritos', price: '' },
      { name: 'Brooklyn', desc: 'Papas, salsa 4 quesos y tocino', price: '' },
      { name: 'Suiza (vegetariana)', desc: 'Papas, mix de vegetales y huevos fritos', price: '' },
      { name: 'Tequeños', desc: '5 unidades con mayo de ajo de la casa', price: '$6.500' },
      { name: 'Ensalada Cesar', desc: 'Pollo grillado, tocino crispí y parmesano', price: '$7.500' },
      { name: 'Alitas de pollo', desc: '6 unidades en distintas preparaciones', price: '' },
    ],
  },
  {
    zona: 'Pastas, carnes y postres',
    gate: 'ZONA D',
    items: [
      { name: 'Fetuccini carbonara', desc: 'Con pollo y chips de tocino', price: '$8.500' },
      { name: 'Fetuccini del mar', desc: 'Salsa blanca con camarones al ajillo', price: '$10.500' },
      { name: 'Lomo saltado', desc: 'En infusión de vino blanco, con contornos', price: '$12.500' },
      { name: 'Strogonoff', desc: 'Tiras de lomo en salsa de champiñones', price: '$12.500' },
      { name: 'Brownie con helado', desc: 'Con salsa de chocolate', price: '$4.500' },
      { name: 'Waffle belga', desc: 'Con helado y frutos rojos', price: '$4.000' },
    ],
  },
]

const STAMPS = ['AMERICANA', 'RÍO JANEIRO', 'MAULE', 'VALPARAÍSO', 'HABANA', 'SIDNEY', 'NEW YORK', 'CUBANA']

const TESTIMONIALS = [
  {
    text: 'Fui con mi familia, estaba todo muy rico y el servicio excelente.',
    author: 'Catalina Bravo',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Muy rica comida, abundante, buen precio, limpio.',
    author: 'Erica Barbotti',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Excelente ambiente moderno, exquisitos platos y excelente atención.',
    author: 'Edward Zambrano',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Los ingredientes de primera y el ambiente acogedor.',
    author: 'Ana Diaz Martinez',
    meta: 'reseña de Google · 5 estrellas',
  },
]

/** Sello circular tipo timbre de pasaporte. */
function Stamp({ text, color }: { text: string; color: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center justify-center w-[76px] h-[76px] md:w-[92px] md:h-[92px] rounded-full border-2 border-dashed text-[9px] md:text-[11px] font-bold tracking-[0.12em] text-center px-2 -rotate-6`}
      style={{ borderColor: color, color }}
      aria-hidden="true"
    >
      {text}
    </span>
  )
}

export default function PassportPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .pp-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .pp-btn:hover { transform: translateY(-2px) rotate(-0.5deg); filter: brightness(1.06); }
        .pp-btn:active { transform: translateY(0) scale(0.97); }
        .pp-btn:focus-visible { outline: 3px solid ${C.mustard}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(27,36,48,0.95)',
          ink: '#F3EBD8',
          line: 'rgba(243,235,216,0.2)',
          btnBg: C.mustard,
          btnInk: C.navy,
        }}
      />

      {/* ── Hero: la portada del pasaporte ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.navy }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de Passport: mesas de madera, mural con skyline de ciudades y avión decorativo colgando del techo"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(27,36,48,0.72) 0%, rgba(27,36,48,0.35) 40%, rgba(27,36,48,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`}
              style={{ color: C.mustard }}
            >
              Constitución → el mundo · {BIZ.hours}
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.92] text-[clamp(3.4rem,11vw,8.5rem)] mb-5`}
              style={{ color: C.paper }}
            >
              Cómete
              <br />
              el <span style={{ color: C.mustard }}>mundo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8 font-medium" style={{ color: 'rgba(243,235,216,0.9)' }}>
              Hamburguesas, pizzas y piqueos con nombres de ciudades.
              Cada plato es un destino: pide tu pasaporte en la barra.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} pp-btn uppercase tracking-wide text-base md:text-lg px-7 py-2.5 tap-44`}
                style={{ backgroundColor: C.mustard, color: C.navy }}
              >
                Reservar mesa
              </a>
              <a
                href="#destinos"
                className={`${display.className} pp-btn uppercase tracking-wide text-base md:text-lg px-7 py-2.5 border-2 tap-44`}
                style={{ borderColor: C.mustard, color: C.mustard }}
              >
                Ver destinos
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Tira de sellos ── */}
      <div className="py-6 md:py-8 overflow-hidden border-b-4" style={{ backgroundColor: C.wine, borderColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-4 md:gap-6">
          {STAMPS.map((s, i) => (
            <Stamp key={s} text={s} color={i % 2 ? C.mustard : C.paper} />
          ))}
        </div>
      </div>

      {/* ── Destinos: la carta como itinerario ── */}
      <section id="destinos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.wine }}>
                La carta · itinerario de vuelo
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95]`} style={{ color: C.navy }}>
                Destinos del día
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: C.muted }}>
              Carta real publicada por el local. Los nombres son ciudades:
              elige tu destino y sella el pasaporte.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {DESTINOS.map((z, zi) => (
            <Reveal key={z.zona} className="col-span-12 md:col-span-6" delay={zi * 80}>
              <article
                className="h-full border-2"
                style={{ borderColor: C.navy, backgroundColor: '#FFFFFF' }}
              >
                {/* tarjeta de embarque */}
                <header
                  className={`${mono.className} flex items-center justify-between px-5 py-3 border-b-2 border-dashed text-[11px] md:text-xs font-bold uppercase tracking-[0.2em]`}
                  style={{ borderColor: C.navy, backgroundColor: C.navy, color: C.paper }}
                >
                  <span>{z.zona}</span>
                  <span style={{ color: C.mustard }}>{z.gate}</span>
                </header>
                <ul className="divide-y" style={{ borderColor: C.line }}>
                  {z.items.map((m) => (
                    <li key={m.name} className="px-5 py-3.5">
                      <div className="flex items-baseline gap-3">
                        <span className={`${display.className} uppercase text-lg md:text-xl`} style={{ color: C.navy }}>
                          {m.name}
                        </span>
                        <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(38,32,26,0.35)' }} aria-hidden="true" />
                        {m.price && (
                          <span className={`${mono.className} text-sm md:text-base font-bold`} style={{ color: C.wine }}>
                            {m.price}
                          </span>
                        )}
                      </div>
                      <p className="text-xs md:text-sm mt-0.5" style={{ color: C.muted }}>
                        {m.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="text-xs mt-6" style={{ color: C.muted }}>
            También menú de niños ($6.000), ensaladas, cócteles, vinos y
            promociones. Precios publicados por el local en su carta online.
          </p>
        </Reveal>
      </section>

      {/* ── El local: neón y fotos ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.navy, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.mustard }}>
              El local
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] mb-10 md:mb-14`}>
              Un viaje sin moverte
              <br />de Enrique Donn
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative overflow-hidden aspect-[4/3] border-2" style={{ borderColor: 'rgba(243,235,216,0.25)' }}>
                <Image
                  src={`${IMG}/neon.webp`}
                  alt="Letrero de neón con el logo de Passport sobre la barra"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-5" delay={100}>
              <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto md:h-full border-2" style={{ borderColor: 'rgba(243,235,216,0.25)' }}>
                <Image
                  src={`${IMG}/burger.webp`}
                  alt="Hamburguesa de la casa con papas"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 md:col-span-4" delay={80}>
              <div className="relative overflow-hidden aspect-square border-2" style={{ borderColor: 'rgba(243,235,216,0.25)' }}>
                <Image
                  src={`${IMG}/pizza.webp`}
                  alt="Pizza recién salida del horno"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 md:col-span-4" delay={140}>
              <div className="relative overflow-hidden aspect-square border-2" style={{ borderColor: 'rgba(243,235,216,0.25)' }}>
                <Image
                  src={`${IMG}/piqueo.webp`}
                  alt="Tabla de piqueo para compartir"
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-4" delay={200}>
              <div className="relative overflow-hidden aspect-square md:aspect-auto md:h-full border-2" style={{ borderColor: 'rgba(243,235,216,0.25)' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Passport: casa oscura con su sello circular"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 mt-10">
              <span className={`${mono.className} inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(243,235,216,0.8)' }}>
                <Stars value={4.2} color={C.mustard} className="w-4 h-4" />
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44`}
                style={{ color: C.mustard }}
              >
                {BIZ.igUser}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: timbres en el pasaporte ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] mb-10`} style={{ color: C.navy }}>
            Sellos de los que
            <br />ya viajaron
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} className="col-span-12 sm:col-span-6 lg:col-span-3" delay={i * 80}>
              <figure
                className="h-full p-5 border-2 rotate-0 odd:-rotate-1 even:rotate-1"
                style={{ borderColor: C.wine, backgroundColor: '#FFFFFF' }}
              >
                <Stars value={5} color={C.mustard} className="w-3.5 h-3.5 mb-3" />
                <blockquote className="text-sm leading-relaxed mb-4" style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.14em] font-bold`} style={{ color: C.wine }}>
                  {t.author}
                  <span className="block font-normal" style={{ color: C.muted }}>{t.meta}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={140}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-8 text-xs font-bold uppercase tracking-[0.2em] underline underline-offset-4 tap-44`}
            style={{ color: C.wine }}
          >
            Ver la ficha real en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.wine, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.mustard }}>
                  Punto de embarque
                </p>
                <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.95] mb-6`}>
                  Enrique Donn 735
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-2" style={{ color: 'rgba(243,235,216,0.85)' }}>
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.region}, Chile
                </address>
                <p className={`${mono.className} text-xs uppercase tracking-[0.16em] mb-7`} style={{ color: C.mustard }}>
                  {BIZ.hours}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} pp-btn uppercase tracking-wide text-base px-7 py-2.5 tap-44`}
                    style={{ backgroundColor: C.mustard, color: C.navy }}
                  >
                    WhatsApp directo
                  </a>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${display.className} pp-btn uppercase tracking-wide text-base px-7 py-2.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(243,235,216,0.5)', color: C.paper }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120} className="h-full">
                <div className="relative w-full overflow-hidden border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]" style={{ borderColor: 'rgba(243,235,216,0.3)' }}>
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
      <footer style={{ backgroundColor: C.navy, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element -- logo real del local */}
          <img
            src={`${IMG}/logo.webp`}
            alt="Sello de Passport Gourmet: cómete el mundo"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className={`${display.className} uppercase text-xl md:text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(243,235,216,0.7)' }}>
              {BIZ.address} · {BIZ.city}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                {BIZ.igUser}
              </a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(243,235,216,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(243,235,216,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Carta y precios reales publicados por el
            local; fotos y reseñas reales de su ficha.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.mustard }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
