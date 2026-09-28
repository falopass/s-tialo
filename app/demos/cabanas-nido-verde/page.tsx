import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import {
  BIZ,
  WA_LINK,
  WA_LINK_RESERVA,
  IG_URL,
  FB_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
} from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito-sans/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-500.woff2', weight: '500', style: 'normal' },
    { path: '../../fonts/ibm-plex-mono/normal-600.woff2', weight: '600', style: 'normal' },
  ],
})

/**
 * Dirección de arte: «el sendero del predio» — cartel de acceso de madera
 * clara, un recorrido con hitos (piscina, quincho, salón, juegos, camas)
 * y postales con marco crema. Verde bosque profundo sobre papel crema,
 * un solo acento de sol. Baloo 2 hace de letra del letrero; Nunito Sans
 * es el texto y IBM Plex Mono marca los datos de ruta.
 */
const C = {
  paper: '#F5F0E2',
  soft: '#E6EBD9',
  bosque: '#1E3D2A',
  deep: '#122619',
  sol: '#E9A52B',
  ink: '#23301F',
  muted: '#5C685A',
  line: 'rgba(30,61,42,0.18)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-nido-verde',
  title: 'Cabañas Nido Verde | Cabañas en Talca, camino a Alto Lircay',
  description:
    'Cabañas equipadas con piscina, quincho y área infantil sobre la Ruta K-511, camino a Alto Lircay, Talca. Reserva directa por WhatsApp.',
  image: `${IMG}/piscina.webp`,
})

const NAV_LINKS = [
  { label: 'El predio', href: '#predio' },
  { label: 'Las cabañas', href: '#cabanas' },
  { label: 'Cómo llegar', href: '#llegar' },
  { label: 'Reservar', href: '#reservar' },
]

const SENDEROS: { nombre: string; detalle: string; icon: 'piscina' | 'quincho' | 'salon' | 'juegos' | 'camas' }[] = [
  { nombre: 'Piscina', detalle: 'al aire libre, en medio del jardín', icon: 'piscina' },
  { nombre: 'Quincho', detalle: 'el asado de la tarde tiene su techo', icon: 'quincho' },
  { nombre: 'Salón de eventos', detalle: 'celebraciones bajo techo, junto a las cabañas', icon: 'salon' },
  { nombre: 'Área infantil', detalle: 'los niños tienen lo suyo', icon: 'juegos' },
  { nombre: 'Camas con cuarzo', detalle: 'el detalle que anuncian en su propio flyer', icon: 'camas' },
]

function SenderoIcon({ icon }: { icon: (typeof SENDEROS)[number]['icon'] }) {
  const common = {
    className: 'w-7 h-7 md:w-8 md:h-8',
    fill: 'none',
    stroke: C.paper,
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (icon) {
    case 'piscina':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M4 13 q4 -4 8 0 t8 0 t8 0" />
          <path d="M4 20 q4 -4 8 0 t8 0 t8 0" />
          <path d="M4 27 q4 -4 8 0 t8 0 t8 0" />
        </svg>
      )
    case 'quincho':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M16 4 c3 4 -3 6 0 10 c4 -2 2 -6 6 -7 c1 4 4 6 4 10 a10 8 0 0 1 -20 0 c0 -4 3 -6 4 -10 c4 1 2 5 6 7 c-3 -4 3 -6 0 -10 Z" />
        </svg>
      )
    case 'salon':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M6 27 V13 L16 6 L26 13 V27" />
          <path d="M12 27 V18 h8 v9" />
          <path d="M4 27 h24" />
        </svg>
      )
    case 'juegos':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <circle cx="16" cy="16" r="11" />
          <path d="M16 5 c-4 4 -4 18 0 22" />
          <path d="M5 16 c4 -4 18 -4 22 0" />
          <path d="M8 8 c5 5 11 5 16 0" />
          <path d="M8 24 c5 -5 11 -5 16 0" />
        </svg>
      )
    case 'camas':
      return (
        <svg viewBox="0 0 32 32" {...common}>
          <path d="M23 18 a9 9 0 1 1 -12 -12 a7.5 7.5 0 0 0 12 12 Z" />
          <path d="M22 6 l1 2.4 L25.4 9.4 23 10.4 22 12.8 21 10.4 18.6 9.4 21 8.4 Z" fill={C.paper} stroke="none" />
        </svg>
      )
  }
}

/** Cartel de acceso: placa crema sobre la foto, como el letrero del camino. */
function Cartel() {
  return (
    <div
      className="relative rounded-2xl px-6 py-6 md:px-9 md:py-8 shadow-[0_18px_50px_-18px_rgba(0,0,0,0.55)]"
      style={{ backgroundColor: C.paper, transform: 'rotate(-1.2deg)', border: `1px solid ${C.line}` }}
    >
      <div
        className="absolute -top-2 left-8 right-8 h-4 rounded-full"
        style={{ backgroundColor: C.bosque }}
        aria-hidden="true"
      />
      <p
        className={`${mono.className} text-[10px] md:text-[11px] font-medium tracking-[0.22em] uppercase`}
        style={{ color: C.muted }}
      >
        Ruta K-511 · Camino a Alto Lircay · Talca
      </p>
      <h1
        className={`${display.className} font-bold leading-[0.95] text-[44px] md:text-7xl mt-2`}
        style={{ color: C.bosque }}
      >
        Nido Verde
      </h1>
      <p className="text-[15px] md:text-lg leading-snug mt-3 max-w-md" style={{ color: C.ink }}>
        Cabañas equipadas, piscina y quincho entre árboles, a la salida de Talca.
      </p>
      <div className="flex flex-wrap items-center gap-3 mt-5">
        <a
          href={WA_LINK_RESERVA}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-5 text-[15px] font-bold h-12 tap-44 transition-transform active:scale-95"
          style={{ backgroundColor: C.bosque, color: C.paper }}
        >
          Reservar por WhatsApp
        </a>
        <a
          href="#predio"
          className="inline-flex items-center rounded-full px-4 h-12 text-[15px] font-bold tap-44"
          style={{ color: C.bosque, border: `1.5px solid ${C.bosque}` }}
        >
          Recorrer el predio
        </a>
      </div>
    </div>
  )
}

/** Icono de sobre para el detalle de contacto. */
function PinIcon() {
  return (
    <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0" fill="none" stroke={C.sol} strokeWidth="1.7" aria-hidden="true">
      <path d="M10 18 s-6 -5.2 -6 -9.4 a6 6 0 1 1 12 0 C16 12.8 10 18 10 18 Z" />
      <circle cx="10" cy="8.6" r="2.2" />
    </svg>
  )
}

export default function CabanasNidoVerdePage() {
  return (
    <main className={body.className} style={{ backgroundColor: C.paper, color: C.ink }}>
      <style>{`
        .nv-card { transition: transform .35s ease, box-shadow .35s ease; }
        .nv-card:hover { transform: rotate(0deg) translateY(-4px) !important; box-shadow: 0 22px 44px -20px rgba(18,38,25,.35); }
        @keyframes nv-bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
        @media (prefers-reduced-motion: no-preference) {
          .nv-bob { animation: nv-bob 6s ease-in-out infinite; }
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
          bar: 'rgba(245,240,226,0.96)',
          ink: C.deep,
          line: C.line,
          btnBg: C.bosque,
          btnInk: C.paper,
        }}
      />

      {/* ── Hero: foto de la piscina + cartel de acceso ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.deep }}>
        <Image
          src={`${IMG}/piscina.webp`}
          alt="Piscina al aire libre rodeada de jardín y árboles en Cabañas Nido Verde, Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(18,38,25,0.35) 0%, rgba(18,38,25,0.05) 40%, rgba(18,38,25,0.62) 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-28">
          <Reveal className="nv-bob max-w-xl">
            <Cartel />
          </Reveal>
        </div>
      </section>

      {/* ── Nota real de Google ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.sol }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          <Reveal className="flex items-center gap-4">
            <span className={`${display.className} text-4xl md:text-5xl font-bold leading-none`} style={{ color: C.deep }}>
              5,0
            </span>
            <span>
              <Stars value={5} color={C.deep} className="w-5 h-5" />
              <span className={`${mono.className} block text-[10px] tracking-[0.18em] uppercase mt-1`} style={{ color: C.deep }}>
                Nota real en Google Maps
              </span>
            </span>
          </Reveal>
          <Reveal delay={80} className="text-sm md:text-[15px] leading-snug max-w-md">
            <span style={{ color: C.deep }}>
              Su primera reseña publicada les dejó cinco de cinco. El perfil recién
              está partiendo: así empiezan los lugares buenos.
            </span>
          </Reveal>
          <Reveal delay={140} className="md:ml-auto">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${mono.className} inline-flex items-center h-11 px-4 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase tap-44`}
              style={{ color: C.paper, backgroundColor: C.deep }}
            >
              Ver la ficha en Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Sendero del predio ── */}
      <section id="predio" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <p className={`${mono.className} text-[11px] font-medium tracking-[0.22em] uppercase`} style={{ color: C.bosque }}>
              Del portón a la piscina
            </p>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.02] mt-2 max-w-3xl`} style={{ color: C.bosque }}>
              el predio se recorre así,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: C.muted }}>
              cinco cosas que el propio flyer de Nido Verde promete, y las fotos
              de su ficha confirman.
            </p>
          </Reveal>

          <ol className="relative mt-12 md:mt-16 max-w-3xl mx-auto">
            {/* línea del sendero */}
            <div
              className="absolute left-[26px] md:left-1/2 top-2 bottom-2 w-px -translate-x-1/2"
              style={{ backgroundImage: `linear-gradient(${C.bosque} 55%, transparent 45%)`, backgroundSize: '1px 14px', opacity: 0.5 }}
              aria-hidden="true"
            />
            {SENDEROS.map((s, i) => (
              <li key={s.nombre} className="relative">
                <Reveal delay={i * 60}>
                  <div
                    className={`flex items-center gap-5 md:gap-0 py-5 md:py-7 ${
                      i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    <div
                      className="nv-disc relative z-10 shrink-0 w-[52px] h-[52px] md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 shadow-[0_10px_24px_-10px_rgba(18,38,25,0.5)]"
                      style={{ backgroundColor: i % 2 === 0 ? C.bosque : C.deep, rotate: i % 2 === 0 ? '-4deg' : '4deg' }}
                    >
                      <SenderoIcon icon={s.icon} />
                    </div>
                    <div
                      className={`flex-1 md:w-1/2 md:flex-none ${
                        i % 2 === 0 ? 'md:pr-14 md:text-right md:order-first' : 'md:pl-14'
                      }`}
                    >
                      <h3 className={`${display.className} text-2xl md:text-3xl font-bold leading-none`} style={{ color: C.bosque }}>
                        {s.nombre}
                      </h3>
                      <p className="text-sm md:text-[15px] mt-1.5 leading-snug" style={{ color: C.muted }}>
                        {s.detalle}
                      </p>
                    </div>
                    <div className="hidden md:block md:w-1/2" aria-hidden="true" />
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Postales: las cabañas en foto ── */}
      <section id="cabanas" className="scroll-mt-20">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.02] max-w-3xl`} style={{ color: C.bosque }}>
              madera, pasto y piscina en la K-511,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 max-w-xl leading-snug" style={{ color: C.muted }}>
              las fotos son las que ellos mismos subieron a su ficha de Google y a su Instagram.
            </p>
          </Reveal>

          <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-6">
            {[
              { src: 'cabana.webp', alt: 'Cabaña de madera con techo verde entre árboles en Nido Verde', cap: 'La cabaña', cls: 'col-span-2 md:col-span-7', rot: '-1.4deg', ratio: 'aspect-[4/3] md:aspect-[16/10]' },
              { src: 'casa.webp', alt: 'Casa de madera del predio junto a la piscina', cap: 'La casa, al borde de la piscina', cls: 'col-span-2 md:col-span-5', rot: '1.2deg', ratio: 'aspect-[4/3] md:aspect-[16/10]' },
              { src: 'jardin.webp', alt: 'Jardín amplio con árboles y cabañas de madera al fondo', cap: 'El jardín del predio', cls: 'col-span-1 md:col-span-4', rot: '-1deg', ratio: 'aspect-[3/4] md:aspect-[4/5]' },
              { src: 'flyer.webp', alt: 'Flyer oficial de Cabañas Nido Verde con sus servicios y redes', cap: 'Su flyer real, de @nidoverdetalca', cls: 'col-span-1 md:col-span-4', rot: '1.6deg', ratio: 'aspect-[3/4] md:aspect-[4/5]', href: IG_URL },
            ].map((p) => {
              const inner = (
                <>
                  <div className={`relative overflow-hidden rounded-t-xl ${p.ratio}`}>
                    <Image src={`${IMG}/${p.src}`} alt={p.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div
                    className="px-4 py-3 flex items-center justify-between gap-2"
                    style={{ backgroundColor: '#FBF8EF', borderTop: `1px solid ${C.line}` }}
                  >
                    <span className={`${mono.className} text-[10px] md:text-[11px] font-medium tracking-[0.08em] uppercase`} style={{ color: C.ink }}>
                      {p.cap}
                    </span>
                    {p.href && (
                      <span className={`${mono.className} text-[10px] font-semibold tracking-[0.08em] uppercase shrink-0`} style={{ color: C.bosque }}>
                        IG →
                      </span>
                    )}
                  </div>
                </>
              )
              return (
                <Reveal key={p.src} className={p.cls}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nv-card block rounded-xl overflow-hidden shadow-[0_14px_34px_-18px_rgba(18,38,25,0.45)] tap-44"
                      style={{ transform: `rotate(${p.rot})`, border: `1px solid ${C.line}` }}
                    >
                      {inner}
                    </a>
                  ) : (
                    <figure
                      className="nv-card rounded-xl overflow-hidden shadow-[0_14px_34px_-18px_rgba(18,38,25,0.45)] m-0"
                      style={{ transform: `rotate(${p.rot})`, border: `1px solid ${C.line}` }}
                    >
                      {inner}
                    </figure>
                  )}
                </Reveal>
              )
            })}
            {/* tarjeta de relleno con datos */}
            <Reveal className="col-span-1 md:col-span-4">
              <div
                className="nv-card rounded-xl h-full min-h-[180px] px-5 py-5 flex flex-col justify-between shadow-[0_14px_34px_-18px_rgba(18,38,25,0.45)]"
                style={{ transform: 'rotate(-1.8deg)', backgroundColor: C.bosque }}
              >
                <p className={`${mono.className} text-[10px] tracking-[0.2em] uppercase`} style={{ color: C.sol }}>
                  Dato del flyer
                </p>
                <p className={`${display.className} text-2xl md:text-[26px] font-bold leading-tight mt-3`} style={{ color: C.paper }}>
                  Cabañas equipadas, piscina y quincho: todo dentro del mismo predio.
                </p>
                <a
                  href={WA_LINK_RESERVA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-4 text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                  style={{ color: C.sol, textDecorationColor: C.sol }}
                >
                  Preguntar disponibilidad →
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.soft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[1.02]`} style={{ color: C.bosque }}>
              cómo llegar a Nido Verde,
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <PinIcon />
                <div>
                  <p className="text-[15px] md:text-base font-bold leading-snug" style={{ color: C.ink }}>
                    {BIZ.address}
                  </p>
                  <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                    {BIZ.city}, {BIZ.region}. Saliendo de Talca por el camino a
                    Alto Lircay, la entrada queda sobre la ruta.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg viewBox="0 0 20 20" className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke={C.sol} strokeWidth="1.7" aria-hidden="true">
                  <path d="M4 4 h4 l1.5 4 -2 1.5 a11 11 0 0 0 5 5 L14 13 l4 1.5 v4 h-1.5 C9 18 2 11 2 3.5 V4 Z" strokeLinejoin="round" />
                </svg>
                <div>
                  <p className="text-[15px] md:text-base font-bold leading-snug" style={{ color: C.ink }}>
                    {BIZ.phoneDisplay}
                  </p>
                  <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                    La reserva se hace directa por WhatsApp, sin intermediarios.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-5 rounded-full text-[15px] font-bold tap-44"
                style={{ backgroundColor: C.bosque, color: C.paper }}
              >
                Abrir en Google Maps
              </a>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-12 px-5 rounded-full text-[15px] font-bold tap-44"
                style={{ color: C.bosque, border: `1.5px solid ${C.bosque}` }}
              >
                Consultar por WhatsApp
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div
              className="rounded-2xl overflow-hidden shadow-[0_18px_44px_-20px_rgba(18,38,25,0.4)]"
              style={{ border: `1px solid ${C.line}` }}
            >
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa de ${BIZ.name}, ${BIZ.address}`}
                className="w-full h-[300px] md:h-[360px] block"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Reservar ── */}
      <section id="reservar" className="scroll-mt-20" style={{ backgroundColor: C.deep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[1.02] mx-auto max-w-3xl`} style={{ color: C.paper }}>
              tu próxima noche puede ser de campo,
            </h2>
            <p className="text-[15px] md:text-lg mt-4 mx-auto max-w-md leading-snug" style={{ color: 'rgba(245,240,226,0.75)' }}>
              escríbeles directo por WhatsApp y aparta tu fecha en las cabañas de la K-511.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <a
              href={WA_LINK_RESERVA}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-7 h-[52px] text-base font-bold mt-8 tap-44 transition-transform active:scale-95"
              style={{ backgroundColor: C.sol, color: C.deep }}
            >
              Reservar por WhatsApp
            </a>
          </Reveal>
          <Reveal delay={160}>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 h-11 px-4 rounded-full text-[11px] font-medium tracking-[0.1em] tap-44`}
                style={{ color: C.paper, border: '1px solid rgba(245,240,226,0.4)' }}
              >
                Instagram {BIZ.igHandle}
              </a>
              <a
                href={FB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${mono.className} inline-flex items-center gap-2 h-11 px-4 rounded-full text-[11px] font-medium tracking-[0.1em] tap-44`}
                style={{ color: C.paper, border: '1px solid rgba(245,240,226,0.4)' }}
              >
                Facebook /{BIZ.fbHandle}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.paper, borderTop: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <p className={`${display.className} text-xl font-bold`} style={{ color: C.bosque }}>
                {BIZ.name}
              </p>
              <p className="text-sm mt-1 leading-snug" style={{ color: C.muted }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Pie de página">
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="tap-44 font-semibold" style={{ color: C.bosque }}>
                  {l.label}
                </a>
              ))}
            </nav>
            <div className="text-sm space-y-1" style={{ color: C.muted }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="block tap-44 font-semibold" style={{ color: C.bosque }}>
                {BIZ.phoneDisplay}
              </a>
              <a href={IG_URL} target="_blank" rel="noopener noreferrer" className="block tap-44">
                {BIZ.igHandle}
              </a>
            </div>
          </div>
          <p className={`${mono.className} text-[10px] tracking-wide mt-7 leading-relaxed`} style={{ color: C.muted }}>
            Textos de muestra sobre datos reales: dirección, WhatsApp, redes, nota de Google
            y fotos corresponden a la ficha pública de {BIZ.name}.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escríbele a ${BIZ.short}`} />
    </main>
  )
}

/**
 * Aviso de Sitiazo en el flujo (no fijo): así nunca tapa texto ni
 * botones. Fondo en rgba() inline — con bg-ink/90 Chrome serializa
 * color-mix como oklab() y los chequeos de contraste no lo leen.
 */
function SitiazoStrip() {
  return (
    <div
      className="text-[11px] leading-tight"
      style={{ backgroundColor: 'rgba(10,10,10,0.92)', color: '#FAFAF7' }}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span
          className="inline-block w-[6px] h-[6px] rounded-full shrink-0"
          style={{ backgroundColor: C.sol }}
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
          para {BIZ.name}: así se vería tu sitio.{' '}
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
