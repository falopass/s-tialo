import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG, AREAS, PASOS, PREVISIONES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/**
 * Identidad: clínica de barrio, cálida y cercana. Crema de consulta +
 * verde salvia, Gloock serif tranquila, y el arco de la puerta de
 * esquina (su fachada real es una esquina con acceso por rampa) como
 * motivo de las fotos. Línea de recuperación con pasos, nada de grillas
 * de tarjetas iguales.
 */
const C = {
  bg: '#faf4ea',
  card: '#fffdf7',
  tint: '#eee4d2',
  ink: '#2c2620',
  soft: '#6b6155',
  line: 'rgba(44,38,32,0.14)',
  sage: '#3a7d5c',
  sageDeep: '#25543d',
  sageSoft: '#e4efe7',
}

export const metadata: Metadata = demoMetadata({
  slug: 'consulta-medica-san-clemente',
  title: 'Consulta Médica San Clemente · Kinesiología en Humberto Silva',
  description:
    'Kinesiología y rehabilitación en Humberto Silva 202, San Clemente: traumatológica, neurológica, respiratoria infantil, masoterapia, taping y domicilio. Fonasa e isapres. Fono +56 71 262 2356.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Atención', href: '#atencion' },
  { label: 'Qué tratamos', href: '#areas' },
  { label: 'Previsiones', href: '#previsiones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

/** Marca visible de imagen de referencia (no es foto real del negocio). */
function BosquejoBadge() {
  return (
    <span
      className="absolute left-3 top-3 z-10 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em]"
      style={{ backgroundColor: 'rgba(255,253,247,0.94)', color: C.sageDeep, border: `1.5px dashed ${C.sage}` }}
    >
      bosquejo de referencia
    </span>
  )
}

/** El arco de la entrada de esquina, como marcador de sección. */
function Arco({ color = C.sage }: { color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round">
      <path d="M5 21V11a7 7 0 0 1 14 0v10M5 21h14" />
    </svg>
  )
}

function Eyebrow({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.28em]"
      style={{ color: tone === 'dark' ? C.sageSoft : C.sageDeep }}
    >
      <Arco color={tone === 'dark' ? C.sageSoft : C.sageDeep} />
      {children}
    </span>
  )
}

export default function ConsultaPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={<span className={`${display.className} text-base md:text-lg`}>{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(250,244,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.sage,
          btnInk: '#ffffff',
        }}
      />

      {/* ── Hero: la esquina real en arco ──────────────────────────── */}
      <section id="inicio" className="relative overflow-hidden pt-[60px] md:pt-[68px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-16 pb-12 md:pb-16 grid md:grid-cols-[1.05fr_0.95fr] gap-10 items-center">
          <Reveal>
            <Eyebrow>Kinesiología · Humberto Silva 202</Eyebrow>
            <h1 className={`${display.className} mt-4 text-[40px] leading-[1.04] md:text-[68px] tracking-tight`}>
              Volver a moverse, aquí en <span style={{ color: C.sage }}>San Clemente</span>
            </h1>
            <p className="mt-5 text-[15px] md:text-lg leading-relaxed max-w-[46ch]" style={{ color: C.soft }}>
              Rehabilitación kinésica con Fonasa e isapres, en la esquina de Humberto Silva, dentro de Almacén Florencia. También atienden a domicilio.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={CALL_LINK}
                className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-full text-[15px] font-bold text-white transition-transform active:scale-95`}
                style={{ backgroundColor: C.sage, outlineColor: C.sage }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Agendar hora
              </a>
              <a
                href="#areas"
                className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-full text-[15px] font-bold transition-transform active:scale-95`}
                style={{ color: C.sageDeep, border: `1.5px solid ${C.sage}` }}
              >
                Qué tratamos
              </a>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold" style={{ color: C.sageDeep }}>
              <Stars value={4.4} color={C.sage} className="w-4 h-4" />
              {BIZ.rating} en Google · {BIZ.reviews} reseñas reales
            </p>
          </Reveal>

          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-[360px]">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[18px]" style={{ border: `2px solid ${C.sage}`, boxShadow: `10px 10px 0 ${C.tint}` }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Esquina real de Humberto Silva 202, San Clemente, donde funciona la consulta: edificio esquinero crema con acceso por rampa"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 360px, 80vw"
                  priority
                />
              </div>
              <figcaption
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] shadow-md"
                style={{ color: C.sageDeep, border: `1.5px solid ${C.sage}` }}
              >
                Humberto Silva 202, esquina
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Quién atiende + cómo es ─────────────────────────────────── */}
      <section id="atencion" className="py-14 md:py-20" style={{ backgroundColor: C.sageDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          <Reveal>
            <Eyebrow tone="dark">Te atiende</Eyebrow>
            <h2 className={`${display.className} mt-3 text-4xl md:text-5xl tracking-tight text-white`}>
              {BIZ.profesional}
            </h2>
            <p className="mt-2 text-[15px] font-bold uppercase tracking-[0.18em]" style={{ color: C.sageSoft }}>
              {BIZ.profesionalRol}
            </p>
            <p className="mt-4 text-[15px] md:text-base leading-relaxed max-w-[44ch]" style={{ color: 'rgba(255,255,255,0.8)' }}>
              El profesional listado en la consulta en Doctoralia: primera visita, visitas sucesivas y atención domiciliaria.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.14em]" style={{ backgroundColor: 'rgba(255,255,255,0.12)', color: '#ffffff' }}>
              <Arco color="#ffffff" /> Nota 4,4 en su ficha de Google
            </div>
          </Reveal>

          <div className="flex flex-col gap-0">
            {PASOS.map((p, i) => (
              <Reveal key={p.paso} delay={i * 80}>
                <article className="relative pl-14 pb-8 last:pb-0">
                  <span
                    className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-bold"
                    style={{ backgroundColor: C.sageSoft, color: C.sageDeep }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {i < PASOS.length - 1 ? (
                    <span className="absolute left-[17px] top-10 bottom-0 w-px" style={{ backgroundColor: 'rgba(255,255,255,0.25)' }} aria-hidden="true" />
                  ) : null}
                  <h3 className={`${display.className} text-xl md:text-2xl text-white`}>{p.paso}</h3>
                  <p className="mt-1.5 text-[14px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
                    {p.texto}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué tratamos: lista con bosquejos marcados ──────────────── */}
      <section id="areas" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Eyebrow>Qué tratamos</Eyebrow>
          <h2 className={`${display.className} mt-3 text-4xl md:text-6xl tracking-tight`}>
            Rehabilitación para la vida real
          </h2>
          <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.soft }}>
            Las líneas de atención que publica la consulta: desde un esguince hasta la rehabilitación neurológica.
          </p>
        </Reveal>

        <div className="mt-10 grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div className="flex flex-col">
            {AREAS.map((a, i) => (
              <Reveal key={a.nombre} delay={i * 60}>
                <article className="py-5 first:pt-0" style={{ borderTop: i === 0 ? 'none' : `1.5px dashed ${C.line}` }}>
                  <h3 className={`${display.className} text-[21px] md:text-2xl tracking-tight flex items-baseline gap-3`}>
                    <span className="text-[13px] font-bold" style={{ color: C.sage }}>{String(i + 1).padStart(2, '0')}</span>
                    {a.nombre}
                  </h3>
                  <p className="mt-1.5 pl-9 text-[14px] md:text-[15px] leading-relaxed" style={{ color: C.soft }}>
                    {a.detalle}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Reveal>
              <figure className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-t-[120px] rounded-b-[16px]" style={{ border: `1.5px solid ${C.line}` }}>
                  <BosquejoBadge />
                  <Image
                    src={`${IMG}/bosquejo-box.webp`}
                    alt="Bosquejo de referencia: box de atención kinesiológica con camilla, bandas elásticas, pelotas de terapia y rollo de taping"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 92vw"
                  />
                </div>
                <figcaption className="mt-2.5 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.soft }}>
                  El box de atención · bosquejo, la consulta no publica fotos
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={80}>
              <figure className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[16px]" style={{ border: `1.5px solid ${C.line}` }}>
                  <BosquejoBadge />
                  <Image
                    src={`${IMG}/bosquejo-taping.webp`}
                    alt="Bosquejo de referencia: kinesiólogo aplicando cinta azul de vendaje neuromuscular en el hombro de un paciente"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 45vw, 92vw"
                  />
                </div>
                <figcaption className="mt-2.5 text-[12px] font-semibold uppercase tracking-[0.14em]" style={{ color: C.soft }}>
                  Colocación de taping · bosquejo de referencia
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Previsiones ────────────────────────────────────────────── */}
      <section id="previsiones" className="py-12 md:py-16" style={{ backgroundColor: C.tint }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Eyebrow>Previsiones</Eyebrow>
            <h2 className={`${display.className} mt-3 text-3xl md:text-5xl tracking-tight`}>
              Fonasa e isapres
            </h2>
            <p className="mt-4 max-w-[52ch] text-[15px] md:text-base leading-relaxed" style={{ color: C.soft }}>
              Las previsiones que publica la consulta en su ficha. Confirma la tuya al agendar.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {PREVISIONES.map((p) => (
                <li
                  key={p}
                  className="rounded-full bg-white px-4 py-2.5 text-[13px] md:text-sm font-bold"
                  style={{ color: C.sageDeep, border: `1.5px solid ${C.sage}` }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo llegar ────────────────────────────────────────────── */}
      <section id="contacto" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div className="h-full p-6 md:p-8 rounded-[20px] flex flex-col" style={{ backgroundColor: C.card, border: `1.5px solid ${C.line}` }}>
              <Eyebrow>Cómo llegar</Eyebrow>
              <h2 className={`${display.className} mt-3 text-3xl md:text-4xl tracking-tight`}>
                La esquina de Humberto Silva
              </h2>
              <dl className="mt-6 flex flex-col gap-4 text-[15px]">
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.sage }}>Dirección</dt>
                  <dd className="mt-1 font-medium">
                    {BIZ.address}, {BIZ.city} · {BIZ.addressExtra}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.sage }}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={CALL_LINK} className={`${focusRing} text-lg font-bold underline underline-offset-4 decoration-dotted tap-44`} style={{ color: C.sageDeep, outlineColor: C.sage }}>
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.sage }}>Horario</dt>
                  <dd className="mt-1" style={{ color: C.soft }}>
                    Lunes a viernes, en horario de mañana y tarde.
                  </dd>
                </div>
              </dl>
              <div className="mt-auto pt-7 flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${focusRing} tap-44 inline-flex items-center gap-2 h-[52px] px-6 rounded-full text-[15px] font-bold text-white transition-transform active:scale-95`}
                  style={{ backgroundColor: C.sage, outlineColor: C.sage }}
                >
                  Agendar por teléfono
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${focusRing} tap-44 inline-flex items-center h-[52px] px-6 rounded-full text-[15px] font-bold transition-transform active:scale-95`}
                  style={{ color: C.sageDeep, border: `1.5px solid ${C.sage}` }}
                >
                  Abrir en Maps
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative h-full min-h-[320px] rounded-[20px] overflow-hidden shadow-md" style={{ border: `1.5px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer className="pt-7 pb-24" style={{ backgroundColor: C.sageDeep, color: 'rgba(255,255,255,0.85)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Arco color="#ffffff" />
            <span className={`${display.className} text-xl text-white`}>{BIZ.name}</span>
          </div>
          <p className="text-sm leading-relaxed max-w-[52ch] text-white/70">
            Kinesiología y rehabilitación en {BIZ.address}, {BIZ.city}. Fonasa e isapres, atención en consulta y a domicilio. {BIZ.phoneDisplay}.
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
            {BIZ.city} · {BIZ.region}
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.sage} />
      <DemoBand name={BIZ.name} />
    </div>
  )
}
