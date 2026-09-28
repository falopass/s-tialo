import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars, FaqList } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_EMERGENCY, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Identidad: ruta + celeste uruguayo. El furgón es el taller.
const C = {
  papel: '#F2F6FA',
  card: '#FBFDFE',
  tinta: '#12222F',
  asfalto: '#0C1824',
  asfaltoSoft: '#16283A',
  celeste: '#3E9BD0',
  celesteSoft: '#DDEBF6',
  celesteFuerte: '#14679E',
  rojo: '#C23A35',
  rojoFuerte: '#96281F',
  amarillo: '#F2C230',
  muted: '#4F6172',
  line: 'rgba(18,34,47,0.14)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'el-uruguayo',
  title: 'Taller Mecánico El Uruguayo · Mecánica a domicilio en San Clemente',
  description:
    'Mecánica automotriz a domicilio en San Clemente, Maule. Diagnóstico, frenos, kit de distribución y mantenciones sin mover tu auto. Especialista Peugeot, Opel y Citroën. 5,0 en Google.',
  image: '/demos/el-uruguayo/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
]

const PASOS = [
  {
    km: '01',
    title: 'Agenda por WhatsApp',
    desc: 'Cuentas la falla o el servicio que necesitas y coordinas día y hora. Sin llamados perdidos ni formularios.',
  },
  {
    km: '02',
    title: 'El taller va donde estés',
    desc: 'Tu casa, tu oficina o la berma de la ruta. El furgón llega con herramientas y repuestos a bordo.',
  },
  {
    km: '03',
    title: 'Diagnóstico claro primero',
    desc: 'Antes de reparar, te explica qué tiene el auto y cuánto cuesta. Con garantía en repuestos y servicio.',
  },
]

const SERVICIOS = [
  {
    icon: 'frenos',
    name: 'Frenos',
    desc: 'Inspección completa del sistema, cambio de pastillas y mantención. Tu seguridad va primero.',
  },
  {
    icon: 'distribucion',
    name: 'Kit de distribución',
    desc: 'Cambio rápido y garantizado. Protege el motor y evita fallas que salen caras.',
  },
  {
    icon: 'embrague',
    name: 'Embrague',
    desc: 'Recupera potencia y suavidad al conducir, sin dañar piezas que cuestan más.',
  },
  {
    icon: 'tren',
    name: 'Tren delantero',
    desc: 'Corrige la alineación y la estabilidad para que los neumáticos no se gasten parejo.',
  },
  {
    icon: 'scanner',
    name: 'Scanner y diagnóstico',
    desc: 'Escaneo electrónico y diagnóstico preciso para detectar fallas a tiempo.',
  },
  {
    icon: 'mantencion',
    name: 'Mantención por kilometraje',
    desc: 'Preventiva según los km del auto: aceite, filtros y puntos de desgaste.',
  },
  {
    icon: 'precompra',
    name: 'Revisión pre-compra',
    desc: 'Evaluación mecánica completa antes de comprar un usado: estado, scanner y detalles clave.',
  },
  {
    icon: 'balanceo',
    name: 'Balanceo',
    desc: 'Ruedas balanceadas para un manejo suave y sin vibraciones.',
  },
  {
    icon: 'bateria',
    name: 'Baterías y niveles',
    desc: 'Revisión de niveles, cambio e instalación de baterías donde estés.',
  },
]

const MARCAS = ['Peugeot', 'Opel', 'Citroën']

const RESENAS = [
  {
    quote:
      'Recomiendo totalmente el servicio de El Uruguayo. Obtuve diagnóstico y mantenimiento sin mover mi vehículo, ahorrando tiempo.',
    name: 'Arturo Andover',
    tag: 'Cliente',
  },
  {
    quote:
      'La mecánica a domicilio nos ha permitido mantener nuestros vehículos operativos, con diagnóstico y mantención en terreno, sin afectar la productividad.',
    name: 'Grupo Enlace SPA',
    tag: 'Empresa',
  },
  {
    quote:
      'Vinieron directamente a mi ubicación, solucionaron el problema y no tuve que preocuparme por traslados.',
    name: 'Nataly Bolomey',
    tag: 'Cliente',
  },
]

const FAQ = [
  {
    q: '¿Realmente hacen mecánica a domicilio?',
    a: 'Sí, es el servicio principal: diagnóstico, reparaciones y mantenciones en tu casa, oficina o donde quede el vehículo. Llegan con equipamiento profesional en el horario acordado.',
  },
  {
    q: '¿Con qué marcas trabajan?',
    a: 'Son especialistas en Peugeot, Opel y Citroën, pero atienden todas las marcas (mecánico multimarcas).',
  },
  {
    q: '¿Los repuestos los ponen ustedes?',
    a: 'Sí: trabajan con repuestos originales y alternativos, con stock disponible, y todos los trabajos tienen garantía en repuestos y servicio.',
  },
  {
    q: 'Quedé en pana en la ruta, ¿pueden ir?',
    a: 'Sí — atienden emergencias y auxilio en ruta. Escríbeles por WhatsApp con tu ubicación y coordinan la llegada.',
  },
  {
    q: '¿Hacen revisión antes de comprar un auto usado?',
    a: 'Sí, la revisión pre-compra evalúa el estado mecánico completo, con scanner, para que compres con seguridad.',
  },
]

// ── Motivo gráfico: la ruta ─────────────────────────────────

function RoadLine({ color = C.amarillo, className = 'w-16' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 96 8" className={className} aria-hidden="true">
      <rect x="0" y="3" width="26" height="2.5" rx="1.25" fill={color} />
      <rect x="35" y="3" width="26" height="2.5" rx="1.25" fill={color} />
      <rect x="70" y="3" width="26" height="2.5" rx="1.25" fill={color} />
    </svg>
  )
}

// Señal de kilómetro de ruta: placa blanca con borde, tipografía condensada.
function KmSign({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`${display.className} inline-flex items-baseline gap-1 rounded-md border-2 px-2.5 py-1 leading-none font-bold tracking-wide uppercase`}
      style={
        dark
          ? { backgroundColor: C.asfalto, borderColor: C.celeste, color: C.celeste }
          : { backgroundColor: '#FFFFFF', borderColor: C.tinta, color: C.tinta }
      }
    >
      {children}
    </span>
  )
}

// Cinta-asfalto con la línea discontinua de la ruta en movimiento.
function RoadStrip() {
  const items = [
    'Frenos',
    'Kit de distribución',
    'Embrague',
    'Scanner',
    'Tren delantero',
    'Balanceo',
    'Baterías',
    'Pre-compra',
    'Niveles',
  ]
  return (
    <div className="overflow-hidden py-4" style={{ backgroundColor: C.asfalto }} aria-hidden="true">
      <div className="uru-marquee flex w-max items-center gap-7">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center gap-7">
            {items.map((s) => (
              <span
                key={`${dup}-${s}`}
                className={`${display.className} text-sm md:text-base font-semibold uppercase tracking-[0.14em] whitespace-nowrap flex items-center gap-7`}
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                {s}
                <RoadLine className="w-10 shrink-0" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

function SvcIcon({ kind, color }: { kind: string; color: string }) {
  const paths: Record<string, React.ReactNode> = {
    frenos: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <circle cx="12" cy="12" r="2.6" />
        <circle cx="12" cy="6.6" r="0.9" fill={color} stroke="none" />
        <circle cx="17" cy="10" r="0.9" fill={color} stroke="none" />
        <circle cx="15.2" cy="15.6" r="0.9" fill={color} stroke="none" />
        <circle cx="8.8" cy="15.6" r="0.9" fill={color} stroke="none" />
        <circle cx="7" cy="10" r="0.9" fill={color} stroke="none" />
      </>
    ),
    distribucion: (
      <>
        <circle cx="8" cy="8" r="3.4" />
        <circle cx="16" cy="14" r="4.6" />
        <path d="M10.6 5.5 L12.4 9.9 M18 9.8 L13.6 12.4" />
      </>
    ),
    embrague: (
      <>
        <circle cx="9.5" cy="12" r="6" />
        <circle cx="14.5" cy="12" r="6" strokeDasharray="3 2.4" />
        <circle cx="9.5" cy="12" r="1.8" />
      </>
    ),
    tren: (
      <>
        <path d="M6 4.5 C10 6.5 14 6.5 18 4.5" />
        <path d="M6 9.5 C10 11.5 14 11.5 18 9.5" />
        <path d="M6 14.5 C10 16.5 14 16.5 18 14.5" />
        <path d="M8 4.5 V2.8 M16 4.5 V2.8 M8 21.2 V19 M16 21.2 V19 M5 14.5 L3.2 17 M19 14.5 L20.8 17" />
      </>
    ),
    scanner: (
      <>
        <rect x="4" y="3.5" width="16" height="11" rx="2" />
        <path d="M7 8.5 h4 M7 11 h7" />
        <path d="M10 14.5 v3 h4 v-3" />
        <path d="M14 17.5 h4.5" />
      </>
    ),
    mantencion: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 7.5 V12 L15.5 14" />
        <path d="M4.5 8 L7 9.5 M19.5 8 L17 9.5" opacity="0.6" />
      </>
    ),
    precompra: (
      <>
        <rect x="6" y="3.5" width="12" height="17" rx="2" />
        <path d="M9 3.5 h6 M9.5 9 l2 2 l3.5 -3.5 M9.5 15.5 h5" />
      </>
    ),
    balanceo: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 4.5 V19.5 M4.5 12 H19.5 M6.8 6.8 L17.2 17.2 M17.2 6.8 L6.8 17.2" />
      </>
    ),
    bateria: (
      <>
        <rect x="3.5" y="8" width="17" height="11" rx="2" />
        <path d="M7.5 8 V5.5 h3 V8 M13.5 8 V5.5 h3 V8" />
        <path d="M13.5 10.5 l-2.5 4 h2 l-1 3 4 -4.5 h-2 l1.5 -2.5 Z" fill={color} stroke="none" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className="w-[24px] h-[24px]" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

function Eyebrow({ children, color, dark = false }: { children: React.ReactNode; color: string; dark?: boolean }) {
  return (
    <p
      className={`${display.className} text-[13px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3 font-semibold`}
      style={{ color }}
    >
      <RoadLine color={dark ? C.amarillo : color} className="w-12 shrink-0" />
      {children}
    </p>
  )
}

const WaIcon = (
  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
)

export default function ElUruguayoPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <style>{`
        @keyframes uru-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .uru-marquee { animation: uru-marquee 30s linear infinite }
        @media (prefers-reduced-motion: reduce) { .uru-marquee { animation: none } }
      `}</style>

      <div style={{ backgroundColor: C.asfalto }}>
        <BlitzNav
          name={BIZ.short}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Agendar visita"
          theme={{
            over: 'dark',
            bar: 'rgba(242,246,250,0.95)',
            ink: C.tinta,
            line: C.line,
            btnBg: C.celesteFuerte,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero: el furgón en la ruta ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.asfalto }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Furgón de servicio de El Uruguayo en la ruta, camino a un llamado de mecánica a domicilio"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,24,36,0.55) 0%, rgba(12,24,36,0.42) 42%, rgba(12,24,36,0.92) 100%)',
          }}
        />
        {/* sello de rating real */}
        <div className="absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(242,246,250,0.96)', color: C.tinta }}
            >
              <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5" />
              {BIZ.rating.toFixed(1).replace('.', ',')} en Google · {BIZ.reviews} reseñas
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20 pt-28">
          <Reveal>
            <Eyebrow color={C.celeste} dark>
              Mecánica a domicilio · San Clemente
            </Eyebrow>
            <h1
              className={`${display.className} font-bold uppercase leading-[0.95] tracking-[0.01em] text-[clamp(3rem,11vw,7rem)] mb-6`}
              style={{ color: '#FFFFFF' }}
            >
              El taller llega
              <br />
              <span style={{ color: C.celeste }}>a donde estés</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Diagnóstico, reparación y mantención en tu casa, tu trabajo o la
              berma del camino. Más de {BIZ.experience} años de oficio y un
              furgón que es el taller completo.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.celeste, color: C.asfalto }}
              >
                {WaIcon}
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#FFFFFF' }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <RoadStrip />

      {/* ── Cómo funciona ── */}
      <section id="como-funciona" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.celesteFuerte}>Así de simple</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[0.98] mb-4`} style={{ color: C.tinta }}>
              No llevas el auto al taller.
              <br />
              <span style={{ color: C.celesteFuerte }}>El taller va a ti.</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10 md:mb-14" style={{ color: C.muted }}>
              Servicio puntual y transparente: diagnóstico claro antes de
              cualquier reparación, sin traslados ni esperas en sala.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.km} delay={i * 110}>
                <article
                  className="h-full rounded-3xl border p-6 md:p-7 relative overflow-hidden"
                  style={{
                    backgroundColor: C.card,
                    borderColor: C.line,
                    boxShadow: '0 14px 34px rgba(18,34,47,0.08)',
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <KmSign>km {p.km}</KmSign>
                    <RoadLine className="w-14 mt-2 opacity-70" />
                  </div>
                  <h3 className={`${display.className} font-bold uppercase text-2xl leading-tight mb-2.5`} style={{ color: C.tinta }}>
                    {p.title}
                  </h3>
                  <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                    {p.desc}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Foto band: el furgón taller ── */}
      <section className="relative" style={{ backgroundColor: C.celesteSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid md:grid-cols-12 gap-5 md:gap-6 items-stretch">
            <Reveal className="md:col-span-7">
              <div
                className="relative overflow-hidden rounded-3xl border aspect-[4/3] h-full min-h-[280px]"
                style={{ borderColor: 'rgba(20,103,158,0.25)', boxShadow: '0 18px 40px rgba(18,34,47,0.14)' }}
              >
                <Image
                  src={`${IMG}/taller-movil.webp`}
                  alt="Furgón taller de El Uruguayo con carpa de trabajo atendiendo un auto a domicilio"
                  fill
                  sizes="(min-width: 768px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={120} className="md:col-span-5">
              <div className="flex flex-col gap-5 h-full">
                <div
                  className="relative overflow-hidden rounded-3xl border flex-1 min-h-[200px]"
                  style={{ borderColor: 'rgba(20,103,158,0.25)', boxShadow: '0 18px 40px rgba(18,34,47,0.14)' }}
                >
                  <Image
                    src={`${IMG}/domicilio.webp`}
                    alt="Atención mecánica en terreno junto al furgón de servicio"
                    fill
                    sizes="(min-width: 768px) 38vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-3xl p-6" style={{ backgroundColor: C.asfalto }}>
                  <p className={`${display.className} font-bold uppercase text-xl md:text-2xl leading-tight`} style={{ color: '#FFFFFF' }}>
                    Un furgón, un taller completo
                  </p>
                  <p className="text-sm leading-relaxed mt-2" style={{ color: 'rgba(255,255,255,0.78)' }}>
                    Herramientas, scanner y repuestos a bordo. Llega equipado
                    para resolver en terreno.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Servicios ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow color={C.celesteFuerte}>Mecánico multimarcas</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl leading-[0.98] mb-4`} style={{ color: C.tinta }}>
              Servicios a domicilio
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10 md:mb-14" style={{ color: C.muted }}>
              Repuestos originales y alternativos, con stock disponible.
              Todo con garantía en repuestos y mano de obra.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={(i % 3) * 90}>
                <article
                  className="h-full rounded-3xl border p-6 flex gap-4 items-start transition-transform hover:-translate-y-1"
                  style={{
                    backgroundColor: C.card,
                    borderColor: C.line,
                    boxShadow: '0 10px 26px rgba(18,34,47,0.07)',
                  }}
                >
                  <span
                    className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: C.celesteSoft }}
                  >
                    <SvcIcon kind={s.icon} color={C.celesteFuerte} />
                  </span>
                  <div className="min-w-0">
                    <h3 className={`${display.className} font-bold uppercase text-lg leading-tight`} style={{ color: C.tinta }}>
                      {s.name}
                    </h3>
                    <p className="text-[13px] md:text-sm leading-snug mt-1.5" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div
              className="mt-8 md:mt-10 rounded-3xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5"
              style={{ backgroundColor: C.celesteSoft, borderColor: 'rgba(20,103,158,0.28)' }}
            >
              <div className="flex-1">
                <p className={`${display.className} font-bold uppercase text-xl md:text-2xl leading-tight`} style={{ color: C.tinta }}>
                  Especialista en {MARCAS.join(' · ')}
                </p>
                <p className="text-sm leading-relaxed mt-1.5" style={{ color: C.muted }}>
                  Y atención para todas las marcas. Si tu auto es francés o
                  alemán, acá lo conocen de memoria.
                </p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} shrink-0 inline-flex items-center gap-2.5 font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.celesteFuerte, color: '#FFFFFF' }}
              >
                {WaIcon}
                Consultar mi modelo
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Emergencias en ruta (asfalto + rojo) ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <Eyebrow color={C.amarillo} dark>
                Auxilio en ruta
              </Eyebrow>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-5`} style={{ color: '#FFFFFF' }}>
                ¿Te quedaste en pana
                <br />
                <span style={{ color: C.rojo }}>camino a la costa?</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: 'rgba(255,255,255,0.8)' }}>
                En sus reseñas hay viajeros que volvieron a la ruta el mismo
                día: motores de partida reconstruidos, vans que no encendían,
                vacaciones salvadas. Escríbele con tu ubicación.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={WA_EMERGENCY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-flex items-center gap-2.5 font-bold uppercase tracking-wide text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                >
                  {WaIcon}
                  Pedir auxilio ahora
                </a>
                <KmSign dark>Rota · km 25</KmSign>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative overflow-hidden rounded-3xl border aspect-[4/3]"
                style={{ borderColor: 'rgba(255,255,255,0.16)', boxShadow: '0 22px 48px rgba(0,0,0,0.4)' }}
              >
                <Image
                  src={`${IMG}/atencion-patio.webp`}
                  alt="Auto atendido en terreno por el furgón taller de El Uruguayo"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.asfaltoSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            <Reveal className="lg:col-span-4">
              <Eyebrow color={C.celeste} dark>
                Lo que dicen en Google
              </Eyebrow>
              <div className={`${display.className} font-bold leading-none text-[clamp(4.5rem,14vw,7.5rem)]`} style={{ color: '#FFFFFF' }}>
                {BIZ.rating.toFixed(1).replace('.', ',')}
              </div>
              <Stars value={5} color={C.amarillo} className="w-6 h-6" />
              <p className="text-sm md:text-base mt-4 leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
                {BIZ.reviews} reseñas en Google y todas con cinco estrellas.
                Nota perfecta.
              </p>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 mt-5 text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: C.celeste, textDecorationColor: 'rgba(62,155,208,0.4)' }}
              >
                Ver la ficha en Maps
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17 L17 7 M9 7 h8 v8" />
                </svg>
              </a>
            </Reveal>
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.name} delay={i * 100} className={i === 0 ? 'sm:col-span-2' : ''}>
                  <figure
                    className="h-full rounded-3xl border p-6 md:p-7 flex flex-col"
                    style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.12)' }}
                  >
                    <Stars value={5} color={C.amarillo} className="w-3.5 h-3.5 mb-4" />
                    <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.88)' }}>
                      “{r.quote}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center justify-between gap-3">
                      <span className={`${display.className} font-bold uppercase tracking-wide text-base`} style={{ color: '#FFFFFF' }}>
                        {r.name}
                      </span>
                      <span
                        className="text-[11px] font-bold uppercase tracking-wider rounded-full px-2.5 py-1"
                        style={{ backgroundColor: 'rgba(62,155,208,0.18)', color: '#BDE3F8' }}
                      >
                        {r.tag}
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y horario ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <Reveal>
              <Eyebrow color={C.celesteFuerte}>Base en sector Rota</Eyebrow>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: C.tinta }}>
                San Clemente
                <br />
                <span style={{ color: C.celesteFuerte }}>y alrededores</span>
              </h2>
              <dl className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: C.celesteSoft }}>
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={C.celesteFuerte} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11Z" />
                      <circle cx="12" cy="10" r="2.6" />
                    </svg>
                  </span>
                  <div>
                    <dt className={`${display.className} font-bold uppercase text-base`} style={{ color: C.tinta }}>
                      Dirección
                    </dt>
                    <dd className="text-sm mt-0.5" style={{ color: C.muted }}>
                      {BIZ.address}, {BIZ.city}, {BIZ.region}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: C.celesteSoft }}>
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={C.celesteFuerte} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 7.5 V12 L15 14" />
                    </svg>
                  </span>
                  <div>
                    <dt className={`${display.className} font-bold uppercase text-base`} style={{ color: C.tinta }}>
                      Horario
                    </dt>
                    <dd className="text-sm mt-0.5" style={{ color: C.muted }}>
                      {BIZ.schedule}
                    </dd>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center" style={{ backgroundColor: C.celesteSoft }}>
                    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={C.celesteFuerte} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    </svg>
                  </span>
                  <div>
                    <dt className={`${display.className} font-bold uppercase text-base`} style={{ color: C.tinta }}>
                      Contacto
                    </dt>
                    <dd className="text-sm mt-0.5" style={{ color: C.muted }}>
                      WhatsApp {BIZ.phoneDisplay} · también {BIZ.phoneAlt}
                    </dd>
                  </div>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2.5 mt-7 font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Cómo llegar
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M7 17 L17 7 M9 7 h8 v8" />
                </svg>
              </a>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative overflow-hidden rounded-3xl border aspect-[4/3] lg:aspect-[4/4.6]"
                style={{ borderColor: C.line, boxShadow: '0 18px 40px rgba(18,34,47,0.12)' }}
              >
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa de ${BIZ.name}, ${BIZ.city}`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.celesteSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.celesteFuerte}>Dudas frecuentes</Eyebrow>
            <h2 className={`${display.className} font-bold uppercase text-3xl md:text-5xl leading-[0.98] mb-8 md:mb-10`} style={{ color: C.tinta }}>
              Antes de agendar
            </h2>
          </Reveal>
          <FaqList
            items={FAQ}
            colors={{
              q: C.tinta,
              a: C.muted,
              line: 'rgba(20,103,158,0.22)',
              plusBg: C.celesteFuerte,
              plusInk: '#FFFFFF',
            }}
          />
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.asfalto }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 pb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className={`${display.className} font-bold uppercase text-xl leading-none`} style={{ color: '#FFFFFF' }}>
                {BIZ.short}
              </p>
              <p className="text-xs mt-1.5" style={{ color: 'rgba(255,255,255,0.6)' }}>
                {BIZ.rubro} · {BIZ.city}, {BIZ.region}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center gap-2 font-bold uppercase tracking-wide text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.celeste, color: C.asfalto }}
              >
                {WaIcon}
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm font-semibold underline underline-offset-4 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                style={{ color: 'rgba(255,255,255,0.78)' }}
              >
                Google Maps
              </a>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t flex items-center justify-between gap-4" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
            <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.5)' }}>
              © 2026 {BIZ.name}
            </p>
            <RoadLine className="w-14 opacity-60" />
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.short} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
