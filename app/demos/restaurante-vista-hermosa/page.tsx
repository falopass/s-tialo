import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_MESA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PLATOS,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

const C = {
  crema: '#F6F0DE',
  papel: '#FDFAF0',
  tinta: '#2B2118',
  tenue: '#6B5D4B',
  teja: '#A8431E',
  bosque: '#37502F',
  linea: 'rgba(43,33,24,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-vista-hermosa',
  title: 'Restaurant Vista Hermosa — la cazuela del cruce de Vilches',
  description:
    'Comedor familiar en Bajos de Lircay, San Clemente. Cazuela de vacuno, empanadas de queso, pescado frito y pancito amasado. 4,5★ con 66 reseñas.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Los platos', href: '#platos' },
  { label: 'La casa', href: '#casa' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** Celosía de la terraza como motivo: rombo repetido en línea. */
function Celosia({ color = C.teja }: { color?: string }) {
  return (
    <div className="flex justify-center gap-2.5" aria-hidden="true">
      {Array.from({ length: 9 }).map((_, i) => (
        <svg key={i} viewBox="0 0 12 12" className="w-2.5 h-2.5" fill="none" stroke={color} strokeWidth="1.2">
          <path d="M6 0.5 L11.5 6 L6 11.5 L0.5 6 Z" />
        </svg>
      ))}
    </div>
  )
}

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.28em] mb-4"
      style={{ color: C.teja }}
    >
      {children}
    </p>
  )
}

export default function RestauranteVistaHermosaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        .vh-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .vh-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .vh-btn:active { transform: translateY(0) scale(0.97); }
        .vh-btn:focus-visible { outline: 3px solid ${C.teja}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(253,250,240,0.94)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.teja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la mesa ya está puesta ── */}
      <section id="inicio" className="pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <Reveal>
                <Celosia />
                <div
                  className="mt-6 border p-7 md:p-9 relative"
                  style={{ backgroundColor: C.papel, borderColor: C.linea }}
                >
                  <span
                    className="absolute -top-3 left-7 px-3 text-[10px] font-extrabold uppercase tracking-[0.24em]"
                    style={{ backgroundColor: C.crema, color: C.teja }}
                  >
                    Desde la olla
                  </span>
                  <h1
                    className={`${display.className} leading-[1.04] text-[clamp(2rem,5vw,3.6rem)] mb-5`}
                  >
                    En el cruce de Vilches, la cazuela llega{' '}
                    <span className={displayItalic.className} style={{ color: C.teja }}>
                      humeante
                    </span>{' '}
                    a la mesa
                  </h1>
                  <p className="text-sm md:text-base leading-relaxed mb-7" style={{ color: C.tenue }}>
                    Comedor familiar en Bajos de Lircay, San Clemente: comida
                    casera, porciones honestas y el pancito amasado con pebre
                    que abre cada almuerzo.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-6">
                    <a
                      href={WA_LINK_MESA}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="vh-btn inline-block text-sm md:text-base font-extrabold px-6 py-3 tap-44"
                      style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                    >
                      Consultar por WhatsApp
                    </a>
                    <a
                      href="#platos"
                      className="vh-btn inline-block text-sm md:text-base font-extrabold px-6 py-3 border-2 tap-44"
                      style={{ borderColor: C.tinta, color: C.tinta }}
                    >
                      Ver los platos
                    </a>
                  </div>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 tap-44"
                  >
                    <Stars value={4.5} color={C.teja} className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-extrabold" style={{ color: C.tinta }}>
                      {BIZ.rating} en Google · {BIZ.reviews} opiniones
                    </span>
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <Reveal delay={120}>
                <div className="relative overflow-hidden aspect-[4/3]" style={{ backgroundColor: C.papel }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Plato de cazuela de vacuno con choclo y arroz, junto a pan amasado, ensalada y jugo natural"
                    fill
                    priority
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute bottom-3 right-3 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.2em]"
                    style={{ backgroundColor: C.papel, color: C.teja }}
                  >
                    La cazuela, recién servida
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Lo que se pide en la mesa ── */}
      <section id="platos" className="scroll-mt-20 border-t" style={{ borderColor: C.linea, backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>La mesa del cruce</Kicker>
            <h2 className={`${display.className} leading-[1.04] text-[clamp(1.8rem,4.6vw,3.4rem)] mb-3 max-w-3xl`}>
              Lo que la gente vuelve a pedir
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-10 md:mb-14 max-w-xl" style={{ color: C.tenue }}>
              Los platos que aparecen una y otra vez en las reseñas de la
              ficha de Google — escritos por clientes reales, no por nosotros.
            </p>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6 md:gap-8">
            {PLATOS.map((p, i) => (
              <Reveal key={p.nombre} className={`col-span-12 sm:col-span-6 ${i % 2 === 1 ? 'lg:col-span-4 lg:mt-10' : 'lg:col-span-5'}`} delay={i * 90}>
                <li className="group">
                  <div
                    className="relative overflow-hidden mb-4 aspect-[4/3]"
                    style={{ backgroundColor: C.crema }}
                  >
                    <Image
                      src={p.src}
                      alt={p.nombre}
                      fill
                      sizes="(min-width: 1024px) 44vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className={`${display.className} shrink-0 w-8 h-8 flex items-center justify-center text-sm`}
                      style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`}>{p.nombre}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: C.tenue }}>{p.detalle}</p>
                    </div>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={140}>
            <div
              className="mt-12 md:mt-16 border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 justify-between"
              style={{ backgroundColor: C.bosque, borderColor: C.bosque }}
            >
              <p className={`${display.className} text-lg md:text-2xl leading-snug`} style={{ color: '#FDFAF0' }}>
                «Las 3B», dicen las reseñas: buena, bonita y barata.
              </p>
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className="vh-btn shrink-0 inline-block text-sm md:text-base font-extrabold px-6 py-3 tap-44"
                style={{ backgroundColor: C.crema, color: C.bosque }}
              >
                Pedir la mesa
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Kicker>La casa</Kicker>
          <h2 className={`${display.className} leading-[1.04] text-[clamp(1.8rem,4.6vw,3.4rem)] mb-10 md:mb-14 max-w-3xl`}>
            Frente de piedra, terraza con celosía y banderas que se ven desde la ruta
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative overflow-hidden aspect-[3/4] h-full" style={{ backgroundColor: C.papel }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada del restaurante: muro de piedra con puerta de madera roja y avisos en la entrada"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-7 grid grid-rows-2 gap-5 md:gap-6">
            <Reveal delay={100}>
              <div className="relative overflow-hidden aspect-[16/9] h-full" style={{ backgroundColor: C.papel }}>
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Terraza del comedor con mesas de madera, sillas con cojín y lámparas de mimbre bajo el techo"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={180}>
              <div className="relative overflow-hidden aspect-[16/9] h-full" style={{ backgroundColor: C.papel }}>
                <Image
                  src={`${IMG}/estacionamiento.webp`}
                  alt="Estacionamiento amplio frente al restaurante con banderas chilenas y árboles al fondo"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal delay={120}>
          <div className="grid grid-cols-12 gap-6 md:gap-8 mt-8 md:mt-10">
            <p className="col-span-12 md:col-span-5 text-sm md:text-base leading-relaxed" style={{ color: C.tenue }}>
              Estacionamiento amplio a un costado de la 115 — el auto se
              deja a la vista y la mesa queda a tres pasos. Las banderas
              del techo se ven desde la carretera.
            </p>
            <p className="col-span-12 md:col-span-5 md:col-start-8 text-sm md:text-base leading-relaxed" style={{ color: C.tenue }}>
              Adentro, mesas de madera, sillas con cojín y lámparas de
              mimbre. El comedor es sencillo y limpio, como la carta:
              pocas cosas, bien hechas.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Opiniones: al levantarse de la mesa ── */}
      <section id="opiniones" className="scroll-mt-20 border-t" style={{ borderColor: C.linea, backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.28em] mb-4" style={{ color: '#E8C97E' }}>
              Al levantarse de la mesa
            </p>
            <h2 className={`${display.className} leading-[1.04] text-[clamp(1.8rem,4.6vw,3.4rem)] mb-4 max-w-3xl`} style={{ color: '#FDFAF0' }}>
              Lo que dicen quienes ya almorzaron
            </h2>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 mb-12 md:mb-16 tap-44">
              <Stars value={4.5} color="#E8C97E" className="w-4 h-4" />
              <span className="text-xs md:text-sm font-extrabold" style={{ color: '#FDFAF0' }}>
                {BIZ.rating} en Google · {BIZ.reviews} opiniones reales
              </span>
            </a>
          </Reveal>
          <div className="space-y-10 md:space-y-14">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure className={`max-w-3xl ${i % 2 === 1 ? 'md:ml-auto md:text-right' : ''}`}>
                  <blockquote
                    className={`${i % 2 === 1 ? displayItalic.className : display.className} text-lg md:text-2xl leading-snug mb-3`}
                    style={{ color: '#FDFAF0' }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.22em]" style={{ color: '#E8C97E' }}>
                    {r.nombre} · reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Kicker>Dónde queda</Kicker>
          <h2 className={`${display.className} leading-[1.04] text-[clamp(1.8rem,4.6vw,3.4rem)] mb-10 md:mb-14 max-w-3xl`}>
            A un costado de la 115, camino a Vilches
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <div className="border p-6 md:p-8 h-full flex flex-col" style={{ backgroundColor: C.papel, borderColor: C.linea }}>
                <Celosia color={C.teja} />
                <address className="not-italic mt-6 mb-6">
                  <p className={`${display.className} text-xl md:text-2xl leading-snug mb-2`}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: C.tenue }}>
                    {BIZ.city}, {BIZ.region}, Chile
                    <br />
                    <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44 font-semibold" style={{ color: C.tinta }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </p>
                </address>
                <p className="text-sm leading-relaxed mb-7" style={{ color: C.tenue }}>
                  El comedor del cruce: parada obligada entre San Clemente
                  y el alto Lircay, antes de que la ruta empiece a subir
                  en serio.
                </p>
                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vh-btn inline-block text-sm font-extrabold px-6 py-3 tap-44"
                    style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vh-btn inline-block text-sm font-extrabold px-6 py-3 border-2 tap-44"
                    style={{ borderColor: C.tinta, color: C.tinta }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={140} className="h-full">
              <div
                className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                style={{ borderColor: C.linea }}
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: '#FDFAF0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} text-lg md:text-xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: '#C9BBA6' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            {' · '}
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(253,250,240,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed" style={{ color: '#C9BBA6' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FDFAF0' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, reseñas y fotos reales de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8C97E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
