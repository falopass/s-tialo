import type { Metadata } from 'next'
import { Chrome } from './chrome'
import { BIZ, HOURS, WA_LINK } from './content'

export const metadata: Metadata = {
  title: `${BIZ.name} — Barbería en Talca`,
  description: `${BIZ.name}, barbería en Catorce Ote. 901, Talca.`,
}

function BarberMark() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full" role="img" aria-label="Ilustración abstracta de barbería">
      <rect width="520" height="360" fill="#e6b84f" />
      <path d="M0 0h520v72H0z" fill="#e4572e" />
      <path d="M0 288h520v72H0z" fill="#e4572e" />
      <circle cx="260" cy="180" r="92" fill="#111315" />
      <path d="M218 122h84l20 58-20 58h-84l-20-58Z" fill="#f4eee4" />
      <path d="M230 132h60M222 154h76M222 206h76M230 228h60" stroke="#e4572e" strokeWidth="10" />
      <circle cx="260" cy="180" r="13" fill="#e6b84f" />
    </svg>
  )
}

export default function NewEraPage() {
  return (
    <Chrome>
      <main id="inicio">
        <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 md:grid-cols-[1.05fr_.95fr] md:pb-24 md:pt-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e6b84f]">Barbería · Talca</p>
            <h1 className="mt-5 text-6xl font-black uppercase leading-[.86] tracking-[-.06em] md:text-8xl">Nueva era.<br /><span className="text-[#e4572e]">Mismo oficio.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-[#f4eee4]/70">
              Cortes y atención de barbería en el centro de Talca. Reserva tu hora directamente por WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center bg-[#e6b84f] px-6 py-3 text-sm font-black text-[#111315]">Agendar por WhatsApp</a>
              <a href={BIZ.maps} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center border border-[#f4eee4]/35 px-6 py-3 text-sm font-bold">Ver en Maps</a>
            </div>
          </div>
          <div className="aspect-[1.15] border-8 border-[#e4572e] p-3">
            <BarberMark />
          </div>
        </section>

        <section id="servicios" className="bg-[#f4eee4] px-5 py-16 text-[#111315] md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e4572e]">Ficha pública</p>
            <h2 className="mt-4 max-w-2xl text-4xl font-black uppercase leading-none tracking-[-.04em] md:text-6xl">Barbería en Talca, sin datos inventados.</h2>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                ['Categoría', 'Barber shop'],
                ['Evaluación', `${BIZ.rating} estrellas`],
                ['Reseñas', `${BIZ.reviews} opiniones`],
              ].map(([item, value], i) => (
                <article key={item} className="border-t-4 border-[#e4572e] bg-white p-6">
                  <p className="text-5xl font-black text-[#e6b84f]">0{i + 1}</p>
                  <h3 className="mt-10 text-2xl font-black uppercase">{item}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#111315]/65">{value}</p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-sm text-[#111315]/65">La ficha consultada no publica un listado detallado de servicios; consúltalos directamente por WhatsApp.</p>
          </div>
        </section>

        <section id="horario" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[.8fr_1.2fr] md:py-24">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e6b84f]">Horario publicado</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-.04em]">Todos los días, 9 a 20.</h2>
            <p className="mt-5 leading-relaxed text-[#f4eee4]/65">Confirma tu hora antes de venir: el horario puede cambiar por días festivos o agenda.</p>
          </div>
          <div className="border-y border-[#f4eee4]/20">
            {HOURS.map(([day, time]) => (
              <div key={day} className="flex justify-between gap-4 border-b border-[#f4eee4]/15 py-3 text-sm last:border-0">
                <span>{day}</span><strong>{time}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="ubicacion" className="bg-[#e4572e] px-5 py-14 text-[#111315]">
          <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em]">Dónde encontrarnos</p>
              <h2 className="mt-4 max-w-xl text-4xl font-black uppercase leading-none tracking-[-.04em] md:text-6xl">{BIZ.address}</h2>
              <p className="mt-4 font-semibold">Google Maps · {BIZ.rating} estrellas · {BIZ.reviews} reseñas</p>
            </div>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center self-start bg-[#111315] px-6 py-3 text-sm font-black text-[#f4eee4] md:self-auto">Consultar por WhatsApp</a>
          </div>
        </section>
      </main>
    </Chrome>
  )
}
