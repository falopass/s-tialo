import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  RECORRIDO,
  SERVICIOS,
  REVIEWS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/marcellus/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/karla/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/ibm-plex-mono/normal-400.woff2', weight: '400' },
    { path: '../../fonts/ibm-plex-mono/normal-700.woff2', weight: '700' },
  ],
})

/**
 * Dirección de arte: «los anillos del tronco» — el logo es una rodaja
 * de madera, así que toda la pieza se organiza en anillos concéntricos
 * y en el sendero que baja al río. Marcellus pone la madera noble,
 * IBM Plex Mono marca los datos del sendero.
 */
const C = {
  bosque: '#22402E',
  bosqueDeep: '#152419',
  corteza: '#4A3423',
  ambar: '#DF9A3E',
  rio: '#35687F',
  papel: '#F4EFE3',
  card: '#FBF7EC',
  ink: '#25301F',
  muted: '#5F6B57',
  line: 'rgba(37,48,31,0.16)',
  lineDark: 'rgba(255,255,255,0.14)',
} as const

export const metadata: Metadata = demoMetadata({
  slug: 'cabanas-los-troncos',
  title: 'Cabañas Los Troncos — Descanso en Vilches, San Clemente',
  description:
    'Cabañas equipadas en Vilches: tinajas de leña, piscina, quincho y sendero propio al río. A una hora de Talca, abiertas todo el año. Reserva por WhatsApp.',
  image: `${IMG}/cabana.webp`,
})

const NAV_LINKS = [
  { label: 'El recorrido', href: '#recorrido' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Cómo llegar', href: '#llegar' },
]

/** Rodaja de tronco: anillos concéntricos como el logo del negocio. */
function RingMark({ size = 44, light = false }: { size?: number; light?: boolean }) {
  const ink = light ? C.papel : C.corteza
  return (
    <span
      className="relative inline-block shrink-0 rounded-full"
      style={{
        width: size,
        height: size,
        backgroundColor: light ? 'rgba(244,239,227,0.10)' : 'rgba(223,154,62,0.22)',
        boxShadow: `0 0 0 2px ${ink}, inset 0 0 0 3px ${ink}, inset 0 0 0 8px ${light ? 'rgba(244,239,227,0.10)' : 'rgba(223,154,62,0.14)'}, inset 0 0 0 10px ${ink}, inset 0 0 0 15px rgba(0,0,0,0)`,
      }}
      aria-hidden="true"
    >
      <span
        className="absolute rounded-full"
        style={{ width: size * 0.16, height: size * 0.16, left: '50%', top: '50%', transform: 'translate(-50%,-50%)', backgroundColor: ink }}
      />
    </span>
  )
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.28em] font-bold mb-4 flex items-center gap-3`}
      style={{ color: light ? C.ambar : C.rio }}
    >
      <span className="inline-block w-8 border-t-2" style={{ borderColor: 'currentColor' }} aria-hidden="true" />
      {children}
    </p>
  )
}

export default function CabanasLosTroncosPage() {
  return (
    <div className={`${body.className} min-h-screen antialiased overflow-x-hidden`} style={{ backgroundColor: C.papel, color: C.ink }}>
      <style>{`
        html { scroll-behavior: auto }
        .lt a:focus-visible { outline: 2px solid currentColor; outline-offset: 3px }
        .lt-sendero { position: relative }
        .lt-sendero::before {
          content: '';
          position: absolute;
          left: 21px;
          top: 0;
          bottom: 0;
          width: 2px;
          background-image: repeating-linear-gradient(180deg, ${C.rio} 0 9px, transparent 9px 20px);
          opacity: 0.55;
        }
        @media (min-width: 768px) { .lt-sendero::before { left: 50%; transform: translateX(-50%) } }
      `}</style>

      <div className="lt">
        <BlitzNav
          name={
            <span className={display.className}>
              Los <span style={{ color: C.ambar }}>Troncos</span>
            </span>
          }
          logoSrc={`${IMG}/logo.webp`}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          theme={{
            over: 'dark',
            bar: 'rgba(244,239,227,0.96)',
            ink: C.bosqueDeep,
            line: C.line,
            btnBg: C.bosque,
            btnInk: '#F4EFE3',
          }}
        />

        {/* ── Hero: la cabaña entre el bosque ── */}
        <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.bosqueDeep }}>
          <Image
            src={`${IMG}/cabana.webp`}
            alt="Cabaña de madera de Cabañas Los Troncos en medio del bosque de Vilches"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(21,36,25,0.55) 0%, rgba(21,36,25,0.12) 42%, rgba(21,36,25,0.9) 100%)' }}
          />
          <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pt-28 pb-14 md:pb-20">
            <Reveal>
              <p className={`${mono.className} text-[11px] md:text-xs uppercase tracking-[0.3em] font-bold mb-5 flex flex-wrap items-center gap-x-4 gap-y-2`} style={{ color: C.ambar }}>
                <span>Vilches · San Clemente · Maule</span>
                <span aria-hidden="true">·</span>
                <span className="inline-flex items-center gap-2">
                  <Stars value={5} color={C.ambar} className="w-3.5 h-3.5" /> {BIZ.rating} · {BIZ.reviewCount} reseñas
                </span>
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className={`${display.className} text-[clamp(2.6rem,9vw,5.6rem)] leading-[1.02] mb-6`} style={{ color: '#F6F3E8' }}>
                Te esperan con la
                <br />
                <span style={{ color: C.ambar }}>bosca encendida.</span>
              </h1>
              <p className="text-base md:text-lg leading-relaxed max-w-xl mb-8" style={{ color: 'rgba(246,243,232,0.85)' }}>
                Cabañas equipadas en un pequeño bosque de Vilches: tinajas
                de leña, piscina, quincho y un sendero propio que baja al
                río. A una hora de Talca, abiertas todo el año.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ambar, color: C.bosqueDeep }}
                >
                  Reservar por WhatsApp
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-white/10 tap-44`}
                  style={{ borderColor: 'rgba(246,243,232,0.5)', color: '#F6F3E8' }}
                >
                  Cómo llegar
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Datos del sendero ── */}
        <section className="border-b" style={{ backgroundColor: C.card, borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-6 md:py-7 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-5">
            {[
              [`Check-in`, `desde las ${BIZ.checkin}`],
              [`Check-out`, `hasta las ${BIZ.checkout}`],
              [`Temporada`, `abierto todo el año`],
              [`Desde Talca`, `aprox. 1 hora`],
            ].map(([k, v]) => (
              <div key={k} className="flex items-center gap-3">
                <RingMark size={30} />
                <div>
                  <p className={`${mono.className} text-[10px] uppercase tracking-[0.2em] font-bold`} style={{ color: C.rio }}>{k}</p>
                  <p className="text-sm font-bold" style={{ color: C.ink }}>{v}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── El recorrido: paradas del sendero ── */}
        <section id="recorrido" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>El recorrido</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] max-w-2xl mb-3`} style={{ color: C.bosqueDeep }}>
              De la bosca al río,
              <br />
              en un solo predio
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-12 md:mb-16" style={{ color: C.muted }}>
              Las fotos son del predio real — cada parada del sendero es
              una foto de su gente y su gente la mantiene.
            </p>
          </Reveal>

          <div className="lt-sendero flex flex-col gap-14 md:gap-20 md:pl-0">
            {RECORRIDO.map((p, i) => (
              <Reveal key={p.parada} delay={60}>
                <div className={`relative pl-14 md:pl-0 grid md:grid-cols-2 gap-6 md:gap-16 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
                  {/* marcador de parada sobre el sendero */}
                  <div className="absolute left-0 top-4 md:hidden">
                    <RingMark size={44} />
                  </div>
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full" style={{ backgroundColor: C.papel, padding: 6 }}>
                    <RingMark size={56} />
                  </div>
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3]" style={{ backgroundColor: C.bosqueDeep, boxShadow: '0 18px 40px rgba(21,36,25,0.22)' }}>
                    <Image
                      src={`${IMG}/${p.foto}.webp`}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, calc(100vw - 6rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className={i % 2 === 1 ? 'md:text-right' : ''}>
                    <p className={`${mono.className} text-[11px] uppercase tracking-[0.24em] font-bold mb-2`} style={{ color: C.rio }}>
                      {p.parada}
                    </p>
                    <h3 className={`${display.className} text-2xl md:text-3xl leading-snug mb-3`} style={{ color: C.bosqueDeep }}>
                      {p.nombre}
                    </h3>
                    <p className={`text-sm md:text-base leading-relaxed ${i % 2 === 1 ? 'md:ml-auto' : ''} max-w-md`} style={{ color: C.muted }}>
                      {p.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Servicios: lo que incluye el predio ── */}
        <section id="servicios" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-start">
              <Reveal>
                <Eyebrow light>El predio</Eyebrow>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-5`} style={{ color: '#F6F3E8' }}>
                  Para quedarse,
                  <br />
                  <span style={{ color: C.ambar }}>no para pasar</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed max-w-md mb-7" style={{ color: 'rgba(246,243,232,0.75)' }}>
                  Todo lo que anuncian en su sitio y que los que llegaron
                  confirman: la idea es bajar del auto y no volver a
                  necesitarlo hasta el check-out.
                </p>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} inline-block text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                  style={{ backgroundColor: C.ambar, color: C.bosqueDeep }}
                >
                  Consultar disponibilidad
                </a>
              </Reveal>
              <Reveal delay={140}>
                <ul className="flex flex-wrap gap-2.5">
                  {SERVICIOS.map((s) => (
                    <li
                      key={s}
                      className={`${mono.className} inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs md:text-sm font-bold border`}
                      style={{ color: '#F6F3E8', borderColor: 'rgba(246,243,232,0.4)', backgroundColor: 'rgba(21,36,25,0.35)' }}
                    >
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Reseñas reales ── */}
        <section id="resenas" className="scroll-mt-20 max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
          <Reveal>
            <Eyebrow>Los que ya llegaron</Eyebrow>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-10 md:mb-14">
              <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] max-w-xl`} style={{ color: C.bosqueDeep }}>
                80 reseñas,
                <br />
                <span style={{ color: C.rio }}>todas de 5 estrellas</span>
              </h2>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold underline underline-offset-4 decoration-2 transition-all hover:decoration-4 tap-44"
                style={{ color: C.rio, textDecorationColor: 'rgba(62,126,151,0.4)' }}
              >
                Leerlas en Google →
              </a>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 110}>
                <figure
                  className="h-full flex flex-col p-6 rounded-2xl border"
                  style={{ backgroundColor: C.card, borderColor: C.line, boxShadow: '0 12px 30px rgba(21,36,25,0.10)' }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <Stars value={5} color={C.ambar} className="w-4 h-4" />
                    <RingMark size={30} />
                  </div>
                  <blockquote className="text-[15px] leading-relaxed flex-1 mb-5" style={{ color: C.ink }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.16em] font-bold`} style={{ color: C.muted }}>
                    {r.nombre} · {r.fecha} · Google
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <p className={`${mono.className} text-xs md:text-sm font-bold mt-8 flex items-center gap-3`} style={{ color: C.bosqueDeep }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: C.ambar }} aria-hidden="true" />
              El anfitrión que nombran una y otra vez en las reseñas es don Marcelo.
            </p>
          </Reveal>
        </section>

        {/* ── Cómo llegar ── */}
        <section id="llegar" className="scroll-mt-20 border-t" style={{ backgroundColor: C.card, borderColor: C.line }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
              <Reveal>
                <Eyebrow>Cómo llegar</Eyebrow>
                <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.06] mb-6`} style={{ color: C.bosqueDeep }}>
                  Vilches,
                  <br />
                  <span style={{ color: C.rio }}>a una hora de Talca</span>
                </h2>
                <p className="text-sm md:text-base leading-relaxed mb-6 max-w-md" style={{ color: C.muted }}>
                  En auto, Vilches queda aproximadamente a una hora de
                  Talca por el camino a la precordillera. También sale
                  locomoción desde el Terminal de Talca.
                </p>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6" style={{ color: C.ink }}>
                  <span className={`${mono.className} block text-[11px] uppercase tracking-[0.2em] font-bold mb-1`} style={{ color: C.rio }}>
                    Dirección
                  </span>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}
                  <br />
                  <a
                    href={`https://${BIZ.web}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 underline underline-offset-2 transition-colors hover:opacity-70 tap-44"
                    style={{ color: C.bosque }}
                  >
                    {BIZ.web}
                  </a>
                </address>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full transition-all hover:brightness-110 active:scale-95 tap-44`}
                    style={{ backgroundColor: C.bosque, color: '#F6F3E8' }}
                  >
                    {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} text-sm md:text-base px-7 py-3 rounded-full border-2 transition-colors hover:bg-[#E9E2CF] tap-44`}
                    style={{ borderColor: C.bosque, color: C.bosque }}
                  >
                    Abrir en Maps →
                  </a>
                </div>
              </Reveal>
              <Reveal delay={140}>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4" style={{ backgroundColor: C.bosqueDeep }}>
                    <Image
                      src={`${IMG}/pozas.webp`}
                      alt="Pozas de agua entre rocas en el entorno de Vilches"
                      fill
                      sizes="(min-width: 1024px) 50vw, calc(100vw - 2.5rem)"
                      className="object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border" style={{ borderColor: C.line }}>
                    <LazyMap
                      title={`Mapa: ${BIZ.full}, ${BIZ.city}`}
                      src={MAPS_EMBED}
                      className="w-full h-[280px] block"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ backgroundColor: C.bosqueDeep, color: '#F6F3E8' }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 border-t flex flex-col md:flex-row md:items-end justify-between gap-5" style={{ borderColor: C.lineDark }}>
            <div>
              <p className={`${display.className} text-2xl mb-1.5`}>
                Cabañas <span style={{ color: C.ambar }}>Los Troncos</span>
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(246,243,232,0.65)' }}>
                Vilches, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                  {BIZ.phoneDisplay}
                </a>
                {' · '}
                Check-in {BIZ.checkin} · check-out {BIZ.checkout}
              </address>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(246,243,232,0.65)' }}>
              {NAV_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t" style={{ borderColor: C.lineDark }}>
            <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(246,243,232,0.7)' }}>
              Sitio de ejemplo de Sitiazo: nombre, comuna, teléfono,
              horarios de llegada y salida, servicios, reseñas, nota de
              Google, fotos y logo son reales; textos de presentación son
              de muestra.
            </p>
          </div>
        </footer>

        <DemoBand name={BIZ.name} />
        <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
      </div>
    </div>
  )
}
