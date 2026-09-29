import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, REVIEWS, CARTA } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/** Techo de caña, lámparas tejidas y el verde petróleo de sus muros. */
const C = {
  teal: '#0E5451',
  cream: '#F1E8D5',
  creamSoft: '#E7DBC2',
  wood: '#8A5A33',
  mustard: '#D9A441',
  gold: '#E9C46A',
  ink: '#1C1810',
  muted: '#5E5748',
  line: 'rgba(28,24,16,0.18)',
  creamOnTeal: 'rgba(241,232,213,0.85)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sebago-restobar',
  title: 'Sebago Restobar — Una casa como ninguna, Hualañé',
  description:
    'Restobar en Arturo Prat 290, Hualañé: ceviches, tablas, pizzas de masa fermentada 24 horas, burgers y mojitos. 4,6 estrellas en Google. Reserva por WhatsApp.',
  image: `${IMG}/15.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La casa', href: '#casa' },
  { label: 'Cómo llegar', href: '#como-llegar' },
]

const AMBIENTE = [
  {
    src: `${IMG}/01.webp`,
    alt: 'Techo de caña con lámparas tejidas colgando en Sebago Restobar, Hualañé',
    cap: 'techo de caña y lámparas tejidas',
  },
  {
    src: `${IMG}/32.webp`,
    alt: 'Salón de Sebago con sillas rojas y cielo alto de madera',
    cap: 'el salón, a lo grande',
  },
  {
    src: `${IMG}/43.webp`,
    alt: 'Mandala pintado en la pared verde de Sebago junto al piano',
    cap: 'mandalas y piano: vintage, étnico, rústico',
  },
]

const MESA = [
  {
    src: `${IMG}/33.webp`,
    alt: 'Chorrillana en sartén de fierro con huevo frito, servida en tabla de Sebago',
  },
  {
    src: `${IMG}/47.webp`,
    alt: 'Trago de autor con hielo y destellos, barra de Sebago Restobar',
  },
  {
    src: `${IMG}/48.webp`,
    alt: 'Plato colorido con palta y crocantes sobre cerámica pintada de Sebago',
  },
]

export default function Sebago() {
  return (
    <div
      className={`min-h-screen ${body.className} antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Reservar"
        theme={{
          over: 'dark',
          bar: C.cream,
          ink: C.ink,
          line: C.line,
          btnBg: C.teal,
          btnInk: C.cream,
        }}
      />

      {/* ── Hero: el salón y el letrero tallado ── */}
      <section id="inicio" className="relative">
        <div className="relative w-full min-h-[560px] md:min-h-[680px]">
          <Image
            src={`${IMG}/15.webp`}
            alt="Interior de Sebago Restobar en Hualañé: salón amplio con sillas de colores, plantas y madera"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(10,24,20,0.55) 0%, rgba(10,24,20,0.3) 45%, rgba(10,24,20,0.82) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 flex flex-col justify-end">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
              <Reveal>
                {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Letrero de Sebago tallado sobre la viga de madera de la entrada"
                  className="w-48 md:w-64 mb-5 rounded-sm"
                  style={{ boxShadow: '0 6px 0 rgba(10,24,20,0.5)', transform: 'rotate(-1.2deg)' }}
                />
                <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.24em] mb-3`} style={{ color: C.creamOnTeal }}>
                  Restobar & eventos · Arturo Prat 290, Hualañé
                </p>
                <h1
                  className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.6rem,9vw,6.2rem)]`}
                  style={{ color: C.cream, textShadow: '0 3px 0 rgba(10,24,20,0.6)' }}
                >
                  Una casa<br />
                  <span style={{ color: C.mustard }}>como ninguna</span>
                </h1>
                <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: 'rgba(241,232,213,0.9)' }}>
                  Ceviches, tablas para compartir, pizzas de masa fermentada 24 horas
                  y mojitos, en un salón que mezcla lo vintage, lo étnico y lo rústico.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} inline-block px-6 py-3 text-sm font-bold uppercase tracking-[0.1em] transition-transform active:scale-95 tap-44`}
                    style={{ backgroundColor: C.mustard, color: C.ink, boxShadow: '0 4px 0 rgba(10,24,20,0.55)' }}
                  >
                    Reservar por WhatsApp →
                  </a>
                  <div className="flex items-center gap-2 px-4 py-3" style={{ backgroundColor: 'rgba(10,24,20,0.55)' }}>
                    <Stars value={4.6} color={C.mustard} className="w-4 h-4" />
                    <span className={`${mono.className} text-xs font-bold`} style={{ color: C.cream }}>
                      {BIZ.rating} · {BIZ.reviews} opiniones
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta: pizarra con precios reales ── */}
      <section id="carta" className="scroll-mt-20" style={{ backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-4">
              <div>
                <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] mb-3`} style={{ color: C.gold }}>
                  precios reales de su carta
                </p>
                <h2 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.3rem,7vw,4.6rem)]`} style={{ color: C.cream }}>
                  La carta del mesón
                </h2>
              </div>
              <p className={`${mono.className} text-xs uppercase tracking-[0.12em] max-w-xs`} style={{ color: 'rgba(241,232,213,0.7)' }}>
                Se pide en barra: el local funciona por autoatención
              </p>
            </div>
          </Reveal>
          <div className="border-t-2 border-dashed mt-8" style={{ borderColor: 'rgba(241,232,213,0.35)' }} />
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 mt-8">
            {CARTA.map((g, gi) => (
              <Reveal key={g.group} delay={gi * 60} className="col-span-12 md:col-span-6 lg:col-span-4">
                <h3
                  className={`${display.className} font-extrabold uppercase text-2xl md:text-[1.7rem] leading-none pb-3 border-b-2`}
                  style={{ color: C.gold, borderColor: 'rgba(241,232,213,0.3)' }}
                >
                  {g.group}
                </h3>
                <ul className="mt-4 space-y-4">
                  {g.items.map(([name, desc, price]) => (
                    <li key={name}>
                      <div className="flex items-baseline justify-between gap-3">
                        <span className={`${display.className} font-bold text-base md:text-lg leading-tight`} style={{ color: C.cream }}>
                          {name}
                        </span>
                        <span className={`${mono.className} text-sm md:text-base font-bold shrink-0`} style={{ color: C.gold }}>
                          {price}
                        </span>
                      </div>
                      <p className="text-[13px] leading-snug mt-0.5" style={{ color: 'rgba(241,232,213,0.65)' }}>
                        {desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
            <Reveal delay={300} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="border-2 p-5 h-full flex flex-col" style={{ borderColor: 'rgba(241,232,213,0.45)', backgroundColor: 'rgba(241,232,213,0.06)' }}>
                <p className={`${display.className} font-extrabold uppercase text-xl leading-tight`} style={{ color: C.cream }}>
                  Y para llevar
                </p>
                <p className="mt-2 text-sm leading-relaxed flex-1" style={{ color: 'rgba(241,232,213,0.75)' }}>
                  La fachada lo anuncia: delivery gourmet del propio local. Pídelo
                  directo por WhatsApp.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} inline-block mt-4 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-center transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.cream, color: C.teal }}
                >
                  Pedir por WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La casa: vintage, étnico, rústico ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] mb-3`} style={{ color: C.wood }}>
            según quienes la visitan
          </p>
          <h2 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.2rem,6.5vw,4.4rem)] mb-10`}>
            Vintage, <span style={{ color: C.teal }}>étnico</span> y rústico
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-5 md:gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <figure className="relative aspect-[16/10] overflow-hidden">
              <Image src={AMBIENTE[0].src} alt={AMBIENTE[0].alt} fill sizes="(min-width: 768px) 56vw, 100vw" className="object-cover" />
            </figure>
            <p className={`${mono.className} mt-3 text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              {AMBIENTE[0].cap}
            </p>
          </Reveal>
          <div className="col-span-12 md:col-span-5 grid grid-cols-2 gap-5 md:gap-6 content-start">
            {AMBIENTE.slice(1).map((a, i) => (
              <Reveal key={a.cap} delay={120 + i * 80} className={i === 0 ? '' : 'mt-6'}>
                <figure className="relative aspect-[3/4] overflow-hidden">
                  <Image src={a.src} alt={a.alt} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
                </figure>
                <p className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {a.cap}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 md:gap-6 mt-8">
          {MESA.map((m, i) => (
            <Reveal key={m.src} delay={i * 90} className="col-span-6 md:col-span-4">
              <figure className="relative aspect-square overflow-hidden">
                <Image src={m.src} alt={m.alt} fill sizes="(min-width: 768px) 30vw, 50vw" className="object-cover" />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section style={{ backgroundColor: C.creamSoft }} className="border-y-2" >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20" style={{ borderColor: C.line }}>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <h2 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.2rem,6.5vw,4.4rem)]`}>
                Palabra <span style={{ color: C.teal }}>de cliente</span>
              </h2>
              <div className="flex items-center gap-2">
                <Stars value={4.6} color={C.wood} className="w-5 h-5" />
                <span className={`${mono.className} text-sm font-bold`}>
                  {BIZ.rating} en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80} className="col-span-12 md:col-span-6">
                <figure className="h-full p-5 md:p-6 flex flex-col" style={{ backgroundColor: i === 0 ? C.teal : C.cream, borderLeft: `4px solid ${i === 0 ? C.mustard : C.wood}` }}>
                  <Stars value={r.stars} color={i === 0 ? C.gold : C.wood} className="w-4 h-4 mb-3" />
                  <blockquote className="flex-1 text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? 'rgba(241,232,213,0.92)' : C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em] font-bold`} style={{ color: i === 0 ? C.gold : C.muted }}>
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
              style={{ color: C.teal }}
            >
              Leer las {BIZ.reviews} opiniones en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="como-llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-extrabold uppercase leading-[0.92] text-[clamp(2.2rem,6.5vw,4.4rem)] mb-10`}>
            En la calle <span style={{ color: C.teal }}>principal</span>
          </h2>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <Reveal className="col-span-12 md:col-span-7">
            <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ boxShadow: '0 6px 0 rgba(28,24,16,0.85)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="col-span-12 md:col-span-5">
            <div className="p-5 md:p-6" style={{ backgroundColor: C.teal, color: C.cream, boxShadow: '0 6px 0 rgba(28,24,16,0.4)' }}>
              <address className="not-italic">
                <p className={`${display.className} font-extrabold uppercase text-xl md:text-2xl leading-tight`}>
                  {BIZ.address}
                </p>
                <p className={`${mono.className} text-xs uppercase tracking-[0.14em] mt-2`} style={{ color: 'rgba(241,232,213,0.75)' }}>
                  {BIZ.city}, {BIZ.region}
                </p>
                <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} inline-block mt-4 text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.gold }}>
                  {BIZ.phoneDisplay}
                </a>
                <p className={`${mono.className} text-xs mt-4 pt-4 border-t`} style={{ color: 'rgba(241,232,213,0.75)', borderColor: 'rgba(241,232,213,0.2)' }}>
                  Abre {BIZ.opens} · Autoatención · Delivery gourmet
                </p>
              </address>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center gap-5 justify-between">
          <div className="flex items-center gap-3.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- letrero real ya optimizado */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-10 w-16 object-cover rounded-sm" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-extrabold uppercase text-lg leading-tight`}>{BIZ.name}</p>
              <address className={`${mono.className} not-italic text-[11px] uppercase tracking-[0.12em]`} style={{ color: 'rgba(241,232,213,0.7)' }}>
                {BIZ.address} · {BIZ.city}
              </address>
            </div>
          </div>
          <a href={`tel:${BIZ.phoneTel}`} className={`${mono.className} text-sm font-bold underline underline-offset-4 tap-44`} style={{ color: C.mustard }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(241,232,213,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-[11px] leading-relaxed uppercase tracking-[0.06em]`} style={{ color: 'rgba(241,232,213,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. En Google Maps figura como {BIZ.mapsName}.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.mustard }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
