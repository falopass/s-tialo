import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, OFRECE, OPINIONES, WA_LINK, WA_ASESORIA, WA_DESPACHO, MAPS_URL, MAPS_EMBED, IMG } from './content'

// DM Serif Display para la voz editorial (su itálica es el acento de la
// casa) y Mulish para el texto corrido.
const display = localFont({
  src: [
    { path: '../../fonts/dm-serif-display/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/dm-serif-display/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/mulish/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})

// La paleta sale de sus fotos: verde hoja de las marantas, terracota de
// las macetas de greda, el rosa de las nervaduras y papel cálido.
const C = {
  hoja: '#1E3A2A',
  hojaBajo: '#142B1F',
  terracota: '#B95A37',
  terracotaInk: '#96452A', // terracota legible sobre papel (≥5.4:1)
  terracotaOsc: '#A84F2E', // fondo terracota: papel sobre él da ~5.2:1
  rosa: '#E9B7AE',
  papel: '#F4EFE5',
  papel2: '#EAE3D2',
  mutC: '#55604F', // tinta atenuada sólida (~6:1 sobre papel)
  mutD: '#C6CDBA', // crema verdoso sólido (~7.6:1 sobre hoja)
  line: 'rgba(30,58,42,0.16)',
  lineD: 'rgba(244,239,229,0.2)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// La hoja en végica: punta arriba y abajo, ancha al centro. Es el motivo
// del demo: así se despliega la foto de portada y así se marcan las secciones.
const HOJA_ABIERTA =
  'polygon(50% 0%, 64% 6%, 78% 18%, 89% 36%, 92% 54%, 86% 72%, 72% 88%, 50% 100%, 28% 88%, 14% 72%, 8% 54%, 11% 36%, 22% 18%, 36% 6%)'
const HOJA_ENROLLADA =
  'polygon(50% 0%, 53% 6%, 55% 18%, 56.5% 36%, 57% 54%, 56% 72%, 54% 88%, 50% 100%, 46% 88%, 44% 72%, 43% 54%, 43.5% 36%, 45% 18%, 47% 6%)'

export const metadata: Metadata = demoMetadata({
  slug: 'vivero-terraterapia-los-angeles',
  title: 'Vivero Urbano Terraterapia · Plantas en Los Ángeles',
  description:
    'Vivero urbano en Pasaje Quilaco 1343, Los Ángeles: plantas de interior y exterior, insumos, macetas y asesorías a domicilio u online. Lunes a sábado de 10:00 a 19:00.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La repisa', href: '#vivero' },
  { label: 'Asesorías', href: '#asesorias' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Dónde', href: '#donde' },
]

/** La hoja en végica, como sello de sección. */
function MarcaHoja({
  color,
  className = 'w-[15px] h-[20px]',
  rellena = false,
}: {
  color: string
  className?: string
  rellena?: boolean
}) {
  return (
    <svg viewBox="0 0 16 22" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 1 C 12 5, 15 8.5, 15 12 C 15 17, 11.5 21, 8 21 C 4.5 21, 1 17, 1 12 C 1 8.5, 4 5, 8 1 Z"
        fill={rellena ? color : 'none'}
        stroke={color}
        strokeWidth="1.4"
      />
      {!rellena && <path d="M8 4.5 L8 17.5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />}
    </svg>
  )
}

/** Rótulo de sección: versalita con la hoja de la casa. */
function Rotulo({
  children,
  color,
  icono,
}: {
  children: React.ReactNode
  color: string
  icono: string
}) {
  return (
    <p className="flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5" style={{ color }}>
      <MarcaHoja color={icono} className="w-[13px] h-[18px] shrink-0" />
      {children}
    </p>
  )
}

function WaIcon({ className = 'w-[16px] h-[16px]' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function BtnWa({
  children,
  href = WA_LINK,
  bg = C.hoja,
  ink = C.papel,
}: {
  children: React.ReactNode
  href?: string
  bg?: string
  ink?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="tt-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tap-44"
      style={{ backgroundColor: bg, color: ink }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

function BtnLinea({
  children,
  href,
  color = C.hoja,
  external = false,
}: {
  children: React.ReactNode
  href: string
  color?: string
  external?: boolean
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="tt-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold border tap-44"
      style={{ borderColor: color, color }}
    >
      {children}
    </a>
  )
}

/** Foto recortada en hoja. La hoja se despliega desde enrollada. */
function FotoHoja({
  src,
  alt,
  delay,
  className = '',
  imgPosition,
  priority = false,
}: {
  src: string
  alt: string
  delay: number
  className?: string
  imgPosition?: string
  priority?: boolean
}) {
  return (
    <div className={`tt-hoja-gira ${className}`} style={{ '--tt-d': `${delay}s` } as CSSProperties}>
      <div className="tt-despliega relative w-full aspect-[3/4]" style={{ '--tt-d': `${delay + 0.12}s` } as CSSProperties}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : 'eager'}
          sizes="(min-width: 768px) 300px, 240px"
          className="tt-hoja-img object-cover"
          style={{ objectPosition: imgPosition ?? '50% 50%', '--tt-d': `${delay + 0.12}s` } as CSSProperties}
        />
      </div>
    </div>
  )
}

const REPISA = [
  { src: `${IMG}/calathea-verde.webp`, alt: 'Planta de hojas verdes con dibujo claro, sostenida en la mano', caption: 'hojas con dibujo', hM: 236, hD: 232 },
  { src: `${IMG}/corazon.webp`, alt: 'Planta de hojas grandes en forma de corazón dentro del vivero', caption: 'hojas corazón', hM: 262, hD: 282 },
  { src: `${IMG}/anturios.webp`, alt: 'Anturios rojos y rosados en maceta', caption: 'flores rojas y rosadas', hM: 244, hD: 252 },
  { src: `${IMG}/suculenta.webp`, alt: 'Suculenta alta en maceta de greda, con los estantes del vivero detrás', caption: 'suculenta en greda', hM: 268, hD: 296 },
  { src: `${IMG}/rosa.webp`, alt: 'Rosa coral entre el follaje del jardín', caption: 'flor de jardín', hM: 238, hD: 244 },
  { src: `${IMG}/exterior.webp`, alt: 'Arbusto de hojas recortadas en el patio del vivero', caption: 'verde de patio', hM: 256, hD: 270 },
]

const PASOS = [
  {
    n: '01',
    t: 'Cuentas qué rincón quieres llenar',
    d: 'Cuánta luz tiene, cuánto espacio, qué te gusta. Con eso ya hay candidatas.',
  },
  {
    n: '02',
    t: 'Te orientan para elegir',
    d: 'Qué planta va en ese lugar y qué cuidados pide, sin vueltas.',
  },
  {
    n: '03',
    t: 'Te vas sabiendo cuidarla',
    d: 'Riego, luz y qué esperar de ella. La planta sale con su consejo.',
  },
]

export default function TerraterapiaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.hoja }}
    >
      <style>{`
        /* La hoja se despliega: la foto de portada pasa de hoja enrollada
           (un tallo fino) a hoja abierta, como las marantas nuevas. */
        @keyframes tt-despliega {
          from { clip-path: ${HOJA_ENROLLADA} }
          to { clip-path: ${HOJA_ABIERTA} }
        }
        .tt-despliega {
          clip-path: ${HOJA_ABIERTA};
          animation: tt-despliega 1.35s cubic-bezier(.5,.08,.2,1) var(--tt-d, 0s) backwards;
          filter: drop-shadow(0 22px 26px rgba(20,43,31,0.30));
        }
        @keyframes tt-hoja-img { from { transform: scale(1.28) } to { transform: scale(1) } }
        .tt-hoja-img { animation: tt-hoja-img 1.7s cubic-bezier(.3,.7,.2,1) var(--tt-d, 0s) backwards }
        @keyframes tt-hoja-gira {
          from { transform: translateY(26px) rotate(7deg); opacity: 0 }
          to { transform: none; opacity: 1 }
        }
        .tt-hoja-gira { transform-origin: 50% 100%; animation: tt-hoja-gira .9s cubic-bezier(.3,.8,.3,1) var(--tt-d, 0s) backwards }

        /* Brisa leve: la hoja mece desde su base, ya desplegada. */
        @keyframes tt-mecer { from { transform: rotate(-1.1deg) } to { transform: rotate(1.1deg) } }
        .tt-mecer { transform-origin: 50% 100%; animation: tt-mecer 5.4s ease-in-out 2.6s infinite alternate }

        /* Portada: las líneas del titular suben dentro de su máscara. */
        @keyframes tt-linea { from { transform: translateY(112%) } to { transform: translateY(0) } }
        .tt-linea { display: block; animation: tt-linea .95s cubic-bezier(.22,.68,.26,1) var(--tt-d, 0s) backwards }
        @keyframes tt-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .tt-sube { animation: tt-sube .9s cubic-bezier(.22,.68,.26,1) var(--tt-d, 0s) backwards }

        /* El tallo de "el consejo" crece al bajar; las hojas brotan. */
        @supports (animation-timeline: view()) {
          .tt-crece { transform-origin: top; animation: tt-crece linear both; animation-timeline: view(); animation-range: entry 12% cover 58% }
          @keyframes tt-crece { from { transform: scaleY(0) } to { transform: scaleY(1) } }
          .tt-brote { transform-origin: 50% 100%; animation: tt-brote .6s cubic-bezier(.3,1.4,.5,1) both; animation-timeline: view(); animation-range: entry 2% entry 55% }
          @keyframes tt-brote { from { transform: scale(0) } to { transform: scale(1) } }
        }

        .tt-btn { transition: transform .18s ease, filter .18s ease }
        .tt-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .tt-btn:active { transform: scale(.97) }
        .tt-page a:focus-visible, .tt-page summary:focus-visible { outline: 3px solid ${C.terracota}; outline-offset: 3px }
        .tt-page a:focus:not(:focus-visible) { outline: none }
        .tt-zoom { overflow: hidden }
        .tt-zoom .tt-zoom-img { transition: transform .8s cubic-bezier(.2,.6,.2,1) }
        .tt-zoom:hover .tt-zoom-img { transform: scale(1.04) }
        .tt-repisa { scrollbar-width: none }
        .tt-repisa::-webkit-scrollbar { display: none }

        @media (prefers-reduced-motion: reduce) {
          .tt-despliega, .tt-hoja-img, .tt-hoja-gira, .tt-linea, .tt-sube, .tt-crece, .tt-brote { animation: none !important }
          .tt-mecer { animation: none !important }
          .tt-btn, .tt-zoom-img { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.01em]">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'light',
          bar: 'rgba(244,239,229,0.94)',
          ink: C.hoja,
          line: C.line,
          btnBg: C.hoja,
          btnInk: C.papel,
        }}
      />

      <div className="tt-page">
        {/* ── 1 · Portada: la hoja se despliega ── */}
        <section id="inicio" className="relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[84px] md:pt-[112px] pb-14 md:pb-16 text-center">
            <p
              className="tt-sube flex items-center justify-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.34em]"
              style={{ color: C.mutC, '--tt-d': '0.15s' } as CSSProperties}
            >
              <MarcaHoja color={C.terracota} className="w-[12px] h-[16px]" />
              Vivero urbano · {BIZ.city}, Biobío
              <MarcaHoja color={C.terracota} className="w-[12px] h-[16px]" />
            </p>

            <h1
              className={`${display.className} mt-4 md:mt-7 leading-[1.03] tracking-[-0.01em] text-[clamp(2.3rem,8.6vw,5rem)]`}
              aria-label="Plantas que llenan la casa, y te enseñan a cuidarlas."
            >
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <span className="tt-linea" style={{ '--tt-d': '0.3s' } as CSSProperties}>
                  Plantas que llenan la casa,
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.14em]">
                <span className="tt-linea" style={{ '--tt-d': '0.45s' } as CSSProperties}>
                  y te <em style={{ color: C.terracotaInk }}>enseñan a cuidarlas</em>.
                </span>
              </span>
            </h1>

            {/* la hoja que se despliega, flanqueada por dos más chicas */}
            <div className="tt-mecer relative mx-auto mt-5 md:mt-9 w-fit">
              <FotoHoja
                src={`${IMG}/calathea.webp`}
                alt="Planta de hojas rosadas y verdes sostenida en la mano, en el vivero"
                delay={0.55}
                className="absolute -left-[78px] md:-left-[190px] bottom-[5%] md:bottom-[4%] w-[88px] md:w-[172px] -rotate-[8deg] z-0"
              />
              <FotoHoja
                src={`${IMG}/calathea-verde.webp`}
                alt="Planta de hojas verdes con dibujo claro, sostenida en la mano"
                delay={0.75}
                className="absolute -right-[78px] md:-right-[190px] bottom-[11%] md:bottom-[10%] w-[88px] md:w-[172px] rotate-[7deg] z-0"
              />
              <FotoHoja
                src={`${IMG}/hero.webp`}
                alt="Hojas grandes verde oscuro con nervaduras rosadas, al sol"
                delay={0.35}
                className="relative z-10 w-[200px] md:w-[300px]"
                imgPosition="50% 42%"
                priority
              />
            </div>
            <div className="tt-sube mt-1 flex items-center justify-center gap-3" style={{ '--tt-d': '1.9s' } as CSSProperties} aria-hidden="true">
              <span className="h-px w-16" style={{ backgroundColor: C.line }} />
              <MarcaHoja color={C.terracota} className="w-[11px] h-[15px]" />
              <span className="h-px w-16" style={{ backgroundColor: C.line }} />
            </div>

            <p
              className="tt-sube mx-auto mt-4 max-w-md md:max-w-xl text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutC, '--tt-d': '1.7s' } as CSSProperties}
            >
              Plantas de interior y exterior, insumos y macetas en {BIZ.barrio}.
              Y con cada una, el consejo para cuidarla.
            </p>

            <div
              className="tt-sube mt-5 flex flex-col sm:flex-row items-center justify-center gap-3"
              style={{ '--tt-d': '1.85s' } as CSSProperties}
            >
              <BtnWa>Escribir por WhatsApp</BtnWa>
              <BtnLinea href="#vivero">Conocer la repisa</BtnLinea>
            </div>

            <p
              className="tt-sube mt-4 text-xs md:text-sm font-semibold tracking-[0.08em]"
              style={{ color: C.mutC, '--tt-d': '2s' } as CSSProperties}
            >
              Lun a sáb · 10:00 a 19:00 · {BIZ.reviews} opiniones en Google
            </p>
          </div>
        </section>

        {/* ── 2 · La repisa: lo que hay en el pasaje ── */}
        <section id="vivero" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
            <div className="grid md:grid-cols-12 gap-5 md:gap-10 items-end mb-9 md:mb-12">
              <Reveal className="md:col-span-7">
                <Rotulo color={C.terracotaInk} icono={C.terracota}>
                  El vivero
                </Rotulo>
                <h2 className={`${display.className} leading-[1.06] text-[clamp(1.95rem,6.8vw,3.7rem)]`}>
                  En la repisa hay
                  <br />
                  <em>verde para cada rincón</em>.
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-1" style={{ color: C.mutC }}>
                  De interior y de exterior, con flor y sin flor. Las fotos son
                  reales, de su ficha de Google: esto es lo que crece en el
                  pasaje.
                </p>
              </Reveal>
            </div>

            {/* la repisa: fotos de distinto porte sobre una línea de greda */}
            <div className="relative">
              <div
                className="absolute inset-x-0 bottom-[30px] h-[3px] rounded-full"
                style={{ backgroundColor: C.terracota }}
                aria-hidden="true"
              />
              <div className="tt-repisa -mx-5 px-5 md:mx-0 md:px-0 flex items-end gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-1 md:grid md:grid-cols-6 md:overflow-visible md:pb-0">
                {REPISA.map((f, i) => (
                  <figure key={f.src} className="w-[47%] md:w-auto shrink-0 snap-start">
                    <div
                      className="tt-zoom relative overflow-hidden rounded-t-[12px] rounded-b-[3px] md:rounded-t-[14px] md:rounded-b-[3px] h-[var(--rh)] md:h-[var(--rhd)]"
                      style={{ ['--rh' as string]: `min(${f.hM}px, 62vw)`, ['--rhd' as string]: `${f.hD}px` }}
                    >
                      <Image
                        src={f.src}
                        alt={f.alt}
                        width={900}
                        height={1200}
                        loading="eager"
                        className="tt-zoom-img w-full h-full object-cover"
                        sizes="(min-width: 768px) 16vw, 47vw"
                      />
                    </div>
                    <figcaption
                      className="mt-3 flex items-baseline gap-2 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em]"
                      style={{ color: C.mutC }}
                    >
                      <span className={display.className} style={{ color: C.terracotaInk }} aria-hidden="true">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {f.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* índice de la casa */}
            <Reveal delay={100}>
              <dl className="mt-10 md:mt-14 border-t" style={{ borderColor: C.line }}>
                {OFRECE.map((o, i) => (
                  <div
                    key={o.titulo}
                    className="grid grid-cols-[44px_1fr] md:grid-cols-[64px_220px_1fr] gap-x-4 items-baseline py-4 md:py-5 border-b"
                    style={{ borderColor: C.line }}
                  >
                    <span className={`${display.className} text-lg md:text-2xl leading-none`} style={{ color: C.terracotaInk }} aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <dt className={`${display.className} text-xl md:text-[1.7rem] leading-tight`}>
                      {o.titulo}
                    </dt>
                    <dd className="col-start-2 md:col-start-3 text-[13px] md:text-[15px] leading-relaxed" style={{ color: C.mutC }}>
                      {o.texto}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </section>

        {/* ── 3 · El consejo: la atención que las hace crecer ── */}
        <section id="consejo" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.hoja, color: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color={C.mutD} icono={C.rosa}>
                  La atención
                </Rotulo>
                <h2 className={`${display.className} leading-[1.06] text-[clamp(1.95rem,6.8vw,3.7rem)]`}>
                  Aquí cada planta
                  <br />
                  sale <em style={{ color: C.rosa }}>con su consejo</em>.
                </h2>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.mutD }}>
                  Quienes ya vinieron destacan lo mismo: la orientación. Así es
                  comprar en Terraterapia.
                </p>
              </Reveal>

              <div className="relative mt-9 md:mt-11 pl-9 md:pl-11">
                <span
                  className="tt-crece absolute left-[7px] top-1 bottom-2 w-[2px] rounded-full"
                  style={{ backgroundColor: 'rgba(233,183,174,0.55)' }}
                  aria-hidden="true"
                />
                <ol className="space-y-7 md:space-y-9">
                  {PASOS.map((p, i) => (
                    <li key={p.n} className="relative">
                      <span
                        className="tt-brote absolute -left-9 md:-left-11 top-1 flex items-center justify-center"
                        aria-hidden="true"
                      >
                        <MarcaHoja color={C.rosa} className="w-[15px] h-[21px]" rellena />
                      </span>
                      <Reveal delay={i * 90}>
                        <p className={`${display.className} text-sm md:text-base`} style={{ color: C.rosa }}>
                          {p.n}
                        </p>
                        <h3 className={`${display.className} mt-1 text-xl md:text-2xl leading-tight`}>
                          {p.t}
                        </h3>
                        <p className="mt-1.5 max-w-sm text-[13px] md:text-[15px] leading-relaxed" style={{ color: C.mutD }}>
                          {p.d}
                        </p>
                      </Reveal>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <Reveal delay={140}>
              <figure className="mx-auto w-[min(78%,340px)]">
                <div className="tt-despliega relative w-full aspect-[3/4]">
                  <Image
                    src={`${IMG}/corazon.webp`}
                    alt="Planta de hojas en forma de corazón sostenida en la mano, dentro del vivero"
                    width={900}
                    height={1200}
                    className="w-full h-full object-cover"
                    sizes="(min-width: 1024px) 340px, 78vw"
                  />
                </div>
                <figcaption className="mt-4 text-center text-xs md:text-sm font-semibold tracking-[0.1em]" style={{ color: C.mutD }}>
                  Un vivero liderado por una mujer, en {BIZ.barrio}.
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>

        {/* ── 4 · Asesorías y despacho ── */}
        <section id="asesorias" className="scroll-mt-20" style={{ backgroundColor: C.rosa, color: C.hoja }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <Reveal>
                <Rotulo color="rgba(30,58,42,0.75)" icono={C.terracotaOsc}>
                  Asesorías y despacho
                </Rotulo>
                <h2 className={`${display.className} leading-[1.06] text-[clamp(1.95rem,6.5vw,3.6rem)]`}>
                  ¿No sabes qué planta
                  <br />
                  <em>va en tu casa?</em>
                </h2>
                <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: 'rgba(30,58,42,0.82)' }}>
                  Te asesoran para elegir y para cuidar lo que ya tienes. Y si
                  no puedes pasar por el pasaje, te la llevan.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <BtnWa href={WA_ASESORIA}>Pedir una asesoría</BtnWa>
                  <BtnLinea href={WA_DESPACHO} external>
                    Consultar despacho
                  </BtnLinea>
                </div>
              </Reveal>
            </div>
            <Reveal delay={130}>
              <ul className="border-t" style={{ borderColor: 'rgba(30,58,42,0.28)' }}>
                {[
                  ['Asesoría a domicilio', 'Van a tu casa, ven el lugar y te dicen qué va ahí.'],
                  ['Asesoría online', 'La misma orientación, a distancia, por WhatsApp.'],
                  ['Despacho y envíos a regiones', 'La planta sale del pasaje y llega a tu puerta.'],
                ].map(([t, d], i) => (
                  <li
                    key={t}
                    className="flex items-baseline gap-4 py-4 md:py-5 border-b"
                    style={{ borderColor: 'rgba(30,58,42,0.28)' }}
                  >
                    <MarcaHoja color={C.terracotaOsc} className="w-[13px] h-[18px] shrink-0 translate-y-[3px]" />
                    <div>
                      <p className={`${display.className} text-lg md:text-[1.45rem] leading-tight`}>{t}</p>
                      <p className="mt-1 text-[13px] md:text-[15px] leading-relaxed" style={{ color: 'rgba(30,58,42,0.82)' }}>
                        {d}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ── 5 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <Reveal>
              <Rotulo color={C.terracotaInk} icono={C.terracota}>
                Opiniones en Google
              </Rotulo>
              <h2 className={`${display.className} leading-[1.06] text-[clamp(1.95rem,6.5vw,3.6rem)] max-w-2xl`}>
                Te explican
                <br />
                <em>todo lo que necesita</em>.
              </h2>
            </Reveal>

            <div className="mt-11 md:mt-14 grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-16">
              <Reveal>
                <figure>
                  <MarcaHoja color={C.terracota} className="w-[18px] h-[25px] mb-5" />
                  <blockquote className={`${display.className} text-[clamp(1.45rem,4vw,2.2rem)] leading-[1.25]`}>
                    “{OPINIONES[0].texto}”
                  </blockquote>
                  <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutC }}>
                    {OPINIONES[0].autor} · Google
                  </figcaption>
                </figure>
              </Reveal>
              <div className="flex flex-col gap-9 lg:border-l lg:pl-14" style={{ borderColor: C.line }}>
                {OPINIONES.slice(1).map((o, i) => (
                  <Reveal key={o.autor} delay={120 + i * 100}>
                    <figure>
                      <blockquote className="text-[15px] md:text-lg leading-relaxed">“{o.texto}”</blockquote>
                      <figcaption className="mt-3 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.mutC }}>
                        {o.autor} · Google
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
                <Reveal delay={300}>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                    style={{ color: C.terracotaInk }}
                  >
                    Ver las {BIZ.reviews} opiniones en Google
                    <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6 · Dónde: el pasaje ── */}
        <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <Reveal>
              <Rotulo color={C.terracotaInk} icono={C.terracota}>
                Dónde estamos
              </Rotulo>
              <h2 className={`${display.className} leading-[1.06] text-[clamp(1.95rem,6.5vw,3.6rem)]`}>
                Pasaje Quilaco 1343,
                <br />
                <em>{BIZ.barrio}</em>.
              </h2>
              <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: C.mutC }}>
                {BIZ.city}, {BIZ.region}
              </p>

              <dl className="mt-8 max-w-md divide-y" style={{ borderColor: C.line }}>
                <div className="flex gap-5 py-4" style={{ borderColor: 'inherit' }}>
                  <dt className="w-[104px] shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] pt-1" style={{ color: C.terracotaInk }}>
                    Horario
                  </dt>
                  <dd className="text-[15px] md:text-base font-semibold leading-relaxed">{BIZ.horario}</dd>
                </div>
                <div className="flex gap-5 py-4" style={{ borderColor: 'inherit' }}>
                  <dt className="w-[104px] shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] pt-1" style={{ color: C.terracotaInk }}>
                    WhatsApp
                  </dt>
                  <dd>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] md:text-base font-semibold underline underline-offset-4 decoration-1 tap-44"
                      style={{ textDecorationColor: C.terracota }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div className="flex gap-5 py-4" style={{ borderColor: 'inherit' }}>
                  <dt className="w-[104px] shrink-0 text-[11px] font-bold uppercase tracking-[0.18em] pt-1" style={{ color: C.terracotaInk }}>
                    Instagram
                  </dt>
                  <dd>
                    <a
                      href={BIZ.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[15px] md:text-base font-semibold underline underline-offset-4 decoration-1 tap-44"
                      style={{ textDecorationColor: C.terracota }}
                    >
                      @terraterapia_la
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <BtnWa>Escríbenos por WhatsApp</BtnWa>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tt-btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-bold tap-44"
                  style={{ backgroundColor: C.terracota, color: '#FFFFFF' }}
                >
                  Cómo llegar
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
            <Reveal delay={140}>
              <div
                className="relative w-full overflow-hidden rounded-[18px] aspect-[4/3] min-h-[300px]"
                style={{ border: `1.5px solid ${C.line}`, backgroundColor: C.papel }}
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
        </section>

        {/* ── 7 · Cierre ── */}
        <section style={{ backgroundColor: C.terracotaOsc, color: C.papel }}>
          <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
            <Reveal>
              <MarcaHoja color={C.rosa} className="w-[18px] h-[25px] mx-auto mb-5" />
              <h2 className={`${display.className} leading-[1.05] text-[clamp(2.1rem,7vw,4rem)]`}>
                ¿Buscas una planta
                <br />
                <em>en especial?</em>
              </h2>
              <p className="mt-5 max-w-md mx-auto text-[15px] md:text-lg leading-relaxed" style={{ color: 'rgba(244,239,229,0.88)' }}>
                Escríbenos con su nombre o una foto, y te contamos si está en
                la repisa.
              </p>
              <div className="mt-8 flex justify-center">
                <BtnWa bg={C.papel} ink={C.hoja}>
                  Escribir por WhatsApp
                </BtnWa>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 8 · Footer ── */}
        <footer style={{ backgroundColor: C.hojaBajo, color: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <p className={`${display.className} text-xl leading-none flex items-center gap-2.5`}>
              <MarcaHoja color={C.rosa} className="w-[13px] h-[18px]" />
              {BIZ.name}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.mutD }}>
              {BIZ.rubro} · {BIZ.address}, {BIZ.city} · Empresa liderada por una mujer ·{' '}
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 whitespace-nowrap tap-44" style={{ color: C.papel }}>
                {BIZ.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.rosa }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.rosa }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.short}`} />
    </div>
  )
}
