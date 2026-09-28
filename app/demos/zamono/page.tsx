import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RETIRO, IG_LINK, MAPS_URL, MAPS_EMBED, IMG, SERVICIOS, HORAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Identidad sacada del local real: el portón negro con la cenefa de
 * letreros amarillos (FRENOS · NEUMÁTICOS · CAMBIO DE ACEITE), el rojo
 * del logo ovalado y el papel crema de un negocio de barrio.
 */
const C = {
  paper: '#f4efe4',
  paperSoft: '#ece5d5',
  coal: '#171712',
  coalDeep: '#101008',
  ink: '#1c1a14',
  muted: '#57534a',
  red: '#c8231f',
  yellow: '#f2b417',
  blue: '#1d4f9c',
  line: 'rgba(28,26,20,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'zamono',
  title: 'Lubricentro Zamono — Taller, lavado y repuestos en Molina',
  description:
    'Lubricentro, taller y lavado en Av. Luis Cruz Martínez 1441 (ex Luna Llena), Molina. Aceite y filtros, frenos, neumáticos, baterías. Si no puedes traer tu auto, van por él. Agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Vamos por él', href: '#retiro' },
  { label: 'La tienda', href: '#tienda' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const CENEFA = [
  'Cambio de aceite',
  'Frenos',
  'Neumáticos',
  'Baterías',
  'Lavado y tapicería',
  'Pulido de focos',
  'Grabado de patentes',
  'Accesorios',
] as const

const DESC_SERVICIOS: Record<(typeof SERVICIOS)[number], string> = {
  'Cambio de aceite y filtros': 'Aceite y filtros de las marcas que ves en el mesón: Shell, Total, Liqui Moly, Mobil y más.',
  Frenos: 'Revisión y cambio de pastillas y componentes del sistema de frenado.',
  'Venta de repuestos y neumáticos': 'Repuestos, neumáticos nuevos y accesorios disponibles en el mismo local.',
  'Lavado de vehículos y tapicería': 'Lavado exterior completo y limpieza de tapicería, en la misma visita si quieres.',
  'Grabado de patentes': 'Grabado de patente en vidrios, en minutos y sin sacar hora con tanta anticipación.',
  'Pulido de focos': 'Focos amarillos o opacos recuperan la luz — se nota de noche y en la revisión técnica.',
  Baterías: 'Venta e instalación de baterías; te la cambian ahí mismo.',
  'Accesorios e insumos': 'Aditivos, limpiadores y accesorios para el auto en la tienda del local.',
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${display.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color: light ? C.yellow : C.red }}
    >
      <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: light ? C.yellow : C.red }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** Banderín de la cenefa: reproduce los letreros del portón real. */
function Flag({ label, tilt }: { label: string; tilt: number }) {
  return (
    <div
      className="shrink-0"
      style={{ transform: `rotate(${tilt}deg)` }}
    >
      <div className="w-7 h-1.5 mx-auto" style={{ backgroundColor: C.red }} aria-hidden="true" />
      <div className="px-4 py-3 shadow-md" style={{ backgroundColor: C.coal }}>
        <span className={`${display.className} uppercase font-extrabold tracking-[0.08em] text-[12px] md:text-[13px] whitespace-nowrap`} style={{ color: C.yellow }}>
          {label}
        </span>
      </div>
    </div>
  )
}

export default function ZamonoPage() {
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
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(244,239,228,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.red,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: el portón de la 1441 ── */}
      <section id="inicio" className="relative overflow-hidden pt-28 md:pt-36 pb-14 md:pb-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow>Lubricentro · taller · lavado — Molina</Eyebrow>
              <h1
                className={`${display.className} font-extrabold uppercase leading-[0.98] tracking-[-0.01em] text-[clamp(2.5rem,8.5vw,5rem)] mb-6`}
                style={{ color: C.ink }}
              >
                En la Luis
                <br />
                Cruz Martínez
                <br />
                tu auto <span style={{ color: C.red }}>sale listo</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-7" style={{ color: C.muted }}>
                Aceite y filtros, frenos, neumáticos, baterías y lavado en
                {` ${BIZ.address}`} ({BIZ.addressExtra}), {BIZ.city}. Agenda por
                WhatsApp — y si no puedes llevar el auto, van a buscarlo.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3 transition-transform active:scale-95 tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className={`${display.className} font-bold text-sm md:text-base px-7 py-3 border-2 transition-colors tap-44`}
                  style={{ borderColor: C.coal, color: C.ink }}
                >
                  Ver servicios
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-bold px-4 py-2.5 border tap-44"
                style={{ borderColor: C.line, backgroundColor: '#FFFFFF', color: C.ink }}
              >
                <Stars value={5} color={C.yellow} className="w-4 h-4" />
                {BIZ.rating} · {BIZ.reviews} opiniones en Google
              </a>
            </Reveal>
          </div>
          {/* El cartel: foto del portón enmarcada como letrero */}
          <Reveal delay={140}>
            <figure className="relative max-w-md mx-auto lg:mx-0 lg:justify-self-end w-full">
              <div className="absolute -top-3 left-8 w-10 h-3 z-10" style={{ backgroundColor: C.red }} aria-hidden="true" />
              <div className="absolute -top-3 right-8 w-10 h-3 z-10" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              <div className="border-[10px] shadow-xl" style={{ borderColor: C.coal, backgroundColor: C.coal }}>
                <img
                  src={`${IMG}/porton.webp`}
                  alt={`Portón de ${BIZ.name} con su cenefa de letreros en ${BIZ.address}, ${BIZ.city}`}
                  fetchPriority="high"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 shadow-lg border"
                style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
              >
                <img src={`${IMG}/logo.webp`} alt={`Logo de ${BIZ.name}`} className="h-12 md:h-14 w-auto object-contain" />
              </div>
              <figcaption className="sr-only">
                El portón del local en {BIZ.address}
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── La cenefa: los servicios como los anuncia el portón ── */}
      <section aria-label="Servicios que anuncia el local" className="py-6 md:py-8 overflow-hidden" style={{ backgroundColor: C.paperSoft, borderTop: `4px solid ${C.coal}`, borderBottom: `4px solid ${C.coal}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-x-4 gap-y-5 md:gap-x-6">
          {CENEFA.map((s, i) => (
            <Flag key={s} label={s} tilt={i % 2 === 0 ? -1.4 : 1.4} />
          ))}
        </div>
      </section>

      {/* ── ¿No puedes traer tu auto? (eslogan real del letrero) ── */}
      <section id="retiro" className="scroll-mt-20" style={{ backgroundColor: C.coalDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>El servicio que anuncia el portón</Eyebrow>
            <h2
              className={`${display.className} font-extrabold uppercase leading-[1.0] text-[clamp(2rem,6.5vw,3.8rem)] mb-6`}
              style={{ color: '#f6f2e7' }}
            >
              «¿No puedes
              <br />
              traer tu auto?
              <br />
              <span style={{ color: C.red }}>Nosotros</span>{' '}
              <span style={{ color: C.yellow }}>vamos por él»</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,242,231,0.75)' }}>
              Así lo dice el letrero de la fachada, literal: si no te puedes
              mover, coordina por WhatsApp y pasan a buscar el auto.
            </p>
            <a
              href={WA_LINK_RETIRO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-3.5 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.yellow, color: C.coalDeep }}
            >
              Pedir que lo vayan a buscar
            </a>
            <p className="text-xs mt-4 font-mono" style={{ color: 'rgba(246,242,231,0.6)' }}>
              {BIZ.phoneDisplay} · confirman por WhatsApp
            </p>
          </Reveal>
          <Reveal delay={140}>
            <figure className="relative">
              <div className="border-[10px] shadow-xl" style={{ borderColor: C.red, backgroundColor: C.coalDeep }}>
                <img
                  src={`${IMG}/elevador.webp`}
                  alt={`Furgón levantado en el elevador del taller de ${BIZ.name}`}
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover"
                />
              </div>
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-2`}
                style={{ backgroundColor: C.coalDeep, color: C.yellow }}
              >
                el taller por dentro
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Servicios: la carta del taller ── */}
      <section id="servicios" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.02]`} style={{ color: C.ink }}>
              Todo lo que anuncia
              <br />
              <span style={{ color: C.red }}>la cenefa del portón</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
              La misma lista que cuelga del portón: taller completo, lavado
              y tienda de repuestos en una sola visita.
            </p>
          </div>
        </Reveal>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-14 items-start">
          <ol className="border-t" style={{ borderColor: C.line }}>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s} delay={i * 60}>
                <li className="flex gap-4 md:gap-6 py-5 border-b items-start" style={{ borderColor: C.line }}>
                  <span className="font-mono text-xs md:text-sm pt-1.5 shrink-0 w-8" style={{ color: C.red }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={`${display.className} font-extrabold uppercase text-lg md:text-xl leading-tight`} style={{ color: C.ink }}>
                      {s}
                    </h3>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: C.muted }}>
                      {DESC_SERVICIOS[s]}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="space-y-6 lg:sticky lg:top-24">
            <Reveal delay={100}>
              <figure className="border-[8px] shadow-md rotate-[1.2deg]" style={{ borderColor: C.coal }}>
                <img
                  src={`${IMG}/aceites.webp`}
                  alt={`Estante de aceites y lubricantes en la tienda de ${BIZ.name}`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={200}>
              <figure className="border-[8px] shadow-md rotate-[-1.4deg]" style={{ borderColor: C.coal }}>
                <img
                  src={`${IMG}/neumaticos.webp`}
                  alt={`Rack de neumáticos nuevos en el local de ${BIZ.name}`}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── La tienda ── */}
      <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.paperSoft, borderTop: `4px solid ${C.coal}`, borderBottom: `4px solid ${C.coal}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>La tienda</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.02] mb-4`} style={{ color: C.ink }}>
              El repuesto está
              <br />
              <span style={{ color: C.blue }}>en el mismo local</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl mb-10" style={{ color: C.muted }}>
              Aceites, filtros, repuestos, baterías y neumáticos a la venta en
              la tienda: si tu cambio de aceite pide un filtro nuevo o el auto
              necesita neumáticos, salen del mismo estante.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <figure className="relative border-[10px] shadow-xl" style={{ borderColor: C.coal }}>
              <img
                src={`${IMG}/fachada.webp`}
                alt={`Fachada de ${BIZ.name} con sus letreros en ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover"
              />
              <figcaption
                className={`${display.className} absolute bottom-4 left-4 text-xs font-bold uppercase tracking-[0.14em] px-3.5 py-2`}
                style={{ backgroundColor: C.coalDeep, color: '#f6f2e7' }}
              >
                Av. Luis Cruz Martínez 1441 · ex Luna Llena
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Eyebrow>Opiniones</Eyebrow>
            <p className={`${display.className} font-extrabold text-[clamp(4rem,14vw,7rem)] leading-none mb-2`} style={{ color: C.ink }}>
              {BIZ.rating}
            </p>
            <Stars value={5} color={C.red} className="w-6 h-6 mb-4" />
            <p className="text-sm leading-relaxed mb-5" style={{ color: C.muted }}>
              Nota perfecta en Google con {BIZ.reviews} opiniones: lo que más
              repiten los clientes es la confianza — el auto se puede dejar
              y cumplen lo acordado.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
              style={{ color: C.red, textDecorationColor: 'rgba(200,35,31,0.35)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <div className="space-y-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={100 + i * 100}>
                <figure
                  className="p-6 md:p-7 border-l-4"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.red, boxShadow: '0 2px 4px rgba(16,16,8,0.06)' }}
                >
                  <blockquote className="text-base md:text-lg leading-relaxed mb-4" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[11px] uppercase tracking-[0.16em] font-bold" style={{ color: C.red }}>
                      {r.autor} · {r.detalle}
                    </span>
                    <Stars value={5} color={C.yellow} className="w-3.5 h-3.5" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.coalDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow light>Cómo llegar</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[1.02] mb-6`} style={{ color: '#f6f2e7' }}>
              El portón negro
              <br />
              <span style={{ color: C.yellow }}>de la 1441</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(246,242,231,0.78)' }}>
              {BIZ.address} ({BIZ.addressExtra})
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <ul className="space-y-2.5 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-baseline gap-3 text-sm md:text-base" style={{ color: 'rgba(246,242,231,0.78)' }}>
                  <span className="inline-block w-2.5 h-2.5 shrink-0 translate-y-[1px]" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
                  <span>
                    <strong className="font-bold" style={{ color: '#f6f2e7' }}>{h.days}:</strong> {h.time}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm px-6 py-3 border-2 tap-44`}
                style={{ borderColor: 'rgba(246,242,231,0.4)', color: '#f6f2e7' }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="border-[10px] min-h-[320px] h-full" style={{ borderColor: C.yellow, backgroundColor: C.coal }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <div className="flex justify-center gap-4 mb-8" aria-hidden="true">
              {['Aceite', 'Frenos', 'Lavado'].map((s, i) => (
                <Flag key={s} label={s} tilt={[-1.4, 1.4, -1.4][i]} />
              ))}
            </div>
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2rem,6.5vw,4rem)] leading-[1.0] mb-6`} style={{ color: C.ink }}>
              Hoy mismo
              <br />
              <span style={{ color: C.red }}>lo dejas listo</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: C.muted }}>
              Escribe por WhatsApp, confirman la hora y tu auto entra por el
              portón de la 1441. O se lo llevan ellos.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-3.5 transition-transform active:scale-95 tap-44`}
              style={{ backgroundColor: C.red, color: '#FFFFFF' }}
            >
              Agendar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.coalDeep, color: '#f6f2e7' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-wrap items-center gap-x-6 gap-y-3 justify-between">
          <p className={`${display.className} font-extrabold uppercase text-lg flex items-center gap-3`}>
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-8 w-auto rounded-sm" />
            {BIZ.name}
          </p>
          <address className="not-italic text-xs leading-relaxed" style={{ color: 'rgba(246,242,231,0.8)' }}>
            {BIZ.address} ({BIZ.addressExtra}) · {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,242,231,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-16 text-xs leading-relaxed" style={{ color: 'rgba(246,242,231,0.75)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#f6f2e7' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — con fotos, reseñas y datos de su ficha de Google y su letrero.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.yellow }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
