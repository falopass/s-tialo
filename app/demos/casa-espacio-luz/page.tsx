import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_VISITA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  tinta: '#171A14',
  crema: '#F6F1E7',
  oliva: '#46503A',
  salvia: '#8E9C74',
  ambar: '#C98A4B',
  arcilla: '#A8543F',
  line: 'rgba(23,26,20,0.16)',
  lineCrema: 'rgba(246,241,231,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'casa-espacio-luz',
  title: 'Casa Espacio Luz · Casa de eventos en Chillán',
  description:
    'Bodas, conciertos y eventos de empresa en Camino a Cato, Km. 1, Chillán: salón, terraza techada y jardín. 4,8 en Google. Cotiza por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Espacios', href: '#espacios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const MOMENTOS = [
  {
    t: 'Bodas y matrimonios',
    d: 'Ceremonia, banquete y fiesta en un solo recorrido: jardín, salón y terraza conectados.',
    img: `${IMG}/mesa.webp`,
    alt: 'Detalle de mesa de evento con menú impreso, velas y flores en Casa Espacio Luz',
  },
  {
    t: 'Conciertos y cultura',
    d: 'Por la casa pasan ciclos de música como los conciertos Candlelight, a la luz de las velas.',
    img: `${IMG}/bar.webp`,
    alt: 'Barra de Casa Espacio Luz con lámparas colgantes',
  },
  {
    t: 'Empresas y encuentros',
    d: 'Cenas, reuniones y celebraciones de equipo con los espacios de la casa a disposición.',
    img: `${IMG}/arte.webp`,
    alt: 'Mural de flamencos en una pared de Casa Espacio Luz',
  },
]

const REVIEWS = [
  {
    name: 'Milagros Díaz',
    text: 'Me encantó, tiene todo lo necesario para un gran evento. En mi opinión, el mejor de Chillán.',
  },
  {
    name: 'Angie',
    text: 'Es un espacio lindo, con pequeños restaurantes muy bien decorados, cada uno con su propio estilo.',
  },
]

const GALERIA = [
  { img: `${IMG}/terraza.webp`, w: 1200, h: 800, alt: 'Terraza techada de Casa Espacio Luz con el jardín alrededor' },
  { img: `${IMG}/lounge.webp`, w: 1200, h: 800, alt: 'Living de Casa Espacio Luz con sillones rojos y estanterías' },
  { img: `${IMG}/bar.webp`, w: 1200, h: 800, alt: 'Barra iluminada de Casa Espacio Luz' },
  { img: `${IMG}/arte.webp`, w: 675, h: 1200, alt: 'Mural de flamencos de Casa Espacio Luz', arco: true },
  { img: `${IMG}/mesa.webp`, w: 800, h: 1200, alt: 'Mesa de evento con menú y velas en Casa Espacio Luz' },
  { img: `${IMG}/jardin.webp`, w: 1200, h: 674, alt: 'Fachada y jardín de Casa Espacio Luz al atardecer' },
]

// Motivo de la casa: el arco de sus ventanales
function Arco({
  color = 'currentColor',
  className = 'w-6 h-6',
  strokeWidth = 1.5,
}: {
  color?: string
  className?: string
  strokeWidth?: number
}) {
  return (
    <svg viewBox="0 0 40 44" className={className} fill="none" aria-hidden="true">
      <path d="M4 42 V20 a16 16 0 0 1 32 0 V42" stroke={color} strokeWidth={strokeWidth} />
      <path d="M20 4 V42" stroke={color} strokeWidth={strokeWidth * 0.6} opacity="0.55" />
    </svg>
  )
}

function NumArco({ n, color }: { n: string; color: string }) {
  return (
    <span
      className="inline-flex items-center justify-center text-[11px] font-semibold tracking-[0.18em]"
      style={{
        color,
        border: `1px solid ${color}`,
        borderRadius: '999px 999px 0 0',
        padding: '11px 13px 7px',
        minWidth: '46px',
      }}
    >
      {n}
    </span>
  )
}

function Kicker({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] font-semibold tracking-[0.34em] uppercase"
      style={{ color }}
    >
      <span className="block w-7 h-px" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CasaEspacioLuzPage() {
  return (
    <main
      className={`${body.variable} ${display.variable} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.crema, color: C.tinta, fontFamily: 'var(--font-body)', ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="text-[16px] tracking-[0.1em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Cotizar"
        logoSrc={`${IMG}/logo.jpg`}
        theme={{
          over: 'dark',
          bar: 'rgba(23,26,20,0.94)',
          ink: C.crema,
          line: C.lineCrema,
          btnBg: C.ambar,
          btnInk: C.tinta,
        }}
      />

      {/* ── HERO ─────────────────────────────────────────── */}
      <header id="inicio" className="relative min-h-[100svh] flex flex-col" style={{ backgroundColor: C.tinta }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Mesa larga de evento con velas, flores y copas en Casa Espacio Luz"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,26,20,0.55) 0%, rgba(23,26,20,0.3) 42%, rgba(23,26,20,0.88) 100%)',
          }}
        />
        <div className="relative z-10 flex-1 flex items-end">
          <div className="max-w-6xl mx-auto px-5 md:px-8 w-full pt-32 pb-14 md:pb-20">
            <p className="text-[11px] font-semibold tracking-[0.4em] uppercase" style={{ color: C.ambar }}>
              Chillán · Ñuble
            </p>
            <h1
              className="mt-4 max-w-3xl text-[40px] md:text-[72px] leading-[1.03]"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 420, color: C.crema }}
            >
              Una casa para los días{' '}
              <em className="italic" style={{ color: C.ambar }}>
                que se recuerdan.
              </em>
            </h1>
            <p className="mt-5 max-w-lg text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.85)' }}>
              Bodas, conciertos y encuentros de empresa en {BIZ.address}. Salón,
              terraza techada y jardín en un mismo lugar.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full active:scale-95 transition-transform"
                style={{ backgroundColor: C.ambar, color: C.tinta }}
              >
                Cotizar mi evento
              </a>
              <a
                href="#espacios"
                className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full border active:scale-95 transition-transform"
                style={{ borderColor: 'rgba(246,241,231,0.5)', color: C.crema }}
              >
                Ver los espacios
              </a>
            </div>
            <p className="mt-5 inline-flex items-center gap-2 text-[12px]" style={{ color: 'rgba(246,241,231,0.8)' }}>
              <Stars value={4.8} color={C.ambar} className="w-3.5 h-3.5" />
              4,8 en Google · 23 opiniones
            </p>
          </div>
        </div>
      </header>

      {/* ── MANIFIESTO ───────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <Arco
          color={C.salvia}
          className="absolute -right-10 md:right-10 top-1/2 -translate-y-1/2 w-[220px] h-[242px] md:w-[320px] md:h-[352px] opacity-[0.16] pointer-events-none"
          strokeWidth={1}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
          <Reveal>
            <figure
              className="w-[140px] md:w-[180px] p-2.5"
              style={{ border: `1px solid ${C.line}`, borderRadius: '999px 999px 6px 6px' }}
            >
              <div className="relative aspect-square overflow-hidden" style={{ borderRadius: '999px 999px 3px 3px' }}>
                <Image
                  src={`${IMG}/logo.jpg`}
                  alt="Monograma CL, logo de Casa Espacio Luz"
                  fill
                  className="object-cover"
                  sizes="180px"
                />
              </div>
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <Kicker color={C.arcilla}>La casa</Kicker>
            <h2
              className="mt-4 text-[32px] md:text-[52px] leading-[1.05] max-w-xl"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}
            >
              No es un salón. <em className="italic" style={{ color: C.oliva }}>Es una casa.</em>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] md:text-[16px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.75)' }}>
              Casa Espacio Luz nació para reunir a la gente alrededor de una mesa
              larga, una luz cálida y un jardín que cambia con la estación. Cada
              rincón está pensado para que la celebración se sienta propia.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── ESPACIOS ─────────────────────────────────────── */}
      <section id="espacios" className="scroll-mt-20 pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b pb-6" style={{ borderColor: C.line }}>
              <div>
                <Kicker color={C.arcilla}>Los espacios</Kicker>
                <h2 className="mt-4 text-[32px] md:text-[52px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                  Cuatro ambientes, <em className="italic" style={{ color: C.oliva }}>un recorrido.</em>
                </h2>
              </div>
              <p className="max-w-xs text-[13px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.6)' }}>
                Del brindis en el jardín a la última vuelta en la pista del salón,
                la fiesta no tiene que moverse.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 01 · El salón: foto a sangre */}
        <Reveal>
          <figure className="relative mt-10 md:mt-14 h-[300px] md:h-[500px]">
            <Image
              src={`${IMG}/salon.webp`}
              alt="Salón de Casa Espacio Luz con luces colgantes y mesas preparadas"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </figure>
        </Reveal>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal delay={80}>
            <div className="mt-7 md:mt-9 md:flex md:items-end md:justify-between md:gap-10">
              <div className="flex items-center gap-5">
                <NumArco n="01" color={C.arcilla} />
                <h3 className="text-[26px] md:text-[38px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                  El salón
                </h3>
              </div>
              <p className="mt-4 md:mt-0 max-w-md text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.72)' }}>
                Mesas largas, luces colgantes y espacio para las celebraciones grandes.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 02 · La terraza: dos columnas */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <NumArco n="02" color={C.arcilla} />
              <h3 className="mt-5 text-[26px] md:text-[38px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                La terraza techada
              </h3>
              <p className="mt-4 max-w-md text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.72)' }}>
                Cubierta y abierta al jardín. Se usa todo el año, con lluvia o con sol.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <figure className="relative aspect-[4/3] overflow-hidden rounded-[4px]">
              <Image
                src={`${IMG}/terraza.webp`}
                alt="Terraza techada de Casa Espacio Luz rodeada de jardín"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </figure>
          </Reveal>
        </div>

        {/* 03 · El jardín: foto recortada en arco */}
        <div className="mt-16 md:mt-24 max-w-xl mx-auto px-5 text-center">
          <Reveal>
            <figure className="relative aspect-[3/4] overflow-hidden" style={{ borderRadius: '999px 999px 4px 4px' }}>
              <Image
                src={`${IMG}/jardin.webp`}
                alt="Fachada de piedra y jardín de Casa Espacio Luz al atardecer"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 36rem"
              />
            </figure>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-7 flex flex-col items-center">
              <NumArco n="03" color={C.arcilla} />
              <h3 className="mt-5 text-[26px] md:text-[38px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                El jardín
              </h3>
              <p className="mt-4 max-w-md text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.72)' }}>
                La fachada de piedra, los árboles y el cielo de Ñuble como telón de fondo.
              </p>
            </div>
          </Reveal>
        </div>

        {/* 04 · La casa de los novios: foto alta, texto al pie */}
        <div className="mt-16 md:mt-24 max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-end">
          <Reveal>
            <figure className="relative aspect-[3/4] overflow-hidden rounded-[4px]">
              <Image
                src={`${IMG}/suite.webp`}
                alt="Dormitorio de la casa de los novios en Casa Espacio Luz"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <div className="pb-1 md:pb-6">
              <NumArco n="04" color={C.arcilla} />
              <h3 className="mt-5 text-[26px] md:text-[38px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                La casa de los novios
              </h3>
              <p className="mt-4 max-w-md text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.72)' }}>
                Un espacio aparte para prepararse, descansar y bajar el ritmo antes del brindis.
              </p>
              <a
                href={WA_LINK_VISITA}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-5 inline-block text-[12px] font-semibold tracking-[0.18em] uppercase underline underline-offset-4"
                style={{ color: C.arcilla }}
              >
                Ven a conocerla
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── MOMENTOS ─────────────────────────────────────── */}
      <section id="momentos" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.oliva, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Kicker color={C.ambar}>Momentos</Kicker>
            <h2 className="mt-4 text-[32px] md:text-[52px] leading-[1.05] max-w-2xl" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
              Las fiestas que pasan <em className="italic" style={{ color: C.ambar }}>por la casa.</em>
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5 md:gap-6">
            {MOMENTOS.map((m, i) => (
              <Reveal key={m.t} delay={i * 90}>
                <article
                  className="h-full rounded-[6px] border p-3 pb-6 flex flex-col"
                  style={{ borderColor: C.lineCrema, backgroundColor: 'rgba(246,241,231,0.05)' }}
                >
                  <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '999px 999px 4px 4px' }}>
                    <Image src={m.img} alt={m.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <h3 className="mt-5 px-2 text-[22px] md:text-[24px] leading-[1.1]" style={{ fontFamily: 'var(--font-display)', fontWeight: 450 }}>
                    {m.t}
                  </h3>
                  <p className="mt-3 px-2 text-[13px] md:text-[14px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.75)' }}>
                    {m.d}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALERÍA ──────────────────────────────────────── */}
      <section id="galeria" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Kicker color={C.arcilla}>Galería</Kicker>
                <h2 className="mt-4 text-[32px] md:text-[52px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                  La casa, <em className="italic" style={{ color: C.oliva }}>rincón por rincón.</em>
                </h2>
              </div>
              <p className="text-[12px] tracking-[0.16em] uppercase" style={{ color: 'rgba(23,26,20,0.68)' }}>
                Fotos reales del recinto
              </p>
            </div>
          </Reveal>
          <div className="mt-10 columns-2 md:columns-3 gap-4 md:gap-5">
            {GALERIA.map((g, i) => (
              <Reveal key={g.img + i} delay={i * 60} className="mb-4 md:mb-5 break-inside-avoid">
                <figure
                  className="relative overflow-hidden"
                  style={{ borderRadius: g.arco ? '999px 999px 4px 4px' : '4px' }}
                >
                  <Image
                    src={g.img}
                    alt={g.alt}
                    width={g.w}
                    height={g.h}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPINIONES ────────────────────────────────────── */}
      <section id="opiniones" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <Kicker color={C.ambar}>Opiniones</Kicker>
              <span className="inline-flex items-center gap-2 text-[13px]" style={{ color: 'rgba(246,241,231,0.8)' }}>
                <Stars value={4.8} color={C.ambar} className="w-4 h-4" />
                4,8 · 23 opiniones en Google
              </span>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-8 md:gap-14">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 100}>
                <figure className="border-t pt-7" style={{ borderColor: C.lineCrema }}>
                  <blockquote
                    className="text-[22px] md:text-[28px] leading-[1.25] italic"
                    style={{ fontFamily: 'var(--font-display)', fontWeight: 400 }}
                  >
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3">
                    <span
                      className="inline-flex items-center justify-center w-9 h-9 text-[12px] font-bold"
                      style={{ backgroundColor: C.ambar, color: C.tinta, borderRadius: '999px 999px 0 0' }}
                      aria-hidden="true"
                    >
                      {r.name[0]}
                    </span>
                    <span className="text-[12px] tracking-[0.16em] uppercase" style={{ color: 'rgba(246,241,231,0.7)' }}>
                      {r.name} · Google
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className="mt-10 text-[12px] tracking-[0.14em] uppercase" style={{ color: 'rgba(246,241,231,0.55)' }}>
              Opiniones reales publicadas en Google.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ────────────────────────────────────── */}
      <section id="ubicacion" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <div>
              <Kicker color={C.arcilla}>Ubicación</Kicker>
              <h2 className="mt-4 text-[32px] md:text-[44px] leading-[1.05]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
                {BIZ.address}, <em className="italic" style={{ color: C.oliva }}>{BIZ.city}.</em>
              </h2>
              <p className="mt-5 max-w-md text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(23,26,20,0.72)' }}>
                La referencia es simple: {BIZ.address}, {BIZ.city}, {BIZ.region}.
                El mapa te deja en la entrada.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_VISITA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-6 text-[15px] font-semibold rounded-full active:scale-95 transition-transform"
                  style={{ backgroundColor: C.oliva, color: C.crema }}
                >
                  Agendar una visita
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center h-12 px-2 text-[12px] font-semibold tracking-[0.16em] uppercase underline underline-offset-4"
                  style={{ color: C.arcilla }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="relative overflow-hidden h-[300px] md:h-auto md:min-h-[380px] border"
              style={{ borderColor: C.line, borderRadius: '999px 999px 6px 6px' }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.fullName}, ${BIZ.city}`}
                className="absolute inset-0 block w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CIERRE ───────────────────────────────────────── */}
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: C.tinta, color: C.crema }}>
        <Arco
          color={C.ambar}
          className="absolute left-1/2 -translate-x-1/2 -bottom-24 w-[300px] h-[330px] md:w-[420px] md:h-[462px] opacity-[0.14] pointer-events-none"
          strokeWidth={1}
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center">
          <Reveal>
            <Arco color={C.ambar} className="w-10 h-11 mx-auto" />
            <h2 className="mt-6 text-[36px] md:text-[64px] leading-[1.03]" style={{ fontFamily: 'var(--font-display)', fontWeight: 420 }}>
              ¿Ponemos <em className="italic" style={{ color: C.ambar }}>fecha?</em>
            </h2>
            <p className="mt-5 max-w-md mx-auto text-[15px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.78)' }}>
              Cuéntanos qué celebras y cuántos son: el equipo de la casa responde
              por WhatsApp con la propuesta.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center h-12 px-7 text-[15px] font-semibold rounded-full active:scale-95 transition-transform"
                style={{ backgroundColor: C.ambar, color: C.tinta }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="tap-44 inline-flex items-center h-12 px-2 text-[15px] font-semibold tracking-[0.06em]"
                style={{ color: C.crema }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.tinta, borderTop: `1px solid ${C.lineCrema}`, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-3">
          <p className="text-[18px] tracking-[0.08em] uppercase" style={{ fontFamily: 'var(--font-display)' }}>
            {BIZ.name}
          </p>
          <p className="text-[13px]" style={{ color: 'rgba(246,241,231,0.7)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} ·{' '}
            <a
              href={BIZ.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 tap-44"
              style={{ color: 'rgba(246,241,231,0.85)' }}
            >
              Instagram
            </a>
          </p>
          <p className="text-[11px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.6)' }}>
            Página de muestra de Sitiazo: los datos de contacto y las fotos son reales;
            los textos se ajustan con el negocio.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.fullName} por WhatsApp`} />
    </main>
  )
}
