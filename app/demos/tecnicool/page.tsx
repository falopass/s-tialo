import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  WA_LINK_COTIZA,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'

const display = localFont({
  src: [
    { path: '../../fonts/outfit/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

const C = {
  paper: '#F7FAF9',
  card: '#FFFFFF',
  ink: '#123B33',
  muted: '#4F6B63',
  line: 'rgba(18,59,51,0.14)',
  teal: '#0E7C6B',
  tealDeep: '#0A6355',
  tealSoft: '#E1F0EC',
  tealMist: '#7FD4C4',
  deep: '#123B33',
  deepInk: '#0C2A24',
  amber: '#F2A33C',
}

export const metadata: Metadata = demoMetadata({
  slug: 'tecnicool',
  title: 'Tecnicool — Climatización y refrigeración en Puerto Montt',
  description:
    'Instalación, mantención y reparación de climatización y refrigeración en C. Francisco Bilbao 85, Puerto Montt. Agenda por WhatsApp.',
  image: '/demos/tecnicool/hero.webp',
})

const NAV_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'El trabajo', href: '#trabajo' },
  { label: 'Dónde', href: '#donde' },
]

const MARQUEE = ['Puerto Montt', 'Instalación', 'Mantención']

const SERVICIOS = [
  {
    n: '01',
    name: 'Instalación',
    desc: 'Aire acondicionado y refrigeración para tu casa, oficina o local: revisamos el espacio, montamos con terminaciones limpias y probamos el equipo antes de irnos.',
    dato: 'Casas y negocios',
  },
  {
    n: '02',
    name: 'Mantención',
    desc: 'Limpieza de filtros, revisión del sistema y puesta a punto, para que el equipo rinda parejo y dure más años.',
    dato: 'Preventiva, agendada',
  },
  {
    n: '03',
    name: 'Reparación',
    desc: 'Diagnóstico de fallas en climatización y refrigeración, y reparación con los repuestos que correspondan.',
    dato: 'Climatización y frío',
  },
]

const OFICIO = [
  'Instalaciones con terminaciones limpias, sin cables a la vista',
  'Te explicamos qué se hizo y cómo cuidar el equipo',
  'Atención directa por WhatsApp, de tú a tú',
  `${BIZ.rating} de 5 en Google con ${BIZ.reviews} opiniones`,
]

function WaveMark({
  className = 'w-6 h-3',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 24 12"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M1 8 C 5 3, 8 3, 12 7 S 19 11, 23 6" />
    </svg>
  )
}

function AirMark({
  className = 'w-7 h-7',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M3 7.5 C 7 4, 11 4, 14 6.5 S 19.5 10, 21 8.5" />
      <path d="M3 12.5 C 7 9, 11 9, 14 11.5 S 19.5 15, 21 13.5" />
      <path d="M3 17.5 C 6 15, 9 15, 12 16.5 S 17 19.5, 19 18.5" />
    </svg>
  )
}

function Check({
  className = 'w-4 h-4',
  color = 'currentColor',
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 12.5 L9.5 18 L20 6.5" />
    </svg>
  )
}

function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode
  light?: boolean
}) {
  return (
    <p
      className="text-[11px] font-semibold uppercase tracking-[0.24em] mb-4 flex items-center gap-3"
      style={{ color: light ? 'rgba(247,250,249,0.78)' : C.tealDeep }}
    >
      <WaveMark color={light ? C.amber : C.tealDeep} />
      {children}
    </p>
  )
}

export default function TecnicoolPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.paper, color: C.ink }}
    >
      <style>{`html { scroll-behavior: auto }`}</style>
      {/* Velo oscuro detrás del nav: el texto blanco va sobre la foto del hero */}
      <div
        className="fixed top-0 inset-x-0 z-40 h-[60px] md:h-[68px]"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(12,42,36,0.82) 0%, rgba(12,42,36,0.55) 100%)',
        }}
      >
        <BlitzNav
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="WhatsApp"
          theme={{
            over: 'dark',
            bar: 'rgba(247,250,249,0.94)',
            ink: C.ink,
            line: C.line,
            btnBg: C.teal,
            btnInk: '#FFFFFF',
          }}
        />
      </div>

      {/* ── Hero a sangre con corrientes de aire ── */}
      <section
        id="inicio"
        className="relative min-h-svh flex flex-col justify-end overflow-hidden"
        style={{ backgroundColor: C.deep }}
      >
        <Image
          src={`${IMG}/hero.webp`}
          alt="Equipo de climatización instalado por Tecnicool en Puerto Montt"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,59,51,0.62) 0%, rgba(18,59,51,0.18) 42%, rgba(18,59,51,0.9) 100%)',
          }}
        />
        {/* Corrientes de aire: se dibujan al cargar y siguen ondulando suaves */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g className="tc-sway">
            <path
              className="tc-draw"
              pathLength={1}
              d="M -60 640 C 260 560, 460 720, 760 620 S 1240 500, 1520 590"
              fill="none"
              stroke="rgba(255,255,255,0.5)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <g className="tc-sway tc-s2">
            <path
              className="tc-draw tc-d2"
              pathLength={1}
              d="M -60 710 C 320 640, 560 770, 900 670 S 1350 560, 1520 640"
              fill="none"
              stroke={C.tealMist}
              strokeOpacity="0.65"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g className="tc-sway tc-s3">
            <path
              className="tc-draw tc-d3"
              pathLength={1}
              d="M -60 510 C 300 450, 620 580, 960 495 S 1330 395, 1520 465"
              fill="none"
              stroke={C.amber}
              strokeOpacity="0.5"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
          <g className="tc-sway tc-s4">
            <path
              className="tc-draw tc-d4"
              pathLength={1}
              d="M -60 780 C 280 730, 520 820, 860 745 S 1280 660, 1520 725"
              fill="none"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-36">
          {/* pr reserva la franja de la burbuja flotante de WhatsApp */}
          <Reveal className="pr-20 md:pr-28">
            <Eyebrow light>Puerto Montt · Climatización</Eyebrow>
            <h1
              className={`${display.className} font-semibold leading-[1.02] text-[clamp(2.6rem,9vw,5.5rem)] mb-6`}
              style={{ color: C.paper }}
            >
              El aire de tu casa o negocio,{' '}
              <span style={{ color: C.amber }}>en orden.</span>
            </h1>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl mb-9"
              style={{ color: 'rgba(247,250,249,0.88)' }}
            >
              Tecnicool instala, mantiene y repara climatización y
              refrigeración en {BIZ.city}. Nos escribes por WhatsApp y lo
              dejamos funcionando.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold tracking-[0.01em] text-sm md:text-base px-7 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.amber, color: C.deepInk }}
              >
                Agendar por WhatsApp
              </a>
              <a
                href="#servicios"
                className={`${display.className} font-semibold tracking-[0.01em] text-sm md:text-base px-7 py-3 rounded-full border-2 transition-all hover:bg-white/10 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: 'rgba(247,250,249,0.55)', color: C.paper }}
              >
                Ver servicios
              </a>
            </div>
          </Reveal>
        </div>
        {/* barra de datos al pie del hero */}
        <div
          className="relative border-t"
          style={{
            borderColor: 'rgba(247,250,249,0.22)',
            backgroundColor: 'rgba(12,42,36,0.8)',
            backdropFilter: 'blur(6px)',
          }}
        >
          <div
            className="max-w-6xl mx-auto pl-5 pr-20 md:pl-8 md:pr-8 py-4 flex flex-wrap gap-x-8 gap-y-1.5 text-[11px] md:text-xs font-medium uppercase tracking-[0.18em]"
            style={{ color: 'rgba(247,250,249,0.8)' }}
          >
            <span>
              {BIZ.address} · {BIZ.city}
            </span>
            <span className="flex items-center gap-2">
              <WaveMark className="w-5 h-2.5" color={C.tealMist} />
              aire limpio, trabajo prolijo
            </span>
            <span>
              {BIZ.rating} ★ en Google · {BIZ.reviews} opiniones
            </span>
            <span className="hidden md:inline" style={{ color: C.amber }}>
              sitio de ejemplo
            </span>
          </div>
        </div>
      </section>

      {/* ── Franja en bucle ── */}
      <div
        className="relative overflow-hidden"
        style={{ backgroundColor: C.teal }}
      >
        <div className="tc-marq flex w-max items-center gap-8 py-3.5 pl-8">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="flex items-center gap-8"
              aria-hidden={copy === 1}
            >
              {[...MARQUEE, ...MARQUEE, ...MARQUEE].map((item, i) => (
                <span
                  key={`${copy}-${i}`}
                  className="flex items-center gap-8"
                >
                  <span
                    className="text-[13px] md:text-sm font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
                    style={{ color: C.paper }}
                  >
                    {item}
                  </span>
                  <WaveMark
                    className="w-6 h-3 shrink-0"
                    color={C.tealMist}
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Servicios: entran empujados por la corriente ── */}
      <section
        id="servicios"
        className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24"
      >
        <Reveal>
          <Eyebrow>Servicios</Eyebrow>
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 md:gap-14 items-end mb-10 md:mb-14">
            <h2
              className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05]`}
              style={{ color: C.ink }}
            >
              Del montaje a la mantención,{' '}
              <span style={{ color: C.teal }}>todo en una mano</span>
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed max-w-sm lg:justify-self-end"
              style={{ color: C.muted }}
            >
              Climatización y refrigeración para casas y negocios de
              Puerto Montt. Lo que necesita tu aire, lo resolvemos por
              WhatsApp.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {SERVICIOS.map((s, i) => (
            <article
              key={s.n}
              className={`tc-card ${i === 1 ? 'tc-card2' : i === 2 ? 'tc-card3' : ''} rounded-[28px] border p-6 md:p-8 flex flex-col`}
              style={{ backgroundColor: C.card, borderColor: C.line }}
            >
              <div className="flex items-start justify-between mb-6">
                <span
                  className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: C.tealSoft }}
                >
                  <AirMark color={C.teal} />
                </span>
                <span
                  className={`${display.className} text-sm font-semibold`}
                  style={{ color: 'rgba(14,124,107,0.5)' }}
                >
                  {s.n}
                </span>
              </div>
              <h3
                className={`${display.className} font-semibold text-2xl md:text-[26px] leading-tight mb-2.5`}
                style={{ color: C.ink }}
              >
                {s.name}
              </h3>
              <p
                className="text-sm md:text-[15px] leading-relaxed mb-6"
                style={{ color: C.muted }}
              >
                {s.desc}
              </p>
              <p
                className="mt-auto pt-4 border-t text-[11px] font-semibold uppercase tracking-[0.16em] flex items-center gap-2.5"
                style={{ borderColor: C.line, color: C.teal }}
              >
                <WaveMark className="w-5 h-2.5" color={C.amber} />
                {s.dato}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── El oficio: fotos del trabajo ── */}
      <section
        id="trabajo"
        className="scroll-mt-20"
        style={{ backgroundColor: C.tealSoft }}
      >
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <div className="relative pb-14 pr-10 md:pr-16">
              <div className="relative rounded-[32px] overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/equipo.webp`}
                  alt="El equipo de Tecnicool trabajando en terreno"
                  fill
                  sizes="(min-width: 1024px) 46vw, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute bottom-0 right-0 w-[58%] aspect-square rounded-[28px] overflow-hidden border-4"
                style={{ borderColor: C.tealSoft }}
              >
                <Image
                  src={`${IMG}/instalacion.webp`}
                  alt="Instalación de climatización realizada por Tecnicool"
                  fill
                  sizes="(min-width: 1024px) 26vw, 56vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Eyebrow>El trabajo</Eyebrow>
            <h2
              className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`}
              style={{ color: C.ink }}
            >
              Oficio que se nota{' '}
              <span style={{ color: C.teal }}>en los detalles</span>
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed mb-7 max-w-md"
              style={{ color: C.muted }}
            >
              En climatización la diferencia está en cómo queda el
              trabajo: un equipo bien instalado enfría parejo, gasta
              menos y no da problemas al año siguiente.
            </p>
            <ul className="space-y-3 mb-8">
              {OFICIO.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm md:text-base"
                  style={{ color: C.ink }}
                >
                  <Check className="w-4 h-4 shrink-0" color={C.tealDeep} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
              style={{ color: C.tealDeep, textDecorationColor: 'rgba(10,99,85,0.35)' }}
            >
              Ver el trabajo en Instagram @{BIZ.instagram} →
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Confianza: la nota de Google ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-center">
          <Reveal>
            <Eyebrow light>Confianza</Eyebrow>
            <p
              className={`${display.className} font-semibold leading-none text-[clamp(4.5rem,18vw,8rem)] mb-4`}
              style={{ color: C.paper }}
            >
              {BIZ.rating}
            </p>
            <div className="mb-4">
              <Stars value={5} color={C.amber} size={22} />
            </div>
            <p
              className="text-sm md:text-base leading-relaxed max-w-xs mb-6"
              style={{ color: 'rgba(247,250,249,0.82)' }}
            >
              {BIZ.reviews} opiniones en Google. Cada cliente que
              comenta confirma lo mismo: trabajo limpio y trato cercano.
            </p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs md:text-sm font-semibold underline underline-offset-4 decoration-2 transition-all hover:decoration-[3px] focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
              style={{ color: C.amber, textDecorationColor: 'rgba(242,163,60,0.4)' }}
            >
              Ver la ficha en Google →
            </a>
          </Reveal>
          <Reveal delay={120}>
            <div className="relative rounded-[32px] overflow-hidden aspect-[16/11]">
              <Image
                src={`${IMG}/detalle.webp`}
                alt="Detalle del trabajo de climatización realizado por Tecnicool"
                fill
                sizes="(min-width: 1024px) 52vw, calc(100vw - 40px)"
                className="object-cover"
              />
              <div
                className="absolute inset-x-0 bottom-0 px-5 md:px-7 pb-5 pt-14 flex items-end justify-between gap-3"
                style={{
                  background:
                    'linear-gradient(180deg, rgba(18,59,51,0) 0%, rgba(12,42,36,0.85) 100%)',
                }}
              >
                <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: C.paper }}>
                  Trabajo Tecnicool
                </p>
                <WaveMark className="w-6 h-3 shrink-0" color={C.amber} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dónde estamos ── */}
      <section
        id="donde"
        className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Dónde estamos</Eyebrow>
            <h2
              className={`${display.className} font-semibold text-4xl md:text-5xl leading-[1.05] mb-6`}
              style={{ color: C.ink }}
            >
              En pleno{' '}
              <span style={{ color: C.teal }}>{BIZ.city}</span>
            </h2>
            <address
              className="not-italic text-sm md:text-base leading-relaxed mb-7"
              style={{ color: C.muted }}
            >
              {BIZ.address}
              <br />
              {BIZ.city}, {BIZ.region}, Chile
            </address>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ backgroundColor: C.teal, color: '#FFFFFF' }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-semibold text-sm px-6 py-3 rounded-full border-2 transition-all hover:-translate-y-0.5 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
                style={{ borderColor: C.teal, color: C.teal }}
              >
                Cómo llegar →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div
              className="rounded-[28px] border overflow-hidden min-h-[320px] h-full"
              style={{ borderColor: C.line, backgroundColor: C.tealSoft }}
            >
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cierre ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.teal }}>
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[55%]"
          viewBox="0 0 1440 400"
          preserveAspectRatio="xMidYMax slice"
          aria-hidden="true"
        >
          <g className="tc-sway tc-s2">
            <path
              pathLength={1}
              d="M -60 240 C 300 170, 560 300, 920 220 S 1360 120, 1520 190"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </g>
          <g className="tc-sway tc-s4">
            <path
              pathLength={1}
              d="M -60 320 C 320 260, 600 370, 980 300 S 1400 210, 1520 280"
              fill="none"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </g>
        </svg>
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <h2
              className={`${display.className} font-semibold text-[clamp(2.1rem,6.5vw,3.8rem)] leading-[1.05] mb-6`}
              style={{ color: C.paper }}
            >
              Cuéntanos qué necesita tu aire
            </h2>
            <p
              className="text-sm md:text-base max-w-md mx-auto mb-4 leading-relaxed"
              style={{ color: 'rgba(247,250,249,0.85)' }}
            >
              Escríbenos por WhatsApp, cuéntanos qué equipo tienes o qué
              quieres instalar, y agendamos la visita.
            </p>
            <p
              className={`${display.className} font-semibold text-lg md:text-xl mb-9`}
              style={{ color: C.paper }}
            >
              <a
                href={`tel:${BIZ.phoneTel}`}
                className="underline underline-offset-4 decoration-1 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44"
              >
                {BIZ.phoneDisplay}
              </a>
            </p>
            <a
              href={WA_LINK_COTIZA}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} font-semibold inline-block text-sm md:text-base px-8 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:brightness-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 tap-44`}
              style={{ backgroundColor: C.amber, color: C.deepInk }}
            >
              Cotizar por WhatsApp
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.deepInk, color: C.paper }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <p
              className={`${display.className} font-semibold text-xl mb-1 flex items-center gap-2.5`}
            >
              <WaveMark className="w-6 h-3" color={C.amber} />
              {BIZ.name}
            </p>
            <address
              className="not-italic text-xs leading-relaxed"
              style={{ color: 'rgba(247,250,249,0.8)' }}
            >
              {BIZ.rubro} · {BIZ.address} · {BIZ.city}, {BIZ.region}
            </address>
          </div>
          <div
            className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs"
            style={{ color: 'rgba(247,250,249,0.8)' }}
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white focus-visible:text-white transition-colors tap-44"
              >
                {l.label}
              </a>
            ))}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white focus-visible:text-white transition-colors tap-44"
            >
              Instagram
            </a>
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(247,250,249,0.14)' }}>
          <p
            className="max-w-6xl mx-auto px-5 md:px-8 pt-3 pb-5 text-[11px] leading-snug"
            style={{ color: 'rgba(247,250,249,0.8)' }}
          >
            Mockup preparado por{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.amber }}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}: así se vería tu sitio. Nombre, dirección,
            WhatsApp, fotos y la nota de Google son datos públicos del
            negocio.{' '}
            <a
              href={whatsappLink('contacto')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold underline underline-offset-2 tap-44"
              style={{ color: C.amber }}
            >
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />

      <style>{`
        .tc-draw { stroke-dasharray: 1; stroke-dashoffset: 1; animation: tc-draw 1.9s cubic-bezier(.4,0,.2,1) forwards; }
        .tc-d2 { animation-delay: .35s; }
        .tc-d3 { animation-delay: .7s; }
        .tc-d4 { animation-delay: 1.05s; }
        @keyframes tc-draw { to { stroke-dashoffset: 0; } }
        .tc-sway { animation: tc-sway 7s ease-in-out infinite alternate; }
        .tc-s2 { animation-duration: 9s; animation-delay: -2s; }
        .tc-s3 { animation-duration: 11s; animation-delay: -4s; }
        .tc-s4 { animation-duration: 8s; animation-delay: -1.5s; }
        @keyframes tc-sway { from { transform: translateX(-14px); } to { transform: translateX(14px); } }
        .tc-marq { animation: tc-marq 24s linear infinite; }
        @keyframes tc-marq { to { transform: translateX(-50%); } }
        @keyframes tc-in { from { opacity: 0; transform: translateX(44px); } to { opacity: 1; transform: none; } }
        @supports (animation-timeline: view()) {
          .tc-card { animation: tc-in linear both; animation-timeline: view(); animation-range: entry 0% entry 55%; }
          .tc-card2 { animation-range: entry 6% entry 61%; }
          .tc-card3 { animation-range: entry 12% entry 67%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tc-draw, .tc-d2, .tc-d3, .tc-d4 { animation: none; stroke-dashoffset: 0; }
          .tc-sway, .tc-s2, .tc-s3, .tc-s4 { animation: none; }
          .tc-marq { animation: none; }
          .tc-card, .tc-card2, .tc-card3 { animation: none; }
        }
      `}</style>
    </div>
  )
}
