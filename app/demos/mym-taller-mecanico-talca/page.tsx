import type { Metadata } from 'next'
import Image from 'next/image'
import { WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, MAPS_URL, PHOTO, WA_LINK } from './content'
import { Footer, Header } from './chrome'

export const metadata: Metadata = demoMetadata({
  slug: 'mym-taller-mecanico-talca',
  title: 'MyM Taller mecánico y mecánica a domicilio | Talca',
  description: 'Mecánica automotriz en taller y a domicilio en Talca. Revisa la ubicación y el horario de MyM.',
  image: PHOTO,
})

export default function MyMTallerDemo() {
  return (
    <div className="bg-[#F2F3EC] text-[#152019]">
      <Header />
      <main>
        <section id="inicio" className="relative flex min-h-[760px] items-end overflow-hidden bg-[#101714] pt-24 md:min-h-[820px]">
          <Image src={PHOTO} alt={BIZ.photoAlt} fill priority unoptimized sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101714] via-[#101714]/65 to-[#101714]/20" />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-28 text-white md:px-8 md:pb-20">
            <p className="mb-5 inline-flex rounded-full border border-[#D2F36B]/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#D2F36B]" style={{ backgroundColor: 'rgba(16,23,20,0.92)' }}>
              Mecánica automotriz · Talca
            </p>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.04] tracking-tight sm:text-5xl md:text-7xl">
              Tu taller,<br className="hidden sm:block" /> o atención a domicilio.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-lg" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {BIZ.name}. Consulta por WhatsApp y cuéntanos qué necesita tu auto.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#D2F36B] px-6 text-sm font-bold text-[#172016] hover:bg-[#e1ff87]">
              Consultar por WhatsApp
            </a>
            <p className="mt-4 text-sm" style={{ color: 'rgba(255,255,255,0.9)' }}>{BIZ.phone}</p>
          </div>
        </section>

        <section id="servicios" className="px-5 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#435541]">Cómo te podemos atender</p>
            <div className="mt-4 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
              <h2 className="max-w-md text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                Mecánica para tu auto, en Talca.
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {BIZ.services.map((service, index) => (
                  <article key={service} className="min-h-36 border border-[#D3D8CC] bg-white p-5 sm:p-6">
                    <p className="text-xs font-bold tracking-[0.12em] text-[#4A6248]">0{index + 1}</p>
                    <h3 className="mt-5 text-lg font-bold leading-snug">{service}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="bg-[#17221B] px-5 py-14 text-white md:px-8 md:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#D2F36B]">Visítanos</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Ubicación y contacto</h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>{BIZ.address}</p>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex h-11 items-center rounded-full border border-white/50 px-5 text-sm font-semibold hover:bg-white/10">
                Abrir en Google Maps
              </a>
            </div>
            <div>
              <h3 className="text-lg font-bold">Horario publicado</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {BIZ.hours.map(({ days, time }) => (
                  <div key={days} className="flex justify-between gap-4 border-b border-white/15 pb-2">
                    <dt style={{ color: 'rgba(255,255,255,0.92)' }}>{days}</dt><dd className="shrink-0 font-semibold">{time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WaFab href={WA_LINK} label="Contactar a MyM por WhatsApp" />
    </div>
  )
}
