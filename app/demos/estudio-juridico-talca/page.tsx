import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Reveal } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, MAPS_EMBED, SOURCES } from './content'
import LazyMap from '../lazy-map'
import { Chrome } from './chrome'

const display = localFont({
  src: [
    { path: '../../fonts/cormorant-garamond/normal-300-700.woff2', weight: '300 700', style: 'normal' },
    { path: '../../fonts/cormorant-garamond/italic-300-700.woff2', weight: '300 700', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/source-sans-3/normal-200-900.woff2', weight: '200 900' }],
})

const C = {
  petroleo: '#12283A',
  marfil: '#F7F3EA',
  bronce: '#A4763A',
  piedra: '#5C6670',
  ink: '#101820',
  muted: 'rgba(16,24,32,0.68)',
  line: 'rgba(16,24,32,0.16)',
  lineLight: 'rgba(247,243,234,0.22)',
  marfilDim: 'rgba(247,243,234,0.78)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'estudio-juridico-talca',
  title: 'Convergencia — Estudio Jurídico en Talca',
  description: 'Estudio jurídico en oficina 508, Edificio Plaza Talca. Escríbeles por Instagram o visita la oficina.',
})

const AREAS = [
  {
    num: 'I',
    name: 'Asesoría legal',
    desc: 'Orientación jurídica para ordenar tu situación: revisión de antecedentes, opciones disponibles y próximos pasos.',
  },
  {
    num: 'II',
    name: 'Representación judicial',
    desc: 'Representación ante tribunales según la materia de tu causa, con seguimiento del proceso de principio a fin.',
  },
  {
    num: 'III',
    name: 'Orientación a personas y empresas',
    desc: 'Acompañamiento legal tanto para personas naturales como para pymes y empresas de la región.',
  },
]

const PASOS = [
  { num: 'I', name: 'Escríbenos', desc: 'El primer contacto es por Instagram: cuentas brevemente tu caso y coordinan una primera conversación.' },
  { num: 'II', name: 'Revisión del caso', desc: 'El estudio revisa tus antecedentes y te explica con claridad qué caminos jurídicos existen.' },
  { num: 'III', name: 'Acción', desc: 'Se define la estrategia contigo y el estudio la ejecuta, informándote los avances.' },
]

function Label({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${body.className} text-[11px] uppercase tracking-[0.24em] font-bold`} style={{ color: light ? '#C9A25E' : '#7A5C2E' }}>
      {children}
    </p>
  )
}

function Regla({ light = false }: { light?: boolean }) {
  const color = light ? C.marfil : C.ink
  return (
    <div aria-hidden="true" className="mb-6">
      <div className="h-px" style={{ backgroundColor: color }} />
      <div className="h-px mt-[3px]" style={{ backgroundColor: color, opacity: 0.45 }} />
    </div>
  )
}

export default function EstudioPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.marfil, color: C.ink }}>
      <Chrome fontClass={display.className}>
        {/* ── Hero petróleo con monograma ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.petroleo }}>
          <span
            aria-hidden="true"
            className={`${display.className} absolute -top-8 right-0 md:right-8 font-medium select-none pointer-events-none leading-none`}
            style={{ fontSize: 'clamp(14rem,38vw,30rem)', color: 'rgba(247,243,234,0.07)' }}
          >
            C
          </span>
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
            <Reveal>
              <Regla light />
              <Label light>Estudio Jurídico · Talca</Label>
              <h1
                className={`${display.className} font-medium leading-[0.95] tracking-[-0.01em] text-[clamp(3.4rem,13vw,8.5rem)] mt-5 mb-6`}
                style={{ color: C.marfil }}
              >
                Conver<span className="italic" style={{ color: '#C9A25E' }}>gencia</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-9" style={{ color: C.marfilDim }}>
                Oficina 508, Edificio Plaza Talca. Escríbeles por Instagram o
                acércate directamente a la oficina.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={BIZ.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.08em] text-xs md:text-sm px-7 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                  style={{ backgroundColor: '#7A5C2E', color: C.marfil }}
                >
                  Escribir por Instagram
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${body.className} font-bold uppercase tracking-[0.08em] text-xs md:text-sm px-7 py-3.5 border transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                  style={{ borderColor: 'rgba(247,243,234,0.6)', color: C.marfil }}
                >
                  Cómo llegar
                </a>
              </div>
              <p className="mt-8 text-xs md:text-sm" style={{ color: 'rgba(247,243,234,0.66)' }}>
                @{BIZ.instagram}
              </p>
            </Reveal>
          </div>
          <div className="h-px" style={{ backgroundColor: C.bronce }} aria-hidden="true" />
        </section>

        {/* ── I Áreas ── */}
        <section id="areas" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Regla />
              <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
                <Label><span style={{ color: C.ink }}>I</span> — Áreas</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  de muestra
                </p>
              </div>
            </Reveal>
            <Reveal>
              <h2 className={`${display.className} font-medium text-4xl md:text-6xl leading-[1.02] mb-10 md:mb-14`} style={{ color: C.ink }}>
                Derecho al servicio
                <br />
                <span className="italic" style={{ color: '#7A5C2E' }}>de personas y empresas</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-px border" style={{ borderColor: C.ink, backgroundColor: C.line }}>
              {AREAS.map((a, i) => (
                <Reveal key={a.name} delay={i * 80} className="h-full">
                  <article className="h-full p-7 md:p-8 flex flex-col" style={{ backgroundColor: C.marfil }}>
                    <span className={`${display.className} italic text-3xl mb-8`} style={{ color: '#7A5C2E' }}>{a.num}.</span>
                    <h3 className={`${display.className} font-medium text-2xl md:text-[26px] leading-tight mb-3`} style={{ color: C.ink }}>
                      {a.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {a.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <p className="text-xs md:text-sm mt-4 italic" style={{ color: C.muted, fontFamily: display.style.fontFamily }}>
                Áreas de muestra; se ajustan con el estudio.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── II Cómo trabajamos ── */}
        <section id="metodo" className="scroll-mt-20 border-t" style={{ backgroundColor: '#F0EBDD', borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Regla />
              <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
                <Label><span style={{ color: C.ink }}>II</span> — Cómo trabajamos</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  en 3 pasos
                </p>
              </div>
            </Reveal>
            <ol className="grid md:grid-cols-3 gap-8 md:gap-10">
              {PASOS.map((p, i) => (
                <Reveal key={p.num} delay={i * 90}>
                  <li className="border-t-2 pt-6" style={{ borderColor: C.bronce }}>
                    <span className={`${display.className} italic text-4xl`} style={{ color: '#7A5C2E' }}>{p.num}</span>
                    <h3 className={`${display.className} font-medium text-2xl md:text-3xl mt-4 mb-2.5`} style={{ color: C.ink }}>
                      {p.name}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ── III Ubicación ── */}
        <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.marfil }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Regla />
              <div className="flex items-end justify-between gap-6 mb-10 md:mb-12">
                <Label><span style={{ color: C.ink }}>III</span> — Ubicación</Label>
                <p className="hidden sm:block text-[11px] uppercase tracking-[0.18em] font-bold shrink-0" style={{ color: C.muted }}>
                  Edificio Plaza Talca
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-stretch">
              <Reveal>
                <div className="border h-full flex flex-col" style={{ borderColor: C.ink }}>
                  <div className="px-6 md:px-8 py-7 border-b" style={{ borderColor: C.line }}>
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-2" style={{ color: '#7A5C2E' }}>Dirección</p>
                    <address className="not-italic text-sm md:text-base leading-relaxed mb-4" style={{ color: C.ink }}>
                      <strong className="font-bold">{BIZ.address}</strong>
                      <br />
                      <span style={{ color: C.muted }}>{BIZ.city}, {BIZ.region}, Chile</span>
                    </address>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-sm font-bold underline underline-offset-4 decoration-2 transition-opacity hover:opacity-75 ${focusRing} tap-44`}
                      style={{ color: '#7A5C2E', textDecorationColor: 'rgba(122,92,46,0.35)' }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                  <div className="px-6 md:px-8 py-7 flex-1">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-bold mb-3" style={{ color: '#7A5C2E' }}>Contacto</p>
                    <a
                      href={BIZ.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${body.className} inline-block font-bold uppercase tracking-[0.08em] text-xs px-6 py-3 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                      style={{ backgroundColor: '#7A5C2E', color: C.marfil }}
                    >
                      @{BIZ.instagram} →
                    </a>
                    <p className="text-xs leading-relaxed mt-5" style={{ color: C.muted }}>
                      Sin teléfono ni horario publicados: el primer contacto es
                      por Instagram o directamente en la oficina.
                    </p>
                  </div>
                  <div className="px-6 md:px-8 py-4 border-t" style={{ borderColor: C.line }}>
                    <p className="text-[10px] uppercase tracking-[0.18em] font-bold mb-1.5" style={{ color: C.muted }}>Fuentes</p>
                    <p className="text-xs leading-relaxed" style={{ color: C.muted }}>{SOURCES.join(' · ')}</p>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="border overflow-hidden min-h-[320px] h-full flex flex-col" style={{ borderColor: C.ink, backgroundColor: '#E8E2D2' }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full flex-1 min-h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <p className="px-5 py-3 border-t text-[10px] uppercase tracking-[0.18em] font-bold" style={{ borderColor: C.line, color: C.muted }}>
                    Edificio Plaza Talca · Quinto piso · Talca
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Cierre petróleo ── */}
        <section style={{ backgroundColor: C.petroleo }}>
          <div className="h-px" style={{ backgroundColor: C.bronce }} aria-hidden="true" />
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Reveal>
              <h2 className={`${display.className} font-medium text-4xl md:text-5xl leading-[1]`} style={{ color: C.marfil }}>
                Tu caso
                <br />
                <span className="italic" style={{ color: '#C9A25E' }}>merece atención</span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${body.className} inline-block font-bold uppercase tracking-[0.08em] text-sm px-8 py-3.5 transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: '#7A5C2E', color: C.marfil }}
              >
                Escribir por Instagram
              </a>
            </Reveal>
          </div>
        </section>
      </Chrome>
    </div>
  )
}
