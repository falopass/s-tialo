import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

const C = {
  asphalt: '#191a1d',
  asphaltSoft: '#222428',
  cream: '#f4f0e4',
  ink: '#20211f',
  yellow: '#f2b90c',
  green: '#3f6b4f',
  muted: '#6a6a5e',
  line: 'rgba(32,33,31,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-rancho-longavi',
  title: 'Restaurant Rancho Longaví — Parada en la Panamericana, Longaví',
  description:
    'Restaurant de ruta en Panamericana Sur 3168, Longaví. El famoso churrasco, comedor con vista a la ruta y terraza. Llama al +56 73 241 1590.',
  image: '/demos/restaurant-rancho-longavi/hero.webp',
})

const NAV_LINKS = [
  { label: 'El famoso', href: '#famoso' },
  { label: 'La casa', href: '#casa' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const RESENAS = [
  {
    stars: 5,
    text: 'Extremadamente rico. Buenos precios, ricos platos y la atención, como en ningún lugar.',
    author: 'J.I.R.G',
    note: 'sobre el churrasco',
  },
  {
    stars: 5,
    text: 'Muy buena atención y el plato sale a precio justo.',
    author: 'Loreto Véliz',
    note: 'almuerzo de semana',
  },
  {
    stars: 5,
    text: 'Nos aceptaron con nuestras mascotas, muy amables.',
    author: 'Constanza Acevedo',
    note: 'parando en ruta',
  },
]

const FOTOS_CASA = [
  {
    src: `${IMG}/comedor.webp`,
    alt: 'Comedor interior con mesas de mantel blanco y ventanales a la ruta',
    label: 'El comedor',
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Mesa con vinagretas y tarjeta de bienvenida con el logo de Rancho Longaví',
    label: 'La vinagreta de la casa',
  },
  {
    src: `${IMG}/mesas.webp`,
    alt: 'Mesas preparadas frente a los ventanales que dan a la Panamericana',
    label: 'Con vista a la ruta',
  },
  {
    src: `${IMG}/patio.webp`,
    alt: 'Entrada lateral del restaurante con su patio y estacionamiento',
    label: 'El patio',
  },
]

function Road({ label }: { label: string }) {
  return (
    <div className="relative py-5" aria-hidden="true">
      <div className="border-t-4 border-dashed" style={{ borderColor: C.yellow }} />
      <span
        className={`${mono.className} absolute left-1/2 -translate-x-1/2 -top-3 px-4 py-1 text-[10px] md:text-xs uppercase tracking-[0.28em] font-semibold`}
        style={{ backgroundColor: C.yellow, color: C.asphalt }}
      >
        {label}
      </span>
    </div>
  )
}

export default function RanchoLongaviPage() {
  return (
    <div
      className={`${mono.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .rl-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .rl-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .rl-btn:active { transform: translateY(0) scale(0.97); }
        .rl-btn:focus-visible { outline: 3px solid ${C.yellow}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(25,26,29,0.96)',
          ink: C.cream,
          line: 'rgba(244,240,228,0.18)',
          btnBg: C.yellow,
          btnInk: C.asphalt,
        }}
      />

      {/* ── Hero: parada en la ruta ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.asphalt }}>
        <div className="absolute inset-x-0 top-[64px] border-t-4 border-dashed" style={{ borderColor: 'rgba(242,185,12,0.5)' }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[124px] md:pt-[150px] pb-10 md:pb-16">
          <Reveal>
            <p
              className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-5"
              style={{ color: C.yellow }}
            >
              Panamericana Sur N° 3168 · Longaví
            </p>
            <h1
              className={`${display.className} uppercase font-semibold leading-[0.95] tracking-[-0.01em] text-[clamp(2.6rem,9vw,6.5rem)]`}
              style={{ color: C.cream }}
            >
              En la Panamericana
              <br />
              se para{' '}
              <span style={{ color: C.yellow }}>aquí</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mt-6" style={{ color: 'rgba(244,240,228,0.78)' }}>
              Restaurant de ruta en Longaví: el churrasco gigante que ya es
              famoso, platos del día y una mesa puesta con mantel para
              cortar el viaje como corresponde.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Stars value={BIZ.rating} color={C.yellow} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.cream, textDecorationColor: 'rgba(242,185,12,0.5)' }}
              >
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={CALL_LINK}
                className={`${display.className} rl-btn uppercase font-semibold tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.asphalt }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href="#famoso"
                className={`${display.className} rl-btn uppercase font-semibold tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(244,240,228,0.5)', color: C.cream }}
              >
                El famoso de la casa
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal delay={140}>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10">
            <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9]">
              <Image
                src={`${IMG}/hero.webp`}
                alt="Fachada del Restaurant Rancho Longaví a la orilla de la Panamericana"
                fill
                priority
                sizes="(min-width: 1024px) 72rem, 100vw"
                className="object-cover"
              />
            </div>
            <p
              className="text-[10px] md:text-xs uppercase tracking-[0.24em] mt-3 text-right"
              style={{ color: 'rgba(244,240,228,0.6)' }}
            >
              El local, desde la Panamericana — foto real
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Cinta horario ── */}
      <div className="py-3.5 md:py-4" style={{ backgroundColor: C.yellow }} aria-hidden="true">
        <div
          className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-6 gap-y-1.5 text-sm md:text-base font-semibold uppercase tracking-[0.14em]`}
          style={{ color: C.asphalt }}
        >
          <span>{BIZ.hours}</span>
          <span className="hidden sm:inline">·</span>
          <span>{BIZ.hoursWeekend}</span>
          <span className="hidden sm:inline">·</span>
          <span>Aceptan mascotas</span>
        </div>
      </div>

      {/* ── El famoso ── */}
      <section id="famoso" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Road label="parada obligada" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start mt-6">
          <Reveal className="col-span-12 md:col-span-5">
            <div className="relative overflow-hidden aspect-[4/5] border-4" style={{ borderColor: C.asphalt }}>
              <Image
                src={`${IMG}/churrasco.webp`}
                alt="El churrasco italiano gigante de Rancho Longaví, abierto con palta, tomate y carne"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <div className="col-span-12 md:col-span-7">
            <Reveal delay={80}>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: C.green }}>
                El famoso de la casa
              </p>
              <h2
                className={`${display.className} uppercase font-semibold leading-[0.95] text-[clamp(2.2rem,6vw,4.4rem)] mb-5`}
                style={{ color: C.ink }}
              >
                El churrasco que
                <br />
                no cabe en el plato
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                Carne, palta, tomate y mayonesa en pan amasado que apenas
                alcanza a cerrarse. Es el motivo por el que los camioneros,
                los buses y las familias se bajan en este número de la ruta.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <figure
                className="mt-7 border-l-4 pl-5 py-1"
                style={{ borderColor: C.yellow }}
              >
                <blockquote className={`${display.className} text-lg md:text-xl font-medium leading-snug`} style={{ color: C.ink }}>
                  “Extremadamente rico. Buenos precios, ricos platos y la
                  atención, como en ningún lugar.”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold mt-2" style={{ color: C.green }}>
                  J.I.R.G — reseña en Google
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="relative overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.asphalt }}>
                  <Image
                    src={`${IMG}/churrasco-tomate.webp`}
                    alt="Churrasco italiano servido en la mesa, listo para comer"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden aspect-[4/3] border-4" style={{ borderColor: C.asphalt }}>
                  <Image
                    src={`${IMG}/pescado.webp`}
                    alt="Pescado frito con papas fritas y limón, otro clásico de la casa"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-xs md:text-sm mt-4" style={{ color: C.muted }}>
                Y si no es día de churrasco: pescado frito con papas,
                platos del día y lo que escriba la temporada.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20" style={{ backgroundColor: C.asphaltSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b border-dashed pb-4" style={{ borderColor: 'rgba(244,240,228,0.3)' }}>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: C.yellow }}>
                por dentro
              </span>
              <h2 className={`${display.className} uppercase font-semibold leading-none text-[clamp(2rem,5.5vw,3.6rem)]`} style={{ color: C.cream }}>
                La casa, a la vera
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            <Reveal className="col-span-12 md:col-span-8">
              <ul className="grid grid-cols-2 gap-4 md:gap-5">
                {FOTOS_CASA.map((f) => (
                  <li key={f.label}>
                    <div className="relative overflow-hidden aspect-[4/3]">
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] font-semibold mt-2" style={{ color: 'rgba(244,240,228,0.65)' }}>
                      {f.label}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-4" delay={120}>
              <div className="border-2 border-dashed p-6 md:p-7" style={{ borderColor: 'rgba(242,185,12,0.6)' }}>
                <p className={`${display.className} uppercase font-semibold text-xl md:text-2xl mb-4`} style={{ color: C.cream }}>
                  Señas del lugar
                </p>
                <ul className="space-y-3 text-sm leading-relaxed" style={{ color: 'rgba(244,240,228,0.8)' }}>
                  <li>→ Mantel negro y vinagretas con el logo de la casa.</li>
                  <li>→ Ventanales que miran la Panamericana.</li>
                  <li>→ Patio amplio para estacionar tranquilo.</li>
                  <li>→ Aceptan mascotas — también son de paso.</li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Road label="voz de la ruta" />
        <Reveal>
          <h2
            className={`${display.className} uppercase font-semibold leading-[0.95] text-[clamp(2rem,5.5vw,3.6rem)] mb-8 mt-6`}
            style={{ color: C.ink }}
          >
            Los que ya frenaron
          </h2>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} className="col-span-12 md:col-span-4" delay={i * 110}>
              <li className="h-full">
                <figure
                  className="h-full p-6 md:p-7 flex flex-col border-t-4"
                  style={{ backgroundColor: C.asphalt, borderColor: C.yellow }}
                >
                  <Stars value={r.stars} color={C.yellow} className="mb-4" />
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed font-medium flex-1`} style={{ color: C.cream }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5">
                    <span className="block text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.yellow }}>
                      {r.author}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(244,240,228,0.6)' }}>
                      {r.note} — reseña en Google
                    </span>
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: C.yellow }}>
                  cómo llegar
                </p>
                <h2 className={`${display.className} uppercase font-semibold leading-[0.95] text-[clamp(2.2rem,6vw,4rem)] mb-6`} style={{ color: '#fff' }}>
                  A la orilla
                  <br />
                  de la ruta
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-7 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
                </address>
                <div className="space-y-2 text-sm mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <p>{BIZ.hours}</p>
                  <p>{BIZ.hoursWeekend}</p>
                </div>
                <a
                  href={CALL_LINK}
                  className={`${display.className} rl-btn inline-block uppercase font-semibold tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.yellow, color: C.asphalt }}
                >
                  Llamar al restaurant
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] border-4" style={{ borderColor: C.asphalt }}>
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
      <footer style={{ backgroundColor: C.asphalt, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase font-semibold text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(244,240,228,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,240,228,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,240,228,0.6)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con fotos y reseñas reales del local.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.yellow} />
    </div>
  )
}
