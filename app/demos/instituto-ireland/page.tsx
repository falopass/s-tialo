import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, TEL_LINK, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

const C = {
  cream: '#F3EDDE',
  cream2: '#EAE1CB',
  navy: '#1E3A5F',
  navyDeep: '#13273F',
  gold: '#C19A4B',
  ink: '#1E222B',
  muted: '#5C636F',
  line: 'rgba(30,58,95,0.25)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'instituto-ireland',
  title: 'CFT Ireland — Centro de Formación Técnica en Talca',
  description:
    'CFT Ireland: técnico de nivel superior en Administración de Empresas, Auditoría y educación a distancia (MED) en 3 Oriente 1264, Talca.',
  image: '/demos/instituto-ireland/calle-3-oriente.webp',
})

const NAV_LINKS = [
  { label: 'Carreras', href: '#carreras' },
  { label: 'A distancia', href: '#distancia' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const REGISTRO = [
  'Reconocido por Decreto N°267/1999',
  `RUT ${BIZ.rut}`,
  `${BIZ.address}, ${BIZ.city}`,
  'Área Administración y Comercio',
]

const CARRERAS = [
  {
    codigo: '01',
    nombre: 'TNS Administración de Empresas',
    detalle: 'Técnico de Nivel Superior: gestión, contabilidad y administración para empresas chilenas.',
    modalidad: 'Presencial',
  },
  {
    codigo: '02',
    nombre: 'TNS Auditoría',
    detalle: 'Formación técnica en revisión de cuentas, procesos contables y control interno.',
    modalidad: 'Presencial',
  },
  {
    codigo: '03',
    nombre: 'Educación a Distancia (MED)',
    detalle: 'La misma malla en modalidad online: para quienes trabajan y estudian a la vez.',
    modalidad: 'Online',
  },
]

const MED_PUNTOS = [
  'Misma carrera y mismo título, sin ir a clases presenciales.',
  'Pensada para gente que trabaja de día y estudia de noche.',
  'Consultas y matrícula directamente en secretaría o por teléfono.',
]

function Kicker({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`}
      style={{ color: light ? C.gold : C.navy }}
    >
      {children}
    </p>
  )
}

function Sello() {
  return (
    <span
      className={`${mono.className} inline-flex items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-2 rotate-[-10deg] text-center leading-tight text-[9px] md:text-[10px] uppercase tracking-[0.12em] px-3`}
      style={{ borderColor: C.gold, color: C.navy, borderStyle: 'double' }}
      aria-hidden="true"
    >
      CFT
      <br />
      Talca
      <br />
      ·1999·
    </span>
  )
}

export default function InstitutoIrelandPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.cream, color: C.ink }}
    >
      <BlitzNav
        name={<span className={`${display.className} tracking-[0.08em]`}>IRELAND</span>}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        theme={{
          over: 'light',
          bar: C.cream,
          ink: C.navy,
          line: C.line,
          btnBg: C.navy,
          btnInk: C.cream,
        }}
      />

      {/* ── Portada: el expediente ── */}
      <header id="inicio" className="relative pt-[76px] md:pt-[84px]">
        <div className="max-w-4xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-14 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] mb-4`} style={{ color: C.muted }}>
              {BIZ.rubro} · {BIZ.decreto}
            </p>
            <h1
              className={`${display.className} tracking-[0.04em] leading-[1.02] text-[clamp(3rem,10vw,6.5rem)]`}
              style={{ color: C.navy }}
            >
              IRELAND
            </h1>
            <p className="text-base md:text-lg leading-relaxed mt-4 max-w-xl mx-auto" style={{ color: C.muted }}>
              El CFT de la 3 Oriente que lleva más de 25 años formando
              técnicos de nivel superior en Administración y Comercio —
              presencial y a distancia.
            </p>
            <div className="mt-6 flex justify-center">
              <Sello />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={TEL_LINK}
                className="text-sm md:text-base font-bold px-8 py-3 text-[#F3EDDE] transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F] tap-44"
                style={{ backgroundColor: C.navy }}
              >
                Consultar: {BIZ.phoneDisplay}
              </a>
              <a
                href="#carreras"
                className="text-sm md:text-base font-bold px-8 py-3 border-2 transition-colors hover:bg-[#1E3A5F] hover:text-[#F3EDDE] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E3A5F] tap-44"
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Ver carreras
              </a>
            </div>
          </Reveal>
        </div>

        {/* Foto de la cuadra como lámina del expediente */}
        <Reveal delay={120}>
          <figure className="max-w-4xl mx-auto px-5 md:px-8 pb-12">
            <div className="border-2 bg-white p-2 shadow-md" style={{ borderColor: C.navy }}>
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={`${IMG}/calle-3-oriente.webp`}
                  alt="Calle 3 Oriente de Talca a la altura del instituto: calle arbolada con edificios de oficinas"
                  fill
                  priority
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <figcaption className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em] mt-3 text-center`} style={{ color: C.muted }}>
              La cuadra de la 3 Oriente, entre 1 y 2 Norte · Google Street View
            </figcaption>
          </figure>
        </Reveal>
      </header>

      {/* ── Franja de registro ── */}
      <section style={{ backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 py-4">
            {REGISTRO.map((r) => (
              <li key={r} className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.gold }}>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Carreras como libro de registros ── */}
      <section id="carreras" className="scroll-mt-8 max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Kicker>Oferta académica</Kicker>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mb-4`} style={{ color: C.navy }}>
            Tres formas de
            <br />
            titularte aquí
          </h2>
          <p className="text-sm md:text-base max-w-xl mb-10" style={{ color: C.muted }}>
            Carreras técnicas del área Administración y Comercio, impartidas
            en Talca desde antes de que existieran las plataformas online.
          </p>
        </Reveal>

        <div className="border-t-2" style={{ borderColor: C.navy }}>
          {CARRERAS.map((c, i) => (
            <Reveal key={c.codigo} delay={i * 90}>
              <article
                className="grid grid-cols-[auto_1fr] md:grid-cols-[70px_1fr_130px] gap-x-5 gap-y-1 items-baseline py-6 border-b"
                style={{ borderColor: C.line }}
              >
                <span className={`${mono.className} text-lg md:text-2xl`} style={{ color: C.gold }}>
                  {c.codigo}
                </span>
                <div>
                  <h3 className={`${display.className} text-2xl md:text-3xl mb-1`} style={{ color: C.navy }}>
                    {c.nombre}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                    {c.detalle}
                  </p>
                </div>
                <span
                  className={`${mono.className} col-start-2 md:col-start-3 text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:text-right`}
                  style={{ color: C.navy }}
                >
                  {c.modalidad}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── A distancia (imagen ilustrativa marcada como bosquejo) ── */}
      <section id="distancia" className="scroll-mt-8" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <div className="relative border-2 bg-white p-2 shadow-lg" style={{ borderColor: C.gold }}>
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`${IMG}/estudio-bosquejo.webp`}
                    alt="Ilustración de muestra de una persona estudiando de noche en un computador portátil"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <span
                  className={`${mono.className} absolute top-4 right-4 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold rotate-[3deg]`}
                  style={{ backgroundColor: C.gold, color: C.navyDeep }}
                >
                  Bosquejo
                </span>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <Kicker light>Modalidad Educación a Distancia</Kicker>
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: C.cream }}>
                Estudiar de noche
                <br />
                sin dejar el trabajo
              </h2>
              <ul className="space-y-4 mb-8">
                {MED_PUNTOS.map((p) => (
                  <li key={p} className="flex gap-3 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(243,237,222,0.85)' }}>
                    <span className={`${mono.className} shrink-0 mt-0.5`} style={{ color: C.gold }}>—</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={TEL_LINK}
                className="inline-block text-sm md:text-base font-bold px-8 py-3 text-[#13273F] transition-all hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C19A4B] tap-44"
                style={{ backgroundColor: C.gold }}
              >
                Consultar por MED: {BIZ.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-8 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
        <Reveal>
          <Kicker>Cómo llegar</Kicker>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mb-10`} style={{ color: C.navy }}>
            3 Oriente 1264,
            <br />
            en pleno centro
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-start">
          <div className="space-y-6">
            <Reveal delay={80}>
              <div className="border-2 bg-white p-2 shadow-md" style={{ borderColor: C.navy }}>
                <div className="relative aspect-[21/9] overflow-hidden">
                  <Image
                    src={`${IMG}/esquina-1-norte.webp`}
                    alt="Esquina de 3 Oriente con 1 Norte en Talca, a un paso del instituto"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <dl className="divide-y border-y-2" style={{ borderColor: C.line }}>
                {[
                  ['Institución', `${BIZ.name} (${BIZ.legal})`],
                  ['Dirección', `${BIZ.address}, ${BIZ.entre}, ${BIZ.city}`],
                  ['Teléfono', BIZ.phoneDisplay],
                  ['RUT', BIZ.rut],
                  ['Reconocimiento', 'CFT autorizado · Decreto N°267 de 1999'],
                ].map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-3" style={{ borderColor: C.line }}>
                    <dt className={`${mono.className} uppercase tracking-[0.16em] text-[11px] shrink-0`} style={{ color: C.muted }}>
                      {k}
                    </dt>
                    <dd className="text-sm md:text-base font-semibold text-right" style={{ color: C.ink }}>
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <div className="border-2 bg-white p-2 shadow-md min-h-[340px] h-full" style={{ borderColor: C.navy }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[324px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} text-2xl tracking-[0.08em] leading-none`}>IRELAND</p>
            <address className="not-italic text-xs mt-1" style={{ color: 'rgba(243,237,222,0.75)' }}>
              {BIZ.address}, {BIZ.city} · <a href={TEL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            </address>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[24rem]" style={{ color: 'rgba(243,237,222,0.6)' }}>
            Mockup de Sitiazo: datos reales del instituto; la ilustración de
            la sección MED es un bosquejo de muestra, no una foto del CFT.
          </p>
        </div>
      </footer>

      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.gold} fg={C.navyDeep} />
    </div>
  )
}
