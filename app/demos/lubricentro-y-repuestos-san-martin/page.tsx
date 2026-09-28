import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
})

const C = {
  grafito: '#15181C',
  yellow: '#F2B705',
  bone: '#F6F4EE',
  steel: '#3B434D',
  ink: '#111418',
  muted: 'rgba(17,20,24,0.66)',
  line: 'rgba(17,20,24,0.16)',
  lineLight: 'rgba(246,244,238,0.22)',
  boneDim: 'rgba(246,244,238,0.78)',
}

const CINTA = `repeating-linear-gradient(45deg, ${C.yellow} 0 12px, ${C.grafito} 12px 24px)`
const CINTA_FINA = `repeating-linear-gradient(45deg, ${C.yellow} 0 6px, ${C.grafito} 6px 12px)`

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'lubricentro-y-repuestos-san-martin',
  title: 'Lubricentro y repuestos San Martín — Molina',
  description: 'Lubricentro y repuestos San Martín en Teniente Ponce 1320, Molina. Consulta por cambio de aceite o repuestos por WhatsApp.',
})

const SERVICIOS = [
  {
    num: '01',
    name: 'Cambio de aceite y filtros',
    desc: 'El servicio de siempre del lubricentro: aceite y filtros para mantener el motor al día, con la calidad que pide tu auto.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke={C.yellow} strokeWidth="2" aria-hidden="true">
        <path d="M16 4C16 4 8 14 8 20a8 8 0 1 0 16 0c0-6-8-16-8-16Z" />
        <path d="M12.5 20.5a3.5 3.5 0 0 0 3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    name: 'Repuestos para tu auto',
    desc: 'Piezas y repuestos en el mismo local: consulta por la pieza que buscas y confirma disponibilidad antes de venir.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke={C.yellow} strokeWidth="2" aria-hidden="true">
        <circle cx="16" cy="16" r="5" />
        <path d="M16 4v5M16 23v5M4 16h5M23 16h5M7.5 7.5l3.5 3.5M21 21l3.5 3.5M24.5 7.5 21 11M11 21l-3.5 3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    name: 'Revisión rápida',
    desc: 'Una mirada rápida a niveles y puntos de desgaste mientras esperas: sales sabiendo cómo está tu auto.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke={C.yellow} strokeWidth="2" aria-hidden="true">
        <path d="M6 17h4l3-8 5 14 3-6h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const PASOS = [
  { num: '01', name: 'Escríbenos', desc: 'Manda un WhatsApp con lo que necesita tu auto: aceite, filtro o una pieza específica.' },
  { num: '02', name: 'Trae el auto', desc: 'Te confirmamos el servicio y la disponibilidad; vienes al local en Teniente Ponce.' },
  { num: '03', name: 'Listo', desc: 'Aceite cambiado o repuesto en mano. Te vas con el auto al día y sin vueltas.' },
]

function Label({ children, light = false, className = '' }: { children: React.ReactNode; light?: boolean; className?: string }) {
  return (
    <p
      className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-bold ${className}`}
      style={{ color: light ? C.yellow : '#7A5A02' }}
    >
      {children}
    </p>
  )
}

function OilPanel() {
  return (
    <svg viewBox="0 0 360 360" className="w-full h-full" fill="none" aria-hidden="true">
      {/* anillos concéntricos */}
      <circle cx="180" cy="180" r="160" stroke={C.steel} strokeWidth="1.5" />
      <circle cx="180" cy="180" r="126" stroke={C.steel} strokeWidth="1.5" strokeDasharray="4 10" />
      <circle cx="180" cy="180" r="92" stroke={C.steel} strokeWidth="1.5" />
      {/* medidor */}
      <path d="M104 230a86 86 0 0 1 152 0" stroke={C.steel} strokeWidth="10" strokeLinecap="round" />
      <path d="M104 230a86 86 0 0 1 96-86" stroke={C.yellow} strokeWidth="10" strokeLinecap="round" />
      <line x1="180" y1="230" x2="140" y2="168" stroke={C.bone} strokeWidth="4" strokeLinecap="round" />
      <circle cx="180" cy="230" r="8" fill={C.yellow} />
      {/* gota */}
      <path d="M180 66C180 66 146 106 146 130a34 34 0 1 0 68 0c0-24-34-64-34-64Z" fill={C.yellow} />
      <path d="M162 132a16 16 0 0 0 14 14" stroke={C.grafito} strokeWidth="5" strokeLinecap="round" />
      {/* esquinas técnicas */}
      <path d="M16 36V16h20M344 36V16h-20M16 324v20h20M344 324v20h-20" stroke={C.steel} strokeWidth="2" />
      <text x="180" y="296" textAnchor="middle" fill={C.steel} fontSize="12" letterSpacing="4" fontFamily="monospace">NIVEL · OK</text>
    </svg>
  )
}

export default function SanMartinPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.bone, color: C.ink }}>
      <Chrome fontClass={display.className}>
      {/* ── Hero oscuro ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.grafito }}>
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{ backgroundImage: 'linear-gradient(rgba(246,244,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(246,244,238,0.5) 1px, transparent 1px)', backgroundSize: '48px 48px' }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="inline-block w-10 h-3" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
              <Label light>Lubricentro y repuestos · Molina</Label>
            </div>
            <h1
              className={`${display.className} uppercase font-bold leading-[0.9] tracking-[-0.01em] text-[clamp(3.4rem,14vw,7.5rem)]`}
              style={{ color: C.bone }}
            >
              San<br />
              <span style={{ color: C.yellow }}>Martín</span>
            </h1>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.boneDim }}>
              Cambio de aceite, filtros y repuestos en {BIZ.address}. Consulta directo por WhatsApp.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 border" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(246,244,238,0.06)' }}>
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.yellow }} aria-hidden="true" />
              <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.1em]" style={{ color: C.bone }}>
                Lun–Vie 9:00–19:00 · Sáb 9:00–13:00
              </span>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.yellow, color: C.ink }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(246,244,238,0.5)', color: C.bone }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={140} className="hidden md:block">
            <div className="border" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(246,244,238,0.03)' }}>
              <div className="h-2.5" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
              <div className="p-6 lg:p-10">
                <OilPanel />
              </div>
              <div className="flex items-center justify-between px-5 py-3 border-t" style={{ borderColor: C.lineLight }}>
                <span className={`${display.className} uppercase text-sm font-semibold tracking-[0.14em]`} style={{ color: C.bone }}>Panel de servicio</span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold" style={{ color: C.boneDim }}>Aceite · Filtros · Repuestos</span>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="h-3" style={{ backgroundImage: CINTA }} aria-hidden="true" />
      </section>

      {/* ── 01 Qué hacemos ── */}
      <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.bone }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
              <Label><span style={{ color: C.ink }}>N°01</span> — Qué hacemos</Label>
              <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                lista de muestra
              </p>
            </div>
          </Reveal>
          <Reveal>
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`} style={{ color: C.ink }}>
              Tu auto atendido,
              <br />
              <span style={{ color: C.steel }}>sin enredos</span>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICIOS.map((s, i) => (
              <Reveal key={s.name} delay={i * 80} className="h-full">
                <article className="h-full border flex flex-col" style={{ borderColor: C.ink, backgroundColor: C.bone }}>
                  <div className="h-2" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
                  <div className="p-6 md:p-7 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-6">
                      <span className="w-14 h-14 flex items-center justify-center border" style={{ borderColor: C.ink, backgroundColor: C.grafito }}>
                        {s.icon}
                      </span>
                      <span className={`${display.className} text-xl font-semibold`} style={{ color: C.steel }}>{s.num}</span>
                    </div>
                    <h3 className={`${display.className} uppercase font-bold text-2xl leading-tight mb-3`} style={{ color: C.ink }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 02 Cómo funciona ── */}
      <section id="pasos" className="scroll-mt-20" style={{ backgroundColor: C.steel }}>
        <div className="h-2.5" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.bone }}>
              <Label light><span style={{ color: C.bone }}>N°02</span> — Cómo funciona</Label>
              <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.boneDim }}>
                3 pasos
              </p>
            </div>
          </Reveal>
          <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-14 items-start">
            <Reveal>
              <h2 className={`${display.className} uppercase font-bold text-4xl md:text-6xl leading-[0.95] mb-5`} style={{ color: C.bone }}>
                Simple como
                <br />
                <span style={{ color: C.yellow }}>tiene que ser</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm" style={{ color: C.boneDim }}>
                Sin formularios ni esperas: la coordinación es por WhatsApp y
                el trabajo se hace en el local.
              </p>
            </Reveal>
            <ol className="space-y-0">
              {PASOS.map((p, i) => (
                <Reveal key={p.num} delay={i * 90}>
                  <li className="flex gap-5 md:gap-7 items-start border-t py-6 first:border-t-0 first:pt-0" style={{ borderColor: C.lineLight }}>
                    <span className={`${display.className} uppercase font-bold text-4xl md:text-5xl leading-none w-16 shrink-0`} style={{ color: C.yellow }}>
                      {p.num}
                    </span>
                    <div>
                      <h3 className={`${display.className} uppercase font-bold text-xl md:text-2xl mb-1.5`} style={{ color: C.bone }}>
                        {p.name}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed" style={{ color: C.boneDim }}>
                        {p.desc}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── 03 Horario y ubicación ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.bone }}>
        <div className="h-2.5" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
              <Label><span style={{ color: C.ink }}>N°03</span> — Horario y ubicación</Label>
              <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                Teniente Ponce · Molina
              </p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
            <Reveal>
              <div className="border h-full flex flex-col" style={{ borderColor: C.ink }}>
                <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#7A5A02' }}>Dirección</p>
                  <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                    <strong className="font-bold">{BIZ.address}</strong>
                    <br />
                    <span style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}, Chile</span>
                  </address>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                    style={{ color: '#7A5A02', textDecorationColor: 'rgba(122,90,2,0.35)' }}
                  >
                    Cómo llegar →
                  </a>
                </div>
                <div className="px-6 md:px-8 py-6 flex-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: '#7A5A02' }}>Horario</p>
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
                <div className="h-2" style={{ backgroundImage: CINTA_FINA }} aria-hidden="true" />
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#E8E5DB' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full flex-1 min-h-[320px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
                  {BIZ.address} · {BIZ.city} · {BIZ.region}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre: franja amarilla ── */}
      <section style={{ backgroundColor: C.yellow }}>
        <div className="h-2.5" style={{ backgroundImage: `repeating-linear-gradient(45deg, ${C.grafito} 0 6px, transparent 6px 12px)` }} aria-hidden="true" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <Reveal>
            <h2 className={`${display.className} uppercase font-bold text-4xl md:text-5xl leading-[0.95]`} style={{ color: C.grafito }}>
              ¿Le toca aceite
              <br />
              a tu auto?
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.grafito, color: C.bone }}
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
