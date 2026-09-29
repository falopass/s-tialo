import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, WA_LINK_CARTA, MAPS_URL, MAPS_EMBED, IMG } from './content'

/**
 * Vaivén - Bar Restaurant (Linares)
 * Idea visual: el edificio es literalmente una caja de acero corten sobre la
 * Ibáñez: carbón cálido, óxido y crema. Anton por el wordmark esténcil del
 * logo; el "vaivén" del local se cuenta como díptico día/noche.
 */

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' }],
})
const bodyBold = localFont({
  src: [{ path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

const C = {
  ink: '#17100B',
  panel: '#221810',
  deep: '#100B07',
  corten: '#A94F26',
  cortenTxt: '#DC8459',
  crema: '#F3E8D6',
  muted: 'rgba(243,232,214,0.66)',
  faint: 'rgba(243,232,214,0.56)',
  line: 'rgba(243,232,214,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'vaiven-bar-restaurant',
  title: 'Vaivén - Bar Restaurant en Linares',
  description:
    'Bar restaurante en Av. Ibáñez 510, Linares. Parrilla, tablas y barra en el edificio de acero corten. Reserva por WhatsApp.',
  image: `${IMG}/fachada-tarde.webp`,
})

const NAV_LINKS = [
  { label: 'La barra', href: '#barra' },
  { label: 'La cocina', href: '#cocina' },
  { label: 'La noche', href: '#noche' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const MARQUEE = [
  'Parrilla al carbón',
  'Tablas para compartir',
  'Pastel de papa',
  'Papas rústicas',
  'Salmón',
  'Schop helado',
  'Pisco sour',
  'Tragos de la casa',
]

const HORARIOS = [
  { dias: 'Martes y miércoles', horas: '12:30 - 01:00' },
  { dias: 'Jueves', horas: '12:30 - 02:00' },
  { dias: 'Viernes y sábado', horas: '12:30 - 03:00' },
  { dias: 'Domingo y lunes', horas: 'Cerrado' },
]

const REVIEWS = [
  {
    name: 'Joselyn Muñoz',
    stars: 5,
    text: 'El pastel de papa es lo mejor del local. Rico, abundante y bien servido.',
  },
  {
    name: 'Marco Cofré',
    stars: 5,
    text: 'Buenos tragos, buen ambiente y la barra es de otro nivel para Linares.',
  },
  {
    name: 'Aida Moreno',
    stars: 5,
    text: 'El menú es variado y todo llega caliente y bien presentado. Volvemos seguro.',
  },
]

function SectionHead({
  kicker,
  title,
}: {
  kicker?: string
  title: React.ReactNode
}) {
  return (
    <div className="mb-8 md:mb-12">
      {kicker && (
        <p
          className={`${mono.className} text-[11px] uppercase tracking-[0.28em] mb-3`}
          style={{ color: C.cortenTxt }}
        >
          {kicker}
        </p>
      )}
      <h2
        className={`${display.className} uppercase leading-[0.95] tracking-[0.01em] text-[clamp(2rem,6vw,3.6rem)]`}
        style={{ color: C.crema }}
      >
        {title}
      </h2>
    </div>
  )
}

export default function VaivenPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.ink, color: C.crema }}
    >
      <style>{`
        .vv-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .vv-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .vv-btn:active { transform: translateY(0) scale(0.97); }
        .vv-btn:focus-visible { outline: 3px solid ${C.cortenTxt}; outline-offset: 3px; }
        .vv-marquee { animation: vv-scroll 26s linear infinite; }
        @keyframes vv-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .vv-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name={<span className={`${display.className} uppercase tracking-[0.08em]`}>{BIZ.name}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo-blanco.webp`}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(23,16,11,0.92)',
          ink: C.crema,
          line: C.line,
          btnBg: C.corten,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la caja de acero corten ── */}
      <section id="inicio" className="relative min-h-[92svh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/fachada-tarde.webp`}
          alt="Fachada de acero corten de Vaivén al atardecer, en Av. Ibáñez, Linares"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,16,11,0.42) 0%, rgba(23,16,11,0.1) 40%, rgba(23,16,11,0.88) 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-14 md:pb-16 pt-32">
          <Reveal>
            <p
              className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`}
              style={{ color: 'rgba(243,232,214,0.85)' }}
            >
              Av. Presidente Ibáñez 510 · Linares
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} uppercase leading-[0.9] tracking-[0.02em]`}
              style={{ fontSize: 'clamp(3.6rem, 13vw, 8.5rem)', color: '#FFFFFF' }}
            >
              Vaivén
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p
              className={`${mono.className} uppercase tracking-[0.42em] text-sm md:text-base mt-2`}
              style={{ color: C.cortenTxt }}
            >
              Bar restaurant
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: 'rgba(243,232,214,0.85)' }}>
              Parrilla, tablas y barra en la caja de acero corten de la Ibáñez.
              De la comida de la tarde a la noche larga de los fines de semana.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="vv-btn tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{ backgroundColor: C.corten, color: '#FFFFFF' }}
              >
                Reservar mesa por WhatsApp
              </a>
              <a
                href={WA_LINK_CARTA}
                target="_blank"
                rel="noopener noreferrer"
                className="vv-btn tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
                style={{
                  backgroundColor: 'rgba(23,16,11,0.5)',
                  color: '#FFFFFF',
                  border: '1px solid rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(6px)',
                }}
              >
                Consultar la carta
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-9 flex items-center gap-3">
              <Stars value={BIZ.rating} color="#E8B04B" className="w-4 h-4" />
              <p className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: 'rgba(243,232,214,0.8)' }}>
                {String(BIZ.rating).replace('.', ',')} en Google, {BIZ.reviewsCount} reseñas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta corten ── */}
      <section aria-label="Especialidades de la casa" className="py-4 overflow-hidden" style={{ backgroundColor: C.corten }}>
        <div className="vv-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center" aria-hidden={dup === 1}>
              {MARQUEE.map((item) => (
                <span key={`${dup}-${item}`} className="flex items-center">
                  <span
                    className={`${display.className} uppercase tracking-[0.14em] text-lg md:text-xl px-6`}
                    style={{ color: '#FFF4E6' }}
                  >
                    {item}
                  </span>
                  <span aria-hidden="true" className="w-1.5 h-1.5 rotate-45" style={{ backgroundColor: 'rgba(255,244,230,0.55)' }} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── La barra: foto cinematográfica ── */}
      <section id="barra" className="relative scroll-mt-16">
        <div className="relative min-h-[70svh] flex items-end">
          <Image
            src={`${IMG}/barra.webp`}
            alt="Barra panorámica de Vaivén iluminada, con botellas y taburetes"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(23,16,11,0.25) 0%, rgba(23,16,11,0.05) 45%, rgba(23,16,11,0.9) 100%)',
            }}
          />
          <div className="relative max-w-6xl mx-auto w-full px-5 md:px-8 pb-10 md:pb-14">
            <Reveal>
              <h2
                className={`${display.className} uppercase leading-[0.95] text-[clamp(2rem,6vw,3.8rem)] max-w-3xl`}
                style={{ color: '#FFFFFF' }}
              >
                Una barra que manda la casa
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: 'rgba(243,232,214,0.85)' }}>
                Botella tras botella, la barra de Vaivén es el centro del local:
                schop helado, pisco sour y los tragos de la casa hasta que cierran las puertas.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Abierto hasta las 03:00 vie y sáb', 'Tragos de autor', 'Parrilla y tablas'].map((t) => (
                  <span
                    key={t}
                    className={`${mono.className} text-[11px] uppercase tracking-[0.14em] rounded-full px-3.5 py-2`}
                    style={{ border: `1px solid rgba(243,232,214,0.4)`, color: C.crema, backgroundColor: 'rgba(23,16,11,0.45)' }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La cocina: collage asimétrico ── */}
      <section id="cocina" className="scroll-mt-16" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead
              kicker="Cocina y parrilla"
              title={
                <>
                  Parrilla, mar y ollas lentas
                  <br />
                  <span style={{ color: C.cortenTxt }}>a metros del centro</span>
                </>
              }
            />
          </Reveal>
          <div className="grid md:grid-cols-12 gap-5 md:gap-6">
            <Reveal className="md:col-span-7">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/salmon.webp`}
                  alt="Filete de salmón servido en Vaivén"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={100} className="md:col-span-5">
              <div
                className="h-full rounded-lg p-6 md:p-8 flex flex-col justify-between"
                style={{ backgroundColor: C.corten }}
              >
                <div>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: 'rgba(255,244,230,0.75)' }}>
                    De la cocina
                  </p>
                  <ul className="mt-5 space-y-4">
                    {[
                      ['Salmón a la parrilla', 'con papas rústicas y ensalada'],
                      ['Tablas para compartir', 'para la sobremesa larga'],
                      ['Pastel de papa', 'el que la gente nombra en las reseñas'],
                      ['Papas rústicas', 'el acompañamiento que se repite'],
                    ].map(([t, d]) => (
                      <li key={t}>
                        <p className={`${bodyBold.className} text-base md:text-lg`} style={{ color: '#FFFFFF' }}>{t}</p>
                        <p className="text-sm" style={{ color: 'rgba(255,244,230,0.8)' }}>{d}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={WA_LINK_CARTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`vv-btn tap-44 ${bodyBold.className} mt-7 inline-flex w-fit items-center rounded-full px-5 py-2.5 text-sm`}
                  style={{ backgroundColor: '#17100B', color: C.crema }}
                >
                  Pedir la carta por WhatsApp
                </a>
              </div>
            </Reveal>
            <Reveal delay={60} className="md:col-span-5">
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/papas-rusticas.webp`}
                  alt="Papas rústicas doradas servidas en la casa"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 42vw, 100vw"
                />
              </div>
            </Reveal>
            <Reveal delay={140} className="md:col-span-7">
              <div className="relative rounded-lg overflow-hidden aspect-[16/9]">
                <Image
                  src={`${IMG}/plato-tabla.webp`}
                  alt="Tabla de picoteo con carnes y quesos en Vaivén"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 58vw, 100vw"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El vaivén: díptico día/noche ── */}
      <section id="noche" className="scroll-mt-16">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead title="De la comida de tarde a la barra de noche" />
          </Reveal>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                src: `${IMG}/patio.webp`,
                tag: 'La tarde',
                titulo: 'Patio y comedor',
                texto: 'Almuerzos largos y comidas de tarde, con la luz entrando al edificio.',
              },
              {
                src: `${IMG}/interior-barra.webp`,
                tag: 'La noche',
                titulo: 'La barra encendida',
                texto: 'Cuando cae el sol el local cambia de mano: la barra, los tragos y la noche de Linares.',
              },
            ].map((p, i) => (
              <Reveal key={p.tag} delay={i * 120}>
                <figure className="relative rounded-lg overflow-hidden aspect-[3/4] md:aspect-[4/5]">
                  <Image
                    src={p.src}
                    alt={i === 0 ? 'Patio interior de Vaivén durante el día' : 'Interior de la barra de Vaivén de noche'}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, transparent 45%, rgba(16,11,7,0.88) 100%)' }}
                  />
                  <span
                    className={`${mono.className} absolute top-4 left-4 text-[11px] uppercase tracking-[0.24em] rounded-full px-3 py-1.5`}
                    style={{ backgroundColor: 'rgba(16,11,7,0.6)', color: '#FFFFFF', border: '1px solid rgba(243,232,214,0.35)' }}
                  >
                    {p.tag}
                  </span>
                  <figcaption className="absolute bottom-0 inset-x-0 p-5 md:p-6">
                    <p className={`${display.className} uppercase text-xl md:text-2xl`} style={{ color: '#FFFFFF' }}>
                      {p.titulo}
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed max-w-sm" style={{ color: 'rgba(243,232,214,0.85)' }}>
                      {p.texto}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El cartel de horarios ── */}
      <section style={{ backgroundColor: C.deep }} aria-label="Horarios de atención">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <Reveal className="md:col-span-5">
              <SectionHead
                title={
                  <>
                    Abierto hasta
                    <br />
                    <span style={{ color: C.cortenTxt }}>las 3 de la mañana</span>
                  </>
                }
              />
              <p className="text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                Viernes y sábado la barra corre hasta las tres. Domingo y lunes,
                la casa descansa.
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div
                className="rounded-lg overflow-hidden"
                style={{ border: `2px solid ${C.corten}`, backgroundColor: C.panel }}
              >
                <p
                  className={`${mono.className} text-[11px] uppercase tracking-[0.3em] px-5 md:px-7 pt-5`}
                  style={{ color: C.cortenTxt }}
                >
                  Cartel de horarios
                </p>
                <ul className="px-5 md:px-7 py-4">
                  {HORARIOS.map((h) => (
                    <li
                      key={h.dias}
                      className="flex items-baseline justify-between gap-4 py-3.5"
                      style={{ borderBottom: `1px dashed ${C.line}` }}
                    >
                      <span className={`${bodyBold.className} text-base md:text-lg`} style={{ color: C.crema }}>
                        {h.dias}
                      </span>
                      <span
                        className={`${mono.className} text-sm md:text-base text-right`}
                        style={{ color: h.horas === 'Cerrado' ? C.faint : C.cortenTxt }}
                      >
                        {h.horas}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="px-5 md:px-7 pb-5 text-xs leading-relaxed" style={{ color: C.faint }}>
                  Horarios publicados en su ficha de Google. Pueden cambiar en feriados.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section aria-label="Reseñas de clientes" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <SectionHead title="La barra también se lee" />
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 90}>
                <figure
                  className="h-full rounded-lg p-6 flex flex-col"
                  style={{ backgroundColor: C.ink, border: `1px solid ${C.line}` }}
                >
                  <Stars value={r.stars} color="#E8B04B" className="w-3.5 h-3.5" />
                  <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(243,232,214,0.9)' }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.16em]`}
                    style={{ color: C.faint }}
                  >
                    {r.name}, reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <p className="mt-6 text-sm" style={{ color: C.muted }}>
              Extractos de reseñas públicas en Google Maps, nota {String(BIZ.rating).replace('.', ',')} con {BIZ.reviewsCount} reseñas.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.cortenTxt }}>
                Leerlas todas
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-16" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-start">
            <Reveal className="md:col-span-5">
              <SectionHead
                title={
                  <>
                    En la Ibáñez,
                    <br />
                    <span style={{ color: C.cortenTxt }}>Linares centro</span>
                  </>
                }
              />
              <address className="not-italic text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}
                <br />
                {BIZ.city}, {BIZ.region}
              </address>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`vv-btn tap-44 ${bodyBold.className} inline-flex items-center rounded-full px-6 py-3 text-sm`}
                  style={{ backgroundColor: C.corten, color: '#FFFFFF' }}
                >
                  WhatsApp {BIZ.phoneDisplay}
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`vv-btn tap-44 ${bodyBold.className} inline-flex items-center rounded-full px-6 py-3 text-sm`}
                  style={{ border: `1px solid rgba(243,232,214,0.4)`, color: C.crema }}
                >
                  Llamar
                </a>
              </div>
              <p className="mt-6 text-sm" style={{ color: C.faint }}>
                <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.muted }}>
                  Instagram {BIZ.igUser}
                </a>
                <span aria-hidden="true"> · </span>
                <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44" style={{ color: C.muted }}>
                  Facebook
                </a>
              </p>
            </Reveal>
            <Reveal delay={120} className="md:col-span-7">
              <div
                className="relative rounded-lg overflow-hidden aspect-[4/3] md:aspect-[16/10]"
                style={{ border: `1px solid ${C.line}`, backgroundColor: C.panel }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0B0704', color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2`}>{BIZ.full}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
            {BIZ.address} · {BIZ.city}
            <br />
            <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igUser}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.full}. La carta, los textos y las fotos son de muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cortenTxt }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.full}`} />
    </div>
  )
}
