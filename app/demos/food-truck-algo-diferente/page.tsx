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
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  paper: '#FAF1DD',
  paperHi: '#FFF9EC',
  ink: '#211A12',
  muted: '#6B5F4C',
  red: '#C63B22',
  redInk: '#FFF4E8',
  senal: '#146B3A',
  line: 'rgba(33,26,18,0.16)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// usa la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'food-truck-algo-diferente',
  title: 'Algo Diferente — desayuno de ruta pasado el peaje de Retiro',
  description:
    'Food truck en la Ruta 5, pasado el peaje de Retiro hacia el sur: consomé, sandwiches en pan amasado casero y desayuno de 5 a 11. 5,0 en Google.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'El ritual', href: '#ritual' },
  { label: 'La carta', href: '#carta' },
  { label: 'El patio', href: '#patio' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const CARTA = [
  'Lengua',
  'Churrasco queso',
  'Pernil',
  'Queso fresco',
  'Malaya',
  'Arrollado',
  'Ave-mayo',
  'Pimentón',
]

const RESENAS = [
  {
    nombre: 'Ricardo Contardo Correa',
    fecha: 'Hace 7 meses',
    estrellas: 5,
    texto:
      'Al llegar puede ser un rico consomé, luego un sándwich de lengua que es espectacular, además de lomitos y todo eso. La atención es rápida y muy cordial. Buenísima la picada que está pasando el peaje de Retiro hacia el sur.',
  },
  {
    nombre: 'Leonardo Leiva',
    fecha: 'Hace 6 meses',
    estrellas: 4,
    texto:
      'Nos salva en las madrugadas con una variedad de desayunos que nos da energía para llegar a la hora de almuerzo sin apetito.',
  },
  {
    nombre: 'Javier Valdivia',
    fecha: 'Hace 8 meses',
    estrellas: 5,
    texto: 'Muy buen precio y muy rico el pan amasado con mechada.',
  },
]

/* Señal verde de dirección, como en la 5 Sur */
function Senal({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 font-bold text-[11px] md:text-xs uppercase tracking-[0.18em] px-3.5 py-2 rounded-md border-2`}
      style={{ backgroundColor: C.senal, borderColor: 'rgba(250,241,221,0.85)', color: '#FFFFFF' }}
    >
      {children}
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  )
}

/* Borde perforado de boleta de peaje */
function Perf({ color = C.ink }: { color?: string }) {
  return (
    <div
      aria-hidden="true"
      className="h-px w-full"
      style={{ backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 9px, transparent 9px 18px)` }}
    />
  )
}

function Etiqueta({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-7 md:mb-9">
      <span className={`${mono.className} font-bold text-xs md:text-sm`} style={{ color: C.red }}>
        {n}
      </span>
      <h2
        className={`${display.className} font-semibold uppercase leading-none tracking-wide text-[clamp(1.9rem,5.5vw,3.2rem)]`}
        style={{ color: C.ink }}
      >
        {children}
      </h2>
    </div>
  )
}

export default function AlgoDiferentePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .ad-btn { transition: transform .18s ease, filter .18s ease; }
        .ad-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .ad-btn:active { transform: scale(.97); }
        .ad-btn:focus-visible { outline: 3px solid ${C.senal}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} font-semibold uppercase tracking-wide`}>Algo Diferente</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: 'rgba(250,241,221,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: C.redInk,
        }}
      />

      {/* ── Hero: la señal verde y el camión ── */}
      <section id="inicio" className="pt-[76px] md:pt-[88px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-end py-8 md:py-14">
            <div className="md:col-span-7">
              <Reveal>
                <Senal>Pasado peaje Retiro → hacia el sur</Senal>
                <h1
                  className={`${display.className} font-semibold uppercase leading-[0.94] tracking-wide text-[clamp(3rem,10.5vw,7rem)] mt-5 mb-5`}
                >
                  Algo
                  <br />
                  <span style={{ color: C.red }}>diferente</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-7 font-medium" style={{ color: C.muted }}>
                  El food truck de los desayunos en la Ruta 5: consomé
                  caliente y sandwiches en pan amasado casero, de lunes a
                  viernes desde las 5 de la mañana.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ad-btn font-semibold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 tap-44`}
                    style={{ backgroundColor: C.red, color: C.redInk }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className={`${display.className} ad-btn font-semibold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal className="md:col-span-5" delay={120}>
              <figure>
                <div className="relative overflow-hidden border-[3px] rounded-sm aspect-[4/3]" style={{ borderColor: C.ink }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="El food truck blanco de Algo Diferente con toldo naranjo y banquitos al frente"
                    fill
                    priority
                    sizes="(min-width: 768px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2.5`} style={{ color: C.muted }}>
                  <span>El camión, en la berma de la 5 Sur</span>
                  <span className="inline-flex items-center gap-1.5 shrink-0" style={{ color: C.senal }}>
                    <Stars value={BIZ.rating} color={C.senal} className="w-3 h-3" />
                    {BIZ.rating} · {BIZ.reviews}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <Perf color={C.muted} />
      </section>

      {/* ── Boleta de peaje: datos de un vistazo ── */}
      <section aria-label="Datos rápidos" className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8">
        <Reveal>
          <div
            className="border-2 rounded-sm px-5 md:px-7 py-5 md:py-6"
            style={{ borderColor: C.ink, backgroundColor: C.paperHi }}
          >
            <div className={`${mono.className} flex items-baseline justify-between gap-3 text-[10px] md:text-xs uppercase tracking-[0.2em] pb-3`} style={{ color: C.muted }}>
              <span>Ticket de peaje</span>
              <span>N° 005-11</span>
            </div>
            <Perf color={C.line} />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 pt-4">
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mb-1`} style={{ color: C.muted }}>Horario</p>
                <p className={`${display.className} font-semibold uppercase text-base md:text-lg leading-tight`}>Lun–Vie 5–11 am</p>
              </div>
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mb-1`} style={{ color: C.muted }}>Sáb y dom</p>
                <p className={`${display.className} font-semibold uppercase text-base md:text-lg leading-tight`} style={{ color: C.red }}>Cerrado</p>
              </div>
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mb-1`} style={{ color: C.muted }}>Pago</p>
                <p className={`${display.className} font-semibold uppercase text-base md:text-lg leading-tight`}>Efectivo · tarjeta</p>
              </div>
              <div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mb-1`} style={{ color: C.muted }}>Atiende</p>
                <p className={`${display.className} font-semibold uppercase text-base md:text-lg leading-tight`}>{BIZ.dueno}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── El ritual de las cinco ── */}
      <section id="ritual" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-18">
        <Reveal>
          <Etiqueta n="§01">El ritual de las cinco</Etiqueta>
        </Reveal>
        <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <Reveal delay={90}>
              <h3 className={`${display.className} font-semibold uppercase leading-[0.98] text-3xl md:text-[2.6rem] mb-4`}>
                Primero el consomé,
                <br />
                <span style={{ color: C.red }}>después el pan</span>
              </h3>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  Antes de que salga el sol ya hay olla encendida. El
                  que para en la madrugada — camionero, temporero, el
                  que madruga de verdad — llega por el consomé caliente
                  y se va con un sándwich en pan amasado casero.
                </p>
                <p>
                  El letrero rojo al costado de la ruta lo dice simple:
                  «Rico consomé, sandwich en pan amasado casero». Y las
                  doce reseñas de la ficha son todas de cuatro o cinco
                  estrellas.
                </p>
              </div>
            </Reveal>
            <Reveal delay={160}>
              <figure className="relative overflow-hidden border-[3px] rounded-sm mt-6 aspect-[4/3]" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/cocina.webp`}
                  alt="Sandwiches de pan amasado preparándose dentro del food truck"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
          </div>
          <Reveal className="md:col-span-7 order-1 md:order-2">
            <figure className="relative overflow-hidden border-[3px] rounded-sm aspect-[3/4] md:aspect-[4/4.4]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/consome.webp`}
                alt="Letrero rojo de pie junto a la ruta: «Rico consomé, sandwich en pan amasado casero»"
                fill
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover"
              />
              <figcaption
                className="absolute inset-x-0 bottom-0 px-4 py-2.5"
                style={{ background: 'linear-gradient(0deg, rgba(33,26,18,0.85) 0%, rgba(33,26,18,0) 140%)' }}
              >
                <span className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(250,241,221,0.92)' }}>
                  El letrero que se ve desde la pista
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La carta de José (tarjeta real + listado) ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-18">
          <Reveal>
            <div className="flex items-baseline gap-3 mb-7 md:mb-9">
              <span className={`${mono.className} font-bold text-xs md:text-sm`} style={{ color: '#F0B93E' }}>
                §02
              </span>
              <h2 className={`${display.className} font-semibold uppercase leading-none tracking-wide text-[clamp(1.9rem,5.5vw,3.2rem)]`} style={{ color: C.paper }}>
                La carta de José
              </h2>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="md:col-span-5">
              <figure>
                <div className="relative overflow-hidden border-2 rounded-sm aspect-[16/9.4]" style={{ borderColor: 'rgba(250,241,221,0.4)' }}>
                  <Image
                    src={`${IMG}/carta.webp`}
                    alt="Tarjeta del negocio con la carta: lengua, churrasco queso, pernil, queso fresco, malaya, arrollado, ave-mayo y pimentón"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2.5`} style={{ color: 'rgba(250,241,221,0.6)' }}>
                  La tarjeta que reparte José — la carta real
                </figcaption>
              </figure>
              <p className="text-sm leading-relaxed mt-4" style={{ color: 'rgba(250,241,221,0.7)' }}>
                Todos los sandwiches van en pan amasado casero. Se paga
                en efectivo o con tarjeta.
              </p>
            </Reveal>
            <Reveal className="md:col-span-7" delay={120}>
              <ul className="border-t-2" style={{ borderColor: 'rgba(250,241,221,0.3)' }}>
                {CARTA.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-4 py-3.5 border-b"
                    style={{ borderColor: 'rgba(250,241,221,0.18)' }}
                  >
                    <span className={`${mono.className} text-xs w-8 shrink-0`} style={{ color: '#F0B93E' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className={`${display.className} font-semibold uppercase tracking-wide text-lg md:text-2xl`} style={{ color: C.paper }}>
                      Sándwich de {item}
                    </span>
                    <span className={`${mono.className} ml-auto text-[10px] md:text-xs uppercase tracking-[0.14em] shrink-0`} style={{ color: 'rgba(250,241,221,0.6)' }}>
                      pan amasado
                    </span>
                  </li>
                ))}
                <li className="flex items-baseline gap-4 py-3.5 border-b" style={{ borderColor: 'rgba(250,241,221,0.18)' }}>
                  <span className={`${mono.className} text-xs w-8 shrink-0`} style={{ color: '#F0B93E' }}>09</span>
                  <span className={`${display.className} font-semibold uppercase tracking-wide text-lg md:text-2xl`} style={{ color: '#F0B93E' }}>
                    Consomé
                  </span>
                  <span className={`${mono.className} ml-auto text-[10px] md:text-xs uppercase tracking-[0.14em] shrink-0`} style={{ color: 'rgba(250,241,221,0.6)' }}>
                    de la olla
                  </span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El patio: mesas, taca-taca y sombra ── */}
      <section id="patio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-18">
        <Reveal>
          <Etiqueta n="§03">Donde se come tranquilo</Etiqueta>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-5">
          <Reveal className="col-span-2 md:col-span-7">
            <figure className="relative overflow-hidden border-[3px] rounded-sm aspect-[4/3] md:aspect-[16/10]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/patio.webp`}
                alt="Patio techado del food truck con mesas, un taca-taca y banderines de colores"
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-1 md:col-span-5" delay={90}>
            <figure className="relative overflow-hidden border-[3px] rounded-sm aspect-square md:aspect-auto md:h-full md:min-h-[220px]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/amasados.webp`}
                alt="Sandwiches de pan amasado servidos en platos sobre la mesa"
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-1 md:col-span-5" delay={120}>
            <figure className="relative overflow-hidden border-[3px] rounded-sm aspect-square md:aspect-[4/3]" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/wrap.webp`}
                alt="Wrap con carne, choclo y salsas frente a la carta del food truck"
                fill
                sizes="(min-width: 768px) 40vw, 50vw"
                className="object-cover"
              />
            </figure>
          </Reveal>
          <Reveal className="col-span-2 md:col-span-7" delay={150}>
            <div className="grid grid-cols-[1fr_auto] gap-4 items-center border-2 rounded-sm p-5 md:p-6 h-full" style={{ borderColor: C.ink, backgroundColor: C.paperHi }}>
              <div>
                <p className={`${display.className} font-semibold uppercase leading-tight text-xl md:text-2xl mb-2`}>
                  Hay mesa y hasta taca-taca
                </p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  No es solo ventanilla: al costado hay un patio techado
                  con mesas para comer sentado mirando pasar la ruta.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ad-btn font-semibold uppercase tracking-wide text-sm px-5 py-2.5 tap-44 shrink-0 hidden sm:inline-block`}
                style={{ backgroundColor: C.senal, color: '#FFFFFF' }}
              >
                Pedir antes
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.paperHi }}>
        <Perf color={C.line} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-18">
          <Reveal>
            <Etiqueta n="§04">Los que paran, repiten</Etiqueta>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.18em] -mt-4 mb-8 flex items-center gap-2.5`} style={{ color: C.muted }}>
              <Stars value={BIZ.rating} color={C.senal} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas en Google
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <figure className="h-full border-2 rounded-sm p-5 md:p-6 flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.paper }}>
                  <Stars value={r.estrellas} color={C.senal} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed mt-4 mb-5 font-medium" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-auto text-[10px] md:text-[11px] uppercase tracking-[0.13em] flex items-baseline justify-between gap-2`} style={{ color: C.muted }}>
                    <span style={{ color: C.ink }}>{r.nombre}</span>
                    <span className="shrink-0">{r.fecha} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="ubicacion" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-18">
        <Reveal>
          <Etiqueta n="§05">Pasado el peaje, mano derecha</Etiqueta>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start">
          <Reveal className="min-w-0">
            <div className="border-2 rounded-sm p-5 md:p-7" style={{ borderColor: C.ink, backgroundColor: C.paperHi }}>
              <Senal>{BIZ.address}</Senal>
              <address className="not-italic mt-5 mb-5">
                <p className={`${display.className} font-semibold uppercase leading-tight text-xl md:text-2xl`}>
                  Ruta 5 Sur · {BIZ.city}
                </p>
                <p className="text-sm md:text-base mt-1" style={{ color: C.muted }}>
                  {BIZ.region} · pasado el peaje, hacia el sur
                </p>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${mono.className} inline-block text-sm md:text-base font-bold mt-3 underline underline-offset-4 decoration-2 tap-44`}
                  style={{ color: C.red, textDecorationColor: 'rgba(198,59,34,0.4)' }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="border-t pt-4 flex items-baseline justify-between gap-4" style={{ borderColor: C.line }}>
                <span className={`${display.className} font-semibold uppercase tracking-wide text-base md:text-lg`}>Lunes a viernes</span>
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.senal }}>5:00 – 11:00</span>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: C.line }}>
                <span className={`${display.className} font-semibold uppercase tracking-wide text-base md:text-lg`}>Sábado y domingo</span>
                <span className={`${mono.className} text-sm font-bold`} style={{ color: C.red }}>Cerrado</span>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ad-btn inline-block font-semibold uppercase tracking-wide text-sm md:text-base px-6 py-2.5 mt-6 tap-44`}
                style={{ backgroundColor: C.red, color: C.redInk }}
              >
                Encargar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden border-[3px] rounded-sm min-h-[300px] md:aspect-[4/3]" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] mt-2.5`} style={{ color: C.muted }}>
              Ruta 5 Sur, km del peaje de Retiro — berma mano derecha
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <Perf color="rgba(250,241,221,0.3)" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-semibold uppercase tracking-wide text-xl md:text-2xl mb-1.5`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,241,221,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,241,221,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(250,241,221,0.68)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son los
            reales de la ficha de Google del negocio.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F0B93E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
