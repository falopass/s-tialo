import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { DemoBand } from '../kit'
import { Reveal, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { ChalkNav } from './chrome'
import LazyMap from '../lazy-map'
import {
  BIZ,
  WA_LINK,
  INSTAGRAM_URL,
  MAPS_URL,
  MAPS_EMBED,
  IMG,
  PIZARRA,
  HORARIO,
  RESENAS,
} from './content'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/nunito/normal-200-1000.woff2', weight: '200 1000', style: 'normal' }],
})
const mono = localFont({
  src: [
    { path: '../../fonts/space-mono/normal-400.woff2', weight: '400', style: 'normal' },
    { path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' },
  ],
})

const C = {
  pizarra: '#231F19',
  pizarraDeep: '#191510',
  tiza: '#F5EFE2',
  tizaSoft: 'rgba(245,239,226,0.72)',
  crema: '#F7F1E5',
  card: '#FCF8EF',
  ink: '#26201A',
  muted: '#6E6255',
  naranja: '#F26B21',
  naranjaDeep: '#B24A0E',
  line: 'rgba(38,32,26,0.14)',
  lineDark: 'rgba(245,239,226,0.15)',
}

const focusRing = 'focus-visible:outline-2 focus-visible:outline-offset-4'

export const metadata: Metadata = demoMetadata({
  slug: 'catffeine-cafe',
  title: 'Catffeine Café · Espresso bar de autor en Copiapó',
  description:
    'Cafetería de autor en Domingo Alvarado 1209, Copiapó: técnicas manuales, repostería sin gluten y vegana, y una pizarra escrita con miaus. Escríbeles por WhatsApp.',
  image: '/demos/catffeine-cafe/hero.webp',
})

const NAV_LINKS = [
  { label: 'La pizarra', href: '#pizarra' },
  { label: 'Hecho a mano', href: '#hecho-a-mano' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Visita', href: '#visita' },
]

const MARQUEE = PIZARRA.map((p) => p.name)

const METODOS = [
  {
    name: 'Vertido en V60',
    nota: 'la Garra V60 de la pizarra',
    desc: 'El filtrado se vierte a mano, despacio, para que el grano suelte su lado más dulce.',
    icon: 'v60',
  },
  {
    name: 'Prensa francesa',
    nota: 'la Prrruensa Francesa',
    desc: 'Inmersión completa del café molido: cuerpo redondo, textura más espesa.',
    icon: 'press',
  },
  {
    name: 'Espresso',
    nota: 'el Esprruueso de 45 ml',
    desc: 'Extracción corta y concentrada, la base del Catpuccino y del Mokat.',
    icon: 'cup',
  },
] as const

const PARA_CUIDARTE = [
  'adaptógenos en las bebidas',
  'repostería sin gluten',
  'opciones veganas',
  'sin azúcar añadida',
  'golden milk',
  'tés rooibos',
]

// ── Decoración: la huella del gato ───────────────────────────

function Paw({ className = 'w-4 h-4', color = 'currentColor' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill={color} aria-hidden="true">
      <ellipse cx="6.3" cy="8.6" rx="1.6" ry="2.2" transform="rotate(-16 6.3 8.6)" />
      <ellipse cx="10.2" cy="6" rx="1.7" ry="2.4" transform="rotate(-5 10.2 6)" />
      <ellipse cx="14.4" cy="6" rx="1.7" ry="2.4" transform="rotate(5 14.4 6)" />
      <ellipse cx="18.2" cy="8.6" rx="1.6" ry="2.2" transform="rotate(16 18.2 8.6)" />
      <path d="M12.3 11.4c-3.2 0-5.6 2.3-5.6 4.9 0 1.7 1.2 2.8 2.8 2.8 1.1 0 1.8-.5 2.8-.5s1.7.5 2.8.5c1.6 0 2.8-1.1 2.8-2.8 0-2.6-2.4-4.9-5.6-4.9z" />
    </svg>
  )
}

/** Estela de huellas: un gato cruza la página entre secciones. */
function PawTrail({ color, flip = false }: { color: string; flip?: boolean }) {
  const paws = Array.from({ length: 9 })
  return (
    <Reveal>
      <div
        className="flex justify-between max-w-4xl mx-auto px-6"
        aria-hidden="true"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
      >
        {paws.map((_, i) => (
          <span
            key={i}
            className="cf-paw block"
            style={{ animationDelay: `${i * 130}ms`, transform: `translateY(${Math.sin(i * 0.9) * 10}px) rotate(${i % 2 ? 22 : -22}deg)` }}
          >
            <Paw className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]" color={color} />
          </span>
        ))}
      </div>
    </Reveal>
  )
}

function MethodIcon({ kind, color }: { kind: string; color: string }) {
  const paths: Record<string, React.ReactNode> = {
    v60: (
      <>
        <path d="M6 4.5 h12 L14.8 13 a2.2 2.2 0 0 1 -5.6 0 Z" />
        <path d="M8.2 7.2 h7.6" />
        <path d="M11.4 15.4 v2.1 M12.9 15.4 v2.1" />
        <path d="M8 20.2 h8" />
      </>
    ),
    press: (
      <>
        <path d="M7.5 8 h9 v11 h-9 Z" />
        <path d="M12 3 v5" />
        <path d="M9.5 4.6 h5" />
        <path d="M7.5 12.8 h9" />
        <path d="M16.5 10 h1.8 a1.6 1.6 0 0 1 0 4.4 h-1.8" />
      </>
    ),
    cup: (
      <>
        <path d="M6 8.5 h9.5 v4.8 a4.8 4.8 0 0 1 -9.5 0 Z" />
        <path d="M15.5 9.6 h1.9 a2.1 2.1 0 0 1 0 4.2 h-1.4" />
        <path d="M5 20.5 h11.5" />
      </>
    ),
  }
  return (
    <svg viewBox="0 0 24 24" className="w-[22px] h-[22px]" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[kind]}
    </svg>
  )
}

function Eyebrow({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <p
      className={`${mono.className} text-[11px] uppercase tracking-[0.24em] mb-4 flex items-center gap-3 font-bold`}
      style={{ color }}
    >
      <Paw className="w-[15px] h-[15px]" />
      {children}
    </p>
  )
}

export default function CatffeineCafePage() {
  return (
    <div
      className={`${body.className} min-h-screen antialiased overflow-x-clip`}
      style={{ backgroundColor: C.crema, color: C.ink }}
    >
      <style>{`
        @keyframes cf-marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
        .cf-marquee { animation: cf-marquee 30s linear infinite }
        @keyframes cf-paw { from { opacity: 0; transform: scale(0.4) rotate(30deg) } 60% { opacity: 1 } to { opacity: 1; } }
        .cf-paw { opacity: 0; animation: cf-paw 0.55s ease-out forwards }
        @media (prefers-reduced-motion: reduce) { .cf-marquee { animation: none } .cf-paw { animation: none; opacity: 1 } }
      `}</style>

      <div style={{ backgroundColor: C.pizarraDeep }}>
        <ChalkNav
          logo={`${IMG}/logo.webp`}
          name={BIZ.name}
          links={NAV_LINKS}
          waLink={WA_LINK}
          fontClass={display.className}
          ctaLabel="Pedir por WhatsApp"
          theme={{
            over: 'dark',
            bar: 'rgba(247,241,229,0.95)',
            ink: C.ink,
            line: C.line,
            btnBg: C.naranjaDeep,
            btnInk: C.tiza,
          }}
        />
      </div>

      {/* ── Hero: la mesa del gato ── */}
      <section id="inicio" className="relative min-h-svh flex flex-col justify-end overflow-hidden" style={{ backgroundColor: C.pizarraDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Latte alto con un sándwich sobre un mantel dibujado con gatos, en la terraza de Catffeine"
          fill
          priority
          loading="eager"
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(25,21,16,0.5) 0%, rgba(25,21,16,0.34) 42%, rgba(25,21,16,0.92) 100%)',
          }}
        />
        {/* sello Instagram */}
        <div className="absolute top-20 md:top-24 right-5 md:right-8">
          <Reveal>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 text-xs md:text-sm font-bold px-4 py-2.5 rounded-full shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${focusRing} tap-44`}
              style={{ backgroundColor: 'rgba(247,241,229,0.96)', color: C.naranjaDeep }}
            >
              <svg viewBox="0 0 24 24" className="w-[15px] h-[15px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              @{BIZ.instagram}
            </a>
          </Reveal>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-16 pt-28">
          <Reveal>
            <Eyebrow color={C.naranja}>Espresso bar · Domingo Alvarado 1209, Copiapó</Eyebrow>
            <h1
              className={`${display.className} font-extrabold leading-[1.02] tracking-[-0.01em] text-[clamp(2.5rem,8vw,5.6rem)] mb-5`}
              style={{ color: C.tiza }}
            >
              Café de autor,
              <br />
              con <span style={{ color: C.naranja }}>ronroneo</span>
            </h1>
            <p className="text-base md:text-lg leading-relaxed max-w-xl mb-6" style={{ color: 'rgba(245,239,226,0.9)' }}>
              Técnicas manuales, repostería sin azúcar ni gluten, y una
              pizarra que se lee como miau.
            </p>
            <div className="flex items-center gap-2 mb-8">
              <Stars value={5} color={C.naranja} />
              <span className={`${mono.className} text-xs md:text-sm font-bold`} style={{ color: C.tiza }}>
                {BIZ.rating} · {BIZ.reviewsCount} reseñas en Google
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                style={{ backgroundColor: C.naranja, color: C.pizarraDeep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href="#pizarra"
                className={`${display.className} font-bold text-sm md:text-base px-7 py-3.5 rounded-full border-2 transition-colors hover:bg-white/10 ${focusRing} tap-44`}
                style={{ borderColor: 'rgba(245,239,226,0.55)', color: C.tiza }}
              >
                Ver la pizarra
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Cinta de la pizarra ── */}
      <div className="overflow-hidden py-3.5" style={{ backgroundColor: C.pizarra }} aria-hidden="true">
        <div className="cf-marquee flex w-max items-center gap-8">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex items-center gap-8">
              {MARQUEE.map((s) => (
                <span
                  key={`${dup}-${s}`}
                  className={`${display.className} text-base md:text-lg font-semibold whitespace-nowrap flex items-center gap-3`}
                  style={{ color: 'rgba(245,239,226,0.92)' }}
                >
                  <Paw className="w-[13px] h-[13px]" color={C.naranja} />
                  {s}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── La pizarra ── */}
      <section id="pizarra" className="scroll-mt-20 relative" style={{ backgroundColor: C.pizarraDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-8">
          <Reveal>
            <Eyebrow color={C.naranja}>La carta, tal cual la pizarra</Eyebrow>
            <h2
              className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1.02] mb-4`}
              style={{ color: C.tiza }}
            >
              La pizarra <span style={{ color: C.naranja }}>de los miaus</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl" style={{ color: C.tizaSoft }}>
              Cada preparación lleva su nombre de gato. Esta es la carta
              escrita a mano que cuelga en el local, con sus precios.
            </p>
          </Reveal>
        </div>
        <PawTrail color="rgba(245,239,226,0.4)" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-24">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-8 md:gap-12 items-start">
            <Reveal>
              <figure>
                <div
                  className="relative overflow-hidden rounded-[24px] aspect-[3/4] border"
                  style={{ borderColor: C.lineDark, boxShadow: '0 18px 44px rgba(0,0,0,0.35)' }}
                >
                  <Image
                    src={`${IMG}/pizarra.webp`}
                    alt="La pizarra real de Catffeine escrita a mano con tiza: Amiauricano, Catpuccino, Garra V60 y más"
                    fill
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[11px] mt-3`} style={{ color: C.tizaSoft }}>
                  la pizarra real del local, foto de su Google Maps
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={120}>
              <div
                className="rounded-[24px] border-2 border-dashed p-6 md:p-8"
                style={{ borderColor: 'rgba(245,239,226,0.3)', backgroundColor: C.pizarra }}
              >
                <ul>
                  {PIZARRA.map((p) => (
                    <li
                      key={p.name}
                      className="flex items-baseline gap-3 py-3 border-b last:border-b-0"
                      style={{ borderColor: 'rgba(245,239,226,0.12)' }}
                    >
                      <span className={`${display.className} font-bold text-lg md:text-xl leading-none`} style={{ color: C.tiza }}>
                        {p.name}
                      </span>
                      <span className={`${mono.className} text-[11px] uppercase tracking-wider whitespace-nowrap shrink-0`} style={{ color: C.tizaSoft }}>
                        {p.ml}
                      </span>
                      <span className="flex-1 border-b border-dotted mx-1 -translate-y-1" style={{ borderColor: 'rgba(245,239,226,0.25)' }} aria-hidden="true" />
                      <span className={`${mono.className} font-bold text-base md:text-lg`} style={{ color: C.naranja }}>
                        {p.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={`${mono.className} text-[11px] leading-relaxed mt-5`} style={{ color: C.tizaSoft }}>
                  precios en pesos chilenos, tal como están en la pizarra
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Hecho a mano ── */}
      <section id="hecho-a-mano" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal>
              <Eyebrow color={C.naranjaDeep}>Métodos</Eyebrow>
              <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04] mb-7`} style={{ color: C.ink }}>
                Café que se hace
                <br />
                <span style={{ color: C.naranjaDeep }}>a mano, taza a taza</span>
              </h2>
              <ul>
                {METODOS.map((m) => (
                  <li key={m.name} className="flex items-start gap-4 py-4 border-b last:border-b-0" style={{ borderColor: C.line }}>
                    <span className="w-[44px] h-[44px] rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: '#FBE2CE' }}>
                      <MethodIcon kind={m.icon} color={C.naranjaDeep} />
                    </span>
                    <div>
                      <h3 className={`${display.className} font-bold text-base md:text-lg`} style={{ color: C.ink }}>
                        {m.name}
                        <span className={`${mono.className} ml-2 text-[11px] font-normal uppercase tracking-wider`} style={{ color: C.muted }}>
                          · {m.nota}
                        </span>
                      </h3>
                      <p className="text-sm leading-relaxed mt-0.5" style={{ color: C.muted }}>
                        {m.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={120}>
              <div className="relative">
                <div
                  className="relative overflow-hidden rounded-[24px] aspect-[4/3] border"
                  style={{ borderColor: 'rgba(178,74,14,0.25)', boxShadow: '0 18px 40px rgba(38,32,26,0.13)' }}
                >
                  <Image
                    src={`${IMG}/roll.webp`}
                    alt="Té servido en taza blanca junto a un cinnamon roll, sobre el mantel con gatos de Catffeine"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <Paw className="absolute -top-4 right-6 w-[44px] h-[44px] rotate-[14deg] opacity-70" color={C.naranjaDeep} />
              </div>
            </Reveal>
          </div>
          <Reveal delay={100}>
            <div className="mt-10 md:mt-12 flex flex-wrap gap-2.5">
              {PARA_CUIDARTE.map((c) => (
                <span
                  key={c}
                  className={`${mono.className} text-[11px] md:text-xs uppercase tracking-wider px-3.5 py-2 rounded-full border`}
                  style={{ borderColor: 'rgba(178,74,14,0.4)', color: C.naranjaDeep }}
                >
                  {c}
                </span>
              ))}
            </div>
            <p className="text-xs leading-relaxed mt-4 max-w-xl" style={{ color: C.muted }}>
              Las opciones para cuidarse salen de sus reseñas en Google: quienes
              vienen destacan la repostería sin gluten, vegana y sin azúcar.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── La terraza ── */}
      <section id="terraza" className="scroll-mt-20" style={{ backgroundColor: '#EFE7D6' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.naranjaDeep}>El lugar</Eyebrow>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.04] mb-4 max-w-3xl`} style={{ color: C.ink }}>
              Una terraza entre
              <br />
              <span style={{ color: C.naranjaDeep }}>Copayapu y San Román</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-xl mb-10" style={{ color: C.muted }}>
              El café funciona dentro de Espacio Sinergia: se entra por
              Domingo Alvarado 1209 y al fondo está la terraza, con sol de
              mañana y mesas al aire libre.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            <Reveal>
              <figure>
                <div className="relative overflow-hidden rounded-[24px] aspect-[3/4] border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/terraza.webp`}
                    alt="La terraza de Catffeine con mesas y sillas entre dos casas de colores en Copiapó"
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[11px] mt-3`} style={{ color: C.muted }}>
                  la terraza, foto real del local
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={140}>
              <figure>
                <div className="relative overflow-hidden rounded-[24px] aspect-[3/4] border" style={{ borderColor: C.line }}>
                  <Image
                    src={`${IMG}/fachada.webp`}
                    alt="Entrada de Espacio Sinergia en Domingo Alvarado con el letrero de Catffeine"
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className={`${mono.className} text-[11px] mt-3`} style={{ color: C.muted }}>
                  la entrada por Domingo Alvarado
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section id="resenas" className="scroll-mt-20" style={{ backgroundColor: C.pizarraDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <Eyebrow color={C.naranja}>Reseñas de Google</Eyebrow>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4 mb-10 md:mb-12">
              <h2 className={`${display.className} font-extrabold text-4xl md:text-6xl leading-[1.02]`} style={{ color: C.tiza }}>
                Los que vinieron,
                <br />
                <span style={{ color: C.naranja }}>vuelven</span>
              </h2>
              <div className="pb-1.5 md:pb-2">
                <Stars value={5} color={C.naranja} className="w-5 h-5" />
                <p className={`${mono.className} text-xs md:text-sm font-bold mt-1.5`} style={{ color: C.tizaSoft }}>
                  {BIZ.rating} · {BIZ.reviewsCount} reseñas
                </p>
              </div>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {RESENAS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 110}>
                <figure
                  className="h-full rounded-[24px] border p-6 flex flex-col"
                  style={{ backgroundColor: C.pizarra, borderColor: C.lineDark }}
                >
                  <Stars value={5} color={C.naranja} className="w-3.5 h-3.5 mb-4" />
                  <blockquote className="text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(245,239,226,0.88)' }}>
                    “{r.texto}”
                  </blockquote>
                  <figcaption className={`${mono.className} text-[11px] uppercase tracking-wider mt-5`} style={{ color: C.tizaSoft }}>
                    {r.nombre} · {r.cuando}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Visita: mapa + ficha ── */}
      <section id="visita" className="scroll-mt-20" style={{ backgroundColor: C.crema }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-8">
          <Reveal>
            <h2 className={`${display.className} font-extrabold text-4xl md:text-5xl leading-[1.06] mb-3`} style={{ color: C.ink }}>
              Pásate por
              <span style={{ color: C.naranjaDeep }}> un catpuccino</span>
            </h2>
            <p className="text-sm md:text-base leading-relaxed max-w-lg mb-8" style={{ color: C.muted }}>
              Abre de lunes a sábado; el almuerzo y la once se toman mejor
              en la terraza.
            </p>
            <div className="relative overflow-hidden rounded-[24px] border aspect-[16/9] md:aspect-[21/8]" style={{ borderColor: C.line }}>
              <Image
                src={`${IMG}/barra.webp`}
                alt="Interior de Catffeine con la barra de café y banderines de papel picado"
                fill
                sizes="(min-width: 768px) 75vw, 100vw"
                className="object-cover"
              />
            </div>
            <p className={`${mono.className} text-[11px] leading-relaxed mt-2.5`} style={{ color: C.muted }}>
              interior del local, foto real
            </p>
          </Reveal>
        </div>
        <div className="relative">
          <div className="h-[300px] md:h-[460px]">
            <LazyMap
              title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
              src={MAPS_EMBED}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="px-5 md:px-8">
            <div className="relative mt-6 md:mt-0 md:absolute md:top-1/2 md:left-8 md:-translate-y-1/2 md:w-[400px] z-10">
              <Reveal>
                <div
                  className="rounded-[24px] border p-6 md:p-7 max-w-[400px] mx-auto md:mx-0 md:max-w-none shadow-xl"
                  style={{ backgroundColor: C.card, borderColor: C.line }}
                >
                  <p className={`${display.className} font-bold text-lg mb-1`} style={{ color: C.ink }}>
                    {BIZ.name}
                  </p>
                  <address className="not-italic text-sm leading-relaxed mb-4" style={{ color: C.muted }}>
                    {BIZ.address}, {BIZ.city}
                    <br />
                    <span className="text-xs">{BIZ.entre} · dentro de {BIZ.dentro}</span>
                  </address>
                  <ul className="space-y-2 mb-5">
                    {HORARIO.map((h) => (
                      <li key={h.dia} className="flex items-baseline justify-between gap-3 text-sm" style={{ color: C.muted }}>
                        <span className="font-bold" style={{ color: C.ink }}>{h.dia}</span>
                        <span className={`${mono.className} text-xs md:text-[13px]`}>{h.horas}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={`${mono.className} text-[11px] leading-relaxed mb-5`} style={{ color: C.muted }}>
                    horario publicado en su ficha de Google
                  </p>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href={WA_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} font-bold text-sm px-5 py-2.5 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-lg active:scale-95 ${focusRing} tap-44`}
                      style={{ backgroundColor: C.naranjaDeep, color: C.tiza }}
                    >
                      Escribir por WhatsApp
                    </a>
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${display.className} font-bold text-sm px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-black/5 ${focusRing} tap-44`}
                      style={{ borderColor: 'rgba(38,32,26,0.3)', color: C.ink }}
                    >
                      Cómo llegar →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <div className="h-10 md:h-0" />
      </section>

      {/* ── CTA final ── */}
      <section className="relative overflow-hidden" style={{ backgroundColor: C.pizarraDeep }}>
        <Image
          src={`${IMG}/tetera.webp`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-[0.13]"
          aria-hidden="true"
        />
        <div className="relative max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28 text-center">
          <Reveal>
            <Paw className="w-[30px] h-[30px] mx-auto mb-5" color={C.naranja} />
            <h2
              className={`${display.className} font-extrabold text-[clamp(2.1rem,6.5vw,4rem)] leading-[1.05] mb-6`}
              style={{ color: C.tiza }}
            >
              ¿Te tienta
              <br />
              <span style={{ color: C.naranja }}>un catpuccino?</span>
            </h2>
            <p className="text-sm md:text-base max-w-md mx-auto mb-9 leading-relaxed" style={{ color: 'rgba(245,239,226,0.8)' }}>
              Escríbeles por WhatsApp para la carta del día, encargos de
              repostería o para saludar al gato de la casa.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`${display.className} inline-block font-bold text-sm md:text-base px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 hover:shadow-xl active:scale-95 ${focusRing} tap-44`}
              style={{ backgroundColor: C.naranja, color: C.pizarraDeep }}
            >
              Escribir por WhatsApp
            </a>
            <p className={`${mono.className} text-xs mt-5`} style={{ color: 'rgba(245,239,226,0.8)' }}>
              {BIZ.phoneDisplay} · @{BIZ.instagram}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Footer compacto ── */}
      <footer style={{ backgroundColor: C.pizarraDeep, color: C.tiza }}>
        <div className="border-t" style={{ borderColor: C.lineDark }}>
          <div className="max-w-6xl mx-auto px-5 md:px-8 pt-7 pb-24">
            <p className={`${display.className} font-bold text-xl mb-1 flex items-center gap-3`}>
              <Paw className="w-5 h-5" color={C.naranja} />
              {BIZ.name}
            </p>
            <p className="text-sm mb-2" style={{ color: 'rgba(245,239,226,0.8)' }}>
              {BIZ.address}, {BIZ.city} · {BIZ.dentro}
            </p>
            <p className="text-xs leading-relaxed" style={{ color: 'rgba(245,239,226,0.72)' }}>
              Sitio de ejemplo de Sitiazo: nombre, dirección, teléfono, horario,
              rating, reseñas y carta de la pizarra son los datos reales del
              negocio, tomados de Google Maps y su Instagram.
            </p>
          </div>
        </div>
      </footer>

      <DemoBand name={BIZ.name} />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
