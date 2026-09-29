import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  cream: '#FFF6E3',
  creamHi: '#FFFDF4',
  ink: '#241A08',
  muted: '#6B5B3D',
  yellow: '#F2B90D',
  yellowDeep: '#D99A00',
  green: '#1E7A3C',
  greenDeep: '#145C2E',
  red: '#D0342C',
  night: '#141309',
  line: 'rgba(36,26,8,0.16)',
}

// globals.css redefine --spacing-5…12; se restaura la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-la-rueda',
  title: 'Restaurant La Rueda — la fuente de soda de Sagrada Familia',
  description:
    'Fuente de soda en Esperanza 332, Sagrada Familia: almuerzo a $3.500 para servir o llevar, completos, chorrillanas y pedidos al 75 2 451053. 4,5 en Google con 154 reseñas.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El toldo', href: '#toldo' },
  { label: 'El almuerzo', href: '#almuerzo' },
  { label: 'Para llevar', href: '#llevar' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/* La carta del toldo de la fachada, tal cual está pintada */
const TOLDO = [
  'Completos',
  'As',
  'Lomitos',
  'Churrascos',
  'Barros luco',
  'Papas fritas',
  'Salchipapas',
  'Chorrillana',
  '1/4 pollo c/ papas',
  'Churrasco al plato',
]

/* Panel de almuerzos «para servir o llevar» */
const ALMUERZOS = [
  { plato: '1/4 Pollo', con: 'papas fritas · ensalada mixta · pan y pebre' },
  { plato: 'Churrasco al plato', con: 'papas fritas · ensalada mixta · pan y pebre' },
  { plato: 'Chuleta', con: 'papas fritas · arroz · ensalada mixta · pan y pebre' },
  { plato: 'Pichanga a la plancha', con: 'papas fritas · arroz · ensalada mixta · pan y pebre' },
]

const RESENAS = [
  {
    nombre: 'Benja Latrille',
    fecha: 'Hace 4 meses',
    estrellas: 5,
    texto:
      'Soy de Curicó, pero mi polola me llevó un día acá, y no me arrepiento: en cuanto a calidad precio es excelente y nada que decir de los completos. Prefiero pegarme el pique para acá que al Dino.',
  },
  {
    nombre: 'Carlos Fernández',
    fecha: 'Hace 11 meses',
    estrellas: 5,
    texto:
      'Muy buen lugar, ambiente rústico y tosco. Sin embargo muy buena la atención y la comida. Además higiénico.',
  },
  {
    nombre: 'Valeska Jiménez',
    fecha: 'Hace 5 años',
    estrellas: 5,
    texto: 'Delicioso, abundante, excelente servicio.',
  },
]

const HORARIO = [
  { dias: 'Lunes a viernes', horas: '12:30 – 15:00 · 20:30 – 22:30' },
  { dias: 'Sábado', horas: '20:30 – 22:45' },
  { dias: 'Domingo', horas: 'cerrado' },
]

/* Banderines de la fachada: guirnalda de triángulos de colores */
function Banderines({ invertido = false }: { invertido?: boolean }) {
  const colores = [C.red, C.yellow, C.green, '#2E7BBF', '#E7E0D0']
  return (
    <div aria-hidden="true" className={`flex justify-between gap-[6px] ${invertido ? 'rotate-180' : ''}`}>
      {Array.from({ length: 18 }).map((_, i) => (
        <span
          key={i}
          className="w-0 h-0 shrink-0"
          style={{
            borderLeft: '9px solid transparent',
            borderRight: '9px solid transparent',
            borderTop: `16px solid ${colores[i % colores.length]}`,
          }}
        />
      ))}
    </div>
  )
}

/* La rueda de carreta del tejado y del logo */
function Rueda({ className = 'w-20 h-20' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="5" />
      <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="2.5" />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        return (
          <line
            key={i}
            x1={50 + 11 * Math.cos(a)}
            y1={50 + 11 * Math.sin(a)}
            x2={50 + 44 * Math.cos(a)}
            y2={50 + 44 * Math.sin(a)}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        )
      })}
      <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="4" />
      <circle cx="50" cy="50" r="3.5" fill="currentColor" />
    </svg>
  )
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4 font-bold`}
      style={{ color: dark ? C.yellow : C.green }}
    >
      {children}
    </p>
  )
}

export default function RestaurantLaRuedaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .lr-btn { transition: transform .18s ease, filter .18s ease; }
        .lr-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .lr-btn:active { transform: scale(.97); }
        .lr-btn:focus-visible { outline: 3px solid ${C.ink}; outline-offset: 3px; }
        @keyframes lr-gira { to { transform: rotate(360deg) } }
        .lr-gira { animation: lr-gira 46s linear infinite }
        @media (prefers-reduced-motion: reduce) { .lr-gira { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-bold tracking-wide`}>{BIZ.short}</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(20,19,9,0.94)',
          ink: C.cream,
          line: 'rgba(255,246,227,0.16)',
          btnBg: C.yellow,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: la fachada con la rueda en el techo ── */}
      <section id="inicio" className="relative flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.night, minHeight: '92svh' }}>
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Fachada de la Fuente de Soda La Rueda con la rueda de carreta en el techo, toldo verde y banderines de colores"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(20,19,9,0.55) 0%, rgba(20,19,9,0.22) 40%, rgba(20,19,9,0.94) 100%)' }}
        />
        <div className="absolute top-16 md:top-20 inset-x-0 px-5 md:px-8">
          <Banderines />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-9 md:pb-12 pt-32">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4 font-bold`} style={{ color: C.yellow }}>
              Fuente de soda · {BIZ.address} · {BIZ.city}
            </p>
            <h1
              className={`${display.className} font-extrabold uppercase leading-[0.95] text-[clamp(3.2rem,13vw,8.5rem)] mb-5`}
              style={{ color: C.cream }}
            >
              La <span style={{ color: C.yellow }}>Rueda</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-semibold" style={{ color: 'rgba(255,246,227,0.92)' }}>
              La fuente de soda de Sagrada Familia: almuerzo para servir o
              llevar, completos y chorrillanas hasta la noche — con la rueda
              de carreta en el techo y banderines en la puerta.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.fijoTel}`}
                className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(255,246,227,0.55)', color: C.cream }}
              >
                Llamar: {BIZ.fijoDisplay}
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(255,246,227,0.2)', backgroundColor: 'rgba(20,19,9,0.88)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(255,246,227,0.85)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.yellow} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </span>
            <span>Almuerzo $3.500</span>
            <span className="hidden sm:inline">Pedidos al {BIZ.fijoDisplay}</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El toldo: la carta que va pintada en la fachada ── */}
      <section id="toldo" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <Banderines />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Eyebrow dark>El toldo · Esperanza 332</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.98] text-[clamp(2.1rem,7vw,4.4rem)] mb-8`} style={{ color: C.cream }}>
              Lo que dice
              <br />
              <span style={{ color: C.yellow }}>el toldo verde</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <ul className="flex flex-wrap gap-2.5 md:gap-3">
              {TOLDO.map((t) => (
                <li
                  key={t}
                  className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-lg px-4 py-2 border-2`}
                  style={{ backgroundColor: C.green, borderColor: 'rgba(255,246,227,0.5)', color: C.cream }}
                >
                  {t}
                </li>
              ))}
            </ul>
            <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-5`} style={{ color: 'rgba(255,246,227,0.7)' }}>
              La lista del toldo, tal cual está pintada · además dulces, té, café, jugos, shop y tragos
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El almuerzo de las 12:30 ── */}
      <section id="almuerzo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-7">
            <Reveal>
              <Eyebrow>Para servir o llevar · almuerzo</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] text-[clamp(2.1rem,7vw,4.4rem)] mb-3`}>
                El almuerzo
                <br />
                <span style={{ color: C.green }}>a solo $3.500</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-7 font-medium" style={{ color: C.muted }}>
                De lunes a viernes desde las 12:30: cuatro platos que salen
                con papas, ensalada mixta y pan con pebre. Se sirve en la
                mesa o se lleva en caja — como se ve en sus fotos.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <ul className="border-2" style={{ borderColor: C.ink, backgroundColor: C.creamHi }}>
                {ALMUERZOS.map((a) => (
                  <li key={a.plato} className="px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: C.line }}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className={`${display.className} font-bold uppercase tracking-wide text-lg md:text-xl`}>{a.plato}</span>
                      <span className={`${mono.className} text-sm font-bold shrink-0`} style={{ color: C.red }}>$3.500</span>
                    </div>
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] mt-1`} style={{ color: C.muted }}>
                      {a.con}
                    </p>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
                Precio del panel de la fachada · pedidos al {BIZ.fijoDisplay}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5 grid gap-4">
            <Reveal delay={100}>
              <figure className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/llevar.webp`}
                  alt="Almuerzo y churrasco al plato de La Rueda envasados para llevar, con sus monedas de la casa"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure className="relative overflow-hidden border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/churrasco-plato.webp`}
                  alt="Churrasco al plato con papas fritas, tomate y palta, promocionado para llevar"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Para llevar: la rueda que gira + foto de noche ── */}
      <section id="llevar" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.yellow }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-6 relative">
            <div aria-hidden="true" className="absolute -top-8 -left-8 md:-top-12 md:-left-12 opacity-25" style={{ color: C.ink }}>
              <Rueda className="lr-gira w-28 h-28 md:w-40 md:h-40" />
            </div>
            <Reveal>
              <Eyebrow>Delivery y para llevar</Eyebrow>
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] text-[clamp(2.1rem,7vw,4.4rem)] mb-5`}>
                La rueda gira
                <br />
                <span style={{ color: C.red }}>y el pedido sale</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7 font-semibold" style={{ color: '#4A3A12' }}>
                Chorrillanas dobles, completos gigantes y almuerzos en caja:
                se pide por WhatsApp o al {BIZ.fijoDisplay} y se retira en
                Esperanza 332. Los que vienen de Curicó ya lo saben.
              </p>
            </Reveal>
            <Reveal delay={90}>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                  style={{ backgroundColor: C.ink, color: C.cream }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                  style={{ borderColor: 'rgba(36,26,8,0.5)', color: C.ink }}
                >
                  @restaurant_larueda_chile
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal className="md:col-span-6" delay={110}>
            <figure className="relative overflow-hidden border-2 aspect-[16/10]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/noche.webp`}
                alt="La Rueda de noche con el toldo iluminado y los banderines de colores encendidos"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: '#4A3A12' }}>
              De noche el toldo se enciende — foto real
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Adentro: comedor + chorrillana ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="md:col-span-5">
            <figure className="relative overflow-hidden border-2 aspect-[3/4]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/interior.webp`}
                alt="Comedor interior de La Rueda con paredes naranjas y collages de fotos de los clientes"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
              Las paredes llevan fotos de los clientes — foto real
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] text-[clamp(2rem,6vw,4rem)] mb-5`}>
                Rústico, tosco
                <br />
                <span style={{ color: C.green }}>y bien querido</span>
              </h2>
            </Reveal>
            <Reveal delay={130}>
              <p className="text-sm md:text-base leading-relaxed max-w-lg mb-6 font-medium" style={{ color: C.muted }}>
                Adentro las paredes naranjas están cubiertas de collages con
                fotos de los clientes. Afuera, la bicicleta estacionada y la
                rueda en el techo dicen que se llegó. No hay atuendo ni
                carta rebuscada: hay platos que salen calientes y a precio
                justo.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <figure className="relative overflow-hidden border-2 aspect-[16/9]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/chorrillana.webp`}
                  alt="Chorrillana doble de La Rueda con su palillito de la casa"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.creamHi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow>Reseñas · Google Maps</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase leading-[0.96] text-[clamp(2.1rem,7vw,4.4rem)] mb-10`}>
              Los de Curicó
              <br />
              <span style={{ color: C.red }}>ya vienen por ella</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full border-2 p-5 md:p-6 flex flex-col rounded-2xl" style={{ borderColor: C.ink, backgroundColor: '#FFFFFF' }}>
                  <Stars value={r.estrellas} color={C.green} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 font-semibold" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                    <span style={{ color: C.ink }}>{r.nombre}</span>
                    <span className="shrink-0">{r.fecha} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 font-bold text-sm md:text-base uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.green, textDecorationColor: 'rgba(30,122,60,0.4)' }}
            >
              Ver las {BIZ.reviews} reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.night }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <Eyebrow dark>Cómo llegar · K-16</Eyebrow>
                <address className="not-italic mb-6">
                  <p className={`${display.className} font-extrabold uppercase leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.cream }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base font-semibold" style={{ color: 'rgba(255,246,227,0.78)' }}>
                    {BIZ.city}, {BIZ.region}
                  </p>
                  <p className={`${mono.className} text-sm md:text-base mt-3`} style={{ color: C.yellow }}>
                    <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 tap-44" style={{ textDecorationColor: 'rgba(242,185,13,0.4)' }}>
                      {BIZ.phoneDisplay}
                    </a>
                    {' · '}
                    <a href={`tel:${BIZ.fijoTel}`} className="underline underline-offset-4 decoration-2 tap-44" style={{ textDecorationColor: 'rgba(242,185,13,0.4)' }}>
                      {BIZ.fijoDisplay}
                    </a>
                  </p>
                </address>
              </Reveal>
              <Reveal delay={90}>
                <div className="border-t" style={{ borderColor: 'rgba(255,246,227,0.18)' }}>
                  {HORARIO.map((h) => (
                    <div key={h.dias} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(255,246,227,0.18)' }}>
                      <span className={`${display.className} font-bold uppercase tracking-wide text-base md:text-lg`} style={{ color: C.cream }}>
                        {h.dias}
                      </span>
                      <span className={`${mono.className} text-sm text-right`} style={{ color: C.yellow }}>
                        {h.horas}
                      </span>
                    </div>
                  ))}
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.yellow, color: C.ink }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lr-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(255,246,227,0.4)', color: C.cream }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden border-2 aspect-[4/3] min-h-[300px]" style={{ borderColor: 'rgba(255,246,227,0.3)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2`} style={{ color: 'rgba(255,246,227,0.6)' }}>
                La rueda de carreta en el techo se ve desde la K-16
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0C0B05', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-extrabold uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed font-medium" style={{ color: 'rgba(255,246,227,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={`tel:${BIZ.fijoTel}`} className="underline underline-offset-2 tap-44">{BIZ.fijoDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,246,227,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,246,227,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas, los precios y las fotos
            son los reales de la ficha de Google y las redes del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
