import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, CARTA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  paper: '#F7F2E5',
  cream: '#FFFDF6',
  ink: '#211D14',
  green: '#0E3B2C',
  greenDeep: '#092418',
  gold: '#D9A03C',
  goldDark: '#8A6218',
  muted: '#5F5947',
  line: 'rgba(33,29,20,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por
// defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'el-bigote-restaurante',
  title: 'Restaurante El Bigote — El Pollo Mariscal de San Clemente desde 1992',
  description:
    'Restaurante El Bigote en Av. Huamachuco 1973, San Clemente. Comida casera chilena, pailas en greda y su famoso Pollo Mariscal. Todos los días de 8:00 a 19:00. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El plato', href: '#plato' },
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Cómo llegar', href: '#contacto' },
]

function SectionHead({
  index,
  title,
  light = false,
}: {
  index: string
  title: React.ReactNode
  light?: boolean
}) {
  return (
    <div
      className="flex items-end justify-between gap-4 border-t-2 pt-4 mb-9 md:mb-12"
      style={{ borderColor: light ? 'rgba(255,255,255,0.3)' : C.ink }}
    >
      <h2
        className={`${display.className} text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.02]`}
        style={{ color: light ? '#FFFFFF' : C.ink }}
      >
        {title}
      </h2>
      <span
        className={`${display.className} italic shrink-0 text-lg md:text-2xl leading-none pb-1`}
        style={{ color: light ? C.gold : C.goldDark }}
        aria-hidden="true"
      >
        {index}
      </span>
    </div>
  )
}

export default function ElBigotePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .eb-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .eb-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .eb-btn:active { transform: translateY(0) scale(0.97); }
        .eb-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        .eb-btn-light:focus-visible { outline-color: ${C.green}; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(9,36,24,0.95)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.16)',
          btnBg: C.gold,
          btnInk: C.greenDeep,
        }}
      />

      {/* ── Hero: mitad salón, mitad plato ── */}
      <section id="inicio" className="relative flex flex-col lg:flex-row lg:min-h-svh" style={{ backgroundColor: C.greenDeep }}>
        <div className="lg:w-[46%] flex flex-col justify-center px-5 md:px-8 xl:px-14 pt-28 pb-10 lg:pt-32 lg:pb-16">
          <Reveal>
            <p
              className={`${display.className} italic text-base md:text-lg mb-4`}
              style={{ color: C.gold }}
            >
              Av. Huamachuco 1973 · San Clemente
            </p>
            <h1
              className={`${display.className} text-[clamp(2.6rem,6.5vw,5.4rem)] leading-[1.02] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              La casa del
              <br />
              Pollo Mariscal
              <br />
              <span className={`${display.className} italic`} style={{ color: C.gold }}>
                desde 1992
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.86)' }}>
              Comida casera chilena servida en plato de greda, todos los
              días de 8:00 a 19:00. La picada de San Clemente donde se
              come de verdad.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} eb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.gold, color: C.greenDeep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${body.className} eb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative lg:w-[54%] min-h-[46vh] lg:min-h-0">
          <Image
            src={`${IMG}/mariscal.webp`}
            alt="Mariscos servidos en plato de greda en Restaurante El Bigote"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 lg:bg-none"
            style={{ background: 'linear-gradient(180deg, rgba(9,36,24,0.35) 0%, transparent 30%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="eb-btn inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap tap-44"
              style={{ backgroundColor: C.cream, color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.goldDark} className="w-4 h-4" />
              {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
            </a>
          </div>
        </div>
      </section>

      {/* cinta de datos de la ficha */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: C.greenDeep }}
      >
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          <span>Comida casera</span>
          <span>Pailas en greda</span>
          <span>{BIZ.hours}</span>
          <span style={{ color: C.gold }}>sitio de ejemplo</span>
        </div>
      </div>

      {/* ── El plato insignia ── */}
      <section id="plato" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="n° 1 de la casa" title={<>El plato que preguntan por nombre</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <Reveal className="col-span-12 md:col-span-7">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                <Image
                  src={`${IMG}/pollo-mariscal.webp`}
                  alt="Pollo Mariscal: papas doradas sobre salsa de mariscos, plato insignia de El Bigote"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={100}>
                <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: C.ink }}>
                  Pregunta en San Clemente por El Bigote y la respuesta
                  llega sola: el Pollo Mariscal. En la ficha de Google el
                  plato figura con el rótulo «original desde 1992», y los
                  clientes lo repiten en las reseñas una y otra vez.
                </p>
              </Reveal>
              <Reveal delay={160}>
                <blockquote
                  className="border-l-4 pl-5 mb-6"
                  style={{ borderColor: C.gold }}
                >
                  <p className={`${display.className} italic text-xl md:text-2xl leading-snug mb-3`} style={{ color: C.green }}>
                    “El mejor pollo mariscal en la séptima región.”
                  </p>
                  <cite className="not-italic text-xs uppercase tracking-[0.16em] font-bold" style={{ color: C.muted }}>
                    Ricardo Mora · reseña de Google
                  </cite>
                </blockquote>
              </Reveal>
              <Reveal delay={220}>
                <div className="flex flex-wrap gap-x-8 gap-y-4 border-t pt-5" style={{ borderColor: C.line }}>
                  <div>
                    <p className={`${display.className} text-3xl md:text-4xl leading-none`} style={{ color: C.green }}>
                      3,9<span style={{ color: C.goldDark }}>★</span>
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                      en Google
                    </p>
                  </div>
                  <div>
                    <p className={`${display.className} text-3xl md:text-4xl leading-none`} style={{ color: C.green }}>
                      {BIZ.reviews}
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                      reseñas reales
                    </p>
                  </div>
                  <div>
                    <p className={`${display.className} text-3xl md:text-4xl leading-none`} style={{ color: C.green }}>
                      1992
                    </p>
                    <p className="text-xs uppercase tracking-[0.14em] font-bold mt-1" style={{ color: C.muted }}>
                      el mariscal original
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.greenDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead light index="de la cocina" title={<>La carta de todos los días</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <ul className="border-t" style={{ borderColor: 'rgba(255,255,255,0.25)' }}>
                {CARTA.map((p, i) => (
                  <Reveal key={p.name} delay={i * 60}>
                    <li className="py-5 md:py-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.18)' }}>
                      <div className="flex items-baseline gap-4">
                        <span className={`${display.className} italic text-base md:text-lg shrink-0 w-7`} style={{ color: C.gold }} aria-hidden="true">
                          {i + 1}
                        </span>
                        <div>
                          <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`} style={{ color: '#FFFFFF' }}>
                            {p.name}
                            {'badge' in p && p.badge && (
                              <span
                                className={`${body.className} ml-3 align-middle inline-block text-[10px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full`}
                                style={{ backgroundColor: C.gold, color: C.greenDeep }}
                              >
                                {p.badge}
                              </span>
                            )}
                          </h3>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.78)' }}>
                            {p.desc}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="text-xs md:text-sm mt-5 leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
                  Platos publicados en la ficha de Google del restaurante.
                  La carta completa y los precios se preguntan directo en
                  el local o por WhatsApp.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 md:gap-5 content-start">
              <Reveal delay={80} className="col-span-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                  <Image
                    src={`${IMG}/paila.webp`}
                    alt="Paila marina con mariscos servida en mesa de El Bigote"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src={`${IMG}/sarten.webp`}
                    alt="Sartén de carne con huevo frito y chancho en piedra"
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src={`${IMG}/mesa-servida.webp`}
                    alt="Mesa servida con platos de comida casera en El Bigote"
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="a la mesa" title={<>Un salón «muy acogedor»</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.ink }}>
                  Manteles, madera y pailas que llegan humeando a la mesa.
                  Así lo describen quienes pasan por Av. Huamachuco:
                  atención directa, ambiente familiar y porciones de
                  restaurante de camino.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  Abierto todos los días del año de 8:00 a 19:00: desayuno,
                  almuerzo y once en el mismo salón de siempre.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 md:gap-5">
              <Reveal delay={80} className="col-span-7">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Restaurante El Bigote en Av. Huamachuco, San Clemente"
                    fill
                    sizes="(min-width: 1024px) 42vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140} className="col-span-5">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[150px]">
                  <Image
                    src={`${IMG}/entrada.webp`}
                    alt="Entrada del restaurante con barril decorativo"
                    fill
                    sizes="(min-width: 1024px) 26vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200} className="col-span-5">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[150px]">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Salón interior de El Bigote con mural y mesas"
                    fill
                    sizes="(min-width: 1024px) 26vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={260} className="col-span-7">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/barra.webp`}
                    alt="Barra interior del restaurante con banderas decorativas"
                    fill
                    sizes="(min-width: 1024px) 42vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section aria-label="Reseñas de clientes" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="en google" title={<>Lo que dicen los que ya comieron</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-6' : 'md:col-span-3'}`}>
                <figure
                  className="h-full flex flex-col p-6 md:p-7 rounded-2xl border"
                  style={{ backgroundColor: C.paper, borderColor: C.line }}
                >
                  <Stars value={r.estrellas} color={C.goldDark} className="w-4 h-4 mb-4" />
                  <blockquote
                    className={`${i === 0 ? `${display.className} italic text-xl md:text-2xl` : 'text-sm md:text-base font-medium'} leading-relaxed flex-1 mb-5`}
                    style={{ color: C.ink }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.16em] font-bold" style={{ color: C.green }}>
                    {r.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={300} className="col-span-12 md:col-span-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="eb-btn eb-btn-light flex flex-col justify-between h-full min-w-0 overflow-hidden p-6 md:p-7 rounded-2xl tap-44"
                style={{ backgroundColor: C.green, color: '#FFFFFF' }}
              >
                <div>
                  <p className={`${display.className} text-4xl md:text-5xl leading-none mb-2`}>3,9★</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {BIZ.reviews} reseñas en la ficha real de Google
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold mt-6" style={{ color: C.gold }}>
                  Verlas todas →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead light index="todos los días" title={<>Mesa servida en Huamachuco</>} />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className={`${display.className} italic text-2xl md:text-3xl leading-snug mb-7`} style={{ color: C.gold }}>
                  Reserva la mesa o encarga el Pollo Mariscal para llevar.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium space-y-1" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                  <p>{BIZ.hours}</p>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.gold, color: C.greenDeep }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eb-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(255,255,255,0.3)' }}
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
      <footer style={{ backgroundColor: C.greenDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            {BIZ.hours} · WhatsApp {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-10 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
