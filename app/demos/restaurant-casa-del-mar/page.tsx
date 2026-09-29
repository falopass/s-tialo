/**
 * app/demos/restaurant-casa-del-mar/page.tsx
 *
 * Demo para Restaurant Casa del Mar (Constitución). Concepto visual:
 * menú editorial de manteles blancos — serif romana (Marcellus), arena
 * y espuma de mar, platos como filas de carta con puntos guía y foto.
 * Fotos reales de la ficha de Google Maps.
 */
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

export const metadata = demoMetadata({
  slug: 'restaurant-casa-del-mar',
  title: `${BIZ.full} — marisquería frente al mar, Constitución`,
  description:
    'Marisquería en la costanera de Constitución: pailas marinas, ceviche, pastel de jaiba y vista al Pacífico. 4,5 estrellas en Google.',
  image: `${IMG}/mesa-ventana.webp`,
})

const C = {
  sand: '#F4EDE0',
  foam: '#E8F1EC',
  card: '#FCF9F2',
  ink: '#12303D',
  inkSoft: '#4C6570',
  navy: '#0E2A3A',
  coral: '#C9743F',
  sea: '#2E6E7E',
  line: '#D9CDB4',
} as const

const SPACING = {
  '--spacing-5': '1.25rem',
  '--spacing-6': '1.5rem',
  '--spacing-7': '1.75rem',
  '--spacing-8': '2rem',
  '--spacing-9': '2.25rem',
  '--spacing-10': '2.5rem',
  '--spacing-11': '2.75rem',
  '--spacing-12': '3rem',
} as React.CSSProperties

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'La costanera', href: '#costanera' },
]

const CARTA = [
  {
    img: 'paila-marina.webp',
    num: '01',
    name: 'Paila marina',
    note: 'La clásica de la costa: mariscos y pescado en su jugo, en paila de greda.',
  },
  {
    img: 'ceviche.webp',
    num: '02',
    name: 'Ceviche de la casa',
    note: 'Torre fresca con camarón, cebolla morada y cilantro — de las fotos más pedidas.',
  },
  {
    img: 'salmon.webp',
    num: '03',
    name: 'Salmón con papas doradas',
    note: 'Corte firme a la plancha con ensalada — uno de los platos que más mencionan.',
  },
  {
    img: 'pulpo.webp',
    num: '04',
    name: 'Pulpo a la plancha',
    note: '«El pulpo les queda muy bien preparado», escriben en las reseñas.',
  },
]

const TAMBIEN = [
  'Pastel de jaiba',
  'Camarones apanados',
  'Congrio',
  'Postres y creppes',
  'Mimosa de la casa',
]

const REVIEWS = [
  {
    name: 'Daniela Pérez Muñoz',
    when: 'Hace 5 meses',
    stars: 5,
    text: 'Es un restaurante con vista al mar, es muy amplio por dentro, su comida es deliciosa y muy abundante. Tienen estacionamiento.',
  },
  {
    name: 'Md Gonzalo VR',
    when: 'Hace un año',
    stars: 5,
    text: 'Muy amplio lugar, lo que nos encanta. Hemos ido 3 veces: la comida es muy rica, sabrosos los platos, buena cantidad y calidad. Nos ha tocado que llega un violinista que ameniza el almuerzo. El pulpo les queda muy bien preparado.',
  },
  {
    name: 'Nicole Perez',
    when: 'Hace 4 meses',
    stars: 4,
    text: 'La comida es deliciosa. El lugar es muy hermoso y elegante, la atención es buena.',
  },
  {
    name: 'Andres Maggio Magofke',
    when: 'Hace 7 meses',
    stars: 5,
    text: 'Buena comida, atención rápida y cordial, lugar agradable y silencioso. Recomendable.',
  },
]

function Rule({ light = false }: { light?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(255,255,255,0.28)' : C.line }} />
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke={light ? 'rgba(255,255,255,0.55)' : C.sea} strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
        <path d="M2 12c2.5-4 5-4 7.5 0s5 4 7.5 0" />
        <path d="M7 12c2.5-4 5-4 7.5 0" />
      </svg>
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(255,255,255,0.28)' : C.line }} />
    </div>
  )
}

export default function CasaDelMarPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.sand, color: C.ink }}
    >
      <style>{`
        .cm-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .cm-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .cm-btn:active { transform: translateY(0) scale(0.97); }
        .cm-btn:focus-visible { outline: 3px solid ${C.sea}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- rótulo real del local */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-9 w-9 rounded-full object-cover shadow-md"
              aria-hidden="true"
            />
            <span className={`${display.className} text-lg md:text-xl leading-none`}>
              {BIZ.name}
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: 'rgba(244,237,224,0.96)',
          ink: C.ink,
          line: C.line,
          btnBg: C.coral,
          btnInk: '#FFF7EC',
        }}
      />

      {/* ── Hero: la mesa con vista ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.navy }}
      >
        <Image
          src={`${IMG}/mesa-ventana.webp`}
          alt="Mesa de Casa del Mar junto al ventanal: mantel blanco, cortina de crochet y el Pacífico al fondo"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,42,58,0.30) 0%, rgba(14,42,58,0.05) 40%, rgba(14,42,58,0.92) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-44">
          <Reveal>
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-4"
              style={{ color: '#BFE3DE' }}
            >
              {BIZ.address}
            </p>
            <h1
              className={`${display.className} text-[clamp(2.8rem,8.4vw,6.4rem)] leading-[1.0] mb-5`}
              style={{ color: '#FFFFFF' }}
            >
              Almuerzos frente
              <br />
              al Pacífico
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(255,255,255,0.92)' }}>
              Marisquería de salón amplio y manteles blancos sobre la
              costanera de Constitución. La mesa junto al ventanal es la
              que más piden.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cm-btn text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.coral, color: '#FFF7EC' }}
              >
                Reservar mesa
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="cm-btn inline-flex items-center gap-2.5 text-sm font-semibold px-5 py-3 tap-44 rounded-full"
                style={{ backgroundColor: 'rgba(255,255,255,0.14)', color: '#FFFFFF', backdropFilter: 'blur(6px)' }}
              >
                <Stars value={BIZ.rating} color="#FFD98E" />
                <span>
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                </span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <Rule light />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-7 md:py-9 text-center">
            {[
              ['4,5', 'estrellas en Google'],
              ['807', 'reseñas de comensales'],
              ['2', 'pisos: salón y terraza'],
              ['1434', 'Costanera del Mar'],
            ].map(([n, l]) => (
              <div key={l}>
                <p className={`${display.className} text-3xl md:text-4xl mb-1.5`} style={{ color: '#FFD98E' }}>
                  {n}
                </p>
                <p className="text-xs md:text-sm font-medium" style={{ color: 'rgba(191,227,222,0.85)' }}>
                  {l}
                </p>
              </div>
            ))}
          </div>
          <Rule light />
        </div>
      </section>

      {/* ── Editorial: el lugar ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.foam }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <div className="relative aspect-[4/5] md:aspect-[3.4/4] overflow-hidden">
                <Image
                  src={`${IMG}/vista-mar.webp`}
                  alt="Vista al mar desde el interior: el marco de la puerta, la costanera y la playa"
                  fill
                  sizes="(min-width: 768px) 55vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p
                className={`${display.className} text-sm md:text-base mt-4 italic`}
                style={{ color: C.inkSoft }}
              >
                El Pacífico entra por el ventanal — la foto la sacamos desde adentro.
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="md:pt-10">
                <p
                  className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] mb-4"
                  style={{ color: C.coral }}
                >
                  El lugar
                </p>
                <h2
                  className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-6`}
                  style={{ color: C.ink }}
                >
                  Una casa de madera
                  <br />
                  con cara al mar
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.inkSoft }}>
                  Dos pisos de salón amplio — arriba la terraza, abajo las mesas
                  con mantel blanco y el jarrón verde de siempre. Cuando hay
                  suerte, un violinista ameniza el almuerzo.
                </p>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.inkSoft }}>
                  La carta es de mar: pailas, ceviches, pescados a la plancha y
                  pastel de jaiba, en porciones que las reseñas llaman
                  «abundantes».
                </p>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={`${IMG}/salon.webp`}
                    alt="Salón principal de Casa del Mar: mesas con mantel blanco y decoración en el muro"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} text-sm mt-4 italic`} style={{ color: C.inkSoft }}>
                  El salón, listo para el almuerzo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta marina ── */}
      <section id="carta" className="py-16 md:py-24" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="text-center mb-12 md:mb-16">
              <p
                className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-3"
                style={{ color: C.sea }}
              >
                De la carta
              </p>
              <h2
                className={`${display.className} text-[clamp(2.2rem,6vw,4rem)] leading-[1.03]`}
                style={{ color: C.ink }}
              >
                Lo que llega a la mesa
              </h2>
            </div>
          </Reveal>
          <div className="max-w-4xl mx-auto">
            {CARTA.map((p, i) => (
              <Reveal key={p.num} delay={i * 80}>
                <div className="flex items-center gap-5 md:gap-8 py-6 md:py-7 border-b" style={{ borderColor: C.line }}>
                  <div className="relative w-20 h-20 md:w-28 md:h-28 shrink-0 overflow-hidden rounded-full">
                    <Image
                      src={`${IMG}/${p.img}`}
                      alt={`${p.name} — Casa del Mar`}
                      fill
                      sizes="(min-width: 768px) 112px, 80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline gap-3">
                      <span className={`${display.className} text-sm`} style={{ color: C.coral }}>
                        {p.num}
                      </span>
                      <h3
                        className={`${display.className} text-xl md:text-2xl whitespace-nowrap`}
                        style={{ color: C.ink }}
                      >
                        {p.name}
                      </h3>
                      <span
                        className="hidden sm:block flex-1 border-b border-dotted translate-y-[-4px]"
                        style={{ borderColor: C.inkSoft }}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm md:text-base mt-1.5 max-w-md" style={{ color: C.inkSoft }}>
                      {p.note}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <p className="text-center text-sm md:text-base mt-8" style={{ color: C.inkSoft }}>
                Y también: {TAMBIEN.join(' · ')}. Precio por persona {BIZ.price} (según Google).
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: pull quotes editoriales ── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.foam }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1fr_1.6fr] gap-10 md:gap-14">
            <Reveal>
              <div className="md:sticky md:top-28">
                <p
                  className="text-xs md:text-sm font-semibold uppercase tracking-[0.28em] mb-3"
                  style={{ color: C.coral }}
                >
                  Reseñas de Google
                </p>
                <p className={`${display.className} text-6xl md:text-7xl leading-none mb-3`} style={{ color: C.ink }}>
                  {String(BIZ.rating).replace('.', ',')}
                </p>
                <Stars value={BIZ.rating} color={C.coral} className="w-5 h-5" />
                <p className="text-sm md:text-base mt-3" style={{ color: C.inkSoft }}>
                  {BIZ.reviews} reseñas publicadas
                </p>
              </div>
            </Reveal>
            <div className="space-y-10 md:space-y-12">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 70}>
                  <blockquote className="relative pl-8 md:pl-10">
                    <span
                      className={`${display.className} absolute left-0 top-0 text-5xl md:text-6xl leading-[0.6]`}
                      style={{ color: C.coral }}
                      aria-hidden="true"
                    >
                      “
                    </span>
                    <p className="text-lg md:text-xl leading-relaxed mb-4" style={{ color: C.ink }}>
                      {r.text}
                    </p>
                    <footer className="flex items-center gap-3">
                      <Stars value={r.stars} color={C.sea} />
                      <span className="text-xs md:text-sm font-semibold uppercase tracking-wider" style={{ color: C.inkSoft }}>
                        {r.name} · {r.when}
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Costanera + mapa ── */}
      <section id="costanera" className="py-16 md:py-24" style={{ backgroundColor: C.sand }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="text-center mb-10 md:mb-14">
            <p
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] mb-3"
              style={{ color: C.sea }}
            >
              La costanera
            </p>
            <h2 className={`${display.className} text-[clamp(2rem,5.4vw,3.6rem)] leading-[1.05]`} style={{ color: C.ink }}>
              Frente a la playa, al sur del centro
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div
                className="p-7 md:p-9 h-full flex flex-col justify-center border-t-4"
                style={{ backgroundColor: C.card, borderColor: C.sea, boxShadow: '0 10px 26px rgba(18,48,61,0.10)' }}
              >
                <ul className="space-y-5 text-[15px] md:text-base">
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-5.1-7-11a7 7 0 1 1 14 0c0 5.9-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.4" />
                    </svg>
                    <div>
                      <p className="font-bold" style={{ color: C.ink }}>{BIZ.address}</p>
                      <p style={{ color: C.inkSoft }}>Sobre la costanera, con vista directa al mar</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 3" />
                    </svg>
                    <div>
                      {BIZ.hours.map(([d, h]) => (
                        <p key={d} style={{ color: C.inkSoft }}>
                          <span className="font-bold" style={{ color: C.ink }}>{d}:</span> {h}
                        </p>
                      ))}
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke={C.coral} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 5h16v14H4z" />
                      <path d="M4 7l8 6 8-6" />
                    </svg>
                    <div>
                      <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-2" style={{ color: C.ink }}>
                        {BIZ.phoneDisplay}
                      </a>
                      <p style={{ color: C.inkSoft }}>Consumo en el local y delivery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative h-72 md:h-full min-h-[300px] overflow-hidden"
                style={{ boxShadow: '0 14px 30px rgba(18,48,61,0.16)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.full}, Constitución`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 md:py-20 text-center" style={{ backgroundColor: C.sea }}>
        <Reveal>
          <p className={`${display.className} italic text-xl md:text-2xl mb-3`} style={{ color: '#CFE8E4' }}>
            La mesa junto al ventanal se llena rápido
          </p>
          <h2 className={`${display.className} text-[clamp(2rem,6vw,3.6rem)] leading-[1.02] mb-8`} style={{ color: '#FFFFFF' }}>
            Reserva con anticipación
          </h2>
          <a
            href={WA_LINK_MESA}
            target="_blank"
            rel="noopener noreferrer"
            className={`${display.className} cm-btn inline-block text-base px-9 py-4 tap-44`}
            style={{ backgroundColor: C.card, color: C.sea }}
          >
            Reservar por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="py-8" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium" style={{ color: 'rgba(191,227,222,0.8)' }}>
            {BIZ.full} · {BIZ.address}
          </p>
          <div className="flex items-center gap-5 text-sm font-medium" style={{ color: 'rgba(191,227,222,0.8)' }}>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Facebook
            </a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:underline tap-44 inline-flex items-center">
              Maps
            </a>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp" />
    </div>
  )
}
