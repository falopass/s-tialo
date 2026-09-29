import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_EMBED, MAPS_URL, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' },
    { path: '../../fonts/mulish/italic-200-1000.woff2', weight: '200 1000', style: 'italic' },
  ],
})

/**
 * Dirección de arte: «el salón de té» — la casa rosada de 2 Norte convertida
 * en página. Marcos ovalados con filete dorado (el rótulo de la fachada),
 * rosa empolvado de sus platos, salvia de sus tazas. Estructura propia: la
 * mesa puesta — vitrina, el sillón de las fotos y el neon de la casa.
 */
const C = {
  rosa: '#F4E1E1',
  rosaHi: '#FBF3F0',
  plato: '#9E4E58',
  doradoK: '#7A5C1E',
  salvia: '#7D9B78',
  dorado: '#A87E3A',
  ink: '#41302F',
  muted: 'rgba(65,48,47,0.72)',
  line: 'rgba(65,48,47,0.14)',
  noche: '#3A2B2C',
}

export const metadata: Metadata = demoMetadata({
  slug: 'emilia-coffee-cake',
  title: 'Emilia Coffee & Cake — Cafetería y pastelería en Las Rastras, Talca',
  description:
    'Café de especialidad, tortas y sándwiches gourmet en 2 Norte 4060, Talca. Terraza, drive-through y el sillón rosado de las fotos. 4,8 en Google.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'El sillón', href: '#sillon' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const VITRINA = [
  { img: 'pie.webp', t: 'Pie de limón', n: 'el que se acaba primero', alt: 'Trozo de pie de limón sobre plato rosado de Emilia Coffee & Cake' },
  { img: 'torta.webp', t: 'Tortas de la casa', n: 'porciones y de encargo', alt: 'Trozo de torta húmeda de chocolate servido en Emilia Coffee & Cake' },
  { img: 'croissant.webp', t: 'Croissant sandwich', n: 'el favorito del brunch', alt: 'Croissant sandwich con palta y huevo en plato rosado' },
  { img: 'latte.webp', t: 'Café de especialidad', n: 'en la taza salvia', alt: 'Latte con arte servido en taza verde salvia de Emilia' },
]

const NOMBRADOS = [
  'Frambuesa Colada',
  'Ciabatta palta huevo',
  'Chocolate caliente',
  'Pastelería del día',
  'Sándwiches gourmet',
]

const SERVICIOS = [
  { t: 'Mesa o terraza', d: 'Adentro entre el rosa y el salvia, o afuera en el patio cuando sale el sol.' },
  { t: 'Drive-through', d: 'Pides y retiras sin bajarte del auto: café y vitrina en la ventana.' },
  { t: 'Pedir en línea', d: 'Encargas por WhatsApp y coordinas retiro o reparto en el mismo chat.' },
]

const RESENAS = [
  {
    q: 'Si buscas una excelente cafetería en Las Rastras, Emilia Coffee es, sin duda, mi favorita. La atención es realmente excepcional: siempre son muy amables, atentos y te hacen sentir bienvenido desde que llegas.',
    a: 'Andree Merino',
    m: 'reseña en Google',
  },
  {
    q: 'Sin duda, la mejor cafetería del sector Las Rastras. La atención es simplemente impecable: un verdadero 10/10. Excelente variedad de pastelería, café de especialidad de gran calidad y sándwiches gourmet realmente deliciosos.',
    a: 'Hector Jaque',
    m: 'reseña en Google',
  },
  {
    q: 'Todo muy rico y fresco, el lugar es muy bonito para compartir, con un patio para disfrutar. Totalmente recomendado.',
    a: 'Francisco García',
    m: 'reseña en Google',
  },
]

const HORAS = [
  { d: 'Lunes a viernes', h: '9:00 – 19:00' },
  { d: 'Sábado', h: '9:30 – 14:00' },
  { d: 'Domingo', h: 'cerrado' },
]

/** Marco ovalado con doble filete dorado, como el rótulo de la fachada. */
function Oval({ src, alt, className = '', ratio = 'aspect-[3/4]' }: { src: string; alt: string; className?: string; ratio?: string }) {
  return (
    <figure className={`relative ${className}`}>
      <div className={`overflow-hidden ${ratio}`} style={{ borderRadius: '50% / 38%', border: `2px solid ${C.dorado}`, outline: `1px solid ${C.dorado}`, outlineOffset: 5, boxShadow: '0 14px 34px rgba(65,48,47,0.18)' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={`${IMG}/${src}`} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      </div>
    </figure>
  )
}

function Btn({ href, children, tone, external = true }: { href: string; children: React.ReactNode; tone: 'solid' | 'line' | 'rosa'; external?: boolean }) {
  const st =
    tone === 'solid'
      ? { backgroundColor: C.plato, color: C.rosaHi }
      : tone === 'rosa'
        ? { backgroundColor: C.rosaHi, color: C.ink }
        : { border: `1.5px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold transition-transform active:scale-[0.97] tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function Page() {
  return (
    <div className={`${body.className} min-h-[100dvh]`} style={{ backgroundColor: C.rosa, color: C.ink }}>
      <BlitzNav
        name={BIZ.name}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{ over: 'light', bar: 'rgba(244,225,225,0.92)', ink: C.ink, line: C.line, btnBg: C.ink, btnInk: C.rosaHi }}
        ctaLabel="Escribir"
        logoSrc={`${IMG}/logo.webp`}
      />

      <main>
        {/* HERO — la casa rosada, centrado como la fachada */}
        <section className="relative overflow-hidden pt-24 md:pt-32 pb-12">
          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
            <Reveal>
              <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase" style={{ color: C.doradoK }}>
                coffee &amp; cake · Las Rastras, Talca
              </p>
              <h1 className={`${display.className} leading-[1.04] text-[44px] sm:text-6xl lg:text-7xl tracking-tight mt-5`} style={{ color: C.ink }}>
                El café se toma en el sillón rosado de{' '}
                <span style={{ color: C.plato }}>Las Rastras</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed max-w-xl mx-auto" style={{ color: C.muted }}>
                Emilia es una casita rosada en 2 Norte: café de especialidad,
                pastelería de la casa y el sillón más fotografiado del sector.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Btn href={WA_LINK} tone="solid">Pedir por WhatsApp</Btn>
                <Btn href="#vitrina" tone="line" external={false}>Ver la vitrina</Btn>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center">
                <span className="inline-flex items-center gap-2">
                  <Stars value={4.8} color={C.dorado} className="w-[18px] h-[18px]" />
                  <span className="text-sm font-bold" style={{ color: C.ink }}>{BIZ.rating} · {BIZ.reviews} reseñas</span>
                </span>
                <span className="text-sm font-semibold" style={{ color: C.muted }}>terraza · drive-through · retiro</span>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="max-w-5xl mx-auto px-5 md:px-8 mt-12">
              <div className="relative">
                <figure className="overflow-hidden rounded-[2rem]" style={{ border: `2px solid ${C.dorado}`, outline: `1px solid ${C.dorado}`, outlineOffset: 5, boxShadow: '0 20px 48px rgba(65,48,47,0.20)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Emilia Coffee & Cake: casita rosada con rótulo dorado en 2 Norte, Talca"
                    width={1200}
                    height={700}
                    className="w-full h-auto block aspect-[16/10] object-cover"
                    priority
                  />
                </figure>
                <span
                  className={`${display.className} absolute -bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full text-base whitespace-nowrap`}
                  style={{ backgroundColor: C.ink, color: C.rosaHi, boxShadow: '0 10px 24px rgba(65,48,47,0.3)' }}
                >
                  2 Norte 4060 · Las Rastras
                </span>
              </div>
            </div>
          </Reveal>
        </section>

        {/* LA VITRINA — ovalos dorados */}
        <section id="vitrina" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.rosaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] tracking-tight text-center max-w-2xl mx-auto`} style={{ color: C.ink }}>
                De la vitrina, <span style={{ color: C.plato }}>a la mesa</span>
              </h2>
              <p className="mt-4 text-center max-w-md mx-auto text-base" style={{ color: C.muted }}>
                Lo que sale de la vitrina cambia todos los días. Lo que no cambia es el plato rosado.
              </p>
            </Reveal>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 md:gap-x-8">
              {VITRINA.map((v, i) => (
                <Reveal key={v.img} delay={i * 90}>
                  <div className="text-center">
                    <Oval src={v.img} alt={v.alt} />
                    <h3 className={`${display.className} text-2xl mt-5`} style={{ color: C.ink }}>{v.t}</h3>
                    <p className="mt-1 text-sm italic" style={{ color: C.muted }}>{v.n}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal>
              <div className="mt-12 flex flex-wrap justify-center gap-2">
                {NOMBRADOS.map((n) => (
                  <span key={n} className="px-4 py-2 rounded-full text-[13px] font-bold" style={{ backgroundColor: C.rosa, color: C.ink, border: `1px solid ${C.line}` }}>
                    {n}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-center text-xs italic" style={{ color: C.muted }}>
                los más nombrados en la ficha de Google
              </p>
            </Reveal>
          </div>
        </section>

        {/* EL SILLÓN — el rincón de las fotos */}
        <section id="sillon" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-10 md:gap-14 items-center">
            <Reveal>
              <div className="relative">
                <figure className="overflow-hidden rounded-[2rem]" style={{ border: `2px solid ${C.dorado}`, outline: `1px solid ${C.dorado}`, outlineOffset: 5, boxShadow: '0 18px 42px rgba(65,48,47,0.20)' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${IMG}/sillon.webp`}
                    alt="Sillón rosado de Emilia bajo el letrero de neón Coffee and friends, perfect blend"
                    className="w-full aspect-[4/5] object-cover"
                    loading="lazy"
                  />
                </figure>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase" style={{ color: C.doradoK }}>el rincón de siempre</p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] tracking-tight mt-4`} style={{ color: C.ink }}>
                «Coffee and friends, <span style={{ color: C.plato }}>perfect blend»</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                El neon lo dice todo: esta casa se hizo para conversar. El sillón
                rosado bajo el letrero es donde todo el mundo se saca la foto —
                y donde el café sabe mejor.
              </p>
              <ul className="mt-6 space-y-3">
                {SERVICIOS.map((s) => (
                  <li key={s.t} className="flex gap-4 items-start rounded-2xl p-4" style={{ backgroundColor: C.rosaHi, border: `1px solid ${C.line}` }}>
                    <span className="mt-1.5 w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: C.salvia }} aria-hidden="true" />
                    <div>
                      <p className="font-bold" style={{ color: C.ink }}>{s.t}</p>
                      <p className="text-[15px] leading-relaxed" style={{ color: C.muted }}>{s.d}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* BANDA NEON — foto real con frase de la casa */}
        <section className="relative overflow-hidden">
          <div className="relative h-[300px] md:h-[380px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${IMG}/frambuesa.webp`}
              alt="Bebida Frambuesa Colada de Emilia servida en vaso alto con crema"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: 'rgba(58,43,44,0.62)' }}>
              <p className={`${display.className} text-3xl sm:text-4xl md:text-5xl text-center px-6 leading-tight`} style={{ color: C.rosaHi }}>
                café, amigas y <span style={{ color: '#EFC9CE' }}>pastelería</span>
              </p>
            </div>
          </div>
        </section>

        {/* RESEÑAS */}
        <section id="resenas" className="scroll-mt-20 py-16 md:py-24" style={{ backgroundColor: C.rosaHi }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="text-center max-w-xl mx-auto">
                <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] tracking-tight`} style={{ color: C.ink }}>
                  «La mejor cafetería del <span style={{ color: C.plato }}>sector</span>»
                </h2>
                <div className="mt-5 flex items-center justify-center gap-2">
                  <Stars value={4.8} color={C.dorado} className="w-[18px] h-[18px]" />
                  <span className="text-sm font-bold" style={{ color: C.muted }}>{BIZ.rating} en Google · {BIZ.reviews} reseñas</span>
                </div>
              </div>
            </Reveal>
            <div className="mt-10 grid md:grid-cols-3 gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.a} delay={i * 90}>
                  <figure className="rounded-3xl p-6 h-full flex flex-col" style={{ backgroundColor: C.rosa, border: `1px solid ${C.line}`, boxShadow: '0 10px 26px rgba(65,48,47,0.10)' }}>
                    <Stars value={5} color={C.dorado} className="w-4 h-4" />
                    <blockquote className="mt-4 text-[15px] leading-relaxed flex-1" style={{ color: C.ink }}>
                      “{r.q}”
                    </blockquote>
                    <figcaption className="mt-5">
                      <p className="font-bold text-sm" style={{ color: C.ink }}>{r.a}</p>
                      <p className="text-xs mt-0.5 italic" style={{ color: C.muted }}>{r.m}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LLEGAR — mapa + tarjeta de té */}
        <section id="llegar" className="scroll-mt-20 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-5 md:px-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <Reveal>
              <p className="text-[11px] font-extrabold tracking-[0.3em] uppercase" style={{ color: C.doradoK }}>cómo llegar</p>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] tracking-tight mt-4`} style={{ color: C.ink }}>
                La casita rosada de <span style={{ color: C.plato }}>2 Norte</span>
              </h2>
              <address className="not-italic mt-5 text-lg leading-relaxed" style={{ color: C.muted }}>
                2 Norte 4060, sector Las Rastras
                <br />
                Talca, Región del Maule
              </address>
              <dl className="mt-5 space-y-1.5 text-[15px]">
                {HORAS.map((h) => (
                  <div key={h.d} className="flex justify-between max-w-xs border-b pb-1.5" style={{ borderColor: C.line, color: C.muted }}>
                    <dt>{h.d}</dt><dd className="font-bold" style={{ color: C.ink }}>{h.h}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm" style={{ color: C.muted }}>CLP 5.000–10.000 por persona · un lugar para todas y todos</p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Btn href={WA_LINK} tone="solid">WhatsApp {BIZ.phoneDisplay}</Btn>
                <Btn href={MAPS_URL} tone="line">Cómo llegar</Btn>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-[2rem] overflow-hidden aspect-[4/3]" style={{ border: `2px solid ${C.dorado}`, outline: `1px solid ${C.dorado}`, outlineOffset: 5, boxShadow: '0 18px 42px rgba(65,48,47,0.18)' }}>
                <LazyMap src={MAPS_EMBED} title="Mapa de Emilia Coffee & Cake en 2 Norte, Talca" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: C.plato }}>
          <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 text-center">
            <Reveal>
              <h2 className={`${display.className} text-4xl sm:text-5xl leading-[1.04] tracking-tight`} style={{ color: C.rosaHi }}>
                La once se toma en la casa rosada
              </h2>
              <p className="mt-4 text-lg max-w-lg mx-auto" style={{ color: 'rgba(251,243,240,0.9)' }}>
                Pregunta qué hay en la vitrina hoy, encarga una torta o pide tu café para retirar.
              </p>
              <div className="mt-8 flex justify-center">
                <Btn href={WA_LINK} tone="rosa">Escribir a Emilia</Btn>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="py-8" style={{ backgroundColor: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className={`${display.className} text-lg`} style={{ color: C.rosaHi }}>{BIZ.name}</p>
          <p className="text-xs tracking-[0.18em] uppercase" style={{ color: 'rgba(251,243,240,0.55)' }}>
            {BIZ.address} · {BIZ.city}
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-sm font-bold tap-44 inline-flex items-center" style={{ color: '#EFC9CE' }}>
            {BIZ.phoneDisplay}
          </a>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
