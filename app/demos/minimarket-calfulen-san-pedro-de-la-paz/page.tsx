import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, HORARIO, CATALOGO, PIZARRA, OPINIONES, WA_LINK, waPedir, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «la pizarra del almacén». La página se lee como el
 * local mismo: el letrero redondo azul y crema estampado sobre la
 * pizarra verde de la entrada, la tiza que escribe el titular, la foto
 * de la fachada pegada con cinta y el listado del catálogo como la
 * lista de la semana sobre papel. Baloo 2 es la letra redonda del
 * letrero; Nunito lee el detalle; Space Mono marca los datos de boleta.
 */
const C = {
  pizarra: '#222B25',
  pizarraPanel: '#2C3830',
  tiza: '#F2EDDE',
  tizaDim: 'rgba(242,237,222,0.72)',
  tizaSuave: 'rgba(242,237,222,0.5)',
  azul: '#7FB0D8',
  azulDeep: '#3E6C96',
  teal: '#1E665F',
  tinta: '#22303F',
  crema: '#F3EEE1',
  papel: '#FBF8F0',
  madera: '#A9743F',
  maderaOsc: '#7C5430',
  rojo: '#B23A22',
  muted: 'rgba(34,48,63,0.68)',
  lineL: 'rgba(34,48,63,0.18)',
  lineD: 'rgba(242,237,222,0.18)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/** Textura de pizarra: borrones de tiza muy tenues. */
const BOARD: CSSProperties = {
  backgroundColor: C.pizarra,
  backgroundImage: [
    'radial-gradient(ellipse 55% 38% at 18% 12%, rgba(242,237,222,0.06), transparent 65%)',
    'radial-gradient(ellipse 48% 32% at 82% 78%, rgba(242,237,222,0.05), transparent 65%)',
    'repeating-linear-gradient(55deg, rgba(242,237,222,0.012) 0 2px, transparent 2px 7px)',
  ].join(', '),
}

export const metadata: Metadata = demoMetadata({
  slug: 'minimarket-calfulen-san-pedro-de-la-paz',
  title: 'Distribuidora Calfulén · Minimarket en El Venado, San Pedro de la Paz',
  description:
    'Minimarket abierto todos los días de 7:00 a 22:00 en Camino El Venado 1440, San Pedro de la Paz: snacks, fiambres, quesos, bebidas y despensa. Pide por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

const NAV_LINKS = [
  { label: 'El catálogo', href: '#catalogo' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** El letrero redondo de la fachada, recreado: aro azul, centro crema. */
function LetreroSello({ size = 128 }: { size?: number }) {
  return (
    <div
      className="cf-sello rounded-full flex flex-col items-center justify-center text-center select-none"
      style={{
        width: size,
        height: size,
        backgroundColor: C.papel,
        border: `7px solid ${C.azul}`,
        boxShadow: '0 8px 20px rgba(0,0,0,0.35)',
      }}
      aria-label={`Letrero de ${BIZ.short}`}
      role="img"
    >
      <span
        className={`${display.className} font-bold uppercase leading-none`}
        style={{ color: C.teal, fontSize: size * 0.075, letterSpacing: '0.22em' }}
      >
        Distribuidora
      </span>
      <span
        className={`${display.className} font-extrabold leading-[1.02]`}
        style={{ color: C.tinta, fontSize: size * 0.21 }}
      >
        calfulén
      </span>
      <span
        className="leading-[1.15] px-3 hidden sm:block"
        style={{ color: 'rgba(34,48,63,0.75)', fontSize: size * 0.062 }}
      >
        Alimentos y productos de calidad a la puerta de tu hogar
      </span>
    </div>
  )
}

/** Foto pegada a la pizarra con cinta adhesiva. */
function FotoPegada({
  src,
  alt,
  className = '',
  rotate = 2,
  pos = '50% 38%',
  aspect = 'aspect-[3/4]',
}: {
  src: string
  alt: string
  className?: string
  rotate?: number
  pos?: string
  aspect?: string
}) {
  return (
    <figure className={`cf-pega relative ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      <div className={`relative overflow-hidden ${aspect} bg-white p-2 pb-3 shadow-[0_14px_30px_rgba(0,0,0,0.35)]`}>
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 320px, 55vw"
            className="object-cover"
            style={{ objectPosition: pos }}
            priority
          />
        </div>
      </div>
      {/* cintas */}
      <span
        aria-hidden="true"
        className="cf-cinta absolute -top-2 left-6 w-14 h-5 rotate-[-8deg]"
        style={{ backgroundColor: 'rgba(242,237,222,0.55)', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
      />
      <span
        aria-hidden="true"
        className="cf-cinta absolute -top-1.5 right-5 w-10 h-4 rotate-[14deg]"
        style={{ backgroundColor: 'rgba(242,237,222,0.45)' }}
      />
    </figure>
  )
}

export default function CalfulenPage() {
  return (
    <div
      className={`${body.className} cf-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.tinta }}
    >
      <style>{`
        .cf-root h1, .cf-root h2, .cf-root h3, .cf-root .cf-display { font-family: ${display.style.fontFamily}; font-weight: 700 }

        /* La tiza escribe cada línea de izquierda a derecha. */
        @keyframes cf-escribe {
          0% { clip-path: inset(-20% 100% -20% 0); opacity: 0 }
          12% { opacity: 1 }
          100% { clip-path: inset(-20% 0% -20% 0); opacity: 1 }
        }
        .cf-l0 { animation: cf-escribe 0.7s cubic-bezier(0.35,0.6,0.2,1) 0s both }
        .cf-l1 { animation: cf-escribe 0.9s cubic-bezier(0.35,0.6,0.2,1) 0.35s both }
        .cf-l2 { animation: cf-escribe 0.9s cubic-bezier(0.35,0.6,0.2,1) 0.75s both }
        .cf-l3 { animation: cf-escribe 0.9s cubic-bezier(0.35,0.6,0.2,1) 1.15s both }
        .cf-lema { animation: cf-escribe 1s cubic-bezier(0.35,0.6,0.2,1) 1.5s both }

        /* El letrero se estampa contra el muro. */
        @keyframes cf-sello {
          0% { opacity: 0; transform: scale(1.8) rotate(-16deg) }
          62% { opacity: 1; transform: scale(0.95) rotate(-1deg) }
          100% { opacity: 1; transform: scale(1) rotate(-3deg) }
        }
        .cf-sello { animation: cf-sello 0.55s cubic-bezier(0.2,0.9,0.3,1.2) 1.35s both }

        /* La foto se pega al tablero. */
        @keyframes cf-pega {
          0% { opacity: 0; transform: translateY(26px) rotate(7deg) }
          100% { opacity: 1; transform: translateY(0) rotate(2deg) }
        }
        .cf-pega { animation: cf-pega 0.9s cubic-bezier(0.2,0.7,0.2,1) 0.4s both }
        @keyframes cf-cinta { 0% { opacity: 0 } 100% { opacity: 1 } }
        .cf-cinta { animation: cf-cinta 0.4s ease 1.15s both }

        /* El subrayado de tiza se traza bajo la palabra. */
        @keyframes cf-trazo { from { clip-path: inset(0 100% 0 0) } to { clip-path: inset(0 0 0 0) } }
        .cf-trazo { animation: cf-trazo 0.7s ease-out 1.55s both }

        @keyframes cf-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .cf-datos { animation: cf-sube 0.7s ease 1.6s both }
        .cf-cta { animation: cf-sube 0.7s ease 1.8s both }

        .cf-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .cf-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .cf-btn:active { transform: scale(0.97) }
        .cf-btn:focus-visible, .cf-root a:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .cf-card { transition: transform 0.25s ease }
        .cf-card:hover { transform: translateY(-3px) }
        .cf-pedir { transition: transform 0.15s ease, background-color 0.2s ease }
        .cf-pedir:hover { transform: translateX(2px) }

        .cf-root .grid > * { min-width: 0 }

        @media (prefers-reduced-motion: reduce) {
          .cf-l0, .cf-l1, .cf-l2, .cf-l3, .cf-lema, .cf-sello, .cf-pega, .cf-cinta, .cf-trazo, .cf-datos, .cf-cta { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Pedir"
        theme={{
          over: 'dark',
          bar: 'rgba(243,238,225,0.95)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.azulDeep,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── La pizarra de la entrada ── */}
      <section id="inicio" className="relative flex flex-col" style={{ ...BOARD }}>
        {/* marco de madera superior de la pizarra */}
        <div
          aria-hidden="true"
          className="h-2.5 w-full shrink-0"
          style={{ background: `linear-gradient(180deg, ${C.madera}, ${C.maderaOsc})` }}
        />
        <div className="max-w-6xl mx-auto w-full px-5 md:px-8 pt-20 md:pt-28 pb-8 flex-1 flex flex-col justify-center">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-center">
            <div>
              <p
                className={`${mono.className} cf-l0 text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-5 flex items-center gap-3`}
                style={{ color: C.azul }}
              >
                <span className="inline-block w-8 h-px" style={{ backgroundColor: C.azul }} aria-hidden="true" />
                {BIZ.district} · {BIZ.city}
              </p>
              <h1
                className="leading-[0.98] tracking-[-0.01em] text-[clamp(2.7rem,11vw,5.6rem)]"
                style={{ color: C.tiza }}
              >
                <span className="cf-l1 block">Tu almacén de</span>
                <span className="cf-l2 block">
                  <span className="relative inline-block" style={{ color: C.azul }}>
                    El Venado,
                    <svg
                      className="cf-trazo absolute left-0 -bottom-1.5 md:-bottom-2.5 w-full"
                      viewBox="0 0 220 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 8 C 55 3, 120 3, 165 6 S 210 9, 216 7"
                        fill="none"
                        stroke={C.tiza}
                        strokeWidth="4"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                    </svg>
                  </span>
                </span>
                <span className="cf-l3 block">todos los días.</span>
              </h1>
              <p
                className={`${display.className} cf-lema mt-5 text-lg md:text-2xl font-semibold leading-snug max-w-md`}
                style={{ color: C.tizaDim }}
              >
                «{BIZ.lema}»
              </p>

              {/* Móvil: foto pegada + datos de tiza al lado */}
              <div className="mt-8 flex items-end gap-5 lg:hidden">
                <div className="relative w-[54%] max-w-[230px] shrink-0">
                  <FotoPegada
                    src={`${IMG}/fachada.webp`}
                    alt="Entrada de Distribuidora Calfulén: muro de piedra, letrero redondo y pizarra de ofertas"
                    className="w-full"
                  />
                  <div className="absolute -right-3 -bottom-4">
                    <LetreroSello size={88} />
                  </div>
                </div>
                <div className="cf-datos pb-2 min-w-0 flex-1">
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.tizaSuave }}>
                    abierto
                  </p>
                  <p className={`${display.className} font-extrabold text-[clamp(1.35rem,6.3vw,1.75rem)] leading-none mt-1 whitespace-nowrap`} style={{ color: C.tiza }}>
                    7:00<span className="mx-0.5" style={{ color: C.azul }}>→</span>22:00
                  </p>
                  <p className="text-xs mt-2 leading-snug" style={{ color: C.tizaDim }}>
                    los siete días
                    <br />
                    de la semana
                  </p>
                  <p className={`${mono.className} text-[10px] mt-3 uppercase tracking-[0.14em]`} style={{ color: C.tizaDim }}>
                    {BIZ.reviews} opiniones en Google
                  </p>
                </div>
              </div>

              <div className="cf-cta mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cf-btn inline-flex items-center gap-2 px-6 py-3 rounded-full text-[15px] font-bold tap-44`}
                  style={{ backgroundColor: C.azul, color: C.tinta }}
                >
                  Hacer un pedido por WhatsApp
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="#catalogo"
                  className="cf-btn inline-flex items-center text-sm font-bold underline underline-offset-4 tap-44"
                  style={{ color: C.tiza }}
                >
                  ver el catálogo
                </a>
              </div>
            </div>

            {/* Escritorio: composición foto + letrero + datos */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="relative">
                <FotoPegada
                  src={`${IMG}/fachada.webp`}
                  alt="Entrada de Distribuidora Calfulén: muro de piedra, letrero redondo y pizarra de ofertas"
                  className="w-[320px]"
                />
                <div className="absolute -left-12 -bottom-10">
                  <LetreroSello size={150} />
                </div>
              </div>
              <div className="cf-datos pl-6 border-l border-dashed" style={{ borderColor: C.lineD }}>
                <p className={`${mono.className} text-[11px] uppercase tracking-[0.22em]`} style={{ color: C.tizaSuave }}>
                  abierto
                </p>
                <p className={`${display.className} font-extrabold text-4xl xl:text-5xl leading-none mt-1.5 whitespace-nowrap`} style={{ color: C.tiza }}>
                  7:00<span className="mx-1.5" style={{ color: C.azul }}>→</span>22:00
                </p>
                <p className="text-sm mt-2.5" style={{ color: C.tizaDim }}>
                  los siete días de la semana
                </p>
                <p className={`${mono.className} text-[11px] mt-5 uppercase tracking-[0.14em] leading-relaxed`} style={{ color: C.tizaDim }}>
                  {BIZ.reviews} opiniones
                  <br />
                  en Google
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Datos al pie de la pizarra */}
        <div className="relative border-t" style={{ borderColor: C.lineD }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-6 gap-y-1 text-[10px] md:text-[11px] uppercase tracking-[0.16em]`}
            style={{ color: C.tizaDim }}
          >
            <span>{BIZ.address}<span className="hidden md:inline"> · {BIZ.district}</span></span>
            <span>{HORARIO}</span>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 tap-44 hover:text-white transition-colors"
            >
              ver en Google Maps
            </a>
          </div>
        </div>
        {/* borde de madera inferior con trozo de tiza */}
        <div aria-hidden="true" className="relative h-3 w-full shrink-0" style={{ background: `linear-gradient(180deg, ${C.maderaOsc}, ${C.madera})` }}>
          <span className="absolute right-8 -top-1 w-9 h-1.5 rounded-full rotate-[-6deg]" style={{ backgroundColor: C.tiza, opacity: 0.9 }} />
          <span className="absolute right-24 -top-0.5 w-4 h-1 rounded-full rotate-[9deg]" style={{ backgroundColor: C.azul, opacity: 0.8 }} />
        </div>
      </section>

      {/* ── El catálogo: la lista de la semana ── */}
      <section id="catalogo" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.azulDeep }}>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.azulDeep }} aria-hidden="true" />
              El catálogo · se pide por WhatsApp
            </p>
            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-5 lg:gap-12 items-end mb-8 md:mb-12">
              <h2 className="leading-[0.98] tracking-[-0.01em] text-[clamp(2.1rem,7.5vw,4rem)]" style={{ color: C.tinta }}>
                Mira, elige
                <br />
                y <span style={{ color: C.azulDeep }}>pide por WhatsApp.</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.muted }}>
                Una muestra de lo que hay en el local: el pedido se arma
                por WhatsApp y se coordina directo con la tienda.
              </p>
            </div>
          </Reveal>

          <ul className="grid md:grid-cols-2 gap-x-10">
            {CATALOGO.map((p, i) => (
              <li key={p.nombre} className="border-t-2 border-dashed last:border-b-2 md:[&:nth-last-child(2)]:border-b-2" style={{ borderColor: C.lineL }}>
                <Reveal delay={i * 60}>
                  <div className="cf-card flex gap-4 py-5">
                    <div className="relative w-[104px] h-[104px] md:w-[120px] md:h-[120px] shrink-0 overflow-hidden rounded-md" style={{ boxShadow: '0 6px 16px rgba(34,48,63,0.18)' }}>
                      <Image
                        src={`${IMG}/${p.img}.webp`}
                        alt={p.alt}
                        fill
                        sizes="(min-width: 768px) 120px, 104px"
                        className="object-cover"
                        style={{ objectPosition: p.pos }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.azulDeep }}>
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="font-bold text-lg md:text-xl leading-tight" style={{ color: C.tinta }}>
                        {p.nombre}
                      </h3>
                      <p className="text-[13px] md:text-sm leading-snug mt-1" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                      <a
                        href={waPedir(p.pedir)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${display.className} cf-pedir inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-2 rounded-full text-xs font-bold tap-44`}
                        style={{ backgroundColor: C.tinta, color: C.crema }}
                      >
                        Pedir por WhatsApp
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
            {/* Sexta tarjeta: la pizarra de ofertas, sin foto y sin precios */}
            <li className="border-t-2 border-dashed last:border-b-2 md:[&:nth-last-child(2)]:border-b-2" style={{ borderColor: C.lineL }}>
              <Reveal delay={5 * 60}>
                <div className="cf-card flex gap-4 py-5">
                  <div
                    className="relative w-[104px] h-[104px] md:w-[120px] md:h-[120px] shrink-0 overflow-hidden rounded-md flex flex-col items-center justify-center text-center px-2"
                    style={{ ...BOARD, border: `4px solid ${C.madera}` }}
                    aria-hidden="true"
                  >
                    <span className={`${display.className} font-extrabold text-base leading-none rotate-[-3deg]`} style={{ color: C.tiza }}>
                      ofertas
                    </span>
                    <span className={`${mono.className} text-[8px] uppercase tracking-[0.14em] mt-1.5 rotate-[-3deg]`} style={{ color: C.azul }}>
                      del día
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1`} style={{ color: C.rojo }}>
                      06 · pizarra
                    </p>
                    <h3 className="font-bold text-lg md:text-xl leading-tight" style={{ color: C.tinta }}>
                      La oferta del día
                    </h3>
                    <p className="text-[13px] md:text-sm leading-snug mt-1" style={{ color: C.muted }}>
                      La pizarra de la entrada se actualiza: pregunta qué está en oferta hoy.
                    </p>
                    <a
                      href={waPedir('la oferta del día')}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} cf-pedir inline-flex items-center gap-1.5 mt-2.5 px-3.5 py-2 rounded-full text-xs font-bold tap-44`}
                      style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                    >
                      Pedir por WhatsApp
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          </ul>
        </div>
      </section>

      {/* ── Horario: los siete días, a la vista ── */}
      <section
        id="horario"
        aria-label="Horario"
        style={{
          backgroundColor: '#5E3D20',
          backgroundImage: `linear-gradient(180deg, rgba(169,116,63,0.5), rgba(169,116,63,0.06))`,
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 md:py-14 flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em]`} style={{ color: 'rgba(251,248,240,0.85)' }}>
              Horario de atención
            </p>
            <p className={`${display.className} font-extrabold leading-none text-[clamp(2.4rem,8vw,4.6rem)] mt-2`} style={{ color: C.papel }}>
              7:00 <span style={{ color: 'rgba(251,248,240,0.8)' }}>a</span> 22:00
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex items-center gap-4">
              <div className="flex items-end gap-[7px]" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5, 6].map((d) => (
                  <span
                    key={d}
                    className="block w-[5px] rounded-full"
                    style={{
                      height: 34 + (d % 3) * 7,
                      backgroundColor: C.papel,
                      opacity: 0.55 + (d % 3) * 0.15,
                      transform: `rotate(${[-7, 4, -3, 6, -6, 3, -4][d]}deg)`,
                    }}
                  />
                ))}
              </div>
              <p className="max-w-[190px] text-sm md:text-base font-semibold leading-snug" style={{ color: C.papel }}>
                de lunes a domingo, las siete jornadas de la semana.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── La pizarra real ── */}
      <section id="pizarra" className="scroll-mt-20" style={{ ...BOARD }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-14 items-center">
          <Reveal>
            <div
              className="relative rounded-sm p-6 md:p-8"
              style={{
                ...BOARD,
                border: `10px solid ${C.madera}`,
                boxShadow: '0 18px 40px rgba(0,0,0,0.4), inset 0 0 60px rgba(0,0,0,0.25)',
              }}
            >
              <p
                className={`${display.className} font-extrabold text-3xl md:text-4xl leading-none rotate-[-1.5deg]`}
                style={{ color: C.tiza }}
              >
                ofertas
                <svg className="block w-[74%] mt-1" viewBox="0 0 160 10" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 6 C 45 2, 110 3, 157 6" fill="none" stroke={C.azul} strokeWidth="3.5" strokeLinecap="round" opacity="0.9" />
                </svg>
              </p>
              <ul className="mt-5 space-y-3.5">
                {PIZARRA.map((item) => (
                  <li key={item} className="flex items-baseline gap-3">
                    <span aria-hidden="true" className={`${display.className} text-lg leading-none`} style={{ color: C.azul }}>
                      •
                    </span>
                    <span className={`${display.className} font-semibold text-lg md:text-xl leading-tight`} style={{ color: C.tiza }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={`${mono.className} mt-6 text-[10px] md:text-[11px] uppercase tracking-[0.18em] leading-relaxed`} style={{ color: C.tizaSuave }}>
                la pizarra cambia:
                <br />
                la oferta de hoy se pregunta
              </p>
              <a
                href={waPedir('la oferta de la pizarra')}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cf-btn inline-flex items-center gap-2 mt-4 px-5 py-2.5 rounded-full text-sm font-bold tap-44`}
                style={{ backgroundColor: C.tiza, color: C.tinta }}
              >
                Preguntar la oferta de hoy
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: C.azul }}>
              La pizarra · en la entrada
            </p>
            <h2 className="leading-[1] tracking-[-0.01em] text-[clamp(2rem,7vw,3.6rem)]" style={{ color: C.tiza }}>
              Lo que está en oferta
              <br />
              <span style={{ color: C.azul }}>se lee en la puerta.</span>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.tizaDim }}>
              En la entrada hay un caballete con pizarra donde se anotan
              las ofertas: cambian y se agotan, así que la foto es de
              muestra. La oferta del día se confirma por WhatsApp.
            </p>
            <figure className="mt-7 flex items-end gap-4">
              <div className="relative w-[46%] max-w-[210px] overflow-hidden rounded-sm aspect-[3/4]" style={{ border: '5px solid rgba(242,237,222,0.85)' }}>
                <Image
                  src={`${IMG}/entrada-pizarra.webp`}
                  alt="La entrada del local con el caballete de pizarra donde se anotan las ofertas"
                  fill
                  sizes="(min-width: 1024px) 220px, 46vw"
                  className="object-cover"
                  style={{ objectPosition: '62% 55%' }}
                />
              </div>
              <figcaption className={`${mono.className} pb-1 text-[10px] uppercase tracking-[0.16em] leading-relaxed`} style={{ color: C.tizaSuave }}>
                el caballete real,
                <br />
                junto a la puerta
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones de los vecinos ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.azulDeep }}>
              <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.azulDeep }} aria-hidden="true" />
              Google · {BIZ.reviews} opiniones
            </p>
            <h2 className="leading-[0.98] tracking-[-0.01em] text-[clamp(2.1rem,7.5vw,4rem)] max-w-3xl" style={{ color: C.tinta }}>
              Lo que dicen
              <br />
              <span style={{ color: C.azulDeep }}>los del barrio.</span>
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 90}>
                <figure
                  className="h-full p-5 md:p-6 rounded-sm"
                  style={{
                    backgroundColor: C.papel,
                    boxShadow: '0 10px 24px rgba(34,48,63,0.12)',
                    transform: `rotate(${[-0.8, 0.6, -0.5][i]}deg)`,
                    borderTop: `4px solid ${[C.azul, C.teal, C.rojo][i]}`,
                  }}
                >
                  <blockquote className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.tinta }}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                    {o.autor} · reseña de Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-block mt-7 text-[11px] uppercase tracking-[0.18em] underline underline-offset-4 tap-44`}
              style={{ color: C.azulDeep }}
            >
              Leer las {BIZ.reviews} opiniones en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── El local y cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-24">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <Reveal>
              <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-4 flex items-center gap-3`} style={{ color: C.azulDeep }}>
                <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.azulDeep }} aria-hidden="true" />
                El local
              </p>
              <h2 className="leading-[1] tracking-[-0.01em] text-[clamp(2rem,7vw,3.6rem)]" style={{ color: C.tinta }}>
                Camino El Venado 1440,
                <br />
                <span style={{ color: C.azulDeep }}>frente al distrito.</span>
              </h2>
              <address className="not-italic mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.district}
                <br />
                {BIZ.city} · {BIZ.region}
                <br />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 tap-44" style={{ color: C.tinta }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
              <div className="mt-5 inline-flex items-center gap-3 rounded-sm px-4 py-2.5" style={{ backgroundColor: C.crema, border: `2px dashed ${C.lineL}` }}>
                <span className={`${mono.className} text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  horario
                </span>
                <span className={`${display.className} font-bold text-sm`} style={{ color: C.tinta }}>
                  {HORARIO}
                </span>
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cf-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tap-44`}
                  style={{ backgroundColor: C.tinta, color: C.crema }}
                >
                  Cómo llegar
                </a>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} cf-btn inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tap-44`}
                  style={{ backgroundColor: C.azulDeep, color: '#FFFFFF' }}
                >
                  Pedir por WhatsApp
                </a>
              </div>
              {/* fotos del local */}
              <div className="mt-9 flex items-end gap-4">
                <div className="relative w-[62%] overflow-hidden rounded-md aspect-[4/3]" style={{ boxShadow: '0 12px 28px rgba(34,48,63,0.18)' }}>
                  <Image
                    src={`${IMG}/puerta.webp`}
                    alt="Entrada del minimarket con banca de madera y puerta de vidrio abierta"
                    fill
                    sizes="(min-width: 1024px) 340px, 62vw"
                    className="object-cover"
                    style={{ objectPosition: '42% 45%' }}
                  />
                </div>
                <div className="relative w-[32%] overflow-hidden rounded-md aspect-[3/4] rotate-[2deg]" style={{ boxShadow: '0 12px 28px rgba(34,48,63,0.18)' }}>
                  <Image
                    src={`${IMG}/interior.webp`}
                    alt="Interior del minimarket: refrigeradores, estantes con productos y canasto de pan"
                    fill
                    sizes="(min-width: 1024px) 180px, 32vw"
                    className="object-cover"
                    style={{ objectPosition: '30% 50%' }}
                  />
                </div>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div className="lg:sticky lg:top-24">
                <div className="relative w-full overflow-hidden rounded-md aspect-[4/5] md:aspect-[4/4] lg:aspect-[4/5] min-h-[320px]" style={{ border: `2px solid ${C.lineL}` }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className={`${mono.className} mt-2.5 text-[10px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {BIZ.address} · {BIZ.city}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cierre: la lista ── */}
      <section style={{ backgroundColor: C.azulDeep }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: 'rgba(251,248,240,0.8)' }}>
              {BIZ.short} · {BIZ.district}
            </p>
            <h2 className="leading-[0.98] tracking-[-0.01em] text-[clamp(2.4rem,9vw,4.8rem)]" style={{ color: C.papel }}>
              ¿Qué falta
              <br />
              en la casa?
            </h2>
            <p className="mt-5 max-w-md mx-auto text-sm md:text-base leading-relaxed" style={{ color: 'rgba(251,248,240,0.85)' }}>
              {BIZ.lema}. Escríbenos con tu lista y coordinamos el pedido
              directo con la tienda.
            </p>
            <div className="mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} cf-btn inline-flex items-center gap-2 px-7 py-3 rounded-full text-base font-bold tap-44`}
                style={{ backgroundColor: C.papel, color: C.tinta }}
              >
                Hacer un pedido por WhatsApp
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ ...BOARD }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} font-extrabold text-xl`} style={{ color: C.tiza }}>
                {BIZ.short}
              </p>
              <p className="text-xs mt-1" style={{ color: C.tizaDim }}>
                {BIZ.rubro} · {BIZ.address}, {BIZ.city}
              </p>
              <p className="text-xs" style={{ color: C.tizaDim }}>
                {HORARIO}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-xs" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: C.tizaDim }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-4 pt-3.5" style={{ borderColor: C.lineD }}>
            <p className="text-xs leading-relaxed" style={{ color: C.tizaSuave }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.tiza }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.azul }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
