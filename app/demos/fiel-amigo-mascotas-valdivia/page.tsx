import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ, HORARIO, PERCHERO, MURO, TIRAS, OPINIONES,
  WA_LINK, WA_DESPACHO, MAPS_URL, MAPS_EMBED, IMG,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/bricolage-grotesque/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/space-grotesk/normal-300-700.woff2', weight: '300 700', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

// Del letrero de la fachada: turquesa petrolero sobre noche profunda,
// coral de las etiquetas y papel limpio de tienda ordenada.
const C = {
  noche: '#052E36',
  petroleo: '#0A4753',
  turquesa: '#1FA9BC',
  turquesaViva: '#35CBD8',
  aqua: '#E2F1EF',
  papel: '#F7F9F6',
  ink: '#0B2E34',
  coral: '#FF6B57',
  coralInk: '#AE3A24',
  muted: '#496066',
  line: 'rgba(11,46,52,0.14)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

// La etiqueta de precio: punta a la izquierda, perforación incluida.
const TAG_CLIP = 'polygon(13px 0, 100% 0, 100% 100%, 13px 100%, 0 50%)'

export const metadata: Metadata = demoMetadata({
  slug: 'fiel-amigo-mascotas-valdivia',
  title: 'Fiel Amigo Mascotas · Tienda de mascotas en Valdivia',
  description:
    'Alimentos y accesorios para mascotas en Errázuriz 2239, Valdivia. Alimento para perros y gatos, arena, accesorios, juguetes y snacks. Consulta por WhatsApp.',
  image: '/demos/fiel-amigo-mascotas-valdivia/fachada.webp',
})

const NAV_LINKS = [
  { label: 'La tienda', href: '#tienda' },
  { label: 'El perchero', href: '#perchero' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#donde' },
]

/** Etiqueta de colgador: punta y perforación, texto en mono. */
function Tag({
  children,
  tone = 'petroleo',
  className = '',
}: {
  children: React.ReactNode
  tone?: 'petroleo' | 'coral' | 'papel' | 'riel' | 'noche'
  className?: string
}) {
  const st: CSSProperties =
    tone === 'petroleo'
      ? { backgroundColor: C.petroleo, color: '#CFF3F4' }
      : tone === 'coral'
        ? { backgroundColor: C.coral, color: C.noche }
        : tone === 'papel'
          ? { backgroundColor: '#FFFFFF', color: C.ink }
          : tone === 'riel'
            ? { backgroundColor: '#0E5563', color: '#BFE9EC' }
            : { backgroundColor: C.noche, color: '#CFF3F4' }
  const hole =
    tone === 'coral' ? 'rgba(5,46,54,0.35)' : tone === 'papel' ? 'rgba(11,46,52,0.35)' : 'rgba(255,255,255,0.45)'
  return (
    <span
      className={`${mono.className} relative inline-flex items-center pl-7 pr-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] ${className}`}
      style={{ ...st, clipPath: TAG_CLIP }}
    >
      <span
        className="absolute left-[7px] top-1/2 h-[5px] w-[5px] -translate-y-1/2 rounded-full"
        style={{ backgroundColor: hole }}
        aria-hidden="true"
      />
      {children}
    </span>
  )
}

function Btn({
  href,
  children,
  tone,
  external = true,
  className = '',
}: {
  href: string
  children: React.ReactNode
  tone: 'coral' | 'noche' | 'ghost' | 'lineaInk'
  external?: boolean
  className?: string
}) {
  const st: CSSProperties =
    tone === 'coral'
      ? { backgroundColor: C.coral, color: C.noche }
      : tone === 'noche'
        ? { backgroundColor: C.noche, color: '#FFFFFF' }
        : tone === 'ghost'
          ? { border: '2px solid rgba(255,255,255,0.55)', color: '#FFFFFF' }
          : { border: `2px solid ${C.ink}`, color: C.ink }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={`${display.className} fa-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-bold tap-44 ${className}`}
      style={st}
    >
      {children}
    </a>
  )
}

/** Gancho de slatwall: baja del riel y se curva. */
function Gancho({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 14 16" className={className} aria-hidden="true">
      <path
        d="M7 1 V9 Q7 13.5 11 13.5 Q14 13.5 14 10.5"
        fill="none"
        stroke="#9BDEE4"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function FielAmigoPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.ink }}
    >
      <style>{`
        /* Las tiras caen del riel y aterrizan colgadas. */
        @keyframes fa-cae {
          0% { transform: translateY(-120%) rotate(var(--r0, 0deg)) }
          62% { transform: translateY(7px) rotate(0deg) }
          100% { transform: translateY(0) rotate(0deg) }
        }
        .fa-cae { animation: fa-cae 0.85s cubic-bezier(0.3,1.35,0.4,1) both }

        /* El vaivén que queda en los productos colgados. */
        @keyframes fa-mece { from { transform: rotate(-1.5deg) } to { transform: rotate(1.4deg) } }
        .fa-mece { transform-origin: 50% -12px; animation: fa-mece var(--t, 4.2s) ease-in-out infinite alternate }

        /* El letrero turquesa se enciende: dos parpadeos y queda prendido. */
        @keyframes fa-letrero {
          0% { opacity: 0; text-shadow: none }
          10% { opacity: 0.6; text-shadow: 0 0 14px rgba(53,203,216,0.5) }
          20% { opacity: 0.2; text-shadow: none }
          36% { opacity: 0.95; text-shadow: 0 0 20px rgba(53,203,216,0.6) }
          48% { opacity: 0.5; text-shadow: 0 0 8px rgba(53,203,216,0.3) }
          70% { opacity: 1; text-shadow: 0 0 24px rgba(53,203,216,0.65), 0 0 64px rgba(53,203,216,0.32) }
          100% { opacity: 1; text-shadow: 0 0 16px rgba(53,203,216,0.5), 0 0 52px rgba(53,203,216,0.28) }
        }
        .fa-letrero { animation: fa-letrero 1.7s ease 0.45s both }

        /* Entrada suave para los bloques del hero. */
        @keyframes fa-sube { from { opacity: 0; transform: translateY(14px) } to { opacity: 1; transform: none } }
        .fa-sube { animation: fa-sube 0.7s cubic-bezier(0.22,0.61,0.2,1) both }

        /* Las tarjetas del perchero se cuelgan al entrar en pantalla. */
        @keyframes fa-cuelga {
          0% { transform: rotate(var(--tilt0, 3deg)) translateY(-14px) }
          100% { transform: rotate(var(--tilt, 0deg)) translateY(0) }
        }
        @supports (animation-timeline: view()) {
          .fa-percha { animation: fa-cuelga linear both; animation-timeline: view(); animation-range: var(--pr, entry 0% entry 80%) }
        }
        .fa-percha { transform: rotate(var(--tilt, 0deg)); transform-origin: 50% -22px }
        .fa-tarjeta { transition: transform 0.25s ease, box-shadow 0.25s ease }
        .fa-tarjeta:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 0 14px 28px rgba(11,46,52,0.16) }

        .fa-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .fa-btn:hover { transform: translateY(-2px); filter: brightness(1.05) }
        .fa-btn:active { transform: scale(0.96) }
        .fa-btn:focus-visible { outline: 3px solid ${C.turquesaViva}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .fa-cae, .fa-mece, .fa-letrero, .fa-sube, .fa-percha { animation: none !important }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="WhatsApp"
        theme={{
          over: 'dark',
          bar: 'rgba(5,46,54,0.94)',
          ink: '#FFFFFF',
          line: 'rgba(255,255,255,0.12)',
          btnBg: C.coral,
          btnInk: C.noche,
        }}
      />

      {/* ── 1 · El letrero prendido y las tiras colgadas del riel ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.noche, color: '#FFFFFF' }}>
        {/* trama de perforaciones del slatwall */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(rgba(255,255,255,0.055) 1.2px, transparent 1.4px)',
            backgroundSize: '26px 26px',
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[88px] md:pt-[104px]">
          {/* el riel de donde cuelga todo */}
          <div
            className="h-[7px] rounded-full"
            style={{ backgroundColor: '#0E5563', boxShadow: '0 2px 6px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.14)' }}
            aria-hidden="true"
          />
          {/* las tiras: productos colgados de ganchos */}
          <div className="flex items-start justify-center gap-2.5 md:gap-5" aria-label="Productos de la tienda">
            {TIRAS.map((t, i) => (
              <div
                key={t.img + i}
                className="fa-cae"
                style={{ animationDelay: `${0.12 + i * 0.13}s`, '--r0': `${i % 2 ? 4.5 : -4.5}deg` } as CSSProperties}
              >
                <div
                  className="fa-mece flex flex-col items-center"
                  style={{ '--t': `${3.9 + i * 0.55}s`, animationDelay: `${-0.6 - i * 0.9}s` } as CSSProperties}
                >
                  <Gancho className="w-[13px] h-[15px] -mb-[2px]" />
                  <div
                    className={`relative ${t.ratio} w-[76px] md:w-[118px] overflow-hidden rounded-[10px]`}
                    style={{ border: '1px solid rgba(255,255,255,0.22)', boxShadow: '0 12px 26px rgba(0,0,0,0.4)' }}
                  >
                    <Image
                      src={`${IMG}/${t.img}.webp`}
                      alt={t.alt}
                      fill
                      sizes="(min-width: 768px) 118px, 76px"
                      className="object-cover"
                      style={{ objectPosition: t.pos }}
                      priority={i < 2}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* el letrero */}
          <div className="text-center mt-9 md:mt-12 pb-12 md:pb-16">
            <div className="fa-sube" style={{ animationDelay: '0.15s' }}>
              <Tag tone="riel">Tienda de mascotas · Valdivia</Tag>
            </div>
            <h1 className={`${display.className} mt-5 font-extrabold uppercase leading-[0.95] tracking-[-0.01em] text-[clamp(2.7rem,12.5vw,6.2rem)]`}>
              <span className="fa-letrero block">Fiel Amigo</span>
              <span
                className="fa-sube block mt-1 text-[0.34em] font-bold tracking-[0.5em] pl-[0.5em]"
                style={{ color: C.turquesaViva, animationDelay: '1.5s' }}
              >
                Mascotas
              </span>
            </h1>
            <p
              className={`${display.className} fa-sube mt-6 text-[clamp(1.3rem,5.2vw,2rem)] font-semibold leading-snug`}
              style={{ color: '#DFF5F6', animationDelay: '1.75s' }}
            >
              «{BIZ.lema}.»
            </p>
            <p className="fa-sube mt-3 text-sm md:text-base" style={{ color: 'rgba(255,255,255,0.72)', animationDelay: '1.9s' }}>
              {BIZ.letrero}.
            </p>
            <div className="fa-sube mt-7 flex flex-col sm:flex-row items-center justify-center gap-3" style={{ animationDelay: '2.05s' }}>
              <Btn href={WA_LINK} tone="coral">
                Consultar por WhatsApp
              </Btn>
              <Btn href={WA_DESPACHO} tone="ghost">
                Consultar despacho
              </Btn>
            </div>
            <p className={`${mono.className} fa-sube mt-7 text-[10px] uppercase tracking-[0.08em]`} style={{ color: 'rgba(255,255,255,0.6)', animationDelay: '2.2s' }}>
              Lun a vie 10:30 a 20:00 · Sáb 11:00 a 19:00
            </p>
          </div>
        </div>
      </section>

      {/* ── 2 · El muro: tres bandas de la tienda real ── */}
      <section id="tienda" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-[1200px] mx-auto py-14 md:py-20">
          <div className="px-5 md:px-8">
            <Reveal>
              <Tag>La tienda por dentro</Tag>
              <h2 className={`${display.className} mt-4 font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.1rem,6.4vw,3.8rem)]`}>
                Muros que se recorren
                <br />
                como pasillos.
              </h2>
              <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
                Todo lo que ves es de la tienda misma: los muros de Errázuriz
                llenos de cosas para perros y gatos, de la correa al saco
                grande.
              </p>
            </Reveal>
          </div>

          <div className="mt-9 md:mt-12">
            {MURO.map((m, i) => (
              <Reveal key={m.img} delay={i * 60}>
                <figure className={i ? 'mt-8 md:mt-10' : ''}>
                  <div className="relative aspect-[20/9] overflow-hidden md:rounded-2xl" style={{ backgroundColor: C.aqua }}>
                    <Image
                      src={`${IMG}/${m.img}.webp`}
                      alt={m.alt}
                      fill
                      sizes="(min-width: 1232px) 1200px, 100vw"
                      className="object-cover"
                      loading={i ? 'lazy' : 'eager'}
                    />
                    <div className="absolute left-4 md:left-6 bottom-3 md:bottom-5">
                      <Tag tone="papel">{m.tag}</Tag>
                    </div>
                  </div>
                  <figcaption
                    className={`px-5 md:px-8 mt-3 flex items-baseline gap-3 text-sm md:text-base ${i % 2 ? 'md:justify-end md:text-right' : ''}`}
                  >
                    <span className={`${mono.className} shrink-0 text-[11px] font-bold`} style={{ color: C.coralInk }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span style={{ color: C.muted }}>{m.caption}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 · El perchero: categorías colgadas de sus ganchos ── */}
      <section
        id="perchero"
        className="scroll-mt-20"
        style={{
          backgroundColor: C.aqua,
          backgroundImage: 'radial-gradient(rgba(11,46,52,0.1) 1.2px, transparent 1.4px)',
          backgroundSize: '26px 26px',
        }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Tag>El perchero</Tag>
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.1rem,6.4vw,3.8rem)]`}>
              De todo,
              <br />
              para perros y gatos.
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Alimento seco y húmedo, arena, accesorios, ropa, juguetes y
              snacks. Pregunta por lo que buscas y te decimos si está.
            </p>
          </Reveal>

          <ul className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-9 md:gap-x-6 md:gap-y-12">
            {PERCHERO.map((p, i) => (
              <li
                key={p.titulo}
                className="fa-percha"
                style={{ '--tilt': `${i % 2 ? 1.4 : -1.4}deg`, '--tilt0': `${i % 2 ? 4.5 : -4.5}deg`, '--pr': `entry ${i * 5}% entry 85%` } as CSSProperties}
              >
                <figure className="fa-tarjeta">
                  <div className="flex flex-col items-center" aria-hidden="true">
                    <span className="block w-[2px] h-[16px]" style={{ backgroundColor: 'rgba(11,46,52,0.4)' }} />
                    <span className="block h-[9px] w-[9px] rounded-full -mt-[2px]" style={{ backgroundColor: C.petroleo, boxShadow: '0 2px 3px rgba(11,46,52,0.3)' }} />
                  </div>
                  {p.img ? (
                    <div className="relative -mt-[4px] aspect-[3/4] overflow-hidden rounded-xl" style={{ border: `1px solid ${C.line}`, boxShadow: '0 8px 18px rgba(11,46,52,0.12)' }}>
                      <Image src={`${IMG}/${p.img}.webp`} alt={p.alt} fill sizes="(min-width: 768px) 30vw, 44vw" className="object-cover" loading="lazy" />
                    </div>
                  ) : (
                    <div
                      className="relative -mt-[4px] aspect-[3/4] rounded-xl flex flex-col items-center justify-center text-center px-3"
                      style={{
                        backgroundColor: i % 4 === 3 ? C.petroleo : C.coral,
                        boxShadow: '0 8px 18px rgba(11,46,52,0.14)',
                      }}
                    >
                      <span className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.2em]`} style={{ color: i % 4 === 3 ? C.turquesaViva : 'rgba(5,46,54,0.65)' }}>
                        También hay
                      </span>
                      <span className={`${display.className} mt-2 text-2xl md:text-3xl font-extrabold leading-tight`} style={{ color: i % 4 === 3 ? '#FFFFFF' : C.noche }}>
                        {p.titulo}
                      </span>
                    </div>
                  )}
                  {p.img && (
                    <figcaption className="mt-3 px-0.5">
                      <h3 className={`${display.className} text-base md:text-lg font-bold leading-tight`}>{p.titulo}</h3>
                      <p className="mt-0.5 text-[13px] leading-snug" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </figcaption>
                  )}
                  {!p.img && (
                    <figcaption className="mt-3 px-0.5">
                      <h3 className={`${display.className} sr-only`}>{p.titulo}</h3>
                      <p className="text-[13px] leading-snug" style={{ color: C.muted }}>
                        {p.detalle}
                      </p>
                    </figcaption>
                  )}
                </figure>
              </li>
            ))}
          </ul>

          <Reveal delay={120}>
            <div className="mt-11 flex flex-wrap items-center gap-4">
              <Btn href={WA_LINK} tone="noche">
                Preguntar por un producto
              </Btn>
              <p className={`${mono.className} text-xs font-bold uppercase tracking-[0.14em]`} style={{ color: C.coralInk }}>
                Dinos la marca y el formato
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4 · Si no está, lo buscan ── */}
      <section style={{ backgroundColor: C.coral, color: C.noche }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 text-center">
          <Reveal>
            <Tag tone="noche">Lo que dicen sus clientes</Tag>
            <h2 className={`${display.className} mt-5 font-extrabold leading-[1] tracking-[-0.01em] text-[clamp(2.3rem,8vw,4.6rem)]`}>
              ¿No está en el muro?
              <br />
              Lo buscan para ti.
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg font-medium leading-relaxed" style={{ color: 'rgba(5,46,54,0.8)' }}>
              Así lo cuentan quienes compran aquí: si un producto no está,
              lo buscan. Escríbenos la marca o la foto de lo que necesitas.
            </p>
            <div className="mt-8 flex justify-center">
              <Btn href={WA_LINK} tone="noche">
                Preguntar por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 5 · Opiniones: etiquetas que cuentan ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Tag>Opiniones en Google</Tag>
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.1rem,6.4vw,3.8rem)]`}>
              Palabra de clientes.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-8 md:gap-10 max-w-4xl">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.autor} delay={i * 130}>
                <figure
                  className="relative h-full rounded-2xl px-6 pt-9 pb-6 md:px-7 md:pt-10 md:pb-7"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: `1px solid ${C.line}`,
                    boxShadow: '0 10px 26px rgba(11,46,52,0.1)',
                    transform: `rotate(${i % 2 ? 1.1 : -1.1}deg)`,
                  }}
                >
                  {/* perforación y argolla de la etiqueta */}
                  <span
                    className="absolute -top-[7px] left-1/2 -translate-x-1/2 h-[14px] w-[14px] rounded-full"
                    style={{ backgroundColor: C.papel, border: '3px solid #FFFFFF', boxShadow: '0 1px 2px rgba(11,46,52,0.25) inset' }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute top-[3px] left-1/2 -translate-x-1/2 h-[8px] w-[8px] rounded-full"
                    style={{ border: `2px solid ${C.turquesa}`, backgroundColor: 'transparent' }}
                    aria-hidden="true"
                  />
                  <blockquote className="text-[15px] md:text-base leading-relaxed" style={{ color: C.ink }}>
                    “{o.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} mt-4 flex items-center justify-between gap-3 text-[11px] font-bold uppercase tracking-[0.16em]`} style={{ color: C.coralInk }}>
                    {o.autor}
                    <span style={{ color: C.muted }}>Opinión en Google</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={260}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} mt-9 inline-flex items-center gap-2 font-bold underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.petroleo }}
            >
              Leer las {BIZ.reviews} opiniones en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── 6 · Errázuriz 2239: el letrero turquesa ── */}
      <section id="donde" className="scroll-mt-20" style={{ backgroundColor: C.aqua }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Tag>Cómo llegar</Tag>
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.1rem,6.4vw,3.8rem)]`}>
              Errázuriz 2239:
              <br />
              el letrero turquesa.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
            <Reveal>
              <figure>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl" style={{ border: `1px solid ${C.line}`, boxShadow: '0 14px 30px rgba(11,46,52,0.14)' }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Fachada de Fiel Amigo Mascotas: letrero turquesa y pendón en Errázuriz 2239, Valdivia"
                    fill
                    sizes="(min-width: 1024px) 560px, 92vw"
                    className="object-cover"
                    style={{ objectPosition: '50% 30%' }}
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-3 flex items-baseline gap-3 text-sm" style={{ color: C.muted }}>
                  <span className={`${mono.className} shrink-0 text-[11px] font-bold`} style={{ color: C.coralInk }}>04</span>
                  <span>La fachada de la cuadra: letrero turquesa y pendón en la vereda.</span>
                </figcaption>
              </figure>

              {/* la tarjeta de horario, como el aviso de la puerta */}
              <div className="mt-8 rounded-2xl px-6 py-6" style={{ backgroundColor: C.noche, boxShadow: '0 12px 26px rgba(11,46,52,0.18)' }}>
                <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.22em]`} style={{ color: C.turquesaViva }}>
                  Horario
                </p>
                <ul className="mt-4">
                  {HORARIO.map((h, i) => (
                    <li
                      key={h.dia}
                      className="flex items-baseline justify-between gap-4 py-2.5"
                      style={{ borderTop: i ? '1px dashed rgba(255,255,255,0.25)' : undefined, color: '#EAF7F8' }}
                    >
                      <span className="font-medium" style={{ color: '#EAF7F8' }}>{h.dia}</span>
                      <span className={`${mono.className} text-sm font-bold`} style={{ color: h.hora === 'Cerrado' ? C.coral : '#FFFFFF' }}>
                        {h.hora}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative w-full overflow-hidden rounded-2xl aspect-[4/3] min-h-[280px]" style={{ border: `1px solid ${C.line}`, boxShadow: '0 14px 30px rgba(11,46,52,0.14)' }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <address className="not-italic mt-6 text-base leading-relaxed" style={{ color: C.ink }}>
                {BIZ.address}, {BIZ.city}
                <br />
                {BIZ.region}
                <br />
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-bold underline underline-offset-4 decoration-2 tap-44" style={{ color: C.petroleo }}>
                  {BIZ.phoneDisplay}
                </a>
              </address>

              <p className="mt-5 text-sm leading-relaxed max-w-sm" style={{ color: C.muted }}>
                ¿Lo quieres en tu casa? Ellos mismos te invitan a consultar
                por despacho.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Btn href={MAPS_URL} tone="noche">
                  Cómo llegar
                </Btn>
                <Btn href={WA_DESPACHO} tone="lineaInk">
                  Consultar despacho
                </Btn>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 7 · Cierre: pregunta no más ── */}
      <section style={{ backgroundColor: C.papel }}>
        <div className="max-w-3xl mx-auto px-5 md:px-8 py-14 md:py-18 text-center">
          <Reveal>
            <Gancho className="mx-auto w-[16px] h-[18px] rotate-180" />
            <h2 className={`${display.className} mt-4 font-extrabold leading-[1] tracking-[-0.01em] text-[clamp(2.2rem,7vw,4rem)]`}>
              Pregunta por el producto
              <br />
              de tu regalón.
            </h2>
            <p className="mt-5 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
              Mándanos el nombre, la marca o una foto por WhatsApp y te
              contamos si está en el muro.
            </p>
            <div className="mt-8 flex justify-center">
              <Btn href={WA_LINK} tone="coral">
                Consultar por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 8 · Footer ── */}
      <footer style={{ backgroundColor: C.noche, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className={`${display.className} text-2xl font-extrabold leading-none`}>{BIZ.name}</p>
              <p className="text-sm mt-1.5" style={{ color: 'rgba(255,255,255,0.75)' }}>
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
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.62)' }}>
              Sitio de ejemplo preparado por{' '}
              <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: '#FFFFFF' }}>
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.turquesaViva }}>
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
