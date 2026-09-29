import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG, PIZARRA, CARTA_PESCADOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800' }],
})

const C = {
  paper: '#F6EFE0',
  cream: '#FCF8EC',
  ink: '#2E1F12',
  wood: '#4A2E1A',
  woodDeep: '#33200F',
  teja: '#A4471F',
  tejaDark: '#7C3113',
  board: '#232B1E',
  chalk: '#F2ECD9',
  muted: '#6B5A44',
  line: 'rgba(46,31,18,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por
// defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [0, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-casa-de-campo',
  title: 'Casa de Campo Talca — La casona de La Florida',
  description:
    'Casa de Campo Talca en 1 Norte 6: restaurante chileno con carta criolla, pescados y mariscos, empanadas playeras XXL y platos contundentes. 4,3 estrellas en Google. Reserva por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'La carta', href: '#carta' },
  { label: 'La casona', href: '#casona' },
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
      style={{ borderColor: light ? 'rgba(242,236,217,0.35)' : C.ink }}
    >
      <h2
        className={`${display.className} font-semibold text-[clamp(1.9rem,5vw,3.6rem)] leading-[1.02]`}
        style={{ color: light ? C.chalk : C.ink }}
      >
        {title}
      </h2>
      <span
        className={`${display.className} italic shrink-0 text-lg md:text-2xl leading-none pb-1`}
        style={{ color: light ? '#D9B98A' : C.teja }}
        aria-hidden="true"
      >
        {index}
      </span>
    </div>
  )
}

export default function CasaDeCampoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .cc-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .cc-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .cc-btn:active { transform: translateY(0) scale(0.97); }
        .cc-btn:focus-visible { outline: 3px solid ${C.teja}; outline-offset: 3px; }
        .cc-btn-light:focus-visible { outline-color: ${C.wood}; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_MESA}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(51,32,15,0.95)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.16)',
          btnBg: '#F2ECD9',
          btnInk: C.woodDeep,
        }}
      />

      {/* ── Hero: la casona ── */}
      <section id="inicio" className="relative flex flex-col lg:flex-row lg:min-h-svh" style={{ backgroundColor: C.woodDeep }}>
        <div className="lg:w-[46%] flex flex-col justify-center px-5 md:px-8 xl:px-14 pt-28 pb-10 lg:pt-32 lg:pb-16">
          <Reveal>
            <p
              className={`${display.className} italic font-medium text-base md:text-lg mb-4`}
              style={{ color: '#E8C98F' }}
            >
              1 Norte 6 · Talca
            </p>
            <h1
              className={`${display.className} font-semibold text-[clamp(2.6rem,6.5vw,5.4rem)] leading-[1.02] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              La casona de
              <br />
              <span className={`${display.className} italic font-medium`} style={{ color: '#E8C98F' }}>
                La Florida
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Restaurante chileno de carta criolla: pescados y mariscos,
              platos contundentes y empanadas playeras XXL para llevar.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} cc-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: '#E8C98F', color: C.woodDeep }}
              >
                Reservar por WhatsApp
              </a>
              <a
                href="#pizarra"
                className={`${body.className} cc-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
              >
                Ver la pizarra
              </a>
            </div>
          </Reveal>
        </div>
        <div className="relative lg:w-[54%] min-h-[46vh] lg:min-h-0">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Fachada de madera de Casa de Campo Talca, restaurante La Florida"
            fill
            priority
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(51,32,15,0.35) 0%, transparent 30%)' }}
            aria-hidden="true"
          />
          <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cc-btn inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap tap-44"
              style={{ backgroundColor: C.cream, color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.tejaDark} className="w-4 h-4" />
              {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
            </a>
          </div>
        </div>
      </section>

      {/* cinta de datos de la ficha */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.2)', backgroundColor: C.woodDeep }}
      >
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1 text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold"
          style={{ color: 'rgba(255,255,255,0.85)' }}
        >
          <span>Restaurante chileno</span>
          <span>{BIZ.reviews} reseñas en Google</span>
          <span>Empanadas playeras XXL</span>
          <span style={{ color: '#E8C98F' }}>sitio de ejemplo</span>
        </div>
      </div>

      {/* ── La pizarra del día ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.board }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead light index="escrita a tiza" title={<>La pizarra del día</>} />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="lg:col-span-7">
              <ul className="border-t" style={{ borderColor: 'rgba(242,236,217,0.3)' }}>
                {PIZARRA.map((p, i) => (
                  <Reveal key={p.name} delay={i * 50}>
                    <li
                      className="py-4 md:py-5 border-b flex items-baseline justify-between gap-4"
                      style={{ borderColor: 'rgba(242,236,217,0.18)' }}
                    >
                      <h3
                        className={`${display.className} font-medium text-xl md:text-3xl`}
                        style={{ color: C.chalk }}
                      >
                        {p.name}
                      </h3>
                      <span
                        className={`${display.className} italic text-lg md:text-2xl shrink-0`}
                        style={{ color: '#E8C98F' }}
                      >
                        {p.price}
                      </span>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="text-xs md:text-sm mt-5 leading-relaxed" style={{ color: 'rgba(242,236,217,0.7)' }}>
                  Pizarra real del local. Los platos del día cambian y se
                  confirman directo en el restaurante o por WhatsApp.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={120} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border-4 aspect-[3/4] min-h-[320px]"
                  style={{ borderColor: '#5A4027' }}
                >
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="Pizarra a tiza de Casa de Campo con la carta del día y sus precios"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta: pescados y mariscos ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="de la carta impresa" title={<>Pescados y mariscos</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10">
            <div className="col-span-12 lg:col-span-6">
              <ul className="border-t" style={{ borderColor: C.line }}>
                {CARTA_PESCADOS.map((p, i) => (
                  <Reveal key={p.name} delay={i * 60}>
                    <li className="py-5 md:py-6 border-b" style={{ borderColor: C.line }}>
                      <div className="flex items-baseline gap-4">
                        <span className={`${display.className} italic text-base md:text-lg shrink-0 w-7`} style={{ color: C.teja }} aria-hidden="true">
                          {i + 1}
                        </span>
                        <div className="flex-1 flex items-baseline justify-between gap-4">
                          <h3 className={`${display.className} font-semibold text-xl md:text-2xl`} style={{ color: C.ink }}>
                            {p.name}
                          </h3>
                          <span className={`${display.className} italic text-lg md:text-xl shrink-0`} style={{ color: C.tejaDark }}>
                            {p.price}
                          </span>
                        </div>
                      </div>
                    </li>
                  </Reveal>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className="text-xs md:text-sm mt-5 leading-relaxed" style={{ color: C.muted }}>
                  Precios de la carta impresa del local (foto de su ficha
                  de Google). La carta completa —ensaladas, menú kids,
                  bebidas y vinos— se ve en la casona.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-6 grid grid-cols-2 gap-4 md:gap-5 content-start">
              <Reveal delay={80} className="col-span-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                  <Image
                    src={`${IMG}/reineta.webp`}
                    alt="Reineta frita con papas fritas y pan, servida en Casa de Campo Talca"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src={`${IMG}/mechada.webp`}
                    alt="Mechada con ensalada surtida, pepino, betarraga y limón"
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="relative overflow-hidden rounded-2xl aspect-square">
                  <Image
                    src={`${IMG}/costillar.webp`}
                    alt="Corte de carne a la parrilla con puré en Casa de Campo"
                    fill
                    sizes="(min-width: 1024px) 24vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={240} className="col-span-2">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
                  <Image
                    src={`${IMG}/prietas.webp`}
                    alt="Prietas con papas doradas y orégano, plato criollo de la casa"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Empanadas playeras ── */}
      <section aria-label="Empanadas playeras XXL" style={{ backgroundColor: C.teja }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <Reveal className="flex-1">
              <p className="text-xs uppercase tracking-[0.2em] font-bold mb-3" style={{ color: 'rgba(255,255,255,0.8)' }}>
                El pendón de la entrada
              </p>
              <h2
                className={`${display.className} font-semibold text-[clamp(1.8rem,4.5vw,3rem)] leading-[1.05] mb-4`}
                style={{ color: '#FFFFFF' }}
              >
                Empanadas playeras XXL desde $1.500
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(255,255,255,0.9)' }}>
                El letrero de la puerta las anuncia: base de queso con
                jaiba, con ostiones o la de pino con carne de vacuno que
                se encarga para el fin de semana. Se piden por WhatsApp.
              </p>
            </Reveal>
            <Reveal delay={120} className="shrink-0">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="cc-btn inline-flex font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                style={{ backgroundColor: C.cream, color: C.tejaDark }}
              >
                Encargar empanadas
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La casona ── */}
      <section id="casona" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="adentro" title={<>Madera, teja y mesa servida</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            <div className="col-span-12 lg:col-span-4">
              <Reveal>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.ink }}>
                  Una casona de verdad: muro de piedra, madera a la vista
                  y el letrero de siempre en 1 Norte. Las reseñas la
                  describen como «muy acogedora», con platos que llegan
                  calientes a la mesa.
                </p>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  En días festivos se hace fila para entrar — los
                  clientes lo anotan como dato, no como queja.
                </p>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-12 gap-4 md:gap-5">
              <Reveal delay={80} className="col-span-7">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Salón interior de Casa de Campo con muro de piedra y mesas"
                    fill
                    sizes="(min-width: 1024px) 42vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={140} className="col-span-5">
                <div className="relative overflow-hidden rounded-2xl h-full min-h-[150px]">
                  <Image
                    src={`${IMG}/casona.webp`}
                    alt="Entrada de la casona con pendón de empanadas playeras XXL y WhatsApp"
                    fill
                    sizes="(min-width: 1024px) 26vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal delay={200} className="col-span-12">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
                  <Image
                    src={`${IMG}/carta.webp`}
                    alt="Carta impresa de Casa de Campo con pescados, mariscos, ensaladas y vinos"
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section aria-label="Reseñas de clientes" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead index="en google" title={<>Lo que dicen los que ya comieron</>} />
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-6' : 'md:col-span-3'}`}>
                <figure
                  className="h-full flex flex-col p-6 md:p-7 rounded-2xl border"
                  style={{ backgroundColor: C.cream, borderColor: C.line }}
                >
                  <Stars value={r.estrellas} color={C.tejaDark} className="w-4 h-4 mb-4" />
                  <blockquote
                    className={`${i === 0 ? `${display.className} italic font-medium text-xl md:text-2xl` : 'text-sm md:text-base font-medium'} leading-relaxed flex-1 mb-5`}
                    style={{ color: C.ink }}
                  >
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="text-xs uppercase tracking-[0.16em] font-bold" style={{ color: C.teja }}>
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
                className="cc-btn cc-btn-light flex flex-col justify-between h-full min-w-0 overflow-hidden p-6 md:p-7 rounded-2xl tap-44"
                style={{ backgroundColor: C.wood, color: '#FFFFFF' }}
              >
                <div>
                  <p className={`${display.className} font-semibold text-4xl md:text-5xl leading-none mb-2`}>4,3★</p>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {BIZ.reviews} reseñas en la ficha real de Google
                  </p>
                </div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold mt-6" style={{ color: '#E8C98F' }}>
                  Verlas todas →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.wood }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead light index="en talca" title={<>A una cuadra de la Alameda</>} />
          </Reveal>
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className={`${display.className} italic font-medium text-2xl md:text-3xl leading-snug mb-7`} style={{ color: '#E8C98F' }}>
                  Reserva la mesa o encarga las empanadas para el fin de semana.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-8 font-medium space-y-1" style={{ color: 'rgba(255,255,255,0.92)' }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                  <p>Teléfono {BIZ.landline} · WhatsApp {BIZ.phoneDisplay}</p>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MESA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cc-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: '#E8C98F', color: C.woodDeep }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cc-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
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
      <footer style={{ backgroundColor: C.woodDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-semibold text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            Tel {BIZ.landline} · WhatsApp {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-10 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#E8C98F' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
