import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import { BRANCHES, BIZ, SERVICES, WA_LINK } from './content'
import { SiteNav, WhatsAppFab } from './chrome'

export const metadata: Metadata = demoMetadata({
  slug: 'lavaseco-flash',
  title: 'Lavaseco Flash — Lavandería en Talca',
  description: 'Lavandería doméstica e industrial en Talca. Revisa sucursales y consulta por WhatsApp.',
})

function WasherArt() {
  return (
    <div role="img" aria-label="Ilustración de lavadora y prendas limpias" className="relative mx-auto flex aspect-[1.12] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-[#f2d792]">
      <div className="absolute -right-10 -top-10 size-52 rounded-full bg-[#f7e8bf]" />
      <div className="absolute bottom-0 left-0 h-[22%] w-full bg-[#e5b858]" />
      <div className="relative z-10 w-[64%] rounded-[1.6rem] border-[8px] border-[#d8e6e1] bg-[#f8fbf8] p-4 shadow-[0_22px_35px_rgba(16,42,54,.2)]">
        <div className="mb-3 flex items-center justify-between">
          <span className="h-3 w-12 rounded-full bg-[#cadbd6]" />
          <span className="size-5 rounded-full border-[5px] border-[#edaa39] bg-white" />
        </div>
        <div className="mx-auto flex aspect-square w-[78%] items-center justify-center rounded-full border-[10px] border-[#b5d3ce] bg-[#d8eeeb] shadow-inner">
          <div className="relative size-[72%] overflow-hidden rounded-full bg-[#45a39a]">
            <div className="absolute -bottom-2 left-1/2 h-[60%] w-[90%] -translate-x-1/2 rounded-t-full bg-[#f7f4e9]" />
            <div className="absolute bottom-[35%] left-[28%] h-10 w-12 -rotate-12 rounded-t-full bg-[#edaa39]" />
          </div>
        </div>
      </div>
      <svg className="absolute bottom-[18%] right-[9%] z-10 w-[26%] text-[#146b66]" viewBox="0 0 100 82" fill="none" aria-hidden="true">
        <path d="M10 68 30 22l18 35 12-24 26 35H10Z" fill="currentColor" />
        <path d="m30 22 7-16 8 19" stroke="#f8fbf8" strokeWidth="5" strokeLinecap="round" />
        <path d="m60 33 8-18 9 21" stroke="#f5b642" strokeWidth="5" strokeLinecap="round" />
      </svg>
      <span className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-[10px] font-black uppercase tracking-[.18em] text-[#174c4a]">Desde 1974</span>
    </div>
  )
}

export default function LavasecoFlashPage() {
  return (
    <main id="inicio" className="min-h-screen bg-[#102a36] text-[#f8fbf8]">
      <SiteNav />
      <section className="mx-auto grid max-w-6xl items-center gap-9 px-5 pb-12 pt-24 md:min-h-[730px] md:grid-cols-[1fr_.9fr] md:px-8 md:pb-16 md:pt-24">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.2em] text-[#f5b642]">Empresa familiar · Región del Maule</p>
          <h1 className="max-w-xl text-5xl font-black leading-[.98] tracking-tight sm:text-6xl">Cuidado experto para tus <span className="text-[#f5b642]">prendas</span></h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#e3eeeb]">Lavandería doméstica e industrial en Talca. Más de 50 años de experiencia con atención en tres sucursales.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#f5b642] px-6 text-sm font-extrabold text-[#172b34]">Consulta por WhatsApp</a>
        </div>
        <WasherArt />
      </section>
      <section id="servicios" className="bg-[#f4f7f2] px-5 py-12 text-[#19353c] md:px-8 md:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#176b65]">Servicios</p>
          <h2 className="mt-3 text-3xl font-black">Soluciones para cada carga</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {SERVICES.map((service) => (
              <article key={service.name} className="rounded-2xl border border-[#cbdcd5] bg-white p-5">
                <h3 className="text-lg font-black text-[#143c43]">{service.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#354b4e]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sucursales" className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#f5b642]">Estamos en Talca</p>
        <h2 className="mt-3 text-3xl font-black">Tres sucursales</h2>
        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {BRANCHES.map((branch) => (
            <article key={branch.name} className="rounded-2xl border border-white/20 bg-[#173844] p-5">
              <h3 className="text-lg font-black text-white">{branch.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#e4efeb]">{branch.address}</p>
              <p className="mt-2 text-sm leading-relaxed text-[#e4efeb]">{branch.hours}</p>
              <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center rounded-full border border-[#c3d8d2] px-4 text-sm font-bold text-white">Ver en Google Maps</a>
            </article>
          ))}
        </div>
        <div className="mt-8 rounded-2xl bg-[#f5b642] p-5 text-[#172b34] sm:flex sm:items-center sm:justify-between sm:gap-5">
          <div><p className="text-xs font-extrabold uppercase tracking-[.15em]">Casa Matriz</p><p className="mt-1 text-sm font-bold">{BIZ.phoneDisplay} · {BRANCHES[0].hours}</p></div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-[#102a36] px-5 text-sm font-extrabold text-white sm:mt-0">Escríbenos por WhatsApp</a>
        </div>
      </section>
      <footer className="bg-[#0a1e27] px-5 py-7 text-xs text-[#d7e5e0] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><strong className="text-sm text-white">{BIZ.name}</strong><span>{BIZ.category} · {BIZ.city} · Región del Maule</span></div>
      </footer>
      <WhatsAppFab />
    </main>
  )
}
