import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, MARCAS, SERVICIOS, PARTES, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Identidad desde su letrero real: verde Thermocold sobre blanco,
 * condensada de letrero callejero (Oswald) + monoespaciada de boleta
 * y orden de trabajo. El motivo es el ticket de servicio: bordes
 * cortados a guión y códigos OT, como su mostrador de repuestos.
 */
const C = {
  bg: '#f4f6f1',
  card: '#ffffff',
  ink: '#152a1d',
  soft: '#3f5246',
  line: 'rgba(21,42,29,0.14)',
  green: '#1e7a3e',
  greenDeep: '#0d4524',
  greenSoft: '#e3efe5',
  tag: '#fff7d6',
}

export const metadata: Metadata = demoMetadata({
  slug: 'thermocold',
  title: 'Thermocold · Servicio técnico y repuestos en Dos Sur, Talca',
  description:
    'Taller y casa de repuestos en Av. Dos Sur 1791, Talca: aire acondicionado, refrigeración y lavadoras. Atendido por sus dueños. Fono +56 71 223 8540.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Repuestos', href: '#repuestos' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Copito del logo: el solcito + nieve de THERM-O-C-LD. */
function Copito({ size = 18, color = C.green }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round">
      <path d="M12 2v20M3.3 7l17.4 10M3.3 17L20.7 7M12 2l-2 2.5M12 2l2 2.5M12 22l-2-2.5M12 22l2-2.5M3.3 7l.3 3M3.3 7l3-.3M20.7 17l-3 .3M20.7 17l-.3-3M3.3 17l-.3-3M3.3 17l3 .3M20.7 7l-3-.3M20.7 7l-.3 3" />
    </svg>
  )
}

function SectionTag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  const color = light ? '#bfe3c6' : C.green
  return (
    <span className={`${mono.className} inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.28em]`} style={{ color }}>
      <Copito size={13} color={color} />
      {children}
    </span>
  )
}

/** Marca visible de imagen de referencia (no es foto real del negocio). */
function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute left-3 top-3 z-10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em]`}
      style={{ backgroundColor: 'rgba(255,247,214,0.94)', color: C.ink, border: `1px dashed ${C.ink}` }}
    >
      bosquejo de referencia
    </span>
  )
}

export default function ThermocoldPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={
          <span className="flex items-center gap-2.5">
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-5 w-auto object-contain" />
            <span className={`${display.className} text-base md:text-lg uppercase tracking-wide`}>Thermocold</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(244,246,241,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: '#ffffff',
        }}
      />

      {/* ── Hero: la fachada real como credencial ─────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-10 md:pb-14 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-8 items-center">
          <Reveal>
            <SectionTag>Servicio técnico · Dos Sur 1791</SectionTag>
            <h1
              className={`${display.className} mt-4 text-[42px] leading-[0.98] md:text-7xl font-semibold uppercase tracking-tight`}
              style={{ color: C.ink }}
            >
              En Dos Sur se arregla <span style={{ color: C.green }}>el frío</span> y el calor
            </h1>
            <p className="mt-5 text-[15px] md:text-lg leading-relaxed max-w-[46ch]" style={{ color: C.soft }}>
              Servicio técnico y repuestos para aire acondicionado, refrigeración y lavadoras. Atendido por sus dueños en Av. Dos Sur 1791, Talca.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-[10px] text-[15px] font-semibold text-white transition-transform active:scale-95`}
                style={{ backgroundColor: C.green, outlineColor: C.green }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                {BIZ.phoneDisplay}
              </a>
              <a
                href="#repuestos"
                className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-[10px] text-[15px] font-semibold transition-transform active:scale-95`}
                style={{ color: C.green, border: `1.5px solid ${C.green}` }}
              >
                Ver repuestos
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-[380px] rotate-2">
              <div className="bg-white p-3 pb-10 shadow-xl" style={{ border: `1px solid ${C.line}` }}>
                <div className="relative aspect-[9/11] overflow-hidden">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada real de Thermocold en Av. Dos Sur 1791: letrero verde con servicio técnico, aire acondicionado, refrigeración y lavadoras"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 380px, 88vw"
                    priority
                  />
                </div>
                <figcaption className={`${mono.className} absolute bottom-3 left-4 text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.soft }}>
                  Av. Dos Sur 1791, Talca
                </figcaption>
              </div>
              <span
                className={`${mono.className} absolute -top-3 right-6 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.22em] shadow-md`}
                style={{ backgroundColor: C.tag, color: C.ink, border: `1px dashed ${C.ink}` }}
              >
                OT-1791 · abierto
              </span>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Marquee de marcas reales (los pilares de su fachada) ───── */}
      <section aria-label="Marcas que atienden" className="py-4 overflow-hidden" style={{ backgroundColor: C.greenDeep }}>
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]" style={{ willChange: 'transform' }}>
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0 items-center" aria-hidden={n === 1}>
              {MARCAS.map((m) => (
                <span key={`${n}-${m}`} className={`${display.className} mx-6 text-[15px] md:text-base uppercase tracking-[0.16em] text-white/90 flex items-center gap-6`}>
                  {m}
                  <Copito size={12} color="rgba(255,255,255,0.55)" />
                </span>
              ))}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>
      </section>

      {/* ── Servicios como órdenes de trabajo ─────────────────────── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <SectionTag>Órdenes de trabajo</SectionTag>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl font-semibold uppercase tracking-tight`}>
            Lo que entra al taller
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.soft }}>
            Tres líneas de servicio, las mismas que anuncia su letrero callejero hace años.
          </p>
        </Reveal>

        <div className="mt-10 flex flex-col gap-5">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.ot} delay={i * 90}>
              <article
                className="grid md:grid-cols-[110px_1fr_1.2fr_150px] items-center gap-4 md:gap-6 p-5 md:p-6 rounded-[14px]"
                style={{ backgroundColor: C.card, border: `1.5px dashed ${C.green}` }}
              >
                <span className={`${mono.className} text-[13px] font-medium tracking-[0.14em] uppercase`} style={{ color: C.green }}>
                  {s.ot}
                </span>
                <h3 className={`${display.className} text-2xl md:text-3xl font-semibold uppercase tracking-tight`}>{s.nombre}</h3>
                <p className="text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.soft }}>
                  {s.detalle}
                </p>
                <div className="relative hidden md:block aspect-[4/3] rounded-[8px] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  {s.bosquejo ? <BosquejoBadge /> : null}
                  <Image src={`${IMG}/${s.img}.webp`} alt={s.alt} fill className="object-cover" sizes="150px" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── El cajón de repuestos: foto real del mostrador ─────────── */}
      <section id="repuestos" className="py-14 md:py-20" style={{ backgroundColor: C.greenSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[5/6] md:aspect-[4/5] rounded-[14px] overflow-hidden shadow-lg" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/repuestos.webp`}
                  alt="Collage real de repuestos de Thermocold: motores, bombas de desagüe, mangueras, controles electrónicos, refrigerante y conexiones"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 45vw, 92vw"
                />
              </div>
              <span className={`${mono.className} absolute -bottom-3 left-4 bg-white px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] shadow`} style={{ color: C.soft, border: `1px dashed ${C.ink}` }}>
                foto real del mostrador
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <SectionTag>Casa de repuestos</SectionTag>
            <h2 className={`${display.className} mt-3 text-4xl md:text-5xl font-semibold uppercase tracking-tight`}>
              La pieza que no pillas en otro lado
            </h2>
            <p className="mt-4 text-[15px] md:text-base leading-relaxed max-w-[50ch]" style={{ color: C.soft }}>
              El mostrador de Dos Sur guarda partes y piezas de línea blanca: si el equipo se descompuso, lo más probable es que aquí esté el repuesto.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {PARTES.map((p) => (
                <li
                  key={p}
                  className={`${mono.className} px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.12em] rounded-full`}
                  style={{ backgroundColor: C.card, color: C.greenDeep, border: `1px solid ${C.green}` }}
                >
                  {p}
                </li>
              ))}
            </ul>
            <blockquote className="mt-7 pl-4 text-[15px] leading-relaxed italic" style={{ borderLeft: `3px solid ${C.green}`, color: C.ink }}>
              &ldquo;Se encuentran repuestos que uno ni se imagina que podrían encontrar.&rdquo;
              <div className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em] not-italic`} style={{ color: C.soft }}>
                reseña real · Google Maps
              </div>
            </blockquote>
          </Reveal>
        </div>

        {/* Banco de trabajo (referencia marcada) */}
        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-14">
          <Reveal>
            <figure className="relative rounded-[14px] overflow-hidden shadow-lg" style={{ border: `1px solid ${C.line}` }}>
              <BosquejoBadge />
              <div className="relative aspect-[3/2] md:aspect-[21/9]">
                <Image
                  src={`${IMG}/bosquejo-taller.webp`}
                  alt="Bosquejo de referencia: interior de un taller de servicio técnico con banco de trabajo, estantes de repuestos y una lavadora abierta"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 90vw, 92vw"
                />
              </div>
              <figcaption className={`${mono.className} absolute bottom-3 right-3 bg-white/90 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.soft, border: `1px dashed ${C.ink}` }}>
                bosquejo · el taller de verdad queda en Dos Sur 1791
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ───────────────────────────────────────── */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <SectionTag>Lo que dice la vereda</SectionTag>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl font-semibold uppercase tracking-tight`}>
            Opiniones de la casa
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-2 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.autor} delay={i * 90}>
              <figure className="h-full p-6 md:p-7 rounded-[14px] flex flex-col" style={{ backgroundColor: C.card, border: `1.5px dashed ${C.green}` }}>
                <Stars value={r.estrellas} color={C.green} className="w-[15px] h-[15px]" />
                <blockquote className="mt-4 text-[15px] md:text-base leading-relaxed flex-1" style={{ color: C.ink }}>
                  &ldquo;{r.texto}&rdquo;
                </blockquote>
                <figcaption className={`${mono.className} mt-5 pt-4 text-[11px] uppercase tracking-[0.16em]`} style={{ borderTop: `1px dashed ${C.line}`, color: C.soft }}>
                  {r.autor} · {r.detalle} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ────────────────────────────────────────────── */}
      <section id="contacto" className="pb-16 md:pb-24">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="relative h-full min-h-[320px] rounded-[14px] overflow-hidden shadow-md" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="h-full p-6 md:p-8 rounded-[14px] flex flex-col" style={{ backgroundColor: C.greenDeep, color: '#ffffff' }}>
              <SectionTag light>Cómo llegar</SectionTag>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white`}>
                La esquina del clima
              </h2>
              <dl className="mt-6 flex flex-col gap-4 text-[15px]">
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/60`}>Dirección</dt>
                  <dd className="mt-1 font-medium">{BIZ.address}, {BIZ.city} · {BIZ.region}</dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/60`}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={CALL_LINK} className={`${focusRing} ${mono.className} text-lg font-semibold tracking-wide underline underline-offset-4 decoration-dotted tap-44`} style={{ outlineColor: '#fff' }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/60`}>Horario</dt>
                  <dd className="mt-1 text-white/85">Según su ficha, abren a las 9:00.</dd>
                </div>
              </dl>
              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-[10px] text-[15px] font-semibold transition-transform active:scale-95`}
                  style={{ backgroundColor: '#ffffff', color: C.greenDeep, outlineColor: '#fff' }}
                >
                  Llamar al taller
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-[10px] text-[15px] font-semibold text-white transition-transform active:scale-95`}
                  style={{ border: '1.5px solid rgba(255,255,255,0.7)', outlineColor: '#fff' }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="pt-7 pb-24" style={{ backgroundColor: C.ink, color: 'rgba(255,255,255,0.85)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Copito size={20} color="#ffffff" />
            <span className={`${display.className} text-xl uppercase tracking-wide text-white`}>Thermocold</span>
          </div>
          <p className="text-sm leading-relaxed max-w-[52ch] text-white/70">
            Servicio técnico y casa de repuestos en {BIZ.address}, {BIZ.city}. Aire acondicionado, refrigeración y lavadoras. {BIZ.phoneDisplay}.
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.24em] text-white/45`}>
            {BIZ.city} · {BIZ.region}
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.green} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
