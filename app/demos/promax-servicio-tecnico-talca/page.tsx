import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HOURS, REVIEWS } from './content'

const IMG = '/demos/promax-servicio-tecnico-talca'

const display = localFont({
  src: [{ path: '../../fonts/archivo-black/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

const C = {
  paper: '#F5F3EE',
  paperDeep: '#ECE8DE',
  ink: '#101010',
  inkSoft: '#3D3D3D',
  muted: '#6E6A5E',
  accent: '#FFD400',
  accentInk: '#101010',
  line: 'rgba(16,16,16,0.18)',
  card: '#FFFFFF',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'promax-servicio-tecnico-talca',
  title: 'Promax - Servicio Técnico de Celulares en Talca',
  description:
    'Cambio de pantalla, batería y placa en 2 Oriente esquina 1 Sur, Talca. Diagnóstico honesto. Escríbenos por WhatsApp.',
})

const NAV_LINKS = [
  { label: 'Cambios', href: '#cambios' },
  { label: 'El banco', href: '#banco' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#ubicacion' },
]

const CAMBIOS = [
  { tag: 'PANTALLA', d: 'Módulo completo: vidrio, táctil e imagen.', photo: 'iphone-quebrado.webp' },
  { tag: 'BATERÍA', d: 'Recupera la carga de todo el día.', photo: 'iphone-encendido.webp' },
  { tag: 'CÁMARA', d: 'Lente, módulo y vidrio posterior.', photo: 'iphone-rosa.webp' },
  { tag: 'PLACA', d: 'No enciende, mojado o se reinicia.', photo: 'placa-madre.webp' },
  { tag: 'WATCH', d: 'Pantalla y batería de Apple Watch.', photo: 'watch-roto.webp' },
]

function Cinta({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 border-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]`}
      style={{ borderColor: C.ink, color: C.ink, backgroundColor: C.accent, boxShadow: `4px 4px 0 ${C.ink}` }}
    >
      {children}
    </span>
  )
}

export default function PromaxDemo() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <span className={`${display.className} text-lg tracking-tight`}>
            PROMAX
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        theme={{ over: 'light', bar: 'rgba(245,243,238,0.94)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: '#FFFFFF' }}
        fontClass={body.className}
      />

      {/* ── HERO / AFICHE ────────────────────────────────────── */}
      <section id="inicio" className="pt-24 md:pt-32 pb-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <div>
                <Cinta>Servicio técnico especializado</Cinta>
                <h1
                  className={`${display.className} mt-5 text-[36px] leading-[0.98] md:text-[64px] tracking-tight`}
                >
                  Pantalla rota,
                  <br />
                  <span
                    className="inline-block px-2 -ml-2"
                    style={{ backgroundColor: C.accent, boxDecorationBreak: 'clone', WebkitBoxDecorationBreak: 'clone' }}
                  >
                    tiene arreglo.
                  </span>
                </h1>
                <p className="mt-4 text-[15px] md:text-lg max-w-md" style={{ color: C.inkSoft }}>
                  Reparación de celulares en el centro de Talca: diagnóstico honesto, repuestos probados y entrega en el día.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex h-[50px] items-center rounded-md px-6 text-[15px] font-bold uppercase tracking-wide"
                    style={{ backgroundColor: C.ink, color: C.accent, border: `2px solid ${C.ink}` }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <div className="inline-flex h-[50px] items-center gap-2.5 px-4 border-2" style={{ borderColor: C.ink }}>
                    <Stars value={BIZ.rating} color={C.ink} className="w-3.5 h-3.5" />
                    <span className={`${mono.className} text-[11px] font-bold`}>
                      {BIZ.ratingLabel} · {BIZ.reviews} reseñas
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <figure className="relative">
                <div
                  className="absolute -top-3 left-8 z-10 h-7 w-28 rotate-[-6deg]"
                  style={{ backgroundColor: C.accent, opacity: 0.9 }}
                  aria-hidden
                />
                <div
                  className="rotate-[1.5deg] border-2 overflow-hidden bg-white"
                  style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.ink}` }}
                >
                  <Image
                    src={`${IMG}/letrero.webp`}
                    alt={`Letrero de ${BIZ.short} en su local del centro de Talca`}
                    width={1200}
                    height={700}
                    priority
                    className="w-full object-cover aspect-[16/10]"
                  />
                </div>
                <figcaption
                  className={`${mono.className} mt-4 text-center text-[10px] font-bold uppercase tracking-[0.22em]`}
                  style={{ color: C.muted }}
                >
                  2 Oriente esquina 1 Sur - Centro de Talca
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>

        {/* cinta corrida de servicios */}
        <div className="mt-12 border-y-2 py-3" style={{ borderColor: C.ink, backgroundColor: C.ink }}>
          <p
            className={`${mono.className} text-center text-[11px] md:text-xs font-bold uppercase tracking-[0.3em] whitespace-nowrap overflow-hidden px-4`}
            style={{ color: C.accent }}
          >
            Pantalla · Batería · Cámara · Flex · Placa · Apple Watch
          </p>
        </div>
      </section>

      {/* ── CAMBIOS DE SIEMPRE ───────────────────────────────── */}
      <section id="cambios" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Cinta>Lista de cambios</Cinta>
          <h2 className={`${display.className} mt-5 text-3xl md:text-5xl uppercase tracking-tight`}>
            Lo que más entra por la puerta
          </h2>
        </Reveal>
        <ul className="mt-10 md:mt-14 space-y-5">
          {CAMBIOS.map((s, i) => (
            <Reveal key={s.tag} delay={i * 60}>
              <li
                className="flex items-stretch border-2 overflow-hidden"
                style={{ borderColor: C.ink, backgroundColor: C.card, boxShadow: `6px 6px 0 ${C.ink}` }}
              >
                <div
                  className="w-28 md:w-44 shrink-0 relative"
                  style={{ borderRight: `2px dashed ${C.ink}` }}
                >
                  <Image
                    src={`${IMG}/${s.photo}`}
                    alt={`${s.tag.toLowerCase()} de celular en el banco de ${BIZ.short}`}
                    width={400}
                    height={400}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="flex-1 px-5 py-5 md:px-8 md:py-6 flex flex-wrap items-center justify-between gap-3">
                  <div className="min-w-0">
                    <h3 className={`${display.className} text-xl md:text-3xl uppercase tracking-tight`}>
                      {s.tag}
                    </h3>
                    <p className="mt-1 text-[13px] md:text-sm" style={{ color: C.inkSoft }}>
                      {s.d}
                    </p>
                  </div>
                  <span
                    className={`${mono.className} shrink-0 border-2 px-3 py-1.5 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em]`}
                    style={{ borderColor: C.ink, backgroundColor: C.accent }}
                  >
                    Cotización gratis
                  </span>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── FOTO A SANGRÉ: MICROSCOPIO ───────────────────────── */}
      <section className="relative">
        <div className="relative h-[60vh] md:h-[72vh]">
          <Image
            src={`${IMG}/tecnico-microscopio.webp`}
            alt="Técnico de Promax trabajando con microscopio en el banco de reparaciones"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(16,16,16,0.5) 0%, rgba(16,16,16,0) 30%, rgba(16,16,16,0) 70%, rgba(16,16,16,0.55) 100%)' }}
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-6">
              <p
                className={`${mono.className} inline-block px-4 py-2 text-[10px] md:text-xs font-bold uppercase tracking-[0.25em]`}
                style={{ backgroundColor: C.accent, color: C.accentInk, border: `2px solid ${C.ink}` }}
              >
                Placa y microscopio - trabajo de verdad, en vivo
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── EL BANCO EN FOTOS ────────────────────────────────── */}
      <section id="banco" className="py-16 md:py-24" style={{ backgroundColor: C.paperDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Cinta>Del Instagram @promax.ste</Cinta>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl uppercase tracking-tight`}>
              El banco, sin filtro
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { src: 'placa-banco.webp', alt: 'Placa de celular en el banco de trabajo de Promax' },
              { src: 'iphone-quebrado.webp', alt: 'iPhone dorado con la tapa trasera quebrada' },
              { src: 'watch-roto.webp', alt: 'Apple Watch con pantalla quebrada en reparación' },
              { src: 'iphone-rosa.webp', alt: 'iPhone rosa después del cambio de tapa' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 70}>
                <figure
                  className="border-2 bg-white p-2 pb-3"
                  style={{
                    borderColor: C.ink,
                    boxShadow: `5px 5px 0 ${C.ink}`,
                    transform: `rotate(${i % 2 === 0 ? '-1.4' : '1.2'}deg)`,
                  }}
                >
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    width={600}
                    height={750}
                    className="w-full object-cover aspect-[4/5]"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <figure className="mt-10 md:mt-14 mx-auto max-w-3xl">
              <div
                className="border-2 overflow-hidden"
                style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.ink}` }}
              >
                <Image
                  src={`${IMG}/promo-pantalla.webp`}
                  alt={`Afiche real de ${BIZ.short}: cambio de pantalla iPhone 11, antes y después`}
                  width={900}
                  height={1100}
                  className="w-full object-cover"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-4 text-center text-[10px] font-bold uppercase tracking-[0.22em]`}
                style={{ color: C.muted }}
              >
                Afiche real del local - así anuncian sus cambios
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── RESEÑAS ──────────────────────────────────────────── */}
      <section id="resenas" className="py-16 md:py-24" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <span
              className={`${mono.className} inline-flex border-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em]`}
              style={{ borderColor: C.accent, color: C.accent }}
            >
              Lo que dicen en Google
            </span>
            <div className="mt-4 flex flex-wrap items-end gap-x-5 gap-y-2">
              <h2 className={`${display.className} text-3xl md:text-5xl uppercase tracking-tight`} style={{ color: '#FFFFFF' }}>
                {BIZ.ratingLabel} de 5
              </h2>
              <Stars value={BIZ.rating} color={C.accent} className="w-5 h-5 mb-1.5" />
              <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.2em] mb-2`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 70}>
                <blockquote
                  className="h-full p-6 border-2"
                  style={{ borderColor: 'rgba(255,255,255,0.22)', backgroundColor: '#1A1A1A' }}
                >
                  <Stars value={5} color={C.accent} className="w-3.5 h-3.5" />
                  <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    “{r.txt}”
                  </p>
                  <footer
                    className={`${mono.className} mt-5 text-[10px] font-bold uppercase tracking-[0.2em]`}
                    style={{ color: 'rgba(255,255,255,0.45)' }}
                  >
                    {r.name} · {r.when}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DÓNDE ESTAMOS ────────────────────────────────────── */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Cinta>Dónde estamos</Cinta>
          <h2 className={`${display.className} mt-5 text-3xl md:text-4xl uppercase tracking-tight`}>
            Esquina 2 Oriente con 1 Sur
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <Reveal>
            <div>
              <dl className="space-y-5">
                <div>
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                    Dirección
                  </dt>
                  <dd className="mt-1 text-base font-bold">{BIZ.address}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                    Horario
                  </dt>
                  <dd className="mt-1 space-y-1">
                    {HOURS.map((h) => (
                      <p key={h.d} className="text-[15px]" style={{ color: C.inkSoft }}>
                        <span className="inline-block w-36 font-semibold" style={{ color: C.ink }}>{h.d}</span>
                        {h.h}
                      </p>
                    ))}
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                    Instagram
                  </dt>
                  <dd className="mt-1 text-base font-bold">@{BIZ.instagram}</dd>
                </div>
              </dl>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex h-[50px] items-center rounded-md px-6 text-[15px] font-bold uppercase tracking-wide"
                  style={{ backgroundColor: C.ink, color: C.accent, border: `2px solid ${C.ink}` }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex h-[50px] items-center rounded-md px-6 text-[15px] font-bold uppercase tracking-wide"
                  style={{ border: `2px solid ${C.ink}`, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
              <div
                className="mt-8 border-2 overflow-hidden"
                style={{ borderColor: C.ink, boxShadow: `6px 6px 0 ${C.ink}` }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                  className="w-full aspect-[4/3]"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure className="md:sticky md:top-24">
              <div
                className="rotate-[1deg] border-2 overflow-hidden bg-white"
                style={{ borderColor: C.ink, boxShadow: `8px 8px 0 ${C.ink}` }}
              >
                <Image
                  src={`${IMG}/donde-estamos.webp`}
                  alt={`Afiche real de ${BIZ.short} indicando su ubicación en el centro de Talca`}
                  width={800}
                  height={1000}
                  className="w-full object-cover aspect-[4/5]"
                />
              </div>
              <figcaption
                className={`${mono.className} mt-4 text-center text-[10px] font-bold uppercase tracking-[0.22em]`}
                style={{ color: C.muted }}
              >
                Su propio afiche de ubicación - directo de su Instagram
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t-2" style={{ borderColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${display.className} text-sm uppercase tracking-tight`}>
            {BIZ.short}
          </p>
          <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escríbenos por WhatsApp - ${BIZ.short}`} />
    </main>
  )
}
