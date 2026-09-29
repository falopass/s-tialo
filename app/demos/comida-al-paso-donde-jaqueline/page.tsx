import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/bitter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/bitter/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la señal del camino» — una picada que se encuentra
 * manejando rumbo a la cordillera. El motivo son los letreros direccionales
 * de carretera: paneles blancos con borde tinta y flecha, repetidos como
 * capítulos de la página sobre papel campestre.
 */
const C = {
  papel: '#F3EDE0',
  senal: '#FDFCF5',
  ink: '#262E1B',
  accent: '#A63E22',
  bosque: '#2C3823',
  muted: 'rgba(38,46,27,0.7)',
  line: 'rgba(38,46,27,0.18)',
  onDark: '#F6F0DF',
}

// globals.css redefine --spacing-5…12; este demo usa la escala estándar.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'comida-al-paso-donde-jaqueline',
  title: 'Donde Jaqueline — Comida al paso en el Cruce La Raya, San Clemente',
  description:
    'Picada campestre en el Cruce La Raya, San Clemente: pollo a las brasas, caldos y mariscos sobre la ruta que sube a la cordillera.',
  image: `${IMG}/terraza.webp`,
})

const NAV_LINKS = [
  { label: 'La picada', href: '#picada' },
  { label: 'De la cocina', href: '#cocina' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Los letreros del camino: lo que anuncia la casa al borde de la ruta.
const SENALES = ['Comida al paso', 'Pollo a las brasas', 'Patio campestre', 'Amplio estacionamiento']

const COCINA = [
  { img: 'machas', t: 'Mariscos de la temporada', d: 'machas a la parmesana, cuando el día las trae' },
  { img: 'sopa', t: 'Caldos de la casa', d: 'de olla, con verduras del patio' },
  { img: 'plato', t: 'Platos del día', d: 'mariscos con salsas de la casa' },
  { img: 'caldo', t: 'Para el frío de la ruta', d: 'algo caliente antes de seguir subiendo' },
]

const RESENAS = [
  { text: 'Acogedor. Una verdadera picada campestre.', who: 'Eduardo Rojas' },
  { text: 'Excelente atención. Comida muy rica. Fácil acceso y amplio estacionamiento.', who: 'Rodrigo Pacheco' },
  { text: 'Excelente atención y hospitalidad. Muy recomendable.', who: 'Danilo Briceño' },
  { text: 'Muy grato el ambiente.', who: 'Alexis Muñoz' },
]

function Flecha({ className = 'w-6 h-6' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 12h17m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function DondeJaquelinePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        .dj-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .dj-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .dj-btn:active { transform: translateY(0) scale(0.97); }
        .dj-btn:focus-visible { outline: 3px solid ${C.accent}; outline-offset: 3px; }
        .dj-senal { box-shadow: 4px 4px 0 ${C.ink}; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={`${display.className} font-bold`}
        theme={{
          over: 'dark',
          bar: 'rgba(243,237,224,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la terraza de la picada a pantalla completa ── */}
      <section id="inicio" className="relative">
        <div className="relative min-h-[100svh] flex flex-col justify-end">
          <Image
            src={`${IMG}/terraza.webp`}
            alt="Patio techado de Donde Jaqueline: galpón rústico con mesas al aire libre"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(180deg, rgba(26,30,18,0.45) 0%, rgba(26,30,18,0.08) 40%, rgba(26,30,18,0.72) 100%)',
            }}
            aria-hidden="true"
          />
          {/* Señal direccional */}
          <div className="absolute top-[76px] right-4 md:right-8 rotate-2">
            <div
              className={`${display.className} dj-senal inline-flex items-center gap-3 px-5 py-2.5 border-2 uppercase tracking-wide font-bold text-base md:text-lg`}
              style={{ backgroundColor: C.senal, borderColor: C.ink, color: C.ink }}
            >
              Comida al paso <Flecha className="w-5 h-5" />
            </div>
          </div>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 w-full">
            <Reveal>
              <h1
                className={`${display.className} font-bold leading-[0.98] tracking-tight text-[clamp(2.6rem,9vw,5.4rem)] max-w-3xl`}
                style={{ color: C.onDark }}
              >
                La picada del{' '}
                <em className="not-italic" style={{ color: '#F0C96B' }}>Cruce La Raya</em>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base md:text-lg leading-relaxed max-w-md mt-5 mb-7" style={{ color: 'rgba(246,240,223,0.92)' }}>
                Pollo a las brasas, caldos y mariscos sobre la ruta que sube a
                la cordillera, en San Clemente.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} dj-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                  style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
                >
                  Preguntar qué hay hoy
                </a>
                <a
                  href="#llegar"
                  className={`${mono.className} dj-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                  style={{ borderColor: C.onDark, color: C.onDark }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <p className={`${mono.className} text-xs uppercase tracking-[0.18em] mt-7 max-w-[260px]`} style={{ color: 'rgba(246,240,223,0.85)' }}>
                Cruce La Raya · {BIZ.city}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Poste de señales: lo que anuncia la casa ── */}
      <section id="picada" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 md:col-span-6">
            <Reveal>
              <h2 className={`${display.className} font-bold text-[clamp(2rem,5.5vw,3.6rem)] leading-[1] tracking-tight mb-5`} style={{ color: C.ink }}>
                De esas picadas que se
                <em> avisan desde la ruta</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                En el Cruce La Raya, camino a Vilches, la casa recibe a quienes
                suben a la cordillera con platos caseros y un patio techado.
                En su ficha de Google se anuncia como «Pollo a las Brasas»:
                ese es el sello de la casa.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 md:col-span-6">
            <Reveal delay={120}>
              <ul className="space-y-4">
                {SENALES.map((s, i) => (
                  <li
                    key={s}
                    className={`${display.className} dj-senal flex items-center justify-between gap-4 px-6 py-4 border-2 uppercase tracking-wide font-bold text-lg md:text-2xl ${i % 2 ? 'rotate-[0.8deg]' : '-rotate-[0.8deg]'}`}
                    style={{ backgroundColor: C.senal, borderColor: C.ink, color: C.ink }}
                  >
                    {s}
                    <Flecha className="w-6 h-6 md:w-7 md:h-7 shrink-0" />
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── De la cocina: mesa corrida de la picada ── */}
      <section id="cocina" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: '#F0C96B' }}>
              Fotos reales de su ficha de Google
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(2rem,5vw,3.4rem)] leading-[1] tracking-tight mb-10`} style={{ color: C.onDark }}>
              Lo que llega a la mesa
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <Reveal className="col-span-12 md:col-span-7">
              <figure>
                <div className="relative aspect-[4/3] md:aspect-[4/5] overflow-hidden rounded-2xl border-2" style={{ borderColor: 'rgba(246,240,223,0.35)' }}>
                  <Image
                    src={`${IMG}/machas.webp`}
                    alt="Machas a la parmesana servidas en la mesa de Donde Jaqueline, con vino"
                    fill
                    sizes="(min-width: 768px) 56vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <p className={`${display.className} font-bold text-lg md:text-xl`} style={{ color: C.onDark }}>{COCINA[0].t}</p>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(246,240,223,0.7)' }}>{COCINA[0].d}</p>
                </figcaption>
              </figure>
            </Reveal>
            <div className="col-span-12 md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-5">
              {COCINA.slice(1).map((p, i) => (
                <Reveal key={p.img} delay={100 + i * 80}>
                  <figure className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="relative w-full md:w-40 aspect-[4/3] md:h-28 shrink-0 overflow-hidden rounded-xl border-2" style={{ borderColor: 'rgba(246,240,223,0.35)' }}>
                      <Image
                        src={`${IMG}/${p.img}.webp`}
                        alt={`${p.t} en Donde Jaqueline`}
                        fill
                        sizes="(min-width: 768px) 14vw, 44vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption>
                      <p className={`${display.className} font-bold text-base md:text-lg leading-tight`} style={{ color: C.onDark }}>{p.t}</p>
                      <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.12em] mt-1`} style={{ color: 'rgba(246,240,223,0.7)' }}>{p.d}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={160}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-8`} style={{ color: 'rgba(246,240,223,0.7)' }}>
              La cocina es de temporada: lo del día se pregunta por WhatsApp
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: el libro de la picada ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <h2 className={`${display.className} font-bold text-[clamp(2rem,5vw,3.4rem)] leading-[1] tracking-tight mb-4`} style={{ color: C.ink }}>
            Los que pararon
          </h2>
          <p className="text-sm md:text-base max-w-lg mb-10" style={{ color: C.muted }}>
            Reseñas reales de su ficha de Google, de automovilistas y visitas
            del sector.
          </p>
        </Reveal>
        <ul>
          {RESENAS.map((r, i) => (
            <Reveal key={r.who} delay={i * 70}>
              <li className="py-6 border-t first:border-t-0" style={{ borderColor: C.line }}>
                <figure className="flex flex-col md:flex-row md:items-baseline gap-3 md:gap-8">
                  <span className="shrink-0 md:w-40">
                    <Stars value={5} color={C.accent} className="w-4 h-4" />
                    <span className={`${mono.className} block text-[11px] uppercase tracking-[0.14em] mt-2`} style={{ color: C.muted }}>
                      {r.who}
                    </span>
                  </span>
                  <blockquote className={`${display.className} text-xl md:text-2xl leading-snug font-medium`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
        <Reveal delay={160}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} inline-block mt-7 text-xs uppercase tracking-[0.16em] font-bold underline underline-offset-4 decoration-2 tap-44`}
            style={{ color: C.ink, textDecorationColor: C.accent }}
          >
            Ver su ficha en Google Maps →
          </a>
        </Reveal>
      </section>

      {/* ── Cómo llegar: la señal final ── */}
      <section id="llegar" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
          <Reveal className="col-span-12 md:col-span-7 order-2 md:order-1">
            <div className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] md:aspect-auto md:h-full min-h-[300px]" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 block w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-5 order-1 md:order-2" delay={100}>
            <div className={`${display.className} dj-senal px-6 py-5 border-2 flex items-center justify-between gap-4 uppercase font-bold text-xl md:text-2xl tracking-wide`} style={{ backgroundColor: C.senal, borderColor: C.ink, color: C.ink }}>
              Cruce La Raya <Flecha className="w-7 h-7 shrink-0" />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-2 mt-5 mb-5" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/patio.webp`}
                alt="Entrada del patio de Donde Jaqueline: cortaviento de cañas y mesa del local"
                fill
                sizes="(min-width: 768px) 40vw, 92vw"
                className="object-cover"
              />
            </div>
            <address className="not-italic text-sm md:text-base leading-relaxed font-medium" style={{ color: C.ink }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} dj-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full tap-44`}
                style={{ backgroundColor: C.accent, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} dj-btn text-sm font-bold uppercase tracking-[0.12em] px-7 py-3 rounded-full border-2 tap-44`}
                style={{ borderColor: C.ink, color: C.ink }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ borderTop: `1px solid ${C.line}`, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7">
          <p className={`${display.className} font-bold text-xl leading-tight`}>{BIZ.name}</p>
          <address className="not-italic text-xs leading-relaxed mt-1" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} ·{' '}
            <a href={`tel:+${BIZ.phone}`} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: C.line }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.muted }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.ink }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Fotos y reseñas reales de su ficha de Google;
            horarios y carta del día se confirman por WhatsApp.{' '}
            <a href={whatsappLink('demo')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.accent }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
