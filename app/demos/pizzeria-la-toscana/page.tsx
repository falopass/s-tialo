/**
 * app/demos/pizzeria-la-toscana/page.tsx
 *
 * Mockup de muestra para Pizzería la Toscana (Molina).
 * Idea: "la ronda de la esquina" — la pizza entera como motivo:
 * círculos de plato, borde de masa punteado y el ticket de cocina
 * con sus números reales (Maipú 2030, +56 9 3258 6497).
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
  WA_LINK_PEDIDO,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PIZZAS,
  RESENAS,
  NAV_LINKS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/fraunces/normal-100-900.woff2', weight: '100 900' }],
})
const displayIt = localFont({
  src: [{ path: '../../fonts/fraunces/italic-100-900.woff2', weight: '100 900' }],
  style: 'italic',
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400' }],
})

export const metadata = demoMetadata({
  slug: 'pizzeria-la-toscana',
  title: 'Pizzería la Toscana | Demo de sitio web',
  description:
    'Así se vería el sitio de Pizzería la Toscana: las pizzas de la esquina de Maipú en Molina — con fotos y reseñas reales.',
  image: `${IMG}/pizza-pepperoni.webp`,
})

const C = {
  carbon: '#211711',
  carbonSuave: '#2E211A',
  crema: '#F8EDDC',
  cremaSuave: '#F3E3CB',
  terracota: '#BE5A32',
  terracotaClara: '#D97241',
  tomate: '#A33327',
  verde: '#4C6B3C',
  oro: '#D9A24B',
  muted: '#6E5F52',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

// Plato: foto circular con borde de masa punteado
function Plato({
  src,
  alt,
  className = '',
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-2.5 rounded-full border-2 border-dashed" style={{ borderColor: C.oro }} aria-hidden="true" />
      <div className="relative w-full aspect-square rounded-full overflow-hidden border-4" style={{ borderColor: C.crema }}>
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 768px) 30vw, 80vw" className="object-cover" />
      </div>
    </div>
  )
}

// Franja perforada, como el borde de un ticket de cocina
function Perforacion({ color }: { color: string }) {
  return (
    <div
      className="h-2.5 w-full"
      aria-hidden="true"
      role="presentation"
      style={{
        backgroundImage: `radial-gradient(circle, ${color} 4px, transparent 4.5px)`,
        backgroundSize: '22px 10px',
        backgroundRepeat: 'repeat-x',
        backgroundPosition: 'center',
      }}
    />
  )
}

export default function PizzeriaLaToscana() {
  return (
    <div className={body.className} style={{ backgroundColor: C.carbon, color: C.crema }}>
      <BlitzNav
        logoSrc={`${IMG}/logo.webp`}
        name={
          <span className={`${display.className} font-bold tracking-[0.02em]`}>
            La <span style={{ color: C.terracotaClara }}>Toscana</span>
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        theme={{
          over: 'dark',
          bar: C.carbon,
          ink: C.crema,
          line: 'rgba(248,237,220,0.14)',
          btnBg: C.tomate,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero: la ronda ── */}
      <section id="inicio" className="relative min-h-svh overflow-hidden" style={{ backgroundColor: C.carbon }}>
        {/* círculos de fondo, como horno y masa */}
        <div className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full border border-dashed opacity-25" style={{ borderColor: C.oro }} aria-hidden="true" />
        <div className="absolute -bottom-48 -left-32 w-[420px] h-[420px] rounded-full opacity-10" style={{ backgroundColor: C.terracota }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-32 pb-14 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-8 items-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.oro }}>
              Maipú 2030 · Molina
            </p>
            <h1 className={`${display.className} font-semibold text-[clamp(2.8rem,9.5vw,5.4rem)] leading-[1.0] tracking-[-0.01em] mb-6`}>
              La pizza
              <br />
              de la esquina{' '}
              <span className={displayIt.className} style={{ color: C.terracotaClara }}>
                de Maipú.
              </span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-md mb-8" style={{ color: 'rgba(248,237,220,0.75)' }}>
              Masa del día, variedad para todos los gustos y la mesa más
              conversada de Molina — para llevar o para quedarse un rato.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK_PEDIDO}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.tomate, color: C.crema }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/5 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(248,237,220,0.5)', color: C.crema }}
              >
                Ver la esquina →
              </a>
            </div>
            <div className="flex items-center gap-3 mt-8">
              <Stars value={BIZ.rating} color={C.oro} className="w-4 h-4" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(248,237,220,0.65)' }}>
                {BIZ.rating.toLocaleString('es-CL')} · {BIZ.reviews} reseñas en Google
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <Plato
              src={`${IMG}/pizza-pepperoni.webp`}
              alt="Pizza de pepperoni con aceitunas y orégano de Pizzería la Toscana en Molina, vista entera sobre la mesa"
              className="w-[78%] max-w-[380px] mx-auto md:w-full md:max-w-none"
              priority
            />
          </Reveal>
        </div>
      </section>

      {/* ── Ticket de cocina ── */}
      <section aria-label="Datos del local" style={{ backgroundColor: C.crema }}>
        <Perforacion color={C.carbon} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10" style={{ color: C.carbon }}>
          <Reveal>
            <div className={`${mono.className} grid sm:grid-cols-3 gap-x-8 gap-y-4 text-[12px] md:text-sm uppercase tracking-[0.12em]`}>
              <p className="flex items-baseline justify-between gap-3 border-b border-dashed pb-2" style={{ borderColor: 'rgba(33,23,17,0.35)' }}>
                <span style={{ color: C.muted }}>Local</span>
                <span className="font-bold text-right">{BIZ.address}</span>
              </p>
              <p className="flex items-baseline justify-between gap-3 border-b border-dashed pb-2" style={{ borderColor: 'rgba(33,23,17,0.35)' }}>
                <span style={{ color: C.muted }}>Pedidos</span>
                <span className="font-bold text-right">{BIZ.phoneDisplay}</span>
              </p>
              <p className="flex items-baseline justify-between gap-3 border-b border-dashed pb-2" style={{ borderColor: 'rgba(33,23,17,0.35)' }}>
                <span style={{ color: C.muted }}>Nota</span>
                <span className="font-bold text-right" style={{ color: C.tomate }}>{BIZ.rating.toLocaleString('es-CL')} / 5</span>
              </p>
            </div>
          </Reveal>
        </div>
        <Perforacion color={C.carbon} />
      </section>

      {/* ── De la pala: las tres de la casa ── */}
      <section id="pizzas" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.oro }}>
              De la pala a la mesa
            </p>
            <h2 className={`${display.className} font-semibold text-4xl md:text-6xl leading-[1.0] mb-4`}>
              Las rondas que salen{' '}
              <span className={displayIt.className} style={{ color: C.terracotaClara }}>
                todos los días
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-lg mb-14 leading-relaxed" style={{ color: 'rgba(248,237,220,0.65)' }}>
              Fotos de su propia cocina: la variedad que los clientes mencionan
              cuando dicen «10/10».
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-x-8 gap-y-14">
            {PIZZAS.map((p, i) => (
              <Reveal key={p.num} delay={i * 90}>
                <article className="text-center">
                  <Plato src={p.src} alt={p.alt} className="w-[72%] max-w-[300px] mx-auto mb-7" />
                  <p className={`${mono.className} text-[11px] tracking-[0.3em] mb-3`} style={{ color: C.terracotaClara }}>
                    {p.num}
                  </p>
                  <h3 className={`${display.className} font-semibold text-2xl md:text-[1.7rem] leading-tight mb-3`}>
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed max-w-[280px] mx-auto" style={{ color: 'rgba(248,237,220,0.65)' }}>
                    {p.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reseñas: la mesa conversada ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.carbonSuave }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.oro }}>
                La mesa conversada
              </p>
              <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-6`}>
                «Las pizzas{' '}
                <span className={displayIt.className} style={{ color: C.terracotaClara }}>10/10»</span>
              </h2>
              <p className={`${display.className} font-semibold leading-none text-[clamp(4rem,12vw,6.5rem)] mb-3`} style={{ color: C.crema }}>
                {BIZ.rating.toLocaleString('es-CL')}
                <span className="text-[0.4em]" style={{ color: 'rgba(248,237,220,0.7)' }}>/5</span>
              </p>
              <Stars value={BIZ.rating} color={C.oro} className="w-5 h-5" />
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-3`} style={{ color: 'rgba(248,237,220,0.55)' }}>
                {BIZ.reviews} reseñas en Google Maps
              </p>
            </Reveal>

            <div className="flex flex-col gap-5">
              {RESENAS.map((r, i) => (
                <Reveal key={r.author} delay={i * 80}>
                  <figure className="rounded-2xl px-6 py-5 border-l-4" style={{ backgroundColor: 'rgba(248,237,220,0.06)', borderColor: C.terracotaClara }}>
                    <blockquote className={`${displayIt.className} text-base md:text-lg leading-relaxed`} style={{ color: C.crema }}>
                      «{r.quote}»
                    </blockquote>
                    <figcaption className={`${mono.className} text-[10px] uppercase tracking-[0.16em] mt-4`} style={{ color: 'rgba(248,237,220,0.75)' }}>
                      {r.author} · Reseña en Google
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── La esquina: el local ── */}
      <section id="esquina" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div style={{ color: C.carbon }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <Reveal>
                <div className="relative">
                  <div className="relative aspect-[4/5] max-w-[420px] rounded-2xl overflow-hidden border-4" style={{ borderColor: C.carbon }}>
                    <Image
                      src={`${IMG}/fachada-toldo.webp`}
                      alt="Fachada de Pizzería la Toscana en Maipú 2030, Molina, con su toldo verde a rayas en la esquina"
                      fill
                      sizes="(min-width: 768px) 40vw, 92vw"
                      className="object-cover"
                    />
                  </div>
                  {/* el letrero redondo real del local */}
                  {/* eslint-disable-next-line @next/next/no-img-element -- recorte del letrero redondo real de su ficha */}
                  <img
                    src={`${IMG}/logo.webp`}
                    alt="Letrero redondo de Pizzería la Toscana colgado en el local"
                    className="absolute -bottom-6 -right-3 md:-right-6 w-28 md:w-36 h-auto rounded-full border-4 shadow-xl"
                    style={{ borderColor: C.crema }}
                  />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.tomate }}>
                  La esquina de siempre
                </p>
                <h2 className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.02] mb-6`}>
                  El toldo verde<br />
                  <span className={displayIt.className} style={{ color: C.tomate }}>de Maipú</span>
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: 'rgba(33,23,17,0.7)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                </address>
                <div className="rounded-2xl border-2 px-5 py-5 mb-8" style={{ borderColor: 'rgba(33,23,17,0.2)', backgroundColor: C.cremaSuave }}>
                  <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mb-2`} style={{ color: C.muted }}>
                    Pedidos y consultas
                  </p>
                  <p className={`${display.className} font-semibold text-2xl md:text-3xl`}>
                    {BIZ.phoneDisplay}
                  </p>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: 'rgba(33,23,17,0.65)' }}>
                    Un mensaje y la pizza sale para retiro — o consulta qué hay hoy.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK_PEDIDO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                    style={{ backgroundColor: C.tomate, color: C.crema }}
                  >
                    Hacer un pedido
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                    style={{ borderColor: 'rgba(33,23,17,0.45)', color: C.carbon }}
                  >
                    Cómo llegar →
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={80}>
              <div className="mt-12 md:mt-16 grid md:grid-cols-[0.45fr_1fr] gap-5 items-stretch">
                <figure className="relative rounded-2xl overflow-hidden border-4 min-h-[300px] md:min-h-0" style={{ borderColor: C.carbon }}>
                  <Image
                    src={`${IMG}/puerta-cartel.webp`}
                    alt="Puerta de Pizzería la Toscana con sus calcomanías de marca: teléfono, redes y la dirección Maipú 2030-2032, Molina"
                    fill
                    sizes="(min-width: 768px) 28vw, 92vw"
                    className="object-cover"
                  />
                  <figcaption className={`${mono.className} absolute bottom-3 left-3 text-[10px] uppercase tracking-[0.16em] px-2.5 py-1.5 rounded-full`} style={{ backgroundColor: 'rgba(33,23,17,0.85)', color: C.crema }}>
                    La puerta, con sus datos
                  </figcaption>
                </figure>
                <div className="rounded-2xl overflow-hidden border-2 min-h-[300px]" style={{ borderColor: 'rgba(33,23,17,0.5)' }}>
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
          </div>
        </div>
      </section>

      {/* ── CTA: último pedido de la noche ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.tomate }}>
        <div className="absolute -top-32 -right-32 w-[360px] h-[360px] rounded-full border-2 border-dashed opacity-30" style={{ borderColor: C.crema }} aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} font-semibold text-[clamp(2.4rem,8vw,4.8rem)] leading-[1.0] mb-5`} style={{ color: C.crema }}>
              ¿Pizza{' '}
              <span className={displayIt.className}>para esta noche?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-8 leading-relaxed" style={{ color: 'rgba(248,237,220,0.85)' }}>
              Escribe por WhatsApp, pide tu favorita y retírala en la esquina de
              Maipú — la mesa conversada te espera.
            </p>
            <a
              href={WA_LINK_PEDIDO}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.crema, color: C.tomate }}
            >
              Pedir a {BIZ.short}
            </a>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.16em] mt-5`} style={{ color: 'rgba(248,237,220,0.85)' }}>
              {BIZ.phoneDisplay} · {BIZ.city}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.carbon, color: C.crema }}>
        <Perforacion color="rgba(248,237,220,0.25)" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-6 pb-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <p className={`${display.className} font-semibold text-xl mb-1.5`}>
              {BIZ.name}
            </p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(248,237,220,0.55)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(248,237,220,0.55)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={`hover:text-white transition-colors ${focusRing} tap-44`}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t mt-5" style={{ borderColor: 'rgba(248,237,220,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: 'rgba(248,237,220,0.65)' }}>
            Mockup preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.crema }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name} — así se vería tu sitio. Fotos, letrero y reseñas
            reales de su ficha de Google Maps; los textos de venta son de
            muestra.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className={`font-semibold underline underline-offset-2 hover:opacity-80 ${focusRing} tap-44`} style={{ color: C.oro }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
