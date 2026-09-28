import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import { BlueprintGrid, ObraScene } from './scenes'

const display = localFont({
  src: [
    { path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F5F2EB',
  soft: '#EAE4D4',
  card: '#FFFFFF',
  navy: '#151452',
  navyDeep: '#0D0D33',
  gold: '#D9A441',
  goldInk: '#7C5710',
  ink: '#1A1A2E',
  muted: '#5D5A50',
  line: 'rgba(26,26,46,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'constructora-valdes',
  title: 'Constructora Valdes — Obras menores en San Clemente, Maule',
  description:
    'Constructora Valdes EIRL en San Clemente: ampliaciones, radieres, terminaciones, quinchos y remodelaciones. Cotiza tu obra por WhatsApp.',
  image: `${IMG}/logo.png`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo trabajamos', href: '#proceso' },
  { label: 'Zona', href: '#zona' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    n: '01',
    name: 'Ampliaciones y obras menores',
    desc: 'Piezas nuevas, segundas piezas, cierres y adecuaciones a medida para tu casa.',
  },
  {
    n: '02',
    name: 'Radieres y albañilería',
    desc: 'Radieres, sobrelosas, muros y reparaciones de albañilería, con mezcla bien dosificada.',
  },
  {
    n: '03',
    name: 'Terminaciones',
    desc: 'Pisos, revestimientos y pintura interior y exterior para dejar la obra lista para usar.',
  },
  {
    n: '04',
    name: 'Quinchos y techumbres',
    desc: 'Quinchos, pérgolas, cobertizos y techumbres livianas para ganar espacio afuera.',
  },
  {
    n: '05',
    name: 'Remodelaciones',
    desc: 'Cambios de distribución, cocinas, baños y remodelación de espacios completos.',
  },
  {
    n: '06',
    name: 'Asesoría en terreno',
    desc: 'Visita al sitio, medición y presupuesto por escrito antes de partir cualquier trabajo.',
  },
]

const PASOS = [
  {
    title: 'Visita a terreno',
    desc: 'Vamos a tu sitio, medimos y conversamos qué quieres hacer. Sin compromiso.',
  },
  {
    title: 'Presupuesto por escrito',
    desc: 'Te enviamos el presupuesto detallado con valor y plazo estimado de la obra.',
  },
  {
    title: 'Ejecución',
    desc: 'Coordinamos fecha, materiales y avances, y te mantenemos al tanto mientras dure la obra.',
  },
  {
    title: 'Entrega',
    desc: 'Revisamos el trabajo contigo y entregamos la obra terminada y limpia.',
  },
]

const ZONAS = [
  'San Clemente',
  'Talca',
  'Maule',
  'Pencahue',
  'Río Claro',
  'San Javier',
  'Colbún',
  'Sector Queri y rural',
]

const HORAS = [
  { days: 'Lunes a viernes', time: '8:30–18:00' },
  { days: 'Sábado y domingo', time: 'Cerrado' },
]

function Helmet({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
      <path d="M4 15 a8 8 0 0 1 5-7.4 V11 M20 15 a8 8 0 0 0-5-7.4 V11 M2 15 h20 v3 H2 Z" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold"
      style={{ color: light ? C.gold : C.navy }}
    >
      <Helmet className="w-[16px] h-[16px]" />
      {children}
    </p>
  )
}

export default function ConstructoraValdesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(13,13,51,0.94)',
          ink: '#F5F2EB',
          line: 'rgba(255,255,255,0.14)',
          btnBg: C.gold,
          btnInk: '#0D0D33',
        }}
      />

      {/* ── Hero sobre plano ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <div className="absolute inset-0 opacity-90">
          <BlueprintGrid className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(13,13,51,0.7) 0%, rgba(13,13,51,0.5) 38%, rgba(13,13,51,0.94) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 md:gap-12 items-end">
            <Reveal>
              <Eyebrow light>Constructora · Obras menores · San Clemente</Eyebrow>
              <h1
                className={`${display.className} scroll-mt-28 font-bold uppercase leading-[1.02] tracking-[-0.01em] text-[clamp(2.5rem,8.5vw,5rem)] mb-6`}
                style={{ color: '#F5F2EB' }}
              >
                Obras menores,
                <br />
                <span style={{ color: C.gold }}>bien hechas.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(245,242,235,0.88)' }}>
                Constructora con base en San Clemente, Maule.
                Ampliaciones, radieres, terminaciones y quinchos:
                visita a terreno y presupuesto por escrito.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-sm transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.gold, color: '#0D0D33' }}
                >
                  Cotizar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3 rounded-sm border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(245,242,235,0.55)', color: '#F5F2EB' }}
                >
                  Ver servicios
                </a>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="rounded-sm overflow-hidden border" style={{ borderColor: 'rgba(245,242,235,0.2)', boxShadow: '0 24px 60px rgba(0,0,0,0.35)' }}>
                <img
                  src={`${IMG}/logo.png`}
                  alt={`Logo de ${BIZ.legal}: Valdes, construcción y obras menores`}
                  className="w-full h-auto block"
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="relative border-t" style={{ borderColor: 'rgba(245,242,235,0.22)', backgroundColor: 'rgba(13,13,51,0.92)', backdropFilter: 'blur(6px)' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.18em]" style={{ color: 'rgba(245,242,235,0.9)' }}>
            <span>{BIZ.address} · {BIZ.city}</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.gold }} aria-hidden="true" />
              Lun–Vie 8:30–18:00
            </span>
            <span>Visita a terreno sin compromiso</span>
            <span className="hidden md:inline" style={{ color: C.gold }}>sitio de ejemplo</span>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.navy }}>
              Obra chica o grande,
              <br />
              <span style={{ color: C.goldInk }}>con presupuesto claro</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Obras menores para casas y parcelas: cada trabajo parte
              con visita a terreno y cotización por escrito.
            </p>
          </div>
        </Reveal>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 list-none">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 80}>
              <li
                className="rounded-sm border p-6 h-full border-t-4"
                style={{ backgroundColor: C.card, borderColor: C.line, borderTopColor: i % 2 === 0 ? C.gold : C.navy, boxShadow: '0 2px 6px rgba(26,26,46,0.06)' }}
              >
                <span className={`${display.className} block font-bold text-3xl mb-4`} style={{ color: i % 2 === 0 ? C.goldInk : C.navy }}>
                  {s.n}
                </span>
                <h3 className={`${display.className} font-bold uppercase text-lg mb-2`} style={{ color: C.ink }}>
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

      {/* ── Cómo trabajamos + escena ── */}
      <section id="proceso" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <div className="absolute inset-0 opacity-[0.16]">
          <ObraScene className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow light>Cómo trabajamos</Eyebrow>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.05]`} style={{ color: '#F5F2EB' }}>
                Del terreno
                <br />
                <span style={{ color: C.gold }}>a la entrega</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: 'rgba(245,242,235,0.85)' }}>
                Cuatro pasos, siempre iguales. Así sabes qué esperar
                desde que escribes hasta que la obra queda lista.
              </p>
            </div>
          </Reveal>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <li
                  className="rounded-sm border p-6 h-full"
                  style={{ borderColor: 'rgba(245,242,235,0.16)', backgroundColor: 'rgba(13,13,51,0.72)' }}
                >
                  <span
                    className={`${display.className} block font-bold text-4xl mb-4`}
                    style={{ color: i === 0 ? C.gold : 'rgba(217,164,65,0.75)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className={`${display.className} font-bold uppercase text-lg mb-2`} style={{ color: '#F5F2EB' }}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(245,242,235,0.85)' }}>
                    {p.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Zona de trabajo ── */}
      <section id="zona" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Zona de trabajo</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.05]`} style={{ color: C.navy }}>
              San Clemente
              <br />
              <span style={{ color: C.goldInk }}>y comunas cercanas</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              Base en el sector Queri de San Clemente. Para otras
              comunas de la provincia, consulta por WhatsApp.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="flex flex-wrap gap-3">
            {ZONAS.map((z) => (
              <li
                key={z}
                className="flex items-center gap-2.5 text-sm md:text-base font-semibold px-5 py-3 rounded-sm border"
                style={{ borderColor: C.line, backgroundColor: C.card, color: C.ink }}
              >
                <Helmet className="w-3.5 h-3.5 shrink-0" color={C.navy} />
                {z}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      {/* ── Ubicación y horarios ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Contacto y horarios</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: C.navy }}>
              San Clemente,
              <br />
              <span style={{ color: C.goldInk }}>Maule</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.legal}
              <br />
              {BIZ.address} · {BIZ.city}, {BIZ.region}, Chile
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.ink, textDecorationColor: 'rgba(26,26,46,0.3)' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base" style={{ color: C.muted }}>
                  <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke={C.navy} strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7 v5 l3.5 2" />
                  </svg>
                  <span>
                    <strong className="font-bold" style={{ color: C.ink }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-sm transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.navy, color: '#F5F2EB' }}
              >
                Ver en Google Maps →
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-sm border-2 transition-colors tap-44`}
                style={{ borderColor: 'rgba(26,26,46,0.35)', color: C.ink }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-sm overflow-hidden border min-h-[320px] h-full" style={{ borderColor: C.line, backgroundColor: C.paper }}>
              <iframe
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
      <section className="relative overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <div className="absolute inset-0 opacity-[0.2]">
          <ObraScene className="w-full h-full" />
        </div>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2 className={`${display.className} font-bold uppercase text-[clamp(2rem,6.5vw,3.8rem)] leading-[1.05] mb-6`} style={{ color: '#F5F2EB' }}>
              Cuéntanos qué quieres construir
              <br />
              <span style={{ color: C.gold }}>y lo cotizamos</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,242,235,0.9)' }}>
              Escríbenos por WhatsApp con tu proyecto — si puedes, con
              fotos del sitio — y coordinamos la visita a terreno.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold uppercase tracking-wide text-sm md:text-base px-8 py-3.5 rounded-sm transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.gold, color: '#0D0D33' }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navyDeep, color: '#F5F2EB' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-5">
          <div>
            <p className={`${display.className} font-bold uppercase text-2xl mb-2 flex items-center gap-3`}>
              <Helmet className="w-5 h-5" color={C.gold} />
              {BIZ.legal}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(245,242,235,0.82)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(245,242,235,0.82)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(245,242,235,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-3 md:py-4 text-xs leading-relaxed" style={{ color: 'rgba(245,242,235,0.75)' }}>
            Datos de la ficha pública de Google; servicios, pasos y zonas de muestra.
          </p>
        </div>
        <div className="px-5 pt-1 pb-6 [&>div]:static [&>div]:mx-auto [&>div]:w-fit [&>div]:max-w-full">
          <DemoBand name={BIZ.name} />
        </div>
      </footer>
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
