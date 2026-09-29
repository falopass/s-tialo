import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HORARIO, COMPLETOS, SANDWICHES, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
  variable: '--font-alex-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/** La fuente de soda: crema de afiche, el rojo y el verde del propio logo. */
const C = {
  cream: '#FAF4E8',
  creamDeep: '#F1E6D0',
  ink: '#1B1312',
  rojo: '#D92B28',
  rojoDeep: '#A81E1C',
  verde: '#5E8F2A',
  verdePalta: '#86B93C',
  muted: '#6D5D55',
  line: 'rgba(27,19,18,0.16)',
  whiteSoft: 'rgba(250,244,232,0.78)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'donde-alex',
  title: 'Donde Alex — La casa del completo en Talca',
  description:
    'Completos desde $1.350, churrascos con mayo casera y sopaipillas en 1 Oriente 0112, Talca. La fuente de soda de la tradición de calidad y sabor: delivery, retiro y local.',
  image: '/demos/donde-alex/completos.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La barra', href: '#barra' },
  { label: 'Horario', href: '#casa' },
]

const MARQUEE = [
  'Italiano',
  'Chacarero',
  'Mayo casera',
  'Churrasco',
  'Sopaipillas',
  'Desde $1.350',
  'Talca',
]

export default function DondeAlex() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir al WhatsApp"
        theme={{
          over: 'light',
          bar: C.cream,
          ink: C.ink,
          line: C.line,
          btnBg: C.rojo,
          btnInk: '#FFFBEF',
        }}
      />

      {/* ── Hero: afiche de fuente de soda ── */}
      <section id="inicio" className="border-b-4" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo oficial de Donde Alex: DONDE en verde, ALEX en rojo, con su chef mascota"
                  className="w-[240px] md:w-[340px] mb-6"
                />
                <h1 className={`${display.className} uppercase leading-[0.9] text-[clamp(2.9rem,10vw,6.6rem)]`}>
                  La casa
                  <br />
                  del <span style={{ color: C.rojo }}>completo</span>
                </h1>
                <p className={`${display.className} uppercase mt-3 text-lg md:text-2xl tracking-wide`} style={{ color: C.verde }}>
                  Tradición de calidad y sabor
                </p>
                <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                  La fuente de soda de 1 Oriente que los talquinos llenan a la hora de almuerzo:
                  completos desde $1.350, mayo casera de la receta de la abuela y churrascos que
                  repiten en las reseñas.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.rojo, color: '#FFFBEF', boxShadow: '5px 6px 0 rgba(27,19,18,0.9)' }}
                  >
                    Pedir por WhatsApp →
                  </a>
                  <div className="flex items-center gap-2 px-4 py-3 border-2" style={{ borderColor: C.ink, backgroundColor: '#FFFBEF' }}>
                    <Stars value={4.6} color={C.verde} className="w-4 h-4" />
                    <span className={`${mono.className} text-xs font-bold`}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120} className="col-span-12 md:col-span-5">
              <figure
                className="border-4 p-2.5 pb-10"
                style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '7px 8px 0 rgba(27,19,18,0.9)', transform: 'rotate(1.6deg)' }}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/completos.webp`}
                    alt="Dos completos italianos de Donde Alex: vienesa con palta, tomate y mayo casera"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  el italiano, el clásico de la casa
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cinta corrida ── */}
      <div className="overflow-hidden border-b-4 py-3" style={{ borderColor: C.ink, backgroundColor: C.verde }} aria-hidden="true">
        <div className="alex-marquee flex whitespace-nowrap">
          {[0, 1].map((rep) => (
            <span key={rep} className="flex shrink-0">
              {MARQUEE.map((m) => (
                <span key={`${rep}-${m}`} className={`${display.className} uppercase text-lg md:text-2xl px-6`} style={{ color: '#FFFBEF' }}>
                  {m} <span className="px-2" style={{ color: 'rgba(255,251,239,0.45)' }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── La carta mural ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-4`}>
            La carta <span style={{ color: C.rojo }}>mural</span>
          </h2>
          <p className="max-w-xl text-base md:text-lg leading-relaxed mb-10" style={{ color: C.muted }}>
            Los precios que están pintados en su propia pared, tal cual. Sin letra chica.
          </p>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="border-4 p-6 md:p-8" style={{ backgroundColor: C.ink, borderColor: C.ink, boxShadow: '7px 8px 0 rgba(217,43,40,0.5)' }}>
              <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-5`} style={{ color: C.verdePalta }}>
                Completos · la especialidad
              </p>
              <ul className="space-y-3 pb-6 mb-6 border-b-2 border-dashed" style={{ borderColor: 'rgba(250,244,232,0.3)' }}>
                {COMPLETOS.map((c) => (
                  <li key={c.name} className="flex items-baseline justify-between gap-4">
                    <span className={`${display.className} uppercase text-lg md:text-2xl`} style={{ color: '#FFFBEF' }}>{c.name}</span>
                    <span className={`${mono.className} text-base md:text-xl font-bold shrink-0`} style={{ color: '#FFB34D' }}>{c.price}</span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-5`} style={{ color: C.verdePalta }}>
                Sándwich pechuga de pollo XL
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {SANDWICHES.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-4">
                    <span className={`${display.className} uppercase text-base md:text-lg`} style={{ color: '#FFFBEF' }}>{s.name}</span>
                    <span className={`${mono.className} text-sm md:text-base font-bold shrink-0`} style={{ color: '#FFB34D' }}>{s.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-5 space-y-6">
            <Reveal delay={90}>
              <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '6px 7px 0 rgba(27,19,18,0.9)', transform: 'rotate(-1.2deg)' }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta mural de Donde Alex con los completos y sus precios pintados"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={150}>
              <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '6px 7px 0 rgba(27,19,18,0.9)' }}>
                <Image
                  src={`${IMG}/completo-rojo.webp`}
                  alt="Completo de Donde Alex servido en su bandeja roja"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La barra: receta de la abuela ── */}
      <section id="barra" className="scroll-mt-20" style={{ backgroundColor: C.rojo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-3`} style={{ color: 'rgba(255,251,239,0.8)' }}>
              Receta de la abuela
            </p>
            <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-10`} style={{ color: '#FFFBEF' }}>
              La barra donde se arma todo
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6 items-start">
            <Reveal className="col-span-12 md:col-span-5">
              <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(27,19,18,0.7)', transform: 'rotate(-1.4deg)' }}>
                <div className="relative w-full aspect-[4/5] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/barra.webp`}
                    alt="La barra de Donde Alex: palta, chucrut y mayonesa casera en sus fuentes"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  palta, chucrut y la mayo que todos mencionan
                </figcaption>
              </figure>
            </Reveal>
            <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-5 md:gap-6">
              <Reveal delay={90} className="col-span-12">
                <p className="text-base md:text-lg leading-relaxed" style={{ color: '#FFF3EE' }}>
                  La mayonesa se hace en casa todos los días, como manda la receta de la abuela que
                  anuncian sus propios afiches. Palta, chucrut y mayo a tu elección, en la cantidad
                  que pidas. Esa barra es la razón por la que el completo de Donde Alex suena en
                  toda Talca.
                </p>
              </Reveal>
              <Reveal delay={140} className="col-span-6 md:col-span-6">
                <figure className="relative aspect-square overflow-hidden border-4" style={{ borderColor: '#FFFBEF', boxShadow: '5px 6px 0 rgba(27,19,18,0.6)' }}>
                  <Image
                    src={`${IMG}/sopaipillas.webp`}
                    alt="Sopaipillas doradas de Donde Alex"
                    fill
                    sizes="(min-width: 768px) 28vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={180} className="col-span-6 md:col-span-6">
                <figure className="relative aspect-square overflow-hidden border-4" style={{ borderColor: '#FFFBEF', boxShadow: '5px 6px 0 rgba(27,19,18,0.6)' }}>
                  <Image
                    src={`${IMG}/combo.webp`}
                    alt="Combo de Donde Alex: completo con papas fritas y bebida"
                    fill
                    sizes="(min-width: 768px) 28vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={220} className="col-span-12">
                <p className={`${mono.className} text-xs md:text-sm font-bold uppercase tracking-[0.16em]`} style={{ color: 'rgba(255,251,239,0.9)' }}>
                  Sopaipillas, combos y churrasco XL también salen de esta barra
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El local y el horario ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-7">
            <Reveal>
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-6`}>
                Pasa al salón <span style={{ color: C.verde }}>o pide a la casa</span>
              </h2>
              <p className="max-w-xl text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
                Local cómodo para comer en familia en el centro de Talca, con retiro en tienda,
                delivery y pedidos en línea. El que atiende es Alex en persona.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <div className="border-4 p-5 md:p-6 mb-6" style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '6px 7px 0 rgba(27,19,18,0.85)' }}>
                <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.3em] mb-4`} style={{ color: C.rojo }}>
                  Horario del letrero de la puerta
                </p>
                <ul className="space-y-2.5">
                  {HORARIO.map((h) => (
                    <li key={h.dias} className="flex flex-wrap items-baseline justify-between gap-2">
                      <span className={`${display.className} uppercase text-base md:text-lg`}>{h.dias}</span>
                      <span className={`${mono.className} text-sm md:text-base font-bold`} style={{ color: C.verde }}>{h.horas}</span>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} text-[11px] mt-4`} style={{ color: C.muted }}>
                  Vigente desde el 12 de enero de 2026, según su propio cartel.
                </p>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 gap-5">
                <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '5px 6px 0 rgba(27,19,18,0.85)' }}>
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Salón de Donde Alex: mesas con colores rojo y azul de la marca"
                    fill
                    sizes="(min-width: 768px) 28vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '5px 6px 0 rgba(27,19,18,0.85)', transform: 'rotate(1.5deg)' }}>
                  <Image
                    src={`${IMG}/churrasco.webp`}
                    alt="Churrasco de Donde Alex, carne al sartén con su mayo casera"
                    fill
                    sizes="(min-width: 768px) 28vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '7px 8px 0 rgba(27,19,18,0.9)', transform: 'rotate(1.2deg)' }}>
              <div className="relative w-full aspect-[3/4] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/chef.webp`}
                  alt="Alex, dueño de Donde Alex, con la chaqueta de cocina de su local"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Alex, el de la chaqueta con su logo
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="border-y-4" style={{ borderColor: C.ink, backgroundColor: C.creamDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)]`}>
                Talca ya <span style={{ color: C.rojo }}>lo sabe</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={4.6} color={C.rojo} className="w-5 h-5" />
                <span className={`${mono.className} text-sm font-bold`}>
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <figure className="h-full border-4 p-5 md:p-6 flex flex-col" style={{ backgroundColor: i === 0 ? C.rojo : '#FFFBEF', borderColor: C.ink, boxShadow: '5px 6px 0 rgba(27,19,18,0.85)' }}>
                  <Stars value={r.stars} color={i === 0 ? '#FFE27A' : C.verde} className="w-4 h-4 mb-3" />
                  <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? '#FFFBEF' : C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: i === 0 ? '#FFE27A' : C.muted }}>
                    {r.author} · {r.when} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.rojo }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.2rem,6.5vw,4.5rem)] mb-10`}>
            En plena <span style={{ color: C.verde }}>1 Oriente</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '7px 8px 0 rgba(27,19,18,0.9)', transform: 'rotate(-1deg)' }}>
              <div className="relative w-full aspect-[16/10] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada roja y negra de Donde Alex en calle 1 Oriente, Talca"
                  fill
                  sizes="(min-width: 768px) 56vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                la fachada roja se reconoce de lejos
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <div className="border-4 p-5 md:p-6" style={{ backgroundColor: C.ink, borderColor: C.ink, boxShadow: '6px 7px 0 rgba(27,19,18,0.4)' }}>
              <address className="not-italic">
                <p className={`${display.className} uppercase text-xl md:text-2xl leading-tight`} style={{ color: '#FFFBEF' }}>
                  {BIZ.address}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: 'rgba(255,251,239,0.75)' }}>
                  {BIZ.city}, {BIZ.region}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(255,251,239,0.55)' }}>
                  Plus code {BIZ.plusCode}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.verdePalta }}>
                  {BIZ.phoneDisplay}
                </a>
                <p className={`${mono.className} text-xs mt-4 pt-4 border-t leading-relaxed`} style={{ color: 'rgba(255,251,239,0.75)', borderColor: 'rgba(255,251,239,0.2)' }}>
                  Local · Retiro · Delivery · Pedidos en línea · {BIZ.ticket}
                </p>
              </address>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="mt-10 border-4 p-2.5" style={{ backgroundColor: '#FFFBEF', borderColor: C.ink, boxShadow: '7px 8px 0 rgba(27,19,18,0.9)' }}>
            <div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden border-2" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-auto max-w-[72px] object-contain" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(250,244,232,0.7)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.verdePalta }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,244,232,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(250,244,232,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.verdePalta }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        @keyframes alex-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .alex-marquee {
          animation: alex-marquee 24s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .alex-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
