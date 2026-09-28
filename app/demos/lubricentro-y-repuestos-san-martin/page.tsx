import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_EMBED, MAPS_URL, WA_LINK } from './content'
import { SanMartinFooter, SanMartinNav } from './chrome'

const display = localFont({
  src: '../../fonts/bricolage-grotesque/normal-200-800.woff2',
  weight: '200 800',
  variable: '--font-sanmartin-display',
})

const body = localFont({
  src: '../../fonts/inter/normal-100-900.woff2',
  weight: '100 900',
  variable: '--font-sanmartin-body',
})

const C = {
  ink: '#191d1f',
  paper: '#f5f2ea',
  muted: '#50595c',
  line: '#d9d5cb',
}

export const metadata: Metadata = demoMetadata({
  slug: 'lubricentro-y-repuestos-san-martin',
  title: 'Lubricentro y repuestos San Martín — Molina',
  description: 'Lubricentro y repuestos San Martín en Teniente Ponce 1320, Molina. Consulta por cambio de aceite o repuestos por WhatsApp.',
})

function OilDrop() {
  return (
    <svg viewBox="0 0 320 320" className="h-full w-full" fill="none" aria-hidden="true">
      <circle cx="160" cy="160" r="144" stroke="#586064" strokeWidth="1" />
      <circle cx="160" cy="160" r="112" stroke="#586064" strokeWidth="1" strokeDasharray="5 9" />
      <path d="M160 54C160 54 91 136 91 185a69 69 0 1 0 138 0c0-49-69-131-69-131Z" fill="#f2ae38" />
      <path d="M133 186c2 18 12 30 29 36" stroke="#191d1f" strokeWidth="9" strokeLinecap="round" />
      <circle cx="255" cy="73" r="13" fill="#f5f2ea" />
      <circle cx="63" cy="236" r="7" fill="#f2ae38" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M3 10h13M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function SanMartinPage() {
  return (
    <main className={`${display.variable} ${body.className}`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`html{scroll-behavior:smooth}.font-display{font-family:var(--font-sanmartin-display)}`}</style>
      <SanMartinNav />

      <section id="inicio" className="overflow-hidden bg-[#191d1f] text-[#f5f2ea]">
        <div className="mx-auto grid min-h-[590px] max-w-6xl items-center gap-3 px-5 py-12 sm:px-8 md:min-h-[620px] md:grid-cols-[1.1fr_.9fr] md:py-16">
          <div className="relative z-10">
            <p className="mb-5 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#f2ae38]">
              <span className="h-2 w-2 rounded-full bg-[#f2ae38]" aria-hidden="true" />
              Lubricentro · Repuestos · Molina
            </p>
            <h1 className="font-display max-w-3xl text-[clamp(2.7rem,11vw,5.8rem)] font-extrabold leading-[0.94] tracking-[-0.045em]">
              Lubricentro y repuestos <span className="text-[#f2ae38]">San Martín</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-[#dedbd3] sm:text-lg">
              Cambio de aceite y repuestos en Teniente Ponce 1320, Molina. Consulta directamente por WhatsApp.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 rounded-sm bg-[#f2ae38] px-5 text-sm font-extrabold text-[#191d1f] sm:text-base">
                Consultar por WhatsApp <ArrowIcon />
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-sm border border-[#8c9292] px-5 text-sm font-bold text-[#f5f2ea] sm:text-base">
                Ver ubicación
              </a>
            </div>
          </div>

          <div className="relative mx-auto mt-3 aspect-square w-full max-w-[330px] md:mt-0 md:max-w-[390px]">
            <div className="absolute inset-0 rotate-[-8deg] border border-[#586064]" aria-hidden="true" />
            <div className="absolute inset-4 rotate-[5deg] border border-[#586064]" aria-hidden="true" />
            <div className="absolute inset-0 p-5 sm:p-8"><OilDrop /></div>
            <span className="absolute bottom-0 left-0 bg-[#f5f2ea] px-3 py-2 font-display text-xs font-extrabold uppercase tracking-[0.12em] text-[#191d1f]">Servicio automotriz</span>
            <span className="absolute right-0 top-2 bg-[#f2ae38] px-3 py-2 font-display text-xs font-extrabold uppercase tracking-[0.12em] text-[#191d1f]">En Molina</span>
          </div>
        </div>
        <div className="border-t border-[#42484a]">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-7 gap-y-2 px-5 py-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#dedbd3] sm:px-8">
            <span>{BIZ.address}, {BIZ.city}</span>
            <span>Cambio de aceite</span>
          </div>
        </div>
      </section>

      <section id="servicio" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-24">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d4c10]">Atención directa</p>
            <h2 className="font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl">Lo que necesitas saber, sin vueltas.</h2>
          </div>
          <p className="max-w-xl text-base leading-relaxed" style={{ color: C.muted }}>
            La ficha de Google identifica el local como servicio de cambio de aceite. Para consultar repuestos, disponibilidad u otros detalles, escríbenos antes de acercarte.
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2">
          <article className="border p-6 sm:p-7" style={{ borderColor: C.line, backgroundColor: '#fffdf8' }}>
            <span className="font-display text-xs font-extrabold uppercase tracking-[0.16em] text-[#6d4c10]">01 / Lubricentro</span>
            <h3 className="font-display mt-5 text-2xl font-extrabold">Cambio de aceite</h3>
            <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>Consulta por WhatsApp y confirma los detalles del servicio directamente con el local.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-10 items-center gap-2 text-sm font-extrabold underline decoration-[#b47a12] decoration-2 underline-offset-4">Hacer una consulta <ArrowIcon /></a>
          </article>
          <article className="relative overflow-hidden border p-6 sm:p-7" style={{ borderColor: C.line, backgroundColor: '#e9e5db' }}>
            <div className="absolute -right-5 -top-7 h-32 w-32 rounded-full border border-[#c8c2b4]" aria-hidden="true" />
            <div className="absolute -right-1 -top-3 h-20 w-20 rounded-full border border-[#c8c2b4]" aria-hidden="true" />
            <span className="relative font-display text-xs font-extrabold uppercase tracking-[0.16em] text-[#6d4c10]">02 / Repuestos</span>
            <h3 className="relative font-display mt-5 text-2xl font-extrabold">Consulta por tu repuesto</h3>
            <p className="relative mt-2 max-w-sm text-sm leading-relaxed" style={{ color: C.muted }}>Cuéntanos qué pieza buscas y confirma disponibilidad antes de visitar el local.</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="relative mt-5 inline-flex h-10 items-center gap-2 text-sm font-extrabold underline decoration-[#b47a12] decoration-2 underline-offset-4">Consultar disponibilidad <ArrowIcon /></a>
          </article>
        </div>
      </section>

      <section id="contacto" className="bg-[#e9e5db]">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-8 md:grid-cols-[.8fr_1.2fr] md:py-20">
          <div>
            <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#6d4c10]">Visítanos</p>
            <h2 className="font-display text-4xl font-extrabold tracking-tight">En Molina, Región del Maule.</h2>
            <p className="mt-4 text-base font-semibold">{BIZ.address}, {BIZ.city}</p>
            <div className="mt-7 border-t pt-5" style={{ borderColor: C.line }}>
              <h3 className="font-display text-lg font-extrabold">Horario informado en Google Maps</h3>
              <dl className="mt-3 space-y-2 text-sm">
                {BIZ.hours.map((item) => (
                  <div key={item.days} className="flex justify-between gap-4">
                    <dt style={{ color: C.muted }}>{item.days}</dt>
                    <dd className="font-bold">{item.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center rounded-sm bg-[#191d1f] px-4 text-sm font-extrabold text-white">Escribir por WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center border border-[#767970] px-4 text-sm font-extrabold text-[#191d1f]">Abrir Google Maps</a>
            </div>
          </div>
          <div className="min-h-[280px] overflow-hidden border border-[#c8c2b4] bg-[#d9d5cb] md:min-h-[380px]">
            <iframe
              src={MAPS_EMBED}
              title={`Mapa de ${BIZ.name} en ${BIZ.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-[280px] w-full border-0 md:min-h-[380px]"
            />
          </div>
        </div>
      </section>

      <SanMartinFooter />
    </main>
  )
}
