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
  CARTA,
  BARRA,
  CLASICOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' }],
})
const displayMd = localFont({
  src: [{ path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

// Paleta del local: carbón del totem, dorado del sello, rojo del letrero,
// crema de la carta impresa.
const C = {
  carbon: '#14110D',
  carbon2: '#1D1915',
  gold: '#C9A24E',
  red: '#9E2C25',
  cream: '#F5EFE2',
  cream2: '#EDE4D0',
  ink: '#1B1712',
  muted: '#6E6353',
  mutedDark: '#A79B84',
  line: 'rgba(27,23,18,0.16)',
  lineDark: 'rgba(245,239,226,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'rukalauken-food-drinks',
  title: 'RukaLauken Food & Drinks — Bar & grill en Colbún',
  description:
    "Bar & grill en O'Higgins 228, Colbún. Tablas, pizzas artesanales, chorrillanas y barra con schop y coctelería. Reserva por WhatsApp.",
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La mesa', href: '#mesa' },
  { label: 'La barra', href: '#barra' },
  { label: 'El lugar', href: '#lugar' },
  { label: 'Ubicación', href: '#contacto' },
]

/** Sello circular que imita el logo del local; gira suave al hacer scroll. */
function Seal({ className = '' }: { className?: string }) {
  return (
    <span
      className={`relative inline-block rounded-full overflow-hidden ${className}`}
      style={{ boxShadow: `0 0 0 2px ${C.gold}` }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
      <img
        src={`${IMG}/logo.webp`}
        alt="Logo de RukaLauken Food & Drinks"
        className="w-full h-full object-cover"
      />
    </span>
  )
}

function Row({ name, price, dark = false }: { name: string; price: string; dark?: boolean }) {
  return (
    <li className="py-3 flex items-baseline gap-3">
      <span className="text-sm md:text-base font-semibold" style={{ color: dark ? C.cream : C.ink }}>
        {name}
      </span>
      <span
        className="flex-1 border-b border-dotted -translate-y-1"
        style={{ borderColor: dark ? 'rgba(245,239,226,0.35)' : 'rgba(27,23,18,0.3)' }}
        aria-hidden="true"
      />
      <span
        className={`${displayMd.className} text-lg md:text-xl font-semibold`}
        style={{ color: dark ? C.gold : C.red }}
      >
        {price}
      </span>
    </li>
  )
}

export default function RukaLaukenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.cream }}
    >
      <style>{`
        .rk-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .rk-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .rk-btn:active { transform: translateY(0) scale(0.97); }
        .rk-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        @keyframes rk-spin { to { transform: rotate(360deg); } }
        .rk-seal-spin { animation: rk-spin 40s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .rk-seal-spin { animation: none; } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={displayMd.className}
        theme={{
          over: 'dark',
          bar: 'rgba(20,17,13,0.94)',
          ink: C.cream,
          line: C.lineDark,
          btnBg: C.gold,
          btnInk: C.carbon,
        }}
      />

      {/* ── Hero a sangre: la casa del pueblo ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de RukaLauken: mesones de madera, plantas y luz cálida"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,17,13,0.62) 0%, rgba(20,17,13,0.25) 45%, rgba(20,17,13,0.92) 88%)',
          }}
        />

        {/* sello del local, girando lento */}
        <div className="absolute top-[84px] right-5 md:right-10">
          <Reveal delay={250}>
            <span className="rk-seal-spin inline-block">
              <Seal className="w-[76px] h-[76px] md:w-[96px] md:h-[96px]" />
            </span>
          </Reveal>
        </div>

        <div className="relative flex-1 flex flex-col justify-end w-full max-w-6xl mx-auto px-5 md:px-8 pb-9 pt-40">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-4`}
              style={{ color: C.gold }}
            >
              Bar &amp; grill · O&apos;Higgins 228 · Colbún
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(2.9rem,11vw,7.5rem)] mb-5`}
              style={{ color: C.cream }}
            >
              La casa donde
              <br />
              Colbún sale{' '}
              <span style={{ color: C.gold }}>a comer</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8 font-medium" style={{ color: 'rgba(245,239,226,0.85)' }}>
              Tablas, chorrillanas, pizzas artesanales y una barra que se
              toma en serio los tragos. Terraza, estacionamiento propio y
              sobremesa hasta tarde, en pleno centro de Colbún.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${displayMd.className} rk-btn font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.gold, color: C.carbon }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#mesa"
                className={`${displayMd.className} rk-btn font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3 border-2 hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(245,239,226,0.55)', color: C.cream }}
              >
                Ver la carta
              </a>
              <a
                href={BIZ.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 text-xs md:text-sm font-medium px-4 py-2.5 rounded-full tap-44`}
                style={{ backgroundColor: 'rgba(20,17,13,0.65)', color: C.cream, border: `1px solid ${C.lineDark}` }}
              >
                <svg viewBox="0 0 20 20" className="w-[14px] h-[14px]" fill={C.gold} aria-hidden="true">
                  <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                </svg>
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Los clásicos que piden los clientes ── */}
      <div className="border-y py-3 md:py-4 overflow-hidden" style={{ backgroundColor: C.gold, borderColor: 'rgba(20,17,13,0.25)' }}>
        <div
          className={`${displayMd.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-1 text-sm md:text-base font-semibold uppercase tracking-[0.12em]`}
          style={{ color: C.carbon }}
        >
          {CLASICOS.map((item, i) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3">{item}</span>
              {i < CLASICOS.length - 1 && (
                <span className="text-[0.6em]" aria-hidden="true">◆</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── Food & Drinks: el nombre divide la página ── */}
      <section id="mesa" className="scroll-mt-20" style={{ backgroundColor: C.cream, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-4">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
              Food &amp; Drinks, literal
            </p>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.4rem,7vw,5.2rem)]`}
            >
              La mitad se come,
              <br />
              <span style={{ color: C.red }}>la otra se toma</span>
            </h2>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto md:px-8 md:pb-20 grid grid-cols-1 md:grid-cols-2">
          {/* FOOD */}
          <div className="px-5 md:px-0 md:pr-10 py-10 md:py-12">
            <Reveal>
              <div className="flex items-baseline justify-between mb-6 border-b-2 pb-3" style={{ borderColor: C.ink }}>
                <h3 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl`}>Food</h3>
                <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                  Menú Ruka
                </span>
              </div>
              <div className="relative overflow-hidden mb-7 aspect-[4/3]">
                <Image
                  src={`${IMG}/chorrillana.webp`}
                  alt="Chorrillana con carne, papas fritas y huevo frito"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <ul className="divide-y" style={{ borderColor: C.line }}>
                {CARTA.map((m) => (
                  <Row key={m.name} name={m.name} price={m.price} />
                ))}
              </ul>
              <p className="text-xs md:text-sm leading-relaxed mt-5" style={{ color: C.muted }}>
                Precios de la carta del local, publicada en su ficha de
                Google. También hay tablas para compartir, sándwiches y
                pizza vegetariana.
              </p>
            </Reveal>
          </div>

          {/* DRINKS */}
          <div
            id="barra"
            className="scroll-mt-20 px-5 md:px-0 md:pl-10 py-10 md:py-12 md:ml-[-1px]"
            style={{ backgroundColor: C.carbon2 }}
          >
            <div className="md:px-8">
              <Reveal delay={120}>
                <div className="flex items-baseline justify-between mb-6 border-b-2 pb-3" style={{ borderColor: C.gold }}>
                  <h3 className={`${display.className} font-extrabold uppercase text-3xl md:text-4xl`} style={{ color: C.cream }}>
                    Drinks
                  </h3>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.mutedDark }}>
                    Líquidos
                  </span>
                </div>
                <div className="relative overflow-hidden mb-7 aspect-[4/3]">
                  <Image
                    src={`${IMG}/sour.webp`}
                    alt="Pisco sour con rodaja de naranja sobre mantelito del local"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <ul className="divide-y" style={{ borderColor: C.lineDark }}>
                  {BARRA.map((m) => (
                    <Row key={m.name} name={m.name} price={m.price} dark />
                  ))}
                </ul>
                <p className="text-xs md:text-sm leading-relaxed mt-5" style={{ color: C.mutedDark }}>
                  De la misma carta. Los viernes y sábado la barra corre
                  hasta las 2 AM; los clientes recomiendan el mojito
                  maracuyá y la michelada.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mesa servida: collage de platos reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.carbon }}>
        <Reveal>
          <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.gold }}>
            Fotos del local
          </p>
          <h2
            className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(2.4rem,7vw,5.2rem)] mb-10 md:mb-14`}
            style={{ color: C.cream }}
          >
            Así llega
            <br />
            la mesa
          </h2>
        </Reveal>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {[
            { src: 'tabla.webp', alt: 'Tabla Rukalauken con papas, salsas y cerveza Austral', label: 'Tabla Rukalauken', cls: 'col-span-2 row-span-2 aspect-square' },
            { src: 'pizza.webp', alt: 'Pizza artesanal en tabla de madera', label: 'Pizzas artesanales', cls: 'aspect-square' },
            { src: 'burger.webp', alt: 'Hamburguesa con papas fritas y mayonesa casera', label: 'Hamburguesas', cls: 'aspect-square' },
            { src: 'totem.webp', alt: 'Tótem del local: RukaLauken Bar & Grill Restaurante', label: 'O’Higgins 228', cls: 'aspect-square' },
            { src: 'terraza.webp', alt: 'Terraza con sombrillas y jardineras', label: 'La terraza', cls: 'aspect-square' },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 90} className={f.cls.includes('col-span-2') ? 'col-span-2 row-span-2' : ''}>
              <li className={`group relative overflow-hidden ${f.cls} h-full`}>
                <Image
                  src={`${IMG}/${f.src}`}
                  alt={f.alt}
                  fill
                  sizes={f.cls.includes('col-span-2') ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <span
                  className={`${mono.className} absolute bottom-0 inset-x-0 px-3 py-2 text-[10px] md:text-xs uppercase tracking-[0.18em]`}
                  style={{ background: 'linear-gradient(0deg, rgba(20,17,13,0.85), transparent)', color: C.cream }}
                >
                  {f.label}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── El lugar ── */}
      <section id="lugar" className="scroll-mt-20" style={{ backgroundColor: C.carbon2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5]">
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta impresa del local con el Menú Ruka"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3`} style={{ color: C.mutedDark }}>
                La carta en papel, tal como llega a la mesa
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <Reveal>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)] mb-6`}
                style={{ color: C.cream }}
              >
                Terraza, estacionamiento
                <br />
                <span style={{ color: C.gold }}>y sobremesa larga</span>
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed mb-8" style={{ color: C.mutedDark }}>
                <p>
                  En RukaLauken se almuerza de día y se brinda de noche: el
                  local tiene terraza con sombrillas, estacionamiento
                  dentro del recinto y espacio para grupos de todos los
                  tamaños. También hacen pedidos para llevar y a domicilio.
                </p>
                <p>
                  Ruka, en mapudungun, es la casa. La casa esta se reconoce
                  por su tótem en la O&apos;Higgins, a pasos de la plaza de
                  Colbún.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-3 mb-9">
                {[
                  'Terraza con sombrillas',
                  'Estacionamiento propio',
                  'Apto para niños',
                  'Pedidos a domicilio',
                ].map((f) => (
                  <li
                    key={f}
                    className={`${displayMd.className} flex items-center gap-2.5 text-sm md:text-base font-semibold uppercase tracking-wide px-4 py-3 border`}
                    style={{ borderColor: C.lineDark, color: C.cream }}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.gold} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${displayMd.className} rk-btn inline-block font-semibold uppercase tracking-wide text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.gold, color: C.carbon }}
              >
                Reservar mesa
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14 border-b pb-5" style={{ borderColor: C.lineDark }}>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4rem)]`}
              style={{ color: C.cream }}
            >
              Lo que dicen
              <br />
              en Google
            </h2>
            <p className={`${mono.className} text-xs md:text-sm tracking-[0.15em]`} style={{ color: C.gold }}>
              {BIZ.rating} ★ · {BIZ.reviews} opiniones
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.author} delay={i * 90}>
              <figure
                className="h-full p-6 md:p-7 border"
                style={{ backgroundColor: i % 2 === 0 ? C.carbon2 : 'transparent', borderColor: C.lineDark }}
              >
                <div className="flex items-center gap-1 mb-4" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 20 20" className="w-3.5 h-3.5" fill={C.gold}>
                      <path d="M10 1.8 L12.6 7 L18.2 7.6 L14 11.5 L15.3 17 L10 14 L4.7 17 L6 11.5 L1.8 7.6 L7.4 7 Z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-sm md:text-base leading-relaxed mb-5" style={{ color: 'rgba(245,239,226,0.88)' }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.gold }}>
                  {r.author} <span style={{ color: C.mutedDark }}>· {r.note}</span>
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
            className={`${displayMd.className} inline-block mt-8 text-sm font-semibold uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.gold, textDecorationColor: 'rgba(201,162,78,0.4)' }}
          >
            Leer las {BIZ.reviews} reseñas en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.cream, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid grid-cols-12 gap-8 md:gap-10">
          <div className="col-span-12 md:col-span-5">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.3em] mb-3`} style={{ color: C.red }}>
                Cómo llegar
              </p>
              <h2
                className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(2rem,5.5vw,3.6rem)] mb-6`}
              >
                En la O&apos;Higgins,
                <br />
                <span style={{ color: C.red }}>frente al pueblo</span>
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed font-medium mb-6">
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <ul className="mb-8 border-t" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <li key={h.d} className="flex justify-between gap-4 py-2.5 border-b text-sm" style={{ borderColor: C.line }}>
                    <span className="font-semibold">{h.d}</span>
                    <span className={h.h === 'Cerrado' ? 'font-semibold' : ''} style={{ color: h.h === 'Cerrado' ? C.red : C.muted }}>
                      {h.h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${displayMd.className} rk-btn font-semibold uppercase tracking-wide text-sm px-7 py-3 tap-44`}
                  style={{ backgroundColor: C.red, color: C.cream }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={BIZ.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${displayMd.className} rk-btn font-semibold uppercase tracking-wide text-sm px-7 py-3 border-2 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Abrir en Maps
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={120} className="h-full">
              <div
                className="relative w-full overflow-hidden border-2 aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]"
                style={{ borderColor: C.ink }}
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
      <footer style={{ backgroundColor: '#0D0B08', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex items-center gap-4">
          <Seal className="w-[44px] h-[44px] shrink-0" />
          <div>
            <p className={`${display.className} font-extrabold uppercase text-lg md:text-xl leading-none mb-1`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.mutedDark }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              {' · '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,239,226,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,239,226,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} con sus fotos, carta y reseñas reales de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
