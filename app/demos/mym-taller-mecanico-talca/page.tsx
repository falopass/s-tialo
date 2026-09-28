import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { Chrome, C } from './chrome'
import { BIZ, FOTOS, MAPS_EMBED, MAPS_URL, PROMESAS, SERVICIOS, WA_LINK } from './content'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' }],
})

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

const CARBONO = {
  backgroundImage:
    'linear-gradient(rgba(239,237,230,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(239,237,230,0.045) 1px, transparent 1px)',
  backgroundSize: '34px 34px',
}

function Etiqueta({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.rojoTxt }}>
      {children}
    </p>
  )
}

// Íconos de testigo del tablero (glifos, no fotos).
function Icono({ tipo, className = 'w-8 h-8' }: { tipo: string; className?: string }) {
  const p = {
    viewBox: '0 0 32 32',
    className,
    fill: 'none',
    stroke: C.rojo,
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (tipo) {
    case 'scan':
      return (
        <svg {...p}>
          <path d="M6 22a11 11 0 1 1 20 0" />
          <path d="M16 22l5-7" />
          <circle cx="16" cy="22" r="2" fill={C.rojo} stroke="none" />
        </svg>
      )
    case 'wrench':
      return (
        <svg {...p}>
          <path d="M20 6a6 6 0 0 0-8 7L6 19a2.8 2.8 0 0 0 4 4l6-6a6 6 0 0 0 7-8l-4 4-4-1-1-4 4-2Z" />
        </svg>
      )
    case 'disc':
      return (
        <svg {...p}>
          <circle cx="16" cy="16" r="11" />
          <circle cx="16" cy="16" r="4" />
          <circle cx="10" cy="11" r="1.2" fill={C.rojo} stroke="none" />
          <circle cx="22" cy="11" r="1.2" fill={C.rojo} stroke="none" />
          <circle cx="16" cy="23" r="1.2" fill={C.rojo} stroke="none" />
        </svg>
      )
    case 'battery':
      return (
        <svg {...p}>
          <rect x="4" y="10" width="24" height="14" rx="2" />
          <path d="M9 10V7h5v3M18 10V7h5v3" />
          <path d="M9 17h4M19 17h4" />
        </svg>
      )
    case 'fan':
      return (
        <svg {...p}>
          <circle cx="16" cy="16" r="3" />
          <path d="M16 13c0-4 2-8 6-8-1 4-2 8-6 8ZM19 18c4 0 8 2 8 6-4-1-8-2-8-6ZM13 18c-4 0-8 2-8 6 4-1 8-2 8-6Z" />
        </svg>
      )
    default:
      return (
        <svg {...p}>
          <path d="M16 6v20M6 16h20" />
        </svg>
      )
  }
}

export const metadata: Metadata = demoMetadata({
  slug: 'mym-taller-mecanico-talca',
  title: 'MyM Mecánica — taller mecánico y mecánica a domicilio en Talca',
  description:
    'Taller mecánico en Talca que también va a tu casa, trabajo o donde estés. Diagnóstico, mantenciones, frenos, eléctrico y refrigeración. Agenda por WhatsApp.',
  image: '/demos/mym-taller-mecanico-talca/rio.webp',
})

export default function MyMPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.fondo, color: C.tinta }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: el tablero encendido ── */}
        <section id="inicio" className="relative pt-28 md:pt-36 pb-14 md:pb-20 overflow-hidden">
          <div className="absolute inset-0" style={CARBONO} aria-hidden="true" />
          <div
            className="absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full opacity-25 blur-[120px]"
            style={{ backgroundColor: C.rojo }}
            aria-hidden="true"
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-[1.15fr_auto] gap-10 items-center">
              <Reveal>
                <Etiqueta>Taller mecánico · Talca y alrededores</Etiqueta>
                <h1 className={`${display.className} uppercase font-extrabold leading-[0.9] text-[clamp(3rem,11vw,6.4rem)] mb-6`}>
                  Si el auto no llega
                  <br />
                  al taller,
                  <br />
                  <span style={{ color: C.rojo }}>el taller llega</span>
                  <br />
                  <span style={{ color: C.rojo }}>al auto</span>
                </h1>
                <div className="flex items-center gap-3 mb-8">
                  <Stars value={BIZ.rating} color={C.rojo} className="w-5 h-5" />
                  <p className={`${mono.className} text-xs font-bold`} style={{ color: C.tinta }}>
                    5,0 en Google Maps
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${body.className} font-bold uppercase tracking-[0.04em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                  >
                    Agendar hora por WhatsApp
                  </a>
                  <a
                    href="#servicios"
                    className={`${body.className} font-bold uppercase tracking-[0.04em] text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(239,237,230,0.5)', color: C.tinta }}
                  >
                    Ver servicios
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140} className="hidden md:block">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo recortado del afiche real del taller */}
                <img
                  src="/demos/mym-taller-mecanico-talca/logo.webp"
                  alt="Logo de MyM Mecánica: mecánica a domicilio, Talca y alrededores"
                  className="w-[340px] lg:w-[400px] select-none"
                />
              </Reveal>
            </div>
            <Reveal delay={200}>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t mt-12 pt-6" style={{ borderColor: C.line }}>
                {[
                  ['En taller', BIZ.addressCorto],
                  ['A domicilio', BIZ.cobertura],
                  ['Nota en Google', '5,0 de 5'],
                  ['Agenda', 'Solo por WhatsApp'],
                ].map(([dt, dd]) => (
                  <div key={dt}>
                    <dt className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.rojoTxt }}>
                      {dt}
                    </dt>
                    <dd className="text-sm font-bold leading-snug">{dd}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── Servicios: testigos del tablero ── */}
        <section id="servicios" className="scroll-mt-20 py-14 md:py-20 border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Servicios</Etiqueta>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.9] mb-3`}>
                se enciende un testigo,
                <br />
                <span style={{ color: C.rojo }}>responde el taller</span>
              </h2>
              <p className="text-sm md:text-base max-w-xl mb-10" style={{ color: C.muted }}>
                Lo que revisan, tal como lo publica el propio taller.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.nombre} delay={i * 70} className="h-full">
                  <article
                    className="h-full rounded-lg border p-6 transition-shadow hover:shadow-[0_0_32px_rgba(228,35,47,0.16)]"
                    style={{ borderColor: C.line, backgroundColor: C.fondo }}
                  >
                    <div
                      className="w-14 h-14 rounded-full border-2 flex items-center justify-center mb-5"
                      style={{ borderColor: 'rgba(228,35,47,0.5)', backgroundColor: 'rgba(228,35,47,0.08)' }}
                    >
                      <Icono tipo={s.icono} />
                    </div>
                    <h3 className={`${display.className} uppercase font-bold text-xl md:text-2xl leading-tight mb-2`}>
                      {s.nombre}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {s.detalle}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── A domicilio: el afiche real ── */}
        <section className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-14 items-center">
              <Reveal>
                <figure
                  className="rounded-lg overflow-hidden border max-w-[320px] md:max-w-[360px] mx-auto rotate-[-1.5deg]"
                  style={{ borderColor: C.line, boxShadow: '0 18px 50px rgba(0,0,0,0.55)' }}
                >
                  <div className="relative aspect-square">
                    <Image
                      src="/demos/mym-taller-mecanico-talca/flyer.webp"
                      alt="Afiche publicado por MyM: soluciones mecánicas donde lo necesites, Talca y alrededores"
                      fill
                      sizes="(min-width: 768px) 360px, 80vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} text-[9px] uppercase tracking-[0.16em] px-4 py-2.5 border-t`}
                    style={{ borderColor: C.line, color: C.muted, backgroundColor: C.panel }}
                  >
                    Afiche real · publicado por MyM en Facebook
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <Etiqueta>Mecánica a domicilio</Etiqueta>
                <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[0.92] mb-6`}>
                  vamos a tu casa,
                  <br />
                  <span style={{ color: C.rojo }}>trabajo o donde estés</span>
                </h2>
                <ul className="space-y-3 mb-8">
                  {PROMESAS.map((pr) => (
                    <li key={pr} className="flex items-start gap-3 text-sm md:text-base">
                      <svg viewBox="0 0 16 16" className="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke={C.rojo} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M2.5 8.5l3.5 3.5 7-8" />
                      </svg>
                      <span>{pr}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-sm leading-relaxed max-w-md" style={{ color: C.muted }}>
                  Cobertura en {BIZ.cobertura}. Si el auto sí puede moverse, también
                  atienden en el taller de {BIZ.addressCorto}.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Trabajo real ── */}
        <section id="trabajo" className="scroll-mt-20 py-14 md:py-20 border-t" style={{ borderColor: C.line, backgroundColor: C.panel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Trabajo real</Etiqueta>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.9] mb-10`}>
                el trabajo se muestra
                <br />
                <span style={{ color: C.rojo }}>tal cual se hace</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-5">
              {FOTOS.map((f, i) => (
                <Reveal key={f.src} delay={i * 110}>
                  <figure className="rounded-lg overflow-hidden border" style={{ borderColor: C.line, backgroundColor: C.fondo }}>
                    <div className="relative aspect-[4/5] max-h-[520px]">
                      <Image
                        src={f.src}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 768px) 45vw, 92vw"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption
                      className={`${mono.className} text-[9px] uppercase tracking-[0.16em] px-4 py-2.5 border-t`}
                      style={{ borderColor: C.line, color: C.muted }}
                    >
                      {f.pie} · Facebook
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Horario y taller ── */}
        <section id="contacto" className="scroll-mt-20 py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <Etiqueta>Horario y taller</Etiqueta>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.9] mb-10`}>
                el taller de {BIZ.addressCorto.split(',')[0]}
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <Reveal>
                <div className="h-full rounded-lg border flex flex-col" style={{ borderColor: C.line, backgroundColor: C.panel }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-2`} style={{ color: C.rojoTxt }}>
                      Dirección
                    </p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3 font-bold">
                      {BIZ.address}
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: C.rojoTxt, textDecorationColor: 'rgba(242,90,100,0.4)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-3`} style={{ color: C.rojoTxt }}>
                      Horario
                    </p>
                    <ul className="space-y-2.5">
                      {BIZ.hours.map((h) => (
                        <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold">{h.days}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                          <span className={`${mono.className}`} style={{ color: C.muted }}>
                            {h.time}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="rounded-lg border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.line, backgroundColor: '#26282C' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p
                    className={`${mono.className} px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em]`}
                    style={{ borderColor: C.line, color: C.muted }}
                  >
                    Talca · Región del Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── CTA rojo ── */}
        <section style={{ backgroundColor: C.rojo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[0.9]`} style={{ color: '#fff' }}>
                ¿se encendió un testigo?
                <br />
                agenda tu hora
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.04em] text-sm px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: '#0F1012', color: C.tinta }}
              >
                Escribir a {BIZ.corto}
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
