import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  crema: '#F7F0E1',
  card: '#FFFBF2',
  choco: '#3B2A1E',
  choco2: '#2C1F16',
  naranja: '#E8641C',
  naranjaDeep: '#C24E0F',
  muted: '#6E5F4F',
  line: 'rgba(59,42,30,0.16)',
  lineLight: 'rgba(247,240,225,0.18)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8641C]'
const FOCUS_LIGHT = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F7F0E1]'

export const metadata: Metadata = demoMetadata({
  slug: 'central-insumos',
  title: 'Central Insumos — Insumos de repostería en Molina',
  description:
    'Almacén de insumos de panadería, pastelería y decoración en Calle Aromo 1466, Molina: chocolate, coberturas, sprinkles, moldes y equipos. Consulta por WhatsApp.',
  image: '/demos/central-insumos/hero.webp',
})

const NAV_LINKS = [
  { label: 'La góndola', href: '#gondola' },
  { label: 'Emprendedores', href: '#emprendedores' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const GONDOLA = [
  {
    src: `${IMG}/sprinkles.webp`,
    alt: 'Estante de Central Insumos con envases de sprinkles y grageas de colores',
    titulo: 'Sprinkles y decoración',
    desc: 'Grageas, sprinkles, perlas y todo lo que se le pone encima a la torta o al queque.',
  },
  {
    src: `${IMG}/chocolates.webp`,
    alt: 'Mostrador con cartel de chocolates y coberturas sobre vitrina de productos',
    titulo: 'Chocolates y coberturas',
    desc: 'Coberturas, chips y chocolate para derretir, bañar y rellenar: la sección que más se repone.',
  },
  {
    src: `${IMG}/termos.webp`,
    alt: 'Repisa con termos y tazones metálicos a la venta en Central Insumos',
    titulo: 'Menaje y cacharros',
    desc: 'Termos, tazones, moldes y utensilios: los cacharros que la cocina del emprendimiento gasta.',
  },
  {
    src: `${IMG}/equipos.webp`,
    alt: 'Hornos convectores y visicooler exhibidos en el local de Central Insumos',
    titulo: 'Equipos para el taller',
    desc: 'Hornos convectores, visicoolers y balanzas: cuando el emprendimiento ya necesita maquinaria.',
  },
]

const RESENAS = [
  {
    text: 'Super buena atención y muy buenos precios.',
    author: 'Javiera Pinilla',
    stars: 5,
  },
  {
    text: 'Tienen variedad y precios buenos.',
    author: 'Felipe Leal',
    stars: 4,
  },
  {
    text: 'Excelente lugar.',
    author: 'Marcelino',
    stars: 5,
  },
]

const HORARIO = [
  { days: 'Lunes a viernes', time: '9:00–14:00 · 15:30–19:15' },
  { days: 'Sábado', time: '9:00–19:15' },
  { days: 'Domingo', time: '10:00–13:30' },
]

const FAMILIAS = [
  'Harinas y premezclas',
  'Chocolates y coberturas',
  'Levaduras y polvos',
  'Sprinkles y decoración',
  'Moldes y menaje',
  'Hornos y visicoolers',
  'Desechables',
]

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
      style={{ color: light ? 'rgba(247,240,225,0.7)' : C.muted }}
    >
      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CentralInsumosPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.crema, color: C.choco }}>
      <style>{`
        .ci-band > div { position: static; max-width: none; border-radius: 0; box-shadow: none; background: transparent; justify-content: center; padding: 14px 20px; }
      `}</style>
      <BlitzNav
        name={
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="h-8 w-8 rounded-full object-cover border border-black/10"
              aria-hidden="true"
            />
            {BIZ.short}
          </>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'light',
          bar: 'rgba(247,240,225,0.94)',
          ink: C.choco,
          line: C.line,
          btnBg: C.naranja,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: ticket de turno ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <Reveal>
              {/* ticket */}
              <div
                className="inline-flex items-center gap-3 rounded-full border-2 border-dashed px-4 py-2 mb-6"
                style={{ borderColor: C.naranja, color: C.choco }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                <img src={`${IMG}/logo.webp`} alt="" className="w-7 h-7 rounded-full object-cover" aria-hidden="true" />
                <span className={`${mono.className} text-[10px] md:text-xs uppercase tracking-[0.2em]`}>
                  {BIZ.rubro}
                </span>
              </div>
              <h1
                className={`${display.className} font-bold leading-[0.95] text-[clamp(2.6rem,9vw,5.8rem)]`}
                style={{ color: C.choco }}
              >
                Todo pa’ hornear,
                <br />
                <span style={{ color: C.naranja }}>en Molina.</span>
              </h1>
              <p className="mt-6 max-w-lg text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Central Insumos es el almacén de la repostería del pueblo:
                chocolate, coberturas, sprinkles, harina por saco y hasta el
                horno. En {BIZ.address}, a pasos del centro.
              </p>
              <div className="flex flex-wrap gap-3 mt-9">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.naranja, color: '#FFFFFF' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href="#gondola"
                  className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 tap-44`}
                  style={{ borderColor: 'rgba(59,42,30,0.3)', color: C.choco }}
                >
                  Ver la góndola
                </a>
              </div>
              <div
                className={`${mono.className} mt-8 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.14em]`}
                style={{ color: C.muted }}
              >
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${FOCUS} flex items-center gap-2 font-bold transition-colors hover:opacity-70 tap-44`}
                  style={{ color: C.choco }}
                >
                  <Stars value={4.9} color={C.naranja} className="w-[13px] h-[13px]" />
                  {BIZ.rating} en Google · {BIZ.reviews} reseñas
                </a>
                <a href={`tel:${BIZ.phoneTel}`} className={`${FOCUS} font-bold transition-colors hover:opacity-70 tap-44`} style={{ color: C.choco }}>
                  {BIZ.phoneDisplay}
                </a>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="relative">
                <div
                  className="absolute -inset-3 rounded-[28px] border-2 border-dashed"
                  style={{ borderColor: 'rgba(232,100,28,0.45)' }}
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Fachada de Central Insumos en Calle Aromo, Molina: letrero naranjo con logo circular y puerta verde"
                    fill
                    sizes="(min-width: 1024px) 44vw, 100vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <p
                  className={`${mono.className} absolute -bottom-3 left-4 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.16em]`}
                  style={{ backgroundColor: C.choco, color: C.crema }}
                >
                  {BIZ.address} · {BIZ.city}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* cinta de familias */}
        <div style={{ backgroundColor: C.naranja }}>
          <ul
            className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center items-center gap-x-5 gap-y-1.5 text-[12px] md:text-sm font-bold`}
            style={{ color: '#FFFFFF' }}
          >
            {FAMILIAS.map((f, i) => (
              <li key={f} className="flex items-center gap-5">
                {i > 0 && <span aria-hidden="true" className="opacity-60">·</span>}
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── La góndola: estantes apilados ── */}
      <section id="gondola" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Tag>Pasillo por pasillo</Tag>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.choco }}>
              Lo que encuentras
              <br />
              <span style={{ color: C.naranja }}>en el local</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Cada repisa del almacén con sus fotos reales: de los sprinkles
              al horno convector.
            </p>
          </div>
        </Reveal>
        <div className="space-y-6 md:space-y-8">
          {GONDOLA.map((g, i) => (
            <Reveal key={g.titulo} delay={i * 60}>
              <article
                className={`group grid md:grid-cols-[380px_1fr] gap-6 md:gap-10 items-center rounded-3xl border p-4 md:p-6 ${i % 2 === 1 ? 'md:[&>*:nth-child(1)]:order-2' : ''}`}
                style={{ borderColor: C.line, backgroundColor: C.card }}
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={g.src}
                    alt={g.alt}
                    fill
                    sizes="(min-width: 768px) 380px, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="px-2 md:px-4">
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.naranja }}>
                    repisa {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} font-bold text-2xl md:text-4xl mb-3`} style={{ color: C.choco }}>
                    {g.titulo}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {g.desc}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Emprendedores ── */}
      <section id="emprendedores" className="scroll-mt-20" style={{ backgroundColor: C.choco2, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl aspect-[4/3]">
              <Image
                src={`${IMG}/emprendedores.webp`}
                alt="Cartel Central Insumos apoya a los emprendedores sobre sacos de harina apilados en el local"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(247,240,225,0.6)' }}>
              Sacos de harina en el local · Calle Aromo
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Tag light>Central Insumos apoya a los emprendedores</Tag>
            <h2 className={`${display.className} font-bold leading-[0.95] text-4xl md:text-6xl mb-6`}>
              El proveedor de las
              <br />
              <span style={{ color: C.naranja }}>cocinas del Maule</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4 max-w-md" style={{ color: 'rgba(247,240,225,0.8)' }}>
              Acá compran las pasteleras de Molina y los alrededores: harina
              por saco, levadura, cobertura por kilo y lo que haga falta para
              que el emprendimiento no se quede sin insumos.
            </p>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,240,225,0.8)' }}>
              Y cuando la cocina crece, también está el equipamiento: hornos
              convectores, visicoolers y balanzas, listos en el local.
            </p>
            <ul className="space-y-3 mb-9">
              {[
                'Insumos por unidad y por volumen',
                'Equipos exhibidos y funcionando en el local',
                'Despacho propio: camión repartidor de la casa',
              ].map((li) => (
                <li key={li} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(247,240,225,0.85)' }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
                  {li}
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS_LIGHT} ${display.className} inline-block font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.naranja, color: '#FFFFFF' }}
            >
              Cotizar insumos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Equipos + despacho ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <figure>
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
                <Image
                  src={`${IMG}/equipos.webp`}
                  alt="Hornos convectores plateados y visicooler negra exhibidos en Central Insumos"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Hornos, visicoolers y balanzas — se ven y se prueban en el local
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={100}>
            <figure>
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
                <Image
                  src={`${IMG}/despacho.webp`}
                  alt="Camión repartidor blanco de Central Insumos estacionado fuera del local"
                  fill
                  sizes="(min-width: 768px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                Reparto propio — consulta entregas por WhatsApp
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Tag>Lo que dicen en Google</Tag>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold leading-[0.95] text-4xl md:text-6xl`} style={{ color: C.choco }}>
                {BIZ.rating}★ de {BIZ.reviews} vecinos
                <br />
                <span style={{ color: C.naranja }}>en su ficha</span>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${mono.className} text-xs uppercase tracking-[0.18em] font-bold underline underline-offset-8 decoration-2 tap-44`}
                style={{ color: C.choco, textDecorationColor: C.naranja }}
              >
                Ver ficha en Google Maps →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 70}>
                <figure
                  className="relative h-full rounded-3xl border-2 border-dashed p-6 md:p-8 flex flex-col justify-between"
                  style={{ borderColor: 'rgba(232,100,28,0.4)', backgroundColor: C.crema }}
                >
                  <div>
                    <Stars value={r.stars} color={C.naranja} className="w-3.5 h-3.5" />
                    <blockquote className="mt-4 text-base md:text-lg leading-relaxed font-medium" style={{ color: C.choco }}>
                      “{r.text}”
                    </blockquote>
                  </div>
                  <figcaption className={`${mono.className} mt-5 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.muted }}>
                    {r.author} · Reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Tag>Contacto</Tag>
            <h2 className={`${display.className} font-bold leading-[0.95] text-4xl md:text-6xl mb-6`} style={{ color: C.choco }}>
              Pasa a la Aromo
              <br />
              <span style={{ color: C.naranja }}>o escribe al tiro</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORARIO.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.naranja }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.choco }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.naranja, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} ${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-all duration-200 hover:bg-black/5 tap-44`}
                style={{ borderColor: 'rgba(59,42,30,0.3)', color: C.choco }}
              >
                Cómo llegar →
              </a>
            </div>
            <p className={`${mono.className} text-xs mt-6 uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
              {BIZ.phoneDisplay}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="rounded-3xl border-2 overflow-hidden min-h-[320px] h-full"
              style={{ borderColor: C.line, backgroundColor: C.card }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.naranja }}>
        <div
          aria-hidden="true"
          className={`${display.className} absolute inset-x-0 -top-4 md:-top-8 text-center select-none pointer-events-none font-bold leading-none`}
          style={{ fontSize: 'clamp(4rem, 14vw, 11rem)', color: 'transparent', WebkitTextStroke: '1.5px rgba(255,255,255,0.3)' }}
        >
          Horno listo
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-bold text-[clamp(2.2rem,7vw,4.5rem)] leading-[0.95] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              ¿Te falta algo
              <br />
              <span className="inline-block mt-2 px-4 py-1 rounded-2xl" style={{ backgroundColor: C.choco, color: C.crema }}>
                pa’ la torta?
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed font-medium" style={{ color: '#FFFFFF' }}>
              Escríbenos por WhatsApp: te confirmamos stock y precio al momento.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS_LIGHT} ${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.crema, color: C.choco }}
            >
              Hablar con Central Insumos
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.choco2, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold text-xl md:text-2xl mb-2 flex items-center gap-3`}>
              {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
              <img src={`${IMG}/logo.webp`} alt="" className="w-8 h-8 rounded-full object-cover" aria-hidden="true" />
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,240,225,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(247,240,225,0.72)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,240,225,0.14)' }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.14em] leading-relaxed`} style={{ color: 'rgba(247,240,225,0.55)' }}>
            Sitio de ejemplo preparado por Sitiazo para {BIZ.name} — nombre, dirección, horario,
            reseñas y fotos son datos públicos reales.
          </p>
        </div>
      </footer>

      <div className="ci-band pb-20" style={{ backgroundColor: C.choco2 }}>
        <DemoBand name={BIZ.name} />
      </div>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
