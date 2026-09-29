import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

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
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «km 308, Ruta 5 Sur» — señalética de carretera:
 * tipografía condensada tipo señal, línea central discontinua, pastilla
 * de kilómetro y el rojo de los quitasoles de la terraza. Barlow
 * Condensed hace de letra de señalética; Barlow lleva el texto.
 */
const C = {
  paper: '#F8F6F0',
  asphalt: '#22252A',
  asphalt2: '#17191D',
  red: '#B4211B',
  redDeep: '#7E140F',
  yellow: '#F0B429',
  ink: '#22252A',
  muted: '#5C6068',
  line: 'rgba(34,37,42,0.18)',
}

/** Línea central de carretera. */
function Centerline({ color = C.yellow, className = '' }: { color?: string; className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`h-[6px] w-full ${className}`}
      style={{
        backgroundImage: `repeating-linear-gradient(90deg, ${color} 0 34px, transparent 34px 58px)`,
      }}
    />
  )
}

/** Pastilla de kilómetro. */
function Km({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className="inline-block font-bold uppercase tracking-[0.14em] text-[11px] md:text-xs px-3 py-1.5"
      style={{
        backgroundColor: light ? '#F8F6F0' : C.asphalt,
        color: light ? C.asphalt : '#F8F6F0',
        borderRadius: '4px',
      }}
    >
      {children}
    </span>
  )
}

function Letrero({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] md:text-xs uppercase tracking-[0.26em] font-bold mb-4 flex items-center gap-3"
      style={{ color: light ? C.yellow : C.red }}
    >
      <span
        className="inline-block w-10 h-[3px] shrink-0"
        style={{ backgroundImage: `repeating-linear-gradient(90deg, currentColor 0 8px, transparent 8px 12px)` }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'La parada', href: '#la-parada' },
  { label: 'La cocina', href: '#la-cocina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const SENAL = [
  { k: 'km 308', v: 'Ruta 5 Sur' },
  { k: 'mar–lun', v: '10:00–18:00' },
  { k: 'dom', v: 'cerrado' },
  { k: '4,2 ★', v: '1.279 reseñas' },
]

const PLATOS = [
  {
    src: `${IMG}/cazuela.webp`,
    tag: 'La que piden todos',
    name: 'Cazuela de la casa',
    desc: 'La que celebran las reseñas: contundente, al punto, de olla.',
  },
  {
    src: `${IMG}/plateada.webp`,
    tag: 'Favorita del camino',
    name: 'Plateada al jugo',
    desc: 'Con verduras y su jugo: la otra estrella según quienes paran.',
  },
  {
    src: `${IMG}/pollo.webp`,
    tag: 'Porción generosa',
    name: 'Pollo con papas',
    desc: 'Plato completo, servido rápido para seguir viaje.',
  },
]

const TESTIMONIALS = [
  {
    text: 'Es una picada de carretera: se espera espacio para estacionar, buenos platos y abundante. Mis 5 estrellas son por la plateada y la cazuela. Ojo que si llegan tarde, las opciones se van agotando.',
    author: 'Andrés Carmona Silva',
    stars: 5,
  },
  {
    text: 'Buena comida y porciones generosas. Pedí una plateada con papas fritas: la plateada estaba muy sabrosa y bien preparada. Un punto muy positivo es que nos permitieron pagar por separado.',
    author: 'Ignacio Morales Poblete',
    stars: 4,
  },
]

export const metadata: Metadata = demoMetadata({
  slug: 'hosteria-alcazar',
  title: 'Hostería Alcázar — La parada de la Ruta 5, km 308 Longaví',
  description:
    'Hostería y restaurante en Ruta 5 km 308, Longaví: cazuela, plateada y porciones generosas, con terraza de quitasoles y fuente. Mar a lun 10:00–18:00.',
  image: `${IMG}/hero.webp`,
})

export default function HosteriaAlcazarPage() {
  return (
    <div
      className={`${body.className} alc min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .alc a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(248,246,240,0.95)',
          ink: C.asphalt,
          line: C.line,
          btnBg: C.red,
          btnInk: '#F8F6F0',
        }}
      />

      {/* ── Hero: la fachada roja de la parada ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.asphalt2 }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada roja de Hostería Alcázar con quitasoles y jardín de flores, a un costado de la Ruta 5"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,22,26,0.5) 0%, rgba(20,22,26,0.12) 40%, rgba(20,22,26,0.82) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <Reveal>
              <div className="max-w-2xl">
                <div className="flex flex-wrap gap-2 mb-5">
                  <Km>km 308 · Ruta 5 Sur</Km>
                  <Km>Longaví · Maule</Km>
                </div>
                <h1
                  className={`${display.className} uppercase font-extrabold leading-[0.95] tracking-[0.01em] text-[clamp(3rem,12vw,7rem)] mb-5`}
                  style={{ color: '#F8F6F0' }}
                >
                  La parada
                  <br />
                  <span style={{ color: C.yellow }}>de la ruta</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: 'rgba(248,246,240,0.85)' }}>
                  Cazuela, plateada y porciones que no dejan hambre, en la
                  terraza de los quitasoles rojos. A un costado de la
                  Panamericana, en Longaví.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.red, color: '#F8F6F0', borderRadius: '4px' }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                    style={{ borderColor: 'rgba(248,246,240,0.6)', color: '#F8F6F0', borderRadius: '4px' }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex flex-col items-center gap-1.5 px-5 py-4 tap-44"
                style={{ backgroundColor: 'rgba(23,25,29,0.72)', borderRadius: '8px', border: `1px solid ${C.line}` }}
              >
                <span className={`${display.className} text-3xl font-extrabold`} style={{ color: C.yellow }}>
                  {BIZ.rating}★
                </span>
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: 'rgba(248,246,240,0.75)' }}>
                  {BIZ.reviews.toLocaleString('es-CL')} reseñas
                </span>
              </a>
            </Reveal>
          </div>
        </div>
        <Centerline />
      </section>

      {/* ── Señalética de servicio ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
        <Reveal>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {SENAL.map((s) => (
              <li
                key={s.k}
                className="px-4 py-3.5 text-center"
                style={{ backgroundColor: C.asphalt, color: '#F8F6F0', borderRadius: '6px' }}
              >
                <p className={`${display.className} uppercase font-extrabold text-xl md:text-2xl leading-none mb-1`} style={{ color: C.yellow }}>
                  {s.k}
                </p>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.16em] font-semibold" style={{ color: 'rgba(248,246,240,0.75)' }}>
                  {s.v}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── La parada: terraza, fuente y salón ── */}
      <section id="la-parada" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Letrero>La parada</Letrero>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.98]`} style={{ color: C.asphalt }}>
              Quitasoles rojos,
              <br />
              <span style={{ color: C.red }}>fuente y jardín</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              El clásico de los buses y las familias que bajan por la 5
              Sur: terraza con fuente, salón amplio y estacionamiento.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            {
              src: `${IMG}/fuente.webp`,
              alt: 'Fuente circular del jardín de Hostería Alcázar con el letrero de la casa y buses de fondo',
              cap: 'La fuente y el letrero, a un costado de la ruta',
            },
            {
              src: `${IMG}/salon.webp`,
              alt: 'Salón interior de la hostería lleno de comensales al almuerzo',
              cap: 'El salón a la hora de almuerzo',
            },
            {
              src: `${IMG}/ruta5.webp`,
              alt: 'Letrero rojo de Hostería Alcázar visto desde la Ruta 5',
              cap: 'El letrero que se ve desde la Panamericana',
            },
          ].map((f, i) => (
            <Reveal key={f.src} delay={i * 110}>
              <figure className="group">
                <div className="relative overflow-hidden aspect-[4/3] border" style={{ borderColor: C.line, borderRadius: '6px' }}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="text-[12px] md:text-[13px] font-semibold mt-2.5 flex items-center gap-2" style={{ color: C.muted }}>
                  <span className="inline-block w-4 h-[3px]" style={{ backgroundColor: C.red }} aria-hidden="true" />
                  {f.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Centerline color={C.red} className="opacity-70" />

      {/* ── La cocina ── */}
      <section id="la-cocina" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Letrero>La cocina</Letrero>
          <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.98] mb-4`} style={{ color: C.asphalt }}>
            Comida de olla,
            <br />
            <span style={{ color: C.red }}>porción de camino</span>
          </h2>
          <p className="text-sm md:text-base max-w-xl mb-10 md:mb-12 leading-relaxed" style={{ color: C.muted }}>
            Fotos reales del local; los nombres son de muestra. La carta
            cambia con el día: si llegas tarde, los platos se agotan —
            palabra de las reseñas.
          </p>
        </Reveal>
        <ul className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
          {PLATOS.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 100}>
                <article className="h-full border" style={{ backgroundColor: '#FFFFFF', borderColor: C.line, borderRadius: '6px' }}>
                  <div className="relative overflow-hidden aspect-[4/3]" style={{ borderRadius: '6px 6px 0 0' }}>
                    <Image
                      src={p.src}
                      alt={`${p.name} servido en Hostería Alcázar`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                    <span
                      className={`${display.className} absolute top-3 left-3 uppercase font-bold text-[11px] tracking-[0.12em] px-2.5 py-1`}
                      style={{ backgroundColor: C.asphalt, color: C.yellow, borderRadius: '4px' }}
                    >
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className={`${display.className} uppercase font-bold text-xl md:text-2xl mb-1.5`} style={{ color: C.asphalt }}>
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Pizarra del día + rango de precios */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <Km>pizarra del día</Km>
              <h3 className={`${display.className} uppercase font-extrabold text-2xl md:text-3xl leading-tight mt-4 mb-4`} style={{ color: C.asphalt }}>
                El menú se escribe a mano
              </h3>
              <p className="text-sm md:text-base leading-relaxed mb-5" style={{ color: C.muted }}>
                Como en toda picada honesta, la oferta del día va en la
                pizarra: completos, sándwich y lo que salió de la olla.
                {` `}
                La referencia de Google: {BIZ.priceRange}.
              </p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] inline-block text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.asphalt, color: '#F8F6F0', borderRadius: '4px' }}
              >
                Preguntar qué hay hoy →
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden border-4" style={{ borderColor: C.asphalt, borderRadius: '8px' }}>
              <Image
                src={`${IMG}/pizarra.webp`}
                alt="Pizarra de Hostería Alcázar con la carta escrita a tiza"
                width={1200}
                height={900}
                sizes="(min-width:1024px) 50vw, 100vw"
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La fachada de noche ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Letrero light>Al caer la tarde</Letrero>
            <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.0] mb-5`} style={{ color: '#F8F6F0' }}>
              El letrero que se enciende
              <br />
              <span style={{ color: C.yellow }}>en la carretera</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg" style={{ color: 'rgba(248,246,240,0.8)' }}>
              Cocina abierta de martes a lunes hasta las 18:00. Los
              domingos la casa descansa — planifica la parada con día de
              semana o sábado.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative overflow-hidden aspect-[4/3] border" style={{ borderColor: 'rgba(248,246,240,0.2)', borderRadius: '8px' }}>
              <Image
                src={`${IMG}/noche.webp`}
                alt="Entrada de Hostería Alcázar iluminada de noche con su letrero rojo"
                fill
                sizes="(min-width:1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="grid lg:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start mb-10 md:mb-12">
            <div className="flex flex-col items-start gap-1.5">
              <span className={`${display.className} font-extrabold text-6xl md:text-7xl leading-none`} style={{ color: C.asphalt }}>
                {BIZ.rating}
              </span>
              <Stars value={4.2} color={C.red} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 hover:decoration-4 tap-44 mt-1"
                style={{ color: C.red }}
              >
                {BIZ.reviews.toLocaleString('es-CL')} reseñas en Google →
              </a>
            </div>
            <div>
              <Letrero>Las reseñas</Letrero>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[0.98]`} style={{ color: C.asphalt }}>
                Mil y tantas personas
                <br />
                ya pararon aquí
              </h2>
            </div>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 110}>
              <figure
                className="h-full p-5 md:p-6 border-l-4 border"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line, borderLeftColor: C.red, borderRadius: '0 6px 6px 0' }}
              >
                <div className="mb-3">
                  <Stars value={t.stars} color={C.red} className="w-4 h-4" />
                </div>
                <blockquote className="text-[15px] md:text-base leading-relaxed mb-5" style={{ color: C.ink }}>
                  “{t.text}”
                </blockquote>
                <figcaption className="text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                  {t.author} · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Letrero light>Cómo llegar</Letrero>
            <h2 className={`${display.className} uppercase font-extrabold text-3xl md:text-5xl leading-[1.0] mb-5`} style={{ color: '#F8F6F0' }}>
              Kilómetro 308,
              <br />
              <span style={{ color: C.yellow }}>Ruta 5 Sur</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(248,246,240,0.85)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}, Chile
              <br />
              Martes a lunes · 10:00–18:00 · Domingo cerrado
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.yellow, color: C.asphalt2, borderRadius: '4px' }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${display.className} uppercase font-bold tracking-[0.05em] text-sm md:text-base px-7 py-3 border-2 transition-colors hover:bg-white/10 tap-44`}
                style={{ borderColor: 'rgba(248,246,240,0.6)', color: '#F8F6F0', borderRadius: '4px' }}
              >
                {BIZ.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden border min-h-[280px]" style={{ borderColor: 'rgba(248,246,240,0.25)', borderRadius: '8px' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[300px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#111317', color: '#F8F6F0' }}>
        <Centerline color={C.yellow} className="opacity-60" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className={`${display.className} uppercase font-extrabold text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(248,246,240,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}Mar–Lun 10:00–18:00
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(248,246,240,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(248,246,240,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(248,246,240,0.7)' }}>
            Fotos, dirección, teléfono, horario y reseñas son reales; los
            nombres y descripciones de los platos son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
