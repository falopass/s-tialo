/**
 * app/demos/minimarket-emily/page.tsx
 *
 * Mockup de muestra para Minimarket Emily (Molina).
 * Idea: "la góndola del pasaje" — el toldo a cuadros de la entrada,
 * las etiquetas de precio amarillas y los pasillos A1–A4 que ofrecen
 * sus propios letreros; abierto todos los días hasta las 10.
 */

import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import LazyMap from '../lazy-map'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  HORARIO,
  PASILLOS,
  OFRECE,
  RESENAS,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700' }],
})

export const metadata = demoMetadata({
  slug: 'minimarket-emily',
  title: 'Minimarket Emily | Demo de sitio web',
  description:
    'Así se vería el sitio de Minimarket Emily: el almacén del Pasaje Río Aconcagua en Molina, abierto todos los días hasta las 10 — con fotos y reseñas reales.',
  image: `${IMG}/fachada-letrero.webp`,
})

const C = {
  tinta: '#232A35',
  azul: '#1E50A2',
  azulOscuro: '#143763',
  crema: '#FBF5E8',
  verde: '#2E7D43',
  amarillo: '#FFC51B',
  rojo: '#B3202C',
  muted: '#5C6470',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// El toldo a cuadros de la entrada (azul/blanco)
function Toldo() {
  return (
    <div
      className="h-3.5 md:h-4 w-full"
      aria-hidden="true"
      role="presentation"
      style={{
        backgroundImage: `conic-gradient(#FFFFFF 25%, ${C.azul} 0 50%, #FFFFFF 0 75%, ${C.azul} 0)`,
        backgroundSize: '30px 30px',
      }}
    />
  )
}

// Etiqueta de precio amarilla con orificio, como las del estante
function Tag({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`${mono.className} inline-flex items-center gap-2 px-3 py-1.5 text-[11px] md:text-xs uppercase tracking-[0.12em] rounded-sm ${className}`}
      style={{ backgroundColor: C.amarillo, color: C.tinta }}
    >
      <span className="w-2 h-2 rounded-full border-2" style={{ borderColor: 'rgba(35,42,53,0.65)' }} aria-hidden="true" />
      {children}
    </span>
  )
}

export default function MinimarketEmily() {
  return (
    <div className={body.className} style={{ backgroundColor: C.crema, color: C.tinta }}>
      <BlitzNav
        logoSrc={`${IMG}/logo.webp`}
        name={
          <span className={`${display.className} font-bold tracking-[0.02em]`}>
            Minimarket <span style={{ color: C.amarillo }}>Emily</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.azulOscuro,
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.15)',
          btnBg: C.amarillo,
          btnInk: C.tinta,
        }}
      />

      {/* ── Hero: la esquina del pasaje ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.azulOscuro }}>
        <Image
          src={`${IMG}/fachada-letrero.webp`}
          alt="Fachada de Minimarket Emily en Pasaje Río Aconcagua, Molina: letrero, carteles de ensaladas frescas y la entrada abierta"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(180deg, rgba(20,55,99,0.55) 0%, rgba(20,55,99,0.15) 40%, rgba(20,55,99,0.94) 90%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 w-full pt-32 pb-8">
          <Reveal>
            <Tag>9:00 – 22:00 · todos los días</Tag>
            <h1 className={`${display.className} font-extrabold uppercase text-[clamp(2.5rem,9.5vw,5.6rem)] leading-[0.95] tracking-[0.01em] mt-5 mb-5`} style={{ color: '#FFFFFF' }}>
              El almacén
              <br />
              que <span style={{ color: C.amarillo }}>siempre abre.</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-lg mb-8" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Pan, verduras frescas, abarrotes y hasta carbón para el asado —
              en el Pasaje Río Aconcagua de Molina, los siete días de la semana.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.amarillo, color: C.tinta }}
              >
                Consultar por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.6)', color: '#FFFFFF' }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>
        <Toldo />
      </section>

      {/* ── Datos rápidos: la tira del precio ── */}
      <section aria-label="Datos del negocio" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10 flex flex-wrap items-center gap-3 md:gap-4">
          <Reveal>
            <Tag>{BIZ.rating.toLocaleString('es-CL')} ★ · {BIZ.reviews} reseñas</Tag>
          </Reveal>
          <Reveal delay={60}>
            <Tag>Pje. Río Aconcagua 1389</Tag>
          </Reveal>
          <Reveal delay={120}>
            <Tag>Molina · abierto hoy</Tag>
          </Reveal>
        </div>
      </section>

      {/* ── Los pasillos de la góndola ── */}
      <section id="pasillos" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.verde }}>
              Los pasillos de siempre
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-6xl leading-[0.95] mb-10 md:mb-14`}>
              De la góndola <span style={{ color: C.azul }}>a la mesa</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {PASILLOS.map((p, i) => (
              <Reveal key={p.num} delay={i * 70}>
                <article className="rounded-2xl overflow-hidden border-2 h-full flex flex-col" style={{ borderColor: C.azulOscuro, backgroundColor: '#FFFFFF' }}>
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 45vw, 92vw"
                      className="object-cover"
                    />
                    <span
                      className={`${mono.className} absolute top-3 left-3 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] rounded-sm`}
                      style={{ backgroundColor: C.amarillo, color: C.tinta }}
                    >
                      {p.num}
                    </span>
                  </div>
                  <div className="px-5 py-5">
                    <h3 className={`${display.className} font-bold uppercase text-xl md:text-2xl tracking-[0.02em] mb-2`} style={{ color: C.azulOscuro }}>
                      {p.title}
                    </h3>
                    <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {p.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* el resto del almacén, como en su letrero */}
          <Reveal delay={80}>
            <div className="mt-8 md:mt-10 rounded-2xl border-2 px-5 md:px-7 py-6" style={{ borderColor: 'rgba(30,80,162,0.35)', backgroundColor: '#FFFFFF' }}>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mb-4`} style={{ color: C.azul }}>
                Y todo lo que falta en la casa
              </p>
              <ul className="flex flex-wrap gap-2">
                {OFRECE.map((o) => (
                  <li
                    key={o}
                    className="px-3.5 py-2 rounded-full border text-sm font-semibold"
                    style={{ borderColor: 'rgba(30,80,162,0.4)', color: C.azulOscuro, backgroundColor: C.crema }}
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reseñas: la vitrina llena ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.azulOscuro }}>
        <Toldo />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-end mb-10 md:mb-14">
              <div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-3`} style={{ color: C.amarillo }}>
                  Lo que dice la cuadra
                </p>
                <p className={`${display.className} font-extrabold leading-none text-[clamp(4rem,13vw,7rem)]`} style={{ color: '#FFFFFF' }}>
                  {BIZ.rating.toLocaleString('es-CL')}
                  <span className="text-[0.38em]" style={{ color: 'rgba(255,255,255,0.65)' }}>/5</span>
                </p>
                <div className="mt-3">
                  <Stars value={BIZ.rating} color={C.amarillo} className="w-5 h-5" />
                </div>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {BIZ.reviews} reseñas en Google Maps
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed max-w-md md:pb-4" style={{ color: 'rgba(255,255,255,0.78)' }}>
                «Recomendable 100 %»: quienes pasan por el pasaje destacan la
                variedad y la buena atención del negocio nuevo de la cuadra.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="h-full rounded-2xl px-6 py-6 flex flex-col" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}>
                  <blockquote className="text-base md:text-lg leading-relaxed flex-1" style={{ color: '#FFFFFF' }}>
                    «{r.quote}»
                  </blockquote>
                  <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-5 pt-3 border-t`} style={{ color: 'rgba(255,255,255,0.75)', borderColor: 'rgba(255,255,255,0.15)' }}>
                    {r.author} · Reseña en Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── El local en el pasaje ── */}
      <section id="local" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <div className="grid grid-rows-[1fr_auto] gap-4 h-full">
              <div className="relative rounded-2xl overflow-hidden min-h-[280px] border-2" style={{ borderColor: C.azulOscuro }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada de Minimarket Emily con el toldo a cuadros azul y blanco y el cartel del negocio"
                  fill
                  sizes="(min-width: 768px) 45vw, 92vw"
                  className="object-cover"
                />
              </div>
              <figure className="relative rounded-2xl overflow-hidden border-2" style={{ borderColor: C.azulOscuro }}>
                <div className="relative aspect-[16/10]">
                  <Image
                    src={`${IMG}/interior-verduras.webp`}
                    alt="Interior de Minimarket Emily: cooler de bebidas, estantes de abarrotes y la mesa de frutas y verduras"
                    fill
                    sizes="(min-width: 768px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} absolute bottom-3 left-3 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] rounded-sm`} style={{ backgroundColor: C.amarillo, color: C.tinta }}>
                  El local por dentro
                </figcaption>
              </figure>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em] mb-4`} style={{ color: C.rojo }}>
              Dónde queda
            </p>
            <h2 className={`${display.className} font-extrabold uppercase text-4xl md:text-5xl leading-[0.98] mb-6`}>
              En el Pasaje<br />
              <span style={{ color: C.azul }}>Río Aconcagua</span>
            </h2>
            <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.muted }}>
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}
            </address>
            <ul className="mb-8">
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-baseline justify-between gap-4 py-3 border-b" style={{ borderColor: 'rgba(35,42,53,0.14)' }}>
                  <span className={`${mono.className} text-[11px] uppercase tracking-[0.14em]`} style={{ color: C.muted }}>
                    {h.dia}
                  </span>
                  <span className={`${display.className} font-bold uppercase text-lg tracking-[0.03em] text-right`} style={{ color: C.verde }}>
                    {h.hora}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.verde, color: '#FFFFFF' }}
              >
                Escribir al negocio
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold uppercase tracking-[0.05em] text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(35,42,53,0.45)', color: C.tinta }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={80}>
          <div className="px-5 md:px-8 max-w-6xl mx-auto pb-14 md:pb-20">
            <div className="rounded-2xl overflow-hidden border-2 min-h-[300px]" style={{ borderColor: C.azulOscuro }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full min-h-[300px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CTA: la etiqueta colgante ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.verde }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            {/* el letrero real del local, recortado de su propia foto */}
            {/* eslint-disable-next-line @next/next/no-img-element -- recorte del letrero real de la fachada */}
            <img
              src={`${IMG}/logo.webp`}
              alt="Letrero de Minimarket Emily: pan, abarrotes, bebidas, lácteos, carnes, artículos de aseo, carbón y más"
              className="mx-auto mb-8 w-[280px] md:w-[360px] h-auto rounded-lg shadow-lg"
            />
            <h2 className={`${display.className} font-extrabold uppercase text-[clamp(2.2rem,8vw,4.6rem)] leading-[0.95] mb-5`} style={{ color: '#FFFFFF' }}>
              ¿Te falta algo
              <br />
              <span style={{ color: C.amarillo }}>para la once?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: '#FFFFFF' }}>
              Abierto todos los días de 9 a 10 de la noche en el Pasaje Río
              Aconcagua — pregunta por WhatsApp o pasa al local.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-bold inline-block uppercase tracking-[0.05em] text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.amarillo, color: C.tinta }}
            >
              Escribir a Minimarket Emily
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-5`} style={{ color: '#FFFFFF' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
        <Toldo />
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.azulOscuro, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-bold uppercase tracking-[0.04em] text-xl mb-1.5`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t mt-5" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: '#FFFFFF' }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, letrero y reseñas
            reales de su ficha de Google Maps; los textos de venta son de
            muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.amarillo }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
