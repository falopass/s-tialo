import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import { MAPS_URL, BIZ, WA_LINK } from './content'
import { SiteNav, WhatsAppFab } from './chrome'

export const metadata: Metadata = demoMetadata({
  slug: 'brilla-el-sol-talca',
  title: 'Complejo Deportivo Brilla El Sol — Talca',
  description: 'Recinto deportivo en 12 Sur con 6 Oriente, Talca. Consulta por WhatsApp.',
})

function FieldArt() {
  return (
    <div className="relative mx-auto aspect-[1.55] w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/40 bg-[#178553] shadow-2xl" role="img" aria-label="Ilustración de una cancha de fútbol">
      <div className="absolute inset-3 rounded-[1.5rem] border-2 border-white/70" />
      <div className="absolute inset-y-3 left-1/2 w-px bg-white/65" />
      <div className="absolute left-1/2 top-1/2 size-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/65" />
      <div className="absolute left-3 top-1/4 h-1/2 w-14 border-y-2 border-r-2 border-white/65" />
      <div className="absolute right-3 top-1/4 h-1/2 w-14 border-y-2 border-l-2 border-white/65" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent_0_12%,rgba(8,67,43,.15)_12%_24%)]" />
      <svg className="absolute bottom-5 right-5 w-12 text-[#f4c64e]" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" />
        <path d="m24 12 8 6-3 10h-10l-3-10 8-6Zm-8 6-7-2m20 2 7-2m-19 12-4 9m17-9 4 9m-8-16v-5" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  )
}

export default function BrillaElSolPage() {
  return (
    <main id="inicio" className="min-h-screen bg-[#10392e] text-[#fffdf3]">
      <SiteNav />
      <section className="mx-auto grid min-h-[720px] max-w-6xl items-center gap-10 px-5 pb-14 pt-28 md:min-h-[760px] md:grid-cols-[1fr_1.05fr] md:px-8 md:pt-24">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-[#f4c64e]">Fútbol · Talca · Región del Maule</p>
          <h1 className="max-w-xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl">Complejo Deportivo <span className="text-[#f4c64e]">Brilla El Sol</span></h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[#f0f3df]">Una cancha de fútbol en el sector suroriente de Talca. Consulta disponibilidad y detalles directamente por WhatsApp.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f4c64e] px-6 text-sm font-extrabold text-[#17291f]">Consultar por WhatsApp</a>
        </div>
        <FieldArt />
      </section>
      <section id="cancha" className="bg-[#f5f1df] px-5 py-12 text-[#20382d] md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-[.7fr_1fr] sm:items-center">
          <div><p className="text-xs font-bold uppercase tracking-[.2em] text-[#276d4c]">El recinto</p><h2 className="mt-3 text-3xl font-black">Fútbol en Brilla El Sol</h2></div>
          <p className="max-w-2xl text-base leading-relaxed">Complejo deportivo y cancha de fútbol en Talca. Escribe para consultar horarios, reservas y condiciones de uso.</p>
        </div>
      </section>
      <section id="ubicacion" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f4c64e]">Cómo llegar</p>
        <h2 className="mt-3 text-3xl font-black">Te esperamos en Talca</h2>
        <p className="mt-3 text-sm text-[#e5eddf]">{BIZ.address}, {BIZ.city}, Región del Maule.</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-full border border-white/50 px-5 text-sm font-bold">Ver ubicación en Google Maps</a>
      </section>
      <footer className="bg-[#09271f] px-5 py-7 text-xs text-[#e5eddf] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><strong className="text-sm text-white">{BIZ.name}</strong><span>{BIZ.category} · {BIZ.city}</span></div>
      </footer>
      <WhatsAppFab />
    </main>
  )
}
