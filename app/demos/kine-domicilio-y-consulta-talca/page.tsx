import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, IG_LINK, MAPS_URL, MAPS_EMBED, IMG, PASOS, AREAS, HORARIO, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

/**
 * Identidad desde su logo real: los 4 rombos de colores (naranja,
 * púrpura, teal y verde) se usan como marcadores de cada área de
 * atención; el resto es blanco cálido y tinta verde-petróleo,
 * clínico pero cercano — como su atención a domicilio.
 */
const C = {
  bg: '#f6f8f6',
  card: '#ffffff',
  tint: '#e9f2ec',
  ink: '#16302b',
  soft: '#46594f',
  line: 'rgba(22,48,43,0.14)',
  green: '#178233',
  orange: '#e8890c',
  purple: '#6040a0',
  teal: '#0ea5a0',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kine-domicilio-y-consulta-talca',
  title: 'Kine Domicilio y Consulta Talca — Kinesiología a domicilio',
  description:
    'Kinesiología a domicilio y en consulta en Camino Las Rastras, sector 5 Norte de Talca. Especialidad en rehabilitación geriátrica. Nota 5,0 en Google. Agenda por WhatsApp.',
  image: `${IMG}/sesion.webp`,
})

const NAV_LINKS = [
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Áreas', href: '#areas' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horarios', href: '#contacto' },
]

/** El rombo del logo como marcador de sección/área. */
function Rombo({ color, size = 10 }: { color: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="inline-block rotate-45 shrink-0 rounded-[2px]"
      style={{ width: size, height: size, backgroundColor: color }}
    />
  )
}

export default function KinePage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bg, color: C.ink }}>
      <BlitzNav
        name={<span className="font-semibold tracking-tight">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(246,248,246,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.green,
          btnInk: '#ffffff',
        }}
      />

      {/* ── Hero: la camilla en tu casa ── */}
      <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28 pb-12 md:pb-20">
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-[340px] h-[340px] rotate-45 rounded-[56px] opacity-40"
          style={{ backgroundColor: C.tint }}
        />
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <p className="inline-flex items-center gap-2.5 text-[12px] font-medium mb-5 px-3.5 py-1.5 rounded-full" style={{ backgroundColor: C.tint, color: C.ink }}>
              <Rombo color={C.orange} size={8} />
              Atención geriátrica a domicilio
            </p>
            <h1 className={`${display.className} font-bold tracking-tight leading-[1.04] text-[clamp(2.2rem,7.8vw,4rem)] mb-5`} style={{ color: C.ink }}>
              La kinesióloga que llega
              <br />
              <span style={{ color: C.green }}>a tu casa en Talca</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-7" style={{ color: C.soft }}>
              Consulta en Camino Las Rastras o sesiones a domicilio con camilla
              e insumos incluidos. Más de 9 años de experiencia y atención
              individual, de a un paciente a la vez.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-8 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.green, color: '#fff' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm px-4 py-2.5 rounded-full border tap-44"
                style={{ borderColor: C.line, backgroundColor: C.card, color: C.ink }}
              >
                <Stars value={5} color={C.orange} className="w-4 h-4" />
                <span className="font-medium">{BIZ.rating} · {BIZ.reviews} opiniones</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 md:-inset-4 rotate-[3deg] rounded-[36px]"
                style={{ backgroundColor: C.tint }}
              />
              <img
                src={`${IMG}/sesion.webp`}
                alt={`Sesión de kinesiología a domicilio de ${BIZ.name}: la kinesióloga atiende a un paciente en su camilla`}
                fetchPriority="high"
                className="relative w-full aspect-[4/3.4] object-cover rounded-[28px]"
                style={{ border: `3px solid ${C.card}` }}
              />
              <div
                className="absolute -bottom-5 left-5 md:left-8 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-lg"
                style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}
              >
                <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
                <div>
                  <p className="text-[13px] font-semibold leading-tight" style={{ color: C.ink }}>Consulta y domicilio</p>
                  <p className="text-[11px]" style={{ color: C.soft }}>Registro Profesional {BIZ.registro}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cómo funciona: la ruta del paciente ── */}
      <section id="como-funciona" className="scroll-mt-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-4xl leading-[1.06] mb-3`} style={{ color: C.ink }}>
              Así funciona una atención
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-10 md:mb-12" style={{ color: C.soft }}>
              Sin salas de espera ni traslados complicados: el proceso completo
              se coordina por WhatsApp.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {PASOS.map((p, i) => (
              <Reveal key={p.paso} delay={i * 90}>
                <div className="h-full rounded-3xl p-6 md:p-7" style={{ backgroundColor: C.bg, border: `1px solid ${C.line}` }}>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`${display.className} w-10 h-10 rounded-full flex items-center justify-center font-bold text-base`}
                      style={{ backgroundColor: [C.orange, C.teal, C.purple][i], color: '#fff' }}
                    >
                      {i + 1}
                    </span>
                    <span className="h-px flex-1" style={{ backgroundColor: C.line }} aria-hidden="true" />
                  </div>
                  <h3 className={`${display.className} font-semibold text-lg mb-2`} style={{ color: C.ink }}>{p.paso}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: C.soft }}>{p.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Áreas de atención: los 4 rombos ── */}
      <section id="areas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-4xl leading-[1.06] mb-3`} style={{ color: C.ink }}>
              Cuatro áreas, un solo equipo
            </h2>
            <p className="text-sm md:text-base max-w-xl mb-10 md:mb-12" style={{ color: C.soft }}>
              Los servicios publicados en su carta profesional, agrupados por
              las cuatro áreas de atención del consultorio.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {AREAS.map((a, i) => (
              <Reveal key={a.area} delay={i * 80}>
                <article className="h-full rounded-3xl p-6 md:p-7" style={{ backgroundColor: C.card, border: `1px solid ${C.line}` }}>
                  <div className="flex items-center gap-3 mb-3">
                    <Rombo color={a.color} size={14} />
                    <h3 className={`${display.className} font-semibold text-lg`} style={{ color: C.ink }}>{a.area}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.soft }}>{a.detalle}</p>
                  <ul className="space-y-2">
                    {a.servicios.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm font-medium" style={{ color: C.ink }}>
                        <Rombo color={a.color} size={7} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          {/* El equipo en movimiento: fotos reales de la consulta y los domicilios */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-4 md:mt-6">
            {[
              {
                f: 'kinesiologa',
                alt: `${BIZ.profesional}, kinesióloga de ${BIZ.short}, junto al equipamiento de la consulta`,
                cap: (
                  <>
                    <strong>{BIZ.profesional}</strong> · kinesióloga a cargo · {BIZ.registro}
                  </>
                ),
              },
              {
                f: 'domicilio',
                alt: `Sesión de kinesiología a domicilio de ${BIZ.short}: ejercicio de fuerza con mancuernas en el living de la casa`,
                cap: 'A domicilio: ejercicio de fuerza con mancuernas, en tu living.',
              },
              {
                f: 'trotadora',
                alt: `Paciente adulta mayor rehabilitando la marcha en trotadora durante una sesión a domicilio de ${BIZ.short}`,
                cap: 'Reeducación de la marcha en casa, con supervisión directa.',
              },
            ].map((p, i) => (
              <Reveal key={p.f} delay={60 + i * 80}>
                <figure className="relative rounded-3xl overflow-hidden h-full" style={{ border: `1px solid ${C.line}` }}>
                  <img
                    src={`${IMG}/${p.f}.webp`}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full h-full min-h-[280px] aspect-[3/4] object-cover"
                  />
                  <figcaption
                    className="absolute left-3 bottom-3 right-3 rounded-2xl px-4 py-3 text-[13px] leading-snug"
                    style={{ backgroundColor: 'rgba(255,255,255,0.94)', color: C.ink }}
                  >
                    {p.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10 md:mb-12">
              <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-4xl leading-[1.06]`} style={{ color: '#fff' }}>
                Familias que ya los
                <br />
                recomiendan en Talca
              </h2>
              <div className="flex items-center gap-4">
                <p className={`${display.className} font-bold text-5xl md:text-6xl leading-none`} style={{ color: '#fff' }}>{BIZ.rating}</p>
                <div>
                  <Stars value={5} color={C.orange} className="w-5 h-5 mb-1.5" />
                  <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.7)' }}>{BIZ.reviews} opiniones en Google</p>
                </div>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 80}>
                <figure className="h-full rounded-3xl p-6 md:p-7" style={{ backgroundColor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  <blockquote className="text-sm md:text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className="flex items-center justify-between gap-3 flex-wrap">
                    <span className="text-[12px] font-semibold" style={{ color: '#f5a623' }}>{r.autor}</span>
                    <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.55)' }}>Google · {r.detalle}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contacto: horario + mapa ── */}
      <section id="contacto" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-2 gap-8 md:gap-12 items-stretch">
          <Reveal>
            <h2 className={`${display.className} font-bold tracking-tight text-3xl md:text-4xl leading-[1.06] mb-6`} style={{ color: C.ink }}>
              Consulta en 5 Norte,
              <br />
              <span style={{ color: C.green }}>domicilio en todo Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.soft }}>
              {BIZ.address}, {BIZ.addressExtra}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="rounded-3xl overflow-hidden mb-6" style={{ border: `1px solid ${C.line}`, backgroundColor: C.card }}>
              <p className={`${display.className} font-semibold text-sm px-5 pt-4 pb-1`} style={{ color: C.ink }}>Horario de atención</p>
              <ul>
                {HORARIO.map(([dia, hora]) => (
                  <li
                    key={dia}
                    className="flex items-center justify-between px-5 py-3 text-sm border-t"
                    style={{ borderColor: C.line, color: C.soft }}
                  >
                    <span className="font-medium" style={{ color: C.ink }}>{dia}</span>
                    <span className="tabular-nums">{hora}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-sm md:text-base px-8 py-3 rounded-full transition-transform active:scale-95 tap-44"
                style={{ backgroundColor: C.green, color: '#fff' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={IG_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-medium px-6 py-3 rounded-full border tap-44"
                style={{ borderColor: C.ink, color: C.ink }}
              >
                @{BIZ.instagram}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-3xl overflow-hidden h-full min-h-[340px]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name} en ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[340px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={`${IMG}/logo.webp`} alt="" className="h-9 w-9 object-contain" aria-hidden="true" />
            <p className={`${display.className} font-semibold text-sm`} style={{ color: '#fff' }}>
              {BIZ.name}
            </p>
          </div>
          <p className="text-[12px]" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {BIZ.city} · {BIZ.phoneDisplay}
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Agendar con ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
