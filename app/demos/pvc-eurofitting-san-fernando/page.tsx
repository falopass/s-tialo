import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, LINEAS, OPINIONES, WA_LINK, WA_COTIZAR, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/ibm-plex-sans/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

// Plano hidráulico: celeste del PVC, gris hormigón, amarillo del hidrante
// y el azul profundo de los estanques.
const C = {
  pvc: '#1FA3B5',
  pvcOsc: '#0E6F7C',
  hormigon: '#E9E7E2',
  hormigon2: '#D6D3CC',
  hidrante: '#F4C400',
  tinta: '#14232A',
  muted: '#4D5A60',
  line: 'rgba(20,35,42,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// Cuadrícula de plano técnico, muy tenue.
const PLANO: CSSProperties = {
  backgroundImage: [
    'linear-gradient(rgba(14,111,124,0.07) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(14,111,124,0.07) 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '28px 28px',
}

export const metadata: Metadata = demoMetadata({
  slug: 'pvc-eurofitting-san-fernando',
  title: 'PVC Eurofitting · Materiales hidráulicos en San Fernando',
  description:
    'Ferretería de materiales hidráulicos en Rancagua 357, San Fernando: PVC, polietileno, estanques, bombas y cámaras. 4,6 en Google. Cotiza por WhatsApp.',
  image: '/demos/pvc-eurofitting-san-fernando/hero.webp',
})

const NAV_LINKS = [
  { label: 'Productos', href: '#productos' },
  { label: 'Atención', href: '#atencion' },
  { label: 'Horario', href: '#horario' },
  { label: 'Dónde', href: '#donde' },
]

/** Etiqueta de ficha técnica en monoespaciada. */
function Ficha({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${mono.className} text-xs uppercase tracking-[0.18em]`} style={{ color }}>
      {children}
    </p>
  )
}

/** Tramo de cañería que se llena de agua de izquierda a derecha. */
function Caneria({ delay = 0, className = '' }: { delay?: number; className?: string }) {
  return (
    <div className={`relative h-4 rounded-full overflow-hidden ${className}`} style={{ backgroundColor: 'rgba(20,35,42,0.12)', boxShadow: 'inset 0 1px 2px rgba(20,35,42,0.25)' }} aria-hidden="true">
      <span className="pe-agua absolute inset-0 rounded-full" style={{ backgroundColor: C.pvc, animationDelay: `${delay}s` }} />
      <span className="pe-brillo absolute inset-y-0 left-0 w-1/4" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)', animationDelay: `${delay + 1.2}s` }} />
    </div>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
}: {
  href: string
  children: React.ReactNode
  tone: 'pvc' | 'hidrante' | 'lineTinta' | 'lineClaro'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'pvc'
      ? { backgroundColor: C.pvcOsc, color: '#FFFFFF' }
      : tone === 'hidrante'
        ? { backgroundColor: C.hidrante, color: C.tinta }
        : tone === 'lineTinta'
          ? { border: `2px solid ${C.tinta}`, color: C.tinta }
          : { border: '2px solid rgba(255,255,255,0.6)', color: '#FFFFFF' }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} pe-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function PvcEurofittingPage() {
  return (
    <div
      className={`${body.className} pe-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.hormigon, color: C.tinta }}
    >
      <style>{`
        /* Títulos y citas en Space Grotesk; el cuerpo en IBM Plex Sans. */
        .pe-root h1, .pe-root h2, .pe-root h3, .pe-root blockquote, .pe-root footer p.text-2xl { font-family: ${display.style.fontFamily} }

        /* El agua corre por la cañería: relleno con scaleX desde la izquierda. */
        @keyframes pe-agua { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .pe-agua { transform-origin: left center; animation: pe-agua 1.6s cubic-bezier(0.55,0.05,0.25,1) both }

        /* Un brillo recorre el tubo lleno, como el agua en movimiento. */
        @keyframes pe-brillo { from { transform: translateX(-100%); opacity: 0 } 20% { opacity: 1 } to { transform: translateX(420%); opacity: 0 } }
        .pe-brillo { animation: pe-brillo 2.6s ease-in-out infinite both }

        @keyframes pe-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .pe-sube { animation: pe-sube 0.8s ease-out both }

        /* La foto del hero aparece como un plano que se despliega hacia abajo. */
        @keyframes pe-plano { from { transform: scaleY(0.04); opacity: 0.4 } to { transform: scaleY(1); opacity: 1 } }
        .pe-plano { transform-origin: top center; animation: pe-plano 1.1s cubic-bezier(0.2,0.8,0.2,1) 0.35s both }

        /* El tubo vertical que une los productos crece al bajar. */
        @keyframes pe-baja { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @supports (animation-timeline: view()) {
          .pe-baja { transform-origin: top center; animation: pe-baja linear both; animation-timeline: view(); animation-range: entry 10% cover 60% }
        }

        .pe-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .pe-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .pe-btn:active { transform: scale(0.97) }
        .pe-btn:focus-visible { outline: 3px solid ${C.hidrante}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .pe-agua, .pe-brillo, .pe-sube, .pe-plano, .pe-baja { animation: none !important }
          .pe-brillo { opacity: 0 }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'light',
          bar: 'rgba(233,231,226,0.95)',
          ink: C.tinta,
          line: C.line,
          btnBg: C.pvcOsc,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: ficha técnica + plano ── */}
      <section id="inicio" className="relative" style={{ ...PLANO, backgroundColor: C.hormigon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          <div>
            <div className="pe-sube" style={{ animationDelay: '0.2s' }}>
              <Ficha color={C.pvcOsc}>Ferretería · San Fernando · Rancagua 357</Ficha>
            </div>
            <h1
              className="pe-sube mt-5 font-bold leading-[0.98] tracking-[-0.03em] text-[clamp(2.7rem,9vw,5.4rem)]"
              style={{ animationDelay: '0.35s' }}
            >
              Todo lo que
              <br />
              lleva <span style={{ color: C.pvcOsc }}>agua.</span>
            </h1>
            <Caneria className="mt-6 max-w-sm" delay={0.7} />
            <p className="pe-sube mt-6 max-w-md text-lg leading-relaxed" style={{ color: C.muted, animationDelay: '0.9s' }}>
              PVC, polietileno, estanques, bombas y cámaras de hormigón en una
              bodega grande, con estacionamiento y gente que te orienta para
              hacer el trabajo.
            </p>
            <div className="pe-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.05s' }}>
              <Btn href={WA_COTIZAR} tone="pvc">
                Cotizar por WhatsApp
              </Btn>
              <Btn href="#productos" tone="lineTinta" external={false}>
                Ver productos
              </Btn>
            </div>
          </div>
          <figure>
            <div className="pe-plano relative overflow-hidden rounded-2xl aspect-[16/10]" style={{ boxShadow: '0 24px 50px rgba(20,35,42,0.22)' }}>
              <Image
                src={`${IMG}/hero.webp`}
                alt="Bodega de PVC Eurofitting con estanques, rollos y estanterías"
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 flex justify-between gap-4">
              <Ficha color={C.muted}>Fig. 01 · La bodega</Ficha>
              <Ficha color={C.muted}>
                {BIZ.rating} ★ Google
              </Ficha>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── 2 · Productos: listado conectado por un tubo ── */}
      <section id="productos" className="scroll-mt-20" style={{ backgroundColor: C.tinta, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Ficha color={C.hidrante}>Lo que hay en bodega</Ficha>
            <h2 className="mt-3 font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,6vw,4rem)]">
              Seis líneas, un solo mostrador.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Esto es lo que se ve hoy en nuestra bodega. Para medidas, stock y
              precios, escríbenos con tu lista.
            </p>
          </Reveal>
          <div className="relative mt-12">
            <span
              className="pe-baja hidden md:block absolute left-[27px] top-2 bottom-2 w-[6px] rounded-full"
              style={{ backgroundColor: C.pvc }}
              aria-hidden="true"
            />
            <ol className="flex flex-col gap-6 md:gap-8">
              {LINEAS.map((l, i) => (
                <li key={l.codigo}>
                  <Reveal delay={i * 60}>
                    <div className="grid grid-cols-[auto_1fr] md:grid-cols-[60px_1fr_280px] gap-x-5 gap-y-3 items-center">
                      <span
                        className={`${mono.className} relative z-10 flex h-[60px] w-[60px] items-center justify-center rounded-full text-sm`}
                        style={{ backgroundColor: C.tinta, border: `3px solid ${C.pvc}`, color: C.pvc }}
                      >
                        {l.codigo}
                      </span>
                      <h3 className="font-bold text-[clamp(1.4rem,3.4vw,2.2rem)] leading-tight">{l.titulo}</h3>
                      <div className="col-span-2 md:col-span-1 relative overflow-hidden rounded-xl aspect-[16/9]" style={{ border: '1px solid rgba(255,255,255,0.12)' }}>
                        <Image src={`${IMG}/${l.img}.webp`} alt={l.alt} fill sizes="(min-width: 768px) 280px, 100vw" className="object-cover" />
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <Reveal delay={100}>
            <div className="mt-12 flex flex-wrap gap-3">
              <Btn href={WA_COTIZAR} tone="hidrante">
                Enviar mi lista de materiales
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Atención: la opinión que lo dice todo ── */}
      <section id="atencion" className="scroll-mt-20" style={{ backgroundColor: C.hidrante }}>
        <div className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Ficha color={C.tinta}>Lo que dicen en Google</Ficha>
            <blockquote className="mt-5 font-bold leading-[1.15] tracking-[-0.015em] text-[clamp(1.6rem,4.2vw,2.8rem)]">
              “{OPINIONES.destacada.texto}”
            </blockquote>
            <p className={`${mono.className} mt-5 text-sm uppercase tracking-[0.16em]`}>{OPINIONES.destacada.autor}</p>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-10 pt-6 border-t-2 grid sm:grid-cols-[auto_1fr_1fr] gap-6 items-start" style={{ borderColor: C.tinta }}>
              <div>
                <p className="font-bold text-5xl leading-none">{BIZ.rating}</p>
                <Stars value={BIZ.ratingValue} color={C.tinta} size={16} className="mt-2" />
                <p className={`${mono.className} mt-1 text-xs uppercase tracking-[0.14em]`}>{BIZ.reviews} opiniones</p>
              </div>
              {OPINIONES.cortas.map((o) => (
                <figure key={o.autor}>
                  <blockquote className="text-xl font-bold">“{o.texto}”</blockquote>
                  <figcaption className={`${mono.className} mt-1 text-xs uppercase tracking-[0.14em]`}>{o.autor}</figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Horario: tabla de ficha técnica ── */}
      <section id="horario" className="scroll-mt-20" style={{ ...PLANO, backgroundColor: C.hormigon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Ficha color={C.pvcOsc}>Horario de atención</Ficha>
            <h2 className="mt-3 font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,3.6rem)]">
              Abierto de lunes a sábado.
            </h2>
            <table className="mt-8 w-full max-w-md text-left">
              <tbody>
                {HORARIO.map((h) => (
                  <tr key={h.dia} className="border-b" style={{ borderColor: C.line }}>
                    <th scope="row" className="py-3.5 pr-4 font-medium" style={{ color: C.muted }}>
                      {h.dia}
                    </th>
                    <td className={`${mono.className} py-3.5 text-right text-base`}>{h.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-xl aspect-square">
                <Image src={`${IMG}/cajas.webp`} alt="Cajas y piezas de hormigón en la bodega" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              </div>
              <div className="relative overflow-hidden rounded-xl aspect-square translate-y-6">
                <Image src={`${IMG}/estanques.webp`} alt="Estanques de agua en altura" fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Dónde ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.pvcOsc, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Ficha color={C.hidrante}>Dónde estamos</Ficha>
            <h2 className="mt-3 font-bold leading-[1.02] tracking-[-0.02em] text-[clamp(2.2rem,5.5vw,3.6rem)]">
              Rancagua 357, San Fernando
            </h2>
            <address className="not-italic mt-6 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.85)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-semibold underline underline-offset-4 tap-44" style={{ color: '#FFFFFF' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="hidrante">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="lineClaro">
                WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] min-h-[300px]" style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
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
      </section>

      {/* ── 6 · Cierre ── */}
      <section style={{ ...PLANO, backgroundColor: C.hormigon2 }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <h2 className="font-bold leading-[1.02] tracking-[-0.025em] text-[clamp(2.4rem,7vw,4.4rem)]">
              ¿Tienes la lista de materiales?
            </h2>
            <Caneria className="mt-6 mx-auto max-w-xs" delay={0.2} />
            <p className="mt-6 max-w-md mx-auto text-lg leading-relaxed" style={{ color: C.muted }}>
              Mándala por WhatsApp, con foto si quieres, y te respondemos con lo
              que hay en bodega.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_COTIZAR} tone="pvc">
                Cotizar por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-2xl font-bold">{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,255,255,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(255,255,255,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.hidrante }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
