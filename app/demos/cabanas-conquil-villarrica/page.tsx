import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, IG_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'

const display = localFont({
  src: [{ path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' }],
})
const displayItalic = localFont({
  src: [{ path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' }],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

/**
 * Dirección de arte: «Bosque, tinaja y silencio a 12 minutos de
 * Villarrica». Noche fría afuera, agua caliente adentro: carbón de la
 * cabaña como fondo de noche, cedro como la brasa del CTA, vapor como
 * papel, pradera y brasa solo en detalles finos. DM Serif Display pone
 * la calma sureña; Manrope, el aire. El motivo es la veta de la madera
 * (líneas finas onduladas) y el círculo de su logo: marco de fotos,
 * anillos de tronco y la tinaja misma.
 */
const C = {
  carbon: '#2B2D2F',
  carbonDeep: '#232527',
  cedro: '#B4612A',
  cedroBtn: '#AC5826',
  cedroInk: '#8E4A1F',
  vapor: '#EEF0EC',
  papel: '#F7F8F2',
  pradera: '#5C7A3A',
  praderaInk: '#465F2B',
  brasa: '#E8A15A',
  tinta: '#24272B',
  mutVapor: 'rgba(238,240,236,0.72)',
  mutVapor2: 'rgba(238,240,236,0.55)',
  mutTinta: 'rgba(36,39,43,0.75)',
  lineD: 'rgba(238,240,236,0.16)',
  lineL: 'rgba(36,39,43,0.15)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-conquil-villarrica',
  title: 'Cabañas Conquil · Cabaña con tinaja en Villarrica',
  description:
    'Cabaña totalmente equipada para 6 personas en Camino Conquil km 1, Villarrica, rodeada de bosque nativo y con tinaja privada techada. A 12 minutos del centro. Reserva por WhatsApp.',
  image: '/demos/cabanas-conquil-villarrica/terraza.webp',
})

const NAV_LINKS = [
  { label: 'La tinaja', href: '#tinaja' },
  { label: 'La cabaña', href: '#cabana' },
  { label: 'El entorno', href: '#entorno' },
  { label: 'Cómo llegar', href: '#ubicacion' },
]

// ── Motivo: la veta de la madera y el círculo del logo ───────

/** Dos líneas onduladas finas: la veta del leño. */
function Veta({ color, className = 'w-[46px] h-[10px]' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 46 10" className={`${className} shrink-0`} aria-hidden="true" fill="none">
      <path
        d="M1 4.5 C8 1.5 13 7.5 20 4.5 C27 1.5 32 7.5 45 4"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 8.5 C10 6 15 10 22 8 C29 6 35 9.5 43 7.5"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

/** Anillos del tronco cortado: círculos concéntricos a mano. */
function Anillos({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="none" stroke={color}>
      <circle cx="50" cy="51" r="46" strokeWidth="1.2" />
      <circle cx="53" cy="48" r="35" strokeWidth="1" opacity="0.75" />
      <circle cx="47" cy="52" r="24" strokeWidth="0.9" opacity="0.6" />
      <circle cx="51" cy="50" r="13" strokeWidth="0.8" opacity="0.45" />
    </svg>
  )
}

/** Rótulo de sección: veta + versalitas + línea. */
function Rotulo({ children, color, dark = false }: { children: React.ReactNode; color: string; dark?: boolean }) {
  return (
    <p
      className="flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5"
      style={{ color }}
    >
      <Veta color={color} />
      <span>{children}</span>
      <span className="h-px flex-1 min-w-8" style={{ backgroundColor: dark ? C.lineD : C.lineL }} aria-hidden="true" />
    </p>
  )
}

/** Los tres hilos de vapor que suben y se desvanecen en bucle. */
function Vapor({ className = '', op = 0.85 }: { className?: string; op?: number }) {
  return (
    <svg viewBox="0 0 120 170" className={className} aria-hidden="true" fill="none">
      {[18, 58, 98].map((x, i) => (
        <path
          key={x}
          className="cq-vapor"
          style={{ '--d': `${i * 1.7}s` } as CSSProperties}
          d={`M${x} 162 C${x - 9} 132 ${x + 10} 116 ${x} 90 C${x - 9} 66 ${x + 8} 52 ${x} 26`}
          stroke={`rgba(238,240,236,${op})`}
          strokeWidth="2.6"
          strokeLinecap="round"
        />
      ))}
    </svg>
  )
}

/** Codorniz: silueta de la bandada que visita el pasto. */
function Codorniz({ color, borde, eye, flip = false, className = 'w-[26px] h-auto' }: { color: string; borde: string; eye: string; flip?: boolean; className?: string }) {
  return (
    <svg viewBox="0 0 40 30" className={className} aria-hidden="true" style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <g fill={color} stroke={borde} strokeWidth="1">
        {/* cola corta apuntando arriba */}
        <path d="M8.5 13.5 L1.5 9 L4.5 17 Z" />
        {/* cuerpo */}
        <path d="M6 20 C5 13.5 11 8.5 17.5 8.5 L19.5 8.4 C20 5.6 22.6 3.8 25.5 4.3 C28.4 4.8 30 7.2 29.6 10 C32.5 12 34.5 15.2 34 19 C33.4 24.6 27.5 27.5 19.5 26.8 L13 26.2 C9.4 25.8 6.6 23.8 6 20 Z" />
        {/* pico */}
        <path d="M29.3 8.4 L34.5 10 L29.7 11.6 Z" />
      </g>
      {/* penacho de la codorniz cayendo sobre el pico */}
      <path d="M27.5 4.2 C29.5 1.6 32.5 1.4 33.2 3.4" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* patas */}
      <path d="M15.5 26.6 L14.8 30 M22.5 26.8 L22.1 30" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" />
      {/* ojo */}
      <circle cx="25.6" cy="7.4" r="1" fill={eye} />
    </svg>
  )
}

/** La bandada cruza el borde inferior del hero a saltitos, una sola vez.
    Anclada al borde visible del viewport (el hero puede pasar del fold). */
function Bandada() {
  return (
    <div className="cq-bando absolute left-0 z-20 flex items-end gap-2.5" aria-hidden="true" style={{ top: 'calc(100svh - 34px)' }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="cq-cod block" style={{ '--h': `${i * 0.14}s` } as CSSProperties}>
          <Codorniz
            color="rgba(238,240,236,0.88)"
            borde="rgba(35,37,39,0.6)"
            eye="rgba(35,37,39,0.95)"
            className={i === 2 ? 'w-[24px] h-auto' : 'w-[20px] h-auto'}
            flip={i === 3}
          />
        </span>
      ))}
    </div>
  )
}

// ── Íconos de la ficha (línea fina, dibujados) ───────────────

const ICO: Record<string, string> = {
  personas:
    'M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.5 19.5c0-3.2 2.5-5.2 5.5-5.2s5.5 2 5.5 5.2M15.5 10.5a2.4 2.4 0 1 0-.7-4.7M15.8 14.6c2.7.3 4.7 2.1 4.7 4.4',
  equipada:
    'M4.5 11.5h15V15a5.5 5.5 0 0 1-5.5 5.5h-4A5.5 5.5 0 0 1 4.5 15v-3.5ZM8 8.5h8M12 8.5V6.8M2.5 13h2M19.5 13h2',
  parrilla:
    'M4 9.5h16M6 9.5a6 6 0 0 0 12 0M9 16l-1.8 4.5M15 16l1.8 4.5M9.6 5.8c.9-.9.9-1.8 0-2.8M14.4 5.8c.9-.9.9-1.8 0-2.8',
  terraza:
    'M12 11a3.2 3.2 0 1 0 0-6.4A3.2 3.2 0 0 0 12 11ZM12 2v1.6M5.8 8H4M20 8h-1.8M7.4 3.4l1.2 1.2M16.6 3.4l-1.2 1.2M3 15.5h18M3 19h18',
  estacionamiento:
    'M4.5 16v2.5h15V16l-1.7-4.8a2 2 0 0 0-1.9-1.3H8.1a2 2 0 0 0-1.9 1.3L4.5 16ZM8 20.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM16 20.5a1.7 1.7 0 1 0 0-3.4 1.7 1.7 0 0 0 0 3.4ZM6.5 13.5h11',
  camino: 'M4 21L10 3M20 21L14 3M12 6.5v2.4M12 12v2.4M12 17.5V20',
}

function Ico({ d, color, className = 'w-[22px] h-[22px]' }: { d: string; color: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none" stroke={color} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  )
}

// ── Piezas compartidas ───────────────────────────────────────

function BtnWa({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`cq-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm md:text-base font-bold whitespace-nowrap tap-44 ${className}`}
      style={{ backgroundColor: C.cedroBtn, color: '#FFFFFF' }}
    >
      <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {children}
    </a>
  )
}

/** Foto en marco de madera fino, con leve rotación. */
function MarcoFoto({
  src,
  alt,
  w,
  h,
  ratio,
  sizes,
  pos,
  rotate = 0,
  light = false,
  className = '',
}: {
  src: string
  alt: string
  w: number
  h: number
  ratio: string
  sizes: string
  pos?: string
  rotate?: number
  light?: boolean
  className?: string
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[22px] ${ratio} ${className}`}
      style={{
        rotate: `${rotate}deg`,
        border: `1px solid ${light ? C.lineL : 'rgba(238,240,236,0.22)'}`,
        boxShadow: light ? '0 18px 46px rgba(36,39,43,0.16)' : '0 22px 56px rgba(0,0,0,0.42)',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={w}
        height={h}
        sizes={sizes}
        className="cq-zoom absolute inset-0 h-full w-full object-cover"
        style={pos ? { objectPosition: pos } : undefined}
      />
    </div>
  )
}

function Pie({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <figcaption className="mt-3.5 flex items-baseline gap-3 text-sm leading-snug" style={{ color: light ? C.mutTinta : C.mutVapor }}>
      <Veta color={light ? C.cedroInk : C.brasa} className="w-[24px] h-[7px] translate-y-[-1px]" />
      <span>{children}</span>
    </figcaption>
  )
}

const FICHA = [
  { ico: ICO.personas, lead: '6 personas', rest: 'capacidad de la cabaña' },
  { ico: ICO.equipada, lead: 'Totalmente equipada', rest: 'living, cocina y comedor de madera nativa' },
  { ico: ICO.parrilla, lead: 'Parrilla', rest: 'para el asado al aire libre' },
  { ico: ICO.terraza, lead: 'Amplia terraza', rest: 'con mesa y hamacas mirando el pasto' },
  { ico: ICO.estacionamiento, lead: 'Estacionamiento privado', rest: 'y seguro, junto a la cabaña' },
  { ico: ICO.camino, lead: 'Camino pavimentado', rest: 'acceso fácil desde Villarrica' },
]

export default function CabanasConquilPage() {
  return (
    <div className={`${body.className} cq min-h-screen antialiased overflow-x-clip`} style={{ backgroundColor: C.vapor, color: C.tinta }}>
      <style>{`
        html { scroll-behavior: auto }
        .cq a:focus-visible { outline: 2.5px solid ${C.brasa}; outline-offset: 3px }

        /* Vapor de la tinaja: tres hilos suben y se desvanecen en bucle
           lento detrás del titular (agua caliente en la noche del sur). */
        @keyframes cq-vapor {
          0% { opacity: 0; transform: translateY(30px) scaleY(.8) }
          30% { opacity: .9 }
          70% { opacity: .45 }
          100% { opacity: 0; transform: translateY(-40px) scaleY(1.12) }
        }
        .cq-vapor { animation: cq-vapor 6.4s ease-in-out var(--d, 0s) infinite both }

        /* El titular se desempaña: una niebla lechosa que se retira a la
           derecha mientras el texto recupera opacidad, como vidrio que
           se limpia. Translúcida para leerse como vapor, no como bloque. */
        @keyframes cq-velo { to { transform: translateX(108%) } }
        .cq-velo { animation: cq-velo 1.5s cubic-bezier(.55,.05,.2,1) 1.05s both }
        @keyframes cq-titular { from { opacity: 0 } to { opacity: 1 } }
        .cq-titular { animation: cq-titular 1.7s ease .9s both }

        /* Entradas suaves del resto del hero. */
        @keyframes cq-fade { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .cq-fade { animation: cq-fade .85s ease-out var(--d, 0s) both }

        /* La bandada: cruza el borde inferior del hero a saltitos,
           una sola vez (translateX por pasos), y cada codorniz brinca. */
        @keyframes cq-cruza { from { transform: translateX(-55vw) } to { transform: translateX(115vw) } }
        .cq-bando { animation: cq-cruza 10s steps(46) 2.6s both }
        @keyframes cq-salto { from { transform: translateY(0) } to { transform: translateY(-4px) } }
        .cq-cod { animation: cq-salto .34s var(--h, 0s) infinite alternate }

        /* Brasa bajo la tinaja: un resplandor que respira muy lento. */
        @keyframes cq-brasa { 0%, 100% { opacity: .5 } 50% { opacity: .85 } }
        .cq-brasa { animation: cq-brasa 7s ease-in-out infinite }

        .cq-btn { transition: transform .18s ease, filter .18s ease }
        .cq-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .cq-btn:active { transform: scale(.97) }

        @media (prefers-reduced-motion: reduce) {
          .cq-vapor, .cq-titular, .cq-fade, .cq-bando, .cq-cod, .cq-brasa { animation: none !important }
          .cq-velo { display: none !important }
        }
      `}</style>

      <BlitzNav
        name={
          <span className={`${display.className} text-xl md:text-[22px] tracking-[0.01em] truncate`}>
            Cabañas Conquil
          </span>
        }
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="Reservar"
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(35,37,39,0.94)',
          ink: C.vapor,
          line: C.lineD,
          btnBg: C.cedroBtn,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── 1 · Hero: noche de bosque, vapor y codornices ── */}
      <section id="inicio" className="relative min-h-svh overflow-hidden flex flex-col" style={{ backgroundColor: C.carbon }}>
        {/* vapor detrás del titular */}
        <Vapor className="absolute z-0 top-[13%] right-[2%] w-[88px] h-auto md:w-[130px] lg:right-[42%] lg:top-[18%] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto w-full px-5 md:px-8 pt-[92px] md:pt-28 flex-1 flex flex-col">
          <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-center lg:flex-1">
            <div>
              <p className="cq-fade flex items-center gap-3 text-[11px] md:text-xs uppercase tracking-[0.18em] font-bold mb-5" style={{ color: C.brasa, '--d': '0.15s' } as CSSProperties}>
                <Veta color={C.brasa} />
                <span>Villarrica · Camino Conquil km 1</span>
              </p>

              <div className="relative">
                <h1
                  className={`cq-titular ${display.className} leading-[1.04] tracking-[0.005em] text-[clamp(2.5rem,9.2vw,4.9rem)]`}
                  style={{ color: C.vapor }}
                >
                  Bosque,{' '}
                  <em className={displayItalic.className} style={{ color: C.brasa }}>
                    tinaja
                  </em>{' '}
                  y silencio a 12 minutos de Villarrica.
                </h1>
                {/* velo que se retira: el vidrio se desempaña */}
                <div
                  aria-hidden="true"
                  className="cq-velo absolute -inset-x-2 -inset-y-1 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(238,240,236,0) 0%, rgba(238,240,236,0.3) 32%, rgba(238,240,236,0.62) 72%, rgba(238,240,236,0.68) 100%)',
                  }}
                />
              </div>

              <p
                className="cq-fade mt-5 max-w-md text-base md:text-lg leading-relaxed"
                style={{ color: C.mutVapor, '--d': '1.5s' } as CSSProperties}
              >
                Cabaña totalmente equipada para 6 personas, rodeada de
                bosque nativo y con tinaja privada techada.
              </p>

              <div className="cq-fade mt-6 flex flex-wrap items-center gap-3" style={{ '--d': '1.65s' } as CSSProperties}>
                <BtnWa>Reserva por WhatsApp</BtnWa>
                <a
                  href={IG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cq-btn inline-flex items-center gap-2 px-1 py-3 text-sm md:text-base font-bold tap-44"
                  style={{ color: C.vapor }}
                >
                  <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                  <span className="underline underline-offset-4 decoration-[rgba(232,161,90,0.7)] decoration-2">Instagram</span>
                </a>
              </div>
            </div>

            {/* la terraza enmarcada en el círculo del logo */}
            <div className="cq-fade mt-9 lg:mt-0 pb-16 lg:pb-0 flex justify-center lg:justify-end" style={{ '--d': '0.7s' } as CSSProperties}>
              <div className="relative">
                <Anillos color={C.brasa} className="absolute -top-7 -left-7 w-24 md:w-28 opacity-40 pointer-events-none" />
                <div
                  className="relative rounded-full"
                  style={{ padding: 11, border: '1.5px solid rgba(232,161,90,0.5)', boxShadow: '0 30px 80px rgba(0,0,0,0.5)' }}
                >
                  <div className="relative rounded-full overflow-hidden aspect-square w-[min(74vw,300px)] md:w-[360px] lg:w-[420px]">
                    <Image
                      src={`${IMG}/terraza.webp`}
                      alt="Cabaña gris oscuro con terraza de piedra, mesa y ventanal en Cabañas Conquil, Villarrica"
                      fill
                      priority
                      sizes="(min-width: 1024px) 420px, (min-width: 768px) 360px, 74vw"
                      className="object-cover"
                      style={{ objectPosition: '62% 46%' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Bandada />
      </section>

      {/* ── 2 · La tinaja: brasa y vapor ── */}
      <section id="tinaja" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.carbonDeep }}>
        <div
          aria-hidden="true"
          className="cq-brasa absolute pointer-events-none"
          style={{
            inset: '-10% -20% auto -20%',
            height: '75%',
            background: 'radial-gradient(560px 340px at 72% 34%, rgba(180,97,42,0.32), transparent 70%)',
          }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <Reveal>
                <div className="relative">
                  <Vapor className="absolute -top-16 left-1/2 -translate-x-1/2 w-[74px] h-auto opacity-80 pointer-events-none" />
                  <figure>
                    <MarcoFoto
                      src={`${IMG}/tinaja.webp`}
                      alt="Tinaja de madera techada con agua caliente y vapor subiendo"
                      w={1024}
                      h={576}
                      ratio="aspect-[16/9]"
                      sizes="(min-width: 1024px) 46vw, calc(100vw - 2.5rem)"
                      rotate={-1.2}
                    />
                    <Pie>
                      <strong className="font-bold text-base" style={{ color: C.vapor }}>La tinaja, techada</strong>
                      {' '}· agua caliente y vapor en medio del bosque
                    </Pie>
                  </figure>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-6 order-1 lg:order-2">
              <Reveal>
                <Rotulo color={C.brasa} dark>
                  La tinaja
                </Rotulo>
                <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.4vw,3.7rem)]`} style={{ color: C.vapor }}>
                  Agua caliente bajo techo,
                  <br />
                  <em className={displayItalic.className} style={{ color: C.brasa }}>
                    solo para tu grupo.
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={110}>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutVapor }}>
                  La tinaja de madera es privada y está techada: vapor
                  subiendo, bosque alrededor y nada más que hacer. Se
                  reserva aparte; coordínala por WhatsApp junto con tu
                  estadía.
                </p>
                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {['Privada', 'Techada', 'Se reserva aparte'].map((t) => (
                    <li
                      key={t}
                      className="text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] px-4 py-2 rounded-full"
                      style={{ border: '1px solid rgba(232,161,90,0.45)', color: C.brasa }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3 · La cabaña: madera por dentro ── */}
      <section id="cabana" className="scroll-mt-20" style={{ backgroundColor: C.vapor }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-24">
              <Reveal>
                <Rotulo color={C.cedroInk}>La cabaña</Rotulo>
                <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.4vw,3.7rem)]`} style={{ color: C.tinta }}>
                  Madera por dentro,
                  <br />
                  <em className={displayItalic.className} style={{ color: C.cedro }}>
                    bosque por las ventanas.
                  </em>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutTinta }}>
                  Todo lo que necesitas para quedarte adentro si el sur se
                  pone frío: living con ventanal al bosque y una cocina
                  comedor de madera nativa.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <ul className="mt-8 max-w-md">
                  {FICHA.map((f) => (
                    <li key={f.lead} className="flex items-center gap-4 py-3 border-b" style={{ borderColor: C.lineL }}>
                      <span
                        className="shrink-0 w-[42px] h-[42px] rounded-full flex items-center justify-center"
                        style={{ border: `1.5px solid ${C.praderaInk}`, color: C.praderaInk }}
                      >
                        <Ico d={f.ico} color="currentColor" className="w-[20px] h-[20px]" />
                      </span>
                      <span className="text-[15px] md:text-base leading-snug" style={{ color: C.tinta }}>
                        <strong className="font-bold">{f.lead}</strong>
                        {' · '}
                        <span style={{ color: C.mutTinta }}>{f.rest}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6 lg:gap-7 items-start">
              <Reveal className="sm:row-span-2">
                <figure>
                  <MarcoFoto
                    src={`${IMG}/living.webp`}
                    alt="Living de madera con sillón, TV y ventanal que se abre al bosque"
                    w={900}
                    h={1200}
                    ratio="aspect-[3/4]"
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, calc(100vw - 2.5rem)"
                    rotate={-1}
                    light
                  />
                  <Pie light>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Living</strong>
                    {' '}· ventanal que se abre al bosque
                  </Pie>
                </figure>
              </Reveal>
              <Reveal delay={100} className="sm:mt-10">
                <figure>
                  <MarcoFoto
                    src={`${IMG}/cocina.webp`}
                    alt="Cocina y comedor de madera nativa con ventana larga al verde"
                    w={1200}
                    h={900}
                    ratio="aspect-[4/3]"
                    sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, calc(100vw - 2.5rem)"
                    rotate={0.8}
                    light
                  />
                  <Pie light>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Cocina comedor</strong>
                    {' '}· madera nativa a la vista
                  </Pie>
                </figure>
              </Reveal>
              <Reveal delay={160}>
                <figure>
                  <MarcoFoto
                    src={`${IMG}/dormitorio.webp`}
                    alt="Dormitorio con cama matrimonial y cubrecama floral"
                    w={1200}
                    h={900}
                    ratio="aspect-[4/3]"
                    sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, calc(100vw - 2.5rem)"
                    rotate={-0.6}
                    light
                  />
                  <Pie light>
                    <strong className="font-bold text-base" style={{ color: C.tinta }}>Dormitorio</strong>
                    {' '}· camas hechas para descansar
                  </Pie>
                </figure>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4 · El entorno: pasto, codornices y bosque nativo ── */}
      <section id="entorno" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo color={C.praderaInk}>El entorno</Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-9 md:mb-12">
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.4vw,3.7rem)]`} style={{ color: C.tinta }}>
                El bosque nativo llega
                <br />
                <em className={displayItalic.className} style={{ color: C.praderaInk }}>
                  hasta la puerta.
                </em>
              </h2>
              <p className="text-sm md:text-base max-w-sm leading-relaxed" style={{ color: C.mutTinta }}>
                Pasto abierto frente a la cabaña, donde se pasean las
                codornices, y bosque nativo detrás. Descanso y desconexión
                a 12 minutos del centro de Villarrica.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <figure>
              <MarcoFoto
                src={`${IMG}/codornices.webp`}
                alt="Bandada de codornices en el pasto frente al bosque nativo"
                w={1200}
                h={675}
                ratio="aspect-[16/9] md:aspect-[16/7]"
                sizes="calc(100vw - 2.5rem)"
                pos="50% 62%"
                light
              />
              <Pie light>
                <strong className="font-bold text-base" style={{ color: C.tinta }}>Las codornices</strong>
                {' '}· bajan al pasto frente a la cabaña
              </Pie>
            </figure>
          </Reveal>

          <div className="grid sm:grid-cols-12 gap-6 lg:gap-7 mt-9 md:mt-12 items-end">
            <Reveal className="sm:col-span-7" delay={80}>
              <figure>
                <MarcoFoto
                  src={`${IMG}/cabana.webp`}
                  alt="Cabaña oscura con codornices en el pasto y árboles del bosque atrás"
                  w={1200}
                  h={900}
                  ratio="aspect-[16/9]"
                  sizes="(min-width: 640px) 55vw, calc(100vw - 2.5rem)"
                  pos="50% 0%"
                  light
                />
                <Pie light>
                  <strong className="font-bold text-base" style={{ color: C.tinta }}>La cabaña</strong>
                  {' '}· entre pradera y bosque nativo
                </Pie>
              </figure>
            </Reveal>
            <Reveal className="sm:col-span-5" delay={150}>
              <figure>
                <MarcoFoto
                  src={`${IMG}/vista-terraza.webp`}
                  alt="El bosque visto desde adentro, por el ventanal de la cabaña"
                  w={360}
                  h={640}
                  ratio="aspect-[3/2] max-w-[320px] sm:max-w-none"
                  sizes="(min-width: 640px) 38vw, 320px"
                  pos="50% 5%"
                  rotate={1.4}
                  light
                />
                <Pie light>
                  <strong className="font-bold text-base" style={{ color: C.tinta }}>Desde adentro</strong>
                  {' '}· el bosque por el ventanal
                </Pie>
              </figure>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ul className="mt-10 md:mt-14 flex flex-wrap gap-x-10 gap-y-4">
              {['A 12 minutos del centro de Villarrica', 'Cerca de termas y lagos', 'Actividades al aire libre'].map((t) => (
                <li key={t} className="flex items-center gap-3 text-sm md:text-[15px] font-semibold" style={{ color: C.tinta }}>
                  <Veta color={C.praderaInk} className="w-[26px] h-[8px]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Para grupos: la vivienda ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.carbon }}>
        <Anillos color={C.brasa} className="absolute -right-10 -top-14 w-56 md:w-72 opacity-[0.14] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo color={C.brasa} dark>
                  ¿Vienen más personas?
                </Rotulo>
                <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.4vw,3.7rem)]`} style={{ color: C.vapor }}>
                  También una vivienda
                  <br />
                  <em className={displayItalic.className} style={{ color: C.brasa }}>
                    para grupos grandes.
                  </em>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutVapor }}>
                  Una segunda opción para cuando el grupo es grande:
                  vivienda totalmente equipada, con ropa de cama y
                  toallas incluidas.
                </p>
              </Reveal>
              <Reveal delay={140}>
                <div className="mt-8">
                  <BtnWa>Consulta por la vivienda</BtnWa>
                </div>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <ul className="grid grid-cols-3 gap-4 md:gap-6">
                  {[
                    { n: '9', t: 'plazas', d: 'hasta 9 personas' },
                    { n: '2', t: 'habitaciones', d: 'totalmente equipada' },
                    { n: '2', t: 'baños', d: 'ropa de cama y toallas incluidas' },
                  ].map((s) => (
                    <li
                      key={s.t}
                      className="rounded-[20px] px-4 py-6 md:px-6 md:py-8 text-center"
                      style={{ border: `1px solid ${C.lineD}`, backgroundColor: 'rgba(238,240,236,0.04)' }}
                    >
                      <p className={`${display.className} leading-none text-[clamp(3rem,10vw,5rem)]`} style={{ color: C.brasa }}>
                        {s.n}
                      </p>
                      <p className="mt-2 text-xs md:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: C.vapor }}>
                        {s.t}
                      </p>
                      <p className="mt-2.5 text-[11px] md:text-xs leading-relaxed" style={{ color: C.mutVapor2 }}>
                        {s.d}
                      </p>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6 · Cómo llegar: Camino Conquil km 1 ── */}
      <section id="ubicacion" className="scroll-mt-20" style={{ backgroundColor: C.vapor }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Rotulo color={C.cedroInk}>Cómo llegar</Rotulo>
                <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,6.4vw,3.7rem)]`} style={{ color: C.tinta }}>
                  Camino Conquil,
                  <br />
                  <em className={displayItalic.className} style={{ color: C.cedro }}>
                    km 1, Villarrica.
                  </em>
                </h2>
                <p className="mt-6 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutTinta }}>
                  Se llega fácil por camino pavimentado y hay estacionamiento
                  privado y seguro. El centro de Villarrica queda a 12
                  minutos.
                </p>
              </Reveal>
              <Reveal delay={110}>
                <dl className="mt-8 max-w-md">
                  {[
                    { t: 'Dirección', d: `${BIZ.address}, ${BIZ.city}, ${BIZ.region}` },
                    { t: 'Al centro de Villarrica', d: '12 minutos' },
                    { t: 'Disponibilidad', d: 'Todos los días, las 24 horas' },
                    { t: 'También en', d: 'Airbnb' },
                  ].map((r) => (
                    <div key={r.t} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-0.5 py-3 border-b" style={{ borderColor: C.lineL }}>
                      <dt className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutTinta }}>
                        {r.t}
                      </dt>
                      <dd className={`${display.className} text-lg md:text-xl`} style={{ color: C.tinta }}>
                        {r.d}
                      </dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <BtnWa className="w-full sm:w-auto">Reserva por WhatsApp</BtnWa>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cq-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-bold tap-44"
                    style={{ border: `1.5px solid ${C.cedro}`, color: C.cedroInk, backgroundColor: 'rgba(180,97,42,0.06)' }}
                  >
                    Cómo llegar
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M3 13L13 3M6 3h7v7" />
                    </svg>
                  </a>
                </div>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className={`${display.className} mt-6 inline-block text-2xl md:text-3xl tap-44`} style={{ color: C.tinta }}>
                  {BIZ.phoneDisplay}
                </a>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div
                  className="overflow-hidden rounded-[24px]"
                  style={{ border: `1px solid ${C.lineL}`, boxShadow: '0 22px 56px rgba(36,39,43,0.18)' }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="block w-full h-[300px] md:h-[440px]"
                    style={{ border: 0, backgroundColor: C.papel }}
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <p className="mt-4 text-center text-xs font-bold uppercase tracking-[0.22em]" style={{ color: C.mutTinta }}>
                  {BIZ.address} · {BIZ.city} · {BIZ.region}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7 · Footer ── */}
      <footer style={{ backgroundColor: C.carbonDeep, color: C.vapor }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <img
              src={`${IMG}/logo.webp`}
              alt={`Logo de ${BIZ.name}: volcán nevado, cabaña y picaflor en un círculo`}
              width={497}
              height={496}
              className="h-[72px] w-[72px] rounded-full object-cover shrink-0"
              style={{ border: `1.5px solid ${C.lineD}` }}
            />
            <div>
              <p className={`${display.className} text-xl md:text-2xl`}>{BIZ.name}</p>
              <address className="not-italic text-sm leading-relaxed mt-0.5" style={{ color: C.mutVapor }}>
                {BIZ.address} · {BIZ.city}, {BIZ.region}
                <br />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44" style={{ color: C.vapor }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.mutVapor }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
            <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors tap-44">
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: C.lineD }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.mutVapor2 }}>
            Fotos, dirección, WhatsApp, disponibilidad 24/7 y datos de la
            cabaña y la vivienda son reales (Google Maps e Instagram). Los
            textos y rótulos son de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
