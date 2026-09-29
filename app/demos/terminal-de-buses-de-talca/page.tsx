import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
  variable: '--font-mono',
})
const monoLight = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-mono-light',
})

// globals.css redefine --spacing-5..12: volver al default de Tailwind (n*4px)
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  asfalto: '#141619',
  asfaltoDeep: '#0C0E10',
  hormigon: '#EDEAE2',
  hormigonDeep: '#DEDAD0',
  rojo: '#E32026',
  verde: '#7DC242',
  ambar: '#F5B921',
  tinta: '#1B1E22',
  tintaSuave: '#4A4F55',
  linea: 'rgba(237,234,226,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'terminal-de-buses-de-talca',
  title: 'Terminal de Buses de Talca — Andenes, empresas y cómo llegar',
  description:
    'El terminal de Talca en 2 Sur 1932: andenes, empresas que operan, boleterías, datos de visitantes y mapa. Teléfono +56 71 231 0815.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'Pizarra', href: '#pizarra' },
  { label: 'Andenes', href: '#andenes' },
  { label: 'Datos', href: '#datos' },
  { label: 'Mapa', href: '#mapa' },
]

// Solo empresas y destinos visibles en fotos publicadas del terminal.
const PIZARRA = [
  { empresa: 'Pullman Bus', destino: 'Santiago', nota: 'andén interurbano' },
  { empresa: 'Buses Altas Cumbres', destino: 'Santiago', nota: 'sala de espera propia' },
  { empresa: 'Bio Linatal', destino: 'Concepción', nota: 'vía Parral · Chillán' },
  { empresa: 'Linatal', destino: 'Linares', nota: 'ruta regional' },
  { empresa: 'Turbus', destino: 'Santiago y regiones', nota: 'doble piso' },
]

const ADENTRO = [
  {
    src: IMG.boleterias,
    titulo: 'Boleterías',
    texto: 'Módulos de cada empresa en el hall central: Santiago, Constitución, Linares y regiones.',
    alt: 'Hall interior del terminal con los módulos de boleterías de las empresas de buses',
  },
  {
    src: IMG.interior,
    titulo: 'Sala de espera',
    texto: 'Sector techado con asientos y locales para la espera entre buses.',
    alt: 'Sala de espera interior del terminal con boleterías y reloj mural',
  },
  {
    src: IMG.embarque,
    titulo: 'Embarque',
    texto: 'Los pasajeros suben directo al bus en el andén, con equipaje abajo.',
    alt: 'Pasajeros embarcando en un bus con destino Santiago en el andén del terminal',
  },
  {
    src: IMG.concurso,
    titulo: 'Puestos y locales',
    texto: 'Locales de comida, kioscos y la feria de puestos al costado del terminal.',
    alt: 'Concurso de pasajeros con equipaje frente a locales y puestos del terminal',
  },
]

const REVIEWS = [
  {
    name: 'Marta Włodarz',
    meta: 'Local Guide · 394 fotos',
    text: 'Good buses to local vineyards.',
    nota: 'reseña en inglés',
  },
  {
    name: 'Blu Wirisi',
    meta: 'Local Guide · 689 fotos',
    text: 'Very busy. Try to get there ahead of time.',
    nota: 'reseña en inglés',
  },
  {
    name: 'Rafael Literal',
    meta: 'Local Guide · Google Maps',
    text: 'Too small for the amount of users. Two new doors were opened, which is an improvement but too little and too late.',
    nota: 'reseña en inglés',
  },
]

const DATOS = [
  'En domingos y vísperas de feriado el terminal se llena: llega con tiempo extra.',
  'Para viajar a Santiago un domingo, compra el pasaje uno o dos días antes.',
  'Los taxis y colectivos esperan en la salida de 2 Sur, junto a la fachada principal.',
]

export default function TerminalDeBusesDeTalca() {
  return (
    <main
      className={`${body.variable} ${display.variable} ${mono.variable} ${monoLight.variable} font-[family-name:var(--font-body)] antialiased`}
      style={{ ...SPACING, backgroundColor: C.asfalto, color: C.hormigon }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            <img src={IMG.logo} alt="" className="h-7 w-9 rounded-sm object-cover" aria-hidden="true" />
            <span className="font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide">
              Terminal de Talca
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass="font-[family-name:var(--font-display)]"
        theme={{
          over: 'dark',
          bar: C.asfaltoDeep,
          ink: C.hormigon,
          line: C.linea,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* HERO — andén al atardecer */}
      <header className="relative overflow-hidden">
        <Image
          src={IMG.hero}
          alt="Andén del Terminal de Buses de Talca al atardecer, con la marquesina roja y buses estacionados"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,14,16,0.62) 0%, rgba(12,14,16,0.34) 45%, rgba(20,22,25,0.96) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto flex min-h-[92svh] max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:px-8">
          <Reveal>
            <p
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]"
              style={{ color: C.ambar }}
            >
              Talca · Maule · 2 Sur 1932
            </p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[13vw] font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              De aquí sale
              <br />
              la ciudad<span style={{ color: C.rojo }}>.</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: 'rgba(237,234,226,0.85)' }}>
              {BIZ.reviews} reseñas lo respaldan como el punto de partida de la región: buses
              interurbanos, boleterías y locales bajo un mismo techo.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center gap-2 rounded-full px-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide"
                style={{ backgroundColor: C.rojo, color: '#fff' }}
              >
                Llamar al terminal
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border px-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide"
                style={{ borderColor: 'rgba(237,234,226,0.4)', color: C.hormigon }}
              >
                Cómo llegar
              </a>
              <span
                className="inline-flex items-center gap-2 rounded-full px-4 py-2 font-[family-name:var(--font-mono-light)] text-xs"
                style={{ backgroundColor: 'rgba(12,14,16,0.66)', color: 'rgba(237,234,226,0.9)' }}
              >
                <Stars value={BIZ.rating} color={C.ambar} className="h-3.5 w-3.5" /> {BIZ.rating.toFixed(1)} · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div
              className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t pt-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]"
              style={{ borderColor: C.linea, color: 'rgba(237,234,226,0.75)' }}
            >
              <span>Santiago</span>
              <span>Concepción</span>
              <span>Linares</span>
              <span>Parral · Chillán</span>
              <span>Constitución</span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* LA PIZARRA — tablero de salidas */}
      <section id="pizarra" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p
                className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]"
                style={{ color: C.verde }}
              >
                La pizarra
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-none md:text-5xl">
                Quiénes salen del andén
              </h2>
            </div>
            <p className="max-w-xs font-[family-name:var(--font-mono-light)] text-xs leading-relaxed" style={{ color: 'rgba(237,234,226,0.6)' }}>
              Empresas y destinos vistos en los andenes y boleterías del terminal.
              Frecuencias varían por empresa.
            </p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div
            className="mt-8 overflow-hidden rounded-2xl border"
            style={{ borderColor: C.linea, backgroundColor: C.asfaltoDeep }}
          >
            <div
              className="grid grid-cols-[1fr_auto] items-center gap-4 border-b px-5 py-3 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] md:grid-cols-[1.2fr_1fr_auto]"
              style={{ borderColor: C.linea, color: 'rgba(237,234,226,0.5)' }}
            >
              <span>Empresa</span>
              <span className="hidden md:block">Destino</span>
              <span>Estado</span>
            </div>
            {PIZARRA.map((f, i) => (
              <div
                key={f.empresa}
                className="grid grid-cols-[1fr_auto] items-center gap-4 px-5 py-4 md:grid-cols-[1.2fr_1fr_auto]"
                style={{
                  borderTop: i === 0 ? 'none' : `1px solid ${C.linea}`,
                  backgroundColor: i % 2 === 0 ? 'transparent' : 'rgba(237,234,226,0.03)',
                }}
              >
                <div>
                  <p className="font-[family-name:var(--font-display)] text-lg font-medium uppercase tracking-wide">
                    {f.empresa}
                  </p>
                  <p className="font-[family-name:var(--font-mono-light)] text-[11px]" style={{ color: 'rgba(237,234,226,0.55)' }}>
                    {f.nota}
                  </p>
                </div>
                <p className="hidden font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.14em] md:block" style={{ color: C.ambar }}>
                  {f.destino}
                </p>
                <span
                  className="rounded-full px-3 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.16em]"
                  style={{ backgroundColor: 'rgba(125,194,66,0.14)', color: C.verde }}
                >
                  En andén
                </span>
              </div>
            ))}
            <p
              className="border-t px-5 py-3 font-[family-name:var(--font-mono-light)] text-[11px]"
              style={{ borderColor: C.linea, color: 'rgba(237,234,226,0.5)' }}
            >
              * Listado referencial según fotos publicadas por visitantes del terminal.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ANDENES — tira fotográfica */}
      <section id="andenes" className="py-4">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <Reveal>
            <div className="grid gap-3 md:grid-cols-[1.4fr_1fr_1fr]">
              <figure className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={IMG.fachada}
                  alt="Fachada del Terminal de Buses de Talca con el logo tbt y letrero principal sobre 2 Sur"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute bottom-0 left-0 px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                  style={{ backgroundColor: 'rgba(12,14,16,0.78)', color: C.hormigon }}
                >
                  Fachada · 2 Sur 1932
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={IMG.andenes}
                  alt="Buses de varias empresas estacionados en los andenes techados del terminal"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute bottom-0 left-0 px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                  style={{ backgroundColor: 'rgba(12,14,16,0.78)', color: C.hormigon }}
                >
                  Andenes
                </figcaption>
              </figure>
              <figure className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
                <Image
                  src={IMG.busLinatal}
                  alt="Frontal de un bus Bio Linatal Scania estacionado en el andén del terminal"
                  fill
                  sizes="(min-width: 768px) 25vw, 100vw"
                  className="object-cover"
                />
                <figcaption
                  className="absolute bottom-0 left-0 px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                  style={{ backgroundColor: 'rgba(12,14,16,0.78)', color: C.hormigon }}
                >
                  Bio Linatal
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <figure className="relative mt-3 overflow-hidden rounded-2xl" style={{ aspectRatio: '21/9' }}>
              <Image
                src={IMG.aerea}
                alt="Vista aérea del Terminal de Buses de Talca con la manzana completa de andenes y estacionamientos"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <figcaption
                className="absolute bottom-0 left-0 px-4 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em]"
                style={{ backgroundColor: 'rgba(12,14,16,0.78)', color: C.hormigon }}
              >
                La manzana completa · vista aérea
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ADENTRO — servicios del terminal */}
      <section className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <p
            className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]"
            style={{ color: C.ambar }}
          >
            Adentro del techo
          </p>
          <h2 className="mt-3 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-none md:text-5xl">
            Todo pasa por este hall
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ADENTRO.map((s, i) => (
            <Reveal key={s.titulo} delay={i * 70}>
              <article
                className="group overflow-hidden rounded-2xl border"
                style={{ borderColor: C.linea, backgroundColor: C.asfaltoDeep }}
              >
                <div className="relative" style={{ aspectRatio: '4/5' }}>
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold uppercase tracking-wide">
                    {s.titulo}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: 'rgba(237,234,226,0.7)' }}>
                    {s.texto}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* DATOS DE VISITANTES */}
      <section id="datos" className="border-y" style={{ borderColor: C.linea, backgroundColor: C.asfaltoDeep }}>
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8">
          <Reveal>
            <p
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]"
              style={{ color: C.rojo }}
            >
              Antes de salir
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold uppercase leading-none md:text-4xl">
              Lo que repiten quienes viajan
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {DATOS.map((d, i) => (
              <Reveal key={i} delay={i * 70}>
                <div
                  className="flex h-full items-start gap-3 rounded-xl border p-4"
                  style={{ borderColor: C.linea }}
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-[family-name:var(--font-mono)] text-[11px]"
                    style={{ backgroundColor: C.rojo, color: '#fff' }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(237,234,226,0.85)' }}>
                    {d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {REVIEWS.map((r) => (
                <blockquote
                  key={r.name}
                  className="rounded-xl border p-5"
                  style={{ borderColor: C.linea, backgroundColor: 'rgba(237,234,226,0.03)' }}
                >
                  <Stars value={5} color={C.ambar} className="h-3 w-3" />
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(237,234,226,0.9)' }}>
                    “{r.text}”
                  </p>
                  <footer className="mt-3 font-[family-name:var(--font-mono-light)] text-[11px]" style={{ color: 'rgba(237,234,226,0.55)' }}>
                    {r.name} · {r.meta} · {r.nota}
                  </footer>
                </blockquote>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="mapa" className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <p
              className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em]"
              style={{ color: C.verde }}
            >
              Ubicación
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-none md:text-5xl">
              Sobre 2 Sur,
              <br />
              a pasos del centro
            </h2>
            <dl className="mt-8 space-y-4">
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}, ${BIZ.region}`],
                ['Teléfono', BIZ.phoneDisplay],
                ['Código plus', BIZ.plusCode],
                ['Categoría', BIZ.rubro],
                ['Reseñas', `${BIZ.rating} ★ · ${BIZ.reviews} en Google Maps`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-4 border-b pb-3" style={{ borderColor: C.linea }}>
                  <dt className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.18em]" style={{ color: 'rgba(237,234,226,0.55)' }}>
                    {k}
                  </dt>
                  <dd className="text-right text-sm font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <a
              href={CALL_LINK}
              className="mt-8 inline-flex h-11 items-center rounded-full px-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide"
              style={{ backgroundColor: C.verde, color: C.asfaltoDeep }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
          <Reveal delay={100}>
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: C.linea, minHeight: '320px' }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-full min-h-[320px] w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-5 pb-20 md:px-8">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-3xl p-8 md:p-12"
            style={{ backgroundColor: C.rojo }}
          >
            <div
              className="pointer-events-none absolute -right-8 -top-10 font-[family-name:var(--font-display)] text-[180px] font-bold uppercase leading-none opacity-15"
              aria-hidden="true"
            >
              tbt
            </div>
            <p className="font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.22em] text-white/80">
              Próxima salida
            </p>
            <h2 className="mt-3 max-w-xl font-[family-name:var(--font-display)] text-4xl font-semibold uppercase leading-none text-white md:text-5xl">
              Tu bus te está esperando
            </h2>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className="inline-flex h-11 items-center rounded-full bg-white px-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide"
                style={{ color: C.rojo }}
              >
                Llamar al terminal
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center rounded-full border border-white/60 px-6 font-[family-name:var(--font-display)] text-sm font-semibold uppercase tracking-wide text-white"
              >
                Abrir en Maps
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="border-t" style={{ borderColor: C.linea, backgroundColor: C.asfaltoDeep }}>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-6 md:px-8">
          <p className="font-[family-name:var(--font-mono-light)] text-[11px]" style={{ color: 'rgba(237,234,226,0.5)' }}>
            {BIZ.name} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </p>
          <DemoBand name="Terminal de Buses de Talca" />
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar al ${BIZ.short}`} bg={C.rojo} fg="#fff" />
    </main>
  )
}
