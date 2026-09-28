import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/sora/normal-100-800.woff2', weight: '100 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Paleta del letrero y del local: celeste "Kine" + azul marino "Balance",
// fondo clínico claro. Motivo: línea de pulso — el centro se llama
// balance y trabaja el movimiento.
const C = {
  bg: '#F4F9FB',
  card: '#FFFFFF',
  ink: '#10304A',
  navy: '#1B4F72',
  celeste: '#2FA8DC',
  celesteClaro: '#D6EDF8',
  muted: '#52708A',
  line: 'rgba(16,48,74,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'kinebalance',
  title: 'Kinebalance — Kinesiología y rehabilitación en Mall Plaza Maule',
  description:
    'Rehabilitación kinésica, tratamiento estético y entrenamiento deportivo en Av. Circunvalación Ote. 1055, Talca. Agenda por WhatsApp.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'Líneas', href: '#lineas' },
  { label: 'El equipo', href: '#equipo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Agenda', href: '#agenda' },
]

// Línea de pulso: el motivo gráfico del centro.
function Pulso({ color = C.celeste, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 240 40" className={`w-full ${className}`} fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path
        d="M0 20 H70 L84 6 L96 34 L108 12 L118 20 H130 L142 8 L152 30 L162 20 H240"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Pill({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4 flex items-center gap-3`}
      style={{ color: dark ? C.celesteClaro : C.celeste }}
    >
      <span className="inline-block w-8 h-[3px] rounded-full" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

const LINEAS = [
  {
    n: '01',
    t: 'Rehabilitación kinésica',
    d: 'Lesiones, esguinces y post-operatorio: volver a moverte sin dolor, con control de cada ejercicio.',
  },
  {
    n: '02',
    t: 'Tratamiento estético',
    d: 'Criolipólisis, masajes reductivos y de relajación — los servicios que anuncian en su propio local.',
  },
  {
    n: '03',
    t: 'Entrenamiento deportivo',
    d: 'Pautas de fuerza y movimiento para rendir mejor y prevenir la siguiente lesión.',
  },
]

const RESENAS = [
  {
    q: 'Llegué por un esguince de rodilla con mucho dolor y gracias al profesionalismo y dedicación de todo el equipo logré una recuperación que superó mis expectativas.',
    a: 'Constanza O’Ryan Reyes',
    d: 'Hace 2 meses · Google',
  },
  {
    q: 'Ya son más de 5 años en Kinebalance, y seguiremos por más. Excelentes profesionales, muy dedicados a cada paciente y lo más, maravillosas personas. Grato ambiente.',
    a: 'Elizabeth Sepúlveda',
    d: 'Hace 2 meses · Google',
  },
  {
    q: 'La atención de cada uno de los profesionales fue muy amable, cercana y profesional. Ofrecen un tratamiento personalizado y están pendientes de que cada ejercicio se realice de forma correcta.',
    a: 'Nathaly Albornoz',
    d: 'Hace 2 meses · Google',
  },
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4F72]'
const btnCeleste = `${display.className} ${FOCUS} inline-block text-sm md:text-base font-semibold px-7 py-3 rounded-full bg-[#1B4F72] text-white transition-all hover:bg-[#153e5c] active:scale-95 tap-44`
const btnGhost = `${display.className} ${FOCUS} inline-block text-sm md:text-base font-semibold px-7 py-3 rounded-full border-2 transition-colors active:scale-95 tap-44`

export default function KinebalancePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.bg, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      <BlitzNav
        name={
          <span style={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            Kine<span style={{ color: C.celeste }}>balance</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar hora"
        theme={{
          over: 'light',
          bar: 'rgba(244,249,251,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.navy,
          btnInk: '#fff',
        }}
      />

      {/* ── Hero ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <Reveal>
                <Pill>{BIZ.rubro} · {BIZ.city}</Pill>
                <h1 className={`${display.className} font-bold leading-[1.05] text-[clamp(2.3rem,8.5vw,4.2rem)] mb-5`} style={{ color: C.ink }}>
                  Tu cuerpo
                  <br />
                  vuelve a <span style={{ color: C.celeste }}>moverse</span>
                </h1>
                <p className="text-base md:text-lg leading-relaxed max-w-lg mb-7" style={{ color: C.muted }}>
                  Centro kinésico en el tercer piso de Mall Plaza Maule:
                  rehabilitación, tratamiento estético y entrenamiento
                  deportivo con un equipo que te corrige cada ejercicio.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnCeleste}>
                    Agendar por WhatsApp
                  </a>
                  <a href="#lineas" className={btnGhost} style={{ borderColor: C.celeste, color: C.navy }}>
                    Qué tratan
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                  <span className="flex items-center gap-2.5">
                    <Stars value={5} color={C.celeste} />
                    <span className={`${mono.className} text-xs uppercase tracking-[0.12em]`} style={{ color: C.ink }}>
                      {BIZ.rating} · {BIZ.reviews} reseñas
                    </span>
                  </span>
                  <span className={`${mono.className} text-xs uppercase tracking-[0.12em]`} style={{ color: C.muted }}>
                    Mall Plaza Maule, piso 3
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <figure className="relative max-w-[400px] mx-auto lg:ml-auto">
                <div className="rounded-[28px] overflow-hidden border" style={{ borderColor: C.line, boxShadow: '0 24px 60px -24px rgba(16,48,74,0.35)' }}>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={`${IMG}/fachada.webp`}
                      alt="Local de Kinebalance en Mall Plaza Maule: letrero celeste y vidrios del centro kinésico"
                      fill
                      priority
                      sizes="(min-width: 1024px) 42vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                {/* tarjeta flotante: dato real */}
                <div
                  className="absolute -bottom-6 -left-4 md:-left-8 rounded-2xl px-5 py-4 bg-white border"
                  style={{ borderColor: C.line, boxShadow: '0 14px 34px -14px rgba(16,48,74,0.3)' }}
                >
                  <p className={`${display.className} text-2xl font-bold leading-none`} style={{ color: C.navy }}>
                    +5 años
                  </p>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                    con pacientes que vuelven
                  </p>
                </div>
                <figcaption className={`${mono.className} mt-14 text-[10px] uppercase tracking-[0.16em] text-right`} style={{ color: C.muted }}>
                  Local real · foto de su ficha de Google
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
        <Pulso className="h-9" />
      </section>

      {/* ── Tres líneas de trabajo ── */}
      <section id="lineas" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Pill dark>Lo que dice el muro de su local</Pill>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06] mb-4`} style={{ color: '#fff' }}>
              Tres líneas,
              <br />
              <span style={{ color: C.celeste }}>un solo objetivo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-10" style={{ color: 'rgba(214,237,248,0.85)' }}>
              Así lo pintan en la pared de su centro: rehabilitación
              kinésica, tratamiento estético y entrenamiento deportivo.
              Todo en el mismo piso del mall.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {LINEAS.map((l, i) => (
              <Reveal key={l.n} delay={i * 100}>
                <div
                  className="h-full rounded-3xl p-6 md:p-7 border"
                  style={{ backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(214,237,248,0.25)' }}
                >
                  <p className={`${mono.className} text-xs tracking-[0.2em] mb-5`} style={{ color: C.celesteClaro }}>
                    {l.n}
                  </p>
                  <h3 className={`${display.className} text-xl md:text-2xl font-bold leading-snug mb-3`} style={{ color: '#fff' }}>
                    {l.t}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(214,237,248,0.85)' }}>
                    {l.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-8 rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(214,237,248,0.25)' }}>
              <div className="relative aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={`${IMG}/sala.webp`}
                  alt="Sala de Kinebalance: pacientes en bicicletas junto al muro con los tres servicios del centro"
                  fill
                  sizes="(min-width: 1024px) 90vw, 90vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El equipo ── */}
      <section id="equipo" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-start">
          <Reveal>
            <Pill>El equipo</Pill>
            <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06] mb-6`}>
              Cada ejercicio,
              <br />
              <span style={{ color: C.celeste }}>corregido a tiempo</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.muted }}>
              Las reseñas repiten lo mismo: trato cercano, dedicación por
              paciente y corrección de cada movimiento. El equipo trabaja
              contigo en la sala, no desde un papel.
            </p>
            <p className="text-xs leading-relaxed max-w-sm mb-8" style={{ color: C.muted }}>
              Para agendar evaluación escribe por WhatsApp al{' '}
              {BIZ.phoneDisplay}: te responde el mismo equipo del centro.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnCeleste}>
              Agendar evaluación
            </a>
          </Reveal>
          <div className="grid grid-cols-2 gap-4">
            <Reveal delay={0}>
              <div className="rounded-3xl overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[3/4]">
                  <Image src={`${IMG}/recepcion.webp`} alt="Equipo de Kinebalance en la recepción del centro, junto al muro con sus tres líneas de trabajo" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={90}>
              <div className="rounded-3xl overflow-hidden border mt-8" style={{ borderColor: C.line }}>
                <div className="relative aspect-[3/4]">
                  <Image src={`${IMG}/sesion.webp`} alt="Sesión de rehabilitación: kinesiólogo guiando a una paciente sobre balón terapéutico" fill sizes="(min-width: 1024px) 25vw, 45vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
            <Reveal delay={180} className="col-span-2">
              <div className="rounded-3xl overflow-hidden border" style={{ borderColor: C.line }}>
                <div className="relative aspect-[16/9]">
                  <Image src={`${IMG}/paciente.webp`} alt="Profesional de Kinebalance celebrando el progreso con una paciente dentro de la sala" fill sizes="(min-width: 1024px) 50vw, 90vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.celesteClaro }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <Pill>Reseñas reales de Google</Pill>
                <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[1.06]`}>
                  130 personas,
                  <br />
                  nota perfecta
                </h2>
              </div>
              <div className="rounded-3xl px-6 py-5 bg-white border text-center" style={{ borderColor: C.line, boxShadow: '0 12px 30px -14px rgba(16,48,74,0.25)' }}>
                <p className={`${display.className} text-3xl font-bold leading-none`} style={{ color: C.navy }}>{BIZ.rating}</p>
                <Stars value={5} color={C.celeste} className="w-3.5 h-3.5" />
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-1`} style={{ color: C.muted }}>
                  {BIZ.reviews} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.a} delay={i * 100}>
                <blockquote className="h-full rounded-3xl p-6 bg-white border flex flex-col" style={{ borderColor: C.line }}>
                  <Stars value={5} color={C.celeste} className="w-4 h-4 mb-4" />
                  <p className="text-sm md:text-[15px] leading-relaxed mb-5 flex-1" style={{ color: C.ink }}>
                    “{r.q}”
                  </p>
                  <footer className={`${mono.className} text-[10px] uppercase tracking-[0.14em] border-t pt-3`} style={{ borderColor: C.line, color: C.muted }}>
                    {r.a} · {r.d}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Agenda + ubicación ── */}
      <section id="agenda" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          <Reveal>
            <Pill>Agenda y ubicación</Pill>
            <h2 className={`${display.className} font-bold text-3xl md:text-4xl leading-[1.08] mb-6`}>
              Piso 3 de Mall Plaza Maule,
              <br />
              <span style={{ color: C.celeste }}>Talca</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <dl className="rounded-3xl border overflow-hidden max-w-md mb-8 bg-white" style={{ borderColor: C.line }}>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3.5 border-b" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Lun a Vie</dt>
                <dd className="text-sm font-semibold">8:30 – 20:00</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3.5 border-b" style={{ borderColor: C.line }}>
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Sábado</dt>
                <dd className="text-sm font-semibold">10:00 – 13:00</dd>
              </div>
              <div className="grid grid-cols-[130px_1fr] gap-3 px-5 py-3.5">
                <dt className={`${mono.className} text-[10px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Domingo</dt>
                <dd className="text-sm font-semibold">Cerrado</dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={btnCeleste}>
                Agendar por WhatsApp
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={btnGhost} style={{ borderColor: C.celeste, color: C.navy }}>
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="rounded-3xl overflow-hidden border h-full min-h-[340px] bg-white" style={{ borderColor: C.line }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[330px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative" style={{ backgroundColor: C.ink }}>
        <Pulso color={C.celeste} className="h-9 opacity-60" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-5`} style={{ color: C.celesteClaro }}>
              La primera evaluación se agenda por WhatsApp
            </p>
            <h2 className={`${display.className} font-bold text-[clamp(1.9rem,7vw,3.6rem)] leading-[1.06] mb-8`} style={{ color: '#fff' }}>
              Empieza a moverte
              <br />
              <span style={{ color: C.celeste }}>mejor esta semana</span>
            </h2>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${btnCeleste} bg-[#2FA8DC]`}>
              Escribir a Kinebalance
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.navy, color: '#fff' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20">
          <p className={`${display.className} text-lg font-bold mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(255,255,255,0.85)' }}>
            {BIZ.address} · {BIZ.city} · {BIZ.phoneDisplay}
          </address>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono,
            horarios y reseñas son reales (ficha de Google y Facebook del
            centro); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
