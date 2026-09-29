import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Papel de la lista de la compra + lápiz rojo de los tachados +
// el verde de la verdulería. La boleta se imprime en mono.
const C = {
  kraft: '#EFE6D0',
  papel: '#F7F1E1',
  card: '#FCF8EC',
  ink: '#26201A',
  muted: '#6E6152',
  lapiz: '#A83426',
  feria: '#2F5D3A',
  cinta: '#E4D6B4',
  line: 'rgba(38,32,26,0.2)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'san-sebastian',
  title: 'San Sebastián — El súper donde la lista rinde, en San Clemente',
  description:
    'Supermercado San Sebastián, San Clemente. Verduras baratas, carnicería con precios de feria, abarrotes y frío: la lista completa en un solo local. Abierto todos los días.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La lista', href: '#lista' },
  { label: 'La boleta', href: '#boleta' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Los ítems de la lista, con las fotos reales de sus pasillos.
const LISTA = [
  {
    img: 'verduras',
    t: 'Verduras y frutas',
    d: 'Precio de feria todos los días, no solo los martes.',
    alt: 'Verdulería del Supermercado San Sebastián en San Clemente',
  },
  {
    img: 'deli',
    t: 'Carnes y fiambres',
    d: 'El mostrador de siempre; los jueves llega la casquería.',
    alt: 'Carnicería y fiambres del Supermercado San Sebastián',
  },
  {
    img: 'pasillos',
    t: 'Abarrotes y aseo',
    d: 'Legumbres, pastas, harina y lo que falta en la despensa.',
    alt: 'Pasillos de abarrotes del Supermercado San Sebastián',
  },
  {
    img: 'frios',
    t: 'Frío y bebidas',
    d: 'Bebestibles, cervezas y los refrigerados para el once.',
    alt: 'Sección de frío y bebidas del Supermercado San Sebastián',
  },
]

// Reseñas reales de su ficha de Google, impresas como ítems de boleta.
const BOLETA = [
  { item: 'VERDURAS BARATAS Y BUENAS', nota: '“Productos de la lista que salen 200 a 300 pesos más baratos que en otros supermercados.”', autor: 'Natalia H.' },
  { item: 'SÚPER LIMPIO Y ORDENADO', nota: '“Las mejores carnes a precios de oferta; los jueves hay casquería y hay que llegar temprano.”', autor: 'Reseña en Google' },
  { item: 'EL SÚPER DE LAS VISITAS', nota: '“Cuando viajo a San Clemente a visitar a la familia, paso a este súper: es barato.”', autor: 'Reseña en Google' },
]

const HORARIO = [
  ['Lunes a sábado', '9:00 – 21:30'],
  ['Domingo', '9:00 – 21:00'],
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C2402F]'

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.kraft, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(239,230,208,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.lapiz,
          btnInk: '#FFF',
        }}
      />

      {/* Hero: la lista de la compra con la foto pegada con cinta */}
      <section id="inicio" className="relative overflow-hidden px-5 pt-28 pb-16 md:pt-36 md:pb-24" style={{ backgroundColor: C.kraft }}>
        <div
          className="absolute inset-0 -z-0 opacity-[0.35] pointer-events-none"
          aria-hidden="true"
          style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent 0px, transparent 34px, ${C.line} 34px, ${C.line} 35px)` }}
        />
        <div className="relative max-w-5xl mx-auto grid md:grid-cols-[1.25fr_1fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold`} style={{ color: C.feria }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} mt-3 text-[46px] leading-[0.95] sm:text-[64px] md:text-[76px] font-black`}>
              El súper donde
              <br />
              la lista <span style={{ color: C.lapiz }}>rinde</span>
            </h1>
            <p className="mt-4 max-w-md text-[15px] md:text-base" style={{ color: C.muted }}>
              Verduras, carnes, abarrotes y frío en un solo local: la compra
              completa sin salir de San Clemente.
            </p>
            <div className="mt-5 inline-flex items-center gap-2.5 border-2 border-dashed px-4 py-2" style={{ borderColor: C.ink, backgroundColor: C.papel }}>
              <Stars value={BIZ.rating} color={C.lapiz} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[13px] font-bold`}>{BIZ.rating.toFixed(1)}</span>
              <span className="text-[12px]" style={{ color: C.muted }}>· {BIZ.reviews} reseñas en Google</span>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={TEL_LINK}
                className={`min-h-[48px] inline-flex items-center justify-center px-7 font-bold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.lapiz, color: '#FFF' }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[48px] inline-flex items-center justify-center px-7 border-2 font-bold tap-44 ${FOCUS}`}
                style={{ borderColor: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <figure className="relative mx-auto w-full max-w-[300px] rotate-2">
              <div
                className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-7 rotate-[-4deg] z-10"
                style={{ backgroundColor: 'rgba(228,214,180,0.85)', boxShadow: '0 1px 3px rgba(38,32,26,0.25)' }}
                aria-hidden="true"
              />
              <div className="border-[10px] shadow-lg" style={{ borderColor: C.card }}>
                <Image
                  src={`${IMG}/fachada.webp`}
                  alt="Fachada del Supermercado San Sebastián, San Clemente"
                  width={288}
                  height={442}
                  className="w-full h-auto"
                  priority
                />
              </div>
              <figcaption className={`${mono.className} mt-3 text-center text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                el local, tal cual
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* La lista: ítems numerados como en el papel de la compra */}
      <section id="lista" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.papel }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.98] font-black`}>
              Lo que hay que marcar
              <br />
              <span style={{ color: C.feria }}>en la lista</span>
            </h2>
          </Reveal>
          <ol className="mt-10">
            {LISTA.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <li className="flex items-center gap-4 md:gap-6 border-b py-4 md:py-5" style={{ borderColor: C.line }}>
                  <span className={`${mono.className} w-8 shrink-0 text-[15px] md:text-base font-bold`} style={{ color: C.lapiz }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-lg border" style={{ borderColor: C.line }}>
                    <Image
                      src={`${IMG}/${p.img}.webp`}
                      alt={p.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`${display.className} text-xl md:text-2xl font-bold leading-tight`}>{p.t}</h3>
                    <p className="text-[13px] md:text-[14px] mt-0.5 leading-snug" style={{ color: C.muted }}>{p.d}</p>
                  </div>
                  <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0 hidden sm:block" fill="none" stroke={C.feria} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 13l5 5L20 6" />
                  </svg>
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={120}>
            <div className="relative mt-8 overflow-hidden rounded-xl border-2" style={{ borderColor: C.ink }}>
              <Image
                src={`${IMG}/panoramica.webp`}
                alt="Panorámica de los pasillos del Supermercado San Sebastián"
                width={512}
                height={198}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* La boleta: las reseñas impresas como ticket de caja */}
      <section id="boleta" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.feria }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <h2 className={`${display.className} text-[38px] sm:text-[54px] leading-[0.98] font-black text-center`} style={{ color: C.papel }}>
              La boleta
              <br />
              <span style={{ color: C.cinta }}>habla sola</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="relative mt-10 shadow-2xl" style={{ backgroundColor: C.papel }}>
              <div
                className="h-3 w-full"
                aria-hidden="true"
                style={{ background: `linear-gradient(-45deg, transparent 8px, ${C.papel} 0) 0 0 / 16px 16px repeat-x, linear-gradient(45deg, transparent 8px, ${C.papel} 0) 8px 0 / 16px 16px repeat-x` }}
              />
              <div className={`${mono.className} px-6 py-8 md:px-10`}>
                <div className="text-center border-b border-dashed pb-5" style={{ borderColor: C.line }}>
                  <p className="text-[13px] font-bold uppercase tracking-[0.3em]">{BIZ.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em]" style={{ color: C.muted }}>{BIZ.city} · boleta de la gente</p>
                </div>
                <ul className="divide-y divide-dashed" style={{ borderColor: C.line }}>
                  {BOLETA.map((b) => (
                    <li key={b.item} className="py-5">
                      <div className="flex items-baseline justify-between gap-3">
                        <p className="text-[12px] md:text-[13px] font-bold uppercase tracking-[0.12em]">{b.item}</p>
                        <Stars value={5} color={C.lapiz} className="w-3 h-3 shrink-0" />
                      </div>
                      <p className="mt-2 text-[12px] md:text-[13px] leading-relaxed">{b.nota}</p>
                      <p className="mt-1.5 text-[10px] uppercase tracking-[0.2em]" style={{ color: C.muted }}>— {b.autor}</p>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-dashed pt-5 text-center" style={{ borderColor: C.line }}>
                  <div className="flex items-baseline justify-between">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em]">Total opiniones</p>
                    <p className="text-[15px] font-bold">{BIZ.reviews}</p>
                  </div>
                  <div className="mt-2 flex items-baseline justify-between">
                    <p className="text-[12px] font-bold uppercase tracking-[0.2em]">Nota en Google</p>
                    <p className="text-[15px] font-bold">{BIZ.rating.toFixed(1)} / 5</p>
                  </div>
                  <p className="mt-5 text-[10px] uppercase tracking-[0.3em]" style={{ color: C.muted }}>
                    *** gracias por su compra ***
                  </p>
                </div>
              </div>
              <div
                className="h-3 w-full rotate-180"
                aria-hidden="true"
                style={{ background: `linear-gradient(-45deg, transparent 8px, ${C.papel} 0) 0 0 / 16px 16px repeat-x, linear-gradient(45deg, transparent 8px, ${C.papel} 0) 8px 0 / 16px 16px repeat-x` }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* La feria al costado */}
      <section className="px-5 py-16 md:py-24" style={{ backgroundColor: C.papel }}>
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr_1.2fr] gap-8 items-center">
          <Reveal>
            <h2 className={`${display.className} text-[34px] sm:text-[44px] leading-[0.98] font-black`}>
              Y al costado,
              <br />
              <span style={{ color: C.feria }}>la feria</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Los puestos de la feria se instalan al lado del súper: la
              compra de la semana se hace completa en una sola pasada.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <figure className="relative">
              <div
                className="absolute -top-3 right-8 w-20 h-6 rotate-3 z-10"
                style={{ backgroundColor: 'rgba(228,214,180,0.85)', boxShadow: '0 1px 3px rgba(38,32,26,0.25)' }}
                aria-hidden="true"
              />
              <div className="border-[10px] shadow-lg -rotate-1" style={{ borderColor: C.card }}>
                <Image src={`${IMG}/feria.webp`} alt="Puestos de la feria al costado del Supermercado San Sebastián" width={512} height={384} className="w-full h-auto" />
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* Ubicación */}
      <section id="llegar" className="px-5 py-20 md:py-24" style={{ backgroundColor: C.kraft }}>
        <div className="max-w-4xl mx-auto rounded-xl border-2 overflow-hidden" style={{ borderColor: C.ink, backgroundColor: C.card }}>
          <div className="grid md:grid-cols-[1fr_1.15fr]">
            <div className="p-7 md:p-9">
              <h2 className={`${display.className} text-[32px] sm:text-[40px] leading-[0.98] font-black`}>
                San Clemente,
                <br />
                <span style={{ color: C.lapiz }}>todos los días</span>
              </h2>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Horario</dt>
                  {HORARIO.map(([dia, hora]) => (
                    <dd key={dia} className="mt-1 flex justify-between gap-4 border-b border-dashed pb-2" style={{ borderColor: C.line }}>
                      <span>{dia}</span>
                      <span className={`${mono.className} font-bold`}>{hora}</span>
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={TEL_LINK} className={`font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.lapiz }}>
                      {BIZ.phoneTel}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 min-h-[48px] inline-flex items-center justify-center px-7 font-bold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.feria, color: '#FFF' }}
              >
                Abrir en Google Maps
              </a>
            </div>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="px-5 py-8 border-t-2 border-dashed" style={{ borderColor: C.line, backgroundColor: C.kraft }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className={`${display.className} text-xl font-black`}>{BIZ.name}</p>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>{BIZ.city} · abierto todos los días</p>
          </div>
          <a href={TEL_LINK} className={`${mono.className} text-[13px] font-bold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.lapiz }}>
            {BIZ.phoneTel}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.lapiz} fg="#FFF" />
    </div>
  )
}
