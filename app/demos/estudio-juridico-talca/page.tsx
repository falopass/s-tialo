import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import { Chrome } from './chrome'
import { BIZ, MAPS_URL } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'estudio-juridico-talca',
  title: 'Convergencia Estudio Jurídico Talca',
  description: 'Convergencia Estudio Jurídico Talca, en el centro de la ciudad. Orientación jurídica y atención personalizada.',
})

function Scales() {
  return (
    <svg viewBox="0 0 420 260" className="w-full max-w-[430px]" aria-hidden="true">
      <path d="M210 36v173M142 209h136M172 36h76M210 36l-68 51m68-51 68 51" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M106 86 63 151h86l-43-65Zm208 0-43 65h86l-43-65Z" stroke="currentColor" strokeWidth="4" fill="none" />
      <path d="M43 157h126M251 157h126" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <circle cx="210" cy="34" r="8" fill="currentColor" />
      <path d="M64 194c28 17 54 17 82 0M274 194c28 17 54 17 82 0" stroke="currentColor" strokeWidth="3" opacity=".45" />
    </svg>
  )
}

const points = [
  ['Escuchar', 'Partir por lo que ocurrió, con tiempo para ordenar los antecedentes.'],
  ['Orientar', 'Explicar las opciones de forma clara, sin prometer resultados que no están confirmados.'],
  ['Acompañar', 'Mantener una atención cercana durante el camino que corresponda.'],
]

export default function EstudioJuridicoTalcaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F7F3EA] text-[#172238]">
      <Chrome />
      <section id="inicio" className="relative overflow-hidden bg-[#101A2B] px-5 pb-14 pt-32 text-[#F7F3EA] md:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_.9fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.24em] text-[#D4A64A]">Estudio jurídico · Talca</p>
            <h1 className="mt-5 max-w-3xl font-serif text-[clamp(3.1rem,9vw,7rem)] leading-[.9] tracking-[-.04em]">
              Claridad para <em className="text-[#D4A64A]">decidir.</em>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#DCE2EC]">
              {BIZ.name}. Atención personalizada en el centro de Talca para entender su situación y conversar el camino a seguir.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#D4A64A] px-5 font-semibold text-[#101A2B]">
                Escribir por Instagram
              </a>
              <a href="#contacto" className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#DCE2EC]/60 px-5 font-semibold text-[#F7F3EA]">
                Ver ubicación
              </a>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#D4A64A]/40 bg-[#17243A] p-8 text-[#D4A64A]">
            <Scales />
            <p className="mt-4 border-t border-[#F7F3EA]/15 pt-4 font-mono text-[11px] uppercase tracking-[.2em] text-[#DCE2EC]">
              Talca · Maule
            </p>
          </div>
        </div>
      </section>

      <section id="enfoque" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-[11px] uppercase tracking-[.24em] text-[#8B651F]">Un primer paso claro</p>
          <div className="mt-5 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <h2 className="font-serif text-4xl leading-tight md:text-6xl">Su caso merece tiempo y contexto.</h2>
            <p className="max-w-2xl text-lg leading-8 text-[#526078]">
              La información pública de Convergencia habla de un estudio ubicado en el centro de Talca, con orientación en distintas áreas del derecho. Este demo deja ese mensaje al frente: primero entender, después avanzar.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {points.map(([title, text], index) => (
              <article key={title} className="border-t-2 border-[#D4A64A] pt-5">
                <span className="font-mono text-xs text-[#8B651F]">0{index + 1}</span>
                <h3 className="mt-6 font-serif text-3xl">{title}</h3>
                <p className="mt-3 leading-7 text-[#526078]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="atencion" className="bg-[#E9E2D4] px-5 py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.24em] text-[#8B651F]">Atención</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl">Hablemos de lo importante.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#394761]">
            <p>Cuente brevemente qué necesita revisar y el equipo puede orientarle sobre el próximo paso.</p>
            <p className="text-base text-[#526078]">No se publica un teléfono ni un horario en las fuentes consultadas; por eso este demo dirige a la red social verificada.</p>
            <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#101A2B] px-5 font-semibold text-[#F7F3EA]">
              Ir a @convergenciaestudiojuridico
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#101A2B] px-5 py-20 text-[#F7F3EA] md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.24em] text-[#D4A64A]">Dónde encontrarlo</p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">En el centro de Talca.</h2>
            <p className="mt-5 max-w-xl leading-7 text-[#DCE2EC]">{BIZ.address}, {BIZ.city}.</p>
          </div>
          <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#D4A64A] px-5 font-semibold text-[#D4A64A]">
            Abrir en Google Maps
          </a>
        </div>
        <footer className="mx-auto mt-16 max-w-6xl border-t border-[#F7F3EA]/15 pt-6 text-xs text-[#AEB8C8]">
          {BIZ.name} · Talca, Región del Maule
        </footer>
      </section>
    </main>
  )
}
