import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import RevealCirculo from './reveal-circulo'
import { BIZ, WA_LINK, WA_CUMPLE, MAPS_URL, MAPS_EMBED, HORARIO, REVIEWS, IMG } from './content'

// Instrument Serif para los titulares (su trazo fino y sereno) y Manrope
// para el texto corrido.
const display = localFont({
  src: [
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})

// La paleta sale del invernadero y del rododendro: musgo del follaje,
// hoja nueva de los brotes, rosa del botón de flor, papel y tinta.
const C = {
  papel: '#F5F1E6',
  papel2: '#EAE3D0',
  musgo: '#2F4A2E',
  musgoBajo: '#213420',
  hoja: '#7FAF5A',
  rosa: '#C2437E',
  rosaInk: '#A03063', // rosa oscuro: ≥5:1 sobre papel y papel2
  tinta: '#1C221B',
  mutC: 'rgba(28,34,27,0.68)', // tinta atenuada (~5.9:1 sobre papel)
  mutD: '#C9D0B6', // crema verdoso sólido (~5.4:1 sobre musgo)
  lineC: 'rgba(28,34,27,0.16)',
  lineD: 'rgba(245,241,230,0.22)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-japones-concepcion',
  title: 'Jardín Japonés Concepción · Vivero y floristería en San Pedro de la Paz',
  description:
    'Vivero y floristería en San Pedro de la Paz: flores de temporada, plantas de interior en agua, arbustos, árboles y frutales, y cumpleaños infantiles en el jardín. 4,4 en Google. Consulta por WhatsApp.',
  image: `${IMG}/invernadero.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#vivero' },
  { label: 'Para tu casa', href: '#interior' },
  { label: 'Cumpleaños', href: '#cumpleanos' },
  { label: 'Cómo llegar', href: '#visita' },
]

/** Ondas en el agua: círculos concéntricos finos, fondo de secciones y viñetas. */
function Ondas({
  className = '',
  color = C.hoja,
  opacity = 0.4,
  rings = [22, 40, 60, 82, 106],
}: {
  className?: string
  color?: string
  opacity?: number
  rings?: number[]
}) {
  return (
    <svg viewBox="0 0 240 240" className={className} fill="none" aria-hidden="true">
      {rings.map((r) => (
        <circle key={r} cx="120" cy="120" r={r} stroke={color} strokeOpacity={opacity} strokeWidth="1.3" />
      ))}
      <circle cx="120" cy="120" r="2.6" fill={color} fillOpacity={opacity} />
    </svg>
  )
}

/** Rótulo de sección: versalita con una mini onda de tres anillos. */
function Rotulo({
  children,
  light = false,
  rosa = false,
  center = false,
}: {
  children: React.ReactNode
  light?: boolean
  rosa?: boolean
  center?: boolean
}) {
  // El icono conserva el acento; el texto usa el tono que pasa contraste.
  const icono = rosa ? C.rosa : light ? C.hoja : C.musgo
  const color = rosa ? C.rosaInk : light ? C.mutD : C.musgo
  return (
    <p
      className={`flex items-center gap-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.32em] mb-5 ${center ? 'justify-center' : ''}`}
      style={{ color }}
    >
      <svg viewBox="0 0 18 18" className="w-[14px] h-[14px] shrink-0" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="8" stroke={icono} strokeWidth="1.3" />
        <circle cx="9" cy="9" r="4.4" stroke={icono} strokeWidth="1.3" />
        <circle cx="9" cy="9" r="1.5" fill={icono} />
      </svg>
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
}: {
  children: React.ReactNode
  href?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="jjc-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full text-sm font-bold tap-44"
      style={{ backgroundColor: C.musgo, color: C.papel }}
    >
      <WaIcon />
      {children}
    </a>
  )
}

const PASOS = [
  {
    n: '01',
    name: 'El pasillo entre palmeras',
    desc: 'Un corredor de verde que se interna en el vivero.',
    src: `${IMG}/sendero.webp`,
    w: 1200,
    h: 675,
    alt: 'Pasillo de ripio entre plantas verdes y palmeras dentro del vivero',
    from: 'bl' as const,
    col: 'md:col-span-5',
  },
  {
    n: '02',
    name: 'Los domos al atardecer',
    desc: 'Los invernaderos se ven completos desde la entrada.',
    src: `${IMG}/domos.webp`,
    w: 1200,
    h: 675,
    alt: 'Domos de invernadero y letrero del vivero al atardecer',
    from: 'tr' as const,
    col: 'md:col-span-4 md:mt-16',
  },
  {
    n: '03',
    name: 'Las flores de temporada',
    desc: 'Hileras de flores en maceta, listas para llevar.',
    src: `${IMG}/invernadero.webp`,
    w: 1200,
    h: 900,
    alt: 'Hileras de flores rojas y rosadas dentro del invernadero',
    from: 'br' as const,
    col: 'md:col-span-3 md:mt-32',
  },
]

const CUMPLE_QUOTES = [REVIEWS[1], REVIEWS[2]]

export default function JardinJaponesPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        /* Una gota cae al centro de la foto-estanque: rosa, como el
           botón de rododendro que cae al agua. */
        @keyframes jjc-gota {
          0% { opacity: 0; transform: translate(-50%, -260px) scale(0.6) }
          18% { opacity: 1 }
          82% { opacity: 1; transform: translate(-50%, 0) scale(1) }
          100% { opacity: 0; transform: translate(-50%, 0) scale(1.7, 0.45) }
        }
        .jjc-gota { animation: jjc-gota 0.75s cubic-bezier(0.4, 0, 0.7, 1) 0.45s both }

        /* Tres ondas concéntricas se expanden desde donde cayó la gota. */
        @keyframes jjc-onda {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.06) }
          14% { opacity: 0.85 }
          100% { opacity: 0; transform: translate(-50%, -50%) scale(1) }
        }
        .jjc-onda { animation: jjc-onda 1.5s cubic-bezier(0.2, 0.6, 0.3, 1) both }

        /* La última onda abre la foto: el círculo crece hasta cubrirla. */
        @keyframes jjc-foto {
          from { clip-path: circle(0% at 50% 44%) }
          to { clip-path: circle(142% at 50% 44%) }
        }
        .jjc-foto { animation: jjc-foto 1.3s cubic-bezier(0.45, 0.05, 0.25, 1) 1.12s both }

        /* El titular y el resto aparecen con un leve ascenso. */
        @keyframes jjc-sube {
          from { opacity: 0; transform: translateY(18px) }
          to { opacity: 1; transform: none }
        }
        .jjc-sube { animation: jjc-sube 0.9s cubic-bezier(0.22, 0.68, 0.26, 1) both; animation-delay: var(--jjc-d, 0s) }

        .jjc-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .jjc-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .jjc-btn:active { transform: scale(0.97) }
        .jjc-page a:focus-visible { outline: 3px solid ${C.rosa}; outline-offset: 3px }
        .jjc-page a:focus:not(:focus-visible) { outline: none }
        .jjc-pasos { scrollbar-width: none; }
        .jjc-pasos::-webkit-scrollbar { display: none }

        @media (prefers-reduced-motion: reduce) {
          .jjc-gota, .jjc-onda { display: none !important }
          .jjc-foto { animation: none !important; clip-path: none !important }
          .jjc-sube { animation: none !important }
          .jjc-btn { transition: none !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="tracking-[0.01em]">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Escríbenos"
        theme={{
          over: 'light',
          bar: 'rgba(245,241,230,0.94)',
          ink: C.tinta,
          line: C.lineC,
          btnBg: C.musgo,
          btnInk: C.papel,
        }}
      />

      <div className="jjc-page">
        {/* ── 1 · Portada: una gota en el agua ── */}
        <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.papel }}>
          <Ondas
            className="absolute -top-28 -right-28 w-[300px] h-[300px] md:w-[430px] md:h-[430px] pointer-events-none"
            color={C.musgo}
            opacity={0.09}
          />
          <Ondas
            className="absolute top-[34%] -left-32 w-[260px] h-[260px] md:w-[360px] md:h-[360px] pointer-events-none"
            color={C.hoja}
            opacity={0.12}
          />

          <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[104px] md:pt-[128px]">
            <p
              className="jjc-sube flex items-center justify-center gap-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.34em]"
              style={{ color: C.musgo, '--jjc-d': '0.15s' } as CSSProperties}
            >
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.rosa }} aria-hidden="true" />
              San Pedro de la Paz · Gran Concepción
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: C.rosa }} aria-hidden="true" />
            </p>

            <h1
              className={`${display.className} jjc-sube text-center leading-[1.04] text-[clamp(2.55rem,10vw,5.4rem)] mt-6 md:mt-8`}
              style={{ color: C.tinta, '--jjc-d': '1.25s' } as CSSProperties}
            >
              Un jardín para
              <br />
              recorrer <em style={{ color: C.rosa }}>con calma</em>.
            </h1>

            <p
              className="jjc-sube mx-auto mt-5 md:mt-6 max-w-md md:max-w-xl text-center text-[15px] md:text-lg leading-relaxed"
              style={{ color: C.mutC, '--jjc-d': '1.65s' } as CSSProperties}
            >
              Flores de temporada, plantas de interior, arbustos y árboles,
              con atención amable.
            </p>

            <div
              className="jjc-sube mt-7 md:mt-8 flex flex-col items-center gap-4"
              style={{ '--jjc-d': '1.8s' } as CSSProperties}
            >
              <BtnWa>Escríbenos por WhatsApp</BtnWa>
              <p className="flex items-center gap-2.5 text-sm" style={{ color: C.mutC }}>
                <Stars value={BIZ.ratingValue} color={C.rosa} size={15} />
                <span>
                  <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.rating}</strong>
                  {' '}· {BIZ.reviews} opiniones en Google
                </span>
              </p>
            </div>

            {/* la foto-estanque: la gota cae a su centro y las ondas la abren */}
            <div className="relative mt-11 md:mt-16 pb-10 md:pb-14">
              <Ondas
                className="absolute left-1/2 top-[40%] w-[min(92vw,640px)] h-auto -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                color={C.musgo}
                opacity={0.13}
                rings={[26, 48, 74, 104]}
              />
              <div className="relative">
                <div className="jjc-foto relative aspect-[4/3] md:aspect-[21/9] rounded-2xl md:rounded-[2.25rem] overflow-hidden">
                  <Image
                    src={`${IMG}/invernadero.webp`}
                    alt="Invernadero con pasillo central de ripio e hileras de flores rojas, rosadas y naranjas"
                    fill
                    priority
                    sizes="(min-width: 1152px) 1152px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 46%' }}
                  />
                </div>
                <span
                  className="absolute inset-0 rounded-2xl md:rounded-[2.25rem] pointer-events-none"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(28,34,27,0.16)' }}
                  aria-hidden="true"
                />
              </div>
              <span
                className="jjc-gota absolute left-1/2 top-[44%] w-3 h-3 rounded-full"
                style={{ backgroundColor: C.rosa }}
                aria-hidden="true"
              />
              {[1.05, 1.28, 1.5].map((d) => (
                <span
                  key={d}
                  className="jjc-onda absolute left-1/2 top-[44%] w-[min(88vw,560px)] aspect-square rounded-full"
                  style={{ border: '2px solid rgba(127,175,90,0.7)', animationDelay: `${d}s` }}
                  aria-hidden="true"
                />
              ))}
            </div>
          </div>
        </section>

        {/* ── 2 · El recorrido: tres paradas ── */}
        <section id="vivero" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-14 md:pt-20 pb-16 md:pb-20">
            <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-end mb-9 md:mb-14">
              <Reveal className="md:col-span-7">
                <Rotulo>El recorrido</Rotulo>
                <h2
                  className={`${display.className} leading-[1.06] text-[clamp(1.9rem,7vw,3.7rem)]`}
                  style={{ color: C.tinta }}
                >
                  Tres paradas,
                  <br />
                  <em>un solo paso lento.</em>
                </h2>
              </Reveal>
              <Reveal delay={120} className="md:col-span-5">
                <p className="text-sm md:text-base leading-relaxed md:pb-2" style={{ color: C.mutC }}>
                  El vivero se conoce caminando: se entra, se mira con
                  calma y se pregunta. Esto es lo que el paseo muestra.
                </p>
              </Reveal>
            </div>

            {/* paseo: en móvil un carril con snap; en escritorio, piedras escalonadas */}
            <div className="jjc-pasos -mx-5 px-5 md:mx-0 md:px-0 flex gap-6 overflow-x-auto snap-x snap-mandatory pb-3 md:pb-0 md:grid md:grid-cols-12 md:gap-x-10 md:overflow-visible">
              {PASOS.map((p) => (
                <figure key={p.n} className={`w-[76%] shrink-0 snap-start md:w-auto ${p.col}`}>
                  <RevealCirculo from={p.from} className="rounded-xl overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      width={p.w}
                      height={p.h}
                      loading="eager"
                      className="w-full h-auto object-cover"
                    />
                  </RevealCirculo>
                  <figcaption className="mt-4 flex items-baseline gap-3.5">
                    <span
                      className={`${display.className} leading-none text-[1.9rem] md:text-[2.2rem] shrink-0`}
                      style={{ color: C.musgo }}
                      aria-hidden="true"
                    >
                      {p.n}
                    </span>
                    <span>
                      <span className={`${display.className} block text-lg md:text-xl leading-tight`} style={{ color: C.tinta }}>
                        {p.name}
                      </span>
                      <span className="block text-[13px] md:text-sm leading-relaxed mt-1" style={{ color: C.mutC }}>
                        {p.desc}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* ── 3 · Para tu casa: plantas de interior en agua ── */}
        <section id="interior" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.musgo }}>
          <Ondas
            className="absolute -bottom-24 -left-24 w-[340px] h-[340px] md:w-[480px] md:h-[480px] pointer-events-none"
            color={C.hoja}
            opacity={0.14}
          />
          <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16 items-center">
              <div>
                <Reveal>
                  <Rotulo light>Para tu casa</Rotulo>
                  <h2
                    className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.6vw,3.5rem)] mb-5`}
                    style={{ color: C.papel }}
                  >
                    Verde que vive
                    <br />
                    <em>en agua.</em>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.mutD }}>
                    Plantas de interior, también en floreros de vidrio con
                    piedras: crecen en agua y se les ven las raíces.
                  </p>
                  <ul className="space-y-3 text-sm md:text-[15px]">
                    {[
                      'Plantas de interior para living, cocina o escritorio',
                      'Plantas en agua, en vidrio y piedras',
                      'Atención con paciencia para elegir bien',
                    ].map((t) => (
                      <li key={t} className="flex items-baseline gap-3" style={{ color: C.papel }}>
                        <svg viewBox="0 0 14 14" className="w-[12px] h-[12px] shrink-0 translate-y-[1px]" fill="none" aria-hidden="true">
                          <circle cx="7" cy="7" r="6" stroke={C.hoja} strokeWidth="1.4" />
                          <circle cx="7" cy="7" r="2.4" stroke={C.hoja} strokeWidth="1.4" />
                        </svg>
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <BtnWa>Pregunta por una planta</BtnWa>
                  </div>
                </Reveal>
              </div>

              <div className="relative">
                <RevealCirculo from="tl" className="w-[70%] rounded-xl overflow-hidden">
                  <Image
                    src={`${IMG}/plantas-agua.webp`}
                    alt="Planta de interior en florero de vidrio alto con piedras blancas"
                    width={900}
                    height={1200}
                    className="w-full h-auto object-cover"
                  />
                </RevealCirculo>
                <RevealCirculo
                  from="br"
                  delay={140}
                  className="w-[48%] ml-auto -mt-[15%] rounded-xl overflow-hidden"
                >
                  <Image
                    src={`${IMG}/plantas-mesa.webp`}
                    alt="Mesa de vidrio con varias plantas en floreros con piedras"
                    width={900}
                    height={1200}
                    className="w-full h-auto object-cover"
                    style={{ boxShadow: `0 0 0 4px ${C.musgo}` }}
                  />
                </RevealCirculo>
                <figure className="absolute right-[3%] top-[5%] w-[30%] aspect-square" aria-hidden="false">
                  <div
                    className="w-full h-full rounded-full overflow-hidden"
                    style={{ boxShadow: `0 0 0 1.5px ${C.hoja}, 0 0 0 9px ${C.musgo}` }}
                  >
                    <Image
                      src={`${IMG}/flor.webp`}
                      alt="Botón rosado de rododendro entre hojas verdes"
                      width={900}
                      height={1200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4 · Arbustos y árboles ── */}
        <section id="arbustos" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-center">
              <RevealCirculo from="bl" className="rounded-xl overflow-hidden max-w-[400px]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={`${IMG}/entrada.webp`}
                    alt="Entrada del vivero con los letreros Arbustos y Árboles y los domos de invernadero detrás"
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 22%' }}
                  />
                </div>
              </RevealCirculo>
              <div>
                <Reveal>
                  <Rotulo>Desde la entrada</Rotulo>
                  <h2
                    className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.6vw,3.4rem)] mb-5`}
                    style={{ color: C.tinta }}
                  >
                    Los letreros se leen
                    <br />
                    <em>desde la entrada.</em>
                  </h2>
                </Reveal>
                <Reveal delay={120}>
                  <p className="text-sm md:text-base leading-relaxed mb-7 max-w-md" style={{ color: C.mutC }}>
                    Arbustos, árboles y también frutales:
                    la entrada misma los anuncia.
                  </p>
                  <ul className="mb-8 divide-y" style={{ borderColor: C.lineC }}>
                    {[
                      ['Arbustos', 'Letrero de la entrada'],
                      ['Árboles', 'Letrero de la entrada'],
                      ['Frutales', 'Arbustos frutales'],
                    ].map(([k, v]) => (
                      <li key={k} className="flex items-baseline gap-4 py-3.5" style={{ borderColor: 'inherit' }}>
                        <span className={`${display.className} text-xl md:text-2xl w-24 shrink-0`} style={{ color: C.musgo }}>
                          {k}
                        </span>
                        <span className="text-sm md:text-[15px]" style={{ color: C.mutC }}>
                          {v}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                    style={{ color: C.musgo, textDecorationColor: C.hoja }}
                  >
                    Consulta qué hay disponible
                    <span aria-hidden="true">→</span>
                  </a>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5 · Cumpleaños en el jardín ── */}
        <section id="cumpleanos" className="scroll-mt-20" style={{ backgroundColor: C.papel2 }}>
          <div className="pt-14 md:pt-20 pb-14 md:pb-20">
            <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
              <Reveal>
                <Rotulo rosa center>Cumpleaños en el jardín</Rotulo>
                <h2
                  className={`${display.className} leading-[1.08] text-[clamp(1.9rem,7vw,3.6rem)]`}
                  style={{ color: C.tinta }}
                >
                  Un cumpleaños
                  <br />
                  <em>en el jardín.</em>
                </h2>
                <p className="mx-auto mt-5 max-w-md md:max-w-xl text-sm md:text-base leading-relaxed" style={{ color: C.mutC }}>
                  A un costado del sector de plantas hay una carpa para
                  celebrar cumpleaños infantiles.
                </p>
              </Reveal>
            </div>

            <RevealCirculo from="bl" className="mt-9 md:mt-12">
              <Image
                src={`${IMG}/jardin-lago.webp`}
                alt="Jardín con pasto y árboles junto al agua"
                width={1200}
                height={540}
                className="w-full object-cover h-[240px] md:h-auto"
                style={{ objectPosition: '50% 60%' }}
              />
            </RevealCirculo>

            <div className="max-w-4xl mx-auto px-5 md:px-8 mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-10">
              {CUMPLE_QUOTES.map((r, i) => (
                <Reveal key={r.author} delay={i * 110}>
                  <figure className="border-l-2 pl-5 md:pl-6" style={{ borderColor: C.rosa }}>
                    <blockquote
                      className={`${display.className} italic text-[1.1rem] md:text-xl leading-snug`}
                      style={{ color: C.tinta }}
                    >
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: C.mutC }}>
                      {r.author} · {r.fuente}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <div className="mt-10 md:mt-12 flex flex-col items-center gap-3 px-5">
                <BtnWa href={WA_CUMPLE}>Consultar disponibilidad</BtnWa>
                <p className="text-xs md:text-sm text-center" style={{ color: C.mutC }}>
                  Celebra un cumpleaños en el jardín: consulta disponibilidad
                  por WhatsApp.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6 · Opiniones ── */}
        <section id="opiniones" className="scroll-mt-20 relative overflow-hidden" style={{ backgroundColor: C.papel }}>
          <Ondas
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(110vw,700px)] h-auto pointer-events-none"
            color={C.musgo}
            opacity={0.1}
            rings={[30, 56, 86, 118]}
          />
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
            <Reveal>
              <Rotulo center>Opiniones</Rotulo>
              <blockquote
                className={`${display.className} italic text-[clamp(1.35rem,5.4vw,2.5rem)] leading-[1.3] mx-auto max-w-3xl`}
                style={{ color: C.tinta }}
              >
                “{REVIEWS[0].text}”
              </blockquote>
              <p className="mt-5 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em]" style={{ color: C.mutC }}>
                {REVIEWS[0].author} · {REVIEWS[0].fuente}
              </p>
            </Reveal>
            <Reveal delay={140}>
              <div className="mt-9 flex flex-col items-center gap-3">
                <Stars value={BIZ.ratingValue} color={C.rosa} size={20} />
                <p className="text-sm" style={{ color: C.mutC }}>
                  <strong className="font-bold" style={{ color: C.tinta }}>{BIZ.rating}</strong>
                  {' '}· {BIZ.reviews} opiniones en su ficha de Google
                </p>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                  style={{ color: C.musgo, textDecorationColor: C.hoja }}
                >
                  Ver la ficha en Google
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 7 · Horario y cómo llegar ── */}
        <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24">
            <div
              className="border-t pt-14 md:pt-20 grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-stretch"
              style={{ borderColor: C.lineC }}
            >
              <div>
                <Reveal>
                  <Rotulo>Cómo llegar</Rotulo>
                  <h2
                    className={`${display.className} leading-[1.08] text-[clamp(1.9rem,6.6vw,3.2rem)] mb-7`}
                    style={{ color: C.tinta }}
                  >
                    En Ernesto Pinto
                    <br />
                    <em>Lagarrigue.</em>
                  </h2>
                </Reveal>
                <Reveal delay={110}>
                  <dl className="space-y-4 mb-8 text-sm md:text-[15px]">
                    <div className="flex gap-4">
                      <dt className="w-[86px] shrink-0 font-bold" style={{ color: C.musgo }}>
                        Dirección
                      </dt>
                      <dd style={{ color: C.tinta }}>
                        {BIZ.address}, {BIZ.city}
                      </dd>
                    </div>
                    {HORARIO.map((h) => (
                      <div key={h.d} className="flex gap-4">
                        <dt className="w-[86px] shrink-0 font-bold" style={{ color: C.musgo }}>
                          {h.d}
                        </dt>
                        <dd style={{ color: C.tinta }}>{h.h}</dd>
                      </div>
                    ))}
                    <div className="flex gap-4">
                      <dt className="w-[86px] shrink-0 font-bold" style={{ color: C.musgo }}>
                        WhatsApp
                      </dt>
                      <dd>
                        <a
                          href={WA_LINK}
                          className="font-semibold underline underline-offset-4 decoration-1 tap-44"
                          style={{ color: C.tinta, textDecorationColor: C.hoja }}
                        >
                          {BIZ.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="flex flex-wrap items-center gap-4">
                    <BtnWa>Escríbenos por WhatsApp</BtnWa>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold underline underline-offset-4 decoration-2 tap-44 transition-opacity hover:opacity-70"
                      style={{ color: C.musgo, textDecorationColor: C.hoja }}
                    >
                      Cómo llegar
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </Reveal>
              </div>
              <Reveal delay={140} className="min-h-[300px]">
                <div
                  className="overflow-hidden rounded-xl h-full min-h-[300px] md:min-h-[400px]"
                  style={{ border: `1.5px solid ${C.lineC}`, backgroundColor: C.papel2 }}
                >
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="w-full h-full min-h-[300px] md:min-h-[400px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 8 · Footer ── */}
        <footer style={{ backgroundColor: C.musgoBajo, color: C.papel }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
            <p className={`${display.className} text-xl leading-none`} style={{ color: C.papel }}>
              {BIZ.name}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: C.mutD }}>
              {BIZ.rubro} · {BIZ.city}, {BIZ.region} ·{' '}
              <a href={WA_LINK} className="underline underline-offset-2 whitespace-nowrap tap-44">
                {BIZ.phoneDisplay}
              </a>
            </p>
          </div>
          <div className="border-t" style={{ borderColor: C.lineD }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-6 text-xs leading-relaxed" style={{ color: C.mutD }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.hoja }}>
                Sitiazo
              </a>{' '}
              para {BIZ.name}. Datos, fotos, opiniones y horarios son reales y
              públicos del negocio; los textos de apoyo son de muestra.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-2 tap-44" style={{ color: C.hoja }}>
                ¿Lo hacemos realidad?
              </a>
            </p>
          </div>
        </footer>
      </div>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
