import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, MAPS_URL, MAPS_EMBED, HOURS, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' }],
})

const C = {
  ink: '#12100C',
  panel: '#1B1712',
  carbon: '#0C0A07',
  gold: '#D9A72E',
  goldDeep: '#A87E14',
  cream: '#F4EDDA',
  muted: 'rgba(244,237,218,0.68)',
  line: 'rgba(244,237,218,0.14)',
}

const BTN_SOLID =
  'rounded-full transition-[transform,filter] duration-300 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A72E]'
const BTN_GHOST =
  'rounded-full border transition-colors duration-300 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D9A72E]'

export const metadata: Metadata = demoMetadata({
  slug: 'cordillera-san-clemente',
  title: 'Cordillera · Cafetería en la Parroquia Entre Ríos, San Clemente',
  description:
    'Cafetería en Alejandro Cruz 125, dentro de la Parroquia Entre Ríos de San Clemente: milkshakes, café helado y dulces de la vitrina. Pedidos por WhatsApp.',
  image: `${IMG}/hero-milkshakes.webp`,
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Fotos', href: '#fotos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde', href: '#donde' },
]

// Lo que muestran las fotos y el menú de la ficha de Google
const PIZARRA = [
  { name: 'Milkshakes', note: 'el Oreo es el pedido clásico' },
  { name: 'Café helado', note: 'el favorito de las reseñas' },
  { name: 'Galletas', note: 'de la vitrina del día' },
  { name: 'Dulces de la amasandería', note: 'lo que esté en la vitrina' },
]

// Fotos reales de la ficha de Google
const FOTOS = [
  { src: `${IMG}/fachada.webp`, alt: 'Fachada amarilla de Cordillera en Alejandro Cruz 125, San Clemente', label: 'La fachada amarilla' },
  { src: `${IMG}/barista.webp`, alt: 'Preparación de un milkshake en la barra de Cordillera', label: 'En la barra' },
  { src: `${IMG}/vitrina.webp`, alt: 'Vitrina de dulces y repostería de Cordillera', label: 'La vitrina' },
  { src: `${IMG}/galletas.webp`, alt: 'Bandejas de galletas y dulces de Cordillera', label: 'Galletas del día' },
  { src: `${IMG}/interior.webp`, alt: 'Interior de la cafetería Cordillera con su vitrina', label: 'El local' },
  { src: `${IMG}/milkshake-oreo.webp`, alt: 'Milkshake Oreo con crema de Cordillera', label: 'Milkshake Oreo' },
]

// Reseñas reales de la ficha de Google (textos en español)
const REVIEWS = [
  {
    name: 'Axel Vial',
    text: 'Los milkshakes son muy ricos y los cafés helados también. Recomendado.',
  },
  {
    name: 'Natalia Gatica',
    text: 'Buen lugar, limpio, todo fresco y la atención 10 de 10. Los productos muy ricos.',
  },
  {
    name: 'Felipe Illanes',
    text: 'Está súper bueno, los productos son de buena calidad y el precio igual.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color: C.gold }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

// Cresta de cordillera: separador inspirado en el logo de la casa
function Cresta({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden="true" className="relative w-full overflow-hidden leading-[0]" style={{ color: C.gold }}>
      <svg
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        className={`w-full h-[46px] md:h-[64px] ${flip ? '-scale-x-100' : ''}`}
      >
        <path
          d="M0 72 L0 44 L96 30 L180 48 L288 18 L360 40 L470 10 L560 44 L660 26 L770 50 L880 16 L980 42 L1090 24 L1200 48 L1300 28 L1380 40 L1440 30 L1440 72 Z"
          fill="currentColor"
          opacity="0.16"
        />
        <path
          d="M0 44 L96 30 L180 48 L288 18 L360 40 L470 10 L560 44 L660 26 L770 50 L880 16 L980 42 L1090 24 L1200 48 L1300 28 L1380 40 L1440 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  )
}

export default function CordilleraPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased pb-20`}
      style={{ backgroundColor: C.ink, color: C.cream }}
    >
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(18,16,12,0.94)',
          ink: C.cream,
          line: C.line,
          btnBg: C.gold,
          btnInk: C.ink,
        }}
      />

      {/* ── Hero: la barra frente a la cordillera ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-0 grid md:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-end">
          <Reveal>
            <div className="pb-14 md:pb-20">
              <Eyebrow>Cafetería y repostería · San Clemente</Eyebrow>
              <h1
                className={`${display.className} font-bold leading-[1.04] tracking-[-0.01em] text-[clamp(2.1rem,7.8vw,4.6rem)] mb-6`}
              >
                Milkshakes y café helado{' '}
                <span style={{ color: C.gold }}>en la Parroquia Entre Ríos</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
                Cordillera atiende dentro de la parroquia de Alejandro Cruz 125:
                milkshakes, café helado y la vitrina de dulces que surte la
                propia amasandería.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={WA_LINK_PEDIDO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} ${BTN_SOLID} font-semibold text-sm md:text-base px-7 py-3 tap-44`}
                  style={{ backgroundColor: C.gold, color: C.ink }}
                >
                  Pedir para retirar
                </a>
                <a
                  href="#pizarra"
                  className={`${display.className} ${BTN_GHOST} font-semibold text-sm md:text-base px-7 py-3 tap-44`}
                  style={{ borderColor: 'rgba(244,237,218,0.5)', color: C.cream }}
                >
                  Ver la pizarra
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-semibold tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A72E]"
                style={{ color: C.cream }}
              >
                <Stars value={BIZ.rating} color={C.gold} className="w-[14px] h-[14px]" />
                {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative md:-mb-0">
              <div
                className="relative rounded-t-[2rem] overflow-hidden"
                style={{ border: `5px solid ${C.panel}`, borderBottom: 'none', boxShadow: '0 -18px 60px rgba(0,0,0,0.4)' }}
              >
                <div className="relative aspect-[3/4] md:aspect-[5/7]">
                  <Image
                    src={`${IMG}/hero-milkshakes.webp`}
                    alt="Dos milkshakes de Cordillera bajo el logo de la casa pintado en la pared"
                    fill
                    priority
                    sizes="(min-width: 768px) 36vw, 88vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p
                className={`${mono.className} absolute top-3 left-4 text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1.5 rounded-full`}
                style={{ backgroundColor: 'rgba(12,10,7,0.75)', color: C.gold }}
              >
                Amasandería & repostería
              </p>
            </div>
          </Reveal>
        </div>
        <Cresta />
      </section>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La pizarra del mostrador</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08]`}>
                Lo que se pide en la barra
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                Según su ficha de Google, el ticket anda en{' '}
                <strong style={{ color: C.cream }}>{BIZ.price}</strong>. La
                carta del día se confirma en el mostrador o por WhatsApp.
              </p>
            </div>
          </Reveal>
          <div
            className="rounded-2xl p-6 md:p-10"
            style={{ backgroundColor: C.panel, border: `1px solid ${C.line}`, boxShadow: 'inset 0 0 0 6px rgba(244,237,218,0.03)' }}
          >
            <ul>
              {PIZARRA.map((item, i) => (
                <Reveal key={item.name} delay={i * 70}>
                  <li
                    className="flex items-baseline gap-3 py-4 md:py-5 border-b last:border-b-0"
                    style={{ borderColor: C.line }}
                  >
                    <span className={`${display.className} text-xl md:text-3xl font-semibold`}>{item.name}</span>
                    <span className="flex-1 border-b border-dotted translate-y-[-4px]" style={{ borderColor: 'rgba(244,237,218,0.3)' }} aria-hidden="true" />
                    <span className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.14em] text-right`} style={{ color: C.gold }}>
                      {item.note}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Riel de fotos ── */}
      <section id="fotos" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Eyebrow>El local, tal cual</Eyebrow>
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08] mb-10 md:mb-14`}>
                La casa amarilla de Alejandro Cruz
              </h2>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div
              className="flex gap-4 md:gap-6 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory"
              style={{ scrollbarWidth: 'thin', scrollbarColor: `${C.gold} transparent` }}
            >
              {FOTOS.map((f) => (
                <figure key={f.src} className="shrink-0 w-[240px] md:w-[300px] snap-start">
                  <div
                    className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                    style={{ border: `1px solid ${C.line}`, boxShadow: '0 14px 36px rgba(0,0,0,0.35)' }}
                  >
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 240px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold mt-2.5 px-0.5`}
                    style={{ color: C.muted }}
                  >
                    {f.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: notas del mostrador ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.08]`}>
                Los que ya pasaron por la barra
              </h2>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
                {BIZ.rating.toFixed(1)} estrellas con {BIZ.reviews} reseñas en
                su ficha: el milkshake y el café helado son los que más se
                nombran.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="rounded-lg p-5 md:p-6 h-full flex flex-col"
                  style={{
                    backgroundColor: C.cream,
                    color: C.ink,
                    border: '1px dashed rgba(18,16,12,0.35)',
                    boxShadow: '0 10px 28px rgba(0,0,0,0.35)',
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Stars value={5} color={C.goldDeep} className="w-[14px] h-[14px]" />
                    <span className={`${mono.className} text-[9px] uppercase tracking-[0.18em] font-semibold`} style={{ color: 'rgba(18,16,12,0.5)' }}>
                      ticket #{String(i + 1).padStart(3, '0')}
                    </span>
                  </div>
                  <blockquote className="text-sm leading-relaxed mt-4 flex-1" style={{ color: 'rgba(18,16,12,0.85)' }}>
                    «{r.text}»
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.18em] font-semibold mt-4 pt-3 border-t border-dashed`}
                    style={{ color: C.goldDeep, borderColor: 'rgba(18,16,12,0.25)' }}
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
              className="inline-block mt-8 text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A72E]"
              style={{ color: C.gold }}
            >
              Leer las reseñas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div
                className="rounded-2xl p-6 md:p-8 h-full"
                style={{ backgroundColor: C.panel, border: `1px solid ${C.line}` }}
              >
                <Eyebrow>Dónde y cuándo</Eyebrow>
                <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.1] mb-6`}>
                  Dentro de la Parroquia
                  <br />
                  Entre Ríos
                </h2>
                <dl className="rounded-xl overflow-hidden mb-6" style={{ border: `1px solid ${C.line}` }}>
                  {HOURS.map((h) => (
                    <div key={h.d} className="flex items-baseline justify-between gap-4 px-4 py-3.5 border-b last:border-b-0" style={{ borderColor: C.line, backgroundColor: 'rgba(12,10,7,0.4)' }}>
                      <dt className="text-sm font-semibold" style={{ color: C.cream }}>{h.d}</dt>
                      <dd className={`${mono.className} text-sm text-right`} style={{ color: C.muted }}>{h.h}</dd>
                    </div>
                  ))}
                </dl>
                <address className="not-italic text-sm leading-relaxed mb-7" style={{ color: C.muted }}>
                  {BIZ.addressFull}
                  <br />
                  <a
                    href={`tel:${BIZ.phoneTel}`}
                    className="underline underline-offset-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A72E]"
                    style={{ color: C.gold }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ${BTN_SOLID} font-semibold text-sm px-6 py-3 tap-44`}
                    style={{ backgroundColor: C.gold, color: C.ink }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} ${BTN_GHOST} font-semibold text-sm px-6 py-3 tap-44`}
                    style={{ borderColor: 'rgba(244,237,218,0.5)', color: C.cream }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="rounded-2xl overflow-hidden min-h-[340px] h-full" style={{ border: `1px solid ${C.line}` }}>
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
        </div>
        <Cresta flip />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-8">
          <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-5">
            <div>
              <p className={`${display.className} text-xl font-semibold mb-1`}>{BIZ.name}</p>
              <p className="text-xs" style={{ color: 'rgba(244,237,218,0.6)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <div className="text-xs leading-relaxed" style={{ color: 'rgba(244,237,218,0.6)' }}>
              <p className="font-semibold mb-1" style={{ color: 'rgba(244,237,218,0.92)' }}>Pedidos</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 tap-44 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D9A72E]"
                style={{ color: C.gold }}
              >
                WhatsApp {BIZ.phoneDisplay}
              </a>
            </div>
          </div>
          <p className="text-[11px] mt-5 pt-4 border-t" style={{ color: 'rgba(244,237,218,0.6)', borderColor: C.line }}>
            Sitio de ejemplo preparado por Sitiazo con fotos y datos reales de la ficha de Google de la cafetería.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
