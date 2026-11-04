import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK_CLASE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

const C = {
  ink: '#1B211C',
  deep: '#243029',
  cream: '#F4F1E8',
  creamSoft: '#EBE6D9',
  sage: '#A9B7A2',
  sageDeep: '#6F7F6A',
  clay: '#BE8A6D',
  muted: '#5B6357',
  line: 'rgba(27,33,28,0.14)',
  lineLight: 'rgba(244,241,232,0.22)',
}

const NAV_THEME = {
  over: 'dark' as const,
  bar: C.cream,
  ink: C.ink,
  line: C.line,
  btnBg: C.ink,
  btnInk: C.cream,
}

export const metadata: Metadata = demoMetadata({
  slug: 'santo-pilates',
  title: 'Santo Pilates — Estudio de pilates en Chillán',
  description:
    'Pilates reformer en grupos pequeños, con acompañamiento directo. Av. Libertad 455, ofi 810, Chillán. Agenda tu clase de prueba por WhatsApp.',
  image: '/demos/santo-pilates/hero.webp',
})

const NAV = [
  { label: 'El estudio', href: '#estudio' },
  { label: 'Método', href: '#metodo' },
  { label: 'Clases', href: '#clases' },
  { label: 'Dónde', href: '#donde' },
]

const PASOS = [
  {
    n: '01',
    t: 'Respiración',
    d: 'Antes del movimiento, el aire. Se aprende a respirar para sostener la carga sin apretar el cuello ni la espalda.',
  },
  {
    n: '02',
    t: 'Control',
    d: 'Movimientos lentos y precisos. El reformer suma resistencia y devuelve la información que el cuerpo necesita para ordenarse.',
  },
  {
    n: '03',
    t: 'Progresión',
    d: 'Cada semana un poco más, sin dolor y sin saltarse pasos. El avance se mide en cómo te mueves, no en cuánto peso pones.',
  },
]

const CLASES = [
  {
    t: 'Reformer',
    d: 'Trabajo completo en camilla, con muelles y guía directa. Es la base del estudio.',
    img: `${IMG}/hero.webp`,
  },
  {
    t: 'Mat',
    d: 'Suelo y peso propio. Ideal para complementar la camilla o empezar sin resistencia.',
    img: `${IMG}/mat.webp`,
  },
  {
    t: 'Personalizado',
    d: 'Sesión uno a uno para un objetivo puntual: rehabilitación, fuerza o técnica.',
    img: `${IMG}/detalle.webp`,
  },
]

const VOCES = [
  {
    t: 'Hermoso y tranquilo lugar, la Fran excelente profe. Además todo muy higiénico y limpio.',
    a: 'Camila González',
  },
  {
    t: 'Ambas instructoras muy profesionales, clases muy amenas y personalizadas, grupos pequeños, cada una con su carro e implementos.',
    a: 'Ester Valenzuela',
  },
  {
    t: 'Un lugar acogedor, que cuida cada detalle. Las instalaciones están pensadas para la calma y el profesionalismo.',
    a: 'Jeannete Uribe',
  },
]

export default function SantoPilates() {
  return (
    <main className={`${body.className} overflow-x-hidden`} style={{ background: C.cream, color: C.ink }}>
      <style>{`
        @keyframes sp-kenburns { from { transform: scale(1.09) } to { transform: scale(1) } }
        @keyframes sp-rise { from { opacity: 0; transform: translateY(26px) } to { opacity: 1; transform: none } }
        @keyframes sp-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        @keyframes sp-draw { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .sp-hero-img { animation: sp-kenburns 16s ease-out both }
        .sp-line { display: block; animation: sp-rise .9s cubic-bezier(.2,.7,.2,1) both }
        .sp-line:nth-child(2) { animation-delay: .12s }
        .sp-line:nth-child(3) { animation-delay: .24s }
        .sp-marquee-track { animation: sp-marquee 34s linear infinite; width: max-content }
        .sp-rule { transform-origin: left; animation: sp-draw 1.1s ease-out both }
        @media (prefers-reduced-motion: reduce) {
          .sp-hero-img, .sp-line, .sp-marquee-track, .sp-rule { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name="SANTO PILATES"
        links={NAV}
        waLink={WA_LINK_CLASE}
        theme={NAV_THEME}
        ctaLabel="Agendar"
        fontClass={display.className}
      />

      {/* Hero */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Alumna trabajando en el reformer en Santo Pilates"
            fill
            priority
            sizes="100vw"
            className="sp-hero-img object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(20,26,21,0.55) 0%, rgba(20,26,21,0.15) 38%, rgba(20,26,21,0.82) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-40 sm:pb-24">
          <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.32em]" style={{ color: C.sage }}>
            Estudio de pilates · Chillán
          </p>
          <h1
            className={`${display.className} max-w-3xl text-[clamp(2.6rem,8vw,5rem)] leading-[0.98]`}
            style={{ color: C.cream }}
          >
            <span className="sp-line">El cuerpo se ordena</span>
            <span className="sp-line">cuando respira.</span>
          </h1>
          <p className="mt-7 max-w-lg text-[15px] leading-relaxed sm:text-base" style={{ color: 'rgba(244,241,232,0.86)' }}>
            Pilates reformer en grupos pequeños, con acompañamiento directo. Av. Libertad 455, ofi 810, Chillán.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href={WA_LINK_CLASE}
              className="inline-flex h-[52px] items-center rounded-full px-7 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: C.sage, color: C.ink }}
            >
              Agendar clase de prueba
            </a>
            <a
              href="#estudio"
              className="inline-flex h-[52px] items-center rounded-full border px-7 text-sm font-semibold"
              style={{ borderColor: 'rgba(244,241,232,0.45)', color: C.cream }}
            >
              Conocer el estudio
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <Stars value={5} color={C.sage} />
            <span className="text-xs" style={{ color: 'rgba(244,241,232,0.75)' }}>
              5,0 en Google · 12 opiniones
            </span>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y py-4" style={{ borderColor: C.line, background: C.creamSoft }}>
        <div className="sp-marquee-track flex gap-10 whitespace-nowrap">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10">
              {['Respirar', 'Sostener', 'Alinear', 'Fluir', 'Volver a empezar'].map((w, i) => (
                <span
                  key={`${k}-${i}`}
                  className="text-[11px] font-semibold uppercase tracking-[0.34em]"
                  style={{ color: C.sageDeep }}
                >
                  {w} <span style={{ color: C.clay }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Estudio */}
      <section id="estudio" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.clay }}>
                01 · El estudio
              </p>
              <h2 className={`${display.className} mt-4 text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05]`}>
                Un estudio pequeño,
                <br />
                a propósito.
              </h2>
              <div className="sp-rule mt-6 h-px w-24" style={{ background: C.clay }} />
              <p className="mt-6 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                Santo Pilates nació para pocas personas por clase. Cada una con su reformer, su ritmo y la mirada
                de Fran encima de la técnica. Sin filas, sin apuro y sin repetir el mismo movimiento porque toca.
              </p>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed" style={{ color: C.muted }}>
                El espacio está en el centro de Chillán, en Av. Libertad 455. Se entra con reserva y se sale con
                el cuerpo distinto.
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative aspect-[4/5] overflow-hidden" style={{ borderRadius: '14rem 14rem 1.5rem 1.5rem' }}>
              <Image
                src={`${IMG}/estudio.webp`}
                alt="Interior del estudio Santo Pilates"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Método */}
      <section id="metodo" className="py-20 sm:py-28" style={{ background: C.deep, color: C.cream }}>
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.sage }}>
              02 · Método
            </p>
            <h2 className={`${display.className} mt-4 max-w-2xl text-[clamp(2rem,4.6vw,3.2rem)] leading-[1.05]`}>
              Tres cosas, en este orden.
            </h2>
          </Reveal>

          <div className="mt-14 divide-y" style={{ borderColor: C.lineLight }}>
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="grid gap-4 py-8 sm:grid-cols-[90px_1fr_1.4fr] sm:items-baseline sm:gap-8">
                  <span className={`${display.className} text-4xl`} style={{ color: C.sage }}>
                    {p.n}
                  </span>
                  <h3 className="text-xl font-semibold" style={{ color: C.cream }}>
                    {p.t}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: 'rgba(244,241,232,0.72)' }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clases */}
      <section id="clases" className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.clay }}>
            03 · Clases
          </p>
          <h2 className={`${display.className} mt-4 max-w-xl text-[clamp(2rem,4.4vw,3.1rem)] leading-[1.05]`}>
            Tres formas de entrar.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {CLASES.map((c, i) => (
            <Reveal key={c.t} delay={i * 100}>
              <article className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                  <Image
                    src={c.img}
                    alt={`Clase de ${c.t} en Santo Pilates`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(180deg, rgba(20,26,21,0) 55%, rgba(20,26,21,0.55) 100%)' }}
                  />
                  <span
                    className={`${display.className} absolute bottom-4 left-5 text-2xl`}
                    style={{ color: C.cream }}
                  >
                    {c.t}
                  </span>
                </div>
                <p className="mt-4 text-[14px] leading-relaxed" style={{ color: C.muted }}>
                  {c.d}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cita */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: C.creamSoft }}>
        <div className="pointer-events-none absolute -right-24 -top-16 h-72 w-72 rounded-full" style={{ background: C.sage, opacity: 0.35 }} />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className={`${display.className} text-[clamp(1.7rem,4.2vw,2.9rem)] leading-[1.2]`} style={{ color: C.ink }}>
              El pilates no se trata de hacer más.
              <br />
              Se trata de hacerlo bien.
            </p>
            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.sageDeep }}>
              La idea del estudio
            </p>
          </Reveal>
        </div>
      </section>

      {/* Voces */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.clay }}>
                04 · Lo que dicen
              </p>
              <h2 className={`${display.className} mt-4 text-[clamp(2rem,4.4vw,3rem)] leading-[1.05]`}>
                Opiniones de Google.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars value={5} color={C.clay} />
              <span className="text-sm" style={{ color: C.muted }}>
                5,0 · 12 opiniones
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {VOCES.map((v, i) => (
            <Reveal key={v.a} delay={i * 90}>
              <blockquote
                className="flex h-full flex-col justify-between rounded-2xl border p-6"
                style={{ borderColor: C.line, background: '#FFFFFF' }}
              >
                <p className="text-[15px] leading-relaxed" style={{ color: C.ink }}>
                  “{v.t}”
                </p>
                <footer className="mt-5 text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.sageDeep }}>
                  {v.a}
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Dónde */}
      <section id="donde" className="border-t" style={{ borderColor: C.line }}>
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 sm:py-24 md:grid-cols-2 md:items-center">
          <div>
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em]" style={{ color: C.clay }}>
                05 · Dónde
              </p>
              <h2 className={`${display.className} mt-4 text-[clamp(2rem,4.4vw,3rem)] leading-[1.05]`}>
                Av. Libertad 455,
                <br />
                ofi 810.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                Chillán, Ñuble. Se entra con reserva: la clase se agenda por WhatsApp y se confirma el mismo día.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK_CLASE}
                  className="inline-flex h-[52px] items-center rounded-full px-7 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                  style={{ background: C.ink, color: C.cream }}
                >
                  Agendar clase de prueba
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[52px] items-center rounded-full border px-7 text-sm font-semibold"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Ver en Maps
                </a>
              </div>
              <a href={`tel:${BIZ.phoneTel}`} className="mt-6 inline-block text-sm font-medium" style={{ color: C.sageDeep }}>
                {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
              <LazyMap src={MAPS_EMBED} title="Mapa de Santo Pilates" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cierre */}
      <section className="px-6 pb-24 pt-4 text-center">
        <Reveal>
          <h2 className={`${display.className} mx-auto max-w-2xl text-[clamp(2rem,5vw,3.4rem)] leading-[1.05]`}>
            La primera clase se prueba.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px]" style={{ color: C.muted }}>
            Escríbenos y coordinamos un horario que te sirva.
          </p>
          <a
            href={WA_LINK_CLASE}
            className="mt-8 inline-flex h-[52px] items-center rounded-full px-8 text-sm font-semibold"
            style={{ background: C.clay, color: C.cream }}
          >
            Hablar por WhatsApp
          </a>
        </Reveal>
      </section>

      <footer className="border-t px-6 py-10" style={{ borderColor: C.line }}>
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-xs sm:flex-row sm:items-center sm:justify-between" style={{ color: C.muted }}>
          <span>
            {BIZ.fullName} · {BIZ.address}, {BIZ.city}
          </span>
          <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" style={{ color: C.sageDeep }}>
            @santopilateschillan
          </a>
        </div>
      </footer>

      <WaFab href={WA_LINK_CLASE} label="Agendar por WhatsApp" />
    </main>
  )
}
