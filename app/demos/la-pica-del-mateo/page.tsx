import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG, CARTA, PLATOS, RESENAS } from './content'
import LazyMap from '../lazy-map'

const display = localFont({
  src: [{ path: '../../fonts/gloock/normal-400.woff2', weight: '400', style: 'normal' }],
})
const body = localFont({
  src: [{ path: '../../fonts/work-sans/normal-100-900.woff2', weight: '100 900', style: 'normal' }],
})
const mono = localFont({
  src: [{ path: '../../fonts/space-mono/normal-700.woff2', weight: '700', style: 'normal' }],
})

/**
 * Paleta del demo: la identidad real del local — el letrero amarillo con
 * letra roja de la fachada. Mantel crema, ladrillo y tiza amarilla.
 */
const C = {
  cream: '#FAF3E3',
  brick: '#A9232B',
  brickDeep: '#6E1620',
  chalk: '#F5C62F',
  board: '#2B120E',
  ink: '#331B14',
  muted: '#7A6157',
  line: 'rgba(51,27,20,0.14)',
}

const FOCUS = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9232B]'
const BTN_WA = `inline-flex items-center justify-center gap-2 rounded-full font-bold transition-transform hover:-translate-y-0.5 active:scale-95 ${FOCUS}`

export const metadata: Metadata = demoMetadata({
  slug: 'la-pica-del-mateo',
  title: 'La Pica del Mateo — Casa de comidas en San Clemente',
  description: 'Casa de comidas en Carlos Silva Renard 883, San Clemente: completos, cazuelas, salchipapas y desayunos. Pedidos por WhatsApp.',
  image: '/demos/la-pica-del-mateo/hero.webp',
})

const NAV = [
  { label: 'La carta', href: '#carta' },
  { label: 'Los platos', href: '#platos' },
  { label: 'El local', href: '#local' },
  { label: 'Contacto', href: '#contacto' },
]

const MARQUEE = ['Completos', 'Churrascos', 'Lomitos', 'Salchipapas', 'Empanadas de queso', 'Cazuelas', 'Sopaipillas', 'Paila de huevo', 'Nuggets', 'Papas fritas']

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-4`} style={{ color: light ? C.chalk : C.brick }}>
      {children}
    </p>
  )
}

export default function LaPicaDelMateoPage() {
  return (
    <div className={`${body.className} antialiased`} style={{ backgroundColor: C.cream, color: C.ink }}>
      <style>{`
        @keyframes mateo-marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .mateo-marquee { animation: mateo-marquee 32s linear infinite; }
        @media (prefers-reduced-motion: reduce) { .mateo-marquee { animation: none; } }
      `}</style>

      {/* Nav — barra mantel con el letrero real */}
      <nav
        className="fixed top-0 inset-x-0 z-40 border-b"
        style={{ backgroundColor: 'rgba(250,243,227,0.94)', borderColor: C.line, backdropFilter: 'blur(8px)' }}
        aria-label="Principal"
      >
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 h-16 flex items-center justify-between gap-4">
          <a href="#inicio" className={`flex items-center gap-3 ${FOCUS} tap-44 rounded-md`}>
            <span className="relative h-9 w-24 md:w-28 shrink-0 rounded-md overflow-hidden border" style={{ borderColor: C.brick }}>
              <Image src={`${IMG}/logo.webp`} alt="Letrero de La Pica del Mateo" fill className="object-cover" sizes="112px" />
            </span>
            <span className={`${display.className} text-sm md:text-base hidden sm:inline`} style={{ color: C.brickDeep }}>
              La Pica del Mateo
            </span>
          </a>
          <ul className="hidden md:flex gap-7 text-sm font-medium" style={{ color: C.muted }}>
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className={`hover:text-[#A9232B] rounded-sm ${FOCUS} tap-44`}>{l.label}</a>
              </li>
            ))}
          </ul>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`${BTN_WA} px-5 py-2.5 text-sm tap-44`}
            style={{ backgroundColor: C.brick, color: C.cream }}
          >
            Pedir
          </a>
        </div>
      </nav>

      {/* Hero — la fachada con su letrero amarillo */}
      <header id="inicio" className="relative min-h-svh overflow-hidden flex flex-col justify-end" style={{ backgroundColor: C.brickDeep }}>
        <Image
          src={`${IMG}/hero.webp`}
          alt="Fachada de La Pica del Mateo en Carlos Silva Renard 883, San Clemente, con su letrero amarillo y la carta pintada"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(180deg, ${C.brickDeep}66 0%, transparent 35%, ${C.brickDeep}f5 82%)` }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-8 w-full pb-14 pt-40">
          <Reveal>
            <p className={`${mono.className} text-[11px] uppercase tracking-[0.26em] mb-5`} style={{ color: C.chalk }}>
              {BIZ.rubro} · {BIZ.city}
            </p>
            <h1 className={`${display.className} max-w-[13ch] text-5xl sm:text-6xl md:text-8xl leading-[0.98] mb-6`} style={{ color: C.cream }}>
              La picada de <span style={{ color: C.chalk }}>San Clemente</span>
            </h1>
            <p className="max-w-[34rem] text-base md:text-lg leading-relaxed mb-8" style={{ color: 'rgba(250,243,227,0.85)' }}>
              Casa de comidas a pasos de la plaza: completos, cazuelas en greda y desayunos de paila. La carta es la misma que está pintada en la puerta.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44`}
                style={{ backgroundColor: C.chalk, color: C.brickDeep }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href="#carta"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44 border-2`}
                style={{ borderColor: 'rgba(250,243,227,0.5)', color: C.cream }}
              >
                Ver la carta
              </a>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Cinta corrida — el letrero que no se acaba */}
      <div className="overflow-hidden border-y-4 py-3" style={{ backgroundColor: C.brick, borderColor: C.chalk }} aria-hidden="true">
        <div className="mateo-marquee flex whitespace-nowrap w-max">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center">
              {MARQUEE.map((d) => (
                <span key={`${rep}-${d}`} className={`${display.className} text-lg md:text-2xl mx-5`} style={{ color: C.cream }}>
                  {d}
                  <span className="mx-5" style={{ color: C.chalk }}>·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* La carta — los pizarrones, igual que en la puerta */}
      <section id="carta" className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal className="max-w-[40rem]">
          <Eyebrow>La carta · tal como está en la fachada</Eyebrow>
          <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mb-4`} style={{ color: C.brickDeep }}>
            El pizarrón es <span style={{ color: C.brick }}>el menú</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: C.muted }}>
            Sin letra chica ni QR: los platos se leen pintados afuera del local. Estos son los carteles reales de Carlos Silva Renard 883.
          </p>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {CARTA.map((b, i) => (
            <Reveal key={b.board} delay={i * 80}>
              <div
                className="rounded-xl h-full p-6 md:p-7 border-4"
                style={{ backgroundColor: C.board, borderColor: C.chalk, boxShadow: `0 14px 30px -18px ${C.board}` }}
              >
                <h3 className={`${display.className} text-xl md:text-2xl mb-5 pb-4 border-b`} style={{ color: C.chalk, borderColor: 'rgba(245,198,47,0.35)' }}>
                  {b.board}
                </h3>
                <ul className="space-y-3">
                  {b.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-sm md:text-base font-medium" style={{ color: C.cream }}>
                      <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.brick }} aria-hidden="true" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={160}>
          <p className={`${mono.className} mt-8 text-xs uppercase tracking-[0.2em]`} style={{ color: C.muted }}>
            Precios al día en el local o por WhatsApp
          </p>
        </Reveal>
      </section>

      {/* Los platos — fotos reales de la cocina */}
      <section id="platos" className="py-16 md:py-24" style={{ backgroundColor: C.brickDeep }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8">
          <Reveal className="max-w-[40rem]">
            <Eyebrow light>Lo que sale de la cocina</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mb-12`} style={{ color: C.cream }}>
              Platos de verdad, <span style={{ color: C.chalk }}>fotos de verdad</span>
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
            {PLATOS.map((p, i) => (
              <Reveal key={p.src} delay={i * 60} className={i === 0 ? 'col-span-2 lg:col-span-2' : ''}>
                <figure className="group">
                  <div className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'h-56 md:h-80' : 'h-44 md:h-64'}`}>
                    <Image src={p.src} alt={p.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 1024px) 50vw, 33vw" />
                  </div>
                  <figcaption className={`${mono.className} mt-2.5 text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.chalk }}>
                    {p.name}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* El local — fachada lateral y cocina */}
      <section id="local" className="max-w-[1200px] mx-auto px-5 md:px-8 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="grid grid-cols-5 gap-3 md:gap-4">
              <div className="relative col-span-3 h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image src={`${IMG}/local.webp`} alt="Fachada lateral del local con la carta pintada en la pared" fill className="object-cover" sizes="(max-width: 1024px) 60vw, 400px" />
              </div>
              <div className="relative col-span-2 h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image src={`${IMG}/cocina.webp`} alt="Pollo con papas recién servido en la cocina de La Pica" fill className="object-cover" sizes="(max-width: 1024px) 40vw, 280px" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <Eyebrow>El local</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-5xl leading-[1.02] mb-5`} style={{ color: C.brickDeep }}>
              Una casa de comidas <span style={{ color: C.brick }}>del centro</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-5" style={{ color: C.muted }}>
              En Carlos Silva Renard 883 cocinan para San Clemente todos los días: desayunos de paila en la mañana, platos de fondo al almuerzo y completos hasta la tarde.
            </p>
            <ul className="space-y-3 mb-8">
              {['Atención familiar, del mostrador a la mesa', 'Cocina a la vista y porciones abundantes', 'Pedidos para retirar por WhatsApp'].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm md:text-base font-medium" style={{ color: C.ink }}>
                  <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: C.brick }} aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-3">
              <span className={`${display.className} text-3xl`} style={{ color: C.brickDeep }}>{BIZ.rating}★</span>
              <p className="text-xs font-medium leading-snug" style={{ color: C.muted }}>
                {BIZ.reviews} reseñas en Google<br />{BIZ.followers} seguidores en Facebook
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reseñas reales */}
      <section className="max-w-[1200px] mx-auto px-5 md:px-8 pb-16 md:pb-24">
        <Reveal>
          <Eyebrow>Los que ya almorzaron</Eyebrow>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          {RESENAS.map((r, i) => (
            <Reveal key={r.author} delay={i * 80}>
              <figure className="rounded-2xl p-7 md:p-8 h-full border-2" style={{ backgroundColor: '#FFFFFF', borderColor: C.line }}>
                <div className="flex gap-1 mb-4" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <svg key={s} viewBox="0 0 24 24" className="w-4 h-4" fill={C.chalk} stroke={C.brick} strokeWidth="1" strokeLinejoin="round">
                      <path d="M12 3.2l2.6 5.5 6 .7-4.4 4.1 1.2 5.9L12 16.6l-5.4 2.8 1.2-5.9-4.4-4.1 6-.7z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-base md:text-lg leading-relaxed mb-5 font-medium" style={{ color: C.ink }}>
                  “{r.text}”
                </blockquote>
                <figcaption className={`${mono.className} text-[11px] uppercase tracking-[0.18em]`} style={{ color: C.muted }}>
                  {r.author} · {r.meta}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contacto — dirección, mapa, WhatsApp */}
      <section id="contacto" className="py-16 md:py-24" style={{ backgroundColor: C.brick }}>
        <div className="max-w-[1200px] mx-auto px-5 md:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Eyebrow light>Para llegar</Eyebrow>
            <h2 className={`${display.className} text-4xl md:text-6xl leading-[1.02] mb-6`} style={{ color: C.cream }}>
              Carlos Silva Renard 883, <span style={{ color: C.chalk }}>San Clemente</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed mb-8 max-w-md" style={{ color: 'rgba(250,243,227,0.85)' }}>
              Abierto todos los días. Escribe por WhatsApp para pedir o consultar la carta del día.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44`}
                style={{ backgroundColor: C.chalk, color: C.brickDeep }}
              >
                Escribir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${BTN_WA} px-7 py-3.5 text-sm md:text-base tap-44 border-2`}
                style={{ borderColor: 'rgba(250,243,227,0.5)', color: C.cream }}
              >
                Cómo llegar
              </a>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl overflow-hidden border-4 h-80 md:h-[26rem]" style={{ borderColor: C.chalk }}>
              <LazyMap
                src={MAPS_EMBED}
                title="Mapa: La Pica del Mateo, Carlos Silva Renard 883, San Clemente"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="px-5 md:px-8 py-7 text-center" style={{ backgroundColor: C.brickDeep, color: 'rgba(250,243,227,0.6)' }}>
        <p className="text-xs">
          {BIZ.name} · {BIZ.address}, {BIZ.city} ·{' '}
          <a href={BIZ.facebook} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4" style={{ color: C.chalk }}>
            Facebook
          </a>{' '}
          · demo de sitio web
        </p>
      </footer>

      <WaFab href={WA_LINK} label="WhatsApp de La Pica del Mateo" />
    </div>
  )
}
