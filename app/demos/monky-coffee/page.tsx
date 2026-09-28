import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { demoMetadata } from '../meta'
import { BIZ, HOURS, MAPS_URL, WA_LINK } from './content'
import { SiteNav, WhatsAppFab } from './chrome'

const display = localFont({ src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700' }] })
const body = localFont({ src: [{ path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900' }] })

export const metadata: Metadata = demoMetadata({
  slug: 'monky-coffee',
  title: 'Monky Coffee — Cafetería en Talca',
  description: 'Cafetería de especialidad en 1 Oriente #1385, Talca. Café, conversación y métodos de filtrado.',
})

function CoffeeScene() {
  return (
    <svg viewBox="0 0 640 480" className="h-full w-full" role="img" aria-label="Ilustración de una taza de café y granos sobre una mesa">
      <rect width="640" height="480" rx="28" fill="#E6D6B7" />
      <circle cx="488" cy="105" r="125" fill="#C8D4BC" />
      <path d="M0 343c135-44 222 10 337-15 119-26 195-7 303 43v109H0Z" fill="#16352B" />
      <ellipse cx="303" cy="315" rx="143" ry="45" fill="#0C251E" opacity=".35" />
      <path d="M182 214h218v84c0 55-46 91-109 91s-109-36-109-91Z" fill="#F7F3E9" stroke="#16352B" strokeWidth="7" />
      <path d="M400 240c84-14 91 82 9 90" fill="none" stroke="#F7F3E9" strokeWidth="28" />
      <path d="M217 226h148c-5 40-31 59-74 59s-69-19-74-59Z" fill="#6E3E27" />
      <path d="M249 205c-15-23 17-32 2-54m46 56c-15-23 17-32 2-54m45 55c-15-23 17-32 2-54" fill="none" stroke="#F7F3E9" strokeWidth="7" strokeLinecap="round" opacity=".8" />
      <ellipse cx="152" cy="371" rx="30" ry="18" fill="#A66C3A" transform="rotate(-25 152 371)" />
      <ellipse cx="464" cy="367" rx="30" ry="18" fill="#A66C3A" transform="rotate(25 464 367)" />
      <circle cx="521" cy="310" r="8" fill="#D5A441" /><circle cx="548" cy="335" r="5" fill="#D5A441" />
      <path d="M89 417h467" stroke="#D5A441" strokeWidth="5" opacity=".8" />
    </svg>
  )
}

const experiences = [
  { title: 'Café de especialidad', text: 'Granos de fincas sostenibles de América Latina y tostado artesanal.' },
  { title: 'Métodos que enseñan', text: 'Aeropress y cold brew: distintas formas de descubrir el café.' },
  { title: 'Un punto de encuentro', text: 'Talleres, catas y eventos culturales alrededor de una buena taza.' },
]

export default function MonkyCoffeePage() {
  return (
    <div className={`${body.className} min-h-screen bg-[#F7F3E9] text-[#16352B] antialiased`}>
      <SiteNav />
      <main>
        <section id="inicio" className="bg-[#16352B] text-[#F7F3E9]">
          <div className="mx-auto grid min-h-[720px] max-w-6xl items-end gap-10 px-5 pb-12 pt-28 md:grid-cols-[1.05fr_1fr] md:items-center md:px-8 md:pb-16">
            <div className="relative z-10">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-[#D5A441]">Cafetería · Talca · desde 2014</p>
              <h1 className={`${display.className} max-w-xl text-6xl font-bold leading-[0.92] tracking-[-0.06em] md:text-8xl`}>
                El café
                <br />
                <span className="text-[#D5A441]">se conversa.</span>
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#F7F3E9]">Monky Coffee es una cafetería de especialidad para tomar algo rico, aprender del café y quedarse un rato más.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#D5A441] px-5 py-3 text-sm font-extrabold text-[#16352B]">Escribir por WhatsApp</a>
                <a href="#cafe" className="rounded-full border border-[#F7F3E9]/60 px-5 py-3 text-sm font-bold text-[#F7F3E9]">Ver la experiencia</a>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full max-w-xl justify-self-end rounded-[28px] bg-[#E6D6B7] p-3 shadow-2xl md:p-5">
              <CoffeeScene />
              <span className="absolute bottom-6 left-6 rounded-full bg-[#16352B] px-3 py-1.5 text-xs font-bold text-[#F7F3E9]">Talca · café de especialidad</span>
            </div>
          </div>
        </section>

        <section id="cafe" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9A6B13]">Más que una taza</p>
            <h2 className={`${display.className} text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl`}>Un café con curiosidad, oficio y comunidad.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {experiences.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-[#16352B]/15 bg-[#E8E1D1] p-6">
                <span className="text-4xl font-bold text-[#9A6B13]/45" aria-hidden="true">0{index + 1}</span>
                <h3 className={`${display.className} mt-8 text-2xl font-bold text-[#16352B]`}>{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#355449]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="casa" className="bg-[#D5A441]">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 md:grid-cols-[.9fr_1.1fr] md:items-center md:px-8 md:py-24">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#16352B]">Diez años de historia</p>
              <h2 className={`${display.className} text-4xl font-bold leading-tight tracking-[-0.05em] text-[#16352B] md:text-6xl`}>Un rincón para volver.</h2>
            </div>
            <div className="border-l border-[#16352B]/45 pl-6 text-base leading-relaxed text-[#16352B] md:pl-10">
              <p>Desde 2014, Monky Coffee se ha consolidado en Talca como un punto de encuentro para quienes buscan café de especialidad, conversación y experiencias alrededor del grano.</p>
              <p className="mt-5 font-semibold">Ven a probar un método distinto o simplemente a disfrutar tu café favorito.</p>
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#9A6B13]">La casa está en Talca</p>
              <h2 className={`${display.className} text-4xl font-bold tracking-[-0.05em] md:text-5xl`}>1 Oriente con 3 Norte.</h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#355449]">{BIZ.address}, {BIZ.city}, {BIZ.region}.</p>
              <div className="mt-4 grid max-w-md gap-2 text-sm font-semibold sm:grid-cols-3">
                {HOURS.map((hour) => <p key={hour.days}><span className="block text-xs font-normal text-[#527064]">{hour.days}</span>{hour.time}</p>)}
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#16352B] px-5 py-3 text-sm font-bold text-[#F7F3E9]">WhatsApp</a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="rounded-full border border-[#16352B]/25 px-5 py-3 text-sm font-bold text-[#16352B]">Cómo llegar</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#0D241D] px-5 py-8 text-[#F7F3E9] md:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm md:flex-row md:items-center md:justify-between">
          <div><p className="font-bold">{BIZ.name}</p><p className="mt-1 text-xs text-[#D5A441]">Cafetería · Talca</p></div>
          <div className="flex flex-wrap gap-4 text-xs font-semibold"><a href={BIZ.instagram}>Instagram</a><a href={BIZ.facebook}>Facebook</a><a href={WA_LINK}>WhatsApp</a></div>
        </div>
      </footer>
      <WhatsAppFab />
    </div>
  )
}
