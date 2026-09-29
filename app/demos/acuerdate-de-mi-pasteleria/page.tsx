import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400' }],
  variable: '--f-d',
})
const body = localFont({
  src: [{ path: '../../fonts/jost/normal-100-900.woff2' }],
  variable: '--f-b',
})

export const metadata: Metadata = demoMetadata({
  slug: 'acuerdate-de-mi-pasteleria',
  title: 'Acuérdate de Mí · Pastelería por encargo en Talca',
  description:
    'Tortas de hojarasca, Selva Negra y banquetería dulce y salada por encargo en Talca. Todo casero, sin premezclas. Pide por WhatsApp.',
  image: `${IMG}/pie-naranja.webp`,
})

// Paleta sacada del logo: crema de fondo + esmeralda del colibrí.
const C = {
  paper: '#f4ecd9',
  ink: '#2b2416',
  muted: 'rgba(43,36,22,0.72)',
  accent: '#0f6e54',
  accentInk: '#f6f1e2',
  soft: '#eae0c4',
  line: '#d8c9a8',
  deep: '#14332a',
  deepInk: '#efe7d0',
  deepMuted: 'rgba(239,231,208,0.72)',
}

// Borde festoneado tipo blonda, solo CSS.
function Blonda({ top, over }: { top: string; over: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        height: 16,
        backgroundColor: over,
        backgroundImage: `radial-gradient(circle at 10px 8px, ${top} 9px, transparent 9.6px)`,
        backgroundSize: '20px 16px',
        backgroundPosition: '0 8px',
        backgroundRepeat: 'repeat-x',
      }}
    />
  )
}

const NAV_LINKS = [
  { label: 'Tortas', href: '#tortas' },
  { label: 'Banquetería', href: '#mesa' },
  { label: 'Encargos', href: '#encargos' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const TORTAS = [
  {
    n: '01',
    name: 'Hojarasca clásica',
    desc: 'Manjar, nuez o chocolate. La torta de siempre, la que no falla.',
  },
  {
    n: '02',
    name: 'Selva Negra',
    desc: 'Chocolate y crema, con todo el cariño de la receta original.',
  },
  {
    n: '03',
    name: 'Mini Matilda',
    desc: 'La torta de chocolate del antojo, en versión para pocos.',
  },
  {
    n: '04',
    name: 'Pie de naranja',
    desc: 'Con merengue italiano dorado a soplete.',
  },
  {
    n: '05',
    name: 'Temáticas a pedido',
    desc: 'El personaje o la idea que imagines, traducida en torta.',
  },
]

const RESENAS = [
  {
    q: 'Los mejores pasteles, una delicia, 100% caseros, me encantaron.',
    who: 'Daniela Inostroza',
    when: 'hace 6 meses',
  },
  {
    q: 'Los mejores pasteles de Talca que he probado hasta el momento, se nota que son 100% caseros, muy ricos.',
    who: 'Vicente Espinoza',
    when: 'hace 6 meses',
  },
  {
    q: 'Deliciosos, muy ricos, recomendados 100%.',
    who: 'Claudio Espinoza',
    when: 'hace 5 meses',
  },
]

export default function Page() {
  return (
    <main
      className={`${display.variable} ${body.variable}`}
      style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--f-b)' }}
    >
      <BlitzNav
        name="Acuérdate de Mí"
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.ink,
          line: C.line,
          btnBg: C.accent,
          btnInk: C.accentInk,
        }}
      />

      {/* Hero */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-16 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-7">
            <Reveal>
              <img
                src={`${IMG}/logo.webp`}
                alt="Logo de Acuérdate de Mí Pastelería: un colibrí"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border object-cover"
                style={{ borderColor: C.line }}
              />
            </Reveal>
            <Reveal delay={80}>
              <p
                className="mt-5 text-xs md:text-sm font-semibold tracking-[0.22em] uppercase"
                style={{ color: C.accent }}
              >
                Pastelería por encargo · Talca
              </p>
            </Reveal>
            <Reveal delay={140}>
              <h1
                className="mt-3 text-4xl md:text-6xl leading-[1.05]"
                style={{ fontFamily: 'var(--f-d)' }}
              >
                La torta de tus recuerdos
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p
                className="mt-4 text-base md:text-lg leading-relaxed max-w-md"
                style={{ color: C.muted }}
              >
                Hojarasca, Selva Negra y banquetería dulce y salada, hecha a mano
                y sin premezclas.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.accent, color: C.accentInk }}
                >
                  Encargar por WhatsApp
                </a>
                <a
                  href="#tortas"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold border transition-colors"
                  style={{ borderColor: C.line, color: C.ink }}
                >
                  Ver las tortas
                </a>
              </div>
            </Reveal>
            <Reveal delay={320}>
              <div className="mt-5 flex items-center gap-2 text-sm" style={{ color: C.muted }}>
                <Stars value={BIZ.rating} color={C.accent} className="w-3.5 h-3.5" />
                <span>5,0 en Google</span>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={180}>
              <div
                className="relative mx-auto max-w-[320px] md:max-w-none overflow-hidden border"
                style={{
                  borderColor: C.line,
                  borderRadius: '999px 999px 18px 18px',
                }}
              >
                <img
                  src={`${IMG}/pie-naranja.webp`}
                  alt="Pie de naranja con merengue italiano de Acuérdate de Mí"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <p
                className="mt-3 text-center text-xs tracking-[0.18em] uppercase"
                style={{ color: C.muted }}
              >
                Pie de naranja con merengue italiano
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Cinta */}
      <div
        className="overflow-hidden py-3 border-y"
        style={{ borderColor: C.line, backgroundColor: C.soft }}
        aria-hidden="true"
      >
        <style>{'@keyframes am-cinta{to{transform:translateX(-50%)}}'}</style>
        <div
          className="flex w-max whitespace-nowrap text-xs md:text-sm font-semibold tracking-[0.2em] uppercase"
          style={{ color: C.accent, animation: 'am-cinta 30s linear infinite' }}
        >
          {[0, 1].map((k) => (
            <span key={k} className="shrink-0">
              {'Tortas por encargo · Banquetería dulce y salada · Sin premezclas · Talca, Maule · '.repeat(3)}
            </span>
          ))}
        </div>
      </div>

      {/* Tortas: carta numerada */}
      <section id="tortas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <Reveal className="md:sticky md:top-24">
              <div
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: C.line }}
              >
                <img
                  src={`${IMG}/torta-celeste.webp`}
                  alt="Torta personalizada celeste con flores de Acuérdate de Mí"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: C.muted }}>
                Cada torta sale del horno de la casa, con la receta a mano y sin
                premezclas.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl leading-tight"
                style={{ fontFamily: 'var(--f-d)' }}
              >
                Lo que más piden en Talca
              </h2>
            </Reveal>
            <div className="mt-6 md:mt-8 divide-y" style={{ borderColor: C.line }}>
              {TORTAS.map((t, i) => (
                <Reveal key={t.n} delay={i * 70}>
                  <div
                    className="flex gap-4 md:gap-6 items-baseline py-4 md:py-5 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <span
                      className="text-sm tabular-nums shrink-0"
                      style={{ color: C.accent }}
                    >
                      {t.n}
                    </span>
                    <div>
                      <h3
                        className="text-lg md:text-2xl"
                        style={{ fontFamily: 'var(--f-d)' }}
                      >
                        {t.name}
                      </h3>
                      <p
                        className="mt-1 text-sm md:text-base leading-relaxed"
                        style={{ color: C.muted }}
                      >
                        {t.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <img
                  src={`${IMG}/torta-tematica.webp`}
                  alt="Torta temática de Snoopy hecha por encargo"
                  className="w-full aspect-square object-cover rounded-2xl border"
                  style={{ borderColor: C.line }}
                />
                <img
                  src={`${IMG}/torta-crema.webp`}
                  alt="Torta de crema decorada a mano"
                  className="w-full aspect-square object-cover rounded-2xl border"
                  style={{ borderColor: C.line }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Banquetería dulce y salada */}
      <section id="mesa" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <Blonda top={C.paper} over={C.soft} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl leading-tight max-w-2xl"
              style={{ fontFamily: 'var(--f-d)' }}
            >
              La mesa dulce y la salada
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: C.muted }}>
              Banquetería artesanal para cumpleaños, bautizos y oncecitas:
              bocaditos, rollitos de canela, quiches, pizzas, tapaditos, galletas
              y alfajores. Y para quienes cuidan el azúcar, la trasnochada con
              stevia existe.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {[
              { src: 'bocaditos.webp', alt: 'Bocaditos y mini pasteles de banquetería dulce' },
              { src: 'rollitos-canela.webp', alt: 'Rollitos de canela con glaseado casero' },
              { src: 'quiches.webp', alt: 'Mini quiches de banquetería salada' },
              { src: 'torta-personalizada.webp', alt: 'Torta personalizada de Pokébola por encargo' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <img
                  src={`${IMG}/${f.src}`}
                  alt={f.alt}
                  className="w-full aspect-square md:aspect-[4/3] object-cover rounded-2xl border"
                  style={{ borderColor: C.line }}
                />
              </Reveal>
            ))}
          </div>
        </div>
        <Blonda top={C.soft} over={C.paper} />
      </section>

      {/* Cómo encargar */}
      <section id="encargos" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2
              className="text-3xl md:text-5xl leading-tight"
              style={{ fontFamily: 'var(--f-d)' }}
            >
              Encargar es una conversación
            </h2>
          </Reveal>
          <div className="mt-8 md:mt-10 grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                n: '1',
                t: 'Escríbenos por WhatsApp',
                d: `Al ${BIZ.phoneDisplay} o desde el botón verde. Responde su dueña, la misma que hornea.`,
              },
              {
                n: '2',
                t: 'Con tiempo de horno',
                d: 'La banquetería se agenda con 4 días de anticipación y el resto de los pedidos con 2 días, mínimo.',
              },
              {
                n: '3',
                t: 'La recibes como la imaginaste',
                d: 'Torta, mesa dulce o banquetería salada, hecha a mano para tu fecha.',
              },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 90}>
                <div
                  className="h-full rounded-2xl border p-5 md:p-7"
                  style={{ borderColor: C.line, backgroundColor: '#fbf6e8' }}
                >
                  <span
                    className="inline-flex w-9 h-9 rounded-full items-center justify-center text-sm font-bold"
                    style={{ backgroundColor: C.accent, color: C.accentInk }}
                  >
                    {s.n}
                  </span>
                  <h3
                    className="mt-4 text-xl md:text-2xl"
                    style={{ fontFamily: 'var(--f-d)' }}
                  >
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold transition-transform active:scale-95"
              style={{ backgroundColor: C.accent, color: C.accentInk }}
            >
              Empezar mi encargo
            </a>
          </Reveal>
        </div>
      </section>

      {/* Reseñas sobre fondo esmeralda profundo con bordes de blonda */}
      <Blonda top={C.paper} over={C.deep} />
      <section style={{ backgroundColor: C.deep, color: C.deepInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <div className="flex items-center gap-3">
              <Stars value={BIZ.rating} color="#e9c46a" className="w-4 h-4" />
              <span className="text-sm font-semibold tracking-wide">
                5,0 en Google · {BIZ.reviews} opiniones
              </span>
            </div>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.who} delay={i * 90}>
                <figure
                  className="h-full rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: 'rgba(239,231,208,0.18)', backgroundColor: 'rgba(255,255,255,0.04)' }}
                >
                  <blockquote
                    className="text-base md:text-lg leading-relaxed"
                    style={{ fontFamily: 'var(--f-d)' }}
                  >
                    “{r.q}”
                  </blockquote>
                  <figcaption
                    className="mt-4 text-xs tracking-[0.14em] uppercase"
                    style={{ color: C.deepMuted }}
                  >
                    {r.who} · {r.when}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Blonda top={C.deep} over={C.paper} />

      {/* Ubicación */}
      <section id="ubicacion" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-10 items-center">
          <div className="md:col-span-5">
            <Reveal>
              <h2
                className="text-3xl md:text-5xl leading-tight"
                style={{ fontFamily: 'var(--f-d)' }}
              >
                En Talca, a un WhatsApp
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-4 text-base leading-relaxed" style={{ color: C.muted }}>
                Pastelería de encargos en {BIZ.city}. Coordina tu pedido y la
                entrega por WhatsApp o revisa su Instagram para ver lo último que
                salió del horno.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <div className="mt-5 space-y-2 text-sm md:text-base">
                <p>
                  <span className="font-semibold">WhatsApp: </span>
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    {BIZ.phoneDisplay}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Instagram: </span>
                  <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    {BIZ.instagramUser}
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Mapa: </span>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.accent }}>
                    Ver en Google Maps
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-7">
            <Reveal delay={120}>
              <div
                className="overflow-hidden rounded-2xl border"
                style={{ borderColor: C.line }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.fullName} en Talca`}
                  className="w-full h-[280px] md:h-[360px]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer compacto */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-xs" style={{ color: C.muted }}>
          <span>
            {BIZ.fullName} · {BIZ.city}
          </span>
          <span>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: C.accent }}>
              WhatsApp
            </a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold" style={{ color: C.accent }}>
              Instagram
            </a>
          </span>
        </div>
      </footer>

      <DemoBand name={BIZ.fullName} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.fullName} por WhatsApp`} />
    </main>
  )
}
