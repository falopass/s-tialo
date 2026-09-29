import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: '../../fonts/baloo-2/normal-400-800.woff2',
  weight: '400 800',
})
const body = localFont({
  src: '../../fonts/mulish/normal-200-1000.woff2',
  weight: '200 1000',
  variable: '--font-body',
})

// Paleta del logo real: la cabaña dibujada con bandas de doodles de
// pastelería — tinta, celeste polvo, rosado y verde salvia — más el
// frambuesa de las tortas de vitrina y el papel crema de las blondas.
const C = {
  paper: '#FBF3E6',
  white: '#FFFFFF',
  ink: '#2B1B12',
  inkSoft: '#3D2A1E',
  frambuesa: '#B9375A',
  blue: '#7E9FB5',
  blueDeep: '#3F5E72',
  pink: '#DE95A0',
  sage: '#A9BC8B',
  muted: '#6F5B4B',
  line: 'rgba(43,27,18,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-mi-cabana',
  title: 'Pastelería Mi Cabaña — Tortas y pan en 5 Poniente, Talca',
  description:
    'Pastelería y panadería de barrio en 5 Poniente esquina 31 Sur, Talca. 4.6 estrellas en Google con 172 reseñas. Tortas por encargo y pan todos los días, domingos incluidos.',
  image: `${IMG}/vitrina.webp`,
})

/** Las cuatro bandas de colores del logo de la casa, como divisor. */
function Bands() {
  return (
    <div aria-hidden="true" className="w-full">
      {[C.ink, C.blue, C.pink, C.sage].map((c) => (
        <div key={c} className="h-[5px]" style={{ backgroundColor: c }} />
      ))}
    </div>
  )
}

/**
 * Borde de blonda de papel: media luna festoneada que cuelga de un borde
 * superior sólido. Para que se vea, el color debe ser el de la sección
 * que EMPIEZA (los festones asoman sobre el fondo de la anterior).
 */
function Doily({ color, className = '' }: { color: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`w-full h-[16px] ${className}`}
      style={{
        backgroundImage: `radial-gradient(circle at 13px -6px, ${color} 15px, transparent 15.5px)`,
        backgroundSize: '26px 16px',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

/** Etiqueta de repisa: el número de estante de la vitrina. */
function RepisaTag({ n, label, dark = false }: { n: string; label: string; dark?: boolean }) {
  return (
    <p
      className="font-mono text-[11px] md:text-xs uppercase tracking-[0.26em] flex items-center gap-3"
      style={{ color: dark ? 'rgba(251,243,230,0.72)' : C.frambuesa }}
    >
      <span aria-hidden="true">◈</span> repisa nº {n} — {label}
    </p>
  )
}

const VITRINA = [
  {
    src: `${IMG}/torta-frutas.webp`,
    alt: 'Torta de frutas de Mi Cabaña con duraznos, frambuesas y piña sobre blonda',
    tag: 'torta de frutas, sobre blonda',
  },
  {
    src: `${IMG}/torta-chocolate.webp`,
    alt: 'Torta de chocolate con borde de rosetones de manjar',
    tag: 'chocolate con rosetones',
  },
  {
    src: `${IMG}/trozo.webp`,
    alt: 'Trozo de torta de mil hojas con manjar servido en plato',
    tag: 'el trozo que se lleva en la mano',
  },
  {
    src: `${IMG}/pasteles.webp`,
    alt: 'Pasteles individuales surtidos en la vitrina refrigerada',
    tag: 'pasteles de vitrina',
  },
]

const PAN = [
  { item: 'Marraqueta', note: '«la marraqueta es buena»' },
  { item: 'Hallullas', note: 'delgadas, las nombran igual' },
  { item: 'Pan francés', note: '«extraordinario», dice un vecino' },
  { item: 'Rosquillas azucaradas', note: 'la bandeja de la foto' },
  { item: 'Queques y roscas', note: 'los que se repiten en reseñas' },
  { item: 'Bollería', note: '«rico el pan y la bollería»' },
]

const ENCARGOS = [
  {
    src: `${IMG}/torta-revelacion.webp`,
    alt: 'Torta de revelación de género azul y rosa con huellas Boy or Girl',
    tag: 'revelación: ¿boy or girl?',
  },
  {
    src: `${IMG}/bandeja.webp`,
    alt: 'Bandeja de mini pasteles surtidos para evento, preparados por Mi Cabaña',
    tag: 'bandejas para la once y eventos',
  },
]

const RESENAS = [
  {
    name: 'L. F.',
    stars: 5,
    text: 'Muy rica la torta tres leches.',
  },
  {
    name: 'F. M.',
    stars: 5,
    text: 'Pan siempre caliente y muy rico.',
  },
  {
    name: 'J.',
    stars: 5,
    text: 'Rico el pan y bollería, recomendable 100%, además que abren los domingos.',
  },
  {
    name: 'P. B. R.',
    stars: 5,
    text: 'Muy rico el pan. Y le tienen un rinconcito a los peques mientras uno compra.',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: '8:00–14:00 · 17:00–21:00' },
  { days: 'Domingo', time: '10:00–14:00 · 17:00–21:00' },
]

const TIRA = [
  'tres leches',
  'marraqueta',
  'rosquillas',
  'trasnochada',
  'pie de limón',
  'panqueque maracuyá',
  'queques',
  'pan francés',
  'pasteles de vitrina',
  'tortas por encargo',
]

export default function MiCabanaPage() {
  return (
    <div
      className={`${body.className} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        @keyframes mc-zoom { from { transform: scale(1.07); } to { transform: scale(1); } }
        @keyframes mc-tira { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mc-hero-img { animation: mc-zoom 7s cubic-bezier(0.22,0.6,0.3,1) both; }
        .mc-tira { animation: mc-tira 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .mc-hero-img, .mc-tira { animation: none; } }
      `}</style>

      {/* ── Barra ── */}
      <header
        className="fixed top-0 inset-x-0 z-40"
        style={{
          backgroundColor: 'rgba(251,243,230,0.9)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: `1px solid ${C.line}`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[58px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 tap-44 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="w-9 h-9 shrink-0 rounded-full object-cover ring-1 ring-black/10 bg-white"
              aria-hidden="true"
            />
            <span className={`${display.className} text-lg font-extrabold leading-none truncate`}>
              Mi Cabaña
            </span>
          </a>
          <nav
            className="hidden md:flex items-center gap-7 font-mono text-[11px] uppercase tracking-[0.2em]"
            aria-label="Principal"
          >
            <a href="#vitrina" className="tap-44 hover:text-[#B9375A] transition-colors" style={{ color: C.inkSoft }}>
              La vitrina
            </a>
            <a href="#pan" className="tap-44 hover:text-[#B9375A] transition-colors" style={{ color: C.inkSoft }}>
              El pan
            </a>
            <a href="#encargos" className="tap-44 hover:text-[#B9375A] transition-colors" style={{ color: C.inkSoft }}>
              Encargos
            </a>
            <a href="#esquina" className="tap-44 hover:text-[#B9375A] transition-colors" style={{ color: C.inkSoft }}>
              La esquina
            </a>
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold px-4 py-2 rounded-full tap-44 transition-transform active:scale-95"
            style={{ backgroundColor: C.frambuesa, color: C.white }}
          >
            Encargar
          </a>
        </div>
      </header>

      {/* ── Hero: la vitrina del local ── */}
      <section id="inicio" className="relative">
        <div className="relative h-[78vh] min-h-[540px] overflow-hidden" style={{ backgroundColor: C.ink }}>
          <div className="absolute inset-0 mc-hero-img">
            <Image
              src={`${IMG}/vitrina.webp`}
              alt="Vitrina refrigerada de Mi Cabaña repleta de tortas decoradas"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(43,27,18,0.52) 0%, rgba(43,27,18,0.28) 40%, rgba(43,27,18,0.92) 64%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-12">
              <Reveal>
                <p
                  className="font-mono text-[11px] md:text-xs uppercase tracking-[0.28em] mb-4"
                  style={{ color: '#F0B8BF', textShadow: '0 1px 12px rgba(0,0,0,0.75)' }}
                >
                  Pastelería · Panadería · 5 Poniente esq. 31 Sur
                </p>
                <h1
                  className={`${display.className} font-extrabold leading-[0.95] tracking-[-0.01em] text-[clamp(2.8rem,11vw,7rem)]`}
                  style={{ color: C.paper, textShadow: '0 2px 26px rgba(0,0,0,0.55)' }}
                >
                  Mi Cabaña
                </h1>
                <p
                  className="mt-3 text-base md:text-xl max-w-xl leading-relaxed"
                  style={{ color: 'rgba(251,243,230,0.92)' }}
                >
                  Tortas, pasteles y pan caliente en la esquina de
                  5 Poniente. Abiertos hasta los domingos.
                </p>
                <div className="mt-5 flex items-center gap-3">
                  <Stars value={BIZ.rating} color="#F0B85C" className="w-4 h-4" />
                  <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(251,243,230,0.9)' }}>
                    {String(BIZ.rating).replace('.', ',')} en Google · {BIZ.reviews} reseñas
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-bold px-6 py-3 rounded-full tap-44 transition-transform active:scale-95"
                    style={{ backgroundColor: C.frambuesa, color: C.white }}
                  >
                    Encargar una torta
                  </a>
                  <a
                    href="#vitrina"
                    className="text-sm md:text-base font-bold px-6 py-3 rounded-full border-2 tap-44 transition-colors hover:bg-white/10"
                    style={{ borderColor: 'rgba(251,243,230,0.7)', color: C.paper }}
                  >
                    Ver la vitrina
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tira de vitrina: lo que nombran los clientes ── */}
      <div
        className="overflow-hidden pb-3 -mt-[16px] relative z-10"
        style={{ backgroundColor: C.frambuesa }}
        aria-hidden="true"
      >
        <Doily color={C.frambuesa} className="mb-2" />
        <div className="mc-tira flex whitespace-nowrap" style={{ width: 'max-content' }}>
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {TIRA.map((t) => (
                <span
                  key={`${half}-${t}`}
                  className="font-mono text-[11px] md:text-xs uppercase tracking-[0.22em] px-5"
                  style={{ color: 'rgba(255,255,255,0.92)' }}
                >
                  {t} <span className="ml-5" style={{ color: 'rgba(255,255,255,0.55)' }}>✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Repisa 1: la vitrina ── */}
      <section id="vitrina" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <RepisaTag n="1" label="tortas y pasteles" />
          <div className="mt-3 flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[0.98]`}>
              La vitrina que se ve
              <br />
              <span style={{ color: C.frambuesa }}>desde la vereda</span>
            </h2>
            <p className="text-sm md:text-base max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Tortas listas para llevar y pasteles de a uno. Las fotos son de su
              propia vitrina, publicadas en su ficha de Google.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {VITRINA.map((f, i) => (
            <Reveal key={f.src} delay={i * 80}>
              <figure className="h-full p-2 pb-0 rounded-sm" style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}>
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                  />
                </div>
                <figcaption
                  className="py-2.5 px-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] truncate"
                  style={{ color: C.muted }}
                >
                  {f.tag}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Repisa 2: el pan ── */}
      <section id="pan" className="scroll-mt-16" style={{ backgroundColor: C.ink, color: C.paper }}>
        <Bands />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1.1fr_1fr] gap-8 md:gap-14 items-center">
          <div>
            <Reveal>
              <RepisaTag n="2" label="el pan de cada día" dark />
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[0.98] mt-3`}>
                Pan caliente
                <br />
                <span style={{ color: C.sage }}>mañana y tarde</span>
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(251,243,230,0.85)' }}>
                Abierto en la mañana y en la tarde, domingos incluidos. Esto
                es lo que los vecinos nombran una y otra vez en sus reseñas:
              </p>
            </Reveal>

            {/* Ticket de panadería */}
            <Reveal delay={120}>
              <div
                className="mt-7 max-w-md p-5 rounded-sm shadow-lg -rotate-1"
                style={{ backgroundColor: C.paper, color: C.ink }}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-center" style={{ color: C.muted }}>
                  — panadería mi cabaña · hoy —
                </p>
                <ul className="mt-3">
                  {PAN.map((p) => (
                    <li
                      key={p.item}
                      className="flex items-baseline justify-between gap-3 py-2 border-t border-dashed first:border-t-0"
                      style={{ borderColor: 'rgba(43,27,18,0.3)' }}
                    >
                      <span className="text-sm md:text-base font-bold">{p.item}</span>
                      <span className="font-mono text-[10px] md:text-[11px] text-right" style={{ color: C.muted }}>
                        {p.note}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-center" style={{ color: C.muted }}>
                  pagos con tarjeta · precios en vitrina
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <figure className="p-2 pb-0 rounded-sm" style={{ backgroundColor: C.paper }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${IMG}/rosquillas.webp`}
                  alt="Bandeja de rosquillas azucaradas recién hechas en Mi Cabaña"
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption
                className="py-2.5 px-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em]"
                style={{ color: C.muted }}
              >
                rosquillas recién pasadas por azúcar
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Repisa 3: encargos ── */}
      <section id="encargos" className="scroll-mt-16 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <RepisaTag n="3" label="por encargo" />
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[0.98] mt-3`}>
              El cumpleaños se
              <br />
              <span style={{ color: C.frambuesa }}>encarga antes</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              Tortas de cumpleaños y para eventos hechas a pedido, y bandejas
              de mini pasteles para la once. Los encargos se coordinan por
              WhatsApp o directo en el mostrador.
            </p>
            <div className="mt-7">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm md:text-base font-bold px-6 py-3 rounded-full tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.ink, color: C.paper }}
              >
                Cotizar mi torta →
              </a>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {ENCARGOS.map((f, i) => (
              <Reveal key={f.src} delay={120 + i * 90} className={i === 0 ? 'mt-8' : ''}>
                <figure className="p-2 pb-0 rounded-sm" style={{ backgroundColor: C.white, border: `1px solid ${C.line}` }}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 24vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                    />
                  </div>
                  <figcaption
                    className="py-2.5 px-1 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.14em]"
                    style={{ color: C.muted }}
                  >
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="scroll-mt-16" style={{ backgroundColor: C.pink }}>
        <Doily color={C.pink} className="-mt-[16px] relative z-10" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-8">
              <Stars value={BIZ.rating} color={C.ink} className="w-5 h-5" />
              <p className="font-mono text-xs md:text-sm uppercase tracking-[0.18em]" style={{ color: C.ink }}>
                {String(BIZ.rating).replace('.', ',')} en Google · {BIZ.reviews} reseñas
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(43,27,18,0.25)' }}>
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80}>
                <figure className="h-full p-5 flex flex-col" style={{ backgroundColor: C.paper }}>
                  <Stars value={r.stars} color={C.frambuesa} className="w-3.5 h-3.5" />
                  <blockquote className="mt-3 text-sm md:text-[15px] leading-relaxed flex-1">
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                    {r.name} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La esquina ── */}
      <section id="esquina" className="scroll-mt-16" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <RepisaTag n="4" label="la esquina" />
            <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[0.98] mt-3`}>
              5 Poniente
              <br />
              <span style={{ color: C.blueDeep }}>esquina 31 Sur</span>
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city}. Entrada accesible para sillas de
              ruedas. Encarga por WhatsApp y retira en el mostrador.
            </p>
            <ul className="mt-6 space-y-2.5">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base font-bold">
                  <span className="w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: C.frambuesa }} aria-hidden="true" />
                  {h.days}
                  <span className="font-mono text-xs md:text-sm font-normal" style={{ color: C.muted }}>
                    {h.time}
                  </span>
                </li>
              ))}
              <li className="flex items-center gap-3 text-sm md:text-base font-bold">
                <span className="w-2 h-2 shrink-0 rounded-full" style={{ backgroundColor: C.sage }} aria-hidden="true" />
                Abren los domingos
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-6 py-3 rounded-full tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.frambuesa, color: C.white }}
              >
                Encargar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-6 py-3 rounded-full border-2 tap-44 transition-colors hover:bg-black/5"
                style={{ borderColor: 'rgba(43,27,18,0.5)', color: C.ink }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="min-h-[320px] h-full overflow-hidden rounded-sm"
              style={{ border: `3px solid ${C.ink}` }}
            >
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

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <Bands />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="w-9 h-9 rounded-full object-cover ring-1 ring-white/25 bg-white"
              aria-hidden="true"
            />
            <div>
              <p className={`${display.className} font-extrabold text-lg leading-none`} style={{ color: C.paper }}>
                Mi Cabaña
              </p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(251,243,230,0.65)' }}>
                {BIZ.address}, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                <a
                  href={BIZ.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-white tap-44"
                >
                  Facebook
                </a>
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: 'rgba(251,243,230,0.55)' }}>
            Mockup de Sitiazo: datos del local, horario, reseñas y fotos reales de su ficha de Google.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Encargar por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
