import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { whatsappLink } from '@/lib/config'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, SOURCES } from './content'
import { Chrome } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' }],
})

const C = {
  crema: '#FFF8EE',
  crema2: '#FFF1DE',
  celeste: '#8FCBE6',
  coral: '#F28C7D',
  amarillo: '#F7D774',
  menta: '#9ED8B5',
  ink: '#2B3A4A',
  muted: 'rgba(43,58,74,0.8)',
  line: 'rgba(43,58,74,0.16)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'gotitas-de-amor',
  title: 'Gotitas de Amor — Sala cuna y jardín infantil en Talca',
  description: 'Sala cuna y jardín infantil en Talca. Datos de contacto pendientes de confirmar con el jardín.',
})

const WA = whatsappLink('contacto')

const NIVELES = [
  {
    num: '01',
    color: C.celeste,
    name: 'Sala cuna',
    desc: 'Un espacio pensado para los más pequeños: cuidado cercano, rutinas tranquilas y juego suave durante el día.',
  },
  {
    num: '02',
    color: C.coral,
    name: 'Jardín infantil',
    desc: 'Para los que ya van creciendo: juego, exploración y actividades que preparan la entrada al colegio con cariño.',
  },
]

const DIA = [
  {
    name: 'Juego y exploración',
    desc: 'Rincones de juego, material concreto y espacio para moverse: el juego es la forma de aprender a esta edad.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.ink} strokeWidth="2" aria-hidden="true">
        <rect x="6" y="14" width="12" height="12" rx="2" />
        <circle cx="28" cy="20" r="6" />
        <path d="M22 30h12l-6 8-6-8Z" strokeLinejoin="round" transform="translate(0,-4)" />
      </svg>
    ),
  },
  {
    name: 'Alimentación y rutinas',
    desc: 'Colaciones, almuerzo y horarios de comida que ordenan el día y enseñan hábitos saludables.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.ink} strokeWidth="2" aria-hidden="true">
        <circle cx="20" cy="21" r="11" />
        <circle cx="20" cy="21" r="5" />
        <path d="M10 4v6M14 4v6M12 4v12" strokeLinecap="round" />
        <path d="M30 4c-3 1-4 5-4 8 0 2 1 3 2 3v8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Descanso',
    desc: 'Un rato de siesta y calma para recargar energías: los pequeños también necesitan su pausa.',
    icon: (
      <svg viewBox="0 0 40 40" className="w-9 h-9" fill="none" stroke={C.ink} strokeWidth="2" aria-hidden="true">
        <path d="M27 24a11 11 0 1 1-13-13 9 9 0 0 0 13 13Z" strokeLinejoin="round" />
        <path d="M28 10l2-2M33 14l2-1" strokeLinecap="round" />
      </svg>
    ),
  },
]

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.22em] font-extrabold`} style={{ color: '#B04A3A' }}>
      {children}
    </p>
  )
}

function Gota({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill={color} aria-hidden="true">
      <path d="M30 4C30 4 10 30 10 50a20 20 0 1 0 40 0C50 30 30 4 30 4Z" />
    </svg>
  )
}

function Wave({ fill, flip = false }: { fill: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 70"
      preserveAspectRatio="none"
      className={`block w-full h-[38px] md:h-[60px] ${flip ? 'rotate-180' : ''}`}
      aria-hidden="true"
    >
      <path d="M0 40C240 75 480 5 720 30 960 55 1200 15 1440 35V70H0V40Z" fill={fill} />
    </svg>
  )
}

export default function GotitasPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero: escena con gotas ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
          {/* confeti y gotas flotantes */}
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <Gota color={C.celeste} className="absolute top-[12%] left-[6%] w-12 md:w-20 opacity-80" />
            <Gota color={C.coral} className="absolute top-[18%] right-[8%] w-10 md:w-16 opacity-80" />
            <Gota color={C.amarillo} className="absolute bottom-[24%] left-[12%] w-8 md:w-12 opacity-80" />
            <Gota color={C.menta} className="absolute top-[42%] right-[16%] w-8 md:w-14 opacity-80 hidden sm:block" />
            <span className="absolute top-[30%] left-[28%] w-4 h-4 rounded-full" style={{ backgroundColor: C.coral }} />
            <span className="absolute bottom-[18%] right-[30%] w-3 h-3 rounded-full" style={{ backgroundColor: C.celeste }} />
            <span className="absolute top-[52%] left-[8%] w-3 h-3 rounded-full hidden md:block" style={{ backgroundColor: C.amarillo }} />
            <span className="absolute top-[10%] right-[36%] w-5 h-5 rounded-full opacity-70" style={{ backgroundColor: C.menta }} />
          </div>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-20 md:pb-28 text-center">
            <Reveal>
              <p className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs md:text-sm font-extrabold uppercase tracking-[0.14em]" style={{ borderColor: C.line, backgroundColor: '#fff', color: C.ink }}>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: C.celeste }} aria-hidden="true" />
                Educación inicial
              </p>
              <h1
                className={`${display.className} font-bold leading-[0.95] text-[clamp(3.4rem,14vw,8rem)] mt-6 mb-6`}
                style={{ color: C.ink }}
              >
                Gotitas
                <br />
                <span style={{ color: '#B04A3A' }}>de Amor</span>
              </h1>
              <p className="text-base md:text-xl leading-relaxed max-w-md mx-auto mb-9" style={{ color: C.muted }}>
                Sala cuna y jardín infantil en Talca.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-extrabold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.coral, color: C.ink }}
                >
                  Consultar por este demo
                </a>
                <a
                  href="#niveles"
                  className={`${body.className} font-extrabold text-sm px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                  style={{ borderColor: C.ink, color: C.ink }}
                >
                  Conocer el jardín
                </a>
              </div>
            </Reveal>
          </div>
          <Wave fill={C.crema2} />
        </section>

        {/* ── 01 Nuestros niveles ── */}
        <section id="niveles" className="scroll-mt-20" style={{ backgroundColor: C.crema2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Label><span style={{ color: C.ink }}>N°01</span> — Nuestros niveles</Label>
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.95] mt-3 mb-10`} style={{ color: C.ink }}>
                Para cada
                <br />
                <span style={{ color: '#2F6E96' }}>etapa pequeña</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5 md:gap-7">
              {NIVELES.map((n, i) => (
                <Reveal key={n.name} delay={i * 100} className="h-full">
                  <article className="relative h-full rounded-[2rem] p-7 md:p-9 overflow-hidden" style={{ backgroundColor: '#fff', border: `2px solid ${C.line}` }}>
                    <span
                      className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-60"
                      style={{ backgroundColor: n.color }}
                      aria-hidden="true"
                    />
                    <div className="relative">
                      <Gota color={n.color} className="w-10 mb-6" />
                      <span className={`${display.className} text-lg font-semibold`} style={{ color: C.muted }}>{n.num}</span>
                      <h3 className={`${display.className} font-bold text-3xl md:text-4xl leading-tight mb-3`} style={{ color: C.ink }}>
                        {n.name}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {n.desc}
                      </p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Wave fill={C.crema} />
        </section>

        {/* ── 02 Un día en el jardín ── */}
        <section id="dia" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <Reveal>
              <Label><span style={{ color: C.ink }}>N°02</span> — Un día en el jardín</Label>
              <h2 className={`${display.className} font-bold text-4xl md:text-6xl leading-[0.95] mt-3 mb-10`} style={{ color: C.ink }}>
                Jugar, comer,
                <br />
                <span style={{ color: '#3E8F68' }}>descansar</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-5">
              {DIA.map((d, i) => (
                <Reveal key={d.name} delay={i * 80} className="h-full">
                  <article className="h-full rounded-[2rem] p-6 md:p-7 flex flex-col" style={{ backgroundColor: '#fff', border: `2px solid ${C.line}` }}>
                    <span className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: [C.celeste, C.amarillo, C.menta][i] }}>
                      {d.icon}
                    </span>
                    <h3 className={`${display.className} font-bold text-xl md:text-2xl leading-tight mb-2.5`} style={{ color: C.ink }}>
                      {d.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                      {d.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
          <Wave fill={C.celeste} />
        </section>

        {/* ── 03 Contacto ── */}
        <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.celeste }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="rounded-[2rem] p-7 md:p-10" style={{ backgroundColor: C.crema, border: `2px solid ${C.line}` }}>
              <Reveal>
                <Label><span style={{ color: C.ink }}>N°03</span> — Contacto</Label>
                <h2 className={`${display.className} font-bold text-3xl md:text-5xl leading-[0.98] mt-3 mb-4`} style={{ color: C.ink }}>
                  Datos de contacto pendientes
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-xl mb-7" style={{ color: C.muted }}>
                  Aún no encontramos un teléfono, WhatsApp o dirección
                  confirmados del jardín. Por eso este botón escribe a Sitiazo,
                  que preparó este mockup y puede ayudarte a confirmar los
                  datos directamente con el jardín.
                </p>
                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} inline-block font-extrabold text-sm px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: C.ink, color: C.crema }}
                >
                  Consultar por este demo
                </a>
                <div className="mt-8 border-t pt-5" style={{ borderColor: C.line }}>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-extrabold mb-3" style={{ color: C.muted }}>
                    Dónde se buscó
                  </p>
                  <ul className="space-y-2">
                    {SOURCES.map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-70 ${focusRing} tap-44`}
                          style={{ color: '#2F6E96', textDecorationColor: 'rgba(47,110,150,0.35)' }}
                        >
                          {s.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
          <Wave fill={C.crema2} />
        </section>
      </Chrome>
    </div>
  )
}
