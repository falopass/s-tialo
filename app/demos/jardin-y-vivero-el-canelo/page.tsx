import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import type { CSSProperties } from 'react'
import { SITE, whatsappLink } from '@/lib/config'
import { Reveal, BlitzNav, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CINTA, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' }],
})

const C = {
  bosque: '#1e3d2f',
  bosqueDeep: '#142a20',
  crema: '#f4efe3',
  cremaSoft: '#faf6ec',
  sol: '#e8b41c',
  musgo: '#4a6248',
  muted: '#6b6a5e',
  line: 'rgba(30,61,47,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
) as CSSProperties

export const metadata: Metadata = demoMetadata({
  slug: 'jardin-y-vivero-el-canelo',
  title: 'Jardín y Vivero El Canelo — Talca',
  description:
    'El jardín de la señora Norma en la entrada norte de Talca: suculentas, cactus, frutales, injertos, tierra de hojas y maceteros. 4,9★ en Google.',
  image: '/demos/jardin-y-vivero-el-canelo/hero.webp',
})

const NAV_LINKS = [
  { label: 'El jardín', href: '#jardin' },
  { label: 'El invernadero', href: '#invernadero' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Llegar', href: '#llegar' },
]

const FOTOS = [
  { src: `${IMG}/invernadero.webp`, alt: 'Invernadero del vivero El Canelo visto desde el centro, con hileras de plantas', label: 'el túnel de las plantas' },
  { src: `${IMG}/galpon.webp`, alt: 'Interior del galpón del vivero con plantas y visitantes', label: 'adentro del galpón' },
  { src: `${IMG}/porton.webp`, alt: 'Portón de entrada del vivero El Canelo', label: 'la entrada' },
]

export default function JardinViveroElCaneloPage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased`}
      style={{ ...SPACING, backgroundColor: C.crema, color: C.bosque }}
    >
      <style>{`
        .canelo-btn { transition: transform 0.18s ease, filter 0.18s ease; }
        .canelo-btn:hover { transform: translateY(-2px); filter: brightness(1.06); }
        .canelo-btn:active { transform: translateY(0) scale(0.97); }
        .canelo-btn:focus-visible { outline: 3px solid ${C.sol}; outline-offset: 3px; }
        .canelo-marquee { animation: canelo-marquee 26s linear infinite; }
        @keyframes canelo-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .canelo-marquee { animation: none; }
        }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        ctaLabel="WhatsApp"
        fontClass={display.className}
        theme={{
          over: 'dark',
          bar: 'rgba(244,239,227,0.96)',
          ink: C.bosque,
          line: C.line,
          btnBg: C.bosque,
          btnInk: C.crema,
        }}
      />

      {/* ── Hero: la fachada con la placa ── */}
      <section id="inicio" className="relative min-h-[100dvh] flex flex-col justify-end overflow-hidden">
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada del vivero El Canelo con su letrero amarillo, entrada norte de Talca"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(20,42,32,0.6) 0%, rgba(20,42,32,0.42) 40%, rgba(20,42,32,0.9) 72%, rgba(20,42,32,0.96) 100%)',
          }}
        />
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-10 md:pb-14 pt-44">
          <Reveal>
            <p className="text-[11px] md:text-xs uppercase tracking-[0.32em] font-semibold mb-5" style={{ color: C.sol }}>
              Entrada norte · Talca
            </p>
            <h1
              className={`${display.className} leading-[0.95] text-[clamp(2.6rem,9vw,6rem)]`}
              style={{ color: '#fff' }}
            >
              El jardín de
              <br />
              la señora <span style={{ color: C.sol }}>Norma</span>
            </h1>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mt-6" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Suculentas, cactus, frutales, medicinales e injertos hechos a
              mano en el vivero del callejón El Canelo. También tierra de
              hojas y maceteros para llevarte la planta lista.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <Stars value={BIZ.rating} color={C.sol} />
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs md:text-sm font-bold underline underline-offset-4 decoration-2 tap-44"
                style={{ color: '#fff', textDecorationColor: 'rgba(232,180,28,0.55)' }}
              >
                {BIZ.ratingDisplay} · {BIZ.reviews} reseñas en Google
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} canelo-btn uppercase tracking-wide text-[13px] md:text-base px-5 py-2.5 rounded-full tap-44`}
                style={{ backgroundColor: C.sol, color: C.bosque }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href="#llegar"
                className={`${display.className} canelo-btn uppercase tracking-wide text-[13px] md:text-base px-5 py-2.5 rounded-full border-2 tap-44`}
                style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de lo que crece ── */}
      <div className="overflow-hidden py-3 border-y" style={{ backgroundColor: C.sol, borderColor: C.bosque }} aria-hidden="true">
        <div className="canelo-marquee flex whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <span key={dup} className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em] font-bold`} style={{ color: C.bosque }}>
              {CINTA.map((item) => `  ${item}  ·`).join('')}
            </span>
          ))}
        </div>
      </div>

      {/* ── La reina de las plantas ── */}
      <section id="jardin" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-center">
            <Reveal className="col-span-12 md:col-span-5">
              <div className="relative overflow-hidden rounded-t-[999px] rounded-b-2xl aspect-[4/5] border-2" style={{ borderColor: C.bosque }}>
                <Image
                  src={`${IMG}/entrada.webp`}
                  alt="Entrada del jardín El Canelo, con el cartel y plantas en la vereda"
                  fill
                  sizes="(min-width: 768px) 40vw, 90vw"
                  className="object-cover"
                />
              </div>
              <p className={`${mono.className} text-[11px] uppercase tracking-[0.2em] mt-3`} style={{ color: C.muted }}>
                la entrada por el callejón
              </p>
            </Reveal>
            <Reveal className="col-span-12 md:col-span-7" delay={120}>
              <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: C.musgo }}>
                el jardín
              </p>
              <h2 className={`${display.className} leading-[0.98] text-[clamp(2rem,5.5vw,3.8rem)] mb-6`} style={{ color: C.bosque }}>
                La reina de las plantas de Talca
              </h2>
              <p className="text-sm md:text-base leading-relaxed max-w-xl mb-6" style={{ color: C.muted }}>
                La señora Norma Espinoza lleva años cultivando en este
                callejón: injertos propios, plantas de interior y exterior,
                cactus, frutales, medicinales, de temporada y exóticas que
                no se encuentran en cualquier parte.
              </p>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3 max-w-xl">
                {CINTA.slice(0, 8).map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-semibold" style={{ color: C.bosque }}>
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.sol }} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${display.className} canelo-btn uppercase tracking-wide text-[13px] px-5 py-2.5 rounded-full tap-44`}
                  style={{ backgroundColor: C.bosque, color: C.crema }}
                >
                  Preguntar por una planta
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El invernadero: tira de fotos ── */}
      <section id="invernadero" className="scroll-mt-20" style={{ backgroundColor: C.bosque }}>
        <div className="py-14 md:py-20">
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <Reveal>
              <div className="flex items-end justify-between gap-6 border-b pb-4 mb-8" style={{ borderColor: 'rgba(244,239,227,0.2)' }}>
                <h2 className={`${display.className} leading-none text-[clamp(2rem,5.5vw,3.8rem)]`} style={{ color: C.crema }}>
                  Bajo el plástico,
                  <br />
                  <span style={{ color: C.sol }}>todo el año</span>
                </h2>
                <p className={`${mono.className} hidden md:block text-[11px] uppercase tracking-[0.24em] text-right`} style={{ color: 'rgba(244,239,227,0.6)' }}>
                  desliza →
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="flex gap-4 overflow-x-auto px-5 md:px-8 pb-4 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
              {FOTOS.map((f) => (
                <figure key={f.src} className="snap-start shrink-0 w-[240px] md:w-[300px]">
                  <div className="relative overflow-hidden rounded-t-[999px] rounded-b-xl aspect-[4/5] border-2" style={{ borderColor: 'rgba(244,239,227,0.35)' }}>
                    <Image
                      src={f.src}
                      alt={f.alt}
                      fill
                      sizes="(min-width: 768px) 300px, 240px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em] mt-3`} style={{ color: 'rgba(244,239,227,0.75)' }}>
                    {f.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Qué te llevas ── */}
      <section className="scroll-mt-20" style={{ backgroundColor: C.cremaSoft }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <h2 className={`${display.className} leading-[0.98] text-[clamp(2rem,5.5vw,3.8rem)] mb-8`} style={{ color: C.bosque }}>
              Te llevas la planta
              <br />
              <span style={{ color: C.musgo }}>y el consejo</span>
            </h2>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6">
            {[
              {
                src: `${IMG}/suculentas.webp`,
                alt: 'Suculentas y cactus en maceteros del vivero',
                title: 'Suculentas y cactus',
                text: 'La variedad que más piden, lista para el departamento o el jardín.',
              },
              {
                src: `${IMG}/plantas.webp`,
                alt: 'Flores de temporada en maceteros del vivero',
                title: 'Floración y temporada',
                text: 'Lo que está en flor esta semana, cultivado acá mismo.',
              },
              {
                src: `${IMG}/pasillo.webp`,
                alt: 'Pasillo del invernadero con plantas de interior',
                title: 'Injertos y exóticas',
                text: 'Piezas que Norma trabaja a mano; pide por WhatsApp lo que buscas.',
              },
            ].map((p, i) => (
              <Reveal key={p.title} className="col-span-12 md:col-span-4" delay={i * 110}>
                <li className="h-full">
                  <figure className="h-full rounded-2xl overflow-hidden border flex flex-col" style={{ backgroundColor: '#fff', borderColor: C.line }}>
                    <div className="relative aspect-[4/3]">
                      <Image src={p.src} alt={p.alt} fill sizes="(min-width: 768px) 33vw, 90vw" className="object-cover" />
                    </div>
                    <figcaption className="p-5 flex-1">
                      <p className={`${display.className} text-lg`} style={{ color: C.bosque }}>{p.title}</p>
                      <p className="text-sm leading-relaxed mt-1.5" style={{ color: C.muted }}>{p.text}</p>
                    </figcaption>
                  </figure>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-baseline gap-4 mb-8 border-b pb-4" style={{ borderColor: C.line }}>
              <h2 className={`${display.className} leading-none text-[clamp(2rem,5.5vw,3.8rem)]`} style={{ color: C.bosque }}>
                Lo que dicen
              </h2>
              <span className={`${mono.className} text-xs md:text-sm uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
                {BIZ.ratingDisplay} · {BIZ.reviews} opiniones
              </span>
            </div>
          </Reveal>
          <ul className="grid grid-cols-12 gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.author} className="col-span-12 md:col-span-4" delay={i * 110}>
                <li className="h-full">
                  <figure
                    className="h-full rounded-2xl p-6 flex flex-col border"
                    style={{ backgroundColor: '#fff', borderColor: C.line }}
                  >
                    <Stars value={r.stars} color={C.sol} className="mb-4" />
                    <blockquote className="text-sm md:text-base leading-relaxed font-medium flex-1" style={{ color: C.bosque }}>
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-5 text-[11px] uppercase tracking-[0.18em] font-bold" style={{ color: C.musgo }}>
                      {r.author} — reseña en Google
                    </figcaption>
                  </figure>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Llegar ── */}
      <section id="llegar" className="scroll-mt-20" style={{ backgroundColor: C.bosqueDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="col-span-12 lg:col-span-5">
              <Reveal>
                <p className="text-[11px] md:text-xs uppercase tracking-[0.3em] font-semibold mb-4" style={{ color: C.sol }}>
                  el callejón del canelo
                </p>
                <h2 className={`${display.className} leading-[0.95] text-[clamp(2rem,5.5vw,3.8rem)] mb-6`} style={{ color: '#fff' }}>
                  Entrada norte,
                  <br />
                  pasando la UTalca
                </h2>
                <address className="not-italic text-sm md:text-base leading-relaxed mb-6 font-medium" style={{ color: 'rgba(255,255,255,0.9)' }}>
                  {BIZ.address}
                  <br />
                  {BIZ.city}, {BIZ.region}, Chile
                  <br />
                  <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
                    {BIZ.phoneDisplay}
                  </a>
                </address>
                <div className={`${mono.className} space-y-2 text-xs md:text-sm mb-8`} style={{ color: 'rgba(255,255,255,0.75)' }}>
                  <p>{BIZ.hours}</p>
                  <p>Micros 1, 2 y 5 · te dejan en la entrada</p>
                  <p>Estacionamiento dentro del vivero</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} canelo-btn uppercase tracking-wide text-[13px] px-5 py-2.5 rounded-full tap-44`}
                    style={{ backgroundColor: C.sol, color: C.bosque }}
                  >
                    WhatsApp {BIZ.phoneDisplay}
                  </a>
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${display.className} canelo-btn uppercase tracking-wide text-[13px] px-5 py-2.5 rounded-full border-2 tap-44`}
                    style={{ borderColor: 'rgba(255,255,255,0.55)', color: '#fff' }}
                  >
                    Abrir en Maps
                  </a>
                </div>
              </Reveal>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <Reveal delay={140} className="h-full">
                <div className="relative w-full overflow-hidden rounded-t-[999px] rounded-b-2xl aspect-[4/3] lg:aspect-auto lg:h-full min-h-[320px] border-4" style={{ borderColor: C.sol }}>
                  <LazyMap
                    title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                    src={MAPS_EMBED}
                    className="absolute inset-0 block w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: C.bosque, color: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8">
          <p className={`${display.className} text-xl md:text-2xl mb-2`}>{BIZ.name}</p>
          <address className="not-italic text-xs md:text-sm leading-relaxed" style={{ color: 'rgba(244,239,227,0.7)' }}>
            {BIZ.addressShort} · {BIZ.city}, {BIZ.region}
            <br />
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 tap-44">
              {BIZ.phoneDisplay}
            </a>
          </address>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,239,227,0.16)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 pt-4 pb-20 text-xs leading-relaxed" style={{ color: 'rgba(244,239,227,0.65)' }}>
            Sitio de ejemplo preparado por{' '}
            <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.sol }}>
              Sitiazo
            </a>{' '}
            para {BIZ.name}, con fotos y reseñas reales del vivero.{' '}
            <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44" style={{ color: C.sol }}>
              ¿Lo hacemos realidad?
            </a>
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`WhatsApp de ${BIZ.name}`} />
    </div>
  )
}
