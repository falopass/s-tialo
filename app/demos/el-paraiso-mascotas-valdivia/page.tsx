import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, ESTANTE, OPINIONES, WA_LINK, WA_ALIMENTO, WA_MAYOR, MAPS_URL, MAPS_EMBED, IMG } from './content'

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
  agua: '#2A7263',
  muted: '#6A5547',
  line: 'rgba(43,30,22,0.15)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// El arco del logo: tapa redonda, base plana.
const ARCO: CSSProperties = { borderRadius: '999px 999px 22px 22px' }

export const metadata: Metadata = demoMetadata({
  slug: 'el-paraiso-mascotas-valdivia',
  title: 'El Paraíso Mascotas · Tienda de mascotas en Valdivia',
  description:
    'Alimento para perros y gatos, snacks e higiene en Av. Argentina 2557, Valdivia. Venta por mayor y al detalle, abierto todos los días. Escríbenos por WhatsApp.',
  image: '/demos/el-paraiso-mascotas-valdivia/hero.webp',
})

const NAV_LINKS = [
  { label: 'Repisa', href: '#repisa' },
  { label: 'Por mayor', href: '#mayor' },
  { label: 'Horario', href: '#horario' },
  { label: 'Dónde', href: '#donde' },
]

const MARQUEE = [
  'Alimento para perros',
  'Alimento para gatos',
  'Premios y snacks',
  'Higiene',
  'Por mayor y al detalle',
  'Abierto todos los días',
]

/** Huella de mascota en SVG, como las del mural. */
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

/** Cola de perro que saluda: trazo grueso, como el del logo. */
function Cola({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 120" className={className} aria-hidden="true">
      <path
        d="M16 112 C 26 82, 60 78, 68 46 C 72 30, 68 18, 58 10"
        fill="none"
        stroke={C.cafe}
        strokeWidth="15"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Rotulo({ children, color, paw = true }: { children: React.ReactNode; color: string; paw?: boolean }) {
  return (
    <p className={`${display.className} flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em]`} style={{ color }}>
      {paw && <Huella color={color} className="h-4 w-4" />}
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
  tone: 'cafe' | 'mostaza' | 'crema' | 'lineaCafe' | 'lineaCrema'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'cafe'
      ? { backgroundColor: C.cafe, color: C.crema }
      : tone === 'mostaza'
        ? { backgroundColor: C.mostaza, color: C.cafe }
        : tone === 'crema'
          ? { backgroundColor: C.crema, color: C.cafe }
          : tone === 'lineaCafe'
            ? { border: `2px solid ${C.cafe}`, color: C.cafe }
            : { border: '2px solid rgba(255,247,232,0.7)', color: C.crema }
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
        /* Entrada suave, usada por bloques del hero. */
        @keyframes ep-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .ep-sube { animation: ep-sube 0.85s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Titular que entra línea por línea, dentro de máscaras. */
        @keyframes ep-linea { from { transform: translateY(112%) } to { transform: none } }
        .ep-linea { animation: ep-linea 0.95s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Trazo que se dibuja: el arco del logo, el círculo de "regalón". */
        @keyframes ep-trazo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .ep-trazo { stroke-dasharray: 100; animation: ep-trazo 1s cubic-bezier(0.4,0,0.2,1) both }

        /* La foto aparece detrás del arco. */
        @keyframes ep-foto { from { opacity: 0; transform: scale(1.08) } to { opacity: 1; transform: scale(1) } }
        .ep-foto { animation: ep-foto 1.1s cubic-bezier(0.22,0.61,0.2,1) 0.2s both }

        /* La cola asoma desde detrás del arco y saluda sin parar. */
        @keyframes ep-colain { from { opacity: 0; transform: translateX(20px) } to { opacity: 1; transform: none } }
        .ep-colain { animation: ep-colain 0.5s ease-out 1.15s both }
        @keyframes ep-cola { from { transform: rotate(-13deg) } to { transform: rotate(11deg) } }
        .ep-cola { transform-box: fill-box; transform-origin: 8% 94%; animation: ep-cola 0.6s ease-in-out 1.7s infinite alternate }

        /* Cinta corrida con la oferta de la tienda, banda apenas inclinada. */
        @keyframes ep-marcha { to { transform: translateX(-50%) } }
        .ep-marcha { animation: ep-marcha 32s linear infinite }

        /* Los productos caen a la repisa de a uno al entrar en pantalla.
           Sin opacidad en los keyframes: si el navegador no corre la
           animación ligada a scroll, la repisa se ve completa igual. */
        @keyframes ep-cae { 0% { transform: translateY(-30px) } 62% { transform: translateY(5px) } 100% { transform: translateY(0) } }
        .ep-card { transform: rotate(var(--tilt, 0deg)); transition: transform 0.25s ease }
        .ep-card:hover { transform: rotate(0deg) translateY(-6px) }
        @supports (animation-timeline: view()) {
          .ep-repisa { animation: ep-cae linear both; animation-timeline: view(); animation-range: var(--rr, entry 0% entry 75%) }
        }

        /* El letrero de horario cuelga y se mece al entrar. */
        @keyframes ep-letrero { 0% { transform: rotate(3.2deg) } 55% { transform: rotate(-1.4deg) } 80% { transform: rotate(0.6deg) } 100% { transform: rotate(0deg) } }
        @supports (animation-timeline: view()) {
          .ep-letrero { transform-origin: 50% -52px; animation: ep-letrero linear both; animation-timeline: view(); animation-range: entry 0% entry 95% }
        }

        .ep-kib { transform: rotate(var(--krot, 0deg)); transform-box: fill-box; transform-origin: center }
        /* Las croquetas caen al plato al llegar al cierre (solo transform:
           el plato lleno siempre queda visible). */
        @supports (animation-timeline: view()) {
          .ep-kib { animation: ep-kib linear both; animation-timeline: view(); animation-range: var(--kr, entry 0% entry 60%) }
        }
        @keyframes ep-kib { 0% { transform: translateY(-26px) rotate(var(--krot, 0deg)) } 78% { transform: translateY(3px) rotate(var(--krot, 0deg)) } 100% { transform: translateY(0) rotate(var(--krot, 0deg)) } }

        .ep-btn { transition: transform 0.18s ease, filter 0.18s ease, box-shadow 0.18s ease }
        .ep-btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .ep-btn:active { transform: scale(0.96) }
        .ep-btn:focus-visible { outline: 3px solid ${C.agua}; outline-offset: 3px }

        .ep-scroll { scrollbar-width: none; -ms-overflow-style: none }
        .ep-scroll::-webkit-scrollbar { display: none }

        @media (prefers-reduced-motion: reduce) {
          .ep-sube, .ep-linea, .ep-trazo, .ep-foto, .ep-colain, .ep-cola, .ep-marcha, .ep-repisa, .ep-letrero, .ep-kib { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_ALIMENTO}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'light',
          bar: 'rgba(255,247,232,0.94)',
          ink: C.cafe,
          line: C.line,
          btnBg: C.cafe,
          btnInk: C.crema,
        }}
      />

      {/* ── 1 · Póster mostaza: el arco se dibuja y la cola saluda ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.mostaza }}>
        {/* aros decorativos, como chapas de collar */}
        <div className="absolute -left-20 top-16 h-56 w-56 rounded-full pointer-events-none" style={{ border: '2px dashed rgba(43,30,22,0.18)' }} aria-hidden="true" />
        <div className="absolute -right-16 bottom-8 h-44 w-44 rounded-full pointer-events-none hidden md:block" style={{ border: '2px dashed rgba(43,30,22,0.18)' }} aria-hidden="true" />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-14 text-center">
          <p
            className={`${display.className} ep-sube inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-bold uppercase tracking-[0.16em]`}
            style={{ backgroundColor: 'rgba(43,30,22,0.12)', color: C.cafe, animationDelay: '0.1s' }}
          >
            Tienda de mascotas · Valdivia
          </p>

          <h1
            className={`${display.className} mt-4 font-extrabold leading-[0.97] tracking-[-0.01em] text-[clamp(3rem,11.5vw,6.4rem)]`}
          >
            <span className="block overflow-hidden pb-1">
              <span className="ep-linea block" style={{ animationDelay: '0.25s' }}>
                Todo para
              </span>
            </span>
            <span className="block overflow-hidden pb-2">
              <span className="ep-linea block" style={{ animationDelay: '0.42s' }}>
                tu{' '}
                <span className="relative inline-block">
                  regalón.
                  <svg
                    className="absolute -inset-x-3 -inset-y-1.5 w-[calc(100%+24px)] h-[calc(100%+12px)] pointer-events-none"
                    viewBox="0 0 100 34"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <ellipse
                      className="ep-trazo"
                      cx="50"
                      cy="17"
                      rx="48"
                      ry="14.5"
                      fill="none"
                      stroke={C.cafe}
                      strokeWidth="2.6"
                      pathLength={100}
                      vectorEffect="non-scaling-stroke"
                      style={{ animationDelay: '1.05s' }}
                    />
                  </svg>
                </span>
              </span>
            </span>
          </h1>

          {/* La puerta de la tienda: la fachada dentro del arco del logo */}
          <div className="relative mx-auto mt-7 w-[228px] md:w-[340px]">
            <div className="ep-colain absolute -right-12 bottom-3 w-[64px] md:w-[84px]" aria-hidden="true">
              <div className="ep-cola">
                <Cola className="w-full h-auto drop-shadow-sm" />
              </div>
            </div>
            <div className="ep-foto relative overflow-hidden aspect-[4/5]" style={{ ...ARCO, backgroundColor: C.crema, border: `5px solid ${C.cafe}`, boxShadow: '0 18px 0 rgba(43,30,22,0.14)' }}>
              <Image
                src={`${IMG}/hero.webp`}
                alt="Fachada de El Paraíso Mascotas en Av. Argentina, Valdivia"
                fill
                priority
                sizes="(min-width: 768px) 340px, 228px"
                className="object-cover"
                style={{ objectPosition: '50% 38%' }}
              />
            </div>
            {/* el arco del logo, dibujándose alrededor de la foto */}
            <svg
              className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none"
              viewBox="0 0 108 138"
              fill="none"
              aria-hidden="true"
            >
              <path
                className="ep-trazo"
                d="M7 132 V 62 A 47 47 0 0 1 101 62 V 132"
                stroke={C.cafe}
                strokeWidth="2.8"
                strokeLinecap="round"
                pathLength={100}
                style={{ animationDelay: '0.6s', animationDuration: '1.2s' }}
              />
            </svg>
          </div>

          <p
            className="ep-sube mx-auto mt-8 max-w-md text-lg leading-relaxed font-semibold"
            style={{ color: 'rgba(43,30,22,0.88)', animationDelay: '1.3s' }}
          >
            Alimento para perros y gatos, snacks e higiene. Por mayor y al
            detalle, abierto todos los días.
          </p>
          <div className="ep-sube mt-7 flex flex-wrap justify-center gap-3" style={{ animationDelay: '1.45s' }}>
            <Btn href={WA_ALIMENTO} tone="cafe">
              Consultar por WhatsApp
            </Btn>
            <Btn href={WA_MAYOR} tone="lineaCafe">
              Compras por mayor
            </Btn>
          </div>
        </div>
      </section>

      {/* ── 2 · Cinta corrida: lo que hay en la tienda ── */}
      <div className="overflow-hidden" style={{ backgroundColor: C.cafe }}>
        <div className="ep-marcha flex w-max items-center gap-7 py-3.5" style={{ transform: 'rotate(-0.8deg)' }}>
          {[...MARQUEE, ...MARQUEE].map((t, i) => (
            <span key={i} className={`${display.className} flex items-center gap-7 whitespace-nowrap text-[15px] font-bold uppercase tracking-[0.14em]`} style={{ color: C.crema2 }}>
              {t}
              <Huella color={C.mostaza} className="h-4 w-4" />
            </span>
          ))}
        </div>
      </div>

      {/* ── 3 · La repisa: productos que caen al estante ── */}
      <section id="repisa" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.agua}>En la repisa</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6.5vw,4.2rem)]`}>
              Lo que tu regalón
              <br className="hidden md:block" /> viene buscando.
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed" style={{ color: C.muted }}>
              Algunas de las marcas que verás en la tienda. Pregúntanos por la
              tuya y el formato que necesitas.
            </p>
          </Reveal>

          <ul className="ep-scroll mt-10 flex items-start gap-5 overflow-x-auto snap-x pb-2 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible">
            {ESTANTE.map((e, i) => (
              <li
                key={e.img}
                className="ep-repisa w-[46vw] min-w-[168px] max-w-[220px] shrink-0 snap-start md:w-auto md:min-w-0 md:max-w-none md:shrink"
                style={{ '--tilt': `${i % 2 ? 1.6 : -1.6}deg`, '--rr': `entry ${i * 4}% entry 75%` } as CSSProperties}
              >
                <figure className="ep-card">
                  <div className="relative overflow-hidden aspect-[3/4] rounded-[20px]" style={{ border: `3px solid ${C.cafe}`, boxShadow: '5px 6px 0 rgba(43,30,22,0.16)' }}>
                    <Image src={`${IMG}/${e.img}.webp`} alt={e.alt} fill sizes="(min-width: 768px) 20vw, 46vw" className="object-cover" loading="eager" />
                  </div>
                  {/* la tabla de la repisa */}
                  <div className="mx-1 mt-2 h-2.5 rounded-full" style={{ backgroundColor: C.cafe }} aria-hidden="true" />
                </figure>
                <h3 className={`${display.className} mt-3 text-lg font-bold leading-tight`}>{e.titulo}</h3>
                <p className="mt-0.5 text-sm leading-snug" style={{ color: C.muted }}>
                  {e.detalle}
                </p>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Btn href={WA_ALIMENTO} tone="cafe">
                Preguntar por un alimento
              </Btn>
              <p className={`${display.className} text-base font-bold`} style={{ color: C.agua }}>
                Dinos la marca y el tamaño
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Por mayor y al detalle: el mural lo dice ── */}
      <section id="mayor" className="scroll-mt-20" style={{ backgroundColor: C.cafe, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          <div>
            <Reveal>
              <Rotulo color={C.mostaza}>Por mayor y al detalle</Rotulo>
              <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] text-[clamp(2.3rem,6vw,4rem)]`}>
                Un saco entero
                <br />o una bolsita,
                <br />
                como te acomode.
              </h2>
              <p className="mt-5 max-w-md text-lg leading-relaxed" style={{ color: 'rgba(255,247,232,0.88)' }}>
                El mural de la esquina lo dice claro: vendemos alimento por
                mayor y al detalle. Si tienes varios regalones o compras para
                revender, escríbenos y vemos cantidades.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Btn href={WA_MAYOR} tone="mostaza">
                  Consultar por mayor
                </Btn>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <figure className="relative mx-auto w-full max-w-[380px]" style={{ transform: 'rotate(1.6deg)' }}>
              <div className="relative overflow-hidden aspect-[3/4] rounded-[26px]" style={{ border: `4px solid ${C.mostaza}`, boxShadow: '10px 12px 0 rgba(243,179,61,0.22)' }}>
                <Image src={`${IMG}/mural.webp`} alt="Mural de El Paraíso Mascotas: venta de alimentos por mayor y al detalle" fill sizes="380px" className="object-cover" />
              </div>
              <figcaption
                className={`${display.className} absolute -bottom-4 left-5 rounded-full px-4 py-2 text-sm font-bold`}
                style={{ backgroundColor: C.mostaza, color: C.cafe, boxShadow: '4px 4px 0 rgba(43,30,22,0.35)' }}
              >
                Nuestro mural en Av. Argentina
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Horario: el letrero colgante ── */}
      <section id="horario" className="scroll-mt-20 overflow-hidden" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <Rotulo color={C.agua} paw={false}>
              <span className="mx-auto flex items-center gap-2">
                <Huella color={C.agua} className="h-4 w-4" />
                Horario
                <Huella color={C.agua} className="h-4 w-4" />
              </span>
            </Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6.5vw,4rem)]`}>
              Abierto todos los días.
            </h2>
          </Reveal>

          {/* letrero colgado de un clavo, como el de la puerta */}
          <div className="relative mx-auto mt-16 w-[300px] md:w-[340px]">
            <svg className="absolute -top-12 left-0 w-full h-[52px] pointer-events-none" viewBox="0 0 300 52" fill="none" aria-hidden="true">
              <circle cx="150" cy="6" r="5" fill={C.cafe} />
              <path d="M150 8 L 62 50" stroke={C.cafe} strokeWidth="3" strokeLinecap="round" />
              <path d="M150 8 L 238 50" stroke={C.cafe} strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="ep-letrero rounded-[26px] px-7 pt-6 pb-5 text-left" style={{ backgroundColor: C.cafe, boxShadow: '7px 8px 0 rgba(43,30,22,0.16)' }}>
              <p className={`${display.className} flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-[0.22em]`} style={{ color: C.mostaza }}>
                <Huella color={C.mostaza} className="h-4 w-4" />
                Horario
              </p>
              <ul className="mt-4">
                {HORARIO.map((h, i) => (
                  <li
                    key={h.dia}
                    className="flex items-baseline justify-between gap-4 py-2.5"
                    style={{ borderTop: i ? '2px dotted rgba(255,247,232,0.28)' : undefined }}
                  >
                    <span className="font-semibold" style={{ color: C.crema }}>{h.dia}</span>
                    <span className={`${display.className} text-lg font-bold`} style={{ color: C.mostaza }}>{h.hora}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={140}>
            <p className="mt-10 text-lg font-semibold" style={{ color: C.muted }}>
              Sí, también abrimos los domingos.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Opiniones: globos de conversación ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema2 }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.agua}>Opiniones en Google</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1] text-[clamp(2.3rem,6vw,4rem)]`}>
              Lo que dicen quienes pasan.
            </h2>
          </Reveal>

          <div className="mt-10 grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 120}>
                <figure>
                  <blockquote
                    className={`${display.className} relative rounded-[26px] rounded-bl-lg px-6 py-5 text-[clamp(1.35rem,3.6vw,1.8rem)] font-bold leading-snug`}
                    style={{ backgroundColor: C.crema, border: `3px solid ${C.cafe}`, boxShadow: '5px 6px 0 rgba(43,30,22,0.16)' }}
                  >
                    “{o.texto}”
                  </blockquote>
                  <figcaption className="mt-3 flex items-center gap-2.5 pl-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ backgroundColor: C.mostaza }}>
                      <Huella color={C.cafe} className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold" style={{ color: C.muted }}>{o.autor}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-9 inline-flex items-center gap-2 font-bold underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.agua }}
            >
              Ver las {BIZ.reviews} opiniones en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 7 · Dónde: la esquina de Av. Argentina ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.agua, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Rotulo color={C.crema2}>Dónde estamos</Rotulo>
            <h2 className={`${display.className} mt-3 font-extrabold leading-[1.02] text-[clamp(2.3rem,6vw,3.9rem)]`}>
              Av. Argentina 2557, Valdivia
            </h2>
            <address className="not-italic mt-6 text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.92)' }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: '#FFFFFF' }}>
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
            <div className="relative w-full overflow-hidden rounded-[28px] aspect-[4/3] min-h-[280px]" style={{ border: '4px solid rgba(255,247,232,0.45)' }}>
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

      {/* ── 8 · Cierre: el plato se llena ── */}
      <section style={{ backgroundColor: C.mostaza }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <svg viewBox="0 0 120 92" className="mx-auto h-24 w-auto" aria-hidden="true">
              {/* croquetas cayendo */}
              <g>
                {[
                  { x: 34, y: 38, r: -18, c: C.cafe, kr: 'entry 8% entry 46%' },
                  { x: 52, y: 34, r: 12, c: C.agua, kr: 'entry 14% entry 52%' },
                  { x: 70, y: 37, r: -8, c: C.cafe, kr: 'entry 20% entry 58%' },
                  { x: 85, y: 40, r: 20, c: C.agua, kr: 'entry 26% entry 64%' },
                  { x: 44, y: 44, r: 10, c: C.cafe, kr: 'entry 32% entry 70%' },
                  { x: 62, y: 45, r: -14, c: C.cafe, kr: 'entry 38% entry 76%' },
                  { x: 77, y: 45, r: 8, c: C.cafe, kr: 'entry 44% entry 82%' },
                ].map((k, i) => (
                  <ellipse
                    key={i}
                    className="ep-kib"
                    cx={k.x}
                    cy={k.y}
                    rx="5.5"
                    ry="4"
                    fill={k.c}
                    style={{ '--krot': `${k.r}deg`, '--kr': k.kr } as CSSProperties}
                  />
                ))}
              </g>
              {/* el plato */}
              <path
                d="M22 52 H98 V56 A38 30 0 0 1 22 56 Z"
                fill="none"
                stroke={C.cafe}
                strokeWidth="4.5"
                strokeLinejoin="round"
              />
              <path d="M14 46 H106" stroke={C.cafe} strokeWidth="4.5" strokeLinecap="round" />
            </svg>
            <h2 className={`${display.className} mt-5 font-extrabold leading-[1] text-[clamp(2.4rem,7vw,4.4rem)]`}>
              ¿Se le acabó el alimento?
            </h2>
            <p className="mt-5 max-w-md mx-auto text-lg leading-relaxed font-semibold" style={{ color: 'rgba(43,30,22,0.85)' }}>
              Escríbenos qué marca y qué tamaño buscas, y te contamos si lo
              tenemos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_ALIMENTO} tone="cafe">
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 9 · Footer ── */}
      <footer style={{ backgroundColor: C.cafe, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src={`${IMG}/logo.webp`} alt="" width={44} height={44} className="rounded-lg" />
              <div>
                <p className={`${display.className} text-2xl font-extrabold leading-none`}>{BIZ.name}</p>
                <p className="text-sm mt-1" style={{ color: 'rgba(255,247,232,0.78)' }}>
                  {BIZ.rubro} · {BIZ.address}, {BIZ.city}
                </p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(255,247,232,0.88)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-5 pt-4" style={{ borderColor: 'rgba(255,247,232,0.16)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,247,232,0.65)' }}>
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
