import type { Metadata } from 'next'
import { Unbounded, Onest } from 'next/font/google'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, WA_LINK_LLEVAR, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = Unbounded({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
})
const body = Onest({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

const C = {
  night: '#060D15',
  panel: '#0B1722',
  panelHi: '#0F2030',
  blue: '#1F5673',
  cyan: '#3CD9EC',
  cyanDeep: '#149DB4',
  ink: '#F2F7FA',
  muted: '#93A2B4',
  dim: '#6E7B8B',
  line: 'rgba(147,162,180,0.18)',
} as const

const NEON_TEXT = {
  color: C.cyan,
  textShadow: `0 0 6px rgba(60,217,236,0.85), 0 0 22px rgba(60,217,236,0.45), 0 0 60px rgba(20,157,180,0.55)`,
} as const

const NEON_BOX = {
  border: `1.5px solid rgba(60,217,236,0.75)`,
  boxShadow: `0 0 14px rgba(60,217,236,0.35), inset 0 0 14px rgba(60,217,236,0.10)`,
} as const

export const metadata: Metadata = {
  title: 'FORASTERO sabor en cada bocado — Restaurante en Pencahue',
  description:
    'Restaurante en Francisco de Villagra 704, Pencahue. Comida casera, porciones generosas y atención directa. Reserva o pide por WhatsApp.',
  robots: { index: false, follow: false },
}

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'La casa', href: '#la-casa' },
  { label: 'La carta', href: '#carta' },
  { label: 'Contacto', href: '#contacto' },
]

const FICHAS = [
  {
    num: '01',
    src: `${IMG}/detalle3.webp`,
    tag: 'clásico de la casa',
    name: 'Pastel de choclo en paila de greda',
    desc: 'Choclo molido con pino jugoso, gratinado al punto, servido en greda caliente con ensalada chilena y pan amasado.',
  },
  {
    num: '02',
    src: `${IMG}/detalle1.webp`,
    tag: 'hecho al día',
    name: 'Pebre y aliños del día',
    desc: 'Cada mañana se pica fresco: el pebre de ají, las verduras de la olla y los aliños de la cocina. Lo que llega a la mesa se preparó ese día.',
  },
  {
    num: '03',
    src: `${IMG}/detalle2.webp`,
    tag: 'a la vista',
    name: 'Cocina abierta al mesón',
    desc: 'Del fuego al plato sin intermediarios: la cocina queda a la vista, con ollas de cobre y la vajilla de greda lista para el servicio.',
  },
]

const CARTA = [
  {
    group: 'Platos de fondo',
    items: [
      { name: 'Pastel de choclo en paila', price: '$9.500' },
      { name: 'Cazuela de vacuno o ave', price: '$8.500' },
      { name: 'Plateada con puré y ensalada', price: '$10.500' },
      { name: 'Porotos granados', price: '$8.000' },
    ],
  },
  {
    group: 'Del día y para llevar',
    items: [
      { name: 'Menú del día (entrada + fondo + postre)', price: '$7.500' },
      { name: 'Sándwich de la casa', price: '$5.500' },
      { name: 'Empanada de horno', price: '$2.500' },
      { name: 'Jugo natural', price: '$2.000' },
    ],
  },
]

const TESTIMONIALS = [
  {
    text: 'Porciones de verdad y sabor de casa. El pastel de choclo llega aún hirviendo en la paila.',
    author: 'Cliente de Pencahue',
  },
  {
    text: 'Paramos de paso por la ruta y volvimos al día siguiente. Atención directa, sin vueltas.',
    author: 'Viajero de paso',
  },
  {
    text: 'Se nota que todo se hace ahí mismo, desde el pebre hasta el pan. Precios honestos.',
    author: 'Vecino del centro',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: 'Almuerzo y once–cena' },
  { days: 'Domingo', time: 'Solo almuerzo' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: C.cyan }}
    >
      <span
        className="inline-block w-8 h-[2px]"
        style={{ backgroundColor: C.cyan, boxShadow: `0 0 8px rgba(60,217,236,0.8)` }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** Divisor en línea de ruta: las trazas discontinuas del camino. */
function RoadLine() {
  return (
    <div
      className="h-[2px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, rgba(60,217,236,0.45) 0px, rgba(60,217,236,0.45) 26px, transparent 26px, transparent 44px)`,
      }}
      aria-hidden="true"
    />
  )
}

export default function ForasteroPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.night, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(6,13,21,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.cyan,
          btnInk: '#041019',
        }}
      />

      {/* ── Hero a sangre: el letrero de la ruta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.night }}>
        <img
          src={`${IMG}/hero.webp`}
          alt="Interior de FORASTERO: comedor de madera con cocina abierta al fuego y vista a los cerros del Maule"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'saturate(1.05) contrast(1.08) brightness(0.9)' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(6,13,21,0.86) 0%, rgba(6,13,21,0.62) 34%, rgba(6,13,21,0.88) 78%, #060D15 100%)',
          }}
        />
        {/* halo azul distribución */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 55% at 50% 42%, rgba(31,86,115,0.35) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
        {/* chips de datos */}
        <div className="absolute top-24 md:top-28 right-5 md:right-8 flex flex-col items-end gap-2.5">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full"
              style={{ backgroundColor: 'rgba(6,13,21,0.85)', color: C.ink, ...NEON_BOX }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill={C.cyan} stroke={C.cyan} strokeWidth="1.5" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 2.5 L14.9 8.6 L21.5 9.4 L16.6 14 L18 20.5 L12 17.2 L6 20.5 L7.4 14 L2.5 9.4 L9.1 8.6 Z" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
          <Reveal delay={90}>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-bold px-4 py-2.5 rounded-full"
              style={{ backgroundColor: 'rgba(6,13,21,0.85)', color: C.muted, border: `1px solid ${C.line}` }}
            >
              {BIZ.fbFollowers} seguidores en Facebook
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-40">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold" style={{ color: C.muted }}>
              Restaurante · Pencahue · Región del Maule
            </p>
            {/* letrero de neón */}
            <div className="inline-block rounded-2xl px-6 md:px-10 py-5 md:py-7 mb-7" style={NEON_BOX}>
              <h1
                className={`${display.className} font-extrabold leading-none tracking-[0.02em] text-[clamp(2.4rem,9vw,5.4rem)]`}
                style={NEON_TEXT}
              >
                FORASTERO
              </h1>
              <p
                className={`${display.className} text-sm md:text-lg tracking-[0.34em] uppercase mt-3 md:mt-4`}
                style={{ color: 'rgba(242,247,250,0.9)', textShadow: '0 0 18px rgba(60,217,236,0.5)' }}
              >
                sabor en cada bocado
              </p>
            </div>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(242,247,250,0.85)' }}>
              El restaurant del camino: comida casera, plato lleno y
              atención directa en Francisco de Villagra 704, Pencahue.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95`}
                style={{ backgroundColor: C.cyan, color: '#041019', boxShadow: '0 0 24px rgba(60,217,236,0.45)' }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-colors hover:bg-white/5`}
                style={{ border: '1.5px solid rgba(60,217,236,0.55)', color: C.cyan }}
              >
                Ver la carta
              </a>
              <span className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold ml-1" style={{ color: C.muted }}>
                <span className="inline-block w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: C.cyan, boxShadow: '0 0 10px rgba(60,217,236,0.9)' }} aria-hidden="true" />
                abierto hoy
              </span>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div className="relative" style={{ backgroundColor: 'rgba(6,13,21,0.72)', backdropFilter: 'blur(6px)' }}>
          <RoadLine />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: C.muted }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span>Porciones generosas</span>
            <span>Reserva y para llevar</span>
            <span className="hidden md:inline" style={{ color: C.cyan }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── La cocina: fichas numeradas ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>De la cocina a la mesa</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.12]`}>
              Platos que hacen
              <br />
              <span style={NEON_TEXT}>detener el viaje</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Una muestra de lo que sale del fuego. Al publicar van los
              platos y descripciones reales del restaurante.
            </p>
          </div>
        </Reveal>
        <ul className="space-y-5 md:space-y-6">
          {FICHAS.map((f, i) => (
            <Reveal key={f.num} delay={i * 90}>
              <li
                className="group grid md:grid-cols-[minmax(0,340px)_1fr] rounded-2xl overflow-hidden"
                style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
              >
                <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[240px]">
                  <img
                    src={f.src}
                    alt={f.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ filter: 'saturate(1.05) contrast(1.08)' }}
                  />
                  <span
                    className="absolute top-4 left-4 text-[11px] font-bold uppercase tracking-[0.2em] px-3.5 py-1.5 rounded-full"
                    style={{ backgroundColor: 'rgba(6,13,21,0.85)', color: C.cyan, ...NEON_BOX }}
                  >
                    {f.tag}
                  </span>
                </div>
                <div className="p-6 md:p-9 flex gap-5 md:gap-8 items-start">
                  <span
                    className={`${display.className} shrink-0 font-extrabold text-3xl md:text-5xl leading-none pt-1`}
                    style={{ color: 'transparent', WebkitTextStroke: `1.5px rgba(60,217,236,0.7)`, textShadow: '0 0 24px rgba(60,217,236,0.25)' }}
                    aria-hidden="true"
                  >
                    {f.num}
                  </span>
                  <div>
                    <h3 className={`${display.className} font-semibold text-lg md:text-2xl leading-snug mb-3`}>
                      {f.name}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed max-w-lg" style={{ color: C.muted }}>
                      {f.desc}
                    </p>
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={200}>
          <p className="text-xs md:text-sm mt-8 text-center" style={{ color: C.dim }}>
            Platos y descripciones de muestra — la carta real va al publicar el sitio.
          </p>
        </Reveal>
      </section>

      <RoadLine />

      {/* ── La casa: sobre el negocio ── */}
      <section id="la-casa" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="relative rounded-2xl overflow-hidden" style={{ ...NEON_BOX, transform: 'rotate(-1deg)' }}>
              <img
                src={`${IMG}/ambiente.webp`}
                alt="Terraza de FORASTERO con mesas de madera y vista a los cerros de Pencahue"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
                style={{ filter: 'saturate(1.05) contrast(1.08)' }}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 md:p-5 text-center transition-colors"
                style={{ backgroundColor: C.panelHi, border: `1px solid ${C.line}` }}
              >
                <p className={`${display.className} font-extrabold text-2xl md:text-3xl`} style={NEON_TEXT}>
                  {BIZ.reviews}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] mt-1.5" style={{ color: C.muted }}>
                  reseñas en Google
                </p>
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-4 md:p-5 text-center transition-colors"
                style={{ backgroundColor: C.panelHi, border: `1px solid ${C.line}` }}
              >
                <p className={`${display.className} font-extrabold text-2xl md:text-3xl`} style={NEON_TEXT}>
                  {BIZ.fbFollowers}
                </p>
                <p className="text-[11px] uppercase tracking-[0.16em] mt-1.5" style={{ color: C.muted }}>
                  seguidores en Facebook
                </p>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>La casa</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.15] mb-6`}>
              La casa del
              <br />
              <span style={NEON_TEXT}>forastero</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.name} está en {BIZ.address}, en pleno {BIZ.city}.
              Cocina de olla y de fuego, porciones que dejan satisfecho
              y una terraza para comer mirando los cerros del Maule.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8" style={{ color: C.muted }}>
              La atención es directa: quien te recibe en la mesa es la
              misma persona que responde el WhatsApp. Sin formularios
              ni esperas.
            </p>
            <ul className="space-y-3 mb-10">
              {['Comida casera servida en porciones generosas', 'Reserva de mesa y pedidos para llevar por WhatsApp', 'A pasos del centro de Pencahue'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base">
                  <span className="shrink-0 w-5 h-[2px]" style={{ backgroundColor: C.cyan, boxShadow: '0 0 8px rgba(60,217,236,0.8)' }} aria-hidden="true" />
                  <span style={{ color: 'rgba(242,247,250,0.9)' }}>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-6" style={{ color: C.dim }}>
              Los textos a continuación son de muestra: al publicar van
              las reseñas reales de la ficha de Google.
            </p>
            <div className="space-y-4">
              {TESTIMONIALS.map((t) => (
                <figure
                  key={t.author}
                  className="rounded-xl p-5 md:p-6"
                  style={{ backgroundColor: C.panelHi, border: `1px solid ${C.line}` }}
                >
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mb-3" style={{ color: 'rgba(242,247,250,0.9)' }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption className="text-[11px] uppercase tracking-[0.18em] font-semibold" style={{ color: C.cyan }}>
                    {t.author} · Reseña de ejemplo
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <RoadLine />

      {/* ── La carta: precios de referencia ── */}
      <section id="carta" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La carta</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold text-3xl md:text-5xl leading-[1.12]`}>
              Precios
              <br />
              <span style={NEON_TEXT}>de referencia</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Valores de muestra para dimensionar el sitio. La carta y
              los precios reales se confirman por WhatsApp.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="rounded-2xl overflow-hidden" style={{ backgroundColor: C.panel, ...NEON_BOX }}>
            {CARTA.map((g, gi) => (
              <div key={g.group} style={{ borderTop: gi > 0 ? `1px solid ${C.line}` : 'none' }}>
                <p
                  className={`${display.className} text-xs md:text-sm uppercase tracking-[0.28em] font-semibold px-6 md:px-8 pt-6 md:pt-7 pb-4`}
                  style={{ color: C.cyan }}
                >
                  {g.group}
                </p>
                <ul className="px-6 md:px-8 pb-6 md:pb-7 space-y-3.5">
                  {g.items.map((it) => (
                    <li key={it.name} className="flex items-baseline gap-3 text-sm md:text-base">
                      <span style={{ color: 'rgba(242,247,250,0.92)' }}>{it.name}</span>
                      <span
                        className="flex-1 -translate-y-1"
                        style={{ borderBottom: `2px dotted rgba(147,162,180,0.4)` }}
                        aria-hidden="true"
                      />
                      <span className={`${display.className} font-semibold whitespace-nowrap`} style={{ color: C.cyan }}>
                        {it.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={180}>
          <div className="flex flex-wrap items-center justify-between gap-4 mt-8">
            <p className="text-xs md:text-sm" style={{ color: C.dim }}>
              Carta y valores de muestra. Confirmamos plato del día y precios por WhatsApp.
            </p>
            <a
              href={WA_LINK_LLEVAR}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
              style={{ border: '1.5px solid rgba(60,217,236,0.55)', color: C.cyan }}
            >
              Preguntar por la carta →
            </a>
          </div>
        </Reveal>
      </section>

      <RoadLine />

      {/* ── Contacto: ubicación + WhatsApp ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-3xl md:text-4xl leading-[1.15] mb-6`}>
              Villagra 704,
              <br />
              <span style={NEON_TEXT}>Pencahue</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-7" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.cyan} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-semibold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs leading-relaxed mb-8 max-w-sm" style={{ color: C.dim }}>
              Horario referencial: al publicar van los horarios reales
              del restaurante.
            </p>
            {/* tarjeta WhatsApp */}
            <div className="rounded-2xl p-6 md:p-7" style={{ backgroundColor: C.panelHi, ...NEON_BOX }}>
              <p className="text-[11px] uppercase tracking-[0.24em] font-semibold mb-2" style={{ color: C.muted }}>
                Reserva o pide para llevar
              </p>
              <p className={`${display.className} font-extrabold text-xl md:text-2xl mb-5`} style={NEON_TEXT}>
                {BIZ.phoneDisplay}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-transform active:scale-95`}
                  style={{ backgroundColor: C.cyan, color: '#041019', boxShadow: '0 0 20px rgba(60,217,236,0.4)' }}
                >
                  Reservar mesa
                </a>
                <a
                  href={WA_LINK_LLEVAR}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-colors hover:bg-white/5`}
                  style={{ border: '1.5px solid rgba(60,217,236,0.55)', color: C.cyan }}
                >
                  Pedir para llevar
                </a>
              </div>
              <p className="text-xs mt-5" style={{ color: C.dim }}>
                También nos encuentras en{' '}
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.cyan }}>
                  Facebook
                </a>{' '}
                y en{' '}
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.cyan }}>
                  Google Maps
                </a>
                .
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[360px] h-full" style={{ border: `1px solid ${C.line}`, backgroundColor: C.panelHi }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ filter: 'invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.9)' }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.night }}>
        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage: `url(${IMG}/hero.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'saturate(1.05) contrast(1.1)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <div className="inline-block rounded-2xl px-8 md:px-14 py-7 md:py-9 mb-8" style={NEON_BOX}>
              <h2 className={`${display.className} font-extrabold text-[clamp(1.7rem,5.5vw,3.2rem)] leading-[1.1]`}>
                Se come mejor
                <br />
                <span style={NEON_TEXT}>donde para la ruta</span>
              </h2>
            </div>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(242,247,250,0.8)' }}>
              Escríbenos por WhatsApp para reservar mesa o encargar tu
              pedido para llevar. Respondemos el mismo día.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-semibold text-sm md:text-base px-8 py-4 rounded-full transition-transform active:scale-95`}
              style={{ backgroundColor: C.cyan, color: '#041019', boxShadow: '0 0 28px rgba(60,217,236,0.5)' }}
            >
              Escribir por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.night, color: C.ink }}>
        <RoadLine />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className={`${display.className} font-extrabold text-2xl mb-2`} style={NEON_TEXT}>
              FORASTERO
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.dim }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.muted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: `1px solid ${C.line}` }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs leading-relaxed" style={{ color: C.dim }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name}. Platos,
            precios, horarios y reseñas citadas son de muestra; el nombre,
            la dirección, el WhatsApp y los datos de redes son reales.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
