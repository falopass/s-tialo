import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, RUTA, PHOTOS } from './content'
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
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/* Paleta de señalética vial: asfalto, línea amarilla y pintura blanca. */
const C = {
  asphalt: '#16181B',
  panel: '#1E2126',
  deep: '#0F1113',
  ink: '#F4F2EA',
  soft: '#B8B5A8',
  muted: '#83887F',
  yellow: '#F2C400',
  line: 'rgba(244,242,234,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'escuela-de-conductores-a-s',
  title: 'Escuela de Conductores A & S — Clases de manejo en Talca',
  description:
    'Escuela de conductores en 2 Sur 1064, Talca. Clases teóricas y prácticas para tu licencia, con horario de tarde y sábado.',
  image: `${IMG}/patio.webp`,
})

const NAV_LINKS = [
  { label: 'La ruta', href: '#ruta' },
  { label: 'La escuela', href: '#escuela' },
  { label: 'Horario', href: '#horario' },
  { label: 'Ubicación', href: '#ubicacion' },
]

/** La línea discontinua de la carretera: separador de secciones. */
function RoadLine() {
  return (
    <div className="flex justify-center gap-3 py-1" aria-hidden="true">
      {[0, 1, 2].map((i) => (
        <span key={i} className="w-10 h-[5px] rounded-sm" style={{ backgroundColor: C.yellow }} />
      ))}
    </div>
  )
}

/** Señal vial tipo "PARE": la marca de la escuela. */
function RoadSign({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`${className} inline-flex items-center justify-center px-3 py-1.5 border-2 rounded-[4px]`}
      style={{ borderColor: C.yellow, color: C.yellow }}
    >
      {children}
    </span>
  )
}

export default function EscuelaASDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.asphalt, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} font-bold uppercase tracking-wide`}>
            Escuela <span style={{ color: C.yellow }}>A&S</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.asphalt, ink: C.ink, line: C.line, btnBg: C.yellow, btnInk: '#16181B' }}
      />

      {/* ── HERO: el letrero vial ──────────────────────── */}
      <section id="inicio" className="pt-[104px] md:pt-[140px] pb-12 md:pb-16 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <RoadSign className={`${mono.className} text-[11px] font-semibold uppercase tracking-[0.3em] mb-6`}>
              Escuela de conductores · Talca
            </RoadSign>
          </Reveal>
          <Reveal>
            <h1
              className={`${display.className} uppercase leading-[0.95] text-5xl md:text-7xl lg:text-8xl max-w-4xl`}
              style={{ fontWeight: 800 }}
            >
              De la primera clase{' '}
              <span style={{ color: C.yellow }}>a la licencia</span>
            </h1>
          </Reveal>
          <Reveal className="mt-6 max-w-xl">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
              {BIZ.name} enseña a manejar en pleno centro de Talca:
              en {BIZ.address} {BIZ.addressHint}, con horario de tarde
              y sábado por la mañana.
            </p>
          </Reveal>
          <Reveal className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={CALL_LINK}
              className={`${display.className} font-bold uppercase text-sm md:text-base px-6 py-3 transition-transform active:scale-95`}
              style={{ backgroundColor: C.yellow, color: '#16181B' }}
            >
              Llamar al {BIZ.phoneDisplay}
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-6 py-3 border transition-transform active:scale-95"
              style={{ borderColor: C.line, color: C.ink }}
            >
              Cómo llegar →
            </a>
          </Reveal>
        </div>
      </section>

      <RoadLine />

      {/* ── LA RUTA: hitos hacia la licencia ───────────── */}
      <section id="ruta" className="px-5 md:px-8 py-12 md:py-18" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-none`} style={{ fontWeight: 800 }}>
              La ruta a tu licencia
            </h2>
          </Reveal>
          <div className="mt-10 relative">
            {/* la línea central del camino */}
            <div
              className="absolute left-[13px] md:left-1/2 top-0 bottom-0 w-[3px] md:-translate-x-1/2"
              style={{
                backgroundImage: `repeating-linear-gradient(180deg, ${C.yellow} 0 18px, transparent 18px 34px)`,
              }}
              aria-hidden="true"
            />
            <ol className="space-y-8 md:space-y-0">
              {RUTA.map((p, i) => (
                <Reveal key={p.t}>
                  <li
                    className={`relative pl-12 md:pl-0 md:w-1/2 md:pb-10 ${
                      i % 2 === 0 ? 'md:pr-14 md:text-right' : 'md:ml-auto md:pl-14'
                    }`}
                  >
                    <span
                      className={`absolute top-1 left-0 w-7 h-7 rounded-full flex items-center justify-center text-[13px] font-bold ${
                        i % 2 === 0 ? 'md:left-auto md:-right-3.5' : 'md:-left-3.5'
                      }`}
                      style={{ backgroundColor: C.yellow, color: '#16181B' }}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <h3 className={`${display.className} font-bold uppercase text-xl md:text-2xl`} style={{ fontWeight: 700 }}>
                      {p.t}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.soft }}>
                      {p.d}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <RoadLine />

      {/* ── LA ESCUELA: las dos fotos reales ───────────── */}
      <section id="escuela" className="px-5 md:px-8 py-12 md:py-18">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-none`} style={{ fontWeight: 800 }}>
              Así se ve <span style={{ color: C.yellow }}>la escuela</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.soft }}>
              La casa de 2 Sur por dentro: el patio de práctica y la oficina
              con el horario pegado en la puerta.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
            {PHOTOS.map((p, i) => (
              <Reveal key={p.src}>
                <figure className="border" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <div className={`relative ${i === 0 ? 'aspect-[16/10]' : 'aspect-[3/4] md:aspect-auto md:min-h-[420px]'}`}>
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 55vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} p-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.yellow }}>
                    {p.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── HORARIO ────────────────────────────────────── */}
      <section id="horario" className="px-5 md:px-8 py-12 md:py-18" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-none`} style={{ fontWeight: 800 }}>
              Abierto hasta <span style={{ color: C.yellow }}>las 20:30</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed" style={{ color: C.soft }}>
              Si trabajas de día, alcanzas igual: la oficina atiende después
              de las 15:00 y los sábados por la mañana.
            </p>
          </Reveal>
          <Reveal>
            <div className="border" style={{ borderColor: C.line, backgroundColor: C.asphalt }}>
              {HOURS.map((h) => (
                <p key={h.d} className="flex justify-between gap-6 px-5 py-4 border-b last:border-b-0 text-sm md:text-base" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} uppercase tracking-[0.15em]`} style={{ color: C.muted }}>{h.d}</span>
                  <span className="font-semibold text-right">{h.h}</span>
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ──────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-12 md:py-18">
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-none`} style={{ fontWeight: 800 }}>
              En 2 Sur, <span style={{ color: C.yellow }}>pleno centro</span>
            </h2>
            <dl className="mt-8 space-y-4">
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="text-lg font-semibold">{BIZ.address} {BIZ.addressHint}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="text-lg font-semibold underline underline-offset-4" style={{ color: C.yellow }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[340px] border" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────── */}
      <footer className="px-5 md:px-8 py-8 pb-6" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            {BIZ.name} · {BIZ.city}
          </p>
          <a
            href={whatsappLink('demo')}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
            style={{ color: C.muted }}
          >
            Demo por {SITE.name} →
          </a>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.yellow} fg="#16181B" />
    </div>
  )
}
