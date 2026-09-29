import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, HORAS, REGISTRO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
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

/** Hoja de prueba de imprenta: papel, tinta negra y el azul del JET. */
const C = {
  paper: '#FBFAF6',
  ink: '#141414',
  jet: '#2056C8',
  cyan: '#00AEEF',
  magenta: '#EC008C',
  yellow: '#FFD200',
  muted: '#6B6B66',
  line: 'rgba(20,20,20,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'colorjet-una-buena-impresion',
  title: 'ColorJet — Imprenta gráfica en Talca',
  description:
    'Imprenta gráfica en 11 Norte 1238, Talca. Gigantografías, vinilos, señalética e impresión con 5.0 estrellas perfectas en Google.',
  image: `${IMG}/backdrop-congreso.webp`,
})

const NAV_LINKS = [
  { label: 'Registro', href: '#registro' },
  { label: 'Prueba de clientes', href: '#prueba' },
  { label: 'El taller', href: '#taller' },
]

const CMYK = [
  { c: C.cyan, n: 'C' },
  { c: C.magenta, n: 'M' },
  { c: C.yellow, n: 'Y' },
  { c: C.ink, n: 'K' },
]

/** Barra de control CMYK de imprenta (CSS, identidad del rubro). */
function ColorBar({ className = '' }: { className?: string }) {
  return (
    <div className={`flex h-2.5 ${className}`} aria-hidden="true">
      {CMYK.map((b) => (
        <span key={b.n} className="flex-1" style={{ backgroundColor: b.c }} />
      ))}
    </div>
  )
}

/** Marcas de registro en las cuatro esquinas de una "prueba" (CSS + mono). */
function ProofMarks() {
  const pos = [
    'top-0 left-0 border-t border-l',
    'top-0 right-0 border-t border-r',
    'bottom-0 left-0 border-b border-l',
    'bottom-0 right-0 border-b border-r',
  ]
  return (
    <>
      {pos.map((p) => (
        <span key={p} className={`absolute w-3.5 h-3.5 ${p}`} style={{ borderColor: C.jet }} aria-hidden="true" />
      ))}
      <span className={`${mono.className} absolute top-1 right-6 text-[10px]`} style={{ color: C.jet }} aria-hidden="true">+</span>
      <span className={`${mono.className} absolute bottom-1 left-6 text-[10px]`} style={{ color: C.jet }} aria-hidden="true">+</span>
    </>
  )
}

export default function ColorJetPage() {
  return (
    <div
      className={`${body.variable} ${display.variable} ${mono.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body), system-ui, sans-serif' }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} text-xl tracking-tight uppercase`}>
            Color<span style={{ color: C.jet }}>Jet</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={`tel:${BIZ.phoneTel}`}
        ctaLabel="Llamar"
        theme={{ over: 'light', bar: C.paper, ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.paper }}
      />

      {/* ── Hoja de prueba: el titular es la evidencia ── */}
      <header className="relative">
        <ColorBar className="absolute inset-x-0 top-0" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14">
          <div className="relative border p-6 md:p-12" style={{ borderColor: C.line }}>
            <ProofMarks />
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.3em] uppercase`} style={{ color: C.muted }}>
              Prueba nº 01 · Imprenta · {BIZ.address} · {BIZ.city}
            </p>
            <h1 className={`${display.className} uppercase mt-6 leading-[0.95] text-[clamp(2.6rem,9vw,6rem)]`}>
              Una buena<br />
              impresión,<br />
              <span style={{ color: C.jet }}>medida en estrellas.</span>
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <span className={`${display.className} text-6xl md:text-8xl leading-none`} style={{ color: C.ink }}>
                {BIZ.rating.toFixed(1)}
              </span>
              <span className="flex flex-col gap-1.5">
                <Stars value={5} color={C.jet} className="w-5 h-5" />
                <span className={`${mono.className} text-[11px] tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas en Google · todas 5 estrellas
                </span>
              </span>
            </div>
            <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed" style={{ color: C.muted }}>
              Gigantografías, vinilos, señalética e impresión en el centro de
              Talca. El puntaje perfecto no lo declara el taller: lo dejaron
              sus clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${BIZ.phoneTel}`}
                className={`${mono.className} font-semibold uppercase tracking-[0.12em] text-sm px-7 py-3.5 tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ backgroundColor: C.ink, color: C.paper, outlineColor: C.jet }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
              <a
                href="#registro"
                className={`${mono.className} font-semibold uppercase tracking-[0.12em] text-sm px-7 py-3.5 border-2 tap-44 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2`}
                style={{ borderColor: C.ink, color: C.ink, outlineColor: C.jet }}
              >
                Ver registro de trabajos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Registro de trabajos: pruebas con marcas de corte ── */}
      <section id="registro" className="max-w-6xl mx-auto px-5 md:px-8 pb-6">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8 border-b-2 pb-5" style={{ borderColor: C.ink }}>
            <h2 className={`${display.className} uppercase text-[clamp(1.8rem,5.5vw,3.2rem)] leading-none`}>
              Registro de trabajos
            </h2>
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.18em] uppercase`} style={{ color: C.muted }}>
              Publicados en su ficha comercial
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {REGISTRO.map((t, i) => (
            <Reveal key={t.src} delay={(i % 3) * 90}>
              <figure className="relative border p-2.5 bg-white" style={{ borderColor: C.line }}>
                <ProofMarks />
                <div className="overflow-hidden">
                  <Image
                    src={t.src}
                    alt={t.alt}
                    width={800}
                    height={600}
                    className="w-full h-auto transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className="pt-3 pb-1 px-1 flex flex-col gap-0.5 md:flex-row md:items-baseline md:justify-between md:gap-3">
                  <span className="font-bold text-sm md:text-base leading-tight">{t.title}</span>
                  <span className={`${mono.className} text-[9px] md:text-[10px] tracking-[0.16em] uppercase`} style={{ color: C.jet }}>
                    {String(i + 1).padStart(2, '0')}·{t.job}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Prueba de clientes: citas sobre barra CMYK ── */}
      <section id="prueba" className="mt-16" style={{ backgroundColor: C.ink }}>
        <ColorBar />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-white">
          <Reveal>
            <p className={`${mono.className} text-[11px] tracking-[0.3em] uppercase mb-4`} style={{ color: C.cyan }}>
              Prueba de clientes · Google
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(1.8rem,5.5vw,3.2rem)] leading-tight mb-10`}>
              29 reseñas.<br />Cero menos de cinco.
            </h2>
          </Reveal>
          <div className="space-y-0">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 90}>
                <blockquote className="border-t py-7 md:py-8 grid md:grid-cols-[auto_1fr_auto] gap-4 md:gap-8 items-baseline" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
                  <span className={`${mono.className} text-[11px] tracking-[0.2em]`} style={{ color: C.yellow }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="text-lg md:text-2xl leading-snug max-w-3xl" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    “{r.text}”
                  </p>
                  <footer className={`${mono.className} text-[11px] tracking-[0.16em] uppercase md:text-right`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                    {r.author}<br />
                    <Stars value={r.stars} color={C.yellow} className="w-3.5 h-3.5 md:justify-end md:ml-auto mt-1" />
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase mt-8`} style={{ color: 'rgba(255,255,255,0.55)' }}>
              {BIZ.rating} · {BIZ.reviews} reseñas verificadas en su ficha de Google
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── El taller: ficha de imprenta + mapa ── */}
      <section id="taller" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div className="relative border p-6 md:p-8 bg-white" style={{ borderColor: C.line }}>
              <ProofMarks />
              <div className="flex items-center gap-4 border-b pb-5" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/logo.webp`}
                  alt={`Logo de ${BIZ.name}: COLOR en negro, JET en azul, con la frase una buena impresión`}
                  width={200}
                  height={200}
                  className="h-14 w-auto"
                />
                <div>
                  <p className={`${display.className} uppercase text-xl leading-tight`}>{BIZ.name}</p>
                  <p className={`${mono.className} text-[10px] tracking-[0.18em] uppercase`} style={{ color: C.jet }}>{BIZ.tagline}</p>
                </div>
              </div>
              <dl className="mt-5 space-y-3.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase pt-0.5`} style={{ color: C.muted }}>Dirección</dt>
                  <dd className="font-semibold text-right">{BIZ.address}, {BIZ.city}</dd>
                </div>
                <div className="flex justify-between gap-4 border-t pt-3.5" style={{ borderColor: C.line }}>
                  <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase pt-0.5`} style={{ color: C.muted }}>Teléfono</dt>
                  <dd className="font-semibold text-right">
                    <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-4 tap-44" style={{ textDecorationColor: C.jet }}>{BIZ.phoneDisplay}</a>
                  </dd>
                </div>
                {HORAS.map((h) => (
                  <div key={h.days} className="flex justify-between gap-4 border-t pt-3.5" style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} text-[10px] tracking-[0.18em] uppercase pt-0.5 shrink-0`} style={{ color: C.muted }}>{h.days}</dt>
                    <dd className="font-semibold text-right">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className={`${mono.className} font-semibold uppercase tracking-[0.12em] text-sm px-6 py-3 tap-44 transition-transform active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2`}
                  style={{ backgroundColor: C.jet, color: '#fff', outlineColor: C.jet }}
                >
                  Llamar a la imprenta
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} font-semibold uppercase tracking-[0.12em] text-sm px-6 py-3 border-2 tap-44 transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2`}
                  style={{ borderColor: C.ink, color: C.ink, outlineColor: C.jet }}
                >
                  Cómo llegar
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={130}>
            <div className="border-2 min-h-[320px] h-full overflow-hidden" style={{ borderColor: C.ink }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className={`${mono.className} text-[11px] tracking-[0.16em] uppercase mt-3`} style={{ color: C.muted }}>
              {BIZ.address}, {BIZ.city} — en Maps: «{BIZ.legal}»
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.ink, color: C.paper }}>
        <ColorBar />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-24 md:pb-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-2xl tracking-tight`}>
              Color<span style={{ color: C.cyan }}>Jet</span>{' '}
              <span className={`${mono.className} text-[10px] tracking-[0.2em]`} style={{ color: 'rgba(251,250,246,0.6)' }}>{BIZ.tagline}</span>
            </p>
            <address className="not-italic text-sm mt-1" style={{ color: 'rgba(251,250,246,0.8)' }}>
              {BIZ.address}, {BIZ.city} ·{' '}
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className={`${mono.className} text-[11px] leading-relaxed md:max-w-[26rem]`} style={{ color: 'rgba(251,250,246,0.6)' }}>
            Demo de muestra de Sitiazo: datos de su ficha pública de Google y Construex; textos de muestra.
          </p>
        </div>
      </footer>

      <CallFab href={`tel:${BIZ.phoneTel}`} label={`Llamar a ${BIZ.name}`} bg={C.jet} fg="#fff" />
    </div>
  )
}
