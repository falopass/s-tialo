import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, ESTANTE, OPINIONES, WA_LINK, WA_PEDIDO, WA_MAYOR, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// Del logo y el mural: mostaza del arco, café casi negro del trazo, crema de
// fondo y el verde agua de los gatos del mural.
const C = {
  mostaza: '#F3B33D',
  cafe: '#2B1E16',
  crema: '#FFF7E8',
  crema2: '#FBEACB',
  agua: '#2F8577',
  muted: '#6A5547',
  line: 'rgba(43,30,22,0.14)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// Arco de puerta, como el del logo.
const ARCO: CSSProperties = { borderRadius: '999px 999px 22px 22px' }

export const metadata: Metadata = demoMetadata({
  slug: 'el-paraiso-mascotas-valdivia',
  title: 'El Paraíso Mascotas · Tienda de mascotas en Valdivia',
  description:
    'Alimento para perros y gatos, snacks e higiene en Av. Argentina 2557, Valdivia. Venta por mayor y al detalle, abierto todos los días. Escríbenos por WhatsApp.',
  image: '/demos/el-paraiso-mascotas-valdivia/hero.webp',
})

const NAV_LINKS = [
  { label: 'Tienda', href: '#tienda' },
  { label: 'Por mayor', href: '#mayor' },
  { label: 'Horario', href: '#horario' },
  { label: 'Dónde', href: '#donde' },
]

/** Huella de mascota en SVG. */
function Huella({ color, className = '', style }: { color: string; className?: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
      <ellipse cx="32" cy="42" rx="14" ry="12" fill={color} />
      <ellipse cx="14" cy="26" rx="6" ry="8" fill={color} />
      <ellipse cx="26" cy="16" rx="6" ry="8" fill={color} />
      <ellipse cx="40" cy="16" rx="6" ry="8" fill={color} />
      <ellipse cx="51" cy="26" rx="6" ry="8" fill={color} />
    </svg>
  )
}

/** Rastro de huellas que aparecen una tras otra, como un perro caminando. */
function Rastro({ n = 6, delay = 0, color, className = '' }: { n?: number; delay?: number; color: string; className?: string }) {
  return (
    <div className={`flex items-end gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: n }).map((_, i) => (
        <Huella
          key={i}
          color={color}
          className="ep-paso h-5 w-5 shrink-0"
          style={{ animationDelay: `${delay + i * 0.22}s`, transform: `translateY(${i % 2 ? -6 : 0}px) rotate(90deg)` }}
        />
      ))}
    </div>
  )
}

function Rotulo({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p className={`${display.className} text-sm font-bold uppercase tracking-[0.18em]`} style={{ color }}>
      {children}
    </p>
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
  tone: 'cafe' | 'mostaza' | 'agua' | 'linea'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'cafe'
      ? { backgroundColor: C.cafe, color: C.crema }
      : tone === 'mostaza'
        ? { backgroundColor: C.mostaza, color: C.cafe }
        : tone === 'agua'
          ? { backgroundColor: C.agua, color: '#FFFFFF' }
          : { border: `2px solid ${C.cafe}`, color: C.cafe }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} ep-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold tap-44`}
      style={st}
    >
      {children}
    </a>
  )
}

export default function ElParaisoMascotasPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.cafe }}
    >
      <style>{`
        /* Huellas: cada paso aparece y se asienta, una detrás de otra. */
        @keyframes ep-paso { 0% { opacity: 0; scale: 0.4 } 60% { opacity: 1; scale: 1.15 } 100% { opacity: 1; scale: 1 } }
        .ep-paso { animation: ep-paso 0.5s ease-out both }

        /* La foto crece desde la base del arco, como abrir la puerta de la tienda. */
        @keyframes ep-puerta { from { transform: scaleY(0.2); opacity: 0 } to { transform: scaleY(1); opacity: 1 } }
        .ep-puerta { transform-origin: bottom center; animation: ep-puerta 1s cubic-bezier(0.2,0.8,0.2,1) 0.25s both }

        @keyframes ep-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .ep-sube { animation: ep-sube 0.8s ease-out both }

        /* Las tarjetas del estante dan un saltito al entrar, de a una. */
        @keyframes ep-salto { 0% { opacity: 0; transform: translateY(30px) } 70% { opacity: 1; transform: translateY(-6px) } 100% { opacity: 1; transform: none } }
        @supports (animation-timeline: view()) {
          .ep-salto { animation: ep-salto linear both; animation-timeline: view(); animation-range: entry 0% entry 60% }
        }

        .ep-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .ep-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .ep-btn:active { transform: scale(0.97) }
        .ep-btn:focus-visible { outline: 3px solid ${C.agua}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .ep-paso, .ep-puerta, .ep-sube, .ep-salto { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(255,247,232,0.95)',
          ink: C.cafe,
          line: C.line,
          btnBg: C.cafe,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Hero: la puerta en arco ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div
          className="absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full pointer-events-none"
          style={{ backgroundColor: C.crema2 }}
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-28 md:pt-36 pb-14 md:pb-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center">
          <div>
            <div className="ep-sube flex items-center gap-3" style={{ animationDelay: '0.15s' }}>
              <Image src={`${IMG}/logo.webp`} alt="Logo de El Paraíso Mascotas" width={52} height={52} className="rounded-xl" />
              <Rotulo color={C.agua}>Valdivia · Av. Argentina</Rotulo>
            </div>
            <h1
              className={`${display.className} ep-sube mt-5 font-extrabold leading-[0.98] tracking-[-0.01em] text-[clamp(2.7rem,10vw,5.6rem)]`}
              style={{ animationDelay: '0.3s' }}
            >
              Todo para tu
              <br />
              <span className="inline-block rounded-2xl px-3 -ml-1" style={{ backgroundColor: C.mostaza }}>
                regalón.
              </span>
            </h1>
            <Rastro className="mt-6" delay={0.8} color={C.cafe} />
            <p className="ep-sube mt-6 max-w-md text-lg leading-relaxed" style={{ color: C.muted, animationDelay: '1.1s' }}>
              Alimento para perros y gatos, snacks e higiene. Venta por mayor y
              al detalle, abierto todos los días.
            </p>
            <div className="ep-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '1.25s' }}>
              <Btn href={WA_PEDIDO} tone="cafe">
                Consultar por WhatsApp
              </Btn>
              <Btn href="#tienda" tone="linea" external={false}>
                Ver la tienda
              </Btn>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[340px]">
            <div className="ep-puerta relative overflow-hidden aspect-[3/4]" style={{ ...ARCO, border: `6px solid ${C.cafe}`, boxShadow: '0 26px 50px rgba(43,30,22,0.2)' }}>
              <Image
                src={`${IMG}/hero.webp`}
                alt="Fachada de El Paraíso Mascotas en Av. Argentina, Valdivia"
                fill
                priority
                sizes="340px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 · Tienda: estante en arcos ── */}
      <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.mostaza }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.cafe}>En nuestros estantes</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6.5vw,4.2rem)]`}>
              Lo que buscas para perros y gatos.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: 'rgba(43,30,22,0.82)' }}>
              Algunas de las marcas que verás en la tienda. Pregúntanos por
              WhatsApp si tenemos la tuya y el formato que necesitas.
            </p>
          </Reveal>
          <ul className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
            {ESTANTE.map((e) => (
              <li key={e.img} className="ep-salto">
                <div className="relative overflow-hidden aspect-[3/4]" style={{ ...ARCO, backgroundColor: C.crema, border: `4px solid ${C.cafe}` }}>
                  <Image src={`${IMG}/${e.img}.webp`} alt={e.alt} fill sizes="(min-width: 768px) 20vw, 50vw" className="object-cover" />
                </div>
                <h3 className={`${display.className} mt-3 text-lg font-bold leading-tight`}>{e.titulo}</h3>
                <p className="text-sm" style={{ color: 'rgba(43,30,22,0.8)' }}>
                  {e.detalle}
                </p>
              </li>
            ))}
          </ul>
          <Reveal delay={100}>
            <div className="mt-12">
              <Btn href={WA_PEDIDO} tone="cafe">
                Preguntar por un alimento
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 3 · Por mayor: el mural ── */}
      <section id="mayor" className="scroll-mt-20" style={{ backgroundColor: C.cafe, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-16 items-center">
          <Reveal>
            <figure className="mx-auto max-w-[360px]">
              <div className="relative overflow-hidden aspect-[3/4] rounded-[28px]" style={{ border: `4px solid ${C.mostaza}` }}>
                <Image src={`${IMG}/mural.webp`} alt="Mural de El Paraíso Mascotas: ventas de alimentos para mascotas por mayor y al detalle" fill sizes="360px" className="object-cover" />
              </div>
              <figcaption className="mt-3 text-center text-sm" style={{ color: 'rgba(255,247,232,0.7)' }}>
                Nuestro mural en Av. Argentina
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={120}>
            <Rotulo color={C.mostaza}>Por mayor y al detalle</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6vw,4rem)]`}>
              Un saco o una bolsita, como te acomode.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: 'rgba(255,247,232,0.85)' }}>
              Vendemos alimento por mayor y al detalle. Si compras para un
              criadero, un refugio o tu propio negocio, escríbenos y vemos
              cantidades.
            </p>
            <Rastro className="mt-7" n={5} color={C.mostaza} />
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href={WA_MAYOR} tone="mostaza">
                Consultar por mayor
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Horario + opiniones ── */}
      <section id="horario" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <Rotulo color={C.agua}>Horario</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.2rem,5.5vw,3.6rem)]`}>
              Abiertos todos los días.
            </h2>
            <ul className="mt-8 space-y-3 max-w-md">
              {HORARIO.map((h) => (
                <li key={h.dia} className="flex items-center justify-between gap-4 rounded-2xl px-5 py-4" style={{ backgroundColor: C.crema2 }}>
                  <span className="font-semibold">{h.dia}</span>
                  <span className={`${display.className} text-lg font-bold`}>{h.hora}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <div id="opiniones" className="scroll-mt-20">
            <Reveal delay={100}>
              <Rotulo color={C.agua}>Opiniones en Google</Rotulo>
            </Reveal>
            <div className="mt-6 space-y-8">
              {OPINIONES.map((o, i) => (
                <Reveal key={o.autor} delay={160 + i * 100}>
                  <figure className="relative pl-12">
                    <Huella color={C.mostaza} className="absolute left-0 top-1 h-8 w-8" />
                    <blockquote className={`${display.className} text-[clamp(1.5rem,3.4vw,2.1rem)] font-bold leading-tight`}>
                      “{o.texto}”
                    </blockquote>
                    <figcaption className="mt-2 text-sm font-semibold" style={{ color: C.muted }}>
                      {o.autor}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
            <Reveal delay={360}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex font-semibold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: C.agua }}
              >
                Ver las {BIZ.reviews} opiniones en Google
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5 · Dónde ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.agua, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo color={C.crema2}>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6vw,4rem)]`}>
              Av. Argentina 2557, Valdivia
            </h2>
            <address className="not-italic mt-6 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.88)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="font-bold underline underline-offset-4 tap-44" style={{ color: '#FFFFFF' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="mostaza">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative w-full overflow-hidden rounded-[28px] aspect-[4/3] min-h-[300px]" style={{ border: '4px solid rgba(255,255,255,0.3)' }}>
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
      <section style={{ backgroundColor: C.crema2 }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <Huella color={C.cafe} className="mx-auto h-12 w-12" />
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1] text-[clamp(2.4rem,7vw,4.4rem)]`}>
              ¿Se le acabó el alimento?
            </h2>
            <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed" style={{ color: C.muted }}>
              Escríbenos qué marca y qué tamaño buscas, y te contamos si lo
              tenemos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_PEDIDO} tone="cafe">
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Footer ── */}
      <footer style={{ backgroundColor: C.cafe, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src={`${IMG}/logo.webp`} alt="" width={44} height={44} className="rounded-lg" />
              <div>
                <p className={`${display.className} text-2xl font-extrabold leading-none`}>{BIZ.name}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,247,232,0.7)' }}>
                  {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,247,232,0.85)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(255,247,232,0.14)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,247,232,0.6)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.crema }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.mostaza }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
