import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HOURS, REVIEWS } from './content'

const IMG = '/demos/vivero-y-jardin-los-gomeros'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  paper: '#F7F3E8',
  paperDeep: '#EFE8D6',
  green: '#1E3320',
  greenMid: '#2E5B2B',
  ink: '#22301F',
  muted: '#5D6650',
  accent: '#C4622D',
  accentSoft: 'rgba(196,98,45,0.12)',
  line: 'rgba(30,51,32,0.16)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-y-jardin-los-gomeros',
  title: 'Vivero y Jardín Los Gomeros - Molina',
  description:
    'Vivero en Buen Paz km 13, Molina. Plantas de temporada, ornamentales y árboles, atendido por sus dueños. Escríbenos por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'El vivero', href: '#vivero' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const GUIA = [
  {
    n: '01',
    t: 'Plantas de temporada',
    d: 'Petunias, alelíes y lo que florece ahora mismo en el invernadero.',
    photo: 'petunias.webp',
  },
  {
    n: '02',
    t: 'Ornamentales y de patio',
    d: 'Maceteros ordenados en las mesas del vivero, listos para llevar.',
    photo: 'estantes.webp',
  },
  {
    n: '03',
    t: 'Árboles y arbolitos',
    d: 'Ejemplares en bolsa, en fila esperando tu terreno o jardín.',
    photo: 'arboles-bolsa.webp',
  },
]

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: C.accent }}>
      <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" style={{ color: C.greenMid }}>
        <path d="M7 1 C3 5 3 9 7 13 C11 9 11 5 7 1 Z M7 13 L7 7" fill="none" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      {children}
    </p>
  )
}

export default function GomerosDemo() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <Image
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              width={34}
              height={34}
              className="rounded-full object-cover"
            />
            <span className={`${display.className} font-semibold tracking-tight`}>{BIZ.short}</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{ over: 'dark', bar: 'rgba(247,243,232,0.95)', ink: C.ink, line: C.line, btnBg: C.green, btnInk: '#F7F3E8' }}
        fontClass={body.className}
      />

      {/* ── PORTADA ──────────────────────────────────────────── */}
      <section id="inicio" className="relative min-h-[100svh] flex items-end overflow-hidden">
        <Image
          src={`${IMG}/invernadero.webp`}
          alt={`Invernadero de ${BIZ.name} con hileras de plantas en Buen Paz, Molina`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(30,51,32,0.5) 0%, rgba(30,51,32,0.2) 38%, rgba(30,51,32,0.82) 66%, #1E3320 100%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pb-12 pt-36 w-full" style={{ color: '#F7F3E8' }}>
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em]" style={{ color: '#D9C98F' }}>
              Vivero y jardín - Buen Paz, Molina
            </p>
            <h1 className={`${display.className} mt-4 text-[34px] leading-[1.02] md:text-6xl font-semibold tracking-tight`}>
              Plantas sanas,
              <br />
              <em className="font-normal">al km 13 de Buen Paz.</em>
            </h1>
            <p className="mt-4 text-[15px] md:text-lg max-w-md" style={{ color: 'rgba(247,243,232,0.85)' }}>
              Un vivero familiar de Molina, atendido por sus dueños. Variedad real, precios accesibles.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex h-[50px] items-center rounded-full px-6 text-[15px] font-semibold"
                style={{ backgroundColor: C.accent, color: '#FFF9EF' }}
              >
                Consultar por WhatsApp
              </a>
              <div
                className="inline-flex h-[50px] items-center gap-2.5 rounded-full px-5"
                style={{ border: '1px solid rgba(247,243,232,0.4)', backgroundColor: 'rgba(30,51,32,0.5)' }}
              >
                <Stars value={BIZ.rating} color="#E9C46A" className="w-3.5 h-3.5" />
                <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: '#F7F3E8' }}>
                  {BIZ.ratingLabel} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── GUÍA DEL VIVERO ──────────────────────────────────── */}
      <section id="vivero" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Kicker>Guía del vivero</Kicker>
          <h2 className={`${display.className} mt-4 text-3xl md:text-5xl font-semibold tracking-tight max-w-[22ch]`}>
            Qué encuentras entre estas mesas
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14">
          {GUIA.map((g, i) => (
            <Reveal key={g.n} delay={i * 70}>
              <article
                className={`grid md:grid-cols-[72px_1fr_300px] gap-4 md:gap-8 items-center py-7 border-t last:border-b ${
                  i % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}
                style={{ borderColor: C.line }}
              >
                <span
                  className={`${display.className} text-4xl md:text-5xl font-light md:[direction:ltr]`}
                  style={{ color: C.accent }}
                >
                  {g.n}
                </span>
                <div className="md:[direction:ltr]">
                  <h3 className={`${display.className} text-xl md:text-2xl font-semibold tracking-tight`}>
                    {g.t}
                  </h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed max-w-md" style={{ color: C.muted }}>
                    {g.d}
                  </p>
                </div>
                <figure className="overflow-hidden rounded-xl md:[direction:ltr]" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/${g.photo}`}
                    alt={`${g.t} en ${BIZ.name}`}
                    width={600}
                    height={380}
                    className="w-full object-cover aspect-[8/5]"
                  />
                </figure>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── FOTO A SANGRÉ: PETUNIAS ──────────────────────────── */}
      <section className="relative">
        <div className="relative h-[58vh] md:h-[72vh]">
          <Image
            src={`${IMG}/petunias.webp`}
            alt="Petunias en flor en el vivero Los Gomeros"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(30,51,32,0.45) 0%, rgba(30,51,32,0) 30%, rgba(30,51,32,0) 62%, rgba(30,51,32,0.6) 100%)' }}
          />
          <div className="absolute inset-x-0 top-6 flex justify-center px-5">
            <p
              className="rounded-full px-4 py-2 text-[10px] md:text-xs font-semibold uppercase tracking-[0.24em] text-center"
              style={{ backgroundColor: 'rgba(30,51,32,0.78)', color: '#F7F3E8', border: '1px solid rgba(247,243,232,0.3)' }}
            >
              En temporada - directo del invernadero
            </p>
          </div>
        </div>
      </section>

      {/* ── ATENDIDO POR SUS DUEÑOS ──────────────────────────── */}
      <section className="py-16 md:py-24" style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_320px] gap-10 items-center">
          <Reveal>
            <div>
              <Kicker>Lo que repite la gente</Kicker>
              <blockquote
                className={`${display.className} mt-6 text-[26px] md:text-4xl leading-[1.15] font-medium tracking-tight max-w-[24ch]`}
                style={{ color: '#F7F3E8' }}
              >
                “Muy lindo lugar, <em>atendido por sus dueños</em>. Encuentras de toda variedad de plantas y es económico.”
              </blockquote>
              <p className="mt-5 text-[12px] font-semibold uppercase tracking-[0.2em]" style={{ color: 'rgba(247,243,232,0.55)' }}>
                Lili Valenzuela - reseña en Google
              </p>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <figure className="overflow-hidden rounded-xl" style={{ border: '1px solid rgba(247,243,232,0.25)' }}>
              <Image
                src={`${IMG}/mesas.webp`}
                alt={`Mesas del invernadero de ${BIZ.name} con plantas en macetero`}
                width={800}
                height={600}
                className="w-full object-cover aspect-[4/3]"
              />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ──────────────────────────────────────────── */}
      <section id="resenas" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Kicker>Reseñas de Google</Kicker>
          <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-2">
            <h2 className={`${display.className} text-3xl md:text-5xl font-semibold tracking-tight`}>
              {BIZ.ratingLabel} de 5
            </h2>
            <Stars value={BIZ.rating} color={C.accent} className="w-5 h-5 mb-1.5" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-1.5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas
            </span>
          </div>
        </Reveal>
        <div className="mt-10 md:mt-12 grid sm:grid-cols-2 gap-4 md:gap-6">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 70}>
              <blockquote
                className="relative h-full rounded-xl bg-white p-6 pt-8"
                style={{ border: `1px solid ${C.line}`, boxShadow: '0 2px 0 rgba(30,51,32,0.08)' }}
              >
                <span
                  aria-hidden
                  className="absolute top-3 left-1/2 -translate-x-1/2 h-2.5 w-2.5 rounded-full"
                  style={{ backgroundColor: C.paper, border: `1px solid ${C.line}` }}
                />
                <Stars value={5} color={C.accent} className="w-3.5 h-3.5" />
                <p className="mt-3 text-[15px] leading-relaxed">{r.txt}</p>
                <footer className="mt-4 text-[10px] font-semibold uppercase tracking-[0.2em]" style={{ color: C.muted }}>
                  {r.name} · {r.when}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── CÓMO LLEGAR ──────────────────────────────────────── */}
      <section id="llegar" className="border-t" style={{ borderColor: C.line, backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>Cómo llegar</Kicker>
            <h2 className={`${display.className} mt-4 text-3xl md:text-4xl font-semibold tracking-tight max-w-[24ch]`}>
              Por Buen Paz, al km 13: hay letrero en la ruta
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-[1fr_1fr] gap-10 items-start">
            <Reveal>
              <div>
                <figure className="overflow-hidden rounded-xl" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={`${IMG}/letrero-ruta.webp`}
                    alt="Señalética de la ruta hacia Molina e Itahue, cerca del vivero Los Gomeros"
                    width={800}
                    height={1000}
                    className="w-full object-cover aspect-[4/3]"
                  />
                </figure>
                <dl className="mt-8 space-y-5">
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                      Dirección
                    </dt>
                    <dd className={`${display.className} mt-1 text-lg font-semibold`}>{BIZ.address}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                      Horario
                    </dt>
                    <dd className="mt-1 space-y-1">
                      {HOURS.map((h) => (
                        <p key={h.d} className="text-[15px]" style={{ color: C.muted }}>
                          <span className="inline-block w-44 font-semibold" style={{ color: C.ink }}>{h.d}</span>
                          {h.h}
                        </p>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
                      Facebook
                    </dt>
                    <dd className="mt-1 text-base font-semibold">facebook.com/{BIZ.facebook}</dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex h-[50px] items-center rounded-full px-6 text-[15px] font-semibold"
                    style={{ backgroundColor: C.green, color: '#F7F3E8' }}
                  >
                    Consultar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex h-[50px] items-center rounded-full px-6 text-[15px] font-semibold"
                    style={{ border: `1px solid ${C.green}`, color: C.green }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="overflow-hidden rounded-xl md:sticky md:top-24" style={{ border: `1px solid ${C.line}` }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                  className="w-full aspect-[4/3] md:aspect-[4/5]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── COLOFÓN ──────────────────────────────────────────── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${display.className} text-sm font-semibold tracking-tight`}>{BIZ.name}</p>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em]" style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escríbenos por WhatsApp - ${BIZ.short}`} />
    </main>
  )
}
