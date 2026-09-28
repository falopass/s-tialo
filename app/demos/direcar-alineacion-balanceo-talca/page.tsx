import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_HORA, MAPS_URL, MAPS_EMBED, IMG, HORAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

const C = {
  paper: '#F4F4F2',
  card: '#FFFFFF',
  ink: '#1E2023',
  inkSoft: '#2A2D30',
  muted: '#5C6267',
  line: 'rgba(30,32,35,0.16)',
  lineSoft: 'rgba(30,32,35,0.10)',
  yellow: '#F2B90D',
  // Latón oscuro para texto sobre papel: #B8860B daba 2.96:1 (baja de 4.5).
  yellowDeep: '#8A5A00',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'direcar-alineacion-balanceo-talca',
  title: 'Direcar — Alineación y balanceo en Talca',
  description: 'Taller de alineación, balanceo y tren delantero en Calle 9 1/2 Ote., Talca. 4,8 sobre 140 reseñas. Agenda tu hora por WhatsApp.',
  image: `${IMG}/suburban-rack.webp`,
})

const NAV_LINKS = [
  { label: 'La pega', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Clientes', href: '#resenas' },
  { label: 'Horario', href: '#contacto' },
]

const SERVICIOS = [
  {
    code: '01 / ALI',
    title: 'Alineación',
    desc: 'Volante centrado, desgaste parejo de neumáticos y el auto volviendo derecho. La pega estrella: donde otros tres talleres no llegaron, acá detectaron la pieza exacta.',
    src: `${IMG}/alineacion.webp`,
    alt: 'Auto sedán sobre el elevador de alineación con las pinzas de medición en las ruedas',
  },
  {
    code: '02 / BAL',
    title: 'Balanceo',
    desc: 'Ruedas equilibradas para que nada vibre en autopista. Se acompaña con neumáticos: compra, cambio y rotación según el estado de cada llanta.',
    src: `${IMG}/neumaticos.webp`,
    alt: 'Sedán blanco en el elevador del taller con pilas de neumáticos al frente',
  },
  {
    code: '03 / TREN',
    title: 'Tren delantero',
    desc: 'Diagnóstico de terminales, rótulas y suspensión antes de tocar nada: informan lo que tiene el auto y lo que necesita antes de empezar el trabajo.',
    src: `${IMG}/tren-delantero.webp`,
    alt: 'Vista inferior de un auto en el elevador mostrando la suspensión y el tren delantero',
  },
]

const GALERIA = [
  { src: `${IMG}/taller.webp`, alt: 'Interior del taller Direcar: dos autos en elevadores y estanterías de neumáticos', span: 'md:col-span-7', ratio: 'aspect-[16/10]' },
  { src: `${IMG}/camaro.webp`, alt: 'Camaro rojo clásico recibiendo servicio en el elevador', span: 'md:col-span-5', ratio: 'aspect-[16/13]' },
  { src: `${IMG}/auxilio.webp`, alt: 'Camioneta en la calle con el neumático de repuesto recién instalado', span: 'md:col-span-5', ratio: 'aspect-[16/13]' },
  { src: `${IMG}/suburban-rack.webp`, alt: 'SUV blanco sobre el rack de alineación del taller', span: 'md:col-span-7', ratio: 'aspect-[16/10]' },
]

export default function DirecarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .dc-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .dc-btn:hover { transform: translateY(-2px); filter: brightness(0.94); }
        .dc-btn:active { transform: translateY(0) scale(0.97); }
        .dc-btn:focus-visible { outline: 3px solid ${C.ink}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,244,242,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: '#F4F4F2',
        }}
      />

      {/* ── Hero: titular a la izquierda, taller a la derecha ── */}
      <section id="inicio" className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[104px] pb-10 md:pb-14">
          <div className="grid grid-cols-12 gap-8 md:gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-between">
              <Reveal>
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-6 border-b pb-3`}
                  style={{ color: C.muted, borderColor: C.line }}
                >
                  {BIZ.sub} · {BIZ.city}
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.95] text-[clamp(3rem,9vw,7rem)] mb-6`}
                >
                  Tu auto
                  <br />
                  a{' '}
                  <span className="relative inline-block">
                    <span className="absolute inset-x-[-0.06em] top-[0.06em] bottom-[0.04em] -z-10" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                    escuadra
                  </span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-md mb-8 font-medium" style={{ color: C.muted }}>
                  Taller de alineación, balanceo y tren delantero en Talca.
                  4,8 sobre 140 reseñas en Google: se pide hora porque el
                  piso está lleno.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_HORA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} dc-btn uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 tap-44`}
                    style={{ backgroundColor: C.ink, color: C.yellow }}
                  >
                    Pedir hora por WhatsApp
                  </a>
                  <a
                    href="#servicios"
                    className={`${display.className} dc-btn uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 hover:bg-black/5 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la pega
                  </a>
                </div>
              </Reveal>
              <Reveal delay={180}>
                <div className={`${mono.className} mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.16em] border-t pt-4`} style={{ color: C.muted, borderColor: C.line }}>
                  <span>{BIZ.rating} en Google</span>
                  <span>{BIZ.reviews} reseñas</span>
                  <span>Lun a vie, cerrado finde</span>
                </div>
              </Reveal>
            </div>
            <Reveal className="col-span-12 lg:col-span-6" delay={120}>
              <div className="relative h-full min-h-[320px] lg:min-h-[520px] overflow-hidden border" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/suburban-rack.webp`}
                  alt="SUV blanco sobre el rack de alineación dentro del taller Direcar"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
                <div
                  className={`${mono.className} absolute left-0 bottom-0 flex items-center gap-2.5 px-3.5 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.12em]`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  El rack, en Talca
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios: órdenes de trabajo ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] mb-4`}>
            La pega, como se escribe en la orden
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium" style={{ color: C.muted }}>
            Tres frentes cubren el 90% de lo que entra al taller. Todo se
            diagnóstica antes de cobrar: el cliente sabe qué tiene el auto
            antes de que empiece el trabajo.
          </p>
        </Reveal>
        <ul>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.code} delay={i * 90}>
              <li className="grid grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 border-t" style={{ borderColor: C.line }}>
                <p className={`${mono.className} col-span-12 md:col-span-2 text-[11px] font-bold uppercase tracking-[0.2em] pt-2`} style={{ color: C.yellowDeep }}>
                  {s.code}
                </p>
                <div className="col-span-12 md:col-span-5">
                  <h3 className={`${display.className} uppercase text-2xl md:text-4xl mb-3`}>{s.title}</h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {s.desc}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="relative overflow-hidden border aspect-[16/9]" style={{ borderColor: C.line }}>
                    <Image
                      src={s.src}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── El taller: grilla bento de fotos ── */}
      <section id="taller" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] mb-4`}>
              Dos elevadores, nada de mostrador
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-2xl mb-12 font-medium" style={{ color: C.muted }}>
              Fotos de la ficha real del taller en Calle 9 1/2 Oriente:
              el rack de alineación, los elevadores y los autos que pasan
              por ahí a diario.
            </p>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-7">
            {GALERIA.map((g, i) => (
              <Reveal key={g.src} className={`col-span-12 ${g.span}`} delay={i * 80}>
                <div className={`relative overflow-hidden border ${g.ratio}`} style={{ borderColor: C.line }}>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clientes ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-6 mb-12 border-b pb-8" style={{ borderColor: C.line }}>
            <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95]`}>
              Lo que dicen
              <br />
              los que ya fueron
            </h2>
            <div className={`${mono.className} flex items-baseline gap-3 pb-1`}>
              <span className={`${display.className} text-6xl md:text-7xl leading-none`}>{BIZ.rating}</span>
              <span className="text-[11px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                / {BIZ.reviews} reseñas
              </span>
            </div>
          </div>
        </Reveal>
        <div className="space-y-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="border" style={{ borderColor: C.line, backgroundColor: C.card }}>
                <div className={`${mono.className} flex flex-wrap items-center justify-between gap-3 px-5 md:px-7 py-3 border-b border-dashed`} style={{ borderColor: C.line }}>
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em]" style={{ color: C.ink }}>
                    {r.name}
                  </span>
                  <Stars value={r.stars} color={C.yellowDeep} className="w-4 h-4" />
                </div>
                <blockquote className="px-5 md:px-7 py-6 text-sm md:text-base leading-relaxed font-medium" style={{ color: C.inkSoft }}>
                  “{r.text}”
                </blockquote>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-8 text-xs font-bold uppercase tracking-[0.18em] underline underline-offset-4 tap-44`}
            style={{ color: C.ink }}
          >
            Ficha completa en Google →
          </a>
        </Reveal>
      </section>

      {/* ── Horario y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-14 items-stretch">
            <div className="col-span-12 lg:col-span-5 min-w-0">
              <Reveal>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5 border-b pb-3`} style={{ color: C.yellow, borderColor: 'rgba(244,244,242,0.2)' }}>
                  Orden de atención
                </p>
                <h2 className={`${display.className} uppercase text-[clamp(2.4rem,6vw,4.8rem)] leading-[0.95] mb-8`} style={{ color: C.paper }}>
                  Se trabaja
                  <br />
                  <span style={{ color: C.yellow }}>con hora</span>
                </h2>
                <ul className="divide-y mb-8" style={{ borderColor: 'rgba(244,244,242,0.2)' }}>
                  {HORAS.map((h) => (
                    <li key={h.d} className="py-3.5 flex items-baseline justify-between gap-4" style={{ borderColor: 'rgba(244,244,242,0.2)' }}>
                      <span className="text-sm md:text-base font-semibold" style={{ color: C.paper }}>{h.d}</span>
                      <span className={`${mono.className} text-sm`} style={{ color: h.h === 'Cerrado' ? C.yellow : 'rgba(244,244,242,0.62)' }}>
                        {h.h}
                      </span>
                    </li>
                  ))}
                </ul>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium" style={{ color: 'rgba(244,244,242,0.85)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
                </address>
                <a
                  href={WA_LINK_HORA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} dc-btn inline-block uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.ink }}
                >
                  Pedir hora por WhatsApp
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7 min-w-0">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[280px]" style={{ borderColor: 'rgba(244,244,242,0.3)' }}>
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
      <footer style={{ backgroundColor: '#141517' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2`} style={{ color: C.paper }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,244,242,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,244,242,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,244,242,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos, las reseñas y las fotos son reales
            y salen de su ficha de Google; las tarifas se cotizan por
            WhatsApp.{' '}
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
