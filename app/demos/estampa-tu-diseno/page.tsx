import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})

/**
 * Identidad: la pared de vinilos del taller. Fondo blanco de
 * polera nueva, tipografía de sticker y etiquetas con el color
 * del rollo — cada sección toma un tono del muro de vinilos.
 */
const C = {
  ink: '#161616',
  paper: '#FBFAF7',
  white: '#FFFFFF',
  red: '#E23E28',
  blue: '#2457E0',
  yellow: '#F2B90D',
  green: '#149E5C',
  magenta: '#D13A8C',
  muted: '#5C5C58',
  line: 'rgba(22,22,22,0.14)',
}

const SWATCHES = [C.red, C.yellow, C.blue, C.green, C.magenta, C.ink]

export const metadata: Metadata = demoMetadata({
  slug: 'estampa-tu-diseno',
  title: 'Estampa Tu Diseño — Poleras personalizadas en Talca',
  description:
    'Poleras, chompas y polerones estampados en 8 Oriente 1407, Talca. Mandas tu diseño por WhatsApp y retiras en el local.',
  image: `${IMG}/taller.webp`,
})

const NAV_LINKS = [
  { label: 'La tienda', href: '#tienda' },
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Dónde estamos', href: '#contacto' },
]

const PRODUCTOS = [
  { src: `${IMG}/polera-coach.webp`, name: 'Poleras estampadas', tag: 'con tu diseño', color: C.red, tagBg: '#C22F1C' },
  { src: `${IMG}/poleras-disenos.webp`, name: 'Diseños de temporada', tag: 'frases y personajes', color: C.yellow, tagBg: C.yellow },
  { src: `${IMG}/polera-amarilla.webp`, name: 'Poleras con mensaje', tag: 'regalos con humor', color: C.green, tagBg: '#0F7A45' },
  { src: `${IMG}/poleron.webp`, name: 'Polerones y capuchas', tag: 'estampado completo', color: C.blue, tagBg: C.blue },
]

const PASOS = [
  {
    n: '01',
    t: 'Escribe por WhatsApp',
    d: 'Cuenta qué quieres estampar: una polera, una chompa, un regalo. Te contestan todas las preguntas.',
    color: C.blue,
    num: '#7FA4FF',
  },
  {
    n: '02',
    t: 'Manda tu diseño o tu idea',
    d: 'Una imagen, un logo o solo la idea: en el local la bajan a la prenda que elijas.',
    color: C.magenta,
    num: '#E565AF',
  },
  {
    n: '03',
    t: 'Retira en 8 Oriente',
    d: 'La polera sale estampada rápida y de calidad, lista para usar o regalar.',
    color: C.green,
    num: '#3CD88A',
  },
]

const RESENAS = [
  {
    texto:
      'Muy buen servicio, polera estampada rápida y de calidad. No he tenido problemas y me contestaron todas las preguntas por WhatsApp de lo más bien.',
    autor: 'Elia T.',
    nota: 'hace un año',
  },
  {
    texto:
      'Son gente muy amable que siempre te recibe bien; me encanta que la base sea el respeto.',
    autor: 'Francisco González',
    nota: 'hace un año',
  },
  {
    texto: 'Excelente servicio.',
    autor: 'Medio corte',
    nota: 'hace 6 meses',
  },
]

const HORAS = [
  { days: 'Lunes a viernes', time: '10:30 – 18:00' },
  { days: 'Sábado', time: '10:30 – 14:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

function SwatchRibbon() {
  return (
    <div className="flex" aria-hidden="true">
      {SWATCHES.map((s, i) => (
        <div key={i} className="h-2 flex-1" style={{ backgroundColor: s }} />
      ))}
    </div>
  )
}

export default function EstampaTuDisenoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <SwatchRibbon />
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(251,250,247,0.94)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.yellow }}
      />

      {/* ── Hero: la tienda y su pared de vinilos ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-10 md:pb-14">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.26em] font-bold px-3 py-1.5 rounded-full" style={{ backgroundColor: C.yellow, color: C.ink }}>
                Poleras personalizadas · Talca
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full border tap-44"
                style={{ borderColor: C.line, color: C.ink }}
              >
                <Stars value={BIZ.rating} color={C.yellow} className="w-3.5 h-3.5" />
                {BIZ.rating} · {BIZ.reviews} reseñas
              </a>
            </div>
            <h1
              className={`${display.className} uppercase leading-[0.95] text-[clamp(2.6rem,10vw,6rem)] mb-6`}
              style={{ color: C.ink }}
            >
              Traes la idea,
              <br />
              <span style={{ color: C.red }}>sale tu polera</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: C.muted }}>
              Estampado de poleras, chompas y polerones en pleno
              centro de Talca: 8 Oriente 1407. Cotiza por WhatsApp
              y retiras en el local.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-xs md:text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.ink, color: C.white }}
              >
                Cotizar mi polera
              </a>
              <a
                href="#trabajos"
                className={`${display.className} uppercase text-xs md:text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Ver trabajos
              </a>
            </div>
          </Reveal>
        </div>
        {/* pared de vinilos a sangre */}
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 md:pb-16">
          <Reveal delay={120}>
            <figure className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={`${IMG}/taller.webp`}
                  alt={`Interior de ${BIZ.name}: plotter de corte y pared de vinilos de colores`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 1152px, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="absolute bottom-0 inset-x-0 px-4 md:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold" style={{ backgroundColor: 'rgba(22,22,22,0.9)', color: C.white }}>
                <span>El taller por dentro</span>
                <span style={{ color: C.yellow }}>rollos de vinilo y plotter</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La tienda: fachada + datos ── */}
      <section id="tienda" className="scroll-mt-20 py-14 md:py-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-14 items-center">
          <Reveal>
            <figure className="rounded-2xl overflow-hidden border shadow-md" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt={`Fachada de ${BIZ.name} en 8 Oriente 1407, Talca`}
                width={1100}
                height={825}
                className="w-full h-auto object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.blue }}>
              La tienda
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mb-5`} style={{ color: C.ink }}>
              Un local de
              <br />
              <span style={{ color: C.blue }}>8 Oriente</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              La tienda está en {BIZ.address}, Talca — a pasos del
              centro. Atención directa del dueño: llegas, eliges la
              prenda y el diseño, y te la estampan ahí mismo.
            </p>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: h.time === 'Cerrado' ? C.red : C.green }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase inline-block text-xs md:text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tap-44`}
              style={{ backgroundColor: C.blue, color: C.white }}
            >
              Consultar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Trabajos: tarjetas con etiqueta de vinilo ── */}
      <section id="trabajos" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: '#B22B18' }}>
                  Trabajos reales
                </p>
                <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
                  Recién salidos
                  <br />
                  <span style={{ color: C.magenta }}>del plotter</span>
                </h2>
              </div>
              <p className="text-sm leading-relaxed max-w-xs" style={{ color: C.muted }}>
                Fotos reales de su ficha de Google: lo que estampan
                en el local, sin catálogo genérico.
              </p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PRODUCTOS.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <article className="rounded-2xl overflow-hidden border bg-white shadow-sm h-full flex flex-col" style={{ borderColor: C.line }}>
                  <div className="relative aspect-square">
                    <Image
                      src={p.src}
                      alt={`${p.name} — ${BIZ.name}, Talca`}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    {/* pestaña de vinilo */}
                    <span
                      className="absolute top-3 left-0 text-[10px] uppercase tracking-[0.18em] font-bold px-3 py-1.5 rounded-r-full shadow"
                      style={{ backgroundColor: p.tagBg, color: p.tagBg === C.yellow ? C.ink : C.white }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4 flex items-center justify-between gap-3">
                    <h3 className={`${display.className} uppercase text-sm md:text-base leading-tight`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: p.color }} aria-hidden="true" />
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo funciona: tres pasos con vinilo ── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: C.yellow }}>
              Cómo funciona
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mb-12`} style={{ color: C.white }}>
              De WhatsApp
              <br />
              a la espalda
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="rounded-2xl p-6 md:p-7 h-full border-t-8" style={{ backgroundColor: '#222222', borderColor: p.color }}>
                  <span className={`${display.className} text-3xl md:text-4xl`} style={{ color: p.num }}>
                    {p.n}
                  </span>
                  <h3 className={`${display.className} uppercase text-lg md:text-xl mt-4 mb-3 leading-tight`} style={{ color: C.white }}>
                    {p.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} uppercase inline-block mt-10 text-xs md:text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 active:scale-95 tap-44`}
              style={{ backgroundColor: C.yellow, color: C.ink }}
            >
              Empezar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section id="resenas" className="scroll-mt-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: '#0F7A45' }}>
                  Lo que dicen en Google
                </p>
                <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98]`} style={{ color: C.ink }}>
                  {BIZ.rating} estrellas
                  <br />
                  <span style={{ color: C.green }}>y clientes que vuelven</span>
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.green} className="w-5 h-5" />
                <span className="text-sm font-bold" style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google Maps
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90}>
                <figure className="rounded-2xl p-6 bg-white border h-full flex flex-col" style={{ borderColor: C.line }}>
                  <Stars value={5} color={C.yellow} className="w-4 h-4 mb-4" />
                  <blockquote className="text-sm md:text-base leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold" style={{ color: C.blue }}>
                      {r.autor}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.16em]" style={{ color: C.muted }}>
                      {r.nota}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-8 text-sm font-bold underline underline-offset-4 decoration-2 transition-colors hover:opacity-70 tap-44"
              style={{ color: C.ink, textDecorationColor: C.yellow }}
            >
              Ver todas las reseñas en Google Maps →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.white }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.26em] font-bold mb-4" style={{ color: '#A82670' }}>
              Dónde estamos
            </p>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.ink }}>
              {BIZ.address},
              <br />
              <span style={{ color: C.magenta }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <span className="w-2.5 h-2.5 rounded-sm shrink-0" style={{ backgroundColor: h.time === 'Cerrado' ? C.red : C.green }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-xs md:text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95 tap-44`}
                style={{ backgroundColor: C.ink, color: C.yellow }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={BIZ.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase text-xs md:text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                {BIZ.igUser}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden border shadow-lg h-full min-h-[320px]" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <SwatchRibbon />
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-lg leading-none`} style={{ color: C.white }}>
              {BIZ.name}
            </p>
            <address className="not-italic text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.72)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
            Catálogo de muestra con fotos reales de la tienda;
            contacto, horarios y reseñas son públicos.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
