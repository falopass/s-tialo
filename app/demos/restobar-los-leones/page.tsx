import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' },
  ],
})

const C = {
  paper: '#FFFFFF',
  soft: '#F1F2F4',
  ink: '#141518',
  blue: '#2251FF',
  lime: '#C6F24E',
  muted: '#5D626B',
  line: 'rgba(20,21,24,0.14)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restobar-los-leones',
  title: 'Restobar Los Leones — Cocina casera y barra en Pelarco',
  description: 'Restobar en Pelarco, Región del Maule. Cocina casera, empanadas de horno y barra para la sobremesa. Reserva por WhatsApp.',
  image: '/demos/restobar-los-leones/hero.webp',
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'El local', href: '#local' },
  { label: 'La carta', href: '#precios' },
  { label: 'Ubicación', href: '#contacto' },
]

const MARQUEE = [
  'Menú del día',
  'Empanadas de horno',
  'Cazuela de vacuno',
  'Schop helado',
  'Pisco sour',
  'Chorrillana para dos',
  'Pebre y pan amasado',
]

const PLATES = [
  {
    src: `${IMG}/detalle3.webp`,
    name: 'Cazuelas y platos del día',
    desc: 'Cazuela de vacuno, legumbres de temporada y guisos de olla larga. La carta cambia según la semana y lo que hay fresco.',
  },
  {
    src: `${IMG}/detalle1.webp`,
    name: 'Del horno: empanadas y amasados',
    desc: 'Empanadas de pino y de queso, sopaipillas y pan amasado recién salido. Para comer aquí o llevar a la casa.',
  },
  {
    src: `${IMG}/detalle2.webp`,
    name: 'La barra',
    desc: 'Schop, vinos de la zona, pisco sour y los clásicos de siempre. La sobremesa se toma en serio.',
  },
]

const MENU = [
  { name: 'Menú del día (plato + ensalada + bebida)', price: '$7.500' },
  { name: 'Cazuela de vacuno', price: '$6.500' },
  { name: 'Empanada de horno (pino o queso)', price: '$2.000' },
  { name: 'Chorrillana para dos', price: '$12.000' },
  { name: 'Schop de la casa', price: '$3.000' },
  { name: 'Pisco sour', price: '$3.500' },
]

const TESTIMONIALS = [
  'Buena comida casera y porciones generosas. La cazuela y las empanadas son de lo mejor del sector.',
  'Local acogedor, atención directa de sus dueños y precios justos. Volvemos cada vez que pasamos por Pelarco.',
  'Ideal para almorzar en la semana y para la sobremesa del fin de semana. El ambiente es de barrio, sin lujos y con buena onda.',
]

function Issue({
  n,
  title,
  light = false,
}: {
  n: string
  title: string
  light?: boolean
}) {
  return (
    <div
      className="flex items-baseline gap-4 md:gap-6 mb-8 md:mb-12 border-b pb-4 md:pb-5"
      style={{ borderColor: light ? 'rgba(255,255,255,0.25)' : C.line }}
    >
      <span
        className={`${display.className} font-black text-[clamp(2.2rem,5vw,3.8rem)] leading-none`}
        style={{ color: light ? C.lime : C.blue }}
        aria-hidden="true"
      >
        {n}
      </span>
      <h2
        className={`${display.className} font-extrabold uppercase tracking-[-0.02em] text-[clamp(1.6rem,4vw,3rem)] leading-none`}
        style={{ color: light ? '#FFFFFF' : C.ink }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function RestobarLosLeonesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .ll-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .ll-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .ll-btn:active { transform: translateY(0) scale(0.97); }
        .ll-btn:focus-visible { outline: 3px solid ${C.blue}; outline-offset: 3px; }
        .ll-btn-dark:focus-visible { outline-color: ${C.lime}; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(255,255,255,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.blue,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero a sangre — portada de revista ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: '#0C0D10' }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior del restobar: mesas de madera y cocina abierta a leña"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,13,16,0.55) 0%, rgba(12,13,16,0.10) 45%, rgba(12,13,16,0.88) 100%)',
          }}
        />
        {/* cabecera de edición */}
        <div className="absolute top-[72px] md:top-[84px] inset-x-0">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div
                className={`${display.className} flex items-center justify-between gap-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.28em] pb-3 border-b`}
                style={{ color: 'rgba(255,255,255,0.85)', borderColor: 'rgba(255,255,255,0.35)' }}
              >
                <span>Restobar Los Leones</span>
                <span className="hidden sm:inline" style={{ color: C.lime }}>
                  Edición N° 01
                </span>
                <span>Pelarco · Maule</span>
              </div>
            </Reveal>
          </div>
        </div>
        {/* sello de reseñas */}
        <div className="absolute top-[120px] md:top-[136px] right-5 md:right-8">
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ll-btn ll-btn-dark flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg"
              style={{ backgroundColor: C.lime, color: C.ink }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                <circle cx="12" cy="10" r="2.4" />
              </svg>
              {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal delay={100}>
            <h1
              className={`${display.className} font-black uppercase leading-[0.95] tracking-[-0.03em] text-[clamp(3rem,9vw,8rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Donde Pelarco
              <br />
              se junta{' '}
              <span className="relative inline-block">
                <span
                  className="absolute inset-x-[-0.08em] top-[0.08em] bottom-[0.02em] -z-10"
                  style={{ backgroundColor: C.blue }}
                  aria-hidden="true"
                />
                a comer
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9 font-medium" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Cocina casera, empanadas recién salidas del horno y barra
              completa para la sobremesa. Restobar de atención directa
              en Pelarco, Región del Maule.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ll-btn ll-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5`}
                style={{ backgroundColor: C.lime, color: C.ink }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#precios"
                className={`${display.className} ll-btn ll-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 hover:bg-white/10`}
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div
          className="relative border-t"
          style={{
            borderColor: 'rgba(255,255,255,0.22)',
            backgroundColor: 'rgba(12,13,16,0.5)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold`}
            style={{ color: 'rgba(255,255,255,0.8)' }}
          >
            <span>Cocina casera</span>
            <span>Barra completa</span>
            <span>Pelarco, Región del Maule</span>
            <span className="hidden md:inline" style={{ color: C.lime }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Cinta de especialidades ── */}
      <div className="border-b py-3 md:py-4" style={{ backgroundColor: C.lime, borderColor: C.line }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-1.5 text-sm md:text-base font-extrabold uppercase tracking-[0.12em]`}
          style={{ color: C.ink }}
        >
          {MARQUEE.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3">{item}</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill={C.blue} aria-hidden="true">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── N° 01 · La cocina ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Issue n="N° 01" title="La cocina" />
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 mb-12 md:mb-16">
          <Reveal className="col-span-12 lg:col-span-5">
            <p className="text-base md:text-lg leading-relaxed font-medium" style={{ color: C.ink }}>
              Un restobar de pueblo no necesita discurso: necesita platos
              que lleguen calientes, porciones honestas y una barra que
              acompañe. Esta es una propuesta de muestra — la carta real
              se arma con el local al publicar.
            </p>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-4 lg:col-start-7" delay={120}>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              Cocina de mediodía en la semana y carta larga el fin de
              semana. Todo pensado para el vecino que almuerza seguido
              y para la familia que llega a celebrar.
            </p>
          </Reveal>
        </div>
        {/* grilla asimétrica de 12 columnas */}
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          <Reveal className="col-span-12 md:col-span-7">
            <li className="group h-full">
              <div className="relative overflow-hidden mb-4 aspect-[16/10]">
                <Image
                  src={PLATES[0].src}
                  alt="Cazuela de vacuno con papas, choclo y zapallo, con pebre y pan amasado"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start gap-4">
                <span
                  className={`${display.className} font-black text-3xl md:text-4xl leading-none pt-1`}
                  style={{ color: C.blue }}
                  aria-hidden="true"
                >
                  01
                </span>
                <div>
                  <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`}>
                    {PLATES[0].name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {PLATES[0].desc}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 md:mt-16" delay={120}>
            <li className="group h-full">
              <div className="relative overflow-hidden mb-4 aspect-[4/3]">
                <Image
                  src={PLATES[1].src}
                  alt="Empanadas recién horneadas sobre lata, junto a uslero y masa"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start gap-4">
                <span
                  className={`${display.className} font-black text-3xl md:text-4xl leading-none pt-1`}
                  style={{ color: C.blue }}
                  aria-hidden="true"
                >
                  02
                </span>
                <div>
                  <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`}>
                    {PLATES[1].name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {PLATES[1].desc}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 md:col-start-4 md:-mt-4" delay={160}>
            <li className="group h-full">
              <div className="relative overflow-hidden mb-4 aspect-[16/9]">
                <Image
                  src={PLATES[2].src}
                  alt="Mesón de la cocina con sopaipillas, platos y copas listas para servir"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start gap-4">
                <span
                  className={`${display.className} font-black text-3xl md:text-4xl leading-none pt-1`}
                  style={{ color: C.blue }}
                  aria-hidden="true"
                >
                  03
                </span>
                <div>
                  <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-2`}>
                    {PLATES[2].name}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {PLATES[2].desc}
                  </p>
                </div>
              </div>
            </li>
          </Reveal>
        </ul>
      </section>

      {/* ── Foto que rompe la grilla ── */}
      <section aria-label="El local visto desde la calle">
        <Reveal>
          <div className="relative h-[52vh] md:h-[70vh] overflow-hidden">
            <Image
              src={`${IMG}/ambiente.webp`}
              alt="Fachada del restobar en una calle de Pelarco, con cerros y viñas de fondo"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid grid-cols-12 py-3 border-b" style={{ borderColor: C.line }}>
              <p
                className={`${display.className} col-span-12 md:col-span-6 md:col-start-7 text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]`}
                style={{ color: C.muted }}
              >
                El local, desde la calle — foto de muestra
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── N° 02 · El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Issue n="N° 02" title="El local" />
          </Reveal>
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <h3
                  className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,4.2rem)] mb-6`}
                  style={{ color: C.ink }}
                >
                  De Pelarco,
                  <br />
                  <span style={{ color: C.blue }}>para Pelarco</span>
                </h3>
              </Reveal>
              <Reveal delay={100}>
                <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  <p>
                    {BIZ.name} es el restobar del pueblo: se come en mesa
                    de madera, se conversa fuerte y la atención es directa,
                    de persona a persona. Texto de muestra — la historia
                    real la cuenta el local.
                  </p>
                  <p>
                    En su ficha de Google acumula {BIZ.reviews} reseñas, y
                    en Instagram (
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold underline underline-offset-4 decoration-2"
                      style={{ color: C.blue, textDecorationColor: 'rgba(34,81,255,0.35)' }}
                    >
                      {BIZ.igUser}
                    </a>
                    , {BIZ.igFollowers}) muestra la cocina, la barra y el
                    ambiente del día a día.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div className="flex flex-wrap gap-6 mt-8">
                  <div className="border-l-4 pl-4" style={{ borderColor: C.blue }}>
                    <p className={`${display.className} font-black text-3xl leading-none`} style={{ color: C.ink }}>
                      {BIZ.reviews}
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                      reseñas en Google
                    </p>
                  </div>
                  <div className="border-l-4 pl-4" style={{ borderColor: C.lime }}>
                    <p className={`${display.className} font-black text-3xl leading-none`} style={{ color: C.ink }}>
                      295
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                      seguidores en Instagram
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-5">
              <Reveal delay={80}>
                <p
                  className={`${display.className} text-[10px] md:text-xs font-bold uppercase tracking-[0.24em]`}
                  style={{ color: C.muted }}
                >
                  Lo que valoran los clientes — textos de ejemplo
                </p>
              </Reveal>
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={i} delay={120 + i * 100}>
                  <figure
                    className="p-6 md:p-7 border-l-4"
                    style={{ backgroundColor: C.paper, borderColor: i === 0 ? C.blue : C.line }}
                  >
                    <blockquote className="text-base md:text-lg leading-relaxed font-semibold mb-4" style={{ color: C.ink }}>
                      “{t}”
                    </blockquote>
                    <figcaption
                      className={`${display.className} text-[11px] uppercase tracking-[0.18em] font-bold`}
                      style={{ color: C.blue }}
                    >
                      Reseña de ejemplo
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
              <Reveal delay={200}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-sm font-extrabold uppercase tracking-wide underline underline-offset-4 decoration-2`}
                  style={{ color: C.blue, textDecorationColor: 'rgba(34,81,255,0.35)' }}
                >
                  Ver la ficha real en Google →
                </a>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── N° 03 · La carta ── */}
      <section id="precios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Issue n="N° 03" title="La carta" />
        </Reveal>
        <div className="grid grid-cols-12 gap-8 md:gap-10">
          <Reveal className="col-span-12 lg:col-span-4">
            <h3
              className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2rem,4.5vw,3.4rem)] mb-5`}
            >
              Precios de
              <br />
              referencia
            </h3>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
              Valores de muestra para mostrar cómo se vería la carta.
              Los platos y precios reales se confirman con el local al
              publicar.
            </p>
            <span
              className={`${display.className} inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1.5`}
              style={{ backgroundColor: C.lime, color: C.ink }}
            >
              Precios de muestra
            </span>
          </Reveal>
          <Reveal className="col-span-12 lg:col-span-8" delay={120}>
            <ul className="divide-y" style={{ borderColor: C.line }}>
              {MENU.map((m) => (
                <li key={m.name} className="py-4 md:py-5 flex items-baseline gap-3">
                  <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>
                    {m.name}
                  </span>
                  <span
                    className="flex-1 border-b border-dotted -translate-y-1"
                    style={{ borderColor: 'rgba(20,21,24,0.3)' }}
                    aria-hidden="true"
                  />
                  <span
                    className={`${display.className} text-lg md:text-xl font-extrabold`}
                    style={{ color: C.blue }}
                  >
                    {m.price}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK_MESA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} ll-btn inline-block font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 mt-8`}
              style={{ backgroundColor: C.blue, color: '#FFFFFF' }}
            >
              Pedir o reservar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── N° 04 · Contacto y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.blue }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Issue n="N° 04" title="Ubicación y contacto" light />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-6">
              <Reveal>
                <h3
                  className={`${display.className} font-black uppercase leading-[0.98] tracking-[-0.02em] text-[clamp(2.4rem,6vw,4.6rem)] mb-6`}
                  style={{ color: '#FFFFFF' }}
                >
                  ¿Mesa
                  <br />
                  <span style={{ color: C.lime }}>para hoy?</span>
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  Reserva por WhatsApp o llega directo. También puedes
                  encargar empanadas y platos para llevar.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ll-btn ll-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5`}
                    style={{ backgroundColor: C.lime, color: C.ink }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ll-btn ll-btn-dark font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 hover:bg-white/10`}
                    style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF' }}
                  >
                    {BIZ.igUser}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full max-w-full overflow-hidden border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(255,255,255,0.35)' }}
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
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0C0D10', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div>
            <p className={`${display.className} font-black uppercase text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">
                {BIZ.igUser}
              </a>
            </address>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La carta, los precios, las reseñas y las fotos
            son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: C.lime }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
