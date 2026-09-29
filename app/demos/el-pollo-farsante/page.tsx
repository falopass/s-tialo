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
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

const C = {
  paper: '#FBF3DC',
  paperHi: '#FFF9EA',
  ink: '#1A140E',
  muted: '#5C5142',
  red: '#C92A1E',
  sky: '#376E9F',
  yellow: '#F2C230',
  line: '#1A140E',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-pollo-farsante',
  title: 'El Pollo Farsante — el restaurante de Pelotillehue en Cumpeo',
  description:
    'Restaurant temático de Condorito en Cumpeo, Río Claro: pollo al horno de barro, cazuelas y la carta de la casa. 4,2 estrellas en Google. Pide por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La historia', href: '#historia' },
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const MARQUEE = [
  'Pollo al horno de barro',
  'Cazuela de vacuno',
  'Porotos granados',
  'Humitas con tomate',
  'Pescado frito',
  'Leche asada',
  'Ensaladas de la casa',
]

/* Carta real transcrita de la pizarra impresa del local (foto de la ficha) */
const CARTA = [
  { plato: 'Pollo arvejado', servir: '$5.000', llevar: '$5.200' },
  { plato: 'Guatitas a la primavera', servir: '$5.000', llevar: '$5.200' },
  { plato: 'Porotos granados', servir: '$5.000', llevar: '$5.200' },
  { plato: 'Cazuela de vacuno', servir: '$5.000', llevar: '$5.200' },
  { plato: '1/4 pollo asado', servir: '$5.500', llevar: '$5.700' },
  { plato: '2 humitas + tomate', servir: '$5.500', llevar: '$5.700' },
  { plato: 'Costillar al horno', servir: '$6.500', llevar: '$6.700' },
  { plato: 'Pollo mariscal', servir: '$6.500', llevar: '$6.700' },
  { plato: 'Pescado frito', servir: '$7.000', llevar: '$7.200' },
  { plato: 'Mechada + agregado', servir: '$7.000', llevar: '$7.200' },
  { plato: 'Bistec + agregado', servir: '$7.000', llevar: '$7.200' },
  { plato: 'Mechada a lo pobre', servir: '$7.500', llevar: '$7.700' },
  { plato: 'Bistec a lo pobre', servir: '$7.500', llevar: '$7.700' },
]

const RESENAS = [
  {
    nombre: 'Ivonne Campos',
    fecha: 'Hace un año',
    estrellas: 5,
    texto:
      'Es un lugar único, completamente tematizado de Condorito. Lindo lugar, muy tranquilo y bien atendido al estilo antiguo. Puedes sacar fotografías a los personajes y con ellos; me encantó por lo sencillo y acogedor.',
  },
  {
    nombre: 'Marianela Daza',
    fecha: 'Hace 4 años',
    estrellas: 5,
    texto:
      'Excelente lugar. Rica comida. Muy amable su atención. Está por la entrada de la carretera hacia Cumpeo.',
  },
  {
    nombre: 'Marcelo Aceituno',
    fecha: 'Hace 4 años',
    estrellas: 5,
    texto:
      'El menú del día muy bueno: ensalada, plato de fondo y gaseosa. Mesas al aire libre con sombra. El pollo de lujo.',
  },
  {
    nombre: 'Andrea Gaudino',
    fecha: 'Hace 3 años',
    estrellas: 5,
    texto:
      'Excelente lugar para almorzar y descansar cuando vas camino al sur. Buen precio. El pollo exquisito.',
  },
]

/* Rótulo de capítulo de cómic */
function Cap({ n, titulo, dark = false }: { n: string; titulo: string; dark?: boolean }) {
  return (
    <div className="flex items-center gap-4 mb-8 md:mb-10">
      <span
        className={`${mono.className} shrink-0 inline-flex items-center font-semibold text-xs md:text-sm px-3 py-1.5 border-[3px]`}
        style={{
          borderColor: dark ? C.paper : C.ink,
          backgroundColor: dark ? C.red : C.yellow,
          color: dark ? C.paper : C.ink,
          boxShadow: `4px 4px 0 ${dark ? 'rgba(251,243,220,0.35)' : C.ink}`,
        }}
      >
        {n}
      </span>
      <h2
        className={`${display.className} uppercase leading-none tracking-wide text-[clamp(1.9rem,6vw,3.4rem)]`}
        style={{ color: dark ? C.paper : C.ink }}
      >
        {titulo}
      </h2>
    </div>
  )
}

/* Estrellita de cómic "¡PLOP!" en CSS (clip-path), no una foto */
function Plop({ texto, className = '' }: { texto: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`inline-flex items-center justify-center ${className}`}
      style={{
        backgroundColor: C.red,
        clipPath:
          'polygon(50% 0%, 60% 18%, 82% 8%, 78% 30%, 100% 32%, 84% 46%, 96% 66%, 74% 62%, 72% 86%, 56% 68%, 40% 88%, 40% 64%, 16% 74%, 24% 52%, 4% 40%, 24% 32%, 18% 10%, 40% 18%)',
      }}
    >
      <span className={`${display.className} uppercase tracking-wide px-8 py-6 text-lg md:text-xl`} style={{ color: C.paperHi }}>
        {texto}
      </span>
    </div>
  )
}

/* Globo de diálogo para reseñas */
function Globo({ children }: { children: React.ReactNode }) {
  return (
    <figure
      className="relative h-full border-[3px] rounded-2xl rounded-bl-none p-5 md:p-6 flex flex-col"
      style={{ borderColor: C.ink, backgroundColor: C.paperHi, boxShadow: `5px 5px 0 ${C.ink}` }}
    >
      {children}
    </figure>
  )
}

export default function ElPolloFarsantePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes epf-marq { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .epf-marq { animation: epf-marq 32s linear infinite }
        .epf-btn { transition: transform .18s ease, filter .18s ease, box-shadow .18s ease; }
        .epf-btn:hover { transform: translate(-1px,-2px); filter: brightness(1.04); box-shadow: 6px 6px 0 ${C.ink}; }
        .epf-btn:active { transform: scale(.97); }
        .epf-btn:focus-visible { outline: 3px solid ${C.sky}; outline-offset: 3px; }
        .epf-halftone { background-image: radial-gradient(${C.ink} 1.3px, transparent 1.3px); background-size: 14px 14px; }
        @media (prefers-reduced-motion: reduce) { .epf-marq { animation: none } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-wide`}>Pollo Farsante</span>}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: 'rgba(26,20,14,0.95)',
          ink: C.paper,
          line: 'rgba(251,243,220,0.2)',
          btnBg: C.red,
          btnInk: C.paper,
        }}
      />

      {/* ── Portada del cómic: el tótem de la ruta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="El tótem pintado de El Pollo Farsante a la entrada del restaurante en Cumpeo, con el pollo de chaqueta roja y lentes"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(26,20,14,0.55) 0%, rgba(26,20,14,0.2) 40%, rgba(26,20,14,0.92) 100%)' }}
        />
        {/* ¡PLOP! flotante */}
        <div className="absolute top-24 right-4 md:top-28 md:right-10 rotate-12">
          <Reveal delay={250}>
            <Plop texto="¡Plop!" />
          </Reveal>
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pb-9 md:pb-12 pt-28">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.yellow }}>
              {BIZ.rubro} · {BIZ.city} · {BIZ.region}
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.92] text-[clamp(3.2rem,12vw,8.5rem)] mb-5`}
              style={{ color: C.paperHi }}
            >
              El Pollo
              <br />
              <span style={{ color: C.red, WebkitTextStroke: `2px ${C.paperHi}` }}>Farsante</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: 'rgba(251,243,220,0.9)' }}>
              El restaurante de Pelotillehue existe y está en Cumpeo:
              pollo al horno de barro, murales de Condorito y mesa servida
              a la entrada de la Ruta K-31.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} epf-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-[3px] tap-44`}
                style={{ backgroundColor: C.red, color: C.paperHi, borderColor: C.ink, boxShadow: `4px 4px 0 ${C.ink}` }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} epf-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-[3px] tap-44`}
                style={{ borderColor: 'rgba(251,243,220,0.6)', color: C.paperHi, backgroundColor: 'rgba(26,20,14,0.45)', boxShadow: `4px 4px 0 rgba(26,20,14,0.6)` }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative border-t-[3px]" style={{ borderColor: 'rgba(251,243,220,0.25)', backgroundColor: 'rgba(26,20,14,0.85)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs`} style={{ color: 'rgba(251,243,220,0.85)' }}>
            <span className="inline-flex items-center gap-2">
              <Stars value={BIZ.rating} color={C.yellow} className="w-3.5 h-3.5" />
              {BIZ.rating} en Google · {BIZ.reviews} opiniones
            </span>
            <span>{BIZ.address}</span>
            <span className="hidden sm:inline">Ruta de Condorito</span>
            <span className="hidden md:inline" style={{ color: C.yellow }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de viñeta: platos en rotación ── */}
      <div className="overflow-hidden py-2.5 border-y-[3px]" style={{ backgroundColor: C.yellow, borderColor: C.ink }} aria-hidden="true">
        <div className="epf-marq flex w-max items-center">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center">
              {MARQUEE.map((t) => (
                <span
                  key={`${copy}-${t}`}
                  className={`${display.className} uppercase tracking-[0.08em] text-base md:text-lg px-5 flex items-center gap-5 whitespace-nowrap`}
                  style={{ color: C.ink }}
                >
                  {t}
                  <svg viewBox="0 0 24 24" className="w-2.5 h-2.5" fill={C.red} aria-hidden="true">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── CAP. 1 · La historia de Pelotillehue ── */}
      <section id="historia" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Cap n="CAP. 1" titulo="La picada de Pelotillehue" />
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="md:col-span-5">
            <figure
              className="relative overflow-hidden border-[3px] aspect-[3/4]"
              style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.ink}` }}
            >
              <Image
                src={`${IMG}/totem.webp`}
                alt="El tótem de El Pollo Farsante: el pollo con chaqueta roja, corbatín azul y lentes oscuros haciendo la seña de pulgar arriba"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
              El tótem de la ruta — foto real
            </p>
          </Reveal>
          <div className="md:col-span-7">
            <Reveal delay={90}>
              <h3 className={`${display.className} uppercase leading-[0.98] text-3xl md:text-5xl mb-5`}>
                Cumpeo se volvió
                <br />
                <span style={{ color: C.red }}>pueblo de historieta</span>
              </h3>
            </Reveal>
            <Reveal delay={140}>
              <div className="space-y-4 text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.muted }}>
                <p>
                  El año 2010 la comuna de Río Claro propuso convertir
                  Cumpeo en Pelotillehue: el pueblo de Condorito, hecho
                  realidad. Andrés Silva levantó su restaurante en la ruta
                  y lo bautizó como la picada de la revista — hasta la
                  propia historieta lo caricaturizó junto al alcalde.
                </p>
                <p>
                  Adentro, el horno de barro manda: el plato de la casa es
                  el pollo farsante, asado de a poco y acompañado con
                  mariscos, arroz y ensaladas. Afuera, los murales y el
                  tótem paran a los que pasan camino a Cumpeo.
                </p>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <figure
                className="relative overflow-hidden border-[3px] mt-7 aspect-[16/10]"
                style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.ink}` }}
              >
                <Image
                  src={`${IMG}/condorito.webp`}
                  alt="El personaje de Condorito visitando el salón del restaurante entre mesas y comensales"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </figure>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-3`} style={{ color: C.muted }}>
                Condorito pasando por el salón — foto real
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Faja de medio tono + mural ── */}
      <section aria-label="Mural de la fachada con Yayita y el globo ¡PLOP!" className="relative">
        <div className="epf-halftone h-4 opacity-25" />
        <Reveal>
          <div className="relative h-[46vh] md:h-[62vh] overflow-hidden border-y-[3px]" style={{ borderColor: C.ink }}>
            <Image
              src={`${IMG}/mural.webp`}
              alt="Mural pintado en la fachada de madera: Yayita y el letrero ¡PLOP! del restaurante"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <div className="epf-halftone h-4 opacity-25" />
      </section>

      {/* ── CAP. 2 · La carta real de la pizarra ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Cap n="CAP. 2" titulo="La pizarra de la casa" dark />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="md:col-span-7">
              <div className="border-[3px] overflow-hidden" style={{ borderColor: C.paper, backgroundColor: C.paper }}>
                <div
                  className={`${display.className} uppercase tracking-wide text-lg md:text-xl px-5 py-3 border-b-[3px] flex items-baseline justify-between`}
                  style={{ borderColor: C.ink, backgroundColor: C.red, color: C.paperHi }}
                >
                  <span>Menú del día</span>
                  <span className={`${mono.className} text-[10px] md:text-xs tracking-[0.14em]`}>servir · llevar</span>
                </div>
                <ul>
                  {CARTA.map((c) => (
                    <li
                      key={c.plato}
                      className="flex items-baseline gap-3 px-5 py-2.5 border-b"
                      style={{ borderColor: 'rgba(26,20,14,0.14)' }}
                    >
                      <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>{c.plato}</span>
                      <span className="flex-1 border-b-2 border-dotted translate-y-[-3px]" style={{ borderColor: 'rgba(26,20,14,0.3)' }} aria-hidden="true" />
                      <span className={`${mono.className} text-xs md:text-sm whitespace-nowrap`} style={{ color: C.ink }}>
                        {c.servir} <span style={{ color: C.muted }}>/</span> {c.llevar}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className={`${mono.className} px-5 py-3 text-[10px] md:text-xs uppercase tracking-[0.14em]`} style={{ backgroundColor: C.paperHi, color: C.muted }}>
                  Agregados: arroz · puré · papas fritas · tallarines — 2° agregado +$500 · Postre: leche asada $1.800
                </div>
              </div>
              <p className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.16em] mt-4`} style={{ color: 'rgba(251,243,220,0.7)' }}>
                Carta transcrita de la pizarra del local — precios reales publicados
              </p>
            </Reveal>
            <div className="md:col-span-5 space-y-5">
              <Reveal delay={90}>
                <figure className="relative overflow-hidden border-[3px] aspect-[4/5]" style={{ borderColor: C.paper }}>
                  <Image
                    src={`${IMG}/carta.webp`}
                    alt="La pizarra impresa del restaurante con la carta y los precios escritos a mano"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </figure>
                <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(251,243,220,0.6)' }}>
                  La pizarra, tal cual cuelga en el comedor
                </p>
              </Reveal>
              <Reveal delay={150}>
                <div className="border-[3px] p-5" style={{ borderColor: C.yellow, backgroundColor: 'rgba(242,194,48,0.12)' }}>
                  <p className={`${display.className} uppercase tracking-wide text-lg md:text-xl mb-1.5`} style={{ color: C.yellow }}>
                    El plato insignia
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,243,220,0.85)' }}>
                    El «pollo farsante»: pollo asado en horno de barro con
                    mariscos, arroz y ensaladas. En la entrada, la pizarra
                    anuncia el horno de barro con agregado, ensalada y
                    bebida a $10.000.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Terraza y salón en tríptico ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" aria-label="El local por dentro y por fuera">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          <Reveal>
            <figure className="relative overflow-hidden border-[3px] aspect-[4/5]" style={{ borderColor: C.ink, boxShadow: `5px 5px 0 ${C.ink}` }}>
              <Image
                src={`${IMG}/terraza.webp`}
                alt="Terraza del restaurante con mesas verdes, sombra y un mural de personaje"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>La terraza</p>
          </Reveal>
          <Reveal delay={90}>
            <figure className="relative overflow-hidden border-[3px] aspect-[4/5]" style={{ borderColor: C.ink, boxShadow: `5px 5px 0 ${C.ink}` }}>
              <Image
                src={`${IMG}/salon.webp`}
                alt="Comedor interior de El Pollo Farsante con mesas de madera y paredes ilustradas"
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>El salón</p>
          </Reveal>
          <Reveal delay={150} className="col-span-2 md:col-span-1">
            <figure className="relative overflow-hidden border-[3px] aspect-[4/5]" style={{ borderColor: C.ink, boxShadow: `5px 5px 0 ${C.ink}` }}>
              <Image
                src={`${IMG}/plato.webp`}
                alt="Bandeja con empanadas y preparaciones de la cocina del Pollo Farsante"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>De la cocina</p>
          </Reveal>
        </div>
      </section>

      {/* ── CAP. 3 · Reseñas en globos ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <Cap n="CAP. 3" titulo="Lo que dicen los lectores" />
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 80}>
              <Globo>
                <Stars value={r.estrellas} color={C.red} className="w-3.5 h-3.5" />
                <blockquote className="text-sm md:text-base leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.ink }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.14em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                  <span style={{ color: C.ink }}>{r.nombre}</span>
                  <span className="shrink-0">{r.fecha} · Google</span>
                </figcaption>
              </Globo>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-block mt-7 text-sm md:text-base uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.red, textDecorationColor: 'rgba(214,43,31,0.4)' }}
          >
            Ver las {BIZ.reviews} opiniones en Google →
          </a>
        </Reveal>
      </section>

      {/* ── CAP. 4 · Cómo llegar ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.sky }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Cap n="CAP. 4" titulo="Km 7,5 de la K-31" dark />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="min-w-0">
              <Reveal>
                <address className="not-italic mb-6">
                  <p className={`${display.className} uppercase leading-tight text-2xl md:text-4xl mb-2`} style={{ color: C.paperHi }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base" style={{ color: C.paperHi }}>
                    Camino a Cumpeo · {BIZ.city}, {BIZ.region}
                  </p>
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className={`${mono.className} inline-block text-sm md:text-base mt-3 underline underline-offset-4 decoration-2 tap-44`}
                    style={{ color: C.paperHi, textDecorationColor: 'rgba(242,194,48,0.6)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <p className={`${mono.className} text-[11px] md:text-xs mt-3 uppercase tracking-[0.14em]`} style={{ color: C.paperHi }}>
                    Instagram {BIZ.igUser}
                  </p>
                </address>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} epf-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-[3px] tap-44`}
                    style={{ backgroundColor: C.yellow, color: C.ink, borderColor: C.ink, boxShadow: `4px 4px 0 ${C.ink}` }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} epf-btn uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-[3px] tap-44`}
                    style={{ borderColor: C.paperHi, color: C.paperHi, backgroundColor: 'rgba(26,20,14,0.35)', boxShadow: `4px 4px 0 rgba(26,20,14,0.5)` }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="relative overflow-hidden border-[3px] min-h-[300px] md:aspect-[4/3]" style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.ink}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.paperHi }}>
                A la entrada de Cumpeo — busca el tótem del pollo
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer: viñeta de cierre ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(251,243,220,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(251,243,220,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(251,243,220,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas, la carta y las fotos son
            los reales de la ficha de Google y del local.{' '}
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
