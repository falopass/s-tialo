import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  pizarra: '#1D1712',
  pizarra2: '#261D16',
  rojo: '#B5442F',
  rojoDeep: '#93331F',
  tiza: '#EFE7D6',
  card: '#F7F1E4',
  ink: '#2A211A',
  muted: '#7A6C5E',
  line: 'rgba(42,33,26,0.18)',
  lineLight: 'rgba(239,231,214,0.18)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B5442F]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EFE7D6]'

export const metadata: Metadata = demoMetadata({
  slug: 'carnes-bravo',
  title: 'Carnes Bravo — Carnicería en Camino Bajo Las Ánimas, Molina',
  description:
    'Carnicería en Camino Bajo Las Ánimas, Molina: cortes de vacuno y cerdo, atendida por su dueño. Pide por WhatsApp y retira en el local.',
  image: '/demos/carnes-bravo/hero.webp',
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El dueño', href: '#dueno' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const CORTES = ['Vacuno', 'Longanizas', 'Costillar', 'Cortes al mostrador']

const RESENAS = [
  {
    text: 'Excelente calidad y buen servicio, y buenos precios, atendido por su dueño. Súper recomendado.',
    author: 'Eli Perez',
    meta: 'Local Guide · 55 reseñas',
  },
  {
    text: 'Excelente calidad en carnes.',
    author: 'Daniela Diaz',
    meta: 'Reseña de Google',
  },
  {
    text: 'Excelente carne, buenos precios.',
    author: 'Alex González Jaidar',
    meta: 'Reseña de Google',
  },
  {
    text: 'Excelentes productos.',
    author: 'Jorge Valencia',
    meta: 'Local Guide · 32 reseñas',
  },
]

const HORARIO = [
  { days: 'Lunes a jueves', time: '10:00–21:00' },
  { days: 'Viernes y sábado', time: '10:00–22:00' },
  { days: 'Domingo', time: '10:00–14:00' },
]

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
      style={{ color: light ? 'rgba(239,231,214,0.7)' : C.muted }}
    >
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={C.rojo} strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
        <path d="M12 2 v6 a3 3 0 1 0 3 3" />
      </svg>
      {children}
    </p>
  )
}

export default function CarnesBravoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.pizarra, color: C.tiza }}>
      <style>{`
        .cb-band > div { position: static; max-width: none; border-radius: 0; box-shadow: none; background: transparent; justify-content: center; padding: 14px 20px; }
      `}</style>
      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-wide font-semibold`}>Carnes Bravo</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(29,23,18,0.94)',
          ink: C.tiza,
          line: C.lineLight,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: pizarra del mostrador ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.pizarra }}>
        {/* ganchos del riel en el borde superior */}
        <div aria-hidden="true" className="absolute top-[60px] md:top-[68px] inset-x-0 flex justify-around opacity-30">
          {Array.from({ length: 9 }).map((_, i) => (
            <svg key={i} viewBox="0 0 24 40" className="w-4 h-8 hidden sm:block" fill="none" stroke={C.tiza} strokeWidth="1.6">
              <path d="M12 2 v14 a6 6 0 1 0 6 6" />
            </svg>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={`${display.className} absolute -left-6 bottom-24 select-none pointer-events-none uppercase leading-none`}
          style={{ fontSize: 'clamp(9rem, 26vw, 22rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(239,231,214,0.08)', transform: 'rotate(90deg) translateX(-100%)', transformOrigin: 'left bottom' }}
        >
          Bravo
        </div>

        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pt-28 md:pt-32">
          <div
            className={`${mono.className} flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-y border-dashed py-2.5 text-[10px] md:text-xs uppercase tracking-[0.18em]`}
            style={{ borderColor: C.lineLight, color: 'rgba(239,231,214,0.7)' }}
          >
            <span>{BIZ.rubro} de barrio</span>
            <span className="hidden md:inline">{BIZ.address}</span>
            <span>{BIZ.city} · Chile</span>
          </div>
        </div>

        <div className="relative flex-1 grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center max-w-6xl mx-auto w-full px-5 md:px-8 py-12">
          <Reveal>
            <h1
              className={`${display.className} font-semibold uppercase leading-[0.92] tracking-[0.01em] text-[clamp(2.8rem,11vw,7.5rem)]`}
              style={{ color: C.tiza }}
            >
              Carne de
              <br />
              <span style={{ color: C.rojo }}>verdad.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: 'rgba(239,231,214,0.8)' }}>
              Carnes Bravo es la carnicería del Camino Bajo Las Ánimas, en
              {` ${BIZ.city}`}: cortes elegidos uno a uno en la vitrina y
              atención del propio dueño detrás del mostrador.
            </p>
            <div className="flex flex-wrap gap-3 mt-9">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${FOCUS} ${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(239,231,214,0.5)', color: C.tiza }}
              >
                Ver la vitrina
              </a>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="relative border-2 border-dashed p-2" style={{ borderColor: 'rgba(239,231,214,0.4)' }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Fachada de Carnes Bravo en Camino Bajo Las Ánimas: muralla roja, techumbre de quincha y pizarra de precios a la entrada"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
              <p
                className={`${mono.className} flex justify-between pt-2 text-[10px] uppercase tracking-[0.16em]`}
                style={{ color: 'rgba(239,231,214,0.7)' }}
              >
                <span>{BIZ.address}</span>
                <span>{BIZ.city}</span>
              </p>
            </div>
          </Reveal>
        </div>

        <div className="relative border-t border-dashed" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(0,0,0,0.3)' }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.16em]`}
            style={{ color: 'rgba(239,231,214,0.8)' }}
          >
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} flex items-center gap-2 font-bold transition-colors hover:text-white tap-44`}
            >
              <Stars value={4.1} color={C.rojo} className="w-[13px] h-[13px]" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
            <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} font-bold transition-colors hover:text-white tap-44`}>
              {BIZ.phoneDisplay}
            </a>
            <span className="hidden sm:inline">Domingos hasta las 14:00</span>
            <span className="hidden md:inline" style={{ color: 'rgba(239,231,214,0.6)' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de cortes ── */}
      <section aria-label="Cortes" className="border-y border-dashed" style={{ borderColor: 'rgba(42,33,26,0.2)', backgroundColor: C.rojo }}>
        <ul
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 md:py-4 flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[13px] md:text-base font-semibold uppercase tracking-[0.12em]`}
          style={{ color: '#FFF6EA' }}
        >
          {CORTES.map((c, i) => (
            <li key={c} className="flex items-center gap-5">
              {i > 0 && <span aria-hidden="true" className="opacity-60">/</span>}
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Tag light>Directo de la vitrina</Tag>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.tiza }}>
                El corte se elige
                <br />
                <span style={{ color: C.rojo }}>en el mostrador</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(239,231,214,0.75)' }}>
                Nada de bandeja sellada sin mirar: acá ves la pieza, pides el
                punto y te lo cortan a mano.
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            <Reveal>
              <figure>
                <div className="relative overflow-hidden border-2 border-dashed p-1.5" style={{ borderColor: 'rgba(239,231,214,0.35)' }}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`${IMG}/vitrina1.webp`}
                      alt="Vitrina refrigerada de Carnes Bravo con bandejas de cortes de vacuno frescos"
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(239,231,214,0.6)' }}>
                  La vitrina del local · foto real de su ficha
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure>
                <div className="relative overflow-hidden border-2 border-dashed p-1.5" style={{ borderColor: 'rgba(239,231,214,0.35)' }}>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`${IMG}/vitrina2.webp`}
                      alt="Cortes de vacuno y longaniza en bandejas dentro de la vitrina de la carnicería"
                      fill
                      sizes="(min-width: 768px) 46vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(239,231,214,0.6)' }}>
                  Cortes y longanizas del día
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El dueño ── */}
      <section id="dueno" className="scroll-mt-20" style={{ backgroundColor: C.card, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Tag>Atendido por su dueño</Tag>
            <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-4xl md:text-6xl mb-10 md:mb-14`}>
              El que corta la carne
              <br />
              <span style={{ color: C.rojo }}>es el que te atiende</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
            <Reveal>
              <figure>
                <div className="relative overflow-hidden aspect-square">
                  <Image
                    src={`${IMG}/maestro.webp`}
                    alt="Dueño de Carnes Bravo con delantal blanco y cuchillo junto a medias canales colgadas en el riel"
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  En la cámara, con el riel de canales
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <figure className="md:mt-16">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={`${IMG}/cortes-rail.webp`}
                    alt="Piezas de carne colgadas en ganchos dentro de la cámara de Carnes Bravo"
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                  Carne colgada, lista para el mostrador
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <blockquote
              className="mt-12 border-l-4 pl-5 md:pl-7 py-1 max-w-2xl text-lg md:text-2xl leading-relaxed font-medium"
              style={{ borderColor: C.rojo, color: C.ink }}
            >
              “Excelente calidad y buen servicio, y buenos precios, atendido
              por su dueño. Súper recomendado.”
              <cite className={`${mono.className} not-italic block mt-3 text-[10px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.rojoDeep }}>
                Eli Perez · reseña de Google
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.pizarra2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Tag light>Lo que dicen en Google</Tag>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.tiza }}>
                {BIZ.rating}★ — lo dice
                <br />
                <span style={{ color: C.rojo }}>la gente</span>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${mono.className} text-xs uppercase tracking-[0.18em] font-bold underline underline-offset-8 decoration-2 tap-44`}
                style={{ color: C.tiza, textDecorationColor: C.rojo }}
              >
                Ver ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure
                  className="h-full border border-dashed p-5 md:p-6 flex flex-col justify-between"
                  style={{ borderColor: C.lineLight, backgroundColor: C.pizarra }}
                >
                  <div>
                    <Stars value={5} color={C.rojo} className="w-3.5 h-3.5" />
                    <blockquote className="mt-3 text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(239,231,214,0.9)' }}>
                      “{r.text}”
                    </blockquote>
                  </div>
                  <figcaption className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(239,231,214,0.55)' }}>
                    {r.author}
                    <br />
                    {r.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.card, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Tag>Contacto</Tag>
            <h2 className={`${display.className} font-semibold uppercase leading-[0.95] text-4xl md:text-6xl mb-6`}>
              Por el camino
              <br />
              <span style={{ color: C.rojo }}>bajo Las Ánimas</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORARIO.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <span className="w-6 border-t-2 border-dashed shrink-0" style={{ borderColor: C.rojo }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 transition-all duration-200 hover:bg-black/5 tap-44`}
                style={{ borderColor: 'rgba(42,33,26,0.35)', color: C.ink }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className={`${mono.className} text-xs mt-6 uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-2 border-dashed p-1.5 min-h-[320px] h-full" style={{ borderColor: 'rgba(42,33,26,0.35)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.rojo }}>
        <div
          aria-hidden="true"
          className={`${display.className} absolute inset-x-0 -top-4 md:-top-8 text-center select-none pointer-events-none font-semibold uppercase leading-none`}
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,246,234,0.28)' }}
        >
          Mostrador
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-semibold uppercase text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.95] mb-6`}
              style={{ color: '#FFF6EA' }}
            >
              ¿Asado este finde?
              <br />
              <span className="inline-block mt-2 px-3 py-1" style={{ backgroundColor: C.pizarra, color: C.tiza }}>
                Avísanos y te lo dejamos listo.
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium" style={{ color: 'rgba(255,246,234,0.9)' }}>
              Pide por WhatsApp y retira en el local del Camino Bajo Las Ánimas.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS_LIGHT} ${display.className} inline-block font-semibold uppercase tracking-wide text-sm md:text-base px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.pizarra, color: C.tiza }}
            >
              Escribir a Carnes Bravo
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#171109', color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-semibold uppercase tracking-wide text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              <span className="inline-block w-6 border-t-2 border-dashed" style={{ borderColor: C.rojo }} aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(239,231,214,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(239,231,214,0.72)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-dashed" style={{ borderColor: 'rgba(239,231,214,0.16)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: 'rgba(239,231,214,0.55)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name} — nombre, dirección, horario,
            reseñas y fotos son datos públicos reales.
          </p>
        </div>
      </footer>

      <div className="cb-band pb-20" style={{ backgroundColor: '#171109' }}>
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
