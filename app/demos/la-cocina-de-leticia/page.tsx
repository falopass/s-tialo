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
  FOGON,
  CAFE,
  SANDWICHES,
  REVIEWS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
})
const displayIt = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' }],
})

// Paleta de la ruta a Vilches: verde señalética de carretera, rojo brasa
// del logo, crema papel y mostaza del sol de su marca.
const C = {
  paper: '#F7F0DE',
  paper2: '#EFE5CB',
  ink: '#241B12',
  green: '#1E4632',
  greenDeep: '#14301F',
  ember: '#B03A22',
  sun: '#D99A3D',
  muted: '#6E5F4B',
  line: 'rgba(36,27,18,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'la-cocina-de-leticia',
  title: 'La Cocina de Leticia — Restaurant campestre camino a Vilches',
  description:
    'Restaurante familiar en El Colorado, Ruta Internacional Pehuenche km 45, San Clemente. Parrilladas, cazuela, cafetería y el mejor pebre según sus clientes. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El fogón', href: '#fogon' },
  { label: 'Cafetería', href: '#cafe' },
  { label: 'Las reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Logo real del perfil de Instagram, en chip redondo. */
function LogoChip({ size = 52 }: { size?: number }) {
  return (
    <span
      className="inline-block rounded-full overflow-hidden border-2 shrink-0"
      style={{ width: size, height: size, borderColor: C.sun }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
      <img
        src={`${IMG}/logo.webp`}
        alt="Logo de La Cocina de Leticia"
        className="w-full h-full object-cover"
      />
    </span>
  )
}

/** Hito de ruta: letrero verde tipo señal de carretera con número de posta. */
function Mile({ n, title, sub }: { n: string; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 md:gap-4">
      <span
        className={`${mono.className} inline-flex items-center justify-center font-semibold text-xs md:text-sm px-3 py-1.5 rounded-md border-b-4`}
        style={{ backgroundColor: C.green, color: '#FFF', borderColor: C.greenDeep }}
      >
        {n}
      </span>
      <div>
        <p className={`${display.className} font-semibold text-xl md:text-2xl leading-tight`}>{title}</p>
        <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em]`} style={{ color: 'rgba(247,240,222,0.75)' }}>
          {sub}
        </p>
      </div>
    </div>
  )
}

export default function LaCocinaDeLeticiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .lc-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .lc-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .lc-btn:active { transform: translateY(0) scale(0.97); }
        .lc-btn:focus-visible { outline: 3px solid ${C.sun}; outline-offset: 3px; }
        .lc-road { background-image: repeating-linear-gradient(180deg, ${C.muted} 0 14px, transparent 14px 30px); }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,240,222,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: '#FFF',
        }}
      />

      {/* ── Hero: la parada de la ruta ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-6">
              <Reveal>
                {/* letrero de carretera */}
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg border-2 mb-6"
                  style={{ backgroundColor: C.green, borderColor: C.greenDeep, color: '#FFF' }}
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 2v6m0 0l-4 3m4-3l4 3M5 11h14a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1v-8a1 1 0 011-1z" />
                  </svg>
                  <span className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold`}>
                    Ruta Pehuenche · km 45 · El Colorado
                  </span>
                </div>
                <h1
                  className={`${display.className} font-black leading-[0.98] tracking-[-0.015em] text-[clamp(2.7rem,9vw,5.6rem)] mb-5`}
                >
                  La parada
                  <br />
                  <span className={displayIt.className} style={{ color: C.ember }}>camino a Vilches</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: C.muted }}>
                  Casa de madera, fogón y cordillera: en El Colorado, San
                  Clemente, Leticia sirve parrilladas, cazuelas y un pebre
                  que sus clientes llaman el mejor que han probado.
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lc-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.ember, color: '#FFF' }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#fogon"
                    className="lc-btn font-semibold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver el fogón
                  </a>
                  <a
                    href={BIZ.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full bg-white tap-44`}
                    style={{ border: `1px solid ${C.line}`, color: C.ink }}
                  >
                    <svg viewBox="0 0 20 20" className="w-[14px] h-[14px]" fill={C.sun} aria-hidden="true">
                      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                    </svg>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6">
              <Reveal delay={120}>
                <div className="relative">
                  <div
                    className="relative overflow-hidden aspect-[4/3] rounded-t-[999px] border-4"
                    style={{ borderColor: C.green }}
                  >
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Fachada de La Cocina de Leticia: casa de madera con techo rojo y su letrero camino a Vilches"
                      fill
                      priority
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-5 left-5 md:left-8">
                    <LogoChip size={64} />
                  </div>
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-8 text-right`} style={{ color: C.muted }}>
                  El letrero de madera que marca la parada
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Postas de la ruta: fogón y cafetería ── */}
      <section id="fogon" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            {/* línea de ruta con hitos */}
            <div className="col-span-12 md:col-span-4">
              <div className="relative flex md:block gap-8">
                <div className="hidden md:block w-0.5 lc-road absolute left-7 top-3 bottom-3" aria-hidden="true" />
                <div className="space-y-12 md:space-y-16 relative">
                  <Reveal>
                    <div style={{ color: C.paper }}>
                      <Mile n="KM 45" title="El fogón" sub="Parrilladas y olla" />
                    </div>
                  </Reveal>
                  <Reveal delay={120}>
                    <div className="md:pt-40" style={{ color: C.paper }}>
                      <Mile n="Posta 2" title="La cafetería" sub="Y la despensa" />
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>

            <div className="col-span-12 md:col-span-8 space-y-16 md:space-y-24">
              {/* El fogón */}
              <div>
                <Reveal>
                  <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(247,240,222,0.85)' }}>
                    Lo que llega a la mesa: platos de olla, mariscos en
                    paila de greda y la parrilla encendida. Todo casero,
                    todo de la casa.
                  </p>
                </Reveal>
                <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-8">
                  {FOGON.map((f, i) => (
                    <Reveal key={f} delay={i * 60}>
                      <li
                        className="h-full px-4 py-3.5 rounded-lg border text-sm font-medium flex items-center gap-2.5"
                        style={{ borderColor: 'rgba(247,240,222,0.3)', backgroundColor: 'rgba(247,240,222,0.06)' }}
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill={C.sun} aria-hidden="true">
                          <path d="M12 2c1 4-3 5-3 9a5 5 0 0010 0c0-2-1-3.5-2-4.5C16 8 15 9 15 10c-1-1-1.5-3-1-5-1 .8-2 2.3-2 4-2-1.5-2-4.5 0-7z" />
                        </svg>
                        {f}
                      </li>
                    </Reveal>
                  ))}
                </ul>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  {[
                    { src: 'lomo-pobre.webp', alt: 'Lomo a lo pobre con papas fritas y huevo frito en sartén' },
                    { src: 'cazuela.webp', alt: 'Cazuela con carne, arroz y porotos' },
                    { src: 'paila.webp', alt: 'Paila marina en pote de greda' },
                    { src: 'parrilla.webp', alt: 'Carnes a la parrilla en el fogón' },
                  ].map((f, i) => (
                    <Reveal key={f.src} delay={i * 80}>
                      <div className="relative overflow-hidden aspect-square rounded-lg border-2" style={{ borderColor: 'rgba(247,240,222,0.4)' }}>
                        <Image
                          src={`${IMG}/${f.src}`}
                          alt={f.alt}
                          fill
                          sizes="(min-width: 768px) 25vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {/* Cafetería */}
              <div id="cafe" className="scroll-mt-24">
                <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
                  <div className="col-span-12 md:col-span-5">
                    <Reveal>
                      <div className="relative overflow-hidden aspect-[3/4] rounded-lg border-2" style={{ borderColor: 'rgba(247,240,222,0.4)' }}>
                        <Image
                          src={`${IMG}/carta-cafe.webp`}
                          alt="Carta de cafetería del local con precios"
                          fill
                          sizes="(min-width: 768px) 40vw, 100vw"
                          className="object-cover"
                        />
                      </div>
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3`} style={{ color: 'rgba(247,240,222,0.6)' }}>
                        La carta del café, publicada por ellos
                      </p>
                    </Reveal>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <Reveal delay={100}>
                      <ul className="divide-y" style={{ borderColor: 'rgba(247,240,222,0.2)' }}>
                        {CAFE.map((c) => (
                          <li key={c.name} className="flex items-baseline gap-3 py-3">
                            <span className="text-sm md:text-base font-semibold">{c.name}</span>
                            <span className="flex-1 border-b border-dotted -translate-y-1" style={{ borderColor: 'rgba(247,240,222,0.35)' }} aria-hidden="true" />
                            {c.price && (
                              <span className={`${display.className} text-lg md:text-xl font-semibold`} style={{ color: C.sun }}>
                                {c.price}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <p className="text-xs md:text-sm leading-relaxed mt-4" style={{ color: 'rgba(247,240,222,0.65)' }}>
                        Precios de su propia carta. También hay sándwiches
                        artesanales —italiano, barros luco—, empanadas por
                        encargo y desayunos con huevos de campo y miel.
                      </p>
                      <div className="flex flex-wrap gap-2 mt-5">
                        {SANDWICHES.map((s) => (
                          <span
                            key={s}
                            className={`${mono.className} text-[10px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border`}
                            style={{ borderColor: 'rgba(247,240,222,0.35)', color: C.paper }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── El salón y su ventanal al jardín ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.ember }}>
            Adentro
          </p>
          <h2 className={`${display.className} font-black leading-[1.0] text-[clamp(2.2rem,6.5vw,4.6rem)] mb-10 md:mb-14`}>
            Madera, fogón
            <br />y <span className={displayIt.className} style={{ color: C.green }}>ventanal al campo</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          <Reveal className="col-span-7">
            <div className="relative overflow-hidden aspect-[4/5] md:aspect-[4/4] rounded-lg border-4" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/ventanal.webp`}
                alt="Interior de madera con gran ventanal al jardín y el campo"
                fill
                sizes="(min-width: 768px) 58vw, 60vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="col-span-5 grid gap-4 md:gap-5">
            <Reveal delay={100}>
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[4/3] rounded-lg border-4" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón del restaurante con mesas de madera y mantel"
                  fill
                  sizes="(min-width: 768px) 40vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={160}>
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[4/3] rounded-lg border-4" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/salmon.webp`}
                  alt="Salmón a la plancha sobre papas fritas caseras"
                  fill
                  sizes="(min-width: 768px) 40vw, 40vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paper2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} font-black leading-[1.0] text-[clamp(2.2rem,6.5vw,4.4rem)]`}>
                Lo que dicen los que
                <br />
                <span className={displayIt.className} style={{ color: C.ember }}>pararon a comer</span>
              </h2>
              <p className={`${mono.className} text-xs md:text-sm tracking-[0.15em]`} style={{ color: C.green }}>
                {BIZ.rating} ★ · {BIZ.reviews} opiniones en Google
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70} className={i === 0 ? 'md:col-span-2' : ''}>
                <figure
                  className="h-full p-6 md:p-7 rounded-xl bg-white border-2 flex flex-col"
                  style={{ borderColor: C.ink }}
                >
                  <div className="flex items-center gap-0.5 mb-4" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <svg key={s} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill={C.sun}>
                        <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-5 flex-1">
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-semibold`} style={{ color: C.green }}>
                    {r.author} <span style={{ color: C.muted }}>· {r.note}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={BIZ.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lc-btn inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.ember, textDecorationColor: 'rgba(176,58,34,0.4)' }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.sun }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} font-black leading-[1.02] text-[clamp(2rem,5.5vw,3.6rem)] mb-6`}>
                Subiendo a Vilches,
                <br />
                <span className={displayIt.className} style={{ color: C.sun }}>en el km 45</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed font-medium mb-6" style={{ color: 'rgba(247,240,222,0.85)' }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44" style={{ color: C.paper }}>
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.paper }}>
                  {BIZ.igUser}
                </a>
              </address>
              <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(247,240,222,0.65)' }}>
                En la ficha de Google figura como restaurante familiar en
                Vilches, San Clemente. Para horarios y reservas, lo más
                seguro es escribirles directo: responden por WhatsApp e
                Instagram.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-btn font-semibold text-sm px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.sun, color: C.ink }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lc-btn font-semibold text-sm px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: 'rgba(247,240,222,0.6)', color: C.paper }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={120} className="h-full">
              <div
                className="relative w-full overflow-hidden rounded-xl border-4 aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
                style={{ borderColor: 'rgba(247,240,222,0.85)' }}
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
      <footer style={{ backgroundColor: '#150E08', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex items-center gap-4">
          <LogoChip size={44} />
          <div>
            <p className={`${display.className} font-bold text-lg md:text-xl leading-none mb-1`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(247,240,222,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,240,222,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(247,240,222,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} con sus fotos y reseñas reales de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.sun }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
