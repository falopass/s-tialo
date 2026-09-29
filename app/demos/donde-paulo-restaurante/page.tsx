import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
  variable: '--font-paulo-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/** La mesa puesta: mantel, carbón de la parrilla y el azul de la cuadrillé. */
const C = {
  mantel: '#F6F1E7',
  mantelDeep: '#EDE4D2',
  carbon: '#1C1A17',
  brasa: '#C4552C',
  azul: '#2F4A7F',
  muted: '#6E6355',
  line: 'rgba(28,26,23,0.16)',
  paperSoft: 'rgba(246,241,231,0.8)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'donde-paulo-restaurante',
  title: 'Donde Paulo — Parrilladas y cocina chilena en Talca',
  description:
    'El clásico talquino que volvió: parrilladas contundentes, paila marina, chancho en piedra y pollo mariscal en 9 Oriente 894, Talca. Almuerzos desde el mediodía.',
  image: '/demos/donde-paulo-restaurante/parrilla.webp',
})

const NAV_LINKS = [
  { label: 'La parrilla', href: '#parrilla' },
  { label: 'La historia', href: '#historia' },
  { label: 'Reservar', href: '#como-llegar' },
]

const MAR_Y_PAILA = [
  { src: 'paila-marina', alt: 'Paila marina de Donde Paulo: camarones y mariscos con queso gratinado', label: 'Paila marina' },
  { src: 'mariscos', alt: 'Cholgas y mariscos servidos en la mesa de Donde Paulo', label: 'Cholgas al vapor' },
  { src: 'plateada', alt: 'Plateada de la casa con ensalada rusa y papas', label: 'Plateada con ensalada rusa' },
  { src: 'bistec', alt: 'Bistec a lo pobre con papas fritas y huevo', label: 'Bistec a lo pobre' },
]

export default function DondePaulo() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.mantel, color: C.carbon, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar por WhatsApp"
        theme={{
          over: 'light',
          bar: C.mantel,
          ink: C.carbon,
          line: C.line,
          btnBg: C.carbon,
          btnInk: C.mantel,
        }}
      />

      {/* ── Hero editorial: la portada del almuerzo ── */}
      <section id="inicio" className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-14 md:pb-18">
        <Reveal>
          <div className="text-center">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Logo de Donde Paulo: nombre del restaurant con dos cocineros"
              className="w-[200px] md:w-[260px] mx-auto mb-6"
            />
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.32em] mb-4`} style={{ color: C.azul }}>
              Restaurant · Parrilladas · Talca
            </p>
            <h1 className={`${display.className} leading-[0.95] text-[clamp(2.9rem,9vw,6.2rem)]`}>
              El clásico talquino
              <br />
              <em style={{ color: C.brasa }}>que volvió a encender</em>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Décadas de parrilla y cocina chilena, primero en el balneario de Río Claro y hoy en
              plena 9 Oriente. Las parrilladas contundentes que sus clientes piden de a dos.
            </p>
            <div className="mt-7 flex flex-wrap justify-center items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-block px-6 py-3 text-sm font-semibold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.carbon, color: C.mantel }}
              >
                Reservar una mesa →
              </a>
              <div className="flex items-center gap-2 px-4 py-3 border" style={{ borderColor: C.carbon }}>
                <Stars value={4.3} color={C.brasa} className="w-4 h-4" />
                <span className={`${mono.className} text-xs font-semibold`}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={140}>
          <figure className="mt-10 md:mt-14 border" style={{ borderColor: C.carbon }}>
            <div className="relative w-full aspect-[16/9] overflow-hidden">
              <Image
                src={`${IMG}/comedor.webp`}
                alt="Comedor lleno de Donde Paulo: mesas con mantel, sillas de madera y el salón en hora de almuerzo"
                fill
                priority
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover"
              />
            </div>
          </figure>
          <p className={`${mono.className} mt-3 text-center text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            el comedor en hora de almuerzo, foto real de su ficha
          </p>
        </Reveal>
      </section>

      {/* ── La parrilla ── */}
      <section id="parrilla" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-5">
              <Reveal>
                <h2 className={`${display.className} leading-[0.95] text-[clamp(2.3rem,6vw,4.4rem)] mb-6`} style={{ color: C.mantel }}>
                  La parrilla es <em style={{ color: '#E08B63' }}>la especialidad</em>
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'rgba(246,241,231,0.85)' }}>
                  Es la palabra que más se repite entre sus 670 reseñas: parrilladas contundentes,
                  carne al punto y cantidad para compartir. De fondo, el chancho en piedra que los
                  que vienen de Río Claro piden de memoria.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(246,241,231,0.85)' }}>
                  Se puede comer en el salón, pedir desde el auto por su drive-through o pedir
                  entrega sin contacto.
                </p>
                {/* eslint-disable-next-line @next/next/no-img-element -- sello real ya optimizado */}
                <img
                  src={`${IMG}/marca.webp`}
                  alt="Sello de Donde Paulo con su torre de parrilla"
                  className="w-[180px] md:w-[220px]"
                />
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-7">
              <Reveal delay={100}>
                <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.mantel }}>
                  <Image
                    src={`${IMG}/parrilla.webp`}
                    alt="Carnes a la parrilla de Donde Paulo, la especialidad de la casa"
                    fill
                    sizes="(min-width: 768px) 56vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(246,241,231,0.6)' }}>
                  de la brasa a la mesa, sin adorno de más
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Del mar y de la paila ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} leading-[0.95] text-[clamp(2.3rem,6vw,4.4rem)]`}>
              Del mar <em style={{ color: C.azul }}>y de la paila</em>
            </h2>
            <p className={`${mono.className} text-xs uppercase tracking-[0.18em] max-w-xs text-right`} style={{ color: C.muted }}>
              la otra mitad de la carta, según sus propios clientes
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.carbon }}>
              <Image
                src={`${IMG}/${MAR_Y_PAILA[0].src}.webp`}
                alt={MAR_Y_PAILA[0].alt}
                fill
                sizes="(min-width: 768px) 56vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
              {MAR_Y_PAILA[0].label} · con camarones y queso gratinado
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-5 md:pt-14 space-y-8">
            {MAR_Y_PAILA.slice(1).map((p, i) => (
              <Reveal key={p.src} delay={90 + i * 80}>
                <figure className="relative aspect-[4/3] overflow-hidden border" style={{ borderColor: C.carbon }}>
                  <Image
                    src={`${IMG}/${p.src}.webp`}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  {p.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal delay={120}>
          <p className="mt-10 max-w-2xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
            Y el plato que no entra en foto: el <strong style={{ color: C.carbon }}>pollo mariscal</strong>,
            que una reseña de este año resume en un “10/10” junto al buen trato del salón.
          </p>
        </Reveal>
      </section>

      {/* ── La historia ── */}
      <section id="historia" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.mantelDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <Reveal className="col-span-12 md:col-span-7">
              <h2 className={`${display.className} leading-[0.95] text-[clamp(2.3rem,6vw,4.4rem)] mb-8`}>
                De Río Claro <em style={{ color: C.brasa }}>a la 9 Oriente</em>
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 pl-5" style={{ borderColor: C.brasa }}>
                  <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.24em] mb-2`} style={{ color: C.brasa }}>
                    Balneario Río Claro
                  </p>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                    Durante décadas, almorzar en Donde Paulo era parte del verano en el río:
                    parrilla, paila marina y la mesa familiar que repetía generación tras generación.
                  </p>
                </div>
                <div className="border-l-2 pl-5" style={{ borderColor: C.azul }}>
                  <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.24em] mb-2`} style={{ color: C.azul }}>
                    Enero de 2024
                  </p>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                    Un incendio apagó la cocina y muchos temieron perder al clásico. Pero Paulo
                    volvió: hoy el local atiende de nuevo en Calle 9 Oriente 894, con el comedor
                    lleno a la hora de almuerzo.
                  </p>
                </div>
                <div className="border-l-2 pl-5" style={{ borderColor: C.carbon }}>
                  <p className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.24em] mb-2`} style={{ color: C.carbon }}>
                    Hoy
                  </p>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                    Mismo sabor, nuevo salón. Abre al mediodía y se atiende hasta las 17:00;
                    el estacionamiento es acotado, así que conviene llegar temprano.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140} className="col-span-12 md:col-span-5">
              <figure className="border p-2.5" style={{ borderColor: C.carbon, backgroundColor: C.mantel }}>
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Nuevo salón de Donde Paulo: muro de piedra, mantel blanco y techo de madera"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </figure>
              <blockquote className="mt-6">
                <p className={`${display.className} text-2xl md:text-3xl leading-snug`} style={{ color: C.azul }}>
                  “Un clásico talquino que no debe morir”
                </p>
                <figcaption className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  Eghon Nicolas · reseña de Google
                </figcaption>
              </blockquote>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} leading-[0.95] text-[clamp(2.3rem,6vw,4.4rem)]`}>
              La sobremesa <em style={{ color: C.brasa }}>en palabras</em>
            </h2>
            <div className="flex items-center gap-2">
              <Stars value={4.3} color={C.brasa} className="w-5 h-5" />
              <span className={`${mono.className} text-sm font-semibold`}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 80} className={`col-span-12 ${i === 0 ? 'md:col-span-6' : 'md:col-span-6'} ${i === 3 ? 'md:col-span-6' : ''}`}>
              <figure className="h-full border p-5 md:p-6 flex flex-col" style={{ borderColor: C.carbon, backgroundColor: i === 1 ? C.mantelDeep : C.mantel }}>
                <Stars value={r.stars} color={C.brasa} className="w-4 h-4 mb-3" />
                <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: C.carbon }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-semibold`} style={{ color: C.muted }}>
                  {r.author} · {r.when} · reseña de Google
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
            className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-semibold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.azul }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} leading-[0.95] text-[clamp(2.3rem,6vw,4.4rem)] mb-10`} style={{ color: C.mantel }}>
              A cuadras <em style={{ color: '#E08B63' }}>del centro</em>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="col-span-12 md:col-span-5">
              <div className="border p-5 md:p-6" style={{ borderColor: 'rgba(246,241,231,0.4)' }}>
                <address className="not-italic">
                  <p className={`${display.className} text-xl md:text-2xl leading-tight`} style={{ color: C.mantel }}>
                    {BIZ.address}
                  </p>
                  <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: 'rgba(246,241,231,0.7)' }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-1`} style={{ color: 'rgba(246,241,231,0.5)' }}>
                    Plus code {BIZ.plusCode}
                  </p>
                  <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: '#E08B63' }}>
                    {BIZ.phoneDisplay}
                  </a>
                  <ul className={`${mono.className} text-xs mt-4 pt-4 border-t space-y-2`} style={{ color: 'rgba(246,241,231,0.75)', borderColor: 'rgba(246,241,231,0.2)' }}>
                    <li>Abre al mediodía · se atiende hasta las 17:00</li>
                    <li>Consumo en el lugar · Drive-through · Entrega sin contacto</li>
                    <li>Estacionamiento acotado · {BIZ.ticket}</li>
                  </ul>
                </address>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-block mt-5 px-5 py-3 text-xs font-semibold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.brasa, color: C.mantel }}
                >
                  Reservar por WhatsApp →
                </a>
              </div>
            </Reveal>
            <Reveal delay={120} className="col-span-12 md:col-span-7">
              <div className="border p-2" style={{ borderColor: 'rgba(246,241,231,0.4)' }}>
                <div className="relative w-full aspect-[4/3] overflow-hidden">
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
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#141210', color: C.mantel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-auto max-w-[80px] object-contain" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-lg leading-tight`}>{BIZ.mapsName}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(246,241,231,0.7)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-semibold underline underline-offset-4 tap-44`} style={{ color: '#E08B63' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,241,231,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(246,241,231,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.mantel }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E08B63' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.mapsName}`} />
    </div>
  )
}
