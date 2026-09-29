import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: '../../fonts/space-grotesk/normal-300-700.woff2',
  weight: '300 700',
  variable: '--font-sg',
})
const body = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
  variable: '--font-mono',
})

// Paleta del letrero real: azul técnico de la marca, blanco y el rojo del remolino.
const C = {
  navy: '#0B2D4E',
  navy2: '#0E3A63',
  ice: '#EFF4F8',
  white: '#FFFFFF',
  red: '#D4242B',
  muted: '#49657F',
  mutedDark: '#33506B',
  line: 'rgba(11,45,78,0.14)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'clima-ltda',
  title: 'Clima Ltda. — Aire acondicionado en Talca, distribuidor autorizado',
  description:
    'Distribuidor autorizado de climatización en Calle 18 Oriente 2429, Talca. Venta, instalación y asesoría técnica. Cotiza por WhatsApp.',
  image: `${IMG}/letrero.webp`,
})

/** Regla tipo termómetro: marca el índice de cada sección. */
function Regla({ index, label, dark = false }: { index: string; label: string; dark?: boolean }) {
  const color = dark ? 'rgba(239,244,248,0.75)' : C.muted
  const line = dark ? 'rgba(239,244,248,0.25)' : 'rgba(11,45,78,0.25)'
  return (
    <div className="flex items-center gap-4" aria-hidden="true">
      <span className={`${body.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.3em]`} style={{ color: dark ? '#FF6B70' : C.red }}>
        {index}
      </span>
      <div className="h-px flex-1" style={{ background: `repeating-linear-gradient(90deg, ${line} 0 8px, transparent 8px 14px)` }} />
      <span className={`${body.className} text-[11px] md:text-xs font-medium uppercase tracking-[0.3em]`} style={{ color }}>
        {label}
      </span>
    </div>
  )
}

const SERVICIOS = [
  {
    n: '01',
    name: 'Venta de equipos',
    desc: 'Split muro, multisplit y equipos comerciales. Te orientan por metraje y uso, no por el equipo más caro.',
    img: `${IMG}/cajas.webp`,
    alt: 'Equipo de aire acondicionado nuevo junto a sus cajas de marca en Clima Ltda.',
  },
  {
    n: '02',
    name: 'Instalación',
    desc: 'Instalación de unidades interiores y exteriores con técnica propia del rubro: nivel, soporte y refrigeración.',
    img: `${IMG}/instalacion.webp`,
    alt: 'Split de muro instalado en la casa de un cliente, publicado por Clima Ltda. en su Instagram',
  },
  {
    n: '03',
    name: 'Asesoría y post-venta',
    desc: 'En reseñas destacan que enseñan a cuidar los equipos sin cobrar extra por la asesoría.',
    img: `${IMG}/split.webp`,
    alt: 'Split muro blanco instalado y funcionando en una vivienda',
  },
]

const SUCURSALES = [
  { city: 'Talca', addr: 'Calle 18 Ote. 2429', main: true },
  { city: 'Constitución', addr: 'Freire 075', main: false },
  { city: 'Rancagua', addr: 'Bombero Villalobos 533', main: false },
]

const RESENAS = [
  {
    name: 'Tatiana Martel',
    stars: 5,
    text: 'Excelente atención al cliente y lo más importante es que asesoran para que uno mismo pueda realizar acciones que benefician a los equipos, sin cobro extra por asesorías. 1000% recomendables.',
  },
  {
    name: 'Erika Cepeda',
    stars: 5,
    text: 'Muy buena atención y servicio técnico.',
  },
]

const HORAS = [
  { days: 'Lun – Vie', time: '8:30 – 13:00 / 14:30 – 18:00' },
  { days: 'Sábado', time: '9:00 – 13:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

export default function ClimaLtdaPage() {
  return (
    <div
      className={`${display.className} ${display.variable} ${body.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.ice, color: C.navy }}
    >
      {/* ── Header: spec-bar ── */}
      <header
        className="fixed top-0 inset-x-0 z-40"
        style={{ backgroundColor: 'rgba(239,244,248,0.92)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.line}` }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[56px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-2.5 tap-44">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil (Instagram @climaltda) */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="w-10 h-10 object-contain rounded bg-white ring-1 ring-[#0B2D4E]/15"
              aria-hidden="true"
            />
            <span className="font-bold text-base md:text-lg tracking-tight">CLIMA LTDA.</span>
          </a>
          <nav className="hidden md:flex items-center gap-7" aria-label="Principal">
            {[
              ['Equipos', '#equipos'],
              ['Sucursales', '#sucursales'],
              ['Contacto', '#contacto'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`${body.className} text-xs font-medium uppercase tracking-[0.18em] tap-44 hover:text-[#D4242B] transition-colors`}
                style={{ color: C.muted }}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${body.className} text-xs md:text-sm font-semibold px-4 py-2 tap-44 transition-transform active:scale-95`}
            style={{ backgroundColor: C.red, color: C.white }}
          >
            Cotizar
          </a>
        </div>
      </header>

      {/* ── Hero: la pared que vende por ellos ── */}
      <section id="inicio" className="pt-[56px]">
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 md:pt-14">
          <Reveal>
            <Regla index="TALCA / MAULE" label="Distribuidor autorizado" />
            <div className="mt-5 md:mt-7 grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <h1 className="font-light uppercase leading-[0.95] tracking-[-0.02em] text-[clamp(2.4rem,8vw,5.5rem)]">
                Climatizar
                <br />
                <strong className="font-bold">sin improvisar</strong>
              </h1>
              <p className={`${body.className} text-xs md:text-sm leading-relaxed max-w-[280px] md:text-right`} style={{ color: C.muted }}>
                Venta, instalación y asesoría de aire acondicionado desde
                Calle 18 Oriente, con casa también en Constitución y Rancagua.
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} text-sm font-semibold px-6 py-3 tap-44 transition-transform active:scale-95`}
                style={{ backgroundColor: C.navy, color: C.white }}
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#equipos"
                className={`${body.className} text-sm font-semibold px-6 py-3 tap-44 border-2 transition-colors hover:bg-white/60`}
                style={{ borderColor: C.navy, color: C.navy }}
              >
                Qué hacen ↓
              </a>
            </div>
          </Reveal>
        </div>

        {/* Letrero real de la sucursal Constitución: el propio logo y el teléfono */}
        <Reveal delay={120}>
          <figure className="mt-8 md:mt-12 relative border-y-2" style={{ borderColor: C.navy }}>
            <div className="relative aspect-[16/8] md:aspect-[21/7] overflow-hidden">
              <Image
                src={`${IMG}/letrero.webp`}
                alt="Letrero de Clima Ltda. con logos de Midea y Trane y el teléfono del negocio"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
            <figcaption
              className={`${body.className} absolute bottom-0 left-0 px-4 py-2 text-[10px] md:text-xs font-medium uppercase tracking-[0.22em]`}
              style={{ backgroundColor: C.navy, color: C.white }}
            >
              letrero real · sucursal Constitución
            </figcaption>
          </figure>
        </Reveal>
      </section>

      {/* ── Ficha técnica ── */}
      <section className={`${body.className}`} style={{ backgroundColor: C.navy, color: C.ice }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6">
            {[
              ['Rubro', 'Tienda de A/C'],
              ['Nota Google', `${BIZ.rating} ★ · ${BIZ.reviews} reseñas`],
              ['Marcas', 'Midea · Carrier · Trane'],
              ['Teléfono', BIZ.phoneDisplay],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={i * 70}>
                <div className="border-l-2 pl-4" style={{ borderColor: C.red }}>
                  <p className="text-[10px] md:text-[11px] font-medium uppercase tracking-[0.26em]" style={{ color: 'rgba(239,244,248,0.6)' }}>{k}</p>
                  <p className="mt-1.5 text-sm md:text-base font-semibold">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Qué hacen: tres partidas numeradas ── */}
      <section id="equipos" className="scroll-mt-14 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <Regla index="SEC.01" label="Lo que hacen" />
        </Reveal>
        <div className="mt-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {SERVICIOS.map((s, i) => (
            <Reveal key={s.n} delay={i * 90}>
              <article>
                <div className="relative aspect-[4/3] overflow-hidden" style={{ border: `1.5px solid ${C.navy}` }}>
                  <Image
                    src={s.img}
                    alt={s.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover"
                  />
                  <span
                    className={`${body.className} absolute top-0 left-0 px-3 py-1.5 text-[11px] font-semibold`}
                    style={{ backgroundColor: C.red, color: C.white }}
                  >
                    {s.n}
                  </span>
                </div>
                <h3 className="mt-4 font-bold text-xl md:text-2xl tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm md:text-[15px] leading-relaxed" style={{ color: C.mutedDark }}>
                  {s.desc}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Sucursales: croquis técnico ── */}
      <section id="sucursales" className="scroll-mt-14" style={{ backgroundColor: C.white, borderTop: `1.5px solid ${C.line}`, borderBottom: `1.5px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14">
          <Reveal>
            <Regla index="SEC.02" label="Tres sucursales" />
            <h2 className="mt-6 font-light uppercase leading-[1] tracking-[-0.01em] text-3xl md:text-5xl">
              Una empresa,
              <br />
              <strong className="font-bold">tres ciudades</strong>
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.mutedDark }}>
              La misma razón social atiende en el Maule y O’Higgins. Todas con
              el mismo número: {BIZ.phoneDisplay}.
            </p>
            <ul className="mt-8 space-y-0">
              {SUCURSALES.map((s) => (
                <li
                  key={s.city}
                  className="flex items-center justify-between gap-4 py-4 border-b border-dashed"
                  style={{ borderColor: 'rgba(11,45,78,0.3)' }}
                >
                  <div>
                    <p className="font-bold text-base md:text-lg">
                      {s.city}
                      {s.main && (
                        <span className={`${body.className} ml-2 text-[10px] font-semibold uppercase tracking-[0.2em] align-middle px-2 py-0.5`} style={{ backgroundColor: C.red, color: C.white }}>
                          Casa matriz
                        </span>
                      )}
                    </p>
                    <address className={`${body.className} not-italic text-xs md:text-sm mt-0.5`} style={{ color: C.muted }}>
                      {s.addr}
                    </address>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`Clima Ltda ${s.addr} ${s.city} Chile`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} shrink-0 text-xs font-semibold underline underline-offset-4 tap-44 hover:text-[#D4242B] transition-colors`}
                    style={{ color: C.navy }}
                  >
                    Maps →
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={140}>
            <figure className="h-full min-h-[320px] flex flex-col">
              <div className="relative flex-1 min-h-[280px] overflow-hidden" style={{ border: `1.5px solid ${C.navy}` }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada de Clima Ltda. en Calle 18 Oriente, Talca: letrero de distribuidor autorizado con logos Carrier y Midea"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className={`${body.className} mt-3 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                fachada Talca · distribuidor autorizado
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-center gap-4">
            <Stars value={BIZ.rating} color={C.red} className="w-5 h-5" />
            <p className={`${body.className} text-xs md:text-sm font-medium uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </p>
          </div>
        </Reveal>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="h-full p-6 md:p-7" style={{ backgroundColor: C.white, border: `1.5px solid ${C.line}` }}>
                <Stars value={r.stars} color={C.red} className="w-4 h-4" />
                <blockquote className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.navy }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${body.className} mt-5 text-[11px] font-medium uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                  {r.name} · Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Contacto: plano + mapa ── */}
      <section id="contacto" className="scroll-mt-14" style={{ backgroundColor: C.navy, color: C.ice }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Regla index="SEC.03" label="Llegar o escribir" dark />
          </Reveal>
          <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            <div>
              <Reveal>
                <h2 className="font-light uppercase leading-[1] text-3xl md:text-5xl">
                  {BIZ.address},
                  <br />
                  <strong className="font-bold">{BIZ.city}</strong>
                </h2>
                <ul className="mt-8 space-y-0">
                  {HORAS.map((h) => (
                    <li key={h.days} className={`${body.className} flex items-baseline justify-between gap-4 py-3.5 border-b border-dashed`} style={{ borderColor: 'rgba(239,244,248,0.25)' }}>
                      <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em]" style={{ color: 'rgba(239,244,248,0.7)' }}>{h.days}</span>
                      <span className="text-sm md:text-base font-semibold">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} text-sm font-semibold px-6 py-3 tap-44 transition-transform active:scale-95`}
                    style={{ backgroundColor: C.red, color: C.white }}
                  >
                    Cotizar por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} text-sm font-semibold px-6 py-3 tap-44 border-2 transition-colors hover:bg-white/10`}
                    style={{ borderColor: 'rgba(239,244,248,0.6)', color: C.ice }}
                  >
                    Abrir en Maps →
                  </a>
                </div>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <div className="min-h-[320px] h-full overflow-hidden" style={{ border: '2px solid rgba(239,244,248,0.5)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full min-h-[320px]"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.ice }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del perfil (Instagram @climaltda) */}
            <img
              src={`${IMG}/logo.webp`}
              alt=""
              className="w-9 h-9 object-contain rounded bg-white ring-1 ring-[#0B2D4E]/15 shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="font-bold text-sm tracking-tight">{BIZ.name} · {BIZ.rubro}</p>
              <address className="not-italic text-xs mt-0.5" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-[#D4242B] tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
          <p className={`${body.className} text-[11px] leading-relaxed md:max-w-[24rem]`} style={{ color: C.muted }}>
            Mockup de Sitiazo: ficha, horario, reseñas y fotos reales de Google y de su Instagram.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
