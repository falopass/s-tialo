import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  waLink,
  MAPS_URL,
  MAPS_EMBED,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  HOURS,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#F3F5F0',
  card: '#FFFFFF',
  ink: '#141A15',
  muted: '#525D54',
  line: 'rgba(20,26,21,0.14)',
  verde: '#21A349',
  verdeInk: '#0E3B21',
  verdeDeep: '#0D2115',
  asfalto: '#10150F',
  star: '#F2B33D',
}

export const metadata: Metadata = demoMetadata({
  slug: 'automotora-gonzalez',
  title: 'Automotora González — Usados en Av. Balmaceda 1971, Curicó',
  description:
    'Concesionario de usados en Av. Balmaceda 1971, Curicó. Compra, venta, consignaciones y crédito automotriz. El patio completo, con fotos y datos reales.',
  image: `${IMG}/hero-fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El patio', href: '#patio' },
  { label: 'Comprar', href: '#como-funciona' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#donde' },
]

type Car = {
  src: string
  alt: string
  name: string
  specs: string[]
  tag: string
  price: string
}

const PATIO: Car[] = [
  {
    src: `${IMG}/kia-sportage.webp`,
    alt: 'Kia Sportage blanca estacionada en el patio de Automotora González',
    name: 'Kia Sportage EX 2.0 AUT',
    specs: ['2023', '80.000 km', '2 dueños'],
    tag: 'Cámara de retroceso',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/haval-jolion.webp`,
    alt: 'Haval Jolion gris en el lote de Automotora González',
    name: 'Haval Jolion Elite 1.5',
    specs: ['2022', '60.000 km', '2 dueños'],
    tag: 'Full cuero',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/jac-t8.webp`,
    alt: 'Camioneta JAC T8 blanca en el patio de la automotora',
    name: 'JAC T8 2.0 Diésel 4x2',
    specs: ['2022', '116.000 km', 'Único dueño'],
    tag: 'Full equipo',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/subaru-xv.webp`,
    alt: 'Subaru XV azul en el patio de Automotora González',
    name: 'Subaru XV AWD 1.6',
    specs: ['2018', '169.000 km', '3 dueños'],
    tag: 'Cámara y sensores',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/chevrolet-sail.webp`,
    alt: 'Chevrolet Sail blanco publicado en el patio de la automotora',
    name: 'Chevrolet Sail 1.5',
    specs: ['2018', '153.000 km', 'Único dueño'],
    tag: 'Semi full',
    price: '$4.490.000',
  },
  {
    src: `${IMG}/subaru-outback.webp`,
    alt: 'Subaru Outback plateada en el patio de Automotora González',
    name: 'Subaru Outback AWD 2.5 AUT',
    specs: ['2016', '176.000 km', 'Único dueño'],
    tag: 'Full equipo',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/mini-cooper.webp`,
    alt: 'Mini Cooper S en el lote de Automotora González',
    name: 'Mini Cooper S 1.6',
    specs: ['2013', '116.000 km'],
    tag: 'Sensores de retroceso',
    price: 'Precio a consultar',
  },
  {
    src: `${IMG}/haval-h6.webp`,
    alt: 'Haval H6 AWD Deluxe en el patio de la automotora',
    name: 'Haval H6 AWD Deluxe 2.0 AUT',
    specs: ['Único dueño', 'Prácticamente nuevo'],
    tag: 'Full cuero',
    price: 'Precio a consultar',
  },
]

const STEPS = [
  { n: '01', t: 'Escríbenos por WhatsApp', d: 'Te mandamos la lista actualizada del patio, con fotos y precio del auto que te interesa.' },
  { n: '02', t: 'Pasa a verlo a Balmaceda 1971', d: 'Las fotos que ves acá son del auto real, estacionado en el mismo lote.' },
  { n: '03', t: 'Contado, crédito o consignación', d: 'Crédito automotriz en el local (convenios Tanner y Global) o deja tu vehículo en consignación.' },
  { n: '04', t: 'Sales manejando', d: 'Revisas, pruebas y te lo llevas. Así de directo.' },
]

const SERVICES = [
  'Venta de usados seleccionados',
  'Consignaciones — tu auto se vende en el patio',
  'Crédito automotriz con Tanner y Global',
  'Lavado de tapices y aspirado de vehículos',
]

const REVIEWS = [
  {
    name: 'Robert Marchiotto',
    text: 'Buen trato!! Muy buena disposición. Bruno un genio nos saco todas las dudas!!',
    stars: 5,
  },
  {
    name: 'Cintya Luna',
    text: 'Una excelente atención de Joaquín, muy agradecida de los servicios prestados por la automotora, recomiendo sin dudas.',
    stars: 5,
  },
  {
    name: 'Nicolás B.',
    text: 'Confiables, su dueño Cristopher es de palabra. Con tanto chanta en otras partes, dan ganas de calificar bien a la gente honesta.',
    stars: 5,
  },
]

function VentaSign({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-2 rotate-[-5deg] bg-white px-3 py-1.5 shadow-[3px_4px_0_rgba(13,33,21,0.35)] border-2 ${className}`}
      style={{ borderColor: C.verdeInk }}
    >
      <span
        className={`${display.className} font-extrabold italic uppercase leading-none tracking-[0.06em] text-[13px]`}
        style={{ color: C.verdeInk }}
      >
        EN VENTA
      </span>
    </span>
  )
}

function LaneLine({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[3px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${dark ? 'rgba(33,163,73,0.85)' : 'rgba(20,26,21,0.35)'} 0 26px, transparent 26px 52px)`,
      }}
    />
  )
}

export default function Page() {
  return (
    <main
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} italic font-bold`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,245,240,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.verde,
          btnInk: '#0D2115',
        }}
        ctaLabel="WhatsApp"
      />

      {/* ── Hero a sangre: la fachada del patio ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.asfalto }}
      >
        <Image
          src={`${IMG}/hero-fachada.webp`}
          alt="Fachada de Automotora González en Av. Balmaceda 1971, Curicó, con el patio de usados al frente"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(16,21,15,0.62) 0%, rgba(16,21,15,0.28) 42%, rgba(16,21,15,0.9) 100%)',
          }}
        />
        <div className="absolute top-24 right-5 md:top-28 md:right-12 z-10">
          <VentaSign />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-8 pt-36 pb-14 md:pb-20">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em] font-medium mb-4`}
              style={{ color: 'rgba(243,245,240,0.8)' }}
            >
              Concesionario de usados · Av. Balmaceda 1971, Curicó
            </p>
            <h1
              className={`${display.className} italic font-extrabold uppercase leading-[0.98] text-[clamp(2.75rem,9vw,5.75rem)] mb-5 max-w-4xl`}
              style={{ color: '#F3F5F0' }}
            >
              El auto que buscas
              <br />
              está en <span style={{ color: '#7BD997' }}>el patio.</span>
            </h1>
            <p
              className="max-w-xl text-base md:text-lg leading-relaxed mb-8"
              style={{ color: 'rgba(243,245,240,0.88)' }}
            >
              Compra, venta y consignación de usados en Curicó, con crédito
              automotriz en el mismo local.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.verde, color: '#0D2115' }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href="#patio"
                className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm md:text-base px-7 py-3 border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ borderColor: 'rgba(243,245,240,0.55)', color: '#F3F5F0' }}
              >
                Ver el patio
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color={C.star} className="w-4 h-4" />
              <span className={`${mono.className} text-xs md:text-sm`} style={{ color: 'rgba(243,245,240,0.85)' }}>
                {BIZ.rating.toString().replace('.', ',')} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.asfalto }}>
        <LaneLine dark />
        <div
          className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-5 grid grid-cols-1 sm:grid-cols-3 gap-y-2 sm:gap-x-8 text-[11px] md:text-xs uppercase tracking-[0.16em]`}
          style={{ color: 'rgba(243,245,240,0.78)' }}
        >
          <span>★ {BIZ.rating.toString().replace('.', ',')} — {BIZ.reviews} reseñas en Google</span>
          <span>8 usados publicados esta semana</span>
          <span>Crédito y consignación en el local</span>
        </div>
        <LaneLine dark />
      </section>

      {/* ── El patio: vitrina de autos reales ── */}
      <section id="patio" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="md:flex md:items-end md:justify-between gap-6 mb-10">
            <h2
              className={`${display.className} italic font-extrabold uppercase leading-[1.0] text-4xl md:text-6xl`}
              style={{ color: C.ink }}
            >
              En el patio
              <br />
              esta semana
            </h2>
            <p className="max-w-sm text-sm md:text-base leading-relaxed mt-4 md:mt-0 md:text-right" style={{ color: C.muted }}>
              Los mismos autos que verás en Balmaceda 1971, publicados por
              @automotora.gonzalez en Instagram.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {PATIO.map((car, i) => (
            <Reveal key={car.name} delay={(i % 4) * 80} className="h-full">
              <article
                className="bg-white border overflow-hidden h-full flex flex-col"
                style={{ borderColor: C.line }}
              >
                <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: '#E7EAE3' }}>
                  <Image
                    src={car.src}
                    alt={car.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  />
                  <div className="absolute top-3 left-3">
                    <VentaSign />
                  </div>
                </div>
                <div className="p-4 flex flex-col gap-2 grow">
                  <h3
                    className={`${display.className} uppercase font-bold text-xl leading-[1.05]`}
                    style={{ color: C.ink }}
                  >
                    {car.name}
                  </h3>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.08em]`} style={{ color: C.muted }}>
                    {car.specs.join(' · ')}
                  </p>
                  <p className="text-sm" style={{ color: C.muted }}>
                    {car.tag}
                  </p>
                  <div className="mt-auto pt-3 flex items-center justify-between gap-3 border-t" style={{ borderColor: C.line }}>
                    <span
                      className={`${mono.className} text-sm font-semibold`}
                      style={{ color: car.price.startsWith('$') ? C.verdeInk : C.muted }}
                    >
                      {car.price}
                    </span>
                    <a
                      href={waLink(`Hola, me interesa el ${car.name} que tienen publicado`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} uppercase font-bold text-sm tracking-[0.04em] underline underline-offset-4 decoration-2 tap-44 hover:decoration-[3px]`}
                      style={{ color: C.verdeInk, textDecorationColor: C.verde }}
                    >
                      Consultar
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={`${mono.className} mt-6 text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
            El patio cambia todas las semanas — pregunta si el que te gusta sigue disponible.
          </p>
        </Reveal>
      </section>

      {/* ── Así se compra: pizarra del patio ── */}
      <section id="como-funciona" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <Reveal>
              <h2
                className={`${display.className} italic font-extrabold uppercase leading-[1.0] text-4xl md:text-5xl mb-10`}
                style={{ color: '#F3F5F0' }}
              >
                Así se compra
                <br />
                en González
              </h2>
            </Reveal>
            <ol className="space-y-7">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 80}>
                  <li className="flex gap-4">
                    <span
                      className={`${mono.className} shrink-0 w-9 h-9 flex items-center justify-center text-sm font-bold border-2`}
                      style={{ borderColor: C.verde, color: '#7BD997' }}
                    >
                      {s.n}
                    </span>
                    <div>
                      <h3
                        className={`${display.className} uppercase font-bold text-lg md:text-xl leading-tight mb-1`}
                        style={{ color: '#F3F5F0' }}
                      >
                        {s.t}
                      </h3>
                      <p className="text-sm leading-relaxed" style={{ color: 'rgba(243,245,240,0.75)' }}>
                        {s.d}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal delay={120}>
            <div
              className="border-2 p-6 md:p-8 h-full flex flex-col"
              style={{ borderColor: 'rgba(33,163,73,0.55)', backgroundColor: 'rgba(243,245,240,0.04)' }}
            >
              <p
                className={`${mono.className} text-[11px] uppercase tracking-[0.22em] font-medium mb-6`}
                style={{ color: '#7BD997' }}
              >
                Los letreros del patio, en versión web
              </p>
              <ul className="space-y-4 grow">
                {SERVICES.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className={`${mono.className} shrink-0 font-bold`}
                      style={{ color: C.verde }}
                    >
                      ▸
                    </span>
                    <span className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(243,245,240,0.9)' }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={waLink('Hola, quiero consultar por los servicios de Automotora González')}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-8 inline-flex items-center justify-center uppercase font-bold tracking-[0.04em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.verde, color: '#0D2115' }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales de Google ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <div>
              <p
                className={`${display.className} italic font-extrabold leading-none text-7xl md:text-8xl`}
                style={{ color: C.verdeInk }}
              >
                {BIZ.rating.toString().replace('.', ',')}
              </p>
              <Stars value={BIZ.rating} color={C.star} className="w-5 h-5 mt-3" />
              <p className={`${mono.className} mt-3 text-xs uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google Maps
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} mt-5 inline-block uppercase font-bold text-sm tracking-[0.04em] underline underline-offset-4 decoration-2 tap-44 hover:decoration-[3px]`}
                style={{ color: C.verdeInk, textDecorationColor: C.verde }}
              >
                Ver la ficha en Google
              </a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className={`h-full ${i === 2 ? 'sm:col-span-2' : ''}`}>
                <figure
                  className="bg-white border p-5 h-full"
                  style={{ borderColor: C.line }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      aria-hidden="true"
                      className={`${display.className} w-9 h-9 flex items-center justify-center font-extrabold uppercase text-base`}
                      style={{ backgroundColor: C.verdeDeep, color: '#7BD997' }}
                    >
                      {r.name[0]}
                    </span>
                    <figcaption className={`${display.className} uppercase font-bold text-base`} style={{ color: C.ink }}>
                      {r.name}
                    </figcaption>
                  </div>
                  <Stars value={r.stars} color={C.star} className="w-3.5 h-3.5 mb-3" />
                  <blockquote className="text-sm leading-relaxed" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Llegar al patio ── */}
      <section id="donde" className="scroll-mt-20 border-t" style={{ borderColor: C.line, backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <div>
              <h2
                className={`${display.className} italic font-extrabold uppercase leading-[1.0] text-4xl md:text-5xl mb-6`}
                style={{ color: C.ink }}
              >
                Llegar al patio
              </h2>
              <p className={`${display.className} uppercase font-bold text-xl md:text-2xl mb-1`} style={{ color: C.ink }}>
                {BIZ.address}
              </p>
              <p className="text-sm mb-6" style={{ color: C.muted }}>
                {BIZ.city}, {BIZ.region}
              </p>
              <dl className="border-t" style={{ borderColor: C.line }}>
                {HOURS.map((h) => (
                  <div
                    key={h.d}
                    className="flex items-baseline justify-between gap-4 py-3 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <dt className="text-sm" style={{ color: C.muted }}>{h.d}</dt>
                    <dd className={`${mono.className} text-sm`} style={{ color: C.ink }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
                <a
                  href={`tel:${BIZ.whatsapp}`}
                  className={`${display.className} uppercase font-bold tracking-[0.04em] text-sm px-6 py-3 border-2 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  {BIZ.phoneDisplay}
                </a>
              </div>
              <p className={`${mono.className} mt-6 text-xs uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44 hover:opacity-80">
                  Instagram
                </a>
                {' · '}
                <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44 hover:opacity-80">
                  Facebook
                </a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative border min-h-[320px] h-full" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section style={{ backgroundColor: C.verdeDeep }}>
        <LaneLine dark />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2
              className={`${display.className} italic font-extrabold uppercase leading-[1.0] text-4xl md:text-6xl mb-5 mx-auto max-w-3xl`}
              style={{ color: '#F3F5F0' }}
            >
              Los buenos usados
              <br />
              no esperan.
            </h2>
            <p className="max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(243,245,240,0.85)' }}>
              Escríbenos y te mandamos fotos, precio y condiciones del auto que
              te interesa.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center justify-center uppercase font-bold tracking-[0.04em] text-sm md:text-base px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.verde, color: '#0D2115' }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
        <LaneLine dark />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-3">
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="w-9 h-9 rounded-full"
              aria-hidden="true"
            />
            <div>
              <p className={`${display.className} italic font-bold uppercase text-base leading-none`} style={{ color: '#F3F5F0' }}>
                {BIZ.name}
              </p>
              <p className={`${mono.className} text-[11px] mt-1`} style={{ color: 'rgba(243,245,240,0.6)' }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
          </div>
          <nav aria-label="Secciones" className="flex flex-wrap gap-x-5 gap-y-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${mono.className} text-[11px] uppercase tracking-[0.14em] tap-44 hover:opacity-100`}
                style={{ color: 'rgba(243,245,240,0.7)' }}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <p className={`${mono.className} text-[11px]`} style={{ color: 'rgba(243,245,240,0.5)' }}>
            © {new Date().getFullYear()} {BIZ.name}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      <DemoBand name={BIZ.name} />
    </main>
  )
}
