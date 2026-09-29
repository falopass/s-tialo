import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MESA, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

// Identidad real del local: el círculo magenta de su logo, el crema de su
// gráfica y el vino oscuro de sus paredes.
const C = {
  paper: '#FAF5EC',
  soft: '#F1E8D8',
  ink: '#31101D',
  magenta: '#B01E4F',
  wine: '#4A1226',
  gold: '#C78B3C',
  muted: '#6E5460',
  line: 'rgba(49,16,29,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), restaurada aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'pisco-lima-restaurant',
  title: 'Pisco & Lima — Cocina peruana en Constitución',
  description:
    'Restaurante peruano en Cruz 370, Constitución. Ceviche, lomo saltado y pisco sour en la costa del Maule. Reserva por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La casa', href: '#casa' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'La carta', href: '#carta' },
  { label: 'Ubicación', href: '#contacto' },
]

const PLATES = [
  {
    src: `${IMG}/causa.webp`,
    name: 'Causa limeña',
    desc: 'Papa amarilla prensada, ají y limón: la entrada que abre la mesa.',
  },
  {
    src: `${IMG}/lomo.webp`,
    name: 'Lomo saltado',
    desc: 'El wok de siempre: lomo, cebolla, tomate y papas fritas, con su arroz.',
  },
  {
    src: `${IMG}/pulpo.webp`,
    name: 'Pulpo a la parrilla',
    desc: 'Del mar de afuera a la parrilla: el plato que más repiten en las reseñas.',
  },
]

const CARTA = [
  { name: 'Ceviche clásico', desc: 'Pescado del día, leche de tigre, cebolla morada y camote', price: '$12.900' },
  { name: 'Causa limeña', desc: 'De pollo o de pulpa de cangrejo', price: '$7.900' },
  { name: 'Lomo saltado', desc: 'Con arroz y papas fritas', price: '$11.900' },
  { name: 'Ají de gallina', desc: 'Cremoso, con arroz y papa', price: '$9.900' },
  { name: 'Arroz con mariscos', desc: 'Al estilo del norte peruano', price: '$13.500' },
  { name: 'Pisco sour', desc: 'El clásico de la casa', price: '$4.500' },
]

const TESTIMONIALS = [
  {
    text: 'El pulpo es muy bueno, la atención fue rápida y amable. Recomendé el lugar a otras personas y me comentaron más de lo mismo.',
    author: 'Sebastián Manríquez',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Un 10/10. Excelente atención. La comida increíble, bebidas de autor súper exquisitas y alegres. Volveremos.',
    author: 'Nanu NS',
    meta: 'reseña de Google · 5 estrellas',
  },
  {
    text: 'Espectacular, el lugar muy agradable, bonito y la comida 12/10. Muy rico todo, volvería nuevamente, 100% recomendable.',
    author: 'Alex Herrera Romero',
    meta: 'reseña de Google · 5 estrellas',
  },
]

/** Doble regla tipo carta clásica de restaurante. */
function Rule({ light = false }: { light?: boolean }) {
  const c = light ? 'rgba(250,245,236,0.4)' : 'rgba(176,30,79,0.4)'
  return (
    <div aria-hidden="true" className="space-y-[3px]">
      <div className="h-px" style={{ backgroundColor: c }} />
      <div className="h-[2px]" style={{ backgroundColor: c }} />
      <div className="h-px" style={{ backgroundColor: c }} />
    </div>
  )
}

export default function PiscoLimaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .pl-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .pl-btn:hover { transform: translateY(-2px); filter: brightness(1.07); }
        .pl-btn:active { transform: translateY(0) scale(0.97); }
        .pl-btn:focus-visible { outline: 3px solid ${C.magenta}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(250,245,236,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.magenta,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: portada de carta clásica ── */}
      <section
        id="inicio"
        className="relative pt-[88px] md:pt-[100px] pb-10 md:pb-14 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex justify-center mb-6 pt-2">
              {/* eslint-disable-next-line @next/next/no-img-element -- logo real recortado de su gráfica */}
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Pisco & Lima: copa de vino estilizada en círculo magenta"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full shadow-md"
              />
            </div>
            <p
              className={`${display.className} text-center text-[11px] md:text-xs uppercase tracking-[0.34em] mb-4`}
              style={{ color: C.magenta }}
            >
              Cocina peruana · Constitución
            </p>
            <h1
              className={`${display.className} text-center text-[clamp(2.8rem,9vw,6.5rem)] leading-[1.02] mb-5`}
              style={{ color: C.ink }}
            >
              Pisco &amp; Lima
            </h1>
            <p
              className="text-center text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8"
              style={{ color: C.muted }}
            >
              Ceviche, lomo saltado y pisco sour servidos en calle Cruz,
              a pasos del río y de la costa maulina.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <a
                href={WA_LINK_MESA}
                target="_blank"
                rel="noopener noreferrer"
                className="pl-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                style={{ backgroundColor: C.magenta, color: '#FFFFFF' }}
              >
                Reservar mesa
              </a>
              <a
                href="#carta"
                className="pl-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border tap-44"
                style={{ borderColor: C.magenta, color: C.magenta }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <Rule />
            <div
              className="flex flex-wrap justify-center gap-x-8 gap-y-1.5 py-4 text-[11px] md:text-xs uppercase tracking-[0.2em] font-semibold"
              style={{ color: C.muted }}
            >
              <span className="inline-flex items-center gap-2">
                <Stars value={4.5} color={C.gold} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </span>
              <span>{BIZ.address}, {BIZ.city}</span>
              <span>{BIZ.rubro}</span>
            </div>
            <Rule />
          </Reveal>
        </div>
      </section>

      {/* ── Foto a sangre: la mesa servida ── */}
      <section aria-label="La mesa servida">
        <Reveal>
          <div className="relative h-[46vh] md:h-[64vh] overflow-hidden">
            <Image
              src={`${IMG}/hero.webp`}
              alt="Mesa de Pisco & Lima servida con platos peruanos, arroces y papas"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* ── La casa ── */}
      <section id="casa" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p
                className={`${display.className} text-[11px] uppercase tracking-[0.3em] mb-4`}
                style={{ color: C.magenta }}
              >
                La casa
              </p>
              <h2
                className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.05] mb-6`}
                style={{ color: C.ink }}
              >
                Un pedazo de Perú
                <br />
                en la costa del Maule
              </h2>
              <div className="space-y-4 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                <p>
                  En {BIZ.address}, {BIZ.name} sirve la cocina peruana de
                  carta: ceviches, causas, salteados al wok y los clásicos
                  de la barra de pisco. La bandera en el salón lo dice
                  sin palabras.
                </p>
                <p>
                  La marca tiene tres casas —{' '}
                  {BIZ.casas.join(' · ')} — y en Constitución acumula{' '}
                  {BIZ.reviews} reseñas con nota {BIZ.rating} en Google.
                  En Instagram (
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.magenta, textDecorationColor: 'rgba(176,30,79,0.35)' }}
                  >
                    {BIZ.igUser}
                  </a>
                  ) muestran la cocina del día a día.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={120}>
              <div className="relative overflow-hidden aspect-[4/5] md:aspect-[4/3] shadow-lg">
                <Image
                  src={`${IMG}/salon.webp`}
                  alt="Salón del restaurante con la bandera del Perú y mantelería clara"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
              <p
                className="text-[10px] md:text-xs uppercase tracking-[0.22em] font-semibold mt-3"
                style={{ color: C.muted }}
              >
                El salón — foto real del local
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── De la cocina ── */}
      <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
              <div>
                <p
                  className={`${display.className} text-[11px] uppercase tracking-[0.3em] mb-3`}
                  style={{ color: C.magenta }}
                >
                  De la cocina
                </p>
                <h2
                  className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.05]`}
                  style={{ color: C.ink }}
                >
                  Lo que sale del wok
                  <br />y de la costa
                </h2>
              </div>
              <p className="hidden md:block max-w-xs text-sm leading-relaxed" style={{ color: C.muted }}>
                Fotos reales de los platos que salen de esta cocina. La
                carta completa se confirma con el local.
              </p>
            </div>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6 md:gap-8">
            {PLATES.map((p, i) => (
              <Reveal
                key={p.name}
                className={`col-span-12 md:col-span-4 ${i === 1 ? 'md:mt-10' : ''}`}
                delay={i * 110}
              >
                <li className="group">
                  <div className="relative overflow-hidden aspect-[4/5] mb-4">
                    <Image
                      src={p.src}
                      alt={p.name}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className={`${display.className} text-xl md:text-2xl mb-1.5`} style={{ color: C.ink }}>
                    {p.name}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La barra de pisco (sección oscura) ── */}
      <section aria-label="La barra" style={{ backgroundColor: C.wine, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 md:col-span-6 order-2 md:order-1">
              <Reveal>
                <p
                  className={`${display.className} text-[11px] uppercase tracking-[0.3em] mb-4`}
                  style={{ color: C.gold }}
                >
                  La barra
                </p>
                <h2
                  className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-5`}
                >
                  El pisco se sirve
                  <br />como corresponde
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: 'rgba(250,245,236,0.82)' }}>
                  Pisco sour, chilcanos y bebidas de autor para acompañar
                  la sobremesa. Las reseñas los nombran tanto como los
                  platos.
                </p>
                <a
                  href={WA_LINK_MESA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-btn inline-block font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.gold, color: C.wine }}
                >
                  Reservar una mesa
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-6 order-1 md:order-2">
              <Reveal delay={120}>
                <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4] border-4 shadow-xl" style={{ borderColor: 'rgba(250,245,236,0.2)' }}>
                  <Image
                    src={`${IMG}/pisco.webp`}
                    alt="Pisco sour servido en la mesa con cubertería de la casa"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20 max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-10 md:mb-14">
            <p
              className={`${display.className} text-[11px] uppercase tracking-[0.3em] mb-3`}
              style={{ color: C.magenta }}
            >
              La carta
            </p>
            <h2
              className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-3`}
              style={{ color: C.ink }}
            >
              Clásicos de la casa
            </h2>
            <p className="text-sm" style={{ color: C.muted }}>
              Carta y precios de muestra — la carta real se confirma con el local.
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div
            className="border px-6 py-8 md:px-12 md:py-12"
            style={{ borderColor: 'rgba(176,30,79,0.35)', backgroundColor: '#FFFFFF' }}
          >
            <ul className="divide-y" style={{ borderColor: C.line }}>
              {CARTA.map((m) => (
                <li key={m.name} className="py-4 md:py-5">
                  <div className="flex items-baseline gap-3">
                    <span className={`${display.className} text-lg md:text-xl`} style={{ color: C.ink }}>
                      {m.name}
                    </span>
                    <span
                      className="flex-1 border-b border-dotted -translate-y-1"
                      style={{ borderColor: 'rgba(49,16,29,0.3)' }}
                      aria-hidden="true"
                    />
                    <span className={`${display.className} text-lg md:text-xl`} style={{ color: C.magenta }}>
                      {m.price}
                    </span>
                  </div>
                  <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>
                    {m.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* ── Reseñas reales ── */}
      <section aria-label="Reseñas" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
              <h2 className={`${display.className} text-[clamp(1.8rem,4vw,3rem)]`} style={{ color: C.ink }}>
                Lo que dicen en Google
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs md:text-sm font-bold tap-44"
                style={{ color: C.magenta }}
              >
                <Stars value={4.5} color={C.gold} className="w-4 h-4" />
                {BIZ.rating} · {BIZ.reviews} reseñas →
              </a>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-7">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.author} className="col-span-12 md:col-span-4" delay={i * 100}>
                <figure
                  className="h-full p-6 md:p-7 border-t-4 bg-white"
                  style={{ borderColor: i === 1 ? C.gold : C.magenta }}
                >
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{t.text}”
                  </blockquote>
                  <figcaption>
                    <span className={`${display.className} block text-sm`} style={{ color: C.ink }}>
                      {t.author}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.14em] font-semibold" style={{ color: C.muted }}>
                      {t.meta}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-12 gap-10 items-stretch">
          <div className="col-span-12 lg:col-span-5">
            <Reveal>
              <p className={`${display.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.magenta }}>
                Ubicación
              </p>
              <h2 className={`${display.className} text-[clamp(2rem,5vw,3.4rem)] leading-[1.05] mb-6`} style={{ color: C.ink }}>
                Calle Cruz,
                <br />a pasos del mar
              </h2>
              <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}, Chile
                <br />
                <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.magenta, color: '#FFFFFF' }}
                >
                  WhatsApp directo
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pl-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border tap-44"
                  style={{ borderColor: C.magenta, color: C.magenta }}
                >
                  {BIZ.igUser}
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-7">
            <Reveal delay={120} className="h-full">
              <div className="relative w-full overflow-hidden border aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]" style={{ borderColor: 'rgba(176,30,79,0.3)' }}>
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
      </section>

      {/* ── Fachada + footer ── */}
      <section aria-label="Fachada del local">
        <Reveal>
          <div className="relative h-[38vh] md:h-[52vh] overflow-hidden">
            <Image
              src={`${IMG}/fachada.webp`}
              alt="Fachada de Pisco & Lima en calle Cruz con su letrero magenta"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 px-5 md:px-8 py-4"
              style={{ background: 'linear-gradient(0deg, rgba(49,16,29,0.75), transparent)' }}
            >
              <p className={`${display.className} max-w-6xl mx-auto text-[10px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: 'rgba(250,245,236,0.9)' }}>
                Cruz 370 · Constitución — foto real de la fachada
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <footer style={{ backgroundColor: C.wine, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(250,245,236,0.7)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igUser}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(250,245,236,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(250,245,236,0.75)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. La carta y los precios son de muestra; las
            fotos y reseñas son reales de la ficha del local.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.gold }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
