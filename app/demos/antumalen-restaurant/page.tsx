import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF3E6',
  card: '#FFFCF6',
  ink: '#2A1B10',
  muted: '#7C6A59',
  mustard: '#E3A008',
  terracotta: '#B8441D',
  deep: '#231508',
  wood: '#6E421E',
  line: 'rgba(42,27,16,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'antumalen-restaurant',
  title: 'Antümalen Restaurant — Comida casera en Ruta 115, San Clemente',
  description:
    'Restaurant en Ruta 115, San Clemente: chorrillanas, sushi, desayunos y platos caseros con delivery. Segundo nivel climatizado. Pide por WhatsApp.',
  image: '/demos/antumalen-restaurant/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/* Las flechas del poste de madera en la puerta, tal cual dice el letrero real. */
const LETRERO = ['Sandwiches', 'Completos', 'Pizza', 'Sushi', 'Papas fritas', 'Bebidas y más']

const CARTA = [
  {
    grupo: 'Para compartir',
    items: [
      { name: 'Chorrillana (2 personas)', price: '$7.500' },
      { name: 'Chorrillana mechada', price: '$9.000' },
    ],
  },
  {
    grupo: 'Sushi',
    items: [
      { name: 'Nori, sésamo y ciboulette · 10 piezas', price: '$2.500' },
      { name: 'Nori, sésamo y ciboulette · 30 piezas', price: '$6.000' },
      { name: 'Nori, sésamo y ciboulette · 50 piezas', price: '$9.500' },
      { name: 'Tempura · 10 piezas', price: '$3.000' },
      { name: 'Tempura · 30 piezas', price: '$7.000' },
      { name: 'Tempura · 50 piezas', price: '$11.000' },
    ],
  },
  {
    grupo: 'Al plato',
    items: [
      { name: 'Mechada o milanesa con papas o ensalada', price: '$4.500' },
      { name: 'Ensalada Antümalen', price: '$3.500' },
    ],
  },
  {
    grupo: 'Desayunos',
    items: [{ name: 'Desayuno completo', price: '$2.500 – $3.000' }],
  },
] as const

const PLATOS = [
  {
    src: 'chorrillana',
    alt: 'Chorrillana de Antümalen con papas fritas, carne y huevo',
    name: 'La chorrillana de la casa',
    price: '$7.500',
  },
  {
    src: 'mechada',
    alt: 'Plato de mechada con papas fritas y huevos fritos servido en Antümalen',
    name: 'Mechada con papas',
    price: '$4.500',
  },
] as const

const RESENAS = [
  {
    text: 'Excelente lugar acogedor en San Clemente: precios bajos, rica comida y atención cordial, con segundo nivel. Buenos menús para servir o llevar.',
    author: 'M.A.U.H.',
  },
  {
    text: 'Ricas fajitas, pizzas y sandwich. Muy buenos sus completos, 100% recomendable.',
    author: 'F.V.',
  },
  {
    text: 'Rica la comida, como si fuera de casa. Las pizzas exquisitas.',
    author: 'E.R. y C.O.',
  },
] as const

const HORAS = [
  { days: 'Lunes a sábado', time: '9:30 – 20:30' },
  { days: 'Domingo', time: '9:30 – 15:30' },
] as const

/** Flecha de señal de madera, como la que marca la entrada del local. */
function Flecha({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3 v18" />
      <path d="M4 7 h12 l4 2.5 -4 2.5 H4 Z" fill={color} stroke="none" />
      <path d="M20 14 H8 l-3.5 2.2 L8 18.4 h12" fill="none" />
    </svg>
  )
}

/** Una tabla del letrero: flecha de madera con el nombre tallado. */
function Tabla({ texto, index }: { texto: string; index: number }) {
  return (
    <li
      className="relative pl-7 py-2.5 pr-6"
      style={{
        width: `${88 - index * 4}%`,
        background: `linear-gradient(180deg, #7d4f24 0%, ${C.wood} 60%, #5c3517 100%)`,
        clipPath: 'polygon(0 0, calc(100% - 22px) 0, 100% 50%, calc(100% - 22px) 100%, 0 100%)',
        transform: `rotate(${index % 2 === 0 ? -1 : 1.2}deg)`,
        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
      }}
    >
      {/* clavo de la tabla */}
      <span
        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)', boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.25)' }}
        aria-hidden="true"
      />
      <span
        className={`${display.className} font-black text-base md:text-lg uppercase tracking-[0.08em]`}
        style={{ color: '#FBEED3', textShadow: '0 1px 0 rgba(0,0,0,0.45)' }}
      >
        {texto}
      </span>
    </li>
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-extrabold text-balance"
      style={{ color: color ?? (light ? '#F5C14E' : C.terracotta) }}
    >
      <Flecha className="w-[18px] h-[18px]" />
      {children}
    </p>
  )
}

export default function AntumalenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: 'rgba(35,21,8,0.94)',
          ink: '#FBF3E6',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.mustard,
          btnInk: '#231508',
        }}
      />

      {/* ── Hero a sangre: la fachada amarilla de la ruta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Fachada de Antümalen Restaurant en Ruta 115, San Clemente, con su letrero amarillo"
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(35,21,8,0.66) 0%, rgba(35,21,8,0.4) 42%, rgba(35,21,8,0.93) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-extrabold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(255,252,246,0.95)', color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.terracotta} className="w-[14px] h-[14px]" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <Reveal>
            <Eyebrow light>Restaurant · a la entrada de San Clemente</Eyebrow>
            <h1
              className={`${display.className} scroll-mt-28 font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,9vw,5.4rem)] mb-6`}
              style={{ color: '#FFFCF6' }}
            >
              Comida casera,
              <br />
              <span className="italic" style={{ color: '#F5C14E' }}>como en la casa.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,252,246,0.9)' }}>
              En Ruta 115, a la entrada de San Clemente: chorrillanas,
              sushi, desayunos y platos de fondo a precio de barrio,
              con segundo nivel climatizado y delivery.
            </p>
            <ul className="flex flex-wrap gap-2.5 mb-9" aria-label="Especialidades">
              {['Chorrillanas', 'Sushi', 'Desayunos', 'Para servir o llevar'].map((chip) => (
                <li
                  key={chip}
                  className="text-xs md:text-sm font-bold px-4 py-2 rounded-full"
                  style={{ backgroundColor: 'rgba(255,252,246,0.14)', color: '#FFFCF6', border: '1px solid rgba(255,252,246,0.3)' }}
                >
                  {chip}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.mustard, color: '#231508' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(255,252,246,0.55)', color: '#FFFCF6' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(255,252,246,0.22)', backgroundColor: 'rgba(35,21,8,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(255,252,246,0.92)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#F5C14E' }} aria-hidden="true" />
              Segundo nivel climatizado
            </span>
            <span>Delivery en San Clemente</span>
            <span className="hidden md:inline" style={{ color: '#F5C14E' }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── El letrero de la puerta: flechas de madera, tal cual ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F3E8D4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Eyebrow color="#9C3A16">El letrero de la puerta</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Lo que hay,
              <br />
              <span className="italic" style={{ color: C.terracotta }}>dicho en madera</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: '#6A5B49' }}>
              Junto a la puerta, un poste de madera con flechas anuncia la
              carta de la casa. Esto dice, palabra por palabra — y cada
              flecha apunta a algo que sale de la cocina todos los días.
            </p>
            <p className="text-sm leading-relaxed max-w-md font-bold" style={{ color: C.ink }}>
              Además de la carta: menús para servir en el local o para
              llevar, y delivery dentro de San Clemente.
            </p>
          </Reveal>
          <Reveal delay={140}>
            {/* El poste con las tablas, como el letrero real */}
            <div className="relative max-w-[340px] mx-auto pl-5">
              <div
                className="absolute left-0 top-0 bottom-0 w-[10px] rounded-full"
                style={{ background: 'linear-gradient(90deg, #59351a, #7d4f24)' }}
                aria-hidden="true"
              />
              <ul className="relative space-y-3.5 py-2">
                {LETRERO.map((texto, i) => (
                  <Tabla key={texto} texto={texto} index={i} />
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La carta</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Precios de casa,
              <br />
              <span className="italic" style={{ color: C.terracotta }}>sabor de verdad</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Estos son los precios reales de la carta del local. Además:
              fajitas, pizzas, completos y sandwiches caseros.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-start">
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {CARTA.map((grupo, gi) => (
              <Reveal key={grupo.grupo} delay={gi * 90}>
                <div
                  className="rounded-2xl border p-6 md:p-7 h-full"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 8px rgba(42,27,16,0.05)' }}
                >
                  <h3 className={`${display.className} font-black text-lg md:text-xl mb-4 flex items-center gap-2.5`} style={{ color: C.terracotta }}>
                    <Flecha className="w-4 h-4 shrink-0" />
                    {grupo.grupo}
                  </h3>
                  <ul className="space-y-3">
                    {grupo.items.map((item) => (
                      <li key={item.name} className="flex items-baseline gap-2 text-sm md:text-[15px]">
                        <span style={{ color: C.ink }}>{item.name}</span>
                        <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: 'rgba(42,27,16,0.3)' }} aria-hidden="true" />
                        <span className={`${display.className} font-black whitespace-nowrap`} style={{ color: C.ink }}>
                          {item.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={140}>
            <figure className="rounded-2xl overflow-hidden border rotate-[1.2deg]" style={{ borderColor: C.line, boxShadow: '0 20px 50px rgba(42,27,16,0.18)' }}>
              <img
                src={`${IMG}/carta.webp`}
                alt="Carta de Antümalen con sushi, tempura, chorrillanas y platos con sus precios"
                className="w-full object-cover aspect-[3/4]"
              />
              <figcaption className="px-5 py-4 text-xs leading-relaxed" style={{ backgroundColor: C.deep, color: 'rgba(255,252,246,0.85)' }}>
                La carta del local, tal cual. Los precios pueden variar:
                confirma el tuyo por WhatsApp al pedir.
              </figcaption>
            </figure>
          </Reveal>
        </div>
        {/* Los platos, con foto real */}
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 mt-10 md:mt-14">
          {PLATOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 120}>
              <figure className="relative rounded-2xl overflow-hidden group" style={{ boxShadow: '0 16px 40px rgba(42,27,16,0.16)' }}>
                <img
                  src={`${IMG}/${p.src}.webp`}
                  alt={p.alt}
                  className="w-full object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-5 py-3.5" style={{ background: 'linear-gradient(180deg, rgba(35,21,8,0) 0%, rgba(35,21,8,0.88) 45%)' }}>
                  <span className={`${display.className} font-black text-base md:text-lg`} style={{ color: '#FFFCF6' }}>
                    {p.name}
                  </span>
                  <span className={`${display.className} font-black text-base px-3 py-1 rounded-full`} style={{ backgroundColor: C.mustard, color: '#231508' }}>
                    {p.price}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El local: dos pisos ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
            <Reveal>
              <Eyebrow light>El local</Eyebrow>
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#FFFCF6' }}>
                La escalera sube
                <br />
                <span className="italic" style={{ color: '#F5C14E' }}>al segundo nivel</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,252,246,0.88)' }}>
                Un restaurant acogedor a la entrada de San Clemente, con
                segundo nivel climatizado para comer tranquilo en verano
                y en invierno.
              </p>
              <ul className="space-y-3.5 mb-4">
                {[
                  'Segundo nivel climatizado para almorzar sin calor ni frío',
                  'Delivery dentro de San Clemente',
                  'Menús para servir en el local o para llevar',
                  'Desayunos desde las 9:30',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm md:text-base" style={{ color: 'rgba(255,252,246,0.94)' }}>
                    <Flecha className="w-4 h-4 shrink-0 mt-1" color="#F5C14E" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-block font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44 mt-6`}
                style={{ backgroundColor: C.mustard, color: '#231508' }}
              >
                Reservar mesa
              </a>
            </Reveal>
            <Reveal delay={120}>
              <figure className="rounded-2xl overflow-hidden" style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                <img
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada de Antümalen con la escalera de madera que sube al segundo nivel climatizado"
                  className="w-full object-cover aspect-[16/10]"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
            <Reveal delay={80}>
              <figure className="rounded-2xl overflow-hidden h-full">
                <img
                  src={`${IMG}/salon2.webp`}
                  alt="Salón del segundo nivel de Antümalen con mesas, aire acondicionado y decoración rústica"
                  className="w-full h-full object-cover aspect-[16/10]"
                  loading="lazy"
                />
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <figure className="rounded-2xl overflow-hidden h-full">
                <img
                  src={`${IMG}/salon.webp`}
                  alt="Salón interior de Antümalen con mesas y decoración cálida"
                  className="w-full h-full object-cover aspect-[16/10]"
                  loading="lazy"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-8 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className={`${display.className} font-black text-3xl md:text-4xl leading-tight mb-4`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              <span className="italic" style={{ color: C.terracotta }}>los que ya comieron</span>
            </h2>
            <div className="flex items-center gap-3 mb-5">
              <Stars value={BIZ.rating} color={C.terracotta} className="w-5 h-5" />
              <span className={`${display.className} font-black text-2xl`} style={{ color: C.ink }}>
                {BIZ.rating}
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
              Google. Estas son reseñas reales de clientes.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-extrabold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.terracotta, textDecorationColor: 'rgba(184,68,29,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={120 + i * 110}>
                <figure
                  className="rounded-2xl p-6 md:p-7 border"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 8px rgba(42,27,16,0.05)' }}
                >
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-extrabold" style={{ color: C.terracotta }}>
                      {r.author} · Reseña de Google
                    </span>
                    <Stars value={5} color={C.mustard} className="w-3.5 h-3.5" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: '#F3E8D4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow color="#9C3A16">Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              En la ruta,
              <br />
              <span className="italic" style={{ color: C.terracotta }}>con letrero amarillo</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: '#6A5B49' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-extrabold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(42,27,16,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: '#6A5B49' }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.terracotta} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-extrabold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.terracotta, color: '#FFFCF6' }}
              >
                Cómo llegar →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 rounded-full border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(42,27,16,0.35)', color: C.ink }}
              >
                Pedir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage: `url(${IMG}/salon2.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Flecha className="w-9 h-9 mx-auto mb-6" color="#F5C14E" />
            <h2 className={`${display.className} font-black text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`} style={{ color: '#FFFCF6' }}>
              Hoy almuerza bien
              <br />
              <span className="italic" style={{ color: '#F5C14E' }}>sin gastar de más</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(255,252,246,0.9)' }}>
              Escríbenos por WhatsApp para pedir, reservar mesa o
              consultar el menú del día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.mustard, color: '#231508' }}
            >
              Pedir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#FFFCF6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-black text-2xl mb-2 flex items-center gap-3`}>
              <Flecha className="w-5 h-5" color="#F5C14E" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,252,246,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,252,246,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,252,246,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,252,246,0.75)' }}>
            Datos de contacto, horarios, precios y reseñas reales de la
            ficha de Google y la carta del local. Los textos de venta son
            de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
