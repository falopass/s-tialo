import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PEDIDO, WA_LINK_DELIVERY, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

// Identidad desde sus fotos reales: papel de pedido sobre mesa de
// acero, índigo de noche (la luna) y teja del salmón.
const C = {
  paper: '#F7F4EC',
  ticket: '#FFFFFF',
  ink: '#1E2A5A',
  accent: '#E4572E',
  muted: '#5D6490',
  line: 'rgba(30,42,90,0.18)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sushi-luna',
  title: 'Luna Sushi — Sushi, completos y comida casera en San Clemente',
  description:
    'Sushi, ceviche, completos y platos caseros en Carlos Silva Renard 810, San Clemente. En el local, para llevar o con delivery. Pide por WhatsApp.',
  image: '/demos/sushi-luna/hero.webp',
})

const NAV_LINKS = [
  { label: 'El pedido', href: '#pedido' },
  { label: 'Más que sushi', href: '#mas-que-sushi' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Pedir', href: '#contacto' },
]

const FASES = ['●', '◐', '○', '◐']

// Lo que ofrece su ficha real de Google y repiten las reseñas.
const PEDIDO = [
  {
    item: 'Rolls de la casa',
    detalle: 'envueltos, con palta, con queso crema y apanados',
    img: 'tabla',
  },
  {
    item: 'Ceviche',
    detalle: 'fresco, de la carta fría',
    img: 'ceviche',
  },
  {
    item: 'Completos y hamburguesas',
    detalle: 'sí, también hay — de los que piden de nuevo',
    img: 'completo',
  },
  {
    item: 'Empanadas y comida casera',
    detalle: 'sabor casero, porciones abundantes',
    img: null,
  },
]

const TESTIMONIALS = [
  {
    text: 'De todo y abundante, buenos precios y variedad. Tienen delivery. Lo recomiendo.',
    who: 'Marianela Briones',
    meta: 'reseña de Google',
  },
  {
    text: 'One of the best — delivery súper rápido.',
    who: 'Gaby Pantu',
    meta: 'reseña de Google',
  },
  {
    text: 'Sabor casero.',
    who: 'Alan Parrao',
    meta: 'reseña de Google',
  },
  {
    text: 'Productos excelentes.',
    who: 'Luis López',
    meta: 'reseña de Google',
  },
]

function Fases({ className = '' }: { className?: string }) {
  return (
    <p className={`${mono.className} text-sm tracking-[0.5em] ${className}`} style={{ color: C.accent }} aria-hidden="true">
      {FASES.join(' ')}
    </p>
  )
}

export default function SushiLunaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .sl-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .sl-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .sl-btn:active { transform: translateY(0) scale(0.97); }
        .sl-btn:focus-visible { outline: 3px solid ${C.accent}; outline-offset: 3px; }
        .sl-ticket {
          background-image:
            linear-gradient(90deg, ${C.paper} 50%, transparent 50%),
            linear-gradient(90deg, ${C.paper} 50%, transparent 50%);
          background-size: 16px 8px;
          background-position: left top, left bottom;
          background-repeat: repeat-x;
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK_PEDIDO}
        ctaLabel="Pedir"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(247,244,236,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: pedido sobre mesa, foto en luna ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[96px] md:pt-[116px] pb-12 md:pb-16">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <Fases className="mb-4" />
                <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] mb-4`} style={{ color: C.muted }}>
                  {BIZ.city} · {BIZ.modes}
                </p>
                <h1
                  className={`${display.className} font-extrabold leading-[0.95] tracking-tight text-[clamp(3rem,10vw,7rem)]`}
                  style={{ color: C.ink }}
                >
                  Luna
                  <span style={{ color: C.accent }}> Sushi</span>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base md:text-lg leading-relaxed max-w-md mt-5 mb-8" style={{ color: C.muted }}>
                  Rolls recién armados, ceviche, completos y comida casera:
                  en San Clemente la luna sale de tarde y llega hasta tu casa.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_PEDIDO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} sl-btn text-sm font-medium uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
                  >
                    Hacer un pedido
                  </a>
                  <a
                    href={WA_LINK_DELIVERY}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${mono.className} sl-btn text-sm font-medium uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Delivery a domicilio
                  </a>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 mt-8 tap-44"
                >
                  <Stars value={BIZ.rating} color={C.accent} />
                  <span className={`${mono.className} text-xs md:text-sm font-medium`} style={{ color: C.ink }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </a>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={150}>
                <div className="relative">
                  <div
                    className="relative mx-auto aspect-square max-w-[320px] md:max-w-[420px] overflow-hidden rounded-full border-[10px]"
                    style={{ borderColor: C.ink }}
                  >
                    <Image
                      src={`${IMG}/hero.webp`}
                      alt="Tabla de rolls de Luna Sushi con su marca escrita sobre el plato"
                      fill
                      priority
                      sizes="(min-width: 768px) 36vw, 82vw"
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`${mono.className} absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium shadow-lg`}
                    style={{ backgroundColor: C.ink, color: C.paper }}
                  >
                    {BIZ.hours}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── El pedido: ticket de caja ── */}
      <section id="pedido" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Fases className="mb-3" />
          <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,5.5vw,3.8rem)] leading-none tracking-tight mb-2`} style={{ color: C.ink }}>
            ¿Qué te llevamos?
          </h2>
          <p className="text-sm md:text-base mb-10 max-w-lg" style={{ color: C.muted }}>
            La carta es más ancha que el nombre: sushi, pero también ceviche,
            completos y platos caseros. Todo se puede pedir por WhatsApp.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div
            className="relative max-w-2xl mx-auto sl-ticket px-6 md:px-10 pt-8 pb-8 md:pt-10 md:pb-10"
            style={{ backgroundColor: C.ticket }}
          >
            <div className={`${mono.className} text-center mb-6`}>
              <p className="text-lg font-semibold uppercase tracking-[0.3em]" style={{ color: C.ink }}>
                {BIZ.name}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] mt-1" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                {BIZ.modes}
              </p>
            </div>
            <div className="border-t-2 border-dashed my-5" style={{ borderColor: C.line }} aria-hidden="true" />
            <ul className="space-y-5">
              {PEDIDO.map((p) => (
                <li key={p.item} className="flex items-start gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="flex items-baseline gap-2">
                      <span className="font-bold text-sm md:text-base" style={{ color: C.ink }}>{p.item}</span>
                      <span className="flex-1 border-b-2 border-dotted -translate-y-1 min-w-6" style={{ borderColor: C.line }} aria-hidden="true" />
                      <span className={`${mono.className} text-[11px] uppercase tracking-[0.1em]`} style={{ color: C.accent }}>x1</span>
                    </p>
                    <p className={`${mono.className} text-[11px] md:text-xs mt-1`} style={{ color: C.muted }}>
                      {p.detalle}
                    </p>
                  </div>
                  {p.img && (
                    <div className="relative w-14 h-14 md:w-16 md:h-16 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={`${IMG}/${p.img}.webp`}
                        alt=""
                        fill
                        sizes="64px"
                        className="object-cover"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </li>
              ))}
            </ul>
            <div className="border-t-2 border-dashed my-6" style={{ borderColor: C.line }} aria-hidden="true" />
            <div className="flex items-baseline justify-between">
              <p className={`${mono.className} text-xs uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                Total a convenir
              </p>
              <p className={`${mono.className} text-sm font-semibold`} style={{ color: C.ink }}>
                por WhatsApp
              </p>
            </div>
            <a
              href={WA_LINK_PEDIDO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} sl-btn block text-center text-sm font-medium uppercase tracking-[0.14em] mt-5 px-7 py-3 rounded-full tap-44`}
              style={{ backgroundColor: C.ink, color: C.paper }}
            >
              Mandar el pedido →
            </a>
            <p className={`${mono.className} text-center text-[10px] uppercase tracking-[0.16em] mt-4`} style={{ color: C.muted }}>
              precios y carta completa se confirman por mensaje
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Rolls recién armados: tira de fotos ── */}
      <section aria-label="Rolls recién armados" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex items-baseline justify-between gap-4 mb-8">
              <h2 className={`${display.className} font-bold text-[clamp(1.6rem,4vw,2.6rem)] leading-tight`} style={{ color: C.paper }}>
                Recién armados, sobre la mesa
              </h2>
              <Fases className="hidden sm:block" />
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-6 md:col-span-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={`${IMG}/palillos.webp`}
                  alt="Roll de salmón sostenido con palillos sobre la mesa de acero del local"
                  fill
                  sizes="(min-width: 768px) 32vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-6 md:col-span-4" delay={100}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={`${IMG}/palta.webp`}
                  alt="Rolls cubiertos de palta servidos en Luna Sushi"
                  fill
                  sizes="(min-width: 768px) 32vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-4" delay={180}>
              <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src={`${IMG}/rolls.webp`}
                  alt="Rolls con topping de color servidos en su plato"
                  fill
                  sizes="(min-width: 768px) 32vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Más que sushi ── */}
      <section id="mas-que-sushi" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
          <Reveal className="col-span-12 md:col-span-6 order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4 md:gap-5">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mt-8">
                <Image
                  src={`${IMG}/ceviche.webp`}
                  alt="Ceviche fresco servido en bowl sobre la mesa"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={`${IMG}/completo.webp`}
                  alt="Completo italiano servido en la mesa del local"
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 order-1 md:order-2" delay={100}>
            <Fases className="mb-3" />
            <h2 className={`${display.className} font-extrabold text-[clamp(2rem,5vw,3.4rem)] leading-[1.02] tracking-tight mb-5`} style={{ color: C.ink }}>
              Más que sushi:
              <br />
              <span style={{ color: C.accent }}>de todo y abundante</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
              Así lo dicen sus reseñas: la carta no se queda en los rolls.
              Ceviche, completos, hamburguesas, empanadas y platos caseros
              salen de la misma cocina — ideal cuando cada uno quiere algo
              distinto.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.ticket, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
            <Reveal className="col-span-12 md:col-span-4">
              <Fases className="mb-3" />
              <p className={`${display.className} font-extrabold text-[clamp(4rem,8vw,6rem)] leading-none`} style={{ color: C.ink }}>
                {BIZ.rating}
              </p>
              <Stars value={BIZ.rating} color={C.accent} className="w-5 h-5" />
              <p className={`${mono.className} text-xs mt-3`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google
              </p>
              <p className="text-sm leading-relaxed mt-5 max-w-xs" style={{ color: C.muted }}>
                Lo que más se repite: variedad, porciones abundantes, buenos
                precios y delivery rápido dentro de San Clemente.
              </p>
            </Reveal>
            <div className="col-span-12 md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.who} delay={i * 80}>
                  <figure className="h-full p-6 rounded-2xl border" style={{ borderColor: C.line, backgroundColor: C.paper }}>
                    <blockquote className="text-sm md:text-[15px] leading-relaxed font-semibold" style={{ color: C.ink }}>
                      “{t.text}”
                    </blockquote>
                    <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.14em] mt-4`} style={{ color: C.muted }}>
                      {t.who} · {t.meta}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-8 text-xs uppercase tracking-[0.16em] font-medium underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.ink, textDecorationColor: C.accent }}
            >
              Leerlas todas en Google →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El local + mapa ── */}
      <section id="contacto" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-5 flex flex-col">
            <Fases className="mb-3" />
            <h2 className={`${display.className} font-extrabold text-[clamp(2.1rem,5.5vw,3.6rem)] leading-[0.98] tracking-tight mb-5`} style={{ color: C.ink }}>
              Pasa a buscarlo
              <br />
              o pide a tu casa
            </h2>
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
              <Image
                src={`${IMG}/interior.webp`}
                alt="Interior de Luna Sushi de noche: mesas de acero y ambiente cálido"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: C.muted }}>
              {BIZ.hours} · {BIZ.modes}
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} sl-btn text-sm font-medium uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} sl-btn text-sm font-medium uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7" delay={140}>
            <div className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]" style={{ borderColor: C.ink }}>
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
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${C.line}`, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <div className="flex items-center gap-4">
            <Fases />
            <div>
              <p className={`${display.className} font-bold text-xl leading-tight`}>{BIZ.name}</p>
              <address className="not-italic text-xs leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-7 text-xs leading-relaxed" style={{ color: C.muted }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Datos, reseñas y fotos reales de su ficha de
            Google; precios y carta completa se confirman con el local.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.accent }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
