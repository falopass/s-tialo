import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED } from './content'
import { PehuenIcon, PehuenField, ObraScene } from './scenes'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' },
    { path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900', style: 'italic' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F5F1E8',
  soft: '#E9E3D3',
  card: '#FFFFFF',
  deep: '#1E3A2B',
  deepSoft: '#2E5741',
  ochre: '#C97B2D',
  ochreInk: '#8F5518',
  goldLight: '#E8A453',
  ink: '#201F17',
  muted: '#5C5846',
  line: 'rgba(32,31,23,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-pehuenche',
  title: 'Constructora Pehuenche — Empresa constructora en Talca',
  description:
    'Constructora Pehuenche Limitada en el centro de Talca: construcción de viviendas, ampliaciones, remodelaciones y obras para empresas. Oficina en 3 Oriente 1424.',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'La empresa', href: '#empresa' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    name: 'Construcción de viviendas',
    desc: 'Casas desde la primera palada hasta la entrega: fundaciones, estructura, techumbre y terminaciones.',
  },
  {
    n: '02',
    name: 'Ampliaciones y remodelaciones',
    desc: 'Ganar metros útiles o renovar lo que ya está: piezas, baños, cocinas y fachadas.',
  },
  {
    n: '03',
    name: 'Obras para empresas',
    desc: 'Locales, oficinas y recintos de trabajo ejecutados con planificación y palabra cumplida.',
  },
  {
    n: '04',
    name: 'Obras gruesas y terminaciones',
    desc: 'Del hormigón a la pintura final: estructura sólida y remates que se notan.',
  },
]

const PORQUE = [
  {
    title: 'Empresa constituida',
    desc: 'Constructora Pehuenche Limitada: sociedad formal, con oficina y responsable detrás de cada obra.',
  },
  {
    title: 'Oficina en pleno centro',
    desc: 'Están en 3 Oriente 1424, a pasos del centro de Talca — se puede ir a conversar el proyecto en persona.',
  },
  {
    title: 'Trato a la antigua',
    desc: 'Se llama por teléfono, se conversa el proyecto y se acuerda la visita. Sin formularios ni bots.',
  },
]

const PASOS = [
  {
    title: 'La llamada',
    desc: 'Llama al fijo de la oficina y cuenta qué quieres construir: casa, ampliación u obra comercial.',
  },
  {
    title: 'Visita y presupuesto',
    desc: 'Coordinan la visita, revisan el terreno o la construcción y entregan presupuesto.',
  },
  {
    title: 'Ejecución',
    desc: 'La obra avanza con cuadrilla propia y los alcances acordados desde el inicio.',
  },
  {
    title: 'Entrega',
    desc: 'La obra se entrega terminada y revisada con el cliente, como corresponde.',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.goldLight : C.ochreInk }}
    >
      <PehuenIcon className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function ConstructoraPehuenchePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(245,241,232,0.95)',
          ink: C.ink,
          line: C.line,
          btnBg: C.deep,
          btnInk: '#F5F1E8',
        }}
      />

      {/* ── Hero editorial con escena SVG propia ── */}
      <section id="inicio" className="pt-28 md:pt-36 pb-0">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Empresa constructora · Talca centro</Eyebrow>
            <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-14 items-end mb-10 md:mb-14">
              <div>
                <h1
                  className={`${display.className} scroll-mt-28 font-black leading-[1.02] tracking-[-0.01em] text-[clamp(2.6rem,8.5vw,5.2rem)] mb-6`}
                  style={{ color: C.ink }}
                >
                  Obra bien hecha,
                  <br />
                  <em className="font-medium" style={{ color: C.ochreInk }}>palabra dada.</em>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.muted }}>
                  {BIZ.legal} construye viviendas, ampliaciones y obras
                  para empresas en Talca. Se conversa el proyecto en
                  persona o por teléfono — como siempre se hizo.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} font-bold text-base md:text-lg px-7 py-2.5 rounded-sm transition-transform active:scale-95`}
                    style={{ backgroundColor: C.deep, color: '#F5F1E8' }}
                  >
                    Llamar a la oficina
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-bold text-base md:text-lg px-7 py-2.5 rounded-sm border-2 transition-colors`}
                    style={{ borderColor: 'rgba(32,31,23,0.4)', color: C.ink }}
                  >
                    Cómo llegar
                  </a>
                </div>
              </div>
              <div
                className="rounded-sm border-l-4 p-5 md:p-6 self-end"
                style={{ backgroundColor: C.card, borderLeftColor: C.ochre, boxShadow: '0 2px 10px rgba(32,31,23,0.08)' }}
              >
                <p className="text-[11px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: C.ochreInk }}>
                  Ficha de empresa
                </p>
                <dl className="text-sm space-y-2" style={{ color: C.muted }}>
                  <div className="flex justify-between gap-4">
                    <dt className="font-bold" style={{ color: C.ink }}>Razón social</dt>
                    <dd className="text-right">{BIZ.legal}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-bold" style={{ color: C.ink }}>Oficina</dt>
                    <dd className="text-right">{BIZ.address}, {BIZ.city}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="font-bold" style={{ color: C.ink }}>Teléfono</dt>
                    <dd className="text-right">
                      <a href={CALL_LINK} className="font-bold underline underline-offset-2" style={{ color: C.ink }}>
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div
              className="rounded-sm overflow-hidden border"
              style={{ borderColor: C.line, boxShadow: '0 4px 20px rgba(32,31,23,0.12)' }}
            >
              <ObraScene className="w-full h-auto block aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.ink }}>
              Obras de construcción,
              <br />
              <em className="font-medium" style={{ color: C.ochreInk }}>de principio a fin</em>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Los trabajos típicos de una constructora establecida.
              El alcance concreto de tu proyecto se conversa y
              presupuesta llamando a la oficina.
            </p>
          </div>
        </Reveal>
        <ol className="grid sm:grid-cols-2 gap-5 md:gap-6 list-none">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li
                className="rounded-sm border p-6 md:p-7 h-full border-t-4"
                style={{ backgroundColor: C.card, borderColor: C.line, borderTopColor: i % 2 === 0 ? C.ochre : C.deep, boxShadow: '0 2px 10px rgba(32,31,23,0.08)' }}
              >
                <span className={`${display.className} block font-black text-3xl mb-4`} style={{ color: i % 2 === 0 ? C.ochreInk : C.deepSoft }}>
                  {s.n}
                </span>
                <h3 className={`${display.className} font-bold text-xl mb-2`} style={{ color: C.ink }}>
                  {s.name}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {s.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ── La empresa ── */}
      <section id="empresa" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La empresa</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-10 md:mb-14`} style={{ color: C.ink }}>
              Una limitada con
              <br />
              <em className="font-medium" style={{ color: C.ochreInk }}>oficina y teléfono</em>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {PORQUE.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <article
                  className="rounded-sm border p-6 h-full"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 2px 10px rgba(32,31,23,0.08)' }}
                >
                  <PehuenIcon className="w-6 h-6 mb-4" color={i === 1 ? C.ochre : C.deepSoft} />
                  <h3 className={`${display.className} font-bold text-xl mb-2`} style={{ color: C.ink }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Proceso sobre precordillera ── */}
      <section id="proceso" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="absolute inset-0">
          <PehuenField className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(30,58,43,0.6) 0%, rgba(30,58,43,0.86) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajamos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F5F1E8' }}>
                De la llamada
                <br />
                <em className="font-medium" style={{ color: C.goldLight }}>a la entrega</em>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(245,241,232,0.85)' }}>
                Cuatro pasos claros — el primero es simplemente
                llamar al {BIZ.phoneDisplay}.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 list-none">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-sm border p-6 h-full"
                  style={{ borderColor: 'rgba(245,241,232,0.16)', backgroundColor: 'rgba(30,58,43,0.75)' }}
                >
                  <span className={`${display.className} block font-black text-4xl mb-4`} style={{ color: i === 0 ? C.goldLight : 'rgba(232,164,83,0.75)' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-bold text-xl mb-2`} style={{ color: '#F5F1E8' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,241,232,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y ubicación</Eyebrow>
            <h2 className={`${display.className} font-black text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.ink }}>
              3 Oriente 1424,
              <br />
              <em className="font-medium" style={{ color: C.ochreInk }}>centro de Talca</em>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.legal}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}, Chile
            </address>
            <p
              className="text-sm md:text-base leading-relaxed mb-8 rounded-sm border-l-4 pl-4 py-1"
              style={{ color: C.muted, borderLeftColor: C.ochre }}
            >
              El número de la ficha es <strong style={{ color: C.ink }}>fijo de oficina</strong>:
              llame en horario de trabajo o acérquese a conversar
              su proyecto en persona.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={CALL_LINK}
                className={`${display.className} font-bold text-base px-7 py-2.5 rounded-sm transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.deep, color: '#F5F1E8' }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-base px-6 py-2.5 rounded-sm border-2 transition-colors`}
                style={{ borderColor: 'rgba(32,31,23,0.4)', color: C.ink }}
              >
                Ver en Google Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-sm overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="absolute inset-0">
          <PehuenField className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(30,58,43,0.55) 0%, rgba(30,58,43,0.85) 100%)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <PehuenIcon className="w-10 h-10 mx-auto mb-6" color={C.goldLight} />
            <h2 className={`${display.className} font-black text-[clamp(2.2rem,7vw,4.2rem)] leading-[1.05] mb-6`} style={{ color: '#F5F1E8' }}>
              ¿Tiene un proyecto
              <br />
              <em className="font-medium" style={{ color: C.goldLight }}>en carpeta?</em>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,241,232,0.9)' }}>
              Llame a la oficina y converse directamente con la
              constructora: {BIZ.phoneDisplay}.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} inline-block font-bold text-base md:text-lg px-8 py-3 rounded-sm transition-transform active:scale-95`}
              style={{ backgroundColor: C.ochre, color: '#201F17' }}
            >
              Llamar ahora
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F5F1E8' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-end justify-between gap-3 md:gap-5">
          <div>
            <p className={`${display.className} font-black text-2xl mb-1.5 flex items-center gap-3`}>
              <PehuenIcon className="w-5 h-5" color={C.goldLight} />
              {BIZ.legal}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,241,232,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,241,232,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,241,232,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-2.5 text-xs leading-relaxed" style={{ color: 'rgba(245,241,232,0.75)' }}>
            Datos de su ficha pública de Google; ilustraciones propias.
          </p>
        </div>
        <div className="px-5 pb-4 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.deep} />
    </div>
  )
}
