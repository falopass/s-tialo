import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG, MENU_DIA, SECCIONES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

const C = {
  chalk: '#1E1710',
  chalk2: '#15100A',
  cream: '#F6EBD8',
  card: '#FBF4E4',
  tomato: '#D34524',
  albahaca: '#4C6B3A',
  ink: '#241B12',
  muted: '#71634F',
  chalkMuted: 'rgba(246,235,216,0.72)',
  line: 'rgba(36,27,18,0.16)',
  chalkLine: 'rgba(246,235,216,0.22)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'oikos-pizzas',
  title: 'Oikos Pizzas — Molina',
  description: 'Pizzería y restaurante familiar en Membrillar 1214, Molina. Pizzas al horno y menú del día: charquicán, lasaña, pollo asado. 4,6 en Google.',
  image: `${IMG}/salon.webp`,
})

const NAV_LINKS = [
  { label: 'Menú del día', href: '#menu' },
  { label: 'La casa', href: '#casa' },
  { label: 'Llegar', href: '#contacto' },
]

export default function OikosPizzas() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.chalk, color: C.cream, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-lg uppercase tracking-wider`}>
            Oikos <span style={{ color: C.tomato }}>Pizzas</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Pedir"
        theme={{ over: 'dark', bar: C.chalk, ink: C.cream, line: C.chalkLine, btnBg: C.tomato, btnInk: '#FBF4E4' }}
      />

      {/* ── Hero: el salón real ── */}
      <section className="pt-24 md:pt-28 max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.35em] mb-4`} style={{ color: C.chalkMuted }}>
            Pizzería y restaurante · Molina
          </p>
          <h1 className={`${display.className} uppercase text-[46px] md:text-[88px] leading-[1.02]`}>
            Pizza y la colación
            <br />
            <span style={{ color: C.tomato }}>de todos los días</span>
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Stars value={4.6} size={18} />
              <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.chalkMuted }}>
                4,6 · {BIZ.reviews}
              </span>
            </div>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.chalkMuted }}>
              {BIZ.address} · {BIZ.city}
            </span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <figure className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: C.chalkLine }}>
            <Image
              src={`${IMG}/salon.webp`}
              alt="El salón de Oikos Pizzas en Molina: mesas con manteles florales y la vitrina, foto de su ficha de Google"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
            <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-wider`} style={{ backgroundColor: C.chalk2, color: C.chalkMuted }}>
              El salón en Membrillar — foto de su ficha de Google
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-bold uppercase tracking-wide"
              style={{ backgroundColor: C.tomato, color: '#FBF4E4' }}
            >
              Pedir por WhatsApp
            </a>
            <a
              href={TEL_LINK}
              className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
              style={{ borderColor: C.cream, color: C.cream }}
            >
              Llamar
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Menú del día: afiches reales del Facebook ── */}
      <section id="menu" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.albahaca }}>
            La pizarra semanal
          </p>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[1.05]`}>
            El menú del día
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed" style={{ color: C.chalkMuted }}>
            Cada semana la casa publica su menú en Facebook — estos son
            los afiches reales, tal como los comparten.
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {MENU_DIA.map((m, i) => (
            <Reveal key={m.day} delay={i * 60}>
              <figure className="rounded-xl overflow-hidden border" style={{ borderColor: C.chalkLine, backgroundColor: C.chalk2 }}>
                <Image
                  src={`${IMG}/menu-dia-${i + 1}.webp`}
                  alt={m.alt}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <figcaption className={`${mono.className} px-3 py-2.5 text-[10px] uppercase tracking-wider`} style={{ color: C.chalkMuted }}>
                  {m.day} · {m.dish}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-wider`} style={{ color: C.chalkMuted }}>
            Precios y el menú de esta semana se confirman por WhatsApp — la casa no los publica fijos.
          </p>
        </Reveal>
      </section>

      {/* ── La casa ── */}
      <section id="casa" style={{ backgroundColor: C.card, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14">
          <Reveal>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.tomato }}>
              La casa
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.05]`}>
              Molina en la mesa
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {SECCIONES.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="rounded-xl border p-5 h-full" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
                  <p className={`${mono.className} text-xs uppercase tracking-wider mb-2`} style={{ color: C.albahaca }}>
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className={`${display.className} uppercase text-2xl leading-tight`}>{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-6 rounded-xl border p-5 flex flex-wrap items-center gap-x-6 gap-y-2" style={{ borderColor: C.line, backgroundColor: '#fff' }}>
              <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>También en Facebook</span>
              <a
                href={BIZ.fb}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} text-xs uppercase tracking-wider underline underline-offset-2 tap-44`}
                style={{ color: C.tomato }}
              >
                facebook.com/oikos.pizzeria
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.chalk2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.tomato }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.05]`}>
              Membrillar 1214,
              <br />
              Molina
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.chalkMuted }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-full text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.tomato, color: '#FBF4E4' }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-full text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.cream, color: C.cream }}
              >
                Cómo llegar
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: C.chalkLine }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[280px] md:h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0E0A06' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2`} style={{ color: C.cream }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,235,216,0.62)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,235,216,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(246,235,216,0.7)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Los datos son reales y salen de su ficha de
            Google y su Facebook (@oikos.pizzeria); las fotos del menú son
            los afiches que la casa publica cada semana.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tomato }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
