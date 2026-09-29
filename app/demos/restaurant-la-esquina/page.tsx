import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, PIZARRA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/lato/normal-400.woff2', weight: '400' },
    { path: '../../fonts/lato/normal-700.woff2', weight: '700' },
    { path: '../../fonts/lato/normal-900.woff2', weight: '900' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700' }],
})

// Paleta de sus activos: crema de manteles y menús, teja de la fachada,
// azul del mantel a cuadros y el negro de la pizarra de la vereda.
const C = {
  paper: '#F7F1E5',
  paperLine: '#E0D5BE',
  ink: '#25211B',
  teja: '#B4463C',
  tejaDeep: '#8E322B',
  azul: '#2C5F8A',
  pizarra: '#22201D',
  tiza: '#F2EFE4',
  tizaDim: 'rgba(242,239,228,0.78)',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-la-esquina',
  title: 'Restaurant La Esquina — restaurant y residencial en la esquina de Prat, Empedrado',
  description:
    'La esquina de Arturo Prat 223, Empedrado: restaurant abajo, residencial arriba. Desayunos, almuerzos, completos y las empanadas de queso camarón de la pizarra. Lun a sáb.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'El comedor', href: '#comedor' },
  { label: 'La carta', href: '#carta' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Dibujo a tiza: el tic que encabeza cada ítem de la pizarra real. */
function Tick() {
  return (
    <svg viewBox="0 0 16 12" className="w-3.5 h-3 mt-1 shrink-0" aria-hidden="true">
      <path
        d="M1 6.5 5.5 11 15 1"
        fill="none"
        stroke="#7FB2D9"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Kicker({ children, color = C.teja }: { children: ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color }}>
      {children}
    </p>
  )
}

export default function LaEsquinaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .eq-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .eq-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .eq-btn:active { transform: translateY(0) scale(0.97); }
        .eq-btn:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px; }
        .eq-perf { background-image: radial-gradient(${C.paperLine} 1.3px, transparent 1.3px); background-size: 11px 11px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(247,241,229,0.97)',
          ink: '#25211B',
          line: 'rgba(37,33,27,0.15)',
          btnBg: C.teja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la esquina con letrero ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-6">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Restaurant y Residencial La Esquina"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover shrink-0"
                />
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em]`} style={{ color: C.teja }}>
                  Arturo Prat 223 · Empedrado
                </p>
              </div>
              <h1
                className={`${display.className} font-bold text-[clamp(2.6rem,6.6vw,4.8rem)] leading-[1.0] mb-6`}
                style={{ color: C.ink }}
              >
                En la esquina:
                <br />
                <span className="italic font-medium" style={{ color: C.teja }}>restaurant abajo,</span>
                <br />
                residencial arriba
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: '#4C453A' }}>
                La parada de todos los días en Prat con Caupolicán: desayuno
                desde las 8:30, almuerzo de casa, completos y cena hasta las
                22:00 — y arriba, las piezas de la residencial.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eq-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href="#pizarra"
                  className="eq-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: C.azul, color: C.azul }}
                >
                  Ver la pizarra
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 relative">
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-xl border-2 aspect-[4/3]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Restaurant y Residencial La Esquina en la esquina de Arturo Prat, Empedrado, con su letrero colgante"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-5 -left-3 md:-left-6 w-24 md:w-32 rotate-[-5deg] rounded-md overflow-hidden border-4 shadow-lg"
                  style={{ borderColor: '#FFFFFF' }}
                >
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt="Letrero colgante de La Esquina con su logo circular de plato y cubiertos"
                    width={480}
                    height={360}
                    className="block w-full h-auto"
                  />
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eq-btn absolute top-4 right-4 inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap tap-44"
                  style={{ backgroundColor: '#FFFFFF', color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.teja} className="w-4 h-4" />
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* borde picado, como el margen de la pizarra */}
      <div className="eq-perf h-3 border-y" style={{ borderColor: C.paperLine, backgroundColor: '#EFE7D5' }} aria-hidden="true" />

      {/* ── La pizarra de la vereda ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-start">
            <div className="col-span-12 lg:col-span-5 order-2 lg:order-1">
              <Reveal delay={120}>
                <div className="relative overflow-hidden rounded-xl border aspect-[3/4] rotate-[0.6deg]" style={{ borderColor: 'rgba(242,239,228,0.35)' }}>
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="Pizarra de la vereda de La Esquina escrita a tiza con desayunos, almuerzos, completos, cenas, pollo con papas, chorrillana, sandwich y empanadas queso camarón"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 order-1 lg:order-2">
              <Reveal>
                <Kicker color="#7FB2D9">escrita a tiza en la vereda</Kicker>
                <h2
                  className={`${display.className} font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.03] mb-4`}
                  style={{ color: C.tiza }}
                >
                  La pizarra dice lo que hay
                </h2>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-10" style={{ color: C.tizaDim }}>
                  Cada mañana la dueña reescribe la carta en la pizarra de la
                  esquina. Esto es lo que ofrece hoy, palabra por palabra:
                </p>
              </Reveal>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 border-t border-dashed" style={{ borderColor: 'rgba(242,239,228,0.4)' }}>
                {PIZARRA.map((item, i) => (
                  <Reveal key={item} delay={i * 55}>
                    <li className="flex items-start gap-3 py-3.5 border-b border-dashed" style={{ borderColor: 'rgba(242,239,228,0.25)' }}>
                      <Tick />
                      <span
                        className={`${display.className} font-semibold text-lg md:text-xl ${item === 'Empanadas queso camarón' ? 'italic' : ''}`}
                        style={{ color: item === 'Empanadas queso camarón' ? '#F0D98C' : C.tiza }}
                      >
                        {item}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={240}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-6`} style={{ color: 'rgba(242,239,228,0.55)' }}>
                  Ítems tal como aparecen en la pizarra de la fachada
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Del lado del comedor ── */}
      <section id="comedor" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>el restaurant y la residencial</Kicker>
            <h2
              className={`${display.className} font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.03] mb-4 max-w-3xl`}
              style={{ color: C.ink }}
            >
              Del lado del comedor, mesa puesta; arriba, las piezas
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12" style={{ color: '#4C453A' }}>
              El mismo edificio de la esquina hace dos oficios: el restaurant
              de siempre en planta baja y la residencial «La Esquina» arriba,
              con punto CajaVecina para el barrio.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 sm:col-span-7">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] border-2" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/comedor.webp`}
                  alt="Comedor de La Esquina con mesas con mantel a cuadros azules"
                  fill
                  sizes="(min-width: 640px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="col-span-12 sm:col-span-5">
              <div className="relative overflow-hidden rounded-xl aspect-[4/3] sm:aspect-auto sm:h-full border-2" style={{ borderColor: C.teja }}>
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón interior del restaurant con mesas y sillas de madera"
                  fill
                  sizes="(min-width: 640px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta de siempre ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: '#EFE7D5' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>los platos que salen</Kicker>
            <h2
              className={`${display.className} font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.03] mb-12 max-w-3xl`}
              style={{ color: C.ink }}
            >
              De la cocina de la esquina a la mesa
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            {[
              { src: 'empanada', titulo: 'Empanadas de queso camarón', nota: 'La especialidad de la pizarra, dorada en horno.' },
              { src: 'lomo', titulo: 'Lomo a lo pobre', nota: 'Con papas fritas de casa y huevo frito encima.' },
              { src: 'pasta', titulo: 'Pasta del día', nota: 'La que toca según la semana, al dente y abundante.' },
            ].map((p, i) => (
              <Reveal key={p.src} delay={i * 90} className="col-span-12 sm:col-span-4">
                <figure
                  className="h-full rounded-xl overflow-hidden border-2 bg-white"
                  style={{ borderColor: C.ink }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/${p.src}.webp`}
                      alt={`${p.titulo} servido en La Esquina`}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-5 border-t-2 border-dashed" style={{ borderColor: C.paperLine }}>
                    <p className={`${display.className} font-bold text-lg mb-1`} style={{ color: C.ink }}>
                      {p.titulo}
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#5A5142' }}>
                      {p.nota}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section aria-label="Reseñas" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <Kicker>en Google, sin edición</Kicker>
                <h2
                  className={`${display.className} font-bold text-[clamp(1.9rem,4vw,3rem)] leading-[1.05] mb-4`}
                  style={{ color: C.ink }}
                >
                  Lo que anota la gente que pasa
                </h2>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="eq-btn inline-flex items-center gap-3 p-4 rounded-xl border-2 tap-44"
                  style={{ borderColor: C.teja, backgroundColor: '#FFFFFF', color: C.ink }}
                >
                  <span className={`${display.className} font-bold text-3xl leading-none`} style={{ color: C.teja }}>
                    {String(BIZ.rating).replace('.', ',')}
                  </span>
                  <span className="text-sm leading-snug font-semibold">
                    ★ · {BIZ.reviews} reseñas<br />en la ficha de Google →
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8">
              {RESENAS.map((r, i) => (
                <Reveal key={r.autor} delay={i * 80}>
                  <figure
                    className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b-2 border-dashed first:border-t-2"
                    style={{ borderColor: C.paperLine }}
                  >
                    <div className="flex items-center gap-3 shrink-0 sm:w-40">
                      <Stars value={r.estrellas} color={C.teja} className="w-4 h-4" />
                      <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.teja }}>
                        {r.autor}
                      </figcaption>
                    </div>
                    <blockquote className="text-base md:text-lg leading-relaxed" style={{ color: C.ink }}>
                      “{r.texto}”
                    </blockquote>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.pizarra }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker color="#7FB2D9">en la esquina de Prat con Caupolicán</Kicker>
            <h2
              className={`${display.className} font-bold text-[clamp(2rem,5vw,3.8rem)] leading-[1.03] mb-12 max-w-3xl`}
              style={{ color: C.tiza }}
            >
              Doble puerta en la esquina:
              <span className="italic font-medium" style={{ color: '#F0D98C' }}> la del almuerzo y la de la pensión</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-7 order-2 lg:order-1">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-xl border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(242,239,228,0.4)' }}
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
            <div className="col-span-12 lg:col-span-5 order-1 lg:order-2">
              <Reveal>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-semibold space-y-1" style={{ color: C.tiza }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                  <p style={{ color: C.tizaDim }}>Restaurant + residencial · punto CajaVecina</p>
                </address>
                <ul className="mb-8 border-t border-dashed" style={{ borderColor: 'rgba(242,239,228,0.4)' }}>
                  {BIZ.hours.map(([d, h]) => (
                    <li
                      key={d}
                      className="flex justify-between py-3 border-b border-dashed text-sm md:text-base"
                      style={{ borderColor: 'rgba(242,239,228,0.25)', color: C.tiza }}
                    >
                      <span className={`${mono.className} uppercase tracking-[0.14em] text-xs md:text-sm`} style={{ color: C.tizaDim }}>{d}</span>
                      <span className="font-semibold">{h}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eq-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.teja, color: '#FFFFFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eq-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: 'rgba(242,239,228,0.5)', color: C.tiza }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#171512', color: C.tiza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-bold text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(242,239,228,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            Lun a vie 8:30–22:00 · sábado 10:00–22:00 · domingo cerrado · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,239,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(242,239,228,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.tiza }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#F0D98C' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}, Empedrado`} />
    </div>
  )
}
