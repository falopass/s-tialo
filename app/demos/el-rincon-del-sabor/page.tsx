import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, HOURS, REVIEWS } from './content'
import { demoMetadata } from '../meta'
import { BlitzNav, Reveal, Stars, WaFab } from '../blitz-kit'
import { DemoBand } from '../kit'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/passion-one/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/passion-one/normal-700.woff2', weight: '700', style: 'normal' },
    { path: '../../fonts/passion-one/normal-900.woff2', weight: '900', style: 'normal' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

export const metadata: Metadata = demoMetadata({
  slug: 'el-rincon-del-sabor',
  title: `${BIZ.name} — Restaurant de ruta en la ${BIZ.route}, ${BIZ.city}`,
  description: `Comida casera y helado a la orilla de la ${BIZ.route}, comuna de ${BIZ.city}: terraza al aire libre, porciones generosas y estacionamiento. ${BIZ.address}, ${BIZ.city}.`,
  image: `${IMG}/fachada.webp`,
})

// Paleta tomada de su logo real: fondo crema, rojo y amarillo del sello,
// texto café oscuro.
const C = {
  papel: '#FBF4E4',
  papelSoft: '#F3E8CF',
  crema: '#FFFDF6',
  cafe: '#2A1A10',
  cafeSoft: '#6B4A33',
  rojo: '#C22F1F',
  rojoDark: '#93240F',
  amarillo: '#F2B01E',
  line: 'rgba(42,26,16,.14)',
} as const

const WaIcon = ({ className = 'w-4 h-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5a9.9 9.9 0 1 0 2.8-18.5Zm5.6 14.2c-.23.65-1.33 1.24-1.85 1.29-.5.05-1.13.24-3.8-.8-3.2-1.26-5.25-4.53-5.4-4.74-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.64-.4.85-.4h.61c.2 0 .46-.07.72.55.27.63.9 2.18.98 2.34.08.16.13.35.02.56-.1.21-.16.34-.32.53-.16.19-.34.42-.48.56-.16.16-.33.34-.14.66.19.32.84 1.39 1.8 2.25 1.24 1.1 2.28 1.45 2.6 1.6.32.16.5.14.69-.08.19-.21.79-.92 1-1.24.21-.32.43-.26.72-.16.29.1 1.84.87 2.16 1.03.32.16.53.24.6.37.09.13.09.75-.14 1.4Z" />
  </svg>
)

// Divisor de ruta: línea segmentada como la carpeta asfáltica.
function RoadLine() {
  return (
    <div aria-hidden="true" className="h-1.5 w-full" style={{ background: `repeating-linear-gradient(90deg, ${C.amarillo} 0 34px, transparent 34px 58px)` }} />
  )
}

// Señal tipo hito de ruta (placa verde → aquí sellada en rojo/amarillo de la casa).
function RouteSign({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={`${mono.className} inline-block text-[11px] md:text-xs tracking-[0.22em] uppercase rounded px-3 py-1.5 border`}
      style={{ background: C.rojo, color: C.crema, borderColor: C.amarillo, boxShadow: `0 0 0 2px ${C.rojo}` }}
    >
      {children}
    </span>
  )
}

const PLATOS = [
  {
    src: 'pollo',
    alt: 'Plato de fondo servido en El Rincón del Sabor con papas y ensalada',
    nombre: 'El plato de fondo',
    nota: 'Porciones generosas, servidas como en casa.',
  },
  {
    src: 'paila',
    alt: 'Paila caliente de la casa en El Rincón del Sabor',
    nombre: 'La paila caliente',
    nota: 'Para el frío del valle, directo a la mesa.',
  },
] as const

export default function ElRinconDelSabor() {
  return (
    <main className={body.className} style={{ background: C.papel, color: C.cafe }}>
      <BlitzNav
        name={BIZ.name}
        links={[
          { href: '#carta', label: 'La carta' },
          { href: '#terraza', label: 'La terraza' },
          { href: '#opiniones', label: 'Opiniones' },
          { href: '#visita', label: 'Cómo llegar' },
        ]}
        waLink={WA_LINK}
        theme={{
          over: 'light',
          bar: 'rgba(251,244,228,.94)',
          ink: C.cafe,
          line: C.line,
          btnBg: C.rojo,
          btnInk: C.crema,
        }}
        fontClass={display.className}
        ctaLabel="Reservar mesa"
        logoSrc={`${IMG}/logo-badge.webp`}
      />

      {/* HERO — lema real de su logo + foto real del local */}
      <section className="relative overflow-hidden pt-24 md:pt-28">
        <div className="mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-[1.05fr_.95fr] md:items-center pb-12 md:pb-16">
          <div>
            <Reveal>
              <Image
                src={`${IMG}/logo-badge.webp`}
                alt="Sello de El Rincón del Sabor: sombrero de huaso y la frase un lugar para disfrutar"
                width={168}
                height={168}
                className="w-24 md:w-28 h-auto rounded-2xl shadow-md mb-6"
              />
            </Reveal>
            <Reveal delay={80}>
              <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-4`} style={{ color: C.rojo }}>
                {BIZ.route} · Comuna de {BIZ.city}
              </p>
              <h1 className={`${display.className} font-bold uppercase leading-[0.95] text-5xl md:text-7xl`}>
                Un lugar<br />para <span style={{ color: C.rojo }}>disfrutar</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.cafeSoft }}>
                Comida casera, terraza al aire libre y helado para el postre — a la orilla de la
                ruta, en la comuna de {BIZ.city}.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-md"
                  style={{ background: C.rojo, color: C.crema }}
                >
                  <WaIcon /> Pedir por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold border"
                  style={{ borderColor: C.cafe, color: C.cafe }}
                >
                  Ver la ruta
                </a>
              </div>
            </Reveal>
          </div>
          <Reveal delay={140} className="md:justify-self-end w-full">
            <figure className="relative rounded-3xl overflow-hidden border-4 rotate-[1.5deg] shadow-xl" style={{ borderColor: C.crema }}>
              <Image
                src={`${IMG}/fachada.webp`}
                alt="Terraza de El Rincón del Sabor con mesas, sombrillas de colores y banderines a la orilla de la Ruta K-620"
                width={1000}
                height={720}
                className="w-full h-auto object-cover"
                priority
              />
            </figure>
          </Reveal>
        </div>
        <RoadLine />
      </section>

      {/* RUTA — hitos del camino, todos datos reales de su ficha */}
      <section className="py-10 md:py-12" style={{ background: C.cafe }}>
        <div className="mx-auto max-w-6xl px-5 flex flex-wrap items-center gap-x-8 gap-y-4 justify-center md:justify-between">
          <p className={`${display.className} font-bold uppercase text-3xl md:text-4xl tracking-wide`} style={{ color: C.amarillo }}>
            {BIZ.route}
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <RouteSign>Comuna de {BIZ.city}</RouteSign>
            <RouteSign>Estacionamiento</RouteSign>
            <RouteSign>Terraza al aire libre</RouteSign>
            <RouteSign>Todos bienvenidos</RouteSign>
          </div>
        </div>
      </section>

      {/* LA CARTA — pizarra de fonda con fotos reales de sus platos */}
      <section id="carta" className="py-14 md:py-20" style={{ background: C.cafe }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="text-center mb-10">
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-3`} style={{ color: C.amarillo }}>
              Fotos reales de su cocina
            </p>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl`} style={{ color: C.crema }}>
              La carta de la casa
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-2 mb-8">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 90}>
                <figure className="rounded-2xl overflow-hidden shadow-lg" style={{ background: C.crema }}>
                  <Image
                    src={`${IMG}/${p.src}.webp`}
                    alt={p.alt}
                    width={1000}
                    height={750}
                    className="w-full h-auto object-cover"
                  />
                  <figcaption className="px-5 py-4 flex items-baseline justify-between gap-3">
                    <span className={`${display.className} font-bold uppercase text-xl`} style={{ color: C.cafe }}>
                      {p.nombre}
                    </span>
                    <span className="text-sm" style={{ color: C.cafeSoft }}>{p.nota}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal className="text-center">
            <p className="inline-block rounded-full px-6 py-3 text-base" style={{ background: 'rgba(242,176,30,.15)', color: C.amarillo }}>
              …y <strong>helado</strong> para cerrar — “delicious ice cream” dice quien ya fue.
            </p>
          </Reveal>
        </div>
      </section>

      <RoadLine />

      {/* TERRAZA — de día y de noche, ambas fotos reales */}
      <section id="terraza" className="py-14 md:py-20" style={{ background: C.papel }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-10 md:text-center">
            <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-3`} style={{ color: C.rojo }}>
              Mesas afuera, sombra de paragua
            </p>
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl`}>
              La terraza<br className="md:hidden" /> <span style={{ color: C.rojo }}>de ruta</span>
            </h2>
          </Reveal>
          <div className="grid gap-6 md:grid-cols-[1.15fr_.85fr]">
            <Reveal>
              <figure className="rounded-3xl overflow-hidden shadow-lg h-full">
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada de El Rincón del Sabor con sombrillas rojas y mesas en la terraza"
                  width={1000}
                  height={1300}
                  className="w-full h-full object-cover"
                />
              </figure>
            </Reveal>
            <div className="flex flex-col gap-6">
              <Reveal delay={80}>
                <figure className="rounded-3xl overflow-hidden shadow-lg">
                  <Image
                    src={`${IMG}/noche.webp`}
                    alt="Clientes cenando de noche en las mesas exteriores de El Rincón del Sabor"
                    width={1000}
                    height={700}
                    className="w-full h-auto object-cover"
                  />
                </figure>
              </Reveal>
              <Reveal delay={160}>
                <div className="rounded-3xl p-6 shadow-lg" style={{ background: C.rojo }}>
                  <p className={`${display.className} font-bold uppercase text-2xl mb-2`} style={{ color: C.crema }}>
                    De día y de noche
                  </p>
                  <p className="text-sm md:text-base" style={{ color: C.crema, opacity: 0.92 }}>
                    Mesas a la orilla del camino, con parqueo propio y ambiente familiar.
                    En la noche, la terraza se llena igual.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* VAS POR LA RUTA — la señal real de la comuna */}
      <section className="py-14 md:py-20" style={{ background: C.papelSoft }}>
        <div className="mx-auto max-w-6xl px-5 grid gap-10 md:grid-cols-[.9fr_1.1fr] md:items-center">
          <Reveal>
            <figure className="rounded-3xl overflow-hidden shadow-lg rotate-[-1deg]">
              <Image
                src={`${IMG}/ruta.webp`}
                alt="Señal de bienvenida a la comuna de Maule en la Ruta K-620, junto al restaurant"
                width={1000}
                height={750}
                className="w-full h-auto object-cover"
              />
            </figure>
          </Reveal>
          <div>
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-3`} style={{ color: C.rojo }}>
                Vas por la {BIZ.route}
              </p>
              <h2 className={`${display.className} font-bold uppercase text-4xl md:text-5xl leading-[1.02]`}>
                Pará acá nomás
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-5 text-base md:text-lg max-w-md" style={{ color: C.cafeSoft }}>
                El local está a la orilla de la {BIZ.route}, bajo la señal de bienvenida a la
                comuna de {BIZ.city}. Fácil de llegar, con estacionamiento — como dicen quienes
                ya pasaron por acá.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-6">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold shadow-md"
                  style={{ background: C.cafe, color: C.crema }}
                >
                  <WaIcon /> Avisar que vas en camino
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OPINIONES — reseñas reales de Google */}
      <section id="opiniones" className="py-14 md:py-20" style={{ background: C.papel }}>
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:items-start">
            <Reveal className="md:sticky md:top-24">
              <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.28em] uppercase mb-3`} style={{ color: C.rojo }}>
                Lo que dice la gente
              </p>
              <p className={`${display.className} font-bold text-7xl md:text-8xl leading-none`} style={{ color: C.rojo }}>
                {BIZ.rating}
              </p>
              <Stars value={5} color={C.amarillo} className="w-6 h-6" />
              <p className="mt-3 text-sm" style={{ color: C.cafeSoft }}>
                {BIZ.reviewCount} reseñas en Google
              </p>
            </Reveal>
            <div className="flex flex-col gap-5">
              {REVIEWS.map((r, i) => (
                <Reveal key={r.author} delay={i * 80}>
                  <blockquote className="rounded-2xl border-l-4 pl-5 pr-4 py-4" style={{ borderColor: C.amarillo, background: C.crema }}>
                    <p className="text-base md:text-lg leading-relaxed" style={{ color: C.cafe }}>
                      “{r.text}”
                    </p>
                    <footer className="mt-3 flex items-center justify-between gap-3">
                      <cite className="not-italic text-sm font-semibold" style={{ color: C.cafe }}>
                        {r.author}
                      </cite>
                      <span className={`${mono.className} text-xs`} style={{ color: C.cafeSoft }}>
                        {r.when} · reseña de Google
                      </span>
                    </footer>
                  </blockquote>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RoadLine />

      {/* VISITA — dirección real, horario real, mapa */}
      <section id="visita" className="py-14 md:py-20" style={{ background: C.cafe }}>
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="mb-10">
            <h2 className={`${display.className} font-bold uppercase text-4xl md:text-6xl`} style={{ color: C.crema }}>
              {BIZ.route}, {BIZ.city}
            </h2>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-[1.1fr_.9fr]">
            <Reveal>
              <div className="rounded-3xl overflow-hidden border shadow-lg" style={{ borderColor: 'rgba(251,244,228,.2)' }}>
                <LazyMap src={MAPS_EMBED} title={`Mapa de ${BIZ.name}, ${BIZ.address}, comuna de ${BIZ.city}`} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-3xl p-6 md:p-8" style={{ background: 'rgba(251,244,228,.06)', color: C.crema }}>
                <dl className="space-y-5 text-sm md:text-base">
                  <div>
                    <dt className={`${mono.className} text-[11px] tracking-[0.25em] uppercase mb-1`} style={{ color: C.amarillo }}>
                      Dirección
                    </dt>
                    <dd>{BIZ.address}, comuna de {BIZ.city}, {BIZ.region}</dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] tracking-[0.25em] uppercase mb-1`} style={{ color: C.amarillo }}>
                      Horario
                    </dt>
                    <dd className="space-y-1">
                      {HOURS.map((h) => (
                        <p key={h.d}>
                          {h.d} · <strong>{h.h}</strong>
                        </p>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className={`${mono.className} text-[11px] tracking-[0.25em] uppercase mb-1`} style={{ color: C.amarillo }}>
                      Pedidos y consultas
                    </dt>
                    <dd>
                      {BIZ.phoneDisplay} <span className="opacity-70">(WhatsApp)</span>
                    </dd>
                  </div>
                </dl>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold"
                    style={{ background: C.amarillo, color: C.cafe }}
                  >
                    <WaIcon /> Escribir ahora
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-44 inline-flex items-center gap-2 rounded-full px-6 py-3 text-base font-semibold border"
                    style={{ borderColor: C.crema, color: C.crema }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER ≤340px */}
      <footer className="pb-24 pt-8 px-5" style={{ background: C.cafe }}>
        <div className="mx-auto max-w-6xl border-t pt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between text-sm" style={{ borderColor: 'rgba(251,244,228,.15)', color: C.papelSoft }}>
          <p>
            <span className={`${display.className} font-bold uppercase text-sm tracking-wide`} style={{ color: C.crema }}>
              {BIZ.name}
            </span>
            {' '}· {BIZ.address}, comuna de {BIZ.city}
          </p>
          <div className="flex items-center gap-5">
            <span>{BIZ.tagline}</span>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="tap-44 underline underline-offset-4" style={{ color: C.amarillo }}>
              Google Maps
            </a>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir a ${BIZ.short} por WhatsApp`} />
    </main>
  )
}
