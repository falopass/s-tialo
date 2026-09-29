import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, WA_LINK_RESERVA, SITE_URL, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «carta náutica de la costa» — el predio está en las
 * lomas sobre el Pacífico entre Pelluhue y Curanipe, así que la página se
 * lee como una carta de navegación: coordenadas en mono, registros
 * numerados, la línea del horizonte como motivo y el sol naranjo de su
 * logo como única mancha cálida. Gloock hace la letra de cartel
 * decimonónico; Karla el texto de a bordo; Space Mono los datos.
 */
const C = {
  paper: '#F6F0E2',
  soft: '#EAE1CB',
  ink: '#17303F',
  muted: '#5B6D77',
  navy: '#10303F',
  deep: '#0A1F2B',
  sun: '#D96E1E',
  foam: '#9CC5B8',
  line: 'rgba(16,48,63,0.22)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-lomas-de-sol',
  title: 'Cabañas Lomas de Sol — Cabañas sobre el mar en Pelluhue',
  description:
    'Cabañas en El Torreón, Pelluhue, camino a Curanipe: piscina, jacuzzi y terrazas mirando al Pacífico. Reserva directa por WhatsApp.',
  image: '/demos/cabanas-lomas-de-sol/hero.webp',
})

const NAV_LINKS = [
  { label: 'Cabañas', href: '#cabanas' },
  { label: 'El predio', href: '#predio' },
  { label: 'Agua y sol', href: '#aguaysol' },
  { label: 'Reservar', href: '#reservar' },
]

const CABANAS = [
  {
    reg: 'CAB·02',
    name: 'Para dos',
    src: `${IMG}/cab-2.webp`,
    alt: 'Dormitorio de madera con cama de dos plazas en una cabaña de Lomas de Sol',
    desc: 'Cabaña rústica con balcón privado, refrigerador y TV satelital. La pareja del predio.',
    price: '$50.000 la noche',
  },
  {
    reg: 'CAB·04',
    name: 'Familiar chica',
    src: `${IMG}/cab-4.webp`,
    alt: 'Cabaña de madera entre flores y arbustos en Lomas de Sol, Pelluhue',
    desc: 'Cocina equipada, microondas y asadera propia. Cuatro plazas entre madera y jardín.',
    price: '$60.000 la noche',
  },
  {
    reg: 'CAB·06',
    name: 'Sobre pilotes',
    src: `${IMG}/cab-6.webp`,
    alt: 'Cabaña levantada sobre pilotes de madera con termo solar en el techo, Lomas de Sol',
    desc: 'La de la loma: elevada sobre pilotes, con el termo solar al sol y la vista abierta.',
    price: '$70.000 la noche',
  },
  {
    reg: 'CAB·08',
    name: 'La grande',
    src: `${IMG}/cab-8.webp`,
    alt: 'Cabaña de madera de dos pisos para grupos en el predio de Lomas de Sol',
    desc: 'Para el grupo completo: hasta ocho personas, cocina full y terraza para el asado.',
    price: 'desde $100.000',
  },
]

const BITACORA = [
  {
    reg: 'REG·01',
    src: `${IMG}/lodge.webp`,
    alt: 'Casa principal de madera de Lomas de Sol sobre la loma, con cerco y jardín',
    title: 'La casa sobre la loma',
    desc: 'Madera, pilotes y escala: el edificio principal mira al mar desde el filo del cerro.',
  },
  {
    reg: 'REG·02',
    src: `${IMG}/mar.webp`,
    alt: 'Vista del océano Pacífico entre los árboles desde el predio de Lomas de Sol',
    title: 'El Pacífico al frente',
    desc: 'Entre Pelluhue y Curanipe la costa se abre entera: el mar se ve y se escucha desde el predio.',
  },
  {
    reg: 'REG·03',
    src: `${IMG}/cocina.webp`,
    alt: 'Cocina de madera equipada dentro de una cabaña de Lomas de Sol',
    title: 'Cocina de verdad',
    desc: 'Cada cabaña trae cocina equipada, refrigerador y loza: aquí se cocina, no solo se duerme.',
  },
  {
    reg: 'REG·04',
    src: `${IMG}/piscina.webp`,
    alt: 'Piscina del predio con el mar de fondo en Lomas de Sol, Pelluhue',
    title: 'La piscina sobre el mar',
    desc: 'La piscina va incluida con cada cabaña: borde de madera, sol de cara y el Pacífico detrás.',
  },
]

const AGUA_Y_SOL = [
  {
    name: 'Piscina del predio',
    price: 'incluida',
    desc: 'Con el arriendo de cualquier cabaña: acceso libre a la piscina, sin reserva ni cobro aparte.',
  },
  {
    name: 'Jacuzzi',
    price: '$50.000',
    desc: 'Sesión de dos horas, privada y agendada. Se agenda aparte de la estadía.',
  },
  {
    name: 'Terapias de relajo',
    price: '$15.000 – $25.000',
    desc: 'Biomagnetismo, reflexología podal, piedras calientes y relajación facial, 45 minutos o más.',
  },
]

const REGLAS = [
  { k: 'Medianoche', v: 'Después de las 12 la casa baja el volumen: nada de música estridente — manda el mar.' },
  { k: 'Marzo a noviembre', v: 'Fuera de temporada alta y feriados largos hay descuentos de hasta un 10%.' },
  { k: 'Energía solar', v: 'Nueve paneles con baterías alimentan el predio: la luz no se corta ni en la loma.' },
]

const TESTIMONIOS = [
  'Cabaña de madera con el mar al frente y la piscina encima del cerro. Se duerme escuchando el Pacífico.',
  'Pedimos el jacuzzi para la tarde y fue el mejor plan: dos horas de agua caliente con vista abierta.',
  'Llegamos con niños y había espacio para todo: piscina, asadera y calma. Volvemos en marzo con el descuento.',
]

// ── Piezas de la carta ─────────────────────────────────────

/** Rótulo de registro en mono con mojón de color. */
function Reg({
  children,
  color = C.sun,
  ink = C.muted,
}: {
  children: React.ReactNode
  color?: string
  ink?: string
}) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: ink }}
    >
      <span
        className="inline-block w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      />
      {children}
    </p>
  )
}

/** Ficha de coordenadas en mono, borde doble como carta náutica. */
function Coord({ light = false, children }: { light?: boolean; children: React.ReactNode }) {
  return (
    <p
      className={`${mono.className} inline-block text-[11px] md:text-xs font-bold tracking-[0.2em] uppercase px-4 py-2 border`}
      style={{
        color: light ? C.foam : C.navy,
        borderColor: light ? 'rgba(156,197,184,0.55)' : C.line,
        boxShadow: `inset 0 0 0 3px ${light ? 'rgba(156,197,184,0.14)' : 'rgba(16,48,63,0.07)'}`,
      }}
    >
      {children}
    </p>
  )
}

/** Aviso de Sitiazo en el flujo (no fijo): nunca tapa texto ni botones. */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: '#FFD60A' }}
          aria-hidden="true"
        />
        <span>
          Mockup preparado por{' '}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            Sitiazo
          </a>{' '}
          para {BIZ.name} — así se vería tu sitio.{' '}
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 tap-44"
          >
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function CabanasLomasDeSolPage() {
  return (
    <div
      className={`${body.className} lds min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`
        html { scroll-behavior: auto }
        .lds a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
      `}</style>

      <BlitzNav
        name="Lomas de Sol"
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(246,240,226,0.95)',
          ink: C.navy,
          line: C.line,
          btnBg: C.sun,
          btnInk: '#FFFFFF',
        }}
      />

      {/* ── Hero: la carta de la costa ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.deep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Piscina de madera de Lomas de Sol con el océano Pacífico de fondo, Pelluhue"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,31,43,0.45) 0%, rgba(10,31,43,0.12) 45%, rgba(10,31,43,0.72) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-10">
          <Reveal>
            <div
              className="max-w-xl px-6 md:px-9 py-8 md:py-10"
              style={{
                backgroundColor: C.paper,
                boxShadow: '0 30px 70px rgba(10,31,43,0.45), inset 0 0 0 1px rgba(16,48,63,0.15)',
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element -- logo real del negocio, ya optimizado en public/ */}
                <img
                  src={`${IMG}/logo.webp`}
                  alt="Logo de Cabañas Lomas de Sol"
                  className="h-11 w-auto"
                />
                <span
                  className="flex-1 border-t border-dashed"
                  style={{ borderColor: C.line }}
                  aria-hidden="true"
                />
              </div>
              <Reg>carta de costa · Pelluhue</Reg>
              <h1
                className={`${display.className} leading-[0.95] text-[clamp(2.9rem,10.5vw,5.8rem)] mb-5`}
                style={{ color: C.navy }}
              >
                Lomas
                <br />
                de <span style={{ color: C.sun }}>Sol</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
                Cabañas de madera en las lomas sobre el Pacífico, entre
                Pelluhue y Curanipe. Piscina con vista al mar, jacuzzi y el
                sol que le da nombre a la casa.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
                  style={{ backgroundColor: C.sun, color: '#FFF7EC' }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href="#cabanas"
                  className="font-bold text-sm px-7 py-3 border transition-colors hover:bg-[#EAE1CB] tap-44"
                  style={{ borderColor: C.navy, color: C.navy }}
                >
                  Ver las cabañas
                </a>
              </div>
            </div>
          </Reveal>
        </div>
        {/* rótulo de posición */}
        <div className="relative border-t" style={{ backgroundColor: C.deep, borderColor: 'rgba(156,197,184,0.25)' }}>
          <ul
            className={`${mono.className} max-w-6xl mx-auto px-5 md:px-8 py-3.5 flex flex-wrap justify-center gap-x-7 gap-y-1.5 text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-center`}
            style={{ color: C.foam }}
          >
            <li>35°48′ S · 72°35′ O</li>
            <li>El Torreón · camino a Curanipe</li>
            <li>2 km de la plaza de Pelluhue</li>
            <li>Piscina · Jacuzzi · Terrazas</li>
          </ul>
        </div>
      </section>

      {/* ── Registro de cabañas ── */}
      <section id="cabanas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Reg>registro de cabañas</Reg>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
            <h2
              className={`${display.className} text-4xl md:text-6xl leading-[1.0]`}
              style={{ color: C.navy }}
            >
              Cuatro tamaños,
              <br />
              <span style={{ color: C.sun }}>un mismo mar</span>
            </h2>
            <p className="text-sm max-w-sm leading-relaxed" style={{ color: C.muted }}>
              Tarifas publicadas por la casa por noche. En temporada baja —
              de marzo a noviembre — hay descuentos por correo y WhatsApp.
            </p>
          </div>
        </Reveal>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CABANAS.map((c, i) => (
            <li
              key={c.reg}
              className="group border"
              style={{ backgroundColor: '#FCF8EE', borderColor: C.line }}
            >
              <Reveal delay={i * 90} className="h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={c.src}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, calc(100vw - 2.5rem)"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <span
                    className={`${mono.className} absolute top-3 left-3 text-[10px] font-bold tracking-[0.22em] px-2.5 py-1`}
                    style={{ backgroundColor: 'rgba(10,31,43,0.82)', color: C.foam }}
                  >
                    {c.reg}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3
                    className={`${display.className} text-2xl leading-tight mb-2`}
                    style={{ color: C.navy }}
                  >
                    {c.name}
                  </h3>
                  <p className="text-[13px] leading-relaxed mb-5 flex-1" style={{ color: C.muted }}>
                    {c.desc}
                  </p>
                  <p
                    className={`${mono.className} text-sm font-bold tracking-[0.06em] border-t border-dashed pt-3.5`}
                    style={{ color: C.sun, borderColor: C.line }}
                  >
                    {c.price}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal delay={140}>
          <p className={`${mono.className} text-[11px] md:text-xs tracking-[0.14em] uppercase mt-6`} style={{ color: C.muted }}>
            Todas incluyen: piscina · zona wi-fi · tv satelital · asadera · estacionamiento junto a la cabaña
          </p>
        </Reveal>
      </section>

      {/* ── Bitácora del predio ── */}
      <section id="predio" className="scroll-mt-20 border-y" style={{ backgroundColor: C.soft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Reg>bitácora del predio</Reg>
            <h2
              className={`${display.className} text-4xl md:text-6xl leading-[1.0] mb-12 md:mb-16`}
              style={{ color: C.navy }}
            >
              El lugar,
              <br />
              <span style={{ color: C.sun }}>registrado</span>
            </h2>
          </Reveal>
          <ul className="space-y-10 md:space-y-14">
            {BITACORA.map((b, i) => (
              <li key={b.reg}>
                <Reveal delay={60}>
                  <div className={`grid md:grid-cols-12 gap-6 md:gap-10 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                    <div className="md:col-span-7 [direction:ltr]">
                      <div
                        className="relative overflow-hidden aspect-[16/10] border"
                        style={{ borderColor: C.line, backgroundColor: C.paper }}
                      >
                        <Image
                          src={b.src}
                          alt={b.alt}
                          fill
                          sizes="(min-width: 768px) 58vw, calc(100vw - 2.5rem)"
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5 [direction:ltr]">
                      <p className={`${mono.className} text-[11px] font-bold tracking-[0.24em] mb-3`} style={{ color: C.sun }}>
                        {b.reg}
                      </p>
                      <h3 className={`${display.className} text-2xl md:text-3xl leading-tight mb-3`} style={{ color: C.navy }}>
                        {b.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed max-w-md" style={{ color: C.muted }}>
                        {b.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Agua y sol ── */}
      <section id="aguaysol" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-16 items-start">
            <Reveal>
              <Reg ink={C.foam}>agua y sol</Reg>
              <h2
                className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`}
                style={{ color: '#F6F0E2' }}
              >
                El plan de
                <br />
                <span style={{ color: C.sun }}>la tarde</span>
              </h2>
              <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,240,226,0.78)' }}>
                La piscina va con la cabaña; el jacuzzi y las terapias se
                agendan aparte. Todo se coordina por el mismo WhatsApp.
              </p>
              <div className="relative overflow-hidden border" style={{ borderColor: 'rgba(156,197,184,0.35)' }}>
                <Image
                  src={`${IMG}/jacuzzi.webp`}
                  alt="Jacuzzi de madera al aire libre en Lomas de Sol"
                  width={1200}
                  height={900}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Reveal>
            <div>
              <ul className="space-y-4">
                {AGUA_Y_SOL.map((s, i) => (
                  <li key={s.name}>
                    <Reveal delay={i * 90}>
                      <div
                        className="border px-5 md:px-6 py-5"
                        style={{ borderColor: 'rgba(156,197,184,0.3)', backgroundColor: 'rgba(246,240,226,0.05)' }}
                      >
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                          <h3 className={`${display.className} text-xl md:text-2xl`} style={{ color: '#F6F0E2' }}>
                            {s.name}
                          </h3>
                          <span className={`${mono.className} text-sm font-bold whitespace-nowrap`} style={{ color: C.sun }}>
                            {s.price}
                          </span>
                        </div>
                        <p className="text-[13px] md:text-sm leading-relaxed" style={{ color: 'rgba(246,240,226,0.72)' }}>
                          {s.desc}
                        </p>
                      </div>
                    </Reveal>
                  </li>
                ))}
              </ul>
              <Reveal delay={200}>
                <p className={`${mono.className} text-[11px] tracking-[0.16em] uppercase mt-5`} style={{ color: 'rgba(156,197,184,0.85)' }}>
                  Valores publicados por la casa — se confirman al reservar
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── La casa manda + sol de verdad ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <Reg>la casa manda</Reg>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {REGLAS.map((r, i) => (
            <Reveal key={r.k} delay={i * 90}>
              <div
                className="h-full border-t-4 px-5 md:px-6 py-6"
                style={{ backgroundColor: '#FCF8EE', borderColor: C.sun, boxShadow: '0 4px 14px rgba(16,48,63,0.06)' }}
              >
                <p className={`${mono.className} text-[11px] font-bold uppercase tracking-[0.22em] mb-3`} style={{ color: C.navy }}>
                  {r.k}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: C.muted }}>
                  {r.v}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border border-dashed px-6 md:px-10 py-7" style={{ borderColor: C.line }}>
            <p className={`${display.className} text-2xl md:text-3xl leading-snug md:flex-1`} style={{ color: C.navy }}>
              “De $230 mil a $22 mil la cuenta de luz: los turistas notan el
              sistema limpio y es más seguro si se corta la luz.”
            </p>
            <p className={`${mono.className} text-[11px] tracking-[0.18em] uppercase shrink-0 md:max-w-[220px]`} style={{ color: C.muted }}>
              Jaime Beltrán, dueño — a la Subdere por los nueve paneles
              solares del predio
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── Lo que dicen (muestra) ── */}
      <section className="border-t" style={{ backgroundColor: C.soft, borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Reg>voces de la bitácora</Reg>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-12`} style={{ color: C.navy }}>
              El Pacífico <span style={{ color: C.sun }}>convence solo</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5">
            {TESTIMONIOS.map((t, i) => (
              <Reveal key={i} delay={i * 100}>
                <figure
                  className="h-full border px-5 md:px-6 py-6"
                  style={{ backgroundColor: '#FCF8EE', borderColor: C.line }}
                >
                  <blockquote className="text-[15px] leading-relaxed mb-5" style={{ color: C.ink }}>
                    “{t}”
                  </blockquote>
                  <figcaption
                    className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold border-t border-dashed pt-3`}
                    style={{ color: C.muted, borderColor: C.line }}
                  >
                    Reseña de muestra · al publicar van las reales
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reservar + mapa ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <Reg ink={C.foam}>reservas</Reg>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.05] mb-6`} style={{ color: '#F6F0E2' }}>
              Aparta tu cabaña
              <br />
              <span style={{ color: C.sun }}>por WhatsApp</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(246,240,226,0.78)' }}>
              Dinos cuántos son y las fechas: respondemos con disponibilidad
              y la tarifa del día. También puedes escribir al correo o pasar
              por el sitio de la casa.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href={WA_LINK_RESERVA}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3 transition-all hover:brightness-110 active:scale-95 tap-44"
                style={{ backgroundColor: C.sun, color: '#FFF7EC' }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-sm px-7 py-3 border transition-colors hover:bg-white/10 tap-44"
                style={{ borderColor: 'rgba(246,240,226,0.5)', color: '#F6F0E2' }}
              >
                {BIZ.site}
              </a>
            </div>
            <Coord light>
              {BIZ.address} · {BIZ.addressNote}
            </Coord>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="overflow-hidden border min-h-[260px]"
              style={{ borderColor: 'rgba(156,197,184,0.3)' }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4 text-sm font-bold">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.foam, textDecorationColor: 'rgba(156,197,184,0.4)' }}
              >
                Cómo llegar →
              </a>
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.foam, textDecorationColor: 'rgba(156,197,184,0.4)' }}
              >
                Llamar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deep, color: '#F6F0E2' }}>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-8 border-t flex flex-col md:flex-row md:items-end justify-between gap-5"
          style={{ borderColor: 'rgba(246,240,226,0.14)' }}
        >
          <div>
            <p className={`${display.className} text-2xl mb-2`}>{BIZ.name}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,240,226,0.65)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
              {' · '}
              <a href={`mailto:${BIZ.email}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.email}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,240,226,0.65)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(246,240,226,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(246,240,226,0.72)' }}>
            Las fotos, tarifas, dirección, teléfono y servicios son reales —
            salen del sitio de la casa; las reseñas marcadas son de muestra.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
