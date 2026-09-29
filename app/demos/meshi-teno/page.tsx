import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL } from './content'

const display = localFont({
  src: '../../fonts/anton/normal-400.woff2',
  weight: '400',
  style: 'normal',
})
const mono = localFont({
  src: '../../fonts/ibm-plex-mono/normal-500.woff2',
  weight: '500',
  style: 'normal',
})
const monoBold = localFont({
  src: '../../fonts/ibm-plex-mono/normal-700.woff2',
  weight: '700',
  style: 'normal',
})
const body = localFont({
  src: '../../fonts/archivo/normal-100-900.woff2',
  style: 'normal',
})

// Meshi Teno: delivery nocturno de barrio. Carbón de fondo, el círculo rojo de
// su logo como sello, papel a cuadros del liner de la burger y amarillo marca.
const C = {
  carbon: '#12100E',
  carbon2: '#1B1815',
  paper: '#F4EFE6',
  ink: '#1A1712',
  red: '#E63B2E',
  redDeep: '#B92A20',
  redHi: '#FF6652',
  yellow: '#F5B90D',
  muted: '#A9A095',
  mutedOnPaper: '#6E6558',
  line: '#332C25',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'meshi-teno',
  title: 'Meshi Teno — sushi, handrolls y burger a domicilio en Teno',
  description:
    'Delivery de comida en Av. Bellavista 291, Teno: bandejas de sushi, handroll tempura y burger con papas. Pide por WhatsApp.',
  image: '/demos/meshi-teno/bandeja.webp',
})

const checker =
  'repeating-conic-gradient(#141210 0% 25%, #F4EFE6 0% 50%)'

function CheckerStrip() {
  return (
    <div
      aria-hidden="true"
      className="h-5 w-full"
      style={{ backgroundImage: checker, backgroundSize: '20px 20px' }}
    />
  )
}

function Sello({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center rounded-full border-4 ${className}`}
      style={{ borderColor: C.paper, boxShadow: '0 10px 30px rgba(0,0,0,.45)' }}
    >
      <img
        src="/demos/meshi-teno/logo.webp"
        alt="Logo redondo de Meshi Teno"
        className="h-full w-full rounded-full object-cover"
      />
    </span>
  )
}

const CARTA = [
  {
    nombre: 'Bandejas de sushi',
    lead: 'la más pedida',
    desc: 'Rolls frescos y apanados armados en bandeja — los de la foto salen así, coronados con palta.',
    src: '/demos/meshi-teno/bandeja.webp',
    alt: 'Bandeja de rolls de sushi variados coronada con palta de Meshi Teno',
  },
  {
    nombre: 'La burger con papas',
    lead: 'bien americana',
    desc: 'Hamburguesa con papas fritas servida en papel a cuadros — la misma que sale en sus fotos.',
    src: '/demos/meshi-teno/burger.webp',
    alt: 'Hamburguesa con papas fritas sobre papel a cuadros en Meshi Teno',
  },
  {
    nombre: 'Handroll tempura',
    lead: 'para llevar en la mano',
    desc: 'El cono apanado que se come caminando — el sello de la casa junto con los rolls.',
    src: '/demos/meshi-teno/handroll.webp',
    alt: 'Handroll tempura de Meshi Teno sostenido en la mano',
  },
]

const RESENAS = [
  {
    texto:
      'Excelente atención, el niño que atiende con muy buena disposición. Recomendado.',
    nombre: 'Constanza Toloza',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'El menú es exquisito y bastante cantidad a buen precio. Totalmente recomendado.',
    nombre: 'n0DaT',
    detalle: '5 estrellas en Google',
  },
  {
    texto:
      'Muy bueno y tienen buena disposición. Los recomiendo.',
    nombre: 'Anibal Cáceres',
    detalle: '4 estrellas en Google',
  },
]

const FOTOS = [
  { src: '/demos/meshi-teno/local.webp', alt: 'Interior de Meshi Teno en Av. Bellavista con sus mesas' },
  { src: '/demos/meshi-teno/tabla.webp', alt: 'Tabla de sushi variado de Meshi Teno' },
  { src: '/demos/meshi-teno/mesa.webp', alt: 'Mesa servida con pedido de Meshi Teno' },
  { src: '/demos/meshi-teno/hero.webp', alt: 'Fachada de Meshi Teno en Av. Bellavista 291' },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '10:00 – 22:30' },
  { d: 'Sábado y domingo', h: '16:00 – 22:30' },
]

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen`}
      style={{ backgroundColor: C.carbon, color: C.paper }}
    >
      <BlitzNav
        name={BIZ.name}
        logoSrc="/demos/meshi-teno/logo.webp"
        waLink={WA_LINK}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: C.carbon2,
          ink: C.paper,
          line: C.line,
          btnBg: C.redDeep,
          btnInk: C.paper,
        }}
        links={[
          { href: '#carta', label: 'La carta' },
          { href: '#resenas', label: 'Reseñas' },
          { href: '#local', label: 'El local' },
        ]}
      />

      {/* Hero — el delivery nocturno de Bellavista */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-24 sm:pt-28 md:grid-cols-2 md:items-center md:pt-32">
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`}
                style={{ color: C.yellow }}
              >
                Delivery · Teno · Av. Bellavista 291
              </p>
              <h1
                className={`${display.className} mt-4 uppercase leading-[0.95] tracking-wide`}
                style={{ fontSize: 'clamp(2.9rem, 11vw, 5.6rem)' }}
              >
                Sushi, handrolls
                <br />
                y burger
                <br />
                <span style={{ color: C.yellow }}>a tu puerta</span>
              </h1>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                La cocina de Bellavista que reparte por Teno: bandejas de rolls,
                handroll tempura y burger con papas. Se pide y se coordina directo
                por WhatsApp.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <Stars value={3.7} color={C.yellow} />
                <span className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} rounded-md px-6 py-3 text-[15px] uppercase tracking-wider`}
                  style={{ backgroundColor: C.redDeep, color: C.paper }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href="#carta"
                  className={`${display.className} rounded-md border px-6 py-3 text-[15px] uppercase tracking-wider`}
                  style={{ borderColor: C.line, color: C.paper }}
                >
                  Ver la carta
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="relative">
              <div
                className="rounded-xl p-2"
                style={{ backgroundImage: checker, backgroundSize: '20px 20px' }}
              >
                <img
                  src="/demos/meshi-teno/bandeja.webp"
                  alt="Bandeja de sushi variado servida en Meshi Teno, Teno"
                  className="aspect-[4/3] w-full rounded-lg object-cover"
                />
              </div>
              <Sello className="absolute -bottom-8 -right-2 h-24 w-24 sm:-right-4 sm:h-28 sm:w-28" />
            </div>
          </Reveal>
        </div>
      </section>

      <CheckerStrip />

      {/* La carta — bandejas sobre papel a cuadros */}
      <section id="carta" className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <p
            className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`}
            style={{ color: C.redHi }}
          >
            Lo que sale de la cocina
          </p>
          <h2
            className={`${display.className} mt-3 uppercase leading-none tracking-wide`}
            style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
          >
            La carta <span style={{ color: C.yellow }}>Meshi</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {CARTA.map((m, i) => (
            <Reveal key={m.nombre} delay={i * 100}>
              <article
                className="overflow-hidden rounded-xl"
                style={{ backgroundColor: C.carbon2, border: `1px solid ${C.line}` }}
              >
                <div
                  className="p-2"
                  style={{ backgroundImage: checker, backgroundSize: '18px 18px' }}
                >
                  <img src={m.src} alt={m.alt} className="aspect-[4/3] w-full rounded-lg object-cover" />
                </div>
                <div className="p-5">
                  <p
                    className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`}
                    style={{ color: C.yellow }}
                  >
                    {m.lead}
                  </p>
                  <h3 className={`${display.className} mt-2 text-xl uppercase tracking-wide`}>
                    {m.nombre}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {m.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Reseñas — comandas blancas con sello rojo */}
      <section id="resenas" style={{ backgroundColor: C.carbon2 }}>
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`}
                  style={{ color: C.redHi }}
                >
                  Lo que dice Teno
                </p>
                <h2
                  className={`${display.className} mt-3 uppercase leading-none tracking-wide`}
                  style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
                >
                  La gente opina
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={3.7} color={C.yellow} />
                <span className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 100}>
                <figure
                  className="relative h-full rounded-md p-6 pt-8"
                  style={{ backgroundColor: C.paper, color: C.ink }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-3 left-6 h-6 w-6 rounded-full border-4"
                    style={{ backgroundColor: C.red, borderColor: C.carbon2 }}
                  />
                  <blockquote className="text-[15px] leading-relaxed">“{r.texto}”</blockquote>
                  <figcaption className="mt-5">
                    <p className={`${monoBold.className} text-xs uppercase tracking-wider`}>{r.nombre}</p>
                    <p className={`${mono.className} mt-1 text-[11px]`} style={{ color: C.mutedOnPaper }}>
                      {r.detalle}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CheckerStrip />

      {/* Fotos — el local tal cual */}
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Reveal>
          <h2
            className={`${display.className} uppercase leading-none tracking-wide`}
            style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
          >
            Bellavista <span style={{ color: C.yellow }}>291</span>
          </h2>
          <p className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
            Fotos del local y de su carta
          </p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={i * 80}>
              <div
                className="rounded-lg p-1.5"
                style={{ backgroundColor: C.carbon2, border: `1px solid ${C.line}` }}
              >
                <img src={f.src} alt={f.alt} className="aspect-square w-full rounded-md object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* El local — datos en mono + mapa */}
      <section id="local" style={{ backgroundColor: C.carbon2 }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`}
                style={{ color: C.redHi }}
              >
                El local y el reparto
              </p>
              <h2
                className={`${display.className} mt-3 uppercase leading-none tracking-wide`}
                style={{ fontSize: 'clamp(2.2rem, 7vw, 4rem)' }}
              >
                Dónde y cuándo
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <dl className="mt-8 space-y-4">
                <div className="flex flex-col gap-1">
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd className="text-[15px]">
                    {BIZ.address}, {BIZ.city}
                  </dd>
                </div>
                {HORARIO.map((h) => (
                  <div key={h.d} className="flex flex-col gap-1">
                    <dt className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.muted }}>
                      {h.d}
                    </dt>
                    <dd className={`${monoBold.className} text-[15px]`} style={{ color: C.yellow }}>
                      {h.h}
                    </dd>
                  </div>
                ))}
                <div className="flex flex-col gap-1">
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.muted }}>
                    Pedidos
                  </dt>
                  <dd className="text-[15px]">
                    WhatsApp {BIZ.phoneDisplay}
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.muted }}>
                    Web e Instagram
                  </dt>
                  <dd className={`${mono.className} flex flex-wrap gap-x-4 text-[13px]`}>
                    <a
                      href={BIZ.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                      style={{ color: C.paper }}
                    >
                      meshi.cl
                    </a>
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                      style={{ color: C.paper }}
                    >
                      {BIZ.instagramHandle}
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4"
                      style={{ color: C.paper }}
                    >
                      ver en Maps
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div
              className="overflow-hidden rounded-xl"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="h-full min-h-[320px] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cierre — banda roja de pedido */}
      <section style={{ backgroundColor: C.redDeep }}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 py-14 text-center md:py-20">
          <Reveal>
            <h2
              className={`${display.className} uppercase leading-none tracking-wide`}
              style={{ fontSize: 'clamp(2.4rem, 8vw, 4.6rem)', color: C.paper }}
            >
              ¿Hambre en Teno?
              <br />
              Pide ahora
            </h2>
            <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: '#FFF3EF' }}>
              Bandejas de sushi, handrolls y burger — escribe por WhatsApp y
              coordina tu pedido al tiro.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block rounded-md px-8 py-3 text-[15px] uppercase tracking-wider`}
              style={{ backgroundColor: C.carbon, color: C.yellow }}
            >
              Escribir a Meshi
            </a>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.carbon }} className="px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/demos/meshi-teno/logo.webp" alt="Logo de Meshi Teno" className="h-9 w-9 rounded-full object-cover" />
            <div>
              <p className={`${display.className} text-sm uppercase tracking-wide`}>{BIZ.name}</p>
              <p className={`${mono.className} text-[11px]`} style={{ color: C.muted }}>
                {BIZ.category} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
              </p>
            </div>
          </div>
          <nav className={`${mono.className} flex gap-5 text-[11px] uppercase tracking-wider`} style={{ color: C.muted }}>
            <a href="#carta" className="hover:underline">La carta</a>
            <a href="#resenas" className="hover:underline">Reseñas</a>
            <a href="#local" className="hover:underline">El local</a>
          </nav>
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </main>
  )
}
