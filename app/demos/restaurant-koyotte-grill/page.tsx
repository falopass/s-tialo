import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/** Muro de estuco pintado a mano: letras negras, ladrillo y el blanco del letrero. */
const C = {
  plaster: '#EDEAE0',
  plasterDeep: '#E0DACA',
  ink: '#1D1A12',
  brick: '#9E4E2D',
  white: '#FBF8EE',
  muted: '#5D5546',
  line: 'rgba(29,26,18,0.2)',
  creamSoft: 'rgba(251,248,238,0.85)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-koyotte-grill',
  title: 'Restaurant Koyotte Grill — La parrilla pintada en la pared, Colbún',
  description:
    "Restaurant y parrilla en O'Higgins 313, Colbún: salmón a la plancha, parrilladas, pollo mariscal, pastas y caldillo con grio. 4,5 estrellas en Google. Reserva por WhatsApp.",
  image: `${IMG}/03.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const MARQUEE = [
  'Salmón a la plancha',
  'Parrilladas',
  'Pollo mariscal',
  'Caldillo con grio',
  'Pastas',
  'Ceviche',
  'Tablas',
  "O'Higgins 313, Colbún",
]

const MURO = [
  { line: 'Caldillo', sub: 'con grio frito' },
  { line: 'Parrilladas', sub: 'a la parrilla' },
  { line: 'Pollo mariscal', sub: 'de la casa' },
  { line: 'Salmón', sub: 'a la plancha' },
]

const PLATOS = [
  {
    src: `${IMG}/02.webp`,
    alt: 'Risotto de camarones con lámina de limón en Koyotte Grill, Colbún',
    tag: 'Risotto de camarones',
    desc: 'El plato que más repiten las reseñas, junto al salmón camarón.',
  },
  {
    src: `${IMG}/08.webp`,
    alt: 'Ceviche fresco servido en Restaurant Koyotte Grill',
    tag: 'Ceviche',
    desc: 'Fresco, de entrada o de fondo, como sale de la cocina.',
  },
  {
    src: `${IMG}/07.webp`,
    alt: 'Bistec a lo pobre con papas fritas y huevo en Koyotte Grill',
    tag: 'Bistec a lo pobre',
    desc: 'Contundente, como prometen los platos de la casa.',
  },
]

export default function KoyotteGrill() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.plaster, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: C.plaster,
          ink: C.ink,
          line: C.line,
          btnBg: C.brick,
          btnInk: C.white,
        }}
      />

      {/* ── Hero: el muro pintado ── */}
      <section id="inicio" className="relative">
        <div className="relative w-full min-h-[560px] md:min-h-[680px]">
          <Image
            src={`${IMG}/03.webp`}
            alt="Fachada de Restaurant Koyotte Grill en Colbún: muro pintado a mano con la carta y letrero circular"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(18,14,8,0.5) 0%, rgba(18,14,8,0.3) 45%, rgba(18,14,8,0.82) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Letrero circular de Koyotte Grill: cocina casera y hospedaje"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 mb-5"
                  style={{ borderColor: C.white, boxShadow: '0 4px 0 rgba(18,14,8,0.5)' }}
                />
                <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3`} style={{ color: C.creamSoft }}>
                  Restaurant y parrilla · Colbún, Maule
                </p>
                <h1
                  className={`${display.className} uppercase leading-[0.9] tracking-[0.01em] text-[clamp(2.6rem,10vw,6.5rem)] font-extrabold`}
                  style={{ color: C.white, textShadow: '0 3px 0 rgba(18,14,8,0.65)' }}
                >
                  La carta pintada
                  <br />
                  <span style={{ color: '#E8A87E' }}>en la pared</span>
                </h1>
                <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(251,248,238,0.9)' }}>
                  Salmón a la plancha, parrilladas, pollo mariscal, pastas y caldillo con grio:
                  el menú de Koyotte se lee desde la calle, en O'Higgins 313.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.brick, color: C.white, boxShadow: '0 4px 0 rgba(18,14,8,0.55)' }}
                  >
                    Reservar por WhatsApp →
                  </a>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: 'rgba(18,14,8,0.55)' }}>
                    <Stars value={4.5} color="#E8A87E" className="w-4 h-4" />
                    <span className={`${mono.className} text-xs font-bold`} style={{ color: C.white }}>
                      {BIZ.rating} · {BIZ.reviews} opiniones
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta corrida: lo que dice el muro ── */}
      <div className="overflow-hidden border-y-4 py-3" style={{ borderColor: C.ink, backgroundColor: C.ink }} aria-hidden="true">
        <div className="koyotte-marquee flex whitespace-nowrap">
          {[0, 1].map((rep) => (
            <span key={rep} className="flex shrink-0">
              {MARQUEE.map((m) => (
                <span
                  key={`${rep}-${m}`}
                  className={`${display.className} uppercase font-bold text-lg md:text-2xl px-6`}
                  style={{ color: C.plaster }}
                >
                  {m} <span className="px-2" style={{ color: C.brick }}>·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Lo que dice la pared ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] mb-4`} style={{ color: C.brick }}>
                escrito a mano alzada en la fachada
              </p>
            </Reveal>
            <div>
              {MURO.map((m, i) => (
                <Reveal key={m.line} delay={i * 80}>
                  <div className="border-b-4 py-3 md:py-4" style={{ borderColor: C.ink }}>
                    <p className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.1rem,7vw,4.2rem)]`}>
                      {m.line}
                    </p>
                    <p className={`${mono.className} text-[11px] md:text-sm uppercase tracking-[0.28em] mt-1`} style={{ color: C.brick }}>
                      {m.sub}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="mt-6 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                La fachada de Koyotte es su propia carta: cada plato fuerte está pintado
                a mano sobre el estuco, como los letreros de antes. Adentro, cocina
                casera, consomé de entrada y garzones que las reseñas mencionan por
                su nombre.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6 space-y-6">
            <Reveal delay={100}>
              <figure className="relative aspect-[4/3] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '8px 8px 0 rgba(29,26,18,0.9)' }}>
                <Image
                  src={`${IMG}/02.webp`}
                  alt="Risotto de camarones con lámina de limón, plato de Koyotte Grill"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={160}>
              <div className="grid grid-cols-2 gap-6">
                <figure className="relative aspect-square overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '6px 6px 0 rgba(29,26,18,0.9)' }}>
                  <Image
                    src={`${IMG}/09.webp`}
                    alt="Ensalada fresca servida en Koyotte Grill, Colbún"
                    fill
                    sizes="(min-width: 768px) 22vw, 50vw"
                    className="object-cover"
                  />
                </figure>
                <figure className="relative aspect-square overflow-hidden border-4 mt-8" style={{ borderColor: C.ink, boxShadow: '6px 6px 0 rgba(29,26,18,0.9)' }}>
                  <Image
                    src={`${IMG}/14.webp`}
                    alt="Salmón camarón, uno de los platos más pedidos de Koyotte Grill"
                    fill
                    sizes="(min-width: 768px) 22vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Platos que mandan ── */}
      <section style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] mb-3`} style={{ color: '#E8A87E' }}>
              de la cocina a la mesa
            </p>
            <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.3rem,7vw,4.6rem)] mb-10`} style={{ color: C.white }}>
              Platos que mandan
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {PLATOS.map((p, i) => (
              <Reveal key={p.tag} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <figure className="border-4 h-full flex flex-col" style={{ borderColor: C.white }}>
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="p-5">
                    <p className={`${display.className} uppercase font-extrabold text-2xl md:text-3xl leading-tight`} style={{ color: C.white }}>
                      {p.tag}
                    </p>
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,248,238,0.75)' }}>
                      {p.desc}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={220} className="col-span-12 md:col-span-7">
              <figure className="border-4 h-full flex flex-col" style={{ borderColor: C.white }}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={`${IMG}/06.webp`}
                    alt="Tabla de quesos y jamones para compartir en Koyotte Grill"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5">
                  <p className={`${display.className} uppercase font-extrabold text-2xl md:text-3xl leading-tight`} style={{ color: C.white }}>
                    Tablas y copa
                  </p>
                  <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,248,238,0.75)' }}>
                    Tablas para picar, pisco sour y jugos naturales que las reseñas destacan.
                  </p>
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={260} className="col-span-12">
              <div className="border-4 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-8" style={{ borderColor: '#E8A87E', backgroundColor: 'rgba(232,168,126,0.08)' }}>
                <p className={`${display.className} uppercase font-extrabold text-2xl md:text-3xl leading-tight shrink-0`} style={{ color: '#E8A87E' }}>
                  El consomé de bienvenida
                </p>
                <p className="md:mt-0 mt-1 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,248,238,0.85)' }}>
                  “Dan un consomé de entrada maravilloso”, escribe una clienta. Detalle de
                  cocina casera que se repite en las reseñas, junto al pisco sour y los
                  jugos naturales.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Eventos y hospedaje ── */}
      <section id="eventos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 items-center">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="relative aspect-[16/10] overflow-hidden border-4" style={{ borderColor: C.ink, boxShadow: '8px 8px 0 rgba(29,26,18,0.9)' }}>
              <Image
                src={`${IMG}/05.webp`}
                alt="Mesa preparada para un evento o celebración en Koyotte Grill"
                fill
                sizes="(min-width: 768px) 56vw, 100vw"
                className="object-cover"
              />
            </figure>
            <p className={`${mono.className} mt-3 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              mesas de eventos y banquetería · foto real del local
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-5">
            <Reveal delay={80}>
              <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.2rem,6.5vw,4rem)] mb-5`}>
                Para celebrar <span style={{ color: C.brick }}>y quedarse</span>
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.muted }}>
                Las fotos del local muestran montajes de banquetería: mesas de postres,
                salón para celebraciones y asados. Y el propio letrero lo anuncia:
                además de restaurant, Koyotte ofrece <strong>hospedaje</strong> en pleno Colbún.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] px-4 py-2.5 border-2`} style={{ borderColor: C.ink, backgroundColor: C.plasterDeep }}>
                  Banquetería y eventos
                </span>
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em] px-4 py-2.5 border-2`} style={{ borderColor: C.brick, color: C.brick, backgroundColor: C.white }}>
                  Hospedaje
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.plasterDeep }} className="border-y-4">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ borderColor: C.ink }}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.2rem,6.5vw,4.4rem)]`}>
                Lo que cuentan <span style={{ color: C.brick }}>los que van</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={4.5} color={C.brick} className="w-5 h-5" />
                <span className={`${mono.className} text-sm font-bold`}>
                  {BIZ.rating} en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90} className={`col-span-12 ${i === 0 ? 'md:col-span-7' : 'md:col-span-5'}`}>
                <figure className="h-full border-4 p-5 md:p-6 flex flex-col" style={{ backgroundColor: i === 0 ? C.ink : C.white, borderColor: C.ink, boxShadow: '6px 6px 0 rgba(29,26,18,0.85)' }}>
                  <Stars value={r.stars} color={i === 0 ? '#E8A87E' : C.brick} className="w-4 h-4 mb-3" />
                  <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? 'rgba(251,248,238,0.92)' : C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: i === 0 ? '#E8A87E' : C.muted }}>
                    {r.author} · {r.when} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs md:text-sm font-bold uppercase tracking-[0.14em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.brick }}
            >
              Leer las {BIZ.reviews} opiniones en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} uppercase font-extrabold leading-[0.92] text-[clamp(2.2rem,6.5vw,4.4rem)] mb-10`}>
            En pleno <span style={{ color: C.brick }}>O'Higgins</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="border-4 p-2.5 pb-9" style={{ backgroundColor: C.white, borderColor: C.ink, boxShadow: '8px 8px 0 rgba(29,26,18,0.9)', transform: 'rotate(-0.8deg)' }}>
              <div className="relative w-full aspect-[16/10] overflow-hidden border-2" style={{ borderColor: C.ink }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <figcaption className={`${mono.className} pt-2.5 px-1 text-[10px] md:text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <div className="border-4 p-5 md:p-6" style={{ backgroundColor: C.ink, borderColor: C.ink, boxShadow: '8px 8px 0 rgba(29,26,18,0.4)' }}>
              <address className="not-italic">
                <p className={`${display.className} uppercase font-extrabold text-xl md:text-2xl leading-tight`} style={{ color: C.white }}>
                  {BIZ.address}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2 leading-relaxed`} style={{ color: 'rgba(251,248,238,0.75)' }}>
                  {BIZ.city}, {BIZ.region}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: '#E8A87E' }}>
                  {BIZ.phoneDisplay}
                </a>
                <p className={`${mono.className} text-xs mt-4 pt-4 border-t`} style={{ color: 'rgba(251,248,238,0.75)', borderColor: 'rgba(251,248,238,0.2)' }}>
                  Abre {BIZ.opens} · Cocina casera · Hospedaje
                </p>
              </address>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.plaster }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-11 w-11 rounded-full object-cover border-2" style={{ borderColor: '#E8A87E' }} aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase font-extrabold text-lg leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(237,234,224,0.7)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: '#E8A87E' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(237,234,224,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(237,234,224,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.plaster }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#E8A87E' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        @keyframes koyotte-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .koyotte-marquee {
          animation: koyotte-marquee 28s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .koyotte-marquee { animation: none; }
        }
      `}</style>
    </div>
  )
}
