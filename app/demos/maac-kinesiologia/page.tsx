import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'
import { BIZ, CALL_LINK, BOOKING_LINK, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-body',
})
const bodySemi = localFont({
  src: [{ path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' }],
  variable: '--f-body-s',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--f-mono',
})

// globals.css redefine --spacing-* dentro de las demos; se restauran aquí.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  ink: '#0C130D', // verde casi negro, del gimnasio en sus fotos
  panel: '#111B11',
  paper: '#F4F7F0',
  green: '#3FAE5B', // verde del logo
  greenDeep: '#1D5C33',
  lime: '#B8E26B',
  tinta: '#101810',
  suave: '#5B665A',
  linea: 'rgba(255,255,255,0.14)',
  lineaD: 'rgba(16,24,16,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'maac-kinesiologia',
  title: 'Maac Kinesiología — Rehabilitación deportiva y fisioterapia invasiva en Talca',
  description:
    'Clínica de medicina deportiva en Talca: rehabilitación de lesiones, fisioterapia invasiva ecoguiada y gimnasio guiado. Lun–Vie 8:00–21:00. 4.8★ en 81 reseñas. Agenda online o llama al +56 2 2494 6478.',
  image: `${IMG}/gimnasio-guiado.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Programa', href: '#programa' },
  { label: 'Equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const TICKER = [
  'Rehabilitación deportiva',
  'Fisioterapia invasiva ecoguiada',
  'Gimnasio guiado',
  'Evaluación kinésica',
  'Masoterapia',
  'Ejercicio terapéutico',
  'Isapre y Fonasa',
  'Talca y Curicó',
]

const SERVICIOS = [
  {
    n: '01',
    t: 'Rehabilitación deportiva',
    d: 'Del diagnóstico al retorno a la cancha: seguimiento completo de tu lesión con plan por etapas.',
    img: `${IMG}/analisis-marcha.webp`,
    alt: 'Kinesiólogo de Maac guiando a un paciente en caminadora durante análisis de marcha',
  },
  {
    n: '02',
    t: 'Rehabilitación traumatológica',
    d: 'Recuperación post lesión y post cirugía con ejercicio terapéutico y electroterapia.',
    img: `${IMG}/electroterapia.webp`,
    alt: 'Sesión de electroterapia en la zona lumbar dentro de la clínica Maac',
  },
  {
    n: '03',
    t: 'Fisioterapia invasiva',
    d: 'Punción seca y electrólisis ecoguiada: técnicas de vanguardia para lesiones que no ceden.',
    img: `${IMG}/puncion-seca.webp`,
    alt: 'Aplicación de punción seca ecoguiada en el tobillo de un paciente',
  },
  {
    n: '04',
    t: 'Gimnasio guiado',
    d: 'Entrenamiento físico kinésico con preparador físico: fuerza, prevención y rendimiento.',
    img: `${IMG}/gimnasio-guiado.webp`,
    alt: 'Entrenamiento guiado en el gimnasio de Maac Kinesiología',
  },
]

const EQUIPO = [
  { nombre: 'Marcos Altamirano Ch.', rol: 'Kinesiólogo · UPV' },
  { nombre: 'Pablo Bruna G.', rol: 'Kinesiólogo · UST · Mag. Fisioterapia Deportiva' },
  { nombre: 'Nicole Valenzuela E.', rol: 'Kinesióloga' },
  { nombre: 'Leonardo Poblete S.', rol: 'Preparador físico · CFT Santo Tomás' },
]

const RESENAS = [
  {
    t: 'Excelente servicio, llegué para rehabilitación deportiva de mi tendón de Aquiles, con kinesiólogos como Marcos Altamirano y Nicole Valenzuela. Ahora estoy en preparación física con Leonardo Poblete, entrenamiento personalizado 10/10.',
    a: 'Pablo Andrés Barraza G.',
  },
  {
    t: 'Tremendos profesionales, súper preocupados. Mis terapias con la kinesióloga Marialis me tienen súper contenta porque he tenido muchos avances y cada día me siento mucho mejor.',
    a: 'Abichuela Medina',
  },
  {
    t: 'Excelente experiencia en el gimnasio guiado de Maac Kinesiología. Buscaba llevar mi rendimiento deportivo al siguiente nivel y el trabajo con el preparador físico ha sido fundamental.',
    a: 'Benjamín Jesus',
  },
  {
    t: 'Excelente equipo, la kinesióloga Marielin un 7 en todo sentido, siempre pendiente de mi dolor y de la correcta realización de los ejercicios. Muy recomendable.',
    a: 'Vicente Quejer',
  },
]

function SectionTag({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.variable} font-[var(--f-mono)] text-[11px] uppercase tracking-[0.28em]`}
      style={{ color: dark ? C.green : C.greenDeep }}
    >
      {children}
    </p>
  )
}

export default function MaacKinesiologiaDemo() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${bodySemi.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.ink, color: C.paper, fontFamily: 'var(--f-body)' }}
    >
      <BlitzNav
        name={
          <span className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo oficial ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-full bg-white object-contain" aria-hidden="true" />
            <span className="font-[var(--f-display)] uppercase tracking-wide text-base md:text-lg leading-none pt-0.5">
              Maac <span style={{ color: C.green }}>Kinesiología</span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={BOOKING_LINK}
        ctaLabel="Agendar hora"
        theme={{
          over: 'dark',
          bar: 'rgba(12,19,13,0.92)',
          ink: '#F4F7F0',
          line: 'rgba(255,255,255,0.1)',
          btnBg: C.green,
          btnInk: '#08130B',
        }}
        fontClass="tap-44"
      />

      {/* HERO — panel oscuro tipo marcador deportivo */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[136px] pb-10 md:pb-16">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-12 items-center">
            <Reveal>
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span
                    className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border"
                    style={{ borderColor: C.linea, color: C.lime }}
                  >
                    Clínica de medicina deportiva
                  </span>
                  <span
                    className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border"
                    style={{ borderColor: C.linea, color: 'rgba(255,255,255,0.75)' }}
                  >
                    Talca · Maule
                  </span>
                </div>
                <h1
                  className="font-[var(--f-display)] uppercase leading-[0.95] text-[13vw] md:text-[76px]"
                  style={{ color: C.paper }}
                >
                  Recupera tu
                  <br />
                  <span style={{ color: C.green }}>mejor versión</span>
                </h1>
                <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(244,247,240,0.8)' }}>
                  Rehabilitación de lesiones deportivas y traumatológicas en Talca, con
                  fisioterapia invasiva ecoguiada y gimnasio guiado. Atendemos por Isapre y Fonasa.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={BOOKING_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-transform active:scale-95"
                    style={{ backgroundColor: C.green, color: '#08130B', fontFamily: 'var(--f-body-s)' }}
                  >
                    Agenda tu evaluación
                    <span aria-hidden="true">→</span>
                  </a>
                  <a
                    href={CALL_LINK}
                    className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide border transition-transform active:scale-95"
                    style={{ borderColor: 'rgba(255,255,255,0.35)', color: C.paper, fontFamily: 'var(--f-body-s)' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <figure className="relative">
                <div
                  className="absolute -top-3 -right-3 w-full h-full rounded-2xl border"
                  style={{ borderColor: C.green }}
                  aria-hidden="true"
                />
                {/* eslint-disable-next-line @next/next/no-img-element -- fotos propias ya optimizadas */}
                <img
                  src={`${IMG}/gimnasio-guiado.webp`}
                  alt="Entrenamiento guiado en el gimnasio de Maac Kinesiología, Talca"
                  className="relative w-full rounded-2xl object-cover aspect-[4/3] md:aspect-[5/4]"
                  loading="eager"
                />
                <figcaption
                  className="absolute bottom-3 left-3 font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em] px-2.5 py-1.5 rounded-md"
                  style={{ backgroundColor: 'rgba(8,19,11,0.85)', color: C.lime }}
                >
                  Gimnasio guiado · Talca
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Marcador de datos */}
          <Reveal delay={200}>
            <dl
              className="mt-10 md:mt-14 grid grid-cols-3 gap-px rounded-2xl overflow-hidden border"
              style={{ borderColor: C.linea, backgroundColor: C.linea }}
            >
              {[
                ['4.8★', `${BIZ.reviews} reseñas en Google`],
                ['95%', 'de los casos evita cirugía*'],
                ['Convenios', 'Isapre y Fonasa'],
              ].map(([v, l]) => (
                <div key={l} className="px-4 py-4 md:py-5" style={{ backgroundColor: C.panel }}>
                  <dt className="font-[var(--f-display)] text-xl md:text-3xl" style={{ color: C.green }}>{v}</dt>
                  <dd className="font-[var(--f-mono)] text-[9px] md:text-[10px] uppercase tracking-[0.14em] mt-1 leading-snug" style={{ color: 'rgba(244,247,240,0.6)' }}>
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="font-[var(--f-mono)] text-[9px] mt-2" style={{ color: 'rgba(244,247,240,0.4)' }}>
              *Según su propio material clínico.
            </p>
          </Reveal>
        </div>
      </section>

      {/* TICKER de servicios */}
      <style>{`
        @keyframes mq-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mq-track { animation: mq-scroll 26s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .mq-track { animation: none; } }
      `}</style>
      <div className="overflow-hidden border-y py-3" style={{ borderColor: C.linea, backgroundColor: C.greenDeep }} aria-hidden="true">
        <div className="mq-track flex gap-10 whitespace-nowrap w-max">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="font-[var(--f-display)] uppercase text-sm md:text-base tracking-wider flex items-center gap-10" style={{ color: '#EAF7E4' }}>
              {t} <span style={{ color: C.lime }}>✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* SERVICIOS — filas numeradas, no tarjetas */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <SectionTag dark>Servicios</SectionTag>
          <h2 className="font-[var(--f-display)] uppercase text-3xl md:text-5xl leading-[0.98] mt-3 max-w-2xl">
            Del diagnóstico a la cancha, en una sola clínica
          </h2>
        </Reveal>
        <div className="mt-10 md:mt-14 divide-y" style={{ borderColor: C.linea }}>
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 60}>
              <article className={`grid md:grid-cols-[88px_1fr_320px] items-center gap-5 md:gap-10 py-7 md:py-9 ${i === 0 ? 'pt-0' : ''}`}>
                <span className="font-[var(--f-display)] text-4xl md:text-5xl" style={{ color: 'rgba(255,255,255,0.16)' }}>
                  {s.n}
                </span>
                <div>
                  <h3 className="font-[var(--f-display)] uppercase text-xl md:text-2xl tracking-wide" style={{ color: C.paper }}>
                    {s.t}
                  </h3>
                  <p className="mt-2 text-sm md:text-[15px] leading-relaxed max-w-lg" style={{ color: 'rgba(244,247,240,0.72)' }}>
                    {s.d}
                  </p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.img}
                  alt={s.alt}
                  className="w-full md:w-[320px] aspect-[3/2] object-cover rounded-xl border"
                  style={{ borderColor: C.linea }}
                  loading="lazy"
                />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PROGRAMA — tarjeta de precio única */}
      <section id="programa" className="border-y" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div>
              <SectionTag dark>Programa integral</SectionTag>
              <h2 className="font-[var(--f-display)] uppercase text-3xl md:text-5xl leading-[0.98] mt-3">
                10 sesiones,
                <br />
                un mes contigo
              </h2>
              <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: 'rgba(244,247,240,0.75)' }}>
                Programa de kinesiología integral: evaluación kinésica, masoterapia,
                ejercicio terapéutico y fisioterapia, en un plan cerrado de 10 sesiones
                válido por un mes.
              </p>
              <ul className="mt-5 space-y-2">
                {['Evaluación kinésica', 'Masoterapia', 'Ejercicio terapéutico', 'Fisioterapia'].map((i) => (
                  <li key={i} className="flex items-center gap-3 font-[var(--f-mono)] text-xs uppercase tracking-[0.14em]" style={{ color: 'rgba(244,247,240,0.8)' }}>
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: C.green }} aria-hidden="true" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="rounded-2xl border p-7 md:p-9 text-center"
              style={{ borderColor: C.green, backgroundColor: '#0E1A0E' }}
            >
              <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.22em]" style={{ color: C.lime }}>
                Programa kinesiología integral
              </p>
              <p className="font-[var(--f-display)] text-6xl md:text-7xl mt-3" style={{ color: C.green }}>
                $220.000
              </p>
              <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em] mt-2" style={{ color: 'rgba(244,247,240,0.6)' }}>
                10 sesiones · válido por un mes
              </p>
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-transform active:scale-95"
                style={{ backgroundColor: C.green, color: '#08130B', fontFamily: 'var(--f-body-s)' }}
              >
                Reservar programa
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EQUIPO — roster */}
      <section id="equipo" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <Reveal>
            <SectionTag dark>Equipo</SectionTag>
            <h2 className="font-[var(--f-display)] uppercase text-3xl md:text-5xl leading-[0.98] mt-3">
              Tu cuerpo en manos de kinesiólogos
            </h2>
            <figure className="mt-8">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/bike-coaching.webp`}
                alt="Sesión de coaching en bicicleta estática con el equipo de Maac"
                className="w-full aspect-[3/4] object-cover rounded-2xl border"
                style={{ borderColor: C.linea }}
                loading="lazy"
              />
            </figure>
          </Reveal>
          <div className="divide-y md:pt-14" style={{ borderColor: C.linea }}>
            {EQUIPO.map((p, i) => (
              <Reveal key={p.nombre} delay={i * 60}>
                <div className="flex items-baseline justify-between gap-4 py-5">
                  <h3 className="font-[var(--f-display)] uppercase text-lg md:text-xl" style={{ color: C.paper }}>
                    {p.nombre}
                  </h3>
                  <p className="font-[var(--f-mono)] text-[10px] md:text-xs uppercase tracking-[0.14em] text-right shrink-0" style={{ color: C.green }}>
                    {p.rol}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={260}>
              <div className="pt-6 flex flex-wrap gap-6 items-center">
                <figure className="flex-1 min-w-[200px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/recuperacion-cryopush.webp`}
                    alt="Sesión de recuperación con botas de compresión Cryopush"
                    className="w-full aspect-[4/5] max-w-[220px] object-cover rounded-xl border"
                    style={{ borderColor: C.linea }}
                    loading="lazy"
                  />
                  <figcaption className="font-[var(--f-mono)] text-[9px] uppercase tracking-[0.14em] mt-2" style={{ color: 'rgba(244,247,240,0.5)' }}>
                    Recuperación con Cryopush
                  </figcaption>
                </figure>
                <p className="flex-1 min-w-[180px] font-[var(--f-mono)] text-[11px] leading-relaxed uppercase tracking-[0.1em]" style={{ color: 'rgba(244,247,240,0.6)' }}>
                  @{BIZ.name.toLowerCase().replace(' ', '')} en Instagram: 9.000+ seguidores y tips de rehabilitación cada semana.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="border-t" style={{ borderColor: C.linea, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <SectionTag dark>Reseñas de Google</SectionTag>
                <h2 className="font-[var(--f-display)] uppercase text-3xl md:text-5xl leading-[0.98] mt-3">
                  Pacientes que ya vuelven a moverse
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.green} className="w-5 h-5" />
                <span className="font-[var(--f-mono)] text-xs" style={{ color: 'rgba(244,247,240,0.7)' }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 60}>
                <blockquote
                  className="h-full rounded-2xl border p-6 flex flex-col justify-between"
                  style={{ borderColor: C.linea, backgroundColor: C.ink }}
                >
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: 'rgba(244,247,240,0.85)' }}>
                    “{r.t}”
                  </p>
                  <footer className="mt-5 flex items-center justify-between gap-3">
                    <cite className="not-italic font-[var(--f-mono)] text-[11px] uppercase tracking-[0.14em]" style={{ color: C.green }}>
                      {r.a}
                    </cite>
                    <Stars value={5} color={C.green} className="w-3.5 h-3.5" />
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <SectionTag dark>Ubicación</SectionTag>
          <h2 className="font-[var(--f-display)] uppercase text-3xl md:text-5xl leading-[0.98] mt-3">
            32 y Medio Oriente 1574, Talca
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="h-full flex flex-col gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/fachada.webp`}
                alt="Fachada de la clínica Maac Kinesiología en Solar del Parque, Talca"
                className="w-full rounded-2xl border object-cover"
                style={{ borderColor: C.linea }}
                loading="lazy"
              />
              <dl className="grid grid-cols-1 gap-px rounded-xl overflow-hidden border" style={{ borderColor: C.linea, backgroundColor: C.linea }}>
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Horario', `${BIZ.hours} · ${BIZ.weekend}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Agenda', 'agendamiento.reservo.cl'],
                  ['Correo', BIZ.email],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 px-4 py-3" style={{ backgroundColor: C.panel }}>
                    <dt className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em] pt-0.5" style={{ color: C.green }}>{k}</dt>
                    <dd className="text-sm text-right" style={{ color: 'rgba(244,247,240,0.85)' }}>{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden border h-[320px] md:h-full md:min-h-[420px]" style={{ borderColor: C.linea }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t" style={{ borderColor: C.linea, backgroundColor: C.greenDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <h2 className="font-[var(--f-display)] uppercase text-4xl md:text-6xl leading-[0.95]" style={{ color: C.paper }}>
              Tu lesión no se
              <br />
              rehabilita sola
            </h2>
            <p className="mt-4 text-sm md:text-base max-w-md mx-auto" style={{ color: 'rgba(244,247,240,0.75)' }}>
              Agenda una evaluación kinésica y empieza tu plan esta semana.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={BOOKING_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wide transition-transform active:scale-95"
                style={{ backgroundColor: C.paper, color: C.ink, fontFamily: 'var(--f-body-s)' }}
              >
                Agendar hora
              </a>
              <a
                href={CALL_LINK}
                className="tap-44 inline-flex items-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wide border transition-transform active:scale-95"
                style={{ borderColor: 'rgba(255,255,255,0.4)', color: C.paper, fontFamily: 'var(--f-body-s)' }}
              >
                Llamar ahora
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-6 text-center" style={{ backgroundColor: C.ink }}>
        <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em]" style={{ color: 'rgba(244,247,240,0.45)' }}>
          {BIZ.name} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
        </p>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.green} fg="#08130B" />
    </main>
  )
}
