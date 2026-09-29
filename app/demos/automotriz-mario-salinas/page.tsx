import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, CallFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/heebo/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' },
  ],
})

// Paleta tomada de las fotos reales del taller: el azul intenso de sus
// muros, el asfalto del box y el ámbar de seguridad del elevador.
const C = {
  paper: '#ECE9E0',
  card: '#F7F5EE',
  ink: '#161C26',
  muted: '#525C6B',
  line: 'rgba(22,28,38,0.16)',
  blue: '#1D4FC4',
  blueDeep: '#10265E',
  blueInk: '#EAF0FF',
  blueMuted: 'rgba(234,240,255,0.72)',
  amber: '#F0A52B',
  amberDeep: '#B87A0B',
  chalk: '#F4F2EA',
}

export const metadata: Metadata = demoMetadata({
  slug: 'automotriz-mario-salinas',
  title: 'Automotriz Mario Salinas — Taller mecánico en Talca',
  description:
    'Taller de reparación de automóviles en 5 Norte 1481, Talca. Mecánica general, frenos y suspensión. 4,8 estrellas en 25 reseñas de Google.',
  image: '/demos/automotriz-mario-salinas/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'El taller', href: '#taller' },
  { label: 'Contacto', href: '#contacto' },
]

const SERVICIOS = [
  {
    name: 'Reparación mecánica general',
    desc: 'Motor, frenos, dirección y tren delantero. Lo que suene, tiemble o falle se revisa y se repara acá mismo.',
    datum: 'Servicio automotriz integral',
  },
  {
    name: 'Mantención preventiva',
    desc: 'Aceite, filtros, correas y puntos de seguridad. La revisión periódica que evita la panne a mitad de camino.',
    datum: 'Agenda por teléfono',
  },
  {
    name: 'Frenos y suspensión',
    desc: 'Pastillas, discos, amortiguadores y terminales. Si el auto tira, vibra o suena al doblar, se deja listo.',
    datum: 'Trabajo en el propio taller',
  },
  {
    name: 'Diagnóstico claro, sin vueltas',
    desc: 'Se revisa, se explica en simple qué tiene el auto y qué conviene hacer. Los clientes lo destacan: acá se aclaran las dudas.',
    datum: 'Lo repiten sus reseñas',
  },
]

const RESENAS = [
  {
    quote: 'Muy buen taller y los maestros buenísimos, en especial el maestro Raúl Ruiz. 100% recomendable y responsable.',
    name: 'Alejandro Alegria',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    quote: 'Excelente atención, técnicos muy capacitados y prolijos en su trabajo.',
    name: 'Hector Ojeda Rojas',
    meta: 'Local Guide · 5 estrellas',
  },
  {
    quote: '100% recomendado, excelente servicio, aclara tus dudas.',
    name: 'Cobertura Talca',
    meta: 'Reseña de Google · 5 estrellas',
  },
  {
    quote: 'Confiables, excelente atención, muy responsables.',
    name: 'Monica Herold',
    meta: 'Local Guide · 5 estrellas',
  },
  {
    quote: 'Servicio automotriz integral. Un buen servicio y siempre atento a las necesidades del cliente.',
    name: 'David A. González G.',
    meta: 'Local Guide · 5 estrellas',
  },
  {
    quote: 'Profesional 100%, excelente atención y servicio.',
    name: 'Jose Lepe Cespedes',
    meta: 'Local Guide · 5 estrellas',
  },
]

const HORARIO = [
  { d: 'Lunes a viernes', h: '9:00 – 13:30 · 15:00 – 19:30' },
  { d: 'Sábado y domingo', h: 'Cerrado' },
]

function CheckMark({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 12.5l5 5L20 6.5" />
    </svg>
  )
}

function Wrench({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14.7 6.3a4.2 4.2 0 0 1 5.6-1.4l-3.2 3.2 1.4 1.4 3.2-3.2a4.2 4.2 0 0 1-5.6 5.6L6.6 21a2 2 0 0 1-2.8 0 2 2 0 0 1 0-2.8l9.1-9.1a4.2 4.2 0 0 1 1.8-2.8z" />
    </svg>
  )
}

export default function Page() {
  return (
    <div className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <BlitzNav
        name={
          <>
            <span className="inline-block w-2.5 h-2.5" style={{ backgroundColor: C.amber }} aria-hidden="true" />
            Mario Salinas
          </>
        }
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        theme={{ over: 'dark', bar: C.blueDeep, ink: '#FFFFFF', line: 'rgba(255,255,255,0.14)', btnBg: C.amber, btnInk: C.ink }}
      />

      {/* ── Hero: panel azul + foto del box ── */}
      <section id="inicio" className="relative" style={{ backgroundColor: C.blueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[108px] md:pt-[132px] pb-10 md:pb-14">
          <div className="grid md:grid-cols-[1.05fr_0.95fr] gap-8 md:gap-10 items-center">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] mb-4 flex items-center gap-2`} style={{ color: C.amber }}>
                <span className="inline-block w-2 h-2" style={{ backgroundColor: C.amber }} aria-hidden="true" />
                Taller mecánico · Talca
              </p>
              <h1 className={`${display.className} uppercase leading-[0.96] text-[clamp(2.6rem,7.5vw,4.8rem)] mb-5`} style={{ color: '#FFFFFF' }}>
                Mecánica honesta en plena{' '}
                <span style={{ color: C.amber }}>5 Norte</span>
              </h1>
              <p className="text-sm md:text-base leading-relaxed max-w-md mb-6" style={{ color: C.blueMuted }}>
                Reparación y mantención de automóviles en {BIZ.address}, {BIZ.city}.
                El taller donde te explican qué tiene tu auto, en simple.
              </p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 mb-7 tap-44 group">
                <Stars value={4.8} color={C.amber} />
                <span className={`${mono.className} text-xs md:text-sm tracking-wide underline-offset-4 group-hover:underline`} style={{ color: C.blueInk }}>
                  {BIZ.rating} · {BIZ.reviews} reseñas en Google
                </span>
              </a>
              <div className="flex flex-wrap gap-3">
                <a
                  href={CALL_LINK}
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.amber, color: C.ink }}
                >
                  Llamar al taller
                </a>
                <a
                  href="#contacto"
                  className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ color: '#FFFFFF', boxShadow: `inset 0 0 0 2px rgba(255,255,255,0.55)` }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative border" style={{ borderColor: 'rgba(255,255,255,0.28)', padding: '10px' }}>
                <span className="absolute -top-px -left-px w-4 h-4 border-t-2 border-l-2" style={{ borderColor: C.amber }} aria-hidden="true" />
                <span className="absolute -top-px -right-px w-4 h-4 border-t-2 border-r-2" style={{ borderColor: C.amber }} aria-hidden="true" />
                <span className="absolute -bottom-px -left-px w-4 h-4 border-b-2 border-l-2" style={{ borderColor: C.amber }} aria-hidden="true" />
                <span className="absolute -bottom-px -right-px w-4 h-4 border-b-2 border-r-2" style={{ borderColor: C.amber }} aria-hidden="true" />
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`${IMG}/hero.webp`}
                    alt="Auto levantado en el elevador hidráulico del taller Mario Salinas, Talca"
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover"
                    priority
                  />
                </div>
                <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-2.5`} style={{ color: C.blueMuted }}>
                  El box de trabajo · 5 Norte, Talca
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.16)' }}>
          <div className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-1.5 text-[11px] md:text-xs uppercase tracking-[0.14em]`} style={{ color: C.blueMuted }}>
            <span>{BIZ.address}, {BIZ.city}</span>
            <span aria-hidden="true">/</span>
            <span>Lun–Vie 9:00–13:30 · 15:00–19:30</span>
            <span aria-hidden="true">/</span>
            <a href={CALL_LINK} className="tap-44 underline-offset-4 hover:underline" style={{ color: C.amber }}>{BIZ.phoneDisplay}</a>
          </div>
        </div>
      </section>

      {/* ── La pizarra: servicios como checklist de recepción ── */}
      <section id="servicios" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14">
          <Reveal>
            <div className="md:sticky md:top-24">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3 flex items-center gap-2`} style={{ color: C.amberDeep }}>
                <span className="inline-block w-2 h-2" style={{ backgroundColor: C.amberDeep }} aria-hidden="true" />
                Lo que llega al taller
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98] mb-5`}>
                Del ruido raro a la<br />mantención al día
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-7 max-w-sm" style={{ color: C.muted }}>
                Taller de reparación de automóviles en el centro poniente de Talca.
                Se recibe, se diagnostica y se explica antes de tocar una tuerca.
              </p>
              <div className="relative aspect-[4/5] max-w-sm overflow-hidden">
                <Image
                  src={`${IMG}/box.webp`}
                  alt="Interior del box del taller Mario Salinas con sus muros azules y herramientas"
                  fill
                  sizes="(max-width: 768px) 100vw, 38vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.18em] mt-2`} style={{ color: C.muted }}>
                Adentro del taller, 5 Norte
              </p>
            </div>
          </Reveal>
          <div>
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 70}>
                <div className="flex gap-4 md:gap-5 py-6 border-b border-dashed" style={{ borderColor: 'rgba(22,28,38,0.3)' }}>
                  <div className="shrink-0 pt-0.5">
                    <span className="w-[30px] h-[30px] flex items-center justify-center border-2" style={{ borderColor: C.ink, color: C.amberDeep }}>
                      <CheckMark />
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1.5">
                      <span className={`${mono.className} text-[11px] tracking-[0.16em]`} style={{ color: C.muted }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className={`${display.className} uppercase text-xl md:text-2xl leading-tight`}>{s.name}</h3>
                    </div>
                    <p className="text-sm leading-relaxed max-w-lg" style={{ color: C.muted }}>{s.desc}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.blue }}>{s.datum}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={SERVICIOS.length * 70}>
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href={CALL_LINK}
                  className={`${display.className} uppercase tracking-[0.04em] text-sm px-6 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.blueDeep, color: '#FFFFFF' }}
                >
                  Consultar al taller
                </a>
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                  {BIZ.phoneDisplay}
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas: notas pegadas en la pizarra ── */}
      <section id="resenas" className="relative overflow-hidden" style={{ backgroundColor: C.blueDeep }}>
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 47px, rgba(255,255,255,0.9) 47px, rgba(255,255,255,0.9) 48px), repeating-linear-gradient(90deg, transparent, transparent 47px, rgba(255,255,255,0.9) 47px, rgba(255,255,255,0.9) 48px)`,
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.amber }}>
                  Reseñas reales de Google
                </p>
                <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98]`} style={{ color: '#FFFFFF' }}>
                  Lo que dicen los<br />que ya pasaron por acá
                </h2>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-end gap-3 tap-44 group">
                <span className={`${display.className} text-[64px] md:text-[84px] leading-[0.85]`} style={{ color: C.amber }}>{BIZ.rating}</span>
                <span className="pb-1.5">
                  <Stars value={4.8} color={C.amber} className="w-4 h-4" />
                  <span className={`${mono.className} block text-[11px] uppercase tracking-[0.14em] mt-1.5 underline-offset-4 group-hover:underline`} style={{ color: C.blueMuted }}>
                    {BIZ.reviews} reseñas · Maps
                  </span>
                </span>
              </a>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.name} delay={i * 60}>
                <figure
                  className="relative h-full p-5 pt-7"
                  style={{
                    backgroundColor: C.chalk,
                    transform: `rotate(${i % 2 === 0 ? '-' : ''}0.7deg)`,
                    boxShadow: '0 10px 24px rgba(0,0,0,0.28)',
                  }}
                >
                  <span
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-4"
                    style={{ backgroundColor: 'rgba(240,165,43,0.85)', transform: 'translateX(-50%) translateY(-50%) rotate(-3deg)' }}
                    aria-hidden="true"
                  />
                  <Stars value={5} color={C.amberDeep} className="w-3.5 h-3.5" />
                  <blockquote className="text-sm leading-relaxed mt-3 mb-4" style={{ color: C.ink }}>
                    “{r.quote}”
                  </blockquote>
                  <figcaption>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.14em] mt-0.5`} style={{ color: C.muted }}>{r.meta}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El taller en fotos reales ── */}
      <section id="taller" className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3 flex items-center gap-2`} style={{ color: C.amberDeep }}>
                <span className="inline-block w-2 h-2" style={{ backgroundColor: C.amberDeep }} aria-hidden="true" />
                Fotos reales del taller
              </p>
              <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.4rem)] leading-[0.98]`}>
                El taller, sin maquillaje
              </h2>
            </div>
            <p className="text-sm max-w-xs leading-relaxed" style={{ color: C.muted }}>
              Las fotos de su propia ficha de Google: la fachada en 5 Norte,
              el box azul y los autos que entran y salen cada día.
            </p>
          </div>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {[
            { src: 'fachada.webp', alt: 'Fachada del taller Automotriz Mario Salinas en 5 Norte, Talca', cap: 'La fachada en 5 Norte', tall: true },
            { src: 'suspension.webp', alt: 'Trabajo de suspensión y tren delantero sobre un auto en el taller', cap: 'Suspensión en revisión', tall: false },
            { src: 'auto-listo.webp', alt: 'Auto atendido en el taller Mario Salinas, listo para entregar', cap: 'Listo para entregar', tall: true },
          ].map((p, i) => (
            <Reveal key={p.src} delay={i * 80} className={p.tall ? '' : 'md:pt-10'}>
              <figure>
                <div className={`relative overflow-hidden ${p.tall ? 'aspect-[3/4]' : 'aspect-[3/4] md:aspect-[4/5]'}`}>
                  <Image
                    src={`${IMG}/${p.src}`}
                    alt={p.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-2`} style={{ color: C.muted }}>
                  {p.cap}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="contacto" style={{ backgroundColor: C.card }} className="border-y" >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-[1fr_1.15fr] gap-10">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3 flex items-center gap-2`} style={{ color: C.amberDeep }}>
              <span className="inline-block w-2 h-2" style={{ backgroundColor: C.amberDeep }} aria-hidden="true" />
              Cómo llegar
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2rem,5vw,3.2rem)] leading-[0.98] mb-6`}>
              5 Norte 1481,<br />Talca
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Dirección</dt>
                <dd className="font-medium">{BIZ.address}, {BIZ.city}, {BIZ.region}</dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Teléfono</dt>
                <dd>
                  <a href={CALL_LINK} className="font-semibold underline underline-offset-4 tap-44" style={{ color: C.blue }}>
                    {BIZ.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex gap-3">
                <dt className={`${mono.className} shrink-0 w-[92px] text-[11px] uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.muted }}>Horario</dt>
                <dd className="space-y-1">
                  {HORARIO.map((h) => (
                    <p key={h.d} className="flex flex-wrap gap-x-3">
                      <span className="font-medium">{h.d}</span>
                      <span className={`${mono.className} text-xs pt-px`} style={{ color: C.muted }}>{h.h}</span>
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={CALL_LINK}
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
                style={{ backgroundColor: C.amber, color: C.ink }}
              >
                Llamar ahora
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} uppercase tracking-[0.04em] text-sm md:text-base px-7 py-3 transition-all hover:-translate-y-0.5 active:scale-95 tap-44`}
                style={{ color: C.ink, boxShadow: `inset 0 0 0 2px ${C.ink}` }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[320px] md:min-h-[420px]">
              <LazyMap src={MAPS_EMBED} title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        <Image
          src={`${IMG}/suspension.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.13]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.amber }}>
              Lun–Vie · 9:00 a 19:30
            </p>
            <h2 className={`${display.className} uppercase text-[clamp(2.2rem,6.5vw,4.2rem)] leading-[0.98] mb-6`} style={{ color: '#FFFFFF' }}>
              ¿Suena raro el auto?<br />
              <span style={{ color: C.amber }}>Que lo vea un maestro</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Llama al taller, cuenta qué le pasa a tu auto y coordina la visita.
              Atención directa, sin intermediarios.
            </p>
            <a
              href={CALL_LINK}
              className={`${display.className} uppercase tracking-[0.04em] inline-block text-sm md:text-base px-8 py-4 transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44`}
              style={{ backgroundColor: C.amber, color: C.ink }}
            >
              {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.blueDeep, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p className={`${display.className} uppercase text-xl mb-1 flex items-center gap-2.5`}>
              <Wrench className="w-4 h-4" color={C.amber} />
              {BIZ.name}
            </p>
            <address className="not-italic text-xs leading-relaxed" style={{ color: C.blueMuted }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs" style={{ color: C.blueMuted }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white focus-visible:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white focus-visible:text-white transition-colors tap-44">
              Google Maps
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-4 text-[11px] leading-snug" style={{ color: C.blueMuted }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amber }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Nombre, dirección, teléfono, horarios, fotos y
            reseñas son datos públicos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.amber }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.amber} fg={C.ink} />
    </div>
  )
}
