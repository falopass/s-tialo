import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG, SELLOS, CIFRAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/alegreya/normal-400-900.woff2', weight: '400 900', style: 'normal' },
    { path: '../../fonts/alegreya/italic-400-900.woff2', weight: '400 900', style: 'italic' },
  ],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

// Motivo del demo: el prospectus del colegio — la página se lee como el folleto
// de admisión que se reparte a las familias: lema en latín, seis "sellos"
// numerados (los que el colegio publica como "Más que un Colegio") y la ficha
// de matrícula al final. Azul marino y rojo salen de su escudo.

const C = {
  navy: '#15255B',
  navyDeep: '#0D1A42',
  red: '#C8102E',
  paper: '#F7F4EC',
  ink: '#1B2036',
  muted: '#4A5272',
  line: 'rgba(27,32,54,0.14)',
  lineLight: 'rgba(255,255,255,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'colegio-ingles-de-talca',
  title: 'Colegio Inglés de Talca — bilingüe, IB y campus de 11 hectáreas',
  description:
    'Colegio particular bilingüe en Av. San Miguel 5766, Talca. Único de Maule, Ñuble y O’Higgins autorizado para el Programa Diploma IB. Matrícula 2027 abierta. Fono 71 224 7832.',
  image: `${IMG}/campus-aereo.webp`,
})

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} uppercase tracking-[0.22em] text-[11px] md:text-xs font-bold`}
      style={{ color: light ? '#FFD9DE' : C.red }}
    >
      {children}
    </p>
  )
}

export default function Page() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-[100dvh] overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--font-body)' }}
    >
      {/* ── Cabecera prospectus ── */}
      <header className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-14 flex items-center justify-between gap-3">
          <a href="#inicio" className="flex items-center gap-2.5 tap-44 min-w-0">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real optimizado en public/ */}
            <img src={`${IMG}/logo.png`} alt="Escudo del Colegio Inglés de Talca" className="h-9 w-9 shrink-0" />
            <span className="font-bold text-base md:text-lg tracking-tight truncate" style={{ fontFamily: 'var(--font-display)' }}>
              {BIZ.name}
            </span>
          </a>
          <span
            className={`${mono.className} hidden sm:block text-[10px] md:text-[11px] uppercase tracking-[0.2em] shrink-0`}
            style={{ color: C.muted }}
          >
            {BIZ.address} · {BIZ.city}
          </span>
        </div>
      </header>

      {/* ── Hero sobre azul marino ── */}
      <section style={{ backgroundColor: C.navy, color: '#F7F4EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16">
          <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-7">
              <Reveal>
                <Kicker light>{BIZ.rubro} · {BIZ.city}, desde 1982</Kicker>
                <h1
                  className="mt-4 font-bold leading-[1.06] tracking-tight text-4xl md:text-6xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Once hectáreas de campus en San Miguel para{' '}
                  <em className="not-italic" style={{ color: '#FFB3BC' }}>
                    más que un colegio
                  </em>
                </h1>
              </Reveal>
              <Reveal delay={120}>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: 'rgba(247,244,236,0.8)' }}>
                  {BIZ.name} forma de Prekinder a IV Medio con inmersión en inglés,
                  deporte federado y el único Programa Diploma del Bachillerato
                  Internacional entre O’Higgins y el Maule.
                </p>
                <p className={`${mono.className} mt-4 text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: 'rgba(247,244,236,0.6)' }}>
                  {BIZ.motto} · {BIZ.mottoEs}
                </p>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <a
                    href={BIZ.wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                    style={{ backgroundColor: C.red }}
                  >
                    Admisión 2027 por WhatsApp
                  </a>
                  <a
                    href={BIZ.phoneTel}
                    className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-semibold border tap-44"
                    style={{ borderColor: 'rgba(247,244,236,0.7)', color: '#F7F4EC' }}
                  >
                    Llamar · {BIZ.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="md:col-span-5">
              <Reveal delay={100}>
                <figure
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: C.lineLight, backgroundColor: C.navyDeep }}
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/cancha-evento.webp`}
                      alt="Carpa roja del colegio en la cancha de pasto del campus en una jornada deportiva"
                      fill
                      sizes="(max-width: 768px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                    style={{ borderColor: C.lineLight, color: 'rgba(247,244,236,0.65)' }}
                  >
                    La cancha del campus en jornada deportiva — Foto: sitio oficial del colegio.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cifras ── */}
      <section className="border-b" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {CIFRAS.map((c, i) => (
              <Reveal key={c.v} delay={i * 80}>
                <div className="border-l-2 pl-4" style={{ borderColor: C.red }}>
                  <p
                    className="font-bold text-2xl md:text-3xl tracking-tight"
                    style={{ fontFamily: 'var(--font-display)', color: C.navy }}
                  >
                    {c.k}
                  </p>
                  <p className="mt-1 text-xs md:text-sm leading-snug" style={{ color: C.muted }}>
                    {c.v}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Seis sellos ── */}
      <section>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker>lo que el colegio llama “más que un colegio”</Kicker>
            <h2
              className="mt-3 font-bold tracking-tight leading-tight text-3xl md:text-5xl max-w-3xl"
              style={{ fontFamily: 'var(--font-display)', color: C.navy }}
            >
              Seis sellos, una sola escuela
            </h2>
          </Reveal>
          <div className="mt-12 space-y-12 md:space-y-16">
            {SELLOS.map((s, i) => (
              <Reveal key={s.n} delay={60}>
                <div
                  className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${
                    i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  <figure className="md:col-span-5 rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={`${IMG}/${s.img}.webp`}
                        alt={s.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 42vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                  <div className="md:col-span-7">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={`${mono.className} text-3xl md:text-5xl font-bold`}
                        style={{ color: C.red }}
                      >
                        {s.n}
                      </span>
                      <h3
                        className="font-bold text-2xl md:text-4xl tracking-tight"
                        style={{ fontFamily: 'var(--font-display)', color: C.navy }}
                      >
                        {s.titulo}
                      </h3>
                    </div>
                    <p className="mt-3 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                      {s.texto}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── IB: el sello mayor ── */}
      <section style={{ backgroundColor: C.navyDeep, color: '#F7F4EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <Reveal>
                <Kicker light>bachillerato internacional</Kicker>
                <h2
                  className="mt-3 font-bold tracking-tight leading-tight text-3xl md:text-5xl"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  El único colegio entre O’Higgins y el Maule con el Programa
                  Diploma del IB
                </h2>
                <p className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(247,244,236,0.78)' }}>
                  El Colegio Inglés es el único establecimiento de las regiones del
                  Maule, Ñuble y O’Higgins autorizado para impartir el Programa
                  Diploma — una certificación de reconocimiento mundial. Los
                  principios del IB se trabajan desde los primeros años.
                </p>
              </Reveal>
            </div>
            <div className="md:col-span-4">
              <Reveal delay={120}>
                <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.lineLight }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/letras.webp`}
                      alt="Materiales de inglés y dibujos de los niveles parvularios del colegio"
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} px-4 py-3 text-[11px] leading-relaxed border-t`}
                    style={{ borderColor: C.lineLight, color: 'rgba(247,244,236,0.65)' }}
                  >
                    El inglés empieza en la sala: materiales del nivel parvulario.
                  </figcaption>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Admisión + mapa ── */}
      <section id="contacto" className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <Kicker>admisión 2027 abierta</Kicker>
              <h2
                className="mt-3 font-bold tracking-tight leading-tight text-3xl md:text-5xl"
                style={{ fontFamily: 'var(--font-display)', color: C.navy }}
              >
                Matrículas y visitas, por avenida San Miguel
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                El proceso de admisión 2027 ya está abierto. Las familias pueden
                escribir por WhatsApp, llamar al colegio o visitar el campus.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-7 space-y-4">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['WhatsApp', BIZ.celDisplay],
                  ['Correo', BIZ.email],
                  ['Instagram', BIZ.ig],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                    <dt
                      className={`${mono.className} w-24 shrink-0 uppercase tracking-[0.14em] text-[10px] md:text-[11px] pt-1`}
                      style={{ color: C.red }}
                    >
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium leading-snug break-all">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={BIZ.wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center h-12 px-7 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.red }}
              >
                Escribir por WhatsApp · {BIZ.celDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border h-[300px] md:h-[420px]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa — Colegio Inglés de Talca, Avenida San Miguel 5766"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-3 inline-block text-[11px] md:text-xs underline underline-offset-4 tap-44`}
              style={{ color: C.navy }}
            >
              Abrir en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between">
          <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-display)', color: C.navy }}>
            {BIZ.name} · {BIZ.motto}
          </p>
          <p className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={BIZ.wa} label={`WhatsApp de ${BIZ.name}`} />
    </main>
  )
}
