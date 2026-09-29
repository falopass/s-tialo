import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties, ReactNode } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_MENU, MAPS_URL, MAPS_EMBED, IMG, MENU_DIA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900' }],
})

// Paleta de sus activos: el naranjo de la casita pintada a mano,
// el verde de su logo y el crema de la carta.
const C = {
  cream: '#FBF3E4',
  creamDeep: '#F3E5CB',
  line: '#E4CDA8',
  ink: '#3A2410',
  naranjo: '#DE7A2C',
  naranjoDeep: '#A8531A',
  verde: '#4E8A5A',
  verdeDeep: '#35633F',
  muted: '#6E5138',
} as const

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'sabores-propios',
  title: 'Sabores Propios — la casita naranja de O’Higgins, Empedrado',
  description:
    'Cafetería y restaurant en O’Higgins Nº520, Empedrado: menú del día con entrada, fondo y postre, opciones vegetarianas, cafés, pasteles y helados de la vitrina.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El menú del día', href: '#menu' },
  { label: 'La vitrina', href: '#vitrina' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Cómo llegar', href: '#contacto' },
]

function Kicker({ children, color = C.verdeDeep }: { children: ReactNode; color?: string }) {
  return (
    <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.26em] mb-4`} style={{ color }}>
      {children}
    </p>
  )
}

export default function SaboresPropiosPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.cream, color: C.ink }}
    >
      <style>{`
        .sp-btn { transition: transform 0.18s ease, filter 0.18s ease, background-color 0.18s ease; }
        .sp-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .sp-btn:active { transform: translateY(0) scale(0.97); }
        .sp-btn:focus-visible { outline: 3px solid ${C.verde}; outline-offset: 3px; }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(251,243,228,0.97)',
          ink: '#3A2410',
          line: 'rgba(58,36,16,0.15)',
          btnBg: C.naranjo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la casita pintada a mano ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid grid-cols-12 gap-6 md:gap-10 items-center">
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <Reveal>
              <Kicker>O’Higgins Nº520 · Empedrado</Kicker>
              <h1
                className={`${display.className} text-[clamp(2.6rem,6.6vw,4.8rem)] leading-[1.02] mb-6`}
                style={{ color: C.ink }}
              >
                La casita naranja donde el menú
                <span style={{ color: C.naranjo }}> lo escribe la dueña</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: C.muted }}>
                Cafetería y restaurant de barrio: almuerzo completo con
                entrada, fondo y postre, siempre con opción vegetariana —
                y helados y pasteles para la vuelta.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_MENU}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                  style={{ backgroundColor: C.naranjo, color: '#FFFFFF' }}
                >
                  Preguntar el menú de hoy
                </a>
                <a
                  href="#menu"
                  className="sp-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                  style={{ borderColor: C.verdeDeep, color: C.verdeDeep }}
                >
                  Ver cómo es
                </a>
              </div>
            </Reveal>
          </div>
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2 relative">
            <Reveal delay={140}>
              <div className="relative">
                <div className="relative overflow-hidden rounded-[2rem] aspect-square border-4" style={{ borderColor: C.naranjo }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada naranja de Sabores Propios en O'Higgins, Empedrado, con el logo pintado a mano sobre la entrada"
                    fill
                    priority
                    sizes="(min-width: 1024px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className="absolute -bottom-6 -left-3 md:-left-8 w-36 md:w-44 rotate-[-4deg] rounded-xl overflow-hidden border-4 shadow-xl p-2"
                  style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
                  <img
                    src={`${IMG}/logo.webp`}
                    alt="Logo pintado a mano de Sabores Propios"
                    className="block w-full h-auto rounded-lg"
                  />
                </div>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-btn absolute top-4 right-4 inline-flex items-center gap-2 text-xs md:text-sm font-bold px-4 py-2 rounded-full whitespace-nowrap tap-44"
                  style={{ backgroundColor: '#FFFFFF', color: C.ink }}
                >
                  <Stars value={BIZ.rating} color={C.naranjo} className="w-4 h-4" />
                  {String(BIZ.rating).replace('.', ',')} · {BIZ.reviews} reseñas
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* franja del mural pintado a mano */}
      <div className="relative h-28 md:h-44 overflow-hidden" aria-hidden="true">
        <Image
          src={`${IMG}/mural-platos.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(58,36,16,0.45), rgba(58,36,16,0.12) 55%, rgba(58,36,16,0.45))' }} />
        <p
          className={`${display.className} absolute inset-0 flex items-center justify-center text-center text-2xl md:text-4xl px-6`}
          style={{ color: '#FBF3E4', textShadow: '0 2px 14px rgba(0,0,0,0.55)' }}
        >
          pintado a mano, como el nombre de la casa
        </p>
      </div>

      {/* ── El menú del día ── */}
      <section id="menu" className="scroll-mt-20" style={{ backgroundColor: C.naranjoDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <Kicker color="#F7D9A8">entrada · fondo · postre</Kicker>
              <h2
                className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] mb-4`}
                style={{ color: '#FFF6E4' }}
              >
                El menú del día, completo y de la zona
              </h2>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'rgba(255,246,228,0.82)' }}>
                Tres tiempos servidos en mesa, cocinados por Viviana —
                así lo cuentan quienes ya probaron.
              </p>
            </div>
          </Reveal>

          {/* la tarjeta del menú */}
          <Reveal delay={120}>
            <div
              className="relative max-w-3xl mx-auto rounded-3xl border-4 overflow-hidden"
              style={{ backgroundColor: C.cream, borderColor: '#FFF6E4' }}
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={`${IMG}/plato.webp`}
                  alt="Plato de fondo del menú del día de Sabores Propios"
                  fill
                  sizes="(min-width: 768px) 700px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:p-10">
                <p
                  className={`${display.className} text-center text-2xl md:text-3xl mb-8`}
                  style={{ color: C.naranjoDeep }}
                >
                  — menú del día —
                </p>
                <ul>
                  {MENU_DIA.map((m) => (
                    <li
                      key={m.paso}
                      className="py-5 border-b border-dashed last:border-b-0"
                      style={{ borderColor: C.line }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                        <span
                          className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.22em] sm:w-24 shrink-0`}
                          style={{ color: C.verdeDeep }}
                        >
                          {m.paso}
                        </span>
                        <div>
                          <p className={`${display.className} text-xl md:text-2xl mb-1`} style={{ color: C.ink }}>
                            {m.plato}
                          </p>
                          <p className="text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                            {m.nota}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-8">
                  <a
                    href={WA_LINK_MENU}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn inline-block font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.verdeDeep, color: '#FFFFFF' }}
                  >
                    ¿Cuál es el menú de hoy? →
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La vitrina y el café ── */}
      <section id="vitrina" className="scroll-mt-20" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <Kicker>para la vuelta</Kicker>
                <h2
                  className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] mb-4`}
                  style={{ color: C.ink }}
                >
                  La vitrina de helados
                  <span style={{ color: C.naranjo }}> y el café de la tarde</span>
                </h2>
                <p className="text-base md:text-lg leading-relaxed mb-8" style={{ color: C.muted }}>
                  Helados La Specialitatis en la vitrina de la entrada,
                  cafés y pasteles hechos en la casa. La parada dulce de
                  O’Higgins antes de seguir camino.
                </p>
                <ul className="space-y-3">
                  {['Helados La Specialitatis', 'Cafés y pasteles de la casa', 'Menú del día con opción vegetariana'].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg viewBox="0 0 16 12" className="w-4 h-4 shrink-0" aria-hidden="true">
                        <path d="M1 6.5 5.5 11 15 1" fill="none" stroke={C.verdeDeep} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-sm md:text-base font-semibold" style={{ color: C.ink }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <div className="grid grid-cols-12 gap-4">
                <Reveal delay={90} className="col-span-7">
                  <div className="relative overflow-hidden rounded-2xl h-56 md:h-72 w-full border-2" style={{ borderColor: C.naranjo }}>
                    <Image
                      src={`${IMG}/vitrina.webp`}
                      alt="Vitrina de helados La Specialitatis en Sabores Propios"
                      fill
                      sizes="(min-width: 1024px) 40vw, 58vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={170} className="col-span-5">
                  <div className="relative overflow-hidden rounded-2xl h-56 md:h-72 w-full border-2" style={{ borderColor: C.verdeDeep }}>
                    <Image
                      src={`${IMG}/mesa-cafe.webp`}
                      alt="Mesa con café servido en Sabores Propios"
                      fill
                      sizes="(min-width: 1024px) 28vw, 42vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── La terraza ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: C.verdeDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <div className="col-span-12 md:col-span-4">
              <Reveal>
                <Kicker color="#C9E4CE">afuera de la casita</Kicker>
                <h2
                  className={`${display.className} text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.06] mb-4`}
                  style={{ color: '#FBF3E4' }}
                >
                  Mesas a la sombra de la calle principal
                </h2>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,243,228,0.82)' }}>
                  La terraza de la casa, mirando pasar a Empedrado —
                  el puesto natural para el café de la tarde.
                </p>
              </Reveal>
            </div>
            <Reveal delay={120} className="col-span-12 md:col-span-8">
              <div className="relative overflow-hidden rounded-2xl aspect-[2/1] border-2" style={{ borderColor: 'rgba(251,243,228,0.45)' }}>
                <Image
                  src={`${IMG}/terraza.webp`}
                  alt="Terraza de Sabores Propios con mesas a la sombra frente a la fachada naranja"
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas reales ── */}
      <section aria-label="Reseñas" style={{ backgroundColor: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker>en Google</Kicker>
            <h2
              className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] mb-12 max-w-3xl`}
              style={{ color: C.ink }}
            >
              Todas las reseñas, cinco estrellas
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.autor} delay={i * 90} className="col-span-12 md:col-span-4">
                <figure
                  className="h-full flex flex-col p-6 md:p-8 rounded-3xl border-2"
                  style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}
                >
                  <Stars value={r.estrellas} color={C.naranjo} className="w-4 h-4 mb-4" />
                  <blockquote className="text-base md:text-lg leading-relaxed flex-1 mb-5" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: C.verdeDeep }}>
                    {r.autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={220} className="col-span-12 md:col-span-4">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn flex flex-col justify-between h-full min-w-0 overflow-hidden p-6 md:p-8 rounded-3xl tap-44"
                style={{ backgroundColor: C.naranjo, color: '#FFF6E4' }}
              >
                <div>
                  <p className={`${display.className} text-5xl md:text-6xl leading-none mb-3`}>
                    {String(BIZ.rating).replace('.', ',')}★
                  </p>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: 'rgba(255,246,228,0.88)' }}>
                    en las {BIZ.reviews} reseñas de su ficha de Google
                  </p>
                </div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-6`} style={{ color: '#FFF6E4' }}>
                  Ver la ficha →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Ubicación y contacto ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Kicker color="#F7D9A8">la casita naranja de O’Higgins</Kicker>
            <h2
              className={`${display.className} text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] mb-12 max-w-3xl`}
              style={{ color: '#FFF6E4' }}
            >
              En O’Higgins 520,
              <span style={{ color: '#F0B76B' }}> con la mesa lista</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-12 gap-6 md:gap-12 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-semibold space-y-1" style={{ color: '#FFF6E4' }}>
                  <p>{BIZ.address}</p>
                  <p>{BIZ.city}, {BIZ.region}</p>
                </address>
                <p className="text-sm md:text-base leading-relaxed mb-8 max-w-sm" style={{ color: 'rgba(255,246,228,0.75)' }}>
                  Cafetería y restaurant. Para saber el menú del día,
                  escríbele directo por WhatsApp.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_MENU}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn font-bold text-sm md:text-base px-7 py-3 rounded-full tap-44"
                    style={{ backgroundColor: C.naranjo, color: '#FFFFFF' }}
                  >
                    Escribir por WhatsApp
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sp-btn font-bold text-sm md:text-base px-7 py-3 rounded-full border-2 tap-44"
                    style={{ borderColor: 'rgba(255,246,228,0.5)', color: '#FFF6E4' }}
                  >
                    Abrir en Google Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div
                  className="relative w-full overflow-hidden rounded-2xl border-2 aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px]"
                  style={{ borderColor: 'rgba(255,246,228,0.4)' }}
                >
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
      <footer style={{ backgroundColor: C.naranjoDeep, color: '#FFF6E4' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,246,228,0.72)' }}>
            {BIZ.address} · {BIZ.city}, {BIZ.region}
            <br />
            Cafetería y restaurant · {BIZ.phoneDisplay}
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(255,246,228,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-8 text-xs leading-relaxed" style={{ color: 'rgba(255,246,228,0.78)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#FFF6E4' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con datos y fotos de su ficha de Google.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: '#FFE1B3' }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}, Empedrado`} />
    </div>
  )
}
