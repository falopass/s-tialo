import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_SUSHI, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F5EEE1',
  card: '#FBF6EB',
  ink: '#232018',
  muted: '#6A5F4D',
  teja: '#9C4A2F',
  sage: '#5A6B48',
  night: '#1D1B16',
  line: 'rgba(35,32,24,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-pehuen',
  title: 'Restaurant Pehuén - Cocina chilena de día y sushi de noche en Yerbas Buenas',
  description:
    'Casa de comidas en Max Jara 33, Yerbas Buenas, Región del Maule. Comida casera típica chilena, patio con terraza y Pehuén Sushi con delivery por la noche.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'De día', href: '#dia' },
  { label: 'De noche', href: '#noche' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#llegar' },
]

const PLATOS_DIA = [
  {
    src: `${IMG}/empanadas.webp`,
    alt: 'Empanadas de horno recién salidas sobre la lata',
    nombre: 'Empanadas de horno',
    detalle: 'Salen de la lata al mediodía',
  },
  {
    src: `${IMG}/pescado-frito.webp`,
    alt: 'Pescado frito con ensalada surtida servido en el restaurante',
    nombre: 'Pescado frito con ensalada',
    detalle: 'Plato de la casa, contundente',
  },
  {
    src: `${IMG}/churrasco.webp`,
    alt: 'Churrasco con palta y tomate en pan amasado',
    nombre: 'Churrasco casero',
    detalle: 'Con palta y tomate, al pan',
  },
  {
    src: `${IMG}/salon.webp`,
    alt: 'Comedor del restaurante preparado para un almuerzo de grupo',
    nombre: 'Almuerzos para grupos',
    detalle: 'El comedor se arregla para la ocasión',
  },
]

const PROMOS_SUSHI = [
  { nombre: 'Hand roll', precio: '$2.500' },
  { nombre: 'Promo acevichado', precio: '$1.990' },
  { nombre: 'Promos de 30 a 80 cortes', precio: '$4.990 a $15.490' },
]

const RESENAS = [
  {
    nombre: 'Esteban Flores',
    cuando: 'Hace 6 meses',
    estrellas: 5,
    texto:
      'Buen restaurant, nada lujoso pero todo muy rico y abundante. La atención rápida y muy amables. Se nota el sabor casero en sus comidas. El pollo mariscal 10/10, hasta con papas fritas caseras. El pastel de choclo con un tuto largo incluido, buenísimo.',
  },
  {
    nombre: 'Javiera Durán',
    cuando: 'Hace un año',
    estrellas: 5,
    texto: 'Rico el sushi y los mojitos. Hubo espera pero valió la pena. Muy bonito el lugar.',
  },
  {
    nombre: 'Charly Amenábar',
    cuando: 'Hace 5 meses',
    estrellas: 5,
    texto: 'Muy rica la comida, platos contundentes a buen precio.',
  },
]

export default function RestaurantPehuenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .ph-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .ph-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .ph-btn:active { transform: translateY(0) scale(0.97); }
        .ph-btn:focus-visible { outline: 3px solid ${C.teja}; outline-offset: 3px; }
        .ph-strip { scrollbar-width: none; }
        .ph-strip::-webkit-scrollbar { display: none; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,238,225,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.teja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: panel crema + fachada roja a media pantalla ── */}
      <section id="inicio" className="pt-[60px] md:pt-[68px]">
        <div className="grid grid-cols-12 min-h-[88vh]">
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-center px-5 md:px-10 py-12 md:py-16 order-2 lg:order-1">
            <Reveal>
              <p
                className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-5"
                style={{ color: C.teja }}
              >
                Casa de comidas · {BIZ.city}
              </p>
              <h1
                className={`${display.className} font-black leading-[0.98] tracking-[-0.015em] text-[clamp(2.6rem,7.5vw,5.2rem)] mb-6`}
              >
                De día, cazuela.
                <br />
                <em className="font-medium" style={{ color: C.teja }}>
                  De noche, sushi.
                </em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8">
                El Pehuén es la casa de comidas de Yerbas Buenas: platos
                contundentes a buen precio al mediodía, mesas en la terraza
                entre las plantas, y por la noche Pehuén Sushi con delivery.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ph-btn text-sm font-bold px-6 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                >
                  Consultar el menú de hoy
                </a>
                <a
                  href="#noche"
                  className="ph-btn text-sm font-bold px-6 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver el sushi de noche
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm tap-44"
                style={{ color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.teja} />
                <span>
                  {String(BIZ.rating).replace('.', ',')} en Google · {BIZ.reviews} reseñas
                </span>
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 relative min-h-[46vh] lg:min-h-0 order-1 lg:order-2">
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Fachada roja de Restaurant Pehuén en Yerbas Buenas, con su pendón pintado a la entrada"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute bottom-0 inset-x-0 px-5 py-3"
              style={{ background: 'linear-gradient(0deg, rgba(29,27,22,0.72) 0%, rgba(29,27,22,0) 100%)' }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(245,238,225,0.9)' }}>
                {BIZ.address}, {BIZ.city}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── De día: cocina chilena ── */}
      <section id="dia" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-3 border-b-2 pb-5" style={{ borderColor: C.ink }}>
              <h2
                className={`${display.className} font-black leading-[0.95] text-[clamp(2.2rem,6.5vw,4.2rem)]`}
              >
                El mediodía
              </h2>
              <p
                className={`${display.className} italic text-lg md:text-xl`}
                style={{ color: C.sage }}
              >
                comida casera típica chilena
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-9">
              La cocina de día es la de siempre: cazuela, pastel de choclo
              con tuto, pollo mariscal con papas fritas caseras y el menú
              del día a precio de pueblo (~$3.000 según quienes comen aquí).
            </p>
          </Reveal>
        </div>
        {/* tira de platos con snap-scroll en móvil, grilla en escritorio */}
        <div className="ph-strip flex gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 md:grid md:grid-cols-4 md:overflow-visible max-w-6xl md:mx-auto">
          {PLATOS_DIA.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 90} className="snap-start shrink-0 w-[76%] md:w-auto">
              <figure className="h-full" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 24vw, 76vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-4">
                  <p className={`${display.className} font-extrabold text-lg leading-tight`}>{p.nombre}</p>
                  <p className="text-sm mt-1" style={{ color: C.muted }}>
                    {p.detalle}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal delay={140}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ph-btn inline-block text-sm font-bold px-6 py-3 rounded-full mt-9 tap-44"
              style={{ backgroundColor: C.sage, color: '#FFFFFF' }}
            >
              Reservar almuerzo por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Transición sol → noche ── */}
      <div style={{ backgroundColor: C.teja }} aria-hidden="true">
        <p
          className={`${display.className} italic text-center text-xl md:text-3xl py-6 px-5`}
          style={{ color: C.paper }}
        >
          …y cuando baja el sol, la cocina cambia de manos
        </p>
      </div>

      {/* ── De noche: Pehuén Sushi ── */}
      <section id="noche" className="scroll-mt-20" style={{ backgroundColor: C.night, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <p
                  className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-4"
                  style={{ color: '#E8B04B' }}
                >
                  Pehuén Sushi · solo de noche
                </p>
                <h2
                  className={`${display.className} font-black leading-[0.98] text-[clamp(2.2rem,6.5vw,4.2rem)] mb-6`}
                >
                  El sushi llega
                  <br />
                  a tu puerta
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-7" style={{ color: 'rgba(245,238,225,0.82)' }}>
                  Del mismo local sale Pehuén Sushi por las noches, con
                  promos para llevar y delivery en Yerbas Buenas. Los
                  precios de abajo son los del volante que reparten.
                </p>
                <ul className="mb-8">
                  {PROMOS_SUSHI.map((p) => (
                    <li
                      key={p.nombre}
                      className="flex items-baseline gap-3 py-3.5"
                      style={{ borderBottom: '1px solid rgba(245,238,225,0.16)' }}
                    >
                      <span className={`${display.className} font-bold text-lg md:text-xl`}>{p.nombre}</span>
                      <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(245,238,225,0.35)' }} aria-hidden="true" />
                      <span className={`${display.className} font-black text-lg md:text-xl`} style={{ color: '#E8B04B' }}>
                        {p.precio}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_SUSHI}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ph-btn text-sm font-bold px-6 py-3 rounded-full tap-44"
                    style={{ backgroundColor: '#E8B04B', color: C.night }}
                  >
                    Pedir sushi: {BIZ.sushiDeliveryDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140}>
                <div className="relative aspect-[4/5] max-w-sm mx-auto overflow-hidden rounded-sm" style={{ border: '1px solid rgba(245,238,225,0.25)' }}>
                  <Image
                    src={`${IMG}/promos-sushi.webp`}
                    alt="Volante real de Pehuén Sushi con las promociones y el teléfono de delivery"
                    fill
                    sizes="(min-width: 1024px) 42vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <p
                  className="text-center text-xs font-bold uppercase tracking-[0.18em] mt-3"
                  style={{ color: 'rgba(245,238,225,0.6)' }}
                >
                  El volante real de Pehuén Sushi
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-3 border-b-2 pb-5" style={{ borderColor: C.ink }}>
              <h2 className={`${display.className} font-black leading-[0.95] text-[clamp(2.2rem,6.5vw,4.2rem)]`}>
                Palabra de comensal
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={BIZ.rating} color={C.teja} />
                <p className="font-bold text-sm">
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas en Google
                </p>
              </div>
            </div>
            <p className="text-sm mb-9" style={{ color: C.muted }}>
              Citas textuales de la ficha de Google Maps.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100} className="col-span-12 md:col-span-4">
                <figure className="h-full flex flex-col p-6" style={{ backgroundColor: C.card, borderTop: `4px solid ${C.teja}` }}>
                  <Stars value={r.estrellas} color={C.teja} className="w-4 h-4 mb-4" />
                  <blockquote
                    className={`${display.className} italic text-base md:text-lg leading-relaxed flex-1 mb-5`}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-xs font-bold uppercase tracking-[0.14em]" style={{ color: C.muted }}>
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
              style={{ color: C.teja, textDecorationColor: 'rgba(156,74,47,0.4)' }}
            >
              Ver la ficha real en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El patio ── */}
      <section aria-label="La terraza y el patio" className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Mesa de la terraza del Pehuén rodeada de plantas y árboles del patio"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-5">
              <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden">
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor de arriba del restaurante con vigas de madera y plantas"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${display.className} italic text-lg md:text-xl mt-4`} style={{ color: C.sage }}>
                Un patio con plantas y mesas bajo los árboles:
                en verano el almuerzo se toma afuera.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.sage }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6">
              <Reveal>
                <p className="text-xs md:text-sm font-bold uppercase tracking-[0.24em] mb-4" style={{ color: 'rgba(245,238,225,0.85)' }}>
                  Cómo llegar
                </p>
                <h2
                  className={`${display.className} font-black leading-[0.98] text-[clamp(2.2rem,6vw,3.8rem)] mb-5`}
                  style={{ color: C.paper }}
                >
                  Max Jara 33,
                  <br />
                  Yerbas Buenas
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(245,238,225,0.9)' }}>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                  <br />
                  Delivery sushi:{' '}
                  <a href={`tel:${BIZ.sushiDeliveryTel}`} className="underline underline-offset-2 tap-44">
                    {BIZ.sushiDeliveryDisplay}
                  </a>
                </address>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ph-btn text-sm font-bold px-6 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.paper, color: C.ink }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ph-btn text-sm font-bold px-6 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: 'rgba(245,238,225,0.7)', color: C.paper }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120} className="h-full">
                <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px] overflow-hidden" style={{ border: '1px solid rgba(245,238,225,0.35)' }}>
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
      <footer style={{ backgroundColor: C.night, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-black text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,238,225,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,238,225,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,238,225,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos, la dirección, los teléfonos, los
            precios del volante de sushi y las reseñas son reales.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8B04B' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
