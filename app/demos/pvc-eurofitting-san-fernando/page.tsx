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
  src: [{ path: '../../fonts/anton/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/archivo/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/roboto-mono/normal-100-700.woff2', weight: '100 700', style: 'normal' }],
})

/**
 * Dirección de arte: «plano hidráulico». La página se lee como el esquema
 * de una red de agua: pozo profundo de fondo, tuberías que se llenan de
 * celeste PVC, nodos que conectan las secciones y rótulos de ficha técnica
 * en mono. Anton pone la letra estampada de bodega; Archivo lee el detalle;
 * el amarillo del hidrante marca solo las acciones.
 */
const C = {
  pozo: '#08262D',
  pozoPanel: '#0B323B',
  agua: '#1FA3B5',
  aguaCl: '#7FD3DE',
  petro: '#0E6F7C',
  petroTxt: '#0B5966',
  hormigon: '#E9E7E2',
  papel: '#F4F2EC',
  hidrante: '#F4C400',
  tinta: '#14232A',
  mutedL: 'rgba(20,35,42,0.68)',
  mutedD: 'rgba(255,255,255,0.72)',
  lineL: 'rgba(20,35,42,0.16)',
  lineD: 'rgba(255,255,255,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/** Retícula de plano, celeste muy tenue sobre el pozo. */
const PLANO_D: CSSProperties = {
  backgroundImage: [
    'linear-gradient(rgba(127,211,222,0.06) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(127,211,222,0.06) 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '28px 28px',
}

/** La misma retícula, en tinta sobre hormigón. */
const PLANO_L: CSSProperties = {
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
    'Ferretería de materiales hidráulicos en Rancagua 357, San Fernando: PVC, polietileno, estanques, bombas y cámaras. 4,6 en Google. Cotiza tu lista por WhatsApp.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La bodega', href: '#bodega' },
  { label: 'La atención', href: '#atencion' },
  { label: 'Dónde', href: '#donde' },
]

/** Rótulo de sección tipo ficha técnica: número de plano + línea. */
function Rotulo({ n, children, color, line }: { n: string; children: React.ReactNode; color: string; line: string }) {
  return (
    <p className={`${mono.className} flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.24em] mb-5`} style={{ color }}>
      <span className="inline-block h-[10px] w-[10px] shrink-0" style={{ backgroundColor: 'currentColor' }} aria-hidden="true" />
      <span className="whitespace-nowrap">Plano {n} · {children}</span>
      <span className="h-px flex-1" style={{ backgroundColor: line }} aria-hidden="true" />
    </p>
  )
}

/** Tramo de tubería que se llena de agua de izquierda a derecha. */
function Tubo({ delay = 0, dark = true, className = '' }: { delay?: number; dark?: boolean; className?: string }) {
  return (
    <div
      className={`relative h-[10px] rounded-full overflow-hidden ${className}`}
      style={{ backgroundColor: dark ? 'rgba(255,255,255,0.12)' : 'rgba(20,35,42,0.14)' }}
      aria-hidden="true"
    >
      <span
        className="eu-agua absolute inset-0 rounded-full"
        style={{ backgroundColor: C.agua, animationDelay: `${delay}s` }}
      />
      <span
        className="eu-brillo absolute inset-y-0 left-0 w-1/4"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
          animationDelay: `${delay + 1.4}s`,
        }}
      />
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
  tone: 'hidrante' | 'tinta' | 'agua' | 'lineClaro' | 'lineTinta'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'hidrante'
      ? { backgroundColor: C.hidrante, color: C.tinta }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: '#FFFFFF' }
        : tone === 'agua'
          ? { backgroundColor: C.agua, color: C.pozo }
          : tone === 'lineClaro'
            ? { border: '2px solid rgba(255,255,255,0.55)', color: '#FFFFFF' }
            : { border: `2px solid ${C.tinta}`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="eu-btn inline-flex items-center justify-center px-6 py-3 rounded-full text-[15px] font-bold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

export default function PvcEurofittingPage() {
  return (
    <div
      className={`${body.className} eu-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.pozo, color: '#FFFFFF' }}
    >
      <style>{`
        /* Títulos y cifras en Anton, la letra estampada de la bodega. */
        .eu-root h1, .eu-root h2, .eu-root h3, .eu-root .eu-display { font-family: ${display.style.fontFamily}; font-weight: 400; letter-spacing: 0.01em }

        /* La palabra se llena como un estanque: el nivel celeste sube de abajo a arriba. */
        @keyframes eu-nivel { from { clip-path: inset(100% 0 0 0) } to { clip-path: inset(0 0 0 0) } }
        .eu-nivel { animation: eu-nivel 1.5s cubic-bezier(0.55,0.1,0.2,1) 0.6s both }

        /* El agua corre por la tubería. */
        @keyframes eu-agua { from { transform: scaleX(0) } to { transform: scaleX(1) } }
        .eu-agua { transform-origin: left center; animation: eu-agua 1.4s cubic-bezier(0.55,0.05,0.25,1) both }
        @keyframes eu-brillo { from { transform: translateX(-110%); opacity: 0 } 25% { opacity: 1 } to { transform: translateX(430%); opacity: 0 } }
        .eu-brillo { animation: eu-brillo 3s ease-in-out infinite both }

        /* Nodo de la red: aparece cuando el agua llega. */
        @keyframes eu-nodo { from { transform: scale(0) } to { transform: scale(1) } }
        .eu-nodo { animation: eu-nodo 0.45s cubic-bezier(0.3,1.5,0.5,1) both }

        @keyframes eu-sube { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: none } }
        .eu-sube { animation: eu-sube 0.8s cubic-bezier(0.2,0.7,0.2,1) both }

        /* La foto se destapa como el nivel de un estanque: de abajo hacia arriba. */
        @keyframes eu-destapa { from { clip-path: inset(100% 0 0 0) } to { clip-path: inset(0 0 0 0) } }
        .eu-destapa { animation: eu-destapa 1.2s cubic-bezier(0.5,0.1,0.2,1) 0.4s both }

        /* La tubería troncal de la bodega crece al bajar por la lista. */
        @keyframes eu-baja { from { transform: scaleY(0) } to { transform: scaleY(1) } }
        @supports (animation-timeline: view()) {
          .eu-troncal { transform-origin: top center; animation: eu-baja linear both; animation-timeline: view() }
        }

        /* Las columnas de grid no pueden empujar el ancho: min-width auto las haría crecer al contenido. */
        .eu-root .grid > * { min-width: 0 }

        .eu-btn { transition: transform 0.18s ease, filter 0.18s ease }
        .eu-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .eu-btn:active { transform: scale(0.97) }
        .eu-btn:focus-visible, .eu-root a:focus-visible { outline: 3px solid ${C.hidrante}; outline-offset: 3px }

        @media (prefers-reduced-motion: reduce) {
          .eu-nivel, .eu-agua, .eu-brillo, .eu-nodo, .eu-sube, .eu-destapa, .eu-troncal { animation: none !important }
          .eu-brillo { opacity: 0 }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Cotizar"
        theme={{
          over: 'dark',
          bar: 'rgba(8,38,45,0.92)',
          ink: '#FFFFFF',
          line: C.lineD,
          btnBg: C.hidrante,
          btnInk: C.tinta,
        }}
      />

      {/* ── Plano 00 · Portada: la red arranca aquí ── */}
      <section id="inicio" className="relative" style={{ ...PLANO_D, backgroundColor: C.pozo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-24 md:pt-32 pb-10 md:pb-14">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className={`${mono.className} eu-sube text-[10px] md:text-[11px] uppercase tracking-[0.2em] md:tracking-[0.24em]`} style={{ color: C.aguaCl, animationDelay: '0.15s' }}>
                Materiales hidráulicos · San Fernando
              </p>
              <h1 className="mt-5 uppercase leading-[0.92] text-[clamp(2.9rem,11.5vw,6.4rem)]">
                <span className="eu-sube block" style={{ animationDelay: '0.3s' }}>
                  Todo lo que
                </span>
                <span className="eu-sube block" style={{ animationDelay: '0.45s' }}>
                  lleva{' '}
                  <span className="relative inline-block">
                    <span style={{ color: 'transparent', WebkitTextStroke: `2px ${C.agua}` }}>agua.</span>
                    <span aria-hidden="true" className="eu-nivel absolute inset-0" style={{ color: C.agua }}>
                      agua.
                    </span>
                  </span>
                </span>
              </h1>
              <div className="eu-sube mt-6 max-w-md" style={{ animationDelay: '0.6s' }}>
                <div className="flex items-center gap-3">
                  <Tubo className="flex-1" delay={0.8} />
                  <span
                    className="eu-nodo shrink-0 h-[22px] w-[22px] rounded-full"
                    style={{ border: `6px solid ${C.agua}`, backgroundColor: C.pozo, animationDelay: '2.1s' }}
                    aria-hidden="true"
                  />
                </div>
                <p className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.22em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                  Fig. 00 · la red corre por toda la página
                </p>
              </div>
              <p className="eu-sube mt-5 max-w-md text-base md:text-lg leading-relaxed" style={{ color: C.mutedD, animationDelay: '0.75s' }}>
                PVC, polietileno, estanques, bombas y cámaras de hormigón en una
                bodega grande en Rancagua 357, con estacionamiento y gente que
                te orienta para hacer el trabajo.
              </p>
              <div className="eu-sube mt-7 flex flex-wrap gap-3" style={{ animationDelay: '0.9s' }}>
                <Btn href={WA_COTIZAR} tone="hidrante">
                  Cotizar por WhatsApp
                </Btn>
                <Btn href="#bodega" tone="lineClaro" external={false}>
                  Ver la bodega
                </Btn>
              </div>
            </div>
            <figure>
              <div className="eu-destapa relative overflow-hidden rounded-xl aspect-[16/10] lg:aspect-[4/3]" style={{ border: `1px solid ${C.lineD}`, boxShadow: '0 24px 60px rgba(0,0,0,0.4)' }}>
                <Image
                  src={`${IMG}/hero.webp`}
                  alt="Pasillo central de la bodega de PVC Eurofitting: estanques azules, rollos y estanterías de madera"
                  fill
                  priority
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 px-3.5 py-2.5" style={{ background: 'linear-gradient(180deg, transparent, rgba(8,38,45,0.85) 45%)' }}>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.2em]`} style={{ color: C.aguaCl }}>
                    Fig. 01 · la bodega
                  </span>
                  <span className={`${mono.className} text-[10px] uppercase tracking-[0.16em] px-2 py-1 rounded`} style={{ backgroundColor: 'rgba(8,38,45,0.75)', color: C.hidrante }}>
                    {BIZ.rating} ★ Google
                  </span>
                </div>
              </div>
            </figure>
          </div>
          <div className="mt-10 md:mt-14 border-t pt-4 flex flex-wrap gap-x-8 gap-y-1.5" style={{ borderColor: C.lineD }}>
            {[
              `${BIZ.rating} en Google · ${BIZ.reviews} opiniones`,
              'Lun a vie 9:00 a 18:00 · sáb 9:00 a 14:00',
              'Rancagua 357, San Fernando',
            ].map((d) => (
              <p key={d} className={`${mono.className} text-[10px] md:text-[11px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.6)' }}>
                {d}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Plano 01 · La bodega: la red con sus ramales ── */}
      <section id="bodega" className="scroll-mt-20" style={{ ...PLANO_L, backgroundColor: C.hormigon, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="01" color={C.petroTxt} line={C.lineL}>
              Lo que hay en bodega
            </Rotulo>
            <div className="flex flex-wrap items-end justify-between gap-5 mb-10 md:mb-14">
              <h2 className="uppercase leading-[0.95] text-[clamp(2.3rem,7.5vw,4.6rem)]">
                Seis líneas,
                <br />
                <span style={{ color: C.petro }}>una sola red.</span>
              </h2>
              <p className="max-w-sm text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                Esto es lo que se ve hoy en la bodega. Medidas, stock y precios
                se cotizan directo: escribe con tu lista por WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="relative">
            {/* Tubería troncal: se llena de agua mientras bajas por la lista. */}
            <span
              className="eu-troncal absolute left-[13px] md:left-[15px] top-2 bottom-2 w-[6px] rounded-full"
              style={{ backgroundColor: C.agua }}
              aria-hidden="true"
            />
            <ol className="flex flex-col gap-6 md:gap-8">
              {LINEAS.map((l, i) => (
                <li key={l.codigo} className="relative pl-12 md:pl-16">
                  {/* Nodo + ramal hacia la tarjeta */}
                  <span
                    className="absolute left-[4px] md:left-[6px] top-[30px] h-[24px] w-[24px] rounded-full"
                    style={{ border: `6px solid ${C.agua}`, backgroundColor: C.hormigon }}
                    aria-hidden="true"
                  />
                  <span
                    className="absolute left-[28px] md:left-[30px] top-[39px] w-4 md:w-6 h-[6px] rounded-full"
                    style={{ backgroundColor: C.agua }}
                    aria-hidden="true"
                  />
                  <Reveal delay={i * 60}>
                    <article
                      className="grid md:grid-cols-[250px_1fr] rounded-xl overflow-hidden"
                      style={{ backgroundColor: C.papel, border: `1px solid ${C.lineL}`, boxShadow: '0 6px 24px rgba(20,35,42,0.08)' }}
                    >
                      <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[190px]">
                        <Image
                          src={`${IMG}/${l.img}.webp`}
                          alt={l.alt}
                          fill
                          sizes="(min-width: 768px) 250px, 100vw"
                          className="object-cover"
                          style={{ objectPosition: l.pos }}
                        />
                      </div>
                      <div className="p-4 md:p-5 flex flex-col justify-center">
                        <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] mb-1.5`} style={{ color: C.petroTxt }}>
                          Línea {l.codigo} · Fig. {String(i + 2).padStart(2, '0')}
                        </p>
                        <h3 className="uppercase leading-[1.02] text-[clamp(1.35rem,4vw,1.9rem)]">{l.titulo}</h3>
                        <p className="mt-2 text-sm leading-relaxed" style={{ color: C.mutedL }}>
                          {l.detalle}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <Reveal delay={80}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Btn href={WA_COTIZAR} tone="tinta">
                Enviar mi lista de materiales
              </Btn>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.mutedL }}>
                Con foto del trabajo, mejor
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Plano 02 · La atención: el tramo que más vale ── */}
      <section id="atencion" className="scroll-mt-20" style={{ backgroundColor: C.agua, color: C.tinta }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="02" color="rgba(20,35,42,0.75)" line="rgba(20,35,42,0.3)">
              La atención
            </Rotulo>
            <h2 className="uppercase leading-[0.95] text-[clamp(2.3rem,7.5vw,4.6rem)] max-w-4xl">
              Llegas con la duda.
              <br />
              Sales con la lista.
            </h2>
          </Reveal>

          <div className="mt-10 md:mt-12 grid sm:grid-cols-3 gap-4 md:gap-5">
            {[
              { n: 'A', t: 'Traes la idea', d: 'O la foto del trabajo que quieres hacer: la cañería, el estanque, la red.' },
              { n: 'B', t: 'Te muestran las alternativas', d: 'Qué fitting sirve, cómo armarlo, qué opciones hay en bodega.' },
              { n: 'C', t: 'Sales con los materiales', d: 'Y con la forma de hacerlo, aunque nunca lo hayas hecho.' },
            ].map((p, i) => (
              <Reveal key={p.n} delay={i * 90}>
                <div className="pt-4" style={{ borderTop: `5px solid ${C.tinta}` }}>
                  <span
                    className={`${mono.className} inline-flex items-center justify-center h-[34px] w-[34px] rounded-full text-sm font-bold`}
                    style={{ backgroundColor: C.tinta, color: C.agua }}
                  >
                    {p.n}
                  </span>
                  <h3 className="mt-3 uppercase leading-tight text-xl md:text-2xl">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: 'rgba(20,35,42,0.78)' }}>
                    {p.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <figure className="mt-12 md:mt-16 max-w-4xl">
              <blockquote className="font-bold leading-[1.25] tracking-[-0.01em] text-[clamp(1.3rem,3.8vw,2.1rem)]">
                “{OPINIONES.destacada.texto}”
              </blockquote>
              <figcaption className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className={`${mono.className} text-xs font-bold uppercase tracking-[0.18em]`}>
                  {OPINIONES.destacada.autor}
                </span>
                <Stars value={BIZ.ratingValue} color={C.tinta} size={15} />
                <span className={`${mono.className} text-[11px] uppercase tracking-[0.16em]`} style={{ color: 'rgba(20,35,42,0.75)' }}>
                  {BIZ.rating} · {BIZ.reviews} opiniones en Google
                </span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 grid sm:grid-cols-2 gap-4 max-w-3xl">
              {OPINIONES.cortas.map((o) => (
                <figure key={o.autor} className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(255,255,255,0.35)', border: '1px solid rgba(20,35,42,0.25)' }}>
                  <blockquote className="font-bold text-base">“{o.texto}”</blockquote>
                  <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(20,35,42,0.7)' }}>
                    {o.autor} · Google
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Plano 03 · Dónde: coordenadas y horario ── */}
      <section id="donde" className="scroll-mt-20" style={{ ...PLANO_D, backgroundColor: C.pozo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 md:gap-14 items-start">
          <Reveal>
            <Rotulo n="03" color={C.aguaCl} line={C.lineD}>
              Ubicación
            </Rotulo>
            <h2 className="uppercase leading-[0.95] text-[clamp(2.3rem,7.5vw,4.4rem)]">
              Rancagua 357,
              <br />
              <span style={{ color: C.agua }}>San Fernando.</span>
            </h2>
            <address className="not-italic mt-6 text-base leading-relaxed" style={{ color: C.mutedD }}>
              {BIZ.address}, {BIZ.city}
              <br />
              {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4 tap-44" style={{ color: '#FFFFFF' }}>
                {BIZ.phoneDisplay}
              </a>
            </address>
            <div className="mt-7 max-w-md">
              <p className={`${mono.className} text-[10px] uppercase tracking-[0.22em] mb-2`} style={{ color: C.aguaCl }}>
                Horario de atención
              </p>
              <table className="w-full text-left">
                <tbody>
                  {HORARIO.map((h) => (
                    <tr key={h.dia} className="border-b" style={{ borderColor: C.lineD }}>
                      <th scope="row" className="py-3 pr-4 font-medium text-sm" style={{ color: C.mutedD }}>
                        {h.dia}
                      </th>
                      <td className={`${mono.className} py-3 text-right text-sm`}>{h.hora}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className={`${mono.className} mt-3 text-[10px] uppercase tracking-[0.18em]`} style={{ color: 'rgba(255,255,255,0.55)' }}>
                + buen estacionamiento, dicen los clientes
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Btn href={MAPS_URL} tone="hidrante">
                Cómo llegar
              </Btn>
              <Btn href={WA_LINK} tone="lineClaro">
                Escribir por WhatsApp
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="flex flex-col gap-4">
              <div className="relative w-full overflow-hidden rounded-xl aspect-[4/3] min-h-[280px]" style={{ border: `1px solid ${C.lineD}` }}>
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <figure>
                <div className="relative overflow-hidden rounded-xl aspect-[21/9]" style={{ border: `1px solid ${C.lineD}` }}>
                  <Image
                    src={`${IMG}/cajas.webp`}
                    alt="Cajas y piezas de hormigón apiladas en la bodega"
                    fill
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} mt-2 text-[10px] uppercase tracking-[0.2em]`} style={{ color: 'rgba(255,255,255,0.5)' }}>
                  Fig. 08 · las piezas de hormigón
                </figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Plano 04 · Cierre: manda la lista ── */}
      <section style={{ backgroundColor: C.hidrante, color: C.tinta }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-20 text-center">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4`} style={{ color: 'rgba(20,35,42,0.7)' }}>
              Plano 04 · cotiza
            </p>
            <h2 className="uppercase leading-[0.95] text-[clamp(2.6rem,9vw,5.2rem)]">
              ¿Tienes la lista?
              <br />
              Mándala.
            </h2>
            <div className="mt-6 mx-auto max-w-xs">
              <Tubo dark={false} delay={0.2} />
            </div>
            <p className="mt-6 max-w-md mx-auto text-base md:text-lg leading-relaxed" style={{ color: 'rgba(20,35,42,0.8)' }}>
              Escríbenos por WhatsApp con los materiales que necesitas, con
              foto si quieres, y te respondemos con lo que hay en bodega.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href={WA_COTIZAR} tone="tinta">
                Cotizar por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.pozo }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-8 pb-5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="eu-display uppercase text-2xl">{BIZ.name}</p>
              <p className="text-sm mt-1" style={{ color: C.mutedD }}>
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
          <div className="border-t mt-5 pt-4" style={{ borderColor: C.lineD }}>
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
