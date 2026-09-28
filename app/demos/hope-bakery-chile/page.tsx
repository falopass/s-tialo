import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BIZ, HOURS, MAPS_URL, WA_LINK } from './content'
import { SiteNav, WhatsAppFab } from './chrome'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
})
const body = localFont({
  src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'hope-bakery-chile',
  title: 'Hope Bakery Chile — Panadería y pastelería artesanal en Talca',
  description: 'Panadería y pastelería artesanal de masa madre en Talca. Consulta a Hope Bakery Chile por WhatsApp.',
})

function BreadScene() {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" role="img" aria-label="Ilustración de panes artesanales y una bandeja de pastelería">
      <rect width="640" height="480" rx="28" fill="#F2C879" />
      <circle cx="492" cy="96" r="128" fill="#F8DF9F" opacity=".8" />
      <path d="M0 350c130-54 188 26 302-23 114-49 180-44 338 29v124H0Z" fill="#A74728" opacity=".92" />
      <ellipse cx="210" cy="300" rx="150" ry="80" fill="#FFF1D8" />
      <path d="M85 284c18-65 76-102 137-75 50 22 66 84 27 113-50 37-146 24-164-38Z" fill="#B86532" />
      <path d="M114 250c30 15 45 37 48 66m-2-82c32 12 51 35 57 65m-4-77c29 6 51 26 65 51" stroke="#F8D995" strokeWidth="10" strokeLinecap="round" />
      <ellipse cx="414" cy="324" rx="137" ry="57" fill="#4A2518" opacity=".35" />
      <path d="M318 303c16-48 61-67 103-52 43 15 65 61 42 88-29 34-117 32-145-4Z" fill="#E9A04A" />
      <path d="M342 280c19 12 31 27 36 49m4-61c20 10 34 27 41 49m4-58c19 7 35 21 46 41" stroke="#FFE1A4" strokeWidth="8" strokeLinecap="round" />
      <circle cx="525" cy="276" r="44" fill="#FFF8EE" />
      <path d="M503 275h44M525 253v44" stroke="#A74728" strokeWidth="7" strokeLinecap="round" />
      <path d="M92 399h455" stroke="#FFF8EE" strokeWidth="5" opacity=".65" />
    </svg>
  )
}

const cards = [
  { title: 'Masa madre de cultivo', text: 'Pan elaborado con 100% masa madre de cultivo.' },
  { title: 'Panadería artesanal', text: 'Una propuesta artesanal con productos de calidad y producción orgánica.' },
  { title: 'Pastelería', text: 'Un espacio para encontrar panadería y pastelería artesanal en Talca.' },
]

export default function HopeBakeryPage() {
  return (
    <div className={`${body.className} min-h-screen bg-[#FFF8EE] text-[#301A13] antialiased`}>
      <SiteNav />
      <main>
        <section id="inicio" className="relative overflow-hidden bg-[#4A2518]">
          <div className="mx-auto grid min-h-[720px] max-w-6xl items-end gap-10 px-5 pb-12 pt-28 md:grid-cols-[1fr_1.05fr] md:items-center md:px-8 md:pb-16">
            <div className="relative z-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#F2C879]">Panadería · Pastelería · Talca</p>
              <h1 className={`${display.className} max-w-xl text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-[#FFF8EE] md:text-7xl`}>
                Hecho lento.
                <br />
                <span className="text-[#F2C879]">Hecho con esperanza.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#FFF8EE]">
                {BIZ.name}: panadería y pastelería artesanal, con masa madre de cultivo y una vitrina hecha para volver.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#F2C879] px-5 py-3 text-sm font-extrabold text-[#301A13]">
                  Escribir por WhatsApp
                </a>
                <a href="#elaboramos" className="rounded-full border border-[#FFF8EE]/60 px-5 py-3 text-sm font-bold text-[#FFF8EE]">
                  Conocer la panadería
                </a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-xl justify-self-end rounded-[28px] bg-[#F2C879] p-3 shadow-2xl md:p-5">
              <BreadScene />
              <span className="absolute bottom-6 left-6 rounded-full bg-[#FFF8EE] px-3 py-1.5 text-xs font-bold text-[#4A2518]">Artesanal · orgánico</span>
            </div>
          </div>
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border-[40px] border-[#A74728]/40" aria-hidden="true" />
        </section>

        <section id="elaboramos" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#A74728]">Lo que sí está confirmado</p>
            <h2 className={`${display.className} text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl`}>
              Una panadería con oficio, sin apuro.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {cards.map((card, index) => (
              <article key={card.title} className="rounded-2xl border border-[#4A2518]/15 bg-[#FFF1D8] p-6">
                <span className="text-4xl font-bold text-[#A74728]/35" aria-hidden="true">0{index + 1}</span>
                <h3 className={`${display.className} mt-8 text-2xl font-semibold text-[#4A2518]`}>{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5F3A2B]">{card.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="historia" className="bg-[#A74728] text-[#FFF8EE]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8 md:py-24">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#F2C879]">Una forma de hacer</p>
              <h2 className={`${display.className} text-4xl font-semibold leading-tight tracking-[-0.03em] md:text-6xl`}>
                Calidad que se nota desde el primer corte.
              </h2>
            </div>
            <div className="border-l border-[#FFF8EE]/35 pl-6 text-base leading-relaxed text-[#FFF8EE] md:pl-10">
              <p>La ficha pública describe a Hope Bakery Chile como una panadería y pastelería artesanal, elaborada con productos de calidad y producción orgánica, sin aditivos químicos.</p>
              <p className="mt-5 text-[#FFE6B2]">Cuando quieras saber qué salió hoy de la cocina, escríbeles directamente.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#A74728]">Encuéntrala en Talca</p>
              <h2 className={`${display.className} text-4xl font-semibold tracking-[-0.03em] md:text-5xl`}>Pasa por la vitrina o consulta antes.</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#5F3A2B]">{BIZ.address}, {BIZ.city}, {BIZ.region}.</p>
              <p className="mt-2 text-sm font-semibold text-[#4A2518]">{HOURS[0].days}: {HOURS[0].time}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#A74728] px-5 py-3 text-sm font-bold text-white">WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#4A2518]/25 px-5 py-3 text-sm font-bold text-[#4A2518]">Cómo llegar</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#301A13] px-5 py-8 text-[#FFF8EE] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <div><p className="font-bold">{BIZ.name}</p><p className="mt-1 text-xs text-[#F2C879]">Panadería y pastelería artesanal · Talca</p></div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold"><a href={BIZ.instagram}>Instagram</a><a href={BIZ.facebook}>Facebook</a><a href={WA_LINK}>WhatsApp</a></div>
        </div>
      </footer>
      <WhatsAppFab />
    </div>
  )
}
