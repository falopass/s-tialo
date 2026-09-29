import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, SERVICES, WORKS, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
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
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/* Paleta sacada de su letrero: vinilo verde lima sobre la reja negra. */
const C = {
  bg: '#0C0E09',
  panel: '#151A10',
  deep: '#070806',
  ink: '#EFF4E0',
  soft: '#B3C09A',
  muted: '#7E8A6C',
  lime: '#9DCB3B',
  limeInk: '#0C0E09',
  line: 'rgba(239,244,224,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'koke-graf-publicidad',
  title: 'Koke Graf Publicidad — Letreros, vallas y rotulación en Talca',
  description:
    'Agencia de publicidad en Cancha Rayada 1679, Talca. Letreros, vallas, rotulación vehicular e impresión gran formato.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Trabajos', href: '#trabajos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const MARQUEE = [
  'Impresión gran formato',
  'Letreros',
  'Vallas publicitarias',
  'Rotulación vehicular',
  'Pendones',
  'Señalética',
]

export default function KokeGrafDemo() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={
          <span className={display.className} style={{ letterSpacing: '0.02em' }}>
            Koke<span style={{ color: C.lime }}>Graf</span>
          </span>
        }
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.bg, ink: C.ink, line: C.line, btnBg: C.lime, btnInk: C.limeInk }}
      />

      {/* ── HERO: la valla ─────────────────────────────── */}
      <section id="inicio" className="relative pt-[104px] md:pt-[132px] pb-10 md:pb-14 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5`} style={{ color: C.lime }}>
              Agencia de publicidad · Talca
            </p>
          </Reveal>
          <Reveal>
            <h1
              className={`${display.className} uppercase leading-[0.98] text-[2.6rem] md:text-[5rem] lg:text-[5.6rem] max-w-4xl`}
              style={{ letterSpacing: '0.01em' }}
            >
              Letreros que se leen{' '}
              <span style={{ color: C.lime }}>desde la calle</span>
            </h1>
          </Reveal>
          <Reveal className="mt-6 max-w-xl">
            <p className="text-base md:text-lg leading-relaxed" style={{ color: C.soft }}>
              {BIZ.name} hace que un negocio se vea: vallas, letreros de fachada,
              rotulación vehicular e impresión en gran formato, desde su taller
              en {BIZ.address}.
            </p>
          </Reveal>
          <Reveal className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={CALL_LINK}
              className={`${display.className} uppercase text-sm md:text-base px-6 py-3 transition-transform active:scale-95`}
              style={{ backgroundColor: C.lime, color: C.limeInk }}
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

          {/* Fachada enmarcada como valla */}
          <Reveal className="mt-10 md:mt-14">
            <figure className="border" style={{ borderColor: C.line, backgroundColor: C.panel }}>
              <div className="grid md:grid-cols-[1fr_320px]">
                <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[380px]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt={`Fachada de ${BIZ.name} en ${BIZ.address}, ${BIZ.city}, con su letrero verde de impresión full color`}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="p-5 md:p-6 flex flex-col justify-center gap-3 border-t md:border-t-0 md:border-l" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                    La casa
                  </span>
                  <p className={`${display.className} text-xl md:text-2xl uppercase leading-tight`}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm" style={{ color: C.soft }}>
                    El taller con el letrero verde de «impresión full color»
                    que se ve pasando por Cancha Rayada.
                  </p>
                </figcaption>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta vinilo: marquee de servicios ─────────── */}
      <div className="overflow-hidden py-3 border-y" style={{ backgroundColor: C.lime, borderColor: C.lime }}>
        <div className="marquee-track flex w-max gap-8 items-center">
          {[...MARQUEE, ...MARQUEE].map((s, i) => (
            <span key={i} className={`${display.className} uppercase text-sm md:text-base whitespace-nowrap flex items-center gap-8`} style={{ color: C.limeInk }}>
              {s} <span aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── TRABAJOS INSTALADOS ────────────────────────── */}
      <section id="trabajos" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-none`}>
              Instalado <span style={{ color: C.lime }}>en terreno</span>
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed" style={{ color: C.soft }}>
              Trabajos que publica en su Instagram: la prueba está en la calle,
              no en un catálogo.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORKS.map((w) => (
              <Reveal key={w.src}>
                <figure className="border" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={w.src}
                      alt={w.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="p-4 flex items-baseline justify-between gap-3">
                    <span className="text-sm font-semibold">{w.client}</span>
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em] shrink-0`} style={{ color: C.lime }}>
                      {w.piece}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal>
              <div className="border h-full min-h-[180px] p-5 flex flex-col justify-between" style={{ borderColor: C.line, backgroundColor: C.deep }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em]`} style={{ color: C.muted }}>
                  El siguiente letrero
                </p>
                <p className={`${display.className} text-xl uppercase leading-tight`}>
                  Puede ser <span style={{ color: C.lime }}>el tuyo</span>
                </p>
                <a href={CALL_LINK} className="text-sm font-semibold mt-3 underline underline-offset-4" style={{ color: C.lime }}>
                  {BIZ.phoneDisplay} →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS: tabla de taller ─────────────────── */}
      <section id="servicios" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-none`}>
              Lo que sale <span style={{ color: C.lime }}>del taller</span>
            </h2>
          </Reveal>
          <div className="mt-8 border-t" style={{ borderColor: C.line }}>
            {SERVICES.map((s) => (
              <Reveal key={s.name}>
                <div className="py-5 md:py-6 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-8 border-b" style={{ borderColor: C.line }}>
                  <h3 className={`${display.className} uppercase text-lg md:text-2xl md:w-[45%]`}>{s.name}</h3>
                  <p className="text-sm md:text-base" style={{ color: C.soft }}>{s.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────── */}
      <section id="resenas" className="px-5 md:px-8 py-14 md:py-20">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex flex-wrap items-end gap-x-6 gap-y-3">
              <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-none`}>
                Lo que dice <span style={{ color: C.lime }}>la calle</span>
              </h2>
              <div className="flex items-center gap-2 pb-1">
                <Stars value={BIZ.rating} color={C.lime} />
                <span className={`${mono.className} text-xs`} style={{ color: C.soft }}>
                  {BIZ.ratingDisplay} · {BIZ.reviews} reseñas en Google
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <Reveal key={r.name}>
                <blockquote className="h-full border p-5 flex flex-col gap-4" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: C.soft }}>
                    “{r.text}”
                  </p>
                  <footer className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.lime }}>
                    — {r.name}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ──────────────────────────────────── */}
      <section id="ubicacion" className="px-5 md:px-8 py-14 md:py-20" style={{ backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
          <Reveal>
            <h2 className={`${display.className} uppercase text-3xl md:text-5xl leading-none`}>
              Pasa por <span style={{ color: C.lime }}>el taller</span>
            </h2>
            <dl className="mt-8 space-y-4">
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="text-lg font-semibold">{BIZ.address}, {BIZ.city}</dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-1`} style={{ color: C.muted }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="text-lg font-semibold underline underline-offset-4" style={{ color: C.lime }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-2`} style={{ color: C.muted }}>Horario</dt>
                <dd className="space-y-1.5">
                  {HOURS.map((h) => (
                    <p key={h.d} className="flex justify-between gap-6 text-sm max-w-[300px]">
                      <span style={{ color: C.soft }}>{h.d}</span>
                      <span className="font-semibold text-right">{h.h}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </Reveal>
          <Reveal>
            <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[360px] border" style={{ borderColor: C.line }}>
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
            {BIZ.name} · {BIZ.city} · {BIZ.instagram}
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

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.short}`} bg={C.lime} fg={C.limeInk} />

      <style>{`
        .marquee-track { animation: koke-marquee 22s linear infinite; }
        @keyframes koke-marquee { to { transform: translateX(-50%); } }
        @media (prefers-reduced-motion: reduce) { .marquee-track { animation: none; } }
      `}</style>
    </div>
  )
}
