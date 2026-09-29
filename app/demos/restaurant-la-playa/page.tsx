import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'

const display = localFont({
  src: [{ path: '../../fonts/baloo-2/normal-400-800.woff2', weight: '400 800', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

const C = {
  arena: '#F4EAD6',
  arenaDeep: '#EAD9BC',
  teal: '#0C4647',
  tealPanel: '#0E5258',
  tealSoft: 'rgba(12,70,71,0.72)',
  sol: '#C05A28',
  line: 'rgba(12,70,71,0.18)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

export const metadata: Metadata = demoMetadata({
  slug: 'restaurant-la-playa',
  title: 'Restaurant La Playa · Llico, Vichuquén',
  description:
    'Mariscos y pescados frente a la playa de Llico: paila marina, ceviche, empanadas de mar y hostería. Av. Ignacio Carrera Pinto, Vichuquén.',
  image: `${IMG}/hero.webp`,
})

const NAV_LINKS = [
  { label: 'La carta', href: '#carta' },
  { label: 'La terraza', href: '#terraza' },
  { label: 'Cómo llegar', href: '#llegar' },
]

// Carta real del restaurante (transcrita de su carta física).
const CARTA = [
  {
    grupo: 'Entrantes',
    items: [
      ['Ceviche de reineta', '$11.000'],
      ['Machas a la parmesana', '$15.000'],
      ['Ostiones a la parmesana', '$18.000'],
      ['Locos mayo o salsa verde', '$20.000'],
      ['Jardín de marisco', '$28.800'],
    ],
  },
  {
    grupo: 'Empanadas',
    items: [
      ['De queso', '$4.500'],
      ['Camarón queso', '$6.000'],
      ['Jaiba queso', '$6.000'],
      ['Macha o loco queso', '$7.000'],
      ['Pino de marisco', '$7.000'],
    ],
  },
  {
    grupo: 'Pescados (con agregado)',
    items: [
      ['Merluza', '$9.800'],
      ['Reineta', '$11.000'],
      ['Corvina', '$12.000'],
      ['Congrio', '$15.000'],
      ['Salmón', '$15.800'],
      ['Congrio a lo pobre', '$18.000'],
      ['Lenguado', '$20.000'],
    ],
  },
  {
    grupo: 'Caldos y mariscos',
    items: [
      ['Paila marina', '$11.000'],
      ['Mariscal frío', '$11.000'],
      ['Pastel de jaiba', '$11.000'],
      ['Caldillo de congrio', '$16.000'],
      ['Paila marina especial', '$16.500'],
      ['Playa mar (loco, pulpo y camarón)', '$20.000'],
    ],
  },
] as const

const PLATOS = [
  { src: 'ceviche.webp', nombre: 'Ceviche de reineta', precio: '$11.000' },
  { src: 'paila.webp', nombre: 'Paila marina', precio: '$11.000' },
  { src: 'mariscal.webp', nombre: 'Mariscal frío', precio: '$11.000' },
  { src: 'empanada.webp', nombre: 'Empanadas de mar', precio: 'desde $4.500' },
] as const

const REVIEWS = [
  {
    nombre: 'Mila Troncoso Matamala',
    texto: 'Muy rico el pescado: corvina, merluza y congrio sabrosos, sin estar con mucho aceite en el caso de los fritos. Precio accesible y bonito el lugar.',
  },
  {
    nombre: 'Mari S.',
    texto: 'Buena vista, la comida rica y abundante. La paila marina buena y la reineta a la mantequilla, rica y fresca.',
  },
] as const

/** La ola de su logo, usada como corte entre la foto del hero y la arena. */
function Ola({ color, className = '' }: { color: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 60"
      className={`block w-full h-[38px] md:h-[60px] ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 60 L0 34 C 140 10, 260 10, 400 30 C 540 50, 660 50, 800 30 C 940 10, 1060 12, 1200 32 L1200 60 Z"
        fill={color}
      />
    </svg>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(8,20,20,0.95)', color: '#FAFAF7' }}>
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-3.5 pr-20 flex items-center gap-2.5">
        <span className="inline-block w-[6px] h-[6px] rounded-full shrink-0" style={{ backgroundColor: '#FFD60A' }} aria-hidden="true" />
        <span>
          Mockup preparado por{' '}
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            Sitiazo
          </a>{' '}
          para {BIZ.name} · así se vería tu sitio.{' '}
          <a href={whatsappLink('contacto')} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2 tap-44">
            ¿Lo hacemos realidad?
          </a>
        </span>
      </div>
    </div>
  )
}

export default function LaPlayaPage() {
  return (
    <div
      className={`${body.className} lp min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.arena, color: C.teal }}
    >
      <style>{`
        .lp a:focus-visible { outline: 2px solid ${C.sol}; outline-offset: 3px }
        .lp .btn { transition: transform 0.16s ease, filter 0.16s ease }
        .lp .btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .lp .btn:active { transform: translateY(0) scale(0.97) }
        .lp img { max-width: 100% }
        .lp-dish { scroll-snap-align: start }
        .lp-scroll { scroll-snap-type: x mandatory; scrollbar-width: none }
        .lp-scroll::-webkit-scrollbar { display: none }
        .lp-carta-item { display: flex; align-items: baseline; gap: 8px; padding: 7px 0; border-bottom: 1px dashed ${C.line} }
        .lp-carta-item:last-child { border-bottom: 0 }
        .lp-carta-item .dots { flex: 1; border-bottom: 2px dotted ${C.line}; transform: translateY(-4px) }
        @media (prefers-reduced-motion: reduce) { .lp * { animation: none !important; transition: none !important } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={display.className}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(244,234,214,0.94)',
          ink: C.teal,
          line: C.line,
          btnBg: C.teal,
          btnInk: C.arena,
        }}
      />

      {/* ── Hero: la mesa frente a la ola ── */}
      <section id="inicio" className="relative">
        <div className="relative aspect-[4/5] md:aspect-[21/9] min-h-[540px] md:min-h-[560px]">
          <Image
            src={`${IMG}/hero.webp`}
            alt="Familia almorzando en la terraza de La Playa con el mar de Llico detrás"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(180deg, rgba(8,40,41,0.25) 0%, rgba(8,40,41,0) 35%, rgba(8,40,41,0.78) 100%)' }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-6xl mx-auto px-5 md:px-8 pb-16 md:pb-20">
              <Reveal>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={`${IMG}/logo.webp`}
                    alt={`Logo de ${BIZ.name}`}
                    width={64}
                    height={64}
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover"
                    style={{ boxShadow: '0 0 0 2px rgba(244,234,214,0.85)' }}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.5)' }}>
                    Restaurant y hostería · {BIZ.city}
                  </p>
                </div>
                <h1 className={`${display.className} text-white text-5xl md:text-8xl font-bold leading-[0.95] tracking-tight`} style={{ textShadow: '0 2px 20px rgba(0,0,0,0.45)' }}>
                  Comer mirando
                  <br />la ola de Llico
                </h1>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full"
                    style={{ backgroundColor: C.arena, color: C.teal }}
                  >
                    Pedir o reservar por WhatsApp
                  </a>
                  <a
                    href="#carta"
                    className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full border-2 text-white"
                    style={{ borderColor: 'rgba(255,255,255,0.85)', backgroundColor: 'rgba(8,40,41,0.4)' }}
                  >
                    Ver la carta
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
          <Ola color={C.arena} className="absolute inset-x-0 bottom-0" />
        </div>
      </section>

      {/* ── Datos a la vista ── */}
      <section className="max-w-6xl mx-auto px-5 md:px-8 py-9">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
          <div className="flex items-center gap-2.5">
            <Stars value={BIZ.rating} color={C.sol} className="w-5 h-5" />
            <span className={`${display.className} text-2xl font-bold`}>{BIZ.rating}</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.tealSoft }}>
            {BIZ.reviewsCount} opiniones en Google
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.tealSoft }}>
            mariscos · pescados · hostería
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.18em]" style={{ color: C.tealSoft }}>
            {BIZ.address}
          </p>
        </div>
      </section>

      {/* ── La carta real ── */}
      <section id="carta" className="border-y" style={{ borderColor: C.line, backgroundColor: C.arenaDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[0.98]`}>
                La carta que ya tienen colgada en la pared
              </h2>
              <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.tealSoft }}>
                Precios reales de la carta del restaurante. El agregado de los
                pescados incluye papas fritas, arroz, puré, ensalada o papa mayo.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid md:grid-cols-2 gap-x-12 gap-y-10">
            {CARTA.map((g, gi) => (
              <Reveal key={g.grupo} delay={gi * 80}>
                <div>
                  <h3 className={`${display.className} text-xl md:text-2xl font-bold uppercase tracking-wide pb-3 mb-1 border-b-2`} style={{ borderColor: C.sol }}>
                    {g.grupo}
                  </h3>
                  <ul>
                    {g.items.map(([nombre, precio]) => (
                      <li key={nombre} className="lp-carta-item">
                        <span className="font-semibold text-sm md:text-base">{nombre}</span>
                        <span className="dots" aria-hidden="true" />
                        <span className="font-mono text-sm md:text-base shrink-0" style={{ color: C.teal }}>
                          {precio}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={160}>
            <div className="mt-10 flex flex-col md:flex-row items-start gap-6">
              <figure
                className="relative overflow-hidden w-full md:w-[340px] shrink-0 aspect-[4/3] rounded-lg"
                style={{ border: `4px solid ${C.teal}`, transform: 'rotate(-1.2deg)', boxShadow: `5px 5px 0 rgba(12,70,71,0.25)` }}
              >
                <Image
                  src={`${IMG}/carta.webp`}
                  alt={`Carta real de ${BIZ.name} con los precios escritos a mano`}
                  fill
                  className="object-cover"
                  sizes="(min-width:768px) 340px, 92vw"
                />
              </figure>
              <p className="font-mono text-xs uppercase tracking-[0.18em] leading-relaxed" style={{ color: C.tealSoft }}>
                Carta transcrita tal cual la tienen en el local · puede variar
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Platos: carrusel ── */}
      <section className="py-16 md:py-20">
        <Reveal>
          <div className="max-w-6xl mx-auto px-5 md:px-8">
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[0.98] max-w-2xl`}>
              Del mar a la mesa
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.tealSoft }}>
              Los platos que la gente fotografía: pescados del día, mariscos en
              paila y empanadas recién fritas.
            </p>
          </div>
        </Reveal>
        <div className="lp-scroll mt-9 flex gap-4 overflow-x-auto px-5 md:px-8 pb-2">
          {PLATOS.map((p) => (
            <figure
              key={p.src}
              className="lp-dish shrink-0 w-[78vw] max-w-[340px] md:w-[340px] rounded-xl overflow-hidden border"
              style={{ borderColor: C.line, backgroundColor: '#FFFDF6' }}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={`${IMG}/${p.src}`}
                  alt={`${p.nombre} de ${BIZ.name}`}
                  fill
                  className="object-cover"
                  sizes="340px"
                />
              </div>
              <figcaption className="px-4 py-3 flex items-baseline justify-between gap-3">
                <span className={`${display.className} font-bold text-base md:text-lg`}>{p.nombre}</span>
                <span className="font-mono text-xs uppercase tracking-widest shrink-0" style={{ color: C.sol }}>
                  {p.precio}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── La terraza y el muelle ── */}
      <section id="terraza" className="border-t" style={{ borderColor: C.line }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-6xl font-bold leading-[0.98] max-w-2xl`}>
              La terraza queda sobre el paseo marítimo
            </h2>
            <p className="mt-4 max-w-xl text-base md:text-lg leading-relaxed" style={{ color: C.tealSoft }}>
              La mesa da directo al mar: abajo está la playa, al lado el muelle
              viejo de Llico y el monumento al pescador.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { src: 'terraza.webp', alt: 'Mesas de la terraza de La Playa con vista al mar', cls: 'col-span-2 aspect-[16/10]' },
              { src: 'entrada.webp', alt: 'Entrada de La Playa junto al paseo', cls: 'aspect-[4/3]' },
              { src: 'muelle.webp', alt: 'Muelle viejo de Llico frente al restaurant', cls: 'aspect-[4/3]' },
            ].map((f, i) => (
              <Reveal key={f.src} delay={i * 90} className={f.cls.split(' ')[0] === 'col-span-2' ? 'col-span-2' : ''}>
                <figure className={`relative rounded-xl overflow-hidden w-full h-full ${f.cls}`}>
                  <Image
                    src={`${IMG}/${f.src}`}
                    alt={f.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width:768px) 25vw, 92vw"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section className="border-t" style={{ borderColor: C.line, backgroundColor: C.teal }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[0.98] max-w-2xl`} style={{ color: C.arena }}>
              Lo que dice la gente que vuelve
            </h2>
          </Reveal>
          <div className="mt-9 grid md:grid-cols-2 gap-4 md:gap-5">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.nombre} delay={i * 90}>
                <blockquote className="h-full rounded-xl p-5 md:p-6 flex flex-col" style={{ backgroundColor: C.arena }}>
                  <Stars value={5} color={C.sol} className="w-4 h-4 mb-3" />
                  <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: C.teal }}>
                    {r.texto}
                  </p>
                  <footer className="mt-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: C.tealSoft }}>
                    {r.nombre} · reseña en Google
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          <Reveal delay={180}>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44"
              style={{ color: 'rgba(244,234,214,0.85)' }}
            >
              Leer las {BIZ.reviewsCount} opiniones en Google Maps
            </a>
          </Reveal>
        </div>
      </section>

      {/* ── Hostería + llegada ── */}
      <section id="llegar" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className={`${display.className} text-4xl md:text-5xl font-bold leading-[0.98]`}>
              También hostería: dormir frente a la playa
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.tealSoft }}>
              El mismo teléfono sirve para reservar mesa y consultar por el
              alojamiento junto al restaurante. Está sobre la avenida que bordea
              la playa de Llico.
            </p>
            <address className="not-italic mt-6">
              <p className="font-semibold">{BIZ.address} · {BIZ.city}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] mt-2" style={{ color: C.tealSoft }}>
                Comuna de Vichuquén · Región del Maule
              </p>
            </address>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full text-white"
                style={{ backgroundColor: C.teal }}
              >
                {BIZ.phoneDisplay}
              </a>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn tap-44 font-bold text-sm px-6 py-3 rounded-full border-2"
                style={{ borderColor: C.teal, color: C.teal }}
              >
                Abrir en Maps
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-xl overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line }}>
              <LazyMap
                src={MAPS_EMBED}
                title={`Mapa: ${BIZ.name} en ${BIZ.city}`}
                className="w-full h-full border-0"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{ backgroundColor: '#0A3334', color: C.arena }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} text-2xl font-bold mb-1.5`}>{BIZ.short}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: 'rgba(244,234,214,0.68)' }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: 'rgba(244,234,214,0.68)' }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,234,214,0.14)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: 'rgba(244,234,214,0.75)' }}>
            Carta con precios reales del restaurante; puede variar. Dirección, teléfono, reseñas, logo y fotos son reales del negocio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
