import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, CallFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, CALL_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})

const C = {
  carbon: '#141414',
  carbonSoft: '#1d1b19',
  cream: '#f2ead9',
  red: '#e23728',
  green: '#2e5d43',
  muted: '#6d675c',
  line: 'rgba(20,20,20,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'los-ganaderos',
  title: 'Los Ganaderos — La parrilla de la Ruta 5, Maule',
  description:
    'Parrilla en Ruta 5 Sur km 265, Maule. Dos locales unidos por un túnel bajo la carretera, parrillada, mini golf y vinoteca. +56 71 263 1110.',
  image: '/demos/los-ganaderos/hero.webp',
})

const NAV_LINKS = [
  { label: 'El túnel', href: '#tunel' },
  { label: 'La parrilla', href: '#parrilla' },
  { label: 'El paseo', href: '#paseo' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const CINTA = [
  'Parrillada',
  'Costillar BBQ',
  'Lomo a lo pobre',
  'Salmón',
  'Pastas',
  'Sándwiches',
  'Mini golf',
  'Vinoteca',
]

const PARRILLA = [
  { src: `${IMG}/parrilla.webp`, alt: 'Corte de carne a la parrilla servido en sartén de fierro', label: 'De la parrilla' },
  { src: `${IMG}/costillar.webp`, alt: 'Costillar BBQ con salsa y papas', label: 'Costillar BBQ' },
  { src: `${IMG}/lomo-pobre.webp`, alt: 'Lomo a lo pobre con papas fritas y huevo', label: 'Lomo a lo pobre' },
  { src: `${IMG}/salmon.webp`, alt: 'Plato de salmón con guarnición', label: 'Salmón' },
]

const PASEO = [
  { src: `${IMG}/minigolf.webp`, alt: 'Cancha de mini golf de Los Ganaderos entre los jardines', label: 'Mini golf' },
  { src: `${IMG}/vinoteca.webp`, alt: 'Salón y vinoteca interior con barricas y vinos de la zona', label: 'La vinoteca' },
  { src: `${IMG}/terraza.webp`, alt: 'Terraza con mesas y carpas del restaurante', label: 'La terraza' },
  { src: `${IMG}/noche.webp`, alt: 'Mini golf de Los Ganaderos de noche, con el neón de la botella encendido', label: 'De noche' },
]

const RESENAS = [
  {
    stars: 5,
    text: 'Uno de los mejores restaurantes de carne de carretera: un grato ambiente, muy bonitas vistas a una viña y una atención de primera.',
    author: 'Joaquín Yáñez',
  },
  {
    stars: 4,
    text: 'La carne, que obviamente es la especialidad, 100/10: exquisita, jugosa, en el punto de cocción solicitado.',
    author: 'Claudia Vasquez',
  },
  {
    stars: 5,
    text: 'Las porciones no son exageradas, sino precisas para cuando uno tiene hambre. No es una picada, y vale la parada.',
    author: 'Nicolás Escárate',
  },
]

export default function LosGanaderosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.carbon, color: C.cream }}
    >
      <style>{`
        .lg-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .lg-btn:hover { transform: translateY(-2px); filter: brightness(1.08); }
        .lg-btn:active { transform: translateY(0) scale(0.97); }
        .lg-btn:focus-visible { outline: 3px solid ${C.red}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={CALL_LINK}
        ctaLabel="Llamar"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(20,20,20,0.96)',
          ink: C.cream,
          line: 'rgba(242,234,217,0.16)',
          btnBg: C.red,
          btnInk: '#fff4ec',
        }}
      />

      {/* ── Hero: el neón de la carretera ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Letrero de neón Parrilla y Autoservicio de Los Ganaderos encendido de noche"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,20,20,0.62) 0%, rgba(20,20,20,0.25) 45%, rgba(20,20,20,0.92) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] font-semibold mb-5" style={{ color: C.red }}>
              Km 265 · Ruta 5 Sur · Maule
            </p>
            <h1
              className={`${display.className} leading-[0.92] tracking-[0.01em] uppercase text-[clamp(3rem,10vw,7.5rem)]`}
              style={{ color: '#fff' }}
            >
              La parrilla
              <br />
              de la <span style={{ color: C.red }}>carretera</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mt-6" style={{ color: 'rgba(255,255,255,0.85)' }}>
              Dos casas, una a cada lado de la ruta, unidas por un túnel
              peatonal bajo el asfalto. Parrillada, vinoteca y mini golf
              para estirar las piernas a la salida de Santiago o camino
              al sur.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Stars value={BIZ.rating} color={C.red} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: '#fff', textDecorationColor: 'rgba(226,55,40,0.55)' }}
              >
                {BIZ.rating} · {BIZ.reviews.toLocaleString('es-CL')} reseñas en Google
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={CALL_LINK}
                className={`${display.className} lg-btn uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                style={{ backgroundColor: C.red, color: '#fff4ec' }}
              >
                Llamar {BIZ.phoneDisplay}
              </a>
              <a
                href="#tunel"
                className={`${display.className} lg-btn uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
              >
                Dos casas, un túnel
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dos casas, un túnel ── */}
      <section id="tunel" className="scroll-mt-20" style={{ backgroundColor: C.carbonSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b pb-4" style={{ borderColor: 'rgba(242,234,217,0.18)' }}>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: C.red }}>
                la historia de la casa
              </span>
              <h2 className={`${display.className} uppercase leading-none text-[clamp(2.2rem,6vw,4.2rem)]`} style={{ color: '#fff' }}>
                Dos casas, un túnel
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-8 items-stretch">
            <Reveal className="col-span-6 md:col-span-3">
              <div className="h-full rounded-2xl p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.green }}>
                <p className="text-[10px] uppercase tracking-[0.26em] font-bold mb-2" style={{ color: 'rgba(255,255,255,0.7)' }}>
                  costado oriente
                </p>
                <p className={`${display.className} uppercase text-2xl md:text-3xl`} style={{ color: '#fff' }}>
                  Oriente
                </p>
                <p className="text-xs md:text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,255,255,0.82)' }}>
                  Para los que van rumbo al sur.
                </p>
              </div>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-6" delay={100}>
              <figure className="relative h-full">
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] md:aspect-auto md:h-full border-2 border-dashed" style={{ borderColor: C.red }}>
                  <Image
                    src={`${IMG}/tunel.webp`}
                    alt="El túnel peatonal iluminado que cruza bajo la Ruta 5 uniendo los dos locales"
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="absolute bottom-3 left-3 right-3 text-center text-[11px] md:text-xs uppercase tracking-[0.2em] font-bold rounded-lg px-3 py-2"
                  style={{ backgroundColor: 'rgba(20,20,20,0.85)', color: C.cream }}
                >
                  El túnel bajo la Ruta 5 — sí, se cruza a pie
                </figcaption>
              </figure>
            </Reveal>
            <Reveal className="col-span-6 md:col-span-3" delay={160}>
              <div className="h-full rounded-2xl p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.red }}>
                <p className="text-[10px] uppercase tracking-[0.26em] font-bold mb-2" style={{ color: 'rgba(255,244,236,0.75)' }}>
                  costado poniente
                </p>
                <p className={`${display.className} uppercase text-2xl md:text-3xl`} style={{ color: '#fff4ec' }}>
                  Poniente
                </p>
                <p className="text-xs md:text-sm mt-3 leading-relaxed" style={{ color: 'rgba(255,244,236,0.85)' }}>
                  Para los que vuelven a Santiago.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <div className="grid grid-cols-12 gap-6 mt-6 md:mt-8 items-center">
              <div className="col-span-12 md:col-span-4">
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <Image
                    src={`${IMG}/acceso-tunel.webp`}
                    alt="Señalética del acceso al túnel peatonal entre los dos locales"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="col-span-12 md:col-span-8 text-sm md:text-base leading-relaxed" style={{ color: 'rgba(242,234,217,0.75)' }}>
                Pocos restaurantes de Chile te piden cruzar debajo de la
                carretera para completar la visita. En Los Ganaderos la
                parada es en serio: comes de un lado, paseas del otro y
                vuelves por el túnel iluminado.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La parrilla ── */}
      <section id="parrilla" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b pb-4" style={{ borderColor: 'rgba(242,234,217,0.18)' }}>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: C.red }}>
              de la cocina
            </span>
            <h2 className={`${display.className} uppercase leading-none text-[clamp(2.2rem,6vw,4.2rem)]`} style={{ color: '#fff' }}>
              La parrilla manda
            </h2>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-5 md:gap-6">
          {PARRILLA.map((p, i) => (
            <Reveal key={p.label} className="col-span-6 md:col-span-3" delay={i * 90}>
              <li>
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <p className={`${display.className} uppercase text-base md:text-lg mt-3`} style={{ color: C.cream }}>
                  {p.label}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Cinta ── */}
      <div className="py-4" style={{ backgroundColor: C.red }} aria-hidden="true">
        <div className={`${display.className} max-w-6xl mx-auto px-5 md:px-8 flex flex-wrap justify-center gap-y-1.5 uppercase text-base md:text-lg tracking-[0.08em]`} style={{ color: '#fff4ec' }}>
          {CINTA.map((item) => (
            <span key={item} className="inline-flex items-center">
              <span className="px-3">{item}</span>
              <span aria-hidden="true" style={{ color: 'rgba(255,244,236,0.5)' }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Más que un restaurante ── */}
      <section id="paseo" className="scroll-mt-20" style={{ backgroundColor: C.carbonSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b pb-4" style={{ borderColor: 'rgba(242,234,217,0.18)' }}>
              <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: C.red }}>
                el paseo completo
              </span>
              <h2 className={`${display.className} uppercase leading-none text-[clamp(2.2rem,6vw,4.2rem)]`} style={{ color: '#fff' }}>
                Más que una parada
              </h2>
            </div>
          </Reveal>
          <ul className="grid grid-cols-12 gap-5 md:gap-6">
            {PASEO.map((p, i) => (
              <Reveal key={p.label} className="col-span-6 md:col-span-3" delay={i * 90}>
                <li>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/5]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <p className={`${display.className} uppercase text-base md:text-lg mt-3`} style={{ color: C.cream }}>
                    {p.label}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={160}>
            <div className="grid grid-cols-12 gap-6 mt-8 md:mt-10">
              <div className="col-span-12 md:col-span-5 relative overflow-hidden rounded-2xl aspect-[16/9]">
                <Image
                  src={`${IMG}/fachada-dia.webp`}
                  alt="Fachada de día de Los Ganaderos con la bandera chilena"
                  fill
                  sizes="(min-width: 768px) 42vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-12 md:col-span-7 flex flex-col justify-center">
                <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(242,234,217,0.78)' }}>
                  Pioneros en unir viñas y restaurante en la ruta: además
                  de la parrilla hay vinoteca con vinos de la zona,
                  autoservicio, mini golf entre los jardines y terraza
                  para los días de sol. La foto de arriba es la fachada
                  real, con su bandera.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
        <Reveal>
          <div className="flex items-baseline gap-4 mb-8 md:mb-10 border-b pb-4" style={{ borderColor: 'rgba(242,234,217,0.18)' }}>
            <span className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold" style={{ color: C.red }}>
              {BIZ.rating} · {BIZ.reviews.toLocaleString('es-CL')} opiniones
            </span>
            <h2 className={`${display.className} uppercase leading-none text-[clamp(2.2rem,6vw,4.2rem)]`} style={{ color: '#fff' }}>
              Palabra de viajero
            </h2>
          </div>
        </Reveal>
        <ul className="grid grid-cols-12 gap-6">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} className="col-span-12 md:col-span-4" delay={i * 110}>
              <li className="h-full">
                <figure
                  className="h-full rounded-2xl p-6 md:p-7 flex flex-col border"
                  style={{ backgroundColor: C.carbonSoft, borderColor: 'rgba(242,234,217,0.16)' }}
                >
                  <Stars value={r.stars} color={C.red} className="mb-4" />
                  <blockquote className="text-sm md:text-base leading-relaxed font-medium flex-1" style={{ color: C.cream }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-5 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.red }}>
                    {r.author} — reseña en Google
                  </figcaption>
                </figure>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.green }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
                  km 265 · ruta 5 sur
                </p>
                <h2 className={`${display.className} uppercase leading-[0.95] text-[clamp(2.4rem,6vw,4.4rem)] mb-6`} style={{ color: '#fff' }}>
                  Paras a un lado
                  <br />
                  o al otro
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-7 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {BIZ.address} (locales Oriente y Poniente)
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
                </address>
                <div className="space-y-2 text-sm mb-8" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  <p>{BIZ.hours}</p>
                  <p>{BIZ.hoursWeekend}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={CALL_LINK}
                    className={`${display.className} lg-btn inline-block uppercase tracking-wide text-sm md:text-base px-7 py-3.5 tap-44`}
                    style={{ backgroundColor: C.red, color: '#fff4ec' }}
                  >
                    Llamar al restaurant
                  </a>
                  <a
                    href={BIZ.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} lg-btn inline-block uppercase tracking-wide text-sm md:text-base px-7 py-3.5 border-2 tap-44`}
                    style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
                  >
                    losganaderos.cl
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] border-4" style={{ borderColor: C.carbon }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Image src={`${IMG}/logo.webp`} alt="Logo de Los Ganaderos" width={72} height={42} className="rounded" />
            <p className={`${display.className} uppercase text-xl md:text-2xl`}>{BIZ.name}</p>
          </div>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(242,234,217,0.65)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={CALL_LINK} className="underline underline-offset-2 tap-44">{BIZ.phoneDisplay}</a>
            {' · '}
            <a href={BIZ.instagram} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.igUser}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(242,234,217,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(242,234,217,0.6)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#fff' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con fotos y reseñas reales del restaurante.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.red }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <CallFab href={CALL_LINK} label={`Llamar a ${BIZ.name}`} bg={C.red} />
    </div>
  )
}
