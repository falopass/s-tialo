import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, CATALOGO, COMPRA, IMG, MAPS_EMBED, MAPS_URL, PROCESO, SELLOS, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

/**
 * Lana y telar: crema de vellón, café de nogal y un solo acento,
 * el carmín de cochinilla que Laura usa para teñir.
 */
const C = {
  wool: '#F4EDDE',
  woolDeep: '#EBE0C9',
  card: '#FBF6EA',
  ink: '#33251F',
  muted: '#6E5D4B',
  line: 'rgba(51,37,31,0.16)',
  accent: '#9A3138',
  accentInk: '#FFFFFF',
}

const stitch = { border: `1.5px dashed ${C.accent}` } as const
const stitchSoft = { border: `1.5px dashed rgba(51,37,31,0.35)` } as const

export const metadata: Metadata = demoMetadata({
  slug: 'taller-de-munecas-de-origen-rural',
  title: 'Taller de Muñecas de Origen Rural · La Pepona del Maule en Itahue',
  description:
    'Laura Ramos teje en telar la Pepona del Maule y el mundo rural de Itahue, Molina: muñecas de lana de oveja con tintes naturales, por encargo.',
  image: `${IMG}/pepona.webp`,
})

const NAV_LINKS = [
  { label: 'Qué teje', href: '#tejidos' },
  { label: 'El proceso', href: '#proceso' },
  { label: 'Cómo encargar', href: '#encargar' },
]

/** Franja de urdimbre: hilos verticales como el telar que da estructura a la trama. */
function Urdimbre({ flip = false }: { flip?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundImage: `repeating-linear-gradient(${flip ? '-90deg' : '90deg'}, ${C.accent} 0 1.5px, transparent 1.5px 9px)`,
        opacity: 0.5,
      }}
    />
  )
}

/** Marco "postal": las primeras peponas famosas fueron tarjetas de Navidad del Fondart. */
function Postal({
  src,
  alt,
  rotate = 0,
  caption,
}: {
  src: string
  alt: string
  rotate?: number
  caption?: string
}) {
  return (
    <figure
      className="bg-white p-2.5 pb-3 shadow-[0_16px_36px_rgba(51,37,31,0.22)]"
      style={{ transform: `rotate(${rotate}deg)`, ...stitchSoft }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
      <img src={src} alt={alt} className="w-full object-cover" loading="lazy" />
      {caption && (
        <figcaption
          className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.22em] text-center`}
          style={{ color: C.muted }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

export default function Page() {
  return (
    <main
      className={`${display.className} min-h-[100dvh]`}
      style={{ backgroundColor: C.wool, color: C.ink }}
    >
      <BlitzNav
        name="Muñecas de Origen Rural"
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/pepona.webp`}
        theme={{ over: 'light', bar: C.wool, ink: C.ink, line: C.line, btnBg: C.accent, btnInk: C.accentInk }}
        fontClass={display.className}
        ctaLabel="Encargar"
      />

      {/* ── HERO ──────────────────────────────────────────── */}
      <section
        id="inicio"
        className="relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(${C.line} 1px, transparent 1px), linear-gradient(90deg, ${C.line} 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[110px] md:pt-[150px] pb-14 md:pb-20 grid md:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <div>
            <Reveal>
              <p
                className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em]`}
                style={{ color: C.accent }}
              >
                Itahue · Molina · Maule
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-4 text-[2.6rem] leading-[1.02] md:text-[4.4rem] font-semibold tracking-tight">
                La <em style={{ color: C.accent }}>Pepona del Maule</em>, tejida a mano en telar
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.muted }}>
                Laura Ramos convierte lana de oveja en muñecas del mundo rural, en su taller de Itahue.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-[50px] px-7 rounded-full text-[15px] font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.accent, color: C.accentInk }}
                >
                  Encargar una pepona
                </a>
                <a
                  href="#proceso"
                  className={`${mono.className} inline-flex items-center h-[44px] text-[12px] uppercase tracking-[0.18em] tap-44`}
                  style={{ color: C.ink }}
                >
                  Cómo se hace ↓
                </a>
              </div>
            </Reveal>
            <Reveal delay={340}>
              <p className={`${mono.className} mt-8 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                Reconocimiento UNESCO · Sello Manos Campesinas INDAP
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="relative mx-auto w-[82%] md:w-[78%]">
              <Postal
                src={`${IMG}/pepona.webp`}
                alt="La Pepona del Maule, muñeca tejida en telar con lana de oveja y su cinta del sello Manos Campesinas"
                rotate={2.5}
                caption="Pepona del Maule · telar + lana de oveja"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-6 -left-8 w-24 md:w-32 shadow-[0_14px_30px_rgba(51,37,31,0.25)]"
                style={{ transform: 'rotate(-7deg)', ...stitchSoft }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- foto ya optimizada en public/ */}
                <img
                  src={`${IMG}/ventana.webp`}
                  alt="Muñeca y caballo tejidos a mano en la ventana del taller de Itahue"
                  className="w-full bg-white p-1.5 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
        </div>
        <Urdimbre />
      </section>

      {/* ── BANDA TEJIDA ──────────────────────────────────── */}
      <section aria-hidden="true" className="overflow-hidden py-4" style={{ backgroundColor: C.ink }}>
        <div className="flex whitespace-nowrap animate-[tejido_28s_linear_infinite]">
          {[0, 1].map((n) => (
            <div key={n} className={`${mono.className} flex items-center gap-6 pr-6 text-[11px] md:text-xs uppercase tracking-[0.26em]`} style={{ color: C.wool }}>
              {['Pepona del Maule', 'Hecho a mano en Itahue', 'Lana de oveja', 'Tintes naturales', 'Telar', 'UNESCO 2012'].map((t) => (
                <span key={t} className="flex items-center gap-6">
                  <span>{t}</span>
                  <span style={{ color: C.accent }}>✳</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── CATÁLOGO ──────────────────────────────────────── */}
      <section id="tejidos" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.accent }}>
            Del telar de Laura
          </p>
          <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl">
            El mundo rural tejido en lana de oveja
          </h2>
          <p className="mt-4 max-w-xl text-base md:text-lg" style={{ color: C.muted }}>
            Cada pieza sale distinta del telar. Se tejen por encargo, una por una, en el taller de Itahue.
          </p>
        </Reveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {CATALOGO.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <article className="h-full p-5 md:p-6 rounded-xl" style={{ backgroundColor: C.card, ...stitchSoft }}>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.accent }}>
                  {item.tag}
                </p>
                <h3 className="mt-2.5 text-xl md:text-2xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  {item.desc}
                </p>
              </article>
            </Reveal>
          ))}
          <Reveal delay={5 * 70}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="h-full min-h-[150px] p-5 md:p-6 rounded-xl flex flex-col justify-between gap-4 transition-transform active:scale-[0.98]"
              style={{ backgroundColor: C.accent, color: C.accentInk, ...stitch }}
            >
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] opacity-80`}>
                Encargo por WhatsApp
              </p>
              <p className="text-2xl font-semibold leading-tight">
                Cuéntale a Laura qué quieres tejer →
              </p>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────── */}
      <section id="proceso" className="relative" style={{ backgroundColor: C.woolDeep }}>
        <Urdimbre flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1fr_0.9fr] gap-12 md:gap-16 items-start">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.accent }}>
                De la oveja a la muñeca
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                Cuatro a ocho peponas por semana, ninguna igual a otra
              </h2>
            </Reveal>
            <ol className="mt-10 space-y-0">
              {PROCESO.map((paso, i) => (
                <Reveal key={paso.t} delay={i * 90}>
                  <li className="relative pl-12 pb-9 last:pb-0">
                    {/* hilo vertical pespunteado */}
                    {i < PROCESO.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[15px] top-9 bottom-0 w-0"
                        style={{ borderLeft: `1.5px dashed ${C.accent}` }}
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className={`${mono.className} absolute left-0 top-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-bold`}
                      style={{ backgroundColor: C.accent, color: C.accentInk }}
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold pt-0.5">{paso.t}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {paso.d}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal delay={150} className="md:sticky md:top-24">
            <Postal
              src={`${IMG}/laura-taller.webp`}
              alt="Laura Ramos junto a sus muñecas tejidas en su taller de Itahue"
              rotate={-2}
              caption="Laura Ramos en su taller · Itahue"
            />
            <p className={`${mono.className} mt-6 text-[11px] uppercase tracking-[0.2em] leading-relaxed`} style={{ color: C.muted }}>
              Lana que regalan los vecinos · tintes vegetales y cochinilla · ropa cambiable y lavable
            </p>
          </Reveal>
        </div>
        <Urdimbre />
      </section>

      {/* ── LA ARTESANA ───────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <Reveal>
            <Postal
              src={`${IMG}/familia-peponas.webp`}
              alt="Laura Ramos rodeada de decenas de Peponas del Maule tejidas a mano"
              rotate={1.5}
              caption="La familia completa de peponas"
            />
          </Reveal>
          <div className="mt-5 grid grid-cols-2 gap-4">
            <Reveal delay={90}>
              <Postal
                src={`${IMG}/itahue.webp`}
                alt="Campos y cerros de Itahue, la localidad rural donde está el taller"
                rotate={-2.5}
                caption="Itahue"
              />
            </Reveal>
            <Reveal delay={160}>
              <Postal
                src={`${IMG}/feria.webp`}
                alt="Stand de artesanía en una de las ferias donde Laura vende sus muñecas"
                rotate={2}
                caption="Ferias de artesanía"
              />
            </Reveal>
          </div>
        </div>
        <div>
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.accent }}>
              La mano detrás
            </p>
            <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
              Diseñadora que volvió a su campo a tejer
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Laura estudió diseño y trabajó años armando vitrinas en la ciudad. El terruño tiró más
              fuerte: volvió a Itahue, aprendió telar por su cuenta y un Fondart de tarjetas navideñas
              la dejó atrapada en las muñecas. Hoy teje cada semana, sola o con su hermana y su mamá.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <blockquote
              className="mt-6 pl-5 text-xl md:text-2xl font-medium italic leading-snug"
              style={{ borderLeft: `3px solid ${C.accent}` }}
            >
              “Las muñecas me atraparon”
              <cite className={`${mono.className} block mt-2 text-[11px] not-italic uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                Laura Ramos · entrevista INDAP
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      {/* ── SELLOS ────────────────────────────────────────── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] text-center`} style={{ color: C.accent }}>
              Reconocimientos
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-center">
              Una muñeca con premios de verdad
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
            {SELLOS.map((s, i) => (
              <Reveal key={s.titulo} delay={i * 80}>
                <article className="h-full text-center p-6 rounded-xl" style={{ ...stitchSoft, backgroundColor: C.wool }}>
                  <p className={`${mono.className} text-3xl md:text-4xl font-bold`} style={{ color: C.accent }}>
                    {s.anio}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold leading-snug">{s.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>
                    {s.detalle}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENCARGAR / MAPA ───────────────────────────────── */}
      <section id="encargar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.accent }}>
                Cómo conseguirla
              </p>
              <h2 className="mt-3 text-3xl md:text-5xl font-semibold tracking-tight">
                No está en tiendas: se encarga directo al taller
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <ul className="mt-6 space-y-3">
                {COMPRA.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-base md:text-lg">
                    <span aria-hidden="true" className="mt-2 inline-block w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.accent }} />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={180}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center h-[50px] px-7 rounded-full text-[15px] font-semibold transition-transform active:scale-95"
                style={{ backgroundColor: C.accent, color: C.accentInk }}
              >
                Encargar por WhatsApp
              </a>
              <p className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.phone} · {BIZ.address}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden shadow-[0_16px_36px_rgba(51,37,31,0.18)]" style={stitchSoft}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[360px] border-0"
                loading="lazy"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-3 inline-flex items-center text-[11px] uppercase tracking-[0.2em] tap-44`}
              style={{ color: C.muted }}
            >
              Cómo llegar a Itahue ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.ink, color: C.wool }}>
        <Urdimbre />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <p className="text-lg font-semibold">{BIZ.name}</p>
            <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(244,237,222,0.65)' }}>
              {BIZ.artesana} · {BIZ.address}
            </p>
          </div>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${mono.className} text-[12px] uppercase tracking-[0.18em] tap-44 underline underline-offset-4`}
            style={{ color: C.wool }}
          >
            {BIZ.phone} ↗
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.short} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />

      <style>{`@keyframes tejido { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
    </main>
  )
}
