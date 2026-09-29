import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { DemoBand } from '../kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, TEL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/public-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// El amarillo de su fachada + el azul del letrero + el rojo del toldo.
const C = {
  sol: '#F6B51E',
  solClaro: '#FBE9BE',
  papel: '#FFF8EA',
  card: '#FFFDF5',
  ink: '#2B2114',
  muted: '#73654B',
  azul: '#1E4FA3',
  azulDeep: '#12366E',
  rojo: '#C93A2E',
  line: 'rgba(43,33,20,0.16)',
  white: '#FFFFFF',
}

export const metadata: Metadata = demoMetadata({
  slug: 'supermercado-san-sebastian',
  title: 'Supermercado San Sebastián — El súper de barrio de San Clemente',
  description:
    'Supermercado San Sebastián, San Clemente. Verduras baratas, carnicería con precios de feria, abarrotes y todo lo que necesita la despensa. Abierto todos los días.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'Los pasillos', href: '#pasillos' },
  { label: 'La gente', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Secciones reales vistas en las fotos de su ficha.
const PASILLOS = [
  { img: 'verduras', t: 'Verdulería', d: 'Verduras frescas a precio de feria, todos los días.', alt: 'Verdulería del Supermercado San Sebastián' },
  { img: 'deli', t: 'Carnicería y fiambres', d: 'Carnes frescas, embutidos y el mostrador de siempre.', alt: 'Carnicería y fiambres del Supermercado San Sebastián' },
  { img: 'pasillos', t: 'Abarrotes', d: 'Los pasillos de la despensa: legumbres, pastas, aseo y más.', alt: 'Pasillos de abarrotes del Supermercado San Sebastián' },
  { img: 'frios', t: 'Bebidas y frío', d: 'Bebestibles, cervezas y la sección de refrigerados.', alt: 'Pasillo de bebidas del Supermercado San Sebastián' },
]

// Citas reales de sus reseñas en Google.
const OPINIONES = [
  {
    texto:
      'Tienen verduras muy baratas y de buena calidad. Hay productos de la lista que salen 200 a casi 300 pesos más baratos que en otros supermercados.',
    autor: 'Natalia H.',
    estrellas: 5,
  },
  {
    texto:
      'El supermercado local: limpio y ordenado. Las mejores carnes a precios de oferta — los jueves hay casquería y hay que llegar temprano.',
    autor: 'Reseña en Google',
    estrellas: 5,
  },
  {
    texto:
      'Cuando viajo a San Clemente a visitar a la familia, paso a este súper: es barato.',
    autor: 'Reseña en Google',
    estrellas: 5,
  },
]

const HORARIO = [
  ['Lunes a sábado', '9:00 – 21:30'],
  ['Domingo', '9:00 – 21:00'],
]

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E4FA3]'

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={TEL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'light',
          bar: 'rgba(255,248,234,0.94)',
          ink: C.ink,
          line: C.line,
          btnBg: C.azul,
          btnInk: '#FFF',
        }}
      />

      {/* Hero: cartel de esquina con la fachada real */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.sol }}>
        <div className="absolute inset-x-0 bottom-0 h-24" style={{ background: `linear-gradient(180deg, transparent, ${C.papel})` }} aria-hidden="true" />
        <div className="relative max-w-5xl mx-auto px-5 pt-32 pb-24 md:pt-40 md:pb-28 grid md:grid-cols-[1.15fr_1fr] gap-10 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold`} style={{ color: C.azulDeep }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} mt-4 text-[48px] leading-[0.95] sm:text-[68px] md:text-[80px] font-extrabold`}>
              El súper de la esquina
              <span style={{ color: C.azulDeep }}> de San Clemente</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] md:text-base leading-relaxed" style={{ color: 'rgba(43,33,20,0.82)' }}>
              Verduras de feria, carnicería conocida y toda la despensa en un
              solo lugar — abierto todos los días.
            </p>
            <div className="mt-6 inline-flex items-center gap-2.5 rounded-full border-2 px-4 py-2" style={{ borderColor: C.ink, backgroundColor: C.card }}>
              <Stars value={BIZ.rating} color={C.rojo} className="w-3.5 h-3.5" />
              <span className={`${mono.className} text-[13px] font-bold`}>{BIZ.rating.toFixed(1)}</span>
              <span className="text-[12px]" style={{ color: C.muted }}>· {BIZ.reviews} reseñas en Google</span>
            </div>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={TEL_LINK}
                className={`min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-semibold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.azulDeep, color: '#FFF' }}
              >
                Llamar: {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`min-h-[48px] inline-flex items-center justify-center px-7 rounded-full border-2 tap-44 ${FOCUS}`}
                style={{ borderColor: C.ink }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[340px] rotate-2 rounded-2xl border-4 shadow-xl" style={{ borderColor: C.card }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Fachada del Supermercado San Sebastián en San Clemente"
                width={288}
                height={442}
                className="w-full h-auto rounded-xl"
                priority
              />
              <span className={`${mono.className} absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em]`} style={{ backgroundColor: C.rojo, color: '#FFF' }}>
                Todos los días abierto
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Los pasillos */}
      <section id="pasillos" className="px-5 py-20 md:py-28">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.rojo }}>
              Un vuelco por los pasillos
            </p>
            <h2 className={`${display.className} mt-3 text-[36px] sm:text-[54px] leading-[1.0] font-extrabold`}>
              De la verdulería a la carnicería
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {PASILLOS.map((p, i) => (
              <Reveal key={p.t} delay={i * 60}>
                <article className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
                    <Image
                      src={`${IMG}/${p.img}.webp`}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 240px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <h3 className={`${display.className} mt-3 text-xl font-bold`}>{p.t}</h3>
                  <p className="mt-1 text-[13px] leading-snug" style={{ color: C.muted }}>{p.d}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={100}>
            <div className="relative mt-8 overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/panoramica.webp`}
                alt="Panorámica interior del Supermercado San Sebastián"
                width={512}
                height={198}
                className="w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Feria al costado */}
      <section className="px-5 py-16 md:py-24" style={{ backgroundColor: C.solClaro }}>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="relative -rotate-2 rounded-2xl border-4 overflow-hidden shadow-lg" style={{ borderColor: C.card }}>
              <Image src={`${IMG}/feria.webp`} alt="Puestos de feria al costado del Supermercado San Sebastián" width={512} height={384} className="w-full h-auto" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.rojo }}>
              Precio de feria
            </p>
            <h2 className={`${display.className} mt-3 text-[34px] sm:text-[46px] leading-[1.0] font-extrabold`}>
              Los precios que la gente nota
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed" style={{ color: C.muted }}>
              Quienes compran acá lo dicen en sus reseñas: las verduras y la
              carne salen más baratas que en las grandes cadenas, y hay cosas
              que en Talca ni se encuentran.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                'Verduras baratas y de buena calidad',
                'Carnicería y casquería los jueves',
                'Abarrotes más baratos que en las cadenas',
              ].map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[15px] font-medium">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 mt-0.5 shrink-0" fill="none" stroke={C.rojo} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Opiniones reales */}
      <section id="opiniones" className="px-5 py-20 md:py-28" style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.sol }}>
              Lo que dice la gente
            </p>
            <h2 className={`${display.className} mt-3 text-[36px] sm:text-[54px] leading-[1.0] font-extrabold`} style={{ color: C.papel }}>
              {BIZ.reviews} reseñas y contando
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor + i} delay={i * 80}>
                <figure className="h-full rounded-2xl p-6 flex flex-col" style={{ backgroundColor: C.card }}>
                  <Stars value={o.estrellas} color={C.sol} className="w-4 h-4" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed">“{o.texto}”</blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                    — {o.autor}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ubicación */}
      <section id="llegar" className="px-5 py-20 md:py-24">
        <div className="max-w-5xl mx-auto rounded-2xl border overflow-hidden" style={{ borderColor: C.line, backgroundColor: C.card }}>
          <div className="grid md:grid-cols-[1fr_1.15fr]">
            <div className="p-7 md:p-9">
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.3em] font-bold`} style={{ color: C.rojo }}>
                Cómo llegar
              </p>
              <h2 className={`${display.className} mt-3 text-[32px] sm:text-[40px] leading-[1.0] font-extrabold`}>
                {BIZ.city}, Región del Maule
              </h2>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Horario</dt>
                  {HORARIO.map(([dia, hora]) => (
                    <dd key={dia} className="mt-1 flex justify-between gap-4 border-b pb-2" style={{ borderColor: C.line }}>
                      <span>{dia}</span>
                      <span className={`${mono.className} font-bold`}>{hora}</span>
                    </dd>
                  ))}
                </div>
                <div>
                  <dt className={`${mono.className} text-[11px] uppercase tracking-[0.2em]`} style={{ color: C.muted }}>Teléfono</dt>
                  <dd className="mt-1">
                    <a href={TEL_LINK} className={`font-semibold underline underline-offset-4 tap-44 ${FOCUS}`} style={{ color: C.azulDeep }}>
                      {BIZ.phoneTel}
                    </a>
                  </dd>
                </div>
              </dl>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-6 min-h-[48px] inline-flex items-center justify-center px-7 rounded-full font-semibold tap-44 ${FOCUS}`}
                style={{ backgroundColor: C.rojo, color: '#FFF' }}
              >
                Abrir en Google Maps
              </a>
            </div>
            <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name} en ${BIZ.city}`} className="w-full h-full min-h-[300px]" loading="lazy" />
          </div>
        </div>
      </section>

      <footer className="px-5 py-10" style={{ backgroundColor: C.sol }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className={`${display.className} text-xl font-extrabold`}>{BIZ.name}</p>
            <p className="text-[12px]" style={{ color: 'rgba(43,33,20,0.7)' }}>{BIZ.city} · Abierto todos los días</p>
          </div>
          <a href={TEL_LINK} className={`${mono.className} text-[13px] font-bold underline underline-offset-4 tap-44 ${FOCUS}`}>
            {BIZ.phoneTel}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <CallFab href={TEL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.azulDeep} fg="#FFF" />
    </div>
  )
}
