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
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  bosque: '#17352A',
  deep: '#0E241C',
  crema: '#F3EFE3',
  white: '#FFFFFF',
  berry: '#A31236',
  gold: '#C8A24B',
  ink: '#1D2620',
  muted: '#5C6A60',
  line: 'rgba(29,38,32,0.12)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'central-fruticola-lontue',
  title: 'Central Frutícola Lontué — Packing de fruta en Molina, Maule',
  description:
    'Planta de recepción, selección y packing de manzanas y cerezas en Lontué, Molina. 15.000 m² operados por Agrícola San Clemente junto a Montes de Molina. Consulta por WhatsApp.',
  image: '/demos/central-fruticola-lontue/hero.webp',
})

const NAV_LINKS = [
  { label: 'La planta', href: '#planta' },
  { label: 'El proceso', href: '#proceso' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const PASOS = [
  {
    n: '01',
    title: 'Recepción',
    desc: 'Tu fruta entra a la planta de Lontué y queda registrada por lote, huerto y calibre.',
    dot: '#7BA03C',
  },
  {
    n: '02',
    title: 'Selección',
    desc: 'Cada kilo pasa por la línea: se clasifica por tamaño, color y condición antes de empacar.',
    dot: '#C8A24B',
  },
  {
    n: '03',
    title: 'Packing',
    desc: 'Manzanas y cerezas se embalan en envase comercial listo para mercado nacional y exportación.',
    dot: '#E4572E',
  },
  {
    n: '04',
    title: 'Despacho',
    desc: 'La fruta sale consolidada al mundo: la planta trabaja bajo estándar de exportación TMPS.',
    dot: '#A31236',
  },
]

const LINEAS_PROD = [
  {
    qty: '180 t',
    per: 'por día',
    name: 'Manzanas orgánicas',
    desc: 'Línea dedicada al packing de manzana orgánica en temporada.',
  },
  {
    qty: '150 t',
    per: 'por día',
    name: 'Manzanas convencionales',
    desc: 'Capacidad de proceso para la manzana convencional del valle.',
  },
  {
    qty: '65 t',
    per: 'por día',
    name: 'Cerezas',
    desc: 'Línea de cerezas de 8 carriles para la ventana corta de temporada.',
  },
]

const FOTOS = [
  {
    src: `${IMG}/huerto.webp`,
    alt: 'Vista aérea de las hileras de frutales en los huertos de Agrícola San Clemente',
    caption: 'Huertos del grupo',
  },
  {
    src: `${IMG}/floracion.webp`,
    alt: 'Floración de primavera en los frutales que abastecen la planta',
    caption: 'Floración en el valle',
  },
  {
    src: `${IMG}/linea.webp`,
    alt: 'Línea de calibrado y selección dentro de la planta de Lontué',
    caption: 'La línea, por dentro',
  },
  {
    src: `${IMG}/fruta.webp`,
    alt: 'Fruta cosechada en los huertos de Agrícola San Clemente',
    caption: 'Fruta de temporada',
  },
]

const RESENAS = [
  {
    text: 'Muy amables.',
    name: 'Janos Acevedo',
    src: 'Google',
  },
  {
    text: 'Personal muy educado y servicial.',
    name: 'Francis Alberto',
    src: 'Google',
  },
  {
    text: 'Excelente.',
    name: 'Mario Salazar',
    src: 'Google',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.28em] mb-4 flex items-center gap-3 font-semibold"
      style={{ color: light ? C.gold : C.berry }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CentralFruticolaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <div style={{ backgroundColor: C.deep }}>
        <BlitzNav
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(243,239,227,0.95)',
            ink: C.deep,
            line: C.line,
            btnBg: C.berry,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero: planta a sangre ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Interior de la planta Central Frutícola Lontué: trabajadores en la línea de packing de fruta"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(14,36,28,0.55) 0%, rgba(14,36,28,0.3) 38%, rgba(14,36,28,0.94) 100%)',
          }}
        />
        <div className="absolute top-24 md:top-28 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-xs md:text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg tap-44"
              style={{ backgroundColor: 'rgba(243,239,227,0.95)', color: C.deep }}
            >
              <Stars value={4.3} color={C.berry} className="w-3.5 h-3.5" />
              {BIZ.rating} · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16 pt-36">
          <Reveal>
            <Eyebrow light>Lontué · Molina · Región del Maule</Eyebrow>
            <h1
              className={`${display.className} leading-[1.02] text-[clamp(2.4rem,7.5vw,4.8rem)] mb-6 max-w-3xl`}
              style={{ color: C.crema }}
            >
              En Lontué, tu fruta se prepara
              <em className="block" style={{ color: C.gold }}>para el mundo</em>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(243,239,227,0.88)' }}>
              Planta de recepción, selección y packing de manzanas y cerezas,
              operada por Agrícola San Clemente junto a Montes de Molina.
              Consulta por recepción de fruta de temporada.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.berry, color: '#FFFFFF' }}
              >
                Consultar recepción
              </a>
              <a
                href="#planta"
                className="font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(243,239,227,0.55)', color: C.crema }}
              >
                Conocer la planta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cifras ── */}
      <section className="border-b" style={{ backgroundColor: C.bosque, borderColor: 'rgba(243,239,227,0.15)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-12 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {[
            { n: '15.000', unit: 'm²', label: 'de planta en Lontué' },
            { n: '2018', unit: '', label: 'año de inauguración' },
            { n: '8', unit: 'carriles', label: 'línea de cerezas' },
            { n: 'TMPS', unit: '', label: 'certificación de proceso' },
          ].map((c, i) => (
            <Reveal key={c.label} delay={i * 80}>
              <p className={`${display.className} text-3xl md:text-4xl leading-none`} style={{ color: C.crema }}>
                {c.n}
                {c.unit && <span className="text-base md:text-lg ml-1.5" style={{ color: C.gold }}>{c.unit}</span>}
              </p>
              <p className="text-xs md:text-sm mt-2 uppercase tracking-[0.14em]" style={{ color: 'rgba(243,239,227,0.72)' }}>
                {c.label}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El camino de la fruta ── */}
      <section id="proceso" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl mb-12 md:mb-16">
          <Reveal>
            <Eyebrow>De tu huerto al mundo</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.bosque }}>
              El camino de la fruta dentro de la planta
            </h2>
          </Reveal>
        </div>
        <div className="relative">
          <span
            className="hidden md:block absolute left-0 right-0 top-[26px] h-px"
            style={{ backgroundColor: C.line }}
            aria-hidden="true"
          />
          <ol className="grid md:grid-cols-4 gap-10 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 100}>
                <li className="relative">
                  <span
                    className="relative z-10 inline-flex items-center justify-center w-[52px] h-[52px] rounded-full text-sm font-bold border-4"
                    style={{ backgroundColor: C.white, color: C.ink, borderColor: p.dot }}
                    aria-hidden="true"
                  >
                    {p.n}
                  </span>
                  <h3 className={`${display.className} text-xl md:text-2xl mt-5 mb-2`} style={{ color: C.bosque }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Lo que se procesa ── */}
      <section id="planta" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <Eyebrow>Capacidad real</Eyebrow>
              <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.bosque }}>
                Manzanas y cerezas del valle del Maule
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                La planta de Lontué fue inaugurada en 2018 y trabaja
                manzana orgánica, manzana convencional y cereza, con
                líneas dedicadas para cada temporada. Las cifras son las
                publicadas por la propia operadora.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4">
              {LINEAS_PROD.map((l, i) => (
                <Reveal key={l.name} delay={i * 90}>
                  <article
                    className="rounded-2xl border p-6 h-full flex flex-col"
                    style={{ backgroundColor: C.crema, borderColor: C.line }}
                  >
                    <p className={`${display.className} text-4xl md:text-[2.6rem] leading-none`} style={{ color: C.berry }}>
                      {l.qty}
                      <span className="block text-sm mt-1 tracking-[0.08em] uppercase" style={{ color: C.muted }}>
                        {l.per}
                      </span>
                    </p>
                    <h3 className="font-semibold text-sm md:text-base mt-5 mb-2" style={{ color: C.ink }}>
                      {l.name}
                    </h3>
                    <p className="text-xs md:text-sm leading-relaxed" style={{ color: C.muted }}>
                      {l.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>La planta y sus huertos</Eyebrow>
          <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-10 md:mb-14`} style={{ color: C.bosque }}>
            Así se ve el trabajo, adentro y afuera
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {FOTOS.map((f, i) => (
            <Reveal key={f.src} delay={i * 80} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
              <figure className="relative rounded-2xl overflow-hidden h-full min-h-[160px] md:min-h-[200px]">
                <Image
                  src={f.src}
                  alt={f.alt}
                  fill
                  sizes={i === 0 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 50vw'}
                  className="object-cover"
                />
                <figcaption
                  className="absolute bottom-2.5 left-2.5 text-[10px] md:text-xs font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: 'rgba(14,36,28,0.82)', color: C.crema }}
                >
                  {f.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Quiénes están detrás ── */}
      <section style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.15fr_1fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <Eyebrow light>Respaldo de industria</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.crema }}>
              Detrás de la planta, dos nombres del Maule
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-5 max-w-lg" style={{ color: 'rgba(243,239,227,0.85)' }}>
              La planta de Lontué opera desde 2018 como un proyecto de
              Agrícola San Clemente junto a Montes de Molina: productores
              de la zona que sumaron tecnología de packing para llevar su
              fruta — y la de los huertos de la comuna — a mercados de
              exportación.
            </p>
            <ul className="space-y-3">
              {[
                'Estándar de proceso certificado TMPS',
                'Recepción de fruta de huertos de la comuna de Molina',
                'Atención directa por WhatsApp durante la temporada',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm md:text-base" style={{ color: 'rgba(243,239,227,0.9)' }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.gold }} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl p-8 md:p-10" style={{ backgroundColor: C.crema }}>
              <Image
                src={`${IMG}/logo-sclem.webp`}
                alt="Logotipo de Agrícola San Clemente, operadora de la planta"
                width={500}
                height={180}
                className="w-full max-w-[280px] h-auto mx-auto"
              />
              <p className="text-center text-xs md:text-sm mt-6 leading-relaxed" style={{ color: C.muted }}>
                Planta operada por Agrícola San Clemente
                <br />
                junto a Montes de Molina
              </p>
              <div className="mt-6 rounded-2xl overflow-hidden aspect-[16/9] relative">
                <Image
                  src={`${IMG}/planta.webp`}
                  alt="Exterior de la planta de empaque en Lontué rodeada de áreas verdes"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-12">
          <Reveal>
            <Eyebrow>Lo que dicen en Google</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.bosque }}>
              Reseñas de la ficha pública
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-sm font-semibold px-5 py-3 rounded-full border tap-44"
              style={{ borderColor: C.line, color: C.bosque, backgroundColor: C.white }}
            >
              <Stars value={4.3} color={C.berry} className="w-4 h-4" />
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
                <Stars value={5} color={C.berry} className="w-4 h-4" />
                <p className={`${display.className} text-xl md:text-2xl leading-snug mt-4 mb-5 flex-1`} style={{ color: C.ink }}>
                  “{r.text}”
                </p>
                <footer className="text-xs md:text-sm font-semibold" style={{ color: C.muted }}>
                  {r.name} · reseña en {r.src}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Ubicación + CTA ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.bosque }}>
              En Lontué, al sur de Molina
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.region}. La planta recibe fruta durante
              la temporada de cosecha; coordina la recepción por WhatsApp
              antes de llegar con el camión.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="font-semibold text-sm px-6 py-3.5 rounded-full border tap-44"
                style={{ borderColor: C.line, color: C.bosque }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm px-6 py-3.5 rounded-full tap-44"
                style={{ backgroundColor: C.berry, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
            </div>
            <dl className="text-sm space-y-2" style={{ color: C.muted }}>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.ink }}>Dirección:</dt>
                <dd>{BIZ.address}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold" style={{ color: C.ink }}>Comuna:</dt>
                <dd>Molina, {BIZ.region}</dd>
              </div>
            </dl>
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

      {/* ── CTA band ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-[1.05]`} style={{ color: C.crema }}>
              ¿Fruta para procesar
              <em style={{ color: C.gold }}> esta temporada?</em>
            </h2>
            <p className="mt-4 text-base md:text-lg" style={{ color: 'rgba(243,239,227,0.85)' }}>
              Coordina la recepción de tu cosecha directo por WhatsApp.
            </p>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold text-sm md:text-base px-8 py-3.5 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.crema, color: C.deep }}
              >
                Escribir a la planta
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer style={{ backgroundColor: C.bosque, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-3 flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div>
            <p className={`${display.className} text-2xl`}>{BIZ.name}</p>
            <p className="text-sm mt-1" style={{ color: 'rgba(243,239,227,0.72)' }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city}
            </p>
          </div>
          <nav className="flex gap-5 text-sm" aria-label="Pie">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(243,239,227,0.85)' }}>
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
