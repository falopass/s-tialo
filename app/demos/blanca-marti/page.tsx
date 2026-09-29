import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_MESA,
  MAPS_EMBED,
  IMG,
  HOURS,
  PLATOS,
  ALACENA,
  REVIEWS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

// Paleta de la casa amarilla de Vichuquén: crema del mantel de papel,
// carmín del logo con corona, amarillo de la fachada, madera del comedor.
const C = {
  paper: '#FBF4E6',
  paper2: '#F3E8D2',
  ink: '#2A1C15',
  inkSoft: '#5D4A3A',
  red: '#A81E3F',
  redDeep: '#7C122E',
  yellow: '#E9B23B',
  wood: '#6B4326',
  line: 'rgba(42,28,21,0.16)',
  lineSoft: 'rgba(42,28,21,0.09)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'blanca-marti',
  title: 'Blanca Marti — Restaurante y cafetería en Vichuquén',
  description:
    'La casa amarilla de la Av. Ignacio Carrera Pinto: comida casera, conservas con su etiqueta y la mesa que sirve Blanquita. 4,9★ en Google. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'La alacena', href: '#alacena' },
  { label: 'Las reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#contacto' },
]

function Stars({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((s) => (
        <svg key={s} viewBox="0 0 20 20" className="w-3 h-3" fill={C.red}>
          <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
        </svg>
      ))}
    </span>
  )
}

/** Logo real del perfil de Instagram, en chip redondo. */
function LogoChip({ size = 52 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full overflow-hidden border-2 bg-white shrink-0"
      style={{ width: size, height: size, borderColor: C.red }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
      <img
        src={`${IMG}/logo.webp`}
        alt="Logo de Blanca Marti Delicias"
        className="w-full h-full object-cover"
      />
    </span>
  )
}

export default function BlancaMartiPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .bm-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .bm-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .bm-btn:active { transform: translateY(0) scale(0.97); }
        .bm-btn:focus-visible { outline: 3px solid ${C.yellow}; outline-offset: 3px; }
        .bm-shelf { background-image: repeating-linear-gradient(0deg, transparent, transparent 118px, ${C.line} 118px, ${C.line} 120px); }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(251,244,230,0.95)',
          ink: C.ink,
          line: C.lineSoft,
          btnBg: C.red,
          btnInk: '#FFF',
        }}
      />

      {/* ── Hero: la casa amarilla, encuadre de mantel ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-10 md:pb-16 grid grid-cols-12 gap-6 md:gap-10 items-end">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1">
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <LogoChip size={56} />
                <div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em]`} style={{ color: C.red }}>
                    Restaurante y cafetería
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.28em]`} style={{ color: C.inkSoft }}>
                    Vichuquén · Maule
                  </p>
                </div>
              </div>
              <h1
                className={`${display.className} leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,5.4rem)] mb-5`}
              >
                En Vichuquén,
                <br />
                la mesa la sirve{' '}
                <span className="italic" style={{ color: C.red }}>Blanquita</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: C.inkSoft }}>
                La casa amarilla de la Av. Ignacio Carrera Pinto: comida
                casera atendida por su dueña, conservas con su etiqueta y
                terraza para almorzar tranquilo, camino a Llico.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bm-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.red, color: '#FFF' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#mesa"
                  className="bm-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Ver la mesa
                </a>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-white tap-44`}
                  style={{ border: `1px solid ${C.line}`, color: C.ink }}
                >
                  <Stars />
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2">
            <Reveal delay={120}>
              <div
                className="relative overflow-hidden aspect-[4/3] md:aspect-[5/4] border-4"
                style={{ borderColor: C.ink }}
              >
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Copas de sour en la terraza de Blanca Marti con los cerros de Vichuquén detrás"
                  fill
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3 text-right`} style={{ color: C.inkSoft }}>
                La terraza, mirando los cerros del secano
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta amarilla: datos de la casa ── */}
      <div style={{ backgroundColor: C.yellow, borderTop: `2px solid ${C.ink}`, borderBottom: `2px solid ${C.ink}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5">
          {[
            'Atendida por su dueña',
            'Pet friendly',
            'Terraza exterior',
            'Cafetería todo el día',
            'Vitrina de conservas',
          ].map((f) => (
            <span
              key={f}
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold`}
              style={{ color: C.ink }}
            >
              {f}
            </span>
          ))}
        </div>
      </div>

      {/* ── La mesa de Blanca: platos servidos en repisa ── */}
      <section id="mesa" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
              Comida casera de verdad
            </p>
            <h2
              className={`${display.className} leading-[1.0] text-[clamp(2.2rem,6.5vw,4.6rem)] mb-10 md:mb-14`}
            >
              La mesa de <span className="italic" style={{ color: C.red }}>Blanca</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            {/* repisa de platos */}
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <Reveal>
                <ul className="bm-shelf">
                  {PLATOS.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline gap-4 py-4 border-b-2"
                      style={{ borderColor: C.ink }}
                    >
                      <div className="flex-1">
                        <p className="font-semibold text-base md:text-lg">{p.name}</p>
                        <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-0.5`} style={{ color: C.inkSoft }}>
                          {p.note}
                        </p>
                      </div>
                      {p.price && (
                        <span className={`${display.className} text-xl md:text-2xl shrink-0`} style={{ color: C.red }}>
                          {p.price}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-xs md:text-sm leading-relaxed mt-5" style={{ color: C.inkSoft }}>
                  Los platos y precios los nombran los propios clientes en
                  sus reseñas de Google. La carta cambia según la temporada
                  y lo que rinda en la cocina.
                </p>
              </Reveal>
            </div>

            {/* dos fotos servidas */}
            <div className="col-span-12 md:col-span-6 order-1 md:order-2 grid grid-cols-2 gap-4 md:gap-5">
              <Reveal className="col-span-2">
                <div className="relative overflow-hidden aspect-[16/9] border-4" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/reineta.webp`}
                    alt="Reineta a la plancha con arroz, el plato más nombrado de la casa"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="relative overflow-hidden aspect-square border-4" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/mesa-servida.webp`}
                    alt="Plato servido en la mesa con vaso de vino y pan"
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className="relative overflow-hidden aspect-square border-4" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/cafe.webp`}
                    alt="Café batido de la cafetería"
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La alacena: el otro negocio de Blanca ── */}
      <section id="alacena" className="scroll-mt-20" style={{ backgroundColor: C.redDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.yellow }}>
              Además de la cocina
            </p>
            <h2 className={`${display.className} leading-[1.0] text-[clamp(2.2rem,6.5vw,4.6rem)] mb-4`}>
              La alacena de <span className="italic" style={{ color: C.yellow }}>Blanca Marti</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-10" style={{ color: 'rgba(251,244,230,0.85)' }}>
              Junto al restaurante, Blanca vende lo que produce con su
              sello: frutos en conserva, condimentos y las barritas de
              proteína de legumbres que los clientes recomiendan llevarse
              de regreso.
            </p>
          </Reveal>

          <div className="grid grid-cols-12 gap-4 md:gap-5 items-stretch">
            <Reveal className="col-span-7 md:col-span-5">
              <div className="relative overflow-hidden h-full min-h-[280px] border-4" style={{ borderColor: 'rgba(251,244,230,0.9)' }}>
                <Image
                  src={`${IMG}/especias.webp`}
                  alt="Repisa del local llena de frascos de conservas y condimentos con la etiqueta Blanca Marti"
                  fill
                  sizes="(min-width: 768px) 42vw, 60vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="col-span-5 md:col-span-3 grid gap-4 md:gap-5">
              <Reveal delay={100}>
                <div className="relative overflow-hidden aspect-square border-4" style={{ borderColor: 'rgba(251,244,230,0.9)' }}>
                  <Image
                    src={`${IMG}/conserva.webp`}
                    alt="Frasco de fruta en conserva con la etiqueta Blanca Marti"
                    fill
                    sizes="(min-width: 768px) 22vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="relative overflow-hidden aspect-square border-4" style={{ borderColor: 'rgba(251,244,230,0.9)' }}>
                  <Image
                    src={`${IMG}/torta-rosas.webp`}
                    alt="Torta decorada con rosas, de la repostería de la casa"
                    fill
                    sizes="(min-width: 768px) 22vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-4">
              <Reveal delay={200} className="h-full">
                <ul className="h-full flex flex-col justify-center gap-3">
                  {ALACENA.map((a) => (
                    <li
                      key={a}
                      className="flex items-center gap-3 px-4 py-3.5 border"
                      style={{ borderColor: 'rgba(251,244,230,0.35)' }}
                    >
                      <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.yellow} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-sm md:text-base font-medium">{a}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Blanca responde: reseñas con la contestación de la dueña ── */}
      <section id="resenas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <div>
                <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                  {BIZ.rating} ★ · {BIZ.reviews} opiniones en Google
                </p>
                <h2 className={`${display.className} leading-[1.0] text-[clamp(2.2rem,6.5vw,4.6rem)]`}>
                  Y Blanca <span className="italic" style={{ color: C.red }}>responde</span>
                </h2>
              </div>
              <p className="text-sm md:text-base max-w-xs leading-relaxed" style={{ color: C.inkSoft }}>
                Cada reseña lleva la contestación que la dueña escribe
                personalmente. Todas terminan igual: con un abracito.
              </p>
            </div>
          </Reveal>

          <div className="space-y-5 md:space-y-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 60}>
                <div className="grid grid-cols-12 gap-4 md:gap-6 items-start">
                  {/* reseña del cliente */}
                  <figure
                    className="col-span-12 md:col-span-7 p-5 md:p-6 bg-white border-2"
                    style={{ borderColor: C.ink }}
                  >
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <Stars />
                      <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.inkSoft }}>
                        {r.note}
                      </span>
                    </div>
                    <blockquote className="text-sm md:text-base leading-relaxed mb-4">
                      “{r.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] font-semibold`} style={{ color: C.ink }}>
                      {r.author}
                    </figcaption>
                  </figure>

                  {/* respuesta de la dueña */}
                  <div className={`col-span-12 md:col-span-5 ${i % 2 ? 'md:pt-8' : 'md:pt-0'}`}>
                    <div
                      className="relative p-5 md:p-6 rounded-2xl rounded-tl-none ml-8"
                      style={{ backgroundColor: C.yellow, color: C.ink }}
                    >
                      <span
                        className="absolute -left-8 top-0"
                        style={{ transform: 'translateX(-2px)' }}
                      >
                        <LogoChip size={40} />
                      </span>
                      <p className={`${mono.className} text-[9px] uppercase tracking-[0.22em] mb-2 font-semibold`} style={{ color: C.red }}>
                        Blanca responde
                      </p>
                      <p className="text-sm leading-relaxed font-medium">{r.reply}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <a
              href={BIZ.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bm-btn inline-block mt-9 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(168,30,63,0.4)' }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El lugar: fachada y salón ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden aspect-[16/10] border-4" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="La casa amarilla de Blanca Marti con su terraza, en la Av. Ignacio Carrera Pinto"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.inkSoft }}>
              La casa amarilla de la entrada a Vichuquén
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-5 grid gap-4 md:gap-5">
            <Reveal delay={100}>
              <div className="relative overflow-hidden aspect-[16/9] border-4" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="El comedor lleno un día de almuerzo"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative overflow-hidden aspect-[16/9] border-4" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Interior del salón con mesas de mantel blanco"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid grid-cols-12 gap-8 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.yellow }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} leading-[1.02] text-[clamp(2rem,5.5vw,3.6rem)] mb-6`}>
                La casa amarilla,
                <br />
                <span className="italic" style={{ color: C.yellow }}>entrando a Vichuquén</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed font-medium mb-6" style={{ color: 'rgba(251,244,230,0.85)' }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.paper }}>
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.paper }}>
                  {BIZ.igUser}
                </a>
              </address>
              <ul className="mb-8 border-t" style={{ borderColor: 'rgba(251,244,230,0.2)' }}>
                {HOURS.map((h) => (
                  <li key={h.d} className="flex justify-between gap-4 py-2.5 border-b text-sm" style={{ borderColor: 'rgba(251,244,230,0.2)' }}>
                    <span className="font-semibold">{h.d}</span>
                    <span style={{ color: h.h === 'Cerrado' ? C.yellow : 'rgba(251,244,230,0.7)' }}>{h.h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bm-btn font-semibold text-sm px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bm-btn font-semibold text-sm px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: 'rgba(251,244,230,0.6)', color: C.paper }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={120} className="h-full">
              <div
                className="relative w-full overflow-hidden border-4 aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
                style={{ borderColor: 'rgba(251,244,230,0.9)' }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.fullName}, ${BIZ.city}`}
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
      <footer style={{ backgroundColor: '#1C120D', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex items-center gap-4">
          <LogoChip size={44} />
          <div>
            <p className={`${display.className} text-lg md:text-xl leading-none mb-1`}>
              {BIZ.fullName}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(251,244,230,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,244,230,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(251,244,230,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.fullName} con sus fotos y reseñas reales de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
