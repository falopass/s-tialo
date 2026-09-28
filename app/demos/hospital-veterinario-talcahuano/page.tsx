import Image from 'next/image'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, CallFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'
import {
  BIZ,
  HORARIO_24H,
  IMG,
  MAPS_EMBED,
  MAPS_URL,
  SERVICIOS,
  TEMAS_RESENAS,
} from './content'

/**
 * app/demos/hospital-veterinario-talcahuano/page.tsx
 *
 * Hospital veterinario 24 h en Las Hortensias, Talcahuano. La identidad
 * sale del logo real del local: índigo profundo + cruz verde. El motivo
 * que se repite es la línea de pulso (monitor de signos vitales) — es un
 * hospital, y que se vea. Syne titula, DM Sans lee. El teléfono es fijo:
 * los CTAs son «Llamar» (tel:) y no hay botón de WhatsApp.
 */

const display = localFont({
  src: [{ path: '../../fonts/syne/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/dm-sans/normal-100-1000.woff2', weight: '100 1000', style: 'normal' }],
})

const C = {
  navy: '#16203E',
  indigo: '#1E2A5A',
  cream: '#F5F3EE',
  card: '#FFFFFF',
  ink: '#1C2333',
  muted: '#555D6E',
  line: 'rgba(28,35,51,0.14)',
  lineLight: 'rgba(255,255,255,0.16)',
  green: '#2E8B6A',
  mint: '#8FE3BE',
  red: '#B03030',
  redSoft: '#FF8A80',
} as const

export const metadata = demoMetadata({
  slug: 'hospital-veterinario-talcahuano',
  title: `${BIZ.name} — Urgencias 24 h en ${BIZ.city}`,
  description: `Hospital veterinario abierto las 24 horas en Las Hortensias 5060, ${BIZ.city}. Urgencias, hospitalización y cirugía. ${BIZ.reviews} reseñas en Google.`,
  image: `${IMG}/hero.webp`,
})

/* Línea de pulso: el monitor de signos vitales como motivo gráfico. */
function Pulse({ color = C.green, className = '' }: { color?: string; className?: string }) {
  return (
    <svg viewBox="0 0 120 24" className={`h-4 w-[120px] ${className}`} fill="none" aria-hidden="true">
      <path
        d="M0 12h28l6-8 8 16 6-10 4 2h20l6-8 8 16 6-10 4 2h24"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Tag({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className="inline-flex items-center gap-2 text-xs md:text-sm font-bold uppercase tracking-[0.24em]"
      style={{ color: light ? C.mint : C.indigo }}
    >
      <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill={light ? C.mint : C.green} aria-hidden="true">
        <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
      </svg>
      {children}
    </p>
  )
}

export default function HospitalVeterinarioTalcahuanoPage() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <BlitzNav
        name="Hospital Veterinario"
        logoSrc={`${IMG}/logo.webp`}
        links={[
          { label: 'Servicios', href: '#servicios' },
          { label: 'El hospital', href: '#hospital' },
          { label: 'Reseñas', href: '#resenas' },
          { label: 'Ubicación', href: '#ubicacion' },
        ]}
        waLink={BIZ.phoneTel}
        ctaLabel="Llamar"
        fontClass={`${display.className} font-bold`}
        theme={{ over: 'light', bar: '#FFFFFF', ink: C.indigo, line: C.line, btnBg: C.red, btnInk: '#FFFFFF' }}
      />

      {/* ── HERO ── */}
      <section id="inicio" className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-12 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Reveal>
                <span
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs md:text-sm font-bold uppercase tracking-[0.18em]"
                  style={{ backgroundColor: C.red, color: '#fff' }}
                >
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
                  </span>
                  Urgencias 24 horas
                </span>
                <h1 className={`${display.className} text-[40px] md:text-[60px] font-bold leading-[1.02] mt-5`} style={{ color: C.indigo }}>
                  Un hospital que<br />nunca cierra<span style={{ color: C.green }}>.</span>
                </h1>
                <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Urgencias, hospitalización, cirugía y especialidades para tu
                  mascota — a cualquier hora, todos los días, en {BIZ.city}.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={BIZ.phoneTel}
                    className="inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-base font-bold text-white transition-transform active:scale-95"
                    style={{ backgroundColor: C.indigo }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.27a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z" />
                    </svg>
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg px-5 py-3 text-base font-semibold transition-colors"
                    style={{ color: C.indigo, border: `1.5px solid ${C.indigo}` }}
                  >
                    Cómo llegar
                  </a>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: C.indigo }}>
                    <Stars value={BIZ.rating} color={C.green} />
                    {BIZ.rating} · {BIZ.reviews} reseñas
                  </span>
                  <span className="text-sm font-medium" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                  </span>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="relative">
                <div
                  className="absolute -inset-2 rounded-2xl rotate-1"
                  style={{ backgroundColor: C.green, opacity: 0.14 }}
                  aria-hidden="true"
                />
                <Image
                  src={`${IMG}/hero.webp`}
                  alt={`Fachada de ${BIZ.name} en Las Hortensias, Talcahuano`}
                  width={866}
                  height={960}
                  className="relative w-full rounded-2xl object-cover aspect-[9/10]"
                  style={{ boxShadow: '0 20px 48px rgba(30,42,90,0.22)' }}
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
        <div className="flex justify-center pb-6">
          <Pulse />
        </div>
      </section>

      {/* ── FRANJA URGENCIA ── */}
      <section className="py-10 md:py-12" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className={`${display.className} text-xl md:text-2xl font-bold text-white`}>
              ¿Tu mascota tiene una urgencia ahora?
            </p>
            <p className="mt-1 text-sm" style={{ color: 'rgba(255,255,255,0.75)' }}>
              No esperes a que abra una clínica: aquí se atiende de noche, fines de semana y feriados.
            </p>
          </div>
          <a
            href={BIZ.phoneTel}
            className="inline-flex items-center gap-2.5 rounded-lg px-6 py-3 text-base font-bold transition-transform active:scale-95 shrink-0"
            style={{ backgroundColor: C.mint, color: C.navy }}
          >
            Llamar al {BIZ.phoneDisplay}
          </a>
        </div>
        <div className="max-w-6xl mx-auto px-5 md:px-8 mt-6">
          <Pulse color={C.redSoft} />
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Tag>Servicios</Tag>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold mt-3 leading-[1.05]`} style={{ color: C.indigo }}>
              De la urgencia a la especialidad
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.t} delay={(i % 3) * 90}>
                <article
                  className="h-full rounded-2xl p-6"
                  style={{ backgroundColor: C.cream, border: `1px solid ${C.line}` }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: i === 0 ? C.red : C.indigo }}
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#fff" aria-hidden="true">
                      <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3z" />
                    </svg>
                  </div>
                  <h3 className={`${display.className} mt-4 text-xl font-bold`} style={{ color: C.indigo }}>{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── EL HOSPITAL / FOTOS ── */}
      <section id="hospital" className="py-14 md:py-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Tag light>El hospital por dentro</Tag>
            <h2 className={`${display.className} text-3xl md:text-5xl font-bold mt-3 text-white leading-[1.05]`}>
              Box, pabellón y pacientes internados
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4">
            {[
              { img: 'consulta.webp', alt: 'Médico veterinario atendiendo a un paciente en consulta' },
              { img: 'examen.webp', alt: 'Examen clínico a una mascota en el hospital' },
              { img: 'hospitalizacion.webp', alt: 'Paciente en hospitalización con monitoreo' },
              { img: 'espera.webp', alt: 'Sala de espera del hospital veterinario' },
              { img: 'alta.webp', alt: 'Paciente recuperado de vuelta con su familia' },
            ].map((p, i) => (
              <Reveal key={p.img} delay={i * 80} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
                <div className="rounded-xl overflow-hidden h-full" style={{ border: `1px solid ${C.lineLight}` }}>
                  <Image
                    src={`${IMG}/${p.img}`}
                    alt={p.alt}
                    width={800}
                    height={1000}
                    className="w-full h-full aspect-[4/5] object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4">
            <Pulse color={C.mint} />
            <p className="text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Fotos reales publicadas en el perfil de Google del hospital.
            </p>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS (temas verificados) ── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <Tag>En Google Maps</Tag>
                <h2 className={`${display.className} text-3xl md:text-5xl font-bold mt-3 leading-[1.05]`} style={{ color: C.indigo }}>
                  {BIZ.reviews} reseñas hablan por sí solas
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <Stars value={BIZ.rating} color={C.green} />
                <span className={`${display.className} text-3xl font-bold`} style={{ color: C.indigo }}>{BIZ.rating}</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className="mt-6 text-base leading-relaxed max-w-2xl" style={{ color: C.muted }}>
              Es el hospital veterinario de referencia del gran Concepción por una razón:
              cuando la urgencia llega de noche, es aquí donde terminan las familias.
              Estos son los temas que más se repiten en sus reseñas:
            </p>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {TEMAS_RESENAS.map((t, i) => (
              <Reveal key={t.tema} delay={i * 100}>
                <div
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: C.card, border: `1px solid ${C.line}`, boxShadow: '0 10px 28px rgba(22,32,62,0.08)' }}
                >
                  <p className={`${display.className} text-4xl font-bold`} style={{ color: i === 0 ? C.red : C.indigo }}>
                    {t.menciones}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] font-bold" style={{ color: C.muted }}>
                    menciones en reseñas
                  </p>
                  <p className={`${display.className} mt-3 text-lg font-bold`} style={{ color: C.indigo }}>
                    {t.tema}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mt-6 text-sm" style={{ color: C.muted }}>
              Temas y conteos según la propia ficha de Google Maps del hospital.{' '}
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="font-semibold underline" style={{ color: C.red }}>
                Leer las {BIZ.reviews} reseñas
              </a>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── UBICACIÓN ── */}
      <section id="ubicacion" className="py-14 md:py-20" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-stretch">
          <Reveal>
            <div>
              <Tag>Horario y ubicación</Tag>
              <h2 className={`${display.className} text-3xl md:text-4xl font-bold mt-3 leading-[1.05]`} style={{ color: C.indigo }}>
                Las Hortensias, sector Las Higueras
              </h2>
              <div className="mt-6 rounded-2xl p-6" style={{ backgroundColor: C.cream, border: `1px solid ${C.line}` }}>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide"
                    style={{ backgroundColor: '#236B54', color: '#fff' }}
                  >
                    Abierto ahora
                  </span>
                  <span className="text-sm font-semibold" style={{ color: C.indigo }}>{HORARIO_24H}</span>
                </div>
                <p className="mt-4 text-sm md:text-base" style={{ color: C.muted }}>
                  {BIZ.address}, {BIZ.city} — {BIZ.region}
                </p>
                <p className="mt-4 text-sm font-semibold" style={{ color: C.indigo }}>
                  Teléfono:{' '}
                  <a href={BIZ.phoneTel} className="underline" style={{ color: C.red }}>{BIZ.phoneDisplay}</a>
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={BIZ.phoneTel}
                  className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-bold text-white"
                  style={{ backgroundColor: C.red }}
                >
                  Llamar al hospital
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-5 py-3 text-sm font-semibold"
                  style={{ color: C.indigo, border: `1.5px solid ${C.indigo}` }}
                >
                  Abrir en Maps →
                </a>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="min-h-[320px]">
            <div className="h-full rounded-2xl overflow-hidden" style={{ minHeight: 320, border: `1px solid ${C.line}` }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA + FOOTER ── */}
      <section className="py-14 md:py-20 text-center" style={{ backgroundColor: C.indigo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <Pulse color={C.mint} className="mx-auto" />
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.02] mt-5 text-white`}>
              Ellos no pueden<br />esperar<span style={{ color: C.mint }}>.</span>
            </h2>
            <a
              href={BIZ.phoneTel}
              className="mt-8 inline-flex items-center gap-2.5 rounded-lg px-8 py-3.5 text-base font-bold transition-transform active:scale-95"
              style={{ backgroundColor: '#FFFFFF', color: C.indigo }}
            >
              Llamar al {BIZ.phoneDisplay}
            </a>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.7)' }}>
              {HORARIO_24H} · {BIZ.address}, {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>
      <footer className="px-5 md:px-8 py-6" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>
          <p>{BIZ.name} · {BIZ.address}, {BIZ.city}</p>
          <p>
            Página de muestra por{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline">
              {SITE.name}
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={BIZ.phoneTel} label={`Llamar a ${BIZ.name}`} bg={C.red} />
    </div>
  )
}
