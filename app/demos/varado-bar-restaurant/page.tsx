import type { Metadata } from 'next'
import Image from 'next/image'
import localFont from 'next/font/local'
import { Reveal, BlitzNav, Stars, WaFab } from '../blitz-kit'
import { demoMetadata } from '../meta'
import { BIZ, WA_LINK, MAPS_URL, MAPS_EMBED, IMG } from './content'
import LazyMap from '../lazy-map'
import { SITE, whatsappLink } from '@/lib/config'

const display = localFont({
  src: [{ path: '../../fonts/oswald/normal-200-700.woff2', weight: '200 700', style: 'normal' }],
  variable: '--font-display',
})
const body = localFont({
  src: [{ path: '../../fonts/manrope/normal-200-800.woff2', weight: '200 800', style: 'normal' }],
  variable: '--font-body',
})

const C = {
  navy: '#0C2B49',
  navyDeep: '#081F37',
  panel: '#123A61',
  cream: '#F4EDDC',
  creamSoft: 'rgba(244,237,220,0.72)',
  red: '#D6452B',
  redDeep: '#B23A24',
  line: 'rgba(244,237,220,0.16)',
}

const SPACING = Object.fromEntries(
  [5, 6, 7, 8, 9, 10, 11, 12].map((n) => [`--spacing-${n}`, `${n * 4}px`]),
)

export const metadata: Metadata = demoMetadata({
  slug: 'varado-bar-restaurant',
  title: 'Varado — Bar Restaurant · Llico, Vichuquén',
  description:
    'Bar restaurant en Av. Ignacio Carrera Pinto, Llico. Empanadas de muchas variedades, salchipapas, pizzas y platos de la casa a la orilla de la laguna.',
  image: `${IMG}/empanadas.webp`,
})

const NAV_LINKS = [
  { label: 'La cocina', href: '#cocina' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Cómo llegar', href: '#llegar' },
]

const PLATOS = [
  { src: 'pizza.webp', nombre: 'Pizzas al tablón', nota: 'recién salidas' },
  { src: 'salchipapas.webp', nombre: 'Salchipapas', nota: 'el clásico de la casa' },
  { src: 'churrasco.webp', nombre: 'A lo pobre', nota: 'churrasco, huevo, papas y ensalada' },
  { src: 'plato.webp', nombre: 'Pastel de choclo', nota: 'con ensalada surtida' },
  { src: 'postre.webp', nombre: 'Postres caseros', nota: 'para cerrar la once' },
] as const

const REVIEWS = [
  {
    nombre: 'María Correa',
    texto: 'Simplemente delicioso: casero, rápido, limpio y la atención cordial. Tienen variedad de ricas empanadas, siempre dan ganas de volver.',
  },
  {
    nombre: 'María Eugenia Rosa',
    texto: 'Muy buen lugar, sencillo. Muy rica comida, todo sabroso y muy buenas proporciones. Lo recomiendo.',
  },
  {
    nombre: 'Lucas Donoso',
    texto: 'Excelente, sin palabras que decir de los helados: un manjar de dioses.',
  },
] as const

/** Banderines de señal: el guiño náutico del bote varado de su logo. */
function Banderines({ className = '' }: { className?: string }) {
  const colores = [C.cream, C.red, C.panel]
  return (
    <div className={`pointer-events-none select-none ${className}`} aria-hidden="true">
      <svg viewBox="0 0 1200 46" className="w-full h-auto" preserveAspectRatio="none">
        <path d="M0 6 Q 600 40 1200 6" fill="none" stroke={C.cream} strokeOpacity="0.5" strokeWidth="2" />
        {Array.from({ length: 14 }).map((_, i) => {
          const x = 40 + i * 84
          const y = 10 + Math.sin(((x / 1200) * Math.PI * 2)) * -14 + 14
          return (
            <path
              key={i}
              d={`M ${x} ${y} L ${x + 34} ${y - 1} L ${x + 17} ${y + 26} Z`}
              fill={colores[i % colores.length]}
              stroke={C.navyDeep}
              strokeWidth="1.5"
            />
          )
        })}
      </svg>
    </div>
  )
}

/** Media luna de empanada dibujada, como el sello de su tarjeta de presentación. */
function EmpanadaSketch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 48" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 34 Q 32 6 56 34 Q 32 46 8 34 Z" />
      <path d="M14 33 Q 18 27 22 32 M26 29 Q 30 23 34 28 M38 28 Q 42 22 46 27 M48 31 Q 52 26 54 31" />
      <path d="M8 34 Q 32 46 56 34" strokeDasharray="3 4" />
    </svg>
  )
}

function SitiazoStrip() {
  return (
    <div className="text-[11px] leading-tight" style={{ backgroundColor: 'rgba(6,15,26,0.95)', color: '#FAFAF7' }}>
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

export default function VaradoPage() {
  return (
    <div
      className={`${body.className} vr min-h-screen antialiased overflow-x-hidden`}
      style={{ ...SPACING, backgroundColor: C.navy, color: C.cream }}
    >
      <style>{`
        .vr a:focus-visible { outline: 2px solid ${C.red}; outline-offset: 3px }
        .vr .btn { transition: transform 0.16s ease, filter 0.16s ease }
        .vr .btn:hover { transform: translateY(-2px); filter: brightness(1.06) }
        .vr .btn:active { transform: translateY(0) scale(0.97) }
        .vr img { max-width: 100% }
        @media (prefers-reduced-motion: reduce) { .vr * { animation: none !important; transition: none !important } }
      `}</style>

      <BlitzNav
        name={BIZ.short}
        links={NAV_LINKS}
        waLink={WA_LINK}
        fontClass={`${display.className} uppercase tracking-wide`}
        logoSrc={`${IMG}/logo.webp`}
        theme={{
          over: 'dark',
          bar: 'rgba(8,31,55,0.94)',
          ink: C.cream,
          line: C.line,
          btnBg: C.cream,
          btnInk: C.navyDeep,
        }}
      />

      {/* ── Hero: la tarjeta del bar ── */}
      <section id="inicio" className="relative overflow-hidden" style={{ backgroundColor: C.navyDeep }}>
        <Banderines className="absolute top-[60px] md:top-[68px] inset-x-0 opacity-90" />
        <div className="max-w-6xl mx-auto px-5 md:px-8 pt-[150px] md:pt-[170px] pb-16 md:pb-24 grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <div>
            <Reveal>
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={`${IMG}/logo.webp`}
                  alt={`Logo de ${BIZ.name}: un bote varado`}
                  width={96}
                  height={96}
                  className="h-20 w-20 md:h-24 md:w-24 rounded-full object-cover"
                  style={{ boxShadow: `0 0 0 2px ${C.cream}` }}
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.24em]" style={{ color: C.red }}>
                  Bar · Restaurant · {BIZ.city}
                </p>
              </div>
              <h1 className={`${display.className} uppercase leading-[0.92] text-6xl md:text-8xl font-semibold`}>
                Varado
              </h1>
              <p className={`${display.className} uppercase tracking-[0.18em] text-lg md:text-2xl mt-2`} style={{ color: C.creamSoft }}>
                el bar a la orilla de Llico
              </p>
              <p className="mt-6 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.creamSoft }}>
                Amplia variedad en empanadas — lo dice su propia tarjeta — más
                salchipapas, pizzas y platos de la casa, a pasos de la laguna de
                Vichuquén.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn tap-44 font-semibold text-sm px-6 py-3 rounded-full"
                  style={{ backgroundColor: C.cream, color: C.navyDeep }}
                >
                  Pedir por WhatsApp
                </a>
                <a
                  href={`tel:${BIZ.phoneTel}`}
                  className="btn tap-44 font-semibold text-sm px-6 py-3 rounded-full border-2"
                  style={{ borderColor: C.cream, color: C.cream }}
                >
                  Llamar
                </a>
              </div>
              <p className="mt-6 font-mono text-xs" style={{ color: C.creamSoft }}>
                {BIZ.address} · {BIZ.city}
              </p>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <figure
              className="relative rounded-xl p-3 pb-14 rotate-2 shadow-2xl"
              style={{ backgroundColor: C.cream }}
            >
              <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                <Image
                  src={`${IMG}/empanadas.webp`}
                  alt="Empanadas de Varado servidas en la mesa del patio"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 46vw, 92vw"
                  priority
                />
              </div>
              <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className={`${display.className} uppercase tracking-wide text-lg`} style={{ color: C.navyDeep }}>
                  Las empanadas
                </span>
                <EmpanadaSketch className="w-12 h-9" />
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ── Nota de la casa: rating ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.navy }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-3">
            <Stars value={BIZ.rating} color={C.red} className="w-5 h-5" />
            <span className={`${display.className} text-3xl font-semibold`}>{BIZ.rating}</span>
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: C.creamSoft }}>
            {BIZ.reviewsCount} opiniones en Google
          </p>
          <p className="font-mono text-xs uppercase tracking-[0.2em]" style={{ color: C.creamSoft }}>
            abierto todos los días
          </p>
          <a
            href={`https://instagram.com/varadosllico`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44"
            style={{ color: C.cream }}
          >
            {BIZ.ig}
          </a>
        </div>
      </section>

      {/* ── La cocina: platos reales ── */}
      <section id="cocina" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <div className="max-w-xl">
            <h2 className={`${display.className} uppercase text-4xl md:text-6xl font-semibold leading-[0.95]`}>
              Lo que sale de la cocina de la orilla
            </h2>
            <p className="mt-4 text-base md:text-lg leading-relaxed" style={{ color: C.creamSoft }}>
              Comida casera y contundente: la carta cambia con el día, pero estos
              platos son los que la gente sube a Google.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {PLATOS.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 70}
              className={i === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <figure
                className="rounded-lg overflow-hidden border"
                style={{ borderColor: C.line, backgroundColor: C.panel }}
              >
                <div className={`relative ${i === 0 ? 'aspect-[4/3] lg:aspect-auto lg:h-[86%]' : 'aspect-[4/3]'}`}>
                  <Image
                    src={`${IMG}/${p.src}`}
                    alt={`${p.nombre} de ${BIZ.name}`}
                    fill
                    className="object-cover"
                    sizes="(min-width:1024px) 30vw, 46vw"
                  />
                </div>
                <figcaption className="px-3 py-2.5 flex items-baseline justify-between gap-2">
                  <span className={`${display.className} uppercase tracking-wide text-sm md:text-base`}>{p.nombre}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest shrink-0" style={{ color: C.creamSoft }}>
                    {p.nota}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Las empanadas: la firma de la casa ── */}
      <section className="border-y" style={{ borderColor: C.line, backgroundColor: C.panel }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="flex items-center gap-3 mb-5" style={{ color: C.red }}>
              <EmpanadaSketch className="w-14 h-11" />
              <EmpanadaSketch className="w-14 h-11 -rotate-12 opacity-60" />
            </div>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl font-semibold leading-[0.95]`}>
              Las que hacen volver a la gente
            </h2>
            <p className="mt-5 text-base md:text-lg leading-relaxed max-w-md" style={{ color: C.creamSoft }}>
              “Amplia variedad en empanadas” es el titular de su propia tarjeta,
              y las opiniones lo repiten: es lo que más se menciona del bar. El
              resto de la carta corre por las jugos naturales, los postres y el
              completo menú del día.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <figure className="relative rounded-lg overflow-hidden aspect-[3/4] border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/interior.webp`}
                  alt={`Comedor de ${BIZ.name} con plantas y madera`}
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 23vw, 46vw"
                />
              </figure>
              <figure className="relative rounded-lg overflow-hidden aspect-[3/4] mt-8 border" style={{ borderColor: C.line }}>
                <Image
                  src={`${IMG}/ventana.webp`}
                  alt="Vista al patio verde desde el interior de Varado"
                  fill
                  className="object-cover"
                  sizes="(min-width:1024px) 23vw, 46vw"
                />
              </figure>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Opiniones reales ── */}
      <section id="opiniones" className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24">
        <Reveal>
          <h2 className={`${display.className} uppercase text-4xl md:text-6xl font-semibold leading-[0.95] max-w-2xl`}>
            “Siempre dan ganas de volver”
          </h2>
        </Reveal>
        <div className="mt-10 grid md:grid-cols-3 gap-4 md:gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.nombre} delay={i * 90}>
              <blockquote
                className="h-full rounded-lg border p-5 flex flex-col"
                style={{ borderColor: C.line, backgroundColor: C.panel }}
              >
                <Stars value={5} color={C.red} className="w-4 h-4 mb-3" />
                <p className="text-sm md:text-base leading-relaxed flex-1" style={{ color: C.cream }}>
                  {r.texto}
                </p>
                <footer className="mt-4 font-mono text-[11px] uppercase tracking-widest" style={{ color: C.creamSoft }}>
                  {r.nombre} · reseña en Google
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 font-mono text-xs uppercase tracking-[0.2em] underline underline-offset-4 tap-44"
            style={{ color: C.creamSoft }}
          >
            Leer las {BIZ.reviewsCount} opiniones en Google Maps
          </a>
        </Reveal>
      </section>

      {/* ── Dónde vara el bote ── */}
      <section id="llegar" className="border-t" style={{ borderColor: C.line, backgroundColor: C.navyDeep }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-16 md:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <h2 className={`${display.className} uppercase text-4xl md:text-5xl font-semibold leading-[0.95]`}>
              A la orilla del camino en Llico
            </h2>
            <address className="not-italic mt-6 space-y-4">
              <p className="text-lg font-semibold">{BIZ.address} · {BIZ.city}</p>
              <p className="text-sm leading-relaxed max-w-md" style={{ color: C.creamSoft }}>
                Comuna de Vichuquén, Región del Maule. Abierto todos los días;
                para llevar y pedidos por WhatsApp.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn tap-44 font-semibold text-sm px-6 py-3 rounded-full"
                  style={{ backgroundColor: C.cream, color: C.navyDeep }}
                >
                  {BIZ.phoneDisplay}
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn tap-44 font-semibold text-sm px-6 py-3 rounded-full border-2"
                  style={{ borderColor: C.cream, color: C.cream }}
                >
                  Abrir en Maps
                </a>
              </div>
            </address>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-lg overflow-hidden border aspect-[4/3]" style={{ borderColor: C.line }}>
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
      <footer style={{ backgroundColor: '#050F1B', color: C.cream }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-7 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <p className={`${display.className} uppercase text-2xl mb-1.5 font-semibold`}>{BIZ.short}</p>
            <address className="not-italic text-sm leading-relaxed" style={{ color: C.creamSoft }}>
              {BIZ.address} · {BIZ.city}, {BIZ.region}
              <br />
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors tap-44">
                {BIZ.phoneDisplay}
              </a>
            </address>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm" style={{ color: C.creamSoft }}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-white transition-colors tap-44">
                {l.label}
              </a>
            ))}
          </div>
        </div>
        <div className="border-t" style={{ borderColor: 'rgba(244,237,220,0.12)' }}>
          <p className="max-w-6xl mx-auto px-5 md:px-8 py-4 text-xs leading-relaxed" style={{ color: C.creamSoft }}>
            Textos de muestra. Dirección, teléfono, reseñas, logo y fotos son reales del negocio.
          </p>
        </div>
      </footer>

      <SitiazoStrip />
      <WaFab href={WA_LINK} label={`Escribir por WhatsApp a ${BIZ.name}`} />
    </div>
  )
}
