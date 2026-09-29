import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

// Identidad real: el rojo de su letrero y cubiertos, el azul del Pacífico
// frente al local y la arena de la primera playa.
const C = {
  sea: '#0E3A4C',
  seaSoft: '#14455A',
  sand: '#EFE6D4',
  paper: '#FAF7F0',
  ink: '#1B2B33',
  red: '#9E2C2B',
  gold: '#D4A468',
  muted: '#5C6B72',
  line: 'rgba(27,43,51,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), restaurada aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-gran-chimu',
  title: 'El Gran Chimú — Cocina peruana frente al mar, Constitución',
  description:
    'Restaurante peruano en Enrique Mac Iver 1142, frente a la primera playa de Constitución. Ceviche, pescados y mariscos con el Pacífico al frente.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#contacto' },
]

const PLATES = [
  {
    src: `${IMG}/ceviche.webp`,
    name: 'Ceviche de la casa',
    desc: 'Pescado fresco, leche de tigre y cebolla morada — el clásico que define la cocina peruana.',
  },
  {
    src: `${IMG}/arroz.webp`,
    name: 'Arroz chaufa',
    desc: 'El wok chifa de toda la vida: arroz salteado con su toque ahumado.',
  },
  {
    src: `${IMG}/pescado.webp`,
    name: 'Pescado y mar',
    desc: 'Del Pacífico que se ve por la ventana, directo al plato.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Excelente experiencia. Destacamos la calidad de la atención, el grato ambiente y la preocupación por cada detalle. Los platos estuvieron realmente deliciosos.',
    author: 'Marco Cofré',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Fue uno de los mejores lugares en que he comido. Elegante en apariencia y el personal muy atento, siempre preocupado de cada uno.',
    author: 'Max',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'La comida estaba deliciosa, con ingredientes frescos y muy bien preparada. El ambiente muy agradable. Sin duda volveré.',
    author: 'Romina',
    meta: 'reseña de Google · 5 estrellas',
  },
]

/** Greca escalonada Chimú: friso de rombos tipo chan chan. */
function Fret({ color, bg }: { color: string; bg: string }) {
  return (
    <div aria-hidden="true" className="w-full" style={{ backgroundColor: bg }}>
      <svg viewBox="0 0 1200 26" className="block w-full h-[18px] md:h-[26px]" preserveAspectRatio="none">
        <path
          d="M0 26 L20 6 L40 26 L60 6 L80 26 L100 6 L120 26 L140 6 L160 26 L180 6 L200 26 L220 6 L240 26 L260 6 L280 26 L300 6 L320 26 L340 6 L360 26 L380 6 L400 26 L420 6 L440 26 L460 6 L480 26 L500 6 L520 26 L540 6 L560 26 L580 6 L600 26 L620 6 L640 26 L660 6 L680 26 L700 6 L720 26 L740 6 L760 26 L780 6 L800 26 L820 6 L840 26 L860 6 L880 26 L900 6 L920 26 L940 6 L960 26 L980 6 L1000 26 L1020 6 L1040 26 L1060 6 L1080 26 L1100 6 L1120 26 L1140 6 L1160 26 L1180 6 L1200 26"
          fill="none"
          stroke={color}
          strokeWidth="5"
        />
      </svg>
    </div>
  )
}

export default function ElGranChimuPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .gc-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .gc-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .gc-btn:active { transform: translateY(0) scale(0.97); }
        .gc-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(14,58,76,0.95)',
          ink: '#FAF7F0',
          line: 'rgba(250,247,240,0.2)',
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el salón con el Pacífico al fondo ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.sea }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Salón de El Gran Chimú con sillas rojas y ventanales hacia el mar"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,58,76,0.5) 0%, rgba(14,58,76,0.15) 45%, rgba(14,58,76,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-44">
          <Reveal>
            <p
              className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-4"
              style={{ color: C.gold }}
            >
              {BIZ.playa} · Constitución
            </p>
            <h1
              className={`${display.className} leading-[1.02] text-[clamp(2.6rem,8vw,6rem)] mb-5 max-w-3xl`}
              style={{ color: '#FAF7F0' }}
            >
              Perú a la mesa,
              <br />
              el Pacífico al frente
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(250,247,240,0.9)' }}>
              Cocina peruana e internacional en Enrique Mac Iver 1142:
              ceviche, arroz chaufa y pescados con vista a la primera
              playa de Constitución.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className="gc-btn font-bold text-sm md:text-base px-7 py-3 tap-44"
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Reservar mesa
              </a>
              <a
                href="#cocina"
                className="gc-btn font-bold text-sm md:text-base px-7 py-3 border-2 tap-44"
                style={{ borderColor: 'rgba(250,247,240,0.6)', color: '#FAF7F0' }}
              >
                Ver la cocina
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Fret color={C.red} bg={C.sand} />

      {/* ── Franja de datos ── */}
      <section aria-label="Datos del local" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8 flex flex-wrap gap-x-10 gap-y-3 items-center">
          <span className="inline-flex items-center gap-2 text-sm font-bold" style={{ color: C.ink }}>
            <Stars value={4.7} color={C.red} className="w-4 h-4" />
            {BIZ.rating} · {BIZ.reviews} reseñas en Google
          </span>
          <span className="text-sm" style={{ color: C.muted }}>{BIZ.address}, {BIZ.city}</span>
          <span className="text-sm" style={{ color: C.muted }}>Gastronomía peruana e internacional</span>
        </div>
      </section>

      {/* ── La cocina ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="grid grid-cols-12 gap-8 items-end mb-12 md:mb-16">
            <div className="col-span-12 md:col-span-7">
              <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: C.red }}>
                La cocina
              </p>
              <h2 className={`${display.className} text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.03]`} style={{ color: C.ink }}>
                Del mar de afuera
                <br />al plato de adentro
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Constitución es puerto: el pescado y los mariscos llegan
                de la caleta al wok y a la leche de tigre. Fotos reales
                de los platos del local.
              </p>
            </div>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {PLATES.map((p, i) => (
            <Reveal key={p.name} className="col-span-12 md:col-span-4" delay={i * 110}>
              <li className="group">
                <div className="relative overflow-hidden aspect-[4/5] mb-4 border-b-4" style={{ borderColor: C.red }}>
                  <Image
                    src={p.src}
                    alt={p.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                </div>
                <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`} style={{ color: C.ink }}>
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {p.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
        {/* segunda fila: chicha + plato */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 mt-10 md:mt-14">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative overflow-hidden aspect-[16/9]">
              <Image
                src={`${IMG}/chicha.webp`}
                alt="Mesa con chicha morada y plato de la casa"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5" delay={120}>
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-auto md:h-full">
              <Image
                src={`${IMG}/plato.webp`}
                alt="Plato cremoso de la casa con arroz"
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El local: frente al mar ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.sea, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-10 items-center">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: C.gold }}>
                  El local
                </p>
                <h2 className={`${display.className} text-[clamp(2.2rem,5.5vw,4rem)] leading-[1.03] mb-6`}>
                  La primera playa,
                  <br />mesa a mesa
                </h2>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(250,247,240,0.85)' }}>
                  <p>
                    {BIZ.name} lleva años en Enrique Mac Iver, la
                    costanera de Constitución: el mar se ve desde la
                    mesa y la cocina mezcla Perú con lo internacional.
                  </p>
                  <p>
                    En Google acumula {BIZ.reviews} reseñas con nota{' '}
                    {BIZ.rating}, y en{' '}
                    <a
                      href={BIZ.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-4 decoration-2 tap-44"
                      style={{ color: C.gold }}
                    >
                      Facebook
                    </a>{' '}
                    publican la carta y el día a día del restaurante.
                  </p>
                </div>
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gc-btn inline-block font-bold text-sm md:text-base px-7 py-3 mt-8 tap-44"
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Reservar por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120}>
                <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/3] border-4 shadow-xl" style={{ borderColor: 'rgba(250,247,240,0.2)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de El Gran Chimú con su letrero y ventanas rojas frente a la playa"
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold mt-3" style={{ color: 'rgba(250,247,240,0.6)' }}>
                  El local frente al mar — foto real
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Fret color={C.red} bg={C.sea} />

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
            <h2 className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.03]`} style={{ color: C.ink }}>
              Lo que dicen los que
              <br />ya se sentaron
            </h2>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tap-44"
              style={{ color: C.red }}
            >
              <Stars value={4.7} color={C.red} className="w-4 h-4" />
              {BIZ.rating} · {BIZ.reviews} reseñas →
            </a>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} className="col-span-12 md:col-span-4" delay={i * 100}>
              <figure
                className="h-full p-6 md:p-7 border-t-4"
                style={{ borderColor: C.red, backgroundColor: '#FFFFFF' }}
              >
                <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption>
                  <span className={`${display.className} block text-sm`} style={{ color: C.ink }}>
                    {t.author}
                  </span>
                  <span className="text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: C.muted }}>
                    {t.meta}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: C.red }}>
                  Ubicación
                </p>
                <h2 className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-6`} style={{ color: C.ink }}>
                  Enrique Mac Iver 1142
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                  {BIZ.address}, {BIZ.city}
                  <br />
                  {BIZ.playa} · {BIZ.region}
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gc-btn font-bold text-sm md:text-base px-7 py-3 tap-44"
                    style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                  >
                    WhatsApp directo
                  </a>
                  <a
                    href={BIZ.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gc-btn font-bold text-sm md:text-base px-7 py-3 border-2 tap-44"
                    style={{ borderColor: C.red, color: C.red }}
                  >
                    Facebook
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={120} className="h-full">
                <div className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]" style={{ borderColor: 'rgba(158,44,43,0.3)' }}>
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
      <footer style={{ backgroundColor: '#0A2E3D', color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex items-center gap-5">
          {/* eslint-disable-next-line @next/next/no-img-element -- isotipo real recortado de su gráfica */}
          <img
            src={`${IMG}/logo.webp`}
            alt="Isotipo de El Gran Chimú: tenedor y cuchara rojos"
            className="w-12 h-12 rounded-full object-cover object-top"
          />
          <div>
            <p className={`${display.className} text-xl md:text-2xl mb-1`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,247,240,0.7)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,247,240,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(250,247,240,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La carta es de muestra; las fotos y reseñas
            son reales de la ficha del local.{' '}
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
