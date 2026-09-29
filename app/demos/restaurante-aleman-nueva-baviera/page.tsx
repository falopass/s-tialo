import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#F8F3E9',
  soft: '#EFE7D5',
  ink: '#1F2A23',
  green: '#1F4633',
  greenDeep: '#14301F',
  gold: '#C9922B',
  bark: '#5E4228',
  line: 'rgba(31,42,35,0.14)',
}

// globals.css redefine --spacing-5 a --spacing-12; se restaura el valor por defecto de Tailwind
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurante-aleman-nueva-baviera',
  title: `${BIZ.name} | Gasthaus alemán en la Ruta 5 Sur, Retiro`,
  description:
    'Cocina alemana y horno de barro en una casa alpina entre jardines. Pernil, bockwurst, strudel y pastelería alemana en el km 333 de la Ruta 5 Sur, Retiro.',
  image: `${IMG}/fachada.webp`,
})

const CARTA = [
  {
    grupo: 'De la cocina alemana',
    platos: [
      'Pernil al horno',
      'Chuleta ahumada',
      'Bockwurst con papas fritas',
      'Bratwurst y longanizas',
      'Leberkäse',
      'Schnitzel',
    ],
  },
  {
    grupo: 'Horno de barro y mar',
    platos: [
      'Plateada al horno de barro',
      'Costillar de cerdo',
      'Pastel de jaibas',
      'Salmón',
    ],
  },
  {
    grupo: 'Pastelería alemana',
    platos: [
      'Mazapán',
      'Kuchen de nuez',
      'Strudel de manzana',
      'Tiramisú',
      'Anillo Frankfurt',
    ],
  },
]

const RESENAS = [
  {
    texto:
      'La comida exquisita, el servicio muy amable. El lugar es grande y muy buen ambiente.',
    autor: 'Pia Francisca Ardiles González',
    detalle: 'Reseña de Google · 5 estrellas',
  },
  {
    texto:
      'Excelente comida al paso, ideal para detener tu viaje al sur por un rico almuerzo en este restaurante. La carne muy bien sazonada.',
    autor: 'Mario Arias',
    detalle: 'Reseña de Google · 5 estrellas',
  },
]

// Banda decorativa fachwerk (entramado de vigas) hecha solo con gradientes CSS
function Fachwerk({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-7 w-full"
      style={{
        backgroundColor: C.gold,
        backgroundImage: `repeating-linear-gradient(${flip ? '-45deg' : '45deg'}, ${C.greenDeep} 0 10px, transparent 10px 34px)`,
        borderTop: `3px solid ${C.greenDeep}`,
        borderBottom: `3px solid ${C.greenDeep}`,
      }}
    />
  )
}

function SectionTitle({
  eyebrow,
  title,
  intro,
  center = false,
}: {
  eyebrow?: string
  title: string
  intro?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      {eyebrow && (
        <p
          className="text-xs font-bold uppercase tracking-[0.22em] mb-3"
          style={{ color: C.bark }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-4`}
        style={{ color: C.green }}
      >
        {title}
      </h2>
      {intro && (
        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(31,42,35,0.78)' }}>
          {intro}
        </p>
      )}
    </div>
  )
}

export default function NuevaBavieraPage() {
  return (
    <div className={body.className} style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .nb-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .nb-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .nb-btn:active { transform: translateY(0) scale(0.97); }
        .nb-btn:focus-visible { outline: 3px solid ${C.gold}; outline-offset: 3px; }
        @keyframes nb-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .nb-marquee-track { animation: nb-marquee 30s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .nb-marquee-track { animation: none; } }
      `}</style>

      <BlitzNav
        name="Nueva Baviera"
        links={[
          { label: 'La casa', href: '#casa' },
          { label: 'La carta', href: '#carta' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Cómo llegar', href: '#contacto' },
        ]}
        waLink={WA_LINK_MESA}
        ctaLabel="Reservar"
        fontClass={display.className}
        theme={{ over: 'dark', bar: C.greenDeep, ink: '#F8F3E9', line: 'rgba(255,255,255,0.12)', btnBg: C.gold, btnInk: C.greenDeep }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/fachada.webp`}
          alt="Casa alpina del Restaurante Alemán Nueva Baviera con jardines y flores"
          fill
          priority
          className="object-cover object-[50%_38%]"
          sizes="100vw"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,34,24,0.42) 0%, rgba(16,34,24,0.18) 40%, rgba(16,34,24,0.86) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pt-28 pb-8 md:pb-12">
          <Reveal>
            <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] text-white/85 mb-3">
              Restaurante alemán · Ruta 5 Sur km 333, Retiro
            </p>
            <h1
              className={`${display.className} text-5xl md:text-8xl leading-[0.95] text-white mb-4`}
            >
              Nueva Baviera
            </h1>
            <p className="text-base md:text-xl text-white/90 max-w-xl leading-relaxed mb-7">
              Cocina alemana y horno de barro en una casa alpina entre jardines,
              a orillas de la Panamericana.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} nb-btn inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.gold, color: C.greenDeep }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className={`${display.className} nb-btn inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 border-white/80 text-white hover:bg-white/10 tap-44`}
              >
                La carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8 border-t border-white/25 pt-4 flex flex-wrap gap-x-6 gap-y-2 text-[13px] md:text-sm text-white/85">
              <span>Desde 2007</span>
              <span>4,3★ · 1.877 reseñas en Google</span>
              <span>Todos los días 12:00 a 18:00</span>
            </div>
          </Reveal>
        </div>
      </section>

      <Fachwerk />

      {/* ── LA CASA ── */}
      <section id="casa" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <Reveal>
              <SectionTitle
                eyebrow="La casa"
                title="Una casa alpina al costado de la Ruta 5"
                intro="Desde 2007, el A-frame de entramado de madera de Nueva Baviera detiene el viaje entre Talca y Chillán: vigas oscuras, flores en el balcón, las banderas de los estados alemanes en el comedor y un horno de barro que sale andando."
              />
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
                {[
                  ['2007', 'Año de apertura'],
                  ['km 333', 'Ruta 5 Sur, El Membrillo'],
                  ['12:00-18:00', 'Todos los días, continuado'],
                  ['$18.000-$20.000', 'Valor promedio por persona'],
                ].map(([v, l]) => (
                  <div key={l} className="border-t-2 pt-3" style={{ borderColor: C.gold }}>
                    <dt className={`${display.className} text-xl md:text-2xl`} style={{ color: C.green }}>
                      {v}
                    </dt>
                    <dd className="text-xs md:text-sm mt-1" style={{ color: 'rgba(31,42,35,0.65)' }}>
                      {l}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <div className="grid grid-cols-12 gap-4">
              <Reveal className="col-span-12 md:col-span-8">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Interior de madera del restaurante con barra de barriles y banderas alemanas"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 55vw, 100vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={140} className="col-span-7 md:col-span-4 md:mt-10">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/jardin.webp`}
                    alt="Jardines y arboleda que rodean la casa alpina de Nueva Baviera"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 30vw, 60vw"
                  />
                </div>
              </Reveal>
              <Reveal delay={220} className="col-span-5 md:col-span-4 md:-mt-16 md:col-start-9">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg border-4" style={{ borderColor: C.paper }}>
                  <Image
                    src={`${IMG}/bandera.webp`}
                    alt="Bandera de Alemania frente al restaurante"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 22vw, 40vw"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="overflow-hidden py-3" style={{ backgroundColor: C.gold, color: C.greenDeep }}>
        <div className="nb-marquee-track flex whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <span
              key={dup}
              aria-hidden={dup === 1}
              className={`${display.className} flex-none flex items-center text-sm md:text-lg font-bold uppercase tracking-[0.18em]`}
            >
              {['Pernil al horno', 'Chuleta ahumada', 'Bockwurst', 'Bratwurst', 'Leberkäse', 'Schnitzel', 'Strudel de manzana', 'Mazapán'].map(
                (w) => (
                  <span key={w} className="mx-5 flex items-center gap-5">
                    {w} <span aria-hidden="true">·</span>
                  </span>
                ),
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── LA CARTA ── */}
      <section id="carta" className="py-16 md:py-24" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <SectionTitle
              eyebrow="La carta"
              title="Del pernil al strudel, sin apuro"
              intro="Clásicos alemanes, horno de barro maulino y una pastelería que la gente se lleva por caja. Menú a toda hora: desayuno, almuerzo y once."
            />
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-7 space-y-10">
              {CARTA.map((g, gi) => (
                <Reveal key={g.grupo} delay={gi * 100}>
                  <h3
                    className={`${display.className} text-xl md:text-2xl mb-4 pb-2 border-b-2`}
                    style={{ color: C.bark, borderColor: C.gold }}
                  >
                    {g.grupo}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                    {g.platos.map((p) => (
                      <li key={p} className="flex items-baseline gap-3 text-sm md:text-base">
                        <span
                          aria-hidden="true"
                          className="w-1.5 h-1.5 rotate-45 flex-none translate-y-[-2px]"
                          style={{ backgroundColor: C.gold }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
              <Reveal delay={140}>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(31,42,35,0.6)' }}>
                  Valor promedio por persona $18.000-$20.000 (principal, postre y bebida). Reciben
                  pesos, dólares, euros y tarjetas.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-5 space-y-4">
              <Reveal>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/bockwurst.webp`}
                    alt="Bockwurst con papas fritas, plato clásico de la casa"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/costillar.webp`}
                    alt="Costillar con puré salido del horno de barro"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </figure>
              </Reveal>
              <Reveal delay={200}>
                <figure className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={`${IMG}/postres.webp`}
                    alt="Buffet de postres y pastelería alemana"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 40vw, 100vw"
                  />
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO BREAK ── */}
      <section className="relative h-[46svh] min-h-[300px] overflow-hidden">
        <Image
          src={`${IMG}/tabla-baviera.webp`}
          alt="Tabla Baviera con fiambres, embutidos, aceitunas y pickles para compartir"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-x-0 bottom-0 px-5 md:px-8 py-4"
          style={{ background: 'linear-gradient(0deg, rgba(16,34,24,0.75), transparent)' }}
        >
          <p className={`${display.className} text-white text-lg md:text-2xl max-w-6xl mx-auto`}>
            Tabla Baviera: fiambres, embutidos y pickles para picar al centro
          </p>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section id="resenas" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <Reveal>
                <div className="rounded-lg p-6 md:p-7" style={{ backgroundColor: C.green, color: C.paper }}>
                  <p className={`${display.className} text-5xl md:text-6xl leading-none`}>4,3</p>
                  <p className="mt-2 text-sm opacity-90">de 5 estrellas</p>
                  <p className="mt-4 text-sm font-bold" style={{ color: C.gold }}>
                    1.877 reseñas en Google
                  </p>
                  <p className="mt-1 text-xs opacity-75">
                    {BIZ.tripadvisor} en Tripadvisor
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                <SectionTitle eyebrow="Reseñas" title="La parada que se vuelve costumbre" />
              </Reveal>
              <div className="mt-8 grid sm:grid-cols-2 gap-6">
                {RESENAS.map((r, i) => (
                  <Reveal key={r.autor} delay={i * 140}>
                    <blockquote
                      className="h-full rounded-lg border p-6 flex flex-col"
                      style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}
                    >
                      <p className="text-sm md:text-base leading-relaxed flex-1">
                        “{r.texto}”
                      </p>
                      <footer className="mt-4">
                        <p className="text-sm font-bold" style={{ color: C.green }}>
                          {r.autor}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'rgba(31,42,35,0.55)' }}>
                          {r.detalle}
                        </p>
                      </footer>
                    </blockquote>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Fachwerk flip />

      {/* ── CONTACTO ── */}
      <section id="contacto" className="py-16 md:py-24" style={{ backgroundColor: C.greenDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <Reveal>
              <p
                className="text-xs font-bold uppercase tracking-[0.22em] mb-3"
                style={{ color: C.gold }}
              >
                Cómo llegar
              </p>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`}>
                En el km 333 de la Ruta 5 Sur
              </h2>
              <ul className="space-y-3 text-sm md:text-base">
                <li>
                  <span className="opacity-70">Dirección: </span>
                  {BIZ.address}, {BIZ.city}, {BIZ.region}
                </li>
                <li>
                  <span className="opacity-70">Horario: </span>
                  {BIZ.hours}
                </li>
                <li>
                  <span className="opacity-70">Teléfono: </span>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44 inline-block">
                    {BIZ.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="opacity-70">Correo: </span>
                  <a href={`mailto:${BIZ.email}`} className="underline underline-offset-2 tap-44 inline-block">
                    {BIZ.email}
                  </a>
                </li>
                <li>
                  <span className="opacity-70">Instagram: </span>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 tap-44 inline-block"
                  >
                    {BIZ.igUser}
                  </a>
                </li>
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} nb-btn inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm px-7 py-3.5 tap-44`}
                  style={{ backgroundColor: C.gold, color: C.greenDeep }}
                >
                  Reservar mesa
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} nb-btn inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm px-7 py-3.5 border-2 tap-44`}
                  style={{ borderColor: 'rgba(248,243,233,0.7)', color: C.paper }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="rounded-lg overflow-hidden border" style={{ borderColor: 'rgba(248,243,233,0.2)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Restaurante Alemán Nueva Baviera, Ruta 5 Sur km 333, Retiro"
                className="w-full h-[280px] md:h-[360px] block"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8" style={{ backgroundColor: C.greenDeep, color: C.paper, borderTop: '1px solid rgba(248,243,233,0.15)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 justify-between text-xs md:text-sm">
          <p className={`${display.className} text-base`}>{BIZ.name}</p>
          <p className="opacity-70">
            {BIZ.address}, {BIZ.city} · {BIZ.hours}
          </p>
          <p className="opacity-70">Demo de muestra hecha por Sitiazo</p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
