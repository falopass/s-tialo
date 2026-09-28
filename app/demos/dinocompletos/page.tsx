import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, WaFab, Stars } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'

const display = localFont({ src: '../../fonts/anton/normal-400.woff2', weight: '400' })
const condensed = localFont({
  src: [
    { path: '../../fonts/barlow-condensed/normal-500.woff2', weight: '500' },
    { path: '../../fonts/barlow-condensed/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow-condensed/normal-700.woff2', weight: '700' },
    { path: '../../fonts/barlow-condensed/normal-800.woff2', weight: '800' },
  ],
  variable: '--font-cond',
})
const body = localFont({
  src: [
    { path: '../../fonts/barlow/normal-400.woff2', weight: '400' },
    { path: '../../fonts/barlow/normal-600.woff2', weight: '600' },
    { path: '../../fonts/barlow/normal-700.woff2', weight: '700' },
  ],
  variable: '--font-body',
})

// Paleta del mural del local: rojo racing, negro asfalto, blanco de bandera.
const C = {
  red: '#C0181F',
  redHot: '#F04B40',
  asphalt: '#17130F',
  asphalt2: '#241D15',
  cream: '#FAF6EF',
  creamSoft: '#F0E7D8',
  muted: '#A39A8E',
  line: 'rgba(250,246,239,0.16)',
}

export const metadata: Metadata = demoMetadata({
  slug: 'dinocompletos',
  title: 'Dinocompletos — Completos y sandwiches en Molina',
  description:
    'Restaurant de completos en Yerbas Buenas 1598, Molina. 4.7 estrellas en Google con más de 1.200 reseñas. Pedidos y consultas por WhatsApp.',
  image: `${IMG}/fachada.webp`,
})

/** Franja de bandera a cuadros — el motivo del mural del local. */
function Checkered({ flip = false, dark = true }: { flip?: boolean; dark?: boolean }) {
  const a = dark ? C.asphalt : C.cream
  const b = dark ? C.cream : C.asphalt
  return (
    <div aria-hidden="true" className={`w-full h-[14px] flex ${flip ? 'rotate-180' : ''}`}>
      <svg viewBox="0 0 120 14" preserveAspectRatio="none" className="w-full h-full">
        {Array.from({ length: 20 }).map((_, i) => (
          <g key={i}>
            <rect x={i * 6} y={0} width={6} height={7} fill={i % 2 === 0 ? a : b} />
            <rect x={i * 6} y={7} width={6} height={7} fill={i % 2 === 0 ? b : a} />
          </g>
        ))}
      </svg>
    </div>
  )
}

/** Líneas de velocidad inclinadas. */
function SpeedLines({ color = 'rgba(250,246,239,0.25)' }: { color?: string }) {
  return (
    <div aria-hidden="true" className="flex gap-[10px] h-[26px] items-stretch">
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="w-[3px] -skew-x-[24deg]" style={{ backgroundColor: color }} />
      ))}
    </div>
  )
}

const CARTA = [
  {
    name: 'Completo',
    note: 'el clásico de la casa',
    desc: 'El que la gente nombra primero en sus reseñas: pan suave, vienesa y la mayo de la casa.',
  },
  {
    name: 'Mechada',
    note: 'la favorita de las familias',
    desc: 'Carne desmechada generosa. En reseñas la llaman una de las mejores que han probado.',
  },
  {
    name: 'Chacarero',
    note: 'verde y con carácter',
    desc: 'El clásico chileno con porotos verdes: otro de los que se repite en las reseñas.',
  },
  {
    name: 'As italiano',
    note: 'palta, tomate y mayo',
    desc: 'Sandwich de as con la bandera verde-blanco-rojo encima.',
  },
]

const FOTOS = [
  {
    src: `${IMG}/completo.webp`,
    alt: 'Completo con vienesa, salsa y mayo casera en Dinocompletos Molina',
    tag: 'el completo, de cerca',
    big: true,
  },
  {
    src: `${IMG}/mesa.webp`,
    alt: 'Tres completos servidos en la mesa del restaurant',
    tag: 'salida de cocina',
  },
  {
    src: `${IMG}/plato.webp`,
    alt: 'Dos completos con palta y churrasco desmenuzado en plato',
    tag: 'con palta y mechada',
  },
  {
    src: `${IMG}/interior.webp`,
    alt: 'Interior del local con mesas rojas y neón al fondo',
    tag: 'el salón',
  },
]

const RESENAS = [
  {
    name: 'Pablo Coronado Arias',
    stars: 5,
    text: 'El lugar es amplio, iluminado y limpio. La atención es inmediata y los completos los entregan en tiempo récord y además son super grandes y ricos. Punto aparte la mayo; es deliciosa. 10/10',
  },
  {
    name: 'Tamar Yañez',
    stars: 5,
    text: 'Una maravilla en Molina: su atención y servicio excepcional, en menos de 5 minutos las órdenes estaban servidas. El completo es riquísimo y según mi familia la mechada es una de las mejores que han probado.',
  },
  {
    name: 'Nicolás Muñoz',
    stars: 5,
    text: 'Muy buen servicio y lindo lugar, la atención es excelente, ojalá otros locales pudieran replicarlo. Está más que bien por los valores que manejan, sin duda recomiendo visitar este lugar.',
  },
]

const HORAS = [
  { days: 'Lunes a sábado', time: '9:00 – 24:00' },
  { days: 'Domingo', time: 'Cerrado' },
]

export default function DinocompletosPage() {
  return (
    <div
      className={`${body.className} ${body.variable} ${condensed.variable} min-h-screen antialiased`}
      style={{ backgroundColor: C.asphalt, color: C.cream }}
    >
      {/* ── Header fijo ── */}
      <header className="fixed top-0 inset-x-0 z-40" style={{ backgroundColor: 'rgba(23,19,15,0.88)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', borderBottom: `1px solid ${C.line}` }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-[58px] flex items-center justify-between gap-4">
          <a href="#inicio" className="flex items-center gap-3 tap-44">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del mural del local */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover ring-1 ring-white/30" aria-hidden="true" />
            <span className={`${display.className} text-lg tracking-wide uppercase`}>Dinocompletos</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold uppercase tracking-[0.14em]" aria-label="Principal">
            <a href="#carta" className="tap-44 hover:text-[#E33B2E] transition-colors" style={{ color: 'rgba(250,246,239,0.85)' }}>La carta</a>
            <a href="#garage" className="tap-44 hover:text-[#E33B2E] transition-colors" style={{ color: 'rgba(250,246,239,0.85)' }}>El garage</a>
            <a href="#llegar" className="tap-44 hover:text-[#E33B2E] transition-colors" style={{ color: 'rgba(250,246,239,0.85)' }}>Cómo llegar</a>
          </nav>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold px-4 py-2 uppercase tracking-wide tap-44 transition-transform active:scale-95"
            style={{ backgroundColor: C.red, color: C.cream }}
          >
            Pedir
          </a>
        </div>
      </header>

      {/* ── Hero: la fachada + marcador ── */}
      <section id="inicio" className="relative">
        <div className="relative h-[76vh] min-h-[520px] overflow-hidden">
          <Image
            src={`${IMG}/fachada.webp`}
            alt="Fachada de Dinocompletos en Yerbas Buenas, Molina: local rojo con letrero Hot Dog"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(23,19,15,0.55) 0%, rgba(23,19,15,0.25) 40%, rgba(23,19,15,0.92) 88%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-10">
              <Reveal>
                <div className="flex items-center gap-4 mb-4">
                  <SpeedLines color={C.redHot} />
                  <p className="text-[11px] md:text-xs font-bold uppercase tracking-[0.3em]" style={{ color: C.redHot }}>
                    Yerbas Buenas 1598 · Molina
                  </p>
                </div>
                <h1
                  className={`${display.className} uppercase leading-[0.92] tracking-[-0.01em] text-[clamp(3rem,12vw,8rem)]`}
                  style={{ color: C.cream, textShadow: '0 2px 24px rgba(0,0,0,0.5)' }}
                >
                  Dino<span style={{ color: C.redHot }}>completos</span>
                </h1>
                <p className="mt-4 text-base md:text-xl max-w-xl leading-relaxed" style={{ color: 'rgba(250,246,239,0.88)' }}>
                  Completos, mechadas y sandwiches servidos en tiempo récord,
                  en el restaurant con más reseñas de la comuna.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base font-bold px-7 py-3 uppercase tracking-wide tap-44 transition-transform active:scale-95"
                    style={{ backgroundColor: C.red, color: C.cream }}
                  >
                    Pedir por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className="text-sm md:text-base font-bold px-7 py-3 uppercase tracking-wide border-2 tap-44 transition-colors hover:bg-white/10"
                    style={{ borderColor: 'rgba(250,246,239,0.6)', color: C.cream }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
        <Checkered />
      </section>

      {/* ── Tablero de carrera: números que pesan ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: C.line }}>
          {[
            { n: '4.7', l: 'estrellas en Google' },
            { n: BIZ.reviews, l: 'reseñas reales' },
            { n: '<5 min', l: 'de pedido a mesa, según clientes' },
            { n: '9–24', l: 'lun a sáb, hasta medianoche' },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 80}>
              <div className="px-5 py-6 md:py-8 h-full" style={{ backgroundColor: C.asphalt2 }}>
                <p className={`${display.className} text-3xl md:text-5xl`} style={{ color: i === 0 ? C.redHot : C.cream }}>
                  {s.n}
                </p>
                <p className="mt-1.5 text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: C.muted }}>
                  {s.l}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── La carta del garage ── */}
      <section id="carta" className="scroll-mt-16" style={{ backgroundColor: C.cream, color: C.asphalt }}>
        <Checkered dark={false} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4 mb-8 md:mb-12">
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`}>
                Los que suenan
                <br />
                <span style={{ color: C.red }}>en las reseñas</span>
              </h2>
              <p className="text-sm md:text-base max-w-xs leading-relaxed" style={{ color: '#6B5F52' }}>
                La carta completa se ve en el local. Estos son los platos que
                los clientes nombran una y otra vez en Google.
              </p>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-start">
            {/* pizarra */}
            <div>
              {CARTA.map((it, i) => (
                <Reveal key={it.name} delay={i * 70}>
                  <article className="flex items-baseline gap-4 py-5 border-b-2 border-dashed" style={{ borderColor: 'rgba(23,19,15,0.2)' }}>
                    <span className={`${display.className} text-xl md:text-2xl w-8 shrink-0`} style={{ color: C.red }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className={`${display.className} uppercase text-2xl md:text-3xl leading-none`}>{it.name}</h3>
                      <p className="mt-1 text-xs md:text-sm font-bold uppercase tracking-[0.16em]" style={{ color: C.red }}>
                        {it.note}
                      </p>
                    </div>
                    <p className="hidden sm:block max-w-[220px] text-sm leading-snug shrink-0" style={{ color: '#6B5F52' }}>
                      {it.desc}
                    </p>
                  </article>
                </Reveal>
              ))}
              <Reveal delay={CARTA.length * 70}>
                <div className="pt-6">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold uppercase tracking-wide underline underline-offset-4 decoration-2 hover:opacity-80 tap-44"
                    style={{ color: C.red, textDecorationColor: C.asphalt }}
                  >
                    Preguntar qué hay hoy →
                  </a>
                </div>
              </Reveal>
            </div>

            {/* foto en marcador */}
            <Reveal delay={120}>
              <figure className="relative">
                <div className="relative aspect-[4/5] overflow-hidden" style={{ border: `3px solid ${C.asphalt}` }}>
                  <Image
                    src={`${IMG}/completo.webp`}
                    alt="Completo de Dinocompletos con vienesa, salsa y mayo, en primer plano"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className="absolute -bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5"
                  style={{ backgroundColor: C.asphalt, color: C.cream }}
                >
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em]">el completo insignia</span>
                  <SpeedLines color={C.redHot} />
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── El garage ── */}
      <section id="garage" className="scroll-mt-16">
        <Checkered flip />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20">
          <Reveal>
            <div className="flex items-center gap-5 mb-8 md:mb-12">
              <SpeedLines color={C.redHot} />
              <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-none`}>
                El garage de los completos
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-4 md:gap-5">
            <Reveal className="md:row-span-2">
              <figure className="relative h-full min-h-[320px] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/mural.webp`}
                  alt="Mural del local: logo Dino Garage con banderas a cuadros y hot dog"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: 'rgba(23,19,15,0.85)', color: C.cream }}>
                  el logo, pintado en el muro
                </figcaption>
              </figure>
            </Reveal>
            {FOTOS.slice(1).map((f, i) => (
              <Reveal key={f.src} delay={(i + 1) * 80}>
                <figure className="relative aspect-[4/3] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                  <Image
                    src={f.src}
                    alt={f.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  />
                  <figcaption className="absolute bottom-0 inset-x-0 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: 'rgba(23,19,15,0.85)', color: C.cream }}>
                    {f.tag}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
            <Reveal delay={400}>
              <figure className="relative aspect-[4/3] overflow-hidden" style={{ border: `1px solid ${C.line}` }}>
                <Image
                  src={`${IMG}/auto.webp`}
                  alt="Auto de rally azul estacionado frente al local de Dinocompletos"
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                />
                <figcaption className="absolute bottom-0 inset-x-0 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ backgroundColor: 'rgba(23,19,15,0.85)', color: C.cream }}>
                  clientes de carrera
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Reseñas ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 pb-14 md:pb-20">
        <Reveal>
          <div className="flex items-center gap-4 mb-8">
            <Stars value={BIZ.rating} color={C.redHot} className="w-5 h-5" />
            <p className="text-sm md:text-base font-bold uppercase tracking-[0.18em]" style={{ color: 'rgba(250,246,239,0.75)' }}>
              {BIZ.rating} en Google · {BIZ.reviews} reseñas
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: C.line }}>
          {RESENAS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <figure className="h-full p-6 flex flex-col" style={{ backgroundColor: C.asphalt2 }}>
                <Stars value={r.stars} color={C.redHot} className="w-4 h-4" />
                <blockquote className="mt-4 text-sm md:text-[15px] leading-relaxed flex-1" style={{ color: 'rgba(250,246,239,0.88)' }}>
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-5 text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: C.muted }}>
                  {r.name} · reseña de Google
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Cómo llegar ── */}
      <section id="llegar" className="scroll-mt-16" style={{ backgroundColor: C.red }}>
        <Checkered dark={false} />
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 md:py-20 grid md:grid-cols-2 gap-10 md:gap-14 items-stretch">
          <Reveal>
            <SpeedLines color="rgba(250,246,239,0.6)" />
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl leading-[0.95] mt-4`} style={{ color: C.cream }}>
              Para los que van
              <br />
              pasando por Molina
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: 'rgba(250,246,239,0.92)' }}>
              {BIZ.address}, {BIZ.city}. Pide por WhatsApp y pasa a retirar,
              o siéntate en el salón o en la terraza con sombrillas.
            </p>
            <ul className="mt-6 space-y-2.5">
              {HORAS.map((h) => (
                <li key={h.days} className="flex items-center gap-3 text-sm md:text-base font-semibold" style={{ color: C.cream }}>
                  <span className="w-2 h-2 shrink-0" style={{ backgroundColor: C.cream }} aria-hidden="true" />
                  {h.days}: {h.time}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3 uppercase tracking-wide tap-44 transition-transform active:scale-95"
                style={{ backgroundColor: C.asphalt, color: C.cream }}
              >
                Pedir por WhatsApp
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-bold px-7 py-3 uppercase tracking-wide border-2 tap-44 transition-colors hover:bg-white/10"
                style={{ borderColor: 'rgba(250,246,239,0.7)', color: C.cream }}
              >
                Abrir en Maps →
              </a>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <div className="min-h-[320px] h-full overflow-hidden" style={{ border: '3px solid rgba(23,19,15,0.85)' }}>
              <LazyMap
                title={`Mapa: ${BIZ.name}, ${BIZ.city}`}
                src={MAPS_EMBED}
                className="w-full h-full min-h-[320px]"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Pie ── */}
      <footer style={{ backgroundColor: C.asphalt }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- logo real del mural */}
            <img src={`${IMG}/logo.webp`} alt="" className="w-9 h-9 rounded-full object-cover ring-1 ring-white/30" aria-hidden="true" />
            <div>
              <p className={`${display.className} uppercase text-lg leading-none`}>Dinocompletos</p>
              <address className="not-italic text-xs mt-1" style={{ color: C.muted }}>
                {BIZ.address}, {BIZ.city} ·{' '}
                <a href={`tel:${BIZ.phoneTel}`} className="underline underline-offset-2 hover:text-white tap-44">{BIZ.phoneDisplay}</a>
              </address>
            </div>
          </div>
          <p className="text-xs leading-relaxed md:max-w-[26rem]" style={{ color: C.muted }}>
            Mockup de Sitiazo: datos del local, horario, reseñas y fotos reales de su ficha de Google.
          </p>
        </div>
      </footer>

      <WaFab href={WA_LINK} label={`Pedir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
