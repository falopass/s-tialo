import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, RESENAS, TRABAJOS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const condensed = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-condensed',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-mono',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})

/** Paleta sacada del letrero de la casa: azul marino + la Z lima. */
const C = {
  navy: '#12245C',
  navyDeep: '#0B1739',
  royal: '#2745A8',
  lime: '#D8E22E',
  limeSoft: '#EDF2B8',
  paper: '#F4F2EB',
  ink: '#161B2B',
  muted: '#5B6272',
  line: 'rgba(18,36,92,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'trazos-publicidad',
  title: 'Trazos Publicidad — Taller de imagen y rotulación en Talca',
  description:
    'Taller de impresión y rotulación en 5 Sur 1631, Talca. Gigantografías, rotulación vehicular, letreros, grabado láser y estampados. 4.1 estrellas en Google.',
  image: `${IMG}/bus.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'El taller', href: '#taller' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

export default function TrazosPage() {
  return (
    <div
      className={`${body.variable} ${display.variable} ${condensed.variable} ${mono.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body), system-ui, sans-serif' }}
    >
      <style>{`
        @keyframes tz-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .tz-marquee { animation: tz-marquee 36s linear infinite }
        @media (prefers-reduced-motion: reduce) { .tz-marquee { animation: none } }
        .tz-hang { box-shadow: 0 18px 0 -10px ${C.navyDeep}; }
      `}</style>

      <BlitzNav
        name={
          <span className="flex items-baseline gap-2">
            <span className={`${display.className} text-xl tracking-wide uppercase`}>
              Tra<span style={{ color: C.lime }}>z</span>os
            </span>
            <span className={`${mono.className} text-[10px] tracking-[0.22em] uppercase opacity-80`}>
              Publicidad
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={`tel:${BIZ.phoneTel}`}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.navyDeep, ink: '#fff', line: 'rgba(255,255,255,0.14)', btnBg: C.lime, btnInk: C.navyDeep }}
      />

      {/* ── Letrero principal ── */}
      <header style={{ backgroundColor: C.navy }} className="relative overflow-hidden">
        <div
          className="absolute inset-x-0 bottom-0 h-1.5"
          style={{ background: `repeating-linear-gradient(90deg, ${C.lime} 0 42px, transparent 42px 56px)` }}
          aria-hidden="true"
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20">
          <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-6`} style={{ color: C.lime }}>
            Taller de imagen · {BIZ.address} · {BIZ.city}
          </p>
          <div className="grid md:grid-cols-[1.35fr_1fr] gap-10 md:gap-14 items-center">
            <div>
              <h1
                className={`${display.className} uppercase leading-[0.98] text-white text-[clamp(2.9rem,9.5vw,6.2rem)]`}
              >
                Tu negocio,<br />
                del tamaño<br />
                <span style={{ color: C.lime }}>de la calle.</span>
              </h1>
              <p className="mt-6 text-base md:text-lg max-w-md leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                De una taza estampada a un bus entero: en {BIZ.address}, {BIZ.city},
                este taller imprime, diseña y rotula lo que tu marca necesita.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${condensed.className} font-semibold uppercase tracking-wide text-base px-7 py-3.5 tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  style={{ backgroundColor: C.lime, color: C.navyDeep }}
                >
                  Llamar al taller · {BIZ.phoneDisplay}
                </a>
                <a
                  href="#trabajos"
                  className={`${condensed.className} font-semibold uppercase tracking-wide text-base px-7 py-3.5 border-2 tap-44 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
                >
                  Ver los trabajos
                </a>
              </div>
            </div>
            <Reveal delay={120}>
              <figure className="tz-hang bg-white p-2.5 pb-3 rotate-[1.2deg]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt={`Fachada del taller ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                  width={900}
                  height={1200}
                  className="w-full h-auto"
                  priority
                />
                <figcaption className={`${mono.className} text-[11px] tracking-[0.16em] uppercase pt-2.5 px-1 flex justify-between`} style={{ color: C.muted }}>
                  <span>El taller</span>
                  <span>{BIZ.address}</span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ── Cinta de servicios (letrero corrido) ── */}
      <div style={{ backgroundColor: C.lime, color: C.navyDeep }} className="overflow-hidden border-y-4" aria-hidden="true">
        <div className="tz-marquee flex w-max items-center gap-10 py-3 pl-10">
          {[...SERVICIOS, ...SERVICIOS].map((s, i) => (
            <span key={i} className={`${condensed.className} font-bold uppercase tracking-wider text-lg whitespace-nowrap flex items-center gap-10`}>
              {s}
              <span className={`${display.className} text-sm`} aria-hidden="true">Z</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Trabajos colgados como pendones ── */}
      <section id="trabajos" className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,3.6rem)] leading-none`} style={{ color: C.navy }}>
              Trabajos en circulación
            </h2>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.2em] uppercase`} style={{ color: C.muted }}>
              Fotos de su ficha en Google Maps
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-x-6 gap-y-10">
          {TRABAJOS.map((t, i) => (
            <Reveal
              key={t.src}
              delay={(i % 2) * 110}
              className={i === 0 || i === 3 ? 'md:col-span-2' : ''}
            >
              <figure className="border-t-4 pt-3" style={{ borderColor: C.navy }}>
                <div className="overflow-hidden bg-white border" style={{ borderColor: C.line }}>
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={1200}
                    height={675}
                    className="w-full h-auto transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-4 pt-3">
                  <span className={`${condensed.className} font-semibold uppercase text-xl md:text-2xl tracking-wide`} style={{ color: C.navy }}>
                    {t.title}
                  </span>
                  <span className={`${mono.className} text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-right shrink-0`} style={{ color: C.muted }}>
                    {String(i + 1).padStart(2, '0')} / {t.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Índice de servicios ── */}
      <section id="taller" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <div>
            <Reveal>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,3.4rem)] leading-[1.02]`} style={{ color: C.navy }}>
                Lo que sale<br />de este taller
              </h2>
              <p className="mt-5 text-base leading-relaxed max-w-sm" style={{ color: C.muted }}>
                La lista pegada en su propia vitrina: si lleva tinta, vinilo o
                acrílico, acá lo hacen. Y si no está en la lista, se pregunta
                por teléfono.
              </p>
              <figure className="mt-8 bg-white border p-4 max-w-[320px]" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/logo.webp`}
                  alt={`Letrero de ${BIZ.name}: TRAZOS con la Z amarilla y un colibrí`}
                  width={640}
                  height={280}
                  className="w-full h-auto"
                />
                <figcaption className={`${mono.className} text-[10px] tracking-[0.18em] uppercase pt-3`} style={{ color: C.muted }}>
                  Su letrero, sobre la puerta
                </figcaption>
              </figure>
            </Reveal>
          </div>
          <ol>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s} delay={i * 45}>
                <li className="flex items-baseline gap-4 md:gap-6 py-3.5 border-b" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[11px] tracking-[0.18em] shrink-0`} style={{ color: C.royal }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className={`${condensed.className} font-semibold uppercase tracking-wide text-2xl md:text-3xl leading-none`} style={{ color: C.ink }}>
                    {s}
                  </span>
                  <span className="flex-1 border-b border-dotted translate-y-[-6px]" style={{ borderColor: C.line }} aria-hidden="true" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" style={{ backgroundColor: C.navyDeep }} className="text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
              <h2 className={`${display.className} uppercase text-[clamp(2rem,6vw,3.6rem)] leading-none`}>
                Lo que dicen en {BIZ.city}
              </h2>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.lime} className="w-5 h-5" />
                <span className={`${mono.className} text-xs tracking-[0.16em] uppercase`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 100}>
                <blockquote className="h-full flex flex-col border-t-4 pt-5" style={{ borderColor: C.lime }}>
                  <Stars value={r.stars} color={C.lime} className="w-4 h-4" />
                  <p className={`${condensed.className} text-xl md:text-[1.35rem] leading-snug mt-4 flex-1`} style={{ color: 'rgba(255,255,255,0.92)' }}>
                    “{r.text}”
                  </p>
                  <footer className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-5`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {r.author} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" style={{ backgroundColor: C.navy }} className="text-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] tracking-[0.26em] uppercase mb-5`} style={{ color: C.lime }}>
                Cotiza tu próximo letrero
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2.2rem,7vw,4.2rem)] leading-[0.98]`}>
                Cuéntanos qué<br />quieres rotular
              </h2>
              <div className="mt-8 space-y-2.5 text-base" style={{ color: 'rgba(255,255,255,0.85)' }}>
                <p>
                  <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 decoration-2 hover:text-white tap-44" style={{ textDecorationColor: C.lime }}>
                    {BIZ.phoneDisplay}
                  </a>
                  {' · '}
                  <a href={`tel:${BIZ.phone2Tel}`} className="underline underline-offset-4 decoration-2 hover:text-white tap-44" style={{ textDecorationColor: C.lime }}>
                    {BIZ.phone2Display}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${BIZ.email}`} className="underline underline-offset-4 hover:text-white tap-44" style={{ textDecorationColor: C.lime }}>
                    {BIZ.email}
                  </a>
                  {' · '}{BIZ.web}
                </p>
                <p>{BIZ.address}, {BIZ.city} — en Maps aparece como «{BIZ.name}».</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${condensed.className} font-semibold uppercase tracking-wide text-base px-7 py-3.5 tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  style={{ backgroundColor: C.lime, color: C.navyDeep }}
                >
                  Llamar ahora
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${condensed.className} font-semibold uppercase tracking-wide text-base px-7 py-3.5 border-2 tap-44 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                  style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="border-2 min-h-[320px] h-full overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.35)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24 md:pb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-2xl tracking-wide`}>
              Tra<span style={{ color: C.lime }}>z</span>os{' '}
              <span className={`${mono.className} text-xs tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>PUBLICIDAD</span>
            </p>
            <address className="not-italic text-sm mt-1" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:max-w-[26rem]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
            Demo de muestra de Sitiazo: datos y fotos de su ficha pública de Google; textos de muestra.
          </p>
        </div>
      </footer>

      <CallFab href={`tel:${BIZ.phoneTel}`} label={`Llamar a ${BIZ.name}`} bg={C.lime} fg={C.navyDeep} />
    </div>
  )
}
