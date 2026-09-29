import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [
    { path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
  ],
})
const italic = localFont({
  src: [
    { path: '../../fonts/instrument-serif/italic-400.woff2', weight: '400', style: 'italic' },
    { path: '../../fonts/instrument-serif/normal-400.woff2', weight: '400', style: 'normal' },
  ],
})
const body = localFont({
  src: [
    { path: '../../fonts/inter/normal-100-900.woff2', weight: '100 900', style: 'normal' },
  ],
})

/**
 * Identidad tomada de los activos reales del café: el logo es un
 * emblema negro con la torre Eiffel y "LA FRANCESA CAFETERIA" en
 * romanas; el local es muro grafito, toldo negro y madera. La página
 * es un cuaderno editorial — papel, tinta y caramelo — con tarjetas
 * rotadas, cintas adhesivas y la Eiffel dibujada a línea como motivo.
 */
const C = {
  tinta: '#1D1712',
  papel: '#F6F1E7',
  hoja: '#E9DFC9',
  caramelo: '#82561F',
  ink: '#29221B',
  muted: '#6B5D4A',
}

const PAPER = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='240'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 .30 0 0 0 0 .22 0 0 0 0 .13 0 0 0 .1 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`

const TAPE_CLIP =
  'polygon(3% 0, 97% 5%, 100% 28%, 96% 52%, 100% 78%, 97% 100%, 2% 95%, 0 72%, 4% 48%, 0 22%)'

const TILT = 'motion-safe:transition-transform motion-safe:duration-500 hover:rotate-0'

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#82561F]'

export const metadata: Metadata = demoMetadata({
  slug: 'cafe-la-francesa',
  title: 'Café La Francesa - Cafetería en Linares',
  description: 'Cafetería en Manuel Rodriguez 552, Linares, al costado de la Plaza de Armas: café, vitrina de confitería, sándwiches y terraza hasta la noche. 4.2 estrellas en Google.',
  image: '/demos/cafe-la-francesa/hero.webp',
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'El café', href: '#nosotros' },
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Cómo llegar', href: '#contacto' },
]

/** Ítems reales: todos aparecen en las fotos de su ficha o los nombran las reseñas. */
const MARQUEE = [
  'espresso',
  'cortado',
  'capuchino',
  'frappuccino',
  'café helado',
  'té chai',
  'pie de limón',
  'kuchen',
  'cheesecake',
  'sándwich tostado',
  'once',
  'pisco sour',
]

const CARTA = [
  {
    src: `${IMG}/terraza.webp`,
    alt: 'Latte frío con anís estrellado y frappuccino servidos en la terraza del café, sobre el individual de La Francesa',
    title: 'Cafés y frappuccinos',
    lead: 'De la barra salen el espresso cortito, el latte en capas y los frappuccinos que se ven en su terraza.',
    items: ['Espresso y cortado', 'Capuchino y latte', 'Frappuccino y café helado', 'Té chai e infusiones'],
    tilt: '-rotate-2',
    tape: 'bg-[#E9DFC9]/90 -top-3 left-1/2 -translate-x-1/2 -rotate-3',
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Brownie, copa de helado y bebida fría sobre la mesa con el individual impreso de La Francesa',
    title: 'Tortas y dulces',
    lead: 'El pie de limón y el kuchen son los que más nombran las reseñas; la vitrina se repone durante el día.',
    items: ['Pie de limón y kuchen', 'Cheesecake', 'Brownie a la francesa', 'Helados'],
    tilt: 'rotate-[1.5deg] md:mt-12',
    tape: 'bg-[#F0E4CC]/95 -top-3 left-6 rotate-[-6deg]',
  },
  {
    src: `${IMG}/tostado.webp`,
    alt: 'Sándwich tostado con pollo y palta servido en bandeja negra sobre la mesa de madera',
    title: 'Salado y para compartir',
    lead: 'Desayunos, sándwiches tostados y picoteos para la colación o la once larga.',
    items: ['Sándwich tostado', 'Desayunos y paila de huevos', 'Para compartir', 'Jugos y bebidas'],
    tilt: '-rotate-1 md:mt-4',
    tape: 'bg-[#E9DFC9]/90 -top-3 right-6 rotate-[5deg]',
  },
]

const RESENAS = [
  {
    text: 'La atención fue excelente y los productos, de muy buena calidad. El café estaba realmente rico. Sin duda, un lugar para volver.',
    author: 'Marco Cofré',
    stars: '5 estrellas',
    bg: C.hoja,
    tilt: '-rotate-2',
  },
  {
    text: 'El local es muy lindo y el personal muy amable; el brownie que pedimos para compartir estaba rico.',
    author: 'Valeria',
    stars: '4 estrellas',
    bg: '#F0E4CC',
    tilt: 'rotate-2 md:mt-8',
  },
  {
    text: 'Muy buen local, bien cuidado y con buena variedad de pasteles y comidas para compartir. Recomendable.',
    author: 'Rodrigo Zamora',
    stars: '5 estrellas',
    bg: '#FFFFFF',
    tilt: '-rotate-1 md:mt-3',
  },
]

const INTERIOR = [
  {
    src: `${IMG}/interior.webp`,
    alt: 'Salón del café con piso de madera, sillas oscuras y luz de tarde',
    cls: 'md:mt-8',
  },
  {
    src: `${IMG}/vitrina.webp`,
    alt: 'Estantes de panes y productos de la casa dentro del local',
    cls: '',
  },
  {
    src: `${IMG}/helados.webp`,
    alt: 'Mesa de helados del café con cubetas de distintos sabores',
    cls: 'md:mt-14',
  },
  {
    src: `${IMG}/espresso.webp`,
    alt: 'Espresso servido en taza blanca sobre el individual con la torre Eiffel de La Francesa',
    cls: 'md:mt-5',
  },
]

const PIZARRA = [
  {
    title: 'De la barra',
    rows: ['Espresso y cortado', 'Capuchino y latte', 'Frappuccino y café helado', 'Té chai', 'Chocolate caliente'],
  },
  {
    title: 'De la vitrina y la cocina',
    rows: ['Pie de limón', 'Kuchen y cheesecake', 'Brownie a la francesa', 'Sándwich tostado', 'Desayuno y once'],
  },
]

function Tape({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute z-10 h-7 w-24 md:w-28 ${className}`}
      style={{ clipPath: TAPE_CLIP }}
    />
  )
}

function Bean({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} fill="none" aria-hidden="true">
      <ellipse
        cx="22"
        cy="22"
        rx="13"
        ry="18"
        transform="rotate(28 22 22)"
        fill={C.hoja}
        stroke={C.caramelo}
        strokeWidth="2.2"
      />
      <path
        d="M13 33 C 18 26, 22 20, 31 10"
        stroke={C.caramelo}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** La torre Eiffel del logo real, dibujada a línea. */
function Eiffel({ className = '', stroke = C.caramelo }: { className?: string; stroke?: string }) {
  return (
    <svg
      viewBox="0 0 40 56"
      className={className}
      fill="none"
      stroke={stroke}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 3 C17 12 15 20 13 28 C11.5 34 11 38 10.5 41 C8 46 6 50 5 54" />
      <path d="M20 3 C23 12 25 20 27 28 C28.5 34 29 38 29.5 41 C32 46 34 50 35 54" />
      <path d="M13 28 L27 28" />
      <path d="M10.5 41 L29.5 41" />
      <path d="M13 54 C14.5 46 25.5 46 27 54" />
      <path d="M20 3 L20 8" />
    </svg>
  )
}

function Cup({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 52 50"
      className={className}
      fill="none"
      stroke={C.caramelo}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 21 h30 v9 a13 13 0 0 1 -13 13 h-4 a13 13 0 0 1 -13 -13 z" fill={C.papel} />
      <path d="M38 24 a6.5 6.5 0 0 1 0 13" />
      <path d="M18 15 c-3 -4 3 -6 0 -10 M27 15 c-3 -4 3 -6 0 -10" />
      <path d="M4 47 h40" />
    </svg>
  )
}

function Squiggle({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 12" className={className} fill="none" preserveAspectRatio="none" aria-hidden="true">
      <path d="M2 8 C 30 2, 60 12, 92 6 S 150 3, 198 8" stroke={C.caramelo} strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

function Arrow({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 40"
      className={className}
      fill="none"
      stroke={C.hoja}
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 34 C 18 8, 48 4, 72 18" />
      <path d="M62 9 L73 18 L60 25" />
    </svg>
  )
}

function WaIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    </svg>
  )
}

function Heading({ kicker, children, light = false }: { kicker: string; children: React.ReactNode; light?: boolean }) {
  return (
    <div className="max-w-2xl">
      <p
        className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3"
        style={{ color: light ? C.hoja : C.caramelo }}
      >
        {kicker}
      </p>
      <h2
        className={`${display.className} text-[clamp(2.4rem,6vw,4rem)] leading-[1] tracking-[-0.01em]`}
        style={{ color: light ? C.papel : C.tinta }}
      >
        {children}
      </h2>
      <Squiggle className="mt-3 h-3 w-40 md:w-52" />
    </div>
  )
}

export default function CafeLaFrancesaPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-hidden`}
      style={{ backgroundColor: C.papel, backgroundImage: PAPER, color: C.ink }}
    >
      <style>{`
        @keyframes lf-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .lf-marquee { animation: lf-marquee 38s linear infinite }
        @media (prefers-reduced-motion: reduce) { .lf-marquee { animation: none } }
      `}</style>

      {/* ── Hero a sangre: la fachada real del café ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de Café La Francesa en Manuel Rodriguez 552, Linares: muro grafito, toldo negro con el nombre y la entrada"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%]"
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              'linear-gradient(180deg, rgba(29,23,18,0.55) 0%, rgba(29,23,18,0.05) 22%, rgba(29,23,18,0.1) 55%, rgba(29,23,18,0.72) 100%)',
          }}
        />

        <header className="relative z-20 w-full max-w-[1300px] mx-auto px-5 md:px-10 pt-5 flex items-center justify-between gap-4">
          <a
            href="#inicio"
            className={`${FOCUS} relative -rotate-[0.8deg] p-1.5 shadow-md tap-44 flex items-center gap-2.5`}
            style={{ backgroundColor: C.papel, backgroundImage: PAPER }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img
              src={`${IMG}/logo.webp`}
              alt={BIZ.name}
              className="w-9 h-9 md:w-10 md:h-10 object-cover"
            />
            <span className={`${display.className} pr-3 text-lg md:text-xl leading-none`} style={{ color: C.tinta }}>
              {BIZ.name}
            </span>
          </a>
          <nav
            className="hidden md:flex items-center gap-7 px-6 py-2.5 rounded-full shadow-md"
            style={{ backgroundColor: 'rgba(29,23,18,0.9)' }}
            aria-label="Principal"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`${FOCUS} text-sm font-medium text-[#F6F1E7] underline-offset-4 decoration-2 hover:underline tap-44`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 rotate-2 inline-flex items-center gap-2 px-4 py-2 text-[13px] md:text-sm font-semibold rounded-full shadow-md tap-44`}
            style={{ backgroundColor: C.tinta, color: C.papel }}
          >
            <WaIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </header>

        <div className="relative z-10 mt-auto w-full max-w-[1300px] mx-auto px-5 md:px-10 pt-28 pb-16 md:pb-20">
          <div
            className={`relative max-w-[36rem] -rotate-2 ${TILT} p-7 md:p-10 shadow-[0_18px_40px_-12px_rgba(14,10,7,0.6)]`}
            style={{ backgroundColor: C.papel, backgroundImage: PAPER }}
          >
            <Tape className="bg-[#E9DFC9]/95 -top-3.5 left-10 -rotate-6" />
            <Tape className="bg-[#E9DFC9]/95 -top-3 right-8 rotate-[8deg] hidden sm:block" />
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-4" style={{ color: C.caramelo }}>
              Cafetería en {BIZ.city} · junto a la Plaza de Armas
            </p>
            <h1
              className={`${display.className} text-[clamp(2.7rem,8vw,4.6rem)] leading-[0.95] tracking-[-0.015em]`}
              style={{ color: C.tinta }}
            >
              Café de día y terraza{' '}
              <em className={`${italic.className} italic`} style={{ color: C.caramelo }}>
                hasta la noche
              </em>
            </h1>
            <p className="mt-5 text-[15px] md:text-base leading-relaxed" style={{ color: C.muted }}>
              Cafés, frappuccinos, vitrina de confitería y algo salado para
              acompañar, en {BIZ.address}, {BIZ.city}. Abierto todos los días.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm md:text-base font-semibold transition-transform active:scale-95 tap-44`}
                style={{ backgroundColor: C.tinta, color: C.papel }}
              >
                <WaIcon className="h-5 w-5" />
                Escribir por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${FOCUS} px-6 py-2.5 rounded-full text-sm md:text-base font-semibold border-2 transition-colors hover:bg-[#E9DFC9] tap-44`}
                style={{ borderColor: C.tinta, color: C.tinta }}
              >
                Ver la carta
              </a>
            </div>
            <div
              className="absolute right-1 -bottom-10 md:-right-16 md:-bottom-8 rotate-[10deg] w-[108px] h-[108px] md:w-[124px] md:h-[124px] rounded-full grid place-items-center text-center shadow-lg"
              style={{ backgroundColor: C.caramelo, color: C.papel }}
              aria-hidden="true"
            >
              <span className="absolute inset-[6px] rounded-full border-2 border-dashed border-[#F6F1E7]/60" aria-hidden="true" />
              <span className="leading-tight">
                <span className={`${display.className} block text-[2rem] md:text-[2.4rem] leading-none`}>
                  {BIZ.rating}★
                </span>
                <span className="block text-[10px] md:text-[11px] font-semibold uppercase tracking-[0.12em] mt-1">
                  {BIZ.reviews} reseñas
                  <br />
                  en Google
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cinta de la casa: lo que se pide acá ── */}
      <div className="relative overflow-hidden border-y-2" style={{ backgroundColor: C.tinta, borderColor: C.caramelo }}>
        <div className="lf-marquee flex w-max items-center gap-6 py-3.5 pl-6">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-6" aria-hidden={copy === 1}>
              {MARQUEE.map((item) => (
                <span key={`${copy}-${item}`} className="flex items-center gap-6">
                  <span
                    className="text-[13px] md:text-sm font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
                    style={{ color: C.papel }}
                  >
                    {item}
                  </span>
                  <Eiffel className="h-5 w-3.5 shrink-0" stroke={C.caramelo} />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La carta ── */}
      <section id="carta" className="relative scroll-mt-6">
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 pt-24 md:pt-32 pb-20 md:pb-28">
          <div className="flex items-end justify-between gap-6">
            <Reveal>
              <Heading kicker="Lo que sale de la barra">La carta de todos los días</Heading>
            </Reveal>
            <Cup className="hidden sm:block w-16 md:w-20 shrink-0 rotate-6" />
          </div>

          <div className="mt-14 md:mt-16 grid gap-12 md:gap-8 md:grid-cols-3 items-start">
            {CARTA.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <article
                  className={`relative ${c.tilt} ${TILT} bg-white p-3 pb-6 shadow-[0_14px_30px_-14px_rgba(41,34,27,0.5)]`}
                >
                  <Tape className={c.tape} />
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={c.src}
                      alt={c.alt}
                      fill
                      sizes="(min-width: 768px) 33vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className="px-2 pt-5">
                    <h3 className={`${display.className} text-[2rem] leading-none`} style={{ color: C.tinta }}>
                      {c.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: C.muted }}>
                      {c.lead}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {c.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5 text-[15px]">
                          <Bean className="h-4 w-4 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 md:mt-14 text-sm" style={{ color: C.muted }}>
            Fotos reales de su ficha de Google: la carta publicada lleva la
            lista oficial del café.
          </p>
        </div>
      </section>

      {/* ── Sobre el café ── */}
      <section id="nosotros" className="relative scroll-mt-6" style={{ backgroundColor: 'rgba(233,223,201,0.5)' }}>
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_1.05fr] gap-16 lg:gap-20 items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="relative max-w-[560px] mx-auto w-full">
              <figure className={`relative rotate-2 ${TILT} bg-white p-3 pb-12 shadow-[0_18px_36px_-14px_rgba(41,34,27,0.55)]`}>
                <Tape className="bg-[#F0E4CC]/95 -top-3 -left-6 -rotate-[30deg]" />
                <Tape className="bg-[#F0E4CC]/95 -top-3 -right-6 rotate-[30deg]" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Entrada de Café La Francesa con su toldo negro y una mesa en la vereda"
                    fill
                    sizes="(min-width: 1024px) 560px, calc(100vw - 2.5rem)"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`${italic.className} italic absolute bottom-3 left-0 right-0 text-center text-xl`}
                  style={{ color: C.muted }}
                >
                  {BIZ.address}, {BIZ.city}
                </figcaption>
              </figure>
              <Bean className="absolute -bottom-8 -left-4 w-16 -rotate-12" />
              <div
                className="absolute -top-8 right-4 md:-right-8 -rotate-6 px-4 py-2 text-sm font-semibold shadow-md"
                style={{ backgroundColor: C.tinta, color: C.papel }}
              >
                {BIZ.followers} seguidores en Facebook
              </div>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <Heading kicker="El café">El café de la familia Artus</Heading>
            <p className="mt-7 text-base md:text-[17px] leading-relaxed max-w-[36rem]" style={{ color: C.muted }}>
              {BIZ.name} es el proyecto &ldquo;coffee &amp; bar&rdquo; de la
              familia Artus, la misma detrás de la histórica Panadería La
              Francesa de {BIZ.city}: una cafetería de nivel de capital, sin
              salir de la ciudad.
            </p>
            <p className="mt-4 text-base md:text-[17px] leading-relaxed max-w-[36rem]" style={{ color: C.muted }}>
              De día entra por el café y la vitrina; cuando baja el sol, la
              terraza de arriba — con vista a la Plaza de Armas — pasa a
              tragos y tablas para compartir.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-[36rem]">
              <div className="px-4 py-3.5 border-2 -rotate-1" style={{ borderColor: C.tinta, backgroundColor: C.papel }}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: C.caramelo }}>
                  De día
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug" style={{ color: C.tinta }}>
                  Café, desayuno y la vitrina dulce
                </p>
              </div>
              <div className="px-4 py-3.5 rotate-1" style={{ backgroundColor: C.tinta }}>
                <p className="text-[10px] uppercase tracking-[0.18em] font-bold" style={{ color: C.hoja }}>
                  De noche
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug" style={{ color: C.papel }}>
                  Terraza, tragos y pisco sour
                </p>
              </div>
            </div>

            <div className="mt-10 grid sm:grid-cols-3 gap-5 items-start">
              {RESENAS.map((r) => (
                <figure
                  key={r.author}
                  className={`relative ${r.tilt} ${TILT} p-5 pt-6 shadow-[0_10px_20px_-10px_rgba(41,34,27,0.45)]`}
                  style={{ backgroundColor: r.bg }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full shadow"
                    style={{ backgroundColor: C.caramelo }}
                  />
                  <blockquote className={`${italic.className} italic text-[1.05rem] leading-snug`} style={{ color: C.ink }}>
                    “{r.text}”
                  </blockquote>
                  <figcaption className="mt-3 text-[11px] uppercase tracking-[0.12em] font-semibold" style={{ color: C.caramelo }}>
                    {r.author} · {r.stars} en Google
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.tinta, textDecorationColor: C.caramelo }}
              >
                Leer las {BIZ.reviews} reseñas en Google
              </a>
              <a
                href={BIZ.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${FOCUS} underline underline-offset-4 decoration-2 tap-44`}
                style={{ color: C.tinta, textDecorationColor: C.caramelo }}
              >
                Página de Facebook
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── El local por dentro: tira de fotos reales ── */}
      <section style={{ backgroundColor: C.tinta }}>
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 py-16 md:py-24">
          <Reveal>
            <div className="flex items-end justify-between gap-6 mb-8">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold" style={{ color: C.hoja }}>
                El local por dentro
              </p>
              <Eiffel className="h-10 w-7 shrink-0 rotate-3" stroke={C.hoja} />
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-start">
            {INTERIOR.map((f, i) => (
              <Reveal key={f.src} delay={i * 90}>
                <figure className={`relative aspect-[3/4] ${f.cls}`}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-6">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1.25fr_0.75fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div
              className={`relative -rotate-1 ${TILT} px-6 py-10 md:px-14 md:py-14 shadow-[0_18px_36px_-16px_rgba(41,34,27,0.5)]`}
              style={{
                backgroundColor: '#FFFFFF',
                backgroundImage:
                  'linear-gradient(90deg, transparent 38px, rgba(150,100,47,0.5) 38px, rgba(150,100,47,0.5) 40px, transparent 40px), repeating-linear-gradient(180deg, transparent 0, transparent 35px, rgba(29,23,18,0.14) 35px, rgba(29,23,18,0.14) 36px)',
              }}
            >
              <Tape className="bg-[#E9DFC9]/95 -top-3 left-12 -rotate-3" />
              <Tape className="bg-[#E9DFC9]/95 -bottom-3 right-12 rotate-3" />
              <span
                className="absolute top-6 right-5 md:top-10 md:right-10 rotate-[8deg] border-[3px] rounded-md px-3 py-1 text-xs md:text-sm font-bold uppercase tracking-[0.18em]"
                style={{ borderColor: C.caramelo, color: C.caramelo }}
              >
                Muestra
              </span>
              <div className="pl-6 md:pl-8">
                <p className="text-[11px] uppercase tracking-[0.2em] font-semibold mb-3" style={{ color: C.caramelo }}>
                  La pizarra del día
                </p>
                <h2
                  className={`${display.className} text-[clamp(2.2rem,5.5vw,3.6rem)] leading-[1] pr-24`}
                  style={{ color: C.tinta }}
                >
                  Lo que piden en Linares
                </h2>
                <p className="mt-4 max-w-[34rem] text-[15px] leading-relaxed" style={{ color: C.muted }}>
                  Ítems reales vistos en sus fotos y nombrados en las reseñas.
                  Los precios quedan por confirmar: al publicar va la carta
                  vigente del café.
                </p>

                <div className="mt-10 grid gap-10 md:gap-14 md:grid-cols-2">
                  {PIZARRA.map((g) => (
                    <div key={g.title}>
                      <h3 className={`${italic.className} italic text-[1.7rem] leading-none`} style={{ color: C.caramelo }}>
                        {g.title}
                      </h3>
                      <ul className="mt-4 space-y-2.5">
                        {g.rows.map((row) => (
                          <li key={row} className="flex items-center gap-2.5 text-[15px]">
                            <Bean className="h-4 w-4 shrink-0" />
                            {row}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <p className={`${italic.className} italic mt-9 text-lg`} style={{ color: C.tinta }}>
                  …y cuando cae la tarde, pisco sour y tragos en la terraza.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <figure className={`relative rotate-2 ${TILT} bg-white p-3 pb-12 shadow-[0_18px_36px_-14px_rgba(41,34,27,0.55)] max-w-[340px] mx-auto w-full`}>
              <Tape className="bg-[#F0E4CC]/95 -top-3 left-1/2 -translate-x-1/2 -rotate-2" />
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${IMG}/torta.webp`}
                  alt="Trozo de pie de limón servido sobre el individual impreso de La Francesa"
                  fill
                  sizes="(min-width: 1024px) 340px, calc(100vw - 2.5rem)"
                  className="object-cover"
                />
              </div>
              <figcaption
                className={`${italic.className} italic absolute bottom-3 left-0 right-0 text-center text-xl`}
                style={{ color: C.muted }}
              >
                el pie de limón de las reseñas
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Contacto y ubicación ── */}
      <section
        id="contacto"
        className="relative scroll-mt-6"
        style={{ backgroundColor: C.tinta, backgroundImage: PAPER }}
      >
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 py-20 md:py-28 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-20 items-center">
          <Reveal>
            <Heading kicker="Escríbenos o pasa a vernos" light>
              ¿Nos vemos a la hora del café?
            </Heading>
            <p className="mt-7 max-w-[32rem] text-base md:text-[17px] leading-relaxed" style={{ color: 'rgba(246,241,231,0.88)' }}>
              Consultas, pedidos para llevar o una torta para el cumpleaños:
              escríbenos por WhatsApp y te respondemos directo.
            </p>
            <div className="relative mt-9 inline-block">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="relative -rotate-1 inline-flex items-center gap-3 px-7 py-2.5 rounded-full text-base md:text-lg font-semibold shadow-[0_12px_24px_-10px_rgba(0,0,0,0.5)] transition-transform hover:rotate-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E7] tap-44"
                style={{ backgroundColor: C.papel, color: C.tinta }}
              >
                <WaIcon className="h-6 w-6" />
                Escribir por WhatsApp
              </a>
              <Arrow className="hidden sm:block absolute -right-24 -top-6 w-20 -scale-x-100" />
            </div>
            <address className="not-italic mt-10 space-y-2 text-base" style={{ color: 'rgba(246,241,231,0.92)' }}>
              <p>
                {BIZ.address}, {BIZ.city}, {BIZ.region}
              </p>
              <p>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="underline underline-offset-4 decoration-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E7] tap-44"
                >
                  {BIZ.phoneDisplay}
                </a>
              </p>
              <p className="text-sm" style={{ color: 'rgba(246,241,231,0.75)' }}>
                {BIZ.horarioSemana} · {BIZ.horarioSab}
                <br />
                {BIZ.horarioDom}
              </p>
            </address>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block text-sm font-semibold underline underline-offset-4 decoration-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F6F1E7] tap-44"
              style={{ color: C.hoja }}
            >
              Cómo llegar en Google Maps
            </a>
          </Reveal>

          <Reveal delay={140}>
            <div className={`relative rotate-[1.5deg] ${TILT} bg-white p-3 pb-10 shadow-[0_22px_40px_-16px_rgba(0,0,0,0.55)]`}>
              <Tape className="bg-[#F0E4CC]/95 -top-3 left-1/2 -translate-x-1/2 rotate-2" />
              <div className="h-[300px] md:h-[420px]">
                <LazyMap
                  title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                  src={MAPS_EMBED}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className={`${italic.className} italic absolute bottom-2.5 left-0 right-0 text-center text-lg`} style={{ color: C.muted }}>
                Al costado de la Plaza de Armas
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Franja Sitiazo ── */}
      <section className="relative" style={{ backgroundColor: C.hoja }}>
        <div aria-hidden="true" className="border-t-2 border-dashed" style={{ borderColor: C.tinta }} />
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm md:text-[15px] leading-relaxed" style={{ color: C.tinta }}>
            Sitio de ejemplo de{' '}
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${FOCUS} font-bold underline underline-offset-4 tap-44`}
            >
              Sitiazo
            </a>{' '}
            para {BIZ.name}. Así se vería su página publicada.
          </p>
          <a
            href={whatsappLink('contacto')}
            target="_blank"
            rel="noopener noreferrer"
            className={`${FOCUS} shrink-0 text-sm font-semibold underline underline-offset-4 tap-44`}
            style={{ color: C.tinta }}
          >
            ¿Lo hacemos realidad?
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.tinta, color: C.papel }}>
        <div className="max-w-[1300px] mx-auto px-5 md:px-10 pt-8 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo ya optimizado en public/ */}
            <img src={`${IMG}/logo.webp`} alt="" aria-hidden="true" className="w-10 h-10 object-cover" />
            <div>
              <p className={`${display.className} text-2xl mb-1`}>{BIZ.name}</p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,241,231,0.85)' }}>
                {BIZ.address}, {BIZ.city} · {BIZ.phoneDisplay}
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: 'rgba(246,241,231,0.78)' }}>
            Fotos, dirección, horarios, teléfono y reseñas reales del café;
            carta y precios de muestra.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
