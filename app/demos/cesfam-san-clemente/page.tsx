import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { DemoBand } from '../kit'
import { BIZ, CALL_LINK, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/source-serif-4/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
  variable: '--f-display',
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--f-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
  variable: '--f-mono',
})

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as React.CSSProperties

const C = {
  papel: '#F7F3EA',
  tarjeta: '#FFFDF7',
  teal: '#0E6E5F', // verde salud del programa APS
  tealOscuro: '#0A4A41',
  tinta: '#1E2A27',
  suave: '#5C6B66',
  linea: 'rgba(30,42,39,0.14)',
  rojo: '#B3382E',
  verde: '#3E7C4F',
  amarillo: '#D9A321',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cesfam-san-clemente',
  title: 'CESFAM San Clemente — CESFAM Dr. Juan Carlos Baeza',
  description:
    'Centro de Salud Familiar municipal de San Clemente: consulta médica, odontología, farmacia, laboratorio y SAR al costado. Lun–Vie 8:30–20:00, sáb hasta 13:00. Tel +56 71 262 1628.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Atenciones', href: '#atenciones' },
  { label: 'Sectores', href: '#sectores' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const PASOS = [
  { n: '1', t: 'Inscríbete', d: 'Lleva tu cédula a la oficina de inscripción; el CESFAM es gratuito con Fonasa.' },
  { n: '2', t: 'Toma tu hora', d: 'Presencial o por teléfono al +56 71 262 1628. También hay horas del día.' },
  { n: '3', t: 'Llega a tu sector', d: 'La sala te asigna un sector por color según tu domicilio.' },
]

const ATENCIONES = [
  {
    t: 'Consulta médica general',
    d: 'Medicina familiar para adultos y niños, controles y derivaciones.',
    icon: (
      <path d="M4 12h4l2-6 4 12 2-6h4" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: 'Odontología',
    d: 'Módulo dental del CESFAM: urgencias, controles y tratamientos.',
    icon: (
      <path d="M12 5c-2-2-6-1.5-6 2 0 4 1.5 9 2.5 9s1.5-4 3.5-4 2.5 4 3.5 4 2.5-5 2.5-9c0-3.5-4-4-6-2z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: 'Farmacia',
    d: 'Retiro de medicamentos con receta dentro del mismo edificio.',
    icon: (
      <path d="M8 3v4M6 5h4M4 11h16v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8zM9 15h6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: 'Laboratorio',
    d: 'Toma de muestras y exámenes de sangre en horario de mañana.',
    icon: (
      <path d="M9 3h6M10 3v5l-5 9a2.4 2.4 0 0 0 2 4h10a2.4 2.4 0 0 0 2-4l-5-9V3" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: 'Vacunatorio y programas',
    d: 'Vacunas del programa nacional y controles de salud preventivos.',
    icon: (
      <path d="M12 3l7 4v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V7l7-4z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    t: 'SAR junto al CESFAM',
    d: 'Urgencias de alta resolutividad 24 hrs, al costado del edificio.',
    icon: (
      <path d="M12 4v16M4 12h16" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
]

const RED = [
  ['CESFAM', 'Dr. Juan Carlos Baeza — Av. Huamachuco'],
  ['CECOSF Aurora', 'Población Aurora'],
  ['CECOSF Chile Nuevo', 'Sector Chile Nuevo'],
  ['USAF San Máximo', 'Sector San Máximo'],
  ['Postas rurales', 'Red rural de la comuna'],
]

const SECTORES = [
  { color: C.rojo, nombre: 'Rojo', nota: 'Sector oriente de la comuna' },
  { color: C.verde, nombre: 'Verde', nota: 'Sector centro' },
  { color: C.amarillo, nombre: 'Amarillo', nota: 'Sector poniente y apoyo' },
]

const RESENAS = [
  {
    t: 'La atención de CESFAM San Clemente siempre ha sido de excelencia; tengo la suerte de atenderme ahí desde junio del año pasado. Personal administrativo, cordial y rápido. Personal médico y paramédico de excelente nivel.',
    a: 'Rafael Navarrete',
    s: 5,
  },
  {
    t: 'Llegué de emergencia con un dolor de cabeza fulminante y pese a que había mucha gente esperando fui atendido en un plazo de 25 minutos. El personal muy gentil y preocupado de mi cuadro.',
    a: 'Erico Pillado',
    s: 5,
  },
  {
    t: 'Las veces que me ha tocado ir, excelente atención de parte de los médicos, en especial la atención del doctor Carrasco en urgencias.',
    a: 'Edgardo Lara',
    s: 5,
  },
  {
    t: 'Es un lugar limpio y libre de humo. En la farmacia están atendiendo muy bien.',
    a: 'Maria Campos',
    s: 5,
  },
  {
    t: 'Médico explica a los enfermos por qué tiene ciertos síntomas y dolencias. Personal que atiende con mucha paciencia a los usuarios.',
    a: 'Lia Ocampo',
    s: 5,
  },
]

const GALERIA = [
  { src: `${IMG}/sala-espera.webp`, alt: 'Sala de espera del CESFAM con sus sillas roja, verde y amarilla por sector', cap: 'Sala de espera por sectores' },
  { src: `${IMG}/llamado-pantalla.webp`, alt: 'Pantalla de llamado de pacientes en la sala de espera del CESFAM', cap: 'Pantalla de llamado' },
  { src: `${IMG}/desam.webp`, alt: 'Móvil del Departamento de Salud Municipal de San Clemente', cap: 'Móvil del DESAM' },
  { src: `${IMG}/sar.webp`, alt: 'Acceso del SAR de San Clemente junto al CESFAM', cap: 'SAR 24 hrs al costado' },
]

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-[var(--f-mono)] text-[11px] uppercase tracking-[0.26em] font-medium" style={{ color: C.teal }}>
      {children}
    </p>
  )
}

export default function CesfamSanClementeDemo() {
  return (
    <main
      id="inicio"
      className={`${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta, fontFamily: 'var(--f-body)' }}
    >
      {/* Banda institucional */}
      <div
        className="pt-[60px] md:pt-[68px] text-center font-[var(--f-mono)] text-[10px] uppercase tracking-[0.2em] px-4 py-2"
        style={{ backgroundColor: C.tealOscuro, color: 'rgba(255,255,255,0.85)' }}
      >
        {BIZ.legal} · Salud municipal de San Clemente
      </div>

      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo municipal recortado de la señalética real */}
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 rounded-md object-contain bg-white border" style={{ borderColor: C.linea }} aria-hidden="true" />
            <span className="font-[var(--f-display)] font-semibold text-lg md:text-xl leading-none">
              CESFAM <span style={{ color: C.teal }}>San Clemente</span>
            </span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'light',
          bar: 'rgba(247,243,234,0.94)',
          ink: C.tinta,
          line: C.linea,
          btnBg: C.teal,
          btnInk: '#fff',
        }}
      />

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-12 md:pb-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <Reveal>
            <div>
              <p
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-[var(--f-mono)] text-[10px] uppercase tracking-[0.18em] border"
                style={{ borderColor: C.teal, color: C.tealOscuro, backgroundColor: '#EAF3EE' }}
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.teal }} aria-hidden="true" />
                Lun–Vie abierto hasta las 20:00
              </p>
              <h1 className="font-[var(--f-display)] font-semibold text-[11.5vw] md:text-[54px] leading-[1.02] mt-5 tracking-tight">
                La puerta de entrada a la salud de{' '}
                <em className="not-italic" style={{ color: C.teal }}>San Clemente</em>
              </h1>
              <p className="mt-4 text-[15px] md:text-base leading-relaxed max-w-md" style={{ color: C.suave }}>
                El Centro de Salud Familiar Dr. Juan Carlos Baeza atiende a la comuna
                desde 2008: consulta médica, odontología, farmacia y laboratorio en un
                solo edificio, y el SAR 24 horas al costado.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform active:scale-95"
                  style={{ backgroundColor: C.teal, color: '#fff' }}
                >
                  Pedir hora: {BIZ.phoneDisplay}
                </a>
                <a
                  href="#atenciones"
                  className="tap-44 inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold border transition-transform active:scale-95"
                  style={{ borderColor: C.tinta, color: C.tinta }}
                >
                  Ver atenciones
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${IMG}/fachada.webp`}
                alt="Fachada del CESFAM Dr. Juan Carlos Baeza en Avenida Huamachuco, San Clemente"
                className="w-full rounded-2xl border shadow-sm object-cover aspect-[21/10]"
                style={{ borderColor: C.linea }}
                loading="eager"
              />
              <figcaption className="mt-2 font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: C.suave }}>
                Av. Huamachuco s/n · {BIZ.city}
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Datos rápidos */}
        <Reveal delay={200}>
          <div className="mt-10 grid grid-cols-3 gap-3 md:gap-4">
            {[
              ['38.000', 'vecinos atendidos al año'],
              ['2008', 'atendiendo a la comuna desde'],
              ['DEIS', `establecimiento n° ${BIZ.deis}`],
            ].map(([v, l]) => (
              <div
                key={l}
                className="rounded-2xl border px-4 py-4 md:px-6 md:py-5"
                style={{ backgroundColor: C.tarjeta, borderColor: C.linea }}
              >
                <p className="font-[var(--f-display)] font-semibold text-xl md:text-3xl" style={{ color: C.tealOscuro }}>{v}</p>
                <p className="font-[var(--f-mono)] text-[9px] md:text-[10px] uppercase tracking-[0.14em] mt-1 leading-snug" style={{ color: C.suave }}>{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CÓMO ATENDERTE — pasos */}
      <section className="border-y" style={{ borderColor: C.linea, backgroundColor: C.tarjeta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
          <Reveal>
            <Tag>¿Cómo atenderte?</Tag>
            <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight">
              Tres pasos y listo
            </h2>
          </Reveal>
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {PASOS.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <div
                  className="relative rounded-2xl border p-6 h-full"
                  style={{ backgroundColor: C.papel, borderColor: C.linea }}
                >
                  <span
                    className="font-[var(--f-display)] font-semibold text-4xl absolute top-4 right-5"
                    style={{ color: 'rgba(14,110,95,0.18)' }}
                    aria-hidden="true"
                  >
                    {p.n}
                  </span>
                  <h3 className="font-[var(--f-display)] font-semibold text-xl mt-1">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.suave }}>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ATENCIONES — grilla con íconos */}
      <section id="atenciones" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Tag>Atenciones</Tag>
          <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight max-w-xl">
            Todo lo que necesitas, bajo un mismo techo
          </h2>
        </Reveal>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ATENCIONES.map((s, i) => (
            <Reveal key={s.t} delay={i * 50}>
              <article
                className="rounded-2xl border p-6 h-full transition-shadow hover:shadow-md"
                style={{ backgroundColor: C.tarjeta, borderColor: C.linea }}
              >
                <span
                  className="inline-flex w-10 h-10 rounded-xl items-center justify-center"
                  style={{ backgroundColor: '#EAF3EE', color: C.tealOscuro }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="font-[var(--f-display)] font-semibold text-lg mt-4">{s.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed" style={{ color: C.suave }}>{s.d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTORES — banda de colores */}
      <section id="sectores" style={{ backgroundColor: C.tealOscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-18">
          <Reveal>
            <p className="font-[var(--f-mono)] text-[11px] uppercase tracking-[0.26em]" style={{ color: '#A8D8C4' }}>
              Sectores de atención
            </p>
            <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight" style={{ color: '#F4FAF6' }}>
              Tu sector depende de dónde vives
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base leading-relaxed" style={{ color: 'rgba(244,250,246,0.75)' }}>
              Al inscribirte, la sala te asigna un equipo de salud según tu domicilio.
              Cada sector tiene su propio equipo médico: así el mismo equipo te
              conoce y te sigue en el tiempo.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-3 md:gap-4">
            {SECTORES.map((s, i) => (
              <Reveal key={s.nombre} delay={i * 70}>
                <div className="rounded-2xl p-5 md:p-6 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <span
                    className="inline-block w-8 h-8 md:w-10 md:h-10 rounded-full mx-auto border-2 border-white/30"
                    style={{ backgroundColor: s.color }}
                    aria-hidden="true"
                  />
                  <p className="font-[var(--f-display)] font-semibold text-lg md:text-xl mt-3" style={{ color: '#F4FAF6' }}>
                    Sector {s.nombre}
                  </p>
                  <p className="font-[var(--f-mono)] text-[9px] md:text-[10px] uppercase tracking-[0.14em] mt-1" style={{ color: 'rgba(244,250,246,0.6)' }}>
                    {s.nota}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Red comunal de salud">
              {RED.map(([t, d]) => (
                <li
                  key={t}
                  className="rounded-full px-4 py-2 text-xs md:text-sm border"
                  style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(244,250,246,0.85)' }}
                  title={d}
                >
                  <strong className="font-semibold">{t}</strong>
                  <span style={{ color: 'rgba(244,250,246,0.55)' }}> · {d}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* GALERÍA */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Tag>El CESFAM por dentro</Tag>
          <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight">
            Así te recibe
          </h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {GALERIA.map((g, i) => (
            <Reveal key={g.src} delay={i * 60}>
              <figure className="h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={g.src}
                  alt={g.alt}
                  className="w-full aspect-[3/4] object-cover rounded-2xl border"
                  style={{ borderColor: C.linea }}
                  loading="lazy"
                />
                <figcaption className="mt-2 font-[var(--f-mono)] text-[9px] md:text-[10px] uppercase tracking-[0.14em]" style={{ color: C.suave }}>
                  {g.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* RESEÑAS */}
      <section id="resenas" className="border-t" style={{ borderColor: C.linea, backgroundColor: C.tarjeta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Tag>Lo que dice la comuna</Tag>
                <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight">
                  Reseñas reales de Google
                </h2>
              </div>
              <div className="flex items-center gap-2.5">
                <Stars value={BIZ.rating} color={C.teal} className="w-4 h-4" />
                <span className="font-[var(--f-mono)] text-xs" style={{ color: C.suave }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas
                </span>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 columns-1 md:columns-2 lg:columns-3 gap-4 [&>figure]:break-inside-avoid">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 50}>
                <figure
                  className="mb-4 rounded-2xl border p-6"
                  style={{ backgroundColor: C.papel, borderColor: C.linea }}
                >
                  <blockquote className="text-sm leading-relaxed" style={{ color: C.tinta }}>
                    “{r.t}”
                  </blockquote>
                  <figcaption className="mt-4 flex items-center justify-between gap-3">
                    <span className="font-[var(--f-mono)] text-[11px] uppercase tracking-[0.12em]" style={{ color: C.tealOscuro }}>
                      {r.a}
                    </span>
                    <Stars value={r.s} color={C.teal} className="w-3 h-3" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section id="ubicacion" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Tag>Ubicación y horarios</Tag>
          <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-4xl mt-2 tracking-tight">
            Avenida Huamachuco s/n
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <dl className="h-full flex flex-col gap-px rounded-2xl overflow-hidden border" style={{ borderColor: C.linea, backgroundColor: C.linea }}>
              {[
                ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                ['Semana', BIZ.hours],
                ['Sábado', '8:30–13:00'],
                ['Domingo', 'Cerrado — urgencias al SAR (24 hrs)'],
                ['Teléfono', BIZ.phoneDisplay],
                ['Modelo', 'Atención Integral de Salud (MAIS)'],
              ].map(([k, v]) => (
                <div key={k} className="flex flex-1 items-center justify-between gap-4 px-5 py-3.5" style={{ backgroundColor: C.tarjeta }}>
                  <dt className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em] shrink-0" style={{ color: C.tealOscuro }}>{k}</dt>
                  <dd className="text-sm text-right" style={{ color: C.tinta }}>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl overflow-hidden border h-[320px] md:h-full md:min-h-[420px]" style={{ borderColor: C.linea }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} className="h-full w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: C.tealOscuro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-16 text-center">
          <Reveal>
            <h2 className="font-[var(--f-display)] font-semibold text-3xl md:text-5xl tracking-tight" style={{ color: '#F4FAF6' }}>
              La salud de la comuna
              <br />
              empieza por una hora
            </h2>
            <a
              href={CALL_LINK}
              className="tap-44 mt-8 inline-flex items-center rounded-full px-8 py-3 text-sm font-semibold transition-transform active:scale-95"
              style={{ backgroundColor: '#F4FAF6', color: C.tealOscuro }}
            >
              Llamar al {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-6 text-center" style={{ backgroundColor: C.papel }}>
        <p className="font-[var(--f-mono)] text-[10px] uppercase tracking-[0.16em]" style={{ color: C.suave }}>
          {BIZ.legal} · {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
        </p>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={CALL_LINK} label={`Llamar al ${BIZ.name}`} bg={C.teal} fg="#fff" />
    </main>
  )
}
