import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, ESPECIES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
  variable: '--font-fraunces',
})
const body = localFont({
  src: [
    { path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  paper: '#F7F4EC',
  card: '#FFFFFF',
  leaf: '#2C4A32',
  leafDeep: '#1C3322',
  gerbera: '#C23B3B',
  anemona: '#A83B86',
  ink: '#23201A',
  muted: '#6E685A',
  line: 'rgba(35,32,26,0.14)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-jardin-eben-ezer',
  title: 'Vivero Jardín Eben-Ezer — Talca',
  description: 'Vivero en el norte de Talca con flores de temporada: anémonas, margaritas, dimorfoteca, suculentas y bulbos. 4,5 en Google.',
  image: `${IMG}/anemonas.webp`,
})

const NAV_LINKS = [
  { label: 'Las plantas', href: '#plantas' },
  { label: 'El vivero', href: '#vivero' },
  { label: 'Llegar', href: '#contacto' },
]

export default function ViveroJardinEbenEzer() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg`} style={{ fontVariationSettings: "'wght' 560" }}>
            Eben-Ezer
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Consultar"
        theme={{ over: 'light', bar: C.paper, ink: C.leaf, line: C.line, btnBg: C.leaf, btnInk: '#F7F4EC' }}
      />

      {/* ── Hero: la carta del vivero ── */}
      <section className="pt-24 md:pt-28 max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="grid md:grid-cols-[1fr_1.15fr] gap-6 items-stretch">
            <figure className="rounded-2xl overflow-hidden border bg-white" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/logo.webp`}
                alt="Carta real del Vivero Jardín Eben-Ezer con su nombre calado y gerberas rojas — publicada en su Facebook"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </figure>
            <div className="flex flex-col justify-center rounded-2xl p-7 md:p-10" style={{ backgroundColor: C.leaf, color: C.paper }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: 'rgba(247,244,236,0.7)' }}>
                Vivero · Talca norte
              </p>
              <h1 className={`${display.className} text-4xl md:text-[56px] leading-[1.04]`} style={{ fontVariationSettings: "'wght' 480" }}>
                Flores de temporada,
                <br />
                <em style={{ color: '#F0C9D8' }}>del vivero a tu patio</em>
              </h1>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <div className="flex items-center gap-2">
                  <Stars value={4.5} size={18} />
                  <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: 'rgba(247,244,236,0.7)' }}>4,5 en Google</span>
                </div>
                <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: 'rgba(247,244,236,0.7)' }}>Hoy 8:30–19:30</span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-bold uppercase tracking-wide"
                  style={{ backgroundColor: C.gerbera, color: '#FDF8F2' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={BIZ.fb}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                  style={{ borderColor: C.paper, color: C.paper }}
                >
                  Su Facebook
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Las plantas: lo que publican ── */}
      <section id="plantas" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.anemona }}>
            De su propio Facebook
          </p>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.05]`} style={{ color: C.leaf, fontVariationSettings: "'wght' 480" }}>
            Lo que hay en el vivero
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: C.muted }}>
            Fotos reales que ellos mismos publican: esto es lo que florece
            en sus maceteros esta temporada.
          </p>
        </Reveal>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ESPECIES.map((e, i) => (
            <Reveal key={e.f} delay={i * 60}>
              <figure className="rounded-xl overflow-hidden border bg-white h-full" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/${e.f}.webp`}
                  alt={`${e.t} fotografiadas en el Vivero Jardín Eben-Ezer — foto de su Facebook`}
                  width={600}
                  height={600}
                  className="w-full aspect-square object-cover"
                />
                <figcaption className="p-4">
                  <h3 className={`${display.className} text-xl`} style={{ color: C.leaf, fontVariationSettings: "'wght' 600" }}>{e.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed" style={{ color: C.muted }}>{e.d}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <p className={`${mono.className} mt-5 text-[11px] uppercase tracking-wider`} style={{ color: C.muted }}>
            Stock y precios varían con la temporada — se confirman por WhatsApp o en el vivero.
          </p>
        </Reveal>
      </section>

      {/* ── Franja verde ── */}
      <section id="vivero" style={{ backgroundColor: C.leafDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 grid sm:grid-cols-3 gap-6">
          {[
            ['8:30–19:30', 'Horario de hoy según su ficha'],
            ['2 teléfonos', `${BIZ.phoneDisplay} · ${BIZ.phone2Display}`],
            ['4,5 ★', 'Su rating en Google Maps'],
          ].map(([n, l]) => (
            <Reveal key={n}>
              <div>
                <p className={`${display.className} text-3xl md:text-4xl`} style={{ color: '#F0C9D8', fontVariationSettings: "'wght' 560" }}>{n}</p>
                <p className={`${mono.className} mt-2 text-[11px] uppercase tracking-wider`} style={{ color: 'rgba(247,244,236,0.66)' }}>{l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.gerbera }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.leaf, fontVariationSettings: "'wght' 480" }}>
              Norte de Talca
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name}
              <br />
              {BIZ.city}, {BIZ.region} · {BIZ.plusCode}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              {' · '}
              <a href={`tel:+${BIZ.phone2Display.replace(/\D/g, '')}`} className="underline underline-offset-2 tap-44">{BIZ.phone2Display}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.leaf, color: '#F7F4EC' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.leaf, color: C.leaf }}
              >
                Ver en Maps
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#141F17' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`} style={{ color: C.paper, fontVariationSettings: "'wght' 560" }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(247,244,236,0.62)' }}>
            {BIZ.city}, {BIZ.region} · {BIZ.plusCode}
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,244,236,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(247,244,236,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.paper }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos son reales y salen de su ficha de
            Google y su Facebook; la carta y todas las fotos de plantas
            son las que el vivero publica.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#F0C9D8' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
