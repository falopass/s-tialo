import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

// La crema de la leche + el naranjo del logo Dislac (vaca naranjo sobre
// negro). Mono para los datos de mostrador: precio justo, sin adornos.
const C = {
  crema: '#FAF3E4',
  crema2: '#F3EAD2',
  card: '#FFFDF6',
  ink: '#211A10',
  muted: '#6E6350',
  naranjo: '#E8720C',
  naranjoInk: '#9C4A00',
  negro: '#14100A',
  line: 'rgba(33,26,16,0.16)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'dislac-distribuidora',
  title: 'Dislac Distribuidora — Lácteos del sur a precio de distribuidor en Talca',
  description:
    'Dislac Distribuidora, 21 Oriente 1080, Talca. Quesos mantecosos, cecinas, manjar y productos de Quillayes, Surlat, Lácteos Osorno y más. Venta en local, retiro y delivery.',
  image: `${IMG}/logo.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Reparto', href: '#reparto' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Categorías reales del catálogo que publicaban en dislac.cl.
const VITRINA = [
  {
    t: 'Quesos mantecosos',
    d: 'La especialidad de la casa: queso fresco y mantecoso por unidad o al trozo.',
    img: 'bosquejo-quesos',
    alt: 'Bosquejo: ruedas de queso mantecoso sobre tabla de madera',
    tag: 'vitrina 01',
  },
  {
    t: 'Cecinas y embutidos',
    d: 'Jamón artesanal, longanizas y queso de cabeza para el colado.',
    img: 'bosquejo-cecinas',
    alt: 'Bosquejo: cecinas y manjar sobre papel estraza',
    tag: 'vitrina 02',
  },
  {
    t: 'Manjar y minitortas',
    d: 'Manjar en frasco, minitortas y los dulces de siempre.',
    img: 'bosquejo-mostrador',
    alt: 'Bosquejo: vitrina refrigerada con quesos y frascos de manjar',
    tag: 'vitrina 03',
  },
  {
    t: 'Productos especiales',
    d: 'Quesos especiales, tablas armadas y jugos para el negocio o la casa.',
    img: 'bosquejo-tablas',
    alt: 'Bosquejo: tabla de quesos especiales con jugos',
    tag: 'vitrina 04',
  },
]

// Marcas que distribuyen, de su propio catálogo.
const MARCAS = ['Quillayes', 'Surlat', 'Lácteos Osorno', 'Dulcelé', 'Haciendas de Ñuble', 'Pahuilmo']

const HORARIO = [
  ['Lunes a viernes', '8:30 – 18:30'],
  ['Sábado y domingo', 'Cerrado'],
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8720C]'

function BosquejoBadge() {
  return (
    <span
      className={`${mono.className} absolute top-2 left-2 z-10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.14em]`}
      style={{ backgroundColor: C.negro, color: C.crema }}
    >
      Bosquejo
    </span>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.crema, color: C.ink }}>
      <style>{`
        @keyframes dl-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .dl-marquee { animation: dl-marquee 30s linear infinite }
        @media (prefers-reduced-motion: reduce) { .dl-marquee { animation: none } }
      `}</style>
      <BlitzNav
        name={BIZ.short}
        logoSrc={`${IMG}/logo.webp`}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(250,243,228,0.92)',
          ink: C.ink,
          line: C.line,
          btnBg: C.naranjo,
          btnInk: '#FFF6E6',
        }}
      />

      {/* Hero: el sello de la vaca sobre crema, como su logo */}
      <section id="inicio" className="relative overflow-hidden px-5 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="absolute inset-0 -z-10" aria-hidden="true"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, ${C.crema} 0px, ${C.crema} 42px, ${C.crema2} 42px, ${C.crema2} 84px)`,
          }}
        />
        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}`}
              className="mx-auto w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-4"
              style={{ borderColor: C.naranjo }}
            />
            <p className={`${mono.className} mt-5 text-[11px] md:text-xs uppercase tracking-[0.3em]`} style={{ color: C.naranjoInk }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} mt-3 text-[44px] leading-[0.95] sm:text-[64px] md:text-[80px] font-semibold uppercase tracking-tight`}>
              Los lácteos del sur,
              <br />
              <span style={{ color: C.naranjo }}>al precio de</span>
              <br />
              distribuidor
            </h1>
            <p className="mt-5 text-[15px] md:text-base max-w-md mx-auto" style={{ color: C.muted }}>
              Quesos mantecosos, cecinas, manjar y las marcas del sur en un solo
              mostrador: 21 Oriente 1080, Talca.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 inline-flex items-center gap-2.5 border rounded-full px-4 py-2" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <Stars value={BIZ.rating} color={C.naranjo} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[12px] font-semibold`}>{BIZ.rating.toFixed(1)}</span>
              <span className="text-[12px]" style={{ color: C.muted }}>
                “Muy buenos precios” — reseña en Google
              </span>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={TEL_LINK}
                className={`min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-semibold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.naranjo, color: '#FFF6E6' }}
              >
                Llamar al {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[48px] inline-flex items-center justify-center px-7 rounded-full border tap-44 ${FOCUS}`}
                style={{ borderColor: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cinta de marcas que distribuyen */}
      <div className="overflow-hidden py-3 border-y" style={{ backgroundColor: C.negro, borderColor: C.negro }} aria-hidden="true">
        <div className="dl-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center">
              {MARCAS.map((m) => (
                <span key={`${dup}-${m}`} className={`${mono.className} mx-6 text-[13px] uppercase tracking-[0.22em]`} style={{ color: C.crema }}>
                  {m} <span className="ml-6" style={{ color: C.naranjo }}>●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* La vitrina */}
      <section id="vitrina" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.naranjoInk }}>
              De la vitrina
            </p>
            <h2 className={`${display.className} mt-3 text-[36px] sm:text-[52px] leading-none font-semibold uppercase tracking-tight`}>
              Lo que encuentra en el mostrador
            </h2>
            <p className="mt-4 max-w-lg text-[15px]" style={{ color: C.muted }}>
              Las líneas que publican en su catálogo. Confirme stock y precio del
              día llamando directo al local.
            </p>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 gap-5 md:gap-7">
            {VITRINA.map((v, i) => (
              <Reveal key={v.t} delay={i * 60}>
                <article className="group overflow-hidden rounded-2xl border" style={{ borderColor: C.line, backgroundColor: C.card }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <BosquejoBadge />
                    <Image
                      src={`${IMG}/${v.img}.webp`}
                      alt={v.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, 480px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="p-5">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.25em]`} style={{ color: C.naranjoInk }}>
                      {v.tag}
                    </p>
                    <h3 className={`${display.className} mt-1.5 text-2xl font-semibold uppercase`}>{v.t}</h3>
                    <p className="mt-1.5 text-[14px] leading-snug" style={{ color: C.muted }}>{v.d}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-center text-[12px]" style={{ color: C.muted }}>
            Fotos marcadas «bosquejo»: se reemplazan por fotos reales de la vitrina al activar el sitio.
          </p>
        </div>
      </section>

      {/* Las plantas detrás del mostrador */}
      <section id="marcas" className="px-5 py-20 md:py-24" style={{ backgroundColor: C.negro }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.naranjo }}>
              Directo de las plantas
            </p>
            <h2 className={`${display.className} mt-3 text-[34px] sm:text-[46px] leading-[1.02] font-semibold uppercase tracking-tight`} style={{ color: C.crema }}>
              Las marcas del Maule y el sur en un solo lugar
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgba(250,243,228,0.72)' }}>
              Dislac trabaja como distribuidora: trae los productos de las plantas
              a su local de 21 Oriente, y de ahí a su casa o a su negocio.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {MARCAS.map((m) => (
                <li key={m} className="flex items-center gap-2.5 text-[15px] font-medium" style={{ color: C.crema }}>
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.naranjo }} aria-hidden="true" />
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-2xl p-8 md:p-10 text-center" style={{ backgroundColor: C.card }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${IMG}/surlat.webp`} alt="Logo de Surlat, marca distribuida por Dislac" className="mx-auto w-full max-w-[280px] h-auto" />
              <p className={`${mono.className} mt-5 text-[11px] uppercase tracking-[0.25em]`} style={{ color: C.muted }}>
                Distribuidor oficial Surlat
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reparto */}
      <section id="reparto" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-10 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
              <BosquejoBadge />
              <Image
                src={`${IMG}/bosquejo-furgon.webp`}
                alt="Bosquejo: furgón de reparto refrigerado en una calle de Talca"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.naranjoInk }}>
              Reparto en Talca
            </p>
            <h2 className={`${display.className} mt-3 text-[34px] sm:text-[46px] leading-[1.02] font-semibold uppercase tracking-tight`}>
              Compre en el local o pida a domicilio
            </h2>
            <ul className="mt-6 space-y-3">
              {[
                ['Venta en local', 'Atención en el mostrador de 21 Oriente.'],
                ['Retiro en tienda', 'Encargue por teléfono y pase a buscar.'],
                ['Delivery', 'Su pedido llega en frío a su puerta.'],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3.5 rounded-xl border p-4" style={{ borderColor: C.line, backgroundColor: C.card }}>
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.naranjo} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <p className="font-semibold text-[15px]">{t}</p>
                    <p className="text-[13px] mt-0.5" style={{ color: C.muted }}>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              href={TEL_LINK}
              className={`mt-6 min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-semibold tap-44 ${FOCUS}`}
              style={{ backgroundColor: C.ink, color: C.crema }}
            >
              Hacer un pedido: {BIZ.phoneDisplay}
            </a>
          </Reveal>
        </div>
      </section>

      {/* Ubicación y horario */}
      <section id="llegar" className="px-5 pb-24 md:pb-32">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
              <div className="grid md:grid-cols-[1fr_1.15fr]">
                <div className="p-7 md:p-9">
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em]`} style={{ color: C.naranjoInk }}>
                    Dónde estamos
                  </p>
                  <h2 className={`${display.className} mt-3 text-[30px] sm:text-[38px] leading-none font-semibold uppercase tracking-tight`}>
                    21 Oriente 1080, Talca
                  </h2>
                  <dl className="mt-6 space-y-4 text-[15px]">
                    <div>
                      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Horario</dt>
                      {HORARIO.map(([dia, hora]) => (
                        <dd key={dia} className="mt-1 flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                          <span>{dia}</span>
                          <span className={`${mono.className} font-semibold`}>{hora}</span>
                        </dd>
                      ))}
                    </div>
                    <div>
                      <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Teléfono</dt>
                      <dd className="mt-1">
                        <a href={TEL_LINK} className={`font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.naranjoInk }}>
                          {BIZ.phoneTel}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <figure className="mt-6">
                    <div className="overflow-hidden rounded-xl border" style={{ borderColor: C.line }}>
                      <Image
                        src={`${IMG}/cuadra-streetview.webp`}
                        alt="Vista de la cuadra de 21 Oriente 1080, Talca, donde funciona Dislac (Google Street View)"
                        width={1024}
                        height={658}
                        className="w-full h-auto"
                      />
                    </div>
                    <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                      Así se ve la cuadra · Google Street View
                    </figcaption>
                  </figure>
                </div>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 py-10 border-t" style={{ borderColor: C.line, backgroundColor: C.crema2 }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover" aria-hidden="true" />
            <div>
              <p className={`${display.className} font-semibold uppercase tracking-wide`}>{BIZ.name}</p>
              <p className="text-[12px]" style={{ color: C.muted }}>{BIZ.address} · {BIZ.city}</p>
            </div>
          </div>
          <a href={TEL_LINK} className={`${mono.className} text-[13px] font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.naranjoInk }}>
            {BIZ.phoneTel}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.naranjo} fg="#FFF" />
    </div>
  )
}
