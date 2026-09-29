import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_MESA,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  CARTA,
  EXTRAS,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  espacio: '#0B1030',
  panel: '#141C48',
  panelSuave: '#1B2457',
  tinta: '#EFF1F6',
  tenue: '#B9BED4',
  alien: '#9BEB3C',
  alienSuave: 'rgba(155,235,60,0.16)',
  linea: 'rgba(239,241,246,0.14)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-37-y-medio',
  title: '37 1/2 Restaurant — cocina casera intergaláctica en el km 37,5',
  description:
    'Restaurante de ruta en Bajos de Lircay, San Clemente. Platos de fondo caseros, terraza y la carta real con sus precios. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Los platos', href: '#platos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegada' },
]

const SENAL = [
  'Cazuela de vacuno',
  'Pescado frito',
  'Plateada',
  'Salmón',
  'Papas naturales',
  'Jugo de frutilla',
  'Pebre y pan',
  'Trekking friendly',
]

/** El alienígena de su marca, como icono. */
function Alien({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2c4.4 0 7 2.7 7 6.2 0 2.5-1.4 5.3-3.4 7.6-1.6 1.9-3.6 3.2-3.6 5.4 0 .4-.4.8-.8.8h-.4c-.4 0-.8-.4-.8-.8 0-2.2-2-3.5-3.6-5.4C4.4 13.5 3 10.7 3 8.2 3 4.7 7.6 2 12 2Zm-3.5 7.2c.9.4 2 .5 3.5.5s2.6-.1 3.5-.5c-.2 1-.6 1.9-1.2 2.5-.7.7-1.5 1-2.3 1s-1.6-.3-2.3-1c-.6-.6-1-1.5-1.2-2.5Z" />
    </svg>
  )
}

function Parada({
  n,
  title,
  sub,
}: {
  n: string
  title: string
  sub?: string
}) {
  return (
    <div className="mb-8 md:mb-12">
      <Reveal>
        <div
          className={`${mono.className} flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] mb-3`}
          style={{ color: C.alien }}
        >
          <Alien className="w-4 h-4" />
          <span>Parada {n}</span>
          <span className="flex-1 border-t border-dashed" style={{ borderColor: C.linea }} aria-hidden="true" />
          {sub && <span style={{ color: C.tenue }}>{sub}</span>}
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2
          className={`${display.className} font-extrabold uppercase leading-[1.02] tracking-[-0.01em] text-[clamp(1.7rem,4.6vw,3.4rem)]`}
          style={{ color: C.tinta }}
        >
          {title}
        </h2>
      </Reveal>
    </div>
  )
}

export default function Restaurant37YMedioPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.espacio, color: C.tinta }}
    >
      <style>{`
        .i37-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .i37-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .i37-btn:active { transform: translateY(0) scale(0.97); }
        .i37-btn:focus-visible { outline: 3px solid ${C.alien}; outline-offset: 3px; }
        .i37-estrella { position: absolute; border-radius: 9999px; background: #fff; }
      `}</style>

      <BlitzNav
        name={
          <span className="inline-flex items-center gap-2">
            <Alien className="w-5 h-5" />
            {BIZ.name}
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(11,16,48,0.92)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.alien,
          btnInk: '#0B1030',
        }}
      />

      {/* ── Hero: señal de ruta sobre el espacio ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.espacio }}>
        {/* campo de estrellas */}
        <div className="absolute inset-0" aria-hidden="true">
          {[
            [8, 12, 2], [22, 30, 1.5], [35, 8, 2], [48, 18, 1.5], [61, 10, 2],
            [74, 24, 1.5], [86, 12, 2], [93, 32, 1.5], [16, 46, 1.5], [70, 44, 2],
            [40, 40, 1.5], [55, 34, 2], [30, 55, 1.5], [80, 52, 2],
          ].map(([x, y, s], i) => (
            <span
              key={i}
              className="i37-estrella"
              style={{ left: `${x}%`, top: `${y}%`, width: s, height: s, opacity: 0.7 }}
            />
          ))}
        </div>

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-32 md:pt-40 pb-10 md:pb-14">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-end">
            <div className="col-span-12 lg:col-span-7">
              <Reveal>
                {/* letrero de ruta */}
                <div
                  className={`${mono.className} inline-flex items-center gap-3 border px-4 py-2.5 mb-7 text-[11px] md:text-xs font-bold uppercase tracking-[0.24em]`}
                  style={{ borderColor: C.alien, color: C.alien, backgroundColor: C.alienSuave }}
                >
                  <span
                    className="px-2 py-0.5"
                    style={{ backgroundColor: C.alien, color: C.espacio }}
                  >
                    CH-115
                  </span>
                  {BIZ.km} · Bajos de Lircay
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h1
                  className={`${display.className} font-black uppercase leading-[1.0] tracking-[-0.01em] text-[clamp(2.4rem,7vw,5.6rem)] mb-6`}
                >
                  El restaurante
                  <br />
                  <span style={{ color: C.alien }}>intergaláctico</span>
                  <br />
                  de la cordillera
                </h1>
              </Reveal>
              <Reveal delay={180}>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.tenue }}>
                  Cocina casera de verdad —cazuelas en paila, plateada que se
                  deshace y papas fritas naturales— a mitad de la ruta a
                  Vilches. Con terraza, carta de pizarra y un alienígena que
                  te da la bienvenida, terrícola.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} i37-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-3 tap-44`}
                    style={{ backgroundColor: C.alien, color: C.espacio }}
                  >
                    Reservar por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className={`${display.className} i37-btn font-bold uppercase tracking-wide text-sm md:text-base px-6 py-3 border-2 tap-44`}
                    style={{ borderColor: 'rgba(239,241,246,0.5)', color: C.tinta }}
                  >
                    Ver la carta real
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 tap-44"
                >
                  <Stars value={4.7} color={C.alien} className="w-4 h-4" />
                  <span className={`${mono.className} text-xs md:text-sm font-bold`} style={{ color: C.tinta }}>
                    {BIZ.rating} en Google · {BIZ.reviews} reseñas
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <Reveal delay={200}>
                <div
                  className="relative overflow-hidden border aspect-[4/5] max-h-[560px] w-full"
                  style={{ borderColor: C.linea }}
                >
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Terraza techada del restaurante con mesas de mantel a cuadros y vista al campo"
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                  <div
                    className={`${mono.className} absolute bottom-3 left-3 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]`}
                    style={{ backgroundColor: 'rgba(11,16,48,0.85)', color: C.alien }}
                  >
                    La terraza del 37 ½
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* señal de ruta: especialidades */}
        <div className="relative border-y" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-1 gap-y-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.18em]`}
            style={{ color: C.tenue }}
            aria-label="Especialidades"
          >
            {SENAL.map((item, i) => (
              <span key={item} className="inline-flex items-center">
                {i > 0 && <Alien className="w-3 h-3 mx-2.5" />}
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Parada 01: la carta ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Parada n="01" title="La carta de la pizarra" sub="precios reales" />
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 lg:col-span-7">
            <Reveal>
              <ul className="divide-y" style={{ borderColor: C.linea }}>
                {CARTA.map((m) => (
                  <li key={m.name} className="py-3.5 md:py-4 flex items-baseline gap-3">
                    <span className="text-sm md:text-base font-semibold" style={{ color: C.tinta }}>
                      {m.name}
                    </span>
                    <span
                      className="flex-1 border-b border-dashed -translate-y-1"
                      style={{ borderColor: 'rgba(239,241,246,0.3)' }}
                      aria-hidden="true"
                    />
                    <span className={`${display.className} text-base md:text-lg font-extrabold`} style={{ color: C.alien }}>
                      {m.price}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={80}>
              <div className="mt-6 p-5 border" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.alien }}>
                  Extras y menú niños
                </p>
                <ul className="divide-y" style={{ borderColor: C.linea }}>
                  {EXTRAS.map((m) => (
                    <li key={m.name} className="py-2.5 flex items-baseline gap-3">
                      <span className="text-xs md:text-sm" style={{ color: C.tenue }}>{m.name}</span>
                      <span className="flex-1 border-b border-dashed -translate-y-1" style={{ borderColor: 'rgba(239,241,246,0.25)' }} aria-hidden="true" />
                      <span className={`${display.className} text-sm font-bold`} style={{ color: C.tinta }}>{m.price}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-relaxed mt-4" style={{ color: C.tenue }}>
                  Cada plato de fondo incluye un agregado. Carta real fotografiada
                  en el local — los precios se confirman al sentarse.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <Reveal delay={120}>
              <div className="relative overflow-hidden border aspect-[3/4]" style={{ borderColor: C.linea }}>
                <Image
                  src={`${IMG}/carta.webp`}
                  alt="Carta del restaurante escrita en pizarra negra con el alienígena de la marca y precios"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.tenue }}>
                «Bienvenido terrícola» — la pizarra real
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Parada 02: los platos ── */}
      <section id="platos" className="scroll-mt-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Parada n="02" title="Abastecimiento de nave" sub="fotos del local" />
          <ul className="grid grid-cols-12 gap-5 md:gap-6">
            <Reveal className="col-span-6 lg:col-span-3">
              <li>
                <div className="relative overflow-hidden aspect-[3/4] mb-3" style={{ backgroundColor: C.panelSuave }}>
                  <Image src={`${IMG}/plato1.webp`} alt="Salmón a la plancha con papas fritas naturales y limón" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <p className={`${display.className} text-sm md:text-base font-bold uppercase`}>Salmón del día</p>
                <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.tenue }}>con papas naturales y ensalada</p>
              </li>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-3 lg:mt-10" delay={100}>
              <li>
                <div className="relative overflow-hidden aspect-[3/4] mb-3" style={{ backgroundColor: C.panelSuave }}>
                  <Image src={`${IMG}/plato2.webp`} alt="Chuleta de cerdo con huevo frito y papas fritas" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <p className={`${display.className} text-sm md:text-base font-bold uppercase`}>Chuleta a lo pobre</p>
                <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.tenue }}>huevo frito y papas caseras</p>
              </li>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-3" delay={160}>
              <li>
                <div className="relative overflow-hidden aspect-[3/4] mb-3" style={{ backgroundColor: C.panelSuave }}>
                  <Image src={`${IMG}/plato3.webp`} alt="Pescado frito entero con papas fritas y rodajas de limón" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <p className={`${display.className} text-sm md:text-base font-bold uppercase`}>Pescado frito</p>
                <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.tenue }}>entero, con limón y papas</p>
              </li>
            </Reveal>
            <Reveal className="col-span-6 lg:col-span-3 lg:mt-10" delay={220}>
              <li>
                <div className="relative overflow-hidden aspect-[3/4] mb-3" style={{ backgroundColor: C.panelSuave }}>
                  <Image src={`${IMG}/cazuela.webp`} alt="Pailas de greda con cazuela humeante sobre la mesa" fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover" />
                </div>
                <p className={`${display.className} text-sm md:text-base font-bold uppercase`}>Cazuela en paila</p>
                <p className={`${mono.className} text-[11px] mt-1`} style={{ color: C.tenue }}>de vacuno, recién servida</p>
              </li>
            </Reveal>
          </ul>
          <Reveal delay={120}>
            <div className="mt-12 grid grid-cols-12 gap-5 md:gap-6 items-end">
              <div className="col-span-12 md:col-span-7">
                <div className="relative overflow-hidden aspect-[16/9]">
                  <Image src={`${IMG}/mesa.webp`} alt="Mesa con jugos naturales de frutilla, pebre y pan amasado" fill sizes="(min-width:768px) 58vw, 100vw" className="object-cover" />
                </div>
              </div>
              <div className="col-span-12 md:col-span-5">
                <p className={`${display.className} font-bold uppercase text-xl md:text-2xl leading-tight mb-3`}>
                  El pebre y el pan llegan primero
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.tenue }}>
                  Jugos naturales, pebre fresco y pan para empezar. En la terraza
                  techada se come mirando el campo, con la ruta al lado.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Marca: el letrero ── */}
      <section aria-label="El letrero del restaurante">
        <Reveal>
          <div className="relative h-[46vh] md:h-[60vh] overflow-hidden">
            <Image
              src={`${IMG}/marca.webp`}
              alt="Letrero azul del restaurante: 37 1/2 Restaurante Intergaláctico con sus platos ilustrados"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,16,48,0.1) 0%, rgba(11,16,48,0.6) 100%)' }} />
            <div
              className={`${mono.className} absolute bottom-4 left-5 md:left-8 px-3 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.22em]`}
              style={{ backgroundColor: 'rgba(11,16,48,0.85)', color: C.alien }}
            >
              El letrero de la ruta — foto real
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Parada 03: bitácora de terrícolas ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Parada n="03" title="Bitácora de terrícolas" sub={`${BIZ.rating} ★ · ${BIZ.reviews} reseñas`} />
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.nombre} className="col-span-12 md:col-span-6" delay={i * 90}>
              <figure
                className="h-full p-6 md:p-7 border flex flex-col"
                style={{ borderColor: C.linea, backgroundColor: i % 2 === 0 ? C.panel : 'transparent' }}
              >
                <blockquote className="text-sm md:text-base leading-relaxed mb-5 flex-1" style={{ color: C.tinta }}>
                  “{r.texto}”
                </blockquote>
                <figcaption className={`${mono.className} flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-bold`} style={{ color: C.alien }}>
                  <Alien className="w-3.5 h-3.5" />
                  {r.nombre} · reseña en Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} inline-block mt-8 text-sm font-bold uppercase tracking-wide underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.alien }}
          >
            Ver la ficha real en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Parada 04: coordenadas ── */}
      <section id="llegada" className="scroll-mt-20 border-t" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Parada n="04" title="Coordenadas de aterrizaje" sub="ruta 115" />
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <address className="not-italic">
                  <p className={`${display.className} font-extrabold uppercase text-xl md:text-2xl leading-tight mb-4`}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.tenue }}>
                    {BIZ.city}, {BIZ.region}. En el cruce hacia Vilches,
                    a mitad de la subida a la cordillera — el paradero
                    natural entre San Clemente y el alto Lircay.
                  </p>
                  <div className="mb-7">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] font-bold mb-3`} style={{ color: C.alien }}>
                      Horario (ficha de Google)
                    </p>
                    <ul className="divide-y" style={{ borderColor: C.linea }}>
                      {HORARIO.map((h) => (
                        <li key={h.dias} className="py-2.5 flex items-baseline gap-3">
                          <span className="text-sm" style={{ color: C.tenue }}>{h.dias}</span>
                          <span className="flex-1 border-b border-dashed -translate-y-1" style={{ borderColor: 'rgba(239,241,246,0.25)' }} aria-hidden="true" />
                          <span className={`${mono.className} text-sm font-bold`} style={{ color: C.tinta }}>{h.horas}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </address>
              </Reveal>
              <Reveal delay={120}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} i37-btn font-bold uppercase tracking-wide text-sm px-6 py-3 tap-44`}
                    style={{ backgroundColor: C.alien, color: C.espacio }}
                  >
                    WhatsApp {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} i37-btn font-bold uppercase tracking-wide text-sm px-6 py-3 border-2 tap-44`}
                    style={{ borderColor: 'rgba(239,241,246,0.5)', color: C.tinta }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: C.linea }}
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
      <footer style={{ backgroundColor: '#070B22', color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <Alien className="w-5 h-5" />
            <p className={`${display.className} font-extrabold uppercase text-lg md:text-xl`}>
              {BIZ.name} · {BIZ.tag}
            </p>
          </div>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: C.tenue }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            {' · '}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.linea }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed" style={{ color: C.tenue }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tinta }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, precios, reseñas y fotos reales de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.alien }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
