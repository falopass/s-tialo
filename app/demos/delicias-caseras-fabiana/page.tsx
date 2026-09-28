import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, WA_LINK } from './content'
import { SiteNav, WhatsAppFab } from './chrome'

export const metadata: Metadata = demoMetadata({
  slug: 'delicias-caseras-fabiana',
  title: 'Delicias Caseras Fabiana — San Clemente',
  description: 'Panadería y pastelería en San Clemente, Región del Maule.',
})

function TableArt() {
  return (
    <div role="img" aria-label="Ilustración decorativa de repostería sobre una mesa" className="relative mx-auto flex aspect-[1.2] w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] bg-[#e5bc84]">
      <div className="absolute -right-10 -top-10 size-48 rounded-full border-[22px] border-[#f7e6c8]/65" />
      <div className="absolute bottom-0 left-0 h-[42%] w-full bg-[#74412f]" />
      <div className="absolute bottom-[27%] left-[13%] h-14 w-32 rotate-[-8deg] rounded-[50%] bg-[#fbf2df] shadow-lg" />
      <div className="absolute bottom-[34%] left-[21%] size-11 rounded-full bg-[#c76e46] shadow-[inset_-5px_-6px_0_#a85131]" />
      <div className="absolute bottom-[34%] left-[40%] size-11 rounded-full bg-[#c76e46] shadow-[inset_-5px_-6px_0_#a85131]" />
      <div className="absolute bottom-[29%] right-[15%] h-16 w-20 rounded-t-[45%] rounded-b-lg border-4 border-[#7b3525] bg-[#f7d993] shadow-lg" />
      <div className="absolute bottom-[39%] right-[20%] h-3 w-10 rounded-full bg-[#fff2cf]" />
      <div className="absolute right-5 top-6 rounded-full bg-[#fff6e5] px-4 py-2 text-xs font-black uppercase tracking-widest text-[#713b2d]">Hecho en casa</div>
    </div>
  )
}

export default function DeliciasCaserasPage() {
  return (
    <main id="inicio" className="min-h-screen bg-[#fff8ec] text-[#392920]">
      <SiteNav />
      <section className="mx-auto grid min-h-[700px] max-w-6xl items-center gap-9 px-5 pb-12 pt-28 md:min-h-[740px] md:grid-cols-[1fr_.95fr] md:px-8 md:pt-24">
        <div>
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[.2em] text-[#7b4c2e]">San Clemente · Región del Maule</p>
          <h1 className="max-w-xl text-5xl font-black leading-[1] tracking-tight sm:text-6xl">Un gusto <span className="text-[#a34127]">hecho en casa</span></h1>
          <p className="mt-5 text-sm font-bold uppercase tracking-wide text-[#73412e]">{BIZ.name}</p>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#4c3b31]">Panadería y pastelería en Villa Entre Ríos. Escríbele a Fabiana para consultar por sus preparaciones y disponibilidad.</p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-full bg-[#76321f] px-6 text-sm font-extrabold text-white">Consultar por WhatsApp</a>
        </div>
        <TableArt />
      </section>
      <section className="bg-[#f1dfc2] px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-[.7fr_1fr] sm:items-center">
          <div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#62402d]">Delicias de casa</p><h2 className="mt-3 text-3xl font-black">Panadería y pastelería</h2></div>
          <p className="max-w-2xl text-base leading-relaxed text-[#392920]">También puedes consultar por comida casera. Pregunta por WhatsApp qué hay disponible.</p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <p className="text-xs font-extrabold uppercase tracking-[.2em] text-[#7b4c2e]">Encuéntranos</p>
        <h2 className="mt-3 text-3xl font-black">En San Clemente</h2>
        <p className="mt-3 max-w-lg text-sm leading-relaxed">{BIZ.address}, {BIZ.city}, Región del Maule.</p>
        <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center rounded-full border border-[#694234] px-5 text-sm font-bold text-[#442d24]">Ver en Google Maps</a>
      </section>
      <footer className="bg-[#462b23] px-5 py-7 text-xs text-[#fff4e2] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><strong className="text-sm text-white">{BIZ.name}</strong><span>{BIZ.category} · {BIZ.city}</span></div>
      </footer>
      <WhatsAppFab />
    </main>
  )
}
