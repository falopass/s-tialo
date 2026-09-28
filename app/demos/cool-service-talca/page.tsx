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
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  frost: '#F2F6F7',
  white: '#FFFFFF',
  petrol: '#0E4C5C',
  deep: '#0A3440',
  flame: '#F0762B',
  flameBtn: '#A84B0B',
  flameText: '#FFAB66',
  ink: '#14272C',
  muted: '#52707A',
  line: 'rgba(20,39,44,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cool-service-talca',
  title: 'Cool Service Talca — Repuestos de refrigeración en 5 Sur',
  description:
    'Repuestos e insumos de refrigeración comercial e industrial, aire acondicionado, electricidad y ferretero en 5 Sur 1790, Talca. Compresores, gases, herramientas y más. Cotiza por WhatsApp.',
  image: '/demos/cool-service-talca/local.webp',
})

const NAV_LINKS = [
  { label: 'Repuestos', href: '#repuestos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const DEPTOS = [
  'Refrigeración comercial',
  'Refrigeración industrial',
  'Aire acondicionado',
  'Electricidad y ferretero',
]

const ESTANTES = [
  {
    src: `${IMG}/compresor.webp`,
    alt: 'Compresores de refrigeración nuevos en sus cajas, estante del local Cool Service',
    name: 'Compresores',
    dato: 'Comercial e industrial',
  },
  {
    src: `${IMG}/manifold.webp`,
    alt: 'Kit de manifold con mangueras de colores y maletín azul para medición de gases',
    name: 'Herramientas y medición',
    dato: 'Manifolds, vacuómetros y más',
  },
  {
    src: `${IMG}/gases.webp`,
    alt: 'Botellas de gas refrigerante R134a apiladas en las repisas del local',
    name: 'Gases refrigerantes',
    dato: 'Cargas para todo sistema',
  },
  {
    src: `${IMG}/cobre.webp`,
    alt: 'Tubos de cobre para instalaciones de refrigeración ordenados en el local',
    name: 'Cobre e insumos',
    dato: 'Cañería y conexiones',
  },
  {
    src: `${IMG}/repisas.webp`,
    alt: 'Repisas del local con cajas de repuestos, gas MAPP y herramientas ordenadas',
    name: 'Repuestos y repisas',
    dato: 'Motores, ventiladores, filtros',
  },
  {
    src: `${IMG}/stock.webp`,
    alt: 'Maletín rojo con kit de herramientas para carga de gas refrigerante',
    name: 'Kits de trabajo',
    dato: 'Todo en un solo lugar',
  },
]

const MARCAS = ['KHÖNE', 'SARLAN', 'Elitech', 'MAPP GAS', 'Cubigel', 'Kelan', 'Embraco']

const RESENAS = [
  {
    text: 'Muy buenos precios y excelente atención personalizada del dueño. 100% recomendable.',
    name: 'Guillermo Okuinghttons',
  },
  {
    text: 'Gran servicio y precios fantásticos, encuentras todo lo que necesitas.',
    name: 'Luis Sepúlveda',
  },
  {
    text: 'Muy buenos precios y buena atención al cliente.',
    name: 'Camila Sepúlveda',
  },
]

export default function CoolServicePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.frost, color: C.ink }}
    >
      <div style={{ backgroundColor: C.deep }}>
        <BlitzNav
          name={BIZ.name}
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(242,246,247,0.95)',
            ink: C.deep,
            line: C.line,
            btnBg: C.flameBtn,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero: panel + foto del local ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.petrol }}>
        {/* trama técnica: líneas de manifold */}
        <div
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, #FFFFFF 0 1px, transparent 1px 56px), repeating-linear-gradient(0deg, #FFFFFF 0 1px, transparent 1px 56px)',
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-12 md:pb-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-3" style={{ color: C.flameText }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              5 Sur 1790 · Talca
            </p>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.98] text-[clamp(2.5rem,8vw,4.6rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              Repuestos de refrigeración,
              <span style={{ color: C.flame }}> todo en un solo lugar</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Insumos de refrigeración comercial e industrial, aire
              acondicionado, electricidad y ferretero. Atención directa
              del dueño, precio justo y stock real en el local.
            </p>
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.flameBtn, color: '#FFFFFF' }}
              >
                Consultar un repuesto
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-bold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#FFFFFF' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full tap-44"
              style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#FFFFFF' }}
            >
              <Stars value={5} color={C.flame} className="w-4 h-4" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative rounded-3xl overflow-hidden aspect-[3/4] max-h-[560px] w-full border-4" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
              <Image
                src={`${IMG}/local.webp`}
                alt="Frontis del local Cool Service Talca con su letrero de repuestos de refrigeración"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />
              <figcaption
                className="absolute bottom-3 left-3 right-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] px-3.5 py-2 rounded-xl"
                style={{ backgroundColor: 'rgba(10,52,64,0.88)', color: '#FFFFFF' }}
              >
                El local en 5 Sur 1790, Talca
              </figcaption>
            </figure>
          </Reveal>
        </div>
        {/* regla de departamentos */}
        <div className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.18)', backgroundColor: 'rgba(10,52,64,0.6)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-2 text-[11px] md:text-xs uppercase tracking-[0.18em] font-semibold" style={{ color: 'rgba(255,255,255,0.92)' }}>
            {DEPTOS.map((d) => (
              <span key={d} className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.flame }} aria-hidden="true" />
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Estantes: catálogo con fotos reales ── */}
      <section id="repuestos" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-3" style={{ color: C.petrol }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              Fotos reales del local
            </p>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1]`} style={{ color: C.deep }}>
              Lo que hay en las repisas
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Compresores, gases, herramientas, cobre y repuestos eléctricos:
              el surtido que usan los técnicos de la región.
            </p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ESTANTES.map((e, i) => (
            <Reveal key={e.name} delay={i * 60}>
              <article
                className="rounded-2xl border overflow-hidden bg-white h-full"
                style={{ borderColor: C.line }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={e.src}
                    alt={e.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5 flex items-start justify-between gap-3">
                  <div>
                    <h3 className={`${display.className} font-bold uppercase text-lg leading-tight`} style={{ color: C.deep }}>
                      {e.name}
                    </h3>
                    <p className="text-xs md:text-sm mt-1" style={{ color: C.muted }}>
                      {e.dato}
                    </p>
                  </div>
                  <span
                    className="shrink-0 mt-1 text-[10px] font-bold uppercase tracking-[0.1em] px-2.5 py-1.5 rounded-full"
                    style={{ backgroundColor: 'rgba(240,118,43,0.12)', color: '#B0510F' }}
                  >
                    En stock
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Marcas que trabajan ── */}
      <section id="marcas" className="scroll-mt-20 border-y" style={{ backgroundColor: C.white, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-6 font-semibold text-center" style={{ color: C.muted }}>
              Marcas que encontrarás en el local
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {MARCAS.map((m) => (
                <span
                  key={m}
                  className={`${display.className} font-bold uppercase text-xl md:text-2xl tracking-wide`}
                  style={{ color: C.petrol }}
                >
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-3" style={{ color: C.petrol }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              Lo que dicen los clientes
            </p>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1]`} style={{ color: C.deep }}>
              5 estrellas, palabra de técnico
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-full border tap-44"
              style={{ borderColor: C.line, color: C.deep, backgroundColor: C.white }}
            >
              <Stars value={5} color={C.flame} className="w-4 h-4" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 80}>
              <blockquote
                className="rounded-2xl p-6 md:p-7 h-full flex flex-col border-l-4"
                style={{ backgroundColor: C.white, borderLeftColor: C.flame, borderTopColor: C.line, borderRightColor: C.line, borderBottomColor: C.line, borderTopWidth: 1, borderRightWidth: 1, borderBottomWidth: 1, borderStyle: 'solid' }}
              >
                <Stars value={5} color={C.flame} className="w-4 h-4" />
                <p className="text-base md:text-lg leading-relaxed mt-4 mb-5 flex-1" style={{ color: C.ink }}>
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

      {/* ── Horario + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.3em] mb-4 font-semibold flex items-center gap-3" style={{ color: C.flameText }}>
              <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
              Cómo llegar
            </p>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[1] mb-6`} style={{ color: '#FFFFFF' }}>
              5 Sur 1790, Talca
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(255,255,255,0.8)' }}>
              Pasa al local o pregunta primero por WhatsApp: con la marca
              y el modelo del equipo te dicen altiro si hay repuesto.
            </p>
            <div className="rounded-2xl border overflow-hidden mb-8" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
              <div className="px-5 py-3 text-[11px] uppercase tracking-[0.2em] font-bold" style={{ backgroundColor: 'rgba(255,255,255,0.07)', color: C.flameText }}>
                Horario del local
              </div>
              {BIZ.hours.map(([d, h]) => (
                <div
                  key={d}
                  className="flex justify-between px-5 py-3 text-sm border-t"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.9)' }}
                >
                  <span>{d}</span>
                  <span className="font-semibold">{h}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-6 py-3.5 rounded-full tap-44"
                style={{ backgroundColor: C.flameBtn, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-6 py-3.5 rounded-full border tap-44"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#FFFFFF' }}
              >
                @coolservicetalca
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl overflow-hidden aspect-[4/3] border-4" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
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

      <footer style={{ backgroundColor: C.petrol, color: '#FFFFFF' }}>
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
              <p className={`${display.className} font-bold uppercase text-2xl`}>{BIZ.name}</p>
              <p className="text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.rubro} · {BIZ.address}
              </p>
            </div>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
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
