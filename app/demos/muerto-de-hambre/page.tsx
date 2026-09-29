import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_RESERVA,
  MAPS_EMBED,
  IMG,
  CARTA,
  HORARIO,
  RESENAS,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})
const monoBold = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
})

const C = {
  carbon: '#171009',
  madera: '#241A10',
  madera2: '#2E2114',
  hueso: '#F4E9CF',
  brasa: '#E0A03A',
  rojo: '#B33A28',
  muted: 'rgba(244,233,207,0.74)',
  line: 'rgba(244,233,207,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala estándar de Tailwind.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'muerto-de-hambre',
  title: 'Muerto de Hambre Restobar — Cantina de campo en San Clemente',
  description:
    'Restobar en Humberto Silva 356, San Clemente. Comida casera, mariscal caliente, pollo asado y terraza. 4,3 estrellas en Google con 225 reseñas.',
  image: `${IMG}/letrero.webp`,
})

const NAV_LINKS = [
  { label: 'La cantina', href: '#cantina' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'El fogón', href: '#fogon' },
  { label: 'Cómo llegar', href: '#punto' },
]

const RISTRA = [
  'Mariscal caliente',
  'Pollo asado',
  'Cazuela de cerdo',
  'Pastel de choclo',
  'Lomo a lo pobre',
  'Salmón al plato',
]

const FOTOS = [
  {
    src: `${IMG}/parrilla.webp`,
    alt: 'Parrilla encendida del restobar con carne y choripanes al fuego',
    tag: 'El fuego',
  },
  {
    src: `${IMG}/pastel.webp`,
    alt: 'Pastel de choclo servido en plato de greda',
    tag: 'El plato insignia',
  },
  {
    src: `${IMG}/terraza.webp`,
    alt: 'Terraza techada del restobar con mesas de madera',
    tag: 'La terraza',
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Mesa servida del restobar con platos caseros',
    tag: 'La mesa puesta',
  },
]

function Estrella({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.4 6.6 7.1.3-5.6 4.5 1.9 6.9-5.8-3.9-5.8 3.9 1.9-6.9L2.5 8.9l7.1-.3z" />
    </svg>
  )
}

function RayaSeccion({ num, titulo }: { num: string; titulo: string }) {
  return (
    <div className="mb-8 md:mb-12">
      <p
        className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3 flex items-center gap-3`}
        style={{ color: C.brasa }}
      >
        <Estrella className="w-3.5 h-3.5" />
        {num}
      </p>
      <h2
        className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,8vw,5rem)]`}
        style={{ color: C.hueso }}
      >
        {titulo}
      </h2>
      <div
        className="mt-5 h-[3px] w-24"
        style={{ backgroundColor: C.rojo }}
        aria-hidden="true"
      />
    </div>
  )
}

export default function MuertoDeHambrePage() {
  return (
    <main
      className={`${body.className} min-h-screen`}
      style={{ backgroundColor: C.carbon, color: C.hueso, ...SPACING }}
    >
      <BlitzNav
        name={<span className="uppercase tracking-wide">Muerto de Hambre</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,16,9,0.94)',
          ink: C.hueso,
          line: C.line,
          btnBg: C.brasa,
          btnInk: '#171009',
        }}
      />

      {/* ── Hero — el letrero de la cantina ── */}
      <section
        id="inicio"
        className="relative overflow-hidden pt-32 md:pt-40 pb-14 md:pb-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(46,33,20,0.55) 0px, rgba(46,33,20,0.55) 2px, transparent 2px, transparent 90px), linear-gradient(180deg, #1C130B 0%, #171009 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-6`}
                style={{ color: C.brasa }}
              >
                Restobar · San Clemente, Maule
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1
                className={`${display.className} uppercase leading-[0.92] text-[clamp(3.2rem,12vw,7.5rem)]`}
              >
                Muerto
                <br />
                <span style={{ color: C.brasa }}>de hambre</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p
                className="mt-6 text-base md:text-lg leading-relaxed max-w-md"
                style={{ color: C.muted }}
              >
                La cantina de campo de Humberto Silva: comida casera, fogón
                prendido y un letrero tallado a mano que ya es parte del pueblo.
                Comida real, en la ruta ufológica del Maule.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] tap-44 transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: C.brasa, color: '#171009', borderRadius: '4px' }}
                >
                  Reservar mesa
                </a>
                <a
                  href="#pizarra"
                  className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] border tap-44 transition-colors hover:bg-white/5"
                  style={{ borderColor: C.line, color: C.hueso, borderRadius: '4px' }}
                >
                  Ver la pizarra
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-8 flex items-center gap-3">
                <Stars value={4.3} color={C.brasa} />
                <span className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </Reveal>
          </div>

          {/* El letrero real, colgado */}
          <Reveal delay={200}>
            <figure className="relative" style={{ transform: 'rotate(1.5deg)' }}>
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-[70%] h-[14px]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(224,160,58,0.5) 0px, rgba(224,160,58,0.5) 1px, transparent 1px, transparent 14px)',
                }}
                aria-hidden="true"
              />
              <div
                className="relative border-4 overflow-hidden shadow-2xl"
                style={{ borderColor: '#3A2A18', borderRadius: '6px' }}
              >
                <Image
                  src={`${IMG}/letrero.webp`}
                  alt="Letrero de madera tallada de Muerto de Hambre Restobar, con su personaje western"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto"
                />
              </div>
              <figcaption
                className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mt-3 text-center`}
                style={{ color: C.muted }}
              >
                El letrero real, tallado en madera
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La ristra — faja de platos ── */}
      <section
        className="py-4 overflow-hidden"
        style={{ backgroundColor: C.brasa, transform: 'rotate(-0.6deg)', margin: '0 -8px' }}
        aria-label="Platos de la casa"
      >
        <ul className="flex flex-wrap justify-center gap-x-8 gap-y-1.5 px-6">
          {RISTRA.map((p) => (
            <li
              key={p}
              className={`${display.className} uppercase text-sm md:text-base tracking-[0.08em] flex items-center gap-3`}
              style={{ color: '#171009' }}
            >
              <Estrella className="w-3 h-3" />
              {p}
            </li>
          ))}
        </ul>
      </section>

      {/* ── La cantina ── */}
      <section id="cantina" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <RayaSeccion num="01 · La cantina" titulo="Casa de comidas en la ruta ufológica" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <div className="border-4 overflow-hidden" style={{ borderColor: '#3A2A18', borderRadius: '6px' }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Muerto de Hambre Restobar en Humberto Silva, San Clemente"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </Reveal>
            <div>
              <Reveal delay={80}>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.muted }}>
                  San Clemente se recorre por la Ruta Ufológica del Maule, y en
                  plena calle Humberto Silva aparece este restobar de letrero
                  tallado. Adentro: salón con aire acondicionado, mesas de
                  madera y una terraza techada para cuando aprieta el calor.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <ul className="space-y-4">
                  {[
                    { k: 'Comida casera y variada', v: 'Carnes, pescados, mariscos y los platos de siempre.' },
                    { k: 'Interior o terraza', v: 'Dos ambientes para servirse, confirmado por sus clientes.' },
                    { k: 'Precios de cantina', v: 'El 1/4 de pollo asado sale $6.750 en su carta.' },
                  ].map((f) => (
                    <li key={f.k} className="flex gap-4 items-start">
                      <span className="mt-1 shrink-0" style={{ color: C.rojo }}>
                        <Estrella />
                      </span>
                      <div>
                        <p className="font-bold text-base" style={{ color: C.hueso }}>{f.k}</p>
                        <p className="text-sm mt-0.5" style={{ color: C.muted }}>{f.v}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La pizarra — carta real con precios ── */}
      <section
        id="pizarra"
        className="py-16 md:py-24 scroll-mt-20"
        style={{ backgroundColor: C.madera }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <RayaSeccion num="02 · La pizarra" titulo="Precios de su carta real" />
          <Reveal>
            <div
              className="border-2 p-6 md:p-10"
              style={{ borderColor: '#4A3820', backgroundColor: '#1C1409', borderRadius: '8px' }}
            >
              <ul className="grid md:grid-cols-2 gap-x-12">
                {CARTA.map((item) => (
                  <li
                    key={item.plato}
                    className="flex items-baseline gap-2 py-3.5 border-b"
                    style={{ borderColor: 'rgba(244,233,207,0.12)' }}
                  >
                    <span className={`${mono.className} text-sm md:text-base`} style={{ color: C.hueso }}>
                      {item.plato}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted mx-2 translate-y-[-3px]"
                      style={{ borderColor: 'rgba(244,233,207,0.3)' }}
                      aria-hidden="true"
                    />
                    <span
                      className={`${monoBold.className} text-sm md:text-base whitespace-nowrap`}
                      style={{ color: C.brasa }}
                    >
                      {item.precio}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-6 text-center`}
                style={{ color: C.muted }}
              >
                Carta publicada en su menú online · puede variar en el local
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex justify-center">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] tap-44 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.rojo, color: C.hueso, borderRadius: '4px' }}
              >
                Consultar la carta de hoy
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El fogón — galería real ── */}
      <section id="fogon" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <RayaSeccion num="03 · El fogón" titulo="Lo que sale de la cocina" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {FOTOS.map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure
                  className="border-4 overflow-hidden"
                  style={{
                    borderColor: '#3A2A18',
                    borderRadius: '6px',
                    transform: `rotate(${i % 2 === 0 ? -1.2 : 1.2}deg)`,
                  }}
                >
                  <Image
                    src={f.src}
                    alt={f.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover aspect-[4/3]"
                  />
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.16em] py-2.5 text-center`}
                    style={{ backgroundColor: '#241A10', color: C.muted }}
                  >
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La palabra — reseñas reales ── */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: C.madera }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <RayaSeccion num="04 · La palabra" titulo="Lo que dice la mesa" />
          <div className="grid md:grid-cols-2 gap-5 md:gap-8">
            {RESENAS.map((r) => (
              <Reveal key={r.autor}>
                <figure
                  className="p-6 md:p-8 border-l-4 h-full"
                  style={{ backgroundColor: '#1C1409', borderColor: C.brasa }}
                >
                  <div className="mb-4">
                    <Stars value={r.estrellas} color={C.brasa} />
                  </div>
                  <blockquote
                    className="text-base md:text-lg leading-relaxed mb-5"
                    style={{ color: C.hueso }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`}
                    style={{ color: C.brasa }}
                  >
                    {r.autor} · {r.cuando} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <p className={`${mono.className} text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                {BIZ.rating} de 5 · {BIZ.reviews} reseñas en Google · {BIZ.fbSeguidores} seguidores en Facebook
              </p>
              <a
                href={BIZ.mapsPlaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-[0.08em] underline underline-offset-4 tap-44"
                style={{ color: C.hueso }}
              >
                Ver la ficha real →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El punto — cómo llegar ── */}
      <section id="punto" className="py-16 md:py-24 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <RayaSeccion num="05 · El punto" titulo="Humberto Silva 356, San Clemente" />
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <Reveal>
                <ul className="space-y-1.5 mb-6">
                  {HORARIO.map((h) => (
                    <li
                      key={h.d}
                      className={`${mono.className} flex gap-4 text-xs md:text-sm uppercase tracking-[0.1em]`}
                    >
                      <span className="w-40 shrink-0" style={{ color: C.muted }}>{h.d}</span>
                      <span style={{ color: C.hueso }}>{h.h}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
                  Horario referencial según su ficha publicada — confirma por
                  WhatsApp antes de salir, sobre todo fines de semana.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_RESERVA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] tap-44 transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: C.brasa, color: '#171009', borderRadius: '4px' }}
                  >
                    WhatsApp
                  </a>
                  <a
                    href={BIZ.fb}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-11 px-6 text-sm font-bold uppercase tracking-[0.08em] border tap-44 transition-colors hover:bg-white/5"
                    style={{ borderColor: C.line, color: C.hueso, borderRadius: '4px' }}
                  >
                    Facebook
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={160}>
              <div
                className="relative border-4 overflow-hidden aspect-[4/3]"
                style={{ borderColor: '#3A2A18', borderRadius: '6px' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line, backgroundColor: '#120C06' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className={`${display.className} uppercase text-xl leading-tight`} style={{ color: C.hueso }}>
                Muerto de Hambre
              </p>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}, Maule
              </p>
            </div>
            <div className="flex gap-6">
              <a href={BIZ.mapsPlaceUrl} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 tap-44" style={{ color: C.hueso }}>
                Google Maps
              </a>
              <a href={BIZ.fb} target="_blank" rel="noopener noreferrer" className="text-sm underline underline-offset-4 tap-44" style={{ color: C.hueso }}>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
