import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, PHOTO } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700' }],
})

const C = {
  noche: '#0E1B2E',
  orange: '#F26B1D',
  humo: '#E9ECF0',
  ink: '#0B1220',
  azul: '#1F3A5F',
  muted: 'rgba(11,18,32,0.66)',
  line: 'rgba(11,18,32,0.16)',
  lineLight: 'rgba(233,236,240,0.22)',
  humoDim: 'rgba(233,236,240,0.78)',
}

const GRID = {
  backgroundImage:
    'linear-gradient(rgba(233,236,240,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(233,236,240,0.07) 1px, transparent 1px)',
  backgroundSize: '32px 32px',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'mym-taller-mecanico-talca',
  title: 'MyM Taller mecánico y mecánica a domicilio — Talca',
  description: 'Taller mecánico y mecánica automotriz a domicilio en Talca. Consulta por WhatsApp o coordina tu visita.',
  image: PHOTO,
})

function Tuerca({ className = 'w-8 h-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
      <path d="M16 3l11 6.5v13L16 29 5 22.5v-13L16 3Z" strokeLinejoin="round" />
      <circle cx="16" cy="16" r="5.5" />
    </svg>
  )
}

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: light ? C.orange : '#A34A10' }}>
      {children}
    </p>
  )
}

const MODOS = [
  {
    num: '01',
    tag: 'En el taller',
    name: 'Mecánica en taller',
    desc: 'Trae tu auto al taller en Talca: diagnóstico y trabajo de mecánica con las herramientas a mano. Coordinas la visita por WhatsApp.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
        <path d="M6 32V14l10-6 10 6v18" strokeLinejoin="round" />
        <path d="M2 32h36" strokeLinecap="round" />
        <path d="M13 32v-9h14v9" />
        <path d="M20 23v9" opacity="0.6" />
      </svg>
    ),
  },
  {
    num: '02',
    tag: 'En tu casa',
    name: 'Mecánica automotriz a domicilio',
    desc: '¿No puedes mover el auto? El mecánico llega hasta donde estés dentro de Talca y revisa el vehículo ahí mismo.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke={C.orange} strokeWidth="2" aria-hidden="true">
        <path d="M4 27h32M8 27v-8h10l4-6h8l6 6v8" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="13" cy="30" r="3.5" />
        <circle cx="29" cy="30" r="3.5" />
      </svg>
    ),
  },
]

export default function MyMPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.humo, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero con foto a sangre ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.noche }}>
          <Image
            src={PHOTO}
            alt={BIZ.photoAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(14,27,46,0.82) 0%, rgba(14,27,46,0.55) 40%, rgba(14,27,46,0.94) 100%)',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0" style={GRID} aria-hidden="true" />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-24 pb-12 md:pb-16">
            <Reveal>
              <Label light>Taller mecánico · A domicilio · Talca</Label>
              <h1
                className={`${display.className} uppercase font-semibold leading-[0.98] tracking-[-0.01em] text-[clamp(2.8rem,10vw,5.8rem)] mt-5 mb-6`}
                style={{ color: C.humo }}
              >
                Tu mecánico
                <br />
                <span style={{ color: C.orange }}>llega a ti</span>
                <span className="block text-[0.42em] tracking-normal font-medium normal-case mt-4" style={{ color: C.humoDim }}>
                  o te esperamos en el taller
                </span>
              </h1>
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.orange, color: '#0B1220' }}
                >
                  Consultar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(233,236,240,0.5)', color: C.humo }}
                >
                  Ver ubicación
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5 border-t pt-5" style={{ borderColor: C.lineLight }}>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(233,236,240,0.7)' }}>Servicios</p>
                  <p className="text-sm font-bold" style={{ color: C.humo }}>Taller y domicilio</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(233,236,240,0.7)' }}>Ciudad</p>
                  <p className="text-sm font-bold" style={{ color: C.humo }}>Talca · Maule</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(233,236,240,0.7)' }}>Horario</p>
                  <p className="text-sm font-bold" style={{ color: C.humo }}>Lun–Vie desde 9:00</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5" style={{ color: 'rgba(233,236,240,0.7)' }}>Contacto</p>
                  <p className="text-sm font-bold" style={{ color: C.humo }}>WhatsApp directo</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 01 Dos modos ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.humo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <Label><span style={{ color: C.ink }}>N°01</span> — Dos modos de atención</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  según la ficha del negocio
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} uppercase font-semibold text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.ink }}>
                En el taller
                <br />
                <span style={{ color: C.azul }}>o donde estés</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5">
              {MODOS.map((m, i) => (
                <Reveal key={m.name} delay={i * 90} className="h-full">
                  <article className="relative h-full border p-7 md:p-9 overflow-hidden" style={{ borderColor: C.ink, backgroundColor: i ? C.noche : '#fff' }}>
                    <div
                      className="absolute -right-10 -top-10 w-40 h-40 opacity-20"
                      aria-hidden="true"
                    >
                      <Tuerca className="w-full h-full" />
                    </div>
                    <div className="flex items-start justify-between gap-4 mb-7">
                      {m.icon}
                      <span className={`${display.className} text-xl font-medium`} style={{ color: i ? 'rgba(233,236,240,0.55)' : C.muted }}>
                        {m.num} / {m.tag}
                      </span>
                    </div>
                    <h3 className={`${display.className} uppercase font-semibold text-2xl md:text-3xl leading-tight mb-3`} style={{ color: i ? C.humo : C.ink }}>
                      {m.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: i ? C.humoDim : C.muted }}>
                      {m.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 Trabajo real ── */}
        <section id="trabajo" className="scroll-mt-20 border-t" style={{ backgroundColor: '#fff', borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <Label><span style={{ color: C.ink }}>N°02</span> — Trabajo real</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  publicado por el taller
                </p>
              </div>
            </Reveal>
            <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
              <Reveal>
                <figure className="border" style={{ borderColor: C.ink, backgroundColor: C.humo }}>
                  <div className="relative aspect-[4/3] overflow-hidden border-b" style={{ borderColor: C.line }}>
                    <Image
                      src={PHOTO}
                      alt={BIZ.photoAlt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-5 py-3 text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: C.muted }}>
                    Fig. 01 — Trabajo publicado por MyM
                  </figcaption>
                </figure>
              </Reveal>
              <Reveal delay={120}>
                <h2 className={`${display.className} uppercase font-semibold text-4xl md:text-5xl leading-[0.95] mb-6`} style={{ color: C.ink }}>
                  Mecánica
                  <br />
                  <span style={{ color: C.azul }}>que se muestra</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-5 max-w-md" style={{ color: C.muted }}>
                  Este servicio a un Fiat Palio fue publicado por el propio
                  taller en su página de Facebook: el trabajo se muestra tal
                  cual se hace, sin retoques.
                </p>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: C.muted }}>
                  Consulta por WhatsApp con la falla o el ruido que notas y
                  coordina si conviene taller o domicilio.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-xs px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.orange, color: '#0B1220' }}
                >
                  Contar qué le pasa a mi auto →
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 03 Horario y ubicación ── */}
        <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.humo }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <Label><span style={{ color: C.ink }}>N°03</span> — Horario y ubicación</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  Talca · Maule
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#fff' }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#A34A10' }}>Dirección</p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: '#A34A10', textDecorationColor: 'rgba(163,74,16,0.35)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: '#A34A10' }}>Horario</p>
                    <ul className="space-y-2.5">
                      {BIZ.hours.map((h) => (
                        <li key={h.days} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold" style={{ color: C.ink }}>{h.days}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                          <span style={{ color: C.muted }}>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#D5DAE1' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
                    Talca · Región del Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre CTA oscuro ── */}
        <section className="relative overflow-hidden" style={{ backgroundColor: C.noche }}>
          <div className="absolute inset-0" style={GRID} aria-hidden="true" />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} uppercase font-semibold text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.humo }}>
                ¿Tu auto pide
                <br />
                <span style={{ color: C.orange }}>mecánico?</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.orange, color: '#0B1220' }}
              >
                Consultar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
