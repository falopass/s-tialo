import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-mono',
})

const C = {
  paper: '#FAF5EA',
  ink: '#16283D',
  muted: '#44566E',
  blue: '#1D5FC4',
  blueInk: '#123A84',
  tint: '#E7EEF9',
  line: 'rgba(22,40,61,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'colegio-diferencial-san-clemente',
  title: 'Escuela Diferencial San Clemente — educación especial municipal',
  description:
    'Escuela de educación especial municipal en Las Palmeras 30, San Clemente. Gratuita, con huerto medicinal, murales de sus estudiantes y techo solar. Fono 71 262 1727.',
  image: `${IMG}/hero.webp`,
})

// Motivo del demo: la huella de la escuela contada como bitácora — cada hito
// (fundación, sol, huerto, murales) es un dato real con fecha y fuente.

const HITOS = [
  {
    year: '2004',
    title: 'Nace la escuela en Las Palmeras',
    text: 'Se construye el establecimiento municipal de educación especial de San Clemente, al cuidado del DAEM.',
  },
  {
    year: '2015',
    title: 'El techo empieza a generar luz',
    text: 'El Ministerio de Energía instala paneles solares sobre los pabellones, dentro del programa Techos Solares Públicos.',
  },
  {
    year: '2024',
    title: 'El huerto medicinal del centro de padres',
    text: 'Con fondo del Ministerio del Medio Ambiente, la comunidad levanta un huerto de especies nativas y aromáticas con manejo orgánico.',
  },
  {
    year: '2025',
    title: 'Dos murales para las Olimpiadas Especiales',
    text: 'Estudiantes del Laboral 3A pintan dos murales en homenaje a los Juegos Mundiales de Olimpiadas Especiales 2027.',
  },
]

const CIFRAS = [
  { k: '2004', v: 'año de fundación' },
  { k: 'Excelencia', v: 'nivel de su certificación ambiental' },
  { k: 'Gratuita', v: 'educación municipal, sin arancel' },
  { k: 'DAEM', v: 'administración municipal' },
]

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} uppercase tracking-[0.22em] text-[11px] md:text-xs font-bold`}
      style={{ color: light ? 'rgba(255,255,255,0.85)' : C.blue }}
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
      {/* ── Cabecera boletín ── */}
      <header
        className="border-b"
        style={{ borderColor: C.line, fontFamily: 'var(--font-mono)' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-11 flex items-center justify-between gap-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em]">
          <span className="truncate" style={{ color: C.muted }}>
            Escuela municipal de educación especial
          </span>
          <span className="shrink-0" style={{ color: C.blue }}>
            San Clemente · Maule
          </span>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-14">
        <div className="grid md:grid-cols-12 gap-8 md:gap-10 items-end">
          <div className="md:col-span-7">
            <Reveal>
              <Kicker>Las Palmeras 30 · San Clemente</Kicker>
              <h1
                className="mt-4 font-extrabold leading-[1.02] tracking-tight text-4xl md:text-6xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Una escuela donde se aprende{' '}
                <span style={{ color: C.blue }}>con las manos en la tierra</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.muted }}>
                {BIZ.legalName} es el establecimiento municipal de educación especial de la
                comuna: gratuito, con huerto medicinal, murales pintados por sus propios
                estudiantes y un techo que genera su propia energía.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={BIZ.phoneTel}
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                  style={{ backgroundColor: C.blue }}
                >
                  Llamar a la escuela · {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-full text-sm md:text-base font-semibold border tap-44"
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={100}>
              <figure
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: C.line, backgroundColor: C.tint }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Estudiantes y autoridades junto al mural del picaflor pintado en la escuela"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption
                  className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  El mural del picaflor, pintado por estudiantes del Laboral 3A — diciembre 2025.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Lo que crece en este patio ── */}
      <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.tint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker>el patio también enseña</Kicker>
            <h2
              className="mt-3 font-extrabold tracking-tight leading-tight text-3xl md:text-5xl max-w-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              En San Clemente, esta escuela cultiva más que ramos
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
            <Reveal className="md:col-span-6">
              <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/huerto.webp`}
                    alt="Estudiantes, apoderados y autoridades en las canteras del huerto medicinal de la escuela"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} px-4 py-3 text-[11px] md:text-xs border-t`}
                  style={{ borderColor: C.line, color: C.muted }}
                >
                  El huerto medicinal del centro de padres — Foto: Ministerio del Medio Ambiente.
                </figcaption>
              </figure>
            </Reveal>
            <div className="md:col-span-6 space-y-5">
              {[
                {
                  tag: 'huerto medicinal · 2024',
                  title: 'Plantas que enseñan',
                  text: 'Un huerto de especies nativas, medicinales y aromáticas financiado por el Fondo de Protección Ambiental. Los estudiantes siembran, riegan y aprenden el valor de la flora local.',
                },
                {
                  tag: 'arte e inclusión · 2025',
                  title: 'Murales con firma propia',
                  text: 'Dos murales pintados por estudiantes del Laboral 3A en homenaje a las Olimpiadas Especiales 2027, con guía del pintor Manuel Mora y apoyo del Mineduc.',
                },
                {
                  tag: 'energía · 2015',
                  title: 'Un techo que trabaja',
                  text: 'Paneles solares del programa Techos Solares Públicos cubren parte del consumo eléctrico del establecimiento.',
                },
              ].map((p, i) => (
                <Reveal key={p.title} delay={i * 90}>
                  <article
                    className="rounded-2xl border p-5 md:p-6"
                    style={{ borderColor: C.line, backgroundColor: C.paper }}
                  >
                    <p
                      className={`${mono.className} uppercase tracking-[0.18em] text-[10px] md:text-[11px]`}
                      style={{ color: C.blue }}
                    >
                      {p.tag}
                    </p>
                    <h3
                      className="mt-2 font-extrabold text-xl md:text-2xl tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {p.text}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Cifras ── */}
      <section className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {CIFRAS.map((c, i) => (
              <Reveal key={c.v} delay={i * 80}>
                <div className="border-l-2 pl-4" style={{ borderColor: C.blue }}>
                  <p
                    className="font-extrabold text-2xl md:text-4xl tracking-tight"
                    style={{ fontFamily: 'var(--font-display)', color: C.ink }}
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

      {/* ── Bitácora ── */}
      <section
        className="border-t"
        style={{ borderColor: C.line, backgroundColor: C.ink, color: '#F5EFE2' }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker light>bitácora de la escuela</Kicker>
            <h2
              className="mt-3 font-extrabold tracking-tight leading-tight text-3xl md:text-5xl max-w-2xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Veinte años haciendo comunidad en Las Palmeras
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-10 items-start">
            <ol className="space-y-0">
              {HITOS.map((h, i) => (
                <Reveal key={h.year} delay={i * 90}>
                  <li
                    className="relative pl-14 md:pl-16 pb-8 border-l"
                    style={{ borderColor: 'rgba(245,239,226,0.25)' }}
                  >
                    <span
                      className={`${mono.className} absolute left-0 -translate-x-1/2 top-0 px-2 py-1 rounded-md text-[11px] md:text-xs font-bold`}
                      style={{ backgroundColor: C.blue, color: '#fff' }}
                    >
                      {h.year}
                    </span>
                    <h3
                      className="font-extrabold text-lg md:text-2xl tracking-tight leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(245,239,226,0.78)' }}>
                      {h.text}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={140}>
              <figure
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: 'rgba(245,239,226,0.25)' }}
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/comunidad.webp`}
                    alt="Comunidad educativa reunida en las canteras del huerto escolar"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${mono.className} px-4 py-3 text-[11px] md:text-xs leading-relaxed border-t`}
                  style={{ borderColor: 'rgba(245,239,226,0.25)', color: 'rgba(245,239,226,0.75)' }}
                >
                  La comunidad educativa en el cierre del proyecto del huerto — Foto: MMA.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Galería del lugar ── */}
      <section className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Kicker>el lugar, tal cual es</Kicker>
            <h2
              className="mt-3 font-extrabold tracking-tight leading-tight text-3xl md:text-5xl max-w-3xl"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              El patio, los pabellones y la entrada de Las Palmeras
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                src: `${IMG}/patio.webp`,
                alt: 'Comunidad escolar reunida en el patio techado durante una actividad',
                cap: 'El patio techado, corazón de las actividades de la escuela.',
              },
              {
                src: `${IMG}/pabellones.webp`,
                alt: 'Pabellones azules de la escuela vistos desde el jardín interior',
                cap: 'Los pabellones azules y el jardín interior del establecimiento.',
              },
              {
                src: `${IMG}/entrada.webp`,
                alt: 'Entrada arbolada de la escuela en la calle Las Palmeras, vista desde la calle',
                cap: 'La entrada por Las Palmeras — Google Street View, mayo 2024.',
              },
            ].map((g, i) => (
              <Reveal key={g.src} delay={i * 90}>
                <figure className="rounded-2xl overflow-hidden border" style={{ borderColor: C.line }}>
                  <div className="relative aspect-[4/3]">
                    <Image src={g.src} alt={g.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
                  </div>
                  <figcaption
                    className={`${mono.className} px-4 py-3 text-[11px] leading-relaxed border-t`}
                    style={{ borderColor: C.line, color: C.muted }}
                  >
                    {g.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto + mapa ── */}
      <section id="contacto" className="border-t" style={{ borderColor: C.line, backgroundColor: C.tint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div>
            <Reveal>
              <Kicker>hablar con la escuela</Kicker>
              <h2
                className="mt-3 font-extrabold tracking-tight leading-tight text-3xl md:text-5xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Matrículas y consultas, directo en Las Palmeras 30
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                Al ser un establecimiento municipal DAEM, la educación es gratuita. Las
                consultas se atienden en el establecimiento o por teléfono.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <dl className="mt-7 space-y-4">
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}, Región del Maule`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Correo', BIZ.email],
                  ['Directora', BIZ.directora],
                  ['Sostenedor', BIZ.sostenedor],
                ].map(([k, v]) => (
                  <div key={k} className="flex gap-4 border-b pb-3" style={{ borderColor: C.line }}>
                    <dt
                      className={`${mono.className} w-24 shrink-0 uppercase tracking-[0.14em] text-[10px] md:text-[11px] pt-1`}
                      style={{ color: C.blue }}
                    >
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-medium leading-snug">{v}</dd>
                  </div>
                ))}
              </dl>
              <a
                href={BIZ.phoneTel}
                className="mt-7 inline-flex items-center justify-center h-12 px-7 rounded-full text-sm md:text-base font-bold text-white transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.blue }}
              >
                Llamar · {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div
              className="rounded-2xl overflow-hidden border h-[300px] md:h-[420px]"
              style={{ borderColor: C.line }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa — Escuela Diferencial San Clemente, Las Palmeras 30"
                className="w-full h-full border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} mt-3 inline-block text-[11px] md:text-xs underline underline-offset-4 tap-44`}
              style={{ color: C.blueInk }}
            >
              Abrir en Google Maps ↗
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 md:justify-between">
          <p className="text-sm font-bold" style={{ fontFamily: 'var(--font-display)' }}>
            {BIZ.name}
          </p>
          <p className={`${mono.className} text-[11px] md:text-xs`} style={{ color: C.muted }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.blue} />
    </main>
  )
}
