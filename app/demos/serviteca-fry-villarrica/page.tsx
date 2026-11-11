import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, HORARIO, OPINIONES, IMG } from './content'

// Unbounded: la letra de instrumental, ancha y de tablero. Work Sans
// para el texto y Geist Mono para los campos de la ficha.
const display = localFont({
  src: [{ path: '../../fonts/unbounded/normal-200-900.woff2', weight: '200 900', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/geist-mono/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})

// Del taller: el azul de la camioneta sobre el elevador, el rojo del
// equipo, el papel de la ficha de servicio y el carbón del galpón.
const C = {
  papel: '#F2EFE7',
  ficha: '#FAF8F2',
  tinta: '#191C21',
  mutedL: 'rgba(25,28,33,0.68)',
  lineL: 'rgba(25,28,33,0.16)',
  azul: '#1B54CC',
  azulDeep: '#123A94',
  rojo: '#C1262E',
  carbon: '#16191F',
  papelD: '#F0EDE4',
  mutedD: 'rgba(240,237,228,0.74)',
  mutedD2: 'rgba(240,237,228,0.5)',
  lineD: 'rgba(240,237,228,0.16)',
} as const

// globals.css redefine --spacing-5…12; este demo usa la escala por defecto.
const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

/** Cuadrícula de la ficha, apenas visible sobre el papel. */
const RETICULA: CSSProperties = {
  backgroundImage: [
    'linear-gradient(rgba(27,84,204,0.055) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(27,84,204,0.055) 1px, transparent 1px)',
  ].join(', '),
  backgroundSize: '26px 26px',
}

export const metadata: Metadata = demoMetadata({
  slug: 'serviteca-fry-villarrica',
  title: 'Serviteca Fry · Taller mecánico en Villarrica',
  description:
    'Taller mecánico en el km 1,5 del camino Villarrica a Licán Ray. Mantenciones y cambios de aceite: te explican con detalle y te muestran los arreglos. Agenda por WhatsApp.',
  image: `${IMG}/elevador.webp`,
})

const NAV_LINKS = [
  { label: 'La ficha', href: '#ficha' },
  { label: 'El taller', href: '#taller' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Rótulo de sección: número de campo de ficha + línea punteada. */
function Rotulo({ n, children, dark = false }: { n: string; children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`${mono.className} flex items-center gap-3 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em] mb-5`}
      style={{ color: dark ? C.mutedD : C.mutedL }}
    >
      <span
        className="inline-flex h-[18px] items-center px-1.5 font-bold"
        style={{ backgroundColor: dark ? C.azul : C.tinta, color: dark ? '#FFFFFF' : C.papel }}
      >
        {n}
      </span>
      <span className="whitespace-nowrap">{children}</span>
      <span
        className="h-0 flex-1 border-t border-dashed"
        style={{ borderColor: dark ? C.lineD : C.lineL }}
        aria-hidden="true"
      />
    </p>
  )
}

/** El sello del taller: tinta roja sobre papel, cae con golpe. */
function Sello({ children, className = '', delay = '0s' }: { children: React.ReactNode; className?: string; delay?: string }) {
  return (
    <span
      className={`${mono.className} fry-sello inline-block rotate-[-7deg] border-[2.5px] px-3 py-1.5 text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] shadow-md ${className}`}
      style={{
        borderColor: C.rojo,
        color: C.rojo,
        backgroundColor: 'rgba(250,248,242,0.94)',
        animationDelay: delay,
      }}
    >
      {children}
    </span>
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
  tone: 'rojo' | 'tinta' | 'lineL' | 'lineD' | 'papel'
  external?: boolean
}) {
  const st: CSSProperties =
    tone === 'rojo'
      ? { backgroundColor: C.rojo, color: '#FFFFFF' }
      : tone === 'tinta'
        ? { backgroundColor: C.tinta, color: C.papel }
        : tone === 'papel'
          ? { backgroundColor: C.papel, color: C.tinta }
          : tone === 'lineD'
            ? { border: '1.5px solid rgba(240,237,228,0.5)', color: C.papelD }
            : { border: `1.5px solid rgba(25,28,33,0.45)`, color: C.tinta }
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="fry-btn inline-flex items-center justify-center gap-2.5 px-6 py-3 text-sm font-semibold tracking-wide tap-44"
      style={st}
    >
      {children}
    </a>
  )
}

function Ic({ name, className = 'w-[18px] h-[18px]' }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    pin: (
      <>
        <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
        <circle cx="12" cy="10" r="2.6" />
      </>
    ),
    reloj: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    wa: <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />,
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

export default function ServitecaFryPage() {
  return (
    <div
      className={`${body.className} fry-root min-h-screen antialiased overflow-x-clip`}
      style={{ ...SPACING, backgroundColor: C.papel, color: C.tinta }}
    >
      <style>{`
        html { scroll-behavior: auto }

        /* El elevador trabaja: la foto sube dentro del marco, como la
           camioneta sobre el equipo rojo, y vuelve a bajar. */
        @keyframes fry-elevador {
          0% { transform: translateY(0) }
          30% { transform: translateY(-9.5%) }
          58% { transform: translateY(-9.5%) }
          88%, 100% { transform: translateY(0) }
        }
        .fry-elevador { animation: fry-elevador 7.5s cubic-bezier(0.5,0.05,0.3,1) 0.9s infinite }

        /* La aguja del costado marca la altura que va ganando. */
        @keyframes fry-aguja {
          0% { transform: translateY(0) }
          30% { transform: translateY(-34px) }
          58% { transform: translateY(-34px) }
          88%, 100% { transform: translateY(0) }
        }
        .fry-aguja { animation: fry-aguja 7.5s cubic-bezier(0.5,0.05,0.3,1) 0.9s infinite }

        /* El titular se escribe en la ficha, línea a línea. */
        @keyframes fry-escribe {
          from { clip-path: inset(0 100% 0 0) }
          to { clip-path: inset(0 0 0 0) }
        }
        .fry-escribe { animation: fry-escribe 0.7s cubic-bezier(0.4,0.2,0.2,1) both }

        /* El sello cae con golpe de tinta. */
        @keyframes fry-sello {
          from { opacity: 0; transform: rotate(-7deg) scale(2.1) }
          60% { opacity: 1; transform: rotate(-7deg) scale(0.94) }
          to { opacity: 1; transform: rotate(-7deg) scale(1) }
        }
        .fry-sello { animation: fry-sello 0.5s cubic-bezier(0.3,0.9,0.4,1.1) 1.15s both }

        @keyframes fry-sube { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: none } }
        .fry-sube { animation: fry-sube 0.7s cubic-bezier(0.2,0.7,0.2,1) both }

        /* Cursor de la ficha abierta. */
        @keyframes fry-cursor { 0%, 49% { opacity: 1 } 50%, 100% { opacity: 0 } }
        .fry-cursor { animation: fry-cursor 1.1s steps(1) infinite }

        .fry-btn { transition: transform .18s ease, filter .18s ease }
        .fry-btn:hover { transform: translateY(-2px); filter: brightness(1.07) }
        .fry-btn:active { transform: scale(.97) }
        .fry-root a:focus-visible { outline: 3px solid ${C.azul}; outline-offset: 3px }
        .fry-root .grid > * { min-width: 0 }

        @media (prefers-reduced-motion: reduce) {
          .fry-elevador, .fry-aguja, .fry-escribe, .fry-sello, .fry-sube, .fry-cursor { animation: none !important }
          .fry-escribe { clip-path: inset(0 0 0 0) !important }
          .fry-sello { opacity: 1 !important }
        }
      `}</style>

      <BlitzNav
        name={<span className="uppercase tracking-[0.04em]">{BIZ.short}</span>}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        ctaLabel="Agendar"
        theme={{
          over: 'light',
          bar: 'rgba(242,239,231,0.94)',
          ink: C.tinta,
          line: C.lineL,
          btnBg: C.rojo,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── F-00 · Portada: la ficha se abre y el elevador sube ── */}
      <section id="inicio" className="relative" style={{ ...RETICULA, backgroundColor: C.papel }}>
        {/* línea de margen de la ficha */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-3.5 md:left-6 w-px border-l border-dashed hidden sm:block"
          style={{ borderColor: 'rgba(193,38,46,0.35)' }}
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 pt-[92px] md:pt-[130px] pb-0">
          <div className="grid lg:grid-cols-[1.02fr_0.98fr] gap-9 lg:gap-14 items-center">
            <div>
              <p
                className={`${mono.className} fry-sube flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.22em]`}
                style={{ color: C.mutedL, animationDelay: '0.1s' }}
              >
                <span className="inline-flex h-[18px] items-center px-1.5 font-bold" style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}>
                  F-00
                </span>
                Ficha de servicio · {BIZ.rubro} · {BIZ.city}
                <span className="fry-cursor inline-block w-[7px] h-[13px] -mb-0.5" style={{ backgroundColor: C.azul }} aria-hidden="true" />
              </p>
              <h1
                className={`${display.className} mt-6 font-bold uppercase leading-[1.04] tracking-[0.005em] text-[clamp(1.8rem,7.6vw,4.4rem)]`}
                style={{ color: C.tinta }}
              >
                <span className="fry-escribe block" style={{ animationDelay: '0.25s' }}>
                  Te mostramos
                </span>
                <span className="fry-escribe block" style={{ animationDelay: '0.55s' }}>
                  lo que le hacemos
                </span>
                <span className="fry-escribe block" style={{ animationDelay: '0.85s', color: C.azul }}>
                  a tu auto.
                </span>
              </h1>
              <p
                className="fry-sube mt-6 max-w-md text-[15px] md:text-lg leading-relaxed"
                style={{ color: C.mutedL, animationDelay: '0.95s' }}
              >
                Mantenciones y cambios de aceite en {BIZ.address}: acá
                te explican con detalle, te muestran los arreglos y tu
                auto queda con registro.
              </p>
              <div className="fry-sube mt-7 flex flex-col sm:flex-row sm:items-center gap-4" style={{ animationDelay: '1.1s' }}>
                <Btn href={WA_LINK} tone="rojo">
                  Agendar por WhatsApp
                </Btn>
                <a
                  href="#ficha"
                  className="tap-44 inline-flex items-center text-sm font-semibold underline underline-offset-4 decoration-2"
                  style={{ color: C.tinta, textDecorationColor: 'rgba(27,84,204,0.45)' }}
                >
                  Ver la ficha completa
                </a>
              </div>
            </div>

            {/* La foto sobre el elevador: el contenido sube dentro del marco */}
            <figure className="fry-sube relative" style={{ animationDelay: '0.35s' }}>
              <div className="relative border-2" style={{ borderColor: C.tinta, backgroundColor: C.carbon }}>
                <div className="relative overflow-hidden aspect-[16/10]">
                  <div className="fry-elevador absolute inset-x-0 top-0 h-[115%]">
                    <Image
                      src={`${IMG}/elevador.webp`}
                      alt="Camioneta azul sobre el elevador rojo de Serviteca Fry, con la rueda delantera desmontada"
                      fill
                      priority
                      sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
                      className="object-cover"
                    />
                  </div>
                  {/* regla del elevador: marcas fijas, la aguja sube con la foto */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-y-0 left-0 w-[34px] flex flex-col justify-between py-2.5 px-1.5"
                    style={{ background: 'linear-gradient(90deg, rgba(22,25,31,0.72), transparent)' }}
                  >
                    {['1,8', '0,9', '0,0'].map((m) => (
                      <span key={m} className={`${mono.className} flex items-center gap-1 text-[8px] font-semibold tracking-wide`} style={{ color: 'rgba(240,237,228,0.85)' }}>
                        <span className="inline-block w-2 h-px" style={{ backgroundColor: 'rgba(240,237,228,0.85)' }} />
                        {m}
                      </span>
                    ))}
                    <span
                      className="fry-aguja absolute left-[30px] top-[calc(100%-14px)] w-0 h-0 border-y-[5px] border-y-transparent border-l-[7px]"
                      style={{ borderLeftColor: C.rojo }}
                    />
                  </div>
                </div>
                <figcaption
                  className={`${mono.className} flex items-center justify-between gap-3 px-3.5 py-2.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] border-t-2`}
                  style={{ borderColor: C.tinta, backgroundColor: C.ficha, color: C.mutedL }}
                >
                  <span className="flex items-center gap-2">
                    <span className="inline-block w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: C.rojo }} aria-hidden="true" />
                    Elevador en uso
                  </span>
                  <span>Foto 01</span>
                </figcaption>
              </div>
              <Sello className="absolute -top-4 right-3 md:right-5" delay="1.15s">
                A la vista
              </Sello>
            </figure>
          </div>
        </div>
        {/* pie de la ficha: los datos de siempre */}
        <div className="relative mt-10 md:mt-14 border-t-2" style={{ borderColor: C.tinta, backgroundColor: C.carbon }}>
          <div
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap gap-x-7 gap-y-1.5 text-[9px] md:text-[11px] font-semibold uppercase tracking-[0.18em]`}
            style={{ color: C.mutedD }}
          >
            <span>Lun a vie 8:30 a 18:30</span>
            <span>Sábado 9:00 a 13:00</span>
            <span className="hidden sm:inline">{BIZ.address}</span>
            <span style={{ color: '#8FB0EA' }}>{BIZ.city} · La Araucanía</span>
          </div>
        </div>
      </section>

      {/* ── F-01 · La ficha: lo que queda anotado ── */}
      <section id="ficha" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-9 lg:gap-16 items-start">
            <Reveal>
              <Rotulo n="F-01">Lo que queda anotado</Rotulo>
              <h2
                className={`${display.className} font-bold uppercase leading-[1.06] text-[clamp(1.6rem,6.4vw,3.4rem)]`}
                style={{ color: C.tinta }}
              >
                Tu auto sale
                <br />
                con ficha <span style={{ color: C.rojo }}>al día</span>
              </h2>
              <p className="mt-5 max-w-md text-sm md:text-base leading-relaxed" style={{ color: C.mutedL }}>
                Las opiniones lo repiten: acá nada se hace a
                escondidas. Antes de reparar te explican qué
                encontraron y al entregar te muestran el trabajo. Y
                cada visita suma en el registro que lleva su
                aplicación.
              </p>
              <div className="mt-8 hidden lg:block">
                <Sello delay="0.4s">Sin letra chica</Sello>
              </div>
            </Reveal>

            {/* La ficha misma: campos de formulario con respuestas */}
            <Reveal delay={120}>
              <div
                className="relative border-2 shadow-[8px_8px_0_rgba(25,28,33,0.9)]"
                style={{ borderColor: C.tinta, backgroundColor: C.ficha }}
              >
                <p
                  className={`${mono.className} flex items-center justify-between gap-3 px-4 md:px-6 py-3 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] border-b-2`}
                  style={{ borderColor: C.tinta, backgroundColor: C.tinta, color: C.papel }}
                >
                  <span>Registro del vehículo</span>
                  <span style={{ color: '#8FB0EA' }}>Serviteca Fry</span>
                </p>
                <dl>
                  {[
                    ['Motivo', 'Mantenciones y cambios de aceite'],
                    ['Al ingresar', 'Te explican con detalle qué encontraron'],
                    ['Al trabajar', 'Te muestran los arreglos'],
                    ['Materiales', 'Productos de buena calidad'],
                    ['Respaldo', 'Su aplicación lleva el registro de las mantenciones de tu auto'],
                  ].map(([k, v], i) => (
                    <Reveal key={k} delay={200 + i * 110}>
                      <div
                        className="grid grid-cols-[96px_minmax(0,1fr)] md:grid-cols-[130px_minmax(0,1fr)] gap-3 px-4 md:px-6 py-4 border-b border-dashed last:border-b-0"
                        style={{ borderColor: C.lineL }}
                      >
                        <dt className={`${mono.className} text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] pt-0.5`} style={{ color: C.azul }}>
                          {k}
                        </dt>
                        <dd className="text-sm md:text-[15px] leading-snug font-medium" style={{ color: C.tinta }}>
                          {v}
                        </dd>
                      </div>
                    </Reveal>
                  ))}
                </dl>
                <div className="absolute -bottom-4 right-4 md:right-6">
                  <Sello delay="0.9s">Al día</Sello>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── F-02 · El taller por dentro ── */}
      <section id="taller" className="scroll-mt-20" style={{ backgroundColor: C.carbon }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="F-02" dark>
              El taller por dentro
            </Rotulo>
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-14 items-end mb-9 md:mb-12">
              <h2
                className={`${display.className} font-bold uppercase leading-[1.06] text-[clamp(1.6rem,6.4vw,3.4rem)]`}
                style={{ color: C.papelD }}
              >
                Adentro,
                <br />
                <span style={{ color: '#8FB0EA' }}>todo a la vista</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedD }}>
                El galpón a un kilómetro y medio de Villarrica, camino
                a Licán Ray: equipos rojos, autos en el aire y el
                trabajo a la vista de quien entra.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <figure className="border" style={{ borderColor: C.lineD }}>
              <div className="relative aspect-[21/9] overflow-hidden">
                <Image
                  src={`${IMG}/taller.webp`}
                  alt="El taller Serviteca Fry por dentro: dos camionetas sobre los equipos rojos"
                  fill
                  sizes="(min-width: 1152px) 1120px, calc(100vw - 40px)"
                  className="object-cover"
                  style={{ objectPosition: '50% 55%' }}
                />
              </div>
              <figcaption
                className={`${mono.className} flex items-center justify-between gap-3 px-3.5 py-2.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em] border-t`}
                style={{ borderColor: C.lineD, color: C.mutedD2 }}
              >
                <span>Foto 02 · Panorámica</span>
                <span>Km 1,5 camino a Licán Ray</span>
              </figcaption>
            </figure>
          </Reveal>

          <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-3 gap-5 md:gap-6 mt-5 md:mt-6">
            {[
              {
                src: `${IMG}/elevador.webp`,
                pos: '76% 82%',
                alt: 'Detalle del disco de freno y el buje de la camioneta con la rueda desmontada',
                n: 'Foto 03',
                cap: 'La rueda afuera, el disco a la vista',
              },
              {
                src: `${IMG}/elevador.webp`,
                pos: '38% 96%',
                alt: 'El elevador rojo del taller sosteniendo la camioneta',
                n: 'Foto 04',
                cap: 'El equipo rojo que la levanta',
              },
              {
                src: `${IMG}/taller.webp`,
                pos: '74% 42%',
                alt: 'Una camioneta Toyota esperando su turno dentro del taller',
                n: 'Foto 05',
                cap: 'El siguiente de la fila',
              },
            ].map((f, i) => (
              <Reveal key={f.n} delay={140 + i * 110}>
                <figure className="border" style={{ borderColor: C.lineD }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, calc(100vw - 40px)"
                      className="object-cover"
                      style={{ objectPosition: f.pos }}
                    />
                  </div>
                  <figcaption
                    className={`${mono.className} px-3 py-2.5 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.16em] border-t`}
                    style={{ borderColor: C.lineD, color: C.mutedD2 }}
                  >
                    {f.n} · {f.cap}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── F-03 · Observaciones: lo que escribieron en Google ── */}
      <section id="opiniones" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Rotulo n="F-03">Observaciones</Rotulo>
            <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6 lg:gap-14 items-end mb-9 md:mb-12">
              <h2
                className={`${display.className} font-bold uppercase leading-[1.06] text-[clamp(1.6rem,6.4vw,3.4rem)]`}
                style={{ color: C.tinta }}
              >
                Lo que escribieron
                <br />
                <span style={{ color: C.azul }}>en Google</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end" style={{ color: C.mutedL }}>
                {BIZ.reviews} opiniones en la ficha pública del taller.
                Estas tres, textuales.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-5 md:gap-6">
            {OPINIONES.map((o, i) => (
              <Reveal key={o.author} delay={i * 120} className={i === 0 ? 'lg:col-span-2' : ''}>
                <figure
                  className="relative h-full border-2 p-5 md:p-7"
                  style={{
                    borderColor: C.tinta,
                    backgroundColor: i === 0 ? C.ficha : 'transparent',
                    boxShadow: i === 0 ? `6px 6px 0 ${C.azul}` : undefined,
                  }}
                >
                  <p
                    className={`${mono.className} text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-4`}
                    style={{ color: C.rojo }}
                  >
                    Obs-0{i + 1} · Reseña de Google
                  </p>
                  <blockquote
                    className={
                      i === 0
                        ? 'text-base md:text-xl leading-relaxed font-medium'
                        : 'text-sm md:text-base leading-relaxed'
                    }
                    style={{ color: C.tinta }}
                  >
                    “{o.text}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} mt-5 flex items-center gap-2.5 text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.18em]`}
                    style={{ color: C.mutedL }}
                  >
                    <span className="inline-block w-4 h-[2px]" style={{ backgroundColor: C.azul }} aria-hidden="true" />
                    {o.author}
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
              className={`${mono.className} mt-7 inline-flex items-center text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] underline underline-offset-4 decoration-2 tap-44`}
              style={{ color: C.azul, textDecorationColor: 'rgba(27,84,204,0.4)' }}
            >
              Ver la ficha en Google
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── F-04 · Cómo llegar ── */}
      <section id="contacto" className="scroll-mt-20" style={{ backgroundColor: C.papel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <Reveal>
            <Rotulo n="F-04">Cómo llegar</Rotulo>
            <h2
              className={`${display.className} font-bold uppercase leading-[1.08] text-[clamp(1.6rem,6.4vw,3.4rem)]`}
              style={{ color: C.tinta }}
            >
              Km 1,5,
              <br />
              <span style={{ color: C.azul }}>camino a Licán Ray</span>
            </h2>
            <dl className="mt-8 border-t-2" style={{ borderColor: C.tinta }}>
              <div className="flex items-start gap-4 border-b border-dashed py-4" style={{ borderColor: C.lineL }}>
                <Ic name="pin" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.azul }}>
                    Dirección
                  </dt>
                  <dd className="mt-1 text-sm md:text-base" style={{ color: C.tinta }}>
                    {BIZ.address}, {BIZ.city}, {BIZ.region}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed py-4" style={{ borderColor: C.lineL }}>
                <Ic name="reloj" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.azul }}>
                    Horario
                  </dt>
                  <dd className="mt-1 text-sm md:text-base" style={{ color: C.tinta }}>
                    {HORARIO.map((h) => (
                      <span key={h.dias} className="flex justify-between gap-6 max-w-[320px]">
                        <span>{h.dias}</span>
                        <span style={{ color: h.horas === 'Cerrado' ? C.mutedL : C.tinta }}>{h.horas}</span>
                      </span>
                    ))}
                  </dd>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-dashed py-4" style={{ borderColor: C.lineL }}>
                <Ic name="wa" className="w-[18px] h-[18px] mt-0.5 shrink-0" />
                <div className="min-w-0 flex-1">
                  <dt className={`${mono.className} text-[10px] font-bold uppercase tracking-[0.18em]`} style={{ color: C.azul }}>
                    WhatsApp
                  </dt>
                  <dd className="mt-1 text-sm md:text-base" style={{ color: C.tinta }}>
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap-44 underline underline-offset-4 decoration-2"
                      style={{ textDecorationColor: 'rgba(27,84,204,0.4)' }}
                    >
                      {BIZ.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            </dl>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Btn href={WA_LINK} tone="rojo">
                Agendar por WhatsApp
              </Btn>
              <Btn href={MAPS_URL} tone="lineL">
                Cómo llegar
              </Btn>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="relative border-2" style={{ borderColor: C.tinta, backgroundColor: C.ficha }}>
              <div className="relative aspect-[4/3]">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.address}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="absolute inset-0 block w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p
                className={`${mono.className} px-4 py-3 border-t-2 flex items-center justify-between gap-3 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.18em]`}
                style={{ borderColor: C.tinta, color: C.mutedL }}
              >
                <span>Cómo llegar</span>
                <span>{BIZ.city}</span>
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section style={{ backgroundColor: C.carbon }}>
        <div className="max-w-4xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <p
              className={`${mono.className} text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.24em] mb-6`}
              style={{ color: C.mutedD }}
            >
              <span className="inline-flex h-[16px] items-center px-1.5 font-bold mr-2 align-middle" style={{ backgroundColor: C.rojo, color: '#FFFFFF' }}>
                F-05
              </span>
              Agenda tu hora
            </p>
            <h2
              className={`${display.className} font-bold uppercase leading-[1.06] text-[clamp(1.7rem,7vw,3.8rem)]`}
              style={{ color: C.papelD }}
            >
              ¿Cuánto lleva tu auto
              <br />
              <span style={{ color: '#8FB0EA' }}>sin mantención?</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-sm md:text-base leading-relaxed" style={{ color: C.mutedD }}>
              Escríbenos por WhatsApp, cuéntanos qué necesita tu auto y
              agenda tu visita al taller.
            </p>
            <div className="mt-8">
              <Btn href={WA_LINK} tone="rojo">
                Agendar por WhatsApp
              </Btn>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#101318', color: C.papelD }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-5">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <p className={`${display.className} font-bold uppercase tracking-[0.05em] text-base leading-tight`}>
                Serviteca <span style={{ color: '#8FB0EA' }}>Fry</span>
              </p>
              <p className="text-xs mt-1" style={{ color: C.mutedD2 }}>
                {BIZ.rubro} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-sm" aria-label="Pie">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 inline-flex items-center" style={{ color: 'rgba(240,237,228,0.8)' }}>
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="border-t mt-4 pt-3" style={{ borderColor: C.lineD }}>
            <p className="text-[11px] leading-relaxed" style={{ color: C.mutedD2 }}>
              {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}. Sitio de ejemplo preparado por{' '}
              <a
                href={SITE.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: C.papelD }}
              >
                {SITE.name}
              </a>{' '}
              para {BIZ.name}.{' '}
              <a
                href={whatsappLink('contacto')}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold underline underline-offset-2 tap-44"
                style={{ color: '#8FB0EA' }}
              >
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
