import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, CARTA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  arena: '#F4EDE0',
  mar: '#14395E',
  marOsc: '#0D2A47',
  tierra: '#B5762B',
  tierraOsc: '#7A4E1B',
  ink: '#221C12',
  muted: '#6E6151',
  line: 'rgba(34,28,18,0.15)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-mar-y-tierra',
  title: 'Restaurante Mar y Tierra — del mar y de la parrilla, San Javier',
  description:
    'Machas a la parmesana, pastel de jaiba, salmón y carnes a la parrilla en Miraflores 1271, San Javier. Carta real, terraza y reserva por WhatsApp.',
  image: '/demos/restaurante-mar-y-tierra/hero.webp',
})

const NAV_LINKS = [
  { label: 'Del mar', href: '#mar' },
  { label: 'De la tierra', href: '#tierra' },
  { label: 'La carta', href: '#carta' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const MENCIONES = [
  { txt: 'cazuela', n: 5 },
  { txt: 'salmón', n: 4 },
  { txt: 'contundente', n: 4 },
  { txt: 'empanadas', n: 3 },
  { txt: 'jaiba', n: 2 },
]

function FichaLinea({ items, accent }: { items: readonly { name: string; price: string }[]; accent: string }) {
  return (
    <ul className="divide-y divide-dashed" style={{ borderColor: C.line }}>
      {items.map((m) => (
        <li key={m.name} className="py-3 flex items-baseline gap-3">
          <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>{m.name}</span>
          <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(34,28,18,0.3)' }} aria-hidden="true" />
          <span className={`${display.className} text-lg`} style={{ color: accent }}>{m.price}</span>
        </li>
      ))}
    </ul>
  )
}

export default function MarYTierraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.arena, color: C.ink }}
    >
      <style>{`
        .myt-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .myt-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .myt-btn:active { transform: scale(0.97); }
        .myt-btn:focus-visible { outline: 3px solid ${C.mar}; outline-offset: 3px; }
        .myt-btn-dark:focus-visible { outline-color: ${C.arena}; }
        .myt-card { transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .myt-card:hover { transform: translateY(-4px); box-shadow: 0 14px 30px rgba(20,57,94,0.18); }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,237,224,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.mar,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el mar y la tierra en una mesa ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.marOsc }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Mesa servida de Mar y Tierra: camarones al pil-pil, tabla de carnes con longaniza, papas fritas, pan y pebre"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,42,71,0.66) 0%, rgba(13,42,71,0.15) 42%, rgba(13,42,71,0.93) 100%)',
          }}
        />
        <div className="absolute top-[72px] md:top-[88px] right-5 md:right-8">
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="myt-btn myt-btn-dark flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: C.arena, color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.tierra} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-48">
          <Reveal delay={80}>
            <p
              className={`${mono.className} text-[11px] md:text-xs tracking-[0.3em] uppercase mb-4`}
              style={{ color: 'rgba(244,237,224,0.85)' }}
            >
              {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} leading-[1] tracking-[0.01em] text-[clamp(2.5rem,9vw,6.4rem)] mb-5`}
              style={{ color: '#F4EDE0' }}
            >
              El mar y la tierra
              <br />
              se juntan en{' '}
              <span style={{ color: '#E9B96E' }}>Miraflores</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: 'rgba(244,237,224,0.9)' }}>
              Machas a la parmesana, pastel de jaiba, salmón y carnes a la
              parrilla. Cocina de fondo y contundente en el centro de
              San Javier.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} myt-btn myt-btn-dark tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.tierraOsc, color: '#FFFFFF' }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className={`${display.className} myt-btn myt-btn-dark tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(244,237,224,0.6)', color: '#F4EDE0' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(244,237,224,0.25)', backgroundColor: 'rgba(13,42,71,0.55)', backdropFilter: 'blur(6px)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ color: 'rgba(244,237,224,0.82)' }}
          >
            <span>{BIZ.horarioSemana}</span>
            <span>Dom 12–18</span>
            <span>{BIZ.precio}</span>
            <span className="hidden md:inline" style={{ color: 'rgba(244,237,224,0.55)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La dualidad: del mar / de la tierra ── */}
      <section id="mar" className="scroll-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Del mar */}
          <div style={{ backgroundColor: C.mar }}>
            <div className="px-5 md:px-10 py-12 md:py-16">
              <Reveal>
                <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase mb-3`} style={{ color: 'rgba(244,237,224,0.7)' }}>
                  Primera mitad del nombre
                </p>
                <h2 className={`${display.className} leading-[1] text-[clamp(2rem,5vw,3.8rem)] mb-6`} style={{ color: '#F4EDE0' }}>
                  Del mar
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                  <Image
                    src={`${IMG}/machas.webp`}
                    alt="Machas a la parmesana gratinadas, servidas en círculo sobre plato blanco con limón"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2.5 text-sm md:text-base font-medium" style={{ color: 'rgba(244,237,224,0.92)' }}>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#7FB3D9' }} aria-hidden="true" />
                    Machas a la parmesana
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#7FB3D9' }} aria-hidden="true" />
                    Pastel de jaiba — $11.900
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#7FB3D9' }} aria-hidden="true" />
                    Salmón a la plancha o a lo pobre
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#7FB3D9' }} aria-hidden="true" />
                    Camarones al pil-pil para la mesa
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
          {/* De la tierra */}
          <div id="tierra" className="scroll-mt-20" style={{ backgroundColor: C.tierraOsc }}>
            <div className="px-5 md:px-10 py-12 md:py-16">
              <Reveal>
                <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase mb-3`} style={{ color: '#F4EDE0' }}>
                  Segunda mitad del nombre
                </p>
                <h2 className={`${display.className} leading-[1] text-[clamp(2rem,5vw,3.8rem)] mb-6`} style={{ color: '#FDF4E4' }}>
                  De la tierra
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/5] mb-6">
                  <Image
                    src={`${IMG}/tabla.webp`}
                    alt="Tabla de carnes a la parrilla con longaniza, pollo y papas rústicas"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <ul className="space-y-2.5 text-sm md:text-base font-medium" style={{ color: 'rgba(253,244,228,0.95)' }}>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#F2D49B' }} aria-hidden="true" />
                    Tabla de carnes a la parrilla
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#F2D49B' }} aria-hidden="true" />
                    Lomo vetado a lo pobre — $14.900
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#F2D49B' }} aria-hidden="true" />
                    Plateada al horno — $10.900
                  </li>
                  <li className="flex items-baseline gap-2">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0 translate-y-[-2px]" style={{ backgroundColor: '#F2D49B' }} aria-hidden="true" />
                    Cazuela y platos del día
                  </li>
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta real ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-9 md:mb-12 border-b-2 pb-5" style={{ borderColor: C.ink }}>
            <h2 className={`${display.className} leading-none text-[clamp(2rem,6vw,4rem)]`}>
              La carta,
              <br />
              <span style={{ color: C.mar }}>con sus precios</span>
            </h2>
            <p className={`${mono.className} hidden md:block text-[11px] uppercase tracking-[0.24em] text-right pb-1`} style={{ color: C.muted }}>
              Mar y Tierra
              <br />
              Miraflores 1271
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          <Reveal className="col-span-12 lg:col-span-7">
            <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <div className={`${mono.className} px-6 pt-5 pb-3 text-[10px] uppercase tracking-[0.24em] border-b border-dashed`} style={{ color: C.muted, borderColor: C.line }}>
                Platos principales · incluyen acompañamiento
              </div>
              <div className="px-6 py-2">
                <FichaLinea items={CARTA.principales} accent={C.mar} />
              </div>
              <div className={`${mono.className} px-6 py-3 text-[10px] uppercase tracking-[0.2em]`} style={{ backgroundColor: '#EFE7D6', color: C.tierraOsc }}>
                Acompañamiento a elección: {CARTA.acompanamientos}
              </div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-5" delay={120}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
              <div className={`${mono.className} px-6 pt-5 pb-3 text-[10px] uppercase tracking-[0.24em] border-b border-dashed`} style={{ color: C.muted, borderColor: C.line }}>
                A lo pobre
              </div>
              <div className="px-6 py-2">
                <FichaLinea items={CARTA.pobres} accent={C.tierraOsc} />
              </div>
            </div>
            <div className="relative overflow-hidden rounded-xl aspect-[4/3] mt-6 shadow-md" style={{ border: `1px solid ${C.line}` }}>
              <Image
                src={`${IMG}/pobre.webp`}
                alt="Lomo a lo pobre con dos huevos fritos, cebolla caramelizada y papas fritas"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
              Precios transcritos de la carta del local
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: '#EDE4D1' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <h2 className={`${display.className} leading-[1] text-[clamp(2rem,5.5vw,4rem)] mb-5`}>
                  Comedor amplio,
                  <br />
                  <span style={{ color: C.tierraOsc }}>terraza de madera</span>
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  <p>
                    En Miraflores 1271, a pasos del centro de San Javier,
                    la casa recibe con comedor amplio y luminoso y una
                    terraza techada de madera para las tardes largas.
                  </p>
                  <p>
                    Almuerzo de familia, plato contundente y menú de niños.
                    También con retiro en puerta si el plan es comer en
                    la casa.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap gap-x-8 gap-y-4 mt-8">
                  <div className="border-l-4 pl-4" style={{ borderColor: C.mar }}>
                    <p className={`${display.className} text-3xl leading-none`}>{BIZ.rating}★</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      en Google
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.tierra }}>
                    <p className={`${display.className} text-3xl leading-none`}>{BIZ.reviews}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      reseñas
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.mar }}>
                    <p className={`${display.className} text-3xl leading-none`}>Desde $7.900</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-1`} style={{ color: C.muted }}>
                      plato principal
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
              <Reveal className="col-span-2" delay={80}>
                <div className="relative overflow-hidden rounded-xl aspect-[16/9] shadow-md" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Comedor amplio de Mar y Tierra con mesas, sillas burdeo y un cuadro grande del mar"
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: C.muted }}>
                  El comedor, con el mar colgado en la pared
                </p>
              </Reveal>
              <Reveal className="col-span-2 md:col-span-1" delay={140}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="Terraza techada de madera con plantas y mesas rústicas"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: C.muted }}>
                  La terraza techada
                </p>
              </Reveal>
              <Reveal className="col-span-2 md:col-span-1" delay={200}>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-md" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/schop.webp`}
                    alt="Schop de cerveza Calafate en la barra del restaurant"
                    fill
                    sizes="(min-width: 1024px) 28vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-2`} style={{ color: C.muted }}>
                  Y el schop de cortesía de la casa
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.marOsc }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4 mb-9 md:mb-12">
              <h2 className={`${display.className} leading-none text-[clamp(2rem,6vw,4rem)]`} style={{ color: '#F4EDE0' }}>
                La mesa lo dice
                <br />
                <span style={{ color: '#E9B96E' }}>en Google</span>
              </h2>
              <div className="md:ml-auto flex items-center gap-3 rounded-full px-5 py-3" style={{ backgroundColor: C.tierraOsc }}>
                <Stars value={BIZ.rating} color="#FFE3B0" className="w-4 h-4" />
                <span className={`${display.className} text-lg`} style={{ color: '#FFF6E8' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="col-span-12 lg:col-span-7">
              <figure className="rounded-xl p-6 md:p-8" style={{ backgroundColor: 'rgba(244,237,224,0.08)', border: '1px solid rgba(244,237,224,0.2)' }}>
                <Stars value={5} color="#E9B96E" className="w-4 h-4 mb-4" />
                <blockquote className="text-base md:text-lg leading-relaxed font-medium" style={{ color: '#F4EDE0' }}>
                  “Excelente lugar para ir a comer en familia, rico,
                  contundente y a buen precio — platos desde los $8.900,
                  incluso menú de niños. Bebestibles a buen precio, amplia
                  carta, excelente atención y rapidez. El lugar es amplio,
                  muy limpio. Volvemos sí o sí.”
                </blockquote>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-5`} style={{ color: 'rgba(244,237,224,0.65)' }}>
                  María Paz Belmar Selman · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-12 lg:col-span-5" delay={120}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: 'rgba(244,237,224,0.7)' }}>
                Lo que más se menciona
                <br />
                en las reseñas
              </p>
              <ul className="space-y-3">
                {MENCIONES.map((m) => (
                  <li key={m.txt} className="flex items-baseline gap-3">
                    <span className={`${display.className} text-2xl md:text-3xl`} style={{ color: '#F4EDE0' }}>
                      {m.txt}
                    </span>
                    <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(244,237,224,0.3)' }} aria-hidden="true" />
                    <span className={`${mono.className} text-xs`} style={{ color: '#E9B96E' }}>
                      ×{m.n} reseñas
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block mt-7 text-sm tracking-[0.06em] underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: '#E9B96E', textDecorationColor: 'rgba(233,185,110,0.4)' }}
              >
                Ver la ficha en Google →
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <h2 className={`${display.className} leading-[1] text-[clamp(2.2rem,6vw,4.4rem)] mb-6`}>
                En Miraflores,
                <br />
                <span style={{ color: C.mar }}>a pasos del centro</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.muted }}>
                Miraflores 1271, San Javier. Consumo en el local y retiro
                en puerta.
              </p>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-medium" style={{ color: C.ink }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className={`${mono.className} text-xs md:text-sm leading-relaxed mb-8`} style={{ color: C.muted }}>
                <p>{BIZ.horarioSemana}</p>
                <p>{BIZ.horarioDomingo}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} myt-btn tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                  style={{ backgroundColor: C.mar, color: '#FFFFFF' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} myt-btn tracking-[0.04em] text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                  style={{ borderColor: C.mar, color: C.mar }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <Reveal delay={140} className="h-full">
              <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[300px]" style={{ border: `2px solid ${C.mar}` }}>
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
      <footer style={{ backgroundColor: C.marOsc, color: '#F4EDE0' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-lg md:text-xl leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(244,237,224,0.65)' }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,224,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,237,224,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F4EDE0' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Las fotos, la carta con precios, las reseñas
            y los datos salen de su ficha real de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E9B96E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
