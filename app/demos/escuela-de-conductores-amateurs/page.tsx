import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CURSOS, HORARIOS_TEORIA } from './content'
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
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  asphalt: '#17181C',
  asphalt2: '#0F1013',
  signal: '#FFD200',
  red: '#C8102E',
  blue: '#1B4FA0',
  cream: '#F5F1E6',
  muted: 'rgba(245,241,230,0.66)',
  line: 'rgba(245,241,230,0.16)',
}

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto
// de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'escuela-de-conductores-amateurs',
  title: 'Escuela de Conductores Amateurs — Talca',
  description: 'Escuela de conductores en 6 Oriente 1497, esquina Alameda, Talca. 32 años enseñando, 4,8 en Google, cursos completos y teóricos con préstamo de auto para el examen.',
  image: `${IMG}/auto-practica.webp`,
})

const NAV_LINKS = [
  { label: 'Cursos', href: '#cursos' },
  { label: 'El auto', href: '#auto' },
  { label: 'Llegar', href: '#contacto' },
]

export default function EscuelaDeConductoresAmateurs() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.asphalt, color: C.cream, ...SPACING }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <img
              src={`${IMG}/logo.webp`}
              alt="Logo de la Escuela de Conductores Amateurs: auto rojo con letrero de práctica sobre fondo amarillo"
              className="w-8 h-8 rounded-full object-cover ring-1"
              style={{ ['--tw-ring-color' as string]: C.line }}
            />
            <span className={`${display.className} text-base uppercase tracking-wider`}>
              Amateurs
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Inscribirme"
        theme={{ over: 'dark', bar: C.asphalt, ink: C.cream, line: C.line, btnBg: C.signal, btnInk: C.asphalt }}
      />

      {/* ── Hero: señalética vial ── */}
      <section className="pt-24 md:pt-28 max-w-6xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-md px-3 py-1.5 mb-5" style={{ backgroundColor: C.signal }}>
            <span className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.2em]`} style={{ color: C.asphalt }}>
              En práctica desde hace {BIZ.years.replace(' enseñando', '')}
            </span>
          </div>
          <h1 className={`${display.className} uppercase text-[44px] md:text-[84px] leading-[1.02]`}>
            Aprende a conducir
            <br />
            <span style={{ color: C.signal }}>con la mejor evaluada</span>
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
            <div className="flex items-center gap-2">
              <Stars value={4.8} size={18} />
              <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>
                4,8 · {BIZ.reviews}
              </span>
            </div>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.muted }}>
              {BIZ.address} · {BIZ.addressHint}
            </span>
          </div>
          <p className="mt-5 max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            Escuela de conductores del centro de Talca. {BIZ.years} formando
            conductores, con curso completo y curso teórico — y préstamo del
            auto para rendir tu examen.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <figure className="mt-8 rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
            <Image
              src={`${IMG}/auto-practica.webp`}
              alt="Auto de práctica rojo de la Escuela de Conductores Amateurs con letrero 'A en práctica' en el techo"
              width={1200}
              height={632}
              className="w-full h-auto"
              priority
            />
            <figcaption className={`${mono.className} px-4 py-3 text-[11px] uppercase tracking-wider flex flex-wrap gap-x-6 gap-y-1`} style={{ backgroundColor: C.asphalt2, color: C.muted }}>
              <span>El auto de práctica — 6 Oriente esquina Alameda</span>
              <span style={{ color: C.signal }}>Aceptan Visa · Mastercard</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal delay={180}>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[52px] px-7 rounded-md text-sm font-bold uppercase tracking-wide"
              style={{ backgroundColor: C.signal, color: C.asphalt }}
            >
              Inscribirme por WhatsApp
            </a>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[52px] px-6 rounded-md text-sm font-bold uppercase tracking-wide border-2"
              style={{ borderColor: C.cream, color: C.cream }}
            >
              Cómo llegar
            </a>
          </div>
        </Reveal>
      </section>

      {/* ── Franja de datos ── */}
      <section className="mt-14 border-y" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
          {[
            ['32', 'años enseñando'],
            ['4,8', 'en Google'],
            ['Martes', 'cursos nuevos cada semana'],
            ['2', 'cursos: completo y teórico'],
          ].map(([n, l]) => (
            <div key={l}>
              <p className={`${display.className} text-3xl md:text-4xl uppercase`} style={{ color: C.signal }}>{n}</p>
              <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-wider`} style={{ color: C.muted }}>{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Los cursos, tal como los anuncian ── */}
      <section id="cursos" className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.red }}>
            Tal como lo anuncian ellos
          </p>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[1.05]`}>
            Los dos cursos
          </h2>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-5">
          {CURSOS.map((c, i) => (
            <Reveal key={c.n} delay={i * 80}>
              <article className="rounded-2xl border overflow-hidden h-full flex flex-col" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
                <Image
                  src={`${IMG}/${c.n === 'A' ? 'curso-completo' : 'curso-teorico'}.webp`}
                  alt={`Afiche real publicado por la escuela: ${c.name.toLowerCase()} de la Escuela de Conductores Amateurs`}
                  width={600}
                  height={600}
                  className="w-full h-auto"
                />
                <div className="p-5 md:p-6">
                  <h3 className={`${display.className} uppercase text-2xl md:text-3xl`} style={{ color: C.signal }}>{c.name}</h3>
                  <ul className="mt-3 space-y-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-sm leading-relaxed" style={{ color: C.muted }}>
                        <span className="mt-1.5 w-3 h-1 shrink-0" style={{ backgroundColor: C.red }} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-6 rounded-xl border p-5 flex flex-wrap items-center gap-x-8 gap-y-3" style={{ borderColor: C.line, backgroundColor: C.asphalt2 }}>
            <span className={`${mono.className} text-xs uppercase tracking-wider`} style={{ color: C.signal }}>Horarios de teoría</span>
            {HORARIOS_TEORIA.map((h) => (
              <span key={h} className={`${mono.className} text-lg font-bold`}>{h}</span>
            ))}
            <span className={`${mono.className} text-[11px] uppercase tracking-wider`} style={{ color: C.muted }}>presencial u online</span>
          </div>
        </Reveal>
      </section>

      {/* ── Afiches reales ── */}
      <section id="auto" className="max-w-6xl mx-auto px-5 md:px-8 pb-16">
        <Reveal>
          <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-2`} style={{ color: C.blue }}>
            De su propio Instagram
          </p>
          <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-[1.05]`}>
            Lo que publica la escuela
          </h2>
        </Reveal>
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            ['afiche-32-anos', 'Afiche real de la escuela con su resumen de Google: 4,8 y más de mil reseñas'],
            ['afiche-invierno', 'Afiche de campaña de invierno de la Escuela de Conductores Amateurs'],
            ['afiche-martes', 'Afiche real de la escuela: comenzamos cursos todos los martes'],
            ['logo', 'Logo de la Escuela de Conductores Amateurs con su auto rojo de práctica'],
          ].map(([f, alt], i) => (
            <Reveal key={f} delay={i * 60}>
              <figure className="rounded-xl overflow-hidden border" style={{ borderColor: C.line }}>
                <Image src={`${IMG}/${f}.webp`} alt={alt} width={600} height={600} className="w-full h-auto" />
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal delay={80}>
          <p className={`${mono.className} mt-4 text-[11px] uppercase tracking-wider break-all`} style={{ color: C.muted }}>
            @{BIZ.ig} · facebook.com/EscueladeConductoresAmateurs
          </p>
        </Reveal>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" style={{ backgroundColor: C.asphalt2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-2 gap-8">
          <div>
            <p className={`${mono.className} text-xs uppercase tracking-[0.25em] mb-3`} style={{ color: C.signal }}>
              Cómo llegar
            </p>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl leading-[1.05]`}>
              6 Oriente 1497,
              <br />
              <span style={{ color: C.signal }}>esquina Alameda</span>
            </h2>
            <address className="not-italic mt-5 text-base leading-relaxed" style={{ color: C.muted }}>
              {BIZ.name}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.wa}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              <br />
              Martes 10:00 – 20:00 · se identifica como mujer empresaria
            </address>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-7 rounded-md text-sm font-bold uppercase tracking-wide"
                style={{ backgroundColor: C.signal, color: C.asphalt }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-[52px] px-6 rounded-md text-sm font-bold uppercase tracking-wide border-2"
                style={{ borderColor: C.cream, color: C.cream }}
              >
                Ver en Maps
              </a>
            </div>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-2" style={{ borderColor: C.line }}>
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
      <footer style={{ backgroundColor: '#0A0B0D' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} uppercase text-xl md:text-2xl mb-2`} style={{ color: C.cream }}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,241,230,0.6)' }}>
            {BIZ.address}, {BIZ.addressHint} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={`tel:${BIZ.wa}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
      </footer>

      <div style={{ backgroundColor: '#0A0B0D', borderTop: '1px solid rgba(245,241,230,0.14)' }}>
        <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(245,241,230,0.7)' }}>
          Sitio de ejemplo preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.cream }}>
            Sitiazo
          </a>{' '}
          para {BIZ.name}. Los datos son reales y salen de su ficha de
          Google y sus redes; el logo, el auto de práctica y los afiches
          son los que la escuela publica en su Facebook e Instagram.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.signal }}>
            ¿Lo hacemos realidad?
          </a>
        </p>
      </div>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
