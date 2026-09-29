import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  paper: '#F7F1E3',
  papel2: '#EFE5CD',
  maroon: '#4A1208',
  maroonDeep: '#360B05',
  amber: '#E8A90C',
  amberDark: '#B97F04',
  ink: '#2A2219',
  muted: '#6E6250',
  line: 'rgba(74,18,8,0.2)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'colegio-san-francisco-de-asis',
  title: 'Colegio San Francisco de Asís — Escuela católica en Talca',
  description:
    'Colegio católico en Calle 2 Poniente 929, Talca: párvulos a IV medio, talleres, deportes y comunidad educativa. Admisión escolar abierta.',
  image: '/demos/colegio-san-francisco-de-asis/fachada.webp',
})

const NAV_LINKS = [
  { label: 'El mural', href: '#mural' },
  { label: 'Niveles', href: '#niveles' },
  { label: 'Admisión', href: '#admision' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const NOTAS = [
  'Escuela católica',
  `${BIZ.address}, ${BIZ.city}`,
  'Lun a vie · 8:15–18:45',
  'Párvulos a IV medio',
]

const MURAL = [
  {
    src: `${IMG}/licenciatura.webp`,
    alt: 'Ceremonia de licenciatura en el patio del colegio: estudiantes de IV medio recibiendo su diploma al anochecer',
    fecha: 'Licenciatura',
    nota: 'La generación 4 medio egresa cada diciembre frente a toda la comunidad.',
  },
  {
    src: `${IMG}/invernadero.webp`,
    alt: 'Estudiante y profesor armando un invernadero escolar con plástico sobre un huerto de la escuela',
    fecha: 'Ciencias',
    nota: 'El huerto escolar: las clases de ciencias salen al patio.',
  },
  {
    src: `${IMG}/teatro.webp`,
    alt: 'Obra dramática de 5° básico: estudiantes disfrazados en un escenario decorado recreando cuentos clásicos',
    fecha: 'Taller de teatro',
    nota: 'Cuentos clásicos recreados por 5° básico en el taller de teatro.',
  },
  {
    src: `${IMG}/trekking.webp`,
    alt: 'Salida pedagógica de III medio: estudiantes con poleras amarillas del colegio caminando por un sendero de cerro',
    fecha: 'Salida pedagógica',
    nota: 'Educación física en terreno: trekking de III medio.',
  },
  {
    src: `${IMG}/teatro2.webp`,
    alt: 'Estudiantes disfrazados de época actuando en el escenario del colegio entre telas y luces',
    fecha: 'Escenario',
    nota: 'Las artes escénicas también son parte de la formación.',
  },
  {
    src: `${IMG}/pista.webp`,
    alt: 'Estudiantes del colegio con polera amarilla en la pista atlética junto a conos naranjos',
    fecha: 'Deporte',
    nota: 'Comunal de atletismo de menores: el colegio compite en pista.',
  },
]

const NIVELES = [
  {
    nivel: 'Párvulos',
    detalle: 'Prekínder y kínder: el juego como forma de aprender.',
    cinta: C.amber,
  },
  {
    nivel: 'Básica',
    detalle: '1° a 8° básico: teatro, huerto, deporte y buenas notas.',
    cinta: C.maroon,
  },
  {
    nivel: 'Media',
    detalle: 'I a IV medio: salidas pedagógicas y camino a la educación superior.',
    cinta: C.amberDark,
  },
]

function Cinta({ color, className = '' }: { color?: string; className?: string }) {
  return (
    <span
      className={`absolute -top-2.5 left-1/2 -translate-x-1/2 w-16 h-5 rotate-[-3deg] ${className}`}
      style={{
        backgroundColor: color || 'rgba(232,169,12,0.85)',
        boxShadow: '0 1px 2px rgba(0,0,0,0.15)',
      }}
      aria-hidden="true"
    />
  )
}

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3 flex items-center gap-3`}
      style={{ color: light ? C.amber : C.maroon }}
    >
      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: light ? C.amber : C.maroon }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function ColegioSanFranciscoPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide`}>Colegio San Francisco</span>
        }
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        logoSrc={`${IMG}/insignia.webp`}
        theme={{
          over: 'light',
          bar: C.paper,
          ink: C.maroon,
          line: C.line,
          btnBg: C.maroon,
          btnInk: C.paper,
        }}
      />

      {/* ── Portada: la cartelera del colegio ── */}
      <header id="inicio" className="relative pt-[76px] md:pt-[84px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-14 pb-10 md:pb-16 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <Kicker>{BIZ.rubro} · {BIZ.city}</Kicker>
            <h1
              className={`${display.className} leading-[1.0] tracking-[-0.01em] text-[clamp(2.6rem,8vw,5.6rem)]`}
              style={{ color: C.maroon }}
            >
              Colegio
              <br />
              San Francisco
              <br />
              de Asís
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-5 max-w-md" style={{ color: C.muted }}>
              El colegio del par de soleras de la 2 Poniente: comunidad
              educativa franciscana, poleras amarillas y una cartelera que
              nunca se queda quieta.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={TEL_LINK}
                className="text-sm md:text-base font-bold px-7 py-3 text-[#F7F1E3] transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A1208] tap-44"
                style={{ backgroundColor: C.maroon }}
              >
                Consultar: {BIZ.phoneDisplay}
              </a>
              <a
                href="#admision"
                className="text-sm md:text-base font-bold px-7 py-3 border-2 transition-colors hover:bg-[#4A1208] hover:text-[#F7F1E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4A1208] tap-44"
                style={{ borderColor: C.maroon, color: C.maroon }}
              >
                Admisión 2027
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              {/* polaroid trasera */}
              <div
                className="absolute -left-2 md:-left-6 top-10 w-[46%] rotate-[-7deg] bg-white p-2 pb-6 shadow-lg"
                aria-hidden="true"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={`${IMG}/entrada.webp`} alt="" fill sizes="300px" className="object-cover" />
                </div>
              </div>
              {/* polaroid principal */}
              <div className="relative ml-auto w-[82%] rotate-[2.5deg] bg-white p-2.5 pb-12 shadow-xl">
                <Cinta />
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada del Colegio San Francisco de Asís: edificio blanco con letrero amarillo del colegio sobre la reja de entrada en Calle 2 Poniente"
                    fill
                    priority
                    sizes="(min-width: 1024px) 420px, 85vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${mono.className} absolute bottom-3 left-3 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.maroon }}>
                  2 Pte. 929, Talca
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      {/* ── Franja de datos ── */}
      <section style={{ backgroundColor: C.maroon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-4">
            {NOTAS.map((n) => (
              <li key={n} className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.18em]`} style={{ color: C.amber }}>
                {n}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── El mural: noticias fijadas con cinta ── */}
      <section id="mural" className="scroll-mt-8" style={{ backgroundColor: C.papel2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <Kicker>La cartelera</Kicker>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0]`} style={{ color: C.maroon }}>
                Lo que el colegio
                <br />
                anda haciendo
              </h2>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                Las fotos salen de su propio blog y de su ficha de Google:
                licenciaturas, talleres, el huerto, el comunal de atletismo y
                las salidas a terreno.
              </p>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {MURAL.map((f, i) => (
              <Reveal key={f.fecha} delay={(i % 3) * 100}>
                <article
                  className={`relative bg-white p-2.5 pb-4 shadow-md ${i % 2 === 0 ? 'rotate-[-1.2deg]' : 'rotate-[1.4deg]'}`}
                >
                  <Cinta color={i % 2 === 0 ? 'rgba(232,169,12,0.85)' : 'rgba(74,18,8,0.55)'} />
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3 mb-1`} style={{ color: C.amberDark }}>
                    {f.fecha}
                  </p>
                  <p className="text-sm leading-snug font-semibold" style={{ color: C.ink }}>
                    {f.nota}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Niveles: fichas de archivo ── */}
      <section id="niveles" className="scroll-mt-8 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Kicker>Niveles educativos</Kicker>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-10 md:mb-14`} style={{ color: C.maroon }}>
            De prekínder
            <br />a IV medio
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {NIVELES.map((n, i) => (
            <Reveal key={n.nivel} delay={i * 110}>
              <article className="relative border-2 bg-white px-6 pt-7 pb-6 h-full" style={{ borderColor: C.maroon }}>
                <span
                  className="absolute -top-3 left-5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white"
                  style={{ backgroundColor: n.cinta }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${display.className} text-3xl md:text-4xl mb-2`} style={{ color: C.maroon }}>
                  {n.nivel}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                  {n.detalle}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <p className="mt-8 text-xs md:text-sm max-w-2xl" style={{ color: C.muted }}>
            En su sitio oficial también publican uniforme escolar, conducto
            regular, convivencia escolar y el centro de padres y apoderados.
          </p>
        </Reveal>
      </section>

      {/* ── Admisión: la ficha oficial ── */}
      <section id="admision" className="scroll-mt-8" style={{ backgroundColor: C.amber }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <Reveal>
              <Kicker light>Admisión escolar</Kicker>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-6`} style={{ color: C.maroonDeep }}>
                Proceso de admisión
                <br />
                2027 ya informado
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md font-medium" style={{ color: '#5A2D02' }}>
                El colegio publicó en su sitio la información del proceso de
                postulación 2027. La vía directa para consultar cupos es el
                teléfono de secretaría.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className="text-sm md:text-base font-bold px-7 py-3 text-[#F7F1E3] transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#360B05] tap-44"
                  style={{ backgroundColor: C.maroonDeep }}
                >
                  Consultar cupos: {BIZ.phoneDisplay}
                </a>
                <a
                  href={BIZ.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold px-7 py-3 border-2 transition-colors hover:bg-[#360B05] hover:text-[#F7F1E3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#360B05] tap-44"
                  style={{ borderColor: C.maroonDeep, color: C.maroonDeep }}
                >
                  Ver el proceso →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="relative bg-white p-2.5 pb-4 shadow-lg rotate-[1deg]">
                <Cinta color="rgba(74,18,8,0.55)" />
                <div className="relative aspect-[2.2/1] overflow-hidden">
                  <Image
                    src={`${IMG}/admision.webp`}
                    alt="Imagen de admisión del colegio con su insignia franciscana"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover object-top"
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mt-3`} style={{ color: C.maroon }}>
                  colegiosanfranciscotalca.cl · admisión
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="scroll-mt-8" style={{ backgroundColor: C.maroon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 md:gap-14 items-stretch">
            <Reveal>
              <Kicker light>Secretaría</Kicker>
              <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-6`} style={{ color: C.paper }}>
                Calle 2 Poniente 929
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(247,241,227,0.8)' }}>
                Entre 4 y 5 Norte, a pasos del instituto Andrés Bello. La
                secretaría atiende de lunes a viernes de 8:15 a 18:45.
              </p>
              <dl className="divide-y mb-8" style={{ borderColor: 'rgba(247,241,227,0.2)' }}>
                {[
                  ['Dirección', `${BIZ.address}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['Correo', BIZ.email],
                  ['Horario', 'Lu–Vi 8:15–18:45'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: 'rgba(247,241,227,0.2)' }}>
                    <dt className={`${mono.className} uppercase tracking-[0.16em] text-[11px]`} style={{ color: 'rgba(247,241,227,0.7)' }}>
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.paper }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3">
                <a
                  href={TEL_LINK}
                  className="text-sm md:text-base font-bold px-7 py-3 text-[#360B05] transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A90C] tap-44"
                  style={{ backgroundColor: C.amber }}
                >
                  Llamar al colegio
                </a>
                <a
                  href={BIZ.web}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base font-bold px-7 py-3 border-2 transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F7F1E3] tap-44"
                  style={{ borderColor: 'rgba(247,241,227,0.6)', color: C.paper }}
                >
                  colegiosanfranciscotalca.cl →
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="border-2 min-h-[320px] h-full overflow-hidden bg-white p-2"
                style={{ borderColor: C.maroonDeep }}
              >
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[304px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.maroonDeep, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/insignia.webp`} alt="" className="h-10 w-10 object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} text-xl leading-none`}>{BIZ.name}</p>
              <address className="not-italic text-xs mt-1" style={{ color: 'rgba(247,241,227,0.75)' }}>
                {BIZ.address}, {BIZ.city} · <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[24rem]" style={{ color: 'rgba(247,241,227,0.6)' }}>
            Mockup de Sitiazo: datos y fotos reales del colegio; textos de
            muestra para mostrar el sitio.
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.amber} fg={C.maroonDeep} />
    </div>
  )
}
