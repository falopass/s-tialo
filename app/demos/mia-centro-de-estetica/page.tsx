import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, SERVICIO_EXTRA, REVIEWS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
})

// Identidad tomada del letrero real de la fachada: banda violeta + franja
// dorada, con la flor del logo como acento.
const C = {
  paper: '#FAF6FC',
  plum: '#341652',
  plumDeep: '#2A0F45',
  violet: '#8A3BC0',
  violetDeep: '#6E22A8',
  violetSoft: '#DCC7EE',
  gold: '#F2C14E',
  ink: '#2A1235',
  muted: '#574368',
  bone: '#FDF9FF',
  mutedL: 'rgba(253,249,255,0.74)',
  line: 'rgba(42,15,69,0.14)',
  lineL: 'rgba(220,199,238,0.25)',
}

// globals.css redefine --spacing-5…12 (gap-10 = 128px, py-12 = 240px); este demo
// se diseñó con la escala por defecto de Tailwind (n × 4px), así que se restaura aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'mia-centro-de-estetica',
  title: 'Mía Centro De Estética — la casa morada de Curicó',
  description: 'Peluquería, depilación, manicure, pedicure y bronceado en Pje. R 8, Curicó. 4,8 estrellas en 31 reseñas de Google. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

/** Zona de la carta donde va cada servicio del tótem. */
const ZONA: Record<string, string> = {
  Peluquería: 'Cabello',
  Depilación: 'Cuerpo',
  Manicure: 'Manos',
  Pedicure: 'Pies',
  Bronceado: 'Piel',
}

const VITRINA = [
  { src: 'unas1', alt: 'Uñas en tonos menta con glitter dorado hechas en Mía' },
  { src: 'unas5', alt: 'Manicure rosada con glitter dorado hecha en Mía' },
  { src: 'unas2', alt: 'Manicure rosada con detalle en glitter hecha en Mía' },
  { src: 'unas6', alt: 'Manicure degradado menta con glitter hecha en Mía' },
  { src: 'unas3', alt: 'Esmaltado rosado con acento dorado, trabajo de Mía' },
  { src: 'unas4', alt: 'Uñas celestes con glitter plateado hechas en Mía' },
] as const

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4 flex items-center gap-3`}
      style={{ color: light ? '#E9DBF8' : C.violetDeep }}
    >
      <span className="inline-block w-8 h-px" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Cinta infinita con los servicios del tótem. */
function Marquee() {
  const items = [...SERVICIOS.map((s) => s.name), SERVICIO_EXTRA]
  const Row = ({ ariaHidden = false }: { ariaHidden?: boolean }) => (
    <div className="flex items-center shrink-0" aria-hidden={ariaHidden}>
      {items.map((s) => (
        <span
          key={s}
          className={`${display.className} uppercase font-bold text-xs md:text-sm tracking-[0.24em] flex items-center gap-6 md:gap-8 pr-6 md:pr-8`}
          style={{ color: C.bone }}
        >
          {s}
          <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.gold }} aria-hidden="true" />
        </span>
      ))}
    </div>
  )
  return (
    <div className="overflow-hidden py-4" style={{ backgroundColor: C.violetDeep }}>
      <div className="mia-marquee flex w-max">
        <Row />
        <Row ariaHidden />
      </div>
    </div>
  )
}

export default function MiaCentroDeEsteticaPage() {
  return (
    <div
      className={`${body.className} mia-page min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        .mia-page a:focus-visible { outline: 2px solid #6E22A8; outline-offset: 3px; }
        @keyframes mia-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .mia-marquee { animation: mia-marquee 30s linear infinite; }
        .mia-vitrina::-webkit-scrollbar { display: none; }
        .mia-vitrina { scrollbar-width: none; }
        @media (prefers-reduced-motion: reduce) { .mia-marquee { animation: none; } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(250,246,252,0.94)',
          ink: C.plum,
          line: C.line,
          btnBg: C.violetDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el letrero que cuelga de la reja + la casa ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.plum }}>
        {/* los lunares del letrero, en versión fondo */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.5]"
          style={{ backgroundImage: 'radial-gradient(rgba(220,199,238,0.10) 1.5px, transparent 1.5px)', backgroundSize: '26px 26px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-28 pb-12 md:pb-16">
          {/* rótulo de registro */}
          <Reveal>
            <div
              className={`${mono.className} flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1.5 border-y py-2.5 mb-10 md:mb-14 text-[10px] md:text-[11px] uppercase tracking-[0.26em]`}
              style={{ borderColor: C.lineL, color: 'rgba(253,249,255,0.82)' }}
            >
              <span>{BIZ.rubro} · {BIZ.city}</span>
              <span className="hidden md:inline">Pje. R 8, centro</span>
              <span style={{ color: '#FFD97A' }}>Sitio de ejemplo</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            {/* El letrero colgante */}
            <Reveal>
              <div className="relative">
                {/* cordones del letrero */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex gap-16" aria-hidden="true">
                  <span className="block w-px h-6" style={{ backgroundColor: C.gold }} />
                  <span className="block w-px h-6" style={{ backgroundColor: C.gold }} />
                </div>
                <div
                  className="relative rounded-[28px] px-7 md:px-10 pt-9 pb-8 text-center"
                  style={{ backgroundColor: C.bone, border: `2px solid ${C.gold}`, boxShadow: '0 26px 70px rgba(0,0,0,0.4)' }}
                >
                  <div className="absolute inset-2 rounded-[20px] pointer-events-none" style={{ border: `1px solid ${C.violetSoft}` }} aria-hidden="true" />
                  <div className="relative">
                    <Image
                      src={`${IMG}/logo.webp`}
                      alt="Logo de Mía Centro De Estética"
                      width={64}
                      height={64}
                      className="mx-auto rounded-full mb-4"
                    />
                    <h1
                      className={`${display.className} font-bold leading-[0.95] tracking-[-0.01em] text-[clamp(3.2rem,11vw,5.6rem)]`}
                      style={{ color: C.plum }}
                    >
                      Mía
                    </h1>
                    <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.34em] mt-2`} style={{ color: C.violetDeep }}>
                      Centro de estética
                    </p>
                    <div className="flex items-center justify-center gap-3 mt-5" aria-hidden="true">
                      <span className="h-px w-10" style={{ backgroundColor: C.gold }} />
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.violet }} />
                      <span className="h-px w-10" style={{ backgroundColor: C.gold }} />
                    </div>
                    <p className="text-sm md:text-base leading-relaxed max-w-sm mx-auto mt-5" style={{ color: C.muted }}>
                      La casa morada de Pje. R 8: cinco servicios en un mismo
                      tótem, atendidos con hora en pleno centro de Curicó.
                    </p>
                    <div className="flex flex-wrap justify-center gap-3 mt-7">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-7 py-3 rounded-full tap-44 active:scale-95 transition-all hover:brightness-105`}
                        style={{ backgroundColor: C.violetDeep, color: '#fff', boxShadow: '0 10px 26px rgba(110,34,168,0.35)' }}
                      >
                        Agendar por WhatsApp
                      </a>
                      <a
                        href="#carta"
                        className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-7 py-3 rounded-full tap-44 transition-colors`}
                        style={{ border: `1.5px solid ${C.violetDeep}`, color: C.violetDeep }}
                      >
                        Ver la carta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* La casa, como postal */}
            <Reveal delay={140}>
              <figure className="relative rotate-[1.6deg]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ border: `6px solid ${C.bone}`, boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Mía Centro De Estética en Pje. R 8, Curicó: casa blanca con letrero violeta y el tótem de servicios"
                    fill
                    priority
                    sizes="(min-width:768px) 44vw, 90vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} absolute -bottom-3 left-5 px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.2em]`}
                  style={{ backgroundColor: C.gold, color: C.ink }}
                >
                  Así se ve desde la calle
                </figcaption>
              </figure>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2.5 tap-44"
                style={{ color: C.bone }}
              >
                <Stars value={BIZ.rating} color={C.gold} className="w-4 h-4" />
                <span className={`${display.className} font-bold text-sm`}>{BIZ.ratingLabel}</span>
                <span className="text-sm underline underline-offset-4 decoration-1" style={{ color: C.mutedL }}>
                  {BIZ.reviews} reseñas en Google
                </span>
              </a>
            </Reveal>
          </div>
        </div>

        {/* cinta de servicios del tótem */}
        <Marquee />
      </section>

      {/* ── La carta de la casa: el tótem como menú de salón ── */}
      <section id="carta" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-start">
          <Reveal>
            <Eyebrow>La carta de la casa</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-8`} style={{ color: C.plum }}>
              Cinco líneas,
              <br />
              <em>una misma reja</em>
            </h2>
            <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: '#fff', border: `1.5px solid ${C.plum}` }}>
              <p className={`${mono.className} px-6 md:px-8 pt-5 pb-3 text-[10px] uppercase tracking-[0.28em] border-b border-dashed`} style={{ color: C.violetDeep, borderColor: C.line }}>
                El tótem de la entrada · letrero real
              </p>
              <ul>
                {SERVICIOS.map((s, i) => (
                  <li key={s.name} className="flex items-baseline gap-3 px-6 md:px-8 py-4 border-b border-dashed last:border-b-0" style={{ borderColor: C.line }}>
                    <span className={`${mono.className} text-xs`} style={{ color: C.violet }}>{String(i + 1).padStart(2, '0')}</span>
                    <span className={`${display.className} font-bold text-lg md:text-xl tracking-[0.02em]`} style={{ color: C.plum }}>{s.name}</span>
                    <span className="flex-1 border-b border-dotted mx-1 -translate-y-1" style={{ borderColor: 'rgba(42,15,69,0.3)' }} aria-hidden="true" />
                    <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>{ZONA[s.name] ?? 'Casa'}</span>
                  </li>
                ))}
                <li className="flex items-baseline gap-3 px-6 md:px-8 py-4" style={{ backgroundColor: 'rgba(220,199,238,0.25)' }}>
                  <span className={`${mono.className} text-xs`} style={{ color: C.violetDeep }}>+</span>
                  <span className={`${display.className} font-bold text-lg md:text-xl italic`} style={{ color: C.violetDeep }}>{SERVICIO_EXTRA}</span>
                  <span className="flex-1 border-b border-dotted mx-1 -translate-y-1" style={{ borderColor: 'rgba(42,15,69,0.3)' }} aria-hidden="true" />
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.violetDeep }}>Por Facebook</span>
                </li>
              </ul>
              <div className="px-6 md:px-8 py-5 flex flex-wrap items-center justify-between gap-4 border-t" style={{ borderColor: C.line, backgroundColor: 'rgba(220,199,238,0.18)' }}>
                <p className="text-xs leading-relaxed max-w-[240px]" style={{ color: C.muted }}>
                  Todo se consulta y se agenda por WhatsApp, con hora.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block uppercase font-bold text-xs tracking-[0.14em] px-6 py-2.5 rounded-full tap-44 transition-all hover:brightness-110`}
                  style={{ backgroundColor: C.violetDeep, color: '#fff' }}
                >
                  Consultar hora
                </a>
              </div>
            </div>
          </Reveal>

          {/* Polaroide de trabajos reales */}
          <Reveal delay={120}>
            <div className="space-y-6 lg:pt-24">
              {[
                { src: 'peluqueria', alt: 'Balayage rubio hecho en Mía, publicado en su Facebook con productos Schwarzkopf Professional', cap: 'Color y balayage' },
                { src: 'alisado', alt: 'Alisado con Brasil Coffee Liss, trabajo publicado por Mía en Facebook', cap: 'Alisados · Brasil Coffee Liss' },
              ].map((f, i) => (
                <figure
                  key={f.src}
                  className={`relative bg-white p-3 pb-4 shadow-xl ${i % 2 ? 'rotate-[1.4deg] ml-6' : '-rotate-[1.8deg] mr-6'}`}
                  style={{ border: `1px solid ${C.line}` }}
                >
                  {/* cinta adhesiva */}
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 rotate-[-3deg] opacity-80"
                    style={{ backgroundColor: 'rgba(242,193,78,0.55)' }}
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 30vw, 70vw" className="object-cover" />
                  </div>
                  <figcaption className={`${display.className} italic text-center text-sm pt-3`} style={{ color: C.violetDeep }}>
                    {f.cap}
                  </figcaption>
                </figure>
              ))}
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] text-center pt-2`} style={{ color: C.muted }}>
                Trabajos publicados por el propio centro
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La vitrina: el nail art en fila, como en la ventana ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-14 md:pb-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-12">
              <div>
                <Eyebrow light>La vitrina</Eyebrow>
                <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em]`} style={{ color: C.bone }}>
                  Las manos
                  <br />
                  <em style={{ color: C.violetSoft }}>lo dicen</em>
                </h2>
              </div>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutedL }}>
                Fotos que el propio centro sube a su ficha de Google:
                permanente, glitter y nail art hechos en la casa.{' '}
                <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.bone }}>Desliza →</span>
              </p>
            </div>
          </Reveal>
        </div>
        <div className="mia-vitrina overflow-x-auto pb-12 md:pb-16">
          <div className="flex gap-4 md:gap-5 w-max px-5 md:px-8 snap-x snap-mandatory">
            {VITRINA.map((f, i) => (
              <figure
                key={f.src}
                className={`relative w-52 md:w-64 shrink-0 snap-center aspect-[3/4] overflow-hidden rounded-2xl ${i % 2 ? 'rotate-[1.2deg]' : '-rotate-[1.2deg]'}`}
                style={{ border: `3px solid ${i % 2 ? C.gold : C.violetSoft}`, boxShadow: '0 16px 44px rgba(0,0,0,0.35)' }}
              >
                <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width:768px) 256px, 208px" className="object-cover" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones: citas reales de Google ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Eyebrow>Lo que dicen</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-5xl leading-[1.02] tracking-[-0.01em] mb-5`} style={{ color: C.plum }}>
              {BIZ.ratingLabel} estrellas
              <br />
              <em>y vecinas que vuelven</em>
            </h2>
            <p className="text-base leading-relaxed mb-5" style={{ color: C.muted }}>
              {BIZ.reviews} reseñas en la ficha de Maps y{' '}
              {BIZ.facebookFollowers} personas siguiendo su Facebook. Las
              citas son reales, con nombre y fecha.
            </p>
            <a
              href={BIZ.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-flex items-center gap-2 uppercase font-bold text-xs tracking-[0.14em] tap-44 underline underline-offset-4`}
              style={{ color: C.violetDeep }}
            >
              facebook.com/centrodeesteticamia →
            </a>
          </Reveal>
          <div className="space-y-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure
                  className={`relative rounded-2xl p-6 md:p-7 ${i % 2 ? 'rotate-[0.8deg]' : '-rotate-[0.8deg]'}`}
                  style={{ backgroundColor: '#fff', border: `1px solid ${C.line}`, boxShadow: '0 10px 30px rgba(52,22,82,0.08)' }}
                >
                  <span className={`${display.className} absolute -top-3 left-6 text-5xl leading-none`} style={{ color: C.gold }} aria-hidden="true">“</span>
                  <Stars value={5} color={C.gold} className="w-3.5 h-3.5" />
                  <blockquote className={`${display.className} text-base md:text-lg leading-relaxed mt-3 mb-4`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.violetDeep }}>
                    {r.author} <span style={{ color: C.muted }}>· {r.when} · Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Ubicación: la casa con la banda morada ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.plum }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[1.0] tracking-[-0.01em] mb-6`} style={{ color: C.bone }}>
              Pasaje R 8,
              <br />
              <em style={{ color: C.violetSoft }}>Curicó centro</em>
            </h2>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.mutedL }}>
              Se reconoce de lejos: la casa blanca con la banda morada y el
              tótem violeta en la reja. La hora se agenda por WhatsApp.
            </p>
            <dl className="space-y-0 border-t mb-8" style={{ borderColor: C.lineL }}>
              {[
                { k: 'Dirección', v: `${BIZ.address}, ${BIZ.city}` },
                { k: 'WhatsApp', v: BIZ.phoneDisplay, href: WA_LINK },
                { k: 'Atención', v: 'Con hora agendada' },
                { k: 'Facebook', v: `${BIZ.facebookFollowers} seguidores`, href: BIZ.facebook },
              ].map((d) => (
                <div key={d.k} className="flex items-baseline justify-between gap-4 border-b py-4" style={{ borderColor: C.lineL }}>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em]`} style={{ color: C.violetSoft }}>{d.k}</dt>
                  <dd className="text-sm md:text-base text-right" style={{ color: C.bone }}>
                    {d.href ? (
                      <a href={d.href} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-1 tap-44">{d.v}</a>
                    ) : (
                      d.v
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.gold, color: C.ink }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative min-h-[320px] rounded-3xl overflow-hidden" style={{ border: `1px solid ${C.lineL}` }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="absolute inset-0 w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} absolute top-3 left-3 text-[11px] uppercase tracking-[0.14em] px-4 py-2 rounded-full shadow-lg tap-44`}
                style={{ backgroundColor: C.bone, color: C.plum }}
              >
                Abrir en Maps ↗
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.violetDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] uppercase tracking-[0.3em] mb-4`} style={{ color: 'rgba(253,249,255,0.7)' }}>
              Sitio de ejemplo · fotos y reseñas reales
            </p>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.05] max-w-2xl mx-auto`} style={{ color: C.bone }}>
              ¿La casa morada con página <em style={{ color: C.gold }}>propia</em>?
            </h2>
            <a
              href={whatsappLink('demo')}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block mt-7 uppercase font-bold text-sm tracking-[0.08em] px-8 py-3.5 rounded-full tap-44 active:scale-95 transition-all hover:brightness-110`}
              style={{ backgroundColor: C.bone, color: C.plum }}
            >
              Hablemos por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.plumDeep, color: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" width={40} height={40} className="rounded-full" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-bold text-lg leading-none`} style={{ color: C.bone }}>{BIZ.name}</p>
              <p className="text-xs mt-1" style={{ color: C.mutedL }}>{BIZ.rubro} · {BIZ.city}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-1.5 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>{BIZ.phoneDisplay}</a>
            <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>Facebook</a>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.violetSoft }}>Google Maps</a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineL }}>
          <p className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-4 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(220,199,238,0.5)' }}>
            Creado por <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">Sitiazo</a> — sitio de muestra para el negocio
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
