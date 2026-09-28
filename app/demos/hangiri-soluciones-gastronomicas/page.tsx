import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  sumi: '#131110',
  charcoal: '#1D1A17',
  ivory: '#F6F1E7',
  white: '#FFFFFF',
  oro: '#C9A25E',
  ink: '#241F1B',
  muted: '#6B6259',
  line: 'rgba(36,31,27,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'hangiri-soluciones-gastronomicas',
  title: 'Hangiri — Catering y sushi a domicilio en Talca',
  description:
    'Catering para eventos y sushi delivery SUSHI-POH en 25 Oriente 3291, Talca. Hand rolls desde $2.000, tablas, brochetas y banquetería para tu evento. Pide la carta por WhatsApp.',
  image: '/demos/hangiri-soluciones-gastronomicas/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'Catering', href: '#catering' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const HANDROLLS = [
  { name: 'Pollo · queso · cebollín', price: '$2.000' },
  { name: 'Pollo · queso · palta', price: '$2.500' },
  { name: 'Vegano · palmito, choclo, palta', price: '$2.500' },
  { name: 'Camarón o salmón · queso · cebollín', price: '$3.000' },
]

const PLATOS = ['Yakisoba', 'Tataki', 'Ramen', 'Pulpo al olivo', 'Yakimeshi']

const RESENAS = [
  {
    text: 'Porciones muy generosas y de rico sabor. Excelente calidad por el precio.',
    name: 'Camila Alejandra',
  },
  {
    text: 'Maravilloso, por lejos el mejor sushi de Talca.',
    name: 'Pedro',
  },
  {
    text: 'El mejor sushi de todo Talca.',
    name: 'Carla González',
  },
]

const GALERIA = [
  {
    src: `${IMG}/gyozas.webp`,
    alt: 'Gyozas doradas servidas en plato oscuro con brotes y flores comestibles',
    caption: 'Gyozas',
  },
  {
    src: `${IMG}/rolls.webp`,
    alt: 'Rolls de sushi envueltos en palta ordenados sobre la mesa',
    caption: 'Rolls de la casa',
  },
  {
    src: `${IMG}/dulces.webp`,
    alt: 'Mesa de dulces y galletas montada para un evento de catering',
    caption: 'Mesa dulce para eventos',
  },
  {
    src: `${IMG}/anticuchos.webp`,
    alt: 'Anticuchos y brochetas de verduras y carne asándose a la parrilla',
    caption: 'Asados y anticuchos',
  },
]

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.32em] mb-4 flex items-center gap-3 font-medium"
      style={{ color: dark ? C.oro : '#7A5C22' }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function HangiriPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.ivory, color: C.ink }}
    >
      <div style={{ backgroundColor: C.sumi }}>
        <BlitzNav
          name={BIZ.short}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(19,17,16,0.92)',
            ink: C.ivory,
            line: 'rgba(246,241,231,0.14)',
            btnBg: C.oro,
            btnInk: C.sumi,
          }}
        />
      </div>

      {/* ── Hero editorial ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.sumi }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
            <Reveal>
              <Eyebrow dark>Catering · Sushi delivery · Talca</Eyebrow>
              <h1
                className={`${display.className} font-medium leading-[1.02] text-[clamp(2.6rem,7.5vw,4.8rem)] mb-6`}
                style={{ color: C.ivory }}
              >
                Cocina de autor
                <em className="block" style={{ color: C.oro }}>para tu mesa y tu evento</em>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(246,241,231,0.82)' }}>
                En 25 Oriente, Talca, Hangiri hace dos cosas: banquetería
                para eventos y sushi a domicilio bajo la marca SUSHI-POH.
                Mismo equipo, misma exigencia.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.oro, color: C.sumi }}
                >
                  Pedir la carta por WhatsApp
                </a>
                <a
                  href="#carta"
                  className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border tap-44"
                  style={{ borderColor: 'rgba(246,241,231,0.4)', color: C.ivory }}
                >
                  Ver la pizarra
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full tap-44"
                style={{ backgroundColor: 'rgba(246,241,231,0.1)', color: C.ivory }}
              >
                <Stars value={4.4} color={C.oro} className="w-4 h-4" />
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </a>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative">
                <div className="rounded-3xl overflow-hidden aspect-square border" style={{ borderColor: 'rgba(246,241,231,0.16)' }}>
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Plato de autor de Hangiri: tartar decorado con flores comestibles y polvo de especias"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="absolute -bottom-4 left-5 right-5 md:left-8 md:right-8 text-[10px] md:text-xs font-semibold uppercase tracking-[0.14em] px-4 py-2.5 rounded-xl text-center"
                  style={{ backgroundColor: C.oro, color: C.sumi }}
                >
                  Platos de la cocina de Hangiri
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Dos cocinas ── */}
      <section id="catering" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-4">
        <Reveal>
          <Eyebrow>Un mismo equipo</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-10 md:mb-14`} style={{ color: C.ink }}>
            Dos cocinas, una sola casa
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {[
            {
              src: `${IMG}/catering.webp`,
              alt: 'Bandeja de catering de Hangiri con brochetas y sushi variado listo para un evento',
              kicker: 'Para eventos',
              title: 'Catering a medida',
              desc: 'Brochetas, tablas y banquetería montada donde lo necesites: matrimonios, empresas y celebraciones en Talca y la región.',
              cta: 'Cotizar un evento',
            },
            {
              src: `${IMG}/sushi.webp`,
              alt: 'Tabla de sushi SUSHI-POH con rolls variados listos para delivery',
              kicker: 'A domicilio',
              title: 'SUSHI-POH delivery',
              desc: 'La marca de sushi de Hangiri llega a tu casa: rolls, hand rolls y platos calientes, con pedido directo por WhatsApp.',
              cta: 'Pedir sushi',
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <article className="rounded-3xl overflow-hidden h-full flex flex-col" style={{ backgroundColor: C.charcoal }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={b.src}
                    alt={b.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] px-3.5 py-2 rounded-full"
                    style={{ backgroundColor: 'rgba(19,17,16,0.85)', color: C.oro }}
                  >
                    {b.kicker}
                  </span>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <h3 className={`${display.className} text-2xl md:text-3xl mb-3`} style={{ color: C.ivory }}>
                    {b.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: 'rgba(246,241,231,0.78)' }}>
                    {b.desc}
                  </p>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 self-start text-sm font-semibold underline underline-offset-4 decoration-2 tap-44 inline-flex items-center"
                    style={{ color: C.oro, textDecorationColor: 'rgba(201,162,94,0.45)' }}
                  >
                    {b.cta} →
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La carta de la pizarra ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Precios de la pizarra del local</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-8`} style={{ color: C.ink }}>
              Hand rolls de promoción
            </h2>
            <div className="rounded-3xl border overflow-hidden" style={{ backgroundColor: C.white, borderColor: C.line }}>
              {HANDROLLS.map((h, i) => (
                <div
                  key={h.name}
                  className="flex items-baseline gap-3 px-6 md:px-8 py-5 text-sm md:text-base"
                  style={{ borderTop: i === 0 ? 'none' : `1px solid ${C.line}` }}
                >
                  <span className={`${display.className} text-lg md:text-xl`} style={{ color: C.ink }}>
                    {h.name}
                  </span>
                  <span className="flex-1 border-b border-dotted mx-2 translate-y-[-4px]" style={{ borderColor: C.muted }} aria-hidden="true" />
                  <span className="font-bold whitespace-nowrap" style={{ color: '#7A5C22' }}>
                    {h.price}
                  </span>
                </div>
              ))}
              <div className="px-6 md:px-8 py-5" style={{ backgroundColor: C.ivory, borderTop: `1px solid ${C.line}` }}>
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: C.muted }}>
                  Y también en la carta
                </p>
                <div className="flex flex-wrap gap-2">
                  {PLATOS.map((p) => (
                    <span
                      key={p}
                      className="text-xs md:text-sm font-medium px-3.5 py-2 rounded-full border"
                      style={{ borderColor: C.line, color: C.ink }}
                    >
                      {p}
                    </span>
                  ))}
                </div>
                <p className="text-xs leading-relaxed mt-4" style={{ color: C.muted }}>
                  Precios de la pizarra fotografiada en el local. La carta
                  completa se pide por WhatsApp.
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="rounded-3xl overflow-hidden border relative" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/pizarra.webp`}
                alt="Pizarra del local con la carta SUSHI-POH: hand rolls en promoción desde $2.000 y platos como ramen, tataki y yakimeshi"
                width={1093}
                height={1181}
                className="w-full h-auto"
              />
              <figcaption
                className="absolute bottom-3 left-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.14em] px-3.5 py-2 rounded-full"
                style={{ backgroundColor: 'rgba(19,17,16,0.85)', color: C.ivory }}
              >
                La pizarra, tal como está en el local
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Galería ── */}
      <section style={{ backgroundColor: C.charcoal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow dark>De la cocina a la mesa</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-10 md:mb-14`} style={{ color: C.ivory }}>
              Lo que sale de la cocina de Hangiri
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {GALERIA.map((f, i) => (
              <Reveal key={f.src} delay={i * 80}>
                <figure className="relative rounded-2xl overflow-hidden aspect-[3/4]">
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover"
                  />
                  <figcaption
                    className="absolute bottom-2.5 left-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                    style={{ backgroundColor: 'rgba(19,17,16,0.82)', color: C.ivory }}
                  >
                    {f.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <Reveal>
            <Eyebrow>Lo que dicen en Google</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              “El mejor sushi de Talca”
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-full border tap-44"
              style={{ borderColor: C.line, color: C.ink, backgroundColor: C.white }}
            >
              <Stars value={4.4} color="#7A5C22" className="w-4 h-4" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <blockquote
                className="rounded-2xl border p-6 md:p-7 h-full flex flex-col"
                style={{ backgroundColor: C.white, borderColor: C.line }}
              >
                <Stars value={4.4} color="#7A5C22" className="w-4 h-4" />
                <p className={`${display.className} text-xl md:text-2xl leading-snug mt-4 mb-5 flex-1`} style={{ color: C.ink }}>
                  “{r.text}”
                </p>
                <footer className="text-xs md:text-sm font-semibold" style={{ color: C.muted }}>
                  {r.name} · reseña en Google
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              25 Oriente, casi con 20½ Norte
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              La cocina está en {BIZ.address}. Retira tu pedido en el
              local o pide delivery; el catering se coordina con
              anticipación por WhatsApp.
            </p>
            <dl className="text-sm space-y-2 mb-8" style={{ color: C.muted }}>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.ink }}>Horario:</dt>
                <dd>{BIZ.hours}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.ink }}>Instagram:</dt>
                <dd>
                  <a
                    href={BIZ.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 tap-44 inline-flex items-center"
                  >
                    @hangiri.cl
                  </a>
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3.5 rounded-full tap-44"
                style={{ backgroundColor: C.sumi, color: C.ivory }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-6 py-3.5 rounded-full border tap-44"
                style={{ borderColor: C.line, color: C.ink }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.sumi }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.ivory }}>
              ¿Un evento por venir
              <em style={{ color: C.oro }}> o antojo de sushi?</em>
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: 'rgba(246,241,231,0.82)' }}>
              Escríbeles por WhatsApp: cotización de catering o pedido de la carta.
            </p>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.oro, color: C.sumi }}
              >
                Hablar con Hangiri
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.charcoal, color: C.ivory }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="flex items-center gap-3">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className={`${display.className} text-2xl tracking-[0.14em] uppercase`}>{BIZ.short}</p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(246,241,231,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}
              </p>
            </div>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(246,241,231,0.85)' }}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
