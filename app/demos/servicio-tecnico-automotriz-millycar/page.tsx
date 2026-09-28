import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_PRESUPUESTO, MAPS_URL, MAPS_EMBED, IMG, HORAS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

/**
 * Paleta del demo: la marca real de Millycar — pistones rojos sobre
 * negro. Carbón de taller, papel de orden de trabajo y el rojo del logo.
 */
const C = {
  paper: '#F2F0EB',
  card: '#FBFAF7',
  carbon: '#16130F',
  carbonSoft: '#211D18',
  red: '#D8262E',
  redDeep: '#9E1B21',
  ink: '#1C1915',
  muted: '#6E6559',
  line: 'rgba(22,19,15,0.16)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D8262E]'
const BTN_WA = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-transform hover:-translate-y-0.5 active:scale-95 ${FOCUS}`

export const metadata: Metadata = demoMetadata({
  slug: 'servicio-tecnico-automotriz-millycar',
  title: 'Millycar — Servicio Técnico Automotriz en Curicó',
  description: 'Taller mecánico en Av. Manso de Velasco 965, Curicó. Diagnóstico honesto y trabajos reales. Agenda y presupuestos por WhatsApp.',
  image: '/demos/servicio-tecnico-automotriz-millycar/hero.webp',
})

const NAV = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El taller', href: '#taller' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Contacto', href: '#contacto' },
]

const OT = [
  { n: 'OT-01', name: 'Diagnóstico general', desc: 'Escáner, prueba de ruta y diagnóstico explicado antes de mover una sola pieza.' },
  { n: 'OT-02', name: 'Frenos', desc: 'Pastillas, discos, rectificado y purga del sistema completo.' },
  { n: 'OT-03', name: 'Suspensión y dirección', desc: 'Amortiguadores, terminales, tren delantero y alineación del andar.' },
  { n: 'OT-04', name: 'Motor y mantención', desc: 'Cambio de aceite, filtros, distribución y puesta a punto.' },
  { n: 'OT-05', name: 'Sistema eléctrico', desc: 'Alternador, partida, cableado y diagnóstico de fallas eléctricas.' },
]

const TRABAJOS = [
  { src: `${IMG}/boxes.webp`, alt: 'Vans y furgones dentro del taller Millycar en plena atención', label: 'El patio' },
  { src: `${IMG}/galpon.webp`, alt: 'Furgón dentro del galpón del taller con luz de entrada', label: 'El galpón' },
  { src: `${IMG}/espera.webp`, alt: 'Autos esperando su turno en el patio del taller', label: 'En espera' },
  { src: `${IMG}/repuestos.webp`, alt: 'Vitrina de repuestos y lubricantes en la recepción', label: 'Repuestos' },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: light ? '#F2A0A3' : C.red }}>
      {children}
    </p>
  )
}

export default function ServicioTecnicoMillycarPage() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      {/* Nav — barra carbón con el logo real */}
      <nav
        className="fixed top-0 inset-x-0 z-40 border-b"
        style={{ backgroundColor: 'rgba(22,19,15,0.95)', borderColor: 'rgba(242,240,235,0.12)', backdropFilter: 'blur(8px)' }}
        aria-label="Principal"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#inicio" className={`flex items-center gap-3 ${FOCUS} tap-44 rounded-md`}>
            <span className="relative h-9 w-14 shrink-0 rounded-md overflow-hidden">
              <Image src={`${IMG}/logo.webp`} alt="Logo de Millycar: pistones cruzados rojos" fill className="object-cover" sizes="56px" />
            </span>
            <span className={`${display.className} font-extrabold text-lg md:text-xl uppercase tracking-wide`} style={{ color: C.paper }}>
              Milly<span style={{ color: C.red }}>car</span>
            </span>
          </a>
          <ul className="hidden md:flex gap-7 text-sm font-medium" style={{ color: 'rgba(242,240,235,0.75)' }}>
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`hover:text-white rounded-sm ${FOCUS} tap-44`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN_WA} px-5 py-2.5 text-sm tap-44`}
            style={{ backgroundColor: C.red, color: '#FFFFFF' }}
          >
            Agendar
          </a>
        </div>
      </nav>

      {/* Hero — los boxes reales del taller */}
      <header id="inicio" className="relative min-h-svh overflow-hidden flex flex-col justify-end" style={{ backgroundColor: C.carbon }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Autos en los boxes de Millycar mientras un mecánico trabaja"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${C.carbon}70 0%, transparent 35%, ${C.carbon}f0 80%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 w-full pb-14 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: '#F2A0A3' }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} font-extrabold uppercase max-w-[16ch] text-5xl sm:text-6xl md:text-8xl leading-[0.95] mb-6`} style={{ color: '#FFFFFF' }}>
              El taller que te dice <span style={{ color: C.red }}>la verdad</span>
            </h1>
            <p className="max-w-[34rem] text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(242,240,235,0.85)' }}>
              Mecánica honesta en Av. Manso de Velasco 965: se revisa, se explica y se cobra lo que se trabajó. Nada más.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Agendar revisión
              </a>
              <a
                href={WA_LINK_PRESUPUESTO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44 border-2`}
                style={{ borderColor: 'rgba(242,240,235,0.45)', color: C.paper }}
              >
                Pedir presupuesto
              </a>
              <p className={`${mono.className} text-xs`} style={{ color: 'rgba(242,240,235,0.75)' }}>
                {BIZ.rating}★ · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Orden de trabajo — servicios como documento de taller */}
      <section id="servicios" className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal className="max-w-[42rem]">
          <Eyebrow>Servicios</Eyebrow>
          <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-4`} style={{ color: C.carbon }}>
            La orden de trabajo <span style={{ color: C.red }}>empieza aquí</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
            Cada auto entra con una orden clara: qué se revisa, qué se encontró y qué se hizo. Sin sorpresas en la boleta.
          </p>
        </Reveal>
        <div className="mt-12 rounded-2xl overflow-hidden border-2" style={{ borderColor: C.carbon, backgroundColor: C.card }}>
          <div className="px-6 md:px-8 py-4 flex items-center justify-between" style={{ backgroundColor: C.carbon }}>
            <span className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.paper }}>Orden de trabajo</span>
            <span className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.red }}>Millycar · Curicó</span>
          </div>
          <ol>
            {OT.map((s, i) => (
              <Reveal key={s.n} delay={i * 40}>
                <li className="flex items-start gap-5 md:gap-8 px-6 md:px-8 py-5 md:py-6 border-b last:border-0" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} text-xs md:text-sm font-bold shrink-0 mt-1`} style={{ color: C.red }}>
                    {s.n}
                  </span>
                  <div className="flex-1">
                    <h3 className={`${display.className} font-extrabold uppercase text-xl md:text-2xl mb-1`} style={{ color: C.carbon }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                  <span className="hidden md:block w-4 h-4 mt-2 rounded-full border-2 shrink-0" style={{ borderColor: C.red }} aria-hidden="true" />
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="px-6 md:px-8 py-4 border-t-2" style={{ borderColor: C.carbon }}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.muted }}>
              Presupuesto claro antes de trabajar · pide el tuyo por WhatsApp
            </p>
          </div>
        </div>
      </section>

      {/* El taller — trabajos reales en foto grande */}
      <section id="taller" className="py-16 md:py-24" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[42rem]">
            <Eyebrow light>El taller</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.98] mb-12`} style={{ color: '#FFFFFF' }}>
              Así trabaja <span style={{ color: C.red }}>Millycar</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            {TRABAJOS.map((t, i) => (
              <Reveal key={t.src} delay={i * 60}>
                <figure className="group">
                  <div className="relative h-52 md:h-80 rounded-xl overflow-hidden">
                    <Image src={t.src} alt={t.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 25vw" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(242,240,235,0.7)' }}>
                    {t.label}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <div className="mt-12 grid md:grid-cols-2 gap-5">
              <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                <Image src={`${IMG}/recepcion.webp`} alt="Mesón de recepción del taller con repuestos y lubricantes" fill className="object-cover" sizes="(max-width: 768px) 100vw, 560px" />
              </div>
              <div className="rounded-2xl p-7 md:p-9 flex flex-col justify-center" style={{ backgroundColor: C.carbonSoft, border: '1px solid rgba(242,240,235,0.12)' }}>
                <h3 className={`${display.className} font-extrabold uppercase text-2xl md:text-3xl mb-4`} style={{ color: '#FFFFFF' }}>
                  En el mesón te atiende <span style={{ color: C.red }}>quien trabaja</span>
                </h3>
                <p className="text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(242,240,235,0.75)' }}>
                  No hay vendedor de por medio: el mismo equipo que recibe el auto es el que lo diagnostica y lo repara. Por eso las explicaciones son cortas y verdaderas.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${BTN_WA} self-start px-6 py-3 text-sm tap-44`}
                  style={{ backgroundColor: C.red, color: '#FFFFFF' }}
                >
                  Consultar por mi auto
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reseñas — el tema que se repite: honestidad */}
      <section id="resenas" className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <Reveal>
            <Eyebrow>Reseñas</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-4`} style={{ color: C.carbon }}>
              {BIZ.rating} estrellas, {BIZ.reviews} <span style={{ color: C.red }}>reseñas reales</span>
            </h2>
            <p className="text-base leading-relaxed" style={{ color: C.muted }}>
              La palabra que más se repite en Google no es «barato» ni «rápido»: es <strong style={{ color: C.carbon }}>honesto</strong>.
            </p>
          </Reveal>
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="rounded-2xl p-7 h-full flex flex-col border-2" style={{ backgroundColor: C.card, borderColor: C.line }}>
                  <div className="flex gap-1 mb-4" aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((s) => (
                      <svg key={s} viewBox="0 0 24 24" className="w-4 h-4" fill={C.red} aria-hidden="true">
                        <path d="M12 3.2l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.6l-5.4 2.8 1.2-5.9-4.4-4.1 6-.7z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-base md:text-lg leading-relaxed flex-1 mb-5 font-medium" style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {r.author} · {r.meta}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto — horario real, dirección, mapa */}
      <section id="contacto" className="py-16 md:py-24" style={{ backgroundColor: C.carbonSoft }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <Eyebrow light>Agenda y llegada</Eyebrow>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              Av. Manso de Velasco 965, <span style={{ color: C.red }}>Curicó</span>
            </h2>
            <ul className="space-y-4 mb-8">
              {HORAS.map((h) => (
                <li key={h.days} className="flex flex-col gap-0.5 pb-4 border-b" style={{ borderColor: 'rgba(242,240,235,0.14)' }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(242,240,235,0.6)' }}>{h.days}</span>
                  <span className={`${display.className} font-extrabold text-2xl`} style={{ color: '#FFFFFF' }}>{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44`}
                style={{ backgroundColor: C.red, color: '#FFFFFF' }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44 border-2`}
                style={{ borderColor: 'rgba(242,240,235,0.4)', color: C.paper }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={100} className="lg:col-span-3">
            <div className="rounded-2xl overflow-hidden h-80 lg:h-full min-h-[320px] border" style={{ borderColor: 'rgba(242,240,235,0.18)' }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: Servicio Técnico Automotriz Millycar, Av. Manso de Velasco 965, Curicó"
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 md:px-8 py-7 text-center" style={{ backgroundColor: C.carbon, color: 'rgba(242,240,235,0.55)' }}>
        <p className="text-xs">
          {BIZ.name} · {BIZ.address}, {BIZ.city} ·{' '}
          <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: '#F2A0A3' }}>
            Facebook
          </a>{' '}
          · demo de sitio web
        </p>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp del taller" />
    </div>
  )
}
