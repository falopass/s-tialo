import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  papel: '#FDF7EC',
  noche: '#14324B',
  rojo: '#C0272D',
  rojoOsc: '#8E1B20',
  ink: '#1D2430',
  muted: '#6A5F55',
  line: 'rgba(29,36,48,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'mily-restaurant',
  title: 'Mily Restaurant — el pick rojo de la Arturo Prat, San Javier',
  description:
    'Restaurant familiar dentro del Hotel Mily en San Javier: hamburguesas, empanadas, pizza y la cajita Mily para llevar. Pide por WhatsApp.',
  image: '/demos/mily-restaurant/hero.webp',
})

const NAV_LINKS = [
  { label: 'La cajita', href: '#cajita' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const MARQUEE = [
  'Cajita Mily',
  'Empanadas de horno',
  'Hamburguesas',
  'Pizza familiar',
  'Menú del día',
  'Sándwich mechada',
  'Café y once',
]

const PLATOS = [
  {
    n: 'N° 01',
    src: `${IMG}/empanadas.webp`,
    alt: 'Empanadas fritas doradas servidas en platos, con el pick rojo de Mily',
    name: 'Empanadas recién salidas',
    desc: 'Crujientes, de las que se piden de a dos. De las primeras cosas que salen de la cocina cada día.',
  },
  {
    n: 'N° 02',
    src: `${IMG}/pizza.webp`,
    alt: 'Pizza pepperoni recién horneada sobre fondo azul con el logo de Mily',
    name: 'Pizza para compartir',
    desc: 'Familiar o personal, para la mesa del salón o para llevar a la casa calentita.',
  },
  {
    n: 'N° 03',
    src: `${IMG}/plato.webp`,
    alt: 'Plato de fondo con bistec, huevos fritos y papas fritas',
    name: 'El plato de fondo',
    desc: 'Bistec a lo pobre, huevos encima y papas de las buenas. El almuerzo contundente de todos los días.',
  },
  {
    n: 'N° 04',
    src: `${IMG}/sandwich.webp`,
    alt: 'Sándwich de mechada con el pick rojo de Mily clavado encima',
    name: 'Sándwiches que se desarman',
    desc: 'Mechada jugosa en pan casero. Se come con las dos manos y servilletas de sobra.',
  },
  {
    n: 'N° 05',
    src: `${IMG}/cafe.webp`,
    alt: 'Café con leche en vaso alto servido en la barra de Mily',
    name: 'Y para la once',
    desc: 'Café con leche, algo dulce y la conversación larga. La mesa del fondo espera.',
  },
]

const CARTA = [
  { name: 'Cajita Mily (para llevar)', price: '$8.500' },
  { name: 'Hamburguesa doble con papas', price: '$7.900' },
  { name: 'Menú del día', price: '$6.500' },
  { name: 'Empanada de horno', price: '$2.200' },
  { name: 'Pizza familiar', price: '$9.900' },
  { name: 'Sándwich de mechada', price: '$5.500' },
]

const RESENAS = [
  {
    txt: 'Excelente lugar para comer. La comida es muy rica, las porciones son abundantes y la atención es rápida y muy amable. El local es limpio y los precios son justos.',
    autor: 'Victor Hugo Contreras',
    nota: 5,
    cuando: 'hace un mes',
  },
  {
    txt: 'La comida es muy rica, además cuentan con opciones para el almuerzo a súper buen precio. La carta tiene gran variedad.',
    autor: 'Josefa Sotomayor',
    nota: 5,
    cuando: 'hace 4 meses',
  },
  {
    txt: 'Ambiente muy amable, me recuerda a los restaurantes de los 80. Las señoras que atienden son muy amables.',
    autor: 'Bastian Rodriguez',
    nota: 3,
    cuando: 'hace 2 meses',
  },
  {
    txt: 'Lejos el mejor restaurante de San Javier.',
    autor: 'Pia Alvarez Moya',
    nota: 5,
    cuando: 'Google',
  },
]

function Checkers({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[18px] w-full"
      style={{
        backgroundImage: `repeating-conic-gradient(${flip ? C.papel : C.rojo} 0% 25%, ${flip ? C.rojo : C.papel} 0% 50%)`,
        backgroundSize: '36px 36px',
      }}
    />
  )
}

function TicketNum({ n, color = C.rojo }: { n: string; color?: string }) {
  return (
    <span
      className={`${mono.className} inline-block text-[11px] tracking-[0.2em] font-medium px-2 py-0.5 border`}
      style={{ color, borderColor: color }}
      aria-hidden="true"
    >
      {n}
    </span>
  )
}

export default function MilyRestaurantPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .mily-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .mily-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .mily-btn:active { transform: scale(0.97); }
        .mily-btn:focus-visible { outline: 3px solid ${C.noche}; outline-offset: 3px; }
        .mily-btn-dark:focus-visible { outline-color: ${C.papel}; }
        .mily-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .mily-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(20,50,75,0.16); }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(253,247,236,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el pick rojo ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.noche }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Hamburguesa doble con queso y pepinillos, papas fritas en canastita y el pick rojo de Mily"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,50,75,0.62) 0%, rgba(20,50,75,0.15) 42%, rgba(20,50,75,0.92) 100%)',
          }}
        />
        {/* sello de reseñas */}
        <div className="absolute top-[72px] md:top-[88px] right-5 md:right-8">
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mily-btn mily-btn-dark flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: C.papel, color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-48">
          <Reveal delay={80}>
            <p
              className={`${mono.className} text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4`}
              style={{ color: 'rgba(253,247,236,0.85)' }}
            >
              Arturo Prat 2545 · dentro del Hotel Mily · San Javier
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.6rem,9.5vw,6.8rem)] mb-5`}
              style={{ color: '#FDF7EC' }}
            >
              Cada plato sale
              <br />
              con su{' '}
              <span className="relative inline-block">
                <span className="absolute inset-x-[-0.06em] top-[0.1em] bottom-[0.02em] -z-10 rounded-sm" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                pick rojo
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: 'rgba(253,247,236,0.9)' }}>
              Hamburguesas, empanadas, pizza y la famosa cajita Mily.
              Cocina familiar en el hotel de la Arturo Prat, San Javier.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mily-btn mily-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} mily-btn mily-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(253,247,236,0.65)', color: '#FDF7EC' }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(253,247,236,0.25)', backgroundColor: 'rgba(20,50,75,0.55)', backdropFilter: 'blur(6px)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(253,247,236,0.82)' }}
          >
            <span>Consumo en el local</span>
            <span>Retiro y delivery</span>
            <span>{BIZ.precio}</span>
            <span className="hidden md:inline" style={{ color: 'rgba(253,247,236,0.6)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cenefa de cuadrillé (el papel de la bandeja) ── */}
      <Checkers />

      {/* ── La cajita Mily ── */}
      <section id="cajita" className="scroll-mt-20" style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-center">
            <Reveal className="col-span-12 md:col-span-6 order-2 md:order-1">
              <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase mb-3`} style={{ color: 'rgba(253,247,236,0.8)' }}>
                El favorito de la casa
              </p>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.2rem,6.5vw,4.6rem)] mb-5`}
                style={{ color: '#FDF7EC' }}
              >
                La cajita
                <br />
                Mily
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: 'rgba(253,247,236,0.92)' }}>
                Papas, carne y topping generoso en cajita, para llevar o
                comer al paso. La que los clientes nombran por su nombre
                en las reseñas.
              </p>
              <figure className="border-l-4 pl-4 mb-7" style={{ borderColor: C.papel }}>
                <blockquote className="text-sm md:text-base leading-relaxed font-medium mb-2" style={{ color: '#FDF7EC' }}>
                  “Toda su comida es rica, lo que más nos gusta es la cajita
                  Mily, siempre la compramos”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(253,247,236,0.75)' }}>
                  Jessica Echeverria · reseña de Google
                </figcaption>
              </figure>
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mily-btn mily-btn-dark inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.noche, color: '#FDF7EC' }}
              >
                Pedir la cajita
              </a>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-6 order-1 md:order-2" delay={120}>
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] shadow-2xl" style={{ border: `6px solid ${C.papel}` }}>
                <Image
                  src={`${IMG}/cajita.webp`}
                  alt="La cajita Mily: papas fritas con carne y topping en caja para llevar"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <Checkers flip />

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-9 md:mb-12 border-b-2 pb-5" style={{ borderColor: C.ink }}>
            <h2 className={`${display.className} font-extrabold uppercase tracking-[-0.01em] leading-none text-[clamp(2rem,6vw,4rem)]`}>
              De la cocina,
              <br />
              <span style={{ color: C.rojo }}>a la mesa</span>
            </h2>
            <p className={`${mono.className} hidden md:block text-[11px] uppercase tracking-[0.24em] text-right pb-1`} style={{ color: C.muted }}>
              Mily Restaurant
              <br />
              San Javier · Maule
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {PLATOS.map((p, i) => (
            <Reveal
              key={p.n}
              className={
                i === 0
                  ? 'col-span-12 md:col-span-7'
                  : i === 1
                    ? 'col-span-12 md:col-span-5'
                    : 'col-span-12 md:col-span-4'
              }
              delay={(i % 3) * 90}
            >
              <article className="mily-card h-full bg-white rounded-xl overflow-hidden shadow-sm" style={{ border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <TicketNum n={p.n} color="#FDF7EC" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`${display.className} font-bold uppercase text-lg md:text-xl leading-tight mb-1.5`} style={{ color: C.ink }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Marquee de la casa ── */}
      <div className="border-y-2 py-3 md:py-4 overflow-hidden" style={{ backgroundColor: C.noche, borderColor: C.ink }} aria-hidden="true">
        <div className={`${display.className} flex flex-wrap justify-center gap-y-1.5 text-sm md:text-base font-bold uppercase tracking-[0.1em]`} style={{ color: '#FDF7EC' }}>
          {MARQUEE.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3">{item}</span>
              <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill={C.rojo} aria-hidden="true">
                <circle cx="12" cy="12" r="5" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <TicketNum n="ORDEN 06" />
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2rem,5.5vw,4rem)] mt-4 mb-5`}
              >
                El restaurant
                <br />
                <span style={{ color: C.rojo }}>del Hotel Mily</span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  Sobre la avenida Arturo Prat, dentro del hotel que le da
                  el nombre, {BIZ.name} es la cocina de todos los días en
                  San Javier: almuerzo de semana, once larga y cajita para
                  llevar.
                </p>
                <p>
                  Salón familiar, atención directa y la puerta abierta al
                  paso de la carretera. Se puede comer en el local, retirar
                  o pedir con entrega.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                <div className="border-l-4 pl-4" style={{ borderColor: C.rojo }}>
                  <p className={`${display.className} font-extrabold text-3xl leading-none`}>{BIZ.rating}★</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                    en Google
                  </p>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: C.noche }}>
                  <p className={`${display.className} font-extrabold text-3xl leading-none`}>{BIZ.reviews}</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                    reseñas
                  </p>
                </div>
                <div className="border-l-4 pl-4" style={{ borderColor: C.rojo }}>
                  <p className={`${display.className} font-extrabold text-3xl leading-none`}>Desde 12:00</p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                    almuerzo y once
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
            <Reveal className="col-span-2" delay={80}>
              <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-md" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada del Hotel Mily sobre la avenida Arturo Prat en San Javier, con el letrero rojo del restaurant"
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: C.muted }}>
                La casa sobre la Arturo Prat
              </p>
            </Reveal>
            <Reveal className="col-span-2 md:col-span-1" delay={140}>
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón del restaurant con sillas tapizadas en rojo y televisor"
                  fill
                  sizes="(min-width: 1024px) 28vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: C.muted }}>
                El salón, adentro del hotel
              </p>
            </Reveal>
            <Reveal className="col-span-2 md:col-span-1" delay={200}>
              <div className="rounded-xl p-5 h-full flex flex-col justify-between min-h-[220px]" style={{ backgroundColor: C.noche }}>
                <p className={`${display.className} font-bold uppercase text-lg leading-snug`} style={{ color: '#FDF7EC' }}>
                  ¿Sin tiempo de
                  <br />
                  sentarte?
                </p>
                <div>
                  <p className="text-xs md:text-sm leading-relaxed mb-4" style={{ color: 'rgba(253,247,236,0.8)' }}>
                    Pide la cajita o la empanada al WhatsApp y la retiras
                    caminando por la Prat.
                  </p>
                  <a
                    href={WA_LINK_PEDIDO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mily-btn mily-btn-dark inline-block font-bold uppercase tracking-wide text-xs md:text-sm px-5 py-2.5 rounded-full tap-44`}
                    style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                  >
                    Pedir para llevar
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: '#F3ECDD' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-9 md:mb-12">
              <h2 className={`${display.className} font-extrabold uppercase tracking-[-0.01em] leading-none text-[clamp(2rem,6vw,4rem)]`}>
                Lo que dice
                <br />
                la mesa de al lado
              </h2>
              <div className="md:ml-auto flex items-center gap-3 rounded-full px-5 py-3" style={{ backgroundColor: C.noche }}>
                <Stars value={BIZ.rating} color="#F5C542" className="w-4 h-4" />
                <span className={`${display.className} font-bold text-lg`} style={{ color: '#FDF7EC' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} className={i === 0 ? 'col-span-12 md:col-span-7' : 'col-span-12 md:col-span-5'} delay={i * 80}>
                <figure className="h-full bg-white rounded-xl p-6 shadow-sm flex flex-col" style={{ border: `1px solid ${C.line}` }}>
                  <Stars value={r.nota} color={C.rojo} className="w-4 h-4 mb-3" />
                  <blockquote className="text-sm md:text-base leading-relaxed font-medium flex-1" style={{ color: C.ink }}>
                    “{r.txt}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-4`} style={{ color: C.muted }}>
                    {r.autor} · {r.cuando}
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
              className={`${display.className} inline-block mt-8 text-sm font-bold uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.rojo, textDecorationColor: 'rgba(192,39,45,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── La carta (ticket) ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <Reveal className="col-span-12 lg:col-span-4">
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2rem,5vw,3.6rem)] mb-5`}>
              La carta
              <br />
              <span style={{ color: C.rojo }}>corta y al plato</span>
            </h2>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Referencias para mostrar cómo se vería la carta. Los platos y
              precios reales se confirman con el local al publicar.
            </p>
            <span
              className={`${mono.className} inline-block text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border`}
              style={{ color: C.rojo, borderColor: C.rojo }}
            >
              Precios de muestra
            </span>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-8" delay={120}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <div className={`${mono.className} px-6 pt-5 pb-3 text-[10px] uppercase tracking-[0.24em] border-b border-dashed`} style={{ color: C.muted, borderColor: C.line }}>
                Mily Restaurant · San Javier
              </div>
              <ul className="px-6 divide-y divide-dashed" style={{ borderColor: C.line }}>
                {CARTA.map((m) => (
                  <li key={m.name} className="py-4 flex items-baseline gap-3">
                    <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>{m.name}</span>
                    <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(29,36,48,0.3)' }} aria-hidden="true" />
                    <span className={`${display.className} text-lg font-extrabold`} style={{ color: C.rojo }}>{m.price}</span>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-5" style={{ backgroundColor: '#F7F0E1' }}>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} mily-btn inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                  style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                >
                  Consultar la carta de hoy
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <TicketNum n="MESA PARA HOY" color="#FDF7EC" />
                <h2
                  className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.2rem,6vw,4.4rem)] mt-4 mb-6`}
                  style={{ color: '#FDF7EC' }}
                >
                  Sobre la Prat,
                  <br />
                  <span style={{ color: '#FF8A8E' }}>fácil de pillar</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(253,247,236,0.85)' }}>
                  En la entrada de San Javier por la avenida Arturo Prat,
                  dentro del Hotel Mily. Estacionamiento del hotel al lado.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium" style={{ color: 'rgba(253,247,236,0.92)' }}>
                  {BIZ.address} — {BIZ.dentro}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mily-btn mily-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} mily-btn mily-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: 'rgba(253,247,236,0.6)', color: '#FDF7EC' }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]" style={{ border: '2px solid rgba(253,247,236,0.35)' }}>
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
      <footer style={{ backgroundColor: '#0D2334', color: '#FDF7EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-extrabold uppercase text-lg md:text-xl leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(253,247,236,0.65)' }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(253,247,236,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(253,247,236,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FDF7EC' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los precios de la carta son de muestra; las
            fotos, las reseñas y los datos salen de su ficha real de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FF8A8E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
