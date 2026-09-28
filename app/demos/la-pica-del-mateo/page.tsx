import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, STACK, PRICES, VALUES } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/onest/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Paleta del demo: azul distribución, gris acero, blanco y cian.
 * Regla de formas: tarjetas grandes radio 2rem que se apilan (sticky)
 * como capas de un despacho; el cian solo marca datos y acciones.
 */
const C = {
  blue: '#1F5673',
  deep: '#123547',
  gray: '#6E7B8B',
  cyan: '#3CC4DC',
  mist: '#EEF3F6',
  white: '#FFFFFF',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3CC4DC]'
const BTN_WA = `inline-flex items-center justify-center gap-2 rounded-full bg-[#3CC4DC] text-[#123547] font-bold transition-transform hover:-translate-y-0.5 active:scale-95 ${FOCUS}`
const BTN_LINE = `inline-flex items-center justify-center rounded-full border border-white/40 text-white font-semibold transition-colors hover:bg-white/10 ${FOCUS}`
const TAG = 'inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]'

export const metadata: Metadata = demoMetadata({
  slug: 'la-pica-del-mateo',
  title: 'La Pica del Mateo - Restaurante familiar en San Clemente',
  description: 'Restaurante familiar en Carlos Silva Renard 883, San Clemente: empanadas por docena, colación del día y pedidos para grupos por WhatsApp.',
  image: '/demos/la-pica-del-mateo/hero.webp',
})

const NAV = [
  { label: 'La carta', href: '#carta' },
  { label: 'El local', href: '#local' },
  { label: 'Por volumen', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function LaPicaDelMateoPage() {
  return (
    <div className={`${body.className} bg-[#EEF3F6] text-[#123547] antialiased`}>
      {/* ── Hero a sangre ── */}
      <header id="inicio" className="relative min-h-[100svh] overflow-hidden bg-[#123547]">
        <Image src={`${IMG}/hero.webp`} alt="" fill priority sizes="100vw" className="object-cover" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${C.deep}cc 0%, ${C.deep}55 40%, ${C.deep}f2 100%)` }}
        />
        <nav className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-6 flex items-center justify-between gap-4" aria-label="Principal">
          <a href="#inicio" className={`${display.className} text-white text-sm md:text-base font-bold tracking-tight rounded-sm ${FOCUS}`}>
            La Pica <span className="text-[#3CC4DC]">del Mateo</span>
          </a>
          <ul className="hidden md:flex gap-7 text-sm text-white/80">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`hover:text-white rounded-sm ${FOCUS}`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} px-4 py-2 text-sm`}>
            Pedir
          </a>
        </nav>

        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 pt-[22svh] pb-16">
          <p className={`${TAG} bg-white/10 text-white backdrop-blur-sm border border-white/20`}>
            {BIZ.rubro} · {BIZ.city}
          </p>
          <h1 className={`${display.className} mt-6 max-w-[14ch] text-white text-[2.6rem] leading-[1.02] sm:text-6xl md:text-7xl font-extrabold tracking-tight`}>
            Harta comida, <span className="text-[#3CC4DC]">bien servida</span> y a la hora.
          </h1>
          <p className="mt-6 max-w-[36rem] text-base md:text-lg text-white/80 leading-relaxed">
            Cocina chilena para la familia, la cuadrilla o la oficina. Pide por docena, por bandeja o
            por mesa completa, directo por WhatsApp.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} px-7 py-3 md:py-4 text-base`}>
              Hacer un pedido por WhatsApp
            </a>
            <a href="#carta" className={`${BTN_LINE} px-7 py-3 md:py-4 text-base`}>Ver la carta</a>
          </div>

          <dl className="mt-14 grid grid-cols-3 max-w-[34rem] divide-x divide-white/20 border-y border-white/20 text-white">
            <div className="py-4 pr-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/80">Google Maps</dt>
              <dd className={`${display.className} mt-1 text-2xl font-bold`}>{BIZ.reviews} <span className="text-sm font-medium">reseñas</span></dd>
            </div>
            <div className="py-4 px-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/80">Facebook</dt>
              <dd className={`${display.className} mt-1 text-2xl font-bold`}>{BIZ.followers}</dd>
            </div>
            <div className="py-4 pl-4">
              <dt className="text-[11px] uppercase tracking-[0.16em] text-white/80">Comuna</dt>
              <dd className={`${display.className} mt-1 text-base md:text-lg font-bold leading-tight`}>{BIZ.city}</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ── Carta en tarjetas apiladas ── */}
      <section id="carta" className="max-w-[1200px] mx-auto px-5 md:px-8 pt-24 md:pt-32">
        <Reveal className="max-w-[44rem]">
          <p className={`${TAG} bg-[#1F5673] text-white`}>La carta · formatos de muestra</p>
          <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
            Una capa por pedido. <span className="text-[#556270]">Del plato suelto a la bandeja.</span>
          </h2>
        </Reveal>

        <ol className="mt-14 pb-24">
          {STACK.map((c, i) => (
            <li
              key={c.n}
              className="sticky mb-8 md:mb-14"
              style={{ top: `calc(1.25rem + ${i * 1.4}rem)`, zIndex: i + 1 }}
            >
              <article
                className="grid md:grid-cols-[1.15fr_1fr] overflow-hidden rounded-[2rem] min-h-[70svh] md:min-h-[32rem] shadow-[0_-12px_40px_-18px_rgba(18,53,71,0.55)]"
                style={{ backgroundColor: i % 2 ? C.blue : C.white, color: i % 2 ? C.white : C.deep }}
              >
                <div className="relative min-h-[16rem] md:min-h-full">
                  <Image src={`${IMG}/${c.img}`} alt={c.alt} fill sizes="(min-width: 768px) 55vw, 100vw" className="object-cover" />
                  <span className={`${display.className} absolute top-5 left-5 rounded-full bg-[#123547] text-white text-xs font-bold px-3 py-1.5`}>
                    {c.n} / 0{STACK.length}
                  </span>
                </div>
                <div className="p-7 md:p-12 flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className={`${TAG} ${i % 2 ? 'bg-white/15 text-white' : 'bg-[#EEF3F6] text-[#1F5673]'}`}>{c.tag}</span>
                    <span className={`text-[11px] uppercase tracking-[0.16em] ${i % 2 ? 'text-white/80' : 'text-[#556270]'}`}>Muestra</span>
                  </div>
                  <h3 className={`${display.className} mt-5 text-2xl md:text-4xl font-bold tracking-tight leading-tight`}>{c.title}</h3>
                  <p className={`mt-4 text-base md:text-lg leading-relaxed ${i % 2 ? 'text-white/80' : 'text-[#556270]'}`}>{c.desc}</p>
                  <div className={`mt-auto pt-8 flex items-end gap-4 border-t ${i % 2 ? 'border-white/20' : 'border-[#123547]/10'}`}>
                    <span className={`${display.className} text-5xl md:text-6xl font-extrabold leading-none ${i % 2 ? 'text-[#3CC4DC]' : 'text-[#1F5673]'}`}>{c.stat}</span>
                    <span className={`pb-1 text-sm leading-snug ${i % 2 ? 'text-white/80' : 'text-[#556270]'}`}>{c.statLabel}</span>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Sobre el negocio ── */}
      <section id="local" className="bg-[#123547] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image
                src={`${IMG}/detalle1.webp`}
                alt="Fachada de La Pica del Mateo en San Clemente, con árboles en la vereda"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${TAG} bg-white/10 text-white`}>El local</p>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
              En San Clemente, a la entrada de la cordillera.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-white/75">
              La Pica del Mateo está en {BIZ.address}. Un restaurante familiar donde atiende la misma gente
              que cocina: pides, te dicen cuánto y a qué hora queda listo.
            </p>
            <ul className="mt-10 space-y-5">
              {VALUES.map((v, i) => (
                <li key={v.title} className="flex gap-4">
                  <span className={`${display.className} shrink-0 w-10 h-10 rounded-full bg-[#3CC4DC] text-[#123547] text-sm font-bold flex items-center justify-center`}>
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold text-white">{v.title}</p>
                    <p className="text-sm text-white/65 leading-relaxed">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-white/75">
              {BIZ.reviews} reseñas en Google Maps y {BIZ.followers} seguidores en{' '}
              <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className={`underline underline-offset-4 hover:text-white rounded-sm ${FOCUS}`}>
                Facebook
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Precios por volumen ── */}
      <section id="precios" className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32">
        <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[40rem]">
            <p className={`${TAG} bg-[#1F5673] text-white`}>Precios por volumen</p>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
              Mientras más pides, mejor sale.
            </h2>
          </div>
          <p className="max-w-[22rem] text-sm text-[#556270] leading-relaxed">
            Tabla de muestra: los productos y montos reales los define {BIZ.name}. Aquí se ve cómo se
            ordenarían por tramo de cantidad.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-12">
          <div className="overflow-x-auto rounded-[2rem] bg-white shadow-[0_20px_50px_-30px_rgba(18,53,71,0.45)]">
            <table className="w-full min-w-[40rem] text-left">
              <caption className="sr-only">Precios de referencia por volumen (muestra)</caption>
              <thead>
                <tr className="bg-[#1F5673] text-white text-xs uppercase tracking-[0.14em]">
                  <th scope="col" className="px-6 py-4 font-semibold">Producto</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Tramo 1</th>
                  <th scope="col" className="px-6 py-4 font-semibold">Tramo 2</th>
                  <th scope="col" className="px-6 py-4 font-semibold bg-[#123547] text-[#3CC4DC]">Tramo 3 · mejor precio</th>
                </tr>
              </thead>
              <tbody>
                {PRICES.map((p) => (
                  <tr key={p.item} className="border-t border-[#123547]/10">
                    <th scope="row" className={`${display.className} px-6 py-5 text-sm md:text-base font-bold`}>{p.item}</th>
                    {p.tiers.map((t) => (
                      <td key={t} className="px-6 py-5">
                        <p className="text-sm font-semibold">{t}</p>
                        <p className="text-xs text-[#556270]">Precio a confirmar</p>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* ── Contacto ── */}
      <section id="contacto" className="bg-[#1F5673] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 py-24 md:py-32 grid md:grid-cols-[1fr_1.1fr] gap-12 items-stretch">
          <Reveal className="flex flex-col">
            <p className={`${TAG} bg-white/10 text-white self-start`}>Contacto</p>
            <h2 className={`${display.className} mt-5 text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]`}>
              Dinos cuánto y para cuándo.
            </h2>
            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed">
              Escribe por WhatsApp con la cantidad y la hora de retiro. Te confirman el pedido directo.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${BTN_WA} mt-9 px-8 py-3 md:py-4 text-base md:text-lg self-start`}>
              WhatsApp {BIZ.phoneDisplay}
            </a>
            <address className="not-italic mt-auto pt-12 text-white/80 leading-relaxed">
              <span className="block text-[11px] uppercase tracking-[0.16em] text-white/80 mb-2">Dirección</span>
              {BIZ.address}
              <br />
              {BIZ.postal} {BIZ.city}, {BIZ.region}
              <br />
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className={`inline-block mt-3 font-semibold text-white underline underline-offset-4 rounded-sm ${FOCUS}`}>
                Cómo llegar en Google Maps
              </a>
            </address>
          </Reveal>
          <Reveal delay={120}>
            <div className="h-full min-h-[22rem] overflow-hidden rounded-[2rem] border border-white/15">
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.address}, ${BIZ.city}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[22rem] border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="bg-[#123547] text-white">
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 pt-8 pb-24">
          <p className={`${display.className} text-lg font-bold`}>{BIZ.name}</p>
          <address className="not-italic mt-2 text-sm leading-relaxed text-white/80">
            {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
          </address>
          <p className="mt-4 text-xs leading-relaxed text-white/70">
            Datos de contacto y reseñas reales; carta, precios y textos de muestra.
          </p>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
