import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

// Del individual de papel kraft con el sello ovalado del restaurante,
// y el amarillo de la etiqueta del agua Panimávida.
const C = {
  kraft: '#EBDFC6',
  papel: '#F6EFDC',
  tinta: '#2C2318',
  mostaza: '#E2A62A',
  mostazaOsc: '#8A6317',
  suave: '#6E6149',
  linea: 'rgba(44,35,24,0.18)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'catedral-restaurant',
  title: 'Catedral Restaurant — Cocina con sello propio en Panimávida',
  description:
    'Tiradito, lomo saltado, pastas y terraza en Panimávida, Colbún. El restaurante que sirve sobre papel con su propio sello. Reserva por WhatsApp.',
  image: `${IMG}/tiradito.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const PLATOS = [
  {
    src: `${IMG}/tiradito.webp`,
    nombre: 'Tiradito de salmón',
    detalle: 'El plato que repiten las reseñas, servido sobre el papel con sello de la casa.',
    alt: 'Tiradito de salmón con aliños servido sobre papel kraft con el sello Catedral',
  },
  {
    src: `${IMG}/lomo-saltado.webp`,
    nombre: 'Lomo saltado',
    detalle: 'Con arroz y papas, junto a la cerveza artesanal del valle.',
    alt: 'Lomo saltado con arroz y papas fritas junto a una cerveza artesanal local',
  },
  {
    src: `${IMG}/pasta.webp`,
    nombre: 'Fettuccine de la casa',
    detalle: 'Pastas con camarones y crema, de las que aparecen en la mesa.',
    alt: 'Fettuccine en salsa cremosa con camarones y perejil',
  },
  {
    src: `${IMG}/papas-carne.webp`,
    nombre: 'Papas rústicas y carne',
    detalle: 'Del horno y de la olla, con su pan, sobre el sello de siempre.',
    alt: 'Plato con papas rústicas, carne y pan sobre papel kraft con sello',
  },
]

const RESENAS = [
  {
    texto: 'Excelente preparación, ingredientes de calidad, lomo saltado exquisito, atención muy amable, fácil estacionar. El mejor de Panimávida.',
    nombre: 'Francisco Grandon (Panxo)',
  },
  {
    texto: 'Segunda visita y no defraudan: tiradito de salmón y camarones al ajillo de entrada, pastas y lomo vetado después. El pisco sour, exquisito.',
    nombre: 'Isabel',
  },
  {
    texto: 'Lugar modesto y sencillo, pero la comida es sabrosa y abundante, y la cerveza artesanal local acompaña perfecto.',
    nombre: 'Jessica Núñez',
  },
  {
    texto: 'Excelente lugar, comida de primer nivel, ambiente agradable y al alcance de todos los bolsillos.',
    nombre: 'Osvaldo Estrada',
  },
]

// El sello ovalado del individual de mesa.
function Sello({ linea1, linea2, className = '' }: { linea1: string; linea2: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex flex-col items-center justify-center rounded-[50%] px-6 py-4 ${className}`}
      style={{
        border: `2px solid ${C.tinta}`,
        boxShadow: `inset 0 0 0 3px ${C.kraft}, inset 0 0 0 5px ${C.tinta}`,
        transform: 'rotate(-6deg)',
        color: C.tinta,
        opacity: 0.85,
      }}
    >
      <span className={`${display.className} uppercase tracking-[0.28em] text-sm md:text-base leading-tight`}>{linea1}</span>
      <span className="uppercase tracking-[0.34em] text-[10px] md:text-xs mt-1">{linea2}</span>
    </div>
  )
}

// Tarjeta de papel con foto, como el individual sobre la mesa.
function Estampilla({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`p-2.5 pb-3 ${className}`}
      style={{
        backgroundColor: C.papel,
        border: `1px solid ${C.linea}`,
        boxShadow: '5px 6px 0 rgba(44,35,24,0.14)',
      }}
    >
      <div className="relative w-full overflow-hidden aspect-[4/3]">
        <Image src={src} alt={alt} fill sizes="(min-width: 768px) 25vw, 50vw" className="object-cover" />
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.kraft, color: C.tinta }}>
      <BlitzNav
        name={<span className={display.className}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        theme={{
          over: 'light',
          bar: C.kraft,
          ink: C.tinta,
          line: C.linea,
          btnBg: C.tinta,
          btnInk: C.papel,
        }}
      />

      {/* ── Hero: la mesa con sello ── */}
      <section id="inicio" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pt-40 md:pb-20 grid grid-cols-12 gap-8 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <Sello linea1="Catedral" linea2="Panimávida · Chile" className="mb-7" />
              <h1 className={`${display.className} text-[clamp(2.5rem,7vw,4.6rem)] leading-[1.05] mb-5`}>
                Cocina con sello propio,{' '}
                <span style={{ color: C.mostazaOsc }}>en Panimávida</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-7 max-w-md" style={{ color: C.suave }}>
                Tiradito, lomo saltado y pastas servidas sobre papel con el
                sello de la casa, en el pueblo de las aguas termales.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-7">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.tinta, color: C.papel }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#cocina"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 transition-transform active:scale-95 tap-44"
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Ver la cocina
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold tap-44"
                style={{ color: C.tinta }}
              >
                <Stars value={BIZ.rating} color={C.mostazaOsc} />
                <span>
                  {BIZ.rating} en Google Maps · {BIZ.reviews} reseñas
                </span>
              </a>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={120}>
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-8">
                  <Estampilla
                    src={`${IMG}/tiradito.webp`}
                    alt="Tiradito de salmón servido sobre el papel kraft con el sello Catedral Restaurant"
                  />
                </div>
                <div className="col-span-4 pt-10">
                  <Estampilla
                    src={`${IMG}/agua-panimavida.webp`}
                    alt="Botella de vidrio de agua mineral Panimávida con etiqueta amarilla"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Franja sello ── */}
      <div className="py-3 md:py-4 overflow-hidden" style={{ backgroundColor: C.mostaza }} aria-hidden="true">
        <div className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm md:text-base uppercase tracking-[0.3em]`} style={{ color: C.tinta }}>
          <span>Catedral</span>
          <span>Panimávida</span>
          <span>Colbún</span>
          <span>Maule</span>
        </div>
      </div>

      {/* ── De la cocina ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-2xl mb-10 md:mb-14">
            <h2 className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-4`}>
              Los platos que nombran{' '}
              <span style={{ color: C.mostazaOsc }}>en las reseñas</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
              Fotos reales de la mesa. Tiradito, camarones al ajillo, lomo
              saltado, ceviche y la cerveza artesanal del valle.
            </p>
          </div>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
          {PLATOS.map((p, i) => (
            <Reveal key={p.nombre} delay={i * 90} className={i % 2 === 1 ? 'md:translate-y-8' : ''}>
              <li>
                <Estampilla src={p.src} alt={p.alt} />
                <h3 className={`${display.className} text-lg md:text-xl mt-4 leading-tight`}>{p.nombre}</h3>
                <p className="text-sm leading-relaxed mt-1" style={{ color: C.suave }}>{p.detalle}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── La terraza ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center mb-10 md:mb-14">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] mb-5`}>
                  Terraza al sol,{' '}
                  <span style={{ color: C.mostazaOsc }}>quincho a la sombra</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed" style={{ color: C.suave }}>
                  Mesas de madera afuera y un quincho con plantas para los días
                  de calor. Estacionar es fácil, justo frente al local.
                </p>
              </Reveal>
            </div>
            <Reveal className="col-span-12 md:col-span-7" delay={100}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <Estampilla
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza techada del restaurante con mesas de madera y vista a la calle de Panimávida"
                  />
                </div>
                <div className="col-span-5 pt-8">
                  <Estampilla
                    src={`${IMG}/quincho.webp`}
                    alt="Quincho interior con barrica, sillas amarillas y plantas colgantes"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal>
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-12 md:col-span-4 md:order-2 md:col-start-9">
                <Sello linea1="Cocina" linea2="de la casa" className="md:ml-auto md:flex" />
              </div>
              <div className="col-span-12 md:col-span-8 md:order-1 md:col-start-1">
                <Estampilla
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor interior del restaurante con mesas servidas junto a las ventanas"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: '#E3D5B6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05]`}>
                El mejor de Panimávida,{' '}
                <span style={{ color: C.mostazaOsc }}>según sus mesas</span>
              </h2>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold tap-44" style={{ color: C.tinta }}>
                <Stars value={BIZ.rating} color={C.mostazaOsc} />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 80}>
                <figure
                  className="h-full p-6"
                  style={{
                    backgroundColor: C.papel,
                    border: `1px solid ${C.linea}`,
                    boxShadow: '5px 6px 0 rgba(44,35,24,0.12)',
                  }}
                >
                  <blockquote className={`${display.className} text-lg leading-relaxed mb-5`}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-sm" style={{ color: C.suave }}>
                    <span className="font-semibold block" style={{ color: C.tinta }}>{r.nombre}</span>
                    Reseña en Google Maps
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-12 items-stretch">
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
            <Reveal>
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.2rem)] leading-[1.05] mb-6`} style={{ color: C.papel }}>
                En la calle del pueblo{' '}
                <span style={{ color: C.mostaza }}>de las termas</span>
              </h2>
              <address className="not-italic space-y-4 mb-8">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                ].map(([k, v]) => (
                  <p key={k} className="text-base leading-relaxed" style={{ color: 'rgba(246,239,220,0.7)' }}>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] mb-0.5" style={{ color: C.mostaza }}>
                      {k}
                    </span>
                    {v}
                  </p>
                ))}
              </address>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.mostaza, color: C.tinta }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold border-2 transition-transform active:scale-95 tap-44"
                  style={{ borderColor: 'rgba(246,239,220,0.35)', color: C.papel }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-7" delay={120}>
            <div
              className="relative w-full overflow-hidden border-2 aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
              style={{ borderColor: 'rgba(246,239,220,0.3)' }}
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#1E1710', color: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,239,220,0.65)' }}>
            {BIZ.address}, {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,239,220,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(246,239,220,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.papel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.mostaza }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
