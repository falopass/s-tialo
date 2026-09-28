import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
  ],
})

/**
 * Paleta del demo: verde emporio, crema de papel, ámbar y tinta.
 * Layout de carta tipográfica: el sitio se lee como el menú impreso
 * de una cafetería de barrio — marco de doble línea, columnas,
 * precios alineados con puntos guía y ornamentos de imprenta.
 * Sin tarjetas rotadas ni collage: solo tipografía y filetes.
 */
const C = {
  crema: '#FDF6EC',
  cremaCard: '#FFFBF3',
  verde: '#2A7F62',
  verdeDeep: '#173E32',
  ambar: '#E8A33D',
  ambarSoft: '#F4DFAE',
  ink: '#252A22',
  muted: '#6F6A58',
  mutedDeep: '#5B5642',
  line: 'rgba(37,42,34,0.2)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A33D]'

export const metadata: Metadata = demoMetadata({
  slug: 'emporio-vintage-cafe',
  title: 'Emporio Vintage Café — Cafetería en el centro de Talca',
  description: 'Cafetería en Tres Nte. 1471, Talca: café de grano, kuchen, sándwiches y once. Escríbenos por WhatsApp.',
  image: '/demos/emporio-vintage-cafe/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El emporio', href: '#emporio' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CARTA = [
  {
    src: `${IMG}/detalle1.webp`,
    alt: 'Vaso de latte servido en la terraza de Emporio Vintage Café',
    title: 'De la barra',
    items: [
      { name: 'Espresso', desc: 'cortito y concentrado', price: '$2.000' },
      { name: 'Cortado', desc: 'espresso con un toque de leche', price: '$2.500' },
      { name: 'Capuchino', desc: 'espuma suave y cacao', price: '$3.000' },
      { name: 'Latte', desc: 'más leche, más suave', price: '$3.200' },
      { name: 'Mokaccino', desc: 'café con chocolate', price: '$3.600' },
      { name: 'Chocolate caliente', desc: '', price: '$3.000' },
      { name: 'Té e infusiones', desc: '', price: '$2.500' },
    ],
  },
  {
    src: `${IMG}/detalle2.webp`,
    alt: 'Rincón del café con la pizarra de anuncios y una taza de latte',
    title: 'Kuchen y repostería',
    items: [
      { name: 'Kuchen de nuez', desc: 'el clásico de la casa', price: '$3.500' },
      { name: 'Pie de limón', desc: '', price: '$3.200' },
      { name: 'Strudel de manzana', desc: '', price: '$3.200' },
      { name: 'Torta de zanahoria', desc: '', price: '$3.800' },
      { name: 'Cheesecake de berries', desc: '', price: '$4.200' },
      { name: 'Croissant', desc: '', price: '$2.600' },
    ],
  },
  {
    src: `${IMG}/detalle3.webp`,
    alt: 'Empanadas de horno junto a una taza de café, de los afiches de Emporio Vintage',
    title: 'Salado y once',
    items: [
      { name: 'Sandwich ave palta', desc: '', price: '$4.500' },
      { name: 'Tostado jamón y queso', desc: '', price: '$3.800' },
      { name: 'Mechada queso', desc: '', price: '$4.800' },
      { name: 'Empanada de queso', desc: '', price: '$2.500' },
      { name: 'Once para dos', desc: 'café, té, kuchen y sándwiches', price: '$12.900' },
    ],
  },
  {
    src: `${IMG}/hero.webp`,
    alt: 'Interior de la boutique de Emporio Vintage en Talca: textiles, cestería y repisas',
    title: 'Del emporio, para llevar',
    items: [
      { name: 'Café en grano 250 g', desc: 'molido al momento si lo pides', price: '$9.900' },
      { name: 'Galletas de la casa', desc: '', price: '$1.800' },
      { name: 'Roll de canela', desc: '', price: '$2.800' },
      { name: 'Brownie', desc: '', price: '$3.000' },
    ],
  },
]

const RESENAS = [
  {
    text: 'El kuchen de nuez es imperdible y el lugar tiene una calma que no se encuentra en otra parte del centro.',
    author: 'Cliente del barrio',
  },
  {
    text: 'Me atendieron sus dueños con una calidez de otra época. El capuchino, muy bien hecho.',
    author: 'Visitante de Talca',
  },
  {
    text: 'Entre las antigüedades y el olor a café recién molido, uno se queda más rato del que pensaba.',
    author: 'Vecina de Tres Norte',
  },
]

// Horario real de la bio de Instagram del café.
const HORAS = [
  { days: 'Lunes a viernes', time: '10:00 a 19:00' },
  { days: 'Sábado y domingo', time: 'Se confirma por WhatsApp' },
]

function Diamond({ className = 'w-2 h-2', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill={color} aria-hidden="true">
      <rect x="3.5" y="3.5" width="5" height="5" transform="rotate(45 6 6)" />
    </svg>
  )
}

function Rule({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <span className={`flex items-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(253,246,236,0.4)' : C.line }} />
      <Diamond color={light ? C.ambarSoft : C.verde} />
      <span className="h-px flex-1" style={{ backgroundColor: light ? 'rgba(253,246,236,0.4)' : C.line }} />
    </span>
  )
}

function Eyebrow({ children, light = false, color }: { children: React.ReactNode; light?: boolean; color?: string }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: color ?? (light ? C.ambarSoft : C.verde) }}
    >
      <Diamond />
      {children}
    </p>
  )
}

export default function EmporioVintageCafePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(253,246,236,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.verde,
          btnInk: C.crema,
        }}
      />

      {/* ── Portada: la página abre como la tapa de un menú impreso ── */}
      <section id="inicio" className="px-3 md:px-6 pt-[72px] md:pt-[84px] pb-4 md:pb-6">
        <div className="border-2 p-1.5 md:p-2" style={{ borderColor: C.verde }}>
          <div
            className="border min-h-[calc(100svh-130px)] flex flex-col px-5 md:px-10 pt-6 pb-8 md:pt-8 md:pb-9"
            style={{ borderColor: C.verde, backgroundColor: C.cremaCard }}
          >
            <Reveal>
              <div
                className="flex items-baseline justify-between gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.24em] font-bold"
                style={{ color: C.muted }}
              >
                <span>Cafetería</span>
                <Diamond color={C.ambar} className="w-2 h-2 shrink-0 self-center" />
                <span className="text-right">{BIZ.address} · {BIZ.city}</span>
              </div>
            </Reveal>

            <div className="flex-1 flex flex-col items-center justify-center text-center py-10 md:py-14">
              <Reveal>
                <div className="flex justify-center">
                  <Eyebrow>café de grano · kuchen · once</Eyebrow>
                </div>
                <h1
                  className={`${display.className} font-medium leading-[0.98] tracking-[-0.015em] text-[clamp(2.9rem,10vw,6.4rem)]`}
                  style={{ color: C.ink }}
                >
                  Emporio Vintage
                  <br />
                  <em className="italic font-normal" style={{ color: C.verde }}>Café</em>
                </h1>
                <Rule className="mt-8 md:mt-10 max-w-md mx-auto" />
                <p className="mt-8 text-base md:text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
                  Café de grano molido al momento, kuchen recién salido del
                  horno y mesas para quedarse conversando sin mirar el
                  reloj, a pasos del centro de {BIZ.city}.
                </p>
                <div className="mt-9 flex flex-wrap justify-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.ambar, color: C.ink }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:text-[#FDF6EC] hover:bg-[#2A7F62] tap-44`}
                    style={{ borderColor: C.verde, color: C.verde }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <div
                className="border-t pt-5 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-[10px] md:text-[11px] uppercase tracking-[0.18em] font-bold text-center"
                style={{ borderColor: C.line, color: C.muted }}
              >
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} hover:underline underline-offset-4 tap-44`}
                >
                  <span style={{ color: C.ambar }} aria-hidden="true">★</span> {BIZ.ratingLabel} · {BIZ.reviews} reseñas en Google
                </a>
                <a
                  href={BIZ.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} hover:underline underline-offset-4 tap-44`}
                >
                  {BIZ.followers} seguidores en Instagram
                </a>
                <span style={{ color: C.verde }}>sitio de ejemplo</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La carta ── */}
      <section id="carta" className="scroll-mt-20 max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div
            className="border-2 p-1.5 md:p-2"
            style={{ borderColor: C.verde }}
          >
            <div className="border px-5 py-8 md:px-14 md:py-12" style={{ borderColor: C.verde, backgroundColor: C.cremaCard }}>
              <header className="text-center max-w-2xl mx-auto">
                <p className="text-[11px] uppercase tracking-[0.3em] font-bold mb-3" style={{ color: C.verde }}>
                  — Carta de muestra —
                </p>
                <h2 className={`${display.className} font-medium italic text-[clamp(2.4rem,7vw,4.2rem)] leading-[1.02]`} style={{ color: C.ink }}>
                  La carta del emporio
                </h2>
                <Rule className="mt-6" />
              </header>

              <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-x-14 gap-y-12">
                {CARTA.map((g, i) => (
                  <Reveal key={g.title} delay={i * 90}>
                    <div>
                      <div className="flex items-center gap-4 mb-1">
                        <Image
                          src={g.src}
                          alt={g.alt}
                          width={144}
                          height={144}
                          className="w-16 h-16 md:w-[72px] md:h-[72px] object-cover border"
                          style={{ borderColor: C.verde }}
                        />
                        <h3 className={`${display.className} italic font-medium text-2xl md:text-[1.7rem] leading-none`} style={{ color: C.verde }}>
                          {g.title}
                        </h3>
                      </div>
                      <ul className="mt-4">
                        {g.items.map((item) => (
                          <li key={item.name} className="grid grid-cols-[auto_1fr_auto] items-baseline gap-x-3 py-[7px]">
                            <span className="text-[15px] md:text-base font-bold">
                              {item.name}
                              {item.desc && (
                                <span className="block text-[13px] font-normal italic" style={{ color: C.muted }}>
                                  {item.desc}
                                </span>
                              )}
                            </span>
                            <span
                              aria-hidden="true"
                              className="h-[0.6em] border-b-2 border-dotted"
                              style={{ borderColor: 'rgba(37,42,34,0.3)' }}
                            />
                            <span className={`${display.className} text-base md:text-lg font-semibold whitespace-nowrap`} style={{ color: C.verde }}>
                              {item.price}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>

              <Rule className="mt-12" />
              <div className="mt-8 text-center">
                <p className={`${display.className} italic font-medium text-xl md:text-2xl mb-5`} style={{ color: C.ink }}>
                  ¿Se te antojó algo de la carta?
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} ${display.className} inline-block font-semibold text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.verde, color: C.crema }}
                >
                  Pedir por WhatsApp
                </a>
              </div>
              <p className="mt-8 text-center text-xs md:text-sm leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
                Carta y precios de muestra: al publicar van los productos
                y valores reales de {BIZ.name}.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── El emporio ── */}
      <section id="emporio" className="scroll-mt-20 border-y" style={{ borderColor: C.line, backgroundColor: C.ambarSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <figure>
              <div className="border-[3px] p-1.5" style={{ borderColor: C.verde }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/ambiente.webp`}
                    alt="Entrada del café de Emporio Vintage en Tres Norte, Talca, con su letrero luminoso"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 text-center text-[11px] uppercase tracking-[0.22em] font-bold" style={{ color: C.mutedDeep }}>
                {BIZ.address} · {BIZ.city}
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={140}>
            <Eyebrow color={C.verdeDeep}>El emporio</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              Un café de barrio
              <br />
              <em className="italic font-normal" style={{ color: C.verdeDeep }}>en pleno Talca</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: C.mutedDeep }}>
              En Tres Norte, a pasos del centro, el emporio junta café de
              grano, kuchen recién salido del horno y un salón con muebles
              de otra época. Se pide en la barra y la conversación es gratis.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.mutedDeep }}>
              Lo avalan los vecinos: nota {BIZ.ratingLabel} en su ficha
              de Google y una comunidad de {BIZ.followers} seguidores en
              Instagram.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Café de grano molido al momento',
                'Kuchen y repostería del día',
                'Atención directa de sus dueños',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.ink }}>
                  <Diamond color={C.ambar} className="w-2.5 h-2.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold">
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.verdeDeep, textDecorationColor: 'rgba(23,62,50,0.35)' }}
              >
                Instagram · @{BIZ.instagram.split('/').pop()}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.verdeDeep, textDecorationColor: 'rgba(23,62,50,0.35)' }}
              >
                Ficha en Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <header className="text-center max-w-2xl mx-auto">
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Lo que dicen
              <br />
              <em className="italic font-normal" style={{ color: C.verde }}>los que vuelven</em>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name} acumula {BIZ.reviews} reseñas en su ficha de
              Google. Estos textos son de muestra: al publicar van las
              reseñas reales.
            </p>
            <Rule className="mt-6" />
          </header>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={120 + i * 110}>
              <figure className="h-full border-t-[3px] pt-6" style={{ borderColor: C.verde }}>
                <blockquote className={`${display.className} text-lg md:text-xl leading-relaxed mb-4`} style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  {r.author} · Reseña de ejemplo
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="text-center mt-10">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} text-sm font-bold underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.verde, textDecorationColor: 'rgba(42,127,98,0.35)' }}
            >
              Leer las {BIZ.reviews} reseñas en Google →
            </a>
          </p>
        </Reveal>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.crema }}>
              Te esperamos
              <br />
              <em className="italic font-normal" style={{ color: C.ambarSoft }}>en Tres Norte</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(253,246,236,0.75)' }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} underline underline-offset-4 tap-44`}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-9">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(253,246,236,0.75)' }}>
                  <Diamond color={C.ambar} className="w-2.5 h-2.5 shrink-0" />
                  <span>
                    <strong className="font-bold" style={{ color: C.crema }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-7 py-3.5 transition-transform hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ backgroundColor: C.ambar, color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-semibold text-sm md:text-base px-7 py-3.5 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(253,246,236,0.5)', color: C.crema }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-[3px] p-1.5" style={{ borderColor: C.ambarSoft }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px] md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section style={{ backgroundColor: C.ambar }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: C.ink }}>
            Sitio de ejemplo de{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`${FOCUS} font-extrabold underline underline-offset-4 tap-44`}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-bold underline underline-offset-4 tap-44`}
            style={{ color: C.ink }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.verdeDeep, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <p className={`${display.className} font-medium italic text-xl flex items-center gap-3`}>
            <Diamond color={C.ambar} className="w-3 h-3" />
            {BIZ.name}
          </p>
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[13px]" style={{ color: 'rgba(253,246,236,0.75)' }} aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`${FOCUS} hover:text-white transition-colors tap-44`}>
                {l.label}
              </a>
            ))}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className={`${FOCUS} hover:text-white transition-colors tap-44`}>
              Instagram
            </a>
          </nav>
          <p className="w-full text-[11px] leading-relaxed border-t pt-3" style={{ borderColor: 'rgba(253,246,236,0.14)', color: 'rgba(253,246,236,0.7)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay} — Datos, fotos, logo y horario reales (Google Maps e Instagram); carta, precios y reseñas citadas de muestra.
          </p>
        </div>
      </footer>

      {/* bg-ink sólido: el /90 compila a oklab y el texto crema quedaba ilegible */}
      <div className="[&>div]:bg-ink!">
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
