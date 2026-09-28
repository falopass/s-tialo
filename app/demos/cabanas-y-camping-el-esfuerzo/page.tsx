import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Paleta de su letrero pintado a mano y sus cabañas: papel crema, rojo
// óxido de los techos, verde lima del negocio y corteza del bosque de
// precordillera. Motivo: la celosía diagonal de sus rejas de madera.
const C = {
  papel: '#F7F0DC',
  crema: '#FFFBF0',
  oxido: '#A63B21',
  oxidoDeep: '#7E2B16',
  lima: '#86B93C',
  limaDeep: '#5C8A22',
  corteza: '#2E241B',
  tinta: '#241B12',
  muted: '#6B5D4C',
  line: 'rgba(46,36,27,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-y-camping-el-esfuerzo',
  title: 'Cabañas y Camping El Esfuerzo — Molina, junto al río',
  description:
    'Camping y cabañas en Molina, precordillera del Maule: sitios con parrilla y pasto, duchas con agua caliente, negocio y el río al lado. Reserva por WhatsApp.',
  image: `${IMG}/og.webp`,
})

const NAV_LINKS = [
  { label: 'El camping', href: '#el-camping' },
  { label: 'El negocio', href: '#el-negocio' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#donde' },
]

// Celosía diagonal: las rejas cruzadas de madera que se repiten por todo
// el camping (cercos de los sitios y la entrada).
const celosia = (color: string, op = 0.16) => {
  const hex = color.replace('#', '%23')
  return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28'%3E%3Cpath d='M0 28L28 0M-7 7L7 -7M21 35L35 21' stroke='${hex}' stroke-width='4' stroke-opacity='${op}'/%3E%3C/svg%3E")`
}

// Cartel de madera pintado: fondo crema, borde doble y sombra seca.
function Cartel({
  children,
  className = '',
  accent = C.oxido,
}: {
  children: React.ReactNode
  className?: string
  accent?: string
}) {
  return (
    <div
      className={`relative border-2 ${className}`}
      style={{
        backgroundColor: C.crema,
        borderColor: C.tinta,
        boxShadow: `5px 5px 0 ${accent}`,
      }}
    >
      {children}
    </div>
  )
}

const LISTA = [
  { k: 'Río al lado', d: 'el sonido del agua a unos pasos de la carpa, dicen las reseñas' },
  { k: 'Duchas con agua caliente', d: 'y baños; la limpieza se repite en cada reseña' },
  { k: 'Parrilla en cada sitio', d: 'sitios techados y con pasto para el asado' },
  { k: 'Enchufes y luz', d: 'luz aproximadamente de 21:00 a 01:00 y puntos para cargar el celular' },
  { k: 'Negocio en el lugar', d: '«vende de todo y excelentes precios», según un reseñante' },
  { k: 'Tranquilo y familiar', d: '«apto para toda la familia»' },
]

const RESENAS = [
  {
    t: 'El lugar es hermoso, cuenta con baños, duchas con agua caliente, negocio que vende de todo y excelentes precios. Es muy tranquilo y apto para toda la familia. El río está al lado y tiene excelentes vistas.',
    a: 'Carlos Patricio Moraga · Local Guide',
  },
  {
    t: 'Excelente lugar, voy hace 7 años al menos 2 veces durante el verano. Tranquilo y siempre limpio, cuenta con duchas con agua caliente y algunos sitios techados y con pasto, además de parrillas en cada sitio.',
    a: 'Nicole Astorga · Local Guide',
  },
]

export default function Page() {
  return (
    <div className={`${body.className} min-h-screen`} style={{ backgroundColor: C.papel, color: C.tinta }}>
      <BlitzNav
        name="El Esfuerzo"
        links={NAV_LINKS}
        waLink={WA_LINK}
        logoSrc={`${IMG}/letrero.webp`}
        theme={{ over: 'light', bar: C.crema, ink: C.tinta, line: C.line, btnBg: C.oxido, btnInk: '#FFF8EC' }}
        fontClass={display.className}
        ctaLabel="Reservar"
      />

      {/* ── Hero: cartel de entrada ── */}
      <header id="inicio" className="relative pt-[84px] md:pt-[110px] pb-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: celosia(C.oxido) }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.oxidoDeep }}>
              Camping y cabañas · Molina, precordillera del Maule
            </p>
            <h1
              className={`${display.className} uppercase leading-[0.95] text-[17vw] md:text-[7.5rem] xl:text-[9rem]`}
              style={{ color: C.corteza }}
            >
              El<br />
              <span style={{ color: C.oxido }}>Esfuerzo</span>
            </h1>
            <p className="mt-4 max-w-md text-base md:text-lg font-semibold" style={{ color: C.muted }}>
              Sitios con pasto y parrilla, cabañas, duchas con agua caliente y el río al lado.
              <span className={`${mono.className} block mt-2 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.limaDeep }}>
                Abre solo en verano
              </span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-44 inline-flex items-center gap-2 px-6 py-3 text-sm font-extrabold uppercase tracking-wide border-2 transition-transform hover:-translate-y-0.5"
                style={{ backgroundColor: C.oxido, color: '#FFF8EC', borderColor: C.tinta, boxShadow: `4px 4px 0 ${C.tinta}` }}
              >
                Reservar por WhatsApp
              </a>
              <span className={`${mono.className} text-xs`} style={{ color: C.muted }}>
                ★ {BIZ.rating} · {BIZ.reviews} reseñas en Google
              </span>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-start">
            <Reveal className="col-span-2 md:col-span-1 -rotate-1">
              <figure className="bg-white p-2 border-2" style={{ borderColor: C.tinta, boxShadow: `6px 6px 0 ${C.lima}` }}>
                <Image src={`${IMG}/hero.webp`} alt="Cabañas de techo rojo entre árboles en Camping El Esfuerzo" width={1200} height={900} className="w-full aspect-[4/3] object-cover" priority />
              </figure>
            </Reveal>
            <Reveal className="rotate-1 mt-6 md:mt-10">
              <figure className="bg-white p-2 border-2" style={{ borderColor: C.tinta, boxShadow: `5px 5px 0 ${C.oxido}` }}>
                <Image src={`${IMG}/entrada.webp`} alt="Camino de tierra entre las cabañas de El Esfuerzo" width={640} height={640} className="w-full aspect-square object-cover" />
              </figure>
            </Reveal>
            <Reveal className="-rotate-2 mt-2 md:mt-20">
              <figure className="bg-white p-2 border-2" style={{ borderColor: C.tinta, boxShadow: `5px 5px 0 ${C.limaDeep}` }}>
                <Image src={`${IMG}/letrero.webp`} alt="Letrero pintado a mano: Supermercado, puestos varios, Camping El Esfuerzo" width={640} height={640} className="w-full aspect-square object-cover" />
              </figure>
            </Reveal>
          </div>
        </div>
      </header>

      {/* ── Cinta corrida con lo que hay ── */}
      <style>{`
        @keyframes ee-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .ee-marquee { animation: ee-marquee 28s linear infinite }
        @media (prefers-reduced-motion: reduce) { .ee-marquee { animation: none } }
      `}</style>
      <div className="border-y-2 py-3 overflow-hidden" style={{ borderColor: C.tinta, backgroundColor: C.lima }}>
        <div className="ee-marquee whitespace-nowrap flex" style={{ width: 'max-content' }}>
          {[0, 1].map((n) => (
            <span key={n} className={`${display.className} text-lg uppercase tracking-wide flex gap-8 pr-8`} style={{ color: C.corteza }} aria-hidden={n === 1}>
              {['El río al lado', 'Duchas calientes', 'Parrilla en cada sitio', 'Negocio en el camping', 'Sitios techados', 'Enchufes para el celular'].map((s) => (
                <span key={s}>☘ {s}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ── Qué trae el camping ── */}
      <section id="el-camping" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-2`} style={{ color: C.oxidoDeep }}>Lo que dicen los que han ido</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`} style={{ color: C.corteza }}>
              Camping de verano,<br />a la antigua
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {LISTA.map((it, i) => (
              <Reveal key={it.k} delay={i * 60}>
                <Cartel accent={i % 2 ? C.lima : C.oxido} className="p-5 h-full">
                  <p className={`${display.className} text-xl uppercase`} style={{ color: C.oxidoDeep }}>{it.k}</p>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: C.muted }}>{it.d}</p>
                </Cartel>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                ['sitio.webp', 'Sitio techado con pasto y celosía de madera'],
                ['cabana.webp', 'Cabaña blanca con porche y jardín'],
                ['quincho.webp', 'Terraza techada de madera'],
                ['negocio.webp', 'El negocio del camping: alimentos y mesa de taca-taca'],
              ].map(([f, alt]) => (
                <figure key={f} className="border-2 overflow-hidden" style={{ borderColor: C.tinta }}>
                  <Image src={`${IMG}/${f}`} alt={alt} width={640} height={640} className="w-full aspect-square object-cover" />
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El negocio ── */}
      <section id="el-negocio" className="py-14 md:py-20 relative overflow-hidden" style={{ backgroundColor: C.limaDeep }}>
        <div className="absolute inset-0 pointer-events-none opacity-100" style={{ backgroundImage: celosia('#2E241B', 0.12) }} />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-2`} style={{ color: '#F3F9E2' }}>Pizarra del negocio</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none text-white`}>
              El negocio<br />del camping
            </h2>
            <p className="mt-4 text-sm md:text-base font-semibold" style={{ color: '#EAF4D6' }}>
              Precios literales del letrero que el camping publica en su Instagram.
              Hay expendio de golosinas, carbón y más.
            </p>
          </Reveal>
          <Reveal>
            <Cartel accent={C.oxidoDeep} className="p-6 rotate-1">
              <ul className={`${mono.className} text-sm md:text-base space-y-2`} style={{ color: C.tinta }}>
                {[
                  ['Hielo bolsa grande', '$2.000'],
                  ['Hielo', '$1.000'],
                  ['Carga de celular', '$500'],
                  ['Carbón', 'consultar'],
                  ['Sitio por persona*', '~$5.000'],
                ].map(([k, v]) => (
                  <li key={k} className="flex justify-between gap-4 border-b border-dashed pb-2" style={{ borderColor: C.line }}>
                    <span>{k}</span><span className="font-bold">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] leading-snug" style={{ color: C.muted }}>
                *Valor por persona citado por un reseñante de Google; confirma tarifas
                de la temporada por WhatsApp.
              </p>
            </Cartel>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="py-14 md:py-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`} style={{ color: C.corteza }}>
              Vuelven<br />cada verano
            </h2>
            <div className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
              <Stars value={5} color={C.oxido} /> {BIZ.rating} / 5 · {BIZ.reviews} reseñas en Google
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={i} delay={i * 80}>
                <blockquote className="h-full p-6 border-2" style={{ borderColor: C.tinta, backgroundColor: C.crema, boxShadow: `5px 5px 0 ${i % 2 ? C.lima : C.oxido}` }}>
                  <p className="text-sm md:text-base leading-relaxed font-semibold" style={{ color: C.tinta }}>“{r.t}”</p>
                  <footer className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>{r.a}</footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="donde" className="py-14 md:py-20" style={{ backgroundColor: C.corteza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-2`} style={{ color: C.lima }}>Cómo llegar</p>
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none text-white`}>
              Molina,<br />Maule
            </h2>
            <address className="not-italic mt-4 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {BIZ.city}, {BIZ.region}<br />
              WhatsApp {BIZ.phoneDisplay} · {BIZ.phoneAlt}<br />
              Instagram <a href={BIZ.instagramUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2">{BIZ.instagram}</a>
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-44 mt-6 inline-flex items-center gap-2 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wide border-2"
              style={{ borderColor: C.lima, color: C.lima }}
            >
              Abrir en Google Maps
            </a>
          </Reveal>
          <Reveal>
            <div className="border-2 overflow-hidden" style={{ borderColor: C.lima }}>
              <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}`} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.oxidoDeep, color: '#FFF8EC' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-20">
          <p className={`${display.className} text-lg uppercase`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed mb-1.5" style={{ color: 'rgba(255,248,236,0.85)' }}>
            {BIZ.city}, {BIZ.region} · {BIZ.phoneDisplay}
          </address>
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,248,236,0.7)' }}>
            Sitio de ejemplo de Sitiazo: nombre, dirección, teléfonos,
            temporada y reseñas son reales (ficha de Google e Instagram del
            camping); el diseño es de muestra.
          </p>
          <div className="[&>div]:static [&>div]:max-w-full [&>div]:w-fit">
            <DemoBand name={BIZ.name} />
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
