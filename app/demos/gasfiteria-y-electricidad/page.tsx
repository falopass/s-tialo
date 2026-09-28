import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_URGENTE, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
  variable: '--font-body',
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' }],
  variable: '--font-mono',
})

// Plano de obra: azul profundo + ámbar de seguridad. Las órdenes de
// trabajo numeradas (OT-01…) son el motivo del demo.
const C = {
  ink: '#0B1220',
  panel: '#101A2C',
  line: 'rgba(242,238,228,0.16)',
  bone: '#F2EEE4',
  boneSoft: '#E7E1D2',
  paper: '#F7F4EC',
  amber: '#F5A623',
  amberInk: '#1E1403',
  muted: '#8B95A8',
}

export const metadata: Metadata = demoMetadata({
  slug: 'gasfiteria-y-electricidad',
  title: 'Gasfitería y Electricidad — Maestro a domicilio en San Clemente, 24 horas',
  description:
    'Gasfitería, electricidad, calefont y riego a domicilio en San Clemente. Atención las 24 horas. Urgencias por WhatsApp.',
  image: `${IMG}/calefont.webp`,
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#ordenes' },
  { label: 'Urgencias', href: '#urgencias' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

const ORDENES = [
  {
    num: 'OT-01',
    src: `${IMG}/canerias.webp`,
    alt: 'Cañerías de agua PPR recién instaladas en una zanja de obra',
    title: 'Gasfitería y cañerías',
    desc: 'Instalación y reparación de cañerías, fugas de agua y trabajos de gasfitería en general, en casa o en obra.',
  },
  {
    num: 'OT-02',
    src: `${IMG}/taller.webp`,
    alt: 'Mesa de trabajo con partes de calefont y multímetro durante una reparación',
    title: 'Electricidad',
    desc: 'Trabajos eléctricos del hogar: revisión, diagnóstico y reparación a domicilio.',
  },
  {
    num: 'OT-03',
    src: `${IMG}/calefont.webp`,
    alt: 'Calefont Rheem instalado en el exterior de una casa',
    title: 'Calefont',
    desc: 'Instalación y mantención de calefont: que el agua caliente no falte cuando más se necesita.',
  },
  {
    num: 'OT-04',
    src: `${IMG}/riego.webp`,
    alt: 'Aspersor de riego funcionando en un jardín',
    title: 'Riego',
    desc: 'Instalación y arreglo de riego para jardines y parcelas del sector.',
  },
]

const URGENCIAS = [
  'Fuga de agua o cañería rota',
  'Corte de luz o falla eléctrica',
  'Calefont que no enciende',
  'Cualquier urgencia, a cualquier hora',
]

const REVIEWS = [
  {
    name: 'Andrea Ramirez',
    text: 'Excelente servicio.!!! Muy atento, prolijo, puntual. Un profesional al 100%.',
  },
  {
    name: 'Reinaldo Faundez',
    text: 'Excelente atención, rápido muy profecional.',
  },
]

function Blueprint({ light = false }: { light?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          'linear-gradient(rgba(245,166,35,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.05) 1px, transparent 1px)',
        backgroundSize: '44px 44px',
        opacity: light ? 0.5 : 1,
      }}
    />
  )
}

function TicketRule() {
  return (
    <div aria-hidden="true" className="flex items-center gap-2 w-full">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.amber }} />
      <div className="h-px flex-1 border-t border-dashed" style={{ borderColor: 'rgba(11,18,32,0.35)' }} />
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.amber }} />
    </div>
  )
}

export default function GasfiteriaElectricidadPage() {
  return (
    <div
      className={`${body.className} ${display.variable} ${body.variable} ${mono.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.ink, color: C.bone }}
    >
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp 24 hrs"
        theme={{ over: 'dark', bar: 'rgba(11,18,32,0.86)', ink: '#F2EEE4', line: C.line, btnBg: C.amber, btnInk: C.amberInk }}
      />

      {/* ── Hero: ficha de servicio sobre foto real ── */}
      <section id="inicio" className="relative overflow-hidden flex flex-col justify-end" style={{ minHeight: '100svh' }}>
        <Image
          src={`${IMG}/calefont-interior.webp`}
          alt="Interior de casa con calefont instalado sobre la pared de la cocina"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div aria-hidden="true" className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(11,18,32,0.72) 0%, rgba(11,18,32,0.45) 40%, rgba(11,18,32,0.94) 100%)' }} />
        <Blueprint />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pt-28 pb-10 md:pb-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.3em] px-3 py-1.5 border`}
                style={{ borderColor: 'rgba(245,166,35,0.55)', color: C.amber }}
              >
                Orden de servicio · 24 horas
              </span>
              <span className="flex items-center gap-2 text-[12px] font-semibold" style={{ color: C.bone }}>
                <Stars value={5} color={C.amber} />
                {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`${display.className} font-semibold uppercase leading-[0.98] tracking-tight text-[clamp(2.6rem,9vw,5.6rem)]`}
              style={{ color: C.bone }}
            >
              El maestro<br />
              <span style={{ color: C.amber }}>que sí llega</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(242,238,228,0.88)' }}>
              Gasfitería, electricidad, calefont y riego a domicilio en {BIZ.city} y el sector de Mariposas.
              La ficha dice abierto las 24 horas — y las reseñas confirman que contesta.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK_URGENTE}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.14em]"
                style={{ backgroundColor: C.amber, color: C.amberInk, height: 52 }}
              >
                Urgencia ahora
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 text-sm font-bold uppercase tracking-[0.14em] border"
                style={{ borderColor: 'rgba(242,238,228,0.4)', color: C.bone, height: 52 }}
              >
                Pedir visita
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <p className={`${mono.className} mt-8 text-[10px] uppercase tracking-[0.26em]`} style={{ color: 'rgba(242,238,228,0.6)' }}>
              {BIZ.address} · {BIZ.city} · {BIZ.region}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Banda urgencia ámbar ── */}
      <section id="urgencias" style={{ backgroundColor: C.amber, color: C.amberInk }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14">
          <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <Reveal>
              <p className={`${display.className} font-bold uppercase leading-none text-[clamp(2rem,6vw,3.4rem)]`}>
                24 / 7
              </p>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.26em] mt-1`}>todos los días del año</p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                {URGENCIAS.map((u) => (
                  <li key={u} className="flex items-start gap-3 text-[15px] font-semibold leading-snug">
                    <span aria-hidden="true" className="mt-[7px] w-2 h-2 shrink-0" style={{ backgroundColor: C.amberInk }} />
                    {u}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Órdenes de trabajo: servicios con foto real ── */}
      <section id="ordenes" className="scroll-mt-20" style={{ backgroundColor: C.paper, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: '#565A48' }}>
              Servicios a domicilio
            </p>
            <h2 className={`${display.className} font-semibold uppercase leading-[1.0] tracking-tight text-[clamp(1.9rem,5.5vw,3.6rem)] mb-4`}>
              Cuatro oficios, un solo llamado
            </h2>
            <p className="max-w-xl text-[15px] leading-relaxed mb-10" style={{ color: '#4A4A3F' }}>
              Las fotos de cada orden son de trabajo real subido por el propio maestro a su ficha de Google.
            </p>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {ORDENES.map((o, i) => (
              <Reveal key={o.num} delay={i * 90}>
                <article className="border" style={{ backgroundColor: '#FFFFFF', borderColor: 'rgba(11,18,32,0.18)' }}>
                  <div className="flex items-center justify-between px-5 py-3">
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: '#565A48' }}>
                      {o.num}
                    </span>
                    <span className={`${mono.className} text-[11px] uppercase tracking-[0.24em]`} style={{ color: '#565A48' }}>
                      {BIZ.city}
                    </span>
                  </div>
                  <TicketRule />
                  <div className="relative h-52 md:h-60">
                    <Image src={o.src} alt={o.alt} fill className="object-cover" sizes="(min-width:640px) 45vw, 92vw" />
                  </div>
                  <div className="px-5 py-5">
                    <h3 className={`${display.className} font-semibold uppercase text-xl tracking-tight mb-2`} style={{ color: C.ink }}>
                      {o.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#4A4A3F' }}>{o.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="relative scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Blueprint />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: C.amber }}>
                Lo que dicen en Google
              </p>
              <div className="flex items-end gap-3">
                <span className={`${display.className} font-bold leading-none text-[clamp(3.4rem,10vw,5.5rem)]`} style={{ color: C.bone }}>
                  {BIZ.rating}
                </span>
                <div className="pb-2">
                  <Stars value={5} color={C.amber} />
                  <p className="text-[12px] mt-1" style={{ color: C.muted }}>
                    {BIZ.reviews} reseñas verificadas
                  </p>
                </div>
              </div>
              <p className={`${mono.className} mt-6 text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                Reseñas reales de su ficha de Google Maps
              </p>
            </Reveal>
            <div className="grid gap-5">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.name} delay={i * 110}>
                  <blockquote className="border-l-2 pl-5 md:pl-7" style={{ borderColor: C.amber }}>
                    <p className="text-[16px] md:text-lg leading-relaxed" style={{ color: C.bone }}>
                      “{r.text}”
                    </p>
                    <footer className={`${mono.className} mt-3 text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
                      — {r.name}
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Ubicación y cobertura ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.bone, color: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
            <Reveal>
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-3`} style={{ color: '#565A48' }}>
                  Dónde trabaja
                </p>
                <h2 className={`${display.className} font-semibold uppercase leading-[1.0] tracking-tight text-[clamp(1.9rem,5vw,3rem)] mb-6`}>
                  Mariposas, San Clemente — y alrededores
                </h2>
                <dl className="space-y-4 text-[15px]">
                  <div className="flex gap-4 border-b pb-4" style={{ borderColor: 'rgba(11,18,32,0.14)' }}>
                    <dt className={`${mono.className} w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: '#565A48' }}>
                      Base
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.address}, {BIZ.city}
                      <span className="block text-sm font-normal" style={{ color: '#4A4A3F' }}>
                        El trabajo es a domicilio: llega donde estés en la comuna.
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4 border-b pb-4" style={{ borderColor: 'rgba(11,18,32,0.14)' }}>
                    <dt className={`${mono.className} w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: '#565A48' }}>
                      Horario
                    </dt>
                    <dd className="font-semibold">
                      Abierto las 24 horas
                      <span className="block text-sm font-normal" style={{ color: '#4A4A3F' }}>
                        Todos los días de la semana, según su ficha de Google.
                      </span>
                    </dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className={`${mono.className} w-24 shrink-0 text-[10px] uppercase tracking-[0.2em] pt-1`} style={{ color: '#565A48' }}>
                      Contacto
                    </dt>
                    <dd className="font-semibold">
                      {BIZ.phoneDisplay}
                      <span className="block text-sm font-normal" style={{ color: '#4A4A3F' }}>
                        WhatsApp o llamada directa.
                      </span>
                    </dd>
                  </div>
                </dl>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 mt-6 inline-flex items-center gap-2 px-5 text-sm font-bold uppercase tracking-[0.14em] border"
                  style={{ borderColor: C.ink, color: C.ink, height: 48 }}
                >
                  Abrir en Google Maps
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="border" style={{ borderColor: 'rgba(11,18,32,0.18)', minHeight: 320 }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.address}, ${BIZ.city}`} className="w-full h-full min-h-[320px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Blueprint />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] mb-4`} style={{ color: C.amber }}>
              Urgencia o trabajo programado
            </p>
            <h2 className={`${display.className} font-semibold uppercase leading-[1.0] tracking-tight text-[clamp(2rem,7vw,4.4rem)]`} style={{ color: C.bone }}>
              Escribe y se agenda<br />la visita
            </h2>
            <a
              href={WA_LINK_URGENTE}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-8 inline-flex items-center gap-2 px-8 text-sm font-bold uppercase tracking-[0.14em]"
              style={{ backgroundColor: C.amber, color: C.amberInk, height: 52 }}
            >
              WhatsApp {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      <footer className="py-8" style={{ backgroundColor: '#080D17', borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap items-center justify-between gap-3">
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            {BIZ.name} — {BIZ.city}, {BIZ.region}
          </p>
          <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
            Demo de muestra · fotos y reseñas de su ficha de Google
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
