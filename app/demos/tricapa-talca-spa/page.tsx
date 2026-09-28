import type { Metadata } from 'next'
import { demoMetadata } from '../meta'
import { Chrome } from './chrome'
import { BIZ, MAPS_URL, WA_LINK } from './content'

export const metadata: Metadata = demoMetadata({
  slug: 'tricapa-talca-spa',
  title: 'Tricapa Talca — pintura y desabolladura',
  description: 'Tricapa Talca: pintura, desabolladura y venta de repuestos en Talca.',
})

function CarScene() {
  return (
    <svg viewBox="0 0 620 360" className="w-full" aria-hidden="true">
      <path d="M78 242h465l-26 45H105l-27-45Z" fill="#F0B323" />
      <path d="m152 242 47-86c7-13 19-21 34-21h130c17 0 30 8 40 22l55 85H152Z" fill="#D9DEE0" />
      <path d="m225 153-37 70h102v-70h-65Zm81 0v70h122l-42-70h-80Z" fill="#28353D" />
      <path d="M120 242h380" stroke="#17191B" strokeWidth="9" strokeLinecap="round" />
      <circle cx="175" cy="278" r="28" fill="#17191B" stroke="#F5F2E9" strokeWidth="8" />
      <circle cx="445" cy="278" r="28" fill="#17191B" stroke="#F5F2E9" strokeWidth="8" />
      <path d="M32 303h556" stroke="#F5F2E9" strokeWidth="3" opacity=".5" />
      <path d="M58 324h110m28 0h180m26 0h120" stroke="#F0B323" strokeWidth="5" strokeLinecap="round" />
    </svg>
  )
}

const services = [
  ['01', 'Desabolladura', 'Recuperar la forma del vehículo después de un golpe.'],
  ['02', 'Pintura automotriz', 'Dejar la superficie lista para volver a la ruta.'],
  ['03', 'Venta de repuestos', 'Consultar por la pieza que necesita para su vehículo.'],
]

export default function TricapaTalcaPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F5F2E9] text-[#17191B]">
      <Chrome />
      <section className="relative overflow-hidden bg-[#17191B] px-5 pb-10 pt-32 text-[#F5F2E9] md:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-end gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#F0B323]">Taller automotriz · Talca</p>
              <h1 className="mt-5 max-w-2xl text-[clamp(3.2rem,9vw,7rem)] font-black uppercase leading-[.84] tracking-[-.06em]">
                Vuelve a <span className="text-[#F0B323]">brillar.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-[#D5D9D9]">
                {BIZ.name}: {BIZ.rubro.toLowerCase()} para volver a moverse con confianza.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#F0B323] px-5 font-bold text-[#17191B]">
                  Cotizar por WhatsApp
                </a>
                <a href="#servicios" className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#F5F2E9]/50 px-5 font-bold text-[#F5F2E9]">
                  Ver servicios
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] border border-[#F0B323]/35 bg-[#23282C] p-5 text-[#F0B323] md:p-8">
              <CarScene />
              <p className="mt-3 border-t border-[#F5F2E9]/15 pt-4 font-mono text-[11px] uppercase tracking-[.18em] text-[#D5D9D9]">
                Pintura · desabolladura · repuestos
              </p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 border-t border-[#F5F2E9]/15 text-sm md:grid-cols-4">
            <div className="border-r border-[#F5F2E9]/15 py-4 pr-4"><span className="block text-xs text-[#9EA7AA]">Ubicación</span><strong className="mt-1 block">Talca, Maule</strong></div>
            <div className="border-r border-[#F5F2E9]/15 px-4 py-4"><span className="block text-xs text-[#9EA7AA]">Google</span><strong className="mt-1 block">{BIZ.reviews} reseñas</strong></div>
            <div className="border-r border-[#F5F2E9]/15 px-4 py-4"><span className="block text-xs text-[#9EA7AA]">Consulta</span><strong className="mt-1 block">WhatsApp</strong></div>
            <div className="py-4 pl-4"><span className="block text-xs text-[#9EA7AA]">Teléfono</span><strong className="mt-1 block">{BIZ.phoneDisplay}</strong></div>
          </div>
        </div>
      </section>

      <section id="servicios" className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#9B7118]">Qué hacen</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-.04em] md:text-6xl">El trabajo se nota.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#4A555A]">La ficha de Google presenta a Tricapa Talca como un taller de pintura, desabolladura y venta de repuestos. Aquí esos tres servicios son el centro de la página.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {services.map(([number, title, text]) => (
              <article key={number} className="min-h-[220px] border-2 border-[#17191B] bg-white p-6">
                <span className="font-mono text-sm text-[#9B7118]">{number}</span>
                <h3 className="mt-16 text-2xl font-black uppercase">{title}</h3>
                <p className="mt-3 leading-7 text-[#4A555A]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="proceso" className="bg-[#F0B323] px-5 py-20 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#59430C]">Antes de reparar</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-[.9] tracking-[-.05em] md:text-6xl">Mande una foto.</h2>
          </div>
          <div className="text-lg leading-8 text-[#3D3010]">
            <p>Cuéntenos qué pasó y envíe imágenes del vehículo. Le responderemos por WhatsApp para revisar el siguiente paso.</p>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#17191B] px-5 font-bold text-[#F5F2E9]">
              Escribir ahora
            </a>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#17191B] px-5 py-20 text-[#F5F2E9] md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[.22em] text-[#F0B323]">Visítelos</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[.9] tracking-[-.05em] md:text-6xl">Talca, directo al taller.</h2>
            <p className="mt-5 max-w-xl leading-7 text-[#D5D9D9]">{BIZ.address}, {BIZ.city}, {BIZ.region}.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href={MAPS_URL} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm border border-[#F0B323] px-5 font-bold text-[#F0B323]">Abrir mapa</a>
            <a href={WA_LINK} target="_blank" rel="noreferrer" className="inline-flex min-h-[48px] items-center justify-center rounded-sm bg-[#F0B323] px-5 font-bold text-[#17191B]">WhatsApp</a>
          </div>
        </div>
        <footer className="mx-auto mt-16 max-w-6xl border-t border-[#F5F2E9]/15 pt-6 text-xs text-[#9EA7AA]">
          {BIZ.name} · {BIZ.phoneDisplay} · {BIZ.reviews} reseñas en Google
        </footer>
      </section>
    </main>
  )
}
