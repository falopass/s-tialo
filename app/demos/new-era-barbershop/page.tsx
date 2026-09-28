import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, HOURS, WA_LINK, MAPS_EMBED } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})

const C = {
  ink: '#101114',
  crema: '#F3EDE2',
  rojo: '#C8382B',
  azul: '#1F4E8C',
  dorado: '#B99552',
  muted: 'rgba(16,17,20,0.68)',
  line: 'rgba(16,17,20,0.16)',
  lineLight: 'rgba(243,237,226,0.22)',
  cremaDim: 'rgba(243,237,226,0.76)',
}

const POSTE = `repeating-linear-gradient(45deg, ${C.rojo} 0 14px, ${C.crema} 14px 28px, ${C.azul} 28px 42px, ${C.crema} 42px 56px)`

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'new-era-barbershop',
  title: 'New Era Barbershop — Barbería en Talca',
  description: 'Barbería en Catorce Ote. 901, Talca. Abierta todos los días de 9:00 a 20:00. Agenda por WhatsApp.',
})

const STATS = [
  { value: BIZ.rating, label: 'rating en Google' },
  { value: BIZ.reviews, label: 'reseñas' },
  { value: '9:00–20:00', label: 'todos los días' },
]

const SERVICIOS = [
  { num: '01', name: 'Corte', desc: 'El corte que pides, terminado prolijo: máquina, tijera y contornos limpios para salir ordenado.' },
  { num: '02', name: 'Barba', desc: 'Perfilado y arreglo de barba para mantener la línea que te acomoda, con terminación fina.' },
  { num: '03', name: 'Corte + barba', desc: 'El servicio completo en una sola visita: sales con el corte y la barba en su punto.' },
]

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-bold`} style={{ color: light ? C.dorado : '#7A5C22' }}>
      {children}
    </p>
  )
}

function PosteBarber({ className = '' }: { className?: string }) {
  return (
    <div className={`relative ${className}`} aria-hidden="true">
      {/* poste de barbería animado */}
      <div className="absolute inset-x-8 top-0 bottom-0 rounded-full border-4 overflow-hidden" style={{ borderColor: C.dorado }}>
        <div className="poste-franjas absolute inset-0" style={{ backgroundImage: POSTE, backgroundSize: '100% 200%' }} />
      </div>
      <div className="absolute inset-x-4 top-0 h-4 rounded-t-full" style={{ backgroundColor: C.dorado }} />
      <div className="absolute inset-x-4 bottom-0 h-4 rounded-b-full" style={{ backgroundColor: C.dorado }} />
      <style>{`@keyframes poste{from{background-position-y:0}to{background-position-y:112px}}@media (prefers-reduced-motion:no-preference){.poste-franjas{animation:poste 3.2s linear infinite}}`}</style>
    </div>
  )
}

function Navaja() {
  return (
    <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.dorado} strokeWidth="1.8" aria-hidden="true">
      <path d="M6 30l14-14 3 3-14 14-3-3Z" strokeLinejoin="round" />
      <path d="M20 16l6-9c4-2 8 1 8 5l-11 7" strokeLinejoin="round" />
    </svg>
  )
}

export default function NewEraPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero oscuro con poste de barbería ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-14 md:pb-20 grid md:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <span className="w-1.5 h-12 shrink-0" style={{ backgroundImage: POSTE }} aria-hidden="true" />
                <Label light>Barbershop · Talca</Label>
              </div>
              <h1
                className={`${display.className} uppercase font-extrabold leading-[0.88] tracking-[-0.02em] text-[clamp(3.8rem,16vw,9rem)]`}
                style={{ color: C.crema }}
              >
                New<br />
                <span style={{ color: C.rojo }}>Era</span>
              </h1>
              <div className="mt-5 flex items-center gap-3 flex-wrap">
                <Stars value={4.4} color={C.dorado} />
                <span className="text-sm font-bold" style={{ color: C.crema }}>{BIZ.rating}</span>
                <span className="text-sm" style={{ color: C.cremaDim }}>· {BIZ.reviews} reseñas en Google</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.crema, color: C.ink }}
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href={BIZ.maps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.06em] text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(243,237,226,0.5)', color: C.crema }}
                >
                  Cómo llegar
                </a>
              </div>
              <p className="mt-6 text-xs md:text-sm font-semibold uppercase tracking-[0.14em]" style={{ color: C.cremaDim }}>
                Abierto todos los días 9:00–20:00
              </p>
            </Reveal>
            <Reveal delay={140} className="hidden md:block">
              <div className="relative border p-8 lg:p-10" style={{ borderColor: C.lineLight, backgroundColor: 'rgba(243,237,226,0.03)' }}>
                <PosteBarber className="mx-auto h-72 lg:h-96 max-w-[220px]" />
                <div className="flex items-center justify-between mt-6 pt-4 border-t" style={{ borderColor: C.lineLight }}>
                  <span className={`${display.className} uppercase text-sm font-bold tracking-[0.14em]`} style={{ color: C.crema }}>Barbería</span>
                  <Navaja />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="h-1.5" style={{ backgroundImage: POSTE }} aria-hidden="true" />
        </section>

        {/* ── 01 Ficha ── */}
        <section id="ficha" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-center gap-4 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <span className="w-1.5 h-8 shrink-0" style={{ backgroundImage: POSTE }} aria-hidden="true" />
                <Label><span style={{ color: C.ink }}>N°01</span> — Ficha</Label>
              </div>
            </Reveal>
            <div className="grid sm:grid-cols-3 border" style={{ borderColor: C.ink }}>
              {STATS.map((s, i) => (
                <Reveal key={s.label} delay={i * 80} className="h-full">
                  <div className={`h-full px-6 py-8 md:py-10 ${i ? 'border-t sm:border-t-0 sm:border-l' : ''}`} style={{ borderColor: C.line }}>
                    <p className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-none mb-3`} style={{ color: i === 0 ? C.rojo : C.ink }}>
                      {s.value}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.2em] font-bold" style={{ color: C.muted }}>
                      {s.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 02 Cortes y barba ── */}
        <section id="servicios" className="scroll-mt-20 border-t" style={{ backgroundColor: '#EDE5D6', borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-center gap-4 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <span className="w-1.5 h-8 shrink-0" style={{ backgroundImage: POSTE }} aria-hidden="true" />
                <Label><span style={{ color: C.ink }}>N°02</span> — Cortes y barba</Label>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-6xl leading-[0.95] tracking-[-0.02em] mb-4`} style={{ color: C.ink }}>
                Lo de barbería,
                <br />
                <span style={{ color: C.azul }}>bien hecho</span>
              </h2>
              <p className="text-sm md:text-base font-semibold mb-10 md:mb-14" style={{ color: '#7A5C22' }}>
                Servicios de muestra: confirma el detalle por WhatsApp.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {SERVICIOS.map((s, i) => (
                <Reveal key={s.name} delay={i * 80} className="h-full">
                  <article className="relative h-full border p-6 md:p-7 pl-8 flex flex-col overflow-hidden" style={{ borderColor: C.ink, backgroundColor: C.crema }}>
                    <span className="absolute left-0 top-0 bottom-0 w-1.5" style={{ backgroundImage: POSTE }} aria-hidden="true" />
                    <span className={`${display.className} font-extrabold text-lg mb-8`} style={{ color: '#A8281E' }}>{s.num}</span>
                    <h3 className={`${display.className} uppercase font-extrabold text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.ink }}>
                      {s.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {s.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 Horario y ubicación ── */}
        <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <div className="flex items-center gap-4 border-t-2 pt-4 mb-10 md:mb-12" style={{ borderColor: C.ink }}>
                <span className="w-1.5 h-8 shrink-0" style={{ backgroundImage: POSTE }} aria-hidden="true" />
                <Label><span style={{ color: C.ink }}>N°03</span> — Horario y ubicación</Label>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.ink }}>
                  <div className="px-6 md:px-8 py-6 border-b" style={{ borderColor: C.line }}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#7A5C22' }}>Dirección</p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-3" style={{ color: C.ink }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                    </address>
                    <a
                      href={BIZ.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: '#7A5C22', textDecorationColor: 'rgba(122,92,34,0.35)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-6 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: '#7A5C22' }}>Horario</p>
                    <ul className="space-y-2">
                      {HOURS.map(([d, t]) => (
                        <li key={d} className="flex items-baseline justify-between gap-4 text-sm md:text-base">
                          <span className="font-bold" style={{ color: C.ink }}>{d}</span>
                          <span className="flex-1 border-b border-dotted translate-y-[-3px]" style={{ borderColor: C.line }} aria-hidden="true" />
                          <span style={{ color: C.muted }}>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#E4DCCB' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, Talca`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
                    Catorce Ote. 901 · Talca · Maule
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre CTA rojo ── */}
        <section style={{ backgroundColor: C.rojo }}>
          <div className="h-1.5" style={{ backgroundImage: POSTE }} aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} uppercase font-extrabold text-4xl md:text-5xl leading-[0.95] tracking-[-0.02em]`} style={{ color: C.crema }}>
                La silla
                <br />
                te espera
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.06em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.ink, color: C.crema }}
              >
                Agendar por WhatsApp
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
