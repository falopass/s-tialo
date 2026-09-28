import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_EVAL,
  IG_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  CARTA,
  EQUIPO,
  HORARIO,
  RESENAS,
} from './content'

const display = localFont({ src: '../../fonts/prata/normal-400.woff2', weight: '400' })
const body = localFont({ src: '../../fonts/jost/normal-100-900.woff2', weight: '100 900' })
const mono = localFont({ src: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' })

/**
 * Dirección de arte: «la carta de la clínica» — el beige nude de su
 * monograma SC, tinta espresso y marfil, como la vitrina de vidrio de
 * su local 101. Los tratamientos se leen como una carta de salón:
 * nombre en serif, línea punteada, área en mono. Su filosofía real es
 * el titular: menos es más. Prata hace de voz editorial; Jost acompaña;
 * Geist Mono pone las etiquetas.
 */
const C = {
  ivory: '#F7F3EE',
  ivoryDeep: '#EFE8E0',
  nude: '#C4AA98',
  nudeSoft: 'rgba(196,170,152,0.35)',
  espresso: '#32241E',
  cocoa: '#6B5547',
  rosa: '#8F5547',
  line: 'rgba(50,36,30,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clinica-skin-talca',
  title: 'Clínica Skin — medicina estética integral en Talca',
  description:
    'Medicina estética facial y corporal, cosmetología, masoterapia y atención de matrona en Calle 1 Poniente, Talca. Profesionales certificados; agenda por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

/** Monograma SC real (su foto de perfil de Instagram). */
function Monograma({ size = 64 }: { size?: number }) {
  return (
    <span
      className="inline-flex rounded-full overflow-hidden border shadow-sm shrink-0"
      style={{ width: size, height: size, borderColor: C.nudeSoft, backgroundColor: '#EDE3DB' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- logo real ya optimizado */}
      <img src={`${IMG}/logo.webp`} alt="" className="w-full h-full object-cover" aria-hidden="true" />
    </span>
  )
}

/** Línea de la carta: nombre del tratamiento, puntos, área. */
function Plato({
  plato,
  detalle,
  area,
}: {
  plato: string
  detalle: string
  area: string
}) {
  return (
    <li className="py-5">
      <div className="flex items-baseline gap-3">
        <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: C.espresso }}>
          {plato}
        </h3>
        <span
          aria-hidden="true"
          className="flex-1 border-b border-dotted translate-y-[-4px]"
          style={{ borderColor: 'rgba(50,36,30,0.35)' }}
        />
        <span
          className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-right shrink-0 max-w-[38%]`}
          style={{ color: C.rosa }}
        >
          {area}
        </span>
      </div>
      <p className="mt-1.5 text-sm md:text-[15px] leading-relaxed max-w-md" style={{ color: C.cocoa }}>
        {detalle}
      </p>
    </li>
  )
}

export default function ClinicaSkinDemo() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.ivory, color: C.espresso }}
    >
      <BlitzNav
        name={
          <span className={`${display.className} tracking-wide`}>
            Clínica <span style={{ color: C.rosa }}>Skin</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/logo.webp`}
        fontClass={display.className}
        theme={{ over: 'light', bar: C.ivory, ink: C.espresso, line: C.line, btnBg: C.espresso, btnInk: '#FFFFFF' }}
      />
      <WaFab href={WA_LINK} label="Agendar hora en Clínica Skin por WhatsApp" />
      <DemoBand name={BIZ.name} />

      {/* ── HERO editorial: nombre grande + fachada ────────────────── */}
      <section id="inicio" className="pt-28 md:pt-40 pb-14 md:pb-24 px-5 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="flex items-center gap-4 mb-8">
              <Monograma size={56} />
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.24em]`} style={{ color: C.rosa }}>
                Medicina estética integral · Talca
              </p>
            </div>
            <h1
              className={`${display.className} text-[2.9rem] md:text-[5.4rem] leading-[1.04] tracking-tight max-w-4xl`}
              style={{ color: C.espresso }}
            >
              Menos es más,{' '}
              <em className="not-italic" style={{ color: C.rosa }}>
                y se nota
              </em>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-xl" style={{ color: C.cocoa }}>
              Clínica Skin es medicina estética facial y corporal en Calle 1 Poniente: resultados
              naturales, profesionales certificados y una agenda que se coordina por WhatsApp.
            </p>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 items-center">
            <Reveal delay={120}>
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl shadow-[0_18px_50px_rgba(50,36,30,0.18)]">
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de vidrio de Clínica Skin en Calle 1 Poniente: cortinas claras y el monograma SC en la puerta"
                  width={900}
                  height={640}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <div className="flex items-center gap-3">
                  <Stars value={5} color={C.rosa} className="w-5 h-5" />
                  <span className={`${mono.className} text-sm`} style={{ color: C.cocoa }}>
                    {BIZ.rating} · {BIZ.reviews} reseñas en Google
                  </span>
                </div>
                <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.cocoa }}>
                  Detrás del vidrio del local 101 hay una clínica que se toma en serio cada detalle:
                  evaluación honesta, tratamientos con ácido hialurónico, toxina botulínica y
                  bioestimuladores, y una camilla de masoterapia que tiene sus propias fans.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_EVAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center h-[50px] px-7 rounded-full text-[15px] transition-transform active:scale-95`}
                    style={{ backgroundColor: C.espresso, color: '#FFFFFF' }}
                  >
                    Agendar evaluación
                  </a>
                  <a
                    href={IG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} inline-flex items-center h-[50px] px-7 rounded-full text-[15px] border transition-transform active:scale-95`}
                    style={{ borderColor: C.espresso, color: C.espresso }}
                  >
                    {BIZ.igHandle}
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── LA CARTA: tratamientos como menú de salón ──────────────── */}
      <section id="carta" className="px-5 md:px-8 py-14 md:py-24" style={{ backgroundColor: C.ivoryDeep }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3 text-center`} style={{ color: C.rosa }}>
              La carta
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight text-center`} style={{ color: C.espresso }}>
              Tratamientos de la casa
            </h2>
            <p className="mt-4 text-base text-center max-w-xl mx-auto leading-relaxed" style={{ color: C.cocoa }}>
              Medicina estética facial y corporal, cosmetología, masoterapia y atención de matrona.
              Todo se conversa primero en una evaluación.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <ul
              className="mt-10 bg-white rounded-2xl px-6 md:px-10 py-4 divide-y shadow-[0_14px_40px_rgba(50,36,30,0.10)]"
              style={{ border: `1px solid ${C.line}` }}
            >
              {CARTA.map((c) => (
                <Plato key={c.plato} plato={c.plato} detalle={c.detalle} area={c.area} />
              ))}
            </ul>
            <p className={`${mono.className} mt-4 text-center text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.cocoa }}>
              La evaluación define el plan — nada se hace por catálogo
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── EL EQUIPO + los espacios ───────────────────────────────── */}
      <section id="equipo" className="px-5 md:px-8 py-14 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rosa }}>
              El equipo y la casa
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight max-w-3xl`} style={{ color: C.espresso }}>
              Manos certificadas, clínica preciosa
            </h2>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {EQUIPO.map((e, i) => (
              <Reveal key={e.nombre} delay={i * 90}>
                <div
                  className="flex gap-5 p-6 rounded-2xl bg-white h-full"
                  style={{ border: `1px solid ${C.line}` }}
                >
                  <div className="flex-1">
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.rosa }}>
                      {e.cargo}
                    </p>
                    <h3 className={`${display.className} text-2xl mt-1.5`} style={{ color: C.espresso }}>
                      {e.nombre}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: C.cocoa }}>
                      {e.detalle}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { f: 'equipo', a: 'Catalina, dueña de Clínica Skin, en la recepción de la clínica' },
              { f: 'atencion', a: 'Profesional de Clínica Skin marcando el rostro de una paciente antes del tratamiento' },
              { f: 'box', a: 'Box de tratamiento de Clínica Skin con equipamiento de medicina estética' },
              { f: 'masajes', a: 'Sala de masajes de Clínica Skin con camillas violetas y luz baja' },
            ].map((p, i) => (
              <Reveal key={p.f} delay={i * 70}>
                <div className="overflow-hidden rounded-xl">
                  <Image
                    src={`${IMG}/${p.f}.webp`}
                    alt={p.a}
                    width={600}
                    height={760}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ────────────────────────────────────────────────── */}
      <section id="resenas" className="px-5 md:px-8 py-14 md:py-24" style={{ backgroundColor: C.espresso }}>
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.nude }}>
              Cinco estrellas peladas
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`} style={{ color: '#FFFFFF' }}>
              Todas las reseñas dicen lo mismo:{' '}
              <em className="not-italic" style={{ color: C.nude }}>
                vuelven
              </em>
            </h2>
            <div className="mt-4 flex items-center gap-3">
              <Stars value={5} color={C.nude} className="w-5 h-5" />
              <span className={`${mono.className} text-sm`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                {BIZ.rating} en Google · {BIZ.reviews} reseñas
              </span>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className="h-full">
                <blockquote
                  className="h-full p-6 rounded-2xl flex flex-col"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.14)' }}
                >
                  <p className="text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.92)' }}>
                    “{r.texto}”
                  </p>
                  <footer className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.nude }}>
                    {r.autor} · Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── AGENDA: horario + mapa ─────────────────────────────────── */}
      <section id="agenda" className="px-5 md:px-8 py-14 md:py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-3`} style={{ color: C.rosa }}>
              Agenda
            </p>
            <h2 className={`${display.className} text-3xl md:text-5xl leading-tight`} style={{ color: C.espresso }}>
              Local 101, Calle 1 Poniente
            </h2>
            <ul className="mt-7 space-y-2.5">
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline gap-4 text-[15px]">
                  <span className={`${mono.className} w-40 shrink-0 text-[13px] uppercase tracking-[0.1em]`} style={{ color: C.cocoa }}>
                    {h.dia}
                  </span>
                  <span className={`${display.className}`} style={{ color: C.espresso }}>
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center h-[50px] px-7 rounded-full text-[15px] transition-transform active:scale-95`}
                style={{ backgroundColor: C.espresso, color: '#FFFFFF' }}
              >
                Agendar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} inline-flex items-center h-[50px] px-7 rounded-full text-[15px] border transition-transform active:scale-95`}
                style={{ borderColor: C.espresso, color: C.espresso }}
              >
                Abrir en Google Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-2xl overflow-hidden shadow-[0_18px_50px_rgba(50,36,30,0.18)]" style={{ border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-[300px] md:h-[380px] border-0"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FOOTER ─────────────────────────────────────────────────── */}
      <footer className="px-5 md:px-8 py-8" style={{ backgroundColor: C.ivoryDeep, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className={`${display.className} text-lg`} style={{ color: C.espresso }}>
            Clínica <span style={{ color: C.rosa }}>Skin</span>
          </p>
          <p className={`${mono.className} text-xs`} style={{ color: C.cocoa }}>
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay} · {BIZ.igHandle}
          </p>
        </div>
      </footer>
    </div>
  )
}
