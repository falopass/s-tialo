import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, OPINIONES, IMG } from './content'
import Contador from './contador'

const display = localFont({
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/barlow/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600', style: 'normal' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/* Identidad: el muro a cuadros blanco y negro del local (se ve en la foto
 * de los dueños) y el rojo de la capa de barbero. Tinta cálida casi negra,
 * papel hueso y un solo acento rojo; tipografía de letrero (Anton) con
 * datos en Space Mono, como ticket de reserva. */
const C = {
  ink: '#16130F',
  coal: '#221D16',
  paper: '#F4EFE5',
  paperSoft: '#E9E1D2',
  rojo: '#B92A1D',
  rojoBright: '#E04B3A',
  rojoTxt: '#E8563F',
  muted: '#6E6153',
  mutedLight: 'rgba(244,239,229,0.72)',
  line: 'rgba(22,19,15,0.16)',
  lineLight: 'rgba(244,239,229,0.2)',
}

const FOCUS =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#B92A1D]'

export const metadata: Metadata = demoMetadata({
  slug: 'peluqueria-barberia-byc-puerto-montt',
  title: 'Peluquería y Barbería B&C · Puerto Montt',
  description:
    'Peluquería y barbería en Las Loicas 2134, esquina Vicuña Mackenna, junto al parque, Puerto Montt. Fades, cortes clásicos, alisados y color. Reserva tu hora por WhatsApp.',
  image: `${IMG}/local-duenos.webp`,
})

const NAV_LINKS = [
  { label: 'El oficio', href: '#oficio' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'El salón', href: '#salon' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** La tira de fotos tipo carrete: trabajo real del salón desfilando. */
const CARRETE = [
  { src: 'barbero-trabajando', alt: 'Barbero cortando con máquina a un cliente con la capa del salón' },
  { src: 'fade-frontal', alt: 'Corte con degradado bajo terminado, capa negra' },
  { src: 'alisado-platinado', alt: 'Cabello largo liso en tono platinado' },
  { src: 'ondas-mechas', alt: 'Melena con ondas y mechas castañas' },
  { src: 'equipo', alt: 'El equipo del salón de pie en el local' },
  { src: 'corte-pinzas', alt: 'Corte en proceso con pinzas y raya marcada' },
  { src: 'degradado-nuca', alt: 'Detalle de degradado en la nuca' },
] as const

const BARBERIA = {
  titulo: 'Fade, raya y clásico',
  bajada: 'De la máquina al acabado: cortes con degradado, raya marcada y el clásico de siempre, con la prolijidad que se nota al salir a la calle.',
  items: ['Cortes con degradado', 'Raya marcada', 'Corte clásico'],
  fotos: [
    { src: 'fade-frontal', alt: 'Corte con degradado bajo visto de lado' },
    { src: 'degradado-nuca', alt: 'Degradado terminado en la nuca' },
  ],
}

const PELUQUERIA = {
  titulo: 'Liso platinado, ondas y mechas',
  bajada: 'El otro lado del salón: alisados, tonos platinados, ondas y mechas, para hombres y mujeres que llegan con una idea y salen con ella puesta.',
  items: ['Alisados', 'Tonos platinados', 'Ondas y mechas'],
  fotos: [
    { src: 'alisado-platinado', alt: 'Resultado de alisado en tono platinado' },
    { src: 'ondas-mechas', alt: 'Ondas con mechas castañas terminadas' },
  ],
}

const DATOS_SALON = [
  { t: 'Dirección', d: `${BIZ.addressFull}, ${BIZ.city}` },
  { t: 'Referencia', d: `Junto al parque, ${BIZ.city}` },
  { t: 'Horario', d: BIZ.horarioSemana },
  { t: 'Domingo', d: 'Cerrado' },
]

/** Franja de damero: el muro a cuadros del local convertido en divisor. */
function Damero({ invertido = false }: { invertido?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className="h-[26px] w-full"
      style={{
        backgroundImage: `repeating-conic-gradient(${
          invertido ? C.paper : C.ink
        } 0% 25%, ${invertido ? C.ink : C.paper} 0% 50%)`,
        backgroundSize: '26px 26px',
      }}
    />
  )
}

function Rotulo({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em]`}
      style={{ color: light ? 'rgba(244,239,229,0.85)' : C.muted }}
    >
      <span className="inline-block h-[3px] w-7" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
      {children}
    </p>
  )
}

/** La raya del corte: un trazo rojo que se dibuja bajo el titular. */
function Trazo({ className = '', scroll = false }: { className?: string; scroll?: boolean }) {
  return (
    <svg
      viewBox="0 0 240 30"
      preserveAspectRatio="none"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 24 C 52 8, 118 6, 236 16"
        stroke={C.rojo}
        strokeWidth="5"
        strokeLinecap="round"
        pathLength={100}
        vectorEffect="non-scaling-stroke"
        className={scroll ? 'bc-trazo-scroll' : 'bc-trazo'}
      />
    </svg>
  )
}

function WaCta({ label = 'Reservar por WhatsApp', dark = false }: { label?: string; dark?: boolean }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${display.className} inline-flex items-center gap-2.5 px-6 py-3 text-base uppercase tracking-[0.05em] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 active:scale-95 tap-44 ${FOCUS}`}
      style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
    >
      <svg viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
      </svg>
      {label}
    </a>
  )
}

function GhostCta({ href, label, dark = false }: { href: string; label: string; dark?: boolean }) {
  const external = href.startsWith('http')
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} inline-flex items-center px-6 py-3 text-base uppercase tracking-[0.05em] transition duration-200 hover:-translate-y-0.5 active:scale-95 tap-44 ${FOCUS}`}
      style={
        dark
          ? { border: '1.5px solid rgba(244,239,229,0.55)', color: C.paper }
          : { border: `1.5px solid ${C.ink}`, color: C.ink }
      }
    >
      {label}
    </a>
  )
}

/** Fotograma del carrete: agujeros de película arriba y abajo. */
function Agujeros() {
  return (
    <div
      aria-hidden="true"
      className="h-[10px] w-full"
      style={{
        backgroundImage:
          'repeating-linear-gradient(90deg, transparent 0 10px, rgba(244,239,229,0.5) 10px 20px, transparent 20px 32px)',
      }}
    />
  )
}

function Carrete() {
  return (
    <div className="relative" style={{ backgroundColor: '#0C0A08' }} aria-label="Trabajos del salón en fotos">
      <Agujeros />
      <div className="overflow-hidden py-2">
        <div className="bc-rodar flex w-max items-stretch gap-2 px-2">
          {[...CARRETE, ...CARRETE].map((f, i) => (
            <div
              key={i}
              className="relative h-[96px] w-[72px] shrink-0 overflow-hidden md:h-[120px] md:w-[90px]"
              style={{ outline: '1px solid rgba(244,239,229,0.28)' }}
              aria-hidden={i >= CARRETE.length}
            >
              <Image
                src={`${IMG}/${f.src}.webp`}
                alt={i < CARRETE.length ? f.alt : ''}
                aria-hidden={i >= CARRETE.length ? 'true' : undefined}
                fill
                sizes="(min-width: 768px) 90px, 72px"
                className="object-cover"
                loading={i < 4 ? 'eager' : 'lazy'}
              />
            </div>
          ))}
        </div>
      </div>
      <Agujeros />
      <p
        className={`${mono.className} absolute -top-2 left-4 px-2 text-[10px] uppercase tracking-[0.2em]`}
        style={{ backgroundColor: '#0C0A08', color: 'rgba(244,239,229,0.75)' }}
      >
        Trabajo real del salón
      </p>
    </div>
  )
}

export default function PeluqueriaBarberiaByCPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased`} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        /* Titular que entra línea por línea, dentro de máscaras. */
        @keyframes bc-linea { from { transform: translateY(112%) } to { transform: none } }
        .bc-linea { animation: bc-linea 0.9s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Entrada suave de bloques del hero. */
        @keyframes bc-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .bc-sube { animation: bc-sube 0.8s cubic-bezier(0.22,0.61,0.2,1) both }

        /* La raya roja que se dibuja bajo el titular, como un corte a navaja. */
        @keyframes bc-trazo { from { stroke-dashoffset: 100 } to { stroke-dashoffset: 0 } }
        .bc-trazo { stroke-dasharray: 100; animation: bc-trazo 0.9s cubic-bezier(0.4,0,0.2,1) 0.75s both }
        @supports (animation-timeline: view()) {
          .bc-trazo-scroll { stroke-dasharray: 100; animation: bc-trazo linear both; animation-timeline: view(); animation-range: entry 15% entry 90% }
        }

        /* El carrete de fotos desfila sin parar. */
        @keyframes bc-rodar { to { transform: translateX(-50%) } }
        .bc-rodar { animation: bc-rodar 42s linear infinite }

        /* La foto del sillón entra recostada, como espejo de pared. */
        @keyframes bc-espejo { from { opacity: 0; transform: rotate(-4deg) translateY(26px) } to { opacity: 1; transform: rotate(-1.6deg) translateY(0) } }
        .bc-espejo { animation: bc-espejo 1s cubic-bezier(0.22,0.61,0.2,1) 0.55s both }

        /* Las tarjetas de opiniones caen al estante al entrar en pantalla. */
        @keyframes bc-cae { 0% { transform: translateY(-22px) } 65% { transform: translateY(4px) } 100% { transform: translateY(0) } }
        @supports (animation-timeline: view()) {
          .bc-ticket { animation: bc-cae linear both; animation-timeline: view(); animation-range: var(--tr, entry 0% entry 70%) }
        }

        @media (prefers-reduced-motion: reduce) {
          .bc-linea, .bc-sube, .bc-trazo, .bc-trazo-scroll, .bc-rodar, .bc-espejo, .bc-ticket { animation: none !important }
        }
      `}</style>

      <div className="h-0" style={{ backgroundColor: C.ink }}>
        <BlitzNav
          name={
            <>
              {BIZ.short}
            </>
          }
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Reservar"
          theme={{
            over: 'dark',
            bar: 'rgba(22,19,15,0.94)',
            ink: C.paper,
            line: C.lineLight,
            btnBg: C.rojo,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── 1 · Hero: el número que habla solo ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.ink }}>
        {/* cuadrícula tenue del damero, como eco del muro */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(244,239,229,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(244,239,229,0.045) 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-10 pt-24 md:px-8 md:pt-32">
          <div className="grid items-end gap-10 md:grid-cols-[minmax(0,1fr)_330px] lg:grid-cols-[minmax(0,1fr)_380px]">
            <div>
              <p
                className={`${mono.className} bc-sube flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] md:text-[11px] md:tracking-[0.24em]`}
                style={{ color: 'rgba(244,239,229,0.85)', animationDelay: '0.05s' }}
              >
                <span className="inline-block h-[3px] w-7 shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                {BIZ.rubro} · {BIZ.city}
              </p>

              <h1
                className={`${display.className} mt-5 uppercase leading-[0.94] tracking-[0.005em] text-[clamp(2.9rem,12.5vw,6.2rem)]`}
                style={{ color: C.paper }}
                aria-label="127 opiniones no se equivocan"
              >
                <span className="block overflow-hidden pb-1">
                  <span className="bc-linea block" style={{ animationDelay: '0.15s' }}>
                    <span className="sr-only">127</span>
                    <Contador hasta={BIZ.reviews} style={{ color: C.rojoBright }} />
                    <span style={{ color: C.paper }}> opiniones</span>
                  </span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <span className="bc-linea relative inline-block" style={{ animationDelay: '0.32s' }}>
                    <span style={{ color: C.paper }}>no se equivocan.</span>
                    <Trazo className="absolute -bottom-3 left-0 h-[18px] w-full" />
                  </span>
                </span>
              </h1>

              <p
                className="bc-sube mt-7 max-w-md text-base leading-relaxed md:text-lg"
                style={{ color: C.mutedLight, animationDelay: '0.55s' }}
              >
                Peluquería y barbería para hombres y mujeres, junto al parque en
                Las Loicas esquina Vicuña Mackenna. Reserva tu hora por
                WhatsApp: en B&C la cumplen.
              </p>

              <div className="bc-sube mt-8 flex flex-wrap gap-3" style={{ animationDelay: '0.7s' }}>
                <WaCta dark />
                <GhostCta href="#oficio" label="Ver el trabajo" dark />
              </div>

              <dl
                className={`${mono.className} bc-sube mt-9 flex flex-wrap gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.16em]`}
                style={{ color: 'rgba(244,239,229,0.62)', animationDelay: '0.85s' }}
              >
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Dirección</dt>
                  <dd>{BIZ.address} · esq. Vicuña Mackenna</dd>
                </div>
                <div className="flex items-center gap-2">
                  <dt className="sr-only">Horario</dt>
                  <dd>Lun a sáb · 10:00 a 20:00</dd>
                </div>
                <div>
                  <dt className="sr-only">Opiniones</dt>
                  <dd>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`underline decoration-2 underline-offset-4 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
                      style={{ color: C.rojoTxt, textDecorationColor: 'rgba(232,86,63,0.55)' }}
                    >
                      127 opiniones en Google →
                    </a>
                  </dd>
                </div>
              </dl>
            </div>

            {/* El espejo del salón: el dueño en su sillón, enmarcado en damero */}
            <figure className="bc-espejo relative mx-auto hidden w-full max-w-[330px] md:block">
              <div className="h-[13px] w-full" aria-hidden="true" style={{ backgroundImage: `repeating-conic-gradient(${C.paper} 0% 25%, ${C.ink} 0% 50%)`, backgroundSize: '26px 13px' }} />
              <div className="relative aspect-[3/4] overflow-hidden" style={{ outline: `1.5px solid ${C.paper}` }}>
                <Image
                  src={`${IMG}/sillon-barbero.webp`}
                  alt="El sillón de barbero del salón, con uno de los dueños sentado"
                  fill
                  priority
                  sizes="(min-width: 1024px) 380px, 330px"
                  className="object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
              </div>
              <figcaption
                className={`${mono.className} absolute -bottom-4 left-4 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em]`}
                style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
              >
                El sillón espera
              </figcaption>
            </figure>
          </div>
        </div>

        {/* El carrete del salón: fotos reales desfilando */}
        <div className="bc-sube relative" style={{ animationDelay: '0.95s' }}>
          <Carrete />
        </div>
      </section>

      {/* ── 2 · Dos oficios, un mismo salón ── */}
      <section id="oficio" className="scroll-mt-20">
        <Damero />
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Reveal>
            <Rotulo>El oficio</Rotulo>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.2rem,7vw,4rem)]`}>
                De la máquina a las mechas,
                <br />
                <span className="relative inline-block" style={{ color: C.rojo }}>
                  un mismo criterio.
                  <Trazo scroll className="absolute -bottom-2 left-0 h-[12px] w-full" />
                </span>
              </h2>
              <p className="max-w-sm text-sm leading-relaxed" style={{ color: C.muted }}>
                Dos oficios bajo un mismo techo: lo que se ve en las fotos es
                lo que sale del sillón.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Barbería: panel negro */}
        <article style={{ backgroundColor: C.ink }}>
          <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-5 py-14 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:px-8 md:py-20">
            <div className="flex flex-col justify-center">
              <Reveal>
                <Rotulo light>Barbería</Rotulo>
                <h3 className={`${display.className} mt-4 uppercase leading-[1] text-[clamp(1.9rem,5.5vw,3.1rem)]`} style={{ color: C.paper }}>
                  {BARBERIA.titulo}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.mutedLight }}>
                  {BARBERIA.bajada}
                </p>
                <ul className="mt-6 space-y-3">
                  {BARBERIA.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm md:text-[15px]" style={{ color: 'rgba(244,239,229,0.9)' }}>
                      <span className="h-[3px] w-4 shrink-0" style={{ backgroundColor: C.rojoBright }} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} mt-7 inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.18em] underline decoration-2 underline-offset-8 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
                  style={{ color: C.rojoTxt, textDecorationColor: 'rgba(232,86,63,0.5)' }}
                >
                  Reservar por WhatsApp →
                </a>
              </Reveal>
            </div>
            <div className="relative">
              <Reveal delay={120}>
                <div className="grid grid-cols-[1.12fr_0.88fr] items-start gap-3 md:gap-4">
                  <div className="relative aspect-[3/4] overflow-hidden" style={{ outline: '1.5px solid rgba(244,239,229,0.3)' }}>
                    <Image src={`${IMG}/${BARBERIA.fotos[0].src}.webp`} alt={BARBERIA.fotos[0].alt} fill sizes="(min-width: 768px) 30vw, 52vw" className="object-cover" loading="lazy" />
                  </div>
                  <div className="flex flex-col gap-3 pt-4 md:gap-4 md:pt-7">
                    <div className="relative aspect-[4/5] overflow-hidden" style={{ outline: '1.5px solid rgba(244,239,229,0.3)' }}>
                      <Image src={`${IMG}/${BARBERIA.fotos[1].src}.webp`} alt={BARBERIA.fotos[1].alt} fill sizes="(min-width: 768px) 22vw, 40vw" className="object-cover" loading="lazy" />
                    </div>
                    {/* la raya y el fade, en tarjeta chica con su capa roja */}
                    <figure className="relative" style={{ transform: 'rotate(2.2deg)' }}>
                      <div className="relative aspect-[4/5] overflow-hidden" style={{ outline: '2px solid rgba(244,239,229,0.85)', boxShadow: '0 12px 26px rgba(0,0,0,0.4)' }}>
                        <Image src={`${IMG}/fade-lateral.webp`} alt="Corte con raya marcada y degradado, con la capa roja del salón" fill sizes="(min-width: 768px) 22vw, 40vw" className="object-cover" loading="lazy" />
                      </div>
                      <figcaption
                        className={`${mono.className} absolute -top-2.5 right-2 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em]`}
                        style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}
                      >
                        raya + fade
                      </figcaption>
                    </figure>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </article>

        {/* Peluquería: panel claro */}
        <article style={{ backgroundColor: C.paperSoft }}>
          <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)] gap-10 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-14 md:px-8 md:py-20">
            <div className="relative order-2 md:order-1">
              <Reveal delay={120}>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {PELUQUERIA.fotos.map((f, i) => (
                    <div
                      key={f.src}
                      className="relative aspect-[3/4] overflow-hidden"
                      style={{ outline: '1.5px solid rgba(22,19,15,0.35)', transform: `translateY(${i * 22}px)` }}
                    >
                      <Image src={`${IMG}/${f.src}.webp`} alt={f.alt} fill sizes="(min-width: 768px) 28vw, 45vw" className="object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
                <div
                  className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-4 py-2"
                  style={{ backgroundColor: C.ink, transform: 'translateX(-50%) rotate(-2deg)' }}
                >
                  <p className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.paper }}>
                    color y forma
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="order-1 flex flex-col justify-center md:order-2">
              <Reveal>
                <Rotulo>Peluquería</Rotulo>
                <h3 className={`${display.className} mt-4 uppercase leading-[1] text-[clamp(1.9rem,5.5vw,3.1rem)]`}>
                  {PELUQUERIA.titulo}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.muted }}>
                  {PELUQUERIA.bajada}
                </p>
                <ul className="mt-6 space-y-3">
                  {PELUQUERIA.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-sm md:text-[15px]">
                      <span className="h-[3px] w-4 shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${mono.className} mt-7 inline-flex items-center gap-2 self-start text-xs font-bold uppercase tracking-[0.18em] underline decoration-2 underline-offset-8 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
                  style={{ color: C.rojo, textDecorationColor: 'rgba(185,42,29,0.5)' }}
                >
                  Reservar por WhatsApp →
                </a>
              </Reveal>
            </div>
          </div>
        </article>
      </section>

      {/* ── 3 · Las 127 opiniones ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.ink }}>
        <Damero invertido />
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <Reveal>
            <Rotulo light>Opiniones de Google</Rotulo>
            <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
              <h2 className={`${display.className} uppercase leading-[0.98] text-[clamp(2.2rem,7vw,4rem)]`} style={{ color: C.paper }}>
                «Cumplen la hora.
                <br />
                Ordenado y limpio.»
              </h2>
              <p className={`${mono.className} max-w-xs text-xs leading-relaxed`} style={{ color: 'rgba(244,239,229,0.68)' }}>
                Textual, de la ficha del salón en Google: {BIZ.reviews} opiniones publicadas.
              </p>
            </div>
          </Reveal>

          <ul className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-5 md:grid-cols-3 md:gap-6">
            {OPINIONES.map((o, i) => (
              <li key={o.author} className="bc-ticket" style={{ '--tr': `entry ${i * 8}% entry 70%`, color: C.paper } as CSSProperties}>
                <blockquote
                  className="flex h-full flex-col p-6"
                  style={{ backgroundColor: C.paper, color: C.ink, transform: `rotate(${i === 1 ? 1.1 : -0.8}deg)` }}
                >
                  <span className={`${display.className} text-4xl leading-none`} style={{ color: C.rojo }} aria-hidden="true">
                    «
                  </span>
                  <p className="mt-2 flex-1 text-[15px] leading-relaxed" style={{ color: C.ink }}>
                    {o.text}
                  </p>
                  <footer className={`${mono.className} mt-5 flex items-center justify-between border-t pt-3 text-[11px] font-bold uppercase tracking-[0.16em]`} style={{ borderColor: C.line, color: C.muted }}>
                    <cite className="not-italic">{o.author}</cite>
                    <span style={{ color: C.rojo }}>Google</span>
                  </footer>
                </blockquote>
              </li>
            ))}
          </ul>

          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] underline decoration-2 underline-offset-8 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
                style={{ color: C.rojoTxt, textDecorationColor: 'rgba(232,86,63,0.5)' }}
              >
                Leer las {BIZ.reviews} opiniones en Google →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · El salón: el muro a cuadros y su gente ── */}
      <section id="salon" className="scroll-mt-20" style={{ backgroundColor: C.paper }}>
        <Damero />
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            {/* composición: el muro a cuadros grande + equipo superpuesto */}
            <div className="relative">
              <Reveal>
                <div className="relative aspect-[4/5] overflow-hidden" style={{ outline: `1.5px solid ${C.ink}` }}>
                  <Image
                    src={`${IMG}/local-duenos.webp`}
                    alt="Los dueños del salón frente al muro a cuadros con el logo de B&C"
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              </Reveal>
              <Reveal delay={140}>
                <figure
                  className="absolute -bottom-8 right-3 w-[46%] md:-right-6 md:w-[52%]"
                  style={{ transform: 'rotate(2.4deg)' }}
                >
                  <div className="relative aspect-[3/4] overflow-hidden" style={{ outline: '2px solid #FFFFFF', boxShadow: '0 16px 34px rgba(22,19,15,0.35)' }}>
                    <Image
                      src={`${IMG}/equipo.webp`}
                      alt="El equipo del salón con camisa blanca del local"
                      fill
                      sizes="(min-width: 768px) 24vw, 46vw"
                      className="object-cover"
                      loading="lazy"
                      style={{ objectPosition: '50% 22%' }}
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} absolute -top-3 left-3 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em]`}
                    style={{ backgroundColor: C.ink, color: C.paper }}
                  >
                    el equipo
                  </figcaption>
                </figure>
              </Reveal>
            </div>

            <div>
              <Reveal>
                <Rotulo>El salón</Rotulo>
                <h2 className={`${display.className} mt-4 uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,3.8rem)]`}>
                  Junto al parque,
                  <br />
                  <span className="relative inline-block" style={{ color: C.rojo }}>
                    en Las Loicas.
                    <Trazo scroll className="absolute -bottom-2 left-0 h-[12px] w-full" />
                  </span>
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.muted }}>
                  {BIZ.name} atiende en {BIZ.addressFull}, {BIZ.landmark}, en{' '}
                  {BIZ.city}. Barbería para hombres y peluquería para hombres y
                  mujeres, con reserva de hora por WhatsApp.
                </p>
                <ul className="mt-6 space-y-3">
                  {['Se reserva hora por WhatsApp', 'Cumplen con el horario, según sus clientes', 'Local ordenado y limpio, según sus opiniones'].map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm md:text-[15px]">
                      <span className="mt-2 h-[3px] w-4 shrink-0" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={120}>
                <dl className="mt-9 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-7" style={{ borderColor: C.line }}>
                  {DATOS_SALON.map((d) => (
                    <div key={d.t} className="border-l-[3px] pl-3.5" style={{ borderColor: C.rojo }}>
                      <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                        {d.t}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold leading-snug">{d.d}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <WaCta />
                  <GhostCta href={MAPS_URL} label="Cómo llegar" />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5 · Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.coal }}>
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
          <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14">
            <div className="flex flex-col justify-center">
              <Reveal>
                <Rotulo light>Cómo llegar</Rotulo>
                <h2 className={`${display.className} mt-4 uppercase leading-[0.98] text-[clamp(2.2rem,6.5vw,3.6rem)]`} style={{ color: C.paper }}>
                  Las Loicas 2134,
                  <br />
                  esquina Vicuña Mackenna.
                </h2>
                <p className="mt-5 max-w-md text-sm leading-relaxed md:text-base" style={{ color: C.mutedLight }}>
                  El salón queda {BIZ.landmark}, en {BIZ.city},{' '}
                  {BIZ.region}. Abierto {BIZ.horarioSemana.toLowerCase()};{' '}
                  {BIZ.horarioDomingo.toLowerCase()}.
                </p>
                <dl className="mt-8 space-y-4">
                  <div className="flex items-start gap-4 border-t pt-4" style={{ borderColor: C.lineLight }}>
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] pt-1`} style={{ color: 'rgba(244,239,229,0.6)' }}>
                      Horario
                    </dt>
                    <dd className="text-sm font-semibold" style={{ color: C.paper }}>
                      {BIZ.horarioSemana}
                      <span className="block text-[13px] font-normal" style={{ color: 'rgba(244,239,229,0.6)' }}>
                        {BIZ.horarioDomingo}
                      </span>
                    </dd>
                  </div>
                  <div className="flex items-start gap-4 border-t pt-4" style={{ borderColor: C.lineLight }}>
                    <dt className={`${mono.className} w-20 shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] pt-1`} style={{ color: 'rgba(244,239,229,0.6)' }}>
                      Reservas
                    </dt>
                    <dd className="text-sm font-semibold" style={{ color: C.paper }}>
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`underline decoration-2 underline-offset-4 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
                        style={{ color: C.rojoTxt, textDecorationColor: 'rgba(232,86,63,0.55)' }}
                      >
                        {BIZ.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </dl>
                <div className="mt-8 flex flex-wrap gap-3">
                  <WaCta dark />
                  <GhostCta href={MAPS_URL} label="Abrir en Google Maps" dark />
                </div>
              </Reveal>
            </div>
            <Reveal delay={120}>
              <div className="h-full min-h-[300px] md:min-h-[380px]" style={{ outline: '1.5px solid rgba(244,239,229,0.3)' }}>
                <LazyMap
                  src={MAPS_EMBED}
                  title={`Mapa: ${BIZ.name}, ${BIZ.addressFull}, ${BIZ.city}`}
                  className="h-full w-full border-0"
                  style={{ filter: 'grayscale(0.25) contrast(1.02)' }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="border-t" style={{ borderColor: C.lineLight, backgroundColor: '#0C0A08' }}>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-5 py-8 md:px-8">
            <div>
              <p className={`${display.className} text-lg uppercase tracking-[0.04em]`} style={{ color: C.paper }}>
                {BIZ.short}
              </p>
              <p className={`${mono.className} mt-1 text-[11px] uppercase tracking-[0.14em]`} style={{ color: 'rgba(244,239,229,0.6)' }}>
                {BIZ.rubro} · {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} text-xs font-bold uppercase tracking-[0.18em] underline decoration-2 underline-offset-8 transition-opacity hover:opacity-75 tap-44 ${FOCUS}`}
              style={{ color: C.rojoTxt, textDecorationColor: 'rgba(232,86,63,0.5)' }}
            >
              Reservar por WhatsApp →
            </a>
          </div>
        </footer>
      </section>

      <WaFab href={WA_LINK} label={`Reservar hora en ${BIZ.name} por WhatsApp`} />
    </div>
  )
}
