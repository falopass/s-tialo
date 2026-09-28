import type { Metadata } from 'next'
import { Chrome } from './chrome'
import { BIZ, SOURCES } from './content'

export const metadata: Metadata = {
  title: `${BIZ.name} — Talca`,
  description: `${BIZ.name}, educación inicial en Talca.`,
}

function SunIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" role="img" aria-label="Ilustración abstracta de gotas, sol y hojas">
      <rect width="520" height="360" rx="28" fill="#f6c76c" />
      <circle cx="390" cy="92" r="58" fill="#f28b62" />
      <path d="M0 270c75-66 143-62 211-14 74 53 126 31 184-20 46-40 81-46 125-33v157H0Z" fill="#5d9a73" />
      <path d="M54 240c13-54 52-79 91-93-6 54-34 88-91 93Zm22 9c54 3 87 26 108 68-49-3-85-24-108-68Z" fill="#173b36" />
      <path d="M262 88c0-43 36-69 36-69s36 26 36 69a36 36 0 1 1-72 0Z" fill="#fff8ed" />
      <circle cx="298" cy="88" r="11" fill="#f28b62" />
      <path d="M188 184c0-34 28-55 28-55s28 21 28 55a28 28 0 1 1-56 0Z" fill="#fff8ed" opacity=".9" />
    </svg>
  )
}

export default function GotitasPage() {
  return (
    <Chrome>
      <main id="inicio">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.05fr_.95fr] md:pb-24 md:pt-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b85b44]">Talca · Región del Maule</p>
            <h1 className="mt-5 max-w-2xl text-5xl font-semibold leading-[.98] tracking-[-.055em] md:text-7xl">
              Crecer con cariño, curiosidad y calma.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#173b36]/75">
              Una propuesta digital para <strong>{BIZ.name}</strong>, pensada para que las familias conozcan el espacio de educación inicial de un vistazo.
            </p>
            <a href="#espacio" className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[#173b36] px-6 py-3 text-sm font-bold text-[#fff8ed]">
              Explorar el espacio
            </a>
          </div>
          <div className="aspect-[1.15] rounded-[2rem] p-3 shadow-[0_20px_60px_rgba(23,59,54,.12)]">
            <SunIllustration />
          </div>
        </section>

        <section id="espacio" className="bg-[#e8f0df] px-5 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b85b44]">Una primera mirada</p>
            <div className="mt-5 grid gap-8 md:grid-cols-3">
              {[
                ['Sala cuna', 'La primera etapa de un camino de descubrimiento y vínculos seguros.'],
                ['Jardín infantil', 'Un lugar para aprender jugando, conversar y explorar el entorno.'],
                ['Familias', 'Una comunicación clara ayuda a acompañar cada paso del desarrollo.'],
              ].map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-[#fff8ed] p-6">
                  <span className="text-3xl text-[#f28b62]">✦</span>
                  <h2 className="mt-6 text-2xl font-semibold">{title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-[#173b36]/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#b85b44]">Ficha pública</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">Información que sí está confirmada</h2>
            <p className="mt-5 leading-relaxed text-[#173b36]/70">
              El nombre del establecimiento y su ubicación en Talca aparecen en búsquedas públicas. No se agregan dirección, horario, teléfono, redes ni servicios específicos porque no fue posible verificarlos para esta sede.
            </p>
            <div className="mt-8 rounded-3xl border border-[#173b36]/15 bg-[#fff8ed] p-6">
              <p className="text-sm font-bold">Nombre exacto</p>
              <p className="mt-2 text-lg">{BIZ.name}</p>
              <p className="mt-5 text-sm font-bold">Ubicación publicada</p>
              <p className="mt-2 text-lg">{BIZ.city}</p>
            </div>
          </div>
        </section>

        <section className="bg-[#f6c76c] px-5 py-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#173b36]/70">Fuentes consultadas</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {SOURCES.map((source) => (
                <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="rounded-full bg-[#173b36] px-4 py-3 text-sm font-semibold text-[#fff8ed]">
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Chrome>
  )
}
