import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_ENCARGO, MAPS_URL, MAPS_EMBED, HOURS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/prata/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' }],
})

const C = {
  cream: '#FAF2E0',
  papel: '#FFF9EC',
  ink: '#2A1B10',
  cocoa: '#4A2E18',
  sello: '#F2B705',
  miel: '#8A5A0B',
  line: 'rgba(42,27,16,0.14)',
  muted: 'rgba(42,27,16,0.66)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A5A0B]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A5A0B]'

export const metadata: Metadata = demoMetadata({
  slug: 'pasteleria-paris-talca',
  title: 'Pastelería Paris · Pastelería artesanal en 2 y 3 Norte, Talca',
  description:
    'Pastelería artesanal en 24 Oriente 1381, sector 2 y 3 Norte de Talca: pie de limón, brazos de reina, empolvados y tortas por encargo. 4.9 estrellas en Google. Pedidos por WhatsApp.',
  image: `${IMG}/hero-pie-limon.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Encargos', href: '#encargos' },
  { label: 'Dónde', href: '#donde' },
]

// Productos vistos en las fotos reales de su Instagram
const VITRINA = [
  { src: `${IMG}/torta-hojarasca.webp`, alt: 'Torta de hojarasca con manjar de Pastelería Paris', name: 'Torta de hoja manjar', tag: 'la favorita' },
  { src: `${IMG}/trufas.webp`, alt: 'Trufas de chocolate con mostacillas de Pastelería Paris', name: 'Trufas', tag: 'del día' },
  { src: `${IMG}/cocadas.webp`, alt: 'Cocadas con llovizna de chocolate de Pastelería Paris', name: 'Cocadas', tag: 'del día' },
  { src: `${IMG}/berlines.webp`, alt: 'Berlines rellenos con crema pastelera de Pastelería Paris', name: 'Berlines', tag: 'con crema' },
  { src: `${IMG}/galletas-mermelada.webp`, alt: 'Galletas con mermelada de Pastelería Paris', name: 'Galletas con mermelada', tag: 'del día' },
  { src: `${IMG}/brownie.webp`, alt: 'Brownie de chocolate con nuez de Pastelería Paris', name: 'Brownie', tag: 'con nuez' },
]

// Reseñas reales de la ficha de Google (textos en español)
const REVIEWS = [
  {
    name: 'Catherine Muñoz',
    text: 'Lo mejor en pastelería de Talca. Los conocí por sus exquisitos brazos de reina… me volví adicta a los empolvados y ahora a sus tortas de hoja manjar.',
  },
  {
    name: 'Salvador Lavagnino',
    text: 'La mejor pastelería de Talca: los mejores brazos de reina, pie de limón y pan francés.',
  },
  {
    name: 'Chammysu',
    text: 'Los queques son maravillosos, todo muy fresco y sabroso.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: C.miel }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

// Rejilla de horno: patrón de fondo del hero
function Rejilla() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(42,27,16,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(42,27,16,0.055) 1px, transparent 1px)',
        backgroundSize: '34px 34px',
        maskImage: 'linear-gradient(180deg, black 0%, transparent 85%)',
        WebkitMaskImage: 'linear-gradient(180deg, black 0%, transparent 85%)',
      }}
    />
  )
}

// Sello circular que evoca el logo amarillo de la pastelería
function Sello({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`rounded-full flex flex-col items-center justify-center text-center select-none ${className}`}
      style={{ backgroundColor: C.sello, color: C.ink, boxShadow: '0 10px 30px rgba(42,27,16,0.22)' }}
    >
      <span className={`${display.className} text-2xl md:text-3xl leading-none`}>P</span>
      <span className={`${mono.className} text-[8px] md:text-[9px] uppercase tracking-[0.18em] font-semibold mt-1`}>
        Paris · Talca
      </span>
    </div>
  )
}

export default function PasteleriaParisPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(250,242,224,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.ink,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero: la vitrina del barrio ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.cream }}>
        <Rejilla />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Pastelería artesanal · 2 y 3 Norte · Talca</Eyebrow>
            <h1
              className={`${display.className} leading-[1.06] tracking-[-0.01em] text-[clamp(2.3rem,7.5vw,4.4rem)] mb-6`}
            >
              El amarillo dulce de{' '}
              <span style={{ color: C.miel }}>2 y 3 Norte</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Pastelería Paris hornea a diario en 24 Oriente: pie de limón,
              brazos de reina, empolvados y las tortas de hoja manjar que el
              barrio encarga para sus cumpleaños.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} ${BTN_SOLID} text-sm md:text-base px-7 py-3 tap-44`}
                style={{ backgroundColor: C.ink, color: C.cream }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#vitrina"
                className={`${display.className} ${BTN_GHOST} text-sm md:text-base px-7 py-3 tap-44`}
                style={{ borderColor: 'rgba(42,27,16,0.4)', color: C.ink }}
              >
                Ver la vitrina
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A5A0B]"
              style={{ color: C.ink }}
            >
              <Stars value={BIZ.rating} color={C.miel} className="w-[14px] h-[14px]" />
              {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas en Google
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div
                className="relative rounded-[2rem] overflow-hidden rotate-1"
                style={{ boxShadow: '0 24px 60px rgba(42,27,16,0.25)', border: `6px solid ${C.papel}` }}
              >
                <div className="relative aspect-[4/5] md:aspect-[5/6]">
                  <Image
                    src={`${IMG}/hero-pie-limon.webp`}
                    alt="Pie de limón de Pastelería Paris con merengue dorado, la especialidad de la casa"
                    fill
                    priority
                    sizes="(min-width: 768px) 44vw, 88vw"
                    className="object-cover"
                  />
                </div>
                <p
                  className={`${mono.className} absolute bottom-0 inset-x-0 text-[10px] md:text-[11px] uppercase tracking-[0.22em] text-center py-2.5 font-semibold`}
                  style={{ backgroundColor: 'rgba(250,242,224,0.92)', color: C.cocoa }}
                >
                  Pie de limón · el clásico de la casa
                </p>
              </div>
              <Sello className="absolute -top-5 -right-3 md:-right-6 w-20 h-20 md:w-24 md:h-24 rotate-[8deg]" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Banda de datos ── */}
      <div style={{ backgroundColor: C.sello, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-1.5 text-[11px] md:text-xs">
          <span className={`${mono.className} uppercase tracking-[0.2em] font-semibold`}>Lun–Sáb 9:00–20:30</span>
          <span className={`${mono.className} uppercase tracking-[0.2em] font-semibold`}>{BIZ.rating.toFixed(1)}★ · {BIZ.reviews} reseñas</span>
          <span className={`${mono.className} uppercase tracking-[0.2em] font-semibold`}>Retiro en {BIZ.address}</span>
          <span className={`${mono.className} uppercase tracking-[0.2em] font-semibold`}>Encargos por WhatsApp</span>
        </div>
      </div>

      {/* ── La vitrina ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>De la vitrina de hoy</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`}>
                Todo sale del horno,
                <br />
                nada del congelador
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Las fotos son de su propio Instagram: lo que se hornea en la
                semana es lo que se vende en la semana.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {VITRINA.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <li className="group">
                  <div
                    className="relative aspect-square rounded-2xl overflow-hidden"
                    style={{ border: `4px solid ${C.cream}`, boxShadow: '0 10px 30px rgba(42,27,16,0.14)' }}
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 45vw"
                      loading="lazy"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-2 mt-2.5 px-0.5">
                    <h3 className={`${display.className} text-sm md:text-lg leading-tight`}>{p.name}</h3>
                    <span
                      className={`${mono.className} text-[9px] md:text-[10px] uppercase tracking-[0.16em] font-semibold shrink-0 px-2 py-0.5 rounded-full`}
                      style={{ backgroundColor: 'rgba(242,183,5,0.28)', color: C.miel }}
                    >
                      {p.tag}
                    </span>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas: lo que dice el barrio ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08]`}>
                El barrio lo dice mejor:
                <br />
                {BIZ.rating.toFixed(1)} de 5
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en su ficha de Google. Los brazos de
                reina, los empolvados y el pie de limón se repiten en casi
                todas.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="rounded-2xl p-5 md:p-6 h-full flex flex-col rotate-[0.4deg] odd:-rotate-[0.5deg]"
                  style={{ backgroundColor: '#FBEBB4', boxShadow: '0 8px 24px rgba(42,27,16,0.10)' }}
                >
                  <Stars value={5} color={C.miel} className="w-[14px] h-[14px]" />
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: C.cocoa }}>
                    «{r.text}»
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold mt-4`}
                    style={{ color: C.miel }}
                  >
                    {r.name} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A5A0B]"
              style={{ color: C.miel }}
            >
              Leer las reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Encargos: la torta del cumpleaños ── */}
      <section id="encargos" className="scroll-mt-20" style={{ backgroundColor: C.cocoa, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative">
              <div
                className="relative rounded-[2rem] overflow-hidden -rotate-1"
                style={{ boxShadow: '0 24px 60px rgba(0,0,0,0.35)', border: `6px solid ${C.cream}` }}
              >
                <div className="relative aspect-[4/5]">
                  <Image
                    src={`${IMG}/torta-hojarasca.webp`}
                    alt="Torta de hojarasca con manjar para encargo de Pastelería Paris"
                    fill
                    sizes="(min-width: 768px) 44vw, 88vw"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>
              <Sello className="absolute -bottom-5 -left-3 w-20 h-20 md:w-24 md:h-24 -rotate-[8deg]" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
              style={{ color: C.sello }}
            >
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              Tortas por encargo
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-6`}>
              La torta del cumpleaños también sale de aquí
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(250,242,224,0.78)' }}>
              Hoja manjar, pie de limón en tamaño familiar, pan de pascua en
              diciembre y la torta que el cumpleañero pida. Se agenda por
              WhatsApp y se retira en el local.
            </p>
            <ol className="space-y-4 mb-9">
              {[
                'Escribes por WhatsApp con la fecha y para cuántos.',
                'Eligen juntos la torta y el tamaño.',
                'La retiras lista en 24 Oriente 1381.',
              ].map((paso, i) => (
                <li key={paso} className="flex items-start gap-4">
                  <span
                    className={`${mono.className} shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mt-0.5`}
                    style={{ backgroundColor: C.sello, color: C.ink }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(250,242,224,0.85)' }}>
                    {paso}
                  </p>
                </li>
              ))}
            </ol>
            <a
              href={WA_LINK_ENCARGO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} ${BTN_SOLID} inline-block text-sm md:text-base px-7 py-3 tap-44`}
              style={{ backgroundColor: C.sello, color: C.ink }}
            >
              Encargar una torta
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde: la casa ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <div className="h-full flex flex-col">
              <Eyebrow>La casa</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.08] mb-6`}>
                24 Oriente 1381, entre 2 y 3 Norte
              </h2>
              <div
                className="relative rounded-2xl overflow-hidden mb-7 aspect-[4/3] shrink-0"
                style={{ border: `4px solid ${C.cream}`, boxShadow: '0 12px 32px rgba(42,27,16,0.14)' }}
              >
                <Image
                  src={`${IMG}/mesa-cafe.webp`}
                  alt="Mesa con café y brownie de Pastelería Paris"
                  fill
                  sizes="(min-width: 768px) 44vw, 88vw"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <dl className="rounded-xl border overflow-hidden mb-6" style={{ borderColor: C.line, backgroundColor: C.cream }}>
                {HOURS.map((h) => (
                  <div key={h.d} className="flex items-baseline justify-between gap-4 px-4 py-3 border-b last:border-b-0" style={{ borderColor: C.line }}>
                    <dt className="text-sm font-semibold">{h.d}</dt>
                    <dd className={`${mono.className} text-sm text-right`} style={{ color: C.muted }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <address className="not-italic text-sm leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}, sector {BIZ.sector}, {BIZ.city}
                <br />
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8A5A0B]"
                  style={{ color: C.miel }}
                >
                  @pasteleria.paristalca en Instagram
                </a>
              </address>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} text-sm px-6 py-3 tap-44`}
                  style={{ backgroundColor: C.ink, color: C.cream }}
                >
                  Escribir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_GHOST} text-sm px-6 py-3 tap-44`}
                  style={{ borderColor: 'rgba(42,27,16,0.4)', color: C.ink }}
                >
                  Cómo llegar →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden min-h-[340px] h-full" style={{ border: `1px solid ${C.line}`, boxShadow: '0 12px 32px rgba(42,27,16,0.14)' }}>
              <iframe
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8">
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} text-xl mb-1`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(250,242,224,0.6)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(250,242,224,0.6)' }}>
              <p className="font-semibold mb-1" style={{ color: 'rgba(250,242,224,0.92)' }}>Pedidos</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B705]"
                style={{ color: C.sello }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className="text-[11px] mt-5 pt-4 border-t" style={{ color: 'rgba(250,242,224,0.6)', borderColor: 'rgba(250,242,224,0.14)' }}>
            Sitio de ejemplo preparado por Sitiazo con fotos y datos reales del Instagram y la ficha de Google de la pastelería.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
