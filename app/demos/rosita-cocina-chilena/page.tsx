import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  cream: '#f5efdd',
  creamSoft: '#ede4cc',
  board: '#22372b',
  boardDeep: '#182a20',
  ink: '#23301f',
  muted: '#5d6353',
  tile: '#c14b2a',
  chalk: '#f4edda',
  line: 'rgba(35,48,31,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'rosita-cocina-chilena',
  title: 'Rosita Cocina Chilena — Almuerzo casero en Linares',
  description:
    'Cocina chilena en Av. Presidente Ibáñez, Linares. Menú del día, pastel de choclo, empanadas de horno y colaciones para llevar. Pide el menú por WhatsApp.',
  image: '/demos/rosita-cocina-chilena/hero.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El local', href: '#local' },
]

const CINTA = [
  'Pastel de choclo',
  'Empanadas de horno',
  'Cazuela de vacuno',
  'Lentejas con longaniza',
  'Tallarines caseros',
  'Carne al jugo',
  'Pollo enverjado',
  'Humitas',
  'Croquetas de salmón',
]

const PIZARRA = [
  { item: 'Menú del día — plato, ensalada, bebida, pan y postre', price: '$7.000' },
  { item: 'Pastel de choclo + ensaladas', price: '$7.000' },
  { item: 'Empanada de horno', price: '$2.800' },
  { item: 'Arroz o papas fritas + ensalada + papa mayo', price: 'según fondo' },
  { item: 'Hipocalórico — atún, palta, palmito, ensaladas', price: 'del día' },
]

const FONDOS = [
  'bistec de vacuno',
  'carne al jugo',
  'costillar',
  'pollo asado',
  'pollo enverjado',
  'croquetas de salmón',
]

const POSTRES = ['durazno con crema', 'jalea de plátano', 'leche con arroz']

const PLATOS = [
  {
    src: `${IMG}/plato-carne.webp`,
    alt: 'Carne al jugo con arroz y papas fritas servida en la terraza',
    name: 'Carne al jugo',
    note: 'con arroz y papas, como sale todos los días',
  },
  {
    src: `${IMG}/plato-pollo.webp`,
    alt: 'Pollo asado con arroz y papas fritas, plato del día',
    name: 'Pollo asado del día',
    note: 'porción de casa, con su ensalada',
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Mesa de la terraza con almuerzos servidos y vista al comedor',
    name: 'La mesa, al mediodía',
    note: 'se almuerza adentro o en la terraza',
  },
]

const RESENAS = [
  {
    stars: 5,
    text: 'Comí unas humitas exquisitas, todo muy rico, buena calidad a buen precio. Muy amables y rápida atención.',
    author: 'Macarena Silva Castro',
  },
  {
    stars: 4,
    text: 'Bastante delicioso y precio calidad bueno: 7 mil con bebida individual, postre, ensalada y pan. Recomiendo.',
    author: 'Gabriel Salazar',
  },
  {
    stars: 5,
    text: 'Súper agradable el lugar. Limpio. Buena atención y rica comida.',
    author: 'Pauli Meza',
  },
]

function Chalk({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <span className={`${mono.className} ${className}`}>{children}</span>
}

export default function RositaCocinaChilenaPage() {
  return (
    <div
      className={`${mono.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .rs-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .rs-btn:hover { transform: translateY(-2px); filter: brightness(1.05); }
        .rs-btn:active { transform: translateY(0) scale(0.97); }
        .rs-btn:focus-visible { outline: 3px solid ${C.tile}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pide el menú"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,239,221,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.tile,
          btnInk: '#fff7ea',
        }}
      />

      {/* ── Portada: pizarra de barrio ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[128px] pb-12 md:pb-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-7">
              <Reveal>
                <Chalk className="block text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-5">
                  <span style={{ color: C.tile }}>Linares · Región del Maule</span>
                  <span style={{ color: C.muted }}> — almuerzo casero desde las 8:00</span>
                </Chalk>
                <h1
                  className={`${display.className} font-black leading-[0.92] tracking-[-0.02em] text-[clamp(3.4rem,11vw,7.5rem)]`}
                  style={{ color: C.ink }}
                >
                  Rosita
                  <span
                    className="block italic font-semibold tracking-normal text-[clamp(1.5rem,4.5vw,3rem)] mt-2"
                    style={{ color: C.tile }}
                  >
                    Cocina Chilena
                  </span>
                </h1>
                <p className="text-sm md:text-base leading-relaxed max-w-md mt-6" style={{ color: C.muted }}>
                  El almuerzo de toda la semana en Ibáñez: menú del día,
                  pastel de choclo, empanadas de horno y colaciones para
                  servir o llevar. De lunes a viernes, como en la casa.
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <Stars value={BIZ.rating} color={C.tile} />
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                    style={{ color: C.ink, textDecorationColor: 'rgba(193,75,42,0.4)' }}
                  >
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </a>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} rs-btn font-bold text-sm md:text-base px-6 py-3 rounded-full tap-44`}
                    style={{ backgroundColor: C.board, color: C.chalk }}
                  >
                    Pide el menú por WhatsApp
                  </a>
                  <a
                    href="#pizarra"
                    className={`${display.className} rs-btn font-bold text-sm md:text-base px-6 py-3 rounded-full border-2 tap-44`}
                    style={{ borderColor: C.ink, color: C.ink }}
                  >
                    Ver la pizarra
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 md:col-span-5">
              <Reveal delay={140}>
                <figure className="relative">
                  <div
                    className="relative overflow-hidden rounded-[28px] border-[6px] aspect-[4/5]"
                    style={{ borderColor: C.ink }}
                  >
                    <Image
                      src={`${IMG}/hero.webp`}
                      alt="El comedor de Rosita Cocina Chilena lleno de gente almorzando"
                      fill
                      priority
                      sizes="(min-width: 768px) 42vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className="absolute -bottom-4 left-5 right-5 flex items-center gap-3 rounded-2xl px-4 py-3 shadow-lg"
                    style={{ backgroundColor: C.board, color: C.chalk }}
                  >
                    <Image
                      src={`${IMG}/logo.webp`}
                      alt=""
                      width={40}
                      height={40}
                      className="rounded-full shrink-0"
                    />
                    <span className="text-xs md:text-sm leading-snug">
                      El comedor un mediodía cualquiera — foto real del local
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta pizarra ── */}
      <div className="py-4 md:py-5" style={{ backgroundColor: C.board }} aria-hidden="true">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-2">
          {CINTA.map((item) => (
            <span
              key={item}
              className={`${display.className} inline-flex items-center italic text-sm md:text-base font-semibold`}
              style={{ color: C.chalk }}
            >
              <span className="px-3">{item}</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill={C.tile} aria-hidden="true">
                <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4Z" />
              </svg>
            </span>
          ))}
        </div>
      </div>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ backgroundColor: C.boardDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 md:mb-12 border-b border-dashed pb-4" style={{ borderColor: 'rgba(244,237,218,0.3)' }}>
              <Chalk className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold">
                <span style={{ color: C.tile }}>pizarra del día</span>
              </Chalk>
              <h2
                className={`${display.className} font-black italic leading-none text-[clamp(2rem,5.5vw,3.6rem)]`}
                style={{ color: C.chalk }}
              >
                Lo que hay hoy
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <Reveal className="col-span-12 md:col-span-5">
              <figure>
                <div className="relative overflow-hidden rounded-2xl border-4 aspect-[4/5]" style={{ borderColor: C.chalk }}>
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="Pizarra real de Rosita con la carta del día escrita a mano"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="text-[11px] md:text-xs mt-3 uppercase tracking-[0.2em]" style={{ color: 'rgba(244,237,218,0.65)' }}>
                  La pizarra real, publicada en su Facebook
                </figcaption>
              </figure>
            </Reveal>
            <div className="col-span-12 md:col-span-7">
              <Reveal delay={100}>
                <ul>
                  {PIZARRA.map((p) => (
                    <li
                      key={p.item}
                      className="flex items-baseline gap-3 py-3.5 md:py-4 border-b border-dashed"
                      style={{ borderColor: 'rgba(244,237,218,0.25)' }}
                    >
                      <span className={`${display.className} text-base md:text-lg font-semibold`} style={{ color: C.chalk }}>
                        {p.item}
                      </span>
                      <span className="flex-1" aria-hidden="true" />
                      <Chalk className="text-sm md:text-base font-bold shrink-0">
                        <span style={{ color: C.tile }}>{p.price}</span>
                      </Chalk>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={160}>
                <div className="mt-6 rounded-2xl border border-dashed p-5 md:p-6" style={{ borderColor: 'rgba(244,237,218,0.35)' }}>
                  <p className={`${display.className} italic text-sm md:text-base font-semibold mb-3`} style={{ color: C.chalk }}>
                    Fondos que rotan en la pizarra:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {FONDOS.map((f) => (
                      <span
                        key={f}
                        className="text-[11px] md:text-xs uppercase tracking-[0.14em] px-3 py-1.5 rounded-full"
                        style={{ backgroundColor: 'rgba(244,237,218,0.12)', color: C.chalk }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                  <p className="text-[11px] md:text-xs mt-4" style={{ color: 'rgba(244,237,218,0.65)' }}>
                    Postre del día: {POSTRES.join(' · ')}.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sale de la cocina ── */}
      <section id="cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-8 md:mb-12 border-b pb-4" style={{ borderColor: C.line }}>
            <Chalk className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold">
              <span style={{ color: C.tile }}>recién salido</span>
            </Chalk>
            <h2 className={`${display.className} font-black leading-none text-[clamp(2rem,5.5vw,3.6rem)]`} style={{ color: C.ink }}>
              Sale de la cocina
            </h2>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6 md:gap-8">
          {PLATOS.map((p, i) => (
            <Reveal key={p.name} className="col-span-12 sm:col-span-6 md:col-span-4" delay={i * 110}>
              <li className="h-full">
                <div
                  className="relative overflow-hidden rounded-3xl mb-4 aspect-[4/5] border-4"
                  style={{ borderColor: C.ink }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <h3 className={`${display.className} font-black text-xl md:text-2xl`} style={{ color: C.ink }}>
                  {p.name}
                </h3>
                <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>
                  {p.note}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.creamSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 md:mb-12 border-b pb-4" style={{ borderColor: C.line }}>
              <Chalk className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold">
                <span style={{ color: C.tile }}>{BIZ.rating} en Google</span>
              </Chalk>
              <h2 className={`${display.className} font-black leading-none text-[clamp(2rem,5.5vw,3.6rem)]`} style={{ color: C.ink }}>
                Lo dicen los que almuerzan
              </h2>
            </div>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} className="col-span-12 md:col-span-4" delay={i * 110}>
                <li className="h-full">
                  <figure
                    className="h-full rounded-3xl p-6 md:p-7 flex flex-col"
                    style={{ backgroundColor: C.cream, boxShadow: '0 2px 0 rgba(35,48,31,0.15)' }}
                  >
                    <Stars value={r.stars} color={C.tile} className="mb-4" />
                    <blockquote
                      className={`${display.className} text-base md:text-lg leading-relaxed font-semibold flex-1`}
                      style={{ color: C.ink }}
                    >
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-5 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                      {r.author} — reseña en Google
                    </figcaption>
                  </figure>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El local ── */}
      <section id="local" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-8 md:mb-12 border-b pb-4" style={{ borderColor: C.line }}>
            <Chalk className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold">
              <span style={{ color: C.tile }}>Ibáñez 0782</span>
            </Chalk>
            <h2 className={`${display.className} font-black leading-none text-[clamp(2rem,5.5vw,3.6rem)]`} style={{ color: C.ink }}>
              El local
            </h2>
          </div>
        </Reveal>
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-start">
          <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4 md:gap-5">
            <Reveal>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] border-4 col-span-1" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Rosita Cocina Chilena con su letrero de colaciones"
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] border-4" style={{ borderColor: C.ink }}>
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Terraza techada de Rosita con mesas y el letrero de bienvenida"
                  fill
                  sizes="(min-width: 768px) 30vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={180} className="col-span-2">
              <div
                className="rounded-3xl p-5 md:p-6 flex flex-wrap gap-x-10 gap-y-4"
                style={{ backgroundColor: C.board, color: C.chalk }}
              >
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: C.tile }}>
                    Horario
                  </p>
                  <p className={`${display.className} font-semibold text-sm md:text-base mt-1`}>
                    {BIZ.hours}
                    <br />
                    <span style={{ color: 'rgba(244,237,218,0.7)' }}>{BIZ.hoursExtra}</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: C.tile }}>
                    Para llevar
                  </p>
                  <p className={`${display.className} font-semibold text-sm md:text-base mt-1`}>
                    Colaciones para servir y llevar.
                    <br />
                    <span style={{ color: 'rgba(244,237,218,0.7)' }}>Atención a empresas y particulares.</span>
                  </p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] font-bold" style={{ color: C.tile }}>
                    Dirección
                  </p>
                  <p className={`${display.className} font-semibold text-sm md:text-base mt-1`}>
                    {BIZ.address}
                    <br />
                    <span style={{ color: 'rgba(244,237,218,0.7)' }}>{BIZ.city}, {BIZ.region}</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal className="col-span-12 md:col-span-5 h-full" delay={100}>
            <div className="relative w-full h-full min-h-[340px] overflow-hidden rounded-3xl border-4" style={{ borderColor: C.ink }}>
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
      <footer style={{ backgroundColor: C.boardDeep, color: C.chalk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} font-black italic text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(244,237,218,0.7)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              Facebook
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,218,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,237,218,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con fotos, carta y reseñas reales del local.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tile }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir el menú a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
